"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[986],{4986:function(t,e,a){a.r(e);var i=a(7320),s=a(1720),n=a(425),r=a(5969),c=a.n(r);let u=()=>{let[t,e]=(0,s.useState)(!0),{theme:a,resolvedTheme:r}=(0,n.F)(),u=""===c().comment.giscusConfig.themeURL?"dark"===a||"dark"===r?c().comment.giscusConfig.darkTheme:c().comment.giscusConfig.theme:c().comment.giscusConfig.themeURL,d="comments-container",o=(0,s.useCallback)(()=>{var t;e(!1);let{repo:a,repositoryId:i,category:s,categoryId:n,mapping:r,reactions:o,metadata:m,inputPosition:l,lang:g}=null===c()||void 0===c()?void 0:null===(t=c().comment)||void 0===t?void 0:t.giscusConfig,b=document.createElement("script");b.src="https://giscus.app/client.js",b.setAttribute("data-repo",a),b.setAttribute("data-repo-id",i),b.setAttribute("data-category",s),b.setAttribute("data-category-id",n),b.setAttribute("data-mapping",r),b.setAttribute("data-reactions-enabled",o),b.setAttribute("data-emit-metadata",m),b.setAttribute("data-input-position",l),b.setAttribute("data-lang",g),b.setAttribute("data-theme",u),b.setAttribute("crossorigin","anonymous"),b.async=!0;let p=document.getElementById(d);return p&&p.appendChild(b),()=>{let t=document.getElementById(d);t&&(t.innerHTML="")}},[u]);return(0,s.useEffect)(()=>{let t=document.querySelector("iframe.giscus-frame");t&&o()},[o]),(0,i.BX)("div",{className:"pt-6 pb-6 text-center text-gray-700 dark:text-gray-300",children:[t&&(0,i.tZ)("button",{onClick:o,children:"Load Comments"}),(0,i.tZ)("div",{className:"giscus",id:d})]})};e.default=u}}]);