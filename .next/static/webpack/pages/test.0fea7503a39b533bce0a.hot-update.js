webpackHotUpdate_N_E("pages/test",{

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
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! mapbox-gl */ "./node_modules/mapbox-gl/dist/mapbox-gl.js");
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(mapbox_gl__WEBPACK_IMPORTED_MODULE_9__);








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
        width: '40vw',
        height: '40vh',
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

      return __jsx(ReactMapGL, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
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
          lineNumber: 20,
          columnNumber: 7
        }
      }), __jsx(mapbox_gl__WEBPACK_IMPORTED_MODULE_9__["Layer"], {
        type: "symbol",
        id: "marker",
        layout: {
          "icon-image": "marker-15"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 5
        }
      }, __jsx(mapbox_gl__WEBPACK_IMPORTED_MODULE_9__["Feature"], {
        coordinates: [-0.481747846041145, 51.3233379650232],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 15
        }
      })));
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

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/get.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/superPropBase.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
false,

/***/ "./node_modules/@math.gl/web-mercator/dist/esm/assert.js":
false,

/***/ "./node_modules/@math.gl/web-mercator/dist/esm/fit-bounds.js":
false,

/***/ "./node_modules/@math.gl/web-mercator/dist/esm/fly-to-viewport.js":
false,

/***/ "./node_modules/@math.gl/web-mercator/dist/esm/get-bounds.js":
false,

/***/ "./node_modules/@math.gl/web-mercator/dist/esm/index.js":
false,

/***/ "./node_modules/@math.gl/web-mercator/dist/esm/math-utils.js":
false,

/***/ "./node_modules/@math.gl/web-mercator/dist/esm/normalize-viewport-props.js":
false,

/***/ "./node_modules/@math.gl/web-mercator/dist/esm/web-mercator-utils.js":
false,

/***/ "./node_modules/@math.gl/web-mercator/dist/esm/web-mercator-viewport.js":
false,

/***/ "./node_modules/gl-matrix/esm/common.js":
false,

/***/ "./node_modules/gl-matrix/esm/mat4.js":
false,

/***/ "./node_modules/gl-matrix/esm/vec2.js":
false,

/***/ "./node_modules/gl-matrix/esm/vec3.js":
false,

/***/ "./node_modules/gl-matrix/esm/vec4.js":
false,

/***/ "./node_modules/hammerjs/hammer.js":
false,

/***/ "./node_modules/mjolnir.js/dist/esm/constants.js":
false,

/***/ "./node_modules/mjolnir.js/dist/esm/event-manager.js":
false,

/***/ "./node_modules/mjolnir.js/dist/esm/index.js":
false,

/***/ "./node_modules/mjolnir.js/dist/esm/inputs/contextmenu-input.js":
false,

/***/ "./node_modules/mjolnir.js/dist/esm/inputs/key-input.js":
false,

/***/ "./node_modules/mjolnir.js/dist/esm/inputs/move-input.js":
false,

/***/ "./node_modules/mjolnir.js/dist/esm/inputs/wheel-input.js":
false,

/***/ "./node_modules/mjolnir.js/dist/esm/utils/event-registrar.js":
false,

/***/ "./node_modules/mjolnir.js/dist/esm/utils/event-utils.js":
false,

/***/ "./node_modules/mjolnir.js/dist/esm/utils/globals.js":
false,

/***/ "./node_modules/mjolnir.js/dist/esm/utils/hammer-overrides.js":
false,

/***/ "./node_modules/mjolnir.js/dist/esm/utils/hammer.browser.js":
false,

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
false,

/***/ "./node_modules/prop-types/index.js":
false,

/***/ "./node_modules/react-map-gl/dist/esm/components/base-control.js":
false,

/***/ "./node_modules/react-map-gl/dist/esm/components/draggable-control.js":
false,

/***/ "./node_modules/react-map-gl/dist/esm/components/fullscreen-control.js":
false,

/***/ "./node_modules/react-map-gl/dist/esm/components/geolocate-control.js":
false,

/***/ "./node_modules/react-map-gl/dist/esm/components/interactive-map.js":
false,

/***/ "./node_modules/react-map-gl/dist/esm/components/layer.js":
false,

/***/ "./node_modules/react-map-gl/dist/esm/components/map-context.js":
false,

/***/ "./node_modules/react-map-gl/dist/esm/components/marker.js":
false,

/***/ "./node_modules/react-map-gl/dist/esm/components/navigation-control.js":
false,

/***/ "./node_modules/react-map-gl/dist/esm/components/popup.js":
false,

/***/ "./node_modules/react-map-gl/dist/esm/components/scale-control.js":
false,

/***/ "./node_modules/react-map-gl/dist/esm/components/source.js":
false,

/***/ "./node_modules/react-map-gl/dist/esm/components/static-map.js":
false,

/***/ "./node_modules/react-map-gl/dist/esm/index.js":
false,

/***/ "./node_modules/react-map-gl/dist/esm/mapbox/mapbox.js":
false,

/***/ "./node_modules/react-map-gl/dist/esm/overlays/canvas-overlay.js":
false,

/***/ "./node_modules/react-map-gl/dist/esm/overlays/html-overlay.js":
false,

/***/ "./node_modules/react-map-gl/dist/esm/overlays/svg-overlay.js":
false,

/***/ "./node_modules/react-map-gl/dist/esm/utils/assert.js":
false,

/***/ "./node_modules/react-map-gl/dist/esm/utils/crisp-pixel.js":
false,

/***/ "./node_modules/react-map-gl/dist/esm/utils/debounce.js":
false,

/***/ "./node_modules/react-map-gl/dist/esm/utils/deep-equal.js":
false,

/***/ "./node_modules/react-map-gl/dist/esm/utils/deprecate-warn.js":
false,

/***/ "./node_modules/react-map-gl/dist/esm/utils/dynamic-position.js":
false,

/***/ "./node_modules/react-map-gl/dist/esm/utils/geolocate-utils.js":
false,

/***/ "./node_modules/react-map-gl/dist/esm/utils/globals.js":
false,

/***/ "./node_modules/react-map-gl/dist/esm/utils/map-constraints.js":
false,

/***/ "./node_modules/react-map-gl/dist/esm/utils/map-controller.js":
false,

/***/ "./node_modules/react-map-gl/dist/esm/utils/map-state.js":
false,

/***/ "./node_modules/react-map-gl/dist/esm/utils/mapboxgl.browser.js":
false,

/***/ "./node_modules/react-map-gl/dist/esm/utils/math-utils.js":
false,

/***/ "./node_modules/react-map-gl/dist/esm/utils/set-rtl-text-plugin.js":
false,

/***/ "./node_modules/react-map-gl/dist/esm/utils/style-utils.js":
false,

/***/ "./node_modules/react-map-gl/dist/esm/utils/transition-manager.js":
false,

/***/ "./node_modules/react-map-gl/dist/esm/utils/transition/index.js":
false,

/***/ "./node_modules/react-map-gl/dist/esm/utils/transition/linear-interpolator.js":
false,

/***/ "./node_modules/react-map-gl/dist/esm/utils/transition/transition-interpolator.js":
false,

/***/ "./node_modules/react-map-gl/dist/esm/utils/transition/transition-utils.js":
false,

/***/ "./node_modules/react-map-gl/dist/esm/utils/transition/viewport-fly-to-interpolator.js":
false,

/***/ "./node_modules/react-map-gl/dist/esm/utils/version.js":
false,

/***/ "./node_modules/react-virtualized-auto-sizer/dist/index.esm.js":
false,

/***/ "./node_modules/viewport-mercator-project/module.js":
false,

/***/ "./node_modules/webpack/buildin/global.js":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvTWFwLmpzIl0sIm5hbWVzIjpbIk1hcCIsInZpZXdwb3J0Iiwid2lkdGgiLCJoZWlnaHQiLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsInpvb20iLCJzZXRTdGF0ZSIsInN0YXRlIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0lBRU1BLEc7Ozs7Ozs7Ozs7Ozs7Ozs7Z05BQ0k7QUFDTkMsY0FBUSxFQUFFO0FBQ1JDLGFBQUssRUFBRSxNQURDO0FBRVJDLGNBQU0sRUFBRSxNQUZBO0FBR1JDLGdCQUFRLEVBQUUsU0FIRjtBQUlSQyxpQkFBUyxFQUFFLENBQUMsUUFKSjtBQUtSQyxZQUFJLEVBQUU7QUFMRTtBQURKLEs7Ozs7Ozs7NkJBWUM7QUFBQTs7QUFDUCxhQUNFLE1BQUMsVUFBRDtBQUNFLGdCQUFRLEVBQUMsaUNBRFg7QUFFRSw0QkFBb0IsRUFBQyw0RkFGdkI7QUFHRSx3QkFBZ0IsRUFBRSwwQkFBQ0wsUUFBRDtBQUFBLGlCQUFjLE1BQUksQ0FBQ00sUUFBTCxDQUFjO0FBQUVOLG9CQUFRLEVBQVJBO0FBQUYsV0FBZCxDQUFkO0FBQUE7QUFIcEIsU0FJTSxLQUFLTyxLQUFMLENBQVdQLFFBSmpCO0FBS0UsaUJBQVMsRUFBQyxLQUxaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFPRixNQUFDLCtDQUFEO0FBQ1UsWUFBSSxFQUFDLFFBRGY7QUFFVSxVQUFFLEVBQUMsUUFGYjtBQUdVLGNBQU0sRUFBRTtBQUFFLHdCQUFjO0FBQWhCLFNBSGxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FJVSxNQUFDLGlEQUFEO0FBQVMsbUJBQVcsRUFBRSxDQUFDLENBQUMsaUJBQUYsRUFBcUIsZ0JBQXJCLENBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFKVixDQVBFLENBREY7QUFnQkQ7Ozs7RUE5QmVRLCtDOztBQWlDSFQsa0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdGVzdC4wZmVhNzUwM2EzOWI1MzNiY2UwYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3RNYXBib3hHTCBmcm9tICdtYXBib3gtZ2wnO1xyXG5pbXBvcnQgUmVhY3RNYXBib3hHbCwgeyBMYXllciwgRmVhdHVyZSB9IGZyb20gXCJtYXBib3gtZ2xcIjtcclxuXHJcbmNsYXNzIE1hcCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3RhdGUgPSB7XHJcbiAgICB2aWV3cG9ydDoge1xyXG4gICAgICB3aWR0aDogJzQwdncnLFxyXG4gICAgICBoZWlnaHQ6ICc0MHZoJyxcclxuICAgICAgbGF0aXR1ZGU6IDUzLjQ3NTQzMyxcclxuICAgICAgbG9uZ2l0dWRlOiAtMi4yMzY0OTcsXHJcbiAgICAgIHpvb206IDEzLFxyXG4gICAgICBcclxuICAgIH1cclxuICB9O1xyXG5cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFJlYWN0TWFwR0xcclxuICAgICAgICBtYXBTdHlsZT1cIm1hcGJveDovL3N0eWxlcy9tYXBib3gvZGFyay12MTBcIlxyXG4gICAgICAgIG1hcGJveEFwaUFjY2Vzc1Rva2VuPVwicGsuZXlKMUlqb2liVzl6WTJGc2FYSWlMQ0poSWpvaVkydG9NbWhyZDJacU1HVnVkakp6YlhodlpESXpibUZxZFNKOS5iaVFrcFo4bG9WWElzeGhNdU5mZm9nXCJcclxuICAgICAgICBvblZpZXdwb3J0Q2hhbmdlPXsodmlld3BvcnQpID0+IHRoaXMuc2V0U3RhdGUoeyB2aWV3cG9ydCB9KX1cclxuICAgICAgICB7Li4udGhpcy5zdGF0ZS52aWV3cG9ydH1cclxuICAgICAgICBjbGFzc05hbWU9XCJtYXBcIlxyXG4gICAgICA+XHJcbiAgICA8TGF5ZXJcclxuICAgICAgICAgICAgICB0eXBlPVwic3ltYm9sXCJcclxuICAgICAgICAgICAgICBpZD1cIm1hcmtlclwiXHJcbiAgICAgICAgICAgICAgbGF5b3V0PXt7IFwiaWNvbi1pbWFnZVwiOiBcIm1hcmtlci0xNVwiIH19PlxyXG4gICAgICAgICAgICAgIDxGZWF0dXJlIGNvb3JkaW5hdGVzPXtbLTAuNDgxNzQ3ODQ2MDQxMTQ1LCA1MS4zMjMzMzc5NjUwMjMyXX0vPlxyXG4gICAgPC9MYXllcj4gICBcclxuICAgICAgPC9SZWFjdE1hcEdMPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1hcDsiXSwic291cmNlUm9vdCI6IiJ9