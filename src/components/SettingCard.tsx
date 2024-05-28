/**
 * @file excel/page.tsx
 * @desc This file contains the main page component for the excel module.
 */

"use client";

import AutocompleteCompany from "@/components/Mui/AutocompleteCompany";
import AutocompleteKpis from "@/components/Mui/AutocompleteKpis";
import NumberInput from "@/components/Mui/NumberInput";
import { SnackbarContext } from "@/context/SnackbarContext";
import { downloadJson } from "@/lib/utils";
import { collectKPIdata } from "@/lib/xl_utils";
import type { KpiInfo } from "@/types";
import * as wjcXlsx from "@mescius/wijmo.xlsx";
import DownloadIcon from "@mui/icons-material/Download";
import SettingsIcon from "@mui/icons-material/Settings";
import Button from "@mui/material/Button";
import Card, { CardProps } from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Grid from "@mui/material/Grid";
import React, { useContext } from "react";

const InputGrid = ({ label, num, setNum, disabled }: { label: string; num: number; setNum: React.Dispatch<React.SetStateAction<number>>; disabled: boolean }) => (
  <Grid key={label} xs={12} sm={6} container className="items-center">
    <label className="ml-auto mr-1" id="dispColumns">
      {label}：
    </label>
    <NumberInput
      id="dispColumns"
      value={num}
      onChange={(evt) => {
        if (evt.target instanceof HTMLInputElement) {
          setNum(Number(evt.target.value));
        }
      }}
      onInputChange={(evt) => {
        if (evt.target instanceof HTMLInputElement) {
          setNum(Number(evt.target.value));
        }
      }}
      className="w-16 mr-auto"
      disabled={disabled}
    />
  </Grid>
);

type SettingCardProps = {
  sheet: wjcXlsx.WorkSheet | null;
  excelFilename: string;
  setExcelFilename: React.Dispatch<React.SetStateAction<string>>;
  company: string;
  setCompany: React.Dispatch<React.SetStateAction<string>>;
  kpiColIdx: number;
  setKpiColIdx: React.Dispatch<React.SetStateAction<number>>;
  dateRowIdx: number;
  setDateRowIdx: React.Dispatch<React.SetStateAction<number>>;
  kpis: KpiInfo[];
  setKpis: React.Dispatch<React.SetStateAction<KpiInfo[]>>;
  kpiOptions: KpiInfo[];
  dispColumns: number;
  setDispColumns: React.Dispatch<React.SetStateAction<number>>;
  dispRows: number;
  setDispRows: React.Dispatch<React.SetStateAction<number>>;
  maxColumns: number;
  maxRows: number;
} & Omit<CardProps, "children">;

const SettingCard: React.FC<SettingCardProps> = ({
  sheet,
  excelFilename,
  setExcelFilename,
  company,
  setCompany,
  kpiColIdx,
  setKpiColIdx,
  dateRowIdx,
  setDateRowIdx,
  kpis,
  setKpis,
  kpiOptions,
  dispColumns,
  setDispColumns,
  dispRows,
  setDispRows,
  maxColumns,
  maxRows,
  className = "",
  ...props
}) => {
  const { showAlertSnack } = useContext(SnackbarContext)!;

  return (
    <Card {...props} className={`max-w-md px-4 py-2 min-w-80 mx-auto bg-slate-50 overflow-y-auto ${className}`}>
      <CardHeader action={<SettingsIcon className="mr-1" />} title="設定" className="border-b-2 border-slate-400 pb-1" />
      <CardContent>
        <Grid container spacing={1} className="mt-4">
          {excelFilename.length > 0 && (
            <Grid container>
              <Grid container xs={12} className="mb-4 items-center w-full">
                <span className="mr-auto">Excel：</span>
                <code className="ml-auto">{excelFilename}</code>
              </Grid>
              <Grid container xs={12} className="mb-4 items-center w-full">
                <AutocompleteCompany company={company} setCompany={setCompany} />
              </Grid>
              <Grid container xs={12} className="mb-4 w-full">
                <Grid item xs={12} sm={6} className="items-center flex">
                  <span className="ml-auto">最大列数：</span>
                  <code className="mr-auto">{maxColumns}</code>
                </Grid>
                <Grid item xs={12} sm={6} className="items-center flex">
                  <span className="ml-auto">最大行数：</span>
                  <code className="mr-auto">{maxRows}</code>
                </Grid>
              </Grid>
            </Grid>
          )}
          <Grid container className="mb-6 items-center">
            <InputGrid label="列数" num={dispColumns} setNum={setDispColumns} disabled={sheet === null} />
            <InputGrid label="行数" num={dispRows} setNum={setDispRows} disabled={sheet === null} />
          </Grid>
          <Grid container className="mb-6 items-center">
            <InputGrid label="KPI列" num={kpiColIdx} setNum={setKpiColIdx} disabled={sheet === null} />
            <InputGrid label="日付行" num={dateRowIdx} setNum={setDateRowIdx} disabled={sheet === null} />
          </Grid>
          <Grid item xs={12}>
            <AutocompleteKpis sheet={sheet} kpis={kpis} setKpis={setKpis} kpiOptions={kpiOptions} />
          </Grid>
          <Grid item xs={12} className="mt-8">
            <Button
              className="normal-case font-bold w-full py-2 bg-green-700 text-slate-100 hover:bg-green-600 hover:text-white"
              endIcon={<DownloadIcon />}
              onClick={(evt: React.MouseEvent<HTMLButtonElement>) => {
                if (sheet !== null) {
                  const filename = excelFilename + ".kpi.json";
                  const data = collectKPIdata({
                    sheet: sheet,
                    kpis: kpis,
                    kpiColIdx: kpiColIdx,
                    dateRowIdx: dateRowIdx,
                  });
                  data.excelFilename = excelFilename;
                  data.sheetName = sheet.name;
                  data.company = company;
                  downloadJson(data, filename);
                  showAlertSnack({ message: `KPI file '${filename}' was downloaded successfully`, severity: "success" });
                } else {
                  showAlertSnack({ message: "Please Upload the Excel File Correctly", severity: "error" });
                }
              }}
            >
              Download KPIs
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default SettingCard;
