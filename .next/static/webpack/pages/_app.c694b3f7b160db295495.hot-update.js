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
___CSS_LOADER_EXPORT___.push([module.i, "/* NavBar */\r\n\r\n.navbar, .navbar-class {\r\n    display: -webkit-flex;\r\n    display: flex;\r\n    -webkit-flex-flow: column nowrap;\r\n            flex-flow: column nowrap;\r\n    -webkit-justify-content: space-between;\r\n            justify-content: space-between;\r\n    position: absolute;\r\n    z-index: 1;\r\n    height: 100%;\r\n    background-color: var(--dark-color);\r\n    -webkit-animation: para 2s 1;\r\n            animation: para 2s 1;\r\n    \r\n  }\r\n\r\n  \r\n  .nav-list{\r\n    -webkit-justify-content: center;\r\n            justify-content: center;\r\n    -webkit-align-items: center;\r\n            align-items: center;\r\n    list-style: none;\r\n    display: -webkit-flex;\r\n    display: flex;\r\n    grid-gap:2rem;\r\n    gap:2rem;\r\n    -webkit-flex-flow: column nowrap;\r\n            flex-flow: column nowrap;\r\n  }\r\n  \r\n  .nav-item{\r\n    font-size: 1.7rem;\r\n    color: var(--light-dark);\r\n    -webkit-transition-duration: 500ms;\r\n            transition-duration: 500ms;  }\r\n  .nav-item:hover{\r\n    color: var(--dif-color);\r\n  }\r\n\r\n\r\n  \r\n .active{\r\n   color:var(--dif-color);\r\n }\r\n  \r\n  .nav-social{\r\n    display: -webkit-flex;\r\n    display: flex;\r\n    -webkit-flex-flow: column nowrap;\r\n            flex-flow: column nowrap;\r\n    -webkit-justify-content: space-between;\r\n            justify-content: space-between;\r\n    -webkit-align-items: center;\r\n            align-items: center;\r\n    font-size: 1.5rem;\r\n    margin-bottom: 1rem;\r\n    -webkit-transition-duration: 300ms;\r\n            transition-duration: 300ms;\r\n  }\r\n  .nav-social-item{\r\n    color:  var(--light-dark);\r\n    -webkit-transition-duration: 500ms;\r\n            transition-duration: 500ms;\r\n  }\r\n  .nav-social-item:hover{\r\n    color: var(--dif-color);\r\n  }\r\n  .line-social{\r\n    width: 0.2rem;\r\n    height: 5rem;\r\n    background-color: var(--dif-color);\r\n  }\r\n\r\n\r\n/* Media */\r\n\r\n@media (min-width: 1600px){\r\n\r\n}\r\n\r\n@media (min-width: 1024px) and (max-width:1500px){\r\n\r\n}\r\n\r\n@media (max-width: 1024px){\r\n\r\n  .navbar{\r\n    position: relative;\r\n    -webkit-flex-flow: row nowrap;\r\n            flex-flow: row nowrap;\r\n    x-index: 1;\r\n    width: auto;\r\n    height: 5.5rem;\r\n  }\r\n  .nav-list{\r\n    display: -webkit-flex;\r\n    display: flex;\r\n    -webkit-flex-flow: row nowrap;\r\n            flex-flow: row nowrap;\r\n    -webkit-justify-content: center;\r\n            justify-content: center;\r\n    -webkit-align-items: center;\r\n            align-items: center;\r\n    padding-top: 10%;\r\n  }\r\n  .nav-social{\r\n    padding-top: 20%;\r\n    display: -webkit-flex;\r\n    display: flex;\r\n    -webkit-flex-flow: row nowrap;\r\n            flex-flow: row nowrap;\r\n    grid-gap: 2rem;\r\n    gap: 2rem;\r\n  }\r\n\r\n\r\n}\r\n\r\n@media (max-width: 760px){\r\n  .navbar{\r\n    display: none;\r\n  }\r\n\r\n\r\n  .burger{\r\n    display: -webkit-flex;\r\n    display: flex;\r\n    -webkit-justify-content: space-around;\r\n            justify-content: space-around;\r\n    -webkit-flex-flow: column nowrap;\r\n            flex-flow: column nowrap;\r\n  }\r\n  .burger div{\r\n    width: 2rem;\r\n    height: 0.25rem;\r\n    border-radius: 10px;\r\n    -webkit-transform-origin: 1px;\r\n            transform-origin: 1px;\r\n    -webkit-transition: all 0.3s linear;\r\n    transition: all 0.3s linear;\r\n  }\r\n\r\n}\r\n\r\n\r\n@media (max-width: 768px){\r\n\r\n  .nav-list{\r\n    display: -webkit-flex;\r\n    display: flex;\r\n    -webkit-flex-flow: row nowrap;\r\n            flex-flow: row nowrap;\r\n    -webkit-justify-content: center;\r\n            justify-content: center;\r\n    -webkit-align-items: center;\r\n            align-items: center;\r\n    padding-top: 10%;\r\n  }\r\n  .nav-social{\r\n    padding-top: 20%;\r\n    display: -webkit-flex;\r\n    display: flex;\r\n    -webkit-flex-flow: row nowrap;\r\n            flex-flow: row nowrap;\r\n    grid-gap: 2rem;\r\n    gap: 2rem;\r\n  }\r\n\r\n\r\n  .navbar{\r\n    -webkit-justify-content: unset;\r\n            justify-content: unset;\r\n    -webkit-align-items: unset;\r\n            align-items: unset;\r\n    z-index: 1;\r\n  }\r\n  .nav-item{\r\n    font-size: 1.5rem;\r\n\r\n  }\r\n  .nav-social{\r\n    font-size: 1rem;\r\n    margin-bottom: 1rem;\r\n \r\n  }\r\n  .nav-list{\r\n    list-style: none;\r\n    display: -webkit-flex;\r\n    display: flex;\r\n    grid-gap:2rem;\r\n    gap:2rem;\r\n    -webkit-flex-flow: column nowrap;\r\n            flex-flow: column nowrap;\r\n  }\r\n\r\n\r\n}\r\n@media (min-width: 480px){\r\n\r\n}\r\n", "",{"version":3,"sources":["webpack://style/navbar.css"],"names":[],"mappings":"AAAA,WAAW;;AAEX;IACI,qBAAa;IAAb,aAAa;IACb,gCAAwB;YAAxB,wBAAwB;IACxB,sCAA8B;YAA9B,8BAA8B;IAC9B,kBAAkB;IAClB,UAAU;IACV,YAAY;IACZ,mCAAmC;IACnC,4BAAoB;YAApB,oBAAoB;;EAEtB;;;EAGA;IACE,+BAAuB;YAAvB,uBAAuB;IACvB,2BAAmB;YAAnB,mBAAmB;IACnB,gBAAgB;IAChB,qBAAa;IAAb,aAAa;IACb,aAAQ;IAAR,QAAQ;IACR,gCAAwB;YAAxB,wBAAwB;EAC1B;;EAEA;IACE,iBAAiB;IACjB,wBAAwB;IACxB,kCAA0B;YAA1B,0BAA0B,GAAG;EAC/B;IACE,uBAAuB;EACzB;;;;CAID;GACE,sBAAsB;CACxB;;EAEC;IACE,qBAAa;IAAb,aAAa;IACb,gCAAwB;YAAxB,wBAAwB;IACxB,sCAA8B;YAA9B,8BAA8B;IAC9B,2BAAmB;YAAnB,mBAAmB;IACnB,iBAAiB;IACjB,mBAAmB;IACnB,kCAA0B;YAA1B,0BAA0B;EAC5B;EACA;IACE,yBAAyB;IACzB,kCAA0B;YAA1B,0BAA0B;EAC5B;EACA;IACE,uBAAuB;EACzB;EACA;IACE,aAAa;IACb,YAAY;IACZ,kCAAkC;EACpC;;;AAGF,UAAU;;AAEV;;AAEA;;AAEA;;AAEA;;AAEA;;EAEE;IACE,kBAAkB;IAClB,6BAAqB;YAArB,qBAAqB;IACrB,UAAU;IACV,WAAW;IACX,cAAc;EAChB;EACA;IACE,qBAAa;IAAb,aAAa;IACb,6BAAqB;YAArB,qBAAqB;IACrB,+BAAuB;YAAvB,uBAAuB;IACvB,2BAAmB;YAAnB,mBAAmB;IACnB,gBAAgB;EAClB;EACA;IACE,gBAAgB;IAChB,qBAAa;IAAb,aAAa;IACb,6BAAqB;YAArB,qBAAqB;IACrB,cAAS;IAAT,SAAS;EACX;;;AAGF;;AAEA;EACE;IACE,aAAa;EACf;;;EAGA;IACE,qBAAa;IAAb,aAAa;IACb,qCAA6B;YAA7B,6BAA6B;IAC7B,gCAAwB;YAAxB,wBAAwB;EAC1B;EACA;IACE,WAAW;IACX,eAAe;IACf,mBAAmB;IACnB,6BAAqB;YAArB,qBAAqB;IACrB,mCAA2B;IAA3B,2BAA2B;EAC7B;;AAEF;;;AAGA;;EAEE;IACE,qBAAa;IAAb,aAAa;IACb,6BAAqB;YAArB,qBAAqB;IACrB,+BAAuB;YAAvB,uBAAuB;IACvB,2BAAmB;YAAnB,mBAAmB;IACnB,gBAAgB;EAClB;EACA;IACE,gBAAgB;IAChB,qBAAa;IAAb,aAAa;IACb,6BAAqB;YAArB,qBAAqB;IACrB,cAAS;IAAT,SAAS;EACX;;;EAGA;IACE,8BAAsB;YAAtB,sBAAsB;IACtB,0BAAkB;YAAlB,kBAAkB;IAClB,UAAU;EACZ;EACA;IACE,iBAAiB;;EAEnB;EACA;IACE,eAAe;IACf,mBAAmB;;EAErB;EACA;IACE,gBAAgB;IAChB,qBAAa;IAAb,aAAa;IACb,aAAQ;IAAR,QAAQ;IACR,gCAAwB;YAAxB,wBAAwB;EAC1B;;;AAGF;AACA;;AAEA","sourcesContent":["/* NavBar */\r\n\r\n.navbar, .navbar-class {\r\n    display: flex;\r\n    flex-flow: column nowrap;\r\n    justify-content: space-between;\r\n    position: absolute;\r\n    z-index: 1;\r\n    height: 100%;\r\n    background-color: var(--dark-color);\r\n    animation: para 2s 1;\r\n    \r\n  }\r\n\r\n  \r\n  .nav-list{\r\n    justify-content: center;\r\n    align-items: center;\r\n    list-style: none;\r\n    display: flex;\r\n    gap:2rem;\r\n    flex-flow: column nowrap;\r\n  }\r\n  \r\n  .nav-item{\r\n    font-size: 1.7rem;\r\n    color: var(--light-dark);\r\n    transition-duration: 500ms;  }\r\n  .nav-item:hover{\r\n    color: var(--dif-color);\r\n  }\r\n\r\n\r\n  \r\n .active{\r\n   color:var(--dif-color);\r\n }\r\n  \r\n  .nav-social{\r\n    display: flex;\r\n    flex-flow: column nowrap;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    font-size: 1.5rem;\r\n    margin-bottom: 1rem;\r\n    transition-duration: 300ms;\r\n  }\r\n  .nav-social-item{\r\n    color:  var(--light-dark);\r\n    transition-duration: 500ms;\r\n  }\r\n  .nav-social-item:hover{\r\n    color: var(--dif-color);\r\n  }\r\n  .line-social{\r\n    width: 0.2rem;\r\n    height: 5rem;\r\n    background-color: var(--dif-color);\r\n  }\r\n\r\n\r\n/* Media */\r\n\r\n@media (min-width: 1600px){\r\n\r\n}\r\n\r\n@media (min-width: 1024px) and (max-width:1500px){\r\n\r\n}\r\n\r\n@media (max-width: 1024px){\r\n\r\n  .navbar{\r\n    position: relative;\r\n    flex-flow: row nowrap;\r\n    x-index: 1;\r\n    width: auto;\r\n    height: 5.5rem;\r\n  }\r\n  .nav-list{\r\n    display: flex;\r\n    flex-flow: row nowrap;\r\n    justify-content: center;\r\n    align-items: center;\r\n    padding-top: 10%;\r\n  }\r\n  .nav-social{\r\n    padding-top: 20%;\r\n    display: flex;\r\n    flex-flow: row nowrap;\r\n    gap: 2rem;\r\n  }\r\n\r\n\r\n}\r\n\r\n@media (max-width: 760px){\r\n  .navbar{\r\n    display: none;\r\n  }\r\n\r\n\r\n  .burger{\r\n    display: flex;\r\n    justify-content: space-around;\r\n    flex-flow: column nowrap;\r\n  }\r\n  .burger div{\r\n    width: 2rem;\r\n    height: 0.25rem;\r\n    border-radius: 10px;\r\n    transform-origin: 1px;\r\n    transition: all 0.3s linear;\r\n  }\r\n\r\n}\r\n\r\n\r\n@media (max-width: 768px){\r\n\r\n  .nav-list{\r\n    display: flex;\r\n    flex-flow: row nowrap;\r\n    justify-content: center;\r\n    align-items: center;\r\n    padding-top: 10%;\r\n  }\r\n  .nav-social{\r\n    padding-top: 20%;\r\n    display: flex;\r\n    flex-flow: row nowrap;\r\n    gap: 2rem;\r\n  }\r\n\r\n\r\n  .navbar{\r\n    justify-content: unset;\r\n    align-items: unset;\r\n    z-index: 1;\r\n  }\r\n  .nav-item{\r\n    font-size: 1.5rem;\r\n\r\n  }\r\n  .nav-social{\r\n    font-size: 1rem;\r\n    margin-bottom: 1rem;\r\n \r\n  }\r\n  .nav-list{\r\n    list-style: none;\r\n    display: flex;\r\n    gap:2rem;\r\n    flex-flow: column nowrap;\r\n  }\r\n\r\n\r\n}\r\n@media (min-width: 480px){\r\n\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGUvbmF2YmFyLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDeUY7QUFDekYsOEJBQThCLG1GQUEyQjtBQUN6RDtBQUNBLDhCQUE4QixRQUFTLCtDQUErQyw4QkFBOEIsc0JBQXNCLHlDQUF5Qyx5Q0FBeUMsK0NBQStDLCtDQUErQywyQkFBMkIsbUJBQW1CLHFCQUFxQiw0Q0FBNEMscUNBQXFDLHFDQUFxQyxlQUFlLDBCQUEwQix3Q0FBd0Msd0NBQXdDLG9DQUFvQyxvQ0FBb0MseUJBQXlCLDhCQUE4QixzQkFBc0Isc0JBQXNCLGlCQUFpQix5Q0FBeUMseUNBQXlDLE9BQU8sc0JBQXNCLDBCQUEwQixpQ0FBaUMsMkNBQTJDLDJDQUEyQyxHQUFHLHNCQUFzQixnQ0FBZ0MsT0FBTywyQkFBMkIsOEJBQThCLE1BQU0sd0JBQXdCLDhCQUE4QixzQkFBc0IseUNBQXlDLHlDQUF5QywrQ0FBK0MsK0NBQStDLG9DQUFvQyxvQ0FBb0MsMEJBQTBCLDRCQUE0QiwyQ0FBMkMsMkNBQTJDLE9BQU8sdUJBQXVCLGtDQUFrQywyQ0FBMkMsMkNBQTJDLE9BQU8sNkJBQTZCLGdDQUFnQyxPQUFPLG1CQUFtQixzQkFBc0IscUJBQXFCLDJDQUEyQyxPQUFPLDBEQUEwRCxTQUFTLDBEQUEwRCxTQUFTLG1DQUFtQyxrQkFBa0IsMkJBQTJCLHNDQUFzQyxzQ0FBc0MsbUJBQW1CLG9CQUFvQix1QkFBdUIsT0FBTyxnQkFBZ0IsOEJBQThCLHNCQUFzQixzQ0FBc0Msc0NBQXNDLHdDQUF3Qyx3Q0FBd0Msb0NBQW9DLG9DQUFvQyx5QkFBeUIsT0FBTyxrQkFBa0IseUJBQXlCLDhCQUE4QixzQkFBc0Isc0NBQXNDLHNDQUFzQyx1QkFBdUIsa0JBQWtCLE9BQU8sYUFBYSxrQ0FBa0MsY0FBYyxzQkFBc0IsT0FBTyxzQkFBc0IsOEJBQThCLHNCQUFzQiw4Q0FBOEMsOENBQThDLHlDQUF5Qyx5Q0FBeUMsT0FBTyxrQkFBa0Isb0JBQW9CLHdCQUF3Qiw0QkFBNEIsc0NBQXNDLHNDQUFzQyw0Q0FBNEMsb0NBQW9DLE9BQU8sU0FBUyxzQ0FBc0Msb0JBQW9CLDhCQUE4QixzQkFBc0Isc0NBQXNDLHNDQUFzQyx3Q0FBd0Msd0NBQXdDLG9DQUFvQyxvQ0FBb0MseUJBQXlCLE9BQU8sa0JBQWtCLHlCQUF5Qiw4QkFBOEIsc0JBQXNCLHNDQUFzQyxzQ0FBc0MsdUJBQXVCLGtCQUFrQixPQUFPLHNCQUFzQix1Q0FBdUMsdUNBQXVDLG1DQUFtQyxtQ0FBbUMsbUJBQW1CLE9BQU8sZ0JBQWdCLDBCQUEwQixXQUFXLGtCQUFrQix3QkFBd0IsNEJBQTRCLFlBQVksZ0JBQWdCLHlCQUF5Qiw4QkFBOEIsc0JBQXNCLHNCQUFzQixpQkFBaUIseUNBQXlDLHlDQUF5QyxPQUFPLGFBQWEsOEJBQThCLFNBQVMsV0FBVyx1RkFBdUYsS0FBSyxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsY0FBYyxRQUFRLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFlBQVksVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxrQkFBa0IsTUFBTSxZQUFZLFNBQVMsS0FBSyxZQUFZLE9BQU8sS0FBSyxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFFBQVEsV0FBVyxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksWUFBWSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxNQUFNLEtBQUssS0FBSyxVQUFVLE9BQU8sS0FBSyxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLE9BQU8sTUFBTSxLQUFLLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLFlBQVksVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsS0FBSyxLQUFLLGFBQWEsTUFBTSxLQUFLLFVBQVUsYUFBYSxNQUFNLEtBQUssWUFBWSxZQUFZLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxRQUFRLEtBQUssTUFBTSxxRUFBcUUsc0JBQXNCLGlDQUFpQyx1Q0FBdUMsMkJBQTJCLG1CQUFtQixxQkFBcUIsNENBQTRDLDZCQUE2QixlQUFlLDBCQUEwQixnQ0FBZ0MsNEJBQTRCLHlCQUF5QixzQkFBc0IsaUJBQWlCLGlDQUFpQyxPQUFPLHNCQUFzQiwwQkFBMEIsaUNBQWlDLG1DQUFtQyxHQUFHLHNCQUFzQixnQ0FBZ0MsT0FBTywyQkFBMkIsOEJBQThCLE1BQU0sd0JBQXdCLHNCQUFzQixpQ0FBaUMsdUNBQXVDLDRCQUE0QiwwQkFBMEIsNEJBQTRCLG1DQUFtQyxPQUFPLHVCQUF1QixrQ0FBa0MsbUNBQW1DLE9BQU8sNkJBQTZCLGdDQUFnQyxPQUFPLG1CQUFtQixzQkFBc0IscUJBQXFCLDJDQUEyQyxPQUFPLDBEQUEwRCxTQUFTLDBEQUEwRCxTQUFTLG1DQUFtQyxrQkFBa0IsMkJBQTJCLDhCQUE4QixtQkFBbUIsb0JBQW9CLHVCQUF1QixPQUFPLGdCQUFnQixzQkFBc0IsOEJBQThCLGdDQUFnQyw0QkFBNEIseUJBQXlCLE9BQU8sa0JBQWtCLHlCQUF5QixzQkFBc0IsOEJBQThCLGtCQUFrQixPQUFPLGFBQWEsa0NBQWtDLGNBQWMsc0JBQXNCLE9BQU8sc0JBQXNCLHNCQUFzQixzQ0FBc0MsaUNBQWlDLE9BQU8sa0JBQWtCLG9CQUFvQix3QkFBd0IsNEJBQTRCLDhCQUE4QixvQ0FBb0MsT0FBTyxTQUFTLHNDQUFzQyxvQkFBb0Isc0JBQXNCLDhCQUE4QixnQ0FBZ0MsNEJBQTRCLHlCQUF5QixPQUFPLGtCQUFrQix5QkFBeUIsc0JBQXNCLDhCQUE4QixrQkFBa0IsT0FBTyxzQkFBc0IsK0JBQStCLDJCQUEyQixtQkFBbUIsT0FBTyxnQkFBZ0IsMEJBQTBCLFdBQVcsa0JBQWtCLHdCQUF3Qiw0QkFBNEIsWUFBWSxnQkFBZ0IseUJBQXlCLHNCQUFzQixpQkFBaUIsaUNBQWlDLE9BQU8sYUFBYSw4QkFBOEIsU0FBUyx1QkFBdUI7QUFDN3hTO0FBQ2Usc0ZBQXVCLEVBQUMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5jNjk0YjNmN2IxNjBkYjI5NTQ5NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogTmF2QmFyICovXFxyXFxuXFxyXFxuLm5hdmJhciwgLm5hdmJhci1jbGFzcyB7XFxyXFxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgLXdlYmtpdC1mbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxyXFxuICAgICAgICAgICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcclxcbiAgICAtd2Via2l0LWp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWNvbG9yKTtcXHJcXG4gICAgLXdlYmtpdC1hbmltYXRpb246IHBhcmEgMnMgMTtcXHJcXG4gICAgICAgICAgICBhbmltYXRpb246IHBhcmEgMnMgMTtcXHJcXG4gICAgXFxyXFxuICB9XFxyXFxuXFxyXFxuICBcXHJcXG4gIC5uYXYtbGlzdHtcXHJcXG4gICAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ3JpZC1nYXA6MnJlbTtcXHJcXG4gICAgZ2FwOjJyZW07XFxyXFxuICAgIC13ZWJraXQtZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcclxcbiAgICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLm5hdi1pdGVte1xcclxcbiAgICBmb250LXNpemU6IDEuN3JlbTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LWRhcmspO1xcclxcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xcclxcbiAgICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zOyAgfVxcclxcbiAgLm5hdi1pdGVtOmhvdmVye1xcclxcbiAgICBjb2xvcjogdmFyKC0tZGlmLWNvbG9yKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG5cXHJcXG4gIFxcclxcbiAuYWN0aXZle1xcclxcbiAgIGNvbG9yOnZhcigtLWRpZi1jb2xvcik7XFxyXFxuIH1cXHJcXG4gIFxcclxcbiAgLm5hdi1zb2NpYWx7XFxyXFxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgLXdlYmtpdC1mbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxyXFxuICAgICAgICAgICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcclxcbiAgICAtd2Via2l0LWp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAzMDBtcztcXHJcXG4gICAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAzMDBtcztcXHJcXG4gIH1cXHJcXG4gIC5uYXYtc29jaWFsLWl0ZW17XFxyXFxuICAgIGNvbG9yOiAgdmFyKC0tbGlnaHQtZGFyayk7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XFxyXFxuICAgICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XFxyXFxuICB9XFxyXFxuICAubmF2LXNvY2lhbC1pdGVtOmhvdmVye1xcclxcbiAgICBjb2xvcjogdmFyKC0tZGlmLWNvbG9yKTtcXHJcXG4gIH1cXHJcXG4gIC5saW5lLXNvY2lhbHtcXHJcXG4gICAgd2lkdGg6IDAuMnJlbTtcXHJcXG4gICAgaGVpZ2h0OiA1cmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kaWYtY29sb3IpO1xcclxcbiAgfVxcclxcblxcclxcblxcclxcbi8qIE1lZGlhICovXFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDE2MDBweCl7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIGFuZCAobWF4LXdpZHRoOjE1MDBweCl7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpe1xcclxcblxcclxcbiAgLm5hdmJhcntcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAtd2Via2l0LWZsZXgtZmxvdzogcm93IG5vd3JhcDtcXHJcXG4gICAgICAgICAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XFxyXFxuICAgIHgtaW5kZXg6IDE7XFxyXFxuICAgIHdpZHRoOiBhdXRvO1xcclxcbiAgICBoZWlnaHQ6IDUuNXJlbTtcXHJcXG4gIH1cXHJcXG4gIC5uYXYtbGlzdHtcXHJcXG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAtd2Via2l0LWZsZXgtZmxvdzogcm93IG5vd3JhcDtcXHJcXG4gICAgICAgICAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XFxyXFxuICAgIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nLXRvcDogMTAlO1xcclxcbiAgfVxcclxcbiAgLm5hdi1zb2NpYWx7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAyMCU7XFxyXFxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgLXdlYmtpdC1mbGV4LWZsb3c6IHJvdyBub3dyYXA7XFxyXFxuICAgICAgICAgICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xcclxcbiAgICBncmlkLWdhcDogMnJlbTtcXHJcXG4gICAgZ2FwOiAycmVtO1xcclxcbiAgfVxcclxcblxcclxcblxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNzYwcHgpe1xcclxcbiAgLm5hdmJhcntcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG5cXHJcXG4gIC5idXJnZXJ7XFxyXFxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gICAgLXdlYmtpdC1mbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxyXFxuICAgICAgICAgICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcclxcbiAgfVxcclxcbiAgLmJ1cmdlciBkaXZ7XFxyXFxuICAgIHdpZHRoOiAycmVtO1xcclxcbiAgICBoZWlnaHQ6IDAuMjVyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMXB4O1xcclxcbiAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDFweDtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBsaW5lYXI7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGxpbmVhcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KXtcXHJcXG5cXHJcXG4gIC5uYXYtbGlzdHtcXHJcXG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAtd2Via2l0LWZsZXgtZmxvdzogcm93IG5vd3JhcDtcXHJcXG4gICAgICAgICAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XFxyXFxuICAgIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nLXRvcDogMTAlO1xcclxcbiAgfVxcclxcbiAgLm5hdi1zb2NpYWx7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAyMCU7XFxyXFxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgLXdlYmtpdC1mbGV4LWZsb3c6IHJvdyBub3dyYXA7XFxyXFxuICAgICAgICAgICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xcclxcbiAgICBncmlkLWdhcDogMnJlbTtcXHJcXG4gICAgZ2FwOiAycmVtO1xcclxcbiAgfVxcclxcblxcclxcblxcclxcbiAgLm5hdmJhcntcXHJcXG4gICAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IHVuc2V0O1xcclxcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogdW5zZXQ7XFxyXFxuICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IHVuc2V0O1xcclxcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiB1bnNldDtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG4gIH1cXHJcXG4gIC5uYXYtaXRlbXtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuXFxyXFxuICB9XFxyXFxuICAubmF2LXNvY2lhbHtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbiBcXHJcXG4gIH1cXHJcXG4gIC5uYXYtbGlzdHtcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBncmlkLWdhcDoycmVtO1xcclxcbiAgICBnYXA6MnJlbTtcXHJcXG4gICAgLXdlYmtpdC1mbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxyXFxuICAgICAgICAgICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcclxcbiAgfVxcclxcblxcclxcblxcclxcbn1cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogNDgwcHgpe1xcclxcblxcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3R5bGUvbmF2YmFyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxXQUFXOztBQUVYO0lBQ0kscUJBQWE7SUFBYixhQUFhO0lBQ2IsZ0NBQXdCO1lBQXhCLHdCQUF3QjtJQUN4QixzQ0FBOEI7WUFBOUIsOEJBQThCO0lBQzlCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsWUFBWTtJQUNaLG1DQUFtQztJQUNuQyw0QkFBb0I7WUFBcEIsb0JBQW9COztFQUV0Qjs7O0VBR0E7SUFDRSwrQkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLDJCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLHFCQUFhO0lBQWIsYUFBYTtJQUNiLGFBQVE7SUFBUixRQUFRO0lBQ1IsZ0NBQXdCO1lBQXhCLHdCQUF3QjtFQUMxQjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQix3QkFBd0I7SUFDeEIsa0NBQTBCO1lBQTFCLDBCQUEwQixHQUFHO0VBQy9CO0lBQ0UsdUJBQXVCO0VBQ3pCOzs7O0NBSUQ7R0FDRSxzQkFBc0I7Q0FDeEI7O0VBRUM7SUFDRSxxQkFBYTtJQUFiLGFBQWE7SUFDYixnQ0FBd0I7WUFBeEIsd0JBQXdCO0lBQ3hCLHNDQUE4QjtZQUE5Qiw4QkFBOEI7SUFDOUIsMkJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGtDQUEwQjtZQUExQiwwQkFBMEI7RUFDNUI7RUFDQTtJQUNFLHlCQUF5QjtJQUN6QixrQ0FBMEI7WUFBMUIsMEJBQTBCO0VBQzVCO0VBQ0E7SUFDRSx1QkFBdUI7RUFDekI7RUFDQTtJQUNFLGFBQWE7SUFDYixZQUFZO0lBQ1osa0NBQWtDO0VBQ3BDOzs7QUFHRixVQUFVOztBQUVWOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztFQUVFO0lBQ0Usa0JBQWtCO0lBQ2xCLDZCQUFxQjtZQUFyQixxQkFBcUI7SUFDckIsVUFBVTtJQUNWLFdBQVc7SUFDWCxjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxxQkFBYTtJQUFiLGFBQWE7SUFDYiw2QkFBcUI7WUFBckIscUJBQXFCO0lBQ3JCLCtCQUF1QjtZQUF2Qix1QkFBdUI7SUFDdkIsMkJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQixnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLGdCQUFnQjtJQUNoQixxQkFBYTtJQUFiLGFBQWE7SUFDYiw2QkFBcUI7WUFBckIscUJBQXFCO0lBQ3JCLGNBQVM7SUFBVCxTQUFTO0VBQ1g7OztBQUdGOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7OztFQUdBO0lBQ0UscUJBQWE7SUFBYixhQUFhO0lBQ2IscUNBQTZCO1lBQTdCLDZCQUE2QjtJQUM3QixnQ0FBd0I7WUFBeEIsd0JBQXdCO0VBQzFCO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQiw2QkFBcUI7WUFBckIscUJBQXFCO0lBQ3JCLG1DQUEyQjtJQUEzQiwyQkFBMkI7RUFDN0I7O0FBRUY7OztBQUdBOztFQUVFO0lBQ0UscUJBQWE7SUFBYixhQUFhO0lBQ2IsNkJBQXFCO1lBQXJCLHFCQUFxQjtJQUNyQiwrQkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLDJCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIscUJBQWE7SUFBYixhQUFhO0lBQ2IsNkJBQXFCO1lBQXJCLHFCQUFxQjtJQUNyQixjQUFTO0lBQVQsU0FBUztFQUNYOzs7RUFHQTtJQUNFLDhCQUFzQjtZQUF0QixzQkFBc0I7SUFDdEIsMEJBQWtCO1lBQWxCLGtCQUFrQjtJQUNsQixVQUFVO0VBQ1o7RUFDQTtJQUNFLGlCQUFpQjs7RUFFbkI7RUFDQTtJQUNFLGVBQWU7SUFDZixtQkFBbUI7O0VBRXJCO0VBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIscUJBQWE7SUFBYixhQUFhO0lBQ2IsYUFBUTtJQUFSLFFBQVE7SUFDUixnQ0FBd0I7WUFBeEIsd0JBQXdCO0VBQzFCOzs7QUFHRjtBQUNBOztBQUVBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIE5hdkJhciAqL1xcclxcblxcclxcbi5uYXZiYXIsIC5uYXZiYXItY2xhc3Mge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstY29sb3IpO1xcclxcbiAgICBhbmltYXRpb246IHBhcmEgMnMgMTtcXHJcXG4gICAgXFxyXFxuICB9XFxyXFxuXFxyXFxuICBcXHJcXG4gIC5uYXYtbGlzdHtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDoycmVtO1xcclxcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5uYXYtaXRlbXtcXHJcXG4gICAgZm9udC1zaXplOiAxLjdyZW07XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1saWdodC1kYXJrKTtcXHJcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7ICB9XFxyXFxuICAubmF2LWl0ZW06aG92ZXJ7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1kaWYtY29sb3IpO1xcclxcbiAgfVxcclxcblxcclxcblxcclxcbiAgXFxyXFxuIC5hY3RpdmV7XFxyXFxuICAgY29sb3I6dmFyKC0tZGlmLWNvbG9yKTtcXHJcXG4gfVxcclxcbiAgXFxyXFxuICAubmF2LXNvY2lhbHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAzMDBtcztcXHJcXG4gIH1cXHJcXG4gIC5uYXYtc29jaWFsLWl0ZW17XFxyXFxuICAgIGNvbG9yOiAgdmFyKC0tbGlnaHQtZGFyayk7XFxyXFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xcclxcbiAgfVxcclxcbiAgLm5hdi1zb2NpYWwtaXRlbTpob3ZlcntcXHJcXG4gICAgY29sb3I6IHZhcigtLWRpZi1jb2xvcik7XFxyXFxuICB9XFxyXFxuICAubGluZS1zb2NpYWx7XFxyXFxuICAgIHdpZHRoOiAwLjJyZW07XFxyXFxuICAgIGhlaWdodDogNXJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGlmLWNvbG9yKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG5cXHJcXG4vKiBNZWRpYSAqL1xcclxcblxcclxcbkBtZWRpYSAobWluLXdpZHRoOiAxNjAwcHgpe1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSBhbmQgKG1heC13aWR0aDoxNTAwcHgpe1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KXtcXHJcXG5cXHJcXG4gIC5uYXZiYXJ7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xcclxcbiAgICB4LWluZGV4OiAxO1xcclxcbiAgICB3aWR0aDogYXV0bztcXHJcXG4gICAgaGVpZ2h0OiA1LjVyZW07XFxyXFxuICB9XFxyXFxuICAubmF2LWxpc3R7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAxMCU7XFxyXFxuICB9XFxyXFxuICAubmF2LXNvY2lhbHtcXHJcXG4gICAgcGFkZGluZy10b3A6IDIwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xcclxcbiAgICBnYXA6IDJyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuXFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjBweCl7XFxyXFxuICAubmF2YmFye1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcblxcclxcblxcclxcbiAgLmJ1cmdlcntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXHJcXG4gIH1cXHJcXG4gIC5idXJnZXIgZGl2e1xcclxcbiAgICB3aWR0aDogMnJlbTtcXHJcXG4gICAgaGVpZ2h0OiAwLjI1cmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAxcHg7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGxpbmVhcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KXtcXHJcXG5cXHJcXG4gIC5uYXYtbGlzdHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZy10b3A6IDEwJTtcXHJcXG4gIH1cXHJcXG4gIC5uYXYtc29jaWFse1xcclxcbiAgICBwYWRkaW5nLXRvcDogMjAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XFxyXFxuICAgIGdhcDogMnJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG5cXHJcXG4gIC5uYXZiYXJ7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogdW5zZXQ7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiB1bnNldDtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG4gIH1cXHJcXG4gIC5uYXYtaXRlbXtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuXFxyXFxuICB9XFxyXFxuICAubmF2LXNvY2lhbHtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbiBcXHJcXG4gIH1cXHJcXG4gIC5uYXYtbGlzdHtcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOjJyZW07XFxyXFxuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXHJcXG4gIH1cXHJcXG5cXHJcXG5cXHJcXG59XFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDQ4MHB4KXtcXHJcXG5cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJzb3VyY2VSb290IjoiIn0=