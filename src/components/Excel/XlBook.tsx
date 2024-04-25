/**
 *
 * @returns
 */

import React from "react";

import Xltrow from "@/components/Excel/Xltrow";
import { KpiInfo } from "@/types";
import { HTMLTableProps } from "@/types/html";
import * as wjcXlsx from "@mescius/wijmo.xlsx";

type XlBookProps = {
  worksheet: wjcXlsx.WorkSheet;
  kpis: KpiInfo[];
  dateRowIdx?: number;
  kpiColIdx?: number;
  maxRows?: number;
  maxColumns?: number;
} & HTMLTableProps;

const XlBook: React.FC<XlBookProps> = ({ worksheet, kpis, dateRowIdx = 0, kpiColIdx = 0, maxColumns = 100, maxRows = 200, className = "", ...props }) => {
  if (!worksheet) {
    return <div className="text-red-100">Please Upload the Excel File Correctly</div>;
  }

  const columns = worksheet.columns || [];
  const use_rows = worksheet.rows.filter((row: wjcXlsx.WorkbookRow) => row === undefined || row.visible).slice(0, maxRows);

  /** Calculate the largest number of Rows or Columns */
  let maxRowCells: number = columns.length;
  for (let row of use_rows) {
    if (row && row.cells) {
      maxRowCells = Math.max(maxRowCells, row.cells.length);
    }
  }
  maxRowCells = Math.min(maxRowCells, maxColumns);

  return (
    <div className="w-full overflow-x-auto h-full">
      <table className={`border-collapse table-fixd w-full shadow-md rounded-xl bg-white text-slate-800 ${className}`} {...props}>
        <colgroup>
          {columns
            .filter((col) => col.visible)
            .slice(0, maxRowCells)
            .map((col, i: number) => (
              <col key={i} width={col.autoWidth ? "" : col.width != null ? `${col.width}px` : "60px"}></col>
            ))}
        </colgroup>
        <tbody className="table-row-group">
          {use_rows.map((row: wjcXlsx.WorkbookRow, i: number) => (
            <Xltrow
              key={`row-${i}`}
              rowIdx={i}
              wbrow={row}
              columns={columns}
              maxRows={maxRowCells}
              invisColCnt={columns.filter((col) => col.visible === false).length}
              kpiColIdx={kpiColIdx}
              dateRowIdx={dateRowIdx}
              isKpiTargetRow={kpis.some((kpi) => kpi.row === i)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default XlBook;
