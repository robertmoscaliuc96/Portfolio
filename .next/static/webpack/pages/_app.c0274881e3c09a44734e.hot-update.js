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
exports.push([module.i, ":root {\r\n    --primary-color: #043333;\r\n    --color:#B9E3C6;\r\n    --dark-color: #05344F;\r\n    --dif-color: #ee6c4d;\r\n    --light-color: #F7FFF7;\r\n    --danger-color: #dc3545;\r\n    --success-color: #28a745;\r\n  }\r\n\r\n\r\n\r\n* {\r\n    -moz-box-sizing: border-box;\r\n         box-sizing: border-box;\r\n    margin: 0;\r\n    padding: 0;\r\n  }\r\n  \r\n  body {\r\n    font-family: \"Andale Mono\", monospace;\r\n    font-size: 1.1rem;\r\n    line-height: 1.6;\r\n    background-color: #fff;\r\n    color: #333;\r\n  }\r\n  \r\n  a {\r\n    text-decoration: none;\r\n  }\r\n  \r\n  ul {\r\n    list-style: none;\r\n  }\r\n  \r\n  img {\r\n    width: 100%;\r\n  }\r\n\r\n\r\n/* Utilities */\r\n.container {\r\n    max-width: 1100px;\r\n    margin: auto;\r\n    overflow: hidden;\r\n    padding: 0 2rem;\r\n    margin-top: 6rem;\r\n    margin-bottom: 3rem;\r\n    }\r\n.wrapper{\r\n  padding: 2rem 12rem;\r\n}\r\n\r\n.large {\r\n  font-size: 2.7rem;\r\n  line-height: 1.2;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n\r\n  /* Overlay */\r\n.dark-overlay {\r\n  background-color: rgba(0, 0, 0, 0.493);\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n.blue-overlay {\r\n  background-color: rgba(18, 64, 99, 0.542);\r\n  position: absolute;\r\n  height: 100%;\r\n  width: 100%;\r\n\r\n}\r\n\r\n.homepage {\r\n  max-width: 100%;\r\n  margin: auto;\r\n  overflow: hidden;\r\n\r\n}\r\n.home-image{\r\n  margin: 0;\r\n  padding: 0;\r\n  position: relative;\r\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat center bottom/cover;\r\n  width: 100%;\r\n  height: 100vh;\r\n  padding: 0rem 12rem;\r\n\r\n  }\r\n\r\n/* NavBar */\r\n\r\n.navbar {\r\n  \r\n  display: -moz-box;\r\n  \r\n  display: flex;\r\n  -moz-box-pack: justify;\r\n       justify-content: space-between;\r\n  -moz-box-align: center;\r\n       align-items: center;\r\n  position: fixed;\r\n  padding: 0.1rem 2rem;\r\n  z-index: 1;\r\n  width: 100%;\r\n  opacity: 0.9;\r\n  margin-bottom: 1rem;\r\n  opacity: 0.95;\r\n}\r\n\r\n.nav-item {\r\n  display: -moz-box;\r\n  display: flex;\r\n}\r\n\r\n.nav-link a {\r\n  color:#ffffff;\r\n  padding: 0.55rem;\r\n  margin: 0 0.25rem;\r\n}\r\n\r\n.nav-link a:hover {\r\n  color:#f48c06;\r\n}\r\n\r\n/* Logo */\r\n\r\n.logo{\r\n  font-size: 1.2rem;\r\n  line-height: 80px;\r\n}\r\n.logo a {\r\n  color: #d6cbcb;\r\n}\r\n.logo a:hover {\r\n  color: #f48c06;\r\n}\r\n.logoimg{\r\n  margin-top: 16px;\r\n  width: 10rem;\r\n}\r\n\r\n.ricon{\r\n  padding-top: 1px;\r\n  width: rem;\r\n}\r\n\r\n/* Footer */\r\n\r\n.footer{\r\n  padding: 3rem 12rem;\r\n  background-color: black;\r\n  text-align: center;\r\n  color:#ffffff;\r\n}\r\n\r\n/* Home */\r\n.home-inner{\r\n  color: #fff;\r\n  height: 100%;\r\n  width: 50%;\r\n  margin: auto;\r\n  display: -moz-box;\r\n  display: flex;\r\n  letter-spacing: 0.2em;\r\n  -moz-box-orient: vertical;\r\n  -moz-box-direction: normal;\r\n       flex-direction: column;\r\n  -moz-box-align: center;\r\n       align-items: center;\r\n  -moz-box-pack: center;\r\n       justify-content: center;\r\n  text-align: center;\r\n  animation: text 1s 1;\r\n  -webkit-animation: text 1s 1;\r\n}\r\n.paragraph-2 {\r\n  font-size: 1.2rem;\r\n  margin-bottom: 1rem;\r\n  letter-spacing: 3px;\r\n  word-spacing: 2px;\r\n  animation: para 3s 1;\r\n  -webkit-animation: para 3s 1;\r\n}\r\n\r\n.work-button{\r\n  font-family: \"Andale Mono\", monospace;\r\n  letter-spacing: 5px; \r\n  -moz-box-align: center; \r\n       align-items: center;\r\n  font-size: 1.1rem;\r\n  -moz-box-pack: center;\r\n       justify-content: center;\r\n  background-color: transparent;\r\n  color: #f48c06;\r\n  align-items: center;\r\n  padding: 0.4rem 2rem;\r\n  margin-top: 1.23rem;\r\n  border: 3px solid #f7f7f7;\r\n  border-radius: 4px;\r\n  box-shadow: 0 0 1px #757f85b3;\r\n  cursor: pointer;\r\n}\r\n\r\n.work-button:hover{\r\n  color: #f7f7f7;\r\n  border: 3px solid #f48c06;\r\n  box-shadow: 0 0 1px #757f85b3;\r\n}\r\n\r\n.font-icons{\r\n  display: -moz-box;\r\n  display: flex;\r\n  padding: ;\r\n}\r\n/* Animation */\r\n\r\n\r\n@keyframes text {\r\n  0%{\r\n    color: black;\r\n    margin-bottom: -30px;;\r\n  }\r\n  30%{\r\n    letter-spacing: 25px;\r\n    margin-bottom: -30px;\r\n  }\r\n  85%{\r\n    letter-spacing: 8px;\r\n    margin-bottom: -30px;\r\n  }\r\n}\r\n\r\n@keyframes para {\r\n0%{\r\n  opacity: 0;\r\n}\r\n45%{\r\n  opacity:0;\r\n}\r\n85%{\r\n  opacity: 1;\r\n}\r\n\r\n}\r\n\r\n\r\n/* Projects */\r\n\r\n\r\n\r\n/* About */\r\n\r\n\r\n\r\n/* Contact */", "",{"version":3,"sources":["E:/Portfolio/style/index.css"],"names":[],"mappings":"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","file":"index.css","sourcesContent":[":root {\r\n    --primary-color: #043333;\r\n    --color:#B9E3C6;\r\n    --dark-color: #05344F;\r\n    --dif-color: #ee6c4d;\r\n    --light-color: #F7FFF7;\r\n    --danger-color: #dc3545;\r\n    --success-color: #28a745;\r\n  }\r\n\r\n\r\n\r\n* {\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    padding: 0;\r\n  }\r\n  \r\n  body {\r\n    font-family: \"Andale Mono\", monospace;\r\n    font-size: 1.1rem;\r\n    line-height: 1.6;\r\n    background-color: #fff;\r\n    color: #333;\r\n  }\r\n  \r\n  a {\r\n    text-decoration: none;\r\n  }\r\n  \r\n  ul {\r\n    list-style: none;\r\n  }\r\n  \r\n  img {\r\n    width: 100%;\r\n  }\r\n\r\n\r\n/* Utilities */\r\n.container {\r\n    max-width: 1100px;\r\n    margin: auto;\r\n    overflow: hidden;\r\n    padding: 0 2rem;\r\n    margin-top: 6rem;\r\n    margin-bottom: 3rem;\r\n    }\r\n.wrapper{\r\n  padding: 2rem 12rem;\r\n}\r\n\r\n.large {\r\n  font-size: 2.7rem;\r\n  line-height: 1.2;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n\r\n  /* Overlay */\r\n.dark-overlay {\r\n  background-color: rgba(0, 0, 0, 0.493);\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n.blue-overlay {\r\n  background-color: rgba(18, 64, 99, 0.542);\r\n  position: absolute;\r\n  height: 100%;\r\n  width: 100%;\r\n\r\n}\r\n\r\n.homepage {\r\n  max-width: 100%;\r\n  margin: auto;\r\n  overflow: hidden;\r\n\r\n}\r\n.home-image{\r\n  margin: 0;\r\n  padding: 0;\r\n  position: relative;\r\n  background: url('../public/background.jpg') no-repeat center bottom/cover;\r\n  width: 100%;\r\n  height: 100vh;\r\n  padding: 0rem 12rem;\r\n\r\n  }\r\n\r\n/* NavBar */\r\n\r\n.navbar {\r\n  \r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  position: fixed;\r\n  padding: 0.1rem 2rem;\r\n  z-index: 1;\r\n  width: 100%;\r\n  opacity: 0.9;\r\n  margin-bottom: 1rem;\r\n  opacity: 0.95;\r\n}\r\n\r\n.nav-item {\r\n  display: flex;\r\n}\r\n\r\n.nav-link a {\r\n  color:#ffffff;\r\n  padding: 0.55rem;\r\n  margin: 0 0.25rem;\r\n}\r\n\r\n.nav-link a:hover {\r\n  color:#f48c06;\r\n}\r\n\r\n/* Logo */\r\n\r\n.logo{\r\n  font-size: 1.2rem;\r\n  line-height: 80px;\r\n}\r\n.logo a {\r\n  color: #d6cbcb;\r\n}\r\n.logo a:hover {\r\n  color: #f48c06;\r\n}\r\n.logoimg{\r\n  margin-top: 16px;\r\n  width: 10rem;\r\n}\r\n\r\n.ricon{\r\n  padding-top: 1px;\r\n  width: rem;\r\n}\r\n\r\n/* Footer */\r\n\r\n.footer{\r\n  padding: 3rem 12rem;\r\n  background-color: black;\r\n  text-align: center;\r\n  color:#ffffff;\r\n}\r\n\r\n/* Home */\r\n.home-inner{\r\n  color: #fff;\r\n  height: 100%;\r\n  width: 50%;\r\n  margin: auto;\r\n  display: flex;\r\n  letter-spacing: 0.2em;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  text-align: center;\r\n  animation: text 1s 1;\r\n  -webkit-animation: text 1s 1;\r\n}\r\n.paragraph-2 {\r\n  font-size: 1.2rem;\r\n  margin-bottom: 1rem;\r\n  letter-spacing: 3px;\r\n  word-spacing: 2px;\r\n  animation: para 3s 1;\r\n  -webkit-animation: para 3s 1;\r\n}\r\n\r\n.work-button{\r\n  font-family: \"Andale Mono\", monospace;\r\n  letter-spacing: 5px; \r\n  align-items: center;\r\n  font-size: 1.1rem;\r\n  justify-content: center;\r\n  background-color: transparent;\r\n  color: #f48c06;\r\n  align-items: center;\r\n  padding: 0.4rem 2rem;\r\n  margin-top: 1.23rem;\r\n  border: 3px solid #f7f7f7;\r\n  border-radius: 4px;\r\n  box-shadow: 0 0 1px #757f85b3;\r\n  cursor: pointer;\r\n}\r\n\r\n.work-button:hover{\r\n  color: #f7f7f7;\r\n  border: 3px solid #f48c06;\r\n  box-shadow: 0 0 1px #757f85b3;\r\n}\r\n\r\n.font-icons{\r\n  display: flex;\r\n  padding: ;\r\n}\r\n/* Animation */\r\n\r\n\r\n@keyframes text {\r\n  0%{\r\n    color: black;\r\n    margin-bottom: -30px;;\r\n  }\r\n  30%{\r\n    letter-spacing: 25px;\r\n    margin-bottom: -30px;\r\n  }\r\n  85%{\r\n    letter-spacing: 8px;\r\n    margin-bottom: -30px;\r\n  }\r\n}\r\n\r\n@keyframes para {\r\n0%{\r\n  opacity: 0;\r\n}\r\n45%{\r\n  opacity:0;\r\n}\r\n85%{\r\n  opacity: 1;\r\n}\r\n\r\n}\r\n\r\n\r\n/* Projects */\r\n\r\n\r\n\r\n/* About */\r\n\r\n\r\n\r\n/* Contact */"]}]);
// Exports
module.exports = exports;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGUvaW5kZXguY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMscUdBQWdEO0FBQzFGLHNDQUFzQyxtQkFBTyxDQUFDLDJHQUFtRDtBQUNqRyxvQ0FBb0MsbUJBQU8sQ0FBQyx5REFBMEI7QUFDdEU7QUFDQTtBQUNBO0FBQ0EsY0FBYyxRQUFTLFVBQVUsaUNBQWlDLHdCQUF3Qiw4QkFBOEIsNkJBQTZCLCtCQUErQixnQ0FBZ0MsaUNBQWlDLE9BQU8sbUJBQW1CLG9DQUFvQyxvQ0FBb0Msa0JBQWtCLG1CQUFtQixPQUFPLGtCQUFrQixnREFBZ0QsMEJBQTBCLHlCQUF5QiwrQkFBK0Isb0JBQW9CLE9BQU8sZUFBZSw4QkFBOEIsT0FBTyxnQkFBZ0IseUJBQXlCLE9BQU8saUJBQWlCLG9CQUFvQixPQUFPLDJDQUEyQywwQkFBMEIscUJBQXFCLHlCQUF5Qix3QkFBd0IseUJBQXlCLDRCQUE0QixTQUFTLGFBQWEsMEJBQTBCLEtBQUssZ0JBQWdCLHdCQUF3Qix1QkFBdUIsMEJBQTBCLEtBQUssOENBQThDLDZDQUE2Qyx5QkFBeUIsYUFBYSxjQUFjLGtCQUFrQixtQkFBbUIsS0FBSyxtQkFBbUIsZ0RBQWdELHlCQUF5QixtQkFBbUIsa0JBQWtCLFNBQVMsbUJBQW1CLHNCQUFzQixtQkFBbUIsdUJBQXVCLFNBQVMsZ0JBQWdCLGdCQUFnQixpQkFBaUIseUJBQXlCLGdHQUFnRyxrQkFBa0Isb0JBQW9CLDBCQUEwQixXQUFXLHFDQUFxQyw4QkFBOEIsMEJBQTBCLDZCQUE2QiwwQ0FBMEMsNkJBQTZCLCtCQUErQixzQkFBc0IsMkJBQTJCLGlCQUFpQixrQkFBa0IsbUJBQW1CLDBCQUEwQixvQkFBb0IsS0FBSyxtQkFBbUIsd0JBQXdCLG9CQUFvQixLQUFLLHFCQUFxQixvQkFBb0IsdUJBQXVCLHdCQUF3QixLQUFLLDJCQUEyQixvQkFBb0IsS0FBSyxnQ0FBZ0Msd0JBQXdCLHdCQUF3QixLQUFLLGFBQWEscUJBQXFCLEtBQUssbUJBQW1CLHFCQUFxQixLQUFLLGFBQWEsdUJBQXVCLG1CQUFtQixLQUFLLGVBQWUsdUJBQXVCLGlCQUFpQixLQUFLLG9DQUFvQywwQkFBMEIsOEJBQThCLHlCQUF5QixvQkFBb0IsS0FBSyxrQ0FBa0Msa0JBQWtCLG1CQUFtQixpQkFBaUIsbUJBQW1CLHdCQUF3QixvQkFBb0IsNEJBQTRCLGdDQUFnQyxpQ0FBaUMsa0NBQWtDLDZCQUE2QiwrQkFBK0IsNEJBQTRCLG1DQUFtQyx5QkFBeUIsMkJBQTJCLG1DQUFtQyxLQUFLLGtCQUFrQix3QkFBd0IsMEJBQTBCLDBCQUEwQix3QkFBd0IsMkJBQTJCLG1DQUFtQyxLQUFLLHFCQUFxQiw4Q0FBOEMsMEJBQTBCLDhCQUE4QixnQ0FBZ0Msd0JBQXdCLDRCQUE0QixtQ0FBbUMsb0NBQW9DLHFCQUFxQiwwQkFBMEIsMkJBQTJCLDBCQUEwQixnQ0FBZ0MseUJBQXlCLG9DQUFvQyxzQkFBc0IsS0FBSywyQkFBMkIscUJBQXFCLGdDQUFnQyxvQ0FBb0MsS0FBSyxvQkFBb0Isd0JBQXdCLG9CQUFvQixnQkFBZ0IsS0FBSyxnREFBZ0QsU0FBUyxxQkFBcUIsOEJBQThCLE9BQU8sVUFBVSw2QkFBNkIsNkJBQTZCLE9BQU8sVUFBVSw0QkFBNEIsNkJBQTZCLE9BQU8sS0FBSyx5QkFBeUIsT0FBTyxpQkFBaUIsS0FBSyxRQUFRLGdCQUFnQixLQUFLLFFBQVEsaUJBQWlCLEtBQUssU0FBUyx5RkFBeUYsbUZBQW1GLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsU0FBUyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLFVBQVUsS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsUUFBUSxVQUFVLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLFlBQVksYUFBYSxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxhQUFhLE9BQU8sV0FBVyxNQUFNLFlBQVksVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxXQUFXLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLFdBQVcsS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sVUFBVSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxXQUFXLFVBQVUsVUFBVSxLQUFLLFlBQVksS0FBSyxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxNQUFNLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLE1BQU0sT0FBTyxhQUFhLGFBQWEsd0RBQXdELGlDQUFpQyx3QkFBd0IsOEJBQThCLDZCQUE2QiwrQkFBK0IsZ0NBQWdDLGlDQUFpQyxPQUFPLG1CQUFtQiwrQkFBK0Isa0JBQWtCLG1CQUFtQixPQUFPLGtCQUFrQixnREFBZ0QsMEJBQTBCLHlCQUF5QiwrQkFBK0Isb0JBQW9CLE9BQU8sZUFBZSw4QkFBOEIsT0FBTyxnQkFBZ0IseUJBQXlCLE9BQU8saUJBQWlCLG9CQUFvQixPQUFPLDJDQUEyQywwQkFBMEIscUJBQXFCLHlCQUF5Qix3QkFBd0IseUJBQXlCLDRCQUE0QixTQUFTLGFBQWEsMEJBQTBCLEtBQUssZ0JBQWdCLHdCQUF3Qix1QkFBdUIsMEJBQTBCLEtBQUssOENBQThDLDZDQUE2Qyx5QkFBeUIsYUFBYSxjQUFjLGtCQUFrQixtQkFBbUIsS0FBSyxtQkFBbUIsZ0RBQWdELHlCQUF5QixtQkFBbUIsa0JBQWtCLFNBQVMsbUJBQW1CLHNCQUFzQixtQkFBbUIsdUJBQXVCLFNBQVMsZ0JBQWdCLGdCQUFnQixpQkFBaUIseUJBQXlCLGdGQUFnRixrQkFBa0Isb0JBQW9CLDBCQUEwQixXQUFXLHFDQUFxQywwQkFBMEIscUNBQXFDLDBCQUEwQixzQkFBc0IsMkJBQTJCLGlCQUFpQixrQkFBa0IsbUJBQW1CLDBCQUEwQixvQkFBb0IsS0FBSyxtQkFBbUIsb0JBQW9CLEtBQUsscUJBQXFCLG9CQUFvQix1QkFBdUIsd0JBQXdCLEtBQUssMkJBQTJCLG9CQUFvQixLQUFLLGdDQUFnQyx3QkFBd0Isd0JBQXdCLEtBQUssYUFBYSxxQkFBcUIsS0FBSyxtQkFBbUIscUJBQXFCLEtBQUssYUFBYSx1QkFBdUIsbUJBQW1CLEtBQUssZUFBZSx1QkFBdUIsaUJBQWlCLEtBQUssb0NBQW9DLDBCQUEwQiw4QkFBOEIseUJBQXlCLG9CQUFvQixLQUFLLGtDQUFrQyxrQkFBa0IsbUJBQW1CLGlCQUFpQixtQkFBbUIsb0JBQW9CLDRCQUE0Qiw2QkFBNkIsMEJBQTBCLDhCQUE4Qix5QkFBeUIsMkJBQTJCLG1DQUFtQyxLQUFLLGtCQUFrQix3QkFBd0IsMEJBQTBCLDBCQUEwQix3QkFBd0IsMkJBQTJCLG1DQUFtQyxLQUFLLHFCQUFxQiw4Q0FBOEMsMEJBQTBCLDJCQUEyQix3QkFBd0IsOEJBQThCLG9DQUFvQyxxQkFBcUIsMEJBQTBCLDJCQUEyQiwwQkFBMEIsZ0NBQWdDLHlCQUF5QixvQ0FBb0Msc0JBQXNCLEtBQUssMkJBQTJCLHFCQUFxQixnQ0FBZ0Msb0NBQW9DLEtBQUssb0JBQW9CLG9CQUFvQixnQkFBZ0IsS0FBSyxnREFBZ0QsU0FBUyxxQkFBcUIsOEJBQThCLE9BQU8sVUFBVSw2QkFBNkIsNkJBQTZCLE9BQU8sVUFBVSw0QkFBNEIsNkJBQTZCLE9BQU8sS0FBSyx5QkFBeUIsT0FBTyxpQkFBaUIsS0FBSyxRQUFRLGdCQUFnQixLQUFLLFFBQVEsaUJBQWlCLEtBQUssU0FBUyxxRkFBcUY7QUFDcnJWO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5jMDI3NDg4MWUzYzA5YTQ0NzM0ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IHJlcXVpcmUoXCIuLi9wdWJsaWMvYmFja2dyb3VuZC5qcGdcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcclxcbiAgICAtLXByaW1hcnktY29sb3I6ICMwNDMzMzM7XFxyXFxuICAgIC0tY29sb3I6I0I5RTNDNjtcXHJcXG4gICAgLS1kYXJrLWNvbG9yOiAjMDUzNDRGO1xcclxcbiAgICAtLWRpZi1jb2xvcjogI2VlNmM0ZDtcXHJcXG4gICAgLS1saWdodC1jb2xvcjogI0Y3RkZGNztcXHJcXG4gICAgLS1kYW5nZXItY29sb3I6ICNkYzM1NDU7XFxyXFxuICAgIC0tc3VjY2Vzcy1jb2xvcjogIzI4YTc0NTtcXHJcXG4gIH1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4qIHtcXHJcXG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgYm9keSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiQW5kYWxlIE1vbm9cXFwiLCBtb25vc3BhY2U7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcclxcbiAgICBsaW5lLWhlaWdodDogMS42O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgICBjb2xvcjogIzMzMztcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgYSB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgdWwge1xcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICBpbWcge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG5cXHJcXG4vKiBVdGlsaXRpZXMgKi9cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gICAgbWF4LXdpZHRoOiAxMTAwcHg7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgcGFkZGluZzogMCAycmVtO1xcclxcbiAgICBtYXJnaW4tdG9wOiA2cmVtO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xcclxcbiAgICB9XFxyXFxuLndyYXBwZXJ7XFxyXFxuICBwYWRkaW5nOiAycmVtIDEycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubGFyZ2Uge1xcclxcbiAgZm9udC1zaXplOiAyLjdyZW07XFxyXFxuICBsaW5lLWhlaWdodDogMS4yO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuICAvKiBPdmVybGF5ICovXFxyXFxuLmRhcmstb3ZlcmxheSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDkzKTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuLmJsdWUtb3ZlcmxheSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE4LCA2NCwgOTksIDAuNTQyKTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4uaG9tZXBhZ2Uge1xcclxcbiAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG5cXHJcXG59XFxyXFxuLmhvbWUtaW1hZ2V7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBuby1yZXBlYXQgY2VudGVyIGJvdHRvbS9jb3ZlcjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIHBhZGRpbmc6IDByZW0gMTJyZW07XFxyXFxuXFxyXFxuICB9XFxyXFxuXFxyXFxuLyogTmF2QmFyICovXFxyXFxuXFxyXFxuLm5hdmJhciB7XFxyXFxuICBcXHJcXG4gIGRpc3BsYXk6IC1tb3otYm94O1xcclxcbiAgXFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgLW1vei1ib3gtcGFjazoganVzdGlmeTtcXHJcXG4gICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgLW1vei1ib3gtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHBhZGRpbmc6IDAuMXJlbSAycmVtO1xcclxcbiAgei1pbmRleDogMTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgb3BhY2l0eTogMC45O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG4gIG9wYWNpdHk6IDAuOTU7XFxyXFxufVxcclxcblxcclxcbi5uYXYtaXRlbSB7XFxyXFxuICBkaXNwbGF5OiAtbW96LWJveDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi5uYXYtbGluayBhIHtcXHJcXG4gIGNvbG9yOiNmZmZmZmY7XFxyXFxuICBwYWRkaW5nOiAwLjU1cmVtO1xcclxcbiAgbWFyZ2luOiAwIDAuMjVyZW07XFxyXFxufVxcclxcblxcclxcbi5uYXYtbGluayBhOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiNmNDhjMDY7XFxyXFxufVxcclxcblxcclxcbi8qIExvZ28gKi9cXHJcXG5cXHJcXG4ubG9nb3tcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgbGluZS1oZWlnaHQ6IDgwcHg7XFxyXFxufVxcclxcbi5sb2dvIGEge1xcclxcbiAgY29sb3I6ICNkNmNiY2I7XFxyXFxufVxcclxcbi5sb2dvIGE6aG92ZXIge1xcclxcbiAgY29sb3I6ICNmNDhjMDY7XFxyXFxufVxcclxcbi5sb2dvaW1ne1xcclxcbiAgbWFyZ2luLXRvcDogMTZweDtcXHJcXG4gIHdpZHRoOiAxMHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnJpY29ue1xcclxcbiAgcGFkZGluZy10b3A6IDFweDtcXHJcXG4gIHdpZHRoOiByZW07XFxyXFxufVxcclxcblxcclxcbi8qIEZvb3RlciAqL1xcclxcblxcclxcbi5mb290ZXJ7XFxyXFxuICBwYWRkaW5nOiAzcmVtIDEycmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBjb2xvcjojZmZmZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBIb21lICovXFxyXFxuLmhvbWUtaW5uZXJ7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICBkaXNwbGF5OiAtbW96LWJveDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMC4yZW07XFxyXFxuICAtbW96LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xcclxcbiAgLW1vei1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XFxyXFxuICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAtbW96LWJveC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgLW1vei1ib3gtcGFjazogY2VudGVyO1xcclxcbiAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGFuaW1hdGlvbjogdGV4dCAxcyAxO1xcclxcbiAgLXdlYmtpdC1hbmltYXRpb246IHRleHQgMXMgMTtcXHJcXG59XFxyXFxuLnBhcmFncmFwaC0yIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAzcHg7XFxyXFxuICB3b3JkLXNwYWNpbmc6IDJweDtcXHJcXG4gIGFuaW1hdGlvbjogcGFyYSAzcyAxO1xcclxcbiAgLXdlYmtpdC1hbmltYXRpb246IHBhcmEgM3MgMTtcXHJcXG59XFxyXFxuXFxyXFxuLndvcmstYnV0dG9ue1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJBbmRhbGUgTW9ub1xcXCIsIG1vbm9zcGFjZTtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiA1cHg7IFxcclxcbiAgLW1vei1ib3gtYWxpZ246IGNlbnRlcjsgXFxyXFxuICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDEuMXJlbTtcXHJcXG4gIC1tb3otYm94LXBhY2s6IGNlbnRlcjtcXHJcXG4gICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIGNvbG9yOiAjZjQ4YzA2O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDAuNHJlbSAycmVtO1xcclxcbiAgbWFyZ2luLXRvcDogMS4yM3JlbTtcXHJcXG4gIGJvcmRlcjogM3B4IHNvbGlkICNmN2Y3Zjc7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICBib3gtc2hhZG93OiAwIDAgMXB4ICM3NTdmODViMztcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLndvcmstYnV0dG9uOmhvdmVye1xcclxcbiAgY29sb3I6ICNmN2Y3Zjc7XFxyXFxuICBib3JkZXI6IDNweCBzb2xpZCAjZjQ4YzA2O1xcclxcbiAgYm94LXNoYWRvdzogMCAwIDFweCAjNzU3Zjg1YjM7XFxyXFxufVxcclxcblxcclxcbi5mb250LWljb25ze1xcclxcbiAgZGlzcGxheTogLW1vei1ib3g7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgcGFkZGluZzogO1xcclxcbn1cXHJcXG4vKiBBbmltYXRpb24gKi9cXHJcXG5cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHRleHQge1xcclxcbiAgMCV7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogLTMwcHg7O1xcclxcbiAgfVxcclxcbiAgMzAle1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMjVweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogLTMwcHg7XFxyXFxuICB9XFxyXFxuICA4NSV7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiA4cHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IC0zMHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHBhcmEge1xcclxcbjAle1xcclxcbiAgb3BhY2l0eTogMDtcXHJcXG59XFxyXFxuNDUle1xcclxcbiAgb3BhY2l0eTowO1xcclxcbn1cXHJcXG44NSV7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbn1cXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogUHJvamVjdHMgKi9cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKiBBYm91dCAqL1xcclxcblxcclxcblxcclxcblxcclxcbi8qIENvbnRhY3QgKi9cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJFOi9Qb3J0Zm9saW8vc3R5bGUvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksd0JBQXdCO0lBQ3hCLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsb0JBQW9CO0lBQ3BCLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsd0JBQXdCO0VBQzFCOzs7O0FBSUY7SUFDSSwyQkFBc0I7U0FBdEIsc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxxQ0FBcUM7SUFDckMsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsV0FBVztFQUNiOztFQUVBO0lBQ0UscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsV0FBVztFQUNiOzs7QUFHRixjQUFjO0FBQ2Q7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQjtBQUNKO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7OztFQUdFLFlBQVk7QUFDZDtFQUNFLHNDQUFzQztFQUN0QyxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsWUFBWTtBQUNkO0FBQ0E7RUFDRSx5Q0FBeUM7RUFDekMsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXOztBQUViOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixnQkFBZ0I7O0FBRWxCO0FBQ0E7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixpRkFBeUU7RUFDekUsV0FBVztFQUNYLGFBQWE7RUFDYixtQkFBbUI7O0VBRW5COztBQUVGLFdBQVc7O0FBRVg7O0VBRUUsaUJBQWE7O0VBQWIsYUFBYTtFQUNiLHNCQUE4QjtPQUE5Qiw4QkFBOEI7RUFDOUIsc0JBQW1CO09BQW5CLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLFVBQVU7RUFDVixXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxpQkFBYTtFQUFiLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBLFNBQVM7O0FBRVQ7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFVBQVU7QUFDWjs7QUFFQSxXQUFXOztBQUVYO0VBQ0UsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsYUFBYTtBQUNmOztBQUVBLFNBQVM7QUFDVDtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osVUFBVTtFQUNWLFlBQVk7RUFDWixpQkFBYTtFQUFiLGFBQWE7RUFDYixxQkFBcUI7RUFDckIseUJBQXNCO0VBQXRCLDBCQUFzQjtPQUF0QixzQkFBc0I7RUFDdEIsc0JBQW1CO09BQW5CLG1CQUFtQjtFQUNuQixxQkFBdUI7T0FBdkIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsNEJBQTRCO0FBQzlCO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLHFDQUFxQztFQUNyQyxtQkFBbUI7RUFDbkIsc0JBQW1CO09BQW5CLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIscUJBQXVCO09BQXZCLHVCQUF1QjtFQUN2Qiw2QkFBNkI7RUFDN0IsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsNkJBQTZCO0VBQzdCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGlCQUFhO0VBQWIsYUFBYTtFQUNiLFNBQVM7QUFDWDtBQUNBLGNBQWM7OztBQUdkO0VBQ0U7SUFDRSxZQUFZO0lBQ1osb0JBQW9CO0VBQ3RCO0VBQ0E7SUFDRSxvQkFBb0I7SUFDcEIsb0JBQW9CO0VBQ3RCO0VBQ0E7SUFDRSxtQkFBbUI7SUFDbkIsb0JBQW9CO0VBQ3RCO0FBQ0Y7O0FBRUE7QUFDQTtFQUNFLFVBQVU7QUFDWjtBQUNBO0VBQ0UsU0FBUztBQUNYO0FBQ0E7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7OztBQUdBLGFBQWE7Ozs7QUFJYixVQUFVOzs7O0FBSVYsWUFBWVwiLFwiZmlsZVwiOlwiaW5kZXguY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXHJcXG4gICAgLS1wcmltYXJ5LWNvbG9yOiAjMDQzMzMzO1xcclxcbiAgICAtLWNvbG9yOiNCOUUzQzY7XFxyXFxuICAgIC0tZGFyay1jb2xvcjogIzA1MzQ0RjtcXHJcXG4gICAgLS1kaWYtY29sb3I6ICNlZTZjNGQ7XFxyXFxuICAgIC0tbGlnaHQtY29sb3I6ICNGN0ZGRjc7XFxyXFxuICAgIC0tZGFuZ2VyLWNvbG9yOiAjZGMzNTQ1O1xcclxcbiAgICAtLXN1Y2Nlc3MtY29sb3I6ICMyOGE3NDU7XFxyXFxuICB9XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuKiB7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgYm9keSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiQW5kYWxlIE1vbm9cXFwiLCBtb25vc3BhY2U7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcclxcbiAgICBsaW5lLWhlaWdodDogMS42O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgICBjb2xvcjogIzMzMztcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgYSB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgdWwge1xcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICBpbWcge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG5cXHJcXG4vKiBVdGlsaXRpZXMgKi9cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gICAgbWF4LXdpZHRoOiAxMTAwcHg7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgcGFkZGluZzogMCAycmVtO1xcclxcbiAgICBtYXJnaW4tdG9wOiA2cmVtO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xcclxcbiAgICB9XFxyXFxuLndyYXBwZXJ7XFxyXFxuICBwYWRkaW5nOiAycmVtIDEycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubGFyZ2Uge1xcclxcbiAgZm9udC1zaXplOiAyLjdyZW07XFxyXFxuICBsaW5lLWhlaWdodDogMS4yO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuICAvKiBPdmVybGF5ICovXFxyXFxuLmRhcmstb3ZlcmxheSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDkzKTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuLmJsdWUtb3ZlcmxheSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE4LCA2NCwgOTksIDAuNTQyKTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4uaG9tZXBhZ2Uge1xcclxcbiAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG5cXHJcXG59XFxyXFxuLmhvbWUtaW1hZ2V7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgYmFja2dyb3VuZDogdXJsKCcuLi9wdWJsaWMvYmFja2dyb3VuZC5qcGcnKSBuby1yZXBlYXQgY2VudGVyIGJvdHRvbS9jb3ZlcjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIHBhZGRpbmc6IDByZW0gMTJyZW07XFxyXFxuXFxyXFxuICB9XFxyXFxuXFxyXFxuLyogTmF2QmFyICovXFxyXFxuXFxyXFxuLm5hdmJhciB7XFxyXFxuICBcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgcGFkZGluZzogMC4xcmVtIDJyZW07XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBvcGFjaXR5OiAwLjk7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbiAgb3BhY2l0eTogMC45NTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1pdGVtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi5uYXYtbGluayBhIHtcXHJcXG4gIGNvbG9yOiNmZmZmZmY7XFxyXFxuICBwYWRkaW5nOiAwLjU1cmVtO1xcclxcbiAgbWFyZ2luOiAwIDAuMjVyZW07XFxyXFxufVxcclxcblxcclxcbi5uYXYtbGluayBhOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiNmNDhjMDY7XFxyXFxufVxcclxcblxcclxcbi8qIExvZ28gKi9cXHJcXG5cXHJcXG4ubG9nb3tcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgbGluZS1oZWlnaHQ6IDgwcHg7XFxyXFxufVxcclxcbi5sb2dvIGEge1xcclxcbiAgY29sb3I6ICNkNmNiY2I7XFxyXFxufVxcclxcbi5sb2dvIGE6aG92ZXIge1xcclxcbiAgY29sb3I6ICNmNDhjMDY7XFxyXFxufVxcclxcbi5sb2dvaW1ne1xcclxcbiAgbWFyZ2luLXRvcDogMTZweDtcXHJcXG4gIHdpZHRoOiAxMHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnJpY29ue1xcclxcbiAgcGFkZGluZy10b3A6IDFweDtcXHJcXG4gIHdpZHRoOiByZW07XFxyXFxufVxcclxcblxcclxcbi8qIEZvb3RlciAqL1xcclxcblxcclxcbi5mb290ZXJ7XFxyXFxuICBwYWRkaW5nOiAzcmVtIDEycmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBjb2xvcjojZmZmZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBIb21lICovXFxyXFxuLmhvbWUtaW5uZXJ7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMmVtO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGFuaW1hdGlvbjogdGV4dCAxcyAxO1xcclxcbiAgLXdlYmtpdC1hbmltYXRpb246IHRleHQgMXMgMTtcXHJcXG59XFxyXFxuLnBhcmFncmFwaC0yIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAzcHg7XFxyXFxuICB3b3JkLXNwYWNpbmc6IDJweDtcXHJcXG4gIGFuaW1hdGlvbjogcGFyYSAzcyAxO1xcclxcbiAgLXdlYmtpdC1hbmltYXRpb246IHBhcmEgM3MgMTtcXHJcXG59XFxyXFxuXFxyXFxuLndvcmstYnV0dG9ue1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJBbmRhbGUgTW9ub1xcXCIsIG1vbm9zcGFjZTtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiA1cHg7IFxcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIGNvbG9yOiAjZjQ4YzA2O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDAuNHJlbSAycmVtO1xcclxcbiAgbWFyZ2luLXRvcDogMS4yM3JlbTtcXHJcXG4gIGJvcmRlcjogM3B4IHNvbGlkICNmN2Y3Zjc7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICBib3gtc2hhZG93OiAwIDAgMXB4ICM3NTdmODViMztcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLndvcmstYnV0dG9uOmhvdmVye1xcclxcbiAgY29sb3I6ICNmN2Y3Zjc7XFxyXFxuICBib3JkZXI6IDNweCBzb2xpZCAjZjQ4YzA2O1xcclxcbiAgYm94LXNoYWRvdzogMCAwIDFweCAjNzU3Zjg1YjM7XFxyXFxufVxcclxcblxcclxcbi5mb250LWljb25ze1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHBhZGRpbmc6IDtcXHJcXG59XFxyXFxuLyogQW5pbWF0aW9uICovXFxyXFxuXFxyXFxuXFxyXFxuQGtleWZyYW1lcyB0ZXh0IHtcXHJcXG4gIDAle1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IC0zMHB4OztcXHJcXG4gIH1cXHJcXG4gIDMwJXtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDI1cHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IC0zMHB4O1xcclxcbiAgfVxcclxcbiAgODUle1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogOHB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAtMzBweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBwYXJhIHtcXHJcXG4wJXtcXHJcXG4gIG9wYWNpdHk6IDA7XFxyXFxufVxcclxcbjQ1JXtcXHJcXG4gIG9wYWNpdHk6MDtcXHJcXG59XFxyXFxuODUle1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG59XFxyXFxuXFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIFByb2plY3RzICovXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLyogQWJvdXQgKi9cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKiBDb250YWN0ICovXCJdfV0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==