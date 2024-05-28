/**
 * @file components/Mui/AutocompleteKpis.tsx
 * @desc This file controls the KPI values in Autocomplete.
 */

"use client";

import { PORTFOLIO_COMPANIES } from "@/data/portfolio";
import type { PortfolioCompany } from "@/types";
import Autocomplete, { AutocompleteProps } from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import React from "react";

type AutocompleteCompanyProps = {
  company: string;
  setCompany: React.Dispatch<React.SetStateAction<string>>;
} & Omit<AutocompleteProps<PortfolioCompany | string, false, false, true>, "children" | "renderInput" | "options">;

function getLabel(option: string | PortfolioCompany): string {
  return typeof option === "string" ? option : option.name;
}

const AutocompleteCompany: React.FC<AutocompleteCompanyProps> = ({ company, setCompany, className = "", ...props }) => (
  <Autocomplete
    {...props}
    freeSolo={true}
    options={PORTFOLIO_COMPANIES}
    getOptionLabel={(option: string | PortfolioCompany) => (typeof option === "string" ? option : option.no.length > 0 ? `${option.no}.${option.name}` : option.name)}
    isOptionEqualToValue={(option: string | PortfolioCompany, value: string | PortfolioCompany) => getLabel(option) === getLabel(value)}
    className={`w-full text-xl ${className}`}
    value={{ no: "", name: company, invested: false }}
    size="small"
    onChange={(evt, newValue: string | PortfolioCompany | null) => {
      if (newValue !== null) {
        if (typeof newValue === "string") {
          setCompany(newValue);
        } else {
          setCompany(newValue.name);
        }
      }
    }}
    ChipProps={{ className: "bg-orange-200" }}
    renderInput={(params) => <TextField {...params} label="企業名" />}
  />
);

export default AutocompleteCompany;
