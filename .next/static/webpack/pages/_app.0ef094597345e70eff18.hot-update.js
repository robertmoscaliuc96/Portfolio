webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./style/skills.css":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./style/skills.css ***!
  \*****************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.i, "\r\n/* Skills */\r\n.skill-image{\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat center top/cover;\r\n    width: 100%;\r\n    height: 100vh;\r\n    }\r\n  \r\n\r\n.skill-inner{\r\n    margin: auto;\r\n    margin-left: 10rem;\r\n    display: grid;\r\n    grid-template-columns: 3fr 2fr;\r\n    grid-gap:3rem;\r\n    -webkit-animation: para 2s 1;\r\n            animation: para 2s 1;\r\n\r\n    \r\n  }\r\n  .language{\r\n    padding-top: 15rem;\r\n  }\r\n  \r\n  .language h1{\r\n    color: var(--text-color);\r\n    font-size: calc(25px + 3vw);\r\n    font-weight: bold;\r\n\r\n  }\r\n  .language h3 {\r\n    color: var(--dif-color);\r\n    font-size: calc(15px + 1vw);\r\n    padding: 10px 0;\r\n  }\r\n  .language p{\r\n    color: var(--text-color);\r\n    font-size: calc(10px + 1vw);\r\n    font-weight: 300;\r\n\r\n  }\r\n  \r\n  .skills{\r\n    margin-top: 15rem;\r\n\r\n  }\r\n  .skill-group{\r\n    display: grid;\r\n    grid-template-columns: 1fr 3fr;\r\n  }\r\n  .skills-info{\r\n    -webkit-justify-content: center;\r\n            justify-content: center;\r\n    -webkit-align-items: center;\r\n            align-items: center;\r\n    font-size: calc(15px + 1vw);\r\n    \r\n  \r\n  }\r\n  .skills-info p{\r\n    font-size: calc(10px + 1vw);\r\n    color: var(--text-color);\r\n    text-align: center;\r\n    -webkit-justify-content: center;\r\n            justify-content: center;\r\n    -webkit-align-items: center;\r\n            align-items: center;\r\n    margin-bottom: 4vw;\r\n    margin-top: 3rem;\r\n    \r\n\r\n  }\r\n  .img-about{\r\n    width:calc(40px + 3vw);\r\n    -webkit-transition-duration: 300ms;\r\n            transition-duration: 300ms;\r\n  }\r\n  \r\n  .skill-icon{\r\n    display: grid;\r\n    grid-template-rows: repeat(1fr);\r\n    position: relative;\r\n    left: 1rem;\r\n    -webkit-transition-duration: 400ms;\r\n            transition-duration: 400ms;\r\n  }\r\n  \r\n  .skill-icon:nth-child(2){\r\n    -webkit-transition-duration: 1000ms;\r\n            transition-duration: 1000ms;\r\n  }\r\n  .skill-icon:nth-child(4){\r\n    -webkit-transition-duration: 1000ms;\r\n            transition-duration: 1000ms;\r\n  }\r\n  \r\n  .img-about:nth-child(1):hover{\r\n    -webkit-transform: rotate(61deg);\r\n            transform: rotate(61deg)\r\n  }\r\n  .img-about:nth-child(2):hover{\r\n    -webkit-transform: rotate(-360deg);\r\n            transform: rotate(-360deg)\r\n  }\r\n  .img-about:nth-child(3):hover{\r\n    -webkit-transform: rotate(90deg);\r\n            transform: rotate(90deg)\r\n  }\r\n  .img-about:nth-child(4):hover{\r\n    -webkit-transform: rotate(-360deg);\r\n            transform: rotate(-360deg)\r\n  }\r\n  \r\n\r\n\r\n@media (max-width: 1024px){\r\n\r\n  .skill-inner{\r\n    grid-template-columns: repeat(1,1fr);\r\n    line-height: 2rem;\r\n    margin-left: 5rem;\r\n    margin-right: 5rem;\r\n  }\r\n  .skill-image{\r\n   height: auto;\r\n  }\r\n  .skills{\r\n    margin: 0;\r\n  }\r\n  \r\n\r\n\r\n}\r\n\r\n\r\n@media (max-width: 768px){\r\n\r\n  .skills-info{\r\n    line-height: 1rem;\r\n  }\r\n\r\n\r\n}\r\n@media (min-width: 480px){\r\n\r\n  .skills-info{\r\n    line-height: 1rem;\r\n  }\r\n  \r\n}", "",{"version":3,"sources":["webpack://style/skills.css"],"names":[],"mappings":";AACA,WAAW;AACX;IACI,8EAAuE;IACvE,WAAW;IACX,aAAa;IACb;;;AAGJ;IACI,YAAY;IACZ,kBAAkB;IAClB,aAAa;IACb,8BAA8B;IAC9B,aAAa;IACb,4BAAoB;YAApB,oBAAoB;;;EAGtB;EACA;IACE,kBAAkB;EACpB;;EAEA;IACE,wBAAwB;IACxB,2BAA2B;IAC3B,iBAAiB;;EAEnB;EACA;IACE,uBAAuB;IACvB,2BAA2B;IAC3B,eAAe;EACjB;EACA;IACE,wBAAwB;IACxB,2BAA2B;IAC3B,gBAAgB;;EAElB;;EAEA;IACE,iBAAiB;;EAEnB;EACA;IACE,aAAa;IACb,8BAA8B;EAChC;EACA;IACE,+BAAuB;YAAvB,uBAAuB;IACvB,2BAAmB;YAAnB,mBAAmB;IACnB,2BAA2B;;;EAG7B;EACA;IACE,2BAA2B;IAC3B,wBAAwB;IACxB,kBAAkB;IAClB,+BAAuB;YAAvB,uBAAuB;IACvB,2BAAmB;YAAnB,mBAAmB;IACnB,kBAAkB;IAClB,gBAAgB;;;EAGlB;EACA;IACE,sBAAsB;IACtB,kCAA0B;YAA1B,0BAA0B;EAC5B;;EAEA;IACE,aAAa;IACb,+BAA+B;IAC/B,kBAAkB;IAClB,UAAU;IACV,kCAA0B;YAA1B,0BAA0B;EAC5B;;EAEA;IACE,mCAA2B;YAA3B,2BAA2B;EAC7B;EACA;IACE,mCAA2B;YAA3B,2BAA2B;EAC7B;;EAEA;IACE,gCAAuB;YAAvB;EACF;EACA;IACE,kCAAyB;YAAzB;EACF;EACA;IACE,gCAAuB;YAAvB;EACF;EACA;IACE,kCAAyB;YAAzB;EACF;;;;AAIF;;EAEE;IACE,oCAAoC;IACpC,iBAAiB;IACjB,iBAAiB;IACjB,kBAAkB;EACpB;EACA;GACC,YAAY;EACb;EACA;IACE,SAAS;EACX;;;;AAIF;;;AAGA;;EAEE;IACE,iBAAiB;EACnB;;;AAGF;AACA;;EAEE;IACE,iBAAiB;EACnB;;AAEF","sourcesContent":["\r\n/* Skills */\r\n.skill-image{\r\n    background: url('../public/background5.png') no-repeat center top/cover;\r\n    width: 100%;\r\n    height: 100vh;\r\n    }\r\n  \r\n\r\n.skill-inner{\r\n    margin: auto;\r\n    margin-left: 10rem;\r\n    display: grid;\r\n    grid-template-columns: 3fr 2fr;\r\n    grid-gap:3rem;\r\n    animation: para 2s 1;\r\n\r\n    \r\n  }\r\n  .language{\r\n    padding-top: 15rem;\r\n  }\r\n  \r\n  .language h1{\r\n    color: var(--text-color);\r\n    font-size: calc(25px + 3vw);\r\n    font-weight: bold;\r\n\r\n  }\r\n  .language h3 {\r\n    color: var(--dif-color);\r\n    font-size: calc(15px + 1vw);\r\n    padding: 10px 0;\r\n  }\r\n  .language p{\r\n    color: var(--text-color);\r\n    font-size: calc(10px + 1vw);\r\n    font-weight: 300;\r\n\r\n  }\r\n  \r\n  .skills{\r\n    margin-top: 15rem;\r\n\r\n  }\r\n  .skill-group{\r\n    display: grid;\r\n    grid-template-columns: 1fr 3fr;\r\n  }\r\n  .skills-info{\r\n    justify-content: center;\r\n    align-items: center;\r\n    font-size: calc(15px + 1vw);\r\n    \r\n  \r\n  }\r\n  .skills-info p{\r\n    font-size: calc(10px + 1vw);\r\n    color: var(--text-color);\r\n    text-align: center;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin-bottom: 4vw;\r\n    margin-top: 3rem;\r\n    \r\n\r\n  }\r\n  .img-about{\r\n    width:calc(40px + 3vw);\r\n    transition-duration: 300ms;\r\n  }\r\n  \r\n  .skill-icon{\r\n    display: grid;\r\n    grid-template-rows: repeat(1fr);\r\n    position: relative;\r\n    left: 1rem;\r\n    transition-duration: 400ms;\r\n  }\r\n  \r\n  .skill-icon:nth-child(2){\r\n    transition-duration: 1000ms;\r\n  }\r\n  .skill-icon:nth-child(4){\r\n    transition-duration: 1000ms;\r\n  }\r\n  \r\n  .img-about:nth-child(1):hover{\r\n    transform: rotate(61deg)\r\n  }\r\n  .img-about:nth-child(2):hover{\r\n    transform: rotate(-360deg)\r\n  }\r\n  .img-about:nth-child(3):hover{\r\n    transform: rotate(90deg)\r\n  }\r\n  .img-about:nth-child(4):hover{\r\n    transform: rotate(-360deg)\r\n  }\r\n  \r\n\r\n\r\n@media (max-width: 1024px){\r\n\r\n  .skill-inner{\r\n    grid-template-columns: repeat(1,1fr);\r\n    line-height: 2rem;\r\n    margin-left: 5rem;\r\n    margin-right: 5rem;\r\n  }\r\n  .skill-image{\r\n   height: auto;\r\n  }\r\n  .skills{\r\n    margin: 0;\r\n  }\r\n  \r\n\r\n\r\n}\r\n\r\n\r\n@media (max-width: 768px){\r\n\r\n  .skills-info{\r\n    line-height: 1rem;\r\n  }\r\n\r\n\r\n}\r\n@media (min-width: 480px){\r\n\r\n  .skills-info{\r\n    line-height: 1rem;\r\n  }\r\n  \r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGUvc2tpbGxzLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDeUY7QUFDTztBQUMxQjtBQUN0RSw4QkFBOEIsbUZBQTJCO0FBQ3pELHlDQUF5QyxzRkFBK0IsQ0FBQywrREFBNkI7QUFDdEc7QUFDQSw4QkFBOEIsUUFBUyxvQ0FBb0MsK0ZBQStGLG9CQUFvQixzQkFBc0IsU0FBUywyQkFBMkIscUJBQXFCLDJCQUEyQixzQkFBc0IsdUNBQXVDLHNCQUFzQixxQ0FBcUMscUNBQXFDLG1CQUFtQixnQkFBZ0IsMkJBQTJCLE9BQU8seUJBQXlCLGlDQUFpQyxvQ0FBb0MsMEJBQTBCLFdBQVcsb0JBQW9CLGdDQUFnQyxvQ0FBb0Msd0JBQXdCLE9BQU8sa0JBQWtCLGlDQUFpQyxvQ0FBb0MseUJBQXlCLFdBQVcsb0JBQW9CLDBCQUEwQixXQUFXLG1CQUFtQixzQkFBc0IsdUNBQXVDLE9BQU8sbUJBQW1CLHdDQUF3Qyx3Q0FBd0Msb0NBQW9DLG9DQUFvQyxvQ0FBb0MscUJBQXFCLHFCQUFxQixvQ0FBb0MsaUNBQWlDLDJCQUEyQix3Q0FBd0Msd0NBQXdDLG9DQUFvQyxvQ0FBb0MsMkJBQTJCLHlCQUF5QixtQkFBbUIsaUJBQWlCLCtCQUErQiwyQ0FBMkMsMkNBQTJDLE9BQU8sd0JBQXdCLHNCQUFzQix3Q0FBd0MsMkJBQTJCLG1CQUFtQiwyQ0FBMkMsMkNBQTJDLE9BQU8scUNBQXFDLDRDQUE0Qyw0Q0FBNEMsT0FBTywrQkFBK0IsNENBQTRDLDRDQUE0QyxPQUFPLDBDQUEwQyx5Q0FBeUMsK0NBQStDLG9DQUFvQywyQ0FBMkMsaURBQWlELG9DQUFvQyx5Q0FBeUMsK0NBQStDLG9DQUFvQywyQ0FBMkMsaURBQWlELDZDQUE2Qyx1QkFBdUIsNkNBQTZDLDBCQUEwQiwwQkFBMEIsMkJBQTJCLE9BQU8sbUJBQW1CLG9CQUFvQixPQUFPLGNBQWMsa0JBQWtCLE9BQU8sbUJBQW1CLHNDQUFzQyx1QkFBdUIsMEJBQTBCLE9BQU8sYUFBYSw4QkFBOEIsdUJBQXVCLDBCQUEwQixPQUFPLFdBQVcsT0FBTyw2RUFBNkUsVUFBVSxLQUFLLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxlQUFlLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsY0FBYyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxjQUFjLE9BQU8sS0FBSyxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsZUFBZSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGVBQWUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxLQUFLLFlBQVksTUFBTSxRQUFRLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFFBQVEsT0FBTyxNQUFNLEtBQUssWUFBWSxRQUFRLEtBQUssTUFBTSxLQUFLLFlBQVksT0FBTywwREFBMEQsZ0ZBQWdGLG9CQUFvQixzQkFBc0IsU0FBUywyQkFBMkIscUJBQXFCLDJCQUEyQixzQkFBc0IsdUNBQXVDLHNCQUFzQiw2QkFBNkIsbUJBQW1CLGdCQUFnQiwyQkFBMkIsT0FBTyx5QkFBeUIsaUNBQWlDLG9DQUFvQywwQkFBMEIsV0FBVyxvQkFBb0IsZ0NBQWdDLG9DQUFvQyx3QkFBd0IsT0FBTyxrQkFBa0IsaUNBQWlDLG9DQUFvQyx5QkFBeUIsV0FBVyxvQkFBb0IsMEJBQTBCLFdBQVcsbUJBQW1CLHNCQUFzQix1Q0FBdUMsT0FBTyxtQkFBbUIsZ0NBQWdDLDRCQUE0QixvQ0FBb0MscUJBQXFCLHFCQUFxQixvQ0FBb0MsaUNBQWlDLDJCQUEyQixnQ0FBZ0MsNEJBQTRCLDJCQUEyQix5QkFBeUIsbUJBQW1CLGlCQUFpQiwrQkFBK0IsbUNBQW1DLE9BQU8sd0JBQXdCLHNCQUFzQix3Q0FBd0MsMkJBQTJCLG1CQUFtQixtQ0FBbUMsT0FBTyxxQ0FBcUMsb0NBQW9DLE9BQU8sK0JBQStCLG9DQUFvQyxPQUFPLDBDQUEwQyx1Q0FBdUMsb0NBQW9DLHlDQUF5QyxvQ0FBb0MsdUNBQXVDLG9DQUFvQyx5Q0FBeUMsNkNBQTZDLHVCQUF1Qiw2Q0FBNkMsMEJBQTBCLDBCQUEwQiwyQkFBMkIsT0FBTyxtQkFBbUIsb0JBQW9CLE9BQU8sY0FBYyxrQkFBa0IsT0FBTyxtQkFBbUIsc0NBQXNDLHVCQUF1QiwwQkFBMEIsT0FBTyxhQUFhLDhCQUE4Qix1QkFBdUIsMEJBQTBCLE9BQU8sV0FBVyxtQkFBbUI7QUFDNzJOO0FBQ2Usc0ZBQXVCLEVBQUMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4wZWYwOTQ1OTczNDVlNzBlZmYxOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyBmcm9tIFwiLi4vcHVibGljL2JhY2tncm91bmQ1LnBuZ1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlxcclxcbi8qIFNraWxscyAqL1xcclxcbi5za2lsbC1pbWFnZXtcXHJcXG4gICAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBuby1yZXBlYXQgY2VudGVyIHRvcC9jb3ZlcjtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIH1cXHJcXG4gIFxcclxcblxcclxcbi5za2lsbC1pbm5lcntcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICBtYXJnaW4tbGVmdDogMTByZW07XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM2ZyIDJmcjtcXHJcXG4gICAgZ3JpZC1nYXA6M3JlbTtcXHJcXG4gICAgLXdlYmtpdC1hbmltYXRpb246IHBhcmEgMnMgMTtcXHJcXG4gICAgICAgICAgICBhbmltYXRpb246IHBhcmEgMnMgMTtcXHJcXG5cXHJcXG4gICAgXFxyXFxuICB9XFxyXFxuICAubGFuZ3VhZ2V7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAxNXJlbTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmxhbmd1YWdlIGgxe1xcclxcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxyXFxuICAgIGZvbnQtc2l6ZTogY2FsYygyNXB4ICsgM3Z3KTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuXFxyXFxuICB9XFxyXFxuICAubGFuZ3VhZ2UgaDMge1xcclxcbiAgICBjb2xvcjogdmFyKC0tZGlmLWNvbG9yKTtcXHJcXG4gICAgZm9udC1zaXplOiBjYWxjKDE1cHggKyAxdncpO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4IDA7XFxyXFxuICB9XFxyXFxuICAubGFuZ3VhZ2UgcHtcXHJcXG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xcclxcbiAgICBmb250LXNpemU6IGNhbGMoMTBweCArIDF2dyk7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxuXFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5za2lsbHN7XFxyXFxuICAgIG1hcmdpbi10b3A6IDE1cmVtO1xcclxcblxcclxcbiAgfVxcclxcbiAgLnNraWxsLWdyb3Vwe1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XFxyXFxuICB9XFxyXFxuICAuc2tpbGxzLWluZm97XFxyXFxuICAgIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IGNhbGMoMTVweCArIDF2dyk7XFxyXFxuICAgIFxcclxcbiAgXFxyXFxuICB9XFxyXFxuICAuc2tpbGxzLWluZm8gcHtcXHJcXG4gICAgZm9udC1zaXplOiBjYWxjKDEwcHggKyAxdncpO1xcclxcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDR2dztcXHJcXG4gICAgbWFyZ2luLXRvcDogM3JlbTtcXHJcXG4gICAgXFxyXFxuXFxyXFxuICB9XFxyXFxuICAuaW1nLWFib3V0e1xcclxcbiAgICB3aWR0aDpjYWxjKDQwcHggKyAzdncpO1xcclxcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDMwMG1zO1xcclxcbiAgICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDMwMG1zO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuc2tpbGwtaWNvbntcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMWZyKTtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBsZWZ0OiAxcmVtO1xcclxcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDQwMG1zO1xcclxcbiAgICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDQwMG1zO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuc2tpbGwtaWNvbjpudGgtY2hpbGQoMil7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMTAwMG1zO1xcclxcbiAgICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDEwMDBtcztcXHJcXG4gIH1cXHJcXG4gIC5za2lsbC1pY29uOm50aC1jaGlsZCg0KXtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAxMDAwbXM7XFxyXFxuICAgICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMTAwMG1zO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuaW1nLWFib3V0Om50aC1jaGlsZCgxKTpob3ZlcntcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg2MWRlZyk7XFxyXFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNjFkZWcpXFxyXFxuICB9XFxyXFxuICAuaW1nLWFib3V0Om50aC1jaGlsZCgyKTpob3ZlcntcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtMzYwZGVnKTtcXHJcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMzYwZGVnKVxcclxcbiAgfVxcclxcbiAgLmltZy1hYm91dDpudGgtY2hpbGQoMyk6aG92ZXJ7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcclxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKVxcclxcbiAgfVxcclxcbiAgLmltZy1hYm91dDpudGgtY2hpbGQoNCk6aG92ZXJ7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTM2MGRlZyk7XFxyXFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTM2MGRlZylcXHJcXG4gIH1cXHJcXG4gIFxcclxcblxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpe1xcclxcblxcclxcbiAgLnNraWxsLWlubmVye1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLDFmcik7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xcclxcbiAgICBtYXJnaW4tbGVmdDogNXJlbTtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiA1cmVtO1xcclxcbiAgfVxcclxcbiAgLnNraWxsLWltYWdle1xcclxcbiAgIGhlaWdodDogYXV0bztcXHJcXG4gIH1cXHJcXG4gIC5za2lsbHN7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcblxcclxcblxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpe1xcclxcblxcclxcbiAgLnNraWxscy1pbmZve1xcclxcbiAgICBsaW5lLWhlaWdodDogMXJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG5cXHJcXG59XFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDQ4MHB4KXtcXHJcXG5cXHJcXG4gIC5za2lsbHMtaW5mb3tcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDFyZW07XFxyXFxuICB9XFxyXFxuICBcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3N0eWxlL3NraWxscy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQUNBLFdBQVc7QUFDWDtJQUNJLDhFQUF1RTtJQUN2RSxXQUFXO0lBQ1gsYUFBYTtJQUNiOzs7QUFHSjtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixhQUFhO0lBQ2IsNEJBQW9CO1lBQXBCLG9CQUFvQjs7O0VBR3RCO0VBQ0E7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSx3QkFBd0I7SUFDeEIsMkJBQTJCO0lBQzNCLGlCQUFpQjs7RUFFbkI7RUFDQTtJQUNFLHVCQUF1QjtJQUN2QiwyQkFBMkI7SUFDM0IsZUFBZTtFQUNqQjtFQUNBO0lBQ0Usd0JBQXdCO0lBQ3hCLDJCQUEyQjtJQUMzQixnQkFBZ0I7O0VBRWxCOztFQUVBO0lBQ0UsaUJBQWlCOztFQUVuQjtFQUNBO0lBQ0UsYUFBYTtJQUNiLDhCQUE4QjtFQUNoQztFQUNBO0lBQ0UsK0JBQXVCO1lBQXZCLHVCQUF1QjtJQUN2QiwyQkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLDJCQUEyQjs7O0VBRzdCO0VBQ0E7SUFDRSwyQkFBMkI7SUFDM0Isd0JBQXdCO0lBQ3hCLGtCQUFrQjtJQUNsQiwrQkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLDJCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGdCQUFnQjs7O0VBR2xCO0VBQ0E7SUFDRSxzQkFBc0I7SUFDdEIsa0NBQTBCO1lBQTFCLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLGFBQWE7SUFDYiwrQkFBK0I7SUFDL0Isa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixrQ0FBMEI7WUFBMUIsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsbUNBQTJCO1lBQTNCLDJCQUEyQjtFQUM3QjtFQUNBO0lBQ0UsbUNBQTJCO1lBQTNCLDJCQUEyQjtFQUM3Qjs7RUFFQTtJQUNFLGdDQUF1QjtZQUF2QjtFQUNGO0VBQ0E7SUFDRSxrQ0FBeUI7WUFBekI7RUFDRjtFQUNBO0lBQ0UsZ0NBQXVCO1lBQXZCO0VBQ0Y7RUFDQTtJQUNFLGtDQUF5QjtZQUF6QjtFQUNGOzs7O0FBSUY7O0VBRUU7SUFDRSxvQ0FBb0M7SUFDcEMsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixrQkFBa0I7RUFDcEI7RUFDQTtHQUNDLFlBQVk7RUFDYjtFQUNBO0lBQ0UsU0FBUztFQUNYOzs7O0FBSUY7OztBQUdBOztFQUVFO0lBQ0UsaUJBQWlCO0VBQ25COzs7QUFHRjtBQUNBOztFQUVFO0lBQ0UsaUJBQWlCO0VBQ25COztBQUVGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcclxcbi8qIFNraWxscyAqL1xcclxcbi5za2lsbC1pbWFnZXtcXHJcXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi9wdWJsaWMvYmFja2dyb3VuZDUucG5nJykgbm8tcmVwZWF0IGNlbnRlciB0b3AvY292ZXI7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICB9XFxyXFxuICBcXHJcXG5cXHJcXG4uc2tpbGwtaW5uZXJ7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcmVtO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciAyZnI7XFxyXFxuICAgIGdyaWQtZ2FwOjNyZW07XFxyXFxuICAgIGFuaW1hdGlvbjogcGFyYSAycyAxO1xcclxcblxcclxcbiAgICBcXHJcXG4gIH1cXHJcXG4gIC5sYW5ndWFnZXtcXHJcXG4gICAgcGFkZGluZy10b3A6IDE1cmVtO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAubGFuZ3VhZ2UgaDF7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXHJcXG4gICAgZm9udC1zaXplOiBjYWxjKDI1cHggKyAzdncpO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG5cXHJcXG4gIH1cXHJcXG4gIC5sYW5ndWFnZSBoMyB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1kaWYtY29sb3IpO1xcclxcbiAgICBmb250LXNpemU6IGNhbGMoMTVweCArIDF2dyk7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHggMDtcXHJcXG4gIH1cXHJcXG4gIC5sYW5ndWFnZSBwe1xcclxcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxyXFxuICAgIGZvbnQtc2l6ZTogY2FsYygxMHB4ICsgMXZ3KTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG5cXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLnNraWxsc3tcXHJcXG4gICAgbWFyZ2luLXRvcDogMTVyZW07XFxyXFxuXFxyXFxuICB9XFxyXFxuICAuc2tpbGwtZ3JvdXB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcXHJcXG4gIH1cXHJcXG4gIC5za2lsbHMtaW5mb3tcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogY2FsYygxNXB4ICsgMXZ3KTtcXHJcXG4gICAgXFxyXFxuICBcXHJcXG4gIH1cXHJcXG4gIC5za2lsbHMtaW5mbyBwe1xcclxcbiAgICBmb250LXNpemU6IGNhbGMoMTBweCArIDF2dyk7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogNHZ3O1xcclxcbiAgICBtYXJnaW4tdG9wOiAzcmVtO1xcclxcbiAgICBcXHJcXG5cXHJcXG4gIH1cXHJcXG4gIC5pbWctYWJvdXR7XFxyXFxuICAgIHdpZHRoOmNhbGMoNDBweCArIDN2dyk7XFxyXFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDMwMG1zO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuc2tpbGwtaWNvbntcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMWZyKTtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBsZWZ0OiAxcmVtO1xcclxcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA0MDBtcztcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLnNraWxsLWljb246bnRoLWNoaWxkKDIpe1xcclxcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxMDAwbXM7XFxyXFxuICB9XFxyXFxuICAuc2tpbGwtaWNvbjpudGgtY2hpbGQoNCl7XFxyXFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDEwMDBtcztcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmltZy1hYm91dDpudGgtY2hpbGQoMSk6aG92ZXJ7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDYxZGVnKVxcclxcbiAgfVxcclxcbiAgLmltZy1hYm91dDpudGgtY2hpbGQoMik6aG92ZXJ7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC0zNjBkZWcpXFxyXFxuICB9XFxyXFxuICAuaW1nLWFib3V0Om50aC1jaGlsZCgzKTpob3ZlcntcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpXFxyXFxuICB9XFxyXFxuICAuaW1nLWFib3V0Om50aC1jaGlsZCg0KTpob3ZlcntcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTM2MGRlZylcXHJcXG4gIH1cXHJcXG4gIFxcclxcblxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpe1xcclxcblxcclxcbiAgLnNraWxsLWlubmVye1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLDFmcik7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xcclxcbiAgICBtYXJnaW4tbGVmdDogNXJlbTtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiA1cmVtO1xcclxcbiAgfVxcclxcbiAgLnNraWxsLWltYWdle1xcclxcbiAgIGhlaWdodDogYXV0bztcXHJcXG4gIH1cXHJcXG4gIC5za2lsbHN7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcblxcclxcblxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpe1xcclxcblxcclxcbiAgLnNraWxscy1pbmZve1xcclxcbiAgICBsaW5lLWhlaWdodDogMXJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG5cXHJcXG59XFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDQ4MHB4KXtcXHJcXG5cXHJcXG4gIC5za2lsbHMtaW5mb3tcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDFyZW07XFxyXFxuICB9XFxyXFxuICBcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJzb3VyY2VSb290IjoiIn0=