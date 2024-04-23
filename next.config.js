/**
 * @file Next Configuration File.
 * @author Shuto Iwasaki <https://github.com/iwasakishuto>
 * @copyright Shuto Iwasaki 2024
 * @license MIT
 */

const SUB_DIRECTORY = "/xlxtractor";
const isProd = process.env.NODE_ENV == "production";
const basePath = isProd ? SUB_DIRECTORY : "";
const baseURL = isProd ? "https://iwasakishuto.github.io" : "http://localhost:3000";

const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
});

const nextConfig = withPWA({
  output: "export",
  reactStrictMode: true,
  swcMinify: true,
  /**
   * <--- Settings for Github Pages ---
   */
  assetPrefix: basePath,
  basePath: basePath,
  env: {
    basePath: basePath,
    baseURL: baseURL,
  },
  trailingSlash: true,
  /**
   * --- END Settings for Github Pages --->
   */
  images: {
    unoptimized: true,
  },
  webpack: (config, { isServer, defaultLoaders }) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack", "url-loader"],
    });
    return config;
  },
});

module.exports = nextConfig;
