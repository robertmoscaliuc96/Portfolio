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
___CSS_LOADER_EXPORT___.push([module.i, "/* Home */\r\n.home-image{\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat center top/cover;\r\n    width: 100%;\r\n    height: 100vh;\r\n    margin: auto;\r\n    overflow-x: unset;\r\n}\r\n  \r\n.home-inner{\r\n    display:grid;\r\n    grid-template-columns: 2fr 1fr;\r\n    line-height: 3rem;\r\n}\r\n\r\n.home-text{\r\n  padding: 15rem 10rem;\r\n  color: var(--text-color);\r\n  width: 80%;\r\n  -webkit-transition-duration: 300ms;\r\n          transition-duration: 300ms;\r\n  animation: text 1s 1;\r\n  -webkit-animation: para 2s 1;\r\n}\r\n.paragraph{\r\n  font-weight: 300;\r\n  line-height: 1.6;\r\n  word-spacing: 5px;\r\n  -webkit-animation: para 2s 1;\r\n          animation: para 2s 1;\r\n  -webkit-transition-duration: 300ms;\r\n          transition-duration: 300ms;\r\n  padding-right: 15%;\r\n  -webkit-animation: para 3s 1;\r\n}\r\n\r\n.large-logo{\r\n  position: absolute;\r\n  z-index: -1;\r\n  top: 5%;\r\n  right: 15%;\r\n  width: ;\r\n  cursor: pointer;\r\n}\r\n\r\n.button-div{\r\n  padding: 1.5rem 0rem;\r\n\r\n}\r\n.work-button, .contact-button{\r\n  -webkit-align-items: center;\r\n          align-items: center;\r\n  font-size: 1.5rem;\r\n  font-weight: 500;\r\n  background-color: transparent;\r\n  color: var(--dif-color);\r\n  padding: 0.4rem 2rem;\r\n  border: 2px solid var(--dif-color);\r\n  cursor: pointer;\r\n  animation: para 2s 1;\r\n  -webkit-animation: para 3s 1;\r\n  -webkit-transition-duration: 500ms;\r\n          transition-duration: 500ms;\r\n}\r\n\r\n.work-button:hover, \r\n.contact-button:hover{\r\n  background-color: var(--dif-color);\r\n  color: var(--dif-color2);\r\n}\r\n.burger\r\n.bars:hover{\r\n  background-color: var(--dif-color);\r\n}\r\n\r\n.burger div:nth-child(2):hover{\r\n  background-color: #13385f;\r\n}\r\n\r\n\r\n/* Media query */\r\n/* Media query */\r\n/* Media query */\r\n\r\n\r\n@media (min-width: 1600px){\r\n\r\n}\r\n\r\n@media (min-width: 1024px) and (max-width:1500px){\r\n    .home-text{\r\n      overflow-x: auto;\r\n    }\r\n}\r\n\r\n\r\n@media (max-width: 1024px){\r\n  .work-inner,\r\n  .home-image{\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") no-repeat center bottom/cover;\r\n  }\r\n  .large, .large-name{\r\n    font-size: 7.5vw;\r\n  }\r\n\r\n  .home-text{\r\n    padding-top: 20%;\r\n    padding-left: 5rem;\r\n    font-size: 6vw;\r\n    width: 80%;\r\n  }\r\n  .paragraph{\r\n    padding-right: 5%;\r\n    font-size: 2.8vw;\r\n\r\n  }\r\n  .button-div{\r\n    padding: 1.9rem 0rem;\r\n  }\r\n  .work-button{\r\n    font-size: 1.4rem;\r\n  }\r\n\r\n\r\n}\r\n\r\n\r\n\r\n@media (max-width: 768px){\r\n\r\n  .large,.large-name{\r\n    font-size: 2.4rem;\r\n  }\r\n  .name-title{\r\n    font-size: 2.4rem;\r\n  }\r\n  .work-button{\r\n    font-size: 1.65rem;\r\n  }\r\n  \r\n  .paragraph{\r\n    padding-right: 5%;\r\n    font-size: calc(7px + 2.8vw);\r\n  }\r\n\r\n\r\n.home-image{\r\n    overflow-x: auto;\r\n  }\r\n.home-inner{\r\n    display: grid;\r\n    grid-template-columns: repeat(1,1fr);\r\n  }\r\n\r\n.home-text{\r\n    margin-right: 0;\r\n    padding-right: 2rem;\r\n    padding-top: 25%;\r\n    padding-left: 4rem;\r\n    padding-bottom: 0;\r\n    margin-bottom: 0;\r\n    font-size: 7vw;\r\n    font-weight: 300;\r\n    word-spacing: normal;\r\n    width: 100%;\r\n  }\r\n  .large-logo{\r\n      display: none;\r\n      margin-left: 7.5rem;\r\n      padding-top: 0%;\r\n      margin-top: 0;\r\n      position: relative;\r\n      z-index: -1;\r\n      width: 70%;\r\n  }\r\n\r\n}\r\n\r\n", "",{"version":3,"sources":["webpack://style/landing.css"],"names":[],"mappings":"AAAA,SAAS;AACT;IACI,8EAAuE;IACvE,WAAW;IACX,aAAa;IACb,YAAY;IACZ,iBAAiB;AACrB;;AAEA;IACI,YAAY;IACZ,8BAA8B;IAC9B,iBAAiB;AACrB;;AAEA;EACE,oBAAoB;EACpB,wBAAwB;EACxB,UAAU;EACV,kCAA0B;UAA1B,0BAA0B;EAC1B,oBAAoB;EACpB,4BAA4B;AAC9B;AACA;EACE,gBAAgB;EAChB,gBAAgB;EAChB,iBAAiB;EACjB,4BAAoB;UAApB,oBAAoB;EACpB,kCAA0B;UAA1B,0BAA0B;EAC1B,kBAAkB;EAClB,4BAA4B;AAC9B;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,OAAO;EACP,UAAU;EACV,OAAO;EACP,eAAe;AACjB;;AAEA;EACE,oBAAoB;;AAEtB;AACA;EACE,2BAAmB;UAAnB,mBAAmB;EACnB,iBAAiB;EACjB,gBAAgB;EAChB,6BAA6B;EAC7B,uBAAuB;EACvB,oBAAoB;EACpB,kCAAkC;EAClC,eAAe;EACf,oBAAoB;EACpB,4BAA4B;EAC5B,kCAA0B;UAA1B,0BAA0B;AAC5B;;AAEA;;EAEE,kCAAkC;EAClC,wBAAwB;AAC1B;AACA;;EAEE,kCAAkC;AACpC;;AAEA;EACE,yBAAyB;AAC3B;;;AAGA,gBAAgB;AAChB,gBAAgB;AAChB,gBAAgB;;;AAGhB;;AAEA;;AAEA;IACI;MACE,gBAAgB;IAClB;AACJ;;;AAGA;EACE;;IAEE,iFAAmF;EACrF;EACA;IACE,gBAAgB;EAClB;;EAEA;IACE,gBAAgB;IAChB,kBAAkB;IAClB,cAAc;IACd,UAAU;EACZ;EACA;IACE,iBAAiB;IACjB,gBAAgB;;EAElB;EACA;IACE,oBAAoB;EACtB;EACA;IACE,iBAAiB;EACnB;;;AAGF;;;;AAIA;;EAEE;IACE,iBAAiB;EACnB;EACA;IACE,iBAAiB;EACnB;EACA;IACE,kBAAkB;EACpB;;EAEA;IACE,iBAAiB;IACjB,4BAA4B;EAC9B;;;AAGF;IACI,gBAAgB;EAClB;AACF;IACI,aAAa;IACb,oCAAoC;EACtC;;AAEF;IACI,eAAe;IACf,mBAAmB;IACnB,gBAAgB;IAChB,kBAAkB;IAClB,iBAAiB;IACjB,gBAAgB;IAChB,cAAc;IACd,gBAAgB;IAChB,oBAAoB;IACpB,WAAW;EACb;EACA;MACI,aAAa;MACb,mBAAmB;MACnB,eAAe;MACf,aAAa;MACb,kBAAkB;MAClB,WAAW;MACX,UAAU;EACd;;AAEF","sourcesContent":["/* Home */\r\n.home-image{\r\n    background: url('../public/background5.png') no-repeat center top/cover;\r\n    width: 100%;\r\n    height: 100vh;\r\n    margin: auto;\r\n    overflow-x: unset;\r\n}\r\n  \r\n.home-inner{\r\n    display:grid;\r\n    grid-template-columns: 2fr 1fr;\r\n    line-height: 3rem;\r\n}\r\n\r\n.home-text{\r\n  padding: 15rem 10rem;\r\n  color: var(--text-color);\r\n  width: 80%;\r\n  transition-duration: 300ms;\r\n  animation: text 1s 1;\r\n  -webkit-animation: para 2s 1;\r\n}\r\n.paragraph{\r\n  font-weight: 300;\r\n  line-height: 1.6;\r\n  word-spacing: 5px;\r\n  animation: para 2s 1;\r\n  transition-duration: 300ms;\r\n  padding-right: 15%;\r\n  -webkit-animation: para 3s 1;\r\n}\r\n\r\n.large-logo{\r\n  position: absolute;\r\n  z-index: -1;\r\n  top: 5%;\r\n  right: 15%;\r\n  width: ;\r\n  cursor: pointer;\r\n}\r\n\r\n.button-div{\r\n  padding: 1.5rem 0rem;\r\n\r\n}\r\n.work-button, .contact-button{\r\n  align-items: center;\r\n  font-size: 1.5rem;\r\n  font-weight: 500;\r\n  background-color: transparent;\r\n  color: var(--dif-color);\r\n  padding: 0.4rem 2rem;\r\n  border: 2px solid var(--dif-color);\r\n  cursor: pointer;\r\n  animation: para 2s 1;\r\n  -webkit-animation: para 3s 1;\r\n  transition-duration: 500ms;\r\n}\r\n\r\n.work-button:hover, \r\n.contact-button:hover{\r\n  background-color: var(--dif-color);\r\n  color: var(--dif-color2);\r\n}\r\n.burger\r\n.bars:hover{\r\n  background-color: var(--dif-color);\r\n}\r\n\r\n.burger div:nth-child(2):hover{\r\n  background-color: #13385f;\r\n}\r\n\r\n\r\n/* Media query */\r\n/* Media query */\r\n/* Media query */\r\n\r\n\r\n@media (min-width: 1600px){\r\n\r\n}\r\n\r\n@media (min-width: 1024px) and (max-width:1500px){\r\n    .home-text{\r\n      overflow-x: auto;\r\n    }\r\n}\r\n\r\n\r\n@media (max-width: 1024px){\r\n  .work-inner,\r\n  .home-image{\r\n    background: url('../public/backgroundResponsive.png') no-repeat center bottom/cover;\r\n  }\r\n  .large, .large-name{\r\n    font-size: 7.5vw;\r\n  }\r\n\r\n  .home-text{\r\n    padding-top: 20%;\r\n    padding-left: 5rem;\r\n    font-size: 6vw;\r\n    width: 80%;\r\n  }\r\n  .paragraph{\r\n    padding-right: 5%;\r\n    font-size: 2.8vw;\r\n\r\n  }\r\n  .button-div{\r\n    padding: 1.9rem 0rem;\r\n  }\r\n  .work-button{\r\n    font-size: 1.4rem;\r\n  }\r\n\r\n\r\n}\r\n\r\n\r\n\r\n@media (max-width: 768px){\r\n\r\n  .large,.large-name{\r\n    font-size: 2.4rem;\r\n  }\r\n  .name-title{\r\n    font-size: 2.4rem;\r\n  }\r\n  .work-button{\r\n    font-size: 1.65rem;\r\n  }\r\n  \r\n  .paragraph{\r\n    padding-right: 5%;\r\n    font-size: calc(7px + 2.8vw);\r\n  }\r\n\r\n\r\n.home-image{\r\n    overflow-x: auto;\r\n  }\r\n.home-inner{\r\n    display: grid;\r\n    grid-template-columns: repeat(1,1fr);\r\n  }\r\n\r\n.home-text{\r\n    margin-right: 0;\r\n    padding-right: 2rem;\r\n    padding-top: 25%;\r\n    padding-left: 4rem;\r\n    padding-bottom: 0;\r\n    margin-bottom: 0;\r\n    font-size: 7vw;\r\n    font-weight: 300;\r\n    word-spacing: normal;\r\n    width: 100%;\r\n  }\r\n  .large-logo{\r\n      display: none;\r\n      margin-left: 7.5rem;\r\n      padding-top: 0%;\r\n      margin-top: 0;\r\n      position: relative;\r\n      z-index: -1;\r\n      width: 70%;\r\n  }\r\n\r\n}\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGUvbGFuZGluZy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDeUY7QUFDTztBQUMxQjtBQUNTO0FBQy9FLDhCQUE4QixtRkFBMkI7QUFDekQseUNBQXlDLHNGQUErQixDQUFDLCtEQUE2QjtBQUN0Ryx5Q0FBeUMsc0ZBQStCLENBQUMsd0VBQTZCO0FBQ3RHO0FBQ0EsOEJBQThCLFFBQVMsNkJBQTZCLCtGQUErRixvQkFBb0Isc0JBQXNCLHFCQUFxQiwwQkFBMEIsS0FBSyxzQkFBc0IscUJBQXFCLHVDQUF1QywwQkFBMEIsS0FBSyxtQkFBbUIsMkJBQTJCLCtCQUErQixpQkFBaUIseUNBQXlDLHlDQUF5QywyQkFBMkIsbUNBQW1DLEtBQUssZUFBZSx1QkFBdUIsdUJBQXVCLHdCQUF3QixtQ0FBbUMsbUNBQW1DLHlDQUF5Qyx5Q0FBeUMseUJBQXlCLG1DQUFtQyxLQUFLLG9CQUFvQix5QkFBeUIsa0JBQWtCLGNBQWMsaUJBQWlCLGNBQWMsc0JBQXNCLEtBQUssb0JBQW9CLDJCQUEyQixTQUFTLGtDQUFrQyxrQ0FBa0Msa0NBQWtDLHdCQUF3Qix1QkFBdUIsb0NBQW9DLDhCQUE4QiwyQkFBMkIseUNBQXlDLHNCQUFzQiwyQkFBMkIsbUNBQW1DLHlDQUF5Qyx5Q0FBeUMsS0FBSyxzREFBc0QseUNBQXlDLCtCQUErQixLQUFLLDJCQUEyQix5Q0FBeUMsS0FBSyx1Q0FBdUMsZ0NBQWdDLEtBQUssOEdBQThHLFNBQVMsMERBQTBELG1CQUFtQiwyQkFBMkIsU0FBUyxLQUFLLHVDQUF1QyxvQ0FBb0Msa0dBQWtHLE9BQU8sMEJBQTBCLHlCQUF5QixPQUFPLHFCQUFxQix5QkFBeUIsMkJBQTJCLHVCQUF1QixtQkFBbUIsT0FBTyxpQkFBaUIsMEJBQTBCLHlCQUF5QixXQUFXLGtCQUFrQiw2QkFBNkIsT0FBTyxtQkFBbUIsMEJBQTBC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LDJCQUEyQiwwQkFBMEIseUJBQXlCLHVCQUF1Qix5QkFBeUIsNkJBQTZCLG9CQUFvQixPQUFPLGtCQUFrQix3QkFBd0IsOEJBQThCLDBCQUEwQix3QkFBd0IsNkJBQTZCLHNCQUFzQixxQkFBcUIsT0FBTyxTQUFTLDJCQUEyQjtBQUM3clE7QUFDZSxzRkFBdUIsRUFBQyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmE2NmE3M2RmYjdhY2I2NGMxNWM1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fIGZyb20gXCIuLi9wdWJsaWMvYmFja2dyb3VuZDUucG5nXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gZnJvbSBcIi4uL3B1YmxpYy9iYWNrZ3JvdW5kUmVzcG9uc2l2ZS5wbmdcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogSG9tZSAqL1xcclxcbi5ob21lLWltYWdle1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIG5vLXJlcGVhdCBjZW50ZXIgdG9wL2NvdmVyO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICBvdmVyZmxvdy14OiB1bnNldDtcXHJcXG59XFxyXFxuICBcXHJcXG4uaG9tZS1pbm5lcntcXHJcXG4gICAgZGlzcGxheTpncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxZnI7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAzcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZS10ZXh0e1xcclxcbiAgcGFkZGluZzogMTVyZW0gMTByZW07XFxyXFxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxyXFxuICB3aWR0aDogODAlO1xcclxcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAzMDBtcztcXHJcXG4gICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMzAwbXM7XFxyXFxuICBhbmltYXRpb246IHRleHQgMXMgMTtcXHJcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBwYXJhIDJzIDE7XFxyXFxufVxcclxcbi5wYXJhZ3JhcGh7XFxyXFxuICBmb250LXdlaWdodDogMzAwO1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuNjtcXHJcXG4gIHdvcmQtc3BhY2luZzogNXB4O1xcclxcbiAgLXdlYmtpdC1hbmltYXRpb246IHBhcmEgMnMgMTtcXHJcXG4gICAgICAgICAgYW5pbWF0aW9uOiBwYXJhIDJzIDE7XFxyXFxuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDMwMG1zO1xcclxcbiAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAzMDBtcztcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDE1JTtcXHJcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBwYXJhIDNzIDE7XFxyXFxufVxcclxcblxcclxcbi5sYXJnZS1sb2dve1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgei1pbmRleDogLTE7XFxyXFxuICB0b3A6IDUlO1xcclxcbiAgcmlnaHQ6IDE1JTtcXHJcXG4gIHdpZHRoOiA7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5idXR0b24tZGl2e1xcclxcbiAgcGFkZGluZzogMS41cmVtIDByZW07XFxyXFxuXFxyXFxufVxcclxcbi53b3JrLWJ1dHRvbiwgLmNvbnRhY3QtYnV0dG9ue1xcclxcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBjb2xvcjogdmFyKC0tZGlmLWNvbG9yKTtcXHJcXG4gIHBhZGRpbmc6IDAuNHJlbSAycmVtO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZGlmLWNvbG9yKTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGFuaW1hdGlvbjogcGFyYSAycyAxO1xcclxcbiAgLXdlYmtpdC1hbmltYXRpb246IHBhcmEgM3MgMTtcXHJcXG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XFxyXFxuICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xcclxcbn1cXHJcXG5cXHJcXG4ud29yay1idXR0b246aG92ZXIsIFxcclxcbi5jb250YWN0LWJ1dHRvbjpob3ZlcntcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRpZi1jb2xvcik7XFxyXFxuICBjb2xvcjogdmFyKC0tZGlmLWNvbG9yMik7XFxyXFxufVxcclxcbi5idXJnZXJcXHJcXG4uYmFyczpob3ZlcntcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRpZi1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5idXJnZXIgZGl2Om50aC1jaGlsZCgyKTpob3ZlcntcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMzM4NWY7XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIE1lZGlhIHF1ZXJ5ICovXFxyXFxuLyogTWVkaWEgcXVlcnkgKi9cXHJcXG4vKiBNZWRpYSBxdWVyeSAqL1xcclxcblxcclxcblxcclxcbkBtZWRpYSAobWluLXdpZHRoOiAxNjAwcHgpe1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSBhbmQgKG1heC13aWR0aDoxNTAwcHgpe1xcclxcbiAgICAuaG9tZS10ZXh0e1xcclxcbiAgICAgIG92ZXJmbG93LXg6IGF1dG87XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCl7XFxyXFxuICAud29yay1pbm5lcixcXHJcXG4gIC5ob21lLWltYWdle1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIG5vLXJlcGVhdCBjZW50ZXIgYm90dG9tL2NvdmVyO1xcclxcbiAgfVxcclxcbiAgLmxhcmdlLCAubGFyZ2UtbmFtZXtcXHJcXG4gICAgZm9udC1zaXplOiA3LjV2dztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5ob21lLXRleHR7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAyMCU7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogNXJlbTtcXHJcXG4gICAgZm9udC1zaXplOiA2dnc7XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxuICB9XFxyXFxuICAucGFyYWdyYXBoe1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiA1JTtcXHJcXG4gICAgZm9udC1zaXplOiAyLjh2dztcXHJcXG5cXHJcXG4gIH1cXHJcXG4gIC5idXR0b24tZGl2e1xcclxcbiAgICBwYWRkaW5nOiAxLjlyZW0gMHJlbTtcXHJcXG4gIH1cXHJcXG4gIC53b3JrLWJ1dHRvbntcXHJcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuXFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCl7XFxyXFxuXFxyXFxuICAubGFyZ2UsLmxhcmdlLW5hbWV7XFxyXFxuICAgIGZvbnQtc2l6ZTogMi40cmVtO1xcclxcbiAgfVxcclxcbiAgLm5hbWUtdGl0bGV7XFxyXFxuICAgIGZvbnQtc2l6ZTogMi40cmVtO1xcclxcbiAgfVxcclxcbiAgLndvcmstYnV0dG9ue1xcclxcbiAgICBmb250LXNpemU6IDEuNjVyZW07XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5wYXJhZ3JhcGh7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDUlO1xcclxcbiAgICBmb250LXNpemU6IGNhbGMoN3B4ICsgMi44dncpO1xcclxcbiAgfVxcclxcblxcclxcblxcclxcbi5ob21lLWltYWdle1xcclxcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xcclxcbiAgfVxcclxcbi5ob21lLWlubmVye1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLDFmcik7XFxyXFxuICB9XFxyXFxuXFxyXFxuLmhvbWUtdGV4dHtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xcclxcbiAgICBwYWRkaW5nLXRvcDogMjUlO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDRyZW07XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAwO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcclxcbiAgICBmb250LXNpemU6IDd2dztcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG4gICAgd29yZC1zcGFjaW5nOiBub3JtYWw7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgfVxcclxcbiAgLmxhcmdlLWxvZ297XFxyXFxuICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgICBtYXJnaW4tbGVmdDogNy41cmVtO1xcclxcbiAgICAgIHBhZGRpbmctdG9wOiAwJTtcXHJcXG4gICAgICBtYXJnaW4tdG9wOiAwO1xcclxcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgICB6LWluZGV4OiAtMTtcXHJcXG4gICAgICB3aWR0aDogNzAlO1xcclxcbiAgfVxcclxcblxcclxcbn1cXHJcXG5cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3R5bGUvbGFuZGluZy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsU0FBUztBQUNUO0lBQ0ksOEVBQXVFO0lBQ3ZFLFdBQVc7SUFDWCxhQUFhO0lBQ2IsWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7SUFDWiw4QkFBOEI7SUFDOUIsaUJBQWlCO0FBQ3JCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLHdCQUF3QjtFQUN4QixVQUFVO0VBQ1Ysa0NBQTBCO1VBQTFCLDBCQUEwQjtFQUMxQixvQkFBb0I7RUFDcEIsNEJBQTRCO0FBQzlCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQiw0QkFBb0I7VUFBcEIsb0JBQW9CO0VBQ3BCLGtDQUEwQjtVQUExQiwwQkFBMEI7RUFDMUIsa0JBQWtCO0VBQ2xCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsT0FBTztFQUNQLFVBQVU7RUFDVixPQUFPO0VBQ1AsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG9CQUFvQjs7QUFFdEI7QUFDQTtFQUNFLDJCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQiw2QkFBNkI7RUFDN0IsdUJBQXVCO0VBQ3ZCLG9CQUFvQjtFQUNwQixrQ0FBa0M7RUFDbEMsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQiw0QkFBNEI7RUFDNUIsa0NBQTBCO1VBQTFCLDBCQUEwQjtBQUM1Qjs7QUFFQTs7RUFFRSxrQ0FBa0M7RUFDbEMsd0JBQXdCO0FBQzFCO0FBQ0E7O0VBRUUsa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOzs7QUFHQSxnQkFBZ0I7QUFDaEIsZ0JBQWdCO0FBQ2hCLGdCQUFnQjs7O0FBR2hCOztBQUVBOztBQUVBO0lBQ0k7TUFDRSxnQkFBZ0I7SUFDbEI7QUFDSjs7O0FBR0E7RUFDRTs7SUFFRSxpRkFBbUY7RUFDckY7RUFDQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLFVBQVU7RUFDWjtFQUNBO0lBQ0UsaUJBQWlCO0lBQ2pCLGdCQUFnQjs7RUFFbEI7RUFDQTtJQUNFLG9CQUFvQjtFQUN0QjtFQUNBO0lBQ0UsaUJBQWlCO0VBQ25COzs7QUFHRjs7OztBQUlBOztFQUVFO0lBQ0UsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQiw0QkFBNEI7RUFDOUI7OztBQUdGO0lBQ0ksZ0JBQWdCO0VBQ2xCO0FBQ0Y7SUFDSSxhQUFhO0lBQ2Isb0NBQW9DO0VBQ3RDOztBQUVGO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsV0FBVztFQUNiO0VBQ0E7TUFDSSxhQUFhO01BQ2IsbUJBQW1CO01BQ25CLGVBQWU7TUFDZixhQUFhO01BQ2Isa0JBQWtCO01BQ2xCLFdBQVc7TUFDWCxVQUFVO0VBQ2Q7O0FBRUZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogSG9tZSAqL1xcclxcbi5ob21lLWltYWdle1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uL3B1YmxpYy9iYWNrZ3JvdW5kNS5wbmcnKSBuby1yZXBlYXQgY2VudGVyIHRvcC9jb3ZlcjtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgb3ZlcmZsb3cteDogdW5zZXQ7XFxyXFxufVxcclxcbiAgXFxyXFxuLmhvbWUtaW5uZXJ7XFxyXFxuICAgIGRpc3BsYXk6Z3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyO1xcclxcbiAgICBsaW5lLWhlaWdodDogM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWUtdGV4dHtcXHJcXG4gIHBhZGRpbmc6IDE1cmVtIDEwcmVtO1xcclxcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDMwMG1zO1xcclxcbiAgYW5pbWF0aW9uOiB0ZXh0IDFzIDE7XFxyXFxuICAtd2Via2l0LWFuaW1hdGlvbjogcGFyYSAycyAxO1xcclxcbn1cXHJcXG4ucGFyYWdyYXBoe1xcclxcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjY7XFxyXFxuICB3b3JkLXNwYWNpbmc6IDVweDtcXHJcXG4gIGFuaW1hdGlvbjogcGFyYSAycyAxO1xcclxcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMzAwbXM7XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiAxNSU7XFxyXFxuICAtd2Via2l0LWFuaW1hdGlvbjogcGFyYSAzcyAxO1xcclxcbn1cXHJcXG5cXHJcXG4ubGFyZ2UtbG9nb3tcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHotaW5kZXg6IC0xO1xcclxcbiAgdG9wOiA1JTtcXHJcXG4gIHJpZ2h0OiAxNSU7XFxyXFxuICB3aWR0aDogO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9uLWRpdntcXHJcXG4gIHBhZGRpbmc6IDEuNXJlbSAwcmVtO1xcclxcblxcclxcbn1cXHJcXG4ud29yay1idXR0b24sIC5jb250YWN0LWJ1dHRvbntcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIGNvbG9yOiB2YXIoLS1kaWYtY29sb3IpO1xcclxcbiAgcGFkZGluZzogMC40cmVtIDJyZW07XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1kaWYtY29sb3IpO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYW5pbWF0aW9uOiBwYXJhIDJzIDE7XFxyXFxuICAtd2Via2l0LWFuaW1hdGlvbjogcGFyYSAzcyAxO1xcclxcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XFxyXFxufVxcclxcblxcclxcbi53b3JrLWJ1dHRvbjpob3ZlciwgXFxyXFxuLmNvbnRhY3QtYnV0dG9uOmhvdmVye1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGlmLWNvbG9yKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1kaWYtY29sb3IyKTtcXHJcXG59XFxyXFxuLmJ1cmdlclxcclxcbi5iYXJzOmhvdmVye1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGlmLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1cmdlciBkaXY6bnRoLWNoaWxkKDIpOmhvdmVye1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEzMzg1ZjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogTWVkaWEgcXVlcnkgKi9cXHJcXG4vKiBNZWRpYSBxdWVyeSAqL1xcclxcbi8qIE1lZGlhIHF1ZXJ5ICovXFxyXFxuXFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDE2MDBweCl7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIGFuZCAobWF4LXdpZHRoOjE1MDBweCl7XFxyXFxuICAgIC5ob21lLXRleHR7XFxyXFxuICAgICAgb3ZlcmZsb3cteDogYXV0bztcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KXtcXHJcXG4gIC53b3JrLWlubmVyLFxcclxcbiAgLmhvbWUtaW1hZ2V7XFxyXFxuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vcHVibGljL2JhY2tncm91bmRSZXNwb25zaXZlLnBuZycpIG5vLXJlcGVhdCBjZW50ZXIgYm90dG9tL2NvdmVyO1xcclxcbiAgfVxcclxcbiAgLmxhcmdlLCAubGFyZ2UtbmFtZXtcXHJcXG4gICAgZm9udC1zaXplOiA3LjV2dztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5ob21lLXRleHR7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAyMCU7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogNXJlbTtcXHJcXG4gICAgZm9udC1zaXplOiA2dnc7XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxuICB9XFxyXFxuICAucGFyYWdyYXBoe1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiA1JTtcXHJcXG4gICAgZm9udC1zaXplOiAyLjh2dztcXHJcXG5cXHJcXG4gIH1cXHJcXG4gIC5idXR0b24tZGl2e1xcclxcbiAgICBwYWRkaW5nOiAxLjlyZW0gMHJlbTtcXHJcXG4gIH1cXHJcXG4gIC53b3JrLWJ1dHRvbntcXHJcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuXFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCl7XFxyXFxuXFxyXFxuICAubGFyZ2UsLmxhcmdlLW5hbWV7XFxyXFxuICAgIGZvbnQtc2l6ZTogMi40cmVtO1xcclxcbiAgfVxcclxcbiAgLm5hbWUtdGl0bGV7XFxyXFxuICAgIGZvbnQtc2l6ZTogMi40cmVtO1xcclxcbiAgfVxcclxcbiAgLndvcmstYnV0dG9ue1xcclxcbiAgICBmb250LXNpemU6IDEuNjVyZW07XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5wYXJhZ3JhcGh7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDUlO1xcclxcbiAgICBmb250LXNpemU6IGNhbGMoN3B4ICsgMi44dncpO1xcclxcbiAgfVxcclxcblxcclxcblxcclxcbi5ob21lLWltYWdle1xcclxcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xcclxcbiAgfVxcclxcbi5ob21lLWlubmVye1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLDFmcik7XFxyXFxuICB9XFxyXFxuXFxyXFxuLmhvbWUtdGV4dHtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xcclxcbiAgICBwYWRkaW5nLXRvcDogMjUlO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDRyZW07XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAwO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcclxcbiAgICBmb250LXNpemU6IDd2dztcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG4gICAgd29yZC1zcGFjaW5nOiBub3JtYWw7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgfVxcclxcbiAgLmxhcmdlLWxvZ297XFxyXFxuICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgICBtYXJnaW4tbGVmdDogNy41cmVtO1xcclxcbiAgICAgIHBhZGRpbmctdG9wOiAwJTtcXHJcXG4gICAgICBtYXJnaW4tdG9wOiAwO1xcclxcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgICB6LWluZGV4OiAtMTtcXHJcXG4gICAgICB3aWR0aDogNzAlO1xcclxcbiAgfVxcclxcblxcclxcbn1cXHJcXG5cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==