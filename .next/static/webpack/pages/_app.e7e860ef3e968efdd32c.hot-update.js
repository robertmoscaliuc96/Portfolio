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
___CSS_LOADER_EXPORT___.push([module.i, "\r\n.about-image{\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat center top/cover;\r\n    width: 100%;\r\n    height: 100vh;\r\n  }\r\n\r\n\r\n/* About */\r\n.about-inner{\r\n    display: grid;\r\n    grid-template-columns: repeat(2,1fr);\r\n    -webkit-transition-duration: 300ms;\r\n            transition-duration: 300ms;\r\n    grid-gap: 5rem;\r\n    gap: 5rem;\r\n    animation: para 2s 1;\r\n    -webkit-animation: para 3s 1;\r\n    \r\n  }\r\n  .about-text{\r\n    margin-top: 20%;\r\n    margin-left: 20%;\r\n    color: var(--text-color);\r\n  }\r\n  .map-inner{\r\n    height: 100vh;\r\n    background-color: white;\r\n  }\r\n  \r\n  .paragraph-about{\r\n    font-weight: 300;\r\n    line-height: 2rem;\r\n    word-spacing: 5px;\r\n    -webkit-animation: para 2s 1;\r\n            animation: para 2s 1;\r\n    margin-left: 1.5rem;\r\n    margin-bottom: 2rem;\r\n  \r\n  \r\n  }\r\n  .about-text h3{\r\n    color: var(--dif-color);\r\n  }\r\n  .large-about{\r\n    color:var(--dif-color);\r\n    padding-bottom: 2rem;\r\n    margin-left: 1rem;\r\n  }\r\n  \r\n  \r\n  .marker-box{\r\n    color: var(--text-color);\r\n    font-size: 1.2rem;\r\n    padding: 1rem;\r\n    background-color: var(--light-dark);\r\n    width: calc(23rem + 1vw);\r\n    height: calc(11rem + 1vw);\r\n    border-radius: 12px;\r\n  }\r\n  \r\n  .marker-name {\r\n    display: -webkit-flex;\r\n    display: flex;\r\n    padding-top: 1rem;\r\n    letter-spacing: 1.5px;\r\n  }\r\n  .marker-name i{\r\n    color: var(--dif-color);\r\n    font-size: 1.5rem;\r\n  }\r\n  \r\n  .contact-form input, textarea {\r\n    border: none;\r\n    background-color: var(--dark);\r\n    border-bottom: 2px solid var(--dif-color);\r\n    color: var(--dif-color);\r\n    margin: 1rem 1rem;\r\n    width: 100%;\r\n    height: 3rem;\r\n    font-size: 1.6rem;\r\n    padding-left: 0.6rem;\r\n    padding-top: 0.2rem;\r\n    -webkit-transition-duration: 300ms;\r\n            transition-duration: 300ms;\r\n    animation: para 2s 1;\r\n    -webkit-animation: para 3s 1;\r\n  }\r\n  .contact-form textarea{\r\n    margin: 1rem 1rem;\r\n    width: 100%;\r\n    height: 8rem;\r\n    font-size: 1.6rem;\r\n    resize: none;\r\n  }\r\n  .contact-button{\r\n    margin-top: 1rem;\r\n    margin-left: 1rem;\r\n  }\r\n  \r\n\r\n  \r\n@media (max-width: 768px){\r\n\r\n    .about-inner{\r\n      grid-template-columns: repeat(1,1fr);\r\n      overflow-x: scroll;\r\n    }\r\n    .map-inner{\r\n      display: none;\r\n    }\r\n    .about-text{\r\n      margin: 30% 5%;\r\n    }\r\n  \r\n    .about-inner{\r\n      line-height: 2.5rem;\r\n    }\r\n    .map-inner{\r\n      width: 5rem;\r\n    }  \r\n    .contact-form input, textarea {\r\n      width: 90%;\r\n    }\r\n    .contact-form textarea {\r\n      width: 90%;\r\n    }\r\n\r\n    .skills-info{\r\n      line-height: 1.1rem;\r\n    }\r\n    .contact-button{\r\n      margin-left: 1rem;\r\n    }\r\n  \r\n  }\r\n  @media (min-width: 480px){\r\n  \r\n    .skills-info{\r\n      line-height: 1rem;\r\n    }\r\n    \r\n  }\r\n  ", "",{"version":3,"sources":["webpack://style/about.css"],"names":[],"mappings":";AACA;IACI,8EAAuE;IACvE,WAAW;IACX,aAAa;EACf;;;AAGF,UAAU;AACV;IACI,aAAa;IACb,oCAAoC;IACpC,kCAA0B;YAA1B,0BAA0B;IAC1B,cAAS;IAAT,SAAS;IACT,oBAAoB;IACpB,4BAA4B;;EAE9B;EACA;IACE,eAAe;IACf,gBAAgB;IAChB,wBAAwB;EAC1B;EACA;IACE,aAAa;IACb,uBAAuB;EACzB;;EAEA;IACE,gBAAgB;IAChB,iBAAiB;IACjB,iBAAiB;IACjB,4BAAoB;YAApB,oBAAoB;IACpB,mBAAmB;IACnB,mBAAmB;;;EAGrB;EACA;IACE,uBAAuB;EACzB;EACA;IACE,sBAAsB;IACtB,oBAAoB;IACpB,iBAAiB;EACnB;;;EAGA;IACE,wBAAwB;IACxB,iBAAiB;IACjB,aAAa;IACb,mCAAmC;IACnC,wBAAwB;IACxB,yBAAyB;IACzB,mBAAmB;EACrB;;EAEA;IACE,qBAAa;IAAb,aAAa;IACb,iBAAiB;IACjB,qBAAqB;EACvB;EACA;IACE,uBAAuB;IACvB,iBAAiB;EACnB;;EAEA;IACE,YAAY;IACZ,6BAA6B;IAC7B,yCAAyC;IACzC,uBAAuB;IACvB,iBAAiB;IACjB,WAAW;IACX,YAAY;IACZ,iBAAiB;IACjB,oBAAoB;IACpB,mBAAmB;IACnB,kCAA0B;YAA1B,0BAA0B;IAC1B,oBAAoB;IACpB,4BAA4B;EAC9B;EACA;IACE,iBAAiB;IACjB,WAAW;IACX,YAAY;IACZ,iBAAiB;IACjB,YAAY;EACd;EACA;IACE,gBAAgB;IAChB,iBAAiB;EACnB;;;;AAIF;;IAEI;MACE,oCAAoC;MACpC,kBAAkB;IACpB;IACA;MACE,aAAa;IACf;IACA;MACE,cAAc;IAChB;;IAEA;MACE,mBAAmB;IACrB;IACA;MACE,WAAW;IACb;IACA;MACE,UAAU;IACZ;IACA;MACE,UAAU;IACZ;;IAEA;MACE,mBAAmB;IACrB;IACA;MACE,iBAAiB;IACnB;;EAEF;EACA;;IAEE;MACE,iBAAiB;IACnB;;EAEF","sourcesContent":["\r\n.about-image{\r\n    background: url('../public/background5.png') no-repeat center top/cover;\r\n    width: 100%;\r\n    height: 100vh;\r\n  }\r\n\r\n\r\n/* About */\r\n.about-inner{\r\n    display: grid;\r\n    grid-template-columns: repeat(2,1fr);\r\n    transition-duration: 300ms;\r\n    gap: 5rem;\r\n    animation: para 2s 1;\r\n    -webkit-animation: para 3s 1;\r\n    \r\n  }\r\n  .about-text{\r\n    margin-top: 20%;\r\n    margin-left: 20%;\r\n    color: var(--text-color);\r\n  }\r\n  .map-inner{\r\n    height: 100vh;\r\n    background-color: white;\r\n  }\r\n  \r\n  .paragraph-about{\r\n    font-weight: 300;\r\n    line-height: 2rem;\r\n    word-spacing: 5px;\r\n    animation: para 2s 1;\r\n    margin-left: 1.5rem;\r\n    margin-bottom: 2rem;\r\n  \r\n  \r\n  }\r\n  .about-text h3{\r\n    color: var(--dif-color);\r\n  }\r\n  .large-about{\r\n    color:var(--dif-color);\r\n    padding-bottom: 2rem;\r\n    margin-left: 1rem;\r\n  }\r\n  \r\n  \r\n  .marker-box{\r\n    color: var(--text-color);\r\n    font-size: 1.2rem;\r\n    padding: 1rem;\r\n    background-color: var(--light-dark);\r\n    width: calc(23rem + 1vw);\r\n    height: calc(11rem + 1vw);\r\n    border-radius: 12px;\r\n  }\r\n  \r\n  .marker-name {\r\n    display: flex;\r\n    padding-top: 1rem;\r\n    letter-spacing: 1.5px;\r\n  }\r\n  .marker-name i{\r\n    color: var(--dif-color);\r\n    font-size: 1.5rem;\r\n  }\r\n  \r\n  .contact-form input, textarea {\r\n    border: none;\r\n    background-color: var(--dark);\r\n    border-bottom: 2px solid var(--dif-color);\r\n    color: var(--dif-color);\r\n    margin: 1rem 1rem;\r\n    width: 100%;\r\n    height: 3rem;\r\n    font-size: 1.6rem;\r\n    padding-left: 0.6rem;\r\n    padding-top: 0.2rem;\r\n    transition-duration: 300ms;\r\n    animation: para 2s 1;\r\n    -webkit-animation: para 3s 1;\r\n  }\r\n  .contact-form textarea{\r\n    margin: 1rem 1rem;\r\n    width: 100%;\r\n    height: 8rem;\r\n    font-size: 1.6rem;\r\n    resize: none;\r\n  }\r\n  .contact-button{\r\n    margin-top: 1rem;\r\n    margin-left: 1rem;\r\n  }\r\n  \r\n\r\n  \r\n@media (max-width: 768px){\r\n\r\n    .about-inner{\r\n      grid-template-columns: repeat(1,1fr);\r\n      overflow-x: scroll;\r\n    }\r\n    .map-inner{\r\n      display: none;\r\n    }\r\n    .about-text{\r\n      margin: 30% 5%;\r\n    }\r\n  \r\n    .about-inner{\r\n      line-height: 2.5rem;\r\n    }\r\n    .map-inner{\r\n      width: 5rem;\r\n    }  \r\n    .contact-form input, textarea {\r\n      width: 90%;\r\n    }\r\n    .contact-form textarea {\r\n      width: 90%;\r\n    }\r\n\r\n    .skills-info{\r\n      line-height: 1.1rem;\r\n    }\r\n    .contact-button{\r\n      margin-left: 1rem;\r\n    }\r\n  \r\n  }\r\n  @media (min-width: 480px){\r\n  \r\n    .skills-info{\r\n      line-height: 1rem;\r\n    }\r\n    \r\n  }\r\n  "],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGUvYWJvdXQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUN5RjtBQUNPO0FBQzFCO0FBQ3RFLDhCQUE4QixtRkFBMkI7QUFDekQseUNBQXlDLHNGQUErQixDQUFDLCtEQUE2QjtBQUN0RztBQUNBLDhCQUE4QixRQUFTLG9CQUFvQiwrRkFBK0Ysb0JBQW9CLHNCQUFzQixPQUFPLHdDQUF3QyxzQkFBc0IsNkNBQTZDLDJDQUEyQywyQ0FBMkMsdUJBQXVCLGtCQUFrQiw2QkFBNkIscUNBQXFDLGVBQWUsa0JBQWtCLHdCQUF3Qix5QkFBeUIsaUNBQWlDLE9BQU8saUJBQWlCLHNCQUFzQixnQ0FBZ0MsT0FBTyw2QkFBNkIseUJBQXlCLDBCQUEwQiwwQkFBMEIscUNBQXFDLHFDQUFxQyw0QkFBNEIsNEJBQTRCLG1CQUFtQixxQkFBcUIsZ0NBQWdDLE9BQU8sbUJBQW1CLCtCQUErQiw2QkFBNkIsMEJBQTBCLE9BQU8sOEJBQThCLGlDQUFpQywwQkFBMEIsc0JBQXNCLDRDQUE0QyxpQ0FBaUMsa0NBQWtDLDRCQUE0QixPQUFPLDBCQUEwQiw4QkFBOEIsc0JBQXNCLDBCQUEwQiw4QkFBOEIsT0FBTyxxQkFBcUIsZ0NBQWdDLDBCQUEwQixPQUFPLDJDQUEyQyxxQkFBcUIsc0NBQXNDLGtEQUFrRCxnQ0FBZ0MsMEJBQTBCLG9CQUFvQixxQkFBcUIsMEJBQTBCLDZCQUE2Qiw0QkFBNEIsMkNBQTJDLDJDQUEyQyw2QkFBNkIscUNBQXFDLE9BQU8sNkJBQTZCLDBCQUEwQixvQkFBb0IscUJBQXFCLDBCQUEwQixxQkFBcUIsT0FBTyxzQkFBc0IseUJBQXlCLDBCQUEwQixPQUFPLDhDQUE4Qyx5QkFBeUIsK0NBQStDLDZCQUE2QixTQUFTLG1CQUFtQix3QkFBd0IsU0FBUyxvQkFBb0IseUJBQXlCLFNBQVMsMkJBQTJCLDhCQUE4QixTQUFTLG1CQUFtQixzQkFBc0IsU0FBUyx5Q0FBeUMscUJBQXFCLFNBQVMsZ0NBQWdDLHFCQUFxQixTQUFTLHlCQUF5Qiw4QkFBOEIsU0FBUyx3QkFBd0IsNEJBQTRCLFNBQVMsYUFBYSxnQ0FBZ0MsMkJBQTJCLDRCQUE0QixTQUFTLGVBQWUsYUFBYSw0RUFBNEUsS0FBSyxZQUFZLFdBQVcsVUFBVSxPQUFPLFVBQVUsS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGNBQWMsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGVBQWUsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFFBQVEsS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxXQUFXLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLEtBQUssS0FBSyxZQUFZLGFBQWEsU0FBUyxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxNQUFNLEtBQUssWUFBWSxPQUFPLDBDQUEwQyxnRkFBZ0Ysb0JBQW9CLHNCQUFzQixPQUFPLHdDQUF3QyxzQkFBc0IsNkNBQTZDLG1DQUFtQyxrQkFBa0IsNkJBQTZCLHFDQUFxQyxlQUFlLGtCQUFrQix3QkFBd0IseUJBQXlCLGlDQUFpQyxPQUFPLGlCQUFpQixzQkFBc0IsZ0NBQWdDLE9BQU8sNkJBQTZCLHlCQUF5QiwwQkFBMEIsMEJBQTBCLDZCQUE2Qiw0QkFBNEIsNEJBQTRCLG1CQUFtQixxQkFBcUIsZ0NBQWdDLE9BQU8sbUJBQW1CLCtCQUErQiw2QkFBNkIsMEJBQTBCLE9BQU8sOEJBQThCLGlDQUFpQywwQkFBMEIsc0JBQXNCLDRDQUE0QyxpQ0FBaUMsa0NBQWtDLDRCQUE0QixPQUFPLDBCQUEwQixzQkFBc0IsMEJBQTBCLDhCQUE4QixPQUFPLHFCQUFxQixnQ0FBZ0MsMEJBQTBCLE9BQU8sMkNBQTJDLHFCQUFxQixzQ0FBc0Msa0RBQWtELGdDQUFnQywwQkFBMEIsb0JBQW9CLHFCQUFxQiwwQkFBMEIsNkJBQTZCLDRCQUE0QixtQ0FBbUMsNkJBQTZCLHFDQUFxQyxPQUFPLDZCQUE2QiwwQkFBMEIsb0JBQW9CLHFCQUFxQiwwQkFBMEIscUJBQXFCLE9BQU8sc0JBQXNCLHlCQUF5QiwwQkFBMEIsT0FBTyw4Q0FBOEMseUJBQXlCLCtDQUErQyw2QkFBNkIsU0FBUyxtQkFBbUIsd0JBQXdCLFNBQVMsb0JBQW9CLHlCQUF5QixTQUFTLDJCQUEyQiw4QkFBOEIsU0FBUyxtQkFBbUIsc0JBQXNCLFNBQVMseUNBQXlDLHFCQUFxQixTQUFTLGdDQUFnQyxxQkFBcUIsU0FBUyx5QkFBeUIsOEJBQThCLFNBQVMsd0JBQXdCLDRCQUE0QixTQUFTLGFBQWEsZ0NBQWdDLDJCQUEyQiw0QkFBNEIsU0FBUyxlQUFlLHlCQUF5QjtBQUN6ak87QUFDZSxzRkFBdUIsRUFBQyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmU3ZTg2MGVmM2U5NjhlZmRkMzJjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fIGZyb20gXCIuLi9wdWJsaWMvYmFja2dyb3VuZDUucG5nXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxyXFxuLmFib3V0LWltYWdle1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIG5vLXJlcGVhdCBjZW50ZXIgdG9wL2NvdmVyO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIH1cXHJcXG5cXHJcXG5cXHJcXG4vKiBBYm91dCAqL1xcclxcbi5hYm91dC1pbm5lcntcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwxZnIpO1xcclxcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDMwMG1zO1xcclxcbiAgICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDMwMG1zO1xcclxcbiAgICBncmlkLWdhcDogNXJlbTtcXHJcXG4gICAgZ2FwOiA1cmVtO1xcclxcbiAgICBhbmltYXRpb246IHBhcmEgMnMgMTtcXHJcXG4gICAgLXdlYmtpdC1hbmltYXRpb246IHBhcmEgM3MgMTtcXHJcXG4gICAgXFxyXFxuICB9XFxyXFxuICAuYWJvdXQtdGV4dHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMjAlO1xcclxcbiAgICBtYXJnaW4tbGVmdDogMjAlO1xcclxcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxyXFxuICB9XFxyXFxuICAubWFwLWlubmVye1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLnBhcmFncmFwaC1hYm91dHtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDJyZW07XFxyXFxuICAgIHdvcmQtc3BhY2luZzogNXB4O1xcclxcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogcGFyYSAycyAxO1xcclxcbiAgICAgICAgICAgIGFuaW1hdGlvbjogcGFyYSAycyAxO1xcclxcbiAgICBtYXJnaW4tbGVmdDogMS41cmVtO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcclxcbiAgXFxyXFxuICBcXHJcXG4gIH1cXHJcXG4gIC5hYm91dC10ZXh0IGgze1xcclxcbiAgICBjb2xvcjogdmFyKC0tZGlmLWNvbG9yKTtcXHJcXG4gIH1cXHJcXG4gIC5sYXJnZS1hYm91dHtcXHJcXG4gICAgY29sb3I6dmFyKC0tZGlmLWNvbG9yKTtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDJyZW07XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICBcXHJcXG4gIC5tYXJrZXItYm94e1xcclxcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1kYXJrKTtcXHJcXG4gICAgd2lkdGg6IGNhbGMoMjNyZW0gKyAxdncpO1xcclxcbiAgICBoZWlnaHQ6IGNhbGMoMTFyZW0gKyAxdncpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAubWFya2VyLW5hbWUge1xcclxcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMS41cHg7XFxyXFxuICB9XFxyXFxuICAubWFya2VyLW5hbWUgaXtcXHJcXG4gICAgY29sb3I6IHZhcigtLWRpZi1jb2xvcik7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuY29udGFjdC1mb3JtIGlucHV0LCB0ZXh0YXJlYSB7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyayk7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1kaWYtY29sb3IpO1xcclxcbiAgICBjb2xvcjogdmFyKC0tZGlmLWNvbG9yKTtcXHJcXG4gICAgbWFyZ2luOiAxcmVtIDFyZW07XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDNyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNnJlbTtcXHJcXG4gICAgcGFkZGluZy10b3A6IDAuMnJlbTtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAzMDBtcztcXHJcXG4gICAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAzMDBtcztcXHJcXG4gICAgYW5pbWF0aW9uOiBwYXJhIDJzIDE7XFxyXFxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBwYXJhIDNzIDE7XFxyXFxuICB9XFxyXFxuICAuY29udGFjdC1mb3JtIHRleHRhcmVhe1xcclxcbiAgICBtYXJnaW46IDFyZW0gMXJlbTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogOHJlbTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjZyZW07XFxyXFxuICAgIHJlc2l6ZTogbm9uZTtcXHJcXG4gIH1cXHJcXG4gIC5jb250YWN0LWJ1dHRvbntcXHJcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XFxyXFxuICB9XFxyXFxuICBcXHJcXG5cXHJcXG4gIFxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCl7XFxyXFxuXFxyXFxuICAgIC5hYm91dC1pbm5lcntcXHJcXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLDFmcik7XFxyXFxuICAgICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xcclxcbiAgICB9XFxyXFxuICAgIC5tYXAtaW5uZXJ7XFxyXFxuICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgfVxcclxcbiAgICAuYWJvdXQtdGV4dHtcXHJcXG4gICAgICBtYXJnaW46IDMwJSA1JTtcXHJcXG4gICAgfVxcclxcbiAgXFxyXFxuICAgIC5hYm91dC1pbm5lcntcXHJcXG4gICAgICBsaW5lLWhlaWdodDogMi41cmVtO1xcclxcbiAgICB9XFxyXFxuICAgIC5tYXAtaW5uZXJ7XFxyXFxuICAgICAgd2lkdGg6IDVyZW07XFxyXFxuICAgIH0gIFxcclxcbiAgICAuY29udGFjdC1mb3JtIGlucHV0LCB0ZXh0YXJlYSB7XFxyXFxuICAgICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgfVxcclxcbiAgICAuY29udGFjdC1mb3JtIHRleHRhcmVhIHtcXHJcXG4gICAgICB3aWR0aDogOTAlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5za2lsbHMtaW5mb3tcXHJcXG4gICAgICBsaW5lLWhlaWdodDogMS4xcmVtO1xcclxcbiAgICB9XFxyXFxuICAgIC5jb250YWN0LWJ1dHRvbntcXHJcXG4gICAgICBtYXJnaW4tbGVmdDogMXJlbTtcXHJcXG4gICAgfVxcclxcbiAgXFxyXFxuICB9XFxyXFxuICBAbWVkaWEgKG1pbi13aWR0aDogNDgwcHgpe1xcclxcbiAgXFxyXFxuICAgIC5za2lsbHMtaW5mb3tcXHJcXG4gICAgICBsaW5lLWhlaWdodDogMXJlbTtcXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG4gIH1cXHJcXG4gIFwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zdHlsZS9hYm91dC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQUNBO0lBQ0ksOEVBQXVFO0lBQ3ZFLFdBQVc7SUFDWCxhQUFhO0VBQ2Y7OztBQUdGLFVBQVU7QUFDVjtJQUNJLGFBQWE7SUFDYixvQ0FBb0M7SUFDcEMsa0NBQTBCO1lBQTFCLDBCQUEwQjtJQUMxQixjQUFTO0lBQVQsU0FBUztJQUNULG9CQUFvQjtJQUNwQiw0QkFBNEI7O0VBRTlCO0VBQ0E7SUFDRSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHdCQUF3QjtFQUMxQjtFQUNBO0lBQ0UsYUFBYTtJQUNiLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLDRCQUFvQjtZQUFwQixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLG1CQUFtQjs7O0VBR3JCO0VBQ0E7SUFDRSx1QkFBdUI7RUFDekI7RUFDQTtJQUNFLHNCQUFzQjtJQUN0QixvQkFBb0I7SUFDcEIsaUJBQWlCO0VBQ25COzs7RUFHQTtJQUNFLHdCQUF3QjtJQUN4QixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLG1DQUFtQztJQUNuQyx3QkFBd0I7SUFDeEIseUJBQXlCO0lBQ3pCLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLHFCQUFhO0lBQWIsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixxQkFBcUI7RUFDdkI7RUFDQTtJQUNFLHVCQUF1QjtJQUN2QixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osNkJBQTZCO0lBQzdCLHlDQUF5QztJQUN6Qyx1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsa0NBQTBCO1lBQTFCLDBCQUEwQjtJQUMxQixvQkFBb0I7SUFDcEIsNEJBQTRCO0VBQzlCO0VBQ0E7SUFDRSxpQkFBaUI7SUFDakIsV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsWUFBWTtFQUNkO0VBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0VBQ25COzs7O0FBSUY7O0lBRUk7TUFDRSxvQ0FBb0M7TUFDcEMsa0JBQWtCO0lBQ3BCO0lBQ0E7TUFDRSxhQUFhO0lBQ2Y7SUFDQTtNQUNFLGNBQWM7SUFDaEI7O0lBRUE7TUFDRSxtQkFBbUI7SUFDckI7SUFDQTtNQUNFLFdBQVc7SUFDYjtJQUNBO01BQ0UsVUFBVTtJQUNaO0lBQ0E7TUFDRSxVQUFVO0lBQ1o7O0lBRUE7TUFDRSxtQkFBbUI7SUFDckI7SUFDQTtNQUNFLGlCQUFpQjtJQUNuQjs7RUFFRjtFQUNBOztJQUVFO01BQ0UsaUJBQWlCO0lBQ25COztFQUVGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcclxcbi5hYm91dC1pbWFnZXtcXHJcXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi9wdWJsaWMvYmFja2dyb3VuZDUucG5nJykgbm8tcmVwZWF0IGNlbnRlciB0b3AvY292ZXI7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgfVxcclxcblxcclxcblxcclxcbi8qIEFib3V0ICovXFxyXFxuLmFib3V0LWlubmVye1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLDFmcik7XFxyXFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDMwMG1zO1xcclxcbiAgICBnYXA6IDVyZW07XFxyXFxuICAgIGFuaW1hdGlvbjogcGFyYSAycyAxO1xcclxcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogcGFyYSAzcyAxO1xcclxcbiAgICBcXHJcXG4gIH1cXHJcXG4gIC5hYm91dC10ZXh0e1xcclxcbiAgICBtYXJnaW4tdG9wOiAyMCU7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAyMCU7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXHJcXG4gIH1cXHJcXG4gIC5tYXAtaW5uZXJ7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAucGFyYWdyYXBoLWFib3V0e1xcclxcbiAgICBmb250LXdlaWdodDogMzAwO1xcclxcbiAgICBsaW5lLWhlaWdodDogMnJlbTtcXHJcXG4gICAgd29yZC1zcGFjaW5nOiA1cHg7XFxyXFxuICAgIGFuaW1hdGlvbjogcGFyYSAycyAxO1xcclxcbiAgICBtYXJnaW4tbGVmdDogMS41cmVtO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcclxcbiAgXFxyXFxuICBcXHJcXG4gIH1cXHJcXG4gIC5hYm91dC10ZXh0IGgze1xcclxcbiAgICBjb2xvcjogdmFyKC0tZGlmLWNvbG9yKTtcXHJcXG4gIH1cXHJcXG4gIC5sYXJnZS1hYm91dHtcXHJcXG4gICAgY29sb3I6dmFyKC0tZGlmLWNvbG9yKTtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDJyZW07XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICBcXHJcXG4gIC5tYXJrZXItYm94e1xcclxcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1kYXJrKTtcXHJcXG4gICAgd2lkdGg6IGNhbGMoMjNyZW0gKyAxdncpO1xcclxcbiAgICBoZWlnaHQ6IGNhbGMoMTFyZW0gKyAxdncpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAubWFya2VyLW5hbWUge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xcclxcbiAgfVxcclxcbiAgLm1hcmtlci1uYW1lIGl7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1kaWYtY29sb3IpO1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmNvbnRhY3QtZm9ybSBpbnB1dCwgdGV4dGFyZWEge1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmspO1xcclxcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tZGlmLWNvbG9yKTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWRpZi1jb2xvcik7XFxyXFxuICAgIG1hcmdpbjogMXJlbSAxcmVtO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAzcmVtO1xcclxcbiAgICBmb250LXNpemU6IDEuNnJlbTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAwLjZyZW07XFxyXFxuICAgIHBhZGRpbmctdG9wOiAwLjJyZW07XFxyXFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDMwMG1zO1xcclxcbiAgICBhbmltYXRpb246IHBhcmEgMnMgMTtcXHJcXG4gICAgLXdlYmtpdC1hbmltYXRpb246IHBhcmEgM3MgMTtcXHJcXG4gIH1cXHJcXG4gIC5jb250YWN0LWZvcm0gdGV4dGFyZWF7XFxyXFxuICAgIG1hcmdpbjogMXJlbSAxcmVtO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiA4cmVtO1xcclxcbiAgICBmb250LXNpemU6IDEuNnJlbTtcXHJcXG4gICAgcmVzaXplOiBub25lO1xcclxcbiAgfVxcclxcbiAgLmNvbnRhY3QtYnV0dG9ue1xcclxcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcclxcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcblxcclxcbiAgXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KXtcXHJcXG5cXHJcXG4gICAgLmFib3V0LWlubmVye1xcclxcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsMWZyKTtcXHJcXG4gICAgICBvdmVyZmxvdy14OiBzY3JvbGw7XFxyXFxuICAgIH1cXHJcXG4gICAgLm1hcC1pbm5lcntcXHJcXG4gICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICB9XFxyXFxuICAgIC5hYm91dC10ZXh0e1xcclxcbiAgICAgIG1hcmdpbjogMzAlIDUlO1xcclxcbiAgICB9XFxyXFxuICBcXHJcXG4gICAgLmFib3V0LWlubmVye1xcclxcbiAgICAgIGxpbmUtaGVpZ2h0OiAyLjVyZW07XFxyXFxuICAgIH1cXHJcXG4gICAgLm1hcC1pbm5lcntcXHJcXG4gICAgICB3aWR0aDogNXJlbTtcXHJcXG4gICAgfSAgXFxyXFxuICAgIC5jb250YWN0LWZvcm0gaW5wdXQsIHRleHRhcmVhIHtcXHJcXG4gICAgICB3aWR0aDogOTAlO1xcclxcbiAgICB9XFxyXFxuICAgIC5jb250YWN0LWZvcm0gdGV4dGFyZWEge1xcclxcbiAgICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnNraWxscy1pbmZve1xcclxcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjFyZW07XFxyXFxuICAgIH1cXHJcXG4gICAgLmNvbnRhY3QtYnV0dG9ue1xcclxcbiAgICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xcclxcbiAgICB9XFxyXFxuICBcXHJcXG4gIH1cXHJcXG4gIEBtZWRpYSAobWluLXdpZHRoOiA0ODBweCl7XFxyXFxuICBcXHJcXG4gICAgLnNraWxscy1pbmZve1xcclxcbiAgICAgIGxpbmUtaGVpZ2h0OiAxcmVtO1xcclxcbiAgICB9XFxyXFxuICAgIFxcclxcbiAgfVxcclxcbiAgXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJzb3VyY2VSb290IjoiIn0=