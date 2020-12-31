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
      o: o
    },
    config: {
      mass: 2,
      tension: 50,
      friction: 8
    }
  });
  return __jsx("div", {
    className: "homepage",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, __jsx(_components_layout_Head__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 17
    }
  }), __jsx(_components_layout_Navbar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "home-image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "home-inner",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "home-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 33
    }
  }, __jsx("p", {
    className: "large",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 37
    }
  }, "Hi,"), __jsx("p", {
    className: "large-name",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 37
    }
  }, "I'm Robert,"), __jsx("p", {
    className: "large-name",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 37
    }
  }, "web developer."), __jsx("p", {
    className: "paragraph",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 37
    }
  }, "I'm an enthusiastic software developer, that covers the full-stack development of a website and aims to build responsive and engaging products."), __jsx("div", {
    className: "button-div",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 37
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/work",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 41
    }
  }, __jsx("button", {
    className: "work-button",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 60
    }
  }, "My Work")))), __jsx(react_spring__WEBPACK_IMPORTED_MODULE_5__["animated"].div, {
    style: spring,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
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
      lineNumber: 50,
      columnNumber: 45
    }
  }, __jsx("img", {
    src: "/RLogo.png",
    alt: ".robert",
    className: "big-logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbGFuZGluZy5qcyJdLCJuYW1lcyI6WyJjYWxjIiwieCIsInkiLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsImlubmVyV2lkdGgiLCJ0cmFucyIsInMiLCJMYW5kaW5nIiwidXNlU3ByaW5nIiwieHlzIiwiY29uZmlnIiwibWFzcyIsInRlbnNpb24iLCJmcmljdGlvbiIsInByb3BzIiwic2V0Iiwic3ByaW5nIiwiZnJvbSIsInRyYW5zZm9ybSIsIm9wYWNpdHkiLCJ0byIsIm8iLCJjbGllbnRYIiwiY2xpZW50WSIsImludGVycG9sYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUNDLENBQUQsRUFBSUMsQ0FBSjtBQUFBLFNBQVUsQ0FBQyxFQUFFQSxDQUFDLEdBQUdDLE1BQU0sQ0FBQ0MsV0FBUCxHQUFxQixDQUEzQixJQUFnQyxFQUFqQyxFQUFxQyxDQUFDSCxDQUFDLEdBQUdFLE1BQU0sQ0FBQ0UsVUFBUCxHQUFvQixDQUF6QixJQUE4QixFQUFuRSxFQUF1RSxJQUF2RSxDQUFWO0FBQUEsQ0FBYjs7QUFFQSxJQUFNQyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFDTCxDQUFELEVBQUlDLENBQUosRUFBT0ssQ0FBUDtBQUFBLCtDQUE0Q04sQ0FBNUMsMEJBQTZEQyxDQUE3RCx3QkFBNEVLLENBQTVFO0FBQUEsQ0FBZDs7QUFHQSxTQUFTQyxPQUFULEdBQW1CO0FBQUE7O0FBQUEsbUJBQ01DLDhEQUFTLENBQUM7QUFBQSxXQUFPO0FBQUVDLFNBQUcsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUFQO0FBQWtCQyxZQUFNLEVBQUU7QUFBRUMsWUFBSSxFQUFFLENBQVI7QUFBV0MsZUFBTyxFQUFFLEdBQXBCO0FBQXlCQyxnQkFBUSxFQUFFO0FBQW5DO0FBQTFCLEtBQVA7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O0FBbUNQOztHQXREUUUsTztVQUNnQkMsc0QsRUFFTkEsc0Q7OztLQUhWRCxPO0FBMERNQSxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC43NDg2ZTgwMTdmNTNkOTFlZDlhMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5hdmJhciBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dC9OYXZiYXInO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBIZWFkSW5uZXIgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQvSGVhZCc7XHJcbmltcG9ydCB7dXNlU3ByaW5nLCBhbmltYXRlZH0gZnJvbSAncmVhY3Qtc3ByaW5nJ1xyXG5cclxuXHJcbmNvbnN0IGNhbGMgPSAoeCwgeSkgPT4gWy0oeSAtIHdpbmRvdy5pbm5lckhlaWdodCAvIDIpIC8gMjAsICh4IC0gd2luZG93LmlubmVyV2lkdGggLyAyKSAvIDIwLCAxLjA1XVxyXG5cclxuY29uc3QgdHJhbnMgPSAoeCwgeSwgcykgPT4gYHBlcnNwZWN0aXZlKDE4MDBweCkgcm90YXRlWCgke3h9ZGVnKSByb3RhdGVZKCR7eX1kZWcpIHNjYWxlKCR7c30pYFxyXG5cclxuXHJcbmZ1bmN0aW9uIExhbmRpbmcgKCl7XHJcbiAgICBjb25zdCBbcHJvcHMsIHNldF0gPSB1c2VTcHJpbmcoKCkgPT4gKHsgeHlzOiBbMCwgMCwgMV0sIGNvbmZpZzogeyBtYXNzOiA1LCB0ZW5zaW9uOiAzNTAsIGZyaWN0aW9uOiA0MCB9IH0pKVxyXG5cclxuICAgIGNvbnN0IHNwcmluZyA9IHVzZVNwcmluZyh7XHJcbiAgICAgICAgZnJvbToge1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiAncm90YXRlWigwZGVnKScsXHJcbiAgICAgICAgICBvcGFjaXR5OiAwXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0bzoge1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiAncm90YXRlWigtMzFkZWcpJyxcclxuICAgICAgICAgIG9cclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbmZpZzoge1xyXG4gICAgICAgICAgbWFzczogMixcclxuICAgICAgICAgIHRlbnNpb246IDUwLFxyXG4gICAgICAgICAgZnJpY3Rpb246IDhcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbWVwYWdlXCI+XHJcbiAgICAgICAgICAgICAgICA8SGVhZElubmVyLz5cclxuICAgICAgICAgICAgICAgIDxOYXZiYXIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9tZS1pbWFnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob21lLWlubmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob21lLXRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibGFyZ2VcIj5IaSw8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImxhcmdlLW5hbWVcIj5JJ20gUm9iZXJ0LDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibGFyZ2UtbmFtZVwiPndlYiBkZXZlbG9wZXIuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwYXJhZ3JhcGhcIj5JJ20gYW4gZW50aHVzaWFzdGljIHNvZnR3YXJlIGRldmVsb3BlciwgdGhhdCBjb3ZlcnMgdGhlIGZ1bGwtc3RhY2sgZGV2ZWxvcG1lbnQgb2YgYSB3ZWJzaXRlIGFuZCBhaW1zIHRvIGJ1aWxkIHJlc3BvbnNpdmUgYW5kIGVuZ2FnaW5nIHByb2R1Y3RzLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24tZGl2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3dvcmtcIj48YnV0dG9uIGNsYXNzTmFtZT1cIndvcmstYnV0dG9uXCI+TXkgV29yazwvYnV0dG9uPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlZC5kaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3NwcmluZ31cclxuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlZC5kaXYgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibGFyZ2UtbG9nby10ZXN0XCJcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZU1vdmU9eyh7IGNsaWVudFg6IHgsIGNsaWVudFk6IHkgfSkgPT4gc2V0KHsgeHlzOiBjYWxjKHgsIHkpIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0KHsgeHlzOiBbMCwgMCwgMV0gfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgdHJhbnNmb3JtOiBwcm9wcy54eXMuaW50ZXJwb2xhdGUodHJhbnMpIH19ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvUkxvZ28ucG5nXCIgYWx0PVwiLnJvYmVydFwiICBjbGFzc05hbWU9XCJiaWctbG9nb1wiLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hbmltYXRlZC5kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2FuaW1hdGVkLmRpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgIClcclxuXHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGFuZGluZzsiXSwic291cmNlUm9vdCI6IiJ9