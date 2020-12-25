webpackHotUpdate_N_E("pages/index",{

/***/ "./components/NewExerciseForm.js":
/*!***************************************!*\
  !*** ./components/NewExerciseForm.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return NewExerciseForm; });\n/* harmony import */ var _home_jose_Documentos_Sitios_exercise_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_jose_Documentos_Sitios_exercise_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_jose_Documentos_Sitios_exercise_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_jose_Documentos_Sitios_exercise_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_calendar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-calendar */ \"./node_modules/react-calendar/dist/esm/index.js\");\n/* harmony import */ var _lib_formattedDate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/formattedDate */ \"./lib/formattedDate.js\");\n\n\n\n\nvar _jsxFileName = \"/home/jose/Documentos/Sitios/exercise-frontend/components/NewExerciseForm.js\",\n    _s = $RefreshSig$();\n\n\n\n\nfunction NewExerciseForm() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(''),\n      userId = _useState[0],\n      setUserId = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(''),\n      description = _useState2[0],\n      setDescription = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(''),\n      duration = _useState3[0],\n      setDuration = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(new Date()),\n      date = _useState4[0],\n      setDate = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(''),\n      error = _useState5[0],\n      setError = _useState5[1];\n\n  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(''),\n      success = _useState6[0],\n      setSuccess = _useState6[1];\n\n  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      isProcessing = _useState7[0],\n      setIsProcessing = _useState7[1];\n\n  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      showCalendar = _useState8[0],\n      setShowCalendar = _useState8[1];\n\n  var handleSubmit = /*#__PURE__*/function () {\n    var _ref = Object(_home_jose_Documentos_Sitios_exercise_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_home_jose_Documentos_Sitios_exercise_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {\n      var data, API_URL;\n      return _home_jose_Documentos_Sitios_exercise_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.prev = 0;\n              setIsProcessing(true);\n              e.preventDefault();\n              data = {\n                user_id: Number(userId),\n                description: description,\n                duration: Number(duration),\n                date: date.toISOString().slice(0, 10)\n              };\n\n              if (!(data.user_id && data.description && data.duration)) {\n                _context.next = 9;\n                break;\n              }\n\n              // create new Exercise\n              API_URL = 'https://jt-exercise-tracker-mic.herokuapp.com/api/exercise/add';\n              _context.next = 8;\n              return fetch(API_URL, {\n                method: 'POST',\n                body: JSON.stringify(data)\n              });\n\n            case 8:\n              setSuccess(\"Exercise added successfully\");\n\n            case 9:\n              _context.next = 14;\n              break;\n\n            case 11:\n              _context.prev = 11;\n              _context.t0 = _context[\"catch\"](0);\n              setError('Internal Error');\n\n            case 14:\n              _context.prev = 14;\n              setUserId('');\n              setDescription('');\n              setDuration('');\n              setDate('');\n              setIsProcessing(false);\n              return _context.finish(14);\n\n            case 21:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[0, 11, 14, 21]]);\n    }));\n\n    return function handleSubmit(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }(); // const formattedDate = (date) => {\n  //   const pad = (n) => {\n  //     return n < 10 ? '0' + n : n;\n  //   };\n  //   return (\n  //     date.getUTCFullYear() +\n  //     '-' +\n  //     pad(date.getMonth() + 1) +\n  //     '-' +\n  //     pad(date.getDate())\n  //   );\n  // };\n\n\n  var handleUserIdChange = function handleUserIdChange(e) {\n    error && setError('');\n    success && setSuccess('');\n    setUserId(e.target.value);\n  };\n\n  var handleDescriptionChange = function handleDescriptionChange(e) {\n    error && setError('');\n    success && setSuccess('');\n    setDescription(e.target.value);\n  };\n\n  var handleDurationChange = function handleDurationChange(e) {\n    error && setError('');\n    success && setSuccess('');\n    setDuration(e.target.value);\n  };\n\n  var handleDateChange = function handleDateChange(value) {\n    error && setError('');\n    success && setSuccess('');\n    setDate(value);\n    setShowCalendar(false);\n  };\n\n  var handleTileClassName = function handleTileClassName(tile) {\n    if (Object(_lib_formattedDate__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(tile.date) === Object(_lib_formattedDate__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(date)) {\n      return 'bg-indigo-900 rounded';\n    }\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"form\", {\n    className: \"mt-4 p-2 md:flex-grow md:ml-4 flex flex-col\",\n    onSubmit: handleSubmit,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h3\", {\n      className: \"font-semibold text-white\",\n      children: \"Add exercises\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: \"flex mt-2 items-center\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"label\", {\n        htmlFor: \"userId\",\n        className: \"flex-shrink-0 text-gray-300\",\n        children: \"User ID*:\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 95,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"input\", {\n        type: \"text\",\n        required: true,\n        id: \"userId\",\n        name: \"userId\",\n        className: \"p-2 ml-2 w-full bg-indigo-900 border-b border-green-500 text-gray-300 cursor-pointer focus:cursor-text focus:border-green-200 focus:outline-none\",\n        onChange: handleUserIdChange,\n        value: userId\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 98,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: \"flex mt-2 items-center\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"label\", {\n        htmlFor: \"description\",\n        className: \"flex-shrink-0 text-gray-300\",\n        children: \"Description*:\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 109,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"input\", {\n        type: \"text\",\n        required: true,\n        id: \"description\",\n        name: \"description\",\n        className: \"p-2 ml-2 w-full bg-indigo-900 border-b border-green-500 text-gray-300 cursor-pointer focus:cursor-text focus:border-green-200 focus:outline-none\",\n        onChange: handleDescriptionChange,\n        value: description\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 112,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 108,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: \"flex mt-2 items-center\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"label\", {\n        htmlFor: \"duration\",\n        className: \"flex-shrink-0 text-gray-300\",\n        children: \"Duration*:\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 123,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"input\", {\n        type: \"number\",\n        required: true,\n        id: \"duration\",\n        name: \"duration\",\n        className: \"p-2 ml-2 w-full bg-indigo-900 border-b border-green-500 text-gray-300 cursor-pointer focus:cursor-text focus:border-green-200 focus:outline-none\",\n        onChange: handleDurationChange,\n        value: duration,\n        placeholder: \"mins\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 126,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 122,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: \"flex mt-2 items-center\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"label\", {\n        htmlFor: \"date\",\n        className: \"flex-shrink-0 text-gray-300\",\n        children: \"Date:\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 138,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n        className: \"relative\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"input\", {\n          type: \"text\",\n          id: \"date\",\n          name: \"date\",\n          autoComplete: \"off\",\n          readOnly: true,\n          className: \"p-2 ml-2 w-full bg-indigo-900 border-b border-green-500 text-gray-300 cursor-pointer focus:cursor-text focus:border-green-200 focus:outline-none\",\n          onFocus: function onFocus() {\n            return setShowCalendar(true);\n          },\n          value: Object(_lib_formattedDate__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(date),\n          placeholder: \"yyyy-mm-dd\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 142,\n          columnNumber: 11\n        }, this), showCalendar && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_calendar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n          className: \"absolute ml-2 bg-green-500 rounded p-1 text-white\",\n          value: date,\n          onChange: handleDateChange,\n          tileClassName: handleTileClassName\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 154,\n          columnNumber: 13\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 141,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 137,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n      type: \"submit\",\n      className: \"rounded-full py-2 px-4 mt-6 bg-green-500 text-white font-semibold self-end hover:bg-green-400\",\n      children: isProcessing ? 'Processing...' : 'Submit'\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 163,\n      columnNumber: 7\n    }, this), error && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n      className: \"text-red-500 text-xs mt-1\",\n      children: error\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 169,\n      columnNumber: 17\n    }, this), success && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n      className: \"text-green-500 text-xs mt-1\",\n      children: success\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 170,\n      columnNumber: 19\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 89,\n    columnNumber: 5\n  }, this);\n}\n\n_s(NewExerciseForm, \"nbI9LtSWvNYNM4PPWQ8OFwPJyVg=\");\n\n_c = NewExerciseForm;\n\nvar _c;\n\n$RefreshReg$(_c, \"NewExerciseForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OZXdFeGVyY2lzZUZvcm0uanM/ZDk5MSJdLCJuYW1lcyI6WyJOZXdFeGVyY2lzZUZvcm0iLCJ1c2VTdGF0ZSIsInVzZXJJZCIsInNldFVzZXJJZCIsImRlc2NyaXB0aW9uIiwic2V0RGVzY3JpcHRpb24iLCJkdXJhdGlvbiIsInNldER1cmF0aW9uIiwiRGF0ZSIsImRhdGUiLCJzZXREYXRlIiwiZXJyb3IiLCJzZXRFcnJvciIsInN1Y2Nlc3MiLCJzZXRTdWNjZXNzIiwiaXNQcm9jZXNzaW5nIiwic2V0SXNQcm9jZXNzaW5nIiwic2hvd0NhbGVuZGFyIiwic2V0U2hvd0NhbGVuZGFyIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiZGF0YSIsInVzZXJfaWQiLCJOdW1iZXIiLCJ0b0lTT1N0cmluZyIsInNsaWNlIiwiQVBJX1VSTCIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoYW5kbGVVc2VySWRDaGFuZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZURlc2NyaXB0aW9uQ2hhbmdlIiwiaGFuZGxlRHVyYXRpb25DaGFuZ2UiLCJoYW5kbGVEYXRlQ2hhbmdlIiwiaGFuZGxlVGlsZUNsYXNzTmFtZSIsInRpbGUiLCJmb3JtYXR0ZWREYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDZSxTQUFTQSxlQUFULEdBQTJCO0FBQUE7O0FBQUEsa0JBQ1pDLHNEQUFRLENBQUMsRUFBRCxDQURJO0FBQUEsTUFDakNDLE1BRGlDO0FBQUEsTUFDekJDLFNBRHlCOztBQUFBLG1CQUVGRixzREFBUSxDQUFDLEVBQUQsQ0FGTjtBQUFBLE1BRWpDRyxXQUZpQztBQUFBLE1BRXBCQyxjQUZvQjs7QUFBQSxtQkFHUkosc0RBQVEsQ0FBQyxFQUFELENBSEE7QUFBQSxNQUdqQ0ssUUFIaUM7QUFBQSxNQUd2QkMsV0FIdUI7O0FB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QUMsS0FKZjtBQUtFLGtCQUFRLEVBQUUsSUFMWjtBQU1FLG1CQUFTLEVBQUMsa0pBTlo7QUFPRSxpQkFBTyxFQUFFO0FBQUEsbUJBQU1ZLGVBQWUsQ0FBQyxJQUFELENBQXJCO0FBQUEsV0FQWDtBQVFFLGVBQUssRUFBRXVCLGtFQUFhLENBQUNoQyxJQUFELENBUnRCO0FBU0UscUJBQVcsRUFBQztBQVRkO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsRUFZR1EsWUFBWSxpQkFDWCxxRUFBQyxzREFBRDtBQUNFLG1CQUFTLHFEQURYO0FBRUUsZUFBSyxFQUFFUixJQUZUO0FBR0Usa0JBQVEsRUFBRTZCLGdCQUhaO0FBSUUsdUJBQWEsRUFBRUM7QUFKakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFiSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFoREYsZUEwRUU7QUFDRSxVQUFJLEVBQUMsUUFEUDtBQUVFLGVBQVMsRUFBQywrRkFGWjtBQUFBLGdCQUlHeEIsWUFBWSxHQUFHLGVBQUgsR0FBcUI7QUFKcEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTFFRixFQWdGR0osS0FBSyxpQkFBSTtBQUFHLGVBQVMsRUFBQywyQkFBYjtBQUFBLGdCQUEwQ0E7QUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWhGWixFQWlGR0UsT0FBTyxpQkFBSTtBQUFHLGVBQVMsRUFBQyw2QkFBYjtBQUFBLGdCQUE0Q0E7QUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWpGZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXFGRDs7R0F6S3VCYixlOztLQUFBQSxlIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9OZXdFeGVyY2lzZUZvcm0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ2FsZW5kYXIgZnJvbSAncmVhY3QtY2FsZW5kYXInO1xuaW1wb3J0IGZvcm1hdHRlZERhdGUgZnJvbSAnLi4vbGliL2Zvcm1hdHRlZERhdGUnXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOZXdFeGVyY2lzZUZvcm0oKSB7XG4gIGNvbnN0IFt1c2VySWQsIHNldFVzZXJJZF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtkZXNjcmlwdGlvbiwgc2V0RGVzY3JpcHRpb25dID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbZHVyYXRpb24sIHNldER1cmF0aW9uXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2RhdGUsIHNldERhdGVdID0gdXNlU3RhdGUobmV3IERhdGUoKSk7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbc3VjY2Vzcywgc2V0U3VjY2Vzc10gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtpc1Byb2Nlc3NpbmcsIHNldElzUHJvY2Vzc2luZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzaG93Q2FsZW5kYXIsIHNldFNob3dDYWxlbmRhcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcbiAgICB0cnkge1xuICAgICAgc2V0SXNQcm9jZXNzaW5nKHRydWUpO1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgdXNlcl9pZDogTnVtYmVyKHVzZXJJZCksXG4gICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICBkdXJhdGlvbjogTnVtYmVyKGR1cmF0aW9uKSxcbiAgICAgICAgZGF0ZTogZGF0ZS50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKSxcbiAgICAgIH07XG4gICAgICBpZiAoZGF0YS51c2VyX2lkICYmIGRhdGEuZGVzY3JpcHRpb24gJiYgZGF0YS5kdXJhdGlvbikge1xuICAgICAgICAvLyBjcmVhdGUgbmV3IEV4ZXJjaXNlXG4gICAgICAgIGNvbnN0IEFQSV9VUkwgPVxuICAgICAgICAgICdodHRwczovL2p0LWV4ZXJjaXNlLXRyYWNrZXItbWljLmhlcm9rdWFwcC5jb20vYXBpL2V4ZXJjaXNlL2FkZCc7XG4gICAgICAgIGF3YWl0IGZldGNoKEFQSV9VUkwsIHtcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcbiAgICAgICAgfSk7XG4gICAgICAgIHNldFN1Y2Nlc3MoYEV4ZXJjaXNlIGFkZGVkIHN1Y2Nlc3NmdWxseWApO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBzZXRFcnJvcignSW50ZXJuYWwgRXJyb3InKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgc2V0VXNlcklkKCcnKTtcbiAgICAgIHNldERlc2NyaXB0aW9uKCcnKTtcbiAgICAgIHNldER1cmF0aW9uKCcnKTtcbiAgICAgIHNldERhdGUoJycpO1xuICAgICAgc2V0SXNQcm9jZXNzaW5nKGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gY29uc3QgZm9ybWF0dGVkRGF0ZSA9IChkYXRlKSA9PiB7XG4gIC8vICAgY29uc3QgcGFkID0gKG4pID0+IHtcbiAgLy8gICAgIHJldHVybiBuIDwgMTAgPyAnMCcgKyBuIDogbjtcbiAgLy8gICB9O1xuICAvLyAgIHJldHVybiAoXG4gIC8vICAgICBkYXRlLmdldFVUQ0Z1bGxZZWFyKCkgK1xuICAvLyAgICAgJy0nICtcbiAgLy8gICAgIHBhZChkYXRlLmdldE1vbnRoKCkgKyAxKSArXG4gIC8vICAgICAnLScgK1xuICAvLyAgICAgcGFkKGRhdGUuZ2V0RGF0ZSgpKVxuICAvLyAgICk7XG4gIC8vIH07XG5cbiAgY29uc3QgaGFuZGxlVXNlcklkQ2hhbmdlID0gKGUpID0+IHtcbiAgICBlcnJvciAmJiBzZXRFcnJvcignJyk7XG4gICAgc3VjY2VzcyAmJiBzZXRTdWNjZXNzKCcnKTtcbiAgICBzZXRVc2VySWQoZS50YXJnZXQudmFsdWUpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZURlc2NyaXB0aW9uQ2hhbmdlID0gKGUpID0+IHtcbiAgICBlcnJvciAmJiBzZXRFcnJvcignJyk7XG4gICAgc3VjY2VzcyAmJiBzZXRTdWNjZXNzKCcnKTtcbiAgICBzZXREZXNjcmlwdGlvbihlLnRhcmdldC52YWx1ZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRHVyYXRpb25DaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGVycm9yICYmIHNldEVycm9yKCcnKTtcbiAgICBzdWNjZXNzICYmIHNldFN1Y2Nlc3MoJycpO1xuICAgIHNldER1cmF0aW9uKGUudGFyZ2V0LnZhbHVlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVEYXRlQ2hhbmdlID0gKHZhbHVlKSA9PiB7XG4gICAgZXJyb3IgJiYgc2V0RXJyb3IoJycpO1xuICAgIHN1Y2Nlc3MgJiYgc2V0U3VjY2VzcygnJyk7XG4gICAgc2V0RGF0ZSh2YWx1ZSk7XG4gICAgc2V0U2hvd0NhbGVuZGFyKGZhbHNlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVUaWxlQ2xhc3NOYW1lID0gKHRpbGUpID0+IHtcbiAgICBpZiAoZm9ybWF0dGVkRGF0ZSh0aWxlLmRhdGUpID09PSBmb3JtYXR0ZWREYXRlKGRhdGUpKSB7XG4gICAgICByZXR1cm4gJ2JnLWluZGlnby05MDAgcm91bmRlZCc7XG4gICAgfVxuICB9O1xuICByZXR1cm4gKFxuICAgIDxmb3JtXG4gICAgICBjbGFzc05hbWU9XCJtdC00IHAtMiBtZDpmbGV4LWdyb3cgbWQ6bWwtNCBmbGV4IGZsZXgtY29sXCJcbiAgICAgIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9XG4gICAgPlxuICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZVwiPkFkZCBleGVyY2lzZXM8L2gzPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG10LTIgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwidXNlcklkXCIgY2xhc3NOYW1lPVwiZmxleC1zaHJpbmstMCB0ZXh0LWdyYXktMzAwXCI+XG4gICAgICAgICAgVXNlciBJRCo6XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgIGlkPVwidXNlcklkXCJcbiAgICAgICAgICBuYW1lPVwidXNlcklkXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJwLTIgbWwtMiB3LWZ1bGwgYmctaW5kaWdvLTkwMCBib3JkZXItYiBib3JkZXItZ3JlZW4tNTAwIHRleHQtZ3JheS0zMDAgY3Vyc29yLXBvaW50ZXIgZm9jdXM6Y3Vyc29yLXRleHQgZm9jdXM6Ym9yZGVyLWdyZWVuLTIwMCBmb2N1czpvdXRsaW5lLW5vbmVcIlxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVVc2VySWRDaGFuZ2V9XG4gICAgICAgICAgdmFsdWU9e3VzZXJJZH1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG10LTIgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZGVzY3JpcHRpb25cIiBjbGFzc05hbWU9XCJmbGV4LXNocmluay0wIHRleHQtZ3JheS0zMDBcIj5cbiAgICAgICAgICBEZXNjcmlwdGlvbio6XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgIGlkPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwicC0yIG1sLTIgdy1mdWxsIGJnLWluZGlnby05MDAgYm9yZGVyLWIgYm9yZGVyLWdyZWVuLTUwMCB0ZXh0LWdyYXktMzAwIGN1cnNvci1wb2ludGVyIGZvY3VzOmN1cnNvci10ZXh0IGZvY3VzOmJvcmRlci1ncmVlbi0yMDAgZm9jdXM6b3V0bGluZS1ub25lXCJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlRGVzY3JpcHRpb25DaGFuZ2V9XG4gICAgICAgICAgdmFsdWU9e2Rlc2NyaXB0aW9ufVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbXQtMiBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJkdXJhdGlvblwiIGNsYXNzTmFtZT1cImZsZXgtc2hyaW5rLTAgdGV4dC1ncmF5LTMwMFwiPlxuICAgICAgICAgIER1cmF0aW9uKjpcbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICBpZD1cImR1cmF0aW9uXCJcbiAgICAgICAgICBuYW1lPVwiZHVyYXRpb25cIlxuICAgICAgICAgIGNsYXNzTmFtZT1cInAtMiBtbC0yIHctZnVsbCBiZy1pbmRpZ28tOTAwIGJvcmRlci1iIGJvcmRlci1ncmVlbi01MDAgdGV4dC1ncmF5LTMwMCBjdXJzb3ItcG9pbnRlciBmb2N1czpjdXJzb3ItdGV4dCBmb2N1czpib3JkZXItZ3JlZW4tMjAwIGZvY3VzOm91dGxpbmUtbm9uZVwiXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUR1cmF0aW9uQ2hhbmdlfVxuICAgICAgICAgIHZhbHVlPXtkdXJhdGlvbn1cbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIm1pbnNcIlxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbXQtMiBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJkYXRlXCIgY2xhc3NOYW1lPVwiZmxleC1zaHJpbmstMCB0ZXh0LWdyYXktMzAwXCI+XG4gICAgICAgICAgRGF0ZTpcbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgaWQ9XCJkYXRlXCJcbiAgICAgICAgICAgIG5hbWU9XCJkYXRlXCJcbiAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXG4gICAgICAgICAgICByZWFkT25seT17dHJ1ZX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtMiBtbC0yIHctZnVsbCBiZy1pbmRpZ28tOTAwIGJvcmRlci1iIGJvcmRlci1ncmVlbi01MDAgdGV4dC1ncmF5LTMwMCBjdXJzb3ItcG9pbnRlciBmb2N1czpjdXJzb3ItdGV4dCBmb2N1czpib3JkZXItZ3JlZW4tMjAwIGZvY3VzOm91dGxpbmUtbm9uZVwiXG4gICAgICAgICAgICBvbkZvY3VzPXsoKSA9PiBzZXRTaG93Q2FsZW5kYXIodHJ1ZSl9XG4gICAgICAgICAgICB2YWx1ZT17Zm9ybWF0dGVkRGF0ZShkYXRlKX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwieXl5eS1tbS1kZFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICB7c2hvd0NhbGVuZGFyICYmIChcbiAgICAgICAgICAgIDxDYWxlbmRhclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BhYnNvbHV0ZSBtbC0yIGJnLWdyZWVuLTUwMCByb3VuZGVkIHAtMSB0ZXh0LXdoaXRlYH1cbiAgICAgICAgICAgICAgdmFsdWU9e2RhdGV9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVEYXRlQ2hhbmdlfVxuICAgICAgICAgICAgICB0aWxlQ2xhc3NOYW1lPXtoYW5kbGVUaWxlQ2xhc3NOYW1lfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGJ1dHRvblxuICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsIHB5LTIgcHgtNCBtdC02IGJnLWdyZWVuLTUwMCB0ZXh0LXdoaXRlIGZvbnQtc2VtaWJvbGQgc2VsZi1lbmQgaG92ZXI6YmctZ3JlZW4tNDAwXCJcbiAgICAgID5cbiAgICAgICAge2lzUHJvY2Vzc2luZyA/ICdQcm9jZXNzaW5nLi4uJyA6ICdTdWJtaXQnfVxuICAgICAgPC9idXR0b24+XG4gICAgICB7ZXJyb3IgJiYgPHAgY2xhc3NOYW1lPVwidGV4dC1yZWQtNTAwIHRleHQteHMgbXQtMVwiPntlcnJvcn08L3A+fVxuICAgICAge3N1Y2Nlc3MgJiYgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmVlbi01MDAgdGV4dC14cyBtdC0xXCI+e3N1Y2Nlc3N9PC9wPn1cbiAgICA8L2Zvcm0+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/NewExerciseForm.js\n");

/***/ }),

/***/ "./lib/formattedDate.js":
/*!******************************!*\
  !*** ./lib/formattedDate.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {var formattedDate = function formattedDate(date) {\n  var pad = function pad(n) {\n    return n < 10 ? '0' + n : n;\n  };\n\n  return date.getUTCFullYear() + '-' + pad(date.getMonth() + 1) + '-' + pad(date.getDate());\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (formattedDate);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2Zvcm1hdHRlZERhdGUuanM/ZWM3NSJdLCJuYW1lcyI6WyJmb3JtYXR0ZWREYXRlIiwiZGF0ZSIsInBhZCIsIm4iLCJnZXRVVENGdWxsWWVhciIsImdldE1vbnRoIiwiZ2V0RGF0ZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxrREFBTUEsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDQyxJQUFELEVBQVU7QUFDNUIsTUFBTUMsR0FBRyxHQUFHLFNBQU5BLEdBQU0sQ0FBQ0MsQ0FBRCxFQUFPO0FBQ2pCLFdBQU9BLENBQUMsR0FBRyxFQUFKLEdBQVMsTUFBTUEsQ0FBZixHQUFtQkEsQ0FBMUI7QUFDRCxHQUZEOztBQUdBLFNBQ0VGLElBQUksQ0FBQ0csY0FBTCxLQUNBLEdBREEsR0FFQUYsR0FBRyxDQUFDRCxJQUFJLENBQUNJLFFBQUwsS0FBa0IsQ0FBbkIsQ0FGSCxHQUdBLEdBSEEsR0FJQUgsR0FBRyxDQUFDRCxJQUFJLENBQUNLLE9BQUwsRUFBRCxDQUxMO0FBT0QsQ0FYSDs7QUFZaUJOLDRFQUFmIiwiZmlsZSI6Ii4vbGliL2Zvcm1hdHRlZERhdGUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBmb3JtYXR0ZWREYXRlID0gKGRhdGUpID0+IHtcbiAgICBjb25zdCBwYWQgPSAobikgPT4ge1xuICAgICAgcmV0dXJuIG4gPCAxMCA/ICcwJyArIG4gOiBuO1xuICAgIH07XG4gICAgcmV0dXJuIChcbiAgICAgIGRhdGUuZ2V0VVRDRnVsbFllYXIoKSArXG4gICAgICAnLScgK1xuICAgICAgcGFkKGRhdGUuZ2V0TW9udGgoKSArIDEpICtcbiAgICAgICctJyArXG4gICAgICBwYWQoZGF0ZS5nZXREYXRlKCkpXG4gICAgKTtcbiAgfTtcbiAgZXhwb3J0IGRlZmF1bHQgZm9ybWF0dGVkRGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/formattedDate.js\n");

/***/ })

})