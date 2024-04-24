/**
 *
 * @returns
 */

import React from "react";

import { get_cell_info } from "@/lib/xl_utils";
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
    let cell_info = get_cell_info({ wbrow: wbrow, columns: columns, idx: c });
    if (cell_info.value !== null) {
      tdProps.push({
        colSpan: cell_info.colSpan,
        rowSpan: cell_info.rowSpan,
        value: cell_info.value,
      });
      cellsCnt += cell_info.num_cell;
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
