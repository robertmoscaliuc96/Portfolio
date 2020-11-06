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



var _jsxFileName = "E:\\Portfolio\\components\\layout\\Map1.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;


var libraries = ["places"];
var mapContainerStyle = {
  height: "100vh",
  width: "100vw"
};
var options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true
};
var center = {
  lat: 53.475433,
  lng: -79.3832
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
  }, "\u26FA\uFE0F")), __jsx(Locate, {
    panTo: panTo,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 11
    }
  }), __jsx(Search, {
    panTo: panTo,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
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
      lineNumber: 68,
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
        lineNumber: 78,
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
      lineNumber: 94,
      columnNumber: 15
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 17
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 19
    }
  }, __jsx("span", {
    role: "img",
    "aria-label": "bear",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 21
    }
  }, "\uD83D\uDC3B"), " ", "Alert"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvTWFwMS5qcyJdLCJuYW1lcyI6WyJsaWJyYXJpZXMiLCJtYXBDb250YWluZXJTdHlsZSIsImhlaWdodCIsIndpZHRoIiwib3B0aW9ucyIsInN0eWxlcyIsIm1hcFN0eWxlcyIsImRpc2FibGVEZWZhdWx0VUkiLCJ6b29tQ29udHJvbCIsImNlbnRlciIsImxhdCIsImxuZyIsIkFwcCIsInVzZUxvYWRTY3JpcHQiLCJnb29nbGVNYXBzQXBpS2V5IiwicHJvY2VzcyIsImVudiIsIkdPT0dMRV9NQVBfQVBJIiwiaXNMb2FkZWQiLCJsb2FkRXJyb3IiLCJSZWFjdCIsInVzZVN0YXRlIiwibWFya2VycyIsInNldE1hcmtlcnMiLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwib25NYXBDbGljayIsInVzZUNhbGxiYWNrIiwiZSIsImN1cnJlbnQiLCJsYXRMbmciLCJ0aW1lIiwiRGF0ZSIsIm1hcFJlZiIsInVzZVJlZiIsIm9uTWFwTG9hZCIsIm1hcCIsInBhblRvIiwic2V0Wm9vbSIsIm1hcmtlciIsInVybCIsIm9yaWdpbiIsIndpbmRvdyIsImdvb2dsZSIsIm1hcHMiLCJQb2ludCIsImFuY2hvciIsInNjYWxlZFNpemUiLCJTaXplIiwiZm9ybWF0UmVsYXRpdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFPQSxJQUFNQSxTQUFTLEdBQUcsQ0FBQyxRQUFELENBQWxCO0FBQ0EsSUFBTUMsaUJBQWlCLEdBQUc7QUFDeEJDLFFBQU0sRUFBRSxPQURnQjtBQUV4QkMsT0FBSyxFQUFFO0FBRmlCLENBQTFCO0FBS0EsSUFBTUMsT0FBTyxHQUFHO0FBQ1pDLFFBQU0sRUFBRUMsU0FESTtBQUVaQyxrQkFBZ0IsRUFBRSxJQUZOO0FBR1pDLGFBQVcsRUFBRTtBQUhELENBQWhCO0FBTUUsSUFBTUMsTUFBTSxHQUFHO0FBQ2JDLEtBQUcsRUFBRSxTQURRO0FBRWJDLEtB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VyxNQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLEVBR1UsR0FIVixVQURGLEVBT0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBWXdCLGNBQWMsQ0FBQ3pCLFFBQVEsQ0FBQ08sSUFBVixFQUFnQixJQUFJQyxJQUFKLEVBQWhCLENBQTFCLENBUEYsQ0FORixDQURPLEdBaUJMLElBMUNOLENBWEYsQ0FERjtBQTBERDs7R0F4RnFCcEIsRztVQUNVQyxvRTs7O0tBRFZELEciLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWJvdXQuOTYyNDY3ZTUxMmY4ZWU4ODMxMWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICBHb29nbGVNYXAsXHJcbiAgdXNlTG9hZFNjcmlwdCxcclxuICBNYXJrZXIsXHJcbiAgSW5mb1dpbmRvdyxcclxufSBmcm9tIFwiQHJlYWN0LWdvb2dsZS1tYXBzL2FwaVwiO1xyXG5cclxuY29uc3QgbGlicmFyaWVzID0gW1wicGxhY2VzXCJdO1xyXG5jb25zdCBtYXBDb250YWluZXJTdHlsZSA9IHtcclxuICBoZWlnaHQ6IFwiMTAwdmhcIixcclxuICB3aWR0aDogXCIxMDB2d1wiLFxyXG59O1xyXG5cclxuY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgIHN0eWxlczogbWFwU3R5bGVzLFxyXG4gICAgZGlzYWJsZURlZmF1bHRVSTogdHJ1ZSxcclxuICAgIHpvb21Db250cm9sOiB0cnVlLFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNlbnRlciA9IHtcclxuICAgIGxhdDogNTMuNDc1NDMzLFxyXG4gICAgbG5nOiAtNzkuMzgzMixcclxuICB9O1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XHJcbiAgICBjb25zdCB7IGlzTG9hZGVkLCBsb2FkRXJyb3IgfSA9IHVzZUxvYWRTY3JpcHQoe1xyXG4gICAgICBnb29nbGVNYXBzQXBpS2V5OiBwcm9jZXNzLmVudi5HT09HTEVfTUFQX0FQSSxcclxuICAgICAgbGlicmFyaWVzLFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBbbWFya2Vycywgc2V0TWFya2Vyc10gPSBSZWFjdC51c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbc2VsZWN0ZWQsIHNldFNlbGVjdGVkXSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3Qgb25NYXBDbGljayA9IFJlYWN0LnVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICAgICAgc2V0TWFya2VycygoY3VycmVudCkgPT4gW1xyXG4gICAgICAgICAgLi4uY3VycmVudCxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbGF0OiBlLmxhdExuZy5sYXQoKSxcclxuICAgICAgICAgICAgbG5nOiBlLmxhdExuZy5sbmcoKSxcclxuICAgICAgICAgICAgdGltZTogbmV3IERhdGUoKSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgXSk7XHJcbiAgICAgIH0sIFtdKTtcclxuICAgIFxyXG4gICAgICBjb25zdCBtYXBSZWYgPSBSZWFjdC51c2VSZWYoKTtcclxuICAgICAgY29uc3Qgb25NYXBMb2FkID0gUmVhY3QudXNlQ2FsbGJhY2soKG1hcCkgPT4ge1xyXG4gICAgICAgIG1hcFJlZi5jdXJyZW50ID0gbWFwO1xyXG4gICAgICB9LCBbXSk7XHJcbiAgICBcclxuICAgICAgY29uc3QgcGFuVG8gPSBSZWFjdC51c2VDYWxsYmFjaygoeyBsYXQsIGxuZyB9KSA9PiB7XHJcbiAgICAgICAgbWFwUmVmLmN1cnJlbnQucGFuVG8oeyBsYXQsIGxuZyB9KTtcclxuICAgICAgICBtYXBSZWYuY3VycmVudC5zZXRab29tKDE0KTtcclxuICAgICAgfSwgW10pO1xyXG4gICAgXHJcbiAgICAgIGlmIChsb2FkRXJyb3IpIHJldHVybiBcIkVycm9yXCI7XHJcbiAgICAgIGlmICghaXNMb2FkZWQpIHJldHVybiBcIkxvYWRpbmcuLi5cIjtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGgxPlxyXG4gICAgICAgICAgICBCZWFyc3tcIiBcIn1cclxuICAgICAgICAgICAgPHNwYW4gcm9sZT1cImltZ1wiIGFyaWEtbGFiZWw9XCJ0ZW50XCI+XHJcbiAgICAgICAgICAgICAg4pu677iPXHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDwvaDE+XHJcbiAgICBcclxuICAgICAgICAgIDxMb2NhdGUgcGFuVG89e3BhblRvfSAvPlxyXG4gICAgICAgICAgPFNlYXJjaCBwYW5Ubz17cGFuVG99IC8+XHJcbiAgICBcclxuICAgICAgICAgIDxHb29nbGVNYXBcclxuICAgICAgICAgICAgaWQ9XCJtYXBcIlxyXG4gICAgICAgICAgICBtYXBDb250YWluZXJTdHlsZT17bWFwQ29udGFpbmVyU3R5bGV9XHJcbiAgICAgICAgICAgIHpvb209ezh9XHJcbiAgICAgICAgICAgIGNlbnRlcj17Y2VudGVyfVxyXG4gICAgICAgICAgICBvcHRpb25zPXtvcHRpb25zfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXtvbk1hcENsaWNrfVxyXG4gICAgICAgICAgICBvbkxvYWQ9e29uTWFwTG9hZH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge21hcmtlcnMubWFwKChtYXJrZXIpID0+IChcclxuICAgICAgICAgICAgICA8TWFya2VyXHJcbiAgICAgICAgICAgICAgICBrZXk9e2Ake21hcmtlci5sYXR9LSR7bWFya2VyLmxuZ31gfVxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb249e3sgbGF0OiBtYXJrZXIubGF0LCBsbmc6IG1hcmtlci5sbmcgfX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWQobWFya2VyKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBpY29uPXt7XHJcbiAgICAgICAgICAgICAgICAgIHVybDogYC9iZWFyLnN2Z2AsXHJcbiAgICAgICAgICAgICAgICAgIG9yaWdpbjogbmV3IHdpbmRvdy5nb29nbGUubWFwcy5Qb2ludCgwLCAwKSxcclxuICAgICAgICAgICAgICAgICAgYW5jaG9yOiBuZXcgd2luZG93Lmdvb2dsZS5tYXBzLlBvaW50KDE1LCAxNSksXHJcbiAgICAgICAgICAgICAgICAgIHNjYWxlZFNpemU6IG5ldyB3aW5kb3cuZ29vZ2xlLm1hcHMuU2l6ZSgzMCwgMzApLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgIFxyXG4gICAgICAgICAgICB7c2VsZWN0ZWQgPyAoXHJcbiAgICAgICAgICAgICAgPEluZm9XaW5kb3dcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uPXt7IGxhdDogc2VsZWN0ZWQubGF0LCBsbmc6IHNlbGVjdGVkLmxuZyB9fVxyXG4gICAgICAgICAgICAgICAgb25DbG9zZUNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkKG51bGwpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8aDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gcm9sZT1cImltZ1wiIGFyaWEtbGFiZWw9XCJiZWFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICDwn5C7XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICBBbGVydFxyXG4gICAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgICAgICA8cD5TcG90dGVkIHtmb3JtYXRSZWxhdGl2ZShzZWxlY3RlZC50aW1lLCBuZXcgRGF0ZSgpKX08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L0luZm9XaW5kb3c+XHJcbiAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgPC9Hb29nbGVNYXA+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=