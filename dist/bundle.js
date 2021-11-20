/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/game */ "./src/modules/game.ts");
/* harmony import */ var _modules_renderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/renderer */ "./src/modules/renderer.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


// function to load Game data when user clicks a Game accordion elememnt
function gameContent() {
    var accordianElements = document.getElementsByClassName("accordion");
    var i;
    for (i = 0; i < accordianElements.length; i++) {
        accordianElements[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            // Fetch clicked game's data from data file, and expand/contract accordion respectively
            var gameID = panel.id;
            renderGameData(gameID, panel);
        });
    }
}
function renderGameData(gameID, panel) {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, gameJSON, gameObjID, gameObjName, gameObjYear, gameObj, gameDivID, renderer;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch('/src/data/gameData.json')];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    gameJSON = data[gameID];
                    // Create Game object based on JSON
                    try {
                        gameObjID = gameJSON.id;
                        gameObjName = gameJSON.name;
                        gameObjYear = gameJSON.year;
                        gameObj = new _modules_game__WEBPACK_IMPORTED_MODULE_0__["Game"](gameObjID, gameObjName, gameObjYear);
                        gameDivID = "#" + gameID + "Data";
                        renderer = new _modules_renderer__WEBPACK_IMPORTED_MODULE_1__["Renderer"](document.querySelector(gameDivID));
                        renderer.render('<p>' + gameObj.name + " : " + gameObj.year + '</p>');
                        console.log(gameObj.name + " : " + gameObj.year);
                    }
                    catch (_b) {
                        console.log("Error generating Game object from JSON file!");
                    }
                    // Accordion Closes
                    if (panel.style.maxHeight) {
                        panel.style.maxHeight = null;
                        panel.style.paddingTop = "0px";
                        panel.style.paddingBottom = "0px";
                    }
                    // Accordion Opens
                    else {
                        panel.style.maxHeight = panel.scrollHeight + "px";
                        panel.style.paddingTop = "10px";
                        panel.style.paddingBottom = "10px";
                    }
                    return [2 /*return*/];
            }
        });
    });
}
gameContent();


/***/ }),

/***/ "./src/modules/game.ts":
/*!*****************************!*\
  !*** ./src/modules/game.ts ***!
  \*****************************/
/*! exports provided: Game */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Game", function() { return Game; });
// Game Class
var Game = /** @class */ (function () {
    function Game(id, name, year) {
        this.id = id;
        this.name = name;
        this.year = year;
    }
    return Game;
}());



/***/ }),

/***/ "./src/modules/renderer.ts":
/*!*********************************!*\
  !*** ./src/modules/renderer.ts ***!
  \*********************************/
/*! exports provided: Renderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Renderer", function() { return Renderer; });
var Renderer = /** @class */ (function () {
    function Renderer(viewTemplate) {
        this.viewTemplate = viewTemplate;
    }
    Renderer.prototype.render = function (html) {
        this.viewTemplate.innerHTML = html;
    };
    return Renderer;
}());



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvZ2FtZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9yZW5kZXJlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZzQztBQUNRO0FBRTlDLHdFQUF3RTtBQUN4RSxTQUFTLFdBQVc7SUFFaEIsSUFBSSxpQkFBaUIsR0FBRyxRQUFRLENBQUMsc0JBQXNCLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDckUsSUFBSSxDQUFRLENBQUM7SUFFYixLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLGlCQUFpQixDQUFDLE1BQU0sRUFBRSxDQUFDLEVB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QUFHLElBQUksQ0FBQztJQUN2QyxDQUFDO0lBQ0wsZUFBQztBQUFELENBQUMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvbWFpbi50c1wiKTtcbiIsImltcG9ydCB7IEdhbWUgfSBmcm9tICcuL21vZHVsZXMvZ2FtZSc7XHJcbmltcG9ydCB7IFJlbmRlcmVyIH0gZnJvbSAnLi9tb2R1bGVzL3JlbmRlcmVyJztcclxuXHJcbi8vIGZ1bmN0aW9uIHRvIGxvYWQgR2FtZSBkYXRhIHdoZW4gdXNlciBjbGlja3MgYSBHYW1lIGFjY29yZGlvbiBlbGVtZW1udFxyXG5mdW5jdGlvbiBnYW1lQ29udGVudCgpXHJcbntcclxuICAgIGxldCBhY2NvcmRpYW5FbGVtZW50cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJhY2NvcmRpb25cIik7XHJcbiAgICBsZXQgaTpudW1iZXI7XHJcblxyXG4gICAgZm9yIChpID0gMDsgaSA8IGFjY29yZGlhbkVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgYWNjb3JkaWFuRWxlbWVudHNbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB0aGlzLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgIHZhciBwYW5lbCA9IHRoaXMubmV4dEVsZW1lbnRTaWJsaW5nO1xyXG5cclxuICAgICAgICAgICAgLy8gRmV0Y2ggY2xpY2tlZCBnYW1lJ3MgZGF0YSBmcm9tIGRhdGEgZmlsZSwgYW5kIGV4cGFuZC9jb250cmFjdCBhY2NvcmRpb24gcmVzcGVjdGl2ZWx5XHJcbiAgICAgICAgICAgIGxldCBnYW1lSUQ6c3RyaW5nID0gcGFuZWwuaWQ7XHJcbiAgICAgICAgICAgIHJlbmRlckdhbWVEYXRhKGdhbWVJRCwgcGFuZWwpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuYXN5bmMgZnVuY3Rpb24gcmVuZGVyR2FtZURhdGEoZ2FtZUlEOnN0cmluZywgcGFuZWw6YW55KXtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9zcmMvZGF0YS9nYW1lRGF0YS5qc29uJyk7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgIC8vIEpTT04gb2JqZWN0IGZvciB0aGlzIHNwZWNpZmljIGdhbWVcclxuICAgIGNvbnN0IGdhbWVKU09OID0gZGF0YVtnYW1lSURdO1xyXG5cclxuICAgIC8vIENyZWF0ZSBHYW1lIG9iamVjdCBiYXNlZCBvbiBKU09OXHJcbiAgICB0cnl7XHJcbiAgICAgICAgY29uc3QgZ2FtZU9iaklEID0gZ2FtZUpTT04uaWQ7XHJcbiAgICAgICAgY29uc3QgZ2FtZU9iak5hbWUgPSBnYW1lSlNPTi5uYW1lO1xyXG4gICAgICAgIGNvbnN0IGdhbWVPYmpZZWFyID0gZ2FtZUpTT04ueWVhcjtcclxuICAgICAgICBjb25zdCBnYW1lT2JqID0gbmV3IEdhbWUoZ2FtZU9iaklELCBnYW1lT2JqTmFtZSwgZ2FtZU9ialllYXIpO1xyXG5cclxuICAgICAgICBjb25zdCBnYW1lRGl2SUQgPSBcIiNcIiArIGdhbWVJRCArIFwiRGF0YVwiO1xyXG4gICAgICAgIGNvbnN0IHJlbmRlcmVyID0gbmV3IFJlbmRlcmVyKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZ2FtZURpdklEKSk7XHJcbiAgICAgICAgcmVuZGVyZXIucmVuZGVyKCc8cD4nICsgZ2FtZU9iai5uYW1lICsgXCIgOiBcIiArIGdhbWVPYmoueWVhciArICc8L3A+Jyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc29sZS5sb2coZ2FtZU9iai5uYW1lICsgXCIgOiBcIiArIGdhbWVPYmoueWVhcik7XHJcbiAgICB9XHJcbiAgICBjYXRjaHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIGdlbmVyYXRpbmcgR2FtZSBvYmplY3QgZnJvbSBKU09OIGZpbGUhXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEFjY29yZGlvbiBDbG9zZXNcclxuICAgIGlmIChwYW5lbC5zdHlsZS5tYXhIZWlnaHQpIHtcclxuICAgICAgICBwYW5lbC5zdHlsZS5tYXhIZWlnaHQgPSBudWxsO1xyXG4gICAgICAgIHBhbmVsLnN0eWxlLnBhZGRpbmdUb3AgPSBcIjBweFwiO1xyXG4gICAgICAgIHBhbmVsLnN0eWxlLnBhZGRpbmdCb3R0b20gPSBcIjBweFwiOyAgICAgICAgXHJcbiAgICB9IFxyXG5cclxuICAgIC8vIEFjY29yZGlvbiBPcGVuc1xyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcGFuZWwuc3R5bGUubWF4SGVpZ2h0ID0gcGFuZWwuc2Nyb2xsSGVpZ2h0ICsgXCJweFwiO1xyXG4gICAgICAgIHBhbmVsLnN0eWxlLnBhZGRpbmdUb3AgPSBcIjEwcHhcIjtcclxuICAgICAgICBwYW5lbC5zdHlsZS5wYWRkaW5nQm90dG9tID0gXCIxMHB4XCI7XHJcbiAgICB9IFxyXG59XHJcblxyXG5cclxuZ2FtZUNvbnRlbnQoKTtcclxuIiwiaW1wb3J0IHsgUmVuZGVyZXIgfSBmcm9tICcuLi9tb2R1bGVzL3JlbmRlcmVyJztcclxuXHJcbi8vIEdhbWUgQ2xhc3NcclxuZXhwb3J0IGNsYXNzIEdhbWUge1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBpZDogc3RyaW5nLCBcclxuICAgICAgICBwdWJsaWMgbmFtZTpzdHJpbmcsIFxyXG4gICAgICAgIHB1YmxpYyB5ZWFyOiBzdHJpbmcpXHJcbiAgICB7fSAgICBcclxufSIsImV4cG9ydCBjbGFzcyBSZW5kZXJlciB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHZpZXdUZW1wbGF0ZTogSFRNTERpdkVsZW1lbnQpIHtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoaHRtbDogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy52aWV3VGVtcGxhdGUuaW5uZXJIVE1MID0gaHRtbDtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=