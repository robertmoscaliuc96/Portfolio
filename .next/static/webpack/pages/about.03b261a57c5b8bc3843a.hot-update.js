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
  viewport = {
    width: '55vw',
    height: '100vh',
    latitude: 53.475433,
    longitude: -2.236497,
    zoom: 13
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
  }, this.viewport, {
    className: "map",
    zoom: 8,
    center: center,
    options: options,
    onClick: onMapClick,
    onLoad: onMapLoad,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
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
        lineNumber: 79,
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
      lineNumber: 95,
      columnNumber: 15
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 17
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 19
    }
  }, __jsx("span", {
    role: "img",
    "aria-label": "bear",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 21
    }
  }, "\uD83D\uDC3B"), " ", "Alert"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvTWFwMS5qcyJdLCJuYW1lcyI6WyJsaWJyYXJpZXMiLCJtYXBDb250YWluZXJTdHlsZSIsImhlaWdodCIsIndpZHRoIiwib3B0aW9ucyIsInN0eWxlcyIsIm1hcFN0eWxlcyIsImRpc2FibGVEZWZhdWx0VUkiLCJ6b29tQ29udHJvbCIsImNlbnRlciIsImxhdCIsImxuZyIsIkFwcCIsInVzZUxvYWRTY3JpcHQiLCJnb29nbGVNYXBzQXBpS2V5IiwiaXNMb2FkZWQiLCJsb2FkRXJyb3IiLCJSZWFjdCIsInVzZVN0YXRlIiwibWFya2VycyIsInNldE1hcmtlcnMiLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwib25NYXBDbGljayIsInVzZUNhbGxiYWNrIiwiZSIsImN1cnJlbnQiLCJsYXRMbmciLCJ0aW1lIiwiRGF0ZSIsIm1hcFJlZiIsInVzZVJlZiIsIm9uTWFwTG9hZCIsIm1hcCIsInZpZXdwb3J0IiwibGF0aXR1ZGUiLCJsb25naXR1ZGUiLCJ6b29tIiwic2V0U3RhdGUiLCJtYXJrZXIiLCJ1cmwiLCJvcmlnaW4iLCJ3aW5kb3ciLCJnb29nbGUiLCJtYXBzIiwiUG9pbnQiLCJhbmNob3IiLCJzY2FsZWRTaXplIiwiU2l6ZSIsImZvcm1hdFJlbGF0aXZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBRyxDQUFDLFFBQUQsQ0FBbEI7QUFDQSxJQUFNQyxpQkFBaUIsR0FBRztBQUN4QkMsUUFBTSxFQUFFLE9BRGdCO0FBRXhCQyxPQUFLLEVBQUU7QUFGaUIsQ0FBMUI7QUFLQSxJQUFNQyxPQUFPLEdBQUc7QUFDWkMsUUFBTSxFQUFFQyxpREFESTtBQUVaQyxrQkFBZ0IsRUFBRSxJQUZOO0FBR1pDLGFBQVcsRUFBRTtBQUhELENBQWhCO0FBTUUsSUFBTUMsTUFBTSxHQUFHO0FBQ2JDLEtB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SkMsY0FBTSxFQUFFLElBQUlKLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjQyxJQUFkLENBQW1CQyxLQUF2QixDQUE2QixFQUE3QixFQUFpQyxFQUFqQyxDQUhKO0FBSUpFLGtCQUFVLEVBQUUsSUFBSUwsTUFBTSxDQUFDQyxNQUFQLENBQWNDLElBQWQsQ0FBbUJJLElBQXZCLENBQTRCLEVBQTVCLEVBQWdDLEVBQWhDO0FBSlIsT0FOUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRFc7QUFBQSxHQUFaLENBWkgsRUE0QkczQixRQUFRLEdBQ1AsTUFBQyxpRUFBRDtBQUNFLFlBQVEsRUFBRTtBQUFFWCxTQUFHLEVBQUVXLFFBQVEsQ0FBQ1gsR0FBaEI7QUFBcUJDLFNBQUcsRUFBRVUsUUFBUSxDQUFDVjtBQUFuQyxLQURaO0FBRUUsZ0JBQVksRUFBRSx3QkFBTTtBQUNsQlcsaUJBQVcsQ0FBQyxJQUFELENBQVg7QUFDRCxLQUpIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FNRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQU0sUUFBSSxFQUFDLEtBQVg7QUFBaUIsa0JBQVcsTUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixFQUdVLEdBSFYsVUFERixFQU9FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQVkyQixjQUFjLENBQUM1QixRQUFRLENBQUNPLElBQVYsRUFBZ0IsSUFBSUMsSUFBSixFQUFoQixDQUExQixDQVBGLENBTkYsQ0FETyxHQWlCTCxJQTdDTixDQURKO0FBaUREOztHQXJGcUJqQixHO1VBQ1VDLG9FOzs7S0FEVkQsRyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hYm91dC4wM2IyNjFhNTdjNWI4YmMzODQzYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gIEdvb2dsZU1hcCxcclxuICB1c2VMb2FkU2NyaXB0LFxyXG4gIE1hcmtlcixcclxuICBJbmZvV2luZG93LFxyXG59IGZyb20gXCJAcmVhY3QtZ29vZ2xlLW1hcHMvYXBpXCI7XHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0TWFwR0wgZnJvbSAncmVhY3QtbWFwLWdsJztcclxuaW1wb3J0IG1hcFN0eWxlcyBmcm9tIFwiLi9NYXBTdHlsZVwiXHJcblxyXG5jb25zdCBsaWJyYXJpZXMgPSBbXCJwbGFjZXNcIl07XHJcbmNvbnN0IG1hcENvbnRhaW5lclN0eWxlID0ge1xyXG4gIGhlaWdodDogXCIxMDB2aFwiLFxyXG4gIHdpZHRoOiBcIjEwMHZ3XCIsXHJcbn07XHJcblxyXG5jb25zdCBvcHRpb25zID0ge1xyXG4gICAgc3R5bGVzOiBtYXBTdHlsZXMsXHJcbiAgICBkaXNhYmxlRGVmYXVsdFVJOiB0cnVlLFxyXG4gICAgem9vbUNvbnRyb2w6IHRydWUsXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY2VudGVyID0ge1xyXG4gICAgbGF0OiA1My40NzU0MzMsXHJcbiAgICBsbmc6IC0yLjIzNjQ5NyxcclxuICB9O1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XHJcbiAgICBjb25zdCB7IGlzTG9hZGVkLCBsb2FkRXJyb3IgfSA9IHVzZUxvYWRTY3JpcHQoe1xyXG4gICAgICBnb29nbGVNYXBzQXBpS2V5OiBcInBrLmV5SjFJam9pYlc5elkyRnNhWElpTENKaElqb2lZMnRvTW1ocmQyWnFNR1Z1ZGpKemJYaHZaREl6Ym1GcWRTSjkuYmlRa3BaOGxvVlhJc3hoTXVOZmZvZ1wiLFxyXG4gICAgICBsaWJyYXJpZXMsXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IFttYXJrZXJzLCBzZXRNYXJrZXJzXSA9IFJlYWN0LnVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtzZWxlY3RlZCwgc2V0U2VsZWN0ZWRdID0gUmVhY3QudXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBvbk1hcENsaWNrID0gUmVhY3QudXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgICAgICBzZXRNYXJrZXJzKChjdXJyZW50KSA9PiBbXHJcbiAgICAgICAgICAuLi5jdXJyZW50LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBsYXQ6IGUubGF0TG5nLmxhdCgpLFxyXG4gICAgICAgICAgICBsbmc6IGUubGF0TG5nLmxuZygpLFxyXG4gICAgICAgICAgICB0aW1lOiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdKTtcclxuICAgICAgfSwgW10pO1xyXG4gICAgXHJcbiAgICAgIGNvbnN0IG1hcFJlZiA9IFJlYWN0LnVzZVJlZigpO1xyXG4gICAgICBjb25zdCBvbk1hcExvYWQgPSBSZWFjdC51c2VDYWxsYmFjaygobWFwKSA9PiB7XHJcbiAgICAgICAgbWFwUmVmLmN1cnJlbnQgPSBtYXA7XHJcbiAgICAgIH0sIFtdKTtcclxuICAgICAgdmlld3BvcnQ9IHtcclxuICAgICAgICB3aWR0aDogJzU1dncnLFxyXG4gICAgICAgIGhlaWdodDogJzEwMHZoJyxcclxuICAgICAgICBsYXRpdHVkZTogNTMuNDc1NDMzLFxyXG4gICAgICAgIGxvbmdpdHVkZTogLTIuMjM2NDk3LFxyXG4gICAgICAgIHpvb206IDEzLFxyXG4gICAgICAgIFxyXG4gICAgICB9XHJcbiBcclxuICAgIFxyXG5cclxuICAgIFxyXG4gICAgICBpZiAobG9hZEVycm9yKSByZXR1cm4gXCJFcnJvclwiO1xyXG4gICAgICBpZiAoIWlzTG9hZGVkKSByZXR1cm4gXCJMb2FkaW5nLi4uXCI7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8R29vZ2xlTWFwXHJcbiAgICAgICAgICAgIG1hcFN0eWxlPVwibWFwYm94Oi8vc3R5bGVzL21hcGJveC9kYXJrLXYxMFwiXHJcbiAgICAgICAgICAgIG1hcGJveEFwaUFjY2Vzc1Rva2VuPVwicGsuZXlKMUlqb2liVzl6WTJGc2FYSWlMQ0poSWpvaVkydG9NbWhyZDJacU1HVnVkakp6YlhodlpESXpibUZxZFNKOS5iaVFrcFo4bG9WWElzeGhNdU5mZm9nXCJcclxuICAgICAgICAgICAgb25WaWV3cG9ydENoYW5nZT17KHZpZXdwb3J0KSA9PiB0aGlzLnNldFN0YXRlKHsgdmlld3BvcnQgfSl9XHJcbiAgICAgICAgey4uLnRoaXMudmlld3BvcnR9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1hcFwiXHJcbiAgICAgICAgICAgIHpvb209ezh9XHJcbiAgICAgICAgICAgIGNlbnRlcj17Y2VudGVyfVxyXG4gICAgICAgICAgICBvcHRpb25zPXtvcHRpb25zfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXtvbk1hcENsaWNrfVxyXG4gICAgICAgICAgICBvbkxvYWQ9e29uTWFwTG9hZH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge21hcmtlcnMubWFwKChtYXJrZXIpID0+IChcclxuICAgICAgICAgICAgICA8TWFya2VyXHJcbiAgICAgICAgICAgICAgICBrZXk9e2Ake21hcmtlci5sYXR9LSR7bWFya2VyLmxuZ31gfVxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb249e3sgbGF0OiBtYXJrZXIubGF0LCBsbmc6IG1hcmtlci5sbmcgfX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWQobWFya2VyKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBpY29uPXt7XHJcbiAgICAgICAgICAgICAgICAgIHVybDogYC9iZWFyLnN2Z2AsXHJcbiAgICAgICAgICAgICAgICAgIG9yaWdpbjogbmV3IHdpbmRvdy5nb29nbGUubWFwcy5Qb2ludCgwLCAwKSxcclxuICAgICAgICAgICAgICAgICAgYW5jaG9yOiBuZXcgd2luZG93Lmdvb2dsZS5tYXBzLlBvaW50KDE1LCAxNSksXHJcbiAgICAgICAgICAgICAgICAgIHNjYWxlZFNpemU6IG5ldyB3aW5kb3cuZ29vZ2xlLm1hcHMuU2l6ZSgzMCwgMzApLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgIFxyXG4gICAgICAgICAgICB7c2VsZWN0ZWQgPyAoXHJcbiAgICAgICAgICAgICAgPEluZm9XaW5kb3dcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uPXt7IGxhdDogc2VsZWN0ZWQubGF0LCBsbmc6IHNlbGVjdGVkLmxuZyB9fVxyXG4gICAgICAgICAgICAgICAgb25DbG9zZUNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkKG51bGwpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8aDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gcm9sZT1cImltZ1wiIGFyaWEtbGFiZWw9XCJiZWFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICDwn5C7XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICBBbGVydFxyXG4gICAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgICAgICA8cD5TcG90dGVkIHtmb3JtYXRSZWxhdGl2ZShzZWxlY3RlZC50aW1lLCBuZXcgRGF0ZSgpKX08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L0luZm9XaW5kb3c+XHJcbiAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgPC9Hb29nbGVNYXA+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=