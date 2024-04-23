/**
 * @file excel/page.tsx
 * @desc This file contains the main page component for the excel module.
 */

"use client";

import DroppableInput from "@/components/DroppableInput";
import XlBook from "@/components/Excel/XlBook";
import XlSheetNames from "@/components/Excel/XlSheetNames";
import AppBar from "@/components/Mui/AppBar";
import SettingCard from "@/components/SettingCard";
import DrawerHeader from "@/components/Styled/DrawerHeader";
import Main from "@/components/Styled/Main";
import { AcceptedExcelFileTypes } from "@/data/excel";
import { DEFAULT_KPIS } from "@/data/kpi";
import { cell2value } from "@/lib/xl_utils";
import type { KpiInfo } from "@/types";
import * as wjcXlsx from "@mescius/wijmo.xlsx";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import type { NextPage } from "next";
import React, { useEffect, useState } from "react";

type PageProps = {
  drawerWidth?: number;
  header_height?: number;
};

const Page: NextPage<PageProps> = ({ drawerWidth = 400, header_height = 64 }) => {
  // onchange states
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  // Excel states
  const [workbook, setWorkbook] = useState<wjcXlsx.Workbook | null>(null);
  const [sheetIndex, setSheetIndex] = useState<number>(0);
  const [excelUploading, setExcelUploading] = useState<boolean>(false);
  const [excelFilename, setExcelFilename] = useState<string>("");
  // KPI states
  const [kpis, setKpis] = useState<KpiInfo[]>([]);
  const [kpiOptions, setKpiOptions] = useState<KpiInfo[]>([]);
  const [kpiColIdx, setKpiColIdx] = useState<number>(0);
  const [dateRowIdx, setDateRowIdx] = useState<number>(0);

  useEffect(() => {
    if (workbook !== null) {
      /** Set the default KPI columns */
      /** Set the default Date Rows */
      setKpis([]);
      setKpiOptions([]);
      setKpiColIdx(0);
      setDateRowIdx(0);
    }
  }, [sheetIndex]);

  useEffect(() => {
    if (workbook !== null) {
      /** Set the default KPI options */
      // TODO: colspan > 1
      let kpiOptions_: KpiInfo[] = [];
      let selectedKpis_: KpiInfo[] = [];
      const columns = workbook.sheets[sheetIndex].columns;

      workbook.sheets[sheetIndex].rows
        .filter((row: wjcXlsx.WorkbookRow) => row === undefined || row.visible)
        .forEach((row: wjcXlsx.WorkbookRow, i: number) => {
          let cells = row.cells.filter((_, c) => columns[c] === undefined || columns[c].visible);
          if (cells[kpiColIdx] && cells[kpiColIdx].value) {
            let value = cell2value(cells[kpiColIdx]);
            if (!kpiOptions_.map((e) => e.label).includes(value)) {
              if (DEFAULT_KPIS.some((kpi: string) => value.includes(kpi))) {
                selectedKpis_ = [...selectedKpis_, { label: value, row: i }];
              }
              kpiOptions_ = [...kpiOptions_, { label: value, row: i }];
            }
          }
        });
      setKpis(selectedKpis_);
      setKpiOptions(kpiOptions_);
    }
  }, [kpiColIdx]);

  /**
   * Excel File Upload Handler
   * @param evt - The event object
   */
  const handleFileInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    evt.preventDefault();
    const files = evt.currentTarget.files;
    if (files && files.length) {
      const file = files[0];
      setExcelFilename(file.name);
      setExcelUploading(true);
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.result) {
          const workbook = new wjcXlsx.Workbook();
          workbook.loadAsync(reader.result, (result: wjcXlsx.Workbook) => {
            setWorkbook(result);
            setExcelUploading(false);
          });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  /**
   * Drawer open and close functions
   */
  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };
  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  return (
    <div className="flex min-h-full">
      {/* <--- Header --- */}
      <AppBar
        position="fixed"
        className="bg-green-700"
        open={isDrawerOpen}
        drawerWidth={drawerWidth}
        style={{
          height: `${header_height}px`,
        }}
      >
        <Toolbar>
          <IconButton color="inherit" aria-label="open drawer" onClick={handleDrawerOpen} edge="start" sx={{ mr: 2, ...(isDrawerOpen && { display: "none" }) }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Excel Extractor
          </Typography>
          <Avatar className="ml-auto mr-2" alt="Icon" src="/favicon.jpg" />
        </Toolbar>
      </AppBar>
      {/* --- END Header ---> */}

      {/* <--- Sidebar --- */}
      <Drawer
        sx={{
          width: drawerWidth,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={isDrawerOpen}
        className="flex-shrink-0"
        PaperProps={{ className: "bg-slate-200 text-slate-800" }}
      >
        <DrawerHeader className="bg-slate-800 text-slate-200">
          <div className="flex items-center w-full">
            <div className="mx-auto text-xl font-bold">Settings</div>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon className="text-slate-100" />
            </IconButton>
          </div>
        </DrawerHeader>
        <Divider />

        <div style={{ width: drawerWidth - 60 }} className="mx-auto mt-2">
          <SettingCard
            sheet={workbook !== null ? workbook.sheets[sheetIndex] : null}
            kpiColIdx={kpiColIdx}
            dateRowIdx={dateRowIdx}
            kpis={kpis}
            setKpiColIdx={setKpiColIdx}
            setDateRowIdx={setDateRowIdx}
            setKpis={setKpis}
            kpiOptions={kpiOptions}
            excelFilename={excelFilename}
          />
        </div>
      </Drawer>
      {/* --- END Sidebar ---> */}
      {/** <--- Content */}
      <Main open={isDrawerOpen} drawerWidth={drawerWidth} className="bg-slate-200 text-slate-800 h-screen p-0">
        <DrawerHeader />

        <div
          className="w-full flex"
          style={{
            height: `calc(100% - ${header_height}px)`,
          }}
        >
          {/* <--- Excel Content --- */}
          <div className="max-w-4xl 2xl:max-w-7xl w-full bg-slate-100 p-6">
            <div className="flex flex-col h-full">
              {/* <--- Upper Screen --- */}
              <div className="flex-1 items-stretch w-full h-full">
                {workbook === null ? (
                  <DroppableInput
                    id="excel-file"
                    className="w-full h-full px-6 py-2"
                    text="Any Excel file here!!"
                    inputProps={{
                      type: "file",
                      accept: AcceptedExcelFileTypes.join(", "),
                      onChange: handleFileInputChange,
                    }}
                    loading={excelUploading}
                  />
                ) : (
                  <div className="w-full h-full px-6 py-2">
                    <XlSheetNames workbook={workbook} sheetIndex={sheetIndex} setSheetIndex={setSheetIndex} />
                    <XlBook worksheet={workbook?.sheets[sheetIndex]} dateRowIdx={dateRowIdx} kpiColIdx={kpiColIdx} kpis={kpis} />
                  </div>
                )}
              </div>

              {/* --- END Screen ---> */}
            </div>
          </div>
          {/* --- END Excel Content ---> */}

          {/* <--- Controller --- */}
          <div className="w-full flex-1">
            {!isDrawerOpen && (
              <SettingCard
                sheet={workbook !== null ? workbook.sheets[sheetIndex] : null}
                kpiColIdx={kpiColIdx}
                dateRowIdx={dateRowIdx}
                kpis={kpis}
                setKpiColIdx={setKpiColIdx}
                setDateRowIdx={setDateRowIdx}
                setKpis={setKpis}
                kpiOptions={kpiOptions}
                className="max-h-full"
                excelFilename={excelFilename}
              />
            )}
          </div>
          {/* --- END Controller ---> */}
        </div>
      </Main>
      {/* --- END Content ---> */}
    </div>
  );
};

export default Page;
