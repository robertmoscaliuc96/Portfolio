webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./style/work.css":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./style/work.css ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_background5_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/background5.png */ "./public/background5.png");
/* harmony import */ var _public_faq_2_PNG__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/faq 2.PNG */ "./public/faq 2.PNG");
/* harmony import */ var _public_gitfinder1_PNG__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/gitfinder1.PNG */ "./public/gitfinder1.PNG");
/* harmony import */ var _public_demetriss_PNG__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../public/demetriss.PNG */ "./public/demetriss.PNG");
// Imports






var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_background5_png__WEBPACK_IMPORTED_MODULE_2__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_faq_2_PNG__WEBPACK_IMPORTED_MODULE_3__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_gitfinder1_PNG__WEBPACK_IMPORTED_MODULE_4__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_demetriss_PNG__WEBPACK_IMPORTED_MODULE_5__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/* Work */\r\n\r\n.work-inner{\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat center bottom/cover;\r\n    width: 100%;\r\n    height: 100vh;\r\n    margin: auto;\r\n    overflow-x: auto;\r\n    display: -webkit-flex;\r\n    display: flex;\r\n    -webkit-justify-content: center;\r\n            justify-content: center;\r\n    -webkit-align-items: center;\r\n            align-items: center;\r\n    padding-left:0;  \r\n  }\r\n  .card {\r\n    height: 37rem;\r\n    width: 27rem;\r\n    min-width: 350px;\r\n    border-radius: 16px;\r\n    background: var(--dark-color);\r\n    box-shadow: -1rem 0 3rem #000;\r\n    -webkit-transition: .3s;\r\n    transition: .3s;\r\n    scroll-snap-align: start;\r\n    clear: both;\r\n    -webkit-animation: para 2s 1;\r\n            animation: para 2s 1;\r\n  }\r\n  \r\n  \r\n  \r\n  .card:focus-within~.card, .card:hover~.card {\r\n    -webkit-transform: translateX(120px);\r\n            transform: translateX(120px);\r\n  }\r\n  .card:hover {\r\n    -webkit-transform: translateY(-1rem);\r\n            transform: translateY(-1rem);\r\n  }\r\n  .card:not(:first-child) {\r\n    margin-left: -120px;\r\n  }\r\n  \r\n  .card-list::-webkit-scrollbar {\r\n    width: 10px;\r\n    height: 10px;\r\n  }\r\n  .card-list::-webkit-scrollbar-thumb {\r\n    background: #1b1b1d;\r\n    border-radius: 10px;\r\n    box-shadow: inset 2px 2px 2px hsla(0,0%,100%,.25), inset -2px -2px 2px rgba(0,0,0,.25);\r\n  }\r\n  \r\n  .card-list::-webkit-scrollbar-track {\r\n    background: -webkit-linear-gradient(left,#201c29,#201c29 1px,#17141d 0,#17141d);\r\n    background: linear-gradient(90deg,#201c29,#201c29 1px,#17141d 0,#17141d);\r\n  }\r\n  \r\n  .card-header {\r\n    margin-bottom: auto;\r\n  }\r\n  .card-header p {\r\n    font-size: 14px;\r\n    margin: 0 0 1rem;\r\n    color: var(--light-color);\r\n  }\r\n  \r\n  .card-img,.card-img2,.card-img3{\r\n    border-top-left-radius: 16px;\r\n    border-top-right-radius: 16px;\r\n    display: block;\r\n    width: 100%;\r\n    height: 15rem;\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") no-repeat center bottom/cover;\r\n    border: 1px solid var(--dark-color);\r\n  }\r\n  .card-img2{\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") no-repeat center bottom/cover;\r\n  }\r\n  .card-img3{\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") no-repeat center bottom/cover;\r\n  }\r\n  .card-text{\r\n    padding: 2rem;\r\n  }\r\n  .card-title{\r\n    font-size: 1.5rem;\r\n    color: var(--text-color);\r\n    text-align: center;\r\n    margin: 1.2rem;\r\n  }\r\n  \r\n  .card-description p{\r\n    font-size: 1rem;\r\n    padding: .5rem 1.7rem;\r\n    color: var(--text-color);\r\n  }\r\n  \r\n  .card-link{\r\n    display: -webkit-flex;\r\n    display: flex;\r\n    -webkit-justify-content: center;\r\n            justify-content: center;\r\n    -webkit-align-items: center;\r\n            align-items: center;\r\n    grid-gap: 6rem;\r\n    gap: 6rem;\r\n  }\r\n  .card-link a{\r\n    color: var(--light-dark);\r\n    font-size: 2.5rem;\r\n    -webkit-transition-duration: 300ms;\r\n            transition-duration: 300ms;\r\n  }\r\n  .card-link a:hover{\r\n    color: var(--dif-color);\r\n  \r\n  }\r\n  .card-tech{\r\n    display: -webkit-flex;\r\n    display: flex;\r\n    -webkit-justify-content: center;\r\n            justify-content: center;\r\n    -webkit-align-items: center;\r\n            align-items: center;\r\n    grid-gap: 1rem;\r\n    gap: 1rem;\r\n    margin-bottom: 1rem;\r\n  }\r\n  .card-tech p{\r\n    padding: 3px 8px;\r\n    color: var(--dif-color);\r\n    border: 1px solid var(--dif-color);\r\n    border-radius: 25px;\r\n  }\r\n  \r\n\r\n", "",{"version":3,"sources":["webpack://style/work.css"],"names":[],"mappings":"AAAA,SAAS;;AAET;IACI,iFAA0E;IAC1E,WAAW;IACX,aAAa;IACb,YAAY;IACZ,gBAAgB;IAChB,qBAAa;IAAb,aAAa;IACb,+BAAuB;YAAvB,uBAAuB;IACvB,2BAAmB;YAAnB,mBAAmB;IACnB,cAAc;EAChB;EACA;IACE,aAAa;IACb,YAAY;IACZ,gBAAgB;IAChB,mBAAmB;IACnB,6BAA6B;IAC7B,6BAA6B;IAC7B,uBAAe;IAAf,eAAe;IACf,wBAAwB;IACxB,WAAW;IACX,4BAAoB;YAApB,oBAAoB;EACtB;;;;EAIA;IACE,oCAA4B;YAA5B,4BAA4B;EAC9B;EACA;IACE,oCAA4B;YAA5B,4BAA4B;EAC9B;EACA;IACE,mBAAmB;EACrB;;EAEA;IACE,WAAW;IACX,YAAY;EACd;EACA;IACE,mBAAmB;IACnB,mBAAmB;IACnB,sFAAsF;EACxF;;EAEA;IACE,+EAAwE;IAAxE,wEAAwE;EAC1E;;EAEA;IACE,mBAAmB;EACrB;EACA;IACE,eAAe;IACf,gBAAgB;IAChB,yBAAyB;EAC3B;;EAEA;IACE,4BAA4B;IAC5B,6BAA6B;IAC7B,cAAc;IACd,WAAW;IACX,aAAa;IACb,iFAAqE;IACrE,mCAAmC;EACrC;EACA;IACE,iFAAyE;EAC3E;EACA;IACE,iFAAwE;EAC1E;EACA;IACE,aAAa;EACf;EACA;IACE,iBAAiB;IACjB,wBAAwB;IACxB,kBAAkB;IAClB,cAAc;EAChB;;EAEA;IACE,eAAe;IACf,qBAAqB;IACrB,wBAAwB;EAC1B;;EAEA;IACE,qBAAa;IAAb,aAAa;IACb,+BAAuB;YAAvB,uBAAuB;IACvB,2BAAmB;YAAnB,mBAAmB;IACnB,cAAS;IAAT,SAAS;EACX;EACA;IACE,wBAAwB;IACxB,iBAAiB;IACjB,kCAA0B;YAA1B,0BAA0B;EAC5B;EACA;IACE,uBAAuB;;EAEzB;EACA;IACE,qBAAa;IAAb,aAAa;IACb,+BAAuB;YAAvB,uBAAuB;IACvB,2BAAmB;YAAnB,mBAAmB;IACnB,cAAS;IAAT,SAAS;IACT,mBAAmB;EACrB;EACA;IACE,gBAAgB;IAChB,uBAAuB;IACvB,kCAAkC;IAClC,mBAAmB;EACrB","sourcesContent":["/* Work */\r\n\r\n.work-inner{\r\n    background: url('../public/background5.png') no-repeat center bottom/cover;\r\n    width: 100%;\r\n    height: 100vh;\r\n    margin: auto;\r\n    overflow-x: auto;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    padding-left:0;  \r\n  }\r\n  .card {\r\n    height: 37rem;\r\n    width: 27rem;\r\n    min-width: 350px;\r\n    border-radius: 16px;\r\n    background: var(--dark-color);\r\n    box-shadow: -1rem 0 3rem #000;\r\n    transition: .3s;\r\n    scroll-snap-align: start;\r\n    clear: both;\r\n    animation: para 2s 1;\r\n  }\r\n  \r\n  \r\n  \r\n  .card:focus-within~.card, .card:hover~.card {\r\n    transform: translateX(120px);\r\n  }\r\n  .card:hover {\r\n    transform: translateY(-1rem);\r\n  }\r\n  .card:not(:first-child) {\r\n    margin-left: -120px;\r\n  }\r\n  \r\n  .card-list::-webkit-scrollbar {\r\n    width: 10px;\r\n    height: 10px;\r\n  }\r\n  .card-list::-webkit-scrollbar-thumb {\r\n    background: #1b1b1d;\r\n    border-radius: 10px;\r\n    box-shadow: inset 2px 2px 2px hsla(0,0%,100%,.25), inset -2px -2px 2px rgba(0,0,0,.25);\r\n  }\r\n  \r\n  .card-list::-webkit-scrollbar-track {\r\n    background: linear-gradient(90deg,#201c29,#201c29 1px,#17141d 0,#17141d);\r\n  }\r\n  \r\n  .card-header {\r\n    margin-bottom: auto;\r\n  }\r\n  .card-header p {\r\n    font-size: 14px;\r\n    margin: 0 0 1rem;\r\n    color: var(--light-color);\r\n  }\r\n  \r\n  .card-img,.card-img2,.card-img3{\r\n    border-top-left-radius: 16px;\r\n    border-top-right-radius: 16px;\r\n    display: block;\r\n    width: 100%;\r\n    height: 15rem;\r\n    background: url('../public/faq\\ 2.PNG') no-repeat center bottom/cover;\r\n    border: 1px solid var(--dark-color);\r\n  }\r\n  .card-img2{\r\n    background: url('../public/gitfinder1.PNG') no-repeat center bottom/cover;\r\n  }\r\n  .card-img3{\r\n    background: url('../public/demetriss.PNG') no-repeat center bottom/cover;\r\n  }\r\n  .card-text{\r\n    padding: 2rem;\r\n  }\r\n  .card-title{\r\n    font-size: 1.5rem;\r\n    color: var(--text-color);\r\n    text-align: center;\r\n    margin: 1.2rem;\r\n  }\r\n  \r\n  .card-description p{\r\n    font-size: 1rem;\r\n    padding: .5rem 1.7rem;\r\n    color: var(--text-color);\r\n  }\r\n  \r\n  .card-link{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 6rem;\r\n  }\r\n  .card-link a{\r\n    color: var(--light-dark);\r\n    font-size: 2.5rem;\r\n    transition-duration: 300ms;\r\n  }\r\n  .card-link a:hover{\r\n    color: var(--dif-color);\r\n  \r\n  }\r\n  .card-tech{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 1rem;\r\n    margin-bottom: 1rem;\r\n  }\r\n  .card-tech p{\r\n    padding: 3px 8px;\r\n    color: var(--dif-color);\r\n    border: 1px solid var(--dif-color);\r\n    border-radius: 25px;\r\n  }\r\n  \r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_gtag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/gtag */ "./lib/gtag.js");
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../style/index.css */ "./style/index.css");
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_index_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _style_navbar_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../style/navbar.css */ "./style/navbar.css");
/* harmony import */ var _style_navbar_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_style_navbar_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _style_landing_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../style/landing.css */ "./style/landing.css");
/* harmony import */ var _style_landing_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_style_landing_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _style_about_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../style/about.css */ "./style/about.css");
/* harmony import */ var _style_about_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_style_about_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _style_skills_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../style/skills.css */ "./style/skills.css");
/* harmony import */ var _style_skills_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_style_skills_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _style_work_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../style/work.css */ "./style/work.css");
/* harmony import */ var _style_work_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_style_work_css__WEBPACK_IMPORTED_MODULE_10__);


var _this = undefined,
    _jsxFileName = "E:\\Portfolio\\pages\\_app.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;










_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__["config"].autoAddCss = false;

var App = function App(_ref) {
  _s();

  var Component = _ref.Component,
      pageProps = _ref.pageProps;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var handleRouteChange = function handleRouteChange(url) {
      _lib_gtag__WEBPACK_IMPORTED_MODULE_4__["pageview"](url);
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return function () {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
  return __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }));
};

_s(App, "vQduR7x+OPXj6PSmJyFnf+hU7bg=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"]];
});

_c = App;
/* harmony default export */ __webpack_exports__["default"] = (App);

var _c;

$RefreshReg$(_c, "App");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./public/demetriss.PNG":
/*!******************************!*\
  !*** ./public/demetriss.PNG ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/demetriss.a4fbbfd234f3474e4fe428458bd0aa1a.PNG");

/***/ }),

/***/ "./public/faq 2.PNG":
/*!**************************!*\
  !*** ./public/faq 2.PNG ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/faq 2.d87b76d70940c6175b41804aacfdf0f6.PNG");

/***/ }),

/***/ "./public/gitfinder1.PNG":
/*!*******************************!*\
  !*** ./public/gitfinder1.PNG ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/gitfinder1.97b4b1344e2e8dc05698c847bed4ae75.PNG");

/***/ }),

/***/ "./style/work.css":
/*!************************!*\
  !*** ./style/work.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./work.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./style/work.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./work.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./style/work.css",
      function () {
        content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./work.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./style/work.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGUvd29yay5jc3MiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3B1YmxpYy9kZW1ldHJpc3MuUE5HIiwid2VicGFjazovL19OX0UvLi9wdWJsaWMvZmFxIDIuUE5HIiwid2VicGFjazovL19OX0UvLi9wdWJsaWMvZ2l0ZmluZGVyMS5QTkciLCJ3ZWJwYWNrOi8vX05fRS8uL3N0eWxlL3dvcmsuY3NzPzllYTUiXSwibmFtZXMiOlsiY29uZmlnIiwiYXV0b0FkZENzcyIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsImhhbmRsZVJvdXRlQ2hhbmdlIiwidXJsIiwiZ3RhZyIsImV2ZW50cyIsIm9uIiwib2ZmIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDeUY7QUFDTztBQUMxQjtBQUNOO0FBQ0s7QUFDRDtBQUNwRSw4QkFBOEIsbUZBQTJCO0FBQ3pELHlDQUF5QyxzRkFBK0IsQ0FBQywrREFBNkI7QUFDdEcseUNBQXlDLHNGQUErQixDQUFDLHlEQUE2QjtBQUN0Ryx5Q0FBeUMsc0ZBQStCLENBQUMsOERBQTZCO0FBQ3RHLHlDQUF5QyxzRkFBK0IsQ0FBQyw2REFBNkI7QUFDdEc7QUFDQSw4QkFBOEIsUUFBUyxpQ0FBaUMsa0dBQWtHLG9CQUFvQixzQkFBc0IscUJBQXFCLHlCQUF5Qiw4QkFBOEIsc0JBQXNCLHdDQUF3Qyx3Q0FBd0Msb0NBQW9DLG9DQUFvQyx1QkFBdUIsU0FBUyxhQUFhLHNCQUFzQixxQkFBcUIseUJBQXlCLDRCQUE0QixzQ0FBc0Msc0NBQXNDLGdDQUFnQyx3QkFBd0IsaUNBQWlDLG9CQUFvQixxQ0FBcUMscUNBQXFDLE9BQU8scUVBQXFFLDZDQUE2Qyw2Q0FBNkMsT0FBTyxtQkFBbUIsNkNBQTZD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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUJBO0FBQWUsb0ZBQXVCLGdFQUFnRSxFOzs7Ozs7Ozs7Ozs7QUNBdEc7QUFBZSxvRkFBdUIsNERBQTRELEU7Ozs7Ozs7Ozs7OztBQ0FsRztBQUFlLG9GQUF1QixpRUFBaUUsRTs7Ozs7Ozs7Ozs7QUNBdkcsVUFBVSxtQkFBTyxDQUFDLG1KQUF3RTtBQUMxRiwwQkFBMEIsbUJBQU8sQ0FBQyxvUUFBb0o7O0FBRXRMOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUEsbUNBQW1DO0FBQ25DO0FBQ0Esc0VBQXNFLHdDQUF3QztBQUM5RztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQSxJQUFJLElBQVU7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNLG9RQUFvSjtBQUMxSjtBQUNBLGtCQUFrQixtQkFBTyxDQUFDLG9RQUFvSjs7QUFFOUs7O0FBRUE7QUFDQSw0QkFBNEIsUUFBUztBQUNyQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSxzQyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmEzMzA0NzQ1Y2JhZjdhMjgxMjA2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fIGZyb20gXCIuLi9wdWJsaWMvYmFja2dyb3VuZDUucG5nXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gZnJvbSBcIi4uL3B1YmxpYy9mYXEgMi5QTkdcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyBmcm9tIFwiLi4vcHVibGljL2dpdGZpbmRlcjEuUE5HXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gZnJvbSBcIi4uL3B1YmxpYy9kZW1ldHJpc3MuUE5HXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogV29yayAqL1xcclxcblxcclxcbi53b3JrLWlubmVye1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIG5vLXJlcGVhdCBjZW50ZXIgYm90dG9tL2NvdmVyO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xcclxcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6MDsgIFxcclxcbiAgfVxcclxcbiAgLmNhcmQge1xcclxcbiAgICBoZWlnaHQ6IDM3cmVtO1xcclxcbiAgICB3aWR0aDogMjdyZW07XFxyXFxuICAgIG1pbi13aWR0aDogMzUwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxyXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWRhcmstY29sb3IpO1xcclxcbiAgICBib3gtc2hhZG93OiAtMXJlbSAwIDNyZW0gIzAwMDtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuM3M7XFxyXFxuICAgIHRyYW5zaXRpb246IC4zcztcXHJcXG4gICAgc2Nyb2xsLXNuYXAtYWxpZ246IHN0YXJ0O1xcclxcbiAgICBjbGVhcjogYm90aDtcXHJcXG4gICAgLXdlYmtpdC1hbmltYXRpb246IHBhcmEgMnMgMTtcXHJcXG4gICAgICAgICAgICBhbmltYXRpb246IHBhcmEgMnMgMTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgXFxyXFxuICBcXHJcXG4gIC5jYXJkOmZvY3VzLXdpdGhpbn4uY2FyZCwgLmNhcmQ6aG92ZXJ+LmNhcmQge1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMjBweCk7XFxyXFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEyMHB4KTtcXHJcXG4gIH1cXHJcXG4gIC5jYXJkOmhvdmVyIHtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFyZW0pO1xcclxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXJlbSk7XFxyXFxuICB9XFxyXFxuICAuY2FyZDpub3QoOmZpcnN0LWNoaWxkKSB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAtMTIwcHg7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5jYXJkLWxpc3Q6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXHJcXG4gICAgd2lkdGg6IDEwcHg7XFxyXFxuICAgIGhlaWdodDogMTBweDtcXHJcXG4gIH1cXHJcXG4gIC5jYXJkLWxpc3Q6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXHJcXG4gICAgYmFja2dyb3VuZDogIzFiMWIxZDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMnB4IDJweCAycHggaHNsYSgwLDAlLDEwMCUsLjI1KSwgaW5zZXQgLTJweCAtMnB4IDJweCByZ2JhKDAsMCwwLC4yNSk7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5jYXJkLWxpc3Q6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXHJcXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCwjMjAxYzI5LCMyMDFjMjkgMXB4LCMxNzE0MWQgMCwjMTcxNDFkKTtcXHJcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCMyMDFjMjksIzIwMWMyOSAxcHgsIzE3MTQxZCAwLCMxNzE0MWQpO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuY2FyZC1oZWFkZXIge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xcclxcbiAgfVxcclxcbiAgLmNhcmQtaGVhZGVyIHAge1xcclxcbiAgICBmb250LXNpemU6IDE0cHg7XFxyXFxuICAgIG1hcmdpbjogMCAwIDFyZW07XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1saWdodC1jb2xvcik7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5jYXJkLWltZywuY2FyZC1pbWcyLC5jYXJkLWltZzN7XFxyXFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE2cHg7XFxyXFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNnB4O1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTVyZW07XFxyXFxuICAgIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIikgbm8tcmVwZWF0IGNlbnRlciBib3R0b20vY292ZXI7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRhcmstY29sb3IpO1xcclxcbiAgfVxcclxcbiAgLmNhcmQtaW1nMntcXHJcXG4gICAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKSBuby1yZXBlYXQgY2VudGVyIGJvdHRvbS9jb3ZlcjtcXHJcXG4gIH1cXHJcXG4gIC5jYXJkLWltZzN7XFxyXFxuICAgIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIikgbm8tcmVwZWF0IGNlbnRlciBib3R0b20vY292ZXI7XFxyXFxuICB9XFxyXFxuICAuY2FyZC10ZXh0e1xcclxcbiAgICBwYWRkaW5nOiAycmVtO1xcclxcbiAgfVxcclxcbiAgLmNhcmQtdGl0bGV7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luOiAxLjJyZW07XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5jYXJkLWRlc2NyaXB0aW9uIHB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgcGFkZGluZzogLjVyZW0gMS43cmVtO1xcclxcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5jYXJkLWxpbmt7XFxyXFxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdyaWQtZ2FwOiA2cmVtO1xcclxcbiAgICBnYXA6IDZyZW07XFxyXFxuICB9XFxyXFxuICAuY2FyZC1saW5rIGF7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1saWdodC1kYXJrKTtcXHJcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxyXFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMzAwbXM7XFxyXFxuICAgICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMzAwbXM7XFxyXFxuICB9XFxyXFxuICAuY2FyZC1saW5rIGE6aG92ZXJ7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1kaWYtY29sb3IpO1xcclxcbiAgXFxyXFxuICB9XFxyXFxuICAuY2FyZC10ZWNoe1xcclxcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBncmlkLWdhcDogMXJlbTtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbiAgfVxcclxcbiAgLmNhcmQtdGVjaCBwe1xcclxcbiAgICBwYWRkaW5nOiAzcHggOHB4O1xcclxcbiAgICBjb2xvcjogdmFyKC0tZGlmLWNvbG9yKTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZGlmLWNvbG9yKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcblxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zdHlsZS93b3JrLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxTQUFTOztBQUVUO0lBQ0ksaUZBQTBFO0lBQzFFLFdBQVc7SUFDWCxhQUFhO0lBQ2IsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixxQkFBYTtJQUFiLGFBQWE7SUFDYiwrQkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLDJCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsY0FBYztFQUNoQjtFQUNBO0lBQ0UsYUFBYTtJQUNiLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3Qiw2QkFBNkI7SUFDN0IsdUJBQWU7SUFBZixlQUFlO0lBQ2Ysd0JBQXdCO0lBQ3hCLFdBQVc7SUFDWCw0QkFBb0I7WUFBcEIsb0JBQW9CO0VBQ3RCOzs7O0VBSUE7SUFDRSxvQ0FBNEI7WUFBNUIsNEJBQTRCO0VBQzlCO0VBQ0E7SUFDRSxvQ0FBNEI7WUFBNUIsNEJBQTRCO0VBQzlCO0VBQ0E7SUFDRSxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsWUFBWTtFQUNkO0VBQ0E7SUFDRSxtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLHNGQUFzRjtFQUN4Rjs7RUFFQTtJQUNFLCtFQUF3RTtJQUF4RSx3RUFBd0U7RUFDMUU7O0VBRUE7SUFDRSxtQkFBbUI7RUFDckI7RUFDQTtJQUNFLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0UsNEJBQTRCO0lBQzVCLDZCQUE2QjtJQUM3QixjQUFjO0lBQ2QsV0FBVztJQUNYLGFBQWE7SUFDYixpRkFBcUU7SUFDckUsbUNBQW1DO0VBQ3JDO0VBQ0E7SUFDRSxpRkFBeUU7RUFDM0U7RUFDQTtJQUNFLGlGQUF3RTtFQUMxRTtFQUNBO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSxpQkFBaUI7SUFDakIsd0JBQXdCO0lBQ3hCLGtCQUFrQjtJQUNsQixjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsZUFBZTtJQUNmLHFCQUFxQjtJQUNyQix3QkFBd0I7RUFDMUI7O0VBRUE7SUFDRSxxQkFBYTtJQUFiLGFBQWE7SUFDYiwrQkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLDJCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsY0FBUztJQUFULFNBQVM7RUFDWDtFQUNBO0lBQ0Usd0JBQXdCO0lBQ3hCLGlCQUFpQjtJQUNqQixrQ0FBMEI7WUFBMUIsMEJBQTBCO0VBQzVCO0VBQ0E7SUFDRSx1QkFBdUI7O0VBRXpCO0VBQ0E7SUFDRSxxQkFBYTtJQUFiLGFBQWE7SUFDYiwrQkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLDJCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsY0FBUztJQUFULFNBQVM7SUFDVCxtQkFBbUI7RUFDckI7RUFDQTtJQUNFLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsa0NBQWtDO0lBQ2xDLG1CQUFtQjtFQUNyQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBXb3JrICovXFxyXFxuXFxyXFxuLndvcmstaW5uZXJ7XFxyXFxuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vcHVibGljL2JhY2tncm91bmQ1LnBuZycpIG5vLXJlcGVhdCBjZW50ZXIgYm90dG9tL2NvdmVyO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OjA7ICBcXHJcXG4gIH1cXHJcXG4gIC5jYXJkIHtcXHJcXG4gICAgaGVpZ2h0OiAzN3JlbTtcXHJcXG4gICAgd2lkdGg6IDI3cmVtO1xcclxcbiAgICBtaW4td2lkdGg6IDM1MHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1kYXJrLWNvbG9yKTtcXHJcXG4gICAgYm94LXNoYWRvdzogLTFyZW0gMCAzcmVtICMwMDA7XFxyXFxuICAgIHRyYW5zaXRpb246IC4zcztcXHJcXG4gICAgc2Nyb2xsLXNuYXAtYWxpZ246IHN0YXJ0O1xcclxcbiAgICBjbGVhcjogYm90aDtcXHJcXG4gICAgYW5pbWF0aW9uOiBwYXJhIDJzIDE7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIFxcclxcbiAgXFxyXFxuICAuY2FyZDpmb2N1cy13aXRoaW5+LmNhcmQsIC5jYXJkOmhvdmVyfi5jYXJkIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEyMHB4KTtcXHJcXG4gIH1cXHJcXG4gIC5jYXJkOmhvdmVyIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcmVtKTtcXHJcXG4gIH1cXHJcXG4gIC5jYXJkOm5vdCg6Zmlyc3QtY2hpbGQpIHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IC0xMjBweDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmNhcmQtbGlzdDo6LXdlYmtpdC1zY3JvbGxiYXIge1xcclxcbiAgICB3aWR0aDogMTBweDtcXHJcXG4gICAgaGVpZ2h0OiAxMHB4O1xcclxcbiAgfVxcclxcbiAgLmNhcmQtbGlzdDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjMWIxYjFkO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBib3gtc2hhZG93OiBpbnNldCAycHggMnB4IDJweCBoc2xhKDAsMCUsMTAwJSwuMjUpLCBpbnNldCAtMnB4IC0ycHggMnB4IHJnYmEoMCwwLDAsLjI1KTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmNhcmQtbGlzdDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcclxcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIzIwMWMyOSwjMjAxYzI5IDFweCwjMTcxNDFkIDAsIzE3MTQxZCk7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5jYXJkLWhlYWRlciB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IGF1dG87XFxyXFxuICB9XFxyXFxuICAuY2FyZC1oZWFkZXIgcCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gICAgbWFyZ2luOiAwIDAgMXJlbTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LWNvbG9yKTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmNhcmQtaW1nLC5jYXJkLWltZzIsLmNhcmQtaW1nM3tcXHJcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTZweDtcXHJcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE2cHg7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxNXJlbTtcXHJcXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi9wdWJsaWMvZmFxXFxcXCAyLlBORycpIG5vLXJlcGVhdCBjZW50ZXIgYm90dG9tL2NvdmVyO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kYXJrLWNvbG9yKTtcXHJcXG4gIH1cXHJcXG4gIC5jYXJkLWltZzJ7XFxyXFxuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vcHVibGljL2dpdGZpbmRlcjEuUE5HJykgbm8tcmVwZWF0IGNlbnRlciBib3R0b20vY292ZXI7XFxyXFxuICB9XFxyXFxuICAuY2FyZC1pbWcze1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uL3B1YmxpYy9kZW1ldHJpc3MuUE5HJykgbm8tcmVwZWF0IGNlbnRlciBib3R0b20vY292ZXI7XFxyXFxuICB9XFxyXFxuICAuY2FyZC10ZXh0e1xcclxcbiAgICBwYWRkaW5nOiAycmVtO1xcclxcbiAgfVxcclxcbiAgLmNhcmQtdGl0bGV7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luOiAxLjJyZW07XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5jYXJkLWRlc2NyaXB0aW9uIHB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgcGFkZGluZzogLjVyZW0gMS43cmVtO1xcclxcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5jYXJkLWxpbmt7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDZyZW07XFxyXFxuICB9XFxyXFxuICAuY2FyZC1saW5rIGF7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1saWdodC1kYXJrKTtcXHJcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxyXFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDMwMG1zO1xcclxcbiAgfVxcclxcbiAgLmNhcmQtbGluayBhOmhvdmVye1xcclxcbiAgICBjb2xvcjogdmFyKC0tZGlmLWNvbG9yKTtcXHJcXG4gIFxcclxcbiAgfVxcclxcbiAgLmNhcmQtdGVjaHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG4gIH1cXHJcXG4gIC5jYXJkLXRlY2ggcHtcXHJcXG4gICAgcGFkZGluZzogM3B4IDhweDtcXHJcXG4gICAgY29sb3I6IHZhcigtLWRpZi1jb2xvcik7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRpZi1jb2xvcik7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxyXFxuICB9XFxyXFxuICBcXHJcXG5cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiaW1wb3J0IHsgY29uZmlnfSBmcm9tICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtc3ZnLWNvcmUnO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCAqIGFzIGd0YWcgZnJvbSAnLi4vbGliL2d0YWcnXHJcblxyXG5pbXBvcnQgJy4uL3N0eWxlL2luZGV4LmNzcydcclxuaW1wb3J0ICcuLi9zdHlsZS9uYXZiYXIuY3NzJ1xyXG5pbXBvcnQgJy4uL3N0eWxlL2xhbmRpbmcuY3NzJ1xyXG5pbXBvcnQgJy4uL3N0eWxlL2Fib3V0LmNzcydcclxuaW1wb3J0ICcuLi9zdHlsZS9za2lsbHMuY3NzJ1xyXG5pbXBvcnQgJy4uL3N0eWxlL3dvcmsuY3NzJ1xyXG5jb25maWcuYXV0b0FkZENzcyA9IGZhbHNlO1xyXG5cclxuY29uc3QgQXBwID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGhhbmRsZVJvdXRlQ2hhbmdlID0gKHVybCkgPT4ge1xyXG4gICAgICBndGFnLnBhZ2V2aWV3KHVybClcclxuICAgIH1cclxuICAgIHJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBoYW5kbGVSb3V0ZUNoYW5nZSlcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHJvdXRlci5ldmVudHMub2ZmKCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgaGFuZGxlUm91dGVDaGFuZ2UpXHJcbiAgICB9XHJcbiAgfSwgW3JvdXRlci5ldmVudHNdKVxyXG5cclxuICByZXR1cm4gKDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz4pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcCIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvbWVkaWEvZGVtZXRyaXNzLmE0ZmJiZmQyMzRmMzQ3NGU0ZmU0Mjg0NThiZDBhYTFhLlBOR1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvbWVkaWEvZmFxIDIuZDg3Yjc2ZDcwOTQwYzYxNzViNDE4MDRhYWNmZGYwZjYuUE5HXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9tZWRpYS9naXRmaW5kZXIxLjk3YjRiMTM0NGUyZThkYzA1Njk4Yzg0N2JlZDRhZTc1LlBOR1wiOyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS1vbmVPZi02LTEhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9pbmRleC5qcz8/X19uZXh0anNfcG9zdGNzcyEuL3dvcmsuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gZnVuY3Rpb24oZWxlbWVudCl7Ly8gVGhlc2UgZWxlbWVudHMgc2hvdWxkIGFsd2F5cyBleGlzdC4gSWYgdGhleSBkbyBub3QsXG4vLyB0aGlzIGNvZGUgc2hvdWxkIGZhaWwuXG52YXIgYW5jaG9yRWxlbWVudD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fJyk7dmFyIHBhcmVudE5vZGU9YW5jaG9yRWxlbWVudC5wYXJlbnROb2RlOy8vIE5vcm1hbGx5IDxoZWFkPlxuLy8gRWFjaCBzdHlsZSB0YWcgc2hvdWxkIGJlIHBsYWNlZCByaWdodCBiZWZvcmUgb3VyXG4vLyBhbmNob3IuIEJ5IGluc2VydGluZyBiZWZvcmUgYW5kIG5vdCBhZnRlciwgd2UgZG8gbm90XG4vLyBuZWVkIHRvIHRyYWNrIHRoZSBsYXN0IGluc2VydGVkIGVsZW1lbnQuXG5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LGFuY2hvckVsZW1lbnQpO307XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBwO1xuXG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmb3IgKHAgaW4gYikge1xuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LW9uZU9mLTYtMSEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2luZGV4LmpzPz9fX25leHRqc19wb3N0Y3NzIS4vd29yay5jc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtb25lT2YtNi0xIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvaW5kZXguanM/P19fbmV4dGpzX3Bvc3Rjc3MhLi93b3JrLmNzc1wiKTtcblxuICAgICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgY29udGVudC5sb2NhbHMpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiXSwic291cmNlUm9vdCI6IiJ9