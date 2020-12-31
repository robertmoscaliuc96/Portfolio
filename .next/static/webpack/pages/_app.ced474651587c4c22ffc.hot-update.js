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
___CSS_LOADER_EXPORT___.push([module.i, "\r\n:root {\r\n    --dark: #343a40;\r\n    --light-dark: #4a5157;\r\n    --text-color:#f8f9fa;\r\n    --dark-color: #212529;\r\n    --dif-color: #62CBE7;\r\n    --logo-color: #161616;\r\n    --light-color: #F7FFF7;\r\n    --danger-color: #dc3545;\r\n    --success-color: #28a745;\r\n  }\r\n\r\n\r\n* {\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    padding: 0;\r\n  }\r\n  \r\n  body {\r\n    font-family: 'Roboto', sans-serif;\r\n    font-size: calc(10px + 1vw);\r\n    line-height: 1.6;\r\n    background-color: #fff;\r\n    color: rgb(31, 31, 31);\r\n  }\r\n  \r\n  a {\r\n    text-decoration: none;\r\n  }\r\n  \r\n  ul {\r\n    list-style: none;\r\n  }\r\n  \r\n  img {\r\n    width: 100%;\r\n  }\r\n  /* FONT-SIZE SCHEME\r\n\r\n  font-size1: calc(25px + 3vw);\r\n  font-size2: calc(25px + 3vw);\r\n  font-size3: calc(25px + 3vw);\r\n\r\n  font-weight1: 150;\r\n  font-weight2: 150;\r\n  font-weight3: 150;\r\n\r\n  margin-top1: ;\r\n  margin-top1: ;\r\n  */\r\n\r\n\r\n\r\n\r\n\r\n/* Utilities */\r\n.large, .large-name, .large-skill, .large-about{\r\n  font-size: calc(25px + 3vw);\r\n  font-weight: bold;\r\n  line-height: 1;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.large::first-letter {\r\n  color: var(--dif-color);\r\n}\r\n\r\n\r\n  /* Overlay */\r\n.dark-overlay {\r\n  background-color: rgba(59, 36, 16, 0.205);\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.homepage {\r\n  max-width: 100%;\r\n  margin: auto;\r\n  overflow: hidden;\r\n}\r\n\r\n/* Logo */\r\n\r\n.logo{\r\n  font-size: 1vw;\r\n  line-height: 90px;\r\n}\r\n.robert-logo{\r\n  width: 3.5rem;\r\n  height: auto;\r\n  padding: 8px;\r\n  padding-bottom: 13px;\r\n  background-color: #161616;\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n/* Animation */\r\n\r\n@-webkit-keyframes text {\r\n  0%{\r\n    color: black;\r\n    margin-bottom: -30px;\r\n  }\r\n  30%{\r\n    letter-spacing: 25px;\r\n    margin-bottom: -30px;\r\n  }\r\n  85%{\r\n    letter-spacing: 8px;\r\n    margin-bottom: -30px;\r\n  }\r\n}\r\n\r\n@keyframes text {\r\n  0%{\r\n    color: black;\r\n    margin-bottom: -30px;\r\n  }\r\n  30%{\r\n    letter-spacing: 25px;\r\n    margin-bottom: -30px;\r\n  }\r\n  85%{\r\n    letter-spacing: 8px;\r\n    margin-bottom: -30px;\r\n  }\r\n}\r\n\r\n@-webkit-keyframes logo{\r\n\r\n  from {\r\n    opacity: 0;\r\n    -webkit-transform: rotate(31.02deg);\r\n            transform: rotate(31.02deg);\r\n  }\r\n  \r\n  to {\r\n    opacity: 1;\r\n    -webkit-transform: rotate(0deg);\r\n            transform: rotate(0deg);\r\n  }\r\n  \r\n}\r\n\r\n@keyframes logo{\r\n\r\n  from {\r\n    opacity: 0;\r\n    -webkit-transform: rotate(31.02deg);\r\n            transform: rotate(31.02deg);\r\n  }\r\n  \r\n  to {\r\n    opacity: 1;\r\n    -webkit-transform: rotate(0deg);\r\n            transform: rotate(0deg);\r\n  }\r\n  \r\n}\r\n\r\n\r\n@-webkit-keyframes fade {\r\n  0%{\r\n    color: #f7f7f7;\r\n  }\r\n\r\n  85%{\r\n    color: var(--primary-color);\r\n  }\r\n}\r\n\r\n\r\n@keyframes fade {\r\n  0%{\r\n    color: #f7f7f7;\r\n  }\r\n\r\n  85%{\r\n    color: var(--primary-color);\r\n  }\r\n}\r\n\r\n/* Paragraph */\r\n@-webkit-keyframes fade-button {\r\n  0%{\r\n    color:  var(--primary-color);\r\n    border: 3px solid #f7f7f7;\r\n    box-shadow: 0 0 1px #757f85b3;\r\n  }\r\n\r\n  85%{\r\n    color: #f7f7f7;\r\n    border: 3px solid  var(--primary-color);\r\n    box-shadow: 0 0 1px #757f85b3;\r\n  }\r\n}\r\n@keyframes fade-button {\r\n  0%{\r\n    color:  var(--primary-color);\r\n    border: 3px solid #f7f7f7;\r\n    box-shadow: 0 0 1px #757f85b3;\r\n  }\r\n\r\n  85%{\r\n    color: #f7f7f7;\r\n    border: 3px solid  var(--primary-color);\r\n    box-shadow: 0 0 1px #757f85b3;\r\n  }\r\n}\r\n\r\n/* Paragraph */\r\n@-webkit-keyframes para {\r\n0%{\r\n  opacity: 0;\r\n}\r\n45%{\r\n  opacity:0;\r\n}\r\n85%{\r\n  opacity: 1;\r\n}\r\n\r\n}\r\n@keyframes para {\r\n0%{\r\n  opacity: 0;\r\n}\r\n45%{\r\n  opacity:0;\r\n}\r\n85%{\r\n  opacity: 1;\r\n}\r\n\r\n}\r\n\r\n@-webkit-keyframes social {\r\n  0%{\r\n    -webkit-transform: translate(0, -1px);\r\n            transform: translate(0, -1px);\r\n  }\r\n  30%{\r\n    -webkit-transform: translate(0, -4px);\r\n            transform: translate(0, -4px);\r\n  }\r\n  85%{\r\n    -webkit-transform: translate(0, -6px);\r\n            transform: translate(0, -6px);\r\n  }\r\n}\r\n\r\n@keyframes social {\r\n  0%{\r\n    -webkit-transform: translate(0, -1px);\r\n            transform: translate(0, -1px);\r\n  }\r\n  30%{\r\n    -webkit-transform: translate(0, -4px);\r\n            transform: translate(0, -4px);\r\n  }\r\n  85%{\r\n    -webkit-transform: translate(0, -6px);\r\n            transform: translate(0, -6px);\r\n  }\r\n}\r\n@-webkit-keyframes scale {\r\n  0%{\r\n    \r\n  }\r\n  30%{\r\n  \r\n  }\r\n  85%{\r\n    -webkit-transform: scale(1.07);\r\n            transform: scale(1.07);\r\n  }\r\n}\r\n@keyframes scale {\r\n  0%{\r\n    \r\n  }\r\n  30%{\r\n  \r\n  }\r\n  85%{\r\n    -webkit-transform: scale(1.07);\r\n            transform: scale(1.07);\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://style/index.css"],"names":[],"mappings":"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","sourcesContent":["\r\n:root {\r\n    --dark: #343a40;\r\n    --light-dark: #4a5157;\r\n    --text-color:#f8f9fa;\r\n    --dark-color: #212529;\r\n    --dif-color: #62CBE7;\r\n    --logo-color: #161616;\r\n    --light-color: #F7FFF7;\r\n    --danger-color: #dc3545;\r\n    --success-color: #28a745;\r\n  }\r\n\r\n\r\n* {\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    padding: 0;\r\n  }\r\n  \r\n  body {\r\n    font-family: 'Roboto', sans-serif;\r\n    font-size: calc(10px + 1vw);\r\n    line-height: 1.6;\r\n    background-color: #fff;\r\n    color: rgb(31, 31, 31);\r\n  }\r\n  \r\n  a {\r\n    text-decoration: none;\r\n  }\r\n  \r\n  ul {\r\n    list-style: none;\r\n  }\r\n  \r\n  img {\r\n    width: 100%;\r\n  }\r\n  /* FONT-SIZE SCHEME\r\n\r\n  font-size1: calc(25px + 3vw);\r\n  font-size2: calc(25px + 3vw);\r\n  font-size3: calc(25px + 3vw);\r\n\r\n  font-weight1: 150;\r\n  font-weight2: 150;\r\n  font-weight3: 150;\r\n\r\n  margin-top1: ;\r\n  margin-top1: ;\r\n  */\r\n\r\n\r\n\r\n\r\n\r\n/* Utilities */\r\n.large, .large-name, .large-skill, .large-about{\r\n  font-size: calc(25px + 3vw);\r\n  font-weight: bold;\r\n  line-height: 1;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.large::first-letter {\r\n  color: var(--dif-color);\r\n}\r\n\r\n\r\n  /* Overlay */\r\n.dark-overlay {\r\n  background-color: rgba(59, 36, 16, 0.205);\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.homepage {\r\n  max-width: 100%;\r\n  margin: auto;\r\n  overflow: hidden;\r\n}\r\n\r\n/* Logo */\r\n\r\n.logo{\r\n  font-size: 1vw;\r\n  line-height: 90px;\r\n}\r\n.robert-logo{\r\n  width: 3.5rem;\r\n  height: auto;\r\n  padding: 8px;\r\n  padding-bottom: 13px;\r\n  background-color: #161616;\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n/* Animation */\r\n\r\n@keyframes text {\r\n  0%{\r\n    color: black;\r\n    margin-bottom: -30px;\r\n  }\r\n  30%{\r\n    letter-spacing: 25px;\r\n    margin-bottom: -30px;\r\n  }\r\n  85%{\r\n    letter-spacing: 8px;\r\n    margin-bottom: -30px;\r\n  }\r\n}\r\n\r\n@keyframes logo{\r\n\r\n  from {\r\n    opacity: 0;\r\n    transform: rotate(31.02deg);\r\n  }\r\n  \r\n  to {\r\n    opacity: 1;\r\n    transform: rotate(0deg);\r\n  }\r\n  \r\n}\r\n\r\n\r\n@keyframes fade {\r\n  0%{\r\n    color: #f7f7f7;\r\n  }\r\n\r\n  85%{\r\n    color: var(--primary-color);\r\n  }\r\n}\r\n\r\n/* Paragraph */\r\n@keyframes fade-button {\r\n  0%{\r\n    color:  var(--primary-color);\r\n    border: 3px solid #f7f7f7;\r\n    box-shadow: 0 0 1px #757f85b3;\r\n  }\r\n\r\n  85%{\r\n    color: #f7f7f7;\r\n    border: 3px solid  var(--primary-color);\r\n    box-shadow: 0 0 1px #757f85b3;\r\n  }\r\n}\r\n\r\n/* Paragraph */\r\n@keyframes para {\r\n0%{\r\n  opacity: 0;\r\n}\r\n45%{\r\n  opacity:0;\r\n}\r\n85%{\r\n  opacity: 1;\r\n}\r\n\r\n}\r\n\r\n@keyframes social {\r\n  0%{\r\n    transform: translate(0, -1px);\r\n  }\r\n  30%{\r\n    transform: translate(0, -4px);\r\n  }\r\n  85%{\r\n    transform: translate(0, -6px);\r\n  }\r\n}\r\n@keyframes scale {\r\n  0%{\r\n    \r\n  }\r\n  30%{\r\n  \r\n  }\r\n  85%{\r\n    transform: scale(1.07);\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGUvaW5kZXguY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUN5RjtBQUN6Riw4QkFBOEIsbUZBQTJCO0FBQ3pEO0FBQ0EsOEJBQThCLFFBQVMsY0FBYyx3QkFBd0IsOEJBQThCLDZCQUE2Qiw4QkFBOEIsNkJBQTZCLDhCQUE4QiwrQkFBK0IsZ0NBQWdDLGlDQUFpQyxPQUFPLGVBQWUsK0JBQStCLGtCQUFrQixtQkFBbUIsT0FBTyxrQkFBa0IsMENBQTBDLG9DQUFvQyx5QkFBeUIsK0JBQStCLCtCQUErQixPQUFPLGVBQWUsOEJBQThCLE9BQU8sZ0JBQWdCLHlCQUF5QixPQUFPLGlCQUFpQixvQkFBb0IsT0FBTyxnRUFBZ0UsbUNBQW1DLG1DQUFtQyw0QkFBNEIsd0JBQXdCLHdCQUF3Qix3QkFBd0Isb0JBQW9CLG1HQUFtRyxrQ0FBa0Msd0JBQXdCLHFCQUFxQiwwQkFBMEIsS0FBSyw4QkFBOEIsOEJBQThCLEtBQUssOENBQThDLGdEQUFnRCx5QkFBeUIsYUFBYSxjQUFjLGtCQUFrQixtQkFBbUIsS0FBSyxtQkFBbUIsc0JBQXNCLG1CQUFtQix1QkFBdUIsS0FBSyxnQ0FBZ0MscUJBQXFCLHdCQUF3QixLQUFLLGlCQUFpQixvQkFBb0IsbUJBQW1CLG1CQUFtQiwyQkFBMkIsZ0NBQWdDLHNCQUFzQixLQUFLLDREQUE0RCxTQUFTLHFCQUFxQiw2QkFBNkIsT0FBTyxVQUFVLDZCQUE2Qiw2QkFBNkIsT0FBTyxVQUFVLDRCQUE0Qiw2QkFBNkIsT0FBTyxLQUFLLHlCQUF5QixTQUFTLHFCQUFxQiw2QkFBNkIsT0FBTyxVQUFVLDZCQUE2Qiw2QkFBNkIsT0FBTyxVQUFVLDRCQUE0Qiw2QkFBNkIsT0FBTyxLQUFLLGdDQUFnQyxnQkFBZ0IsbUJBQW1CLDRDQUE0Qyw0Q0FBNEMsT0FBTyxnQkFBZ0IsbUJBQW1CLHdDQUF3Qyx3Q0FBd0MsT0FBTyxXQUFXLHdCQUF3QixnQkFBZ0IsbUJBQW1CLDRDQUE0Qyw0Q0FBNEMsT0FBTyxnQkFBZ0IsbUJBQW1CLHdDQUF3Qyx3Q0FBd0MsT0FBTyxXQUFXLHFDQUFxQyxTQUFTLHVCQUF1QixPQUFPLGNBQWMsb0NBQW9DLE9BQU8sS0FBSyw2QkFBNkIsU0FBUyx1QkFBdUIsT0FBTyxjQUFjLG9DQUFvQyxPQUFPLEtBQUssMkRBQTJELFNBQVMscUNBQXFDLGtDQUFrQyxzQ0FBc0MsT0FBTyxjQUFjLHVCQUF1QixnREFBZ0Qsc0NBQXNDLE9BQU8sS0FBSyw0QkFBNEIsU0FBUyxxQ0FBcUMsa0NBQWtDLHNDQUFzQyxPQUFPLGNBQWMsdUJBQXVCLGdEQUFnRCxzQ0FBc0MsT0FBTyxLQUFLLG9EQUFvRCxPQUFPLGlCQUFpQixLQUFLLFFBQVEsZ0JBQWdCLEtBQUssUUFBUSxpQkFBaUIsS0FBSyxTQUFTLHFCQUFxQixPQUFPLGlCQUFpQixLQUFLLFFBQVEsZ0JBQWdCLEtBQUssUUFBUSxpQkFBaUIsS0FBSyxTQUFTLG1DQUFtQyxTQUFTLDhDQUE4Qyw4Q0FBOEMsT0FBTyxVQUFVLDhDQUE4Qyw4Q0FBOEMsT0FBTyxVQUFVLDhDQUE4Qyw4Q0FBOEMsT0FBTyxLQUFLLDJCQUEyQixTQUFTLDhDQUE4Qyw4Q0FBOEMsT0FBTyxVQUFVLDhDQUE4Qyw4Q0FBOEMsT0FBTyxVQUFVLDhDQUE4Qyw4Q0FBOEMsT0FBTyxLQUFLLDhCQUE4QixTQUFTLGVBQWUsVUFBVSxhQUFhLFVBQVUsdUNBQXVDLHVDQUF1QyxPQUFPLEtBQUssc0JBQXNCLFNBQVMsZUFBZSxVQUFVLGFBQWEsVUFBVSx1Q0FBdUMsdUNBQXVDLE9BQU8sS0FBSyxXQUFXLDRFQUE0RSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFFBQVEsS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLEtBQUssZ0JBQWdCLFVBQVUsVUFBVSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksUUFBUSxVQUFVLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sV0FBVyxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsUUFBUSxXQUFXLEtBQUssS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sTUFBTSxLQUFLLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLE9BQU8sS0FBSyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksTUFBTSxPQUFPLEtBQUssS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE1BQU0sTUFBTSxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxNQUFNLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLE1BQU0sTUFBTSxLQUFLLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLE1BQU0sS0FBSyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLEtBQUssTUFBTSxLQUFLLE1BQU0sS0FBSyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssS0FBSyxNQUFNLEtBQUssTUFBTSxLQUFLLEtBQUssWUFBWSxhQUFhLE1BQU0sb0NBQW9DLHdCQUF3Qiw4QkFBOEIsNkJBQTZCLDhCQUE4Qiw2QkFBNkIsOEJBQThCLCtCQUErQixnQ0FBZ0MsaUNBQWlDLE9BQU8sZUFBZSwrQkFBK0Isa0JBQWtCLG1CQUFtQixPQUFPLGtCQUFrQiwwQ0FBMEMsb0NBQW9DLHlCQUF5QiwrQkFBK0IsK0JBQStCLE9BQU8sZUFBZSw4QkFBOEIsT0FBTyxnQkFBZ0IseUJBQXlCLE9BQU8saUJBQWlCLG9CQUFvQixPQUFPLGdFQUFnRSxtQ0FBbUMsbUNBQW1DLDRCQUE0Qix3QkFBd0Isd0JBQXdCLHdCQUF3QixvQkFBb0IsbUdBQW1HLGtDQUFrQyx3QkFBd0IscUJBQXFCLDBCQUEwQixLQUFLLDhCQUE4Qiw4QkFBOEIsS0FBSyw4Q0FBOEMsZ0RBQWdELHlCQUF5QixhQUFhLGNBQWMsa0JBQWtCLG1CQUFtQixLQUFLLG1CQUFtQixzQkFBc0IsbUJBQW1CLHVCQUF1QixLQUFLLGdDQUFnQyxxQkFBcUIsd0JBQXdCLEtBQUssaUJBQWlCLG9CQUFvQixtQkFBbUIsbUJBQW1CLDJCQUEyQixnQ0FBZ0Msc0JBQXNCLEtBQUssb0RBQW9ELFNBQVMscUJBQXFCLDZCQUE2QixPQUFPLFVBQVUsNkJBQTZCLDZCQUE2QixPQUFPLFVBQVUsNEJBQTRCLDZCQUE2QixPQUFPLEtBQUssd0JBQXdCLGdCQUFnQixtQkFBbUIsb0NBQW9DLE9BQU8sZ0JBQWdCLG1CQUFtQixnQ0FBZ0MsT0FBTyxXQUFXLDZCQUE2QixTQUFTLHVCQUF1QixPQUFPLGNBQWMsb0NBQW9DLE9BQU8sS0FBSyxtREFBbUQsU0FBUyxxQ0FBcUMsa0NBQWtDLHNDQUFzQyxPQUFPLGNBQWMsdUJBQXVCLGdEQUFnRCxzQ0FBc0MsT0FBTyxLQUFLLDRDQUE0QyxPQUFPLGlCQUFpQixLQUFLLFFBQVEsZ0JBQWdCLEtBQUssUUFBUSxpQkFBaUIsS0FBSyxTQUFTLDJCQUEyQixTQUFTLHNDQUFzQyxPQUFPLFVBQVUsc0NBQXNDLE9BQU8sVUFBVSxzQ0FBc0MsT0FBTyxLQUFLLHNCQUFzQixTQUFTLGVBQWUsVUFBVSxhQUFhLFVBQVUsK0JBQStCLE9BQU8sS0FBSyx1QkFBdUI7QUFDbm9VO0FBQ2Usc0ZBQXVCLEVBQUMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5jZWQ0NzQ2NTE1ODdjNGMyMmZmYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxyXFxuOnJvb3Qge1xcclxcbiAgICAtLWRhcms6ICMzNDNhNDA7XFxyXFxuICAgIC0tbGlnaHQtZGFyazogIzRhNTE1NztcXHJcXG4gICAgLS10ZXh0LWNvbG9yOiNmOGY5ZmE7XFxyXFxuICAgIC0tZGFyay1jb2xvcjogIzIxMjUyOTtcXHJcXG4gICAgLS1kaWYtY29sb3I6ICM2MkNCRTc7XFxyXFxuICAgIC0tbG9nby1jb2xvcjogIzE2MTYxNjtcXHJcXG4gICAgLS1saWdodC1jb2xvcjogI0Y3RkZGNztcXHJcXG4gICAgLS1kYW5nZXItY29sb3I6ICNkYzM1NDU7XFxyXFxuICAgIC0tc3VjY2Vzcy1jb2xvcjogIzI4YTc0NTtcXHJcXG4gIH1cXHJcXG5cXHJcXG5cXHJcXG4qIHtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICBib2R5IHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcclxcbiAgICBmb250LXNpemU6IGNhbGMoMTBweCArIDF2dyk7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAgIGNvbG9yOiByZ2IoMzEsIDMxLCAzMSk7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIGEge1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIHVsIHtcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgaW1nIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICB9XFxyXFxuICAvKiBGT05ULVNJWkUgU0NIRU1FXFxyXFxuXFxyXFxuICBmb250LXNpemUxOiBjYWxjKDI1cHggKyAzdncpO1xcclxcbiAgZm9udC1zaXplMjogY2FsYygyNXB4ICsgM3Z3KTtcXHJcXG4gIGZvbnQtc2l6ZTM6IGNhbGMoMjVweCArIDN2dyk7XFxyXFxuXFxyXFxuICBmb250LXdlaWdodDE6IDE1MDtcXHJcXG4gIGZvbnQtd2VpZ2h0MjogMTUwO1xcclxcbiAgZm9udC13ZWlnaHQzOiAxNTA7XFxyXFxuXFxyXFxuICBtYXJnaW4tdG9wMTogO1xcclxcbiAgbWFyZ2luLXRvcDE6IDtcXHJcXG4gICovXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLyogVXRpbGl0aWVzICovXFxyXFxuLmxhcmdlLCAubGFyZ2UtbmFtZSwgLmxhcmdlLXNraWxsLCAubGFyZ2UtYWJvdXR7XFxyXFxuICBmb250LXNpemU6IGNhbGMoMjVweCArIDN2dyk7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmxhcmdlOjpmaXJzdC1sZXR0ZXIge1xcclxcbiAgY29sb3I6IHZhcigtLWRpZi1jb2xvcik7XFxyXFxufVxcclxcblxcclxcblxcclxcbiAgLyogT3ZlcmxheSAqL1xcclxcbi5kYXJrLW92ZXJsYXkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg1OSwgMzYsIDE2LCAwLjIwNSk7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5ob21lcGFnZSB7XFxyXFxuICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBMb2dvICovXFxyXFxuXFxyXFxuLmxvZ297XFxyXFxuICBmb250LXNpemU6IDF2dztcXHJcXG4gIGxpbmUtaGVpZ2h0OiA5MHB4O1xcclxcbn1cXHJcXG4ucm9iZXJ0LWxvZ297XFxyXFxuICB3aWR0aDogMy41cmVtO1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgcGFkZGluZzogOHB4O1xcclxcbiAgcGFkZGluZy1ib3R0b206IDEzcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTYxNjE2O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiBBbmltYXRpb24gKi9cXHJcXG5cXHJcXG5ALXdlYmtpdC1rZXlmcmFtZXMgdGV4dCB7XFxyXFxuICAwJXtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAtMzBweDtcXHJcXG4gIH1cXHJcXG4gIDMwJXtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDI1cHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IC0zMHB4O1xcclxcbiAgfVxcclxcbiAgODUle1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogOHB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAtMzBweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyB0ZXh0IHtcXHJcXG4gIDAle1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IC0zMHB4O1xcclxcbiAgfVxcclxcbiAgMzAle1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMjVweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogLTMwcHg7XFxyXFxuICB9XFxyXFxuICA4NSV7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiA4cHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IC0zMHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5ALXdlYmtpdC1rZXlmcmFtZXMgbG9nb3tcXHJcXG5cXHJcXG4gIGZyb20ge1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDMxLjAyZGVnKTtcXHJcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzMS4wMmRlZyk7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIHRvIHtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXHJcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGxvZ297XFxyXFxuXFxyXFxuICBmcm9tIHtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzMS4wMmRlZyk7XFxyXFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzEuMDJkZWcpO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICB0byB7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxyXFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxyXFxuICB9XFxyXFxuICBcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGUge1xcclxcbiAgMCV7XFxyXFxuICAgIGNvbG9yOiAjZjdmN2Y3O1xcclxcbiAgfVxcclxcblxcclxcbiAgODUle1xcclxcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcblxcclxcbkBrZXlmcmFtZXMgZmFkZSB7XFxyXFxuICAwJXtcXHJcXG4gICAgY29sb3I6ICNmN2Y3Zjc7XFxyXFxuICB9XFxyXFxuXFxyXFxuICA4NSV7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLyogUGFyYWdyYXBoICovXFxyXFxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGUtYnV0dG9uIHtcXHJcXG4gIDAle1xcclxcbiAgICBjb2xvcjogIHZhcigtLXByaW1hcnktY29sb3IpO1xcclxcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjZjdmN2Y3O1xcclxcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4ICM3NTdmODViMztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIDg1JXtcXHJcXG4gICAgY29sb3I6ICNmN2Y3Zjc7XFxyXFxuICAgIGJvcmRlcjogM3B4IHNvbGlkICB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAwIDFweCAjNzU3Zjg1YjM7XFxyXFxuICB9XFxyXFxufVxcclxcbkBrZXlmcmFtZXMgZmFkZS1idXR0b24ge1xcclxcbiAgMCV7XFxyXFxuICAgIGNvbG9yOiAgdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxyXFxuICAgIGJvcmRlcjogM3B4IHNvbGlkICNmN2Y3Zjc7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMCAxcHggIzc1N2Y4NWIzO1xcclxcbiAgfVxcclxcblxcclxcbiAgODUle1xcclxcbiAgICBjb2xvcjogI2Y3ZjdmNztcXHJcXG4gICAgYm9yZGVyOiAzcHggc29saWQgIHZhcigtLXByaW1hcnktY29sb3IpO1xcclxcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4ICM3NTdmODViMztcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLyogUGFyYWdyYXBoICovXFxyXFxuQC13ZWJraXQta2V5ZnJhbWVzIHBhcmEge1xcclxcbjAle1xcclxcbiAgb3BhY2l0eTogMDtcXHJcXG59XFxyXFxuNDUle1xcclxcbiAgb3BhY2l0eTowO1xcclxcbn1cXHJcXG44NSV7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbn1cXHJcXG5cXHJcXG59XFxyXFxuQGtleWZyYW1lcyBwYXJhIHtcXHJcXG4wJXtcXHJcXG4gIG9wYWNpdHk6IDA7XFxyXFxufVxcclxcbjQ1JXtcXHJcXG4gIG9wYWNpdHk6MDtcXHJcXG59XFxyXFxuODUle1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG59XFxyXFxuXFxyXFxufVxcclxcblxcclxcbkAtd2Via2l0LWtleWZyYW1lcyBzb2NpYWwge1xcclxcbiAgMCV7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTFweCk7XFxyXFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTFweCk7XFxyXFxuICB9XFxyXFxuICAzMCV7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTRweCk7XFxyXFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTRweCk7XFxyXFxuICB9XFxyXFxuICA4NSV7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTZweCk7XFxyXFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTZweCk7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgc29jaWFsIHtcXHJcXG4gIDAle1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0xcHgpO1xcclxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0xcHgpO1xcclxcbiAgfVxcclxcbiAgMzAle1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC00cHgpO1xcclxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC00cHgpO1xcclxcbiAgfVxcclxcbiAgODUle1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC02cHgpO1xcclxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC02cHgpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2NhbGUge1xcclxcbiAgMCV7XFxyXFxuICAgIFxcclxcbiAgfVxcclxcbiAgMzAle1xcclxcbiAgXFxyXFxuICB9XFxyXFxuICA4NSV7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjA3KTtcXHJcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDcpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5Aa2V5ZnJhbWVzIHNjYWxlIHtcXHJcXG4gIDAle1xcclxcbiAgICBcXHJcXG4gIH1cXHJcXG4gIDMwJXtcXHJcXG4gIFxcclxcbiAgfVxcclxcbiAgODUle1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wNyk7XFxyXFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA3KTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3N0eWxlL2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBQ0E7SUFDSSxlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLG9CQUFvQjtJQUNwQixxQkFBcUI7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NkJBQTZCO0VBQy9CO0FBQ0Y7QUFDQTtFQUNFOztFQUVBO0VBQ0E7O0VBRUE7RUFDQTtJQUNFLDhCQUFzQjtZQUF0QixzQkFBc0I7RUFDeEI7QUFDRjtBQVZBO0VBQ0U7O0VBRUE7RUFDQTs7RUFFQTtFQUNBO0lBQ0UsOEJBQXNCO1lBQXRCLHNCQUFzQjtFQUN4QjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcclxcbjpyb290IHtcXHJcXG4gICAgLS1kYXJrOiAjMzQzYTQwO1xcclxcbiAgICAtLWxpZ2h0LWRhcms6ICM0YTUxNTc7XFxyXFxuICAgIC0tdGV4dC1jb2xvcjojZjhmOWZhO1xcclxcbiAgICAtLWRhcmstY29sb3I6ICMyMTI1Mjk7XFxyXFxuICAgIC0tZGlmLWNvbG9yOiAjNjJDQkU3O1xcclxcbiAgICAtLWxvZ28tY29sb3I6ICMxNjE2MTY7XFxyXFxuICAgIC0tbGlnaHQtY29sb3I6ICNGN0ZGRjc7XFxyXFxuICAgIC0tZGFuZ2VyLWNvbG9yOiAjZGMzNTQ1O1xcclxcbiAgICAtLXN1Y2Nlc3MtY29sb3I6ICMyOGE3NDU7XFxyXFxuICB9XFxyXFxuXFxyXFxuXFxyXFxuKiB7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgYm9keSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgZm9udC1zaXplOiBjYWxjKDEwcHggKyAxdncpO1xcclxcbiAgICBsaW5lLWhlaWdodDogMS42O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgICBjb2xvcjogcmdiKDMxLCAzMSwgMzEpO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICBhIHtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICB1bCB7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIGltZyB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgfVxcclxcbiAgLyogRk9OVC1TSVpFIFNDSEVNRVxcclxcblxcclxcbiAgZm9udC1zaXplMTogY2FsYygyNXB4ICsgM3Z3KTtcXHJcXG4gIGZvbnQtc2l6ZTI6IGNhbGMoMjVweCArIDN2dyk7XFxyXFxuICBmb250LXNpemUzOiBjYWxjKDI1cHggKyAzdncpO1xcclxcblxcclxcbiAgZm9udC13ZWlnaHQxOiAxNTA7XFxyXFxuICBmb250LXdlaWdodDI6IDE1MDtcXHJcXG4gIGZvbnQtd2VpZ2h0MzogMTUwO1xcclxcblxcclxcbiAgbWFyZ2luLXRvcDE6IDtcXHJcXG4gIG1hcmdpbi10b3AxOiA7XFxyXFxuICAqL1xcclxcblxcclxcblxcclxcblxcclxcblxcclxcblxcclxcbi8qIFV0aWxpdGllcyAqL1xcclxcbi5sYXJnZSwgLmxhcmdlLW5hbWUsIC5sYXJnZS1za2lsbCwgLmxhcmdlLWFib3V0e1xcclxcbiAgZm9udC1zaXplOiBjYWxjKDI1cHggKyAzdncpO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBsaW5lLWhlaWdodDogMTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5sYXJnZTo6Zmlyc3QtbGV0dGVyIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1kaWYtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4gIC8qIE92ZXJsYXkgKi9cXHJcXG4uZGFyay1vdmVybGF5IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTksIDM2LCAxNiwgMC4yMDUpO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZXBhZ2Uge1xcclxcbiAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLyogTG9nbyAqL1xcclxcblxcclxcbi5sb2dve1xcclxcbiAgZm9udC1zaXplOiAxdnc7XFxyXFxuICBsaW5lLWhlaWdodDogOTBweDtcXHJcXG59XFxyXFxuLnJvYmVydC1sb2dve1xcclxcbiAgd2lkdGg6IDMuNXJlbTtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG4gIHBhZGRpbmc6IDhweDtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAxM3B4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE2MTYxNjtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogQW5pbWF0aW9uICovXFxyXFxuXFxyXFxuQGtleWZyYW1lcyB0ZXh0IHtcXHJcXG4gIDAle1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IC0zMHB4O1xcclxcbiAgfVxcclxcbiAgMzAle1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMjVweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogLTMwcHg7XFxyXFxuICB9XFxyXFxuICA4NSV7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiA4cHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IC0zMHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGxvZ297XFxyXFxuXFxyXFxuICBmcm9tIHtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzEuMDJkZWcpO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICB0byB7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcclxcbiAgfVxcclxcbiAgXFxyXFxufVxcclxcblxcclxcblxcclxcbkBrZXlmcmFtZXMgZmFkZSB7XFxyXFxuICAwJXtcXHJcXG4gICAgY29sb3I6ICNmN2Y3Zjc7XFxyXFxuICB9XFxyXFxuXFxyXFxuICA4NSV7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLyogUGFyYWdyYXBoICovXFxyXFxuQGtleWZyYW1lcyBmYWRlLWJ1dHRvbiB7XFxyXFxuICAwJXtcXHJcXG4gICAgY29sb3I6ICB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXHJcXG4gICAgYm9yZGVyOiAzcHggc29saWQgI2Y3ZjdmNztcXHJcXG4gICAgYm94LXNoYWRvdzogMCAwIDFweCAjNzU3Zjg1YjM7XFxyXFxuICB9XFxyXFxuXFxyXFxuICA4NSV7XFxyXFxuICAgIGNvbG9yOiAjZjdmN2Y3O1xcclxcbiAgICBib3JkZXI6IDNweCBzb2xpZCAgdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMCAxcHggIzc1N2Y4NWIzO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4vKiBQYXJhZ3JhcGggKi9cXHJcXG5Aa2V5ZnJhbWVzIHBhcmEge1xcclxcbjAle1xcclxcbiAgb3BhY2l0eTogMDtcXHJcXG59XFxyXFxuNDUle1xcclxcbiAgb3BhY2l0eTowO1xcclxcbn1cXHJcXG44NSV7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbn1cXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBzb2NpYWwge1xcclxcbiAgMCV7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0xcHgpO1xcclxcbiAgfVxcclxcbiAgMzAle1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNHB4KTtcXHJcXG4gIH1cXHJcXG4gIDg1JXtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTZweCk7XFxyXFxuICB9XFxyXFxufVxcclxcbkBrZXlmcmFtZXMgc2NhbGUge1xcclxcbiAgMCV7XFxyXFxuICAgIFxcclxcbiAgfVxcclxcbiAgMzAle1xcclxcbiAgXFxyXFxuICB9XFxyXFxuICA4NSV7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNyk7XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwic291cmNlUm9vdCI6IiJ9