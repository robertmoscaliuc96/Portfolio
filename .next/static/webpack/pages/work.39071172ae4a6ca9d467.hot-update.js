webpackHotUpdate_N_E("pages/work",{

/***/ "./pages/work.js":
/*!***********************!*\
  !*** ./pages/work.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout/Navbar */ "./components/layout/Navbar.js");
/* harmony import */ var _components_layout_Head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout/Head */ "./components/layout/Head.js");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-spring */ "./node_modules/react-spring/web.js");
var _jsxFileName = "E:\\Portfolio\\pages\\work.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_3__["library"].add(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faGithub"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChrome"]);

function Work() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(["Projects."]),
      items = _useState[0],
      set = _useState[1];

  var textAnimation = Object(react_spring__WEBPACK_IMPORTED_MODULE_5__["useSpring"])({
    from: {
      transform: 'translateX(-70)',
      opacity: 0,
      height: 0
    },
    delay: 1100,
    to: {
      opacity: 1,
      height: "auto",
      transform: 'translateX(0)'
    },
    config: {
      mass: 1,
      tension: 250,
      friction: 200
    }
  });
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 12
    }
  }, __jsx(_components_layout_Head__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }), __jsx(_components_layout_Navbar__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "work-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 17
    }
  }, __jsx("h1", {
    className: "work-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 21
    }
  }, "Projects."), __jsx("div", {
    className: "work-inner",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "card",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "card-header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "card-img4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 29
    }
  }), __jsx("h1", {
    className: "card-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 33
    }
  }, "Cook At Home"), __jsx("div", {
    className: "card-description",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 33
    }
  }, __jsx("p", {
    className: "card-description",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 33
    }
  }, "Full-stack application using MERN stack where users share their recipes and find other recipes ideas using Edamame API. Project In progress..."), __jsx("div", {
    className: "card-tech",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 33
    }
  }, __jsx("p", {
    className: "card-technologies",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 37
    }
  }, "React"), __jsx("p", {
    className: "card-technologies",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 37
    }
  }, "NodeJS"), __jsx("p", {
    className: "card-technologies",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 37
    }
  }, "MongoDB"), __jsx("p", {
    className: "card-technologies",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 37
    }
  }, "Redux")), __jsx("div", {
    className: "card-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: "https://github.com/robertmoscaliuc96/Recipefy",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 37
    }
  }, __jsx("i", {
    className: "fab fa-github",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 93
    }
  })), __jsx("a", {
    href: "https://cook-at-homerecipefy.herokuapp.com/login",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 37
    }
  }, __jsx("i", {
    className: "fab fa-chrome",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 96
    }
  })))))), __jsx("div", {
    className: "card",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "card-header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "card-img",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 29
    }
  }), __jsx("h1", {
    className: "card-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 33
    }
  }, "Developers FAQ"), __jsx("div", {
    className: "card-description",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 33
    }
  }, __jsx("p", {
    className: "card-description",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 33
    }
  }, "Full-stack application using MERN stack for a FAQ website where users can authenticate, ask questions and get answer from other developers."), __jsx("div", {
    className: "card-tech",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 33
    }
  }, __jsx("p", {
    className: "card-technologies",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 37
    }
  }, "React"), __jsx("p", {
    className: "card-technologies",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 37
    }
  }, "NodeJS"), __jsx("p", {
    className: "card-technologies",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 37
    }
  }, "MongoDB"), __jsx("p", {
    className: "card-technologies",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 37
    }
  }, "Redux")), __jsx("div", {
    className: "card-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: "https://github.com/robertmoscaliuc96/FQA-Website",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 37
    }
  }, __jsx("i", {
    className: "fab fa-github",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 96
    }
  })), __jsx("a", {
    href: "https://floating-ocean-48991.herokuapp.com",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 37
    }
  }, __jsx("i", {
    className: "fab fa-chrome",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 90
    }
  })))))), __jsx("div", {
    className: "card",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "card-header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "card-img2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 29
    }
  }), __jsx("h1", {
    className: "card-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 33
    }
  }, "GitHub Finder"), __jsx("div", {
    className: "card-description",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 33
    }
  }, __jsx("p", {
    className: "card-description",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 33
    }
  }, "Web application that use GitHub API to search for different users and their details. Also, provide a second page for jobs searching from different location."), __jsx("div", {
    className: "card-tech",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 33
    }
  }, __jsx("p", {
    className: "card-technologies",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 37
    }
  }, "React"), __jsx("p", {
    className: "card-technologies",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 37
    }
  }, "Hooks"), __jsx("p", {
    className: "card-technologies",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 37
    }
  }, "Bootstrap")), __jsx("div", {
    className: "card-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: "https://github.com/robertmoscaliuc96/GitHub-Finder.git",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 37
    }
  }, __jsx("i", {
    className: "fab fa-github",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 102
    }
  })), __jsx("a", {
    href: "https://happy-noyce-52ce35.netlify.app/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 37
    }
  }, __jsx("i", {
    className: "fab fa-chrome",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 87
    }
  })))))), __jsx("div", {
    className: "card",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "card-header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "card-img3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 29
    }
  }), __jsx("h1", {
    className: "card-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 33
    }
  }, "Freelancing"), __jsx("div", {
    className: "card-description",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 33
    }
  }, __jsx("p", {
    className: "card-description",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 33
    }
  }, "Showcase website with the role to is to present services, information about a company and a contact form that sends messages to the company staff."), __jsx("div", {
    className: "card-tech",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 33
    }
  }, __jsx("p", {
    className: "card-technologies",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 37
    }
  }, "React"), __jsx("p", {
    className: "card-technologies",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 37
    }
  }, "Next.js"), __jsx("p", {
    className: "card-technologies",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 37
    }
  }, "NodeJS")), __jsx("div", {
    className: "card-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: "https://calm-ridge-27757.herokuapp.com/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 37
    }
  }, __jsx("i", {
    className: "fab fa-chrome",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 88
    }
  })))))))));
}

_s(Work, "7FOFlkcb8E2HmUg/B/uPfK1P3xQ=", false, function () {
  return [react_spring__WEBPACK_IMPORTED_MODULE_5__["useSpring"]];
});

_c = Work;
/* harmony default export */ __webpack_exports__["default"] = (Work);

var _c;

$RefreshReg$(_c, "Work");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvd29yay5qcyJdLCJuYW1lcyI6WyJsaWJyYXJ5IiwiYWRkIiwiZmFHaXRodWIiLCJmYUNocm9tZSIsIldvcmsiLCJ1c2VTdGF0ZSIsIml0ZW1zIiwic2V0IiwidGV4dEFuaW1hdGlvbiIsInVzZVNwcmluZyIsImZyb20iLCJ0cmFuc2Zvcm0iLCJvcGFjaXR5IiwiaGVpZ2h0IiwiZGVsYXkiLCJ0byIsImNvbmZpZyIsIm1hc3MiLCJ0ZW5zaW9uIiwiZnJpY3Rpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBSUFBLHlFQUFPLENBQUNDLEdBQVIsQ0FBWUMsMkVBQVosRUFBc0JDLDJFQUF0Qjs7QUFHQSxTQUFTQyxJQUFULEdBQWU7QUFBQTs7QUFBQSxrQkFDVUMsc0RBQVEsQ0FBQyxDQUFDLFdBQUQsQ0FBRCxDQURsQjtBQUFBLE1BQ0pDLEtBREk7QUFBQSxNQUNHQyxHQURIOztBQUdYLE1BQU1DLGFBQWEsR0FBR0MsOERBQVMsQ0FBQztBQUM1QkMsUUFBSSxFQUFFO0FBQ05DLGVBQVMsRUFBRSxpQkFETDtBQUVMQyxhQUFPLEVBQUUsQ0FGSjtBQUdMQyxZQUFNLEVBQUU7QUFISCxLQURzQjtBQVE1QkMsU0FBSyxFQUFFLElBUnFCO0FBUzVCQyxNQUFFLEVBQUU7QUFDRkgsYUFBTyxFQUFDLENBRE47QUFFRkMsWUFBTSxFQUFFLE1BRk47QUFHRkYsZUFBUyxFQUFFO0FBSFQsS0FUd0I7QUFjNUJLLFVBQU0sRUFBRTtBQUNOQyxVQUFJLEVBQUUsQ0FEQTtBQUVOQyxhQUFPLEVBQUUsR0FGSDtBQUdOQyxjQUFRLEVBQUU7QUFISjtBQWRvQixHQUFELENBQS9CO0FBc0JBLFNBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNILE1BQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURH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UTtBQUFLLGFBQVMsRUFBQyxrQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0E7QUFBRyxhQUFTLEVBQUMsa0JBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwSkFEQSxFQUVBO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUcsYUFBUyxFQUFDLG1CQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixFQUVJO0FBQUcsYUFBUyxFQUFDLG1CQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGSixFQUdJO0FBQUcsYUFBUyxFQUFDLG1CQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FISixDQUZBLEVBVUE7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSSxRQUFJLEVBQUMseUNBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFtRDtBQUFHLGFBQVMsRUFBQyxlQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBbkQsQ0FESixDQVZBLENBSFIsQ0FESixDQXJFQSxDQUZKLENBSEwsQ0FBUDtBQXdHSDs7R0FqSVFmLEk7VUFHaUJLLHNEOzs7S0FIakJMLEk7QUFxSU1BLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3dvcmsuMzkwNzExNzJhZTRhNmNhOWQ0NjcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOYXZiYXIgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQvTmF2YmFyJ1xyXG5pbXBvcnQgSGVhZElubmVyIGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0L0hlYWQnXHJcbmltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5cclxuaW1wb3J0IHsgbGlicmFyeSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZSdcclxuaW1wb3J0IHsgZmFHaXRodWIsZmFDaHJvbWV9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLWJyYW5kcy1zdmctaWNvbnMnXHJcblxyXG5pbXBvcnQge3VzZVRyYW5zaXRpb24sdXNlU3ByaW5nLCBhbmltYXRlZH0gZnJvbSAncmVhY3Qtc3ByaW5nJ1xyXG5cclxuXHJcblxyXG5saWJyYXJ5LmFkZChmYUdpdGh1YiwgZmFDaHJvbWUpXHJcblxyXG5cclxuZnVuY3Rpb24gV29yaygpe1xyXG4gICAgY29uc3QgW2l0ZW1zLCBzZXRdID0gdXNlU3RhdGUoW1wiUHJvamVjdHMuXCJdKVxyXG5cclxuICAgIGNvbnN0IHRleHRBbmltYXRpb24gPSB1c2VTcHJpbmcoe1xyXG4gICAgICAgIGZyb206IHtcclxuICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKC03MCknLFxyXG4gICAgICAgICBvcGFjaXR5OiAwLFxyXG4gICAgICAgICBoZWlnaHQ6IDAsXHJcblxyXG5cclxuICAgICAgICB9LFxyXG4gICAgICAgIGRlbGF5OiAxMTAwLFxyXG4gICAgICAgIHRvOiB7XHJcbiAgICAgICAgICBvcGFjaXR5OjEsXHJcbiAgICAgICAgICBoZWlnaHQ6IFwiYXV0b1wiLFxyXG4gICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgwKSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbmZpZzoge1xyXG4gICAgICAgICAgbWFzczogMSxcclxuICAgICAgICAgIHRlbnNpb246IDI1MCxcclxuICAgICAgICAgIGZyaWN0aW9uOiAyMDBcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuXHJcbiAgICByZXR1cm4oPGRpdj5cclxuICAgICAgICA8SGVhZElubmVyLz5cclxuICAgICAgICA8TmF2YmFyLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid29yay1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwid29yay10aXRsZVwiPlByb2plY3RzLjwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3b3JrLWlubmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1pbWc0XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+Q29vayBBdCBIb21lPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLWRlc2NyaXB0aW9uXCI+RnVsbC1zdGFjayBhcHBsaWNhdGlvbiB1c2luZyBNRVJOIHN0YWNrIHdoZXJlIHVzZXJzIHNoYXJlIHRoZWlyIHJlY2lwZXMgYW5kIGZpbmQgb3RoZXIgcmVjaXBlcyBpZGVhcyB1c2luZyBFZGFtYW1lIEFQSS4gUHJvamVjdCBJbiBwcm9ncmVzcy4uLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtdGVjaFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRlY2hub2xvZ2llc1wiPlJlYWN0PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRlY2hub2xvZ2llc1wiPk5vZGVKUzwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC10ZWNobm9sb2dpZXNcIj5Nb25nb0RCPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRlY2hub2xvZ2llc1wiPlJlZHV4PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgXHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtbGlua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3JvYmVydG1vc2NhbGl1Yzk2L1JlY2lwZWZ5XCI+PGkgY2xhc3NOYW1lPVwiZmFiIGZhLWdpdGh1YlwiPjwvaT48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2Nvb2stYXQtaG9tZXJlY2lwZWZ5Lmhlcm9rdWFwcC5jb20vbG9naW5cIj48aSBjbGFzc05hbWU9XCJmYWIgZmEtY2hyb21lXCI+PC9pPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaW1nXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+RGV2ZWxvcGVycyBGQVE8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1kZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtZGVzY3JpcHRpb25cIj5GdWxsLXN0YWNrIGFwcGxpY2F0aW9uIHVzaW5nIE1FUk4gc3RhY2sgZm9yIGEgRkFRIHdlYnNpdGUgd2hlcmUgdXNlcnMgY2FuIGF1dGhlbnRpY2F0ZSwgYXNrIHF1ZXN0aW9ucyBhbmQgZ2V0IGFuc3dlciBmcm9tIG90aGVyIGRldmVsb3BlcnMuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC10ZWNoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGVjaG5vbG9naWVzXCI+UmVhY3Q8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGVjaG5vbG9naWVzXCI+Tm9kZUpTPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRlY2hub2xvZ2llc1wiPk1vbmdvREI8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGVjaG5vbG9naWVzXCI+UmVkdXg8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICBcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1saW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vcm9iZXJ0bW9zY2FsaXVjOTYvRlFBLVdlYnNpdGVcIj48aSBjbGFzc05hbWU9XCJmYWIgZmEtZ2l0aHViXCI+PC9pPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZmxvYXRpbmctb2NlYW4tNDg5OTEuaGVyb2t1YXBwLmNvbVwiPjxpIGNsYXNzTmFtZT1cImZhYiBmYS1jaHJvbWVcIj48L2k+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1pbWcyXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+R2l0SHViIEZpbmRlcjwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC1kZXNjcmlwdGlvblwiPldlYiBhcHBsaWNhdGlvbiB0aGF0IHVzZSBHaXRIdWIgQVBJIHRvIHNlYXJjaCBmb3IgZGlmZmVyZW50IHVzZXJzIGFuZCB0aGVpciBkZXRhaWxzLiBBbHNvLCBwcm92aWRlIGEgc2Vjb25kIHBhZ2UgZm9yIGpvYnMgc2VhcmNoaW5nIGZyb20gZGlmZmVyZW50IGxvY2F0aW9uLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtdGVjaFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRlY2hub2xvZ2llc1wiPlJlYWN0PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRlY2hub2xvZ2llc1wiPkhvb2tzPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRlY2hub2xvZ2llc1wiPkJvb3RzdHJhcDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtbGlua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3JvYmVydG1vc2NhbGl1Yzk2L0dpdEh1Yi1GaW5kZXIuZ2l0XCI+PGkgY2xhc3NOYW1lPVwiZmFiIGZhLWdpdGh1YlwiPjwvaT48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2hhcHB5LW5veWNlLTUyY2UzNS5uZXRsaWZ5LmFwcC9cIj48aSBjbGFzc05hbWU9XCJmYWIgZmEtY2hyb21lXCI+PC9pPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaW1nM1wiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPkZyZWVsYW5jaW5nPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLWRlc2NyaXB0aW9uXCI+U2hvd2Nhc2Ugd2Vic2l0ZSB3aXRoIHRoZSByb2xlIHRvIGlzIHRvIHByZXNlbnQgc2VydmljZXMsIGluZm9ybWF0aW9uIGFib3V0IGEgY29tcGFueSBhbmQgYSBjb250YWN0IGZvcm0gdGhhdCBzZW5kcyBtZXNzYWdlcyB0byB0aGUgY29tcGFueSBzdGFmZi48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLXRlY2hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC10ZWNobm9sb2dpZXNcIj5SZWFjdDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC10ZWNobm9sb2dpZXNcIj5OZXh0LmpzPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRlY2hub2xvZ2llc1wiPk5vZGVKUzwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICBcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1saW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhICBocmVmPVwiaHR0cHM6Ly9jYWxtLXJpZGdlLTI3NzU3Lmhlcm9rdWFwcC5jb20vXCI+PGkgY2xhc3NOYW1lPVwiZmFiIGZhLWNocm9tZVwiPjwvaT48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgPC9kaXY+XHJcbiAgICApXHJcbn0gIFxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBXb3JrOyJdLCJzb3VyY2VSb290IjoiIn0=