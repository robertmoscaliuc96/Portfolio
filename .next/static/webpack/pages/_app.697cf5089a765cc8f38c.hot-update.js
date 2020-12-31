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
___CSS_LOADER_EXPORT___.push([module.i, "\r\n:root {\r\n    --dark: #343a40;\r\n    --light-dark: #4a5157;\r\n    --text-color:#f8f9fa;\r\n    --dark-color: #212529;\r\n    --dif-color: #62CBE7;\r\n    --logo-color: #161616;\r\n    --light-color: #F7FFF7;\r\n    --danger-color: #dc3545;\r\n    --success-color: #28a745;\r\n  }\r\n\r\n\r\n* {\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    padding: 0;\r\n  }\r\n  \r\n  body {\r\n    font-family: 'Roboto', sans-serif;\r\n    font-size: calc(10px + 1vw);\r\n    line-height: 1.6;\r\n    background-color: #fff;\r\n    color: rgb(31, 31, 31);\r\n  }\r\n  \r\n  a {\r\n    text-decoration: none;\r\n  }\r\n  \r\n  ul {\r\n    list-style: none;\r\n  }\r\n  \r\n  img {\r\n    width: 100%;\r\n  }\r\n  /* FONT-SIZE SCHEME\r\n\r\n  font-size1: calc(25px + 3vw);\r\n  font-size1: calc(25px + 3vw);\r\n  font-size1: calc(25px + 3vw);\r\n\r\n  font-weight1: 150;\r\n  font-weight: 150;\r\n  font-weight: 150;\r\n  */\r\n\r\n\r\n\r\n\r\n\r\n/* Utilities */\r\n.large, .large-name, .large-skill, .large-about{\r\n  font-size: calc(25px + 3vw);\r\n  font-weight: bold;\r\n  line-height: 1;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.large::first-letter {\r\n  color: var(--dif-color);\r\n}\r\n\r\n\r\n  /* Overlay */\r\n.dark-overlay {\r\n  background-color: rgba(59, 36, 16, 0.205);\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.homepage {\r\n  max-width: 100%;\r\n  margin: auto;\r\n  overflow: hidden;\r\n}\r\n\r\n/* Logo */\r\n\r\n.logo{\r\n  font-size: 1vw;\r\n  line-height: 90px;\r\n}\r\n.robert-logo{\r\n  width: 3.5rem;\r\n  height: auto;\r\n  padding: 8px;\r\n  padding-bottom: 13px;\r\n  background-color: #161616;\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n/* Animation */\r\n\r\n@-webkit-keyframes text {\r\n  0%{\r\n    color: black;\r\n    margin-bottom: -30px;\r\n  }\r\n  30%{\r\n    letter-spacing: 25px;\r\n    margin-bottom: -30px;\r\n  }\r\n  85%{\r\n    letter-spacing: 8px;\r\n    margin-bottom: -30px;\r\n  }\r\n}\r\n\r\n@keyframes text {\r\n  0%{\r\n    color: black;\r\n    margin-bottom: -30px;\r\n  }\r\n  30%{\r\n    letter-spacing: 25px;\r\n    margin-bottom: -30px;\r\n  }\r\n  85%{\r\n    letter-spacing: 8px;\r\n    margin-bottom: -30px;\r\n  }\r\n}\r\n\r\n@-webkit-keyframes logo{\r\n\r\n  from {\r\n    opacity: 0;\r\n    -webkit-transform: rotate(31.02deg);\r\n            transform: rotate(31.02deg);\r\n  }\r\n  \r\n  to {\r\n    opacity: 1;\r\n    -webkit-transform: rotate(0deg);\r\n            transform: rotate(0deg);\r\n  }\r\n  \r\n}\r\n\r\n@keyframes logo{\r\n\r\n  from {\r\n    opacity: 0;\r\n    -webkit-transform: rotate(31.02deg);\r\n            transform: rotate(31.02deg);\r\n  }\r\n  \r\n  to {\r\n    opacity: 1;\r\n    -webkit-transform: rotate(0deg);\r\n            transform: rotate(0deg);\r\n  }\r\n  \r\n}\r\n\r\n\r\n@-webkit-keyframes fade {\r\n  0%{\r\n    color: #f7f7f7;\r\n  }\r\n\r\n  85%{\r\n    color: var(--primary-color);\r\n  }\r\n}\r\n\r\n\r\n@keyframes fade {\r\n  0%{\r\n    color: #f7f7f7;\r\n  }\r\n\r\n  85%{\r\n    color: var(--primary-color);\r\n  }\r\n}\r\n\r\n/* Paragraph */\r\n@-webkit-keyframes fade-button {\r\n  0%{\r\n    color:  var(--primary-color);\r\n    border: 3px solid #f7f7f7;\r\n    box-shadow: 0 0 1px #757f85b3;\r\n  }\r\n\r\n  85%{\r\n    color: #f7f7f7;\r\n    border: 3px solid  var(--primary-color);\r\n    box-shadow: 0 0 1px #757f85b3;\r\n  }\r\n}\r\n@keyframes fade-button {\r\n  0%{\r\n    color:  var(--primary-color);\r\n    border: 3px solid #f7f7f7;\r\n    box-shadow: 0 0 1px #757f85b3;\r\n  }\r\n\r\n  85%{\r\n    color: #f7f7f7;\r\n    border: 3px solid  var(--primary-color);\r\n    box-shadow: 0 0 1px #757f85b3;\r\n  }\r\n}\r\n\r\n/* Paragraph */\r\n@-webkit-keyframes para {\r\n0%{\r\n  opacity: 0;\r\n}\r\n45%{\r\n  opacity:0;\r\n}\r\n85%{\r\n  opacity: 1;\r\n}\r\n\r\n}\r\n@keyframes para {\r\n0%{\r\n  opacity: 0;\r\n}\r\n45%{\r\n  opacity:0;\r\n}\r\n85%{\r\n  opacity: 1;\r\n}\r\n\r\n}\r\n\r\n@-webkit-keyframes social {\r\n  0%{\r\n    -webkit-transform: translate(0, -1px);\r\n            transform: translate(0, -1px);\r\n  }\r\n  30%{\r\n    -webkit-transform: translate(0, -4px);\r\n            transform: translate(0, -4px);\r\n  }\r\n  85%{\r\n    -webkit-transform: translate(0, -6px);\r\n            transform: translate(0, -6px);\r\n  }\r\n}\r\n\r\n@keyframes social {\r\n  0%{\r\n    -webkit-transform: translate(0, -1px);\r\n            transform: translate(0, -1px);\r\n  }\r\n  30%{\r\n    -webkit-transform: translate(0, -4px);\r\n            transform: translate(0, -4px);\r\n  }\r\n  85%{\r\n    -webkit-transform: translate(0, -6px);\r\n            transform: translate(0, -6px);\r\n  }\r\n}\r\n@-webkit-keyframes scale {\r\n  0%{\r\n    \r\n  }\r\n  30%{\r\n  \r\n  }\r\n  85%{\r\n    -webkit-transform: scale(1.07);\r\n            transform: scale(1.07);\r\n  }\r\n}\r\n@keyframes scale {\r\n  0%{\r\n    \r\n  }\r\n  30%{\r\n  \r\n  }\r\n  85%{\r\n    -webkit-transform: scale(1.07);\r\n            transform: scale(1.07);\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://style/index.css"],"names":[],"mappings":"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","sourcesContent":["\r\n:root {\r\n    --dark: #343a40;\r\n    --light-dark: #4a5157;\r\n    --text-color:#f8f9fa;\r\n    --dark-color: #212529;\r\n    --dif-color: #62CBE7;\r\n    --logo-color: #161616;\r\n    --light-color: #F7FFF7;\r\n    --danger-color: #dc3545;\r\n    --success-color: #28a745;\r\n  }\r\n\r\n\r\n* {\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    padding: 0;\r\n  }\r\n  \r\n  body {\r\n    font-family: 'Roboto', sans-serif;\r\n    font-size: calc(10px + 1vw);\r\n    line-height: 1.6;\r\n    background-color: #fff;\r\n    color: rgb(31, 31, 31);\r\n  }\r\n  \r\n  a {\r\n    text-decoration: none;\r\n  }\r\n  \r\n  ul {\r\n    list-style: none;\r\n  }\r\n  \r\n  img {\r\n    width: 100%;\r\n  }\r\n  /* FONT-SIZE SCHEME\r\n\r\n  font-size1: calc(25px + 3vw);\r\n  font-size1: calc(25px + 3vw);\r\n  font-size1: calc(25px + 3vw);\r\n\r\n  font-weight1: 150;\r\n  font-weight: 150;\r\n  font-weight: 150;\r\n  */\r\n\r\n\r\n\r\n\r\n\r\n/* Utilities */\r\n.large, .large-name, .large-skill, .large-about{\r\n  font-size: calc(25px + 3vw);\r\n  font-weight: bold;\r\n  line-height: 1;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.large::first-letter {\r\n  color: var(--dif-color);\r\n}\r\n\r\n\r\n  /* Overlay */\r\n.dark-overlay {\r\n  background-color: rgba(59, 36, 16, 0.205);\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.homepage {\r\n  max-width: 100%;\r\n  margin: auto;\r\n  overflow: hidden;\r\n}\r\n\r\n/* Logo */\r\n\r\n.logo{\r\n  font-size: 1vw;\r\n  line-height: 90px;\r\n}\r\n.robert-logo{\r\n  width: 3.5rem;\r\n  height: auto;\r\n  padding: 8px;\r\n  padding-bottom: 13px;\r\n  background-color: #161616;\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n/* Animation */\r\n\r\n@keyframes text {\r\n  0%{\r\n    color: black;\r\n    margin-bottom: -30px;\r\n  }\r\n  30%{\r\n    letter-spacing: 25px;\r\n    margin-bottom: -30px;\r\n  }\r\n  85%{\r\n    letter-spacing: 8px;\r\n    margin-bottom: -30px;\r\n  }\r\n}\r\n\r\n@keyframes logo{\r\n\r\n  from {\r\n    opacity: 0;\r\n    transform: rotate(31.02deg);\r\n  }\r\n  \r\n  to {\r\n    opacity: 1;\r\n    transform: rotate(0deg);\r\n  }\r\n  \r\n}\r\n\r\n\r\n@keyframes fade {\r\n  0%{\r\n    color: #f7f7f7;\r\n  }\r\n\r\n  85%{\r\n    color: var(--primary-color);\r\n  }\r\n}\r\n\r\n/* Paragraph */\r\n@keyframes fade-button {\r\n  0%{\r\n    color:  var(--primary-color);\r\n    border: 3px solid #f7f7f7;\r\n    box-shadow: 0 0 1px #757f85b3;\r\n  }\r\n\r\n  85%{\r\n    color: #f7f7f7;\r\n    border: 3px solid  var(--primary-color);\r\n    box-shadow: 0 0 1px #757f85b3;\r\n  }\r\n}\r\n\r\n/* Paragraph */\r\n@keyframes para {\r\n0%{\r\n  opacity: 0;\r\n}\r\n45%{\r\n  opacity:0;\r\n}\r\n85%{\r\n  opacity: 1;\r\n}\r\n\r\n}\r\n\r\n@keyframes social {\r\n  0%{\r\n    transform: translate(0, -1px);\r\n  }\r\n  30%{\r\n    transform: translate(0, -4px);\r\n  }\r\n  85%{\r\n    transform: translate(0, -6px);\r\n  }\r\n}\r\n@keyframes scale {\r\n  0%{\r\n    \r\n  }\r\n  30%{\r\n  \r\n  }\r\n  85%{\r\n    transform: scale(1.07);\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGUvaW5kZXguY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUN5RjtBQUN6Riw4QkFBOEIsbUZBQTJCO0FBQ3pEO0FBQ0EsOEJBQThCLFFBQVMsY0FBYyx3QkFBd0IsOEJBQThCLDZCQUE2Qiw4QkFBOEIsNkJBQTZCLDhCQUE4QiwrQkFBK0IsZ0NBQWdDLGlDQUFpQyxPQUFPLGVBQWUsK0JBQStCLGtCQUFrQixtQkFBbUIsT0FBTyxrQkFBa0IsMENBQTBDLG9DQUFvQyx5QkFBeUIsK0JBQStCLCtCQUErQixPQUFPLGVBQWUsOEJBQThCLE9BQU8sZ0JBQWdCLHlCQUF5QixPQUFPLGlCQUFpQixvQkFBb0IsT0FBTyxnRUFBZ0UsbUNBQW1DLG1DQUFtQyw0QkFBNEIsdUJBQXVCLHVCQUF1QixtR0FBbUcsa0NBQWtDLHdCQUF3QixxQkFBcUIsMEJBQTBCLEtBQUssOEJBQThCLDhCQUE4QixLQUFLLDhDQUE4QyxnREFBZ0QseUJBQXlCLGFBQWEsY0FBYyxrQkFBa0IsbUJBQW1CLEtBQUssbUJBQW1CLHNCQUFzQixtQkFBbUIsdUJBQXVCLEtBQUssZ0NBQWdDLHFCQUFxQix3QkFBd0IsS0FBSyxpQkFBaUIsb0JBQW9CLG1CQUFtQixtQkFBbUIsMkJBQTJCLGdDQUFnQyxzQkFBc0IsS0FBSyw0REFBNEQsU0FBUyxxQkFBcUIsNkJBQTZCLE9BQU8sVUFBVSw2QkFBNkIsNkJBQTZCLE9BQU8sVUFBVSw0QkFBNEIsNkJBQTZCLE9BQU8sS0FBSyx5QkFBeUIsU0FBUyxxQkFBcUIsNkJBQTZCLE9BQU8sVUFBVSw2QkFBNkIsNkJBQTZCLE9BQU8sVUFBVSw0QkFBNEIsNkJBQTZCLE9BQU8sS0FBSyxnQ0FBZ0MsZ0JBQWdCLG1CQUFtQiw0Q0FBNEMsNENBQTRDLE9BQU8sZ0JBQWdCLG1CQUFtQix3Q0FBd0Msd0NBQXdDLE9BQU8sV0FBVyx3QkFBd0IsZ0JBQWdCLG1CQUFtQiw0Q0FBNEMsNENBQTRDLE9BQU8sZ0JBQWdCLG1CQUFtQix3Q0FBd0Msd0NBQXdDLE9BQU8sV0FBVyxxQ0FBcUMsU0FBUyx1QkFBdUIsT0FBTyxjQUFjLG9DQUFvQyxPQUFPLEtBQUssNkJBQTZCLFNBQVMsdUJBQXVCLE9BQU8sY0FBYyxvQ0FBb0MsT0FBTyxLQUFLLDJEQUEyRCxTQUFTLHFDQUFxQyxrQ0FBa0Msc0NBQXNDLE9BQU8sY0FBYyx1QkFBdUIsZ0RBQWdELHNDQUFzQyxPQUFPLEtBQUssNEJBQTRCLFNBQVMscUNBQXFDLGtDQUFrQyxzQ0FBc0MsT0FBTyxjQUFjLHVCQUF1QixnREFBZ0Qsc0NBQXNDLE9BQU8sS0FBSyxvREFBb0QsT0FBTyxpQkFBaUIsS0FBSyxRQUFRLGdCQUFnQixLQUFLLFFBQVEsaUJBQWlCLEtBQUssU0FBUyxxQkFBcUIsT0FBTyxpQkFBaUIsS0FBSyxRQUFRLGdCQUFnQixLQUFLLFFBQVEsaUJBQWlCLEtBQUssU0FBUyxtQ0FBbUMsU0FBUyw4Q0FBOEMsOENBQThDLE9BQU8sVUFBVSw4Q0FBOEMsOENBQThDLE9BQU8sVUFBVSw4Q0FBOEMsOENBQThDLE9BQU8sS0FBSywyQkFBMkIsU0FBUyw4Q0FBOEMsOENBQThDLE9BQU8sVUFBVSw4Q0FBOEMsOENBQThDLE9BQU8sVUFBVSw4Q0FBOEMsOENBQThDLE9BQU8sS0FBSyw4QkFBOEIsU0FBUyxlQUFlLFVBQVUsYUFBYSxVQUFVLHVDQUF1Qyx1Q0FBdUMsT0FBTyxLQUFLLHNCQUFzQixTQUFTLGVBQWUsVUFBVSxhQUFhLFVBQVUsdUNBQXVDLHVDQUF1QyxPQUFPLEtBQUssV0FBVyw0RUFBNEUsS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxRQUFRLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxLQUFLLGFBQWEsVUFBVSxVQUFVLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxRQUFRLFVBQVUsS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxXQUFXLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxRQUFRLFdBQVcsS0FBSyxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxNQUFNLEtBQUssS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sTUFBTSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sT0FBTyxLQUFLLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxNQUFNLE9BQU8sS0FBSyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksTUFBTSxNQUFNLFVBQVUsS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLE1BQU0sVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsTUFBTSxNQUFNLEtBQUssS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sTUFBTSxLQUFLLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssS0FBSyxNQUFNLEtBQUssTUFBTSxLQUFLLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxLQUFLLE1BQU0sS0FBSyxNQUFNLEtBQUssS0FBSyxZQUFZLGFBQWEsTUFBTSxvQ0FBb0Msd0JBQXdCLDhCQUE4Qiw2QkFBNkIsOEJBQThCLDZCQUE2Qiw4QkFBOEIsK0JBQStCLGdDQUFnQyxpQ0FBaUMsT0FBTyxlQUFlLCtCQUErQixrQkFBa0IsbUJBQW1CLE9BQU8sa0JBQWtCLDBDQUEwQyxvQ0FBb0MseUJBQXlCLCtCQUErQiwrQkFBK0IsT0FBTyxlQUFlLDhCQUE4QixPQUFPLGdCQUFnQix5QkFBeUIsT0FBTyxpQkFBaUIsb0JBQW9CLE9BQU8sZ0VBQWdFLG1DQUFtQyxtQ0FBbUMsNEJBQTRCLHVCQUF1Qix1QkFBdUIsbUdBQW1HLGtDQUFrQyx3QkFBd0IscUJBQXFCLDBCQUEwQixLQUFLLDhCQUE4Qiw4QkFBOEIsS0FBSyw4Q0FBOEMsZ0RBQWdELHlCQUF5QixhQUFhLGNBQWMsa0JBQWtCLG1CQUFtQixLQUFLLG1CQUFtQixzQkFBc0IsbUJBQW1CLHVCQUF1QixLQUFLLGdDQUFnQyxxQkFBcUIsd0JBQXdCLEtBQUssaUJBQWlCLG9CQUFvQixtQkFBbUIsbUJBQW1CLDJCQUEyQixnQ0FBZ0Msc0JBQXNCLEtBQUssb0RBQW9ELFNBQVMscUJBQXFCLDZCQUE2QixPQUFPLFVBQVUsNkJBQTZCLDZCQUE2QixPQUFPLFVBQVUsNEJBQTRCLDZCQUE2QixPQUFPLEtBQUssd0JBQXdCLGdCQUFnQixtQkFBbUIsb0NBQW9DLE9BQU8sZ0JBQWdCLG1CQUFtQixnQ0FBZ0MsT0FBTyxXQUFXLDZCQUE2QixTQUFTLHVCQUF1QixPQUFPLGNBQWMsb0NBQW9DLE9BQU8sS0FBSyxtREFBbUQsU0FBUyxxQ0FBcUMsa0NBQWtDLHNDQUFzQyxPQUFPLGNBQWMsdUJBQXVCLGdEQUFnRCxzQ0FBc0MsT0FBTyxLQUFLLDRDQUE0QyxPQUFPLGlCQUFpQixLQUFLLFFBQVEsZ0JBQWdCLEtBQUssUUFBUSxpQkFBaUIsS0FBSyxTQUFTLDJCQUEyQixTQUFTLHNDQUFzQyxPQUFPLFVBQVUsc0NBQXNDLE9BQU8sVUFBVSxzQ0FBc0MsT0FBTyxLQUFLLHNCQUFzQixTQUFTLGVBQWUsVUFBVSxhQUFhLFVBQVUsK0JBQStCLE9BQU8sS0FBSyx1QkFBdUI7QUFDcGlVO0FBQ2Usc0ZBQXVCLEVBQUMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC42OTdjZjUwODlhNzY1Y2M4ZjM4Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxyXFxuOnJvb3Qge1xcclxcbiAgICAtLWRhcms6ICMzNDNhNDA7XFxyXFxuICAgIC0tbGlnaHQtZGFyazogIzRhNTE1NztcXHJcXG4gICAgLS10ZXh0LWNvbG9yOiNmOGY5ZmE7XFxyXFxuICAgIC0tZGFyay1jb2xvcjogIzIxMjUyOTtcXHJcXG4gICAgLS1kaWYtY29sb3I6ICM2MkNCRTc7XFxyXFxuICAgIC0tbG9nby1jb2xvcjogIzE2MTYxNjtcXHJcXG4gICAgLS1saWdodC1jb2xvcjogI0Y3RkZGNztcXHJcXG4gICAgLS1kYW5nZXItY29sb3I6ICNkYzM1NDU7XFxyXFxuICAgIC0tc3VjY2Vzcy1jb2xvcjogIzI4YTc0NTtcXHJcXG4gIH1cXHJcXG5cXHJcXG5cXHJcXG4qIHtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICBib2R5IHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcclxcbiAgICBmb250LXNpemU6IGNhbGMoMTBweCArIDF2dyk7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAgIGNvbG9yOiByZ2IoMzEsIDMxLCAzMSk7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIGEge1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIHVsIHtcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgaW1nIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICB9XFxyXFxuICAvKiBGT05ULVNJWkUgU0NIRU1FXFxyXFxuXFxyXFxuICBmb250LXNpemUxOiBjYWxjKDI1cHggKyAzdncpO1xcclxcbiAgZm9udC1zaXplMTogY2FsYygyNXB4ICsgM3Z3KTtcXHJcXG4gIGZvbnQtc2l6ZTE6IGNhbGMoMjVweCArIDN2dyk7XFxyXFxuXFxyXFxuICBmb250LXdlaWdodDE6IDE1MDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiAxNTA7XFxyXFxuICBmb250LXdlaWdodDogMTUwO1xcclxcbiAgKi9cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKiBVdGlsaXRpZXMgKi9cXHJcXG4ubGFyZ2UsIC5sYXJnZS1uYW1lLCAubGFyZ2Utc2tpbGwsIC5sYXJnZS1hYm91dHtcXHJcXG4gIGZvbnQtc2l6ZTogY2FsYygyNXB4ICsgM3Z3KTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgbGluZS1oZWlnaHQ6IDE7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubGFyZ2U6OmZpcnN0LWxldHRlciB7XFxyXFxuICBjb2xvcjogdmFyKC0tZGlmLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuICAvKiBPdmVybGF5ICovXFxyXFxuLmRhcmstb3ZlcmxheSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDU5LCAzNiwgMTYsIDAuMjA1KTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWVwYWdlIHtcXHJcXG4gIG1heC13aWR0aDogMTAwJTtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi8qIExvZ28gKi9cXHJcXG5cXHJcXG4ubG9nb3tcXHJcXG4gIGZvbnQtc2l6ZTogMXZ3O1xcclxcbiAgbGluZS1oZWlnaHQ6IDkwcHg7XFxyXFxufVxcclxcbi5yb2JlcnQtbG9nb3tcXHJcXG4gIHdpZHRoOiAzLjVyZW07XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxuICBwYWRkaW5nOiA4cHg7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMTNweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNjE2MTY7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIEFuaW1hdGlvbiAqL1xcclxcblxcclxcbkAtd2Via2l0LWtleWZyYW1lcyB0ZXh0IHtcXHJcXG4gIDAle1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IC0zMHB4O1xcclxcbiAgfVxcclxcbiAgMzAle1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMjVweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogLTMwcHg7XFxyXFxuICB9XFxyXFxuICA4NSV7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiA4cHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IC0zMHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHRleHQge1xcclxcbiAgMCV7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogLTMwcHg7XFxyXFxuICB9XFxyXFxuICAzMCV7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAyNXB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAtMzBweDtcXHJcXG4gIH1cXHJcXG4gIDg1JXtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDhweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogLTMwcHg7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkAtd2Via2l0LWtleWZyYW1lcyBsb2dve1xcclxcblxcclxcbiAgZnJvbSB7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzEuMDJkZWcpO1xcclxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDMxLjAyZGVnKTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgdG8ge1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcclxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcclxcbiAgfVxcclxcbiAgXFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgbG9nb3tcXHJcXG5cXHJcXG4gIGZyb20ge1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDMxLjAyZGVnKTtcXHJcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzMS4wMmRlZyk7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIHRvIHtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXHJcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZSB7XFxyXFxuICAwJXtcXHJcXG4gICAgY29sb3I6ICNmN2Y3Zjc7XFxyXFxuICB9XFxyXFxuXFxyXFxuICA4NSV7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuQGtleWZyYW1lcyBmYWRlIHtcXHJcXG4gIDAle1xcclxcbiAgICBjb2xvcjogI2Y3ZjdmNztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIDg1JXtcXHJcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4vKiBQYXJhZ3JhcGggKi9cXHJcXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZS1idXR0b24ge1xcclxcbiAgMCV7XFxyXFxuICAgIGNvbG9yOiAgdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxyXFxuICAgIGJvcmRlcjogM3B4IHNvbGlkICNmN2Y3Zjc7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMCAxcHggIzc1N2Y4NWIzO1xcclxcbiAgfVxcclxcblxcclxcbiAgODUle1xcclxcbiAgICBjb2xvcjogI2Y3ZjdmNztcXHJcXG4gICAgYm9yZGVyOiAzcHggc29saWQgIHZhcigtLXByaW1hcnktY29sb3IpO1xcclxcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4ICM3NTdmODViMztcXHJcXG4gIH1cXHJcXG59XFxyXFxuQGtleWZyYW1lcyBmYWRlLWJ1dHRvbiB7XFxyXFxuICAwJXtcXHJcXG4gICAgY29sb3I6ICB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXHJcXG4gICAgYm9yZGVyOiAzcHggc29saWQgI2Y3ZjdmNztcXHJcXG4gICAgYm94LXNoYWRvdzogMCAwIDFweCAjNzU3Zjg1YjM7XFxyXFxuICB9XFxyXFxuXFxyXFxuICA4NSV7XFxyXFxuICAgIGNvbG9yOiAjZjdmN2Y3O1xcclxcbiAgICBib3JkZXI6IDNweCBzb2xpZCAgdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMCAxcHggIzc1N2Y4NWIzO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4vKiBQYXJhZ3JhcGggKi9cXHJcXG5ALXdlYmtpdC1rZXlmcmFtZXMgcGFyYSB7XFxyXFxuMCV7XFxyXFxuICBvcGFjaXR5OiAwO1xcclxcbn1cXHJcXG40NSV7XFxyXFxuICBvcGFjaXR5OjA7XFxyXFxufVxcclxcbjg1JXtcXHJcXG4gIG9wYWNpdHk6IDE7XFxyXFxufVxcclxcblxcclxcbn1cXHJcXG5Aa2V5ZnJhbWVzIHBhcmEge1xcclxcbjAle1xcclxcbiAgb3BhY2l0eTogMDtcXHJcXG59XFxyXFxuNDUle1xcclxcbiAgb3BhY2l0eTowO1xcclxcbn1cXHJcXG44NSV7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbn1cXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuQC13ZWJraXQta2V5ZnJhbWVzIHNvY2lhbCB7XFxyXFxuICAwJXtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMXB4KTtcXHJcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMXB4KTtcXHJcXG4gIH1cXHJcXG4gIDMwJXtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNHB4KTtcXHJcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNHB4KTtcXHJcXG4gIH1cXHJcXG4gIDg1JXtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNnB4KTtcXHJcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNnB4KTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBzb2NpYWwge1xcclxcbiAgMCV7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTFweCk7XFxyXFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTFweCk7XFxyXFxuICB9XFxyXFxuICAzMCV7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTRweCk7XFxyXFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTRweCk7XFxyXFxuICB9XFxyXFxuICA4NSV7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTZweCk7XFxyXFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTZweCk7XFxyXFxuICB9XFxyXFxufVxcclxcbkAtd2Via2l0LWtleWZyYW1lcyBzY2FsZSB7XFxyXFxuICAwJXtcXHJcXG4gICAgXFxyXFxuICB9XFxyXFxuICAzMCV7XFxyXFxuICBcXHJcXG4gIH1cXHJcXG4gIDg1JXtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMDcpO1xcclxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNyk7XFxyXFxuICB9XFxyXFxufVxcclxcbkBrZXlmcmFtZXMgc2NhbGUge1xcclxcbiAgMCV7XFxyXFxuICAgIFxcclxcbiAgfVxcclxcbiAgMzAle1xcclxcbiAgXFxyXFxuICB9XFxyXFxuICA4NSV7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjA3KTtcXHJcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDcpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3R5bGUvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFDQTtJQUNJLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsb0JBQW9CO0lBQ3BCLHFCQUFxQjtJQUNyQixvQkFBb0I7SUFDcEIscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsd0JBQXdCO0VBQzFCOzs7QUFHRjtJQUNJ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O0FBVkE7RUFDRTs7RUFFQTtFQUNBOztFQUVBO0VBQ0E7SUFDRSw4QkFBc0I7WUFBdEIsc0JBQXNCO0VBQ3hCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxyXFxuOnJvb3Qge1xcclxcbiAgICAtLWRhcms6ICMzNDNhNDA7XFxyXFxuICAgIC0tbGlnaHQtZGFyazogIzRhNTE1NztcXHJcXG4gICAgLS10ZXh0LWNvbG9yOiNmOGY5ZmE7XFxyXFxuICAgIC0tZGFyay1jb2xvcjogIzIxMjUyOTtcXHJcXG4gICAgLS1kaWYtY29sb3I6ICM2MkNCRTc7XFxyXFxuICAgIC0tbG9nby1jb2xvcjogIzE2MTYxNjtcXHJcXG4gICAgLS1saWdodC1jb2xvcjogI0Y3RkZGNztcXHJcXG4gICAgLS1kYW5nZXItY29sb3I6ICNkYzM1NDU7XFxyXFxuICAgIC0tc3VjY2Vzcy1jb2xvcjogIzI4YTc0NTtcXHJcXG4gIH1cXHJcXG5cXHJcXG5cXHJcXG4qIHtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICBib2R5IHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcclxcbiAgICBmb250LXNpemU6IGNhbGMoMTBweCArIDF2dyk7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAgIGNvbG9yOiByZ2IoMzEsIDMxLCAzMSk7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIGEge1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIHVsIHtcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgaW1nIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICB9XFxyXFxuICAvKiBGT05ULVNJWkUgU0NIRU1FXFxyXFxuXFxyXFxuICBmb250LXNpemUxOiBjYWxjKDI1cHggKyAzdncpO1xcclxcbiAgZm9udC1zaXplMTogY2FsYygyNXB4ICsgM3Z3KTtcXHJcXG4gIGZvbnQtc2l6ZTE6IGNhbGMoMjVweCArIDN2dyk7XFxyXFxuXFxyXFxuICBmb250LXdlaWdodDE6IDE1MDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiAxNTA7XFxyXFxuICBmb250LXdlaWdodDogMTUwO1xcclxcbiAgKi9cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKiBVdGlsaXRpZXMgKi9cXHJcXG4ubGFyZ2UsIC5sYXJnZS1uYW1lLCAubGFyZ2Utc2tpbGwsIC5sYXJnZS1hYm91dHtcXHJcXG4gIGZvbnQtc2l6ZTogY2FsYygyNXB4ICsgM3Z3KTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgbGluZS1oZWlnaHQ6IDE7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubGFyZ2U6OmZpcnN0LWxldHRlciB7XFxyXFxuICBjb2xvcjogdmFyKC0tZGlmLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuICAvKiBPdmVybGF5ICovXFxyXFxuLmRhcmstb3ZlcmxheSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDU5LCAzNiwgMTYsIDAuMjA1KTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWVwYWdlIHtcXHJcXG4gIG1heC13aWR0aDogMTAwJTtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi8qIExvZ28gKi9cXHJcXG5cXHJcXG4ubG9nb3tcXHJcXG4gIGZvbnQtc2l6ZTogMXZ3O1xcclxcbiAgbGluZS1oZWlnaHQ6IDkwcHg7XFxyXFxufVxcclxcbi5yb2JlcnQtbG9nb3tcXHJcXG4gIHdpZHRoOiAzLjVyZW07XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxuICBwYWRkaW5nOiA4cHg7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMTNweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNjE2MTY7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIEFuaW1hdGlvbiAqL1xcclxcblxcclxcbkBrZXlmcmFtZXMgdGV4dCB7XFxyXFxuICAwJXtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAtMzBweDtcXHJcXG4gIH1cXHJcXG4gIDMwJXtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDI1cHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IC0zMHB4O1xcclxcbiAgfVxcclxcbiAgODUle1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogOHB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAtMzBweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBsb2dve1xcclxcblxcclxcbiAgZnJvbSB7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDMxLjAyZGVnKTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgdG8ge1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGZhZGUge1xcclxcbiAgMCV7XFxyXFxuICAgIGNvbG9yOiAjZjdmN2Y3O1xcclxcbiAgfVxcclxcblxcclxcbiAgODUle1xcclxcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi8qIFBhcmFncmFwaCAqL1xcclxcbkBrZXlmcmFtZXMgZmFkZS1idXR0b24ge1xcclxcbiAgMCV7XFxyXFxuICAgIGNvbG9yOiAgdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxyXFxuICAgIGJvcmRlcjogM3B4IHNvbGlkICNmN2Y3Zjc7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMCAxcHggIzc1N2Y4NWIzO1xcclxcbiAgfVxcclxcblxcclxcbiAgODUle1xcclxcbiAgICBjb2xvcjogI2Y3ZjdmNztcXHJcXG4gICAgYm9yZGVyOiAzcHggc29saWQgIHZhcigtLXByaW1hcnktY29sb3IpO1xcclxcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4ICM3NTdmODViMztcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLyogUGFyYWdyYXBoICovXFxyXFxuQGtleWZyYW1lcyBwYXJhIHtcXHJcXG4wJXtcXHJcXG4gIG9wYWNpdHk6IDA7XFxyXFxufVxcclxcbjQ1JXtcXHJcXG4gIG9wYWNpdHk6MDtcXHJcXG59XFxyXFxuODUle1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG59XFxyXFxuXFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgc29jaWFsIHtcXHJcXG4gIDAle1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMXB4KTtcXHJcXG4gIH1cXHJcXG4gIDMwJXtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTRweCk7XFxyXFxuICB9XFxyXFxuICA4NSV7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC02cHgpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5Aa2V5ZnJhbWVzIHNjYWxlIHtcXHJcXG4gIDAle1xcclxcbiAgICBcXHJcXG4gIH1cXHJcXG4gIDMwJXtcXHJcXG4gIFxcclxcbiAgfVxcclxcbiAgODUle1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDcpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==