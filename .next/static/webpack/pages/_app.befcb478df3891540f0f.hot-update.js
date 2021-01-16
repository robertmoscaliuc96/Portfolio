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
___CSS_LOADER_EXPORT___.push([module.i, "\r\n.about-image{\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat center top/cover;\r\n    width: 100%;\r\n    height: 100vh;\r\n  }\r\n\r\n\r\n/* About */\r\n.about-inner{\r\n    display: grid;\r\n    grid-template-columns: 2fr 1fr;\r\n    -webkit-transition-duration: 300ms;\r\n            transition-duration: 300ms;\r\n    animation: para 2s 1;\r\n    -webkit-animation: para 3s 1;\r\n    \r\n  }\r\n  .about-text{\r\n    margin-top: 15rem;\r\n    margin-left: 10rem;\r\n    margin-right: 5rem;\r\n    color: var(--text-color);\r\n  }\r\n  .map-inner{\r\n    height: 100vh;\r\n    background-color: white;\r\n  }\r\n  \r\n  .paragraph-about{\r\n    font-weight: 300;\r\n    line-height: 2rem;\r\n    word-spacing: 5px;\r\n    -webkit-animation: para 2s 1;\r\n            animation: para 2s 1;\r\n    margin-left: ;\r\n    margin-bottom: 2rem;\r\n  \r\n  \r\n  }\r\n  .about-text h3{\r\n    color: var(--dif-color);\r\n  }\r\n  .large-about{\r\n    color:var(--dif-color);\r\n    padding-bottom: 2rem;\r\n \r\n  }\r\n  \r\n  \r\n  .marker-box{\r\n    color: var(--text-color);\r\n    font-size: 1rem;\r\n    padding-left: 20px;\r\n    padding-bottom: 14px;\r\n    background-color: var(--light-dark);\r\n    width: 330px;\r\n    border-bottom-right-radius: 18px;\r\n    border-top-left-radius: 18px;\r\n    border-top-right-radius: 18px;\r\n  }\r\n  .marker-name {\r\n    display: -webkit-flex;\r\n    display: flex;\r\n    padding-top: 1rem;\r\n    letter-spacing: 1.5px;\r\n    font-weight: 300;\r\n  }\r\n  .marker-name i{\r\n    color: var(--dif-color);\r\n    font-size: 1.4rem;\r\n  }\r\n  .contact-form{\r\n    margin-top: 5%;\r\n  }\r\n\r\n  .contact-form input, textarea {\r\n    border: none;\r\n    background-color: var(--dark);\r\n    border-bottom: 2px solid var(--dif-color);\r\n    color: var(--dif-color);\r\n    margin: 1rem 1rem;\r\n    width: 100%;\r\n    height: 3rem;\r\n    font-size: 1.6rem;\r\n    padding-left: 0.6rem;\r\n    padding-top: 0.2rem;\r\n    -webkit-transition-duration: 300ms;\r\n            transition-duration: 300ms;\r\n    animation: para 2s 1;\r\n    -webkit-animation: para 3s 1;\r\n  }\r\n  .contact-form textarea{\r\n    margin: 1rem 1rem;\r\n    width: 100%;\r\n    height: 8rem;\r\n    font-size: 1.6rem;\r\n    resize: none;\r\n  }\r\n  .contact-button{\r\n    margin-top: 1rem;\r\n    margin-left: 1rem;\r\n  }\r\n  .about-icon{\r\n    \r\n  }\r\n  \r\n\r\n  \r\n@media (max-width: 768px){\r\n\r\n    .about-inner{\r\n      grid-template-columns: repeat(1,1fr);\r\n      overflow-x: scroll;\r\n    }\r\n    .map-inner{\r\n      display: none;\r\n    }\r\n    .about-text{\r\n      margin: 30% 5%;\r\n    }\r\n    .large-about{\r\n      font-size: 3.2rem;\r\n    }\r\n    .paragraph-about{\r\n      font-size: 1.3rem;\r\n    }\r\n  \r\n    .about-inner{\r\n      line-height: 2.5rem;\r\n    }\r\n    .map-inner{\r\n      width: 5rem;\r\n    }  \r\n    .contact-form input, textarea {\r\n      width: 90%;\r\n    }\r\n    .contact-form textarea {\r\n      width: 90%;\r\n    }\r\n\r\n    .skills-info{\r\n      line-height: 1.1rem;\r\n    }\r\n    .contact-button{\r\n      margin-left: 1rem;\r\n    }\r\n  \r\n  }\r\n  @media (min-width: 480px){\r\n  \r\n    .skills-info{\r\n      line-height: 1rem;\r\n    }\r\n    \r\n  }\r\n  ", "",{"version":3,"sources":["webpack://style/about.css"],"names":[],"mappings":";AACA;IACI,8EAAuE;IACvE,WAAW;IACX,aAAa;EACf;;;AAGF,UAAU;AACV;IACI,aAAa;IACb,8BAA8B;IAC9B,kCAA0B;YAA1B,0BAA0B;IAC1B,oBAAoB;IACpB,4BAA4B;;EAE9B;EACA;IACE,iBAAiB;IACjB,kBAAkB;IAClB,kBAAkB;IAClB,wBAAwB;EAC1B;EACA;IACE,aAAa;IACb,uBAAuB;EACzB;;EAEA;IACE,gBAAgB;IAChB,iBAAiB;IACjB,iBAAiB;IACjB,4BAAoB;YAApB,oBAAoB;IACpB,aAAa;IACb,mBAAmB;;;EAGrB;EACA;IACE,uBAAuB;EACzB;EACA;IACE,sBAAsB;IACtB,oBAAoB;;EAEtB;;;EAGA;IACE,wBAAwB;IACxB,eAAe;IACf,kBAAkB;IAClB,oBAAoB;IACpB,mCAAmC;IACnC,YAAY;IACZ,gCAAgC;IAChC,4BAA4B;IAC5B,6BAA6B;EAC/B;EACA;IACE,qBAAa;IAAb,aAAa;IACb,iBAAiB;IACjB,qBAAqB;IACrB,gBAAgB;EAClB;EACA;IACE,uBAAuB;IACvB,iBAAiB;EACnB;EACA;IACE,cAAc;EAChB;;EAEA;IACE,YAAY;IACZ,6BAA6B;IAC7B,yCAAyC;IACzC,uBAAuB;IACvB,iBAAiB;IACjB,WAAW;IACX,YAAY;IACZ,iBAAiB;IACjB,oBAAoB;IACpB,mBAAmB;IACnB,kCAA0B;YAA1B,0BAA0B;IAC1B,oBAAoB;IACpB,4BAA4B;EAC9B;EACA;IACE,iBAAiB;IACjB,WAAW;IACX,YAAY;IACZ,iBAAiB;IACjB,YAAY;EACd;EACA;IACE,gBAAgB;IAChB,iBAAiB;EACnB;EACA;;EAEA;;;;AAIF;;IAEI;MACE,oCAAoC;MACpC,kBAAkB;IACpB;IACA;MACE,aAAa;IACf;IACA;MACE,cAAc;IAChB;IACA;MACE,iBAAiB;IACnB;IACA;MACE,iBAAiB;IACnB;;IAEA;MACE,mBAAmB;IACrB;IACA;MACE,WAAW;IACb;IACA;MACE,UAAU;IACZ;IACA;MACE,UAAU;IACZ;;IAEA;MACE,mBAAmB;IACrB;IACA;MACE,iBAAiB;IACnB;;EAEF;EACA;;IAEE;MACE,iBAAiB;IACnB;;EAEF","sourcesContent":["\r\n.about-image{\r\n    background: url('../public/background5.png') no-repeat center top/cover;\r\n    width: 100%;\r\n    height: 100vh;\r\n  }\r\n\r\n\r\n/* About */\r\n.about-inner{\r\n    display: grid;\r\n    grid-template-columns: 2fr 1fr;\r\n    transition-duration: 300ms;\r\n    animation: para 2s 1;\r\n    -webkit-animation: para 3s 1;\r\n    \r\n  }\r\n  .about-text{\r\n    margin-top: 15rem;\r\n    margin-left: 10rem;\r\n    margin-right: 5rem;\r\n    color: var(--text-color);\r\n  }\r\n  .map-inner{\r\n    height: 100vh;\r\n    background-color: white;\r\n  }\r\n  \r\n  .paragraph-about{\r\n    font-weight: 300;\r\n    line-height: 2rem;\r\n    word-spacing: 5px;\r\n    animation: para 2s 1;\r\n    margin-left: ;\r\n    margin-bottom: 2rem;\r\n  \r\n  \r\n  }\r\n  .about-text h3{\r\n    color: var(--dif-color);\r\n  }\r\n  .large-about{\r\n    color:var(--dif-color);\r\n    padding-bottom: 2rem;\r\n \r\n  }\r\n  \r\n  \r\n  .marker-box{\r\n    color: var(--text-color);\r\n    font-size: 1rem;\r\n    padding-left: 20px;\r\n    padding-bottom: 14px;\r\n    background-color: var(--light-dark);\r\n    width: 330px;\r\n    border-bottom-right-radius: 18px;\r\n    border-top-left-radius: 18px;\r\n    border-top-right-radius: 18px;\r\n  }\r\n  .marker-name {\r\n    display: flex;\r\n    padding-top: 1rem;\r\n    letter-spacing: 1.5px;\r\n    font-weight: 300;\r\n  }\r\n  .marker-name i{\r\n    color: var(--dif-color);\r\n    font-size: 1.4rem;\r\n  }\r\n  .contact-form{\r\n    margin-top: 5%;\r\n  }\r\n\r\n  .contact-form input, textarea {\r\n    border: none;\r\n    background-color: var(--dark);\r\n    border-bottom: 2px solid var(--dif-color);\r\n    color: var(--dif-color);\r\n    margin: 1rem 1rem;\r\n    width: 100%;\r\n    height: 3rem;\r\n    font-size: 1.6rem;\r\n    padding-left: 0.6rem;\r\n    padding-top: 0.2rem;\r\n    transition-duration: 300ms;\r\n    animation: para 2s 1;\r\n    -webkit-animation: para 3s 1;\r\n  }\r\n  .contact-form textarea{\r\n    margin: 1rem 1rem;\r\n    width: 100%;\r\n    height: 8rem;\r\n    font-size: 1.6rem;\r\n    resize: none;\r\n  }\r\n  .contact-button{\r\n    margin-top: 1rem;\r\n    margin-left: 1rem;\r\n  }\r\n  .about-icon{\r\n    \r\n  }\r\n  \r\n\r\n  \r\n@media (max-width: 768px){\r\n\r\n    .about-inner{\r\n      grid-template-columns: repeat(1,1fr);\r\n      overflow-x: scroll;\r\n    }\r\n    .map-inner{\r\n      display: none;\r\n    }\r\n    .about-text{\r\n      margin: 30% 5%;\r\n    }\r\n    .large-about{\r\n      font-size: 3.2rem;\r\n    }\r\n    .paragraph-about{\r\n      font-size: 1.3rem;\r\n    }\r\n  \r\n    .about-inner{\r\n      line-height: 2.5rem;\r\n    }\r\n    .map-inner{\r\n      width: 5rem;\r\n    }  \r\n    .contact-form input, textarea {\r\n      width: 90%;\r\n    }\r\n    .contact-form textarea {\r\n      width: 90%;\r\n    }\r\n\r\n    .skills-info{\r\n      line-height: 1.1rem;\r\n    }\r\n    .contact-button{\r\n      margin-left: 1rem;\r\n    }\r\n  \r\n  }\r\n  @media (min-width: 480px){\r\n  \r\n    .skills-info{\r\n      line-height: 1rem;\r\n    }\r\n    \r\n  }\r\n  "],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGUvYWJvdXQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUN5RjtBQUNPO0FBQzFCO0FBQ3RFLDhCQUE4QixtRkFBMkI7QUFDekQseUNBQXlDLHNGQUErQixDQUFDLCtEQUE2QjtBQUN0RztBQUNBLDhCQUE4QixRQUFTLG9CQUFvQiwrRkFBK0Ysb0JBQW9CLHNCQUFzQixPQUFPLHdDQUF3QyxzQkFBc0IsdUNBQXVDLDJDQUEyQywyQ0FBMkMsNkJBQTZCLHFDQUFxQyxlQUFlLGtCQUFrQiwwQkFBMEIsMkJBQTJCLDJCQUEyQixpQ0FBaUMsT0FBTyxpQkFBaUIsc0JBQXNCLGdDQUFnQyxPQUFPLDZCQUE2Qix5QkFBeUIsMEJBQTBCLDBCQUEwQixxQ0FBcUMscUNBQXFDLHNCQUFzQiw0QkFBNEIsbUJBQW1CLHFCQUFxQixnQ0FBZ0MsT0FBTyxtQkFBbUIsK0JBQStCLDZCQUE2QixZQUFZLDhCQUE4QixpQ0FBaUMsd0JBQXdCLDJCQUEyQiw2QkFBNkIsNENBQTRDLHFCQUFxQix5Q0FBeUMscUNBQXFDLHNDQUFzQyxPQUFPLG9CQUFvQiw4QkFBOEIsc0JBQXNCLDBCQUEwQiw4QkFBOEIseUJBQXlCLE9BQU8scUJBQXFCLGdDQUFnQywwQkFBMEIsT0FBTyxvQkFBb0IsdUJBQXVCLE9BQU8seUNBQXlDLHFCQUFxQixzQ0FBc0Msa0RBQWtELGdDQUFnQywwQkFBMEIsb0JBQW9CLHFCQUFxQiwwQkFBMEIsNkJBQTZCLDRCQUE0QiwyQ0FBMkMsMkNBQTJDLDZCQUE2QixxQ0FBcUMsT0FBTyw2QkFBNkIsMEJBQTBCLG9CQUFvQixxQkFBcUIsMEJBQTBCLHFCQUFxQixPQUFPLHNCQUFzQix5QkFBeUIsMEJBQTBCLE9BQU8sa0JBQWtCLGVBQWUsOENBQThDLHlCQUF5QiwrQ0FBK0MsNkJBQTZCLFNBQVMsbUJBQW1CLHdCQUF3QixTQUFTLG9CQUFv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YXBwLmJlZmNiNDc4ZGYzODkxNTQwZjBmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fIGZyb20gXCIuLi9wdWJsaWMvYmFja2dyb3VuZDUucG5nXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxyXFxuLmFib3V0LWltYWdle1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIG5vLXJlcGVhdCBjZW50ZXIgdG9wL2NvdmVyO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIH1cXHJcXG5cXHJcXG5cXHJcXG4vKiBBYm91dCAqL1xcclxcbi5hYm91dC1pbm5lcntcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyO1xcclxcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDMwMG1zO1xcclxcbiAgICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDMwMG1zO1xcclxcbiAgICBhbmltYXRpb246IHBhcmEgMnMgMTtcXHJcXG4gICAgLXdlYmtpdC1hbmltYXRpb246IHBhcmEgM3MgMTtcXHJcXG4gICAgXFxyXFxuICB9XFxyXFxuICAuYWJvdXQtdGV4dHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTVyZW07XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxMHJlbTtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiA1cmVtO1xcclxcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxyXFxuICB9XFxyXFxuICAubWFwLWlubmVye1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLnBhcmFncmFwaC1hYm91dHtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDJyZW07XFxyXFxuICAgIHdvcmQtc3BhY2luZzogNXB4O1xcclxcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogcGFyYSAycyAxO1xcclxcbiAgICAgICAgICAgIGFuaW1hdGlvbjogcGFyYSAycyAxO1xcclxcbiAgICBtYXJnaW4tbGVmdDogO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcclxcbiAgXFxyXFxuICBcXHJcXG4gIH1cXHJcXG4gIC5hYm91dC10ZXh0IGgze1xcclxcbiAgICBjb2xvcjogdmFyKC0tZGlmLWNvbG9yKTtcXHJcXG4gIH1cXHJcXG4gIC5sYXJnZS1hYm91dHtcXHJcXG4gICAgY29sb3I6dmFyKC0tZGlmLWNvbG9yKTtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDJyZW07XFxyXFxuIFxcclxcbiAgfVxcclxcbiAgXFxyXFxuICBcXHJcXG4gIC5tYXJrZXItYm94e1xcclxcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMTRweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtZGFyayk7XFxyXFxuICAgIHdpZHRoOiAzMzBweDtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE4cHg7XFxyXFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE4cHg7XFxyXFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxOHB4O1xcclxcbiAgfVxcclxcbiAgLm1hcmtlci1uYW1lIHtcXHJcXG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xcclxcbiAgICBmb250LXdlaWdodDogMzAwO1xcclxcbiAgfVxcclxcbiAgLm1hcmtlci1uYW1lIGl7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1kaWYtY29sb3IpO1xcclxcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXHJcXG4gIH1cXHJcXG4gIC5jb250YWN0LWZvcm17XFxyXFxuICAgIG1hcmdpbi10b3A6IDUlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbnRhY3QtZm9ybSBpbnB1dCwgdGV4dGFyZWEge1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmspO1xcclxcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tZGlmLWNvbG9yKTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWRpZi1jb2xvcik7XFxyXFxuICAgIG1hcmdpbjogMXJlbSAxcmVtO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAzcmVtO1xcclxcbiAgICBmb250LXNpemU6IDEuNnJlbTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAwLjZyZW07XFxyXFxuICAgIHBhZGRpbmctdG9wOiAwLjJyZW07XFxyXFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMzAwbXM7XFxyXFxuICAgICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMzAwbXM7XFxyXFxuICAgIGFuaW1hdGlvbjogcGFyYSAycyAxO1xcclxcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogcGFyYSAzcyAxO1xcclxcbiAgfVxcclxcbiAgLmNvbnRhY3QtZm9ybSB0ZXh0YXJlYXtcXHJcXG4gICAgbWFyZ2luOiAxcmVtIDFyZW07XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDhyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xcclxcbiAgICByZXNpemU6IG5vbmU7XFxyXFxuICB9XFxyXFxuICAuY29udGFjdC1idXR0b257XFxyXFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xcclxcbiAgfVxcclxcbiAgLmFib3V0LWljb257XFxyXFxuICAgIFxcclxcbiAgfVxcclxcbiAgXFxyXFxuXFxyXFxuICBcXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpe1xcclxcblxcclxcbiAgICAuYWJvdXQtaW5uZXJ7XFxyXFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwxZnIpO1xcclxcbiAgICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcXHJcXG4gICAgfVxcclxcbiAgICAubWFwLWlubmVye1xcclxcbiAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG4gICAgLmFib3V0LXRleHR7XFxyXFxuICAgICAgbWFyZ2luOiAzMCUgNSU7XFxyXFxuICAgIH1cXHJcXG4gICAgLmxhcmdlLWFib3V0e1xcclxcbiAgICAgIGZvbnQtc2l6ZTogMy4ycmVtO1xcclxcbiAgICB9XFxyXFxuICAgIC5wYXJhZ3JhcGgtYWJvdXR7XFxyXFxuICAgICAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxuICAgIH1cXHJcXG4gIFxcclxcbiAgICAuYWJvdXQtaW5uZXJ7XFxyXFxuICAgICAgbGluZS1oZWlnaHQ6IDIuNXJlbTtcXHJcXG4gICAgfVxcclxcbiAgICAubWFwLWlubmVye1xcclxcbiAgICAgIHdpZHRoOiA1cmVtO1xcclxcbiAgICB9ICBcXHJcXG4gICAgLmNvbnRhY3QtZm9ybSBpbnB1dCwgdGV4dGFyZWEge1xcclxcbiAgICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIH1cXHJcXG4gICAgLmNvbnRhY3QtZm9ybSB0ZXh0YXJlYSB7XFxyXFxuICAgICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuc2tpbGxzLWluZm97XFxyXFxuICAgICAgbGluZS1oZWlnaHQ6IDEuMXJlbTtcXHJcXG4gICAgfVxcclxcbiAgICAuY29udGFjdC1idXR0b257XFxyXFxuICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XFxyXFxuICAgIH1cXHJcXG4gIFxcclxcbiAgfVxcclxcbiAgQG1lZGlhIChtaW4td2lkdGg6IDQ4MHB4KXtcXHJcXG4gIFxcclxcbiAgICAuc2tpbGxzLWluZm97XFxyXFxuICAgICAgbGluZS1oZWlnaHQ6IDFyZW07XFxyXFxuICAgIH1cXHJcXG4gICAgXFxyXFxuICB9XFxyXFxuICBcIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3R5bGUvYWJvdXQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFDQTtJQUNJLDhFQUF1RTtJQUN2RSxXQUFXO0lBQ1gsYUFBYTtFQUNmOzs7QUFHRixVQUFVO0FBQ1Y7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGtDQUEwQjtZQUExQiwwQkFBMEI7SUFDMUIsb0JBQW9CO0lBQ3BCLDRCQUE0Qjs7RUFFOUI7RUFDQTtJQUNFLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHdCQUF3QjtFQUMxQjtFQUNBO0lBQ0UsYUFBYTtJQUNiLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLDRCQUFvQjtZQUFwQixvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLG1CQUFtQjs7O0VBR3JCO0VBQ0E7SUFDRSx1QkFBdUI7RUFDekI7RUFDQTtJQUNFLHNCQUFzQjtJQUN0QixvQkFBb0I7O0VBRXRCOzs7RUFHQTtJQUNFLHdCQUF3QjtJQUN4QixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixtQ0FBbUM7SUFDbkMsWUFBWTtJQUNaLGdDQUFnQztJQUNoQyw0QkFBNEI7SUFDNUIsNkJBQTZCO0VBQy9CO0VBQ0E7SUFDRSxxQkFBYTtJQUFiLGFBQWE7SUFDYixpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTtJQUNFLFlBQVk7SUFDWiw2QkFBNkI7SUFDN0IseUNBQXlDO0lBQ3pDLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixrQ0FBMEI7WUFBMUIsMEJBQTBCO0lBQzFCLG9CQUFvQjtJQUNwQiw0QkFBNEI7RUFDOUI7RUFDQTtJQUNFLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixZQUFZO0VBQ2Q7RUFDQTtJQUNFLGdCQUFnQjtJQUNoQixpQkFBaUI7RUFDbkI7RUFDQTs7RUFFQTs7OztBQUlGOztJQUVJO01BQ0Usb0NBQW9DO01BQ3BDLGtCQUFrQjtJQUNwQjtJQUNBO01BQ0UsYUFBYTtJQUNmO0lBQ0E7TUFDRSxjQUFjO0lBQ2hCO0lBQ0E7TUFDRSxpQkFBaUI7SUFDbkI7SUFDQTtNQUNFLGlCQUFpQjtJQUNuQjs7SUFFQTtNQUNFLG1CQUFtQjtJQUNyQjtJQUNBO01BQ0UsV0FBVztJQUNiO0lBQ0E7TUFDRSxVQUFVO0lBQ1o7SUFDQTtNQUNFLFVBQVU7SUFDWjs7SUFFQTtNQUNFLG1CQUFtQjtJQUNyQjtJQUNBO01BQ0UsaUJBQWlCO0lBQ25COztFQUVGO0VBQ0E7O0lBRUU7TUFDRSxpQkFBaUI7SUFDbkI7O0VBRUZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxyXFxuLmFib3V0LWltYWdle1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uL3B1YmxpYy9iYWNrZ3JvdW5kNS5wbmcnKSBuby1yZXBlYXQgY2VudGVyIHRvcC9jb3ZlcjtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICB9XFxyXFxuXFxyXFxuXFxyXFxuLyogQWJvdXQgKi9cXHJcXG4uYWJvdXQtaW5uZXJ7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDFmcjtcXHJcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMzAwbXM7XFxyXFxuICAgIGFuaW1hdGlvbjogcGFyYSAycyAxO1xcclxcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogcGFyYSAzcyAxO1xcclxcbiAgICBcXHJcXG4gIH1cXHJcXG4gIC5hYm91dC10ZXh0e1xcclxcbiAgICBtYXJnaW4tdG9wOiAxNXJlbTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcmVtO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDVyZW07XFxyXFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXHJcXG4gIH1cXHJcXG4gIC5tYXAtaW5uZXJ7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAucGFyYWdyYXBoLWFib3V0e1xcclxcbiAgICBmb250LXdlaWdodDogMzAwO1xcclxcbiAgICBsaW5lLWhlaWdodDogMnJlbTtcXHJcXG4gICAgd29yZC1zcGFjaW5nOiA1cHg7XFxyXFxuICAgIGFuaW1hdGlvbjogcGFyYSAycyAxO1xcclxcbiAgICBtYXJnaW4tbGVmdDogO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcclxcbiAgXFxyXFxuICBcXHJcXG4gIH1cXHJcXG4gIC5hYm91dC10ZXh0IGgze1xcclxcbiAgICBjb2xvcjogdmFyKC0tZGlmLWNvbG9yKTtcXHJcXG4gIH1cXHJcXG4gIC5sYXJnZS1hYm91dHtcXHJcXG4gICAgY29sb3I6dmFyKC0tZGlmLWNvbG9yKTtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDJyZW07XFxyXFxuIFxcclxcbiAgfVxcclxcbiAgXFxyXFxuICBcXHJcXG4gIC5tYXJrZXItYm94e1xcclxcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMTRweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtZGFyayk7XFxyXFxuICAgIHdpZHRoOiAzMzBweDtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE4cHg7XFxyXFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE4cHg7XFxyXFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxOHB4O1xcclxcbiAgfVxcclxcbiAgLm1hcmtlci1uYW1lIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgcGFkZGluZy10b3A6IDFyZW07XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAxLjVweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG4gIH1cXHJcXG4gIC5tYXJrZXItbmFtZSBpe1xcclxcbiAgICBjb2xvcjogdmFyKC0tZGlmLWNvbG9yKTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxyXFxuICB9XFxyXFxuICAuY29udGFjdC1mb3Jte1xcclxcbiAgICBtYXJnaW4tdG9wOiA1JTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb250YWN0LWZvcm0gaW5wdXQsIHRleHRhcmVhIHtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrKTtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWRpZi1jb2xvcik7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1kaWYtY29sb3IpO1xcclxcbiAgICBtYXJnaW46IDFyZW0gMXJlbTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogM3JlbTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjZyZW07XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMC42cmVtO1xcclxcbiAgICBwYWRkaW5nLXRvcDogMC4ycmVtO1xcclxcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAzMDBtcztcXHJcXG4gICAgYW5pbWF0aW9uOiBwYXJhIDJzIDE7XFxyXFxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBwYXJhIDNzIDE7XFxyXFxuICB9XFxyXFxuICAuY29udGFjdC1mb3JtIHRleHRhcmVhe1xcclxcbiAgICBtYXJnaW46IDFyZW0gMXJlbTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogOHJlbTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjZyZW07XFxyXFxuICAgIHJlc2l6ZTogbm9uZTtcXHJcXG4gIH1cXHJcXG4gIC5jb250YWN0LWJ1dHRvbntcXHJcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XFxyXFxuICB9XFxyXFxuICAuYWJvdXQtaWNvbntcXHJcXG4gICAgXFxyXFxuICB9XFxyXFxuICBcXHJcXG5cXHJcXG4gIFxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCl7XFxyXFxuXFxyXFxuICAgIC5hYm91dC1pbm5lcntcXHJcXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLDFmcik7XFxyXFxuICAgICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xcclxcbiAgICB9XFxyXFxuICAgIC5tYXAtaW5uZXJ7XFxyXFxuICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgfVxcclxcbiAgICAuYWJvdXQtdGV4dHtcXHJcXG4gICAgICBtYXJnaW46IDMwJSA1JTtcXHJcXG4gICAgfVxcclxcbiAgICAubGFyZ2UtYWJvdXR7XFxyXFxuICAgICAgZm9udC1zaXplOiAzLjJyZW07XFxyXFxuICAgIH1cXHJcXG4gICAgLnBhcmFncmFwaC1hYm91dHtcXHJcXG4gICAgICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG4gICAgfVxcclxcbiAgXFxyXFxuICAgIC5hYm91dC1pbm5lcntcXHJcXG4gICAgICBsaW5lLWhlaWdodDogMi41cmVtO1xcclxcbiAgICB9XFxyXFxuICAgIC5tYXAtaW5uZXJ7XFxyXFxuICAgICAgd2lkdGg6IDVyZW07XFxyXFxuICAgIH0gIFxcclxcbiAgICAuY29udGFjdC1mb3JtIGlucHV0LCB0ZXh0YXJlYSB7XFxyXFxuICAgICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgfVxcclxcbiAgICAuY29udGFjdC1mb3JtIHRleHRhcmVhIHtcXHJcXG4gICAgICB3aWR0aDogOTAlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5za2lsbHMtaW5mb3tcXHJcXG4gICAgICBsaW5lLWhlaWdodDogMS4xcmVtO1xcclxcbiAgICB9XFxyXFxuICAgIC5jb250YWN0LWJ1dHRvbntcXHJcXG4gICAgICBtYXJnaW4tbGVmdDogMXJlbTtcXHJcXG4gICAgfVxcclxcbiAgXFxyXFxuICB9XFxyXFxuICBAbWVkaWEgKG1pbi13aWR0aDogNDgwcHgpe1xcclxcbiAgXFxyXFxuICAgIC5za2lsbHMtaW5mb3tcXHJcXG4gICAgICBsaW5lLWhlaWdodDogMXJlbTtcXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG4gIH1cXHJcXG4gIFwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwic291cmNlUm9vdCI6IiJ9