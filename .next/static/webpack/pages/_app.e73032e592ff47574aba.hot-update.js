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
___CSS_LOADER_EXPORT___.push([module.i, "\r\n.about-image{\r\n    \r\n    width: 100%;\r\n    height: 100vh;\r\n  }\r\n\r\n\r\n/* About */\r\n.about-inner{\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat center top/cover;\r\n    height: 100vh;\r\n    display: grid;\r\n    grid-template-columns: 2fr 1fr;\r\n  }\r\n  .about-text{\r\n    margin-top: 15rem;\r\n    margin-left: 10rem;\r\n    margin-right: 15rem;\r\n    color: var(--text-color);\r\n  }\r\n  .map-inner{\r\n    height: 100vh;\r\n    background-color: white;\r\n  }\r\n  \r\n  .paragraph-about{\r\n    font-weight: 300;\r\n    line-height: 2rem;\r\n    font-size: calc(10px + 1vw);\r\n    word-spacing: 5px;\r\n    -webkit-animation: para 3s 1;\r\n            animation: para 3s 1;\r\n    margin-bottom: 2rem;\r\n  }\r\n\r\n  .about-text h3{\r\n    color: var(--dif-color);\r\n  }\r\n  .large-about{\r\n    padding-bottom: 2rem;\r\n    -webkit-animation: para 2s 1;\r\n            animation: para 2s 1; \r\n  }\r\n  .large-about::first-letter{\r\n    color: var(--dif-color);\r\n    padding-bottom: 2rem;\r\n  }\r\n  \r\n  \r\n  .marker-box{\r\n    color: var(--text-color);\r\n    font-size: 1rem;\r\n    padding-left: 20px;\r\n    padding-bottom: 14px;\r\n    background-color: var(--light-dark);\r\n    width: 330px;\r\n    border-bottom-right-radius: 18px;\r\n    border-top-left-radius: 18px;\r\n    border-top-right-radius: 18px;\r\n    -webkit-animation: para 3s 1;\r\n            animation: para 3s 1;\r\n    -webkit-animation-duration: 3000ms;\r\n            animation-duration: 3000ms;\r\n  \r\n  }\r\n  .marker-name {\r\n    display: -webkit-flex;\r\n    display: flex;\r\n    padding-top: 1rem;\r\n    letter-spacing: 1.5px;\r\n    font-weight: 300;\r\n  }\r\n  .marker-name i{\r\n    color: var(--dif-color);\r\n    font-size: 1.4rem;\r\n  }\r\n\r\n  .contact-actions{\r\n    display: -webkit-flex;\r\n    display: flex;\r\n    grid-gap: 7rem;\r\n    gap: 7rem;\r\n    margin-bottom: 4rem;\r\n    -webkit-animation: para 4s 1;\r\n            animation: para 4s 1;\r\n    -webkit-animation-duration: 3400ms;\r\n            animation-duration: 3400ms;\r\n\r\n  }\r\n\r\n  .about-icon{\r\n    margin-top: 2rem;\r\n    color: white;\r\n  }\r\n\r\n\r\n  .about-icon i{\r\n    font-size: calc(45px + 1vw);\r\n    color: white;\r\n  }\r\n  .about-icon i:hover{\r\n    color: var(--dif-color);\r\n  }\r\n  .fa-paper-plane{\r\n    margin-right: 2rem;\r\n  }\r\n\r\n  .icon-about {\r\n    font-size: 4rem;\r\n    color: white;\r\n    margin-left:1.5rem;\r\n  }\r\n  .about-icon-title{\r\n    font-size: 2rem;\r\n    font-weight: 300;\r\n    text-align: center;\r\n    font-size: calc(10px + 1vw);\r\n\r\n\r\n  }\r\n  \r\n\r\n  \r\n@media (max-width: 768px){\r\n\r\n    .about-inner{\r\n      grid-template-columns: repeat(1,1fr);\r\n      overflow-x: scroll;\r\n    }\r\n    .map-inner{\r\n      display: none;\r\n    }\r\n    \r\n    .about-text{\r\n      margin: 10rem 4rem;\r\n    }\r\n    .large-about{\r\n      font-size: 3.2rem;\r\n    }\r\n    .paragraph-about{\r\n      font-size: 1.3rem;\r\n    }\r\n  \r\n    .about-inner{\r\n      line-height: 2.5rem;\r\n    }\r\n\r\n    .skills-info{\r\n      line-height: 1.1rem;\r\n    }\r\n    .contact-button{\r\n      margin-left: 1rem;\r\n    }\r\n  \r\n  }\r\n  @media (max-width: 1280px){\r\n  \r\n    .map-inner{\r\n      display: none;\r\n    }\r\n    .about-icon{\r\n      grid-gap: 0;\r\n      gap: 0;\r\n    }\r\n  }\r\n  ", "",{"version":3,"sources":["webpack://style/about.css"],"names":[],"mappings":";AACA;;IAEI,WAAW;IACX,aAAa;EACf;;;AAGF,UAAU;AACV;IACI,8EAAuE;IACvE,aAAa;IACb,aAAa;IACb,8BAA8B;EAChC;EACA;IACE,iBAAiB;IACjB,kBAAkB;IAClB,mBAAmB;IACnB,wBAAwB;EAC1B;EACA;IACE,aAAa;IACb,uBAAuB;EACzB;;EAEA;IACE,gBAAgB;IAChB,iBAAiB;IACjB,2BAA2B;IAC3B,iBAAiB;IACjB,4BAAoB;YAApB,oBAAoB;IACpB,mBAAmB;EACrB;;EAEA;IACE,uBAAuB;EACzB;EACA;IACE,oBAAoB;IACpB,4BAAoB;YAApB,oBAAoB;EACtB;EACA;IACE,uBAAuB;IACvB,oBAAoB;EACtB;;;EAGA;IACE,wBAAwB;IACxB,eAAe;IACf,kBAAkB;IAClB,oBAAoB;IACpB,mCAAmC;IACnC,YAAY;IACZ,gCAAgC;IAChC,4BAA4B;IAC5B,6BAA6B;IAC7B,4BAAoB;YAApB,oBAAoB;IACpB,kCAA0B;YAA1B,0BAA0B;;EAE5B;EACA;IACE,qBAAa;IAAb,aAAa;IACb,iBAAiB;IACjB,qBAAqB;IACrB,gBAAgB;EAClB;EACA;IACE,uBAAuB;IACvB,iBAAiB;EACnB;;EAEA;IACE,qBAAa;IAAb,aAAa;IACb,cAAS;IAAT,SAAS;IACT,mBAAmB;IACnB,4BAAoB;YAApB,oBAAoB;IACpB,kCAA0B;YAA1B,0BAA0B;;EAE5B;;EAEA;IACE,gBAAgB;IAChB,YAAY;EACd;;;EAGA;IACE,2BAA2B;IAC3B,YAAY;EACd;EACA;IACE,uBAAuB;EACzB;EACA;IACE,kBAAkB;EACpB;;EAEA;IACE,eAAe;IACf,YAAY;IACZ,kBAAkB;EACpB;EACA;IACE,eAAe;IACf,gBAAgB;IAChB,kBAAkB;IAClB,2BAA2B;;;EAG7B;;;;AAIF;;IAEI;MACE,oCAAoC;MACpC,kBAAkB;IACpB;IACA;MACE,aAAa;IACf;;IAEA;MACE,kBAAkB;IACpB;IACA;MACE,iBAAiB;IACnB;IACA;MACE,iBAAiB;IACnB;;IAEA;MACE,mBAAmB;IACrB;;IAEA;MACE,mBAAmB;IACrB;IACA;MACE,iBAAiB;IACnB;;EAEF;EACA;;IAEE;MACE,aAAa;IACf;IACA;MACE,WAAM;MAAN,MAAM;IACR;EACF","sourcesContent":["\r\n.about-image{\r\n    \r\n    width: 100%;\r\n    height: 100vh;\r\n  }\r\n\r\n\r\n/* About */\r\n.about-inner{\r\n    background: url('../public/background5.png') no-repeat center top/cover;\r\n    height: 100vh;\r\n    display: grid;\r\n    grid-template-columns: 2fr 1fr;\r\n  }\r\n  .about-text{\r\n    margin-top: 15rem;\r\n    margin-left: 10rem;\r\n    margin-right: 15rem;\r\n    color: var(--text-color);\r\n  }\r\n  .map-inner{\r\n    height: 100vh;\r\n    background-color: white;\r\n  }\r\n  \r\n  .paragraph-about{\r\n    font-weight: 300;\r\n    line-height: 2rem;\r\n    font-size: calc(10px + 1vw);\r\n    word-spacing: 5px;\r\n    animation: para 3s 1;\r\n    margin-bottom: 2rem;\r\n  }\r\n\r\n  .about-text h3{\r\n    color: var(--dif-color);\r\n  }\r\n  .large-about{\r\n    padding-bottom: 2rem;\r\n    animation: para 2s 1; \r\n  }\r\n  .large-about::first-letter{\r\n    color: var(--dif-color);\r\n    padding-bottom: 2rem;\r\n  }\r\n  \r\n  \r\n  .marker-box{\r\n    color: var(--text-color);\r\n    font-size: 1rem;\r\n    padding-left: 20px;\r\n    padding-bottom: 14px;\r\n    background-color: var(--light-dark);\r\n    width: 330px;\r\n    border-bottom-right-radius: 18px;\r\n    border-top-left-radius: 18px;\r\n    border-top-right-radius: 18px;\r\n    animation: para 3s 1;\r\n    animation-duration: 3000ms;\r\n  \r\n  }\r\n  .marker-name {\r\n    display: flex;\r\n    padding-top: 1rem;\r\n    letter-spacing: 1.5px;\r\n    font-weight: 300;\r\n  }\r\n  .marker-name i{\r\n    color: var(--dif-color);\r\n    font-size: 1.4rem;\r\n  }\r\n\r\n  .contact-actions{\r\n    display: flex;\r\n    gap: 7rem;\r\n    margin-bottom: 4rem;\r\n    animation: para 4s 1;\r\n    animation-duration: 3400ms;\r\n\r\n  }\r\n\r\n  .about-icon{\r\n    margin-top: 2rem;\r\n    color: white;\r\n  }\r\n\r\n\r\n  .about-icon i{\r\n    font-size: calc(45px + 1vw);\r\n    color: white;\r\n  }\r\n  .about-icon i:hover{\r\n    color: var(--dif-color);\r\n  }\r\n  .fa-paper-plane{\r\n    margin-right: 2rem;\r\n  }\r\n\r\n  .icon-about {\r\n    font-size: 4rem;\r\n    color: white;\r\n    margin-left:1.5rem;\r\n  }\r\n  .about-icon-title{\r\n    font-size: 2rem;\r\n    font-weight: 300;\r\n    text-align: center;\r\n    font-size: calc(10px + 1vw);\r\n\r\n\r\n  }\r\n  \r\n\r\n  \r\n@media (max-width: 768px){\r\n\r\n    .about-inner{\r\n      grid-template-columns: repeat(1,1fr);\r\n      overflow-x: scroll;\r\n    }\r\n    .map-inner{\r\n      display: none;\r\n    }\r\n    \r\n    .about-text{\r\n      margin: 10rem 4rem;\r\n    }\r\n    .large-about{\r\n      font-size: 3.2rem;\r\n    }\r\n    .paragraph-about{\r\n      font-size: 1.3rem;\r\n    }\r\n  \r\n    .about-inner{\r\n      line-height: 2.5rem;\r\n    }\r\n\r\n    .skills-info{\r\n      line-height: 1.1rem;\r\n    }\r\n    .contact-button{\r\n      margin-left: 1rem;\r\n    }\r\n  \r\n  }\r\n  @media (max-width: 1280px){\r\n  \r\n    .map-inner{\r\n      display: none;\r\n    }\r\n    .about-icon{\r\n      gap: 0;\r\n    }\r\n  }\r\n  "],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGUvYWJvdXQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUN5RjtBQUNPO0FBQzFCO0FBQ3RFLDhCQUE4QixtRkFBMkI7QUFDekQseUNBQXlDLHNGQUErQixDQUFDLCtEQUE2QjtBQUN0RztBQUNBLDhCQUE4QixRQUFTLG9CQUFvQiw0QkFBNEIsc0JBQXNCLE9BQU8sd0NBQXdDLCtGQUErRixzQkFBc0Isc0JBQXNCLHVDQUF1QyxPQUFPLGtCQUFrQiwwQkFBMEIsMkJBQTJCLDRCQUE0QixpQ0FBaUMsT0FBTyxpQkFBaUIsc0JBQXNCLGdDQUFnQyxPQUFPLDZCQUE2Qix5QkFBeUIsMEJBQTBCLG9DQUFvQywwQkFBMEIscUNBQXFDLHFDQUFxQyw0QkFBNEIsT0FBTyx5QkFBeUIsZ0NBQWdDLE9BQU8sbUJBQW1CLDZCQUE2QixxQ0FBcUMscUNBQXFDLFFBQVEsaUNBQWlDLGdDQUFnQyw2QkFBNkIsT0FBTyw4QkFBOEIsaUNBQWlDLHdCQUF3QiwyQkFBMkIsNkJBQTZCLDRDQUE0QyxxQkFBcUIseUNBQXlDLHFDQUFxQyxzQ0FBc0MscUNBQXFDLHFDQUFxQywyQ0FBMkMsMkNBQTJDLGFBQWEsb0JBQW9CLDhCQUE4QixzQkFBc0IsMEJBQTBCLDhCQUE4Qix5QkFBeUIsT0FBTyxxQkFBcUIsZ0NBQWdDLDBCQUEwQixPQUFPLDJCQUEyQiw4QkFBOEIsc0JBQXNCLHVCQUF1QixrQkFBa0IsNEJBQTRCLHFDQUFxQyxxQ0FBcUMsMkNBQTJDLDJDQUEyQyxXQUFXLHNCQUFzQix5QkFBeUIscUJBQXFCLE9BQU8sNEJBQTRCLG9DQUFvQyxxQkFBcUIsT0FBTywwQkFBMEIsZ0NBQWdDLE9BQU8sc0JBQXNCLDJCQUEyQixPQUFPLHVCQUF1Qix3QkFBd0IscUJBQXFCLDJCQUEyQixPQUFPLHdCQUF3Qix3QkFBd0IseUJBQXlCLDJCQUEyQixvQ0FBb0Ms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ZSxzRkFBdUIsRUFBQyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmU3MzAzMmU1OTJmZjQ3NTc0YWJhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fIGZyb20gXCIuLi9wdWJsaWMvYmFja2dyb3VuZDUucG5nXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxyXFxuLmFib3V0LWltYWdle1xcclxcbiAgICBcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICB9XFxyXFxuXFxyXFxuXFxyXFxuLyogQWJvdXQgKi9cXHJcXG4uYWJvdXQtaW5uZXJ7XFxyXFxuICAgIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgbm8tcmVwZWF0IGNlbnRlciB0b3AvY292ZXI7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDFmcjtcXHJcXG4gIH1cXHJcXG4gIC5hYm91dC10ZXh0e1xcclxcbiAgICBtYXJnaW4tdG9wOiAxNXJlbTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcmVtO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cmVtO1xcclxcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxyXFxuICB9XFxyXFxuICAubWFwLWlubmVye1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLnBhcmFncmFwaC1hYm91dHtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDJyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogY2FsYygxMHB4ICsgMXZ3KTtcXHJcXG4gICAgd29yZC1zcGFjaW5nOiA1cHg7XFxyXFxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBwYXJhIDNzIDE7XFxyXFxuICAgICAgICAgICAgYW5pbWF0aW9uOiBwYXJhIDNzIDE7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuYWJvdXQtdGV4dCBoM3tcXHJcXG4gICAgY29sb3I6IHZhcigtLWRpZi1jb2xvcik7XFxyXFxuICB9XFxyXFxuICAubGFyZ2UtYWJvdXR7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAycmVtO1xcclxcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogcGFyYSAycyAxO1xcclxcbiAgICAgICAgICAgIGFuaW1hdGlvbjogcGFyYSAycyAxOyBcXHJcXG4gIH1cXHJcXG4gIC5sYXJnZS1hYm91dDo6Zmlyc3QtbGV0dGVye1xcclxcbiAgICBjb2xvcjogdmFyKC0tZGlmLWNvbG9yKTtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDJyZW07XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIFxcclxcbiAgLm1hcmtlci1ib3h7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAxNHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1kYXJrKTtcXHJcXG4gICAgd2lkdGg6IDMzMHB4O1xcclxcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMThweDtcXHJcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMThweDtcXHJcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE4cHg7XFxyXFxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBwYXJhIDNzIDE7XFxyXFxuICAgICAgICAgICAgYW5pbWF0aW9uOiBwYXJhIDNzIDE7XFxyXFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAzMDAwbXM7XFxyXFxuICAgICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAzMDAwbXM7XFxyXFxuICBcXHJcXG4gIH1cXHJcXG4gIC5tYXJrZXItbmFtZSB7XFxyXFxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgcGFkZGluZy10b3A6IDFyZW07XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAxLjVweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG4gIH1cXHJcXG4gIC5tYXJrZXItbmFtZSBpe1xcclxcbiAgICBjb2xvcjogdmFyKC0tZGlmLWNvbG9yKTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29udGFjdC1hY3Rpb25ze1xcclxcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdyaWQtZ2FwOiA3cmVtO1xcclxcbiAgICBnYXA6IDdyZW07XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDRyZW07XFxyXFxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBwYXJhIDRzIDE7XFxyXFxuICAgICAgICAgICAgYW5pbWF0aW9uOiBwYXJhIDRzIDE7XFxyXFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAzNDAwbXM7XFxyXFxuICAgICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAzNDAwbXM7XFxyXFxuXFxyXFxuICB9XFxyXFxuXFxyXFxuICAuYWJvdXQtaWNvbntcXHJcXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgfVxcclxcblxcclxcblxcclxcbiAgLmFib3V0LWljb24gaXtcXHJcXG4gICAgZm9udC1zaXplOiBjYWxjKDQ1cHggKyAxdncpO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICB9XFxyXFxuICAuYWJvdXQtaWNvbiBpOmhvdmVye1xcclxcbiAgICBjb2xvcjogdmFyKC0tZGlmLWNvbG9yKTtcXHJcXG4gIH1cXHJcXG4gIC5mYS1wYXBlci1wbGFuZXtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAycmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmljb24tYWJvdXQge1xcclxcbiAgICBmb250LXNpemU6IDRyZW07XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6MS41cmVtO1xcclxcbiAgfVxcclxcbiAgLmFib3V0LWljb24tdGl0bGV7XFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IGNhbGMoMTBweCArIDF2dyk7XFxyXFxuXFxyXFxuXFxyXFxuICB9XFxyXFxuICBcXHJcXG5cXHJcXG4gIFxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCl7XFxyXFxuXFxyXFxuICAgIC5hYm91dC1pbm5lcntcXHJcXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLDFmcik7XFxyXFxuICAgICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xcclxcbiAgICB9XFxyXFxuICAgIC5tYXAtaW5uZXJ7XFxyXFxuICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG4gICAgLmFib3V0LXRleHR7XFxyXFxuICAgICAgbWFyZ2luOiAxMHJlbSA0cmVtO1xcclxcbiAgICB9XFxyXFxuICAgIC5sYXJnZS1hYm91dHtcXHJcXG4gICAgICBmb250LXNpemU6IDMuMnJlbTtcXHJcXG4gICAgfVxcclxcbiAgICAucGFyYWdyYXBoLWFib3V0e1xcclxcbiAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbiAgICB9XFxyXFxuICBcXHJcXG4gICAgLmFib3V0LWlubmVye1xcclxcbiAgICAgIGxpbmUtaGVpZ2h0OiAyLjVyZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnNraWxscy1pbmZve1xcclxcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjFyZW07XFxyXFxuICAgIH1cXHJcXG4gICAgLmNvbnRhY3QtYnV0dG9ue1xcclxcbiAgICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xcclxcbiAgICB9XFxyXFxuICBcXHJcXG4gIH1cXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMjgwcHgpe1xcclxcbiAgXFxyXFxuICAgIC5tYXAtaW5uZXJ7XFxyXFxuICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgfVxcclxcbiAgICAuYWJvdXQtaWNvbntcXHJcXG4gICAgICBncmlkLWdhcDogMDtcXHJcXG4gICAgICBnYXA6IDA7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG4gIFwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zdHlsZS9hYm91dC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQUNBOztJQUVJLFdBQVc7SUFDWCxhQUFhO0VBQ2Y7OztBQUdGLFVBQVU7QUFDVjtJQUNJLDhFQUF1RTtJQUN2RSxhQUFhO0lBQ2IsYUFBYTtJQUNiLDhCQUE4QjtFQUNoQztFQUNBO0lBQ0UsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsd0JBQXdCO0VBQzFCO0VBQ0E7SUFDRSxhQUFhO0lBQ2IsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQiwyQkFBMkI7SUFDM0IsaUJBQWlCO0lBQ2pCLDRCQUFvQjtZQUFwQixvQkFBb0I7SUFDcEIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSxvQkFBb0I7SUFDcEIsNEJBQW9CO1lBQXBCLG9CQUFvQjtFQUN0QjtFQUNBO0lBQ0UsdUJBQXVCO0lBQ3ZCLG9CQUFvQjtFQUN0Qjs7O0VBR0E7SUFDRSx3QkFBd0I7SUFDeEIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsbUNBQW1DO0lBQ25DLFlBQVk7SUFDWixnQ0FBZ0M7SUFDaEMsNEJBQTRCO0lBQzVCLDZCQUE2QjtJQUM3Qiw0QkFBb0I7WUFBcEIsb0JBQW9CO0lBQ3BCLGtDQUEwQjtZQUExQiwwQkFBMEI7O0VBRTVCO0VBQ0E7SUFDRSxxQkFBYTtJQUFiLGFBQWE7SUFDYixpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLHFCQUFhO0lBQWIsYUFBYTtJQUNiLGNBQVM7SUFBVCxTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLDRCQUFvQjtZQUFwQixvQkFBb0I7SUFDcEIsa0NBQTBCO1lBQTFCLDBCQUEwQjs7RUFFNUI7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsWUFBWTtFQUNkOzs7RUFHQTtJQUNFLDJCQUEyQjtJQUMzQixZQUFZO0VBQ2Q7RUFDQTtJQUNFLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsZUFBZTtJQUNmLFlBQVk7SUFDWixrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLDJCQUEyQjs7O0VBRzdCOzs7O0FBSUY7O0lBRUk7TUFDRSxvQ0FBb0M7TUFDcEMsa0JBQWtCO0lBQ3BCO0lBQ0E7TUFDRSxhQUFhO0lBQ2Y7O0lBRUE7TUFDRSxrQkFBa0I7SUFDcEI7SUFDQTtNQUNFLGlCQUFpQjtJQUNuQjtJQUNBO01BQ0UsaUJBQWlCO0lBQ25COztJQUVBO01BQ0UsbUJBQW1CO0lBQ3JCOztJQUVBO01BQ0UsbUJBQW1CO0lBQ3JCO0lBQ0E7TUFDRSxpQkFBaUI7SUFDbkI7O0VBRUY7RUFDQTs7SUFFRTtNQUNFLGFBQWE7SUFDZjtJQUNBO01BQ0UsV0FBTTtNQUFOLE1BQU07SUFDUjtFQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcclxcbi5hYm91dC1pbWFnZXtcXHJcXG4gICAgXFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgfVxcclxcblxcclxcblxcclxcbi8qIEFib3V0ICovXFxyXFxuLmFib3V0LWlubmVye1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uL3B1YmxpYy9iYWNrZ3JvdW5kNS5wbmcnKSBuby1yZXBlYXQgY2VudGVyIHRvcC9jb3ZlcjtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyO1xcclxcbiAgfVxcclxcbiAgLmFib3V0LXRleHR7XFxyXFxuICAgIG1hcmdpbi10b3A6IDE1cmVtO1xcclxcbiAgICBtYXJnaW4tbGVmdDogMTByZW07XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMTVyZW07XFxyXFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXHJcXG4gIH1cXHJcXG4gIC5tYXAtaW5uZXJ7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAucGFyYWdyYXBoLWFib3V0e1xcclxcbiAgICBmb250LXdlaWdodDogMzAwO1xcclxcbiAgICBsaW5lLWhlaWdodDogMnJlbTtcXHJcXG4gICAgZm9udC1zaXplOiBjYWxjKDEwcHggKyAxdncpO1xcclxcbiAgICB3b3JkLXNwYWNpbmc6IDVweDtcXHJcXG4gICAgYW5pbWF0aW9uOiBwYXJhIDNzIDE7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuYWJvdXQtdGV4dCBoM3tcXHJcXG4gICAgY29sb3I6IHZhcigtLWRpZi1jb2xvcik7XFxyXFxuICB9XFxyXFxuICAubGFyZ2UtYWJvdXR7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAycmVtO1xcclxcbiAgICBhbmltYXRpb246IHBhcmEgMnMgMTsgXFxyXFxuICB9XFxyXFxuICAubGFyZ2UtYWJvdXQ6OmZpcnN0LWxldHRlcntcXHJcXG4gICAgY29sb3I6IHZhcigtLWRpZi1jb2xvcik7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAycmVtO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICBcXHJcXG4gIC5tYXJrZXItYm94e1xcclxcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMTRweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtZGFyayk7XFxyXFxuICAgIHdpZHRoOiAzMzBweDtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE4cHg7XFxyXFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE4cHg7XFxyXFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxOHB4O1xcclxcbiAgICBhbmltYXRpb246IHBhcmEgM3MgMTtcXHJcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAzMDAwbXM7XFxyXFxuICBcXHJcXG4gIH1cXHJcXG4gIC5tYXJrZXItbmFtZSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMS41cHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxuICB9XFxyXFxuICAubWFya2VyLW5hbWUgaXtcXHJcXG4gICAgY29sb3I6IHZhcigtLWRpZi1jb2xvcik7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbnRhY3QtYWN0aW9uc3tcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiA3cmVtO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiA0cmVtO1xcclxcbiAgICBhbmltYXRpb246IHBhcmEgNHMgMTtcXHJcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAzNDAwbXM7XFxyXFxuXFxyXFxuICB9XFxyXFxuXFxyXFxuICAuYWJvdXQtaWNvbntcXHJcXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgfVxcclxcblxcclxcblxcclxcbiAgLmFib3V0LWljb24gaXtcXHJcXG4gICAgZm9udC1zaXplOiBjYWxjKDQ1cHggKyAxdncpO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICB9XFxyXFxuICAuYWJvdXQtaWNvbiBpOmhvdmVye1xcclxcbiAgICBjb2xvcjogdmFyKC0tZGlmLWNvbG9yKTtcXHJcXG4gIH1cXHJcXG4gIC5mYS1wYXBlci1wbGFuZXtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAycmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmljb24tYWJvdXQge1xcclxcbiAgICBmb250LXNpemU6IDRyZW07XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6MS41cmVtO1xcclxcbiAgfVxcclxcbiAgLmFib3V0LWljb24tdGl0bGV7XFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IGNhbGMoMTBweCArIDF2dyk7XFxyXFxuXFxyXFxuXFxyXFxuICB9XFxyXFxuICBcXHJcXG5cXHJcXG4gIFxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCl7XFxyXFxuXFxyXFxuICAgIC5hYm91dC1pbm5lcntcXHJcXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLDFmcik7XFxyXFxuICAgICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xcclxcbiAgICB9XFxyXFxuICAgIC5tYXAtaW5uZXJ7XFxyXFxuICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG4gICAgLmFib3V0LXRleHR7XFxyXFxuICAgICAgbWFyZ2luOiAxMHJlbSA0cmVtO1xcclxcbiAgICB9XFxyXFxuICAgIC5sYXJnZS1hYm91dHtcXHJcXG4gICAgICBmb250LXNpemU6IDMuMnJlbTtcXHJcXG4gICAgfVxcclxcbiAgICAucGFyYWdyYXBoLWFib3V0e1xcclxcbiAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbiAgICB9XFxyXFxuICBcXHJcXG4gICAgLmFib3V0LWlubmVye1xcclxcbiAgICAgIGxpbmUtaGVpZ2h0OiAyLjVyZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnNraWxscy1pbmZve1xcclxcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjFyZW07XFxyXFxuICAgIH1cXHJcXG4gICAgLmNvbnRhY3QtYnV0dG9ue1xcclxcbiAgICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xcclxcbiAgICB9XFxyXFxuICBcXHJcXG4gIH1cXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMjgwcHgpe1xcclxcbiAgXFxyXFxuICAgIC5tYXAtaW5uZXJ7XFxyXFxuICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgfVxcclxcbiAgICAuYWJvdXQtaWNvbntcXHJcXG4gICAgICBnYXA6IDA7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG4gIFwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwic291cmNlUm9vdCI6IiJ9