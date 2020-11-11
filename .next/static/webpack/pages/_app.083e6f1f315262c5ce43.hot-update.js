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
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_gtag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/gtag */ "./lib/gtag.js");
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../style/index.css */ "./style/index.css");
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_style_index_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _style_navbar_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../style/navbar.css */ "./style/navbar.css");
/* harmony import */ var _style_navbar_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_style_navbar_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _style_landing_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../style/landing.css */ "./style/landing.css");
/* harmony import */ var _style_landing_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_style_landing_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _style_about_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../style/about.css */ "./style/about.css");
/* harmony import */ var _style_about_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_style_about_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _style_skills_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../style/skills.css */ "./style/skills.css");
/* harmony import */ var _style_skills_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_style_skills_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _style_work_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../style/work.css */ "./style/work.css");
/* harmony import */ var _style_work_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_style_work_css__WEBPACK_IMPORTED_MODULE_11__);



var _this = undefined,
    _jsxFileName = "E:\\Portfolio\\pages\\_app.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;










_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_3__["config"].autoAddCss = false;

var App = function App(_ref) {
  _s();

  var Component = _ref.Component,
      pageProps = _ref.pageProps;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var handleRouteChange = function handleRouteChange(url) {
      _lib_gtag__WEBPACK_IMPORTED_MODULE_5__["pageview"](url);
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return function () {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  var _useState = useState(1),
      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      active = _useState2[0],
      setActive = _useState2[1];

  return __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }));
};

_s(App, "sBbjtFhqWEavGlkgOREjHnT0gMQ=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJhdXRvQWRkQ3NzIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwiaGFuZGxlUm91dGVDaGFuZ2UiLCJ1cmwiLCJndGFnIiwiZXZlbnRzIiwib24iLCJvZmYiLCJ1c2VTdGF0ZSIsImFjdGl2ZSIsInNldEFjdGl2ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FBLHdFQUFNLENBQUNDLFVBQVAsR0FBb0IsS0FBcEI7O0FBR0EsSUFBTUMsR0FBRyxHQUFHLFNBQU5BLEdBQU0sT0FBOEI7QUFBQTs7QUFBQSxNQUEzQkMsU0FBMkIsUUFBM0JBLFNBQTJCO0FBQUEsTUFBaEJDLFNBQWdCLFFBQWhCQSxTQUFnQjtBQUN4QyxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0FDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1DLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQ0MsR0FBRCxFQUFTO0FBQ2pDQyx3REFBQSxDQUFjRCxHQUFkO0FBQ0QsS0FGRDs7QUFHQUosVUFBTSxDQUFDTSxNQUFQLENBQWNDLEVBQWQsQ0FBaUIscUJBQWpCLEVBQXdDSixpQkFBeEM7QUFDQSxXQUFPLFlBQU07QUFDWEgsWUFBTSxDQUFDTSxNQUFQLENBQWNFLEdBQWQsQ0FBa0IscUJBQWxCLEVBQXlDTCxpQkFBekM7QUFDRCxLQUZEO0FBR0QsR0FSUSxFQVFOLENBQUNILE1BQU0sQ0FBQ00sTUFBUixDQVJNLENBQVQ7O0FBRndDLGtCQVlaRyxRQUFRLENBQUMsQ0FBRCxDQVpJO0FBQUE7QUFBQSxNQVlqQ0MsTUFaaUM7QUFBQSxNQVl6QkMsU0FaeUI7O0FBY3hDLFNBQVEsTUFBQyxTQUFELHlGQUFlWixTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBUjtBQUNELENBZkQ7O0dBQU1GLEc7VUFDV0kscUQ7OztLQURYSixHO0FBaUJTQSxrRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjA4M2U2ZjFmMzE1MjYyYzVjZTQzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25maWd9IGZyb20gJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZSc7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCx1cyB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0ICogYXMgZ3RhZyBmcm9tICcuLi9saWIvZ3RhZydcclxuXHJcbmltcG9ydCAnLi4vc3R5bGUvaW5kZXguY3NzJ1xyXG5pbXBvcnQgJy4uL3N0eWxlL25hdmJhci5jc3MnXHJcbmltcG9ydCAnLi4vc3R5bGUvbGFuZGluZy5jc3MnXHJcbmltcG9ydCAnLi4vc3R5bGUvYWJvdXQuY3NzJ1xyXG5pbXBvcnQgJy4uL3N0eWxlL3NraWxscy5jc3MnXHJcbmltcG9ydCAnLi4vc3R5bGUvd29yay5jc3MnXHJcbmNvbmZpZy5hdXRvQWRkQ3NzID0gZmFsc2U7XHJcblxyXG5cclxuY29uc3QgQXBwID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGhhbmRsZVJvdXRlQ2hhbmdlID0gKHVybCkgPT4ge1xyXG4gICAgICBndGFnLnBhZ2V2aWV3KHVybClcclxuICAgIH1cclxuICAgIHJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBoYW5kbGVSb3V0ZUNoYW5nZSlcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHJvdXRlci5ldmVudHMub2ZmKCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgaGFuZGxlUm91dGVDaGFuZ2UpXHJcbiAgICB9XHJcbiAgfSwgW3JvdXRlci5ldmVudHNdKVxyXG5cclxuICBjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUoMSk7XHJcblxyXG4gIHJldHVybiAoPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPilcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=