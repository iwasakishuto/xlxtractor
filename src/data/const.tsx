/**
 * @description Constants for the application
 */

import urljoin from "url-join";

export const drawerWidth: number = 400;
export const headerHeight: number = 64;

export const site_url: string = urljoin(process.env.baseURL!, process.env.basePath!);
