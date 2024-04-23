/**
 * XlSheetNames.tsx
 * This file contains the component for the Excel sheet names.
 * @file src/components/Excel/XlSheetNames.tsx
 * @module Excel/XlSheetNames
 */

import * as React from "react";

import type { HTMLDivProps } from "@/types/html";
import * as wjcXlsx from "@mescius/wijmo.xlsx";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";

type XlSheetNamesProps = {
  workbook: wjcXlsx.Workbook;
  sheetIndex: number;
  setSheetIndex: React.Dispatch<React.SetStateAction<number>>;
} & HTMLDivProps;

const XlSheetNames: React.FC<XlSheetNamesProps> = ({ workbook, sheetIndex, setSheetIndex, className = "", ...props }) => {
  return (
    <div {...props} className={`w-full ${className}`}>
      <Tabs
        value={sheetIndex}
        onChange={(evt: React.SyntheticEvent<Element, Event>, val) => {
          setSheetIndex(val);
        }}
        TabIndicatorProps={{
          style: {
            backgroundColor: "rgb(248, 250, 252)",
            height: "4px",
          },
        }}
        textColor="inherit"
        variant="scrollable"
        scrollButtons="auto"
        aria-label="sheet name tabs"
        className="bg-green-700 text-slate-50 p-0"
      >
        {workbook.sheets.map((sheet: wjcXlsx.WorkSheet, i: number) => (
          <Tab key={i} value={i} label={sheet.name} />
        ))}
      </Tabs>
    </div>
  );
};

export default XlSheetNames;
