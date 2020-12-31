webpackHotUpdate_N_E("pages/test",{

/***/ "./pages/test.js":
/*!***********************!*\
  !*** ./pages/test.js ***!
  \***********************/
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


var _jsxFileName = "E:\\Portfolio\\pages\\test.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var calc = function calc(x, y) {
  return [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.05];
};

var trans = function trans(x, y, s) {
  return "perspective(1800px) rotateX(".concat(x, "deg) rotateY(").concat(y, "deg) scale(").concat(s, ")");
};

var spring = Object(react_spring__WEBPACK_IMPORTED_MODULE_5__["useSpring"])({
  from: {
    transform: 'rotateZ(0deg)'
  },
  to: {
    transform: 'rotateZ(31deg)'
  },
  config: {
    mass: 1,
    tension: 10,
    friction: 10
  }
});

function Test() {
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

  return __jsx("div", {
    className: "homepage",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, __jsx(_components_layout_Head__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 17
    }
  }), __jsx(_components_layout_Navbar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "home-image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "home-inner",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "home-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 33
    }
  }, __jsx("p", {
    className: "large",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 37
    }
  }, "Hi,"), __jsx("p", {
    className: "large-name",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 37
    }
  }, "I'm Robert,"), __jsx("p", {
    className: "large-name",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 37
    }
  }, "web developer."), __jsx("p", {
    className: "paragraph",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 37
    }
  }, "I'm an enthusiastic software developer, that covers the full-stack development of a website and aims to build responsive and engaging products."), __jsx("div", {
    className: "button-div",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 37
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/work",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 41
    }
  }, __jsx("button", {
    className: "work-button",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 60
    }
  }, "My Work")))), __jsx(react_spring__WEBPACK_IMPORTED_MODULE_5__["animated"].div, {
    style: spring,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
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
      lineNumber: 45,
      columnNumber: 45
    }
  }, __jsx("img", {
    src: "/RLogo.png",
    alt: ".robert",
    className: "big-logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 49
    }
  }))))));
}

_s(Test, "JsRLRFoXSrcYnGmIVjeJI9Twg/I=", false, function () {
  return [react_spring__WEBPACK_IMPORTED_MODULE_5__["useSpring"]];
});

_c = Test;
/* harmony default export */ __webpack_exports__["default"] = (Test);

var _c;

$RefreshReg$(_c, "Test");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdGVzdC5qcyJdLCJuYW1lcyI6WyJjYWxjIiwieCIsInkiLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsImlubmVyV2lkdGgiLCJ0cmFucyIsInMiLCJzcHJpbmciLCJ1c2VTcHJpbmciLCJmcm9tIiwidHJhbnNmb3JtIiwidG8iLCJjb25maWciLCJtYXNzIiwidGVuc2lvbiIsImZyaWN0aW9uIiwiVGVzdCIsInh5cyIsInByb3BzIiwic2V0IiwiY2xpZW50WCIsImNsaWVudFkiLCJpbnRlcnBvbGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFDQyxDQUFELEVBQUlDLENBQUo7QUFBQSxTQUFVLENBQUMsRUFBRUEsQ0FBQyxHQUFHQyxNQUFNLENBQUNDLFdBQVAsR0FBcUIsQ0FBM0IsSUFBZ0MsRUFBakMsRUFBcUMsQ0FBQ0gsQ0FBQyxHQUFHRSxNQUFNLENBQUNFLFVBQVAsR0FBb0IsQ0FBekIsSUFBOEIsRUFBbkUsRUFBdUUsSUFBdkUsQ0FBVjtBQUFBLENBQWI7O0FBRUEsSUFBTUMsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ0wsQ0FBRCxFQUFJQyxDQUFKLEVBQU9LLENBQVA7QUFBQSwrQ0FBNENOLENBQTVDLDBCQUE2REMsQ0FBN0Qsd0JBQTRFSyxDQUE1RTtBQUFBLENBQWQ7O0FBQ0EsSUFBTUMsTUFBTSxHQUFHQyw4REFBUyxDQUFDO0FBQ3JCQyxNQUFJLEVBQUU7QUFDSkMsYUFBUyxFQUFFO0FBRFAsR0FEZTtBQUlyQkMsSUFBRSxFQUFFO0FBQ0ZELGFBQVMsRUFBRTtBQURULEdBSmlCO0FBT3JCRSxRQUFNLEVBQUU7QUFDTkMsUUFBSSxFQUFFLENBREE7QUFFTkMsV0FBTyxFQUFFLEVBRkg7QUFHTkMsWUFBUSxFQUFFO0FBSEo7QUFQYSxDQUFELENBQXhCOztBQWNBLFNBQVNDLElBQVQsR0FBZ0I7QUFBQTs7QUFBQSxtQkFDU1IsOERBQVMsQ0FBQztBQUFBLFdBQU87QUFBRVMsU0FBRyxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBQVA7QUFBa0JMLFlBQU0sRUFBRTtBQUFFQyxZQUFJLEVBQUUsQ0FBUjtBQUFXQyxlQUFPLEVBQUUsR0FBcEI7QUFBeUJDLGdCQUFRLEVBQUU7QUFBbkM7QUFBMUIsS0FBUDtBQUFBLEdBQUQsQ0FEbEI7QUFBQTtBQUFBLE1BQ0xHLEtBREs7QUFBQSxNQUNFQyxHQURGOztBQUVSLFNBQ0k7QUFBSyxhQUFTLEVBQUMsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFFSSxNQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixFQUdRO0FBQUssYUFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNRO0FBQUssYUFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUcsYUFBUyxFQUFDLE9BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKLEVBRUk7QUFBRyxhQUFTLEVBQUMsWUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZKLEVBR0k7QUFBRyxhQUFTLEVBQUMsWUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUhKLEVBSUk7QUFBRyxhQUFTLEVBQUMsV0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVKQUpKLEVBS0k7QUFBSyxhQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxPQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBbUI7QUFBUSxhQUFTLEVBQUMsYUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFuQixDQURKLENBTEosQ0FESixFQVdJLE1BQUMscURBQUQsQ0FBVSxHQUFWO0FBQ0ksU0FBSyxFQUFFWixNQURYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FHWSxNQUFDLHFEQUFELENBQVUsR0FBVjtBQUFzRCxhQUFNLGlCQUE1RDtBQUVBLGVBQVcsRUFBRTtBQUFBLFVBQVlQLENBQVosUUFBR29CLE9BQUg7QUFBQSxVQUF3Qm5CLENBQXhCLFFBQWVvQixPQUFmO0FBQUEsYUFBZ0NGLEdBQUcsQ0FBQztBQUFFRixXQUFHLEVBQUVsQixJQUFJLENBQUNDLENBQUQsRUFBSUMsQ0FBSjtBQUFYLE9BQUQsQ0FBbkM7QUFBQSxLQUZiO0FBR0EsZ0JBQVksRUFBRTtBQUFBLGFBQU1rQixHQUFHLENBQUM7QUFBRUYsV0FBRyxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQO0FBQVAsT0FBRCxDQUFUO0FBQUEsS0FIZDtBQUlBLFNBQUssRUFBRTtBQUFFUCxlQUFTLEVBQUVRLEtBQUssQ0FBQ0QsR0FBTixDQUFVSyxXQUFWLENBQXNCakIsS0FBdEI7QUFBYixLQUpQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLSTtBQUFLLE9BQUcsRUFBQyxZQUFUO0FBQXNCLE9BQUcsRUFBQyxTQUExQjtBQUFxQyxhQUFTLEVBQUMsVUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxKLENBSFosQ0FYSixDQURSLENBSFIsQ0FESjtBQW1DUDs7R0FyQ1FXLEk7VUFDZ0JSLHNEOzs7S0FEaEJRLEk7QUF5Q01BLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Rlc3QuYzlkZjcwNTY2NTJiZDI2NGZiZWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOYXZiYXIgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQvTmF2YmFyJztcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgSGVhZElubmVyIGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0L0hlYWQnO1xyXG5pbXBvcnQge3VzZVNwcmluZywgYW5pbWF0ZWR9IGZyb20gJ3JlYWN0LXNwcmluZydcclxuXHJcblxyXG5jb25zdCBjYWxjID0gKHgsIHkpID0+IFstKHkgLSB3aW5kb3cuaW5uZXJIZWlnaHQgLyAyKSAvIDIwLCAoeCAtIHdpbmRvdy5pbm5lcldpZHRoIC8gMikgLyAyMCwgMS4wNV1cclxuXHJcbmNvbnN0IHRyYW5zID0gKHgsIHksIHMpID0+IGBwZXJzcGVjdGl2ZSgxODAwcHgpIHJvdGF0ZVgoJHt4fWRlZykgcm90YXRlWSgke3l9ZGVnKSBzY2FsZSgke3N9KWBcclxuY29uc3Qgc3ByaW5nID0gdXNlU3ByaW5nKHtcclxuICAgIGZyb206IHtcclxuICAgICAgdHJhbnNmb3JtOiAncm90YXRlWigwZGVnKSdcclxuICAgIH0sXHJcbiAgICB0bzoge1xyXG4gICAgICB0cmFuc2Zvcm06ICdyb3RhdGVaKDMxZGVnKSdcclxuICAgIH0sXHJcbiAgICBjb25maWc6IHtcclxuICAgICAgbWFzczogMSxcclxuICAgICAgdGVuc2lvbjogMTAsXHJcbiAgICAgIGZyaWN0aW9uOiAxMFxyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuZnVuY3Rpb24gVGVzdCAoKXtcclxuICAgIGNvbnN0IFtwcm9wcywgc2V0XSA9IHVzZVNwcmluZygoKSA9PiAoeyB4eXM6IFswLCAwLCAxXSwgY29uZmlnOiB7IG1hc3M6IDUsIHRlbnNpb246IDM1MCwgZnJpY3Rpb246IDQwIH0gfSkpXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob21lcGFnZVwiPlxyXG4gICAgICAgICAgICAgICAgPEhlYWRJbm5lci8+XHJcbiAgICAgICAgICAgICAgICA8TmF2YmFyLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbWUtaW1hZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9tZS1pbm5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9tZS10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImxhcmdlXCI+SGksPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJsYXJnZS1uYW1lXCI+SSdtIFJvYmVydCw8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImxhcmdlLW5hbWVcIj53ZWIgZGV2ZWxvcGVyLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGFyYWdyYXBoXCI+SSdtIGFuIGVudGh1c2lhc3RpYyBzb2Z0d2FyZSBkZXZlbG9wZXIsIHRoYXQgY292ZXJzIHRoZSBmdWxsLXN0YWNrIGRldmVsb3BtZW50IG9mIGEgd2Vic2l0ZSBhbmQgYWltcyB0byBidWlsZCByZXNwb25zaXZlIGFuZCBlbmdhZ2luZyBwcm9kdWN0cy48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uLWRpdlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi93b3JrXCI+PGJ1dHRvbiBjbGFzc05hbWU9XCJ3b3JrLWJ1dHRvblwiPk15IFdvcms8L2J1dHRvbj48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YW5pbWF0ZWQuZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtzcHJpbmd9XHJcbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YW5pbWF0ZWQuZGl2ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImxhcmdlLWxvZ28tdGVzdFwiXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VNb3ZlPXsoeyBjbGllbnRYOiB4LCBjbGllbnRZOiB5IH0pID0+IHNldCh7IHh5czogY2FsYyh4LCB5KSB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHNldCh7IHh5czogWzAsIDAsIDFdIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHRyYW5zZm9ybTogcHJvcHMueHlzLmludGVycG9sYXRlKHRyYW5zKSB9fSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL1JMb2dvLnBuZ1wiIGFsdD1cIi5yb2JlcnRcIiAgY2xhc3NOYW1lPVwiYmlnLWxvZ29cIi8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYW5pbWF0ZWQuZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hbmltYXRlZC5kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICApXHJcblxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRlc3Q7Il0sInNvdXJjZVJvb3QiOiIifQ==