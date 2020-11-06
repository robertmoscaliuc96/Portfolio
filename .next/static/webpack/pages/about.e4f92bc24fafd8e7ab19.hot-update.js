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
      lineNumber: 58,
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
        lineNumber: 71,
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
      lineNumber: 87,
      columnNumber: 15
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 17
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 19
    }
  }, __jsx("span", {
    role: "img",
    "aria-label": "bear",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 21
    }
  }, "\uD83D\uDC3B"), " ", "Alert"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvTWFwMS5qcyJdLCJuYW1lcyI6WyJsaWJyYXJpZXMiLCJtYXBDb250YWluZXJTdHlsZSIsImhlaWdodCIsIndpZHRoIiwib3B0aW9ucyIsInN0eWxlcyIsIm1hcFN0eWxlcyIsImRpc2FibGVEZWZhdWx0VUkiLCJ6b29tQ29udHJvbCIsImNlbnRlciIsImxhdCIsImxuZyIsIkFwcCIsInVzZUxvYWRTY3JpcHQiLCJnb29nbGVNYXBzQXBpS2V5IiwiaXNMb2FkZWQiLCJsb2FkRXJyb3IiLCJSZWFjdCIsInVzZVN0YXRlIiwibWFya2VycyIsInNldE1hcmtlcnMiLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwib25NYXBDbGljayIsInVzZUNhbGxiYWNrIiwiZSIsImN1cnJlbnQiLCJsYXRMbmciLCJ0aW1lIiwiRGF0ZSIsIm1hcFJlZiIsInVzZVJlZiIsIm9uTWFwTG9hZCIsIm1hcCIsInZpZXdwb3J0Iiwic2V0U3RhdGUiLCJzdGF0ZSIsIm1hcmtlciIsInVybCIsIm9yaWdpbiIsIndpbmRvdyIsImdvb2dsZSIsIm1hcHMiLCJQb2ludCIsImFuY2hvciIsInNjYWxlZFNpemUiLCJTaXplIiwiZm9ybWF0UmVsYXRpdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHLENBQUMsUUFBRCxDQUFsQjtBQUNBLElBQU1DLGlCQUFpQixHQUFHO0FBQ3hCQyxRQUFNLEVBQUUsT0FEZ0I7QUFFeEJDLE9BQUssRUFBRTtBQUZpQixDQUExQjtBQUtBLElBQU1DLE9BQU8sR0FBRztBQUNaQyxRQUFNLEVBQUVDLGlEQURJO0FBRVpDLGtCQUFnQixFQUFFLElBRk47QUFHWkMsYUFBVyxFQUFFO0FBSEQsQ0FBaEI7QUFNRSxJQUFNQyxNQUFNLEdBQUc7QUFDYkMsS0FBRyxFQUFFLFNBRFE7QUFFYkMsS0FBRyxFQUFFLENBQUM7QUFGTyxDQUFmO0FBS2UsU0FBU0MsR0FBVCxHQUFlO0FBQUE7O0FBQUE7O0FBQUEsdUJBQ0lDLDRFQUFhLENBQUM7QUFDNUNDLG9CQUFnQixFQUFFLDRGQUQwQjtBQUU1Q2QsYUFBUyxFQUFUQTtBQUY0QyxHQUFELENBRGpCO0FBQUEsTUFDcEJlLFFBRG9CLGtCQUNwQkEsUUFEb0I7QUFBQSxNQUNWQyxTQURVLGtCQUNWQSxTQURVOztBQUFBLHdCQUtFQyw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsRUFBZixDQUxGO0FBQUE7QUFBQSxNQUtyQkMsT0FMcUI7QUFBQSxNQUtaQyxVQUxZOztBQUFBLHlCQU1JSCw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsSUFBZixDQU5KO0FBQUE7QUFBQSxNQU1yQkcsUUFOcUI7QUFBQSxNQU1YQyxXQU5XOztBQU81QixNQUFNQyxVQUFVLEdBQUdOLDRDQUFLLENBQUNPLFdBQU4sQ0FBa0IsVUFBQ0MsQ0FBRCxFQUFPO0FBQ3hDTCxjQUFVLENBQUMsVUFBQ00sT0FBRDtBQUFBLG9IQUNOQSxPQURNLElBRVQ7QUFDRWhCLFdBQUcsRUFBRWUsQ0FBQyxDQUFDRSxNQUFGLENBQVNqQixHQUFULEVBRFA7QUFFRUMsV0FBRyxFQUFFYyxDQUFDLENBQUNFLE1BQUYsQ0FBU2hCLEdBQVQsRUFGUDtBQUdFaUIsWUFBSSxFQUFFLElBQUlDLElBQUo7QUFIUixPQUZTO0FBQUEsS0FBRCxDQUFWO0FBUUQsR0FUZ0IsRUFTZCxFQVRjLENBQW5CO0FBV0UsTUFBTUMsTUFBTSxHQUFHYiw0Q0FBSyxDQUFDYyxNQUFOLEVBQWY7QUFDQSxNQUFNQyxTQUFTLEdBQUdmLDRDQUFLLENBQUNPLFdBQU4sQ0FBa0IsVUFBQ1MsR0FBRCxFQUFTO0FBQzNDSCxVQUFNLENBQUNKLE9BQVAsR0FBaUJPLEdBQWpCO0FBQ0QsR0FGaUIsRUFFZixFQUZlLENBQWxCO0FBT0EsTUFBSWpCLFNBQUosRUFBZSxPQUFPLE9BQVA7QUFDZixNQUFJLENBQUNELFFBQUwsRUFBZSxPQUFPLFlBQVA7QUFDZixTQUNJLE1BQUMsZ0VBQUQ7QUFDRSxZQUFRLEVBQUMsaUNBRFg7QUFFRSx3QkFBb0IsRUFBQyw0RkFGdkI7QUFHRSxvQkFBZ0IsRUFBRSwwQkFBQ21CLFFBQUQ7QUFBQSxhQUFjLEtBQUksQ0FBQ0MsUUFBTCxDQUFjO0FBQUVELGdCQUFRLEVBQVJBO0FBQUYsT0FBZCxDQUFkO0FBQUE7QUFIcEIsS0FJRSxLQUFLRSxLQUFMLENBQVdGLFFBSmI7QUFLRSxhQUFTLEVBQUMsS0FMWjtBQU1FLFFBQUksRUFBRSxDQU5SO0FBT0UsVUFBTSxFQUFFekIsTUFQVjtBQVFFLFdBQU8sRUFBRUwsT0FSWDtBQVNFLFdBQU8sRUFBRW1CLFVBVFg7QUFVRSxVQUFNLEVBQUVTLFNBVlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVlHYixPQUFPLENBQUNjLEdBQVIsQ0FBWSxVQUFDSSxNQUFEO0FBQUEsV0FDWCxNQUFDLDZEQUFEO0FBQ0UsU0FBRyxZQUFLQSxNQUFNLENBQUMzQixHQUFaLGNBQW1CMkIsTUFBTSxDQUFDMUIsR0FBMUIsQ0FETDtBQUVFLGNBQVEsRUFBRTtBQUFFRCxXQUFHLEVBQUUyQixNQUFNLENBQUMzQixHQUFkO0FBQW1CQyxXQUFHLEVBQUUwQixNQUFNLENBQUMxQjtBQUEvQixPQUZaO0FBR0UsYUFBTyxFQUFFLG1CQUFNO0FBQ2JXLG1CQUFXLENBQUNlLE1BQUQsQ0FBWDtBQUNELE9BTEg7QUFNRSxVQUFJLEVBQUU7QUFDSkMsV0FBRyxhQURDO0FBRUpDLGNBQU0sRUFBRSxJQUFJQyxNQUFNLENBQUNDLE1BQVAsQ0FBY0MsSUFBZCxDQUFtQkMsS0FBdkIsQ0FBNkIsQ0FBN0IsRUFBZ0MsQ0FBaEMsQ0FGSjtBQUdKQyxjQUFNLEVBQUUsSUFBSUosTUFBTSxDQUFDQyxNQUFQLENBQWNDLElBQWQsQ0FBbUJDLEtBQXZCLENBQTZCLEVBQTdCLEVBQWlDLEVBQWpDLENBSEo7QUFJSkUsa0JBQVUsRUFBRSxJQUFJTCxNQUFNLENBQUNDLE1BQVAsQ0FBY0MsSUFBZCxDQUFtQkksSUFBdkIsQ0FBNEIsRUFBNUIsRUFBZ0MsRUFBaEM7QUFKUixPQU5SO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFEVztBQUFBLEdBQVosQ0FaSCxFQTRCR3pCLFFBQVEsR0FDUCxNQUFDLGlFQUFEO0FBQ0UsWUFBUSxFQUFFO0FBQUVYLFNBQUcsRUFBRVcsUUFBUSxDQUFDWCxHQUFoQjtBQUFxQkMsU0FBRyxFQUFFVSxRQUFRLENBQUNWO0FBQW5DLEtBRFo7QUFFRSxnQkFBWSxFQUFFLHdCQUFNO0FBQ2xCVyxpQkFBVyxDQUFDLElBQUQsQ0FBWDtBQUNELEtBSkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTSxRQUFJLEVBQUMsS0FBWDtBQUFpQixrQkFBVyxNQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLEVBR1UsR0FIVixVQURGLEVBT0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBWXlCLGNBQWMsQ0FBQzFCLFFBQVEsQ0FBQ08sSUFBVixFQUFnQixJQUFJQyxJQUFKLEVBQWhCLENBQTFCLENBUEYsQ0FORixDQURPLEdBaUJMLElBN0NOLENBREo7QUFpREQ7O0dBN0VxQmpCLEc7VUFDVUMsb0U7OztLQURWRCxHIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Fib3V0LmU0ZjkyYmMyNGZhZmQ4ZTdhYjE5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgR29vZ2xlTWFwLFxyXG4gIHVzZUxvYWRTY3JpcHQsXHJcbiAgTWFya2VyLFxyXG4gIEluZm9XaW5kb3csXHJcbn0gZnJvbSBcIkByZWFjdC1nb29nbGUtbWFwcy9hcGlcIjtcclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3RNYXBHTCBmcm9tICdyZWFjdC1tYXAtZ2wnO1xyXG5pbXBvcnQgbWFwU3R5bGVzIGZyb20gXCIuL01hcFN0eWxlXCJcclxuXHJcbmNvbnN0IGxpYnJhcmllcyA9IFtcInBsYWNlc1wiXTtcclxuY29uc3QgbWFwQ29udGFpbmVyU3R5bGUgPSB7XHJcbiAgaGVpZ2h0OiBcIjEwMHZoXCIsXHJcbiAgd2lkdGg6IFwiMTAwdndcIixcclxufTtcclxuXHJcbmNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICBzdHlsZXM6IG1hcFN0eWxlcyxcclxuICAgIGRpc2FibGVEZWZhdWx0VUk6IHRydWUsXHJcbiAgICB6b29tQ29udHJvbDogdHJ1ZSxcclxuICB9O1xyXG5cclxuICBjb25zdCBjZW50ZXIgPSB7XHJcbiAgICBsYXQ6IDUzLjQ3NTQzMyxcclxuICAgIGxuZzogLTIuMjM2NDk3LFxyXG4gIH07XHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcclxuICAgIGNvbnN0IHsgaXNMb2FkZWQsIGxvYWRFcnJvciB9ID0gdXNlTG9hZFNjcmlwdCh7XHJcbiAgICAgIGdvb2dsZU1hcHNBcGlLZXk6IFwicGsuZXlKMUlqb2liVzl6WTJGc2FYSWlMQ0poSWpvaVkydG9NbWhyZDJacU1HVnVkakp6YlhodlpESXpibUZxZFNKOS5iaVFrcFo4bG9WWElzeGhNdU5mZm9nXCIsXHJcbiAgICAgIGxpYnJhcmllcyxcclxuICAgIH0pO1xyXG4gICAgY29uc3QgW21hcmtlcnMsIHNldE1hcmtlcnNdID0gUmVhY3QudXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3NlbGVjdGVkLCBzZXRTZWxlY3RlZF0gPSBSZWFjdC51c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IG9uTWFwQ2xpY2sgPSBSZWFjdC51c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgICAgIHNldE1hcmtlcnMoKGN1cnJlbnQpID0+IFtcclxuICAgICAgICAgIC4uLmN1cnJlbnQsXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGxhdDogZS5sYXRMbmcubGF0KCksXHJcbiAgICAgICAgICAgIGxuZzogZS5sYXRMbmcubG5nKCksXHJcbiAgICAgICAgICAgIHRpbWU6IG5ldyBEYXRlKCksXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF0pO1xyXG4gICAgICB9LCBbXSk7XHJcbiAgICBcclxuICAgICAgY29uc3QgbWFwUmVmID0gUmVhY3QudXNlUmVmKCk7XHJcbiAgICAgIGNvbnN0IG9uTWFwTG9hZCA9IFJlYWN0LnVzZUNhbGxiYWNrKChtYXApID0+IHtcclxuICAgICAgICBtYXBSZWYuY3VycmVudCA9IG1hcDtcclxuICAgICAgfSwgW10pO1xyXG4gXHJcbiAgICBcclxuXHJcbiAgICBcclxuICAgICAgaWYgKGxvYWRFcnJvcikgcmV0dXJuIFwiRXJyb3JcIjtcclxuICAgICAgaWYgKCFpc0xvYWRlZCkgcmV0dXJuIFwiTG9hZGluZy4uLlwiO1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPEdvb2dsZU1hcFxyXG4gICAgICAgICAgICBtYXBTdHlsZT1cIm1hcGJveDovL3N0eWxlcy9tYXBib3gvZGFyay12MTBcIlxyXG4gICAgICAgICAgICBtYXBib3hBcGlBY2Nlc3NUb2tlbj1cInBrLmV5SjFJam9pYlc5elkyRnNhWElpTENKaElqb2lZMnRvTW1ocmQyWnFNR1Z1ZGpKemJYaHZaREl6Ym1GcWRTSjkuYmlRa3BaOGxvVlhJc3hoTXVOZmZvZ1wiXHJcbiAgICAgICAgICAgIG9uVmlld3BvcnRDaGFuZ2U9eyh2aWV3cG9ydCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHZpZXdwb3J0IH0pfVxyXG4gICAgICAgIHsuLi50aGlzLnN0YXRlLnZpZXdwb3J0fVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtYXBcIlxyXG4gICAgICAgICAgICB6b29tPXs4fVxyXG4gICAgICAgICAgICBjZW50ZXI9e2NlbnRlcn1cclxuICAgICAgICAgICAgb3B0aW9ucz17b3B0aW9uc31cclxuICAgICAgICAgICAgb25DbGljaz17b25NYXBDbGlja31cclxuICAgICAgICAgICAgb25Mb2FkPXtvbk1hcExvYWR9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHttYXJrZXJzLm1hcCgobWFya2VyKSA9PiAoXHJcbiAgICAgICAgICAgICAgPE1hcmtlclxyXG4gICAgICAgICAgICAgICAga2V5PXtgJHttYXJrZXIubGF0fS0ke21hcmtlci5sbmd9YH1cclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uPXt7IGxhdDogbWFya2VyLmxhdCwgbG5nOiBtYXJrZXIubG5nIH19XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkKG1hcmtlcik7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgaWNvbj17e1xyXG4gICAgICAgICAgICAgICAgICB1cmw6IGAvYmVhci5zdmdgLFxyXG4gICAgICAgICAgICAgICAgICBvcmlnaW46IG5ldyB3aW5kb3cuZ29vZ2xlLm1hcHMuUG9pbnQoMCwgMCksXHJcbiAgICAgICAgICAgICAgICAgIGFuY2hvcjogbmV3IHdpbmRvdy5nb29nbGUubWFwcy5Qb2ludCgxNSwgMTUpLFxyXG4gICAgICAgICAgICAgICAgICBzY2FsZWRTaXplOiBuZXcgd2luZG93Lmdvb2dsZS5tYXBzLlNpemUoMzAsIDMwKSxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICBcclxuICAgICAgICAgICAge3NlbGVjdGVkID8gKFxyXG4gICAgICAgICAgICAgIDxJbmZvV2luZG93XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbj17eyBsYXQ6IHNlbGVjdGVkLmxhdCwgbG5nOiBzZWxlY3RlZC5sbmcgfX1cclxuICAgICAgICAgICAgICAgIG9uQ2xvc2VDbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZChudWxsKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPGgyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHJvbGU9XCJpbWdcIiBhcmlhLWxhYmVsPVwiYmVhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAg8J+Qu1xyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgQWxlcnRcclxuICAgICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgICAgPHA+U3BvdHRlZCB7Zm9ybWF0UmVsYXRpdmUoc2VsZWN0ZWQudGltZSwgbmV3IERhdGUoKSl9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9JbmZvV2luZG93PlxyXG4gICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgIDwvR29vZ2xlTWFwPlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4iXSwic291cmNlUm9vdCI6IiJ9