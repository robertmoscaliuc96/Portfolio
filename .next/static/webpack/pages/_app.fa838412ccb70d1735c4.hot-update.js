webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./style/navbar.css":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./style/navbar.css ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/* NavBar */\r\n\r\n.navbar {\r\n    display: -webkit-flex;\r\n    display: flex;\r\n    -webkit-flex-flow: column nowrap;\r\n            flex-flow: column nowrap;\r\n    -webkit-justify-content: space-between;\r\n            justify-content: space-between;\r\n    position: absolute;\r\n    z-index: 1;\r\n    height: 100%;\r\n    background-color: var(--dark-color);\r\n    -webkit-animation: para 2s 1;\r\n            animation: para 2s 1;\r\n    \r\n  }\r\n  \r\n  .nav-list{\r\n    -webkit-justify-content: center;\r\n            justify-content: center;\r\n    -webkit-align-items: center;\r\n            align-items: center;\r\n    list-style: none;\r\n    display: -webkit-flex;\r\n    display: flex;\r\n    grid-gap:2rem;\r\n    gap:2rem;\r\n    -webkit-flex-flow: column nowrap;\r\n            flex-flow: column nowrap;\r\n  }\r\n  \r\n  .nav-item{\r\n    font-size: 1.7rem;\r\n    color: var(--light-dark);\r\n    -webkit-transition-duration: 500ms;\r\n            transition-duration: 500ms;\r\n  }\r\n  \r\n  .nav-item:hover{\r\n    color:var(--dif-color);\r\n  }\r\n  \r\n  .nav-social{\r\n    display: -webkit-flex;\r\n    display: flex;\r\n    -webkit-flex-flow: column nowrap;\r\n            flex-flow: column nowrap;\r\n    -webkit-justify-content: space-between;\r\n            justify-content: space-between;\r\n    -webkit-align-items: center;\r\n            align-items: center;\r\n    font-size: 1.6rem;\r\n    margin-bottom: 1rem;\r\n    -webkit-transition-duration: 300ms;\r\n            transition-duration: 300ms;\r\n  }\r\n  .nav-social-item{\r\n    color:  var(--light-dark);\r\n    -webkit-transition-duration: 500ms;\r\n            transition-duration: 500ms;\r\n  }\r\n  .nav-social-item:hover{\r\n    color: var(--dif-color);\r\n  }\r\n  .line-social{\r\n    width: 0.2rem;\r\n    height: 5rem;\r\n    background-color: var(--dif-color);\r\n  }\r\n\r\n\r\n/* Media */\r\n\r\n@media (min-width: 1600px){\r\n\r\n}\r\n\r\n@media (min-width: 1024px) and (max-width:1500px){\r\n\r\n}\r\n\r\n@media (max-width: 1024px){\r\n\r\n  .navbar{\r\n    position: relative;\r\n    -webkit-flex-flow: row nowrap;\r\n            flex-flow: row nowrap;\r\n    x-index: 1;\r\n    width: auto;\r\n    height: 5.5rem;\r\n  }\r\n  .nav-list{\r\n    display: -webkit-flex;\r\n    display: flex;\r\n    -webkit-flex-flow: row nowrap;\r\n            flex-flow: row nowrap;\r\n    -webkit-justify-content: center;\r\n            justify-content: center;\r\n    -webkit-align-items: center;\r\n            align-items: center;\r\n    padding-top: 10%;\r\n  }\r\n  .nav-social{\r\n    padding-top: 20%;\r\n    display: -webkit-flex;\r\n    display: flex;\r\n    -webkit-flex-flow: row nowrap;\r\n            flex-flow: row nowrap;\r\n    grid-gap: 2rem;\r\n    gap: 2rem;\r\n  }\r\n\r\n\r\n}\r\n\r\n\r\n@media (max-width: 768px){\r\n\r\n  .nav-list{\r\n    display: -webkit-flex;\r\n    display: flex;\r\n    -webkit-flex-flow: row nowrap;\r\n            flex-flow: row nowrap;\r\n    -webkit-justify-content: center;\r\n            justify-content: center;\r\n    -webkit-align-items: center;\r\n            align-items: center;\r\n    padding-top: 10%;\r\n  }\r\n  .nav-social{\r\n    padding-top: 20%;\r\n    display: -webkit-flex;\r\n    display: flex;\r\n    -webkit-flex-flow: row nowrap;\r\n            flex-flow: row nowrap;\r\n    grid-gap: 2rem;\r\n    gap: 2rem;\r\n  }\r\n\r\n\r\n  .navbar{\r\n    -webkit-justify-content: unset;\r\n            justify-content: unset;\r\n    -webkit-align-items: unset;\r\n            align-items: unset;\r\n    z-index: 1;\r\n  }\r\n  .nav-item{\r\n    font-size: 1.5rem;\r\n\r\n  }\r\n  .nav-social{\r\n    font-size: 1rem;\r\n    margin-bottom: 1rem;\r\n \r\n  }\r\n  .nav-list{\r\n    list-style: none;\r\n    display: -webkit-flex;\r\n    display: flex;\r\n    grid-gap:2rem;\r\n    gap:2rem;\r\n    -webkit-flex-flow: column nowrap;\r\n            flex-flow: column nowrap;\r\n  }\r\n\r\n\r\n}\r\n@media (min-width: 480px){\r\n\r\n}\r\n", "",{"version":3,"sources":["webpack://style/navbar.css"],"names":[],"mappings":"AAAA,WAAW;;AAEX;IACI,qBAAa;IAAb,aAAa;IACb,gCAAwB;YAAxB,wBAAwB;IACxB,sCAA8B;YAA9B,8BAA8B;IAC9B,kBAAkB;IAClB,UAAU;IACV,YAAY;IACZ,mCAAmC;IACnC,4BAAoB;YAApB,oBAAoB;;EAEtB;;EAEA;IACE,+BAAuB;YAAvB,uBAAuB;IACvB,2BAAmB;YAAnB,mBAAmB;IACnB,gBAAgB;IAChB,qBAAa;IAAb,aAAa;IACb,aAAQ;IAAR,QAAQ;IACR,gCAAwB;YAAxB,wBAAwB;EAC1B;;EAEA;IACE,iBAAiB;IACjB,wBAAwB;IACxB,kCAA0B;YAA1B,0BAA0B;EAC5B;;EAEA;IACE,sBAAsB;EACxB;;EAEA;IACE,qBAAa;IAAb,aAAa;IACb,gCAAwB;YAAxB,wBAAwB;IACxB,sCAA8B;YAA9B,8BAA8B;IAC9B,2BAAmB;YAAnB,mBAAmB;IACnB,iBAAiB;IACjB,mBAAmB;IACnB,kCAA0B;YAA1B,0BAA0B;EAC5B;EACA;IACE,yBAAyB;IACzB,kCAA0B;YAA1B,0BAA0B;EAC5B;EACA;IACE,uBAAuB;EACzB;EACA;IACE,aAAa;IACb,YAAY;IACZ,kCAAkC;EACpC;;;AAGF,UAAU;;AAEV;;AAEA;;AAEA;;AAEA;;AAEA;;EAEE;IACE,kBAAkB;IAClB,6BAAqB;YAArB,qBAAqB;IACrB,UAAU;IACV,WAAW;IACX,cAAc;EAChB;EACA;IACE,qBAAa;IAAb,aAAa;IACb,6BAAqB;YAArB,qBAAqB;IACrB,+BAAuB;YAAvB,uBAAuB;IACvB,2BAAmB;YAAnB,mBAAmB;IACnB,gBAAgB;EAClB;EACA;IACE,gBAAgB;IAChB,qBAAa;IAAb,aAAa;IACb,6BAAqB;YAArB,qBAAqB;IACrB,cAAS;IAAT,SAAS;EACX;;;AAGF;;;AAGA;;EAEE;IACE,qBAAa;IAAb,aAAa;IACb,6BAAqB;YAArB,qBAAqB;IACrB,+BAAuB;YAAvB,uBAAuB;IACvB,2BAAmB;YAAnB,mBAAmB;IACnB,gBAAgB;EAClB;EACA;IACE,gBAAgB;IAChB,qBAAa;IAAb,aAAa;IACb,6BAAqB;YAArB,qBAAqB;IACrB,cAAS;IAAT,SAAS;EACX;;;EAGA;IACE,8BAAsB;YAAtB,sBAAsB;IACtB,0BAAkB;YAAlB,kBAAkB;IAClB,UAAU;EACZ;EACA;IACE,iBAAiB;;EAEnB;EACA;IACE,eAAe;IACf,mBAAmB;;EAErB;EACA;IACE,gBAAgB;IAChB,qBAAa;IAAb,aAAa;IACb,aAAQ;IAAR,QAAQ;IACR,gCAAwB;YAAxB,wBAAwB;EAC1B;;;AAGF;AACA;;AAEA","sourcesContent":["/* NavBar */\r\n\r\n.navbar {\r\n    display: flex;\r\n    flex-flow: column nowrap;\r\n    justify-content: space-between;\r\n    position: absolute;\r\n    z-index: 1;\r\n    height: 100%;\r\n    background-color: var(--dark-color);\r\n    animation: para 2s 1;\r\n    \r\n  }\r\n  \r\n  .nav-list{\r\n    justify-content: center;\r\n    align-items: center;\r\n    list-style: none;\r\n    display: flex;\r\n    gap:2rem;\r\n    flex-flow: column nowrap;\r\n  }\r\n  \r\n  .nav-item{\r\n    font-size: 1.7rem;\r\n    color: var(--light-dark);\r\n    transition-duration: 500ms;\r\n  }\r\n  \r\n  .nav-item:hover{\r\n    color:var(--dif-color);\r\n  }\r\n  \r\n  .nav-social{\r\n    display: flex;\r\n    flex-flow: column nowrap;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    font-size: 1.6rem;\r\n    margin-bottom: 1rem;\r\n    transition-duration: 300ms;\r\n  }\r\n  .nav-social-item{\r\n    color:  var(--light-dark);\r\n    transition-duration: 500ms;\r\n  }\r\n  .nav-social-item:hover{\r\n    color: var(--dif-color);\r\n  }\r\n  .line-social{\r\n    width: 0.2rem;\r\n    height: 5rem;\r\n    background-color: var(--dif-color);\r\n  }\r\n\r\n\r\n/* Media */\r\n\r\n@media (min-width: 1600px){\r\n\r\n}\r\n\r\n@media (min-width: 1024px) and (max-width:1500px){\r\n\r\n}\r\n\r\n@media (max-width: 1024px){\r\n\r\n  .navbar{\r\n    position: relative;\r\n    flex-flow: row nowrap;\r\n    x-index: 1;\r\n    width: auto;\r\n    height: 5.5rem;\r\n  }\r\n  .nav-list{\r\n    display: flex;\r\n    flex-flow: row nowrap;\r\n    justify-content: center;\r\n    align-items: center;\r\n    padding-top: 10%;\r\n  }\r\n  .nav-social{\r\n    padding-top: 20%;\r\n    display: flex;\r\n    flex-flow: row nowrap;\r\n    gap: 2rem;\r\n  }\r\n\r\n\r\n}\r\n\r\n\r\n@media (max-width: 768px){\r\n\r\n  .nav-list{\r\n    display: flex;\r\n    flex-flow: row nowrap;\r\n    justify-content: center;\r\n    align-items: center;\r\n    padding-top: 10%;\r\n  }\r\n  .nav-social{\r\n    padding-top: 20%;\r\n    display: flex;\r\n    flex-flow: row nowrap;\r\n    gap: 2rem;\r\n  }\r\n\r\n\r\n  .navbar{\r\n    justify-content: unset;\r\n    align-items: unset;\r\n    z-index: 1;\r\n  }\r\n  .nav-item{\r\n    font-size: 1.5rem;\r\n\r\n  }\r\n  .nav-social{\r\n    font-size: 1rem;\r\n    margin-bottom: 1rem;\r\n \r\n  }\r\n  .nav-list{\r\n    list-style: none;\r\n    display: flex;\r\n    gap:2rem;\r\n    flex-flow: column nowrap;\r\n  }\r\n\r\n\r\n}\r\n@media (min-width: 480px){\r\n\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGUvbmF2YmFyLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDeUY7QUFDekYsOEJBQThCLG1GQUEyQjtBQUN6RDtBQUNBLDhCQUE4QixRQUFTLGdDQUFnQyw4QkFBOEIsc0JBQXNCLHlDQUF5Qyx5Q0FBeUMsK0NBQStDLCtDQUErQywyQkFBMkIsbUJBQW1CLHFCQUFxQiw0Q0FBNEMscUNBQXFDLHFDQUFxQyxlQUFlLHNCQUFzQix3Q0FBd0Msd0NBQXdDLG9DQUFvQyxvQ0FBb0MseUJBQXlCLDhCQUE4QixzQkFBc0Isc0JBQXNCLGlCQUFpQix5Q0FBeUMseUNBQXlDLE9BQU8sc0JBQXNCLDBCQUEwQixpQ0FBaUMsMkNBQTJDLDJDQUEyQyxPQUFPLDRCQUE0QiwrQkFBK0IsT0FBTyx3QkFBd0IsOEJBQThCLHNCQUFzQix5Q0FBeUMseUNBQXlDLCtDQUErQywrQ0FBK0Msb0NBQW9DLG9DQUFvQywwQkFBMEIsNEJBQTRCLDJDQUEyQywyQ0FBMkMsT0FBTyx1QkFBdUIsa0NBQWtDLDJDQUEyQywyQ0FBMkMsT0FBTyw2QkFBNkIsZ0NBQWdDLE9BQU8sbUJBQW1CLHNCQUFzQixxQkFBcUIsMkNBQTJDLE9BQU8sMERBQTBELFNBQVMsMERBQTBELFNBQVMsbUNBQW1DLGtCQUFrQiwyQkFBMkIsc0NBQXNDLHNDQUFzQyxtQkFBbUIsb0JBQW9CLHVCQUF1QixPQUFPLGdCQUFnQiw4QkFBOEIsc0JBQXNCLHNDQUFzQyxzQ0FBc0Msd0NBQXdDLHdDQUF3QyxvQ0FBb0Msb0NBQW9DLHlCQUF5QixPQUFPLGtCQUFrQix5QkFBeUIsOEJBQThCLHNCQUFzQixzQ0FBc0Msc0NBQXNDLHVCQUF1QixrQkFBa0IsT0FBTyxhQUFhLHNDQUFzQyxvQkFBb0IsOEJBQThCLHNCQUFzQixzQ0FBc0Msc0NBQXNDLHdDQUF3Qyx3Q0FBd0Msb0NBQW9DLG9DQUFvQyx5QkFBeUIsT0FBTyxrQkFBa0IseUJBQXlCLDhCQUE4QixzQkFBc0Isc0NBQXNDLHNDQUFzQyx1QkFBdUIsa0JBQWtCLE9BQU8sc0JBQXNCLHVDQUF1Qyx1Q0FBdUMsbUNBQW1DLG1DQUFtQyxtQkFBbUIsT0FBTyxnQkFBZ0IsMEJBQTBCLFdBQVcsa0JBQWtCLHdCQUF3Qiw0QkFBNEIsWUFBWSxnQkFBZ0IseUJBQXlCLDhCQUE4QixzQkFBc0Isc0JBQXNCLGlCQUFpQix5Q0FBeUMseUNBQXlDLE9BQU8sYUFBYSw4QkFBOEIsU0FBUyxXQUFXLHVGQUF1RixLQUFLLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxjQUFjLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsWUFBWSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksUUFBUSxXQUFXLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxZQUFZLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLE9BQU8sTUFBTSxLQUFLLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLFlBQVksVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsS0FBSyxLQUFLLGFBQWEsTUFBTSxLQUFLLFVBQVUsYUFBYSxNQUFNLEtBQUssWUFBWSxZQUFZLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxRQUFRLEtBQUssTUFBTSxzREFBc0Qsc0JBQXNCLGlDQUFpQyx1Q0FBdUMsMkJBQTJCLG1CQUFtQixxQkFBcUIsNENBQTRDLDZCQUE2QixlQUFlLHNCQUFzQixnQ0FBZ0MsNEJBQTRCLHlCQUF5QixzQkFBc0IsaUJBQWlCLGlDQUFpQyxPQUFPLHNCQUFzQiwwQkFBMEIsaUNBQWlDLG1DQUFtQyxPQUFPLDRCQUE0QiwrQkFBK0IsT0FBTyx3QkFBd0Isc0JBQXNCLGlDQUFpQyx1Q0FBdUMsNEJBQTRCLDBCQUEwQiw0QkFBNEIsbUNBQW1DLE9BQU8sdUJBQXVCLGtDQUFrQyxtQ0FBbUMsT0FBTyw2QkFBNkIsZ0NBQWdDLE9BQU8sbUJBQW1CLHNCQUFzQixxQkFBcUIsMkNBQTJDLE9BQU8sMERBQTBELFNBQVMsMERBQTBELFNBQVMsbUNBQW1DLGtCQUFrQiwyQkFBMkIsOEJBQThCLG1CQUFtQixvQkFBb0IsdUJBQXVCLE9BQU8sZ0JBQWdCLHNCQUFzQiw4QkFBOEIsZ0NBQWdDLDRCQUE0Qix5QkFBeUIsT0FBTyxrQkFBa0IseUJBQXlCLHNCQUFzQiw4QkFBOEIsa0JBQWtCLE9BQU8sYUFBYSxzQ0FBc0Msb0JBQW9CLHNCQUFzQiw4QkFBOEIsZ0NBQWdDLDRCQUE0Qix5QkFBeUIsT0FBTyxrQkFBa0IseUJBQXlCLHNCQUFzQiw4QkFBOEIsa0JBQWtCLE9BQU8sc0JBQXNCLCtCQUErQiwyQkFBMkIsbUJBQW1CLE9BQU8sZ0JBQWdCLDBCQUEwQixXQUFXLGtCQUFrQix3QkFBd0IsNEJBQTRCLFlBQVksZ0JBQWdCLHlCQUF5QixzQkFBc0IsaUJBQWlCLGlDQUFpQyxPQUFPLGFBQWEsOEJBQThCLFNBQVMsdUJBQXVCO0FBQ3g5UDtBQUNlLHNGQUF1QixFQUFDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuZmE4Mzg0MTJjY2I3MGQxNzM1YzQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIE5hdkJhciAqL1xcclxcblxcclxcbi5uYXZiYXIge1xcclxcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIC13ZWJraXQtZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcclxcbiAgICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXHJcXG4gICAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHotaW5kZXg6IDE7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1jb2xvcik7XFxyXFxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBwYXJhIDJzIDE7XFxyXFxuICAgICAgICAgICAgYW5pbWF0aW9uOiBwYXJhIDJzIDE7XFxyXFxuICAgIFxcclxcbiAgfVxcclxcbiAgXFxyXFxuICAubmF2LWxpc3R7XFxyXFxuICAgIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdyaWQtZ2FwOjJyZW07XFxyXFxuICAgIGdhcDoycmVtO1xcclxcbiAgICAtd2Via2l0LWZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXHJcXG4gICAgICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5uYXYtaXRlbXtcXHJcXG4gICAgZm9udC1zaXplOiAxLjdyZW07XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1saWdodC1kYXJrKTtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtcztcXHJcXG4gICAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtcztcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLm5hdi1pdGVtOmhvdmVye1xcclxcbiAgICBjb2xvcjp2YXIoLS1kaWYtY29sb3IpO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAubmF2LXNvY2lhbHtcXHJcXG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAtd2Via2l0LWZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXHJcXG4gICAgICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxyXFxuICAgIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDMwMG1zO1xcclxcbiAgICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDMwMG1zO1xcclxcbiAgfVxcclxcbiAgLm5hdi1zb2NpYWwtaXRlbXtcXHJcXG4gICAgY29sb3I6ICB2YXIoLS1saWdodC1kYXJrKTtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtcztcXHJcXG4gICAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtcztcXHJcXG4gIH1cXHJcXG4gIC5uYXYtc29jaWFsLWl0ZW06aG92ZXJ7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1kaWYtY29sb3IpO1xcclxcbiAgfVxcclxcbiAgLmxpbmUtc29jaWFse1xcclxcbiAgICB3aWR0aDogMC4ycmVtO1xcclxcbiAgICBoZWlnaHQ6IDVyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRpZi1jb2xvcik7XFxyXFxuICB9XFxyXFxuXFxyXFxuXFxyXFxuLyogTWVkaWEgKi9cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogMTYwMHB4KXtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkgYW5kIChtYXgtd2lkdGg6MTUwMHB4KXtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCl7XFxyXFxuXFxyXFxuICAubmF2YmFye1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIC13ZWJraXQtZmxleC1mbG93OiByb3cgbm93cmFwO1xcclxcbiAgICAgICAgICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcXHJcXG4gICAgeC1pbmRleDogMTtcXHJcXG4gICAgd2lkdGg6IGF1dG87XFxyXFxuICAgIGhlaWdodDogNS41cmVtO1xcclxcbiAgfVxcclxcbiAgLm5hdi1saXN0e1xcclxcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIC13ZWJraXQtZmxleC1mbG93OiByb3cgbm93cmFwO1xcclxcbiAgICAgICAgICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcXHJcXG4gICAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAxMCU7XFxyXFxuICB9XFxyXFxuICAubmF2LXNvY2lhbHtcXHJcXG4gICAgcGFkZGluZy10b3A6IDIwJTtcXHJcXG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAtd2Via2l0LWZsZXgtZmxvdzogcm93IG5vd3JhcDtcXHJcXG4gICAgICAgICAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XFxyXFxuICAgIGdyaWQtZ2FwOiAycmVtO1xcclxcbiAgICBnYXA6IDJyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuXFxyXFxufVxcclxcblxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCl7XFxyXFxuXFxyXFxuICAubmF2LWxpc3R7XFxyXFxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgLXdlYmtpdC1mbGV4LWZsb3c6IHJvdyBub3dyYXA7XFxyXFxuICAgICAgICAgICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xcclxcbiAgICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZy10b3A6IDEwJTtcXHJcXG4gIH1cXHJcXG4gIC5uYXYtc29jaWFse1xcclxcbiAgICBwYWRkaW5nLXRvcDogMjAlO1xcclxcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIC13ZWJraXQtZmxleC1mbG93OiByb3cgbm93cmFwO1xcclxcbiAgICAgICAgICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcXHJcXG4gICAgZ3JpZC1nYXA6IDJyZW07XFxyXFxuICAgIGdhcDogMnJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG5cXHJcXG4gIC5uYXZiYXJ7XFxyXFxuICAgIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiB1bnNldDtcXHJcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHVuc2V0O1xcclxcbiAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiB1bnNldDtcXHJcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogdW5zZXQ7XFxyXFxuICAgIHotaW5kZXg6IDE7XFxyXFxuICB9XFxyXFxuICAubmF2LWl0ZW17XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcblxcclxcbiAgfVxcclxcbiAgLm5hdi1zb2NpYWx7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG4gXFxyXFxuICB9XFxyXFxuICAubmF2LWxpc3R7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ3JpZC1nYXA6MnJlbTtcXHJcXG4gICAgZ2FwOjJyZW07XFxyXFxuICAgIC13ZWJraXQtZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcclxcbiAgICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXHJcXG4gIH1cXHJcXG5cXHJcXG5cXHJcXG59XFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDQ4MHB4KXtcXHJcXG5cXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3N0eWxlL25hdmJhci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsV0FBVzs7QUFFWDtJQUNJLHFCQUFhO0lBQWIsYUFBYTtJQUNiLGdDQUF3QjtZQUF4Qix3QkFBd0I7SUFDeEIsc0NBQThCO1lBQTlCLDhCQUE4QjtJQUM5QixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFlBQVk7SUFDWixtQ0FBbUM7SUFDbkMsNEJBQW9CO1lBQXBCLG9CQUFvQjs7RUFFdEI7O0VBRUE7SUFDRSwrQkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLDJCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLHFCQUFhO0lBQWIsYUFBYTtJQUNiLGFBQVE7SUFBUixRQUFRO0lBQ1IsZ0NBQXdCO1lBQXhCLHdCQUF3QjtFQUMxQjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQix3QkFBd0I7SUFDeEIsa0NBQTBCO1lBQTFCLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLHFCQUFhO0lBQWIsYUFBYTtJQUNiLGdDQUF3QjtZQUF4Qix3QkFBd0I7SUFDeEIsc0NBQThCO1lBQTlCLDhCQUE4QjtJQUM5QiwyQkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsa0NBQTBCO1lBQTFCLDBCQUEwQjtFQUM1QjtFQUNBO0lBQ0UseUJBQXlCO0lBQ3pCLGtDQUEwQjtZQUExQiwwQkFBMEI7RUFDNUI7RUFDQTtJQUNFLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UsYUFBYTtJQUNiLFlBQVk7SUFDWixrQ0FBa0M7RUFDcEM7OztBQUdGLFVBQVU7O0FBRVY7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0VBRUU7SUFDRSxrQkFBa0I7SUFDbEIsNkJBQXFCO1lBQXJCLHFCQUFxQjtJQUNyQixVQUFVO0lBQ1YsV0FBVztJQUNYLGNBQWM7RUFDaEI7RUFDQTtJQUNFLHFCQUFhO0lBQWIsYUFBYTtJQUNiLDZCQUFxQjtZQUFyQixxQkFBcUI7SUFDckIsK0JBQXVCO1lBQXZCLHVCQUF1QjtJQUN2QiwyQkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCLHFCQUFhO0lBQWIsYUFBYTtJQUNiLDZCQUFxQjtZQUFyQixxQkFBcUI7SUFDckIsY0FBUztJQUFULFNBQVM7RUFDWDs7O0FBR0Y7OztBQUdBOztFQUVFO0lBQ0UscUJBQWE7SUFBYixhQUFhO0lBQ2IsNkJBQXFCO1lBQXJCLHFCQUFxQjtJQUNyQiwrQkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLDJCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIscUJBQWE7SUFBYixhQUFhO0lBQ2IsNkJBQXFCO1lBQXJCLHFCQUFxQjtJQUNyQixjQUFTO0lBQVQsU0FBUztFQUNYOzs7RUFHQTtJQUNFLDhCQUFzQjtZQUF0QixzQkFBc0I7SUFDdEIsMEJBQWtCO1lBQWxCLGtCQUFrQjtJQUNsQixVQUFVO0VBQ1o7RUFDQTtJQUNFLGlCQUFpQjs7RUFFbkI7RUFDQTtJQUNFLGVBQWU7SUFDZixtQkFBbUI7O0VBRXJCO0VBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIscUJBQWE7SUFBYixhQUFhO0lBQ2IsYUFBUTtJQUFSLFFBQVE7SUFDUixnQ0FBd0I7WUFBeEIsd0JBQXdCO0VBQzFCOzs7QUFHRjtBQUNBOztBQUVBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIE5hdkJhciAqL1xcclxcblxcclxcbi5uYXZiYXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstY29sb3IpO1xcclxcbiAgICBhbmltYXRpb246IHBhcmEgMnMgMTtcXHJcXG4gICAgXFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5uYXYtbGlzdHtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDoycmVtO1xcclxcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5uYXYtaXRlbXtcXHJcXG4gICAgZm9udC1zaXplOiAxLjdyZW07XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1saWdodC1kYXJrKTtcXHJcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5uYXYtaXRlbTpob3ZlcntcXHJcXG4gICAgY29sb3I6dmFyKC0tZGlmLWNvbG9yKTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLm5hdi1zb2NpYWx7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDEuNnJlbTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMzAwbXM7XFxyXFxuICB9XFxyXFxuICAubmF2LXNvY2lhbC1pdGVte1xcclxcbiAgICBjb2xvcjogIHZhcigtLWxpZ2h0LWRhcmspO1xcclxcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtcztcXHJcXG4gIH1cXHJcXG4gIC5uYXYtc29jaWFsLWl0ZW06aG92ZXJ7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1kaWYtY29sb3IpO1xcclxcbiAgfVxcclxcbiAgLmxpbmUtc29jaWFse1xcclxcbiAgICB3aWR0aDogMC4ycmVtO1xcclxcbiAgICBoZWlnaHQ6IDVyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRpZi1jb2xvcik7XFxyXFxuICB9XFxyXFxuXFxyXFxuXFxyXFxuLyogTWVkaWEgKi9cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogMTYwMHB4KXtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkgYW5kIChtYXgtd2lkdGg6MTUwMHB4KXtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCl7XFxyXFxuXFxyXFxuICAubmF2YmFye1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcXHJcXG4gICAgeC1pbmRleDogMTtcXHJcXG4gICAgd2lkdGg6IGF1dG87XFxyXFxuICAgIGhlaWdodDogNS41cmVtO1xcclxcbiAgfVxcclxcbiAgLm5hdi1saXN0e1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nLXRvcDogMTAlO1xcclxcbiAgfVxcclxcbiAgLm5hdi1zb2NpYWx7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAyMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcXHJcXG4gICAgZ2FwOiAycmVtO1xcclxcbiAgfVxcclxcblxcclxcblxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpe1xcclxcblxcclxcbiAgLm5hdi1saXN0e1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nLXRvcDogMTAlO1xcclxcbiAgfVxcclxcbiAgLm5hdi1zb2NpYWx7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAyMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcXHJcXG4gICAgZ2FwOiAycmVtO1xcclxcbiAgfVxcclxcblxcclxcblxcclxcbiAgLm5hdmJhcntcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiB1bnNldDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IHVuc2V0O1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbiAgfVxcclxcbiAgLm5hdi1pdGVte1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG5cXHJcXG4gIH1cXHJcXG4gIC5uYXYtc29jaWFse1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxuIFxcclxcbiAgfVxcclxcbiAgLm5hdi1saXN0e1xcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBnYXA6MnJlbTtcXHJcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcclxcbiAgfVxcclxcblxcclxcblxcclxcbn1cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogNDgwcHgpe1xcclxcblxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==