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
___CSS_LOADER_EXPORT___.push([module.i, "/* Home */\r\n.home-image{\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat center top/cover;\r\n    width: 100%;\r\n    height: 100vh;\r\n    margin: auto;\r\n    overflow-x: unset;\r\n    overflow: hidden;\r\n}\r\n  \r\n.home-inner{\r\n    display:grid;\r\n    grid-template-columns: 2fr 1fr;\r\n    line-height: 3rem;\r\n}\r\n\r\n.home-text{\r\n  padding: 15rem 10rem;\r\n  color: var(--text-color);\r\n  width: 80%;\r\n  -webkit-transition-duration: 300ms;\r\n          transition-duration: 300ms;\r\n  animation: text 1s 1;\r\n  -webkit-animation: para 2s 1;\r\n}\r\n.paragraph{\r\n  font-weight: 300;\r\n  line-height: 1.6;\r\n  word-spacing: 5px;\r\n  -webkit-animation: para 2s 1;\r\n          animation: para 2s 1;\r\n  -webkit-transition-duration: 100ms;\r\n          transition-duration: 100ms;\r\n  padding-right: 15%;\r\n  -webkit-animation: para 3s 1;\r\n}\r\n\r\n.large-logo{\r\n  position: relative;\r\n  z-index: -1;\r\n  top: 5%;\r\n  right: 15%;\r\n  width: 80%;\r\n  -webkit-justify-content: center;\r\n          justify-content: center;\r\n  -webkit-align-items: center;\r\n          align-items: center;\r\n  overflow: hidden;\r\n  cursor: pointer;\r\n}\r\n\r\n.button-div{\r\n  padding: 1.5rem 0rem;\r\n\r\n}\r\n.work-button, .contact-button{\r\n  -webkit-align-items: center;\r\n          align-items: center;\r\n  font-size: 1.5rem;\r\n  font-weight: 500;\r\n  background-color: transparent;\r\n  color: var(--dif-color);\r\n  padding: 0.4rem 2rem;\r\n  border: 2px solid var(--dif-color);\r\n  cursor: pointer;\r\n  animation: para 2s 1;\r\n  -webkit-animation: para 3s 1;\r\n  -webkit-transition-duration: 500ms;\r\n          transition-duration: 500ms;\r\n}\r\n\r\n.work-button:hover, \r\n.contact-button:hover{\r\n  background-color: var(--dif-color);\r\n  color: var(--dif-color2);\r\n}\r\n.burger\r\n.bars:hover{\r\n  background-color: var(--dif-color);\r\n}\r\n\r\n.burger div:nth-child(2):hover{\r\n  background-color: #13385f;\r\n}\r\n\r\n\r\n/* Media query */\r\n\r\n\r\n@media (min-width: 1024px) and (max-width:1300px){\r\n    .home-text{\r\n      overflow-x: auto;\r\n    }\r\n    .large-logo{\r\n      display: none;\r\n    }\r\n    \r\n}\r\n\r\n@media (max-width: 1300px){\r\n  .home-inner{\r\n    display: -webkit-flex;\r\n    display: flex;\r\n    \r\n  }\r\n}\r\n\r\n\r\n@media (max-width: 1024px){\r\n  .home-image{\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") no-repeat center bottom/cover;\r\n  }\r\n  .large, .large-name{\r\n    font-size: 7.5vw;\r\n  }\r\n\r\n  .home-text{\r\n    padding-top: 20%;\r\n    padding-left: 5rem;\r\n    font-size: 6vw;\r\n    width: 80%;\r\n  }\r\n  .paragraph{\r\n    padding-right: 5%;\r\n    font-size: 2.8vw;\r\n\r\n  }\r\n  .button-div{\r\n    padding: 1.9rem 0rem;\r\n  }\r\n  .work-button{\r\n    font-size: 1.4rem;\r\n  }\r\n\r\n\r\n}\r\n\r\n\r\n\r\n@media (max-width: 1020px){\r\n  .large-logo{\r\n    display: none;\r\n  }\r\n}\r\n  \r\n@media (max-width: 768px){\r\n\r\n  .large,.large-name{\r\n    font-size: calc(20px + 4.8vw);\r\n  }\r\n  .name-title{\r\n    font-size: calc(20px + 4.8vw);\r\n  }\r\n  .work-button{\r\n    font-size: 1.65rem;\r\n  }\r\n  \r\n  .paragraph{\r\n    padding-right: 5%;\r\n    font-size: calc(7px + 2.5vw);\r\n  }\r\n\r\n\r\n.home-image{\r\n    overflow-x: auto;\r\n  }\r\n.home-inner{\r\n    display: grid;\r\n    grid-template-columns: repeat(1,1fr);\r\n  }\r\n\r\n.home-text{\r\n    margin-right: 0;\r\n    padding-right: 2rem;\r\n    padding-top: 25%;\r\n    padding-left: 4rem;\r\n    padding-bottom: 0;\r\n    margin-bottom: 0;\r\n    font-size: 7vw;\r\n    font-weight: 300;\r\n    word-spacing: normal;\r\n    width: 100%;\r\n  }\r\n  .large-logo{\r\n      display: none;\r\n      margin-left: 7.5rem;\r\n      padding-top: 0%;\r\n      margin-top: 0;\r\n      position: relative;\r\n      z-index: -1;\r\n      width: 70%;\r\n  }\r\n\r\n}\r\n\r\n", "",{"version":3,"sources":["webpack://style/landing.css"],"names":[],"mappings":"AAAA,SAAS;AACT;IACI,8EAAuE;IACvE,WAAW;IACX,aAAa;IACb,YAAY;IACZ,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,YAAY;IACZ,8BAA8B;IAC9B,iBAAiB;AACrB;;AAEA;EACE,oBAAoB;EACpB,wBAAwB;EACxB,UAAU;EACV,kCAA0B;UAA1B,0BAA0B;EAC1B,oBAAoB;EACpB,4BAA4B;AAC9B;AACA;EACE,gBAAgB;EAChB,gBAAgB;EAChB,iBAAiB;EACjB,4BAAoB;UAApB,oBAAoB;EACpB,kCAA0B;UAA1B,0BAA0B;EAC1B,kBAAkB;EAClB,4BAA4B;AAC9B;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,OAAO;EACP,UAAU;EACV,UAAU;EACV,+BAAuB;UAAvB,uBAAuB;EACvB,2BAAmB;UAAnB,mBAAmB;EACnB,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,oBAAoB;;AAEtB;AACA;EACE,2BAAmB;UAAnB,mBAAmB;EACnB,iBAAiB;EACjB,gBAAgB;EAChB,6BAA6B;EAC7B,uBAAuB;EACvB,oBAAoB;EACpB,kCAAkC;EAClC,eAAe;EACf,oBAAoB;EACpB,4BAA4B;EAC5B,kCAA0B;UAA1B,0BAA0B;AAC5B;;AAEA;;EAEE,kCAAkC;EAClC,wBAAwB;AAC1B;AACA;;EAEE,kCAAkC;AACpC;;AAEA;EACE,yBAAyB;AAC3B;;;AAGA,gBAAgB;;;AAGhB;IACI;MACE,gBAAgB;IAClB;IACA;MACE,aAAa;IACf;;AAEJ;;AAEA;EACE;IACE,qBAAa;IAAb,aAAa;;EAEf;AACF;;;AAGA;EACE;IACE,iFAAmF;EACrF;EACA;IACE,gBAAgB;EAClB;;EAEA;IACE,gBAAgB;IAChB,kBAAkB;IAClB,cAAc;IACd,UAAU;EACZ;EACA;IACE,iBAAiB;IACjB,gBAAgB;;EAElB;EACA;IACE,oBAAoB;EACtB;EACA;IACE,iBAAiB;EACnB;;;AAGF;;;;AAIA;EACE;IACE,aAAa;EACf;AACF;;AAEA;;EAEE;IACE,6BAA6B;EAC/B;EACA;IACE,6BAA6B;EAC/B;EACA;IACE,kBAAkB;EACpB;;EAEA;IACE,iBAAiB;IACjB,4BAA4B;EAC9B;;;AAGF;IACI,gBAAgB;EAClB;AACF;IACI,aAAa;IACb,oCAAoC;EACtC;;AAEF;IACI,eAAe;IACf,mBAAmB;IACnB,gBAAgB;IAChB,kBAAkB;IAClB,iBAAiB;IACjB,gBAAgB;IAChB,cAAc;IACd,gBAAgB;IAChB,oBAAoB;IACpB,WAAW;EACb;EACA;MACI,aAAa;MACb,mBAAmB;MACnB,eAAe;MACf,aAAa;MACb,kBAAkB;MAClB,WAAW;MACX,UAAU;EACd;;AAEF","sourcesContent":["/* Home */\r\n.home-image{\r\n    background: url('../public/background5.png') no-repeat center top/cover;\r\n    width: 100%;\r\n    height: 100vh;\r\n    margin: auto;\r\n    overflow-x: unset;\r\n    overflow: hidden;\r\n}\r\n  \r\n.home-inner{\r\n    display:grid;\r\n    grid-template-columns: 2fr 1fr;\r\n    line-height: 3rem;\r\n}\r\n\r\n.home-text{\r\n  padding: 15rem 10rem;\r\n  color: var(--text-color);\r\n  width: 80%;\r\n  transition-duration: 300ms;\r\n  animation: text 1s 1;\r\n  -webkit-animation: para 2s 1;\r\n}\r\n.paragraph{\r\n  font-weight: 300;\r\n  line-height: 1.6;\r\n  word-spacing: 5px;\r\n  animation: para 2s 1;\r\n  transition-duration: 100ms;\r\n  padding-right: 15%;\r\n  -webkit-animation: para 3s 1;\r\n}\r\n\r\n.large-logo{\r\n  position: relative;\r\n  z-index: -1;\r\n  top: 5%;\r\n  right: 15%;\r\n  width: 80%;\r\n  justify-content: center;\r\n  align-items: center;\r\n  overflow: hidden;\r\n  cursor: pointer;\r\n}\r\n\r\n.button-div{\r\n  padding: 1.5rem 0rem;\r\n\r\n}\r\n.work-button, .contact-button{\r\n  align-items: center;\r\n  font-size: 1.5rem;\r\n  font-weight: 500;\r\n  background-color: transparent;\r\n  color: var(--dif-color);\r\n  padding: 0.4rem 2rem;\r\n  border: 2px solid var(--dif-color);\r\n  cursor: pointer;\r\n  animation: para 2s 1;\r\n  -webkit-animation: para 3s 1;\r\n  transition-duration: 500ms;\r\n}\r\n\r\n.work-button:hover, \r\n.contact-button:hover{\r\n  background-color: var(--dif-color);\r\n  color: var(--dif-color2);\r\n}\r\n.burger\r\n.bars:hover{\r\n  background-color: var(--dif-color);\r\n}\r\n\r\n.burger div:nth-child(2):hover{\r\n  background-color: #13385f;\r\n}\r\n\r\n\r\n/* Media query */\r\n\r\n\r\n@media (min-width: 1024px) and (max-width:1300px){\r\n    .home-text{\r\n      overflow-x: auto;\r\n    }\r\n    .large-logo{\r\n      display: none;\r\n    }\r\n    \r\n}\r\n\r\n@media (max-width: 1300px){\r\n  .home-inner{\r\n    display: flex;\r\n    \r\n  }\r\n}\r\n\r\n\r\n@media (max-width: 1024px){\r\n  .home-image{\r\n    background: url('../public/backgroundResponsive.png') no-repeat center bottom/cover;\r\n  }\r\n  .large, .large-name{\r\n    font-size: 7.5vw;\r\n  }\r\n\r\n  .home-text{\r\n    padding-top: 20%;\r\n    padding-left: 5rem;\r\n    font-size: 6vw;\r\n    width: 80%;\r\n  }\r\n  .paragraph{\r\n    padding-right: 5%;\r\n    font-size: 2.8vw;\r\n\r\n  }\r\n  .button-div{\r\n    padding: 1.9rem 0rem;\r\n  }\r\n  .work-button{\r\n    font-size: 1.4rem;\r\n  }\r\n\r\n\r\n}\r\n\r\n\r\n\r\n@media (max-width: 1020px){\r\n  .large-logo{\r\n    display: none;\r\n  }\r\n}\r\n  \r\n@media (max-width: 768px){\r\n\r\n  .large,.large-name{\r\n    font-size: calc(20px + 4.8vw);\r\n  }\r\n  .name-title{\r\n    font-size: calc(20px + 4.8vw);\r\n  }\r\n  .work-button{\r\n    font-size: 1.65rem;\r\n  }\r\n  \r\n  .paragraph{\r\n    padding-right: 5%;\r\n    font-size: calc(7px + 2.5vw);\r\n  }\r\n\r\n\r\n.home-image{\r\n    overflow-x: auto;\r\n  }\r\n.home-inner{\r\n    display: grid;\r\n    grid-template-columns: repeat(1,1fr);\r\n  }\r\n\r\n.home-text{\r\n    margin-right: 0;\r\n    padding-right: 2rem;\r\n    padding-top: 25%;\r\n    padding-left: 4rem;\r\n    padding-bottom: 0;\r\n    margin-bottom: 0;\r\n    font-size: 7vw;\r\n    font-weight: 300;\r\n    word-spacing: normal;\r\n    width: 100%;\r\n  }\r\n  .large-logo{\r\n      display: none;\r\n      margin-left: 7.5rem;\r\n      padding-top: 0%;\r\n      margin-top: 0;\r\n      position: relative;\r\n      z-index: -1;\r\n      width: 70%;\r\n  }\r\n\r\n}\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGUvbGFuZGluZy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDeUY7QUFDTztBQUMxQjtBQUNTO0FBQy9FLDhCQUE4QixtRkFBMkI7QUFDekQseUNBQXlDLHNGQUErQixDQUFDLCtEQUE2QjtBQUN0Ryx5Q0FBeUMsc0ZBQStCLENBQUMsd0VBQTZCO0FBQ3RHO0FBQ0EsOEJBQThCLFFBQVMsNkJBQTZCLCtGQUErRixvQkFBb0Isc0JBQXNCLHFCQUFxQiwwQkFBMEIseUJBQXlCLEtBQUssc0JBQXNCLHFCQUFxQix1Q0FBdUMsMEJBQTBCLEtBQUssbUJBQW1CLDJCQUEyQiwrQkFBK0IsaUJBQWlCLHlDQUF5Qyx5Q0FBeUMsMkJBQTJCLG1DQUFtQyxLQUFLLGVBQWUsdUJBQXVCLHVCQUF1Qix3QkFBd0IsbUNBQW1DLG1DQUFtQyx5Q0FBeUMseUNBQXlDLHlCQUF5QixtQ0FBbUMsS0FBSyxvQkFBb0IseUJBQXlCLGtCQUFrQixjQUFjLGlCQUFpQixpQkFBaUIsc0NBQXNDLHNDQUFzQyxrQ0FBa0Msa0NBQWtDLHVCQUF1QixzQkFBc0IsS0FBSyxvQkFBb0IsMkJBQTJCLFNBQVMsa0NBQWtDLGtDQUFrQyxrQ0FBa0Msd0JBQXdCLHVCQUF1QixvQ0FBb0MsOEJBQThCLDJCQUEyQix5Q0FBeUMsc0JBQXNCLDJCQUEyQixtQ0FBbUMseUNBQXlDLHlDQUF5QyxLQUFLLHNEQUFzRCx5Q0FBeUMsK0JBQStCLEtBQUssMkJBQTJCLHlDQUF5QyxLQUFLLHVDQUF1QyxnQ0FBZ0MsS0FBSywyRkFBMkYsbUJBQW1CLDJCQUEyQixTQUFTLG9CQUFvQix3QkFBd0IsU0FBUyxhQUFhLG1DQUFtQyxrQkFBa0IsOEJBQThCLHNCQUFzQixlQUFlLEtBQUssdUNBQXVDLGtCQUFrQixrR0FBa0csT0FBTywwQkFBMEIseUJBQXlCLE9BQU8scUJBQXFCLHlC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QXFCLHlCQUF5QiwyQkFBMkIsdUJBQXVCLG1CQUFtQixPQUFPLGlCQUFpQiwwQkFBMEIseUJBQXlCLFdBQVcsa0JBQWtCLDZCQUE2QixPQUFPLG1CQUFtQiwwQkFBMEIsT0FBTyxhQUFhLDJDQUEyQyxrQkFBa0Isc0JBQXNCLE9BQU8sS0FBSyxvQ0FBb0MsNkJBQTZCLHNDQUFzQyxPQUFPLGtCQUFrQixzQ0FBc0MsT0FBTyxtQkFBbUIsMkJBQTJCLE9BQU8sdUJBQXVCLDBCQUEwQixxQ0FBcUMsT0FBTyx3QkFBd0IseUJBQXlCLE9BQU8sZ0JBQWdCLHNCQUFzQiw2Q0FBNkMsT0FBTyxtQkFBbUIsd0JBQXdCLDRCQUE0Qix5QkFBeUIsMkJBQTJCLDBCQUEwQix5QkFBeUIsdUJBQXVCLHlCQUF5Qiw2QkFBNkIsb0JBQW9CLE9BQU8sa0JBQWtCLHdCQUF3Qiw4QkFBOEIsMEJBQTBCLHdCQUF3Qiw2QkFBNkIsc0JBQXNCLHFCQUFxQixPQUFPLFNBQVMsMkJBQTJCO0FBQ3o5UjtBQUNlLHNGQUF1QixFQUFDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuZGMzNjNmYWYxMTVkMmI0MWZmZGEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gZnJvbSBcIi4uL3B1YmxpYy9iYWNrZ3JvdW5kNS5wbmdcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyBmcm9tIFwiLi4vcHVibGljL2JhY2tncm91bmRSZXNwb25zaXZlLnBuZ1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBIb21lICovXFxyXFxuLmhvbWUtaW1hZ2V7XFxyXFxuICAgIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgbm8tcmVwZWF0IGNlbnRlciB0b3AvY292ZXI7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgIG92ZXJmbG93LXg6IHVuc2V0O1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG4gIFxcclxcbi5ob21lLWlubmVye1xcclxcbiAgICBkaXNwbGF5OmdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDFmcjtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDNyZW07XFxyXFxufVxcclxcblxcclxcbi5ob21lLXRleHR7XFxyXFxuICBwYWRkaW5nOiAxNXJlbSAxMHJlbTtcXHJcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDMwMG1zO1xcclxcbiAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAzMDBtcztcXHJcXG4gIGFuaW1hdGlvbjogdGV4dCAxcyAxO1xcclxcbiAgLXdlYmtpdC1hbmltYXRpb246IHBhcmEgMnMgMTtcXHJcXG59XFxyXFxuLnBhcmFncmFwaHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxuICBsaW5lLWhlaWdodDogMS42O1xcclxcbiAgd29yZC1zcGFjaW5nOiA1cHg7XFxyXFxuICAtd2Via2l0LWFuaW1hdGlvbjogcGFyYSAycyAxO1xcclxcbiAgICAgICAgICBhbmltYXRpb246IHBhcmEgMnMgMTtcXHJcXG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMTAwbXM7XFxyXFxuICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDEwMG1zO1xcclxcbiAgcGFkZGluZy1yaWdodDogMTUlO1xcclxcbiAgLXdlYmtpdC1hbmltYXRpb246IHBhcmEgM3MgMTtcXHJcXG59XFxyXFxuXFxyXFxuLmxhcmdlLWxvZ297XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB6LWluZGV4OiAtMTtcXHJcXG4gIHRvcDogNSU7XFxyXFxuICByaWdodDogMTUlO1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG4gIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbi1kaXZ7XFxyXFxuICBwYWRkaW5nOiAxLjVyZW0gMHJlbTtcXHJcXG5cXHJcXG59XFxyXFxuLndvcmstYnV0dG9uLCAuY29udGFjdC1idXR0b257XFxyXFxuICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIGNvbG9yOiB2YXIoLS1kaWYtY29sb3IpO1xcclxcbiAgcGFkZGluZzogMC40cmVtIDJyZW07XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1kaWYtY29sb3IpO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYW5pbWF0aW9uOiBwYXJhIDJzIDE7XFxyXFxuICAtd2Via2l0LWFuaW1hdGlvbjogcGFyYSAzcyAxO1xcclxcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtcztcXHJcXG4gICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XFxyXFxufVxcclxcblxcclxcbi53b3JrLWJ1dHRvbjpob3ZlciwgXFxyXFxuLmNvbnRhY3QtYnV0dG9uOmhvdmVye1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGlmLWNvbG9yKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1kaWYtY29sb3IyKTtcXHJcXG59XFxyXFxuLmJ1cmdlclxcclxcbi5iYXJzOmhvdmVye1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGlmLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1cmdlciBkaXY6bnRoLWNoaWxkKDIpOmhvdmVye1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEzMzg1ZjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogTWVkaWEgcXVlcnkgKi9cXHJcXG5cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSBhbmQgKG1heC13aWR0aDoxMzAwcHgpe1xcclxcbiAgICAuaG9tZS10ZXh0e1xcclxcbiAgICAgIG92ZXJmbG93LXg6IGF1dG87XFxyXFxuICAgIH1cXHJcXG4gICAgLmxhcmdlLWxvZ297XFxyXFxuICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDEzMDBweCl7XFxyXFxuICAuaG9tZS1pbm5lcntcXHJcXG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCl7XFxyXFxuICAuaG9tZS1pbWFnZXtcXHJcXG4gICAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKSBuby1yZXBlYXQgY2VudGVyIGJvdHRvbS9jb3ZlcjtcXHJcXG4gIH1cXHJcXG4gIC5sYXJnZSwgLmxhcmdlLW5hbWV7XFxyXFxuICAgIGZvbnQtc2l6ZTogNy41dnc7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuaG9tZS10ZXh0e1xcclxcbiAgICBwYWRkaW5nLXRvcDogMjAlO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDVyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogNnZ3O1xcclxcbiAgICB3aWR0aDogODAlO1xcclxcbiAgfVxcclxcbiAgLnBhcmFncmFwaHtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogNSU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMi44dnc7XFxyXFxuXFxyXFxuICB9XFxyXFxuICAuYnV0dG9uLWRpdntcXHJcXG4gICAgcGFkZGluZzogMS45cmVtIDByZW07XFxyXFxuICB9XFxyXFxuICAud29yay1idXR0b257XFxyXFxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcclxcbiAgfVxcclxcblxcclxcblxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogMTAyMHB4KXtcXHJcXG4gIC5sYXJnZS1sb2dve1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcbn1cXHJcXG4gIFxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCl7XFxyXFxuXFxyXFxuICAubGFyZ2UsLmxhcmdlLW5hbWV7XFxyXFxuICAgIGZvbnQtc2l6ZTogY2FsYygyMHB4ICsgNC44dncpO1xcclxcbiAgfVxcclxcbiAgLm5hbWUtdGl0bGV7XFxyXFxuICAgIGZvbnQtc2l6ZTogY2FsYygyMHB4ICsgNC44dncpO1xcclxcbiAgfVxcclxcbiAgLndvcmstYnV0dG9ue1xcclxcbiAgICBmb250LXNpemU6IDEuNjVyZW07XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5wYXJhZ3JhcGh7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDUlO1xcclxcbiAgICBmb250LXNpemU6IGNhbGMoN3B4ICsgMi41dncpO1xcclxcbiAgfVxcclxcblxcclxcblxcclxcbi5ob21lLWltYWdle1xcclxcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xcclxcbiAgfVxcclxcbi5ob21lLWlubmVye1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLDFmcik7XFxyXFxuICB9XFxyXFxuXFxyXFxuLmhvbWUtdGV4dHtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xcclxcbiAgICBwYWRkaW5nLXRvcDogMjUlO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDRyZW07XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAwO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcclxcbiAgICBmb250LXNpemU6IDd2dztcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG4gICAgd29yZC1zcGFjaW5nOiBub3JtYWw7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgfVxcclxcbiAgLmxhcmdlLWxvZ297XFxyXFxuICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgICBtYXJnaW4tbGVmdDogNy41cmVtO1xcclxcbiAgICAgIHBhZGRpbmctdG9wOiAwJTtcXHJcXG4gICAgICBtYXJnaW4tdG9wOiAwO1xcclxcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgICB6LWluZGV4OiAtMTtcXHJcXG4gICAgICB3aWR0aDogNzAlO1xcclxcbiAgfVxcclxcblxcclxcbn1cXHJcXG5cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3R5bGUvbGFuZGluZy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsU0FBUztBQUNUO0lBQ0ksOEVBQXVFO0lBQ3ZFLFdBQVc7SUFDWCxhQUFhO0lBQ2IsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osOEJBQThCO0lBQzlCLGlCQUFpQjtBQUNyQjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQix3QkFBd0I7RUFDeEIsVUFBVTtFQUNWLGtDQUEwQjtVQUExQiwwQkFBMEI7RUFDMUIsb0JBQW9CO0VBQ3BCLDRCQUE0QjtBQUM5QjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsNEJBQW9CO1VBQXBCLG9CQUFvQjtFQUNwQixrQ0FBMEI7VUFBMUIsMEJBQTBCO0VBQzFCLGtCQUFrQjtFQUNsQiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLE9BQU87RUFDUCxVQUFVO0VBQ1YsVUFBVTtFQUNWLCtCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIsMkJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG9CQUFvQjs7QUFFdEI7QUFDQTtFQUNFLDJCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQiw2QkFBNkI7RUFDN0IsdUJBQXVCO0VBQ3ZCLG9CQUFvQjtFQUNwQixrQ0FBa0M7RUFDbEMsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQiw0QkFBNEI7RUFDNUIsa0NBQTBCO1VBQTFCLDBCQUEwQjtBQUM1Qjs7QUFFQTs7RUFFRSxrQ0FBa0M7RUFDbEMsd0JBQXdCO0FBQzFCO0FBQ0E7O0VBRUUsa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOzs7QUFHQSxnQkFBZ0I7OztBQUdoQjtJQUNJO01BQ0UsZ0JBQWdCO0lBQ2xCO0lBQ0E7TUFDRSxhQUFhO0lBQ2Y7O0FBRUo7O0FBRUE7RUFDRTtJQUNFLHFCQUFhO0lBQWIsYUFBYTs7RUFFZjtBQUNGOzs7QUFHQTtFQUNFO0lBQ0UsaUZBQW1GO0VBQ3JGO0VBQ0E7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxVQUFVO0VBQ1o7RUFDQTtJQUNFLGlCQUFpQjtJQUNqQixnQkFBZ0I7O0VBRWxCO0VBQ0E7SUFDRSxvQkFBb0I7RUFDdEI7RUFDQTtJQUNFLGlCQUFpQjtFQUNuQjs7O0FBR0Y7Ozs7QUFJQTtFQUNFO0lBQ0UsYUFBYTtFQUNmO0FBQ0Y7O0FBRUE7O0VBRUU7SUFDRSw2QkFBNkI7RUFDL0I7RUFDQTtJQUNFLDZCQUE2QjtFQUMvQjtFQUNBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLDRCQUE0QjtFQUM5Qjs7O0FBR0Y7SUFDSSxnQkFBZ0I7RUFDbEI7QUFDRjtJQUNJLGFBQWE7SUFDYixvQ0FBb0M7RUFDdEM7O0FBRUY7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixXQUFXO0VBQ2I7RUFDQTtNQUNJLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsZUFBZTtNQUNmLGFBQWE7TUFDYixrQkFBa0I7TUFDbEIsV0FBVztNQUNYLFVBQVU7RUFDZDs7QUFFRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBIb21lICovXFxyXFxuLmhvbWUtaW1hZ2V7XFxyXFxuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vcHVibGljL2JhY2tncm91bmQ1LnBuZycpIG5vLXJlcGVhdCBjZW50ZXIgdG9wL2NvdmVyO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICBvdmVyZmxvdy14OiB1bnNldDtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuICBcXHJcXG4uaG9tZS1pbm5lcntcXHJcXG4gICAgZGlzcGxheTpncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxZnI7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAzcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZS10ZXh0e1xcclxcbiAgcGFkZGluZzogMTVyZW0gMTByZW07XFxyXFxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxyXFxuICB3aWR0aDogODAlO1xcclxcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMzAwbXM7XFxyXFxuICBhbmltYXRpb246IHRleHQgMXMgMTtcXHJcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBwYXJhIDJzIDE7XFxyXFxufVxcclxcbi5wYXJhZ3JhcGh7XFxyXFxuICBmb250LXdlaWdodDogMzAwO1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuNjtcXHJcXG4gIHdvcmQtc3BhY2luZzogNXB4O1xcclxcbiAgYW5pbWF0aW9uOiBwYXJhIDJzIDE7XFxyXFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxMDBtcztcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDE1JTtcXHJcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBwYXJhIDNzIDE7XFxyXFxufVxcclxcblxcclxcbi5sYXJnZS1sb2dve1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgei1pbmRleDogLTE7XFxyXFxuICB0b3A6IDUlO1xcclxcbiAgcmlnaHQ6IDE1JTtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9uLWRpdntcXHJcXG4gIHBhZGRpbmc6IDEuNXJlbSAwcmVtO1xcclxcblxcclxcbn1cXHJcXG4ud29yay1idXR0b24sIC5jb250YWN0LWJ1dHRvbntcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIGNvbG9yOiB2YXIoLS1kaWYtY29sb3IpO1xcclxcbiAgcGFkZGluZzogMC40cmVtIDJyZW07XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1kaWYtY29sb3IpO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYW5pbWF0aW9uOiBwYXJhIDJzIDE7XFxyXFxuICAtd2Via2l0LWFuaW1hdGlvbjogcGFyYSAzcyAxO1xcclxcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XFxyXFxufVxcclxcblxcclxcbi53b3JrLWJ1dHRvbjpob3ZlciwgXFxyXFxuLmNvbnRhY3QtYnV0dG9uOmhvdmVye1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGlmLWNvbG9yKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1kaWYtY29sb3IyKTtcXHJcXG59XFxyXFxuLmJ1cmdlclxcclxcbi5iYXJzOmhvdmVye1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGlmLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1cmdlciBkaXY6bnRoLWNoaWxkKDIpOmhvdmVye1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEzMzg1ZjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogTWVkaWEgcXVlcnkgKi9cXHJcXG5cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSBhbmQgKG1heC13aWR0aDoxMzAwcHgpe1xcclxcbiAgICAuaG9tZS10ZXh0e1xcclxcbiAgICAgIG92ZXJmbG93LXg6IGF1dG87XFxyXFxuICAgIH1cXHJcXG4gICAgLmxhcmdlLWxvZ297XFxyXFxuICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDEzMDBweCl7XFxyXFxuICAuaG9tZS1pbm5lcntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgXFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpe1xcclxcbiAgLmhvbWUtaW1hZ2V7XFxyXFxuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vcHVibGljL2JhY2tncm91bmRSZXNwb25zaXZlLnBuZycpIG5vLXJlcGVhdCBjZW50ZXIgYm90dG9tL2NvdmVyO1xcclxcbiAgfVxcclxcbiAgLmxhcmdlLCAubGFyZ2UtbmFtZXtcXHJcXG4gICAgZm9udC1zaXplOiA3LjV2dztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5ob21lLXRleHR7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAyMCU7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogNXJlbTtcXHJcXG4gICAgZm9udC1zaXplOiA2dnc7XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxuICB9XFxyXFxuICAucGFyYWdyYXBoe1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiA1JTtcXHJcXG4gICAgZm9udC1zaXplOiAyLjh2dztcXHJcXG5cXHJcXG4gIH1cXHJcXG4gIC5idXR0b24tZGl2e1xcclxcbiAgICBwYWRkaW5nOiAxLjlyZW0gMHJlbTtcXHJcXG4gIH1cXHJcXG4gIC53b3JrLWJ1dHRvbntcXHJcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuXFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDIwcHgpe1xcclxcbiAgLmxhcmdlLWxvZ297XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9XFxyXFxufVxcclxcbiAgXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KXtcXHJcXG5cXHJcXG4gIC5sYXJnZSwubGFyZ2UtbmFtZXtcXHJcXG4gICAgZm9udC1zaXplOiBjYWxjKDIwcHggKyA0Ljh2dyk7XFxyXFxuICB9XFxyXFxuICAubmFtZS10aXRsZXtcXHJcXG4gICAgZm9udC1zaXplOiBjYWxjKDIwcHggKyA0Ljh2dyk7XFxyXFxuICB9XFxyXFxuICAud29yay1idXR0b257XFxyXFxuICAgIGZvbnQtc2l6ZTogMS42NXJlbTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLnBhcmFncmFwaHtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogNSU7XFxyXFxuICAgIGZvbnQtc2l6ZTogY2FsYyg3cHggKyAyLjV2dyk7XFxyXFxuICB9XFxyXFxuXFxyXFxuXFxyXFxuLmhvbWUtaW1hZ2V7XFxyXFxuICAgIG92ZXJmbG93LXg6IGF1dG87XFxyXFxuICB9XFxyXFxuLmhvbWUtaW5uZXJ7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsMWZyKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4uaG9tZS10ZXh0e1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDJyZW07XFxyXFxuICAgIHBhZGRpbmctdG9wOiAyNSU7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogNHJlbTtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDA7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogN3Z3O1xcclxcbiAgICBmb250LXdlaWdodDogMzAwO1xcclxcbiAgICB3b3JkLXNwYWNpbmc6IG5vcm1hbDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICB9XFxyXFxuICAubGFyZ2UtbG9nb3tcXHJcXG4gICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICAgIG1hcmdpbi1sZWZ0OiA3LjVyZW07XFxyXFxuICAgICAgcGFkZGluZy10b3A6IDAlO1xcclxcbiAgICAgIG1hcmdpbi10b3A6IDA7XFxyXFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAgIHotaW5kZXg6IC0xO1xcclxcbiAgICAgIHdpZHRoOiA3MCU7XFxyXFxuICB9XFxyXFxuXFxyXFxufVxcclxcblxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwic291cmNlUm9vdCI6IiJ9