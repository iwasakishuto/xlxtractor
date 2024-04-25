/**
 * Wijmo interop utilities for Excel IO.
 * @module xl_utils
 */

import type { JsonData, KpiInfo } from "@/types";

import * as wjcCore from "@mescius/wijmo";
import * as wjcXlsx from "@mescius/wijmo.xlsx";

/**
 * Style the html element based on the given xlsx style.
 * @param cssStyle The css style to be updated.
 * @param xlsxStyle The xlsx style to be imported.
 */
export function importXlStyle(cssStyle: CSSStyleDeclaration, xlsxStyle: wjcXlsx.WorkbookStyle) {
  if (!xlsxStyle) {
    return;
  }
  if (xlsxStyle.fill) {
    if (xlsxStyle.fill.color) {
      cssStyle.backgroundColor = xlsxStyle.fill.color;
    }
  }
  if (xlsxStyle.hAlign && xlsxStyle.hAlign != wjcXlsx.HAlign.Fill) {
    cssStyle.textAlign = wjcXlsx.HAlign[xlsxStyle.hAlign].toLowerCase();
  }
  let font = xlsxStyle.font;
  if (font) {
    if (font.family) {
      cssStyle.fontFamily = font.family;
    }
    if (font.bold) {
      cssStyle.fontWeight = "bold";
    }
    if (font.italic) {
      cssStyle.fontStyle = "italic";
    }
    if (font.size != null) {
      cssStyle.fontSize = font.size + "px";
    }
    if (font.underline) {
      cssStyle.textDecoration = "underline";
    }
    if (font.color) {
      cssStyle.color = font.color;
    }
  }
}

/**
 * Get the visible column span.
 * @param columns The columns to be checked.
 * @param startFrom The starting index.
 * @param colSpan The column span.
 * @returns The visible column span.
 */
export function getVisColSpan({ columns, startFrom, colSpan }: { columns: wjcXlsx.WorkbookColumn[]; startFrom: number; colSpan: number }): number {
  let res = colSpan;
  for (let i = startFrom; i < columns.length && i < startFrom + colSpan; i++) {
    let col = columns[i];
    if (col && !col.visible) {
      res--;
    }
  }
  return res;
}

/**
 *
 * @param cell {wjcXlsx.WorkbookCell} The cell to be converted.
 * @returns {string} The value of the cell.
 */
export function cell2value(cell: wjcXlsx.WorkbookCell): string {
  let value: string = cell.value;
  if (!(value == null || value !== value)) {
    // TBD: check for NaN should be eliminated
    if (wjcCore.isString(value) && value.charAt(0) == "'") {
      value = value.substring(1);
    }
    let netFormat: string | undefined = undefined;
    if (cell.style && cell.style.format) {
      netFormat = wjcXlsx.Workbook.fromXlsxFormat(cell.style.format)[0];
    }
    let fmtValue = netFormat !== undefined && netFormat.length > 0 ? wjcCore.Globalize.format(value, netFormat) : value;
    value = wjcCore.escapeHtml(fmtValue);
  } else if (value === null) {
    value = "";
  }
  return value;
}

export function collectKPIdata({ sheet, kpis, kpiColIdx, dateRowIdx }: { sheet: wjcXlsx.WorkSheet; kpis: KpiInfo[]; kpiColIdx: number; dateRowIdx: number }) {
  const columns: wjcXlsx.WorkbookColumn[] = sheet.columns || [];

  /**
   * @description Get the key and values of the KPI.
   * @param row {wjcXlsx.WorkbookRow}
   * @param kpiColIdx {number}
   * @returns {[string, string[]]} The key and values of the KPI.
   */
  function getKpiKeyValues(row: wjcXlsx.WorkbookRow, kpiColIdx: number): [string, string[]] {
    let key: string = "";
    let values: string[] = [];
    row.cells.forEach((cell, c) => {
      let col = columns[c];
      if (col === undefined || col.visible) {
        if (c === kpiColIdx) {
          key = cell2value(cell);
        }
        if (c > kpiColIdx) {
          values.push(cell2value(cell));
        }
      }
    });
    return [key, values];
  }
  const data: JsonData = {
    Date: [],
    KPIs: {},
    excelFilename: "",
  };

  if (sheet.rows) {
    sheet.rows
      .filter((row: wjcXlsx.WorkbookRow) => row === undefined || row.visible)
      .forEach((row: wjcXlsx.WorkbookRow, i: number) => {
        if (i === dateRowIdx) {
          let [_, values] = getKpiKeyValues(row, kpiColIdx);
          data.Date = values;
        }
        if (kpis.some((kpi) => kpi.row === i)) {
          let [key, values] = getKpiKeyValues(row, kpiColIdx);
          data.KPIs[key] = values;
        }
      });
  }
  return data;
}

/**
 * @description Get the cell value.
 * @param wbrow {wjcXlsx.WorkbookRow} The row to be checked.
 * @param columns {wjcXlsx.WorkbookColumn[]} The columns to be checked.
 * @param idx {number} The index of the row.
 * @returns
 */
export function get_cell_info({ wbrow, columns, idx }: { wbrow: wjcXlsx.WorkbookRow; columns: wjcXlsx.WorkbookColumn[]; idx: number }) {
  let num_cell: number = 0,
    value: string | null = null,
    colSpan: number = 1,
    rowSpan: number = 1,
    cell: wjcXlsx.WorkbookCell = wbrow.cells[idx],
    col: wjcXlsx.WorkbookColumn = columns[idx];
  if (col === undefined || col.visible) {
    num_cell++;
    if (cell) {
      value = cell2value(cell);
      if (cell.colSpan && cell.colSpan > 1) {
        colSpan = getVisColSpan({ columns: columns, startFrom: idx, colSpan: cell.colSpan });
        num_cell += colSpan - 1;
        idx += cell.colSpan - 1;
      }
      if (cell.rowSpan) {
        rowSpan = cell.rowSpan;
      }
    } else {
      value = ""; // Not null
    }
  }
  return {
    value: value,
    rowSpan: rowSpan,
    colSpan: colSpan,
    num_cell: num_cell,
    idx: idx,
  };
}
