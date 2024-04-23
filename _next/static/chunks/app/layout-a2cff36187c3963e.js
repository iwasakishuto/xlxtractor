(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{4238:function(e,t,n){Promise.resolve().then(n.t.bind(n,3385,23)),Promise.resolve().then(n.t.bind(n,9646,23)),Promise.resolve().then(n.bind(n,2e3))},2e3:function(e,t,n){"use strict";n.r(t),n.d(t,{SnackbarContext:function(){return l},SnackbarContextProvider:function(){return c}});var r=n(7437),o=n(3731),i=n(9221),s=n(6251),a=n(2265);/**
 * @file React component of buttons with multiple effects.
 * @author Shuto Iwasaki <https://github.com/iwasakishuto>
 * @copyright Shuto Iwasaki 2024
 * @license MIT
 * @reference <https://mui.com/components/snackbars/>
 */let l=(0,a.createContext)(void 0),c=e=>{let{children:t}=e,[n,c]=(0,a.useState)({isOpen:!1,message:"",severity:"error",vertical:"bottom",horizontal:"right",autoHideDuration:3e3}),u=()=>{c({isOpen:!1,message:"",severity:"error",vertical:"bottom",horizontal:"left",autoHideDuration:3e3})};return(0,r.jsxs)(a.Fragment,{children:[(0,r.jsx)(l.Provider,{value:{showAlertSnack:e=>{let{message:t,severity:n="error",vertical:r="bottom",horizontal:o="right",autoHideDuration:i=3e3}=e;c({isOpen:!0,message:t,severity:n,vertical:r,horizontal:o,autoHideDuration:i})}},children:t}),(0,r.jsx)(s.Z,{open:n.isOpen,autoHideDuration:n.autoHideDuration,anchorOrigin:{vertical:n.vertical,horizontal:n.horizontal},TransitionComponent:e=>(0,r.jsx)(i.Z,{...e,direction:"right"}),onClose:u,className:n.isOpen?"":"hidden",children:(0,r.jsx)(o.Z,{onClose:u,severity:n.severity,className:"w-full",children:n.message})})]})}},3385:function(){},9646:function(e){e.exports={style:{fontFamily:"'__Inter_c5f16d', '__Inter_Fallback_c5f16d'",fontStyle:"normal"},className:"__className_c5f16d"}}},function(e){e.O(0,[334,971,69,744],function(){return e(e.s=4238)}),_N_E=e.O()}]);