webpackHotUpdate_N_E("pages/index",{

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
      setActive(4);
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

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/readOnlyError.js":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvUmlnaHROYXYuanMiXSwibmFtZXMiOlsiVWwiLCJzdHlsZWQiLCJ1bCIsImFjdGl2ZSIsIm9wZW4iLCJOYXYiLCJSaWdodE5hdiIsInVzZVN0YXRlIiwic2V0QWN0aXZlIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBS0EsSUFBTUEsRUFBRSxHQUFHQyx5REFBTSxDQUFDQyxFQUFWLG9CQU9HO0FBQUEsTUFBR0MsTUFBSCxRQUFHQSxNQUFIO0FBQUEsU0FBaUJBLE1BQU0sS0FBRyxDQUFWLEdBQWUsU0FBZixHQUEyQixTQUEzQztBQUFBLENBUEgsRUEyQ1M7QUFBQSxNQUFHQyxJQUFILFNBQUdBLElBQUg7QUFBQSxTQUFjQSxJQUFJLEdBQUcsZUFBSCxHQUFxQixrQkFBdkM7QUFBQSxDQTNDVCxDQUFSO0tBQU1KLEU7QUF5RE4sSUFBTUssR0FBRyxHQUFHSix5REFBTSxDQUFDQyxFQUFWLHFCQUVFO0FBQUEsTUFBR0MsTUFBSCxTQUFHQSxNQUFIO0FBQUEsU0FBaUJBLE1BQU0sS0FBRyxDQUFWLEdBQWUsU0FBZixHQUEyQixTQUEzQztBQUFBLENBRkYsRUFNRTtBQUFBLE1BQUdBLE1BQUgsU0FBR0EsTUFBSDtBQUFBLFNBQWlCQSxNQUFNLEtBQUcsQ0FBVixHQUFlLFNBQWYsR0FBMkIsU0FBM0M7QUFBQSxDQU5GLEVBVUU7QUFBQSxNQUFHQSxNQUFILFNBQUdBLE1BQUg7QUFBQSxTQUFpQkEsTUFBTSxLQUFHLENBQVYsR0FBZSxTQUFmLEdBQTJCLFNBQTNDO0FBQUEsQ0FWRixFQWNFO0FBQUEsTUFBR0EsTUFBSCxTQUFHQSxNQUFIO0FBQUEsU0FBaUJBLE1BQU0sS0FBRyxDQUFWLEdBQWUsU0FBZixHQUEyQixTQUEzQztBQUFBLENBZEYsQ0FBVDtNQUFNRSxHOztB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YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjAxM2EzNWE5OTg3ZjZhYWVkMWJiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuaW1wb3J0IEhlYWRJbm5lciBmcm9tICcuL0hlYWQnXHJcblxyXG5cclxuXHJcblxyXG5jb25zdCBVbCA9IHN0eWxlZC51bGBcclxuXHJcbiAgbGkgYTpob3ZlcntcclxuICAgICAgY29sb3I6IzYyQ0JFNztcclxuICB9XHJcbiAgLm5hdi1pdGVtOm50aC1jaGlsZCgxKXtcclxuICBjb2xvcjogIzYyQ0JFN1xyXG4gIGNvbG9yOiAkeyh7IGFjdGl2ZSB9KSA9PiAoYWN0aXZlPT09MSkgPyAnIzYyQ0JFNycgOiAnIzRhNTE1Nyd9O1xyXG59XHJcblxyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogOTY4cHgpIHtcclxuICAgICAgLm5hdmJhcntcclxuICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xyXG4gICAgICAgIGdhcDo4cmVtO1xyXG4gICAgICAgIGhlaWdodDogMDtcclxuICAgICAgfVxyXG4gICAgICB1bHtcclxuICAgICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xyXG4gICAgICBwYWRkaW5nLXRvcDo1cmVtO1xyXG4gICAgICBmb250LXNpemU6MS40cmVtO1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XHJcbiAgICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICAgICAgeC1pbmRleDogMTtcclxuICAgICAgXHJcbiAgICAgIH1cclxuICAgICAgLnJvYmVydC1sb2dve1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgIH1cclxuICAgICAgLm5hdi1zb2NpYWx7XHJcbiAgICAgICAgbWFyZ2luLXRvcDo1cmVtO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xyXG4gICAgICB9XHJcbiAgICAgIC5saW5lLXNvY2lhbHtcclxuICAgICAgICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICAgICAgICBoZWlnaHQ6IDhyZW07XHJcbiAgICAgIH1cclxuXHJcbiAgICBcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTI1Mjk7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0cmFuc2Zvcm06ICR7KHsgb3BlbiB9KSA9PiBvcGVuID8gJ3RyYW5zbGF0ZVgoMCknIDogJ3RyYW5zbGF0ZVgoMTAwJSknfTtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIHBhZGRpbmctdG9wOiA1cmVtO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1pbi1vdXQ7XHJcblxyXG4gICAgbGkge1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5jb25zdCBOYXYgPSBzdHlsZWQudWxgIFxyXG4ubmF2LWl0ZW06bnRoLWNoaWxkKDEpe1xyXG4gIGNvbG9yOiAkeyh7IGFjdGl2ZSB9KSA9PiAoYWN0aXZlPT09MSkgPyAnIzYyQ0JFNycgOiAnIzRhNTE1Nyd9O1xyXG4gIFxyXG59XHJcbi5uYXYtaXRlbTpudGgtY2hpbGQoMil7XHJcbiAgY29sb3I6ICR7KHsgYWN0aXZlIH0pID0+IChhY3RpdmU9PT0yKSA/ICcjNjJDQkU3JyA6ICcjNGE1MTU3J307XHJcbiAgXHJcbn1cclxuLm5hdi1pdGVtOm50aC1jaGlsZCgzKXtcclxuICBjb2xvcjogJHsoeyBhY3RpdmUgfSkgPT4gKGFjdGl2ZT09PTMpID8gJyM2MkNCRTcnIDogJyM0YTUxNTcnfTtcclxuICBcclxufVxyXG4ubmF2LWl0ZW06bnRoLWNoaWxkKDQpe1xyXG4gIGNvbG9yOiAkeyh7IGFjdGl2ZSB9KSA9PiAoYWN0aXZlPT09NCkgPyAnIzYyQ0JFNycgOiAnIzRhNTE1Nyd9O1xyXG4gIFxyXG59XHJcblxyXG5gIFxyXG5cclxuY29uc3QgUmlnaHROYXYgPSAoeyBvcGVuIH0pID0+IHtcclxuXHJcbiAgY29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKDEpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFVsIG9wZW49e29wZW59IGFjdGl2ZT17YWN0aXZlfT5cclxuICAgIDxIZWFkSW5uZXIvPlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhclwiPlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nby1uYXZiYXJcIj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nPjxpbWcgc3JjPVwiL3JvYmVydGxvZ28ucG5nXCIgYWx0PVwiLnJvYmVydFwiIGNsYXNzTmFtZT1cInJvYmVydC1sb2dvXCIvPjwvTGluaz5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgICA8TmF2IGNsYXNzTmFtZT1cInBhZ2UtbmF2YmFyXCIgYWN0aXZlPXthY3RpdmV9PlxyXG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXYtbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCIgb25DbGljaz17ICgpPT4ge1xyXG4gICAgICAgICAgICAgICAgICBzZXRBY3RpdmUoMik7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGFjdGl2ZSlcclxuICAgICAgICAgICAgICAgIH19ID5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nLycgPjxpIGNsYXNzTmFtZT1cImZhcyBmYS1ob21lXCI+PC9pPjwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCIgb25DbGljaz17ICgpPT4gIHtcclxuICAgICAgICAgICAgICAgICAgc2V0QWN0aXZlKDMpO1xyXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhhY3RpdmUpXHJcbiAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nL3dvcmsnPjxpIGNsYXNzTmFtZT1cImZhcyBmYS1sYXB0b3AtY29kZVwiPjwvaT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiICBvbkNsaWNrPXsgKCk9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHNldEFjdGl2ZSg0KTtcclxuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYWN0aXZlKVxyXG4gICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9za2lsbHMnPjxpIGNsYXNzTmFtZT1cImZhcyBmYS1jb2dcIj48L2k+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIiBvbkNsaWNrPXsgKCk9PiAge1xyXG4gICAgICAgICAgICAgICAgICBzZXRBY3RpdmUoNCk7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGFjdGl2ZSlcclxuICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvYWJvdXQnPjxpIGNsYXNzTmFtZT1cImZhcyBmYS1pbmZvLWNpcmNsZVwiPjwvaT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvTmF2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29jaWFsLW5hdmJhclwiPlxyXG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdi1zb2NpYWxcIj5cclxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LXNvY2lhbC1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8TGluayAgaHJlZj0naHR0cHM6Ly9naXRodWIuY29tL3JvYmVydG1vc2NhbGl1Yzk2Jz48aSBjbGFzc05hbWU9XCJmYWIgZmEtZ2l0aHViXCI+PC9pPjwvTGluaz5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LXNvY2lhbC1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8TGluayAgaHJlZj0naHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL3JvYmVydG1vc2NhbGlyMjQzMDA0Lyc+PGkgY2xhc3NOYW1lPVwiZmFiIGZhLWxpbmtlZGluLWluXCI+PC9pPjwvTGluaz5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluZS1zb2NpYWxcIj48L2Rpdj5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L1VsPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmlnaHROYXYiXSwic291cmNlUm9vdCI6IiJ9