webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./style/index.css":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./style/index.css ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../public/background.jpg */ "./public/background.jpg");
exports = ___CSS_LOADER_API_IMPORT___(true);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
exports.push([module.i, ":root {\r\n    --primary-color: #043333;\r\n    --color:#B9E3C6;\r\n    --dark-color: #05344F;\r\n    --dif-color: #ee6c4d;\r\n    --light-color: #F7FFF7;\r\n    --danger-color: #dc3545;\r\n    --success-color: #28a745;\r\n  }\r\n\r\n\r\n\r\n* {\r\n    -moz-box-sizing: border-box;\r\n         box-sizing: border-box;\r\n    margin: 0;\r\n    padding: 0;\r\n  }\r\n  \r\n  body {\r\n    font-family: \"Andale Mono\", monospace;\r\n    font-size: 1.1rem;\r\n    line-height: 1.6;\r\n    background-color: #fff;\r\n    color: #333;\r\n  }\r\n  \r\n  a {\r\n    text-decoration: none;\r\n  }\r\n  \r\n  ul {\r\n    list-style: none;\r\n  }\r\n  \r\n  img {\r\n    width: 100%;\r\n  }\r\n\r\n\r\n/* Utilities */\r\n.container {\r\n    max-width: 1100px;\r\n    margin: auto;\r\n    overflow: hidden;\r\n    padding: 0 2rem;\r\n    margin-top: 6rem;\r\n    margin-bottom: 3rem;\r\n    }\r\n.wrapper{\r\n  padding: 2rem 12rem;\r\n}\r\n\r\n.large {\r\n  font-size: 2.7rem;\r\n  line-height: 1.2;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n\r\n  /* Overlay */\r\n.dark-overlay {\r\n  background-color: rgba(0, 0, 0, 0.493);\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n.blue-overlay {\r\n  background-color: rgba(18, 64, 99, 0.542);\r\n  position: absolute;\r\n  height: 100%;\r\n  width: 100%;\r\n\r\n}\r\n\r\n.homepage {\r\n  max-width: 100%;\r\n  margin: auto;\r\n  overflow: hidden;\r\n\r\n}\r\n.home-image{\r\n  margin: 0;\r\n  padding: 0;\r\n  position: relative;\r\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat center bottom/cover;\r\n  width: 100%;\r\n  height: 100vh;\r\n  padding: 0rem 12rem;\r\n\r\n  }\r\n\r\n/* NavBar */\r\n\r\n.navbar {\r\n  \r\n  display: -moz-box;\r\n  \r\n  display: flex;\r\n  -moz-box-pack: justify;\r\n       justify-content: space-between;\r\n  -moz-box-align: center;\r\n       align-items: center;\r\n  position: fixed;\r\n  padding: 0.1rem 2rem;\r\n  z-index: 1;\r\n  width: 100%;\r\n  opacity: 0.9;\r\n  margin-bottom: 1rem;\r\n  opacity: 0.95;\r\n}\r\n\r\n.nav-item {\r\n  display: -moz-box;\r\n  display: flex;\r\n}\r\n\r\n.nav-link a {\r\n  color:#ffffff;\r\n  padding: 0.55rem;\r\n  margin: 0 0.25rem;\r\n}\r\n\r\n.nav-link a:hover {\r\n  color:#f48c06;\r\n}\r\n\r\n/* Logo */\r\n\r\n.logo{\r\n  font-size: 1.2rem;\r\n  line-height: 80px;\r\n}\r\n.logo a {\r\n  color: #d6cbcb;\r\n}\r\n.logo a:hover {\r\n  color: #f48c06;\r\n}\r\n.logoimg{\r\n  margin-top: 16px;\r\n  width: 10rem;\r\n}\r\n\r\n.ricon{\r\n  padding-top: 1px;\r\n  width: rem;\r\n}\r\n\r\n/* Footer */\r\n\r\n.footer{\r\n  padding: 3rem 12rem;\r\n  background-color: black;\r\n  text-align: center;\r\n  color:#ffffff;\r\n}\r\n\r\n/* Home */\r\n.home-inner{\r\n  color: #fff;\r\n  height: 100%;\r\n  width: 50%;\r\n  margin: auto;\r\n  display: -moz-box;\r\n  display: flex;\r\n  letter-spacing: 0.2em;\r\n  -moz-box-orient: vertical;\r\n  -moz-box-direction: normal;\r\n       flex-direction: column;\r\n  -moz-box-align: center;\r\n       align-items: center;\r\n  -moz-box-pack: center;\r\n       justify-content: center;\r\n  text-align: center;\r\n  animation: text 1s 1;\r\n  -webkit-animation: text 1s 1;\r\n}\r\n.paragraph-2 {\r\n  font-size: 1.2rem;\r\n  margin-bottom: 1rem;\r\n  letter-spacing: 3px;\r\n  word-spacing: 2px;\r\n  animation: para 3s 1;\r\n  -webkit-animation: para 3s 1;\r\n}\r\n\r\n.work-button{\r\n  font-family: \"Andale Mono\", monospace;\r\n  letter-spacing: 5px; \r\n  -moz-box-align: center; \r\n       align-items: center;\r\n  font-size: 1.1rem;\r\n  -moz-box-pack: center;\r\n       justify-content: center;\r\n  background-color: transparent;\r\n  color: #f48c06;\r\n  align-items: center;\r\n  padding: 0.4rem 2rem;\r\n  margin-top: 1.23rem;\r\n  border: 3px solid #f7f7f7;\r\n  border-radius: 4px;\r\n  box-shadow: 0 0 1px #757f85b3;\r\n  cursor: pointer;\r\n}\r\n\r\n.work-button:hover{\r\n  color: #f7f7f7;\r\n  border: 3px solid #f48c06;\r\n  box-shadow: 0 0 1px #757f85b3;\r\n}\r\n\r\n.font-icons{\r\n  display: -moz-box;\r\n  display: flex;\r\n  -moz-box-orient: vertical;\r\n  -moz-box-direction: normal;\r\n       flex-direction: column;\r\n  font-size: 2rem;\r\n  \r\n  padding: 2rem;\r\n}\r\n/* Animation */\r\n\r\n\r\n@keyframes text {\r\n  0%{\r\n    color: black;\r\n    margin-bottom: -30px;;\r\n  }\r\n  30%{\r\n    letter-spacing: 25px;\r\n    margin-bottom: -30px;\r\n  }\r\n  85%{\r\n    letter-spacing: 8px;\r\n    margin-bottom: -30px;\r\n  }\r\n}\r\n\r\n@keyframes para {\r\n0%{\r\n  opacity: 0;\r\n}\r\n45%{\r\n  opacity:0;\r\n}\r\n85%{\r\n  opacity: 1;\r\n}\r\n\r\n}\r\n\r\n\r\n/* Projects */\r\n\r\n\r\n\r\n/* About */\r\n\r\n\r\n\r\n/* Contact */", "",{"version":3,"sources":["E:/Portfolio/style/index.css"],"names":[],"mappings":"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","file":"index.css","sourcesContent":[":root {\r\n    --primary-color: #043333;\r\n    --color:#B9E3C6;\r\n    --dark-color: #05344F;\r\n    --dif-color: #ee6c4d;\r\n    --light-color: #F7FFF7;\r\n    --danger-color: #dc3545;\r\n    --success-color: #28a745;\r\n  }\r\n\r\n\r\n\r\n* {\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    padding: 0;\r\n  }\r\n  \r\n  body {\r\n    font-family: \"Andale Mono\", monospace;\r\n    font-size: 1.1rem;\r\n    line-height: 1.6;\r\n    background-color: #fff;\r\n    color: #333;\r\n  }\r\n  \r\n  a {\r\n    text-decoration: none;\r\n  }\r\n  \r\n  ul {\r\n    list-style: none;\r\n  }\r\n  \r\n  img {\r\n    width: 100%;\r\n  }\r\n\r\n\r\n/* Utilities */\r\n.container {\r\n    max-width: 1100px;\r\n    margin: auto;\r\n    overflow: hidden;\r\n    padding: 0 2rem;\r\n    margin-top: 6rem;\r\n    margin-bottom: 3rem;\r\n    }\r\n.wrapper{\r\n  padding: 2rem 12rem;\r\n}\r\n\r\n.large {\r\n  font-size: 2.7rem;\r\n  line-height: 1.2;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n\r\n  /* Overlay */\r\n.dark-overlay {\r\n  background-color: rgba(0, 0, 0, 0.493);\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n.blue-overlay {\r\n  background-color: rgba(18, 64, 99, 0.542);\r\n  position: absolute;\r\n  height: 100%;\r\n  width: 100%;\r\n\r\n}\r\n\r\n.homepage {\r\n  max-width: 100%;\r\n  margin: auto;\r\n  overflow: hidden;\r\n\r\n}\r\n.home-image{\r\n  margin: 0;\r\n  padding: 0;\r\n  position: relative;\r\n  background: url('../public/background.jpg') no-repeat center bottom/cover;\r\n  width: 100%;\r\n  height: 100vh;\r\n  padding: 0rem 12rem;\r\n\r\n  }\r\n\r\n/* NavBar */\r\n\r\n.navbar {\r\n  \r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  position: fixed;\r\n  padding: 0.1rem 2rem;\r\n  z-index: 1;\r\n  width: 100%;\r\n  opacity: 0.9;\r\n  margin-bottom: 1rem;\r\n  opacity: 0.95;\r\n}\r\n\r\n.nav-item {\r\n  display: flex;\r\n}\r\n\r\n.nav-link a {\r\n  color:#ffffff;\r\n  padding: 0.55rem;\r\n  margin: 0 0.25rem;\r\n}\r\n\r\n.nav-link a:hover {\r\n  color:#f48c06;\r\n}\r\n\r\n/* Logo */\r\n\r\n.logo{\r\n  font-size: 1.2rem;\r\n  line-height: 80px;\r\n}\r\n.logo a {\r\n  color: #d6cbcb;\r\n}\r\n.logo a:hover {\r\n  color: #f48c06;\r\n}\r\n.logoimg{\r\n  margin-top: 16px;\r\n  width: 10rem;\r\n}\r\n\r\n.ricon{\r\n  padding-top: 1px;\r\n  width: rem;\r\n}\r\n\r\n/* Footer */\r\n\r\n.footer{\r\n  padding: 3rem 12rem;\r\n  background-color: black;\r\n  text-align: center;\r\n  color:#ffffff;\r\n}\r\n\r\n/* Home */\r\n.home-inner{\r\n  color: #fff;\r\n  height: 100%;\r\n  width: 50%;\r\n  margin: auto;\r\n  display: flex;\r\n  letter-spacing: 0.2em;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  text-align: center;\r\n  animation: text 1s 1;\r\n  -webkit-animation: text 1s 1;\r\n}\r\n.paragraph-2 {\r\n  font-size: 1.2rem;\r\n  margin-bottom: 1rem;\r\n  letter-spacing: 3px;\r\n  word-spacing: 2px;\r\n  animation: para 3s 1;\r\n  -webkit-animation: para 3s 1;\r\n}\r\n\r\n.work-button{\r\n  font-family: \"Andale Mono\", monospace;\r\n  letter-spacing: 5px; \r\n  align-items: center;\r\n  font-size: 1.1rem;\r\n  justify-content: center;\r\n  background-color: transparent;\r\n  color: #f48c06;\r\n  align-items: center;\r\n  padding: 0.4rem 2rem;\r\n  margin-top: 1.23rem;\r\n  border: 3px solid #f7f7f7;\r\n  border-radius: 4px;\r\n  box-shadow: 0 0 1px #757f85b3;\r\n  cursor: pointer;\r\n}\r\n\r\n.work-button:hover{\r\n  color: #f7f7f7;\r\n  border: 3px solid #f48c06;\r\n  box-shadow: 0 0 1px #757f85b3;\r\n}\r\n\r\n.font-icons{\r\n  display: flex;\r\n  flex-direction: column;\r\n  font-size: 2rem;\r\n  \r\n  padding: 2rem;\r\n}\r\n/* Animation */\r\n\r\n\r\n@keyframes text {\r\n  0%{\r\n    color: black;\r\n    margin-bottom: -30px;;\r\n  }\r\n  30%{\r\n    letter-spacing: 25px;\r\n    margin-bottom: -30px;\r\n  }\r\n  85%{\r\n    letter-spacing: 8px;\r\n    margin-bottom: -30px;\r\n  }\r\n}\r\n\r\n@keyframes para {\r\n0%{\r\n  opacity: 0;\r\n}\r\n45%{\r\n  opacity:0;\r\n}\r\n85%{\r\n  opacity: 1;\r\n}\r\n\r\n}\r\n\r\n\r\n/* Projects */\r\n\r\n\r\n\r\n/* About */\r\n\r\n\r\n\r\n/* Contact */"]}]);
// Exports
module.exports = exports;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGUvaW5kZXguY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMscUdBQWdEO0FBQzFGLHNDQUFzQyxtQkFBTyxDQUFDLDJHQUFtRDtBQUNqRyxvQ0FBb0MsbUJBQU8sQ0FBQyx5REFBMEI7QUFDdEU7QUFDQTtBQUNBO0FBQ0EsY0FBYyxRQUFTLFVBQVUsaUNBQWlDLHdCQUF3Qiw4QkFBOEIsNkJBQTZCLCtCQUErQixnQ0FBZ0MsaUNBQWlDLE9BQU8sbUJBQW1CLG9DQUFvQyxvQ0FBb0Msa0JBQWtCLG1CQUFtQixPQUFPLGtCQUFrQixnREFBZ0QsMEJBQTBCLHlCQUF5QiwrQkFBK0Isb0JBQW9CLE9BQU8sZUFBZSw4QkFBOEIsT0FBTyxnQkFBZ0IseUJBQXlCLE9BQU8saUJBQWlCLG9CQUFvQixPQUFPLDJDQUEyQywwQkFBMEIscUJBQXFCLHlCQUF5Qix3QkFBd0IseUJBQXlCLDRCQUE0QixTQUFTLGFBQWEsMEJBQTBCLEtBQUssZ0JBQWdCLHdCQUF3Qix1QkFBdUIsMEJBQTBCLEtBQUssOENBQThDLDZDQUE2Qyx5QkFBeUIsYUFBYSxjQUFjLGtCQUFrQixtQkFBbUIsS0FBSyxtQkFBbUIsZ0RBQWdELHlCQUF5QixtQkFBbUIsa0JBQWtCLFNBQVMsbUJBQW1CLHNCQUFzQixtQkFBbUIsdUJBQXVCLFNBQVMsZ0JBQWdCLGdCQUFnQixpQkFBaUIseUJBQXlCLGdHQUFnRyxrQkFBa0Isb0JBQW9CLDBCQUEwQixXQUFXLHFDQUFxQyw4QkFBOEIsMEJBQTBCLDZCQUE2QiwwQ0FBMEMsNkJBQTZCLCtCQUErQixzQkFBc0IsMkJBQTJCLGlCQUFpQixrQkFBa0IsbUJBQW1CLDBCQUEwQixvQkFBb0IsS0FBSyxtQkFBbUIsd0JBQXdCLG9CQUFvQixLQUFLLHFCQUFxQixvQkFBb0IsdUJBQXVCLHdCQUF3QixLQUFLLDJCQUEyQixvQkFBb0IsS0FBSyxnQ0FBZ0Msd0JBQXdCLHdCQUF3QixLQUFLLGFBQWEscUJBQXFCLEtBQUssbUJBQW1CLHFCQUFxQixLQUFLLGFBQWEsdUJBQXVCLG1CQUFtQixLQUFLLGVBQWUsdUJBQXVCLGlCQUFpQixLQUFLLG9DQUFvQywwQkFBMEIsOEJBQThCLHlCQUF5QixvQkFBb0IsS0FBSyxrQ0FBa0Msa0JBQWtCLG1CQUFtQixpQkFBaUIsbUJBQW1CLHdCQUF3QixvQkFBb0IsNEJBQTRCLGdDQUFnQyxpQ0FBaUMsa0NBQWtDLDZCQUE2QiwrQkFBK0IsNEJBQTRCLG1DQUFtQyx5QkFBeUIsMkJBQTJCLG1DQUFtQyxLQUFLLGtCQUFrQix3QkFBd0IsMEJBQTBCLDBCQUEwQix3QkFBd0IsMkJBQTJCLG1DQUFtQyxLQUFLLHFCQUFxQiw4Q0FBOEMsMEJBQTBCLDhCQUE4QixnQ0FBZ0Msd0JBQXdCLDRCQUE0QixtQ0FBbUMsb0NBQW9DLHFCQUFxQiwwQkFBMEIsMkJBQTJCLDBCQUEwQixnQ0FBZ0MseUJBQXlCLG9DQUFvQyxzQkFBc0IsS0FBSywyQkFBMkIscUJBQXFCLGdDQUFnQyxvQ0FBb0MsS0FBSyxvQkFBb0Isd0JBQXdCLG9CQUFvQixnQ0FBZ0MsaUNBQWlDLGtDQUFrQyxzQkFBc0IsMEJBQTBCLEtBQUssZ0RBQWdELFNBQVMscUJBQXFCLDhCQUE4QixPQUFPLFVBQVUsNkJBQTZCLDZCQUE2QixPQUFPLFVBQVUsNEJBQTRCLDZCQUE2QixPQUFPLEtBQUsseUJBQXlCLE9BQU8saUJBQWlCLEtBQUssUUFBUSxnQkFBZ0IsS0FBSyxRQUFRLGlCQUFpQixLQUFLLFNBQVMseUZBQXlGLG1GQUFtRixZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFNBQVMsS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxVQUFVLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFFBQVEsVUFBVSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsYUFBYSxPQUFPLFdBQVcsTUFBTSxZQUFZLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sV0FBVyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxXQUFXLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLFVBQVUsS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFlBQVksVUFBVSxLQUFLLFlBQVksS0FBSyxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxNQUFNLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLE1BQU0sT0FBTyxhQUFhLGFBQWEsd0RBQXdELGlDQUFpQyx3QkFBd0IsOEJBQThCLDZCQUE2QiwrQkFBK0IsZ0NBQWdDLGlDQUFpQyxPQUFPLG1CQUFtQiwrQkFBK0Isa0JBQWtCLG1CQUFtQixPQUFPLGtCQUFrQixnREFBZ0QsMEJBQTBCLHlCQUF5QiwrQkFBK0Isb0JBQW9CLE9BQU8sZUFBZSw4QkFBOEIsT0FBTyxnQkFBZ0IseUJBQXlCLE9BQU8saUJBQWlCLG9CQUFvQixPQUFPLDJDQUEyQywwQkFBMEIscUJBQXFCLHlCQUF5Qix3QkFBd0IseUJBQXlCLDRCQUE0QixTQUFTLGFBQWEsMEJBQTBCLEtBQUssZ0JBQWdCLHdCQUF3Qix1QkFBdUIsMEJBQTBCLEtBQUssOENBQThDLDZDQUE2Qyx5QkFBeUIsYUFBYSxjQUFjLGtCQUFrQixtQkFBbUIsS0FBSyxtQkFBbUIsZ0RBQWdELHlCQUF5QixtQkFBbUIsa0JBQWtCLFNBQVMsbUJBQW1CLHNCQUFzQixtQkFBbUIsdUJBQXVCLFNBQVMsZ0JBQWdCLGdCQUFnQixpQkFBaUIseUJBQXlCLGdGQUFnRixrQkFBa0Isb0JBQW9CLDBCQUEwQixXQUFXLHFDQUFxQywwQkFBMEIscUNBQXFDLDBCQUEwQixzQkFBc0IsMkJBQTJCLGlCQUFpQixrQkFBa0IsbUJBQW1CLDBCQUEwQixvQkFBb0IsS0FBSyxtQkFBbUIsb0JBQW9CLEtBQUsscUJBQXFCLG9CQUFvQix1QkFBdUIsd0JBQXdCLEtBQUssMkJBQTJCLG9CQUFvQixLQUFLLGdDQUFnQyx3QkFBd0Isd0JBQXdCLEtBQUssYUFBYSxxQkFBcUIsS0FBSyxtQkFBbUIscUJBQXFCLEtBQUssYUFBYSx1QkFBdUIsbUJBQW1CLEtBQUssZUFBZSx1QkFBdUIsaUJBQWlCLEtBQUssb0NBQW9DLDBCQUEwQiw4QkFBOEIseUJBQXlCLG9CQUFvQixLQUFLLGtDQUFrQyxrQkFBa0IsbUJBQW1CLGlCQUFpQixtQkFBbUIsb0JBQW9CLDRCQUE0Qiw2QkFBNkIsMEJBQTBCLDhCQUE4Qix5QkFBeUIsMkJBQTJCLG1DQUFtQyxLQUFLLGtCQUFrQix3QkFBd0IsMEJBQTBCLDBCQUEwQix3QkFBd0IsMkJBQTJCLG1DQUFtQyxLQUFLLHFCQUFxQiw4Q0FBOEMsMEJBQTBCLDJCQUEyQix3QkFBd0IsOEJBQThCLG9DQUFvQyxxQkFBcUIsMEJBQTBCLDJCQUEyQiwwQkFBMEIsZ0NBQWdDLHlCQUF5QixvQ0FBb0Msc0JBQXNCLEtBQUssMkJBQTJCLHFCQUFxQixnQ0FBZ0Msb0NBQW9DLEtBQUssb0JBQW9CLG9CQUFvQiw2QkFBNkIsc0JBQXNCLDBCQUEwQixLQUFLLGdEQUFnRCxTQUFTLHFCQUFxQiw4QkFBOEIsT0FBTyxVQUFVLDZCQUE2Qiw2QkFBNkIsT0FBTyxVQUFVLDRCQUE0Qiw2QkFBNkIsT0FBTyxLQUFLLHlCQUF5QixPQUFPLGlCQUFpQixLQUFLLFFBQVEsZ0JBQWdCLEtBQUssUUFBUSxpQkFBaUIsS0FBSyxTQUFTLHFGQUFxRjtBQUN2NlY7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjYyYzE4NWJiNzEzMGRiZDNkNTI3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gcmVxdWlyZShcIi4uL3B1YmxpYy9iYWNrZ3JvdW5kLmpwZ1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxyXFxuICAgIC0tcHJpbWFyeS1jb2xvcjogIzA0MzMzMztcXHJcXG4gICAgLS1jb2xvcjojQjlFM0M2O1xcclxcbiAgICAtLWRhcmstY29sb3I6ICMwNTM0NEY7XFxyXFxuICAgIC0tZGlmLWNvbG9yOiAjZWU2YzRkO1xcclxcbiAgICAtLWxpZ2h0LWNvbG9yOiAjRjdGRkY3O1xcclxcbiAgICAtLWRhbmdlci1jb2xvcjogI2RjMzU0NTtcXHJcXG4gICAgLS1zdWNjZXNzLWNvbG9yOiAjMjhhNzQ1O1xcclxcbiAgfVxcclxcblxcclxcblxcclxcblxcclxcbioge1xcclxcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICBib2R5IHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJBbmRhbGUgTW9ub1xcXCIsIG1vbm9zcGFjZTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAgIGNvbG9yOiAjMzMzO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICBhIHtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICB1bCB7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIGltZyB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgfVxcclxcblxcclxcblxcclxcbi8qIFV0aWxpdGllcyAqL1xcclxcbi5jb250YWluZXIge1xcclxcbiAgICBtYXgtd2lkdGg6IDExMDBweDtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICBwYWRkaW5nOiAwIDJyZW07XFxyXFxuICAgIG1hcmdpbi10b3A6IDZyZW07XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDNyZW07XFxyXFxuICAgIH1cXHJcXG4ud3JhcHBlcntcXHJcXG4gIHBhZGRpbmc6IDJyZW0gMTJyZW07XFxyXFxufVxcclxcblxcclxcbi5sYXJnZSB7XFxyXFxuICBmb250LXNpemU6IDIuN3JlbTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjI7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4gIC8qIE92ZXJsYXkgKi9cXHJcXG4uZGFyay1vdmVybGF5IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40OTMpO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG4uYmx1ZS1vdmVybGF5IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTgsIDY0LCA5OSwgMC41NDIpO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5ob21lcGFnZSB7XFxyXFxuICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcblxcclxcbn1cXHJcXG4uaG9tZS1pbWFnZXtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIG5vLXJlcGVhdCBjZW50ZXIgYm90dG9tL2NvdmVyO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgcGFkZGluZzogMHJlbSAxMnJlbTtcXHJcXG5cXHJcXG4gIH1cXHJcXG5cXHJcXG4vKiBOYXZCYXIgKi9cXHJcXG5cXHJcXG4ubmF2YmFyIHtcXHJcXG4gIFxcclxcbiAgZGlzcGxheTogLW1vei1ib3g7XFxyXFxuICBcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAtbW96LWJveC1wYWNrOiBqdXN0aWZ5O1xcclxcbiAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAtbW96LWJveC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgcGFkZGluZzogMC4xcmVtIDJyZW07XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBvcGFjaXR5OiAwLjk7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbiAgb3BhY2l0eTogMC45NTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1pdGVtIHtcXHJcXG4gIGRpc3BsYXk6IC1tb3otYm94O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1saW5rIGEge1xcclxcbiAgY29sb3I6I2ZmZmZmZjtcXHJcXG4gIHBhZGRpbmc6IDAuNTVyZW07XFxyXFxuICBtYXJnaW46IDAgMC4yNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1saW5rIGE6aG92ZXIge1xcclxcbiAgY29sb3I6I2Y0OGMwNjtcXHJcXG59XFxyXFxuXFxyXFxuLyogTG9nbyAqL1xcclxcblxcclxcbi5sb2dve1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBsaW5lLWhlaWdodDogODBweDtcXHJcXG59XFxyXFxuLmxvZ28gYSB7XFxyXFxuICBjb2xvcjogI2Q2Y2JjYjtcXHJcXG59XFxyXFxuLmxvZ28gYTpob3ZlciB7XFxyXFxuICBjb2xvcjogI2Y0OGMwNjtcXHJcXG59XFxyXFxuLmxvZ29pbWd7XFxyXFxuICBtYXJnaW4tdG9wOiAxNnB4O1xcclxcbiAgd2lkdGg6IDEwcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucmljb257XFxyXFxuICBwYWRkaW5nLXRvcDogMXB4O1xcclxcbiAgd2lkdGg6IHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyogRm9vdGVyICovXFxyXFxuXFxyXFxuLmZvb3RlcntcXHJcXG4gIHBhZGRpbmc6IDNyZW0gMTJyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGNvbG9yOiNmZmZmZmY7XFxyXFxufVxcclxcblxcclxcbi8qIEhvbWUgKi9cXHJcXG4uaG9tZS1pbm5lcntcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIGRpc3BsYXk6IC1tb3otYm94O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAwLjJlbTtcXHJcXG4gIC1tb3otYm94LW9yaWVudDogdmVydGljYWw7XFxyXFxuICAtbW96LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXHJcXG4gICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIC1tb3otYm94LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAtbW96LWJveC1wYWNrOiBjZW50ZXI7XFxyXFxuICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgYW5pbWF0aW9uOiB0ZXh0IDFzIDE7XFxyXFxuICAtd2Via2l0LWFuaW1hdGlvbjogdGV4dCAxcyAxO1xcclxcbn1cXHJcXG4ucGFyYWdyYXBoLTIge1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDNweDtcXHJcXG4gIHdvcmQtc3BhY2luZzogMnB4O1xcclxcbiAgYW5pbWF0aW9uOiBwYXJhIDNzIDE7XFxyXFxuICAtd2Via2l0LWFuaW1hdGlvbjogcGFyYSAzcyAxO1xcclxcbn1cXHJcXG5cXHJcXG4ud29yay1idXR0b257XFxyXFxuICBmb250LWZhbWlseTogXFxcIkFuZGFsZSBNb25vXFxcIiwgbW9ub3NwYWNlO1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDVweDsgXFxyXFxuICAtbW96LWJveC1hbGlnbjogY2VudGVyOyBcXHJcXG4gICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcclxcbiAgLW1vei1ib3gtcGFjazogY2VudGVyO1xcclxcbiAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgY29sb3I6ICNmNDhjMDY7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMC40cmVtIDJyZW07XFxyXFxuICBtYXJnaW4tdG9wOiAxLjIzcmVtO1xcclxcbiAgYm9yZGVyOiAzcHggc29saWQgI2Y3ZjdmNztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMCAxcHggIzc1N2Y4NWIzO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ud29yay1idXR0b246aG92ZXJ7XFxyXFxuICBjb2xvcjogI2Y3ZjdmNztcXHJcXG4gIGJvcmRlcjogM3B4IHNvbGlkICNmNDhjMDY7XFxyXFxuICBib3gtc2hhZG93OiAwIDAgMXB4ICM3NTdmODViMztcXHJcXG59XFxyXFxuXFxyXFxuLmZvbnQtaWNvbnN7XFxyXFxuICBkaXNwbGF5OiAtbW96LWJveDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAtbW96LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xcclxcbiAgLW1vei1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XFxyXFxuICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICBcXHJcXG4gIHBhZGRpbmc6IDJyZW07XFxyXFxufVxcclxcbi8qIEFuaW1hdGlvbiAqL1xcclxcblxcclxcblxcclxcbkBrZXlmcmFtZXMgdGV4dCB7XFxyXFxuICAwJXtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAtMzBweDs7XFxyXFxuICB9XFxyXFxuICAzMCV7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAyNXB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAtMzBweDtcXHJcXG4gIH1cXHJcXG4gIDg1JXtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDhweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogLTMwcHg7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgcGFyYSB7XFxyXFxuMCV7XFxyXFxuICBvcGFjaXR5OiAwO1xcclxcbn1cXHJcXG40NSV7XFxyXFxuICBvcGFjaXR5OjA7XFxyXFxufVxcclxcbjg1JXtcXHJcXG4gIG9wYWNpdHk6IDE7XFxyXFxufVxcclxcblxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiBQcm9qZWN0cyAqL1xcclxcblxcclxcblxcclxcblxcclxcbi8qIEFib3V0ICovXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLyogQ29udGFjdCAqL1wiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIkU6L1BvcnRmb2xpby9zdHlsZS9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSx3QkFBd0I7SUFDeEIsZUFBZTtJ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Q0UsaUJBQWE7RUFBYixhQUFhO0VBQ2IseUJBQXNCO0VBQXRCLDBCQUFzQjtPQUF0QixzQkFBc0I7RUFDdEIsZUFBZTs7RUFFZixhQUFhO0FBQ2Y7QUFDQSxjQUFjOzs7QUFHZDtFQUNFO0lBQ0UsWUFBWTtJQUNaLG9CQUFvQjtFQUN0QjtFQUNBO0lBQ0Usb0JBQW9CO0lBQ3BCLG9CQUFvQjtFQUN0QjtFQUNBO0lBQ0UsbUJBQW1CO0lBQ25CLG9CQUFvQjtFQUN0QjtBQUNGOztBQUVBO0FBQ0E7RUFDRSxVQUFVO0FBQ1o7QUFDQTtFQUNFLFNBQVM7QUFDWDtBQUNBO0VBQ0UsVUFBVTtBQUNaOztBQUVBOzs7QUFHQSxhQUFhOzs7O0FBSWIsVUFBVTs7OztBQUlWLFlBQVlcIixcImZpbGVcIjpcImluZGV4LmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxyXFxuICAgIC0tcHJpbWFyeS1jb2xvcjogIzA0MzMzMztcXHJcXG4gICAgLS1jb2xvcjojQjlFM0M2O1xcclxcbiAgICAtLWRhcmstY29sb3I6ICMwNTM0NEY7XFxyXFxuICAgIC0tZGlmLWNvbG9yOiAjZWU2YzRkO1xcclxcbiAgICAtLWxpZ2h0LWNvbG9yOiAjRjdGRkY3O1xcclxcbiAgICAtLWRhbmdlci1jb2xvcjogI2RjMzU0NTtcXHJcXG4gICAgLS1zdWNjZXNzLWNvbG9yOiAjMjhhNzQ1O1xcclxcbiAgfVxcclxcblxcclxcblxcclxcblxcclxcbioge1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIGJvZHkge1xcclxcbiAgICBmb250LWZhbWlseTogXFxcIkFuZGFsZSBNb25vXFxcIiwgbW9ub3NwYWNlO1xcclxcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gICAgY29sb3I6ICMzMzM7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIGEge1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIHVsIHtcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgaW1nIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuXFxyXFxuLyogVXRpbGl0aWVzICovXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICAgIG1heC13aWR0aDogMTEwMHB4O1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIHBhZGRpbmc6IDAgMnJlbTtcXHJcXG4gICAgbWFyZ2luLXRvcDogNnJlbTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcXHJcXG4gICAgfVxcclxcbi53cmFwcGVye1xcclxcbiAgcGFkZGluZzogMnJlbSAxMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmxhcmdlIHtcXHJcXG4gIGZvbnQtc2l6ZTogMi43cmVtO1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuMjtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxufVxcclxcblxcclxcblxcclxcbiAgLyogT3ZlcmxheSAqL1xcclxcbi5kYXJrLW92ZXJsYXkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQ5Myk7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcbi5ibHVlLW92ZXJsYXkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxOCwgNjQsIDk5LCAwLjU0Mik7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLmhvbWVwYWdlIHtcXHJcXG4gIG1heC13aWR0aDogMTAwJTtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuXFxyXFxufVxcclxcbi5ob21lLWltYWdle1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGJhY2tncm91bmQ6IHVybCgnLi4vcHVibGljL2JhY2tncm91bmQuanBnJykgbm8tcmVwZWF0IGNlbnRlciBib3R0b20vY292ZXI7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBwYWRkaW5nOiAwcmVtIDEycmVtO1xcclxcblxcclxcbiAgfVxcclxcblxcclxcbi8qIE5hdkJhciAqL1xcclxcblxcclxcbi5uYXZiYXIge1xcclxcbiAgXFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHBhZGRpbmc6IDAuMXJlbSAycmVtO1xcclxcbiAgei1pbmRleDogMTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgb3BhY2l0eTogMC45O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG4gIG9wYWNpdHk6IDAuOTU7XFxyXFxufVxcclxcblxcclxcbi5uYXYtaXRlbSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWxpbmsgYSB7XFxyXFxuICBjb2xvcjojZmZmZmZmO1xcclxcbiAgcGFkZGluZzogMC41NXJlbTtcXHJcXG4gIG1hcmdpbjogMCAwLjI1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWxpbmsgYTpob3ZlciB7XFxyXFxuICBjb2xvcjojZjQ4YzA2O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBMb2dvICovXFxyXFxuXFxyXFxuLmxvZ297XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiA4MHB4O1xcclxcbn1cXHJcXG4ubG9nbyBhIHtcXHJcXG4gIGNvbG9yOiAjZDZjYmNiO1xcclxcbn1cXHJcXG4ubG9nbyBhOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiAjZjQ4YzA2O1xcclxcbn1cXHJcXG4ubG9nb2ltZ3tcXHJcXG4gIG1hcmdpbi10b3A6IDE2cHg7XFxyXFxuICB3aWR0aDogMTByZW07XFxyXFxufVxcclxcblxcclxcbi5yaWNvbntcXHJcXG4gIHBhZGRpbmctdG9wOiAxcHg7XFxyXFxuICB3aWR0aDogcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBGb290ZXIgKi9cXHJcXG5cXHJcXG4uZm9vdGVye1xcclxcbiAgcGFkZGluZzogM3JlbSAxMnJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgY29sb3I6I2ZmZmZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLyogSG9tZSAqL1xcclxcbi5ob21lLWlubmVye1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAwLjJlbTtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBhbmltYXRpb246IHRleHQgMXMgMTtcXHJcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiB0ZXh0IDFzIDE7XFxyXFxufVxcclxcbi5wYXJhZ3JhcGgtMiB7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxuICBsZXR0ZXItc3BhY2luZzogM3B4O1xcclxcbiAgd29yZC1zcGFjaW5nOiAycHg7XFxyXFxuICBhbmltYXRpb246IHBhcmEgM3MgMTtcXHJcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBwYXJhIDNzIDE7XFxyXFxufVxcclxcblxcclxcbi53b3JrLWJ1dHRvbntcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQW5kYWxlIE1vbm9cXFwiLCBtb25vc3BhY2U7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogNXB4OyBcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDEuMXJlbTtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBjb2xvcjogI2Y0OGMwNjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAwLjRyZW0gMnJlbTtcXHJcXG4gIG1hcmdpbi10b3A6IDEuMjNyZW07XFxyXFxuICBib3JkZXI6IDNweCBzb2xpZCAjZjdmN2Y3O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgYm94LXNoYWRvdzogMCAwIDFweCAjNzU3Zjg1YjM7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi53b3JrLWJ1dHRvbjpob3ZlcntcXHJcXG4gIGNvbG9yOiAjZjdmN2Y3O1xcclxcbiAgYm9yZGVyOiAzcHggc29saWQgI2Y0OGMwNjtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMCAxcHggIzc1N2Y4NWIzO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9udC1pY29uc3tcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgXFxyXFxuICBwYWRkaW5nOiAycmVtO1xcclxcbn1cXHJcXG4vKiBBbmltYXRpb24gKi9cXHJcXG5cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHRleHQge1xcclxcbiAgMCV7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogLTMwcHg7O1xcclxcbiAgfVxcclxcbiAgMzAle1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMjVweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogLTMwcHg7XFxyXFxuICB9XFxyXFxuICA4NSV7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiA4cHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IC0zMHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHBhcmEge1xcclxcbjAle1xcclxcbiAgb3BhY2l0eTogMDtcXHJcXG59XFxyXFxuNDUle1xcclxcbiAgb3BhY2l0eTowO1xcclxcbn1cXHJcXG44NSV7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbn1cXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogUHJvamVjdHMgKi9cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKiBBYm91dCAqL1xcclxcblxcclxcblxcclxcblxcclxcbi8qIENvbnRhY3QgKi9cIl19XSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iXSwic291cmNlUm9vdCI6IiJ9