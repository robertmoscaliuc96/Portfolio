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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);


var _this = undefined,
    _jsxFileName = "E:\\Portfolio\\components\\layout\\RightNav.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])([" \n.nav-item:nth-child(1){\n  color: ", ";\n  \n}\n.nav-item:nth-child(2){\n  color: ", ";\n  \n}\n.nav-item:nth-child(3){\n  color: ", ";\n  \n}\n.nav-item:nth-child(4){\n  color: ", ";\n  \n}\n"]);

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

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();

  function isActive(route) {
    if (route = router.pathname) {
      return "active";
    } else "";
  }

  return __jsx(Ul, {
    open: open,
    active: active,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 5
    }
  }, __jsx(_Head__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 5
    }
  }), __jsx("div", {
    className: "navbar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "logo-navbar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 11
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "/robertlogo.png",
    alt: ".robert",
    className: "robert-logo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 26
    }
  }))), __jsx(Nav, {
    className: "page-navbar",
    active: active,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 11
    }
  }, __jsx("ul", {
    className: "nav-list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 15
    }
  }, __jsx("li", {
    className: isActive,
    onClick: function onClick() {
      setActive(1);
      console.log(active);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 19
    }
  }, __jsx("i", {
    className: "fas fa-home",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 35
    }
  }))), __jsx("li", {
    className: "nav-item",
    active: active,
    onClick: function onClick() {
      setActive(2);
      console.log(active);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/work",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 19
    }
  }, __jsx("i", {
    className: "fas fa-laptop-code",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 38
    }
  }))), __jsx("li", {
    className: "nav-item",
    active: active,
    onClick: function onClick() {
      setActive(3);
      console.log(active);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/skills",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 19
    }
  }, __jsx("i", {
    className: "fas fa-cog",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
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
      lineNumber: 135,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/about",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 19
    }
  }, __jsx("i", {
    className: "fas fa-info-circle",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 39
    }
  }))))), __jsx("div", {
    className: "social-navbar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 11
    }
  }, __jsx("ul", {
    className: "nav-social",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 11
    }
  }, __jsx("li", {
    className: "nav-social-item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 15
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "https://github.com/robertmoscaliuc96",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 17
    }
  }, __jsx("i", {
    className: "fab fa-github",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 68
    }
  }))), __jsx("li", {
    className: "nav-social-item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 15
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "https://www.linkedin.com/in/robertmoscalir243004/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 17
    }
  }, __jsx("i", {
    className: "fab fa-linkedin-in",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 81
    }
  }))), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "line-social",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 17
    }
  }))))));
};

_s(RightNav, "1J2PsxnD79Ro0y3u0KgEJHINcc8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"]];
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvUmlnaHROYXYuanMiXSwibmFtZXMiOlsiVWwiLCJzdHlsZWQiLCJ1bCIsImFjdGl2ZSIsIm9wZW4iLCJOYXYiLCJSaWdodE5hdiIsInVzZVN0YXRlIiwic2V0QWN0aXZlIiwicm91dGVyIiwidXNlUm91dGVyIiwiaXNBY3RpdmUiLCJyb3V0ZSIsInBhdGhuYW1lIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBLElBQU1BLEVBQUUsR0FBR0MseURBQU0sQ0FBQ0MsRUFBVixvQkFPRztBQUFBLE1BQUdDLE1BQUgsUUFBR0EsTUFBSDtBQUFBLFNBQWlCQSxNQUFNLEtBQUcsQ0FBVixHQUFlLFNBQWYsR0FBMkIsU0FBM0M7QUFBQSxDQVBILEVBMkNTO0FBQUEsTUFBR0MsSUFBSCxTQUFHQSxJQUFIO0FBQUEsU0FBY0EsSUFBSSxHQUFHLGVBQUgsR0FBcUIsa0JBQXZDO0FBQUEsQ0EzQ1QsQ0FBUjtLQUFNSixFO0FBeUROLElBQU1LLEdBQUcsR0FBR0oseURBQU0sQ0FBQ0MsRUFBVixxQkFFRTtBQUFBLE1BQUdDLE1BQUgsU0FBR0EsTUFBSDtBQUFBLFNBQWlCQSxNQUFNLEtBQUcsQ0FBVixHQUFlLFNBQWYsR0FBMkIsU0FBM0M7QUFBQSxDQUZGLEVBTUU7QUFBQSxNQUFHQSxNQUFILFNBQUdBLE1BQUg7QUFBQSxTQUFpQkEsTUFBTSxLQUFHLENBQVYsR0FBZSxTQUFmLEdBQTJCLFNBQTNDO0FBQUEsQ0FORixFQVVFO0FBQUEsTUFBR0EsTUFBSCxTQUFHQSxNQUFIO0FBQUEsU0FBaUJBLE1BQU0sS0FBRyxDQUFWLEdBQWUsU0FBZixHQUEyQixTQUEzQztBQUFBLENBVkYsRUFjRTtBQUFBLE1BQUdBLE1BQUgsU0FBR0EsTUFBSDtBQUFBLFNBQWlCQSxNQUFN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O0FBQUcsYUFBUyxFQUFDLG9CQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBaEUsQ0FERixDQUxKLEVBUUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLGFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBUkosQ0FEQSxDQXhDRixDQUhKLENBREY7QUE2REQsQ0F6RUQ7O0dBQU1HLFE7VUFHV0kscUQ7OztNQUhYSixRO0FBMkVTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9za2lsbHMuMDEwODQ4NzNkZTg1OGFjYWUwMzkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5pbXBvcnQgSGVhZElubmVyIGZyb20gJy4vSGVhZCdcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuXHJcblxyXG5cclxuY29uc3QgVWwgPSBzdHlsZWQudWxgXHJcblxyXG4gIGxpIGE6aG92ZXJ7XHJcbiAgICAgIGNvbG9yOiM2MkNCRTc7XHJcbiAgfVxyXG4gIC5uYXYtaXRlbTpudGgtY2hpbGQoMSl7XHJcbiAgY29sb3I6ICM2MkNCRTdcclxuICBjb2xvcjogJHsoeyBhY3RpdmUgfSkgPT4gKGFjdGl2ZT09PTEpID8gJyM2MkNCRTcnIDogJyM0YTUxNTcnfTtcclxufVxyXG5cclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDk2OHB4KSB7XHJcbiAgICAgIC5uYXZiYXJ7XHJcbiAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcclxuICAgICAgICBnYXA6OHJlbTtcclxuICAgICAgICBoZWlnaHQ6IDA7XHJcbiAgICAgIH1cclxuICAgICAgdWx7XHJcbiAgICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcclxuICAgICAgcGFkZGluZy10b3A6NXJlbTtcclxuICAgICAgZm9udC1zaXplOjEuNHJlbTtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG4gICAgICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbiAgICAgIHgtaW5kZXg6IDE7XHJcbiAgICAgIFxyXG4gICAgICB9XHJcbiAgICAgIC5yb2JlcnQtbG9nb3tcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcbiAgICAgIC5uYXYtc29jaWFse1xyXG4gICAgICAgIG1hcmdpbi10b3A6NXJlbTtcclxuICAgICAgICBmb250LXNpemU6IDEuOHJlbTtcclxuICAgICAgfVxyXG4gICAgICAubGluZS1zb2NpYWx7XHJcbiAgICAgICAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgICAgICAgaGVpZ2h0OiA4cmVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyNTI5O1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdHJhbnNmb3JtOiAkeyh7IG9wZW4gfSkgPT4gb3BlbiA/ICd0cmFuc2xhdGVYKDApJyA6ICd0cmFuc2xhdGVYKDEwMCUpJ307XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogNXJlbTtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UtaW4tb3V0O1xyXG5cclxuICAgIGxpIHtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIFxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuY29uc3QgTmF2ID0gc3R5bGVkLnVsYCBcclxuLm5hdi1pdGVtOm50aC1jaGlsZCgxKXtcclxuICBjb2xvcjogJHsoeyBhY3RpdmUgfSkgPT4gKGFjdGl2ZT09PTEpID8gJyM2MkNCRTcnIDogJyM0YTUxNTcnfTtcclxuICBcclxufVxyXG4ubmF2LWl0ZW06bnRoLWNoaWxkKDIpe1xyXG4gIGNvbG9yOiAkeyh7IGFjdGl2ZSB9KSA9PiAoYWN0aXZlPT09MikgPyAnIzYyQ0JFNycgOiAnIzRhNTE1Nyd9O1xyXG4gIFxyXG59XHJcbi5uYXYtaXRlbTpudGgtY2hpbGQoMyl7XHJcbiAgY29sb3I6ICR7KHsgYWN0aXZlIH0pID0+IChhY3RpdmU9PT0zKSA/ICcjNjJDQkU3JyA6ICcjNGE1MTU3J307XHJcbiAgXHJcbn1cclxuLm5hdi1pdGVtOm50aC1jaGlsZCg0KXtcclxuICBjb2xvcjogJHsoeyBhY3RpdmUgfSkgPT4gKGFjdGl2ZT09PTQpID8gJyM2MkNCRTcnIDogJyM0YTUxNTcnfTtcclxuICBcclxufVxyXG5gXHJcblxyXG5cclxuXHJcbmNvbnN0IFJpZ2h0TmF2ID0gKHsgb3BlbiB9KSA9PiB7XHJcblxyXG4gIGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZSgxKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cclxuICBmdW5jdGlvbiBpc0FjdGl2ZShyb3V0ZSl7XHJcbiAgICBpZihyb3V0ZT1yb3V0ZXIucGF0aG5hbWUpe1xyXG4gICAgICByZXR1cm4gXCJhY3RpdmVcIlxyXG4gICAgfVxyXG4gICAgZWxzZSBcIlwiXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFVsIG9wZW49e29wZW59IGFjdGl2ZT17YWN0aXZlfT5cclxuICAgIDxIZWFkSW5uZXIvPlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhclwiPlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nby1uYXZiYXJcIj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nPjxpbWcgc3JjPVwiL3JvYmVydGxvZ28ucG5nXCIgYWx0PVwiLnJvYmVydFwiIGNsYXNzTmFtZT1cInJvYmVydC1sb2dvXCIvPjwvTGluaz5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgICA8TmF2IGNsYXNzTmFtZT1cInBhZ2UtbmF2YmFyXCIgYWN0aXZlPXthY3RpdmV9PlxyXG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXYtbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17aXNBY3RpdmV9IG9uQ2xpY2s9eyAoKT0+IHtcclxuICAgICAgICAgICAgICAgICAgc2V0QWN0aXZlKDEpO1xyXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhhY3RpdmUpXHJcbiAgICAgICAgICAgICAgICB9fSA+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nID48aSBjbGFzc05hbWU9XCJmYXMgZmEtaG9tZVwiPjwvaT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiIGFjdGl2ZT17YWN0aXZlfSBvbkNsaWNrPXsgKCk9PiAge1xyXG4gICAgICAgICAgICAgICAgICBzZXRBY3RpdmUoMik7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGFjdGl2ZSlcclxuICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvd29yayc+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLWxhcHRvcC1jb2RlXCI+PC9pPjwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCIgYWN0aXZlPXthY3RpdmV9ICBvbkNsaWNrPXsgKCk9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHNldEFjdGl2ZSgzKTtcclxuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYWN0aXZlKVxyXG4gICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9za2lsbHMnPjxpIGNsYXNzTmFtZT1cImZhcyBmYS1jb2dcIj48L2k+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIiBvbkNsaWNrPXsgKCk9PiAge1xyXG4gICAgICAgICAgICAgICAgICBzZXRBY3RpdmUoNCk7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGFjdGl2ZSlcclxuICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvYWJvdXQnPjxpIGNsYXNzTmFtZT1cImZhcyBmYS1pbmZvLWNpcmNsZVwiPjwvaT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvTmF2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29jaWFsLW5hdmJhclwiPlxyXG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdi1zb2NpYWxcIj5cclxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LXNvY2lhbC1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8TGluayAgaHJlZj0naHR0cHM6Ly9naXRodWIuY29tL3JvYmVydG1vc2NhbGl1Yzk2Jz48aSBjbGFzc05hbWU9XCJmYWIgZmEtZ2l0aHViXCI+PC9pPjwvTGluaz5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LXNvY2lhbC1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8TGluayAgaHJlZj0naHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL3JvYmVydG1vc2NhbGlyMjQzMDA0Lyc+PGkgY2xhc3NOYW1lPVwiZmFiIGZhLWxpbmtlZGluLWluXCI+PC9pPjwvTGluaz5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluZS1zb2NpYWxcIj48L2Rpdj5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L1VsPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmlnaHROYXYiXSwic291cmNlUm9vdCI6IiJ9