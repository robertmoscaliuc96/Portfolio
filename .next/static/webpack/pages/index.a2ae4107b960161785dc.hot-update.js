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

var SELECTOR = {
  DEMO: document.querySelector('.js-demo')
};
var CLASSES = {
  ANIMATED: "is-animated"
};
SELECTOR.DEMO.addEventListener('click', function () {
  SELECTOR.DEMO.classList.add(CLASSES.ANIMATED);
  var timer = setInterval(function () {
    SELECTOR.DEMO.classList.remove(CLASSES.ANIMATED);
    clearInterval(timer);
  }, 1500);
});

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
      opacity: 0,
      transform: 'rotateZ(0deg)'
    },
    delay: 700,
    to: {
      opacity: 1,
      transform: 'rotateZ(-31deg)'
    },
    config: {
      mass: 1.5,
      tension: 50,
      friction: 8
    }
  });
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }, __jsx(_components_layout_Head__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 17
    }
  }), __jsx(_components_layout_Navbar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "home-image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "home-inner",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "home-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 33
    }
  }, __jsx("h1", {
    className: "large",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 37
    }
  }, "Hi,"), __jsx("h1", {
    className: "large-name",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 37
    }
  }, "I'm Robert,"), __jsx("h1", {
    className: "large-name name-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 37
    }
  }, "web developer."), __jsx("p", {
    className: "paragraph",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 37
    }
  }, "I'm an enthusiastic software developer, that covers the full-stack development of a website and aims to build responsive and engaging products."), __jsx("div", {
    className: "button-div",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 37
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/work",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 41
    }
  }, __jsx("button", {
    className: "work-button",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 60
    }
  }, "My Work")))), __jsx(react_spring__WEBPACK_IMPORTED_MODULE_5__["animated"].div, {
    style: spring,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 33
    }
  }, __jsx(react_spring__WEBPACK_IMPORTED_MODULE_5__["animated"].div, {
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
      lineNumber: 78,
      columnNumber: 45
    }
  }, __jsx("img", {
    src: "/RLogo.png",
    alt: ".robert",
    className: "large-logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbGFuZGluZy5qcyJdLCJuYW1lcyI6WyJjYWxjIiwieCIsInkiLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsImlubmVyV2lkdGgiLCJ0cmFucyIsInMiLCJTRUxFQ1RPUiIsIkRFTU8iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJDTEFTU0VTIiwiQU5JTUFURUQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2xhc3NMaXN0IiwiYWRkIiwidGltZXIiLCJzZXRJbnRlcnZhbCIsInJlbW92ZSIsImNsZWFySW50ZXJ2YWwiLCJMYW5kaW5nIiwidXNlU3ByaW5nIiwieHlzIiwiY29uZmlnIiwibWFzcyIsInRlbnNpb24iLCJmcmljdGlvbiIsInByb3BzIiwic2V0Iiwic3ByaW5nIiwiZnJvbSIsIm9wYWNpdHkiLCJ0cmFuc2Zvcm0iLCJkZWxheSIsInRvIiwiY2xpZW50WCIsImNsaWVudFkiLCJpbnRlcnBvbGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFDQyxDQUFELEVBQUlDLENBQUo7QUFBQSxTQUFVLENBQUMsRUFBRUEsQ0FBQyxHQUFHQyxNQUFNLENBQUNDLFdBQVAsR0FBcUIsQ0FBM0IsSUFBZ0MsRUFBakMsRUFBcUMsQ0FBQ0gsQ0FBQyxHQUFHRSxNQUFNLENBQUNFLFVBQVAsR0FBb0IsQ0FBekIsSUFBOEIsRUFBbkUsRUFBdUUsSUFBdkUsQ0FBVjtBQUFBLENBQWI7O0FBRUEsSUFBTUMsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ0wsQ0FBRCxFQUFJQyxDQUFKLEVBQU9LLENBQVA7QUFBQSwrQ0FBNENOLENBQTVDLDBCQUE2REMsQ0FBN0Qsd0JBQTRFSyxDQUE1RTtBQUFBLENBQWQ7O0FBRUEsSUFBTUMsUUFBUSxHQUFHO0FBQ2ZDLE1BQUksRUFBRUMsUUFBUSxDQUFDQyxhQUFU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QUFBO0FBQUEsS0FJWSxNQUFDLHFEQUFELENBQVUsR0FBVjtBQUNBLGVBQVcsRUFBRTtBQUFBLFVBQVk3QixDQUFaLFFBQUdtQyxPQUFIO0FBQUEsVUFBd0JsQyxDQUF4QixRQUFlbUMsT0FBZjtBQUFBLGFBQWdDUixHQUFHLENBQUM7QUFBRU4sV0FBRyxFQUFFdkIsSUFBSSxDQUFDQyxDQUFELEVBQUlDLENBQUo7QUFBWCxPQUFELENBQW5DO0FBQUEsS0FEYjtBQUVBLGdCQUFZLEVBQUU7QUFBQSxhQUFNMkIsR0FBRyxDQUFDO0FBQUVOLFdBQUcsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUDtBQUFQLE9BQUQsQ0FBVDtBQUFBLEtBRmQ7QUFHQSxTQUFLLEVBQUU7QUFBRVUsZUFBUyxFQUFFTCxLQUFLLENBQUNMLEdBQU4sQ0FBVWUsV0FBVixDQUFzQmhDLEtBQXRCO0FBQWIsS0FIUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSUk7QUFBSyxPQUFHLEVBQUMsWUFBVDtBQUFzQixPQUFHLEVBQUMsU0FBMUI7QUFBcUMsYUFBUyxFQUFDLFlBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKSixDQUpaLENBWkosQ0FEUixDQUhSLENBREo7QUFxQ1A7O0dBakVRZSxPO1VBQ2dCQyxzRCxFQUVOQSxzRDs7O0tBSFZELE87QUFxRU1BLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmEyYWU0MTA3Yjk2MDE2MTc4NWRjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmF2YmFyIGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0L05hdmJhcic7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IEhlYWRJbm5lciBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dC9IZWFkJztcclxuaW1wb3J0IHt1c2VTcHJpbmcsIGFuaW1hdGVkfSBmcm9tICdyZWFjdC1zcHJpbmcnXHJcblxyXG5cclxuY29uc3QgY2FsYyA9ICh4LCB5KSA9PiBbLSh5IC0gd2luZG93LmlubmVySGVpZ2h0IC8gMikgLyAyMCwgKHggLSB3aW5kb3cuaW5uZXJXaWR0aCAvIDIpIC8gMjAsIDEuMDVdXHJcblxyXG5jb25zdCB0cmFucyA9ICh4LCB5LCBzKSA9PiBgcGVyc3BlY3RpdmUoMTgwMHB4KSByb3RhdGVYKCR7eH1kZWcpIHJvdGF0ZVkoJHt5fWRlZykgc2NhbGUoJHtzfSlgXHJcblxyXG5jb25zdCBTRUxFQ1RPUiA9IHtcclxuICBERU1POiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtZGVtbycpLFxyXG59XHJcblxyXG5jb25zdCBDTEFTU0VTID0ge1xyXG4gIEFOSU1BVEVEOiBgaXMtYW5pbWF0ZWRgXHJcbn1cclxuXHJcblNFTEVDVE9SLkRFTU8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgU0VMRUNUT1IuREVNTy5jbGFzc0xpc3QuYWRkKENMQVNTRVMuQU5JTUFURUQpO1xyXG4gIFxyXG4gIGNvbnN0IHRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgU0VMRUNUT1IuREVNTy5jbGFzc0xpc3QucmVtb3ZlKENMQVNTRVMuQU5JTUFURUQpO1xyXG4gICAgY2xlYXJJbnRlcnZhbCh0aW1lcilcclxuICB9LCAxNTAwKVxyXG59KTtcclxuXHJcblxyXG5mdW5jdGlvbiBMYW5kaW5nICgpe1xyXG4gICAgY29uc3QgW3Byb3BzLCBzZXRdID0gdXNlU3ByaW5nKCgpID0+ICh7eHlzOiBbMCwgMCwgMV0sIGNvbmZpZzogeyBtYXNzOiA1LCB0ZW5zaW9uOiAzNTAsIGZyaWN0aW9uOiA0MCB9IH0pKVxyXG5cclxuICAgIGNvbnN0IHNwcmluZyA9IHVzZVNwcmluZyh7XHJcbiAgICAgICAgZnJvbToge1xyXG4gICAgICAgICAgb3BhY2l0eTogMCxcclxuICAgICAgICAgIHRyYW5zZm9ybTogJ3JvdGF0ZVooMGRlZyknXHJcblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGVsYXk6IDcwMCxcclxuXHJcbiAgICAgICAgdG86IHtcclxuICAgICAgICAgIG9wYWNpdHk6MSxcclxuICAgICAgICAgIHRyYW5zZm9ybTogJ3JvdGF0ZVooLTMxZGVnKScsXHJcblxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGNvbmZpZzoge1xyXG4gICAgICAgICAgbWFzczogMS41LFxyXG4gICAgICAgICAgdGVuc2lvbjogNTAsXHJcbiAgICAgICAgICBmcmljdGlvbjogOCxcclxuXHJcbiAgICAgICAgICBcclxuXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8SGVhZElubmVyLz5cclxuICAgICAgICAgICAgICAgIDxOYXZiYXIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9tZS1pbWFnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob21lLWlubmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob21lLXRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImxhcmdlXCI+SGksPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImxhcmdlLW5hbWVcIj5JJ20gUm9iZXJ0LDwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJsYXJnZS1uYW1lIG5hbWUtdGl0bGVcIj53ZWIgZGV2ZWxvcGVyLjwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBhcmFncmFwaFwiPkknbSBhbiBlbnRodXNpYXN0aWMgc29mdHdhcmUgZGV2ZWxvcGVyLCB0aGF0IGNvdmVycyB0aGUgZnVsbC1zdGFjayBkZXZlbG9wbWVudCBvZiBhIHdlYnNpdGUgYW5kIGFpbXMgdG8gYnVpbGQgcmVzcG9uc2l2ZSBhbmQgZW5nYWdpbmcgcHJvZHVjdHMuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbi1kaXZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvd29ya1wiPjxidXR0b24gY2xhc3NOYW1lPVwid29yay1idXR0b25cIj5NeSBXb3JrPC9idXR0b24+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlZC5kaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3NwcmluZ31cclxuXHJcbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YW5pbWF0ZWQuZGl2ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlTW92ZT17KHsgY2xpZW50WDogeCwgY2xpZW50WTogeSB9KSA9PiBzZXQoeyB4eXM6IGNhbGMoeCwgeSkgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXQoeyB4eXM6IFswLCAwLCAxXSB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB0cmFuc2Zvcm06IHByb3BzLnh5cy5pbnRlcnBvbGF0ZSh0cmFucykgfX0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9STG9nby5wbmdcIiBhbHQ9XCIucm9iZXJ0XCIgIGNsYXNzTmFtZT1cImxhcmdlLWxvZ29cIi8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYW5pbWF0ZWQuZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hbmltYXRlZC5kaXY+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgKVxyXG5cclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYW5kaW5nOyJdLCJzb3VyY2VSb290IjoiIn0=