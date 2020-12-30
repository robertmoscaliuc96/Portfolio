webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./style/about.css":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./style/about.css ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_background5_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/background5.png */ "./public/background5.png");
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_background5_png__WEBPACK_IMPORTED_MODULE_2__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "\r\n.about-image{\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat center top/cover;\r\n    width: 100%;\r\n    height: 100vh;\r\n  }\r\n\r\n\r\n/* About */\r\n.about-inner{\r\n    display: grid;\r\n    grid-template-columns: 2fr 1fr;\r\n    -webkit-transition-duration: 300ms;\r\n            transition-duration: 300ms;\r\n    grid-gap: 1rem;\r\n    gap: 1rem;\r\n    animation: para 2s 1;\r\n    -webkit-animation: para 3s 1;\r\n    \r\n  }\r\n  .about-text{\r\n    margin-top: 20%;\r\n    margin-left: 20%;\r\n    color: var(--text-color);\r\n  }\r\n  .map-inner{\r\n    height: 100vh;\r\n    background-color: white;\r\n  }\r\n  \r\n  .paragraph-about{\r\n    font-weight: 300;\r\n    line-height: 2rem;\r\n    word-spacing: 5px;\r\n    -webkit-animation: para 2s 1;\r\n            animation: para 2s 1;\r\n    margin-left: 1.5rem;\r\n    margin-bottom: 2rem;\r\n  \r\n  \r\n  }\r\n  .about-text h3{\r\n    color: var(--dif-color);\r\n  }\r\n  .large-about{\r\n    color:var(--dif-color);\r\n    padding-bottom: 2rem;\r\n    margin-left: 1rem;\r\n  }\r\n  \r\n  \r\n  .marker-box{\r\n    color: var(--text-color);\r\n    font-size: 1.2rem;\r\n    padding: 1rem;\r\n    background-color: var(--light-dark);\r\n    width: calc(23rem + 1vw);\r\n    height: calc(11rem + 1vw);\r\n    border-radius: 12px;\r\n  }\r\n  \r\n  .marker-name {\r\n    display: -webkit-flex;\r\n    display: flex;\r\n    padding-top: 1rem;\r\n    letter-spacing: 1.5px;\r\n  }\r\n  .marker-name i{\r\n    color: var(--dif-color);\r\n    font-size: 1.5rem;\r\n  }\r\n  \r\n  .contact-form input, textarea {\r\n    border: none;\r\n    background-color: var(--dark);\r\n    border-bottom: 2px solid var(--dif-color);\r\n    color: var(--dif-color);\r\n    margin: 1rem 1rem;\r\n    width: 100%;\r\n    height: 3rem;\r\n    font-size: 1.6rem;\r\n    padding-left: 0.6rem;\r\n    padding-top: 0.2rem;\r\n    -webkit-transition-duration: 300ms;\r\n            transition-duration: 300ms;\r\n    animation: para 2s 1;\r\n    -webkit-animation: para 3s 1;\r\n  }\r\n  .contact-form textarea{\r\n    margin: 1rem 1rem;\r\n    width: 100%;\r\n    height: 8rem;\r\n    font-size: 1.6rem;\r\n    resize: none;\r\n  }\r\n  .contact-button{\r\n    margin-top: 1rem;\r\n    margin-left: 1rem;\r\n  }\r\n  \r\n\r\n  \r\n@media (max-width: 768px){\r\n\r\n    .about-inner{\r\n      grid-template-columns: repeat(1,1fr);\r\n      overflow-x: scroll;\r\n    }\r\n    .map-inner{\r\n      display: none;\r\n    }\r\n    .about-text{\r\n      margin: 30% 5%;\r\n    }\r\n    .large-about{\r\n      font-size: 3.2rem;\r\n    }\r\n    .paragraph-about{\r\n      font-size: 1.3rem;\r\n    }\r\n  \r\n    .about-inner{\r\n      line-height: 2.5rem;\r\n    }\r\n    .map-inner{\r\n      width: 5rem;\r\n    }  \r\n    .contact-form input, textarea {\r\n      width: 90%;\r\n    }\r\n    .contact-form textarea {\r\n      width: 90%;\r\n    }\r\n\r\n    .skills-info{\r\n      line-height: 1.1rem;\r\n    }\r\n    .contact-button{\r\n      margin-left: 1rem;\r\n    }\r\n  \r\n  }\r\n  @media (min-width: 480px){\r\n  \r\n    .skills-info{\r\n      line-height: 1rem;\r\n    }\r\n    \r\n  }\r\n  ", "",{"version":3,"sources":["webpack://style/about.css"],"names":[],"mappings":";AACA;IACI,8EAAuE;IACvE,WAAW;IACX,aAAa;EACf;;;AAGF,UAAU;AACV;IACI,aAAa;IACb,8BAA8B;IAC9B,kCAA0B;YAA1B,0BAA0B;IAC1B,cAAS;IAAT,SAAS;IACT,oBAAoB;IACpB,4BAA4B;;EAE9B;EACA;IACE,eAAe;IACf,gBAAgB;IAChB,wBAAwB;EAC1B;EACA;IACE,aAAa;IACb,uBAAuB;EACzB;;EAEA;IACE,gBAAgB;IAChB,iBAAiB;IACjB,iBAAiB;IACjB,4BAAoB;YAApB,oBAAoB;IACpB,mBAAmB;IACnB,mBAAmB;;;EAGrB;EACA;IACE,uBAAuB;EACzB;EACA;IACE,sBAAsB;IACtB,oBAAoB;IACpB,iBAAiB;EACnB;;;EAGA;IACE,wBAAwB;IACxB,iBAAiB;IACjB,aAAa;IACb,mCAAmC;IACnC,wBAAwB;IACxB,yBAAyB;IACzB,mBAAmB;EACrB;;EAEA;IACE,qBAAa;IAAb,aAAa;IACb,iBAAiB;IACjB,qBAAqB;EACvB;EACA;IACE,uBAAuB;IACvB,iBAAiB;EACnB;;EAEA;IACE,YAAY;IACZ,6BAA6B;IAC7B,yCAAyC;IACzC,uBAAuB;IACvB,iBAAiB;IACjB,WAAW;IACX,YAAY;IACZ,iBAAiB;IACjB,oBAAoB;IACpB,mBAAmB;IACnB,kCAA0B;YAA1B,0BAA0B;IAC1B,oBAAoB;IACpB,4BAA4B;EAC9B;EACA;IACE,iBAAiB;IACjB,WAAW;IACX,YAAY;IACZ,iBAAiB;IACjB,YAAY;EACd;EACA;IACE,gBAAgB;IAChB,iBAAiB;EACnB;;;;AAIF;;IAEI;MACE,oCAAoC;MACpC,kBAAkB;IACpB;IACA;MACE,aAAa;IACf;IACA;MACE,cAAc;IAChB;IACA;MACE,iBAAiB;IACnB;IACA;MACE,iBAAiB;IACnB;;IAEA;MACE,mBAAmB;IACrB;IACA;MACE,WAAW;IACb;IACA;MACE,UAAU;IACZ;IACA;MACE,UAAU;IACZ;;IAEA;MACE,mBAAmB;IACrB;IACA;MACE,iBAAiB;IACnB;;EAEF;EACA;;IAEE;MACE,iBAAiB;IACnB;;EAEF","sourcesContent":["\r\n.about-image{\r\n    background: url('../public/background5.png') no-repeat center top/cover;\r\n    width: 100%;\r\n    height: 100vh;\r\n  }\r\n\r\n\r\n/* About */\r\n.about-inner{\r\n    display: grid;\r\n    grid-template-columns: 2fr 1fr;\r\n    transition-duration: 300ms;\r\n    gap: 1rem;\r\n    animation: para 2s 1;\r\n    -webkit-animation: para 3s 1;\r\n    \r\n  }\r\n  .about-text{\r\n    margin-top: 20%;\r\n    margin-left: 20%;\r\n    color: var(--text-color);\r\n  }\r\n  .map-inner{\r\n    height: 100vh;\r\n    background-color: white;\r\n  }\r\n  \r\n  .paragraph-about{\r\n    font-weight: 300;\r\n    line-height: 2rem;\r\n    word-spacing: 5px;\r\n    animation: para 2s 1;\r\n    margin-left: 1.5rem;\r\n    margin-bottom: 2rem;\r\n  \r\n  \r\n  }\r\n  .about-text h3{\r\n    color: var(--dif-color);\r\n  }\r\n  .large-about{\r\n    color:var(--dif-color);\r\n    padding-bottom: 2rem;\r\n    margin-left: 1rem;\r\n  }\r\n  \r\n  \r\n  .marker-box{\r\n    color: var(--text-color);\r\n    font-size: 1.2rem;\r\n    padding: 1rem;\r\n    background-color: var(--light-dark);\r\n    width: calc(23rem + 1vw);\r\n    height: calc(11rem + 1vw);\r\n    border-radius: 12px;\r\n  }\r\n  \r\n  .marker-name {\r\n    display: flex;\r\n    padding-top: 1rem;\r\n    letter-spacing: 1.5px;\r\n  }\r\n  .marker-name i{\r\n    color: var(--dif-color);\r\n    font-size: 1.5rem;\r\n  }\r\n  \r\n  .contact-form input, textarea {\r\n    border: none;\r\n    background-color: var(--dark);\r\n    border-bottom: 2px solid var(--dif-color);\r\n    color: var(--dif-color);\r\n    margin: 1rem 1rem;\r\n    width: 100%;\r\n    height: 3rem;\r\n    font-size: 1.6rem;\r\n    padding-left: 0.6rem;\r\n    padding-top: 0.2rem;\r\n    transition-duration: 300ms;\r\n    animation: para 2s 1;\r\n    -webkit-animation: para 3s 1;\r\n  }\r\n  .contact-form textarea{\r\n    margin: 1rem 1rem;\r\n    width: 100%;\r\n    height: 8rem;\r\n    font-size: 1.6rem;\r\n    resize: none;\r\n  }\r\n  .contact-button{\r\n    margin-top: 1rem;\r\n    margin-left: 1rem;\r\n  }\r\n  \r\n\r\n  \r\n@media (max-width: 768px){\r\n\r\n    .about-inner{\r\n      grid-template-columns: repeat(1,1fr);\r\n      overflow-x: scroll;\r\n    }\r\n    .map-inner{\r\n      display: none;\r\n    }\r\n    .about-text{\r\n      margin: 30% 5%;\r\n    }\r\n    .large-about{\r\n      font-size: 3.2rem;\r\n    }\r\n    .paragraph-about{\r\n      font-size: 1.3rem;\r\n    }\r\n  \r\n    .about-inner{\r\n      line-height: 2.5rem;\r\n    }\r\n    .map-inner{\r\n      width: 5rem;\r\n    }  \r\n    .contact-form input, textarea {\r\n      width: 90%;\r\n    }\r\n    .contact-form textarea {\r\n      width: 90%;\r\n    }\r\n\r\n    .skills-info{\r\n      line-height: 1.1rem;\r\n    }\r\n    .contact-button{\r\n      margin-left: 1rem;\r\n    }\r\n  \r\n  }\r\n  @media (min-width: 480px){\r\n  \r\n    .skills-info{\r\n      line-height: 1rem;\r\n    }\r\n    \r\n  }\r\n  "],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGUvYWJvdXQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUN5RjtBQUNPO0FBQzFCO0FBQ3RFLDhCQUE4QixtRkFBMkI7QUFDekQseUNBQXlDLHNGQUErQixDQUFDLCtEQUE2QjtBQUN0RztBQUNBLDhCQUE4QixRQUFTLG9CQUFvQiwrRkFBK0Ysb0JBQW9CLHNCQUFzQixPQUFPLHdDQUF3QyxzQkFBc0IsdUNBQXVDLDJDQUEyQywyQ0FBMkMsdUJBQXVCLGtCQUFrQiw2QkFBNkIscUNBQXFDLGVBQWUsa0JBQWtCLHdCQUF3Qix5QkFBeUIsaUNBQWlDLE9BQU8saUJBQWlCLHNCQUFzQixnQ0FBZ0MsT0FBTyw2QkFBNkIseUJBQXlCLDBCQUEwQiwwQkFBMEIscUNBQXFDLHFDQUFxQyw0QkFBNEIsNEJBQTRCLG1CQUFtQixxQkFBcUIsZ0NBQWdDLE9BQU8sbUJBQW1CLCtCQUErQiw2QkFBNkIsMEJBQTBCLE9BQU8sOEJBQThCLGlDQUFpQywwQkFBMEIsc0JBQXNCLDRDQUE0QyxpQ0FBaUMsa0NBQWtDLDRCQUE0QixPQUFPLDBCQUEwQiw4QkFBOEIsc0JBQXNCLDBCQUEwQiw4QkFBOEIsT0FBTyxxQkFBcUIsZ0NBQWdDLDBCQUEwQixPQUFPLDJDQUEyQyxxQkFBcUIsc0NBQXNDLGtEQUFrRCxnQ0FBZ0MsMEJBQTBCLG9CQUFvQixxQkFBcUIsMEJBQTBCLDZCQUE2Qiw0QkFBNEIsMkNBQTJDLDJDQUEyQyw2QkFBNkIscUNBQXFDLE9BQU8sNkJBQTZCLDBCQUEwQixvQkFBb0IscUJBQXFCLDBCQUEwQixxQkFBcUIsT0FBTyxzQkFBc0IseUJBQXlCLDBCQUEwQixPQUFPLDhDQUE4Qyx5QkFBeUIsK0NBQStDLDZCQUE2QixTQUFTLG1CQUFtQix3QkFBd0IsU0FBUyxvQkFBb0IseUJBQXlCLFNBQVMscUJBQXFCLDRCQUE0QixTQUFTLHlCQUF5Qiw0QkFBNEIsU0FBUywyQkFBMkIsOEJBQThCLFNBQVMsbUJBQW1CLHNCQUFzQixTQUFTLHlDQUF5QyxxQkFBcUIsU0FBUyxnQ0FBZ0MscUJBQXFCLFNBQVMseUJBQXlCLDhCQUE4QixTQUFTLHdCQUF3Qiw0QkFBNEIsU0FBUyxhQUFhLGdDQUFnQywyQkFBMkIsNEJBQTRCLFNBQVMsZUFBZSxhQUFhLDRFQUE0RSxLQUFLLFlBQVksV0FBVyxVQUFVLE9BQU8sVUFBVSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksY0FBYyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsZUFBZSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsUUFBUSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFdBQVcsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVksYUFBYSxTQUFTLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLE1BQU0sS0FBSyxZQUFZLE9BQU8sMENBQTBDLGdGQUFnRixvQkFBb0Isc0JBQXNCLE9BQU8sd0NBQXdDLHNCQUFzQix1Q0FBdUMsbUNBQW1DLGtCQUFrQiw2QkFBNkIscUNBQXFDLGVBQWUsa0JBQWtCLHdCQUF3Qix5QkFBeUIsaUNBQWlDLE9BQU8saUJBQWlCLHNCQUFzQixnQ0FBZ0MsT0FBTyw2QkFBNkIseUJBQXlCLDBCQUEwQiwwQkFBMEIsNkJBQTZCLDRCQUE0Qiw0QkFBNEIsbUJBQW1CLHFCQUFxQixnQ0FBZ0MsT0FBTyxtQkFBbUIsK0JBQStCLDZCQUE2QiwwQkFBMEIsT0FBTyw4QkFBOEIsaUNBQWlDLDBCQUEwQixzQkFBc0IsNENBQTRDLGlDQUFpQyxrQ0FBa0MsNEJBQTRCLE9BQU8sMEJBQTBCLHNCQUFzQiwwQkFBMEIsOEJBQThCLE9BQU8scUJBQXFCLGdDQUFnQywwQkFBMEIsT0FBTywyQ0FBMkMscUJBQXFCLHNDQUFzQyxrREFBa0QsZ0NBQWdDLDBCQUEwQixvQkFBb0IscUJBQXFCLDBCQUEwQiw2QkFBNkIsNEJBQTRCLG1DQUFtQyw2QkFBNkIscUNBQXFDLE9BQU8sNkJBQTZCLDBCQUEwQixvQkFBb0IscUJBQXFCLDBCQUEwQixxQkFBcUIsT0FBTyxzQkFBc0IseUJBQXlCLDBCQUEwQixPQUFPLDhDQUE4Qyx5QkFBeUIsK0NBQStDLDZCQUE2QixTQUFTLG1CQUFtQix3QkFBd0IsU0FBUyxvQkFBb0IseUJBQXlCLFNBQVMscUJBQXFCLDRCQUE0QixTQUFTLHlCQUF5Qiw0QkFBNEIsU0FBUywyQkFBMkIsOEJBQThCLFNBQVMsbUJBQW1CLHNCQUFzQixTQUFTLHlDQUF5QyxxQkFBcUIsU0FBUyxnQ0FBZ0MscUJBQXFCLFNBQVMseUJBQXlCLDhCQUE4QixTQUFTLHdCQUF3Qiw0QkFBNEIsU0FBUyxhQUFhLGdDQUFnQywyQkFBMkIsNEJBQTRCLFNBQVMsZUFBZSx5QkFBeUI7QUFDMzBPO0FBQ2Usc0ZBQXVCLEVBQUMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4xYTgxZDNmMzhjMGNkNzIxZjZkZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyBmcm9tIFwiLi4vcHVibGljL2JhY2tncm91bmQ1LnBuZ1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlxcclxcbi5hYm91dC1pbWFnZXtcXHJcXG4gICAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBuby1yZXBlYXQgY2VudGVyIHRvcC9jb3ZlcjtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICB9XFxyXFxuXFxyXFxuXFxyXFxuLyogQWJvdXQgKi9cXHJcXG4uYWJvdXQtaW5uZXJ7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDFmcjtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAzMDBtcztcXHJcXG4gICAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAzMDBtcztcXHJcXG4gICAgZ3JpZC1nYXA6IDFyZW07XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG4gICAgYW5pbWF0aW9uOiBwYXJhIDJzIDE7XFxyXFxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBwYXJhIDNzIDE7XFxyXFxuICAgIFxcclxcbiAgfVxcclxcbiAgLmFib3V0LXRleHR7XFxyXFxuICAgIG1hcmdpbi10b3A6IDIwJTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDIwJTtcXHJcXG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xcclxcbiAgfVxcclxcbiAgLm1hcC1pbm5lcntcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5wYXJhZ3JhcGgtYWJvdXR7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xcclxcbiAgICB3b3JkLXNwYWNpbmc6IDVweDtcXHJcXG4gICAgLXdlYmtpdC1hbmltYXRpb246IHBhcmEgMnMgMTtcXHJcXG4gICAgICAgICAgICBhbmltYXRpb246IHBhcmEgMnMgMTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDEuNXJlbTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXHJcXG4gIFxcclxcbiAgXFxyXFxuICB9XFxyXFxuICAuYWJvdXQtdGV4dCBoM3tcXHJcXG4gICAgY29sb3I6IHZhcigtLWRpZi1jb2xvcik7XFxyXFxuICB9XFxyXFxuICAubGFyZ2UtYWJvdXR7XFxyXFxuICAgIGNvbG9yOnZhcigtLWRpZi1jb2xvcik7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAycmVtO1xcclxcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgXFxyXFxuICAubWFya2VyLWJveHtcXHJcXG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtZGFyayk7XFxyXFxuICAgIHdpZHRoOiBjYWxjKDIzcmVtICsgMXZ3KTtcXHJcXG4gICAgaGVpZ2h0OiBjYWxjKDExcmVtICsgMXZ3KTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLm1hcmtlci1uYW1lIHtcXHJcXG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xcclxcbiAgfVxcclxcbiAgLm1hcmtlci1uYW1lIGl7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1kaWYtY29sb3IpO1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmNvbnRhY3QtZm9ybSBpbnB1dCwgdGV4dGFyZWEge1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmspO1xcclxcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tZGlmLWNvbG9yKTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWRpZi1jb2xvcik7XFxyXFxuICAgIG1hcmdpbjogMXJlbSAxcmVtO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAzcmVtO1xcclxcbiAgICBmb250LXNpemU6IDEuNnJlbTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAwLjZyZW07XFxyXFxuICAgIHBhZGRpbmctdG9wOiAwLjJyZW07XFxyXFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMzAwbXM7XFxyXFxuICAgICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMzAwbXM7XFxyXFxuICAgIGFuaW1hdGlvbjogcGFyYSAycyAxO1xcclxcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogcGFyYSAzcyAxO1xcclxcbiAgfVxcclxcbiAgLmNvbnRhY3QtZm9ybSB0ZXh0YXJlYXtcXHJcXG4gICAgbWFyZ2luOiAxcmVtIDFyZW07XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDhyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xcclxcbiAgICByZXNpemU6IG5vbmU7XFxyXFxuICB9XFxyXFxuICAuY29udGFjdC1idXR0b257XFxyXFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuXFxyXFxuICBcXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpe1xcclxcblxcclxcbiAgICAuYWJvdXQtaW5uZXJ7XFxyXFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwxZnIpO1xcclxcbiAgICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcXHJcXG4gICAgfVxcclxcbiAgICAubWFwLWlubmVye1xcclxcbiAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG4gICAgLmFib3V0LXRleHR7XFxyXFxuICAgICAgbWFyZ2luOiAzMCUgNSU7XFxyXFxuICAgIH1cXHJcXG4gICAgLmxhcmdlLWFib3V0e1xcclxcbiAgICAgIGZvbnQtc2l6ZTogMy4ycmVtO1xcclxcbiAgICB9XFxyXFxuICAgIC5wYXJhZ3JhcGgtYWJvdXR7XFxyXFxuICAgICAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxuICAgIH1cXHJcXG4gIFxcclxcbiAgICAuYWJvdXQtaW5uZXJ7XFxyXFxuICAgICAgbGluZS1oZWlnaHQ6IDIuNXJlbTtcXHJcXG4gICAgfVxcclxcbiAgICAubWFwLWlubmVye1xcclxcbiAgICAgIHdpZHRoOiA1cmVtO1xcclxcbiAgICB9ICBcXHJcXG4gICAgLmNvbnRhY3QtZm9ybSBpbnB1dCwgdGV4dGFyZWEge1xcclxcbiAgICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIH1cXHJcXG4gICAgLmNvbnRhY3QtZm9ybSB0ZXh0YXJlYSB7XFxyXFxuICAgICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuc2tpbGxzLWluZm97XFxyXFxuICAgICAgbGluZS1oZWlnaHQ6IDEuMXJlbTtcXHJcXG4gICAgfVxcclxcbiAgICAuY29udGFjdC1idXR0b257XFxyXFxuICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XFxyXFxuICAgIH1cXHJcXG4gIFxcclxcbiAgfVxcclxcbiAgQG1lZGlhIChtaW4td2lkdGg6IDQ4MHB4KXtcXHJcXG4gIFxcclxcbiAgICAuc2tpbGxzLWluZm97XFxyXFxuICAgICAgbGluZS1oZWlnaHQ6IDFyZW07XFxyXFxuICAgIH1cXHJcXG4gICAgXFxyXFxuICB9XFxyXFxuICBcIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3R5bGUvYWJvdXQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFDQTtJQUNJLDhFQUF1RTtJQUN2RSxXQUFXO0lBQ1gsYUFBYTtFQUNmOzs7QUFHRixVQUFVO0FBQ1Y7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGtDQUEwQjtZQUExQiwwQkFBMEI7SUFDMUIsY0FBUztJQUFULFNBQVM7SUFDVCxvQkFBb0I7SUFDcEIsNEJBQTRCOztFQUU5QjtFQUNBO0lBQ0UsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQix3QkFBd0I7RUFDMUI7RUFDQTtJQUNFLGFBQWE7SUFDYix1QkFBdUI7RUFDekI7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQiw0QkFBb0I7WUFBcEIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixtQkFBbUI7OztFQUdyQjtFQUNBO0lBQ0UsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSxzQkFBc0I7SUFDdEIsb0JBQW9CO0lBQ3BCLGlCQUFpQjtFQUNuQjs7O0VBR0E7SUFDRSx3QkFBd0I7SUFDeEIsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixtQ0FBbUM7SUFDbkMsd0JBQXdCO0lBQ3hCLHlCQUF5QjtJQUN6QixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxxQkFBYTtJQUFiLGFBQWE7SUFDYixpQkFBaUI7SUFDakIscUJBQXFCO0VBQ3ZCO0VBQ0E7SUFDRSx1QkFBdUI7SUFDdkIsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsWUFBWTtJQUNaLDZCQUE2QjtJQUM3Qix5Q0FBeUM7SUFDekMsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLGtDQUEwQjtZQUExQiwwQkFBMEI7SUFDMUIsb0JBQW9CO0lBQ3BCLDRCQUE0QjtFQUM5QjtFQUNBO0lBQ0UsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLFlBQVk7RUFDZDtFQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtFQUNuQjs7OztBQUlGOztJQUVJO01BQ0Usb0NBQW9DO01BQ3BDLGtCQUFrQjtJQUNwQjtJQUNBO01BQ0UsYUFBYTtJQUNmO0lBQ0E7TUFDRSxjQUFjO0lBQ2hCO0lBQ0E7TUFDRSxpQkFBaUI7SUFDbkI7SUFDQTtNQUNFLGlCQUFpQjtJQUNuQjs7SUFFQTtNQUNFLG1CQUFtQjtJQUNyQjtJQUNBO01BQ0UsV0FBVztJQUNiO0lBQ0E7TUFDRSxVQUFVO0lBQ1o7SUFDQTtNQUNFLFVBQVU7SUFDWjs7SUFFQTtNQUNFLG1CQUFtQjtJQUNyQjtJQUNBO01BQ0UsaUJBQWlCO0lBQ25COztFQUVGO0VBQ0E7O0lBRUU7TUFDRSxpQkFBaUI7SUFDbkI7O0VBRUZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxyXFxuLmFib3V0LWltYWdle1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uL3B1YmxpYy9iYWNrZ3JvdW5kNS5wbmcnKSBuby1yZXBlYXQgY2VudGVyIHRvcC9jb3ZlcjtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICB9XFxyXFxuXFxyXFxuXFxyXFxuLyogQWJvdXQgKi9cXHJcXG4uYWJvdXQtaW5uZXJ7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDFmcjtcXHJcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMzAwbXM7XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG4gICAgYW5pbWF0aW9uOiBwYXJhIDJzIDE7XFxyXFxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBwYXJhIDNzIDE7XFxyXFxuICAgIFxcclxcbiAgfVxcclxcbiAgLmFib3V0LXRleHR7XFxyXFxuICAgIG1hcmdpbi10b3A6IDIwJTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDIwJTtcXHJcXG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xcclxcbiAgfVxcclxcbiAgLm1hcC1pbm5lcntcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5wYXJhZ3JhcGgtYWJvdXR7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xcclxcbiAgICB3b3JkLXNwYWNpbmc6IDVweDtcXHJcXG4gICAgYW5pbWF0aW9uOiBwYXJhIDJzIDE7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxLjVyZW07XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XFxyXFxuICBcXHJcXG4gIFxcclxcbiAgfVxcclxcbiAgLmFib3V0LXRleHQgaDN7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1kaWYtY29sb3IpO1xcclxcbiAgfVxcclxcbiAgLmxhcmdlLWFib3V0e1xcclxcbiAgICBjb2xvcjp2YXIoLS1kaWYtY29sb3IpO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIFxcclxcbiAgLm1hcmtlci1ib3h7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWRhcmspO1xcclxcbiAgICB3aWR0aDogY2FsYygyM3JlbSArIDF2dyk7XFxyXFxuICAgIGhlaWdodDogY2FsYygxMXJlbSArIDF2dyk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5tYXJrZXItbmFtZSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMS41cHg7XFxyXFxuICB9XFxyXFxuICAubWFya2VyLW5hbWUgaXtcXHJcXG4gICAgY29sb3I6IHZhcigtLWRpZi1jb2xvcik7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuY29udGFjdC1mb3JtIGlucHV0LCB0ZXh0YXJlYSB7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyayk7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1kaWYtY29sb3IpO1xcclxcbiAgICBjb2xvcjogdmFyKC0tZGlmLWNvbG9yKTtcXHJcXG4gICAgbWFyZ2luOiAxcmVtIDFyZW07XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDNyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNnJlbTtcXHJcXG4gICAgcGFkZGluZy10b3A6IDAuMnJlbTtcXHJcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMzAwbXM7XFxyXFxuICAgIGFuaW1hdGlvbjogcGFyYSAycyAxO1xcclxcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogcGFyYSAzcyAxO1xcclxcbiAgfVxcclxcbiAgLmNvbnRhY3QtZm9ybSB0ZXh0YXJlYXtcXHJcXG4gICAgbWFyZ2luOiAxcmVtIDFyZW07XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDhyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xcclxcbiAgICByZXNpemU6IG5vbmU7XFxyXFxuICB9XFxyXFxuICAuY29udGFjdC1idXR0b257XFxyXFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuXFxyXFxuICBcXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpe1xcclxcblxcclxcbiAgICAuYWJvdXQtaW5uZXJ7XFxyXFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwxZnIpO1xcclxcbiAgICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcXHJcXG4gICAgfVxcclxcbiAgICAubWFwLWlubmVye1xcclxcbiAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG4gICAgLmFib3V0LXRleHR7XFxyXFxuICAgICAgbWFyZ2luOiAzMCUgNSU7XFxyXFxuICAgIH1cXHJcXG4gICAgLmxhcmdlLWFib3V0e1xcclxcbiAgICAgIGZvbnQtc2l6ZTogMy4ycmVtO1xcclxcbiAgICB9XFxyXFxuICAgIC5wYXJhZ3JhcGgtYWJvdXR7XFxyXFxuICAgICAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxuICAgIH1cXHJcXG4gIFxcclxcbiAgICAuYWJvdXQtaW5uZXJ7XFxyXFxuICAgICAgbGluZS1oZWlnaHQ6IDIuNXJlbTtcXHJcXG4gICAgfVxcclxcbiAgICAubWFwLWlubmVye1xcclxcbiAgICAgIHdpZHRoOiA1cmVtO1xcclxcbiAgICB9ICBcXHJcXG4gICAgLmNvbnRhY3QtZm9ybSBpbnB1dCwgdGV4dGFyZWEge1xcclxcbiAgICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIH1cXHJcXG4gICAgLmNvbnRhY3QtZm9ybSB0ZXh0YXJlYSB7XFxyXFxuICAgICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuc2tpbGxzLWluZm97XFxyXFxuICAgICAgbGluZS1oZWlnaHQ6IDEuMXJlbTtcXHJcXG4gICAgfVxcclxcbiAgICAuY29udGFjdC1idXR0b257XFxyXFxuICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XFxyXFxuICAgIH1cXHJcXG4gIFxcclxcbiAgfVxcclxcbiAgQG1lZGlhIChtaW4td2lkdGg6IDQ4MHB4KXtcXHJcXG4gIFxcclxcbiAgICAuc2tpbGxzLWluZm97XFxyXFxuICAgICAgbGluZS1oZWlnaHQ6IDFyZW07XFxyXFxuICAgIH1cXHJcXG4gICAgXFxyXFxuICB9XFxyXFxuICBcIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==