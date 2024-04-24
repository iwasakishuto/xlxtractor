(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{7641:function(e,t,n){Promise.resolve().then(n.bind(n,6447))},6447:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return et}});var l=n(7437),a=n(2265),r=n(5392),s=n(6910),o=e=>{let{id:t,loading:n=!1,text:a="Any File(s)",inputProps:o={},labelProps:i={},className:c="",...d}=e;return(0,l.jsx)("div",{...d,className:"flex items-center justify-center w-full h-full ".concat(c),children:(0,l.jsxs)("label",{htmlFor:t,...i,className:"flex flex-col items-center justify-center w-full h-full border-2 border-slate-300 border-dashed rounded-lg cursor-pointer bg-slate-50 dark:hover:bg-bray-800 dark:bg-slate-700 hover:bg-slate-100 dark:border-slate-600 dark:hover:border-slate-500 dark:hover:bg-slate-600 ".concat(i.className||""),children:[(0,l.jsxs)("div",{className:"flex flex-col items-center justify-center pt-5 pb-6",children:[n?(0,l.jsx)(s.Z,{className:"w-10 h-10 mb-4 text-slate-500"}):(0,l.jsx)(r.Z,{className:"w-10 h-10 mb-4 text-slate-500"}),(0,l.jsx)("p",{className:"mb-2 text-base text-slate-500 dark:text-slate-400",children:"Click to upload or drag and drop"}),(0,l.jsx)("p",{className:"text-sm text-slate-500 dark:text-slate-400",children:a})]}),(0,l.jsx)("input",{...o,id:t,className:"hidden ".concat(o.className||"")})]})})},i=n(5693),c=n(47);function d(e){let t=e.value;if(null==t||t!=t)null===t&&(t="");else{let n;i.isString(t)&&"'"==t.charAt(0)&&(t=t.substring(1)),e.style&&e.style.format&&(n=c.Workbook.fromXlsxFormat(e.style.format)[0]);let l=void 0!==n&&n.length>0?i.Globalize.format(t,n):t;t=i.escapeHtml(l)}return t}function u(e){let{wbrow:t,columns:n,idx:l}=e,a=0,r=null,s=1,o=1,i=t.cells[l],c=n[l];return(void 0===c||c.visible)&&(a++,i?(r=d(i),i.colSpan&&i.colSpan>1&&(a+=(s=function(e){let{columns:t,startFrom:n,colSpan:l}=e,a=l;for(let e=n;e<t.length&&e<n+l;e++){let n=t[e];n&&!n.visible&&a--}return a}({columns:n,startFrom:l,colSpan:i.colSpan}))-1),i.rowSpan&&(o=i.rowSpan)):r=""),{value:r,rowSpan:o,colSpan:s,num_cell:a}}var m=e=>{let{wbrow:t,columns:n,rowIdx:a,maxRows:r=100,invisColCnt:s=0,isKpiTargetRow:o=!1,kpiColIdx:i=0,dateRowIdx:c=0,className:d="",...m}=e,x=[],p=0;for(let e=0;t.cells&&e<t.cells.length;e++){let l=u({wbrow:t,columns:n,idx:e});null!==l.value&&(x.push({colSpan:l.colSpan,rowSpan:l.rowSpan,value:l.value}),p+=l.num_cell)}let h=r-p-s;for(let e=0;e<h;e++)x.push({colSpan:1,rowSpan:1,value:""});return(0,l.jsx)("tr",{...m,className:"border-slate-800 border-2 table-wbrow align-middle ".concat(d),children:x.map((e,t)=>{let{colSpan:n,rowSpan:r,value:s}=e;return(0,l.jsx)("td",{className:"truncate px-2 py-1 border border-1 border-slate-800 max-w-48 ".concat(a===c&&t>=i?"bg-yellow-300 ".concat(t===i?"font-bold":""):o&&t>=i?"bg-amber-400 ".concat(t===i?"font-bold":""):t===i?"bg-red-300 font-bold":""),colSpan:n,rowSpan:r,children:s},t)})})},x=e=>{let{worksheet:t,kpis:n,dateRowIdx:a=0,kpiColIdx:r=0,maxColumns:s=100,maxRows:o=200,className:i="",...c}=e;if(!t)return(0,l.jsx)("div",{className:"text-red-100",children:"Please Upload the Excel File Correctly"});let d=t.columns||[],u=t.rows.filter(e=>void 0===e||e.visible).slice(0,o),x=d.length;for(let e of u)e&&e.cells&&(x=Math.max(x,e.cells.length));return x=Math.min(x,s),(0,l.jsx)("div",{className:"w-full overflow-x-auto h-full",children:(0,l.jsxs)("table",{className:"border-collapse table-fixd w-full shadow-md rounded-xl bg-white text-slate-800 ".concat(i),...c,children:[(0,l.jsx)("colgroup",{children:d.slice(0,x).filter(e=>e.visible).map((e,t)=>(0,l.jsx)("col",{width:e.autoWidth?"":null!=e.width?"".concat(e.width,"px"):"60px"},t))}),(0,l.jsx)("tbody",{className:"table-row-group",children:u.map((e,t)=>(0,l.jsx)(m,{rowIdx:t,wbrow:e,columns:d,maxRows:x,invisColCnt:d.filter(e=>!1===e.visible).length,kpiColIdx:r,dateRowIdx:a,isKpiTargetRow:n.some(e=>e.row===t)},"row-".concat(t)))})]})})},p=n(6840),h=n(1824),f=e=>{let{workbook:t,sheetIndex:n,setSheetIndex:a,className:r="",...s}=e;return(0,l.jsx)("div",{...s,className:"w-full ".concat(r),children:(0,l.jsx)(h.Z,{value:n,onChange:(e,t)=>{a(t)},TabIndicatorProps:{style:{backgroundColor:"rgb(248, 250, 252)",height:"4px"}},textColor:"inherit",variant:"scrollable",scrollButtons:"auto","aria-label":"sheet name tabs",className:"bg-green-700 text-slate-50 p-0",children:t.sheets.map((e,t)=>(0,l.jsx)(p.Z,{value:t,label:e.name},t))})})},b=n(278),g=n(8836);let w=(0,g.ZP)(b.Z,{shouldForwardProp:e=>!["open","drawerWidth"].includes(e)})(e=>{let{theme:t,open:n,drawerWidth:l}=e;return{transition:t.transitions.create(["margin","width"],{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingScreen}),...n&&{width:"calc(100% - ".concat(l,"px)"),marginLeft:"".concat(l,"px"),transition:t.transitions.create(["margin","width"],{easing:t.transitions.easing.easeOut,duration:t.transitions.duration.enteringScreen})}}}),v={100:"#DAECFF",200:"#80BFFF",400:"#3399FF",500:"#007FFF",600:"#0072E5",700:"#0059B2",900:"#003A75"},j={50:"#F3F6F9",100:"#E5EAF2",200:"#DAE2ED",300:"#C7D0DD",400:"#B0B8C4",500:"#9DA8B7",600:"#6B7A90",700:"#434D5B",800:"#303740",900:"#1C2025"};var k=n(2056),N=n(8315),S=n(7719);let y=a.forwardRef(function(e,t){return(0,l.jsx)(k.Y,{min:0,step:1,slots:{root:C,input:F,incrementButton:Z,decrementButton:Z},slotProps:{incrementButton:{children:"▴"},decrementButton:{children:"▾"}},...e,ref:t})}),C=(0,S.Z)("div")(e=>{let{theme:t}=e;return"\n  font-family: 'IBM Plex Sans', sans-serif;\n  font-weight: 400;\n  border-radius: 8px;\n  color: ".concat("dark"===t.palette.mode?j[300]:j[900],";\n  background: ").concat("dark"===t.palette.mode?j[900]:"#fff",";\n  border: 1px solid ").concat("dark"===t.palette.mode?j[700]:j[200],";\n  box-shadow: 0px 2px 4px ").concat("dark"===t.palette.mode?"rgba(0,0,0, 0.5)":"rgba(0,0,0, 0.05)",";\n  display: grid;\n  grid-template-columns: 1fr 19px;\n  grid-template-rows: 1fr 1fr;\n  overflow: hidden;\n  column-gap: 8px;\n  padding: 4px;\n\n  &.").concat(N.S.focused," {\n    border-color: ").concat(v[400],";\n    box-shadow: 0 0 0 3px ").concat("dark"===t.palette.mode?v[700]:v[200],";\n  }\n\n  &:hover {\n    border-color: ").concat(v[400],";\n  }\n\n  // firefox\n  &:focus-visible {\n    outline: 0;\n  }\n")}),F=(0,S.Z)("input")(e=>{let{theme:t}=e;return"\n  font-size: 0.875rem;\n  font-family: inherit;\n  font-weight: 400;\n  line-height: 1.5;\n  grid-column: 1/2;\n  grid-row: 1/3;\n  color: ".concat("dark"===t.palette.mode?j[300]:j[900],";\n  background: inherit;\n  border: none;\n  border-radius: inherit;\n  padding: 8px 12px;\n  outline: 0;\n")}),Z=(0,S.Z)("button")(e=>{let{theme:t}=e;return"\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: center;\n  align-items: center;\n  appearance: none;\n  padding: 0;\n  width: 19px;\n  height: 19px;\n  font-family: system-ui, sans-serif;\n  font-size: 0.875rem;\n  line-height: 1;\n  box-sizing: border-box;\n  background: ".concat("dark"===t.palette.mode?j[900]:"#fff",";\n  border: 0;\n  color: ").concat("dark"===t.palette.mode?j[300]:j[900],";\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 120ms;\n\n  &:hover {\n    background: ").concat("dark"===t.palette.mode?j[800]:j[50],";\n    border-color: ").concat("dark"===t.palette.mode?j[600]:j[300],";\n    cursor: pointer;\n  }\n\n  &.").concat(N.S.incrementButton," {\n    grid-column: 2/3;\n    grid-row: 1/2;\n    border-top-left-radius: 4px;\n    border-top-right-radius: 4px;\n    border: 1px solid;\n    border-bottom: 0;\n    border-color: ").concat("dark"===t.palette.mode?j[700]:j[200],";\n    background: ").concat("dark"===t.palette.mode?j[900]:j[50],";\n    color: ").concat("dark"===t.palette.mode?j[200]:j[900],";\n\n    &:hover {\n      cursor: pointer;\n      color: #FFF;\n      background: ").concat("dark"===t.palette.mode?v[600]:v[500],";\n      border-color: ").concat("dark"===t.palette.mode?v[400]:v[600],";\n    }\n  }\n\n  &.").concat(N.S.decrementButton," {\n    grid-column: 2/3;\n    grid-row: 2/3;\n    border-bottom-left-radius: 4px;\n    border-bottom-right-radius: 4px;\n    border: 1px solid;\n    border-color: ").concat("dark"===t.palette.mode?j[700]:j[200],";\n    background: ").concat("dark"===t.palette.mode?j[900]:j[50],";\n    color: ").concat("dark"===t.palette.mode?j[200]:j[900],";\n  }\n\n  &:hover {\n    cursor: pointer;\n    color: #FFF;\n    background: ").concat("dark"===t.palette.mode?v[600]:v[500],";\n    border-color: ").concat("dark"===t.palette.mode?v[400]:v[600],";\n  }\n\n  & .arrow {\n    transform: translateY(-1px);\n  }\n\n  & .arrow {\n    transform: translateY(-1px);\n  }\n")});var I=n(2e3),P=n(6969),E=n(8963),R=n(3680),D=n(1518),O=n(6273),B=n(6285),A=n(5195),z=n(5996),L=n(7002),K=n(8563),M=n(2508),H=n(9016),U=e=>{let{sheet:t,excelFilename:n,setExcelFilename:r,kpiColIdx:s,setKpiColIdx:o,dateRowIdx:i,setDateRowIdx:c,kpis:u,setKpis:m,kpiOptions:x,className:p="",...h}=e,{showAlertSnack:f}=(0,a.useContext)(I.SnackbarContext);return(0,l.jsxs)(A.Z,{...h,className:"max-w-md px-4 py-2 min-w-80 mx-auto bg-slate-50 overflow-y-auto ".concat(p),children:[(0,l.jsx)(L.Z,{action:(0,l.jsx)(D.Z,{className:"mr-1"}),title:"設定",className:"border-b-2 border-slate-400 pb-1"}),(0,l.jsx)(z.Z,{children:(0,l.jsxs)(M.ZP,{container:!0,spacing:1,className:"mt-4",children:[n.length>0&&(0,l.jsxs)(M.ZP,{container:!0,xs:12,className:"mb-6 items-center",children:[(0,l.jsx)("span",{className:"ml-auto",children:"Excel："}),(0,l.jsx)("code",{className:"mr-auto",children:n})]}),(0,l.jsxs)(M.ZP,{xs:12,sm:6,container:!0,className:"items-center",children:[(0,l.jsx)("label",{className:"ml-auto mr-1",id:"kpi",children:"KPI列："}),(0,l.jsx)(y,{id:"kpi",value:s,onChange:e=>{e.target instanceof HTMLInputElement&&o(Number(e.target.value))},className:"w-16 mr-auto",disabled:null===t})]}),(0,l.jsxs)(M.ZP,{xs:12,sm:6,container:!0,className:"items-center",children:[(0,l.jsx)("label",{className:"ml-auto mr-1",htmlFor:"date",children:"日付行："}),(0,l.jsx)(y,{id:"date",value:i,onChange:e=>{e.target instanceof HTMLInputElement&&c(Number(e.target.value))},className:"w-16 mr-auto",disabled:null===t})]}),(0,l.jsx)(M.ZP,{item:!0,xs:12,className:"mt-6",children:(0,l.jsx)(O.Z,{multiple:!0,disableCloseOnSelect:!0,options:x,getOptionLabel:e=>e.label,isOptionEqualToValue:(e,t)=>e.row===t.row,renderOption:(e,t,n)=>{let{className:r="",...s}=e,{selected:o}=n;return(0,a.createElement)("li",{...s,className:"".concat(r," text-sm"),key:t.row,children:[(0,l.jsx)(K.Z,{icon:(0,l.jsx)(E.Z,{fontSize:"small"}),checkedIcon:(0,l.jsx)(P.Z,{fontSize:"small"}),checked:o,className:"mr-2 py-0"}),t.label]})},renderInput:e=>(0,l.jsx)(H.Z,{...e,label:"KPIs",placeholder:"[Alt] + [↓]"}),className:"w-full text-xl",value:u,size:"small",onChange:(e,t)=>{m(t),console.log(["newValue",t])},ChipProps:{className:"bg-orange-200"},disabled:null===t})}),(0,l.jsx)(M.ZP,{item:!0,xs:12,className:"mt-8",children:(0,l.jsx)(B.Z,{className:"normal-case font-bold w-full py-2 bg-green-700 text-slate-100 hover:bg-green-600 hover:text-white",endIcon:(0,l.jsx)(R.Z,{}),onClick:e=>{if(null!==t){let e=n+".kpi.json",l=function(e){let{sheet:t,kpis:n,kpiColIdx:l,dateRowIdx:a}=e,r=t.columns||[];function s(e,t){let n="",l=[];return e.cells.forEach((e,a)=>{let s=r[a];(void 0===s||s.visible)&&(a===t&&(n=d(e)),a>t&&l.push(d(e)))}),[n,l]}let o={Date:[],KPIs:{},excelFilename:""};return t.rows&&t.rows.filter(e=>void 0===e||e.visible).forEach((e,t)=>{if(t===a){let[t,n]=s(e,l);o.Date=n}if(n.some(e=>e.row===t)){let[t,n]=s(e,l);o.KPIs[t]=n}}),o}({sheet:t,kpis:u,kpiColIdx:s,dateRowIdx:i});l.excelFilename=n,function(e,t){let n=new Blob([JSON.stringify(e)],{type:"application/json"}),l=URL.createObjectURL(n),a=document.createElement("a");a.href=l,a.download=t,a.click(),URL.revokeObjectURL(l)}(l,e),f({message:"KPI file '".concat(e,"' was downloaded successfully"),severity:"success"})}else f({message:"Please Upload the Excel File Correctly",severity:"error"})},children:"Download KPIs"})})]})})]})};let W=(0,g.ZP)("div")(e=>{let{theme:t}=e;return{display:"flex",alignItems:"center",padding:t.spacing(0,1),...t.mixins.toolbar,justifyContent:"flex-end"}}),_=(0,g.ZP)("main",{shouldForwardProp:e=>!["open","drawerWidth"].includes(e)})(e=>{let{theme:t,open:n,drawerWidth:l}=e;return{flexGrow:1,padding:t.spacing(3),transition:t.transitions.create("margin",{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingScreen}),marginLeft:"-".concat(l,"px"),...n&&{transition:t.transitions.create("margin",{easing:t.transitions.easing.easeOut,duration:t.transitions.duration.enteringScreen}),marginLeft:0}}}),T=["application/vnd.ms-excel","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","text/csv"],G=["New MRR","LTV","CAC","Magic Number","Burn Multiple","Net Burn","ARPU","ARR","MRR","Quick Ratio","Churn Rate","NPS","CES","COGS","R&D","S&M","G&A","FCF"];var V=n(6849),Y=n(8740),q=n(3801),J=n(8416),Q=n(6892),X=n(3206),$=n(6676),ee=n(9835),et=()=>{let[e,t]=(0,a.useState)(!1),[n,r]=(0,a.useState)(null),[s,i]=(0,a.useState)(0),[d,m]=(0,a.useState)(!1),[p,h]=(0,a.useState)(""),[b,g]=(0,a.useState)([]),[v,j]=(0,a.useState)([]),[k,N]=(0,a.useState)(0),[S,y]=(0,a.useState)(0),[C,F]=(0,a.useState)(200);return(0,a.useEffect)(()=>{null!==n&&(g([]),j([]),N(0),y(0))},[s]),(0,a.useEffect)(()=>{if(null!==n){let e=[],t=[],l=n.sheets[s].columns||[];n.sheets[s].rows.filter(e=>void 0==e||e.visible).slice(0,C).forEach((n,a)=>{for(let r=0;n.cells&&r<n.cells.length;r++)if(r===k){let{value:s}=u({wbrow:n,columns:l,idx:r});null===s||e.map(e=>e.label).includes(s)||(G.some(e=>null!==s&&s.includes(e))&&(t=[...t,{label:s,row:a}]),e=[...e,{label:s,row:a}]);break}}),g(t),j(e)}},[k,C,s]),(0,l.jsxs)("div",{className:"flex min-h-full",children:[(0,l.jsx)(w,{position:"fixed",className:"bg-green-700",open:e,drawerWidth:400,style:{height:"".concat(64,"px")},children:(0,l.jsxs)($.Z,{children:[(0,l.jsx)(X.Z,{color:"inherit","aria-label":"open drawer",onClick:()=>{t(!0)},edge:"start",sx:{mr:2,...e&&{display:"none"}},children:(0,l.jsx)(Y.Z,{})}),(0,l.jsx)(ee.Z,{variant:"h6",noWrap:!0,component:"div",children:"Excel Extractor"}),(0,l.jsx)(q.Z,{className:"ml-auto mr-2",alt:"Icon",src:"https://iwasakishuto.github.io/xlxtractor/favicon.png"})]})}),(0,l.jsxs)(Q.ZP,{sx:{width:400,"& .MuiDrawer-paper":{width:400,boxSizing:"border-box"}},variant:"persistent",anchor:"left",open:e,className:"flex-shrink-0",PaperProps:{className:"bg-slate-200 text-slate-800"},children:[(0,l.jsx)(W,{className:"bg-slate-800 text-slate-200",children:(0,l.jsxs)("div",{className:"flex items-center w-full",children:[(0,l.jsx)("div",{className:"mx-auto text-xl font-bold",children:"Settings"}),(0,l.jsx)(X.Z,{onClick:()=>{t(!1)},children:(0,l.jsx)(V.Z,{className:"text-slate-100"})})]})}),(0,l.jsx)(J.Z,{}),(0,l.jsx)("div",{style:{width:340},className:"mx-auto mt-2",children:(0,l.jsx)(U,{sheet:null!==n?n.sheets[s]:null,kpiColIdx:k,dateRowIdx:S,kpis:b,setKpiColIdx:N,setDateRowIdx:y,setKpis:g,kpiOptions:v,excelFilename:p,setExcelFilename:h})})]}),(0,l.jsxs)(_,{open:e,drawerWidth:400,className:"bg-slate-200 text-slate-800 h-screen p-0",children:[(0,l.jsx)(W,{}),(0,l.jsxs)("div",{className:"w-full flex",style:{height:"calc(100% - ".concat(64,"px)")},children:[(0,l.jsx)("div",{className:"max-w-4xl 2xl:max-w-7xl w-full bg-slate-100 p-6",children:(0,l.jsx)("div",{className:"flex flex-col h-full",children:(0,l.jsx)("div",{className:"flex-1 items-stretch w-full h-full",children:null===n?(0,l.jsx)(o,{id:"excel-file",className:"w-full h-full px-6 py-2",text:"Any Excel file here!!",inputProps:{type:"file",accept:T.join(", "),onChange:e=>{e.preventDefault();let t=e.currentTarget.files;if(t&&t.length){let e=t[0];h(e.name),m(!0);let n=new FileReader;n.onload=()=>{n.result&&new c.Workbook().loadAsync(n.result,e=>{r(e),m(!1)})},n.readAsDataURL(e)}}},loading:d}):(0,l.jsxs)("div",{className:"w-full h-full px-6 py-2",children:[(0,l.jsx)(f,{workbook:n,sheetIndex:s,setSheetIndex:i}),(0,l.jsx)(x,{worksheet:null==n?void 0:n.sheets[s],dateRowIdx:S,kpiColIdx:k,kpis:b,maxRows:C})]})})})}),(0,l.jsx)("div",{className:"w-full flex-1",children:!e&&(0,l.jsx)(U,{sheet:null!==n?n.sheets[s]:null,kpiColIdx:k,dateRowIdx:S,kpis:b,setKpiColIdx:N,setDateRowIdx:y,setKpis:g,kpiOptions:v,className:"max-h-full",excelFilename:p,setExcelFilename:h})})]})]})]})}},2e3:function(e,t,n){"use strict";n.r(t),n.d(t,{SnackbarContext:function(){return o},SnackbarContextProvider:function(){return i}});var l=n(7437),a=n(3731),r=n(6251),s=n(2265);/**
 * @file React component of buttons with multiple effects.
 * @author Shuto Iwasaki <https://github.com/iwasakishuto>
 * @copyright Shuto Iwasaki 2024
 * @license MIT
 * @reference <https://mui.com/components/snackbars/>
 */let o=(0,s.createContext)(void 0),i=e=>{let{children:t}=e,[n,i]=(0,s.useState)({isOpen:!1,message:"",severity:"error",vertical:"bottom",horizontal:"right",autoHideDuration:3e3}),c=()=>{i({isOpen:!1,message:"",severity:"error",vertical:"bottom",horizontal:"left",autoHideDuration:3e3})};return(0,l.jsxs)(s.Fragment,{children:[(0,l.jsx)(o.Provider,{value:{showAlertSnack:e=>{let{message:t,severity:n="error",vertical:l="bottom",horizontal:a="right",autoHideDuration:r=3e3}=e;i({isOpen:!0,message:t,severity:n,vertical:l,horizontal:a,autoHideDuration:r})}},children:t}),(0,l.jsx)(r.Z,{open:n.isOpen,autoHideDuration:n.autoHideDuration,anchorOrigin:{vertical:n.vertical,horizontal:n.horizontal},onClose:c,className:n.isOpen?"":"hidden",children:(0,l.jsx)(a.Z,{onClose:c,severity:n.severity,className:"w-full",children:n.message})})]})}}},function(e){e.O(0,[565,196,493,817,627,971,69,744],function(){return e(e.s=7641)}),_N_E=e.O()}]);