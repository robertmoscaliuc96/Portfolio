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
___CSS_LOADER_EXPORT___.push([module.i, "/* Home */\r\n.home-image{\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat center top/cover;\r\n    width: 100%;\r\n    height: 100vh;\r\n    margin: auto;\r\n    overflow-x: unset;\r\n    overflow: hidden;\r\n}\r\n  \r\n.home-inner{\r\n    display:grid;\r\n    grid-template-columns: 2fr 1fr;\r\n    line-height: 3rem;\r\n}\r\n\r\n.home-text{\r\n  padding: 15rem 10rem;\r\n  color: var(--text-color);\r\n  width: 80%;\r\n  -webkit-transition-duration: 300ms;\r\n          transition-duration: 300ms;\r\n  animation: text 1s 1;\r\n  -webkit-animation: para 2s 1;\r\n}\r\n.paragraph{\r\n  font-weight: 300;\r\n  line-height: 1.6;\r\n  word-spacing: 5px;\r\n  -webkit-animation: para 2s 1;\r\n          animation: para 2s 1;\r\n  -webkit-transition-duration: 300ms;\r\n          transition-duration: 300ms;\r\n  padding-right: 15%;\r\n  -webkit-animation: para 3s 1;\r\n}\r\n\r\n.large-logo{\r\n  position: relative;\r\n  z-index: -1;\r\n  top: 5%;\r\n  right: 15%;\r\n  width: 80%;\r\n  -webkit-justify-content: center;\r\n          justify-content: center;\r\n  -webkit-align-items: center;\r\n          align-items: center;\r\n  overflow: hidden;\r\n  cursor: pointer;\r\n}\r\n\r\n.button-div{\r\n  padding: 1.5rem 0rem;\r\n\r\n}\r\n.work-button, .contact-button{\r\n  -webkit-align-items: center;\r\n          align-items: center;\r\n  font-size: 1.5rem;\r\n  font-weight: 500;\r\n  background-color: transparent;\r\n  color: var(--dif-color);\r\n  padding: 0.4rem 2rem;\r\n  border: 2px solid var(--dif-color);\r\n  cursor: pointer;\r\n  animation: para 2s 1;\r\n  -webkit-animation: para 3s 1;\r\n  -webkit-transition-duration: 500ms;\r\n          transition-duration: 500ms;\r\n}\r\n\r\n.work-button:hover, \r\n.contact-button:hover{\r\n  background-color: var(--dif-color);\r\n  color: var(--dif-color2);\r\n}\r\n.burger\r\n.bars:hover{\r\n  background-color: var(--dif-color);\r\n}\r\n\r\n.burger div:nth-child(2):hover{\r\n  background-color: #13385f;\r\n}\r\n\r\n\r\n/* Media query */\r\n\r\n\r\n@media (min-width: 1024px) and (max-width:1300px){\r\n    .home-text{\r\n      overflow-x: auto;\r\n    }\r\n    .large-logo{\r\n      display: none;\r\n    }\r\n    \r\n}\r\n\r\n\r\n@media (max-width: 1024px){\r\n  .work-inner,\r\n  .home-image{\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") no-repeat center bottom/cover;\r\n  }\r\n  .large, .large-name{\r\n    font-size: 7.5vw;\r\n  }\r\n\r\n  .home-text{\r\n    padding-top: 20%;\r\n    padding-left: 5rem;\r\n    font-size: 6vw;\r\n    width: 80%;\r\n  }\r\n  .paragraph{\r\n    padding-right: 5%;\r\n    font-size: 2.8vw;\r\n\r\n  }\r\n  .button-div{\r\n    padding: 1.9rem 0rem;\r\n  }\r\n  .work-button{\r\n    font-size: 1.4rem;\r\n  }\r\n\r\n\r\n}\r\n\r\n\r\n\r\n@media (max-width: 1020px){\r\n  .large-logo{\r\n    display: none;\r\n  }\r\n}\r\n  \r\n@media (max-width: 768px){\r\n\r\n  .large,.large-name{\r\n    font-size: calc(20px + 4.8vw);\r\n  }\r\n  .name-title{\r\n    font-size: 2.4rem;\r\n  }\r\n  .work-button{\r\n    font-size: 1.65rem;\r\n  }\r\n  \r\n  .paragraph{\r\n    padding-right: 5%;\r\n    font-size: calc(7px + 2.8vw);\r\n  }\r\n\r\n\r\n.home-image{\r\n    overflow-x: auto;\r\n  }\r\n.home-inner{\r\n    display: grid;\r\n    grid-template-columns: repeat(1,1fr);\r\n  }\r\n\r\n.home-text{\r\n    margin-right: 0;\r\n    padding-right: 2rem;\r\n    padding-top: 25%;\r\n    padding-left: 4rem;\r\n    padding-bottom: 0;\r\n    margin-bottom: 0;\r\n    font-size: 7vw;\r\n    font-weight: 300;\r\n    word-spacing: normal;\r\n    width: 100%;\r\n  }\r\n  .large-logo{\r\n      display: none;\r\n      margin-left: 7.5rem;\r\n      padding-top: 0%;\r\n      margin-top: 0;\r\n      position: relative;\r\n      z-index: -1;\r\n      width: 70%;\r\n  }\r\n\r\n}\r\n\r\n", "",{"version":3,"sources":["webpack://style/landing.css"],"names":[],"mappings":"AAAA,SAAS;AACT;IACI,8EAAuE;IACvE,WAAW;IACX,aAAa;IACb,YAAY;IACZ,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,YAAY;IACZ,8BAA8B;IAC9B,iBAAiB;AACrB;;AAEA;EACE,oBAAoB;EACpB,wBAAwB;EACxB,UAAU;EACV,kCAA0B;UAA1B,0BAA0B;EAC1B,oBAAoB;EACpB,4BAA4B;AAC9B;AACA;EACE,gBAAgB;EAChB,gBAAgB;EAChB,iBAAiB;EACjB,4BAAoB;UAApB,oBAAoB;EACpB,kCAA0B;UAA1B,0BAA0B;EAC1B,kBAAkB;EAClB,4BAA4B;AAC9B;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,OAAO;EACP,UAAU;EACV,UAAU;EACV,+BAAuB;UAAvB,uBAAuB;EACvB,2BAAmB;UAAnB,mBAAmB;EACnB,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,oBAAoB;;AAEtB;AACA;EACE,2BAAmB;UAAnB,mBAAmB;EACnB,iBAAiB;EACjB,gBAAgB;EAChB,6BAA6B;EAC7B,uBAAuB;EACvB,oBAAoB;EACpB,kCAAkC;EAClC,eAAe;EACf,oBAAoB;EACpB,4BAA4B;EAC5B,kCAA0B;UAA1B,0BAA0B;AAC5B;;AAEA;;EAEE,kCAAkC;EAClC,wBAAwB;AAC1B;AACA;;EAEE,kCAAkC;AACpC;;AAEA;EACE,yBAAyB;AAC3B;;;AAGA,gBAAgB;;;AAGhB;IACI;MACE,gBAAgB;IAClB;IACA;MACE,aAAa;IACf;;AAEJ;;;AAGA;EACE;;IAEE,iFAAmF;EACrF;EACA;IACE,gBAAgB;EAClB;;EAEA;IACE,gBAAgB;IAChB,kBAAkB;IAClB,cAAc;IACd,UAAU;EACZ;EACA;IACE,iBAAiB;IACjB,gBAAgB;;EAElB;EACA;IACE,oBAAoB;EACtB;EACA;IACE,iBAAiB;EACnB;;;AAGF;;;;AAIA;EACE;IACE,aAAa;EACf;AACF;;AAEA;;EAEE;IACE,6BAA6B;EAC/B;EACA;IACE,iBAAiB;EACnB;EACA;IACE,kBAAkB;EACpB;;EAEA;IACE,iBAAiB;IACjB,4BAA4B;EAC9B;;;AAGF;IACI,gBAAgB;EAClB;AACF;IACI,aAAa;IACb,oCAAoC;EACtC;;AAEF;IACI,eAAe;IACf,mBAAmB;IACnB,gBAAgB;IAChB,kBAAkB;IAClB,iBAAiB;IACjB,gBAAgB;IAChB,cAAc;IACd,gBAAgB;IAChB,oBAAoB;IACpB,WAAW;EACb;EACA;MACI,aAAa;MACb,mBAAmB;MACnB,eAAe;MACf,aAAa;MACb,kBAAkB;MAClB,WAAW;MACX,UAAU;EACd;;AAEF","sourcesContent":["/* Home */\r\n.home-image{\r\n    background: url('../public/background5.png') no-repeat center top/cover;\r\n    width: 100%;\r\n    height: 100vh;\r\n    margin: auto;\r\n    overflow-x: unset;\r\n    overflow: hidden;\r\n}\r\n  \r\n.home-inner{\r\n    display:grid;\r\n    grid-template-columns: 2fr 1fr;\r\n    line-height: 3rem;\r\n}\r\n\r\n.home-text{\r\n  padding: 15rem 10rem;\r\n  color: var(--text-color);\r\n  width: 80%;\r\n  transition-duration: 300ms;\r\n  animation: text 1s 1;\r\n  -webkit-animation: para 2s 1;\r\n}\r\n.paragraph{\r\n  font-weight: 300;\r\n  line-height: 1.6;\r\n  word-spacing: 5px;\r\n  animation: para 2s 1;\r\n  transition-duration: 300ms;\r\n  padding-right: 15%;\r\n  -webkit-animation: para 3s 1;\r\n}\r\n\r\n.large-logo{\r\n  position: relative;\r\n  z-index: -1;\r\n  top: 5%;\r\n  right: 15%;\r\n  width: 80%;\r\n  justify-content: center;\r\n  align-items: center;\r\n  overflow: hidden;\r\n  cursor: pointer;\r\n}\r\n\r\n.button-div{\r\n  padding: 1.5rem 0rem;\r\n\r\n}\r\n.work-button, .contact-button{\r\n  align-items: center;\r\n  font-size: 1.5rem;\r\n  font-weight: 500;\r\n  background-color: transparent;\r\n  color: var(--dif-color);\r\n  padding: 0.4rem 2rem;\r\n  border: 2px solid var(--dif-color);\r\n  cursor: pointer;\r\n  animation: para 2s 1;\r\n  -webkit-animation: para 3s 1;\r\n  transition-duration: 500ms;\r\n}\r\n\r\n.work-button:hover, \r\n.contact-button:hover{\r\n  background-color: var(--dif-color);\r\n  color: var(--dif-color2);\r\n}\r\n.burger\r\n.bars:hover{\r\n  background-color: var(--dif-color);\r\n}\r\n\r\n.burger div:nth-child(2):hover{\r\n  background-color: #13385f;\r\n}\r\n\r\n\r\n/* Media query */\r\n\r\n\r\n@media (min-width: 1024px) and (max-width:1300px){\r\n    .home-text{\r\n      overflow-x: auto;\r\n    }\r\n    .large-logo{\r\n      display: none;\r\n    }\r\n    \r\n}\r\n\r\n\r\n@media (max-width: 1024px){\r\n  .work-inner,\r\n  .home-image{\r\n    background: url('../public/backgroundResponsive.png') no-repeat center bottom/cover;\r\n  }\r\n  .large, .large-name{\r\n    font-size: 7.5vw;\r\n  }\r\n\r\n  .home-text{\r\n    padding-top: 20%;\r\n    padding-left: 5rem;\r\n    font-size: 6vw;\r\n    width: 80%;\r\n  }\r\n  .paragraph{\r\n    padding-right: 5%;\r\n    font-size: 2.8vw;\r\n\r\n  }\r\n  .button-div{\r\n    padding: 1.9rem 0rem;\r\n  }\r\n  .work-button{\r\n    font-size: 1.4rem;\r\n  }\r\n\r\n\r\n}\r\n\r\n\r\n\r\n@media (max-width: 1020px){\r\n  .large-logo{\r\n    display: none;\r\n  }\r\n}\r\n  \r\n@media (max-width: 768px){\r\n\r\n  .large,.large-name{\r\n    font-size: calc(20px + 4.8vw);\r\n  }\r\n  .name-title{\r\n    font-size: 2.4rem;\r\n  }\r\n  .work-button{\r\n    font-size: 1.65rem;\r\n  }\r\n  \r\n  .paragraph{\r\n    padding-right: 5%;\r\n    font-size: calc(7px + 2.8vw);\r\n  }\r\n\r\n\r\n.home-image{\r\n    overflow-x: auto;\r\n  }\r\n.home-inner{\r\n    display: grid;\r\n    grid-template-columns: repeat(1,1fr);\r\n  }\r\n\r\n.home-text{\r\n    margin-right: 0;\r\n    padding-right: 2rem;\r\n    padding-top: 25%;\r\n    padding-left: 4rem;\r\n    padding-bottom: 0;\r\n    margin-bottom: 0;\r\n    font-size: 7vw;\r\n    font-weight: 300;\r\n    word-spacing: normal;\r\n    width: 100%;\r\n  }\r\n  .large-logo{\r\n      display: none;\r\n      margin-left: 7.5rem;\r\n      padding-top: 0%;\r\n      margin-top: 0;\r\n      position: relative;\r\n      z-index: -1;\r\n      width: 70%;\r\n  }\r\n\r\n}\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGUvbGFuZGluZy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDeUY7QUFDTztBQUMxQjtBQUNTO0FBQy9FLDhCQUE4QixtRkFBMkI7QUFDekQseUNBQXlDLHNGQUErQixDQUFDLCtEQUE2QjtBQUN0Ryx5Q0FBeUMsc0ZBQStCLENBQUMsd0VBQTZCO0FBQ3RHO0FBQ0EsOEJBQThCLFFBQVMsNkJBQTZCLCtGQUErRixvQkFBb0Isc0JBQXNCLHFCQUFxQiwwQkFBMEIseUJBQXlCLEtBQUssc0JBQXNCLHFCQUFxQix1Q0FBdUMsMEJBQTBCLEtBQUssbUJBQW1CLDJCQUEyQiwrQkFBK0IsaUJBQWlCLHlDQUF5Qyx5Q0FBeUMsMkJBQTJCLG1DQUFtQyxLQUFLLGVBQWUsdUJBQXVCLHVCQUF1Qix3QkFBd0IsbUNBQW1DLG1DQUFtQyx5Q0FBeUMseUNBQXlDLHlCQUF5QixtQ0FBbUMsS0FBSyxvQkFBb0IseUJBQXlCLGtCQUFrQixjQUFjLGlCQUFpQixpQkFBaUIsc0NBQXNDLHNDQUFzQyxrQ0FBa0Msa0NBQWtDLHVCQUF1QixzQkFBc0IsS0FBSyxvQkFBb0IsMkJBQTJCLFNBQVMsa0NBQWtDLGtDQUFrQyxrQ0FBa0Msd0JBQXdCLHVCQUF1QixvQ0FBb0MsOEJBQThCLDJCQUEyQix5Q0FBeUMsc0JBQXNCLDJCQUEyQixtQ0FBbUMseUNBQXlDLHlDQUF5QyxLQUFLLHNEQUFzRCx5Q0FBeUMsK0JBQStCLEtBQUssMkJBQTJCLHlDQUF5QyxLQUFLLHVDQUF1QyxnQ0FBZ0MsS0FBSywyRkFBMkYsbUJBQW1CLDJCQUEyQixTQUFTLG9CQUFvQix3QkFBd0IsU0FBUyxhQUFhLHVDQUF1QyxvQ0FBb0Msa0dBQWtHLE9BQU8sMEJBQTBCLHlCQUF5QixPQUFPLHFCQUFxQix5QkFBeUIsMkJBQTJCLHVCQUF1QixtQkFBbUIsT0FBTyxpQkFBaUIs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TyxhQUFhLDJDQUEyQyxrQkFBa0Isc0JBQXNCLE9BQU8sS0FBSyxvQ0FBb0MsNkJBQTZCLHNDQUFzQyxPQUFPLGtCQUFrQiwwQkFBMEIsT0FBTyxtQkFBbUIsMkJBQTJCLE9BQU8sdUJBQXVCLDBCQUEwQixxQ0FBcUMsT0FBTyx3QkFBd0IseUJBQXlCLE9BQU8sZ0JBQWdCLHNCQUFzQiw2Q0FBNkMsT0FBTyxtQkFBbUIsd0JBQXdCLDRCQUE0Qix5QkFBeUIsMkJBQTJCLDBCQUEwQix5QkFBeUIsdUJBQXVCLHlCQUF5Qiw2QkFBNkIsb0JBQW9CLE9BQU8sa0JBQWtCLHdCQUF3Qiw4QkFBOEIsMEJBQTBCLHdCQUF3Qiw2QkFBNkIsc0JBQXNCLHFCQUFxQixPQUFPLFNBQVMsMkJBQTJCO0FBQy90UjtBQUNlLHNGQUF1QixFQUFDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMTc3ZjQzNzhjOGMzMTAyM2Y5ODguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gZnJvbSBcIi4uL3B1YmxpYy9iYWNrZ3JvdW5kNS5wbmdcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyBmcm9tIFwiLi4vcHVibGljL2JhY2tncm91bmRSZXNwb25zaXZlLnBuZ1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBIb21lICovXFxyXFxuLmhvbWUtaW1hZ2V7XFxyXFxuICAgIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgbm8tcmVwZWF0IGNlbnRlciB0b3AvY292ZXI7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgIG92ZXJmbG93LXg6IHVuc2V0O1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG4gIFxcclxcbi5ob21lLWlubmVye1xcclxcbiAgICBkaXNwbGF5OmdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDFmcjtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDNyZW07XFxyXFxufVxcclxcblxcclxcbi5ob21lLXRleHR7XFxyXFxuICBwYWRkaW5nOiAxNXJlbSAxMHJlbTtcXHJcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDMwMG1zO1xcclxcbiAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAzMDBtcztcXHJcXG4gIGFuaW1hdGlvbjogdGV4dCAxcyAxO1xcclxcbiAgLXdlYmtpdC1hbmltYXRpb246IHBhcmEgMnMgMTtcXHJcXG59XFxyXFxuLnBhcmFncmFwaHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxuICBsaW5lLWhlaWdodDogMS42O1xcclxcbiAgd29yZC1zcGFjaW5nOiA1cHg7XFxyXFxuICAtd2Via2l0LWFuaW1hdGlvbjogcGFyYSAycyAxO1xcclxcbiAgICAgICAgICBhbmltYXRpb246IHBhcmEgMnMgMTtcXHJcXG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMzAwbXM7XFxyXFxuICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDMwMG1zO1xcclxcbiAgcGFkZGluZy1yaWdodDogMTUlO1xcclxcbiAgLXdlYmtpdC1hbmltYXRpb246IHBhcmEgM3MgMTtcXHJcXG59XFxyXFxuXFxyXFxuLmxhcmdlLWxvZ297XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB6LWluZGV4OiAtMTtcXHJcXG4gIHRvcDogNSU7XFxyXFxuICByaWdodDogMTUlO1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG4gIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbi1kaXZ7XFxyXFxuICBwYWRkaW5nOiAxLjVyZW0gMHJlbTtcXHJcXG5cXHJcXG59XFxyXFxuLndvcmstYnV0dG9uLCAuY29udGFjdC1idXR0b257XFxyXFxuICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIGNvbG9yOiB2YXIoLS1kaWYtY29sb3IpO1xcclxcbiAgcGFkZGluZzogMC40cmVtIDJyZW07XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1kaWYtY29sb3IpO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYW5pbWF0aW9uOiBwYXJhIDJzIDE7XFxyXFxuICAtd2Via2l0LWFuaW1hdGlvbjogcGFyYSAzcyAxO1xcclxcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtcztcXHJcXG4gICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XFxyXFxufVxcclxcblxcclxcbi53b3JrLWJ1dHRvbjpob3ZlciwgXFxyXFxuLmNvbnRhY3QtYnV0dG9uOmhvdmVye1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGlmLWNvbG9yKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1kaWYtY29sb3IyKTtcXHJcXG59XFxyXFxuLmJ1cmdlclxcclxcbi5iYXJzOmhvdmVye1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGlmLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1cmdlciBkaXY6bnRoLWNoaWxkKDIpOmhvdmVye1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEzMzg1ZjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogTWVkaWEgcXVlcnkgKi9cXHJcXG5cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSBhbmQgKG1heC13aWR0aDoxMzAwcHgpe1xcclxcbiAgICAuaG9tZS10ZXh0e1xcclxcbiAgICAgIG92ZXJmbG93LXg6IGF1dG87XFxyXFxuICAgIH1cXHJcXG4gICAgLmxhcmdlLWxvZ297XFxyXFxuICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCl7XFxyXFxuICAud29yay1pbm5lcixcXHJcXG4gIC5ob21lLWltYWdle1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIG5vLXJlcGVhdCBjZW50ZXIgYm90dG9tL2NvdmVyO1xcclxcbiAgfVxcclxcbiAgLmxhcmdlLCAubGFyZ2UtbmFtZXtcXHJcXG4gICAgZm9udC1zaXplOiA3LjV2dztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5ob21lLXRleHR7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAyMCU7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogNXJlbTtcXHJcXG4gICAgZm9udC1zaXplOiA2dnc7XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxuICB9XFxyXFxuICAucGFyYWdyYXBoe1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiA1JTtcXHJcXG4gICAgZm9udC1zaXplOiAyLjh2dztcXHJcXG5cXHJcXG4gIH1cXHJcXG4gIC5idXR0b24tZGl2e1xcclxcbiAgICBwYWRkaW5nOiAxLjlyZW0gMHJlbTtcXHJcXG4gIH1cXHJcXG4gIC53b3JrLWJ1dHRvbntcXHJcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuXFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDIwcHgpe1xcclxcbiAgLmxhcmdlLWxvZ297XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9XFxyXFxufVxcclxcbiAgXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KXtcXHJcXG5cXHJcXG4gIC5sYXJnZSwubGFyZ2UtbmFtZXtcXHJcXG4gICAgZm9udC1zaXplOiBjYWxjKDIwcHggKyA0Ljh2dyk7XFxyXFxuICB9XFxyXFxuICAubmFtZS10aXRsZXtcXHJcXG4gICAgZm9udC1zaXplOiAyLjRyZW07XFxyXFxuICB9XFxyXFxuICAud29yay1idXR0b257XFxyXFxuICAgIGZvbnQtc2l6ZTogMS42NXJlbTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLnBhcmFncmFwaHtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogNSU7XFxyXFxuICAgIGZvbnQtc2l6ZTogY2FsYyg3cHggKyAyLjh2dyk7XFxyXFxuICB9XFxyXFxuXFxyXFxuXFxyXFxuLmhvbWUtaW1hZ2V7XFxyXFxuICAgIG92ZXJmbG93LXg6IGF1dG87XFxyXFxuICB9XFxyXFxuLmhvbWUtaW5uZXJ7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsMWZyKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4uaG9tZS10ZXh0e1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDJyZW07XFxyXFxuICAgIHBhZGRpbmctdG9wOiAyNSU7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogNHJlbTtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDA7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogN3Z3O1xcclxcbiAgICBmb250LXdlaWdodDogMzAwO1xcclxcbiAgICB3b3JkLXNwYWNpbmc6IG5vcm1hbDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICB9XFxyXFxuICAubGFyZ2UtbG9nb3tcXHJcXG4gICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICAgIG1hcmdpbi1sZWZ0OiA3LjVyZW07XFxyXFxuICAgICAgcGFkZGluZy10b3A6IDAlO1xcclxcbiAgICAgIG1hcmdpbi10b3A6IDA7XFxyXFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAgIHotaW5kZXg6IC0xO1xcclxcbiAgICAgIHdpZHRoOiA3MCU7XFxyXFxuICB9XFxyXFxuXFxyXFxufVxcclxcblxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zdHlsZS9sYW5kaW5nLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxTQUFTO0FBQ1Q7SUFDSSw4RUFBdUU7SUFDdkUsV0FBVztJQUNYLGFBQWE7SUFDYixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7SUFDWiw4QkFBOEI7SUFDOUIsaUJBQWlCO0FBQ3JCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLHdCQUF3QjtFQUN4QixVQUFVO0VBQ1Ysa0NBQTBCO1VBQTFCLDBCQUEwQjtFQUMxQixvQkFBb0I7RUFDcEIsNEJBQTRCO0FBQzlCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQiw0QkFBb0I7VUFBcEIsb0JBQW9CO0VBQ3BCLGtDQUEwQjtVQUExQiwwQkFBMEI7RUFDMUIsa0JBQWtCO0VBQ2xCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsT0FBTztFQUNQLFVBQVU7RUFDVixVQUFVO0VBQ1YsK0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2QiwyQkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usb0JBQW9COztBQUV0QjtBQUNBO0VBQ0UsMkJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLDZCQUE2QjtFQUM3Qix1QkFBdUI7RUFDdkIsb0JBQW9CO0VBQ3BCLGtDQUFrQztFQUNsQyxlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLDRCQUE0QjtFQUM1QixrQ0FBMEI7VUFBMUIsMEJBQTBCO0FBQzVCOztBQUVBOztFQUVFLGtDQUFrQztFQUNsQyx3QkFBd0I7QUFDMUI7QUFDQTs7RUFFRSxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7OztBQUdBLGdCQUFnQjs7O0FBR2hCO0lBQ0k7TUFDRSxnQkFBZ0I7SUFDbEI7SUFDQTtNQUNFLGFBQWE7SUFDZjs7QUFFSjs7O0FBR0E7RUFDRTs7SUFFRSxpRkFBbUY7RUFDckY7RUFDQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLFVBQVU7RUFDWjtFQUNBO0lBQ0UsaUJBQWlCO0lBQ2pCLGdCQUFnQjs7RUFFbEI7RUFDQTtJQUNFLG9CQUFvQjtFQUN0QjtFQUNBO0lBQ0UsaUJBQWlCO0VBQ25COzs7QUFHRjs7OztBQUlBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7QUFDRjs7QUFFQTs7RUFFRTtJQUNFLDZCQUE2QjtFQUMvQjtFQUNBO0lBQ0UsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsNEJBQTRCO0VBQzlCOzs7QUFHRjtJQUNJLGdCQUFnQjtFQUNsQjtBQUNGO0lBQ0ksYUFBYTtJQUNiLG9DQUFvQztFQUN0Qzs7QUFFRjtJQUNJLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLFdBQVc7RUFDYjtFQUNBO01BQ0ksYUFBYTtNQUNiLG1CQUFtQjtNQUNuQixlQUFlO01BQ2YsYUFBYTtNQUNiLGtCQUFrQjtNQUNsQixXQUFXO01BQ1gsVUFBVTtFQUNkOztBQUVGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIEhvbWUgKi9cXHJcXG4uaG9tZS1pbWFnZXtcXHJcXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi9wdWJsaWMvYmFja2dyb3VuZDUucG5nJykgbm8tcmVwZWF0IGNlbnRlciB0b3AvY292ZXI7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgIG92ZXJmbG93LXg6IHVuc2V0O1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG4gIFxcclxcbi5ob21lLWlubmVye1xcclxcbiAgICBkaXNwbGF5OmdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDFmcjtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDNyZW07XFxyXFxufVxcclxcblxcclxcbi5ob21lLXRleHR7XFxyXFxuICBwYWRkaW5nOiAxNXJlbSAxMHJlbTtcXHJcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAzMDBtcztcXHJcXG4gIGFuaW1hdGlvbjogdGV4dCAxcyAxO1xcclxcbiAgLXdlYmtpdC1hbmltYXRpb246IHBhcmEgMnMgMTtcXHJcXG59XFxyXFxuLnBhcmFncmFwaHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxuICBsaW5lLWhlaWdodDogMS42O1xcclxcbiAgd29yZC1zcGFjaW5nOiA1cHg7XFxyXFxuICBhbmltYXRpb246IHBhcmEgMnMgMTtcXHJcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDMwMG1zO1xcclxcbiAgcGFkZGluZy1yaWdodDogMTUlO1xcclxcbiAgLXdlYmtpdC1hbmltYXRpb246IHBhcmEgM3MgMTtcXHJcXG59XFxyXFxuXFxyXFxuLmxhcmdlLWxvZ297XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB6LWluZGV4OiAtMTtcXHJcXG4gIHRvcDogNSU7XFxyXFxuICByaWdodDogMTUlO1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5idXR0b24tZGl2e1xcclxcbiAgcGFkZGluZzogMS41cmVtIDByZW07XFxyXFxuXFxyXFxufVxcclxcbi53b3JrLWJ1dHRvbiwgLmNvbnRhY3QtYnV0dG9ue1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgY29sb3I6IHZhcigtLWRpZi1jb2xvcik7XFxyXFxuICBwYWRkaW5nOiAwLjRyZW0gMnJlbTtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWRpZi1jb2xvcik7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBhbmltYXRpb246IHBhcmEgMnMgMTtcXHJcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBwYXJhIDNzIDE7XFxyXFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtcztcXHJcXG59XFxyXFxuXFxyXFxuLndvcmstYnV0dG9uOmhvdmVyLCBcXHJcXG4uY29udGFjdC1idXR0b246aG92ZXJ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kaWYtY29sb3IpO1xcclxcbiAgY29sb3I6IHZhcigtLWRpZi1jb2xvcjIpO1xcclxcbn1cXHJcXG4uYnVyZ2VyXFxyXFxuLmJhcnM6aG92ZXJ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kaWYtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uYnVyZ2VyIGRpdjpudGgtY2hpbGQoMik6aG92ZXJ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMzODVmO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiBNZWRpYSBxdWVyeSAqL1xcclxcblxcclxcblxcclxcbkBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIGFuZCAobWF4LXdpZHRoOjEzMDBweCl7XFxyXFxuICAgIC5ob21lLXRleHR7XFxyXFxuICAgICAgb3ZlcmZsb3cteDogYXV0bztcXHJcXG4gICAgfVxcclxcbiAgICAubGFyZ2UtbG9nb3tcXHJcXG4gICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICB9XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KXtcXHJcXG4gIC53b3JrLWlubmVyLFxcclxcbiAgLmhvbWUtaW1hZ2V7XFxyXFxuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vcHVibGljL2JhY2tncm91bmRSZXNwb25zaXZlLnBuZycpIG5vLXJlcGVhdCBjZW50ZXIgYm90dG9tL2NvdmVyO1xcclxcbiAgfVxcclxcbiAgLmxhcmdlLCAubGFyZ2UtbmFtZXtcXHJcXG4gICAgZm9udC1zaXplOiA3LjV2dztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5ob21lLXRleHR7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAyMCU7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogNXJlbTtcXHJcXG4gICAgZm9udC1zaXplOiA2dnc7XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxuICB9XFxyXFxuICAucGFyYWdyYXBoe1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiA1JTtcXHJcXG4gICAgZm9udC1zaXplOiAyLjh2dztcXHJcXG5cXHJcXG4gIH1cXHJcXG4gIC5idXR0b24tZGl2e1xcclxcbiAgICBwYWRkaW5nOiAxLjlyZW0gMHJlbTtcXHJcXG4gIH1cXHJcXG4gIC53b3JrLWJ1dHRvbntcXHJcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuXFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDIwcHgpe1xcclxcbiAgLmxhcmdlLWxvZ297XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9XFxyXFxufVxcclxcbiAgXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KXtcXHJcXG5cXHJcXG4gIC5sYXJnZSwubGFyZ2UtbmFtZXtcXHJcXG4gICAgZm9udC1zaXplOiBjYWxjKDIwcHggKyA0Ljh2dyk7XFxyXFxuICB9XFxyXFxuICAubmFtZS10aXRsZXtcXHJcXG4gICAgZm9udC1zaXplOiAyLjRyZW07XFxyXFxuICB9XFxyXFxuICAud29yay1idXR0b257XFxyXFxuICAgIGZvbnQtc2l6ZTogMS42NXJlbTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLnBhcmFncmFwaHtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogNSU7XFxyXFxuICAgIGZvbnQtc2l6ZTogY2FsYyg3cHggKyAyLjh2dyk7XFxyXFxuICB9XFxyXFxuXFxyXFxuXFxyXFxuLmhvbWUtaW1hZ2V7XFxyXFxuICAgIG92ZXJmbG93LXg6IGF1dG87XFxyXFxuICB9XFxyXFxuLmhvbWUtaW5uZXJ7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsMWZyKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4uaG9tZS10ZXh0e1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDJyZW07XFxyXFxuICAgIHBhZGRpbmctdG9wOiAyNSU7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogNHJlbTtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDA7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogN3Z3O1xcclxcbiAgICBmb250LXdlaWdodDogMzAwO1xcclxcbiAgICB3b3JkLXNwYWNpbmc6IG5vcm1hbDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICB9XFxyXFxuICAubGFyZ2UtbG9nb3tcXHJcXG4gICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICAgIG1hcmdpbi1sZWZ0OiA3LjVyZW07XFxyXFxuICAgICAgcGFkZGluZy10b3A6IDAlO1xcclxcbiAgICAgIG1hcmdpbi10b3A6IDA7XFxyXFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAgIHotaW5kZXg6IC0xO1xcclxcbiAgICAgIHdpZHRoOiA3MCU7XFxyXFxuICB9XFxyXFxuXFxyXFxufVxcclxcblxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwic291cmNlUm9vdCI6IiJ9