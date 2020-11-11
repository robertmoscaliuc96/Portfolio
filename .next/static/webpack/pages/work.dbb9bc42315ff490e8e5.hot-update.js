webpackHotUpdate_N_E("pages/work",{

/***/ "./components/layout/RightNav.js":
/*!***************************************!*\
  !*** ./components/layout/RightNav.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/readOnlyError */ "./node_modules/@babel/runtime/helpers/esm/readOnlyError.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Head */ "./components/layout/Head.js");



var _this = undefined,
    _jsxFileName = "E:\\Portfolio\\components\\layout\\RightNav.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function _templateObject4() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n          li a:nth-child(3){\n            color:#62CBE7;\n           }\n        "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n          li a{\n            color:#62CBE7;\n           }\n        "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])([" "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\n  li a:hover{\n      color:#62CBE7;\n  }\n\n  li a:nth-child(1) {\n      color: ", ";\n    }\n\n  @media (max-width: 968px) {\n      .navbar{\n        display:flex;\n        flex-flow: column nowrap;\n        gap:8rem;\n        height: 0;\n      }\n      ul{\n      flex-flow: column nowrap;\n      padding-top:5rem;\n      font-size:1.4rem;\n      position: relative;\n      justify-content:center;\n      align-items:center;\n      x-index: 1;\n      \n      }\n      .robert-logo{\n        display: none;\n      }\n      .nav-social{\n        margin-top:5rem;\n        font-size: 1.8rem;\n      }\n      .line-social{\n          display:block;\n          height: 8rem;\n      }\n\n    \n    background-color: #212529;\n    position: fixed;\n    transform: ", ";\n    top: 0;\n    right: 0;\n    height: 100vh;\n    width: 300px;\n    padding-top: 5rem;\n    transition: transform 0.3s ease-in-out;\n\n    li {\n      color: #fff;\n      \n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var Ul = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].ul(_templateObject(), function (_ref) {
  var active = _ref.active;
  return active === 1 ? '#62CBE7' : '#4a5157';
}, function (_ref2) {
  var open = _ref2.open;
  return open ? 'translateX(0)' : 'translateX(100%)';
});
_c = Ul;
var Nav = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].ul(_templateObject2());
_c2 = Nav;

var RightNav = function RightNav(_ref3) {
  _s();

  var open = _ref3.open;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(1),
      active = _useState[0],
      setActive = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    switch (active) {
      case 1:
      case 2:
        Nav = (Object(_babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_1__["default"])("Nav"), styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].ul(_templateObject3()));

      case 3:
        Nav = (Object(_babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_1__["default"])("Nav"), styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].ul(_templateObject4()));

      case 4:
      default:
        console.log("nothing");
    }
  }, []);
  return __jsx(Ul, {
    open: open,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 5
    }
  }, __jsx(_Head__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 5
    }
  }), __jsx("div", {
    className: "navbar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "logo-navbar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 11
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "/robertlogo.png",
    alt: ".robert",
    className: "robert-logo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 26
    }
  }))), __jsx(Nav, {
    className: "page-navbar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 11
    }
  }, __jsx("ul", {
    className: "nav-list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
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
      lineNumber: 113,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 19
    }
  }, __jsx("i", {
    className: "fas fa-home",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
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
      lineNumber: 120,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/work",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 19
    }
  }, __jsx("i", {
    className: "fas fa-laptop-code",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
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
      lineNumber: 127,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/skills",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 19
    }
  }, __jsx("i", {
    className: "fas fa-cog",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
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
      lineNumber: 134,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/about",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 19
    }
  }, __jsx("i", {
    className: "fas fa-info-circle",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 39
    }
  }))))), __jsx("div", {
    className: "social-navbar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 11
    }
  }, __jsx("ul", {
    className: "nav-social",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 11
    }
  }, __jsx("li", {
    className: "nav-social-item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 15
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "https://github.com/robertmoscaliuc96",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 17
    }
  }, __jsx("i", {
    className: "fab fa-github",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 68
    }
  }))), __jsx("li", {
    className: "nav-social-item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 15
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "https://www.linkedin.com/in/robertmoscalir243004/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 17
    }
  }, __jsx("i", {
    className: "fab fa-linkedin-in",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 81
    }
  }))), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "line-social",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 17
    }
  }))))));
};

_s(RightNav, "NOELxvsAkvxndEuoSqGEkdgXtaQ=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvUmlnaHROYXYuanMiXSwibmFtZXMiOlsiVWwiLCJzdHlsZWQiLCJ1bCIsImFjdGl2ZSIsIm9wZW4iLCJOYXYiLCJSaWdodE5hdiIsInVzZVN0YXRlIiwic2V0QWN0aXZlIiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUtBLElBQU1BLEVBQUUsR0FBR0MseURBQU0sQ0FBQ0MsRUFBVixvQkFPTztBQUFBLE1BQUdDLE1BQUgsUUFBR0EsTUFBSDtBQUFBLFNBQWlCQSxNQUFNLEtBQUcsQ0FBVixHQUFlLFNBQWYsR0FBMkIsU0FBM0M7QUFBQSxDQVBQLEVBMENTO0FBQUEsTUFBR0MsSUFBSCxTQUFHQSxJQUFIO0FBQUEsU0FBY0EsSUFBSSxHQUFHLGVBQUgsR0FBcUIsa0JBQXZDO0FBQUEsQ0ExQ1QsQ0FBUjtLQUFNSixFO0FBd0ROLElBQU1LLEdBQUcsR0FBR0oseURBQU0sQ0FBQ0MsRUFBVixvQkFBVDtNQUFNRyxHOztBQUVOLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLFFBQWM7QUFBQTs7QUFBQSxNQUFYRixJQUFXLFNBQVhBLElBQVc7O0FBQUEsa0JBRURHLHNEQUFRLENBQUMsQ0FBRCxDQUZQO0FBQUEsTUFFdEJKLE1BRnNCO0FBQUEsTUFFZEssU0FGYzs7QUFJN0JDLHlEQUFTLENBQUMsWUFBTTtBQUdkLFlBQU9OLE1BQVA7QUFDRSxXQUFLLENBQUw7QUFFQSxXQUFLLENBQUw7QUFDRUUsV0FBRyxxR0FBR0oseURBQU0sQ0FBQ0MsRUFBVixxQkFBSDs7QUFLRixXQUFLLENBQUw7QUFDQ0csV0FBRyxxR0FBR0oseURBQU0sQ0FBQ0MsRUFBVixxQkFBSDs7QUFLRCxXQUFLLENBQUw7QUFFQTtBQUNF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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBcEIsQ0FKRixDQXRCRixDQURKLENBUkYsRUF3Q0U7QUFBSyxhQUFTLEVBQUMsZUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0E7QUFBSSxhQUFTLEVBQUMsWUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSSxhQUFTLEVBQUMsaUJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBTyxRQUFJLEVBQUMsc0NBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFtRDtBQUFHLGFBQVMsRUFBQyxlQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBbkQsQ0FERixDQURKLEVBS0k7QUFBSSxhQUFTLEVBQUMsaUJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBTyxRQUFJLEVBQUMsbURBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFnRTtBQUFHLGFBQVMsRUFBQyxvQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQWhFLENBREYsQ0FMSixFQVFJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxhQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQVJKLENBREEsQ0F4Q0YsQ0FISixDQURGO0FBNkRELENBN0ZEOztHQUFNRyxROztNQUFBQSxRO0FBK0ZTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy93b3JrLmRiYjliYzQyMzE1ZmY0OTBlOGU1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuaW1wb3J0IEhlYWRJbm5lciBmcm9tICcuL0hlYWQnXHJcblxyXG5cclxuXHJcblxyXG5jb25zdCBVbCA9IHN0eWxlZC51bGBcclxuXHJcbiAgbGkgYTpob3ZlcntcclxuICAgICAgY29sb3I6IzYyQ0JFNztcclxuICB9XHJcblxyXG4gIGxpIGE6bnRoLWNoaWxkKDEpIHtcclxuICAgICAgY29sb3I6ICR7KHsgYWN0aXZlIH0pID0+IChhY3RpdmU9PT0xKSA/ICcjNjJDQkU3JyA6ICcjNGE1MTU3J307XHJcbiAgICB9XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA5NjhweCkge1xyXG4gICAgICAubmF2YmFye1xyXG4gICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XHJcbiAgICAgICAgZ2FwOjhyZW07XHJcbiAgICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgICB9XHJcbiAgICAgIHVse1xyXG4gICAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XHJcbiAgICAgIHBhZGRpbmctdG9wOjVyZW07XHJcbiAgICAgIGZvbnQtc2l6ZToxLjRyZW07XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcclxuICAgICAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gICAgICB4LWluZGV4OiAxO1xyXG4gICAgICBcclxuICAgICAgfVxyXG4gICAgICAucm9iZXJ0LWxvZ297XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG4gICAgICAubmF2LXNvY2lhbHtcclxuICAgICAgICBtYXJnaW4tdG9wOjVyZW07XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjhyZW07XHJcbiAgICAgIH1cclxuICAgICAgLmxpbmUtc29jaWFse1xyXG4gICAgICAgICAgZGlzcGxheTpibG9jaztcclxuICAgICAgICAgIGhlaWdodDogOHJlbTtcclxuICAgICAgfVxyXG5cclxuICAgIFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjUyOTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRyYW5zZm9ybTogJHsoeyBvcGVuIH0pID0+IG9wZW4gPyAndHJhbnNsYXRlWCgwKScgOiAndHJhbnNsYXRlWCgxMDAlKSd9O1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDVyZW07XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLWluLW91dDtcclxuXHJcbiAgICBsaSB7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICBcclxuICAgIH1cclxuICB9XHJcbmA7XHJcbmNvbnN0IE5hdiA9IHN0eWxlZC51bGAgYCBcclxuXHJcbmNvbnN0IFJpZ2h0TmF2ID0gKHsgb3BlbiB9KSA9PiB7XHJcblxyXG4gIGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZSgxKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuXHJcbiAgICAgICBcclxuICAgIHN3aXRjaChhY3RpdmUpIHtcclxuICAgICAgY2FzZSAxOlxyXG4gIFxyXG4gICAgICBjYXNlIDI6XHJcbiAgICAgICAgTmF2ID0gc3R5bGVkLnVsYFxyXG4gICAgICAgICAgbGkgYXtcclxuICAgICAgICAgICAgY29sb3I6IzYyQ0JFNztcclxuICAgICAgICAgICB9XHJcbiAgICAgICAgYFxyXG4gICAgICBjYXNlIDM6XHJcbiAgICAgICBOYXYgPSBzdHlsZWQudWxgXHJcbiAgICAgICAgICBsaSBhOm50aC1jaGlsZCgzKXtcclxuICAgICAgICAgICAgY29sb3I6IzYyQ0JFNztcclxuICAgICAgICAgICB9XHJcbiAgICAgICAgYFxyXG4gICAgICBjYXNlIDQ6XHJcblxyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwibm90aGluZ1wiKVxyXG4gIH1cclxuXHJcbiAgfSwgW10pXHJcblxyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxVbCBvcGVuPXtvcGVufT5cclxuICAgIDxIZWFkSW5uZXIvPlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhclwiPlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nby1uYXZiYXJcIj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nPjxpbWcgc3JjPVwiL3JvYmVydGxvZ28ucG5nXCIgYWx0PVwiLnJvYmVydFwiIGNsYXNzTmFtZT1cInJvYmVydC1sb2dvXCIvPjwvTGluaz5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgICA8TmF2IGNsYXNzTmFtZT1cInBhZ2UtbmF2YmFyXCI+XHJcbiAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdi1saXN0XCI+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIiBvbkNsaWNrPXsgKCk9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHNldEFjdGl2ZSgxKTtcclxuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYWN0aXZlKVxyXG4gICAgICAgICAgICAgICAgfX0gPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvJyA+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLWhvbWVcIj48L2k+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIiBvbkNsaWNrPXsgKCk9PiAge1xyXG4gICAgICAgICAgICAgICAgICBzZXRBY3RpdmUoMik7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGFjdGl2ZSlcclxuICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvd29yayc+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLWxhcHRvcC1jb2RlXCI+PC9pPjwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCIgIG9uQ2xpY2s9eyAoKT0+IHtcclxuICAgICAgICAgICAgICAgICAgc2V0QWN0aXZlKDMpO1xyXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhhY3RpdmUpXHJcbiAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nL3NraWxscyc+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLWNvZ1wiPjwvaT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiIG9uQ2xpY2s9eyAoKT0+ICB7XHJcbiAgICAgICAgICAgICAgICAgIHNldEFjdGl2ZSg0KTtcclxuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYWN0aXZlKVxyXG4gICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9hYm91dCc+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLWluZm8tY2lyY2xlXCI+PC9pPjwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9OYXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb2NpYWwtbmF2YmFyXCI+XHJcbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2LXNvY2lhbFwiPlxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtc29jaWFsLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgIDxMaW5rICBocmVmPSdodHRwczovL2dpdGh1Yi5jb20vcm9iZXJ0bW9zY2FsaXVjOTYnPjxpIGNsYXNzTmFtZT1cImZhYiBmYS1naXRodWJcIj48L2k+PC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtc29jaWFsLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgIDxMaW5rICBocmVmPSdodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vcm9iZXJ0bW9zY2FsaXIyNDMwMDQvJz48aSBjbGFzc05hbWU9XCJmYWIgZmEtbGlua2VkaW4taW5cIj48L2k+PC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5lLXNvY2lhbFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvVWw+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSaWdodE5hdiJdLCJzb3VyY2VSb290IjoiIn0=