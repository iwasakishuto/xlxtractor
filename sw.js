if(!self.define){let e,s={};const t=(t,a)=>(t=new URL(t+".js",a).href,s[t]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=t,e.onload=s,document.head.appendChild(e)}else e=t,importScripts(t),s()})).then((()=>{let e=s[t];if(!e)throw new Error(`Module ${t} didn’t register its module`);return e})));self.define=(a,c)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let r={};const i=e=>t(e,n),o={module:{uri:n},exports:r,require:i};s[n]=Promise.all(a.map((e=>o[e]||i(e)))).then((e=>(c(...e),r)))}}define(["./workbox-07a7b4f2"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/xlxtractor/_next/app-build-manifest.json",revision:"8204768fb8ba11a16e28032534a9e5f0"},{url:"/xlxtractor/_next/static/chunks/18050da9-a5dd31cdf8aeb988.js",revision:"mBoOGxUTHqfoKGSH7xsdc"},{url:"/xlxtractor/_next/static/chunks/264-ca94176b2f5e2a45.js",revision:"mBoOGxUTHqfoKGSH7xsdc"},{url:"/xlxtractor/_next/static/chunks/477b8986-011f97ba16fad081.js",revision:"mBoOGxUTHqfoKGSH7xsdc"},{url:"/xlxtractor/_next/static/chunks/604d9617-f7bf79bbaf388203.js",revision:"mBoOGxUTHqfoKGSH7xsdc"},{url:"/xlxtractor/_next/static/chunks/69-b90d81de1fd91ee4.js",revision:"mBoOGxUTHqfoKGSH7xsdc"},{url:"/xlxtractor/_next/static/chunks/817-6ede9c58db714d3c.js",revision:"mBoOGxUTHqfoKGSH7xsdc"},{url:"/xlxtractor/_next/static/chunks/app/_not-found-3a542ba0221579ee.js",revision:"mBoOGxUTHqfoKGSH7xsdc"},{url:"/xlxtractor/_next/static/chunks/app/layout-bd26c972663af174.js",revision:"mBoOGxUTHqfoKGSH7xsdc"},{url:"/xlxtractor/_next/static/chunks/app/page-1f9552adf1e5bf93.js",revision:"mBoOGxUTHqfoKGSH7xsdc"},{url:"/xlxtractor/_next/static/chunks/fd9d1056-a0d868dc5f28a8dd.js",revision:"mBoOGxUTHqfoKGSH7xsdc"},{url:"/xlxtractor/_next/static/chunks/framework-aec844d2ccbe7592.js",revision:"mBoOGxUTHqfoKGSH7xsdc"},{url:"/xlxtractor/_next/static/chunks/main-app-38dc5d0ce971b235.js",revision:"mBoOGxUTHqfoKGSH7xsdc"},{url:"/xlxtractor/_next/static/chunks/main-b8fe290496348837.js",revision:"mBoOGxUTHqfoKGSH7xsdc"},{url:"/xlxtractor/_next/static/chunks/pages/_app-75f6107b0260711c.js",revision:"mBoOGxUTHqfoKGSH7xsdc"},{url:"/xlxtractor/_next/static/chunks/pages/_error-9a890acb1e81c3fc.js",revision:"mBoOGxUTHqfoKGSH7xsdc"},{url:"/xlxtractor/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/xlxtractor/_next/static/chunks/webpack-32c223e7ef9b6833.js",revision:"mBoOGxUTHqfoKGSH7xsdc"},{url:"/xlxtractor/_next/static/css/1f15a4a605bd8f13.css",revision:"1f15a4a605bd8f13"},{url:"/xlxtractor/_next/static/mBoOGxUTHqfoKGSH7xsdc/_buildManifest.js",revision:"e0a21c7d7f93d89dce16df0231dc76f2"},{url:"/xlxtractor/_next/static/mBoOGxUTHqfoKGSH7xsdc/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/xlxtractor/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/xlxtractor/_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/xlxtractor/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/xlxtractor/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/xlxtractor/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/xlxtractor/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/xlxtractor/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"},{url:"/xlxtractor/cover.png",revision:"d60fd31cef13de72138f9192e874ef6a"},{url:"/xlxtractor/excel/SaaS_KPI_sample_xl_v0.png",revision:"fa892224e098ed2b931fe5f85a13b386"},{url:"/xlxtractor/excel/SaaS_KPI_v0.xlsx",revision:"4ff3863d4eef8e87460e263f9aa22d56"},{url:"/xlxtractor/favicon.ico",revision:"54ac278f0763679b78b9118d1fa070da"},{url:"/xlxtractor/favicon.png",revision:"fb20c65ffea6acfa48b637edc2702f16"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/xlxtractor",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:t,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));