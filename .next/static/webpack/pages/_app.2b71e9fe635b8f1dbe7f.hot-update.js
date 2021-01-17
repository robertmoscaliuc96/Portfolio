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
___CSS_LOADER_EXPORT___.push([module.i, "\r\n:root {\r\n    --dark: #343a40;\r\n    --light-dark: #4a5157;\r\n    --text-color:#f8f9fa;\r\n    --dark-color: #212529;\r\n    --dif-color: #62CBE7;\r\n    --logo-color: #161616;\r\n    --light-color: #F7FFF7;\r\n    --danger-color: #dc3545;\r\n    --success-color: #28a745;\r\n  }\r\n\r\n\r\n* {\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    padding: 0;\r\n  }\r\n  \r\n  body {\r\n    font-family: 'Roboto', sans-serif;\r\n    font-size: calc(10px + 1vw);\r\n    line-height: 1.6;\r\n    background-color: #fff;\r\n    font-display: swap;\r\n    color: rgb(31, 31, 31);\r\n  }\r\n  \r\n  a {\r\n    text-decoration: none;\r\n  }\r\n  \r\n  ul {\r\n    list-style: none;\r\n  }\r\n  \r\n  img {\r\n    width: 100%;\r\n  }\r\n\r\n\r\n/* Utilities */\r\n.large, .large-name, .large-skill, .large-about{\r\n  font-size: calc(25px + 3vw);\r\n  font-weight: bold;\r\n  line-height: 1;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.large::first-letter {\r\n  color: var(--dif-color);\r\n}\r\n\r\n\r\n  /* Overlay */\r\n.dark-overlay {\r\n  background-color: rgba(59, 36, 16, 0.205);\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n\r\n/* Logo */\r\n\r\n.logo{\r\n  font-size: 1vw;\r\n  line-height: 90px;\r\n}\r\n\r\n\r\n/* Animation */\r\n\r\n@-webkit-keyframes text {\r\n  0%{\r\n    color: black;\r\n    margin-bottom: -30px;\r\n  }\r\n  30%{\r\n    letter-spacing: 25px;\r\n    margin-bottom: -30px;\r\n  }\r\n  85%{\r\n    letter-spacing: 8px;\r\n    margin-bottom: -30px;\r\n  }\r\n}\r\n\r\n@keyframes text {\r\n  0%{\r\n    color: black;\r\n    margin-bottom: -30px;\r\n  }\r\n  30%{\r\n    letter-spacing: 25px;\r\n    margin-bottom: -30px;\r\n  }\r\n  85%{\r\n    letter-spacing: 8px;\r\n    margin-bottom: -30px;\r\n  }\r\n}\r\n\r\n@-webkit-keyframes logo{\r\n\r\n  from {\r\n    opacity: 0;\r\n    -webkit-transform: rotate(31.02deg);\r\n            transform: rotate(31.02deg);\r\n  }\r\n  \r\n  to {\r\n    opacity: 1;\r\n    -webkit-transform: rotate(0deg);\r\n            transform: rotate(0deg);\r\n  }\r\n  \r\n}\r\n\r\n@keyframes logo{\r\n\r\n  from {\r\n    opacity: 0;\r\n    -webkit-transform: rotate(31.02deg);\r\n            transform: rotate(31.02deg);\r\n  }\r\n  \r\n  to {\r\n    opacity: 1;\r\n    -webkit-transform: rotate(0deg);\r\n            transform: rotate(0deg);\r\n  }\r\n  \r\n}\r\n\r\n\r\n@-webkit-keyframes fade {\r\n  0%{\r\n    color: #f7f7f7;\r\n  }\r\n\r\n  85%{\r\n    color: var(--primary-color);\r\n  }\r\n}\r\n\r\n\r\n@keyframes fade {\r\n  0%{\r\n    color: #f7f7f7;\r\n  }\r\n\r\n  85%{\r\n    color: var(--primary-color);\r\n  }\r\n}\r\n\r\n/* Paragraph */\r\n@-webkit-keyframes fade-button {\r\n  0%{\r\n    color:  var(--primary-color);\r\n    border: 3px solid #f7f7f7;\r\n    box-shadow: 0 0 1px #757f85b3;\r\n  }\r\n\r\n  85%{\r\n    color: #f7f7f7;\r\n    border: 3px solid  var(--primary-color);\r\n    box-shadow: 0 0 1px #757f85b3;\r\n  }\r\n}\r\n@keyframes fade-button {\r\n  0%{\r\n    color:  var(--primary-color);\r\n    border: 3px solid #f7f7f7;\r\n    box-shadow: 0 0 1px #757f85b3;\r\n  }\r\n\r\n  85%{\r\n    color: #f7f7f7;\r\n    border: 3px solid  var(--primary-color);\r\n    box-shadow: 0 0 1px #757f85b3;\r\n  }\r\n}\r\n\r\n/* Paragraph */\r\n@-webkit-keyframes para {\r\n0%{\r\n  opacity: 0;\r\n}\r\nto{\r\n  opacity: 1;\r\n}\r\n\r\n}\r\n@keyframes para {\r\n0%{\r\n  opacity: 0;\r\n}\r\nto{\r\n  opacity: 1;\r\n}\r\n\r\n}\r\n@-webkit-keyframes title {\r\nfrom{\r\n  opacity: 0;\r\n}\r\nto{\r\n  opacity: 1;\r\n}\r\n\r\n}\r\n@keyframes title {\r\nfrom{\r\n  opacity: 0;\r\n}\r\nto{\r\n  opacity: 1;\r\n}\r\n\r\n}\r\n\r\n@-webkit-keyframes social {\r\n  0%{\r\n    -webkit-transform: translate(0, -1px);\r\n            transform: translate(0, -1px);\r\n  }\r\n  30%{\r\n    -webkit-transform: translate(0, -4px);\r\n            transform: translate(0, -4px);\r\n  }\r\n  85%{\r\n    -webkit-transform: translate(0, -6px);\r\n            transform: translate(0, -6px);\r\n  }\r\n}\r\n\r\n@keyframes social {\r\n  0%{\r\n    -webkit-transform: translate(0, -1px);\r\n            transform: translate(0, -1px);\r\n  }\r\n  30%{\r\n    -webkit-transform: translate(0, -4px);\r\n            transform: translate(0, -4px);\r\n  }\r\n  85%{\r\n    -webkit-transform: translate(0, -6px);\r\n            transform: translate(0, -6px);\r\n  }\r\n}\r\n@-webkit-keyframes scale {\r\n  0%{\r\n    \r\n  }\r\n  30%{\r\n  \r\n  }\r\n  85%{\r\n    -webkit-transform: scale(1.07);\r\n            transform: scale(1.07);\r\n  }\r\n}\r\n@keyframes scale {\r\n  0%{\r\n    \r\n  }\r\n  30%{\r\n  \r\n  }\r\n  85%{\r\n    -webkit-transform: scale(1.07);\r\n            transform: scale(1.07);\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://style/index.css"],"names":[],"mappings":";AACA;IACI,eAAe;IACf,qBAAqB;IACrB,oBAAoB;IACpB,qBAAqB;IACrB,oBAAoB;IACpB,qBAAqB;IACrB,sBAAsB;IACtB,uBAAuB;IACvB,wBAAwB;EAC1B;;;AAGF;IACI,sBAAsB;IACtB,SAAS;IACT,UAAU;EACZ;;EAEA;IACE,iCAAiC;IACjC,2BAA2B;IAC3B,gBAAgB;IAChB,sBAAsB;IACtB,kBAAkB;IAClB,sBAAsB;EACxB;;EAEA;IACE,qBAAqB;EACvB;;EAEA;IACE,gBAAgB;EAClB;;EAEA;IACE,WAAW;EACb;;;AAGF,cAAc;AACd;EACE,2BAA2B;EAC3B,iBAAiB;EACjB,cAAc;EACd,mBAAmB;AACrB;;AAEA;EACE,uBAAuB;AACzB;;;EAGE,YAAY;AACd;EACE,yCAAyC;EACzC,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,WAAW;EACX,YAAY;AACd;;;AAGA,SAAS;;AAET;EACE,cAAc;EACd,iBAAiB;AACnB;;;AAGA,cAAc;;AAEd;EACE;IACE,YAAY;IACZ,oBAAoB;EACtB;EACA;IACE,oBAAoB;IACpB,oBAAoB;EACtB;EACA;IACE,mBAAmB;IACnB,oBAAoB;EACtB;AACF;;AAbA;EACE;IACE,YAAY;IACZ,oBAAoB;EACtB;EACA;IACE,oBAAoB;IACpB,oBAAoB;EACtB;EACA;IACE,mBAAmB;IACnB,oBAAoB;EACtB;AACF;;AAEA;;EAEE;IACE,UAAU;IACV,mCAA2B;YAA3B,2BAA2B;EAC7B;;EAEA;IACE,UAAU;IACV,+BAAuB;YAAvB,uBAAuB;EACzB;;AAEF;;AAZA;;EAEE;IACE,UAAU;IACV,mCAA2B;YAA3B,2BAA2B;EAC7B;;EAEA;IACE,UAAU;IACV,+BAAuB;YAAvB,uBAAuB;EACzB;;AAEF;;;AAGA;EACE;IACE,cAAc;EAChB;;EAEA;IACE,2BAA2B;EAC7B;AACF;;;AARA;EACE;IACE,cAAc;EAChB;;EAEA;IACE,2BAA2B;EAC7B;AACF;;AAEA,cAAc;AACd;EACE;IACE,4BAA4B;IAC5B,yBAAyB;IACzB,6BAA6B;EAC/B;;EAEA;IACE,cAAc;IACd,uCAAuC;IACvC,6BAA6B;EAC/B;AACF;AAZA;EACE;IACE,4BAA4B;IAC5B,yBAAyB;IACzB,6BAA6B;EAC/B;;EAEA;IACE,cAAc;IACd,uCAAuC;IACvC,6BAA6B;EAC/B;AACF;;AAEA,cAAc;AACd;AACA;EACE,UAAU;AACZ;AACA;EACE,UAAU;AACZ;;AAEA;AARA;AACA;EACE,UAAU;AACZ;AACA;EACE,UAAU;AACZ;;AAEA;AACA;AACA;EACE,UAAU;AACZ;AACA;EACE,UAAU;AACZ;;AAEA;AARA;AACA;EACE,UAAU;AACZ;AACA;EACE,UAAU;AACZ;;AAEA;;AAEA;EACE;IACE,qCAA6B;YAA7B,6BAA6B;EAC/B;EACA;IACE,qCAA6B;YAA7B,6BAA6B;EAC/B;EACA;IACE,qCAA6B;YAA7B,6BAA6B;EAC/B;AACF;;AAVA;EACE;IACE,qCAA6B;YAA7B,6BAA6B;EAC/B;EACA;IACE,qCAA6B;YAA7B,6BAA6B;EAC/B;EACA;IACE,qCAA6B;YAA7B,6BAA6B;EAC/B;AACF;AACA;EACE;;EAEA;EACA;;EAEA;EACA;IACE,8BAAsB;YAAtB,sBAAsB;EACxB;AACF;AAVA;EACE;;EAEA;EACA;;EAEA;EACA;IACE,8BAAsB;YAAtB,sBAAsB;EACxB;AACF","sourcesContent":["\r\n:root {\r\n    --dark: #343a40;\r\n    --light-dark: #4a5157;\r\n    --text-color:#f8f9fa;\r\n    --dark-color: #212529;\r\n    --dif-color: #62CBE7;\r\n    --logo-color: #161616;\r\n    --light-color: #F7FFF7;\r\n    --danger-color: #dc3545;\r\n    --success-color: #28a745;\r\n  }\r\n\r\n\r\n* {\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    padding: 0;\r\n  }\r\n  \r\n  body {\r\n    font-family: 'Roboto', sans-serif;\r\n    font-size: calc(10px + 1vw);\r\n    line-height: 1.6;\r\n    background-color: #fff;\r\n    font-display: swap;\r\n    color: rgb(31, 31, 31);\r\n  }\r\n  \r\n  a {\r\n    text-decoration: none;\r\n  }\r\n  \r\n  ul {\r\n    list-style: none;\r\n  }\r\n  \r\n  img {\r\n    width: 100%;\r\n  }\r\n\r\n\r\n/* Utilities */\r\n.large, .large-name, .large-skill, .large-about{\r\n  font-size: calc(25px + 3vw);\r\n  font-weight: bold;\r\n  line-height: 1;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.large::first-letter {\r\n  color: var(--dif-color);\r\n}\r\n\r\n\r\n  /* Overlay */\r\n.dark-overlay {\r\n  background-color: rgba(59, 36, 16, 0.205);\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n\r\n/* Logo */\r\n\r\n.logo{\r\n  font-size: 1vw;\r\n  line-height: 90px;\r\n}\r\n\r\n\r\n/* Animation */\r\n\r\n@keyframes text {\r\n  0%{\r\n    color: black;\r\n    margin-bottom: -30px;\r\n  }\r\n  30%{\r\n    letter-spacing: 25px;\r\n    margin-bottom: -30px;\r\n  }\r\n  85%{\r\n    letter-spacing: 8px;\r\n    margin-bottom: -30px;\r\n  }\r\n}\r\n\r\n@keyframes logo{\r\n\r\n  from {\r\n    opacity: 0;\r\n    transform: rotate(31.02deg);\r\n  }\r\n  \r\n  to {\r\n    opacity: 1;\r\n    transform: rotate(0deg);\r\n  }\r\n  \r\n}\r\n\r\n\r\n@keyframes fade {\r\n  0%{\r\n    color: #f7f7f7;\r\n  }\r\n\r\n  85%{\r\n    color: var(--primary-color);\r\n  }\r\n}\r\n\r\n/* Paragraph */\r\n@keyframes fade-button {\r\n  0%{\r\n    color:  var(--primary-color);\r\n    border: 3px solid #f7f7f7;\r\n    box-shadow: 0 0 1px #757f85b3;\r\n  }\r\n\r\n  85%{\r\n    color: #f7f7f7;\r\n    border: 3px solid  var(--primary-color);\r\n    box-shadow: 0 0 1px #757f85b3;\r\n  }\r\n}\r\n\r\n/* Paragraph */\r\n@keyframes para {\r\n0%{\r\n  opacity: 0;\r\n}\r\nto{\r\n  opacity: 1;\r\n}\r\n\r\n}\r\n@keyframes title {\r\nfrom{\r\n  opacity: 0;\r\n}\r\nto{\r\n  opacity: 1;\r\n}\r\n\r\n}\r\n\r\n@keyframes social {\r\n  0%{\r\n    transform: translate(0, -1px);\r\n  }\r\n  30%{\r\n    transform: translate(0, -4px);\r\n  }\r\n  85%{\r\n    transform: translate(0, -6px);\r\n  }\r\n}\r\n@keyframes scale {\r\n  0%{\r\n    \r\n  }\r\n  30%{\r\n  \r\n  }\r\n  85%{\r\n    transform: scale(1.07);\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGUvaW5kZXguY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUN5RjtBQUN6Riw4QkFBOEIsbUZBQTJCO0FBQ3pEO0FBQ0EsOEJBQThCLFFBQVMsY0FBYyx3QkFBd0IsOEJBQThCLDZCQUE2Qiw4QkFBOEIsNkJBQTZCLDhCQUE4QiwrQkFBK0IsZ0NBQWdDLGlDQUFpQyxPQUFPLGVBQWUsK0JBQStCLGtCQUFrQixtQkFBbUIsT0FBTyxrQkFBa0IsMENBQTBDLG9DQUFvQyx5QkFBeUIsK0JBQStCLDJCQUEyQiwrQkFBK0IsT0FBTyxlQUFlLDhCQUE4QixPQUFPLGdCQUFnQix5QkFBeUIsT0FBTyxpQkFBaUIsb0JBQW9CLE9BQU8sK0VBQStFLGtDQUFrQyx3QkFBd0IscUJBQXFCLDBCQUEwQixLQUFLLDhCQUE4Qiw4QkFBOEIsS0FBSyw4Q0FBOEMsZ0RBQWdELHlCQUF5QixhQUFhLGNBQWMsa0JBQWtCLG1CQUFtQixLQUFLLG9DQUFvQyxxQkFBcUIsd0JBQXdCLEtBQUssNERBQTRELFNBQVMscUJBQXFCLDZCQUE2QixPQUFPLFVBQVUsNkJBQTZCLDZCQUE2QixPQUFPLFVBQVUsNEJBQTRCLDZCQUE2QixPQUFPLEtBQUsseUJBQXlCLFNBQVMscUJBQXFCLDZCQUE2QixPQUFPLFVBQVUsNkJBQTZCLDZCQUE2QixPQUFPLFVBQVUsNEJBQTRCLDZCQUE2QixPQUFPLEtBQUssZ0NBQWdDLGdCQUFnQixtQkFBbUIsNENBQTRDLDRDQUE0QyxPQUFPLGdCQUFnQixtQkFBbUIsd0NBQXdDLHdDQUF3QyxPQUFPLFdBQVcsd0JBQXdCLGdCQUFnQixtQkFBbUIsNENBQTRDLDRDQUE0QyxPQUFPLGdCQUFnQixtQkFBbUIsd0NBQXdDLHdDQUF3QyxPQUFPLFdBQVcscUNBQXFDLFNBQVMsdUJBQXVCLE9BQU8sY0FBYyxvQ0FBb0MsT0FBTyxLQUFLLDZCQUE2QixTQUFTLHVCQUF1QixPQUFPLGNBQWMsb0NBQW9DLE9BQU8sS0FBSywyREFBMkQsU0FBUyxxQ0FBcUMsa0NBQWtDLHNDQUFzQyxPQUFPLGNBQWMsdUJBQXVCLGdEQUFnRCxzQ0FBc0MsT0FBTyxLQUFLLDRCQUE0QixTQUFTLHFDQUFxQyxrQ0FBa0Msc0NBQXNDLE9BQU8sY0FBYyx1QkFBdUIsZ0RBQWdELHNDQUFzQyxPQUFPLEtBQUssb0RBQW9ELE9BQU8saUJBQWlCLEtBQUssT0FBTyxpQkFBaUIsS0FBSyxTQUFTLHFCQUFxQixPQUFPLGlCQUFpQixLQUFLLE9BQU8saUJBQWlCLEtBQUssU0FBUyw4QkFBOEIsU0FBUyxpQkFBaUIsS0FBSyxPQUFPLGlCQUFpQixLQUFLLFNBQVMsc0JBQXNCLFNBQVMsaUJBQWlCLEtBQUssT0FBTyxpQkFBaUIsS0FBSyxTQUFTLG1DQUFtQyxTQUFTLDhDQUE4Qyw4Q0FBOEMsT0FBTyxVQUFVLDhDQUE4Qyw4Q0FBOEMsT0FBTyxVQUFVLDhDQUE4Qyw4Q0FBOEMsT0FBTyxLQUFLLDJCQUEyQixTQUFTLDhDQUE4Qyw4Q0FBOEMsT0FBTyxVQUFVLDhDQUE4Qyw4Q0FBOEMsT0FBTyxVQUFVLDhDQUE4Qyw4Q0FBOEMsT0FBTyxLQUFLLDhCQUE4QixTQUFTLGVBQWUsVUFBVSxhQUFhLFVBQVUsdUNBQXVDLHVDQUF1QyxPQUFPLEtBQUssc0JBQXNCLFNBQVMsZUFBZSxVQUFVLGFBQWEsVUFBVSx1Q0FBdUMsdUNBQXVDLE9BQU8sS0FBSyxXQUFXLDRFQUE0RSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFFBQVEsS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxVQUFVLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxRQUFRLFVBQVUsS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxPQUFPLFdBQVcsS0FBSyxVQUFVLFlBQVksUUFBUSxXQUFXLEtBQUssS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sTUFBTSxLQUFLLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLE9BQU8sS0FBSyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksTUFBTSxPQUFPLEtBQUssS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE1BQU0sTUFBTSxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxNQUFNLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsTUFBTSxNQUFNLEtBQUssS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sTUFBTSxLQUFLLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssS0FBSyxNQUFNLEtBQUssTUFBTSxLQUFLLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxLQUFLLE1BQU0sS0FBSyxNQUFNLEtBQUssS0FBSyxZQUFZLGFBQWEsTUFBTSxvQ0FBb0Msd0JBQXdCLDhCQUE4Qiw2QkFBNkIsOEJBQThCLDZCQUE2Qiw4QkFBOEIsK0JBQStCLGdDQUFnQyxpQ0FBaUMsT0FBTyxlQUFlLCtCQUErQixrQkFBa0IsbUJBQW1CLE9BQU8sa0JBQWtCLDBDQUEwQyxvQ0FBb0MseUJBQXlCLCtCQUErQiwyQkFBMkIsK0JBQStCLE9BQU8sZUFBZSw4QkFBOEIsT0FBTyxnQkFBZ0IseUJBQXlCLE9BQU8saUJBQWlCLG9CQUFvQixPQUFPLCtFQUErRSxrQ0FBa0Msd0JBQXdCLHFCQUFxQiwwQkFBMEIsS0FBSyw4QkFBOEIsOEJBQThCLEtBQUssOENBQThDLGdEQUFnRCx5QkFBeUIsYUFBYSxjQUFjLGtCQUFrQixtQkFBbUIsS0FBSyxvQ0FBb0MscUJBQXFCLHdCQUF3QixLQUFLLG9EQUFvRCxTQUFTLHFCQUFxQiw2QkFBNkIsT0FBTyxVQUFVLDZCQUE2Qiw2QkFBNkIsT0FBTyxVQUFVLDRCQUE0Qiw2QkFBNkIsT0FBTyxLQUFLLHdCQUF3QixnQkFBZ0IsbUJBQW1CLG9DQUFvQyxPQUFPLGdCQUFnQixtQkFBbUIsZ0NBQWdDLE9BQU8sV0FBVyw2QkFBNkIsU0FBUyx1QkFBdUIsT0FBTyxjQUFjLG9DQUFvQyxPQUFPLEtBQUssbURBQW1ELFNBQVMscUNBQXFDLGtDQUFrQyxzQ0FBc0MsT0FBTyxjQUFjLHVCQUF1QixnREFBZ0Qsc0NBQXNDLE9BQU8sS0FBSyw0Q0FBNEMsT0FBTyxpQkFBaUIsS0FBSyxPQUFPLGlCQUFpQixLQUFLLFNBQVMsc0JBQXNCLFNBQVMsaUJBQWlCLEtBQUssT0FBTyxpQkFBaUIsS0FBSyxTQUFTLDJCQUEyQixTQUFTLHNDQUFzQyxPQUFPLFVBQVUsc0NBQXNDLE9BQU8sVUFBVSxzQ0FBc0MsT0FBTyxLQUFLLHNCQUFzQixTQUFTLGVBQWUsVUFBVSxhQUFhLFVBQVUsK0JBQStCLE9BQU8sS0FBSyx1QkFBdUI7QUFDcnlTO0FBQ2Usc0ZBQXVCLEVBQUMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4yYjcxZTlmZTYzNWI4ZjFkYmU3Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxyXFxuOnJvb3Qge1xcclxcbiAgICAtLWRhcms6ICMzNDNhNDA7XFxyXFxuICAgIC0tbGlnaHQtZGFyazogIzRhNTE1NztcXHJcXG4gICAgLS10ZXh0LWNvbG9yOiNmOGY5ZmE7XFxyXFxuICAgIC0tZGFyay1jb2xvcjogIzIxMjUyOTtcXHJcXG4gICAgLS1kaWYtY29sb3I6ICM2MkNCRTc7XFxyXFxuICAgIC0tbG9nby1jb2xvcjogIzE2MTYxNjtcXHJcXG4gICAgLS1saWdodC1jb2xvcjogI0Y3RkZGNztcXHJcXG4gICAgLS1kYW5nZXItY29sb3I6ICNkYzM1NDU7XFxyXFxuICAgIC0tc3VjY2Vzcy1jb2xvcjogIzI4YTc0NTtcXHJcXG4gIH1cXHJcXG5cXHJcXG5cXHJcXG4qIHtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICBib2R5IHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcclxcbiAgICBmb250LXNpemU6IGNhbGMoMTBweCArIDF2dyk7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcXHJcXG4gICAgY29sb3I6IHJnYigzMSwgMzEsIDMxKTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgYSB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgdWwge1xcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICBpbWcge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG5cXHJcXG4vKiBVdGlsaXRpZXMgKi9cXHJcXG4ubGFyZ2UsIC5sYXJnZS1uYW1lLCAubGFyZ2Utc2tpbGwsIC5sYXJnZS1hYm91dHtcXHJcXG4gIGZvbnQtc2l6ZTogY2FsYygyNXB4ICsgM3Z3KTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgbGluZS1oZWlnaHQ6IDE7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubGFyZ2U6OmZpcnN0LWxldHRlciB7XFxyXFxuICBjb2xvcjogdmFyKC0tZGlmLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuICAvKiBPdmVybGF5ICovXFxyXFxuLmRhcmstb3ZlcmxheSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDU5LCAzNiwgMTYsIDAuMjA1KTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogTG9nbyAqL1xcclxcblxcclxcbi5sb2dve1xcclxcbiAgZm9udC1zaXplOiAxdnc7XFxyXFxuICBsaW5lLWhlaWdodDogOTBweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogQW5pbWF0aW9uICovXFxyXFxuXFxyXFxuQC13ZWJraXQta2V5ZnJhbWVzIHRleHQge1xcclxcbiAgMCV7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogLTMwcHg7XFxyXFxuICB9XFxyXFxuICAzMCV7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAyNXB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAtMzBweDtcXHJcXG4gIH1cXHJcXG4gIDg1JXtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDhweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogLTMwcHg7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgdGV4dCB7XFxyXFxuICAwJXtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAtMzBweDtcXHJcXG4gIH1cXHJcXG4gIDMwJXtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDI1cHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IC0zMHB4O1xcclxcbiAgfVxcclxcbiAgODUle1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogOHB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAtMzBweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQC13ZWJraXQta2V5ZnJhbWVzIGxvZ297XFxyXFxuXFxyXFxuICBmcm9tIHtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzMS4wMmRlZyk7XFxyXFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzEuMDJkZWcpO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICB0byB7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxyXFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxyXFxuICB9XFxyXFxuICBcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBsb2dve1xcclxcblxcclxcbiAgZnJvbSB7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzEuMDJkZWcpO1xcclxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDMxLjAyZGVnKTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgdG8ge1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcclxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcclxcbiAgfVxcclxcbiAgXFxyXFxufVxcclxcblxcclxcblxcclxcbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlIHtcXHJcXG4gIDAle1xcclxcbiAgICBjb2xvcjogI2Y3ZjdmNztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIDg1JXtcXHJcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGZhZGUge1xcclxcbiAgMCV7XFxyXFxuICAgIGNvbG9yOiAjZjdmN2Y3O1xcclxcbiAgfVxcclxcblxcclxcbiAgODUle1xcclxcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi8qIFBhcmFncmFwaCAqL1xcclxcbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlLWJ1dHRvbiB7XFxyXFxuICAwJXtcXHJcXG4gICAgY29sb3I6ICB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXHJcXG4gICAgYm9yZGVyOiAzcHggc29saWQgI2Y3ZjdmNztcXHJcXG4gICAgYm94LXNoYWRvdzogMCAwIDFweCAjNzU3Zjg1YjM7XFxyXFxuICB9XFxyXFxuXFxyXFxuICA4NSV7XFxyXFxuICAgIGNvbG9yOiAjZjdmN2Y3O1xcclxcbiAgICBib3JkZXI6IDNweCBzb2xpZCAgdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMCAxcHggIzc1N2Y4NWIzO1xcclxcbiAgfVxcclxcbn1cXHJcXG5Aa2V5ZnJhbWVzIGZhZGUtYnV0dG9uIHtcXHJcXG4gIDAle1xcclxcbiAgICBjb2xvcjogIHZhcigtLXByaW1hcnktY29sb3IpO1xcclxcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjZjdmN2Y3O1xcclxcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4ICM3NTdmODViMztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIDg1JXtcXHJcXG4gICAgY29sb3I6ICNmN2Y3Zjc7XFxyXFxuICAgIGJvcmRlcjogM3B4IHNvbGlkICB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAwIDFweCAjNzU3Zjg1YjM7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi8qIFBhcmFncmFwaCAqL1xcclxcbkAtd2Via2l0LWtleWZyYW1lcyBwYXJhIHtcXHJcXG4wJXtcXHJcXG4gIG9wYWNpdHk6IDA7XFxyXFxufVxcclxcbnRve1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG59XFxyXFxuXFxyXFxufVxcclxcbkBrZXlmcmFtZXMgcGFyYSB7XFxyXFxuMCV7XFxyXFxuICBvcGFjaXR5OiAwO1xcclxcbn1cXHJcXG50b3tcXHJcXG4gIG9wYWNpdHk6IDE7XFxyXFxufVxcclxcblxcclxcbn1cXHJcXG5ALXdlYmtpdC1rZXlmcmFtZXMgdGl0bGUge1xcclxcbmZyb217XFxyXFxuICBvcGFjaXR5OiAwO1xcclxcbn1cXHJcXG50b3tcXHJcXG4gIG9wYWNpdHk6IDE7XFxyXFxufVxcclxcblxcclxcbn1cXHJcXG5Aa2V5ZnJhbWVzIHRpdGxlIHtcXHJcXG5mcm9te1xcclxcbiAgb3BhY2l0eTogMDtcXHJcXG59XFxyXFxudG97XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbn1cXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuQC13ZWJraXQta2V5ZnJhbWVzIHNvY2lhbCB7XFxyXFxuICAwJXtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMXB4KTtcXHJcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMXB4KTtcXHJcXG4gIH1cXHJcXG4gIDMwJXtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNHB4KTtcXHJcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNHB4KTtcXHJcXG4gIH1cXHJcXG4gIDg1JXtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNnB4KTtcXHJcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNnB4KTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBzb2NpYWwge1xcclxcbiAgMCV7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTFweCk7XFxyXFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTFweCk7XFxyXFxuICB9XFxyXFxuICAzMCV7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTRweCk7XFxyXFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTRweCk7XFxyXFxuICB9XFxyXFxuICA4NSV7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTZweCk7XFxyXFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTZweCk7XFxyXFxuICB9XFxyXFxufVxcclxcbkAtd2Via2l0LWtleWZyYW1lcyBzY2FsZSB7XFxyXFxuICAwJXtcXHJcXG4gICAgXFxyXFxuICB9XFxyXFxuICAzMCV7XFxyXFxuICBcXHJcXG4gIH1cXHJcXG4gIDg1JXtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMDcpO1xcclxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNyk7XFxyXFxuICB9XFxyXFxufVxcclxcbkBrZXlmcmFtZXMgc2NhbGUge1xcclxcbiAgMCV7XFxyXFxuICAgIFxcclxcbiAgfVxcclxcbiAgMzAle1xcclxcbiAgXFxyXFxuICB9XFxyXFxuICA4NSV7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjA3KTtcXHJcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDcpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3R5bGUvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFDQTtJQUNJLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsb0JBQW9CO0lBQ3BCLHFCQUFxQjtJQUNyQixvQkFBb0I7SUFDcEIscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsd0JBQXdCO0VBQzFCOzs7QUFHRjtJQUNJLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsVUFBVTtFQUNaOztFQUVBO0lBQ0UsaUNBQWlDO0lBQ2pDLDJCQUEyQjtJQUMzQixnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7OztBQUdGLGNBQWM7QUFDZDtFQUNFLDJCQUEyQjtFQUMzQixpQkFBaUI7RUFDakIsY0FBYztFQUNkLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7O0VBR0UsWUFBWTtBQUNkO0VBQ0UseUNBQXlDO0VBQ3pDLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7OztBQUdBLFNBQVM7O0FBRVQ7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COzs7QUFHQSxjQUFjOztBQUVkO0VBQ0U7SUFDRSxZQUFZO0lBQ1osb0JBQW9CO0VBQ3RCO0VBQ0E7SUFDRSxvQkFBb0I7SUFDcEIsb0JBQW9CO0VBQ3RCO0VBQ0E7SUFDRSxtQkFBbUI7SUFDbkIsb0JBQW9CO0VBQ3RCO0FBQ0Y7O0FBYkE7RUFDRTtJQUNFLFlBQVk7SUFDWixvQkFBb0I7RUFDdEI7RUFDQTtJQUNFLG9CQUFvQjtJQUNwQixvQkFBb0I7RUFDdEI7RUFDQTtJQUNFLG1CQUFtQjtJQUNuQixvQkFBb0I7RUFDdEI7QUFDRjs7QUFFQTs7RUFFRTtJQUNFLFVBQVU7SUFDVixtQ0FBMkI7WUFBM0IsMkJBQTJCO0VBQzdCOztFQUVBO0lBQ0UsVUFBVTtJQUNWLCtCQUF1QjtZQUF2Qix1QkFBdUI7RUFDekI7O0FBRUY7O0FBWkE7O0VBRUU7SUFDRSxVQUFVO0lBQ1YsbUNBQTJCO1lBQTNCLDJCQUEyQjtFQUM3Qjs7RUFFQTtJQUNFLFVBQVU7SUFDViwrQkFBdUI7WUFBdkIsdUJBQXVCO0VBQ3pCOztBQUVGOzs7QUFHQTtFQUNFO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTtJQUNFLDJCQUEyQjtFQUM3QjtBQUNGOzs7QUFSQTtFQUNFO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTtJQUNFLDJCQUEyQjtFQUM3QjtBQUNGOztBQUVBLGNBQWM7QUFDZDtFQUNFO0lBQ0UsNEJBQTRCO0lBQzVCLHlCQUF5QjtJQUN6Qiw2QkFBNkI7RUFDL0I7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsdUNBQXVDO0lBQ3ZDLDZCQUE2QjtFQUMvQjtBQUNGO0FBWkE7RUFDRTtJQUNFLDRCQUE0QjtJQUM1Qix5QkFBeUI7SUFDekIsNkJBQTZCO0VBQy9COztFQUVBO0lBQ0UsY0FBYztJQUNkLHVDQUF1QztJQUN2Qyw2QkFBNkI7RUFDL0I7QUFDRjs7QUFFQSxjQUFjO0FBQ2Q7QUFDQTtFQUNFLFVBQVU7QUFDWjtBQUNBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0FBUkE7QUFDQTtFQUNFLFVBQVU7QUFDWjtBQUNBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtFQUNFLFVBQVU7QUFDWjtBQUNBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0FBUkE7QUFDQTtFQUNFLFVBQVU7QUFDWjtBQUNBO0VBQ0UsVUFBVTtBQUNaOztBQUVBOztBQUVBO0VBQ0U7SUFDRSxxQ0FBNkI7WUFBN0IsNkJBQTZCO0VBQy9CO0VBQ0E7SUFDRSxxQ0FBNkI7WUFBN0IsNkJBQTZCO0VBQy9CO0VBQ0E7SUFDRSxxQ0FBNkI7WUFBN0IsNkJBQTZCO0VBQy9CO0FBQ0Y7O0FBVkE7RUFDRTtJQUNFLHFDQUE2QjtZQUE3Qiw2QkFBNkI7RUFDL0I7RUFDQTtJQUNFLHFDQUE2QjtZQUE3Qiw2QkFBNkI7RUFDL0I7RUFDQTtJQUNFLHFDQUE2QjtZQUE3Qiw2QkFBNkI7RUFDL0I7QUFDRjtBQUNBO0VBQ0U7O0VBRUE7RUFDQTs7RUFFQTtFQUNBO0lBQ0UsOEJBQXNCO1lBQXRCLHNCQUFzQjtFQUN4QjtBQUNGO0FBVkE7RUFDRTs7RUFFQTtFQUNBOztFQUVBO0VBQ0E7SUFDRSw4QkFBc0I7WUFBdEIsc0JBQXNCO0VBQ3hCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxyXFxuOnJvb3Qge1xcclxcbiAgICAtLWRhcms6ICMzNDNhNDA7XFxyXFxuICAgIC0tbGlnaHQtZGFyazogIzRhNTE1NztcXHJcXG4gICAgLS10ZXh0LWNvbG9yOiNmOGY5ZmE7XFxyXFxuICAgIC0tZGFyay1jb2xvcjogIzIxMjUyOTtcXHJcXG4gICAgLS1kaWYtY29sb3I6ICM2MkNCRTc7XFxyXFxuICAgIC0tbG9nby1jb2xvcjogIzE2MTYxNjtcXHJcXG4gICAgLS1saWdodC1jb2xvcjogI0Y3RkZGNztcXHJcXG4gICAgLS1kYW5nZXItY29sb3I6ICNkYzM1NDU7XFxyXFxuICAgIC0tc3VjY2Vzcy1jb2xvcjogIzI4YTc0NTtcXHJcXG4gIH1cXHJcXG5cXHJcXG5cXHJcXG4qIHtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICBib2R5IHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcclxcbiAgICBmb250LXNpemU6IGNhbGMoMTBweCArIDF2dyk7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcXHJcXG4gICAgY29sb3I6IHJnYigzMSwgMzEsIDMxKTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgYSB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgdWwge1xcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICBpbWcge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG5cXHJcXG4vKiBVdGlsaXRpZXMgKi9cXHJcXG4ubGFyZ2UsIC5sYXJnZS1uYW1lLCAubGFyZ2Utc2tpbGwsIC5sYXJnZS1hYm91dHtcXHJcXG4gIGZvbnQtc2l6ZTogY2FsYygyNXB4ICsgM3Z3KTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgbGluZS1oZWlnaHQ6IDE7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubGFyZ2U6OmZpcnN0LWxldHRlciB7XFxyXFxuICBjb2xvcjogdmFyKC0tZGlmLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuICAvKiBPdmVybGF5ICovXFxyXFxuLmRhcmstb3ZlcmxheSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDU5LCAzNiwgMTYsIDAuMjA1KTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogTG9nbyAqL1xcclxcblxcclxcbi5sb2dve1xcclxcbiAgZm9udC1zaXplOiAxdnc7XFxyXFxuICBsaW5lLWhlaWdodDogOTBweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogQW5pbWF0aW9uICovXFxyXFxuXFxyXFxuQGtleWZyYW1lcyB0ZXh0IHtcXHJcXG4gIDAle1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IC0zMHB4O1xcclxcbiAgfVxcclxcbiAgMzAle1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMjVweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogLTMwcHg7XFxyXFxuICB9XFxyXFxuICA4NSV7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiA4cHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IC0zMHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGxvZ297XFxyXFxuXFxyXFxuICBmcm9tIHtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzEuMDJkZWcpO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICB0byB7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcclxcbiAgfVxcclxcbiAgXFxyXFxufVxcclxcblxcclxcblxcclxcbkBrZXlmcmFtZXMgZmFkZSB7XFxyXFxuICAwJXtcXHJcXG4gICAgY29sb3I6ICNmN2Y3Zjc7XFxyXFxuICB9XFxyXFxuXFxyXFxuICA4NSV7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLyogUGFyYWdyYXBoICovXFxyXFxuQGtleWZyYW1lcyBmYWRlLWJ1dHRvbiB7XFxyXFxuICAwJXtcXHJcXG4gICAgY29sb3I6ICB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXHJcXG4gICAgYm9yZGVyOiAzcHggc29saWQgI2Y3ZjdmNztcXHJcXG4gICAgYm94LXNoYWRvdzogMCAwIDFweCAjNzU3Zjg1YjM7XFxyXFxuICB9XFxyXFxuXFxyXFxuICA4NSV7XFxyXFxuICAgIGNvbG9yOiAjZjdmN2Y3O1xcclxcbiAgICBib3JkZXI6IDNweCBzb2xpZCAgdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMCAxcHggIzc1N2Y4NWIzO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4vKiBQYXJhZ3JhcGggKi9cXHJcXG5Aa2V5ZnJhbWVzIHBhcmEge1xcclxcbjAle1xcclxcbiAgb3BhY2l0eTogMDtcXHJcXG59XFxyXFxudG97XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbn1cXHJcXG5cXHJcXG59XFxyXFxuQGtleWZyYW1lcyB0aXRsZSB7XFxyXFxuZnJvbXtcXHJcXG4gIG9wYWNpdHk6IDA7XFxyXFxufVxcclxcbnRve1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG59XFxyXFxuXFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgc29jaWFsIHtcXHJcXG4gIDAle1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMXB4KTtcXHJcXG4gIH1cXHJcXG4gIDMwJXtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTRweCk7XFxyXFxuICB9XFxyXFxuICA4NSV7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC02cHgpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5Aa2V5ZnJhbWVzIHNjYWxlIHtcXHJcXG4gIDAle1xcclxcbiAgICBcXHJcXG4gIH1cXHJcXG4gIDMwJXtcXHJcXG4gIFxcclxcbiAgfVxcclxcbiAgODUle1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDcpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==