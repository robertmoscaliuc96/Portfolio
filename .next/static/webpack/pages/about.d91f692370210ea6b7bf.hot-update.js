webpackHotUpdate_N_E("pages/about",{

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
  return open ? '#62CBE7' : '#fff';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvQnVyZ2VyLmpzIl0sIm5hbWVzIjpbIlN0eWxlZEJ1cmdlciIsInN0eWxlZCIsImRpdiIsIm9wZW4iLCJCdXJnZXIiLCJ1c2VTdGF0ZSIsInNldE9wZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxZQUFZLEdBQUdDLHlEQUFNLENBQUNDLEdBQVYsb0JBcUJNO0FBQUEsTUFBR0MsSUFBSCxRQUFHQSxJQUFIO0FBQUEsU0FBY0EsSUFBSSxHQUFHLFNBQUgsR0FBZSxNQUFqQztBQUFBLENBckJOLEVBMkJDO0FBQUEsTUFBR0EsSUFBSCxTQUFHQSxJQUFIO0FBQUEsU0FBY0EsSUFBSSxHQUFHLGVBQUgsR0FBcUIsV0FBdkM7QUFBQSxDQTNCRCxFQStCQztBQUFBLE1BQUdBLElBQUgsU0FBR0EsSUFBSDtBQUFBLFNBQWNBLElBQUksR0FBRyxrQkFBSCxHQUF3QixlQUExQztBQUFBLENBL0JELEVBZ0NEO0FBQUEsTUFBR0EsSUFBSCxTQUFHQSxJQUFIO0FBQUEsU0FBY0EsSUFBSSxHQUFHLENBQUgsR0FBTyxDQUF6QjtBQUFBLENBaENDLEVBb0NDO0FBQUEsTUFBR0EsSUFBSCxTQUFHQSxJQUFIO0FBQUEsU0FBY0EsSUFBSSxHQUFHLGdCQUFILEdBQXNCLFdBQXhDO0FBQUEsQ0FwQ0QsQ0FBbEI7S0FBTUgsWTs7QUF5Q04sSUFBTUksTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUFBLGtCQUNLQyxzREFBUSxDQUFDLEtBQUQsQ0FEYjtBQUFBLE1BQ1pGLElBRFk7QUFBQSxNQUNORyxPQURNOztBQUduQixNQUFHLElBQUgsRUFBUTtBQUNSLFdBQ0UsbUVBQ0UsTUFBQyxZQUFEO0FBQWMsZUFBUyxFQUFDLFFBQXhCO0FBQWlDLFVBQUksRUFBRUgsSUFBdkM7QUFBNkMsYUFBTyxFQUFFO0FBQUEsZUFBTUcsT0FBTyxDQUFDLENBQUNILElBQUYsQ0FBYjtBQUFBLE9BQXREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFLLGVBQVMsRUFBQyxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixFQUVFO0FBQUssZUFBUyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUZGLEVBR0U7QUFBSyxlQUFTLEVBQUMsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSEYsQ0FERixFQU1FLE1BQUMsaURBQUQ7QUFBVSxVQUFJLEVBQUVBLElBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFORixDQURGO0FBVUM7QUFHRixDQWpCRDs7R0FBTUMsTTs7TUFBQUEsTTtBQW1CU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWJvdXQuZDkxZjY5MjM3MDIxMGVhNmI3YmYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBSaWdodE5hdiBmcm9tICcuL1JpZ2h0TmF2JztcclxuXHJcbmNvbnN0IFN0eWxlZEJ1cmdlciA9IHN0eWxlZC5kaXZgXHJcblxyXG4gIHdpZHRoOiAycmVtO1xyXG4gIGhlaWdodDogMnJlbTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAxNXB4O1xyXG4gIHJpZ2h0OiAyMHB4O1xyXG4gIHotaW5kZXg6IDIwO1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIFxyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogOTYwcHgpIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcclxuICB9XHJcblxyXG4gIGRpdiB7XHJcbiAgICB3aWR0aDogMnJlbTtcclxuICAgIGhlaWdodDogMC4yNXJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7KHsgb3BlbiB9KSA9PiBvcGVuID8gJyM2MkNCRTcnIDogJyNmZmYnfTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAxcHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBsaW5lYXI7XHJcblxyXG4gICAgJjpudGgtY2hpbGQoMSkge1xyXG4gICAgICB0cmFuc2Zvcm06ICR7KHsgb3BlbiB9KSA9PiBvcGVuID8gJ3JvdGF0ZSg0NWRlZyknIDogJ3JvdGF0ZSgwKSd9O1xyXG4gICAgfVxyXG5cclxuICAgICY6bnRoLWNoaWxkKDIpIHtcclxuICAgICAgdHJhbnNmb3JtOiAkeyh7IG9wZW4gfSkgPT4gb3BlbiA/ICd0cmFuc2xhdGVYKDEwMCUpJyA6ICd0cmFuc2xhdGVYKDApJ307XHJcbiAgICAgIG9wYWNpdHk6ICR7KHsgb3BlbiB9KSA9PiBvcGVuID8gMCA6IDF9O1xyXG4gICAgfVxyXG5cclxuICAgICY6bnRoLWNoaWxkKDMpIHtcclxuICAgICAgdHJhbnNmb3JtOiAkeyh7IG9wZW4gfSkgPT4gb3BlbiA/ICdyb3RhdGUoLTQ1ZGVnKScgOiAncm90YXRlKDApJ307XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgQnVyZ2VyID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICBpZih0cnVlKXtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPFN0eWxlZEJ1cmdlciBjbGFzc05hbWU9XCJidXJnZXJcIiBvcGVuPXtvcGVufSBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuKCFvcGVuKX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXJzXCIgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhcnNcIiAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFyc1wiIC8+XHJcbiAgICAgIDwvU3R5bGVkQnVyZ2VyPlxyXG4gICAgICA8UmlnaHROYXYgb3Blbj17b3Blbn0vPlxyXG4gICAgPC8+XHJcbiAgKVxyXG4gIH1cclxuICBcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJ1cmdlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==