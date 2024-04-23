/**
 * @description Utility functions.
 */

/**
 * @description Download a JSON file.
 * @param data
 * @param filename
 */
export function downloadJson(data: any, filename: string) {
  const blob = new Blob([JSON.stringify(data)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}
