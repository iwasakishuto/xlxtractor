/**
 * ExcelData type
 */

export type KpiInfo = { label: string; row: number };
export type JsonData = { Date: (string | null)[]; KPIs: { [key: string]: (string | number | null)[] }; excelFilename: string };
