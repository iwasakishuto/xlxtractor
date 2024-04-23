/**
 *
 * @returns
 */

import React from "react";

import { cell2value, getVisColSpan } from "@/lib/xl_utils";
import type { HTMLTableRowProps } from "@/types";
import * as wjcXlsx from "@mescius/wijmo.xlsx";

type XltrowProps = {
  wbrow: wjcXlsx.WorkbookRow;
  columns: wjcXlsx.WorkbookColumn[];
  rowIdx: number;
  maxRows?: number;
  kpiColIdx?: number;
  dateRowIdx?: number;
  invisColCnt?: number;
  isKpiTargetRow?: boolean;
} & HTMLTableRowProps;

const Xltrow: React.FC<XltrowProps> = ({
  wbrow,
  columns,
  rowIdx,
  maxRows = 100,
  invisColCnt = 0,
  isKpiTargetRow = false,
  kpiColIdx = 0,
  dateRowIdx = 0,
  className = "",
  ...props
}) => {
  const tdProps: {
    colSpan: number;
    rowSpan: number;
    value: string;
  }[] = [];

  let cellsCnt: number = 0;
  for (let c = 0; wbrow.cells && c < wbrow.cells.length; c++) {
    let cell = wbrow.cells[c],
      col = columns[c];
    if (col === undefined || col.visible) {
      let value: string = "";
      let colSpan: number = 1;
      let rowSpan: number = 1;
      cellsCnt++;
      if (cell) {
        value = cell2value(cell);
        if (cell.colSpan && cell.colSpan > 1) {
          colSpan = getVisColSpan({ columns: columns, startFrom: c, colSpan: cell.colSpan });
          cellsCnt += colSpan - 1;
          // c += cell.colSpan - 1;
        }
        if (cell.rowSpan) {
          rowSpan = cell.rowSpan;
        }
      }
      tdProps.push({
        colSpan: colSpan,
        rowSpan: rowSpan,
        value: value,
      });
    }
  }
  let padCellsCount = maxRows - cellsCnt - invisColCnt;
  for (let i = 0; i < padCellsCount; i++) {
    tdProps.push({
      colSpan: 1,
      rowSpan: 1,
      value: "",
    });
  }

  return (
    <tr {...props} className={`border-slate-800 border-2 table-wbrow align-middle ${className}`}>
      {tdProps.map(({ colSpan, rowSpan, value }, i) => (
        <td
          key={i}
          className={`truncate px-2 py-1 border border-1 border-slate-800 max-w-48 ${
            rowIdx === dateRowIdx && i >= kpiColIdx
              ? `bg-yellow-300 ${i === kpiColIdx ? "font-bold" : ""}`
              : isKpiTargetRow && i >= kpiColIdx
              ? `bg-amber-400 ${i === kpiColIdx ? "font-bold" : ""}`
              : i === kpiColIdx
              ? "bg-red-300 font-bold"
              : ""
          }`}
          colSpan={colSpan}
          rowSpan={rowSpan}
        >
          {value}
        </td>
      ))}
    </tr>
  );
};

export default Xltrow;
