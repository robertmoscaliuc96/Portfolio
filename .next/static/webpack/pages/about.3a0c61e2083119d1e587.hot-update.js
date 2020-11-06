webpackHotUpdate_N_E("pages/about",{

/***/ "./components/layout/Map1.js":
/*!***********************************!*\
  !*** ./components/layout/Map1.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process, module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _react_google_maps_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @react-google-maps/api */ "./node_modules/@react-google-maps/api/dist/reactgooglemapsapi.esm.js");
/* harmony import */ var react_map_gl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-map-gl */ "./node_modules/react-map-gl/dist/esm/index.js");
/* harmony import */ var _MapStyle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MapStyle */ "./components/layout/MapStyle.js");



var _jsxFileName = "E:\\Portfolio\\components\\layout\\Map1.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





var libraries = ["places"];
var mapContainerStyle = {
  height: "100vh",
  width: "100vw"
};
var options = {
  styles: _MapStyle__WEBPACK_IMPORTED_MODULE_5__["default"],
  disableDefaultUI: true,
  zoomControl: true
};
var center = {
  lat: 53.475433,
  lng: -2.236497
};
function App() {
  _s();

  var _this = this;

  var _useLoadScript = Object(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_3__["useLoadScript"])({
    googleMapsApiKey: process.env.GOOGLE_MAP_API,
    libraries: libraries
  }),
      isLoaded = _useLoadScript.isLoaded,
      loadError = _useLoadScript.loadError;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState([]),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      markers = _React$useState2[0],
      setMarkers = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(null),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState3, 2),
      selected = _React$useState4[0],
      setSelected = _React$useState4[1];

  var onMapClick = react__WEBPACK_IMPORTED_MODULE_2___default.a.useCallback(function (e) {
    setMarkers(function (current) {
      return [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(current), [{
        lat: e.latLng.lat(),
        lng: e.latLng.lng(),
        time: new Date()
      }]);
    });
  }, []);
  var mapRef = react__WEBPACK_IMPORTED_MODULE_2___default.a.useRef();
  var onMapLoad = react__WEBPACK_IMPORTED_MODULE_2___default.a.useCallback(function (map) {
    mapRef.current = map;
  }, []);
  if (loadError) return "Error";
  if (!isLoaded) return "Loading...";
  return __jsx(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_3__["GoogleMap"], {
    id: "map",
    mapContainerStyle: mapContainerStyle,
    zoom: 8,
    center: center,
    options: options,
    onClick: onMapClick,
    onLoad: onMapLoad,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 11
    }
  }, markers.map(function (marker) {
    return __jsx(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_3__["Marker"], {
      key: "".concat(marker.lat, "-").concat(marker.lng),
      position: {
        lat: marker.lat,
        lng: marker.lng
      },
      onClick: function onClick() {
        setSelected(marker);
      },
      icon: {
        url: "/bear.svg",
        origin: new window.google.maps.Point(0, 0),
        anchor: new window.google.maps.Point(15, 15),
        scaledSize: new window.google.maps.Size(30, 30)
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 15
      }
    });
  }), selected ? __jsx(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_3__["InfoWindow"], {
    position: {
      lat: selected.lat,
      lng: selected.lng
    },
    onCloseClick: function onCloseClick() {
      setSelected(null);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 15
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 17
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 19
    }
  }, __jsx("span", {
    role: "img",
    "aria-label": "bear",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 21
    }
  }, "\uD83D\uDC3B"), " ", "Alert"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 19
    }
  }, "Spotted ", formatRelative(selected.time, new Date())))) : null);
}

_s(App, "HyDyb1nIM3Rs9T3MKDPEtfZQEZk=", false, function () {
  return [_react_google_maps_api__WEBPACK_IMPORTED_MODULE_3__["useLoadScript"]];
});

_c = App;

var _c;

$RefreshReg$(_c, "App");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/process/browser.js */ "./node_modules/process/browser.js"), __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvTWFwMS5qcyJdLCJuYW1lcyI6WyJsaWJyYXJpZXMiLCJtYXBDb250YWluZXJTdHlsZSIsImhlaWdodCIsIndpZHRoIiwib3B0aW9ucyIsInN0eWxlcyIsIm1hcFN0eWxlcyIsImRpc2FibGVEZWZhdWx0VUkiLCJ6b29tQ29udHJvbCIsImNlbnRlciIsImxhdCIsImxuZyIsIkFwcCIsInVzZUxvYWRTY3JpcHQiLCJnb29nbGVNYXBzQXBpS2V5IiwicHJvY2VzcyIsImVudiIsIkdPT0dMRV9NQVBfQVBJIiwiaXNMb2FkZWQiLCJsb2FkRXJyb3IiLCJSZWFjdCIsInVzZVN0YXRlIiwibWFya2VycyIsInNldE1hcmtlcnMiLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwib25NYXBDbGljayIsInVzZUNhbGxiYWNrIiwiZSIsImN1cnJlbnQiLCJsYXRMbmciLCJ0aW1lIiwiRGF0ZSIsIm1hcFJlZiIsInVzZVJlZiIsIm9uTWFwTG9hZCIsIm1hcCIsIm1hcmtlciIsInVybCIsIm9yaWdpbiIsIndpbmRvdyIsImdvb2dsZSIsIm1hcHMiLCJQb2ludCIsImFuY2hvciIsInNjYWxlZFNpemUiLCJTaXplIiwiZm9ybWF0UmVsYXRpdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBRyxDQUFDLFFBQUQsQ0FBbEI7QUFDQSxJQUFNQyxpQkFBaUIsR0FBRztBQUN4QkMsUUFBTSxFQUFFLE9BRGdCO0FBRXhCQyxPQUFLLEVBQUU7QUFGaUIsQ0FBMUI7QUFLQSxJQUFNQyxPQUFPLEdBQUc7QUFDWkMsUUFBTSxFQUFFQyxpREFESTtBQUVaQyxrQkFBZ0IsRUFBRSxJQUZOO0FBR1pDLGFBQVcsRUFBRTtBQUhELENBQWhCO0FBTUUsSUFBTUMsTUFBTSxHQUFHO0FBQ2JDLEtBQUcsRUFBRSxTQURRO0FBRWJDLEtB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Q0UsWUFBUSxFQUFFO0FBQUVkLFNBQUcsRUFBRWMsUUFBUSxDQUFDZCxHQUFoQjtBQUFxQkMsU0FBRyxFQUFFYSxRQUFRLENBQUNiO0FBQW5DLEtBRFo7QUFFRSxnQkFBWSxFQUFFLHdCQUFNO0FBQ2xCYyxpQkFBVyxDQUFDLElBQUQsQ0FBWDtBQUNELEtBSkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTSxRQUFJLEVBQUMsS0FBWDtBQUFpQixrQkFBVyxNQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLEVBR1UsR0FIVixVQURGLEVBT0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBWXNCLGNBQWMsQ0FBQ3ZCLFFBQVEsQ0FBQ08sSUFBVixFQUFnQixJQUFJQyxJQUFKLEVBQWhCLENBQTFCLENBUEYsQ0FORixDQURPLEdBaUJMLElBMUNOLENBREo7QUE4Q0Q7O0dBekVxQnBCLEc7VUFDVUMsb0U7OztLQURWRCxHIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Fib3V0LjNhMGM2MWUyMDgzMTE5ZDFlNTg3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgR29vZ2xlTWFwLFxyXG4gIHVzZUxvYWRTY3JpcHQsXHJcbiAgTWFya2VyLFxyXG4gIEluZm9XaW5kb3csXHJcbn0gZnJvbSBcIkByZWFjdC1nb29nbGUtbWFwcy9hcGlcIjtcclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3RNYXBHTCBmcm9tICdyZWFjdC1tYXAtZ2wnO1xyXG5pbXBvcnQgbWFwU3R5bGVzIGZyb20gXCIuL01hcFN0eWxlXCJcclxuXHJcbmNvbnN0IGxpYnJhcmllcyA9IFtcInBsYWNlc1wiXTtcclxuY29uc3QgbWFwQ29udGFpbmVyU3R5bGUgPSB7XHJcbiAgaGVpZ2h0OiBcIjEwMHZoXCIsXHJcbiAgd2lkdGg6IFwiMTAwdndcIixcclxufTtcclxuXHJcbmNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICBzdHlsZXM6IG1hcFN0eWxlcyxcclxuICAgIGRpc2FibGVEZWZhdWx0VUk6IHRydWUsXHJcbiAgICB6b29tQ29udHJvbDogdHJ1ZSxcclxuICB9O1xyXG5cclxuICBjb25zdCBjZW50ZXIgPSB7XHJcbiAgICBsYXQ6IDUzLjQ3NTQzMyxcclxuICAgIGxuZzogLTIuMjM2NDk3LFxyXG4gIH07XHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcclxuICAgIGNvbnN0IHsgaXNMb2FkZWQsIGxvYWRFcnJvciB9ID0gdXNlTG9hZFNjcmlwdCh7XHJcbiAgICAgIGdvb2dsZU1hcHNBcGlLZXk6IHByb2Nlc3MuZW52LkdPT0dMRV9NQVBfQVBJLFxyXG4gICAgICBsaWJyYXJpZXMsXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IFttYXJrZXJzLCBzZXRNYXJrZXJzXSA9IFJlYWN0LnVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtzZWxlY3RlZCwgc2V0U2VsZWN0ZWRdID0gUmVhY3QudXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBvbk1hcENsaWNrID0gUmVhY3QudXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgICAgICBzZXRNYXJrZXJzKChjdXJyZW50KSA9PiBbXHJcbiAgICAgICAgICAuLi5jdXJyZW50LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBsYXQ6IGUubGF0TG5nLmxhdCgpLFxyXG4gICAgICAgICAgICBsbmc6IGUubGF0TG5nLmxuZygpLFxyXG4gICAgICAgICAgICB0aW1lOiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdKTtcclxuICAgICAgfSwgW10pO1xyXG4gICAgXHJcbiAgICAgIGNvbnN0IG1hcFJlZiA9IFJlYWN0LnVzZVJlZigpO1xyXG4gICAgICBjb25zdCBvbk1hcExvYWQgPSBSZWFjdC51c2VDYWxsYmFjaygobWFwKSA9PiB7XHJcbiAgICAgICAgbWFwUmVmLmN1cnJlbnQgPSBtYXA7XHJcbiAgICAgIH0sIFtdKTtcclxuICAgIFxyXG5cclxuICAgIFxyXG4gICAgICBpZiAobG9hZEVycm9yKSByZXR1cm4gXCJFcnJvclwiO1xyXG4gICAgICBpZiAoIWlzTG9hZGVkKSByZXR1cm4gXCJMb2FkaW5nLi4uXCI7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8R29vZ2xlTWFwXHJcbiAgICAgICAgICAgIGlkPVwibWFwXCJcclxuICAgICAgICAgICAgbWFwQ29udGFpbmVyU3R5bGU9e21hcENvbnRhaW5lclN0eWxlfVxyXG4gICAgICAgICAgICB6b29tPXs4fVxyXG4gICAgICAgICAgICBjZW50ZXI9e2NlbnRlcn1cclxuICAgICAgICAgICAgb3B0aW9ucz17b3B0aW9uc31cclxuICAgICAgICAgICAgb25DbGljaz17b25NYXBDbGlja31cclxuICAgICAgICAgICAgb25Mb2FkPXtvbk1hcExvYWR9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHttYXJrZXJzLm1hcCgobWFya2VyKSA9PiAoXHJcbiAgICAgICAgICAgICAgPE1hcmtlclxyXG4gICAgICAgICAgICAgICAga2V5PXtgJHttYXJrZXIubGF0fS0ke21hcmtlci5sbmd9YH1cclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uPXt7IGxhdDogbWFya2VyLmxhdCwgbG5nOiBtYXJrZXIubG5nIH19XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkKG1hcmtlcik7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgaWNvbj17e1xyXG4gICAgICAgICAgICAgICAgICB1cmw6IGAvYmVhci5zdmdgLFxyXG4gICAgICAgICAgICAgICAgICBvcmlnaW46IG5ldyB3aW5kb3cuZ29vZ2xlLm1hcHMuUG9pbnQoMCwgMCksXHJcbiAgICAgICAgICAgICAgICAgIGFuY2hvcjogbmV3IHdpbmRvdy5nb29nbGUubWFwcy5Qb2ludCgxNSwgMTUpLFxyXG4gICAgICAgICAgICAgICAgICBzY2FsZWRTaXplOiBuZXcgd2luZG93Lmdvb2dsZS5tYXBzLlNpemUoMzAsIDMwKSxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICBcclxuICAgICAgICAgICAge3NlbGVjdGVkID8gKFxyXG4gICAgICAgICAgICAgIDxJbmZvV2luZG93XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbj17eyBsYXQ6IHNlbGVjdGVkLmxhdCwgbG5nOiBzZWxlY3RlZC5sbmcgfX1cclxuICAgICAgICAgICAgICAgIG9uQ2xvc2VDbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZChudWxsKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPGgyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHJvbGU9XCJpbWdcIiBhcmlhLWxhYmVsPVwiYmVhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAg8J+Qu1xyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgQWxlcnRcclxuICAgICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgICAgPHA+U3BvdHRlZCB7Zm9ybWF0UmVsYXRpdmUoc2VsZWN0ZWQudGltZSwgbmV3IERhdGUoKSl9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9JbmZvV2luZG93PlxyXG4gICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgIDwvR29vZ2xlTWFwPlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4iXSwic291cmNlUm9vdCI6IiJ9