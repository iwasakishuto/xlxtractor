/**
 * ExcelData type
 */

export type KpiInfo = { label: string; row: number };
export type JsonData = { Date: string[]; KPIs: { [key: string]: (string | number)[] }; excelFilename: string };
