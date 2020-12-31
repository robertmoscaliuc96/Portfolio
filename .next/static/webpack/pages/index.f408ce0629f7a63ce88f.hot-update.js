webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/landing.js":
/*!**************************!*\
  !*** ./pages/landing.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layout_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout/Navbar */ "./components/layout/Navbar.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_layout_Head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/layout/Head */ "./components/layout/Head.js");
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-spring */ "./node_modules/react-spring/web.js");


var _jsxFileName = "E:\\Portfolio\\pages\\landing.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var calc = function calc(x, y) {
  return [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.05];
};

var trans = function trans(x, y, s) {
  return "perspective(1800px) rotateX(".concat(x, "deg) rotateY(").concat(y, "deg) scale(").concat(s, ")");
};

function Landing() {
  _s();

  var _useSpring = Object(react_spring__WEBPACK_IMPORTED_MODULE_5__["useSpring"])(function () {
    return {
      xys: [0, 0, 1],
      config: {
        mass: 5,
        tension: 350,
        friction: 40
      }
    };
  }),
      _useSpring2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useSpring, 2),
      props = _useSpring2[0],
      set = _useSpring2[1];

  var spring = Object(react_spring__WEBPACK_IMPORTED_MODULE_5__["useSpring"])({
    from: {
      transform: 'rotateZ(0deg)',
      opacity: 0
    },
    to: {
      transform: 'rotateZ(-31deg)',
      opacity: 1
    },
    config: {
      mass: 1.5,
      tension: 50,
      friction: 8,
      duration: 500
    }
  });
  return __jsx("div", {
    className: "homepage",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, __jsx(_components_layout_Head__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }
  }), __jsx(_components_layout_Navbar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "home-image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "home-inner",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "home-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 33
    }
  }, __jsx("p", {
    className: "large",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 37
    }
  }, "Hi,"), __jsx("p", {
    className: "large-name",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 37
    }
  }, "I'm Robert,"), __jsx("p", {
    className: "large-name",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 37
    }
  }, "web developer."), __jsx("p", {
    className: "paragraph",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 37
    }
  }, "I'm an enthusiastic software developer, that covers the full-stack development of a website and aims to build responsive and engaging products."), __jsx("div", {
    className: "button-div",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 37
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/work",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 41
    }
  }, __jsx("button", {
    className: "work-button",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 60
    }
  }, "My Work")))), __jsx(react_spring__WEBPACK_IMPORTED_MODULE_5__["animated"].div, {
    style: spring,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 33
    }
  }, __jsx(react_spring__WEBPACK_IMPORTED_MODULE_5__["animated"].div, {
    "class": "large-logo-test",
    onMouseMove: function onMouseMove(_ref) {
      var x = _ref.clientX,
          y = _ref.clientY;
      return set({
        xys: calc(x, y)
      });
    },
    onMouseLeave: function onMouseLeave() {
      return set({
        xys: [0, 0, 1]
      });
    },
    style: {
      transform: props.xys.interpolate(trans)
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 45
    }
  }, __jsx("img", {
    src: "/RLogo.png",
    alt: ".robert",
    className: "big-logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 49
    }
  }))))));
}

_s(Landing, "SpoEE3o9iiAxoRscXlMSNyzRbIU=", false, function () {
  return [react_spring__WEBPACK_IMPORTED_MODULE_5__["useSpring"], react_spring__WEBPACK_IMPORTED_MODULE_5__["useSpring"]];
});

_c = Landing;
/* harmony default export */ __webpack_exports__["default"] = (Landing);

var _c;

$RefreshReg$(_c, "Landing");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbGFuZGluZy5qcyJdLCJuYW1lcyI6WyJjYWxjIiwieCIsInkiLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsImlubmVyV2lkdGgiLCJ0cmFucyIsInMiLCJMYW5kaW5nIiwidXNlU3ByaW5nIiwieHlzIiwiY29uZmlnIiwibWFzcyIsInRlbnNpb24iLCJmcmljdGlvbiIsInByb3BzIiwic2V0Iiwic3ByaW5nIiwiZnJvbSIsInRyYW5zZm9ybSIsIm9wYWNpdHkiLCJ0byIsImR1cmF0aW9uIiwiY2xpZW50WCIsImNsaWVudFkiLCJpbnRlcnBvbGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFDQyxDQUFELEVBQUlDLENBQUo7QUFBQSxTQUFVLENBQUMsRUFBRUEsQ0FBQyxHQUFHQyxNQUFNLENBQUNDLFdBQVAsR0FBcUIsQ0FBM0IsSUFBZ0MsRUFBakMsRUFBcUMsQ0FBQ0gsQ0FBQyxHQUFHRSxNQUFNLENBQUNFLFVBQVAsR0FBb0IsQ0FBekIsSUFBOEIsRUFBbkUsRUFBdUUsSUFBdkUsQ0FBVjtBQUFBLENBQWI7O0FBRUEsSUFBTUMsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ0wsQ0FBRCxFQUFJQyxDQUFKLEVBQU9LLENBQVA7QUFBQSwrQ0FBNENOLENBQTVDLDBCQUE2REMsQ0FBN0Qsd0JBQTRFSyxDQUE1RTtBQUFBLENBQWQ7O0FBR0EsU0FBU0MsT0FBVCxHQUFtQjtBQUFBOztBQUFBLG1CQUNNQyw4REFBUyxDQUFDO0FBQUEsV0FBTztBQUFFQyxTQUFHLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FBUDtBQUFrQkMsWUFBTSxFQUFFO0FBQUVDLFlBQUksRUFBRSxDQUFSO0FBQVdDLGVBQU8sRUFBRSxHQUFwQjtBQUF5QkMsZ0JBQVEsRUFBRTtBQUFuQztBQUEx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TEosQ0FIWixDQVhKLENBRFIsQ0FIUixDQURKO0FBbUNQOztHQXZEUUUsTztVQUNnQkMsc0QsRUFFTkEsc0Q7OztLQUhWRCxPO0FBMkRNQSxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mNDA4Y2UwNjI5ZjdhNjNjZTg4Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5hdmJhciBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dC9OYXZiYXInO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBIZWFkSW5uZXIgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQvSGVhZCc7XHJcbmltcG9ydCB7dXNlU3ByaW5nLCBhbmltYXRlZH0gZnJvbSAncmVhY3Qtc3ByaW5nJ1xyXG5cclxuXHJcbmNvbnN0IGNhbGMgPSAoeCwgeSkgPT4gWy0oeSAtIHdpbmRvdy5pbm5lckhlaWdodCAvIDIpIC8gMjAsICh4IC0gd2luZG93LmlubmVyV2lkdGggLyAyKSAvIDIwLCAxLjA1XVxyXG5cclxuY29uc3QgdHJhbnMgPSAoeCwgeSwgcykgPT4gYHBlcnNwZWN0aXZlKDE4MDBweCkgcm90YXRlWCgke3h9ZGVnKSByb3RhdGVZKCR7eX1kZWcpIHNjYWxlKCR7c30pYFxyXG5cclxuXHJcbmZ1bmN0aW9uIExhbmRpbmcgKCl7XHJcbiAgICBjb25zdCBbcHJvcHMsIHNldF0gPSB1c2VTcHJpbmcoKCkgPT4gKHsgeHlzOiBbMCwgMCwgMV0sIGNvbmZpZzogeyBtYXNzOiA1LCB0ZW5zaW9uOiAzNTAsIGZyaWN0aW9uOiA0MCB9IH0pKVxyXG5cclxuICAgIGNvbnN0IHNwcmluZyA9IHVzZVNwcmluZyh7XHJcbiAgICAgICAgZnJvbToge1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiAncm90YXRlWigwZGVnKScsXHJcbiAgICAgICAgICBvcGFjaXR5OiAwXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0bzoge1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiAncm90YXRlWigtMzFkZWcpJyxcclxuICAgICAgICAgIG9wYWNpdHk6MVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29uZmlnOiB7XHJcbiAgICAgICAgICBtYXNzOiAxLjUsXHJcbiAgICAgICAgICB0ZW5zaW9uOiA1MCxcclxuICAgICAgICAgIGZyaWN0aW9uOiA4LFxyXG4gICAgICAgICAgZHVyYXRpb246NTAwXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob21lcGFnZVwiPlxyXG4gICAgICAgICAgICAgICAgPEhlYWRJbm5lci8+XHJcbiAgICAgICAgICAgICAgICA8TmF2YmFyLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbWUtaW1hZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9tZS1pbm5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9tZS10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImxhcmdlXCI+SGksPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJsYXJnZS1uYW1lXCI+SSdtIFJvYmVydCw8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImxhcmdlLW5hbWVcIj53ZWIgZGV2ZWxvcGVyLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGFyYWdyYXBoXCI+SSdtIGFuIGVudGh1c2lhc3RpYyBzb2Z0d2FyZSBkZXZlbG9wZXIsIHRoYXQgY292ZXJzIHRoZSBmdWxsLXN0YWNrIGRldmVsb3BtZW50IG9mIGEgd2Vic2l0ZSBhbmQgYWltcyB0byBidWlsZCByZXNwb25zaXZlIGFuZCBlbmdhZ2luZyBwcm9kdWN0cy48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uLWRpdlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi93b3JrXCI+PGJ1dHRvbiBjbGFzc05hbWU9XCJ3b3JrLWJ1dHRvblwiPk15IFdvcms8L2J1dHRvbj48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YW5pbWF0ZWQuZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtzcHJpbmd9XHJcbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YW5pbWF0ZWQuZGl2ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImxhcmdlLWxvZ28tdGVzdFwiXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VNb3ZlPXsoeyBjbGllbnRYOiB4LCBjbGllbnRZOiB5IH0pID0+IHNldCh7IHh5czogY2FsYyh4LCB5KSB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHNldCh7IHh5czogWzAsIDAsIDFdIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHRyYW5zZm9ybTogcHJvcHMueHlzLmludGVycG9sYXRlKHRyYW5zKSB9fSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL1JMb2dvLnBuZ1wiIGFsdD1cIi5yb2JlcnRcIiAgY2xhc3NOYW1lPVwiYmlnLWxvZ29cIi8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYW5pbWF0ZWQuZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hbmltYXRlZC5kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICApXHJcblxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExhbmRpbmc7Il0sInNvdXJjZVJvb3QiOiIifQ==