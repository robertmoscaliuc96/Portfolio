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
      friction: 8
    }
  });
  return __jsx("div", {
    className: "homepage",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, __jsx(_components_layout_Head__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 17
    }
  }), __jsx(_components_layout_Navbar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "home-image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "home-inner",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "home-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 33
    }
  }, __jsx("p", {
    className: "large",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 37
    }
  }, "Hi,"), __jsx("p", {
    className: "large-name",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 37
    }
  }, "I'm Robert,"), __jsx("p", {
    className: "large-name",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 37
    }
  }, "web developer."), __jsx("p", {
    className: "paragraph",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 37
    }
  }, "I'm an enthusiastic software developer, that covers the full-stack development of a website and aims to build responsive and engaging products."), __jsx("div", {
    className: "button-div",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 37
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/work",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 41
    }
  }, __jsx("button", {
    className: "work-button",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 60
    }
  }, "My Work")))), __jsx(react_spring__WEBPACK_IMPORTED_MODULE_5__["animated"].div, {
    style: spring,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
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
      lineNumber: 52,
      columnNumber: 45
    }
  }, __jsx("img", {
    src: "/RLogo.png",
    alt: ".robert",
    className: "big-logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbGFuZGluZy5qcyJdLCJuYW1lcyI6WyJjYWxjIiwieCIsInkiLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsImlubmVyV2lkdGgiLCJ0cmFucyIsInMiLCJMYW5kaW5nIiwidXNlU3ByaW5nIiwieHlzIiwiY29uZmlnIiwibWFzcyIsInRlbnNpb24iLCJmcmljdGlvbiIsInByb3BzIiwic2V0Iiwic3ByaW5nIiwiZnJvbSIsInRyYW5zZm9ybSIsIm9wYWNpdHkiLCJ0byIsImNsaWVudFgiLCJjbGllbnRZIiwiaW50ZXJwb2xhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQ0MsQ0FBRCxFQUFJQyxDQUFKO0FBQUEsU0FBVSxDQUFDLEVBQUVBLENBQUMsR0FBR0MsTUFBTSxDQUFDQyxXQUFQLEdBQXFCLENBQTNCLElBQWdDLEVBQWpDLEVBQXFDLENBQUNILENBQUMsR0FBR0UsTUFBTSxDQUFDRSxVQUFQLEdBQW9CLENBQXpCLElBQThCLEVBQW5FLEVBQXVFLElBQXZFLENBQVY7QUFBQSxDQUFiOztBQUVBLElBQU1DLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUNMLENBQUQsRUFBSUMsQ0FBSixFQUFPSyxDQUFQO0FBQUEsK0NBQTRDTixDQUE1QywwQkFBNkRDLENBQTdELHdCQUE0RUssQ0FBNUU7QUFBQSxDQUFkOztBQUdBLFNBQVNDLE9BQVQsR0FBbUI7QUFBQTs7QUFBQSxtQkFDTUMsOERBQVMsQ0FBQztBQUFBLFdBQU87QUFBRUMsU0FBRyxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBQVA7QUFBa0JDLFlBQU0sRUFBRTtBQUFFQyxZQUFJLEVBQUUsQ0FBUjtBQUFXQyxlQUFPLEVBQUUsR0FBcEI7QUFBeUJDLGdCQUFRLEVBQUU7QUFBbkM7QUFBMUIsS0FBUDtBQUFB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UDs7R0F4RFFFLE87VUFDZ0JDLHNELEVBRU5BLHNEOzs7S0FIVkQsTztBQTRETUEsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMDZhODY1ODFjZDFkNGRlN2U0MjYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOYXZiYXIgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQvTmF2YmFyJztcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgSGVhZElubmVyIGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0L0hlYWQnO1xyXG5pbXBvcnQge3VzZVNwcmluZywgYW5pbWF0ZWR9IGZyb20gJ3JlYWN0LXNwcmluZydcclxuXHJcblxyXG5jb25zdCBjYWxjID0gKHgsIHkpID0+IFstKHkgLSB3aW5kb3cuaW5uZXJIZWlnaHQgLyAyKSAvIDIwLCAoeCAtIHdpbmRvdy5pbm5lcldpZHRoIC8gMikgLyAyMCwgMS4wNV1cclxuXHJcbmNvbnN0IHRyYW5zID0gKHgsIHksIHMpID0+IGBwZXJzcGVjdGl2ZSgxODAwcHgpIHJvdGF0ZVgoJHt4fWRlZykgcm90YXRlWSgke3l9ZGVnKSBzY2FsZSgke3N9KWBcclxuXHJcblxyXG5mdW5jdGlvbiBMYW5kaW5nICgpe1xyXG4gICAgY29uc3QgW3Byb3BzLCBzZXRdID0gdXNlU3ByaW5nKCgpID0+ICh7IHh5czogWzAsIDAsIDFdLCBjb25maWc6IHsgbWFzczogNSwgdGVuc2lvbjogMzUwLCBmcmljdGlvbjogNDAgfSB9KSlcclxuXHJcbiAgICBjb25zdCBzcHJpbmcgPSB1c2VTcHJpbmcoe1xyXG4gICAgICAgIGZyb206IHtcclxuICAgICAgICAgIHRyYW5zZm9ybTogJ3JvdGF0ZVooMGRlZyknLFxyXG4gICAgICAgICAgb3BhY2l0eTogMFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdG86IHtcclxuICAgICAgICAgIHRyYW5zZm9ybTogJ3JvdGF0ZVooLTMxZGVnKScsXHJcbiAgICAgICAgICBvcGFjaXR5OjFcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbmZpZzoge1xyXG4gICAgICAgICAgbWFzczogMS41LFxyXG4gICAgICAgICAgdGVuc2lvbjogNTAsXHJcbiAgICAgICAgICBmcmljdGlvbjogOCxcclxuXHJcbiAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbWVwYWdlXCI+XHJcbiAgICAgICAgICAgICAgICA8SGVhZElubmVyLz5cclxuICAgICAgICAgICAgICAgIDxOYXZiYXIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9tZS1pbWFnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob21lLWlubmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob21lLXRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibGFyZ2VcIj5IaSw8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImxhcmdlLW5hbWVcIj5JJ20gUm9iZXJ0LDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibGFyZ2UtbmFtZVwiPndlYiBkZXZlbG9wZXIuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwYXJhZ3JhcGhcIj5JJ20gYW4gZW50aHVzaWFzdGljIHNvZnR3YXJlIGRldmVsb3BlciwgdGhhdCBjb3ZlcnMgdGhlIGZ1bGwtc3RhY2sgZGV2ZWxvcG1lbnQgb2YgYSB3ZWJzaXRlIGFuZCBhaW1zIHRvIGJ1aWxkIHJlc3BvbnNpdmUgYW5kIGVuZ2FnaW5nIHByb2R1Y3RzLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24tZGl2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3dvcmtcIj48YnV0dG9uIGNsYXNzTmFtZT1cIndvcmstYnV0dG9uXCI+TXkgV29yazwvYnV0dG9uPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlZC5kaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3NwcmluZ31cclxuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlZC5kaXYgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibGFyZ2UtbG9nby10ZXN0XCJcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZU1vdmU9eyh7IGNsaWVudFg6IHgsIGNsaWVudFk6IHkgfSkgPT4gc2V0KHsgeHlzOiBjYWxjKHgsIHkpIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0KHsgeHlzOiBbMCwgMCwgMV0gfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgdHJhbnNmb3JtOiBwcm9wcy54eXMuaW50ZXJwb2xhdGUodHJhbnMpIH19ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvUkxvZ28ucG5nXCIgYWx0PVwiLnJvYmVydFwiICBjbGFzc05hbWU9XCJiaWctbG9nb1wiLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hbmltYXRlZC5kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2FuaW1hdGVkLmRpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgIClcclxuXHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGFuZGluZzsiXSwic291cmNlUm9vdCI6IiJ9