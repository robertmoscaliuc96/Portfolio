webpackHotUpdate_N_E("pages/about",{

/***/ "./components/layout/Map1.js":
/*!***********************************!*\
  !*** ./components/layout/Map1.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _react_google_maps_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @react-google-maps/api */ "./node_modules/@react-google-maps/api/dist/reactgooglemapsapi.esm.js");
/* harmony import */ var react_map_gl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-map-gl */ "./node_modules/react-map-gl/dist/esm/index.js");
/* harmony import */ var _MapStyle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MapStyle */ "./components/layout/MapStyle.js");




var _jsxFileName = "E:\\Portfolio\\components\\layout\\Map1.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;





var libraries = ["places"];
var mapContainerStyle = {
  height: "100vh",
  width: "100vw"
};
var options = {
  styles: _MapStyle__WEBPACK_IMPORTED_MODULE_6__["default"],
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

  var _useLoadScript = Object(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_4__["useLoadScript"])({
    googleMapsApiKey: "pk.eyJ1IjoibW9zY2FsaXIiLCJhIjoiY2toMmhrd2ZqMGVudjJzbXhvZDIzbmFqdSJ9.biQkpZ8loVXIsxhMuNffog",
    libraries: libraries
  }),
      isLoaded = _useLoadScript.isLoaded,
      loadError = _useLoadScript.loadError;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState([]),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState, 2),
      markers = _React$useState2[0],
      setMarkers = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(null),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState3, 2),
      selected = _React$useState4[0],
      setSelected = _React$useState4[1];

  var onMapClick = react__WEBPACK_IMPORTED_MODULE_3___default.a.useCallback(function (e) {
    setMarkers(function (current) {
      return [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(current), [{
        lat: e.latLng.lat(),
        lng: e.latLng.lng(),
        time: new Date()
      }]);
    });
  }, []);
  var mapRef = react__WEBPACK_IMPORTED_MODULE_3___default.a.useRef();
  var onMapLoad = react__WEBPACK_IMPORTED_MODULE_3___default.a.useCallback(function (map) {
    mapRef.current = map;
  }, []);
  state = {
    viewport: {
      width: '55vw',
      height: '100vh',
      latitude: 53.475433,
      longitude: -2.236497,
      zoom: 13
    }
  };
  if (loadError) return "Error";
  if (!isLoaded) return "Loading...";
  return __jsx(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_4__["GoogleMap"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    mapStyle: "mapbox://styles/mapbox/dark-v10",
    mapboxApiAccessToken: "pk.eyJ1IjoibW9zY2FsaXIiLCJhIjoiY2toMmhrd2ZqMGVudjJzbXhvZDIzbmFqdSJ9.biQkpZ8loVXIsxhMuNffog",
    onViewportChange: function onViewportChange(viewport) {
      return _this.setState({
        viewport: viewport
      });
    }
  }, this.state.viewport, {
    className: "map",
    zoom: 8,
    center: center,
    options: options,
    onClick: onMapClick,
    onLoad: onMapLoad,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 11
    }
  }), markers.map(function (marker) {
    return __jsx(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_4__["Marker"], {
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
        lineNumber: 80,
        columnNumber: 15
      }
    });
  }), selected ? __jsx(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_4__["InfoWindow"], {
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
      lineNumber: 96,
      columnNumber: 15
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 17
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 19
    }
  }, __jsx("span", {
    role: "img",
    "aria-label": "bear",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 21
    }
  }, "\uD83D\uDC3B"), " ", "Alert"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 19
    }
  }, "Spotted ", formatRelative(selected.time, new Date())))) : null);
}

_s(App, "HyDyb1nIM3Rs9T3MKDPEtfZQEZk=", false, function () {
  return [_react_google_maps_api__WEBPACK_IMPORTED_MODULE_4__["useLoadScript"]];
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvTWFwMS5qcyJdLCJuYW1lcyI6WyJsaWJyYXJpZXMiLCJtYXBDb250YWluZXJTdHlsZSIsImhlaWdodCIsIndpZHRoIiwib3B0aW9ucyIsInN0eWxlcyIsIm1hcFN0eWxlcyIsImRpc2FibGVEZWZhdWx0VUkiLCJ6b29tQ29udHJvbCIsImNlbnRlciIsImxhdCIsImxuZyIsIkFwcCIsInVzZUxvYWRTY3JpcHQiLCJnb29nbGVNYXBzQXBpS2V5IiwiaXNMb2FkZWQiLCJsb2FkRXJyb3IiLCJSZWFjdCIsInVzZVN0YXRlIiwibWFya2VycyIsInNldE1hcmtlcnMiLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwib25NYXBDbGljayIsInVzZUNhbGxiYWNrIiwiZSIsImN1cnJlbnQiLCJsYXRMbmciLCJ0aW1lIiwiRGF0ZSIsIm1hcFJlZiIsInVzZVJlZiIsIm9uTWFwTG9hZCIsIm1hcCIsInN0YXRlIiwidmlld3BvcnQiLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsInpvb20iLCJzZXRTdGF0ZSIsIm1hcmtlciIsInVybCIsIm9yaWdpbiIsIndpbmRvdyIsImdvb2dsZSIsIm1hcHMiLCJQb2ludCIsImFuY2hvciIsInNjYWxlZFNpemUiLCJTaXplIiwiZm9ybWF0UmVsYXRpdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHLENBQUMsUUFBRCxDQUFsQjtBQUNBLElBQU1DLGlCQUFpQixHQUFHO0FBQ3hCQyxRQUFNLEVBQUUsT0FEZ0I7QUFFeEJDLE9BQUssRUFBRTtBQUZpQixDQUExQjtBQUtBLElBQU1DLE9BQU8sR0FBRztBQUNaQyxRQUFNLEVBQUVDLGlEQURJO0FBRVpDLGtCQUFnQixFQUFFLElBRk47QUFHWkMsYUFBVyxFQUFFO0FBSEQsQ0FBaEI7QUFNRSxJQUFNQyxNQUFNLEdBQUc7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ZjNjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgR29vZ2xlTWFwLFxyXG4gIHVzZUxvYWRTY3JpcHQsXHJcbiAgTWFya2VyLFxyXG4gIEluZm9XaW5kb3csXHJcbn0gZnJvbSBcIkByZWFjdC1nb29nbGUtbWFwcy9hcGlcIjtcclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3RNYXBHTCBmcm9tICdyZWFjdC1tYXAtZ2wnO1xyXG5pbXBvcnQgbWFwU3R5bGVzIGZyb20gXCIuL01hcFN0eWxlXCJcclxuXHJcbmNvbnN0IGxpYnJhcmllcyA9IFtcInBsYWNlc1wiXTtcclxuY29uc3QgbWFwQ29udGFpbmVyU3R5bGUgPSB7XHJcbiAgaGVpZ2h0OiBcIjEwMHZoXCIsXHJcbiAgd2lkdGg6IFwiMTAwdndcIixcclxufTtcclxuXHJcbmNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICBzdHlsZXM6IG1hcFN0eWxlcyxcclxuICAgIGRpc2FibGVEZWZhdWx0VUk6IHRydWUsXHJcbiAgICB6b29tQ29udHJvbDogdHJ1ZSxcclxuICB9O1xyXG5cclxuICBjb25zdCBjZW50ZXIgPSB7XHJcbiAgICBsYXQ6IDUzLjQ3NTQzMyxcclxuICAgIGxuZzogLTIuMjM2NDk3LFxyXG4gIH07XHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcclxuICAgIGNvbnN0IHsgaXNMb2FkZWQsIGxvYWRFcnJvciB9ID0gdXNlTG9hZFNjcmlwdCh7XHJcbiAgICAgIGdvb2dsZU1hcHNBcGlLZXk6IFwicGsuZXlKMUlqb2liVzl6WTJGc2FYSWlMQ0poSWpvaVkydG9NbWhyZDJacU1HVnVkakp6YlhodlpESXpibUZxZFNKOS5iaVFrcFo4bG9WWElzeGhNdU5mZm9nXCIsXHJcbiAgICAgIGxpYnJhcmllcyxcclxuICAgIH0pO1xyXG4gICAgY29uc3QgW21hcmtlcnMsIHNldE1hcmtlcnNdID0gUmVhY3QudXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3NlbGVjdGVkLCBzZXRTZWxlY3RlZF0gPSBSZWFjdC51c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IG9uTWFwQ2xpY2sgPSBSZWFjdC51c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgICAgIHNldE1hcmtlcnMoKGN1cnJlbnQpID0+IFtcclxuICAgICAgICAgIC4uLmN1cnJlbnQsXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGxhdDogZS5sYXRMbmcubGF0KCksXHJcbiAgICAgICAgICAgIGxuZzogZS5sYXRMbmcubG5nKCksXHJcbiAgICAgICAgICAgIHRpbWU6IG5ldyBEYXRlKCksXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF0pO1xyXG4gICAgICB9LCBbXSk7XHJcbiAgICBcclxuICAgICAgY29uc3QgbWFwUmVmID0gUmVhY3QudXNlUmVmKCk7XHJcbiAgICAgIGNvbnN0IG9uTWFwTG9hZCA9IFJlYWN0LnVzZUNhbGxiYWNrKChtYXApID0+IHtcclxuICAgICAgICBtYXBSZWYuY3VycmVudCA9IG1hcDtcclxuICAgICAgfSwgW10pO1xyXG4gICAgICBzdGF0ZSA9IHtcclxuICAgICAgICB2aWV3cG9ydDoge1xyXG4gICAgICAgICAgd2lkdGg6ICc1NXZ3JyxcclxuICAgICAgICAgIGhlaWdodDogJzEwMHZoJyxcclxuICAgICAgICAgIGxhdGl0dWRlOiA1My40NzU0MzMsXHJcbiAgICAgICAgICBsb25naXR1ZGU6IC0yLjIzNjQ5NyxcclxuICAgICAgICAgIHpvb206IDEzLFxyXG4gICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gICAgXHJcblxyXG4gICAgXHJcbiAgICAgIGlmIChsb2FkRXJyb3IpIHJldHVybiBcIkVycm9yXCI7XHJcbiAgICAgIGlmICghaXNMb2FkZWQpIHJldHVybiBcIkxvYWRpbmcuLi5cIjtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxHb29nbGVNYXBcclxuICAgICAgICAgICAgbWFwU3R5bGU9XCJtYXBib3g6Ly9zdHlsZXMvbWFwYm94L2RhcmstdjEwXCJcclxuICAgICAgICAgICAgbWFwYm94QXBpQWNjZXNzVG9rZW49XCJway5leUoxSWpvaWJXOXpZMkZzYVhJaUxDSmhJam9pWTJ0b01taHJkMlpxTUdWdWRqSnpiWGh2WkRJemJtRnFkU0o5LmJpUWtwWjhsb1ZYSXN4aE11TmZmb2dcIlxyXG4gICAgICAgICAgICBvblZpZXdwb3J0Q2hhbmdlPXsodmlld3BvcnQpID0+IHRoaXMuc2V0U3RhdGUoeyB2aWV3cG9ydCB9KX1cclxuICAgICAgICAgICAgey4uLnRoaXMuc3RhdGUudmlld3BvcnR9XHJcbiAgICAgICAgY2xhc3NOYW1lPVwibWFwXCJcclxuICAgICAgICAgICAgem9vbT17OH1cclxuICAgICAgICAgICAgY2VudGVyPXtjZW50ZXJ9XHJcbiAgICAgICAgICAgIG9wdGlvbnM9e29wdGlvbnN9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e29uTWFwQ2xpY2t9XHJcbiAgICAgICAgICAgIG9uTG9hZD17b25NYXBMb2FkfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7bWFya2Vycy5tYXAoKG1hcmtlcikgPT4gKFxyXG4gICAgICAgICAgICAgIDxNYXJrZXJcclxuICAgICAgICAgICAgICAgIGtleT17YCR7bWFya2VyLmxhdH0tJHttYXJrZXIubG5nfWB9XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbj17eyBsYXQ6IG1hcmtlci5sYXQsIGxuZzogbWFya2VyLmxuZyB9fVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZChtYXJrZXIpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIGljb249e3tcclxuICAgICAgICAgICAgICAgICAgdXJsOiBgL2JlYXIuc3ZnYCxcclxuICAgICAgICAgICAgICAgICAgb3JpZ2luOiBuZXcgd2luZG93Lmdvb2dsZS5tYXBzLlBvaW50KDAsIDApLFxyXG4gICAgICAgICAgICAgICAgICBhbmNob3I6IG5ldyB3aW5kb3cuZ29vZ2xlLm1hcHMuUG9pbnQoMTUsIDE1KSxcclxuICAgICAgICAgICAgICAgICAgc2NhbGVkU2l6ZTogbmV3IHdpbmRvdy5nb29nbGUubWFwcy5TaXplKDMwLCAzMCksXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgXHJcbiAgICAgICAgICAgIHtzZWxlY3RlZCA/IChcclxuICAgICAgICAgICAgICA8SW5mb1dpbmRvd1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb249e3sgbGF0OiBzZWxlY3RlZC5sYXQsIGxuZzogc2VsZWN0ZWQubG5nIH19XHJcbiAgICAgICAgICAgICAgICBvbkNsb3NlQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWQobnVsbCk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxoMj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiByb2xlPVwiaW1nXCIgYXJpYS1sYWJlbD1cImJlYXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIPCfkLtcclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgIEFsZXJ0XHJcbiAgICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgIDxwPlNwb3R0ZWQge2Zvcm1hdFJlbGF0aXZlKHNlbGVjdGVkLnRpbWUsIG5ldyBEYXRlKCkpfTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvSW5mb1dpbmRvdz5cclxuICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICA8L0dvb2dsZU1hcD5cclxuICAgICAgKTtcclxuICAgIH1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==