webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./style/landing.css":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./style/landing.css ***!
  \******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_background5_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/background5.png */ "./public/background5.png");
/* harmony import */ var _public_backgroundResponsive_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/backgroundResponsive.png */ "./public/backgroundResponsive.png");
// Imports




var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_background5_png__WEBPACK_IMPORTED_MODULE_2__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_backgroundResponsive_png__WEBPACK_IMPORTED_MODULE_3__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/* Home */\r\n.home-image{\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat center top/cover;\r\n    width: 100%;\r\n    height: 100vh;\r\n    margin: auto;\r\n    overflow-x: unset;\r\n    }\r\n  \r\n\r\n.home-inner{\r\n    display:-webkit-flex;\r\n    display:flex;\r\n    -webkit-flex-flow: row nowrap;\r\n            flex-flow: row nowrap;\r\n    line-height: 3rem;\r\n    \r\n}\r\n.home-text{\r\n  padding: 20rem 10rem;\r\n  color: var(--text-color);\r\n  width: 80%;\r\n  -webkit-transition-duration: 300ms;\r\n          transition-duration: 300ms;\r\n  animation: text 1s 1;\r\n  -webkit-animation: para 2s 1;\r\n}\r\n.paragraph{\r\n  font-weight: 100;\r\n  line-height: 2rem;\r\n  word-spacing: 5px;\r\n  -webkit-animation: para 2s 1;\r\n          animation: para 2s 1;\r\n  -webkit-transition-duration: 300ms;\r\n          transition-duration: 300ms;\r\n  padding-right: 15%;\r\n  -webkit-animation: para 3s 1;\r\n}\r\n\r\n.large-logo{\r\n  width: 70%;\r\n  margin-top: 5rem;\r\n  margin-right: 5rem;\r\n  animation: logo 2s 1;\r\n  -webkit-animation: logo 3s 1;\r\n  -webkit-transition-duration: 1000ms;\r\n          transition-duration: 1000ms;\r\n  \r\n}\r\n.large-logo:hover{\r\n  -webkit-transform: rotate(31deg);\r\n          transform: rotate(31deg)\r\n}\r\n\r\n.button-div{\r\n  padding: 1.5rem 0rem;\r\n\r\n}\r\n.work-button, .contact-button{\r\n  -webkit-align-items: center;\r\n          align-items: center;\r\n  font-size: 1.5rem;\r\n  font-weight: 500;\r\n  background-color: transparent;\r\n  color: var(--dif-color);\r\n  padding: 0.4rem 2rem;\r\n  border: 2px solid var(--dif-color);\r\n  cursor: pointer;\r\n  animation: para 2s 1;\r\n  -webkit-animation: para 3s 1;\r\n  -webkit-transition-duration: 500ms;\r\n          transition-duration: 500ms;\r\n}\r\n.work-button{\r\n  \r\n}\r\n\r\n.work-button, .contact-button:hover{\r\n  background-color: var(--dif-color);\r\n  color: var(--dif-color2);\r\n}\r\n.burger\r\n.bars:hover{\r\n  background-color: var(--dif-color);\r\n}\r\n\r\n.burger div:nth-child(2):hover{\r\n  background-color: #13385f;\r\n}\r\n\r\n\r\n/* Media query */\r\n/* Media query */\r\n/* Media query */\r\n\r\n\r\n@media (min-width: 1600px){\r\n\r\n}\r\n\r\n@media (min-width: 1024px) and (max-width:1500px){\r\n    .home-text{\r\n      margin-bottom: 10%;\r\n      overflow-x: auto;\r\n    }\r\n}\r\n\r\n@media (max-width: 1024px){\r\n  .work-inner,\r\n  .home-image{\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") no-repeat center bottom/cover;\r\n  }\r\n  .large, .large-name{\r\n    font-size: 7.5vw;\r\n  }\r\n  .home-image{\r\n    height: 100vh;\r\n  }\r\n  .large-logo{\r\n    display: none;\r\n  }\r\n  .home-text{\r\n    padding-top: 20%;\r\n    padding-left: 5rem;\r\n    font-size: 6vw;\r\n    width: 80%;\r\n  }\r\n  .paragraph{\r\n    padding-right: 5%;\r\n    font-size: 2.8vw;\r\n\r\n  }\r\n  .button-div{\r\n    padding: 1.9rem 0rem;\r\n  }\r\n  .work-button{\r\n    font-size: 1.4rem;\r\n  }\r\n  .large-logo{\r\n    display: none;\r\n  }\r\n\r\n}\r\n\r\n\r\n@media (max-width: 768px){\r\n.home-image{\r\n    overflow-x: auto;\r\n  }\r\n.home-inner{\r\n    display: grid;\r\n    grid-template-columns: repeat(1,1fr);\r\n  }\r\n\r\n.home-text{\r\n    margin-right: 0;\r\n    padding-right: 2rem;\r\n    padding-top: 25%;\r\n    padding-left: 4rem;\r\n    padding-bottom: 0;\r\n    margin-bottom: 0;\r\n    font-size: 7vw;\r\n    font-weight: 300;\r\n    word-spacing: normal;\r\n    width: 100%;\r\n  }\r\n  .work-button{\r\n    font-size: 1rem;\r\n  }\r\n  .paragraph{\r\n    padding-right: 5%;\r\n    font-size: calc(5px + 2.8vw);\r\n  }\r\n  .large-logo{\r\n      margin-left: 20%;\r\n      padding-top: 0%;\r\n      margin-top: 0;\r\n      display: inline;\r\n      grid-gap:0;\r\n      gap:0;\r\n      height: 10rem;\r\n      width: 15rem;\r\n  }\r\n\r\n}\r\n@media (min-width: 480px){\r\n\r\n\r\n  \r\n}\r\n\r\n", "",{"version":3,"sources":["webpack://style/landing.css"],"names":[],"mappings":"AAAA,SAAS;AACT;IACI,8EAAuE;IACvE,WAAW;IACX,aAAa;IACb,YAAY;IACZ,iBAAiB;IACjB;;;AAGJ;IACI,oBAAY;IAAZ,YAAY;IACZ,6BAAqB;YAArB,qBAAqB;IACrB,iBAAiB;;AAErB;AACA;EACE,oBAAoB;EACpB,wBAAwB;EACxB,UAAU;EACV,kCAA0B;UAA1B,0BAA0B;EAC1B,oBAAoB;EACpB,4BAA4B;AAC9B;AACA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,iBAAiB;EACjB,4BAAoB;UAApB,oBAAoB;EACpB,kCAA0B;UAA1B,0BAA0B;EAC1B,kBAAkB;EAClB,4BAA4B;AAC9B;;AAEA;EACE,UAAU;EACV,gBAAgB;EAChB,kBAAkB;EAClB,oBAAoB;EACpB,4BAA4B;EAC5B,mCAA2B;UAA3B,2BAA2B;;AAE7B;AACA;EACE,gCAAuB;UAAvB;AACF;;AAEA;EACE,oBAAoB;;AAEtB;AACA;EACE,2BAAmB;UAAnB,mBAAmB;EACnB,iBAAiB;EACjB,gBAAgB;EAChB,6BAA6B;EAC7B,uBAAuB;EACvB,oBAAoB;EACpB,kCAAkC;EAClC,eAAe;EACf,oBAAoB;EACpB,4BAA4B;EAC5B,kCAA0B;UAA1B,0BAA0B;AAC5B;AACA;;AAEA;;AAEA;EACE,kCAAkC;EAClC,wBAAwB;AAC1B;AACA;;EAEE,kCAAkC;AACpC;;AAEA;EACE,yBAAyB;AAC3B;;;AAGA,gBAAgB;AAChB,gBAAgB;AAChB,gBAAgB;;;AAGhB;;AAEA;;AAEA;IACI;MACE,kBAAkB;MAClB,gBAAgB;IAClB;AACJ;;AAEA;EACE;;IAEE,iFAAmF;EACrF;EACA;IACE,gBAAgB;EAClB;EACA;IACE,aAAa;EACf;EACA;IACE,aAAa;EACf;EACA;IACE,gBAAgB;IAChB,kBAAkB;IAClB,cAAc;IACd,UAAU;EACZ;EACA;IACE,iBAAiB;IACjB,gBAAgB;;EAElB;EACA;IACE,oBAAoB;EACtB;EACA;IACE,iBAAiB;EACnB;EACA;IACE,aAAa;EACf;;AAEF;;;AAGA;AACA;IACI,gBAAgB;EAClB;AACF;IACI,aAAa;IACb,oCAAoC;EACtC;;AAEF;IACI,eAAe;IACf,mBAAmB;IACnB,gBAAgB;IAChB,kBAAkB;IAClB,iBAAiB;IACjB,gBAAgB;IAChB,cAAc;IACd,gBAAgB;IAChB,oBAAoB;IACpB,WAAW;EACb;EACA;IACE,eAAe;EACjB;EACA;IACE,iBAAiB;IACjB,4BAA4B;EAC9B;EACA;MACI,gBAAgB;MAChB,eAAe;MACf,aAAa;MACb,eAAe;MACf,UAAK;MAAL,KAAK;MACL,aAAa;MACb,YAAY;EAChB;;AAEF;AACA;;;;AAIA","sourcesContent":["/* Home */\r\n.home-image{\r\n    background: url('../public/background5.png') no-repeat center top/cover;\r\n    width: 100%;\r\n    height: 100vh;\r\n    margin: auto;\r\n    overflow-x: unset;\r\n    }\r\n  \r\n\r\n.home-inner{\r\n    display:flex;\r\n    flex-flow: row nowrap;\r\n    line-height: 3rem;\r\n    \r\n}\r\n.home-text{\r\n  padding: 20rem 10rem;\r\n  color: var(--text-color);\r\n  width: 80%;\r\n  transition-duration: 300ms;\r\n  animation: text 1s 1;\r\n  -webkit-animation: para 2s 1;\r\n}\r\n.paragraph{\r\n  font-weight: 100;\r\n  line-height: 2rem;\r\n  word-spacing: 5px;\r\n  animation: para 2s 1;\r\n  transition-duration: 300ms;\r\n  padding-right: 15%;\r\n  -webkit-animation: para 3s 1;\r\n}\r\n\r\n.large-logo{\r\n  width: 70%;\r\n  margin-top: 5rem;\r\n  margin-right: 5rem;\r\n  animation: logo 2s 1;\r\n  -webkit-animation: logo 3s 1;\r\n  transition-duration: 1000ms;\r\n  \r\n}\r\n.large-logo:hover{\r\n  transform: rotate(31deg)\r\n}\r\n\r\n.button-div{\r\n  padding: 1.5rem 0rem;\r\n\r\n}\r\n.work-button, .contact-button{\r\n  align-items: center;\r\n  font-size: 1.5rem;\r\n  font-weight: 500;\r\n  background-color: transparent;\r\n  color: var(--dif-color);\r\n  padding: 0.4rem 2rem;\r\n  border: 2px solid var(--dif-color);\r\n  cursor: pointer;\r\n  animation: para 2s 1;\r\n  -webkit-animation: para 3s 1;\r\n  transition-duration: 500ms;\r\n}\r\n.work-button{\r\n  \r\n}\r\n\r\n.work-button, .contact-button:hover{\r\n  background-color: var(--dif-color);\r\n  color: var(--dif-color2);\r\n}\r\n.burger\r\n.bars:hover{\r\n  background-color: var(--dif-color);\r\n}\r\n\r\n.burger div:nth-child(2):hover{\r\n  background-color: #13385f;\r\n}\r\n\r\n\r\n/* Media query */\r\n/* Media query */\r\n/* Media query */\r\n\r\n\r\n@media (min-width: 1600px){\r\n\r\n}\r\n\r\n@media (min-width: 1024px) and (max-width:1500px){\r\n    .home-text{\r\n      margin-bottom: 10%;\r\n      overflow-x: auto;\r\n    }\r\n}\r\n\r\n@media (max-width: 1024px){\r\n  .work-inner,\r\n  .home-image{\r\n    background: url('../public/backgroundResponsive.png') no-repeat center bottom/cover;\r\n  }\r\n  .large, .large-name{\r\n    font-size: 7.5vw;\r\n  }\r\n  .home-image{\r\n    height: 100vh;\r\n  }\r\n  .large-logo{\r\n    display: none;\r\n  }\r\n  .home-text{\r\n    padding-top: 20%;\r\n    padding-left: 5rem;\r\n    font-size: 6vw;\r\n    width: 80%;\r\n  }\r\n  .paragraph{\r\n    padding-right: 5%;\r\n    font-size: 2.8vw;\r\n\r\n  }\r\n  .button-div{\r\n    padding: 1.9rem 0rem;\r\n  }\r\n  .work-button{\r\n    font-size: 1.4rem;\r\n  }\r\n  .large-logo{\r\n    display: none;\r\n  }\r\n\r\n}\r\n\r\n\r\n@media (max-width: 768px){\r\n.home-image{\r\n    overflow-x: auto;\r\n  }\r\n.home-inner{\r\n    display: grid;\r\n    grid-template-columns: repeat(1,1fr);\r\n  }\r\n\r\n.home-text{\r\n    margin-right: 0;\r\n    padding-right: 2rem;\r\n    padding-top: 25%;\r\n    padding-left: 4rem;\r\n    padding-bottom: 0;\r\n    margin-bottom: 0;\r\n    font-size: 7vw;\r\n    font-weight: 300;\r\n    word-spacing: normal;\r\n    width: 100%;\r\n  }\r\n  .work-button{\r\n    font-size: 1rem;\r\n  }\r\n  .paragraph{\r\n    padding-right: 5%;\r\n    font-size: calc(5px + 2.8vw);\r\n  }\r\n  .large-logo{\r\n      margin-left: 20%;\r\n      padding-top: 0%;\r\n      margin-top: 0;\r\n      display: inline;\r\n      gap:0;\r\n      height: 10rem;\r\n      width: 15rem;\r\n  }\r\n\r\n}\r\n@media (min-width: 480px){\r\n\r\n\r\n  \r\n}\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGUvbGFuZGluZy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDeUY7QUFDTztBQUMxQjtBQUNTO0FBQy9FLDhCQUE4QixtRkFBMkI7QUFDekQseUNBQXlDLHNGQUErQixDQUFDLCtEQUE2QjtBQUN0Ryx5Q0FBeUMsc0ZBQStCLENBQUMsd0VBQTZCO0FBQ3RHO0FBQ0EsOEJBQThCLFFBQVMsNkJBQTZCLCtGQUErRixvQkFBb0Isc0JBQXNCLHFCQUFxQiwwQkFBMEIsU0FBUywwQkFBMEIsNkJBQTZCLHFCQUFxQixzQ0FBc0Msc0NBQXNDLDBCQUEwQixhQUFhLGVBQWUsMkJBQTJCLCtCQUErQixpQkFBaUIseUNBQXlDLHlDQUF5QywyQkFBMkIsbUNBQW1DLEtBQUssZUFBZSx1QkFBdUIsd0JBQXdCLHdCQUF3QixtQ0FBbUMsbUNBQW1DLHlDQUF5Qyx5Q0FBeUMseUJBQXlCLG1DQUFtQyxLQUFLLG9CQUFvQixpQkFBaUIsdUJBQXVCLHlCQUF5QiwyQkFBMkIsbUNBQW1DLDBDQUEwQywwQ0FBMEMsV0FBVyxzQkFBc0IsdUNBQXVDLDJDQUEyQyxvQkFBb0IsMkJBQTJCLFNBQVMsa0NBQWtDLGtDQUFrQyxrQ0FBa0Msd0JBQXdCLHVCQUF1QixvQ0FBb0MsOEJBQThCLDJCQUEyQix5Q0FBeUMsc0JBQXNCLDJCQUEyQixtQ0FBbUMseUNBQXlDLHlDQUF5QyxLQUFLLGlCQUFpQixXQUFXLDRDQUE0Qyx5Q0FBeUMsK0JBQStCLEtBQUssMkJBQTJCLHlDQUF5QyxLQUFLLHVDQUF1QyxnQ0FBZ0MsS0FBSyw4R0FBOEcsU0FBUywwREFBMEQsbUJBQW1CLDZCQUE2QiwyQkFBMkIsU0FBUyxLQUFLLG1DQUFtQyxvQ0FBb0Msa0dBQWtHLE9BQU8sMEJBQTBCLHlCQUF5QixPQUFPLGtCQUFrQixzQkFBc0IsT0FBTyxrQkFBa0Isc0JBQXNCLE9B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QkFBMkIsdUJBQXVCLG1CQUFtQixPQUFPLGlCQUFpQiwwQkFBMEIseUJBQXlCLFdBQVcsa0JBQWtCLDZCQUE2QixPQUFPLG1CQUFtQiwwQkFBMEIsT0FBTyxrQkFBa0Isc0JBQXNCLE9BQU8sU0FBUyxzQ0FBc0MsZ0JBQWdCLHlCQUF5QixPQUFPLGdCQUFnQixzQkFBc0IsNkNBQTZDLE9BQU8sbUJBQW1CLHdCQUF3Qiw0QkFBNEIseUJBQXlCLDJCQUEyQiwwQkFBMEIseUJBQXlCLHVCQUF1Qix5QkFBeUIsNkJBQTZCLG9CQUFvQixPQUFPLG1CQUFtQix3QkFBd0IsT0FBTyxpQkFBaUIsMEJBQTBCLHFDQUFxQyxPQUFPLGtCQUFrQiwyQkFBMkIsMEJBQTBCLHdCQUF3QiwwQkFBMEIsZ0JBQWdCLHdCQUF3Qix1QkFBdUIsT0FBTyxTQUFTLDhCQUE4QixtQkFBbUIsMkJBQTJCO0FBQzE0UjtBQUNlLHNGQUF1QixFQUFDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMDFlZjJjOWU0ZmQ2YTU4NDQxNTguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gZnJvbSBcIi4uL3B1YmxpYy9iYWNrZ3JvdW5kNS5wbmdcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyBmcm9tIFwiLi4vcHVibGljL2JhY2tncm91bmRSZXNwb25zaXZlLnBuZ1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBIb21lICovXFxyXFxuLmhvbWUtaW1hZ2V7XFxyXFxuICAgIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgbm8tcmVwZWF0IGNlbnRlciB0b3AvY292ZXI7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgIG92ZXJmbG93LXg6IHVuc2V0O1xcclxcbiAgICB9XFxyXFxuICBcXHJcXG5cXHJcXG4uaG9tZS1pbm5lcntcXHJcXG4gICAgZGlzcGxheTotd2Via2l0LWZsZXg7XFxyXFxuICAgIGRpc3BsYXk6ZmxleDtcXHJcXG4gICAgLXdlYmtpdC1mbGV4LWZsb3c6IHJvdyBub3dyYXA7XFxyXFxuICAgICAgICAgICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xcclxcbiAgICBsaW5lLWhlaWdodDogM3JlbTtcXHJcXG4gICAgXFxyXFxufVxcclxcbi5ob21lLXRleHR7XFxyXFxuICBwYWRkaW5nOiAyMHJlbSAxMHJlbTtcXHJcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDMwMG1zO1xcclxcbiAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAzMDBtcztcXHJcXG4gIGFuaW1hdGlvbjogdGV4dCAxcyAxO1xcclxcbiAgLXdlYmtpdC1hbmltYXRpb246IHBhcmEgMnMgMTtcXHJcXG59XFxyXFxuLnBhcmFncmFwaHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XFxyXFxuICBsaW5lLWhlaWdodDogMnJlbTtcXHJcXG4gIHdvcmQtc3BhY2luZzogNXB4O1xcclxcbiAgLXdlYmtpdC1hbmltYXRpb246IHBhcmEgMnMgMTtcXHJcXG4gICAgICAgICAgYW5pbWF0aW9uOiBwYXJhIDJzIDE7XFxyXFxuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDMwMG1zO1xcclxcbiAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAzMDBtcztcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDE1JTtcXHJcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBwYXJhIDNzIDE7XFxyXFxufVxcclxcblxcclxcbi5sYXJnZS1sb2dve1xcclxcbiAgd2lkdGg6IDcwJTtcXHJcXG4gIG1hcmdpbi10b3A6IDVyZW07XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDVyZW07XFxyXFxuICBhbmltYXRpb246IGxvZ28gMnMgMTtcXHJcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBsb2dvIDNzIDE7XFxyXFxuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDEwMDBtcztcXHJcXG4gICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMTAwMG1zO1xcclxcbiAgXFxyXFxufVxcclxcbi5sYXJnZS1sb2dvOmhvdmVye1xcclxcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzMWRlZyk7XFxyXFxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDMxZGVnKVxcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9uLWRpdntcXHJcXG4gIHBhZGRpbmc6IDEuNXJlbSAwcmVtO1xcclxcblxcclxcbn1cXHJcXG4ud29yay1idXR0b24sIC5jb250YWN0LWJ1dHRvbntcXHJcXG4gIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgY29sb3I6IHZhcigtLWRpZi1jb2xvcik7XFxyXFxuICBwYWRkaW5nOiAwLjRyZW0gMnJlbTtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWRpZi1jb2xvcik7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBhbmltYXRpb246IHBhcmEgMnMgMTtcXHJcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBwYXJhIDNzIDE7XFxyXFxuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xcclxcbiAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtcztcXHJcXG59XFxyXFxuLndvcmstYnV0dG9ue1xcclxcbiAgXFxyXFxufVxcclxcblxcclxcbi53b3JrLWJ1dHRvbiwgLmNvbnRhY3QtYnV0dG9uOmhvdmVye1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGlmLWNvbG9yKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1kaWYtY29sb3IyKTtcXHJcXG59XFxyXFxuLmJ1cmdlclxcclxcbi5iYXJzOmhvdmVye1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGlmLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1cmdlciBkaXY6bnRoLWNoaWxkKDIpOmhvdmVye1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEzMzg1ZjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogTWVkaWEgcXVlcnkgKi9cXHJcXG4vKiBNZWRpYSBxdWVyeSAqL1xcclxcbi8qIE1lZGlhIHF1ZXJ5ICovXFxyXFxuXFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDE2MDBweCl7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIGFuZCAobWF4LXdpZHRoOjE1MDBweCl7XFxyXFxuICAgIC5ob21lLXRleHR7XFxyXFxuICAgICAgbWFyZ2luLWJvdHRvbTogMTAlO1xcclxcbiAgICAgIG92ZXJmbG93LXg6IGF1dG87XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCl7XFxyXFxuICAud29yay1pbm5lcixcXHJcXG4gIC5ob21lLWltYWdle1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIG5vLXJlcGVhdCBjZW50ZXIgYm90dG9tL2NvdmVyO1xcclxcbiAgfVxcclxcbiAgLmxhcmdlLCAubGFyZ2UtbmFtZXtcXHJcXG4gICAgZm9udC1zaXplOiA3LjV2dztcXHJcXG4gIH1cXHJcXG4gIC5ob21lLWltYWdle1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgfVxcclxcbiAgLmxhcmdlLWxvZ297XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9XFxyXFxuICAuaG9tZS10ZXh0e1xcclxcbiAgICBwYWRkaW5nLXRvcDogMjAlO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDVyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogNnZ3O1xcclxcbiAgICB3aWR0aDogODAlO1xcclxcbiAgfVxcclxcbiAgLnBhcmFncmFwaHtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogNSU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMi44dnc7XFxyXFxuXFxyXFxuICB9XFxyXFxuICAuYnV0dG9uLWRpdntcXHJcXG4gICAgcGFkZGluZzogMS45cmVtIDByZW07XFxyXFxuICB9XFxyXFxuICAud29yay1idXR0b257XFxyXFxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcclxcbiAgfVxcclxcbiAgLmxhcmdlLWxvZ297XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9XFxyXFxuXFxyXFxufVxcclxcblxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCl7XFxyXFxuLmhvbWUtaW1hZ2V7XFxyXFxuICAgIG92ZXJmbG93LXg6IGF1dG87XFxyXFxuICB9XFxyXFxuLmhvbWUtaW5uZXJ7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsMWZyKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4uaG9tZS10ZXh0e1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDJyZW07XFxyXFxuICAgIHBhZGRpbmctdG9wOiAyNSU7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogNHJlbTtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDA7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogN3Z3O1xcclxcbiAgICBmb250LXdlaWdodDogMzAwO1xcclxcbiAgICB3b3JkLXNwYWNpbmc6IG5vcm1hbDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICB9XFxyXFxuICAud29yay1idXR0b257XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIH1cXHJcXG4gIC5wYXJhZ3JhcGh7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDUlO1xcclxcbiAgICBmb250LXNpemU6IGNhbGMoNXB4ICsgMi44dncpO1xcclxcbiAgfVxcclxcbiAgLmxhcmdlLWxvZ297XFxyXFxuICAgICAgbWFyZ2luLWxlZnQ6IDIwJTtcXHJcXG4gICAgICBwYWRkaW5nLXRvcDogMCU7XFxyXFxuICAgICAgbWFyZ2luLXRvcDogMDtcXHJcXG4gICAgICBkaXNwbGF5OiBpbmxpbmU7XFxyXFxuICAgICAgZ3JpZC1nYXA6MDtcXHJcXG4gICAgICBnYXA6MDtcXHJcXG4gICAgICBoZWlnaHQ6IDEwcmVtO1xcclxcbiAgICAgIHdpZHRoOiAxNXJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG59XFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDQ4MHB4KXtcXHJcXG5cXHJcXG5cXHJcXG4gIFxcclxcbn1cXHJcXG5cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3R5bGUvbGFuZGluZy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsU0FBUztBQUNUO0lBQ0ksOEVBQXVFO0lBQ3ZFLFdBQVc7SUFDWCxhQUFhO0lBQ2IsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQjs7O0FBR0o7SUFDSSxvQkFBWTtJQUFaLFlBQVk7SUFDWiw2QkFBcUI7WUFBckIscUJBQXFCO0lBQ3JCLGlCQUFpQjs7QUFFckI7QUFDQTtFQUNFLG9CQUFvQjtFQUNwQix3QkFBd0I7RUFDeEIsVUFBVTtFQUNWLGtDQUEwQjtVQUExQiwwQkFBMEI7RUFDMUIsb0JBQW9CO0VBQ3BCLDRCQUE0QjtBQUM5QjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsNEJBQW9CO1VBQXBCLG9CQUFvQjtFQUNwQixrQ0FBMEI7VUFBMUIsMEJBQTBCO0VBQzFCLGtCQUFrQjtFQUNsQiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsNEJBQTRCO0VBQzVCLG1DQUEyQjtVQUEzQiwyQkFBMkI7O0FBRTdCO0FBQ0E7RUFDRSxnQ0FBdUI7VUFBdkI7QUFDRjs7QUFFQTtFQUNFLG9CQUFvQjs7QUFFdEI7QUFDQTtFQUNFLDJCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQiw2QkFBNkI7RUFDN0IsdUJBQXVCO0VBQ3ZCLG9CQUFvQjtFQUNwQixrQ0FBa0M7RUFDbEMsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQiw0QkFBNEI7RUFDNUIsa0NBQTBCO1VBQTFCLDBCQUEwQjtBQUM1QjtBQUNBOztBQUVBOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLHdCQUF3QjtBQUMxQjtBQUNBOztFQUVFLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7O0FBR0EsZ0JBQWdCO0FBQ2hCLGdCQUFnQjtBQUNoQixnQkFBZ0I7OztBQUdoQjs7QUFFQTs7QUFFQTtJQUNJO01BQ0Usa0JBQWtCO01BQ2xCLGdCQUFnQjtJQUNsQjtBQUNKOztBQUVBO0VBQ0U7O0lBRUUsaUZBQW1GO0VBQ3JGO0VBQ0E7SUFDRSxnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxVQUFVO0VBQ1o7RUFDQTtJQUNFLGlCQUFpQjtJQUNqQixnQkFBZ0I7O0VBRWxCO0VBQ0E7SUFDRSxvQkFBb0I7RUFDdEI7RUFDQTtJQUNFLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsYUFBYTtFQUNmOztBQUVGOzs7QUFHQTtBQUNBO0lBQ0ksZ0JBQWdCO0VBQ2xCO0FBQ0Y7SUFDSSxhQUFhO0lBQ2Isb0NBQW9DO0VBQ3RDOztBQUVGO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsV0FBVztFQUNiO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxpQkFBaUI7SUFDakIsNEJBQTRCO0VBQzlCO0VBQ0E7TUFDSSxnQkFBZ0I7TUFDaEIsZUFBZTtNQUNmLGFBQWE7TUFDYixlQUFlO01BQ2YsVUFBSztNQUFMLEtBQUs7TUFDTCxhQUFhO01BQ2IsWUFBWTtFQUNoQjs7QUFFRjtBQUNBOzs7O0FBSUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogSG9tZSAqL1xcclxcbi5ob21lLWltYWdle1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uL3B1YmxpYy9iYWNrZ3JvdW5kNS5wbmcnKSBuby1yZXBlYXQgY2VudGVyIHRvcC9jb3ZlcjtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgb3ZlcmZsb3cteDogdW5zZXQ7XFxyXFxuICAgIH1cXHJcXG4gIFxcclxcblxcclxcbi5ob21lLWlubmVye1xcclxcbiAgICBkaXNwbGF5OmZsZXg7XFxyXFxuICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDNyZW07XFxyXFxuICAgIFxcclxcbn1cXHJcXG4uaG9tZS10ZXh0e1xcclxcbiAgcGFkZGluZzogMjByZW0gMTByZW07XFxyXFxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxyXFxuICB3aWR0aDogODAlO1xcclxcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMzAwbXM7XFxyXFxuICBhbmltYXRpb246IHRleHQgMXMgMTtcXHJcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBwYXJhIDJzIDE7XFxyXFxufVxcclxcbi5wYXJhZ3JhcGh7XFxyXFxuICBmb250LXdlaWdodDogMTAwO1xcclxcbiAgbGluZS1oZWlnaHQ6IDJyZW07XFxyXFxuICB3b3JkLXNwYWNpbmc6IDVweDtcXHJcXG4gIGFuaW1hdGlvbjogcGFyYSAycyAxO1xcclxcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMzAwbXM7XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiAxNSU7XFxyXFxuICAtd2Via2l0LWFuaW1hdGlvbjogcGFyYSAzcyAxO1xcclxcbn1cXHJcXG5cXHJcXG4ubGFyZ2UtbG9nb3tcXHJcXG4gIHdpZHRoOiA3MCU7XFxyXFxuICBtYXJnaW4tdG9wOiA1cmVtO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiA1cmVtO1xcclxcbiAgYW5pbWF0aW9uOiBsb2dvIDJzIDE7XFxyXFxuICAtd2Via2l0LWFuaW1hdGlvbjogbG9nbyAzcyAxO1xcclxcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMTAwMG1zO1xcclxcbiAgXFxyXFxufVxcclxcbi5sYXJnZS1sb2dvOmhvdmVye1xcclxcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzFkZWcpXFxyXFxufVxcclxcblxcclxcbi5idXR0b24tZGl2e1xcclxcbiAgcGFkZGluZzogMS41cmVtIDByZW07XFxyXFxuXFxyXFxufVxcclxcbi53b3JrLWJ1dHRvbiwgLmNvbnRhY3QtYnV0dG9ue1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgY29sb3I6IHZhcigtLWRpZi1jb2xvcik7XFxyXFxuICBwYWRkaW5nOiAwLjRyZW0gMnJlbTtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWRpZi1jb2xvcik7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBhbmltYXRpb246IHBhcmEgMnMgMTtcXHJcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBwYXJhIDNzIDE7XFxyXFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtcztcXHJcXG59XFxyXFxuLndvcmstYnV0dG9ue1xcclxcbiAgXFxyXFxufVxcclxcblxcclxcbi53b3JrLWJ1dHRvbiwgLmNvbnRhY3QtYnV0dG9uOmhvdmVye1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGlmLWNvbG9yKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1kaWYtY29sb3IyKTtcXHJcXG59XFxyXFxuLmJ1cmdlclxcclxcbi5iYXJzOmhvdmVye1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGlmLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1cmdlciBkaXY6bnRoLWNoaWxkKDIpOmhvdmVye1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEzMzg1ZjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogTWVkaWEgcXVlcnkgKi9cXHJcXG4vKiBNZWRpYSBxdWVyeSAqL1xcclxcbi8qIE1lZGlhIHF1ZXJ5ICovXFxyXFxuXFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDE2MDBweCl7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIGFuZCAobWF4LXdpZHRoOjE1MDBweCl7XFxyXFxuICAgIC5ob21lLXRleHR7XFxyXFxuICAgICAgbWFyZ2luLWJvdHRvbTogMTAlO1xcclxcbiAgICAgIG92ZXJmbG93LXg6IGF1dG87XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCl7XFxyXFxuICAud29yay1pbm5lcixcXHJcXG4gIC5ob21lLWltYWdle1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uL3B1YmxpYy9iYWNrZ3JvdW5kUmVzcG9uc2l2ZS5wbmcnKSBuby1yZXBlYXQgY2VudGVyIGJvdHRvbS9jb3ZlcjtcXHJcXG4gIH1cXHJcXG4gIC5sYXJnZSwgLmxhcmdlLW5hbWV7XFxyXFxuICAgIGZvbnQtc2l6ZTogNy41dnc7XFxyXFxuICB9XFxyXFxuICAuaG9tZS1pbWFnZXtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIH1cXHJcXG4gIC5sYXJnZS1sb2dve1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcbiAgLmhvbWUtdGV4dHtcXHJcXG4gICAgcGFkZGluZy10b3A6IDIwJTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiA1cmVtO1xcclxcbiAgICBmb250LXNpemU6IDZ2dztcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG4gIH1cXHJcXG4gIC5wYXJhZ3JhcGh7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDUlO1xcclxcbiAgICBmb250LXNpemU6IDIuOHZ3O1xcclxcblxcclxcbiAgfVxcclxcbiAgLmJ1dHRvbi1kaXZ7XFxyXFxuICAgIHBhZGRpbmc6IDEuOXJlbSAwcmVtO1xcclxcbiAgfVxcclxcbiAgLndvcmstYnV0dG9ue1xcclxcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXHJcXG4gIH1cXHJcXG4gIC5sYXJnZS1sb2dve1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcblxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpe1xcclxcbi5ob21lLWltYWdle1xcclxcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xcclxcbiAgfVxcclxcbi5ob21lLWlubmVye1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLDFmcik7XFxyXFxuICB9XFxyXFxuXFxyXFxuLmhvbWUtdGV4dHtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xcclxcbiAgICBwYWRkaW5nLXRvcDogMjUlO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDRyZW07XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAwO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcclxcbiAgICBmb250LXNpemU6IDd2dztcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG4gICAgd29yZC1zcGFjaW5nOiBub3JtYWw7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgfVxcclxcbiAgLndvcmstYnV0dG9ue1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICB9XFxyXFxuICAucGFyYWdyYXBoe1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiA1JTtcXHJcXG4gICAgZm9udC1zaXplOiBjYWxjKDVweCArIDIuOHZ3KTtcXHJcXG4gIH1cXHJcXG4gIC5sYXJnZS1sb2dve1xcclxcbiAgICAgIG1hcmdpbi1sZWZ0OiAyMCU7XFxyXFxuICAgICAgcGFkZGluZy10b3A6IDAlO1xcclxcbiAgICAgIG1hcmdpbi10b3A6IDA7XFxyXFxuICAgICAgZGlzcGxheTogaW5saW5lO1xcclxcbiAgICAgIGdhcDowO1xcclxcbiAgICAgIGhlaWdodDogMTByZW07XFxyXFxuICAgICAgd2lkdGg6IDE1cmVtO1xcclxcbiAgfVxcclxcblxcclxcbn1cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogNDgwcHgpe1xcclxcblxcclxcblxcclxcbiAgXFxyXFxufVxcclxcblxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwic291cmNlUm9vdCI6IiJ9