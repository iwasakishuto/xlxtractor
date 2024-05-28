/**
 * @file components/Mui/AutocompleteKpis.tsx
 * @desc This file controls the KPI values in Autocomplete.
 */

"use client";

import type { KpiInfo } from "@/types";
import * as wjcXlsx from "@mescius/wijmo.xlsx";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import Autocomplete, { AutocompleteProps } from "@mui/material/Autocomplete";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import React from "react";

type AutocompleteKpisProps = {
  sheet: wjcXlsx.WorkSheet | null;
  kpis: KpiInfo[];
  setKpis: React.Dispatch<React.SetStateAction<KpiInfo[]>>;
  kpiOptions: KpiInfo[];
} & Omit<AutocompleteProps<KpiInfo, true, false, false>, "children" | "renderInput" | "options">;

const AutocompleteKpis: React.FC<AutocompleteKpisProps> = ({ sheet, kpis, setKpis, kpiOptions, className = "", ...props }) => (
  <Autocomplete
    {...props}
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
    className={`w-full text-xl ${className}`}
    value={kpis}
    size="small"
    onChange={(evt: React.SyntheticEvent<Element, Event>, newValue: KpiInfo[]) => {
      setKpis(newValue);
    }}
    ChipProps={{ className: "bg-orange-200" }}
    disabled={sheet === null}
  />
);

export default AutocompleteKpis;
