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
___CSS_LOADER_EXPORT___.push([module.i, "/* Home */\r\n.home-image{\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat center top/cover;\r\n    width: 100%;\r\n    height: 100vh;\r\n    margin: auto;\r\n    overflow-x: unset;\r\n    overflow: hidden;\r\n}\r\n  \r\n.home-inner{\r\n    display:grid;\r\n    grid-template-columns: 2fr 1fr;\r\n    line-height: 3rem;\r\n}\r\n\r\n.home-text{\r\n  padding: 15rem 10rem;\r\n  color: var(--text-color);\r\n  width: 80%;\r\n}\r\n.large{\r\n  -webkit-animation: para 2s 1;\r\n          animation: para 2s 1;\r\n  -webkit-animation-duration: 2200ms;\r\n          animation-duration: 2200ms;\r\n}\r\n.large-name{\r\n  -webkit-animation: para 3s 1;\r\n          animation: para 3s 1;\r\n  -webkit-animation-duration: 2700ms;\r\n          animation-duration: 2700ms;\r\n}\r\n.name-title{\r\n  -webkit-animation: para 4s 1;\r\n          animation: para 4s 1;\r\n  -webkit-animation-duration: 3200ms;\r\n          animation-duration: 3200ms;\r\n}\r\n\r\n.paragraph{\r\n  font-weight: 300;\r\n  line-height: 1.6;\r\n  word-spacing: 5px;\r\n  padding-right: 15%;\r\n  -webkit-animation: para 5s 1;\r\n          animation: para 5s 1;\r\n  -webkit-animation-duration: 3900ms;\r\n          animation-duration: 3900ms;\r\n\r\n}\r\n\r\n.large-logo{\r\n  position: relative;\r\n  z-index: -1;\r\n  top: 5%;\r\n  right: 15%;\r\n  width: 80%;\r\n  -webkit-justify-content: center;\r\n          justify-content: center;\r\n  -webkit-align-items: center;\r\n          align-items: center;\r\n  overflow: hidden;\r\n  cursor: pointer;\r\n}\r\n\r\n.button-div{\r\n  padding: 1.5rem 0rem;\r\n\r\n}\r\n.work-button{\r\n  -webkit-align-items: center;\r\n          align-items: center;\r\n  font-size: 1.5rem;\r\n  font-weight: 500;\r\n  background-color: transparent;\r\n  color: var(--dif-color);\r\n  padding: 0.4rem 2rem;\r\n  border: 2px solid var(--dif-color);\r\n  cursor: pointer;\r\n  animation: para 4s 1;\r\n  -webkit-animation: para 4s 1;\r\n  -webkit-transition-duration: 900ms;\r\n          transition-duration: 900ms;\r\n}\r\n\r\n.work-button:hover, \r\n.contact-button:hover{\r\n  background-color: var(--dif-color);\r\n  color: var(--dif-color2);\r\n}\r\n.burger\r\n.bars:hover{\r\n  background-color: var(--dif-color);\r\n}\r\n\r\n.burger div:nth-child(2):hover{\r\n  background-color: #13385f;\r\n}\r\n\r\n\r\n/* Media query */\r\n\r\n\r\n@media (min-width: 1024px) and (max-width:1300px){\r\n    .home-text{\r\n      overflow-x: auto;\r\n    }\r\n    .large-logo{\r\n      display: none;\r\n    }\r\n    \r\n}\r\n\r\n@media (max-width: 1300px){\r\n  .home-inner{\r\n    display: -webkit-flex;\r\n    display: flex;\r\n    \r\n  }\r\n}\r\n\r\n\r\n@media (max-width: 1024px){\r\n  .home-image{\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") no-repeat center bottom/cover;\r\n  }\r\n  .large, .large-name{\r\n    font-size: 7.5vw;\r\n  }\r\n\r\n  .home-text{\r\n    padding-top: 20%;\r\n    padding-left: 5rem;\r\n    font-size: 6vw;\r\n    width: 80%;\r\n  }\r\n  .paragraph{\r\n    padding-right: 5%;\r\n    font-size: 2.8vw;\r\n\r\n  }\r\n  .button-div{\r\n    padding: 1.9rem 0rem;\r\n  }\r\n  .work-button{\r\n    font-size: 1.4rem;\r\n  }\r\n\r\n\r\n}\r\n\r\n\r\n\r\n@media (max-width: 1020px){\r\n  .large-logo{\r\n    display: none;\r\n  }\r\n}\r\n  \r\n@media (max-width: 768px){\r\n\r\n  .large,.large-name{\r\n    font-size: calc(20px + 4.8vw);\r\n  }\r\n  .name-title{\r\n    font-size: calc(20px + 4.8vw);\r\n  }\r\n  .work-button{\r\n    font-size: 1.65rem;\r\n  }\r\n  \r\n  .paragraph{\r\n    padding-right: 5%;\r\n    font-size: calc(7px + 2.5vw);\r\n  }\r\n\r\n\r\n.home-image{\r\n    overflow-x: auto;\r\n  }\r\n.home-inner{\r\n    display: grid;\r\n    grid-template-columns: repeat(1,1fr);\r\n  }\r\n\r\n.home-text{\r\n    margin-right: 0;\r\n    padding-right: 2rem;\r\n    padding-top: 25%;\r\n    padding-left: 4rem;\r\n    padding-bottom: 0;\r\n    margin-bottom: 0;\r\n    font-size: 7vw;\r\n    font-weight: 300;\r\n    word-spacing: normal;\r\n    width: 100%;\r\n  }\r\n  .large-logo{\r\n      display: none;\r\n      margin-left: 7.5rem;\r\n      padding-top: 0%;\r\n      margin-top: 0;\r\n      position: relative;\r\n      z-index: -1;\r\n      width: 70%;\r\n  }\r\n\r\n}\r\n\r\n", "",{"version":3,"sources":["webpack://style/landing.css"],"names":[],"mappings":"AAAA,SAAS;AACT;IACI,8EAAuE;IACvE,WAAW;IACX,aAAa;IACb,YAAY;IACZ,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,YAAY;IACZ,8BAA8B;IAC9B,iBAAiB;AACrB;;AAEA;EACE,oBAAoB;EACpB,wBAAwB;EACxB,UAAU;AACZ;AACA;EACE,4BAAoB;UAApB,oBAAoB;EACpB,kCAA0B;UAA1B,0BAA0B;AAC5B;AACA;EACE,4BAAoB;UAApB,oBAAoB;EACpB,kCAA0B;UAA1B,0BAA0B;AAC5B;AACA;EACE,4BAAoB;UAApB,oBAAoB;EACpB,kCAA0B;UAA1B,0BAA0B;AAC5B;;AAEA;EACE,gBAAgB;EAChB,gBAAgB;EAChB,iBAAiB;EACjB,kBAAkB;EAClB,4BAAoB;UAApB,oBAAoB;EACpB,kCAA0B;UAA1B,0BAA0B;;AAE5B;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,OAAO;EACP,UAAU;EACV,UAAU;EACV,+BAAuB;UAAvB,uBAAuB;EACvB,2BAAmB;UAAnB,mBAAmB;EACnB,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,oBAAoB;;AAEtB;AACA;EACE,2BAAmB;UAAnB,mBAAmB;EACnB,iBAAiB;EACjB,gBAAgB;EAChB,6BAA6B;EAC7B,uBAAuB;EACvB,oBAAoB;EACpB,kCAAkC;EAClC,eAAe;EACf,oBAAoB;EACpB,4BAA4B;EAC5B,kCAA0B;UAA1B,0BAA0B;AAC5B;;AAEA;;EAEE,kCAAkC;EAClC,wBAAwB;AAC1B;AACA;;EAEE,kCAAkC;AACpC;;AAEA;EACE,yBAAyB;AAC3B;;;AAGA,gBAAgB;;;AAGhB;IACI;MACE,gBAAgB;IAClB;IACA;MACE,aAAa;IACf;;AAEJ;;AAEA;EACE;IACE,qBAAa;IAAb,aAAa;;EAEf;AACF;;;AAGA;EACE;IACE,iFAAmF;EACrF;EACA;IACE,gBAAgB;EAClB;;EAEA;IACE,gBAAgB;IAChB,kBAAkB;IAClB,cAAc;IACd,UAAU;EACZ;EACA;IACE,iBAAiB;IACjB,gBAAgB;;EAElB;EACA;IACE,oBAAoB;EACtB;EACA;IACE,iBAAiB;EACnB;;;AAGF;;;;AAIA;EACE;IACE,aAAa;EACf;AACF;;AAEA;;EAEE;IACE,6BAA6B;EAC/B;EACA;IACE,6BAA6B;EAC/B;EACA;IACE,kBAAkB;EACpB;;EAEA;IACE,iBAAiB;IACjB,4BAA4B;EAC9B;;;AAGF;IACI,gBAAgB;EAClB;AACF;IACI,aAAa;IACb,oCAAoC;EACtC;;AAEF;IACI,eAAe;IACf,mBAAmB;IACnB,gBAAgB;IAChB,kBAAkB;IAClB,iBAAiB;IACjB,gBAAgB;IAChB,cAAc;IACd,gBAAgB;IAChB,oBAAoB;IACpB,WAAW;EACb;EACA;MACI,aAAa;MACb,mBAAmB;MACnB,eAAe;MACf,aAAa;MACb,kBAAkB;MAClB,WAAW;MACX,UAAU;EACd;;AAEF","sourcesContent":["/* Home */\r\n.home-image{\r\n    background: url('../public/background5.png') no-repeat center top/cover;\r\n    width: 100%;\r\n    height: 100vh;\r\n    margin: auto;\r\n    overflow-x: unset;\r\n    overflow: hidden;\r\n}\r\n  \r\n.home-inner{\r\n    display:grid;\r\n    grid-template-columns: 2fr 1fr;\r\n    line-height: 3rem;\r\n}\r\n\r\n.home-text{\r\n  padding: 15rem 10rem;\r\n  color: var(--text-color);\r\n  width: 80%;\r\n}\r\n.large{\r\n  animation: para 2s 1;\r\n  animation-duration: 2200ms;\r\n}\r\n.large-name{\r\n  animation: para 3s 1;\r\n  animation-duration: 2700ms;\r\n}\r\n.name-title{\r\n  animation: para 4s 1;\r\n  animation-duration: 3200ms;\r\n}\r\n\r\n.paragraph{\r\n  font-weight: 300;\r\n  line-height: 1.6;\r\n  word-spacing: 5px;\r\n  padding-right: 15%;\r\n  animation: para 5s 1;\r\n  animation-duration: 3900ms;\r\n\r\n}\r\n\r\n.large-logo{\r\n  position: relative;\r\n  z-index: -1;\r\n  top: 5%;\r\n  right: 15%;\r\n  width: 80%;\r\n  justify-content: center;\r\n  align-items: center;\r\n  overflow: hidden;\r\n  cursor: pointer;\r\n}\r\n\r\n.button-div{\r\n  padding: 1.5rem 0rem;\r\n\r\n}\r\n.work-button{\r\n  align-items: center;\r\n  font-size: 1.5rem;\r\n  font-weight: 500;\r\n  background-color: transparent;\r\n  color: var(--dif-color);\r\n  padding: 0.4rem 2rem;\r\n  border: 2px solid var(--dif-color);\r\n  cursor: pointer;\r\n  animation: para 4s 1;\r\n  -webkit-animation: para 4s 1;\r\n  transition-duration: 900ms;\r\n}\r\n\r\n.work-button:hover, \r\n.contact-button:hover{\r\n  background-color: var(--dif-color);\r\n  color: var(--dif-color2);\r\n}\r\n.burger\r\n.bars:hover{\r\n  background-color: var(--dif-color);\r\n}\r\n\r\n.burger div:nth-child(2):hover{\r\n  background-color: #13385f;\r\n}\r\n\r\n\r\n/* Media query */\r\n\r\n\r\n@media (min-width: 1024px) and (max-width:1300px){\r\n    .home-text{\r\n      overflow-x: auto;\r\n    }\r\n    .large-logo{\r\n      display: none;\r\n    }\r\n    \r\n}\r\n\r\n@media (max-width: 1300px){\r\n  .home-inner{\r\n    display: flex;\r\n    \r\n  }\r\n}\r\n\r\n\r\n@media (max-width: 1024px){\r\n  .home-image{\r\n    background: url('../public/backgroundResponsive.png') no-repeat center bottom/cover;\r\n  }\r\n  .large, .large-name{\r\n    font-size: 7.5vw;\r\n  }\r\n\r\n  .home-text{\r\n    padding-top: 20%;\r\n    padding-left: 5rem;\r\n    font-size: 6vw;\r\n    width: 80%;\r\n  }\r\n  .paragraph{\r\n    padding-right: 5%;\r\n    font-size: 2.8vw;\r\n\r\n  }\r\n  .button-div{\r\n    padding: 1.9rem 0rem;\r\n  }\r\n  .work-button{\r\n    font-size: 1.4rem;\r\n  }\r\n\r\n\r\n}\r\n\r\n\r\n\r\n@media (max-width: 1020px){\r\n  .large-logo{\r\n    display: none;\r\n  }\r\n}\r\n  \r\n@media (max-width: 768px){\r\n\r\n  .large,.large-name{\r\n    font-size: calc(20px + 4.8vw);\r\n  }\r\n  .name-title{\r\n    font-size: calc(20px + 4.8vw);\r\n  }\r\n  .work-button{\r\n    font-size: 1.65rem;\r\n  }\r\n  \r\n  .paragraph{\r\n    padding-right: 5%;\r\n    font-size: calc(7px + 2.5vw);\r\n  }\r\n\r\n\r\n.home-image{\r\n    overflow-x: auto;\r\n  }\r\n.home-inner{\r\n    display: grid;\r\n    grid-template-columns: repeat(1,1fr);\r\n  }\r\n\r\n.home-text{\r\n    margin-right: 0;\r\n    padding-right: 2rem;\r\n    padding-top: 25%;\r\n    padding-left: 4rem;\r\n    padding-bottom: 0;\r\n    margin-bottom: 0;\r\n    font-size: 7vw;\r\n    font-weight: 300;\r\n    word-spacing: normal;\r\n    width: 100%;\r\n  }\r\n  .large-logo{\r\n      display: none;\r\n      margin-left: 7.5rem;\r\n      padding-top: 0%;\r\n      margin-top: 0;\r\n      position: relative;\r\n      z-index: -1;\r\n      width: 70%;\r\n  }\r\n\r\n}\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGUvbGFuZGluZy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDeUY7QUFDTztBQUMxQjtBQUNTO0FBQy9FLDhCQUE4QixtRkFBMkI7QUFDekQseUNBQXlDLHNGQUErQixDQUFDLCtEQUE2QjtBQUN0Ryx5Q0FBeUMsc0ZBQStCLENBQUMsd0VBQTZCO0FBQ3RHO0FBQ0EsOEJBQThCLFFBQVMsNkJBQTZCLCtGQUErRixvQkFBb0Isc0JBQXNCLHFCQUFxQiwwQkFBMEIseUJBQXlCLEtBQUssc0JBQXNCLHFCQUFxQix1Q0FBdUMsMEJBQTBCLEtBQUssbUJBQW1CLDJCQUEyQiwrQkFBK0IsaUJBQWlCLEtBQUssV0FBVyxtQ0FBbUMsbUNBQW1DLHlDQUF5Qyx5Q0FBeUMsS0FBSyxnQkFBZ0IsbUNBQW1DLG1DQUFtQyx5Q0FBeUMseUNBQXlDLEtBQUssZ0JBQWdCLG1DQUFtQyxtQ0FBbUMseUNBQXlDLHlDQUF5QyxLQUFLLG1CQUFtQix1QkFBdUIsdUJBQXVCLHdCQUF3Qix5QkFBeUIsbUNBQW1DLG1DQUFtQyx5Q0FBeUMseUNBQXlDLFNBQVMsb0JBQW9CLHlCQUF5QixrQkFBa0IsY0FBYyxpQkFBaUIsaUJBQWlCLHNDQUFzQyxzQ0FBc0Msa0NBQWtDLGtDQUFrQyx1QkFBdUIsc0JBQXNCLEtBQUssb0JBQW9CLDJCQUEyQixTQUFTLGlCQUFpQixrQ0FBa0Msa0NBQWtDLHdCQUF3Qix1QkFBdUIsb0NBQW9DLDhCQUE4QiwyQkFBMkIseUNBQXlDLHNCQUFzQiwyQkFBMkIsbUNBQW1DLHlDQUF5Qyx5Q0FBeUMsS0FBSyxzREFBc0QseUNBQXlDLCtCQUErQixLQUFLLDJCQUEyQix5Q0FBeUMsS0FBSyx1Q0FBdUMsZ0NBQWdDLEtBQUssMkZBQTJGLG1CQUFtQiwyQkFBMkIsU0FBUyxvQkFBb0Isd0JBQXdCLFNBQVMsYUFBYSxtQ0FBbUMs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QyxLQUFLLHNEQUFzRCx5Q0FBeUMsK0JBQStCLEtBQUssMkJBQTJCLHlDQUF5QyxLQUFLLHVDQUF1QyxnQ0FBZ0MsS0FBSywyRkFBMkYsbUJBQW1CLDJCQUEyQixTQUFTLG9CQUFvQix3QkFBd0IsU0FBUyxhQUFhLG1DQUFtQyxrQkFBa0Isc0JBQXNCLGVBQWUsS0FBSyx1Q0FBdUMsa0JBQWtCLDRGQUE0RixPQUFPLDBCQUEwQix5QkFBeUIsT0FBTyxxQkFBcUIseUJBQXlCLDJCQUEyQix1QkFBdUIsbUJBQW1CLE9BQU8saUJBQWlCLDBCQUEwQix5QkFBeUIsV0FBVyxrQkFBa0IsNkJBQTZCLE9BQU8sbUJBQW1CLDBCQUEwQixPQUFPLGFBQWEsMkNBQTJDLGtCQUFrQixzQkFBc0IsT0FBTyxLQUFLLG9DQUFvQyw2QkFBNkIsc0NBQXNDLE9BQU8sa0JBQWtCLHNDQUFzQyxPQUFPLG1CQUFtQiwyQkFBMkIsT0FBTyx1QkFBdUIsMEJBQTBCLHFDQUFxQyxPQUFPLHdCQUF3Qix5QkFBeUIsT0FBTyxnQkFBZ0Isc0JBQXNCLDZDQUE2QyxPQUFPLG1CQUFtQix3QkFBd0IsNEJBQTRCLHlCQUF5QiwyQkFBMkIsMEJBQTBCLHlCQUF5Qix1QkFBdUIseUJBQXlCLDZCQUE2QixvQkFBb0IsT0FBTyxrQkFBa0Isd0JBQXdCLDhCQUE4QiwwQkFBMEIsd0JBQXdCLDZCQUE2QixzQkFBc0IscUJBQXFCLE9BQU8sU0FBUywyQkFBMkI7QUFDNy9TO0FBQ2Usc0ZBQXVCLEVBQUMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5kZjQwNGQyOGQ1YzNmMWIxYzkzZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyBmcm9tIFwiLi4vcHVibGljL2JhY2tncm91bmQ1LnBuZ1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fIGZyb20gXCIuLi9wdWJsaWMvYmFja2dyb3VuZFJlc3BvbnNpdmUucG5nXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIEhvbWUgKi9cXHJcXG4uaG9tZS1pbWFnZXtcXHJcXG4gICAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBuby1yZXBlYXQgY2VudGVyIHRvcC9jb3ZlcjtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgb3ZlcmZsb3cteDogdW5zZXQ7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcbiAgXFxyXFxuLmhvbWUtaW5uZXJ7XFxyXFxuICAgIGRpc3BsYXk6Z3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyO1xcclxcbiAgICBsaW5lLWhlaWdodDogM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWUtdGV4dHtcXHJcXG4gIHBhZGRpbmc6IDE1cmVtIDEwcmVtO1xcclxcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG59XFxyXFxuLmxhcmdle1xcclxcbiAgLXdlYmtpdC1hbmltYXRpb246IHBhcmEgMnMgMTtcXHJcXG4gICAgICAgICAgYW5pbWF0aW9uOiBwYXJhIDJzIDE7XFxyXFxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMjIwMG1zO1xcclxcbiAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDIyMDBtcztcXHJcXG59XFxyXFxuLmxhcmdlLW5hbWV7XFxyXFxuICAtd2Via2l0LWFuaW1hdGlvbjogcGFyYSAzcyAxO1xcclxcbiAgICAgICAgICBhbmltYXRpb246IHBhcmEgM3MgMTtcXHJcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAyNzAwbXM7XFxyXFxuICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMjcwMG1zO1xcclxcbn1cXHJcXG4ubmFtZS10aXRsZXtcXHJcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBwYXJhIDRzIDE7XFxyXFxuICAgICAgICAgIGFuaW1hdGlvbjogcGFyYSA0cyAxO1xcclxcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDMyMDBtcztcXHJcXG4gICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAzMjAwbXM7XFxyXFxufVxcclxcblxcclxcbi5wYXJhZ3JhcGh7XFxyXFxuICBmb250LXdlaWdodDogMzAwO1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuNjtcXHJcXG4gIHdvcmQtc3BhY2luZzogNXB4O1xcclxcbiAgcGFkZGluZy1yaWdodDogMTUlO1xcclxcbiAgLXdlYmtpdC1hbmltYXRpb246IHBhcmEgNXMgMTtcXHJcXG4gICAgICAgICAgYW5pbWF0aW9uOiBwYXJhIDVzIDE7XFxyXFxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMzkwMG1zO1xcclxcbiAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDM5MDBtcztcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLmxhcmdlLWxvZ297XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB6LWluZGV4OiAtMTtcXHJcXG4gIHRvcDogNSU7XFxyXFxuICByaWdodDogMTUlO1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG4gIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbi1kaXZ7XFxyXFxuICBwYWRkaW5nOiAxLjVyZW0gMHJlbTtcXHJcXG5cXHJcXG59XFxyXFxuLndvcmstYnV0dG9ue1xcclxcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBjb2xvcjogdmFyKC0tZGlmLWNvbG9yKTtcXHJcXG4gIHBhZGRpbmc6IDAuNHJlbSAycmVtO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZGlmLWNvbG9yKTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGFuaW1hdGlvbjogcGFyYSA0cyAxO1xcclxcbiAgLXdlYmtpdC1hbmltYXRpb246IHBhcmEgNHMgMTtcXHJcXG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogOTAwbXM7XFxyXFxuICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDkwMG1zO1xcclxcbn1cXHJcXG5cXHJcXG4ud29yay1idXR0b246aG92ZXIsIFxcclxcbi5jb250YWN0LWJ1dHRvbjpob3ZlcntcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRpZi1jb2xvcik7XFxyXFxuICBjb2xvcjogdmFyKC0tZGlmLWNvbG9yMik7XFxyXFxufVxcclxcbi5idXJnZXJcXHJcXG4uYmFyczpob3ZlcntcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRpZi1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5idXJnZXIgZGl2Om50aC1jaGlsZCgyKTpob3ZlcntcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMzM4NWY7XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIE1lZGlhIHF1ZXJ5ICovXFxyXFxuXFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkgYW5kIChtYXgtd2lkdGg6MTMwMHB4KXtcXHJcXG4gICAgLmhvbWUtdGV4dHtcXHJcXG4gICAgICBvdmVyZmxvdy14OiBhdXRvO1xcclxcbiAgICB9XFxyXFxuICAgIC5sYXJnZS1sb2dve1xcclxcbiAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMzAwcHgpe1xcclxcbiAgLmhvbWUtaW5uZXJ7XFxyXFxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgXFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpe1xcclxcbiAgLmhvbWUtaW1hZ2V7XFxyXFxuICAgIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIikgbm8tcmVwZWF0IGNlbnRlciBib3R0b20vY292ZXI7XFxyXFxuICB9XFxyXFxuICAubGFyZ2UsIC5sYXJnZS1uYW1le1xcclxcbiAgICBmb250LXNpemU6IDcuNXZ3O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmhvbWUtdGV4dHtcXHJcXG4gICAgcGFkZGluZy10b3A6IDIwJTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiA1cmVtO1xcclxcbiAgICBmb250LXNpemU6IDZ2dztcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG4gIH1cXHJcXG4gIC5wYXJhZ3JhcGh7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDUlO1xcclxcbiAgICBmb250LXNpemU6IDIuOHZ3O1xcclxcblxcclxcbiAgfVxcclxcbiAgLmJ1dHRvbi1kaXZ7XFxyXFxuICAgIHBhZGRpbmc6IDEuOXJlbSAwcmVtO1xcclxcbiAgfVxcclxcbiAgLndvcmstYnV0dG9ue1xcclxcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjBweCl7XFxyXFxuICAubGFyZ2UtbG9nb3tcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuICBcXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpe1xcclxcblxcclxcbiAgLmxhcmdlLC5sYXJnZS1uYW1le1xcclxcbiAgICBmb250LXNpemU6IGNhbGMoMjBweCArIDQuOHZ3KTtcXHJcXG4gIH1cXHJcXG4gIC5uYW1lLXRpdGxle1xcclxcbiAgICBmb250LXNpemU6IGNhbGMoMjBweCArIDQuOHZ3KTtcXHJcXG4gIH1cXHJcXG4gIC53b3JrLWJ1dHRvbntcXHJcXG4gICAgZm9udC1zaXplOiAxLjY1cmVtO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAucGFyYWdyYXBoe1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiA1JTtcXHJcXG4gICAgZm9udC1zaXplOiBjYWxjKDdweCArIDIuNXZ3KTtcXHJcXG4gIH1cXHJcXG5cXHJcXG5cXHJcXG4uaG9tZS1pbWFnZXtcXHJcXG4gICAgb3ZlcmZsb3cteDogYXV0bztcXHJcXG4gIH1cXHJcXG4uaG9tZS1pbm5lcntcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwxZnIpO1xcclxcbiAgfVxcclxcblxcclxcbi5ob21lLXRleHR7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMDtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMnJlbTtcXHJcXG4gICAgcGFkZGluZy10b3A6IDI1JTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiA0cmVtO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcXHJcXG4gICAgZm9udC1zaXplOiA3dnc7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxuICAgIHdvcmQtc3BhY2luZzogbm9ybWFsO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gIH1cXHJcXG4gIC5sYXJnZS1sb2dve1xcclxcbiAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgICAgbWFyZ2luLWxlZnQ6IDcuNXJlbTtcXHJcXG4gICAgICBwYWRkaW5nLXRvcDogMCU7XFxyXFxuICAgICAgbWFyZ2luLXRvcDogMDtcXHJcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgICAgei1pbmRleDogLTE7XFxyXFxuICAgICAgd2lkdGg6IDcwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3N0eWxlL2xhbmRpbmcuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLFNBQVM7QUFDVDtJQUNJLDhFQUF1RTtJQUN2RSxXQUFXO0lBQ1gsYUFBYTtJQUNiLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLDhCQUE4QjtJQUM5QixpQkFBaUI7QUFDckI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsd0JBQXdCO0VBQ3hCLFVBQVU7QUFDWjtBQUNBO0VBQ0UsNEJBQW9CO1VBQXBCLG9CQUFvQjtFQUNwQixrQ0FBMEI7VUFBMUIsMEJBQTBCO0FBQzVCO0FBQ0E7RUFDRSw0QkFBb0I7VUFBcEIsb0JBQW9CO0VBQ3BCLGtDQUEwQjtVQUExQiwwQkFBMEI7QUFDNUI7QUFDQTtFQUNFLDRCQUFvQjtVQUFwQixvQkFBb0I7RUFDcEIsa0NBQTBCO1VBQTFCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQiw0QkFBb0I7VUFBcEIsb0JBQW9CO0VBQ3BCLGtDQUEwQjtVQUExQiwwQkFBMEI7O0FBRTVCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxPQUFPO0VBQ1AsVUFBVTtFQUNWLFVBQVU7RUFDViwrQkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLDJCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxvQkFBb0I7O0FBRXRCO0FBQ0E7RUFDRSwyQkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsNkJBQTZCO0VBQzdCLHVCQUF1QjtFQUN2QixvQkFBb0I7RUFDcEIsa0NBQWtDO0VBQ2xDLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIsNEJBQTRCO0VBQzVCLGtDQUEwQjtVQUExQiwwQkFBMEI7QUFDNUI7O0FBRUE7O0VBRUUsa0NBQWtDO0VBQ2xDLHdCQUF3QjtBQUMxQjtBQUNBOztFQUVFLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7O0FBR0EsZ0JBQWdCOzs7QUFHaEI7SUFDSTtNQUNFLGdCQUFnQjtJQUNsQjtJQUNBO01BQ0UsYUFBYTtJQUNmOztBQUVKOztBQUVBO0VBQ0U7SUFDRSxxQkFBYTtJQUFiLGFBQWE7O0VBRWY7QUFDRjs7O0FBR0E7RUFDRTtJQUNFLGlGQUFtRjtFQUNyRjtFQUNBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsVUFBVTtFQUNaO0VBQ0E7SUFDRSxpQkFBaUI7SUFDakIsZ0JBQWdCOztFQUVsQjtFQUNBO0lBQ0Usb0JBQW9CO0VBQ3RCO0VBQ0E7SUFDRSxpQkFBaUI7RUFDbkI7OztBQUdGOzs7O0FBSUE7RUFDRTtJQUNFLGFBQWE7RUFDZjtBQUNGOztBQUVBOztFQUVFO0lBQ0UsNkJBQTZCO0VBQy9CO0VBQ0E7SUFDRSw2QkFBNkI7RUFDL0I7RUFDQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQiw0QkFBNEI7RUFDOUI7OztBQUdGO0lBQ0ksZ0JBQWdCO0VBQ2xCO0FBQ0Y7SUFDSSxhQUFhO0lBQ2Isb0NBQW9DO0VBQ3RDOztBQUVGO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsV0FBVztFQUNiO0VBQ0E7TUFDSSxhQUFhO01BQ2IsbUJBQW1CO01BQ25CLGVBQWU7TUFDZixhQUFhO01BQ2Isa0JBQWtCO01BQ2xCLFdBQVc7TUFDWCxVQUFVO0VBQ2Q7O0FBRUZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogSG9tZSAqL1xcclxcbi5ob21lLWltYWdle1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uL3B1YmxpYy9iYWNrZ3JvdW5kNS5wbmcnKSBuby1yZXBlYXQgY2VudGVyIHRvcC9jb3ZlcjtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgb3ZlcmZsb3cteDogdW5zZXQ7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcbiAgXFxyXFxuLmhvbWUtaW5uZXJ7XFxyXFxuICAgIGRpc3BsYXk6Z3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyO1xcclxcbiAgICBsaW5lLWhlaWdodDogM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWUtdGV4dHtcXHJcXG4gIHBhZGRpbmc6IDE1cmVtIDEwcmVtO1xcclxcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG59XFxyXFxuLmxhcmdle1xcclxcbiAgYW5pbWF0aW9uOiBwYXJhIDJzIDE7XFxyXFxuICBhbmltYXRpb24tZHVyYXRpb246IDIyMDBtcztcXHJcXG59XFxyXFxuLmxhcmdlLW5hbWV7XFxyXFxuICBhbmltYXRpb246IHBhcmEgM3MgMTtcXHJcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMjcwMG1zO1xcclxcbn1cXHJcXG4ubmFtZS10aXRsZXtcXHJcXG4gIGFuaW1hdGlvbjogcGFyYSA0cyAxO1xcclxcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAzMjAwbXM7XFxyXFxufVxcclxcblxcclxcbi5wYXJhZ3JhcGh7XFxyXFxuICBmb250LXdlaWdodDogMzAwO1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuNjtcXHJcXG4gIHdvcmQtc3BhY2luZzogNXB4O1xcclxcbiAgcGFkZGluZy1yaWdodDogMTUlO1xcclxcbiAgYW5pbWF0aW9uOiBwYXJhIDVzIDE7XFxyXFxuICBhbmltYXRpb24tZHVyYXRpb246IDM5MDBtcztcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLmxhcmdlLWxvZ297XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB6LWluZGV4OiAtMTtcXHJcXG4gIHRvcDogNSU7XFxyXFxuICByaWdodDogMTUlO1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5idXR0b24tZGl2e1xcclxcbiAgcGFkZGluZzogMS41cmVtIDByZW07XFxyXFxuXFxyXFxufVxcclxcbi53b3JrLWJ1dHRvbntcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIGNvbG9yOiB2YXIoLS1kaWYtY29sb3IpO1xcclxcbiAgcGFkZGluZzogMC40cmVtIDJyZW07XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1kaWYtY29sb3IpO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYW5pbWF0aW9uOiBwYXJhIDRzIDE7XFxyXFxuICAtd2Via2l0LWFuaW1hdGlvbjogcGFyYSA0cyAxO1xcclxcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogOTAwbXM7XFxyXFxufVxcclxcblxcclxcbi53b3JrLWJ1dHRvbjpob3ZlciwgXFxyXFxuLmNvbnRhY3QtYnV0dG9uOmhvdmVye1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGlmLWNvbG9yKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1kaWYtY29sb3IyKTtcXHJcXG59XFxyXFxuLmJ1cmdlclxcclxcbi5iYXJzOmhvdmVye1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGlmLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1cmdlciBkaXY6bnRoLWNoaWxkKDIpOmhvdmVye1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEzMzg1ZjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogTWVkaWEgcXVlcnkgKi9cXHJcXG5cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSBhbmQgKG1heC13aWR0aDoxMzAwcHgpe1xcclxcbiAgICAuaG9tZS10ZXh0e1xcclxcbiAgICAgIG92ZXJmbG93LXg6IGF1dG87XFxyXFxuICAgIH1cXHJcXG4gICAgLmxhcmdlLWxvZ297XFxyXFxuICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDEzMDBweCl7XFxyXFxuICAuaG9tZS1pbm5lcntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgXFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpe1xcclxcbiAgLmhvbWUtaW1hZ2V7XFxyXFxuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vcHVibGljL2JhY2tncm91bmRSZXNwb25zaXZlLnBuZycpIG5vLXJlcGVhdCBjZW50ZXIgYm90dG9tL2NvdmVyO1xcclxcbiAgfVxcclxcbiAgLmxhcmdlLCAubGFyZ2UtbmFtZXtcXHJcXG4gICAgZm9udC1zaXplOiA3LjV2dztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5ob21lLXRleHR7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAyMCU7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogNXJlbTtcXHJcXG4gICAgZm9udC1zaXplOiA2dnc7XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxuICB9XFxyXFxuICAucGFyYWdyYXBoe1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiA1JTtcXHJcXG4gICAgZm9udC1zaXplOiAyLjh2dztcXHJcXG5cXHJcXG4gIH1cXHJcXG4gIC5idXR0b24tZGl2e1xcclxcbiAgICBwYWRkaW5nOiAxLjlyZW0gMHJlbTtcXHJcXG4gIH1cXHJcXG4gIC53b3JrLWJ1dHRvbntcXHJcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuXFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDIwcHgpe1xcclxcbiAgLmxhcmdlLWxvZ297XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9XFxyXFxufVxcclxcbiAgXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KXtcXHJcXG5cXHJcXG4gIC5sYXJnZSwubGFyZ2UtbmFtZXtcXHJcXG4gICAgZm9udC1zaXplOiBjYWxjKDIwcHggKyA0Ljh2dyk7XFxyXFxuICB9XFxyXFxuICAubmFtZS10aXRsZXtcXHJcXG4gICAgZm9udC1zaXplOiBjYWxjKDIwcHggKyA0Ljh2dyk7XFxyXFxuICB9XFxyXFxuICAud29yay1idXR0b257XFxyXFxuICAgIGZvbnQtc2l6ZTogMS42NXJlbTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLnBhcmFncmFwaHtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogNSU7XFxyXFxuICAgIGZvbnQtc2l6ZTogY2FsYyg3cHggKyAyLjV2dyk7XFxyXFxuICB9XFxyXFxuXFxyXFxuXFxyXFxuLmhvbWUtaW1hZ2V7XFxyXFxuICAgIG92ZXJmbG93LXg6IGF1dG87XFxyXFxuICB9XFxyXFxuLmhvbWUtaW5uZXJ7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsMWZyKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4uaG9tZS10ZXh0e1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDJyZW07XFxyXFxuICAgIHBhZGRpbmctdG9wOiAyNSU7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogNHJlbTtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDA7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogN3Z3O1xcclxcbiAgICBmb250LXdlaWdodDogMzAwO1xcclxcbiAgICB3b3JkLXNwYWNpbmc6IG5vcm1hbDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICB9XFxyXFxuICAubGFyZ2UtbG9nb3tcXHJcXG4gICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICAgIG1hcmdpbi1sZWZ0OiA3LjVyZW07XFxyXFxuICAgICAgcGFkZGluZy10b3A6IDAlO1xcclxcbiAgICAgIG1hcmdpbi10b3A6IDA7XFxyXFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAgIHotaW5kZXg6IC0xO1xcclxcbiAgICAgIHdpZHRoOiA3MCU7XFxyXFxuICB9XFxyXFxuXFxyXFxufVxcclxcblxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwic291cmNlUm9vdCI6IiJ9