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
___CSS_LOADER_EXPORT___.push([module.i, "\r\n.about-image{\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat center top/cover;\r\n    width: 100%;\r\n    height: 100vh;\r\n  }\r\n\r\n\r\n/* About */\r\n.about-inner{\r\n    display: grid;\r\n    grid-template-columns: 2fr 1fr;\r\n    -webkit-transition-duration: 300ms;\r\n            transition-duration: 300ms;\r\n    animation: para 2s 1;\r\n    -webkit-animation: para 3s 1;\r\n    \r\n  }\r\n  .about-text{\r\n    margin-top: 15rem;\r\n    margin-left: 10rem;\r\n    margin-right: 15rem;\r\n    color: var(--text-color);\r\n  }\r\n  .map-inner{\r\n    height: 100vh;\r\n    background-color: white;\r\n  }\r\n  \r\n  .paragraph-about{\r\n    font-weight: 300;\r\n    line-height: 2rem;\r\n    word-spacing: 5px;\r\n    -webkit-animation: para 2s 1;\r\n            animation: para 2s 1;\r\n    \r\n    margin-bottom: 2rem;\r\n  \r\n  \r\n  }\r\n  .about-text h3{\r\n    color: var(--dif-color);\r\n  }\r\n  .large-about{\r\n    padding-bottom: 2rem;\r\n  }\r\n  .large-about::first-letter{\r\n    color: var(--dif-color);\r\n    padding-bottom: 2rem;\r\n  }\r\n  \r\n  \r\n  .marker-box{\r\n    color: var(--text-color);\r\n    font-size: 1rem;\r\n    padding-left: 20px;\r\n    padding-bottom: 14px;\r\n    background-color: var(--light-dark);\r\n    width: 330px;\r\n    border-bottom-right-radius: 18px;\r\n    border-top-left-radius: 18px;\r\n    border-top-right-radius: 18px;\r\n  }\r\n  .marker-name {\r\n    display: -webkit-flex;\r\n    display: flex;\r\n    padding-top: 1rem;\r\n    letter-spacing: 1.5px;\r\n    font-weight: 300;\r\n  }\r\n  .marker-name i{\r\n    color: var(--dif-color);\r\n    font-size: 1.4rem;\r\n  }\r\n\r\n  .contact-actions{\r\n    display: -webkit-flex;\r\n    display: flex;\r\n    position: relative;\r\n    -webkit-justify-content: center;\r\n            justify-content: center;\r\n    -webkit-align-items: center;\r\n            align-items: center;\r\n    grid-gap: 7vw;\r\n    gap: 7vw;\r\n\r\n    \r\n  }\r\n  \r\n  .contact-button{\r\n    margin-top: 1rem;\r\n    margin-left: 1rem;\r\n  }\r\n  .about-icon{\r\n    margin-right: 10rem;\r\n  }\r\n\r\n\r\n  .about-icon i{\r\n    font-size: 4rem;\r\n    position: relative;\r\n    -webkit-justify-content: center;\r\n            justify-content: center;\r\n    -webkit-align-items: center;\r\n            align-items: center;\r\n\r\n    color: var(--dif-color);\r\n  }\r\n\r\n  .icon-about {\r\n    font-size: 4rem;\r\n    position: relative;\r\n    -webkit-justify-content: center;\r\n            justify-content: center;\r\n    -webkit-align-items: center;\r\n            align-items: center;\r\n    color: white;\r\n    margin-left: 3.5rem;\r\n  }\r\n  .about-icon-title{\r\n    font-size: 2rem;\r\n    font-weight: 300;\r\n    text-align: center;\r\n\r\n  }\r\n  \r\n\r\n  \r\n@media (max-width: 768px){\r\n\r\n    .about-inner{\r\n      grid-template-columns: repeat(1,1fr);\r\n      overflow-x: scroll;\r\n    }\r\n    .map-inner{\r\n      display: none;\r\n    }\r\n    .about-text{\r\n      margin: 30% 5%;\r\n    }\r\n    .large-about{\r\n      font-size: 3.2rem;\r\n    }\r\n    .paragraph-about{\r\n      font-size: 1.3rem;\r\n    }\r\n  \r\n    .about-inner{\r\n      line-height: 2.5rem;\r\n    }\r\n    .map-inner{\r\n      width: 5rem;\r\n    }  \r\n    .contact-form input, textarea {\r\n      width: 90%;\r\n    }\r\n    .contact-form textarea {\r\n      width: 90%;\r\n    }\r\n\r\n    .skills-info{\r\n      line-height: 1.1rem;\r\n    }\r\n    .contact-button{\r\n      margin-left: 1rem;\r\n    }\r\n  \r\n  }\r\n  @media (min-width: 480px){\r\n  \r\n    .skills-info{\r\n      line-height: 1rem;\r\n    }\r\n    \r\n  }\r\n  ", "",{"version":3,"sources":["webpack://style/about.css"],"names":[],"mappings":";AACA;IACI,8EAAuE;IACvE,WAAW;IACX,aAAa;EACf;;;AAGF,UAAU;AACV;IACI,aAAa;IACb,8BAA8B;IAC9B,kCAA0B;YAA1B,0BAA0B;IAC1B,oBAAoB;IACpB,4BAA4B;;EAE9B;EACA;IACE,iBAAiB;IACjB,kBAAkB;IAClB,mBAAmB;IACnB,wBAAwB;EAC1B;EACA;IACE,aAAa;IACb,uBAAuB;EACzB;;EAEA;IACE,gBAAgB;IAChB,iBAAiB;IACjB,iBAAiB;IACjB,4BAAoB;YAApB,oBAAoB;;IAEpB,mBAAmB;;;EAGrB;EACA;IACE,uBAAuB;EACzB;EACA;IACE,oBAAoB;EACtB;EACA;IACE,uBAAuB;IACvB,oBAAoB;EACtB;;;EAGA;IACE,wBAAwB;IACxB,eAAe;IACf,kBAAkB;IAClB,oBAAoB;IACpB,mCAAmC;IACnC,YAAY;IACZ,gCAAgC;IAChC,4BAA4B;IAC5B,6BAA6B;EAC/B;EACA;IACE,qBAAa;IAAb,aAAa;IACb,iBAAiB;IACjB,qBAAqB;IACrB,gBAAgB;EAClB;EACA;IACE,uBAAuB;IACvB,iBAAiB;EACnB;;EAEA;IACE,qBAAa;IAAb,aAAa;IACb,kBAAkB;IAClB,+BAAuB;YAAvB,uBAAuB;IACvB,2BAAmB;YAAnB,mBAAmB;IACnB,aAAQ;IAAR,QAAQ;;;EAGV;;EAEA;IACE,gBAAgB;IAChB,iBAAiB;EACnB;EACA;IACE,mBAAmB;EACrB;;;EAGA;IACE,eAAe;IACf,kBAAkB;IAClB,+BAAuB;YAAvB,uBAAuB;IACvB,2BAAmB;YAAnB,mBAAmB;;IAEnB,uBAAuB;EACzB;;EAEA;IACE,eAAe;IACf,kBAAkB;IAClB,+BAAuB;YAAvB,uBAAuB;IACvB,2BAAmB;YAAnB,mBAAmB;IACnB,YAAY;IACZ,mBAAmB;EACrB;EACA;IACE,eAAe;IACf,gBAAgB;IAChB,kBAAkB;;EAEpB;;;;AAIF;;IAEI;MACE,oCAAoC;MACpC,kBAAkB;IACpB;IACA;MACE,aAAa;IACf;IACA;MACE,cAAc;IAChB;IACA;MACE,iBAAiB;IACnB;IACA;MACE,iBAAiB;IACnB;;IAEA;MACE,mBAAmB;IACrB;IACA;MACE,WAAW;IACb;IACA;MACE,UAAU;IACZ;IACA;MACE,UAAU;IACZ;;IAEA;MACE,mBAAmB;IACrB;IACA;MACE,iBAAiB;IACnB;;EAEF;EACA;;IAEE;MACE,iBAAiB;IACnB;;EAEF","sourcesContent":["\r\n.about-image{\r\n    background: url('../public/background5.png') no-repeat center top/cover;\r\n    width: 100%;\r\n    height: 100vh;\r\n  }\r\n\r\n\r\n/* About */\r\n.about-inner{\r\n    display: grid;\r\n    grid-template-columns: 2fr 1fr;\r\n    transition-duration: 300ms;\r\n    animation: para 2s 1;\r\n    -webkit-animation: para 3s 1;\r\n    \r\n  }\r\n  .about-text{\r\n    margin-top: 15rem;\r\n    margin-left: 10rem;\r\n    margin-right: 15rem;\r\n    color: var(--text-color);\r\n  }\r\n  .map-inner{\r\n    height: 100vh;\r\n    background-color: white;\r\n  }\r\n  \r\n  .paragraph-about{\r\n    font-weight: 300;\r\n    line-height: 2rem;\r\n    word-spacing: 5px;\r\n    animation: para 2s 1;\r\n    \r\n    margin-bottom: 2rem;\r\n  \r\n  \r\n  }\r\n  .about-text h3{\r\n    color: var(--dif-color);\r\n  }\r\n  .large-about{\r\n    padding-bottom: 2rem;\r\n  }\r\n  .large-about::first-letter{\r\n    color: var(--dif-color);\r\n    padding-bottom: 2rem;\r\n  }\r\n  \r\n  \r\n  .marker-box{\r\n    color: var(--text-color);\r\n    font-size: 1rem;\r\n    padding-left: 20px;\r\n    padding-bottom: 14px;\r\n    background-color: var(--light-dark);\r\n    width: 330px;\r\n    border-bottom-right-radius: 18px;\r\n    border-top-left-radius: 18px;\r\n    border-top-right-radius: 18px;\r\n  }\r\n  .marker-name {\r\n    display: flex;\r\n    padding-top: 1rem;\r\n    letter-spacing: 1.5px;\r\n    font-weight: 300;\r\n  }\r\n  .marker-name i{\r\n    color: var(--dif-color);\r\n    font-size: 1.4rem;\r\n  }\r\n\r\n  .contact-actions{\r\n    display: flex;\r\n    position: relative;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 7vw;\r\n\r\n    \r\n  }\r\n  \r\n  .contact-button{\r\n    margin-top: 1rem;\r\n    margin-left: 1rem;\r\n  }\r\n  .about-icon{\r\n    margin-right: 10rem;\r\n  }\r\n\r\n\r\n  .about-icon i{\r\n    font-size: 4rem;\r\n    position: relative;\r\n    justify-content: center;\r\n    align-items: center;\r\n\r\n    color: var(--dif-color);\r\n  }\r\n\r\n  .icon-about {\r\n    font-size: 4rem;\r\n    position: relative;\r\n    justify-content: center;\r\n    align-items: center;\r\n    color: white;\r\n    margin-left: 3.5rem;\r\n  }\r\n  .about-icon-title{\r\n    font-size: 2rem;\r\n    font-weight: 300;\r\n    text-align: center;\r\n\r\n  }\r\n  \r\n\r\n  \r\n@media (max-width: 768px){\r\n\r\n    .about-inner{\r\n      grid-template-columns: repeat(1,1fr);\r\n      overflow-x: scroll;\r\n    }\r\n    .map-inner{\r\n      display: none;\r\n    }\r\n    .about-text{\r\n      margin: 30% 5%;\r\n    }\r\n    .large-about{\r\n      font-size: 3.2rem;\r\n    }\r\n    .paragraph-about{\r\n      font-size: 1.3rem;\r\n    }\r\n  \r\n    .about-inner{\r\n      line-height: 2.5rem;\r\n    }\r\n    .map-inner{\r\n      width: 5rem;\r\n    }  \r\n    .contact-form input, textarea {\r\n      width: 90%;\r\n    }\r\n    .contact-form textarea {\r\n      width: 90%;\r\n    }\r\n\r\n    .skills-info{\r\n      line-height: 1.1rem;\r\n    }\r\n    .contact-button{\r\n      margin-left: 1rem;\r\n    }\r\n  \r\n  }\r\n  @media (min-width: 480px){\r\n  \r\n    .skills-info{\r\n      line-height: 1rem;\r\n    }\r\n    \r\n  }\r\n  "],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGUvYWJvdXQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUN5RjtBQUNPO0FBQzFCO0FBQ3RFLDhCQUE4QixtRkFBMkI7QUFDekQseUNBQXlDLHNGQUErQixDQUFDLCtEQUE2QjtBQUN0RztBQUNBLDhCQUE4QixRQUFTLG9CQUFvQiwrRkFBK0Ysb0JBQW9CLHNCQUFzQixPQUFPLHdDQUF3QyxzQkFBc0IsdUNBQXVDLDJDQUEyQywyQ0FBMkMsNkJBQTZCLHFDQUFxQyxlQUFlLGtCQUFrQiwwQkFBMEIsMkJBQTJCLDRCQUE0QixpQ0FBaUMsT0FBTyxpQkFBaUIsc0JBQXNCLGdDQUFnQyxPQUFPLDZCQUE2Qix5QkFBeUIsMEJBQTBCLDBCQUEwQixxQ0FBcUMscUNBQXFDLG9DQUFvQyxtQkFBbUIscUJBQXFCLGdDQUFnQyxPQUFPLG1CQUFtQiw2QkFBNkIsT0FBTyxpQ0FBaUMsZ0NBQWdDLDZCQUE2QixPQUFPLDhCQUE4QixpQ0FBaUMsd0JBQXdCLDJCQUEyQiw2QkFBNkIsNENBQTRDLHFCQUFxQix5Q0FBeUMscUNBQXFDLHNDQUFzQyxPQUFPLG9CQUFvQiw4QkFBOEIsc0JBQXNCLDBCQUEwQiw4QkFBOEIseUJBQXlCLE9BQU8scUJBQXFCLGdDQUFnQywwQkFBMEIsT0FBTywyQkFBMkIsOEJBQThCLHNCQUFzQiwyQkFBMkIsd0NBQXdDLHdDQUF3QyxvQ0FBb0Msb0NBQW9DLHNCQUFzQixpQkFBaUIsbUJBQW1CLDRCQUE0Qix5QkFBeUIsMEJBQTBCLE9BQU8sa0JBQWtCLDRCQUE0QixPQUFPLDRCQUE0Qix3QkFBd0IsMkJBQTJCLHdDQUF3Qyx3Q0FBd0Msb0NBQW9DLG9DQUFvQyxvQ0FBb0MsT0FBTyx1QkFBdUIsd0JBQXdCLDJCQUEyQix3Q0FBd0Msd0NBQXdDLG9DQUFvQyxvQ0FBb0MscUJBQXFCLDRCQUE0QixPQUFPLHdCQUF3Qix3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LHlDQUF5QyxxQkFBcUIsU0FBUyxnQ0FBZ0MscUJBQXFCLFNBQVMseUJBQXlCLDhCQUE4QixTQUFTLHdCQUF3Qiw0QkFBNEIsU0FBUyxhQUFhLGdDQUFnQywyQkFBMkIsNEJBQTRCLFNBQVMsZUFBZSx5QkFBeUI7QUFDdHZRO0FBQ2Usc0ZBQXVCLEVBQUMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC43OWZhZGIzNGNjYTNhMmY5YTJjOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyBmcm9tIFwiLi4vcHVibGljL2JhY2tncm91bmQ1LnBuZ1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlxcclxcbi5hYm91dC1pbWFnZXtcXHJcXG4gICAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBuby1yZXBlYXQgY2VudGVyIHRvcC9jb3ZlcjtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICB9XFxyXFxuXFxyXFxuXFxyXFxuLyogQWJvdXQgKi9cXHJcXG4uYWJvdXQtaW5uZXJ7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDFmcjtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAzMDBtcztcXHJcXG4gICAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAzMDBtcztcXHJcXG4gICAgYW5pbWF0aW9uOiBwYXJhIDJzIDE7XFxyXFxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBwYXJhIDNzIDE7XFxyXFxuICAgIFxcclxcbiAgfVxcclxcbiAgLmFib3V0LXRleHR7XFxyXFxuICAgIG1hcmdpbi10b3A6IDE1cmVtO1xcclxcbiAgICBtYXJnaW4tbGVmdDogMTByZW07XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMTVyZW07XFxyXFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXHJcXG4gIH1cXHJcXG4gIC5tYXAtaW5uZXJ7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAucGFyYWdyYXBoLWFib3V0e1xcclxcbiAgICBmb250LXdlaWdodDogMzAwO1xcclxcbiAgICBsaW5lLWhlaWdodDogMnJlbTtcXHJcXG4gICAgd29yZC1zcGFjaW5nOiA1cHg7XFxyXFxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBwYXJhIDJzIDE7XFxyXFxuICAgICAgICAgICAgYW5pbWF0aW9uOiBwYXJhIDJzIDE7XFxyXFxuICAgIFxcclxcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcclxcbiAgXFxyXFxuICBcXHJcXG4gIH1cXHJcXG4gIC5hYm91dC10ZXh0IGgze1xcclxcbiAgICBjb2xvcjogdmFyKC0tZGlmLWNvbG9yKTtcXHJcXG4gIH1cXHJcXG4gIC5sYXJnZS1hYm91dHtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDJyZW07XFxyXFxuICB9XFxyXFxuICAubGFyZ2UtYWJvdXQ6OmZpcnN0LWxldHRlcntcXHJcXG4gICAgY29sb3I6IHZhcigtLWRpZi1jb2xvcik7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAycmVtO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICBcXHJcXG4gIC5tYXJrZXItYm94e1xcclxcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMTRweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtZGFyayk7XFxyXFxuICAgIHdpZHRoOiAzMzBweDtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE4cHg7XFxyXFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE4cHg7XFxyXFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxOHB4O1xcclxcbiAgfVxcclxcbiAgLm1hcmtlci1uYW1lIHtcXHJcXG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xcclxcbiAgICBmb250LXdlaWdodDogMzAwO1xcclxcbiAgfVxcclxcbiAgLm1hcmtlci1uYW1lIGl7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1kaWYtY29sb3IpO1xcclxcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb250YWN0LWFjdGlvbnN7XFxyXFxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ3JpZC1nYXA6IDd2dztcXHJcXG4gICAgZ2FwOiA3dnc7XFxyXFxuXFxyXFxuICAgIFxcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuY29udGFjdC1idXR0b257XFxyXFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xcclxcbiAgfVxcclxcbiAgLmFib3V0LWljb257XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMTByZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuXFxyXFxuICAuYWJvdXQtaWNvbiBpe1xcclxcbiAgICBmb250LXNpemU6IDRyZW07XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgIGNvbG9yOiB2YXIoLS1kaWYtY29sb3IpO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmljb24tYWJvdXQge1xcclxcbiAgICBmb250LXNpemU6IDRyZW07XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDMuNXJlbTtcXHJcXG4gIH1cXHJcXG4gIC5hYm91dC1pY29uLXRpdGxle1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHJcXG4gIH1cXHJcXG4gIFxcclxcblxcclxcbiAgXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KXtcXHJcXG5cXHJcXG4gICAgLmFib3V0LWlubmVye1xcclxcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsMWZyKTtcXHJcXG4gICAgICBvdmVyZmxvdy14OiBzY3JvbGw7XFxyXFxuICAgIH1cXHJcXG4gICAgLm1hcC1pbm5lcntcXHJcXG4gICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICB9XFxyXFxuICAgIC5hYm91dC10ZXh0e1xcclxcbiAgICAgIG1hcmdpbjogMzAlIDUlO1xcclxcbiAgICB9XFxyXFxuICAgIC5sYXJnZS1hYm91dHtcXHJcXG4gICAgICBmb250LXNpemU6IDMuMnJlbTtcXHJcXG4gICAgfVxcclxcbiAgICAucGFyYWdyYXBoLWFib3V0e1xcclxcbiAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbiAgICB9XFxyXFxuICBcXHJcXG4gICAgLmFib3V0LWlubmVye1xcclxcbiAgICAgIGxpbmUtaGVpZ2h0OiAyLjVyZW07XFxyXFxuICAgIH1cXHJcXG4gICAgLm1hcC1pbm5lcntcXHJcXG4gICAgICB3aWR0aDogNXJlbTtcXHJcXG4gICAgfSAgXFxyXFxuICAgIC5jb250YWN0LWZvcm0gaW5wdXQsIHRleHRhcmVhIHtcXHJcXG4gICAgICB3aWR0aDogOTAlO1xcclxcbiAgICB9XFxyXFxuICAgIC5jb250YWN0LWZvcm0gdGV4dGFyZWEge1xcclxcbiAgICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnNraWxscy1pbmZve1xcclxcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjFyZW07XFxyXFxuICAgIH1cXHJcXG4gICAgLmNvbnRhY3QtYnV0dG9ue1xcclxcbiAgICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xcclxcbiAgICB9XFxyXFxuICBcXHJcXG4gIH1cXHJcXG4gIEBtZWRpYSAobWluLXdpZHRoOiA0ODBweCl7XFxyXFxuICBcXHJcXG4gICAgLnNraWxscy1pbmZve1xcclxcbiAgICAgIGxpbmUtaGVpZ2h0OiAxcmVtO1xcclxcbiAgICB9XFxyXFxuICAgIFxcclxcbiAgfVxcclxcbiAgXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3N0eWxlL2Fib3V0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBQ0E7SUFDSSw4RUFBdUU7SUFDdkUsV0FBVztJQUNYLGFBQWE7RUFDZjs7O0FBR0YsVUFBVTtBQUNWO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixrQ0FBMEI7WUFBMUIsMEJBQTBCO0lBQzFCLG9CQUFvQjtJQUNwQiw0QkFBNEI7O0VBRTlCO0VBQ0E7SUFDRSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQix3QkFBd0I7RUFDMUI7RUFDQTtJQUNFLGFBQWE7SUFDYix1QkFBdUI7RUFDekI7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQiw0QkFBb0I7WUFBcEIsb0JBQW9COztJQUVwQixtQkFBbUI7OztFQUdyQjtFQUNBO0lBQ0UsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSxvQkFBb0I7RUFDdEI7RUFDQTtJQUNFLHVCQUF1QjtJQUN2QixvQkFBb0I7RUFDdEI7OztFQUdBO0lBQ0Usd0JBQXdCO0lBQ3hCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLG1DQUFtQztJQUNuQyxZQUFZO0lBQ1osZ0NBQWdDO0lBQ2hDLDRCQUE0QjtJQUM1Qiw2QkFBNkI7RUFDL0I7RUFDQTtJQUNFLHFCQUFhO0lBQWIsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSx1QkFBdUI7SUFDdkIsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UscUJBQWE7SUFBYixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLCtCQUF1QjtZQUF2Qix1QkFBdUI7SUFDdkIsMkJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQixhQUFRO0lBQVIsUUFBUTs7O0VBR1Y7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxtQkFBbUI7RUFDckI7OztFQUdBO0lBQ0UsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQiwrQkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLDJCQUFtQjtZQUFuQixtQkFBbUI7O0lBRW5CLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsK0JBQXVCO1lBQXZCLHVCQUF1QjtJQUN2QiwyQkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixtQkFBbUI7RUFDckI7RUFDQTtJQUNFLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsa0JBQWtCOztFQUVwQjs7OztBQUlGOztJQUVJO01BQ0Usb0NBQW9DO01BQ3BDLGtCQUFrQjtJQUNwQjtJQUNBO01BQ0UsYUFBYTtJQUNmO0lBQ0E7TUFDRSxjQUFjO0lBQ2hCO0lBQ0E7TUFDRSxpQkFBaUI7SUFDbkI7SUFDQTtNQUNFLGlCQUFpQjtJQUNuQjs7SUFFQTtNQUNFLG1CQUFtQjtJQUNyQjtJQUNBO01BQ0UsV0FBVztJQUNiO0lBQ0E7TUFDRSxVQUFVO0lBQ1o7SUFDQTtNQUNFLFVBQVU7SUFDWjs7SUFFQTtNQUNFLG1CQUFtQjtJQUNyQjtJQUNBO01BQ0UsaUJBQWlCO0lBQ25COztFQUVGO0VBQ0E7O0lBRUU7TUFDRSxpQkFBaUI7SUFDbkI7O0VBRUZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxyXFxuLmFib3V0LWltYWdle1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uL3B1YmxpYy9iYWNrZ3JvdW5kNS5wbmcnKSBuby1yZXBlYXQgY2VudGVyIHRvcC9jb3ZlcjtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICB9XFxyXFxuXFxyXFxuXFxyXFxuLyogQWJvdXQgKi9cXHJcXG4uYWJvdXQtaW5uZXJ7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDFmcjtcXHJcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMzAwbXM7XFxyXFxuICAgIGFuaW1hdGlvbjogcGFyYSAycyAxO1xcclxcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogcGFyYSAzcyAxO1xcclxcbiAgICBcXHJcXG4gIH1cXHJcXG4gIC5hYm91dC10ZXh0e1xcclxcbiAgICBtYXJnaW4tdG9wOiAxNXJlbTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcmVtO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cmVtO1xcclxcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxyXFxuICB9XFxyXFxuICAubWFwLWlubmVye1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLnBhcmFncmFwaC1hYm91dHtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDJyZW07XFxyXFxuICAgIHdvcmQtc3BhY2luZzogNXB4O1xcclxcbiAgICBhbmltYXRpb246IHBhcmEgMnMgMTtcXHJcXG4gICAgXFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XFxyXFxuICBcXHJcXG4gIFxcclxcbiAgfVxcclxcbiAgLmFib3V0LXRleHQgaDN7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1kaWYtY29sb3IpO1xcclxcbiAgfVxcclxcbiAgLmxhcmdlLWFib3V0e1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcXHJcXG4gIH1cXHJcXG4gIC5sYXJnZS1hYm91dDo6Zmlyc3QtbGV0dGVye1xcclxcbiAgICBjb2xvcjogdmFyKC0tZGlmLWNvbG9yKTtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDJyZW07XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIFxcclxcbiAgLm1hcmtlci1ib3h7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAxNHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1kYXJrKTtcXHJcXG4gICAgd2lkdGg6IDMzMHB4O1xcclxcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMThweDtcXHJcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMThweDtcXHJcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE4cHg7XFxyXFxuICB9XFxyXFxuICAubWFya2VyLW5hbWUge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xcclxcbiAgICBmb250LXdlaWdodDogMzAwO1xcclxcbiAgfVxcclxcbiAgLm1hcmtlci1uYW1lIGl7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1kaWYtY29sb3IpO1xcclxcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb250YWN0LWFjdGlvbnN7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogN3Z3O1xcclxcblxcclxcbiAgICBcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmNvbnRhY3QtYnV0dG9ue1xcclxcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcclxcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcXHJcXG4gIH1cXHJcXG4gIC5hYm91dC1pY29ue1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcmVtO1xcclxcbiAgfVxcclxcblxcclxcblxcclxcbiAgLmFib3V0LWljb24gaXtcXHJcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcclxcbiAgICBjb2xvcjogdmFyKC0tZGlmLWNvbG9yKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5pY29uLWFib3V0IHtcXHJcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAzLjVyZW07XFxyXFxuICB9XFxyXFxuICAuYWJvdXQtaWNvbi10aXRsZXtcXHJcXG4gICAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgICBmb250LXdlaWdodDogMzAwO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFxyXFxuICB9XFxyXFxuICBcXHJcXG5cXHJcXG4gIFxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCl7XFxyXFxuXFxyXFxuICAgIC5hYm91dC1pbm5lcntcXHJcXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLDFmcik7XFxyXFxuICAgICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xcclxcbiAgICB9XFxyXFxuICAgIC5tYXAtaW5uZXJ7XFxyXFxuICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgfVxcclxcbiAgICAuYWJvdXQtdGV4dHtcXHJcXG4gICAgICBtYXJnaW46IDMwJSA1JTtcXHJcXG4gICAgfVxcclxcbiAgICAubGFyZ2UtYWJvdXR7XFxyXFxuICAgICAgZm9udC1zaXplOiAzLjJyZW07XFxyXFxuICAgIH1cXHJcXG4gICAgLnBhcmFncmFwaC1hYm91dHtcXHJcXG4gICAgICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG4gICAgfVxcclxcbiAgXFxyXFxuICAgIC5hYm91dC1pbm5lcntcXHJcXG4gICAgICBsaW5lLWhlaWdodDogMi41cmVtO1xcclxcbiAgICB9XFxyXFxuICAgIC5tYXAtaW5uZXJ7XFxyXFxuICAgICAgd2lkdGg6IDVyZW07XFxyXFxuICAgIH0gIFxcclxcbiAgICAuY29udGFjdC1mb3JtIGlucHV0LCB0ZXh0YXJlYSB7XFxyXFxuICAgICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgfVxcclxcbiAgICAuY29udGFjdC1mb3JtIHRleHRhcmVhIHtcXHJcXG4gICAgICB3aWR0aDogOTAlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5za2lsbHMtaW5mb3tcXHJcXG4gICAgICBsaW5lLWhlaWdodDogMS4xcmVtO1xcclxcbiAgICB9XFxyXFxuICAgIC5jb250YWN0LWJ1dHRvbntcXHJcXG4gICAgICBtYXJnaW4tbGVmdDogMXJlbTtcXHJcXG4gICAgfVxcclxcbiAgXFxyXFxuICB9XFxyXFxuICBAbWVkaWEgKG1pbi13aWR0aDogNDgwcHgpe1xcclxcbiAgXFxyXFxuICAgIC5za2lsbHMtaW5mb3tcXHJcXG4gICAgICBsaW5lLWhlaWdodDogMXJlbTtcXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG4gIH1cXHJcXG4gIFwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwic291cmNlUm9vdCI6IiJ9