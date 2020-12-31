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

var spring = use({
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdGVzdC5qcyJdLCJuYW1lcyI6WyJjYWxjIiwieCIsInkiLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsImlubmVyV2lkdGgiLCJ0cmFucyIsInMiLCJzcHJpbmciLCJ1c2UiLCJmcm9tIiwidHJhbnNmb3JtIiwidG8iLCJjb25maWciLCJtYXNzIiwidGVuc2lvbiIsImZyaWN0aW9uIiwiVGVzdCIsInVzZVNwcmluZyIsInh5cyIsInByb3BzIiwic2V0IiwiY2xpZW50WCIsImNsaWVudFkiLCJpbnRlcnBvbGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFDQyxDQUFELEVBQUlDLENBQUo7QUFBQSxTQUFVLENBQUMsRUFBRUEsQ0FBQyxHQUFHQyxNQUFNLENBQUNDLFdBQVAsR0FBcUIsQ0FBM0IsSUFBZ0MsRUFBakMsRUFBcUMsQ0FBQ0gsQ0FBQyxHQUFHRSxNQUFNLENBQUNFLFVBQVAsR0FBb0IsQ0FBekIsSUFBOEIsRUFBbkUsRUFBdUUsSUFBdkUsQ0FBVjtBQUFBLENBQWI7O0FBRUEsSUFBTUMsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ0wsQ0FBRCxFQUFJQyxDQUFKLEVBQU9LLENBQVA7QUFBQSwrQ0FBNENOLENBQTVDLDBCQUE2REMsQ0FBN0Qsd0JBQTRFSyxDQUE1RTtBQUFBLENBQWQ7O0FBQ0EsSUFBTUMsTUFBTSxHQUFHQyxHQUFHLENBQUM7QUFDZkMsTUFBSSxFQUFFO0FBQ0pDLGFBQVMsRUFBRTtBQURQLEdBRFM7QUFJZkMsSUFBRSxFQUFFO0FBQ0ZELGFBQVMsRUFBRTtBQURULEdBSlc7QUFPZkUsUUFBTSxFQUFFO0FBQ05DLFFBQUksRUFBRSxDQURBO0FBRU5DLFdBQU8sRUFBRSxFQUZIO0FBR05DLFlBQVEsRUFBRTtBQUhKO0FBUE8sQ0FBRCxDQUFsQjs7QUFjQSxTQUFT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dGF0aWMvd2VicGFjay9wYWdlcy90ZXN0LmVjYjlkYzM2NzA0ODRiMzJiOWRjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmF2YmFyIGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0L05hdmJhcic7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IEhlYWRJbm5lciBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dC9IZWFkJztcclxuaW1wb3J0IHt1c2VTcHJpbmcsIGFuaW1hdGVkfSBmcm9tICdyZWFjdC1zcHJpbmcnXHJcblxyXG5cclxuY29uc3QgY2FsYyA9ICh4LCB5KSA9PiBbLSh5IC0gd2luZG93LmlubmVySGVpZ2h0IC8gMikgLyAyMCwgKHggLSB3aW5kb3cuaW5uZXJXaWR0aCAvIDIpIC8gMjAsIDEuMDVdXHJcblxyXG5jb25zdCB0cmFucyA9ICh4LCB5LCBzKSA9PiBgcGVyc3BlY3RpdmUoMTgwMHB4KSByb3RhdGVYKCR7eH1kZWcpIHJvdGF0ZVkoJHt5fWRlZykgc2NhbGUoJHtzfSlgXHJcbmNvbnN0IHNwcmluZyA9IHVzZSh7XHJcbiAgICBmcm9tOiB7XHJcbiAgICAgIHRyYW5zZm9ybTogJ3JvdGF0ZVooMGRlZyknXHJcbiAgICB9LFxyXG4gICAgdG86IHtcclxuICAgICAgdHJhbnNmb3JtOiAncm90YXRlWigzMWRlZyknXHJcbiAgICB9LFxyXG4gICAgY29uZmlnOiB7XHJcbiAgICAgIG1hc3M6IDEsXHJcbiAgICAgIHRlbnNpb246IDEwLFxyXG4gICAgICBmcmljdGlvbjogMTBcclxuICAgIH1cclxuICB9KTtcclxuXHJcbmZ1bmN0aW9uIFRlc3QgKCl7XHJcbiAgICBjb25zdCBbcHJvcHMsIHNldF0gPSB1c2VTcHJpbmcoKCkgPT4gKHsgeHlzOiBbMCwgMCwgMV0sIGNvbmZpZzogeyBtYXNzOiA1LCB0ZW5zaW9uOiAzNTAsIGZyaWN0aW9uOiA0MCB9IH0pKVxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9tZXBhZ2VcIj5cclxuICAgICAgICAgICAgICAgIDxIZWFkSW5uZXIvPlxyXG4gICAgICAgICAgICAgICAgPE5hdmJhci8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob21lLWltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbWUtaW5uZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbWUtdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJsYXJnZVwiPkhpLDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibGFyZ2UtbmFtZVwiPkknbSBSb2JlcnQsPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJsYXJnZS1uYW1lXCI+d2ViIGRldmVsb3Blci48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBhcmFncmFwaFwiPkknbSBhbiBlbnRodXNpYXN0aWMgc29mdHdhcmUgZGV2ZWxvcGVyLCB0aGF0IGNvdmVycyB0aGUgZnVsbC1zdGFjayBkZXZlbG9wbWVudCBvZiBhIHdlYnNpdGUgYW5kIGFpbXMgdG8gYnVpbGQgcmVzcG9uc2l2ZSBhbmQgZW5nYWdpbmcgcHJvZHVjdHMuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbi1kaXZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvd29ya1wiPjxidXR0b24gY2xhc3NOYW1lPVwid29yay1idXR0b25cIj5NeSBXb3JrPC9idXR0b24+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFuaW1hdGVkLmRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17c3ByaW5nfVxyXG4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFuaW1hdGVkLmRpdiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJsYXJnZS1sb2dvLXRlc3RcIlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlTW92ZT17KHsgY2xpZW50WDogeCwgY2xpZW50WTogeSB9KSA9PiBzZXQoeyB4eXM6IGNhbGMoeCwgeSkgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXQoeyB4eXM6IFswLCAwLCAxXSB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB0cmFuc2Zvcm06IHByb3BzLnh5cy5pbnRlcnBvbGF0ZSh0cmFucykgfX0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9STG9nby5wbmdcIiBhbHQ9XCIucm9iZXJ0XCIgIGNsYXNzTmFtZT1cImJpZy1sb2dvXCIvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2FuaW1hdGVkLmRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYW5pbWF0ZWQuZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgKVxyXG5cclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBUZXN0OyJdLCJzb3VyY2VSb290IjoiIn0=