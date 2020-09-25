webpackHotUpdate_N_E("pages/projects",{

/***/ "./components/layout/RightNav.js":
/*!***************************************!*\
  !*** ./components/layout/RightNav.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);


var _this = undefined,
    _jsxFileName = "E:\\Portfolio\\components\\layout\\RightNav.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  list-style: none;\n  display: flex;\n  flex-flow: row nowrap;\n\n  li {\n    padding: 18px 10 px;\n  }\n\n  @media (max-width: 968px) {\n    flex-flow: column nowrap;\n    background-color: #05344F;\n    position: fixed;\n    transform: ", ";\n    top: 0;\n    right: 0;\n    height: 100vh;\n    width: 300px;\n    padding-top: 3.1rem;\n    transition: transform 0.3s ease-in-out;\n\n    li {\n      color: #fff;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var Ul = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].ul(_templateObject(), function (_ref) {
  var open = _ref.open;
  return open ? 'translateX(0)' : 'translateX(100%)';
});
_c = Ul;

var RightNav = function RightNav(_ref2) {
  var open = _ref2.open;

  /*   const underline = e => {
      e.target.classList.toggle("current")
    } */
  return __jsx(Ul, {
    open: open,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }
  }, __jsx("ul", {
    className: "nav-list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, __jsx("li", {
    className: "nav-item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }, __jsx("a", {
    className: "nav-link",
    to: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }, "Home")), __jsx("li", {
    className: "nav-item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 11
    }
  }, __jsx("a", {
    className: "nav-link",
    to: "/join",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }, "Projects")), __jsx("li", {
    className: "nav-item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 11
    }
  }, __jsx("a", {
    className: "nav-link",
    to: "/contact",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }
  }, "About"))));
};

_c2 = RightNav;
/* harmony default export */ __webpack_exports__["default"] = (RightNav);

var _c, _c2;

$RefreshReg$(_c, "Ul");
$RefreshReg$(_c2, "RightNav");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvUmlnaHROYXYuanMiXSwibmFtZXMiOlsiVWwiLCJzdHlsZWQiLCJ1bCIsIm9wZW4iLCJSaWdodE5hdiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLEVBQUUsR0FBR0MseURBQU0sQ0FBQ0MsRUFBVixvQkFhUztBQUFBLE1BQUdDLElBQUgsUUFBR0EsSUFBSDtBQUFBLFNBQWNBLElBQUksR0FBRyxlQUFILEdBQXFCLGtCQUF2QztBQUFBLENBYlQsQ0FBUjtLQUFNSCxFOztBQTZCTixJQUFNSSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxRQUFjO0FBQUEsTUFBWEQsSUFBVyxTQUFYQSxJQUFXOztBQUMvQjs7O0FBR0UsU0FDRSxNQUFDLEVBQUQ7QUFBSSxRQUFJLEVBQUVBLElBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUksYUFBUyxFQUFDLFVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksYUFBUyxFQUFDLFVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFDLFVBQWI7QUFBd0IsTUFBRSxFQUFDLEdBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixDQURGLEVBS0U7QUFBSSxhQUFTLEVBQUMsVUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUMsVUFBYjtBQUF3QixNQUFFLEVBQUMsT0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixDQUxGLEVBU0U7QUFBSSxhQUFTLEVBQUMsVUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUMsVUFBYjtBQUF3QixNQUFFLEVBQUMsVUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLENBVEYsQ0FESixDQURGO0FBaUJELENBckJEOztNQUFNQyxRO0FBdUJTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9qZWN0cy41Y2RjMWYwMmY5M2ExMGQ1YzcyNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxyXG5cclxuY29uc3QgVWwgPSBzdHlsZWQudWxgXHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcclxuXHJcbiAgbGkge1xyXG4gICAgcGFkZGluZzogMThweCAxMCBweDtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA5NjhweCkge1xyXG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA1MzQ0RjtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRyYW5zZm9ybTogJHsoeyBvcGVuIH0pID0+IG9wZW4gPyAndHJhbnNsYXRlWCgwKScgOiAndHJhbnNsYXRlWCgxMDAlKSd9O1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDMuMXJlbTtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UtaW4tb3V0O1xyXG5cclxuICAgIGxpIHtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuXHJcblxyXG5jb25zdCBSaWdodE5hdiA9ICh7IG9wZW4gfSkgPT4ge1xyXG4vKiAgIGNvbnN0IHVuZGVybGluZSA9IGUgPT4ge1xyXG4gICAgZS50YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZShcImN1cnJlbnRcIilcclxuICB9ICovXHJcbiAgcmV0dXJuIChcclxuICAgIDxVbCBvcGVuPXtvcGVufT5cclxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2LWxpc3RcIj5cclxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiIHRvPScvJyA+SG9tZTwvYT5cclxuICAgICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgdG89Jy9qb2luJz5Qcm9qZWN0czwvYT5cclxuICAgICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgdG89Jy9jb250YWN0Jz5BYm91dDwvYT5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgIDwvdWw+XHJcbiAgICA8L1VsPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmlnaHROYXYiXSwic291cmNlUm9vdCI6IiJ9