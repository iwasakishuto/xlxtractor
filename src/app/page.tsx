/**
 * @file excel/page.tsx
 * @desc This file contains the main page component for the excel module.
 */

"use client";

import DroppableInput from "@/components/DroppableInput";
import XlBook from "@/components/Excel/XlBook";
import XlSheetNames from "@/components/Excel/XlSheetNames";
import AppBar from "@/components/Mui/AppBar";
import SampleExcelCard from "@/components/SampleExcelCard";
import SettingCard from "@/components/SettingCard";
import DrawerHeader from "@/components/Styled/DrawerHeader";
import Main from "@/components/Styled/Main";
import { drawerWidth, headerHeight, site_url } from "@/data/const";
import { AcceptedExcelFileTypes } from "@/data/excel";
import { DEFAULT_KPIS } from "@/data/kpi";
import { get_cell_info, isColValid, isRowValid } from "@/lib/xl_utils";
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
import urlJoin from "url-join";

type PageProps = {};

const Page: NextPage<PageProps> = () => {
  // onchange states
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  // Excel states
  const [workbook, setWorkbook] = useState<wjcXlsx.Workbook | null>(null);
  const [sheetIndex, setSheetIndex] = useState<number>(0);
  const [excelUploading, setExcelUploading] = useState<boolean>(false);
  const [excelFilename, setExcelFilename] = useState<string>("");
  const [maxRows, setMaxRows] = useState<number>(0);
  const [maxColumns, setMaxColumns] = useState<number>(0);
  // KPI states
  const [kpis, setKpis] = useState<KpiInfo[]>([]);
  const [kpiOptions, setKpiOptions] = useState<KpiInfo[]>([]);
  const [kpiColIdx, setKpiColIdx] = useState<number>(0);
  const [dateRowIdx, setDateRowIdx] = useState<number>(0);
  const [dispRows, setDispRows] = useState<number>(200);
  const [dispColumns, setDispColumns] = useState<number>(100);

  useEffect(() => {
    if (workbook !== null) {
      /** Set the default KPI columns */
      /** Set the default Date Rows */
      setKpis([]);
      setKpiOptions([]);
      setKpiColIdx(0);
      setDateRowIdx(0);
      const ws: wjcXlsx.WorkSheet = workbook.sheets[sheetIndex];
      if (ws) {
        setMaxRows(ws.rows.filter((row) => isRowValid(row)).length);
        setMaxColumns(ws.columns.filter((col) => isColValid(col)).length);
      }
    }
  }, [sheetIndex]);

  useEffect(() => {
    if (workbook !== null) {
      /** Set the default KPI options */
      // TODO: colspan > 1
      let kpiOptions_: KpiInfo[] = [];
      let selectedKpis_: KpiInfo[] = [];
      const columns = workbook.sheets[sheetIndex].columns || [];

      workbook.sheets[sheetIndex].rows
        .filter((row: wjcXlsx.WorkbookRow) => row == undefined || row.visible)
        .slice(0, dispRows)
        .forEach((row: wjcXlsx.WorkbookRow, i: number) => {
          for (let c = 0; row.cells && c < row.cells.length; c++) {
            let { value, idx } = get_cell_info({
              wbrow: row,
              columns: columns,
              idx: c,
            });
            if (c <= kpiColIdx && kpiColIdx <= idx) {
              if (value !== null) {
                if (!kpiOptions_.map((e) => e.label).includes(value)) {
                  if (DEFAULT_KPIS.some((kpi: string) => value !== null && value.includes(kpi))) {
                    selectedKpis_ = [...selectedKpis_, { label: value, row: i }];
                  }
                  kpiOptions_ = [...kpiOptions_, { label: value, row: i }];
                }
              }
              break;
            }
            c = idx;
          }
        });
      setKpis(selectedKpis_);
      setKpiOptions(kpiOptions_);
    }
  }, [kpiColIdx, dispRows, sheetIndex]);

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
          height: `${headerHeight}px`,
        }}
      >
        <Toolbar>
          <IconButton color="inherit" aria-label="open drawer" onClick={handleDrawerOpen} edge="start" sx={{ mr: 2, ...(isDrawerOpen && { display: "none" }) }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Excel Extractor
          </Typography>
          <Avatar className="ml-auto mr-2" alt="Icon" src={urlJoin(site_url, "favicon.png")} />
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
            setExcelFilename={setExcelFilename}
            dispColumns={dispColumns}
            setDispColumns={setDispColumns}
            dispRows={dispRows}
            setDispRows={setDispRows}
            maxColumns={maxColumns}
            maxRows={maxRows}
          />
          <SampleExcelCard className="mt-12" />
        </div>
      </Drawer>
      {/* --- END Sidebar ---> */}
      {/** <--- Content */}
      <Main open={isDrawerOpen} drawerWidth={drawerWidth} className="bg-slate-200 text-slate-800 h-screen p-0">
        <DrawerHeader />

        <div
          className="w-full flex"
          style={{
            height: `calc(100% - ${headerHeight}px)`,
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
                    <XlBook worksheet={workbook?.sheets[sheetIndex]} dateRowIdx={dateRowIdx} kpiColIdx={kpiColIdx} kpis={kpis} maxRows={dispRows} maxColumns={dispColumns} />
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
                setExcelFilename={setExcelFilename}
                dispColumns={dispColumns}
                setDispColumns={setDispColumns}
                dispRows={dispRows}
                setDispRows={setDispRows}
                maxColumns={maxColumns}
                maxRows={maxRows}
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
