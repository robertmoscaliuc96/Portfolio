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

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\n  li a:hover{\n      color:#62CBE7;\n  }\n\n  @media (max-width: 968px) {\n      .navbar{\n        display:flex;\n        flex-flow: column nowrap;\n        gap:8rem;\n        height: 0;\n      }\n      ul{\n      flex-flow: column nowrap;\n      padding-top:5rem;\n      font-size:1.4rem;\n      position: relative;\n      justify-content:center;\n      align-items:center;\n      x-index: 1;\n      \n      }\n      .robert-logo{\n        display: none;\n      }\n      .nav-social{\n        margin-top:5rem;\n        font-size: 1.8rem;\n      }\n      .line-social{\n          display:block;\n          height: 8rem;\n      }\n\n    \n    background-color: #212529;\n    position: fixed;\n    transform: ", ";\n    top: 0;\n    right: 0;\n    height: 100vh;\n    width: 300px;\n    padding-top: 5rem;\n    transition: transform 0.3s ease-in-out;\n\n    li {\n      color: #fff;\n      \n    }\n  }\n"]);

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
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    switch (active) {
      case 1:
      case 2:
      case 3:
      case 4:
    }
  }, []);
  return __jsx(Ul, {
    open: open,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 5
    }
  }, __jsx(_Head__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 5
    }
  }), __jsx("div", {
    className: "navbar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "logo-navbar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 11
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "/robertlogo.png",
    alt: ".robert",
    className: "robert-logo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 26
    }
  }))), __jsx("div", {
    className: "page-navbar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 11
    }
  }, __jsx("ul", {
    className: "nav-list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 15
    }
  }, __jsx("li", {
    className: "nav-item",
    onClick: function onClick() {
      setActive(1);
      console.log(active);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 19
    }
  }, __jsx("i", {
    className: "fas fa-home",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 35
    }
  }))), __jsx("li", {
    className: "nav-item",
    onClick: function onClick() {
      setActive(2);
      console.log(active);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/work",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 19
    }
  }, __jsx("i", {
    className: "fas fa-laptop-code",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
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
      lineNumber: 112,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/skills",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 19
    }
  }, __jsx("i", {
    className: "fas fa-cog",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
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
      lineNumber: 119,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/about",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 19
    }
  }, __jsx("i", {
    className: "fas fa-info-circle",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 39
    }
  }))))), __jsx("div", {
    className: "social-navbar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 11
    }
  }, __jsx("ul", {
    className: "nav-social",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 11
    }
  }, __jsx("li", {
    className: "nav-social-item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 15
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "https://github.com/robertmoscaliuc96",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 17
    }
  }, __jsx("i", {
    className: "fab fa-github",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 68
    }
  }))), __jsx("li", {
    className: "nav-social-item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 15
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "https://www.linkedin.com/in/robertmoscalir243004/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 17
    }
  }, __jsx("i", {
    className: "fab fa-linkedin-in",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 81
    }
  }))), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "line-social",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 17
    }
  }))))));
};

_s(RightNav, "OD7bBpZva5O2jO+Puf00hKivP7c=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvUmlnaHROYXYuanMiXSwibmFtZXMiOlsiVWwiLCJzdHlsZWQiLCJ1bCIsIm9wZW4iLCJSaWdodE5hdiIsInVzZUVmZmVjdCIsImFjdGl2ZSIsInNldEFjdGl2ZSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBS0EsSUFBTUEsRUFBRSxHQUFHQyx5REFBTSxDQUFDQyxFQUFWLG9CQXNDUztBQUFBLE1BQUdDLElBQUgsUUFBR0EsSUFBSDtBQUFBLFNBQWNBLElBQUksR0FBRyxlQUFILEdBQXFCLGtCQUF2QztBQUFBLENBdENULENBQVI7S0FBTUgsRTs7QUFzRE4sSUFBTUksUUFBUSxHQUFHLFNBQVhBLFFBQVcsUUFBYztBQUFBOztBQUFBLE1BQVhELElBQVcsU0FBWEEsSUFBVztBQUk3QkUseURBQVMsQ0FBQyxZQUFNO0FBR2QsWUFBT0MsTUFBUDtBQUNFLFdBQUssQ0FBTDtBQUVBLFdBQUssQ0FBTDtBQUVBLFdBQUssQ0FBTDtBQUVBLFdBQUssQ0FBTDtBQVBGO0FBVUQsR0FiUSxFQWFOLEVBYk0sQ0FBVDtBQWlCQSxTQUNFLE1BQUMsRUFBRDtBQUFJLFFBQUksRUFBRUgsSUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0EsTUFBQyw2Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREEsRUFHSTtBQUFLLGFBQVMsRUFBQyxRQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFRTtBQUFLLGFBQVMsRUFBQyxhQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLEdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxL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QUFDLGlCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQU8sUUFBSSxFQUFDLG1EQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBZ0U7QUFBRyxhQUFTLEVBQUMsb0JBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUFoRSxDQURGLENBTEosRUFRSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsYUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FSSixDQURBLENBeENGLENBSEosQ0FERjtBQTZERCxDQWxGRDs7R0FBTUYsUTs7TUFBQUEsUTtBQW9GU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMTI4OGEyZGM1M2M5ZTk1ZDQ4MzAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5pbXBvcnQgSGVhZElubmVyIGZyb20gJy4vSGVhZCdcclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IFVsID0gc3R5bGVkLnVsYFxyXG5cclxuICBsaSBhOmhvdmVye1xyXG4gICAgICBjb2xvcjojNjJDQkU3O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDk2OHB4KSB7XHJcbiAgICAgIC5uYXZiYXJ7XHJcbiAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcclxuICAgICAgICBnYXA6OHJlbTtcclxuICAgICAgICBoZWlnaHQ6IDA7XHJcbiAgICAgIH1cclxuICAgICAgdWx7XHJcbiAgICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcclxuICAgICAgcGFkZGluZy10b3A6NXJlbTtcclxuICAgICAgZm9udC1zaXplOjEuNHJlbTtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG4gICAgICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbiAgICAgIHgtaW5kZXg6IDE7XHJcbiAgICAgIFxyXG4gICAgICB9XHJcbiAgICAgIC5yb2JlcnQtbG9nb3tcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcbiAgICAgIC5uYXYtc29jaWFse1xyXG4gICAgICAgIG1hcmdpbi10b3A6NXJlbTtcclxuICAgICAgICBmb250LXNpemU6IDEuOHJlbTtcclxuICAgICAgfVxyXG4gICAgICAubGluZS1zb2NpYWx7XHJcbiAgICAgICAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgICAgICAgaGVpZ2h0OiA4cmVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyNTI5O1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdHJhbnNmb3JtOiAkeyh7IG9wZW4gfSkgPT4gb3BlbiA/ICd0cmFuc2xhdGVYKDApJyA6ICd0cmFuc2xhdGVYKDEwMCUpJ307XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogNXJlbTtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UtaW4tb3V0O1xyXG5cclxuICAgIGxpIHtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIFxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcblxyXG5jb25zdCBSaWdodE5hdiA9ICh7IG9wZW4gfSkgPT4ge1xyXG5cclxuICBcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuXHJcblxyXG4gICAgc3dpdGNoKGFjdGl2ZSkge1xyXG4gICAgICBjYXNlIDE6XHJcblxyXG4gICAgICBjYXNlIDI6XHJcblxyXG4gICAgICBjYXNlIDM6XHJcblxyXG4gICAgICBjYXNlIDQ6XHJcbiAgfVxyXG5cclxuICB9LCBbXSlcclxuXHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFVsIG9wZW49e29wZW59PlxyXG4gICAgPEhlYWRJbm5lci8+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyXCI+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvLW5hdmJhclwiPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj0nLyc+PGltZyBzcmM9XCIvcm9iZXJ0bG9nby5wbmdcIiBhbHQ9XCIucm9iZXJ0XCIgY2xhc3NOYW1lPVwicm9iZXJ0LWxvZ29cIi8+PC9MaW5rPlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1uYXZiYXJcIj5cclxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2LWxpc3RcIj5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiIG9uQ2xpY2s9eyAoKT0+IHtcclxuICAgICAgICAgICAgICAgICAgc2V0QWN0aXZlKDEpO1xyXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhhY3RpdmUpXHJcbiAgICAgICAgICAgICAgICB9fSA+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nID48aSBjbGFzc05hbWU9XCJmYXMgZmEtaG9tZVwiPjwvaT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiIG9uQ2xpY2s9eyAoKT0+ICB7XHJcbiAgICAgICAgICAgICAgICAgIHNldEFjdGl2ZSgyKTtcclxuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYWN0aXZlKVxyXG4gICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy93b3JrJz48aSBjbGFzc05hbWU9XCJmYXMgZmEtbGFwdG9wLWNvZGVcIj48L2k+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIiBvbkNsaWNrPXsgKCk9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHNldEFjdGl2ZSgzKTtcclxuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYWN0aXZlKVxyXG4gICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9za2lsbHMnPjxpIGNsYXNzTmFtZT1cImZhcyBmYS1jb2dcIj48L2k+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIiBvbkNsaWNrPXsgKCk9PiAge1xyXG4gICAgICAgICAgICAgICAgICBzZXRBY3RpdmUoNCk7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGFjdGl2ZSlcclxuICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvYWJvdXQnPjxpIGNsYXNzTmFtZT1cImZhcyBmYS1pbmZvLWNpcmNsZVwiPjwvaT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29jaWFsLW5hdmJhclwiPlxyXG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdi1zb2NpYWxcIj5cclxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LXNvY2lhbC1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8TGluayAgaHJlZj0naHR0cHM6Ly9naXRodWIuY29tL3JvYmVydG1vc2NhbGl1Yzk2Jz48aSBjbGFzc05hbWU9XCJmYWIgZmEtZ2l0aHViXCI+PC9pPjwvTGluaz5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LXNvY2lhbC1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8TGluayAgaHJlZj0naHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL3JvYmVydG1vc2NhbGlyMjQzMDA0Lyc+PGkgY2xhc3NOYW1lPVwiZmFiIGZhLWxpbmtlZGluLWluXCI+PC9pPjwvTGluaz5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluZS1zb2NpYWxcIj48L2Rpdj5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L1VsPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmlnaHROYXYiXSwic291cmNlUm9vdCI6IiJ9