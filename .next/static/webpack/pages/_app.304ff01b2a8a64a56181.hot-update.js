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
___CSS_LOADER_EXPORT___.push([module.i, "\r\n.about-image{\r\n    \r\n    width: 100%;\r\n    height: 100vh;\r\n  }\r\n\r\n\r\n/* About */\r\n.about-inner{\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat center top/cover;\r\n    height: 100vh;\r\n    display: grid;\r\n    grid-template-columns: 2fr 1fr;\r\n  }\r\n  .about-text{\r\n    margin-top: 15rem;\r\n    margin-left: 10rem;\r\n    margin-right: 15rem;\r\n    color: var(--text-color);\r\n  }\r\n  .map-inner{\r\n    height: 100vh;\r\n    background-color: white;\r\n  }\r\n  \r\n  .paragraph-about{\r\n    font-weight: 300;\r\n    line-height: 2rem;\r\n    font-size: calc(10px + 1vw);\r\n    word-spacing: 5px;\r\n    -webkit-animation: para 3s 1;\r\n            animation: para 3s 1;\r\n    margin-bottom: 2rem;\r\n  }\r\n\r\n  .about-text h3{\r\n    color: var(--dif-color);\r\n  }\r\n  .large-about{\r\n    padding-bottom: 2rem;\r\n    -webkit-animation: para 2s 1;\r\n            animation: para 2s 1; \r\n  }\r\n  .large-about::first-letter{\r\n    color: var(--dif-color);\r\n    padding-bottom: 2rem;\r\n  }\r\n  \r\n  \r\n  .marker-box{\r\n    color: var(--text-color);\r\n    font-size: 1rem;\r\n    padding-left: 20px;\r\n    padding-bottom: 14px;\r\n    background-color: var(--light-dark);\r\n    width: 330px;\r\n    border-bottom-right-radius: 18px;\r\n    border-top-left-radius: 18px;\r\n    border-top-right-radius: 18px;\r\n    -webkit-animation: para 3s 1;\r\n            animation: para 3s 1;\r\n    -webkit-animation-duration: 3000ms;\r\n            animation-duration: 3000ms;\r\n  \r\n  }\r\n  .marker-name {\r\n    display: -webkit-flex;\r\n    display: flex;\r\n    padding-top: 1rem;\r\n    letter-spacing: 1.5px;\r\n    font-weight: 300;\r\n  }\r\n  .marker-name i{\r\n    color: var(--dif-color);\r\n    font-size: 1.4rem;\r\n  }\r\n\r\n  .contact-actions{\r\n    display: -webkit-flex;\r\n    display: flex;\r\n    grid-gap: 7rem;\r\n    gap: 7rem;\r\n    margin-bottom: 4rem;\r\n    -webkit-animation: para 4s 1;\r\n            animation: para 4s 1;\r\n    -webkit-animation-duration: 3400ms;\r\n            animation-duration: 3400ms;\r\n\r\n  }\r\n\r\n  .about-icon{\r\n    margin-top: 2rem;\r\n    color: white;\r\n  }\r\n\r\n\r\n  .about-icon i{\r\n    font-size: calc(45px + 1vw);\r\n    color: white;\r\n  }\r\n  .about-icon i:hover{\r\n    color: var(--dif-color);\r\n  }\r\n  .fa-paper-plane{\r\n    margin-right: 2rem;\r\n  }\r\n\r\n  .icon-about {\r\n    font-size: 4rem;\r\n    color: white;\r\n    margin-left:1.5rem;\r\n  }\r\n  .about-icon-title{\r\n    font-size: 2rem;\r\n    font-weight: 300;\r\n    text-align: center;\r\n    font-size: calc(10px + 1vw);\r\n\r\n\r\n  }\r\n  \r\n\r\n  \r\n@media (max-width: 768px){\r\n\r\n    .about-inner{\r\n      grid-template-columns: repeat(1,1fr);\r\n      overflow-x: scroll;\r\n    }\r\n    .map-inner{\r\n      display: none;\r\n    }\r\n    .about-text{\r\n      margin: rem 4rem\r\n    }\r\n    .large-about{\r\n      font-size: 3.2rem;\r\n    }\r\n    .paragraph-about{\r\n      font-size: 1.3rem;\r\n    }\r\n  \r\n    .about-inner{\r\n      line-height: 2.5rem;\r\n    }\r\n    .map-inner{\r\n      width: 5rem;\r\n    }  \r\n    .contact-form input, textarea {\r\n      width: 90%;\r\n    }\r\n    .contact-form textarea {\r\n      width: 90%;\r\n    }\r\n\r\n    .skills-info{\r\n      line-height: 1.1rem;\r\n    }\r\n    .contact-button{\r\n      margin-left: 1rem;\r\n    }\r\n  \r\n  }\r\n  @media (max-width: 1280px){\r\n  \r\n    .map-inner{\r\n      display: none;\r\n    }\r\n    .about-icon{\r\n      grid-gap: 0;\r\n      gap: 0;\r\n    }\r\n  }\r\n  ", "",{"version":3,"sources":["webpack://style/about.css"],"names":[],"mappings":";AACA;;IAEI,WAAW;IACX,aAAa;EACf;;;AAGF,UAAU;AACV;IACI,8EAAuE;IACvE,aAAa;IACb,aAAa;IACb,8BAA8B;EAChC;EACA;IACE,iBAAiB;IACjB,kBAAkB;IAClB,mBAAmB;IACnB,wBAAwB;EAC1B;EACA;IACE,aAAa;IACb,uBAAuB;EACzB;;EAEA;IACE,gBAAgB;IAChB,iBAAiB;IACjB,2BAA2B;IAC3B,iBAAiB;IACjB,4BAAoB;YAApB,oBAAoB;IACpB,mBAAmB;EACrB;;EAEA;IACE,uBAAuB;EACzB;EACA;IACE,oBAAoB;IACpB,4BAAoB;YAApB,oBAAoB;EACtB;EACA;IACE,uBAAuB;IACvB,oBAAoB;EACtB;;;EAGA;IACE,wBAAwB;IACxB,eAAe;IACf,kBAAkB;IAClB,oBAAoB;IACpB,mCAAmC;IACnC,YAAY;IACZ,gCAAgC;IAChC,4BAA4B;IAC5B,6BAA6B;IAC7B,4BAAoB;YAApB,oBAAoB;IACpB,kCAA0B;YAA1B,0BAA0B;;EAE5B;EACA;IACE,qBAAa;IAAb,aAAa;IACb,iBAAiB;IACjB,qBAAqB;IACrB,gBAAgB;EAClB;EACA;IACE,uBAAuB;IACvB,iBAAiB;EACnB;;EAEA;IACE,qBAAa;IAAb,aAAa;IACb,cAAS;IAAT,SAAS;IACT,mBAAmB;IACnB,4BAAoB;YAApB,oBAAoB;IACpB,kCAA0B;YAA1B,0BAA0B;;EAE5B;;EAEA;IACE,gBAAgB;IAChB,YAAY;EACd;;;EAGA;IACE,2BAA2B;IAC3B,YAAY;EACd;EACA;IACE,uBAAuB;EACzB;EACA;IACE,kBAAkB;EACpB;;EAEA;IACE,eAAe;IACf,YAAY;IACZ,kBAAkB;EACpB;EACA;IACE,eAAe;IACf,gBAAgB;IAChB,kBAAkB;IAClB,2BAA2B;;;EAG7B;;;;AAIF;;IAEI;MACE,oCAAoC;MACpC,kBAAkB;IACpB;IACA;MACE,aAAa;IACf;IACA;MACE;IACF;IACA;MACE,iBAAiB;IACnB;IACA;MACE,iBAAiB;IACnB;;IAEA;MACE,mBAAmB;IACrB;IACA;MACE,WAAW;IACb;IACA;MACE,UAAU;IACZ;IACA;MACE,UAAU;IACZ;;IAEA;MACE,mBAAmB;IACrB;IACA;MACE,iBAAiB;IACnB;;EAEF;EACA;;IAEE;MACE,aAAa;IACf;IACA;MACE,WAAM;MAAN,MAAM;IACR;EACF","sourcesContent":["\r\n.about-image{\r\n    \r\n    width: 100%;\r\n    height: 100vh;\r\n  }\r\n\r\n\r\n/* About */\r\n.about-inner{\r\n    background: url('../public/background5.png') no-repeat center top/cover;\r\n    height: 100vh;\r\n    display: grid;\r\n    grid-template-columns: 2fr 1fr;\r\n  }\r\n  .about-text{\r\n    margin-top: 15rem;\r\n    margin-left: 10rem;\r\n    margin-right: 15rem;\r\n    color: var(--text-color);\r\n  }\r\n  .map-inner{\r\n    height: 100vh;\r\n    background-color: white;\r\n  }\r\n  \r\n  .paragraph-about{\r\n    font-weight: 300;\r\n    line-height: 2rem;\r\n    font-size: calc(10px + 1vw);\r\n    word-spacing: 5px;\r\n    animation: para 3s 1;\r\n    margin-bottom: 2rem;\r\n  }\r\n\r\n  .about-text h3{\r\n    color: var(--dif-color);\r\n  }\r\n  .large-about{\r\n    padding-bottom: 2rem;\r\n    animation: para 2s 1; \r\n  }\r\n  .large-about::first-letter{\r\n    color: var(--dif-color);\r\n    padding-bottom: 2rem;\r\n  }\r\n  \r\n  \r\n  .marker-box{\r\n    color: var(--text-color);\r\n    font-size: 1rem;\r\n    padding-left: 20px;\r\n    padding-bottom: 14px;\r\n    background-color: var(--light-dark);\r\n    width: 330px;\r\n    border-bottom-right-radius: 18px;\r\n    border-top-left-radius: 18px;\r\n    border-top-right-radius: 18px;\r\n    animation: para 3s 1;\r\n    animation-duration: 3000ms;\r\n  \r\n  }\r\n  .marker-name {\r\n    display: flex;\r\n    padding-top: 1rem;\r\n    letter-spacing: 1.5px;\r\n    font-weight: 300;\r\n  }\r\n  .marker-name i{\r\n    color: var(--dif-color);\r\n    font-size: 1.4rem;\r\n  }\r\n\r\n  .contact-actions{\r\n    display: flex;\r\n    gap: 7rem;\r\n    margin-bottom: 4rem;\r\n    animation: para 4s 1;\r\n    animation-duration: 3400ms;\r\n\r\n  }\r\n\r\n  .about-icon{\r\n    margin-top: 2rem;\r\n    color: white;\r\n  }\r\n\r\n\r\n  .about-icon i{\r\n    font-size: calc(45px + 1vw);\r\n    color: white;\r\n  }\r\n  .about-icon i:hover{\r\n    color: var(--dif-color);\r\n  }\r\n  .fa-paper-plane{\r\n    margin-right: 2rem;\r\n  }\r\n\r\n  .icon-about {\r\n    font-size: 4rem;\r\n    color: white;\r\n    margin-left:1.5rem;\r\n  }\r\n  .about-icon-title{\r\n    font-size: 2rem;\r\n    font-weight: 300;\r\n    text-align: center;\r\n    font-size: calc(10px + 1vw);\r\n\r\n\r\n  }\r\n  \r\n\r\n  \r\n@media (max-width: 768px){\r\n\r\n    .about-inner{\r\n      grid-template-columns: repeat(1,1fr);\r\n      overflow-x: scroll;\r\n    }\r\n    .map-inner{\r\n      display: none;\r\n    }\r\n    .about-text{\r\n      margin: rem 4rem\r\n    }\r\n    .large-about{\r\n      font-size: 3.2rem;\r\n    }\r\n    .paragraph-about{\r\n      font-size: 1.3rem;\r\n    }\r\n  \r\n    .about-inner{\r\n      line-height: 2.5rem;\r\n    }\r\n    .map-inner{\r\n      width: 5rem;\r\n    }  \r\n    .contact-form input, textarea {\r\n      width: 90%;\r\n    }\r\n    .contact-form textarea {\r\n      width: 90%;\r\n    }\r\n\r\n    .skills-info{\r\n      line-height: 1.1rem;\r\n    }\r\n    .contact-button{\r\n      margin-left: 1rem;\r\n    }\r\n  \r\n  }\r\n  @media (max-width: 1280px){\r\n  \r\n    .map-inner{\r\n      display: none;\r\n    }\r\n    .about-icon{\r\n      gap: 0;\r\n    }\r\n  }\r\n  "],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGUvYWJvdXQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUN5RjtBQUNPO0FBQzFCO0FBQ3RFLDhCQUE4QixtRkFBMkI7QUFDekQseUNBQXlDLHNGQUErQixDQUFDLCtEQUE2QjtBQUN0RztBQUNBLDhCQUE4QixRQUFTLG9CQUFvQiw0QkFBNEIsc0JBQXNCLE9BQU8sd0NBQXdDLCtGQUErRixzQkFBc0Isc0JBQXNCLHVDQUF1QyxPQUFPLGtCQUFrQiwwQkFBMEIsMkJBQTJCLDRCQUE0QixpQ0FBaUMsT0FBTyxpQkFBaUIsc0JBQXNCLGdDQUFnQyxPQUFPLDZCQUE2Qix5QkFBeUIsMEJBQTBCLG9DQUFvQywwQkFBMEIscUNBQXFDLHFDQUFxQyw0QkFBNEIsT0FBTyx5QkFBeUIsZ0NBQWdDLE9BQU8sbUJBQW1CLDZCQUE2QixxQ0FBcUMscUNBQXFDLFFBQVEsaUNBQWlDLGdDQUFnQyw2QkFBNkIsT0FBTyw4QkFBOEIsaUNBQWlDLHdCQUF3QiwyQkFBMkIsNkJBQTZCLDRDQUE0QyxxQkFBcUIseUNBQXlDLHFDQUFxQyxzQ0FBc0MscUNBQXFDLHFDQUFxQywyQ0FBMkMsMkNBQTJDLGFBQWEsb0JBQW9CLDhCQUE4QixzQkFBc0IsMEJBQTBCLDhCQUE4Qix5QkFBeUIsT0FBTyxxQkFBcUIsZ0NBQWdDLDBCQUEwQixPQUFPLDJCQUEyQiw4QkFBOEIsc0JBQXNCLHVCQUF1QixrQkFBa0IsNEJBQTRCLHFDQUFxQyxxQ0FBcUMsMkNBQTJDLDJDQUEyQyxXQUFXLHNCQUFzQix5QkFBeUIscUJBQXFCLE9BQU8sNEJBQTRCLG9DQUFvQyxxQkFBcUIsT0FBTywwQkFBMEIsZ0NBQWdDLE9BQU8sc0JBQXNCLDJCQUEyQixPQUFPLHVCQUF1Qix3QkFBd0IscUJBQXFCLDJCQUEyQixPQUFPLHdCQUF3Qix3QkFBd0IseUJBQXlCLDJCQUEyQixvQ0FBb0Ms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LHlDQUF5QyxxQkFBcUIsU0FBUyxnQ0FBZ0MscUJBQXFCLFNBQVMseUJBQXlCLDhCQUE4QixTQUFTLHdCQUF3Qiw0QkFBNEIsU0FBUyxhQUFhLGlDQUFpQyx5QkFBeUIsd0JBQXdCLFNBQVMsb0JBQW9CLGlCQUFpQixTQUFTLE9BQU8seUJBQXlCO0FBQ3JvUTtBQUNlLHNGQUF1QixFQUFDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMzA0ZmYwMWIyYThhNjRhNTYxODEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gZnJvbSBcIi4uL3B1YmxpYy9iYWNrZ3JvdW5kNS5wbmdcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcXHJcXG4uYWJvdXQtaW1hZ2V7XFxyXFxuICAgIFxcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIH1cXHJcXG5cXHJcXG5cXHJcXG4vKiBBYm91dCAqL1xcclxcbi5hYm91dC1pbm5lcntcXHJcXG4gICAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBuby1yZXBlYXQgY2VudGVyIHRvcC9jb3ZlcjtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyO1xcclxcbiAgfVxcclxcbiAgLmFib3V0LXRleHR7XFxyXFxuICAgIG1hcmdpbi10b3A6IDE1cmVtO1xcclxcbiAgICBtYXJnaW4tbGVmdDogMTByZW07XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMTVyZW07XFxyXFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXHJcXG4gIH1cXHJcXG4gIC5tYXAtaW5uZXJ7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAucGFyYWdyYXBoLWFib3V0e1xcclxcbiAgICBmb250LXdlaWdodDogMzAwO1xcclxcbiAgICBsaW5lLWhlaWdodDogMnJlbTtcXHJcXG4gICAgZm9udC1zaXplOiBjYWxjKDEwcHggKyAxdncpO1xcclxcbiAgICB3b3JkLXNwYWNpbmc6IDVweDtcXHJcXG4gICAgLXdlYmtpdC1hbmltYXRpb246IHBhcmEgM3MgMTtcXHJcXG4gICAgICAgICAgICBhbmltYXRpb246IHBhcmEgM3MgMTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5hYm91dC10ZXh0IGgze1xcclxcbiAgICBjb2xvcjogdmFyKC0tZGlmLWNvbG9yKTtcXHJcXG4gIH1cXHJcXG4gIC5sYXJnZS1hYm91dHtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDJyZW07XFxyXFxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBwYXJhIDJzIDE7XFxyXFxuICAgICAgICAgICAgYW5pbWF0aW9uOiBwYXJhIDJzIDE7IFxcclxcbiAgfVxcclxcbiAgLmxhcmdlLWFib3V0OjpmaXJzdC1sZXR0ZXJ7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1kaWYtY29sb3IpO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgXFxyXFxuICAubWFya2VyLWJveHtcXHJcXG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDE0cHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWRhcmspO1xcclxcbiAgICB3aWR0aDogMzMwcHg7XFxyXFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxOHB4O1xcclxcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxOHB4O1xcclxcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMThweDtcXHJcXG4gICAgLXdlYmtpdC1hbmltYXRpb246IHBhcmEgM3MgMTtcXHJcXG4gICAgICAgICAgICBhbmltYXRpb246IHBhcmEgM3MgMTtcXHJcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDMwMDBtcztcXHJcXG4gICAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDMwMDBtcztcXHJcXG4gIFxcclxcbiAgfVxcclxcbiAgLm1hcmtlci1uYW1lIHtcXHJcXG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xcclxcbiAgICBmb250LXdlaWdodDogMzAwO1xcclxcbiAgfVxcclxcbiAgLm1hcmtlci1uYW1lIGl7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1kaWYtY29sb3IpO1xcclxcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb250YWN0LWFjdGlvbnN7XFxyXFxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ3JpZC1nYXA6IDdyZW07XFxyXFxuICAgIGdhcDogN3JlbTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogNHJlbTtcXHJcXG4gICAgLXdlYmtpdC1hbmltYXRpb246IHBhcmEgNHMgMTtcXHJcXG4gICAgICAgICAgICBhbmltYXRpb246IHBhcmEgNHMgMTtcXHJcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDM0MDBtcztcXHJcXG4gICAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDM0MDBtcztcXHJcXG5cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5hYm91dC1pY29ue1xcclxcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICB9XFxyXFxuXFxyXFxuXFxyXFxuICAuYWJvdXQtaWNvbiBpe1xcclxcbiAgICBmb250LXNpemU6IGNhbGMoNDVweCArIDF2dyk7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIH1cXHJcXG4gIC5hYm91dC1pY29uIGk6aG92ZXJ7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1kaWYtY29sb3IpO1xcclxcbiAgfVxcclxcbiAgLmZhLXBhcGVyLXBsYW5le1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDJyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuaWNvbi1hYm91dCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBtYXJnaW4tbGVmdDoxLjVyZW07XFxyXFxuICB9XFxyXFxuICAuYWJvdXQtaWNvbi10aXRsZXtcXHJcXG4gICAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgICBmb250LXdlaWdodDogMzAwO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogY2FsYygxMHB4ICsgMXZ3KTtcXHJcXG5cXHJcXG5cXHJcXG4gIH1cXHJcXG4gIFxcclxcblxcclxcbiAgXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KXtcXHJcXG5cXHJcXG4gICAgLmFib3V0LWlubmVye1xcclxcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsMWZyKTtcXHJcXG4gICAgICBvdmVyZmxvdy14OiBzY3JvbGw7XFxyXFxuICAgIH1cXHJcXG4gICAgLm1hcC1pbm5lcntcXHJcXG4gICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICB9XFxyXFxuICAgIC5hYm91dC10ZXh0e1xcclxcbiAgICAgIG1hcmdpbjogcmVtIDRyZW1cXHJcXG4gICAgfVxcclxcbiAgICAubGFyZ2UtYWJvdXR7XFxyXFxuICAgICAgZm9udC1zaXplOiAzLjJyZW07XFxyXFxuICAgIH1cXHJcXG4gICAgLnBhcmFncmFwaC1hYm91dHtcXHJcXG4gICAgICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG4gICAgfVxcclxcbiAgXFxyXFxuICAgIC5hYm91dC1pbm5lcntcXHJcXG4gICAgICBsaW5lLWhlaWdodDogMi41cmVtO1xcclxcbiAgICB9XFxyXFxuICAgIC5tYXAtaW5uZXJ7XFxyXFxuICAgICAgd2lkdGg6IDVyZW07XFxyXFxuICAgIH0gIFxcclxcbiAgICAuY29udGFjdC1mb3JtIGlucHV0LCB0ZXh0YXJlYSB7XFxyXFxuICAgICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgfVxcclxcbiAgICAuY29udGFjdC1mb3JtIHRleHRhcmVhIHtcXHJcXG4gICAgICB3aWR0aDogOTAlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5za2lsbHMtaW5mb3tcXHJcXG4gICAgICBsaW5lLWhlaWdodDogMS4xcmVtO1xcclxcbiAgICB9XFxyXFxuICAgIC5jb250YWN0LWJ1dHRvbntcXHJcXG4gICAgICBtYXJnaW4tbGVmdDogMXJlbTtcXHJcXG4gICAgfVxcclxcbiAgXFxyXFxuICB9XFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogMTI4MHB4KXtcXHJcXG4gIFxcclxcbiAgICAubWFwLWlubmVye1xcclxcbiAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG4gICAgLmFib3V0LWljb257XFxyXFxuICAgICAgZ3JpZC1nYXA6IDA7XFxyXFxuICAgICAgZ2FwOiAwO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuICBcIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3R5bGUvYWJvdXQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFDQTs7SUFFSSxXQUFXO0lBQ1gsYUFBYTtFQUNmOzs7QUFHRixVQUFVO0FBQ1Y7SUFDSSw4RUFBdUU7SUFDdkUsYUFBYTtJQUNiLGFBQWE7SUFDYiw4QkFBOEI7RUFDaEM7RUFDQTtJQUNFLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHdCQUF3QjtFQUMxQjtFQUNBO0lBQ0UsYUFBYTtJQUNiLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsMkJBQTJCO0lBQzNCLGlCQUFpQjtJQUNqQiw0QkFBb0I7WUFBcEIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0Usb0JBQW9CO0lBQ3BCLDRCQUFvQjtZQUFwQixvQkFBb0I7RUFDdEI7RUFDQTtJQUNFLHVCQUF1QjtJQUN2QixvQkFBb0I7RUFDdEI7OztFQUdBO0lBQ0Usd0JBQXdCO0lBQ3hCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLG1DQUFtQztJQUNuQyxZQUFZO0lBQ1osZ0NBQWdDO0lBQ2hDLDRCQUE0QjtJQUM1Qiw2QkFBNkI7SUFDN0IsNEJBQW9CO1lBQXBCLG9CQUFvQjtJQUNwQixrQ0FBMEI7WUFBMUIsMEJBQTBCOztFQUU1QjtFQUNBO0lBQ0UscUJBQWE7SUFBYixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLHVCQUF1QjtJQUN2QixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxxQkFBYTtJQUFiLGFBQWE7SUFDYixjQUFTO0lBQVQsU0FBUztJQUNULG1CQUFtQjtJQUNuQiw0QkFBb0I7WUFBcEIsb0JBQW9CO0lBQ3BCLGtDQUEwQjtZQUExQiwwQkFBMEI7O0VBRTVCOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLFlBQVk7RUFDZDs7O0VBR0E7SUFDRSwyQkFBMkI7SUFDM0IsWUFBWTtFQUNkO0VBQ0E7SUFDRSx1QkFBdUI7RUFDekI7RUFDQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGVBQWU7SUFDZixZQUFZO0lBQ1osa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQiwyQkFBMkI7OztFQUc3Qjs7OztBQUlGOztJQUVJO01BQ0Usb0NBQW9DO01BQ3BDLGtCQUFrQjtJQUNwQjtJQUNBO01BQ0UsYUFBYTtJQUNmO0lBQ0E7TUFDRTtJQUNGO0lBQ0E7TUFDRSxpQkFBaUI7SUFDbkI7SUFDQTtNQUNFLGlCQUFpQjtJQUNuQjs7SUFFQTtNQUNFLG1CQUFtQjtJQUNyQjtJQUNBO01BQ0UsV0FBVztJQUNiO0lBQ0E7TUFDRSxVQUFVO0lBQ1o7SUFDQTtNQUNFLFVBQVU7SUFDWjs7SUFFQTtNQUNFLG1CQUFtQjtJQUNyQjtJQUNBO01BQ0UsaUJBQWlCO0lBQ25COztFQUVGO0VBQ0E7O0lBRUU7TUFDRSxhQUFhO0lBQ2Y7SUFDQTtNQUNFLFdBQU07TUFBTixNQUFNO0lBQ1I7RUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXHJcXG4uYWJvdXQtaW1hZ2V7XFxyXFxuICAgIFxcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIH1cXHJcXG5cXHJcXG5cXHJcXG4vKiBBYm91dCAqL1xcclxcbi5hYm91dC1pbm5lcntcXHJcXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi9wdWJsaWMvYmFja2dyb3VuZDUucG5nJykgbm8tcmVwZWF0IGNlbnRlciB0b3AvY292ZXI7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDFmcjtcXHJcXG4gIH1cXHJcXG4gIC5hYm91dC10ZXh0e1xcclxcbiAgICBtYXJnaW4tdG9wOiAxNXJlbTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcmVtO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cmVtO1xcclxcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxyXFxuICB9XFxyXFxuICAubWFwLWlubmVye1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLnBhcmFncmFwaC1hYm91dHtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDJyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogY2FsYygxMHB4ICsgMXZ3KTtcXHJcXG4gICAgd29yZC1zcGFjaW5nOiA1cHg7XFxyXFxuICAgIGFuaW1hdGlvbjogcGFyYSAzcyAxO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmFib3V0LXRleHQgaDN7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1kaWYtY29sb3IpO1xcclxcbiAgfVxcclxcbiAgLmxhcmdlLWFib3V0e1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcXHJcXG4gICAgYW5pbWF0aW9uOiBwYXJhIDJzIDE7IFxcclxcbiAgfVxcclxcbiAgLmxhcmdlLWFib3V0OjpmaXJzdC1sZXR0ZXJ7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1kaWYtY29sb3IpO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgXFxyXFxuICAubWFya2VyLWJveHtcXHJcXG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDE0cHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWRhcmspO1xcclxcbiAgICB3aWR0aDogMzMwcHg7XFxyXFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxOHB4O1xcclxcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxOHB4O1xcclxcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMThweDtcXHJcXG4gICAgYW5pbWF0aW9uOiBwYXJhIDNzIDE7XFxyXFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMzAwMG1zO1xcclxcbiAgXFxyXFxuICB9XFxyXFxuICAubWFya2VyLW5hbWUge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xcclxcbiAgICBmb250LXdlaWdodDogMzAwO1xcclxcbiAgfVxcclxcbiAgLm1hcmtlci1uYW1lIGl7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1kaWYtY29sb3IpO1xcclxcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb250YWN0LWFjdGlvbnN7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogN3JlbTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogNHJlbTtcXHJcXG4gICAgYW5pbWF0aW9uOiBwYXJhIDRzIDE7XFxyXFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMzQwMG1zO1xcclxcblxcclxcbiAgfVxcclxcblxcclxcbiAgLmFib3V0LWljb257XFxyXFxuICAgIG1hcmdpbi10b3A6IDJyZW07XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG5cXHJcXG4gIC5hYm91dC1pY29uIGl7XFxyXFxuICAgIGZvbnQtc2l6ZTogY2FsYyg0NXB4ICsgMXZ3KTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgfVxcclxcbiAgLmFib3V0LWljb24gaTpob3ZlcntcXHJcXG4gICAgY29sb3I6IHZhcigtLWRpZi1jb2xvcik7XFxyXFxuICB9XFxyXFxuICAuZmEtcGFwZXItcGxhbmV7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMnJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5pY29uLWFib3V0IHtcXHJcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OjEuNXJlbTtcXHJcXG4gIH1cXHJcXG4gIC5hYm91dC1pY29uLXRpdGxle1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiBjYWxjKDEwcHggKyAxdncpO1xcclxcblxcclxcblxcclxcbiAgfVxcclxcbiAgXFxyXFxuXFxyXFxuICBcXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpe1xcclxcblxcclxcbiAgICAuYWJvdXQtaW5uZXJ7XFxyXFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwxZnIpO1xcclxcbiAgICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcXHJcXG4gICAgfVxcclxcbiAgICAubWFwLWlubmVye1xcclxcbiAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG4gICAgLmFib3V0LXRleHR7XFxyXFxuICAgICAgbWFyZ2luOiByZW0gNHJlbVxcclxcbiAgICB9XFxyXFxuICAgIC5sYXJnZS1hYm91dHtcXHJcXG4gICAgICBmb250LXNpemU6IDMuMnJlbTtcXHJcXG4gICAgfVxcclxcbiAgICAucGFyYWdyYXBoLWFib3V0e1xcclxcbiAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbiAgICB9XFxyXFxuICBcXHJcXG4gICAgLmFib3V0LWlubmVye1xcclxcbiAgICAgIGxpbmUtaGVpZ2h0OiAyLjVyZW07XFxyXFxuICAgIH1cXHJcXG4gICAgLm1hcC1pbm5lcntcXHJcXG4gICAgICB3aWR0aDogNXJlbTtcXHJcXG4gICAgfSAgXFxyXFxuICAgIC5jb250YWN0LWZvcm0gaW5wdXQsIHRleHRhcmVhIHtcXHJcXG4gICAgICB3aWR0aDogOTAlO1xcclxcbiAgICB9XFxyXFxuICAgIC5jb250YWN0LWZvcm0gdGV4dGFyZWEge1xcclxcbiAgICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnNraWxscy1pbmZve1xcclxcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjFyZW07XFxyXFxuICAgIH1cXHJcXG4gICAgLmNvbnRhY3QtYnV0dG9ue1xcclxcbiAgICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xcclxcbiAgICB9XFxyXFxuICBcXHJcXG4gIH1cXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMjgwcHgpe1xcclxcbiAgXFxyXFxuICAgIC5tYXAtaW5uZXJ7XFxyXFxuICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgfVxcclxcbiAgICAuYWJvdXQtaWNvbntcXHJcXG4gICAgICBnYXA6IDA7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG4gIFwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwic291cmNlUm9vdCI6IiJ9