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
exports.push([module.i, ":root {\r\n    --primary-color: #043333;\r\n    --color:#B9E3C6;\r\n    --dark-color: #05344F;\r\n    --dif-color: #ee6c4d;\r\n    --light-color: #F7FFF7;\r\n    --danger-color: #dc3545;\r\n    --success-color: #28a745;\r\n  }\r\n\r\n\r\n\r\n* {\r\n    -moz-box-sizing: border-box;\r\n         box-sizing: border-box;\r\n    margin: 0;\r\n    padding: 0;\r\n  }\r\n  \r\n  body {\r\n    font-family: \"Andale Mono\", monospace;\r\n    font-size: 1.1rem;\r\n    line-height: 1.6;\r\n    background-color: #fff;\r\n    color: #333;\r\n  }\r\n  \r\n  a {\r\n    text-decoration: none;\r\n  }\r\n  \r\n  ul {\r\n    list-style: none;\r\n  }\r\n  \r\n  img {\r\n    width: 100%;\r\n  }\r\n\r\n\r\n/* Utilities */\r\n.container {\r\n    max-width: 1100px;\r\n    margin: auto;\r\n    overflow: hidden;\r\n    padding: 0 2rem;\r\n    margin-top: 6rem;\r\n    margin-bottom: 3rem;\r\n    }\r\n.wrapper{\r\n  padding: 2rem 12rem;\r\n}\r\n\r\n.large {\r\n  font-size: 2.7rem;\r\n  line-height: 1.2;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n\r\n  /* Overlay */\r\n.dark-overlay {\r\n  background-color: rgba(0, 0, 0, 0.493);\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n.blue-overlay {\r\n  background-color: rgba(18, 64, 99, 0.542);\r\n  position: absolute;\r\n  height: 100%;\r\n  width: 100%;\r\n\r\n}\r\n\r\n.homepage {\r\n  max-width: 100%;\r\n  margin: auto;\r\n  overflow: hidden;\r\n\r\n}\r\n.home-image{\r\n  margin: 0;\r\n  padding: 0;\r\n  position: relative;\r\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat center bottom/cover;\r\n  width: 100%;\r\n  height: 100vh;\r\n  padding: 0rem 12rem;\r\n\r\n  }\r\n\r\n/* NavBar */\r\n\r\n.navbar {\r\n  \r\n  display: -moz-box;\r\n  \r\n  display: flex;\r\n  -moz-box-pack: justify;\r\n       justify-content: space-between;\r\n  -moz-box-align: center;\r\n       align-items: center;\r\n  position: fixed;\r\n  padding: 0.1rem 2rem;\r\n  z-index: 1;\r\n  width: 100%;\r\n  opacity: 0.9;\r\n  margin-bottom: 1rem;\r\n  opacity: 0.95;\r\n}\r\n\r\n.nav-item {\r\n  display: -moz-box;\r\n  display: flex;\r\n}\r\n\r\n.nav-link a {\r\n  color:#ffffff;\r\n  padding: 0.55rem;\r\n  margin: 0 0.25rem;\r\n}\r\n\r\n.nav-link a:hover {\r\n  color:#f48c06;\r\n}\r\n\r\n/* Logo */\r\n\r\n.logo{\r\n  font-size: 1.2rem;\r\n  line-height: 80px;\r\n}\r\n.logo a {\r\n  color: #d6cbcb;\r\n}\r\n.logo a:hover {\r\n  color: #f48c06;\r\n}\r\n.logoimg{\r\n  margin-top: 16px;\r\n  width: 10rem;\r\n  cursor: pointer;\r\n}\r\n\r\n.ricon{\r\n  padding-top: 1px;\r\n  width: rem;\r\n}\r\n\r\n/* Footer */\r\n\r\n.footer{\r\n  padding: 2rem 10rem;\r\n  background-color: black;\r\n  text-align: center;\r\n  color:#ffffff;\r\n}\r\n\r\n.footer-container{\r\n  display: grid;\r\n  grid-template-columns: repeat(2,1fr);\r\n}\r\n\r\n.footer-email{\r\n  font-size: 1rem;\r\n}\r\n\r\n.footer-icons{\r\n  display: grid;\r\n  grid-template-rows: repeat(2,1fr);\r\n  grid-gap:0.1rem;\r\n  font-size: 1.3rem;\r\n  cursor: pointer;\r\n}\r\n.footer-link a{\r\n  white-space: nowrap;\r\n}\r\n.footer-icons p{\r\n  font-size: 1rem;\r\n}\r\n.copyright{\r\n  display: inline;\r\n  justify-items: center;\r\n  align-content: center;\r\n  font-size: 0.6rem;\r\n}\r\n\r\n/* Home */\r\n\r\n\r\n.home-inner{\r\n  color: #fff;\r\n  height: 100%;\r\n  width: 50%;\r\n  margin: auto;\r\n  display: -moz-box;\r\n  display: flex;\r\n  letter-spacing: 0.2em;\r\n  -moz-box-orient: vertical;\r\n  -moz-box-direction: normal;\r\n       flex-direction: column;\r\n  -moz-box-align: center;\r\n       align-items: center;\r\n  -moz-box-pack: center;\r\n       justify-content: center;\r\n  text-align: center;\r\n  animation: text 1s 1;\r\n  -webkit-animation: text 1s 1;\r\n}\r\n.paragraph-2 {\r\n  font-size: 1.2rem;\r\n  margin-bottom: 1rem;\r\n  letter-spacing: 3px;\r\n  word-spacing: 2px;\r\n  animation: para 3s 1;\r\n  -webkit-animation: para 3s 1;\r\n}\r\n\r\n.work-button{\r\n  font-family: \"Andale Mono\", monospace;\r\n  letter-spacing: 5px; \r\n  -moz-box-align: center; \r\n       align-items: center;\r\n  font-size: 1.1rem;\r\n  -moz-box-pack: center;\r\n       justify-content: center;\r\n  background-color: transparent;\r\n  color: #f48c06;\r\n  align-items: center;\r\n  padding: 0.4rem 2rem;\r\n  margin-top: 1.23rem;\r\n  border: 3px solid #f7f7f7;\r\n  border-radius: 4px;\r\n  box-shadow: 0 0 1px #757f85b3;\r\n  cursor: pointer;\r\n}\r\n\r\n.work-button:hover{\r\n  color: #f7f7f7;\r\n  border: 3px solid #f48c06;\r\n  box-shadow: 0 0 1px #757f85b3;\r\n}\r\n\r\n.font-icons{\r\n  display: grid;\r\n  grid-template-columns: repeat(2,1fr);\r\n  grid-gap:2rem;\r\n  font-size: 2rem;\r\n  padding: 2rem;\r\n  cursor: pointer;\r\n}\r\n/* Animation */\r\n\r\n\r\n@keyframes text {\r\n  0%{\r\n    color: black;\r\n    margin-bottom: -30px;;\r\n  }\r\n  30%{\r\n    letter-spacing: 25px;\r\n    margin-bottom: -30px;\r\n  }\r\n  85%{\r\n    letter-spacing: 8px;\r\n    margin-bottom: -30px;\r\n  }\r\n}\r\n\r\n@keyframes para {\r\n0%{\r\n  opacity: 0;\r\n}\r\n45%{\r\n  opacity:0;\r\n}\r\n85%{\r\n  opacity: 1;\r\n}\r\n\r\n}\r\n\r\n\r\n/* Projects */\r\n\r\n\r\n\r\n/* About */\r\n\r\n\r\n\r\n/* Contact */", "",{"version":3,"sources":["E:/Portfolio/style/index.css"],"names":[],"mappings":"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","file":"index.css","sourcesContent":[":root {\r\n    --primary-color: #043333;\r\n    --color:#B9E3C6;\r\n    --dark-color: #05344F;\r\n    --dif-color: #ee6c4d;\r\n    --light-color: #F7FFF7;\r\n    --danger-color: #dc3545;\r\n    --success-color: #28a745;\r\n  }\r\n\r\n\r\n\r\n* {\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    padding: 0;\r\n  }\r\n  \r\n  body {\r\n    font-family: \"Andale Mono\", monospace;\r\n    font-size: 1.1rem;\r\n    line-height: 1.6;\r\n    background-color: #fff;\r\n    color: #333;\r\n  }\r\n  \r\n  a {\r\n    text-decoration: none;\r\n  }\r\n  \r\n  ul {\r\n    list-style: none;\r\n  }\r\n  \r\n  img {\r\n    width: 100%;\r\n  }\r\n\r\n\r\n/* Utilities */\r\n.container {\r\n    max-width: 1100px;\r\n    margin: auto;\r\n    overflow: hidden;\r\n    padding: 0 2rem;\r\n    margin-top: 6rem;\r\n    margin-bottom: 3rem;\r\n    }\r\n.wrapper{\r\n  padding: 2rem 12rem;\r\n}\r\n\r\n.large {\r\n  font-size: 2.7rem;\r\n  line-height: 1.2;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n\r\n  /* Overlay */\r\n.dark-overlay {\r\n  background-color: rgba(0, 0, 0, 0.493);\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n.blue-overlay {\r\n  background-color: rgba(18, 64, 99, 0.542);\r\n  position: absolute;\r\n  height: 100%;\r\n  width: 100%;\r\n\r\n}\r\n\r\n.homepage {\r\n  max-width: 100%;\r\n  margin: auto;\r\n  overflow: hidden;\r\n\r\n}\r\n.home-image{\r\n  margin: 0;\r\n  padding: 0;\r\n  position: relative;\r\n  background: url('../public/background.jpg') no-repeat center bottom/cover;\r\n  width: 100%;\r\n  height: 100vh;\r\n  padding: 0rem 12rem;\r\n\r\n  }\r\n\r\n/* NavBar */\r\n\r\n.navbar {\r\n  \r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  position: fixed;\r\n  padding: 0.1rem 2rem;\r\n  z-index: 1;\r\n  width: 100%;\r\n  opacity: 0.9;\r\n  margin-bottom: 1rem;\r\n  opacity: 0.95;\r\n}\r\n\r\n.nav-item {\r\n  display: flex;\r\n}\r\n\r\n.nav-link a {\r\n  color:#ffffff;\r\n  padding: 0.55rem;\r\n  margin: 0 0.25rem;\r\n}\r\n\r\n.nav-link a:hover {\r\n  color:#f48c06;\r\n}\r\n\r\n/* Logo */\r\n\r\n.logo{\r\n  font-size: 1.2rem;\r\n  line-height: 80px;\r\n}\r\n.logo a {\r\n  color: #d6cbcb;\r\n}\r\n.logo a:hover {\r\n  color: #f48c06;\r\n}\r\n.logoimg{\r\n  margin-top: 16px;\r\n  width: 10rem;\r\n  cursor: pointer;\r\n}\r\n\r\n.ricon{\r\n  padding-top: 1px;\r\n  width: rem;\r\n}\r\n\r\n/* Footer */\r\n\r\n.footer{\r\n  padding: 2rem 10rem;\r\n  background-color: black;\r\n  text-align: center;\r\n  color:#ffffff;\r\n}\r\n\r\n.footer-container{\r\n  display: grid;\r\n  grid-template-columns: repeat(2,1fr);\r\n}\r\n\r\n.footer-email{\r\n  font-size: 1rem;\r\n}\r\n\r\n.footer-icons{\r\n  display: grid;\r\n  grid-template-rows: repeat(2,1fr);\r\n  grid-gap:0.1rem;\r\n  font-size: 1.3rem;\r\n  cursor: pointer;\r\n}\r\n.footer-link a{\r\n  white-space: nowrap;\r\n}\r\n.footer-icons p{\r\n  font-size: 1rem;\r\n}\r\n.copyright{\r\n  display: inline;\r\n  justify-items: center;\r\n  align-content: center;\r\n  font-size: 0.6rem;\r\n}\r\n\r\n/* Home */\r\n\r\n\r\n.home-inner{\r\n  color: #fff;\r\n  height: 100%;\r\n  width: 50%;\r\n  margin: auto;\r\n  display: flex;\r\n  letter-spacing: 0.2em;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  text-align: center;\r\n  animation: text 1s 1;\r\n  -webkit-animation: text 1s 1;\r\n}\r\n.paragraph-2 {\r\n  font-size: 1.2rem;\r\n  margin-bottom: 1rem;\r\n  letter-spacing: 3px;\r\n  word-spacing: 2px;\r\n  animation: para 3s 1;\r\n  -webkit-animation: para 3s 1;\r\n}\r\n\r\n.work-button{\r\n  font-family: \"Andale Mono\", monospace;\r\n  letter-spacing: 5px; \r\n  align-items: center;\r\n  font-size: 1.1rem;\r\n  justify-content: center;\r\n  background-color: transparent;\r\n  color: #f48c06;\r\n  align-items: center;\r\n  padding: 0.4rem 2rem;\r\n  margin-top: 1.23rem;\r\n  border: 3px solid #f7f7f7;\r\n  border-radius: 4px;\r\n  box-shadow: 0 0 1px #757f85b3;\r\n  cursor: pointer;\r\n}\r\n\r\n.work-button:hover{\r\n  color: #f7f7f7;\r\n  border: 3px solid #f48c06;\r\n  box-shadow: 0 0 1px #757f85b3;\r\n}\r\n\r\n.font-icons{\r\n  display: grid;\r\n  grid-template-columns: repeat(2,1fr);\r\n  grid-gap:2rem;\r\n  font-size: 2rem;\r\n  padding: 2rem;\r\n  cursor: pointer;\r\n}\r\n/* Animation */\r\n\r\n\r\n@keyframes text {\r\n  0%{\r\n    color: black;\r\n    margin-bottom: -30px;;\r\n  }\r\n  30%{\r\n    letter-spacing: 25px;\r\n    margin-bottom: -30px;\r\n  }\r\n  85%{\r\n    letter-spacing: 8px;\r\n    margin-bottom: -30px;\r\n  }\r\n}\r\n\r\n@keyframes para {\r\n0%{\r\n  opacity: 0;\r\n}\r\n45%{\r\n  opacity:0;\r\n}\r\n85%{\r\n  opacity: 1;\r\n}\r\n\r\n}\r\n\r\n\r\n/* Projects */\r\n\r\n\r\n\r\n/* About */\r\n\r\n\r\n\r\n/* Contact */"]}]);
// Exports
module.exports = exports;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGUvaW5kZXguY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMscUdBQWdEO0FBQzFGLHNDQUFzQyxtQkFBTyxDQUFDLDJHQUFtRDtBQUNqRyxvQ0FBb0MsbUJBQU8sQ0FBQyx5REFBMEI7QUFDdEU7QUFDQTtBQUNBO0FBQ0EsY0FBYyxRQUFTLFVBQVUsaUNBQWlDLHdCQUF3Qiw4QkFBOEIsNkJBQTZCLCtCQUErQixnQ0FBZ0MsaUNBQWlDLE9BQU8sbUJBQW1CLG9DQUFvQyxvQ0FBb0Msa0JBQWtCLG1CQUFtQixPQUFPLGtCQUFrQixnREFBZ0QsMEJBQTBCLHlCQUF5QiwrQkFBK0Isb0JBQW9CLE9BQU8sZUFBZSw4QkFBOEIsT0FBTyxnQkFBZ0IseUJBQXlCLE9BQU8saUJBQWlCLG9CQUFvQixPQUFPLDJDQUEyQywwQkFBMEIscUJBQXFCLHlCQUF5Qix3QkFBd0IseUJBQXlCLDRCQUE0QixTQUFTLGFBQWEsMEJBQTBCLEtBQUssZ0JBQWdCLHdCQUF3Qix1QkFBdUIsMEJBQTBCLEtBQUssOENBQThDLDZDQUE2Qyx5QkFBeUIsYUFBYSxjQUFjLGtCQUFrQixtQkFBbUIsS0FBSyxtQkFBbUIsZ0RBQWdELHlCQUF5QixtQkFBbUIsa0JBQWtCLFNBQVMsbUJBQW1CLHNCQUFzQixtQkFBbUIsdUJBQXVCLFNBQVMsZ0JBQWdCLGdCQUFnQixpQkFBaUIseUJBQXlCLGdHQUFnRyxrQkFBa0Isb0JBQW9CLDBCQUEwQixXQUFXLHFDQUFxQyw4QkFBOEIsMEJBQTBCLDZCQUE2QiwwQ0FBMEMsNkJBQTZCLCtCQUErQixzQkFBc0IsMkJBQTJCLGlCQUFpQixrQkFBa0IsbUJBQW1CLDBCQUEwQixvQkFBb0IsS0FBSyxtQkFBbUIsd0JBQXdCLG9CQUFvQixLQUFLLHFCQUFxQixvQkFBb0IsdUJBQXVCLHdCQUF3QixLQUFLLDJCQUEyQixvQkFBb0IsS0FBSyxnQ0FBZ0Msd0JBQXdCLHdCQUF3QixLQUFLLGFBQWEscUJBQXFCLEtBQUssbUJBQW1CLHFCQUFxQixLQUFLLGFBQWEsdUJBQXVCLG1CQUFtQixzQkFBc0IsS0FBSyxlQUFlLHVCQUF1QixpQkFBaUIsS0FBSyxvQ0FBb0MsMEJBQTBCLDhCQUE4Qix5QkFBeUIsb0JBQW9CLEtBQUssMEJBQTBCLG9CQUFvQiwyQ0FBMkMsS0FBSyxzQkFBc0Isc0JBQXNCLEtBQUssc0JBQXNCLG9CQUFvQix3Q0FBd0Msc0JBQXNCLHdCQUF3QixzQkFBc0IsS0FBSyxtQkFBbUIsMEJBQTBCLEtBQUssb0JBQW9CLHNCQUFzQixLQUFLLGVBQWUsc0JBQXNCLDRCQUE0Qiw0QkFBNEIsd0JBQXdCLEtBQUssMENBQTBDLGtCQUFrQixtQkFBbUIsaUJBQWlCLG1CQUFtQix3QkFBd0Isb0JBQW9CLDRCQUE0QixnQ0FBZ0MsaUNBQWlDLGtDQUFrQyw2QkFBNkIsK0JBQStCLDRCQUE0QixtQ0FBbUMseUJBQXlCLDJCQUEyQixtQ0FBbUMsS0FBSyxrQkFBa0Isd0JBQXdCLDBCQUEwQiwwQkFBMEIsd0JBQXdCLDJCQUEyQixtQ0FBbUMsS0FBSyxxQkFBcUIsOENBQThDLDBCQUEwQiw4QkFBOEIsZ0NBQWdDLHdCQUF3Qiw0QkFBNEIsbUNBQW1DLG9DQUFvQyxxQkFBcUIsMEJBQTBCLDJCQUEyQiwwQkFBMEIsZ0NBQWdDLHlCQUF5QixvQ0FBb0Msc0JBQXNCLEtBQUssMkJBQTJCLHFCQUFxQixnQ0FBZ0Msb0NBQW9DLEtBQUssb0JBQW9CLG9CQUFvQiwyQ0FBMkMsb0JBQW9CLHNCQUFzQixvQkFBb0Isc0JBQXNCLEtBQUssZ0RBQWdELFNBQVMscUJBQXFCLDhCQUE4QixPQUFPLFVBQVUsNkJBQTZCLDZCQUE2QixPQUFPLFVBQVUsNEJBQTRCLDZCQUE2QixPQUFPLEtBQUsseUJBQXlCLE9BQU8saUJBQWlCLEtBQUssUUFBUSxnQkFBZ0IsS0FBSyxRQUFRLGlCQUFpQixLQUFLLFNBQVMseUZBQXlGLG1GQUFtRixZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFNBQVMsS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxVQUFVLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFFBQVEsVUFBVSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsYUFBYSxPQUFPLFdBQVcsTUFBTSxZQUFZLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sV0FBVyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLFdBQVcsS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLFlBQVksS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxZQUFZLEtBQUssS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sTUFBTSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxNQUFNLE9BQU8sYUFBYSxhQUFhLHdEQUF3RCxpQ0FBaUMsd0JBQXdCLDhCQUE4Qiw2QkFBNkIsK0JBQStCLGdDQUFnQyxpQ0FBaUMsT0FBTyxtQkFBbUIsK0JBQStCLGtCQUFrQixtQkFBbUIsT0FBTyxrQkFBa0IsZ0RBQWdELDBCQUEwQix5QkFBeUIsK0JBQStCLG9CQUFvQixPQUFPLGVBQWUsOEJBQThCLE9BQU8sZ0JBQWdCLHlCQUF5QixPQUFPLGlCQUFpQixvQkFBb0IsT0FBTywyQ0FBMkMsMEJBQTBCLHFCQUFxQix5QkFBeUIsd0JBQXdCLHlCQUF5Qiw0QkFBNEIsU0FBUyxhQUFhLDBCQUEwQixLQUFLLGdCQUFnQix3QkFBd0IsdUJBQXVCLDBCQUEwQixLQUFLLDhDQUE4Qyw2Q0FBNkMseUJBQXlCLGFBQWEsY0FBYyxrQkFBa0IsbUJBQW1CLEtBQUssbUJBQW1CLGdEQUFnRCx5QkFBeUIsbUJBQW1CLGtCQUFrQixTQUFTLG1CQUFtQixzQkFBc0IsbUJBQW1CLHVCQUF1QixTQUFTLGdCQUFnQixnQkFBZ0IsaUJBQWlCLHlCQUF5QixnRkFBZ0Ysa0JBQWtCLG9CQUFvQiwwQkFBMEIsV0FBVyxxQ0FBcUMsMEJBQTBCLHFDQUFxQywwQkFBMEIsc0JBQXNCLDJCQUEyQixpQkFBaUIsa0JBQWtCLG1CQUFtQiwwQkFBMEIsb0JBQW9CLEtBQUssbUJBQW1CLG9CQUFvQixLQUFLLHFCQUFxQixvQkFBb0IsdUJBQXVCLHdCQUF3QixLQUFLLDJCQUEyQixvQkFBb0IsS0FBSyxnQ0FBZ0Msd0JBQXdCLHdCQUF3QixLQUFLLGFBQWEscUJBQXFCLEtBQUssbUJBQW1CLHFCQUFxQixLQUFLLGFBQWEsdUJBQXVCLG1CQUFtQixzQkFBc0IsS0FBSyxlQUFlLHVCQUF1QixpQkFBaUIsS0FBSyxvQ0FBb0MsMEJBQTBCLDhCQUE4Qix5QkFBeUIsb0JBQW9CLEtBQUssMEJBQTBCLG9CQUFvQiwyQ0FBMkMsS0FBSyxzQkFBc0Isc0JBQXNCLEtBQUssc0JBQXNCLG9CQUFvQix3Q0FBd0Msc0JBQXNCLHdCQUF3QixzQkFBc0IsS0FBSyxtQkFBbUIsMEJBQTBCLEtBQUssb0JBQW9CLHNCQUFzQixLQUFLLGVBQWUsc0JBQXNCLDRCQUE0Qiw0QkFBNEIsd0JBQXdCLEtBQUssMENBQTBDLGtCQUFrQixtQkFBbUIsaUJBQWlCLG1CQUFtQixvQkFBb0IsNEJBQTRCLDZCQUE2QiwwQkFBMEIsOEJBQThCLHlCQUF5QiwyQkFBMkIsbUNBQW1DLEtBQUssa0JBQWtCLHdCQUF3QiwwQkFBMEIsMEJBQTBCLHdCQUF3QiwyQkFBMkIsbUNBQW1DLEtBQUsscUJBQXFCLDhDQUE4QywwQkFBMEIsMkJBQTJCLHdCQUF3Qiw4QkFBOEIsb0NBQW9DLHFCQUFxQiwwQkFBMEIsMkJBQTJCLDBCQUEwQixnQ0FBZ0MseUJBQXlCLG9DQUFvQyxzQkFBc0IsS0FBSywyQkFBMkIscUJBQXFCLGdDQUFnQyxvQ0FBb0MsS0FBSyxvQkFBb0Isb0JBQW9CLDJDQUEyQyxvQkFBb0Isc0JBQXNCLG9CQUFvQixzQkFBc0IsS0FBSyxnREFBZ0QsU0FBUyxxQkFBcUIsOEJBQThCLE9BQU8sVUFBVSw2QkFBNkIsNkJBQTZCLE9BQU8sVUFBVSw0QkFBNEIsNkJBQTZCLE9BQU8sS0FBSyx5QkFBeUIsT0FBTyxpQkFBaUIsS0FBSyxRQUFRLGdCQUFnQixLQUFLLFFBQVEsaUJBQWlCLEtBQUssU0FBUyxxRkFBcUY7QUFDbHRZO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC40YTFjZTc5NDY0YTQ1ODM1ZTg0MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IHJlcXVpcmUoXCIuLi9wdWJsaWMvYmFja2dyb3VuZC5qcGdcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcclxcbiAgICAtLXByaW1hcnktY29sb3I6ICMwNDMzMzM7XFxyXFxuICAgIC0tY29sb3I6I0I5RTNDNjtcXHJcXG4gICAgLS1kYXJrLWNvbG9yOiAjMDUzNDRGO1xcclxcbiAgICAtLWRpZi1jb2xvcjogI2VlNmM0ZDtcXHJcXG4gICAgLS1saWdodC1jb2xvcjogI0Y3RkZGNztcXHJcXG4gICAgLS1kYW5nZXItY29sb3I6ICNkYzM1NDU7XFxyXFxuICAgIC0tc3VjY2Vzcy1jb2xvcjogIzI4YTc0NTtcXHJcXG4gIH1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4qIHtcXHJcXG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgYm9keSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiQW5kYWxlIE1vbm9cXFwiLCBtb25vc3BhY2U7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcclxcbiAgICBsaW5lLWhlaWdodDogMS42O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgICBjb2xvcjogIzMzMztcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgYSB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgdWwge1xcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICBpbWcge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG5cXHJcXG4vKiBVdGlsaXRpZXMgKi9cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gICAgbWF4LXdpZHRoOiAxMTAwcHg7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgcGFkZGluZzogMCAycmVtO1xcclxcbiAgICBtYXJnaW4tdG9wOiA2cmVtO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xcclxcbiAgICB9XFxyXFxuLndyYXBwZXJ7XFxyXFxuICBwYWRkaW5nOiAycmVtIDEycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubGFyZ2Uge1xcclxcbiAgZm9udC1zaXplOiAyLjdyZW07XFxyXFxuICBsaW5lLWhlaWdodDogMS4yO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuICAvKiBPdmVybGF5ICovXFxyXFxuLmRhcmstb3ZlcmxheSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDkzKTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuLmJsdWUtb3ZlcmxheSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE4LCA2NCwgOTksIDAuNTQyKTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4uaG9tZXBhZ2Uge1xcclxcbiAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG5cXHJcXG59XFxyXFxuLmhvbWUtaW1hZ2V7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBuby1yZXBlYXQgY2VudGVyIGJvdHRvbS9jb3ZlcjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIHBhZGRpbmc6IDByZW0gMTJyZW07XFxyXFxuXFxyXFxuICB9XFxyXFxuXFxyXFxuLyogTmF2QmFyICovXFxyXFxuXFxyXFxuLm5hdmJhciB7XFxyXFxuICBcXHJcXG4gIGRpc3BsYXk6IC1tb3otYm94O1xcclxcbiAgXFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgLW1vei1ib3gtcGFjazoganVzdGlmeTtcXHJcXG4gICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgLW1vei1ib3gtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHBhZGRpbmc6IDAuMXJlbSAycmVtO1xcclxcbiAgei1pbmRleDogMTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgb3BhY2l0eTogMC45O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG4gIG9wYWNpdHk6IDAuOTU7XFxyXFxufVxcclxcblxcclxcbi5uYXYtaXRlbSB7XFxyXFxuICBkaXNwbGF5OiAtbW96LWJveDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi5uYXYtbGluayBhIHtcXHJcXG4gIGNvbG9yOiNmZmZmZmY7XFxyXFxuICBwYWRkaW5nOiAwLjU1cmVtO1xcclxcbiAgbWFyZ2luOiAwIDAuMjVyZW07XFxyXFxufVxcclxcblxcclxcbi5uYXYtbGluayBhOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiNmNDhjMDY7XFxyXFxufVxcclxcblxcclxcbi8qIExvZ28gKi9cXHJcXG5cXHJcXG4ubG9nb3tcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgbGluZS1oZWlnaHQ6IDgwcHg7XFxyXFxufVxcclxcbi5sb2dvIGEge1xcclxcbiAgY29sb3I6ICNkNmNiY2I7XFxyXFxufVxcclxcbi5sb2dvIGE6aG92ZXIge1xcclxcbiAgY29sb3I6ICNmNDhjMDY7XFxyXFxufVxcclxcbi5sb2dvaW1ne1xcclxcbiAgbWFyZ2luLXRvcDogMTZweDtcXHJcXG4gIHdpZHRoOiAxMHJlbTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnJpY29ue1xcclxcbiAgcGFkZGluZy10b3A6IDFweDtcXHJcXG4gIHdpZHRoOiByZW07XFxyXFxufVxcclxcblxcclxcbi8qIEZvb3RlciAqL1xcclxcblxcclxcbi5mb290ZXJ7XFxyXFxuICBwYWRkaW5nOiAycmVtIDEwcmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBjb2xvcjojZmZmZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyLWNvbnRhaW5lcntcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLDFmcik7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXItZW1haWx7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5mb290ZXItaWNvbnN7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwxZnIpO1xcclxcbiAgZ3JpZC1nYXA6MC4xcmVtO1xcclxcbiAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbi5mb290ZXItbGluayBhe1xcclxcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG59XFxyXFxuLmZvb3Rlci1pY29ucyBwe1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbn1cXHJcXG4uY29weXJpZ2h0e1xcclxcbiAgZGlzcGxheTogaW5saW5lO1xcclxcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAwLjZyZW07XFxyXFxufVxcclxcblxcclxcbi8qIEhvbWUgKi9cXHJcXG5cXHJcXG5cXHJcXG4uaG9tZS1pbm5lcntcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIGRpc3BsYXk6IC1tb3otYm94O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAwLjJlbTtcXHJcXG4gIC1tb3otYm94LW9yaWVudDogdmVydGljYWw7XFxyXFxuICAtbW96LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXHJcXG4gICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIC1tb3otYm94LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAtbW96LWJveC1wYWNrOiBjZW50ZXI7XFxyXFxuICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgYW5pbWF0aW9uOiB0ZXh0IDFzIDE7XFxyXFxuICAtd2Via2l0LWFuaW1hdGlvbjogdGV4dCAxcyAxO1xcclxcbn1cXHJcXG4ucGFyYWdyYXBoLTIge1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDNweDtcXHJcXG4gIHdvcmQtc3BhY2luZzogMnB4O1xcclxcbiAgYW5pbWF0aW9uOiBwYXJhIDNzIDE7XFxyXFxuICAtd2Via2l0LWFuaW1hdGlvbjogcGFyYSAzcyAxO1xcclxcbn1cXHJcXG5cXHJcXG4ud29yay1idXR0b257XFxyXFxuICBmb250LWZhbWlseTogXFxcIkFuZGFsZSBNb25vXFxcIiwgbW9ub3NwYWNlO1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDVweDsgXFxyXFxuICAtbW96LWJveC1hbGlnbjogY2VudGVyOyBcXHJcXG4gICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcclxcbiAgLW1vei1ib3gtcGFjazogY2VudGVyO1xcclxcbiAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgY29sb3I6ICNmNDhjMDY7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMC40cmVtIDJyZW07XFxyXFxuICBtYXJnaW4tdG9wOiAxLjIzcmVtO1xcclxcbiAgYm9yZGVyOiAzcHggc29saWQgI2Y3ZjdmNztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMCAxcHggIzc1N2Y4NWIzO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ud29yay1idXR0b246aG92ZXJ7XFxyXFxuICBjb2xvcjogI2Y3ZjdmNztcXHJcXG4gIGJvcmRlcjogM3B4IHNvbGlkICNmNDhjMDY7XFxyXFxuICBib3gtc2hhZG93OiAwIDAgMXB4ICM3NTdmODViMztcXHJcXG59XFxyXFxuXFxyXFxuLmZvbnQtaWNvbnN7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwxZnIpO1xcclxcbiAgZ3JpZC1nYXA6MnJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIHBhZGRpbmc6IDJyZW07XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbi8qIEFuaW1hdGlvbiAqL1xcclxcblxcclxcblxcclxcbkBrZXlmcmFtZXMgdGV4dCB7XFxyXFxuICAwJXtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAtMzBweDs7XFxyXFxuICB9XFxyXFxuICAzMCV7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAyNXB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAtMzBweDtcXHJcXG4gIH1cXHJcXG4gIDg1JXtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDhweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogLTMwcHg7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgcGFyYSB7XFxyXFxuMCV7XFxyXFxuICBvcGFjaXR5OiAwO1xcclxcbn1cXHJcXG40NSV7XFxyXFxuICBvcGFjaXR5OjA7XFxyXFxufVxcclxcbjg1JXtcXHJcXG4gIG9wYWNpdHk6IDE7XFxyXFxufVxcclxcblxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiBQcm9qZWN0cyAqL1xcclxcblxcclxcblxcclxcblxcclxcbi8qIEFib3V0ICovXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLyogQ29udGFjdCAqL1wiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIkU6L1BvcnRmb2xpby9zdHlsZS9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSx3QkFBd0I7SUFDeEIsZUFBZTtJQUNmLHFCQUFxQjtJQUNyQixvQkFBb0I7SUFDcEIsc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2Qix3QkFBd0I7RUFDMUI7Ozs7QUFJRjtJQUNJLDJCQUFzQjtTQUF0QixzQkFBc0I7SUFDdEIsU0FBUztJQUNULFVBQVU7RUFDWjs7RUFFQTtJQUNFLHFDQUFxQztJQUNyQyxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7OztBQUdGLGNBQWM7QUFDZDtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CO0FBQ0o7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7O0VBR0UsWUFBWTtBQUNkO0VBQ0Usc0NBQXNDO0VBQ3RDLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7QUFDQTtFQUNFLHlDQUF5QztFQUN6QyxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7O0FBRWI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLGdCQUFnQjs7QUFFbEI7QUFDQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLGlGQUF5RTtFQUN6RSxXQUFXO0VBQ1gsYUFBYTtFQUNiLG1CQUFtQjs7RUFFbkI7O0FBRUYsV0FBVzs7QUFFWDs7RUFFRSxpQkFBYTs7RUFBYixhQUFhO0VBQ2Isc0JBQThCO09BQTlCLDhCQUE4QjtFQUM5QixzQkFBbUI7T0FBbkIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIsVUFBVTtFQUNWLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGlCQUFhO0VBQWIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUEsU0FBUzs7QUFFVDtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixVQUFVO0FBQ1o7O0FBRUEsV0FBVzs7QUFFWDtFQUNFLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGlDQUFpQztFQUNqQyxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsaUJBQWlCO0FBQ25COztBQUVBLFNBQVM7OztBQUdUO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixVQUFVO0VBQ1YsWUFBWTtFQUNaLGlCQUFhO0VBQWIsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQix5QkFBc0I7RUFBdEIsMEJBQXNCO09BQXRCLHNCQUFzQjtFQUN0QixzQkFBbUI7T0FBbkIsbUJBQW1CO0VBQ25CLHFCQUF1QjtPQUF2Qix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQiw0QkFBNEI7QUFDOUI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UscUNBQXFDO0VBQ3JDLG1CQUFtQjtFQUNuQixzQkFBbUI7T0FBbkIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixxQkFBdUI7T0FBdkIsdUJBQXVCO0VBQ3ZCLDZCQUE2QjtFQUM3QixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQiw2QkFBNkI7RUFDN0IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsYUFBYTtFQUNiLG9DQUFvQztFQUNwQyxhQUFhO0VBQ2IsZUFBZTtFQUNmLGFBQWE7RUFDYixlQUFlO0FBQ2pCO0FBQ0EsY0FBYzs7O0FBR2Q7RUFDRTtJQUNFLFlBQVk7SUFDWixvQkFBb0I7RUFDdEI7RUFDQTtJQUNFLG9CQUFvQjtJQUNwQixvQkFBb0I7RUFDdEI7RUFDQTtJQUNFLG1CQUFtQjtJQUNuQixvQkFBb0I7RUFDdEI7QUFDRjs7QUFFQTtBQUNBO0VBQ0UsVUFBVTtBQUNaO0FBQ0E7RUFDRSxTQUFTO0FBQ1g7QUFDQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTs7O0FBR0EsYUFBYTs7OztBQUliLFVBQVU7Ozs7QUFJVixZQUFZXCIsXCJmaWxlXCI6XCJpbmRleC5jc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcclxcbiAgICAtLXByaW1hcnktY29sb3I6ICMwNDMzMzM7XFxyXFxuICAgIC0tY29sb3I6I0I5RTNDNjtcXHJcXG4gICAgLS1kYXJrLWNvbG9yOiAjMDUzNDRGO1xcclxcbiAgICAtLWRpZi1jb2xvcjogI2VlNmM0ZDtcXHJcXG4gICAgLS1saWdodC1jb2xvcjogI0Y3RkZGNztcXHJcXG4gICAgLS1kYW5nZXItY29sb3I6ICNkYzM1NDU7XFxyXFxuICAgIC0tc3VjY2Vzcy1jb2xvcjogIzI4YTc0NTtcXHJcXG4gIH1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4qIHtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICBib2R5IHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJBbmRhbGUgTW9ub1xcXCIsIG1vbm9zcGFjZTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAgIGNvbG9yOiAjMzMzO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICBhIHtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICB1bCB7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIGltZyB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgfVxcclxcblxcclxcblxcclxcbi8qIFV0aWxpdGllcyAqL1xcclxcbi5jb250YWluZXIge1xcclxcbiAgICBtYXgtd2lkdGg6IDExMDBweDtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICBwYWRkaW5nOiAwIDJyZW07XFxyXFxuICAgIG1hcmdpbi10b3A6IDZyZW07XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDNyZW07XFxyXFxuICAgIH1cXHJcXG4ud3JhcHBlcntcXHJcXG4gIHBhZGRpbmc6IDJyZW0gMTJyZW07XFxyXFxufVxcclxcblxcclxcbi5sYXJnZSB7XFxyXFxuICBmb250LXNpemU6IDIuN3JlbTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjI7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4gIC8qIE92ZXJsYXkgKi9cXHJcXG4uZGFyay1vdmVybGF5IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40OTMpO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG4uYmx1ZS1vdmVybGF5IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTgsIDY0LCA5OSwgMC41NDIpO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5ob21lcGFnZSB7XFxyXFxuICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcblxcclxcbn1cXHJcXG4uaG9tZS1pbWFnZXtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBiYWNrZ3JvdW5kOiB1cmwoJy4uL3B1YmxpYy9iYWNrZ3JvdW5kLmpwZycpIG5vLXJlcGVhdCBjZW50ZXIgYm90dG9tL2NvdmVyO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgcGFkZGluZzogMHJlbSAxMnJlbTtcXHJcXG5cXHJcXG4gIH1cXHJcXG5cXHJcXG4vKiBOYXZCYXIgKi9cXHJcXG5cXHJcXG4ubmF2YmFyIHtcXHJcXG4gIFxcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBwYWRkaW5nOiAwLjFyZW0gMnJlbTtcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG9wYWNpdHk6IDAuOTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxuICBvcGFjaXR5OiAwLjk1O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWl0ZW0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1saW5rIGEge1xcclxcbiAgY29sb3I6I2ZmZmZmZjtcXHJcXG4gIHBhZGRpbmc6IDAuNTVyZW07XFxyXFxuICBtYXJnaW46IDAgMC4yNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1saW5rIGE6aG92ZXIge1xcclxcbiAgY29sb3I6I2Y0OGMwNjtcXHJcXG59XFxyXFxuXFxyXFxuLyogTG9nbyAqL1xcclxcblxcclxcbi5sb2dve1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBsaW5lLWhlaWdodDogODBweDtcXHJcXG59XFxyXFxuLmxvZ28gYSB7XFxyXFxuICBjb2xvcjogI2Q2Y2JjYjtcXHJcXG59XFxyXFxuLmxvZ28gYTpob3ZlciB7XFxyXFxuICBjb2xvcjogI2Y0OGMwNjtcXHJcXG59XFxyXFxuLmxvZ29pbWd7XFxyXFxuICBtYXJnaW4tdG9wOiAxNnB4O1xcclxcbiAgd2lkdGg6IDEwcmVtO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucmljb257XFxyXFxuICBwYWRkaW5nLXRvcDogMXB4O1xcclxcbiAgd2lkdGg6IHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyogRm9vdGVyICovXFxyXFxuXFxyXFxuLmZvb3RlcntcXHJcXG4gIHBhZGRpbmc6IDJyZW0gMTByZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGNvbG9yOiNmZmZmZmY7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXItY29udGFpbmVye1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsMWZyKTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3Rlci1lbWFpbHtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3Rlci1pY29uc3tcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLDFmcik7XFxyXFxuICBncmlkLWdhcDowLjFyZW07XFxyXFxuICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuLmZvb3Rlci1saW5rIGF7XFxyXFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcbn1cXHJcXG4uZm9vdGVyLWljb25zIHB7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxufVxcclxcbi5jb3B5cmlnaHR7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmU7XFxyXFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDAuNnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyogSG9tZSAqL1xcclxcblxcclxcblxcclxcbi5ob21lLWlubmVye1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAwLjJlbTtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBhbmltYXRpb246IHRleHQgMXMgMTtcXHJcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiB0ZXh0IDFzIDE7XFxyXFxufVxcclxcbi5wYXJhZ3JhcGgtMiB7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxuICBsZXR0ZXItc3BhY2luZzogM3B4O1xcclxcbiAgd29yZC1zcGFjaW5nOiAycHg7XFxyXFxuICBhbmltYXRpb246IHBhcmEgM3MgMTtcXHJcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBwYXJhIDNzIDE7XFxyXFxufVxcclxcblxcclxcbi53b3JrLWJ1dHRvbntcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQW5kYWxlIE1vbm9cXFwiLCBtb25vc3BhY2U7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogNXB4OyBcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDEuMXJlbTtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBjb2xvcjogI2Y0OGMwNjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAwLjRyZW0gMnJlbTtcXHJcXG4gIG1hcmdpbi10b3A6IDEuMjNyZW07XFxyXFxuICBib3JkZXI6IDNweCBzb2xpZCAjZjdmN2Y3O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgYm94LXNoYWRvdzogMCAwIDFweCAjNzU3Zjg1YjM7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi53b3JrLWJ1dHRvbjpob3ZlcntcXHJcXG4gIGNvbG9yOiAjZjdmN2Y3O1xcclxcbiAgYm9yZGVyOiAzcHggc29saWQgI2Y0OGMwNjtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMCAxcHggIzc1N2Y4NWIzO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9udC1pY29uc3tcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLDFmcik7XFxyXFxuICBncmlkLWdhcDoycmVtO1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgcGFkZGluZzogMnJlbTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuLyogQW5pbWF0aW9uICovXFxyXFxuXFxyXFxuXFxyXFxuQGtleWZyYW1lcyB0ZXh0IHtcXHJcXG4gIDAle1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IC0zMHB4OztcXHJcXG4gIH1cXHJcXG4gIDMwJXtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDI1cHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IC0zMHB4O1xcclxcbiAgfVxcclxcbiAgODUle1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogOHB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAtMzBweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBwYXJhIHtcXHJcXG4wJXtcXHJcXG4gIG9wYWNpdHk6IDA7XFxyXFxufVxcclxcbjQ1JXtcXHJcXG4gIG9wYWNpdHk6MDtcXHJcXG59XFxyXFxuODUle1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG59XFxyXFxuXFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIFByb2plY3RzICovXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLyogQWJvdXQgKi9cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKiBDb250YWN0ICovXCJdfV0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==