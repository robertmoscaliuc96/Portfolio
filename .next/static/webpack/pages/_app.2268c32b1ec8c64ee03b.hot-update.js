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
___CSS_LOADER_EXPORT___.push([module.i, "\r\n.about-image{\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat center top/cover;\r\n    width: 100%;\r\n    height: 100vh;\r\n  }\r\n\r\n\r\n/* About */\r\n.about-inner{\r\n    display: grid;\r\n    grid-template-columns: 2fr 1fr;\r\n    -webkit-transition-duration: 300ms;\r\n            transition-duration: 300ms;\r\n    animation: para 2s 1;\r\n    -webkit-animation: para 3s 1;\r\n    \r\n  }\r\n  .about-text{\r\n    margin-top: 15rem;\r\n    margin-left: 10rem;\r\n    margin-right: 5rem;\r\n    color: var(--text-color);\r\n  }\r\n  .map-inner{\r\n    height: 100vh;\r\n    background-color: white;\r\n  }\r\n  \r\n  .paragraph-about{\r\n    font-weight: 300;\r\n    line-height: 2rem;\r\n    word-spacing: 5px;\r\n    -webkit-animation: para 2s 1;\r\n            animation: para 2s 1;\r\n    margin-left: ;\r\n    margin-bottom: 2rem;\r\n  \r\n  \r\n  }\r\n  .about-text h3{\r\n    color: var(--dif-color);\r\n  }\r\n  .large-about{\r\n    color:var(--dif-color);\r\n    padding-bottom: 2rem;\r\n \r\n  }\r\n  \r\n  \r\n  .marker-box{\r\n    color: var(--text-color);\r\n    font-size: 1rem;\r\n    padding-left: 20px;\r\n    padding-bottom: 14px;\r\n    background-color: var(--light-dark);\r\n    width: 330px;\r\n    border-bottom-right-radius: 18px;\r\n    border-top-left-radius: 18px;\r\n    border-top-right-radius: 18px;\r\n  }\r\n  .marker-name {\r\n    display: -webkit-flex;\r\n    display: flex;\r\n    padding-top: 1rem;\r\n    letter-spacing: 1.5px;\r\n    font-weight: 300;\r\n  }\r\n  .marker-name i{\r\n    color: var(--dif-color);\r\n    font-size: 1.4rem;\r\n  }\r\n\r\n  .contact-actions{\r\n    display: -webkit-flex;\r\n    display: flex;\r\n    position: relative;\r\n    -webkit-justify-content: center;\r\n            justify-content: center;\r\n    -webkit-align-items: center;\r\n            align-items: center;\r\n    grid-gap: 5vw;\r\n    gap: 5vw;\r\n\r\n    \r\n  }\r\n  \r\n  .contact-button{\r\n    margin-top: 1rem;\r\n    margin-left: 1rem;\r\n  }\r\n  .about-icon {\r\n    font-size: 4rem;\r\n    position: relative;\r\n    -webkit-justify-content: center;\r\n            justify-content: center;\r\n    -webkit-align-items: center;\r\n            align-items: center;\r\n  }\r\n  .about-icon-title{\r\n    padding-right: 5rem;\r\n  }\r\n\r\n  .icon-about {\r\n    font-size: 4rem;\r\n    position: relative;\r\n    -webkit-justify-content: center;\r\n            justify-content: center;\r\n    -webkit-align-items: center;\r\n            align-items: center;\r\n    color: lightcoral;\r\n    margin-left: 3rem;\r\n  }\r\n  .about-icon-title{\r\n    font-size: 2rem;\r\n    font-weight: 300;\r\n    text-align: center;\r\n  }\r\n  \r\n\r\n  \r\n@media (max-width: 768px){\r\n\r\n    .about-inner{\r\n      grid-template-columns: repeat(1,1fr);\r\n      overflow-x: scroll;\r\n    }\r\n    .map-inner{\r\n      display: none;\r\n    }\r\n    .about-text{\r\n      margin: 30% 5%;\r\n    }\r\n    .large-about{\r\n      font-size: 3.2rem;\r\n    }\r\n    .paragraph-about{\r\n      font-size: 1.3rem;\r\n    }\r\n  \r\n    .about-inner{\r\n      line-height: 2.5rem;\r\n    }\r\n    .map-inner{\r\n      width: 5rem;\r\n    }  \r\n    .contact-form input, textarea {\r\n      width: 90%;\r\n    }\r\n    .contact-form textarea {\r\n      width: 90%;\r\n    }\r\n\r\n    .skills-info{\r\n      line-height: 1.1rem;\r\n    }\r\n    .contact-button{\r\n      margin-left: 1rem;\r\n    }\r\n  \r\n  }\r\n  @media (min-width: 480px){\r\n  \r\n    .skills-info{\r\n      line-height: 1rem;\r\n    }\r\n    \r\n  }\r\n  ", "",{"version":3,"sources":["webpack://style/about.css"],"names":[],"mappings":";AACA;IACI,8EAAuE;IACvE,WAAW;IACX,aAAa;EACf;;;AAGF,UAAU;AACV;IACI,aAAa;IACb,8BAA8B;IAC9B,kCAA0B;YAA1B,0BAA0B;IAC1B,oBAAoB;IACpB,4BAA4B;;EAE9B;EACA;IACE,iBAAiB;IACjB,kBAAkB;IAClB,kBAAkB;IAClB,wBAAwB;EAC1B;EACA;IACE,aAAa;IACb,uBAAuB;EACzB;;EAEA;IACE,gBAAgB;IAChB,iBAAiB;IACjB,iBAAiB;IACjB,4BAAoB;YAApB,oBAAoB;IACpB,aAAa;IACb,mBAAmB;;;EAGrB;EACA;IACE,uBAAuB;EACzB;EACA;IACE,sBAAsB;IACtB,oBAAoB;;EAEtB;;;EAGA;IACE,wBAAwB;IACxB,eAAe;IACf,kBAAkB;IAClB,oBAAoB;IACpB,mCAAmC;IACnC,YAAY;IACZ,gCAAgC;IAChC,4BAA4B;IAC5B,6BAA6B;EAC/B;EACA;IACE,qBAAa;IAAb,aAAa;IACb,iBAAiB;IACjB,qBAAqB;IACrB,gBAAgB;EAClB;EACA;IACE,uBAAuB;IACvB,iBAAiB;EACnB;;EAEA;IACE,qBAAa;IAAb,aAAa;IACb,kBAAkB;IAClB,+BAAuB;YAAvB,uBAAuB;IACvB,2BAAmB;YAAnB,mBAAmB;IACnB,aAAQ;IAAR,QAAQ;;;EAGV;;EAEA;IACE,gBAAgB;IAChB,iBAAiB;EACnB;EACA;IACE,eAAe;IACf,kBAAkB;IAClB,+BAAuB;YAAvB,uBAAuB;IACvB,2BAAmB;YAAnB,mBAAmB;EACrB;EACA;IACE,mBAAmB;EACrB;;EAEA;IACE,eAAe;IACf,kBAAkB;IAClB,+BAAuB;YAAvB,uBAAuB;IACvB,2BAAmB;YAAnB,mBAAmB;IACnB,iBAAiB;IACjB,iBAAiB;EACnB;EACA;IACE,eAAe;IACf,gBAAgB;IAChB,kBAAkB;EACpB;;;;AAIF;;IAEI;MACE,oCAAoC;MACpC,kBAAkB;IACpB;IACA;MACE,aAAa;IACf;IACA;MACE,cAAc;IAChB;IACA;MACE,iBAAiB;IACnB;IACA;MACE,iBAAiB;IACnB;;IAEA;MACE,mBAAmB;IACrB;IACA;MACE,WAAW;IACb;IACA;MACE,UAAU;IACZ;IACA;MACE,UAAU;IACZ;;IAEA;MACE,mBAAmB;IACrB;IACA;MACE,iBAAiB;IACnB;;EAEF;EACA;;IAEE;MACE,iBAAiB;IACnB;;EAEF","sourcesContent":["\r\n.about-image{\r\n    background: url('../public/background5.png') no-repeat center top/cover;\r\n    width: 100%;\r\n    height: 100vh;\r\n  }\r\n\r\n\r\n/* About */\r\n.about-inner{\r\n    display: grid;\r\n    grid-template-columns: 2fr 1fr;\r\n    transition-duration: 300ms;\r\n    animation: para 2s 1;\r\n    -webkit-animation: para 3s 1;\r\n    \r\n  }\r\n  .about-text{\r\n    margin-top: 15rem;\r\n    margin-left: 10rem;\r\n    margin-right: 5rem;\r\n    color: var(--text-color);\r\n  }\r\n  .map-inner{\r\n    height: 100vh;\r\n    background-color: white;\r\n  }\r\n  \r\n  .paragraph-about{\r\n    font-weight: 300;\r\n    line-height: 2rem;\r\n    word-spacing: 5px;\r\n    animation: para 2s 1;\r\n    margin-left: ;\r\n    margin-bottom: 2rem;\r\n  \r\n  \r\n  }\r\n  .about-text h3{\r\n    color: var(--dif-color);\r\n  }\r\n  .large-about{\r\n    color:var(--dif-color);\r\n    padding-bottom: 2rem;\r\n \r\n  }\r\n  \r\n  \r\n  .marker-box{\r\n    color: var(--text-color);\r\n    font-size: 1rem;\r\n    padding-left: 20px;\r\n    padding-bottom: 14px;\r\n    background-color: var(--light-dark);\r\n    width: 330px;\r\n    border-bottom-right-radius: 18px;\r\n    border-top-left-radius: 18px;\r\n    border-top-right-radius: 18px;\r\n  }\r\n  .marker-name {\r\n    display: flex;\r\n    padding-top: 1rem;\r\n    letter-spacing: 1.5px;\r\n    font-weight: 300;\r\n  }\r\n  .marker-name i{\r\n    color: var(--dif-color);\r\n    font-size: 1.4rem;\r\n  }\r\n\r\n  .contact-actions{\r\n    display: flex;\r\n    position: relative;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 5vw;\r\n\r\n    \r\n  }\r\n  \r\n  .contact-button{\r\n    margin-top: 1rem;\r\n    margin-left: 1rem;\r\n  }\r\n  .about-icon {\r\n    font-size: 4rem;\r\n    position: relative;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n  .about-icon-title{\r\n    padding-right: 5rem;\r\n  }\r\n\r\n  .icon-about {\r\n    font-size: 4rem;\r\n    position: relative;\r\n    justify-content: center;\r\n    align-items: center;\r\n    color: lightcoral;\r\n    margin-left: 3rem;\r\n  }\r\n  .about-icon-title{\r\n    font-size: 2rem;\r\n    font-weight: 300;\r\n    text-align: center;\r\n  }\r\n  \r\n\r\n  \r\n@media (max-width: 768px){\r\n\r\n    .about-inner{\r\n      grid-template-columns: repeat(1,1fr);\r\n      overflow-x: scroll;\r\n    }\r\n    .map-inner{\r\n      display: none;\r\n    }\r\n    .about-text{\r\n      margin: 30% 5%;\r\n    }\r\n    .large-about{\r\n      font-size: 3.2rem;\r\n    }\r\n    .paragraph-about{\r\n      font-size: 1.3rem;\r\n    }\r\n  \r\n    .about-inner{\r\n      line-height: 2.5rem;\r\n    }\r\n    .map-inner{\r\n      width: 5rem;\r\n    }  \r\n    .contact-form input, textarea {\r\n      width: 90%;\r\n    }\r\n    .contact-form textarea {\r\n      width: 90%;\r\n    }\r\n\r\n    .skills-info{\r\n      line-height: 1.1rem;\r\n    }\r\n    .contact-button{\r\n      margin-left: 1rem;\r\n    }\r\n  \r\n  }\r\n  @media (min-width: 480px){\r\n  \r\n    .skills-info{\r\n      line-height: 1rem;\r\n    }\r\n    \r\n  }\r\n  "],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGUvYWJvdXQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUN5RjtBQUNPO0FBQzFCO0FBQ3RFLDhCQUE4QixtRkFBMkI7QUFDekQseUNBQXlDLHNGQUErQixDQUFDLCtEQUE2QjtBQUN0RztBQUNBLDhCQUE4QixRQUFTLG9CQUFvQiwrRkFBK0Ysb0JBQW9CLHNCQUFzQixPQUFPLHdDQUF3QyxzQkFBc0IsdUNBQXVDLDJDQUEyQywyQ0FBMkMsNkJBQTZCLHFDQUFxQyxlQUFlLGtCQUFrQiwwQkFBMEIsMkJBQTJCLDJCQUEyQixpQ0FBaUMsT0FBTyxpQkFBaUIsc0JBQXNCLGdDQUFnQyxPQUFPLDZCQUE2Qix5QkFBeUIsMEJBQTBCLDBCQUEwQixxQ0FBcUMscUNBQXFDLHNCQUFzQiw0QkFBNEIsbUJBQW1CLHFCQUFxQixnQ0FBZ0MsT0FBTyxtQkFBbUIsK0JBQStCLDZCQUE2QixZQUFZLDhCQUE4QixpQ0FBaUMsd0JBQXdCLDJCQUEyQiw2QkFBNkIsNENBQTRDLHFCQUFxQix5Q0FBeUMscUNBQXFDLHNDQUFzQyxPQUFPLG9CQUFvQiw4QkFBOEIsc0JBQXNCLDBCQUEwQiw4QkFBOEIseUJBQXlCLE9BQU8scUJBQXFCLGdDQUFnQywwQkFBMEIsT0FBTywyQkFBMkIsOEJBQThCLHNCQUFzQiwyQkFBMkIsd0NBQXdDLHdDQUF3QyxvQ0FBb0Msb0NBQW9DLHNCQUFzQixpQkFBaUIsbUJBQW1CLDRCQUE0Qix5QkFBeUIsMEJBQTBCLE9BQU8sbUJBQW1CLHdCQUF3QiwyQkFBMkIsd0NBQXdDLHdDQUF3QyxvQ0FBb0Msb0NBQW9DLE9BQU8sd0JBQXdCLDRCQUE0QixPQUFPLHVCQUF1Qix3QkFBd0IsMkJBQTJCLHdDQUF3Qyx3Q0FBd0Msb0NBQW9DLG9DQUFvQywwQkFBMEIsMEJBQTBCLE9BQU8sd0JBQXdCLHdCQUF3Qix5QkFBeUIsMkJBQTJC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U0FBUyx3QkFBd0IsNEJBQTRCLFNBQVMsYUFBYSxnQ0FBZ0MsMkJBQTJCLDRCQUE0QixTQUFTLGVBQWUseUJBQXlCO0FBQ25pUTtBQUNlLHNGQUF1QixFQUFDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMjI2OGMzMmIxZWM4YzY0ZWUwM2IuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gZnJvbSBcIi4uL3B1YmxpYy9iYWNrZ3JvdW5kNS5wbmdcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcXHJcXG4uYWJvdXQtaW1hZ2V7XFxyXFxuICAgIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgbm8tcmVwZWF0IGNlbnRlciB0b3AvY292ZXI7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgfVxcclxcblxcclxcblxcclxcbi8qIEFib3V0ICovXFxyXFxuLmFib3V0LWlubmVye1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxZnI7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMzAwbXM7XFxyXFxuICAgICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMzAwbXM7XFxyXFxuICAgIGFuaW1hdGlvbjogcGFyYSAycyAxO1xcclxcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogcGFyYSAzcyAxO1xcclxcbiAgICBcXHJcXG4gIH1cXHJcXG4gIC5hYm91dC10ZXh0e1xcclxcbiAgICBtYXJnaW4tdG9wOiAxNXJlbTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcmVtO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDVyZW07XFxyXFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXHJcXG4gIH1cXHJcXG4gIC5tYXAtaW5uZXJ7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAucGFyYWdyYXBoLWFib3V0e1xcclxcbiAgICBmb250LXdlaWdodDogMzAwO1xcclxcbiAgICBsaW5lLWhlaWdodDogMnJlbTtcXHJcXG4gICAgd29yZC1zcGFjaW5nOiA1cHg7XFxyXFxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBwYXJhIDJzIDE7XFxyXFxuICAgICAgICAgICAgYW5pbWF0aW9uOiBwYXJhIDJzIDE7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiA7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XFxyXFxuICBcXHJcXG4gIFxcclxcbiAgfVxcclxcbiAgLmFib3V0LXRleHQgaDN7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1kaWYtY29sb3IpO1xcclxcbiAgfVxcclxcbiAgLmxhcmdlLWFib3V0e1xcclxcbiAgICBjb2xvcjp2YXIoLS1kaWYtY29sb3IpO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcXHJcXG4gXFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIFxcclxcbiAgLm1hcmtlci1ib3h7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAxNHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1kYXJrKTtcXHJcXG4gICAgd2lkdGg6IDMzMHB4O1xcclxcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMThweDtcXHJcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMThweDtcXHJcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE4cHg7XFxyXFxuICB9XFxyXFxuICAubWFya2VyLW5hbWUge1xcclxcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMS41cHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxuICB9XFxyXFxuICAubWFya2VyLW5hbWUgaXtcXHJcXG4gICAgY29sb3I6IHZhcigtLWRpZi1jb2xvcik7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbnRhY3QtYWN0aW9uc3tcXHJcXG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBncmlkLWdhcDogNXZ3O1xcclxcbiAgICBnYXA6IDV2dztcXHJcXG5cXHJcXG4gICAgXFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5jb250YWN0LWJ1dHRvbntcXHJcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XFxyXFxuICB9XFxyXFxuICAuYWJvdXQtaWNvbiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG4gIC5hYm91dC1pY29uLXRpdGxle1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmljb24tYWJvdXQge1xcclxcbiAgICBmb250LXNpemU6IDRyZW07XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGNvbG9yOiBsaWdodGNvcmFsO1xcclxcbiAgICBtYXJnaW4tbGVmdDogM3JlbTtcXHJcXG4gIH1cXHJcXG4gIC5hYm91dC1pY29uLXRpdGxle1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG4gIFxcclxcblxcclxcbiAgXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KXtcXHJcXG5cXHJcXG4gICAgLmFib3V0LWlubmVye1xcclxcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsMWZyKTtcXHJcXG4gICAgICBvdmVyZmxvdy14OiBzY3JvbGw7XFxyXFxuICAgIH1cXHJcXG4gICAgLm1hcC1pbm5lcntcXHJcXG4gICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICB9XFxyXFxuICAgIC5hYm91dC10ZXh0e1xcclxcbiAgICAgIG1hcmdpbjogMzAlIDUlO1xcclxcbiAgICB9XFxyXFxuICAgIC5sYXJnZS1hYm91dHtcXHJcXG4gICAgICBmb250LXNpemU6IDMuMnJlbTtcXHJcXG4gICAgfVxcclxcbiAgICAucGFyYWdyYXBoLWFib3V0e1xcclxcbiAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbiAgICB9XFxyXFxuICBcXHJcXG4gICAgLmFib3V0LWlubmVye1xcclxcbiAgICAgIGxpbmUtaGVpZ2h0OiAyLjVyZW07XFxyXFxuICAgIH1cXHJcXG4gICAgLm1hcC1pbm5lcntcXHJcXG4gICAgICB3aWR0aDogNXJlbTtcXHJcXG4gICAgfSAgXFxyXFxuICAgIC5jb250YWN0LWZvcm0gaW5wdXQsIHRleHRhcmVhIHtcXHJcXG4gICAgICB3aWR0aDogOTAlO1xcclxcbiAgICB9XFxyXFxuICAgIC5jb250YWN0LWZvcm0gdGV4dGFyZWEge1xcclxcbiAgICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnNraWxscy1pbmZve1xcclxcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjFyZW07XFxyXFxuICAgIH1cXHJcXG4gICAgLmNvbnRhY3QtYnV0dG9ue1xcclxcbiAgICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xcclxcbiAgICB9XFxyXFxuICBcXHJcXG4gIH1cXHJcXG4gIEBtZWRpYSAobWluLXdpZHRoOiA0ODBweCl7XFxyXFxuICBcXHJcXG4gICAgLnNraWxscy1pbmZve1xcclxcbiAgICAgIGxpbmUtaGVpZ2h0OiAxcmVtO1xcclxcbiAgICB9XFxyXFxuICAgIFxcclxcbiAgfVxcclxcbiAgXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3N0eWxlL2Fib3V0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBQ0E7SUFDSSw4RUFBdUU7SUFDdkUsV0FBVztJQUNYLGFBQWE7RUFDZjs7O0FBR0YsVUFBVTtBQUNWO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixrQ0FBMEI7WUFBMUIsMEJBQTBCO0lBQzFCLG9CQUFvQjtJQUNwQiw0QkFBNEI7O0VBRTlCO0VBQ0E7SUFDRSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQix3QkFBd0I7RUFDMUI7RUFDQTtJQUNFLGFBQWE7SUFDYix1QkFBdUI7RUFDekI7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQiw0QkFBb0I7WUFBcEIsb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixtQkFBbUI7OztFQUdyQjtFQUNBO0lBQ0UsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSxzQkFBc0I7SUFDdEIsb0JBQW9COztFQUV0Qjs7O0VBR0E7SUFDRSx3QkFBd0I7SUFDeEIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsbUNBQW1DO0lBQ25DLFlBQVk7SUFDWixnQ0FBZ0M7SUFDaEMsNEJBQTRCO0lBQzVCLDZCQUE2QjtFQUMvQjtFQUNBO0lBQ0UscUJBQWE7SUFBYixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLHVCQUF1QjtJQUN2QixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxxQkFBYTtJQUFiLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsK0JBQXVCO1lBQXZCLHVCQUF1QjtJQUN2QiwyQkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLGFBQVE7SUFBUixRQUFROzs7RUFHVjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsK0JBQXVCO1lBQXZCLHVCQUF1QjtJQUN2QiwyQkFBbUI7WUFBbkIsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLCtCQUF1QjtZQUF2Qix1QkFBdUI7SUFDdkIsMkJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtFQUNwQjs7OztBQUlGOztJQUVJO01BQ0Usb0NBQW9DO01BQ3BDLGtCQUFrQjtJQUNwQjtJQUNBO01BQ0UsYUFBYTtJQUNmO0lBQ0E7TUFDRSxjQUFjO0lBQ2hCO0lBQ0E7TUFDRSxpQkFBaUI7SUFDbkI7SUFDQTtNQUNFLGlCQUFpQjtJQUNuQjs7SUFFQTtNQUNFLG1CQUFtQjtJQUNyQjtJQUNBO01BQ0UsV0FBVztJQUNiO0lBQ0E7TUFDRSxVQUFVO0lBQ1o7SUFDQTtNQUNFLFVBQVU7SUFDWjs7SUFFQTtNQUNFLG1CQUFtQjtJQUNyQjtJQUNBO01BQ0UsaUJBQWlCO0lBQ25COztFQUVGO0VBQ0E7O0lBRUU7TUFDRSxpQkFBaUI7SUFDbkI7O0VBRUZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxyXFxuLmFib3V0LWltYWdle1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uL3B1YmxpYy9iYWNrZ3JvdW5kNS5wbmcnKSBuby1yZXBlYXQgY2VudGVyIHRvcC9jb3ZlcjtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICB9XFxyXFxuXFxyXFxuXFxyXFxuLyogQWJvdXQgKi9cXHJcXG4uYWJvdXQtaW5uZXJ7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDFmcjtcXHJcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMzAwbXM7XFxyXFxuICAgIGFuaW1hdGlvbjogcGFyYSAycyAxO1xcclxcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogcGFyYSAzcyAxO1xcclxcbiAgICBcXHJcXG4gIH1cXHJcXG4gIC5hYm91dC10ZXh0e1xcclxcbiAgICBtYXJnaW4tdG9wOiAxNXJlbTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcmVtO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDVyZW07XFxyXFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXHJcXG4gIH1cXHJcXG4gIC5tYXAtaW5uZXJ7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAucGFyYWdyYXBoLWFib3V0e1xcclxcbiAgICBmb250LXdlaWdodDogMzAwO1xcclxcbiAgICBsaW5lLWhlaWdodDogMnJlbTtcXHJcXG4gICAgd29yZC1zcGFjaW5nOiA1cHg7XFxyXFxuICAgIGFuaW1hdGlvbjogcGFyYSAycyAxO1xcclxcbiAgICBtYXJnaW4tbGVmdDogO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcclxcbiAgXFxyXFxuICBcXHJcXG4gIH1cXHJcXG4gIC5hYm91dC10ZXh0IGgze1xcclxcbiAgICBjb2xvcjogdmFyKC0tZGlmLWNvbG9yKTtcXHJcXG4gIH1cXHJcXG4gIC5sYXJnZS1hYm91dHtcXHJcXG4gICAgY29sb3I6dmFyKC0tZGlmLWNvbG9yKTtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDJyZW07XFxyXFxuIFxcclxcbiAgfVxcclxcbiAgXFxyXFxuICBcXHJcXG4gIC5tYXJrZXItYm94e1xcclxcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMTRweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtZGFyayk7XFxyXFxuICAgIHdpZHRoOiAzMzBweDtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE4cHg7XFxyXFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE4cHg7XFxyXFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxOHB4O1xcclxcbiAgfVxcclxcbiAgLm1hcmtlci1uYW1lIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgcGFkZGluZy10b3A6IDFyZW07XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAxLjVweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG4gIH1cXHJcXG4gIC5tYXJrZXItbmFtZSBpe1xcclxcbiAgICBjb2xvcjogdmFyKC0tZGlmLWNvbG9yKTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29udGFjdC1hY3Rpb25ze1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDV2dztcXHJcXG5cXHJcXG4gICAgXFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5jb250YWN0LWJ1dHRvbntcXHJcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XFxyXFxuICB9XFxyXFxuICAuYWJvdXQtaWNvbiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG4gIC5hYm91dC1pY29uLXRpdGxle1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmljb24tYWJvdXQge1xcclxcbiAgICBmb250LXNpemU6IDRyZW07XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGNvbG9yOiBsaWdodGNvcmFsO1xcclxcbiAgICBtYXJnaW4tbGVmdDogM3JlbTtcXHJcXG4gIH1cXHJcXG4gIC5hYm91dC1pY29uLXRpdGxle1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG4gIFxcclxcblxcclxcbiAgXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KXtcXHJcXG5cXHJcXG4gICAgLmFib3V0LWlubmVye1xcclxcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsMWZyKTtcXHJcXG4gICAgICBvdmVyZmxvdy14OiBzY3JvbGw7XFxyXFxuICAgIH1cXHJcXG4gICAgLm1hcC1pbm5lcntcXHJcXG4gICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICB9XFxyXFxuICAgIC5hYm91dC10ZXh0e1xcclxcbiAgICAgIG1hcmdpbjogMzAlIDUlO1xcclxcbiAgICB9XFxyXFxuICAgIC5sYXJnZS1hYm91dHtcXHJcXG4gICAgICBmb250LXNpemU6IDMuMnJlbTtcXHJcXG4gICAgfVxcclxcbiAgICAucGFyYWdyYXBoLWFib3V0e1xcclxcbiAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbiAgICB9XFxyXFxuICBcXHJcXG4gICAgLmFib3V0LWlubmVye1xcclxcbiAgICAgIGxpbmUtaGVpZ2h0OiAyLjVyZW07XFxyXFxuICAgIH1cXHJcXG4gICAgLm1hcC1pbm5lcntcXHJcXG4gICAgICB3aWR0aDogNXJlbTtcXHJcXG4gICAgfSAgXFxyXFxuICAgIC5jb250YWN0LWZvcm0gaW5wdXQsIHRleHRhcmVhIHtcXHJcXG4gICAgICB3aWR0aDogOTAlO1xcclxcbiAgICB9XFxyXFxuICAgIC5jb250YWN0LWZvcm0gdGV4dGFyZWEge1xcclxcbiAgICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnNraWxscy1pbmZve1xcclxcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjFyZW07XFxyXFxuICAgIH1cXHJcXG4gICAgLmNvbnRhY3QtYnV0dG9ue1xcclxcbiAgICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xcclxcbiAgICB9XFxyXFxuICBcXHJcXG4gIH1cXHJcXG4gIEBtZWRpYSAobWluLXdpZHRoOiA0ODBweCl7XFxyXFxuICBcXHJcXG4gICAgLnNraWxscy1pbmZve1xcclxcbiAgICAgIGxpbmUtaGVpZ2h0OiAxcmVtO1xcclxcbiAgICB9XFxyXFxuICAgIFxcclxcbiAgfVxcclxcbiAgXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJzb3VyY2VSb290IjoiIn0=