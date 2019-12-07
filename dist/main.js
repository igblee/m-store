(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nclass Store {\n  constructor({\n    state,\n    mutations,\n    actions\n  }) {\n    this.state = null;\n    this.mutations = null;\n    this.actions = null;\n    this.mutationSubscribers = null;\n    this.actionSubscribers = null;\n    this.state = state;\n    Object.keys(mutations).forEach(key => {\n      if (Object.prototype.toString.call(mutations[key]) === '[object Array]') {\n        this.mutations[key] = mutations[key];\n      } else {\n        this.mutations[key] = [mutations[key]];\n      }\n    });\n    Object.keys(actions).forEach(key => {\n      if (Object.prototype.toString.call(actions[key]) === '[object Array]') {\n        this.actions[key] = actions[key];\n      } else {\n        this.actions[key] = [actions[key]];\n      }\n    });\n    this.mutationSubscribers = [];\n    this.actionSubscribers = [];\n  }\n\n  commit(type, payload) {\n    if (!this.mutations[type]) {\n      console.error('[m store]', `unknown mutation type: ${type}`);\n      return;\n    }\n\n    const entry = this.mutations[type];\n    const mutation = {\n      type,\n      payload\n    };\n\n    try {\n      this.mutationSubscribers.filter(sub => sub.before).forEach(sub => sub.before(mutation, this.state));\n    } catch (e) {\n      if (true) {\n        console.warn('[m store] error in mutation\\'s before subscribers: ');\n        console.error(e);\n      }\n    }\n\n    entry.forEach(handler => {\n      handler(this.state, payload);\n    });\n\n    try {\n      this.mutationSubscribers.filter(sub => sub.after).forEach(sub => sub.after(mutation, this.state));\n    } catch (e) {\n      if (true) {\n        console.warn('[m store] error in mutation\\'s after subscribers: ');\n        console.error(e);\n      }\n    }\n  }\n\n  dispatch(type, payload) {\n    var _this = this;\n\n    return _asyncToGenerator(function* () {\n      if (!_this.actions[type]) {\n        console.error('[m store]', `unknown action type: ${type}`);\n        return;\n      }\n\n      const entry = _this.actions[type];\n      const action = {\n        type,\n        payload\n      };\n\n      try {\n        _this.actionSubscribers.filter(sub => sub.before).forEach(sub => sub.before(action, _this.state));\n      } catch (e) {\n        if (true) {\n          console.warn('[m store] error in action\\'s before subscribers: ');\n          console.error(e);\n        }\n      }\n\n      const promiseList = entry.length > 1 ? Promise.all(entry.map(handler => handler({\n        dispatch: _this.dispatch,\n        commit: _this.commit,\n        state: _this.state\n      }, payload))) : entry[0]({\n        dispatch: _this.dispatch,\n        commit: _this.commit,\n        state: _this.state\n      }, payload);\n      const res = yield promiseList;\n\n      try {\n        _this.actionSubscribers.filter(sub => sub.after).forEach(sub => sub.after(action, _this.state));\n      } catch (e) {\n        if (true) {\n          console.warn('[m store] error in action\\'s after subscribers: ');\n          console.error(e);\n        }\n      }\n\n      return res;\n    })();\n  }\n\n  mutationSubscribe(fn) {\n    const subs = typeof fn === 'function' ? {\n      before: fn\n    } : fn;\n    return genericSubscribe(subs, this.mutationSubscribers);\n  }\n\n  subscribeAction(fn) {\n    const subs = typeof fn === 'function' ? {\n      before: fn\n    } : fn;\n    return genericSubscribe(subs, this.actionSubscribers);\n  }\n\n}\n\nfunction genericSubscribe(fn, subs) {\n  if (subs.indexOf(fn) < 0) {\n    subs.push(fn);\n  }\n\n  return () => {\n    const i = subs.indexOf(fn);\n\n    if (i > -1) {\n      subs.splice(i, 1);\n    }\n  };\n}\n\nexports.default = Store;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXgudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHM/ZmZiNCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNsYXNzIFN0b3JlIHtcbiAgICBjb25zdHJ1Y3Rvcih7IHN0YXRlLCBtdXRhdGlvbnMsIGFjdGlvbnMgfSkge1xuICAgICAgICB0aGlzLnN0YXRlID0gbnVsbDtcbiAgICAgICAgdGhpcy5tdXRhdGlvbnMgPSBudWxsO1xuICAgICAgICB0aGlzLmFjdGlvbnMgPSBudWxsO1xuICAgICAgICB0aGlzLm11dGF0aW9uU3Vic2NyaWJlcnMgPSBudWxsO1xuICAgICAgICB0aGlzLmFjdGlvblN1YnNjcmliZXJzID0gbnVsbDtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuICAgICAgICBPYmplY3Qua2V5cyhtdXRhdGlvbnMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChtdXRhdGlvbnNba2V5XSkgPT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm11dGF0aW9uc1trZXldID0gbXV0YXRpb25zW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLm11dGF0aW9uc1trZXldID0gW211dGF0aW9uc1trZXldXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5rZXlzKGFjdGlvbnMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhY3Rpb25zW2tleV0pID09PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hY3Rpb25zW2tleV0gPSBhY3Rpb25zW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGlvbnNba2V5XSA9IFthY3Rpb25zW2tleV1dO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5tdXRhdGlvblN1YnNjcmliZXJzID0gW107XG4gICAgICAgIHRoaXMuYWN0aW9uU3Vic2NyaWJlcnMgPSBbXTtcbiAgICB9XG4gICAgY29tbWl0KHR5cGUsIHBheWxvYWQpIHtcbiAgICAgICAgaWYgKCF0aGlzLm11dGF0aW9uc1t0eXBlXSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignW20gc3RvcmVdJywgYHVua25vd24gbXV0YXRpb24gdHlwZTogJHt0eXBlfWApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGVudHJ5ID0gdGhpcy5tdXRhdGlvbnNbdHlwZV07XG4gICAgICAgIGNvbnN0IG11dGF0aW9uID0geyB0eXBlLCBwYXlsb2FkIH07XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGlzLm11dGF0aW9uU3Vic2NyaWJlcnNcbiAgICAgICAgICAgICAgICAuZmlsdGVyKHN1YiA9PiBzdWIuYmVmb3JlKVxuICAgICAgICAgICAgICAgIC5mb3JFYWNoKHN1YiA9PiBzdWIuYmVmb3JlKG11dGF0aW9uLCB0aGlzLnN0YXRlKSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdbbSBzdG9yZV0gZXJyb3IgaW4gbXV0YXRpb25cXCdzIGJlZm9yZSBzdWJzY3JpYmVyczogJyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbnRyeS5mb3JFYWNoKChoYW5kbGVyKSA9PiB7XG4gICAgICAgICAgICBoYW5kbGVyKHRoaXMuc3RhdGUsIHBheWxvYWQpO1xuICAgICAgICB9KTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRoaXMubXV0YXRpb25TdWJzY3JpYmVyc1xuICAgICAgICAgICAgICAgIC5maWx0ZXIoc3ViID0+IHN1Yi5hZnRlcilcbiAgICAgICAgICAgICAgICAuZm9yRWFjaChzdWIgPT4gc3ViLmFmdGVyKG11dGF0aW9uLCB0aGlzLnN0YXRlKSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdbbSBzdG9yZV0gZXJyb3IgaW4gbXV0YXRpb25cXCdzIGFmdGVyIHN1YnNjcmliZXJzOiAnKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGFzeW5jIGRpc3BhdGNoKHR5cGUsIHBheWxvYWQpIHtcbiAgICAgICAgaWYgKCF0aGlzLmFjdGlvbnNbdHlwZV0pIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1ttIHN0b3JlXScsIGB1bmtub3duIGFjdGlvbiB0eXBlOiAke3R5cGV9YCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZW50cnkgPSB0aGlzLmFjdGlvbnNbdHlwZV07XG4gICAgICAgIGNvbnN0IGFjdGlvbiA9IHsgdHlwZSwgcGF5bG9hZCB9O1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy5hY3Rpb25TdWJzY3JpYmVyc1xuICAgICAgICAgICAgICAgIC5maWx0ZXIoc3ViID0+IHN1Yi5iZWZvcmUpXG4gICAgICAgICAgICAgICAgLmZvckVhY2goc3ViID0+IHN1Yi5iZWZvcmUoYWN0aW9uLCB0aGlzLnN0YXRlKSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdbbSBzdG9yZV0gZXJyb3IgaW4gYWN0aW9uXFwncyBiZWZvcmUgc3Vic2NyaWJlcnM6ICcpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcHJvbWlzZUxpc3QgPSBlbnRyeS5sZW5ndGggPiAxXG4gICAgICAgICAgICA/IFByb21pc2UuYWxsKGVudHJ5Lm1hcCgoaGFuZGxlcikgPT4gaGFuZGxlcih7XG4gICAgICAgICAgICAgICAgZGlzcGF0Y2g6IHRoaXMuZGlzcGF0Y2gsXG4gICAgICAgICAgICAgICAgY29tbWl0OiB0aGlzLmNvbW1pdCxcbiAgICAgICAgICAgICAgICBzdGF0ZTogdGhpcy5zdGF0ZVxuICAgICAgICAgICAgfSwgcGF5bG9hZCkpKVxuICAgICAgICAgICAgOiBlbnRyeVswXSh7XG4gICAgICAgICAgICAgICAgZGlzcGF0Y2g6IHRoaXMuZGlzcGF0Y2gsXG4gICAgICAgICAgICAgICAgY29tbWl0OiB0aGlzLmNvbW1pdCxcbiAgICAgICAgICAgICAgICBzdGF0ZTogdGhpcy5zdGF0ZVxuICAgICAgICAgICAgfSwgcGF5bG9hZCk7XG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHByb21pc2VMaXN0O1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy5hY3Rpb25TdWJzY3JpYmVyc1xuICAgICAgICAgICAgICAgIC5maWx0ZXIoc3ViID0+IHN1Yi5hZnRlcilcbiAgICAgICAgICAgICAgICAuZm9yRWFjaChzdWIgPT4gc3ViLmFmdGVyKGFjdGlvbiwgdGhpcy5zdGF0ZSkpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignW20gc3RvcmVdIGVycm9yIGluIGFjdGlvblxcJ3MgYWZ0ZXIgc3Vic2NyaWJlcnM6ICcpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9XG4gICAgbXV0YXRpb25TdWJzY3JpYmUoZm4pIHtcbiAgICAgICAgY29uc3Qgc3VicyA9IHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJyA/IHsgYmVmb3JlOiBmbiB9IDogZm47XG4gICAgICAgIHJldHVybiBnZW5lcmljU3Vic2NyaWJlKHN1YnMsIHRoaXMubXV0YXRpb25TdWJzY3JpYmVycyk7XG4gICAgfVxuICAgIHN1YnNjcmliZUFjdGlvbihmbikge1xuICAgICAgICBjb25zdCBzdWJzID0gdHlwZW9mIGZuID09PSAnZnVuY3Rpb24nID8geyBiZWZvcmU6IGZuIH0gOiBmbjtcbiAgICAgICAgcmV0dXJuIGdlbmVyaWNTdWJzY3JpYmUoc3VicywgdGhpcy5hY3Rpb25TdWJzY3JpYmVycyk7XG4gICAgfVxufVxuZnVuY3Rpb24gZ2VuZXJpY1N1YnNjcmliZShmbiwgc3Vicykge1xuICAgIGlmIChzdWJzLmluZGV4T2YoZm4pIDwgMCkge1xuICAgICAgICBzdWJzLnB1c2goZm4pO1xuICAgIH1cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBjb25zdCBpID0gc3Vicy5pbmRleE9mKGZuKTtcbiAgICAgICAgaWYgKGkgPiAtMSkge1xuICAgICAgICAgICAgc3Vicy5zcGxpY2UoaSwgMSk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gU3RvcmU7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUFBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBekNBO0FBMENBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBL0dBO0FBQ0E7QUErR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.ts\n");

/***/ })

/******/ });
});