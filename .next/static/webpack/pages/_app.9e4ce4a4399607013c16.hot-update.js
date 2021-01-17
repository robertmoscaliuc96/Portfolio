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
___CSS_LOADER_EXPORT___.push([module.i, "\r\n.about-image{\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat center top/cover;\r\n    width: 100%;\r\n    height: 100vh;\r\n  }\r\n\r\n\r\n/* About */\r\n.about-inner{\r\n    display: grid;\r\n    grid-template-columns: 2fr 1fr;\r\n    -webkit-transition-duration: 300ms;\r\n            transition-duration: 300ms;\r\n    animation: para 2s 1;\r\n    -webkit-animation: para 3s 1;\r\n    \r\n  }\r\n  .about-text{\r\n    margin-top: 15rem;\r\n    margin-left: 10rem;\r\n    margin-right: 5rem;\r\n    color: var(--text-color);\r\n  }\r\n  .map-inner{\r\n    height: 100vh;\r\n    background-color: white;\r\n  }\r\n  \r\n  .paragraph-about{\r\n    font-weight: 300;\r\n    line-height: 2rem;\r\n    word-spacing: 5px;\r\n    -webkit-animation: para 2s 1;\r\n            animation: para 2s 1;\r\n    margin-left: ;\r\n    margin-bottom: 2rem;\r\n  \r\n  \r\n  }\r\n  .about-text h3{\r\n    color: var(--dif-color);\r\n  }\r\n  .large-about{\r\n    color:var(--dif-color);\r\n    padding-bottom: 2rem;\r\n \r\n  }\r\n  \r\n  \r\n  .marker-box{\r\n    color: var(--text-color);\r\n    font-size: 1rem;\r\n    padding-left: 20px;\r\n    padding-bottom: 14px;\r\n    background-color: var(--light-dark);\r\n    width: 330px;\r\n    border-bottom-right-radius: 18px;\r\n    border-top-left-radius: 18px;\r\n    border-top-right-radius: 18px;\r\n  }\r\n  .marker-name {\r\n    display: -webkit-flex;\r\n    display: flex;\r\n    padding-top: 1rem;\r\n    letter-spacing: 1.5px;\r\n    font-weight: 300;\r\n  }\r\n  .marker-name i{\r\n    color: var(--dif-color);\r\n    font-size: 1.4rem;\r\n  }\r\n\r\n  .contact-actions{\r\n\r\n  }\r\n\r\n  .contact-button{\r\n    margin-top: 1rem;\r\n    margin-left: 1rem;\r\n  }\r\n  .about-icon {\r\n    font-size: 4rem;\r\n\r\n  }\r\n  .about-group{\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n    position: relative;\r\n    -webkit-justify-content: center;\r\n            justify-content: center;\r\n    -webkit-align-items: center;\r\n            align-items: center;\r\n  }\r\n  .about-icon-title{\r\n    font-size: 2rem;\r\n    font-weight: 300;\r\n    text-align: center;\r\n  }\r\n  \r\n\r\n  \r\n@media (max-width: 768px){\r\n\r\n    .about-inner{\r\n      grid-template-columns: repeat(1,1fr);\r\n      overflow-x: scroll;\r\n    }\r\n    .map-inner{\r\n      display: none;\r\n    }\r\n    .about-text{\r\n      margin: 30% 5%;\r\n    }\r\n    .large-about{\r\n      font-size: 3.2rem;\r\n    }\r\n    .paragraph-about{\r\n      font-size: 1.3rem;\r\n    }\r\n  \r\n    .about-inner{\r\n      line-height: 2.5rem;\r\n    }\r\n    .map-inner{\r\n      width: 5rem;\r\n    }  \r\n    .contact-form input, textarea {\r\n      width: 90%;\r\n    }\r\n    .contact-form textarea {\r\n      width: 90%;\r\n    }\r\n\r\n    .skills-info{\r\n      line-height: 1.1rem;\r\n    }\r\n    .contact-button{\r\n      margin-left: 1rem;\r\n    }\r\n  \r\n  }\r\n  @media (min-width: 480px){\r\n  \r\n    .skills-info{\r\n      line-height: 1rem;\r\n    }\r\n    \r\n  }\r\n  ", "",{"version":3,"sources":["webpack://style/about.css"],"names":[],"mappings":";AACA;IACI,8EAAuE;IACvE,WAAW;IACX,aAAa;EACf;;;AAGF,UAAU;AACV;IACI,aAAa;IACb,8BAA8B;IAC9B,kCAA0B;YAA1B,0BAA0B;IAC1B,oBAAoB;IACpB,4BAA4B;;EAE9B;EACA;IACE,iBAAiB;IACjB,kBAAkB;IAClB,kBAAkB;IAClB,wBAAwB;EAC1B;EACA;IACE,aAAa;IACb,uBAAuB;EACzB;;EAEA;IACE,gBAAgB;IAChB,iBAAiB;IACjB,iBAAiB;IACjB,4BAAoB;YAApB,oBAAoB;IACpB,aAAa;IACb,mBAAmB;;;EAGrB;EACA;IACE,uBAAuB;EACzB;EACA;IACE,sBAAsB;IACtB,oBAAoB;;EAEtB;;;EAGA;IACE,wBAAwB;IACxB,eAAe;IACf,kBAAkB;IAClB,oBAAoB;IACpB,mCAAmC;IACnC,YAAY;IACZ,gCAAgC;IAChC,4BAA4B;IAC5B,6BAA6B;EAC/B;EACA;IACE,qBAAa;IAAb,aAAa;IACb,iBAAiB;IACjB,qBAAqB;IACrB,gBAAgB;EAClB;EACA;IACE,uBAAuB;IACvB,iBAAiB;EACnB;;EAEA;;EAEA;;EAEA;IACE,gBAAgB;IAChB,iBAAiB;EACnB;EACA;IACE,eAAe;;EAEjB;EACA;IACE,aAAa;IACb,8BAA8B;IAC9B,kBAAkB;IAClB,+BAAuB;YAAvB,uBAAuB;IACvB,2BAAmB;YAAnB,mBAAmB;EACrB;EACA;IACE,eAAe;IACf,gBAAgB;IAChB,kBAAkB;EACpB;;;;AAIF;;IAEI;MACE,oCAAoC;MACpC,kBAAkB;IACpB;IACA;MACE,aAAa;IACf;IACA;MACE,cAAc;IAChB;IACA;MACE,iBAAiB;IACnB;IACA;MACE,iBAAiB;IACnB;;IAEA;MACE,mBAAmB;IACrB;IACA;MACE,WAAW;IACb;IACA;MACE,UAAU;IACZ;IACA;MACE,UAAU;IACZ;;IAEA;MACE,mBAAmB;IACrB;IACA;MACE,iBAAiB;IACnB;;EAEF;EACA;;IAEE;MACE,iBAAiB;IACnB;;EAEF","sourcesContent":["\r\n.about-image{\r\n    background: url('../public/background5.png') no-repeat center top/cover;\r\n    width: 100%;\r\n    height: 100vh;\r\n  }\r\n\r\n\r\n/* About */\r\n.about-inner{\r\n    display: grid;\r\n    grid-template-columns: 2fr 1fr;\r\n    transition-duration: 300ms;\r\n    animation: para 2s 1;\r\n    -webkit-animation: para 3s 1;\r\n    \r\n  }\r\n  .about-text{\r\n    margin-top: 15rem;\r\n    margin-left: 10rem;\r\n    margin-right: 5rem;\r\n    color: var(--text-color);\r\n  }\r\n  .map-inner{\r\n    height: 100vh;\r\n    background-color: white;\r\n  }\r\n  \r\n  .paragraph-about{\r\n    font-weight: 300;\r\n    line-height: 2rem;\r\n    word-spacing: 5px;\r\n    animation: para 2s 1;\r\n    margin-left: ;\r\n    margin-bottom: 2rem;\r\n  \r\n  \r\n  }\r\n  .about-text h3{\r\n    color: var(--dif-color);\r\n  }\r\n  .large-about{\r\n    color:var(--dif-color);\r\n    padding-bottom: 2rem;\r\n \r\n  }\r\n  \r\n  \r\n  .marker-box{\r\n    color: var(--text-color);\r\n    font-size: 1rem;\r\n    padding-left: 20px;\r\n    padding-bottom: 14px;\r\n    background-color: var(--light-dark);\r\n    width: 330px;\r\n    border-bottom-right-radius: 18px;\r\n    border-top-left-radius: 18px;\r\n    border-top-right-radius: 18px;\r\n  }\r\n  .marker-name {\r\n    display: flex;\r\n    padding-top: 1rem;\r\n    letter-spacing: 1.5px;\r\n    font-weight: 300;\r\n  }\r\n  .marker-name i{\r\n    color: var(--dif-color);\r\n    font-size: 1.4rem;\r\n  }\r\n\r\n  .contact-actions{\r\n\r\n  }\r\n\r\n  .contact-button{\r\n    margin-top: 1rem;\r\n    margin-left: 1rem;\r\n  }\r\n  .about-icon {\r\n    font-size: 4rem;\r\n\r\n  }\r\n  .about-group{\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n    position: relative;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n  .about-icon-title{\r\n    font-size: 2rem;\r\n    font-weight: 300;\r\n    text-align: center;\r\n  }\r\n  \r\n\r\n  \r\n@media (max-width: 768px){\r\n\r\n    .about-inner{\r\n      grid-template-columns: repeat(1,1fr);\r\n      overflow-x: scroll;\r\n    }\r\n    .map-inner{\r\n      display: none;\r\n    }\r\n    .about-text{\r\n      margin: 30% 5%;\r\n    }\r\n    .large-about{\r\n      font-size: 3.2rem;\r\n    }\r\n    .paragraph-about{\r\n      font-size: 1.3rem;\r\n    }\r\n  \r\n    .about-inner{\r\n      line-height: 2.5rem;\r\n    }\r\n    .map-inner{\r\n      width: 5rem;\r\n    }  \r\n    .contact-form input, textarea {\r\n      width: 90%;\r\n    }\r\n    .contact-form textarea {\r\n      width: 90%;\r\n    }\r\n\r\n    .skills-info{\r\n      line-height: 1.1rem;\r\n    }\r\n    .contact-button{\r\n      margin-left: 1rem;\r\n    }\r\n  \r\n  }\r\n  @media (min-width: 480px){\r\n  \r\n    .skills-info{\r\n      line-height: 1rem;\r\n    }\r\n    \r\n  }\r\n  "],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGUvYWJvdXQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUN5RjtBQUNPO0FBQzFCO0FBQ3RFLDhCQUE4QixtRkFBMkI7QUFDekQseUNBQXlDLHNGQUErQixDQUFDLCtEQUE2QjtBQUN0RztBQUNBLDhCQUE4QixRQUFTLG9CQUFvQiwrRkFBK0Ysb0JBQW9CLHNCQUFzQixPQUFPLHdDQUF3QyxzQkFBc0IsdUNBQXVDLDJDQUEyQywyQ0FBMkMsNkJBQTZCLHFDQUFxQyxlQUFlLGtCQUFrQiwwQkFBMEIsMkJBQTJCLDJCQUEyQixpQ0FBaUMsT0FBTyxpQkFBaUIsc0JBQXNCLGdDQUFnQyxPQUFPLDZCQUE2Qix5QkFBeUIsMEJBQTBCLDBCQUEwQixxQ0FBcUMscUNBQXFDLHNCQUFzQiw0QkFBNEIsbUJBQW1CLHFCQUFxQixnQ0FBZ0MsT0FBTyxtQkFBbUIsK0JBQStCLDZCQUE2QixZQUFZLDhCQUE4QixpQ0FBaUMsd0JBQXdCLDJCQUEyQiw2QkFBNkIsNENBQTRDLHFCQUFxQix5Q0FBeUMscUNBQXFDLHNDQUFzQyxPQUFPLG9CQUFvQiw4QkFBOEIsc0JBQXNCLDBCQUEwQiw4QkFBOEIseUJBQXlCLE9BQU8scUJBQXFCLGdDQUFnQywwQkFBMEIsT0FBTywyQkFBMkIsV0FBVywwQkFBMEIseUJBQXlCLDBCQUEwQixPQUFPLG1CQUFtQix3QkFBd0IsV0FBVyxtQkFBbUIsc0JBQXNCLHVDQUF1QywyQkFBMkIsd0NBQXdDLHdDQUF3QyxvQ0FBb0Msb0NBQW9DLE9BQU8sd0JBQXdCLHdCQUF3Qix5QkFBeUIsMkJBQTJCLE9BQU8sOENBQThDLHlCQUF5QiwrQ0FBK0MsNkJBQTZCLFNBQVMsbUJBQW1CLHdCQUF3QixTQUFTLG9CQUFvQix5QkFBeUIsU0FBUyxxQkFBcUIsNEJBQTRCLFNBQVMseUJBQXlCLDRCQUE0QixTQUFTLDJCQUEyQiw4QkFBOEIsU0FBUyxtQkFBbUIsc0JBQXNCLFNBQVMseUNBQXlDLHFCQUFxQixTQUFTLGdDQUFnQyxxQkFBcUIsU0FBUyx5QkFBeUIsOEJBQThCLFNBQVMsd0JBQXdCLDRCQUE0QixTQUFTLGFBQWEsZ0NBQWdDLDJCQUEyQiw0QkFBNEIsU0FBUyxlQUFlLGFBQWEsNEVBQTRFLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxVQUFVLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGNBQWMsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsY0FBYyxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxjQUFjLFFBQVEsS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxNQUFNLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFNBQVMsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssTUFBTSxLQUFLLFlBQVksT0FBTywwQ0FBMEMsZ0ZBQWdGLG9CQUFvQixzQkFBc0IsT0FBTyx3Q0FBd0Msc0JBQXNCLHVDQUF1QyxtQ0FBbUMsNkJBQTZCLHFDQUFxQyxlQUFlLGtCQUFrQiwwQkFBMEIsMkJBQTJCLDJCQUEyQixpQ0FBaUMsT0FBTyxpQkFBaUIsc0JBQXNCLGdDQUFnQyxPQUFPLDZCQUE2Qix5QkFBeUIsMEJBQTBCLDBCQUEwQiw2QkFBNkIsc0JBQXNCLDRCQUE0QixtQkFBbUIscUJBQXFCLGdDQUFnQyxPQUFPLG1CQUFtQiwrQkFBK0IsNkJBQTZCLFlBQVksOEJBQThCLGlDQUFpQyx3QkFBd0IsMkJBQTJCLDZCQUE2Qiw0Q0FBNEMscUJBQXFCLHlDQUF5QyxxQ0FBcUMsc0NBQXNDLE9BQU8sb0JBQW9CLHNCQUFzQiwwQkFBMEIsOEJBQThCLHlCQUF5QixPQUFPLHFCQUFxQixnQ0FBZ0MsMEJBQTBCLE9BQU8sMkJBQTJCLFdBQVcsMEJBQTBCLHlCQUF5QiwwQkFBMEIsT0FBTyxtQkFBbUIsd0JBQXdCLFdBQVcsbUJBQW1CLHNCQUFzQix1Q0FBdUMsMkJBQTJCLGdDQUFnQyw0QkFBNEIsT0FBTyx3QkFBd0Isd0JBQXdCLHlCQUF5QiwyQkFBMkIsT0FBTyw4Q0FBOEMseUJBQXlCLCtDQUErQyw2QkFBNkIsU0FBUyxtQkFBbUIsd0JBQXdCLFNBQVMsb0JBQW9CLHlCQUF5QixTQUFTLHFCQUFxQiw0QkFBNEIsU0FBUyx5QkFBeUIsNEJBQTRCLFNBQVMsMkJBQTJCLDhCQUE4QixTQUFTLG1CQUFtQixzQkFBc0IsU0FBUyx5Q0FBeUMscUJBQXFCLFNBQVMsZ0NBQWdDLHFCQUFxQixTQUFTLHlCQUF5Qiw4QkFBOEIsU0FBUyx3QkFBd0IsNEJBQTRCLFNBQVMsYUFBYSxnQ0FBZ0MsMkJBQTJCLDRCQUE0QixTQUFTLGVBQWUseUJBQXlCO0FBQ3RoTztBQUNlLHNGQUF1QixFQUFDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuOWU0Y2U0YTQzOTk2MDcwMTNjMTYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gZnJvbSBcIi4uL3B1YmxpYy9iYWNrZ3JvdW5kNS5wbmdcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcXHJcXG4uYWJvdXQtaW1hZ2V7XFxyXFxuICAgIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgbm8tcmVwZWF0IGNlbnRlciB0b3AvY292ZXI7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgfVxcclxcblxcclxcblxcclxcbi8qIEFib3V0ICovXFxyXFxuLmFib3V0LWlubmVye1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxZnI7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMzAwbXM7XFxyXFxuICAgICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMzAwbXM7XFxyXFxuICAgIGFuaW1hdGlvbjogcGFyYSAycyAxO1xcclxcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogcGFyYSAzcyAxO1xcclxcbiAgICBcXHJcXG4gIH1cXHJcXG4gIC5hYm91dC10ZXh0e1xcclxcbiAgICBtYXJnaW4tdG9wOiAxNXJlbTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcmVtO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDVyZW07XFxyXFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXHJcXG4gIH1cXHJcXG4gIC5tYXAtaW5uZXJ7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAucGFyYWdyYXBoLWFib3V0e1xcclxcbiAgICBmb250LXdlaWdodDogMzAwO1xcclxcbiAgICBsaW5lLWhlaWdodDogMnJlbTtcXHJcXG4gICAgd29yZC1zcGFjaW5nOiA1cHg7XFxyXFxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBwYXJhIDJzIDE7XFxyXFxuICAgICAgICAgICAgYW5pbWF0aW9uOiBwYXJhIDJzIDE7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiA7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XFxyXFxuICBcXHJcXG4gIFxcclxcbiAgfVxcclxcbiAgLmFib3V0LXRleHQgaDN7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1kaWYtY29sb3IpO1xcclxcbiAgfVxcclxcbiAgLmxhcmdlLWFib3V0e1xcclxcbiAgICBjb2xvcjp2YXIoLS1kaWYtY29sb3IpO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcXHJcXG4gXFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIFxcclxcbiAgLm1hcmtlci1ib3h7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAxNHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1kYXJrKTtcXHJcXG4gICAgd2lkdGg6IDMzMHB4O1xcclxcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMThweDtcXHJcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMThweDtcXHJcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE4cHg7XFxyXFxuICB9XFxyXFxuICAubWFya2VyLW5hbWUge1xcclxcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMS41cHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxuICB9XFxyXFxuICAubWFya2VyLW5hbWUgaXtcXHJcXG4gICAgY29sb3I6IHZhcigtLWRpZi1jb2xvcik7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbnRhY3QtYWN0aW9uc3tcXHJcXG5cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb250YWN0LWJ1dHRvbntcXHJcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XFxyXFxuICB9XFxyXFxuICAuYWJvdXQtaWNvbiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXHJcXG5cXHJcXG4gIH1cXHJcXG4gIC5hYm91dC1ncm91cHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgfVxcclxcbiAgLmFib3V0LWljb24tdGl0bGV7XFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuXFxyXFxuICBcXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpe1xcclxcblxcclxcbiAgICAuYWJvdXQtaW5uZXJ7XFxyXFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwxZnIpO1xcclxcbiAgICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcXHJcXG4gICAgfVxcclxcbiAgICAubWFwLWlubmVye1xcclxcbiAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG4gICAgLmFib3V0LXRleHR7XFxyXFxuICAgICAgbWFyZ2luOiAzMCUgNSU7XFxyXFxuICAgIH1cXHJcXG4gICAgLmxhcmdlLWFib3V0e1xcclxcbiAgICAgIGZvbnQtc2l6ZTogMy4ycmVtO1xcclxcbiAgICB9XFxyXFxuICAgIC5wYXJhZ3JhcGgtYWJvdXR7XFxyXFxuICAgICAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxuICAgIH1cXHJcXG4gIFxcclxcbiAgICAuYWJvdXQtaW5uZXJ7XFxyXFxuICAgICAgbGluZS1oZWlnaHQ6IDIuNXJlbTtcXHJcXG4gICAgfVxcclxcbiAgICAubWFwLWlubmVye1xcclxcbiAgICAgIHdpZHRoOiA1cmVtO1xcclxcbiAgICB9ICBcXHJcXG4gICAgLmNvbnRhY3QtZm9ybSBpbnB1dCwgdGV4dGFyZWEge1xcclxcbiAgICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIH1cXHJcXG4gICAgLmNvbnRhY3QtZm9ybSB0ZXh0YXJlYSB7XFxyXFxuICAgICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuc2tpbGxzLWluZm97XFxyXFxuICAgICAgbGluZS1oZWlnaHQ6IDEuMXJlbTtcXHJcXG4gICAgfVxcclxcbiAgICAuY29udGFjdC1idXR0b257XFxyXFxuICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XFxyXFxuICAgIH1cXHJcXG4gIFxcclxcbiAgfVxcclxcbiAgQG1lZGlhIChtaW4td2lkdGg6IDQ4MHB4KXtcXHJcXG4gIFxcclxcbiAgICAuc2tpbGxzLWluZm97XFxyXFxuICAgICAgbGluZS1oZWlnaHQ6IDFyZW07XFxyXFxuICAgIH1cXHJcXG4gICAgXFxyXFxuICB9XFxyXFxuICBcIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3R5bGUvYWJvdXQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFDQTtJQUNJLDhFQUF1RTtJQUN2RSxXQUFXO0lBQ1gsYUFBYTtFQUNmOzs7QUFHRixVQUFVO0FBQ1Y7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGtDQUEwQjtZQUExQiwwQkFBMEI7SUFDMUIsb0JBQW9CO0lBQ3BCLDRCQUE0Qjs7RUFFOUI7RUFDQTtJQUNFLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHdCQUF3QjtFQUMxQjtFQUNBO0lBQ0UsYUFBYTtJQUNiLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLDRCQUFvQjtZQUFwQixvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLG1CQUFtQjs7O0VBR3JCO0VBQ0E7SUFDRSx1QkFBdUI7RUFDekI7RUFDQTtJQUNFLHNCQUFzQjtJQUN0QixvQkFBb0I7O0VBRXRCOzs7RUFHQTtJQUNFLHdCQUF3QjtJQUN4QixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixtQ0FBbUM7SUFDbkMsWUFBWTtJQUNaLGdDQUFnQztJQUNoQyw0QkFBNEI7SUFDNUIsNkJBQTZCO0VBQy9CO0VBQ0E7SUFDRSxxQkFBYTtJQUFiLGFBQWE7SUFDYixpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtFQUNuQjs7RUFFQTs7RUFFQTs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLGVBQWU7O0VBRWpCO0VBQ0E7SUFDRSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGtCQUFrQjtJQUNsQiwrQkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLDJCQUFtQjtZQUFuQixtQkFBbUI7RUFDckI7RUFDQTtJQUNFLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsa0JBQWtCO0VBQ3BCOzs7O0FBSUY7O0lBRUk7TUFDRSxvQ0FBb0M7TUFDcEMsa0JBQWtCO0lBQ3BCO0lBQ0E7TUFDRSxhQUFhO0lBQ2Y7SUFDQTtNQUNFLGNBQWM7SUFDaEI7SUFDQTtNQUNFLGlCQUFpQjtJQUNuQjtJQUNBO01BQ0UsaUJBQWlCO0lBQ25COztJQUVBO01BQ0UsbUJBQW1CO0lBQ3JCO0lBQ0E7TUFDRSxXQUFXO0lBQ2I7SUFDQTtNQUNFLFVBQVU7SUFDWjtJQUNBO01BQ0UsVUFBVTtJQUNaOztJQUVBO01BQ0UsbUJBQW1CO0lBQ3JCO0lBQ0E7TUFDRSxpQkFBaUI7SUFDbkI7O0VBRUY7RUFDQTs7SUFFRTtNQUNFLGlCQUFpQjtJQUNuQjs7RUFFRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXHJcXG4uYWJvdXQtaW1hZ2V7XFxyXFxuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vcHVibGljL2JhY2tncm91bmQ1LnBuZycpIG5vLXJlcGVhdCBjZW50ZXIgdG9wL2NvdmVyO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIH1cXHJcXG5cXHJcXG5cXHJcXG4vKiBBYm91dCAqL1xcclxcbi5hYm91dC1pbm5lcntcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyO1xcclxcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAzMDBtcztcXHJcXG4gICAgYW5pbWF0aW9uOiBwYXJhIDJzIDE7XFxyXFxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBwYXJhIDNzIDE7XFxyXFxuICAgIFxcclxcbiAgfVxcclxcbiAgLmFib3V0LXRleHR7XFxyXFxuICAgIG1hcmdpbi10b3A6IDE1cmVtO1xcclxcbiAgICBtYXJnaW4tbGVmdDogMTByZW07XFxyXFxuICAgIG1hcmdpbi1yaWdodDogNXJlbTtcXHJcXG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xcclxcbiAgfVxcclxcbiAgLm1hcC1pbm5lcntcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5wYXJhZ3JhcGgtYWJvdXR7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xcclxcbiAgICB3b3JkLXNwYWNpbmc6IDVweDtcXHJcXG4gICAgYW5pbWF0aW9uOiBwYXJhIDJzIDE7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiA7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XFxyXFxuICBcXHJcXG4gIFxcclxcbiAgfVxcclxcbiAgLmFib3V0LXRleHQgaDN7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1kaWYtY29sb3IpO1xcclxcbiAgfVxcclxcbiAgLmxhcmdlLWFib3V0e1xcclxcbiAgICBjb2xvcjp2YXIoLS1kaWYtY29sb3IpO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcXHJcXG4gXFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIFxcclxcbiAgLm1hcmtlci1ib3h7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAxNHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1kYXJrKTtcXHJcXG4gICAgd2lkdGg6IDMzMHB4O1xcclxcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMThweDtcXHJcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMThweDtcXHJcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE4cHg7XFxyXFxuICB9XFxyXFxuICAubWFya2VyLW5hbWUge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xcclxcbiAgICBmb250LXdlaWdodDogMzAwO1xcclxcbiAgfVxcclxcbiAgLm1hcmtlci1uYW1lIGl7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1kaWYtY29sb3IpO1xcclxcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb250YWN0LWFjdGlvbnN7XFxyXFxuXFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29udGFjdC1idXR0b257XFxyXFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xcclxcbiAgfVxcclxcbiAgLmFib3V0LWljb24ge1xcclxcbiAgICBmb250LXNpemU6IDRyZW07XFxyXFxuXFxyXFxuICB9XFxyXFxuICAuYWJvdXQtZ3JvdXB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG4gIC5hYm91dC1pY29uLXRpdGxle1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG4gIFxcclxcblxcclxcbiAgXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KXtcXHJcXG5cXHJcXG4gICAgLmFib3V0LWlubmVye1xcclxcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsMWZyKTtcXHJcXG4gICAgICBvdmVyZmxvdy14OiBzY3JvbGw7XFxyXFxuICAgIH1cXHJcXG4gICAgLm1hcC1pbm5lcntcXHJcXG4gICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICB9XFxyXFxuICAgIC5hYm91dC10ZXh0e1xcclxcbiAgICAgIG1hcmdpbjogMzAlIDUlO1xcclxcbiAgICB9XFxyXFxuICAgIC5sYXJnZS1hYm91dHtcXHJcXG4gICAgICBmb250LXNpemU6IDMuMnJlbTtcXHJcXG4gICAgfVxcclxcbiAgICAucGFyYWdyYXBoLWFib3V0e1xcclxcbiAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbiAgICB9XFxyXFxuICBcXHJcXG4gICAgLmFib3V0LWlubmVye1xcclxcbiAgICAgIGxpbmUtaGVpZ2h0OiAyLjVyZW07XFxyXFxuICAgIH1cXHJcXG4gICAgLm1hcC1pbm5lcntcXHJcXG4gICAgICB3aWR0aDogNXJlbTtcXHJcXG4gICAgfSAgXFxyXFxuICAgIC5jb250YWN0LWZvcm0gaW5wdXQsIHRleHRhcmVhIHtcXHJcXG4gICAgICB3aWR0aDogOTAlO1xcclxcbiAgICB9XFxyXFxuICAgIC5jb250YWN0LWZvcm0gdGV4dGFyZWEge1xcclxcbiAgICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnNraWxscy1pbmZve1xcclxcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjFyZW07XFxyXFxuICAgIH1cXHJcXG4gICAgLmNvbnRhY3QtYnV0dG9ue1xcclxcbiAgICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xcclxcbiAgICB9XFxyXFxuICBcXHJcXG4gIH1cXHJcXG4gIEBtZWRpYSAobWluLXdpZHRoOiA0ODBweCl7XFxyXFxuICBcXHJcXG4gICAgLnNraWxscy1pbmZve1xcclxcbiAgICAgIGxpbmUtaGVpZ2h0OiAxcmVtO1xcclxcbiAgICB9XFxyXFxuICAgIFxcclxcbiAgfVxcclxcbiAgXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJzb3VyY2VSb290IjoiIn0=