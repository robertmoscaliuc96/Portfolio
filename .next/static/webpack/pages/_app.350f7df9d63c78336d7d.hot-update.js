webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./style/index.css":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./style/index.css ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "\r\n:root {\r\n    --dark: #343a40;\r\n    --light-dark: #4a5157;\r\n    --text-color:#f8f9fa;\r\n    --dark-color: #212529;\r\n    --dif-color: #62CBE7;\r\n    --logo-color: #161616;\r\n    --light-color: #F7FFF7;\r\n    --danger-color: #dc3545;\r\n    --success-color: #28a745;\r\n  }\r\n\r\n\r\n* {\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    padding: 0;\r\n  }\r\n  \r\n  body {\r\n    font-family: 'Roboto', sans-serif;\r\n    font-size: calc(10px + 1vw);\r\n    line-height: 1.6;\r\n    background-color: #fff;\r\n    color: rgb(31, 31, 31);\r\n  }\r\n  \r\n  a {\r\n    text-decoration: none;\r\n  }\r\n  \r\n  ul {\r\n    list-style: none;\r\n  }\r\n  \r\n  img {\r\n    width: 100%;\r\n  }\r\n\r\n\r\n/* Utilities */\r\n.large, .large-name, .large-skill, .large-about{\r\n  font-size: calc(25px + 3vw);\r\n  font-weight: bold;\r\n  line-height: 1;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.large::first-letter {\r\n  color: var(--dif-color);\r\n}\r\n\r\n\r\n  /* Overlay */\r\n.dark-overlay {\r\n  background-color: rgba(59, 36, 16, 0.205);\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n\r\n/* Logo */\r\n\r\n.logo{\r\n  font-size: 1vw;\r\n  line-height: 90px;\r\n}\r\n\r\n\r\n/* Animation */\r\n\r\n@-webkit-keyframes text {\r\n  0%{\r\n    color: black;\r\n    margin-bottom: -30px;\r\n  }\r\n  30%{\r\n    letter-spacing: 25px;\r\n    margin-bottom: -30px;\r\n  }\r\n  85%{\r\n    letter-spacing: 8px;\r\n    margin-bottom: -30px;\r\n  }\r\n}\r\n\r\n@keyframes text {\r\n  0%{\r\n    color: black;\r\n    margin-bottom: -30px;\r\n  }\r\n  30%{\r\n    letter-spacing: 25px;\r\n    margin-bottom: -30px;\r\n  }\r\n  85%{\r\n    letter-spacing: 8px;\r\n    margin-bottom: -30px;\r\n  }\r\n}\r\n\r\n@-webkit-keyframes logo{\r\n\r\n  from {\r\n    opacity: 0;\r\n    -webkit-transform: rotate(31.02deg);\r\n            transform: rotate(31.02deg);\r\n  }\r\n  \r\n  to {\r\n    opacity: 1;\r\n    -webkit-transform: rotate(0deg);\r\n            transform: rotate(0deg);\r\n  }\r\n  \r\n}\r\n\r\n@keyframes logo{\r\n\r\n  from {\r\n    opacity: 0;\r\n    -webkit-transform: rotate(31.02deg);\r\n            transform: rotate(31.02deg);\r\n  }\r\n  \r\n  to {\r\n    opacity: 1;\r\n    -webkit-transform: rotate(0deg);\r\n            transform: rotate(0deg);\r\n  }\r\n  \r\n}\r\n\r\n\r\n@-webkit-keyframes fade {\r\n  0%{\r\n    color: #f7f7f7;\r\n  }\r\n\r\n  85%{\r\n    color: var(--primary-color);\r\n  }\r\n}\r\n\r\n\r\n@keyframes fade {\r\n  0%{\r\n    color: #f7f7f7;\r\n  }\r\n\r\n  85%{\r\n    color: var(--primary-color);\r\n  }\r\n}\r\n\r\n/* Paragraph */\r\n@-webkit-keyframes fade-button {\r\n  0%{\r\n    color:  var(--primary-color);\r\n    border: 3px solid #f7f7f7;\r\n    box-shadow: 0 0 1px #757f85b3;\r\n  }\r\n\r\n  85%{\r\n    color: #f7f7f7;\r\n    border: 3px solid  var(--primary-color);\r\n    box-shadow: 0 0 1px #757f85b3;\r\n  }\r\n}\r\n@keyframes fade-button {\r\n  0%{\r\n    color:  var(--primary-color);\r\n    border: 3px solid #f7f7f7;\r\n    box-shadow: 0 0 1px #757f85b3;\r\n  }\r\n\r\n  85%{\r\n    color: #f7f7f7;\r\n    border: 3px solid  var(--primary-color);\r\n    box-shadow: 0 0 1px #757f85b3;\r\n  }\r\n}\r\n\r\n/* Paragraph */\r\n@-webkit-keyframes para {\r\nfrom{\r\n  opacity: 0;\r\n}\r\nto{\r\n  opacity: 1;\r\n}\r\n\r\n}\r\n@keyframes para {\r\nfrom{\r\n  opacity: 0;\r\n}\r\nto{\r\n  opacity: 1;\r\n}\r\n\r\n}\r\n@keyframes para {\r\nfrom{\r\n  opacity: 0;\r\n}\r\nto{\r\n  opacity: 1;\r\n}\r\n\r\n}\r\n\r\n@-webkit-keyframes social {\r\n  0%{\r\n    -webkit-transform: translate(0, -1px);\r\n            transform: translate(0, -1px);\r\n  }\r\n  30%{\r\n    -webkit-transform: translate(0, -4px);\r\n            transform: translate(0, -4px);\r\n  }\r\n  85%{\r\n    -webkit-transform: translate(0, -6px);\r\n            transform: translate(0, -6px);\r\n  }\r\n}\r\n\r\n@keyframes social {\r\n  0%{\r\n    -webkit-transform: translate(0, -1px);\r\n            transform: translate(0, -1px);\r\n  }\r\n  30%{\r\n    -webkit-transform: translate(0, -4px);\r\n            transform: translate(0, -4px);\r\n  }\r\n  85%{\r\n    -webkit-transform: translate(0, -6px);\r\n            transform: translate(0, -6px);\r\n  }\r\n}\r\n@-webkit-keyframes scale {\r\n  0%{\r\n    \r\n  }\r\n  30%{\r\n  \r\n  }\r\n  85%{\r\n    -webkit-transform: scale(1.07);\r\n            transform: scale(1.07);\r\n  }\r\n}\r\n@keyframes scale {\r\n  0%{\r\n    \r\n  }\r\n  30%{\r\n  \r\n  }\r\n  85%{\r\n    -webkit-transform: scale(1.07);\r\n            transform: scale(1.07);\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://style/index.css"],"names":[],"mappings":";AACA;IACI,eAAe;IACf,qBAAqB;IACrB,oBAAoB;IACpB,qBAAqB;IACrB,oBAAoB;IACpB,qBAAqB;IACrB,sBAAsB;IACtB,uBAAuB;IACvB,wBAAwB;EAC1B;;;AAGF;IACI,sBAAsB;IACtB,SAAS;IACT,UAAU;EACZ;;EAEA;IACE,iCAAiC;IACjC,2BAA2B;IAC3B,gBAAgB;IAChB,sBAAsB;IACtB,sBAAsB;EACxB;;EAEA;IACE,qBAAqB;EACvB;;EAEA;IACE,gBAAgB;EAClB;;EAEA;IACE,WAAW;EACb;;;AAGF,cAAc;AACd;EACE,2BAA2B;EAC3B,iBAAiB;EACjB,cAAc;EACd,mBAAmB;AACrB;;AAEA;EACE,uBAAuB;AACzB;;;EAGE,YAAY;AACd;EACE,yCAAyC;EACzC,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,WAAW;EACX,YAAY;AACd;;;AAGA,SAAS;;AAET;EACE,cAAc;EACd,iBAAiB;AACnB;;;AAGA,cAAc;;AAEd;EACE;IACE,YAAY;IACZ,oBAAoB;EACtB;EACA;IACE,oBAAoB;IACpB,oBAAoB;EACtB;EACA;IACE,mBAAmB;IACnB,oBAAoB;EACtB;AACF;;AAbA;EACE;IACE,YAAY;IACZ,oBAAoB;EACtB;EACA;IACE,oBAAoB;IACpB,oBAAoB;EACtB;EACA;IACE,mBAAmB;IACnB,oBAAoB;EACtB;AACF;;AAEA;;EAEE;IACE,UAAU;IACV,mCAA2B;YAA3B,2BAA2B;EAC7B;;EAEA;IACE,UAAU;IACV,+BAAuB;YAAvB,uBAAuB;EACzB;;AAEF;;AAZA;;EAEE;IACE,UAAU;IACV,mCAA2B;YAA3B,2BAA2B;EAC7B;;EAEA;IACE,UAAU;IACV,+BAAuB;YAAvB,uBAAuB;EACzB;;AAEF;;;AAGA;EACE;IACE,cAAc;EAChB;;EAEA;IACE,2BAA2B;EAC7B;AACF;;;AARA;EACE;IACE,cAAc;EAChB;;EAEA;IACE,2BAA2B;EAC7B;AACF;;AAEA,cAAc;AACd;EACE;IACE,4BAA4B;IAC5B,yBAAyB;IACzB,6BAA6B;EAC/B;;EAEA;IACE,cAAc;IACd,uCAAuC;IACvC,6BAA6B;EAC/B;AACF;AAZA;EACE;IACE,4BAA4B;IAC5B,yBAAyB;IACzB,6BAA6B;EAC/B;;EAEA;IACE,cAAc;IACd,uCAAuC;IACvC,6BAA6B;EAC/B;AACF;;AAEA,cAAc;AACd;AACA;EACE,UAAU;AACZ;AACA;EACE,UAAU;AACZ;;AAEA;AARA;AACA;EACE,UAAU;AACZ;AACA;EACE,UAAU;AACZ;;AAEA;AACA;AACA;EACE,UAAU;AACZ;AACA;EACE,UAAU;AACZ;;AAEA;;AAEA;EACE;IACE,qCAA6B;YAA7B,6BAA6B;EAC/B;EACA;IACE,qCAA6B;YAA7B,6BAA6B;EAC/B;EACA;IACE,qCAA6B;YAA7B,6BAA6B;EAC/B;AACF;;AAVA;EACE;IACE,qCAA6B;YAA7B,6BAA6B;EAC/B;EACA;IACE,qCAA6B;YAA7B,6BAA6B;EAC/B;EACA;IACE,qCAA6B;YAA7B,6BAA6B;EAC/B;AACF;AACA;EACE;;EAEA;EACA;;EAEA;EACA;IACE,8BAAsB;YAAtB,sBAAsB;EACxB;AACF;AAVA;EACE;;EAEA;EACA;;EAEA;EACA;IACE,8BAAsB;YAAtB,sBAAsB;EACxB;AACF","sourcesContent":["\r\n:root {\r\n    --dark: #343a40;\r\n    --light-dark: #4a5157;\r\n    --text-color:#f8f9fa;\r\n    --dark-color: #212529;\r\n    --dif-color: #62CBE7;\r\n    --logo-color: #161616;\r\n    --light-color: #F7FFF7;\r\n    --danger-color: #dc3545;\r\n    --success-color: #28a745;\r\n  }\r\n\r\n\r\n* {\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    padding: 0;\r\n  }\r\n  \r\n  body {\r\n    font-family: 'Roboto', sans-serif;\r\n    font-size: calc(10px + 1vw);\r\n    line-height: 1.6;\r\n    background-color: #fff;\r\n    color: rgb(31, 31, 31);\r\n  }\r\n  \r\n  a {\r\n    text-decoration: none;\r\n  }\r\n  \r\n  ul {\r\n    list-style: none;\r\n  }\r\n  \r\n  img {\r\n    width: 100%;\r\n  }\r\n\r\n\r\n/* Utilities */\r\n.large, .large-name, .large-skill, .large-about{\r\n  font-size: calc(25px + 3vw);\r\n  font-weight: bold;\r\n  line-height: 1;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.large::first-letter {\r\n  color: var(--dif-color);\r\n}\r\n\r\n\r\n  /* Overlay */\r\n.dark-overlay {\r\n  background-color: rgba(59, 36, 16, 0.205);\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n\r\n/* Logo */\r\n\r\n.logo{\r\n  font-size: 1vw;\r\n  line-height: 90px;\r\n}\r\n\r\n\r\n/* Animation */\r\n\r\n@keyframes text {\r\n  0%{\r\n    color: black;\r\n    margin-bottom: -30px;\r\n  }\r\n  30%{\r\n    letter-spacing: 25px;\r\n    margin-bottom: -30px;\r\n  }\r\n  85%{\r\n    letter-spacing: 8px;\r\n    margin-bottom: -30px;\r\n  }\r\n}\r\n\r\n@keyframes logo{\r\n\r\n  from {\r\n    opacity: 0;\r\n    transform: rotate(31.02deg);\r\n  }\r\n  \r\n  to {\r\n    opacity: 1;\r\n    transform: rotate(0deg);\r\n  }\r\n  \r\n}\r\n\r\n\r\n@keyframes fade {\r\n  0%{\r\n    color: #f7f7f7;\r\n  }\r\n\r\n  85%{\r\n    color: var(--primary-color);\r\n  }\r\n}\r\n\r\n/* Paragraph */\r\n@keyframes fade-button {\r\n  0%{\r\n    color:  var(--primary-color);\r\n    border: 3px solid #f7f7f7;\r\n    box-shadow: 0 0 1px #757f85b3;\r\n  }\r\n\r\n  85%{\r\n    color: #f7f7f7;\r\n    border: 3px solid  var(--primary-color);\r\n    box-shadow: 0 0 1px #757f85b3;\r\n  }\r\n}\r\n\r\n/* Paragraph */\r\n@keyframes para {\r\nfrom{\r\n  opacity: 0;\r\n}\r\nto{\r\n  opacity: 1;\r\n}\r\n\r\n}\r\n@keyframes para {\r\nfrom{\r\n  opacity: 0;\r\n}\r\nto{\r\n  opacity: 1;\r\n}\r\n\r\n}\r\n\r\n@keyframes social {\r\n  0%{\r\n    transform: translate(0, -1px);\r\n  }\r\n  30%{\r\n    transform: translate(0, -4px);\r\n  }\r\n  85%{\r\n    transform: translate(0, -6px);\r\n  }\r\n}\r\n@keyframes scale {\r\n  0%{\r\n    \r\n  }\r\n  30%{\r\n  \r\n  }\r\n  85%{\r\n    transform: scale(1.07);\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGUvaW5kZXguY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUN5RjtBQUN6Riw4QkFBOEIsbUZBQTJCO0FBQ3pEO0FBQ0EsOEJBQThCLFFBQVMsY0FBYyx3QkFBd0IsOEJBQThCLDZCQUE2Qiw4QkFBOEIsNkJBQTZCLDhCQUE4QiwrQkFBK0IsZ0NBQWdDLGlDQUFpQyxPQUFPLGVBQWUsK0JBQStCLGtCQUFrQixtQkFBbUIsT0FBTyxrQkFBa0IsMENBQTBDLG9DQUFvQyx5QkFBeUIsK0JBQStCLCtCQUErQixPQUFPLGVBQWUsOEJBQThCLE9BQU8sZ0JBQWdCLHlCQUF5QixPQUFPLGlCQUFpQixvQkFBb0IsT0FBTywrRUFBK0Usa0NBQWtDLHdCQUF3QixxQkFBcUIsMEJBQTBCLEtBQUssOEJBQThCLDhCQUE4QixLQUFLLDhDQUE4QyxnREFBZ0QseUJBQXlCLGFBQWEsY0FBYyxrQkFBa0IsbUJBQW1CLEtBQUssb0NBQW9DLHFCQUFxQix3QkFBd0IsS0FBSyw0REFBNEQsU0FBUyxxQkFBcUIsNkJBQTZCLE9BQU8sVUFBVSw2QkFBNkIsNkJBQTZCLE9BQU8sVUFBVSw0QkFBNEIsNkJBQTZCLE9BQU8sS0FBSyx5QkFBeUIsU0FBUyxxQkFBcUIsNkJBQTZCLE9BQU8sVUFBVSw2QkFBNkIsNkJBQTZCLE9BQU8sVUFBVSw0QkFBNEIsNkJBQTZCLE9BQU8sS0FBSyxnQ0FBZ0MsZ0JBQWdCLG1CQUFtQiw0Q0FBNEMsNENBQTRDLE9BQU8sZ0JBQWdCLG1CQUFtQix3Q0FBd0Msd0NBQXdDLE9BQU8sV0FBVyx3QkFBd0IsZ0JBQWdCLG1CQUFtQiw0Q0FBNEMsNENBQTRDLE9BQU8sZ0JBQWdCLG1CQUFtQix3Q0FBd0Msd0NBQXdDLE9BQU8sV0FBVyxxQ0FBcUMsU0FBUyx1QkFBdUIsT0FBTyxjQUFjLG9DQUFvQyxPQUFPLEtBQUssNkJBQTZCLFNBQVMsdUJBQXVCLE9BQU8sY0FB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LG1CQUFtQixPQUFPLGtCQUFrQiwwQ0FBMEMsb0NBQW9DLHlCQUF5QiwrQkFBK0IsK0JBQStCLE9BQU8sZUFBZSw4QkFBOEIsT0FBTyxnQkFBZ0IseUJBQXlCLE9BQU8saUJBQWlCLG9CQUFvQixPQUFPLCtFQUErRSxrQ0FBa0Msd0JBQXdCLHFCQUFxQiwwQkFBMEIsS0FBSyw4QkFBOEIsOEJBQThCLEtBQUssOENBQThDLGdEQUFnRCx5QkFBeUIsYUFBYSxjQUFjLGtCQUFrQixtQkFBbUIsS0FBSyxvQ0FBb0MscUJBQXFCLHdCQUF3QixLQUFLLG9EQUFvRCxTQUFTLHFCQUFxQiw2QkFBNkIsT0FBTyxVQUFVLDZCQUE2Qiw2QkFBNkIsT0FBTyxVQUFVLDRCQUE0Qiw2QkFBNkIsT0FBTyxLQUFLLHdCQUF3QixnQkFBZ0IsbUJBQW1CLG9DQUFvQyxPQUFPLGdCQUFnQixtQkFBbUIsZ0NBQWdDLE9BQU8sV0FBVyw2QkFBNkIsU0FBUyx1QkFBdUIsT0FBTyxjQUFjLG9DQUFvQyxPQUFPLEtBQUssbURBQW1ELFNBQVMscUNBQXFDLGtDQUFrQyxzQ0FBc0MsT0FBTyxjQUFjLHVCQUF1QixnREFBZ0Qsc0NBQXNDLE9BQU8sS0FBSyw0Q0FBNEMsU0FBUyxpQkFBaUIsS0FBSyxPQUFPLGlCQUFpQixLQUFLLFNBQVMscUJBQXFCLFNBQVMsaUJBQWlCLEtBQUssT0FBTyxpQkFBaUIsS0FBSyxTQUFTLDJCQUEyQixTQUFTLHNDQUFzQyxPQUFPLFVBQVUsc0NBQXNDLE9BQU8sVUFBVSxzQ0FBc0MsT0FBTyxLQUFLLHNCQUFzQixTQUFTLGVBQWUsVUFBVSxhQUFhLFVBQVUsK0JBQStCLE9BQU8sS0FBSyx1QkFBdUI7QUFDaGxTO0FBQ2Usc0ZBQXVCLEVBQUMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4zNTBmN2RmOWQ2M2M3ODMzNmQ3ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxyXFxuOnJvb3Qge1xcclxcbiAgICAtLWRhcms6ICMzNDNhNDA7XFxyXFxuICAgIC0tbGlnaHQtZGFyazogIzRhNTE1NztcXHJcXG4gICAgLS10ZXh0LWNvbG9yOiNmOGY5ZmE7XFxyXFxuICAgIC0tZGFyay1jb2xvcjogIzIxMjUyOTtcXHJcXG4gICAgLS1kaWYtY29sb3I6ICM2MkNCRTc7XFxyXFxuICAgIC0tbG9nby1jb2xvcjogIzE2MTYxNjtcXHJcXG4gICAgLS1saWdodC1jb2xvcjogI0Y3RkZGNztcXHJcXG4gICAgLS1kYW5nZXItY29sb3I6ICNkYzM1NDU7XFxyXFxuICAgIC0tc3VjY2Vzcy1jb2xvcjogIzI4YTc0NTtcXHJcXG4gIH1cXHJcXG5cXHJcXG5cXHJcXG4qIHtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICBib2R5IHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcclxcbiAgICBmb250LXNpemU6IGNhbGMoMTBweCArIDF2dyk7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAgIGNvbG9yOiByZ2IoMzEsIDMxLCAzMSk7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIGEge1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIHVsIHtcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgaW1nIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuXFxyXFxuLyogVXRpbGl0aWVzICovXFxyXFxuLmxhcmdlLCAubGFyZ2UtbmFtZSwgLmxhcmdlLXNraWxsLCAubGFyZ2UtYWJvdXR7XFxyXFxuICBmb250LXNpemU6IGNhbGMoMjVweCArIDN2dyk7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmxhcmdlOjpmaXJzdC1sZXR0ZXIge1xcclxcbiAgY29sb3I6IHZhcigtLWRpZi1jb2xvcik7XFxyXFxufVxcclxcblxcclxcblxcclxcbiAgLyogT3ZlcmxheSAqL1xcclxcbi5kYXJrLW92ZXJsYXkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg1OSwgMzYsIDE2LCAwLjIwNSk7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIExvZ28gKi9cXHJcXG5cXHJcXG4ubG9nb3tcXHJcXG4gIGZvbnQtc2l6ZTogMXZ3O1xcclxcbiAgbGluZS1oZWlnaHQ6IDkwcHg7XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIEFuaW1hdGlvbiAqL1xcclxcblxcclxcbkAtd2Via2l0LWtleWZyYW1lcyB0ZXh0IHtcXHJcXG4gIDAle1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IC0zMHB4O1xcclxcbiAgfVxcclxcbiAgMzAle1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMjVweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogLTMwcHg7XFxyXFxuICB9XFxyXFxuICA4NSV7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiA4cHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IC0zMHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHRleHQge1xcclxcbiAgMCV7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogLTMwcHg7XFxyXFxuICB9XFxyXFxuICAzMCV7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAyNXB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAtMzBweDtcXHJcXG4gIH1cXHJcXG4gIDg1JXtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDhweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogLTMwcHg7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkAtd2Via2l0LWtleWZyYW1lcyBsb2dve1xcclxcblxcclxcbiAgZnJvbSB7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzEuMDJkZWcpO1xcclxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDMxLjAyZGVnKTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgdG8ge1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcclxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcclxcbiAgfVxcclxcbiAgXFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgbG9nb3tcXHJcXG5cXHJcXG4gIGZyb20ge1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDMxLjAyZGVnKTtcXHJcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzMS4wMmRlZyk7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIHRvIHtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXHJcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZSB7XFxyXFxuICAwJXtcXHJcXG4gICAgY29sb3I6ICNmN2Y3Zjc7XFxyXFxuICB9XFxyXFxuXFxyXFxuICA4NSV7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuQGtleWZyYW1lcyBmYWRlIHtcXHJcXG4gIDAle1xcclxcbiAgICBjb2xvcjogI2Y3ZjdmNztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIDg1JXtcXHJcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4vKiBQYXJhZ3JhcGggKi9cXHJcXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZS1idXR0b24ge1xcclxcbiAgMCV7XFxyXFxuICAgIGNvbG9yOiAgdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxyXFxuICAgIGJvcmRlcjogM3B4IHNvbGlkICNmN2Y3Zjc7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMCAxcHggIzc1N2Y4NWIzO1xcclxcbiAgfVxcclxcblxcclxcbiAgODUle1xcclxcbiAgICBjb2xvcjogI2Y3ZjdmNztcXHJcXG4gICAgYm9yZGVyOiAzcHggc29saWQgIHZhcigtLXByaW1hcnktY29sb3IpO1xcclxcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4ICM3NTdmODViMztcXHJcXG4gIH1cXHJcXG59XFxyXFxuQGtleWZyYW1lcyBmYWRlLWJ1dHRvbiB7XFxyXFxuICAwJXtcXHJcXG4gICAgY29sb3I6ICB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXHJcXG4gICAgYm9yZGVyOiAzcHggc29saWQgI2Y3ZjdmNztcXHJcXG4gICAgYm94LXNoYWRvdzogMCAwIDFweCAjNzU3Zjg1YjM7XFxyXFxuICB9XFxyXFxuXFxyXFxuICA4NSV7XFxyXFxuICAgIGNvbG9yOiAjZjdmN2Y3O1xcclxcbiAgICBib3JkZXI6IDNweCBzb2xpZCAgdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMCAxcHggIzc1N2Y4NWIzO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4vKiBQYXJhZ3JhcGggKi9cXHJcXG5ALXdlYmtpdC1rZXlmcmFtZXMgcGFyYSB7XFxyXFxuZnJvbXtcXHJcXG4gIG9wYWNpdHk6IDA7XFxyXFxufVxcclxcbnRve1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG59XFxyXFxuXFxyXFxufVxcclxcbkBrZXlmcmFtZXMgcGFyYSB7XFxyXFxuZnJvbXtcXHJcXG4gIG9wYWNpdHk6IDA7XFxyXFxufVxcclxcbnRve1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG59XFxyXFxuXFxyXFxufVxcclxcbkBrZXlmcmFtZXMgcGFyYSB7XFxyXFxuZnJvbXtcXHJcXG4gIG9wYWNpdHk6IDA7XFxyXFxufVxcclxcbnRve1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG59XFxyXFxuXFxyXFxufVxcclxcblxcclxcbkAtd2Via2l0LWtleWZyYW1lcyBzb2NpYWwge1xcclxcbiAgMCV7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTFweCk7XFxyXFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTFweCk7XFxyXFxuICB9XFxyXFxuICAzMCV7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTRweCk7XFxyXFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTRweCk7XFxyXFxuICB9XFxyXFxuICA4NSV7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTZweCk7XFxyXFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTZweCk7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgc29jaWFsIHtcXHJcXG4gIDAle1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0xcHgpO1xcclxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0xcHgpO1xcclxcbiAgfVxcclxcbiAgMzAle1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC00cHgpO1xcclxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC00cHgpO1xcclxcbiAgfVxcclxcbiAgODUle1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC02cHgpO1xcclxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC02cHgpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2NhbGUge1xcclxcbiAgMCV7XFxyXFxuICAgIFxcclxcbiAgfVxcclxcbiAgMzAle1xcclxcbiAgXFxyXFxuICB9XFxyXFxuICA4NSV7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjA3KTtcXHJcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDcpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5Aa2V5ZnJhbWVzIHNjYWxlIHtcXHJcXG4gIDAle1xcclxcbiAgICBcXHJcXG4gIH1cXHJcXG4gIDMwJXtcXHJcXG4gIFxcclxcbiAgfVxcclxcbiAgODUle1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wNyk7XFxyXFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA3KTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3N0eWxlL2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FB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QUNGO0FBVkE7RUFDRTs7RUFFQTtFQUNBOztFQUVBO0VBQ0E7SUFDRSw4QkFBc0I7WUFBdEIsc0JBQXNCO0VBQ3hCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxyXFxuOnJvb3Qge1xcclxcbiAgICAtLWRhcms6ICMzNDNhNDA7XFxyXFxuICAgIC0tbGlnaHQtZGFyazogIzRhNTE1NztcXHJcXG4gICAgLS10ZXh0LWNvbG9yOiNmOGY5ZmE7XFxyXFxuICAgIC0tZGFyay1jb2xvcjogIzIxMjUyOTtcXHJcXG4gICAgLS1kaWYtY29sb3I6ICM2MkNCRTc7XFxyXFxuICAgIC0tbG9nby1jb2xvcjogIzE2MTYxNjtcXHJcXG4gICAgLS1saWdodC1jb2xvcjogI0Y3RkZGNztcXHJcXG4gICAgLS1kYW5nZXItY29sb3I6ICNkYzM1NDU7XFxyXFxuICAgIC0tc3VjY2Vzcy1jb2xvcjogIzI4YTc0NTtcXHJcXG4gIH1cXHJcXG5cXHJcXG5cXHJcXG4qIHtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICBib2R5IHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcclxcbiAgICBmb250LXNpemU6IGNhbGMoMTBweCArIDF2dyk7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAgIGNvbG9yOiByZ2IoMzEsIDMxLCAzMSk7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIGEge1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIHVsIHtcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgaW1nIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuXFxyXFxuLyogVXRpbGl0aWVzICovXFxyXFxuLmxhcmdlLCAubGFyZ2UtbmFtZSwgLmxhcmdlLXNraWxsLCAubGFyZ2UtYWJvdXR7XFxyXFxuICBmb250LXNpemU6IGNhbGMoMjVweCArIDN2dyk7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmxhcmdlOjpmaXJzdC1sZXR0ZXIge1xcclxcbiAgY29sb3I6IHZhcigtLWRpZi1jb2xvcik7XFxyXFxufVxcclxcblxcclxcblxcclxcbiAgLyogT3ZlcmxheSAqL1xcclxcbi5kYXJrLW92ZXJsYXkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg1OSwgMzYsIDE2LCAwLjIwNSk7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIExvZ28gKi9cXHJcXG5cXHJcXG4ubG9nb3tcXHJcXG4gIGZvbnQtc2l6ZTogMXZ3O1xcclxcbiAgbGluZS1oZWlnaHQ6IDkwcHg7XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIEFuaW1hdGlvbiAqL1xcclxcblxcclxcbkBrZXlmcmFtZXMgdGV4dCB7XFxyXFxuICAwJXtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAtMzBweDtcXHJcXG4gIH1cXHJcXG4gIDMwJXtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDI1cHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IC0zMHB4O1xcclxcbiAgfVxcclxcbiAgODUle1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogOHB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAtMzBweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBsb2dve1xcclxcblxcclxcbiAgZnJvbSB7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDMxLjAyZGVnKTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgdG8ge1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGZhZGUge1xcclxcbiAgMCV7XFxyXFxuICAgIGNvbG9yOiAjZjdmN2Y3O1xcclxcbiAgfVxcclxcblxcclxcbiAgODUle1xcclxcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi8qIFBhcmFncmFwaCAqL1xcclxcbkBrZXlmcmFtZXMgZmFkZS1idXR0b24ge1xcclxcbiAgMCV7XFxyXFxuICAgIGNvbG9yOiAgdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxyXFxuICAgIGJvcmRlcjogM3B4IHNvbGlkICNmN2Y3Zjc7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMCAxcHggIzc1N2Y4NWIzO1xcclxcbiAgfVxcclxcblxcclxcbiAgODUle1xcclxcbiAgICBjb2xvcjogI2Y3ZjdmNztcXHJcXG4gICAgYm9yZGVyOiAzcHggc29saWQgIHZhcigtLXByaW1hcnktY29sb3IpO1xcclxcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4ICM3NTdmODViMztcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLyogUGFyYWdyYXBoICovXFxyXFxuQGtleWZyYW1lcyBwYXJhIHtcXHJcXG5mcm9te1xcclxcbiAgb3BhY2l0eTogMDtcXHJcXG59XFxyXFxudG97XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbn1cXHJcXG5cXHJcXG59XFxyXFxuQGtleWZyYW1lcyBwYXJhIHtcXHJcXG5mcm9te1xcclxcbiAgb3BhY2l0eTogMDtcXHJcXG59XFxyXFxudG97XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbn1cXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBzb2NpYWwge1xcclxcbiAgMCV7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0xcHgpO1xcclxcbiAgfVxcclxcbiAgMzAle1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNHB4KTtcXHJcXG4gIH1cXHJcXG4gIDg1JXtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTZweCk7XFxyXFxuICB9XFxyXFxufVxcclxcbkBrZXlmcmFtZXMgc2NhbGUge1xcclxcbiAgMCV7XFxyXFxuICAgIFxcclxcbiAgfVxcclxcbiAgMzAle1xcclxcbiAgXFxyXFxuICB9XFxyXFxuICA4NSV7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNyk7XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwic291cmNlUm9vdCI6IiJ9