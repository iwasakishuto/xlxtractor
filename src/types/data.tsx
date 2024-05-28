/**
 * ExcelData type
 */

export type RowSkipArea = { srow: number; erow: number; scol: number; ecol: number };
export type KpiInfo = { label: string; row: number };
export type JsonData = { Date: (string | null)[]; KPIs: { [key: string]: (string | number | null)[] }; excelFilename: string; sheetName: string; company: string };

export type PortfolioCompany = {
  no: string;
  name: string;
  invested: boolean;
};
