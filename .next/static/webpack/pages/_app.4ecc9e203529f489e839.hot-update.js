webpackHotUpdate_N_E("pages/_app",{

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
      lineNumber: 27,
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJhdXRvQWRkQ3NzIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwiaGFuZGxlUm91dGVDaGFuZ2UiLCJ1cmwiLCJndGFnIiwiZXZlbnRzIiwib24iLCJvZmYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQUEsd0VBQU0sQ0FBQ0MsVUFBUCxHQUFvQixLQUFwQjs7QUFHQSxJQUFNQyxHQUFHLEdBQUcsU0FBTkEsR0FBTSxPQUE4QjtBQUFBOztBQUFBLE1BQTNCQyxTQUEyQixRQUEzQkEsU0FBMkI7QUFBQSxNQUFoQkMsU0FBZ0IsUUFBaEJBLFNBQWdCO0FBQ3hDLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFDQyxHQUFELEVBQVM7QUFDakNDLHdEQUFBLENBQWNELEdBQWQ7QUFDRCxLQUZEOztBQUdBSixVQUFNLENBQUNNLE1BQVAsQ0FBY0MsRUFBZCxDQUFpQixxQkFBakIsRUFBd0NKLGlCQUF4QztBQUNBLFdBQU8sWUFBTTtBQUNYSCxZQUFNLENBQUNNLE1BQVAsQ0FBY0UsR0FBZCxDQUFrQixxQkFBbEIsRUFBeUNMLGlCQUF6QztBQUNELEtBRkQ7QUFHRCxHQVJRLEVBUU4sQ0FBQ0gsTUFBTSxDQUFDTSxNQUFSLENBUk0sQ0FBVDtBQVVBLFNBQVEsTUFBQyxTQUFELHlGQUFlUCxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBUjtBQUNELENBYkQ7O0dBQU1GLEc7VUFDV0kscUQ7OztLQURYSixHO0FBZVNBLGtFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNGVjYzllMjAzNTI5ZjQ4OWU4MzkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbmZpZ30gZnJvbSAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLXN2Zy1jb3JlJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgKiBhcyBndGFnIGZyb20gJy4uL2xpYi9ndGFnJ1xyXG5cclxuaW1wb3J0ICcuLi9zdHlsZS9pbmRleC5jc3MnXHJcbmltcG9ydCAnLi4vc3R5bGUvbmF2YmFyLmNzcydcclxuaW1wb3J0ICcuLi9zdHlsZS9sYW5kaW5nLmNzcydcclxuaW1wb3J0ICcuLi9zdHlsZS9hYm91dC5jc3MnXHJcbmltcG9ydCAnLi4vc3R5bGUvc2tpbGxzLmNzcydcclxuaW1wb3J0ICcuLi9zdHlsZS93b3JrLmNzcydcclxuY29uZmlnLmF1dG9BZGRDc3MgPSBmYWxzZTtcclxuXHJcblxyXG5jb25zdCBBcHAgPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgaGFuZGxlUm91dGVDaGFuZ2UgPSAodXJsKSA9PiB7XHJcbiAgICAgIGd0YWcucGFnZXZpZXcodXJsKVxyXG4gICAgfVxyXG4gICAgcm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VDb21wbGV0ZScsIGhhbmRsZVJvdXRlQ2hhbmdlKVxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgcm91dGVyLmV2ZW50cy5vZmYoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBoYW5kbGVSb3V0ZUNoYW5nZSlcclxuICAgIH1cclxuICB9LCBbcm91dGVyLmV2ZW50c10pXHJcblxyXG4gIHJldHVybiAoPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPilcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=