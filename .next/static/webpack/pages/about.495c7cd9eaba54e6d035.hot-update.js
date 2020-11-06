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
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 11
    }
  }, "Bears", " ", __jsx("span", {
    role: "img",
    "aria-label": "tent",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }
  }, "\u26FA\uFE0F")), __jsx(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_3__["GoogleMap"], {
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
      lineNumber: 65,
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
        lineNumber: 75,
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
      lineNumber: 91,
      columnNumber: 15
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 17
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 19
    }
  }, __jsx("span", {
    role: "img",
    "aria-label": "bear",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 21
    }
  }, "\uD83D\uDC3B"), " ", "Alert"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 19
    }
  }, "Spotted ", formatRelative(selected.time, new Date())))) : null));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvTWFwMS5qcyJdLCJuYW1lcyI6WyJsaWJyYXJpZXMiLCJtYXBDb250YWluZXJTdHlsZSIsImhlaWdodCIsIndpZHRoIiwib3B0aW9ucyIsInN0eWxlcyIsIm1hcFN0eWxlcyIsImRpc2FibGVEZWZhdWx0VUkiLCJ6b29tQ29udHJvbCIsImNlbnRlciIsImxhdCIsImxuZyIsIkFwcCIsInVzZUxvYWRTY3JpcHQiLCJnb29nbGVNYXBzQXBpS2V5IiwicHJvY2VzcyIsImVudiIsIkdPT0dMRV9NQVBfQVBJIiwiaXNMb2FkZWQiLCJsb2FkRXJyb3IiLCJSZWFjdCIsInVzZVN0YXRlIiwibWFya2VycyIsInNldE1hcmtlcnMiLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwib25NYXBDbGljayIsInVzZUNhbGxiYWNrIiwiZSIsImN1cnJlbnQiLCJsYXRMbmciLCJ0aW1lIiwiRGF0ZSIsIm1hcFJlZiIsInVzZVJlZiIsIm9uTWFwTG9hZCIsIm1hcCIsIm1hcmtlciIsInVybCIsIm9yaWdpbiIsIndpbmRvdyIsImdvb2dsZSIsIm1hcHMiLCJQb2ludCIsImFuY2hvciIsInNjYWxlZFNpemUiLCJTaXplIiwiZm9ybWF0UmVsYXRpdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBRyxDQUFDLFFBQUQsQ0FBbEI7QUFDQSxJQUFNQyxpQkFBaUIsR0FBRztBQUN4QkMsUUFBTSxFQUFFLE9BRGdCO0FBRXhCQyxPQUFLLEVBQUU7QUFGaUIsQ0FBMUI7QUFLQSxJQUFNQyxPQUFPLEdBQUc7QUFDWkMsUUFBTSxFQUFFQyxpREFESTtBQUVaQyxrQkFBZ0IsRUFBRSxJQUZOO0FBR1pDLGFBQVcsRUFBRTtBQUhELENBQWhCO0FBTUUsSUFBTUMsTUFBTSxHQUFHO0FBQ2JDLEtBQUcsRUFBRSxTQURRO0FBRWJDLEtB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RSxrQkFBVSxFQUFFLElBQUlMLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjQyxJQUFkLENBQW1CSSxJQUF2QixDQUE0QixFQUE1QixFQUFnQyxFQUFoQztBQUpSLE9BTlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURXO0FBQUEsR0FBWixDQVRILEVBeUJHdEIsUUFBUSxHQUNQLE1BQUMsaUVBQUQ7QUFDRSxZQUFRLEVBQUU7QUFBRWQsU0FBRyxFQUFFYyxRQUFRLENBQUNkLEdBQWhCO0FBQXFCQyxTQUFHLEVBQUVhLFFBQVEsQ0FBQ2I7QUFBbkMsS0FEWjtBQUVFLGdCQUFZLEVBQUUsd0JBQU07QUFDbEJjLGlCQUFXLENBQUMsSUFBRCxDQUFYO0FBQ0QsS0FKSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFNLFFBQUksRUFBQyxLQUFYO0FBQWlCLGtCQUFXLE1BQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsRUFHVSxHQUhWLFVBREYsRUFPRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFZc0IsY0FBYyxDQUFDdkIsUUFBUSxDQUFDTyxJQUFWLEVBQWdCLElBQUlDLElBQUosRUFBaEIsQ0FBMUIsQ0FQRixDQU5GLENBRE8sR0FpQkwsSUExQ04sQ0FSRixDQURGO0FBdUREOztHQWxGcUJwQixHO1VBQ1VDLG9FOzs7S0FEVkQsRyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hYm91dC40OTVjN2NkOWVhYmE1NGU2ZDAzNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gIEdvb2dsZU1hcCxcclxuICB1c2VMb2FkU2NyaXB0LFxyXG4gIE1hcmtlcixcclxuICBJbmZvV2luZG93LFxyXG59IGZyb20gXCJAcmVhY3QtZ29vZ2xlLW1hcHMvYXBpXCI7XHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0TWFwR0wgZnJvbSAncmVhY3QtbWFwLWdsJztcclxuaW1wb3J0IG1hcFN0eWxlcyBmcm9tIFwiLi9NYXBTdHlsZVwiXHJcblxyXG5jb25zdCBsaWJyYXJpZXMgPSBbXCJwbGFjZXNcIl07XHJcbmNvbnN0IG1hcENvbnRhaW5lclN0eWxlID0ge1xyXG4gIGhlaWdodDogXCIxMDB2aFwiLFxyXG4gIHdpZHRoOiBcIjEwMHZ3XCIsXHJcbn07XHJcblxyXG5jb25zdCBvcHRpb25zID0ge1xyXG4gICAgc3R5bGVzOiBtYXBTdHlsZXMsXHJcbiAgICBkaXNhYmxlRGVmYXVsdFVJOiB0cnVlLFxyXG4gICAgem9vbUNvbnRyb2w6IHRydWUsXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY2VudGVyID0ge1xyXG4gICAgbGF0OiA1My40NzU0MzMsXHJcbiAgICBsbmc6IC0yLjIzNjQ5NyxcclxuICB9O1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XHJcbiAgICBjb25zdCB7IGlzTG9hZGVkLCBsb2FkRXJyb3IgfSA9IHVzZUxvYWRTY3JpcHQoe1xyXG4gICAgICBnb29nbGVNYXBzQXBpS2V5OiBwcm9jZXNzLmVudi5HT09HTEVfTUFQX0FQSSxcclxuICAgICAgbGlicmFyaWVzLFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBbbWFya2Vycywgc2V0TWFya2Vyc10gPSBSZWFjdC51c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbc2VsZWN0ZWQsIHNldFNlbGVjdGVkXSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3Qgb25NYXBDbGljayA9IFJlYWN0LnVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICAgICAgc2V0TWFya2VycygoY3VycmVudCkgPT4gW1xyXG4gICAgICAgICAgLi4uY3VycmVudCxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbGF0OiBlLmxhdExuZy5sYXQoKSxcclxuICAgICAgICAgICAgbG5nOiBlLmxhdExuZy5sbmcoKSxcclxuICAgICAgICAgICAgdGltZTogbmV3IERhdGUoKSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgXSk7XHJcbiAgICAgIH0sIFtdKTtcclxuICAgIFxyXG4gICAgICBjb25zdCBtYXBSZWYgPSBSZWFjdC51c2VSZWYoKTtcclxuICAgICAgY29uc3Qgb25NYXBMb2FkID0gUmVhY3QudXNlQ2FsbGJhY2soKG1hcCkgPT4ge1xyXG4gICAgICAgIG1hcFJlZi5jdXJyZW50ID0gbWFwO1xyXG4gICAgICB9LCBbXSk7XHJcbiAgICBcclxuXHJcbiAgICBcclxuICAgICAgaWYgKGxvYWRFcnJvcikgcmV0dXJuIFwiRXJyb3JcIjtcclxuICAgICAgaWYgKCFpc0xvYWRlZCkgcmV0dXJuIFwiTG9hZGluZy4uLlwiO1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8aDE+XHJcbiAgICAgICAgICAgIEJlYXJze1wiIFwifVxyXG4gICAgICAgICAgICA8c3BhbiByb2xlPVwiaW1nXCIgYXJpYS1sYWJlbD1cInRlbnRcIj5cclxuICAgICAgICAgICAgICDim7rvuI9cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPC9oMT5cclxuXHJcbiAgICAgICAgICA8R29vZ2xlTWFwXHJcbiAgICAgICAgICAgIGlkPVwibWFwXCJcclxuICAgICAgICAgICAgbWFwQ29udGFpbmVyU3R5bGU9e21hcENvbnRhaW5lclN0eWxlfVxyXG4gICAgICAgICAgICB6b29tPXs4fVxyXG4gICAgICAgICAgICBjZW50ZXI9e2NlbnRlcn1cclxuICAgICAgICAgICAgb3B0aW9ucz17b3B0aW9uc31cclxuICAgICAgICAgICAgb25DbGljaz17b25NYXBDbGlja31cclxuICAgICAgICAgICAgb25Mb2FkPXtvbk1hcExvYWR9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHttYXJrZXJzLm1hcCgobWFya2VyKSA9PiAoXHJcbiAgICAgICAgICAgICAgPE1hcmtlclxyXG4gICAgICAgICAgICAgICAga2V5PXtgJHttYXJrZXIubGF0fS0ke21hcmtlci5sbmd9YH1cclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uPXt7IGxhdDogbWFya2VyLmxhdCwgbG5nOiBtYXJrZXIubG5nIH19XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkKG1hcmtlcik7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgaWNvbj17e1xyXG4gICAgICAgICAgICAgICAgICB1cmw6IGAvYmVhci5zdmdgLFxyXG4gICAgICAgICAgICAgICAgICBvcmlnaW46IG5ldyB3aW5kb3cuZ29vZ2xlLm1hcHMuUG9pbnQoMCwgMCksXHJcbiAgICAgICAgICAgICAgICAgIGFuY2hvcjogbmV3IHdpbmRvdy5nb29nbGUubWFwcy5Qb2ludCgxNSwgMTUpLFxyXG4gICAgICAgICAgICAgICAgICBzY2FsZWRTaXplOiBuZXcgd2luZG93Lmdvb2dsZS5tYXBzLlNpemUoMzAsIDMwKSxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICBcclxuICAgICAgICAgICAge3NlbGVjdGVkID8gKFxyXG4gICAgICAgICAgICAgIDxJbmZvV2luZG93XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbj17eyBsYXQ6IHNlbGVjdGVkLmxhdCwgbG5nOiBzZWxlY3RlZC5sbmcgfX1cclxuICAgICAgICAgICAgICAgIG9uQ2xvc2VDbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZChudWxsKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPGgyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHJvbGU9XCJpbWdcIiBhcmlhLWxhYmVsPVwiYmVhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAg8J+Qu1xyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgQWxlcnRcclxuICAgICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgICAgPHA+U3BvdHRlZCB7Zm9ybWF0UmVsYXRpdmUoc2VsZWN0ZWQudGltZSwgbmV3IERhdGUoKSl9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9JbmZvV2luZG93PlxyXG4gICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgIDwvR29vZ2xlTWFwPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4iXSwic291cmNlUm9vdCI6IiJ9