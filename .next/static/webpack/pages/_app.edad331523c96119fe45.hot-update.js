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
___CSS_LOADER_EXPORT___.push([module.i, "/* Home */\r\n.home-image{\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat center top/cover;\r\n    width: 100%;\r\n    height: 100vh;\r\n    margin: auto;\r\n    overflow-x: unset;\r\n    overflow: hidden;\r\n}\r\n  \r\n.home-inner{\r\n    display:grid;\r\n    grid-template-columns: 2fr 1fr;\r\n    line-height: 3rem;\r\n}\r\n\r\n.home-text{\r\n  padding: 15rem 10rem;\r\n  color: var(--text-color);\r\n  width: 80%;\r\n}\r\n.large{\r\n  -webkit-animation: name duration timing-function delay iteration-count direction fill-mode;\r\n          animation: name duration timing-function delay iteration-count direction fill-mode;\r\n}\r\n.large-name{\r\n\r\n}\r\n.name-title{\r\n\r\n}\r\n\r\n.paragraph{\r\n  font-weight: 300;\r\n  line-height: 1.6;\r\n  word-spacing: 5px;\r\n  padding-right: 15%;\r\n\r\n}\r\n\r\n.large-logo{\r\n  position: relative;\r\n  z-index: -1;\r\n  top: 5%;\r\n  right: 15%;\r\n  width: 80%;\r\n  -webkit-justify-content: center;\r\n          justify-content: center;\r\n  -webkit-align-items: center;\r\n          align-items: center;\r\n  overflow: hidden;\r\n  cursor: pointer;\r\n}\r\n\r\n.button-div{\r\n  padding: 1.5rem 0rem;\r\n\r\n}\r\n.work-button, .contact-button{\r\n  -webkit-align-items: center;\r\n          align-items: center;\r\n  font-size: 1.5rem;\r\n  font-weight: 500;\r\n  background-color: transparent;\r\n  color: var(--dif-color);\r\n  padding: 0.4rem 2rem;\r\n  border: 2px solid var(--dif-color);\r\n  cursor: pointer;\r\n  animation: para 2s 1;\r\n  -webkit-animation: para 3s 1;\r\n  -webkit-transition-duration: 500ms;\r\n          transition-duration: 500ms;\r\n}\r\n\r\n.work-button:hover, \r\n.contact-button:hover{\r\n  background-color: var(--dif-color);\r\n  color: var(--dif-color2);\r\n}\r\n.burger\r\n.bars:hover{\r\n  background-color: var(--dif-color);\r\n}\r\n\r\n.burger div:nth-child(2):hover{\r\n  background-color: #13385f;\r\n}\r\n\r\n\r\n/* Media query */\r\n\r\n\r\n@media (min-width: 1024px) and (max-width:1300px){\r\n    .home-text{\r\n      overflow-x: auto;\r\n    }\r\n    .large-logo{\r\n      display: none;\r\n    }\r\n    \r\n}\r\n\r\n@media (max-width: 1300px){\r\n  .home-inner{\r\n    display: -webkit-flex;\r\n    display: flex;\r\n    \r\n  }\r\n}\r\n\r\n\r\n@media (max-width: 1024px){\r\n  .home-image{\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") no-repeat center bottom/cover;\r\n  }\r\n  .large, .large-name{\r\n    font-size: 7.5vw;\r\n  }\r\n\r\n  .home-text{\r\n    padding-top: 20%;\r\n    padding-left: 5rem;\r\n    font-size: 6vw;\r\n    width: 80%;\r\n  }\r\n  .paragraph{\r\n    padding-right: 5%;\r\n    font-size: 2.8vw;\r\n\r\n  }\r\n  .button-div{\r\n    padding: 1.9rem 0rem;\r\n  }\r\n  .work-button{\r\n    font-size: 1.4rem;\r\n  }\r\n\r\n\r\n}\r\n\r\n\r\n\r\n@media (max-width: 1020px){\r\n  .large-logo{\r\n    display: none;\r\n  }\r\n}\r\n  \r\n@media (max-width: 768px){\r\n\r\n  .large,.large-name{\r\n    font-size: calc(20px + 4.8vw);\r\n  }\r\n  .name-title{\r\n    font-size: calc(20px + 4.8vw);\r\n  }\r\n  .work-button{\r\n    font-size: 1.65rem;\r\n  }\r\n  \r\n  .paragraph{\r\n    padding-right: 5%;\r\n    font-size: calc(7px + 2.5vw);\r\n  }\r\n\r\n\r\n.home-image{\r\n    overflow-x: auto;\r\n  }\r\n.home-inner{\r\n    display: grid;\r\n    grid-template-columns: repeat(1,1fr);\r\n  }\r\n\r\n.home-text{\r\n    margin-right: 0;\r\n    padding-right: 2rem;\r\n    padding-top: 25%;\r\n    padding-left: 4rem;\r\n    padding-bottom: 0;\r\n    margin-bottom: 0;\r\n    font-size: 7vw;\r\n    font-weight: 300;\r\n    word-spacing: normal;\r\n    width: 100%;\r\n  }\r\n  .large-logo{\r\n      display: none;\r\n      margin-left: 7.5rem;\r\n      padding-top: 0%;\r\n      margin-top: 0;\r\n      position: relative;\r\n      z-index: -1;\r\n      width: 70%;\r\n  }\r\n\r\n}\r\n\r\n", "",{"version":3,"sources":["webpack://style/landing.css"],"names":[],"mappings":"AAAA,SAAS;AACT;IACI,8EAAuE;IACvE,WAAW;IACX,aAAa;IACb,YAAY;IACZ,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,YAAY;IACZ,8BAA8B;IAC9B,iBAAiB;AACrB;;AAEA;EACE,oBAAoB;EACpB,wBAAwB;EACxB,UAAU;AACZ;AACA;EACE,0FAAkF;UAAlF,kFAAkF;AACpF;AACA;;AAEA;AACA;;AAEA;;AAEA;EACE,gBAAgB;EAChB,gBAAgB;EAChB,iBAAiB;EACjB,kBAAkB;;AAEpB;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,OAAO;EACP,UAAU;EACV,UAAU;EACV,+BAAuB;UAAvB,uBAAuB;EACvB,2BAAmB;UAAnB,mBAAmB;EACnB,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,oBAAoB;;AAEtB;AACA;EACE,2BAAmB;UAAnB,mBAAmB;EACnB,iBAAiB;EACjB,gBAAgB;EAChB,6BAA6B;EAC7B,uBAAuB;EACvB,oBAAoB;EACpB,kCAAkC;EAClC,eAAe;EACf,oBAAoB;EACpB,4BAA4B;EAC5B,kCAA0B;UAA1B,0BAA0B;AAC5B;;AAEA;;EAEE,kCAAkC;EAClC,wBAAwB;AAC1B;AACA;;EAEE,kCAAkC;AACpC;;AAEA;EACE,yBAAyB;AAC3B;;;AAGA,gBAAgB;;;AAGhB;IACI;MACE,gBAAgB;IAClB;IACA;MACE,aAAa;IACf;;AAEJ;;AAEA;EACE;IACE,qBAAa;IAAb,aAAa;;EAEf;AACF;;;AAGA;EACE;IACE,iFAAmF;EACrF;EACA;IACE,gBAAgB;EAClB;;EAEA;IACE,gBAAgB;IAChB,kBAAkB;IAClB,cAAc;IACd,UAAU;EACZ;EACA;IACE,iBAAiB;IACjB,gBAAgB;;EAElB;EACA;IACE,oBAAoB;EACtB;EACA;IACE,iBAAiB;EACnB;;;AAGF;;;;AAIA;EACE;IACE,aAAa;EACf;AACF;;AAEA;;EAEE;IACE,6BAA6B;EAC/B;EACA;IACE,6BAA6B;EAC/B;EACA;IACE,kBAAkB;EACpB;;EAEA;IACE,iBAAiB;IACjB,4BAA4B;EAC9B;;;AAGF;IACI,gBAAgB;EAClB;AACF;IACI,aAAa;IACb,oCAAoC;EACtC;;AAEF;IACI,eAAe;IACf,mBAAmB;IACnB,gBAAgB;IAChB,kBAAkB;IAClB,iBAAiB;IACjB,gBAAgB;IAChB,cAAc;IACd,gBAAgB;IAChB,oBAAoB;IACpB,WAAW;EACb;EACA;MACI,aAAa;MACb,mBAAmB;MACnB,eAAe;MACf,aAAa;MACb,kBAAkB;MAClB,WAAW;MACX,UAAU;EACd;;AAEF","sourcesContent":["/* Home */\r\n.home-image{\r\n    background: url('../public/background5.png') no-repeat center top/cover;\r\n    width: 100%;\r\n    height: 100vh;\r\n    margin: auto;\r\n    overflow-x: unset;\r\n    overflow: hidden;\r\n}\r\n  \r\n.home-inner{\r\n    display:grid;\r\n    grid-template-columns: 2fr 1fr;\r\n    line-height: 3rem;\r\n}\r\n\r\n.home-text{\r\n  padding: 15rem 10rem;\r\n  color: var(--text-color);\r\n  width: 80%;\r\n}\r\n.large{\r\n  animation: name duration timing-function delay iteration-count direction fill-mode;\r\n}\r\n.large-name{\r\n\r\n}\r\n.name-title{\r\n\r\n}\r\n\r\n.paragraph{\r\n  font-weight: 300;\r\n  line-height: 1.6;\r\n  word-spacing: 5px;\r\n  padding-right: 15%;\r\n\r\n}\r\n\r\n.large-logo{\r\n  position: relative;\r\n  z-index: -1;\r\n  top: 5%;\r\n  right: 15%;\r\n  width: 80%;\r\n  justify-content: center;\r\n  align-items: center;\r\n  overflow: hidden;\r\n  cursor: pointer;\r\n}\r\n\r\n.button-div{\r\n  padding: 1.5rem 0rem;\r\n\r\n}\r\n.work-button, .contact-button{\r\n  align-items: center;\r\n  font-size: 1.5rem;\r\n  font-weight: 500;\r\n  background-color: transparent;\r\n  color: var(--dif-color);\r\n  padding: 0.4rem 2rem;\r\n  border: 2px solid var(--dif-color);\r\n  cursor: pointer;\r\n  animation: para 2s 1;\r\n  -webkit-animation: para 3s 1;\r\n  transition-duration: 500ms;\r\n}\r\n\r\n.work-button:hover, \r\n.contact-button:hover{\r\n  background-color: var(--dif-color);\r\n  color: var(--dif-color2);\r\n}\r\n.burger\r\n.bars:hover{\r\n  background-color: var(--dif-color);\r\n}\r\n\r\n.burger div:nth-child(2):hover{\r\n  background-color: #13385f;\r\n}\r\n\r\n\r\n/* Media query */\r\n\r\n\r\n@media (min-width: 1024px) and (max-width:1300px){\r\n    .home-text{\r\n      overflow-x: auto;\r\n    }\r\n    .large-logo{\r\n      display: none;\r\n    }\r\n    \r\n}\r\n\r\n@media (max-width: 1300px){\r\n  .home-inner{\r\n    display: flex;\r\n    \r\n  }\r\n}\r\n\r\n\r\n@media (max-width: 1024px){\r\n  .home-image{\r\n    background: url('../public/backgroundResponsive.png') no-repeat center bottom/cover;\r\n  }\r\n  .large, .large-name{\r\n    font-size: 7.5vw;\r\n  }\r\n\r\n  .home-text{\r\n    padding-top: 20%;\r\n    padding-left: 5rem;\r\n    font-size: 6vw;\r\n    width: 80%;\r\n  }\r\n  .paragraph{\r\n    padding-right: 5%;\r\n    font-size: 2.8vw;\r\n\r\n  }\r\n  .button-div{\r\n    padding: 1.9rem 0rem;\r\n  }\r\n  .work-button{\r\n    font-size: 1.4rem;\r\n  }\r\n\r\n\r\n}\r\n\r\n\r\n\r\n@media (max-width: 1020px){\r\n  .large-logo{\r\n    display: none;\r\n  }\r\n}\r\n  \r\n@media (max-width: 768px){\r\n\r\n  .large,.large-name{\r\n    font-size: calc(20px + 4.8vw);\r\n  }\r\n  .name-title{\r\n    font-size: calc(20px + 4.8vw);\r\n  }\r\n  .work-button{\r\n    font-size: 1.65rem;\r\n  }\r\n  \r\n  .paragraph{\r\n    padding-right: 5%;\r\n    font-size: calc(7px + 2.5vw);\r\n  }\r\n\r\n\r\n.home-image{\r\n    overflow-x: auto;\r\n  }\r\n.home-inner{\r\n    display: grid;\r\n    grid-template-columns: repeat(1,1fr);\r\n  }\r\n\r\n.home-text{\r\n    margin-right: 0;\r\n    padding-right: 2rem;\r\n    padding-top: 25%;\r\n    padding-left: 4rem;\r\n    padding-bottom: 0;\r\n    margin-bottom: 0;\r\n    font-size: 7vw;\r\n    font-weight: 300;\r\n    word-spacing: normal;\r\n    width: 100%;\r\n  }\r\n  .large-logo{\r\n      display: none;\r\n      margin-left: 7.5rem;\r\n      padding-top: 0%;\r\n      margin-top: 0;\r\n      position: relative;\r\n      z-index: -1;\r\n      width: 70%;\r\n  }\r\n\r\n}\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGUvbGFuZGluZy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDeUY7QUFDTztBQUMxQjtBQUNTO0FBQy9FLDhCQUE4QixtRkFBMkI7QUFDekQseUNBQXlDLHNGQUErQixDQUFDLCtEQUE2QjtBQUN0Ryx5Q0FBeUMsc0ZBQStCLENBQUMsd0VBQTZCO0FBQ3RHO0FBQ0EsOEJBQThCLFFBQVMsNkJBQTZCLCtGQUErRixvQkFBb0Isc0JBQXNCLHFCQUFxQiwwQkFBMEIseUJBQXlCLEtBQUssc0JBQXNCLHFCQUFxQix1Q0FBdUMsMEJBQTBCLEtBQUssbUJBQW1CLDJCQUEyQiwrQkFBK0IsaUJBQWlCLEtBQUssV0FBVyxpR0FBaUcsaUdBQWlHLEtBQUssZ0JBQWdCLFNBQVMsZ0JBQWdCLFNBQVMsbUJBQW1CLHVCQUF1Qix1QkFBdUIsd0JBQXdCLHlCQUF5QixTQUFTLG9CQUFvQix5QkFBeUIsa0JBQWtCLGNBQWMsaUJBQWlCLGlCQUFpQixzQ0FBc0Msc0NBQXNDLGtDQUFrQyxrQ0FBa0MsdUJBQXVCLHNCQUFzQixLQUFLLG9CQUFvQiwyQkFBMkIsU0FBUyxrQ0FBa0Msa0NBQWtDLGtDQUFrQyx3QkFBd0IsdUJBQXVCLG9DQUFvQyw4QkFBOEIsMkJBQTJCLHlDQUF5QyxzQkFBc0IsMkJBQTJCLG1DQUFtQyx5Q0FBeUMseUNBQXlDLEtBQUssc0RBQXNELHlDQUF5QywrQkFBK0IsS0FBSywyQkFBMkIseUNBQXlDLEtBQUssdUNBQXVDLGdDQUFnQyxLQUFLLDJGQUEyRixtQkFBbUIsMkJBQTJCLFNBQVMsb0JBQW9CLHdCQUF3QixTQUFTLGFBQWEsbUNBQW1DLGtCQUFrQiw4QkFBOEIsc0JBQXNCLGVBQWUsS0FBSyx1Q0FBdUMsa0JBQWtCLGtHQUFrRyxPQUFPLDBCQUEwQix5QkFBeUIsT0FBTyxxQkFBcUIseUJBQXlCLDJCQUEyQix1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LHVCQUF1QixtQkFBbUIsT0FBTyxpQkFBaUIsMEJBQTBCLHlCQUF5QixXQUFXLGtCQUFrQiw2QkFBNkIsT0FBTyxtQkFBbUIsMEJBQTBCLE9BQU8sYUFBYSwyQ0FBMkMsa0JBQWtCLHNCQUFzQixPQUFPLEtBQUssb0NBQW9DLDZCQUE2QixzQ0FBc0MsT0FBTyxrQkFBa0Isc0NBQXNDLE9BQU8sbUJBQW1CLDJCQUEyQixPQUFPLHVCQUF1QiwwQkFBMEIscUNBQXFDLE9BQU8sd0JBQXdCLHlCQUF5QixPQUFPLGdCQUFnQixzQkFBc0IsNkNBQTZDLE9BQU8sbUJBQW1CLHdCQUF3Qiw0QkFBNEIseUJBQXlCLDJCQUEyQiwwQkFBMEIseUJBQXlCLHVCQUF1Qix5QkFBeUIsNkJBQTZCLG9CQUFvQixPQUFPLGtCQUFrQix3QkFBd0IsOEJBQThCLDBCQUEwQix3QkFBd0IsNkJBQTZCLHNCQUFzQixxQkFBcUIsT0FBTyxTQUFTLDJCQUEyQjtBQUN0MFI7QUFDZSxzRkFBdUIsRUFBQyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmVkYWQzMzE1MjNjOTYxMTlmZTQ1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fIGZyb20gXCIuLi9wdWJsaWMvYmFja2dyb3VuZDUucG5nXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gZnJvbSBcIi4uL3B1YmxpYy9iYWNrZ3JvdW5kUmVzcG9uc2l2ZS5wbmdcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogSG9tZSAqL1xcclxcbi5ob21lLWltYWdle1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIG5vLXJlcGVhdCBjZW50ZXIgdG9wL2NvdmVyO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICBvdmVyZmxvdy14OiB1bnNldDtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuICBcXHJcXG4uaG9tZS1pbm5lcntcXHJcXG4gICAgZGlzcGxheTpncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxZnI7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAzcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZS10ZXh0e1xcclxcbiAgcGFkZGluZzogMTVyZW0gMTByZW07XFxyXFxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxyXFxuICB3aWR0aDogODAlO1xcclxcbn1cXHJcXG4ubGFyZ2V7XFxyXFxuICAtd2Via2l0LWFuaW1hdGlvbjogbmFtZSBkdXJhdGlvbiB0aW1pbmctZnVuY3Rpb24gZGVsYXkgaXRlcmF0aW9uLWNvdW50IGRpcmVjdGlvbiBmaWxsLW1vZGU7XFxyXFxuICAgICAgICAgIGFuaW1hdGlvbjogbmFtZSBkdXJhdGlvbiB0aW1pbmctZnVuY3Rpb24gZGVsYXkgaXRlcmF0aW9uLWNvdW50IGRpcmVjdGlvbiBmaWxsLW1vZGU7XFxyXFxufVxcclxcbi5sYXJnZS1uYW1le1xcclxcblxcclxcbn1cXHJcXG4ubmFtZS10aXRsZXtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLnBhcmFncmFwaHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxuICBsaW5lLWhlaWdodDogMS42O1xcclxcbiAgd29yZC1zcGFjaW5nOiA1cHg7XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiAxNSU7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5sYXJnZS1sb2dve1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgei1pbmRleDogLTE7XFxyXFxuICB0b3A6IDUlO1xcclxcbiAgcmlnaHQ6IDE1JTtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5idXR0b24tZGl2e1xcclxcbiAgcGFkZGluZzogMS41cmVtIDByZW07XFxyXFxuXFxyXFxufVxcclxcbi53b3JrLWJ1dHRvbiwgLmNvbnRhY3QtYnV0dG9ue1xcclxcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBjb2xvcjogdmFyKC0tZGlmLWNvbG9yKTtcXHJcXG4gIHBhZGRpbmc6IDAuNHJlbSAycmVtO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZGlmLWNvbG9yKTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGFuaW1hdGlvbjogcGFyYSAycyAxO1xcclxcbiAgLXdlYmtpdC1hbmltYXRpb246IHBhcmEgM3MgMTtcXHJcXG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XFxyXFxuICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xcclxcbn1cXHJcXG5cXHJcXG4ud29yay1idXR0b246aG92ZXIsIFxcclxcbi5jb250YWN0LWJ1dHRvbjpob3ZlcntcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRpZi1jb2xvcik7XFxyXFxuICBjb2xvcjogdmFyKC0tZGlmLWNvbG9yMik7XFxyXFxufVxcclxcbi5idXJnZXJcXHJcXG4uYmFyczpob3ZlcntcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRpZi1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5idXJnZXIgZGl2Om50aC1jaGlsZCgyKTpob3ZlcntcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMzM4NWY7XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIE1lZGlhIHF1ZXJ5ICovXFxyXFxuXFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkgYW5kIChtYXgtd2lkdGg6MTMwMHB4KXtcXHJcXG4gICAgLmhvbWUtdGV4dHtcXHJcXG4gICAgICBvdmVyZmxvdy14OiBhdXRvO1xcclxcbiAgICB9XFxyXFxuICAgIC5sYXJnZS1sb2dve1xcclxcbiAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMzAwcHgpe1xcclxcbiAgLmhvbWUtaW5uZXJ7XFxyXFxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgXFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpe1xcclxcbiAgLmhvbWUtaW1hZ2V7XFxyXFxuICAgIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIikgbm8tcmVwZWF0IGNlbnRlciBib3R0b20vY292ZXI7XFxyXFxuICB9XFxyXFxuICAubGFyZ2UsIC5sYXJnZS1uYW1le1xcclxcbiAgICBmb250LXNpemU6IDcuNXZ3O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmhvbWUtdGV4dHtcXHJcXG4gICAgcGFkZGluZy10b3A6IDIwJTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiA1cmVtO1xcclxcbiAgICBmb250LXNpemU6IDZ2dztcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG4gIH1cXHJcXG4gIC5wYXJhZ3JhcGh7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDUlO1xcclxcbiAgICBmb250LXNpemU6IDIuOHZ3O1xcclxcblxcclxcbiAgfVxcclxcbiAgLmJ1dHRvbi1kaXZ7XFxyXFxuICAgIHBhZGRpbmc6IDEuOXJlbSAwcmVtO1xcclxcbiAgfVxcclxcbiAgLndvcmstYnV0dG9ue1xcclxcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjBweCl7XFxyXFxuICAubGFyZ2UtbG9nb3tcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuICBcXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpe1xcclxcblxcclxcbiAgLmxhcmdlLC5sYXJnZS1uYW1le1xcclxcbiAgICBmb250LXNpemU6IGNhbGMoMjBweCArIDQuOHZ3KTtcXHJcXG4gIH1cXHJcXG4gIC5uYW1lLXRpdGxle1xcclxcbiAgICBmb250LXNpemU6IGNhbGMoMjBweCArIDQuOHZ3KTtcXHJcXG4gIH1cXHJcXG4gIC53b3JrLWJ1dHRvbntcXHJcXG4gICAgZm9udC1zaXplOiAxLjY1cmVtO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAucGFyYWdyYXBoe1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiA1JTtcXHJcXG4gICAgZm9udC1zaXplOiBjYWxjKDdweCArIDIuNXZ3KTtcXHJcXG4gIH1cXHJcXG5cXHJcXG5cXHJcXG4uaG9tZS1pbWFnZXtcXHJcXG4gICAgb3ZlcmZsb3cteDogYXV0bztcXHJcXG4gIH1cXHJcXG4uaG9tZS1pbm5lcntcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwxZnIpO1xcclxcbiAgfVxcclxcblxcclxcbi5ob21lLXRleHR7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMDtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMnJlbTtcXHJcXG4gICAgcGFkZGluZy10b3A6IDI1JTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiA0cmVtO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcXHJcXG4gICAgZm9udC1zaXplOiA3dnc7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxuICAgIHdvcmQtc3BhY2luZzogbm9ybWFsO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gIH1cXHJcXG4gIC5sYXJnZS1sb2dve1xcclxcbiAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgICAgbWFyZ2luLWxlZnQ6IDcuNXJlbTtcXHJcXG4gICAgICBwYWRkaW5nLXRvcDogMCU7XFxyXFxuICAgICAgbWFyZ2luLXRvcDogMDtcXHJcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgICAgei1pbmRleDogLTE7XFxyXFxuICAgICAgd2lkdGg6IDcwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3N0eWxlL2xhbmRpbmcuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLFNBQVM7QUFDVDtJQUNJLDhFQUF1RTtJQUN2RSxXQUFXO0lBQ1gsYUFBYTtJQUNiLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLDhCQUE4QjtJQUM5QixpQkFBaUI7QUFDckI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsd0JBQXdCO0VBQ3hCLFVBQVU7QUFDWjtBQUNBO0VBQ0UsMEZBQWtGO1VBQWxGLGtGQUFrRjtBQUNwRjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixrQkFBa0I7O0FBRXBCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxPQUFPO0VBQ1AsVUFBVTtFQUNWLFVBQVU7RUFDViwrQkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLDJCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxvQkFBb0I7O0FBRXRCO0FBQ0E7RUFDRSwyQkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsNkJBQTZCO0VBQzdCLHVCQUF1QjtFQUN2QixvQkFBb0I7RUFDcEIsa0NBQWtDO0VBQ2xDLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIsNEJBQTRCO0VBQzVCLGtDQUEwQjtVQUExQiwwQkFBMEI7QUFDNUI7O0FBRUE7O0VBRUUsa0NBQWtDO0VBQ2xDLHdCQUF3QjtBQUMxQjtBQUNBOztFQUVFLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7O0FBR0EsZ0JBQWdCOzs7QUFHaEI7SUFDSTtNQUNFLGdCQUFnQjtJQUNsQjtJQUNBO01BQ0UsYUFBYTtJQUNmOztBQUVKOztBQUVBO0VBQ0U7SUFDRSxxQkFBYTtJQUFiLGFBQWE7O0VBRWY7QUFDRjs7O0FBR0E7RUFDRTtJQUNFLGlGQUFtRjtFQUNyRjtFQUNBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsVUFBVTtFQUNaO0VBQ0E7SUFDRSxpQkFBaUI7SUFDakIsZ0JBQWdCOztFQUVsQjtFQUNBO0lBQ0Usb0JBQW9CO0VBQ3RCO0VBQ0E7SUFDRSxpQkFBaUI7RUFDbkI7OztBQUdGOzs7O0FBSUE7RUFDRTtJQUNFLGFBQWE7RUFDZjtBQUNGOztBQUVBOztFQUVFO0lBQ0UsNkJBQTZCO0VBQy9CO0VBQ0E7SUFDRSw2QkFBNkI7RUFDL0I7RUFDQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQiw0QkFBNEI7RUFDOUI7OztBQUdGO0lBQ0ksZ0JBQWdCO0VBQ2xCO0FBQ0Y7SUFDSSxhQUFhO0lBQ2Isb0NBQW9DO0VBQ3RDOztBQUVGO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsV0FBVztFQUNiO0VBQ0E7TUFDSSxhQUFhO01BQ2IsbUJBQW1CO01BQ25CLGVBQWU7TUFDZixhQUFhO01BQ2Isa0JBQWtCO01BQ2xCLFdBQVc7TUFDWCxVQUFVO0VBQ2Q7O0FBRUZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogSG9tZSAqL1xcclxcbi5ob21lLWltYWdle1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uL3B1YmxpYy9iYWNrZ3JvdW5kNS5wbmcnKSBuby1yZXBlYXQgY2VudGVyIHRvcC9jb3ZlcjtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgb3ZlcmZsb3cteDogdW5zZXQ7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcbiAgXFxyXFxuLmhvbWUtaW5uZXJ7XFxyXFxuICAgIGRpc3BsYXk6Z3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyO1xcclxcbiAgICBsaW5lLWhlaWdodDogM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWUtdGV4dHtcXHJcXG4gIHBhZGRpbmc6IDE1cmVtIDEwcmVtO1xcclxcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG59XFxyXFxuLmxhcmdle1xcclxcbiAgYW5pbWF0aW9uOiBuYW1lIGR1cmF0aW9uIHRpbWluZy1mdW5jdGlvbiBkZWxheSBpdGVyYXRpb24tY291bnQgZGlyZWN0aW9uIGZpbGwtbW9kZTtcXHJcXG59XFxyXFxuLmxhcmdlLW5hbWV7XFxyXFxuXFxyXFxufVxcclxcbi5uYW1lLXRpdGxle1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4ucGFyYWdyYXBoe1xcclxcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjY7XFxyXFxuICB3b3JkLXNwYWNpbmc6IDVweDtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDE1JTtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLmxhcmdlLWxvZ297XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB6LWluZGV4OiAtMTtcXHJcXG4gIHRvcDogNSU7XFxyXFxuICByaWdodDogMTUlO1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5idXR0b24tZGl2e1xcclxcbiAgcGFkZGluZzogMS41cmVtIDByZW07XFxyXFxuXFxyXFxufVxcclxcbi53b3JrLWJ1dHRvbiwgLmNvbnRhY3QtYnV0dG9ue1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgY29sb3I6IHZhcigtLWRpZi1jb2xvcik7XFxyXFxuICBwYWRkaW5nOiAwLjRyZW0gMnJlbTtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWRpZi1jb2xvcik7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBhbmltYXRpb246IHBhcmEgMnMgMTtcXHJcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBwYXJhIDNzIDE7XFxyXFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtcztcXHJcXG59XFxyXFxuXFxyXFxuLndvcmstYnV0dG9uOmhvdmVyLCBcXHJcXG4uY29udGFjdC1idXR0b246aG92ZXJ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kaWYtY29sb3IpO1xcclxcbiAgY29sb3I6IHZhcigtLWRpZi1jb2xvcjIpO1xcclxcbn1cXHJcXG4uYnVyZ2VyXFxyXFxuLmJhcnM6aG92ZXJ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kaWYtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uYnVyZ2VyIGRpdjpudGgtY2hpbGQoMik6aG92ZXJ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMzODVmO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiBNZWRpYSBxdWVyeSAqL1xcclxcblxcclxcblxcclxcbkBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIGFuZCAobWF4LXdpZHRoOjEzMDBweCl7XFxyXFxuICAgIC5ob21lLXRleHR7XFxyXFxuICAgICAgb3ZlcmZsb3cteDogYXV0bztcXHJcXG4gICAgfVxcclxcbiAgICAubGFyZ2UtbG9nb3tcXHJcXG4gICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICB9XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogMTMwMHB4KXtcXHJcXG4gIC5ob21lLWlubmVye1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCl7XFxyXFxuICAuaG9tZS1pbWFnZXtcXHJcXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi9wdWJsaWMvYmFja2dyb3VuZFJlc3BvbnNpdmUucG5nJykgbm8tcmVwZWF0IGNlbnRlciBib3R0b20vY292ZXI7XFxyXFxuICB9XFxyXFxuICAubGFyZ2UsIC5sYXJnZS1uYW1le1xcclxcbiAgICBmb250LXNpemU6IDcuNXZ3O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmhvbWUtdGV4dHtcXHJcXG4gICAgcGFkZGluZy10b3A6IDIwJTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiA1cmVtO1xcclxcbiAgICBmb250LXNpemU6IDZ2dztcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG4gIH1cXHJcXG4gIC5wYXJhZ3JhcGh7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDUlO1xcclxcbiAgICBmb250LXNpemU6IDIuOHZ3O1xcclxcblxcclxcbiAgfVxcclxcbiAgLmJ1dHRvbi1kaXZ7XFxyXFxuICAgIHBhZGRpbmc6IDEuOXJlbSAwcmVtO1xcclxcbiAgfVxcclxcbiAgLndvcmstYnV0dG9ue1xcclxcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjBweCl7XFxyXFxuICAubGFyZ2UtbG9nb3tcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuICBcXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpe1xcclxcblxcclxcbiAgLmxhcmdlLC5sYXJnZS1uYW1le1xcclxcbiAgICBmb250LXNpemU6IGNhbGMoMjBweCArIDQuOHZ3KTtcXHJcXG4gIH1cXHJcXG4gIC5uYW1lLXRpdGxle1xcclxcbiAgICBmb250LXNpemU6IGNhbGMoMjBweCArIDQuOHZ3KTtcXHJcXG4gIH1cXHJcXG4gIC53b3JrLWJ1dHRvbntcXHJcXG4gICAgZm9udC1zaXplOiAxLjY1cmVtO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAucGFyYWdyYXBoe1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiA1JTtcXHJcXG4gICAgZm9udC1zaXplOiBjYWxjKDdweCArIDIuNXZ3KTtcXHJcXG4gIH1cXHJcXG5cXHJcXG5cXHJcXG4uaG9tZS1pbWFnZXtcXHJcXG4gICAgb3ZlcmZsb3cteDogYXV0bztcXHJcXG4gIH1cXHJcXG4uaG9tZS1pbm5lcntcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwxZnIpO1xcclxcbiAgfVxcclxcblxcclxcbi5ob21lLXRleHR7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMDtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMnJlbTtcXHJcXG4gICAgcGFkZGluZy10b3A6IDI1JTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiA0cmVtO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcXHJcXG4gICAgZm9udC1zaXplOiA3dnc7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxuICAgIHdvcmQtc3BhY2luZzogbm9ybWFsO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gIH1cXHJcXG4gIC5sYXJnZS1sb2dve1xcclxcbiAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgICAgbWFyZ2luLWxlZnQ6IDcuNXJlbTtcXHJcXG4gICAgICBwYWRkaW5nLXRvcDogMCU7XFxyXFxuICAgICAgbWFyZ2luLXRvcDogMDtcXHJcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgICAgei1pbmRleDogLTE7XFxyXFxuICAgICAgd2lkdGg6IDcwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJzb3VyY2VSb290IjoiIn0=