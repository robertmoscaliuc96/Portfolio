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
___CSS_LOADER_EXPORT___.push([module.i, "/* Home */\r\n.home-image{\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat center top/cover;\r\n    width: 100%;\r\n    height: 100vh;\r\n    margin: auto;\r\n    overflow-x: unset;\r\n}\r\n  \r\n\r\n.home-inner{\r\n    display:-webkit-flex;\r\n    display:flex;\r\n    -webkit-flex-flow: row nowrap;\r\n            flex-flow: row nowrap;\r\n    line-height: 3rem;\r\n    \r\n}\r\n.home-text{\r\n  padding: 20rem 10rem;\r\n  color: var(--text-color);\r\n  width: 80%;\r\n  -webkit-transition-duration: 300ms;\r\n          transition-duration: 300ms;\r\n  animation: text 1s 1;\r\n  -webkit-animation: para 2s 1;\r\n}\r\n.paragraph{\r\n  font-weight: 100;\r\n  line-height: 2rem;\r\n  word-spacing: 5px;\r\n  -webkit-animation: para 2s 1;\r\n          animation: para 2s 1;\r\n  -webkit-transition-duration: 300ms;\r\n          transition-duration: 300ms;\r\n  padding-right: 15%;\r\n  -webkit-animation: para 3s 1;\r\n}\r\n\r\n.large-logo{\r\n  width: 70%;\r\n  margin-top: 5rem;\r\n  margin-right: 5rem;\r\n  animation: logo 2s 1;\r\n  -webkit-animation: logo 3s 1;\r\n  -webkit-transition-duration: 1000ms;\r\n          transition-duration: 1000ms;\r\n  \r\n}\r\n.large-logo:hover{\r\n  -webkit-transform: rotate(31deg);\r\n          transform: rotate(31deg)\r\n}\r\n\r\n.button-div{\r\n  padding: 1.5rem 0rem;\r\n\r\n}\r\n.work-button, .contact-button{\r\n  -webkit-align-items: center;\r\n          align-items: center;\r\n  font-size: 1.5rem;\r\n  font-weight: 500;\r\n  background-color: transparent;\r\n  color: var(--dif-color);\r\n  padding: 0.4rem 2rem;\r\n  border: 2px solid var(--dif-color);\r\n  cursor: pointer;\r\n  animation: para 2s 1;\r\n  -webkit-animation: para 3s 1;\r\n  -webkit-transition-duration: 500ms;\r\n          transition-duration: 500ms;\r\n}\r\n.work-button{\r\n  \r\n}\r\n\r\n.work-button, .contact-button:hover{\r\n  background-color: var(--dif-color);\r\n  color: var(--dif-color2);\r\n}\r\n.burger\r\n.bars:hover{\r\n  background-color: var(--dif-color);\r\n}\r\n\r\n.burger div:nth-child(2):hover{\r\n  background-color: #13385f;\r\n}\r\n\r\n\r\n/* Media query */\r\n/* Media query */\r\n/* Media query */\r\n\r\n\r\n@media (min-width: 1600px){\r\n\r\n}\r\n\r\n@media (min-width: 1024px) and (max-width:1500px){\r\n    .home-text{\r\n      margin-bottom: 10%;\r\n      overflow-x: auto;\r\n    }\r\n}\r\n\r\n\r\n\r\n\r\n\r\n@media (max-width: 1024px){\r\n  .work-inner,\r\n  .home-image{\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") no-repeat center bottom/cover;\r\n  }\r\n  .large, .large-name{\r\n    font-size: 7.5vw;\r\n  }\r\n  .home-image{\r\n    height: 100vh;\r\n  }\r\n  .large-logo{\r\n    display: none;\r\n  }\r\n  .home-text{\r\n    padding-top: 20%;\r\n    padding-left: 5rem;\r\n    font-size: 6vw;\r\n    width: 80%;\r\n  }\r\n  .paragraph{\r\n    padding-right: 5%;\r\n    font-size: 2.8vw;\r\n\r\n  }\r\n  .button-div{\r\n    padding: 1.9rem 0rem;\r\n  }\r\n  .work-button{\r\n    font-size: 1.4rem;\r\n  }\r\n  .large-logo{\r\n    display: none;\r\n  }\r\n\r\n}\r\n\r\n@media (max-width: 960px){\r\n  .burger{\r\n    \r\n  }\r\n\r\n}\r\n\r\n\r\n@media (max-width: 768px){\r\n.home-image{\r\n    overflow-x: auto;\r\n  }\r\n.home-inner{\r\n    display: grid;\r\n    grid-template-columns: repeat(1,1fr);\r\n  }\r\n\r\n.home-text{\r\n    margin-right: 0;\r\n    padding-right: 2rem;\r\n    padding-top: 25%;\r\n    padding-left: 4rem;\r\n    padding-bottom: 0;\r\n    margin-bottom: 0;\r\n    font-size: 7vw;\r\n    font-weight: 300;\r\n    word-spacing: normal;\r\n    width: 100%;\r\n  }\r\n  .work-button{\r\n    font-size: 1rem;\r\n  }\r\n  .paragraph{\r\n    padding-right: 5%;\r\n    font-size: calc(5px + 2.8vw);\r\n  }\r\n  .large-logo{\r\n      margin-left: 20%;\r\n      padding-top: 0%;\r\n      margin-top: 0;\r\n      display: inline;\r\n      grid-gap:0;\r\n      gap:0;\r\n      height: 10rem;\r\n      width: 15rem;\r\n  }\r\n\r\n}\r\n@media (min-width: 480px){\r\n\r\n\r\n  \r\n}\r\n\r\n", "",{"version":3,"sources":["webpack://style/landing.css"],"names":[],"mappings":"AAAA,SAAS;AACT;IACI,8EAAuE;IACvE,WAAW;IACX,aAAa;IACb,YAAY;IACZ,iBAAiB;AACrB;;;AAGA;IACI,oBAAY;IAAZ,YAAY;IACZ,6BAAqB;YAArB,qBAAqB;IACrB,iBAAiB;;AAErB;AACA;EACE,oBAAoB;EACpB,wBAAwB;EACxB,UAAU;EACV,kCAA0B;UAA1B,0BAA0B;EAC1B,oBAAoB;EACpB,4BAA4B;AAC9B;AACA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,iBAAiB;EACjB,4BAAoB;UAApB,oBAAoB;EACpB,kCAA0B;UAA1B,0BAA0B;EAC1B,kBAAkB;EAClB,4BAA4B;AAC9B;;AAEA;EACE,UAAU;EACV,gBAAgB;EAChB,kBAAkB;EAClB,oBAAoB;EACpB,4BAA4B;EAC5B,mCAA2B;UAA3B,2BAA2B;;AAE7B;AACA;EACE,gCAAuB;UAAvB;AACF;;AAEA;EACE,oBAAoB;;AAEtB;AACA;EACE,2BAAmB;UAAnB,mBAAmB;EACnB,iBAAiB;EACjB,gBAAgB;EAChB,6BAA6B;EAC7B,uBAAuB;EACvB,oBAAoB;EACpB,kCAAkC;EAClC,eAAe;EACf,oBAAoB;EACpB,4BAA4B;EAC5B,kCAA0B;UAA1B,0BAA0B;AAC5B;AACA;;AAEA;;AAEA;EACE,kCAAkC;EAClC,wBAAwB;AAC1B;AACA;;EAEE,kCAAkC;AACpC;;AAEA;EACE,yBAAyB;AAC3B;;;AAGA,gBAAgB;AAChB,gBAAgB;AAChB,gBAAgB;;;AAGhB;;AAEA;;AAEA;IACI;MACE,kBAAkB;MAClB,gBAAgB;IAClB;AACJ;;;;;;AAMA;EACE;;IAEE,iFAAmF;EACrF;EACA;IACE,gBAAgB;EAClB;EACA;IACE,aAAa;EACf;EACA;IACE,aAAa;EACf;EACA;IACE,gBAAgB;IAChB,kBAAkB;IAClB,cAAc;IACd,UAAU;EACZ;EACA;IACE,iBAAiB;IACjB,gBAAgB;;EAElB;EACA;IACE,oBAAoB;EACtB;EACA;IACE,iBAAiB;EACnB;EACA;IACE,aAAa;EACf;;AAEF;;AAEA;EACE;;EAEA;;AAEF;;;AAGA;AACA;IACI,gBAAgB;EAClB;AACF;IACI,aAAa;IACb,oCAAoC;EACtC;;AAEF;IACI,eAAe;IACf,mBAAmB;IACnB,gBAAgB;IAChB,kBAAkB;IAClB,iBAAiB;IACjB,gBAAgB;IAChB,cAAc;IACd,gBAAgB;IAChB,oBAAoB;IACpB,WAAW;EACb;EACA;IACE,eAAe;EACjB;EACA;IACE,iBAAiB;IACjB,4BAA4B;EAC9B;EACA;MACI,gBAAgB;MAChB,eAAe;MACf,aAAa;MACb,eAAe;MACf,UAAK;MAAL,KAAK;MACL,aAAa;MACb,YAAY;EAChB;;AAEF;AACA;;;;AAIA","sourcesContent":["/* Home */\r\n.home-image{\r\n    background: url('../public/background5.png') no-repeat center top/cover;\r\n    width: 100%;\r\n    height: 100vh;\r\n    margin: auto;\r\n    overflow-x: unset;\r\n}\r\n  \r\n\r\n.home-inner{\r\n    display:flex;\r\n    flex-flow: row nowrap;\r\n    line-height: 3rem;\r\n    \r\n}\r\n.home-text{\r\n  padding: 20rem 10rem;\r\n  color: var(--text-color);\r\n  width: 80%;\r\n  transition-duration: 300ms;\r\n  animation: text 1s 1;\r\n  -webkit-animation: para 2s 1;\r\n}\r\n.paragraph{\r\n  font-weight: 100;\r\n  line-height: 2rem;\r\n  word-spacing: 5px;\r\n  animation: para 2s 1;\r\n  transition-duration: 300ms;\r\n  padding-right: 15%;\r\n  -webkit-animation: para 3s 1;\r\n}\r\n\r\n.large-logo{\r\n  width: 70%;\r\n  margin-top: 5rem;\r\n  margin-right: 5rem;\r\n  animation: logo 2s 1;\r\n  -webkit-animation: logo 3s 1;\r\n  transition-duration: 1000ms;\r\n  \r\n}\r\n.large-logo:hover{\r\n  transform: rotate(31deg)\r\n}\r\n\r\n.button-div{\r\n  padding: 1.5rem 0rem;\r\n\r\n}\r\n.work-button, .contact-button{\r\n  align-items: center;\r\n  font-size: 1.5rem;\r\n  font-weight: 500;\r\n  background-color: transparent;\r\n  color: var(--dif-color);\r\n  padding: 0.4rem 2rem;\r\n  border: 2px solid var(--dif-color);\r\n  cursor: pointer;\r\n  animation: para 2s 1;\r\n  -webkit-animation: para 3s 1;\r\n  transition-duration: 500ms;\r\n}\r\n.work-button{\r\n  \r\n}\r\n\r\n.work-button, .contact-button:hover{\r\n  background-color: var(--dif-color);\r\n  color: var(--dif-color2);\r\n}\r\n.burger\r\n.bars:hover{\r\n  background-color: var(--dif-color);\r\n}\r\n\r\n.burger div:nth-child(2):hover{\r\n  background-color: #13385f;\r\n}\r\n\r\n\r\n/* Media query */\r\n/* Media query */\r\n/* Media query */\r\n\r\n\r\n@media (min-width: 1600px){\r\n\r\n}\r\n\r\n@media (min-width: 1024px) and (max-width:1500px){\r\n    .home-text{\r\n      margin-bottom: 10%;\r\n      overflow-x: auto;\r\n    }\r\n}\r\n\r\n\r\n\r\n\r\n\r\n@media (max-width: 1024px){\r\n  .work-inner,\r\n  .home-image{\r\n    background: url('../public/backgroundResponsive.png') no-repeat center bottom/cover;\r\n  }\r\n  .large, .large-name{\r\n    font-size: 7.5vw;\r\n  }\r\n  .home-image{\r\n    height: 100vh;\r\n  }\r\n  .large-logo{\r\n    display: none;\r\n  }\r\n  .home-text{\r\n    padding-top: 20%;\r\n    padding-left: 5rem;\r\n    font-size: 6vw;\r\n    width: 80%;\r\n  }\r\n  .paragraph{\r\n    padding-right: 5%;\r\n    font-size: 2.8vw;\r\n\r\n  }\r\n  .button-div{\r\n    padding: 1.9rem 0rem;\r\n  }\r\n  .work-button{\r\n    font-size: 1.4rem;\r\n  }\r\n  .large-logo{\r\n    display: none;\r\n  }\r\n\r\n}\r\n\r\n@media (max-width: 960px){\r\n  .burger{\r\n    \r\n  }\r\n\r\n}\r\n\r\n\r\n@media (max-width: 768px){\r\n.home-image{\r\n    overflow-x: auto;\r\n  }\r\n.home-inner{\r\n    display: grid;\r\n    grid-template-columns: repeat(1,1fr);\r\n  }\r\n\r\n.home-text{\r\n    margin-right: 0;\r\n    padding-right: 2rem;\r\n    padding-top: 25%;\r\n    padding-left: 4rem;\r\n    padding-bottom: 0;\r\n    margin-bottom: 0;\r\n    font-size: 7vw;\r\n    font-weight: 300;\r\n    word-spacing: normal;\r\n    width: 100%;\r\n  }\r\n  .work-button{\r\n    font-size: 1rem;\r\n  }\r\n  .paragraph{\r\n    padding-right: 5%;\r\n    font-size: calc(5px + 2.8vw);\r\n  }\r\n  .large-logo{\r\n      margin-left: 20%;\r\n      padding-top: 0%;\r\n      margin-top: 0;\r\n      display: inline;\r\n      gap:0;\r\n      height: 10rem;\r\n      width: 15rem;\r\n  }\r\n\r\n}\r\n@media (min-width: 480px){\r\n\r\n\r\n  \r\n}\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGUvbGFuZGluZy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDeUY7QUFDTztBQUMxQjtBQUNTO0FBQy9FLDhCQUE4QixtRkFBMkI7QUFDekQseUNBQXlDLHNGQUErQixDQUFDLCtEQUE2QjtBQUN0Ryx5Q0FBeUMsc0ZBQStCLENBQUMsd0VBQTZCO0FBQ3RHO0FBQ0EsOEJBQThCLFFBQVMsNkJBQTZCLCtGQUErRixvQkFBb0Isc0JBQXNCLHFCQUFxQiwwQkFBMEIsS0FBSywwQkFBMEIsNkJBQTZCLHFCQUFxQixzQ0FBc0Msc0NBQXNDLDBCQUEwQixhQUFhLGVBQWUsMkJBQTJCLCtCQUErQixpQkFBaUIseUNBQXlDLHlDQUF5QywyQkFBMkIsbUNBQW1DLEtBQUssZUFBZSx1QkFBdUIsd0JBQXdCLHdCQUF3QixtQ0FBbUMsbUNBQW1DLHlDQUF5Qyx5Q0FBeUMseUJBQXlCLG1DQUFtQyxLQUFLLG9CQUFvQixpQkFBaUIsdUJBQXVCLHlCQUF5QiwyQkFBMkIsbUNBQW1DLDBDQUEwQywwQ0FBMEMsV0FBVyxzQkFBc0IsdUNBQXVDLDJDQUEyQyxvQkFBb0IsMkJBQTJCLFNBQVMsa0NBQWtDLGtDQUFrQyxrQ0FBa0Msd0JBQXdCLHVCQUF1QixvQ0FBb0MsOEJBQThCLDJCQUEyQix5Q0FBeUMsc0JBQXNCLDJCQUEyQixtQ0FBbUMseUNBQXlDLHlDQUF5QyxLQUFLLGlCQUFpQixXQUFXLDRDQUE0Qyx5Q0FBeUMsK0JBQStCLEtBQUssMkJBQTJCLHlDQUF5QyxLQUFLLHVDQUF1QyxnQ0FBZ0MsS0FBSyw4R0FBOEcsU0FBUywwREFBMEQsbUJBQW1CLDZCQUE2QiwyQkFBMkIsU0FBUyxLQUFLLG1EQUFtRCxvQ0FBb0Msa0dBQWtHLE9BQU8sMEJBQTBCLHlCQUF5QixPQUFPLGtCQUFrQixzQkFBc0IsT0FBTyxrQkFBa0Isc0JBQXNCLE9B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c0IsT0FBTyxrQkFBa0Isc0JBQXNCLE9BQU8saUJBQWlCLHlCQUF5QiwyQkFBMkIsdUJBQXVCLG1CQUFtQixPQUFPLGlCQUFpQiwwQkFBMEIseUJBQXlCLFdBQVcsa0JBQWtCLDZCQUE2QixPQUFPLG1CQUFtQiwwQkFBMEIsT0FBTyxrQkFBa0Isc0JBQXNCLE9BQU8sU0FBUyxrQ0FBa0MsY0FBYyxlQUFlLFNBQVMsc0NBQXNDLGdCQUFnQix5QkFBeUIsT0FBTyxnQkFBZ0Isc0JBQXNCLDZDQUE2QyxPQUFPLG1CQUFtQix3QkFBd0IsNEJBQTRCLHlCQUF5QiwyQkFBMkIsMEJBQTBCLHlCQUF5Qix1QkFBdUIseUJBQXlCLDZCQUE2QixvQkFBb0IsT0FBTyxtQkFBbUIsd0JBQXdCLE9BQU8saUJBQWlCLDBCQUEwQixxQ0FBcUMsT0FBTyxrQkFBa0IsMkJBQTJCLDBCQUEwQix3QkFBd0IsMEJBQTBCLGdCQUFnQix3QkFBd0IsdUJBQXVCLE9BQU8sU0FBUyw4QkFBOEIsbUJBQW1CLDJCQUEyQjtBQUM3a1M7QUFDZSxzRkFBdUIsRUFBQyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmM2Yzc0NTQzZjdlYzliOWE2NjQwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fIGZyb20gXCIuLi9wdWJsaWMvYmFja2dyb3VuZDUucG5nXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gZnJvbSBcIi4uL3B1YmxpYy9iYWNrZ3JvdW5kUmVzcG9uc2l2ZS5wbmdcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogSG9tZSAqL1xcclxcbi5ob21lLWltYWdle1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIG5vLXJlcGVhdCBjZW50ZXIgdG9wL2NvdmVyO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICBvdmVyZmxvdy14OiB1bnNldDtcXHJcXG59XFxyXFxuICBcXHJcXG5cXHJcXG4uaG9tZS1pbm5lcntcXHJcXG4gICAgZGlzcGxheTotd2Via2l0LWZsZXg7XFxyXFxuICAgIGRpc3BsYXk6ZmxleDtcXHJcXG4gICAgLXdlYmtpdC1mbGV4LWZsb3c6IHJvdyBub3dyYXA7XFxyXFxuICAgICAgICAgICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xcclxcbiAgICBsaW5lLWhlaWdodDogM3JlbTtcXHJcXG4gICAgXFxyXFxufVxcclxcbi5ob21lLXRleHR7XFxyXFxuICBwYWRkaW5nOiAyMHJlbSAxMHJlbTtcXHJcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDMwMG1zO1xcclxcbiAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAzMDBtcztcXHJcXG4gIGFuaW1hdGlvbjogdGV4dCAxcyAxO1xcclxcbiAgLXdlYmtpdC1hbmltYXRpb246IHBhcmEgMnMgMTtcXHJcXG59XFxyXFxuLnBhcmFncmFwaHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XFxyXFxuICBsaW5lLWhlaWdodDogMnJlbTtcXHJcXG4gIHdvcmQtc3BhY2luZzogNXB4O1xcclxcbiAgLXdlYmtpdC1hbmltYXRpb246IHBhcmEgMnMgMTtcXHJcXG4gICAgICAgICAgYW5pbWF0aW9uOiBwYXJhIDJzIDE7XFxyXFxuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDMwMG1zO1xcclxcbiAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAzMDBtcztcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDE1JTtcXHJcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBwYXJhIDNzIDE7XFxyXFxufVxcclxcblxcclxcbi5sYXJnZS1sb2dve1xcclxcbiAgd2lkdGg6IDcwJTtcXHJcXG4gIG1hcmdpbi10b3A6IDVyZW07XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDVyZW07XFxyXFxuICBhbmltYXRpb246IGxvZ28gMnMgMTtcXHJcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBsb2dvIDNzIDE7XFxyXFxuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDEwMDBtcztcXHJcXG4gICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMTAwMG1zO1xcclxcbiAgXFxyXFxufVxcclxcbi5sYXJnZS1sb2dvOmhvdmVye1xcclxcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzMWRlZyk7XFxyXFxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDMxZGVnKVxcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9uLWRpdntcXHJcXG4gIHBhZGRpbmc6IDEuNXJlbSAwcmVtO1xcclxcblxcclxcbn1cXHJcXG4ud29yay1idXR0b24sIC5jb250YWN0LWJ1dHRvbntcXHJcXG4gIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgY29sb3I6IHZhcigtLWRpZi1jb2xvcik7XFxyXFxuICBwYWRkaW5nOiAwLjRyZW0gMnJlbTtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWRpZi1jb2xvcik7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBhbmltYXRpb246IHBhcmEgMnMgMTtcXHJcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBwYXJhIDNzIDE7XFxyXFxuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xcclxcbiAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtcztcXHJcXG59XFxyXFxuLndvcmstYnV0dG9ue1xcclxcbiAgXFxyXFxufVxcclxcblxcclxcbi53b3JrLWJ1dHRvbiwgLmNvbnRhY3QtYnV0dG9uOmhvdmVye1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGlmLWNvbG9yKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1kaWYtY29sb3IyKTtcXHJcXG59XFxyXFxuLmJ1cmdlclxcclxcbi5iYXJzOmhvdmVye1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGlmLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1cmdlciBkaXY6bnRoLWNoaWxkKDIpOmhvdmVye1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEzMzg1ZjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogTWVkaWEgcXVlcnkgKi9cXHJcXG4vKiBNZWRpYSBxdWVyeSAqL1xcclxcbi8qIE1lZGlhIHF1ZXJ5ICovXFxyXFxuXFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDE2MDBweCl7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIGFuZCAobWF4LXdpZHRoOjE1MDBweCl7XFxyXFxuICAgIC5ob21lLXRleHR7XFxyXFxuICAgICAgbWFyZ2luLWJvdHRvbTogMTAlO1xcclxcbiAgICAgIG92ZXJmbG93LXg6IGF1dG87XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCl7XFxyXFxuICAud29yay1pbm5lcixcXHJcXG4gIC5ob21lLWltYWdle1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIG5vLXJlcGVhdCBjZW50ZXIgYm90dG9tL2NvdmVyO1xcclxcbiAgfVxcclxcbiAgLmxhcmdlLCAubGFyZ2UtbmFtZXtcXHJcXG4gICAgZm9udC1zaXplOiA3LjV2dztcXHJcXG4gIH1cXHJcXG4gIC5ob21lLWltYWdle1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgfVxcclxcbiAgLmxhcmdlLWxvZ297XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9XFxyXFxuICAuaG9tZS10ZXh0e1xcclxcbiAgICBwYWRkaW5nLXRvcDogMjAlO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDVyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogNnZ3O1xcclxcbiAgICB3aWR0aDogODAlO1xcclxcbiAgfVxcclxcbiAgLnBhcmFncmFwaHtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogNSU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMi44dnc7XFxyXFxuXFxyXFxuICB9XFxyXFxuICAuYnV0dG9uLWRpdntcXHJcXG4gICAgcGFkZGluZzogMS45cmVtIDByZW07XFxyXFxuICB9XFxyXFxuICAud29yay1idXR0b257XFxyXFxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcclxcbiAgfVxcclxcbiAgLmxhcmdlLWxvZ297XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9XFxyXFxuXFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA5NjBweCl7XFxyXFxuICAuYnVyZ2Vye1xcclxcbiAgICBcXHJcXG4gIH1cXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KXtcXHJcXG4uaG9tZS1pbWFnZXtcXHJcXG4gICAgb3ZlcmZsb3cteDogYXV0bztcXHJcXG4gIH1cXHJcXG4uaG9tZS1pbm5lcntcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwxZnIpO1xcclxcbiAgfVxcclxcblxcclxcbi5ob21lLXRleHR7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMDtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMnJlbTtcXHJcXG4gICAgcGFkZGluZy10b3A6IDI1JTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiA0cmVtO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcXHJcXG4gICAgZm9udC1zaXplOiA3dnc7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxuICAgIHdvcmQtc3BhY2luZzogbm9ybWFsO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gIH1cXHJcXG4gIC53b3JrLWJ1dHRvbntcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgfVxcclxcbiAgLnBhcmFncmFwaHtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogNSU7XFxyXFxuICAgIGZvbnQtc2l6ZTogY2FsYyg1cHggKyAyLjh2dyk7XFxyXFxuICB9XFxyXFxuICAubGFyZ2UtbG9nb3tcXHJcXG4gICAgICBtYXJnaW4tbGVmdDogMjAlO1xcclxcbiAgICAgIHBhZGRpbmctdG9wOiAwJTtcXHJcXG4gICAgICBtYXJnaW4tdG9wOiAwO1xcclxcbiAgICAgIGRpc3BsYXk6IGlubGluZTtcXHJcXG4gICAgICBncmlkLWdhcDowO1xcclxcbiAgICAgIGdhcDowO1xcclxcbiAgICAgIGhlaWdodDogMTByZW07XFxyXFxuICAgICAgd2lkdGg6IDE1cmVtO1xcclxcbiAgfVxcclxcblxcclxcbn1cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogNDgwcHgpe1xcclxcblxcclxcblxcclxcbiAgXFxyXFxufVxcclxcblxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zdHlsZS9sYW5kaW5nLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxTQUFTO0FBQ1Q7SUFDSSw4RUFBdUU7SUFDdkUsV0FBVztJQUNYLGFBQWE7SUFDYixZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOzs7QUFHQTtJQUNJLG9CQUFZO0lBQVosWUFBWTtJQUNaLDZCQUFxQjtZQUFyQixxQkFBcUI7SUFDckIsaUJBQWlCOztBQUVyQjtBQUNBO0VBQ0Usb0JBQW9CO0VBQ3BCLHdCQUF3QjtFQUN4QixVQUFVO0VBQ1Ysa0NBQTBCO1VBQTFCLDBCQUEwQjtFQUMxQixvQkFBb0I7RUFDcEIsNEJBQTRCO0FBQzlCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQiw0QkFBb0I7VUFBcEIsb0JBQW9CO0VBQ3BCLGtDQUEwQjtVQUExQiwwQkFBMEI7RUFDMUIsa0JBQWtCO0VBQ2xCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQiw0QkFBNEI7RUFDNUIsbUNBQTJCO1VBQTNCLDJCQUEyQjs7QUFFN0I7QUFDQTtFQUNFLGdDQUF1QjtVQUF2QjtBQUNGOztBQUVBO0VBQ0Usb0JBQW9COztBQUV0QjtBQUNBO0VBQ0UsMkJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLDZCQUE2QjtFQUM3Qix1QkFBdUI7RUFDdkIsb0JBQW9CO0VBQ3BCLGtDQUFrQztFQUNsQyxlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLDRCQUE0QjtFQUM1QixrQ0FBMEI7VUFBMUIsMEJBQTBCO0FBQzVCO0FBQ0E7O0FBRUE7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsd0JBQXdCO0FBQzFCO0FBQ0E7O0VBRUUsa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOzs7QUFHQSxnQkFBZ0I7QUFDaEIsZ0JBQWdCO0FBQ2hCLGdCQUFnQjs7O0FBR2hCOztBQUVBOztBQUVBO0lBQ0k7TUFDRSxrQkFBa0I7TUFDbEIsZ0JBQWdCO0lBQ2xCO0FBQ0o7Ozs7OztBQU1BO0VBQ0U7O0lBRUUsaUZBQW1GO0VBQ3JGO0VBQ0E7SUFDRSxnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxVQUFVO0VBQ1o7RUFDQTtJQUNFLGlCQUFpQjtJQUNqQixnQkFBZ0I7O0VBRWxCO0VBQ0E7SUFDRSxvQkFBb0I7RUFDdEI7RUFDQTtJQUNFLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsYUFBYTtFQUNmOztBQUVGOztBQUVBO0VBQ0U7O0VBRUE7O0FBRUY7OztBQUdBO0FBQ0E7SUFDSSxnQkFBZ0I7RUFDbEI7QUFDRjtJQUNJLGFBQWE7SUFDYixvQ0FBb0M7RUFDdEM7O0FBRUY7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixXQUFXO0VBQ2I7RUFDQTtJQUNFLGVBQWU7RUFDakI7RUFDQTtJQUNFLGlCQUFpQjtJQUNqQiw0QkFBNEI7RUFDOUI7RUFDQTtNQUNJLGdCQUFnQjtNQUNoQixlQUFlO01BQ2YsYUFBYTtNQUNiLGVBQWU7TUFDZixVQUFLO01BQUwsS0FBSztNQUNMLGFBQWE7TUFDYixZQUFZO0VBQ2hCOztBQUVGO0FBQ0E7Ozs7QUFJQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBIb21lICovXFxyXFxuLmhvbWUtaW1hZ2V7XFxyXFxuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vcHVibGljL2JhY2tncm91bmQ1LnBuZycpIG5vLXJlcGVhdCBjZW50ZXIgdG9wL2NvdmVyO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICBvdmVyZmxvdy14OiB1bnNldDtcXHJcXG59XFxyXFxuICBcXHJcXG5cXHJcXG4uaG9tZS1pbm5lcntcXHJcXG4gICAgZGlzcGxheTpmbGV4O1xcclxcbiAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAzcmVtO1xcclxcbiAgICBcXHJcXG59XFxyXFxuLmhvbWUtdGV4dHtcXHJcXG4gIHBhZGRpbmc6IDIwcmVtIDEwcmVtO1xcclxcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDMwMG1zO1xcclxcbiAgYW5pbWF0aW9uOiB0ZXh0IDFzIDE7XFxyXFxuICAtd2Via2l0LWFuaW1hdGlvbjogcGFyYSAycyAxO1xcclxcbn1cXHJcXG4ucGFyYWdyYXBoe1xcclxcbiAgZm9udC13ZWlnaHQ6IDEwMDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAycmVtO1xcclxcbiAgd29yZC1zcGFjaW5nOiA1cHg7XFxyXFxuICBhbmltYXRpb246IHBhcmEgMnMgMTtcXHJcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDMwMG1zO1xcclxcbiAgcGFkZGluZy1yaWdodDogMTUlO1xcclxcbiAgLXdlYmtpdC1hbmltYXRpb246IHBhcmEgM3MgMTtcXHJcXG59XFxyXFxuXFxyXFxuLmxhcmdlLWxvZ297XFxyXFxuICB3aWR0aDogNzAlO1xcclxcbiAgbWFyZ2luLXRvcDogNXJlbTtcXHJcXG4gIG1hcmdpbi1yaWdodDogNXJlbTtcXHJcXG4gIGFuaW1hdGlvbjogbG9nbyAycyAxO1xcclxcbiAgLXdlYmtpdC1hbmltYXRpb246IGxvZ28gM3MgMTtcXHJcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDEwMDBtcztcXHJcXG4gIFxcclxcbn1cXHJcXG4ubGFyZ2UtbG9nbzpob3ZlcntcXHJcXG4gIHRyYW5zZm9ybTogcm90YXRlKDMxZGVnKVxcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9uLWRpdntcXHJcXG4gIHBhZGRpbmc6IDEuNXJlbSAwcmVtO1xcclxcblxcclxcbn1cXHJcXG4ud29yay1idXR0b24sIC5jb250YWN0LWJ1dHRvbntcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIGNvbG9yOiB2YXIoLS1kaWYtY29sb3IpO1xcclxcbiAgcGFkZGluZzogMC40cmVtIDJyZW07XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1kaWYtY29sb3IpO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYW5pbWF0aW9uOiBwYXJhIDJzIDE7XFxyXFxuICAtd2Via2l0LWFuaW1hdGlvbjogcGFyYSAzcyAxO1xcclxcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XFxyXFxufVxcclxcbi53b3JrLWJ1dHRvbntcXHJcXG4gIFxcclxcbn1cXHJcXG5cXHJcXG4ud29yay1idXR0b24sIC5jb250YWN0LWJ1dHRvbjpob3ZlcntcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRpZi1jb2xvcik7XFxyXFxuICBjb2xvcjogdmFyKC0tZGlmLWNvbG9yMik7XFxyXFxufVxcclxcbi5idXJnZXJcXHJcXG4uYmFyczpob3ZlcntcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRpZi1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5idXJnZXIgZGl2Om50aC1jaGlsZCgyKTpob3ZlcntcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMzM4NWY7XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIE1lZGlhIHF1ZXJ5ICovXFxyXFxuLyogTWVkaWEgcXVlcnkgKi9cXHJcXG4vKiBNZWRpYSBxdWVyeSAqL1xcclxcblxcclxcblxcclxcbkBtZWRpYSAobWluLXdpZHRoOiAxNjAwcHgpe1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSBhbmQgKG1heC13aWR0aDoxNTAwcHgpe1xcclxcbiAgICAuaG9tZS10ZXh0e1xcclxcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwJTtcXHJcXG4gICAgICBvdmVyZmxvdy14OiBhdXRvO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpe1xcclxcbiAgLndvcmstaW5uZXIsXFxyXFxuICAuaG9tZS1pbWFnZXtcXHJcXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi9wdWJsaWMvYmFja2dyb3VuZFJlc3BvbnNpdmUucG5nJykgbm8tcmVwZWF0IGNlbnRlciBib3R0b20vY292ZXI7XFxyXFxuICB9XFxyXFxuICAubGFyZ2UsIC5sYXJnZS1uYW1le1xcclxcbiAgICBmb250LXNpemU6IDcuNXZ3O1xcclxcbiAgfVxcclxcbiAgLmhvbWUtaW1hZ2V7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICB9XFxyXFxuICAubGFyZ2UtbG9nb3tcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gIH1cXHJcXG4gIC5ob21lLXRleHR7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAyMCU7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogNXJlbTtcXHJcXG4gICAgZm9udC1zaXplOiA2dnc7XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxuICB9XFxyXFxuICAucGFyYWdyYXBoe1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiA1JTtcXHJcXG4gICAgZm9udC1zaXplOiAyLjh2dztcXHJcXG5cXHJcXG4gIH1cXHJcXG4gIC5idXR0b24tZGl2e1xcclxcbiAgICBwYWRkaW5nOiAxLjlyZW0gMHJlbTtcXHJcXG4gIH1cXHJcXG4gIC53b3JrLWJ1dHRvbntcXHJcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxyXFxuICB9XFxyXFxuICAubGFyZ2UtbG9nb3tcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDk2MHB4KXtcXHJcXG4gIC5idXJnZXJ7XFxyXFxuICAgIFxcclxcbiAgfVxcclxcblxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpe1xcclxcbi5ob21lLWltYWdle1xcclxcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xcclxcbiAgfVxcclxcbi5ob21lLWlubmVye1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLDFmcik7XFxyXFxuICB9XFxyXFxuXFxyXFxuLmhvbWUtdGV4dHtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xcclxcbiAgICBwYWRkaW5nLXRvcDogMjUlO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDRyZW07XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAwO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcclxcbiAgICBmb250LXNpemU6IDd2dztcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG4gICAgd29yZC1zcGFjaW5nOiBub3JtYWw7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgfVxcclxcbiAgLndvcmstYnV0dG9ue1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICB9XFxyXFxuICAucGFyYWdyYXBoe1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiA1JTtcXHJcXG4gICAgZm9udC1zaXplOiBjYWxjKDVweCArIDIuOHZ3KTtcXHJcXG4gIH1cXHJcXG4gIC5sYXJnZS1sb2dve1xcclxcbiAgICAgIG1hcmdpbi1sZWZ0OiAyMCU7XFxyXFxuICAgICAgcGFkZGluZy10b3A6IDAlO1xcclxcbiAgICAgIG1hcmdpbi10b3A6IDA7XFxyXFxuICAgICAgZGlzcGxheTogaW5saW5lO1xcclxcbiAgICAgIGdhcDowO1xcclxcbiAgICAgIGhlaWdodDogMTByZW07XFxyXFxuICAgICAgd2lkdGg6IDE1cmVtO1xcclxcbiAgfVxcclxcblxcclxcbn1cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogNDgwcHgpe1xcclxcblxcclxcblxcclxcbiAgXFxyXFxufVxcclxcblxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwic291cmNlUm9vdCI6IiJ9