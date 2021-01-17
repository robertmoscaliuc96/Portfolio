webpackHotUpdate_N_E("pages/about",{

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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);


var _this = undefined,
    _jsxFileName = "E:\\Portfolio\\components\\layout\\RightNav.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\n  li a:hover{\n      color:#62CBE7;\n  }\n\n  @media (max-width: 768px) {\n      .navbar{\n        display:flex;\n        flex-flow: column nowrap;\n        gap:8rem;\n        height: 0;\n      }\n      ul{\n      flex-flow: column nowrap;\n      padding-top:5rem;\n      font-size:1.4rem;\n      position: relative;\n      justify-content:center;\n      align-items:center;\n\n      \n      \n      }\n      .robert-logo{\n        display: none;\n      }\n      .nav-social{\n        margin-top:5rem;\n        font-size: 1.8rem;\n      }\n      .line-social{\n          display:block;\n          height: 8rem;\n      }\n      .active{\n   color:var(--dif-color);\n }\n \n\n    \n    background-color: #212529;\n    position: fixed;\n    transform: ", ";\n    top: 0;\n    right: 0;\n    height: 100vh;\n    width: 300px;\n    padding-top: 5rem;\n    transition: transform 0.3s ease-in-out;\n\n    li {\n      color: #fff;\n      \n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var Ul = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].ul(_templateObject(), function (_ref) {
  var open = _ref.open;
  return open ? 'translateX(0)' : 'translateX(100%)';
});
_c = Ul;

var RightNav = function RightNav(_ref2) {
  _s();

  var open = _ref2.open;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(1),
      active = _useState[0],
      setActive = _useState[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();

  function isActive(route) {
    if (route == router.pathname) {
      return "active";
    } else "nav-item";
  }

  return __jsx(Ul, {
    open: open,
    active: active,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 5
    }
  }, __jsx(_Head__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 5
    }
  }), __jsx("div", {
    className: "navbar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "logo-navbar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 11
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "/robertlogo.png",
    alt: ".robert",
    className: "robert-logo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 26
    }
  }))), __jsx("div", {
    className: "page-navbar",
    active: active,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 11
    }
  }, __jsx("ul", {
    className: "nav-list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 15
    }
  }, __jsx("li", {
    className: "nav-item ".concat(isActive('/')),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 19
    }
  }, __jsx("i", {
    className: "fas fa-home",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 35
    }
  }))), __jsx("li", {
    className: "nav-item ".concat(isActive('/work')),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/work",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 19
    }
  }, __jsx("i", {
    className: "fas fa-laptop-code",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 38
    }
  }))), __jsx("li", {
    className: "nav-item ".concat(isActive('/skills')),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/skills",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 19
    }
  }, __jsx("i", {
    className: "fas fa-cog",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 40
    }
  }))), __jsx("li", {
    className: "nav-item ".concat(isActive('/about')),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/about",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 19
    }
  }, __jsx("i", {
    className: "fas fa-info-circle",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 39
    }
  }))))), __jsx("div", {
    className: "social-navbar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 11
    }
  }, __jsx("ul", {
    className: "nav-social",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 11
    }
  }, __jsx("li", {
    className: "nav-social-item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 15
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "https://github.com/robertmoscaliuc96",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 17
    }
  }, __jsx("i", {
    className: "fab fa-github",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 68
    }
  }))), __jsx("li", {
    className: "nav-social-item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 15
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "https://www.linkedin.com/in/robertmoscalir243004/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 17
    }
  }, __jsx("i", {
    className: "fab fa-linkedin-in",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 81
    }
  }))), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "line-social",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 17
    }
  }))))));
};

_s(RightNav, "1J2PsxnD79Ro0y3u0KgEJHINcc8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"]];
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvUmlnaHROYXYuanMiXSwibmFtZXMiOlsiVWwiLCJzdHlsZWQiLCJ1bCIsIm9wZW4iLCJSaWdodE5hdiIsInVzZVN0YXRlIiwiYWN0aXZlIiwic2V0QWN0aXZlIiwicm91dGVyIiwidXNlUm91dGVyIiwiaXNBY3RpdmUiLCJyb3V0ZSIsInBhdGhuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQSxJQUFNQSxFQUFFLEdBQUdDLHlEQUFNLENBQUNDLEVBQVYsb0JBMkNTO0FBQUEsTUFBR0MsSUFBSCxRQUFHQSxJQUFIO0FBQUEsU0FBY0EsSUFBSSxHQUFHLGVBQUgsR0FBcUIsa0JBQXZDO0FBQUEsQ0EzQ1QsQ0FBUjtLQUFNSCxFOztBQTZETixJQUFNSSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxRQUFjO0FBQUE7O0FBQUEsTUFBWEQsSUFBVyxTQUFYQSxJQUFXOztBQUFBLGtCQUVERSxzREFBUSxDQUFDLENBQUQsQ0FGUDtBQUFBLE1BRXRCQyxNQUZzQjtBQUFBLE1BRWRDLFNBRmM7O0FBRzdCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBRUEsV0FBU0MsUUFBVCxDQUFrQkMsS0FBbEIsRUFBd0I7QUFDdEIsUUFBR0EsS0FBSyxJQUFFSCxNQUFNLENBQUNJLFFBQWpCLEVBQTBCO0FBQ3hCLGFBQU8sUUFBUDtBQUNELEtBRkQsTUFHSztBQUNOOztBQUVELFNBQ0UsTUFBQyxFQUFEO0FBQUksUUFBSSxFQUFFVCxJQUFWO0FBQWdCLFVBQU0sRUFBRUcsTUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBLE1BQUMsNkNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURBLEVBR0k7QUFBSyxhQUFTLEVBQUMsUUFBZjtBQUFBO0FBQUE7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QUFBO0FBQUE7QUFBQTtBQUFBLEtBQWdFO0FBQUcsYUFBUyxFQUFDLG9CQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBaEUsQ0FERixDQUxKLEVBUUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLGFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBUkosQ0FEQSxDQTVCRixDQUhKLENBREY7QUFpREQsQ0E3REQ7O0dBQU1OLFE7VUFHV0sscUQ7OztNQUhYTCxRO0FBK0RTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hYm91dC5hNjFjZjc3NmM0MDdmNDA3ZTEzOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcbmltcG9ydCBIZWFkSW5uZXIgZnJvbSAnLi9IZWFkJ1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5cclxuXHJcblxyXG5jb25zdCBVbCA9IHN0eWxlZC51bGBcclxuXHJcbiAgbGkgYTpob3ZlcntcclxuICAgICAgY29sb3I6IzYyQ0JFNztcclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAubmF2YmFye1xyXG4gICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XHJcbiAgICAgICAgZ2FwOjhyZW07XHJcbiAgICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgICB9XHJcbiAgICAgIHVse1xyXG4gICAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XHJcbiAgICAgIHBhZGRpbmctdG9wOjVyZW07XHJcbiAgICAgIGZvbnQtc2l6ZToxLjRyZW07XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcclxuICAgICAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG5cclxuICAgICAgXHJcbiAgICAgIFxyXG4gICAgICB9XHJcbiAgICAgIC5yb2JlcnQtbG9nb3tcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcbiAgICAgIC5uYXYtc29jaWFse1xyXG4gICAgICAgIG1hcmdpbi10b3A6NXJlbTtcclxuICAgICAgICBmb250LXNpemU6IDEuOHJlbTtcclxuICAgICAgfVxyXG4gICAgICAubGluZS1zb2NpYWx7XHJcbiAgICAgICAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgICAgICAgaGVpZ2h0OiA4cmVtO1xyXG4gICAgICB9XHJcbiAgICAgIC5hY3RpdmV7XHJcbiAgIGNvbG9yOnZhcigtLWRpZi1jb2xvcik7XHJcbiB9XHJcbiBcclxuXHJcbiAgICBcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTI1Mjk7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0cmFuc2Zvcm06ICR7KHsgb3BlbiB9KSA9PiBvcGVuID8gJ3RyYW5zbGF0ZVgoMCknIDogJ3RyYW5zbGF0ZVgoMTAwJSknfTtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIHBhZGRpbmctdG9wOiA1cmVtO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1pbi1vdXQ7XHJcblxyXG4gICAgbGkge1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuXHJcblxyXG5cclxuY29uc3QgUmlnaHROYXYgPSAoeyBvcGVuIH0pID0+IHtcclxuXHJcbiAgY29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKDEpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcblxyXG4gIGZ1bmN0aW9uIGlzQWN0aXZlKHJvdXRlKXtcclxuICAgIGlmKHJvdXRlPT1yb3V0ZXIucGF0aG5hbWUpe1xyXG4gICAgICByZXR1cm4gXCJhY3RpdmVcIlxyXG4gICAgfVxyXG4gICAgZWxzZSBcIm5hdi1pdGVtXCJcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8VWwgb3Blbj17b3Blbn0gYWN0aXZlPXthY3RpdmV9PlxyXG4gICAgPEhlYWRJbm5lci8+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyXCI+XHJcbiAgICAgICAgXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ28tbmF2YmFyXCI+XHJcbiAgICAgICAgICA8TGluayBocmVmPScvJz48aW1nIHNyYz1cIi9yb2JlcnRsb2dvLnBuZ1wiIGFsdD1cIi5yb2JlcnRcIiBjbGFzc05hbWU9XCJyb2JlcnQtbG9nb1wiLz48L0xpbms+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLW5hdmJhclwiIGFjdGl2ZT17YWN0aXZlfT5cclxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2LWxpc3RcIj5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2BuYXYtaXRlbSAke2lzQWN0aXZlKCcvJyl9YH0gPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvJyA+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLWhvbWVcIj48L2k+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtgbmF2LWl0ZW0gJHtpc0FjdGl2ZSgnL3dvcmsnKX1gfSA+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy93b3JrJz48aSBjbGFzc05hbWU9XCJmYXMgZmEtbGFwdG9wLWNvZGVcIj48L2k+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtgbmF2LWl0ZW0gJHtpc0FjdGl2ZSgnL3NraWxscycpfWB9ID5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nL3NraWxscyc+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLWNvZ1wiPjwvaT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2BuYXYtaXRlbSAke2lzQWN0aXZlKCcvYWJvdXQnKX1gfT5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nL2Fib3V0Jz48aSBjbGFzc05hbWU9XCJmYXMgZmEtaW5mby1jaXJjbGVcIj48L2k+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvY2lhbC1uYXZiYXJcIj5cclxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXYtc29jaWFsXCI+XHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1zb2NpYWwtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgIGhyZWY9J2h0dHBzOi8vZ2l0aHViLmNvbS9yb2JlcnRtb3NjYWxpdWM5Nic+PGkgY2xhc3NOYW1lPVwiZmFiIGZhLWdpdGh1YlwiPjwvaT48L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1zb2NpYWwtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgIGhyZWY9J2h0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9yb2JlcnRtb3NjYWxpcjI0MzAwNC8nPjxpIGNsYXNzTmFtZT1cImZhYiBmYS1saW5rZWRpbi1pblwiPjwvaT48L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmUtc29jaWFsXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9VbD5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJpZ2h0TmF2Il0sInNvdXJjZVJvb3QiOiIifQ==