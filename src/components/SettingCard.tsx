/**
 * @file excel/page.tsx
 * @desc This file contains the main page component for the excel module.
 */

"use client";

import NumberInput from "@/components/Mui/NumberInput";
import { SnackbarContext } from "@/context/SnackbarContext";
import { downloadJson } from "@/lib/utils";
import { collectKPIdata } from "@/lib/xl_utils";
import type { KpiInfo } from "@/types";
import * as wjcXlsx from "@mescius/wijmo.xlsx";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import DownloadIcon from "@mui/icons-material/Download";
import SettingsIcon from "@mui/icons-material/Settings";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import Card, { CardProps } from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import React, { useContext } from "react";

type SettingCardProps = {
  sheet: wjcXlsx.WorkSheet | null;
  excelFilename: string;
  setExcelFilename: React.Dispatch<React.SetStateAction<string>>;
  kpiColIdx: number;
  setKpiColIdx: React.Dispatch<React.SetStateAction<number>>;
  dateRowIdx: number;
  setDateRowIdx: React.Dispatch<React.SetStateAction<number>>;
  kpis: KpiInfo[];
  setKpis: React.Dispatch<React.SetStateAction<KpiInfo[]>>;
  kpiOptions: KpiInfo[];
} & Omit<CardProps, "children">;

const SettingCard: React.FC<SettingCardProps> = ({
  sheet,
  excelFilename,
  setExcelFilename,
  kpiColIdx,
  setKpiColIdx,
  dateRowIdx,
  setDateRowIdx,
  kpis,
  setKpis,
  kpiOptions,
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
            <Grid container xs={12} className="mb-6 items-center">
              <span className="ml-auto">Excel：</span>
              <code className="mr-auto">{excelFilename}</code>
              {/* <Input
              id="excel-filenmae"
              value={excelFilename}
              onChange={(evt: React.ChangeEvent<HTMLInputElement>) => {
                setExcelFilename(evt.target.value);
              }}
              className="mr-auto"
              disabled={sheet === null}
            ></Input> */}
            </Grid>
          )}
          <Grid xs={12} sm={6} container className="items-center">
            <label className="ml-auto mr-1" id="kpi">
              KPI列：
            </label>
            <NumberInput
              id="kpi"
              value={kpiColIdx}
              onChange={(evt) => {
                if (evt.target instanceof HTMLInputElement) {
                  setKpiColIdx(Number(evt.target.value));
                }
              }}
              className="w-16 mr-auto"
              disabled={sheet === null}
            />
          </Grid>
          <Grid xs={12} sm={6} container className="items-center">
            <label className="ml-auto mr-1" htmlFor="date">
              日付行：
            </label>
            <NumberInput
              id="date"
              value={dateRowIdx}
              onChange={(evt) => {
                if (evt.target instanceof HTMLInputElement) {
                  setDateRowIdx(Number(evt.target.value));
                }
              }}
              className="w-16 mr-auto"
              disabled={sheet === null}
            />
          </Grid>
          <Grid item xs={12} className="mt-6">
            <Autocomplete
              multiple
              disableCloseOnSelect
              options={kpiOptions}
              getOptionLabel={(option: KpiInfo) => option.label}
              isOptionEqualToValue={(option: KpiInfo, value: KpiInfo) => option.row === value.row}
              renderOption={({ className = "", ...props }, option: KpiInfo, { selected }) => (
                <li {...props} className={`${className} text-sm`} key={option.row}>
                  <Checkbox icon={<CheckBoxOutlineBlankIcon fontSize="small" />} checkedIcon={<CheckBoxIcon fontSize="small" />} checked={selected} className="mr-2 py-0" />
                  {option.label}
                </li>
              )}
              renderInput={(params) => <TextField {...params} label="KPIs" placeholder="[Alt] + [↓]" />}
              className="w-full text-xl"
              value={kpis}
              size="small"
              onChange={(evt: React.SyntheticEvent<Element, Event>, newValue: KpiInfo[]) => {
                setKpis(newValue);
                console.log(["newValue", newValue]);
              }}
              ChipProps={{ className: "bg-orange-200" }}
              disabled={sheet === null}
            />
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
