webpackHotUpdate_N_E("pages/test",{

/***/ "./node_modules/react-spring/renderprops.js":
/*!**************************************************!*\
  !*** ./node_modules/react-spring/renderprops.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _objectWithoutPropertiesLoose = _interopDefault(__webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"));
var _extends = _interopDefault(__webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js"));
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var React__default = _interopDefault(React);
var ReactDOM = _interopDefault(__webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"));

let bugfixes = undefined;
let applyAnimatedValues = undefined;
let colorNames = [];
let requestFrame = cb => typeof window !== 'undefined' && window.requestAnimationFrame(cb);
let cancelFrame = cb => typeof window !== 'undefined' && window.cancelAnimationFrame(cb);
let interpolation = undefined;
let now = () => Date.now();
let defaultElement = undefined;
let createAnimatedStyle = undefined;
const injectApplyAnimatedValues = (fn, transform) => applyAnimatedValues = {
  fn,
  transform
};
const injectColorNames = names => colorNames = names;
const injectBugfixes = fn => bugfixes = fn;
const injectInterpolation = cls => interpolation = cls;
const injectFrame = (raf, caf) => {
  var _ref = [raf, caf];
  requestFrame = _ref[0];
  cancelFrame = _ref[1];
  return _ref;
};
const injectNow = nowFn => now = nowFn;
const injectDefaultElement = el => defaultElement = el;
const injectCreateAnimatedStyle = factory => createAnimatedStyle = factory;

var Globals = /*#__PURE__*/Object.freeze({
  get bugfixes () { return bugfixes; },
  get applyAnimatedValues () { return applyAnimatedValues; },
  get colorNames () { return colorNames; },
  get requestFrame () { return requestFrame; },
  get cancelFrame () { return cancelFrame; },
  get interpolation () { return interpolation; },
  get now () { return now; },
  get defaultElement () { return defaultElement; },
  get createAnimatedStyle () { return createAnimatedStyle; },
  injectApplyAnimatedValues: injectApplyAnimatedValues,
  injectColorNames: injectColorNames,
  injectBugfixes: injectBugfixes,
  injectInterpolation: injectInterpolation,
  injectFrame: injectFrame,
  injectNow: injectNow,
  injectDefaultElement: injectDefaultElement,
  injectCreateAnimatedStyle: injectCreateAnimatedStyle
});

class Animated {
  attach() {}

  detach() {}

  getValue() {}

  getAnimatedValue() {
    return this.getValue();
  }

  addChild(child) {}

  removeChild(child) {}

  getChildren() {
    return [];
  }

}

const getValues = object => Object.keys(object).map(k => object[k]);

class AnimatedWithChildren extends Animated {
  constructor() {
    var _this;

    super(...arguments);
    _this = this;
    this.children = [];

    this.getChildren = () => this.children;

    this.getPayload = function (index) {
      if (index === void 0) {
        index = undefined;
      }

      return index !== void 0 && _this.payload ? _this.payload[index] : _this.payload || _this;
    };
  }

  addChild(child) {
    if (this.children.length === 0) this.attach();
    this.children.push(child);
  }

  removeChild(child) {
    const index = this.children.indexOf(child);
    this.children.splice(index, 1);
    if (this.children.length === 0) this.detach();
  }

}
class AnimatedArrayWithChildren extends AnimatedWithChildren {
  constructor() {
    super(...arguments);
    this.payload = [];

    this.getAnimatedValue = () => this.getValue();

    this.attach = () => this.payload.forEach(p => p instanceof Animated && p.addChild(this));

    this.detach = () => this.payload.forEach(p => p instanceof Animated && p.removeChild(this));
  }

}
class AnimatedObjectWithChildren extends AnimatedWithChildren {
  constructor() {
    super(...arguments);
    this.payload = {};

    this.getAnimatedValue = () => this.getValue(true);

    this.attach = () => getValues(this.payload).forEach(s => s instanceof Animated && s.addChild(this));

    this.detach = () => getValues(this.payload).forEach(s => s instanceof Animated && s.removeChild(this));
  }

  getValue(animated) {
    if (animated === void 0) {
      animated = false;
    }

    const payload = {};

    for (const key in this.payload) {
      const value = this.payload[key];
      if (animated && !(value instanceof Animated)) continue;
      payload[key] = value instanceof Animated ? value[animated ? 'getAnimatedValue' : 'getValue']() : value;
    }

    return payload;
  }

}

class AnimatedStyle extends AnimatedObjectWithChildren {
  constructor(style) {
    super();
    style = style || {};
    if (style.transform && !(style.transform instanceof Animated)) style = applyAnimatedValues.transform(style);
    this.payload = style;
  }

}

// http://www.w3.org/TR/css3-color/#svg-color
const colors = {
  transparent: 0x00000000,
  aliceblue: 0xf0f8ffff,
  antiquewhite: 0xfaebd7ff,
  aqua: 0x00ffffff,
  aquamarine: 0x7fffd4ff,
  azure: 0xf0ffffff,
  beige: 0xf5f5dcff,
  bisque: 0xffe4c4ff,
  black: 0x000000ff,
  blanchedalmond: 0xffebcdff,
  blue: 0x0000ffff,
  blueviolet: 0x8a2be2ff,
  brown: 0xa52a2aff,
  burlywood: 0xdeb887ff,
  burntsienna: 0xea7e5dff,
  cadetblue: 0x5f9ea0ff,
  chartreuse: 0x7fff00ff,
  chocolate: 0xd2691eff,
  coral: 0xff7f50ff,
  cornflowerblue: 0x6495edff,
  cornsilk: 0xfff8dcff,
  crimson: 0xdc143cff,
  cyan: 0x00ffffff,
  darkblue: 0x00008bff,
  darkcyan: 0x008b8bff,
  darkgoldenrod: 0xb8860bff,
  darkgray: 0xa9a9a9ff,
  darkgreen: 0x006400ff,
  darkgrey: 0xa9a9a9ff,
  darkkhaki: 0xbdb76bff,
  darkmagenta: 0x8b008bff,
  darkolivegreen: 0x556b2fff,
  darkorange: 0xff8c00ff,
  darkorchid: 0x9932ccff,
  darkred: 0x8b0000ff,
  darksalmon: 0xe9967aff,
  darkseagreen: 0x8fbc8fff,
  darkslateblue: 0x483d8bff,
  darkslategray: 0x2f4f4fff,
  darkslategrey: 0x2f4f4fff,
  darkturquoise: 0x00ced1ff,
  darkviolet: 0x9400d3ff,
  deeppink: 0xff1493ff,
  deepskyblue: 0x00bfffff,
  dimgray: 0x696969ff,
  dimgrey: 0x696969ff,
  dodgerblue: 0x1e90ffff,
  firebrick: 0xb22222ff,
  floralwhite: 0xfffaf0ff,
  forestgreen: 0x228b22ff,
  fuchsia: 0xff00ffff,
  gainsboro: 0xdcdcdcff,
  ghostwhite: 0xf8f8ffff,
  gold: 0xffd700ff,
  goldenrod: 0xdaa520ff,
  gray: 0x808080ff,
  green: 0x008000ff,
  greenyellow: 0xadff2fff,
  grey: 0x808080ff,
  honeydew: 0xf0fff0ff,
  hotpink: 0xff69b4ff,
  indianred: 0xcd5c5cff,
  indigo: 0x4b0082ff,
  ivory: 0xfffff0ff,
  khaki: 0xf0e68cff,
  lavender: 0xe6e6faff,
  lavenderblush: 0xfff0f5ff,
  lawngreen: 0x7cfc00ff,
  lemonchiffon: 0xfffacdff,
  lightblue: 0xadd8e6ff,
  lightcoral: 0xf08080ff,
  lightcyan: 0xe0ffffff,
  lightgoldenrodyellow: 0xfafad2ff,
  lightgray: 0xd3d3d3ff,
  lightgreen: 0x90ee90ff,
  lightgrey: 0xd3d3d3ff,
  lightpink: 0xffb6c1ff,
  lightsalmon: 0xffa07aff,
  lightseagreen: 0x20b2aaff,
  lightskyblue: 0x87cefaff,
  lightslategray: 0x778899ff,
  lightslategrey: 0x778899ff,
  lightsteelblue: 0xb0c4deff,
  lightyellow: 0xffffe0ff,
  lime: 0x00ff00ff,
  limegreen: 0x32cd32ff,
  linen: 0xfaf0e6ff,
  magenta: 0xff00ffff,
  maroon: 0x800000ff,
  mediumaquamarine: 0x66cdaaff,
  mediumblue: 0x0000cdff,
  mediumorchid: 0xba55d3ff,
  mediumpurple: 0x9370dbff,
  mediumseagreen: 0x3cb371ff,
  mediumslateblue: 0x7b68eeff,
  mediumspringgreen: 0x00fa9aff,
  mediumturquoise: 0x48d1ccff,
  mediumvioletred: 0xc71585ff,
  midnightblue: 0x191970ff,
  mintcream: 0xf5fffaff,
  mistyrose: 0xffe4e1ff,
  moccasin: 0xffe4b5ff,
  navajowhite: 0xffdeadff,
  navy: 0x000080ff,
  oldlace: 0xfdf5e6ff,
  olive: 0x808000ff,
  olivedrab: 0x6b8e23ff,
  orange: 0xffa500ff,
  orangered: 0xff4500ff,
  orchid: 0xda70d6ff,
  palegoldenrod: 0xeee8aaff,
  palegreen: 0x98fb98ff,
  paleturquoise: 0xafeeeeff,
  palevioletred: 0xdb7093ff,
  papayawhip: 0xffefd5ff,
  peachpuff: 0xffdab9ff,
  peru: 0xcd853fff,
  pink: 0xffc0cbff,
  plum: 0xdda0ddff,
  powderblue: 0xb0e0e6ff,
  purple: 0x800080ff,
  rebeccapurple: 0x663399ff,
  red: 0xff0000ff,
  rosybrown: 0xbc8f8fff,
  royalblue: 0x4169e1ff,
  saddlebrown: 0x8b4513ff,
  salmon: 0xfa8072ff,
  sandybrown: 0xf4a460ff,
  seagreen: 0x2e8b57ff,
  seashell: 0xfff5eeff,
  sienna: 0xa0522dff,
  silver: 0xc0c0c0ff,
  skyblue: 0x87ceebff,
  slateblue: 0x6a5acdff,
  slategray: 0x708090ff,
  slategrey: 0x708090ff,
  snow: 0xfffafaff,
  springgreen: 0x00ff7fff,
  steelblue: 0x4682b4ff,
  tan: 0xd2b48cff,
  teal: 0x008080ff,
  thistle: 0xd8bfd8ff,
  tomato: 0xff6347ff,
  turquoise: 0x40e0d0ff,
  violet: 0xee82eeff,
  wheat: 0xf5deb3ff,
  white: 0xffffffff,
  whitesmoke: 0xf5f5f5ff,
  yellow: 0xffff00ff,
  yellowgreen: 0x9acd32ff
};

class Interpolation {
  // Default config = config, args
  // Short config   = range, output, extrapolate
  static create(config, output, extra) {
    if (typeof config === 'function') return config;else if (interpolation && config.output && typeof config.output[0] === 'string') return interpolation(config);else if (Array.isArray(config)) return Interpolation.create({
      range: config,
      output,
      extrapolate: extra || 'extend'
    });
    let outputRange = config.output;
    let inputRange = config.range || [0, 1];

    let easing = config.easing || (t => t);

    let extrapolateLeft = 'extend';
    let map = config.map;
    if (config.extrapolateLeft !== undefined) extrapolateLeft = config.extrapolateLeft;else if (config.extrapolate !== undefined) extrapolateLeft = config.extrapolate;
    let extrapolateRight = 'extend';
    if (config.extrapolateRight !== undefined) extrapolateRight = config.extrapolateRight;else if (config.extrapolate !== undefined) extrapolateRight = config.extrapolate;
    return input => {
      let range = findRange(input, inputRange);
      return interpolate(input, inputRange[range], inputRange[range + 1], outputRange[range], outputRange[range + 1], easing, extrapolateLeft, extrapolateRight, map);
    };
  }

}

function interpolate(input, inputMin, inputMax, outputMin, outputMax, easing, extrapolateLeft, extrapolateRight, map) {
  let result = map ? map(input) : input; // Extrapolate

  if (result < inputMin) {
    if (extrapolateLeft === 'identity') return result;else if (extrapolateLeft === 'clamp') result = inputMin;
  }

  if (result > inputMax) {
    if (extrapolateRight === 'identity') return result;else if (extrapolateRight === 'clamp') result = inputMax;
  }

  if (outputMin === outputMax) return outputMin;
  if (inputMin === inputMax) return input <= inputMin ? outputMin : outputMax; // Input Range

  if (inputMin === -Infinity) result = -result;else if (inputMax === Infinity) result = result - inputMin;else result = (result - inputMin) / (inputMax - inputMin); // Easing

  result = easing(result); // Output Range

  if (outputMin === -Infinity) result = -result;else if (outputMax === Infinity) result = result + outputMin;else result = result * (outputMax - outputMin) + outputMin;
  return result;
}

function findRange(input, inputRange) {
  for (var i = 1; i < inputRange.length - 1; ++i) if (inputRange[i] >= input) break;

  return i - 1;
}

// const INTEGER = '[-+]?\\d+';
const NUMBER = '[-+]?\\d*\\.?\\d+';
const PERCENTAGE = NUMBER + '%';

function call() {
  return '\\(\\s*(' + Array.prototype.slice.call(arguments).join(')\\s*,\\s*(') + ')\\s*\\)';
}

const rgb = new RegExp('rgb' + call(NUMBER, NUMBER, NUMBER));
const rgba = new RegExp('rgba' + call(NUMBER, NUMBER, NUMBER, NUMBER));
const hsl = new RegExp('hsl' + call(NUMBER, PERCENTAGE, PERCENTAGE));
const hsla = new RegExp('hsla' + call(NUMBER, PERCENTAGE, PERCENTAGE, NUMBER));
const hex3 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
const hex4 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
const hex6 = /^#([0-9a-fA-F]{6})$/;
const hex8 = /^#([0-9a-fA-F]{8})$/;

/*
https://github.com/react-community/normalize-css-color

BSD 3-Clause License

Copyright (c) 2016, React Community
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this
  list of conditions and the following disclaimer.

* Redistributions in binary form must reproduce the above copyright notice,
  this list of conditions and the following disclaimer in the documentation
  and/or other materials provided with the distribution.

* Neither the name of the copyright holder nor the names of its
  contributors may be used to endorse or promote products derived from
  this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
function normalizeColor(color) {
  let match;

  if (typeof color === 'number') {
    return color >>> 0 === color && color >= 0 && color <= 0xffffffff ? color : null;
  } // Ordered based on occurrences on Facebook codebase


  if (match = hex6.exec(color)) return parseInt(match[1] + 'ff', 16) >>> 0;
  if (colors.hasOwnProperty(color)) return colors[color];

  if (match = rgb.exec(color)) {
    return (parse255(match[1]) << 24 | // r
    parse255(match[2]) << 16 | // g
    parse255(match[3]) << 8 | // b
    0x000000ff) >>> // a
    0;
  }

  if (match = rgba.exec(color)) {
    return (parse255(match[1]) << 24 | // r
    parse255(match[2]) << 16 | // g
    parse255(match[3]) << 8 | // b
    parse1(match[4])) >>> // a
    0;
  }

  if (match = hex3.exec(color)) {
    return parseInt(match[1] + match[1] + // r
    match[2] + match[2] + // g
    match[3] + match[3] + // b
    'ff', // a
    16) >>> 0;
  } // https://drafts.csswg.org/css-color-4/#hex-notation


  if (match = hex8.exec(color)) return parseInt(match[1], 16) >>> 0;

  if (match = hex4.exec(color)) {
    return parseInt(match[1] + match[1] + // r
    match[2] + match[2] + // g
    match[3] + match[3] + // b
    match[4] + match[4], // a
    16) >>> 0;
  }

  if (match = hsl.exec(color)) {
    return (hslToRgb(parse360(match[1]), // h
    parsePercentage(match[2]), // s
    parsePercentage(match[3]) // l
    ) | 0x000000ff) >>> // a
    0;
  }

  if (match = hsla.exec(color)) {
    return (hslToRgb(parse360(match[1]), // h
    parsePercentage(match[2]), // s
    parsePercentage(match[3]) // l
    ) | parse1(match[4])) >>> // a
    0;
  }

  return null;
}

function hue2rgb(p, q, t) {
  if (t < 0) t += 1;
  if (t > 1) t -= 1;
  if (t < 1 / 6) return p + (q - p) * 6 * t;
  if (t < 1 / 2) return q;
  if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
  return p;
}

function hslToRgb(h, s, l) {
  const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  const p = 2 * l - q;
  const r = hue2rgb(p, q, h + 1 / 3);
  const g = hue2rgb(p, q, h);
  const b = hue2rgb(p, q, h - 1 / 3);
  return Math.round(r * 255) << 24 | Math.round(g * 255) << 16 | Math.round(b * 255) << 8;
}

function parse255(str) {
  const int = parseInt(str, 10);
  if (int < 0) return 0;
  if (int > 255) return 255;
  return int;
}

function parse360(str) {
  const int = parseFloat(str);
  return (int % 360 + 360) % 360 / 360;
}

function parse1(str) {
  const num = parseFloat(str);
  if (num < 0) return 0;
  if (num > 1) return 255;
  return Math.round(num * 255);
}

function parsePercentage(str) {
  // parseFloat conveniently ignores the final %
  const int = parseFloat(str);
  if (int < 0) return 0;
  if (int > 100) return 1;
  return int / 100;
}

function colorToRgba(input) {
  let int32Color = normalizeColor(input);
  if (int32Color === null) return input;
  int32Color = int32Color || 0;
  let r = (int32Color & 0xff000000) >>> 24;
  let g = (int32Color & 0x00ff0000) >>> 16;
  let b = (int32Color & 0x0000ff00) >>> 8;
  let a = (int32Color & 0x000000ff) / 255;
  return `rgba(${r}, ${g}, ${b}, ${a})`;
} // Problem: https://github.com/animatedjs/animated/pull/102
// Solution: https://stackoverflow.com/questions/638565/parsing-scientific-notation-sensibly/658662


const stringShapeRegex = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g; // Covers rgb, rgba, hsl, hsla
// Taken from https://gist.github.com/olmokramer/82ccce673f86db7cda5e

const colorRegex = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi; // Covers color names (transparent, blue, etc.)

const colorNamesRegex = new RegExp(`(${Object.keys(colors).join('|')})`, 'g');
/**
 * Supports string shapes by extracting numbers so new values can be computed,
 * and recombines those values into new strings of the same shape.  Supports
 * things like:
 *
 *   rgba(123, 42, 99, 0.36)           // colors
 *   -45deg                            // values with units
 *   0 2px 2px 0px rgba(0, 0, 0, 0.12) // box shadows
 */

function createInterpolation(config) {
  // Replace colors with rgba
  const outputRange = config.output.map(rangeValue => rangeValue.replace(colorRegex, colorToRgba)).map(rangeValue => rangeValue.replace(colorNamesRegex, colorToRgba)); // ->
  // [
  //   [0, 50],
  //   [100, 150],
  //   [200, 250],
  //   [0, 0.5],
  // ]

  const outputRanges = outputRange[0].match(stringShapeRegex).map(() => []);
  outputRange.forEach(value => {
    value.match(stringShapeRegex).forEach((number, i) => outputRanges[i].push(+number));
  });
  const interpolations = outputRange[0].match(stringShapeRegex).map((value, i) => {
    return Interpolation.create(_extends({}, config, {
      output: outputRanges[i]
    }));
  });
  return input => {
    let i = 0;
    return outputRange[0] // 'rgba(0, 100, 200, 0)'
    // ->
    // 'rgba(${interpolations[0](input)}, ${interpolations[1](input)}, ...'
    .replace(stringShapeRegex, () => interpolations[i++](input)) // rgba requires that the r,g,b are integers.... so we want to round them, but we *dont* want to
    // round the opacity (4th column).
    .replace(/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi, (_, p1, p2, p3, p4) => `rgba(${Math.round(p1)}, ${Math.round(p2)}, ${Math.round(p3)}, ${p4})`);
  };
}

class AnimatedInterpolation extends AnimatedArrayWithChildren {
  constructor(parents, _config, _arg) {
    super();

    this.getValue = () => this.calc(...this.payload.map(value => value.getValue()));

    this.updateConfig = (config, arg) => this.calc = Interpolation.create(config, arg);

    this.interpolate = (config, arg) => new AnimatedInterpolation(this, config, arg);

    this.payload = // AnimatedArrays should unfold, except AnimatedInterpolation which is taken as is
    parents instanceof AnimatedArrayWithChildren && !parents.updateConfig ? parents.payload : Array.isArray(parents) ? parents : [parents];
    this.calc = Interpolation.create(_config, _arg);
  }

}
const interpolate$1 = (parents, config, arg) => parents && new AnimatedInterpolation(parents, config, arg);

/**
 * Animated works by building a directed acyclic graph of dependencies
 * transparently when you render your Animated components.
 *
 *               new Animated.Value(0)
 *     .interpolate()        .interpolate()    new Animated.Value(1)
 *         opacity               translateY      scale
 *          style                         transform
 *         View#234                         style
 *                                         View#123
 *
 * A) Top Down phase
 * When an Animated.Value is updated, we recursively go down through this
 * graph in order to find leaf nodes: the views that we flag as needing
 * an update.
 *
 * B) Bottom Up phase
 * When a view is flagged as needing an update, we recursively go back up
 * in order to build the new value that it needs. The reason why we need
 * this two-phases process is to deal with composite props such as
 * transform which can receive values from multiple parents.
 */

function findAnimatedStyles(node, styles) {
  if (typeof node.update === 'function') styles.add(node);else node.getChildren().forEach(child => findAnimatedStyles(child, styles));
}
/**
 * Standard value for driving animations.  One `Animated.Value` can drive
 * multiple properties in a synchronized fashion, but can only be driven by one
 * mechanism at a time.  Using a new mechanism (e.g. starting a new animation,
 * or calling `setValue`) will stop any previous ones.
 */


class AnimatedValue extends AnimatedWithChildren {
  constructor(_value) {
    var _this;

    super();
    _this = this;

    this.setValue = function (value, flush) {
      if (flush === void 0) {
        flush = true;
      }

      _this.value = value;
      if (flush) _this.flush();
    };

    this.getValue = () => this.value;

    this.updateStyles = () => findAnimatedStyles(this, this.animatedStyles);

    this.updateValue = value => this.flush(this.value = value);

    this.interpolate = (config, arg) => new AnimatedInterpolation(this, config, arg);

    this.value = _value;
    this.animatedStyles = new Set();
    this.done = false;
    this.startPosition = _value;
    this.lastPosition = _value;
    this.lastVelocity = undefined;
    this.lastTime = undefined;
    this.controller = undefined;
  }

  flush() {
    if (this.animatedStyles.size === 0) this.updateStyles();
    this.animatedStyles.forEach(animatedStyle => animatedStyle.update());
  }

  prepare(controller) {
    // Values stay loyal to their original controller, this is also a way to
    // detect trailing values originating from a foreign controller
    if (this.controller === undefined) this.controller = controller;

    if (this.controller === controller) {
      this.startPosition = this.value;
      this.lastPosition = this.value;
      this.lastVelocity = controller.isActive ? this.lastVelocity : undefined;
      this.lastTime = controller.isActive ? this.lastTime : undefined;
      this.done = false;
      this.animatedStyles.clear();
    }
  }

}

class AnimatedArray extends AnimatedArrayWithChildren {
  constructor(array) {
    var _this;

    super();
    _this = this;

    this.setValue = function (value, flush) {
      if (flush === void 0) {
        flush = true;
      }

      if (Array.isArray(value)) {
        if (value.length === _this.payload.length) value.forEach((v, i) => _this.payload[i].setValue(v, flush));
      } else _this.payload.forEach((v, i) => _this.payload[i].setValue(value, flush));
    };

    this.getValue = () => this.payload.map(v => v.getValue());

    this.interpolate = (config, arg) => new AnimatedInterpolation(this, config, arg);

    this.payload = array.map(n => new AnimatedValue(n));
  }

}

function withDefault(value, defaultValue) {
  return value === undefined || value === null ? defaultValue : value;
}
function toArray(a) {
  return a !== void 0 ? Array.isArray(a) ? a : [a] : [];
}
function shallowEqual(a, b) {
  if (typeof a !== typeof b) return false;
  if (typeof a === 'string' || typeof a === 'number') return a === b;
  let i;

  for (i in a) if (!(i in b)) return false;

  for (i in b) if (a[i] !== b[i]) return false;

  return i === void 0 ? a === b : true;
}
function callProp(obj) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return typeof obj === 'function' ? obj(...args) : obj;
}
function getValues$1(object) {
  return Object.keys(object).map(k => object[k]);
}
function getForwardProps(props) {
  const to = props.to,
        from = props.from,
        config = props.config,
        native = props.native,
        onStart = props.onStart,
        onRest = props.onRest,
        onFrame = props.onFrame,
        children = props.children,
        reset = props.reset,
        reverse = props.reverse,
        force = props.force,
        immediate = props.immediate,
        impl = props.impl,
        inject = props.inject,
        delay = props.delay,
        attach = props.attach,
        destroyed = props.destroyed,
        interpolateTo = props.interpolateTo,
        autoStart = props.autoStart,
        ref = props.ref,
        forward = _objectWithoutPropertiesLoose(props, ["to", "from", "config", "native", "onStart", "onRest", "onFrame", "children", "reset", "reverse", "force", "immediate", "impl", "inject", "delay", "attach", "destroyed", "interpolateTo", "autoStart", "ref"]);

  return forward;
}
function interpolateTo(props) {
  const forward = getForwardProps(props);
  const rest = Object.keys(props).reduce((a, k) => forward[k] !== void 0 ? a : _extends({}, a, {
    [k]: props[k]
  }), {});
  return _extends({
    to: forward
  }, rest);
}
function convertToAnimatedValue(acc, _ref) {
  let name = _ref[0],
      value = _ref[1];
  return _extends({}, acc, {
    [name]: new (Array.isArray(value) ? AnimatedArray : AnimatedValue)(value)
  });
}
function convertValues(props) {
  const from = props.from,
        to = props.to,
        native = props.native;
  const allProps = Object.entries(_extends({}, from, to));
  return native ? allProps.reduce(convertToAnimatedValue, {}) : _extends({}, from, to);
}
function handleRef(ref, forward) {
  if (forward) {
    // If it's a function, assume it's a ref callback
    if (typeof forward === 'function') forward(ref);else if (typeof forward === 'object') {
      // If it's an object and has a 'current' property, assume it's a ref object
      forward.current = ref;
    }
  }

  return ref;
}

const check = value => value === 'auto';

const overwrite = (width, height) => (acc, _ref) => {
  let name = _ref[0],
      value = _ref[1];
  return _extends({}, acc, {
    [name]: value === 'auto' ? ~name.indexOf('height') ? height : width : value
  });
};

function fixAuto(props, callback) {
  const from = props.from,
        to = props.to,
        children = props.children; // Dry-route props back if nothing's using 'auto' in there
  // TODO: deal with "null"

  if (!(getValues$1(to).some(check) || getValues$1(from).some(check))) return; // Fetch render v-dom

  let element = children(convertValues(props)); // A spring can return undefined/null, check against that (#153)

  if (!element) return; // Or it could be an array (#346) ...

  if (Array.isArray(element)) element = {
    type: 'div',
    props: {
      children: element
    } // Extract styles

  };
  const elementStyles = element.props.style; // Return v.dom with injected ref

  return React__default.createElement(element.type, _extends({
    key: element.key ? element.key : undefined
  }, element.props, {
    style: _extends({}, elementStyles, {
      position: 'absolute',
      visibility: 'hidden'
    }),
    ref: _ref2 => {
      if (_ref2) {
        // Once it's rendered out, fetch bounds (minus padding/margin/borders)
        let node = ReactDOM.findDOMNode(_ref2);
        let width, height;
        let cs = getComputedStyle(node);

        if (cs.boxSizing === 'border-box') {
          width = node.offsetWidth;
          height = node.offsetHeight;
        } else {
          const paddingX = parseFloat(cs.paddingLeft || 0) + parseFloat(cs.paddingRight || 0);
          const paddingY = parseFloat(cs.paddingTop || 0) + parseFloat(cs.paddingBottom || 0);
          const borderX = parseFloat(cs.borderLeftWidth || 0) + parseFloat(cs.borderRightWidth || 0);
          const borderY = parseFloat(cs.borderTopWidth || 0) + parseFloat(cs.borderBottomWidth || 0);
          width = node.offsetWidth - paddingX - borderX;
          height = node.offsetHeight - paddingY - borderY;
        }

        const convert = overwrite(width, height);
        callback(_extends({}, props, {
          from: Object.entries(from).reduce(convert, from),
          to: Object.entries(to).reduce(convert, to)
        }));
      }
    }
  }));
}

let isUnitlessNumber = {
  animationIterationCount: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  // SVG-related properties
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
};

const prefixKey = (prefix, key) => prefix + key.charAt(0).toUpperCase() + key.substring(1);

const prefixes = ['Webkit', 'Ms', 'Moz', 'O'];
isUnitlessNumber = Object.keys(isUnitlessNumber).reduce((acc, prop) => {
  prefixes.forEach(prefix => acc[prefixKey(prefix, prop)] = acc[prop]);
  return acc;
}, isUnitlessNumber);

function dangerousStyleValue(name, value, isCustomProperty) {
  if (value == null || typeof value === 'boolean' || value === '') return '';
  if (!isCustomProperty && typeof value === 'number' && value !== 0 && !(isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name])) return value + 'px'; // Presumes implicit 'px' suffix for unitless numbers

  return ('' + value).trim();
}

const attributeCache = {};
injectCreateAnimatedStyle(style => new AnimatedStyle(style));
injectDefaultElement('div');
injectInterpolation(createInterpolation);
injectColorNames(colors);
injectBugfixes(fixAuto);
injectApplyAnimatedValues((instance, props) => {
  if (instance.nodeType && instance.setAttribute !== undefined) {
    const style = props.style,
          children = props.children,
          scrollTop = props.scrollTop,
          scrollLeft = props.scrollLeft,
          attributes = _objectWithoutPropertiesLoose(props, ["style", "children", "scrollTop", "scrollLeft"]);

    if (scrollTop !== void 0) instance.scrollTop = scrollTop;
    if (scrollLeft !== void 0) instance.scrollLeft = scrollLeft; // Set textContent, if children is an animatable value

    if (children !== void 0) instance.textContent = children; // Set styles ...

    for (let styleName in style) {
      if (!style.hasOwnProperty(styleName)) continue;
      var isCustomProperty = styleName.indexOf('--') === 0;
      var styleValue = dangerousStyleValue(styleName, style[styleName], isCustomProperty);
      if (styleName === 'float') styleName = 'cssFloat';
      if (isCustomProperty) instance.style.setProperty(styleName, styleValue);else instance.style[styleName] = styleValue;
    } // Set attributes ...


    for (let name in attributes) {
      // Attributes are written in dash case
      const dashCase = attributeCache[name] || (attributeCache[name] = name.replace(/([A-Z])/g, n => '-' + n.toLowerCase()));
      if (typeof instance.getAttribute(dashCase) !== 'undefined') instance.setAttribute(dashCase, attributes[name]);
    }
  } else return false;
}, style => style);

let active = false;
const controllers = new Set();

const frameLoop = () => {
  let time = now();

  for (let controller of controllers) {
    let isDone = true;
    let noChange = true;

    for (let configIdx = 0; configIdx < controller.configs.length; configIdx++) {
      let config = controller.configs[configIdx];
      let endOfAnimation, lastTime;

      for (let valIdx = 0; valIdx < config.animatedValues.length; valIdx++) {
        let animation = config.animatedValues[valIdx]; // If an animation is done, skip, until all of them conclude

        if (animation.done) continue;
        let from = config.fromValues[valIdx];
        let to = config.toValues[valIdx];
        let position = animation.lastPosition;
        let isAnimated = to instanceof Animated;
        let velocity = Array.isArray(config.initialVelocity) ? config.initialVelocity[valIdx] : config.initialVelocity;
        if (isAnimated) to = to.getValue(); // Conclude animation if it's either immediate, or from-values match end-state

        if (config.immediate || !isAnimated && !config.decay && from === to) {
          animation.updateValue(to);
          animation.done = true;
          continue;
        } // Doing delay here instead of setTimeout is one async worry less


        if (config.delay && time - controller.startTime < config.delay) {
          isDone = false;
          continue;
        } // Flag change


        noChange = false; // Break animation when string values are involved

        if (typeof from === 'string' || typeof to === 'string') {
          animation.updateValue(to);
          animation.done = true;
          continue;
        }

        if (config.duration !== void 0) {
          /** Duration easing */
          position = from + config.easing((time - controller.startTime - config.delay) / config.duration) * (to - from);
          endOfAnimation = time >= controller.startTime + config.delay + config.duration;
        } else if (config.decay) {
          /** Decay easing */
          position = from + velocity / (1 - 0.998) * (1 - Math.exp(-(1 - 0.998) * (time - controller.startTime)));
          endOfAnimation = Math.abs(animation.lastPosition - position) < 0.1;
          if (endOfAnimation) to = position;
        } else {
          /** Spring easing */
          lastTime = animation.lastTime !== void 0 ? animation.lastTime : time;
          velocity = animation.lastVelocity !== void 0 ? animation.lastVelocity : config.initialVelocity; // If we lost a lot of frames just jump to the end.

          if (time > lastTime + 64) lastTime = time; // http://gafferongames.com/game-physics/fix-your-timestep/

          let numSteps = Math.floor(time - lastTime);

          for (let i = 0; i < numSteps; ++i) {
            let force = -config.tension * (position - to);
            let damping = -config.friction * velocity;
            let acceleration = (force + damping) / config.mass;
            velocity = velocity + acceleration * 1 / 1000;
            position = position + velocity * 1 / 1000;
          } // Conditions for stopping the spring animation


          let isOvershooting = config.clamp && config.tension !== 0 ? from < to ? position > to : position < to : false;
          let isVelocity = Math.abs(velocity) <= config.precision;
          let isDisplacement = config.tension !== 0 ? Math.abs(to - position) <= config.precision : true;
          endOfAnimation = isOvershooting || isVelocity && isDisplacement;
          animation.lastVelocity = velocity;
          animation.lastTime = time;
        } // Trails aren't done until their parents conclude


        if (isAnimated && !config.toValues[valIdx].done) endOfAnimation = false;

        if (endOfAnimation) {
          // Ensure that we end up with a round value
          if (animation.value !== to) position = to;
          animation.done = true;
        } else isDone = false;

        animation.updateValue(position);
        animation.lastPosition = position;
      } // Keep track of updated values only when necessary


      if (controller.props.onFrame || !controller.props.native) controller.animatedProps[config.name] = config.interpolation.getValue();
    } // Update callbacks in the end of the frame


    if (controller.props.onFrame || !controller.props.native) {
      if (!controller.props.native && controller.onUpdate) controller.onUpdate();
      if (controller.props.onFrame) controller.props.onFrame(controller.animatedProps);
    } // Either call onEnd or next frame


    if (isDone) {
      controllers.delete(controller);
      controller.debouncedOnEnd({
        finished: true,
        noChange
      });
    }
  } // Loop over as long as there are controllers ...


  if (controllers.size) requestFrame(frameLoop);else active = false;
};

const addController = controller => {
  if (!controllers.has(controller)) {
    controllers.add(controller);
    if (!active) requestFrame(frameLoop);
    active = true;
  }
};

const removeController = controller => {
  if (controllers.has(controller)) {
    controllers.delete(controller);
  }
};

class Controller {
  constructor(props, config) {
    if (config === void 0) {
      config = {
        native: true,
        interpolateTo: true,
        autoStart: true
      };
    }

    this.getValues = () => this.props.native ? this.interpolations : this.animatedProps;

    this.dependents = new Set();
    this.isActive = false;
    this.hasChanged = false;
    this.props = {};
    this.merged = {};
    this.animations = {};
    this.interpolations = {};
    this.animatedProps = {};
    this.configs = [];
    this.frame = undefined;
    this.startTime = undefined;
    this.lastTime = undefined;
    this.update(_extends({}, props, config));
  }

  update(props) {
    this.props = _extends({}, this.props, props);

    let _ref = this.props.interpolateTo ? interpolateTo(this.props) : this.props,
        _ref$from = _ref.from,
        from = _ref$from === void 0 ? {} : _ref$from,
        _ref$to = _ref.to,
        to = _ref$to === void 0 ? {} : _ref$to,
        _ref$config = _ref.config,
        config = _ref$config === void 0 ? {} : _ref$config,
        _ref$delay = _ref.delay,
        delay = _ref$delay === void 0 ? 0 : _ref$delay,
        reverse = _ref.reverse,
        attach = _ref.attach,
        reset = _ref.reset,
        immediate = _ref.immediate,
        autoStart = _ref.autoStart,
        ref = _ref.ref; // Reverse values when requested


    if (reverse) {
      var _ref2 = [to, from];
      from = _ref2[0];
      to = _ref2[1];
    }

    this.hasChanged = false; // Attachment handling, trailed springs can "attach" themselves to a previous spring

    let target = attach && attach(this); // Reset merged props when necessary

    let extra = reset ? {} : this.merged; // This will collect all props that were ever set

    this.merged = _extends({}, from, extra, to); // Reduces input { name: value } pairs into animated values

    this.animations = Object.entries(this.merged).reduce((acc, _ref3, i) => {
      let name = _ref3[0],
          value = _ref3[1];
      // Issue cached entries, except on reset
      let entry = !reset && acc[name] || {}; // Figure out what the value is supposed to be

      const isNumber = typeof value === 'number';
      const isString = typeof value === 'string' && !value.startsWith('#') && !/\d/.test(value) && !colorNames[value];
      const isArray = !isNumber && !isString && Array.isArray(value);
      let fromValue = from[name] !== undefined ? from[name] : value;
      let toValue = isNumber || isArray ? value : isString ? value : 1;
      let toConfig = callProp(config, name);
      if (target) toValue = target.animations[name].parent; // Detect changes, animated values will be checked in the raf-loop

      if (toConfig.decay !== void 0 || !shallowEqual(entry.changes, value)) {
        this.hasChanged = true;
        let parent, interpolation$$1;
        if (isNumber || isString) parent = interpolation$$1 = entry.parent || new AnimatedValue(fromValue);else if (isArray) parent = interpolation$$1 = entry.parent || new AnimatedArray(fromValue);else {
          const prev = entry.interpolation && entry.interpolation.calc(entry.parent.value);

          if (entry.parent) {
            parent = entry.parent;
            parent.setValue(0, false);
          } else parent = new AnimatedValue(0);

          const range = {
            output: [prev !== void 0 ? prev : fromValue, value]
          };

          if (entry.interpolation) {
            interpolation$$1 = entry.interpolation;
            entry.interpolation.updateConfig(range);
          } else interpolation$$1 = parent.interpolate(range);
        } // Set immediate values

        if (callProp(immediate, name)) parent.setValue(value, false); // Reset animated values

        const animatedValues = toArray(parent.getPayload());
        animatedValues.forEach(value => value.prepare(this));
        return _extends({}, acc, {
          [name]: _extends({}, entry, {
            name,
            parent,
            interpolation: interpolation$$1,
            animatedValues,
            changes: value,
            fromValues: toArray(parent.getValue()),
            toValues: toArray(target ? toValue.getPayload() : toValue),
            immediate: callProp(immediate, name),
            delay: withDefault(toConfig.delay, delay || 0),
            initialVelocity: withDefault(toConfig.velocity, 0),
            clamp: withDefault(toConfig.clamp, false),
            precision: withDefault(toConfig.precision, 0.01),
            tension: withDefault(toConfig.tension, 170),
            friction: withDefault(toConfig.friction, 26),
            mass: withDefault(toConfig.mass, 1),
            duration: toConfig.duration,
            easing: withDefault(toConfig.easing, t => t),
            decay: toConfig.decay
          })
        });
      } else return acc;
    }, this.animations);

    if (this.hasChanged) {
      this.configs = getValues$1(this.animations);
      this.animatedProps = {};
      this.interpolations = {};

      for (let key in this.animations) {
        this.interpolations[key] = this.animations[key].interpolation;
        this.animatedProps[key] = this.animations[key].interpolation.getValue();
      }
    } // TODO: clean up ref in controller


    for (var _len = arguments.length, start = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      start[_key - 1] = arguments[_key];
    }

    if (!ref && (autoStart || start.length)) this.start(...start);
    const onEnd = start[0],
          onUpdate = start[1];
    this.onEnd = typeof onEnd === 'function' && onEnd;
    this.onUpdate = onUpdate;
    return this.getValues();
  }

  start(onEnd, onUpdate) {
    this.startTime = now();
    if (this.isActive) this.stop();
    this.isActive = true;
    this.onEnd = typeof onEnd === 'function' && onEnd;
    this.onUpdate = onUpdate;
    if (this.props.onStart) this.props.onStart();
    addController(this);
    return new Promise(res => this.resolve = res);
  }

  stop(finished) {
    if (finished === void 0) {
      finished = false;
    }

    // Reset collected changes since the animation has been stopped cold turkey
    if (finished) getValues$1(this.animations).forEach(a => a.changes = undefined);
    this.debouncedOnEnd({
      finished
    });
  }

  destroy() {
    removeController(this);
    this.props = {};
    this.merged = {};
    this.animations = {};
    this.interpolations = {};
    this.animatedProps = {};
    this.configs = [];
  }

  debouncedOnEnd(result) {
    removeController(this);
    this.isActive = false;
    const onEnd = this.onEnd;
    this.onEnd = null;
    if (onEnd) onEnd(result);
    if (this.resolve) this.resolve();
    this.resolve = null;
  }

}

class AnimatedProps extends AnimatedObjectWithChildren {
  constructor(props, callback) {
    super();
    if (props.style) props = _extends({}, props, {
      style: createAnimatedStyle(props.style)
    });
    this.payload = props;
    this.update = callback;
    this.attach();
  }

}

function createAnimatedComponent(Component) {
  class AnimatedComponent extends React__default.Component {
    constructor(props) {
      super();

      this.callback = () => {
        if (this.node) {
          const didUpdate = applyAnimatedValues.fn(this.node, this.propsAnimated.getAnimatedValue(), this);
          if (didUpdate === false) this.forceUpdate();
        }
      };

      this.attachProps(props);
    }

    componentWillUnmount() {
      this.propsAnimated && this.propsAnimated.detach();
    }

    setNativeProps(props) {
      const didUpdate = applyAnimatedValues.fn(this.node, props, this);
      if (didUpdate === false) this.forceUpdate();
    } // The system is best designed when setNativeProps is implemented. It is
    // able to avoid re-rendering and directly set the attributes that
    // changed. However, setNativeProps can only be implemented on leaf
    // native components. If you want to animate a composite component, you
    // need to re-render it. In this case, we have a fallback that uses
    // forceUpdate.


    attachProps(_ref) {
      let forwardRef = _ref.forwardRef,
          nextProps = _objectWithoutPropertiesLoose(_ref, ["forwardRef"]);

      const oldPropsAnimated = this.propsAnimated;
      this.propsAnimated = new AnimatedProps(nextProps, this.callback); // When you call detach, it removes the element from the parent list
      // of children. If it goes to 0, then the parent also detaches itself
      // and so on.
      // An optimization is to attach the new elements and THEN detach the old
      // ones instead of detaching and THEN attaching.
      // This way the intermediate state isn't to go to 0 and trigger
      // this expensive recursive detaching to then re-attach everything on
      // the very next operation.

      oldPropsAnimated && oldPropsAnimated.detach();
    }

    shouldComponentUpdate(props) {
      const style = props.style,
            nextProps = _objectWithoutPropertiesLoose(props, ["style"]);

      const _this$props = this.props,
            currentStyle = _this$props.style,
            currentProps = _objectWithoutPropertiesLoose(_this$props, ["style"]);

      if (!shallowEqual(currentProps, nextProps) || !shallowEqual(currentStyle, style)) {
        this.attachProps(props);
        return true;
      }

      return false;
    }

    render() {
      const _this$propsAnimated$g = this.propsAnimated.getValue(),
            scrollTop = _this$propsAnimated$g.scrollTop,
            scrollLeft = _this$propsAnimated$g.scrollLeft,
            animatedProps = _objectWithoutPropertiesLoose(_this$propsAnimated$g, ["scrollTop", "scrollLeft"]);

      return React__default.createElement(Component, _extends({}, animatedProps, {
        ref: node => this.node = handleRef(node, this.props.forwardRef)
      }));
    }

  }

  return React__default.forwardRef((props, ref) => React__default.createElement(AnimatedComponent, _extends({}, props, {
    forwardRef: ref
  })));
}

const config = {
  default: {
    tension: 170,
    friction: 26
  },
  gentle: {
    tension: 120,
    friction: 14
  },
  wobbly: {
    tension: 180,
    friction: 12
  },
  stiff: {
    tension: 210,
    friction: 20
  },
  slow: {
    tension: 280,
    friction: 60
  },
  molasses: {
    tension: 280,
    friction: 120
  }
};

class Spring extends React__default.Component {
  constructor() {
    super(...arguments);
    this.state = {
      lastProps: {
        from: {},
        to: {}
      },
      propsChanged: false,
      internal: false
    };
    this.controller = new Controller(null, null);
    this.didUpdate = false;
    this.didInject = false;
    this.finished = true;

    this.start = () => {
      this.finished = false;
      let wasMounted = this.mounted;
      this.controller.start(props => this.finish(_extends({}, props, {
        wasMounted
      })), this.update);
    };

    this.stop = () => this.controller.stop(true);

    this.update = () => this.mounted && this.setState({
      internal: true
    });

    this.finish = (_ref) => {
      let finished = _ref.finished,
          noChange = _ref.noChange,
          wasMounted = _ref.wasMounted;
      this.finished = true;

      if (this.mounted && finished) {
        // Only call onRest if either we *were* mounted, or when there were changes
        if (this.props.onRest && (wasMounted || !noChange)) this.props.onRest(this.controller.merged); // Restore end-state

        if (this.mounted && this.didInject) {
          this.afterInject = convertValues(this.props);
          this.setState({
            internal: true
          });
        } // If we have an inject or values to apply after the animation we ping here


        if (this.mounted && (this.didInject || this.props.after)) this.setState({
          internal: true
        });
        this.didInject = false;
      }
    };
  }

  componentDidMount() {
    // componentDidUpdate isn't called on mount, we call it here to start animating
    this.componentDidUpdate();
    this.mounted = true;
  }

  componentWillUnmount() {
    // Stop all ongoing animtions
    this.mounted = false;
    this.stop();
  }

  static getDerivedStateFromProps(props, _ref2) {
    let internal = _ref2.internal,
        lastProps = _ref2.lastProps;
    // The following is a test against props that could alter the animation
    const from = props.from,
          to = props.to,
          reset = props.reset,
          force = props.force;
    const propsChanged = !shallowEqual(to, lastProps.to) || !shallowEqual(from, lastProps.from) || reset && !internal || force && !internal;
    return {
      propsChanged,
      lastProps: props,
      internal: false
    };
  }

  render() {
    const children = this.props.children;
    const propsChanged = this.state.propsChanged; // Inject phase -----------------------------------------------------------
    // Handle injected frames, for instance targets/web/fix-auto
    // An inject will return an intermediary React node which measures itself out
    // .. and returns a callback when the values sought after are ready, usually "auto".

    if (this.props.inject && propsChanged && !this.injectProps) {
      const frame = this.props.inject(this.props, injectProps => {
        // The inject frame has rendered, now let's update animations...
        this.injectProps = injectProps;
        this.setState({
          internal: true
        });
      }); // Render out injected frame

      if (frame) return frame;
    } // Update phase -----------------------------------------------------------


    if (this.injectProps || propsChanged) {
      // We can potentially cause setState, but we're inside render, the flag prevents that
      this.didInject = false; // Update animations, this turns from/to props into AnimatedValues
      // An update can occur on injected props, or when own-props have changed.

      if (this.injectProps) {
        this.controller.update(this.injectProps); // didInject is needed, because there will be a 3rd stage, where the original values
        // .. will be restored after the animation is finished. When someone animates towards
        // .. "auto", the end-result should be "auto", not "1999px", which would block nested
        // .. height/width changes.

        this.didInject = true;
      } else if (propsChanged) this.controller.update(this.props); // Flag an update that occured, componentDidUpdate will start the animation later on


      this.didUpdate = true;
      this.afterInject = undefined;
      this.injectProps = undefined;
    } // Render phase -----------------------------------------------------------
    // Render out raw values or AnimatedValues depending on "native"


    let values = _extends({}, this.controller.getValues(), this.afterInject);

    if (this.finished) values = _extends({}, values, this.props.after);
    return Object.keys(values).length ? children(values) : null;
  }

  componentDidUpdate() {
    // The animation has to start *after* render, since at that point the scene
    // .. graph should be established, so we do it here. Unfortunatelly, non-native
    // .. animations as well as "auto"-injects call forceUpdate, so it's causing a loop.
    // .. didUpdate prevents that as it gets set only on prop changes.
    if (this.didUpdate) this.start();
    this.didUpdate = false;
  }

}
Spring.defaultProps = {
  from: {},
  to: {},
  config: config.default,
  native: false,
  immediate: false,
  reset: false,
  force: false,
  inject: bugfixes
};

class Trail extends React__default.PureComponent {
  constructor() {
    super(...arguments);
    this.first = true;
    this.instances = new Set();

    this.hook = (instance, index, length, reverse) => {
      // Add instance to set
      this.instances.add(instance); // Return undefined on the first index and from then on the previous instance

      if (reverse ? index === length - 1 : index === 0) return undefined;else return Array.from(this.instances)[reverse ? index + 1 : index - 1];
    };
  }

  render() {
    const _this$props = this.props,
          items = _this$props.items,
          _children = _this$props.children,
          _this$props$from = _this$props.from,
          from = _this$props$from === void 0 ? {} : _this$props$from,
          initial = _this$props.initial,
          reverse = _this$props.reverse,
          keys = _this$props.keys,
          delay = _this$props.delay,
          onRest = _this$props.onRest,
          props = _objectWithoutPropertiesLoose(_this$props, ["items", "children", "from", "initial", "reverse", "keys", "delay", "onRest"]);

    const array = toArray(items);
    return toArray(array).map((item, i) => React__default.createElement(Spring, _extends({
      onRest: i === 0 ? onRest : null,
      key: typeof keys === 'function' ? keys(item) : toArray(keys)[i],
      from: this.first && initial !== void 0 ? initial || {} : from
    }, props, {
      delay: i === 0 && delay || undefined,
      attach: instance => this.hook(instance, i, array.length, reverse),
      children: props => {
        const child = _children(item, i);

        return child ? child(props) : null;
      }
    })));
  }

  componentDidUpdate(prevProps) {
    this.first = false;
    if (prevProps.items !== this.props.items) this.instances.clear();
  }

}
Trail.defaultProps = {
  keys: item => item
};

const DEFAULT = '__default';

class KeyframesImpl extends React__default.PureComponent {
  constructor() {
    var _this;

    super(...arguments);
    _this = this;
    this.guid = 0;
    this.state = {
      props: {},
      resolve: () => null,
      last: true,
      index: 0
    };

    this.next = function (props, last, index) {
      if (last === void 0) {
        last = true;
      }

      if (index === void 0) {
        index = 0;
      }

      _this.running = true;
      return new Promise(resolve => {
        _this.mounted && _this.setState(state => ({
          props,
          resolve,
          last,
          index
        }), () => _this.running = false);
      });
    };
  }

  componentDidMount() {
    this.mounted = true;
    this.componentDidUpdate({});
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  componentDidUpdate(previous) {
    var _this2 = this;

    const _this$props = this.props,
          states = _this$props.states,
          f = _this$props.filter,
          state = _this$props.state;

    if (previous.state !== this.props.state || this.props.reset && !this.running || !shallowEqual(states[state], previous.states[previous.state])) {
      if (states && state && states[state]) {
        const localId = ++this.guid;
        const slots = states[state];

        if (slots) {
          if (Array.isArray(slots)) {
            let q = Promise.resolve();

            for (let i = 0; i < slots.length; i++) {
              let index = i;
              let slot = slots[index];
              let last = index === slots.length - 1;
              q = q.then(() => localId === this.guid && this.next(f(slot), last, index));
            }
          } else if (typeof slots === 'function') {
            let index = 0;
            slots( // next
            function (props, last) {
              if (last === void 0) {
                last = false;
              }

              return localId === _this2.guid && _this2.next(f(props), last, index++);
            }, // cancel
            () => requestFrame(() => this.instance && this.instance.stop()), // ownprops
            this.props);
          } else {
            this.next(f(states[state]));
          }
        }
      }
    }
  }

  render() {
    const _this$state = this.state,
          props = _this$state.props,
          resolve = _this$state.resolve,
          last = _this$state.last,
          index = _this$state.index;
    if (!props || Object.keys(props).length === 0) return null;

    let _this$props2 = this.props,
        state = _this$props2.state,
        filter = _this$props2.filter,
        states = _this$props2.states,
        config = _this$props2.config,
        Component = _this$props2.primitive,
        _onRest = _this$props2.onRest,
        forwardRef = _this$props2.forwardRef,
        rest = _objectWithoutPropertiesLoose(_this$props2, ["state", "filter", "states", "config", "primitive", "onRest", "forwardRef"]); // Arrayed configs need an index to process


    if (Array.isArray(config)) config = config[index];
    return React__default.createElement(Component, _extends({
      ref: _ref => this.instance = handleRef(_ref, forwardRef),
      config: config
    }, rest, props, {
      onRest: args => {
        resolve(args);
        if (_onRest && last) _onRest(args);
      }
    }));
  }

}

KeyframesImpl.defaultProps = {
  state: DEFAULT
};
const Keyframes = React__default.forwardRef((props, ref) => React__default.createElement(KeyframesImpl, _extends({}, props, {
  forwardRef: ref
})));

Keyframes.create = primitive => function (states, filter) {
  if (filter === void 0) {
    filter = states => states;
  }

  if (typeof states === 'function' || Array.isArray(states)) states = {
    [DEFAULT]: states
  };
  return props => React__default.createElement(KeyframesImpl, _extends({
    primitive: primitive,
    states: states,
    filter: filter
  }, props));
};

Keyframes.Spring = states => Keyframes.create(Spring)(states, interpolateTo);

Keyframes.Trail = states => Keyframes.create(Trail)(states, interpolateTo);

let guid = 0;

let get = props => {
  let items = props.items,
      keys = props.keys,
      rest = _objectWithoutPropertiesLoose(props, ["items", "keys"]);

  items = toArray(items !== void 0 ? items : null);
  keys = typeof keys === 'function' ? items.map(keys) : toArray(keys); // Make sure numeric keys are interpreted as Strings (5 !== "5")

  return _extends({
    items,
    keys: keys.map(key => String(key))
  }, rest);
};

class Transition extends React__default.PureComponent {
  componentDidMount() {
    this.mounted = true;
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  constructor(prevProps) {
    super(prevProps);

    this.destroyItem = (item, key, state) => values => {
      const _this$props = this.props,
            onRest = _this$props.onRest,
            onDestroyed = _this$props.onDestroyed;

      if (this.mounted) {
        onDestroyed && onDestroyed(item);
        this.setState((_ref) => {
          let deleted = _ref.deleted;
          return {
            deleted: deleted.filter(t => t.key !== key)
          };
        });
        onRest && onRest(item, state, values);
      }
    };

    this.state = {
      first: true,
      transitions: [],
      current: {},
      deleted: [],
      prevProps
    };
  }

  static getDerivedStateFromProps(props, _ref2) {
    let first = _ref2.first,
        prevProps = _ref2.prevProps,
        state = _objectWithoutPropertiesLoose(_ref2, ["first", "prevProps"]);

    let _get = get(props),
        items = _get.items,
        keys = _get.keys,
        initial = _get.initial,
        from = _get.from,
        enter = _get.enter,
        leave = _get.leave,
        update = _get.update,
        _get$trail = _get.trail,
        trail = _get$trail === void 0 ? 0 : _get$trail,
        unique = _get.unique,
        config = _get.config;

    let _get2 = get(prevProps),
        _keys = _get2.keys,
        _items = _get2.items;

    let current = _extends({}, state.current);

    let deleted = [...state.deleted]; // Compare next keys with current keys

    let currentKeys = Object.keys(current);
    let currentSet = new Set(currentKeys);
    let nextSet = new Set(keys);
    let added = keys.filter(item => !currentSet.has(item));
    let removed = state.transitions.filter(item => !item.destroyed && !nextSet.has(item.originalKey)).map(i => i.originalKey);
    let updated = keys.filter(item => currentSet.has(item));
    let delay = 0;
    added.forEach(key => {
      // In unique mode, remove fading out transitions if their key comes in again
      if (unique && deleted.find(d => d.originalKey === key)) deleted = deleted.filter(t => t.originalKey !== key);
      const keyIndex = keys.indexOf(key);
      const item = items[keyIndex];
      const state = 'enter';
      current[key] = {
        state,
        originalKey: key,
        key: unique ? String(key) : guid++,
        item,
        trail: delay = delay + trail,
        config: callProp(config, item, state),
        from: callProp(first ? initial !== void 0 ? initial || {} : from : from, item),
        to: callProp(enter, item)
      };
    });
    removed.forEach(key => {
      const keyIndex = _keys.indexOf(key);

      const item = _items[keyIndex];
      const state = 'leave';
      deleted.push(_extends({}, current[key], {
        state,
        destroyed: true,
        left: _keys[Math.max(0, keyIndex - 1)],
        right: _keys[Math.min(_keys.length, keyIndex + 1)],
        trail: delay = delay + trail,
        config: callProp(config, item, state),
        to: callProp(leave, item)
      }));
      delete current[key];
    });
    updated.forEach(key => {
      const keyIndex = keys.indexOf(key);
      const item = items[keyIndex];
      const state = 'update';
      current[key] = _extends({}, current[key], {
        item,
        state,
        trail: delay = delay + trail,
        config: callProp(config, item, state),
        to: callProp(update, item)
      });
    }); // This tries to restore order for deleted items by finding their last known siblings

    let out = keys.map(key => current[key]);
    deleted.forEach((_ref3) => {
      let left = _ref3.left,
          right = _ref3.right,
          transition = _objectWithoutPropertiesLoose(_ref3, ["left", "right"]);

      let pos; // Was it the element on the left, if yes, move there ...

      if ((pos = out.findIndex(t => t.originalKey === left)) !== -1) pos += 1; // Or how about the element on the right ...

      if (pos === -1) pos = out.findIndex(t => t.originalKey === right); // Maybe we'll find it in the list of deleted items

      if (pos === -1) pos = deleted.findIndex(t => t.originalKey === left); // Checking right side as well

      if (pos === -1) pos = deleted.findIndex(t => t.originalKey === right); // And if nothing else helps, move it to the start ¯\_(ツ)_/¯

      pos = Math.max(0, pos);
      out = [...out.slice(0, pos), transition, ...out.slice(pos)];
    });
    return {
      first: first && added.length === 0,
      transitions: out,
      current,
      deleted,
      prevProps: props
    };
  }

  render() {
    const _this$props2 = this.props,
          initial = _this$props2.initial,
          _this$props2$from = _this$props2.from,
          _this$props2$enter = _this$props2.enter,
          _this$props2$leave = _this$props2.leave,
          _this$props2$update = _this$props2.update,
          onDestroyed = _this$props2.onDestroyed,
          keys = _this$props2.keys,
          items = _this$props2.items,
          onFrame = _this$props2.onFrame,
          onRest = _this$props2.onRest,
          onStart = _this$props2.onStart,
          trail = _this$props2.trail,
          config = _this$props2.config,
          _children = _this$props2.children,
          unique = _this$props2.unique,
          reset = _this$props2.reset,
          extra = _objectWithoutPropertiesLoose(_this$props2, ["initial", "from", "enter", "leave", "update", "onDestroyed", "keys", "items", "onFrame", "onRest", "onStart", "trail", "config", "children", "unique", "reset"]);

    return this.state.transitions.map((_ref4, i) => {
      let state = _ref4.state,
          key = _ref4.key,
          item = _ref4.item,
          from = _ref4.from,
          to = _ref4.to,
          trail = _ref4.trail,
          config = _ref4.config,
          destroyed = _ref4.destroyed;
      return React__default.createElement(Keyframes, _extends({
        reset: reset && state === 'enter',
        primitive: Spring,
        state: state,
        filter: interpolateTo,
        states: {
          [state]: to
        },
        key: key,
        onRest: destroyed ? this.destroyItem(item, key, state) : onRest && (values => onRest(item, state, values)),
        onStart: onStart && (() => onStart(item, state)),
        onFrame: onFrame && (values => onFrame(item, state, values)),
        delay: trail,
        config: config
      }, extra, {
        from: from,
        children: props => {
          const child = _children(item, state, i);

          return child ? child(props) : null;
        }
      }));
    });
  }

}
Transition.defaultProps = {
  keys: item => item,
  unique: false,
  reset: false
};

const domElements = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr', // SVG
'circle', 'clipPath', 'defs', 'ellipse', 'foreignObject', 'g', 'image', 'line', 'linearGradient', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan'];
const extendedAnimated = domElements.reduce((acc, element) => {
  acc[element] = createAnimatedComponent(element);
  return acc;
}, createAnimatedComponent);

exports.Spring = Spring;
exports.Keyframes = Keyframes;
exports.Transition = Transition;
exports.Trail = Trail;
exports.Controller = Controller;
exports.config = config;
exports.animated = extendedAnimated;
exports.interpolate = interpolate$1;
exports.Globals = Globals;


/***/ }),

/***/ "./pages/test.js":
/*!***********************!*\
  !*** ./pages/test.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layout_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout/Navbar */ "./components/layout/Navbar.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_layout_Head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/layout/Head */ "./components/layout/Head.js");
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-spring */ "./node_modules/react-spring/web.js");
/* harmony import */ var react_spring_renderprops__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-spring/renderprops */ "./node_modules/react-spring/renderprops.js");
/* harmony import */ var react_spring_renderprops__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_spring_renderprops__WEBPACK_IMPORTED_MODULE_6__);


var _jsxFileName = "E:\\Portfolio\\pages\\test.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






var calc = function calc(x, y) {
  return [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.05];
};

var trans = function trans(x, y, s) {
  return "perspective(1800px) rotateX(".concat(x, "deg) rotateY(").concat(y, "deg) scale(").concat(s, ")");
};

function Test() {
  _s();

  var _useSpring = Object(react_spring__WEBPACK_IMPORTED_MODULE_5__["useSpring"])(function () {
    return {
      xys: [0, 0, 1],
      config: {
        mass: 5,
        tension: 350,
        friction: 40
      }
    };
  }),
      _useSpring2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useSpring, 2),
      props = _useSpring2[0],
      set = _useSpring2[1];

  return __jsx("div", {
    className: "homepage",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }, __jsx(_components_layout_Head__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  }), __jsx(_components_layout_Navbar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "home-image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "home-inner",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "home-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 33
    }
  }, __jsx("p", {
    className: "large",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 37
    }
  }, "Hi,"), __jsx("p", {
    className: "large-name",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 37
    }
  }, "I'm Robert,"), __jsx("p", {
    className: "large-name",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 37
    }
  }, "web developer."), __jsx("p", {
    className: "paragraph",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 37
    }
  }, "I'm an enthusiastic software developer, that covers the full-stack development of a website and aims to build responsive and engaging products."), __jsx("div", {
    className: "button-div",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 37
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/work",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 41
    }
  }, __jsx("button", {
    className: "work-button",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 60
    }
  }, "My Work")))), __jsx(react_spring__WEBPACK_IMPORTED_MODULE_5__["animated"].div, {
    "class": "large-logo-test",
    onMouseMove: function onMouseMove(_ref) {
      var x = _ref.clientX,
          y = _ref.clientY;
      return set({
        xys: calc(x, y)
      });
    },
    onMouseLeave: function onMouseLeave() {
      return set({
        xys: [0, 0, 1]
      });
    },
    style: {
      transform: props.xys.interpolate(trans)
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 33
    }
  }, __jsx(react_spring_renderprops__WEBPACK_IMPORTED_MODULE_6__["Spring"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 41
    }
  }), __jsx("img", {
    src: "/RLogo.png",
    alt: ".robert",
    className: "big-logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 45
    }
  })))));
}

_s(Test, "JsRLRFoXSrcYnGmIVjeJI9Twg/I=", false, function () {
  return [react_spring__WEBPACK_IMPORTED_MODULE_5__["useSpring"]];
});

_c = Test;
/* harmony default export */ __webpack_exports__["default"] = (Test);

var _c;

$RefreshReg$(_c, "Test");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNwcmluZy9yZW5kZXJwcm9wcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdGVzdC5qcyJdLCJuYW1lcyI6WyJjYWxjIiwieCIsInkiLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsImlubmVyV2lkdGgiLCJ0cmFucyIsInMiLCJUZXN0IiwidXNlU3ByaW5nIiwieHlzIiwiY29uZmlnIiwibWFzcyIsInRlbnNpb24iLCJmcmljdGlvbiIsInByb3BzIiwic2V0IiwiY2xpZW50WCIsImNsaWVudFkiLCJ0cmFuc2Zvcm0iLCJpbnRlcnBvbGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViLDhDQUE4QyxjQUFjOztBQUU1RCwrQkFBK0IsaUZBQWlGOztBQUVoSCxvREFBb0QsbUJBQU8sQ0FBQywwSUFBeUQ7QUFDckgsK0JBQStCLG1CQUFPLENBQUMsZ0dBQW9DO0FBQzNFLFlBQVksbUJBQU8sQ0FBQyw0Q0FBTztBQUMzQjtBQUNBLCtCQUErQixtQkFBTyxDQUFDLG9EQUFXOztBQUVsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQixpQkFBaUIsRUFBRTtBQUN0Qyw4QkFBOEIsNEJBQTRCLEVBQUU7QUFDNUQscUJBQXFCLG1CQUFtQixFQUFFO0FBQzFDLHVCQUF1QixxQkFBcUIsRUFBRTtBQUM5QyxzQkFBc0Isb0JBQW9CLEVBQUU7QUFDNUMsd0JBQXdCLHNCQUFzQixFQUFFO0FBQ2hELGNBQWMsWUFBWSxFQUFFO0FBQzVCLHlCQUF5Qix1QkFBdUIsRUFBRTtBQUNsRCw4QkFBOEIsNEJBQTRCLEVBQUU7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QztBQUN4QztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVFQUF1RTtBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdFQUFnRTtBQUNoRTtBQUNBLE9BQU87QUFDUDs7QUFFQTs7QUFFQSw4R0FBOEc7QUFDOUc7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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USxlQUFXLEVBQUU7QUFBQSxVQUFZZixDQUFaLFFBQUdnQixPQUFIO0FBQUEsVUFBd0JmLENBQXhCLFFBQWVnQixPQUFmO0FBQUEsYUFBZ0NGLEdBQUcsQ0FBQztBQUFFTixXQUFHLEVBQUVWLElBQUksQ0FBQ0MsQ0FBRCxFQUFJQyxDQUFKO0FBQVgsT0FBRCxDQUFuQztBQUFBLEtBRnJCO0FBR1EsZ0JBQVksRUFBRTtBQUFBLGFBQU1jLEdBQUcsQ0FBQztBQUFFTixXQUFHLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVA7QUFBUCxPQUFELENBQVQ7QUFBQSxLQUh0QjtBQUlRLFNBQUssRUFBRTtBQUFFUyxlQUFTLEVBQUVKLEtBQUssQ0FBQ0wsR0FBTixDQUFVVSxXQUFWLENBQXNCZCxLQUF0QjtBQUFiLEtBSmY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtRLE1BQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxSLEVBUVk7QUFBSyxPQUFHLEVBQUMsWUFBVDtBQUFzQixPQUFHLEVBQUMsU0FBMUI7QUFBcUMsYUFBUyxFQUFDLFVBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFSWixDQVhKLENBRFIsQ0FIUixDQURKO0FBaUNQOztHQW5DUUUsSTtVQUNnQkMsc0Q7OztLQURoQkQsSTtBQXVDTUEsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdGVzdC43YmU2MzMyZWExNjVkNDkwMGYyMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcERlZmF1bHQgKGV4KSB7IHJldHVybiAoZXggJiYgKHR5cGVvZiBleCA9PT0gJ29iamVjdCcpICYmICdkZWZhdWx0JyBpbiBleCkgPyBleFsnZGVmYXVsdCddIDogZXg7IH1cblxudmFyIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlID0gX2ludGVyb3BEZWZhdWx0KHJlcXVpcmUoJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UnKSk7XG52YXIgX2V4dGVuZHMgPSBfaW50ZXJvcERlZmF1bHQocmVxdWlyZSgnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kcycpKTtcbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgUmVhY3RfX2RlZmF1bHQgPSBfaW50ZXJvcERlZmF1bHQoUmVhY3QpO1xudmFyIFJlYWN0RE9NID0gX2ludGVyb3BEZWZhdWx0KHJlcXVpcmUoJ3JlYWN0LWRvbScpKTtcblxubGV0IGJ1Z2ZpeGVzID0gdW5kZWZpbmVkO1xubGV0IGFwcGx5QW5pbWF0ZWRWYWx1ZXMgPSB1bmRlZmluZWQ7XG5sZXQgY29sb3JOYW1lcyA9IFtdO1xubGV0IHJlcXVlc3RGcmFtZSA9IGNiID0+IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoY2IpO1xubGV0IGNhbmNlbEZyYW1lID0gY2IgPT4gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKGNiKTtcbmxldCBpbnRlcnBvbGF0aW9uID0gdW5kZWZpbmVkO1xubGV0IG5vdyA9ICgpID0+IERhdGUubm93KCk7XG5sZXQgZGVmYXVsdEVsZW1lbnQgPSB1bmRlZmluZWQ7XG5sZXQgY3JlYXRlQW5pbWF0ZWRTdHlsZSA9IHVuZGVmaW5lZDtcbmNvbnN0IGluamVjdEFwcGx5QW5pbWF0ZWRWYWx1ZXMgPSAoZm4sIHRyYW5zZm9ybSkgPT4gYXBwbHlBbmltYXRlZFZhbHVlcyA9IHtcbiAgZm4sXG4gIHRyYW5zZm9ybVxufTtcbmNvbnN0IGluamVjdENvbG9yTmFtZXMgPSBuYW1lcyA9PiBjb2xvck5hbWVzID0gbmFtZXM7XG5jb25zdCBpbmplY3RCdWdmaXhlcyA9IGZuID0+IGJ1Z2ZpeGVzID0gZm47XG5jb25zdCBpbmplY3RJbnRlcnBvbGF0aW9uID0gY2xzID0+IGludGVycG9sYXRpb24gPSBjbHM7XG5jb25zdCBpbmplY3RGcmFtZSA9IChyYWYsIGNhZikgPT4ge1xuICB2YXIgX3JlZiA9IFtyYWYsIGNhZl07XG4gIHJlcXVlc3RGcmFtZSA9IF9yZWZbMF07XG4gIGNhbmNlbEZyYW1lID0gX3JlZlsxXTtcbiAgcmV0dXJuIF9yZWY7XG59O1xuY29uc3QgaW5qZWN0Tm93ID0gbm93Rm4gPT4gbm93ID0gbm93Rm47XG5jb25zdCBpbmplY3REZWZhdWx0RWxlbWVudCA9IGVsID0+IGRlZmF1bHRFbGVtZW50ID0gZWw7XG5jb25zdCBpbmplY3RDcmVhdGVBbmltYXRlZFN0eWxlID0gZmFjdG9yeSA9PiBjcmVhdGVBbmltYXRlZFN0eWxlID0gZmFjdG9yeTtcblxudmFyIEdsb2JhbHMgPSAvKiNfX1BVUkVfXyovT2JqZWN0LmZyZWV6ZSh7XG4gIGdldCBidWdmaXhlcyAoKSB7IHJldHVybiBidWdmaXhlczsgfSxcbiAgZ2V0IGFwcGx5QW5pbWF0ZWRWYWx1ZXMgKCkgeyByZXR1cm4gYXBwbHlBbmltYXRlZFZhbHVlczsgfSxcbiAgZ2V0IGNvbG9yTmFtZXMgKCkgeyByZXR1cm4gY29sb3JOYW1lczsgfSxcbiAgZ2V0IHJlcXVlc3RGcmFtZSAoKSB7IHJldHVybiByZXF1ZXN0RnJhbWU7IH0sXG4gIGdldCBjYW5jZWxGcmFtZSAoKSB7IHJldHVybiBjYW5jZWxGcmFtZTsgfSxcbiAgZ2V0IGludGVycG9sYXRpb24gKCkgeyByZXR1cm4gaW50ZXJwb2xhdGlvbjsgfSxcbiAgZ2V0IG5vdyAoKSB7IHJldHVybiBub3c7IH0sXG4gIGdldCBkZWZhdWx0RWxlbWVudCAoKSB7IHJldHVybiBkZWZhdWx0RWxlbWVudDsgfSxcbiAgZ2V0IGNyZWF0ZUFuaW1hdGVkU3R5bGUgKCkgeyByZXR1cm4gY3JlYXRlQW5pbWF0ZWRTdHlsZTsgfSxcbiAgaW5qZWN0QXBwbHlBbmltYXRlZFZhbHVlczogaW5qZWN0QXBwbHlBbmltYXRlZFZhbHVlcyxcbiAgaW5qZWN0Q29sb3JOYW1lczogaW5qZWN0Q29sb3JOYW1lcyxcbiAgaW5qZWN0QnVnZml4ZXM6IGluamVjdEJ1Z2ZpeGVzLFxuICBpbmplY3RJbnRlcnBvbGF0aW9uOiBpbmplY3RJbnRlcnBvbGF0aW9uLFxuICBpbmplY3RGcmFtZTogaW5qZWN0RnJhbWUsXG4gIGluamVjdE5vdzogaW5qZWN0Tm93LFxuICBpbmplY3REZWZhdWx0RWxlbWVudDogaW5qZWN0RGVmYXVsdEVsZW1lbnQsXG4gIGluamVjdENyZWF0ZUFuaW1hdGVkU3R5bGU6IGluamVjdENyZWF0ZUFuaW1hdGVkU3R5bGVcbn0pO1xuXG5jbGFzcyBBbmltYXRlZCB7XG4gIGF0dGFjaCgpIHt9XG5cbiAgZGV0YWNoKCkge31cblxuICBnZXRWYWx1ZSgpIHt9XG5cbiAgZ2V0QW5pbWF0ZWRWYWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRWYWx1ZSgpO1xuICB9XG5cbiAgYWRkQ2hpbGQoY2hpbGQpIHt9XG5cbiAgcmVtb3ZlQ2hpbGQoY2hpbGQpIHt9XG5cbiAgZ2V0Q2hpbGRyZW4oKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbn1cblxuY29uc3QgZ2V0VmFsdWVzID0gb2JqZWN0ID0+IE9iamVjdC5rZXlzKG9iamVjdCkubWFwKGsgPT4gb2JqZWN0W2tdKTtcblxuY2xhc3MgQW5pbWF0ZWRXaXRoQ2hpbGRyZW4gZXh0ZW5kcyBBbmltYXRlZCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgX3RoaXMgPSB0aGlzO1xuICAgIHRoaXMuY2hpbGRyZW4gPSBbXTtcblxuICAgIHRoaXMuZ2V0Q2hpbGRyZW4gPSAoKSA9PiB0aGlzLmNoaWxkcmVuO1xuXG4gICAgdGhpcy5nZXRQYXlsb2FkID0gZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICBpZiAoaW5kZXggPT09IHZvaWQgMCkge1xuICAgICAgICBpbmRleCA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGluZGV4ICE9PSB2b2lkIDAgJiYgX3RoaXMucGF5bG9hZCA/IF90aGlzLnBheWxvYWRbaW5kZXhdIDogX3RoaXMucGF5bG9hZCB8fCBfdGhpcztcbiAgICB9O1xuICB9XG5cbiAgYWRkQ2hpbGQoY2hpbGQpIHtcbiAgICBpZiAodGhpcy5jaGlsZHJlbi5sZW5ndGggPT09IDApIHRoaXMuYXR0YWNoKCk7XG4gICAgdGhpcy5jaGlsZHJlbi5wdXNoKGNoaWxkKTtcbiAgfVxuXG4gIHJlbW92ZUNoaWxkKGNoaWxkKSB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmNoaWxkcmVuLmluZGV4T2YoY2hpbGQpO1xuICAgIHRoaXMuY2hpbGRyZW4uc3BsaWNlKGluZGV4LCAxKTtcbiAgICBpZiAodGhpcy5jaGlsZHJlbi5sZW5ndGggPT09IDApIHRoaXMuZGV0YWNoKCk7XG4gIH1cblxufVxuY2xhc3MgQW5pbWF0ZWRBcnJheVdpdGhDaGlsZHJlbiBleHRlbmRzIEFuaW1hdGVkV2l0aENoaWxkcmVuIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICB0aGlzLnBheWxvYWQgPSBbXTtcblxuICAgIHRoaXMuZ2V0QW5pbWF0ZWRWYWx1ZSA9ICgpID0+IHRoaXMuZ2V0VmFsdWUoKTtcblxuICAgIHRoaXMuYXR0YWNoID0gKCkgPT4gdGhpcy5wYXlsb2FkLmZvckVhY2gocCA9PiBwIGluc3RhbmNlb2YgQW5pbWF0ZWQgJiYgcC5hZGRDaGlsZCh0aGlzKSk7XG5cbiAgICB0aGlzLmRldGFjaCA9ICgpID0+IHRoaXMucGF5bG9hZC5mb3JFYWNoKHAgPT4gcCBpbnN0YW5jZW9mIEFuaW1hdGVkICYmIHAucmVtb3ZlQ2hpbGQodGhpcykpO1xuICB9XG5cbn1cbmNsYXNzIEFuaW1hdGVkT2JqZWN0V2l0aENoaWxkcmVuIGV4dGVuZHMgQW5pbWF0ZWRXaXRoQ2hpbGRyZW4ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgIHRoaXMucGF5bG9hZCA9IHt9O1xuXG4gICAgdGhpcy5nZXRBbmltYXRlZFZhbHVlID0gKCkgPT4gdGhpcy5nZXRWYWx1ZSh0cnVlKTtcblxuICAgIHRoaXMuYXR0YWNoID0gKCkgPT4gZ2V0VmFsdWVzKHRoaXMucGF5bG9hZCkuZm9yRWFjaChzID0+IHMgaW5zdGFuY2VvZiBBbmltYXRlZCAmJiBzLmFkZENoaWxkKHRoaXMpKTtcblxuICAgIHRoaXMuZGV0YWNoID0gKCkgPT4gZ2V0VmFsdWVzKHRoaXMucGF5bG9hZCkuZm9yRWFjaChzID0+IHMgaW5zdGFuY2VvZiBBbmltYXRlZCAmJiBzLnJlbW92ZUNoaWxkKHRoaXMpKTtcbiAgfVxuXG4gIGdldFZhbHVlKGFuaW1hdGVkKSB7XG4gICAgaWYgKGFuaW1hdGVkID09PSB2b2lkIDApIHtcbiAgICAgIGFuaW1hdGVkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3QgcGF5bG9hZCA9IHt9O1xuXG4gICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5wYXlsb2FkKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHRoaXMucGF5bG9hZFtrZXldO1xuICAgICAgaWYgKGFuaW1hdGVkICYmICEodmFsdWUgaW5zdGFuY2VvZiBBbmltYXRlZCkpIGNvbnRpbnVlO1xuICAgICAgcGF5bG9hZFtrZXldID0gdmFsdWUgaW5zdGFuY2VvZiBBbmltYXRlZCA/IHZhbHVlW2FuaW1hdGVkID8gJ2dldEFuaW1hdGVkVmFsdWUnIDogJ2dldFZhbHVlJ10oKSA6IHZhbHVlO1xuICAgIH1cblxuICAgIHJldHVybiBwYXlsb2FkO1xuICB9XG5cbn1cblxuY2xhc3MgQW5pbWF0ZWRTdHlsZSBleHRlbmRzIEFuaW1hdGVkT2JqZWN0V2l0aENoaWxkcmVuIHtcbiAgY29uc3RydWN0b3Ioc3R5bGUpIHtcbiAgICBzdXBlcigpO1xuICAgIHN0eWxlID0gc3R5bGUgfHwge307XG4gICAgaWYgKHN0eWxlLnRyYW5zZm9ybSAmJiAhKHN0eWxlLnRyYW5zZm9ybSBpbnN0YW5jZW9mIEFuaW1hdGVkKSkgc3R5bGUgPSBhcHBseUFuaW1hdGVkVmFsdWVzLnRyYW5zZm9ybShzdHlsZSk7XG4gICAgdGhpcy5wYXlsb2FkID0gc3R5bGU7XG4gIH1cblxufVxuXG4vLyBodHRwOi8vd3d3LnczLm9yZy9UUi9jc3MzLWNvbG9yLyNzdmctY29sb3JcbmNvbnN0IGNvbG9ycyA9IHtcbiAgdHJhbnNwYXJlbnQ6IDB4MDAwMDAwMDAsXG4gIGFsaWNlYmx1ZTogMHhmMGY4ZmZmZixcbiAgYW50aXF1ZXdoaXRlOiAweGZhZWJkN2ZmLFxuICBhcXVhOiAweDAwZmZmZmZmLFxuICBhcXVhbWFyaW5lOiAweDdmZmZkNGZmLFxuICBhenVyZTogMHhmMGZmZmZmZixcbiAgYmVpZ2U6IDB4ZjVmNWRjZmYsXG4gIGJpc3F1ZTogMHhmZmU0YzRmZixcbiAgYmxhY2s6IDB4MDAwMDAwZmYsXG4gIGJsYW5jaGVkYWxtb25kOiAweGZmZWJjZGZmLFxuICBibHVlOiAweDAwMDBmZmZmLFxuICBibHVldmlvbGV0OiAweDhhMmJlMmZmLFxuICBicm93bjogMHhhNTJhMmFmZixcbiAgYnVybHl3b29kOiAweGRlYjg4N2ZmLFxuICBidXJudHNpZW5uYTogMHhlYTdlNWRmZixcbiAgY2FkZXRibHVlOiAweDVmOWVhMGZmLFxuICBjaGFydHJldXNlOiAweDdmZmYwMGZmLFxuICBjaG9jb2xhdGU6IDB4ZDI2OTFlZmYsXG4gIGNvcmFsOiAweGZmN2Y1MGZmLFxuICBjb3JuZmxvd2VyYmx1ZTogMHg2NDk1ZWRmZixcbiAgY29ybnNpbGs6IDB4ZmZmOGRjZmYsXG4gIGNyaW1zb246IDB4ZGMxNDNjZmYsXG4gIGN5YW46IDB4MDBmZmZmZmYsXG4gIGRhcmtibHVlOiAweDAwMDA4YmZmLFxuICBkYXJrY3lhbjogMHgwMDhiOGJmZixcbiAgZGFya2dvbGRlbnJvZDogMHhiODg2MGJmZixcbiAgZGFya2dyYXk6IDB4YTlhOWE5ZmYsXG4gIGRhcmtncmVlbjogMHgwMDY0MDBmZixcbiAgZGFya2dyZXk6IDB4YTlhOWE5ZmYsXG4gIGRhcmtraGFraTogMHhiZGI3NmJmZixcbiAgZGFya21hZ2VudGE6IDB4OGIwMDhiZmYsXG4gIGRhcmtvbGl2ZWdyZWVuOiAweDU1NmIyZmZmLFxuICBkYXJrb3JhbmdlOiAweGZmOGMwMGZmLFxuICBkYXJrb3JjaGlkOiAweDk5MzJjY2ZmLFxuICBkYXJrcmVkOiAweDhiMDAwMGZmLFxuICBkYXJrc2FsbW9uOiAweGU5OTY3YWZmLFxuICBkYXJrc2VhZ3JlZW46IDB4OGZiYzhmZmYsXG4gIGRhcmtzbGF0ZWJsdWU6IDB4NDgzZDhiZmYsXG4gIGRhcmtzbGF0ZWdyYXk6IDB4MmY0ZjRmZmYsXG4gIGRhcmtzbGF0ZWdyZXk6IDB4MmY0ZjRmZmYsXG4gIGRhcmt0dXJxdW9pc2U6IDB4MDBjZWQxZmYsXG4gIGRhcmt2aW9sZXQ6IDB4OTQwMGQzZmYsXG4gIGRlZXBwaW5rOiAweGZmMTQ5M2ZmLFxuICBkZWVwc2t5Ymx1ZTogMHgwMGJmZmZmZixcbiAgZGltZ3JheTogMHg2OTY5NjlmZixcbiAgZGltZ3JleTogMHg2OTY5NjlmZixcbiAgZG9kZ2VyYmx1ZTogMHgxZTkwZmZmZixcbiAgZmlyZWJyaWNrOiAweGIyMjIyMmZmLFxuICBmbG9yYWx3aGl0ZTogMHhmZmZhZjBmZixcbiAgZm9yZXN0Z3JlZW46IDB4MjI4YjIyZmYsXG4gIGZ1Y2hzaWE6IDB4ZmYwMGZmZmYsXG4gIGdhaW5zYm9ybzogMHhkY2RjZGNmZixcbiAgZ2hvc3R3aGl0ZTogMHhmOGY4ZmZmZixcbiAgZ29sZDogMHhmZmQ3MDBmZixcbiAgZ29sZGVucm9kOiAweGRhYTUyMGZmLFxuICBncmF5OiAweDgwODA4MGZmLFxuICBncmVlbjogMHgwMDgwMDBmZixcbiAgZ3JlZW55ZWxsb3c6IDB4YWRmZjJmZmYsXG4gIGdyZXk6IDB4ODA4MDgwZmYsXG4gIGhvbmV5ZGV3OiAweGYwZmZmMGZmLFxuICBob3RwaW5rOiAweGZmNjliNGZmLFxuICBpbmRpYW5yZWQ6IDB4Y2Q1YzVjZmYsXG4gIGluZGlnbzogMHg0YjAwODJmZixcbiAgaXZvcnk6IDB4ZmZmZmYwZmYsXG4gIGtoYWtpOiAweGYwZTY4Y2ZmLFxuICBsYXZlbmRlcjogMHhlNmU2ZmFmZixcbiAgbGF2ZW5kZXJibHVzaDogMHhmZmYwZjVmZixcbiAgbGF3bmdyZWVuOiAweDdjZmMwMGZmLFxuICBsZW1vbmNoaWZmb246IDB4ZmZmYWNkZmYsXG4gIGxpZ2h0Ymx1ZTogMHhhZGQ4ZTZmZixcbiAgbGlnaHRjb3JhbDogMHhmMDgwODBmZixcbiAgbGlnaHRjeWFuOiAweGUwZmZmZmZmLFxuICBsaWdodGdvbGRlbnJvZHllbGxvdzogMHhmYWZhZDJmZixcbiAgbGlnaHRncmF5OiAweGQzZDNkM2ZmLFxuICBsaWdodGdyZWVuOiAweDkwZWU5MGZmLFxuICBsaWdodGdyZXk6IDB4ZDNkM2QzZmYsXG4gIGxpZ2h0cGluazogMHhmZmI2YzFmZixcbiAgbGlnaHRzYWxtb246IDB4ZmZhMDdhZmYsXG4gIGxpZ2h0c2VhZ3JlZW46IDB4MjBiMmFhZmYsXG4gIGxpZ2h0c2t5Ymx1ZTogMHg4N2NlZmFmZixcbiAgbGlnaHRzbGF0ZWdyYXk6IDB4Nzc4ODk5ZmYsXG4gIGxpZ2h0c2xhdGVncmV5OiAweDc3ODg5OWZmLFxuICBsaWdodHN0ZWVsYmx1ZTogMHhiMGM0ZGVmZixcbiAgbGlnaHR5ZWxsb3c6IDB4ZmZmZmUwZmYsXG4gIGxpbWU6IDB4MDBmZjAwZmYsXG4gIGxpbWVncmVlbjogMHgzMmNkMzJmZixcbiAgbGluZW46IDB4ZmFmMGU2ZmYsXG4gIG1hZ2VudGE6IDB4ZmYwMGZmZmYsXG4gIG1hcm9vbjogMHg4MDAwMDBmZixcbiAgbWVkaXVtYXF1YW1hcmluZTogMHg2NmNkYWFmZixcbiAgbWVkaXVtYmx1ZTogMHgwMDAwY2RmZixcbiAgbWVkaXVtb3JjaGlkOiAweGJhNTVkM2ZmLFxuICBtZWRpdW1wdXJwbGU6IDB4OTM3MGRiZmYsXG4gIG1lZGl1bXNlYWdyZWVuOiAweDNjYjM3MWZmLFxuICBtZWRpdW1zbGF0ZWJsdWU6IDB4N2I2OGVlZmYsXG4gIG1lZGl1bXNwcmluZ2dyZWVuOiAweDAwZmE5YWZmLFxuICBtZWRpdW10dXJxdW9pc2U6IDB4NDhkMWNjZmYsXG4gIG1lZGl1bXZpb2xldHJlZDogMHhjNzE1ODVmZixcbiAgbWlkbmlnaHRibHVlOiAweDE5MTk3MGZmLFxuICBtaW50Y3JlYW06IDB4ZjVmZmZhZmYsXG4gIG1pc3R5cm9zZTogMHhmZmU0ZTFmZixcbiAgbW9jY2FzaW46IDB4ZmZlNGI1ZmYsXG4gIG5hdmFqb3doaXRlOiAweGZmZGVhZGZmLFxuICBuYXZ5OiAweDAwMDA4MGZmLFxuICBvbGRsYWNlOiAweGZkZjVlNmZmLFxuICBvbGl2ZTogMHg4MDgwMDBmZixcbiAgb2xpdmVkcmFiOiAweDZiOGUyM2ZmLFxuICBvcmFuZ2U6IDB4ZmZhNTAwZmYsXG4gIG9yYW5nZXJlZDogMHhmZjQ1MDBmZixcbiAgb3JjaGlkOiAweGRhNzBkNmZmLFxuICBwYWxlZ29sZGVucm9kOiAweGVlZThhYWZmLFxuICBwYWxlZ3JlZW46IDB4OThmYjk4ZmYsXG4gIHBhbGV0dXJxdW9pc2U6IDB4YWZlZWVlZmYsXG4gIHBhbGV2aW9sZXRyZWQ6IDB4ZGI3MDkzZmYsXG4gIHBhcGF5YXdoaXA6IDB4ZmZlZmQ1ZmYsXG4gIHBlYWNocHVmZjogMHhmZmRhYjlmZixcbiAgcGVydTogMHhjZDg1M2ZmZixcbiAgcGluazogMHhmZmMwY2JmZixcbiAgcGx1bTogMHhkZGEwZGRmZixcbiAgcG93ZGVyYmx1ZTogMHhiMGUwZTZmZixcbiAgcHVycGxlOiAweDgwMDA4MGZmLFxuICByZWJlY2NhcHVycGxlOiAweDY2MzM5OWZmLFxuICByZWQ6IDB4ZmYwMDAwZmYsXG4gIHJvc3licm93bjogMHhiYzhmOGZmZixcbiAgcm95YWxibHVlOiAweDQxNjllMWZmLFxuICBzYWRkbGVicm93bjogMHg4YjQ1MTNmZixcbiAgc2FsbW9uOiAweGZhODA3MmZmLFxuICBzYW5keWJyb3duOiAweGY0YTQ2MGZmLFxuICBzZWFncmVlbjogMHgyZThiNTdmZixcbiAgc2Vhc2hlbGw6IDB4ZmZmNWVlZmYsXG4gIHNpZW5uYTogMHhhMDUyMmRmZixcbiAgc2lsdmVyOiAweGMwYzBjMGZmLFxuICBza3libHVlOiAweDg3Y2VlYmZmLFxuICBzbGF0ZWJsdWU6IDB4NmE1YWNkZmYsXG4gIHNsYXRlZ3JheTogMHg3MDgwOTBmZixcbiAgc2xhdGVncmV5OiAweDcwODA5MGZmLFxuICBzbm93OiAweGZmZmFmYWZmLFxuICBzcHJpbmdncmVlbjogMHgwMGZmN2ZmZixcbiAgc3RlZWxibHVlOiAweDQ2ODJiNGZmLFxuICB0YW46IDB4ZDJiNDhjZmYsXG4gIHRlYWw6IDB4MDA4MDgwZmYsXG4gIHRoaXN0bGU6IDB4ZDhiZmQ4ZmYsXG4gIHRvbWF0bzogMHhmZjYzNDdmZixcbiAgdHVycXVvaXNlOiAweDQwZTBkMGZmLFxuICB2aW9sZXQ6IDB4ZWU4MmVlZmYsXG4gIHdoZWF0OiAweGY1ZGViM2ZmLFxuICB3aGl0ZTogMHhmZmZmZmZmZixcbiAgd2hpdGVzbW9rZTogMHhmNWY1ZjVmZixcbiAgeWVsbG93OiAweGZmZmYwMGZmLFxuICB5ZWxsb3dncmVlbjogMHg5YWNkMzJmZlxufTtcblxuY2xhc3MgSW50ZXJwb2xhdGlvbiB7XG4gIC8vIERlZmF1bHQgY29uZmlnID0gY29uZmlnLCBhcmdzXG4gIC8vIFNob3J0IGNvbmZpZyAgID0gcmFuZ2UsIG91dHB1dCwgZXh0cmFwb2xhdGVcbiAgc3RhdGljIGNyZWF0ZShjb25maWcsIG91dHB1dCwgZXh0cmEpIHtcbiAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ2Z1bmN0aW9uJykgcmV0dXJuIGNvbmZpZztlbHNlIGlmIChpbnRlcnBvbGF0aW9uICYmIGNvbmZpZy5vdXRwdXQgJiYgdHlwZW9mIGNvbmZpZy5vdXRwdXRbMF0gPT09ICdzdHJpbmcnKSByZXR1cm4gaW50ZXJwb2xhdGlvbihjb25maWcpO2Vsc2UgaWYgKEFycmF5LmlzQXJyYXkoY29uZmlnKSkgcmV0dXJuIEludGVycG9sYXRpb24uY3JlYXRlKHtcbiAgICAgIHJhbmdlOiBjb25maWcsXG4gICAgICBvdXRwdXQsXG4gICAgICBleHRyYXBvbGF0ZTogZXh0cmEgfHwgJ2V4dGVuZCdcbiAgICB9KTtcbiAgICBsZXQgb3V0cHV0UmFuZ2UgPSBjb25maWcub3V0cHV0O1xuICAgIGxldCBpbnB1dFJhbmdlID0gY29uZmlnLnJhbmdlIHx8IFswLCAxXTtcblxuICAgIGxldCBlYXNpbmcgPSBjb25maWcuZWFzaW5nIHx8ICh0ID0+IHQpO1xuXG4gICAgbGV0IGV4dHJhcG9sYXRlTGVmdCA9ICdleHRlbmQnO1xuICAgIGxldCBtYXAgPSBjb25maWcubWFwO1xuICAgIGlmIChjb25maWcuZXh0cmFwb2xhdGVMZWZ0ICE9PSB1bmRlZmluZWQpIGV4dHJhcG9sYXRlTGVmdCA9IGNvbmZpZy5leHRyYXBvbGF0ZUxlZnQ7ZWxzZSBpZiAoY29uZmlnLmV4dHJhcG9sYXRlICE9PSB1bmRlZmluZWQpIGV4dHJhcG9sYXRlTGVmdCA9IGNvbmZpZy5leHRyYXBvbGF0ZTtcbiAgICBsZXQgZXh0cmFwb2xhdGVSaWdodCA9ICdleHRlbmQnO1xuICAgIGlmIChjb25maWcuZXh0cmFwb2xhdGVSaWdodCAhPT0gdW5kZWZpbmVkKSBleHRyYXBvbGF0ZVJpZ2h0ID0gY29uZmlnLmV4dHJhcG9sYXRlUmlnaHQ7ZWxzZSBpZiAoY29uZmlnLmV4dHJhcG9sYXRlICE9PSB1bmRlZmluZWQpIGV4dHJhcG9sYXRlUmlnaHQgPSBjb25maWcuZXh0cmFwb2xhdGU7XG4gICAgcmV0dXJuIGlucHV0ID0+IHtcbiAgICAgIGxldCByYW5nZSA9IGZpbmRSYW5nZShpbnB1dCwgaW5wdXRSYW5nZSk7XG4gICAgICByZXR1cm4gaW50ZXJwb2xhdGUoaW5wdXQsIGlucHV0UmFuZ2VbcmFuZ2VdLCBpbnB1dFJhbmdlW3JhbmdlICsgMV0sIG91dHB1dFJhbmdlW3JhbmdlXSwgb3V0cHV0UmFuZ2VbcmFuZ2UgKyAxXSwgZWFzaW5nLCBleHRyYXBvbGF0ZUxlZnQsIGV4dHJhcG9sYXRlUmlnaHQsIG1hcCk7XG4gICAgfTtcbiAgfVxuXG59XG5cbmZ1bmN0aW9uIGludGVycG9sYXRlKGlucHV0LCBpbnB1dE1pbiwgaW5wdXRNYXgsIG91dHB1dE1pbiwgb3V0cHV0TWF4LCBlYXNpbmcsIGV4dHJhcG9sYXRlTGVmdCwgZXh0cmFwb2xhdGVSaWdodCwgbWFwKSB7XG4gIGxldCByZXN1bHQgPSBtYXAgPyBtYXAoaW5wdXQpIDogaW5wdXQ7IC8vIEV4dHJhcG9sYXRlXG5cbiAgaWYgKHJlc3VsdCA8IGlucHV0TWluKSB7XG4gICAgaWYgKGV4dHJhcG9sYXRlTGVmdCA9PT0gJ2lkZW50aXR5JykgcmV0dXJuIHJlc3VsdDtlbHNlIGlmIChleHRyYXBvbGF0ZUxlZnQgPT09ICdjbGFtcCcpIHJlc3VsdCA9IGlucHV0TWluO1xuICB9XG5cbiAgaWYgKHJlc3VsdCA+IGlucHV0TWF4KSB7XG4gICAgaWYgKGV4dHJhcG9sYXRlUmlnaHQgPT09ICdpZGVudGl0eScpIHJldHVybiByZXN1bHQ7ZWxzZSBpZiAoZXh0cmFwb2xhdGVSaWdodCA9PT0gJ2NsYW1wJykgcmVzdWx0ID0gaW5wdXRNYXg7XG4gIH1cblxuICBpZiAob3V0cHV0TWluID09PSBvdXRwdXRNYXgpIHJldHVybiBvdXRwdXRNaW47XG4gIGlmIChpbnB1dE1pbiA9PT0gaW5wdXRNYXgpIHJldHVybiBpbnB1dCA8PSBpbnB1dE1pbiA/IG91dHB1dE1pbiA6IG91dHB1dE1heDsgLy8gSW5wdXQgUmFuZ2VcblxuICBpZiAoaW5wdXRNaW4gPT09IC1JbmZpbml0eSkgcmVzdWx0ID0gLXJlc3VsdDtlbHNlIGlmIChpbnB1dE1heCA9PT0gSW5maW5pdHkpIHJlc3VsdCA9IHJlc3VsdCAtIGlucHV0TWluO2Vsc2UgcmVzdWx0ID0gKHJlc3VsdCAtIGlucHV0TWluKSAvIChpbnB1dE1heCAtIGlucHV0TWluKTsgLy8gRWFzaW5nXG5cbiAgcmVzdWx0ID0gZWFzaW5nKHJlc3VsdCk7IC8vIE91dHB1dCBSYW5nZVxuXG4gIGlmIChvdXRwdXRNaW4gPT09IC1JbmZpbml0eSkgcmVzdWx0ID0gLXJlc3VsdDtlbHNlIGlmIChvdXRwdXRNYXggPT09IEluZmluaXR5KSByZXN1bHQgPSByZXN1bHQgKyBvdXRwdXRNaW47ZWxzZSByZXN1bHQgPSByZXN1bHQgKiAob3V0cHV0TWF4IC0gb3V0cHV0TWluKSArIG91dHB1dE1pbjtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gZmluZFJhbmdlKGlucHV0LCBpbnB1dFJhbmdlKSB7XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgaW5wdXRSYW5nZS5sZW5ndGggLSAxOyArK2kpIGlmIChpbnB1dFJhbmdlW2ldID49IGlucHV0KSBicmVhaztcblxuICByZXR1cm4gaSAtIDE7XG59XG5cbi8vIGNvbnN0IElOVEVHRVIgPSAnWy0rXT9cXFxcZCsnO1xuY29uc3QgTlVNQkVSID0gJ1stK10/XFxcXGQqXFxcXC4/XFxcXGQrJztcbmNvbnN0IFBFUkNFTlRBR0UgPSBOVU1CRVIgKyAnJSc7XG5cbmZ1bmN0aW9uIGNhbGwoKSB7XG4gIHJldHVybiAnXFxcXChcXFxccyooJyArIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykuam9pbignKVxcXFxzKixcXFxccyooJykgKyAnKVxcXFxzKlxcXFwpJztcbn1cblxuY29uc3QgcmdiID0gbmV3IFJlZ0V4cCgncmdiJyArIGNhbGwoTlVNQkVSLCBOVU1CRVIsIE5VTUJFUikpO1xuY29uc3QgcmdiYSA9IG5ldyBSZWdFeHAoJ3JnYmEnICsgY2FsbChOVU1CRVIsIE5VTUJFUiwgTlVNQkVSLCBOVU1CRVIpKTtcbmNvbnN0IGhzbCA9IG5ldyBSZWdFeHAoJ2hzbCcgKyBjYWxsKE5VTUJFUiwgUEVSQ0VOVEFHRSwgUEVSQ0VOVEFHRSkpO1xuY29uc3QgaHNsYSA9IG5ldyBSZWdFeHAoJ2hzbGEnICsgY2FsbChOVU1CRVIsIFBFUkNFTlRBR0UsIFBFUkNFTlRBR0UsIE5VTUJFUikpO1xuY29uc3QgaGV4MyA9IC9eIyhbMC05YS1mQS1GXXsxfSkoWzAtOWEtZkEtRl17MX0pKFswLTlhLWZBLUZdezF9KSQvO1xuY29uc3QgaGV4NCA9IC9eIyhbMC05YS1mQS1GXXsxfSkoWzAtOWEtZkEtRl17MX0pKFswLTlhLWZBLUZdezF9KShbMC05YS1mQS1GXXsxfSkkLztcbmNvbnN0IGhleDYgPSAvXiMoWzAtOWEtZkEtRl17Nn0pJC87XG5jb25zdCBoZXg4ID0gL14jKFswLTlhLWZBLUZdezh9KSQvO1xuXG4vKlxuaHR0cHM6Ly9naXRodWIuY29tL3JlYWN0LWNvbW11bml0eS9ub3JtYWxpemUtY3NzLWNvbG9yXG5cbkJTRCAzLUNsYXVzZSBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgMjAxNiwgUmVhY3QgQ29tbXVuaXR5XG5BbGwgcmlnaHRzIHJlc2VydmVkLlxuXG5SZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXRcbm1vZGlmaWNhdGlvbiwgYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmUgbWV0OlxuXG4qIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSwgdGhpc1xuICBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci5cblxuKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsXG4gIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIgaW4gdGhlIGRvY3VtZW50YXRpb25cbiAgYW5kL29yIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZCB3aXRoIHRoZSBkaXN0cmlidXRpb24uXG5cbiogTmVpdGhlciB0aGUgbmFtZSBvZiB0aGUgY29weXJpZ2h0IGhvbGRlciBub3IgdGhlIG5hbWVzIG9mIGl0c1xuICBjb250cmlidXRvcnMgbWF5IGJlIHVzZWQgdG8gZW5kb3JzZSBvciBwcm9tb3RlIHByb2R1Y3RzIGRlcml2ZWQgZnJvbVxuICB0aGlzIHNvZnR3YXJlIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxuXG5USElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTIFwiQVMgSVNcIlxuQU5EIEFOWSBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFRIRVxuSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQVJFXG5ESVNDTEFJTUVELiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUIEhPTERFUiBPUiBDT05UUklCVVRPUlMgQkUgTElBQkxFXG5GT1IgQU5ZIERJUkVDVCwgSU5ESVJFQ1QsIElOQ0lERU5UQUwsIFNQRUNJQUwsIEVYRU1QTEFSWSwgT1IgQ09OU0VRVUVOVElBTFxuREFNQUdFUyAoSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GIFNVQlNUSVRVVEUgR09PRFMgT1JcblNFUlZJQ0VTOyBMT1NTIE9GIFVTRSwgREFUQSwgT1IgUFJPRklUUzsgT1IgQlVTSU5FU1MgSU5URVJSVVBUSU9OKSBIT1dFVkVSXG5DQVVTRUQgQU5EIE9OIEFOWSBUSEVPUlkgT0YgTElBQklMSVRZLCBXSEVUSEVSIElOIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLFxuT1IgVE9SVCAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKSBBUklTSU5HIElOIEFOWSBXQVkgT1VUIE9GIFRIRSBVU0Vcbk9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEUgUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG4qL1xuZnVuY3Rpb24gbm9ybWFsaXplQ29sb3IoY29sb3IpIHtcbiAgbGV0IG1hdGNoO1xuXG4gIGlmICh0eXBlb2YgY29sb3IgPT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIGNvbG9yID4+PiAwID09PSBjb2xvciAmJiBjb2xvciA+PSAwICYmIGNvbG9yIDw9IDB4ZmZmZmZmZmYgPyBjb2xvciA6IG51bGw7XG4gIH0gLy8gT3JkZXJlZCBiYXNlZCBvbiBvY2N1cnJlbmNlcyBvbiBGYWNlYm9vayBjb2RlYmFzZVxuXG5cbiAgaWYgKG1hdGNoID0gaGV4Ni5leGVjKGNvbG9yKSkgcmV0dXJuIHBhcnNlSW50KG1hdGNoWzFdICsgJ2ZmJywgMTYpID4+PiAwO1xuICBpZiAoY29sb3JzLmhhc093blByb3BlcnR5KGNvbG9yKSkgcmV0dXJuIGNvbG9yc1tjb2xvcl07XG5cbiAgaWYgKG1hdGNoID0gcmdiLmV4ZWMoY29sb3IpKSB7XG4gICAgcmV0dXJuIChwYXJzZTI1NShtYXRjaFsxXSkgPDwgMjQgfCAvLyByXG4gICAgcGFyc2UyNTUobWF0Y2hbMl0pIDw8IDE2IHwgLy8gZ1xuICAgIHBhcnNlMjU1KG1hdGNoWzNdKSA8PCA4IHwgLy8gYlxuICAgIDB4MDAwMDAwZmYpID4+PiAvLyBhXG4gICAgMDtcbiAgfVxuXG4gIGlmIChtYXRjaCA9IHJnYmEuZXhlYyhjb2xvcikpIHtcbiAgICByZXR1cm4gKHBhcnNlMjU1KG1hdGNoWzFdKSA8PCAyNCB8IC8vIHJcbiAgICBwYXJzZTI1NShtYXRjaFsyXSkgPDwgMTYgfCAvLyBnXG4gICAgcGFyc2UyNTUobWF0Y2hbM10pIDw8IDggfCAvLyBiXG4gICAgcGFyc2UxKG1hdGNoWzRdKSkgPj4+IC8vIGFcbiAgICAwO1xuICB9XG5cbiAgaWYgKG1hdGNoID0gaGV4My5leGVjKGNvbG9yKSkge1xuICAgIHJldHVybiBwYXJzZUludChtYXRjaFsxXSArIG1hdGNoWzFdICsgLy8gclxuICAgIG1hdGNoWzJdICsgbWF0Y2hbMl0gKyAvLyBnXG4gICAgbWF0Y2hbM10gKyBtYXRjaFszXSArIC8vIGJcbiAgICAnZmYnLCAvLyBhXG4gICAgMTYpID4+PiAwO1xuICB9IC8vIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtY29sb3ItNC8jaGV4LW5vdGF0aW9uXG5cblxuICBpZiAobWF0Y2ggPSBoZXg4LmV4ZWMoY29sb3IpKSByZXR1cm4gcGFyc2VJbnQobWF0Y2hbMV0sIDE2KSA+Pj4gMDtcblxuICBpZiAobWF0Y2ggPSBoZXg0LmV4ZWMoY29sb3IpKSB7XG4gICAgcmV0dXJuIHBhcnNlSW50KG1hdGNoWzFdICsgbWF0Y2hbMV0gKyAvLyByXG4gICAgbWF0Y2hbMl0gKyBtYXRjaFsyXSArIC8vIGdcbiAgICBtYXRjaFszXSArIG1hdGNoWzNdICsgLy8gYlxuICAgIG1hdGNoWzRdICsgbWF0Y2hbNF0sIC8vIGFcbiAgICAxNikgPj4+IDA7XG4gIH1cblxuICBpZiAobWF0Y2ggPSBoc2wuZXhlYyhjb2xvcikpIHtcbiAgICByZXR1cm4gKGhzbFRvUmdiKHBhcnNlMzYwKG1hdGNoWzFdKSwgLy8gaFxuICAgIHBhcnNlUGVyY2VudGFnZShtYXRjaFsyXSksIC8vIHNcbiAgICBwYXJzZVBlcmNlbnRhZ2UobWF0Y2hbM10pIC8vIGxcbiAgICApIHwgMHgwMDAwMDBmZikgPj4+IC8vIGFcbiAgICAwO1xuICB9XG5cbiAgaWYgKG1hdGNoID0gaHNsYS5leGVjKGNvbG9yKSkge1xuICAgIHJldHVybiAoaHNsVG9SZ2IocGFyc2UzNjAobWF0Y2hbMV0pLCAvLyBoXG4gICAgcGFyc2VQZXJjZW50YWdlKG1hdGNoWzJdKSwgLy8gc1xuICAgIHBhcnNlUGVyY2VudGFnZShtYXRjaFszXSkgLy8gbFxuICAgICkgfCBwYXJzZTEobWF0Y2hbNF0pKSA+Pj4gLy8gYVxuICAgIDA7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuZnVuY3Rpb24gaHVlMnJnYihwLCBxLCB0KSB7XG4gIGlmICh0IDwgMCkgdCArPSAxO1xuICBpZiAodCA+IDEpIHQgLT0gMTtcbiAgaWYgKHQgPCAxIC8gNikgcmV0dXJuIHAgKyAocSAtIHApICogNiAqIHQ7XG4gIGlmICh0IDwgMSAvIDIpIHJldHVybiBxO1xuICBpZiAodCA8IDIgLyAzKSByZXR1cm4gcCArIChxIC0gcCkgKiAoMiAvIDMgLSB0KSAqIDY7XG4gIHJldHVybiBwO1xufVxuXG5mdW5jdGlvbiBoc2xUb1JnYihoLCBzLCBsKSB7XG4gIGNvbnN0IHEgPSBsIDwgMC41ID8gbCAqICgxICsgcykgOiBsICsgcyAtIGwgKiBzO1xuICBjb25zdCBwID0gMiAqIGwgLSBxO1xuICBjb25zdCByID0gaHVlMnJnYihwLCBxLCBoICsgMSAvIDMpO1xuICBjb25zdCBnID0gaHVlMnJnYihwLCBxLCBoKTtcbiAgY29uc3QgYiA9IGh1ZTJyZ2IocCwgcSwgaCAtIDEgLyAzKTtcbiAgcmV0dXJuIE1hdGgucm91bmQociAqIDI1NSkgPDwgMjQgfCBNYXRoLnJvdW5kKGcgKiAyNTUpIDw8IDE2IHwgTWF0aC5yb3VuZChiICogMjU1KSA8PCA4O1xufVxuXG5mdW5jdGlvbiBwYXJzZTI1NShzdHIpIHtcbiAgY29uc3QgaW50ID0gcGFyc2VJbnQoc3RyLCAxMCk7XG4gIGlmIChpbnQgPCAwKSByZXR1cm4gMDtcbiAgaWYgKGludCA+IDI1NSkgcmV0dXJuIDI1NTtcbiAgcmV0dXJuIGludDtcbn1cblxuZnVuY3Rpb24gcGFyc2UzNjAoc3RyKSB7XG4gIGNvbnN0IGludCA9IHBhcnNlRmxvYXQoc3RyKTtcbiAgcmV0dXJuIChpbnQgJSAzNjAgKyAzNjApICUgMzYwIC8gMzYwO1xufVxuXG5mdW5jdGlvbiBwYXJzZTEoc3RyKSB7XG4gIGNvbnN0IG51bSA9IHBhcnNlRmxvYXQoc3RyKTtcbiAgaWYgKG51bSA8IDApIHJldHVybiAwO1xuICBpZiAobnVtID4gMSkgcmV0dXJuIDI1NTtcbiAgcmV0dXJuIE1hdGgucm91bmQobnVtICogMjU1KTtcbn1cblxuZnVuY3Rpb24gcGFyc2VQZXJjZW50YWdlKHN0cikge1xuICAvLyBwYXJzZUZsb2F0IGNvbnZlbmllbnRseSBpZ25vcmVzIHRoZSBmaW5hbCAlXG4gIGNvbnN0IGludCA9IHBhcnNlRmxvYXQoc3RyKTtcbiAgaWYgKGludCA8IDApIHJldHVybiAwO1xuICBpZiAoaW50ID4gMTAwKSByZXR1cm4gMTtcbiAgcmV0dXJuIGludCAvIDEwMDtcbn1cblxuZnVuY3Rpb24gY29sb3JUb1JnYmEoaW5wdXQpIHtcbiAgbGV0IGludDMyQ29sb3IgPSBub3JtYWxpemVDb2xvcihpbnB1dCk7XG4gIGlmIChpbnQzMkNvbG9yID09PSBudWxsKSByZXR1cm4gaW5wdXQ7XG4gIGludDMyQ29sb3IgPSBpbnQzMkNvbG9yIHx8IDA7XG4gIGxldCByID0gKGludDMyQ29sb3IgJiAweGZmMDAwMDAwKSA+Pj4gMjQ7XG4gIGxldCBnID0gKGludDMyQ29sb3IgJiAweDAwZmYwMDAwKSA+Pj4gMTY7XG4gIGxldCBiID0gKGludDMyQ29sb3IgJiAweDAwMDBmZjAwKSA+Pj4gODtcbiAgbGV0IGEgPSAoaW50MzJDb2xvciAmIDB4MDAwMDAwZmYpIC8gMjU1O1xuICByZXR1cm4gYHJnYmEoJHtyfSwgJHtnfSwgJHtifSwgJHthfSlgO1xufSAvLyBQcm9ibGVtOiBodHRwczovL2dpdGh1Yi5jb20vYW5pbWF0ZWRqcy9hbmltYXRlZC9wdWxsLzEwMlxuLy8gU29sdXRpb246IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzYzODU2NS9wYXJzaW5nLXNjaWVudGlmaWMtbm90YXRpb24tc2Vuc2libHkvNjU4NjYyXG5cblxuY29uc3Qgc3RyaW5nU2hhcGVSZWdleCA9IC9bK1xcLV0/KD86MHxbMS05XVxcZCopKD86XFwuXFxkKik/KD86W2VFXVsrXFwtXT9cXGQrKT8vZzsgLy8gQ292ZXJzIHJnYiwgcmdiYSwgaHNsLCBoc2xhXG4vLyBUYWtlbiBmcm9tIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL29sbW9rcmFtZXIvODJjY2NlNjczZjg2ZGI3Y2RhNWVcblxuY29uc3QgY29sb3JSZWdleCA9IC8oIyg/OlswLTlhLWZdezJ9KXsyLDR9fCgjWzAtOWEtZl17M30pfChyZ2J8aHNsKWE/XFwoKC0/XFxkKyU/WyxcXHNdKyl7MiwzfVxccypbXFxkXFwuXSslP1xcKSkvZ2k7IC8vIENvdmVycyBjb2xvciBuYW1lcyAodHJhbnNwYXJlbnQsIGJsdWUsIGV0Yy4pXG5cbmNvbnN0IGNvbG9yTmFtZXNSZWdleCA9IG5ldyBSZWdFeHAoYCgke09iamVjdC5rZXlzKGNvbG9ycykuam9pbignfCcpfSlgLCAnZycpO1xuLyoqXG4gKiBTdXBwb3J0cyBzdHJpbmcgc2hhcGVzIGJ5IGV4dHJhY3RpbmcgbnVtYmVycyBzbyBuZXcgdmFsdWVzIGNhbiBiZSBjb21wdXRlZCxcbiAqIGFuZCByZWNvbWJpbmVzIHRob3NlIHZhbHVlcyBpbnRvIG5ldyBzdHJpbmdzIG9mIHRoZSBzYW1lIHNoYXBlLiAgU3VwcG9ydHNcbiAqIHRoaW5ncyBsaWtlOlxuICpcbiAqICAgcmdiYSgxMjMsIDQyLCA5OSwgMC4zNikgICAgICAgICAgIC8vIGNvbG9yc1xuICogICAtNDVkZWcgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdmFsdWVzIHdpdGggdW5pdHNcbiAqICAgMCAycHggMnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpIC8vIGJveCBzaGFkb3dzXG4gKi9cblxuZnVuY3Rpb24gY3JlYXRlSW50ZXJwb2xhdGlvbihjb25maWcpIHtcbiAgLy8gUmVwbGFjZSBjb2xvcnMgd2l0aCByZ2JhXG4gIGNvbnN0IG91dHB1dFJhbmdlID0gY29uZmlnLm91dHB1dC5tYXAocmFuZ2VWYWx1ZSA9PiByYW5nZVZhbHVlLnJlcGxhY2UoY29sb3JSZWdleCwgY29sb3JUb1JnYmEpKS5tYXAocmFuZ2VWYWx1ZSA9PiByYW5nZVZhbHVlLnJlcGxhY2UoY29sb3JOYW1lc1JlZ2V4LCBjb2xvclRvUmdiYSkpOyAvLyAtPlxuICAvLyBbXG4gIC8vICAgWzAsIDUwXSxcbiAgLy8gICBbMTAwLCAxNTBdLFxuICAvLyAgIFsyMDAsIDI1MF0sXG4gIC8vICAgWzAsIDAuNV0sXG4gIC8vIF1cblxuICBjb25zdCBvdXRwdXRSYW5nZXMgPSBvdXRwdXRSYW5nZVswXS5tYXRjaChzdHJpbmdTaGFwZVJlZ2V4KS5tYXAoKCkgPT4gW10pO1xuICBvdXRwdXRSYW5nZS5mb3JFYWNoKHZhbHVlID0+IHtcbiAgICB2YWx1ZS5tYXRjaChzdHJpbmdTaGFwZVJlZ2V4KS5mb3JFYWNoKChudW1iZXIsIGkpID0+IG91dHB1dFJhbmdlc1tpXS5wdXNoKCtudW1iZXIpKTtcbiAgfSk7XG4gIGNvbnN0IGludGVycG9sYXRpb25zID0gb3V0cHV0UmFuZ2VbMF0ubWF0Y2goc3RyaW5nU2hhcGVSZWdleCkubWFwKCh2YWx1ZSwgaSkgPT4ge1xuICAgIHJldHVybiBJbnRlcnBvbGF0aW9uLmNyZWF0ZShfZXh0ZW5kcyh7fSwgY29uZmlnLCB7XG4gICAgICBvdXRwdXQ6IG91dHB1dFJhbmdlc1tpXVxuICAgIH0pKTtcbiAgfSk7XG4gIHJldHVybiBpbnB1dCA9PiB7XG4gICAgbGV0IGkgPSAwO1xuICAgIHJldHVybiBvdXRwdXRSYW5nZVswXSAvLyAncmdiYSgwLCAxMDAsIDIwMCwgMCknXG4gICAgLy8gLT5cbiAgICAvLyAncmdiYSgke2ludGVycG9sYXRpb25zWzBdKGlucHV0KX0sICR7aW50ZXJwb2xhdGlvbnNbMV0oaW5wdXQpfSwgLi4uJ1xuICAgIC5yZXBsYWNlKHN0cmluZ1NoYXBlUmVnZXgsICgpID0+IGludGVycG9sYXRpb25zW2krK10oaW5wdXQpKSAvLyByZ2JhIHJlcXVpcmVzIHRoYXQgdGhlIHIsZyxiIGFyZSBpbnRlZ2Vycy4uLi4gc28gd2Ugd2FudCB0byByb3VuZCB0aGVtLCBidXQgd2UgKmRvbnQqIHdhbnQgdG9cbiAgICAvLyByb3VuZCB0aGUgb3BhY2l0eSAoNHRoIGNvbHVtbikuXG4gICAgLnJlcGxhY2UoL3JnYmFcXCgoWzAtOVxcLi1dKyksIChbMC05XFwuLV0rKSwgKFswLTlcXC4tXSspLCAoWzAtOVxcLi1dKylcXCkvZ2ksIChfLCBwMSwgcDIsIHAzLCBwNCkgPT4gYHJnYmEoJHtNYXRoLnJvdW5kKHAxKX0sICR7TWF0aC5yb3VuZChwMil9LCAke01hdGgucm91bmQocDMpfSwgJHtwNH0pYCk7XG4gIH07XG59XG5cbmNsYXNzIEFuaW1hdGVkSW50ZXJwb2xhdGlvbiBleHRlbmRzIEFuaW1hdGVkQXJyYXlXaXRoQ2hpbGRyZW4ge1xuICBjb25zdHJ1Y3RvcihwYXJlbnRzLCBfY29uZmlnLCBfYXJnKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuZ2V0VmFsdWUgPSAoKSA9PiB0aGlzLmNhbGMoLi4udGhpcy5wYXlsb2FkLm1hcCh2YWx1ZSA9PiB2YWx1ZS5nZXRWYWx1ZSgpKSk7XG5cbiAgICB0aGlzLnVwZGF0ZUNvbmZpZyA9IChjb25maWcsIGFyZykgPT4gdGhpcy5jYWxjID0gSW50ZXJwb2xhdGlvbi5jcmVhdGUoY29uZmlnLCBhcmcpO1xuXG4gICAgdGhpcy5pbnRlcnBvbGF0ZSA9IChjb25maWcsIGFyZykgPT4gbmV3IEFuaW1hdGVkSW50ZXJwb2xhdGlvbih0aGlzLCBjb25maWcsIGFyZyk7XG5cbiAgICB0aGlzLnBheWxvYWQgPSAvLyBBbmltYXRlZEFycmF5cyBzaG91bGQgdW5mb2xkLCBleGNlcHQgQW5pbWF0ZWRJbnRlcnBvbGF0aW9uIHdoaWNoIGlzIHRha2VuIGFzIGlzXG4gICAgcGFyZW50cyBpbnN0YW5jZW9mIEFuaW1hdGVkQXJyYXlXaXRoQ2hpbGRyZW4gJiYgIXBhcmVudHMudXBkYXRlQ29uZmlnID8gcGFyZW50cy5wYXlsb2FkIDogQXJyYXkuaXNBcnJheShwYXJlbnRzKSA/IHBhcmVudHMgOiBbcGFyZW50c107XG4gICAgdGhpcy5jYWxjID0gSW50ZXJwb2xhdGlvbi5jcmVhdGUoX2NvbmZpZywgX2FyZyk7XG4gIH1cblxufVxuY29uc3QgaW50ZXJwb2xhdGUkMSA9IChwYXJlbnRzLCBjb25maWcsIGFyZykgPT4gcGFyZW50cyAmJiBuZXcgQW5pbWF0ZWRJbnRlcnBvbGF0aW9uKHBhcmVudHMsIGNvbmZpZywgYXJnKTtcblxuLyoqXG4gKiBBbmltYXRlZCB3b3JrcyBieSBidWlsZGluZyBhIGRpcmVjdGVkIGFjeWNsaWMgZ3JhcGggb2YgZGVwZW5kZW5jaWVzXG4gKiB0cmFuc3BhcmVudGx5IHdoZW4geW91IHJlbmRlciB5b3VyIEFuaW1hdGVkIGNvbXBvbmVudHMuXG4gKlxuICogICAgICAgICAgICAgICBuZXcgQW5pbWF0ZWQuVmFsdWUoMClcbiAqICAgICAuaW50ZXJwb2xhdGUoKSAgICAgICAgLmludGVycG9sYXRlKCkgICAgbmV3IEFuaW1hdGVkLlZhbHVlKDEpXG4gKiAgICAgICAgIG9wYWNpdHkgICAgICAgICAgICAgICB0cmFuc2xhdGVZICAgICAgc2NhbGVcbiAqICAgICAgICAgIHN0eWxlICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybVxuICogICAgICAgICBWaWV3IzIzNCAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZVxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZpZXcjMTIzXG4gKlxuICogQSkgVG9wIERvd24gcGhhc2VcbiAqIFdoZW4gYW4gQW5pbWF0ZWQuVmFsdWUgaXMgdXBkYXRlZCwgd2UgcmVjdXJzaXZlbHkgZ28gZG93biB0aHJvdWdoIHRoaXNcbiAqIGdyYXBoIGluIG9yZGVyIHRvIGZpbmQgbGVhZiBub2RlczogdGhlIHZpZXdzIHRoYXQgd2UgZmxhZyBhcyBuZWVkaW5nXG4gKiBhbiB1cGRhdGUuXG4gKlxuICogQikgQm90dG9tIFVwIHBoYXNlXG4gKiBXaGVuIGEgdmlldyBpcyBmbGFnZ2VkIGFzIG5lZWRpbmcgYW4gdXBkYXRlLCB3ZSByZWN1cnNpdmVseSBnbyBiYWNrIHVwXG4gKiBpbiBvcmRlciB0byBidWlsZCB0aGUgbmV3IHZhbHVlIHRoYXQgaXQgbmVlZHMuIFRoZSByZWFzb24gd2h5IHdlIG5lZWRcbiAqIHRoaXMgdHdvLXBoYXNlcyBwcm9jZXNzIGlzIHRvIGRlYWwgd2l0aCBjb21wb3NpdGUgcHJvcHMgc3VjaCBhc1xuICogdHJhbnNmb3JtIHdoaWNoIGNhbiByZWNlaXZlIHZhbHVlcyBmcm9tIG11bHRpcGxlIHBhcmVudHMuXG4gKi9cblxuZnVuY3Rpb24gZmluZEFuaW1hdGVkU3R5bGVzKG5vZGUsIHN0eWxlcykge1xuICBpZiAodHlwZW9mIG5vZGUudXBkYXRlID09PSAnZnVuY3Rpb24nKSBzdHlsZXMuYWRkKG5vZGUpO2Vsc2Ugbm9kZS5nZXRDaGlsZHJlbigpLmZvckVhY2goY2hpbGQgPT4gZmluZEFuaW1hdGVkU3R5bGVzKGNoaWxkLCBzdHlsZXMpKTtcbn1cbi8qKlxuICogU3RhbmRhcmQgdmFsdWUgZm9yIGRyaXZpbmcgYW5pbWF0aW9ucy4gIE9uZSBgQW5pbWF0ZWQuVmFsdWVgIGNhbiBkcml2ZVxuICogbXVsdGlwbGUgcHJvcGVydGllcyBpbiBhIHN5bmNocm9uaXplZCBmYXNoaW9uLCBidXQgY2FuIG9ubHkgYmUgZHJpdmVuIGJ5IG9uZVxuICogbWVjaGFuaXNtIGF0IGEgdGltZS4gIFVzaW5nIGEgbmV3IG1lY2hhbmlzbSAoZS5nLiBzdGFydGluZyBhIG5ldyBhbmltYXRpb24sXG4gKiBvciBjYWxsaW5nIGBzZXRWYWx1ZWApIHdpbGwgc3RvcCBhbnkgcHJldmlvdXMgb25lcy5cbiAqL1xuXG5cbmNsYXNzIEFuaW1hdGVkVmFsdWUgZXh0ZW5kcyBBbmltYXRlZFdpdGhDaGlsZHJlbiB7XG4gIGNvbnN0cnVjdG9yKF92YWx1ZSkge1xuICAgIHZhciBfdGhpcztcblxuICAgIHN1cGVyKCk7XG4gICAgX3RoaXMgPSB0aGlzO1xuXG4gICAgdGhpcy5zZXRWYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSwgZmx1c2gpIHtcbiAgICAgIGlmIChmbHVzaCA9PT0gdm9pZCAwKSB7XG4gICAgICAgIGZsdXNoID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgX3RoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgIGlmIChmbHVzaCkgX3RoaXMuZmx1c2goKTtcbiAgICB9O1xuXG4gICAgdGhpcy5nZXRWYWx1ZSA9ICgpID0+IHRoaXMudmFsdWU7XG5cbiAgICB0aGlzLnVwZGF0ZVN0eWxlcyA9ICgpID0+IGZpbmRBbmltYXRlZFN0eWxlcyh0aGlzLCB0aGlzLmFuaW1hdGVkU3R5bGVzKTtcblxuICAgIHRoaXMudXBkYXRlVmFsdWUgPSB2YWx1ZSA9PiB0aGlzLmZsdXNoKHRoaXMudmFsdWUgPSB2YWx1ZSk7XG5cbiAgICB0aGlzLmludGVycG9sYXRlID0gKGNvbmZpZywgYXJnKSA9PiBuZXcgQW5pbWF0ZWRJbnRlcnBvbGF0aW9uKHRoaXMsIGNvbmZpZywgYXJnKTtcblxuICAgIHRoaXMudmFsdWUgPSBfdmFsdWU7XG4gICAgdGhpcy5hbmltYXRlZFN0eWxlcyA9IG5ldyBTZXQoKTtcbiAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICB0aGlzLnN0YXJ0UG9zaXRpb24gPSBfdmFsdWU7XG4gICAgdGhpcy5sYXN0UG9zaXRpb24gPSBfdmFsdWU7XG4gICAgdGhpcy5sYXN0VmVsb2NpdHkgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5sYXN0VGltZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmNvbnRyb2xsZXIgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBmbHVzaCgpIHtcbiAgICBpZiAodGhpcy5hbmltYXRlZFN0eWxlcy5zaXplID09PSAwKSB0aGlzLnVwZGF0ZVN0eWxlcygpO1xuICAgIHRoaXMuYW5pbWF0ZWRTdHlsZXMuZm9yRWFjaChhbmltYXRlZFN0eWxlID0+IGFuaW1hdGVkU3R5bGUudXBkYXRlKCkpO1xuICB9XG5cbiAgcHJlcGFyZShjb250cm9sbGVyKSB7XG4gICAgLy8gVmFsdWVzIHN0YXkgbG95YWwgdG8gdGhlaXIgb3JpZ2luYWwgY29udHJvbGxlciwgdGhpcyBpcyBhbHNvIGEgd2F5IHRvXG4gICAgLy8gZGV0ZWN0IHRyYWlsaW5nIHZhbHVlcyBvcmlnaW5hdGluZyBmcm9tIGEgZm9yZWlnbiBjb250cm9sbGVyXG4gICAgaWYgKHRoaXMuY29udHJvbGxlciA9PT0gdW5kZWZpbmVkKSB0aGlzLmNvbnRyb2xsZXIgPSBjb250cm9sbGVyO1xuXG4gICAgaWYgKHRoaXMuY29udHJvbGxlciA9PT0gY29udHJvbGxlcikge1xuICAgICAgdGhpcy5zdGFydFBvc2l0aW9uID0gdGhpcy52YWx1ZTtcbiAgICAgIHRoaXMubGFzdFBvc2l0aW9uID0gdGhpcy52YWx1ZTtcbiAgICAgIHRoaXMubGFzdFZlbG9jaXR5ID0gY29udHJvbGxlci5pc0FjdGl2ZSA/IHRoaXMubGFzdFZlbG9jaXR5IDogdW5kZWZpbmVkO1xuICAgICAgdGhpcy5sYXN0VGltZSA9IGNvbnRyb2xsZXIuaXNBY3RpdmUgPyB0aGlzLmxhc3RUaW1lIDogdW5kZWZpbmVkO1xuICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICB0aGlzLmFuaW1hdGVkU3R5bGVzLmNsZWFyKCk7XG4gICAgfVxuICB9XG5cbn1cblxuY2xhc3MgQW5pbWF0ZWRBcnJheSBleHRlbmRzIEFuaW1hdGVkQXJyYXlXaXRoQ2hpbGRyZW4ge1xuICBjb25zdHJ1Y3RvcihhcnJheSkge1xuICAgIHZhciBfdGhpcztcblxuICAgIHN1cGVyKCk7XG4gICAgX3RoaXMgPSB0aGlzO1xuXG4gICAgdGhpcy5zZXRWYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSwgZmx1c2gpIHtcbiAgICAgIGlmIChmbHVzaCA9PT0gdm9pZCAwKSB7XG4gICAgICAgIGZsdXNoID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPT09IF90aGlzLnBheWxvYWQubGVuZ3RoKSB2YWx1ZS5mb3JFYWNoKCh2LCBpKSA9PiBfdGhpcy5wYXlsb2FkW2ldLnNldFZhbHVlKHYsIGZsdXNoKSk7XG4gICAgICB9IGVsc2UgX3RoaXMucGF5bG9hZC5mb3JFYWNoKCh2LCBpKSA9PiBfdGhpcy5wYXlsb2FkW2ldLnNldFZhbHVlKHZhbHVlLCBmbHVzaCkpO1xuICAgIH07XG5cbiAgICB0aGlzLmdldFZhbHVlID0gKCkgPT4gdGhpcy5wYXlsb2FkLm1hcCh2ID0+IHYuZ2V0VmFsdWUoKSk7XG5cbiAgICB0aGlzLmludGVycG9sYXRlID0gKGNvbmZpZywgYXJnKSA9PiBuZXcgQW5pbWF0ZWRJbnRlcnBvbGF0aW9uKHRoaXMsIGNvbmZpZywgYXJnKTtcblxuICAgIHRoaXMucGF5bG9hZCA9IGFycmF5Lm1hcChuID0+IG5ldyBBbmltYXRlZFZhbHVlKG4pKTtcbiAgfVxuXG59XG5cbmZ1bmN0aW9uIHdpdGhEZWZhdWx0KHZhbHVlLCBkZWZhdWx0VmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09IG51bGwgPyBkZWZhdWx0VmFsdWUgOiB2YWx1ZTtcbn1cbmZ1bmN0aW9uIHRvQXJyYXkoYSkge1xuICByZXR1cm4gYSAhPT0gdm9pZCAwID8gQXJyYXkuaXNBcnJheShhKSA/IGEgOiBbYV0gOiBbXTtcbn1cbmZ1bmN0aW9uIHNoYWxsb3dFcXVhbChhLCBiKSB7XG4gIGlmICh0eXBlb2YgYSAhPT0gdHlwZW9mIGIpIHJldHVybiBmYWxzZTtcbiAgaWYgKHR5cGVvZiBhID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgYSA9PT0gJ251bWJlcicpIHJldHVybiBhID09PSBiO1xuICBsZXQgaTtcblxuICBmb3IgKGkgaW4gYSkgaWYgKCEoaSBpbiBiKSkgcmV0dXJuIGZhbHNlO1xuXG4gIGZvciAoaSBpbiBiKSBpZiAoYVtpXSAhPT0gYltpXSkgcmV0dXJuIGZhbHNlO1xuXG4gIHJldHVybiBpID09PSB2b2lkIDAgPyBhID09PSBiIDogdHJ1ZTtcbn1cbmZ1bmN0aW9uIGNhbGxQcm9wKG9iaikge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gJ2Z1bmN0aW9uJyA/IG9iaiguLi5hcmdzKSA6IG9iajtcbn1cbmZ1bmN0aW9uIGdldFZhbHVlcyQxKG9iamVjdCkge1xuICByZXR1cm4gT2JqZWN0LmtleXMob2JqZWN0KS5tYXAoayA9PiBvYmplY3Rba10pO1xufVxuZnVuY3Rpb24gZ2V0Rm9yd2FyZFByb3BzKHByb3BzKSB7XG4gIGNvbnN0IHRvID0gcHJvcHMudG8sXG4gICAgICAgIGZyb20gPSBwcm9wcy5mcm9tLFxuICAgICAgICBjb25maWcgPSBwcm9wcy5jb25maWcsXG4gICAgICAgIG5hdGl2ZSA9IHByb3BzLm5hdGl2ZSxcbiAgICAgICAgb25TdGFydCA9IHByb3BzLm9uU3RhcnQsXG4gICAgICAgIG9uUmVzdCA9IHByb3BzLm9uUmVzdCxcbiAgICAgICAgb25GcmFtZSA9IHByb3BzLm9uRnJhbWUsXG4gICAgICAgIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICAgIHJlc2V0ID0gcHJvcHMucmVzZXQsXG4gICAgICAgIHJldmVyc2UgPSBwcm9wcy5yZXZlcnNlLFxuICAgICAgICBmb3JjZSA9IHByb3BzLmZvcmNlLFxuICAgICAgICBpbW1lZGlhdGUgPSBwcm9wcy5pbW1lZGlhdGUsXG4gICAgICAgIGltcGwgPSBwcm9wcy5pbXBsLFxuICAgICAgICBpbmplY3QgPSBwcm9wcy5pbmplY3QsXG4gICAgICAgIGRlbGF5ID0gcHJvcHMuZGVsYXksXG4gICAgICAgIGF0dGFjaCA9IHByb3BzLmF0dGFjaCxcbiAgICAgICAgZGVzdHJveWVkID0gcHJvcHMuZGVzdHJveWVkLFxuICAgICAgICBpbnRlcnBvbGF0ZVRvID0gcHJvcHMuaW50ZXJwb2xhdGVUbyxcbiAgICAgICAgYXV0b1N0YXJ0ID0gcHJvcHMuYXV0b1N0YXJ0LFxuICAgICAgICByZWYgPSBwcm9wcy5yZWYsXG4gICAgICAgIGZvcndhcmQgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgW1widG9cIiwgXCJmcm9tXCIsIFwiY29uZmlnXCIsIFwibmF0aXZlXCIsIFwib25TdGFydFwiLCBcIm9uUmVzdFwiLCBcIm9uRnJhbWVcIiwgXCJjaGlsZHJlblwiLCBcInJlc2V0XCIsIFwicmV2ZXJzZVwiLCBcImZvcmNlXCIsIFwiaW1tZWRpYXRlXCIsIFwiaW1wbFwiLCBcImluamVjdFwiLCBcImRlbGF5XCIsIFwiYXR0YWNoXCIsIFwiZGVzdHJveWVkXCIsIFwiaW50ZXJwb2xhdGVUb1wiLCBcImF1dG9TdGFydFwiLCBcInJlZlwiXSk7XG5cbiAgcmV0dXJuIGZvcndhcmQ7XG59XG5mdW5jdGlvbiBpbnRlcnBvbGF0ZVRvKHByb3BzKSB7XG4gIGNvbnN0IGZvcndhcmQgPSBnZXRGb3J3YXJkUHJvcHMocHJvcHMpO1xuICBjb25zdCByZXN0ID0gT2JqZWN0LmtleXMocHJvcHMpLnJlZHVjZSgoYSwgaykgPT4gZm9yd2FyZFtrXSAhPT0gdm9pZCAwID8gYSA6IF9leHRlbmRzKHt9LCBhLCB7XG4gICAgW2tdOiBwcm9wc1trXVxuICB9KSwge30pO1xuICByZXR1cm4gX2V4dGVuZHMoe1xuICAgIHRvOiBmb3J3YXJkXG4gIH0sIHJlc3QpO1xufVxuZnVuY3Rpb24gY29udmVydFRvQW5pbWF0ZWRWYWx1ZShhY2MsIF9yZWYpIHtcbiAgbGV0IG5hbWUgPSBfcmVmWzBdLFxuICAgICAgdmFsdWUgPSBfcmVmWzFdO1xuICByZXR1cm4gX2V4dGVuZHMoe30sIGFjYywge1xuICAgIFtuYW1lXTogbmV3IChBcnJheS5pc0FycmF5KHZhbHVlKSA/IEFuaW1hdGVkQXJyYXkgOiBBbmltYXRlZFZhbHVlKSh2YWx1ZSlcbiAgfSk7XG59XG5mdW5jdGlvbiBjb252ZXJ0VmFsdWVzKHByb3BzKSB7XG4gIGNvbnN0IGZyb20gPSBwcm9wcy5mcm9tLFxuICAgICAgICB0byA9IHByb3BzLnRvLFxuICAgICAgICBuYXRpdmUgPSBwcm9wcy5uYXRpdmU7XG4gIGNvbnN0IGFsbFByb3BzID0gT2JqZWN0LmVudHJpZXMoX2V4dGVuZHMoe30sIGZyb20sIHRvKSk7XG4gIHJldHVybiBuYXRpdmUgPyBhbGxQcm9wcy5yZWR1Y2UoY29udmVydFRvQW5pbWF0ZWRWYWx1ZSwge30pIDogX2V4dGVuZHMoe30sIGZyb20sIHRvKTtcbn1cbmZ1bmN0aW9uIGhhbmRsZVJlZihyZWYsIGZvcndhcmQpIHtcbiAgaWYgKGZvcndhcmQpIHtcbiAgICAvLyBJZiBpdCdzIGEgZnVuY3Rpb24sIGFzc3VtZSBpdCdzIGEgcmVmIGNhbGxiYWNrXG4gICAgaWYgKHR5cGVvZiBmb3J3YXJkID09PSAnZnVuY3Rpb24nKSBmb3J3YXJkKHJlZik7ZWxzZSBpZiAodHlwZW9mIGZvcndhcmQgPT09ICdvYmplY3QnKSB7XG4gICAgICAvLyBJZiBpdCdzIGFuIG9iamVjdCBhbmQgaGFzIGEgJ2N1cnJlbnQnIHByb3BlcnR5LCBhc3N1bWUgaXQncyBhIHJlZiBvYmplY3RcbiAgICAgIGZvcndhcmQuY3VycmVudCA9IHJlZjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVmO1xufVxuXG5jb25zdCBjaGVjayA9IHZhbHVlID0+IHZhbHVlID09PSAnYXV0byc7XG5cbmNvbnN0IG92ZXJ3cml0ZSA9ICh3aWR0aCwgaGVpZ2h0KSA9PiAoYWNjLCBfcmVmKSA9PiB7XG4gIGxldCBuYW1lID0gX3JlZlswXSxcbiAgICAgIHZhbHVlID0gX3JlZlsxXTtcbiAgcmV0dXJuIF9leHRlbmRzKHt9LCBhY2MsIHtcbiAgICBbbmFtZV06IHZhbHVlID09PSAnYXV0bycgPyB+bmFtZS5pbmRleE9mKCdoZWlnaHQnKSA/IGhlaWdodCA6IHdpZHRoIDogdmFsdWVcbiAgfSk7XG59O1xuXG5mdW5jdGlvbiBmaXhBdXRvKHByb3BzLCBjYWxsYmFjaykge1xuICBjb25zdCBmcm9tID0gcHJvcHMuZnJvbSxcbiAgICAgICAgdG8gPSBwcm9wcy50byxcbiAgICAgICAgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbjsgLy8gRHJ5LXJvdXRlIHByb3BzIGJhY2sgaWYgbm90aGluZydzIHVzaW5nICdhdXRvJyBpbiB0aGVyZVxuICAvLyBUT0RPOiBkZWFsIHdpdGggXCJudWxsXCJcblxuICBpZiAoIShnZXRWYWx1ZXMkMSh0bykuc29tZShjaGVjaykgfHwgZ2V0VmFsdWVzJDEoZnJvbSkuc29tZShjaGVjaykpKSByZXR1cm47IC8vIEZldGNoIHJlbmRlciB2LWRvbVxuXG4gIGxldCBlbGVtZW50ID0gY2hpbGRyZW4oY29udmVydFZhbHVlcyhwcm9wcykpOyAvLyBBIHNwcmluZyBjYW4gcmV0dXJuIHVuZGVmaW5lZC9udWxsLCBjaGVjayBhZ2FpbnN0IHRoYXQgKCMxNTMpXG5cbiAgaWYgKCFlbGVtZW50KSByZXR1cm47IC8vIE9yIGl0IGNvdWxkIGJlIGFuIGFycmF5ICgjMzQ2KSAuLi5cblxuICBpZiAoQXJyYXkuaXNBcnJheShlbGVtZW50KSkgZWxlbWVudCA9IHtcbiAgICB0eXBlOiAnZGl2JyxcbiAgICBwcm9wczoge1xuICAgICAgY2hpbGRyZW46IGVsZW1lbnRcbiAgICB9IC8vIEV4dHJhY3Qgc3R5bGVzXG5cbiAgfTtcbiAgY29uc3QgZWxlbWVudFN0eWxlcyA9IGVsZW1lbnQucHJvcHMuc3R5bGU7IC8vIFJldHVybiB2LmRvbSB3aXRoIGluamVjdGVkIHJlZlxuXG4gIHJldHVybiBSZWFjdF9fZGVmYXVsdC5jcmVhdGVFbGVtZW50KGVsZW1lbnQudHlwZSwgX2V4dGVuZHMoe1xuICAgIGtleTogZWxlbWVudC5rZXkgPyBlbGVtZW50LmtleSA6IHVuZGVmaW5lZFxuICB9LCBlbGVtZW50LnByb3BzLCB7XG4gICAgc3R5bGU6IF9leHRlbmRzKHt9LCBlbGVtZW50U3R5bGVzLCB7XG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIHZpc2liaWxpdHk6ICdoaWRkZW4nXG4gICAgfSksXG4gICAgcmVmOiBfcmVmMiA9PiB7XG4gICAgICBpZiAoX3JlZjIpIHtcbiAgICAgICAgLy8gT25jZSBpdCdzIHJlbmRlcmVkIG91dCwgZmV0Y2ggYm91bmRzIChtaW51cyBwYWRkaW5nL21hcmdpbi9ib3JkZXJzKVxuICAgICAgICBsZXQgbm9kZSA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKF9yZWYyKTtcbiAgICAgICAgbGV0IHdpZHRoLCBoZWlnaHQ7XG4gICAgICAgIGxldCBjcyA9IGdldENvbXB1dGVkU3R5bGUobm9kZSk7XG5cbiAgICAgICAgaWYgKGNzLmJveFNpemluZyA9PT0gJ2JvcmRlci1ib3gnKSB7XG4gICAgICAgICAgd2lkdGggPSBub2RlLm9mZnNldFdpZHRoO1xuICAgICAgICAgIGhlaWdodCA9IG5vZGUub2Zmc2V0SGVpZ2h0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IHBhZGRpbmdYID0gcGFyc2VGbG9hdChjcy5wYWRkaW5nTGVmdCB8fCAwKSArIHBhcnNlRmxvYXQoY3MucGFkZGluZ1JpZ2h0IHx8IDApO1xuICAgICAgICAgIGNvbnN0IHBhZGRpbmdZID0gcGFyc2VGbG9hdChjcy5wYWRkaW5nVG9wIHx8IDApICsgcGFyc2VGbG9hdChjcy5wYWRkaW5nQm90dG9tIHx8IDApO1xuICAgICAgICAgIGNvbnN0IGJvcmRlclggPSBwYXJzZUZsb2F0KGNzLmJvcmRlckxlZnRXaWR0aCB8fCAwKSArIHBhcnNlRmxvYXQoY3MuYm9yZGVyUmlnaHRXaWR0aCB8fCAwKTtcbiAgICAgICAgICBjb25zdCBib3JkZXJZID0gcGFyc2VGbG9hdChjcy5ib3JkZXJUb3BXaWR0aCB8fCAwKSArIHBhcnNlRmxvYXQoY3MuYm9yZGVyQm90dG9tV2lkdGggfHwgMCk7XG4gICAgICAgICAgd2lkdGggPSBub2RlLm9mZnNldFdpZHRoIC0gcGFkZGluZ1ggLSBib3JkZXJYO1xuICAgICAgICAgIGhlaWdodCA9IG5vZGUub2Zmc2V0SGVpZ2h0IC0gcGFkZGluZ1kgLSBib3JkZXJZO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY29udmVydCA9IG92ZXJ3cml0ZSh3aWR0aCwgaGVpZ2h0KTtcbiAgICAgICAgY2FsbGJhY2soX2V4dGVuZHMoe30sIHByb3BzLCB7XG4gICAgICAgICAgZnJvbTogT2JqZWN0LmVudHJpZXMoZnJvbSkucmVkdWNlKGNvbnZlcnQsIGZyb20pLFxuICAgICAgICAgIHRvOiBPYmplY3QuZW50cmllcyh0bykucmVkdWNlKGNvbnZlcnQsIHRvKVxuICAgICAgICB9KSk7XG4gICAgICB9XG4gICAgfVxuICB9KSk7XG59XG5cbmxldCBpc1VuaXRsZXNzTnVtYmVyID0ge1xuICBhbmltYXRpb25JdGVyYXRpb25Db3VudDogdHJ1ZSxcbiAgYm9yZGVySW1hZ2VPdXRzZXQ6IHRydWUsXG4gIGJvcmRlckltYWdlU2xpY2U6IHRydWUsXG4gIGJvcmRlckltYWdlV2lkdGg6IHRydWUsXG4gIGJveEZsZXg6IHRydWUsXG4gIGJveEZsZXhHcm91cDogdHJ1ZSxcbiAgYm94T3JkaW5hbEdyb3VwOiB0cnVlLFxuICBjb2x1bW5Db3VudDogdHJ1ZSxcbiAgY29sdW1uczogdHJ1ZSxcbiAgZmxleDogdHJ1ZSxcbiAgZmxleEdyb3c6IHRydWUsXG4gIGZsZXhQb3NpdGl2ZTogdHJ1ZSxcbiAgZmxleFNocmluazogdHJ1ZSxcbiAgZmxleE5lZ2F0aXZlOiB0cnVlLFxuICBmbGV4T3JkZXI6IHRydWUsXG4gIGdyaWRSb3c6IHRydWUsXG4gIGdyaWRSb3dFbmQ6IHRydWUsXG4gIGdyaWRSb3dTcGFuOiB0cnVlLFxuICBncmlkUm93U3RhcnQ6IHRydWUsXG4gIGdyaWRDb2x1bW46IHRydWUsXG4gIGdyaWRDb2x1bW5FbmQ6IHRydWUsXG4gIGdyaWRDb2x1bW5TcGFuOiB0cnVlLFxuICBncmlkQ29sdW1uU3RhcnQ6IHRydWUsXG4gIGZvbnRXZWlnaHQ6IHRydWUsXG4gIGxpbmVDbGFtcDogdHJ1ZSxcbiAgbGluZUhlaWdodDogdHJ1ZSxcbiAgb3BhY2l0eTogdHJ1ZSxcbiAgb3JkZXI6IHRydWUsXG4gIG9ycGhhbnM6IHRydWUsXG4gIHRhYlNpemU6IHRydWUsXG4gIHdpZG93czogdHJ1ZSxcbiAgekluZGV4OiB0cnVlLFxuICB6b29tOiB0cnVlLFxuICAvLyBTVkctcmVsYXRlZCBwcm9wZXJ0aWVzXG4gIGZpbGxPcGFjaXR5OiB0cnVlLFxuICBmbG9vZE9wYWNpdHk6IHRydWUsXG4gIHN0b3BPcGFjaXR5OiB0cnVlLFxuICBzdHJva2VEYXNoYXJyYXk6IHRydWUsXG4gIHN0cm9rZURhc2hvZmZzZXQ6IHRydWUsXG4gIHN0cm9rZU1pdGVybGltaXQ6IHRydWUsXG4gIHN0cm9rZU9wYWNpdHk6IHRydWUsXG4gIHN0cm9rZVdpZHRoOiB0cnVlXG59O1xuXG5jb25zdCBwcmVmaXhLZXkgPSAocHJlZml4LCBrZXkpID0+IHByZWZpeCArIGtleS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGtleS5zdWJzdHJpbmcoMSk7XG5cbmNvbnN0IHByZWZpeGVzID0gWydXZWJraXQnLCAnTXMnLCAnTW96JywgJ08nXTtcbmlzVW5pdGxlc3NOdW1iZXIgPSBPYmplY3Qua2V5cyhpc1VuaXRsZXNzTnVtYmVyKS5yZWR1Y2UoKGFjYywgcHJvcCkgPT4ge1xuICBwcmVmaXhlcy5mb3JFYWNoKHByZWZpeCA9PiBhY2NbcHJlZml4S2V5KHByZWZpeCwgcHJvcCldID0gYWNjW3Byb3BdKTtcbiAgcmV0dXJuIGFjYztcbn0sIGlzVW5pdGxlc3NOdW1iZXIpO1xuXG5mdW5jdGlvbiBkYW5nZXJvdXNTdHlsZVZhbHVlKG5hbWUsIHZhbHVlLCBpc0N1c3RvbVByb3BlcnR5KSB7XG4gIGlmICh2YWx1ZSA9PSBudWxsIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nIHx8IHZhbHVlID09PSAnJykgcmV0dXJuICcnO1xuICBpZiAoIWlzQ3VzdG9tUHJvcGVydHkgJiYgdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyAmJiB2YWx1ZSAhPT0gMCAmJiAhKGlzVW5pdGxlc3NOdW1iZXIuaGFzT3duUHJvcGVydHkobmFtZSkgJiYgaXNVbml0bGVzc051bWJlcltuYW1lXSkpIHJldHVybiB2YWx1ZSArICdweCc7IC8vIFByZXN1bWVzIGltcGxpY2l0ICdweCcgc3VmZml4IGZvciB1bml0bGVzcyBudW1iZXJzXG5cbiAgcmV0dXJuICgnJyArIHZhbHVlKS50cmltKCk7XG59XG5cbmNvbnN0IGF0dHJpYnV0ZUNhY2hlID0ge307XG5pbmplY3RDcmVhdGVBbmltYXRlZFN0eWxlKHN0eWxlID0+IG5ldyBBbmltYXRlZFN0eWxlKHN0eWxlKSk7XG5pbmplY3REZWZhdWx0RWxlbWVudCgnZGl2Jyk7XG5pbmplY3RJbnRlcnBvbGF0aW9uKGNyZWF0ZUludGVycG9sYXRpb24pO1xuaW5qZWN0Q29sb3JOYW1lcyhjb2xvcnMpO1xuaW5qZWN0QnVnZml4ZXMoZml4QXV0byk7XG5pbmplY3RBcHBseUFuaW1hdGVkVmFsdWVzKChpbnN0YW5jZSwgcHJvcHMpID0+IHtcbiAgaWYgKGluc3RhbmNlLm5vZGVUeXBlICYmIGluc3RhbmNlLnNldEF0dHJpYnV0ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgY29uc3Qgc3R5bGUgPSBwcm9wcy5zdHlsZSxcbiAgICAgICAgICBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgICAgIHNjcm9sbFRvcCA9IHByb3BzLnNjcm9sbFRvcCxcbiAgICAgICAgICBzY3JvbGxMZWZ0ID0gcHJvcHMuc2Nyb2xsTGVmdCxcbiAgICAgICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIFtcInN0eWxlXCIsIFwiY2hpbGRyZW5cIiwgXCJzY3JvbGxUb3BcIiwgXCJzY3JvbGxMZWZ0XCJdKTtcblxuICAgIGlmIChzY3JvbGxUb3AgIT09IHZvaWQgMCkgaW5zdGFuY2Uuc2Nyb2xsVG9wID0gc2Nyb2xsVG9wO1xuICAgIGlmIChzY3JvbGxMZWZ0ICE9PSB2b2lkIDApIGluc3RhbmNlLnNjcm9sbExlZnQgPSBzY3JvbGxMZWZ0OyAvLyBTZXQgdGV4dENvbnRlbnQsIGlmIGNoaWxkcmVuIGlzIGFuIGFuaW1hdGFibGUgdmFsdWVcblxuICAgIGlmIChjaGlsZHJlbiAhPT0gdm9pZCAwKSBpbnN0YW5jZS50ZXh0Q29udGVudCA9IGNoaWxkcmVuOyAvLyBTZXQgc3R5bGVzIC4uLlxuXG4gICAgZm9yIChsZXQgc3R5bGVOYW1lIGluIHN0eWxlKSB7XG4gICAgICBpZiAoIXN0eWxlLmhhc093blByb3BlcnR5KHN0eWxlTmFtZSkpIGNvbnRpbnVlO1xuICAgICAgdmFyIGlzQ3VzdG9tUHJvcGVydHkgPSBzdHlsZU5hbWUuaW5kZXhPZignLS0nKSA9PT0gMDtcbiAgICAgIHZhciBzdHlsZVZhbHVlID0gZGFuZ2Vyb3VzU3R5bGVWYWx1ZShzdHlsZU5hbWUsIHN0eWxlW3N0eWxlTmFtZV0sIGlzQ3VzdG9tUHJvcGVydHkpO1xuICAgICAgaWYgKHN0eWxlTmFtZSA9PT0gJ2Zsb2F0Jykgc3R5bGVOYW1lID0gJ2Nzc0Zsb2F0JztcbiAgICAgIGlmIChpc0N1c3RvbVByb3BlcnR5KSBpbnN0YW5jZS5zdHlsZS5zZXRQcm9wZXJ0eShzdHlsZU5hbWUsIHN0eWxlVmFsdWUpO2Vsc2UgaW5zdGFuY2Uuc3R5bGVbc3R5bGVOYW1lXSA9IHN0eWxlVmFsdWU7XG4gICAgfSAvLyBTZXQgYXR0cmlidXRlcyAuLi5cblxuXG4gICAgZm9yIChsZXQgbmFtZSBpbiBhdHRyaWJ1dGVzKSB7XG4gICAgICAvLyBBdHRyaWJ1dGVzIGFyZSB3cml0dGVuIGluIGRhc2ggY2FzZVxuICAgICAgY29uc3QgZGFzaENhc2UgPSBhdHRyaWJ1dGVDYWNoZVtuYW1lXSB8fCAoYXR0cmlidXRlQ2FjaGVbbmFtZV0gPSBuYW1lLnJlcGxhY2UoLyhbQS1aXSkvZywgbiA9PiAnLScgKyBuLnRvTG93ZXJDYXNlKCkpKTtcbiAgICAgIGlmICh0eXBlb2YgaW5zdGFuY2UuZ2V0QXR0cmlidXRlKGRhc2hDYXNlKSAhPT0gJ3VuZGVmaW5lZCcpIGluc3RhbmNlLnNldEF0dHJpYnV0ZShkYXNoQ2FzZSwgYXR0cmlidXRlc1tuYW1lXSk7XG4gICAgfVxuICB9IGVsc2UgcmV0dXJuIGZhbHNlO1xufSwgc3R5bGUgPT4gc3R5bGUpO1xuXG5sZXQgYWN0aXZlID0gZmFsc2U7XG5jb25zdCBjb250cm9sbGVycyA9IG5ldyBTZXQoKTtcblxuY29uc3QgZnJhbWVMb29wID0gKCkgPT4ge1xuICBsZXQgdGltZSA9IG5vdygpO1xuXG4gIGZvciAobGV0IGNvbnRyb2xsZXIgb2YgY29udHJvbGxlcnMpIHtcbiAgICBsZXQgaXNEb25lID0gdHJ1ZTtcbiAgICBsZXQgbm9DaGFuZ2UgPSB0cnVlO1xuXG4gICAgZm9yIChsZXQgY29uZmlnSWR4ID0gMDsgY29uZmlnSWR4IDwgY29udHJvbGxlci5jb25maWdzLmxlbmd0aDsgY29uZmlnSWR4KyspIHtcbiAgICAgIGxldCBjb25maWcgPSBjb250cm9sbGVyLmNvbmZpZ3NbY29uZmlnSWR4XTtcbiAgICAgIGxldCBlbmRPZkFuaW1hdGlvbiwgbGFzdFRpbWU7XG5cbiAgICAgIGZvciAobGV0IHZhbElkeCA9IDA7IHZhbElkeCA8IGNvbmZpZy5hbmltYXRlZFZhbHVlcy5sZW5ndGg7IHZhbElkeCsrKSB7XG4gICAgICAgIGxldCBhbmltYXRpb24gPSBjb25maWcuYW5pbWF0ZWRWYWx1ZXNbdmFsSWR4XTsgLy8gSWYgYW4gYW5pbWF0aW9uIGlzIGRvbmUsIHNraXAsIHVudGlsIGFsbCBvZiB0aGVtIGNvbmNsdWRlXG5cbiAgICAgICAgaWYgKGFuaW1hdGlvbi5kb25lKSBjb250aW51ZTtcbiAgICAgICAgbGV0IGZyb20gPSBjb25maWcuZnJvbVZhbHVlc1t2YWxJZHhdO1xuICAgICAgICBsZXQgdG8gPSBjb25maWcudG9WYWx1ZXNbdmFsSWR4XTtcbiAgICAgICAgbGV0IHBvc2l0aW9uID0gYW5pbWF0aW9uLmxhc3RQb3NpdGlvbjtcbiAgICAgICAgbGV0IGlzQW5pbWF0ZWQgPSB0byBpbnN0YW5jZW9mIEFuaW1hdGVkO1xuICAgICAgICBsZXQgdmVsb2NpdHkgPSBBcnJheS5pc0FycmF5KGNvbmZpZy5pbml0aWFsVmVsb2NpdHkpID8gY29uZmlnLmluaXRpYWxWZWxvY2l0eVt2YWxJZHhdIDogY29uZmlnLmluaXRpYWxWZWxvY2l0eTtcbiAgICAgICAgaWYgKGlzQW5pbWF0ZWQpIHRvID0gdG8uZ2V0VmFsdWUoKTsgLy8gQ29uY2x1ZGUgYW5pbWF0aW9uIGlmIGl0J3MgZWl0aGVyIGltbWVkaWF0ZSwgb3IgZnJvbS12YWx1ZXMgbWF0Y2ggZW5kLXN0YXRlXG5cbiAgICAgICAgaWYgKGNvbmZpZy5pbW1lZGlhdGUgfHwgIWlzQW5pbWF0ZWQgJiYgIWNvbmZpZy5kZWNheSAmJiBmcm9tID09PSB0bykge1xuICAgICAgICAgIGFuaW1hdGlvbi51cGRhdGVWYWx1ZSh0byk7XG4gICAgICAgICAgYW5pbWF0aW9uLmRvbmUgPSB0cnVlO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9IC8vIERvaW5nIGRlbGF5IGhlcmUgaW5zdGVhZCBvZiBzZXRUaW1lb3V0IGlzIG9uZSBhc3luYyB3b3JyeSBsZXNzXG5cblxuICAgICAgICBpZiAoY29uZmlnLmRlbGF5ICYmIHRpbWUgLSBjb250cm9sbGVyLnN0YXJ0VGltZSA8IGNvbmZpZy5kZWxheSkge1xuICAgICAgICAgIGlzRG9uZSA9IGZhbHNlO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9IC8vIEZsYWcgY2hhbmdlXG5cblxuICAgICAgICBub0NoYW5nZSA9IGZhbHNlOyAvLyBCcmVhayBhbmltYXRpb24gd2hlbiBzdHJpbmcgdmFsdWVzIGFyZSBpbnZvbHZlZFxuXG4gICAgICAgIGlmICh0eXBlb2YgZnJvbSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHRvID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIGFuaW1hdGlvbi51cGRhdGVWYWx1ZSh0byk7XG4gICAgICAgICAgYW5pbWF0aW9uLmRvbmUgPSB0cnVlO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbmZpZy5kdXJhdGlvbiAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgLyoqIER1cmF0aW9uIGVhc2luZyAqL1xuICAgICAgICAgIHBvc2l0aW9uID0gZnJvbSArIGNvbmZpZy5lYXNpbmcoKHRpbWUgLSBjb250cm9sbGVyLnN0YXJ0VGltZSAtIGNvbmZpZy5kZWxheSkgLyBjb25maWcuZHVyYXRpb24pICogKHRvIC0gZnJvbSk7XG4gICAgICAgICAgZW5kT2ZBbmltYXRpb24gPSB0aW1lID49IGNvbnRyb2xsZXIuc3RhcnRUaW1lICsgY29uZmlnLmRlbGF5ICsgY29uZmlnLmR1cmF0aW9uO1xuICAgICAgICB9IGVsc2UgaWYgKGNvbmZpZy5kZWNheSkge1xuICAgICAgICAgIC8qKiBEZWNheSBlYXNpbmcgKi9cbiAgICAgICAgICBwb3NpdGlvbiA9IGZyb20gKyB2ZWxvY2l0eSAvICgxIC0gMC45OTgpICogKDEgLSBNYXRoLmV4cCgtKDEgLSAwLjk5OCkgKiAodGltZSAtIGNvbnRyb2xsZXIuc3RhcnRUaW1lKSkpO1xuICAgICAgICAgIGVuZE9mQW5pbWF0aW9uID0gTWF0aC5hYnMoYW5pbWF0aW9uLmxhc3RQb3NpdGlvbiAtIHBvc2l0aW9uKSA8IDAuMTtcbiAgICAgICAgICBpZiAoZW5kT2ZBbmltYXRpb24pIHRvID0gcG9zaXRpb247XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLyoqIFNwcmluZyBlYXNpbmcgKi9cbiAgICAgICAgICBsYXN0VGltZSA9IGFuaW1hdGlvbi5sYXN0VGltZSAhPT0gdm9pZCAwID8gYW5pbWF0aW9uLmxhc3RUaW1lIDogdGltZTtcbiAgICAgICAgICB2ZWxvY2l0eSA9IGFuaW1hdGlvbi5sYXN0VmVsb2NpdHkgIT09IHZvaWQgMCA/IGFuaW1hdGlvbi5sYXN0VmVsb2NpdHkgOiBjb25maWcuaW5pdGlhbFZlbG9jaXR5OyAvLyBJZiB3ZSBsb3N0IGEgbG90IG9mIGZyYW1lcyBqdXN0IGp1bXAgdG8gdGhlIGVuZC5cblxuICAgICAgICAgIGlmICh0aW1lID4gbGFzdFRpbWUgKyA2NCkgbGFzdFRpbWUgPSB0aW1lOyAvLyBodHRwOi8vZ2FmZmVyb25nYW1lcy5jb20vZ2FtZS1waHlzaWNzL2ZpeC15b3VyLXRpbWVzdGVwL1xuXG4gICAgICAgICAgbGV0IG51bVN0ZXBzID0gTWF0aC5mbG9vcih0aW1lIC0gbGFzdFRpbWUpO1xuXG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1TdGVwczsgKytpKSB7XG4gICAgICAgICAgICBsZXQgZm9yY2UgPSAtY29uZmlnLnRlbnNpb24gKiAocG9zaXRpb24gLSB0byk7XG4gICAgICAgICAgICBsZXQgZGFtcGluZyA9IC1jb25maWcuZnJpY3Rpb24gKiB2ZWxvY2l0eTtcbiAgICAgICAgICAgIGxldCBhY2NlbGVyYXRpb24gPSAoZm9yY2UgKyBkYW1waW5nKSAvIGNvbmZpZy5tYXNzO1xuICAgICAgICAgICAgdmVsb2NpdHkgPSB2ZWxvY2l0eSArIGFjY2VsZXJhdGlvbiAqIDEgLyAxMDAwO1xuICAgICAgICAgICAgcG9zaXRpb24gPSBwb3NpdGlvbiArIHZlbG9jaXR5ICogMSAvIDEwMDA7XG4gICAgICAgICAgfSAvLyBDb25kaXRpb25zIGZvciBzdG9wcGluZyB0aGUgc3ByaW5nIGFuaW1hdGlvblxuXG5cbiAgICAgICAgICBsZXQgaXNPdmVyc2hvb3RpbmcgPSBjb25maWcuY2xhbXAgJiYgY29uZmlnLnRlbnNpb24gIT09IDAgPyBmcm9tIDwgdG8gPyBwb3NpdGlvbiA+IHRvIDogcG9zaXRpb24gPCB0byA6IGZhbHNlO1xuICAgICAgICAgIGxldCBpc1ZlbG9jaXR5ID0gTWF0aC5hYnModmVsb2NpdHkpIDw9IGNvbmZpZy5wcmVjaXNpb247XG4gICAgICAgICAgbGV0IGlzRGlzcGxhY2VtZW50ID0gY29uZmlnLnRlbnNpb24gIT09IDAgPyBNYXRoLmFicyh0byAtIHBvc2l0aW9uKSA8PSBjb25maWcucHJlY2lzaW9uIDogdHJ1ZTtcbiAgICAgICAgICBlbmRPZkFuaW1hdGlvbiA9IGlzT3ZlcnNob290aW5nIHx8IGlzVmVsb2NpdHkgJiYgaXNEaXNwbGFjZW1lbnQ7XG4gICAgICAgICAgYW5pbWF0aW9uLmxhc3RWZWxvY2l0eSA9IHZlbG9jaXR5O1xuICAgICAgICAgIGFuaW1hdGlvbi5sYXN0VGltZSA9IHRpbWU7XG4gICAgICAgIH0gLy8gVHJhaWxzIGFyZW4ndCBkb25lIHVudGlsIHRoZWlyIHBhcmVudHMgY29uY2x1ZGVcblxuXG4gICAgICAgIGlmIChpc0FuaW1hdGVkICYmICFjb25maWcudG9WYWx1ZXNbdmFsSWR4XS5kb25lKSBlbmRPZkFuaW1hdGlvbiA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChlbmRPZkFuaW1hdGlvbikge1xuICAgICAgICAgIC8vIEVuc3VyZSB0aGF0IHdlIGVuZCB1cCB3aXRoIGEgcm91bmQgdmFsdWVcbiAgICAgICAgICBpZiAoYW5pbWF0aW9uLnZhbHVlICE9PSB0bykgcG9zaXRpb24gPSB0bztcbiAgICAgICAgICBhbmltYXRpb24uZG9uZSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSBpc0RvbmUgPSBmYWxzZTtcblxuICAgICAgICBhbmltYXRpb24udXBkYXRlVmFsdWUocG9zaXRpb24pO1xuICAgICAgICBhbmltYXRpb24ubGFzdFBvc2l0aW9uID0gcG9zaXRpb247XG4gICAgICB9IC8vIEtlZXAgdHJhY2sgb2YgdXBkYXRlZCB2YWx1ZXMgb25seSB3aGVuIG5lY2Vzc2FyeVxuXG5cbiAgICAgIGlmIChjb250cm9sbGVyLnByb3BzLm9uRnJhbWUgfHwgIWNvbnRyb2xsZXIucHJvcHMubmF0aXZlKSBjb250cm9sbGVyLmFuaW1hdGVkUHJvcHNbY29uZmlnLm5hbWVdID0gY29uZmlnLmludGVycG9sYXRpb24uZ2V0VmFsdWUoKTtcbiAgICB9IC8vIFVwZGF0ZSBjYWxsYmFja3MgaW4gdGhlIGVuZCBvZiB0aGUgZnJhbWVcblxuXG4gICAgaWYgKGNvbnRyb2xsZXIucHJvcHMub25GcmFtZSB8fCAhY29udHJvbGxlci5wcm9wcy5uYXRpdmUpIHtcbiAgICAgIGlmICghY29udHJvbGxlci5wcm9wcy5uYXRpdmUgJiYgY29udHJvbGxlci5vblVwZGF0ZSkgY29udHJvbGxlci5vblVwZGF0ZSgpO1xuICAgICAgaWYgKGNvbnRyb2xsZXIucHJvcHMub25GcmFtZSkgY29udHJvbGxlci5wcm9wcy5vbkZyYW1lKGNvbnRyb2xsZXIuYW5pbWF0ZWRQcm9wcyk7XG4gICAgfSAvLyBFaXRoZXIgY2FsbCBvbkVuZCBvciBuZXh0IGZyYW1lXG5cblxuICAgIGlmIChpc0RvbmUpIHtcbiAgICAgIGNvbnRyb2xsZXJzLmRlbGV0ZShjb250cm9sbGVyKTtcbiAgICAgIGNvbnRyb2xsZXIuZGVib3VuY2VkT25FbmQoe1xuICAgICAgICBmaW5pc2hlZDogdHJ1ZSxcbiAgICAgICAgbm9DaGFuZ2VcbiAgICAgIH0pO1xuICAgIH1cbiAgfSAvLyBMb29wIG92ZXIgYXMgbG9uZyBhcyB0aGVyZSBhcmUgY29udHJvbGxlcnMgLi4uXG5cblxuICBpZiAoY29udHJvbGxlcnMuc2l6ZSkgcmVxdWVzdEZyYW1lKGZyYW1lTG9vcCk7ZWxzZSBhY3RpdmUgPSBmYWxzZTtcbn07XG5cbmNvbnN0IGFkZENvbnRyb2xsZXIgPSBjb250cm9sbGVyID0+IHtcbiAgaWYgKCFjb250cm9sbGVycy5oYXMoY29udHJvbGxlcikpIHtcbiAgICBjb250cm9sbGVycy5hZGQoY29udHJvbGxlcik7XG4gICAgaWYgKCFhY3RpdmUpIHJlcXVlc3RGcmFtZShmcmFtZUxvb3ApO1xuICAgIGFjdGl2ZSA9IHRydWU7XG4gIH1cbn07XG5cbmNvbnN0IHJlbW92ZUNvbnRyb2xsZXIgPSBjb250cm9sbGVyID0+IHtcbiAgaWYgKGNvbnRyb2xsZXJzLmhhcyhjb250cm9sbGVyKSkge1xuICAgIGNvbnRyb2xsZXJzLmRlbGV0ZShjb250cm9sbGVyKTtcbiAgfVxufTtcblxuY2xhc3MgQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKHByb3BzLCBjb25maWcpIHtcbiAgICBpZiAoY29uZmlnID09PSB2b2lkIDApIHtcbiAgICAgIGNvbmZpZyA9IHtcbiAgICAgICAgbmF0aXZlOiB0cnVlLFxuICAgICAgICBpbnRlcnBvbGF0ZVRvOiB0cnVlLFxuICAgICAgICBhdXRvU3RhcnQ6IHRydWVcbiAgICAgIH07XG4gICAgfVxuXG4gICAgdGhpcy5nZXRWYWx1ZXMgPSAoKSA9PiB0aGlzLnByb3BzLm5hdGl2ZSA/IHRoaXMuaW50ZXJwb2xhdGlvbnMgOiB0aGlzLmFuaW1hdGVkUHJvcHM7XG5cbiAgICB0aGlzLmRlcGVuZGVudHMgPSBuZXcgU2V0KCk7XG4gICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMuaGFzQ2hhbmdlZCA9IGZhbHNlO1xuICAgIHRoaXMucHJvcHMgPSB7fTtcbiAgICB0aGlzLm1lcmdlZCA9IHt9O1xuICAgIHRoaXMuYW5pbWF0aW9ucyA9IHt9O1xuICAgIHRoaXMuaW50ZXJwb2xhdGlvbnMgPSB7fTtcbiAgICB0aGlzLmFuaW1hdGVkUHJvcHMgPSB7fTtcbiAgICB0aGlzLmNvbmZpZ3MgPSBbXTtcbiAgICB0aGlzLmZyYW1lID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuc3RhcnRUaW1lID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubGFzdFRpbWUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy51cGRhdGUoX2V4dGVuZHMoe30sIHByb3BzLCBjb25maWcpKTtcbiAgfVxuXG4gIHVwZGF0ZShwcm9wcykge1xuICAgIHRoaXMucHJvcHMgPSBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywgcHJvcHMpO1xuXG4gICAgbGV0IF9yZWYgPSB0aGlzLnByb3BzLmludGVycG9sYXRlVG8gPyBpbnRlcnBvbGF0ZVRvKHRoaXMucHJvcHMpIDogdGhpcy5wcm9wcyxcbiAgICAgICAgX3JlZiRmcm9tID0gX3JlZi5mcm9tLFxuICAgICAgICBmcm9tID0gX3JlZiRmcm9tID09PSB2b2lkIDAgPyB7fSA6IF9yZWYkZnJvbSxcbiAgICAgICAgX3JlZiR0byA9IF9yZWYudG8sXG4gICAgICAgIHRvID0gX3JlZiR0byA9PT0gdm9pZCAwID8ge30gOiBfcmVmJHRvLFxuICAgICAgICBfcmVmJGNvbmZpZyA9IF9yZWYuY29uZmlnLFxuICAgICAgICBjb25maWcgPSBfcmVmJGNvbmZpZyA9PT0gdm9pZCAwID8ge30gOiBfcmVmJGNvbmZpZyxcbiAgICAgICAgX3JlZiRkZWxheSA9IF9yZWYuZGVsYXksXG4gICAgICAgIGRlbGF5ID0gX3JlZiRkZWxheSA9PT0gdm9pZCAwID8gMCA6IF9yZWYkZGVsYXksXG4gICAgICAgIHJldmVyc2UgPSBfcmVmLnJldmVyc2UsXG4gICAgICAgIGF0dGFjaCA9IF9yZWYuYXR0YWNoLFxuICAgICAgICByZXNldCA9IF9yZWYucmVzZXQsXG4gICAgICAgIGltbWVkaWF0ZSA9IF9yZWYuaW1tZWRpYXRlLFxuICAgICAgICBhdXRvU3RhcnQgPSBfcmVmLmF1dG9TdGFydCxcbiAgICAgICAgcmVmID0gX3JlZi5yZWY7IC8vIFJldmVyc2UgdmFsdWVzIHdoZW4gcmVxdWVzdGVkXG5cblxuICAgIGlmIChyZXZlcnNlKSB7XG4gICAgICB2YXIgX3JlZjIgPSBbdG8sIGZyb21dO1xuICAgICAgZnJvbSA9IF9yZWYyWzBdO1xuICAgICAgdG8gPSBfcmVmMlsxXTtcbiAgICB9XG5cbiAgICB0aGlzLmhhc0NoYW5nZWQgPSBmYWxzZTsgLy8gQXR0YWNobWVudCBoYW5kbGluZywgdHJhaWxlZCBzcHJpbmdzIGNhbiBcImF0dGFjaFwiIHRoZW1zZWx2ZXMgdG8gYSBwcmV2aW91cyBzcHJpbmdcblxuICAgIGxldCB0YXJnZXQgPSBhdHRhY2ggJiYgYXR0YWNoKHRoaXMpOyAvLyBSZXNldCBtZXJnZWQgcHJvcHMgd2hlbiBuZWNlc3NhcnlcblxuICAgIGxldCBleHRyYSA9IHJlc2V0ID8ge30gOiB0aGlzLm1lcmdlZDsgLy8gVGhpcyB3aWxsIGNvbGxlY3QgYWxsIHByb3BzIHRoYXQgd2VyZSBldmVyIHNldFxuXG4gICAgdGhpcy5tZXJnZWQgPSBfZXh0ZW5kcyh7fSwgZnJvbSwgZXh0cmEsIHRvKTsgLy8gUmVkdWNlcyBpbnB1dCB7IG5hbWU6IHZhbHVlIH0gcGFpcnMgaW50byBhbmltYXRlZCB2YWx1ZXNcblxuICAgIHRoaXMuYW5pbWF0aW9ucyA9IE9iamVjdC5lbnRyaWVzKHRoaXMubWVyZ2VkKS5yZWR1Y2UoKGFjYywgX3JlZjMsIGkpID0+IHtcbiAgICAgIGxldCBuYW1lID0gX3JlZjNbMF0sXG4gICAgICAgICAgdmFsdWUgPSBfcmVmM1sxXTtcbiAgICAgIC8vIElzc3VlIGNhY2hlZCBlbnRyaWVzLCBleGNlcHQgb24gcmVzZXRcbiAgICAgIGxldCBlbnRyeSA9ICFyZXNldCAmJiBhY2NbbmFtZV0gfHwge307IC8vIEZpZ3VyZSBvdXQgd2hhdCB0aGUgdmFsdWUgaXMgc3VwcG9zZWQgdG8gYmVcblxuICAgICAgY29uc3QgaXNOdW1iZXIgPSB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInO1xuICAgICAgY29uc3QgaXNTdHJpbmcgPSB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmICF2YWx1ZS5zdGFydHNXaXRoKCcjJykgJiYgIS9cXGQvLnRlc3QodmFsdWUpICYmICFjb2xvck5hbWVzW3ZhbHVlXTtcbiAgICAgIGNvbnN0IGlzQXJyYXkgPSAhaXNOdW1iZXIgJiYgIWlzU3RyaW5nICYmIEFycmF5LmlzQXJyYXkodmFsdWUpO1xuICAgICAgbGV0IGZyb21WYWx1ZSA9IGZyb21bbmFtZV0gIT09IHVuZGVmaW5lZCA/IGZyb21bbmFtZV0gOiB2YWx1ZTtcbiAgICAgIGxldCB0b1ZhbHVlID0gaXNOdW1iZXIgfHwgaXNBcnJheSA/IHZhbHVlIDogaXNTdHJpbmcgPyB2YWx1ZSA6IDE7XG4gICAgICBsZXQgdG9Db25maWcgPSBjYWxsUHJvcChjb25maWcsIG5hbWUpO1xuICAgICAgaWYgKHRhcmdldCkgdG9WYWx1ZSA9IHRhcmdldC5hbmltYXRpb25zW25hbWVdLnBhcmVudDsgLy8gRGV0ZWN0IGNoYW5nZXMsIGFuaW1hdGVkIHZhbHVlcyB3aWxsIGJlIGNoZWNrZWQgaW4gdGhlIHJhZi1sb29wXG5cbiAgICAgIGlmICh0b0NvbmZpZy5kZWNheSAhPT0gdm9pZCAwIHx8ICFzaGFsbG93RXF1YWwoZW50cnkuY2hhbmdlcywgdmFsdWUpKSB7XG4gICAgICAgIHRoaXMuaGFzQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgIGxldCBwYXJlbnQsIGludGVycG9sYXRpb24kJDE7XG4gICAgICAgIGlmIChpc051bWJlciB8fCBpc1N0cmluZykgcGFyZW50ID0gaW50ZXJwb2xhdGlvbiQkMSA9IGVudHJ5LnBhcmVudCB8fCBuZXcgQW5pbWF0ZWRWYWx1ZShmcm9tVmFsdWUpO2Vsc2UgaWYgKGlzQXJyYXkpIHBhcmVudCA9IGludGVycG9sYXRpb24kJDEgPSBlbnRyeS5wYXJlbnQgfHwgbmV3IEFuaW1hdGVkQXJyYXkoZnJvbVZhbHVlKTtlbHNlIHtcbiAgICAgICAgICBjb25zdCBwcmV2ID0gZW50cnkuaW50ZXJwb2xhdGlvbiAmJiBlbnRyeS5pbnRlcnBvbGF0aW9uLmNhbGMoZW50cnkucGFyZW50LnZhbHVlKTtcblxuICAgICAgICAgIGlmIChlbnRyeS5wYXJlbnQpIHtcbiAgICAgICAgICAgIHBhcmVudCA9IGVudHJ5LnBhcmVudDtcbiAgICAgICAgICAgIHBhcmVudC5zZXRWYWx1ZSgwLCBmYWxzZSk7XG4gICAgICAgICAgfSBlbHNlIHBhcmVudCA9IG5ldyBBbmltYXRlZFZhbHVlKDApO1xuXG4gICAgICAgICAgY29uc3QgcmFuZ2UgPSB7XG4gICAgICAgICAgICBvdXRwdXQ6IFtwcmV2ICE9PSB2b2lkIDAgPyBwcmV2IDogZnJvbVZhbHVlLCB2YWx1ZV1cbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgaWYgKGVudHJ5LmludGVycG9sYXRpb24pIHtcbiAgICAgICAgICAgIGludGVycG9sYXRpb24kJDEgPSBlbnRyeS5pbnRlcnBvbGF0aW9uO1xuICAgICAgICAgICAgZW50cnkuaW50ZXJwb2xhdGlvbi51cGRhdGVDb25maWcocmFuZ2UpO1xuICAgICAgICAgIH0gZWxzZSBpbnRlcnBvbGF0aW9uJCQxID0gcGFyZW50LmludGVycG9sYXRlKHJhbmdlKTtcbiAgICAgICAgfSAvLyBTZXQgaW1tZWRpYXRlIHZhbHVlc1xuXG4gICAgICAgIGlmIChjYWxsUHJvcChpbW1lZGlhdGUsIG5hbWUpKSBwYXJlbnQuc2V0VmFsdWUodmFsdWUsIGZhbHNlKTsgLy8gUmVzZXQgYW5pbWF0ZWQgdmFsdWVzXG5cbiAgICAgICAgY29uc3QgYW5pbWF0ZWRWYWx1ZXMgPSB0b0FycmF5KHBhcmVudC5nZXRQYXlsb2FkKCkpO1xuICAgICAgICBhbmltYXRlZFZhbHVlcy5mb3JFYWNoKHZhbHVlID0+IHZhbHVlLnByZXBhcmUodGhpcykpO1xuICAgICAgICByZXR1cm4gX2V4dGVuZHMoe30sIGFjYywge1xuICAgICAgICAgIFtuYW1lXTogX2V4dGVuZHMoe30sIGVudHJ5LCB7XG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgcGFyZW50LFxuICAgICAgICAgICAgaW50ZXJwb2xhdGlvbjogaW50ZXJwb2xhdGlvbiQkMSxcbiAgICAgICAgICAgIGFuaW1hdGVkVmFsdWVzLFxuICAgICAgICAgICAgY2hhbmdlczogdmFsdWUsXG4gICAgICAgICAgICBmcm9tVmFsdWVzOiB0b0FycmF5KHBhcmVudC5nZXRWYWx1ZSgpKSxcbiAgICAgICAgICAgIHRvVmFsdWVzOiB0b0FycmF5KHRhcmdldCA/IHRvVmFsdWUuZ2V0UGF5bG9hZCgpIDogdG9WYWx1ZSksXG4gICAgICAgICAgICBpbW1lZGlhdGU6IGNhbGxQcm9wKGltbWVkaWF0ZSwgbmFtZSksXG4gICAgICAgICAgICBkZWxheTogd2l0aERlZmF1bHQodG9Db25maWcuZGVsYXksIGRlbGF5IHx8IDApLFxuICAgICAgICAgICAgaW5pdGlhbFZlbG9jaXR5OiB3aXRoRGVmYXVsdCh0b0NvbmZpZy52ZWxvY2l0eSwgMCksXG4gICAgICAgICAgICBjbGFtcDogd2l0aERlZmF1bHQodG9Db25maWcuY2xhbXAsIGZhbHNlKSxcbiAgICAgICAgICAgIHByZWNpc2lvbjogd2l0aERlZmF1bHQodG9Db25maWcucHJlY2lzaW9uLCAwLjAxKSxcbiAgICAgICAgICAgIHRlbnNpb246IHdpdGhEZWZhdWx0KHRvQ29uZmlnLnRlbnNpb24sIDE3MCksXG4gICAgICAgICAgICBmcmljdGlvbjogd2l0aERlZmF1bHQodG9Db25maWcuZnJpY3Rpb24sIDI2KSxcbiAgICAgICAgICAgIG1hc3M6IHdpdGhEZWZhdWx0KHRvQ29uZmlnLm1hc3MsIDEpLFxuICAgICAgICAgICAgZHVyYXRpb246IHRvQ29uZmlnLmR1cmF0aW9uLFxuICAgICAgICAgICAgZWFzaW5nOiB3aXRoRGVmYXVsdCh0b0NvbmZpZy5lYXNpbmcsIHQgPT4gdCksXG4gICAgICAgICAgICBkZWNheTogdG9Db25maWcuZGVjYXlcbiAgICAgICAgICB9KVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSByZXR1cm4gYWNjO1xuICAgIH0sIHRoaXMuYW5pbWF0aW9ucyk7XG5cbiAgICBpZiAodGhpcy5oYXNDaGFuZ2VkKSB7XG4gICAgICB0aGlzLmNvbmZpZ3MgPSBnZXRWYWx1ZXMkMSh0aGlzLmFuaW1hdGlvbnMpO1xuICAgICAgdGhpcy5hbmltYXRlZFByb3BzID0ge307XG4gICAgICB0aGlzLmludGVycG9sYXRpb25zID0ge307XG5cbiAgICAgIGZvciAobGV0IGtleSBpbiB0aGlzLmFuaW1hdGlvbnMpIHtcbiAgICAgICAgdGhpcy5pbnRlcnBvbGF0aW9uc1trZXldID0gdGhpcy5hbmltYXRpb25zW2tleV0uaW50ZXJwb2xhdGlvbjtcbiAgICAgICAgdGhpcy5hbmltYXRlZFByb3BzW2tleV0gPSB0aGlzLmFuaW1hdGlvbnNba2V5XS5pbnRlcnBvbGF0aW9uLmdldFZhbHVlKCk7XG4gICAgICB9XG4gICAgfSAvLyBUT0RPOiBjbGVhbiB1cCByZWYgaW4gY29udHJvbGxlclxuXG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgc3RhcnQgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgc3RhcnRbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIGlmICghcmVmICYmIChhdXRvU3RhcnQgfHwgc3RhcnQubGVuZ3RoKSkgdGhpcy5zdGFydCguLi5zdGFydCk7XG4gICAgY29uc3Qgb25FbmQgPSBzdGFydFswXSxcbiAgICAgICAgICBvblVwZGF0ZSA9IHN0YXJ0WzFdO1xuICAgIHRoaXMub25FbmQgPSB0eXBlb2Ygb25FbmQgPT09ICdmdW5jdGlvbicgJiYgb25FbmQ7XG4gICAgdGhpcy5vblVwZGF0ZSA9IG9uVXBkYXRlO1xuICAgIHJldHVybiB0aGlzLmdldFZhbHVlcygpO1xuICB9XG5cbiAgc3RhcnQob25FbmQsIG9uVXBkYXRlKSB7XG4gICAgdGhpcy5zdGFydFRpbWUgPSBub3coKTtcbiAgICBpZiAodGhpcy5pc0FjdGl2ZSkgdGhpcy5zdG9wKCk7XG4gICAgdGhpcy5pc0FjdGl2ZSA9IHRydWU7XG4gICAgdGhpcy5vbkVuZCA9IHR5cGVvZiBvbkVuZCA9PT0gJ2Z1bmN0aW9uJyAmJiBvbkVuZDtcbiAgICB0aGlzLm9uVXBkYXRlID0gb25VcGRhdGU7XG4gICAgaWYgKHRoaXMucHJvcHMub25TdGFydCkgdGhpcy5wcm9wcy5vblN0YXJ0KCk7XG4gICAgYWRkQ29udHJvbGxlcih0aGlzKTtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzID0+IHRoaXMucmVzb2x2ZSA9IHJlcyk7XG4gIH1cblxuICBzdG9wKGZpbmlzaGVkKSB7XG4gICAgaWYgKGZpbmlzaGVkID09PSB2b2lkIDApIHtcbiAgICAgIGZpbmlzaGVkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gUmVzZXQgY29sbGVjdGVkIGNoYW5nZXMgc2luY2UgdGhlIGFuaW1hdGlvbiBoYXMgYmVlbiBzdG9wcGVkIGNvbGQgdHVya2V5XG4gICAgaWYgKGZpbmlzaGVkKSBnZXRWYWx1ZXMkMSh0aGlzLmFuaW1hdGlvbnMpLmZvckVhY2goYSA9PiBhLmNoYW5nZXMgPSB1bmRlZmluZWQpO1xuICAgIHRoaXMuZGVib3VuY2VkT25FbmQoe1xuICAgICAgZmluaXNoZWRcbiAgICB9KTtcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgcmVtb3ZlQ29udHJvbGxlcih0aGlzKTtcbiAgICB0aGlzLnByb3BzID0ge307XG4gICAgdGhpcy5tZXJnZWQgPSB7fTtcbiAgICB0aGlzLmFuaW1hdGlvbnMgPSB7fTtcbiAgICB0aGlzLmludGVycG9sYXRpb25zID0ge307XG4gICAgdGhpcy5hbmltYXRlZFByb3BzID0ge307XG4gICAgdGhpcy5jb25maWdzID0gW107XG4gIH1cblxuICBkZWJvdW5jZWRPbkVuZChyZXN1bHQpIHtcbiAgICByZW1vdmVDb250cm9sbGVyKHRoaXMpO1xuICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcbiAgICBjb25zdCBvbkVuZCA9IHRoaXMub25FbmQ7XG4gICAgdGhpcy5vbkVuZCA9IG51bGw7XG4gICAgaWYgKG9uRW5kKSBvbkVuZChyZXN1bHQpO1xuICAgIGlmICh0aGlzLnJlc29sdmUpIHRoaXMucmVzb2x2ZSgpO1xuICAgIHRoaXMucmVzb2x2ZSA9IG51bGw7XG4gIH1cblxufVxuXG5jbGFzcyBBbmltYXRlZFByb3BzIGV4dGVuZHMgQW5pbWF0ZWRPYmplY3RXaXRoQ2hpbGRyZW4ge1xuICBjb25zdHJ1Y3Rvcihwcm9wcywgY2FsbGJhY2spIHtcbiAgICBzdXBlcigpO1xuICAgIGlmIChwcm9wcy5zdHlsZSkgcHJvcHMgPSBfZXh0ZW5kcyh7fSwgcHJvcHMsIHtcbiAgICAgIHN0eWxlOiBjcmVhdGVBbmltYXRlZFN0eWxlKHByb3BzLnN0eWxlKVxuICAgIH0pO1xuICAgIHRoaXMucGF5bG9hZCA9IHByb3BzO1xuICAgIHRoaXMudXBkYXRlID0gY2FsbGJhY2s7XG4gICAgdGhpcy5hdHRhY2goKTtcbiAgfVxuXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUFuaW1hdGVkQ29tcG9uZW50KENvbXBvbmVudCkge1xuICBjbGFzcyBBbmltYXRlZENvbXBvbmVudCBleHRlbmRzIFJlYWN0X19kZWZhdWx0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgIHN1cGVyKCk7XG5cbiAgICAgIHRoaXMuY2FsbGJhY2sgPSAoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLm5vZGUpIHtcbiAgICAgICAgICBjb25zdCBkaWRVcGRhdGUgPSBhcHBseUFuaW1hdGVkVmFsdWVzLmZuKHRoaXMubm9kZSwgdGhpcy5wcm9wc0FuaW1hdGVkLmdldEFuaW1hdGVkVmFsdWUoKSwgdGhpcyk7XG4gICAgICAgICAgaWYgKGRpZFVwZGF0ZSA9PT0gZmFsc2UpIHRoaXMuZm9yY2VVcGRhdGUoKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgdGhpcy5hdHRhY2hQcm9wcyhwcm9wcyk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICB0aGlzLnByb3BzQW5pbWF0ZWQgJiYgdGhpcy5wcm9wc0FuaW1hdGVkLmRldGFjaCgpO1xuICAgIH1cblxuICAgIHNldE5hdGl2ZVByb3BzKHByb3BzKSB7XG4gICAgICBjb25zdCBkaWRVcGRhdGUgPSBhcHBseUFuaW1hdGVkVmFsdWVzLmZuKHRoaXMubm9kZSwgcHJvcHMsIHRoaXMpO1xuICAgICAgaWYgKGRpZFVwZGF0ZSA9PT0gZmFsc2UpIHRoaXMuZm9yY2VVcGRhdGUoKTtcbiAgICB9IC8vIFRoZSBzeXN0ZW0gaXMgYmVzdCBkZXNpZ25lZCB3aGVuIHNldE5hdGl2ZVByb3BzIGlzIGltcGxlbWVudGVkLiBJdCBpc1xuICAgIC8vIGFibGUgdG8gYXZvaWQgcmUtcmVuZGVyaW5nIGFuZCBkaXJlY3RseSBzZXQgdGhlIGF0dHJpYnV0ZXMgdGhhdFxuICAgIC8vIGNoYW5nZWQuIEhvd2V2ZXIsIHNldE5hdGl2ZVByb3BzIGNhbiBvbmx5IGJlIGltcGxlbWVudGVkIG9uIGxlYWZcbiAgICAvLyBuYXRpdmUgY29tcG9uZW50cy4gSWYgeW91IHdhbnQgdG8gYW5pbWF0ZSBhIGNvbXBvc2l0ZSBjb21wb25lbnQsIHlvdVxuICAgIC8vIG5lZWQgdG8gcmUtcmVuZGVyIGl0LiBJbiB0aGlzIGNhc2UsIHdlIGhhdmUgYSBmYWxsYmFjayB0aGF0IHVzZXNcbiAgICAvLyBmb3JjZVVwZGF0ZS5cblxuXG4gICAgYXR0YWNoUHJvcHMoX3JlZikge1xuICAgICAgbGV0IGZvcndhcmRSZWYgPSBfcmVmLmZvcndhcmRSZWYsXG4gICAgICAgICAgbmV4dFByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3JlZiwgW1wiZm9yd2FyZFJlZlwiXSk7XG5cbiAgICAgIGNvbnN0IG9sZFByb3BzQW5pbWF0ZWQgPSB0aGlzLnByb3BzQW5pbWF0ZWQ7XG4gICAgICB0aGlzLnByb3BzQW5pbWF0ZWQgPSBuZXcgQW5pbWF0ZWRQcm9wcyhuZXh0UHJvcHMsIHRoaXMuY2FsbGJhY2spOyAvLyBXaGVuIHlvdSBjYWxsIGRldGFjaCwgaXQgcmVtb3ZlcyB0aGUgZWxlbWVudCBmcm9tIHRoZSBwYXJlbnQgbGlzdFxuICAgICAgLy8gb2YgY2hpbGRyZW4uIElmIGl0IGdvZXMgdG8gMCwgdGhlbiB0aGUgcGFyZW50IGFsc28gZGV0YWNoZXMgaXRzZWxmXG4gICAgICAvLyBhbmQgc28gb24uXG4gICAgICAvLyBBbiBvcHRpbWl6YXRpb24gaXMgdG8gYXR0YWNoIHRoZSBuZXcgZWxlbWVudHMgYW5kIFRIRU4gZGV0YWNoIHRoZSBvbGRcbiAgICAgIC8vIG9uZXMgaW5zdGVhZCBvZiBkZXRhY2hpbmcgYW5kIFRIRU4gYXR0YWNoaW5nLlxuICAgICAgLy8gVGhpcyB3YXkgdGhlIGludGVybWVkaWF0ZSBzdGF0ZSBpc24ndCB0byBnbyB0byAwIGFuZCB0cmlnZ2VyXG4gICAgICAvLyB0aGlzIGV4cGVuc2l2ZSByZWN1cnNpdmUgZGV0YWNoaW5nIHRvIHRoZW4gcmUtYXR0YWNoIGV2ZXJ5dGhpbmcgb25cbiAgICAgIC8vIHRoZSB2ZXJ5IG5leHQgb3BlcmF0aW9uLlxuXG4gICAgICBvbGRQcm9wc0FuaW1hdGVkICYmIG9sZFByb3BzQW5pbWF0ZWQuZGV0YWNoKCk7XG4gICAgfVxuXG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKHByb3BzKSB7XG4gICAgICBjb25zdCBzdHlsZSA9IHByb3BzLnN0eWxlLFxuICAgICAgICAgICAgbmV4dFByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIFtcInN0eWxlXCJdKTtcblxuICAgICAgY29uc3QgX3RoaXMkcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgY3VycmVudFN0eWxlID0gX3RoaXMkcHJvcHMuc3R5bGUsXG4gICAgICAgICAgICBjdXJyZW50UHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfdGhpcyRwcm9wcywgW1wic3R5bGVcIl0pO1xuXG4gICAgICBpZiAoIXNoYWxsb3dFcXVhbChjdXJyZW50UHJvcHMsIG5leHRQcm9wcykgfHwgIXNoYWxsb3dFcXVhbChjdXJyZW50U3R5bGUsIHN0eWxlKSkge1xuICAgICAgICB0aGlzLmF0dGFjaFByb3BzKHByb3BzKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICBjb25zdCBfdGhpcyRwcm9wc0FuaW1hdGVkJGcgPSB0aGlzLnByb3BzQW5pbWF0ZWQuZ2V0VmFsdWUoKSxcbiAgICAgICAgICAgIHNjcm9sbFRvcCA9IF90aGlzJHByb3BzQW5pbWF0ZWQkZy5zY3JvbGxUb3AsXG4gICAgICAgICAgICBzY3JvbGxMZWZ0ID0gX3RoaXMkcHJvcHNBbmltYXRlZCRnLnNjcm9sbExlZnQsXG4gICAgICAgICAgICBhbmltYXRlZFByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3RoaXMkcHJvcHNBbmltYXRlZCRnLCBbXCJzY3JvbGxUb3BcIiwgXCJzY3JvbGxMZWZ0XCJdKTtcblxuICAgICAgcmV0dXJuIFJlYWN0X19kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCBfZXh0ZW5kcyh7fSwgYW5pbWF0ZWRQcm9wcywge1xuICAgICAgICByZWY6IG5vZGUgPT4gdGhpcy5ub2RlID0gaGFuZGxlUmVmKG5vZGUsIHRoaXMucHJvcHMuZm9yd2FyZFJlZilcbiAgICAgIH0pKTtcbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBSZWFjdF9fZGVmYXVsdC5mb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiBSZWFjdF9fZGVmYXVsdC5jcmVhdGVFbGVtZW50KEFuaW1hdGVkQ29tcG9uZW50LCBfZXh0ZW5kcyh7fSwgcHJvcHMsIHtcbiAgICBmb3J3YXJkUmVmOiByZWZcbiAgfSkpKTtcbn1cblxuY29uc3QgY29uZmlnID0ge1xuICBkZWZhdWx0OiB7XG4gICAgdGVuc2lvbjogMTcwLFxuICAgIGZyaWN0aW9uOiAyNlxuICB9LFxuICBnZW50bGU6IHtcbiAgICB0ZW5zaW9uOiAxMjAsXG4gICAgZnJpY3Rpb246IDE0XG4gIH0sXG4gIHdvYmJseToge1xuICAgIHRlbnNpb246IDE4MCxcbiAgICBmcmljdGlvbjogMTJcbiAgfSxcbiAgc3RpZmY6IHtcbiAgICB0ZW5zaW9uOiAyMTAsXG4gICAgZnJpY3Rpb246IDIwXG4gIH0sXG4gIHNsb3c6IHtcbiAgICB0ZW5zaW9uOiAyODAsXG4gICAgZnJpY3Rpb246IDYwXG4gIH0sXG4gIG1vbGFzc2VzOiB7XG4gICAgdGVuc2lvbjogMjgwLFxuICAgIGZyaWN0aW9uOiAxMjBcbiAgfVxufTtcblxuY2xhc3MgU3ByaW5nIGV4dGVuZHMgUmVhY3RfX2RlZmF1bHQuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbGFzdFByb3BzOiB7XG4gICAgICAgIGZyb206IHt9LFxuICAgICAgICB0bzoge31cbiAgICAgIH0sXG4gICAgICBwcm9wc0NoYW5nZWQ6IGZhbHNlLFxuICAgICAgaW50ZXJuYWw6IGZhbHNlXG4gICAgfTtcbiAgICB0aGlzLmNvbnRyb2xsZXIgPSBuZXcgQ29udHJvbGxlcihudWxsLCBudWxsKTtcbiAgICB0aGlzLmRpZFVwZGF0ZSA9IGZhbHNlO1xuICAgIHRoaXMuZGlkSW5qZWN0ID0gZmFsc2U7XG4gICAgdGhpcy5maW5pc2hlZCA9IHRydWU7XG5cbiAgICB0aGlzLnN0YXJ0ID0gKCkgPT4ge1xuICAgICAgdGhpcy5maW5pc2hlZCA9IGZhbHNlO1xuICAgICAgbGV0IHdhc01vdW50ZWQgPSB0aGlzLm1vdW50ZWQ7XG4gICAgICB0aGlzLmNvbnRyb2xsZXIuc3RhcnQocHJvcHMgPT4gdGhpcy5maW5pc2goX2V4dGVuZHMoe30sIHByb3BzLCB7XG4gICAgICAgIHdhc01vdW50ZWRcbiAgICAgIH0pKSwgdGhpcy51cGRhdGUpO1xuICAgIH07XG5cbiAgICB0aGlzLnN0b3AgPSAoKSA9PiB0aGlzLmNvbnRyb2xsZXIuc3RvcCh0cnVlKTtcblxuICAgIHRoaXMudXBkYXRlID0gKCkgPT4gdGhpcy5tb3VudGVkICYmIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaW50ZXJuYWw6IHRydWVcbiAgICB9KTtcblxuICAgIHRoaXMuZmluaXNoID0gKF9yZWYpID0+IHtcbiAgICAgIGxldCBmaW5pc2hlZCA9IF9yZWYuZmluaXNoZWQsXG4gICAgICAgICAgbm9DaGFuZ2UgPSBfcmVmLm5vQ2hhbmdlLFxuICAgICAgICAgIHdhc01vdW50ZWQgPSBfcmVmLndhc01vdW50ZWQ7XG4gICAgICB0aGlzLmZpbmlzaGVkID0gdHJ1ZTtcblxuICAgICAgaWYgKHRoaXMubW91bnRlZCAmJiBmaW5pc2hlZCkge1xuICAgICAgICAvLyBPbmx5IGNhbGwgb25SZXN0IGlmIGVpdGhlciB3ZSAqd2VyZSogbW91bnRlZCwgb3Igd2hlbiB0aGVyZSB3ZXJlIGNoYW5nZXNcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25SZXN0ICYmICh3YXNNb3VudGVkIHx8ICFub0NoYW5nZSkpIHRoaXMucHJvcHMub25SZXN0KHRoaXMuY29udHJvbGxlci5tZXJnZWQpOyAvLyBSZXN0b3JlIGVuZC1zdGF0ZVxuXG4gICAgICAgIGlmICh0aGlzLm1vdW50ZWQgJiYgdGhpcy5kaWRJbmplY3QpIHtcbiAgICAgICAgICB0aGlzLmFmdGVySW5qZWN0ID0gY29udmVydFZhbHVlcyh0aGlzLnByb3BzKTtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGludGVybmFsOiB0cnVlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gLy8gSWYgd2UgaGF2ZSBhbiBpbmplY3Qgb3IgdmFsdWVzIHRvIGFwcGx5IGFmdGVyIHRoZSBhbmltYXRpb24gd2UgcGluZyBoZXJlXG5cblxuICAgICAgICBpZiAodGhpcy5tb3VudGVkICYmICh0aGlzLmRpZEluamVjdCB8fCB0aGlzLnByb3BzLmFmdGVyKSkgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgaW50ZXJuYWw6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZGlkSW5qZWN0ID0gZmFsc2U7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIC8vIGNvbXBvbmVudERpZFVwZGF0ZSBpc24ndCBjYWxsZWQgb24gbW91bnQsIHdlIGNhbGwgaXQgaGVyZSB0byBzdGFydCBhbmltYXRpbmdcbiAgICB0aGlzLmNvbXBvbmVudERpZFVwZGF0ZSgpO1xuICAgIHRoaXMubW91bnRlZCA9IHRydWU7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAvLyBTdG9wIGFsbCBvbmdvaW5nIGFuaW10aW9uc1xuICAgIHRoaXMubW91bnRlZCA9IGZhbHNlO1xuICAgIHRoaXMuc3RvcCgpO1xuICB9XG5cbiAgc3RhdGljIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhwcm9wcywgX3JlZjIpIHtcbiAgICBsZXQgaW50ZXJuYWwgPSBfcmVmMi5pbnRlcm5hbCxcbiAgICAgICAgbGFzdFByb3BzID0gX3JlZjIubGFzdFByb3BzO1xuICAgIC8vIFRoZSBmb2xsb3dpbmcgaXMgYSB0ZXN0IGFnYWluc3QgcHJvcHMgdGhhdCBjb3VsZCBhbHRlciB0aGUgYW5pbWF0aW9uXG4gICAgY29uc3QgZnJvbSA9IHByb3BzLmZyb20sXG4gICAgICAgICAgdG8gPSBwcm9wcy50byxcbiAgICAgICAgICByZXNldCA9IHByb3BzLnJlc2V0LFxuICAgICAgICAgIGZvcmNlID0gcHJvcHMuZm9yY2U7XG4gICAgY29uc3QgcHJvcHNDaGFuZ2VkID0gIXNoYWxsb3dFcXVhbCh0bywgbGFzdFByb3BzLnRvKSB8fCAhc2hhbGxvd0VxdWFsKGZyb20sIGxhc3RQcm9wcy5mcm9tKSB8fCByZXNldCAmJiAhaW50ZXJuYWwgfHwgZm9yY2UgJiYgIWludGVybmFsO1xuICAgIHJldHVybiB7XG4gICAgICBwcm9wc0NoYW5nZWQsXG4gICAgICBsYXN0UHJvcHM6IHByb3BzLFxuICAgICAgaW50ZXJuYWw6IGZhbHNlXG4gICAgfTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBjaGlsZHJlbiA9IHRoaXMucHJvcHMuY2hpbGRyZW47XG4gICAgY29uc3QgcHJvcHNDaGFuZ2VkID0gdGhpcy5zdGF0ZS5wcm9wc0NoYW5nZWQ7IC8vIEluamVjdCBwaGFzZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIEhhbmRsZSBpbmplY3RlZCBmcmFtZXMsIGZvciBpbnN0YW5jZSB0YXJnZXRzL3dlYi9maXgtYXV0b1xuICAgIC8vIEFuIGluamVjdCB3aWxsIHJldHVybiBhbiBpbnRlcm1lZGlhcnkgUmVhY3Qgbm9kZSB3aGljaCBtZWFzdXJlcyBpdHNlbGYgb3V0XG4gICAgLy8gLi4gYW5kIHJldHVybnMgYSBjYWxsYmFjayB3aGVuIHRoZSB2YWx1ZXMgc291Z2h0IGFmdGVyIGFyZSByZWFkeSwgdXN1YWxseSBcImF1dG9cIi5cblxuICAgIGlmICh0aGlzLnByb3BzLmluamVjdCAmJiBwcm9wc0NoYW5nZWQgJiYgIXRoaXMuaW5qZWN0UHJvcHMpIHtcbiAgICAgIGNvbnN0IGZyYW1lID0gdGhpcy5wcm9wcy5pbmplY3QodGhpcy5wcm9wcywgaW5qZWN0UHJvcHMgPT4ge1xuICAgICAgICAvLyBUaGUgaW5qZWN0IGZyYW1lIGhhcyByZW5kZXJlZCwgbm93IGxldCdzIHVwZGF0ZSBhbmltYXRpb25zLi4uXG4gICAgICAgIHRoaXMuaW5qZWN0UHJvcHMgPSBpbmplY3RQcm9wcztcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgaW50ZXJuYWw6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICB9KTsgLy8gUmVuZGVyIG91dCBpbmplY3RlZCBmcmFtZVxuXG4gICAgICBpZiAoZnJhbWUpIHJldHVybiBmcmFtZTtcbiAgICB9IC8vIFVwZGF0ZSBwaGFzZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cbiAgICBpZiAodGhpcy5pbmplY3RQcm9wcyB8fCBwcm9wc0NoYW5nZWQpIHtcbiAgICAgIC8vIFdlIGNhbiBwb3RlbnRpYWxseSBjYXVzZSBzZXRTdGF0ZSwgYnV0IHdlJ3JlIGluc2lkZSByZW5kZXIsIHRoZSBmbGFnIHByZXZlbnRzIHRoYXRcbiAgICAgIHRoaXMuZGlkSW5qZWN0ID0gZmFsc2U7IC8vIFVwZGF0ZSBhbmltYXRpb25zLCB0aGlzIHR1cm5zIGZyb20vdG8gcHJvcHMgaW50byBBbmltYXRlZFZhbHVlc1xuICAgICAgLy8gQW4gdXBkYXRlIGNhbiBvY2N1ciBvbiBpbmplY3RlZCBwcm9wcywgb3Igd2hlbiBvd24tcHJvcHMgaGF2ZSBjaGFuZ2VkLlxuXG4gICAgICBpZiAodGhpcy5pbmplY3RQcm9wcykge1xuICAgICAgICB0aGlzLmNvbnRyb2xsZXIudXBkYXRlKHRoaXMuaW5qZWN0UHJvcHMpOyAvLyBkaWRJbmplY3QgaXMgbmVlZGVkLCBiZWNhdXNlIHRoZXJlIHdpbGwgYmUgYSAzcmQgc3RhZ2UsIHdoZXJlIHRoZSBvcmlnaW5hbCB2YWx1ZXNcbiAgICAgICAgLy8gLi4gd2lsbCBiZSByZXN0b3JlZCBhZnRlciB0aGUgYW5pbWF0aW9uIGlzIGZpbmlzaGVkLiBXaGVuIHNvbWVvbmUgYW5pbWF0ZXMgdG93YXJkc1xuICAgICAgICAvLyAuLiBcImF1dG9cIiwgdGhlIGVuZC1yZXN1bHQgc2hvdWxkIGJlIFwiYXV0b1wiLCBub3QgXCIxOTk5cHhcIiwgd2hpY2ggd291bGQgYmxvY2sgbmVzdGVkXG4gICAgICAgIC8vIC4uIGhlaWdodC93aWR0aCBjaGFuZ2VzLlxuXG4gICAgICAgIHRoaXMuZGlkSW5qZWN0ID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAocHJvcHNDaGFuZ2VkKSB0aGlzLmNvbnRyb2xsZXIudXBkYXRlKHRoaXMucHJvcHMpOyAvLyBGbGFnIGFuIHVwZGF0ZSB0aGF0IG9jY3VyZWQsIGNvbXBvbmVudERpZFVwZGF0ZSB3aWxsIHN0YXJ0IHRoZSBhbmltYXRpb24gbGF0ZXIgb25cblxuXG4gICAgICB0aGlzLmRpZFVwZGF0ZSA9IHRydWU7XG4gICAgICB0aGlzLmFmdGVySW5qZWN0ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5pbmplY3RQcm9wcyA9IHVuZGVmaW5lZDtcbiAgICB9IC8vIFJlbmRlciBwaGFzZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIFJlbmRlciBvdXQgcmF3IHZhbHVlcyBvciBBbmltYXRlZFZhbHVlcyBkZXBlbmRpbmcgb24gXCJuYXRpdmVcIlxuXG5cbiAgICBsZXQgdmFsdWVzID0gX2V4dGVuZHMoe30sIHRoaXMuY29udHJvbGxlci5nZXRWYWx1ZXMoKSwgdGhpcy5hZnRlckluamVjdCk7XG5cbiAgICBpZiAodGhpcy5maW5pc2hlZCkgdmFsdWVzID0gX2V4dGVuZHMoe30sIHZhbHVlcywgdGhpcy5wcm9wcy5hZnRlcik7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHZhbHVlcykubGVuZ3RoID8gY2hpbGRyZW4odmFsdWVzKSA6IG51bGw7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgLy8gVGhlIGFuaW1hdGlvbiBoYXMgdG8gc3RhcnQgKmFmdGVyKiByZW5kZXIsIHNpbmNlIGF0IHRoYXQgcG9pbnQgdGhlIHNjZW5lXG4gICAgLy8gLi4gZ3JhcGggc2hvdWxkIGJlIGVzdGFibGlzaGVkLCBzbyB3ZSBkbyBpdCBoZXJlLiBVbmZvcnR1bmF0ZWxseSwgbm9uLW5hdGl2ZVxuICAgIC8vIC4uIGFuaW1hdGlvbnMgYXMgd2VsbCBhcyBcImF1dG9cIi1pbmplY3RzIGNhbGwgZm9yY2VVcGRhdGUsIHNvIGl0J3MgY2F1c2luZyBhIGxvb3AuXG4gICAgLy8gLi4gZGlkVXBkYXRlIHByZXZlbnRzIHRoYXQgYXMgaXQgZ2V0cyBzZXQgb25seSBvbiBwcm9wIGNoYW5nZXMuXG4gICAgaWYgKHRoaXMuZGlkVXBkYXRlKSB0aGlzLnN0YXJ0KCk7XG4gICAgdGhpcy5kaWRVcGRhdGUgPSBmYWxzZTtcbiAgfVxuXG59XG5TcHJpbmcuZGVmYXVsdFByb3BzID0ge1xuICBmcm9tOiB7fSxcbiAgdG86IHt9LFxuICBjb25maWc6IGNvbmZpZy5kZWZhdWx0LFxuICBuYXRpdmU6IGZhbHNlLFxuICBpbW1lZGlhdGU6IGZhbHNlLFxuICByZXNldDogZmFsc2UsXG4gIGZvcmNlOiBmYWxzZSxcbiAgaW5qZWN0OiBidWdmaXhlc1xufTtcblxuY2xhc3MgVHJhaWwgZXh0ZW5kcyBSZWFjdF9fZGVmYXVsdC5QdXJlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICB0aGlzLmZpcnN0ID0gdHJ1ZTtcbiAgICB0aGlzLmluc3RhbmNlcyA9IG5ldyBTZXQoKTtcblxuICAgIHRoaXMuaG9vayA9IChpbnN0YW5jZSwgaW5kZXgsIGxlbmd0aCwgcmV2ZXJzZSkgPT4ge1xuICAgICAgLy8gQWRkIGluc3RhbmNlIHRvIHNldFxuICAgICAgdGhpcy5pbnN0YW5jZXMuYWRkKGluc3RhbmNlKTsgLy8gUmV0dXJuIHVuZGVmaW5lZCBvbiB0aGUgZmlyc3QgaW5kZXggYW5kIGZyb20gdGhlbiBvbiB0aGUgcHJldmlvdXMgaW5zdGFuY2VcblxuICAgICAgaWYgKHJldmVyc2UgPyBpbmRleCA9PT0gbGVuZ3RoIC0gMSA6IGluZGV4ID09PSAwKSByZXR1cm4gdW5kZWZpbmVkO2Vsc2UgcmV0dXJuIEFycmF5LmZyb20odGhpcy5pbnN0YW5jZXMpW3JldmVyc2UgPyBpbmRleCArIDEgOiBpbmRleCAtIDFdO1xuICAgIH07XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgX3RoaXMkcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGl0ZW1zID0gX3RoaXMkcHJvcHMuaXRlbXMsXG4gICAgICAgICAgX2NoaWxkcmVuID0gX3RoaXMkcHJvcHMuY2hpbGRyZW4sXG4gICAgICAgICAgX3RoaXMkcHJvcHMkZnJvbSA9IF90aGlzJHByb3BzLmZyb20sXG4gICAgICAgICAgZnJvbSA9IF90aGlzJHByb3BzJGZyb20gPT09IHZvaWQgMCA/IHt9IDogX3RoaXMkcHJvcHMkZnJvbSxcbiAgICAgICAgICBpbml0aWFsID0gX3RoaXMkcHJvcHMuaW5pdGlhbCxcbiAgICAgICAgICByZXZlcnNlID0gX3RoaXMkcHJvcHMucmV2ZXJzZSxcbiAgICAgICAgICBrZXlzID0gX3RoaXMkcHJvcHMua2V5cyxcbiAgICAgICAgICBkZWxheSA9IF90aGlzJHByb3BzLmRlbGF5LFxuICAgICAgICAgIG9uUmVzdCA9IF90aGlzJHByb3BzLm9uUmVzdCxcbiAgICAgICAgICBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF90aGlzJHByb3BzLCBbXCJpdGVtc1wiLCBcImNoaWxkcmVuXCIsIFwiZnJvbVwiLCBcImluaXRpYWxcIiwgXCJyZXZlcnNlXCIsIFwia2V5c1wiLCBcImRlbGF5XCIsIFwib25SZXN0XCJdKTtcblxuICAgIGNvbnN0IGFycmF5ID0gdG9BcnJheShpdGVtcyk7XG4gICAgcmV0dXJuIHRvQXJyYXkoYXJyYXkpLm1hcCgoaXRlbSwgaSkgPT4gUmVhY3RfX2RlZmF1bHQuY3JlYXRlRWxlbWVudChTcHJpbmcsIF9leHRlbmRzKHtcbiAgICAgIG9uUmVzdDogaSA9PT0gMCA/IG9uUmVzdCA6IG51bGwsXG4gICAgICBrZXk6IHR5cGVvZiBrZXlzID09PSAnZnVuY3Rpb24nID8ga2V5cyhpdGVtKSA6IHRvQXJyYXkoa2V5cylbaV0sXG4gICAgICBmcm9tOiB0aGlzLmZpcnN0ICYmIGluaXRpYWwgIT09IHZvaWQgMCA/IGluaXRpYWwgfHwge30gOiBmcm9tXG4gICAgfSwgcHJvcHMsIHtcbiAgICAgIGRlbGF5OiBpID09PSAwICYmIGRlbGF5IHx8IHVuZGVmaW5lZCxcbiAgICAgIGF0dGFjaDogaW5zdGFuY2UgPT4gdGhpcy5ob29rKGluc3RhbmNlLCBpLCBhcnJheS5sZW5ndGgsIHJldmVyc2UpLFxuICAgICAgY2hpbGRyZW46IHByb3BzID0+IHtcbiAgICAgICAgY29uc3QgY2hpbGQgPSBfY2hpbGRyZW4oaXRlbSwgaSk7XG5cbiAgICAgICAgcmV0dXJuIGNoaWxkID8gY2hpbGQocHJvcHMpIDogbnVsbDtcbiAgICAgIH1cbiAgICB9KSkpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgIHRoaXMuZmlyc3QgPSBmYWxzZTtcbiAgICBpZiAocHJldlByb3BzLml0ZW1zICE9PSB0aGlzLnByb3BzLml0ZW1zKSB0aGlzLmluc3RhbmNlcy5jbGVhcigpO1xuICB9XG5cbn1cblRyYWlsLmRlZmF1bHRQcm9wcyA9IHtcbiAga2V5czogaXRlbSA9PiBpdGVtXG59O1xuXG5jb25zdCBERUZBVUxUID0gJ19fZGVmYXVsdCc7XG5cbmNsYXNzIEtleWZyYW1lc0ltcGwgZXh0ZW5kcyBSZWFjdF9fZGVmYXVsdC5QdXJlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICBfdGhpcyA9IHRoaXM7XG4gICAgdGhpcy5ndWlkID0gMDtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgcHJvcHM6IHt9LFxuICAgICAgcmVzb2x2ZTogKCkgPT4gbnVsbCxcbiAgICAgIGxhc3Q6IHRydWUsXG4gICAgICBpbmRleDogMFxuICAgIH07XG5cbiAgICB0aGlzLm5leHQgPSBmdW5jdGlvbiAocHJvcHMsIGxhc3QsIGluZGV4KSB7XG4gICAgICBpZiAobGFzdCA9PT0gdm9pZCAwKSB7XG4gICAgICAgIGxhc3QgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoaW5kZXggPT09IHZvaWQgMCkge1xuICAgICAgICBpbmRleCA9IDA7XG4gICAgICB9XG5cbiAgICAgIF90aGlzLnJ1bm5pbmcgPSB0cnVlO1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICBfdGhpcy5tb3VudGVkICYmIF90aGlzLnNldFN0YXRlKHN0YXRlID0+ICh7XG4gICAgICAgICAgcHJvcHMsXG4gICAgICAgICAgcmVzb2x2ZSxcbiAgICAgICAgICBsYXN0LFxuICAgICAgICAgIGluZGV4XG4gICAgICAgIH0pLCAoKSA9PiBfdGhpcy5ydW5uaW5nID0gZmFsc2UpO1xuICAgICAgfSk7XG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMubW91bnRlZCA9IHRydWU7XG4gICAgdGhpcy5jb21wb25lbnREaWRVcGRhdGUoe30pO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5tb3VudGVkID0gZmFsc2U7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldmlvdXMpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIGNvbnN0IF90aGlzJHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBzdGF0ZXMgPSBfdGhpcyRwcm9wcy5zdGF0ZXMsXG4gICAgICAgICAgZiA9IF90aGlzJHByb3BzLmZpbHRlcixcbiAgICAgICAgICBzdGF0ZSA9IF90aGlzJHByb3BzLnN0YXRlO1xuXG4gICAgaWYgKHByZXZpb3VzLnN0YXRlICE9PSB0aGlzLnByb3BzLnN0YXRlIHx8IHRoaXMucHJvcHMucmVzZXQgJiYgIXRoaXMucnVubmluZyB8fCAhc2hhbGxvd0VxdWFsKHN0YXRlc1tzdGF0ZV0sIHByZXZpb3VzLnN0YXRlc1twcmV2aW91cy5zdGF0ZV0pKSB7XG4gICAgICBpZiAoc3RhdGVzICYmIHN0YXRlICYmIHN0YXRlc1tzdGF0ZV0pIHtcbiAgICAgICAgY29uc3QgbG9jYWxJZCA9ICsrdGhpcy5ndWlkO1xuICAgICAgICBjb25zdCBzbG90cyA9IHN0YXRlc1tzdGF0ZV07XG5cbiAgICAgICAgaWYgKHNsb3RzKSB7XG4gICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoc2xvdHMpKSB7XG4gICAgICAgICAgICBsZXQgcSA9IFByb21pc2UucmVzb2x2ZSgpO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNsb3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgIGxldCBpbmRleCA9IGk7XG4gICAgICAgICAgICAgIGxldCBzbG90ID0gc2xvdHNbaW5kZXhdO1xuICAgICAgICAgICAgICBsZXQgbGFzdCA9IGluZGV4ID09PSBzbG90cy5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICBxID0gcS50aGVuKCgpID0+IGxvY2FsSWQgPT09IHRoaXMuZ3VpZCAmJiB0aGlzLm5leHQoZihzbG90KSwgbGFzdCwgaW5kZXgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBzbG90cyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgbGV0IGluZGV4ID0gMDtcbiAgICAgICAgICAgIHNsb3RzKCAvLyBuZXh0XG4gICAgICAgICAgICBmdW5jdGlvbiAocHJvcHMsIGxhc3QpIHtcbiAgICAgICAgICAgICAgaWYgKGxhc3QgPT09IHZvaWQgMCkge1xuICAgICAgICAgICAgICAgIGxhc3QgPSBmYWxzZTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHJldHVybiBsb2NhbElkID09PSBfdGhpczIuZ3VpZCAmJiBfdGhpczIubmV4dChmKHByb3BzKSwgbGFzdCwgaW5kZXgrKyk7XG4gICAgICAgICAgICB9LCAvLyBjYW5jZWxcbiAgICAgICAgICAgICgpID0+IHJlcXVlc3RGcmFtZSgoKSA9PiB0aGlzLmluc3RhbmNlICYmIHRoaXMuaW5zdGFuY2Uuc3RvcCgpKSwgLy8gb3ducHJvcHNcbiAgICAgICAgICAgIHRoaXMucHJvcHMpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm5leHQoZihzdGF0ZXNbc3RhdGVdKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IF90aGlzJHN0YXRlID0gdGhpcy5zdGF0ZSxcbiAgICAgICAgICBwcm9wcyA9IF90aGlzJHN0YXRlLnByb3BzLFxuICAgICAgICAgIHJlc29sdmUgPSBfdGhpcyRzdGF0ZS5yZXNvbHZlLFxuICAgICAgICAgIGxhc3QgPSBfdGhpcyRzdGF0ZS5sYXN0LFxuICAgICAgICAgIGluZGV4ID0gX3RoaXMkc3RhdGUuaW5kZXg7XG4gICAgaWYgKCFwcm9wcyB8fCBPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoID09PSAwKSByZXR1cm4gbnVsbDtcblxuICAgIGxldCBfdGhpcyRwcm9wczIgPSB0aGlzLnByb3BzLFxuICAgICAgICBzdGF0ZSA9IF90aGlzJHByb3BzMi5zdGF0ZSxcbiAgICAgICAgZmlsdGVyID0gX3RoaXMkcHJvcHMyLmZpbHRlcixcbiAgICAgICAgc3RhdGVzID0gX3RoaXMkcHJvcHMyLnN0YXRlcyxcbiAgICAgICAgY29uZmlnID0gX3RoaXMkcHJvcHMyLmNvbmZpZyxcbiAgICAgICAgQ29tcG9uZW50ID0gX3RoaXMkcHJvcHMyLnByaW1pdGl2ZSxcbiAgICAgICAgX29uUmVzdCA9IF90aGlzJHByb3BzMi5vblJlc3QsXG4gICAgICAgIGZvcndhcmRSZWYgPSBfdGhpcyRwcm9wczIuZm9yd2FyZFJlZixcbiAgICAgICAgcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF90aGlzJHByb3BzMiwgW1wic3RhdGVcIiwgXCJmaWx0ZXJcIiwgXCJzdGF0ZXNcIiwgXCJjb25maWdcIiwgXCJwcmltaXRpdmVcIiwgXCJvblJlc3RcIiwgXCJmb3J3YXJkUmVmXCJdKTsgLy8gQXJyYXllZCBjb25maWdzIG5lZWQgYW4gaW5kZXggdG8gcHJvY2Vzc1xuXG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShjb25maWcpKSBjb25maWcgPSBjb25maWdbaW5kZXhdO1xuICAgIHJldHVybiBSZWFjdF9fZGVmYXVsdC5jcmVhdGVFbGVtZW50KENvbXBvbmVudCwgX2V4dGVuZHMoe1xuICAgICAgcmVmOiBfcmVmID0+IHRoaXMuaW5zdGFuY2UgPSBoYW5kbGVSZWYoX3JlZiwgZm9yd2FyZFJlZiksXG4gICAgICBjb25maWc6IGNvbmZpZ1xuICAgIH0sIHJlc3QsIHByb3BzLCB7XG4gICAgICBvblJlc3Q6IGFyZ3MgPT4ge1xuICAgICAgICByZXNvbHZlKGFyZ3MpO1xuICAgICAgICBpZiAoX29uUmVzdCAmJiBsYXN0KSBfb25SZXN0KGFyZ3MpO1xuICAgICAgfVxuICAgIH0pKTtcbiAgfVxuXG59XG5cbktleWZyYW1lc0ltcGwuZGVmYXVsdFByb3BzID0ge1xuICBzdGF0ZTogREVGQVVMVFxufTtcbmNvbnN0IEtleWZyYW1lcyA9IFJlYWN0X19kZWZhdWx0LmZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IFJlYWN0X19kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoS2V5ZnJhbWVzSW1wbCwgX2V4dGVuZHMoe30sIHByb3BzLCB7XG4gIGZvcndhcmRSZWY6IHJlZlxufSkpKTtcblxuS2V5ZnJhbWVzLmNyZWF0ZSA9IHByaW1pdGl2ZSA9PiBmdW5jdGlvbiAoc3RhdGVzLCBmaWx0ZXIpIHtcbiAgaWYgKGZpbHRlciA9PT0gdm9pZCAwKSB7XG4gICAgZmlsdGVyID0gc3RhdGVzID0+IHN0YXRlcztcbiAgfVxuXG4gIGlmICh0eXBlb2Ygc3RhdGVzID09PSAnZnVuY3Rpb24nIHx8IEFycmF5LmlzQXJyYXkoc3RhdGVzKSkgc3RhdGVzID0ge1xuICAgIFtERUZBVUxUXTogc3RhdGVzXG4gIH07XG4gIHJldHVybiBwcm9wcyA9PiBSZWFjdF9fZGVmYXVsdC5jcmVhdGVFbGVtZW50KEtleWZyYW1lc0ltcGwsIF9leHRlbmRzKHtcbiAgICBwcmltaXRpdmU6IHByaW1pdGl2ZSxcbiAgICBzdGF0ZXM6IHN0YXRlcyxcbiAgICBmaWx0ZXI6IGZpbHRlclxuICB9LCBwcm9wcykpO1xufTtcblxuS2V5ZnJhbWVzLlNwcmluZyA9IHN0YXRlcyA9PiBLZXlmcmFtZXMuY3JlYXRlKFNwcmluZykoc3RhdGVzLCBpbnRlcnBvbGF0ZVRvKTtcblxuS2V5ZnJhbWVzLlRyYWlsID0gc3RhdGVzID0+IEtleWZyYW1lcy5jcmVhdGUoVHJhaWwpKHN0YXRlcywgaW50ZXJwb2xhdGVUbyk7XG5cbmxldCBndWlkID0gMDtcblxubGV0IGdldCA9IHByb3BzID0+IHtcbiAgbGV0IGl0ZW1zID0gcHJvcHMuaXRlbXMsXG4gICAgICBrZXlzID0gcHJvcHMua2V5cyxcbiAgICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgW1wiaXRlbXNcIiwgXCJrZXlzXCJdKTtcblxuICBpdGVtcyA9IHRvQXJyYXkoaXRlbXMgIT09IHZvaWQgMCA/IGl0ZW1zIDogbnVsbCk7XG4gIGtleXMgPSB0eXBlb2Yga2V5cyA9PT0gJ2Z1bmN0aW9uJyA/IGl0ZW1zLm1hcChrZXlzKSA6IHRvQXJyYXkoa2V5cyk7IC8vIE1ha2Ugc3VyZSBudW1lcmljIGtleXMgYXJlIGludGVycHJldGVkIGFzIFN0cmluZ3MgKDUgIT09IFwiNVwiKVxuXG4gIHJldHVybiBfZXh0ZW5kcyh7XG4gICAgaXRlbXMsXG4gICAga2V5czoga2V5cy5tYXAoa2V5ID0+IFN0cmluZyhrZXkpKVxuICB9LCByZXN0KTtcbn07XG5cbmNsYXNzIFRyYW5zaXRpb24gZXh0ZW5kcyBSZWFjdF9fZGVmYXVsdC5QdXJlQ29tcG9uZW50IHtcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5tb3VudGVkID0gdHJ1ZTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMubW91bnRlZCA9IGZhbHNlO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJldlByb3BzKSB7XG4gICAgc3VwZXIocHJldlByb3BzKTtcblxuICAgIHRoaXMuZGVzdHJveUl0ZW0gPSAoaXRlbSwga2V5LCBzdGF0ZSkgPT4gdmFsdWVzID0+IHtcbiAgICAgIGNvbnN0IF90aGlzJHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIG9uUmVzdCA9IF90aGlzJHByb3BzLm9uUmVzdCxcbiAgICAgICAgICAgIG9uRGVzdHJveWVkID0gX3RoaXMkcHJvcHMub25EZXN0cm95ZWQ7XG5cbiAgICAgIGlmICh0aGlzLm1vdW50ZWQpIHtcbiAgICAgICAgb25EZXN0cm95ZWQgJiYgb25EZXN0cm95ZWQoaXRlbSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoKF9yZWYpID0+IHtcbiAgICAgICAgICBsZXQgZGVsZXRlZCA9IF9yZWYuZGVsZXRlZDtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZGVsZXRlZDogZGVsZXRlZC5maWx0ZXIodCA9PiB0LmtleSAhPT0ga2V5KVxuICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgICAgICBvblJlc3QgJiYgb25SZXN0KGl0ZW0sIHN0YXRlLCB2YWx1ZXMpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZmlyc3Q6IHRydWUsXG4gICAgICB0cmFuc2l0aW9uczogW10sXG4gICAgICBjdXJyZW50OiB7fSxcbiAgICAgIGRlbGV0ZWQ6IFtdLFxuICAgICAgcHJldlByb3BzXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMocHJvcHMsIF9yZWYyKSB7XG4gICAgbGV0IGZpcnN0ID0gX3JlZjIuZmlyc3QsXG4gICAgICAgIHByZXZQcm9wcyA9IF9yZWYyLnByZXZQcm9wcyxcbiAgICAgICAgc3RhdGUgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfcmVmMiwgW1wiZmlyc3RcIiwgXCJwcmV2UHJvcHNcIl0pO1xuXG4gICAgbGV0IF9nZXQgPSBnZXQocHJvcHMpLFxuICAgICAgICBpdGVtcyA9IF9nZXQuaXRlbXMsXG4gICAgICAgIGtleXMgPSBfZ2V0LmtleXMsXG4gICAgICAgIGluaXRpYWwgPSBfZ2V0LmluaXRpYWwsXG4gICAgICAgIGZyb20gPSBfZ2V0LmZyb20sXG4gICAgICAgIGVudGVyID0gX2dldC5lbnRlcixcbiAgICAgICAgbGVhdmUgPSBfZ2V0LmxlYXZlLFxuICAgICAgICB1cGRhdGUgPSBfZ2V0LnVwZGF0ZSxcbiAgICAgICAgX2dldCR0cmFpbCA9IF9nZXQudHJhaWwsXG4gICAgICAgIHRyYWlsID0gX2dldCR0cmFpbCA9PT0gdm9pZCAwID8gMCA6IF9nZXQkdHJhaWwsXG4gICAgICAgIHVuaXF1ZSA9IF9nZXQudW5pcXVlLFxuICAgICAgICBjb25maWcgPSBfZ2V0LmNvbmZpZztcblxuICAgIGxldCBfZ2V0MiA9IGdldChwcmV2UHJvcHMpLFxuICAgICAgICBfa2V5cyA9IF9nZXQyLmtleXMsXG4gICAgICAgIF9pdGVtcyA9IF9nZXQyLml0ZW1zO1xuXG4gICAgbGV0IGN1cnJlbnQgPSBfZXh0ZW5kcyh7fSwgc3RhdGUuY3VycmVudCk7XG5cbiAgICBsZXQgZGVsZXRlZCA9IFsuLi5zdGF0ZS5kZWxldGVkXTsgLy8gQ29tcGFyZSBuZXh0IGtleXMgd2l0aCBjdXJyZW50IGtleXNcblxuICAgIGxldCBjdXJyZW50S2V5cyA9IE9iamVjdC5rZXlzKGN1cnJlbnQpO1xuICAgIGxldCBjdXJyZW50U2V0ID0gbmV3IFNldChjdXJyZW50S2V5cyk7XG4gICAgbGV0IG5leHRTZXQgPSBuZXcgU2V0KGtleXMpO1xuICAgIGxldCBhZGRlZCA9IGtleXMuZmlsdGVyKGl0ZW0gPT4gIWN1cnJlbnRTZXQuaGFzKGl0ZW0pKTtcbiAgICBsZXQgcmVtb3ZlZCA9IHN0YXRlLnRyYW5zaXRpb25zLmZpbHRlcihpdGVtID0+ICFpdGVtLmRlc3Ryb3llZCAmJiAhbmV4dFNldC5oYXMoaXRlbS5vcmlnaW5hbEtleSkpLm1hcChpID0+IGkub3JpZ2luYWxLZXkpO1xuICAgIGxldCB1cGRhdGVkID0ga2V5cy5maWx0ZXIoaXRlbSA9PiBjdXJyZW50U2V0LmhhcyhpdGVtKSk7XG4gICAgbGV0IGRlbGF5ID0gMDtcbiAgICBhZGRlZC5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAvLyBJbiB1bmlxdWUgbW9kZSwgcmVtb3ZlIGZhZGluZyBvdXQgdHJhbnNpdGlvbnMgaWYgdGhlaXIga2V5IGNvbWVzIGluIGFnYWluXG4gICAgICBpZiAodW5pcXVlICYmIGRlbGV0ZWQuZmluZChkID0+IGQub3JpZ2luYWxLZXkgPT09IGtleSkpIGRlbGV0ZWQgPSBkZWxldGVkLmZpbHRlcih0ID0+IHQub3JpZ2luYWxLZXkgIT09IGtleSk7XG4gICAgICBjb25zdCBrZXlJbmRleCA9IGtleXMuaW5kZXhPZihrZXkpO1xuICAgICAgY29uc3QgaXRlbSA9IGl0ZW1zW2tleUluZGV4XTtcbiAgICAgIGNvbnN0IHN0YXRlID0gJ2VudGVyJztcbiAgICAgIGN1cnJlbnRba2V5XSA9IHtcbiAgICAgICAgc3RhdGUsXG4gICAgICAgIG9yaWdpbmFsS2V5OiBrZXksXG4gICAgICAgIGtleTogdW5pcXVlID8gU3RyaW5nKGtleSkgOiBndWlkKyssXG4gICAgICAgIGl0ZW0sXG4gICAgICAgIHRyYWlsOiBkZWxheSA9IGRlbGF5ICsgdHJhaWwsXG4gICAgICAgIGNvbmZpZzogY2FsbFByb3AoY29uZmlnLCBpdGVtLCBzdGF0ZSksXG4gICAgICAgIGZyb206IGNhbGxQcm9wKGZpcnN0ID8gaW5pdGlhbCAhPT0gdm9pZCAwID8gaW5pdGlhbCB8fCB7fSA6IGZyb20gOiBmcm9tLCBpdGVtKSxcbiAgICAgICAgdG86IGNhbGxQcm9wKGVudGVyLCBpdGVtKVxuICAgICAgfTtcbiAgICB9KTtcbiAgICByZW1vdmVkLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIGNvbnN0IGtleUluZGV4ID0gX2tleXMuaW5kZXhPZihrZXkpO1xuXG4gICAgICBjb25zdCBpdGVtID0gX2l0ZW1zW2tleUluZGV4XTtcbiAgICAgIGNvbnN0IHN0YXRlID0gJ2xlYXZlJztcbiAgICAgIGRlbGV0ZWQucHVzaChfZXh0ZW5kcyh7fSwgY3VycmVudFtrZXldLCB7XG4gICAgICAgIHN0YXRlLFxuICAgICAgICBkZXN0cm95ZWQ6IHRydWUsXG4gICAgICAgIGxlZnQ6IF9rZXlzW01hdGgubWF4KDAsIGtleUluZGV4IC0gMSldLFxuICAgICAgICByaWdodDogX2tleXNbTWF0aC5taW4oX2tleXMubGVuZ3RoLCBrZXlJbmRleCArIDEpXSxcbiAgICAgICAgdHJhaWw6IGRlbGF5ID0gZGVsYXkgKyB0cmFpbCxcbiAgICAgICAgY29uZmlnOiBjYWxsUHJvcChjb25maWcsIGl0ZW0sIHN0YXRlKSxcbiAgICAgICAgdG86IGNhbGxQcm9wKGxlYXZlLCBpdGVtKVxuICAgICAgfSkpO1xuICAgICAgZGVsZXRlIGN1cnJlbnRba2V5XTtcbiAgICB9KTtcbiAgICB1cGRhdGVkLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIGNvbnN0IGtleUluZGV4ID0ga2V5cy5pbmRleE9mKGtleSk7XG4gICAgICBjb25zdCBpdGVtID0gaXRlbXNba2V5SW5kZXhdO1xuICAgICAgY29uc3Qgc3RhdGUgPSAndXBkYXRlJztcbiAgICAgIGN1cnJlbnRba2V5XSA9IF9leHRlbmRzKHt9LCBjdXJyZW50W2tleV0sIHtcbiAgICAgICAgaXRlbSxcbiAgICAgICAgc3RhdGUsXG4gICAgICAgIHRyYWlsOiBkZWxheSA9IGRlbGF5ICsgdHJhaWwsXG4gICAgICAgIGNvbmZpZzogY2FsbFByb3AoY29uZmlnLCBpdGVtLCBzdGF0ZSksXG4gICAgICAgIHRvOiBjYWxsUHJvcCh1cGRhdGUsIGl0ZW0pXG4gICAgICB9KTtcbiAgICB9KTsgLy8gVGhpcyB0cmllcyB0byByZXN0b3JlIG9yZGVyIGZvciBkZWxldGVkIGl0ZW1zIGJ5IGZpbmRpbmcgdGhlaXIgbGFzdCBrbm93biBzaWJsaW5nc1xuXG4gICAgbGV0IG91dCA9IGtleXMubWFwKGtleSA9PiBjdXJyZW50W2tleV0pO1xuICAgIGRlbGV0ZWQuZm9yRWFjaCgoX3JlZjMpID0+IHtcbiAgICAgIGxldCBsZWZ0ID0gX3JlZjMubGVmdCxcbiAgICAgICAgICByaWdodCA9IF9yZWYzLnJpZ2h0LFxuICAgICAgICAgIHRyYW5zaXRpb24gPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfcmVmMywgW1wibGVmdFwiLCBcInJpZ2h0XCJdKTtcblxuICAgICAgbGV0IHBvczsgLy8gV2FzIGl0IHRoZSBlbGVtZW50IG9uIHRoZSBsZWZ0LCBpZiB5ZXMsIG1vdmUgdGhlcmUgLi4uXG5cbiAgICAgIGlmICgocG9zID0gb3V0LmZpbmRJbmRleCh0ID0+IHQub3JpZ2luYWxLZXkgPT09IGxlZnQpKSAhPT0gLTEpIHBvcyArPSAxOyAvLyBPciBob3cgYWJvdXQgdGhlIGVsZW1lbnQgb24gdGhlIHJpZ2h0IC4uLlxuXG4gICAgICBpZiAocG9zID09PSAtMSkgcG9zID0gb3V0LmZpbmRJbmRleCh0ID0+IHQub3JpZ2luYWxLZXkgPT09IHJpZ2h0KTsgLy8gTWF5YmUgd2UnbGwgZmluZCBpdCBpbiB0aGUgbGlzdCBvZiBkZWxldGVkIGl0ZW1zXG5cbiAgICAgIGlmIChwb3MgPT09IC0xKSBwb3MgPSBkZWxldGVkLmZpbmRJbmRleCh0ID0+IHQub3JpZ2luYWxLZXkgPT09IGxlZnQpOyAvLyBDaGVja2luZyByaWdodCBzaWRlIGFzIHdlbGxcblxuICAgICAgaWYgKHBvcyA9PT0gLTEpIHBvcyA9IGRlbGV0ZWQuZmluZEluZGV4KHQgPT4gdC5vcmlnaW5hbEtleSA9PT0gcmlnaHQpOyAvLyBBbmQgaWYgbm90aGluZyBlbHNlIGhlbHBzLCBtb3ZlIGl0IHRvIHRoZSBzdGFydCDCr1xcXyjjg4QpXy/Cr1xuXG4gICAgICBwb3MgPSBNYXRoLm1heCgwLCBwb3MpO1xuICAgICAgb3V0ID0gWy4uLm91dC5zbGljZSgwLCBwb3MpLCB0cmFuc2l0aW9uLCAuLi5vdXQuc2xpY2UocG9zKV07XG4gICAgfSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGZpcnN0OiBmaXJzdCAmJiBhZGRlZC5sZW5ndGggPT09IDAsXG4gICAgICB0cmFuc2l0aW9uczogb3V0LFxuICAgICAgY3VycmVudCxcbiAgICAgIGRlbGV0ZWQsXG4gICAgICBwcmV2UHJvcHM6IHByb3BzXG4gICAgfTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBfdGhpcyRwcm9wczIgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGluaXRpYWwgPSBfdGhpcyRwcm9wczIuaW5pdGlhbCxcbiAgICAgICAgICBfdGhpcyRwcm9wczIkZnJvbSA9IF90aGlzJHByb3BzMi5mcm9tLFxuICAgICAgICAgIF90aGlzJHByb3BzMiRlbnRlciA9IF90aGlzJHByb3BzMi5lbnRlcixcbiAgICAgICAgICBfdGhpcyRwcm9wczIkbGVhdmUgPSBfdGhpcyRwcm9wczIubGVhdmUsXG4gICAgICAgICAgX3RoaXMkcHJvcHMyJHVwZGF0ZSA9IF90aGlzJHByb3BzMi51cGRhdGUsXG4gICAgICAgICAgb25EZXN0cm95ZWQgPSBfdGhpcyRwcm9wczIub25EZXN0cm95ZWQsXG4gICAgICAgICAga2V5cyA9IF90aGlzJHByb3BzMi5rZXlzLFxuICAgICAgICAgIGl0ZW1zID0gX3RoaXMkcHJvcHMyLml0ZW1zLFxuICAgICAgICAgIG9uRnJhbWUgPSBfdGhpcyRwcm9wczIub25GcmFtZSxcbiAgICAgICAgICBvblJlc3QgPSBfdGhpcyRwcm9wczIub25SZXN0LFxuICAgICAgICAgIG9uU3RhcnQgPSBfdGhpcyRwcm9wczIub25TdGFydCxcbiAgICAgICAgICB0cmFpbCA9IF90aGlzJHByb3BzMi50cmFpbCxcbiAgICAgICAgICBjb25maWcgPSBfdGhpcyRwcm9wczIuY29uZmlnLFxuICAgICAgICAgIF9jaGlsZHJlbiA9IF90aGlzJHByb3BzMi5jaGlsZHJlbixcbiAgICAgICAgICB1bmlxdWUgPSBfdGhpcyRwcm9wczIudW5pcXVlLFxuICAgICAgICAgIHJlc2V0ID0gX3RoaXMkcHJvcHMyLnJlc2V0LFxuICAgICAgICAgIGV4dHJhID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3RoaXMkcHJvcHMyLCBbXCJpbml0aWFsXCIsIFwiZnJvbVwiLCBcImVudGVyXCIsIFwibGVhdmVcIiwgXCJ1cGRhdGVcIiwgXCJvbkRlc3Ryb3llZFwiLCBcImtleXNcIiwgXCJpdGVtc1wiLCBcIm9uRnJhbWVcIiwgXCJvblJlc3RcIiwgXCJvblN0YXJ0XCIsIFwidHJhaWxcIiwgXCJjb25maWdcIiwgXCJjaGlsZHJlblwiLCBcInVuaXF1ZVwiLCBcInJlc2V0XCJdKTtcblxuICAgIHJldHVybiB0aGlzLnN0YXRlLnRyYW5zaXRpb25zLm1hcCgoX3JlZjQsIGkpID0+IHtcbiAgICAgIGxldCBzdGF0ZSA9IF9yZWY0LnN0YXRlLFxuICAgICAgICAgIGtleSA9IF9yZWY0LmtleSxcbiAgICAgICAgICBpdGVtID0gX3JlZjQuaXRlbSxcbiAgICAgICAgICBmcm9tID0gX3JlZjQuZnJvbSxcbiAgICAgICAgICB0byA9IF9yZWY0LnRvLFxuICAgICAgICAgIHRyYWlsID0gX3JlZjQudHJhaWwsXG4gICAgICAgICAgY29uZmlnID0gX3JlZjQuY29uZmlnLFxuICAgICAgICAgIGRlc3Ryb3llZCA9IF9yZWY0LmRlc3Ryb3llZDtcbiAgICAgIHJldHVybiBSZWFjdF9fZGVmYXVsdC5jcmVhdGVFbGVtZW50KEtleWZyYW1lcywgX2V4dGVuZHMoe1xuICAgICAgICByZXNldDogcmVzZXQgJiYgc3RhdGUgPT09ICdlbnRlcicsXG4gICAgICAgIHByaW1pdGl2ZTogU3ByaW5nLFxuICAgICAgICBzdGF0ZTogc3RhdGUsXG4gICAgICAgIGZpbHRlcjogaW50ZXJwb2xhdGVUbyxcbiAgICAgICAgc3RhdGVzOiB7XG4gICAgICAgICAgW3N0YXRlXTogdG9cbiAgICAgICAgfSxcbiAgICAgICAga2V5OiBrZXksXG4gICAgICAgIG9uUmVzdDogZGVzdHJveWVkID8gdGhpcy5kZXN0cm95SXRlbShpdGVtLCBrZXksIHN0YXRlKSA6IG9uUmVzdCAmJiAodmFsdWVzID0+IG9uUmVzdChpdGVtLCBzdGF0ZSwgdmFsdWVzKSksXG4gICAgICAgIG9uU3RhcnQ6IG9uU3RhcnQgJiYgKCgpID0+IG9uU3RhcnQoaXRlbSwgc3RhdGUpKSxcbiAgICAgICAgb25GcmFtZTogb25GcmFtZSAmJiAodmFsdWVzID0+IG9uRnJhbWUoaXRlbSwgc3RhdGUsIHZhbHVlcykpLFxuICAgICAgICBkZWxheTogdHJhaWwsXG4gICAgICAgIGNvbmZpZzogY29uZmlnXG4gICAgICB9LCBleHRyYSwge1xuICAgICAgICBmcm9tOiBmcm9tLFxuICAgICAgICBjaGlsZHJlbjogcHJvcHMgPT4ge1xuICAgICAgICAgIGNvbnN0IGNoaWxkID0gX2NoaWxkcmVuKGl0ZW0sIHN0YXRlLCBpKTtcblxuICAgICAgICAgIHJldHVybiBjaGlsZCA/IGNoaWxkKHByb3BzKSA6IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH0pKTtcbiAgICB9KTtcbiAgfVxuXG59XG5UcmFuc2l0aW9uLmRlZmF1bHRQcm9wcyA9IHtcbiAga2V5czogaXRlbSA9PiBpdGVtLFxuICB1bmlxdWU6IGZhbHNlLFxuICByZXNldDogZmFsc2Vcbn07XG5cbmNvbnN0IGRvbUVsZW1lbnRzID0gWydhJywgJ2FiYnInLCAnYWRkcmVzcycsICdhcmVhJywgJ2FydGljbGUnLCAnYXNpZGUnLCAnYXVkaW8nLCAnYicsICdiYXNlJywgJ2JkaScsICdiZG8nLCAnYmlnJywgJ2Jsb2NrcXVvdGUnLCAnYm9keScsICdicicsICdidXR0b24nLCAnY2FudmFzJywgJ2NhcHRpb24nLCAnY2l0ZScsICdjb2RlJywgJ2NvbCcsICdjb2xncm91cCcsICdkYXRhJywgJ2RhdGFsaXN0JywgJ2RkJywgJ2RlbCcsICdkZXRhaWxzJywgJ2RmbicsICdkaWFsb2cnLCAnZGl2JywgJ2RsJywgJ2R0JywgJ2VtJywgJ2VtYmVkJywgJ2ZpZWxkc2V0JywgJ2ZpZ2NhcHRpb24nLCAnZmlndXJlJywgJ2Zvb3RlcicsICdmb3JtJywgJ2gxJywgJ2gyJywgJ2gzJywgJ2g0JywgJ2g1JywgJ2g2JywgJ2hlYWQnLCAnaGVhZGVyJywgJ2hncm91cCcsICdocicsICdodG1sJywgJ2knLCAnaWZyYW1lJywgJ2ltZycsICdpbnB1dCcsICdpbnMnLCAna2JkJywgJ2tleWdlbicsICdsYWJlbCcsICdsZWdlbmQnLCAnbGknLCAnbGluaycsICdtYWluJywgJ21hcCcsICdtYXJrJywgJ21hcnF1ZWUnLCAnbWVudScsICdtZW51aXRlbScsICdtZXRhJywgJ21ldGVyJywgJ25hdicsICdub3NjcmlwdCcsICdvYmplY3QnLCAnb2wnLCAnb3B0Z3JvdXAnLCAnb3B0aW9uJywgJ291dHB1dCcsICdwJywgJ3BhcmFtJywgJ3BpY3R1cmUnLCAncHJlJywgJ3Byb2dyZXNzJywgJ3EnLCAncnAnLCAncnQnLCAncnVieScsICdzJywgJ3NhbXAnLCAnc2NyaXB0JywgJ3NlY3Rpb24nLCAnc2VsZWN0JywgJ3NtYWxsJywgJ3NvdXJjZScsICdzcGFuJywgJ3N0cm9uZycsICdzdHlsZScsICdzdWInLCAnc3VtbWFyeScsICdzdXAnLCAndGFibGUnLCAndGJvZHknLCAndGQnLCAndGV4dGFyZWEnLCAndGZvb3QnLCAndGgnLCAndGhlYWQnLCAndGltZScsICd0aXRsZScsICd0cicsICd0cmFjaycsICd1JywgJ3VsJywgJ3ZhcicsICd2aWRlbycsICd3YnInLCAvLyBTVkdcbidjaXJjbGUnLCAnY2xpcFBhdGgnLCAnZGVmcycsICdlbGxpcHNlJywgJ2ZvcmVpZ25PYmplY3QnLCAnZycsICdpbWFnZScsICdsaW5lJywgJ2xpbmVhckdyYWRpZW50JywgJ21hc2snLCAncGF0aCcsICdwYXR0ZXJuJywgJ3BvbHlnb24nLCAncG9seWxpbmUnLCAncmFkaWFsR3JhZGllbnQnLCAncmVjdCcsICdzdG9wJywgJ3N2ZycsICd0ZXh0JywgJ3RzcGFuJ107XG5jb25zdCBleHRlbmRlZEFuaW1hdGVkID0gZG9tRWxlbWVudHMucmVkdWNlKChhY2MsIGVsZW1lbnQpID0+IHtcbiAgYWNjW2VsZW1lbnRdID0gY3JlYXRlQW5pbWF0ZWRDb21wb25lbnQoZWxlbWVudCk7XG4gIHJldHVybiBhY2M7XG59LCBjcmVhdGVBbmltYXRlZENvbXBvbmVudCk7XG5cbmV4cG9ydHMuU3ByaW5nID0gU3ByaW5nO1xuZXhwb3J0cy5LZXlmcmFtZXMgPSBLZXlmcmFtZXM7XG5leHBvcnRzLlRyYW5zaXRpb24gPSBUcmFuc2l0aW9uO1xuZXhwb3J0cy5UcmFpbCA9IFRyYWlsO1xuZXhwb3J0cy5Db250cm9sbGVyID0gQ29udHJvbGxlcjtcbmV4cG9ydHMuY29uZmlnID0gY29uZmlnO1xuZXhwb3J0cy5hbmltYXRlZCA9IGV4dGVuZGVkQW5pbWF0ZWQ7XG5leHBvcnRzLmludGVycG9sYXRlID0gaW50ZXJwb2xhdGUkMTtcbmV4cG9ydHMuR2xvYmFscyA9IEdsb2JhbHM7XG4iLCJpbXBvcnQgTmF2YmFyIGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0L05hdmJhcic7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IEhlYWRJbm5lciBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dC9IZWFkJztcclxuaW1wb3J0IHt1c2VTcHJpbmcsIGFuaW1hdGVkfSBmcm9tICdyZWFjdC1zcHJpbmcnXHJcbmltcG9ydCB7IFNwcmluZyB9IGZyb20gJ3JlYWN0LXNwcmluZy9yZW5kZXJwcm9wcyc7XHJcblxyXG5jb25zdCBjYWxjID0gKHgsIHkpID0+IFstKHkgLSB3aW5kb3cuaW5uZXJIZWlnaHQgLyAyKSAvIDIwLCAoeCAtIHdpbmRvdy5pbm5lcldpZHRoIC8gMikgLyAyMCwgMS4wNV1cclxuXHJcbmNvbnN0IHRyYW5zID0gKHgsIHksIHMpID0+IGBwZXJzcGVjdGl2ZSgxODAwcHgpIHJvdGF0ZVgoJHt4fWRlZykgcm90YXRlWSgke3l9ZGVnKSBzY2FsZSgke3N9KWBcclxuXHJcbmZ1bmN0aW9uIFRlc3QgKCl7XHJcbiAgICBjb25zdCBbcHJvcHMsIHNldF0gPSB1c2VTcHJpbmcoKCkgPT4gKHsgeHlzOiBbMCwgMCwgMV0sIGNvbmZpZzogeyBtYXNzOiA1LCB0ZW5zaW9uOiAzNTAsIGZyaWN0aW9uOiA0MCB9IH0pKVxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9tZXBhZ2VcIj5cclxuICAgICAgICAgICAgICAgIDxIZWFkSW5uZXIvPlxyXG4gICAgICAgICAgICAgICAgPE5hdmJhci8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob21lLWltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbWUtaW5uZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbWUtdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJsYXJnZVwiPkhpLDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibGFyZ2UtbmFtZVwiPkknbSBSb2JlcnQsPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJsYXJnZS1uYW1lXCI+d2ViIGRldmVsb3Blci48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBhcmFncmFwaFwiPkknbSBhbiBlbnRodXNpYXN0aWMgc29mdHdhcmUgZGV2ZWxvcGVyLCB0aGF0IGNvdmVycyB0aGUgZnVsbC1zdGFjayBkZXZlbG9wbWVudCBvZiBhIHdlYnNpdGUgYW5kIGFpbXMgdG8gYnVpbGQgcmVzcG9uc2l2ZSBhbmQgZW5nYWdpbmcgcHJvZHVjdHMuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbi1kaXZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvd29ya1wiPjxidXR0b24gY2xhc3NOYW1lPVwid29yay1idXR0b25cIj5NeSBXb3JrPC9idXR0b24+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFuaW1hdGVkLmRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJsYXJnZS1sb2dvLXRlc3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZU1vdmU9eyh7IGNsaWVudFg6IHgsIGNsaWVudFk6IHkgfSkgPT4gc2V0KHsgeHlzOiBjYWxjKHgsIHkpIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXQoeyB4eXM6IFswLCAwLCAxXSB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHRyYW5zZm9ybTogcHJvcHMueHlzLmludGVycG9sYXRlKHRyYW5zKSB9fSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3ByaW5nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TcHJpbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvUkxvZ28ucG5nXCIgYWx0PVwiLnJvYmVydFwiICBjbGFzc05hbWU9XCJiaWctbG9nb1wiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYW5pbWF0ZWQuZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgKVxyXG5cclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBUZXN0OyJdLCJzb3VyY2VSb290IjoiIn0=