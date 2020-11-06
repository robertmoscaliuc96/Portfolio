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
  var panTo = react__WEBPACK_IMPORTED_MODULE_2___default.a.useCallback(function (_ref) {
    var lat = _ref.lat,
        lng = _ref.lng;
    mapRef.current.panTo({
      lat: lat,
      lng: lng
    });
    mapRef.current.setZoom(14);
  }, []);
  if (loadError) return "Error";
  if (!isLoaded) return "Loading...";
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 11
    }
  }, "Bears", " ", __jsx("span", {
    role: "img",
    "aria-label": "tent",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }
  }, "\u26FA\uFE0F")), __jsx(Locate, {
    panTo: panTo,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 11
    }
  }), __jsx(Search, {
    panTo: panTo,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 11
    }
  }), __jsx(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_3__["GoogleMap"], {
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
      lineNumber: 71,
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
        lineNumber: 81,
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
      lineNumber: 97,
      columnNumber: 15
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 17
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 19
    }
  }, __jsx("span", {
    role: "img",
    "aria-label": "bear",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 21
    }
  }, "\uD83D\uDC3B"), " ", "Alert"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 19
    }
  }, "Spotted ", formatRelative(selected.time, new Date())))) : null));
}

_s(App, "2guadH9d5JoIeeHJyfaULPLamLs=", false, function () {
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

/***/ }),

/***/ "./components/layout/MapStyle.js":
/*!***************************************!*\
  !*** ./components/layout/MapStyle.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony default export */ __webpack_exports__["default"] = ([{
  featureType: "all",
  elementType: "geometry.fill",
  stylers: [{
    weight: "2.00"
  }]
}, {
  featureType: "all",
  elementType: "geometry.stroke",
  stylers: [{
    color: "#9c9c9c"
  }]
}, {
  featureType: "all",
  elementType: "labels.text",
  stylers: [{
    visibility: "on"
  }]
}, {
  featureType: "landscape",
  elementType: "all",
  stylers: [{
    color: "#f2f2f2"
  }]
}, {
  featureType: "landscape",
  elementType: "geometry.fill",
  stylers: [{
    color: "#ffffff"
  }]
}, {
  featureType: "landscape.man_made",
  elementType: "geometry.fill",
  stylers: [{
    color: "#ffffff"
  }]
}, {
  featureType: "poi",
  elementType: "all",
  stylers: [{
    visibility: "off"
  }]
}, {
  featureType: "road",
  elementType: "all",
  stylers: [{
    saturation: -100
  }, {
    lightness: 45
  }]
}, {
  featureType: "road",
  elementType: "geometry.fill",
  stylers: [{
    color: "#eeeeee"
  }]
}, {
  featureType: "road",
  elementType: "labels.text.fill",
  stylers: [{
    color: "#7b7b7b"
  }]
}, {
  featureType: "road",
  elementType: "labels.text.stroke",
  stylers: [{
    color: "#ffffff"
  }]
}, {
  featureType: "road.highway",
  elementType: "all",
  stylers: [{
    visibility: "simplified"
  }]
}, {
  featureType: "road.arterial",
  elementType: "labels.icon",
  stylers: [{
    visibility: "off"
  }]
}, {
  featureType: "transit",
  elementType: "all",
  stylers: [{
    visibility: "off"
  }]
}, {
  featureType: "water",
  elementType: "all",
  stylers: [{
    color: "#46bcec"
  }, {
    visibility: "on"
  }]
}, {
  featureType: "water",
  elementType: "geometry.fill",
  stylers: [{
    color: "#c8d7d4"
  }]
}, {
  featureType: "water",
  elementType: "labels.text.fill",
  stylers: [{
    color: "#070707"
  }]
}, {
  featureType: "water",
  elementType: "labels.text.stroke",
  stylers: [{
    color: "#ffffff"
  }]
}]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvTWFwMS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvTWFwU3R5bGUuanMiXSwibmFtZXMiOlsibGlicmFyaWVzIiwibWFwQ29udGFpbmVyU3R5bGUiLCJoZWlnaHQiLCJ3aWR0aCIsIm9wdGlvbnMiLCJzdHlsZXMiLCJtYXBTdHlsZXMiLCJkaXNhYmxlRGVmYXVsdFVJIiwiem9vbUNvbnRyb2wiLCJjZW50ZXIiLCJsYXQiLCJsbmciLCJBcHAiLCJ1c2VMb2FkU2NyaXB0IiwiZ29vZ2xlTWFwc0FwaUtleSIsInByb2Nlc3MiLCJlbnYiLCJHT09HTEVfTUFQX0FQSSIsImlzTG9hZGVkIiwibG9hZEVycm9yIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIm1hcmtlcnMiLCJzZXRNYXJrZXJzIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsIm9uTWFwQ2xpY2siLCJ1c2VDYWxsYmFjayIsImUiLCJjdXJyZW50IiwibGF0TG5nIiwidGltZSIsIkRhdGUiLCJtYXBSZWYiLCJ1c2VSZWYiLCJvbk1hcExvYWQiLCJtYXAiLCJwYW5UbyIsInNldFpvb20iLCJtYXJrZXIiLCJ1cmwiLCJvcmlnaW4iLCJ3aW5kb3ciLCJnb29nbGUiLCJtYXBzIiwiUG9pbnQiLCJhbmNob3IiLCJzY2FsZWRTaXplIiwiU2l6ZSIsImZvcm1hdFJlbGF0aXZlIiwiZmVhdHVyZVR5cGUiLCJlbGVtZW50VHlwZSIsInN0eWxlcnMiLCJ3ZWlnaHQiLCJjb2xvciIsInZpc2liaWxpdHkiLCJzYXR1cmF0aW9uIiwibGlnaHRuZXNzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUcsQ0FBQyxRQUFELENBQWxCO0FBQ0EsSUFBTUMsaUJBQWlCLEdBQUc7QUFDeEJDLFFBQU0sRUFBRSxPQURnQjtBQUV4QkMsT0FBSyxF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R1csRUFnSFg7QUFDRUwsYUFBVyxFQUFFLGVBRGY7QUFFRUMsYUFBVyxFQUFFLGFBRmY7QUFHRUMsU0FBTyxFQUFFLENBQ1A7QUFDRUcsY0FBVSxFQUFFO0FBRGQsR0FETztBQUhYLENBaEhXLEVBeUhYO0FBQ0VMLGFBQVcsRUFBRSxTQURmO0FBRUVDLGFBQVcsRUFBRSxLQUZmO0FBR0VDLFNBQU8sRUFBRSxDQUNQO0FBQ0VHLGNBQVUsRUFBRTtBQURkLEdBRE87QUFIWCxDQXpIVyxFQWtJWDtBQUNFTCxhQUFXLEVBQUUsT0FEZjtBQUVFQyxhQUFXLEVBQUUsS0FGZjtBQUdFQyxTQUFPLEVBQUUsQ0FDUDtBQUNFRSxTQUFLLEVBQUU7QUFEVCxHQURPLEVBSVA7QUFDRUMsY0FBVSxFQUFFO0FBRGQsR0FKTztBQUhYLENBbElXLEVBOElYO0FBQ0VMLGFBQVcsRUFBRSxPQURmO0FBRUVDLGFBQVcsRUFBRSxlQUZmO0FBR0VDLFNBQU8sRUFBRSxDQUNQO0FBQ0VFLFNBQUssRUFBRTtBQURULEdBRE87QUFIWCxDQTlJVyxFQXVKWDtBQUNFSixhQUFXLEVBQUUsT0FEZjtBQUVFQyxhQUFXLEVBQUUsa0JBRmY7QUFHRUMsU0FBTyxFQUFFLENBQ1A7QUFDRUUsU0FBSyxFQUFFO0FBRFQsR0FETztBQUhYLENBdkpXLEVBZ0tYO0FBQ0VKLGFBQVcsRUFBRSxPQURmO0FBRUVDLGFBQVcsRUFBRSxvQkFGZjtBQUdFQyxTQUFPLEVBQUUsQ0FDUDtBQUNFRSxTQUFLLEVBQUU7QUFEVCxHQURPO0FBSFgsQ0FoS1csQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hYm91dC5iYTgzZDA5OGUxZDJmZTY3OWNiZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gIEdvb2dsZU1hcCxcclxuICB1c2VMb2FkU2NyaXB0LFxyXG4gIE1hcmtlcixcclxuICBJbmZvV2luZG93LFxyXG59IGZyb20gXCJAcmVhY3QtZ29vZ2xlLW1hcHMvYXBpXCI7XHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0TWFwR0wgZnJvbSAncmVhY3QtbWFwLWdsJztcclxuaW1wb3J0IG1hcFN0eWxlcyBmcm9tIFwiLi9NYXBTdHlsZVwiXHJcblxyXG5jb25zdCBsaWJyYXJpZXMgPSBbXCJwbGFjZXNcIl07XHJcbmNvbnN0IG1hcENvbnRhaW5lclN0eWxlID0ge1xyXG4gIGhlaWdodDogXCIxMDB2aFwiLFxyXG4gIHdpZHRoOiBcIjEwMHZ3XCIsXHJcbn07XHJcblxyXG5jb25zdCBvcHRpb25zID0ge1xyXG4gICAgc3R5bGVzOiBtYXBTdHlsZXMsXHJcbiAgICBkaXNhYmxlRGVmYXVsdFVJOiB0cnVlLFxyXG4gICAgem9vbUNvbnRyb2w6IHRydWUsXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY2VudGVyID0ge1xyXG4gICAgbGF0OiA1My40NzU0MzMsXHJcbiAgICBsbmc6IC0yLjIzNjQ5NyxcclxuICB9O1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XHJcbiAgICBjb25zdCB7IGlzTG9hZGVkLCBsb2FkRXJyb3IgfSA9IHVzZUxvYWRTY3JpcHQoe1xyXG4gICAgICBnb29nbGVNYXBzQXBpS2V5OiBwcm9jZXNzLmVudi5HT09HTEVfTUFQX0FQSSxcclxuICAgICAgbGlicmFyaWVzLFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBbbWFya2Vycywgc2V0TWFya2Vyc10gPSBSZWFjdC51c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbc2VsZWN0ZWQsIHNldFNlbGVjdGVkXSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3Qgb25NYXBDbGljayA9IFJlYWN0LnVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICAgICAgc2V0TWFya2VycygoY3VycmVudCkgPT4gW1xyXG4gICAgICAgICAgLi4uY3VycmVudCxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbGF0OiBlLmxhdExuZy5sYXQoKSxcclxuICAgICAgICAgICAgbG5nOiBlLmxhdExuZy5sbmcoKSxcclxuICAgICAgICAgICAgdGltZTogbmV3IERhdGUoKSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgXSk7XHJcbiAgICAgIH0sIFtdKTtcclxuICAgIFxyXG4gICAgICBjb25zdCBtYXBSZWYgPSBSZWFjdC51c2VSZWYoKTtcclxuICAgICAgY29uc3Qgb25NYXBMb2FkID0gUmVhY3QudXNlQ2FsbGJhY2soKG1hcCkgPT4ge1xyXG4gICAgICAgIG1hcFJlZi5jdXJyZW50ID0gbWFwO1xyXG4gICAgICB9LCBbXSk7XHJcbiAgICBcclxuICAgICAgY29uc3QgcGFuVG8gPSBSZWFjdC51c2VDYWxsYmFjaygoeyBsYXQsIGxuZyB9KSA9PiB7XHJcbiAgICAgICAgbWFwUmVmLmN1cnJlbnQucGFuVG8oeyBsYXQsIGxuZyB9KTtcclxuICAgICAgICBtYXBSZWYuY3VycmVudC5zZXRab29tKDE0KTtcclxuICAgICAgfSwgW10pO1xyXG4gICAgXHJcbiAgICAgIGlmIChsb2FkRXJyb3IpIHJldHVybiBcIkVycm9yXCI7XHJcbiAgICAgIGlmICghaXNMb2FkZWQpIHJldHVybiBcIkxvYWRpbmcuLi5cIjtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGgxPlxyXG4gICAgICAgICAgICBCZWFyc3tcIiBcIn1cclxuICAgICAgICAgICAgPHNwYW4gcm9sZT1cImltZ1wiIGFyaWEtbGFiZWw9XCJ0ZW50XCI+XHJcbiAgICAgICAgICAgICAg4pu677iPXHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDwvaDE+XHJcbiAgICBcclxuICAgICAgICAgIDxMb2NhdGUgcGFuVG89e3BhblRvfSAvPlxyXG4gICAgICAgICAgPFNlYXJjaCBwYW5Ubz17cGFuVG99IC8+XHJcbiAgICBcclxuICAgICAgICAgIDxHb29nbGVNYXBcclxuICAgICAgICAgICAgaWQ9XCJtYXBcIlxyXG4gICAgICAgICAgICBtYXBDb250YWluZXJTdHlsZT17bWFwQ29udGFpbmVyU3R5bGV9XHJcbiAgICAgICAgICAgIHpvb209ezh9XHJcbiAgICAgICAgICAgIGNlbnRlcj17Y2VudGVyfVxyXG4gICAgICAgICAgICBvcHRpb25zPXtvcHRpb25zfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXtvbk1hcENsaWNrfVxyXG4gICAgICAgICAgICBvbkxvYWQ9e29uTWFwTG9hZH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge21hcmtlcnMubWFwKChtYXJrZXIpID0+IChcclxuICAgICAgICAgICAgICA8TWFya2VyXHJcbiAgICAgICAgICAgICAgICBrZXk9e2Ake21hcmtlci5sYXR9LSR7bWFya2VyLmxuZ31gfVxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb249e3sgbGF0OiBtYXJrZXIubGF0LCBsbmc6IG1hcmtlci5sbmcgfX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWQobWFya2VyKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBpY29uPXt7XHJcbiAgICAgICAgICAgICAgICAgIHVybDogYC9iZWFyLnN2Z2AsXHJcbiAgICAgICAgICAgICAgICAgIG9yaWdpbjogbmV3IHdpbmRvdy5nb29nbGUubWFwcy5Qb2ludCgwLCAwKSxcclxuICAgICAgICAgICAgICAgICAgYW5jaG9yOiBuZXcgd2luZG93Lmdvb2dsZS5tYXBzLlBvaW50KDE1LCAxNSksXHJcbiAgICAgICAgICAgICAgICAgIHNjYWxlZFNpemU6IG5ldyB3aW5kb3cuZ29vZ2xlLm1hcHMuU2l6ZSgzMCwgMzApLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgIFxyXG4gICAgICAgICAgICB7c2VsZWN0ZWQgPyAoXHJcbiAgICAgICAgICAgICAgPEluZm9XaW5kb3dcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uPXt7IGxhdDogc2VsZWN0ZWQubGF0LCBsbmc6IHNlbGVjdGVkLmxuZyB9fVxyXG4gICAgICAgICAgICAgICAgb25DbG9zZUNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkKG51bGwpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8aDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gcm9sZT1cImltZ1wiIGFyaWEtbGFiZWw9XCJiZWFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICDwn5C7XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICBBbGVydFxyXG4gICAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgICAgICA8cD5TcG90dGVkIHtmb3JtYXRSZWxhdGl2ZShzZWxlY3RlZC50aW1lLCBuZXcgRGF0ZSgpKX08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L0luZm9XaW5kb3c+XHJcbiAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgPC9Hb29nbGVNYXA+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiIsImV4cG9ydCBkZWZhdWx0IFtcclxuICAgIHtcclxuICAgICAgZmVhdHVyZVR5cGU6IFwiYWxsXCIsXHJcbiAgICAgIGVsZW1lbnRUeXBlOiBcImdlb21ldHJ5LmZpbGxcIixcclxuICAgICAgc3R5bGVyczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHdlaWdodDogXCIyLjAwXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGZlYXR1cmVUeXBlOiBcImFsbFwiLFxyXG4gICAgICBlbGVtZW50VHlwZTogXCJnZW9tZXRyeS5zdHJva2VcIixcclxuICAgICAgc3R5bGVyczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNvbG9yOiBcIiM5YzljOWNcIixcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgZmVhdHVyZVR5cGU6IFwiYWxsXCIsXHJcbiAgICAgIGVsZW1lbnRUeXBlOiBcImxhYmVscy50ZXh0XCIsXHJcbiAgICAgIHN0eWxlcnM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICB2aXNpYmlsaXR5OiBcIm9uXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGZlYXR1cmVUeXBlOiBcImxhbmRzY2FwZVwiLFxyXG4gICAgICBlbGVtZW50VHlwZTogXCJhbGxcIixcclxuICAgICAgc3R5bGVyczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNvbG9yOiBcIiNmMmYyZjJcIixcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgZmVhdHVyZVR5cGU6IFwibGFuZHNjYXBlXCIsXHJcbiAgICAgIGVsZW1lbnRUeXBlOiBcImdlb21ldHJ5LmZpbGxcIixcclxuICAgICAgc3R5bGVyczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNvbG9yOiBcIiNmZmZmZmZcIixcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgZmVhdHVyZVR5cGU6IFwibGFuZHNjYXBlLm1hbl9tYWRlXCIsXHJcbiAgICAgIGVsZW1lbnRUeXBlOiBcImdlb21ldHJ5LmZpbGxcIixcclxuICAgICAgc3R5bGVyczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNvbG9yOiBcIiNmZmZmZmZcIixcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgZmVhdHVyZVR5cGU6IFwicG9pXCIsXHJcbiAgICAgIGVsZW1lbnRUeXBlOiBcImFsbFwiLFxyXG4gICAgICBzdHlsZXJzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdmlzaWJpbGl0eTogXCJvZmZcIixcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgZmVhdHVyZVR5cGU6IFwicm9hZFwiLFxyXG4gICAgICBlbGVtZW50VHlwZTogXCJhbGxcIixcclxuICAgICAgc3R5bGVyczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHNhdHVyYXRpb246IC0xMDAsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBsaWdodG5lc3M6IDQ1LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBmZWF0dXJlVHlwZTogXCJyb2FkXCIsXHJcbiAgICAgIGVsZW1lbnRUeXBlOiBcImdlb21ldHJ5LmZpbGxcIixcclxuICAgICAgc3R5bGVyczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNvbG9yOiBcIiNlZWVlZWVcIixcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgZmVhdHVyZVR5cGU6IFwicm9hZFwiLFxyXG4gICAgICBlbGVtZW50VHlwZTogXCJsYWJlbHMudGV4dC5maWxsXCIsXHJcbiAgICAgIHN0eWxlcnM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjb2xvcjogXCIjN2I3YjdiXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGZlYXR1cmVUeXBlOiBcInJvYWRcIixcclxuICAgICAgZWxlbWVudFR5cGU6IFwibGFiZWxzLnRleHQuc3Ryb2tlXCIsXHJcbiAgICAgIHN0eWxlcnM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjb2xvcjogXCIjZmZmZmZmXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGZlYXR1cmVUeXBlOiBcInJvYWQuaGlnaHdheVwiLFxyXG4gICAgICBlbGVtZW50VHlwZTogXCJhbGxcIixcclxuICAgICAgc3R5bGVyczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHZpc2liaWxpdHk6IFwic2ltcGxpZmllZFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBmZWF0dXJlVHlwZTogXCJyb2FkLmFydGVyaWFsXCIsXHJcbiAgICAgIGVsZW1lbnRUeXBlOiBcImxhYmVscy5pY29uXCIsXHJcbiAgICAgIHN0eWxlcnM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICB2aXNpYmlsaXR5OiBcIm9mZlwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBmZWF0dXJlVHlwZTogXCJ0cmFuc2l0XCIsXHJcbiAgICAgIGVsZW1lbnRUeXBlOiBcImFsbFwiLFxyXG4gICAgICBzdHlsZXJzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdmlzaWJpbGl0eTogXCJvZmZcIixcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgZmVhdHVyZVR5cGU6IFwid2F0ZXJcIixcclxuICAgICAgZWxlbWVudFR5cGU6IFwiYWxsXCIsXHJcbiAgICAgIHN0eWxlcnM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjb2xvcjogXCIjNDZiY2VjXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB2aXNpYmlsaXR5OiBcIm9uXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGZlYXR1cmVUeXBlOiBcIndhdGVyXCIsXHJcbiAgICAgIGVsZW1lbnRUeXBlOiBcImdlb21ldHJ5LmZpbGxcIixcclxuICAgICAgc3R5bGVyczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNvbG9yOiBcIiNjOGQ3ZDRcIixcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgZmVhdHVyZVR5cGU6IFwid2F0ZXJcIixcclxuICAgICAgZWxlbWVudFR5cGU6IFwibGFiZWxzLnRleHQuZmlsbFwiLFxyXG4gICAgICBzdHlsZXJzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY29sb3I6IFwiIzA3MDcwN1wiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBmZWF0dXJlVHlwZTogXCJ3YXRlclwiLFxyXG4gICAgICBlbGVtZW50VHlwZTogXCJsYWJlbHMudGV4dC5zdHJva2VcIixcclxuICAgICAgc3R5bGVyczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNvbG9yOiBcIiNmZmZmZmZcIixcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICBdOyJdLCJzb3VyY2VSb290IjoiIn0=