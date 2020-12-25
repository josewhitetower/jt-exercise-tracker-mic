webpackHotUpdate_N_E("pages/index",{

/***/ "./components/NewExerciseForm.js":
/*!***************************************!*\
  !*** ./components/NewExerciseForm.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return NewExerciseForm; });\n/* harmony import */ var _home_jose_Documentos_Sitios_exercise_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_jose_Documentos_Sitios_exercise_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_jose_Documentos_Sitios_exercise_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_jose_Documentos_Sitios_exercise_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_calendar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-calendar */ \"./node_modules/react-calendar/dist/esm/index.js\");\n\n\n\n\nvar _jsxFileName = \"/home/jose/Documentos/Sitios/exercise-frontend/components/NewExerciseForm.js\",\n    _s = $RefreshSig$();\n\n\n\nfunction NewExerciseForm() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(''),\n      userId = _useState[0],\n      setUserId = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(''),\n      description = _useState2[0],\n      setDescription = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(''),\n      duration = _useState3[0],\n      setDuration = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(new Date()),\n      date = _useState4[0],\n      setDate = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(''),\n      error = _useState5[0],\n      setError = _useState5[1];\n\n  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(''),\n      success = _useState6[0],\n      setSuccess = _useState6[1];\n\n  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      isProcessing = _useState7[0],\n      setIsProcessing = _useState7[1];\n\n  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      showCalendar = _useState8[0],\n      setShowCalendar = _useState8[1];\n\n  var handleSubmit = /*#__PURE__*/function () {\n    var _ref = Object(_home_jose_Documentos_Sitios_exercise_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_home_jose_Documentos_Sitios_exercise_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {\n      var data, API_URL;\n      return _home_jose_Documentos_Sitios_exercise_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.prev = 0;\n              setIsProcessing(true);\n              e.preventDefault();\n              data = {\n                user_id: Number(userId),\n                description: description,\n                duration: Number(duration),\n                date: date.toISOString().slice(0, 10)\n              };\n\n              if (!(data.user_id && data.description && data.duration)) {\n                _context.next = 9;\n                break;\n              }\n\n              // create new Exercise\n              API_URL = 'https://jt-exercise-tracker-mic.herokuapp.com/api/exercise/add';\n              _context.next = 8;\n              return fetch(API_URL, {\n                method: 'POST',\n                body: JSON.stringify(data)\n              });\n\n            case 8:\n              setSuccess(\"Exercise added successfully\");\n\n            case 9:\n              _context.next = 14;\n              break;\n\n            case 11:\n              _context.prev = 11;\n              _context.t0 = _context[\"catch\"](0);\n              setError('Internal Error');\n\n            case 14:\n              _context.prev = 14;\n              setUserId('');\n              setDescription('');\n              setDuration('');\n              setDate('');\n              setIsProcessing(false);\n              return _context.finish(14);\n\n            case 21:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[0, 11, 14, 21]]);\n    }));\n\n    return function handleSubmit(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  var formattedDate = function formattedDate() {\n    return date.toLocaleDateString(\"en-GB\", {\n      // you can skip the first argument\n      year: \"numeric\",\n      month: \"2-digit\",\n      day: \"2-digit\"\n    });\n  };\n\n  var handleUserIdChange = function handleUserIdChange(e) {\n    error && setError('');\n    success && setSuccess('');\n    setUserId(e.target.value);\n  };\n\n  var handleDescriptionChange = function handleDescriptionChange(e) {\n    error && setError('');\n    success && setSuccess('');\n    setDescription(e.target.value);\n  };\n\n  var handleDurationChange = function handleDurationChange(e) {\n    error && setError('');\n    success && setSuccess('');\n    setDuration(e.target.value);\n  };\n\n  var handleDateChange = function handleDateChange(value) {\n    error && setError('');\n    success && setSuccess('');\n    console.log(value);\n    setDate(value);\n    setShowCalendar(false);\n  };\n\n  var handleTileClassName = function handleTileClassName(tile) {\n    if (tile.date.toString() === date.toString()) {\n      return 'bg-indigo-900 rounded';\n    }\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"form\", {\n    className: \"mt-4 p-2 md:flex-grow md:ml-4 flex flex-col\",\n    onSubmit: handleSubmit,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h3\", {\n      className: \"font-semibold text-white\",\n      children: \"Add exercises\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: \"flex mt-2 items-center\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"label\", {\n        htmlFor: \"userId\",\n        className: \"flex-shrink-0 text-gray-300\",\n        children: \"User ID*:\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 90,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"input\", {\n        type: \"text\",\n        required: true,\n        id: \"userId\",\n        name: \"userId\",\n        className: \"p-2 ml-2 w-full bg-indigo-900 border-b border-green-500 text-gray-300 cursor-pointer focus:cursor-text focus:border-green-200 focus:outline-none\",\n        onChange: handleUserIdChange,\n        value: userId\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 93,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: \"flex mt-2 items-center\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"label\", {\n        htmlFor: \"description\",\n        className: \"flex-shrink-0 text-gray-300\",\n        children: \"Description*:\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 104,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"input\", {\n        type: \"text\",\n        required: true,\n        id: \"description\",\n        name: \"description\",\n        className: \"p-2 ml-2 w-full bg-indigo-900 border-b border-green-500 text-gray-300 cursor-pointer focus:cursor-text focus:border-green-200 focus:outline-none\",\n        onChange: handleDescriptionChange,\n        value: description\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 107,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: \"flex mt-2 items-center\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"label\", {\n        htmlFor: \"duration\",\n        className: \"flex-shrink-0 text-gray-300\",\n        children: \"Duration*:\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 118,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"input\", {\n        type: \"number\",\n        required: true,\n        id: \"duration\",\n        name: \"duration\",\n        className: \"p-2 ml-2 w-full bg-indigo-900 border-b border-green-500 text-gray-300 cursor-pointer focus:cursor-text focus:border-green-200 focus:outline-none\",\n        onChange: handleDurationChange,\n        value: duration,\n        placeholder: \"mins\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 121,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 117,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: \"flex mt-2 items-center\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"label\", {\n        htmlFor: \"date\",\n        className: \"flex-shrink-0 text-gray-300\",\n        children: \"Date:\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 133,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n        className: \"relative\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"input\", {\n          type: \"text\",\n          id: \"date\",\n          name: \"date\",\n          autoComplete: \"off\",\n          readOnly: true,\n          className: \"p-2 ml-2 w-full bg-indigo-900 border-b border-green-500 text-gray-300 cursor-pointer focus:cursor-text focus:border-green-200 focus:outline-none\",\n          onFocus: function onFocus() {\n            return setShowCalendar(true);\n          },\n          value: formattedDate(),\n          placeholder: \"yyyy-mm-dd\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 137,\n          columnNumber: 11\n        }, this), showCalendar && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_calendar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n          className: \"absolute ml-2 bg-green-500 rounded p-1 text-white\",\n          value: date,\n          onChange: handleDateChange,\n          tileClassName: handleTileClassName\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 149,\n          columnNumber: 13\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 136,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 132,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n      type: \"submit\",\n      className: \"rounded-full py-2 px-4 mt-6 bg-green-500 text-white font-semibold self-end hover:bg-green-400\",\n      children: isProcessing ? 'Processing...' : 'Submit'\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 158,\n      columnNumber: 7\n    }, this), error && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n      className: \"text-red-500 text-xs mt-1\",\n      children: error\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 164,\n      columnNumber: 17\n    }, this), success && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n      className: \"text-green-500 text-xs mt-1\",\n      children: success\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 165,\n      columnNumber: 19\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 84,\n    columnNumber: 5\n  }, this);\n}\n\n_s(NewExerciseForm, \"nbI9LtSWvNYNM4PPWQ8OFwPJyVg=\");\n\n_c = NewExerciseForm;\n\nvar _c;\n\n$RefreshReg$(_c, \"NewExerciseForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OZXdFeGVyY2lzZUZvcm0uanM/ZDk5MSJdLCJuYW1lcyI6WyJOZXdFeGVyY2lzZUZvcm0iLCJ1c2VTdGF0ZSIsInVzZXJJZCIsInNldFVzZXJJZCIsImRlc2NyaXB0aW9uIiwic2V0RGVzY3JpcHRpb24iLCJkdXJhdGlvbiIsInNldER1cmF0aW9uIiwiRGF0ZSIsImRhdGUiLCJzZXREYXRlIiwiZXJyb3IiLCJzZXRFcnJvciIsInN1Y2Nlc3MiLCJzZXRTdWNjZXNzIiwiaXNQcm9jZXNzaW5nIiwic2V0SXNQcm9jZXNzaW5nIiwic2hvd0NhbGVuZGFyIiwic2V0U2hvd0NhbGVuZGFyIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiZGF0YSIsInVzZXJfaWQiLCJOdW1iZXIiLCJ0b0lTT1N0cmluZyIsInNsaWNlIiwiQVBJX1VSTCIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJmb3JtYXR0ZWREYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwieWVhciIsIm1vbnRoIiwiZGF5IiwiaGFuZGxlVXNlcklkQ2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVEZXNjcmlwdGlvbkNoYW5nZSIsImhhbmRsZUR1cmF0aW9uQ2hhbmdlIiwiaGFuZGxlRGF0ZUNoYW5nZSIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVUaWxlQ2xhc3NOYW1lIiwidGlsZSIsInRvU3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDZSxTQUFTQSxlQUFULEdBQTJCO0FBQUE7O0FBQUEsa0JBQ1pDLHNEQUFRLENBQUMsRUFBRCxDQURJO0FBQUEsTUFDakNDLE1BRGlDO0FBQUEsTUFDekJDLFNBRHlCOztBQUFBLG1CQUVGRixzREFBUSxDQUFDLEVBQUQsQ0FGTjtBQUFBLE1BRWpDRyxXQUZpQztBQUFBLE1BRXBCQyxjQUZvQjs7QUFBQSxtQkFH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O0FBQUEsVUFERjtBQXFGRDs7R0FyS3VCYixlOztLQUFBQSxlIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9OZXdFeGVyY2lzZUZvcm0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ2FsZW5kYXIgZnJvbSAncmVhY3QtY2FsZW5kYXInO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmV3RXhlcmNpc2VGb3JtKCkge1xuICBjb25zdCBbdXNlcklkLCBzZXRVc2VySWRdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbZGVzY3JpcHRpb24sIHNldERlc2NyaXB0aW9uXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2R1cmF0aW9uLCBzZXREdXJhdGlvbl0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtkYXRlLCBzZXREYXRlXSA9IHVzZVN0YXRlKG5ldyBEYXRlKCkpO1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3N1Y2Nlc3MsIHNldFN1Y2Nlc3NdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbaXNQcm9jZXNzaW5nLCBzZXRJc1Byb2Nlc3NpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbc2hvd0NhbGVuZGFyLCBzZXRTaG93Q2FsZW5kYXJdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIHNldElzUHJvY2Vzc2luZyh0cnVlKTtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgIHVzZXJfaWQ6IE51bWJlcih1c2VySWQpLFxuICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgZHVyYXRpb246IE51bWJlcihkdXJhdGlvbiksXG4gICAgICAgIGRhdGU6IGRhdGUudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCksXG4gICAgICB9O1xuICAgICAgaWYgKGRhdGEudXNlcl9pZCAmJiBkYXRhLmRlc2NyaXB0aW9uICYmIGRhdGEuZHVyYXRpb24pIHtcbiAgICAgICAgLy8gY3JlYXRlIG5ldyBFeGVyY2lzZVxuICAgICAgICBjb25zdCBBUElfVVJMID1cbiAgICAgICAgICAnaHR0cHM6Ly9qdC1leGVyY2lzZS10cmFja2VyLW1pYy5oZXJva3VhcHAuY29tL2FwaS9leGVyY2lzZS9hZGQnO1xuICAgICAgICBhd2FpdCBmZXRjaChBUElfVVJMLCB7XG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXG4gICAgICAgIH0pO1xuICAgICAgICBzZXRTdWNjZXNzKGBFeGVyY2lzZSBhZGRlZCBzdWNjZXNzZnVsbHlgKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgc2V0RXJyb3IoJ0ludGVybmFsIEVycm9yJyk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHNldFVzZXJJZCgnJyk7XG4gICAgICBzZXREZXNjcmlwdGlvbignJyk7XG4gICAgICBzZXREdXJhdGlvbignJyk7XG4gICAgICBzZXREYXRlKCcnKTtcbiAgICAgIHNldElzUHJvY2Vzc2luZyhmYWxzZSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGZvcm1hdHRlZERhdGUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGRhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKFwiZW4tR0JcIiwgeyAvLyB5b3UgY2FuIHNraXAgdGhlIGZpcnN0IGFyZ3VtZW50XG4gICAgICB5ZWFyOiBcIm51bWVyaWNcIixcbiAgICAgIG1vbnRoOiBcIjItZGlnaXRcIixcbiAgICAgIGRheTogXCIyLWRpZ2l0XCIsXG4gICAgfSk7XG4gIH1cblxuICBjb25zdCBoYW5kbGVVc2VySWRDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGVycm9yICYmIHNldEVycm9yKCcnKTtcbiAgICBzdWNjZXNzICYmIHNldFN1Y2Nlc3MoJycpO1xuICAgIHNldFVzZXJJZChlLnRhcmdldC52YWx1ZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRGVzY3JpcHRpb25DaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGVycm9yICYmIHNldEVycm9yKCcnKTtcbiAgICBzdWNjZXNzICYmIHNldFN1Y2Nlc3MoJycpO1xuICAgIHNldERlc2NyaXB0aW9uKGUudGFyZ2V0LnZhbHVlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVEdXJhdGlvbkNoYW5nZSA9IChlKSA9PiB7XG4gICAgZXJyb3IgJiYgc2V0RXJyb3IoJycpO1xuICAgIHN1Y2Nlc3MgJiYgc2V0U3VjY2VzcygnJyk7XG4gICAgc2V0RHVyYXRpb24oZS50YXJnZXQudmFsdWUpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZURhdGVDaGFuZ2UgPSAodmFsdWUpID0+IHtcbiAgICBlcnJvciAmJiBzZXRFcnJvcignJyk7XG4gICAgc3VjY2VzcyAmJiBzZXRTdWNjZXNzKCcnKTtcbiAgICBjb25zb2xlLmxvZyh2YWx1ZSlcbiAgICBzZXREYXRlKHZhbHVlKTtcbiAgICBzZXRTaG93Q2FsZW5kYXIoZmFsc2UpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVRpbGVDbGFzc05hbWUgPSAodGlsZSkgPT4ge1xuICAgIGlmICh0aWxlLmRhdGUudG9TdHJpbmcoKSA9PT0gZGF0ZS50b1N0cmluZygpKSB7XG4gICAgICByZXR1cm4gJ2JnLWluZGlnby05MDAgcm91bmRlZCc7XG4gICAgfVxuICB9O1xuICByZXR1cm4gKFxuICAgIDxmb3JtXG4gICAgICBjbGFzc05hbWU9XCJtdC00IHAtMiBtZDpmbGV4LWdyb3cgbWQ6bWwtNCBmbGV4IGZsZXgtY29sXCJcbiAgICAgIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9XG4gICAgPlxuICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZVwiPkFkZCBleGVyY2lzZXM8L2gzPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG10LTIgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwidXNlcklkXCIgY2xhc3NOYW1lPVwiZmxleC1zaHJpbmstMCB0ZXh0LWdyYXktMzAwXCI+XG4gICAgICAgICAgVXNlciBJRCo6XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgIGlkPVwidXNlcklkXCJcbiAgICAgICAgICBuYW1lPVwidXNlcklkXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJwLTIgbWwtMiB3LWZ1bGwgYmctaW5kaWdvLTkwMCBib3JkZXItYiBib3JkZXItZ3JlZW4tNTAwIHRleHQtZ3JheS0zMDAgY3Vyc29yLXBvaW50ZXIgZm9jdXM6Y3Vyc29yLXRleHQgZm9jdXM6Ym9yZGVyLWdyZWVuLTIwMCBmb2N1czpvdXRsaW5lLW5vbmVcIlxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVVc2VySWRDaGFuZ2V9XG4gICAgICAgICAgdmFsdWU9e3VzZXJJZH1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG10LTIgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZGVzY3JpcHRpb25cIiBjbGFzc05hbWU9XCJmbGV4LXNocmluay0wIHRleHQtZ3JheS0zMDBcIj5cbiAgICAgICAgICBEZXNjcmlwdGlvbio6XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgIGlkPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwicC0yIG1sLTIgdy1mdWxsIGJnLWluZGlnby05MDAgYm9yZGVyLWIgYm9yZGVyLWdyZWVuLTUwMCB0ZXh0LWdyYXktMzAwIGN1cnNvci1wb2ludGVyIGZvY3VzOmN1cnNvci10ZXh0IGZvY3VzOmJvcmRlci1ncmVlbi0yMDAgZm9jdXM6b3V0bGluZS1ub25lXCJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlRGVzY3JpcHRpb25DaGFuZ2V9XG4gICAgICAgICAgdmFsdWU9e2Rlc2NyaXB0aW9ufVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbXQtMiBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJkdXJhdGlvblwiIGNsYXNzTmFtZT1cImZsZXgtc2hyaW5rLTAgdGV4dC1ncmF5LTMwMFwiPlxuICAgICAgICAgIER1cmF0aW9uKjpcbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICBpZD1cImR1cmF0aW9uXCJcbiAgICAgICAgICBuYW1lPVwiZHVyYXRpb25cIlxuICAgICAgICAgIGNsYXNzTmFtZT1cInAtMiBtbC0yIHctZnVsbCBiZy1pbmRpZ28tOTAwIGJvcmRlci1iIGJvcmRlci1ncmVlbi01MDAgdGV4dC1ncmF5LTMwMCBjdXJzb3ItcG9pbnRlciBmb2N1czpjdXJzb3ItdGV4dCBmb2N1czpib3JkZXItZ3JlZW4tMjAwIGZvY3VzOm91dGxpbmUtbm9uZVwiXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUR1cmF0aW9uQ2hhbmdlfVxuICAgICAgICAgIHZhbHVlPXtkdXJhdGlvbn1cbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIm1pbnNcIlxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbXQtMiBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJkYXRlXCIgY2xhc3NOYW1lPVwiZmxleC1zaHJpbmstMCB0ZXh0LWdyYXktMzAwXCI+XG4gICAgICAgICAgRGF0ZTpcbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgaWQ9XCJkYXRlXCJcbiAgICAgICAgICAgIG5hbWU9XCJkYXRlXCJcbiAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXG4gICAgICAgICAgICByZWFkT25seT17dHJ1ZX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtMiBtbC0yIHctZnVsbCBiZy1pbmRpZ28tOTAwIGJvcmRlci1iIGJvcmRlci1ncmVlbi01MDAgdGV4dC1ncmF5LTMwMCBjdXJzb3ItcG9pbnRlciBmb2N1czpjdXJzb3ItdGV4dCBmb2N1czpib3JkZXItZ3JlZW4tMjAwIGZvY3VzOm91dGxpbmUtbm9uZVwiXG4gICAgICAgICAgICBvbkZvY3VzPXsoKSA9PiBzZXRTaG93Q2FsZW5kYXIodHJ1ZSl9XG4gICAgICAgICAgICB2YWx1ZT17Zm9ybWF0dGVkRGF0ZSgpfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJ5eXl5LW1tLWRkXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIHtzaG93Q2FsZW5kYXIgJiYgKFxuICAgICAgICAgICAgPENhbGVuZGFyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YGFic29sdXRlIG1sLTIgYmctZ3JlZW4tNTAwIHJvdW5kZWQgcC0xIHRleHQtd2hpdGVgfVxuICAgICAgICAgICAgICB2YWx1ZT17ZGF0ZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZURhdGVDaGFuZ2V9XG4gICAgICAgICAgICAgIHRpbGVDbGFzc05hbWU9e2hhbmRsZVRpbGVDbGFzc05hbWV9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWZ1bGwgcHktMiBweC00IG10LTYgYmctZ3JlZW4tNTAwIHRleHQtd2hpdGUgZm9udC1zZW1pYm9sZCBzZWxmLWVuZCBob3ZlcjpiZy1ncmVlbi00MDBcIlxuICAgICAgPlxuICAgICAgICB7aXNQcm9jZXNzaW5nID8gJ1Byb2Nlc3NpbmcuLi4nIDogJ1N1Ym1pdCd9XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIHtlcnJvciAmJiA8cCBjbGFzc05hbWU9XCJ0ZXh0LXJlZC01MDAgdGV4dC14cyBtdC0xXCI+e2Vycm9yfTwvcD59XG4gICAgICB7c3VjY2VzcyAmJiA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyZWVuLTUwMCB0ZXh0LXhzIG10LTFcIj57c3VjY2Vzc308L3A+fVxuICAgIDwvZm9ybT5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/NewExerciseForm.js\n");

/***/ })

})