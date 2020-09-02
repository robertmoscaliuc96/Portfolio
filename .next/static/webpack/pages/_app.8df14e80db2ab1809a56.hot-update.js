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
exports.push([module.i, ":root {\r\n    --primary-color: #043333;\r\n    --color:#B9E3C6;\r\n    --dark-color: #05344F;\r\n    --dif-color: #ee6c4d;\r\n    --light-color: #F7FFF7;\r\n    --danger-color: #dc3545;\r\n    --success-color: #28a745;\r\n  }\r\n\r\n\r\n\r\n* {\r\n    -moz-box-sizing: border-box;\r\n         box-sizing: border-box;\r\n    margin: 0;\r\n    padding: 0;\r\n  }\r\n  \r\n  body {\r\n    font-family: \"Andale Mono\", monospace;\r\n    font-size: 1.1rem;\r\n    line-height: 1.6;\r\n    background-color: #fff;\r\n    color: #333;\r\n  }\r\n  \r\n  a {\r\n    text-decoration: none;\r\n  }\r\n  \r\n  ul {\r\n    list-style: none;\r\n  }\r\n  \r\n  img {\r\n    width: 100%;\r\n  }\r\n\r\n\r\n/* Utilities */\r\n.container {\r\n    max-width: 1100px;\r\n    margin: auto;\r\n    overflow: hidden;\r\n    padding: 0 2rem;\r\n    margin-top: 6rem;\r\n    margin-bottom: 3rem;\r\n    }\r\n.wrapper{\r\n  padding: 2rem 12rem;\r\n}\r\n\r\n.large {\r\n  font-size: 2.7rem;\r\n  line-height: 1.2;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n\r\n  /* Overlay */\r\n.dark-overlay {\r\n  background-color: rgba(0, 0, 0, 0.493);\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n.blue-overlay {\r\n  background-color: rgba(18, 64, 99, 0.542);\r\n  position: absolute;\r\n  height: 100%;\r\n  width: 100%;\r\n\r\n}\r\n\r\n.homepage {\r\n  max-width: 100%;\r\n  margin: auto;\r\n  overflow: hidden;\r\n\r\n}\r\n.home-image{\r\n  margin: 0;\r\n  padding: 0;\r\n  position: relative;\r\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat center bottom/cover;\r\n  width: 100%;\r\n  height: 100vh;\r\n  padding: 0rem 12rem;\r\n\r\n  }\r\n\r\n/* NavBar */\r\n\r\n.navbar {\r\n  \r\n  display: -moz-box;\r\n  \r\n  display: flex;\r\n  -moz-box-pack: justify;\r\n       justify-content: space-between;\r\n  -moz-box-align: center;\r\n       align-items: center;\r\n  position: fixed;\r\n  padding: 0.1rem 2rem;\r\n  z-index: 1;\r\n  width: 100%;\r\n  opacity: 0.9;\r\n  margin-bottom: 1rem;\r\n  opacity: 0.95;\r\n}\r\n\r\n.nav-item {\r\n  display: -moz-box;\r\n  display: flex;\r\n}\r\n\r\n.nav-link a {\r\n  color:#ffffff;\r\n  padding: 0.55rem;\r\n  margin: 0 0.25rem;\r\n}\r\n\r\n.nav-link a:hover {\r\n  color:#f48c06;\r\n}\r\n\r\n/* Logo */\r\n\r\n.logo{\r\n  font-size: 1.2rem;\r\n  line-height: 80px;\r\n}\r\n.logo a {\r\n  color: #d6cbcb;\r\n}\r\n.logo a:hover {\r\n  color: #f48c06;\r\n}\r\n.logoimg{\r\n  margin-top: 16px;\r\n  width: 10rem;\r\n  cursor: pointer;\r\n}\r\n\r\n.ricon{\r\n  padding-top: 1px;\r\n  width: rem;\r\n}\r\n\r\n/* Footer */\r\n\r\n.footer{\r\n  padding: 2rem 10rem;\r\n  background-color: black;\r\n  text-align: center;\r\n  color:#ffffff;\r\n}\r\n\r\n.footer-container{\r\n  display: grid;\r\n  grid-template-columns: repeat(2,1fr);\r\n}\r\n\r\n.footer-email{\r\n  font-size: 1rem;\r\n}\r\n\r\n.footer-icons{\r\n  display: grid;\r\n  grid-template-columns: repeat(2,1fr);\r\n  grid-gap:0.1rem;\r\n  font-size: 1.3rem;\r\n  cursor: pointer;\r\n}\r\n.footer-icons p{\r\n  font-size: 1rem;\r\n}\r\n.copyright{\r\n  \r\n}\r\n\r\n/* Home */\r\n\r\n\r\n.home-inner{\r\n  color: #fff;\r\n  height: 100%;\r\n  width: 50%;\r\n  margin: auto;\r\n  display: -moz-box;\r\n  display: flex;\r\n  letter-spacing: 0.2em;\r\n  -moz-box-orient: vertical;\r\n  -moz-box-direction: normal;\r\n       flex-direction: column;\r\n  -moz-box-align: center;\r\n       align-items: center;\r\n  -moz-box-pack: center;\r\n       justify-content: center;\r\n  text-align: center;\r\n  animation: text 1s 1;\r\n  -webkit-animation: text 1s 1;\r\n}\r\n.paragraph-2 {\r\n  font-size: 1.2rem;\r\n  margin-bottom: 1rem;\r\n  letter-spacing: 3px;\r\n  word-spacing: 2px;\r\n  animation: para 3s 1;\r\n  -webkit-animation: para 3s 1;\r\n}\r\n\r\n.work-button{\r\n  font-family: \"Andale Mono\", monospace;\r\n  letter-spacing: 5px; \r\n  -moz-box-align: center; \r\n       align-items: center;\r\n  font-size: 1.1rem;\r\n  -moz-box-pack: center;\r\n       justify-content: center;\r\n  background-color: transparent;\r\n  color: #f48c06;\r\n  align-items: center;\r\n  padding: 0.4rem 2rem;\r\n  margin-top: 1.23rem;\r\n  border: 3px solid #f7f7f7;\r\n  border-radius: 4px;\r\n  box-shadow: 0 0 1px #757f85b3;\r\n  cursor: pointer;\r\n}\r\n\r\n.work-button:hover{\r\n  color: #f7f7f7;\r\n  border: 3px solid #f48c06;\r\n  box-shadow: 0 0 1px #757f85b3;\r\n}\r\n\r\n.font-icons{\r\n  display: grid;\r\n  grid-template-columns: repeat(2,1fr);\r\n  grid-gap:2rem;\r\n  font-size: 2rem;\r\n  padding: 2rem;\r\n  cursor: pointer;\r\n}\r\n/* Animation */\r\n\r\n\r\n@keyframes text {\r\n  0%{\r\n    color: black;\r\n    margin-bottom: -30px;;\r\n  }\r\n  30%{\r\n    letter-spacing: 25px;\r\n    margin-bottom: -30px;\r\n  }\r\n  85%{\r\n    letter-spacing: 8px;\r\n    margin-bottom: -30px;\r\n  }\r\n}\r\n\r\n@keyframes para {\r\n0%{\r\n  opacity: 0;\r\n}\r\n45%{\r\n  opacity:0;\r\n}\r\n85%{\r\n  opacity: 1;\r\n}\r\n\r\n}\r\n\r\n\r\n/* Projects */\r\n\r\n\r\n\r\n/* About */\r\n\r\n\r\n\r\n/* Contact */", "",{"version":3,"sources":["E:/Portfolio/style/index.css"],"names":[],"mappings":"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","file":"index.css","sourcesContent":[":root {\r\n    --primary-color: #043333;\r\n    --color:#B9E3C6;\r\n    --dark-color: #05344F;\r\n    --dif-color: #ee6c4d;\r\n    --light-color: #F7FFF7;\r\n    --danger-color: #dc3545;\r\n    --success-color: #28a745;\r\n  }\r\n\r\n\r\n\r\n* {\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    padding: 0;\r\n  }\r\n  \r\n  body {\r\n    font-family: \"Andale Mono\", monospace;\r\n    font-size: 1.1rem;\r\n    line-height: 1.6;\r\n    background-color: #fff;\r\n    color: #333;\r\n  }\r\n  \r\n  a {\r\n    text-decoration: none;\r\n  }\r\n  \r\n  ul {\r\n    list-style: none;\r\n  }\r\n  \r\n  img {\r\n    width: 100%;\r\n  }\r\n\r\n\r\n/* Utilities */\r\n.container {\r\n    max-width: 1100px;\r\n    margin: auto;\r\n    overflow: hidden;\r\n    padding: 0 2rem;\r\n    margin-top: 6rem;\r\n    margin-bottom: 3rem;\r\n    }\r\n.wrapper{\r\n  padding: 2rem 12rem;\r\n}\r\n\r\n.large {\r\n  font-size: 2.7rem;\r\n  line-height: 1.2;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n\r\n  /* Overlay */\r\n.dark-overlay {\r\n  background-color: rgba(0, 0, 0, 0.493);\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n.blue-overlay {\r\n  background-color: rgba(18, 64, 99, 0.542);\r\n  position: absolute;\r\n  height: 100%;\r\n  width: 100%;\r\n\r\n}\r\n\r\n.homepage {\r\n  max-width: 100%;\r\n  margin: auto;\r\n  overflow: hidden;\r\n\r\n}\r\n.home-image{\r\n  margin: 0;\r\n  padding: 0;\r\n  position: relative;\r\n  background: url('../public/background.jpg') no-repeat center bottom/cover;\r\n  width: 100%;\r\n  height: 100vh;\r\n  padding: 0rem 12rem;\r\n\r\n  }\r\n\r\n/* NavBar */\r\n\r\n.navbar {\r\n  \r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  position: fixed;\r\n  padding: 0.1rem 2rem;\r\n  z-index: 1;\r\n  width: 100%;\r\n  opacity: 0.9;\r\n  margin-bottom: 1rem;\r\n  opacity: 0.95;\r\n}\r\n\r\n.nav-item {\r\n  display: flex;\r\n}\r\n\r\n.nav-link a {\r\n  color:#ffffff;\r\n  padding: 0.55rem;\r\n  margin: 0 0.25rem;\r\n}\r\n\r\n.nav-link a:hover {\r\n  color:#f48c06;\r\n}\r\n\r\n/* Logo */\r\n\r\n.logo{\r\n  font-size: 1.2rem;\r\n  line-height: 80px;\r\n}\r\n.logo a {\r\n  color: #d6cbcb;\r\n}\r\n.logo a:hover {\r\n  color: #f48c06;\r\n}\r\n.logoimg{\r\n  margin-top: 16px;\r\n  width: 10rem;\r\n  cursor: pointer;\r\n}\r\n\r\n.ricon{\r\n  padding-top: 1px;\r\n  width: rem;\r\n}\r\n\r\n/* Footer */\r\n\r\n.footer{\r\n  padding: 2rem 10rem;\r\n  background-color: black;\r\n  text-align: center;\r\n  color:#ffffff;\r\n}\r\n\r\n.footer-container{\r\n  display: grid;\r\n  grid-template-columns: repeat(2,1fr);\r\n}\r\n\r\n.footer-email{\r\n  font-size: 1rem;\r\n}\r\n\r\n.footer-icons{\r\n  display: grid;\r\n  grid-template-columns: repeat(2,1fr);\r\n  grid-gap:0.1rem;\r\n  font-size: 1.3rem;\r\n  cursor: pointer;\r\n}\r\n.footer-icons p{\r\n  font-size: 1rem;\r\n}\r\n.copyright{\r\n  \r\n}\r\n\r\n/* Home */\r\n\r\n\r\n.home-inner{\r\n  color: #fff;\r\n  height: 100%;\r\n  width: 50%;\r\n  margin: auto;\r\n  display: flex;\r\n  letter-spacing: 0.2em;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  text-align: center;\r\n  animation: text 1s 1;\r\n  -webkit-animation: text 1s 1;\r\n}\r\n.paragraph-2 {\r\n  font-size: 1.2rem;\r\n  margin-bottom: 1rem;\r\n  letter-spacing: 3px;\r\n  word-spacing: 2px;\r\n  animation: para 3s 1;\r\n  -webkit-animation: para 3s 1;\r\n}\r\n\r\n.work-button{\r\n  font-family: \"Andale Mono\", monospace;\r\n  letter-spacing: 5px; \r\n  align-items: center;\r\n  font-size: 1.1rem;\r\n  justify-content: center;\r\n  background-color: transparent;\r\n  color: #f48c06;\r\n  align-items: center;\r\n  padding: 0.4rem 2rem;\r\n  margin-top: 1.23rem;\r\n  border: 3px solid #f7f7f7;\r\n  border-radius: 4px;\r\n  box-shadow: 0 0 1px #757f85b3;\r\n  cursor: pointer;\r\n}\r\n\r\n.work-button:hover{\r\n  color: #f7f7f7;\r\n  border: 3px solid #f48c06;\r\n  box-shadow: 0 0 1px #757f85b3;\r\n}\r\n\r\n.font-icons{\r\n  display: grid;\r\n  grid-template-columns: repeat(2,1fr);\r\n  grid-gap:2rem;\r\n  font-size: 2rem;\r\n  padding: 2rem;\r\n  cursor: pointer;\r\n}\r\n/* Animation */\r\n\r\n\r\n@keyframes text {\r\n  0%{\r\n    color: black;\r\n    margin-bottom: -30px;;\r\n  }\r\n  30%{\r\n    letter-spacing: 25px;\r\n    margin-bottom: -30px;\r\n  }\r\n  85%{\r\n    letter-spacing: 8px;\r\n    margin-bottom: -30px;\r\n  }\r\n}\r\n\r\n@keyframes para {\r\n0%{\r\n  opacity: 0;\r\n}\r\n45%{\r\n  opacity:0;\r\n}\r\n85%{\r\n  opacity: 1;\r\n}\r\n\r\n}\r\n\r\n\r\n/* Projects */\r\n\r\n\r\n\r\n/* About */\r\n\r\n\r\n\r\n/* Contact */"]}]);
// Exports
module.exports = exports;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGUvaW5kZXguY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMscUdBQWdEO0FBQzFGLHNDQUFzQyxtQkFBTyxDQUFDLDJHQUFtRDtBQUNqRyxvQ0FBb0MsbUJBQU8sQ0FBQyx5REFBMEI7QUFDdEU7QUFDQTtBQUNBO0FBQ0EsY0FBYyxRQUFTLFVBQVUsaUNBQWlDLHdCQUF3Qiw4QkFBOEIsNkJBQTZCLCtCQUErQixnQ0FBZ0MsaUNBQWlDLE9BQU8sbUJBQW1CLG9DQUFvQyxvQ0FBb0Msa0JBQWtCLG1CQUFtQixPQUFPLGtCQUFrQixnREFBZ0QsMEJBQTBCLHlCQUF5QiwrQkFBK0Isb0JBQW9CLE9BQU8sZUFBZSw4QkFBOEIsT0FBTyxnQkFBZ0IseUJBQXlCLE9BQU8saUJBQWlCLG9CQUFvQixPQUFPLDJDQUEyQywwQkFBMEIscUJBQXFCLHlCQUF5Qix3QkFBd0IseUJBQXlCLDRCQUE0QixTQUFTLGFBQWEsMEJBQTBCLEtBQUssZ0JBQWdCLHdCQUF3Qix1QkFBdUIsMEJBQTBCLEtBQUssOENBQThDLDZDQUE2Qyx5QkFBeUIsYUFBYSxjQUFjLGtCQUFrQixtQkFBbUIsS0FBSyxtQkFBbUIsZ0RBQWdELHlCQUF5QixtQkFBbUIsa0JBQWtCLFNBQVMsbUJBQW1CLHNCQUFzQixtQkFBbUIsdUJBQXVCLFNBQVMsZ0JBQWdCLGdCQUFnQixpQkFBaUIseUJBQXlCLGdHQUFnRyxrQkFBa0Isb0JBQW9CLDBCQUEwQixXQUFXLHFDQUFxQyw4QkFBOEIsMEJBQTBCLDZCQUE2QiwwQ0FBMEMsNkJBQTZCLCtCQUErQixzQkFBc0IsMkJBQTJCLGlCQUFpQixrQkFBa0IsbUJBQW1CLDBCQUEwQixvQkFBb0IsS0FBSyxtQkFBbUIsd0JBQXdCLG9CQUFvQixLQUFLLHFCQUFxQixvQkFBb0IsdUJBQXVCLHdCQUF3QixLQUFLLDJCQUEyQixvQkFBb0IsS0FBSyxnQ0FBZ0Msd0JBQXdCLHdCQUF3QixLQUFLLGFBQWEscUJBQXFCLEtBQUssbUJBQW1CLHFCQUFxQixLQUFLLGFBQWEsdUJBQXVCLG1CQUFtQixzQkFBc0IsS0FBSyxlQUFlLHVCQUF1QixpQkFBaUIsS0FBSyxvQ0FBb0MsMEJBQTBCLDhCQUE4Qix5QkFBeUIsb0JBQW9CLEtBQUssMEJBQTBCLG9CQUFvQiwyQ0FBMkMsS0FBSyxzQkFBc0Isc0JBQXNCLEtBQUssc0JBQXNCLG9CQUFvQiwyQ0FBMkMsc0JBQXNCLHdCQUF3QixzQkFBc0IsS0FBSyxvQkFBb0Isc0JBQXNCLEtBQUssZUFBZSxXQUFXLDBDQUEwQyxrQkFBa0IsbUJBQW1CLGlCQUFpQixtQkFBbUIsd0JBQXdCLG9CQUFvQiw0QkFBNEIsZ0NBQWdDLGlDQUFpQyxrQ0FBa0MsNkJBQTZCLCtCQUErQiw0QkFBNEIsbUNBQW1DLHlCQUF5QiwyQkFBMkIsbUNBQW1DLEtBQUssa0JBQWtCLHdCQUF3QiwwQkFBMEIsMEJBQTBCLHdCQUF3QiwyQkFBMkIsbUNBQW1DLEtBQUsscUJBQXFCLDhDQUE4QywwQkFBMEIsOEJBQThCLGdDQUFnQyx3QkFBd0IsNEJBQTRCLG1DQUFtQyxvQ0FBb0MscUJBQXFCLDBCQUEwQiwyQkFBMkIsMEJBQTBCLGdDQUFnQyx5QkFBeUIsb0NBQW9DLHNCQUFzQixLQUFLLDJCQUEyQixxQkFBcUIsZ0NBQWdDLG9DQUFvQyxLQUFLLG9CQUFvQixvQkFBb0IsMkNBQTJDLG9CQUFvQixzQkFBc0Isb0JBQW9CLHNCQUFzQixLQUFLLGdEQUFnRCxTQUFTLHFCQUFxQiw4QkFBOEIsT0FBTyxVQUFVLDZCQUE2Qiw2QkFBNkIsT0FBTyxVQUFVLDRCQUE0Qiw2QkFBNkIsT0FBTyxLQUFLLHlCQUF5QixPQUFPLGlCQUFpQixLQUFLLFFBQVEsZ0JBQWdCLEtBQUssUUFBUSxpQkFBaUIsS0FBSyxTQUFTLHlGQUF5RixtRkFBbUYsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxTQUFTLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sVUFBVSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxRQUFRLFVBQVUsS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssWUFBWSxhQUFhLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLGFBQWEsT0FBTyxXQUFXLE1BQU0sWUFBWSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLFdBQVcsS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxXQUFXLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLE1BQU0sWUFBWSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLFlBQVksS0FBSyxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxNQUFNLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLE1BQU0sT0FBTyxhQUFhLGFBQWEsd0RBQXdELGlDQUFpQyx3QkFBd0IsOEJBQThCLDZCQUE2QiwrQkFBK0IsZ0NBQWdDLGlDQUFpQyxPQUFPLG1CQUFtQiwrQkFBK0Isa0JBQWtCLG1CQUFtQixPQUFPLGtCQUFrQixnREFBZ0QsMEJBQTBCLHlCQUF5QiwrQkFBK0Isb0JBQW9CLE9BQU8sZUFBZSw4QkFBOEIsT0FBTyxnQkFBZ0IseUJBQXlCLE9BQU8saUJBQWlCLG9CQUFvQixPQUFPLDJDQUEyQywwQkFBMEIscUJBQXFCLHlCQUF5Qix3QkFBd0IseUJBQXlCLDRCQUE0QixTQUFTLGFBQWEsMEJBQTBCLEtBQUssZ0JBQWdCLHdCQUF3Qix1QkFBdUIsMEJBQTBCLEtBQUssOENBQThDLDZDQUE2Qyx5QkFBeUIsYUFBYSxjQUFjLGtCQUFrQixtQkFBbUIsS0FBSyxtQkFBbUIsZ0RBQWdELHlCQUF5QixtQkFBbUIsa0JBQWtCLFNBQVMsbUJBQW1CLHNCQUFzQixtQkFBbUIsdUJBQXVCLFNBQVMsZ0JBQWdCLGdCQUFnQixpQkFBaUIseUJBQXlCLGdGQUFnRixrQkFBa0Isb0JBQW9CLDBCQUEwQixXQUFXLHFDQUFxQywwQkFBMEIscUNBQXFDLDBCQUEwQixzQkFBc0IsMkJBQTJCLGlCQUFpQixrQkFBa0IsbUJBQW1CLDBCQUEwQixvQkFBb0IsS0FBSyxtQkFBbUIsb0JBQW9CLEtBQUsscUJBQXFCLG9CQUFvQix1QkFBdUIsd0JBQXdCLEtBQUssMkJBQTJCLG9CQUFvQixLQUFLLGdDQUFnQyx3QkFBd0Isd0JBQXdCLEtBQUssYUFBYSxxQkFBcUIsS0FBSyxtQkFBbUIscUJBQXFCLEtBQUssYUFBYSx1QkFBdUIsbUJBQW1CLHNCQUFzQixLQUFLLGVBQWUsdUJBQXVCLGlCQUFpQixLQUFLLG9DQUFvQywwQkFBMEIsOEJBQThCLHlCQUF5QixvQkFBb0IsS0FBSywwQkFBMEIsb0JBQW9CLDJDQUEyQyxLQUFLLHNCQUFzQixzQkFBc0IsS0FBSyxzQkFBc0Isb0JBQW9CLDJDQUEyQyxzQkFBc0Isd0JBQXdCLHNCQUFzQixLQUFLLG9CQUFvQixzQkFBc0IsS0FBSyxlQUFlLFdBQVcsMENBQTBDLGtCQUFrQixtQkFBbUIsaUJBQWlCLG1CQUFtQixvQkFBb0IsNEJBQTRCLDZCQUE2QiwwQkFBMEIsOEJBQThCLHlCQUF5QiwyQkFBMkIsbUNBQW1DLEtBQUssa0JBQWtCLHdCQUF3QiwwQkFBMEIsMEJBQTBCLHdCQUF3QiwyQkFBMkIsbUNBQW1DLEtBQUsscUJBQXFCLDhDQUE4QywwQkFBMEIsMkJBQTJCLHdCQUF3Qiw4QkFBOEIsb0NBQW9DLHFCQUFxQiwwQkFBMEIsMkJBQTJCLDBCQUEwQixnQ0FBZ0MseUJBQXlCLG9DQUFvQyxzQkFBc0IsS0FBSywyQkFBMkIscUJBQXFCLGdDQUFnQyxvQ0FBb0MsS0FBSyxvQkFBb0Isb0JBQW9CLDJDQUEyQyxvQkFBb0Isc0JBQXNCLG9CQUFvQixzQkFBc0IsS0FBSyxnREFBZ0QsU0FBUyxxQkFBcUIsOEJBQThCLE9BQU8sVUFBVSw2QkFBNkIsNkJBQTZCLE9BQU8sVUFBVSw0QkFBNEIsNkJBQTZCLE9BQU8sS0FBSyx5QkFBeUIsT0FBTyxpQkFBaUIsS0FBSyxRQUFRLGdCQUFnQixLQUFLLFFBQVEsaUJBQWlCLEtBQUssU0FBUyxxRkFBcUY7QUFDNzJYO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC44ZGYxNGU4MGRiMmFiMTgwOWE1Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IHJlcXVpcmUoXCIuLi9wdWJsaWMvYmFja2dyb3VuZC5qcGdcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcclxcbiAgICAtLXByaW1hcnktY29sb3I6ICMwNDMzMzM7XFxyXFxuICAgIC0tY29sb3I6I0I5RTNDNjtcXHJcXG4gICAgLS1kYXJrLWNvbG9yOiAjMDUzNDRGO1xcclxcbiAgICAtLWRpZi1jb2xvcjogI2VlNmM0ZDtcXHJcXG4gICAgLS1saWdodC1jb2xvcjogI0Y3RkZGNztcXHJcXG4gICAgLS1kYW5nZXItY29sb3I6ICNkYzM1NDU7XFxyXFxuICAgIC0tc3VjY2Vzcy1jb2xvcjogIzI4YTc0NTtcXHJcXG4gIH1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4qIHtcXHJcXG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgYm9keSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiQW5kYWxlIE1vbm9cXFwiLCBtb25vc3BhY2U7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcclxcbiAgICBsaW5lLWhlaWdodDogMS42O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgICBjb2xvcjogIzMzMztcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgYSB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgdWwge1xcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICBpbWcge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG5cXHJcXG4vKiBVdGlsaXRpZXMgKi9cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gICAgbWF4LXdpZHRoOiAxMTAwcHg7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgcGFkZGluZzogMCAycmVtO1xcclxcbiAgICBtYXJnaW4tdG9wOiA2cmVtO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xcclxcbiAgICB9XFxyXFxuLndyYXBwZXJ7XFxyXFxuICBwYWRkaW5nOiAycmVtIDEycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubGFyZ2Uge1xcclxcbiAgZm9udC1zaXplOiAyLjdyZW07XFxyXFxuICBsaW5lLWhlaWdodDogMS4yO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuICAvKiBPdmVybGF5ICovXFxyXFxuLmRhcmstb3ZlcmxheSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDkzKTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuLmJsdWUtb3ZlcmxheSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE4LCA2NCwgOTksIDAuNTQyKTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4uaG9tZXBhZ2Uge1xcclxcbiAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG5cXHJcXG59XFxyXFxuLmhvbWUtaW1hZ2V7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBuby1yZXBlYXQgY2VudGVyIGJvdHRvbS9jb3ZlcjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIHBhZGRpbmc6IDByZW0gMTJyZW07XFxyXFxuXFxyXFxuICB9XFxyXFxuXFxyXFxuLyogTmF2QmFyICovXFxyXFxuXFxyXFxuLm5hdmJhciB7XFxyXFxuICBcXHJcXG4gIGRpc3BsYXk6IC1tb3otYm94O1xcclxcbiAgXFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgLW1vei1ib3gtcGFjazoganVzdGlmeTtcXHJcXG4gICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgLW1vei1ib3gtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHBhZGRpbmc6IDAuMXJlbSAycmVtO1xcclxcbiAgei1pbmRleDogMTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgb3BhY2l0eTogMC45O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG4gIG9wYWNpdHk6IDAuOTU7XFxyXFxufVxcclxcblxcclxcbi5uYXYtaXRlbSB7XFxyXFxuICBkaXNwbGF5OiAtbW96LWJveDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi5uYXYtbGluayBhIHtcXHJcXG4gIGNvbG9yOiNmZmZmZmY7XFxyXFxuICBwYWRkaW5nOiAwLjU1cmVtO1xcclxcbiAgbWFyZ2luOiAwIDAuMjVyZW07XFxyXFxufVxcclxcblxcclxcbi5uYXYtbGluayBhOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiNmNDhjMDY7XFxyXFxufVxcclxcblxcclxcbi8qIExvZ28gKi9cXHJcXG5cXHJcXG4ubG9nb3tcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgbGluZS1oZWlnaHQ6IDgwcHg7XFxyXFxufVxcclxcbi5sb2dvIGEge1xcclxcbiAgY29sb3I6ICNkNmNiY2I7XFxyXFxufVxcclxcbi5sb2dvIGE6aG92ZXIge1xcclxcbiAgY29sb3I6ICNmNDhjMDY7XFxyXFxufVxcclxcbi5sb2dvaW1ne1xcclxcbiAgbWFyZ2luLXRvcDogMTZweDtcXHJcXG4gIHdpZHRoOiAxMHJlbTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnJpY29ue1xcclxcbiAgcGFkZGluZy10b3A6IDFweDtcXHJcXG4gIHdpZHRoOiByZW07XFxyXFxufVxcclxcblxcclxcbi8qIEZvb3RlciAqL1xcclxcblxcclxcbi5mb290ZXJ7XFxyXFxuICBwYWRkaW5nOiAycmVtIDEwcmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBjb2xvcjojZmZmZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyLWNvbnRhaW5lcntcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLDFmcik7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXItZW1haWx7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5mb290ZXItaWNvbnN7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwxZnIpO1xcclxcbiAgZ3JpZC1nYXA6MC4xcmVtO1xcclxcbiAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbi5mb290ZXItaWNvbnMgcHtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG59XFxyXFxuLmNvcHlyaWdodHtcXHJcXG4gIFxcclxcbn1cXHJcXG5cXHJcXG4vKiBIb21lICovXFxyXFxuXFxyXFxuXFxyXFxuLmhvbWUtaW5uZXJ7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICBkaXNwbGF5OiAtbW96LWJveDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMC4yZW07XFxyXFxuICAtbW96LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xcclxcbiAgLW1vei1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XFxyXFxuICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAtbW96LWJveC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgLW1vei1ib3gtcGFjazogY2VudGVyO1xcclxcbiAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGFuaW1hdGlvbjogdGV4dCAxcyAxO1xcclxcbiAgLXdlYmtpdC1hbmltYXRpb246IHRleHQgMXMgMTtcXHJcXG59XFxyXFxuLnBhcmFncmFwaC0yIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAzcHg7XFxyXFxuICB3b3JkLXNwYWNpbmc6IDJweDtcXHJcXG4gIGFuaW1hdGlvbjogcGFyYSAzcyAxO1xcclxcbiAgLXdlYmtpdC1hbmltYXRpb246IHBhcmEgM3MgMTtcXHJcXG59XFxyXFxuXFxyXFxuLndvcmstYnV0dG9ue1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJBbmRhbGUgTW9ub1xcXCIsIG1vbm9zcGFjZTtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiA1cHg7IFxcclxcbiAgLW1vei1ib3gtYWxpZ246IGNlbnRlcjsgXFxyXFxuICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDEuMXJlbTtcXHJcXG4gIC1tb3otYm94LXBhY2s6IGNlbnRlcjtcXHJcXG4gICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIGNvbG9yOiAjZjQ4YzA2O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDAuNHJlbSAycmVtO1xcclxcbiAgbWFyZ2luLXRvcDogMS4yM3JlbTtcXHJcXG4gIGJvcmRlcjogM3B4IHNvbGlkICNmN2Y3Zjc7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICBib3gtc2hhZG93OiAwIDAgMXB4ICM3NTdmODViMztcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLndvcmstYnV0dG9uOmhvdmVye1xcclxcbiAgY29sb3I6ICNmN2Y3Zjc7XFxyXFxuICBib3JkZXI6IDNweCBzb2xpZCAjZjQ4YzA2O1xcclxcbiAgYm94LXNoYWRvdzogMCAwIDFweCAjNzU3Zjg1YjM7XFxyXFxufVxcclxcblxcclxcbi5mb250LWljb25ze1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsMWZyKTtcXHJcXG4gIGdyaWQtZ2FwOjJyZW07XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICBwYWRkaW5nOiAycmVtO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4vKiBBbmltYXRpb24gKi9cXHJcXG5cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHRleHQge1xcclxcbiAgMCV7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogLTMwcHg7O1xcclxcbiAgfVxcclxcbiAgMzAle1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMjVweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogLTMwcHg7XFxyXFxuICB9XFxyXFxuICA4NSV7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiA4cHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IC0zMHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHBhcmEge1xcclxcbjAle1xcclxcbiAgb3BhY2l0eTogMDtcXHJcXG59XFxyXFxuNDUle1xcclxcbiAgb3BhY2l0eTowO1xcclxcbn1cXHJcXG44NSV7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbn1cXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogUHJvamVjdHMgKi9cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKiBBYm91dCAqL1xcclxcblxcclxcblxcclxcblxcclxcbi8qIENvbnRhY3QgKi9cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJFOi9Qb3J0Zm9saW8vc3R5bGUvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksd0JBQXdCO0lBQ3hCLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsb0JBQW9CO0lBQ3BCLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsd0JBQXdCO0VBQzFCOzs7O0FBSUY7SUFDSSwyQkFBc0I7U0FBdEIsc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxVQUFVO0VBQ1o7O0VBRUE7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LHlCQUF5QjtFQUN6Qiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isb0NBQW9DO0VBQ3BDLGFBQWE7RUFDYixlQUFlO0VBQ2YsYUFBYTtFQUNiLGVBQWU7QUFDakI7QUFDQSxjQUFjOzs7QUFHZDtFQUNFO0lBQ0UsWUFBWTtJQUNaLG9CQUFvQjtFQUN0QjtFQUNBO0lBQ0Usb0JBQW9CO0lBQ3BCLG9CQUFvQjtFQUN0QjtFQUNBO0lBQ0UsbUJBQW1CO0lBQ25CLG9CQUFvQjtFQUN0QjtBQUNGOztBQUVBO0FBQ0E7RUFDRSxVQUFVO0FBQ1o7QUFDQTtFQUNFLFNBQVM7QUFDWDtBQUNBO0VBQ0UsVUFBVTtBQUNaOztBQUVBOzs7QUFHQSxhQUFhOzs7O0FBSWIsVUFBVTs7OztBQUlWLFlBQVlcIixcImZpbGVcIjpcImluZGV4LmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxyXFxuICAgIC0tcHJpbWFyeS1jb2xvcjogIzA0MzMzMztcXHJcXG4gICAgLS1jb2xvcjojQjlFM0M2O1xcclxcbiAgICAtLWRhcmstY29sb3I6ICMwNTM0NEY7XFxyXFxuICAgIC0tZGlmLWNvbG9yOiAjZWU2YzRkO1xcclxcbiAgICAtLWxpZ2h0LWNvbG9yOiAjRjdGRkY3O1xcclxcbiAgICAtLWRhbmdlci1jb2xvcjogI2RjMzU0NTtcXHJcXG4gICAgLS1zdWNjZXNzLWNvbG9yOiAjMjhhNzQ1O1xcclxcbiAgfVxcclxcblxcclxcblxcclxcblxcclxcbioge1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIGJvZHkge1xcclxcbiAgICBmb250LWZhbWlseTogXFxcIkFuZGFsZSBNb25vXFxcIiwgbW9ub3NwYWNlO1xcclxcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gICAgY29sb3I6ICMzMzM7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIGEge1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIHVsIHtcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgaW1nIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuXFxyXFxuLyogVXRpbGl0aWVzICovXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICAgIG1heC13aWR0aDogMTEwMHB4O1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIHBhZGRpbmc6IDAgMnJlbTtcXHJcXG4gICAgbWFyZ2luLXRvcDogNnJlbTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcXHJcXG4gICAgfVxcclxcbi53cmFwcGVye1xcclxcbiAgcGFkZGluZzogMnJlbSAxMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmxhcmdlIHtcXHJcXG4gIGZvbnQtc2l6ZTogMi43cmVtO1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuMjtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxufVxcclxcblxcclxcblxcclxcbiAgLyogT3ZlcmxheSAqL1xcclxcbi5kYXJrLW92ZXJsYXkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQ5Myk7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcbi5ibHVlLW92ZXJsYXkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxOCwgNjQsIDk5LCAwLjU0Mik7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLmhvbWVwYWdlIHtcXHJcXG4gIG1heC13aWR0aDogMTAwJTtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuXFxyXFxufVxcclxcbi5ob21lLWltYWdle1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGJhY2tncm91bmQ6IHVybCgnLi4vcHVibGljL2JhY2tncm91bmQuanBnJykgbm8tcmVwZWF0IGNlbnRlciBib3R0b20vY292ZXI7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBwYWRkaW5nOiAwcmVtIDEycmVtO1xcclxcblxcclxcbiAgfVxcclxcblxcclxcbi8qIE5hdkJhciAqL1xcclxcblxcclxcbi5uYXZiYXIge1xcclxcbiAgXFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHBhZGRpbmc6IDAuMXJlbSAycmVtO1xcclxcbiAgei1pbmRleDogMTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgb3BhY2l0eTogMC45O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG4gIG9wYWNpdHk6IDAuOTU7XFxyXFxufVxcclxcblxcclxcbi5uYXYtaXRlbSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWxpbmsgYSB7XFxyXFxuICBjb2xvcjojZmZmZmZmO1xcclxcbiAgcGFkZGluZzogMC41NXJlbTtcXHJcXG4gIG1hcmdpbjogMCAwLjI1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWxpbmsgYTpob3ZlciB7XFxyXFxuICBjb2xvcjojZjQ4YzA2O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBMb2dvICovXFxyXFxuXFxyXFxuLmxvZ297XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiA4MHB4O1xcclxcbn1cXHJcXG4ubG9nbyBhIHtcXHJcXG4gIGNvbG9yOiAjZDZjYmNiO1xcclxcbn1cXHJcXG4ubG9nbyBhOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiAjZjQ4YzA2O1xcclxcbn1cXHJcXG4ubG9nb2ltZ3tcXHJcXG4gIG1hcmdpbi10b3A6IDE2cHg7XFxyXFxuICB3aWR0aDogMTByZW07XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5yaWNvbntcXHJcXG4gIHBhZGRpbmctdG9wOiAxcHg7XFxyXFxuICB3aWR0aDogcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBGb290ZXIgKi9cXHJcXG5cXHJcXG4uZm9vdGVye1xcclxcbiAgcGFkZGluZzogMnJlbSAxMHJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgY29sb3I6I2ZmZmZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3Rlci1jb250YWluZXJ7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwxZnIpO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyLWVtYWlse1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyLWljb25ze1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsMWZyKTtcXHJcXG4gIGdyaWQtZ2FwOjAuMXJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4uZm9vdGVyLWljb25zIHB7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxufVxcclxcbi5jb3B5cmlnaHR7XFxyXFxuICBcXHJcXG59XFxyXFxuXFxyXFxuLyogSG9tZSAqL1xcclxcblxcclxcblxcclxcbi5ob21lLWlubmVye1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAwLjJlbTtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBhbmltYXRpb246IHRleHQgMXMgMTtcXHJcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiB0ZXh0IDFzIDE7XFxyXFxufVxcclxcbi5wYXJhZ3JhcGgtMiB7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxuICBsZXR0ZXItc3BhY2luZzogM3B4O1xcclxcbiAgd29yZC1zcGFjaW5nOiAycHg7XFxyXFxuICBhbmltYXRpb246IHBhcmEgM3MgMTtcXHJcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBwYXJhIDNzIDE7XFxyXFxufVxcclxcblxcclxcbi53b3JrLWJ1dHRvbntcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQW5kYWxlIE1vbm9cXFwiLCBtb25vc3BhY2U7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogNXB4OyBcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDEuMXJlbTtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBjb2xvcjogI2Y0OGMwNjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAwLjRyZW0gMnJlbTtcXHJcXG4gIG1hcmdpbi10b3A6IDEuMjNyZW07XFxyXFxuICBib3JkZXI6IDNweCBzb2xpZCAjZjdmN2Y3O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgYm94LXNoYWRvdzogMCAwIDFweCAjNzU3Zjg1YjM7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi53b3JrLWJ1dHRvbjpob3ZlcntcXHJcXG4gIGNvbG9yOiAjZjdmN2Y3O1xcclxcbiAgYm9yZGVyOiAzcHggc29saWQgI2Y0OGMwNjtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMCAxcHggIzc1N2Y4NWIzO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9udC1pY29uc3tcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLDFmcik7XFxyXFxuICBncmlkLWdhcDoycmVtO1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgcGFkZGluZzogMnJlbTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuLyogQW5pbWF0aW9uICovXFxyXFxuXFxyXFxuXFxyXFxuQGtleWZyYW1lcyB0ZXh0IHtcXHJcXG4gIDAle1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IC0zMHB4OztcXHJcXG4gIH1cXHJcXG4gIDMwJXtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDI1cHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IC0zMHB4O1xcclxcbiAgfVxcclxcbiAgODUle1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogOHB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAtMzBweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBwYXJhIHtcXHJcXG4wJXtcXHJcXG4gIG9wYWNpdHk6IDA7XFxyXFxufVxcclxcbjQ1JXtcXHJcXG4gIG9wYWNpdHk6MDtcXHJcXG59XFxyXFxuODUle1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG59XFxyXFxuXFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIFByb2plY3RzICovXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLyogQWJvdXQgKi9cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKiBDb250YWN0ICovXCJdfV0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==