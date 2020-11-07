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


var _this = undefined,
    _jsxFileName = "E:\\Portfolio\\components\\layout\\Burger.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\n  width: 2rem;\n  height: 2rem;\n  position: fixed;\n  top: 15px;\n  right: 20px;\n  z-index: 20;\n  display: none;\n  cursor: pointer;\n  \n\n  @media (max-width: 960px) {\n    display: flex;\n    justify-content: space-around;\n    flex-flow: column nowrap;\n  }\n\n  div {\n    width: 2rem;\n    height: 0.25rem;\n    background-color: ", ";\n    border-radius: 10px;\n    transform-origin: 1px;\n    transition: all 0.3s linear;\n\n    &:nth-child(1) {\n      transform: ", ";\n    }\n\n    &:nth-child(2) {\n      transform: ", ";\n      opacity: ", ";\n    }\n\n    &:nth-child(3) {\n      transform: ", ";\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var StyledBurger = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject(), function (_ref) {
  var open = _ref.open;
  return open ? ' #62CBE7' : '#fff';
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

  if (true) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(StyledBurger, {
      className: "burger",
      open: open,
      onClick: function onClick() {
        return setOpen(!open);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 7
      }
    }, __jsx("div", {
      className: "bars",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }
    }), __jsx("div", {
      className: "bars",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }
    }), __jsx("div", {
      className: "bars",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }
    })), __jsx(_RightNav__WEBPACK_IMPORTED_MODULE_3__["default"], {
      open: open,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 7
      }
    }));
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvQnVyZ2VyLmpzIl0sIm5hbWVzIjpbIlN0eWxlZEJ1cmdlciIsInN0eWxlZCIsImRpdiIsIm9wZW4iLCJCdXJnZXIiLCJ1c2VTdGF0ZSIsInNldE9wZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxZQUFZLEdBQUdDLHlEQUFNLENBQUNDLEdBQVYsb0JBcUJNO0FBQUEsTUFBR0MsSUFBSCxRQUFHQSxJQUFIO0FBQUEsU0FBY0EsSUFBSSxHQUFHLFVBQUgsR0FBZ0IsTUFBbEM7QUFBQSxDQXJCTixFQTJCQztBQUFBLE1BQUdBLElBQUgsU0FBR0EsSUFBSDtBQUFBLFNBQWNBLElBQUksR0FBRyxlQUFILEdBQXFCLFdBQXZDO0FBQUEsQ0EzQkQsRUErQkM7QUFBQSxNQUFHQSxJQUFILFNBQUdBLElBQUg7QUFBQSxTQUFjQSxJQUFJLEdBQUcsa0JBQUgsR0FBd0IsZUFBMUM7QUFBQSxDQS9CRCxFQWdDRDtBQUFBLE1BQUdBLElBQUgsU0FBR0EsSUFBSDtBQUFBLFNBQWNBLElBQUksR0FBRyxDQUFILEdBQU8sQ0FBekI7QUFBQSxDQWhDQyxFQW9DQztBQUFBLE1BQUdBLElBQUgsU0FBR0EsSUFBSDtBQUFBLFNBQWNBLElBQUksR0FBRyxnQkFBSCxHQUFzQixXQUF4QztBQUFBLENBcENELENBQWxCO0tBQU1ILFk7O0FBeUNOLElBQU1JLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFBQTs7QUFBQSxrQkFDS0Msc0RBQVEsQ0FBQyxLQUFELENBRGI7QUFBQSxNQUNaRixJQURZO0FBQUEsTUFDTkcsT0FETTs7QUFHbkIsTUFBRyxJQUFILEVBQVE7QUFDUixXQUNFLG1FQUNFLE1BQUMsWUFBRDtBQUFjLGVBQVMsRUFBQyxRQUF4QjtBQUFpQyxVQUFJLEVBQUVILElBQXZDO0FBQTZDLGFBQU8sRUFBRTtBQUFBLGVBQU1HLE9BQU8sQ0FBQyxDQUFDSCxJQUFGLENBQWI7QUFBQSxPQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSyxlQUFTLEVBQUMsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsRUFFRTtBQUFLLGVBQVMsRUFBQyxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFGRixFQUdFO0FBQUssZUFBUyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUhGLENBREYsRUFNRSxNQUFDLGlEQUFEO0FBQVUsVUFBSSxFQUFFQSxJQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BTkYsQ0FERjtBQVVDO0FBR0YsQ0FqQkQ7O0dBQU1DLE07O01BQUFBLE07QUFtQlNBLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjkwNjYxMzYwOGM3YTY0OWJkNDQ3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgUmlnaHROYXYgZnJvbSAnLi9SaWdodE5hdic7XHJcblxyXG5jb25zdCBTdHlsZWRCdXJnZXIgPSBzdHlsZWQuZGl2YFxyXG5cclxuICB3aWR0aDogMnJlbTtcclxuICBoZWlnaHQ6IDJyZW07XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMTVweDtcclxuICByaWdodDogMjBweDtcclxuICB6LWluZGV4OiAyMDtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBcclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDk2MHB4KSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XHJcbiAgfVxyXG5cclxuICBkaXYge1xyXG4gICAgd2lkdGg6IDJyZW07XHJcbiAgICBoZWlnaHQ6IDAuMjVyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IG9wZW4gfSkgPT4gb3BlbiA/ICcgIzYyQ0JFNycgOiAnI2ZmZid9O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IDFweDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGxpbmVhcjtcclxuXHJcbiAgICAmOm50aC1jaGlsZCgxKSB7XHJcbiAgICAgIHRyYW5zZm9ybTogJHsoeyBvcGVuIH0pID0+IG9wZW4gPyAncm90YXRlKDQ1ZGVnKScgOiAncm90YXRlKDApJ307XHJcbiAgICB9XHJcblxyXG4gICAgJjpudGgtY2hpbGQoMikge1xyXG4gICAgICB0cmFuc2Zvcm06ICR7KHsgb3BlbiB9KSA9PiBvcGVuID8gJ3RyYW5zbGF0ZVgoMTAwJSknIDogJ3RyYW5zbGF0ZVgoMCknfTtcclxuICAgICAgb3BhY2l0eTogJHsoeyBvcGVuIH0pID0+IG9wZW4gPyAwIDogMX07XHJcbiAgICB9XHJcblxyXG4gICAgJjpudGgtY2hpbGQoMykge1xyXG4gICAgICB0cmFuc2Zvcm06ICR7KHsgb3BlbiB9KSA9PiBvcGVuID8gJ3JvdGF0ZSgtNDVkZWcpJyA6ICdyb3RhdGUoMCknfTtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBCdXJnZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gIGlmKHRydWUpe1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8U3R5bGVkQnVyZ2VyIGNsYXNzTmFtZT1cImJ1cmdlclwiIG9wZW49e29wZW59IG9uQ2xpY2s9eygpID0+IHNldE9wZW4oIW9wZW4pfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhcnNcIiAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFyc1wiIC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXJzXCIgLz5cclxuICAgICAgPC9TdHlsZWRCdXJnZXI+XHJcbiAgICAgIDxSaWdodE5hdiBvcGVuPXtvcGVufS8+XHJcbiAgICA8Lz5cclxuICApXHJcbiAgfVxyXG4gIFxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQnVyZ2VyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9