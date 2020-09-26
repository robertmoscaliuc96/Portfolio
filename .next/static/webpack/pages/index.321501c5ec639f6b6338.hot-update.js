webpackHotUpdate_N_E("pages/index",{

/***/ "./components/layout/Burger.js":
/*!*************************************!*\
  !*** ./components/layout/Burger.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _RightNav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RightNav */ "./components/layout/RightNav.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);


var _this = undefined,
    _jsxFileName = "E:\\Portfolio\\components\\layout\\Burger.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 2rem;\n  height: 2rem;\n  position: fixed;\n  top: 15px;\n  right: 20px;\n  z-index: 20;\n  display: none;\n\n  @media (max-width: 968px) {\n    display: flex;\n    justify-content: space-around;\n    flex-flow: column nowrap;\n  }\n\n  div {\n    width: 2rem;\n    height: 0.25rem;\n    background-color: ", ";\n    border-radius: 10px;\n    transform-origin: 1px;\n    transition: all 0.3s linear;\n\n    &:nth-child(1) {\n      transform: ", ";\n    }\n\n    &:nth-child(2) {\n      transform: ", ";\n      opacity: ", ";\n    }\n\n    &:nth-child(3) {\n      transform: ", ";\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var StyledBurger = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject(), function (_ref) {
  var open = _ref.open;
  return open ? '#fff' : '#fff';
}, function (_ref2) {
  var open = _ref2.open;
  return open ? 'rotate(45deg)' : 'rotate(0)';
}, function (_ref3) {
  var open = _ref3.open;
  return open ? 'translateX(100%)' : 'translateX(0)';
}, function (_ref4) {
  var open = _ref4.open;
  return open ? 0 : 1;
}, function (_ref5) {
  var open = _ref5.open;
  return open ? 'rotate(-45deg)' : 'rotate(0)';
});
_c = StyledBurger;

var Burger = function Burger() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      open = _useState[0],
      setOpen = _useState[1];

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(StyledBurger, {
    open: open,
    onClick: function onClick() {
      return setOpen(!open);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "bars",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "bars",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "bars",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  })), __jsx(_RightNav__WEBPACK_IMPORTED_MODULE_3__["default"], {
    open: open,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }
  }));
};

_s(Burger, "xG1TONbKtDWtdOTrXaTAsNhPg/Q=");

_c2 = Burger;
/* harmony default export */ __webpack_exports__["default"] = (Burger);

var _c, _c2;

$RefreshReg$(_c, "StyledBurger");
$RefreshReg$(_c2, "Burger");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvQnVyZ2VyLmpzIl0sIm5hbWVzIjpbIlN0eWxlZEJ1cmdlciIsInN0eWxlZCIsImRpdiIsIm9wZW4iLCJCdXJnZXIiLCJ1c2VTdGF0ZSIsInNldE9wZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsWUFBWSxHQUFHQyx5REFBTSxDQUFDQyxHQUFWLG9CQWtCTTtBQUFBLE1BQUdDLElBQUgsUUFBR0EsSUFBSDtBQUFBLFNBQWNBLElBQUksR0FBRyxNQUFILEdBQVksTUFBOUI7QUFBQSxDQWxCTixFQXdCQztBQUFBLE1BQUdBLElBQUgsU0FBR0EsSUFBSDtBQUFBLFNBQWNBLElBQUksR0FBRyxlQUFILEdBQXFCLFdBQXZDO0FBQUEsQ0F4QkQsRUE0QkM7QUFBQSxNQUFHQSxJQUFILFNBQUdBLElBQUg7QUFBQSxTQUFjQSxJQUFJLEdBQUcsa0JBQUgsR0FBd0IsZUFBMUM7QUFBQSxDQTVCRCxFQTZCRDtBQUFBLE1BQUdBLElBQUgsU0FBR0EsSUFBSDtBQUFBLFNBQWNBLElBQUksR0FBRyxDQUFILEdBQU8sQ0FBekI7QUFBQSxDQTdCQyxFQWlDQztBQUFBLE1BQUdBLElBQUgsU0FBR0EsSUFBSDtBQUFBLFNBQWNBLElBQUksR0FBRyxnQkFBSCxHQUFzQixXQUF4QztBQUFBLENBakNELENBQWxCO0tBQU1ILFk7O0FBc0NOLElBQU1JLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFBQTs7QUFBQSxrQkFDS0Msc0RBQVEsQ0FBQyxLQUFELENBRGI7QUFBQSxNQUNaRixJQURZO0FBQUEsTUFDTkcsT0FETTs7QUFHbkIsU0FDRSxtRUFDRSxNQUFDLFlBQUQ7QUFBYyxRQUFJLEVBQUVILElBQXBCO0FBQTBCLFdBQU8sRUFBRTtBQUFBLGFBQU1HLE9BQU8sQ0FBQyxDQUFDSCxJQUFGLENBQWI7QUFBQSxLQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFLLGFBQVMsRUFBQyxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQUdFO0FBQUssYUFBUyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhGLENBREYsRUFNRSxNQUFDLGlEQUFEO0FBQVUsUUFBSSxFQUFFQSxJQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTkYsQ0FERjtBQVVELENBYkQ7O0dBQU1DLE07O01BQUFBLE07QUFlU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMzIxNTAxYzVlYzYzOWY2YjYzMzguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBSaWdodE5hdiBmcm9tICcuL1JpZ2h0TmF2JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmNvbnN0IFN0eWxlZEJ1cmdlciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDJyZW07XHJcbiAgaGVpZ2h0OiAycmVtO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDE1cHg7XHJcbiAgcmlnaHQ6IDIwcHg7XHJcbiAgei1pbmRleDogMjA7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDk2OHB4KSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XHJcbiAgfVxyXG5cclxuICBkaXYge1xyXG4gICAgd2lkdGg6IDJyZW07XHJcbiAgICBoZWlnaHQ6IDAuMjVyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IG9wZW4gfSkgPT4gb3BlbiA/ICcjZmZmJyA6ICcjZmZmJ307XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogMXB4O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgbGluZWFyO1xyXG5cclxuICAgICY6bnRoLWNoaWxkKDEpIHtcclxuICAgICAgdHJhbnNmb3JtOiAkeyh7IG9wZW4gfSkgPT4gb3BlbiA/ICdyb3RhdGUoNDVkZWcpJyA6ICdyb3RhdGUoMCknfTtcclxuICAgIH1cclxuXHJcbiAgICAmOm50aC1jaGlsZCgyKSB7XHJcbiAgICAgIHRyYW5zZm9ybTogJHsoeyBvcGVuIH0pID0+IG9wZW4gPyAndHJhbnNsYXRlWCgxMDAlKScgOiAndHJhbnNsYXRlWCgwKSd9O1xyXG4gICAgICBvcGFjaXR5OiAkeyh7IG9wZW4gfSkgPT4gb3BlbiA/IDAgOiAxfTtcclxuICAgIH1cclxuXHJcbiAgICAmOm50aC1jaGlsZCgzKSB7XHJcbiAgICAgIHRyYW5zZm9ybTogJHsoeyBvcGVuIH0pID0+IG9wZW4gPyAncm90YXRlKC00NWRlZyknIDogJ3JvdGF0ZSgwKSd9O1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IEJ1cmdlciA9ICgpID0+IHtcclxuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPFN0eWxlZEJ1cmdlciBvcGVuPXtvcGVufSBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuKCFvcGVuKX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXJzXCIgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhcnNcIi8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXJzXCIvPlxyXG4gICAgICA8L1N0eWxlZEJ1cmdlcj5cclxuICAgICAgPFJpZ2h0TmF2IG9wZW49e29wZW59Lz5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQnVyZ2VyXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=