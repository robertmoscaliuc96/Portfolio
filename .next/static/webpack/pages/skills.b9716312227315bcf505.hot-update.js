webpackHotUpdate_N_E("pages/skills",{

/***/ "./components/layout/RightNav.js":
/*!***************************************!*\
  !*** ./components/layout/RightNav.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Head */ "./components/layout/Head.js");


var _this = undefined,
    _jsxFileName = "E:\\Portfolio\\components\\layout\\RightNav.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])([" \n.nav-item:nth-child(1){\n  color: ", ";\n  \n}\n.nav-item:nth-child(2){\n  color: ", ";\n  \n}\n.nav-item:nth-child(3){\n  color: ", ";\n  \n}\n.nav-item:nth-child(4){\n  color: ", ";\n  \n}\n\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\n  li a:hover{\n      color:#62CBE7;\n  }\n  .nav-item:nth-child(1){\n  color: #62CBE7\n  color: ", ";\n}\n\n\n  @media (max-width: 968px) {\n      .navbar{\n        display:flex;\n        flex-flow: column nowrap;\n        gap:8rem;\n        height: 0;\n      }\n      ul{\n      flex-flow: column nowrap;\n      padding-top:5rem;\n      font-size:1.4rem;\n      position: relative;\n      justify-content:center;\n      align-items:center;\n      x-index: 1;\n      \n      }\n      .robert-logo{\n        display: none;\n      }\n      .nav-social{\n        margin-top:5rem;\n        font-size: 1.8rem;\n      }\n      .line-social{\n          display:block;\n          height: 8rem;\n      }\n\n    \n    background-color: #212529;\n    position: fixed;\n    transform: ", ";\n    top: 0;\n    right: 0;\n    height: 100vh;\n    width: 300px;\n    padding-top: 5rem;\n    transition: transform 0.3s ease-in-out;\n\n    li {\n      color: #fff;\n      \n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var Ul = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].ul(_templateObject(), function (_ref) {
  var active = _ref.active;
  return active === 1 ? '#62CBE7' : '#4a5157';
}, function (_ref2) {
  var open = _ref2.open;
  return open ? 'translateX(0)' : 'translateX(100%)';
});
_c = Ul;
var Nav = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].ul(_templateObject2(), function (_ref3) {
  var active = _ref3.active;
  return active === 1 ? '#62CBE7' : '#4a5157';
}, function (_ref4) {
  var active = _ref4.active;
  return active === 2 ? '#62CBE7' : '#4a5157';
}, function (_ref5) {
  var active = _ref5.active;
  return active === 3 ? '#62CBE7' : '#4a5157';
}, function (_ref6) {
  var active = _ref6.active;
  return active === 4 ? '#62CBE7' : '#4a5157';
});
_c2 = Nav;

var RightNav = function RightNav(_ref7) {
  _s();

  var open = _ref7.open;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(1),
      active = _useState[0],
      setActive = _useState[1];

  return __jsx(Ul, {
    open: open,
    active: active,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 5
    }
  }, __jsx(_Head__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 5
    }
  }), __jsx("div", {
    className: "navbar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "logo-navbar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 11
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "/robertlogo.png",
    alt: ".robert",
    className: "robert-logo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 26
    }
  }))), __jsx(Nav, {
    className: "page-navbar",
    active: active,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 11
    }
  }, __jsx("ul", {
    className: "nav-list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 15
    }
  }, __jsx("li", {
    className: "nav-item",
    onClick: function onClick() {
      setActive(2);
      console.log(active);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 19
    }
  }, __jsx("i", {
    className: "fas fa-home",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 35
    }
  }))), __jsx("li", {
    className: "nav-item",
    onClick: function onClick() {
      setActive(3);
      console.log(active);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/work",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 19
    }
  }, __jsx("i", {
    className: "fas fa-laptop-code",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 38
    }
  }))), __jsx("li", {
    className: "nav-item",
    onClick: function onClick() {
      setActive(3);
      console.log(active);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/skills",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 19
    }
  }, __jsx("i", {
    className: "fas fa-cog",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 40
    }
  }))), __jsx("li", {
    className: "nav-item",
    onClick: function onClick() {
      setActive(4);
      console.log(active);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/about",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 19
    }
  }, __jsx("i", {
    className: "fas fa-info-circle",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 39
    }
  }))))), __jsx("div", {
    className: "social-navbar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 11
    }
  }, __jsx("ul", {
    className: "nav-social",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 11
    }
  }, __jsx("li", {
    className: "nav-social-item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 15
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "https://github.com/robertmoscaliuc96",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 17
    }
  }, __jsx("i", {
    className: "fab fa-github",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 68
    }
  }))), __jsx("li", {
    className: "nav-social-item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 15
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "https://www.linkedin.com/in/robertmoscalir243004/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 17
    }
  }, __jsx("i", {
    className: "fab fa-linkedin-in",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 81
    }
  }))), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "line-social",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 17
    }
  }))))));
};

_s(RightNav, "rHKvLjmZtKihLSIZmFR3qtAo2y8=");

_c3 = RightNav;
/* harmony default export */ __webpack_exports__["default"] = (RightNav);

var _c, _c2, _c3;

$RefreshReg$(_c, "Ul");
$RefreshReg$(_c2, "Nav");
$RefreshReg$(_c3, "RightNav");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvUmlnaHROYXYuanMiXSwibmFtZXMiOlsiVWwiLCJzdHlsZWQiLCJ1bCIsImFjdGl2ZSIsIm9wZW4iLCJOYXYiLCJSaWdodE5hdiIsInVzZVN0YXRlIiwic2V0QWN0aXZlIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBS0EsSUFBTUEsRUFBRSxHQUFHQyx5REFBTSxDQUFDQyxFQUFWLG9CQU9HO0FBQUEsTUFBR0MsTUFBSCxRQUFHQSxNQUFIO0FBQUEsU0FBaUJBLE1BQU0sS0FBRyxDQUFWLEdBQWUsU0FBZixHQUEyQixTQUEzQztBQUFBLENBUEgsRUEyQ1M7QUFBQSxNQUFHQyxJQUFILFNBQUdBLElBQUg7QUFBQSxTQUFjQSxJQUFJLEdBQUcsZUFBSCxHQUFxQixrQkFBdkM7QUFBQSxDQTNDVCxDQUFSO0tBQU1KLEU7QUF5RE4sSUFBTUssR0FBRyxHQUFHSix5REFBTSxDQUFDQyxFQUFWLHFCQUVFO0FBQUEsTUFBR0MsTUFBSCxTQUFHQSxNQUFIO0FBQUEsU0FBaUJBLE1BQU0sS0FBRyxDQUFWLEdBQWUsU0FBZixHQUEyQixTQUEzQztBQUFBLENBRkYsRUFNRTtBQUFBLE1BQUdBLE1BQUgsU0FBR0EsTUFBSDtBQUFBLFNBQWlCQSxNQUFNLEtBQUcsQ0FBVixHQUFlLFNBQWYsR0FBMkIsU0FBM0M7QUFBQSxDQU5GLEVBVUU7QUFBQSxNQUFHQSxNQUFILFNBQUdBLE1BQUg7QUFBQSxTQUFpQkEsTUFBTSxLQUFHLENBQVYsR0FBZSxTQUFmLEdBQTJCLFNBQTNDO0FBQUEsQ0FWRixFQWNFO0FBQUEsTUFBR0EsTUFBSCxTQUFHQSxNQUFIO0FBQUEsU0FBaUJBLE1BQU0sS0FBRyxDQUFWLEdBQWUsU0FBZixHQUEyQixTQUEzQztBQUFBLENBZEYsQ0FBVDtNQUFNRSxHOztB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YXRpYy93ZWJwYWNrL3BhZ2VzL3NraWxscy5iOTcxNjMxMjIyNzMxNWJjZjUwNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcbmltcG9ydCBIZWFkSW5uZXIgZnJvbSAnLi9IZWFkJ1xyXG5cclxuXHJcblxyXG5cclxuY29uc3QgVWwgPSBzdHlsZWQudWxgXHJcblxyXG4gIGxpIGE6aG92ZXJ7XHJcbiAgICAgIGNvbG9yOiM2MkNCRTc7XHJcbiAgfVxyXG4gIC5uYXYtaXRlbTpudGgtY2hpbGQoMSl7XHJcbiAgY29sb3I6ICM2MkNCRTdcclxuICBjb2xvcjogJHsoeyBhY3RpdmUgfSkgPT4gKGFjdGl2ZT09PTEpID8gJyM2MkNCRTcnIDogJyM0YTUxNTcnfTtcclxufVxyXG5cclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDk2OHB4KSB7XHJcbiAgICAgIC5uYXZiYXJ7XHJcbiAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcclxuICAgICAgICBnYXA6OHJlbTtcclxuICAgICAgICBoZWlnaHQ6IDA7XHJcbiAgICAgIH1cclxuICAgICAgdWx7XHJcbiAgICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcclxuICAgICAgcGFkZGluZy10b3A6NXJlbTtcclxuICAgICAgZm9udC1zaXplOjEuNHJlbTtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG4gICAgICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbiAgICAgIHgtaW5kZXg6IDE7XHJcbiAgICAgIFxyXG4gICAgICB9XHJcbiAgICAgIC5yb2JlcnQtbG9nb3tcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcbiAgICAgIC5uYXYtc29jaWFse1xyXG4gICAgICAgIG1hcmdpbi10b3A6NXJlbTtcclxuICAgICAgICBmb250LXNpemU6IDEuOHJlbTtcclxuICAgICAgfVxyXG4gICAgICAubGluZS1zb2NpYWx7XHJcbiAgICAgICAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgICAgICAgaGVpZ2h0OiA4cmVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyNTI5O1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdHJhbnNmb3JtOiAkeyh7IG9wZW4gfSkgPT4gb3BlbiA/ICd0cmFuc2xhdGVYKDApJyA6ICd0cmFuc2xhdGVYKDEwMCUpJ307XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogNXJlbTtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UtaW4tb3V0O1xyXG5cclxuICAgIGxpIHtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIFxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuY29uc3QgTmF2ID0gc3R5bGVkLnVsYCBcclxuLm5hdi1pdGVtOm50aC1jaGlsZCgxKXtcclxuICBjb2xvcjogJHsoeyBhY3RpdmUgfSkgPT4gKGFjdGl2ZT09PTEpID8gJyM2MkNCRTcnIDogJyM0YTUxNTcnfTtcclxuICBcclxufVxyXG4ubmF2LWl0ZW06bnRoLWNoaWxkKDIpe1xyXG4gIGNvbG9yOiAkeyh7IGFjdGl2ZSB9KSA9PiAoYWN0aXZlPT09MikgPyAnIzYyQ0JFNycgOiAnIzRhNTE1Nyd9O1xyXG4gIFxyXG59XHJcbi5uYXYtaXRlbTpudGgtY2hpbGQoMyl7XHJcbiAgY29sb3I6ICR7KHsgYWN0aXZlIH0pID0+IChhY3RpdmU9PT0zKSA/ICcjNjJDQkU3JyA6ICcjNGE1MTU3J307XHJcbiAgXHJcbn1cclxuLm5hdi1pdGVtOm50aC1jaGlsZCg0KXtcclxuICBjb2xvcjogJHsoeyBhY3RpdmUgfSkgPT4gKGFjdGl2ZT09PTQpID8gJyM2MkNCRTcnIDogJyM0YTUxNTcnfTtcclxuICBcclxufVxyXG5cclxuYCBcclxuXHJcbmNvbnN0IFJpZ2h0TmF2ID0gKHsgb3BlbiB9KSA9PiB7XHJcblxyXG4gIGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZSgxKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxVbCBvcGVuPXtvcGVufSBhY3RpdmU9e2FjdGl2ZX0+XHJcbiAgICA8SGVhZElubmVyLz5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXJcIj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ28tbmF2YmFyXCI+XHJcbiAgICAgICAgICA8TGluayBocmVmPScvJz48aW1nIHNyYz1cIi9yb2JlcnRsb2dvLnBuZ1wiIGFsdD1cIi5yb2JlcnRcIiBjbGFzc05hbWU9XCJyb2JlcnQtbG9nb1wiLz48L0xpbms+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgICAgPE5hdiBjbGFzc05hbWU9XCJwYWdlLW5hdmJhclwiIGFjdGl2ZT17YWN0aXZlfT5cclxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2LWxpc3RcIj5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiIG9uQ2xpY2s9eyAoKT0+IHtcclxuICAgICAgICAgICAgICAgICAgc2V0QWN0aXZlKDIpO1xyXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhhY3RpdmUpXHJcbiAgICAgICAgICAgICAgICB9fSA+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nID48aSBjbGFzc05hbWU9XCJmYXMgZmEtaG9tZVwiPjwvaT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiIG9uQ2xpY2s9eyAoKT0+ICB7XHJcbiAgICAgICAgICAgICAgICAgIHNldEFjdGl2ZSgzKTtcclxuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYWN0aXZlKVxyXG4gICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy93b3JrJz48aSBjbGFzc05hbWU9XCJmYXMgZmEtbGFwdG9wLWNvZGVcIj48L2k+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIiAgb25DbGljaz17ICgpPT4ge1xyXG4gICAgICAgICAgICAgICAgICBzZXRBY3RpdmUoMyk7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGFjdGl2ZSlcclxuICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvc2tpbGxzJz48aSBjbGFzc05hbWU9XCJmYXMgZmEtY29nXCI+PC9pPjwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCIgb25DbGljaz17ICgpPT4gIHtcclxuICAgICAgICAgICAgICAgICAgc2V0QWN0aXZlKDQpO1xyXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhhY3RpdmUpXHJcbiAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nL2Fib3V0Jz48aSBjbGFzc05hbWU9XCJmYXMgZmEtaW5mby1jaXJjbGVcIj48L2k+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L05hdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvY2lhbC1uYXZiYXJcIj5cclxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXYtc29jaWFsXCI+XHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1zb2NpYWwtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgIGhyZWY9J2h0dHBzOi8vZ2l0aHViLmNvbS9yb2JlcnRtb3NjYWxpdWM5Nic+PGkgY2xhc3NOYW1lPVwiZmFiIGZhLWdpdGh1YlwiPjwvaT48L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1zb2NpYWwtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgIGhyZWY9J2h0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9yb2JlcnRtb3NjYWxpcjI0MzAwNC8nPjxpIGNsYXNzTmFtZT1cImZhYiBmYS1saW5rZWRpbi1pblwiPjwvaT48L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmUtc29jaWFsXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9VbD5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJpZ2h0TmF2Il0sInNvdXJjZVJvb3QiOiIifQ==