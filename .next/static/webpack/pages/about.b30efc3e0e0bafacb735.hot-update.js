webpackHotUpdate_N_E("pages/about",{

/***/ "./components/layout/Map.js":
/*!**********************************!*\
  !*** ./components/layout/Map.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_map_gl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-map-gl */ "./node_modules/react-map-gl/dist/esm/index.js");
/* harmony import */ var _react_google_maps_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @react-google-maps/api */ "./node_modules/@react-google-maps/api/dist/reactgooglemapsapi.esm.js");








var _jsxFileName = "E:\\Portfolio\\components\\layout\\Map.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var Map = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Map, _Component);

  var _super = _createSuper(Map);

  function Map() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Map);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "state", {
      viewport: {
        width: '55vw',
        height: '100vh',
        latitude: 53.475433,
        longitude: -2.236497,
        zoom: 13
      }
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Map, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx(react_map_gl__WEBPACK_IMPORTED_MODULE_9__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        mapStyle: "mapbox://styles/mapbox/dark-v10",
        mapboxApiAccessToken: "pk.eyJ1IjoibW9zY2FsaXIiLCJhIjoiY2toMmhrd2ZqMGVudjJzbXhvZDIzbmFqdSJ9.biQkpZ8loVXIsxhMuNffog",
        onViewportChange: function onViewportChange(viewport) {
          return _this2.setState({
            viewport: viewport
          });
        }
      }, this.state.viewport, {
        className: "map",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 7
        }
      }), __jsx(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_10__["Marker"], {
        position: {
          lat: 53.475433,
          lng: -2.236497
        },
        icon: {
          url: "/r.svg",
          origin: new window.google.maps.Point(0, 0),
          anchor: new window.google.maps.Point(15, 15),
          scaledSize: new window.google.maps.Size(30, 30)
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 11
        }
      }));
    }
  }]);

  return Map;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Map);

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

/***/ }),

/***/ "./node_modules/@googlemaps/js-api-loader/dist/index.esm.js":
/*!******************************************************************!*\
  !*** ./node_modules/@googlemaps/js-api-loader/dist/index.esm.js ***!
  \******************************************************************/
/*! exports provided: Loader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Loader", function() { return Loader; });
/**
 * Copyright 2019 Google LLC. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at.
 *
 *      Http://www.apache.org/licenses/LICENSE-2.0.
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * [[Loader]] makes it easier to add Google Maps JavaScript API to your application
 * dynamically using
 * [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).
 * It works by dynamically creating and appending a script node to the the
 * document head and wrapping the callback function so as to return a promise.
 *
 * ```
 * const loader = new Loader({
 *   apiKey: "",
 *   version: "weekly",
 *   libraries: ["places"]
 * });
 *
 * loader.load().then(() => {
 *   const map = new google.maps.Map(...)
 * })
 * ```
 */
var Loader = /** @class */ (function () {
    /**
     * Creates an instance of Loader using [[LoaderOptions]]. No defaults are set
     * using this library, instead the defaults are set by the Google Maps
     * JavaScript API server.
     *
     * ```
     * const loader = Loader({apiKey, version: 'weekly', libraries: ['places']});
     * ```
     */
    function Loader(_a) {
        var apiKey = _a.apiKey, channel = _a.channel, _b = _a.id, id = _b === void 0 ? "__googleMapsScriptId" : _b, _c = _a.libraries, libraries = _c === void 0 ? [] : _c, language = _a.language, region = _a.region, version = _a.version, mapIds = _a.mapIds, nonce = _a.nonce, _d = _a.url, url = _d === void 0 ? "https://maps.googleapis.com/maps/api/js" : _d;
        this.CALLBACK = "__googleMapsCallback";
        this.callbacks = [];
        this.done = false;
        this.loading = false;
        this.version = version;
        this.apiKey = apiKey;
        this.channel = channel;
        this.id = id;
        this.libraries = libraries;
        this.language = language;
        this.region = region;
        this.mapIds = mapIds;
        this.nonce = nonce;
        this.url = url;
    }
    /**
     * CreateUrl returns the Google Maps JavaScript API script url given the [[LoaderOptions]].
     *
     * @ignore
     */
    Loader.prototype.createUrl = function () {
        var url = this.url;
        url += "?callback=" + this.CALLBACK;
        if (this.apiKey) {
            url += "&key=" + this.apiKey;
        }
        if (this.channel) {
            url += "&channel=" + this.channel;
        }
        if (this.libraries.length > 0) {
            url += "&libraries=" + this.libraries.join(",");
        }
        if (this.language) {
            url += "&language=" + this.language;
        }
        if (this.region) {
            url += "&region=" + this.region;
        }
        if (this.version) {
            url += "&v=" + this.version;
        }
        if (this.mapIds) {
            url += "&map_ids=" + this.mapIds.join(",");
        }
        return url;
    };
    /**
     * Load the Google Maps JavaScript API script and return a Promise.
     */
    Loader.prototype.load = function () {
        return this.loadPromise();
    };
    /**
     * Load the Google Maps JavaScript API script and return a Promise.
     *
     * @ignore
     */
    Loader.prototype.loadPromise = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.loadCallback(function (err) {
                if (!err) {
                    resolve();
                }
                else {
                    reject(err);
                }
            });
        });
    };
    /**
     * Load the Google Maps JavaScript API script with a callback.
     */
    Loader.prototype.loadCallback = function (fn) {
        this.callbacks.push(fn);
        this.execute();
    };
    /**
     * Set the script on document.
     */
    Loader.prototype.setScript = function () {
        if (this.id && document.getElementById(this.id)) {
            this.callback();
            return;
        }
        var url = this.createUrl();
        var script = document.createElement("script");
        script.id = this.id;
        script.type = "text/javascript";
        script.src = url;
        script.onerror = this.loadErrorCallback.bind(this);
        script.defer = true;
        script.async = true;
        if (this.nonce) {
            script.nonce = this.nonce;
        }
        document.head.appendChild(script);
    };
    Loader.prototype.loadErrorCallback = function (e) {
        this.onerrorEvent = e;
        this.callback();
    };
    Loader.prototype.setCallback = function () {
        window.__googleMapsCallback = this.callback.bind(this);
    };
    Loader.prototype.callback = function () {
        var _this = this;
        this.done = true;
        this.loading = false;
        this.callbacks.forEach(function (cb) {
            cb(_this.onerrorEvent);
        });
        this.callbacks = [];
    };
    Loader.prototype.execute = function () {
        if (this.done) {
            this.callback();
        }
        else {
            if (this.loading) ;
            else {
                this.loading = true;
                this.setCallback();
                this.setScript();
            }
        }
    };
    return Loader;
}());


//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./node_modules/@react-google-maps/api/dist/reactgooglemapsapi.esm.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@react-google-maps/api/dist/reactgooglemapsapi.esm.js ***!
  \****************************************************************************/
/*! exports provided: Autocomplete, BicyclingLayer, Circle, Data, DirectionsRenderer, DirectionsService, DistanceMatrixService, DrawingManager, GoogleMap, GroundOverlay, HeatmapLayer, InfoBox, InfoWindow, KmlLayer, LoadScript, LoadScriptNext, MapContext, Marker, MarkerClusterer, OverlayView, Polygon, Polyline, Rectangle, StandaloneSearchBox, StreetViewPanorama, StreetViewService, TrafficLayer, TransitLayer, useGoogleMap, useJsApiLoader, useLoadScript */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Autocomplete", function() { return Autocomplete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BicyclingLayer", function() { return BicyclingLayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Circle", function() { return Circle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Data", function() { return Data; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectionsRenderer", function() { return DirectionsRenderer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectionsService", function() { return DirectionsService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DistanceMatrixService", function() { return DistanceMatrixService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawingManager", function() { return DrawingManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleMap", function() { return GoogleMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroundOverlay", function() { return GroundOverlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeatmapLayer", function() { return HeatmapLayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoBox", function() { return InfoBoxComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoWindow", function() { return InfoWindow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KmlLayer", function() { return KmlLayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadScript", function() { return LoadScript; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadScriptNext", function() { return LoadScriptNext$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapContext", function() { return MapContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Marker", function() { return Marker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkerClusterer", function() { return ClustererComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlayView", function() { return OverlayView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Polygon", function() { return Polygon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Polyline", function() { return Polyline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rectangle", function() { return Rectangle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StandaloneSearchBox", function() { return StandaloneSearchBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StreetViewPanorama", function() { return StreetViewPanorama; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StreetViewService", function() { return StreetViewService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrafficLayer", function() { return TrafficLayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransitLayer", function() { return TransitLayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useGoogleMap", function() { return useGoogleMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useJsApiLoader", function() { return useJsApiLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLoadScript", function() { return useLoadScript; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! invariant */ "./node_modules/invariant/browser.js");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _googlemaps_js_api_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @googlemaps/js-api-loader */ "./node_modules/@googlemaps/js-api-loader/dist/index.esm.js");
/* harmony import */ var _react_google_maps_marker_clusterer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @react-google-maps/marker-clusterer */ "./node_modules/@react-google-maps/marker-clusterer/dist/markerclusterer.esm.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _react_google_maps_infobox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @react-google-maps/infobox */ "./node_modules/@react-google-maps/infobox/dist/infobox.esm.js");







function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var MapContext =
/*#__PURE__*/
Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(null);
function useGoogleMap() {
  !!!react__WEBPACK_IMPORTED_MODULE_0__["useContext"] ?  true ? invariant__WEBPACK_IMPORTED_MODULE_1___default()(false, 'useGoogleMap is React hook and requires React version 16.8+') : undefined : void 0;
  var map = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(MapContext);
  !!!map ?  true ? invariant__WEBPACK_IMPORTED_MODULE_1___default()(false, 'useGoogleMap needs a GoogleMap available up in the tree') : undefined : void 0;
  return map;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
var reduce = function reduce(obj, fn, acc) {
  return Object.keys(obj).reduce(function reducer(newAcc, key) {
    return fn(newAcc, obj[key], key);
  }, acc);
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function forEach(obj, fn) {
  Object.keys(obj).forEach(function iterator(key) {
    return fn(obj[key], key);
  });
}

/* global google */
var applyUpdaterToNextProps = function applyUpdaterToNextProps( // eslint-disable-next-line @typescript-eslint/no-explicit-any
updaterMap, // eslint-disable-next-line @typescript-eslint/no-explicit-any
prevProps, // eslint-disable-next-line @typescript-eslint/no-explicit-any
nextProps, // eslint-disable-next-line @typescript-eslint/no-explicit-any
instance // eslint-disable-next-line @typescript-eslint/no-explicit-any
) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  var map = {}; // eslint-disable-next-line @typescript-eslint/no-explicit-any

  var iter = function iter(fn, key) {
    var nextValue = nextProps[key];

    if (nextValue !== prevProps[key]) {
      map[key] = nextValue;
      fn(instance, nextValue);
    }
  };

  forEach(updaterMap, iter);
  return map;
};
function registerEvents( // eslint-disable-next-line @typescript-eslint/no-explicit-any
props, // eslint-disable-next-line @typescript-eslint/no-explicit-any
instance, eventMap) {
  var registeredList = reduce(eventMap, function reducer(acc, googleEventName, // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onEventName) {
    if (typeof props[onEventName] === 'function') {
      acc.push(google.maps.event.addListener(instance, googleEventName, props[onEventName]));
    }

    return acc;
  }, []);
  return registeredList;
}

function unregisterEvent(registered) {
  google.maps.event.removeListener(registered);
}

function unregisterEvents(events) {
  if (events === void 0) {
    events = [];
  }

  events.forEach(unregisterEvent);
}
function applyUpdatersToPropsAndRegisterEvents(_ref) {
  var updaterMap = _ref.updaterMap,
      eventMap = _ref.eventMap,
      prevProps = _ref.prevProps,
      nextProps = _ref.nextProps,
      instance = _ref.instance;
  var registeredEvents = registerEvents(nextProps, instance, eventMap);
  applyUpdaterToNextProps(updaterMap, prevProps, nextProps, instance);
  return registeredEvents;
}

var eventMap = {
  onDblClick: 'dblclick',
  onDragEnd: 'dragend',
  onDragStart: 'dragstart',
  onMapTypeIdChanged: 'maptypeid_changed',
  onMouseMove: 'mousemove',
  onMouseOut: 'mouseout',
  onMouseOver: 'mouseover',
  onMouseDown: 'mousedown',
  onMouseUp: 'mouseup',
  onRightClick: 'rightclick',
  onTilesLoaded: 'tilesloaded',
  onBoundsChanged: 'bounds_changed',
  onCenterChanged: 'center_changed',
  onClick: 'click',
  onDrag: 'drag',
  onHeadingChanged: 'heading_changed',
  onIdle: 'idle',
  onProjectionChanged: 'projection_changed',
  onResize: 'resize',
  onTiltChanged: 'tilt_changed',
  onZoomChanged: 'zoom_changed'
};
var updaterMap = {
  extraMapTypes: function extraMapTypes(map, extra) {
    extra.forEach(function forEachExtra(it, i) {
      map.mapTypes.set(String(i), it);
    });
  },
  center: function center(map, _center) {
    map.setCenter(_center);
  },
  clickableIcons: function clickableIcons(map, clickable) {
    map.setClickableIcons(clickable);
  },
  heading: function heading(map, _heading) {
    map.setHeading(_heading);
  },
  mapTypeId: function mapTypeId(map, _mapTypeId) {
    map.setMapTypeId(_mapTypeId);
  },
  options: function options(map, _options) {
    map.setOptions(_options);
  },
  streetView: function streetView(map, _streetView) {
    map.setStreetView(_streetView);
  },
  tilt: function tilt(map, _tilt) {
    map.setTilt(_tilt);
  },
  zoom: function zoom(map, _zoom) {
    map.setZoom(_zoom);
  }
};
var GoogleMap =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(GoogleMap, _React$PureComponent);

  function GoogleMap() {
    var _this;

    _this = _React$PureComponent.apply(this, arguments) || this;
    _this.state = {
      map: null
    };
    _this.registeredEvents = [];
    _this.mapRef = null;

    _this.getInstance = function () {
      if (_this.mapRef === null) {
        return null;
      }

      return new google.maps.Map(_this.mapRef, _this.props.options);
    };

    _this.panTo = function (latLng) {
      var map = _this.getInstance();

      if (map) {
        map.panTo(latLng);
      }
    };

    _this.setMapCallback = function () {
      if (_this.state.map !== null) {
        if (_this.props.onLoad) {
          _this.props.onLoad(_this.state.map);
        }
      }
    };

    _this.getRef = function (ref) {
      _this.mapRef = ref;
    };

    return _this;
  }

  var _proto = GoogleMap.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var map = this.getInstance();
    this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
      updaterMap: updaterMap,
      eventMap: eventMap,
      prevProps: {},
      nextProps: this.props,
      instance: map
    });
    this.setState(function setMap() {
      return {
        map: map
      };
    }, this.setMapCallback);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.state.map !== null) {
      unregisterEvents(this.registeredEvents);
      this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
        updaterMap: updaterMap,
        eventMap: eventMap,
        prevProps: prevProps,
        nextProps: this.props,
        instance: this.state.map
      });
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.state.map !== null) {
      if (this.props.onUnmount) {
        this.props.onUnmount(this.state.map);
      }

      unregisterEvents(this.registeredEvents);
    }
  };

  _proto.render = function render() {
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      id: this.props.id,
      ref: this.getRef,
      style: this.props.mapContainerStyle,
      className: this.props.mapContainerClassName
    }, Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MapContext.Provider, {
      value: this.state.map
    }, this.state.map !== null ? this.props.children : Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null)));
  };

  return GoogleMap;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var runtime_1 = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined$1; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined$1) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined$1;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined$1;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined$1;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined$1, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined$1;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined$1;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined$1;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined$1;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined$1;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   module.exports 
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}
});

var isBrowser = typeof document !== 'undefined';

var injectScript = function injectScript(_ref) {
  var url = _ref.url,
      id = _ref.id,
      nonce = _ref.nonce;

  if (!isBrowser) {
    return Promise.reject(new Error('document is undefined'));
  }

  return new Promise(function injectScriptCallback(resolve, reject) {
    var existingScript = document.getElementById(id);
    var windowWithGoogleMap = window;

    if (existingScript) {
      // Same script id/url: keep same script
      var dataStateAttribute = existingScript.getAttribute('data-state');

      if (existingScript.src === url && dataStateAttribute !== 'error') {
        if (dataStateAttribute === 'ready') {
          return resolve(id);
        } else {
          var originalInitMap = windowWithGoogleMap.initMap;
          var originalErrorCallback = existingScript.onerror;

          windowWithGoogleMap.initMap = function initMap() {
            if (originalInitMap) {
              originalInitMap();
            }

            resolve(id);
          };

          existingScript.onerror = function (err) {
            if (originalErrorCallback) {
              originalErrorCallback(err);
            }

            reject(err);
          };

          return;
        }
      } // Same script id, but either
      // 1. requested URL is different
      // 2. script failed to load
      else {
          existingScript.remove();
        }
    }

    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    script.id = id;
    script.async = true;
    script.nonce = nonce;

    script.onerror = function onerror(err) {
      script.setAttribute('data-state', 'error');
      reject(err);
    };

    windowWithGoogleMap.initMap = function onload() {
      script.setAttribute('data-state', 'ready');
      resolve(id);
    };

    document.head.appendChild(script);
  })["catch"](function (err) {
    console.error('injectScript error: ', err);
    throw err;
  });
};

var isRobotoStyle = function isRobotoStyle(element) {
  // roboto font download
  if (element.href && element.href.indexOf('https://fonts.googleapis.com/css?family=Roboto') === 0) {
    return true;
  } // roboto style elements


  if (element.tagName.toLowerCase() === 'style' && // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  element.styleSheet && // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  element.styleSheet.cssText && // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  element.styleSheet.cssText.replace('\r\n', '').indexOf('.gm-style') === 0) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    element.styleSheet.cssText = '';
    return true;
  } // roboto style elements for other browsers


  if (element.tagName.toLowerCase() === 'style' && element.innerHTML && element.innerHTML.replace('\r\n', '').indexOf('.gm-style') === 0) {
    element.innerHTML = '';
    return true;
  } // when google tries to add empty style


  if (element.tagName.toLowerCase() === 'style' && // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  !element.styleSheet && !element.innerHTML) {
    return true;
  }

  return false;
}; // Preventing the Google Maps library from downloading an extra font


var preventGoogleFonts = function preventGoogleFonts() {
  // we override these methods only for one particular head element
  // default methods for other elements are not affected
  var head = document.getElementsByTagName('head')[0];
  var trueInsertBefore = head.insertBefore.bind(head); // TODO: adding return before reflect solves the TS issue
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore

  head.insertBefore = function insertBefore(newElement, referenceElement) {
    if (!isRobotoStyle(newElement)) {
      Reflect.apply(trueInsertBefore, head, [newElement, referenceElement]);
    }
  };

  var trueAppend = head.appendChild.bind(head); // TODO: adding return before reflect solves the TS issue
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore

  head.appendChild = function appendChild(textNode) {
    if (!isRobotoStyle(textNode)) {
      Reflect.apply(trueAppend, head, [textNode]);
    }
  };
};

function makeLoadScriptUrl(_ref) {
  var googleMapsApiKey = _ref.googleMapsApiKey,
      googleMapsClientId = _ref.googleMapsClientId,
      _ref$version = _ref.version,
      version = _ref$version === void 0 ? 'weekly' : _ref$version,
      language = _ref.language,
      region = _ref.region,
      libraries = _ref.libraries,
      channel = _ref.channel,
      mapIds = _ref.mapIds;
  var params = [];
  !(googleMapsApiKey && googleMapsClientId || !(googleMapsApiKey && googleMapsClientId)) ?  true ? invariant__WEBPACK_IMPORTED_MODULE_1___default()(false, 'You need to specify either googleMapsApiKey or googleMapsClientId for @react-google-maps/api load script to work. You cannot use both at the same time.') : undefined : void 0;

  if (googleMapsApiKey) {
    params.push("key=" + googleMapsApiKey);
  } else if (googleMapsClientId) {
    params.push("client=" + googleMapsClientId);
  }

  if (version) {
    params.push("v=" + version);
  }

  if (language) {
    params.push("language=" + language);
  }

  if (region) {
    params.push("region=" + region);
  }

  if (libraries && libraries.length) {
    params.push("libraries=" + libraries.sort().join(','));
  }

  if (channel) {
    params.push("channel=" + channel);
  }

  if (mapIds && mapIds.length) {
    params.push("map_ids=" + mapIds.join(','));
  }

  params.push('callback=initMap');
  return "https://maps.googleapis.com/maps/api/js?" + params.join('&');
}

var cleaningUp = false;
function DefaultLoadingElement() {
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, "Loading...");
}
var defaultLoadScriptProps = {
  id: 'script-loader',
  version: 'weekly'
};

var LoadScript =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(LoadScript, _React$PureComponent);

  function LoadScript() {
    var _this;

    _this = _React$PureComponent.apply(this, arguments) || this;
    _this.check = Object(react__WEBPACK_IMPORTED_MODULE_0__["createRef"])();
    _this.state = {
      loaded: false
    };

    _this.cleanupCallback = function () {
      // @ts-ignore
      delete window.google.maps;

      _this.injectScript();
    };

    _this.isCleaningUp =
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    runtime_1.mark(function _callee() {
      var promiseCallback;
      return runtime_1.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              promiseCallback = function _ref2(resolve) {
                if (!cleaningUp) {
                  resolve();
                } else {
                  if (isBrowser) {
                    var timer = window.setInterval(function interval() {
                      if (!cleaningUp) {
                        window.clearInterval(timer);
                        resolve();
                      }
                    }, 1);
                  }
                }

                return;
              };

              return _context.abrupt("return", new Promise(promiseCallback));

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    _this.cleanup = function () {
      cleaningUp = true;
      var script = document.getElementById(_this.props.id);

      if (script && script.parentNode) {
        script.parentNode.removeChild(script);
      }

      Array.prototype.slice.call(document.getElementsByTagName('script')).filter(function filter(script) {
        return typeof script.src === 'string' && script.src.includes('maps.googleapis');
      }).forEach(function forEach(script) {
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
      });
      Array.prototype.slice.call(document.getElementsByTagName('link')).filter(function filter(link) {
        return link.href === 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Google+Sans';
      }).forEach(function forEach(link) {
        if (link.parentNode) {
          link.parentNode.removeChild(link);
        }
      });
      Array.prototype.slice.call(document.getElementsByTagName('style')).filter(function filter(style) {
        return style.innerText !== undefined && style.innerText.length > 0 && style.innerText.includes('.gm-');
      }).forEach(function forEach(style) {
        if (style.parentNode) {
          style.parentNode.removeChild(style);
        }
      });
    };

    _this.injectScript = function () {
      if (_this.props.preventGoogleFontsLoading) {
        preventGoogleFonts();
      }

      !!!_this.props.id ?  true ? invariant__WEBPACK_IMPORTED_MODULE_1___default()(false, 'LoadScript requires "id" prop to be a string: %s', _this.props.id) : undefined : void 0;
      var injectScriptOptions = {
        id: _this.props.id,
        nonce: _this.props.nonce,
        url: makeLoadScriptUrl(_this.props)
      };
      injectScript(injectScriptOptions).then(function () {
        if (_this.props.onLoad) {
          _this.props.onLoad();
        }

        _this.setState(function setLoaded() {
          return {
            loaded: true
          };
        });

        return;
      })["catch"](function (err) {
        if (_this.props.onError) {
          _this.props.onError(err);
        }

        console.error("\n          There has been an Error with loading Google Maps API script, please check that you provided correct google API key (" + (_this.props.googleMapsApiKey || '-') + ") or Client ID (" + (_this.props.googleMapsClientId || '-') + ") to <LoadScript />\n          Otherwise it is a Network issue.\n        ");
      });
    };

    return _this;
  }

  var _proto = LoadScript.prototype;

  _proto.componentDidMount = function componentDidMount() {
    if (isBrowser) {
      if (window.google && window.google.maps && !cleaningUp) {
        console.error('google api is already presented');
        return;
      }

      this.isCleaningUp().then(this.injectScript)["catch"](function error(err) {
        console.error('Error at injecting script after cleaning up: ', err);
      });
    }
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.props.libraries !== prevProps.libraries) {
      console.warn('Performance warning! LoadScript has been reloaded unintentionally! You should not pass `libraries` prop as new array. Please keep an array of libraries as static class property for Components and PureComponents, or just a const variable outside of component, or somewhere in config files or ENV variables');
    }

    if (isBrowser && prevProps.language !== this.props.language) {
      this.cleanup(); // TODO: refactor to use gDSFP maybe... wait for hooks refactoring.
      // eslint-disable-next-line react/no-did-update-set-state

      this.setState(function setLoaded() {
        return {
          loaded: false
        };
      }, this.cleanupCallback);
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    var _this2 = this;

    if (isBrowser) {
      this.cleanup();

      var timeoutCallback = function timeoutCallback() {
        if (!_this2.check.current) {
          // @ts-ignore
          delete window.google;
          cleaningUp = false;
        }
      };

      window.setTimeout(timeoutCallback, 1);

      if (this.props.onUnmount) {
        this.props.onUnmount();
      }
    }
  };

  _proto.render = function render() {
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      ref: this.check
    }), this.state.loaded ? this.props.children : this.props.loadingElement || Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(DefaultLoadingElement, null));
  };

  return LoadScript;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

LoadScript.defaultProps = defaultLoadScriptProps;

/* eslint-disable filenames/match-regex */
var previouslyLoadedUrl;
function useLoadScript(_ref) {
  var _ref$id = _ref.id,
      id = _ref$id === void 0 ? defaultLoadScriptProps.id : _ref$id,
      _ref$version = _ref.version,
      version = _ref$version === void 0 ? defaultLoadScriptProps.version : _ref$version,
      nonce = _ref.nonce,
      googleMapsApiKey = _ref.googleMapsApiKey,
      googleMapsClientId = _ref.googleMapsClientId,
      language = _ref.language,
      region = _ref.region,
      libraries = _ref.libraries,
      preventGoogleFontsLoading = _ref.preventGoogleFontsLoading,
      channel = _ref.channel,
      mapIds = _ref.mapIds;
  var isMounted = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);

  var _React$useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isLoaded = _React$useState[0],
      setLoaded = _React$useState[1];

  var _React$useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(undefined),
      loadError = _React$useState2[0],
      setLoadError = _React$useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function trackMountedState() {
    isMounted.current = true;
    return function () {
      isMounted.current = false;
    };
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function applyPreventGoogleFonts() {
    if (isBrowser && preventGoogleFontsLoading) {
      preventGoogleFonts();
    }
  }, [preventGoogleFontsLoading]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function validateLoadedState() {
    if (isLoaded) {
      !!!window.google ?  true ? invariant__WEBPACK_IMPORTED_MODULE_1___default()(false, 'useLoadScript was marked as loaded, but window.google is not present. Something went wrong.') : undefined : void 0;
    }
  }, [isLoaded]);
  var url = makeLoadScriptUrl({
    version: version,
    googleMapsApiKey: googleMapsApiKey,
    googleMapsClientId: googleMapsClientId,
    language: language,
    region: region,
    libraries: libraries,
    channel: channel,
    mapIds: mapIds
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function loadScriptAndModifyLoadedState() {
    if (!isBrowser) {
      return;
    }

    function setLoadedIfMounted() {
      if (isMounted.current) {
        setLoaded(true);
        previouslyLoadedUrl = url;
      }
    }

    if (window.google && window.google.maps && previouslyLoadedUrl === url) {
      setLoadedIfMounted();
      return;
    }

    injectScript({
      id: id,
      url: url,
      nonce: nonce
    }).then(setLoadedIfMounted)["catch"](function handleInjectError(err) {
      if (isMounted.current) {
        setLoadError(err);
      }

      console.warn("\n        There has been an Error with loading Google Maps API script, please check that you provided correct google API key (" + (googleMapsApiKey || '-') + ") or Client ID (" + (googleMapsClientId || '-') + ")\n        Otherwise it is a Network issue.\n      ");
      console.error(err);
    });
  }, [id, url, nonce]);
  var prevLibraries = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function checkPerformance() {
    if (prevLibraries.current && libraries !== prevLibraries.current) {
      console.warn('Performance warning! LoadScript has been reloaded unintentionally! You should not pass `libraries` prop as new array. Please keep an array of libraries as static class property for Components and PureComponents, or just a const variable outside of component, or somewhere in config files or ENV variables');
    }

    prevLibraries.current = libraries;
  }, [libraries]);
  return {
    isLoaded: isLoaded,
    loadError: loadError,
    url: url
  };
}

var defaultLoadingElement =
/*#__PURE__*/
Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(DefaultLoadingElement, null);

function LoadScriptNext(_ref) {
  var loadingElement = _ref.loadingElement,
      onLoad = _ref.onLoad,
      onError = _ref.onError,
      onUnmount = _ref.onUnmount,
      children = _ref.children,
      hookOptions = _objectWithoutPropertiesLoose(_ref, ["loadingElement", "onLoad", "onError", "onUnmount", "children"]);

  var _useLoadScript = useLoadScript(hookOptions),
      isLoaded = _useLoadScript.isLoaded,
      loadError = _useLoadScript.loadError;

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function handleOnLoad() {
    if (isLoaded && typeof onLoad === 'function') {
      onLoad();
    }
  }, [isLoaded, onLoad]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function handleOnError() {
    if (loadError && typeof onError === 'function') {
      onError(loadError);
    }
  }, [loadError, onError]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function handleOnUnmount() {
    return function () {
      if (onUnmount) {
        onUnmount();
      }
    };
  }, [onUnmount]);
  return isLoaded ? children : loadingElement || defaultLoadingElement;
}

var LoadScriptNext$1 = /*#__PURE__*/
Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(LoadScriptNext);

/* eslint-disable filenames/match-regex */
function useJsApiLoader(_ref) {
  var _ref$id = _ref.id,
      id = _ref$id === void 0 ? defaultLoadScriptProps.id : _ref$id,
      _ref$version = _ref.version,
      version = _ref$version === void 0 ? defaultLoadScriptProps.version : _ref$version,
      nonce = _ref.nonce,
      googleMapsApiKey = _ref.googleMapsApiKey,
      language = _ref.language,
      region = _ref.region,
      libraries = _ref.libraries,
      preventGoogleFontsLoading = _ref.preventGoogleFontsLoading,
      mapIds = _ref.mapIds;

  var _React$useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isLoaded = _React$useState[0],
      setLoaded = _React$useState[1];

  var _React$useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(undefined),
      loadError = _React$useState2[0],
      setLoadError = _React$useState2[1];

  var loader = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function memo() {
    return new _googlemaps_js_api_loader__WEBPACK_IMPORTED_MODULE_2__["Loader"]({
      id: id,
      apiKey: googleMapsApiKey,
      version: version,
      libraries: libraries,
      language: language,
      region: region,
      mapIds: mapIds,
      nonce: nonce
    });
  }, [id, googleMapsApiKey, version, libraries, language, region, mapIds, nonce]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function effect() {
    if (isLoaded) {
      return;
    } else {
      loader.load().then(function then() {
        setLoaded(true);
      })["catch"](function onrejected(error) {
        setLoadError(error);
      });
    }
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function applyPreventGoogleFonts() {
    if (isBrowser && preventGoogleFontsLoading) {
      preventGoogleFonts();
    }
  }, [preventGoogleFontsLoading]);
  var prevLibraries = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function effect() {
    if (prevLibraries.current && libraries !== prevLibraries.current) {
      console.warn('Performance warning! LoadScript has been reloaded unintentionally! You should not pass `libraries` prop as new array. Please keep an array of libraries as static class property for Components and PureComponents, or just a const variable outside of component, or somewhere in config files or ENV variables');
    }

    prevLibraries.current = libraries;
  }, [libraries]);
  return {
    isLoaded: isLoaded,
    loadError: loadError
  };
}

var eventMap$1 = {};
var updaterMap$1 = {
  options: function options(instance, _options) {
    instance.setOptions(_options);
  }
};
var TrafficLayer =
/*#__PURE__*/
function (_PureComponent) {
  _inheritsLoose(TrafficLayer, _PureComponent);

  function TrafficLayer() {
    var _this;

    _this = _PureComponent.apply(this, arguments) || this;
    _this.state = {
      trafficLayer: null
    };

    _this.setTrafficLayerCallback = function () {
      if (_this.state.trafficLayer !== null) {
        if (_this.props.onLoad) {
          // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
          // @ts-ignore
          _this.props.onLoad(_this.state.trafficLayer);
        }
      }
    };

    _this.registeredEvents = [];
    return _this;
  }

  var _proto = TrafficLayer.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var trafficLayer = new google.maps.TrafficLayer(_extends({}, this.props.options || {}, {
      map: this.context
    }));
    this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
      updaterMap: updaterMap$1,
      eventMap: eventMap$1,
      prevProps: {},
      nextProps: this.props,
      instance: trafficLayer
    });
    this.setState(function setTrafficLayer() {
      return {
        trafficLayer: trafficLayer
      };
    }, this.setTrafficLayerCallback);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.state.trafficLayer !== null) {
      unregisterEvents(this.registeredEvents);
      this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
        updaterMap: updaterMap$1,
        eventMap: eventMap$1,
        prevProps: prevProps,
        nextProps: this.props,
        instance: this.state.trafficLayer
      });
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.state.trafficLayer !== null) {
      if (this.props.onUnmount) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        this.props.onUnmount(this.state.trafficLayer);
      }

      unregisterEvents(this.registeredEvents); // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore

      this.state.trafficLayer.setMap(null);
    }
  };

  _proto.render = function render() {
    return null;
  };

  return TrafficLayer;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);
TrafficLayer.contextType = MapContext;

var BicyclingLayer =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(BicyclingLayer, _React$PureComponent);

  function BicyclingLayer() {
    var _this;

    _this = _React$PureComponent.apply(this, arguments) || this;
    _this.state = {
      bicyclingLayer: null
    };

    _this.setBicyclingLayerCallback = function () {
      if (_this.state.bicyclingLayer !== null) {
        // TODO: how is this possibly null if we're doing a null check
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        _this.state.bicyclingLayer.setMap(_this.context);

        if (_this.props.onLoad) {
          // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
          // @ts-ignore
          _this.props.onLoad(_this.state.bicyclingLayer);
        }
      }
    };

    return _this;
  }

  var _proto = BicyclingLayer.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var bicyclingLayer = new google.maps.BicyclingLayer();
    this.setState(function setBicyclingLayer() {
      return {
        bicyclingLayer: bicyclingLayer
      };
    }, this.setBicyclingLayerCallback);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.state.bicyclingLayer !== null) {
      if (this.props.onUnmount) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        this.props.onUnmount(this.state.bicyclingLayer);
      } // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore


      this.state.bicyclingLayer.setMap(null);
    }
  };

  _proto.render = function render() {
    return null;
  };

  return BicyclingLayer;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);
BicyclingLayer.contextType = MapContext;

var TransitLayer =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(TransitLayer, _React$PureComponent);

  function TransitLayer() {
    var _this;

    _this = _React$PureComponent.apply(this, arguments) || this;
    _this.state = {
      transitLayer: null
    };

    _this.setTransitLayerCallback = function () {
      if (_this.state.transitLayer !== null) {
        // TODO: how is this possibly null if we're doing a null check
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        _this.state.transitLayer.setMap(_this.context);

        if (_this.props.onLoad) {
          // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
          // @ts-ignore
          _this.props.onLoad(_this.state.transitLayer);
        }
      }
    };

    return _this;
  }

  var _proto = TransitLayer.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var transitLayer = new google.maps.TransitLayer();
    this.setState(function setTransitLayer() {
      return {
        transitLayer: transitLayer
      };
    }, this.setTransitLayerCallback);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.state.transitLayer !== null) {
      if (this.props.onUnmount) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        this.props.onUnmount(this.state.transitLayer);
      } // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore


      this.state.transitLayer.setMap(null);
    }
  };

  _proto.render = function render() {
    return null;
  };

  return TransitLayer;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);
TransitLayer.contextType = MapContext;

var eventMap$2 = {
  onCircleComplete: 'circlecomplete',
  onMarkerComplete: 'markercomplete',
  onOverlayComplete: 'overlaycomplete',
  onPolygonComplete: 'polygoncomplete',
  onPolylineComplete: 'polylinecomplete',
  onRectangleComplete: 'rectanglecomplete'
};
var updaterMap$2 = {
  drawingMode: function drawingMode(instance, _drawingMode) {
    instance.setDrawingMode(_drawingMode);
  },
  options: function options(instance, _options) {
    instance.setOptions(_options);
  }
};
var DrawingManager =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(DrawingManager, _React$PureComponent);

  function DrawingManager(props) {
    var _this;

    _this = _React$PureComponent.call(this, props) || this;
    _this.registeredEvents = [];
    _this.state = {
      drawingManager: null
    };

    _this.setDrawingManagerCallback = function () {
      if (_this.state.drawingManager !== null && _this.props.onLoad) {
        _this.props.onLoad(_this.state.drawingManager);
      }
    };

    !!!google.maps.drawing ?  true ? invariant__WEBPACK_IMPORTED_MODULE_1___default()(false, "Did you include prop libraries={['drawing']} in the URL? %s", google.maps.drawing) : undefined : void 0;
    return _this;
  }

  var _proto = DrawingManager.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var drawingManager = new google.maps.drawing.DrawingManager(_extends({}, this.props.options || {}, {
      map: this.context
    }));
    this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
      updaterMap: updaterMap$2,
      eventMap: eventMap$2,
      prevProps: {},
      nextProps: this.props,
      instance: drawingManager
    });
    this.setState(function setDrawingManager() {
      return {
        drawingManager: drawingManager
      };
    }, this.setDrawingManagerCallback);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.state.drawingManager !== null) {
      unregisterEvents(this.registeredEvents);
      this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
        updaterMap: updaterMap$2,
        eventMap: eventMap$2,
        prevProps: prevProps,
        nextProps: this.props,
        instance: this.state.drawingManager
      });
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.state.drawingManager !== null) {
      if (this.props.onUnmount) {
        this.props.onUnmount(this.state.drawingManager);
      }

      unregisterEvents(this.registeredEvents);
      this.state.drawingManager.setMap(null);
    }
  };

  _proto.render = function render() {
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null);
  };

  return DrawingManager;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);
DrawingManager.contextType = MapContext;

var eventMap$3 = {
  onAnimationChanged: 'animation_changed',
  onClick: 'click',
  onClickableChanged: 'clickable_changed',
  onCursorChanged: 'cursor_changed',
  onDblClick: 'dblclick',
  onDrag: 'drag',
  onDragEnd: 'dragend',
  onDraggableChanged: 'draggable_changed',
  onDragStart: 'dragstart',
  onFlatChanged: 'flat_changed',
  onIconChanged: 'icon_changed',
  onMouseDown: 'mousedown',
  onMouseOut: 'mouseout',
  onMouseOver: 'mouseover',
  onMouseUp: 'mouseup',
  onPositionChanged: 'position_changed',
  onRightClick: 'rightclick',
  onShapeChanged: 'shape_changed',
  onTitleChanged: 'title_changed',
  onVisibleChanged: 'visible_changed',
  onZindexChanged: 'zindex_changed'
};
var updaterMap$3 = {
  animation: function animation(instance, _animation) {
    instance.setAnimation(_animation);
  },
  clickable: function clickable(instance, _clickable) {
    instance.setClickable(_clickable);
  },
  cursor: function cursor(instance, _cursor) {
    instance.setCursor(_cursor);
  },
  draggable: function draggable(instance, _draggable) {
    instance.setDraggable(_draggable);
  },
  icon: function icon(instance, _icon) {
    instance.setIcon(_icon);
  },
  label: function label(instance, _label) {
    instance.setLabel(_label);
  },
  map: function map(instance, _map) {
    instance.setMap(_map);
  },
  opacity: function opacity(instance, _opacity) {
    instance.setOpacity(_opacity);
  },
  options: function options(instance, _options) {
    instance.setOptions(_options);
  },
  position: function position(instance, _position) {
    instance.setPosition(_position);
  },
  shape: function shape(instance, _shape) {
    instance.setShape(_shape);
  },
  title: function title(instance, _title) {
    instance.setTitle(_title);
  },
  visible: function visible(instance, _visible) {
    instance.setVisible(_visible);
  },
  zIndex: function zIndex(instance, _zIndex) {
    instance.setZIndex(_zIndex);
  }
};
var Marker =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(Marker, _React$PureComponent);

  function Marker() {
    var _this;

    _this = _React$PureComponent.apply(this, arguments) || this;
    _this.registeredEvents = [];
    _this.state = {
      marker: null
    };

    _this.setMarkerCallback = function () {
      if (_this.state.marker !== null && _this.props.onLoad) {
        _this.props.onLoad(_this.state.marker);
      }
    };

    return _this;
  }

  var _proto = Marker.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var markerOptions = _extends({}, this.props.options || {}, this.props.clusterer ? {} : {
      map: this.context
    }, {
      position: this.props.position
    });

    var marker = new google.maps.Marker(markerOptions);

    if (this.props.clusterer) {
      this.props.clusterer.addMarker( // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      marker, !!this.props.noClustererRedraw);
    } else {
      marker.setMap(this.context);
    }

    this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
      updaterMap: updaterMap$3,
      eventMap: eventMap$3,
      prevProps: {},
      nextProps: this.props,
      instance: marker
    });
    this.setState(function setMarker() {
      return {
        marker: marker
      };
    }, this.setMarkerCallback);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.state.marker !== null) {
      unregisterEvents(this.registeredEvents);
      this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
        updaterMap: updaterMap$3,
        eventMap: eventMap$3,
        prevProps: prevProps,
        nextProps: this.props,
        instance: this.state.marker
      });
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.state.marker !== null) {
      if (this.props.onUnmount) {
        this.props.onUnmount(this.state.marker);
      }

      unregisterEvents(this.registeredEvents);

      if (this.props.clusterer) {
        this.props.clusterer.removeMarker( // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        this.state.marker, !!this.props.noClustererRedraw);
      } else {
        this.state.marker && this.state.marker.setMap(null);
      }
    }
  };

  _proto.render = function render() {
    var _this2 = this;

    var children = null;

    if (this.props.children) {
      children = react__WEBPACK_IMPORTED_MODULE_0__["Children"].map(this.props.children, function (child) {
        if (!Object(react__WEBPACK_IMPORTED_MODULE_0__["isValidElement"])(child)) {
          return child;
        }

        var elementChild = child;
        return Object(react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"])(elementChild, {
          anchor: _this2.state.marker
        });
      });
    }

    return children || null;
  };

  return Marker;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);
Marker.contextType = MapContext;

var eventMap$4 = {
  onClick: 'click',
  onClusteringBegin: 'clusteringbegin',
  onClusteringEnd: 'clusteringend',
  onMouseOut: 'mouseout',
  onMouseOver: 'mouseover'
};
var updaterMap$4 = {
  averageCenter: function averageCenter(instance, _averageCenter) {
    instance.setAverageCenter(_averageCenter);
  },
  batchSizeIE: function batchSizeIE(instance, _batchSizeIE) {
    instance.setBatchSizeIE(_batchSizeIE);
  },
  calculator: function calculator(instance, _calculator) {
    instance.setCalculator(_calculator);
  },
  clusterClass: function clusterClass(instance, _clusterClass) {
    instance.setClusterClass(_clusterClass);
  },
  enableRetinaIcons: function enableRetinaIcons(instance, _enableRetinaIcons) {
    instance.setEnableRetinaIcons(_enableRetinaIcons);
  },
  gridSize: function gridSize(instance, _gridSize) {
    instance.setGridSize(_gridSize);
  },
  ignoreHidden: function ignoreHidden(instance, _ignoreHidden) {
    instance.setIgnoreHidden(_ignoreHidden);
  },
  imageExtension: function imageExtension(instance, _imageExtension) {
    instance.setImageExtension(_imageExtension);
  },
  imagePath: function imagePath(instance, _imagePath) {
    instance.setImagePath(_imagePath);
  },
  imageSizes: function imageSizes(instance, _imageSizes) {
    instance.setImageSizes(_imageSizes);
  },
  maxZoom: function maxZoom(instance, _maxZoom) {
    instance.setMaxZoom(_maxZoom);
  },
  minimumClusterSize: function minimumClusterSize(instance, _minimumClusterSize) {
    instance.setMinimumClusterSize(_minimumClusterSize);
  },
  styles: function styles(instance, _styles) {
    instance.setStyles(_styles);
  },
  title: function title(instance, _title) {
    instance.setTitle(_title);
  },
  zoomOnClick: function zoomOnClick(instance, _zoomOnClick) {
    instance.setZoomOnClick(_zoomOnClick);
  }
};
var ClustererComponent =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(ClustererComponent, _React$PureComponent);

  function ClustererComponent() {
    var _this;

    _this = _React$PureComponent.apply(this, arguments) || this;
    _this.registeredEvents = [];
    _this.state = {
      markerClusterer: null
    };

    _this.setClustererCallback = function () {
      if (_this.state.markerClusterer !== null && _this.props.onLoad) {
        _this.props.onLoad(_this.state.markerClusterer);
      }
    };

    return _this;
  }

  var _proto = ClustererComponent.prototype;

  _proto.componentDidMount = function componentDidMount() {
    if (this.context) {
      var markerClusterer = new _react_google_maps_marker_clusterer__WEBPACK_IMPORTED_MODULE_3__["Clusterer"](this.context, [], this.props.options);
      this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
        updaterMap: updaterMap$4,
        eventMap: eventMap$4,
        prevProps: {},
        nextProps: this.props,
        instance: markerClusterer
      });
      this.setState(function setClusterer() {
        return {
          markerClusterer: markerClusterer
        };
      }, this.setClustererCallback);
    }
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.state.markerClusterer) {
      unregisterEvents(this.registeredEvents);
      this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
        updaterMap: updaterMap$4,
        eventMap: eventMap$4,
        prevProps: prevProps,
        nextProps: this.props,
        instance: this.state.markerClusterer
      });
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.state.markerClusterer !== null) {
      if (this.props.onUnmount) {
        this.props.onUnmount(this.state.markerClusterer);
      }

      unregisterEvents(this.registeredEvents); // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore

      this.state.markerClusterer.setMap(null);
    }
  };

  _proto.render = function render() {
    return this.state.markerClusterer !== null ? this.props.children(this.state.markerClusterer) : null;
  };

  return ClustererComponent;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);
ClustererComponent.contextType = MapContext;

var eventMap$5 = {
  onCloseClick: 'closeclick',
  onContentChanged: 'content_changed',
  onDomReady: 'domready',
  onPositionChanged: 'position_changed',
  onZindexChanged: 'zindex_changed'
};
var updaterMap$5 = {
  options: function options(instance, _options) {
    instance.setOptions(_options);
  },
  position: function position(instance, _position) {
    if (_position instanceof google.maps.LatLng) {
      instance.setPosition(_position);
    } else {
      instance.setPosition(new google.maps.LatLng(_position.lat, _position.lng));
    }
  },
  visible: function visible(instance, _visible) {
    instance.setVisible(_visible);
  },
  zIndex: function zIndex(instance, _zIndex) {
    instance.setZIndex(_zIndex);
  }
};
var InfoBoxComponent =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(InfoBoxComponent, _React$PureComponent);

  function InfoBoxComponent() {
    var _this;

    _this = _React$PureComponent.apply(this, arguments) || this;
    _this.registeredEvents = [];
    _this.containerElement = null;
    _this.state = {
      infoBox: null
    };

    _this.open = function (infoBox, anchor) {
      if (anchor) {
        infoBox.open(_this.context, anchor);
      } else if (infoBox.getPosition()) {
        infoBox.open(_this.context);
      } else {
          true ? invariant__WEBPACK_IMPORTED_MODULE_1___default()(false, 'You must provide either an anchor or a position prop for <InfoBox>.') : undefined ;
      }
    };

    _this.setInfoBoxCallback = function () {
      var _this$props = _this.props,
          anchor = _this$props.anchor,
          onLoad = _this$props.onLoad;
      var infoBox = _this.state.infoBox;

      if (infoBox !== null && _this.containerElement !== null) {
        infoBox.setContent(_this.containerElement);

        _this.open(infoBox, anchor);

        if (onLoad) {
          onLoad(infoBox);
        }
      }
    };

    return _this;
  }

  var _proto = InfoBoxComponent.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var options = this.props.options;

    var _ref = options || {},
        position = _ref.position,
        infoBoxOptions = _objectWithoutPropertiesLoose(_ref, ["position"]);

    var positionLatLng;

    if (position && !(position instanceof google.maps.LatLng)) {
      positionLatLng = new google.maps.LatLng(position.lat, position.lng);
    }

    var infoBox = new _react_google_maps_infobox__WEBPACK_IMPORTED_MODULE_5__["InfoBox"](_extends({}, infoBoxOptions, positionLatLng ? {
      position: positionLatLng
    } : {}));
    this.containerElement = document.createElement('div');
    this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
      updaterMap: updaterMap$5,
      eventMap: eventMap$5,
      prevProps: {},
      nextProps: this.props,
      instance: infoBox
    });
    this.setState({
      infoBox: infoBox
    }, this.setInfoBoxCallback);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var infoBox = this.state.infoBox;

    if (infoBox !== null) {
      unregisterEvents(this.registeredEvents);
      this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
        updaterMap: updaterMap$5,
        eventMap: eventMap$5,
        prevProps: prevProps,
        nextProps: this.props,
        instance: infoBox
      });
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    var onUnmount = this.props.onUnmount;
    var infoBox = this.state.infoBox;

    if (infoBox !== null) {
      if (onUnmount) {
        onUnmount(infoBox);
      }

      unregisterEvents(this.registeredEvents);
      infoBox.close();
    }
  };

  _proto.render = function render() {
    if (!this.containerElement) {
      return null;
    }

    return Object(react_dom__WEBPACK_IMPORTED_MODULE_4__["createPortal"])(react__WEBPACK_IMPORTED_MODULE_0__["Children"].only(this.props.children), this.containerElement);
  };

  return InfoBoxComponent;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);
InfoBoxComponent.contextType = MapContext;

var eventMap$6 = {
  onCloseClick: 'closeclick',
  onContentChanged: 'content_changed',
  onDomReady: 'domready',
  onPositionChanged: 'position_changed',
  onZindexChanged: 'zindex_changed'
};
var updaterMap$6 = {
  options: function options(instance, _options) {
    instance.setOptions(_options);
  },
  position: function position(instance, _position) {
    instance.setPosition(_position);
  },
  zIndex: function zIndex(instance, _zIndex) {
    instance.setZIndex(_zIndex);
  }
};
var InfoWindow =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(InfoWindow, _React$PureComponent);

  function InfoWindow() {
    var _this;

    _this = _React$PureComponent.apply(this, arguments) || this;
    _this.registeredEvents = [];
    _this.containerElement = null;
    _this.state = {
      infoWindow: null
    };

    _this.open = function (infoWindow, anchor) {
      if (anchor) {
        infoWindow.open(_this.context, anchor);
      } else if (infoWindow.getPosition()) {
        infoWindow.open(_this.context);
      } else {
          true ? invariant__WEBPACK_IMPORTED_MODULE_1___default()(false, "You must provide either an anchor (typically render it inside a <Marker>) or a position props for <InfoWindow>.") : undefined ;
      }
    };

    _this.setInfoWindowCallback = function () {
      if (_this.state.infoWindow !== null && _this.containerElement !== null) {
        _this.state.infoWindow.setContent(_this.containerElement);

        _this.open(_this.state.infoWindow, _this.props.anchor);

        if (_this.props.onLoad) {
          _this.props.onLoad(_this.state.infoWindow);
        }
      }
    };

    return _this;
  }

  var _proto = InfoWindow.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var infoWindow = new google.maps.InfoWindow(_extends({}, this.props.options || {}));
    this.containerElement = document.createElement('div');
    this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
      updaterMap: updaterMap$6,
      eventMap: eventMap$6,
      prevProps: {},
      nextProps: this.props,
      instance: infoWindow
    });
    this.setState(function setInfoWindow() {
      return {
        infoWindow: infoWindow
      };
    }, this.setInfoWindowCallback);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.state.infoWindow !== null) {
      unregisterEvents(this.registeredEvents);
      this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
        updaterMap: updaterMap$6,
        eventMap: eventMap$6,
        prevProps: prevProps,
        nextProps: this.props,
        instance: this.state.infoWindow
      });
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.state.infoWindow !== null) {
      unregisterEvents(this.registeredEvents);
      this.state.infoWindow.close();
    }
  };

  _proto.render = function render() {
    return this.containerElement ? Object(react_dom__WEBPACK_IMPORTED_MODULE_4__["createPortal"])(react__WEBPACK_IMPORTED_MODULE_0__["Children"].only(this.props.children), this.containerElement) : Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null);
  };

  return InfoWindow;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);
InfoWindow.contextType = MapContext;

var eventMap$7 = {
  onClick: 'click',
  onDblClick: 'dblclick',
  onDrag: 'drag',
  onDragEnd: 'dragend',
  onDragStart: 'dragstart',
  onMouseDown: 'mousedown',
  onMouseMove: 'mousemove',
  onMouseOut: 'mouseout',
  onMouseOver: 'mouseover',
  onMouseUp: 'mouseup',
  onRightClick: 'rightclick'
};
var updaterMap$7 = {
  draggable: function draggable(instance, _draggable) {
    instance.setDraggable(_draggable);
  },
  editable: function editable(instance, _editable) {
    instance.setEditable(_editable);
  },
  map: function map(instance, _map) {
    instance.setMap(_map);
  },
  options: function options(instance, _options) {
    instance.setOptions(_options);
  },
  path: function path(instance, _path) {
    instance.setPath(_path);
  },
  visible: function visible(instance, _visible) {
    instance.setVisible(_visible);
  }
};
var Polyline =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(Polyline, _React$PureComponent);

  function Polyline() {
    var _this;

    _this = _React$PureComponent.apply(this, arguments) || this;
    _this.registeredEvents = [];
    _this.state = {
      polyline: null
    };

    _this.setPolylineCallback = function () {
      if (_this.state.polyline !== null && _this.props.onLoad) {
        _this.props.onLoad(_this.state.polyline);
      }
    };

    return _this;
  }

  var _proto = Polyline.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var polyline = new google.maps.Polyline(_extends({}, this.props.options || {}, {
      map: this.context
    }));
    this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
      updaterMap: updaterMap$7,
      eventMap: eventMap$7,
      prevProps: {},
      nextProps: this.props,
      instance: polyline
    });
    this.setState(function setPolyline() {
      return {
        polyline: polyline
      };
    }, this.setPolylineCallback);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.state.polyline !== null) {
      unregisterEvents(this.registeredEvents);
      this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
        updaterMap: updaterMap$7,
        eventMap: eventMap$7,
        prevProps: prevProps,
        nextProps: this.props,
        instance: this.state.polyline
      });
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.state.polyline !== null) {
      if (this.props.onUnmount) {
        this.props.onUnmount(this.state.polyline);
      }

      unregisterEvents(this.registeredEvents);
      this.state.polyline.setMap(null);
    }
  };

  _proto.render = function render() {
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null);
  };

  return Polyline;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);
Polyline.contextType = MapContext;

var eventMap$8 = {
  onClick: 'click',
  onDblClick: 'dblclick',
  onDrag: 'drag',
  onDragEnd: 'dragend',
  onDragStart: 'dragstart',
  onMouseDown: 'mousedown',
  onMouseMove: 'mousemove',
  onMouseOut: 'mouseout',
  onMouseOver: 'mouseover',
  onMouseUp: 'mouseup',
  onRightClick: 'rightclick'
};
var updaterMap$8 = {
  draggable: function draggable(instance, _draggable) {
    instance.setDraggable(_draggable);
  },
  editable: function editable(instance, _editable) {
    instance.setEditable(_editable);
  },
  map: function map(instance, _map) {
    instance.setMap(_map);
  },
  options: function options(instance, _options) {
    instance.setOptions(_options);
  },
  path: function path(instance, _path) {
    instance.setPath(_path);
  },
  paths: function paths(instance, _paths) {
    instance.setPaths(_paths);
  },
  visible: function visible(instance, _visible) {
    instance.setVisible(_visible);
  }
};
var Polygon =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(Polygon, _React$PureComponent);

  function Polygon() {
    var _this;

    _this = _React$PureComponent.apply(this, arguments) || this;
    _this.registeredEvents = [];
    _this.state = {
      polygon: null
    };

    _this.setPolygonCallback = function () {
      if (_this.state.polygon !== null && _this.props.onLoad) {
        _this.props.onLoad(_this.state.polygon);
      }
    };

    return _this;
  }

  var _proto = Polygon.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var polygon = new google.maps.Polygon(_extends({}, this.props.options || {}, {
      map: this.context
    }));
    this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
      updaterMap: updaterMap$8,
      eventMap: eventMap$8,
      prevProps: {},
      nextProps: this.props,
      instance: polygon
    });
    this.setState(function setPolygon() {
      return {
        polygon: polygon
      };
    }, this.setPolygonCallback);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.state.polygon !== null) {
      unregisterEvents(this.registeredEvents);
      this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
        updaterMap: updaterMap$8,
        eventMap: eventMap$8,
        prevProps: prevProps,
        nextProps: this.props,
        instance: this.state.polygon
      });
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.state.polygon !== null) {
      if (this.props.onUnmount) {
        this.props.onUnmount(this.state.polygon);
      }

      unregisterEvents(this.registeredEvents);
      this.state.polygon && this.state.polygon.setMap(null);
    }
  };

  _proto.render = function render() {
    return null;
  };

  return Polygon;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);
Polygon.contextType = MapContext;

var eventMap$9 = {
  onBoundsChanged: 'bounds_changed',
  onClick: 'click',
  onDblClick: 'dblclick',
  onDrag: 'drag',
  onDragEnd: 'dragend',
  onDragStart: 'dragstart',
  onMouseDown: 'mousedown',
  onMouseMove: 'mousemove',
  onMouseOut: 'mouseout',
  onMouseOver: 'mouseover',
  onMouseUp: 'mouseup',
  onRightClick: 'rightclick'
};
var updaterMap$9 = {
  bounds: function bounds(instance, _bounds) {
    instance.setBounds(_bounds);
  },
  draggable: function draggable(instance, _draggable) {
    instance.setDraggable(_draggable);
  },
  editable: function editable(instance, _editable) {
    instance.setEditable(_editable);
  },
  map: function map(instance, _map) {
    instance.setMap(_map);
  },
  options: function options(instance, _options) {
    instance.setOptions(_options);
  },
  visible: function visible(instance, _visible) {
    instance.setVisible(_visible);
  }
};
var Rectangle =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(Rectangle, _React$PureComponent);

  function Rectangle() {
    var _this;

    _this = _React$PureComponent.apply(this, arguments) || this;
    _this.registeredEvents = [];
    _this.state = {
      rectangle: null
    };

    _this.setRectangleCallback = function () {
      if (_this.state.rectangle !== null && _this.props.onLoad) {
        _this.props.onLoad(_this.state.rectangle);
      }
    };

    return _this;
  }

  var _proto = Rectangle.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var rectangle = new google.maps.Rectangle(_extends({}, this.props.options || {}, {
      map: this.context
    }));
    this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
      updaterMap: updaterMap$9,
      eventMap: eventMap$9,
      prevProps: {},
      nextProps: this.props,
      instance: rectangle
    });
    this.setState(function setRectangle() {
      return {
        rectangle: rectangle
      };
    }, this.setRectangleCallback);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.state.rectangle !== null) {
      unregisterEvents(this.registeredEvents);
      this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
        updaterMap: updaterMap$9,
        eventMap: eventMap$9,
        prevProps: prevProps,
        nextProps: this.props,
        instance: this.state.rectangle
      });
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.state.rectangle !== null) {
      if (this.props.onUnmount) {
        this.props.onUnmount(this.state.rectangle);
      }

      unregisterEvents(this.registeredEvents);
      this.state.rectangle.setMap(null);
    }
  };

  _proto.render = function render() {
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null);
  };

  return Rectangle;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);
Rectangle.contextType = MapContext;

var eventMap$a = {
  onCenterChanged: 'center_changed',
  onClick: 'click',
  onDblClick: 'dblclick',
  onDrag: 'drag',
  onDragEnd: 'dragend',
  onDragStart: 'dragstart',
  onMouseDown: 'mousedown',
  onMouseMove: 'mousemove',
  onMouseOut: 'mouseout',
  onMouseOver: 'mouseover',
  onMouseUp: 'mouseup',
  onRadiusChanged: 'radius_changed',
  onRightClick: 'rightclick'
};
var updaterMap$a = {
  center: function center(instance, _center) {
    instance.setCenter(_center);
  },
  draggable: function draggable(instance, _draggable) {
    instance.setDraggable(_draggable);
  },
  editable: function editable(instance, _editable) {
    instance.setEditable(_editable);
  },
  map: function map(instance, _map) {
    instance.setMap(_map);
  },
  options: function options(instance, _options) {
    instance.setOptions(_options);
  },
  radius: function radius(instance, _radius) {
    instance.setRadius(_radius);
  },
  visible: function visible(instance, _visible) {
    instance.setVisible(_visible);
  }
};
var Circle =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(Circle, _React$PureComponent);

  function Circle() {
    var _this;

    _this = _React$PureComponent.apply(this, arguments) || this;
    _this.registeredEvents = [];
    _this.state = {
      circle: null
    };

    _this.setCircleCallback = function () {
      if (_this.state.circle !== null && _this.props.onLoad) {
        _this.props.onLoad(_this.state.circle);
      }
    };

    return _this;
  }

  var _proto = Circle.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var circle = new google.maps.Circle(_extends({}, this.props.options || {}, {
      map: this.context
    }));
    this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
      updaterMap: updaterMap$a,
      eventMap: eventMap$a,
      prevProps: {},
      nextProps: this.props,
      instance: circle
    });
    this.setState(function setCircle() {
      return {
        circle: circle
      };
    }, this.setCircleCallback);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.state.circle !== null) {
      unregisterEvents(this.registeredEvents);
      this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
        updaterMap: updaterMap$a,
        eventMap: eventMap$a,
        prevProps: prevProps,
        nextProps: this.props,
        instance: this.state.circle
      });
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.state.circle !== null) {
      if (this.props.onUnmount) {
        this.props.onUnmount(this.state.circle);
      }

      unregisterEvents(this.registeredEvents);
      this.state.circle && this.state.circle.setMap(null);
    }
  };

  _proto.render = function render() {
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null);
  };

  return Circle;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);
Circle.contextType = MapContext;

var eventMap$b = {
  onAddFeature: 'addfeature',
  onClick: 'click',
  onDblClick: 'dblclick',
  onMouseDown: 'mousedown',
  onMouseOut: 'mouseout',
  onMouseOver: 'mouseover',
  onMouseUp: 'mouseup',
  onRemoveFeature: 'removefeature',
  onRemoveProperty: 'removeproperty',
  onRightClick: 'rightclick',
  onSetGeometry: 'setgeometry',
  onSetProperty: 'setproperty'
};
var updaterMap$b = {
  add: function add(instance, features) {
    instance.add(features);
  },
  addgeojson: function addgeojson(instance, geojson, options) {
    instance.addGeoJson(geojson, options);
  },
  contains: function contains(instance, feature) {
    instance.contains(feature);
  },
  foreach: function foreach(instance, callback) {
    instance.forEach(callback);
  },
  loadgeojson: function loadgeojson(instance, url, options, callback) {
    instance.loadGeoJson(url, options, callback);
  },
  overridestyle: function overridestyle(instance, feature, style) {
    instance.overrideStyle(feature, style);
  },
  remove: function remove(instance, feature) {
    instance.remove(feature);
  },
  revertstyle: function revertstyle(instance, feature) {
    instance.revertStyle(feature);
  },
  controlposition: function controlposition(instance, controlPosition) {
    instance.setControlPosition(controlPosition);
  },
  controls: function controls(instance, _controls) {
    instance.setControls(_controls);
  },
  drawingmode: function drawingmode(instance, mode) {
    instance.setDrawingMode(mode);
  },
  map: function map(instance, _map) {
    instance.setMap(_map);
  },
  style: function style(instance, _style) {
    instance.setStyle(_style);
  },
  togeojson: function togeojson(instance, callback) {
    instance.toGeoJson(callback);
  }
};
var Data =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(Data, _React$PureComponent);

  function Data() {
    var _this;

    _this = _React$PureComponent.apply(this, arguments) || this;
    _this.registeredEvents = [];
    _this.state = {
      data: null
    };

    _this.setDataCallback = function () {
      if (_this.state.data !== null && _this.props.onLoad) {
        _this.props.onLoad(_this.state.data);
      }
    };

    return _this;
  }

  var _proto = Data.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var data = new google.maps.Data(_extends({}, this.props.options || {}, {
      map: this.context
    }));
    this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
      updaterMap: updaterMap$b,
      eventMap: eventMap$b,
      prevProps: {},
      nextProps: this.props,
      instance: data
    });
    this.setState(function setData() {
      return {
        data: data
      };
    }, this.setDataCallback);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.state.data !== null) {
      unregisterEvents(this.registeredEvents);
      this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
        updaterMap: updaterMap$b,
        eventMap: eventMap$b,
        prevProps: prevProps,
        nextProps: this.props,
        instance: this.state.data
      });
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.state.data !== null) {
      if (this.props.onUnmount) {
        this.props.onUnmount(this.state.data);
      }

      unregisterEvents(this.registeredEvents);

      if (this.state.data) {
        this.state.data.setMap(null);
      }
    }
  };

  _proto.render = function render() {
    return null;
  };

  return Data;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);
Data.contextType = MapContext;

var eventMap$c = {
  onClick: 'click',
  onDefaultViewportChanged: 'defaultviewport_changed',
  onStatusChanged: 'status_changed'
};
var updaterMap$c = {
  options: function options(instance, _options) {
    instance.setOptions(_options);
  },
  url: function url(instance, _url) {
    instance.setUrl(_url);
  },
  zIndex: function zIndex(instance, _zIndex) {
    instance.setZIndex(_zIndex);
  }
};
var KmlLayer =
/*#__PURE__*/
function (_PureComponent) {
  _inheritsLoose(KmlLayer, _PureComponent);

  function KmlLayer() {
    var _this;

    _this = _PureComponent.apply(this, arguments) || this;
    _this.registeredEvents = [];
    _this.state = {
      kmlLayer: null
    };

    _this.setKmlLayerCallback = function () {
      if (_this.state.kmlLayer !== null && _this.props.onLoad) {
        _this.props.onLoad(_this.state.kmlLayer);
      }
    };

    return _this;
  }

  var _proto = KmlLayer.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var kmlLayer = new google.maps.KmlLayer(_extends({}, this.props.options, {
      map: this.context
    }));
    this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
      updaterMap: updaterMap$c,
      eventMap: eventMap$c,
      prevProps: {},
      nextProps: this.props,
      instance: kmlLayer
    });
    this.setState(function setLmlLayer() {
      return {
        kmlLayer: kmlLayer
      };
    }, this.setKmlLayerCallback);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.state.kmlLayer !== null) {
      unregisterEvents(this.registeredEvents);
      this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
        updaterMap: updaterMap$c,
        eventMap: eventMap$c,
        prevProps: prevProps,
        nextProps: this.props,
        instance: this.state.kmlLayer
      });
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.state.kmlLayer !== null) {
      if (this.props.onUnmount) {
        this.props.onUnmount(this.state.kmlLayer);
      }

      unregisterEvents(this.registeredEvents);
      this.state.kmlLayer.setMap(null);
    }
  };

  _proto.render = function render() {
    return null;
  };

  return KmlLayer;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);
KmlLayer.contextType = MapContext;

/* eslint-disable filenames/match-regex */
function getOffsetOverride(containerElement, getPixelPositionOffset) {
  return typeof getPixelPositionOffset === 'function' ? getPixelPositionOffset(containerElement.offsetWidth, containerElement.offsetHeight) : {};
} // eslint-disable-next-line @typescript-eslint/no-explicit-any

var createLatLng = function createLatLng(inst, Type) {
  return new Type(inst.lat, inst.lng);
}; // eslint-disable-next-line @typescript-eslint/no-explicit-any


var createLatLngBounds = function createLatLngBounds(inst, Type) {
  return new Type(new google.maps.LatLng(inst.ne.lat, inst.ne.lng), new google.maps.LatLng(inst.sw.lat, inst.sw.lng));
}; // eslint-disable-next-line @typescript-eslint/no-explicit-any


var ensureOfType = function ensureOfType(inst, type, factory) {
  return inst instanceof type ? inst : factory(inst, type);
};

var getLayoutStylesByBounds = function getLayoutStylesByBounds(mapCanvasProjection, offset, bounds) {
  var ne = mapCanvasProjection && mapCanvasProjection.fromLatLngToDivPixel(bounds.getNorthEast());
  var sw = mapCanvasProjection && mapCanvasProjection.fromLatLngToDivPixel(bounds.getSouthWest());

  if (ne && sw) {
    return {
      left: sw.x + offset.x + "px",
      top: ne.y + offset.y + "px",
      width: ne.x - sw.x - offset.x + "px",
      height: sw.y - ne.y - offset.y + "px"
    };
  }

  return {
    left: '-9999px',
    top: '-9999px'
  };
};

var getLayoutStylesByPosition = function getLayoutStylesByPosition(mapCanvasProjection, offset, position) {
  var point = mapCanvasProjection && mapCanvasProjection.fromLatLngToDivPixel(position);

  if (point) {
    var x = point.x,
        y = point.y;
    return {
      left: x + offset.x + "px",
      top: y + offset.y + "px"
    };
  }

  return {
    left: '-9999px',
    top: '-9999px'
  };
};

var getLayoutStyles = function getLayoutStyles(mapCanvasProjection, offset, bounds, position) {
  return bounds !== undefined ? getLayoutStylesByBounds(mapCanvasProjection, offset, ensureOfType(bounds, google.maps.LatLngBounds, createLatLngBounds)) : getLayoutStylesByPosition(mapCanvasProjection, offset, ensureOfType(position, google.maps.LatLng, createLatLng));
};
var arePositionsEqual = function arePositionsEqual(currentPosition, previousPosition) {
  return currentPosition.left === previousPosition.left && currentPosition.top === previousPosition.top && currentPosition.width === previousPosition.height && currentPosition.height === previousPosition.height;
};

function convertToLatLngString(latLngLike) {
  if (!latLngLike) {
    return '';
  }

  var latLng = latLngLike instanceof google.maps.LatLng ? latLngLike : new google.maps.LatLng(latLngLike.lat, latLngLike.lng);
  return latLng + '';
}

function convertToLatLngBoundsString(latLngBoundsLike) {
  if (!latLngBoundsLike) {
    return '';
  }

  var latLngBounds = latLngBoundsLike instanceof google.maps.LatLngBounds ? latLngBoundsLike : new google.maps.LatLngBounds(new google.maps.LatLng(latLngBoundsLike.south, latLngBoundsLike.east), new google.maps.LatLng(latLngBoundsLike.north, latLngBoundsLike.west));
  return latLngBounds + '';
}

var OverlayView =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(OverlayView, _React$PureComponent);

  function OverlayView(props) {
    var _this;

    _this = _React$PureComponent.call(this, props) || this;
    _this.state = {
      paneEl: null,
      containerStyle: {
        // set initial position
        position: 'absolute'
      }
    };

    _this.updatePane = function () {
      var mapPaneName = _this.props.mapPaneName; // https://developers.google.com/maps/documentation/javascript/3.exp/reference#MapPanes

      var mapPanes = _this.overlayView.getPanes();

      !!!mapPaneName ?  true ? invariant__WEBPACK_IMPORTED_MODULE_1___default()(false, "OverlayView requires props.mapPaneName but got %s", mapPaneName) : undefined : void 0;

      if (mapPanes) {
        _this.setState({
          paneEl: mapPanes[mapPaneName]
        });
      } else {
        _this.setState({
          paneEl: null
        });
      }
    };

    _this.onAdd = function () {
      _this.updatePane();

      _this.props.onLoad == null ? void 0 : _this.props.onLoad(_this.overlayView);
    };

    _this.onPositionElement = function () {
      var mapCanvasProjection = _this.overlayView.getProjection();

      var offset = _extends({
        x: 0,
        y: 0
      }, _this.containerRef.current ? getOffsetOverride(_this.containerRef.current, _this.props.getPixelPositionOffset) : {});

      var layoutStyles = getLayoutStyles(mapCanvasProjection, offset, _this.props.bounds, _this.props.position);
      var _this$state$container = _this.state.containerStyle,
          left = _this$state$container.left,
          top = _this$state$container.top,
          width = _this$state$container.width,
          height = _this$state$container.height;

      if (!arePositionsEqual(layoutStyles, {
        left: left,
        top: top,
        width: width,
        height: height
      })) {
        _this.setState({
          containerStyle: _extends({}, layoutStyles, {
            position: 'absolute'
          })
        });
      }
    };

    _this.draw = function () {
      _this.onPositionElement();
    };

    _this.onRemove = function () {
      _this.setState(function () {
        return {
          paneEl: null
        };
      }); // this.mapPaneEl = null


      _this.props.onUnmount == null ? void 0 : _this.props.onUnmount(_this.overlayView);
    };

    _this.containerRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["createRef"])(); // You must implement three methods: onAdd(), draw(), and onRemove().

    var overlayView = new google.maps.OverlayView();
    overlayView.onAdd = _this.onAdd;
    overlayView.draw = _this.draw;
    overlayView.onRemove = _this.onRemove;
    _this.overlayView = overlayView;
    return _this;
  }

  var _proto = OverlayView.prototype;

  _proto.componentDidMount = function componentDidMount() {
    // You must call setMap() with a valid Map object to trigger the call to
    // the onAdd() method and setMap(null) in order to trigger the onRemove() method.
    this.overlayView.setMap(this.context);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var prevPositionString = convertToLatLngString(prevProps.position);
    var positionString = convertToLatLngString(this.props.position);
    var prevBoundsString = convertToLatLngBoundsString(prevProps.bounds);
    var boundsString = convertToLatLngBoundsString(this.props.bounds);

    if (prevPositionString !== positionString || prevBoundsString !== boundsString) {
      this.overlayView.draw();
    }

    if (prevProps.mapPaneName !== this.props.mapPaneName) {
      this.updatePane();
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.overlayView.setMap(null);
  };

  _proto.render = function render() {
    var paneEl = this.state.paneEl;

    if (paneEl) {
      return Object(react_dom__WEBPACK_IMPORTED_MODULE_4__["createPortal"])(Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
        ref: this.containerRef,
        style: this.state.containerStyle
      }, react__WEBPACK_IMPORTED_MODULE_0__["Children"].only(this.props.children)), paneEl);
    } else {
      return null;
    }
  };

  return OverlayView;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);
OverlayView.FLOAT_PANE = "floatPane";
OverlayView.MAP_PANE = "mapPane";
OverlayView.MARKER_LAYER = "markerLayer";
OverlayView.OVERLAY_LAYER = "overlayLayer";
OverlayView.OVERLAY_MOUSE_TARGET = "overlayMouseTarget";
OverlayView.contextType = MapContext;

function noop() {}

var eventMap$d = {
  onDblClick: 'dblclick',
  onClick: 'click'
};
var updaterMap$d = {
  opacity: function opacity(instance, _opacity) {
    instance.setOpacity(_opacity);
  }
};
var GroundOverlay =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(GroundOverlay, _React$PureComponent);

  function GroundOverlay() {
    var _this;

    _this = _React$PureComponent.apply(this, arguments) || this;
    _this.registeredEvents = [];
    _this.state = {
      groundOverlay: null
    };

    _this.setGroundOverlayCallback = function () {
      if (_this.state.groundOverlay !== null && _this.props.onLoad) {
        _this.props.onLoad(_this.state.groundOverlay);
      }
    };

    return _this;
  }

  var _proto = GroundOverlay.prototype;

  _proto.componentDidMount = function componentDidMount() {
    !(!!this.props.url || !!this.props.bounds) ?  true ? invariant__WEBPACK_IMPORTED_MODULE_1___default()(false, "For GroundOverlay, url and bounds are passed in to constructor and are immutable after instantiated. This is the behavior of Google Maps JavaScript API v3 ( See https://developers.google.com/maps/documentation/javascript/reference#GroundOverlay) Hence, use the corresponding two props provided by `react-google-maps-api`, url and bounds. In some cases, you'll need the GroundOverlay component to reflect the changes of url and bounds. You can leverage the React's key property to remount the component. Typically, just `key={url}` would serve your need. See https://github.com/tomchentw/react-google-maps/issues/655") : undefined : void 0;
    var groundOverlay = new google.maps.GroundOverlay(this.props.url, this.props.bounds, _extends({}, this.props.options, {
      map: this.context
    }));
    this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
      updaterMap: updaterMap$d,
      eventMap: eventMap$d,
      prevProps: {},
      nextProps: this.props,
      instance: groundOverlay
    });
    this.setState(function setGroundOverlay() {
      return {
        groundOverlay: groundOverlay
      };
    }, this.setGroundOverlayCallback);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.state.groundOverlay !== null) {
      unregisterEvents(this.registeredEvents);
      this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
        updaterMap: updaterMap$d,
        eventMap: eventMap$d,
        prevProps: prevProps,
        nextProps: this.props,
        instance: this.state.groundOverlay
      });
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.state.groundOverlay) {
      if (this.props.onUnmount) {
        this.props.onUnmount(this.state.groundOverlay);
      }

      this.state.groundOverlay.setMap(null);
    }
  };

  _proto.render = function render() {
    return null;
  };

  return GroundOverlay;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);
GroundOverlay.defaultProps = {
  onLoad: noop
};
GroundOverlay.contextType = MapContext;

var eventMap$e = {};
var updaterMap$e = {
  data: function data(instance, _data) {
    instance.setData(_data);
  },
  map: function map(instance, _map) {
    instance.setMap(_map);
  },
  options: function options(instance, _options) {
    instance.setOptions(_options);
  }
};
var HeatmapLayer =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(HeatmapLayer, _React$PureComponent);

  function HeatmapLayer() {
    var _this;

    _this = _React$PureComponent.apply(this, arguments) || this;
    _this.registeredEvents = [];
    _this.state = {
      heatmapLayer: null
    };

    _this.setHeatmapLayerCallback = function () {
      if (_this.state.heatmapLayer !== null && _this.props.onLoad) {
        _this.props.onLoad(_this.state.heatmapLayer);
      }
    };

    return _this;
  }

  var _proto = HeatmapLayer.prototype;

  _proto.componentDidMount = function componentDidMount() {
    !!!google.maps.visualization ?  true ? invariant__WEBPACK_IMPORTED_MODULE_1___default()(false, 'Did you include prop libraries={["visualization"]} to <LoadScript />? %s', google.maps.visualization) : undefined : void 0;
    !!!this.props.data ?  true ? invariant__WEBPACK_IMPORTED_MODULE_1___default()(false, 'data property is required in HeatmapLayer %s', this.props.data) : undefined : void 0;
    var heatmapLayer = new google.maps.visualization.HeatmapLayer(_extends({}, this.props.options || {}, {
      data: this.props.data,
      map: this.context
    }));
    this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
      updaterMap: updaterMap$e,
      eventMap: eventMap$e,
      prevProps: {},
      nextProps: this.props,
      instance: heatmapLayer
    });
    this.setState(function setHeatmapLayer() {
      return {
        heatmapLayer: heatmapLayer
      };
    }, this.setHeatmapLayerCallback);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    unregisterEvents(this.registeredEvents);
    this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
      updaterMap: updaterMap$e,
      eventMap: eventMap$e,
      prevProps: prevProps,
      nextProps: this.props,
      instance: this.state.heatmapLayer
    });
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.state.heatmapLayer !== null) {
      if (this.props.onUnmount) {
        this.props.onUnmount(this.state.heatmapLayer);
      }

      unregisterEvents(this.registeredEvents);
      this.state.heatmapLayer.setMap(null);
    }
  };

  _proto.render = function render() {
    return null;
  };

  return HeatmapLayer;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);
HeatmapLayer.contextType = MapContext;

var eventMap$f = {
  onCloseClick: 'closeclick',
  onPanoChanged: 'pano_changed',
  onPositionChanged: 'position_changed',
  onPovChanged: 'pov_changed',
  onResize: 'resize',
  onStatusChanged: 'status_changed',
  onVisibleChanged: 'visible_changed',
  onZoomChanged: 'zoom_changed'
};
var updaterMap$f = {
  register: function register(instance, provider, options) {
    instance.registerPanoProvider(provider, options);
  },
  links: function links(instance, _links) {
    instance.setLinks(_links);
  },
  motionTracking: function motionTracking(instance, _motionTracking) {
    instance.setMotionTracking(_motionTracking);
  },
  options: function options(instance, _options) {
    instance.setOptions(_options);
  },
  pano: function pano(instance, _pano) {
    instance.setPano(_pano);
  },
  position: function position(instance, _position) {
    instance.setPosition(_position);
  },
  pov: function pov(instance, _pov) {
    instance.setPov(_pov);
  },
  visible: function visible(instance, _visible) {
    instance.setVisible(_visible);
  },
  zoom: function zoom(instance, _zoom) {
    instance.setZoom(_zoom);
  }
};
var StreetViewPanorama =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(StreetViewPanorama, _React$PureComponent);

  function StreetViewPanorama() {
    var _this;

    _this = _React$PureComponent.apply(this, arguments) || this;
    _this.registeredEvents = [];
    _this.state = {
      streetViewPanorama: null
    };

    _this.setStreetViewPanoramaCallback = function () {
      if (_this.state.streetViewPanorama !== null && _this.props.onLoad) {
        _this.props.onLoad(_this.state.streetViewPanorama);
      }
    };

    return _this;
  }

  var _proto = StreetViewPanorama.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var streetViewPanorama = this.context.getStreetView();
    this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
      updaterMap: updaterMap$f,
      eventMap: eventMap$f,
      prevProps: {},
      nextProps: this.props,
      instance: streetViewPanorama
    });
    this.setState(function setStreetViewPanorama() {
      return {
        streetViewPanorama: streetViewPanorama
      };
    }, this.setStreetViewPanoramaCallback);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.state.streetViewPanorama !== null) {
      unregisterEvents(this.registeredEvents);
      this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
        updaterMap: updaterMap$f,
        eventMap: eventMap$f,
        prevProps: prevProps,
        nextProps: this.props,
        instance: this.state.streetViewPanorama
      });
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.state.streetViewPanorama !== null) {
      if (this.props.onUnmount) {
        this.props.onUnmount(this.state.streetViewPanorama);
      }

      unregisterEvents(this.registeredEvents);
      this.state.streetViewPanorama.setVisible(false);
    }
  };

  _proto.render = function render() {
    return null;
  };

  return StreetViewPanorama;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);
StreetViewPanorama.contextType = MapContext;

var StreetViewService =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(StreetViewService, _React$PureComponent);

  function StreetViewService() {
    var _this;

    _this = _React$PureComponent.apply(this, arguments) || this;
    _this.state = {
      streetViewService: null
    };

    _this.setStreetViewServiceCallback = function () {
      if (_this.state.streetViewService !== null && _this.props.onLoad) {
        _this.props.onLoad(_this.state.streetViewService);
      }
    };

    return _this;
  }

  var _proto = StreetViewService.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var streetViewService = new google.maps.StreetViewService();
    this.setState(function setStreetViewService() {
      return {
        streetViewService: streetViewService
      };
    }, this.setStreetViewServiceCallback);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.state.streetViewService !== null) {
      if (this.props.onUnmount) {
        this.props.onUnmount(this.state.streetViewService);
      }
    }
  };

  _proto.render = function render() {
    return null;
  };

  return StreetViewService;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);
StreetViewService.contextType = MapContext;

var DirectionsService =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(DirectionsService, _React$PureComponent);

  function DirectionsService() {
    var _this;

    _this = _React$PureComponent.apply(this, arguments) || this;
    _this.state = {
      directionsService: null
    };

    _this.setDirectionsServiceCallback = function () {
      if (_this.state.directionsService !== null && _this.props.onLoad) {
        _this.props.onLoad(_this.state.directionsService);
      }
    };

    return _this;
  }

  var _proto = DirectionsService.prototype;

  _proto.componentDidMount = function componentDidMount() {
    !!!this.props.options ?  true ? invariant__WEBPACK_IMPORTED_MODULE_1___default()(false, 'DirectionsService expected options object as parameter, but got %s', this.props.options) : undefined : void 0;
    var directionsService = new google.maps.DirectionsService();
    this.setState(function setDirectionsService() {
      return {
        directionsService: directionsService
      };
    }, this.setDirectionsServiceCallback);
  };

  _proto.componentDidUpdate = function componentDidUpdate() {
    if (this.state.directionsService !== null) {
      this.state.directionsService.route(this.props.options, this.props.callback);
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.state.directionsService !== null) {
      if (this.props.onUnmount) {
        this.props.onUnmount(this.state.directionsService);
      }
    }
  };

  _proto.render = function render() {
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null);
  };

  return DirectionsService;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

var eventMap$g = {
  onDirectionsChanged: 'directions_changed'
};
var updaterMap$g = {
  directions: function directions(instance, _directions) {
    instance.setDirections(_directions);
  },
  map: function map(instance, _map) {
    instance.setMap(_map);
  },
  options: function options(instance, _options) {
    instance.setOptions(_options);
  },
  panel: function panel(instance, _panel) {
    instance.setPanel(_panel);
  },
  routeIndex: function routeIndex(instance, _routeIndex) {
    instance.setRouteIndex(_routeIndex);
  }
};
var DirectionsRenderer =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(DirectionsRenderer, _React$PureComponent);

  function DirectionsRenderer() {
    var _this;

    _this = _React$PureComponent.apply(this, arguments) || this;
    _this.registeredEvents = [];
    _this.state = {
      directionsRenderer: null
    };

    _this.setDirectionsRendererCallback = function () {
      if (_this.state.directionsRenderer !== null) {
        _this.state.directionsRenderer.setMap(_this.context);

        if (_this.props.onLoad) {
          _this.props.onLoad(_this.state.directionsRenderer);
        }
      }
    };

    return _this;
  }

  var _proto = DirectionsRenderer.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var directionsRenderer = new google.maps.DirectionsRenderer(this.props.options);
    this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
      updaterMap: updaterMap$g,
      eventMap: eventMap$g,
      prevProps: {},
      nextProps: this.props,
      instance: directionsRenderer
    });
    this.setState(function setDirectionsRenderer() {
      return {
        directionsRenderer: directionsRenderer
      };
    }, this.setDirectionsRendererCallback);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.state.directionsRenderer !== null) {
      unregisterEvents(this.registeredEvents);
      this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
        updaterMap: updaterMap$g,
        eventMap: eventMap$g,
        prevProps: prevProps,
        nextProps: this.props,
        instance: this.state.directionsRenderer
      });
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.state.directionsRenderer !== null) {
      if (this.props.onUnmount) {
        this.props.onUnmount(this.state.directionsRenderer);
      }

      unregisterEvents(this.registeredEvents);

      if (this.state.directionsRenderer) {
        this.state.directionsRenderer.setMap(null);
      }
    }
  };

  _proto.render = function render() {
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null);
  };

  return DirectionsRenderer;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);
DirectionsRenderer.contextType = MapContext;

var DistanceMatrixService =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(DistanceMatrixService, _React$PureComponent);

  function DistanceMatrixService() {
    var _this;

    _this = _React$PureComponent.apply(this, arguments) || this;
    _this.state = {
      distanceMatrixService: null
    };

    _this.setDistanceMatrixServiceCallback = function () {
      if (_this.state.distanceMatrixService !== null && _this.props.onLoad) {
        _this.props.onLoad(_this.state.distanceMatrixService);
      }
    };

    return _this;
  }

  var _proto = DistanceMatrixService.prototype;

  _proto.componentDidMount = function componentDidMount() {
    !!!this.props.options ?  true ? invariant__WEBPACK_IMPORTED_MODULE_1___default()(false, 'DistanceMatrixService expected options object as parameter, but go %s', this.props.options) : undefined : void 0;
    var distanceMatrixService = new google.maps.DistanceMatrixService();
    this.setState(function setDistanceMatrixService() {
      return {
        distanceMatrixService: distanceMatrixService
      };
    }, this.setDistanceMatrixServiceCallback);
  };

  _proto.componentDidUpdate = function componentDidUpdate() {
    if (this.state.distanceMatrixService !== null) {
      this.state.distanceMatrixService.getDistanceMatrix(this.props.options, this.props.callback);
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.state.distanceMatrixService !== null) {
      if (this.props.onUnmount) {
        this.props.onUnmount(this.state.distanceMatrixService);
      }
    }
  };

  _proto.render = function render() {
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null);
  };

  return DistanceMatrixService;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

var eventMap$h = {
  onPlacesChanged: 'places_changed'
};
var updaterMap$h = {
  bounds: function bounds(instance, _bounds) {
    instance.setBounds(_bounds);
  }
};

var StandaloneSearchBox =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(StandaloneSearchBox, _React$PureComponent);

  function StandaloneSearchBox() {
    var _this;

    _this = _React$PureComponent.apply(this, arguments) || this;
    _this.registeredEvents = [];
    _this.containerElement = Object(react__WEBPACK_IMPORTED_MODULE_0__["createRef"])();
    _this.state = {
      searchBox: null
    };

    _this.setSearchBoxCallback = function () {
      if (_this.state.searchBox !== null && _this.props.onLoad) {
        _this.props.onLoad(_this.state.searchBox);
      }
    };

    return _this;
  }

  var _proto = StandaloneSearchBox.prototype;

  _proto.componentDidMount = function componentDidMount() {
    !!!google.maps.places ?  true ? invariant__WEBPACK_IMPORTED_MODULE_1___default()(false, 'You need to provide libraries={["places"]} prop to <LoadScript /> component %s', google.maps.places) : undefined : void 0;

    if (this.containerElement !== null && this.containerElement.current !== null) {
      var input = this.containerElement.current.querySelector('input');

      if (input !== null) {
        var searchBox = new google.maps.places.SearchBox(input, this.props.options);
        this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
          updaterMap: updaterMap$h,
          eventMap: eventMap$h,
          prevProps: {},
          nextProps: this.props,
          instance: searchBox
        });
        this.setState(function setSearchBox() {
          return {
            searchBox: searchBox
          };
        }, this.setSearchBoxCallback);
      }
    }
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.state.searchBox !== null) {
      unregisterEvents(this.registeredEvents);
      this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
        updaterMap: updaterMap$h,
        eventMap: eventMap$h,
        prevProps: prevProps,
        nextProps: this.props,
        instance: this.state.searchBox
      });
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.state.searchBox !== null) {
      if (this.props.onUnmount) {
        this.props.onUnmount(this.state.searchBox);
      }

      unregisterEvents(this.registeredEvents);
    }
  };

  _proto.render = function render() {
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      ref: this.containerElement
    }, react__WEBPACK_IMPORTED_MODULE_0__["Children"].only(this.props.children));
  };

  return StandaloneSearchBox;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

StandaloneSearchBox.contextType = MapContext;

var eventMap$i = {
  onPlaceChanged: 'place_changed'
};
var updaterMap$i = {
  bounds: function bounds(instance, _bounds) {
    instance.setBounds(_bounds);
  },
  restrictions: function restrictions(instance, _restrictions) {
    instance.setComponentRestrictions(_restrictions);
  },
  fields: function fields(instance, _fields) {
    instance.setFields(_fields);
  },
  options: function options(instance, _options) {
    instance.setOptions(_options);
  },
  types: function types(instance, _types) {
    instance.setTypes(_types);
  }
};
var Autocomplete =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(Autocomplete, _React$PureComponent);

  function Autocomplete() {
    var _this;

    _this = _React$PureComponent.apply(this, arguments) || this;
    _this.registeredEvents = [];
    _this.containerElement = Object(react__WEBPACK_IMPORTED_MODULE_0__["createRef"])();
    _this.state = {
      autocomplete: null
    };

    _this.setAutocompleteCallback = function () {
      if (_this.state.autocomplete !== null && _this.props.onLoad) {
        _this.props.onLoad(_this.state.autocomplete);
      }
    };

    return _this;
  }

  var _proto = Autocomplete.prototype;

  _proto.componentDidMount = function componentDidMount() {
    !!!google.maps.places ?  true ? invariant__WEBPACK_IMPORTED_MODULE_1___default()(false, 'You need to provide libraries={["places"]} prop to <LoadScript /> component %s', google.maps.places) : undefined : void 0; // TODO: why current could be equal null?
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore

    var input = this.containerElement.current.querySelector('input');

    if (input) {
      var autocomplete = new google.maps.places.Autocomplete(input, this.props.options);
      this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
        updaterMap: updaterMap$i,
        eventMap: eventMap$i,
        prevProps: {},
        nextProps: this.props,
        instance: autocomplete
      });
      this.setState(function setAutocomplete() {
        return {
          autocomplete: autocomplete
        };
      }, this.setAutocompleteCallback);
    }
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    unregisterEvents(this.registeredEvents);
    this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
      updaterMap: updaterMap$i,
      eventMap: eventMap$i,
      prevProps: prevProps,
      nextProps: this.props,
      instance: this.state.autocomplete
    });
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.state.autocomplete !== null) {
      unregisterEvents(this.registeredEvents);
    }
  };

  _proto.render = function render() {
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      ref: this.containerElement,
      className: this.props.className || ''
    }, react__WEBPACK_IMPORTED_MODULE_0__["Children"].only(this.props.children));
  };

  return Autocomplete;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);
Autocomplete.contextType = MapContext;


//# sourceMappingURL=reactgooglemapsapi.esm.js.map


/***/ }),

/***/ "./node_modules/@react-google-maps/infobox/dist/infobox.esm.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@react-google-maps/infobox/dist/infobox.esm.js ***!
  \*********************************************************************/
/*! exports provided: InfoBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoBox", function() { return InfoBox; });
var InfoBox =
/*#__PURE__*/
function () {
  function InfoBox(options) {
    if (options === void 0) {
      options = {};
    }

    this.extend(InfoBox, google.maps.OverlayView); // Standard options (in common with google.maps.InfoWindow):

    this.content = options.content || '';
    this.disableAutoPan = options.disableAutoPan || false;
    this.maxWidth = options.maxWidth || 0;
    this.pixelOffset = options.pixelOffset || new google.maps.Size(0, 0);
    this.position = options.position || new google.maps.LatLng(0, 0);
    this.zIndex = options.zIndex || null; // Additional options (unique to InfoBox):

    this.boxClass = options.boxClass || 'infoBox';
    this.boxStyle = options.boxStyle || {};
    this.closeBoxMargin = options.closeBoxMargin || '2px';
    this.closeBoxURL = options.closeBoxURL || 'http://www.google.com/intl/en_us/mapfiles/close.gif';

    if (options.closeBoxURL === '') {
      this.closeBoxURL = '';
    }

    this.infoBoxClearance = options.infoBoxClearance || new google.maps.Size(1, 1);

    if (typeof options.visible === 'undefined') {
      if (typeof options.isHidden === 'undefined') {
        options.visible = true;
      } else {
        options.visible = !options.isHidden;
      }
    }

    this.isHidden = !options.visible;
    this.alignBottom = options.alignBottom || false;
    this.pane = options.pane || 'floatPane';
    this.enableEventPropagation = options.enableEventPropagation || false;
    this.div = null;
    this.closeListener = null;
    this.moveListener = null;
    this.mapListener = null;
    this.contextListener = null;
    this.eventListeners = null;
    this.fixedWidthSet = null;
  }

  var _proto = InfoBox.prototype;

  _proto.createInfoBoxDiv = function createInfoBoxDiv() {
    var _this = this;

    // This handler prevents an event in the InfoBox from being passed on to the map.
    function cancelHandler(event) {
      event.cancelBubble = true;

      if (event.stopPropagation) {
        event.stopPropagation();
      }
    } // This handler ignores the current event in the InfoBox and conditionally prevents
    // the event from being passed on to the map. It is used for the contextmenu event.
    // eslint-disable-next-line  @getify/proper-arrows/this


    var ignoreHandler = function ignoreHandler(event) {
      event.returnValue = false;

      if (event.preventDefault) {
        event.preventDefault();
      }

      if (!_this.enableEventPropagation) {
        cancelHandler(event);
      }
    };

    if (!this.div) {
      this.div = document.createElement('div');
      this.setBoxStyle();

      if (typeof this.content === 'string') {
        this.div.innerHTML = this.getCloseBoxImg() + this.content;
      } else {
        this.div.innerHTML = this.getCloseBoxImg();
        this.div.appendChild(this.content);
      } // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore


      var panes = this.getPanes();
      panes[this.pane].appendChild(this.div); // Add the InfoBox div to the DOM

      this.addClickHandler();

      if (this.div.style.width) {
        this.fixedWidthSet = true;
      } else {
        if (this.maxWidth !== 0 && this.div.offsetWidth > this.maxWidth) {
          this.div.style.width = this.maxWidth + 'px';
          this.fixedWidthSet = true;
        } else {
          // The following code is needed to overcome problems with MSIE
          var bw = this.getBoxWidths();
          this.div.style.width = this.div.offsetWidth - bw.left - bw.right + 'px';
          this.fixedWidthSet = false;
        }
      }

      this.panBox(this.disableAutoPan);

      if (!this.enableEventPropagation) {
        this.eventListeners = []; // Cancel event propagation.
        // Note: mousemove not included (to resolve Issue 152)

        var events = ['mousedown', 'mouseover', 'mouseout', 'mouseup', 'click', 'dblclick', 'touchstart', 'touchend', 'touchmove'];

        for (var i = 0; i < events.length; i++) {
          this.eventListeners.push(google.maps.event.addDomListener(this.div, events[i], cancelHandler));
        } // Workaround for Google bug that causes the cursor to change to a pointer
        // when the mouse moves over a marker underneath InfoBox.


        this.eventListeners.push(google.maps.event.addDomListener(this.div, 'mouseover', // eslint-disable-next-line  @getify/proper-arrows/this, @getify/proper-arrows/name
        function () {
          if (_this.div) {
            _this.div.style.cursor = 'default';
          }
        }));
      }

      this.contextListener = google.maps.event.addDomListener(this.div, 'contextmenu', ignoreHandler);
      /**
       * This event is fired when the DIV containing the InfoBox's content is attached to the DOM.
       * @name InfoBox#domready
       * @event
       */

      google.maps.event.trigger(this, 'domready');
    }
  };

  _proto.getCloseBoxImg = function getCloseBoxImg() {
    var img = '';

    if (this.closeBoxURL !== '') {
      img = '<img alt=""';
      img += ' aria-hidden="true"';
      img += " src='" + this.closeBoxURL + "'";
      img += ' align=right'; // Do this because Opera chokes on style='float: right;'

      img += " style='";
      img += ' position: relative;'; // Required by MSIE

      img += ' cursor: pointer;';
      img += ' margin: ' + this.closeBoxMargin + ';';
      img += "'>";
    }

    return img;
  };

  _proto.addClickHandler = function addClickHandler() {
    if (this.div && this.div.firstChild && this.closeBoxURL !== '') {
      var closeBox = this.div.firstChild;
      this.closeListener = google.maps.event.addDomListener(closeBox, 'click', this.getCloseClickHandler());
    } else {
      this.closeListener = null;
    }
  };

  _proto.getCloseClickHandler = function getCloseClickHandler() {
    var _this2 = this;

    // eslint-disable-next-line  @getify/proper-arrows/this, @getify/proper-arrows/name
    return function (event) {
      // 1.0.3 fix: Always prevent propagation of a close box click to the map:
      event.cancelBubble = true;

      if (event.stopPropagation) {
        event.stopPropagation();
      }
      /**
       * This event is fired when the InfoBox's close box is clicked.
       * @name InfoBox#closeclick
       * @event
       */


      google.maps.event.trigger(_this2, 'closeclick');

      _this2.close();
    };
  };

  _proto.panBox = function panBox(disablePan) {
    if (this.div && !disablePan) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      var map = this.getMap(); // Only pan if attached to map, not panorama

      if (map instanceof google.maps.Map) {
        var xOffset = 0;
        var yOffset = 0;
        var bounds = map.getBounds();

        if (bounds && !bounds.contains(this.position)) {
          // Marker not in visible area of map, so set center
          // of map to the marker position first.
          map.setCenter(this.position);
        }

        var mapDiv = map.getDiv(); // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore

        var mapWidth = mapDiv.offsetWidth; // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore

        var mapHeight = mapDiv.offsetHeight;
        var iwOffsetX = this.pixelOffset.width;
        var iwOffsetY = this.pixelOffset.height;
        var iwWidth = this.div.offsetWidth;
        var iwHeight = this.div.offsetHeight;
        var padX = this.infoBoxClearance.width;
        var padY = this.infoBoxClearance.height; // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore

        var projection = this.getProjection();
        var pixPosition = projection.fromLatLngToContainerPixel(this.position);

        if (pixPosition.x < -iwOffsetX + padX) {
          xOffset = pixPosition.x + iwOffsetX - padX;
        } else if (pixPosition.x + iwWidth + iwOffsetX + padX > mapWidth) {
          xOffset = pixPosition.x + iwWidth + iwOffsetX + padX - mapWidth;
        }

        if (this.alignBottom) {
          if (pixPosition.y < -iwOffsetY + padY + iwHeight) {
            yOffset = pixPosition.y + iwOffsetY - padY - iwHeight;
          } else if (pixPosition.y + iwOffsetY + padY > mapHeight) {
            yOffset = pixPosition.y + iwOffsetY + padY - mapHeight;
          }
        } else {
          if (pixPosition.y < -iwOffsetY + padY) {
            yOffset = pixPosition.y + iwOffsetY - padY;
          } else if (pixPosition.y + iwHeight + iwOffsetY + padY > mapHeight) {
            yOffset = pixPosition.y + iwHeight + iwOffsetY + padY - mapHeight;
          }
        }

        if (!(xOffset === 0 && yOffset === 0)) {
          // Move the map to the shifted center.
          map.panBy(xOffset, yOffset);
        }
      }
    }
  };

  _proto.setBoxStyle = function setBoxStyle() {
    if (this.div) {
      // Apply style values from the style sheet defined in the boxClass parameter:
      this.div.className = this.boxClass; // Clear existing inline style values:

      this.div.style.cssText = ''; // Apply style values defined in the boxStyle parameter:

      var boxStyle = this.boxStyle;

      for (var i in boxStyle) {
        if (boxStyle.hasOwnProperty(i)) {
          // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
          // @ts-ignore
          this.div.style[i] = boxStyle[i];
        }
      } // Fix for iOS disappearing InfoBox problem
      // See http://stackoverflow.com/questions/9229535/google-maps-markers-disappear-at-certain-zoom-level-only-on-iphone-ipad


      this.div.style.webkitTransform = 'translateZ(0)'; // Fix up opacity style for benefit of MSIE

      if (typeof this.div.style.opacity !== 'undefined' && this.div.style.opacity !== '') {
        // See http://www.quirksmode.org/css/opacity.html
        var opacity = parseFloat(this.div.style.opacity || ''); // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore

        this.div.style.msFilter = '"progid:DXImageTransform.Microsoft.Alpha(Opacity=' + opacity * 100 + ')"';
        this.div.style.filter = 'alpha(opacity=' + opacity * 100 + ')';
      } // Apply required styles


      this.div.style.position = 'absolute';
      this.div.style.visibility = 'hidden';

      if (this.zIndex !== null) {
        this.div.style.zIndex = this.zIndex + '';
      }

      if (!this.div.style.overflow) {
        this.div.style.overflow = 'auto';
      }
    }
  };

  _proto.getBoxWidths = function getBoxWidths() {
    var bw = {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    };

    if (!this.div) {
      return bw;
    }

    if (document.defaultView && document.defaultView.getComputedStyle) {
      var ownerDocument = this.div.ownerDocument;
      var computedStyle = ownerDocument && ownerDocument.defaultView ? ownerDocument.defaultView.getComputedStyle(this.div, '') : null;

      if (computedStyle) {
        // The computed styles are always in pixel units (good!)
        bw.top = parseInt(computedStyle.borderTopWidth || '', 10) || 0;
        bw.bottom = parseInt(computedStyle.borderBottomWidth || '', 10) || 0;
        bw.left = parseInt(computedStyle.borderLeftWidth || '', 10) || 0;
        bw.right = parseInt(computedStyle.borderRightWidth || '', 10) || 0;
      }
    } else if ( // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    document.documentElement.currentStyle // MSIE
    ) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        var currentStyle = this.div.currentStyle;

        if (currentStyle) {
          // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
          // The current styles may not be in pixel units, but assume they are (bad!)
          bw.top = parseInt(currentStyle.borderTopWidth || '', 10) || 0;
          bw.bottom = parseInt(currentStyle.borderBottomWidth || '', 10) || 0;
          bw.left = parseInt(currentStyle.borderLeftWidth || '', 10) || 0;
          bw.right = parseInt(currentStyle.borderRightWidth || '', 10) || 0;
        }
      }

    return bw;
  };

  _proto.onRemove = function onRemove() {
    if (this.div && this.div.parentNode) {
      this.div.parentNode.removeChild(this.div);
      this.div = null;
    }
  };

  _proto.draw = function draw() {
    this.createInfoBoxDiv();

    if (this.div) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      var projection = this.getProjection();
      var pixPosition = projection.fromLatLngToDivPixel(this.position);
      this.div.style.left = pixPosition.x + this.pixelOffset.width + 'px';

      if (this.alignBottom) {
        this.div.style.bottom = -(pixPosition.y + this.pixelOffset.height) + 'px';
      } else {
        this.div.style.top = pixPosition.y + this.pixelOffset.height + 'px';
      }

      if (this.isHidden) {
        this.div.style.visibility = 'hidden';
      } else {
        this.div.style.visibility = 'visible';
      }
    }
  };

  _proto.setOptions = function setOptions(options) {
    if (options === void 0) {
      options = {};
    }

    if (typeof options.boxClass !== 'undefined') {
      // Must be first
      this.boxClass = options.boxClass;
      this.setBoxStyle();
    }

    if (typeof options.boxStyle !== 'undefined') {
      // Must be second
      this.boxStyle = options.boxStyle;
      this.setBoxStyle();
    }

    if (typeof options.content !== 'undefined') {
      this.setContent(options.content);
    }

    if (typeof options.disableAutoPan !== 'undefined') {
      this.disableAutoPan = options.disableAutoPan;
    }

    if (typeof options.maxWidth !== 'undefined') {
      this.maxWidth = options.maxWidth;
    }

    if (typeof options.pixelOffset !== 'undefined') {
      this.pixelOffset = options.pixelOffset;
    }

    if (typeof options.alignBottom !== 'undefined') {
      this.alignBottom = options.alignBottom;
    }

    if (typeof options.position !== 'undefined') {
      this.setPosition(options.position);
    }

    if (typeof options.zIndex !== 'undefined') {
      this.setZIndex(options.zIndex);
    }

    if (typeof options.closeBoxMargin !== 'undefined') {
      this.closeBoxMargin = options.closeBoxMargin;
    }

    if (typeof options.closeBoxURL !== 'undefined') {
      this.closeBoxURL = options.closeBoxURL;
    }

    if (typeof options.infoBoxClearance !== 'undefined') {
      this.infoBoxClearance = options.infoBoxClearance;
    }

    if (typeof options.isHidden !== 'undefined') {
      this.isHidden = options.isHidden;
    }

    if (typeof options.visible !== 'undefined') {
      this.isHidden = !options.visible;
    }

    if (typeof options.enableEventPropagation !== 'undefined') {
      this.enableEventPropagation = options.enableEventPropagation;
    }

    if (this.div) {
      this.draw();
    }
  };

  _proto.setContent = function setContent(content) {
    this.content = content;

    if (this.div) {
      if (this.closeListener) {
        google.maps.event.removeListener(this.closeListener);
        this.closeListener = null;
      } // Odd code required to make things work with MSIE.


      if (!this.fixedWidthSet) {
        this.div.style.width = '';
      }

      if (typeof content === 'string') {
        this.div.innerHTML = this.getCloseBoxImg() + content;
      } else {
        this.div.innerHTML = this.getCloseBoxImg();
        this.div.appendChild(content);
      } // Perverse code required to make things work with MSIE.
      // (Ensures the close box does, in fact, float to the right.)


      if (!this.fixedWidthSet) {
        this.div.style.width = this.div.offsetWidth + 'px';

        if (typeof content === 'string') {
          this.div.innerHTML = this.getCloseBoxImg() + content;
        } else {
          this.div.innerHTML = this.getCloseBoxImg();
          this.div.appendChild(content);
        }
      }

      this.addClickHandler();
    }
    /**
     * This event is fired when the content of the InfoBox changes.
     * @name InfoBox#content_changed
     * @event
     */


    google.maps.event.trigger(this, 'content_changed');
  };

  _proto.setPosition = function setPosition(latLng) {
    this.position = latLng;

    if (this.div) {
      this.draw();
    }
    /**
     * This event is fired when the position of the InfoBox changes.
     * @name InfoBox#position_changed
     * @event
     */


    google.maps.event.trigger(this, 'position_changed');
  };

  _proto.setVisible = function setVisible(isVisible) {
    this.isHidden = !isVisible;

    if (this.div) {
      this.div.style.visibility = this.isHidden ? 'hidden' : 'visible';
    }
  };

  _proto.setZIndex = function setZIndex(index) {
    this.zIndex = index;

    if (this.div) {
      this.div.style.zIndex = index + '';
    }
    /**
     * This event is fired when the zIndex of the InfoBox changes.
     * @name InfoBox#zindex_changed
     * @event
     */


    google.maps.event.trigger(this, 'zindex_changed');
  };

  _proto.getContent = function getContent() {
    return this.content;
  };

  _proto.getPosition = function getPosition() {
    return this.position;
  };

  _proto.getZIndex = function getZIndex() {
    return this.zIndex;
  };

  _proto.getVisible = function getVisible() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    var map = this.getMap();
    var isVisible;

    if (typeof map === 'undefined' || map === null) {
      isVisible = false;
    } else {
      isVisible = !this.isHidden;
    }

    return isVisible;
  };

  _proto.show = function show() {
    this.isHidden = false;

    if (this.div) {
      this.div.style.visibility = 'visible';
    }
  };

  _proto.hide = function hide() {
    this.isHidden = true;

    if (this.div) {
      this.div.style.visibility = 'hidden';
    }
  };

  _proto.open = function open(map, anchor) {
    var _this3 = this;

    if (anchor) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      this.position = anchor.getPosition();
      this.moveListener = google.maps.event.addListener(anchor, 'position_changed', // eslint-disable-next-line  @getify/proper-arrows/this, @getify/proper-arrows/name
      function () {
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        var position = anchor.getPosition();

        _this3.setPosition(position);
      });
      this.mapListener = google.maps.event.addListener(anchor, 'map_changed', // eslint-disable-next-line  @getify/proper-arrows/this, @getify/proper-arrows/name
      function () {
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        _this3.setMap(anchor.map);
      });
    } // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore


    this.setMap(map);

    if (this.div) {
      this.panBox();
    }
  };

  _proto.close = function close() {
    if (this.closeListener) {
      google.maps.event.removeListener(this.closeListener);
      this.closeListener = null;
    }

    if (this.eventListeners) {
      for (var i = 0; i < this.eventListeners.length; i++) {
        google.maps.event.removeListener(this.eventListeners[i]);
      }

      this.eventListeners = null;
    }

    if (this.moveListener) {
      google.maps.event.removeListener(this.moveListener);
      this.moveListener = null;
    }

    if (this.mapListener) {
      google.maps.event.removeListener(this.mapListener);
      this.mapListener = null;
    }

    if (this.contextListener) {
      google.maps.event.removeListener(this.contextListener);
      this.contextListener = null;
    } // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore


    this.setMap(null);
  };

  _proto.extend = function extend(obj1, obj2) {
    return function applyExtend(object) {
      // eslint-disable-next-line guard-for-in
      for (var property in object.prototype) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        if (!this.prototype.hasOwnProperty(property)) {
          // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
          // @ts-ignore
          this.prototype[property] = object.prototype[property];
        }
      } // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore


      return this;
    }.apply(obj1, [obj2]);
  };

  return InfoBox;
}();


//# sourceMappingURL=infobox.esm.js.map


/***/ }),

/***/ "./node_modules/@react-google-maps/marker-clusterer/dist/markerclusterer.esm.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@react-google-maps/marker-clusterer/dist/markerclusterer.esm.js ***!
  \**************************************************************************************/
/*! exports provided: Cluster, ClusterIcon, Clusterer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cluster", function() { return Cluster; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClusterIcon", function() { return ClusterIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Clusterer", function() { return Clusterer; });
var ClusterIcon =
/*#__PURE__*/
function () {
  function ClusterIcon(cluster, styles) {
    cluster.getClusterer().extend(ClusterIcon, google.maps.OverlayView);
    this.cluster = cluster;
    this.className = this.cluster.getClusterer().getClusterClass();
    this.styles = styles;
    this.center = undefined;
    this.div = null;
    this.sums = null;
    this.visible = false;
    this.boundsChangedListener = null;
    this.url = '';
    this.height = 0;
    this.width = 0;
    this.anchorText = [0, 0];
    this.anchorIcon = [0, 0];
    this.textColor = 'black';
    this.textSize = 11;
    this.textDecoration = 'none';
    this.fontWeight = 'bold';
    this.fontStyle = 'normal';
    this.fontFamily = 'Arial,sans-serif';
    this.backgroundPosition = '0 0'; // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore

    this.setMap(cluster.getMap()); // Note: this causes onAdd to be called
  }

  var _proto = ClusterIcon.prototype;

  _proto.onAdd = function onAdd() {
    var _this = this;

    var cMouseDownInCluster;
    var cDraggingMapByCluster;
    this.div = document.createElement('div');
    this.div.className = this.className;

    if (this.visible) {
      this.show();
    } // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore


    this.getPanes().overlayMouseTarget.appendChild(this.div); // Fix for Issue 157

    this.boundsChangedListener = google.maps.event.addListener( // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    this.getMap(), 'boundschanged', function boundsChanged() {
      cDraggingMapByCluster = cMouseDownInCluster;
    });
    google.maps.event.addDomListener(this.div, 'mousedown', function onMouseDown() {
      cMouseDownInCluster = true;
      cDraggingMapByCluster = false;
    }); // eslint-disable-next-line  @getify/proper-arrows/this, @getify/proper-arrows/name

    google.maps.event.addDomListener(this.div, 'click', // eslint-disable-next-line  @getify/proper-arrows/this, @getify/proper-arrows/name
    function (event) {
      cMouseDownInCluster = false;

      if (!cDraggingMapByCluster) {
        var markerClusterer = _this.cluster.getClusterer();
        /**
         * This event is fired when a cluster marker is clicked.
         * @name MarkerClusterer#click
         * @param {Cluster} c The cluster that was clicked.
         * @event
         */


        google.maps.event.trigger(markerClusterer, 'click', _this.cluster);
        google.maps.event.trigger(markerClusterer, 'clusterclick', _this.cluster); // deprecated name
        // The default click handler follows. Disable it by setting
        // the zoomOnClick property to false.

        if (markerClusterer.getZoomOnClick()) {
          // Zoom into the cluster.
          var maxZoom = markerClusterer.getMaxZoom();

          var bounds = _this.cluster.getBounds(); // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
          // @ts-ignore


          markerClusterer.getMap().fitBounds(bounds); // There is a fix for Issue 170 here:

          setTimeout(function timeout() {
            // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
            // @ts-ignore
            markerClusterer.getMap().fitBounds(bounds); // Don't zoom beyond the max zoom level
            // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
            // @ts-ignore

            if (maxZoom !== null && markerClusterer.getMap().getZoom() > maxZoom) {
              // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
              // @ts-ignore
              markerClusterer.getMap().setZoom(maxZoom + 1);
            }
          }, 100);
        } // Prevent event propagation to the map:


        event.cancelBubble = true;

        if (event.stopPropagation) {
          event.stopPropagation();
        }
      }
    });
    google.maps.event.addDomListener(this.div, 'mouseover', // eslint-disable-next-line  @getify/proper-arrows/this, @getify/proper-arrows/name
    function () {
      /**
       * This event is fired when the mouse moves over a cluster marker.
       * @name MarkerClusterer#mouseover
       * @param {Cluster} c The cluster that the mouse moved over.
       * @event
       */
      google.maps.event.trigger(_this.cluster.getClusterer(), 'mouseover', _this.cluster);
    }); // eslint-disable-next-line  @getify/proper-arrows/this, @getify/proper-arrows/name

    google.maps.event.addDomListener(this.div, 'mouseout', // eslint-disable-next-line  @getify/proper-arrows/this, @getify/proper-arrows/name
    function () {
      /**
       * This event is fired when the mouse moves out of a cluster marker.
       * @name MarkerClusterer#mouseout
       * @param {Cluster} c The cluster that the mouse moved out of.
       * @event
       */
      google.maps.event.trigger(_this.cluster.getClusterer(), 'mouseout', _this.cluster);
    });
  };

  _proto.onRemove = function onRemove() {
    if (this.div && this.div.parentNode) {
      this.hide();

      if (this.boundsChangedListener !== null) {
        google.maps.event.removeListener(this.boundsChangedListener);
      }

      google.maps.event.clearInstanceListeners(this.div);
      this.div.parentNode.removeChild(this.div);
      this.div = null;
    }
  };

  _proto.draw = function draw() {
    if (this.visible && this.div !== null && this.center) {
      var _this$getPosFromLatLn = this.getPosFromLatLng(this.center),
          x = _this$getPosFromLatLn.x,
          y = _this$getPosFromLatLn.y;

      this.div.style.top = y + 'px';
      this.div.style.left = x + 'px';
    }
  };

  _proto.hide = function hide() {
    if (this.div) {
      this.div.style.display = 'none';
    }

    this.visible = false;
  };

  _proto.show = function show() {
    if (this.div && this.center) {
      var img = '',
          divTitle = ''; // NOTE: values must be specified in px units

      var bp = this.backgroundPosition.split(' ');
      var spriteH = parseInt(bp[0].replace(/^\s+|\s+$/g, ''), 10);
      var spriteV = parseInt(bp[1].replace(/^\s+|\s+$/g, ''), 10);
      var pos = this.getPosFromLatLng(this.center);

      if (this.sums === null || typeof this.sums.title === 'undefined' || this.sums.title === '') {
        divTitle = this.cluster.getClusterer().getTitle();
      } else {
        divTitle = this.sums.title;
      }

      this.div.style.cssText = this.createCss(pos);
      img = "<img alt='" + divTitle + "' src='" + this.url + "' style='position: absolute; top: " + spriteV + 'px; left: ' + spriteH + 'px; '; // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      //@ts-ignore

      if (!this.cluster.getClusterer().enableRetinaIcons) {
        img += 'clip: rect(' + -1 * spriteV + 'px, ' + (-1 * spriteH + this.width) + 'px, ' + (-1 * spriteV + this.height) + 'px, ' + -1 * spriteH + 'px);';
      }

      img += "'>";
      this.div.innerHTML = img + "<div style='" + 'position: absolute;' + 'top: ' + this.anchorText[0] + 'px;' + 'left: ' + this.anchorText[1] + 'px;' + 'color: ' + this.textColor + ';' + 'font-size: ' + this.textSize + 'px;' + 'font-family: ' + this.fontFamily + ';' + 'font-weight: ' + this.fontWeight + ';' + 'font-style: ' + this.fontStyle + ';' + 'text-decoration: ' + this.textDecoration + ';' + 'text-align: center;' + 'width: ' + this.width + 'px;' + 'line-height:' + this.height + 'px;' + "'>" + // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      this.sums.text + '</div>';
      this.div.title = divTitle;
      this.div.style.display = '';
    }

    this.visible = true;
  };

  _proto.useStyle = function useStyle(sums) {
    this.sums = sums;
    var style = this.styles[Math.min(this.styles.length - 1, Math.max(0, sums.index - 1))];
    this.url = style.url;
    this.height = style.height;
    this.width = style.width;
    this.anchorText = style.anchorText || [0, 0];
    this.anchorIcon = style.anchorIcon || [this.height / 2, this.width / 2];
    this.textColor = style.textColor || 'black';
    this.textSize = style.textSize || 11;
    this.textDecoration = style.textDecoration || 'none';
    this.fontWeight = style.fontWeight || 'bold';
    this.fontStyle = style.fontStyle || 'normal';
    this.fontFamily = style.fontFamily || 'Arial,sans-serif';
    this.backgroundPosition = style.backgroundPosition || '0 0';
  };

  _proto.setCenter = function setCenter(center) {
    this.center = center;
  };

  _proto.createCss = function createCss(pos) {
    var style = [];
    style.push('cursor: pointer;');
    style.push('position: absolute; top: ' + pos.y + 'px; left: ' + pos.x + 'px;');
    style.push('width: ' + this.width + 'px; height: ' + this.height + 'px;');
    return style.join('');
  };

  _proto.getPosFromLatLng = function getPosFromLatLng(latlng) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    var pos = this.getProjection().fromLatLngToDivPixel(latlng);
    pos.x -= this.anchorIcon[1];
    pos.y -= this.anchorIcon[0]; // pos.x = pos.x
    // pos.y = pos.y

    return pos;
  };

  return ClusterIcon;
}();

var Cluster =
/*#__PURE__*/
function () {
  function Cluster(markerClusterer) {
    this.markerClusterer = markerClusterer; // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore

    this.map = this.markerClusterer.getMap();
    this.gridSize = this.markerClusterer.getGridSize();
    this.minClusterSize = this.markerClusterer.getMinimumClusterSize();
    this.averageCenter = this.markerClusterer.getAverageCenter();
    this.markers = [];
    this.center = undefined;
    this.bounds = null;
    this.clusterIcon = new ClusterIcon(this, this.markerClusterer.getStyles());
  }

  var _proto = Cluster.prototype;

  _proto.getSize = function getSize() {
    return this.markers.length;
  };

  _proto.getMarkers = function getMarkers() {
    return this.markers;
  };

  _proto.getCenter = function getCenter() {
    return this.center;
  };

  _proto.getMap = function getMap() {
    return this.map;
  };

  _proto.getClusterer = function getClusterer() {
    return this.markerClusterer;
  };

  _proto.getBounds = function getBounds() {
    var bounds = new google.maps.LatLngBounds(this.center, this.center);
    var markers = this.getMarkers();

    for (var i = 0; i < markers.length; i++) {
      var position = markers[i].getPosition();

      if (position) {
        bounds.extend(position);
      }
    }

    return bounds;
  };

  _proto.remove = function remove() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    this.clusterIcon.setMap(null);
    this.markers = [];
    delete this.markers;
  };

  _proto.addMarker = function addMarker(marker) {
    if (this.isMarkerAlreadyAdded(marker)) {
      return false;
    }

    if (!this.center) {
      var position = marker.getPosition();

      if (position) {
        this.center = position;
        this.calculateBounds();
      }
    } else {
      if (this.averageCenter) {
        var _position = marker.getPosition();

        if (_position) {
          var length = this.markers.length + 1;
          this.center = new google.maps.LatLng((this.center.lat() * (length - 1) + _position.lat()) / length, (this.center.lng() * (length - 1) + _position.lng()) / length);
          this.calculateBounds();
        }
      }
    }

    marker.isAdded = true;
    this.markers.push(marker);
    var mCount = this.markers.length;
    var maxZoom = this.markerClusterer.getMaxZoom();

    if (maxZoom !== null && this.map.getZoom() > maxZoom) {
      // Zoomed in past max zoom, so show the marker.
      if (marker.getMap() !== this.map) {
        marker.setMap(this.map);
      }
    } else if (mCount < this.minClusterSize) {
      // Min cluster size not reached so show the marker.
      if (marker.getMap() !== this.map) {
        marker.setMap(this.map);
      }
    } else if (mCount === this.minClusterSize) {
      // Hide the markers that were showing.
      for (var i = 0; i < mCount; i++) {
        this.markers[i].setMap(null);
      }
    } else {
      marker.setMap(null);
    }

    return true;
  };

  _proto.isMarkerInClusterBounds = function isMarkerInClusterBounds(marker) {
    if (this.bounds !== null) {
      var position = marker.getPosition();

      if (position) {
        return this.bounds.contains(position);
      }
    }

    return false;
  };

  _proto.calculateBounds = function calculateBounds() {
    this.bounds = this.markerClusterer.getExtendedBounds(new google.maps.LatLngBounds(this.center, this.center));
  };

  _proto.updateIcon = function updateIcon() {
    var mCount = this.markers.length;
    var maxZoom = this.markerClusterer.getMaxZoom();

    if (maxZoom !== null && this.map.getZoom() > maxZoom) {
      this.clusterIcon.hide();
      return;
    }

    if (mCount < this.minClusterSize) {
      // Min cluster size not yet reached.
      this.clusterIcon.hide();
      return;
    }

    if (this.center) {
      this.clusterIcon.setCenter(this.center);
    }

    this.clusterIcon.useStyle(this.markerClusterer.getCalculator()(this.markers, this.markerClusterer.getStyles().length));
    this.clusterIcon.show();
  };

  _proto.isMarkerAlreadyAdded = function isMarkerAlreadyAdded(marker) {
    if (this.markers.includes) {
      return this.markers.includes(marker);
    } else {
      for (var i = 0; i < this.markers.length; i++) {
        if (marker === this.markers[i]) {
          return true;
        }
      }
    }

    return false;
  };

  return Cluster;
}();

/* global google */

var CALCULATOR = function CALCULATOR(markers, numStyles) {
  var index = 0;
  var title = '';
  var count = markers.length.toString();
  var dv = count;

  while (dv !== 0) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    dv = parseInt(dv, 10) / 10;
    index++;
  }

  index = Math.min(index, numStyles);
  return {
    text: count,
    index: index,
    title: title
  };
};

var BATCH_SIZE = 2000;
var BATCH_SIZE_IE = 500;
var IMAGE_PATH = 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m';
var IMAGE_EXTENSION = 'png';
var IMAGE_SIZES = [53, 56, 66, 78, 90];
var CLUSTERER_CLASS = 'cluster';
var Clusterer =
/*#__PURE__*/
function () {
  function Clusterer(map, optMarkers, optOptions) {
    if (optMarkers === void 0) {
      optMarkers = [];
    }

    if (optOptions === void 0) {
      optOptions = {};
    }

    this.extend(Clusterer, google.maps.OverlayView);
    this.markers = [];
    this.clusters = [];
    this.listeners = [];
    this.activeMap = null;
    this.ready = false;
    this.gridSize = optOptions.gridSize || 60;
    this.minClusterSize = optOptions.minimumClusterSize || 2;
    this.maxZoom = optOptions.maxZoom || null;
    this.styles = optOptions.styles || [];
    this.title = optOptions.title || '';
    this.zoomOnClick = true;

    if (optOptions.zoomOnClick !== undefined) {
      this.zoomOnClick = optOptions.zoomOnClick;
    }

    this.averageCenter = false;

    if (optOptions.averageCenter !== undefined) {
      this.averageCenter = optOptions.averageCenter;
    }

    this.ignoreHidden = false;

    if (optOptions.ignoreHidden !== undefined) {
      this.ignoreHidden = optOptions.ignoreHidden;
    }

    this.enableRetinaIcons = false;

    if (optOptions.enableRetinaIcons !== undefined) {
      this.enableRetinaIcons = optOptions.enableRetinaIcons;
    }

    this.imagePath = optOptions.imagePath || IMAGE_PATH;
    this.imageExtension = optOptions.imageExtension || IMAGE_EXTENSION;
    this.imageSizes = optOptions.imageSizes || IMAGE_SIZES;
    this.calculator = optOptions.calculator || CALCULATOR;
    this.batchSize = optOptions.batchSize || BATCH_SIZE;
    this.batchSizeIE = optOptions.batchSizeIE || BATCH_SIZE_IE;
    this.clusterClass = optOptions.clusterClass || CLUSTERER_CLASS;

    if (navigator.userAgent.toLowerCase().indexOf('msie') !== -1) {
      // Try to avoid IE timeout when processing a huge number of markers:
      this.batchSize = this.batchSizeIE;
    }

    this.timerRefStatic = null;
    this.setupStyles();
    this.addMarkers(optMarkers, true); // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore

    this.setMap(map); // Note: this causes onAdd to be called
  }

  var _proto = Clusterer.prototype;

  _proto.onAdd = function onAdd() {
    var _this = this;

    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    this.activeMap = this.getMap();
    this.ready = true;
    this.repaint(); // Add the map event listeners

    this.listeners = [google.maps.event.addListener( // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    this.getMap(), 'zoom_changed', // eslint-disable-next-line  @getify/proper-arrows/this, @getify/proper-arrows/name
    function () {
      _this.resetViewport(false); // Workaround for this Google bug: when map is at level 0 and "-" of
      // zoom slider is clicked, a "zoom_changed" event is fired even though
      // the map doesn't zoom out any further. In this situation, no "idle"
      // event is triggered so the cluster markers that have been removed
      // do not get redrawn. Same goes for a zoom in at maxZoom.


      if ( // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      _this.getMap().getZoom() === (_this.get('minZoom') || 0) || // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      _this.getMap().getZoom() === _this.get('maxZoom')) {
        google.maps.event.trigger(_this, 'idle');
      }
    }), google.maps.event.addListener( // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    this.getMap(), 'idle', // eslint-disable-next-line  @getify/proper-arrows/this, @getify/proper-arrows/name
    function () {
      _this.redraw();
    })];
  } // eslint-disable-next-line @getify/proper-arrows/this
  ;

  _proto.onRemove = function onRemove() {
    // Put all the managed markers back on the map:
    for (var i = 0; i < this.markers.length; i++) {
      if (this.markers[i].getMap() !== this.activeMap) {
        this.markers[i].setMap(this.activeMap);
      }
    } // Remove all clusters:


    for (var _i = 0; _i < this.clusters.length; _i++) {
      this.clusters[_i].remove();
    }

    this.clusters = []; // Remove map event listeners:

    for (var _i2 = 0; _i2 < this.listeners.length; _i2++) {
      google.maps.event.removeListener(this.listeners[_i2]);
    }

    this.listeners = [];
    this.activeMap = null;
    this.ready = false;
  } // eslint-disable-next-line @typescript-eslint/no-empty-function
  ;

  _proto.draw = function draw() {};

  _proto.setupStyles = function setupStyles() {
    if (this.styles.length > 0) {
      return;
    }

    for (var i = 0; i < this.imageSizes.length; i++) {
      this.styles.push({
        url: this.imagePath + (i + 1) + '.' + this.imageExtension,
        height: this.imageSizes[i],
        width: this.imageSizes[i]
      });
    }
  };

  _proto.fitMapToMarkers = function fitMapToMarkers() {
    var markers = this.getMarkers();
    var bounds = new google.maps.LatLngBounds();

    for (var i = 0; i < markers.length; i++) {
      var position = markers[i].getPosition();

      if (position) {
        bounds.extend(position);
      }
    } // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore


    this.getMap().fitBounds(bounds);
  };

  _proto.getGridSize = function getGridSize() {
    return this.gridSize;
  };

  _proto.setGridSize = function setGridSize(gridSize) {
    this.gridSize = gridSize;
  };

  _proto.getMinimumClusterSize = function getMinimumClusterSize() {
    return this.minClusterSize;
  };

  _proto.setMinimumClusterSize = function setMinimumClusterSize(minimumClusterSize) {
    this.minClusterSize = minimumClusterSize;
  };

  _proto.getMaxZoom = function getMaxZoom() {
    return this.maxZoom;
  };

  _proto.setMaxZoom = function setMaxZoom(maxZoom) {
    this.maxZoom = maxZoom;
  };

  _proto.getStyles = function getStyles() {
    return this.styles;
  };

  _proto.setStyles = function setStyles(styles) {
    this.styles = styles;
  };

  _proto.getTitle = function getTitle() {
    return this.title;
  };

  _proto.setTitle = function setTitle(title) {
    this.title = title;
  };

  _proto.getZoomOnClick = function getZoomOnClick() {
    return this.zoomOnClick;
  };

  _proto.setZoomOnClick = function setZoomOnClick(zoomOnClick) {
    this.zoomOnClick = zoomOnClick;
  };

  _proto.getAverageCenter = function getAverageCenter() {
    return this.averageCenter;
  };

  _proto.setAverageCenter = function setAverageCenter(averageCenter) {
    this.averageCenter = averageCenter;
  };

  _proto.getIgnoreHidden = function getIgnoreHidden() {
    return this.ignoreHidden;
  };

  _proto.setIgnoreHidden = function setIgnoreHidden(ignoreHidden) {
    this.ignoreHidden = ignoreHidden;
  };

  _proto.getEnableRetinaIcons = function getEnableRetinaIcons() {
    return this.enableRetinaIcons;
  };

  _proto.setEnableRetinaIcons = function setEnableRetinaIcons(enableRetinaIcons) {
    this.enableRetinaIcons = enableRetinaIcons;
  };

  _proto.getImageExtension = function getImageExtension() {
    return this.imageExtension;
  };

  _proto.setImageExtension = function setImageExtension(imageExtension) {
    this.imageExtension = imageExtension;
  };

  _proto.getImagePath = function getImagePath() {
    return this.imagePath;
  };

  _proto.setImagePath = function setImagePath(imagePath) {
    this.imagePath = imagePath;
  };

  _proto.getImageSizes = function getImageSizes() {
    return this.imageSizes;
  };

  _proto.setImageSizes = function setImageSizes(imageSizes) {
    this.imageSizes = imageSizes;
  };

  _proto.getCalculator = function getCalculator() {
    return this.calculator;
  };

  _proto.setCalculator = function setCalculator(calculator) {
    this.calculator = calculator;
  };

  _proto.getBatchSizeIE = function getBatchSizeIE() {
    return this.batchSizeIE;
  };

  _proto.setBatchSizeIE = function setBatchSizeIE(batchSizeIE) {
    this.batchSizeIE = batchSizeIE;
  };

  _proto.getClusterClass = function getClusterClass() {
    return this.clusterClass;
  };

  _proto.setClusterClass = function setClusterClass(clusterClass) {
    this.clusterClass = clusterClass;
  };

  _proto.getMarkers = function getMarkers() {
    return this.markers;
  };

  _proto.getTotalMarkers = function getTotalMarkers() {
    return this.markers.length;
  };

  _proto.getClusters = function getClusters() {
    return this.clusters;
  };

  _proto.getTotalClusters = function getTotalClusters() {
    return this.clusters.length;
  };

  _proto.addMarker = function addMarker(marker, optNoDraw) {
    this.pushMarkerTo(marker);

    if (!optNoDraw) {
      this.redraw();
    }
  };

  _proto.addMarkers = function addMarkers(markers, optNoDraw) {
    for (var key in markers) {
      if (markers.hasOwnProperty(key)) {
        this.pushMarkerTo(markers[key]);
      }
    }

    if (!optNoDraw) {
      this.redraw();
    }
  };

  _proto.pushMarkerTo = function pushMarkerTo(marker) {
    var _this2 = this;

    // If the marker is draggable add a listener so we can update the clusters on the dragend:
    if (marker.getDraggable()) {
      // eslint-disable-next-line @getify/proper-arrows/name, @getify/proper-arrows/this
      google.maps.event.addListener(marker, 'dragend', function () {
        if (_this2.ready) {
          marker.isAdded = false;

          _this2.repaint();
        }
      });
    }

    marker.isAdded = false;
    this.markers.push(marker);
  };

  _proto.removeMarker_ = function removeMarker_(marker) {
    var index = -1;

    if (this.markers.indexOf) {
      index = this.markers.indexOf(marker);
    } else {
      for (var i = 0; i < this.markers.length; i++) {
        if (marker === this.markers[i]) {
          index = i;
          break;
        }
      }
    }

    if (index === -1) {
      // Marker is not in our list of markers, so do nothing:
      return false;
    }

    marker.setMap(null);
    this.markers.splice(index, 1); // Remove the marker from the list of managed markers

    return true;
  };

  _proto.removeMarker = function removeMarker(marker, optNoDraw) {
    var removed = this.removeMarker_(marker);

    if (!optNoDraw && removed) {
      this.repaint();
    }

    return removed;
  };

  _proto.removeMarkers = function removeMarkers(markers, optNoDraw) {
    var removed = false;

    for (var i = 0; i < markers.length; i++) {
      removed = removed || this.removeMarker_(markers[i]);
    }

    if (!optNoDraw && removed) {
      this.repaint();
    }

    return removed;
  };

  _proto.clearMarkers = function clearMarkers() {
    this.resetViewport(true);
    this.markers = [];
  };

  _proto.repaint = function repaint() {
    var oldClusters = this.clusters.slice();
    this.clusters = [];
    this.resetViewport(false);
    this.redraw(); // Remove the old clusters.
    // Do it in a timeout to prevent blinking effect.

    setTimeout(function timeout() {
      for (var i = 0; i < oldClusters.length; i++) {
        oldClusters[i].remove();
      }
    }, 0);
  };

  _proto.getExtendedBounds = function getExtendedBounds(bounds) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    var projection = this.getProjection(); // Convert the points to pixels and the extend out by the grid size.

    var trPix = projection.fromLatLngToDivPixel( // Turn the bounds into latlng.
    new google.maps.LatLng(bounds.getNorthEast().lat(), bounds.getNorthEast().lng()));
    trPix.x += this.gridSize;
    trPix.y -= this.gridSize;
    var blPix = projection.fromLatLngToDivPixel( // Turn the bounds into latlng.
    new google.maps.LatLng(bounds.getSouthWest().lat(), bounds.getSouthWest().lng()));
    blPix.x -= this.gridSize;
    blPix.y += this.gridSize; // Extend the bounds to contain the new bounds.

    bounds.extend( // Convert the pixel points back to LatLng nw
    projection.fromDivPixelToLatLng(trPix));
    bounds.extend( // Convert the pixel points back to LatLng sw
    projection.fromDivPixelToLatLng(blPix));
    return bounds;
  };

  _proto.redraw = function redraw() {
    // Redraws all the clusters.
    this.createClusters(0);
  };

  _proto.resetViewport = function resetViewport(optHide) {
    // Remove all the clusters
    for (var i = 0; i < this.clusters.length; i++) {
      this.clusters[i].remove();
    }

    this.clusters = []; // Reset the markers to not be added and to be removed from the map.

    for (var _i3 = 0; _i3 < this.markers.length; _i3++) {
      var marker = this.markers[_i3];
      marker.isAdded = false;

      if (optHide) {
        marker.setMap(null);
      }
    }
  };

  _proto.distanceBetweenPoints = function distanceBetweenPoints(p1, p2) {
    var R = 6371; // Radius of the Earth in km

    var dLat = (p2.lat() - p1.lat()) * Math.PI / 180;
    var dLon = (p2.lng() - p1.lng()) * Math.PI / 180;
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(p1.lat() * Math.PI / 180) * Math.cos(p2.lat() * Math.PI / 180) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    return R * (2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)));
  };

  _proto.isMarkerInBounds = function isMarkerInBounds(marker, bounds) {
    var position = marker.getPosition();

    if (position) {
      return bounds.contains(position);
    }

    return false;
  };

  _proto.addToClosestCluster = function addToClosestCluster(marker) {
    var cluster;
    var distance = 40000; // Some large number

    var clusterToAddTo = null;

    for (var i = 0; i < this.clusters.length; i++) {
      cluster = this.clusters[i];
      var center = cluster.getCenter();
      var position = marker.getPosition();

      if (center && position) {
        var d = this.distanceBetweenPoints(center, position);

        if (d < distance) {
          distance = d;
          clusterToAddTo = cluster;
        }
      }
    }

    if (clusterToAddTo && clusterToAddTo.isMarkerInClusterBounds(marker)) {
      clusterToAddTo.addMarker(marker);
    } else {
      cluster = new Cluster(this);
      cluster.addMarker(marker);
      this.clusters.push(cluster);
    }
  };

  _proto.createClusters = function createClusters(iFirst) {
    var _this3 = this;

    if (!this.ready) {
      return;
    } // Cancel previous batch processing if we're working on the first batch:


    if (iFirst === 0) {
      /**
       * This event is fired when the <code>Clusterer</code> begins
       *  clustering markers.
       * @name Clusterer#clusteringbegin
       * @param {Clusterer} mc The Clusterer whose markers are being clustered.
       * @event
       */
      google.maps.event.trigger(this, 'clusteringbegin', this);

      if (this.timerRefStatic !== null) {
        window.clearTimeout(this.timerRefStatic);
        delete this.timerRefStatic;
      }
    } // Get our current map view bounds.
    // Create a new bounds object so we don't affect the map.
    //
    // See Comments 9 & 11 on Issue 3651 relating to this workaround for a Google Maps bug:


    var mapBounds = // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    this.getMap().getZoom() > 3 ? new google.maps.LatLngBounds( // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    this.getMap().getBounds().getSouthWest(), // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    this.getMap().getBounds().getNorthEast()) : new google.maps.LatLngBounds(new google.maps.LatLng(85.02070771743472, -178.48388434375), new google.maps.LatLng(-85.08136444384544, 178.00048865625));
    var bounds = this.getExtendedBounds(mapBounds);
    var iLast = Math.min(iFirst + this.batchSize, this.markers.length);

    for (var i = iFirst; i < iLast; i++) {
      var marker = this.markers[i];

      if (!marker.isAdded && this.isMarkerInBounds(marker, bounds)) {
        if (!this.ignoreHidden || this.ignoreHidden && marker.getVisible()) {
          this.addToClosestCluster(marker);
        }
      }
    }

    if (iLast < this.markers.length) {
      this.timerRefStatic = window.setTimeout( // eslint-disable-next-line @getify/proper-arrows/this, @getify/proper-arrows/name
      function () {
        _this3.createClusters(iLast);
      }, 0);
    } else {
      this.timerRefStatic = null;
      /**
       * This event is fired when the <code>Clusterer</code> stops
       *  clustering markers.
       * @name Clusterer#clusteringend
       * @param {Clusterer} mc The Clusterer whose markers are being clustered.
       * @event
       */

      google.maps.event.trigger(this, 'clusteringend', this);

      for (var _i4 = 0; _i4 < this.clusters.length; _i4++) {
        this.clusters[_i4].updateIcon();
      }
    }
  };

  _proto.extend = function extend(obj1, obj2) {
    return function applyExtend(object) {
      // eslint-disable-next-line guard-for-in
      for (var property in object.prototype) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        this.prototype[property] = object.prototype[property];
      } // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore


      return this;
    }.apply(obj1, [obj2]);
  };

  return Clusterer;
}();


//# sourceMappingURL=markerclusterer.esm.js.map


/***/ }),

/***/ "./node_modules/invariant/browser.js":
/*!*******************************************!*\
  !*** ./node_modules/invariant/browser.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (true) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvTWFwLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGdvb2dsZW1hcHMvanMtYXBpLWxvYWRlci9kaXN0L2luZGV4LmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0ByZWFjdC1nb29nbGUtbWFwcy9hcGkvZGlzdC9yZWFjdGdvb2dsZW1hcHNhcGkuZXNtLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHJlYWN0LWdvb2dsZS1tYXBzL2luZm9ib3gvZGlzdC9pbmZvYm94LmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0ByZWFjdC1nb29nbGUtbWFwcy9tYXJrZXItY2x1c3RlcmVyL2Rpc3QvbWFya2VyY2x1c3RlcmVyLmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2ludmFyaWFudC9icm93c2VyLmpzIl0sIm5hbWVzIjpbIk1hcCIsInZpZXdwb3J0Iiwid2lkdGgiLCJoZWlnaHQiLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsInpvb20iLCJzZXRTdGF0ZSIsInN0YXRlIiwibGF0IiwibG5nIiwidXJsIiwib3JpZ2luIiwid2luZG93IiwiZ29vZ2xlIiwibWFwcyIsIlBvaW50IiwiYW5jaG9yIiwic2NhbGVkU2l6ZSIsIlNpemUiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7SUFPTUEsRzs7Ozs7Ozs7Ozs7Ozs7OztnTkFDSTtBQUNOQyxjQUFRLEVBQUU7QUFDUkMsYUFBSyxFQUFFLE1BREM7QUFFUkMsY0FBTSxFQUFFLE9BRkE7QUFHUkMsZ0JBQVEsRUFBRSxTQUhGO0FBSVJDLGlCQUFTLEVBQUUsQ0FBQyxRQUpKO0FBS1JDLFlBQUksRUFBRTtBQUxFO0FBREosSzs7Ozs7Ozs2QkFZQztBQUFBOztBQUNQLGFBQ0UsTUFBQyxvREFBRDtBQUNFLGdCQUFRLEVBQUMsaUNBRFg7QUFFRSw0QkFBb0IsRUFBQyw0RkFGdkI7QUFHRSx3QkFBZ0IsRUFBRSwwQkFBQ0wsUUFBRDtBQUFBLGlCQUFjLE1BQUksQ0FBQ00sUUFBTCxDQUFjO0FBQUVOLG9CQUFRLEVBQVJBO0FBQUYsV0FBZCxDQUFkO0FBQUE7QUFIcEIsU0FJTSxLQUFLTyxLQUFMLENBQVdQLFFBSmpCO0FBS0UsaUJBQVMsRUFBQyxLQUxaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFNSSxNQUFDLDhEQUFEO0FBRU0sZ0JBQVEsRUFBRTtBQUFFUSxhQUFHLEVBQUUsU0FBUDtBQUFrQkMsYUFBRyxFQUFFLENBQUM7QUFBeEIsU0FGaEI7QUFJTSxZQUFJLEVBQUU7QUFDSkMsYUFBRyxVQURDO0FBRUpDLGdCQUFNLEVBQUUsSUFBSUMsTUFBTSxDQUFDQyxNQUFQLENBQWNDLElBQWQsQ0FBbUJDLEtBQXZCLENBQTZCLENBQTdCLEVBQWdDLENBQWhDLENBRko7QUFHSkMsZ0JBQU0sRUFBRSxJQUFJSixNQUFNLENBQUNDLE1BQVAsQ0FBY0MsSUFBZCxDQUFtQkMsS0FBdkIsQ0FBNkIsRUFBN0IsRUFBaUMsRUFBakMsQ0FISjtBQUlKRSxvQkFBVSxFQUFFLElBQUlMLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjQyxJQUFkLENBQW1CSSxJQUF2QixDQUE0QixFQUE1QixFQUFnQyxFQUFoQztBQUpSLFNBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQU5KLENBREY7QUFxQkQ7Ozs7RUFuQ2VDLCtDOztBQXNDSHBCLGtFQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLGlEQUFpRDtBQUMvRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVpQjtBQUNsQjs7Ozs7Ozs7Ozs7OztBQ2pMQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXlMO0FBQ3ZKO0FBQ2lCO0FBQ2E7QUFDdkI7QUFDWTs7QUFFckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQixzQkFBc0I7QUFDekM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYSx1QkFBdUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMkRBQWE7QUFDYjtBQUNBLEtBQUssZ0RBQVUsR0FBRyxLQUFxQyxHQUFHLGdEQUFTLHlFQUF5RSxTQUFnQjtBQUM1SixZQUFZLHdEQUFVO0FBQ3RCLFdBQVcsS0FBcUMsR0FBRyxnREFBUyxxRUFBcUUsU0FBZ0I7QUFDako7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTs7QUFFZjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFdBQVcsMkRBQWE7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLEVBQUUsMkRBQWE7QUFDcEI7QUFDQSxLQUFLLGtEQUFrRCwyREFBYSxDQUFDLDhDQUFRO0FBQzdFOztBQUVBO0FBQ0EsQ0FBQyxDQUFDLG1EQUFhOztBQUVmO0FBQ0Esa0JBQWtCLFlBQVksRUFBRTtBQUNoQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2QsS0FBSztBQUNMLGNBQWM7QUFDZDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBLHdDQUF3QyxXQUFXO0FBQ25EO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0NBQW9DLGNBQWM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUNBQWlDLGtCQUFrQjtBQUNuRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsaUJBQWlCO0FBQ3pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7OztBQUdIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRTs7O0FBR0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzREFBc0Q7QUFDdEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLCtDQUErQztBQUMvQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkZBQTJGLEtBQXFDLEdBQUcsZ0RBQVMscUtBQXFLLFNBQWdCOztBQUVqVTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFF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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDhDQUE4QztBQUM5Qzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQyxDQUFDLG1EQUFhO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQyxDQUFDLG1EQUFhO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQyxDQUFDLG1EQUFhO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNB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QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLCtDQUErQywwQkFBMEI7QUFDekU7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUMsQ0FBQyxtREFBYTtBQUNmOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSx1REFBdUQ7QUFDdkQ7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxD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Q0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7O0FBR1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE9B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Q0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMLHFCQUFxQix5QkFBeUI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0NBQWtDOztBQUVsQztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxtQkFBbUIsb0JBQW9CO0FBQ3ZDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7O0FBRUE7QUFDQSxxQkFBcUIsd0JBQXdCO0FBQzdDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMENBQTBDOztBQUUxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2Qjs7QUFFN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIsMEJBQTBCO0FBQzdDO0FBQ0E7O0FBRUEsdUJBQXVCOztBQUV2QixxQkFBcUIsMkJBQTJCO0FBQ2hEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5QkFBeUI7O0FBRXpCOztBQUVBLG1CQUFtQiwwQkFBMEI7QUFDN0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFVBQVU7QUFDM0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdCQUF3QixXQUFXO0FBQ25DOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixVQUFVO0FBQzNCO0FBQ0E7O0FBRUE7O0FBRUEsdUJBQXVCLDRCQUE0QjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7O0FBR0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQSxDQUFDOztBQUUwQztBQUMzQzs7Ozs7Ozs7Ozs7OztBQ3hnQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTSxJQUFxQztBQUMzQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyx5QkFBeUIsRUFBRTtBQUNyRTtBQUNBO0FBQ0E7O0FBRUEsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hYm91dC5iMzBlZmMzZTBlMGJhZmFjYjczNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3RNYXBHTCBmcm9tICdyZWFjdC1tYXAtZ2wnO1xyXG5pbXBvcnQge1xyXG4gIEdvb2dsZU1hcCxcclxuICB1c2VMb2FkU2NyaXB0LFxyXG4gIE1hcmtlcixcclxuICBJbmZvV2luZG93LFxyXG59IGZyb20gXCJAcmVhY3QtZ29vZ2xlLW1hcHMvYXBpXCI7XHJcblxyXG5jbGFzcyBNYXAgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHN0YXRlID0ge1xyXG4gICAgdmlld3BvcnQ6IHtcclxuICAgICAgd2lkdGg6ICc1NXZ3JyxcclxuICAgICAgaGVpZ2h0OiAnMTAwdmgnLFxyXG4gICAgICBsYXRpdHVkZTogNTMuNDc1NDMzLFxyXG4gICAgICBsb25naXR1ZGU6IC0yLjIzNjQ5NyxcclxuICAgICAgem9vbTogMTMsXHJcbiAgICAgIFxyXG4gICAgfVxyXG4gIH07XHJcblxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8UmVhY3RNYXBHTFxyXG4gICAgICAgIG1hcFN0eWxlPVwibWFwYm94Oi8vc3R5bGVzL21hcGJveC9kYXJrLXYxMFwiXHJcbiAgICAgICAgbWFwYm94QXBpQWNjZXNzVG9rZW49XCJway5leUoxSWpvaWJXOXpZMkZzYVhJaUxDSmhJam9pWTJ0b01taHJkMlpxTUdWdWRqSnpiWGh2WkRJemJtRnFkU0o5LmJpUWtwWjhsb1ZYSXN4aE11TmZmb2dcIlxyXG4gICAgICAgIG9uVmlld3BvcnRDaGFuZ2U9eyh2aWV3cG9ydCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHZpZXdwb3J0IH0pfVxyXG4gICAgICAgIHsuLi50aGlzLnN0YXRlLnZpZXdwb3J0fVxyXG4gICAgICAgIGNsYXNzTmFtZT1cIm1hcFwiID5cclxuICAgICAgICAgIDxNYXJrZXJcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb249e3sgbGF0OiA1My40NzU0MzMsIGxuZzogLTIuMjM2NDk3IH19XHJcblxyXG4gICAgICAgICAgICAgICAgaWNvbj17e1xyXG4gICAgICAgICAgICAgICAgICB1cmw6IGAvci5zdmdgLFxyXG4gICAgICAgICAgICAgICAgICBvcmlnaW46IG5ldyB3aW5kb3cuZ29vZ2xlLm1hcHMuUG9pbnQoMCwgMCksXHJcbiAgICAgICAgICAgICAgICAgIGFuY2hvcjogbmV3IHdpbmRvdy5nb29nbGUubWFwcy5Qb2ludCgxNSwgMTUpLFxyXG4gICAgICAgICAgICAgICAgICBzY2FsZWRTaXplOiBuZXcgd2luZG93Lmdvb2dsZS5tYXBzLlNpemUoMzAsIDMwKSxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgIFxyXG4gICAgICA8L1JlYWN0TWFwR0w+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFwOyIsIi8qKlxyXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdC5cclxuICpcclxuICogICAgICBIdHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjAuXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbi8qKlxyXG4gKiBbW0xvYWRlcl1dIG1ha2VzIGl0IGVhc2llciB0byBhZGQgR29vZ2xlIE1hcHMgSmF2YVNjcmlwdCBBUEkgdG8geW91ciBhcHBsaWNhdGlvblxyXG4gKiBkeW5hbWljYWxseSB1c2luZ1xyXG4gKiBbUHJvbWlzZXNdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL1Byb21pc2UpLlxyXG4gKiBJdCB3b3JrcyBieSBkeW5hbWljYWxseSBjcmVhdGluZyBhbmQgYXBwZW5kaW5nIGEgc2NyaXB0IG5vZGUgdG8gdGhlIHRoZVxyXG4gKiBkb2N1bWVudCBoZWFkIGFuZCB3cmFwcGluZyB0aGUgY2FsbGJhY2sgZnVuY3Rpb24gc28gYXMgdG8gcmV0dXJuIGEgcHJvbWlzZS5cclxuICpcclxuICogYGBgXHJcbiAqIGNvbnN0IGxvYWRlciA9IG5ldyBMb2FkZXIoe1xyXG4gKiAgIGFwaUtleTogXCJcIixcclxuICogICB2ZXJzaW9uOiBcIndlZWtseVwiLFxyXG4gKiAgIGxpYnJhcmllczogW1wicGxhY2VzXCJdXHJcbiAqIH0pO1xyXG4gKlxyXG4gKiBsb2FkZXIubG9hZCgpLnRoZW4oKCkgPT4ge1xyXG4gKiAgIGNvbnN0IG1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAoLi4uKVxyXG4gKiB9KVxyXG4gKiBgYGBcclxuICovXHJcbnZhciBMb2FkZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgTG9hZGVyIHVzaW5nIFtbTG9hZGVyT3B0aW9uc11dLiBObyBkZWZhdWx0cyBhcmUgc2V0XHJcbiAgICAgKiB1c2luZyB0aGlzIGxpYnJhcnksIGluc3RlYWQgdGhlIGRlZmF1bHRzIGFyZSBzZXQgYnkgdGhlIEdvb2dsZSBNYXBzXHJcbiAgICAgKiBKYXZhU2NyaXB0IEFQSSBzZXJ2ZXIuXHJcbiAgICAgKlxyXG4gICAgICogYGBgXHJcbiAgICAgKiBjb25zdCBsb2FkZXIgPSBMb2FkZXIoe2FwaUtleSwgdmVyc2lvbjogJ3dlZWtseScsIGxpYnJhcmllczogWydwbGFjZXMnXX0pO1xyXG4gICAgICogYGBgXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIExvYWRlcihfYSkge1xyXG4gICAgICAgIHZhciBhcGlLZXkgPSBfYS5hcGlLZXksIGNoYW5uZWwgPSBfYS5jaGFubmVsLCBfYiA9IF9hLmlkLCBpZCA9IF9iID09PSB2b2lkIDAgPyBcIl9fZ29vZ2xlTWFwc1NjcmlwdElkXCIgOiBfYiwgX2MgPSBfYS5saWJyYXJpZXMsIGxpYnJhcmllcyA9IF9jID09PSB2b2lkIDAgPyBbXSA6IF9jLCBsYW5ndWFnZSA9IF9hLmxhbmd1YWdlLCByZWdpb24gPSBfYS5yZWdpb24sIHZlcnNpb24gPSBfYS52ZXJzaW9uLCBtYXBJZHMgPSBfYS5tYXBJZHMsIG5vbmNlID0gX2Eubm9uY2UsIF9kID0gX2EudXJsLCB1cmwgPSBfZCA9PT0gdm9pZCAwID8gXCJodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvanNcIiA6IF9kO1xyXG4gICAgICAgIHRoaXMuQ0FMTEJBQ0sgPSBcIl9fZ29vZ2xlTWFwc0NhbGxiYWNrXCI7XHJcbiAgICAgICAgdGhpcy5jYWxsYmFja3MgPSBbXTtcclxuICAgICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnZlcnNpb24gPSB2ZXJzaW9uO1xyXG4gICAgICAgIHRoaXMuYXBpS2V5ID0gYXBpS2V5O1xyXG4gICAgICAgIHRoaXMuY2hhbm5lbCA9IGNoYW5uZWw7XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgICAgIHRoaXMubGlicmFyaWVzID0gbGlicmFyaWVzO1xyXG4gICAgICAgIHRoaXMubGFuZ3VhZ2UgPSBsYW5ndWFnZTtcclxuICAgICAgICB0aGlzLnJlZ2lvbiA9IHJlZ2lvbjtcclxuICAgICAgICB0aGlzLm1hcElkcyA9IG1hcElkcztcclxuICAgICAgICB0aGlzLm5vbmNlID0gbm9uY2U7XHJcbiAgICAgICAgdGhpcy51cmwgPSB1cmw7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZVVybCByZXR1cm5zIHRoZSBHb29nbGUgTWFwcyBKYXZhU2NyaXB0IEFQSSBzY3JpcHQgdXJsIGdpdmVuIHRoZSBbW0xvYWRlck9wdGlvbnNdXS5cclxuICAgICAqXHJcbiAgICAgKiBAaWdub3JlXHJcbiAgICAgKi9cclxuICAgIExvYWRlci5wcm90b3R5cGUuY3JlYXRlVXJsID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciB1cmwgPSB0aGlzLnVybDtcclxuICAgICAgICB1cmwgKz0gXCI/Y2FsbGJhY2s9XCIgKyB0aGlzLkNBTExCQUNLO1xyXG4gICAgICAgIGlmICh0aGlzLmFwaUtleSkge1xyXG4gICAgICAgICAgICB1cmwgKz0gXCIma2V5PVwiICsgdGhpcy5hcGlLZXk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmNoYW5uZWwpIHtcclxuICAgICAgICAgICAgdXJsICs9IFwiJmNoYW5uZWw9XCIgKyB0aGlzLmNoYW5uZWw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmxpYnJhcmllcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHVybCArPSBcIiZsaWJyYXJpZXM9XCIgKyB0aGlzLmxpYnJhcmllcy5qb2luKFwiLFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubGFuZ3VhZ2UpIHtcclxuICAgICAgICAgICAgdXJsICs9IFwiJmxhbmd1YWdlPVwiICsgdGhpcy5sYW5ndWFnZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMucmVnaW9uKSB7XHJcbiAgICAgICAgICAgIHVybCArPSBcIiZyZWdpb249XCIgKyB0aGlzLnJlZ2lvbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMudmVyc2lvbikge1xyXG4gICAgICAgICAgICB1cmwgKz0gXCImdj1cIiArIHRoaXMudmVyc2lvbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubWFwSWRzKSB7XHJcbiAgICAgICAgICAgIHVybCArPSBcIiZtYXBfaWRzPVwiICsgdGhpcy5tYXBJZHMuam9pbihcIixcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB1cmw7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBMb2FkIHRoZSBHb29nbGUgTWFwcyBKYXZhU2NyaXB0IEFQSSBzY3JpcHQgYW5kIHJldHVybiBhIFByb21pc2UuXHJcbiAgICAgKi9cclxuICAgIExvYWRlci5wcm90b3R5cGUubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5sb2FkUHJvbWlzZSgpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogTG9hZCB0aGUgR29vZ2xlIE1hcHMgSmF2YVNjcmlwdCBBUEkgc2NyaXB0IGFuZCByZXR1cm4gYSBQcm9taXNlLlxyXG4gICAgICpcclxuICAgICAqIEBpZ25vcmVcclxuICAgICAqL1xyXG4gICAgTG9hZGVyLnByb3RvdHlwZS5sb2FkUHJvbWlzZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgICAgIF90aGlzLmxvYWRDYWxsYmFjayhmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIExvYWQgdGhlIEdvb2dsZSBNYXBzIEphdmFTY3JpcHQgQVBJIHNjcmlwdCB3aXRoIGEgY2FsbGJhY2suXHJcbiAgICAgKi9cclxuICAgIExvYWRlci5wcm90b3R5cGUubG9hZENhbGxiYWNrID0gZnVuY3Rpb24gKGZuKSB7XHJcbiAgICAgICAgdGhpcy5jYWxsYmFja3MucHVzaChmbik7XHJcbiAgICAgICAgdGhpcy5leGVjdXRlKCk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBTZXQgdGhlIHNjcmlwdCBvbiBkb2N1bWVudC5cclxuICAgICAqL1xyXG4gICAgTG9hZGVyLnByb3RvdHlwZS5zZXRTY3JpcHQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaWQgJiYgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCkpIHtcclxuICAgICAgICAgICAgdGhpcy5jYWxsYmFjaygpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciB1cmwgPSB0aGlzLmNyZWF0ZVVybCgpO1xyXG4gICAgICAgIHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xyXG4gICAgICAgIHNjcmlwdC5pZCA9IHRoaXMuaWQ7XHJcbiAgICAgICAgc2NyaXB0LnR5cGUgPSBcInRleHQvamF2YXNjcmlwdFwiO1xyXG4gICAgICAgIHNjcmlwdC5zcmMgPSB1cmw7XHJcbiAgICAgICAgc2NyaXB0Lm9uZXJyb3IgPSB0aGlzLmxvYWRFcnJvckNhbGxiYWNrLmJpbmQodGhpcyk7XHJcbiAgICAgICAgc2NyaXB0LmRlZmVyID0gdHJ1ZTtcclxuICAgICAgICBzY3JpcHQuYXN5bmMgPSB0cnVlO1xyXG4gICAgICAgIGlmICh0aGlzLm5vbmNlKSB7XHJcbiAgICAgICAgICAgIHNjcmlwdC5ub25jZSA9IHRoaXMubm9uY2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcclxuICAgIH07XHJcbiAgICBMb2FkZXIucHJvdG90eXBlLmxvYWRFcnJvckNhbGxiYWNrID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICB0aGlzLm9uZXJyb3JFdmVudCA9IGU7XHJcbiAgICAgICAgdGhpcy5jYWxsYmFjaygpO1xyXG4gICAgfTtcclxuICAgIExvYWRlci5wcm90b3R5cGUuc2V0Q2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgd2luZG93Ll9fZ29vZ2xlTWFwc0NhbGxiYWNrID0gdGhpcy5jYWxsYmFjay5iaW5kKHRoaXMpO1xyXG4gICAgfTtcclxuICAgIExvYWRlci5wcm90b3R5cGUuY2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLmRvbmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuY2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24gKGNiKSB7XHJcbiAgICAgICAgICAgIGNiKF90aGlzLm9uZXJyb3JFdmVudCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5jYWxsYmFja3MgPSBbXTtcclxuICAgIH07XHJcbiAgICBMb2FkZXIucHJvdG90eXBlLmV4ZWN1dGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZG9uZSkge1xyXG4gICAgICAgICAgICB0aGlzLmNhbGxiYWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5sb2FkaW5nKSA7XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0Q2FsbGJhY2soKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U2NyaXB0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIExvYWRlcjtcclxufSgpKTtcblxuZXhwb3J0IHsgTG9hZGVyIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5lc20uanMubWFwXG4iLCJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCBjcmVhdGVFbGVtZW50LCBGcmFnbWVudCwgUHVyZUNvbXBvbmVudCwgY3JlYXRlUmVmLCB1c2VSZWYsIHVzZVN0YXRlLCB1c2VFZmZlY3QsIG1lbW8sIHVzZU1lbW8sIENoaWxkcmVuLCBpc1ZhbGlkRWxlbWVudCwgY2xvbmVFbGVtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGludmFyaWFudCBmcm9tICdpbnZhcmlhbnQnO1xuaW1wb3J0IHsgTG9hZGVyIH0gZnJvbSAnQGdvb2dsZW1hcHMvanMtYXBpLWxvYWRlcic7XG5pbXBvcnQgeyBDbHVzdGVyZXIgfSBmcm9tICdAcmVhY3QtZ29vZ2xlLW1hcHMvbWFya2VyLWNsdXN0ZXJlcic7XG5pbXBvcnQgeyBjcmVhdGVQb3J0YWwgfSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHsgSW5mb0JveCB9IGZyb20gJ0ByZWFjdC1nb29nbGUtbWFwcy9pbmZvYm94JztcblxuZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBrZXksIGFyZykge1xuICB0cnkge1xuICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcbiAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlamVjdChlcnJvcik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGluZm8uZG9uZSkge1xuICAgIHJlc29sdmUodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuXG4gICAgICBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIF90aHJvdyhlcnIpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7XG4gICAgICB9XG5cbiAgICAgIF9uZXh0KHVuZGVmaW5lZCk7XG4gICAgfSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbmZ1bmN0aW9uIF9pbmhlcml0c0xvb3NlKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcy5wcm90b3R5cGUpO1xuICBzdWJDbGFzcy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBzdWJDbGFzcztcbiAgc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzcztcbn1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IHt9O1xuICB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gIHZhciBrZXksIGk7XG5cbiAgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xuICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbnZhciBNYXBDb250ZXh0ID1cbi8qI19fUFVSRV9fKi9cbmNyZWF0ZUNvbnRleHQobnVsbCk7XG5mdW5jdGlvbiB1c2VHb29nbGVNYXAoKSB7XG4gICEhIXVzZUNvbnRleHQgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBpbnZhcmlhbnQoZmFsc2UsICd1c2VHb29nbGVNYXAgaXMgUmVhY3QgaG9vayBhbmQgcmVxdWlyZXMgUmVhY3QgdmVyc2lvbiAxNi44KycpIDogaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcbiAgdmFyIG1hcCA9IHVzZUNvbnRleHQoTWFwQ29udGV4dCk7XG4gICEhIW1hcCA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IGludmFyaWFudChmYWxzZSwgJ3VzZUdvb2dsZU1hcCBuZWVkcyBhIEdvb2dsZU1hcCBhdmFpbGFibGUgdXAgaW4gdGhlIHRyZWUnKSA6IGludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gIHJldHVybiBtYXA7XG59XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG52YXIgcmVkdWNlID0gZnVuY3Rpb24gcmVkdWNlKG9iaiwgZm4sIGFjYykge1xuICByZXR1cm4gT2JqZWN0LmtleXMob2JqKS5yZWR1Y2UoZnVuY3Rpb24gcmVkdWNlcihuZXdBY2MsIGtleSkge1xuICAgIHJldHVybiBmbihuZXdBY2MsIG9ialtrZXldLCBrZXkpO1xuICB9LCBhY2MpO1xufTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbmZ1bmN0aW9uIGZvckVhY2gob2JqLCBmbikge1xuICBPYmplY3Qua2V5cyhvYmopLmZvckVhY2goZnVuY3Rpb24gaXRlcmF0b3Ioa2V5KSB7XG4gICAgcmV0dXJuIGZuKG9ialtrZXldLCBrZXkpO1xuICB9KTtcbn1cblxuLyogZ2xvYmFsIGdvb2dsZSAqL1xudmFyIGFwcGx5VXBkYXRlclRvTmV4dFByb3BzID0gZnVuY3Rpb24gYXBwbHlVcGRhdGVyVG9OZXh0UHJvcHMoIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG51cGRhdGVyTWFwLCAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxucHJldlByb3BzLCAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxubmV4dFByb3BzLCAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuaW5zdGFuY2UgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbikge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICB2YXIgbWFwID0ge307IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG5cbiAgdmFyIGl0ZXIgPSBmdW5jdGlvbiBpdGVyKGZuLCBrZXkpIHtcbiAgICB2YXIgbmV4dFZhbHVlID0gbmV4dFByb3BzW2tleV07XG5cbiAgICBpZiAobmV4dFZhbHVlICE9PSBwcmV2UHJvcHNba2V5XSkge1xuICAgICAgbWFwW2tleV0gPSBuZXh0VmFsdWU7XG4gICAgICBmbihpbnN0YW5jZSwgbmV4dFZhbHVlKTtcbiAgICB9XG4gIH07XG5cbiAgZm9yRWFjaCh1cGRhdGVyTWFwLCBpdGVyKTtcbiAgcmV0dXJuIG1hcDtcbn07XG5mdW5jdGlvbiByZWdpc3RlckV2ZW50cyggLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbnByb3BzLCAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuaW5zdGFuY2UsIGV2ZW50TWFwKSB7XG4gIHZhciByZWdpc3RlcmVkTGlzdCA9IHJlZHVjZShldmVudE1hcCwgZnVuY3Rpb24gcmVkdWNlcihhY2MsIGdvb2dsZUV2ZW50TmFtZSwgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgb25FdmVudE5hbWUpIHtcbiAgICBpZiAodHlwZW9mIHByb3BzW29uRXZlbnROYW1lXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgYWNjLnB1c2goZ29vZ2xlLm1hcHMuZXZlbnQuYWRkTGlzdGVuZXIoaW5zdGFuY2UsIGdvb2dsZUV2ZW50TmFtZSwgcHJvcHNbb25FdmVudE5hbWVdKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFjYztcbiAgfSwgW10pO1xuICByZXR1cm4gcmVnaXN0ZXJlZExpc3Q7XG59XG5cbmZ1bmN0aW9uIHVucmVnaXN0ZXJFdmVudChyZWdpc3RlcmVkKSB7XG4gIGdvb2dsZS5tYXBzLmV2ZW50LnJlbW92ZUxpc3RlbmVyKHJlZ2lzdGVyZWQpO1xufVxuXG5mdW5jdGlvbiB1bnJlZ2lzdGVyRXZlbnRzKGV2ZW50cykge1xuICBpZiAoZXZlbnRzID09PSB2b2lkIDApIHtcbiAgICBldmVudHMgPSBbXTtcbiAgfVxuXG4gIGV2ZW50cy5mb3JFYWNoKHVucmVnaXN0ZXJFdmVudCk7XG59XG5mdW5jdGlvbiBhcHBseVVwZGF0ZXJzVG9Qcm9wc0FuZFJlZ2lzdGVyRXZlbnRzKF9yZWYpIHtcbiAgdmFyIHVwZGF0ZXJNYXAgPSBfcmVmLnVwZGF0ZXJNYXAsXG4gICAgICBldmVudE1hcCA9IF9yZWYuZXZlbnRNYXAsXG4gICAgICBwcmV2UHJvcHMgPSBfcmVmLnByZXZQcm9wcyxcbiAgICAgIG5leHRQcm9wcyA9IF9yZWYubmV4dFByb3BzLFxuICAgICAgaW5zdGFuY2UgPSBfcmVmLmluc3RhbmNlO1xuICB2YXIgcmVnaXN0ZXJlZEV2ZW50cyA9IHJlZ2lzdGVyRXZlbnRzKG5leHRQcm9wcywgaW5zdGFuY2UsIGV2ZW50TWFwKTtcbiAgYXBwbHlVcGRhdGVyVG9OZXh0UHJvcHModXBkYXRlck1hcCwgcHJldlByb3BzLCBuZXh0UHJvcHMsIGluc3RhbmNlKTtcbiAgcmV0dXJuIHJlZ2lzdGVyZWRFdmVudHM7XG59XG5cbnZhciBldmVudE1hcCA9IHtcbiAgb25EYmxDbGljazogJ2RibGNsaWNrJyxcbiAgb25EcmFnRW5kOiAnZHJhZ2VuZCcsXG4gIG9uRHJhZ1N0YXJ0OiAnZHJhZ3N0YXJ0JyxcbiAgb25NYXBUeXBlSWRDaGFuZ2VkOiAnbWFwdHlwZWlkX2NoYW5nZWQnLFxuICBvbk1vdXNlTW92ZTogJ21vdXNlbW92ZScsXG4gIG9uTW91c2VPdXQ6ICdtb3VzZW91dCcsXG4gIG9uTW91c2VPdmVyOiAnbW91c2VvdmVyJyxcbiAgb25Nb3VzZURvd246ICdtb3VzZWRvd24nLFxuICBvbk1vdXNlVXA6ICdtb3VzZXVwJyxcbiAgb25SaWdodENsaWNrOiAncmlnaHRjbGljaycsXG4gIG9uVGlsZXNMb2FkZWQ6ICd0aWxlc2xvYWRlZCcsXG4gIG9uQm91bmRzQ2hhbmdlZDogJ2JvdW5kc19jaGFuZ2VkJyxcbiAgb25DZW50ZXJDaGFuZ2VkOiAnY2VudGVyX2NoYW5nZWQnLFxuICBvbkNsaWNrOiAnY2xpY2snLFxuICBvbkRyYWc6ICdkcmFnJyxcbiAgb25IZWFkaW5nQ2hhbmdlZDogJ2hlYWRpbmdfY2hhbmdlZCcsXG4gIG9uSWRsZTogJ2lkbGUnLFxuICBvblByb2plY3Rpb25DaGFuZ2VkOiAncHJvamVjdGlvbl9jaGFuZ2VkJyxcbiAgb25SZXNpemU6ICdyZXNpemUnLFxuICBvblRpbHRDaGFuZ2VkOiAndGlsdF9jaGFuZ2VkJyxcbiAgb25ab29tQ2hhbmdlZDogJ3pvb21fY2hhbmdlZCdcbn07XG52YXIgdXBkYXRlck1hcCA9IHtcbiAgZXh0cmFNYXBUeXBlczogZnVuY3Rpb24gZXh0cmFNYXBUeXBlcyhtYXAsIGV4dHJhKSB7XG4gICAgZXh0cmEuZm9yRWFjaChmdW5jdGlvbiBmb3JFYWNoRXh0cmEoaXQsIGkpIHtcbiAgICAgIG1hcC5tYXBUeXBlcy5zZXQoU3RyaW5nKGkpLCBpdCk7XG4gICAgfSk7XG4gIH0sXG4gIGNlbnRlcjogZnVuY3Rpb24gY2VudGVyKG1hcCwgX2NlbnRlcikge1xuICAgIG1hcC5zZXRDZW50ZXIoX2NlbnRlcik7XG4gIH0sXG4gIGNsaWNrYWJsZUljb25zOiBmdW5jdGlvbiBjbGlja2FibGVJY29ucyhtYXAsIGNsaWNrYWJsZSkge1xuICAgIG1hcC5zZXRDbGlja2FibGVJY29ucyhjbGlja2FibGUpO1xuICB9LFxuICBoZWFkaW5nOiBmdW5jdGlvbiBoZWFkaW5nKG1hcCwgX2hlYWRpbmcpIHtcbiAgICBtYXAuc2V0SGVhZGluZyhfaGVhZGluZyk7XG4gIH0sXG4gIG1hcFR5cGVJZDogZnVuY3Rpb24gbWFwVHlwZUlkKG1hcCwgX21hcFR5cGVJZCkge1xuICAgIG1hcC5zZXRNYXBUeXBlSWQoX21hcFR5cGVJZCk7XG4gIH0sXG4gIG9wdGlvbnM6IGZ1bmN0aW9uIG9wdGlvbnMobWFwLCBfb3B0aW9ucykge1xuICAgIG1hcC5zZXRPcHRpb25zKF9vcHRpb25zKTtcbiAgfSxcbiAgc3RyZWV0VmlldzogZnVuY3Rpb24gc3RyZWV0VmlldyhtYXAsIF9zdHJlZXRWaWV3KSB7XG4gICAgbWFwLnNldFN0cmVldFZpZXcoX3N0cmVldFZpZXcpO1xuICB9LFxuICB0aWx0OiBmdW5jdGlvbiB0aWx0KG1hcCwgX3RpbHQpIHtcbiAgICBtYXAuc2V0VGlsdChfdGlsdCk7XG4gIH0sXG4gIHpvb206IGZ1bmN0aW9uIHpvb20obWFwLCBfem9vbSkge1xuICAgIG1hcC5zZXRab29tKF96b29tKTtcbiAgfVxufTtcbnZhciBHb29nbGVNYXAgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9SZWFjdCRQdXJlQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKEdvb2dsZU1hcCwgX1JlYWN0JFB1cmVDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIEdvb2dsZU1hcCgpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfdGhpcyA9IF9SZWFjdCRQdXJlQ29tcG9uZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG1hcDogbnVsbFxuICAgIH07XG4gICAgX3RoaXMucmVnaXN0ZXJlZEV2ZW50cyA9IFtdO1xuICAgIF90aGlzLm1hcFJlZiA9IG51bGw7XG5cbiAgICBfdGhpcy5nZXRJbnN0YW5jZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChfdGhpcy5tYXBSZWYgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXcgZ29vZ2xlLm1hcHMuTWFwKF90aGlzLm1hcFJlZiwgX3RoaXMucHJvcHMub3B0aW9ucyk7XG4gICAgfTtcblxuICAgIF90aGlzLnBhblRvID0gZnVuY3Rpb24gKGxhdExuZykge1xuICAgICAgdmFyIG1hcCA9IF90aGlzLmdldEluc3RhbmNlKCk7XG5cbiAgICAgIGlmIChtYXApIHtcbiAgICAgICAgbWFwLnBhblRvKGxhdExuZyk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLnNldE1hcENhbGxiYWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKF90aGlzLnN0YXRlLm1hcCAhPT0gbnVsbCkge1xuICAgICAgICBpZiAoX3RoaXMucHJvcHMub25Mb2FkKSB7XG4gICAgICAgICAgX3RoaXMucHJvcHMub25Mb2FkKF90aGlzLnN0YXRlLm1hcCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMuZ2V0UmVmID0gZnVuY3Rpb24gKHJlZikge1xuICAgICAgX3RoaXMubWFwUmVmID0gcmVmO1xuICAgIH07XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gR29vZ2xlTWFwLnByb3RvdHlwZTtcblxuICBfcHJvdG8uY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB2YXIgbWFwID0gdGhpcy5nZXRJbnN0YW5jZSgpO1xuICAgIHRoaXMucmVnaXN0ZXJlZEV2ZW50cyA9IGFwcGx5VXBkYXRlcnNUb1Byb3BzQW5kUmVnaXN0ZXJFdmVudHMoe1xuICAgICAgdXBkYXRlck1hcDogdXBkYXRlck1hcCxcbiAgICAgIGV2ZW50TWFwOiBldmVudE1hcCxcbiAgICAgIHByZXZQcm9wczoge30sXG4gICAgICBuZXh0UHJvcHM6IHRoaXMucHJvcHMsXG4gICAgICBpbnN0YW5jZTogbWFwXG4gICAgfSk7XG4gICAgdGhpcy5zZXRTdGF0ZShmdW5jdGlvbiBzZXRNYXAoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBtYXA6IG1hcFxuICAgICAgfTtcbiAgICB9LCB0aGlzLnNldE1hcENhbGxiYWNrKTtcbiAgfTtcblxuICBfcHJvdG8uY29tcG9uZW50RGlkVXBkYXRlID0gZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgIGlmICh0aGlzLnN0YXRlLm1hcCAhPT0gbnVsbCkge1xuICAgICAgdW5yZWdpc3RlckV2ZW50cyh0aGlzLnJlZ2lzdGVyZWRFdmVudHMpO1xuICAgICAgdGhpcy5yZWdpc3RlcmVkRXZlbnRzID0gYXBwbHlVcGRhdGVyc1RvUHJvcHNBbmRSZWdpc3RlckV2ZW50cyh7XG4gICAgICAgIHVwZGF0ZXJNYXA6IHVwZGF0ZXJNYXAsXG4gICAgICAgIGV2ZW50TWFwOiBldmVudE1hcCxcbiAgICAgICAgcHJldlByb3BzOiBwcmV2UHJvcHMsXG4gICAgICAgIG5leHRQcm9wczogdGhpcy5wcm9wcyxcbiAgICAgICAgaW5zdGFuY2U6IHRoaXMuc3RhdGUubWFwXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUubWFwICE9PSBudWxsKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5vblVubW91bnQpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vblVubW91bnQodGhpcy5zdGF0ZS5tYXApO1xuICAgICAgfVxuXG4gICAgICB1bnJlZ2lzdGVyRXZlbnRzKHRoaXMucmVnaXN0ZXJlZEV2ZW50cyk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgaWQ6IHRoaXMucHJvcHMuaWQsXG4gICAgICByZWY6IHRoaXMuZ2V0UmVmLFxuICAgICAgc3R5bGU6IHRoaXMucHJvcHMubWFwQ29udGFpbmVyU3R5bGUsXG4gICAgICBjbGFzc05hbWU6IHRoaXMucHJvcHMubWFwQ29udGFpbmVyQ2xhc3NOYW1lXG4gICAgfSwgY3JlYXRlRWxlbWVudChNYXBDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgICB2YWx1ZTogdGhpcy5zdGF0ZS5tYXBcbiAgICB9LCB0aGlzLnN0YXRlLm1hcCAhPT0gbnVsbCA/IHRoaXMucHJvcHMuY2hpbGRyZW4gOiBjcmVhdGVFbGVtZW50KEZyYWdtZW50LCBudWxsKSkpO1xuICB9O1xuXG4gIHJldHVybiBHb29nbGVNYXA7XG59KFB1cmVDb21wb25lbnQpO1xuXG5mdW5jdGlvbiBjcmVhdGVDb21tb25qc01vZHVsZShmbiwgbW9kdWxlKSB7XG5cdHJldHVybiBtb2R1bGUgPSB7IGV4cG9ydHM6IHt9IH0sIGZuKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMpLCBtb2R1bGUuZXhwb3J0cztcbn1cblxudmFyIHJ1bnRpbWVfMSA9IGNyZWF0ZUNvbW1vbmpzTW9kdWxlKGZ1bmN0aW9uIChtb2R1bGUpIHtcbi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxudmFyIHJ1bnRpbWUgPSAoZnVuY3Rpb24gKGV4cG9ydHMpIHtcblxuICB2YXIgT3AgPSBPYmplY3QucHJvdG90eXBlO1xuICB2YXIgaGFzT3duID0gT3AuaGFzT3duUHJvcGVydHk7XG4gIHZhciB1bmRlZmluZWQkMTsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgZnVuY3Rpb24gd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIC8vIElmIG91dGVyRm4gcHJvdmlkZWQgYW5kIG91dGVyRm4ucHJvdG90eXBlIGlzIGEgR2VuZXJhdG9yLCB0aGVuIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yLlxuICAgIHZhciBwcm90b0dlbmVyYXRvciA9IG91dGVyRm4gJiYgb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IgPyBvdXRlckZuIDogR2VuZXJhdG9yO1xuICAgIHZhciBnZW5lcmF0b3IgPSBPYmplY3QuY3JlYXRlKHByb3RvR2VuZXJhdG9yLnByb3RvdHlwZSk7XG4gICAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XG5cbiAgICAvLyBUaGUgLl9pbnZva2UgbWV0aG9kIHVuaWZpZXMgdGhlIGltcGxlbWVudGF0aW9ucyBvZiB0aGUgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzLlxuICAgIGdlbmVyYXRvci5faW52b2tlID0gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBnZW5lcmF0b3I7XG4gIH1cbiAgZXhwb3J0cy53cmFwID0gd3JhcDtcblxuICAvLyBUcnkvY2F0Y2ggaGVscGVyIHRvIG1pbmltaXplIGRlb3B0aW1pemF0aW9ucy4gUmV0dXJucyBhIGNvbXBsZXRpb25cbiAgLy8gcmVjb3JkIGxpa2UgY29udGV4dC50cnlFbnRyaWVzW2ldLmNvbXBsZXRpb24uIFRoaXMgaW50ZXJmYWNlIGNvdWxkXG4gIC8vIGhhdmUgYmVlbiAoYW5kIHdhcyBwcmV2aW91c2x5KSBkZXNpZ25lZCB0byB0YWtlIGEgY2xvc3VyZSB0byBiZVxuICAvLyBpbnZva2VkIHdpdGhvdXQgYXJndW1lbnRzLCBidXQgaW4gYWxsIHRoZSBjYXNlcyB3ZSBjYXJlIGFib3V0IHdlXG4gIC8vIGFscmVhZHkgaGF2ZSBhbiBleGlzdGluZyBtZXRob2Qgd2Ugd2FudCB0byBjYWxsLCBzbyB0aGVyZSdzIG5vIG5lZWRcbiAgLy8gdG8gY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIG9iamVjdC4gV2UgY2FuIGV2ZW4gZ2V0IGF3YXkgd2l0aCBhc3N1bWluZ1xuICAvLyB0aGUgbWV0aG9kIHRha2VzIGV4YWN0bHkgb25lIGFyZ3VtZW50LCBzaW5jZSB0aGF0IGhhcHBlbnMgdG8gYmUgdHJ1ZVxuICAvLyBpbiBldmVyeSBjYXNlLCBzbyB3ZSBkb24ndCBoYXZlIHRvIHRvdWNoIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBUaGVcbiAgLy8gb25seSBhZGRpdGlvbmFsIGFsbG9jYXRpb24gcmVxdWlyZWQgaXMgdGhlIGNvbXBsZXRpb24gcmVjb3JkLCB3aGljaFxuICAvLyBoYXMgYSBzdGFibGUgc2hhcGUgYW5kIHNvIGhvcGVmdWxseSBzaG91bGQgYmUgY2hlYXAgdG8gYWxsb2NhdGUuXG4gIGZ1bmN0aW9uIHRyeUNhdGNoKGZuLCBvYmosIGFyZykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcIm5vcm1hbFwiLCBhcmc6IGZuLmNhbGwob2JqLCBhcmcpIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcInRocm93XCIsIGFyZzogZXJyIH07XG4gICAgfVxuICB9XG5cbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkU3RhcnQgPSBcInN1c3BlbmRlZFN0YXJ0XCI7XG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkID0gXCJzdXNwZW5kZWRZaWVsZFwiO1xuICB2YXIgR2VuU3RhdGVFeGVjdXRpbmcgPSBcImV4ZWN1dGluZ1wiO1xuICB2YXIgR2VuU3RhdGVDb21wbGV0ZWQgPSBcImNvbXBsZXRlZFwiO1xuXG4gIC8vIFJldHVybmluZyB0aGlzIG9iamVjdCBmcm9tIHRoZSBpbm5lckZuIGhhcyB0aGUgc2FtZSBlZmZlY3QgYXNcbiAgLy8gYnJlYWtpbmcgb3V0IG9mIHRoZSBkaXNwYXRjaCBzd2l0Y2ggc3RhdGVtZW50LlxuICB2YXIgQ29udGludWVTZW50aW5lbCA9IHt9O1xuXG4gIC8vIER1bW15IGNvbnN0cnVjdG9yIGZ1bmN0aW9ucyB0aGF0IHdlIHVzZSBhcyB0aGUgLmNvbnN0cnVjdG9yIGFuZFxuICAvLyAuY29uc3RydWN0b3IucHJvdG90eXBlIHByb3BlcnRpZXMgZm9yIGZ1bmN0aW9ucyB0aGF0IHJldHVybiBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0cy4gRm9yIGZ1bGwgc3BlYyBjb21wbGlhbmNlLCB5b3UgbWF5IHdpc2ggdG8gY29uZmlndXJlIHlvdXJcbiAgLy8gbWluaWZpZXIgbm90IHRvIG1hbmdsZSB0aGUgbmFtZXMgb2YgdGhlc2UgdHdvIGZ1bmN0aW9ucy5cbiAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XG5cbiAgLy8gVGhpcyBpcyBhIHBvbHlmaWxsIGZvciAlSXRlcmF0b3JQcm90b3R5cGUlIGZvciBlbnZpcm9ubWVudHMgdGhhdFxuICAvLyBkb24ndCBuYXRpdmVseSBzdXBwb3J0IGl0LlxuICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcbiAgSXRlcmF0b3JQcm90b3R5cGVbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbiAgdmFyIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8gJiYgZ2V0UHJvdG8oZ2V0UHJvdG8odmFsdWVzKFtdKSkpO1xuICBpZiAoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiZcbiAgICAgIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPcCAmJlxuICAgICAgaGFzT3duLmNhbGwoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sKSkge1xuICAgIC8vIFRoaXMgZW52aXJvbm1lbnQgaGFzIGEgbmF0aXZlICVJdGVyYXRvclByb3RvdHlwZSU7IHVzZSBpdCBpbnN0ZWFkXG4gICAgLy8gb2YgdGhlIHBvbHlmaWxsLlxuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gTmF0aXZlSXRlcmF0b3JQcm90b3R5cGU7XG4gIH1cblxuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPVxuICAgIEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR3AuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvbjtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGVbdG9TdHJpbmdUYWdTeW1ib2xdID1cbiAgICBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcblxuICAvLyBIZWxwZXIgZm9yIGRlZmluaW5nIHRoZSAubmV4dCwgLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzIG9mIHRoZVxuICAvLyBJdGVyYXRvciBpbnRlcmZhY2UgaW4gdGVybXMgb2YgYSBzaW5nbGUgLl9pbnZva2UgbWV0aG9kLlxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICBwcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIGN0b3JcbiAgICAgID8gY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHxcbiAgICAgICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxuICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXG4gICAgICAgIChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkgPT09IFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICAgICAgOiBmYWxzZTtcbiAgfTtcblxuICBleHBvcnRzLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgICAgIGlmICghKHRvU3RyaW5nVGFnU3ltYm9sIGluIGdlbkZ1bikpIHtcbiAgICAgICAgZ2VuRnVuW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcbiAgICAgIH1cbiAgICB9XG4gICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApO1xuICAgIHJldHVybiBnZW5GdW47XG4gIH07XG5cbiAgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvXG4gIC8vIGB5aWVsZCByZWdlbmVyYXRvclJ1bnRpbWUuYXdyYXAoeClgLCBzbyB0aGF0IHRoZSBydW50aW1lIGNhbiB0ZXN0XG4gIC8vIGBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpYCB0byBkZXRlcm1pbmUgaWYgdGhlIHlpZWxkZWQgdmFsdWUgaXNcbiAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC5cbiAgZXhwb3J0cy5hd3JhcCA9IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiB7IF9fYXdhaXQ6IGFyZyB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yLCBQcm9taXNlSW1wbCkge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSAmJlxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uKHVud3JhcHBlZCkge1xuICAgICAgICAgIC8vIFdoZW4gYSB5aWVsZGVkIFByb21pc2UgaXMgcmVzb2x2ZWQsIGl0cyBmaW5hbCB2YWx1ZSBiZWNvbWVzXG4gICAgICAgICAgLy8gdGhlIC52YWx1ZSBvZiB0aGUgUHJvbWlzZTx7dmFsdWUsZG9uZX0+IHJlc3VsdCBmb3IgdGhlXG4gICAgICAgICAgLy8gY3VycmVudCBpdGVyYXRpb24uXG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkO1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAvLyBJZiBhIHJlamVjdGVkIFByb21pc2Ugd2FzIHlpZWxkZWQsIHRocm93IHRoZSByZWplY3Rpb24gYmFja1xuICAgICAgICAgIC8vIGludG8gdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgaGFuZGxlZCB0aGVyZS5cbiAgICAgICAgICByZXR1cm4gaW52b2tlKFwidGhyb3dcIiwgZXJyb3IsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlSW1wbChmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID1cbiAgICAgICAgLy8gSWYgZW5xdWV1ZSBoYXMgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIHdlIHdhbnQgdG8gd2FpdCB1bnRpbFxuICAgICAgICAvLyBhbGwgcHJldmlvdXMgUHJvbWlzZXMgaGF2ZSBiZWVuIHJlc29sdmVkIGJlZm9yZSBjYWxsaW5nIGludm9rZSxcbiAgICAgICAgLy8gc28gdGhhdCByZXN1bHRzIGFyZSBhbHdheXMgZGVsaXZlcmVkIGluIHRoZSBjb3JyZWN0IG9yZGVyLiBJZlxuICAgICAgICAvLyBlbnF1ZXVlIGhhcyBub3QgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIGl0IGlzIGltcG9ydGFudCB0b1xuICAgICAgICAvLyBjYWxsIGludm9rZSBpbW1lZGlhdGVseSwgd2l0aG91dCB3YWl0aW5nIG9uIGEgY2FsbGJhY2sgdG8gZmlyZSxcbiAgICAgICAgLy8gc28gdGhhdCB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhcyB0aGUgb3Bwb3J0dW5pdHkgdG8gZG9cbiAgICAgICAgLy8gYW55IG5lY2Vzc2FyeSBzZXR1cCBpbiBhIHByZWRpY3RhYmxlIHdheS4gVGhpcyBwcmVkaWN0YWJpbGl0eVxuICAgICAgICAvLyBpcyB3aHkgdGhlIFByb21pc2UgY29uc3RydWN0b3Igc3luY2hyb25vdXNseSBpbnZva2VzIGl0c1xuICAgICAgICAvLyBleGVjdXRvciBjYWxsYmFjaywgYW5kIHdoeSBhc3luYyBmdW5jdGlvbnMgc3luY2hyb25vdXNseVxuICAgICAgICAvLyBleGVjdXRlIGNvZGUgYmVmb3JlIHRoZSBmaXJzdCBhd2FpdC4gU2luY2Ugd2UgaW1wbGVtZW50IHNpbXBsZVxuICAgICAgICAvLyBhc3luYyBmdW5jdGlvbnMgaW4gdGVybXMgb2YgYXN5bmMgZ2VuZXJhdG9ycywgaXQgaXMgZXNwZWNpYWxseVxuICAgICAgICAvLyBpbXBvcnRhbnQgdG8gZ2V0IHRoaXMgcmlnaHQsIGV2ZW4gdGhvdWdoIGl0IHJlcXVpcmVzIGNhcmUuXG4gICAgICAgIHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKFxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLFxuICAgICAgICAgIC8vIEF2b2lkIHByb3BhZ2F0aW5nIGZhaWx1cmVzIHRvIFByb21pc2VzIHJldHVybmVkIGJ5IGxhdGVyXG4gICAgICAgICAgLy8gaW52b2NhdGlvbnMgb2YgdGhlIGl0ZXJhdG9yLlxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnXG4gICAgICAgICkgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuICAgIH1cblxuICAgIC8vIERlZmluZSB0aGUgdW5pZmllZCBoZWxwZXIgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byBpbXBsZW1lbnQgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiAoc2VlIGRlZmluZUl0ZXJhdG9yTWV0aG9kcykuXG4gICAgdGhpcy5faW52b2tlID0gZW5xdWV1ZTtcbiAgfVxuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSk7XG4gIEFzeW5jSXRlcmF0b3IucHJvdG90eXBlW2FzeW5jSXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuICBleHBvcnRzLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yO1xuXG4gIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcbiAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mXG4gIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLlxuICBleHBvcnRzLmFzeW5jID0gZnVuY3Rpb24oaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QsIFByb21pc2VJbXBsKSB7XG4gICAgaWYgKFByb21pc2VJbXBsID09PSB2b2lkIDApIFByb21pc2VJbXBsID0gUHJvbWlzZTtcblxuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXG4gICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSxcbiAgICAgIFByb21pc2VJbXBsXG4gICAgKTtcblxuICAgIHJldHVybiBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQkMSkge1xuICAgICAgLy8gQSAudGhyb3cgb3IgLnJldHVybiB3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gLnRocm93XG4gICAgICAvLyBtZXRob2QgYWx3YXlzIHRlcm1pbmF0ZXMgdGhlIHlpZWxkKiBsb29wLlxuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIC8vIE5vdGU6IFtcInJldHVyblwiXSBtdXN0IGJlIHVzZWQgZm9yIEVTMyBwYXJzaW5nIGNvbXBhdGliaWxpdHkuXG4gICAgICAgIGlmIChkZWxlZ2F0ZS5pdGVyYXRvcltcInJldHVyblwiXSkge1xuICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkJDE7XG4gICAgICAgICAgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgLy8gSWYgbWF5YmVJbnZva2VEZWxlZ2F0ZShjb250ZXh0KSBjaGFuZ2VkIGNvbnRleHQubWV0aG9kIGZyb21cbiAgICAgICAgICAgIC8vIFwicmV0dXJuXCIgdG8gXCJ0aHJvd1wiLCBsZXQgdGhhdCBvdmVycmlkZSB0aGUgVHlwZUVycm9yIGJlbG93LlxuICAgICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICBcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ3Rocm93JyBtZXRob2RcIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XG5cbiAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcblxuICAgIGlmICghIGluZm8pIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIik7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgIC8vIEFzc2lnbiB0aGUgcmVzdWx0IG9mIHRoZSBmaW5pc2hlZCBkZWxlZ2F0ZSB0byB0aGUgdGVtcG9yYXJ5XG4gICAgICAvLyB2YXJpYWJsZSBzcGVjaWZpZWQgYnkgZGVsZWdhdGUucmVzdWx0TmFtZSAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XG5cbiAgICAgIC8vIFJlc3VtZSBleGVjdXRpb24gYXQgdGhlIGRlc2lyZWQgbG9jYXRpb24gKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG5cbiAgICAgIC8vIElmIGNvbnRleHQubWV0aG9kIHdhcyBcInRocm93XCIgYnV0IHRoZSBkZWxlZ2F0ZSBoYW5kbGVkIHRoZVxuICAgICAgLy8gZXhjZXB0aW9uLCBsZXQgdGhlIG91dGVyIGdlbmVyYXRvciBwcm9jZWVkIG5vcm1hbGx5LiBJZlxuICAgICAgLy8gY29udGV4dC5tZXRob2Qgd2FzIFwibmV4dFwiLCBmb3JnZXQgY29udGV4dC5hcmcgc2luY2UgaXQgaGFzIGJlZW5cbiAgICAgIC8vIFwiY29uc3VtZWRcIiBieSB0aGUgZGVsZWdhdGUgaXRlcmF0b3IuIElmIGNvbnRleHQubWV0aG9kIHdhc1xuICAgICAgLy8gXCJyZXR1cm5cIiwgYWxsb3cgdGhlIG9yaWdpbmFsIC5yZXR1cm4gY2FsbCB0byBjb250aW51ZSBpbiB0aGVcbiAgICAgIC8vIG91dGVyIGdlbmVyYXRvci5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCAhPT0gXCJyZXR1cm5cIikge1xuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZCQxO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlLXlpZWxkIHRoZSByZXN1bHQgcmV0dXJuZWQgYnkgdGhlIGRlbGVnYXRlIG1ldGhvZC5cbiAgICAgIHJldHVybiBpbmZvO1xuICAgIH1cblxuICAgIC8vIFRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBpcyBmaW5pc2hlZCwgc28gZm9yZ2V0IGl0IGFuZCBjb250aW51ZSB3aXRoXG4gICAgLy8gdGhlIG91dGVyIGdlbmVyYXRvci5cbiAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgfVxuXG4gIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKTtcblxuICBHcFt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvclwiO1xuXG4gIC8vIEEgR2VuZXJhdG9yIHNob3VsZCBhbHdheXMgcmV0dXJuIGl0c2VsZiBhcyB0aGUgaXRlcmF0b3Igb2JqZWN0IHdoZW4gdGhlXG4gIC8vIEBAaXRlcmF0b3IgZnVuY3Rpb24gaXMgY2FsbGVkIG9uIGl0LiBTb21lIGJyb3dzZXJzJyBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlXG4gIC8vIGl0ZXJhdG9yIHByb3RvdHlwZSBjaGFpbiBpbmNvcnJlY3RseSBpbXBsZW1lbnQgdGhpcywgY2F1c2luZyB0aGUgR2VuZXJhdG9yXG4gIC8vIG9iamVjdCB0byBub3QgYmUgcmV0dXJuZWQgZnJvbSB0aGlzIGNhbGwuIFRoaXMgZW5zdXJlcyB0aGF0IGRvZXNuJ3QgaGFwcGVuLlxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2lzc3Vlcy8yNzQgZm9yIG1vcmUgZGV0YWlscy5cbiAgR3BbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgR3AudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfTtcblxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykge1xuICAgIHZhciBlbnRyeSA9IHsgdHJ5TG9jOiBsb2NzWzBdIH07XG5cbiAgICBpZiAoMSBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV07XG4gICAgfVxuXG4gICAgaWYgKDIgaW4gbG9jcykge1xuICAgICAgZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl07XG4gICAgICBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM107XG4gICAgfVxuXG4gICAgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkge1xuICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xuICAgIHJlY29yZC50eXBlID0gXCJub3JtYWxcIjtcbiAgICBkZWxldGUgcmVjb3JkLmFyZztcbiAgICBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG5cbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xuICAgIC8vIFRoZSByb290IGVudHJ5IG9iamVjdCAoZWZmZWN0aXZlbHkgYSB0cnkgc3RhdGVtZW50IHdpdGhvdXQgYSBjYXRjaFxuICAgIC8vIG9yIGEgZmluYWxseSBibG9jaykgZ2l2ZXMgdXMgYSBwbGFjZSB0byBzdG9yZSB2YWx1ZXMgdGhyb3duIGZyb21cbiAgICAvLyBsb2NhdGlvbnMgd2hlcmUgdGhlcmUgaXMgbm8gZW5jbG9zaW5nIHRyeSBzdGF0ZW1lbnQuXG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3sgdHJ5TG9jOiBcInJvb3RcIiB9XTtcbiAgICB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyk7XG4gICAgdGhpcy5yZXNldCh0cnVlKTtcbiAgfVxuXG4gIGV4cG9ydHMua2V5cyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuICAgIGtleXMucmV2ZXJzZSgpO1xuXG4gICAgLy8gUmF0aGVyIHRoYW4gcmV0dXJuaW5nIGFuIG9iamVjdCB3aXRoIGEgbmV4dCBtZXRob2QsIHdlIGtlZXBcbiAgICAvLyB0aGluZ3Mgc2ltcGxlIGFuZCByZXR1cm4gdGhlIG5leHQgZnVuY3Rpb24gaXRzZWxmLlxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgd2hpbGUgKGtleXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzLnBvcCgpO1xuICAgICAgICBpZiAoa2V5IGluIG9iamVjdCkge1xuICAgICAgICAgIG5leHQudmFsdWUgPSBrZXk7XG4gICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVG8gYXZvaWQgY3JlYXRpbmcgYW4gYWRkaXRpb25hbCBvYmplY3QsIHdlIGp1c3QgaGFuZyB0aGUgLnZhbHVlXG4gICAgICAvLyBhbmQgLmRvbmUgcHJvcGVydGllcyBvZmYgdGhlIG5leHQgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi4gVGhpc1xuICAgICAgLy8gYWxzbyBlbnN1cmVzIHRoYXQgdGhlIG1pbmlmaWVyIHdpbGwgbm90IGFub255bWl6ZSB0aGUgZnVuY3Rpb24uXG4gICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUubmV4dCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBpdGVyYWJsZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBpID0gLTEsIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgIHdoaWxlICgrK2kgPCBpdGVyYWJsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHtcbiAgICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldO1xuICAgICAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV4dC52YWx1ZSA9IHVuZGVmaW5lZCQxO1xuICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYW4gaXRlcmF0b3Igd2l0aCBubyB2YWx1ZXMuXG4gICAgcmV0dXJuIHsgbmV4dDogZG9uZVJlc3VsdCB9O1xuICB9XG4gIGV4cG9ydHMudmFsdWVzID0gdmFsdWVzO1xuXG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCQxLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZCQxO1xuICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICB0aGlzLmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkJDE7XG5cbiAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpO1xuXG4gICAgICBpZiAoIXNraXBUZW1wUmVzZXQpIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgICAgLy8gTm90IHN1cmUgYWJvdXQgdGhlIG9wdGltYWwgb3JkZXIgb2YgdGhlc2UgY29uZGl0aW9uczpcbiAgICAgICAgICBpZiAobmFtZS5jaGFyQXQoMCkgPT09IFwidFwiICYmXG4gICAgICAgICAgICAgIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmXG4gICAgICAgICAgICAgICFpc05hTigrbmFtZS5zbGljZSgxKSkpIHtcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB1bmRlZmluZWQkMTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZCQxO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICEhIGNhdWdodDtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IFwicm9vdFwiKSB7XG4gICAgICAgICAgLy8gRXhjZXB0aW9uIHRocm93biBvdXRzaWRlIG9mIGFueSB0cnkgYmxvY2sgdGhhdCBjb3VsZCBoYW5kbGVcbiAgICAgICAgICAvLyBpdCwgc28gc2V0IHRoZSBjb21wbGV0aW9uIHZhbHVlIG9mIHRoZSBlbnRpcmUgZnVuY3Rpb24gdG9cbiAgICAgICAgICAvLyB0aHJvdyB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpO1xuICAgICAgICAgIHZhciBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTtcblxuICAgICAgICAgIGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYWJydXB0OiBmdW5jdGlvbih0eXBlLCBhcmcpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJlxuICAgICAgICAgICAgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgIHZhciBmaW5hbGx5RW50cnkgPSBlbnRyeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZmluYWxseUVudHJ5ICYmXG4gICAgICAgICAgKHR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgICB0eXBlID09PSBcImNvbnRpbnVlXCIpICYmXG4gICAgICAgICAgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiZcbiAgICAgICAgICBhcmcgPD0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgLy8gSWdub3JlIHRoZSBmaW5hbGx5IGVudHJ5IGlmIGNvbnRyb2wgaXMgbm90IGp1bXBpbmcgdG8gYVxuICAgICAgICAvLyBsb2NhdGlvbiBvdXRzaWRlIHRoZSB0cnkvY2F0Y2ggYmxvY2suXG4gICAgICAgIGZpbmFsbHlFbnRyeSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9O1xuICAgICAgcmVjb3JkLnR5cGUgPSB0eXBlO1xuICAgICAgcmVjb3JkLmFyZyA9IGFyZztcblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSkge1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYztcbiAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XG4gICAgfSxcblxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZWNvcmQsIGFmdGVyTG9jKSB7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgIHJlY29yZC50eXBlID09PSBcImNvbnRpbnVlXCIpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gcmVjb3JkLmFyZztcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgdGhpcy5ydmFsID0gdGhpcy5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgIHRoaXMubmV4dCA9IFwiZW5kXCI7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiICYmIGFmdGVyTG9jKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IGFmdGVyTG9jO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9LFxuXG4gICAgZmluaXNoOiBmdW5jdGlvbihmaW5hbGx5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKTtcbiAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uKHRyeUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xuICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhyb3duO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBjb250ZXh0LmNhdGNoIG1ldGhvZCBtdXN0IG9ubHkgYmUgY2FsbGVkIHdpdGggYSBsb2NhdGlvblxuICAgICAgLy8gYXJndW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byBhIGtub3duIGNhdGNoIGJsb2NrLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xuICAgIH0sXG5cbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbihpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IHtcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksXG4gICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXG4gICAgICAgIG5leHRMb2M6IG5leHRMb2NcbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgLy8gRGVsaWJlcmF0ZWx5IGZvcmdldCB0aGUgbGFzdCBzZW50IHZhbHVlIHNvIHRoYXQgd2UgZG9uJ3RcbiAgICAgICAgLy8gYWNjaWRlbnRhbGx5IHBhc3MgaXQgb24gdG8gdGhlIGRlbGVnYXRlLlxuICAgICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZCQxO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH07XG5cbiAgLy8gUmVnYXJkbGVzcyBvZiB3aGV0aGVyIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZVxuICAvLyBvciBub3QsIHJldHVybiB0aGUgcnVudGltZSBvYmplY3Qgc28gdGhhdCB3ZSBjYW4gZGVjbGFyZSB0aGUgdmFyaWFibGVcbiAgLy8gcmVnZW5lcmF0b3JSdW50aW1lIGluIHRoZSBvdXRlciBzY29wZSwgd2hpY2ggYWxsb3dzIHRoaXMgbW9kdWxlIHRvIGJlXG4gIC8vIGluamVjdGVkIGVhc2lseSBieSBgYmluL3JlZ2VuZXJhdG9yIC0taW5jbHVkZS1ydW50aW1lIHNjcmlwdC5qc2AuXG4gIHJldHVybiBleHBvcnRzO1xuXG59KFxuICAvLyBJZiB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGUsIHVzZSBtb2R1bGUuZXhwb3J0c1xuICAvLyBhcyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIG5hbWVzcGFjZS4gT3RoZXJ3aXNlIGNyZWF0ZSBhIG5ldyBlbXB0eVxuICAvLyBvYmplY3QuIEVpdGhlciB3YXksIHRoZSByZXN1bHRpbmcgb2JqZWN0IHdpbGwgYmUgdXNlZCB0byBpbml0aWFsaXplXG4gIC8vIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgdmFyaWFibGUgYXQgdGhlIHRvcCBvZiB0aGlzIGZpbGUuXG4gICBtb2R1bGUuZXhwb3J0cyBcbikpO1xuXG50cnkge1xuICByZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xufSBjYXRjaCAoYWNjaWRlbnRhbFN0cmljdE1vZGUpIHtcbiAgLy8gVGhpcyBtb2R1bGUgc2hvdWxkIG5vdCBiZSBydW5uaW5nIGluIHN0cmljdCBtb2RlLCBzbyB0aGUgYWJvdmVcbiAgLy8gYXNzaWdubWVudCBzaG91bGQgYWx3YXlzIHdvcmsgdW5sZXNzIHNvbWV0aGluZyBpcyBtaXNjb25maWd1cmVkLiBKdXN0XG4gIC8vIGluIGNhc2UgcnVudGltZS5qcyBhY2NpZGVudGFsbHkgcnVucyBpbiBzdHJpY3QgbW9kZSwgd2UgY2FuIGVzY2FwZVxuICAvLyBzdHJpY3QgbW9kZSB1c2luZyBhIGdsb2JhbCBGdW5jdGlvbiBjYWxsLiBUaGlzIGNvdWxkIGNvbmNlaXZhYmx5IGZhaWxcbiAgLy8gaWYgYSBDb250ZW50IFNlY3VyaXR5IFBvbGljeSBmb3JiaWRzIHVzaW5nIEZ1bmN0aW9uLCBidXQgaW4gdGhhdCBjYXNlXG4gIC8vIHRoZSBwcm9wZXIgc29sdXRpb24gaXMgdG8gZml4IHRoZSBhY2NpZGVudGFsIHN0cmljdCBtb2RlIHByb2JsZW0uIElmXG4gIC8vIHlvdSd2ZSBtaXNjb25maWd1cmVkIHlvdXIgYnVuZGxlciB0byBmb3JjZSBzdHJpY3QgbW9kZSBhbmQgYXBwbGllZCBhXG4gIC8vIENTUCB0byBmb3JiaWQgRnVuY3Rpb24sIGFuZCB5b3UncmUgbm90IHdpbGxpbmcgdG8gZml4IGVpdGhlciBvZiB0aG9zZVxuICAvLyBwcm9ibGVtcywgcGxlYXNlIGRldGFpbCB5b3VyIHVuaXF1ZSBwcmVkaWNhbWVudCBpbiBhIEdpdEh1YiBpc3N1ZS5cbiAgRnVuY3Rpb24oXCJyXCIsIFwicmVnZW5lcmF0b3JSdW50aW1lID0gclwiKShydW50aW1lKTtcbn1cbn0pO1xuXG52YXIgaXNCcm93c2VyID0gdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJztcblxudmFyIGluamVjdFNjcmlwdCA9IGZ1bmN0aW9uIGluamVjdFNjcmlwdChfcmVmKSB7XG4gIHZhciB1cmwgPSBfcmVmLnVybCxcbiAgICAgIGlkID0gX3JlZi5pZCxcbiAgICAgIG5vbmNlID0gX3JlZi5ub25jZTtcblxuICBpZiAoIWlzQnJvd3Nlcikge1xuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoJ2RvY3VtZW50IGlzIHVuZGVmaW5lZCcpKTtcbiAgfVxuXG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiBpbmplY3RTY3JpcHRDYWxsYmFjayhyZXNvbHZlLCByZWplY3QpIHtcbiAgICB2YXIgZXhpc3RpbmdTY3JpcHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgdmFyIHdpbmRvd1dpdGhHb29nbGVNYXAgPSB3aW5kb3c7XG5cbiAgICBpZiAoZXhpc3RpbmdTY3JpcHQpIHtcbiAgICAgIC8vIFNhbWUgc2NyaXB0IGlkL3VybDoga2VlcCBzYW1lIHNjcmlwdFxuICAgICAgdmFyIGRhdGFTdGF0ZUF0dHJpYnV0ZSA9IGV4aXN0aW5nU2NyaXB0LmdldEF0dHJpYnV0ZSgnZGF0YS1zdGF0ZScpO1xuXG4gICAgICBpZiAoZXhpc3RpbmdTY3JpcHQuc3JjID09PSB1cmwgJiYgZGF0YVN0YXRlQXR0cmlidXRlICE9PSAnZXJyb3InKSB7XG4gICAgICAgIGlmIChkYXRhU3RhdGVBdHRyaWJ1dGUgPT09ICdyZWFkeScpIHtcbiAgICAgICAgICByZXR1cm4gcmVzb2x2ZShpZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIG9yaWdpbmFsSW5pdE1hcCA9IHdpbmRvd1dpdGhHb29nbGVNYXAuaW5pdE1hcDtcbiAgICAgICAgICB2YXIgb3JpZ2luYWxFcnJvckNhbGxiYWNrID0gZXhpc3RpbmdTY3JpcHQub25lcnJvcjtcblxuICAgICAgICAgIHdpbmRvd1dpdGhHb29nbGVNYXAuaW5pdE1hcCA9IGZ1bmN0aW9uIGluaXRNYXAoKSB7XG4gICAgICAgICAgICBpZiAob3JpZ2luYWxJbml0TWFwKSB7XG4gICAgICAgICAgICAgIG9yaWdpbmFsSW5pdE1hcCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXNvbHZlKGlkKTtcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgZXhpc3RpbmdTY3JpcHQub25lcnJvciA9IGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgIGlmIChvcmlnaW5hbEVycm9yQ2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgb3JpZ2luYWxFcnJvckNhbGxiYWNrKGVycik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgIH07XG5cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH0gLy8gU2FtZSBzY3JpcHQgaWQsIGJ1dCBlaXRoZXJcbiAgICAgIC8vIDEuIHJlcXVlc3RlZCBVUkwgaXMgZGlmZmVyZW50XG4gICAgICAvLyAyLiBzY3JpcHQgZmFpbGVkIHRvIGxvYWRcbiAgICAgIGVsc2Uge1xuICAgICAgICAgIGV4aXN0aW5nU2NyaXB0LnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgIHNjcmlwdC50eXBlID0gJ3RleHQvamF2YXNjcmlwdCc7XG4gICAgc2NyaXB0LnNyYyA9IHVybDtcbiAgICBzY3JpcHQuaWQgPSBpZDtcbiAgICBzY3JpcHQuYXN5bmMgPSB0cnVlO1xuICAgIHNjcmlwdC5ub25jZSA9IG5vbmNlO1xuXG4gICAgc2NyaXB0Lm9uZXJyb3IgPSBmdW5jdGlvbiBvbmVycm9yKGVycikge1xuICAgICAgc2NyaXB0LnNldEF0dHJpYnV0ZSgnZGF0YS1zdGF0ZScsICdlcnJvcicpO1xuICAgICAgcmVqZWN0KGVycik7XG4gICAgfTtcblxuICAgIHdpbmRvd1dpdGhHb29nbGVNYXAuaW5pdE1hcCA9IGZ1bmN0aW9uIG9ubG9hZCgpIHtcbiAgICAgIHNjcmlwdC5zZXRBdHRyaWJ1dGUoJ2RhdGEtc3RhdGUnLCAncmVhZHknKTtcbiAgICAgIHJlc29sdmUoaWQpO1xuICAgIH07XG5cbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gIH0pW1wiY2F0Y2hcIl0oZnVuY3Rpb24gKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ2luamVjdFNjcmlwdCBlcnJvcjogJywgZXJyKTtcbiAgICB0aHJvdyBlcnI7XG4gIH0pO1xufTtcblxudmFyIGlzUm9ib3RvU3R5bGUgPSBmdW5jdGlvbiBpc1JvYm90b1N0eWxlKGVsZW1lbnQpIHtcbiAgLy8gcm9ib3RvIGZvbnQgZG93bmxvYWRcbiAgaWYgKGVsZW1lbnQuaHJlZiAmJiBlbGVtZW50LmhyZWYuaW5kZXhPZignaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bycpID09PSAwKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gLy8gcm9ib3RvIHN0eWxlIGVsZW1lbnRzXG5cblxuICBpZiAoZWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdzdHlsZScgJiYgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtaWdub3JlXG4gIC8vIEB0cy1pZ25vcmVcbiAgZWxlbWVudC5zdHlsZVNoZWV0ICYmIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWlnbm9yZVxuICAvLyBAdHMtaWdub3JlXG4gIGVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ICYmIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWlnbm9yZVxuICAvLyBAdHMtaWdub3JlXG4gIGVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0LnJlcGxhY2UoJ1xcclxcbicsICcnKS5pbmRleE9mKCcuZ20tc3R5bGUnKSA9PT0gMCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWlnbm9yZVxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBlbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9ICcnO1xuICAgIHJldHVybiB0cnVlO1xuICB9IC8vIHJvYm90byBzdHlsZSBlbGVtZW50cyBmb3Igb3RoZXIgYnJvd3NlcnNcblxuXG4gIGlmIChlbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ3N0eWxlJyAmJiBlbGVtZW50LmlubmVySFRNTCAmJiBlbGVtZW50LmlubmVySFRNTC5yZXBsYWNlKCdcXHJcXG4nLCAnJykuaW5kZXhPZignLmdtLXN0eWxlJykgPT09IDApIHtcbiAgICBlbGVtZW50LmlubmVySFRNTCA9ICcnO1xuICAgIHJldHVybiB0cnVlO1xuICB9IC8vIHdoZW4gZ29vZ2xlIHRyaWVzIHRvIGFkZCBlbXB0eSBzdHlsZVxuXG5cbiAgaWYgKGVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnc3R5bGUnICYmIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWlnbm9yZVxuICAvLyBAdHMtaWdub3JlXG4gICFlbGVtZW50LnN0eWxlU2hlZXQgJiYgIWVsZW1lbnQuaW5uZXJIVE1MKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59OyAvLyBQcmV2ZW50aW5nIHRoZSBHb29nbGUgTWFwcyBsaWJyYXJ5IGZyb20gZG93bmxvYWRpbmcgYW4gZXh0cmEgZm9udFxuXG5cbnZhciBwcmV2ZW50R29vZ2xlRm9udHMgPSBmdW5jdGlvbiBwcmV2ZW50R29vZ2xlRm9udHMoKSB7XG4gIC8vIHdlIG92ZXJyaWRlIHRoZXNlIG1ldGhvZHMgb25seSBmb3Igb25lIHBhcnRpY3VsYXIgaGVhZCBlbGVtZW50XG4gIC8vIGRlZmF1bHQgbWV0aG9kcyBmb3Igb3RoZXIgZWxlbWVudHMgYXJlIG5vdCBhZmZlY3RlZFxuICB2YXIgaGVhZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF07XG4gIHZhciB0cnVlSW5zZXJ0QmVmb3JlID0gaGVhZC5pbnNlcnRCZWZvcmUuYmluZChoZWFkKTsgLy8gVE9ETzogYWRkaW5nIHJldHVybiBiZWZvcmUgcmVmbGVjdCBzb2x2ZXMgdGhlIFRTIGlzc3VlXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWlnbm9yZVxuICAvLyBAdHMtaWdub3JlXG5cbiAgaGVhZC5pbnNlcnRCZWZvcmUgPSBmdW5jdGlvbiBpbnNlcnRCZWZvcmUobmV3RWxlbWVudCwgcmVmZXJlbmNlRWxlbWVudCkge1xuICAgIGlmICghaXNSb2JvdG9TdHlsZShuZXdFbGVtZW50KSkge1xuICAgICAgUmVmbGVjdC5hcHBseSh0cnVlSW5zZXJ0QmVmb3JlLCBoZWFkLCBbbmV3RWxlbWVudCwgcmVmZXJlbmNlRWxlbWVudF0pO1xuICAgIH1cbiAgfTtcblxuICB2YXIgdHJ1ZUFwcGVuZCA9IGhlYWQuYXBwZW5kQ2hpbGQuYmluZChoZWFkKTsgLy8gVE9ETzogYWRkaW5nIHJldHVybiBiZWZvcmUgcmVmbGVjdCBzb2x2ZXMgdGhlIFRTIGlzc3VlXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWlnbm9yZVxuICAvLyBAdHMtaWdub3JlXG5cbiAgaGVhZC5hcHBlbmRDaGlsZCA9IGZ1bmN0aW9uIGFwcGVuZENoaWxkKHRleHROb2RlKSB7XG4gICAgaWYgKCFpc1JvYm90b1N0eWxlKHRleHROb2RlKSkge1xuICAgICAgUmVmbGVjdC5hcHBseSh0cnVlQXBwZW5kLCBoZWFkLCBbdGV4dE5vZGVdKTtcbiAgICB9XG4gIH07XG59O1xuXG5mdW5jdGlvbiBtYWtlTG9hZFNjcmlwdFVybChfcmVmKSB7XG4gIHZhciBnb29nbGVNYXBzQXBpS2V5ID0gX3JlZi5nb29nbGVNYXBzQXBpS2V5LFxuICAgICAgZ29vZ2xlTWFwc0NsaWVudElkID0gX3JlZi5nb29nbGVNYXBzQ2xpZW50SWQsXG4gICAgICBfcmVmJHZlcnNpb24gPSBfcmVmLnZlcnNpb24sXG4gICAgICB2ZXJzaW9uID0gX3JlZiR2ZXJzaW9uID09PSB2b2lkIDAgPyAnd2Vla2x5JyA6IF9yZWYkdmVyc2lvbixcbiAgICAgIGxhbmd1YWdlID0gX3JlZi5sYW5ndWFnZSxcbiAgICAgIHJlZ2lvbiA9IF9yZWYucmVnaW9uLFxuICAgICAgbGlicmFyaWVzID0gX3JlZi5saWJyYXJpZXMsXG4gICAgICBjaGFubmVsID0gX3JlZi5jaGFubmVsLFxuICAgICAgbWFwSWRzID0gX3JlZi5tYXBJZHM7XG4gIHZhciBwYXJhbXMgPSBbXTtcbiAgIShnb29nbGVNYXBzQXBpS2V5ICYmIGdvb2dsZU1hcHNDbGllbnRJZCB8fCAhKGdvb2dsZU1hcHNBcGlLZXkgJiYgZ29vZ2xlTWFwc0NsaWVudElkKSkgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBpbnZhcmlhbnQoZmFsc2UsICdZb3UgbmVlZCB0byBzcGVjaWZ5IGVpdGhlciBnb29nbGVNYXBzQXBpS2V5IG9yIGdvb2dsZU1hcHNDbGllbnRJZCBmb3IgQHJlYWN0LWdvb2dsZS1tYXBzL2FwaSBsb2FkIHNjcmlwdCB0byB3b3JrLiBZb3UgY2Fubm90IHVzZSBib3RoIGF0IHRoZSBzYW1lIHRpbWUuJykgOiBpbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuXG4gIGlmIChnb29nbGVNYXBzQXBpS2V5KSB7XG4gICAgcGFyYW1zLnB1c2goXCJrZXk9XCIgKyBnb29nbGVNYXBzQXBpS2V5KTtcbiAgfSBlbHNlIGlmIChnb29nbGVNYXBzQ2xpZW50SWQpIHtcbiAgICBwYXJhbXMucHVzaChcImNsaWVudD1cIiArIGdvb2dsZU1hcHNDbGllbnRJZCk7XG4gIH1cblxuICBpZiAodmVyc2lvbikge1xuICAgIHBhcmFtcy5wdXNoKFwidj1cIiArIHZlcnNpb24pO1xuICB9XG5cbiAgaWYgKGxhbmd1YWdlKSB7XG4gICAgcGFyYW1zLnB1c2goXCJsYW5ndWFnZT1cIiArIGxhbmd1YWdlKTtcbiAgfVxuXG4gIGlmIChyZWdpb24pIHtcbiAgICBwYXJhbXMucHVzaChcInJlZ2lvbj1cIiArIHJlZ2lvbik7XG4gIH1cblxuICBpZiAobGlicmFyaWVzICYmIGxpYnJhcmllcy5sZW5ndGgpIHtcbiAgICBwYXJhbXMucHVzaChcImxpYnJhcmllcz1cIiArIGxpYnJhcmllcy5zb3J0KCkuam9pbignLCcpKTtcbiAgfVxuXG4gIGlmIChjaGFubmVsKSB7XG4gICAgcGFyYW1zLnB1c2goXCJjaGFubmVsPVwiICsgY2hhbm5lbCk7XG4gIH1cblxuICBpZiAobWFwSWRzICYmIG1hcElkcy5sZW5ndGgpIHtcbiAgICBwYXJhbXMucHVzaChcIm1hcF9pZHM9XCIgKyBtYXBJZHMuam9pbignLCcpKTtcbiAgfVxuXG4gIHBhcmFtcy5wdXNoKCdjYWxsYmFjaz1pbml0TWFwJyk7XG4gIHJldHVybiBcImh0dHBzOi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9qcz9cIiArIHBhcmFtcy5qb2luKCcmJyk7XG59XG5cbnZhciBjbGVhbmluZ1VwID0gZmFsc2U7XG5mdW5jdGlvbiBEZWZhdWx0TG9hZGluZ0VsZW1lbnQoKSB7XG4gIHJldHVybiBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsIFwiTG9hZGluZy4uLlwiKTtcbn1cbnZhciBkZWZhdWx0TG9hZFNjcmlwdFByb3BzID0ge1xuICBpZDogJ3NjcmlwdC1sb2FkZXInLFxuICB2ZXJzaW9uOiAnd2Vla2x5J1xufTtcblxudmFyIExvYWRTY3JpcHQgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9SZWFjdCRQdXJlQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKExvYWRTY3JpcHQsIF9SZWFjdCRQdXJlQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBMb2FkU2NyaXB0KCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIF90aGlzID0gX1JlYWN0JFB1cmVDb21wb25lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIF90aGlzLmNoZWNrID0gY3JlYXRlUmVmKCk7XG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBsb2FkZWQ6IGZhbHNlXG4gICAgfTtcblxuICAgIF90aGlzLmNsZWFudXBDYWxsYmFjayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIGRlbGV0ZSB3aW5kb3cuZ29vZ2xlLm1hcHM7XG5cbiAgICAgIF90aGlzLmluamVjdFNjcmlwdCgpO1xuICAgIH07XG5cbiAgICBfdGhpcy5pc0NsZWFuaW5nVXAgPVxuICAgIC8qI19fUFVSRV9fKi9cbiAgICBfYXN5bmNUb0dlbmVyYXRvcihcbiAgICAvKiNfX1BVUkVfXyovXG4gICAgcnVudGltZV8xLm1hcmsoZnVuY3Rpb24gX2NhbGxlZSgpIHtcbiAgICAgIHZhciBwcm9taXNlQ2FsbGJhY2s7XG4gICAgICByZXR1cm4gcnVudGltZV8xLndyYXAoZnVuY3Rpb24gX2NhbGxlZSQoX2NvbnRleHQpIHtcbiAgICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgICBzd2l0Y2ggKF9jb250ZXh0LnByZXYgPSBfY29udGV4dC5uZXh0KSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgIHByb21pc2VDYWxsYmFjayA9IGZ1bmN0aW9uIF9yZWYyKHJlc29sdmUpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWNsZWFuaW5nVXApIHtcbiAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgaWYgKGlzQnJvd3Nlcikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdGltZXIgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoZnVuY3Rpb24gaW50ZXJ2YWwoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKCFjbGVhbmluZ1VwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuY2xlYXJJbnRlcnZhbCh0aW1lcik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LCAxKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0LmFicnVwdChcInJldHVyblwiLCBuZXcgUHJvbWlzZShwcm9taXNlQ2FsbGJhY2spKTtcblxuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQuc3RvcCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSwgX2NhbGxlZSk7XG4gICAgfSkpO1xuXG4gICAgX3RoaXMuY2xlYW51cCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGNsZWFuaW5nVXAgPSB0cnVlO1xuICAgICAgdmFyIHNjcmlwdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKF90aGlzLnByb3BzLmlkKTtcblxuICAgICAgaWYgKHNjcmlwdCAmJiBzY3JpcHQucGFyZW50Tm9kZSkge1xuICAgICAgICBzY3JpcHQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzY3JpcHQpO1xuICAgICAgfVxuXG4gICAgICBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2NyaXB0JykpLmZpbHRlcihmdW5jdGlvbiBmaWx0ZXIoc2NyaXB0KSB7XG4gICAgICAgIHJldHVybiB0eXBlb2Ygc2NyaXB0LnNyYyA9PT0gJ3N0cmluZycgJiYgc2NyaXB0LnNyYy5pbmNsdWRlcygnbWFwcy5nb29nbGVhcGlzJyk7XG4gICAgICB9KS5mb3JFYWNoKGZ1bmN0aW9uIGZvckVhY2goc2NyaXB0KSB7XG4gICAgICAgIGlmIChzY3JpcHQucGFyZW50Tm9kZSkge1xuICAgICAgICAgIHNjcmlwdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHNjcmlwdCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2xpbmsnKSkuZmlsdGVyKGZ1bmN0aW9uIGZpbHRlcihsaW5rKSB7XG4gICAgICAgIHJldHVybiBsaW5rLmhyZWYgPT09ICdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvOjMwMCw0MDAsNTAwLDcwMHxHb29nbGUrU2Fucyc7XG4gICAgICB9KS5mb3JFYWNoKGZ1bmN0aW9uIGZvckVhY2gobGluaykge1xuICAgICAgICBpZiAobGluay5wYXJlbnROb2RlKSB7XG4gICAgICAgICAgbGluay5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGxpbmspO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzdHlsZScpKS5maWx0ZXIoZnVuY3Rpb24gZmlsdGVyKHN0eWxlKSB7XG4gICAgICAgIHJldHVybiBzdHlsZS5pbm5lclRleHQgIT09IHVuZGVmaW5lZCAmJiBzdHlsZS5pbm5lclRleHQubGVuZ3RoID4gMCAmJiBzdHlsZS5pbm5lclRleHQuaW5jbHVkZXMoJy5nbS0nKTtcbiAgICAgIH0pLmZvckVhY2goZnVuY3Rpb24gZm9yRWFjaChzdHlsZSkge1xuICAgICAgICBpZiAoc3R5bGUucGFyZW50Tm9kZSkge1xuICAgICAgICAgIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgX3RoaXMuaW5qZWN0U2NyaXB0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKF90aGlzLnByb3BzLnByZXZlbnRHb29nbGVGb250c0xvYWRpbmcpIHtcbiAgICAgICAgcHJldmVudEdvb2dsZUZvbnRzKCk7XG4gICAgICB9XG5cbiAgICAgICEhIV90aGlzLnByb3BzLmlkID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gaW52YXJpYW50KGZhbHNlLCAnTG9hZFNjcmlwdCByZXF1aXJlcyBcImlkXCIgcHJvcCB0byBiZSBhIHN0cmluZzogJXMnLCBfdGhpcy5wcm9wcy5pZCkgOiBpbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICAgICAgdmFyIGluamVjdFNjcmlwdE9wdGlvbnMgPSB7XG4gICAgICAgIGlkOiBfdGhpcy5wcm9wcy5pZCxcbiAgICAgICAgbm9uY2U6IF90aGlzLnByb3BzLm5vbmNlLFxuICAgICAgICB1cmw6IG1ha2VMb2FkU2NyaXB0VXJsKF90aGlzLnByb3BzKVxuICAgICAgfTtcbiAgICAgIGluamVjdFNjcmlwdChpbmplY3RTY3JpcHRPcHRpb25zKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKF90aGlzLnByb3BzLm9uTG9hZCkge1xuICAgICAgICAgIF90aGlzLnByb3BzLm9uTG9hZCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgX3RoaXMuc2V0U3RhdGUoZnVuY3Rpb24gc2V0TG9hZGVkKCkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBsb2FkZWQ6IHRydWVcbiAgICAgICAgICB9O1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9KVtcImNhdGNoXCJdKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgaWYgKF90aGlzLnByb3BzLm9uRXJyb3IpIHtcbiAgICAgICAgICBfdGhpcy5wcm9wcy5vbkVycm9yKGVycik7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmVycm9yKFwiXFxuICAgICAgICAgIFRoZXJlIGhhcyBiZWVuIGFuIEVycm9yIHdpdGggbG9hZGluZyBHb29nbGUgTWFwcyBBUEkgc2NyaXB0LCBwbGVhc2UgY2hlY2sgdGhhdCB5b3UgcHJvdmlkZWQgY29ycmVjdCBnb29nbGUgQVBJIGtleSAoXCIgKyAoX3RoaXMucHJvcHMuZ29vZ2xlTWFwc0FwaUtleSB8fCAnLScpICsgXCIpIG9yIENsaWVudCBJRCAoXCIgKyAoX3RoaXMucHJvcHMuZ29vZ2xlTWFwc0NsaWVudElkIHx8ICctJykgKyBcIikgdG8gPExvYWRTY3JpcHQgLz5cXG4gICAgICAgICAgT3RoZXJ3aXNlIGl0IGlzIGEgTmV0d29yayBpc3N1ZS5cXG4gICAgICAgIFwiKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gTG9hZFNjcmlwdC5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgaWYgKGlzQnJvd3Nlcikge1xuICAgICAgaWYgKHdpbmRvdy5nb29nbGUgJiYgd2luZG93Lmdvb2dsZS5tYXBzICYmICFjbGVhbmluZ1VwKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ2dvb2dsZSBhcGkgaXMgYWxyZWFkeSBwcmVzZW50ZWQnKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmlzQ2xlYW5pbmdVcCgpLnRoZW4odGhpcy5pbmplY3RTY3JpcHQpW1wiY2F0Y2hcIl0oZnVuY3Rpb24gZXJyb3IoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGF0IGluamVjdGluZyBzY3JpcHQgYWZ0ZXIgY2xlYW5pbmcgdXA6ICcsIGVycik7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmNvbXBvbmVudERpZFVwZGF0ZSA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5saWJyYXJpZXMgIT09IHByZXZQcm9wcy5saWJyYXJpZXMpIHtcbiAgICAgIGNvbnNvbGUud2FybignUGVyZm9ybWFuY2Ugd2FybmluZyEgTG9hZFNjcmlwdCBoYXMgYmVlbiByZWxvYWRlZCB1bmludGVudGlvbmFsbHkhIFlvdSBzaG91bGQgbm90IHBhc3MgYGxpYnJhcmllc2AgcHJvcCBhcyBuZXcgYXJyYXkuIFBsZWFzZSBrZWVwIGFuIGFycmF5IG9mIGxpYnJhcmllcyBhcyBzdGF0aWMgY2xhc3MgcHJvcGVydHkgZm9yIENvbXBvbmVudHMgYW5kIFB1cmVDb21wb25lbnRzLCBvciBqdXN0IGEgY29uc3QgdmFyaWFibGUgb3V0c2lkZSBvZiBjb21wb25lbnQsIG9yIHNvbWV3aGVyZSBpbiBjb25maWcgZmlsZXMgb3IgRU5WIHZhcmlhYmxlcycpO1xuICAgIH1cblxuICAgIGlmIChpc0Jyb3dzZXIgJiYgcHJldlByb3BzLmxhbmd1YWdlICE9PSB0aGlzLnByb3BzLmxhbmd1YWdlKSB7XG4gICAgICB0aGlzLmNsZWFudXAoKTsgLy8gVE9ETzogcmVmYWN0b3IgdG8gdXNlIGdEU0ZQIG1heWJlLi4uIHdhaXQgZm9yIGhvb2tzIHJlZmFjdG9yaW5nLlxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L25vLWRpZC11cGRhdGUtc2V0LXN0YXRlXG5cbiAgICAgIHRoaXMuc2V0U3RhdGUoZnVuY3Rpb24gc2V0TG9hZGVkKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGxvYWRlZDogZmFsc2VcbiAgICAgICAgfTtcbiAgICAgIH0sIHRoaXMuY2xlYW51cENhbGxiYWNrKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICBpZiAoaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLmNsZWFudXAoKTtcblxuICAgICAgdmFyIHRpbWVvdXRDYWxsYmFjayA9IGZ1bmN0aW9uIHRpbWVvdXRDYWxsYmFjaygpIHtcbiAgICAgICAgaWYgKCFfdGhpczIuY2hlY2suY3VycmVudCkge1xuICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICBkZWxldGUgd2luZG93Lmdvb2dsZTtcbiAgICAgICAgICBjbGVhbmluZ1VwID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KHRpbWVvdXRDYWxsYmFjaywgMSk7XG5cbiAgICAgIGlmICh0aGlzLnByb3BzLm9uVW5tb3VudCkge1xuICAgICAgICB0aGlzLnByb3BzLm9uVW5tb3VudCgpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KEZyYWdtZW50LCBudWxsLCBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgIHJlZjogdGhpcy5jaGVja1xuICAgIH0pLCB0aGlzLnN0YXRlLmxvYWRlZCA/IHRoaXMucHJvcHMuY2hpbGRyZW4gOiB0aGlzLnByb3BzLmxvYWRpbmdFbGVtZW50IHx8IGNyZWF0ZUVsZW1lbnQoRGVmYXVsdExvYWRpbmdFbGVtZW50LCBudWxsKSk7XG4gIH07XG5cbiAgcmV0dXJuIExvYWRTY3JpcHQ7XG59KFB1cmVDb21wb25lbnQpO1xuXG5Mb2FkU2NyaXB0LmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRMb2FkU2NyaXB0UHJvcHM7XG5cbi8qIGVzbGludC1kaXNhYmxlIGZpbGVuYW1lcy9tYXRjaC1yZWdleCAqL1xudmFyIHByZXZpb3VzbHlMb2FkZWRVcmw7XG5mdW5jdGlvbiB1c2VMb2FkU2NyaXB0KF9yZWYpIHtcbiAgdmFyIF9yZWYkaWQgPSBfcmVmLmlkLFxuICAgICAgaWQgPSBfcmVmJGlkID09PSB2b2lkIDAgPyBkZWZhdWx0TG9hZFNjcmlwdFByb3BzLmlkIDogX3JlZiRpZCxcbiAgICAgIF9yZWYkdmVyc2lvbiA9IF9yZWYudmVyc2lvbixcbiAgICAgIHZlcnNpb24gPSBfcmVmJHZlcnNpb24gPT09IHZvaWQgMCA/IGRlZmF1bHRMb2FkU2NyaXB0UHJvcHMudmVyc2lvbiA6IF9yZWYkdmVyc2lvbixcbiAgICAgIG5vbmNlID0gX3JlZi5ub25jZSxcbiAgICAgIGdvb2dsZU1hcHNBcGlLZXkgPSBfcmVmLmdvb2dsZU1hcHNBcGlLZXksXG4gICAgICBnb29nbGVNYXBzQ2xpZW50SWQgPSBfcmVmLmdvb2dsZU1hcHNDbGllbnRJZCxcbiAgICAgIGxhbmd1YWdlID0gX3JlZi5sYW5ndWFnZSxcbiAgICAgIHJlZ2lvbiA9IF9yZWYucmVnaW9uLFxuICAgICAgbGlicmFyaWVzID0gX3JlZi5saWJyYXJpZXMsXG4gICAgICBwcmV2ZW50R29vZ2xlRm9udHNMb2FkaW5nID0gX3JlZi5wcmV2ZW50R29vZ2xlRm9udHNMb2FkaW5nLFxuICAgICAgY2hhbm5lbCA9IF9yZWYuY2hhbm5lbCxcbiAgICAgIG1hcElkcyA9IF9yZWYubWFwSWRzO1xuICB2YXIgaXNNb3VudGVkID0gdXNlUmVmKGZhbHNlKTtcblxuICB2YXIgX1JlYWN0JHVzZVN0YXRlID0gdXNlU3RhdGUoZmFsc2UpLFxuICAgICAgaXNMb2FkZWQgPSBfUmVhY3QkdXNlU3RhdGVbMF0sXG4gICAgICBzZXRMb2FkZWQgPSBfUmVhY3QkdXNlU3RhdGVbMV07XG5cbiAgdmFyIF9SZWFjdCR1c2VTdGF0ZTIgPSB1c2VTdGF0ZSh1bmRlZmluZWQpLFxuICAgICAgbG9hZEVycm9yID0gX1JlYWN0JHVzZVN0YXRlMlswXSxcbiAgICAgIHNldExvYWRFcnJvciA9IF9SZWFjdCR1c2VTdGF0ZTJbMV07XG5cbiAgdXNlRWZmZWN0KGZ1bmN0aW9uIHRyYWNrTW91bnRlZFN0YXRlKCkge1xuICAgIGlzTW91bnRlZC5jdXJyZW50ID0gdHJ1ZTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgaXNNb3VudGVkLmN1cnJlbnQgPSBmYWxzZTtcbiAgICB9O1xuICB9LCBbXSk7XG4gIHVzZUVmZmVjdChmdW5jdGlvbiBhcHBseVByZXZlbnRHb29nbGVGb250cygpIHtcbiAgICBpZiAoaXNCcm93c2VyICYmIHByZXZlbnRHb29nbGVGb250c0xvYWRpbmcpIHtcbiAgICAgIHByZXZlbnRHb29nbGVGb250cygpO1xuICAgIH1cbiAgfSwgW3ByZXZlbnRHb29nbGVGb250c0xvYWRpbmddKTtcbiAgdXNlRWZmZWN0KGZ1bmN0aW9uIHZhbGlkYXRlTG9hZGVkU3RhdGUoKSB7XG4gICAgaWYgKGlzTG9hZGVkKSB7XG4gICAgICAhISF3aW5kb3cuZ29vZ2xlID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gaW52YXJpYW50KGZhbHNlLCAndXNlTG9hZFNjcmlwdCB3YXMgbWFya2VkIGFzIGxvYWRlZCwgYnV0IHdpbmRvdy5nb29nbGUgaXMgbm90IHByZXNlbnQuIFNvbWV0aGluZyB3ZW50IHdyb25nLicpIDogaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcbiAgICB9XG4gIH0sIFtpc0xvYWRlZF0pO1xuICB2YXIgdXJsID0gbWFrZUxvYWRTY3JpcHRVcmwoe1xuICAgIHZlcnNpb246IHZlcnNpb24sXG4gICAgZ29vZ2xlTWFwc0FwaUtleTogZ29vZ2xlTWFwc0FwaUtleSxcbiAgICBnb29nbGVNYXBzQ2xpZW50SWQ6IGdvb2dsZU1hcHNDbGllbnRJZCxcbiAgICBsYW5ndWFnZTogbGFuZ3VhZ2UsXG4gICAgcmVnaW9uOiByZWdpb24sXG4gICAgbGlicmFyaWVzOiBsaWJyYXJpZXMsXG4gICAgY2hhbm5lbDogY2hhbm5lbCxcbiAgICBtYXBJZHM6IG1hcElkc1xuICB9KTtcbiAgdXNlRWZmZWN0KGZ1bmN0aW9uIGxvYWRTY3JpcHRBbmRNb2RpZnlMb2FkZWRTdGF0ZSgpIHtcbiAgICBpZiAoIWlzQnJvd3Nlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldExvYWRlZElmTW91bnRlZCgpIHtcbiAgICAgIGlmIChpc01vdW50ZWQuY3VycmVudCkge1xuICAgICAgICBzZXRMb2FkZWQodHJ1ZSk7XG4gICAgICAgIHByZXZpb3VzbHlMb2FkZWRVcmwgPSB1cmw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHdpbmRvdy5nb29nbGUgJiYgd2luZG93Lmdvb2dsZS5tYXBzICYmIHByZXZpb3VzbHlMb2FkZWRVcmwgPT09IHVybCkge1xuICAgICAgc2V0TG9hZGVkSWZNb3VudGVkKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaW5qZWN0U2NyaXB0KHtcbiAgICAgIGlkOiBpZCxcbiAgICAgIHVybDogdXJsLFxuICAgICAgbm9uY2U6IG5vbmNlXG4gICAgfSkudGhlbihzZXRMb2FkZWRJZk1vdW50ZWQpW1wiY2F0Y2hcIl0oZnVuY3Rpb24gaGFuZGxlSW5qZWN0RXJyb3IoZXJyKSB7XG4gICAgICBpZiAoaXNNb3VudGVkLmN1cnJlbnQpIHtcbiAgICAgICAgc2V0TG9hZEVycm9yKGVycik7XG4gICAgICB9XG5cbiAgICAgIGNvbnNvbGUud2FybihcIlxcbiAgICAgICAgVGhlcmUgaGFzIGJlZW4gYW4gRXJyb3Igd2l0aCBsb2FkaW5nIEdvb2dsZSBNYXBzIEFQSSBzY3JpcHQsIHBsZWFzZSBjaGVjayB0aGF0IHlvdSBwcm92aWRlZCBjb3JyZWN0IGdvb2dsZSBBUEkga2V5IChcIiArIChnb29nbGVNYXBzQXBpS2V5IHx8ICctJykgKyBcIikgb3IgQ2xpZW50IElEIChcIiArIChnb29nbGVNYXBzQ2xpZW50SWQgfHwgJy0nKSArIFwiKVxcbiAgICAgICAgT3RoZXJ3aXNlIGl0IGlzIGEgTmV0d29yayBpc3N1ZS5cXG4gICAgICBcIik7XG4gICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgfSk7XG4gIH0sIFtpZCwgdXJsLCBub25jZV0pO1xuICB2YXIgcHJldkxpYnJhcmllcyA9IHVzZVJlZigpO1xuICB1c2VFZmZlY3QoZnVuY3Rpb24gY2hlY2tQZXJmb3JtYW5jZSgpIHtcbiAgICBpZiAocHJldkxpYnJhcmllcy5jdXJyZW50ICYmIGxpYnJhcmllcyAhPT0gcHJldkxpYnJhcmllcy5jdXJyZW50KSB7XG4gICAgICBjb25zb2xlLndhcm4oJ1BlcmZvcm1hbmNlIHdhcm5pbmchIExvYWRTY3JpcHQgaGFzIGJlZW4gcmVsb2FkZWQgdW5pbnRlbnRpb25hbGx5ISBZb3Ugc2hvdWxkIG5vdCBwYXNzIGBsaWJyYXJpZXNgIHByb3AgYXMgbmV3IGFycmF5LiBQbGVhc2Uga2VlcCBhbiBhcnJheSBvZiBsaWJyYXJpZXMgYXMgc3RhdGljIGNsYXNzIHByb3BlcnR5IGZvciBDb21wb25lbnRzIGFuZCBQdXJlQ29tcG9uZW50cywgb3IganVzdCBhIGNvbnN0IHZhcmlhYmxlIG91dHNpZGUgb2YgY29tcG9uZW50LCBvciBzb21ld2hlcmUgaW4gY29uZmlnIGZpbGVzIG9yIEVOViB2YXJpYWJsZXMnKTtcbiAgICB9XG5cbiAgICBwcmV2TGlicmFyaWVzLmN1cnJlbnQgPSBsaWJyYXJpZXM7XG4gIH0sIFtsaWJyYXJpZXNdKTtcbiAgcmV0dXJuIHtcbiAgICBpc0xvYWRlZDogaXNMb2FkZWQsXG4gICAgbG9hZEVycm9yOiBsb2FkRXJyb3IsXG4gICAgdXJsOiB1cmxcbiAgfTtcbn1cblxudmFyIGRlZmF1bHRMb2FkaW5nRWxlbWVudCA9XG4vKiNfX1BVUkVfXyovXG5jcmVhdGVFbGVtZW50KERlZmF1bHRMb2FkaW5nRWxlbWVudCwgbnVsbCk7XG5cbmZ1bmN0aW9uIExvYWRTY3JpcHROZXh0KF9yZWYpIHtcbiAgdmFyIGxvYWRpbmdFbGVtZW50ID0gX3JlZi5sb2FkaW5nRWxlbWVudCxcbiAgICAgIG9uTG9hZCA9IF9yZWYub25Mb2FkLFxuICAgICAgb25FcnJvciA9IF9yZWYub25FcnJvcixcbiAgICAgIG9uVW5tb3VudCA9IF9yZWYub25Vbm1vdW50LFxuICAgICAgY2hpbGRyZW4gPSBfcmVmLmNoaWxkcmVuLFxuICAgICAgaG9va09wdGlvbnMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfcmVmLCBbXCJsb2FkaW5nRWxlbWVudFwiLCBcIm9uTG9hZFwiLCBcIm9uRXJyb3JcIiwgXCJvblVubW91bnRcIiwgXCJjaGlsZHJlblwiXSk7XG5cbiAgdmFyIF91c2VMb2FkU2NyaXB0ID0gdXNlTG9hZFNjcmlwdChob29rT3B0aW9ucyksXG4gICAgICBpc0xvYWRlZCA9IF91c2VMb2FkU2NyaXB0LmlzTG9hZGVkLFxuICAgICAgbG9hZEVycm9yID0gX3VzZUxvYWRTY3JpcHQubG9hZEVycm9yO1xuXG4gIHVzZUVmZmVjdChmdW5jdGlvbiBoYW5kbGVPbkxvYWQoKSB7XG4gICAgaWYgKGlzTG9hZGVkICYmIHR5cGVvZiBvbkxvYWQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIG9uTG9hZCgpO1xuICAgIH1cbiAgfSwgW2lzTG9hZGVkLCBvbkxvYWRdKTtcbiAgdXNlRWZmZWN0KGZ1bmN0aW9uIGhhbmRsZU9uRXJyb3IoKSB7XG4gICAgaWYgKGxvYWRFcnJvciAmJiB0eXBlb2Ygb25FcnJvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgb25FcnJvcihsb2FkRXJyb3IpO1xuICAgIH1cbiAgfSwgW2xvYWRFcnJvciwgb25FcnJvcl0pO1xuICB1c2VFZmZlY3QoZnVuY3Rpb24gaGFuZGxlT25Vbm1vdW50KCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAob25Vbm1vdW50KSB7XG4gICAgICAgIG9uVW5tb3VudCgpO1xuICAgICAgfVxuICAgIH07XG4gIH0sIFtvblVubW91bnRdKTtcbiAgcmV0dXJuIGlzTG9hZGVkID8gY2hpbGRyZW4gOiBsb2FkaW5nRWxlbWVudCB8fCBkZWZhdWx0TG9hZGluZ0VsZW1lbnQ7XG59XG5cbnZhciBMb2FkU2NyaXB0TmV4dCQxID0gLyojX19QVVJFX18qL1xubWVtbyhMb2FkU2NyaXB0TmV4dCk7XG5cbi8qIGVzbGludC1kaXNhYmxlIGZpbGVuYW1lcy9tYXRjaC1yZWdleCAqL1xuZnVuY3Rpb24gdXNlSnNBcGlMb2FkZXIoX3JlZikge1xuICB2YXIgX3JlZiRpZCA9IF9yZWYuaWQsXG4gICAgICBpZCA9IF9yZWYkaWQgPT09IHZvaWQgMCA/IGRlZmF1bHRMb2FkU2NyaXB0UHJvcHMuaWQgOiBfcmVmJGlkLFxuICAgICAgX3JlZiR2ZXJzaW9uID0gX3JlZi52ZXJzaW9uLFxuICAgICAgdmVyc2lvbiA9IF9yZWYkdmVyc2lvbiA9PT0gdm9pZCAwID8gZGVmYXVsdExvYWRTY3JpcHRQcm9wcy52ZXJzaW9uIDogX3JlZiR2ZXJzaW9uLFxuICAgICAgbm9uY2UgPSBfcmVmLm5vbmNlLFxuICAgICAgZ29vZ2xlTWFwc0FwaUtleSA9IF9yZWYuZ29vZ2xlTWFwc0FwaUtleSxcbiAgICAgIGxhbmd1YWdlID0gX3JlZi5sYW5ndWFnZSxcbiAgICAgIHJlZ2lvbiA9IF9yZWYucmVnaW9uLFxuICAgICAgbGlicmFyaWVzID0gX3JlZi5saWJyYXJpZXMsXG4gICAgICBwcmV2ZW50R29vZ2xlRm9udHNMb2FkaW5nID0gX3JlZi5wcmV2ZW50R29vZ2xlRm9udHNMb2FkaW5nLFxuICAgICAgbWFwSWRzID0gX3JlZi5tYXBJZHM7XG5cbiAgdmFyIF9SZWFjdCR1c2VTdGF0ZSA9IHVzZVN0YXRlKGZhbHNlKSxcbiAgICAgIGlzTG9hZGVkID0gX1JlYWN0JHVzZVN0YXRlWzBdLFxuICAgICAgc2V0TG9hZGVkID0gX1JlYWN0JHVzZVN0YXRlWzFdO1xuXG4gIHZhciBfUmVhY3QkdXNlU3RhdGUyID0gdXNlU3RhdGUodW5kZWZpbmVkKSxcbiAgICAgIGxvYWRFcnJvciA9IF9SZWFjdCR1c2VTdGF0ZTJbMF0sXG4gICAgICBzZXRMb2FkRXJyb3IgPSBfUmVhY3QkdXNlU3RhdGUyWzFdO1xuXG4gIHZhciBsb2FkZXIgPSB1c2VNZW1vKGZ1bmN0aW9uIG1lbW8oKSB7XG4gICAgcmV0dXJuIG5ldyBMb2FkZXIoe1xuICAgICAgaWQ6IGlkLFxuICAgICAgYXBpS2V5OiBnb29nbGVNYXBzQXBpS2V5LFxuICAgICAgdmVyc2lvbjogdmVyc2lvbixcbiAgICAgIGxpYnJhcmllczogbGlicmFyaWVzLFxuICAgICAgbGFuZ3VhZ2U6IGxhbmd1YWdlLFxuICAgICAgcmVnaW9uOiByZWdpb24sXG4gICAgICBtYXBJZHM6IG1hcElkcyxcbiAgICAgIG5vbmNlOiBub25jZVxuICAgIH0pO1xuICB9LCBbaWQsIGdvb2dsZU1hcHNBcGlLZXksIHZlcnNpb24sIGxpYnJhcmllcywgbGFuZ3VhZ2UsIHJlZ2lvbiwgbWFwSWRzLCBub25jZV0pO1xuICB1c2VFZmZlY3QoZnVuY3Rpb24gZWZmZWN0KCkge1xuICAgIGlmIChpc0xvYWRlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSB7XG4gICAgICBsb2FkZXIubG9hZCgpLnRoZW4oZnVuY3Rpb24gdGhlbigpIHtcbiAgICAgICAgc2V0TG9hZGVkKHRydWUpO1xuICAgICAgfSlbXCJjYXRjaFwiXShmdW5jdGlvbiBvbnJlamVjdGVkKGVycm9yKSB7XG4gICAgICAgIHNldExvYWRFcnJvcihlcnJvcik7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIFtdKTtcbiAgdXNlRWZmZWN0KGZ1bmN0aW9uIGFwcGx5UHJldmVudEdvb2dsZUZvbnRzKCkge1xuICAgIGlmIChpc0Jyb3dzZXIgJiYgcHJldmVudEdvb2dsZUZvbnRzTG9hZGluZykge1xuICAgICAgcHJldmVudEdvb2dsZUZvbnRzKCk7XG4gICAgfVxuICB9LCBbcHJldmVudEdvb2dsZUZvbnRzTG9hZGluZ10pO1xuICB2YXIgcHJldkxpYnJhcmllcyA9IHVzZVJlZigpO1xuICB1c2VFZmZlY3QoZnVuY3Rpb24gZWZmZWN0KCkge1xuICAgIGlmIChwcmV2TGlicmFyaWVzLmN1cnJlbnQgJiYgbGlicmFyaWVzICE9PSBwcmV2TGlicmFyaWVzLmN1cnJlbnQpIHtcbiAgICAgIGNvbnNvbGUud2FybignUGVyZm9ybWFuY2Ugd2FybmluZyEgTG9hZFNjcmlwdCBoYXMgYmVlbiByZWxvYWRlZCB1bmludGVudGlvbmFsbHkhIFlvdSBzaG91bGQgbm90IHBhc3MgYGxpYnJhcmllc2AgcHJvcCBhcyBuZXcgYXJyYXkuIFBsZWFzZSBrZWVwIGFuIGFycmF5IG9mIGxpYnJhcmllcyBhcyBzdGF0aWMgY2xhc3MgcHJvcGVydHkgZm9yIENvbXBvbmVudHMgYW5kIFB1cmVDb21wb25lbnRzLCBvciBqdXN0IGEgY29uc3QgdmFyaWFibGUgb3V0c2lkZSBvZiBjb21wb25lbnQsIG9yIHNvbWV3aGVyZSBpbiBjb25maWcgZmlsZXMgb3IgRU5WIHZhcmlhYmxlcycpO1xuICAgIH1cblxuICAgIHByZXZMaWJyYXJpZXMuY3VycmVudCA9IGxpYnJhcmllcztcbiAgfSwgW2xpYnJhcmllc10pO1xuICByZXR1cm4ge1xuICAgIGlzTG9hZGVkOiBpc0xvYWRlZCxcbiAgICBsb2FkRXJyb3I6IGxvYWRFcnJvclxuICB9O1xufVxuXG52YXIgZXZlbnRNYXAkMSA9IHt9O1xudmFyIHVwZGF0ZXJNYXAkMSA9IHtcbiAgb3B0aW9uczogZnVuY3Rpb24gb3B0aW9ucyhpbnN0YW5jZSwgX29wdGlvbnMpIHtcbiAgICBpbnN0YW5jZS5zZXRPcHRpb25zKF9vcHRpb25zKTtcbiAgfVxufTtcbnZhciBUcmFmZmljTGF5ZXIgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9QdXJlQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKFRyYWZmaWNMYXllciwgX1B1cmVDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFRyYWZmaWNMYXllcigpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfdGhpcyA9IF9QdXJlQ29tcG9uZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHRyYWZmaWNMYXllcjogbnVsbFxuICAgIH07XG5cbiAgICBfdGhpcy5zZXRUcmFmZmljTGF5ZXJDYWxsYmFjayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChfdGhpcy5zdGF0ZS50cmFmZmljTGF5ZXIgIT09IG51bGwpIHtcbiAgICAgICAgaWYgKF90aGlzLnByb3BzLm9uTG9hZCkge1xuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWlnbm9yZVxuICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICBfdGhpcy5wcm9wcy5vbkxvYWQoX3RoaXMuc3RhdGUudHJhZmZpY0xheWVyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5yZWdpc3RlcmVkRXZlbnRzID0gW107XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IFRyYWZmaWNMYXllci5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdmFyIHRyYWZmaWNMYXllciA9IG5ldyBnb29nbGUubWFwcy5UcmFmZmljTGF5ZXIoX2V4dGVuZHMoe30sIHRoaXMucHJvcHMub3B0aW9ucyB8fCB7fSwge1xuICAgICAgbWFwOiB0aGlzLmNvbnRleHRcbiAgICB9KSk7XG4gICAgdGhpcy5yZWdpc3RlcmVkRXZlbnRzID0gYXBwbHlVcGRhdGVyc1RvUHJvcHNBbmRSZWdpc3RlckV2ZW50cyh7XG4gICAgICB1cGRhdGVyTWFwOiB1cGRhdGVyTWFwJDEsXG4gICAgICBldmVudE1hcDogZXZlbnRNYXAkMSxcbiAgICAgIHByZXZQcm9wczoge30sXG4gICAgICBuZXh0UHJvcHM6IHRoaXMucHJvcHMsXG4gICAgICBpbnN0YW5jZTogdHJhZmZpY0xheWVyXG4gICAgfSk7XG4gICAgdGhpcy5zZXRTdGF0ZShmdW5jdGlvbiBzZXRUcmFmZmljTGF5ZXIoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0cmFmZmljTGF5ZXI6IHRyYWZmaWNMYXllclxuICAgICAgfTtcbiAgICB9LCB0aGlzLnNldFRyYWZmaWNMYXllckNhbGxiYWNrKTtcbiAgfTtcblxuICBfcHJvdG8uY29tcG9uZW50RGlkVXBkYXRlID0gZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgIGlmICh0aGlzLnN0YXRlLnRyYWZmaWNMYXllciAhPT0gbnVsbCkge1xuICAgICAgdW5yZWdpc3RlckV2ZW50cyh0aGlzLnJlZ2lzdGVyZWRFdmVudHMpO1xuICAgICAgdGhpcy5yZWdpc3RlcmVkRXZlbnRzID0gYXBwbHlVcGRhdGVyc1RvUHJvcHNBbmRSZWdpc3RlckV2ZW50cyh7XG4gICAgICAgIHVwZGF0ZXJNYXA6IHVwZGF0ZXJNYXAkMSxcbiAgICAgICAgZXZlbnRNYXA6IGV2ZW50TWFwJDEsXG4gICAgICAgIHByZXZQcm9wczogcHJldlByb3BzLFxuICAgICAgICBuZXh0UHJvcHM6IHRoaXMucHJvcHMsXG4gICAgICAgIGluc3RhbmNlOiB0aGlzLnN0YXRlLnRyYWZmaWNMYXllclxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5jb21wb25lbnRXaWxsVW5tb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGlmICh0aGlzLnN0YXRlLnRyYWZmaWNMYXllciAhPT0gbnVsbCkge1xuICAgICAgaWYgKHRoaXMucHJvcHMub25Vbm1vdW50KSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWlnbm9yZVxuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHRoaXMucHJvcHMub25Vbm1vdW50KHRoaXMuc3RhdGUudHJhZmZpY0xheWVyKTtcbiAgICAgIH1cblxuICAgICAgdW5yZWdpc3RlckV2ZW50cyh0aGlzLnJlZ2lzdGVyZWRFdmVudHMpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1pZ25vcmVcbiAgICAgIC8vIEB0cy1pZ25vcmVcblxuICAgICAgdGhpcy5zdGF0ZS50cmFmZmljTGF5ZXIuc2V0TWFwKG51bGwpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHJldHVybiBudWxsO1xuICB9O1xuXG4gIHJldHVybiBUcmFmZmljTGF5ZXI7XG59KFB1cmVDb21wb25lbnQpO1xuVHJhZmZpY0xheWVyLmNvbnRleHRUeXBlID0gTWFwQ29udGV4dDtcblxudmFyIEJpY3ljbGluZ0xheWVyID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfUmVhY3QkUHVyZUNvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShCaWN5Y2xpbmdMYXllciwgX1JlYWN0JFB1cmVDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIEJpY3ljbGluZ0xheWVyKCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIF90aGlzID0gX1JlYWN0JFB1cmVDb21wb25lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgYmljeWNsaW5nTGF5ZXI6IG51bGxcbiAgICB9O1xuXG4gICAgX3RoaXMuc2V0QmljeWNsaW5nTGF5ZXJDYWxsYmFjayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChfdGhpcy5zdGF0ZS5iaWN5Y2xpbmdMYXllciAhPT0gbnVsbCkge1xuICAgICAgICAvLyBUT0RPOiBob3cgaXMgdGhpcyBwb3NzaWJseSBudWxsIGlmIHdlJ3JlIGRvaW5nIGEgbnVsbCBjaGVja1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1pZ25vcmVcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBfdGhpcy5zdGF0ZS5iaWN5Y2xpbmdMYXllci5zZXRNYXAoX3RoaXMuY29udGV4dCk7XG5cbiAgICAgICAgaWYgKF90aGlzLnByb3BzLm9uTG9hZCkge1xuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWlnbm9yZVxuICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICBfdGhpcy5wcm9wcy5vbkxvYWQoX3RoaXMuc3RhdGUuYmljeWNsaW5nTGF5ZXIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBCaWN5Y2xpbmdMYXllci5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdmFyIGJpY3ljbGluZ0xheWVyID0gbmV3IGdvb2dsZS5tYXBzLkJpY3ljbGluZ0xheWVyKCk7XG4gICAgdGhpcy5zZXRTdGF0ZShmdW5jdGlvbiBzZXRCaWN5Y2xpbmdMYXllcigpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGJpY3ljbGluZ0xheWVyOiBiaWN5Y2xpbmdMYXllclxuICAgICAgfTtcbiAgICB9LCB0aGlzLnNldEJpY3ljbGluZ0xheWVyQ2FsbGJhY2spO1xuICB9O1xuXG4gIF9wcm90by5jb21wb25lbnRXaWxsVW5tb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGlmICh0aGlzLnN0YXRlLmJpY3ljbGluZ0xheWVyICE9PSBudWxsKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5vblVubW91bnQpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtaWdub3JlXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgdGhpcy5wcm9wcy5vblVubW91bnQodGhpcy5zdGF0ZS5iaWN5Y2xpbmdMYXllcik7XG4gICAgICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWlnbm9yZVxuICAgICAgLy8gQHRzLWlnbm9yZVxuXG5cbiAgICAgIHRoaXMuc3RhdGUuYmljeWNsaW5nTGF5ZXIuc2V0TWFwKG51bGwpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHJldHVybiBudWxsO1xuICB9O1xuXG4gIHJldHVybiBCaWN5Y2xpbmdMYXllcjtcbn0oUHVyZUNvbXBvbmVudCk7XG5CaWN5Y2xpbmdMYXllci5jb250ZXh0VHlwZSA9IE1hcENvbnRleHQ7XG5cbnZhciBUcmFuc2l0TGF5ZXIgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9SZWFjdCRQdXJlQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKFRyYW5zaXRMYXllciwgX1JlYWN0JFB1cmVDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFRyYW5zaXRMYXllcigpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfdGhpcyA9IF9SZWFjdCRQdXJlQ29tcG9uZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHRyYW5zaXRMYXllcjogbnVsbFxuICAgIH07XG5cbiAgICBfdGhpcy5zZXRUcmFuc2l0TGF5ZXJDYWxsYmFjayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChfdGhpcy5zdGF0ZS50cmFuc2l0TGF5ZXIgIT09IG51bGwpIHtcbiAgICAgICAgLy8gVE9ETzogaG93IGlzIHRoaXMgcG9zc2libHkgbnVsbCBpZiB3ZSdyZSBkb2luZyBhIG51bGwgY2hlY2tcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtaWdub3JlXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgX3RoaXMuc3RhdGUudHJhbnNpdExheWVyLnNldE1hcChfdGhpcy5jb250ZXh0KTtcblxuICAgICAgICBpZiAoX3RoaXMucHJvcHMub25Mb2FkKSB7XG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtaWdub3JlXG4gICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgIF90aGlzLnByb3BzLm9uTG9hZChfdGhpcy5zdGF0ZS50cmFuc2l0TGF5ZXIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBUcmFuc2l0TGF5ZXIucHJvdG90eXBlO1xuXG4gIF9wcm90by5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHZhciB0cmFuc2l0TGF5ZXIgPSBuZXcgZ29vZ2xlLm1hcHMuVHJhbnNpdExheWVyKCk7XG4gICAgdGhpcy5zZXRTdGF0ZShmdW5jdGlvbiBzZXRUcmFuc2l0TGF5ZXIoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0cmFuc2l0TGF5ZXI6IHRyYW5zaXRMYXllclxuICAgICAgfTtcbiAgICB9LCB0aGlzLnNldFRyYW5zaXRMYXllckNhbGxiYWNrKTtcbiAgfTtcblxuICBfcHJvdG8uY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS50cmFuc2l0TGF5ZXIgIT09IG51bGwpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLm9uVW5tb3VudCkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1pZ25vcmVcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICB0aGlzLnByb3BzLm9uVW5tb3VudCh0aGlzLnN0YXRlLnRyYW5zaXRMYXllcik7XG4gICAgICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWlnbm9yZVxuICAgICAgLy8gQHRzLWlnbm9yZVxuXG5cbiAgICAgIHRoaXMuc3RhdGUudHJhbnNpdExheWVyLnNldE1hcChudWxsKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcblxuICByZXR1cm4gVHJhbnNpdExheWVyO1xufShQdXJlQ29tcG9uZW50KTtcblRyYW5zaXRMYXllci5jb250ZXh0VHlwZSA9IE1hcENvbnRleHQ7XG5cbnZhciBldmVudE1hcCQyID0ge1xuICBvbkNpcmNsZUNvbXBsZXRlOiAnY2lyY2xlY29tcGxldGUnLFxuICBvbk1hcmtlckNvbXBsZXRlOiAnbWFya2VyY29tcGxldGUnLFxuICBvbk92ZXJsYXlDb21wbGV0ZTogJ292ZXJsYXljb21wbGV0ZScsXG4gIG9uUG9seWdvbkNvbXBsZXRlOiAncG9seWdvbmNvbXBsZXRlJyxcbiAgb25Qb2x5bGluZUNvbXBsZXRlOiAncG9seWxpbmVjb21wbGV0ZScsXG4gIG9uUmVjdGFuZ2xlQ29tcGxldGU6ICdyZWN0YW5nbGVjb21wbGV0ZSdcbn07XG52YXIgdXBkYXRlck1hcCQyID0ge1xuICBkcmF3aW5nTW9kZTogZnVuY3Rpb24gZHJhd2luZ01vZGUoaW5zdGFuY2UsIF9kcmF3aW5nTW9kZSkge1xuICAgIGluc3RhbmNlLnNldERyYXdpbmdNb2RlKF9kcmF3aW5nTW9kZSk7XG4gIH0sXG4gIG9wdGlvbnM6IGZ1bmN0aW9uIG9wdGlvbnMoaW5zdGFuY2UsIF9vcHRpb25zKSB7XG4gICAgaW5zdGFuY2Uuc2V0T3B0aW9ucyhfb3B0aW9ucyk7XG4gIH1cbn07XG52YXIgRHJhd2luZ01hbmFnZXIgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9SZWFjdCRQdXJlQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKERyYXdpbmdNYW5hZ2VyLCBfUmVhY3QkUHVyZUNvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gRHJhd2luZ01hbmFnZXIocHJvcHMpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfdGhpcyA9IF9SZWFjdCRQdXJlQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMpIHx8IHRoaXM7XG4gICAgX3RoaXMucmVnaXN0ZXJlZEV2ZW50cyA9IFtdO1xuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgZHJhd2luZ01hbmFnZXI6IG51bGxcbiAgICB9O1xuXG4gICAgX3RoaXMuc2V0RHJhd2luZ01hbmFnZXJDYWxsYmFjayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChfdGhpcy5zdGF0ZS5kcmF3aW5nTWFuYWdlciAhPT0gbnVsbCAmJiBfdGhpcy5wcm9wcy5vbkxvYWQpIHtcbiAgICAgICAgX3RoaXMucHJvcHMub25Mb2FkKF90aGlzLnN0YXRlLmRyYXdpbmdNYW5hZ2VyKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgISEhZ29vZ2xlLm1hcHMuZHJhd2luZyA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IGludmFyaWFudChmYWxzZSwgXCJEaWQgeW91IGluY2x1ZGUgcHJvcCBsaWJyYXJpZXM9e1snZHJhd2luZyddfSBpbiB0aGUgVVJMPyAlc1wiLCBnb29nbGUubWFwcy5kcmF3aW5nKSA6IGludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IERyYXdpbmdNYW5hZ2VyLnByb3RvdHlwZTtcblxuICBfcHJvdG8uY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB2YXIgZHJhd2luZ01hbmFnZXIgPSBuZXcgZ29vZ2xlLm1hcHMuZHJhd2luZy5EcmF3aW5nTWFuYWdlcihfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcy5vcHRpb25zIHx8IHt9LCB7XG4gICAgICBtYXA6IHRoaXMuY29udGV4dFxuICAgIH0pKTtcbiAgICB0aGlzLnJlZ2lzdGVyZWRFdmVudHMgPSBhcHBseVVwZGF0ZXJzVG9Qcm9wc0FuZFJlZ2lzdGVyRXZlbnRzKHtcbiAgICAgIHVwZGF0ZXJNYXA6IHVwZGF0ZXJNYXAkMixcbiAgICAgIGV2ZW50TWFwOiBldmVudE1hcCQyLFxuICAgICAgcHJldlByb3BzOiB7fSxcbiAgICAgIG5leHRQcm9wczogdGhpcy5wcm9wcyxcbiAgICAgIGluc3RhbmNlOiBkcmF3aW5nTWFuYWdlclxuICAgIH0pO1xuICAgIHRoaXMuc2V0U3RhdGUoZnVuY3Rpb24gc2V0RHJhd2luZ01hbmFnZXIoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBkcmF3aW5nTWFuYWdlcjogZHJhd2luZ01hbmFnZXJcbiAgICAgIH07XG4gICAgfSwgdGhpcy5zZXREcmF3aW5nTWFuYWdlckNhbGxiYWNrKTtcbiAgfTtcblxuICBfcHJvdG8uY29tcG9uZW50RGlkVXBkYXRlID0gZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgIGlmICh0aGlzLnN0YXRlLmRyYXdpbmdNYW5hZ2VyICE9PSBudWxsKSB7XG4gICAgICB1bnJlZ2lzdGVyRXZlbnRzKHRoaXMucmVnaXN0ZXJlZEV2ZW50cyk7XG4gICAgICB0aGlzLnJlZ2lzdGVyZWRFdmVudHMgPSBhcHBseVVwZGF0ZXJzVG9Qcm9wc0FuZFJlZ2lzdGVyRXZlbnRzKHtcbiAgICAgICAgdXBkYXRlck1hcDogdXBkYXRlck1hcCQyLFxuICAgICAgICBldmVudE1hcDogZXZlbnRNYXAkMixcbiAgICAgICAgcHJldlByb3BzOiBwcmV2UHJvcHMsXG4gICAgICAgIG5leHRQcm9wczogdGhpcy5wcm9wcyxcbiAgICAgICAgaW5zdGFuY2U6IHRoaXMuc3RhdGUuZHJhd2luZ01hbmFnZXJcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5kcmF3aW5nTWFuYWdlciAhPT0gbnVsbCkge1xuICAgICAgaWYgKHRoaXMucHJvcHMub25Vbm1vdW50KSB7XG4gICAgICAgIHRoaXMucHJvcHMub25Vbm1vdW50KHRoaXMuc3RhdGUuZHJhd2luZ01hbmFnZXIpO1xuICAgICAgfVxuXG4gICAgICB1bnJlZ2lzdGVyRXZlbnRzKHRoaXMucmVnaXN0ZXJlZEV2ZW50cyk7XG4gICAgICB0aGlzLnN0YXRlLmRyYXdpbmdNYW5hZ2VyLnNldE1hcChudWxsKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudChGcmFnbWVudCwgbnVsbCk7XG4gIH07XG5cbiAgcmV0dXJuIERyYXdpbmdNYW5hZ2VyO1xufShQdXJlQ29tcG9uZW50KTtcbkRyYXdpbmdNYW5hZ2VyLmNvbnRleHRUeXBlID0gTWFwQ29udGV4dDtcblxudmFyIGV2ZW50TWFwJDMgPSB7XG4gIG9uQW5pbWF0aW9uQ2hhbmdlZDogJ2FuaW1hdGlvbl9jaGFuZ2VkJyxcbiAgb25DbGljazogJ2NsaWNrJyxcbiAgb25DbGlja2FibGVDaGFuZ2VkOiAnY2xpY2thYmxlX2NoYW5nZWQnLFxuICBvbkN1cnNvckNoYW5nZWQ6ICdjdXJzb3JfY2hhbmdlZCcsXG4gIG9uRGJsQ2xpY2s6ICdkYmxjbGljaycsXG4gIG9uRHJhZzogJ2RyYWcnLFxuICBvbkRyYWdFbmQ6ICdkcmFnZW5kJyxcbiAgb25EcmFnZ2FibGVDaGFuZ2VkOiAnZHJhZ2dhYmxlX2NoYW5nZWQnLFxuICBvbkRyYWdTdGFydDogJ2RyYWdzdGFydCcsXG4gIG9uRmxhdENoYW5nZWQ6ICdmbGF0X2NoYW5nZWQnLFxuICBvbkljb25DaGFuZ2VkOiAnaWNvbl9jaGFuZ2VkJyxcbiAgb25Nb3VzZURvd246ICdtb3VzZWRvd24nLFxuICBvbk1vdXNlT3V0OiAnbW91c2VvdXQnLFxuICBvbk1vdXNlT3ZlcjogJ21vdXNlb3ZlcicsXG4gIG9uTW91c2VVcDogJ21vdXNldXAnLFxuICBvblBvc2l0aW9uQ2hhbmdlZDogJ3Bvc2l0aW9uX2NoYW5nZWQnLFxuICBvblJpZ2h0Q2xpY2s6ICdyaWdodGNsaWNrJyxcbiAgb25TaGFwZUNoYW5nZWQ6ICdzaGFwZV9jaGFuZ2VkJyxcbiAgb25UaXRsZUNoYW5nZWQ6ICd0aXRsZV9jaGFuZ2VkJyxcbiAgb25WaXNpYmxlQ2hhbmdlZDogJ3Zpc2libGVfY2hhbmdlZCcsXG4gIG9uWmluZGV4Q2hhbmdlZDogJ3ppbmRleF9jaGFuZ2VkJ1xufTtcbnZhciB1cGRhdGVyTWFwJDMgPSB7XG4gIGFuaW1hdGlvbjogZnVuY3Rpb24gYW5pbWF0aW9uKGluc3RhbmNlLCBfYW5pbWF0aW9uKSB7XG4gICAgaW5zdGFuY2Uuc2V0QW5pbWF0aW9uKF9hbmltYXRpb24pO1xuICB9LFxuICBjbGlja2FibGU6IGZ1bmN0aW9uIGNsaWNrYWJsZShpbnN0YW5jZSwgX2NsaWNrYWJsZSkge1xuICAgIGluc3RhbmNlLnNldENsaWNrYWJsZShfY2xpY2thYmxlKTtcbiAgfSxcbiAgY3Vyc29yOiBmdW5jdGlvbiBjdXJzb3IoaW5zdGFuY2UsIF9jdXJzb3IpIHtcbiAgICBpbnN0YW5jZS5zZXRDdXJzb3IoX2N1cnNvcik7XG4gIH0sXG4gIGRyYWdnYWJsZTogZnVuY3Rpb24gZHJhZ2dhYmxlKGluc3RhbmNlLCBfZHJhZ2dhYmxlKSB7XG4gICAgaW5zdGFuY2Uuc2V0RHJhZ2dhYmxlKF9kcmFnZ2FibGUpO1xuICB9LFxuICBpY29uOiBmdW5jdGlvbiBpY29uKGluc3RhbmNlLCBfaWNvbikge1xuICAgIGluc3RhbmNlLnNldEljb24oX2ljb24pO1xuICB9LFxuICBsYWJlbDogZnVuY3Rpb24gbGFiZWwoaW5zdGFuY2UsIF9sYWJlbCkge1xuICAgIGluc3RhbmNlLnNldExhYmVsKF9sYWJlbCk7XG4gIH0sXG4gIG1hcDogZnVuY3Rpb24gbWFwKGluc3RhbmNlLCBfbWFwKSB7XG4gICAgaW5zdGFuY2Uuc2V0TWFwKF9tYXApO1xuICB9LFxuICBvcGFjaXR5OiBmdW5jdGlvbiBvcGFjaXR5KGluc3RhbmNlLCBfb3BhY2l0eSkge1xuICAgIGluc3RhbmNlLnNldE9wYWNpdHkoX29wYWNpdHkpO1xuICB9LFxuICBvcHRpb25zOiBmdW5jdGlvbiBvcHRpb25zKGluc3RhbmNlLCBfb3B0aW9ucykge1xuICAgIGluc3RhbmNlLnNldE9wdGlvbnMoX29wdGlvbnMpO1xuICB9LFxuICBwb3NpdGlvbjogZnVuY3Rpb24gcG9zaXRpb24oaW5zdGFuY2UsIF9wb3NpdGlvbikge1xuICAgIGluc3RhbmNlLnNldFBvc2l0aW9uKF9wb3NpdGlvbik7XG4gIH0sXG4gIHNoYXBlOiBmdW5jdGlvbiBzaGFwZShpbnN0YW5jZSwgX3NoYXBlKSB7XG4gICAgaW5zdGFuY2Uuc2V0U2hhcGUoX3NoYXBlKTtcbiAgfSxcbiAgdGl0bGU6IGZ1bmN0aW9uIHRpdGxlKGluc3RhbmNlLCBfdGl0bGUpIHtcbiAgICBpbnN0YW5jZS5zZXRUaXRsZShfdGl0bGUpO1xuICB9LFxuICB2aXNpYmxlOiBmdW5jdGlvbiB2aXNpYmxlKGluc3RhbmNlLCBfdmlzaWJsZSkge1xuICAgIGluc3RhbmNlLnNldFZpc2libGUoX3Zpc2libGUpO1xuICB9LFxuICB6SW5kZXg6IGZ1bmN0aW9uIHpJbmRleChpbnN0YW5jZSwgX3pJbmRleCkge1xuICAgIGluc3RhbmNlLnNldFpJbmRleChfekluZGV4KTtcbiAgfVxufTtcbnZhciBNYXJrZXIgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9SZWFjdCRQdXJlQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKE1hcmtlciwgX1JlYWN0JFB1cmVDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIE1hcmtlcigpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfdGhpcyA9IF9SZWFjdCRQdXJlQ29tcG9uZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICBfdGhpcy5yZWdpc3RlcmVkRXZlbnRzID0gW107XG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBtYXJrZXI6IG51bGxcbiAgICB9O1xuXG4gICAgX3RoaXMuc2V0TWFya2VyQ2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoX3RoaXMuc3RhdGUubWFya2VyICE9PSBudWxsICYmIF90aGlzLnByb3BzLm9uTG9hZCkge1xuICAgICAgICBfdGhpcy5wcm9wcy5vbkxvYWQoX3RoaXMuc3RhdGUubWFya2VyKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IE1hcmtlci5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdmFyIG1hcmtlck9wdGlvbnMgPSBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcy5vcHRpb25zIHx8IHt9LCB0aGlzLnByb3BzLmNsdXN0ZXJlciA/IHt9IDoge1xuICAgICAgbWFwOiB0aGlzLmNvbnRleHRcbiAgICB9LCB7XG4gICAgICBwb3NpdGlvbjogdGhpcy5wcm9wcy5wb3NpdGlvblxuICAgIH0pO1xuXG4gICAgdmFyIG1hcmtlciA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIobWFya2VyT3B0aW9ucyk7XG5cbiAgICBpZiAodGhpcy5wcm9wcy5jbHVzdGVyZXIpIHtcbiAgICAgIHRoaXMucHJvcHMuY2x1c3RlcmVyLmFkZE1hcmtlciggLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtaWdub3JlXG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICBtYXJrZXIsICEhdGhpcy5wcm9wcy5ub0NsdXN0ZXJlclJlZHJhdyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1hcmtlci5zZXRNYXAodGhpcy5jb250ZXh0KTtcbiAgICB9XG5cbiAgICB0aGlzLnJlZ2lzdGVyZWRFdmVudHMgPSBhcHBseVVwZGF0ZXJzVG9Qcm9wc0FuZFJlZ2lzdGVyRXZlbnRzKHtcbiAgICAgIHVwZGF0ZXJNYXA6IHVwZGF0ZXJNYXAkMyxcbiAgICAgIGV2ZW50TWFwOiBldmVudE1hcCQzLFxuICAgICAgcHJldlByb3BzOiB7fSxcbiAgICAgIG5leHRQcm9wczogdGhpcy5wcm9wcyxcbiAgICAgIGluc3RhbmNlOiBtYXJrZXJcbiAgICB9KTtcbiAgICB0aGlzLnNldFN0YXRlKGZ1bmN0aW9uIHNldE1hcmtlcigpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG1hcmtlcjogbWFya2VyXG4gICAgICB9O1xuICAgIH0sIHRoaXMuc2V0TWFya2VyQ2FsbGJhY2spO1xuICB9O1xuXG4gIF9wcm90by5jb21wb25lbnREaWRVcGRhdGUgPSBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUubWFya2VyICE9PSBudWxsKSB7XG4gICAgICB1bnJlZ2lzdGVyRXZlbnRzKHRoaXMucmVnaXN0ZXJlZEV2ZW50cyk7XG4gICAgICB0aGlzLnJlZ2lzdGVyZWRFdmVudHMgPSBhcHBseVVwZGF0ZXJzVG9Qcm9wc0FuZFJlZ2lzdGVyRXZlbnRzKHtcbiAgICAgICAgdXBkYXRlck1hcDogdXBkYXRlck1hcCQzLFxuICAgICAgICBldmVudE1hcDogZXZlbnRNYXAkMyxcbiAgICAgICAgcHJldlByb3BzOiBwcmV2UHJvcHMsXG4gICAgICAgIG5leHRQcm9wczogdGhpcy5wcm9wcyxcbiAgICAgICAgaW5zdGFuY2U6IHRoaXMuc3RhdGUubWFya2VyXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUubWFya2VyICE9PSBudWxsKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5vblVubW91bnQpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vblVubW91bnQodGhpcy5zdGF0ZS5tYXJrZXIpO1xuICAgICAgfVxuXG4gICAgICB1bnJlZ2lzdGVyRXZlbnRzKHRoaXMucmVnaXN0ZXJlZEV2ZW50cyk7XG5cbiAgICAgIGlmICh0aGlzLnByb3BzLmNsdXN0ZXJlcikge1xuICAgICAgICB0aGlzLnByb3BzLmNsdXN0ZXJlci5yZW1vdmVNYXJrZXIoIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWlnbm9yZVxuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHRoaXMuc3RhdGUubWFya2VyLCAhIXRoaXMucHJvcHMubm9DbHVzdGVyZXJSZWRyYXcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zdGF0ZS5tYXJrZXIgJiYgdGhpcy5zdGF0ZS5tYXJrZXIuc2V0TWFwKG51bGwpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgdmFyIGNoaWxkcmVuID0gbnVsbDtcblxuICAgIGlmICh0aGlzLnByb3BzLmNoaWxkcmVuKSB7XG4gICAgICBjaGlsZHJlbiA9IENoaWxkcmVuLm1hcCh0aGlzLnByb3BzLmNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudChjaGlsZCkpIHtcbiAgICAgICAgICByZXR1cm4gY2hpbGQ7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZWxlbWVudENoaWxkID0gY2hpbGQ7XG4gICAgICAgIHJldHVybiBjbG9uZUVsZW1lbnQoZWxlbWVudENoaWxkLCB7XG4gICAgICAgICAgYW5jaG9yOiBfdGhpczIuc3RhdGUubWFya2VyXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNoaWxkcmVuIHx8IG51bGw7XG4gIH07XG5cbiAgcmV0dXJuIE1hcmtlcjtcbn0oUHVyZUNvbXBvbmVudCk7XG5NYXJrZXIuY29udGV4dFR5cGUgPSBNYXBDb250ZXh0O1xuXG52YXIgZXZlbnRNYXAkNCA9IHtcbiAgb25DbGljazogJ2NsaWNrJyxcbiAgb25DbHVzdGVyaW5nQmVnaW46ICdjbHVzdGVyaW5nYmVnaW4nLFxuICBvbkNsdXN0ZXJpbmdFbmQ6ICdjbHVzdGVyaW5nZW5kJyxcbiAgb25Nb3VzZU91dDogJ21vdXNlb3V0JyxcbiAgb25Nb3VzZU92ZXI6ICdtb3VzZW92ZXInXG59O1xudmFyIHVwZGF0ZXJNYXAkNCA9IHtcbiAgYXZlcmFnZUNlbnRlcjogZnVuY3Rpb24gYXZlcmFnZUNlbnRlcihpbnN0YW5jZSwgX2F2ZXJhZ2VDZW50ZXIpIHtcbiAgICBpbnN0YW5jZS5zZXRBdmVyYWdlQ2VudGVyKF9hdmVyYWdlQ2VudGVyKTtcbiAgfSxcbiAgYmF0Y2hTaXplSUU6IGZ1bmN0aW9uIGJhdGNoU2l6ZUlFKGluc3RhbmNlLCBfYmF0Y2hTaXplSUUpIHtcbiAgICBpbnN0YW5jZS5zZXRCYXRjaFNpemVJRShfYmF0Y2hTaXplSUUpO1xuICB9LFxuICBjYWxjdWxhdG9yOiBmdW5jdGlvbiBjYWxjdWxhdG9yKGluc3RhbmNlLCBfY2FsY3VsYXRvcikge1xuICAgIGluc3RhbmNlLnNldENhbGN1bGF0b3IoX2NhbGN1bGF0b3IpO1xuICB9LFxuICBjbHVzdGVyQ2xhc3M6IGZ1bmN0aW9uIGNsdXN0ZXJDbGFzcyhpbnN0YW5jZSwgX2NsdXN0ZXJDbGFzcykge1xuICAgIGluc3RhbmNlLnNldENsdXN0ZXJDbGFzcyhfY2x1c3RlckNsYXNzKTtcbiAgfSxcbiAgZW5hYmxlUmV0aW5hSWNvbnM6IGZ1bmN0aW9uIGVuYWJsZVJldGluYUljb25zKGluc3RhbmNlLCBfZW5hYmxlUmV0aW5hSWNvbnMpIHtcbiAgICBpbnN0YW5jZS5zZXRFbmFibGVSZXRpbmFJY29ucyhfZW5hYmxlUmV0aW5hSWNvbnMpO1xuICB9LFxuICBncmlkU2l6ZTogZnVuY3Rpb24gZ3JpZFNpemUoaW5zdGFuY2UsIF9ncmlkU2l6ZSkge1xuICAgIGluc3RhbmNlLnNldEdyaWRTaXplKF9ncmlkU2l6ZSk7XG4gIH0sXG4gIGlnbm9yZUhpZGRlbjogZnVuY3Rpb24gaWdub3JlSGlkZGVuKGluc3RhbmNlLCBfaWdub3JlSGlkZGVuKSB7XG4gICAgaW5zdGFuY2Uuc2V0SWdub3JlSGlkZGVuKF9pZ25vcmVIaWRkZW4pO1xuICB9LFxuICBpbWFnZUV4dGVuc2lvbjogZnVuY3Rpb24gaW1hZ2VFeHRlbnNpb24oaW5zdGFuY2UsIF9pbWFnZUV4dGVuc2lvbikge1xuICAgIGluc3RhbmNlLnNldEltYWdlRXh0ZW5zaW9uKF9pbWFnZUV4dGVuc2lvbik7XG4gIH0sXG4gIGltYWdlUGF0aDogZnVuY3Rpb24gaW1hZ2VQYXRoKGluc3RhbmNlLCBfaW1hZ2VQYXRoKSB7XG4gICAgaW5zdGFuY2Uuc2V0SW1hZ2VQYXRoKF9pbWFnZVBhdGgpO1xuICB9LFxuICBpbWFnZVNpemVzOiBmdW5jdGlvbiBpbWFnZVNpemVzKGluc3RhbmNlLCBfaW1hZ2VTaXplcykge1xuICAgIGluc3RhbmNlLnNldEltYWdlU2l6ZXMoX2ltYWdlU2l6ZXMpO1xuICB9LFxuICBtYXhab29tOiBmdW5jdGlvbiBtYXhab29tKGluc3RhbmNlLCBfbWF4Wm9vbSkge1xuICAgIGluc3RhbmNlLnNldE1heFpvb20oX21heFpvb20pO1xuICB9LFxuICBtaW5pbXVtQ2x1c3RlclNpemU6IGZ1bmN0aW9uIG1pbmltdW1DbHVzdGVyU2l6ZShpbnN0YW5jZSwgX21pbmltdW1DbHVzdGVyU2l6ZSkge1xuICAgIGluc3RhbmNlLnNldE1pbmltdW1DbHVzdGVyU2l6ZShfbWluaW11bUNsdXN0ZXJTaXplKTtcbiAgfSxcbiAgc3R5bGVzOiBmdW5jdGlvbiBzdHlsZXMoaW5zdGFuY2UsIF9zdHlsZXMpIHtcbiAgICBpbnN0YW5jZS5zZXRTdHlsZXMoX3N0eWxlcyk7XG4gIH0sXG4gIHRpdGxlOiBmdW5jdGlvbiB0aXRsZShpbnN0YW5jZSwgX3RpdGxlKSB7XG4gICAgaW5zdGFuY2Uuc2V0VGl0bGUoX3RpdGxlKTtcbiAgfSxcbiAgem9vbU9uQ2xpY2s6IGZ1bmN0aW9uIHpvb21PbkNsaWNrKGluc3RhbmNlLCBfem9vbU9uQ2xpY2spIHtcbiAgICBpbnN0YW5jZS5zZXRab29tT25DbGljayhfem9vbU9uQ2xpY2spO1xuICB9XG59O1xudmFyIENsdXN0ZXJlckNvbXBvbmVudCA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoX1JlYWN0JFB1cmVDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzTG9vc2UoQ2x1c3RlcmVyQ29tcG9uZW50LCBfUmVhY3QkUHVyZUNvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gQ2x1c3RlcmVyQ29tcG9uZW50KCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIF90aGlzID0gX1JlYWN0JFB1cmVDb21wb25lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIF90aGlzLnJlZ2lzdGVyZWRFdmVudHMgPSBbXTtcbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG1hcmtlckNsdXN0ZXJlcjogbnVsbFxuICAgIH07XG5cbiAgICBfdGhpcy5zZXRDbHVzdGVyZXJDYWxsYmFjayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChfdGhpcy5zdGF0ZS5tYXJrZXJDbHVzdGVyZXIgIT09IG51bGwgJiYgX3RoaXMucHJvcHMub25Mb2FkKSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uTG9hZChfdGhpcy5zdGF0ZS5tYXJrZXJDbHVzdGVyZXIpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gQ2x1c3RlcmVyQ29tcG9uZW50LnByb3RvdHlwZTtcblxuICBfcHJvdG8uY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBpZiAodGhpcy5jb250ZXh0KSB7XG4gICAgICB2YXIgbWFya2VyQ2x1c3RlcmVyID0gbmV3IENsdXN0ZXJlcih0aGlzLmNvbnRleHQsIFtdLCB0aGlzLnByb3BzLm9wdGlvbnMpO1xuICAgICAgdGhpcy5yZWdpc3RlcmVkRXZlbnRzID0gYXBwbHlVcGRhdGVyc1RvUHJvcHNBbmRSZWdpc3RlckV2ZW50cyh7XG4gICAgICAgIHVwZGF0ZXJNYXA6IHVwZGF0ZXJNYXAkNCxcbiAgICAgICAgZXZlbnRNYXA6IGV2ZW50TWFwJDQsXG4gICAgICAgIHByZXZQcm9wczoge30sXG4gICAgICAgIG5leHRQcm9wczogdGhpcy5wcm9wcyxcbiAgICAgICAgaW5zdGFuY2U6IG1hcmtlckNsdXN0ZXJlclxuICAgICAgfSk7XG4gICAgICB0aGlzLnNldFN0YXRlKGZ1bmN0aW9uIHNldENsdXN0ZXJlcigpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBtYXJrZXJDbHVzdGVyZXI6IG1hcmtlckNsdXN0ZXJlclxuICAgICAgICB9O1xuICAgICAgfSwgdGhpcy5zZXRDbHVzdGVyZXJDYWxsYmFjayk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5jb21wb25lbnREaWRVcGRhdGUgPSBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUubWFya2VyQ2x1c3RlcmVyKSB7XG4gICAgICB1bnJlZ2lzdGVyRXZlbnRzKHRoaXMucmVnaXN0ZXJlZEV2ZW50cyk7XG4gICAgICB0aGlzLnJlZ2lzdGVyZWRFdmVudHMgPSBhcHBseVVwZGF0ZXJzVG9Qcm9wc0FuZFJlZ2lzdGVyRXZlbnRzKHtcbiAgICAgICAgdXBkYXRlck1hcDogdXBkYXRlck1hcCQ0LFxuICAgICAgICBldmVudE1hcDogZXZlbnRNYXAkNCxcbiAgICAgICAgcHJldlByb3BzOiBwcmV2UHJvcHMsXG4gICAgICAgIG5leHRQcm9wczogdGhpcy5wcm9wcyxcbiAgICAgICAgaW5zdGFuY2U6IHRoaXMuc3RhdGUubWFya2VyQ2x1c3RlcmVyXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUubWFya2VyQ2x1c3RlcmVyICE9PSBudWxsKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5vblVubW91bnQpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vblVubW91bnQodGhpcy5zdGF0ZS5tYXJrZXJDbHVzdGVyZXIpO1xuICAgICAgfVxuXG4gICAgICB1bnJlZ2lzdGVyRXZlbnRzKHRoaXMucmVnaXN0ZXJlZEV2ZW50cyk7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWlnbm9yZVxuICAgICAgLy8gQHRzLWlnbm9yZVxuXG4gICAgICB0aGlzLnN0YXRlLm1hcmtlckNsdXN0ZXJlci5zZXRNYXAobnVsbCk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGUubWFya2VyQ2x1c3RlcmVyICE9PSBudWxsID8gdGhpcy5wcm9wcy5jaGlsZHJlbih0aGlzLnN0YXRlLm1hcmtlckNsdXN0ZXJlcikgOiBudWxsO1xuICB9O1xuXG4gIHJldHVybiBDbHVzdGVyZXJDb21wb25lbnQ7XG59KFB1cmVDb21wb25lbnQpO1xuQ2x1c3RlcmVyQ29tcG9uZW50LmNvbnRleHRUeXBlID0gTWFwQ29udGV4dDtcblxudmFyIGV2ZW50TWFwJDUgPSB7XG4gIG9uQ2xvc2VDbGljazogJ2Nsb3NlY2xpY2snLFxuICBvbkNvbnRlbnRDaGFuZ2VkOiAnY29udGVudF9jaGFuZ2VkJyxcbiAgb25Eb21SZWFkeTogJ2RvbXJlYWR5JyxcbiAgb25Qb3NpdGlvbkNoYW5nZWQ6ICdwb3NpdGlvbl9jaGFuZ2VkJyxcbiAgb25aaW5kZXhDaGFuZ2VkOiAnemluZGV4X2NoYW5nZWQnXG59O1xudmFyIHVwZGF0ZXJNYXAkNSA9IHtcbiAgb3B0aW9uczogZnVuY3Rpb24gb3B0aW9ucyhpbnN0YW5jZSwgX29wdGlvbnMpIHtcbiAgICBpbnN0YW5jZS5zZXRPcHRpb25zKF9vcHRpb25zKTtcbiAgfSxcbiAgcG9zaXRpb246IGZ1bmN0aW9uIHBvc2l0aW9uKGluc3RhbmNlLCBfcG9zaXRpb24pIHtcbiAgICBpZiAoX3Bvc2l0aW9uIGluc3RhbmNlb2YgZ29vZ2xlLm1hcHMuTGF0TG5nKSB7XG4gICAgICBpbnN0YW5jZS5zZXRQb3NpdGlvbihfcG9zaXRpb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbnN0YW5jZS5zZXRQb3NpdGlvbihuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKF9wb3NpdGlvbi5sYXQsIF9wb3NpdGlvbi5sbmcpKTtcbiAgICB9XG4gIH0sXG4gIHZpc2libGU6IGZ1bmN0aW9uIHZpc2libGUoaW5zdGFuY2UsIF92aXNpYmxlKSB7XG4gICAgaW5zdGFuY2Uuc2V0VmlzaWJsZShfdmlzaWJsZSk7XG4gIH0sXG4gIHpJbmRleDogZnVuY3Rpb24gekluZGV4KGluc3RhbmNlLCBfekluZGV4KSB7XG4gICAgaW5zdGFuY2Uuc2V0WkluZGV4KF96SW5kZXgpO1xuICB9XG59O1xudmFyIEluZm9Cb3hDb21wb25lbnQgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9SZWFjdCRQdXJlQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKEluZm9Cb3hDb21wb25lbnQsIF9SZWFjdCRQdXJlQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBJbmZvQm94Q29tcG9uZW50KCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIF90aGlzID0gX1JlYWN0JFB1cmVDb21wb25lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIF90aGlzLnJlZ2lzdGVyZWRFdmVudHMgPSBbXTtcbiAgICBfdGhpcy5jb250YWluZXJFbGVtZW50ID0gbnVsbDtcbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGluZm9Cb3g6IG51bGxcbiAgICB9O1xuXG4gICAgX3RoaXMub3BlbiA9IGZ1bmN0aW9uIChpbmZvQm94LCBhbmNob3IpIHtcbiAgICAgIGlmIChhbmNob3IpIHtcbiAgICAgICAgaW5mb0JveC5vcGVuKF90aGlzLmNvbnRleHQsIGFuY2hvcik7XG4gICAgICB9IGVsc2UgaWYgKGluZm9Cb3guZ2V0UG9zaXRpb24oKSkge1xuICAgICAgICBpbmZvQm94Lm9wZW4oX3RoaXMuY29udGV4dCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gaW52YXJpYW50KGZhbHNlLCAnWW91IG11c3QgcHJvdmlkZSBlaXRoZXIgYW4gYW5jaG9yIG9yIGEgcG9zaXRpb24gcHJvcCBmb3IgPEluZm9Cb3g+LicpIDogaW52YXJpYW50KGZhbHNlKSA7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLnNldEluZm9Cb3hDYWxsYmFjayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wcyA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIGFuY2hvciA9IF90aGlzJHByb3BzLmFuY2hvcixcbiAgICAgICAgICBvbkxvYWQgPSBfdGhpcyRwcm9wcy5vbkxvYWQ7XG4gICAgICB2YXIgaW5mb0JveCA9IF90aGlzLnN0YXRlLmluZm9Cb3g7XG5cbiAgICAgIGlmIChpbmZvQm94ICE9PSBudWxsICYmIF90aGlzLmNvbnRhaW5lckVsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgaW5mb0JveC5zZXRDb250ZW50KF90aGlzLmNvbnRhaW5lckVsZW1lbnQpO1xuXG4gICAgICAgIF90aGlzLm9wZW4oaW5mb0JveCwgYW5jaG9yKTtcblxuICAgICAgICBpZiAob25Mb2FkKSB7XG4gICAgICAgICAgb25Mb2FkKGluZm9Cb3gpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBJbmZvQm94Q29tcG9uZW50LnByb3RvdHlwZTtcblxuICBfcHJvdG8uY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB2YXIgb3B0aW9ucyA9IHRoaXMucHJvcHMub3B0aW9ucztcblxuICAgIHZhciBfcmVmID0gb3B0aW9ucyB8fCB7fSxcbiAgICAgICAgcG9zaXRpb24gPSBfcmVmLnBvc2l0aW9uLFxuICAgICAgICBpbmZvQm94T3B0aW9ucyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF9yZWYsIFtcInBvc2l0aW9uXCJdKTtcblxuICAgIHZhciBwb3NpdGlvbkxhdExuZztcblxuICAgIGlmIChwb3NpdGlvbiAmJiAhKHBvc2l0aW9uIGluc3RhbmNlb2YgZ29vZ2xlLm1hcHMuTGF0TG5nKSkge1xuICAgICAgcG9zaXRpb25MYXRMbmcgPSBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKHBvc2l0aW9uLmxhdCwgcG9zaXRpb24ubG5nKTtcbiAgICB9XG5cbiAgICB2YXIgaW5mb0JveCA9IG5ldyBJbmZvQm94KF9leHRlbmRzKHt9LCBpbmZvQm94T3B0aW9ucywgcG9zaXRpb25MYXRMbmcgPyB7XG4gICAgICBwb3NpdGlvbjogcG9zaXRpb25MYXRMbmdcbiAgICB9IDoge30pKTtcbiAgICB0aGlzLmNvbnRhaW5lckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGlzLnJlZ2lzdGVyZWRFdmVudHMgPSBhcHBseVVwZGF0ZXJzVG9Qcm9wc0FuZFJlZ2lzdGVyRXZlbnRzKHtcbiAgICAgIHVwZGF0ZXJNYXA6IHVwZGF0ZXJNYXAkNSxcbiAgICAgIGV2ZW50TWFwOiBldmVudE1hcCQ1LFxuICAgICAgcHJldlByb3BzOiB7fSxcbiAgICAgIG5leHRQcm9wczogdGhpcy5wcm9wcyxcbiAgICAgIGluc3RhbmNlOiBpbmZvQm94XG4gICAgfSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpbmZvQm94OiBpbmZvQm94XG4gICAgfSwgdGhpcy5zZXRJbmZvQm94Q2FsbGJhY2spO1xuICB9O1xuXG4gIF9wcm90by5jb21wb25lbnREaWRVcGRhdGUgPSBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgdmFyIGluZm9Cb3ggPSB0aGlzLnN0YXRlLmluZm9Cb3g7XG5cbiAgICBpZiAoaW5mb0JveCAhPT0gbnVsbCkge1xuICAgICAgdW5yZWdpc3RlckV2ZW50cyh0aGlzLnJlZ2lzdGVyZWRFdmVudHMpO1xuICAgICAgdGhpcy5yZWdpc3RlcmVkRXZlbnRzID0gYXBwbHlVcGRhdGVyc1RvUHJvcHNBbmRSZWdpc3RlckV2ZW50cyh7XG4gICAgICAgIHVwZGF0ZXJNYXA6IHVwZGF0ZXJNYXAkNSxcbiAgICAgICAgZXZlbnRNYXA6IGV2ZW50TWFwJDUsXG4gICAgICAgIHByZXZQcm9wczogcHJldlByb3BzLFxuICAgICAgICBuZXh0UHJvcHM6IHRoaXMucHJvcHMsXG4gICAgICAgIGluc3RhbmNlOiBpbmZvQm94XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdmFyIG9uVW5tb3VudCA9IHRoaXMucHJvcHMub25Vbm1vdW50O1xuICAgIHZhciBpbmZvQm94ID0gdGhpcy5zdGF0ZS5pbmZvQm94O1xuXG4gICAgaWYgKGluZm9Cb3ggIT09IG51bGwpIHtcbiAgICAgIGlmIChvblVubW91bnQpIHtcbiAgICAgICAgb25Vbm1vdW50KGluZm9Cb3gpO1xuICAgICAgfVxuXG4gICAgICB1bnJlZ2lzdGVyRXZlbnRzKHRoaXMucmVnaXN0ZXJlZEV2ZW50cyk7XG4gICAgICBpbmZvQm94LmNsb3NlKCk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgaWYgKCF0aGlzLmNvbnRhaW5lckVsZW1lbnQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBjcmVhdGVQb3J0YWwoQ2hpbGRyZW4ub25seSh0aGlzLnByb3BzLmNoaWxkcmVuKSwgdGhpcy5jb250YWluZXJFbGVtZW50KTtcbiAgfTtcblxuICByZXR1cm4gSW5mb0JveENvbXBvbmVudDtcbn0oUHVyZUNvbXBvbmVudCk7XG5JbmZvQm94Q29tcG9uZW50LmNvbnRleHRUeXBlID0gTWFwQ29udGV4dDtcblxudmFyIGV2ZW50TWFwJDYgPSB7XG4gIG9uQ2xvc2VDbGljazogJ2Nsb3NlY2xpY2snLFxuICBvbkNvbnRlbnRDaGFuZ2VkOiAnY29udGVudF9jaGFuZ2VkJyxcbiAgb25Eb21SZWFkeTogJ2RvbXJlYWR5JyxcbiAgb25Qb3NpdGlvbkNoYW5nZWQ6ICdwb3NpdGlvbl9jaGFuZ2VkJyxcbiAgb25aaW5kZXhDaGFuZ2VkOiAnemluZGV4X2NoYW5nZWQnXG59O1xudmFyIHVwZGF0ZXJNYXAkNiA9IHtcbiAgb3B0aW9uczogZnVuY3Rpb24gb3B0aW9ucyhpbnN0YW5jZSwgX29wdGlvbnMpIHtcbiAgICBpbnN0YW5jZS5zZXRPcHRpb25zKF9vcHRpb25zKTtcbiAgfSxcbiAgcG9zaXRpb246IGZ1bmN0aW9uIHBvc2l0aW9uKGluc3RhbmNlLCBfcG9zaXRpb24pIHtcbiAgICBpbnN0YW5jZS5zZXRQb3NpdGlvbihfcG9zaXRpb24pO1xuICB9LFxuICB6SW5kZXg6IGZ1bmN0aW9uIHpJbmRleChpbnN0YW5jZSwgX3pJbmRleCkge1xuICAgIGluc3RhbmNlLnNldFpJbmRleChfekluZGV4KTtcbiAgfVxufTtcbnZhciBJbmZvV2luZG93ID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfUmVhY3QkUHVyZUNvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShJbmZvV2luZG93LCBfUmVhY3QkUHVyZUNvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gSW5mb1dpbmRvdygpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfdGhpcyA9IF9SZWFjdCRQdXJlQ29tcG9uZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICBfdGhpcy5yZWdpc3RlcmVkRXZlbnRzID0gW107XG4gICAgX3RoaXMuY29udGFpbmVyRWxlbWVudCA9IG51bGw7XG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBpbmZvV2luZG93OiBudWxsXG4gICAgfTtcblxuICAgIF90aGlzLm9wZW4gPSBmdW5jdGlvbiAoaW5mb1dpbmRvdywgYW5jaG9yKSB7XG4gICAgICBpZiAoYW5jaG9yKSB7XG4gICAgICAgIGluZm9XaW5kb3cub3BlbihfdGhpcy5jb250ZXh0LCBhbmNob3IpO1xuICAgICAgfSBlbHNlIGlmIChpbmZvV2luZG93LmdldFBvc2l0aW9uKCkpIHtcbiAgICAgICAgaW5mb1dpbmRvdy5vcGVuKF90aGlzLmNvbnRleHQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IGludmFyaWFudChmYWxzZSwgXCJZb3UgbXVzdCBwcm92aWRlIGVpdGhlciBhbiBhbmNob3IgKHR5cGljYWxseSByZW5kZXIgaXQgaW5zaWRlIGEgPE1hcmtlcj4pIG9yIGEgcG9zaXRpb24gcHJvcHMgZm9yIDxJbmZvV2luZG93Pi5cIikgOiBpbnZhcmlhbnQoZmFsc2UpIDtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMuc2V0SW5mb1dpbmRvd0NhbGxiYWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKF90aGlzLnN0YXRlLmluZm9XaW5kb3cgIT09IG51bGwgJiYgX3RoaXMuY29udGFpbmVyRWxlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICBfdGhpcy5zdGF0ZS5pbmZvV2luZG93LnNldENvbnRlbnQoX3RoaXMuY29udGFpbmVyRWxlbWVudCk7XG5cbiAgICAgICAgX3RoaXMub3BlbihfdGhpcy5zdGF0ZS5pbmZvV2luZG93LCBfdGhpcy5wcm9wcy5hbmNob3IpO1xuXG4gICAgICAgIGlmIChfdGhpcy5wcm9wcy5vbkxvYWQpIHtcbiAgICAgICAgICBfdGhpcy5wcm9wcy5vbkxvYWQoX3RoaXMuc3RhdGUuaW5mb1dpbmRvdyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IEluZm9XaW5kb3cucHJvdG90eXBlO1xuXG4gIF9wcm90by5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHZhciBpbmZvV2luZG93ID0gbmV3IGdvb2dsZS5tYXBzLkluZm9XaW5kb3coX2V4dGVuZHMoe30sIHRoaXMucHJvcHMub3B0aW9ucyB8fCB7fSkpO1xuICAgIHRoaXMuY29udGFpbmVyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMucmVnaXN0ZXJlZEV2ZW50cyA9IGFwcGx5VXBkYXRlcnNUb1Byb3BzQW5kUmVnaXN0ZXJFdmVudHMoe1xuICAgICAgdXBkYXRlck1hcDogdXBkYXRlck1hcCQ2LFxuICAgICAgZXZlbnRNYXA6IGV2ZW50TWFwJDYsXG4gICAgICBwcmV2UHJvcHM6IHt9LFxuICAgICAgbmV4dFByb3BzOiB0aGlzLnByb3BzLFxuICAgICAgaW5zdGFuY2U6IGluZm9XaW5kb3dcbiAgICB9KTtcbiAgICB0aGlzLnNldFN0YXRlKGZ1bmN0aW9uIHNldEluZm9XaW5kb3coKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpbmZvV2luZG93OiBpbmZvV2luZG93XG4gICAgICB9O1xuICAgIH0sIHRoaXMuc2V0SW5mb1dpbmRvd0NhbGxiYWNrKTtcbiAgfTtcblxuICBfcHJvdG8uY29tcG9uZW50RGlkVXBkYXRlID0gZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgIGlmICh0aGlzLnN0YXRlLmluZm9XaW5kb3cgIT09IG51bGwpIHtcbiAgICAgIHVucmVnaXN0ZXJFdmVudHModGhpcy5yZWdpc3RlcmVkRXZlbnRzKTtcbiAgICAgIHRoaXMucmVnaXN0ZXJlZEV2ZW50cyA9IGFwcGx5VXBkYXRlcnNUb1Byb3BzQW5kUmVnaXN0ZXJFdmVudHMoe1xuICAgICAgICB1cGRhdGVyTWFwOiB1cGRhdGVyTWFwJDYsXG4gICAgICAgIGV2ZW50TWFwOiBldmVudE1hcCQ2LFxuICAgICAgICBwcmV2UHJvcHM6IHByZXZQcm9wcyxcbiAgICAgICAgbmV4dFByb3BzOiB0aGlzLnByb3BzLFxuICAgICAgICBpbnN0YW5jZTogdGhpcy5zdGF0ZS5pbmZvV2luZG93XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUuaW5mb1dpbmRvdyAhPT0gbnVsbCkge1xuICAgICAgdW5yZWdpc3RlckV2ZW50cyh0aGlzLnJlZ2lzdGVyZWRFdmVudHMpO1xuICAgICAgdGhpcy5zdGF0ZS5pbmZvV2luZG93LmNsb3NlKCk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGFpbmVyRWxlbWVudCA/IGNyZWF0ZVBvcnRhbChDaGlsZHJlbi5vbmx5KHRoaXMucHJvcHMuY2hpbGRyZW4pLCB0aGlzLmNvbnRhaW5lckVsZW1lbnQpIDogY3JlYXRlRWxlbWVudChGcmFnbWVudCwgbnVsbCk7XG4gIH07XG5cbiAgcmV0dXJuIEluZm9XaW5kb3c7XG59KFB1cmVDb21wb25lbnQpO1xuSW5mb1dpbmRvdy5jb250ZXh0VHlwZSA9IE1hcENvbnRleHQ7XG5cbnZhciBldmVudE1hcCQ3ID0ge1xuICBvbkNsaWNrOiAnY2xpY2snLFxuICBvbkRibENsaWNrOiAnZGJsY2xpY2snLFxuICBvbkRyYWc6ICdkcmFnJyxcbiAgb25EcmFnRW5kOiAnZHJhZ2VuZCcsXG4gIG9uRHJhZ1N0YXJ0OiAnZHJhZ3N0YXJ0JyxcbiAgb25Nb3VzZURvd246ICdtb3VzZWRvd24nLFxuICBvbk1vdXNlTW92ZTogJ21vdXNlbW92ZScsXG4gIG9uTW91c2VPdXQ6ICdtb3VzZW91dCcsXG4gIG9uTW91c2VPdmVyOiAnbW91c2VvdmVyJyxcbiAgb25Nb3VzZVVwOiAnbW91c2V1cCcsXG4gIG9uUmlnaHRDbGljazogJ3JpZ2h0Y2xpY2snXG59O1xudmFyIHVwZGF0ZXJNYXAkNyA9IHtcbiAgZHJhZ2dhYmxlOiBmdW5jdGlvbiBkcmFnZ2FibGUoaW5zdGFuY2UsIF9kcmFnZ2FibGUpIHtcbiAgICBpbnN0YW5jZS5zZXREcmFnZ2FibGUoX2RyYWdnYWJsZSk7XG4gIH0sXG4gIGVkaXRhYmxlOiBmdW5jdGlvbiBlZGl0YWJsZShpbnN0YW5jZSwgX2VkaXRhYmxlKSB7XG4gICAgaW5zdGFuY2Uuc2V0RWRpdGFibGUoX2VkaXRhYmxlKTtcbiAgfSxcbiAgbWFwOiBmdW5jdGlvbiBtYXAoaW5zdGFuY2UsIF9tYXApIHtcbiAgICBpbnN0YW5jZS5zZXRNYXAoX21hcCk7XG4gIH0sXG4gIG9wdGlvbnM6IGZ1bmN0aW9uIG9wdGlvbnMoaW5zdGFuY2UsIF9vcHRpb25zKSB7XG4gICAgaW5zdGFuY2Uuc2V0T3B0aW9ucyhfb3B0aW9ucyk7XG4gIH0sXG4gIHBhdGg6IGZ1bmN0aW9uIHBhdGgoaW5zdGFuY2UsIF9wYXRoKSB7XG4gICAgaW5zdGFuY2Uuc2V0UGF0aChfcGF0aCk7XG4gIH0sXG4gIHZpc2libGU6IGZ1bmN0aW9uIHZpc2libGUoaW5zdGFuY2UsIF92aXNpYmxlKSB7XG4gICAgaW5zdGFuY2Uuc2V0VmlzaWJsZShfdmlzaWJsZSk7XG4gIH1cbn07XG52YXIgUG9seWxpbmUgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9SZWFjdCRQdXJlQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKFBvbHlsaW5lLCBfUmVhY3QkUHVyZUNvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gUG9seWxpbmUoKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX3RoaXMgPSBfUmVhY3QkUHVyZUNvbXBvbmVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgX3RoaXMucmVnaXN0ZXJlZEV2ZW50cyA9IFtdO1xuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgcG9seWxpbmU6IG51bGxcbiAgICB9O1xuXG4gICAgX3RoaXMuc2V0UG9seWxpbmVDYWxsYmFjayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChfdGhpcy5zdGF0ZS5wb2x5bGluZSAhPT0gbnVsbCAmJiBfdGhpcy5wcm9wcy5vbkxvYWQpIHtcbiAgICAgICAgX3RoaXMucHJvcHMub25Mb2FkKF90aGlzLnN0YXRlLnBvbHlsaW5lKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IFBvbHlsaW5lLnByb3RvdHlwZTtcblxuICBfcHJvdG8uY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB2YXIgcG9seWxpbmUgPSBuZXcgZ29vZ2xlLm1hcHMuUG9seWxpbmUoX2V4dGVuZHMoe30sIHRoaXMucHJvcHMub3B0aW9ucyB8fCB7fSwge1xuICAgICAgbWFwOiB0aGlzLmNvbnRleHRcbiAgICB9KSk7XG4gICAgdGhpcy5yZWdpc3RlcmVkRXZlbnRzID0gYXBwbHlVcGRhdGVyc1RvUHJvcHNBbmRSZWdpc3RlckV2ZW50cyh7XG4gICAgICB1cGRhdGVyTWFwOiB1cGRhdGVyTWFwJDcsXG4gICAgICBldmVudE1hcDogZXZlbnRNYXAkNyxcbiAgICAgIHByZXZQcm9wczoge30sXG4gICAgICBuZXh0UHJvcHM6IHRoaXMucHJvcHMsXG4gICAgICBpbnN0YW5jZTogcG9seWxpbmVcbiAgICB9KTtcbiAgICB0aGlzLnNldFN0YXRlKGZ1bmN0aW9uIHNldFBvbHlsaW5lKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcG9seWxpbmU6IHBvbHlsaW5lXG4gICAgICB9O1xuICAgIH0sIHRoaXMuc2V0UG9seWxpbmVDYWxsYmFjayk7XG4gIH07XG5cbiAgX3Byb3RvLmNvbXBvbmVudERpZFVwZGF0ZSA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5wb2x5bGluZSAhPT0gbnVsbCkge1xuICAgICAgdW5yZWdpc3RlckV2ZW50cyh0aGlzLnJlZ2lzdGVyZWRFdmVudHMpO1xuICAgICAgdGhpcy5yZWdpc3RlcmVkRXZlbnRzID0gYXBwbHlVcGRhdGVyc1RvUHJvcHNBbmRSZWdpc3RlckV2ZW50cyh7XG4gICAgICAgIHVwZGF0ZXJNYXA6IHVwZGF0ZXJNYXAkNyxcbiAgICAgICAgZXZlbnRNYXA6IGV2ZW50TWFwJDcsXG4gICAgICAgIHByZXZQcm9wczogcHJldlByb3BzLFxuICAgICAgICBuZXh0UHJvcHM6IHRoaXMucHJvcHMsXG4gICAgICAgIGluc3RhbmNlOiB0aGlzLnN0YXRlLnBvbHlsaW5lXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUucG9seWxpbmUgIT09IG51bGwpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLm9uVW5tb3VudCkge1xuICAgICAgICB0aGlzLnByb3BzLm9uVW5tb3VudCh0aGlzLnN0YXRlLnBvbHlsaW5lKTtcbiAgICAgIH1cblxuICAgICAgdW5yZWdpc3RlckV2ZW50cyh0aGlzLnJlZ2lzdGVyZWRFdmVudHMpO1xuICAgICAgdGhpcy5zdGF0ZS5wb2x5bGluZS5zZXRNYXAobnVsbCk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoRnJhZ21lbnQsIG51bGwpO1xuICB9O1xuXG4gIHJldHVybiBQb2x5bGluZTtcbn0oUHVyZUNvbXBvbmVudCk7XG5Qb2x5bGluZS5jb250ZXh0VHlwZSA9IE1hcENvbnRleHQ7XG5cbnZhciBldmVudE1hcCQ4ID0ge1xuICBvbkNsaWNrOiAnY2xpY2snLFxuICBvbkRibENsaWNrOiAnZGJsY2xpY2snLFxuICBvbkRyYWc6ICdkcmFnJyxcbiAgb25EcmFnRW5kOiAnZHJhZ2VuZCcsXG4gIG9uRHJhZ1N0YXJ0OiAnZHJhZ3N0YXJ0JyxcbiAgb25Nb3VzZURvd246ICdtb3VzZWRvd24nLFxuICBvbk1vdXNlTW92ZTogJ21vdXNlbW92ZScsXG4gIG9uTW91c2VPdXQ6ICdtb3VzZW91dCcsXG4gIG9uTW91c2VPdmVyOiAnbW91c2VvdmVyJyxcbiAgb25Nb3VzZVVwOiAnbW91c2V1cCcsXG4gIG9uUmlnaHRDbGljazogJ3JpZ2h0Y2xpY2snXG59O1xudmFyIHVwZGF0ZXJNYXAkOCA9IHtcbiAgZHJhZ2dhYmxlOiBmdW5jdGlvbiBkcmFnZ2FibGUoaW5zdGFuY2UsIF9kcmFnZ2FibGUpIHtcbiAgICBpbnN0YW5jZS5zZXREcmFnZ2FibGUoX2RyYWdnYWJsZSk7XG4gIH0sXG4gIGVkaXRhYmxlOiBmdW5jdGlvbiBlZGl0YWJsZShpbnN0YW5jZSwgX2VkaXRhYmxlKSB7XG4gICAgaW5zdGFuY2Uuc2V0RWRpdGFibGUoX2VkaXRhYmxlKTtcbiAgfSxcbiAgbWFwOiBmdW5jdGlvbiBtYXAoaW5zdGFuY2UsIF9tYXApIHtcbiAgICBpbnN0YW5jZS5zZXRNYXAoX21hcCk7XG4gIH0sXG4gIG9wdGlvbnM6IGZ1bmN0aW9uIG9wdGlvbnMoaW5zdGFuY2UsIF9vcHRpb25zKSB7XG4gICAgaW5zdGFuY2Uuc2V0T3B0aW9ucyhfb3B0aW9ucyk7XG4gIH0sXG4gIHBhdGg6IGZ1bmN0aW9uIHBhdGgoaW5zdGFuY2UsIF9wYXRoKSB7XG4gICAgaW5zdGFuY2Uuc2V0UGF0aChfcGF0aCk7XG4gIH0sXG4gIHBhdGhzOiBmdW5jdGlvbiBwYXRocyhpbnN0YW5jZSwgX3BhdGhzKSB7XG4gICAgaW5zdGFuY2Uuc2V0UGF0aHMoX3BhdGhzKTtcbiAgfSxcbiAgdmlzaWJsZTogZnVuY3Rpb24gdmlzaWJsZShpbnN0YW5jZSwgX3Zpc2libGUpIHtcbiAgICBpbnN0YW5jZS5zZXRWaXNpYmxlKF92aXNpYmxlKTtcbiAgfVxufTtcbnZhciBQb2x5Z29uID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfUmVhY3QkUHVyZUNvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShQb2x5Z29uLCBfUmVhY3QkUHVyZUNvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gUG9seWdvbigpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfdGhpcyA9IF9SZWFjdCRQdXJlQ29tcG9uZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICBfdGhpcy5yZWdpc3RlcmVkRXZlbnRzID0gW107XG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBwb2x5Z29uOiBudWxsXG4gICAgfTtcblxuICAgIF90aGlzLnNldFBvbHlnb25DYWxsYmFjayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChfdGhpcy5zdGF0ZS5wb2x5Z29uICE9PSBudWxsICYmIF90aGlzLnByb3BzLm9uTG9hZCkge1xuICAgICAgICBfdGhpcy5wcm9wcy5vbkxvYWQoX3RoaXMuc3RhdGUucG9seWdvbik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBQb2x5Z29uLnByb3RvdHlwZTtcblxuICBfcHJvdG8uY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB2YXIgcG9seWdvbiA9IG5ldyBnb29nbGUubWFwcy5Qb2x5Z29uKF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLm9wdGlvbnMgfHwge30sIHtcbiAgICAgIG1hcDogdGhpcy5jb250ZXh0XG4gICAgfSkpO1xuICAgIHRoaXMucmVnaXN0ZXJlZEV2ZW50cyA9IGFwcGx5VXBkYXRlcnNUb1Byb3BzQW5kUmVnaXN0ZXJFdmVudHMoe1xuICAgICAgdXBkYXRlck1hcDogdXBkYXRlck1hcCQ4LFxuICAgICAgZXZlbnRNYXA6IGV2ZW50TWFwJDgsXG4gICAgICBwcmV2UHJvcHM6IHt9LFxuICAgICAgbmV4dFByb3BzOiB0aGlzLnByb3BzLFxuICAgICAgaW5zdGFuY2U6IHBvbHlnb25cbiAgICB9KTtcbiAgICB0aGlzLnNldFN0YXRlKGZ1bmN0aW9uIHNldFBvbHlnb24oKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwb2x5Z29uOiBwb2x5Z29uXG4gICAgICB9O1xuICAgIH0sIHRoaXMuc2V0UG9seWdvbkNhbGxiYWNrKTtcbiAgfTtcblxuICBfcHJvdG8uY29tcG9uZW50RGlkVXBkYXRlID0gZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgIGlmICh0aGlzLnN0YXRlLnBvbHlnb24gIT09IG51bGwpIHtcbiAgICAgIHVucmVnaXN0ZXJFdmVudHModGhpcy5yZWdpc3RlcmVkRXZlbnRzKTtcbiAgICAgIHRoaXMucmVnaXN0ZXJlZEV2ZW50cyA9IGFwcGx5VXBkYXRlcnNUb1Byb3BzQW5kUmVnaXN0ZXJFdmVudHMoe1xuICAgICAgICB1cGRhdGVyTWFwOiB1cGRhdGVyTWFwJDgsXG4gICAgICAgIGV2ZW50TWFwOiBldmVudE1hcCQ4LFxuICAgICAgICBwcmV2UHJvcHM6IHByZXZQcm9wcyxcbiAgICAgICAgbmV4dFByb3BzOiB0aGlzLnByb3BzLFxuICAgICAgICBpbnN0YW5jZTogdGhpcy5zdGF0ZS5wb2x5Z29uXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUucG9seWdvbiAhPT0gbnVsbCkge1xuICAgICAgaWYgKHRoaXMucHJvcHMub25Vbm1vdW50KSB7XG4gICAgICAgIHRoaXMucHJvcHMub25Vbm1vdW50KHRoaXMuc3RhdGUucG9seWdvbik7XG4gICAgICB9XG5cbiAgICAgIHVucmVnaXN0ZXJFdmVudHModGhpcy5yZWdpc3RlcmVkRXZlbnRzKTtcbiAgICAgIHRoaXMuc3RhdGUucG9seWdvbiAmJiB0aGlzLnN0YXRlLnBvbHlnb24uc2V0TWFwKG51bGwpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHJldHVybiBudWxsO1xuICB9O1xuXG4gIHJldHVybiBQb2x5Z29uO1xufShQdXJlQ29tcG9uZW50KTtcblBvbHlnb24uY29udGV4dFR5cGUgPSBNYXBDb250ZXh0O1xuXG52YXIgZXZlbnRNYXAkOSA9IHtcbiAgb25Cb3VuZHNDaGFuZ2VkOiAnYm91bmRzX2NoYW5nZWQnLFxuICBvbkNsaWNrOiAnY2xpY2snLFxuICBvbkRibENsaWNrOiAnZGJsY2xpY2snLFxuICBvbkRyYWc6ICdkcmFnJyxcbiAgb25EcmFnRW5kOiAnZHJhZ2VuZCcsXG4gIG9uRHJhZ1N0YXJ0OiAnZHJhZ3N0YXJ0JyxcbiAgb25Nb3VzZURvd246ICdtb3VzZWRvd24nLFxuICBvbk1vdXNlTW92ZTogJ21vdXNlbW92ZScsXG4gIG9uTW91c2VPdXQ6ICdtb3VzZW91dCcsXG4gIG9uTW91c2VPdmVyOiAnbW91c2VvdmVyJyxcbiAgb25Nb3VzZVVwOiAnbW91c2V1cCcsXG4gIG9uUmlnaHRDbGljazogJ3JpZ2h0Y2xpY2snXG59O1xudmFyIHVwZGF0ZXJNYXAkOSA9IHtcbiAgYm91bmRzOiBmdW5jdGlvbiBib3VuZHMoaW5zdGFuY2UsIF9ib3VuZHMpIHtcbiAgICBpbnN0YW5jZS5zZXRCb3VuZHMoX2JvdW5kcyk7XG4gIH0sXG4gIGRyYWdnYWJsZTogZnVuY3Rpb24gZHJhZ2dhYmxlKGluc3RhbmNlLCBfZHJhZ2dhYmxlKSB7XG4gICAgaW5zdGFuY2Uuc2V0RHJhZ2dhYmxlKF9kcmFnZ2FibGUpO1xuICB9LFxuICBlZGl0YWJsZTogZnVuY3Rpb24gZWRpdGFibGUoaW5zdGFuY2UsIF9lZGl0YWJsZSkge1xuICAgIGluc3RhbmNlLnNldEVkaXRhYmxlKF9lZGl0YWJsZSk7XG4gIH0sXG4gIG1hcDogZnVuY3Rpb24gbWFwKGluc3RhbmNlLCBfbWFwKSB7XG4gICAgaW5zdGFuY2Uuc2V0TWFwKF9tYXApO1xuICB9LFxuICBvcHRpb25zOiBmdW5jdGlvbiBvcHRpb25zKGluc3RhbmNlLCBfb3B0aW9ucykge1xuICAgIGluc3RhbmNlLnNldE9wdGlvbnMoX29wdGlvbnMpO1xuICB9LFxuICB2aXNpYmxlOiBmdW5jdGlvbiB2aXNpYmxlKGluc3RhbmNlLCBfdmlzaWJsZSkge1xuICAgIGluc3RhbmNlLnNldFZpc2libGUoX3Zpc2libGUpO1xuICB9XG59O1xudmFyIFJlY3RhbmdsZSA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoX1JlYWN0JFB1cmVDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzTG9vc2UoUmVjdGFuZ2xlLCBfUmVhY3QkUHVyZUNvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gUmVjdGFuZ2xlKCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIF90aGlzID0gX1JlYWN0JFB1cmVDb21wb25lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIF90aGlzLnJlZ2lzdGVyZWRFdmVudHMgPSBbXTtcbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHJlY3RhbmdsZTogbnVsbFxuICAgIH07XG5cbiAgICBfdGhpcy5zZXRSZWN0YW5nbGVDYWxsYmFjayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChfdGhpcy5zdGF0ZS5yZWN0YW5nbGUgIT09IG51bGwgJiYgX3RoaXMucHJvcHMub25Mb2FkKSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uTG9hZChfdGhpcy5zdGF0ZS5yZWN0YW5nbGUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gUmVjdGFuZ2xlLnByb3RvdHlwZTtcblxuICBfcHJvdG8uY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB2YXIgcmVjdGFuZ2xlID0gbmV3IGdvb2dsZS5tYXBzLlJlY3RhbmdsZShfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcy5vcHRpb25zIHx8IHt9LCB7XG4gICAgICBtYXA6IHRoaXMuY29udGV4dFxuICAgIH0pKTtcbiAgICB0aGlzLnJlZ2lzdGVyZWRFdmVudHMgPSBhcHBseVVwZGF0ZXJzVG9Qcm9wc0FuZFJlZ2lzdGVyRXZlbnRzKHtcbiAgICAgIHVwZGF0ZXJNYXA6IHVwZGF0ZXJNYXAkOSxcbiAgICAgIGV2ZW50TWFwOiBldmVudE1hcCQ5LFxuICAgICAgcHJldlByb3BzOiB7fSxcbiAgICAgIG5leHRQcm9wczogdGhpcy5wcm9wcyxcbiAgICAgIGluc3RhbmNlOiByZWN0YW5nbGVcbiAgICB9KTtcbiAgICB0aGlzLnNldFN0YXRlKGZ1bmN0aW9uIHNldFJlY3RhbmdsZSgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHJlY3RhbmdsZTogcmVjdGFuZ2xlXG4gICAgICB9O1xuICAgIH0sIHRoaXMuc2V0UmVjdGFuZ2xlQ2FsbGJhY2spO1xuICB9O1xuXG4gIF9wcm90by5jb21wb25lbnREaWRVcGRhdGUgPSBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUucmVjdGFuZ2xlICE9PSBudWxsKSB7XG4gICAgICB1bnJlZ2lzdGVyRXZlbnRzKHRoaXMucmVnaXN0ZXJlZEV2ZW50cyk7XG4gICAgICB0aGlzLnJlZ2lzdGVyZWRFdmVudHMgPSBhcHBseVVwZGF0ZXJzVG9Qcm9wc0FuZFJlZ2lzdGVyRXZlbnRzKHtcbiAgICAgICAgdXBkYXRlck1hcDogdXBkYXRlck1hcCQ5LFxuICAgICAgICBldmVudE1hcDogZXZlbnRNYXAkOSxcbiAgICAgICAgcHJldlByb3BzOiBwcmV2UHJvcHMsXG4gICAgICAgIG5leHRQcm9wczogdGhpcy5wcm9wcyxcbiAgICAgICAgaW5zdGFuY2U6IHRoaXMuc3RhdGUucmVjdGFuZ2xlXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUucmVjdGFuZ2xlICE9PSBudWxsKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5vblVubW91bnQpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vblVubW91bnQodGhpcy5zdGF0ZS5yZWN0YW5nbGUpO1xuICAgICAgfVxuXG4gICAgICB1bnJlZ2lzdGVyRXZlbnRzKHRoaXMucmVnaXN0ZXJlZEV2ZW50cyk7XG4gICAgICB0aGlzLnN0YXRlLnJlY3RhbmdsZS5zZXRNYXAobnVsbCk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoRnJhZ21lbnQsIG51bGwpO1xuICB9O1xuXG4gIHJldHVybiBSZWN0YW5nbGU7XG59KFB1cmVDb21wb25lbnQpO1xuUmVjdGFuZ2xlLmNvbnRleHRUeXBlID0gTWFwQ29udGV4dDtcblxudmFyIGV2ZW50TWFwJGEgPSB7XG4gIG9uQ2VudGVyQ2hhbmdlZDogJ2NlbnRlcl9jaGFuZ2VkJyxcbiAgb25DbGljazogJ2NsaWNrJyxcbiAgb25EYmxDbGljazogJ2RibGNsaWNrJyxcbiAgb25EcmFnOiAnZHJhZycsXG4gIG9uRHJhZ0VuZDogJ2RyYWdlbmQnLFxuICBvbkRyYWdTdGFydDogJ2RyYWdzdGFydCcsXG4gIG9uTW91c2VEb3duOiAnbW91c2Vkb3duJyxcbiAgb25Nb3VzZU1vdmU6ICdtb3VzZW1vdmUnLFxuICBvbk1vdXNlT3V0OiAnbW91c2VvdXQnLFxuICBvbk1vdXNlT3ZlcjogJ21vdXNlb3ZlcicsXG4gIG9uTW91c2VVcDogJ21vdXNldXAnLFxuICBvblJhZGl1c0NoYW5nZWQ6ICdyYWRpdXNfY2hhbmdlZCcsXG4gIG9uUmlnaHRDbGljazogJ3JpZ2h0Y2xpY2snXG59O1xudmFyIHVwZGF0ZXJNYXAkYSA9IHtcbiAgY2VudGVyOiBmdW5jdGlvbiBjZW50ZXIoaW5zdGFuY2UsIF9jZW50ZXIpIHtcbiAgICBpbnN0YW5jZS5zZXRDZW50ZXIoX2NlbnRlcik7XG4gIH0sXG4gIGRyYWdnYWJsZTogZnVuY3Rpb24gZHJhZ2dhYmxlKGluc3RhbmNlLCBfZHJhZ2dhYmxlKSB7XG4gICAgaW5zdGFuY2Uuc2V0RHJhZ2dhYmxlKF9kcmFnZ2FibGUpO1xuICB9LFxuICBlZGl0YWJsZTogZnVuY3Rpb24gZWRpdGFibGUoaW5zdGFuY2UsIF9lZGl0YWJsZSkge1xuICAgIGluc3RhbmNlLnNldEVkaXRhYmxlKF9lZGl0YWJsZSk7XG4gIH0sXG4gIG1hcDogZnVuY3Rpb24gbWFwKGluc3RhbmNlLCBfbWFwKSB7XG4gICAgaW5zdGFuY2Uuc2V0TWFwKF9tYXApO1xuICB9LFxuICBvcHRpb25zOiBmdW5jdGlvbiBvcHRpb25zKGluc3RhbmNlLCBfb3B0aW9ucykge1xuICAgIGluc3RhbmNlLnNldE9wdGlvbnMoX29wdGlvbnMpO1xuICB9LFxuICByYWRpdXM6IGZ1bmN0aW9uIHJhZGl1cyhpbnN0YW5jZSwgX3JhZGl1cykge1xuICAgIGluc3RhbmNlLnNldFJhZGl1cyhfcmFkaXVzKTtcbiAgfSxcbiAgdmlzaWJsZTogZnVuY3Rpb24gdmlzaWJsZShpbnN0YW5jZSwgX3Zpc2libGUpIHtcbiAgICBpbnN0YW5jZS5zZXRWaXNpYmxlKF92aXNpYmxlKTtcbiAgfVxufTtcbnZhciBDaXJjbGUgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9SZWFjdCRQdXJlQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKENpcmNsZSwgX1JlYWN0JFB1cmVDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIENpcmNsZSgpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfdGhpcyA9IF9SZWFjdCRQdXJlQ29tcG9uZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICBfdGhpcy5yZWdpc3RlcmVkRXZlbnRzID0gW107XG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBjaXJjbGU6IG51bGxcbiAgICB9O1xuXG4gICAgX3RoaXMuc2V0Q2lyY2xlQ2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoX3RoaXMuc3RhdGUuY2lyY2xlICE9PSBudWxsICYmIF90aGlzLnByb3BzLm9uTG9hZCkge1xuICAgICAgICBfdGhpcy5wcm9wcy5vbkxvYWQoX3RoaXMuc3RhdGUuY2lyY2xlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IENpcmNsZS5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdmFyIGNpcmNsZSA9IG5ldyBnb29nbGUubWFwcy5DaXJjbGUoX2V4dGVuZHMoe30sIHRoaXMucHJvcHMub3B0aW9ucyB8fCB7fSwge1xuICAgICAgbWFwOiB0aGlzLmNvbnRleHRcbiAgICB9KSk7XG4gICAgdGhpcy5yZWdpc3RlcmVkRXZlbnRzID0gYXBwbHlVcGRhdGVyc1RvUHJvcHNBbmRSZWdpc3RlckV2ZW50cyh7XG4gICAgICB1cGRhdGVyTWFwOiB1cGRhdGVyTWFwJGEsXG4gICAgICBldmVudE1hcDogZXZlbnRNYXAkYSxcbiAgICAgIHByZXZQcm9wczoge30sXG4gICAgICBuZXh0UHJvcHM6IHRoaXMucHJvcHMsXG4gICAgICBpbnN0YW5jZTogY2lyY2xlXG4gICAgfSk7XG4gICAgdGhpcy5zZXRTdGF0ZShmdW5jdGlvbiBzZXRDaXJjbGUoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBjaXJjbGU6IGNpcmNsZVxuICAgICAgfTtcbiAgICB9LCB0aGlzLnNldENpcmNsZUNhbGxiYWNrKTtcbiAgfTtcblxuICBfcHJvdG8uY29tcG9uZW50RGlkVXBkYXRlID0gZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgIGlmICh0aGlzLnN0YXRlLmNpcmNsZSAhPT0gbnVsbCkge1xuICAgICAgdW5yZWdpc3RlckV2ZW50cyh0aGlzLnJlZ2lzdGVyZWRFdmVudHMpO1xuICAgICAgdGhpcy5yZWdpc3RlcmVkRXZlbnRzID0gYXBwbHlVcGRhdGVyc1RvUHJvcHNBbmRSZWdpc3RlckV2ZW50cyh7XG4gICAgICAgIHVwZGF0ZXJNYXA6IHVwZGF0ZXJNYXAkYSxcbiAgICAgICAgZXZlbnRNYXA6IGV2ZW50TWFwJGEsXG4gICAgICAgIHByZXZQcm9wczogcHJldlByb3BzLFxuICAgICAgICBuZXh0UHJvcHM6IHRoaXMucHJvcHMsXG4gICAgICAgIGluc3RhbmNlOiB0aGlzLnN0YXRlLmNpcmNsZVxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5jb21wb25lbnRXaWxsVW5tb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGlmICh0aGlzLnN0YXRlLmNpcmNsZSAhPT0gbnVsbCkge1xuICAgICAgaWYgKHRoaXMucHJvcHMub25Vbm1vdW50KSB7XG4gICAgICAgIHRoaXMucHJvcHMub25Vbm1vdW50KHRoaXMuc3RhdGUuY2lyY2xlKTtcbiAgICAgIH1cblxuICAgICAgdW5yZWdpc3RlckV2ZW50cyh0aGlzLnJlZ2lzdGVyZWRFdmVudHMpO1xuICAgICAgdGhpcy5zdGF0ZS5jaXJjbGUgJiYgdGhpcy5zdGF0ZS5jaXJjbGUuc2V0TWFwKG51bGwpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KEZyYWdtZW50LCBudWxsKTtcbiAgfTtcblxuICByZXR1cm4gQ2lyY2xlO1xufShQdXJlQ29tcG9uZW50KTtcbkNpcmNsZS5jb250ZXh0VHlwZSA9IE1hcENvbnRleHQ7XG5cbnZhciBldmVudE1hcCRiID0ge1xuICBvbkFkZEZlYXR1cmU6ICdhZGRmZWF0dXJlJyxcbiAgb25DbGljazogJ2NsaWNrJyxcbiAgb25EYmxDbGljazogJ2RibGNsaWNrJyxcbiAgb25Nb3VzZURvd246ICdtb3VzZWRvd24nLFxuICBvbk1vdXNlT3V0OiAnbW91c2VvdXQnLFxuICBvbk1vdXNlT3ZlcjogJ21vdXNlb3ZlcicsXG4gIG9uTW91c2VVcDogJ21vdXNldXAnLFxuICBvblJlbW92ZUZlYXR1cmU6ICdyZW1vdmVmZWF0dXJlJyxcbiAgb25SZW1vdmVQcm9wZXJ0eTogJ3JlbW92ZXByb3BlcnR5JyxcbiAgb25SaWdodENsaWNrOiAncmlnaHRjbGljaycsXG4gIG9uU2V0R2VvbWV0cnk6ICdzZXRnZW9tZXRyeScsXG4gIG9uU2V0UHJvcGVydHk6ICdzZXRwcm9wZXJ0eSdcbn07XG52YXIgdXBkYXRlck1hcCRiID0ge1xuICBhZGQ6IGZ1bmN0aW9uIGFkZChpbnN0YW5jZSwgZmVhdHVyZXMpIHtcbiAgICBpbnN0YW5jZS5hZGQoZmVhdHVyZXMpO1xuICB9LFxuICBhZGRnZW9qc29uOiBmdW5jdGlvbiBhZGRnZW9qc29uKGluc3RhbmNlLCBnZW9qc29uLCBvcHRpb25zKSB7XG4gICAgaW5zdGFuY2UuYWRkR2VvSnNvbihnZW9qc29uLCBvcHRpb25zKTtcbiAgfSxcbiAgY29udGFpbnM6IGZ1bmN0aW9uIGNvbnRhaW5zKGluc3RhbmNlLCBmZWF0dXJlKSB7XG4gICAgaW5zdGFuY2UuY29udGFpbnMoZmVhdHVyZSk7XG4gIH0sXG4gIGZvcmVhY2g6IGZ1bmN0aW9uIGZvcmVhY2goaW5zdGFuY2UsIGNhbGxiYWNrKSB7XG4gICAgaW5zdGFuY2UuZm9yRWFjaChjYWxsYmFjayk7XG4gIH0sXG4gIGxvYWRnZW9qc29uOiBmdW5jdGlvbiBsb2FkZ2VvanNvbihpbnN0YW5jZSwgdXJsLCBvcHRpb25zLCBjYWxsYmFjaykge1xuICAgIGluc3RhbmNlLmxvYWRHZW9Kc29uKHVybCwgb3B0aW9ucywgY2FsbGJhY2spO1xuICB9LFxuICBvdmVycmlkZXN0eWxlOiBmdW5jdGlvbiBvdmVycmlkZXN0eWxlKGluc3RhbmNlLCBmZWF0dXJlLCBzdHlsZSkge1xuICAgIGluc3RhbmNlLm92ZXJyaWRlU3R5bGUoZmVhdHVyZSwgc3R5bGUpO1xuICB9LFxuICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZShpbnN0YW5jZSwgZmVhdHVyZSkge1xuICAgIGluc3RhbmNlLnJlbW92ZShmZWF0dXJlKTtcbiAgfSxcbiAgcmV2ZXJ0c3R5bGU6IGZ1bmN0aW9uIHJldmVydHN0eWxlKGluc3RhbmNlLCBmZWF0dXJlKSB7XG4gICAgaW5zdGFuY2UucmV2ZXJ0U3R5bGUoZmVhdHVyZSk7XG4gIH0sXG4gIGNvbnRyb2xwb3NpdGlvbjogZnVuY3Rpb24gY29udHJvbHBvc2l0aW9uKGluc3RhbmNlLCBjb250cm9sUG9zaXRpb24pIHtcbiAgICBpbnN0YW5jZS5zZXRDb250cm9sUG9zaXRpb24oY29udHJvbFBvc2l0aW9uKTtcbiAgfSxcbiAgY29udHJvbHM6IGZ1bmN0aW9uIGNvbnRyb2xzKGluc3RhbmNlLCBfY29udHJvbHMpIHtcbiAgICBpbnN0YW5jZS5zZXRDb250cm9scyhfY29udHJvbHMpO1xuICB9LFxuICBkcmF3aW5nbW9kZTogZnVuY3Rpb24gZHJhd2luZ21vZGUoaW5zdGFuY2UsIG1vZGUpIHtcbiAgICBpbnN0YW5jZS5zZXREcmF3aW5nTW9kZShtb2RlKTtcbiAgfSxcbiAgbWFwOiBmdW5jdGlvbiBtYXAoaW5zdGFuY2UsIF9tYXApIHtcbiAgICBpbnN0YW5jZS5zZXRNYXAoX21hcCk7XG4gIH0sXG4gIHN0eWxlOiBmdW5jdGlvbiBzdHlsZShpbnN0YW5jZSwgX3N0eWxlKSB7XG4gICAgaW5zdGFuY2Uuc2V0U3R5bGUoX3N0eWxlKTtcbiAgfSxcbiAgdG9nZW9qc29uOiBmdW5jdGlvbiB0b2dlb2pzb24oaW5zdGFuY2UsIGNhbGxiYWNrKSB7XG4gICAgaW5zdGFuY2UudG9HZW9Kc29uKGNhbGxiYWNrKTtcbiAgfVxufTtcbnZhciBEYXRhID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfUmVhY3QkUHVyZUNvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShEYXRhLCBfUmVhY3QkUHVyZUNvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gRGF0YSgpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfdGhpcyA9IF9SZWFjdCRQdXJlQ29tcG9uZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICBfdGhpcy5yZWdpc3RlcmVkRXZlbnRzID0gW107XG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBkYXRhOiBudWxsXG4gICAgfTtcblxuICAgIF90aGlzLnNldERhdGFDYWxsYmFjayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChfdGhpcy5zdGF0ZS5kYXRhICE9PSBudWxsICYmIF90aGlzLnByb3BzLm9uTG9hZCkge1xuICAgICAgICBfdGhpcy5wcm9wcy5vbkxvYWQoX3RoaXMuc3RhdGUuZGF0YSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBEYXRhLnByb3RvdHlwZTtcblxuICBfcHJvdG8uY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB2YXIgZGF0YSA9IG5ldyBnb29nbGUubWFwcy5EYXRhKF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLm9wdGlvbnMgfHwge30sIHtcbiAgICAgIG1hcDogdGhpcy5jb250ZXh0XG4gICAgfSkpO1xuICAgIHRoaXMucmVnaXN0ZXJlZEV2ZW50cyA9IGFwcGx5VXBkYXRlcnNUb1Byb3BzQW5kUmVnaXN0ZXJFdmVudHMoe1xuICAgICAgdXBkYXRlck1hcDogdXBkYXRlck1hcCRiLFxuICAgICAgZXZlbnRNYXA6IGV2ZW50TWFwJGIsXG4gICAgICBwcmV2UHJvcHM6IHt9LFxuICAgICAgbmV4dFByb3BzOiB0aGlzLnByb3BzLFxuICAgICAgaW5zdGFuY2U6IGRhdGFcbiAgICB9KTtcbiAgICB0aGlzLnNldFN0YXRlKGZ1bmN0aW9uIHNldERhdGEoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBkYXRhOiBkYXRhXG4gICAgICB9O1xuICAgIH0sIHRoaXMuc2V0RGF0YUNhbGxiYWNrKTtcbiAgfTtcblxuICBfcHJvdG8uY29tcG9uZW50RGlkVXBkYXRlID0gZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgIGlmICh0aGlzLnN0YXRlLmRhdGEgIT09IG51bGwpIHtcbiAgICAgIHVucmVnaXN0ZXJFdmVudHModGhpcy5yZWdpc3RlcmVkRXZlbnRzKTtcbiAgICAgIHRoaXMucmVnaXN0ZXJlZEV2ZW50cyA9IGFwcGx5VXBkYXRlcnNUb1Byb3BzQW5kUmVnaXN0ZXJFdmVudHMoe1xuICAgICAgICB1cGRhdGVyTWFwOiB1cGRhdGVyTWFwJGIsXG4gICAgICAgIGV2ZW50TWFwOiBldmVudE1hcCRiLFxuICAgICAgICBwcmV2UHJvcHM6IHByZXZQcm9wcyxcbiAgICAgICAgbmV4dFByb3BzOiB0aGlzLnByb3BzLFxuICAgICAgICBpbnN0YW5jZTogdGhpcy5zdGF0ZS5kYXRhXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUuZGF0YSAhPT0gbnVsbCkge1xuICAgICAgaWYgKHRoaXMucHJvcHMub25Vbm1vdW50KSB7XG4gICAgICAgIHRoaXMucHJvcHMub25Vbm1vdW50KHRoaXMuc3RhdGUuZGF0YSk7XG4gICAgICB9XG5cbiAgICAgIHVucmVnaXN0ZXJFdmVudHModGhpcy5yZWdpc3RlcmVkRXZlbnRzKTtcblxuICAgICAgaWYgKHRoaXMuc3RhdGUuZGF0YSkge1xuICAgICAgICB0aGlzLnN0YXRlLmRhdGEuc2V0TWFwKG51bGwpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHJldHVybiBudWxsO1xuICB9O1xuXG4gIHJldHVybiBEYXRhO1xufShQdXJlQ29tcG9uZW50KTtcbkRhdGEuY29udGV4dFR5cGUgPSBNYXBDb250ZXh0O1xuXG52YXIgZXZlbnRNYXAkYyA9IHtcbiAgb25DbGljazogJ2NsaWNrJyxcbiAgb25EZWZhdWx0Vmlld3BvcnRDaGFuZ2VkOiAnZGVmYXVsdHZpZXdwb3J0X2NoYW5nZWQnLFxuICBvblN0YXR1c0NoYW5nZWQ6ICdzdGF0dXNfY2hhbmdlZCdcbn07XG52YXIgdXBkYXRlck1hcCRjID0ge1xuICBvcHRpb25zOiBmdW5jdGlvbiBvcHRpb25zKGluc3RhbmNlLCBfb3B0aW9ucykge1xuICAgIGluc3RhbmNlLnNldE9wdGlvbnMoX29wdGlvbnMpO1xuICB9LFxuICB1cmw6IGZ1bmN0aW9uIHVybChpbnN0YW5jZSwgX3VybCkge1xuICAgIGluc3RhbmNlLnNldFVybChfdXJsKTtcbiAgfSxcbiAgekluZGV4OiBmdW5jdGlvbiB6SW5kZXgoaW5zdGFuY2UsIF96SW5kZXgpIHtcbiAgICBpbnN0YW5jZS5zZXRaSW5kZXgoX3pJbmRleCk7XG4gIH1cbn07XG52YXIgS21sTGF5ZXIgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9QdXJlQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKEttbExheWVyLCBfUHVyZUNvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gS21sTGF5ZXIoKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX3RoaXMgPSBfUHVyZUNvbXBvbmVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgX3RoaXMucmVnaXN0ZXJlZEV2ZW50cyA9IFtdO1xuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAga21sTGF5ZXI6IG51bGxcbiAgICB9O1xuXG4gICAgX3RoaXMuc2V0S21sTGF5ZXJDYWxsYmFjayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChfdGhpcy5zdGF0ZS5rbWxMYXllciAhPT0gbnVsbCAmJiBfdGhpcy5wcm9wcy5vbkxvYWQpIHtcbiAgICAgICAgX3RoaXMucHJvcHMub25Mb2FkKF90aGlzLnN0YXRlLmttbExheWVyKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IEttbExheWVyLnByb3RvdHlwZTtcblxuICBfcHJvdG8uY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB2YXIga21sTGF5ZXIgPSBuZXcgZ29vZ2xlLm1hcHMuS21sTGF5ZXIoX2V4dGVuZHMoe30sIHRoaXMucHJvcHMub3B0aW9ucywge1xuICAgICAgbWFwOiB0aGlzLmNvbnRleHRcbiAgICB9KSk7XG4gICAgdGhpcy5yZWdpc3RlcmVkRXZlbnRzID0gYXBwbHlVcGRhdGVyc1RvUHJvcHNBbmRSZWdpc3RlckV2ZW50cyh7XG4gICAgICB1cGRhdGVyTWFwOiB1cGRhdGVyTWFwJGMsXG4gICAgICBldmVudE1hcDogZXZlbnRNYXAkYyxcbiAgICAgIHByZXZQcm9wczoge30sXG4gICAgICBuZXh0UHJvcHM6IHRoaXMucHJvcHMsXG4gICAgICBpbnN0YW5jZToga21sTGF5ZXJcbiAgICB9KTtcbiAgICB0aGlzLnNldFN0YXRlKGZ1bmN0aW9uIHNldExtbExheWVyKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAga21sTGF5ZXI6IGttbExheWVyXG4gICAgICB9O1xuICAgIH0sIHRoaXMuc2V0S21sTGF5ZXJDYWxsYmFjayk7XG4gIH07XG5cbiAgX3Byb3RvLmNvbXBvbmVudERpZFVwZGF0ZSA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5rbWxMYXllciAhPT0gbnVsbCkge1xuICAgICAgdW5yZWdpc3RlckV2ZW50cyh0aGlzLnJlZ2lzdGVyZWRFdmVudHMpO1xuICAgICAgdGhpcy5yZWdpc3RlcmVkRXZlbnRzID0gYXBwbHlVcGRhdGVyc1RvUHJvcHNBbmRSZWdpc3RlckV2ZW50cyh7XG4gICAgICAgIHVwZGF0ZXJNYXA6IHVwZGF0ZXJNYXAkYyxcbiAgICAgICAgZXZlbnRNYXA6IGV2ZW50TWFwJGMsXG4gICAgICAgIHByZXZQcm9wczogcHJldlByb3BzLFxuICAgICAgICBuZXh0UHJvcHM6IHRoaXMucHJvcHMsXG4gICAgICAgIGluc3RhbmNlOiB0aGlzLnN0YXRlLmttbExheWVyXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUua21sTGF5ZXIgIT09IG51bGwpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLm9uVW5tb3VudCkge1xuICAgICAgICB0aGlzLnByb3BzLm9uVW5tb3VudCh0aGlzLnN0YXRlLmttbExheWVyKTtcbiAgICAgIH1cblxuICAgICAgdW5yZWdpc3RlckV2ZW50cyh0aGlzLnJlZ2lzdGVyZWRFdmVudHMpO1xuICAgICAgdGhpcy5zdGF0ZS5rbWxMYXllci5zZXRNYXAobnVsbCk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG5cbiAgcmV0dXJuIEttbExheWVyO1xufShQdXJlQ29tcG9uZW50KTtcbkttbExheWVyLmNvbnRleHRUeXBlID0gTWFwQ29udGV4dDtcblxuLyogZXNsaW50LWRpc2FibGUgZmlsZW5hbWVzL21hdGNoLXJlZ2V4ICovXG5mdW5jdGlvbiBnZXRPZmZzZXRPdmVycmlkZShjb250YWluZXJFbGVtZW50LCBnZXRQaXhlbFBvc2l0aW9uT2Zmc2V0KSB7XG4gIHJldHVybiB0eXBlb2YgZ2V0UGl4ZWxQb3NpdGlvbk9mZnNldCA9PT0gJ2Z1bmN0aW9uJyA/IGdldFBpeGVsUG9zaXRpb25PZmZzZXQoY29udGFpbmVyRWxlbWVudC5vZmZzZXRXaWR0aCwgY29udGFpbmVyRWxlbWVudC5vZmZzZXRIZWlnaHQpIDoge307XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG5cbnZhciBjcmVhdGVMYXRMbmcgPSBmdW5jdGlvbiBjcmVhdGVMYXRMbmcoaW5zdCwgVHlwZSkge1xuICByZXR1cm4gbmV3IFR5cGUoaW5zdC5sYXQsIGluc3QubG5nKTtcbn07IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG5cblxudmFyIGNyZWF0ZUxhdExuZ0JvdW5kcyA9IGZ1bmN0aW9uIGNyZWF0ZUxhdExuZ0JvdW5kcyhpbnN0LCBUeXBlKSB7XG4gIHJldHVybiBuZXcgVHlwZShuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKGluc3QubmUubGF0LCBpbnN0Lm5lLmxuZyksIG5ldyBnb29nbGUubWFwcy5MYXRMbmcoaW5zdC5zdy5sYXQsIGluc3Quc3cubG5nKSk7XG59OyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuXG5cbnZhciBlbnN1cmVPZlR5cGUgPSBmdW5jdGlvbiBlbnN1cmVPZlR5cGUoaW5zdCwgdHlwZSwgZmFjdG9yeSkge1xuICByZXR1cm4gaW5zdCBpbnN0YW5jZW9mIHR5cGUgPyBpbnN0IDogZmFjdG9yeShpbnN0LCB0eXBlKTtcbn07XG5cbnZhciBnZXRMYXlvdXRTdHlsZXNCeUJvdW5kcyA9IGZ1bmN0aW9uIGdldExheW91dFN0eWxlc0J5Qm91bmRzKG1hcENhbnZhc1Byb2plY3Rpb24sIG9mZnNldCwgYm91bmRzKSB7XG4gIHZhciBuZSA9IG1hcENhbnZhc1Byb2plY3Rpb24gJiYgbWFwQ2FudmFzUHJvamVjdGlvbi5mcm9tTGF0TG5nVG9EaXZQaXhlbChib3VuZHMuZ2V0Tm9ydGhFYXN0KCkpO1xuICB2YXIgc3cgPSBtYXBDYW52YXNQcm9qZWN0aW9uICYmIG1hcENhbnZhc1Byb2plY3Rpb24uZnJvbUxhdExuZ1RvRGl2UGl4ZWwoYm91bmRzLmdldFNvdXRoV2VzdCgpKTtcblxuICBpZiAobmUgJiYgc3cpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbGVmdDogc3cueCArIG9mZnNldC54ICsgXCJweFwiLFxuICAgICAgdG9wOiBuZS55ICsgb2Zmc2V0LnkgKyBcInB4XCIsXG4gICAgICB3aWR0aDogbmUueCAtIHN3LnggLSBvZmZzZXQueCArIFwicHhcIixcbiAgICAgIGhlaWdodDogc3cueSAtIG5lLnkgLSBvZmZzZXQueSArIFwicHhcIlxuICAgIH07XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGxlZnQ6ICctOTk5OXB4JyxcbiAgICB0b3A6ICctOTk5OXB4J1xuICB9O1xufTtcblxudmFyIGdldExheW91dFN0eWxlc0J5UG9zaXRpb24gPSBmdW5jdGlvbiBnZXRMYXlvdXRTdHlsZXNCeVBvc2l0aW9uKG1hcENhbnZhc1Byb2plY3Rpb24sIG9mZnNldCwgcG9zaXRpb24pIHtcbiAgdmFyIHBvaW50ID0gbWFwQ2FudmFzUHJvamVjdGlvbiAmJiBtYXBDYW52YXNQcm9qZWN0aW9uLmZyb21MYXRMbmdUb0RpdlBpeGVsKHBvc2l0aW9uKTtcblxuICBpZiAocG9pbnQpIHtcbiAgICB2YXIgeCA9IHBvaW50LngsXG4gICAgICAgIHkgPSBwb2ludC55O1xuICAgIHJldHVybiB7XG4gICAgICBsZWZ0OiB4ICsgb2Zmc2V0LnggKyBcInB4XCIsXG4gICAgICB0b3A6IHkgKyBvZmZzZXQueSArIFwicHhcIlxuICAgIH07XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGxlZnQ6ICctOTk5OXB4JyxcbiAgICB0b3A6ICctOTk5OXB4J1xuICB9O1xufTtcblxudmFyIGdldExheW91dFN0eWxlcyA9IGZ1bmN0aW9uIGdldExheW91dFN0eWxlcyhtYXBDYW52YXNQcm9qZWN0aW9uLCBvZmZzZXQsIGJvdW5kcywgcG9zaXRpb24pIHtcbiAgcmV0dXJuIGJvdW5kcyAhPT0gdW5kZWZpbmVkID8gZ2V0TGF5b3V0U3R5bGVzQnlCb3VuZHMobWFwQ2FudmFzUHJvamVjdGlvbiwgb2Zmc2V0LCBlbnN1cmVPZlR5cGUoYm91bmRzLCBnb29nbGUubWFwcy5MYXRMbmdCb3VuZHMsIGNyZWF0ZUxhdExuZ0JvdW5kcykpIDogZ2V0TGF5b3V0U3R5bGVzQnlQb3NpdGlvbihtYXBDYW52YXNQcm9qZWN0aW9uLCBvZmZzZXQsIGVuc3VyZU9mVHlwZShwb3NpdGlvbiwgZ29vZ2xlLm1hcHMuTGF0TG5nLCBjcmVhdGVMYXRMbmcpKTtcbn07XG52YXIgYXJlUG9zaXRpb25zRXF1YWwgPSBmdW5jdGlvbiBhcmVQb3NpdGlvbnNFcXVhbChjdXJyZW50UG9zaXRpb24sIHByZXZpb3VzUG9zaXRpb24pIHtcbiAgcmV0dXJuIGN1cnJlbnRQb3NpdGlvbi5sZWZ0ID09PSBwcmV2aW91c1Bvc2l0aW9uLmxlZnQgJiYgY3VycmVudFBvc2l0aW9uLnRvcCA9PT0gcHJldmlvdXNQb3NpdGlvbi50b3AgJiYgY3VycmVudFBvc2l0aW9uLndpZHRoID09PSBwcmV2aW91c1Bvc2l0aW9uLmhlaWdodCAmJiBjdXJyZW50UG9zaXRpb24uaGVpZ2h0ID09PSBwcmV2aW91c1Bvc2l0aW9uLmhlaWdodDtcbn07XG5cbmZ1bmN0aW9uIGNvbnZlcnRUb0xhdExuZ1N0cmluZyhsYXRMbmdMaWtlKSB7XG4gIGlmICghbGF0TG5nTGlrZSkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIHZhciBsYXRMbmcgPSBsYXRMbmdMaWtlIGluc3RhbmNlb2YgZ29vZ2xlLm1hcHMuTGF0TG5nID8gbGF0TG5nTGlrZSA6IG5ldyBnb29nbGUubWFwcy5MYXRMbmcobGF0TG5nTGlrZS5sYXQsIGxhdExuZ0xpa2UubG5nKTtcbiAgcmV0dXJuIGxhdExuZyArICcnO1xufVxuXG5mdW5jdGlvbiBjb252ZXJ0VG9MYXRMbmdCb3VuZHNTdHJpbmcobGF0TG5nQm91bmRzTGlrZSkge1xuICBpZiAoIWxhdExuZ0JvdW5kc0xpa2UpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICB2YXIgbGF0TG5nQm91bmRzID0gbGF0TG5nQm91bmRzTGlrZSBpbnN0YW5jZW9mIGdvb2dsZS5tYXBzLkxhdExuZ0JvdW5kcyA/IGxhdExuZ0JvdW5kc0xpa2UgOiBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nQm91bmRzKG5ldyBnb29nbGUubWFwcy5MYXRMbmcobGF0TG5nQm91bmRzTGlrZS5zb3V0aCwgbGF0TG5nQm91bmRzTGlrZS5lYXN0KSwgbmV3IGdvb2dsZS5tYXBzLkxhdExuZyhsYXRMbmdCb3VuZHNMaWtlLm5vcnRoLCBsYXRMbmdCb3VuZHNMaWtlLndlc3QpKTtcbiAgcmV0dXJuIGxhdExuZ0JvdW5kcyArICcnO1xufVxuXG52YXIgT3ZlcmxheVZpZXcgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9SZWFjdCRQdXJlQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKE92ZXJsYXlWaWV3LCBfUmVhY3QkUHVyZUNvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gT3ZlcmxheVZpZXcocHJvcHMpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfdGhpcyA9IF9SZWFjdCRQdXJlQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMpIHx8IHRoaXM7XG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBwYW5lRWw6IG51bGwsXG4gICAgICBjb250YWluZXJTdHlsZToge1xuICAgICAgICAvLyBzZXQgaW5pdGlhbCBwb3NpdGlvblxuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJ1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy51cGRhdGVQYW5lID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIG1hcFBhbmVOYW1lID0gX3RoaXMucHJvcHMubWFwUGFuZU5hbWU7IC8vIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL21hcHMvZG9jdW1lbnRhdGlvbi9qYXZhc2NyaXB0LzMuZXhwL3JlZmVyZW5jZSNNYXBQYW5lc1xuXG4gICAgICB2YXIgbWFwUGFuZXMgPSBfdGhpcy5vdmVybGF5Vmlldy5nZXRQYW5lcygpO1xuXG4gICAgICAhISFtYXBQYW5lTmFtZSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IGludmFyaWFudChmYWxzZSwgXCJPdmVybGF5VmlldyByZXF1aXJlcyBwcm9wcy5tYXBQYW5lTmFtZSBidXQgZ290ICVzXCIsIG1hcFBhbmVOYW1lKSA6IGludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG5cbiAgICAgIGlmIChtYXBQYW5lcykge1xuICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgcGFuZUVsOiBtYXBQYW5lc1ttYXBQYW5lTmFtZV1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgcGFuZUVsOiBudWxsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5vbkFkZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzLnVwZGF0ZVBhbmUoKTtcblxuICAgICAgX3RoaXMucHJvcHMub25Mb2FkID09IG51bGwgPyB2b2lkIDAgOiBfdGhpcy5wcm9wcy5vbkxvYWQoX3RoaXMub3ZlcmxheVZpZXcpO1xuICAgIH07XG5cbiAgICBfdGhpcy5vblBvc2l0aW9uRWxlbWVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBtYXBDYW52YXNQcm9qZWN0aW9uID0gX3RoaXMub3ZlcmxheVZpZXcuZ2V0UHJvamVjdGlvbigpO1xuXG4gICAgICB2YXIgb2Zmc2V0ID0gX2V4dGVuZHMoe1xuICAgICAgICB4OiAwLFxuICAgICAgICB5OiAwXG4gICAgICB9LCBfdGhpcy5jb250YWluZXJSZWYuY3VycmVudCA/IGdldE9mZnNldE92ZXJyaWRlKF90aGlzLmNvbnRhaW5lclJlZi5jdXJyZW50LCBfdGhpcy5wcm9wcy5nZXRQaXhlbFBvc2l0aW9uT2Zmc2V0KSA6IHt9KTtcblxuICAgICAgdmFyIGxheW91dFN0eWxlcyA9IGdldExheW91dFN0eWxlcyhtYXBDYW52YXNQcm9qZWN0aW9uLCBvZmZzZXQsIF90aGlzLnByb3BzLmJvdW5kcywgX3RoaXMucHJvcHMucG9zaXRpb24pO1xuICAgICAgdmFyIF90aGlzJHN0YXRlJGNvbnRhaW5lciA9IF90aGlzLnN0YXRlLmNvbnRhaW5lclN0eWxlLFxuICAgICAgICAgIGxlZnQgPSBfdGhpcyRzdGF0ZSRjb250YWluZXIubGVmdCxcbiAgICAgICAgICB0b3AgPSBfdGhpcyRzdGF0ZSRjb250YWluZXIudG9wLFxuICAgICAgICAgIHdpZHRoID0gX3RoaXMkc3RhdGUkY29udGFpbmVyLndpZHRoLFxuICAgICAgICAgIGhlaWdodCA9IF90aGlzJHN0YXRlJGNvbnRhaW5lci5oZWlnaHQ7XG5cbiAgICAgIGlmICghYXJlUG9zaXRpb25zRXF1YWwobGF5b3V0U3R5bGVzLCB7XG4gICAgICAgIGxlZnQ6IGxlZnQsXG4gICAgICAgIHRvcDogdG9wLFxuICAgICAgICB3aWR0aDogd2lkdGgsXG4gICAgICAgIGhlaWdodDogaGVpZ2h0XG4gICAgICB9KSkge1xuICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgY29udGFpbmVyU3R5bGU6IF9leHRlbmRzKHt9LCBsYXlvdXRTdHlsZXMsIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnXG4gICAgICAgICAgfSlcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLmRyYXcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpcy5vblBvc2l0aW9uRWxlbWVudCgpO1xuICAgIH07XG5cbiAgICBfdGhpcy5vblJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzLnNldFN0YXRlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBwYW5lRWw6IG51bGxcbiAgICAgICAgfTtcbiAgICAgIH0pOyAvLyB0aGlzLm1hcFBhbmVFbCA9IG51bGxcblxuXG4gICAgICBfdGhpcy5wcm9wcy5vblVubW91bnQgPT0gbnVsbCA/IHZvaWQgMCA6IF90aGlzLnByb3BzLm9uVW5tb3VudChfdGhpcy5vdmVybGF5Vmlldyk7XG4gICAgfTtcblxuICAgIF90aGlzLmNvbnRhaW5lclJlZiA9IGNyZWF0ZVJlZigpOyAvLyBZb3UgbXVzdCBpbXBsZW1lbnQgdGhyZWUgbWV0aG9kczogb25BZGQoKSwgZHJhdygpLCBhbmQgb25SZW1vdmUoKS5cblxuICAgIHZhciBvdmVybGF5VmlldyA9IG5ldyBnb29nbGUubWFwcy5PdmVybGF5VmlldygpO1xuICAgIG92ZXJsYXlWaWV3Lm9uQWRkID0gX3RoaXMub25BZGQ7XG4gICAgb3ZlcmxheVZpZXcuZHJhdyA9IF90aGlzLmRyYXc7XG4gICAgb3ZlcmxheVZpZXcub25SZW1vdmUgPSBfdGhpcy5vblJlbW92ZTtcbiAgICBfdGhpcy5vdmVybGF5VmlldyA9IG92ZXJsYXlWaWV3O1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBPdmVybGF5Vmlldy5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgLy8gWW91IG11c3QgY2FsbCBzZXRNYXAoKSB3aXRoIGEgdmFsaWQgTWFwIG9iamVjdCB0byB0cmlnZ2VyIHRoZSBjYWxsIHRvXG4gICAgLy8gdGhlIG9uQWRkKCkgbWV0aG9kIGFuZCBzZXRNYXAobnVsbCkgaW4gb3JkZXIgdG8gdHJpZ2dlciB0aGUgb25SZW1vdmUoKSBtZXRob2QuXG4gICAgdGhpcy5vdmVybGF5Vmlldy5zZXRNYXAodGhpcy5jb250ZXh0KTtcbiAgfTtcblxuICBfcHJvdG8uY29tcG9uZW50RGlkVXBkYXRlID0gZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgIHZhciBwcmV2UG9zaXRpb25TdHJpbmcgPSBjb252ZXJ0VG9MYXRMbmdTdHJpbmcocHJldlByb3BzLnBvc2l0aW9uKTtcbiAgICB2YXIgcG9zaXRpb25TdHJpbmcgPSBjb252ZXJ0VG9MYXRMbmdTdHJpbmcodGhpcy5wcm9wcy5wb3NpdGlvbik7XG4gICAgdmFyIHByZXZCb3VuZHNTdHJpbmcgPSBjb252ZXJ0VG9MYXRMbmdCb3VuZHNTdHJpbmcocHJldlByb3BzLmJvdW5kcyk7XG4gICAgdmFyIGJvdW5kc1N0cmluZyA9IGNvbnZlcnRUb0xhdExuZ0JvdW5kc1N0cmluZyh0aGlzLnByb3BzLmJvdW5kcyk7XG5cbiAgICBpZiAocHJldlBvc2l0aW9uU3RyaW5nICE9PSBwb3NpdGlvblN0cmluZyB8fCBwcmV2Qm91bmRzU3RyaW5nICE9PSBib3VuZHNTdHJpbmcpIHtcbiAgICAgIHRoaXMub3ZlcmxheVZpZXcuZHJhdygpO1xuICAgIH1cblxuICAgIGlmIChwcmV2UHJvcHMubWFwUGFuZU5hbWUgIT09IHRoaXMucHJvcHMubWFwUGFuZU5hbWUpIHtcbiAgICAgIHRoaXMudXBkYXRlUGFuZSgpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLm92ZXJsYXlWaWV3LnNldE1hcChudWxsKTtcbiAgfTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBwYW5lRWwgPSB0aGlzLnN0YXRlLnBhbmVFbDtcblxuICAgIGlmIChwYW5lRWwpIHtcbiAgICAgIHJldHVybiBjcmVhdGVQb3J0YWwoY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIHJlZjogdGhpcy5jb250YWluZXJSZWYsXG4gICAgICAgIHN0eWxlOiB0aGlzLnN0YXRlLmNvbnRhaW5lclN0eWxlXG4gICAgICB9LCBDaGlsZHJlbi5vbmx5KHRoaXMucHJvcHMuY2hpbGRyZW4pKSwgcGFuZUVsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBPdmVybGF5Vmlldztcbn0oUHVyZUNvbXBvbmVudCk7XG5PdmVybGF5Vmlldy5GTE9BVF9QQU5FID0gXCJmbG9hdFBhbmVcIjtcbk92ZXJsYXlWaWV3Lk1BUF9QQU5FID0gXCJtYXBQYW5lXCI7XG5PdmVybGF5Vmlldy5NQVJLRVJfTEFZRVIgPSBcIm1hcmtlckxheWVyXCI7XG5PdmVybGF5Vmlldy5PVkVSTEFZX0xBWUVSID0gXCJvdmVybGF5TGF5ZXJcIjtcbk92ZXJsYXlWaWV3Lk9WRVJMQVlfTU9VU0VfVEFSR0VUID0gXCJvdmVybGF5TW91c2VUYXJnZXRcIjtcbk92ZXJsYXlWaWV3LmNvbnRleHRUeXBlID0gTWFwQ29udGV4dDtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnZhciBldmVudE1hcCRkID0ge1xuICBvbkRibENsaWNrOiAnZGJsY2xpY2snLFxuICBvbkNsaWNrOiAnY2xpY2snXG59O1xudmFyIHVwZGF0ZXJNYXAkZCA9IHtcbiAgb3BhY2l0eTogZnVuY3Rpb24gb3BhY2l0eShpbnN0YW5jZSwgX29wYWNpdHkpIHtcbiAgICBpbnN0YW5jZS5zZXRPcGFjaXR5KF9vcGFjaXR5KTtcbiAgfVxufTtcbnZhciBHcm91bmRPdmVybGF5ID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfUmVhY3QkUHVyZUNvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShHcm91bmRPdmVybGF5LCBfUmVhY3QkUHVyZUNvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gR3JvdW5kT3ZlcmxheSgpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfdGhpcyA9IF9SZWFjdCRQdXJlQ29tcG9uZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICBfdGhpcy5yZWdpc3RlcmVkRXZlbnRzID0gW107XG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBncm91bmRPdmVybGF5OiBudWxsXG4gICAgfTtcblxuICAgIF90aGlzLnNldEdyb3VuZE92ZXJsYXlDYWxsYmFjayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChfdGhpcy5zdGF0ZS5ncm91bmRPdmVybGF5ICE9PSBudWxsICYmIF90aGlzLnByb3BzLm9uTG9hZCkge1xuICAgICAgICBfdGhpcy5wcm9wcy5vbkxvYWQoX3RoaXMuc3RhdGUuZ3JvdW5kT3ZlcmxheSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBHcm91bmRPdmVybGF5LnByb3RvdHlwZTtcblxuICBfcHJvdG8uY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAhKCEhdGhpcy5wcm9wcy51cmwgfHwgISF0aGlzLnByb3BzLmJvdW5kcykgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBpbnZhcmlhbnQoZmFsc2UsIFwiRm9yIEdyb3VuZE92ZXJsYXksIHVybCBhbmQgYm91bmRzIGFyZSBwYXNzZWQgaW4gdG8gY29uc3RydWN0b3IgYW5kIGFyZSBpbW11dGFibGUgYWZ0ZXIgaW5zdGFudGlhdGVkLiBUaGlzIGlzIHRoZSBiZWhhdmlvciBvZiBHb29nbGUgTWFwcyBKYXZhU2NyaXB0IEFQSSB2MyAoIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdC9yZWZlcmVuY2UjR3JvdW5kT3ZlcmxheSkgSGVuY2UsIHVzZSB0aGUgY29ycmVzcG9uZGluZyB0d28gcHJvcHMgcHJvdmlkZWQgYnkgYHJlYWN0LWdvb2dsZS1tYXBzLWFwaWAsIHVybCBhbmQgYm91bmRzLiBJbiBzb21lIGNhc2VzLCB5b3UnbGwgbmVlZCB0aGUgR3JvdW5kT3ZlcmxheSBjb21wb25lbnQgdG8gcmVmbGVjdCB0aGUgY2hhbmdlcyBvZiB1cmwgYW5kIGJvdW5kcy4gWW91IGNhbiBsZXZlcmFnZSB0aGUgUmVhY3QncyBrZXkgcHJvcGVydHkgdG8gcmVtb3VudCB0aGUgY29tcG9uZW50LiBUeXBpY2FsbHksIGp1c3QgYGtleT17dXJsfWAgd291bGQgc2VydmUgeW91ciBuZWVkLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3RvbWNoZW50dy9yZWFjdC1nb29nbGUtbWFwcy9pc3N1ZXMvNjU1XCIpIDogaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcbiAgICB2YXIgZ3JvdW5kT3ZlcmxheSA9IG5ldyBnb29nbGUubWFwcy5Hcm91bmRPdmVybGF5KHRoaXMucHJvcHMudXJsLCB0aGlzLnByb3BzLmJvdW5kcywgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMub3B0aW9ucywge1xuICAgICAgbWFwOiB0aGlzLmNvbnRleHRcbiAgICB9KSk7XG4gICAgdGhpcy5yZWdpc3RlcmVkRXZlbnRzID0gYXBwbHlVcGRhdGVyc1RvUHJvcHNBbmRSZWdpc3RlckV2ZW50cyh7XG4gICAgICB1cGRhdGVyTWFwOiB1cGRhdGVyTWFwJGQsXG4gICAgICBldmVudE1hcDogZXZlbnRNYXAkZCxcbiAgICAgIHByZXZQcm9wczoge30sXG4gICAgICBuZXh0UHJvcHM6IHRoaXMucHJvcHMsXG4gICAgICBpbnN0YW5jZTogZ3JvdW5kT3ZlcmxheVxuICAgIH0pO1xuICAgIHRoaXMuc2V0U3RhdGUoZnVuY3Rpb24gc2V0R3JvdW5kT3ZlcmxheSgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGdyb3VuZE92ZXJsYXk6IGdyb3VuZE92ZXJsYXlcbiAgICAgIH07XG4gICAgfSwgdGhpcy5zZXRHcm91bmRPdmVybGF5Q2FsbGJhY2spO1xuICB9O1xuXG4gIF9wcm90by5jb21wb25lbnREaWRVcGRhdGUgPSBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUuZ3JvdW5kT3ZlcmxheSAhPT0gbnVsbCkge1xuICAgICAgdW5yZWdpc3RlckV2ZW50cyh0aGlzLnJlZ2lzdGVyZWRFdmVudHMpO1xuICAgICAgdGhpcy5yZWdpc3RlcmVkRXZlbnRzID0gYXBwbHlVcGRhdGVyc1RvUHJvcHNBbmRSZWdpc3RlckV2ZW50cyh7XG4gICAgICAgIHVwZGF0ZXJNYXA6IHVwZGF0ZXJNYXAkZCxcbiAgICAgICAgZXZlbnRNYXA6IGV2ZW50TWFwJGQsXG4gICAgICAgIHByZXZQcm9wczogcHJldlByb3BzLFxuICAgICAgICBuZXh0UHJvcHM6IHRoaXMucHJvcHMsXG4gICAgICAgIGluc3RhbmNlOiB0aGlzLnN0YXRlLmdyb3VuZE92ZXJsYXlcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5ncm91bmRPdmVybGF5KSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5vblVubW91bnQpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vblVubW91bnQodGhpcy5zdGF0ZS5ncm91bmRPdmVybGF5KTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zdGF0ZS5ncm91bmRPdmVybGF5LnNldE1hcChudWxsKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcblxuICByZXR1cm4gR3JvdW5kT3ZlcmxheTtcbn0oUHVyZUNvbXBvbmVudCk7XG5Hcm91bmRPdmVybGF5LmRlZmF1bHRQcm9wcyA9IHtcbiAgb25Mb2FkOiBub29wXG59O1xuR3JvdW5kT3ZlcmxheS5jb250ZXh0VHlwZSA9IE1hcENvbnRleHQ7XG5cbnZhciBldmVudE1hcCRlID0ge307XG52YXIgdXBkYXRlck1hcCRlID0ge1xuICBkYXRhOiBmdW5jdGlvbiBkYXRhKGluc3RhbmNlLCBfZGF0YSkge1xuICAgIGluc3RhbmNlLnNldERhdGEoX2RhdGEpO1xuICB9LFxuICBtYXA6IGZ1bmN0aW9uIG1hcChpbnN0YW5jZSwgX21hcCkge1xuICAgIGluc3RhbmNlLnNldE1hcChfbWFwKTtcbiAgfSxcbiAgb3B0aW9uczogZnVuY3Rpb24gb3B0aW9ucyhpbnN0YW5jZSwgX29wdGlvbnMpIHtcbiAgICBpbnN0YW5jZS5zZXRPcHRpb25zKF9vcHRpb25zKTtcbiAgfVxufTtcbnZhciBIZWF0bWFwTGF5ZXIgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9SZWFjdCRQdXJlQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKEhlYXRtYXBMYXllciwgX1JlYWN0JFB1cmVDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIEhlYXRtYXBMYXllcigpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfdGhpcyA9IF9SZWFjdCRQdXJlQ29tcG9uZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICBfdGhpcy5yZWdpc3RlcmVkRXZlbnRzID0gW107XG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBoZWF0bWFwTGF5ZXI6IG51bGxcbiAgICB9O1xuXG4gICAgX3RoaXMuc2V0SGVhdG1hcExheWVyQ2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoX3RoaXMuc3RhdGUuaGVhdG1hcExheWVyICE9PSBudWxsICYmIF90aGlzLnByb3BzLm9uTG9hZCkge1xuICAgICAgICBfdGhpcy5wcm9wcy5vbkxvYWQoX3RoaXMuc3RhdGUuaGVhdG1hcExheWVyKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IEhlYXRtYXBMYXllci5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgISEhZ29vZ2xlLm1hcHMudmlzdWFsaXphdGlvbiA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IGludmFyaWFudChmYWxzZSwgJ0RpZCB5b3UgaW5jbHVkZSBwcm9wIGxpYnJhcmllcz17W1widmlzdWFsaXphdGlvblwiXX0gdG8gPExvYWRTY3JpcHQgLz4/ICVzJywgZ29vZ2xlLm1hcHMudmlzdWFsaXphdGlvbikgOiBpbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICAgICEhIXRoaXMucHJvcHMuZGF0YSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IGludmFyaWFudChmYWxzZSwgJ2RhdGEgcHJvcGVydHkgaXMgcmVxdWlyZWQgaW4gSGVhdG1hcExheWVyICVzJywgdGhpcy5wcm9wcy5kYXRhKSA6IGludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gICAgdmFyIGhlYXRtYXBMYXllciA9IG5ldyBnb29nbGUubWFwcy52aXN1YWxpemF0aW9uLkhlYXRtYXBMYXllcihfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcy5vcHRpb25zIHx8IHt9LCB7XG4gICAgICBkYXRhOiB0aGlzLnByb3BzLmRhdGEsXG4gICAgICBtYXA6IHRoaXMuY29udGV4dFxuICAgIH0pKTtcbiAgICB0aGlzLnJlZ2lzdGVyZWRFdmVudHMgPSBhcHBseVVwZGF0ZXJzVG9Qcm9wc0FuZFJlZ2lzdGVyRXZlbnRzKHtcbiAgICAgIHVwZGF0ZXJNYXA6IHVwZGF0ZXJNYXAkZSxcbiAgICAgIGV2ZW50TWFwOiBldmVudE1hcCRlLFxuICAgICAgcHJldlByb3BzOiB7fSxcbiAgICAgIG5leHRQcm9wczogdGhpcy5wcm9wcyxcbiAgICAgIGluc3RhbmNlOiBoZWF0bWFwTGF5ZXJcbiAgICB9KTtcbiAgICB0aGlzLnNldFN0YXRlKGZ1bmN0aW9uIHNldEhlYXRtYXBMYXllcigpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGhlYXRtYXBMYXllcjogaGVhdG1hcExheWVyXG4gICAgICB9O1xuICAgIH0sIHRoaXMuc2V0SGVhdG1hcExheWVyQ2FsbGJhY2spO1xuICB9O1xuXG4gIF9wcm90by5jb21wb25lbnREaWRVcGRhdGUgPSBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgdW5yZWdpc3RlckV2ZW50cyh0aGlzLnJlZ2lzdGVyZWRFdmVudHMpO1xuICAgIHRoaXMucmVnaXN0ZXJlZEV2ZW50cyA9IGFwcGx5VXBkYXRlcnNUb1Byb3BzQW5kUmVnaXN0ZXJFdmVudHMoe1xuICAgICAgdXBkYXRlck1hcDogdXBkYXRlck1hcCRlLFxuICAgICAgZXZlbnRNYXA6IGV2ZW50TWFwJGUsXG4gICAgICBwcmV2UHJvcHM6IHByZXZQcm9wcyxcbiAgICAgIG5leHRQcm9wczogdGhpcy5wcm9wcyxcbiAgICAgIGluc3RhbmNlOiB0aGlzLnN0YXRlLmhlYXRtYXBMYXllclxuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5jb21wb25lbnRXaWxsVW5tb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGlmICh0aGlzLnN0YXRlLmhlYXRtYXBMYXllciAhPT0gbnVsbCkge1xuICAgICAgaWYgKHRoaXMucHJvcHMub25Vbm1vdW50KSB7XG4gICAgICAgIHRoaXMucHJvcHMub25Vbm1vdW50KHRoaXMuc3RhdGUuaGVhdG1hcExheWVyKTtcbiAgICAgIH1cblxuICAgICAgdW5yZWdpc3RlckV2ZW50cyh0aGlzLnJlZ2lzdGVyZWRFdmVudHMpO1xuICAgICAgdGhpcy5zdGF0ZS5oZWF0bWFwTGF5ZXIuc2V0TWFwKG51bGwpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHJldHVybiBudWxsO1xuICB9O1xuXG4gIHJldHVybiBIZWF0bWFwTGF5ZXI7XG59KFB1cmVDb21wb25lbnQpO1xuSGVhdG1hcExheWVyLmNvbnRleHRUeXBlID0gTWFwQ29udGV4dDtcblxudmFyIGV2ZW50TWFwJGYgPSB7XG4gIG9uQ2xvc2VDbGljazogJ2Nsb3NlY2xpY2snLFxuICBvblBhbm9DaGFuZ2VkOiAncGFub19jaGFuZ2VkJyxcbiAgb25Qb3NpdGlvbkNoYW5nZWQ6ICdwb3NpdGlvbl9jaGFuZ2VkJyxcbiAgb25Qb3ZDaGFuZ2VkOiAncG92X2NoYW5nZWQnLFxuICBvblJlc2l6ZTogJ3Jlc2l6ZScsXG4gIG9uU3RhdHVzQ2hhbmdlZDogJ3N0YXR1c19jaGFuZ2VkJyxcbiAgb25WaXNpYmxlQ2hhbmdlZDogJ3Zpc2libGVfY2hhbmdlZCcsXG4gIG9uWm9vbUNoYW5nZWQ6ICd6b29tX2NoYW5nZWQnXG59O1xudmFyIHVwZGF0ZXJNYXAkZiA9IHtcbiAgcmVnaXN0ZXI6IGZ1bmN0aW9uIHJlZ2lzdGVyKGluc3RhbmNlLCBwcm92aWRlciwgb3B0aW9ucykge1xuICAgIGluc3RhbmNlLnJlZ2lzdGVyUGFub1Byb3ZpZGVyKHByb3ZpZGVyLCBvcHRpb25zKTtcbiAgfSxcbiAgbGlua3M6IGZ1bmN0aW9uIGxpbmtzKGluc3RhbmNlLCBfbGlua3MpIHtcbiAgICBpbnN0YW5jZS5zZXRMaW5rcyhfbGlua3MpO1xuICB9LFxuICBtb3Rpb25UcmFja2luZzogZnVuY3Rpb24gbW90aW9uVHJhY2tpbmcoaW5zdGFuY2UsIF9tb3Rpb25UcmFja2luZykge1xuICAgIGluc3RhbmNlLnNldE1vdGlvblRyYWNraW5nKF9tb3Rpb25UcmFja2luZyk7XG4gIH0sXG4gIG9wdGlvbnM6IGZ1bmN0aW9uIG9wdGlvbnMoaW5zdGFuY2UsIF9vcHRpb25zKSB7XG4gICAgaW5zdGFuY2Uuc2V0T3B0aW9ucyhfb3B0aW9ucyk7XG4gIH0sXG4gIHBhbm86IGZ1bmN0aW9uIHBhbm8oaW5zdGFuY2UsIF9wYW5vKSB7XG4gICAgaW5zdGFuY2Uuc2V0UGFubyhfcGFubyk7XG4gIH0sXG4gIHBvc2l0aW9uOiBmdW5jdGlvbiBwb3NpdGlvbihpbnN0YW5jZSwgX3Bvc2l0aW9uKSB7XG4gICAgaW5zdGFuY2Uuc2V0UG9zaXRpb24oX3Bvc2l0aW9uKTtcbiAgfSxcbiAgcG92OiBmdW5jdGlvbiBwb3YoaW5zdGFuY2UsIF9wb3YpIHtcbiAgICBpbnN0YW5jZS5zZXRQb3YoX3Bvdik7XG4gIH0sXG4gIHZpc2libGU6IGZ1bmN0aW9uIHZpc2libGUoaW5zdGFuY2UsIF92aXNpYmxlKSB7XG4gICAgaW5zdGFuY2Uuc2V0VmlzaWJsZShfdmlzaWJsZSk7XG4gIH0sXG4gIHpvb206IGZ1bmN0aW9uIHpvb20oaW5zdGFuY2UsIF96b29tKSB7XG4gICAgaW5zdGFuY2Uuc2V0Wm9vbShfem9vbSk7XG4gIH1cbn07XG52YXIgU3RyZWV0Vmlld1Bhbm9yYW1hID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfUmVhY3QkUHVyZUNvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShTdHJlZXRWaWV3UGFub3JhbWEsIF9SZWFjdCRQdXJlQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBTdHJlZXRWaWV3UGFub3JhbWEoKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX3RoaXMgPSBfUmVhY3QkUHVyZUNvbXBvbmVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgX3RoaXMucmVnaXN0ZXJlZEV2ZW50cyA9IFtdO1xuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgc3RyZWV0Vmlld1Bhbm9yYW1hOiBudWxsXG4gICAgfTtcblxuICAgIF90aGlzLnNldFN0cmVldFZpZXdQYW5vcmFtYUNhbGxiYWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKF90aGlzLnN0YXRlLnN0cmVldFZpZXdQYW5vcmFtYSAhPT0gbnVsbCAmJiBfdGhpcy5wcm9wcy5vbkxvYWQpIHtcbiAgICAgICAgX3RoaXMucHJvcHMub25Mb2FkKF90aGlzLnN0YXRlLnN0cmVldFZpZXdQYW5vcmFtYSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBTdHJlZXRWaWV3UGFub3JhbWEucHJvdG90eXBlO1xuXG4gIF9wcm90by5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHZhciBzdHJlZXRWaWV3UGFub3JhbWEgPSB0aGlzLmNvbnRleHQuZ2V0U3RyZWV0VmlldygpO1xuICAgIHRoaXMucmVnaXN0ZXJlZEV2ZW50cyA9IGFwcGx5VXBkYXRlcnNUb1Byb3BzQW5kUmVnaXN0ZXJFdmVudHMoe1xuICAgICAgdXBkYXRlck1hcDogdXBkYXRlck1hcCRmLFxuICAgICAgZXZlbnRNYXA6IGV2ZW50TWFwJGYsXG4gICAgICBwcmV2UHJvcHM6IHt9LFxuICAgICAgbmV4dFByb3BzOiB0aGlzLnByb3BzLFxuICAgICAgaW5zdGFuY2U6IHN0cmVldFZpZXdQYW5vcmFtYVxuICAgIH0pO1xuICAgIHRoaXMuc2V0U3RhdGUoZnVuY3Rpb24gc2V0U3RyZWV0Vmlld1Bhbm9yYW1hKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3RyZWV0Vmlld1Bhbm9yYW1hOiBzdHJlZXRWaWV3UGFub3JhbWFcbiAgICAgIH07XG4gICAgfSwgdGhpcy5zZXRTdHJlZXRWaWV3UGFub3JhbWFDYWxsYmFjayk7XG4gIH07XG5cbiAgX3Byb3RvLmNvbXBvbmVudERpZFVwZGF0ZSA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5zdHJlZXRWaWV3UGFub3JhbWEgIT09IG51bGwpIHtcbiAgICAgIHVucmVnaXN0ZXJFdmVudHModGhpcy5yZWdpc3RlcmVkRXZlbnRzKTtcbiAgICAgIHRoaXMucmVnaXN0ZXJlZEV2ZW50cyA9IGFwcGx5VXBkYXRlcnNUb1Byb3BzQW5kUmVnaXN0ZXJFdmVudHMoe1xuICAgICAgICB1cGRhdGVyTWFwOiB1cGRhdGVyTWFwJGYsXG4gICAgICAgIGV2ZW50TWFwOiBldmVudE1hcCRmLFxuICAgICAgICBwcmV2UHJvcHM6IHByZXZQcm9wcyxcbiAgICAgICAgbmV4dFByb3BzOiB0aGlzLnByb3BzLFxuICAgICAgICBpbnN0YW5jZTogdGhpcy5zdGF0ZS5zdHJlZXRWaWV3UGFub3JhbWFcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5zdHJlZXRWaWV3UGFub3JhbWEgIT09IG51bGwpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLm9uVW5tb3VudCkge1xuICAgICAgICB0aGlzLnByb3BzLm9uVW5tb3VudCh0aGlzLnN0YXRlLnN0cmVldFZpZXdQYW5vcmFtYSk7XG4gICAgICB9XG5cbiAgICAgIHVucmVnaXN0ZXJFdmVudHModGhpcy5yZWdpc3RlcmVkRXZlbnRzKTtcbiAgICAgIHRoaXMuc3RhdGUuc3RyZWV0Vmlld1Bhbm9yYW1hLnNldFZpc2libGUoZmFsc2UpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHJldHVybiBudWxsO1xuICB9O1xuXG4gIHJldHVybiBTdHJlZXRWaWV3UGFub3JhbWE7XG59KFB1cmVDb21wb25lbnQpO1xuU3RyZWV0Vmlld1Bhbm9yYW1hLmNvbnRleHRUeXBlID0gTWFwQ29udGV4dDtcblxudmFyIFN0cmVldFZpZXdTZXJ2aWNlID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfUmVhY3QkUHVyZUNvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShTdHJlZXRWaWV3U2VydmljZSwgX1JlYWN0JFB1cmVDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFN0cmVldFZpZXdTZXJ2aWNlKCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIF90aGlzID0gX1JlYWN0JFB1cmVDb21wb25lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgc3RyZWV0Vmlld1NlcnZpY2U6IG51bGxcbiAgICB9O1xuXG4gICAgX3RoaXMuc2V0U3RyZWV0Vmlld1NlcnZpY2VDYWxsYmFjayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChfdGhpcy5zdGF0ZS5zdHJlZXRWaWV3U2VydmljZSAhPT0gbnVsbCAmJiBfdGhpcy5wcm9wcy5vbkxvYWQpIHtcbiAgICAgICAgX3RoaXMucHJvcHMub25Mb2FkKF90aGlzLnN0YXRlLnN0cmVldFZpZXdTZXJ2aWNlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IFN0cmVldFZpZXdTZXJ2aWNlLnByb3RvdHlwZTtcblxuICBfcHJvdG8uY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB2YXIgc3RyZWV0Vmlld1NlcnZpY2UgPSBuZXcgZ29vZ2xlLm1hcHMuU3RyZWV0Vmlld1NlcnZpY2UoKTtcbiAgICB0aGlzLnNldFN0YXRlKGZ1bmN0aW9uIHNldFN0cmVldFZpZXdTZXJ2aWNlKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3RyZWV0Vmlld1NlcnZpY2U6IHN0cmVldFZpZXdTZXJ2aWNlXG4gICAgICB9O1xuICAgIH0sIHRoaXMuc2V0U3RyZWV0Vmlld1NlcnZpY2VDYWxsYmFjayk7XG4gIH07XG5cbiAgX3Byb3RvLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUuc3RyZWV0Vmlld1NlcnZpY2UgIT09IG51bGwpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLm9uVW5tb3VudCkge1xuICAgICAgICB0aGlzLnByb3BzLm9uVW5tb3VudCh0aGlzLnN0YXRlLnN0cmVldFZpZXdTZXJ2aWNlKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcblxuICByZXR1cm4gU3RyZWV0Vmlld1NlcnZpY2U7XG59KFB1cmVDb21wb25lbnQpO1xuU3RyZWV0Vmlld1NlcnZpY2UuY29udGV4dFR5cGUgPSBNYXBDb250ZXh0O1xuXG52YXIgRGlyZWN0aW9uc1NlcnZpY2UgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9SZWFjdCRQdXJlQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKERpcmVjdGlvbnNTZXJ2aWNlLCBfUmVhY3QkUHVyZUNvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gRGlyZWN0aW9uc1NlcnZpY2UoKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX3RoaXMgPSBfUmVhY3QkUHVyZUNvbXBvbmVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBkaXJlY3Rpb25zU2VydmljZTogbnVsbFxuICAgIH07XG5cbiAgICBfdGhpcy5zZXREaXJlY3Rpb25zU2VydmljZUNhbGxiYWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKF90aGlzLnN0YXRlLmRpcmVjdGlvbnNTZXJ2aWNlICE9PSBudWxsICYmIF90aGlzLnByb3BzLm9uTG9hZCkge1xuICAgICAgICBfdGhpcy5wcm9wcy5vbkxvYWQoX3RoaXMuc3RhdGUuZGlyZWN0aW9uc1NlcnZpY2UpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gRGlyZWN0aW9uc1NlcnZpY2UucHJvdG90eXBlO1xuXG4gIF9wcm90by5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICEhIXRoaXMucHJvcHMub3B0aW9ucyA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IGludmFyaWFudChmYWxzZSwgJ0RpcmVjdGlvbnNTZXJ2aWNlIGV4cGVjdGVkIG9wdGlvbnMgb2JqZWN0IGFzIHBhcmFtZXRlciwgYnV0IGdvdCAlcycsIHRoaXMucHJvcHMub3B0aW9ucykgOiBpbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICAgIHZhciBkaXJlY3Rpb25zU2VydmljZSA9IG5ldyBnb29nbGUubWFwcy5EaXJlY3Rpb25zU2VydmljZSgpO1xuICAgIHRoaXMuc2V0U3RhdGUoZnVuY3Rpb24gc2V0RGlyZWN0aW9uc1NlcnZpY2UoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBkaXJlY3Rpb25zU2VydmljZTogZGlyZWN0aW9uc1NlcnZpY2VcbiAgICAgIH07XG4gICAgfSwgdGhpcy5zZXREaXJlY3Rpb25zU2VydmljZUNhbGxiYWNrKTtcbiAgfTtcblxuICBfcHJvdG8uY29tcG9uZW50RGlkVXBkYXRlID0gZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgIGlmICh0aGlzLnN0YXRlLmRpcmVjdGlvbnNTZXJ2aWNlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLnN0YXRlLmRpcmVjdGlvbnNTZXJ2aWNlLnJvdXRlKHRoaXMucHJvcHMub3B0aW9ucywgdGhpcy5wcm9wcy5jYWxsYmFjayk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5jb21wb25lbnRXaWxsVW5tb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGlmICh0aGlzLnN0YXRlLmRpcmVjdGlvbnNTZXJ2aWNlICE9PSBudWxsKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5vblVubW91bnQpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vblVubW91bnQodGhpcy5zdGF0ZS5kaXJlY3Rpb25zU2VydmljZSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoRnJhZ21lbnQsIG51bGwpO1xuICB9O1xuXG4gIHJldHVybiBEaXJlY3Rpb25zU2VydmljZTtcbn0oUHVyZUNvbXBvbmVudCk7XG5cbnZhciBldmVudE1hcCRnID0ge1xuICBvbkRpcmVjdGlvbnNDaGFuZ2VkOiAnZGlyZWN0aW9uc19jaGFuZ2VkJ1xufTtcbnZhciB1cGRhdGVyTWFwJGcgPSB7XG4gIGRpcmVjdGlvbnM6IGZ1bmN0aW9uIGRpcmVjdGlvbnMoaW5zdGFuY2UsIF9kaXJlY3Rpb25zKSB7XG4gICAgaW5zdGFuY2Uuc2V0RGlyZWN0aW9ucyhfZGlyZWN0aW9ucyk7XG4gIH0sXG4gIG1hcDogZnVuY3Rpb24gbWFwKGluc3RhbmNlLCBfbWFwKSB7XG4gICAgaW5zdGFuY2Uuc2V0TWFwKF9tYXApO1xuICB9LFxuICBvcHRpb25zOiBmdW5jdGlvbiBvcHRpb25zKGluc3RhbmNlLCBfb3B0aW9ucykge1xuICAgIGluc3RhbmNlLnNldE9wdGlvbnMoX29wdGlvbnMpO1xuICB9LFxuICBwYW5lbDogZnVuY3Rpb24gcGFuZWwoaW5zdGFuY2UsIF9wYW5lbCkge1xuICAgIGluc3RhbmNlLnNldFBhbmVsKF9wYW5lbCk7XG4gIH0sXG4gIHJvdXRlSW5kZXg6IGZ1bmN0aW9uIHJvdXRlSW5kZXgoaW5zdGFuY2UsIF9yb3V0ZUluZGV4KSB7XG4gICAgaW5zdGFuY2Uuc2V0Um91dGVJbmRleChfcm91dGVJbmRleCk7XG4gIH1cbn07XG52YXIgRGlyZWN0aW9uc1JlbmRlcmVyID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfUmVhY3QkUHVyZUNvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShEaXJlY3Rpb25zUmVuZGVyZXIsIF9SZWFjdCRQdXJlQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBEaXJlY3Rpb25zUmVuZGVyZXIoKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX3RoaXMgPSBfUmVhY3QkUHVyZUNvbXBvbmVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgX3RoaXMucmVnaXN0ZXJlZEV2ZW50cyA9IFtdO1xuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgZGlyZWN0aW9uc1JlbmRlcmVyOiBudWxsXG4gICAgfTtcblxuICAgIF90aGlzLnNldERpcmVjdGlvbnNSZW5kZXJlckNhbGxiYWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKF90aGlzLnN0YXRlLmRpcmVjdGlvbnNSZW5kZXJlciAhPT0gbnVsbCkge1xuICAgICAgICBfdGhpcy5zdGF0ZS5kaXJlY3Rpb25zUmVuZGVyZXIuc2V0TWFwKF90aGlzLmNvbnRleHQpO1xuXG4gICAgICAgIGlmIChfdGhpcy5wcm9wcy5vbkxvYWQpIHtcbiAgICAgICAgICBfdGhpcy5wcm9wcy5vbkxvYWQoX3RoaXMuc3RhdGUuZGlyZWN0aW9uc1JlbmRlcmVyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gRGlyZWN0aW9uc1JlbmRlcmVyLnByb3RvdHlwZTtcblxuICBfcHJvdG8uY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB2YXIgZGlyZWN0aW9uc1JlbmRlcmVyID0gbmV3IGdvb2dsZS5tYXBzLkRpcmVjdGlvbnNSZW5kZXJlcih0aGlzLnByb3BzLm9wdGlvbnMpO1xuICAgIHRoaXMucmVnaXN0ZXJlZEV2ZW50cyA9IGFwcGx5VXBkYXRlcnNUb1Byb3BzQW5kUmVnaXN0ZXJFdmVudHMoe1xuICAgICAgdXBkYXRlck1hcDogdXBkYXRlck1hcCRnLFxuICAgICAgZXZlbnRNYXA6IGV2ZW50TWFwJGcsXG4gICAgICBwcmV2UHJvcHM6IHt9LFxuICAgICAgbmV4dFByb3BzOiB0aGlzLnByb3BzLFxuICAgICAgaW5zdGFuY2U6IGRpcmVjdGlvbnNSZW5kZXJlclxuICAgIH0pO1xuICAgIHRoaXMuc2V0U3RhdGUoZnVuY3Rpb24gc2V0RGlyZWN0aW9uc1JlbmRlcmVyKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZGlyZWN0aW9uc1JlbmRlcmVyOiBkaXJlY3Rpb25zUmVuZGVyZXJcbiAgICAgIH07XG4gICAgfSwgdGhpcy5zZXREaXJlY3Rpb25zUmVuZGVyZXJDYWxsYmFjayk7XG4gIH07XG5cbiAgX3Byb3RvLmNvbXBvbmVudERpZFVwZGF0ZSA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5kaXJlY3Rpb25zUmVuZGVyZXIgIT09IG51bGwpIHtcbiAgICAgIHVucmVnaXN0ZXJFdmVudHModGhpcy5yZWdpc3RlcmVkRXZlbnRzKTtcbiAgICAgIHRoaXMucmVnaXN0ZXJlZEV2ZW50cyA9IGFwcGx5VXBkYXRlcnNUb1Byb3BzQW5kUmVnaXN0ZXJFdmVudHMoe1xuICAgICAgICB1cGRhdGVyTWFwOiB1cGRhdGVyTWFwJGcsXG4gICAgICAgIGV2ZW50TWFwOiBldmVudE1hcCRnLFxuICAgICAgICBwcmV2UHJvcHM6IHByZXZQcm9wcyxcbiAgICAgICAgbmV4dFByb3BzOiB0aGlzLnByb3BzLFxuICAgICAgICBpbnN0YW5jZTogdGhpcy5zdGF0ZS5kaXJlY3Rpb25zUmVuZGVyZXJcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5kaXJlY3Rpb25zUmVuZGVyZXIgIT09IG51bGwpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLm9uVW5tb3VudCkge1xuICAgICAgICB0aGlzLnByb3BzLm9uVW5tb3VudCh0aGlzLnN0YXRlLmRpcmVjdGlvbnNSZW5kZXJlcik7XG4gICAgICB9XG5cbiAgICAgIHVucmVnaXN0ZXJFdmVudHModGhpcy5yZWdpc3RlcmVkRXZlbnRzKTtcblxuICAgICAgaWYgKHRoaXMuc3RhdGUuZGlyZWN0aW9uc1JlbmRlcmVyKSB7XG4gICAgICAgIHRoaXMuc3RhdGUuZGlyZWN0aW9uc1JlbmRlcmVyLnNldE1hcChudWxsKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudChGcmFnbWVudCwgbnVsbCk7XG4gIH07XG5cbiAgcmV0dXJuIERpcmVjdGlvbnNSZW5kZXJlcjtcbn0oUHVyZUNvbXBvbmVudCk7XG5EaXJlY3Rpb25zUmVuZGVyZXIuY29udGV4dFR5cGUgPSBNYXBDb250ZXh0O1xuXG52YXIgRGlzdGFuY2VNYXRyaXhTZXJ2aWNlID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfUmVhY3QkUHVyZUNvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShEaXN0YW5jZU1hdHJpeFNlcnZpY2UsIF9SZWFjdCRQdXJlQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBEaXN0YW5jZU1hdHJpeFNlcnZpY2UoKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX3RoaXMgPSBfUmVhY3QkUHVyZUNvbXBvbmVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBkaXN0YW5jZU1hdHJpeFNlcnZpY2U6IG51bGxcbiAgICB9O1xuXG4gICAgX3RoaXMuc2V0RGlzdGFuY2VNYXRyaXhTZXJ2aWNlQ2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoX3RoaXMuc3RhdGUuZGlzdGFuY2VNYXRyaXhTZXJ2aWNlICE9PSBudWxsICYmIF90aGlzLnByb3BzLm9uTG9hZCkge1xuICAgICAgICBfdGhpcy5wcm9wcy5vbkxvYWQoX3RoaXMuc3RhdGUuZGlzdGFuY2VNYXRyaXhTZXJ2aWNlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IERpc3RhbmNlTWF0cml4U2VydmljZS5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgISEhdGhpcy5wcm9wcy5vcHRpb25zID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gaW52YXJpYW50KGZhbHNlLCAnRGlzdGFuY2VNYXRyaXhTZXJ2aWNlIGV4cGVjdGVkIG9wdGlvbnMgb2JqZWN0IGFzIHBhcmFtZXRlciwgYnV0IGdvICVzJywgdGhpcy5wcm9wcy5vcHRpb25zKSA6IGludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gICAgdmFyIGRpc3RhbmNlTWF0cml4U2VydmljZSA9IG5ldyBnb29nbGUubWFwcy5EaXN0YW5jZU1hdHJpeFNlcnZpY2UoKTtcbiAgICB0aGlzLnNldFN0YXRlKGZ1bmN0aW9uIHNldERpc3RhbmNlTWF0cml4U2VydmljZSgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGRpc3RhbmNlTWF0cml4U2VydmljZTogZGlzdGFuY2VNYXRyaXhTZXJ2aWNlXG4gICAgICB9O1xuICAgIH0sIHRoaXMuc2V0RGlzdGFuY2VNYXRyaXhTZXJ2aWNlQ2FsbGJhY2spO1xuICB9O1xuXG4gIF9wcm90by5jb21wb25lbnREaWRVcGRhdGUgPSBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUuZGlzdGFuY2VNYXRyaXhTZXJ2aWNlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLnN0YXRlLmRpc3RhbmNlTWF0cml4U2VydmljZS5nZXREaXN0YW5jZU1hdHJpeCh0aGlzLnByb3BzLm9wdGlvbnMsIHRoaXMucHJvcHMuY2FsbGJhY2spO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5kaXN0YW5jZU1hdHJpeFNlcnZpY2UgIT09IG51bGwpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLm9uVW5tb3VudCkge1xuICAgICAgICB0aGlzLnByb3BzLm9uVW5tb3VudCh0aGlzLnN0YXRlLmRpc3RhbmNlTWF0cml4U2VydmljZSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoRnJhZ21lbnQsIG51bGwpO1xuICB9O1xuXG4gIHJldHVybiBEaXN0YW5jZU1hdHJpeFNlcnZpY2U7XG59KFB1cmVDb21wb25lbnQpO1xuXG52YXIgZXZlbnRNYXAkaCA9IHtcbiAgb25QbGFjZXNDaGFuZ2VkOiAncGxhY2VzX2NoYW5nZWQnXG59O1xudmFyIHVwZGF0ZXJNYXAkaCA9IHtcbiAgYm91bmRzOiBmdW5jdGlvbiBib3VuZHMoaW5zdGFuY2UsIF9ib3VuZHMpIHtcbiAgICBpbnN0YW5jZS5zZXRCb3VuZHMoX2JvdW5kcyk7XG4gIH1cbn07XG5cbnZhciBTdGFuZGFsb25lU2VhcmNoQm94ID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfUmVhY3QkUHVyZUNvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShTdGFuZGFsb25lU2VhcmNoQm94LCBfUmVhY3QkUHVyZUNvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gU3RhbmRhbG9uZVNlYXJjaEJveCgpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfdGhpcyA9IF9SZWFjdCRQdXJlQ29tcG9uZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICBfdGhpcy5yZWdpc3RlcmVkRXZlbnRzID0gW107XG4gICAgX3RoaXMuY29udGFpbmVyRWxlbWVudCA9IGNyZWF0ZVJlZigpO1xuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgc2VhcmNoQm94OiBudWxsXG4gICAgfTtcblxuICAgIF90aGlzLnNldFNlYXJjaEJveENhbGxiYWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKF90aGlzLnN0YXRlLnNlYXJjaEJveCAhPT0gbnVsbCAmJiBfdGhpcy5wcm9wcy5vbkxvYWQpIHtcbiAgICAgICAgX3RoaXMucHJvcHMub25Mb2FkKF90aGlzLnN0YXRlLnNlYXJjaEJveCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBTdGFuZGFsb25lU2VhcmNoQm94LnByb3RvdHlwZTtcblxuICBfcHJvdG8uY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAhISFnb29nbGUubWFwcy5wbGFjZXMgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBpbnZhcmlhbnQoZmFsc2UsICdZb3UgbmVlZCB0byBwcm92aWRlIGxpYnJhcmllcz17W1wicGxhY2VzXCJdfSBwcm9wIHRvIDxMb2FkU2NyaXB0IC8+IGNvbXBvbmVudCAlcycsIGdvb2dsZS5tYXBzLnBsYWNlcykgOiBpbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuXG4gICAgaWYgKHRoaXMuY29udGFpbmVyRWxlbWVudCAhPT0gbnVsbCAmJiB0aGlzLmNvbnRhaW5lckVsZW1lbnQuY3VycmVudCAhPT0gbnVsbCkge1xuICAgICAgdmFyIGlucHV0ID0gdGhpcy5jb250YWluZXJFbGVtZW50LmN1cnJlbnQucXVlcnlTZWxlY3RvcignaW5wdXQnKTtcblxuICAgICAgaWYgKGlucHV0ICE9PSBudWxsKSB7XG4gICAgICAgIHZhciBzZWFyY2hCb3ggPSBuZXcgZ29vZ2xlLm1hcHMucGxhY2VzLlNlYXJjaEJveChpbnB1dCwgdGhpcy5wcm9wcy5vcHRpb25zKTtcbiAgICAgICAgdGhpcy5yZWdpc3RlcmVkRXZlbnRzID0gYXBwbHlVcGRhdGVyc1RvUHJvcHNBbmRSZWdpc3RlckV2ZW50cyh7XG4gICAgICAgICAgdXBkYXRlck1hcDogdXBkYXRlck1hcCRoLFxuICAgICAgICAgIGV2ZW50TWFwOiBldmVudE1hcCRoLFxuICAgICAgICAgIHByZXZQcm9wczoge30sXG4gICAgICAgICAgbmV4dFByb3BzOiB0aGlzLnByb3BzLFxuICAgICAgICAgIGluc3RhbmNlOiBzZWFyY2hCb3hcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoZnVuY3Rpb24gc2V0U2VhcmNoQm94KCkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzZWFyY2hCb3g6IHNlYXJjaEJveFxuICAgICAgICAgIH07XG4gICAgICAgIH0sIHRoaXMuc2V0U2VhcmNoQm94Q2FsbGJhY2spO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uY29tcG9uZW50RGlkVXBkYXRlID0gZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgIGlmICh0aGlzLnN0YXRlLnNlYXJjaEJveCAhPT0gbnVsbCkge1xuICAgICAgdW5yZWdpc3RlckV2ZW50cyh0aGlzLnJlZ2lzdGVyZWRFdmVudHMpO1xuICAgICAgdGhpcy5yZWdpc3RlcmVkRXZlbnRzID0gYXBwbHlVcGRhdGVyc1RvUHJvcHNBbmRSZWdpc3RlckV2ZW50cyh7XG4gICAgICAgIHVwZGF0ZXJNYXA6IHVwZGF0ZXJNYXAkaCxcbiAgICAgICAgZXZlbnRNYXA6IGV2ZW50TWFwJGgsXG4gICAgICAgIHByZXZQcm9wczogcHJldlByb3BzLFxuICAgICAgICBuZXh0UHJvcHM6IHRoaXMucHJvcHMsXG4gICAgICAgIGluc3RhbmNlOiB0aGlzLnN0YXRlLnNlYXJjaEJveFxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5jb21wb25lbnRXaWxsVW5tb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGlmICh0aGlzLnN0YXRlLnNlYXJjaEJveCAhPT0gbnVsbCkge1xuICAgICAgaWYgKHRoaXMucHJvcHMub25Vbm1vdW50KSB7XG4gICAgICAgIHRoaXMucHJvcHMub25Vbm1vdW50KHRoaXMuc3RhdGUuc2VhcmNoQm94KTtcbiAgICAgIH1cblxuICAgICAgdW5yZWdpc3RlckV2ZW50cyh0aGlzLnJlZ2lzdGVyZWRFdmVudHMpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgIHJlZjogdGhpcy5jb250YWluZXJFbGVtZW50XG4gICAgfSwgQ2hpbGRyZW4ub25seSh0aGlzLnByb3BzLmNoaWxkcmVuKSk7XG4gIH07XG5cbiAgcmV0dXJuIFN0YW5kYWxvbmVTZWFyY2hCb3g7XG59KFB1cmVDb21wb25lbnQpO1xuXG5TdGFuZGFsb25lU2VhcmNoQm94LmNvbnRleHRUeXBlID0gTWFwQ29udGV4dDtcblxudmFyIGV2ZW50TWFwJGkgPSB7XG4gIG9uUGxhY2VDaGFuZ2VkOiAncGxhY2VfY2hhbmdlZCdcbn07XG52YXIgdXBkYXRlck1hcCRpID0ge1xuICBib3VuZHM6IGZ1bmN0aW9uIGJvdW5kcyhpbnN0YW5jZSwgX2JvdW5kcykge1xuICAgIGluc3RhbmNlLnNldEJvdW5kcyhfYm91bmRzKTtcbiAgfSxcbiAgcmVzdHJpY3Rpb25zOiBmdW5jdGlvbiByZXN0cmljdGlvbnMoaW5zdGFuY2UsIF9yZXN0cmljdGlvbnMpIHtcbiAgICBpbnN0YW5jZS5zZXRDb21wb25lbnRSZXN0cmljdGlvbnMoX3Jlc3RyaWN0aW9ucyk7XG4gIH0sXG4gIGZpZWxkczogZnVuY3Rpb24gZmllbGRzKGluc3RhbmNlLCBfZmllbGRzKSB7XG4gICAgaW5zdGFuY2Uuc2V0RmllbGRzKF9maWVsZHMpO1xuICB9LFxuICBvcHRpb25zOiBmdW5jdGlvbiBvcHRpb25zKGluc3RhbmNlLCBfb3B0aW9ucykge1xuICAgIGluc3RhbmNlLnNldE9wdGlvbnMoX29wdGlvbnMpO1xuICB9LFxuICB0eXBlczogZnVuY3Rpb24gdHlwZXMoaW5zdGFuY2UsIF90eXBlcykge1xuICAgIGluc3RhbmNlLnNldFR5cGVzKF90eXBlcyk7XG4gIH1cbn07XG52YXIgQXV0b2NvbXBsZXRlID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfUmVhY3QkUHVyZUNvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShBdXRvY29tcGxldGUsIF9SZWFjdCRQdXJlQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBBdXRvY29tcGxldGUoKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX3RoaXMgPSBfUmVhY3QkUHVyZUNvbXBvbmVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgX3RoaXMucmVnaXN0ZXJlZEV2ZW50cyA9IFtdO1xuICAgIF90aGlzLmNvbnRhaW5lckVsZW1lbnQgPSBjcmVhdGVSZWYoKTtcbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGF1dG9jb21wbGV0ZTogbnVsbFxuICAgIH07XG5cbiAgICBfdGhpcy5zZXRBdXRvY29tcGxldGVDYWxsYmFjayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChfdGhpcy5zdGF0ZS5hdXRvY29tcGxldGUgIT09IG51bGwgJiYgX3RoaXMucHJvcHMub25Mb2FkKSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uTG9hZChfdGhpcy5zdGF0ZS5hdXRvY29tcGxldGUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gQXV0b2NvbXBsZXRlLnByb3RvdHlwZTtcblxuICBfcHJvdG8uY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAhISFnb29nbGUubWFwcy5wbGFjZXMgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBpbnZhcmlhbnQoZmFsc2UsICdZb3UgbmVlZCB0byBwcm92aWRlIGxpYnJhcmllcz17W1wicGxhY2VzXCJdfSBwcm9wIHRvIDxMb2FkU2NyaXB0IC8+IGNvbXBvbmVudCAlcycsIGdvb2dsZS5tYXBzLnBsYWNlcykgOiBpbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwOyAvLyBUT0RPOiB3aHkgY3VycmVudCBjb3VsZCBiZSBlcXVhbCBudWxsP1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWlnbm9yZVxuICAgIC8vIEB0cy1pZ25vcmVcblxuICAgIHZhciBpbnB1dCA9IHRoaXMuY29udGFpbmVyRWxlbWVudC5jdXJyZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XG5cbiAgICBpZiAoaW5wdXQpIHtcbiAgICAgIHZhciBhdXRvY29tcGxldGUgPSBuZXcgZ29vZ2xlLm1hcHMucGxhY2VzLkF1dG9jb21wbGV0ZShpbnB1dCwgdGhpcy5wcm9wcy5vcHRpb25zKTtcbiAgICAgIHRoaXMucmVnaXN0ZXJlZEV2ZW50cyA9IGFwcGx5VXBkYXRlcnNUb1Byb3BzQW5kUmVnaXN0ZXJFdmVudHMoe1xuICAgICAgICB1cGRhdGVyTWFwOiB1cGRhdGVyTWFwJGksXG4gICAgICAgIGV2ZW50TWFwOiBldmVudE1hcCRpLFxuICAgICAgICBwcmV2UHJvcHM6IHt9LFxuICAgICAgICBuZXh0UHJvcHM6IHRoaXMucHJvcHMsXG4gICAgICAgIGluc3RhbmNlOiBhdXRvY29tcGxldGVcbiAgICAgIH0pO1xuICAgICAgdGhpcy5zZXRTdGF0ZShmdW5jdGlvbiBzZXRBdXRvY29tcGxldGUoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgYXV0b2NvbXBsZXRlOiBhdXRvY29tcGxldGVcbiAgICAgICAgfTtcbiAgICAgIH0sIHRoaXMuc2V0QXV0b2NvbXBsZXRlQ2FsbGJhY2spO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uY29tcG9uZW50RGlkVXBkYXRlID0gZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgIHVucmVnaXN0ZXJFdmVudHModGhpcy5yZWdpc3RlcmVkRXZlbnRzKTtcbiAgICB0aGlzLnJlZ2lzdGVyZWRFdmVudHMgPSBhcHBseVVwZGF0ZXJzVG9Qcm9wc0FuZFJlZ2lzdGVyRXZlbnRzKHtcbiAgICAgIHVwZGF0ZXJNYXA6IHVwZGF0ZXJNYXAkaSxcbiAgICAgIGV2ZW50TWFwOiBldmVudE1hcCRpLFxuICAgICAgcHJldlByb3BzOiBwcmV2UHJvcHMsXG4gICAgICBuZXh0UHJvcHM6IHRoaXMucHJvcHMsXG4gICAgICBpbnN0YW5jZTogdGhpcy5zdGF0ZS5hdXRvY29tcGxldGVcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8uY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5hdXRvY29tcGxldGUgIT09IG51bGwpIHtcbiAgICAgIHVucmVnaXN0ZXJFdmVudHModGhpcy5yZWdpc3RlcmVkRXZlbnRzKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICByZWY6IHRoaXMuY29udGFpbmVyRWxlbWVudCxcbiAgICAgIGNsYXNzTmFtZTogdGhpcy5wcm9wcy5jbGFzc05hbWUgfHwgJydcbiAgICB9LCBDaGlsZHJlbi5vbmx5KHRoaXMucHJvcHMuY2hpbGRyZW4pKTtcbiAgfTtcblxuICByZXR1cm4gQXV0b2NvbXBsZXRlO1xufShQdXJlQ29tcG9uZW50KTtcbkF1dG9jb21wbGV0ZS5jb250ZXh0VHlwZSA9IE1hcENvbnRleHQ7XG5cbmV4cG9ydCB7IEF1dG9jb21wbGV0ZSwgQmljeWNsaW5nTGF5ZXIsIENpcmNsZSwgRGF0YSwgRGlyZWN0aW9uc1JlbmRlcmVyLCBEaXJlY3Rpb25zU2VydmljZSwgRGlzdGFuY2VNYXRyaXhTZXJ2aWNlLCBEcmF3aW5nTWFuYWdlciwgR29vZ2xlTWFwLCBHcm91bmRPdmVybGF5LCBIZWF0bWFwTGF5ZXIsIEluZm9Cb3hDb21wb25lbnQgYXMgSW5mb0JveCwgSW5mb1dpbmRvdywgS21sTGF5ZXIsIExvYWRTY3JpcHQsIExvYWRTY3JpcHROZXh0JDEgYXMgTG9hZFNjcmlwdE5leHQsIE1hcENvbnRleHQsIE1hcmtlciwgQ2x1c3RlcmVyQ29tcG9uZW50IGFzIE1hcmtlckNsdXN0ZXJlciwgT3ZlcmxheVZpZXcsIFBvbHlnb24sIFBvbHlsaW5lLCBSZWN0YW5nbGUsIFN0YW5kYWxvbmVTZWFyY2hCb3gsIFN0cmVldFZpZXdQYW5vcmFtYSwgU3RyZWV0Vmlld1NlcnZpY2UsIFRyYWZmaWNMYXllciwgVHJhbnNpdExheWVyLCB1c2VHb29nbGVNYXAsIHVzZUpzQXBpTG9hZGVyLCB1c2VMb2FkU2NyaXB0IH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZWFjdGdvb2dsZW1hcHNhcGkuZXNtLmpzLm1hcFxuIiwidmFyIEluZm9Cb3ggPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBJbmZvQm94KG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgICBvcHRpb25zID0ge307XG4gICAgfVxuXG4gICAgdGhpcy5leHRlbmQoSW5mb0JveCwgZ29vZ2xlLm1hcHMuT3ZlcmxheVZpZXcpOyAvLyBTdGFuZGFyZCBvcHRpb25zIChpbiBjb21tb24gd2l0aCBnb29nbGUubWFwcy5JbmZvV2luZG93KTpcblxuICAgIHRoaXMuY29udGVudCA9IG9wdGlvbnMuY29udGVudCB8fCAnJztcbiAgICB0aGlzLmRpc2FibGVBdXRvUGFuID0gb3B0aW9ucy5kaXNhYmxlQXV0b1BhbiB8fCBmYWxzZTtcbiAgICB0aGlzLm1heFdpZHRoID0gb3B0aW9ucy5tYXhXaWR0aCB8fCAwO1xuICAgIHRoaXMucGl4ZWxPZmZzZXQgPSBvcHRpb25zLnBpeGVsT2Zmc2V0IHx8IG5ldyBnb29nbGUubWFwcy5TaXplKDAsIDApO1xuICAgIHRoaXMucG9zaXRpb24gPSBvcHRpb25zLnBvc2l0aW9uIHx8IG5ldyBnb29nbGUubWFwcy5MYXRMbmcoMCwgMCk7XG4gICAgdGhpcy56SW5kZXggPSBvcHRpb25zLnpJbmRleCB8fCBudWxsOyAvLyBBZGRpdGlvbmFsIG9wdGlvbnMgKHVuaXF1ZSB0byBJbmZvQm94KTpcblxuICAgIHRoaXMuYm94Q2xhc3MgPSBvcHRpb25zLmJveENsYXNzIHx8ICdpbmZvQm94JztcbiAgICB0aGlzLmJveFN0eWxlID0gb3B0aW9ucy5ib3hTdHlsZSB8fCB7fTtcbiAgICB0aGlzLmNsb3NlQm94TWFyZ2luID0gb3B0aW9ucy5jbG9zZUJveE1hcmdpbiB8fCAnMnB4JztcbiAgICB0aGlzLmNsb3NlQm94VVJMID0gb3B0aW9ucy5jbG9zZUJveFVSTCB8fCAnaHR0cDovL3d3dy5nb29nbGUuY29tL2ludGwvZW5fdXMvbWFwZmlsZXMvY2xvc2UuZ2lmJztcblxuICAgIGlmIChvcHRpb25zLmNsb3NlQm94VVJMID09PSAnJykge1xuICAgICAgdGhpcy5jbG9zZUJveFVSTCA9ICcnO1xuICAgIH1cblxuICAgIHRoaXMuaW5mb0JveENsZWFyYW5jZSA9IG9wdGlvbnMuaW5mb0JveENsZWFyYW5jZSB8fCBuZXcgZ29vZ2xlLm1hcHMuU2l6ZSgxLCAxKTtcblxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy52aXNpYmxlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLmlzSGlkZGVuID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBvcHRpb25zLnZpc2libGUgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb3B0aW9ucy52aXNpYmxlID0gIW9wdGlvbnMuaXNIaWRkZW47XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5pc0hpZGRlbiA9ICFvcHRpb25zLnZpc2libGU7XG4gICAgdGhpcy5hbGlnbkJvdHRvbSA9IG9wdGlvbnMuYWxpZ25Cb3R0b20gfHwgZmFsc2U7XG4gICAgdGhpcy5wYW5lID0gb3B0aW9ucy5wYW5lIHx8ICdmbG9hdFBhbmUnO1xuICAgIHRoaXMuZW5hYmxlRXZlbnRQcm9wYWdhdGlvbiA9IG9wdGlvbnMuZW5hYmxlRXZlbnRQcm9wYWdhdGlvbiB8fCBmYWxzZTtcbiAgICB0aGlzLmRpdiA9IG51bGw7XG4gICAgdGhpcy5jbG9zZUxpc3RlbmVyID0gbnVsbDtcbiAgICB0aGlzLm1vdmVMaXN0ZW5lciA9IG51bGw7XG4gICAgdGhpcy5tYXBMaXN0ZW5lciA9IG51bGw7XG4gICAgdGhpcy5jb250ZXh0TGlzdGVuZXIgPSBudWxsO1xuICAgIHRoaXMuZXZlbnRMaXN0ZW5lcnMgPSBudWxsO1xuICAgIHRoaXMuZml4ZWRXaWR0aFNldCA9IG51bGw7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gSW5mb0JveC5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmNyZWF0ZUluZm9Cb3hEaXYgPSBmdW5jdGlvbiBjcmVhdGVJbmZvQm94RGl2KCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAvLyBUaGlzIGhhbmRsZXIgcHJldmVudHMgYW4gZXZlbnQgaW4gdGhlIEluZm9Cb3ggZnJvbSBiZWluZyBwYXNzZWQgb24gdG8gdGhlIG1hcC5cbiAgICBmdW5jdGlvbiBjYW5jZWxIYW5kbGVyKGV2ZW50KSB7XG4gICAgICBldmVudC5jYW5jZWxCdWJibGUgPSB0cnVlO1xuXG4gICAgICBpZiAoZXZlbnQuc3RvcFByb3BhZ2F0aW9uKSB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgfVxuICAgIH0gLy8gVGhpcyBoYW5kbGVyIGlnbm9yZXMgdGhlIGN1cnJlbnQgZXZlbnQgaW4gdGhlIEluZm9Cb3ggYW5kIGNvbmRpdGlvbmFsbHkgcHJldmVudHNcbiAgICAvLyB0aGUgZXZlbnQgZnJvbSBiZWluZyBwYXNzZWQgb24gdG8gdGhlIG1hcC4gSXQgaXMgdXNlZCBmb3IgdGhlIGNvbnRleHRtZW51IGV2ZW50LlxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSAgQGdldGlmeS9wcm9wZXItYXJyb3dzL3RoaXNcblxuXG4gICAgdmFyIGlnbm9yZUhhbmRsZXIgPSBmdW5jdGlvbiBpZ25vcmVIYW5kbGVyKGV2ZW50KSB7XG4gICAgICBldmVudC5yZXR1cm5WYWx1ZSA9IGZhbHNlO1xuXG4gICAgICBpZiAoZXZlbnQucHJldmVudERlZmF1bHQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFfdGhpcy5lbmFibGVFdmVudFByb3BhZ2F0aW9uKSB7XG4gICAgICAgIGNhbmNlbEhhbmRsZXIoZXZlbnQpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAoIXRoaXMuZGl2KSB7XG4gICAgICB0aGlzLmRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdGhpcy5zZXRCb3hTdHlsZSgpO1xuXG4gICAgICBpZiAodHlwZW9mIHRoaXMuY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgdGhpcy5kaXYuaW5uZXJIVE1MID0gdGhpcy5nZXRDbG9zZUJveEltZygpICsgdGhpcy5jb250ZW50O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5kaXYuaW5uZXJIVE1MID0gdGhpcy5nZXRDbG9zZUJveEltZygpO1xuICAgICAgICB0aGlzLmRpdi5hcHBlbmRDaGlsZCh0aGlzLmNvbnRlbnQpO1xuICAgICAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1pZ25vcmVcbiAgICAgIC8vIEB0cy1pZ25vcmVcblxuXG4gICAgICB2YXIgcGFuZXMgPSB0aGlzLmdldFBhbmVzKCk7XG4gICAgICBwYW5lc1t0aGlzLnBhbmVdLmFwcGVuZENoaWxkKHRoaXMuZGl2KTsgLy8gQWRkIHRoZSBJbmZvQm94IGRpdiB0byB0aGUgRE9NXG5cbiAgICAgIHRoaXMuYWRkQ2xpY2tIYW5kbGVyKCk7XG5cbiAgICAgIGlmICh0aGlzLmRpdi5zdHlsZS53aWR0aCkge1xuICAgICAgICB0aGlzLmZpeGVkV2lkdGhTZXQgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHRoaXMubWF4V2lkdGggIT09IDAgJiYgdGhpcy5kaXYub2Zmc2V0V2lkdGggPiB0aGlzLm1heFdpZHRoKSB7XG4gICAgICAgICAgdGhpcy5kaXYuc3R5bGUud2lkdGggPSB0aGlzLm1heFdpZHRoICsgJ3B4JztcbiAgICAgICAgICB0aGlzLmZpeGVkV2lkdGhTZXQgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIFRoZSBmb2xsb3dpbmcgY29kZSBpcyBuZWVkZWQgdG8gb3ZlcmNvbWUgcHJvYmxlbXMgd2l0aCBNU0lFXG4gICAgICAgICAgdmFyIGJ3ID0gdGhpcy5nZXRCb3hXaWR0aHMoKTtcbiAgICAgICAgICB0aGlzLmRpdi5zdHlsZS53aWR0aCA9IHRoaXMuZGl2Lm9mZnNldFdpZHRoIC0gYncubGVmdCAtIGJ3LnJpZ2h0ICsgJ3B4JztcbiAgICAgICAgICB0aGlzLmZpeGVkV2lkdGhTZXQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLnBhbkJveCh0aGlzLmRpc2FibGVBdXRvUGFuKTtcblxuICAgICAgaWYgKCF0aGlzLmVuYWJsZUV2ZW50UHJvcGFnYXRpb24pIHtcbiAgICAgICAgdGhpcy5ldmVudExpc3RlbmVycyA9IFtdOyAvLyBDYW5jZWwgZXZlbnQgcHJvcGFnYXRpb24uXG4gICAgICAgIC8vIE5vdGU6IG1vdXNlbW92ZSBub3QgaW5jbHVkZWQgKHRvIHJlc29sdmUgSXNzdWUgMTUyKVxuXG4gICAgICAgIHZhciBldmVudHMgPSBbJ21vdXNlZG93bicsICdtb3VzZW92ZXInLCAnbW91c2VvdXQnLCAnbW91c2V1cCcsICdjbGljaycsICdkYmxjbGljaycsICd0b3VjaHN0YXJ0JywgJ3RvdWNoZW5kJywgJ3RvdWNobW92ZSddO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXZlbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdGhpcy5ldmVudExpc3RlbmVycy5wdXNoKGdvb2dsZS5tYXBzLmV2ZW50LmFkZERvbUxpc3RlbmVyKHRoaXMuZGl2LCBldmVudHNbaV0sIGNhbmNlbEhhbmRsZXIpKTtcbiAgICAgICAgfSAvLyBXb3JrYXJvdW5kIGZvciBHb29nbGUgYnVnIHRoYXQgY2F1c2VzIHRoZSBjdXJzb3IgdG8gY2hhbmdlIHRvIGEgcG9pbnRlclxuICAgICAgICAvLyB3aGVuIHRoZSBtb3VzZSBtb3ZlcyBvdmVyIGEgbWFya2VyIHVuZGVybmVhdGggSW5mb0JveC5cblxuXG4gICAgICAgIHRoaXMuZXZlbnRMaXN0ZW5lcnMucHVzaChnb29nbGUubWFwcy5ldmVudC5hZGREb21MaXN0ZW5lcih0aGlzLmRpdiwgJ21vdXNlb3ZlcicsIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSAgQGdldGlmeS9wcm9wZXItYXJyb3dzL3RoaXMsIEBnZXRpZnkvcHJvcGVyLWFycm93cy9uYW1lXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAoX3RoaXMuZGl2KSB7XG4gICAgICAgICAgICBfdGhpcy5kaXYuc3R5bGUuY3Vyc29yID0gJ2RlZmF1bHQnO1xuICAgICAgICAgIH1cbiAgICAgICAgfSkpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmNvbnRleHRMaXN0ZW5lciA9IGdvb2dsZS5tYXBzLmV2ZW50LmFkZERvbUxpc3RlbmVyKHRoaXMuZGl2LCAnY29udGV4dG1lbnUnLCBpZ25vcmVIYW5kbGVyKTtcbiAgICAgIC8qKlxyXG4gICAgICAgKiBUaGlzIGV2ZW50IGlzIGZpcmVkIHdoZW4gdGhlIERJViBjb250YWluaW5nIHRoZSBJbmZvQm94J3MgY29udGVudCBpcyBhdHRhY2hlZCB0byB0aGUgRE9NLlxyXG4gICAgICAgKiBAbmFtZSBJbmZvQm94I2RvbXJlYWR5XHJcbiAgICAgICAqIEBldmVudFxyXG4gICAgICAgKi9cblxuICAgICAgZ29vZ2xlLm1hcHMuZXZlbnQudHJpZ2dlcih0aGlzLCAnZG9tcmVhZHknKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmdldENsb3NlQm94SW1nID0gZnVuY3Rpb24gZ2V0Q2xvc2VCb3hJbWcoKSB7XG4gICAgdmFyIGltZyA9ICcnO1xuXG4gICAgaWYgKHRoaXMuY2xvc2VCb3hVUkwgIT09ICcnKSB7XG4gICAgICBpbWcgPSAnPGltZyBhbHQ9XCJcIic7XG4gICAgICBpbWcgKz0gJyBhcmlhLWhpZGRlbj1cInRydWVcIic7XG4gICAgICBpbWcgKz0gXCIgc3JjPSdcIiArIHRoaXMuY2xvc2VCb3hVUkwgKyBcIidcIjtcbiAgICAgIGltZyArPSAnIGFsaWduPXJpZ2h0JzsgLy8gRG8gdGhpcyBiZWNhdXNlIE9wZXJhIGNob2tlcyBvbiBzdHlsZT0nZmxvYXQ6IHJpZ2h0OydcblxuICAgICAgaW1nICs9IFwiIHN0eWxlPSdcIjtcbiAgICAgIGltZyArPSAnIHBvc2l0aW9uOiByZWxhdGl2ZTsnOyAvLyBSZXF1aXJlZCBieSBNU0lFXG5cbiAgICAgIGltZyArPSAnIGN1cnNvcjogcG9pbnRlcjsnO1xuICAgICAgaW1nICs9ICcgbWFyZ2luOiAnICsgdGhpcy5jbG9zZUJveE1hcmdpbiArICc7JztcbiAgICAgIGltZyArPSBcIic+XCI7XG4gICAgfVxuXG4gICAgcmV0dXJuIGltZztcbiAgfTtcblxuICBfcHJvdG8uYWRkQ2xpY2tIYW5kbGVyID0gZnVuY3Rpb24gYWRkQ2xpY2tIYW5kbGVyKCkge1xuICAgIGlmICh0aGlzLmRpdiAmJiB0aGlzLmRpdi5maXJzdENoaWxkICYmIHRoaXMuY2xvc2VCb3hVUkwgIT09ICcnKSB7XG4gICAgICB2YXIgY2xvc2VCb3ggPSB0aGlzLmRpdi5maXJzdENoaWxkO1xuICAgICAgdGhpcy5jbG9zZUxpc3RlbmVyID0gZ29vZ2xlLm1hcHMuZXZlbnQuYWRkRG9tTGlzdGVuZXIoY2xvc2VCb3gsICdjbGljaycsIHRoaXMuZ2V0Q2xvc2VDbGlja0hhbmRsZXIoKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2xvc2VMaXN0ZW5lciA9IG51bGw7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5nZXRDbG9zZUNsaWNrSGFuZGxlciA9IGZ1bmN0aW9uIGdldENsb3NlQ2xpY2tIYW5kbGVyKCkge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lICBAZ2V0aWZ5L3Byb3Blci1hcnJvd3MvdGhpcywgQGdldGlmeS9wcm9wZXItYXJyb3dzL25hbWVcbiAgICByZXR1cm4gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAvLyAxLjAuMyBmaXg6IEFsd2F5cyBwcmV2ZW50IHByb3BhZ2F0aW9uIG9mIGEgY2xvc2UgYm94IGNsaWNrIHRvIHRoZSBtYXA6XG4gICAgICBldmVudC5jYW5jZWxCdWJibGUgPSB0cnVlO1xuXG4gICAgICBpZiAoZXZlbnQuc3RvcFByb3BhZ2F0aW9uKSB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgfVxuICAgICAgLyoqXHJcbiAgICAgICAqIFRoaXMgZXZlbnQgaXMgZmlyZWQgd2hlbiB0aGUgSW5mb0JveCdzIGNsb3NlIGJveCBpcyBjbGlja2VkLlxyXG4gICAgICAgKiBAbmFtZSBJbmZvQm94I2Nsb3NlY2xpY2tcclxuICAgICAgICogQGV2ZW50XHJcbiAgICAgICAqL1xuXG5cbiAgICAgIGdvb2dsZS5tYXBzLmV2ZW50LnRyaWdnZXIoX3RoaXMyLCAnY2xvc2VjbGljaycpO1xuXG4gICAgICBfdGhpczIuY2xvc2UoKTtcbiAgICB9O1xuICB9O1xuXG4gIF9wcm90by5wYW5Cb3ggPSBmdW5jdGlvbiBwYW5Cb3goZGlzYWJsZVBhbikge1xuICAgIGlmICh0aGlzLmRpdiAmJiAhZGlzYWJsZVBhbikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtaWdub3JlXG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICB2YXIgbWFwID0gdGhpcy5nZXRNYXAoKTsgLy8gT25seSBwYW4gaWYgYXR0YWNoZWQgdG8gbWFwLCBub3QgcGFub3JhbWFcblxuICAgICAgaWYgKG1hcCBpbnN0YW5jZW9mIGdvb2dsZS5tYXBzLk1hcCkge1xuICAgICAgICB2YXIgeE9mZnNldCA9IDA7XG4gICAgICAgIHZhciB5T2Zmc2V0ID0gMDtcbiAgICAgICAgdmFyIGJvdW5kcyA9IG1hcC5nZXRCb3VuZHMoKTtcblxuICAgICAgICBpZiAoYm91bmRzICYmICFib3VuZHMuY29udGFpbnModGhpcy5wb3NpdGlvbikpIHtcbiAgICAgICAgICAvLyBNYXJrZXIgbm90IGluIHZpc2libGUgYXJlYSBvZiBtYXAsIHNvIHNldCBjZW50ZXJcbiAgICAgICAgICAvLyBvZiBtYXAgdG8gdGhlIG1hcmtlciBwb3NpdGlvbiBmaXJzdC5cbiAgICAgICAgICBtYXAuc2V0Q2VudGVyKHRoaXMucG9zaXRpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG1hcERpdiA9IG1hcC5nZXREaXYoKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtaWdub3JlXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcblxuICAgICAgICB2YXIgbWFwV2lkdGggPSBtYXBEaXYub2Zmc2V0V2lkdGg7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWlnbm9yZVxuICAgICAgICAvLyBAdHMtaWdub3JlXG5cbiAgICAgICAgdmFyIG1hcEhlaWdodCA9IG1hcERpdi5vZmZzZXRIZWlnaHQ7XG4gICAgICAgIHZhciBpd09mZnNldFggPSB0aGlzLnBpeGVsT2Zmc2V0LndpZHRoO1xuICAgICAgICB2YXIgaXdPZmZzZXRZID0gdGhpcy5waXhlbE9mZnNldC5oZWlnaHQ7XG4gICAgICAgIHZhciBpd1dpZHRoID0gdGhpcy5kaXYub2Zmc2V0V2lkdGg7XG4gICAgICAgIHZhciBpd0hlaWdodCA9IHRoaXMuZGl2Lm9mZnNldEhlaWdodDtcbiAgICAgICAgdmFyIHBhZFggPSB0aGlzLmluZm9Cb3hDbGVhcmFuY2Uud2lkdGg7XG4gICAgICAgIHZhciBwYWRZID0gdGhpcy5pbmZvQm94Q2xlYXJhbmNlLmhlaWdodDsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtaWdub3JlXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcblxuICAgICAgICB2YXIgcHJvamVjdGlvbiA9IHRoaXMuZ2V0UHJvamVjdGlvbigpO1xuICAgICAgICB2YXIgcGl4UG9zaXRpb24gPSBwcm9qZWN0aW9uLmZyb21MYXRMbmdUb0NvbnRhaW5lclBpeGVsKHRoaXMucG9zaXRpb24pO1xuXG4gICAgICAgIGlmIChwaXhQb3NpdGlvbi54IDwgLWl3T2Zmc2V0WCArIHBhZFgpIHtcbiAgICAgICAgICB4T2Zmc2V0ID0gcGl4UG9zaXRpb24ueCArIGl3T2Zmc2V0WCAtIHBhZFg7XG4gICAgICAgIH0gZWxzZSBpZiAocGl4UG9zaXRpb24ueCArIGl3V2lkdGggKyBpd09mZnNldFggKyBwYWRYID4gbWFwV2lkdGgpIHtcbiAgICAgICAgICB4T2Zmc2V0ID0gcGl4UG9zaXRpb24ueCArIGl3V2lkdGggKyBpd09mZnNldFggKyBwYWRYIC0gbWFwV2lkdGg7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5hbGlnbkJvdHRvbSkge1xuICAgICAgICAgIGlmIChwaXhQb3NpdGlvbi55IDwgLWl3T2Zmc2V0WSArIHBhZFkgKyBpd0hlaWdodCkge1xuICAgICAgICAgICAgeU9mZnNldCA9IHBpeFBvc2l0aW9uLnkgKyBpd09mZnNldFkgLSBwYWRZIC0gaXdIZWlnaHQ7XG4gICAgICAgICAgfSBlbHNlIGlmIChwaXhQb3NpdGlvbi55ICsgaXdPZmZzZXRZICsgcGFkWSA+IG1hcEhlaWdodCkge1xuICAgICAgICAgICAgeU9mZnNldCA9IHBpeFBvc2l0aW9uLnkgKyBpd09mZnNldFkgKyBwYWRZIC0gbWFwSGVpZ2h0O1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAocGl4UG9zaXRpb24ueSA8IC1pd09mZnNldFkgKyBwYWRZKSB7XG4gICAgICAgICAgICB5T2Zmc2V0ID0gcGl4UG9zaXRpb24ueSArIGl3T2Zmc2V0WSAtIHBhZFk7XG4gICAgICAgICAgfSBlbHNlIGlmIChwaXhQb3NpdGlvbi55ICsgaXdIZWlnaHQgKyBpd09mZnNldFkgKyBwYWRZID4gbWFwSGVpZ2h0KSB7XG4gICAgICAgICAgICB5T2Zmc2V0ID0gcGl4UG9zaXRpb24ueSArIGl3SGVpZ2h0ICsgaXdPZmZzZXRZICsgcGFkWSAtIG1hcEhlaWdodDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoISh4T2Zmc2V0ID09PSAwICYmIHlPZmZzZXQgPT09IDApKSB7XG4gICAgICAgICAgLy8gTW92ZSB0aGUgbWFwIHRvIHRoZSBzaGlmdGVkIGNlbnRlci5cbiAgICAgICAgICBtYXAucGFuQnkoeE9mZnNldCwgeU9mZnNldCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLnNldEJveFN0eWxlID0gZnVuY3Rpb24gc2V0Qm94U3R5bGUoKSB7XG4gICAgaWYgKHRoaXMuZGl2KSB7XG4gICAgICAvLyBBcHBseSBzdHlsZSB2YWx1ZXMgZnJvbSB0aGUgc3R5bGUgc2hlZXQgZGVmaW5lZCBpbiB0aGUgYm94Q2xhc3MgcGFyYW1ldGVyOlxuICAgICAgdGhpcy5kaXYuY2xhc3NOYW1lID0gdGhpcy5ib3hDbGFzczsgLy8gQ2xlYXIgZXhpc3RpbmcgaW5saW5lIHN0eWxlIHZhbHVlczpcblxuICAgICAgdGhpcy5kaXYuc3R5bGUuY3NzVGV4dCA9ICcnOyAvLyBBcHBseSBzdHlsZSB2YWx1ZXMgZGVmaW5lZCBpbiB0aGUgYm94U3R5bGUgcGFyYW1ldGVyOlxuXG4gICAgICB2YXIgYm94U3R5bGUgPSB0aGlzLmJveFN0eWxlO1xuXG4gICAgICBmb3IgKHZhciBpIGluIGJveFN0eWxlKSB7XG4gICAgICAgIGlmIChib3hTdHlsZS5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWlnbm9yZVxuICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICB0aGlzLmRpdi5zdHlsZVtpXSA9IGJveFN0eWxlW2ldO1xuICAgICAgICB9XG4gICAgICB9IC8vIEZpeCBmb3IgaU9TIGRpc2FwcGVhcmluZyBJbmZvQm94IHByb2JsZW1cbiAgICAgIC8vIFNlZSBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzkyMjk1MzUvZ29vZ2xlLW1hcHMtbWFya2Vycy1kaXNhcHBlYXItYXQtY2VydGFpbi16b29tLWxldmVsLW9ubHktb24taXBob25lLWlwYWRcblxuXG4gICAgICB0aGlzLmRpdi5zdHlsZS53ZWJraXRUcmFuc2Zvcm0gPSAndHJhbnNsYXRlWigwKSc7IC8vIEZpeCB1cCBvcGFjaXR5IHN0eWxlIGZvciBiZW5lZml0IG9mIE1TSUVcblxuICAgICAgaWYgKHR5cGVvZiB0aGlzLmRpdi5zdHlsZS5vcGFjaXR5ICE9PSAndW5kZWZpbmVkJyAmJiB0aGlzLmRpdi5zdHlsZS5vcGFjaXR5ICE9PSAnJykge1xuICAgICAgICAvLyBTZWUgaHR0cDovL3d3dy5xdWlya3Ntb2RlLm9yZy9jc3Mvb3BhY2l0eS5odG1sXG4gICAgICAgIHZhciBvcGFjaXR5ID0gcGFyc2VGbG9hdCh0aGlzLmRpdi5zdHlsZS5vcGFjaXR5IHx8ICcnKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtaWdub3JlXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcblxuICAgICAgICB0aGlzLmRpdi5zdHlsZS5tc0ZpbHRlciA9ICdcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5BbHBoYShPcGFjaXR5PScgKyBvcGFjaXR5ICogMTAwICsgJylcIic7XG4gICAgICAgIHRoaXMuZGl2LnN0eWxlLmZpbHRlciA9ICdhbHBoYShvcGFjaXR5PScgKyBvcGFjaXR5ICogMTAwICsgJyknO1xuICAgICAgfSAvLyBBcHBseSByZXF1aXJlZCBzdHlsZXNcblxuXG4gICAgICB0aGlzLmRpdi5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICB0aGlzLmRpdi5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG5cbiAgICAgIGlmICh0aGlzLnpJbmRleCAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLmRpdi5zdHlsZS56SW5kZXggPSB0aGlzLnpJbmRleCArICcnO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMuZGl2LnN0eWxlLm92ZXJmbG93KSB7XG4gICAgICAgIHRoaXMuZGl2LnN0eWxlLm92ZXJmbG93ID0gJ2F1dG8nO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uZ2V0Qm94V2lkdGhzID0gZnVuY3Rpb24gZ2V0Qm94V2lkdGhzKCkge1xuICAgIHZhciBidyA9IHtcbiAgICAgIHRvcDogMCxcbiAgICAgIGJvdHRvbTogMCxcbiAgICAgIGxlZnQ6IDAsXG4gICAgICByaWdodDogMFxuICAgIH07XG5cbiAgICBpZiAoIXRoaXMuZGl2KSB7XG4gICAgICByZXR1cm4gYnc7XG4gICAgfVxuXG4gICAgaWYgKGRvY3VtZW50LmRlZmF1bHRWaWV3ICYmIGRvY3VtZW50LmRlZmF1bHRWaWV3LmdldENvbXB1dGVkU3R5bGUpIHtcbiAgICAgIHZhciBvd25lckRvY3VtZW50ID0gdGhpcy5kaXYub3duZXJEb2N1bWVudDtcbiAgICAgIHZhciBjb21wdXRlZFN0eWxlID0gb3duZXJEb2N1bWVudCAmJiBvd25lckRvY3VtZW50LmRlZmF1bHRWaWV3ID8gb3duZXJEb2N1bWVudC5kZWZhdWx0Vmlldy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuZGl2LCAnJykgOiBudWxsO1xuXG4gICAgICBpZiAoY29tcHV0ZWRTdHlsZSkge1xuICAgICAgICAvLyBUaGUgY29tcHV0ZWQgc3R5bGVzIGFyZSBhbHdheXMgaW4gcGl4ZWwgdW5pdHMgKGdvb2QhKVxuICAgICAgICBidy50b3AgPSBwYXJzZUludChjb21wdXRlZFN0eWxlLmJvcmRlclRvcFdpZHRoIHx8ICcnLCAxMCkgfHwgMDtcbiAgICAgICAgYncuYm90dG9tID0gcGFyc2VJbnQoY29tcHV0ZWRTdHlsZS5ib3JkZXJCb3R0b21XaWR0aCB8fCAnJywgMTApIHx8IDA7XG4gICAgICAgIGJ3LmxlZnQgPSBwYXJzZUludChjb21wdXRlZFN0eWxlLmJvcmRlckxlZnRXaWR0aCB8fCAnJywgMTApIHx8IDA7XG4gICAgICAgIGJ3LnJpZ2h0ID0gcGFyc2VJbnQoY29tcHV0ZWRTdHlsZS5ib3JkZXJSaWdodFdpZHRoIHx8ICcnLCAxMCkgfHwgMDtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKCAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1pZ25vcmVcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmN1cnJlbnRTdHlsZSAvLyBNU0lFXG4gICAgKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWlnbm9yZVxuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHZhciBjdXJyZW50U3R5bGUgPSB0aGlzLmRpdi5jdXJyZW50U3R5bGU7XG5cbiAgICAgICAgaWYgKGN1cnJlbnRTdHlsZSkge1xuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWlnbm9yZVxuICAgICAgICAgIC8vIFRoZSBjdXJyZW50IHN0eWxlcyBtYXkgbm90IGJlIGluIHBpeGVsIHVuaXRzLCBidXQgYXNzdW1lIHRoZXkgYXJlIChiYWQhKVxuICAgICAgICAgIGJ3LnRvcCA9IHBhcnNlSW50KGN1cnJlbnRTdHlsZS5ib3JkZXJUb3BXaWR0aCB8fCAnJywgMTApIHx8IDA7XG4gICAgICAgICAgYncuYm90dG9tID0gcGFyc2VJbnQoY3VycmVudFN0eWxlLmJvcmRlckJvdHRvbVdpZHRoIHx8ICcnLCAxMCkgfHwgMDtcbiAgICAgICAgICBidy5sZWZ0ID0gcGFyc2VJbnQoY3VycmVudFN0eWxlLmJvcmRlckxlZnRXaWR0aCB8fCAnJywgMTApIHx8IDA7XG4gICAgICAgICAgYncucmlnaHQgPSBwYXJzZUludChjdXJyZW50U3R5bGUuYm9yZGVyUmlnaHRXaWR0aCB8fCAnJywgMTApIHx8IDA7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIHJldHVybiBidztcbiAgfTtcblxuICBfcHJvdG8ub25SZW1vdmUgPSBmdW5jdGlvbiBvblJlbW92ZSgpIHtcbiAgICBpZiAodGhpcy5kaXYgJiYgdGhpcy5kaXYucGFyZW50Tm9kZSkge1xuICAgICAgdGhpcy5kaXYucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmRpdik7XG4gICAgICB0aGlzLmRpdiA9IG51bGw7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5kcmF3ID0gZnVuY3Rpb24gZHJhdygpIHtcbiAgICB0aGlzLmNyZWF0ZUluZm9Cb3hEaXYoKTtcblxuICAgIGlmICh0aGlzLmRpdikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtaWdub3JlXG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICB2YXIgcHJvamVjdGlvbiA9IHRoaXMuZ2V0UHJvamVjdGlvbigpO1xuICAgICAgdmFyIHBpeFBvc2l0aW9uID0gcHJvamVjdGlvbi5mcm9tTGF0TG5nVG9EaXZQaXhlbCh0aGlzLnBvc2l0aW9uKTtcbiAgICAgIHRoaXMuZGl2LnN0eWxlLmxlZnQgPSBwaXhQb3NpdGlvbi54ICsgdGhpcy5waXhlbE9mZnNldC53aWR0aCArICdweCc7XG5cbiAgICAgIGlmICh0aGlzLmFsaWduQm90dG9tKSB7XG4gICAgICAgIHRoaXMuZGl2LnN0eWxlLmJvdHRvbSA9IC0ocGl4UG9zaXRpb24ueSArIHRoaXMucGl4ZWxPZmZzZXQuaGVpZ2h0KSArICdweCc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmRpdi5zdHlsZS50b3AgPSBwaXhQb3NpdGlvbi55ICsgdGhpcy5waXhlbE9mZnNldC5oZWlnaHQgKyAncHgnO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5pc0hpZGRlbikge1xuICAgICAgICB0aGlzLmRpdi5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmRpdi5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uc2V0T3B0aW9ucyA9IGZ1bmN0aW9uIHNldE9wdGlvbnMob3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIG9wdGlvbnMuYm94Q2xhc3MgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBNdXN0IGJlIGZpcnN0XG4gICAgICB0aGlzLmJveENsYXNzID0gb3B0aW9ucy5ib3hDbGFzcztcbiAgICAgIHRoaXMuc2V0Qm94U3R5bGUoKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIG9wdGlvbnMuYm94U3R5bGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBNdXN0IGJlIHNlY29uZFxuICAgICAgdGhpcy5ib3hTdHlsZSA9IG9wdGlvbnMuYm94U3R5bGU7XG4gICAgICB0aGlzLnNldEJveFN0eWxlKCk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLmNvbnRlbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnNldENvbnRlbnQob3B0aW9ucy5jb250ZW50KTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIG9wdGlvbnMuZGlzYWJsZUF1dG9QYW4gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLmRpc2FibGVBdXRvUGFuID0gb3B0aW9ucy5kaXNhYmxlQXV0b1BhbjtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIG9wdGlvbnMubWF4V2lkdGggIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLm1heFdpZHRoID0gb3B0aW9ucy5tYXhXaWR0aDtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIG9wdGlvbnMucGl4ZWxPZmZzZXQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnBpeGVsT2Zmc2V0ID0gb3B0aW9ucy5waXhlbE9mZnNldDtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIG9wdGlvbnMuYWxpZ25Cb3R0b20gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLmFsaWduQm90dG9tID0gb3B0aW9ucy5hbGlnbkJvdHRvbTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIG9wdGlvbnMucG9zaXRpb24gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnNldFBvc2l0aW9uKG9wdGlvbnMucG9zaXRpb24pO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy56SW5kZXggIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnNldFpJbmRleChvcHRpb25zLnpJbmRleCk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLmNsb3NlQm94TWFyZ2luICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5jbG9zZUJveE1hcmdpbiA9IG9wdGlvbnMuY2xvc2VCb3hNYXJnaW47XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLmNsb3NlQm94VVJMICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5jbG9zZUJveFVSTCA9IG9wdGlvbnMuY2xvc2VCb3hVUkw7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLmluZm9Cb3hDbGVhcmFuY2UgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLmluZm9Cb3hDbGVhcmFuY2UgPSBvcHRpb25zLmluZm9Cb3hDbGVhcmFuY2U7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLmlzSGlkZGVuICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5pc0hpZGRlbiA9IG9wdGlvbnMuaXNIaWRkZW47XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLnZpc2libGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLmlzSGlkZGVuID0gIW9wdGlvbnMudmlzaWJsZTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIG9wdGlvbnMuZW5hYmxlRXZlbnRQcm9wYWdhdGlvbiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMuZW5hYmxlRXZlbnRQcm9wYWdhdGlvbiA9IG9wdGlvbnMuZW5hYmxlRXZlbnRQcm9wYWdhdGlvbjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5kaXYpIHtcbiAgICAgIHRoaXMuZHJhdygpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uc2V0Q29udGVudCA9IGZ1bmN0aW9uIHNldENvbnRlbnQoY29udGVudCkge1xuICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG5cbiAgICBpZiAodGhpcy5kaXYpIHtcbiAgICAgIGlmICh0aGlzLmNsb3NlTGlzdGVuZXIpIHtcbiAgICAgICAgZ29vZ2xlLm1hcHMuZXZlbnQucmVtb3ZlTGlzdGVuZXIodGhpcy5jbG9zZUxpc3RlbmVyKTtcbiAgICAgICAgdGhpcy5jbG9zZUxpc3RlbmVyID0gbnVsbDtcbiAgICAgIH0gLy8gT2RkIGNvZGUgcmVxdWlyZWQgdG8gbWFrZSB0aGluZ3Mgd29yayB3aXRoIE1TSUUuXG5cblxuICAgICAgaWYgKCF0aGlzLmZpeGVkV2lkdGhTZXQpIHtcbiAgICAgICAgdGhpcy5kaXYuc3R5bGUud2lkdGggPSAnJztcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICB0aGlzLmRpdi5pbm5lckhUTUwgPSB0aGlzLmdldENsb3NlQm94SW1nKCkgKyBjb250ZW50O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5kaXYuaW5uZXJIVE1MID0gdGhpcy5nZXRDbG9zZUJveEltZygpO1xuICAgICAgICB0aGlzLmRpdi5hcHBlbmRDaGlsZChjb250ZW50KTtcbiAgICAgIH0gLy8gUGVydmVyc2UgY29kZSByZXF1aXJlZCB0byBtYWtlIHRoaW5ncyB3b3JrIHdpdGggTVNJRS5cbiAgICAgIC8vIChFbnN1cmVzIHRoZSBjbG9zZSBib3ggZG9lcywgaW4gZmFjdCwgZmxvYXQgdG8gdGhlIHJpZ2h0LilcblxuXG4gICAgICBpZiAoIXRoaXMuZml4ZWRXaWR0aFNldCkge1xuICAgICAgICB0aGlzLmRpdi5zdHlsZS53aWR0aCA9IHRoaXMuZGl2Lm9mZnNldFdpZHRoICsgJ3B4JztcblxuICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgdGhpcy5kaXYuaW5uZXJIVE1MID0gdGhpcy5nZXRDbG9zZUJveEltZygpICsgY29udGVudDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmRpdi5pbm5lckhUTUwgPSB0aGlzLmdldENsb3NlQm94SW1nKCk7XG4gICAgICAgICAgdGhpcy5kaXYuYXBwZW5kQ2hpbGQoY29udGVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5hZGRDbGlja0hhbmRsZXIoKTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIGV2ZW50IGlzIGZpcmVkIHdoZW4gdGhlIGNvbnRlbnQgb2YgdGhlIEluZm9Cb3ggY2hhbmdlcy5cclxuICAgICAqIEBuYW1lIEluZm9Cb3gjY29udGVudF9jaGFuZ2VkXHJcbiAgICAgKiBAZXZlbnRcclxuICAgICAqL1xuXG5cbiAgICBnb29nbGUubWFwcy5ldmVudC50cmlnZ2VyKHRoaXMsICdjb250ZW50X2NoYW5nZWQnKTtcbiAgfTtcblxuICBfcHJvdG8uc2V0UG9zaXRpb24gPSBmdW5jdGlvbiBzZXRQb3NpdGlvbihsYXRMbmcpIHtcbiAgICB0aGlzLnBvc2l0aW9uID0gbGF0TG5nO1xuXG4gICAgaWYgKHRoaXMuZGl2KSB7XG4gICAgICB0aGlzLmRyYXcoKTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIGV2ZW50IGlzIGZpcmVkIHdoZW4gdGhlIHBvc2l0aW9uIG9mIHRoZSBJbmZvQm94IGNoYW5nZXMuXHJcbiAgICAgKiBAbmFtZSBJbmZvQm94I3Bvc2l0aW9uX2NoYW5nZWRcclxuICAgICAqIEBldmVudFxyXG4gICAgICovXG5cblxuICAgIGdvb2dsZS5tYXBzLmV2ZW50LnRyaWdnZXIodGhpcywgJ3Bvc2l0aW9uX2NoYW5nZWQnKTtcbiAgfTtcblxuICBfcHJvdG8uc2V0VmlzaWJsZSA9IGZ1bmN0aW9uIHNldFZpc2libGUoaXNWaXNpYmxlKSB7XG4gICAgdGhpcy5pc0hpZGRlbiA9ICFpc1Zpc2libGU7XG5cbiAgICBpZiAodGhpcy5kaXYpIHtcbiAgICAgIHRoaXMuZGl2LnN0eWxlLnZpc2liaWxpdHkgPSB0aGlzLmlzSGlkZGVuID8gJ2hpZGRlbicgOiAndmlzaWJsZSc7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5zZXRaSW5kZXggPSBmdW5jdGlvbiBzZXRaSW5kZXgoaW5kZXgpIHtcbiAgICB0aGlzLnpJbmRleCA9IGluZGV4O1xuXG4gICAgaWYgKHRoaXMuZGl2KSB7XG4gICAgICB0aGlzLmRpdi5zdHlsZS56SW5kZXggPSBpbmRleCArICcnO1xuICAgIH1cbiAgICAvKipcclxuICAgICAqIFRoaXMgZXZlbnQgaXMgZmlyZWQgd2hlbiB0aGUgekluZGV4IG9mIHRoZSBJbmZvQm94IGNoYW5nZXMuXHJcbiAgICAgKiBAbmFtZSBJbmZvQm94I3ppbmRleF9jaGFuZ2VkXHJcbiAgICAgKiBAZXZlbnRcclxuICAgICAqL1xuXG5cbiAgICBnb29nbGUubWFwcy5ldmVudC50cmlnZ2VyKHRoaXMsICd6aW5kZXhfY2hhbmdlZCcpO1xuICB9O1xuXG4gIF9wcm90by5nZXRDb250ZW50ID0gZnVuY3Rpb24gZ2V0Q29udGVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZW50O1xuICB9O1xuXG4gIF9wcm90by5nZXRQb3NpdGlvbiA9IGZ1bmN0aW9uIGdldFBvc2l0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uO1xuICB9O1xuXG4gIF9wcm90by5nZXRaSW5kZXggPSBmdW5jdGlvbiBnZXRaSW5kZXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuekluZGV4O1xuICB9O1xuXG4gIF9wcm90by5nZXRWaXNpYmxlID0gZnVuY3Rpb24gZ2V0VmlzaWJsZSgpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1pZ25vcmVcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgdmFyIG1hcCA9IHRoaXMuZ2V0TWFwKCk7XG4gICAgdmFyIGlzVmlzaWJsZTtcblxuICAgIGlmICh0eXBlb2YgbWFwID09PSAndW5kZWZpbmVkJyB8fCBtYXAgPT09IG51bGwpIHtcbiAgICAgIGlzVmlzaWJsZSA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpc1Zpc2libGUgPSAhdGhpcy5pc0hpZGRlbjtcbiAgICB9XG5cbiAgICByZXR1cm4gaXNWaXNpYmxlO1xuICB9O1xuXG4gIF9wcm90by5zaG93ID0gZnVuY3Rpb24gc2hvdygpIHtcbiAgICB0aGlzLmlzSGlkZGVuID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy5kaXYpIHtcbiAgICAgIHRoaXMuZGl2LnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5oaWRlID0gZnVuY3Rpb24gaGlkZSgpIHtcbiAgICB0aGlzLmlzSGlkZGVuID0gdHJ1ZTtcblxuICAgIGlmICh0aGlzLmRpdikge1xuICAgICAgdGhpcy5kaXYuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8ub3BlbiA9IGZ1bmN0aW9uIG9wZW4obWFwLCBhbmNob3IpIHtcbiAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgIGlmIChhbmNob3IpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWlnbm9yZVxuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgdGhpcy5wb3NpdGlvbiA9IGFuY2hvci5nZXRQb3NpdGlvbigpO1xuICAgICAgdGhpcy5tb3ZlTGlzdGVuZXIgPSBnb29nbGUubWFwcy5ldmVudC5hZGRMaXN0ZW5lcihhbmNob3IsICdwb3NpdGlvbl9jaGFuZ2VkJywgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lICBAZ2V0aWZ5L3Byb3Blci1hcnJvd3MvdGhpcywgQGdldGlmeS9wcm9wZXItYXJyb3dzL25hbWVcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtaWdub3JlXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgdmFyIHBvc2l0aW9uID0gYW5jaG9yLmdldFBvc2l0aW9uKCk7XG5cbiAgICAgICAgX3RoaXMzLnNldFBvc2l0aW9uKHBvc2l0aW9uKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5tYXBMaXN0ZW5lciA9IGdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyKGFuY2hvciwgJ21hcF9jaGFuZ2VkJywgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lICBAZ2V0aWZ5L3Byb3Blci1hcnJvd3MvdGhpcywgQGdldGlmeS9wcm9wZXItYXJyb3dzL25hbWVcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtaWdub3JlXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgX3RoaXMzLnNldE1hcChhbmNob3IubWFwKTtcbiAgICAgIH0pO1xuICAgIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtaWdub3JlXG4gICAgLy8gQHRzLWlnbm9yZVxuXG5cbiAgICB0aGlzLnNldE1hcChtYXApO1xuXG4gICAgaWYgKHRoaXMuZGl2KSB7XG4gICAgICB0aGlzLnBhbkJveCgpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uY2xvc2UgPSBmdW5jdGlvbiBjbG9zZSgpIHtcbiAgICBpZiAodGhpcy5jbG9zZUxpc3RlbmVyKSB7XG4gICAgICBnb29nbGUubWFwcy5ldmVudC5yZW1vdmVMaXN0ZW5lcih0aGlzLmNsb3NlTGlzdGVuZXIpO1xuICAgICAgdGhpcy5jbG9zZUxpc3RlbmVyID0gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5ldmVudExpc3RlbmVycykge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmV2ZW50TGlzdGVuZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGdvb2dsZS5tYXBzLmV2ZW50LnJlbW92ZUxpc3RlbmVyKHRoaXMuZXZlbnRMaXN0ZW5lcnNbaV0pO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmV2ZW50TGlzdGVuZXJzID0gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5tb3ZlTGlzdGVuZXIpIHtcbiAgICAgIGdvb2dsZS5tYXBzLmV2ZW50LnJlbW92ZUxpc3RlbmVyKHRoaXMubW92ZUxpc3RlbmVyKTtcbiAgICAgIHRoaXMubW92ZUxpc3RlbmVyID0gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5tYXBMaXN0ZW5lcikge1xuICAgICAgZ29vZ2xlLm1hcHMuZXZlbnQucmVtb3ZlTGlzdGVuZXIodGhpcy5tYXBMaXN0ZW5lcik7XG4gICAgICB0aGlzLm1hcExpc3RlbmVyID0gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5jb250ZXh0TGlzdGVuZXIpIHtcbiAgICAgIGdvb2dsZS5tYXBzLmV2ZW50LnJlbW92ZUxpc3RlbmVyKHRoaXMuY29udGV4dExpc3RlbmVyKTtcbiAgICAgIHRoaXMuY29udGV4dExpc3RlbmVyID0gbnVsbDtcbiAgICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWlnbm9yZVxuICAgIC8vIEB0cy1pZ25vcmVcblxuXG4gICAgdGhpcy5zZXRNYXAobnVsbCk7XG4gIH07XG5cbiAgX3Byb3RvLmV4dGVuZCA9IGZ1bmN0aW9uIGV4dGVuZChvYmoxLCBvYmoyKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIGFwcGx5RXh0ZW5kKG9iamVjdCkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGd1YXJkLWZvci1pblxuICAgICAgZm9yICh2YXIgcHJvcGVydHkgaW4gb2JqZWN0LnByb3RvdHlwZSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1pZ25vcmVcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBpZiAoIXRoaXMucHJvdG90eXBlLmhhc093blByb3BlcnR5KHByb3BlcnR5KSkge1xuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWlnbm9yZVxuICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICB0aGlzLnByb3RvdHlwZVtwcm9wZXJ0eV0gPSBvYmplY3QucHJvdG90eXBlW3Byb3BlcnR5XTtcbiAgICAgICAgfVxuICAgICAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1pZ25vcmVcbiAgICAgIC8vIEB0cy1pZ25vcmVcblxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LmFwcGx5KG9iajEsIFtvYmoyXSk7XG4gIH07XG5cbiAgcmV0dXJuIEluZm9Cb3g7XG59KCk7XG5cbmV4cG9ydCB7IEluZm9Cb3ggfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZm9ib3guZXNtLmpzLm1hcFxuIiwidmFyIENsdXN0ZXJJY29uID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gQ2x1c3Rlckljb24oY2x1c3Rlciwgc3R5bGVzKSB7XG4gICAgY2x1c3Rlci5nZXRDbHVzdGVyZXIoKS5leHRlbmQoQ2x1c3Rlckljb24sIGdvb2dsZS5tYXBzLk92ZXJsYXlWaWV3KTtcbiAgICB0aGlzLmNsdXN0ZXIgPSBjbHVzdGVyO1xuICAgIHRoaXMuY2xhc3NOYW1lID0gdGhpcy5jbHVzdGVyLmdldENsdXN0ZXJlcigpLmdldENsdXN0ZXJDbGFzcygpO1xuICAgIHRoaXMuc3R5bGVzID0gc3R5bGVzO1xuICAgIHRoaXMuY2VudGVyID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZGl2ID0gbnVsbDtcbiAgICB0aGlzLnN1bXMgPSBudWxsO1xuICAgIHRoaXMudmlzaWJsZSA9IGZhbHNlO1xuICAgIHRoaXMuYm91bmRzQ2hhbmdlZExpc3RlbmVyID0gbnVsbDtcbiAgICB0aGlzLnVybCA9ICcnO1xuICAgIHRoaXMuaGVpZ2h0ID0gMDtcbiAgICB0aGlzLndpZHRoID0gMDtcbiAgICB0aGlzLmFuY2hvclRleHQgPSBbMCwgMF07XG4gICAgdGhpcy5hbmNob3JJY29uID0gWzAsIDBdO1xuICAgIHRoaXMudGV4dENvbG9yID0gJ2JsYWNrJztcbiAgICB0aGlzLnRleHRTaXplID0gMTE7XG4gICAgdGhpcy50ZXh0RGVjb3JhdGlvbiA9ICdub25lJztcbiAgICB0aGlzLmZvbnRXZWlnaHQgPSAnYm9sZCc7XG4gICAgdGhpcy5mb250U3R5bGUgPSAnbm9ybWFsJztcbiAgICB0aGlzLmZvbnRGYW1pbHkgPSAnQXJpYWwsc2Fucy1zZXJpZic7XG4gICAgdGhpcy5iYWNrZ3JvdW5kUG9zaXRpb24gPSAnMCAwJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtaWdub3JlXG4gICAgLy8gQHRzLWlnbm9yZVxuXG4gICAgdGhpcy5zZXRNYXAoY2x1c3Rlci5nZXRNYXAoKSk7IC8vIE5vdGU6IHRoaXMgY2F1c2VzIG9uQWRkIHRvIGJlIGNhbGxlZFxuICB9XG5cbiAgdmFyIF9wcm90byA9IENsdXN0ZXJJY29uLnByb3RvdHlwZTtcblxuICBfcHJvdG8ub25BZGQgPSBmdW5jdGlvbiBvbkFkZCgpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgdmFyIGNNb3VzZURvd25JbkNsdXN0ZXI7XG4gICAgdmFyIGNEcmFnZ2luZ01hcEJ5Q2x1c3RlcjtcbiAgICB0aGlzLmRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMuZGl2LmNsYXNzTmFtZSA9IHRoaXMuY2xhc3NOYW1lO1xuXG4gICAgaWYgKHRoaXMudmlzaWJsZSkge1xuICAgICAgdGhpcy5zaG93KCk7XG4gICAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1pZ25vcmVcbiAgICAvLyBAdHMtaWdub3JlXG5cblxuICAgIHRoaXMuZ2V0UGFuZXMoKS5vdmVybGF5TW91c2VUYXJnZXQuYXBwZW5kQ2hpbGQodGhpcy5kaXYpOyAvLyBGaXggZm9yIElzc3VlIDE1N1xuXG4gICAgdGhpcy5ib3VuZHNDaGFuZ2VkTGlzdGVuZXIgPSBnb29nbGUubWFwcy5ldmVudC5hZGRMaXN0ZW5lciggLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtaWdub3JlXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIHRoaXMuZ2V0TWFwKCksICdib3VuZHNjaGFuZ2VkJywgZnVuY3Rpb24gYm91bmRzQ2hhbmdlZCgpIHtcbiAgICAgIGNEcmFnZ2luZ01hcEJ5Q2x1c3RlciA9IGNNb3VzZURvd25JbkNsdXN0ZXI7XG4gICAgfSk7XG4gICAgZ29vZ2xlLm1hcHMuZXZlbnQuYWRkRG9tTGlzdGVuZXIodGhpcy5kaXYsICdtb3VzZWRvd24nLCBmdW5jdGlvbiBvbk1vdXNlRG93bigpIHtcbiAgICAgIGNNb3VzZURvd25JbkNsdXN0ZXIgPSB0cnVlO1xuICAgICAgY0RyYWdnaW5nTWFwQnlDbHVzdGVyID0gZmFsc2U7XG4gICAgfSk7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSAgQGdldGlmeS9wcm9wZXItYXJyb3dzL3RoaXMsIEBnZXRpZnkvcHJvcGVyLWFycm93cy9uYW1lXG5cbiAgICBnb29nbGUubWFwcy5ldmVudC5hZGREb21MaXN0ZW5lcih0aGlzLmRpdiwgJ2NsaWNrJywgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lICBAZ2V0aWZ5L3Byb3Blci1hcnJvd3MvdGhpcywgQGdldGlmeS9wcm9wZXItYXJyb3dzL25hbWVcbiAgICBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGNNb3VzZURvd25JbkNsdXN0ZXIgPSBmYWxzZTtcblxuICAgICAgaWYgKCFjRHJhZ2dpbmdNYXBCeUNsdXN0ZXIpIHtcbiAgICAgICAgdmFyIG1hcmtlckNsdXN0ZXJlciA9IF90aGlzLmNsdXN0ZXIuZ2V0Q2x1c3RlcmVyKCk7XG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoaXMgZXZlbnQgaXMgZmlyZWQgd2hlbiBhIGNsdXN0ZXIgbWFya2VyIGlzIGNsaWNrZWQuXHJcbiAgICAgICAgICogQG5hbWUgTWFya2VyQ2x1c3RlcmVyI2NsaWNrXHJcbiAgICAgICAgICogQHBhcmFtIHtDbHVzdGVyfSBjIFRoZSBjbHVzdGVyIHRoYXQgd2FzIGNsaWNrZWQuXHJcbiAgICAgICAgICogQGV2ZW50XHJcbiAgICAgICAgICovXG5cblxuICAgICAgICBnb29nbGUubWFwcy5ldmVudC50cmlnZ2VyKG1hcmtlckNsdXN0ZXJlciwgJ2NsaWNrJywgX3RoaXMuY2x1c3Rlcik7XG4gICAgICAgIGdvb2dsZS5tYXBzLmV2ZW50LnRyaWdnZXIobWFya2VyQ2x1c3RlcmVyLCAnY2x1c3RlcmNsaWNrJywgX3RoaXMuY2x1c3Rlcik7IC8vIGRlcHJlY2F0ZWQgbmFtZVxuICAgICAgICAvLyBUaGUgZGVmYXVsdCBjbGljayBoYW5kbGVyIGZvbGxvd3MuIERpc2FibGUgaXQgYnkgc2V0dGluZ1xuICAgICAgICAvLyB0aGUgem9vbU9uQ2xpY2sgcHJvcGVydHkgdG8gZmFsc2UuXG5cbiAgICAgICAgaWYgKG1hcmtlckNsdXN0ZXJlci5nZXRab29tT25DbGljaygpKSB7XG4gICAgICAgICAgLy8gWm9vbSBpbnRvIHRoZSBjbHVzdGVyLlxuICAgICAgICAgIHZhciBtYXhab29tID0gbWFya2VyQ2x1c3RlcmVyLmdldE1heFpvb20oKTtcblxuICAgICAgICAgIHZhciBib3VuZHMgPSBfdGhpcy5jbHVzdGVyLmdldEJvdW5kcygpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1pZ25vcmVcbiAgICAgICAgICAvLyBAdHMtaWdub3JlXG5cblxuICAgICAgICAgIG1hcmtlckNsdXN0ZXJlci5nZXRNYXAoKS5maXRCb3VuZHMoYm91bmRzKTsgLy8gVGhlcmUgaXMgYSBmaXggZm9yIElzc3VlIDE3MCBoZXJlOlxuXG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkge1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtaWdub3JlXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBtYXJrZXJDbHVzdGVyZXIuZ2V0TWFwKCkuZml0Qm91bmRzKGJvdW5kcyk7IC8vIERvbid0IHpvb20gYmV5b25kIHRoZSBtYXggem9vbSBsZXZlbFxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtaWdub3JlXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG5cbiAgICAgICAgICAgIGlmIChtYXhab29tICE9PSBudWxsICYmIG1hcmtlckNsdXN0ZXJlci5nZXRNYXAoKS5nZXRab29tKCkgPiBtYXhab29tKSB7XG4gICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWlnbm9yZVxuICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgIG1hcmtlckNsdXN0ZXJlci5nZXRNYXAoKS5zZXRab29tKG1heFpvb20gKyAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCAxMDApO1xuICAgICAgICB9IC8vIFByZXZlbnQgZXZlbnQgcHJvcGFnYXRpb24gdG8gdGhlIG1hcDpcblxuXG4gICAgICAgIGV2ZW50LmNhbmNlbEJ1YmJsZSA9IHRydWU7XG5cbiAgICAgICAgaWYgKGV2ZW50LnN0b3BQcm9wYWdhdGlvbikge1xuICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgZ29vZ2xlLm1hcHMuZXZlbnQuYWRkRG9tTGlzdGVuZXIodGhpcy5kaXYsICdtb3VzZW92ZXInLCAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgIEBnZXRpZnkvcHJvcGVyLWFycm93cy90aGlzLCBAZ2V0aWZ5L3Byb3Blci1hcnJvd3MvbmFtZVxuICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgIC8qKlxyXG4gICAgICAgKiBUaGlzIGV2ZW50IGlzIGZpcmVkIHdoZW4gdGhlIG1vdXNlIG1vdmVzIG92ZXIgYSBjbHVzdGVyIG1hcmtlci5cclxuICAgICAgICogQG5hbWUgTWFya2VyQ2x1c3RlcmVyI21vdXNlb3ZlclxyXG4gICAgICAgKiBAcGFyYW0ge0NsdXN0ZXJ9IGMgVGhlIGNsdXN0ZXIgdGhhdCB0aGUgbW91c2UgbW92ZWQgb3Zlci5cclxuICAgICAgICogQGV2ZW50XHJcbiAgICAgICAqL1xuICAgICAgZ29vZ2xlLm1hcHMuZXZlbnQudHJpZ2dlcihfdGhpcy5jbHVzdGVyLmdldENsdXN0ZXJlcigpLCAnbW91c2VvdmVyJywgX3RoaXMuY2x1c3Rlcik7XG4gICAgfSk7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSAgQGdldGlmeS9wcm9wZXItYXJyb3dzL3RoaXMsIEBnZXRpZnkvcHJvcGVyLWFycm93cy9uYW1lXG5cbiAgICBnb29nbGUubWFwcy5ldmVudC5hZGREb21MaXN0ZW5lcih0aGlzLmRpdiwgJ21vdXNlb3V0JywgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lICBAZ2V0aWZ5L3Byb3Blci1hcnJvd3MvdGhpcywgQGdldGlmeS9wcm9wZXItYXJyb3dzL25hbWVcbiAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAvKipcclxuICAgICAgICogVGhpcyBldmVudCBpcyBmaXJlZCB3aGVuIHRoZSBtb3VzZSBtb3ZlcyBvdXQgb2YgYSBjbHVzdGVyIG1hcmtlci5cclxuICAgICAgICogQG5hbWUgTWFya2VyQ2x1c3RlcmVyI21vdXNlb3V0XHJcbiAgICAgICAqIEBwYXJhbSB7Q2x1c3Rlcn0gYyBUaGUgY2x1c3RlciB0aGF0IHRoZSBtb3VzZSBtb3ZlZCBvdXQgb2YuXHJcbiAgICAgICAqIEBldmVudFxyXG4gICAgICAgKi9cbiAgICAgIGdvb2dsZS5tYXBzLmV2ZW50LnRyaWdnZXIoX3RoaXMuY2x1c3Rlci5nZXRDbHVzdGVyZXIoKSwgJ21vdXNlb3V0JywgX3RoaXMuY2x1c3Rlcik7XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLm9uUmVtb3ZlID0gZnVuY3Rpb24gb25SZW1vdmUoKSB7XG4gICAgaWYgKHRoaXMuZGl2ICYmIHRoaXMuZGl2LnBhcmVudE5vZGUpIHtcbiAgICAgIHRoaXMuaGlkZSgpO1xuXG4gICAgICBpZiAodGhpcy5ib3VuZHNDaGFuZ2VkTGlzdGVuZXIgIT09IG51bGwpIHtcbiAgICAgICAgZ29vZ2xlLm1hcHMuZXZlbnQucmVtb3ZlTGlzdGVuZXIodGhpcy5ib3VuZHNDaGFuZ2VkTGlzdGVuZXIpO1xuICAgICAgfVxuXG4gICAgICBnb29nbGUubWFwcy5ldmVudC5jbGVhckluc3RhbmNlTGlzdGVuZXJzKHRoaXMuZGl2KTtcbiAgICAgIHRoaXMuZGl2LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5kaXYpO1xuICAgICAgdGhpcy5kaXYgPSBudWxsO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uZHJhdyA9IGZ1bmN0aW9uIGRyYXcoKSB7XG4gICAgaWYgKHRoaXMudmlzaWJsZSAmJiB0aGlzLmRpdiAhPT0gbnVsbCAmJiB0aGlzLmNlbnRlcikge1xuICAgICAgdmFyIF90aGlzJGdldFBvc0Zyb21MYXRMbiA9IHRoaXMuZ2V0UG9zRnJvbUxhdExuZyh0aGlzLmNlbnRlciksXG4gICAgICAgICAgeCA9IF90aGlzJGdldFBvc0Zyb21MYXRMbi54LFxuICAgICAgICAgIHkgPSBfdGhpcyRnZXRQb3NGcm9tTGF0TG4ueTtcblxuICAgICAgdGhpcy5kaXYuc3R5bGUudG9wID0geSArICdweCc7XG4gICAgICB0aGlzLmRpdi5zdHlsZS5sZWZ0ID0geCArICdweCc7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5oaWRlID0gZnVuY3Rpb24gaGlkZSgpIHtcbiAgICBpZiAodGhpcy5kaXYpIHtcbiAgICAgIHRoaXMuZGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfVxuXG4gICAgdGhpcy52aXNpYmxlID0gZmFsc2U7XG4gIH07XG5cbiAgX3Byb3RvLnNob3cgPSBmdW5jdGlvbiBzaG93KCkge1xuICAgIGlmICh0aGlzLmRpdiAmJiB0aGlzLmNlbnRlcikge1xuICAgICAgdmFyIGltZyA9ICcnLFxuICAgICAgICAgIGRpdlRpdGxlID0gJyc7IC8vIE5PVEU6IHZhbHVlcyBtdXN0IGJlIHNwZWNpZmllZCBpbiBweCB1bml0c1xuXG4gICAgICB2YXIgYnAgPSB0aGlzLmJhY2tncm91bmRQb3NpdGlvbi5zcGxpdCgnICcpO1xuICAgICAgdmFyIHNwcml0ZUggPSBwYXJzZUludChicFswXS5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCAnJyksIDEwKTtcbiAgICAgIHZhciBzcHJpdGVWID0gcGFyc2VJbnQoYnBbMV0ucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgJycpLCAxMCk7XG4gICAgICB2YXIgcG9zID0gdGhpcy5nZXRQb3NGcm9tTGF0TG5nKHRoaXMuY2VudGVyKTtcblxuICAgICAgaWYgKHRoaXMuc3VtcyA9PT0gbnVsbCB8fCB0eXBlb2YgdGhpcy5zdW1zLnRpdGxlID09PSAndW5kZWZpbmVkJyB8fCB0aGlzLnN1bXMudGl0bGUgPT09ICcnKSB7XG4gICAgICAgIGRpdlRpdGxlID0gdGhpcy5jbHVzdGVyLmdldENsdXN0ZXJlcigpLmdldFRpdGxlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkaXZUaXRsZSA9IHRoaXMuc3Vtcy50aXRsZTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5kaXYuc3R5bGUuY3NzVGV4dCA9IHRoaXMuY3JlYXRlQ3NzKHBvcyk7XG4gICAgICBpbWcgPSBcIjxpbWcgYWx0PSdcIiArIGRpdlRpdGxlICsgXCInIHNyYz0nXCIgKyB0aGlzLnVybCArIFwiJyBzdHlsZT0ncG9zaXRpb246IGFic29sdXRlOyB0b3A6IFwiICsgc3ByaXRlViArICdweDsgbGVmdDogJyArIHNwcml0ZUggKyAncHg7ICc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWlnbm9yZVxuICAgICAgLy9AdHMtaWdub3JlXG5cbiAgICAgIGlmICghdGhpcy5jbHVzdGVyLmdldENsdXN0ZXJlcigpLmVuYWJsZVJldGluYUljb25zKSB7XG4gICAgICAgIGltZyArPSAnY2xpcDogcmVjdCgnICsgLTEgKiBzcHJpdGVWICsgJ3B4LCAnICsgKC0xICogc3ByaXRlSCArIHRoaXMud2lkdGgpICsgJ3B4LCAnICsgKC0xICogc3ByaXRlViArIHRoaXMuaGVpZ2h0KSArICdweCwgJyArIC0xICogc3ByaXRlSCArICdweCk7JztcbiAgICAgIH1cblxuICAgICAgaW1nICs9IFwiJz5cIjtcbiAgICAgIHRoaXMuZGl2LmlubmVySFRNTCA9IGltZyArIFwiPGRpdiBzdHlsZT0nXCIgKyAncG9zaXRpb246IGFic29sdXRlOycgKyAndG9wOiAnICsgdGhpcy5hbmNob3JUZXh0WzBdICsgJ3B4OycgKyAnbGVmdDogJyArIHRoaXMuYW5jaG9yVGV4dFsxXSArICdweDsnICsgJ2NvbG9yOiAnICsgdGhpcy50ZXh0Q29sb3IgKyAnOycgKyAnZm9udC1zaXplOiAnICsgdGhpcy50ZXh0U2l6ZSArICdweDsnICsgJ2ZvbnQtZmFtaWx5OiAnICsgdGhpcy5mb250RmFtaWx5ICsgJzsnICsgJ2ZvbnQtd2VpZ2h0OiAnICsgdGhpcy5mb250V2VpZ2h0ICsgJzsnICsgJ2ZvbnQtc3R5bGU6ICcgKyB0aGlzLmZvbnRTdHlsZSArICc7JyArICd0ZXh0LWRlY29yYXRpb246ICcgKyB0aGlzLnRleHREZWNvcmF0aW9uICsgJzsnICsgJ3RleHQtYWxpZ246IGNlbnRlcjsnICsgJ3dpZHRoOiAnICsgdGhpcy53aWR0aCArICdweDsnICsgJ2xpbmUtaGVpZ2h0OicgKyB0aGlzLmhlaWdodCArICdweDsnICsgXCInPlwiICsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtaWdub3JlXG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICB0aGlzLnN1bXMudGV4dCArICc8L2Rpdj4nO1xuICAgICAgdGhpcy5kaXYudGl0bGUgPSBkaXZUaXRsZTtcbiAgICAgIHRoaXMuZGl2LnN0eWxlLmRpc3BsYXkgPSAnJztcbiAgICB9XG5cbiAgICB0aGlzLnZpc2libGUgPSB0cnVlO1xuICB9O1xuXG4gIF9wcm90by51c2VTdHlsZSA9IGZ1bmN0aW9uIHVzZVN0eWxlKHN1bXMpIHtcbiAgICB0aGlzLnN1bXMgPSBzdW1zO1xuICAgIHZhciBzdHlsZSA9IHRoaXMuc3R5bGVzW01hdGgubWluKHRoaXMuc3R5bGVzLmxlbmd0aCAtIDEsIE1hdGgubWF4KDAsIHN1bXMuaW5kZXggLSAxKSldO1xuICAgIHRoaXMudXJsID0gc3R5bGUudXJsO1xuICAgIHRoaXMuaGVpZ2h0ID0gc3R5bGUuaGVpZ2h0O1xuICAgIHRoaXMud2lkdGggPSBzdHlsZS53aWR0aDtcbiAgICB0aGlzLmFuY2hvclRleHQgPSBzdHlsZS5hbmNob3JUZXh0IHx8IFswLCAwXTtcbiAgICB0aGlzLmFuY2hvckljb24gPSBzdHlsZS5hbmNob3JJY29uIHx8IFt0aGlzLmhlaWdodCAvIDIsIHRoaXMud2lkdGggLyAyXTtcbiAgICB0aGlzLnRleHRDb2xvciA9IHN0eWxlLnRleHRDb2xvciB8fCAnYmxhY2snO1xuICAgIHRoaXMudGV4dFNpemUgPSBzdHlsZS50ZXh0U2l6ZSB8fCAxMTtcbiAgICB0aGlzLnRleHREZWNvcmF0aW9uID0gc3R5bGUudGV4dERlY29yYXRpb24gfHwgJ25vbmUnO1xuICAgIHRoaXMuZm9udFdlaWdodCA9IHN0eWxlLmZvbnRXZWlnaHQgfHwgJ2JvbGQnO1xuICAgIHRoaXMuZm9udFN0eWxlID0gc3R5bGUuZm9udFN0eWxlIHx8ICdub3JtYWwnO1xuICAgIHRoaXMuZm9udEZhbWlseSA9IHN0eWxlLmZvbnRGYW1pbHkgfHwgJ0FyaWFsLHNhbnMtc2VyaWYnO1xuICAgIHRoaXMuYmFja2dyb3VuZFBvc2l0aW9uID0gc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uIHx8ICcwIDAnO1xuICB9O1xuXG4gIF9wcm90by5zZXRDZW50ZXIgPSBmdW5jdGlvbiBzZXRDZW50ZXIoY2VudGVyKSB7XG4gICAgdGhpcy5jZW50ZXIgPSBjZW50ZXI7XG4gIH07XG5cbiAgX3Byb3RvLmNyZWF0ZUNzcyA9IGZ1bmN0aW9uIGNyZWF0ZUNzcyhwb3MpIHtcbiAgICB2YXIgc3R5bGUgPSBbXTtcbiAgICBzdHlsZS5wdXNoKCdjdXJzb3I6IHBvaW50ZXI7Jyk7XG4gICAgc3R5bGUucHVzaCgncG9zaXRpb246IGFic29sdXRlOyB0b3A6ICcgKyBwb3MueSArICdweDsgbGVmdDogJyArIHBvcy54ICsgJ3B4OycpO1xuICAgIHN0eWxlLnB1c2goJ3dpZHRoOiAnICsgdGhpcy53aWR0aCArICdweDsgaGVpZ2h0OiAnICsgdGhpcy5oZWlnaHQgKyAncHg7Jyk7XG4gICAgcmV0dXJuIHN0eWxlLmpvaW4oJycpO1xuICB9O1xuXG4gIF9wcm90by5nZXRQb3NGcm9tTGF0TG5nID0gZnVuY3Rpb24gZ2V0UG9zRnJvbUxhdExuZyhsYXRsbmcpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1pZ25vcmVcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgdmFyIHBvcyA9IHRoaXMuZ2V0UHJvamVjdGlvbigpLmZyb21MYXRMbmdUb0RpdlBpeGVsKGxhdGxuZyk7XG4gICAgcG9zLnggLT0gdGhpcy5hbmNob3JJY29uWzFdO1xuICAgIHBvcy55IC09IHRoaXMuYW5jaG9ySWNvblswXTsgLy8gcG9zLnggPSBwb3MueFxuICAgIC8vIHBvcy55ID0gcG9zLnlcblxuICAgIHJldHVybiBwb3M7XG4gIH07XG5cbiAgcmV0dXJuIENsdXN0ZXJJY29uO1xufSgpO1xuXG52YXIgQ2x1c3RlciA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIENsdXN0ZXIobWFya2VyQ2x1c3RlcmVyKSB7XG4gICAgdGhpcy5tYXJrZXJDbHVzdGVyZXIgPSBtYXJrZXJDbHVzdGVyZXI7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWlnbm9yZVxuICAgIC8vIEB0cy1pZ25vcmVcblxuICAgIHRoaXMubWFwID0gdGhpcy5tYXJrZXJDbHVzdGVyZXIuZ2V0TWFwKCk7XG4gICAgdGhpcy5ncmlkU2l6ZSA9IHRoaXMubWFya2VyQ2x1c3RlcmVyLmdldEdyaWRTaXplKCk7XG4gICAgdGhpcy5taW5DbHVzdGVyU2l6ZSA9IHRoaXMubWFya2VyQ2x1c3RlcmVyLmdldE1pbmltdW1DbHVzdGVyU2l6ZSgpO1xuICAgIHRoaXMuYXZlcmFnZUNlbnRlciA9IHRoaXMubWFya2VyQ2x1c3RlcmVyLmdldEF2ZXJhZ2VDZW50ZXIoKTtcbiAgICB0aGlzLm1hcmtlcnMgPSBbXTtcbiAgICB0aGlzLmNlbnRlciA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmJvdW5kcyA9IG51bGw7XG4gICAgdGhpcy5jbHVzdGVySWNvbiA9IG5ldyBDbHVzdGVySWNvbih0aGlzLCB0aGlzLm1hcmtlckNsdXN0ZXJlci5nZXRTdHlsZXMoKSk7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gQ2x1c3Rlci5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmdldFNpemUgPSBmdW5jdGlvbiBnZXRTaXplKCkge1xuICAgIHJldHVybiB0aGlzLm1hcmtlcnMubGVuZ3RoO1xuICB9O1xuXG4gIF9wcm90by5nZXRNYXJrZXJzID0gZnVuY3Rpb24gZ2V0TWFya2VycygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXJrZXJzO1xuICB9O1xuXG4gIF9wcm90by5nZXRDZW50ZXIgPSBmdW5jdGlvbiBnZXRDZW50ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2VudGVyO1xuICB9O1xuXG4gIF9wcm90by5nZXRNYXAgPSBmdW5jdGlvbiBnZXRNYXAoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwO1xuICB9O1xuXG4gIF9wcm90by5nZXRDbHVzdGVyZXIgPSBmdW5jdGlvbiBnZXRDbHVzdGVyZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFya2VyQ2x1c3RlcmVyO1xuICB9O1xuXG4gIF9wcm90by5nZXRCb3VuZHMgPSBmdW5jdGlvbiBnZXRCb3VuZHMoKSB7XG4gICAgdmFyIGJvdW5kcyA9IG5ldyBnb29nbGUubWFwcy5MYXRMbmdCb3VuZHModGhpcy5jZW50ZXIsIHRoaXMuY2VudGVyKTtcbiAgICB2YXIgbWFya2VycyA9IHRoaXMuZ2V0TWFya2VycygpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtYXJrZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgcG9zaXRpb24gPSBtYXJrZXJzW2ldLmdldFBvc2l0aW9uKCk7XG5cbiAgICAgIGlmIChwb3NpdGlvbikge1xuICAgICAgICBib3VuZHMuZXh0ZW5kKHBvc2l0aW9uKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYm91bmRzO1xuICB9O1xuXG4gIF9wcm90by5yZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtaWdub3JlXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIHRoaXMuY2x1c3Rlckljb24uc2V0TWFwKG51bGwpO1xuICAgIHRoaXMubWFya2VycyA9IFtdO1xuICAgIGRlbGV0ZSB0aGlzLm1hcmtlcnM7XG4gIH07XG5cbiAgX3Byb3RvLmFkZE1hcmtlciA9IGZ1bmN0aW9uIGFkZE1hcmtlcihtYXJrZXIpIHtcbiAgICBpZiAodGhpcy5pc01hcmtlckFscmVhZHlBZGRlZChtYXJrZXIpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLmNlbnRlcikge1xuICAgICAgdmFyIHBvc2l0aW9uID0gbWFya2VyLmdldFBvc2l0aW9uKCk7XG5cbiAgICAgIGlmIChwb3NpdGlvbikge1xuICAgICAgICB0aGlzLmNlbnRlciA9IHBvc2l0aW9uO1xuICAgICAgICB0aGlzLmNhbGN1bGF0ZUJvdW5kcygpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5hdmVyYWdlQ2VudGVyKSB7XG4gICAgICAgIHZhciBfcG9zaXRpb24gPSBtYXJrZXIuZ2V0UG9zaXRpb24oKTtcblxuICAgICAgICBpZiAoX3Bvc2l0aW9uKSB7XG4gICAgICAgICAgdmFyIGxlbmd0aCA9IHRoaXMubWFya2Vycy5sZW5ndGggKyAxO1xuICAgICAgICAgIHRoaXMuY2VudGVyID0gbmV3IGdvb2dsZS5tYXBzLkxhdExuZygodGhpcy5jZW50ZXIubGF0KCkgKiAobGVuZ3RoIC0gMSkgKyBfcG9zaXRpb24ubGF0KCkpIC8gbGVuZ3RoLCAodGhpcy5jZW50ZXIubG5nKCkgKiAobGVuZ3RoIC0gMSkgKyBfcG9zaXRpb24ubG5nKCkpIC8gbGVuZ3RoKTtcbiAgICAgICAgICB0aGlzLmNhbGN1bGF0ZUJvdW5kcygpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWFya2VyLmlzQWRkZWQgPSB0cnVlO1xuICAgIHRoaXMubWFya2Vycy5wdXNoKG1hcmtlcik7XG4gICAgdmFyIG1Db3VudCA9IHRoaXMubWFya2Vycy5sZW5ndGg7XG4gICAgdmFyIG1heFpvb20gPSB0aGlzLm1hcmtlckNsdXN0ZXJlci5nZXRNYXhab29tKCk7XG5cbiAgICBpZiAobWF4Wm9vbSAhPT0gbnVsbCAmJiB0aGlzLm1hcC5nZXRab29tKCkgPiBtYXhab29tKSB7XG4gICAgICAvLyBab29tZWQgaW4gcGFzdCBtYXggem9vbSwgc28gc2hvdyB0aGUgbWFya2VyLlxuICAgICAgaWYgKG1hcmtlci5nZXRNYXAoKSAhPT0gdGhpcy5tYXApIHtcbiAgICAgICAgbWFya2VyLnNldE1hcCh0aGlzLm1hcCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChtQ291bnQgPCB0aGlzLm1pbkNsdXN0ZXJTaXplKSB7XG4gICAgICAvLyBNaW4gY2x1c3RlciBzaXplIG5vdCByZWFjaGVkIHNvIHNob3cgdGhlIG1hcmtlci5cbiAgICAgIGlmIChtYXJrZXIuZ2V0TWFwKCkgIT09IHRoaXMubWFwKSB7XG4gICAgICAgIG1hcmtlci5zZXRNYXAodGhpcy5tYXApO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAobUNvdW50ID09PSB0aGlzLm1pbkNsdXN0ZXJTaXplKSB7XG4gICAgICAvLyBIaWRlIHRoZSBtYXJrZXJzIHRoYXQgd2VyZSBzaG93aW5nLlxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtQ291bnQ7IGkrKykge1xuICAgICAgICB0aGlzLm1hcmtlcnNbaV0uc2V0TWFwKG51bGwpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBtYXJrZXIuc2V0TWFwKG51bGwpO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIF9wcm90by5pc01hcmtlckluQ2x1c3RlckJvdW5kcyA9IGZ1bmN0aW9uIGlzTWFya2VySW5DbHVzdGVyQm91bmRzKG1hcmtlcikge1xuICAgIGlmICh0aGlzLmJvdW5kcyAhPT0gbnVsbCkge1xuICAgICAgdmFyIHBvc2l0aW9uID0gbWFya2VyLmdldFBvc2l0aW9uKCk7XG5cbiAgICAgIGlmIChwb3NpdGlvbikge1xuICAgICAgICByZXR1cm4gdGhpcy5ib3VuZHMuY29udGFpbnMocG9zaXRpb24pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICBfcHJvdG8uY2FsY3VsYXRlQm91bmRzID0gZnVuY3Rpb24gY2FsY3VsYXRlQm91bmRzKCkge1xuICAgIHRoaXMuYm91bmRzID0gdGhpcy5tYXJrZXJDbHVzdGVyZXIuZ2V0RXh0ZW5kZWRCb3VuZHMobmV3IGdvb2dsZS5tYXBzLkxhdExuZ0JvdW5kcyh0aGlzLmNlbnRlciwgdGhpcy5jZW50ZXIpKTtcbiAgfTtcblxuICBfcHJvdG8udXBkYXRlSWNvbiA9IGZ1bmN0aW9uIHVwZGF0ZUljb24oKSB7XG4gICAgdmFyIG1Db3VudCA9IHRoaXMubWFya2Vycy5sZW5ndGg7XG4gICAgdmFyIG1heFpvb20gPSB0aGlzLm1hcmtlckNsdXN0ZXJlci5nZXRNYXhab29tKCk7XG5cbiAgICBpZiAobWF4Wm9vbSAhPT0gbnVsbCAmJiB0aGlzLm1hcC5nZXRab29tKCkgPiBtYXhab29tKSB7XG4gICAgICB0aGlzLmNsdXN0ZXJJY29uLmhpZGUoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAobUNvdW50IDwgdGhpcy5taW5DbHVzdGVyU2l6ZSkge1xuICAgICAgLy8gTWluIGNsdXN0ZXIgc2l6ZSBub3QgeWV0IHJlYWNoZWQuXG4gICAgICB0aGlzLmNsdXN0ZXJJY29uLmhpZGUoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5jZW50ZXIpIHtcbiAgICAgIHRoaXMuY2x1c3Rlckljb24uc2V0Q2VudGVyKHRoaXMuY2VudGVyKTtcbiAgICB9XG5cbiAgICB0aGlzLmNsdXN0ZXJJY29uLnVzZVN0eWxlKHRoaXMubWFya2VyQ2x1c3RlcmVyLmdldENhbGN1bGF0b3IoKSh0aGlzLm1hcmtlcnMsIHRoaXMubWFya2VyQ2x1c3RlcmVyLmdldFN0eWxlcygpLmxlbmd0aCkpO1xuICAgIHRoaXMuY2x1c3Rlckljb24uc2hvdygpO1xuICB9O1xuXG4gIF9wcm90by5pc01hcmtlckFscmVhZHlBZGRlZCA9IGZ1bmN0aW9uIGlzTWFya2VyQWxyZWFkeUFkZGVkKG1hcmtlcikge1xuICAgIGlmICh0aGlzLm1hcmtlcnMuaW5jbHVkZXMpIHtcbiAgICAgIHJldHVybiB0aGlzLm1hcmtlcnMuaW5jbHVkZXMobWFya2VyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm1hcmtlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKG1hcmtlciA9PT0gdGhpcy5tYXJrZXJzW2ldKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgcmV0dXJuIENsdXN0ZXI7XG59KCk7XG5cbi8qIGdsb2JhbCBnb29nbGUgKi9cblxudmFyIENBTENVTEFUT1IgPSBmdW5jdGlvbiBDQUxDVUxBVE9SKG1hcmtlcnMsIG51bVN0eWxlcykge1xuICB2YXIgaW5kZXggPSAwO1xuICB2YXIgdGl0bGUgPSAnJztcbiAgdmFyIGNvdW50ID0gbWFya2Vycy5sZW5ndGgudG9TdHJpbmcoKTtcbiAgdmFyIGR2ID0gY291bnQ7XG5cbiAgd2hpbGUgKGR2ICE9PSAwKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtaWdub3JlXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGR2ID0gcGFyc2VJbnQoZHYsIDEwKSAvIDEwO1xuICAgIGluZGV4Kys7XG4gIH1cblxuICBpbmRleCA9IE1hdGgubWluKGluZGV4LCBudW1TdHlsZXMpO1xuICByZXR1cm4ge1xuICAgIHRleHQ6IGNvdW50LFxuICAgIGluZGV4OiBpbmRleCxcbiAgICB0aXRsZTogdGl0bGVcbiAgfTtcbn07XG5cbnZhciBCQVRDSF9TSVpFID0gMjAwMDtcbnZhciBCQVRDSF9TSVpFX0lFID0gNTAwO1xudmFyIElNQUdFX1BBVEggPSAnaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vbWFwcy9kb2N1bWVudGF0aW9uL2phdmFzY3JpcHQvZXhhbXBsZXMvbWFya2VyY2x1c3RlcmVyL20nO1xudmFyIElNQUdFX0VYVEVOU0lPTiA9ICdwbmcnO1xudmFyIElNQUdFX1NJWkVTID0gWzUzLCA1NiwgNjYsIDc4LCA5MF07XG52YXIgQ0xVU1RFUkVSX0NMQVNTID0gJ2NsdXN0ZXInO1xudmFyIENsdXN0ZXJlciA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIENsdXN0ZXJlcihtYXAsIG9wdE1hcmtlcnMsIG9wdE9wdGlvbnMpIHtcbiAgICBpZiAob3B0TWFya2VycyA9PT0gdm9pZCAwKSB7XG4gICAgICBvcHRNYXJrZXJzID0gW107XG4gICAgfVxuXG4gICAgaWYgKG9wdE9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgICAgb3B0T3B0aW9ucyA9IHt9O1xuICAgIH1cblxuICAgIHRoaXMuZXh0ZW5kKENsdXN0ZXJlciwgZ29vZ2xlLm1hcHMuT3ZlcmxheVZpZXcpO1xuICAgIHRoaXMubWFya2VycyA9IFtdO1xuICAgIHRoaXMuY2x1c3RlcnMgPSBbXTtcbiAgICB0aGlzLmxpc3RlbmVycyA9IFtdO1xuICAgIHRoaXMuYWN0aXZlTWFwID0gbnVsbDtcbiAgICB0aGlzLnJlYWR5ID0gZmFsc2U7XG4gICAgdGhpcy5ncmlkU2l6ZSA9IG9wdE9wdGlvbnMuZ3JpZFNpemUgfHwgNjA7XG4gICAgdGhpcy5taW5DbHVzdGVyU2l6ZSA9IG9wdE9wdGlvbnMubWluaW11bUNsdXN0ZXJTaXplIHx8IDI7XG4gICAgdGhpcy5tYXhab29tID0gb3B0T3B0aW9ucy5tYXhab29tIHx8IG51bGw7XG4gICAgdGhpcy5zdHlsZXMgPSBvcHRPcHRpb25zLnN0eWxlcyB8fCBbXTtcbiAgICB0aGlzLnRpdGxlID0gb3B0T3B0aW9ucy50aXRsZSB8fCAnJztcbiAgICB0aGlzLnpvb21PbkNsaWNrID0gdHJ1ZTtcblxuICAgIGlmIChvcHRPcHRpb25zLnpvb21PbkNsaWNrICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuem9vbU9uQ2xpY2sgPSBvcHRPcHRpb25zLnpvb21PbkNsaWNrO1xuICAgIH1cblxuICAgIHRoaXMuYXZlcmFnZUNlbnRlciA9IGZhbHNlO1xuXG4gICAgaWYgKG9wdE9wdGlvbnMuYXZlcmFnZUNlbnRlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmF2ZXJhZ2VDZW50ZXIgPSBvcHRPcHRpb25zLmF2ZXJhZ2VDZW50ZXI7XG4gICAgfVxuXG4gICAgdGhpcy5pZ25vcmVIaWRkZW4gPSBmYWxzZTtcblxuICAgIGlmIChvcHRPcHRpb25zLmlnbm9yZUhpZGRlbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlnbm9yZUhpZGRlbiA9IG9wdE9wdGlvbnMuaWdub3JlSGlkZGVuO1xuICAgIH1cblxuICAgIHRoaXMuZW5hYmxlUmV0aW5hSWNvbnMgPSBmYWxzZTtcblxuICAgIGlmIChvcHRPcHRpb25zLmVuYWJsZVJldGluYUljb25zICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuZW5hYmxlUmV0aW5hSWNvbnMgPSBvcHRPcHRpb25zLmVuYWJsZVJldGluYUljb25zO1xuICAgIH1cblxuICAgIHRoaXMuaW1hZ2VQYXRoID0gb3B0T3B0aW9ucy5pbWFnZVBhdGggfHwgSU1BR0VfUEFUSDtcbiAgICB0aGlzLmltYWdlRXh0ZW5zaW9uID0gb3B0T3B0aW9ucy5pbWFnZUV4dGVuc2lvbiB8fCBJTUFHRV9FWFRFTlNJT047XG4gICAgdGhpcy5pbWFnZVNpemVzID0gb3B0T3B0aW9ucy5pbWFnZVNpemVzIHx8IElNQUdFX1NJWkVTO1xuICAgIHRoaXMuY2FsY3VsYXRvciA9IG9wdE9wdGlvbnMuY2FsY3VsYXRvciB8fCBDQUxDVUxBVE9SO1xuICAgIHRoaXMuYmF0Y2hTaXplID0gb3B0T3B0aW9ucy5iYXRjaFNpemUgfHwgQkFUQ0hfU0laRTtcbiAgICB0aGlzLmJhdGNoU2l6ZUlFID0gb3B0T3B0aW9ucy5iYXRjaFNpemVJRSB8fCBCQVRDSF9TSVpFX0lFO1xuICAgIHRoaXMuY2x1c3RlckNsYXNzID0gb3B0T3B0aW9ucy5jbHVzdGVyQ2xhc3MgfHwgQ0xVU1RFUkVSX0NMQVNTO1xuXG4gICAgaWYgKG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdtc2llJykgIT09IC0xKSB7XG4gICAgICAvLyBUcnkgdG8gYXZvaWQgSUUgdGltZW91dCB3aGVuIHByb2Nlc3NpbmcgYSBodWdlIG51bWJlciBvZiBtYXJrZXJzOlxuICAgICAgdGhpcy5iYXRjaFNpemUgPSB0aGlzLmJhdGNoU2l6ZUlFO1xuICAgIH1cblxuICAgIHRoaXMudGltZXJSZWZTdGF0aWMgPSBudWxsO1xuICAgIHRoaXMuc2V0dXBTdHlsZXMoKTtcbiAgICB0aGlzLmFkZE1hcmtlcnMob3B0TWFya2VycywgdHJ1ZSk7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWlnbm9yZVxuICAgIC8vIEB0cy1pZ25vcmVcblxuICAgIHRoaXMuc2V0TWFwKG1hcCk7IC8vIE5vdGU6IHRoaXMgY2F1c2VzIG9uQWRkIHRvIGJlIGNhbGxlZFxuICB9XG5cbiAgdmFyIF9wcm90byA9IENsdXN0ZXJlci5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLm9uQWRkID0gZnVuY3Rpb24gb25BZGQoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWlnbm9yZVxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICB0aGlzLmFjdGl2ZU1hcCA9IHRoaXMuZ2V0TWFwKCk7XG4gICAgdGhpcy5yZWFkeSA9IHRydWU7XG4gICAgdGhpcy5yZXBhaW50KCk7IC8vIEFkZCB0aGUgbWFwIGV2ZW50IGxpc3RlbmVyc1xuXG4gICAgdGhpcy5saXN0ZW5lcnMgPSBbZ29vZ2xlLm1hcHMuZXZlbnQuYWRkTGlzdGVuZXIoIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWlnbm9yZVxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICB0aGlzLmdldE1hcCgpLCAnem9vbV9jaGFuZ2VkJywgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lICBAZ2V0aWZ5L3Byb3Blci1hcnJvd3MvdGhpcywgQGdldGlmeS9wcm9wZXItYXJyb3dzL25hbWVcbiAgICBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpcy5yZXNldFZpZXdwb3J0KGZhbHNlKTsgLy8gV29ya2Fyb3VuZCBmb3IgdGhpcyBHb29nbGUgYnVnOiB3aGVuIG1hcCBpcyBhdCBsZXZlbCAwIGFuZCBcIi1cIiBvZlxuICAgICAgLy8gem9vbSBzbGlkZXIgaXMgY2xpY2tlZCwgYSBcInpvb21fY2hhbmdlZFwiIGV2ZW50IGlzIGZpcmVkIGV2ZW4gdGhvdWdoXG4gICAgICAvLyB0aGUgbWFwIGRvZXNuJ3Qgem9vbSBvdXQgYW55IGZ1cnRoZXIuIEluIHRoaXMgc2l0dWF0aW9uLCBubyBcImlkbGVcIlxuICAgICAgLy8gZXZlbnQgaXMgdHJpZ2dlcmVkIHNvIHRoZSBjbHVzdGVyIG1hcmtlcnMgdGhhdCBoYXZlIGJlZW4gcmVtb3ZlZFxuICAgICAgLy8gZG8gbm90IGdldCByZWRyYXduLiBTYW1lIGdvZXMgZm9yIGEgem9vbSBpbiBhdCBtYXhab29tLlxuXG5cbiAgICAgIGlmICggLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtaWdub3JlXG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICBfdGhpcy5nZXRNYXAoKS5nZXRab29tKCkgPT09IChfdGhpcy5nZXQoJ21pblpvb20nKSB8fCAwKSB8fCAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1pZ25vcmVcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIF90aGlzLmdldE1hcCgpLmdldFpvb20oKSA9PT0gX3RoaXMuZ2V0KCdtYXhab29tJykpIHtcbiAgICAgICAgZ29vZ2xlLm1hcHMuZXZlbnQudHJpZ2dlcihfdGhpcywgJ2lkbGUnKTtcbiAgICAgIH1cbiAgICB9KSwgZ29vZ2xlLm1hcHMuZXZlbnQuYWRkTGlzdGVuZXIoIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWlnbm9yZVxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICB0aGlzLmdldE1hcCgpLCAnaWRsZScsIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSAgQGdldGlmeS9wcm9wZXItYXJyb3dzL3RoaXMsIEBnZXRpZnkvcHJvcGVyLWFycm93cy9uYW1lXG4gICAgZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMucmVkcmF3KCk7XG4gICAgfSldO1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAZ2V0aWZ5L3Byb3Blci1hcnJvd3MvdGhpc1xuICA7XG5cbiAgX3Byb3RvLm9uUmVtb3ZlID0gZnVuY3Rpb24gb25SZW1vdmUoKSB7XG4gICAgLy8gUHV0IGFsbCB0aGUgbWFuYWdlZCBtYXJrZXJzIGJhY2sgb24gdGhlIG1hcDpcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubWFya2Vycy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRoaXMubWFya2Vyc1tpXS5nZXRNYXAoKSAhPT0gdGhpcy5hY3RpdmVNYXApIHtcbiAgICAgICAgdGhpcy5tYXJrZXJzW2ldLnNldE1hcCh0aGlzLmFjdGl2ZU1hcCk7XG4gICAgICB9XG4gICAgfSAvLyBSZW1vdmUgYWxsIGNsdXN0ZXJzOlxuXG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgdGhpcy5jbHVzdGVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHRoaXMuY2x1c3RlcnNbX2ldLnJlbW92ZSgpO1xuICAgIH1cblxuICAgIHRoaXMuY2x1c3RlcnMgPSBbXTsgLy8gUmVtb3ZlIG1hcCBldmVudCBsaXN0ZW5lcnM6XG5cbiAgICBmb3IgKHZhciBfaTIgPSAwOyBfaTIgPCB0aGlzLmxpc3RlbmVycy5sZW5ndGg7IF9pMisrKSB7XG4gICAgICBnb29nbGUubWFwcy5ldmVudC5yZW1vdmVMaXN0ZW5lcih0aGlzLmxpc3RlbmVyc1tfaTJdKTtcbiAgICB9XG5cbiAgICB0aGlzLmxpc3RlbmVycyA9IFtdO1xuICAgIHRoaXMuYWN0aXZlTWFwID0gbnVsbDtcbiAgICB0aGlzLnJlYWR5ID0gZmFsc2U7XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1lbXB0eS1mdW5jdGlvblxuICA7XG5cbiAgX3Byb3RvLmRyYXcgPSBmdW5jdGlvbiBkcmF3KCkge307XG5cbiAgX3Byb3RvLnNldHVwU3R5bGVzID0gZnVuY3Rpb24gc2V0dXBTdHlsZXMoKSB7XG4gICAgaWYgKHRoaXMuc3R5bGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuaW1hZ2VTaXplcy5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy5zdHlsZXMucHVzaCh7XG4gICAgICAgIHVybDogdGhpcy5pbWFnZVBhdGggKyAoaSArIDEpICsgJy4nICsgdGhpcy5pbWFnZUV4dGVuc2lvbixcbiAgICAgICAgaGVpZ2h0OiB0aGlzLmltYWdlU2l6ZXNbaV0sXG4gICAgICAgIHdpZHRoOiB0aGlzLmltYWdlU2l6ZXNbaV1cbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uZml0TWFwVG9NYXJrZXJzID0gZnVuY3Rpb24gZml0TWFwVG9NYXJrZXJzKCkge1xuICAgIHZhciBtYXJrZXJzID0gdGhpcy5nZXRNYXJrZXJzKCk7XG4gICAgdmFyIGJvdW5kcyA9IG5ldyBnb29nbGUubWFwcy5MYXRMbmdCb3VuZHMoKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbWFya2Vycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHBvc2l0aW9uID0gbWFya2Vyc1tpXS5nZXRQb3NpdGlvbigpO1xuXG4gICAgICBpZiAocG9zaXRpb24pIHtcbiAgICAgICAgYm91bmRzLmV4dGVuZChwb3NpdGlvbik7XG4gICAgICB9XG4gICAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1pZ25vcmVcbiAgICAvLyBAdHMtaWdub3JlXG5cblxuICAgIHRoaXMuZ2V0TWFwKCkuZml0Qm91bmRzKGJvdW5kcyk7XG4gIH07XG5cbiAgX3Byb3RvLmdldEdyaWRTaXplID0gZnVuY3Rpb24gZ2V0R3JpZFNpemUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ3JpZFNpemU7XG4gIH07XG5cbiAgX3Byb3RvLnNldEdyaWRTaXplID0gZnVuY3Rpb24gc2V0R3JpZFNpemUoZ3JpZFNpemUpIHtcbiAgICB0aGlzLmdyaWRTaXplID0gZ3JpZFNpemU7XG4gIH07XG5cbiAgX3Byb3RvLmdldE1pbmltdW1DbHVzdGVyU2l6ZSA9IGZ1bmN0aW9uIGdldE1pbmltdW1DbHVzdGVyU2l6ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5taW5DbHVzdGVyU2l6ZTtcbiAgfTtcblxuICBfcHJvdG8uc2V0TWluaW11bUNsdXN0ZXJTaXplID0gZnVuY3Rpb24gc2V0TWluaW11bUNsdXN0ZXJTaXplKG1pbmltdW1DbHVzdGVyU2l6ZSkge1xuICAgIHRoaXMubWluQ2x1c3RlclNpemUgPSBtaW5pbXVtQ2x1c3RlclNpemU7XG4gIH07XG5cbiAgX3Byb3RvLmdldE1heFpvb20gPSBmdW5jdGlvbiBnZXRNYXhab29tKCkge1xuICAgIHJldHVybiB0aGlzLm1heFpvb207XG4gIH07XG5cbiAgX3Byb3RvLnNldE1heFpvb20gPSBmdW5jdGlvbiBzZXRNYXhab29tKG1heFpvb20pIHtcbiAgICB0aGlzLm1heFpvb20gPSBtYXhab29tO1xuICB9O1xuXG4gIF9wcm90by5nZXRTdHlsZXMgPSBmdW5jdGlvbiBnZXRTdHlsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3R5bGVzO1xuICB9O1xuXG4gIF9wcm90by5zZXRTdHlsZXMgPSBmdW5jdGlvbiBzZXRTdHlsZXMoc3R5bGVzKSB7XG4gICAgdGhpcy5zdHlsZXMgPSBzdHlsZXM7XG4gIH07XG5cbiAgX3Byb3RvLmdldFRpdGxlID0gZnVuY3Rpb24gZ2V0VGl0bGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudGl0bGU7XG4gIH07XG5cbiAgX3Byb3RvLnNldFRpdGxlID0gZnVuY3Rpb24gc2V0VGl0bGUodGl0bGUpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gIH07XG5cbiAgX3Byb3RvLmdldFpvb21PbkNsaWNrID0gZnVuY3Rpb24gZ2V0Wm9vbU9uQ2xpY2soKSB7XG4gICAgcmV0dXJuIHRoaXMuem9vbU9uQ2xpY2s7XG4gIH07XG5cbiAgX3Byb3RvLnNldFpvb21PbkNsaWNrID0gZnVuY3Rpb24gc2V0Wm9vbU9uQ2xpY2soem9vbU9uQ2xpY2spIHtcbiAgICB0aGlzLnpvb21PbkNsaWNrID0gem9vbU9uQ2xpY2s7XG4gIH07XG5cbiAgX3Byb3RvLmdldEF2ZXJhZ2VDZW50ZXIgPSBmdW5jdGlvbiBnZXRBdmVyYWdlQ2VudGVyKCkge1xuICAgIHJldHVybiB0aGlzLmF2ZXJhZ2VDZW50ZXI7XG4gIH07XG5cbiAgX3Byb3RvLnNldEF2ZXJhZ2VDZW50ZXIgPSBmdW5jdGlvbiBzZXRBdmVyYWdlQ2VudGVyKGF2ZXJhZ2VDZW50ZXIpIHtcbiAgICB0aGlzLmF2ZXJhZ2VDZW50ZXIgPSBhdmVyYWdlQ2VudGVyO1xuICB9O1xuXG4gIF9wcm90by5nZXRJZ25vcmVIaWRkZW4gPSBmdW5jdGlvbiBnZXRJZ25vcmVIaWRkZW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuaWdub3JlSGlkZGVuO1xuICB9O1xuXG4gIF9wcm90by5zZXRJZ25vcmVIaWRkZW4gPSBmdW5jdGlvbiBzZXRJZ25vcmVIaWRkZW4oaWdub3JlSGlkZGVuKSB7XG4gICAgdGhpcy5pZ25vcmVIaWRkZW4gPSBpZ25vcmVIaWRkZW47XG4gIH07XG5cbiAgX3Byb3RvLmdldEVuYWJsZVJldGluYUljb25zID0gZnVuY3Rpb24gZ2V0RW5hYmxlUmV0aW5hSWNvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZW5hYmxlUmV0aW5hSWNvbnM7XG4gIH07XG5cbiAgX3Byb3RvLnNldEVuYWJsZVJldGluYUljb25zID0gZnVuY3Rpb24gc2V0RW5hYmxlUmV0aW5hSWNvbnMoZW5hYmxlUmV0aW5hSWNvbnMpIHtcbiAgICB0aGlzLmVuYWJsZVJldGluYUljb25zID0gZW5hYmxlUmV0aW5hSWNvbnM7XG4gIH07XG5cbiAgX3Byb3RvLmdldEltYWdlRXh0ZW5zaW9uID0gZnVuY3Rpb24gZ2V0SW1hZ2VFeHRlbnNpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW1hZ2VFeHRlbnNpb247XG4gIH07XG5cbiAgX3Byb3RvLnNldEltYWdlRXh0ZW5zaW9uID0gZnVuY3Rpb24gc2V0SW1hZ2VFeHRlbnNpb24oaW1hZ2VFeHRlbnNpb24pIHtcbiAgICB0aGlzLmltYWdlRXh0ZW5zaW9uID0gaW1hZ2VFeHRlbnNpb247XG4gIH07XG5cbiAgX3Byb3RvLmdldEltYWdlUGF0aCA9IGZ1bmN0aW9uIGdldEltYWdlUGF0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbWFnZVBhdGg7XG4gIH07XG5cbiAgX3Byb3RvLnNldEltYWdlUGF0aCA9IGZ1bmN0aW9uIHNldEltYWdlUGF0aChpbWFnZVBhdGgpIHtcbiAgICB0aGlzLmltYWdlUGF0aCA9IGltYWdlUGF0aDtcbiAgfTtcblxuICBfcHJvdG8uZ2V0SW1hZ2VTaXplcyA9IGZ1bmN0aW9uIGdldEltYWdlU2l6ZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW1hZ2VTaXplcztcbiAgfTtcblxuICBfcHJvdG8uc2V0SW1hZ2VTaXplcyA9IGZ1bmN0aW9uIHNldEltYWdlU2l6ZXMoaW1hZ2VTaXplcykge1xuICAgIHRoaXMuaW1hZ2VTaXplcyA9IGltYWdlU2l6ZXM7XG4gIH07XG5cbiAgX3Byb3RvLmdldENhbGN1bGF0b3IgPSBmdW5jdGlvbiBnZXRDYWxjdWxhdG9yKCkge1xuICAgIHJldHVybiB0aGlzLmNhbGN1bGF0b3I7XG4gIH07XG5cbiAgX3Byb3RvLnNldENhbGN1bGF0b3IgPSBmdW5jdGlvbiBzZXRDYWxjdWxhdG9yKGNhbGN1bGF0b3IpIHtcbiAgICB0aGlzLmNhbGN1bGF0b3IgPSBjYWxjdWxhdG9yO1xuICB9O1xuXG4gIF9wcm90by5nZXRCYXRjaFNpemVJRSA9IGZ1bmN0aW9uIGdldEJhdGNoU2l6ZUlFKCkge1xuICAgIHJldHVybiB0aGlzLmJhdGNoU2l6ZUlFO1xuICB9O1xuXG4gIF9wcm90by5zZXRCYXRjaFNpemVJRSA9IGZ1bmN0aW9uIHNldEJhdGNoU2l6ZUlFKGJhdGNoU2l6ZUlFKSB7XG4gICAgdGhpcy5iYXRjaFNpemVJRSA9IGJhdGNoU2l6ZUlFO1xuICB9O1xuXG4gIF9wcm90by5nZXRDbHVzdGVyQ2xhc3MgPSBmdW5jdGlvbiBnZXRDbHVzdGVyQ2xhc3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2x1c3RlckNsYXNzO1xuICB9O1xuXG4gIF9wcm90by5zZXRDbHVzdGVyQ2xhc3MgPSBmdW5jdGlvbiBzZXRDbHVzdGVyQ2xhc3MoY2x1c3RlckNsYXNzKSB7XG4gICAgdGhpcy5jbHVzdGVyQ2xhc3MgPSBjbHVzdGVyQ2xhc3M7XG4gIH07XG5cbiAgX3Byb3RvLmdldE1hcmtlcnMgPSBmdW5jdGlvbiBnZXRNYXJrZXJzKCkge1xuICAgIHJldHVybiB0aGlzLm1hcmtlcnM7XG4gIH07XG5cbiAgX3Byb3RvLmdldFRvdGFsTWFya2VycyA9IGZ1bmN0aW9uIGdldFRvdGFsTWFya2VycygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXJrZXJzLmxlbmd0aDtcbiAgfTtcblxuICBfcHJvdG8uZ2V0Q2x1c3RlcnMgPSBmdW5jdGlvbiBnZXRDbHVzdGVycygpIHtcbiAgICByZXR1cm4gdGhpcy5jbHVzdGVycztcbiAgfTtcblxuICBfcHJvdG8uZ2V0VG90YWxDbHVzdGVycyA9IGZ1bmN0aW9uIGdldFRvdGFsQ2x1c3RlcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2x1c3RlcnMubGVuZ3RoO1xuICB9O1xuXG4gIF9wcm90by5hZGRNYXJrZXIgPSBmdW5jdGlvbiBhZGRNYXJrZXIobWFya2VyLCBvcHROb0RyYXcpIHtcbiAgICB0aGlzLnB1c2hNYXJrZXJUbyhtYXJrZXIpO1xuXG4gICAgaWYgKCFvcHROb0RyYXcpIHtcbiAgICAgIHRoaXMucmVkcmF3KCk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5hZGRNYXJrZXJzID0gZnVuY3Rpb24gYWRkTWFya2VycyhtYXJrZXJzLCBvcHROb0RyYXcpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gbWFya2Vycykge1xuICAgICAgaWYgKG1hcmtlcnMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICB0aGlzLnB1c2hNYXJrZXJUbyhtYXJrZXJzW2tleV0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghb3B0Tm9EcmF3KSB7XG4gICAgICB0aGlzLnJlZHJhdygpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8ucHVzaE1hcmtlclRvID0gZnVuY3Rpb24gcHVzaE1hcmtlclRvKG1hcmtlcikge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgLy8gSWYgdGhlIG1hcmtlciBpcyBkcmFnZ2FibGUgYWRkIGEgbGlzdGVuZXIgc28gd2UgY2FuIHVwZGF0ZSB0aGUgY2x1c3RlcnMgb24gdGhlIGRyYWdlbmQ6XG4gICAgaWYgKG1hcmtlci5nZXREcmFnZ2FibGUoKSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBnZXRpZnkvcHJvcGVyLWFycm93cy9uYW1lLCBAZ2V0aWZ5L3Byb3Blci1hcnJvd3MvdGhpc1xuICAgICAgZ29vZ2xlLm1hcHMuZXZlbnQuYWRkTGlzdGVuZXIobWFya2VyLCAnZHJhZ2VuZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKF90aGlzMi5yZWFkeSkge1xuICAgICAgICAgIG1hcmtlci5pc0FkZGVkID0gZmFsc2U7XG5cbiAgICAgICAgICBfdGhpczIucmVwYWludCgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBtYXJrZXIuaXNBZGRlZCA9IGZhbHNlO1xuICAgIHRoaXMubWFya2Vycy5wdXNoKG1hcmtlcik7XG4gIH07XG5cbiAgX3Byb3RvLnJlbW92ZU1hcmtlcl8gPSBmdW5jdGlvbiByZW1vdmVNYXJrZXJfKG1hcmtlcikge1xuICAgIHZhciBpbmRleCA9IC0xO1xuXG4gICAgaWYgKHRoaXMubWFya2Vycy5pbmRleE9mKSB7XG4gICAgICBpbmRleCA9IHRoaXMubWFya2Vycy5pbmRleE9mKG1hcmtlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5tYXJrZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChtYXJrZXIgPT09IHRoaXMubWFya2Vyc1tpXSkge1xuICAgICAgICAgIGluZGV4ID0gaTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgIC8vIE1hcmtlciBpcyBub3QgaW4gb3VyIGxpc3Qgb2YgbWFya2Vycywgc28gZG8gbm90aGluZzpcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBtYXJrZXIuc2V0TWFwKG51bGwpO1xuICAgIHRoaXMubWFya2Vycy5zcGxpY2UoaW5kZXgsIDEpOyAvLyBSZW1vdmUgdGhlIG1hcmtlciBmcm9tIHRoZSBsaXN0IG9mIG1hbmFnZWQgbWFya2Vyc1xuXG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgX3Byb3RvLnJlbW92ZU1hcmtlciA9IGZ1bmN0aW9uIHJlbW92ZU1hcmtlcihtYXJrZXIsIG9wdE5vRHJhdykge1xuICAgIHZhciByZW1vdmVkID0gdGhpcy5yZW1vdmVNYXJrZXJfKG1hcmtlcik7XG5cbiAgICBpZiAoIW9wdE5vRHJhdyAmJiByZW1vdmVkKSB7XG4gICAgICB0aGlzLnJlcGFpbnQoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVtb3ZlZDtcbiAgfTtcblxuICBfcHJvdG8ucmVtb3ZlTWFya2VycyA9IGZ1bmN0aW9uIHJlbW92ZU1hcmtlcnMobWFya2Vycywgb3B0Tm9EcmF3KSB7XG4gICAgdmFyIHJlbW92ZWQgPSBmYWxzZTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbWFya2Vycy5sZW5ndGg7IGkrKykge1xuICAgICAgcmVtb3ZlZCA9IHJlbW92ZWQgfHwgdGhpcy5yZW1vdmVNYXJrZXJfKG1hcmtlcnNbaV0pO1xuICAgIH1cblxuICAgIGlmICghb3B0Tm9EcmF3ICYmIHJlbW92ZWQpIHtcbiAgICAgIHRoaXMucmVwYWludCgpO1xuICAgIH1cblxuICAgIHJldHVybiByZW1vdmVkO1xuICB9O1xuXG4gIF9wcm90by5jbGVhck1hcmtlcnMgPSBmdW5jdGlvbiBjbGVhck1hcmtlcnMoKSB7XG4gICAgdGhpcy5yZXNldFZpZXdwb3J0KHRydWUpO1xuICAgIHRoaXMubWFya2VycyA9IFtdO1xuICB9O1xuXG4gIF9wcm90by5yZXBhaW50ID0gZnVuY3Rpb24gcmVwYWludCgpIHtcbiAgICB2YXIgb2xkQ2x1c3RlcnMgPSB0aGlzLmNsdXN0ZXJzLnNsaWNlKCk7XG4gICAgdGhpcy5jbHVzdGVycyA9IFtdO1xuICAgIHRoaXMucmVzZXRWaWV3cG9ydChmYWxzZSk7XG4gICAgdGhpcy5yZWRyYXcoKTsgLy8gUmVtb3ZlIHRoZSBvbGQgY2x1c3RlcnMuXG4gICAgLy8gRG8gaXQgaW4gYSB0aW1lb3V0IHRvIHByZXZlbnQgYmxpbmtpbmcgZWZmZWN0LlxuXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBvbGRDbHVzdGVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICBvbGRDbHVzdGVyc1tpXS5yZW1vdmUoKTtcbiAgICAgIH1cbiAgICB9LCAwKTtcbiAgfTtcblxuICBfcHJvdG8uZ2V0RXh0ZW5kZWRCb3VuZHMgPSBmdW5jdGlvbiBnZXRFeHRlbmRlZEJvdW5kcyhib3VuZHMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1pZ25vcmVcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgdmFyIHByb2plY3Rpb24gPSB0aGlzLmdldFByb2plY3Rpb24oKTsgLy8gQ29udmVydCB0aGUgcG9pbnRzIHRvIHBpeGVscyBhbmQgdGhlIGV4dGVuZCBvdXQgYnkgdGhlIGdyaWQgc2l6ZS5cblxuICAgIHZhciB0clBpeCA9IHByb2plY3Rpb24uZnJvbUxhdExuZ1RvRGl2UGl4ZWwoIC8vIFR1cm4gdGhlIGJvdW5kcyBpbnRvIGxhdGxuZy5cbiAgICBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKGJvdW5kcy5nZXROb3J0aEVhc3QoKS5sYXQoKSwgYm91bmRzLmdldE5vcnRoRWFzdCgpLmxuZygpKSk7XG4gICAgdHJQaXgueCArPSB0aGlzLmdyaWRTaXplO1xuICAgIHRyUGl4LnkgLT0gdGhpcy5ncmlkU2l6ZTtcbiAgICB2YXIgYmxQaXggPSBwcm9qZWN0aW9uLmZyb21MYXRMbmdUb0RpdlBpeGVsKCAvLyBUdXJuIHRoZSBib3VuZHMgaW50byBsYXRsbmcuXG4gICAgbmV3IGdvb2dsZS5tYXBzLkxhdExuZyhib3VuZHMuZ2V0U291dGhXZXN0KCkubGF0KCksIGJvdW5kcy5nZXRTb3V0aFdlc3QoKS5sbmcoKSkpO1xuICAgIGJsUGl4LnggLT0gdGhpcy5ncmlkU2l6ZTtcbiAgICBibFBpeC55ICs9IHRoaXMuZ3JpZFNpemU7IC8vIEV4dGVuZCB0aGUgYm91bmRzIHRvIGNvbnRhaW4gdGhlIG5ldyBib3VuZHMuXG5cbiAgICBib3VuZHMuZXh0ZW5kKCAvLyBDb252ZXJ0IHRoZSBwaXhlbCBwb2ludHMgYmFjayB0byBMYXRMbmcgbndcbiAgICBwcm9qZWN0aW9uLmZyb21EaXZQaXhlbFRvTGF0TG5nKHRyUGl4KSk7XG4gICAgYm91bmRzLmV4dGVuZCggLy8gQ29udmVydCB0aGUgcGl4ZWwgcG9pbnRzIGJhY2sgdG8gTGF0TG5nIHN3XG4gICAgcHJvamVjdGlvbi5mcm9tRGl2UGl4ZWxUb0xhdExuZyhibFBpeCkpO1xuICAgIHJldHVybiBib3VuZHM7XG4gIH07XG5cbiAgX3Byb3RvLnJlZHJhdyA9IGZ1bmN0aW9uIHJlZHJhdygpIHtcbiAgICAvLyBSZWRyYXdzIGFsbCB0aGUgY2x1c3RlcnMuXG4gICAgdGhpcy5jcmVhdGVDbHVzdGVycygwKTtcbiAgfTtcblxuICBfcHJvdG8ucmVzZXRWaWV3cG9ydCA9IGZ1bmN0aW9uIHJlc2V0Vmlld3BvcnQob3B0SGlkZSkge1xuICAgIC8vIFJlbW92ZSBhbGwgdGhlIGNsdXN0ZXJzXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNsdXN0ZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLmNsdXN0ZXJzW2ldLnJlbW92ZSgpO1xuICAgIH1cblxuICAgIHRoaXMuY2x1c3RlcnMgPSBbXTsgLy8gUmVzZXQgdGhlIG1hcmtlcnMgdG8gbm90IGJlIGFkZGVkIGFuZCB0byBiZSByZW1vdmVkIGZyb20gdGhlIG1hcC5cblxuICAgIGZvciAodmFyIF9pMyA9IDA7IF9pMyA8IHRoaXMubWFya2Vycy5sZW5ndGg7IF9pMysrKSB7XG4gICAgICB2YXIgbWFya2VyID0gdGhpcy5tYXJrZXJzW19pM107XG4gICAgICBtYXJrZXIuaXNBZGRlZCA9IGZhbHNlO1xuXG4gICAgICBpZiAob3B0SGlkZSkge1xuICAgICAgICBtYXJrZXIuc2V0TWFwKG51bGwpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uZGlzdGFuY2VCZXR3ZWVuUG9pbnRzID0gZnVuY3Rpb24gZGlzdGFuY2VCZXR3ZWVuUG9pbnRzKHAxLCBwMikge1xuICAgIHZhciBSID0gNjM3MTsgLy8gUmFkaXVzIG9mIHRoZSBFYXJ0aCBpbiBrbVxuXG4gICAgdmFyIGRMYXQgPSAocDIubGF0KCkgLSBwMS5sYXQoKSkgKiBNYXRoLlBJIC8gMTgwO1xuICAgIHZhciBkTG9uID0gKHAyLmxuZygpIC0gcDEubG5nKCkpICogTWF0aC5QSSAvIDE4MDtcbiAgICB2YXIgYSA9IE1hdGguc2luKGRMYXQgLyAyKSAqIE1hdGguc2luKGRMYXQgLyAyKSArIE1hdGguY29zKHAxLmxhdCgpICogTWF0aC5QSSAvIDE4MCkgKiBNYXRoLmNvcyhwMi5sYXQoKSAqIE1hdGguUEkgLyAxODApICogTWF0aC5zaW4oZExvbiAvIDIpICogTWF0aC5zaW4oZExvbiAvIDIpO1xuICAgIHJldHVybiBSICogKDIgKiBNYXRoLmF0YW4yKE1hdGguc3FydChhKSwgTWF0aC5zcXJ0KDEgLSBhKSkpO1xuICB9O1xuXG4gIF9wcm90by5pc01hcmtlckluQm91bmRzID0gZnVuY3Rpb24gaXNNYXJrZXJJbkJvdW5kcyhtYXJrZXIsIGJvdW5kcykge1xuICAgIHZhciBwb3NpdGlvbiA9IG1hcmtlci5nZXRQb3NpdGlvbigpO1xuXG4gICAgaWYgKHBvc2l0aW9uKSB7XG4gICAgICByZXR1cm4gYm91bmRzLmNvbnRhaW5zKHBvc2l0aW9uKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgX3Byb3RvLmFkZFRvQ2xvc2VzdENsdXN0ZXIgPSBmdW5jdGlvbiBhZGRUb0Nsb3Nlc3RDbHVzdGVyKG1hcmtlcikge1xuICAgIHZhciBjbHVzdGVyO1xuICAgIHZhciBkaXN0YW5jZSA9IDQwMDAwOyAvLyBTb21lIGxhcmdlIG51bWJlclxuXG4gICAgdmFyIGNsdXN0ZXJUb0FkZFRvID0gbnVsbDtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jbHVzdGVycy5sZW5ndGg7IGkrKykge1xuICAgICAgY2x1c3RlciA9IHRoaXMuY2x1c3RlcnNbaV07XG4gICAgICB2YXIgY2VudGVyID0gY2x1c3Rlci5nZXRDZW50ZXIoKTtcbiAgICAgIHZhciBwb3NpdGlvbiA9IG1hcmtlci5nZXRQb3NpdGlvbigpO1xuXG4gICAgICBpZiAoY2VudGVyICYmIHBvc2l0aW9uKSB7XG4gICAgICAgIHZhciBkID0gdGhpcy5kaXN0YW5jZUJldHdlZW5Qb2ludHMoY2VudGVyLCBwb3NpdGlvbik7XG5cbiAgICAgICAgaWYgKGQgPCBkaXN0YW5jZSkge1xuICAgICAgICAgIGRpc3RhbmNlID0gZDtcbiAgICAgICAgICBjbHVzdGVyVG9BZGRUbyA9IGNsdXN0ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY2x1c3RlclRvQWRkVG8gJiYgY2x1c3RlclRvQWRkVG8uaXNNYXJrZXJJbkNsdXN0ZXJCb3VuZHMobWFya2VyKSkge1xuICAgICAgY2x1c3RlclRvQWRkVG8uYWRkTWFya2VyKG1hcmtlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNsdXN0ZXIgPSBuZXcgQ2x1c3Rlcih0aGlzKTtcbiAgICAgIGNsdXN0ZXIuYWRkTWFya2VyKG1hcmtlcik7XG4gICAgICB0aGlzLmNsdXN0ZXJzLnB1c2goY2x1c3Rlcik7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5jcmVhdGVDbHVzdGVycyA9IGZ1bmN0aW9uIGNyZWF0ZUNsdXN0ZXJzKGlGaXJzdCkge1xuICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgaWYgKCF0aGlzLnJlYWR5KSB7XG4gICAgICByZXR1cm47XG4gICAgfSAvLyBDYW5jZWwgcHJldmlvdXMgYmF0Y2ggcHJvY2Vzc2luZyBpZiB3ZSdyZSB3b3JraW5nIG9uIHRoZSBmaXJzdCBiYXRjaDpcblxuXG4gICAgaWYgKGlGaXJzdCA9PT0gMCkge1xuICAgICAgLyoqXHJcbiAgICAgICAqIFRoaXMgZXZlbnQgaXMgZmlyZWQgd2hlbiB0aGUgPGNvZGU+Q2x1c3RlcmVyPC9jb2RlPiBiZWdpbnNcclxuICAgICAgICogIGNsdXN0ZXJpbmcgbWFya2Vycy5cclxuICAgICAgICogQG5hbWUgQ2x1c3RlcmVyI2NsdXN0ZXJpbmdiZWdpblxyXG4gICAgICAgKiBAcGFyYW0ge0NsdXN0ZXJlcn0gbWMgVGhlIENsdXN0ZXJlciB3aG9zZSBtYXJrZXJzIGFyZSBiZWluZyBjbHVzdGVyZWQuXHJcbiAgICAgICAqIEBldmVudFxyXG4gICAgICAgKi9cbiAgICAgIGdvb2dsZS5tYXBzLmV2ZW50LnRyaWdnZXIodGhpcywgJ2NsdXN0ZXJpbmdiZWdpbicsIHRoaXMpO1xuXG4gICAgICBpZiAodGhpcy50aW1lclJlZlN0YXRpYyAhPT0gbnVsbCkge1xuICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRoaXMudGltZXJSZWZTdGF0aWMpO1xuICAgICAgICBkZWxldGUgdGhpcy50aW1lclJlZlN0YXRpYztcbiAgICAgIH1cbiAgICB9IC8vIEdldCBvdXIgY3VycmVudCBtYXAgdmlldyBib3VuZHMuXG4gICAgLy8gQ3JlYXRlIGEgbmV3IGJvdW5kcyBvYmplY3Qgc28gd2UgZG9uJ3QgYWZmZWN0IHRoZSBtYXAuXG4gICAgLy9cbiAgICAvLyBTZWUgQ29tbWVudHMgOSAmIDExIG9uIElzc3VlIDM2NTEgcmVsYXRpbmcgdG8gdGhpcyB3b3JrYXJvdW5kIGZvciBhIEdvb2dsZSBNYXBzIGJ1ZzpcblxuXG4gICAgdmFyIG1hcEJvdW5kcyA9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWlnbm9yZVxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICB0aGlzLmdldE1hcCgpLmdldFpvb20oKSA+IDMgPyBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nQm91bmRzKCAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1pZ25vcmVcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgdGhpcy5nZXRNYXAoKS5nZXRCb3VuZHMoKS5nZXRTb3V0aFdlc3QoKSwgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtaWdub3JlXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIHRoaXMuZ2V0TWFwKCkuZ2V0Qm91bmRzKCkuZ2V0Tm9ydGhFYXN0KCkpIDogbmV3IGdvb2dsZS5tYXBzLkxhdExuZ0JvdW5kcyhuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKDg1LjAyMDcwNzcxNzQzNDcyLCAtMTc4LjQ4Mzg4NDM0Mzc1KSwgbmV3IGdvb2dsZS5tYXBzLkxhdExuZygtODUuMDgxMzY0NDQzODQ1NDQsIDE3OC4wMDA0ODg2NTYyNSkpO1xuICAgIHZhciBib3VuZHMgPSB0aGlzLmdldEV4dGVuZGVkQm91bmRzKG1hcEJvdW5kcyk7XG4gICAgdmFyIGlMYXN0ID0gTWF0aC5taW4oaUZpcnN0ICsgdGhpcy5iYXRjaFNpemUsIHRoaXMubWFya2Vycy5sZW5ndGgpO1xuXG4gICAgZm9yICh2YXIgaSA9IGlGaXJzdDsgaSA8IGlMYXN0OyBpKyspIHtcbiAgICAgIHZhciBtYXJrZXIgPSB0aGlzLm1hcmtlcnNbaV07XG5cbiAgICAgIGlmICghbWFya2VyLmlzQWRkZWQgJiYgdGhpcy5pc01hcmtlckluQm91bmRzKG1hcmtlciwgYm91bmRzKSkge1xuICAgICAgICBpZiAoIXRoaXMuaWdub3JlSGlkZGVuIHx8IHRoaXMuaWdub3JlSGlkZGVuICYmIG1hcmtlci5nZXRWaXNpYmxlKCkpIHtcbiAgICAgICAgICB0aGlzLmFkZFRvQ2xvc2VzdENsdXN0ZXIobWFya2VyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChpTGFzdCA8IHRoaXMubWFya2Vycy5sZW5ndGgpIHtcbiAgICAgIHRoaXMudGltZXJSZWZTdGF0aWMgPSB3aW5kb3cuc2V0VGltZW91dCggLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBnZXRpZnkvcHJvcGVyLWFycm93cy90aGlzLCBAZ2V0aWZ5L3Byb3Blci1hcnJvd3MvbmFtZVxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpczMuY3JlYXRlQ2x1c3RlcnMoaUxhc3QpO1xuICAgICAgfSwgMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudGltZXJSZWZTdGF0aWMgPSBudWxsO1xuICAgICAgLyoqXHJcbiAgICAgICAqIFRoaXMgZXZlbnQgaXMgZmlyZWQgd2hlbiB0aGUgPGNvZGU+Q2x1c3RlcmVyPC9jb2RlPiBzdG9wc1xyXG4gICAgICAgKiAgY2x1c3RlcmluZyBtYXJrZXJzLlxyXG4gICAgICAgKiBAbmFtZSBDbHVzdGVyZXIjY2x1c3RlcmluZ2VuZFxyXG4gICAgICAgKiBAcGFyYW0ge0NsdXN0ZXJlcn0gbWMgVGhlIENsdXN0ZXJlciB3aG9zZSBtYXJrZXJzIGFyZSBiZWluZyBjbHVzdGVyZWQuXHJcbiAgICAgICAqIEBldmVudFxyXG4gICAgICAgKi9cblxuICAgICAgZ29vZ2xlLm1hcHMuZXZlbnQudHJpZ2dlcih0aGlzLCAnY2x1c3RlcmluZ2VuZCcsIHRoaXMpO1xuXG4gICAgICBmb3IgKHZhciBfaTQgPSAwOyBfaTQgPCB0aGlzLmNsdXN0ZXJzLmxlbmd0aDsgX2k0KyspIHtcbiAgICAgICAgdGhpcy5jbHVzdGVyc1tfaTRdLnVwZGF0ZUljb24oKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmV4dGVuZCA9IGZ1bmN0aW9uIGV4dGVuZChvYmoxLCBvYmoyKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIGFwcGx5RXh0ZW5kKG9iamVjdCkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGd1YXJkLWZvci1pblxuICAgICAgZm9yICh2YXIgcHJvcGVydHkgaW4gb2JqZWN0LnByb3RvdHlwZSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1pZ25vcmVcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICB0aGlzLnByb3RvdHlwZVtwcm9wZXJ0eV0gPSBvYmplY3QucHJvdG90eXBlW3Byb3BlcnR5XTtcbiAgICAgIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtaWdub3JlXG4gICAgICAvLyBAdHMtaWdub3JlXG5cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfS5hcHBseShvYmoxLCBbb2JqMl0pO1xuICB9O1xuXG4gIHJldHVybiBDbHVzdGVyZXI7XG59KCk7XG5cbmV4cG9ydCB7IENsdXN0ZXIsIENsdXN0ZXJJY29uLCBDbHVzdGVyZXIgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1hcmtlcmNsdXN0ZXJlci5lc20uanMubWFwXG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBVc2UgaW52YXJpYW50KCkgdG8gYXNzZXJ0IHN0YXRlIHdoaWNoIHlvdXIgcHJvZ3JhbSBhc3N1bWVzIHRvIGJlIHRydWUuXG4gKlxuICogUHJvdmlkZSBzcHJpbnRmLXN0eWxlIGZvcm1hdCAob25seSAlcyBpcyBzdXBwb3J0ZWQpIGFuZCBhcmd1bWVudHNcbiAqIHRvIHByb3ZpZGUgaW5mb3JtYXRpb24gYWJvdXQgd2hhdCBicm9rZSBhbmQgd2hhdCB5b3Ugd2VyZVxuICogZXhwZWN0aW5nLlxuICpcbiAqIFRoZSBpbnZhcmlhbnQgbWVzc2FnZSB3aWxsIGJlIHN0cmlwcGVkIGluIHByb2R1Y3Rpb24sIGJ1dCB0aGUgaW52YXJpYW50XG4gKiB3aWxsIHJlbWFpbiB0byBlbnN1cmUgbG9naWMgZG9lcyBub3QgZGlmZmVyIGluIHByb2R1Y3Rpb24uXG4gKi9cblxudmFyIGludmFyaWFudCA9IGZ1bmN0aW9uKGNvbmRpdGlvbiwgZm9ybWF0LCBhLCBiLCBjLCBkLCBlLCBmKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudCByZXF1aXJlcyBhbiBlcnJvciBtZXNzYWdlIGFyZ3VtZW50Jyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKCFjb25kaXRpb24pIHtcbiAgICB2YXIgZXJyb3I7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcihcbiAgICAgICAgJ01pbmlmaWVkIGV4Y2VwdGlvbiBvY2N1cnJlZDsgdXNlIHRoZSBub24tbWluaWZpZWQgZGV2IGVudmlyb25tZW50ICcgK1xuICAgICAgICAnZm9yIHRoZSBmdWxsIGVycm9yIG1lc3NhZ2UgYW5kIGFkZGl0aW9uYWwgaGVscGZ1bCB3YXJuaW5ncy4nXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgYXJncyA9IFthLCBiLCBjLCBkLCBlLCBmXTtcbiAgICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcihcbiAgICAgICAgZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJnc1thcmdJbmRleCsrXTsgfSlcbiAgICAgICk7XG4gICAgICBlcnJvci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgIH1cblxuICAgIGVycm9yLmZyYW1lc1RvUG9wID0gMTsgLy8gd2UgZG9uJ3QgY2FyZSBhYm91dCBpbnZhcmlhbnQncyBvd24gZnJhbWVcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBpbnZhcmlhbnQ7XG4iXSwic291cmNlUm9vdCI6IiJ9