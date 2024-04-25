/**
 * @file excel/page.tsx
 * @desc This file contains the main page component for the excel module.
 */

"use client";

import { SnackbarContext } from "@/context/SnackbarContext";
import { site_url } from "@/data/const";
import { downloadUrl } from "@/lib/utils";
import DownloadIcon from "@mui/icons-material/Download";
import Button from "@mui/material/Button";
import Card, { CardProps } from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import React, { useContext } from "react";
import urlJoin from "url-join";

type SampleExcelCardProps = {} & Omit<CardProps, "children">;

const SampleExcelCard: React.FC<SampleExcelCardProps> = ({ className = "", ...props }) => {
  const { showAlertSnack } = useContext(SnackbarContext)!;

  return (
    <Card {...props} className={`max-w-md px-4 py-2 min-w-80 mx-auto bg-slate-50 overflow-y-auto ${className}`}>
      <CardHeader title="Sample Excel File" className="border-b-2 border-slate-400 pb-1" />
      <CardMedia component="img" height="194" image={urlJoin(site_url, "/excel/SaaS_KPI_sample_xl_v0.png")} alt="Sample Excel" />
      <CardContent>
        <Button
          className="normal-case font-bold w-full py-2 bg-rose-600 text-slate-100 hover:bg-rose-700 hover:text-white"
          endIcon={<DownloadIcon />}
          onClick={(evt: React.MouseEvent<HTMLButtonElement>) => {
            try {
              const excel_url = urlJoin(site_url, "/excel/SaaS_KPI_v0.xlsx");
              downloadUrl(excel_url, "SaaS_KPI_v0.xlsx");
              showAlertSnack({
                message: `Downloading sample excel file from ${excel_url}...`,
                severity: "info",
              });
            } catch (error) {
              showAlertSnack({
                message: `Failed to download sample excel file.\n${error}`,
                severity: "error",
              });
            }
          }}
        >
          Download Excel
        </Button>
      </CardContent>
    </Card>
  );
};

export default SampleExcelCard;
