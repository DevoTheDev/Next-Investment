"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(root)/invest/page",{

/***/ "(app-pages-browser)/./components/contexts/SelectionContext.tsx":
/*!**************************************************!*\
  !*** ./components/contexts/SelectionContext.tsx ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SelectionProvider: function() { return /* binding */ SelectionProvider; },\n/* harmony export */   useSelection: function() { return /* binding */ useSelection; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ SelectionProvider,useSelection auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\nconst SelectionContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(undefined);\nconst SelectionProvider = (param)=>{\n    let { children } = param;\n    _s();\n    const [selectedItem, setSelectedItem] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined);\n    const value = {\n        selectedItem,\n        setSelectedItem\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SelectionContext.Provider, {\n        value: value,\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/devonfennell/Desktop/next-investment/frontend/components/contexts/SelectionContext.tsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SelectionProvider, \"MESchzW+ztPKXOkQEmljAHKZBhw=\");\n_c = SelectionProvider;\nconst useSelection = ()=>{\n    _s1();\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(SelectionContext);\n    if (!context) {\n        throw new Error(\"useSelection must be used within a SelectionProvider\");\n    }\n    return context;\n};\n_s1(useSelection, \"b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=\");\nvar _c;\n$RefreshReg$(_c, \"SelectionProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvY29udGV4dHMvU2VsZWN0aW9uQ29udGV4dC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUM4RTtBQU85RSxNQUFNSSxpQ0FBbUJILG9EQUFhQSxDQUFtQ0k7QUFNbEUsTUFBTUMsb0JBQXNEO1FBQUMsRUFBRUMsUUFBUSxFQUFFOztJQUM5RSxNQUFNLENBQUNDLGNBQWNDLGdCQUFnQixHQUFHTiwrQ0FBUUEsQ0FBa0JFO0lBR2xFLE1BQU1LLFFBQVE7UUFDWkY7UUFDQUM7SUFDRjtJQUVBLHFCQUNFLDhEQUFDTCxpQkFBaUJPLFFBQVE7UUFBQ0QsT0FBT0E7a0JBQy9CSDs7Ozs7O0FBR1AsRUFBRTtHQWRXRDtLQUFBQTtBQWdCTixNQUFNTSxlQUFlOztJQUMxQixNQUFNQyxVQUFVWCxpREFBVUEsQ0FBQ0U7SUFDM0IsSUFBSSxDQUFDUyxTQUFTO1FBQ1osTUFBTSxJQUFJQyxNQUFNO0lBQ2xCO0lBQ0EsT0FBT0Q7QUFDVCxFQUFFO0lBTldEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvY29udGV4dHMvU2VsZWN0aW9uQ29udGV4dC50c3g/NjgxYyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VTdGF0ZSwgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnO1xuXG5pbnRlcmZhY2UgU2VsZWN0aW9uQ29udGV4dFR5cGUge1xuICBzZWxlY3RlZEl0ZW06IGFueTtcbiAgc2V0U2VsZWN0ZWRJdGVtOiBSZWFjdC5EaXNwYXRjaDxhbnk+XG59XG5cbmNvbnN0IFNlbGVjdGlvbkNvbnRleHQgPSBjcmVhdGVDb250ZXh0PFNlbGVjdGlvbkNvbnRleHRUeXBlIHwgdW5kZWZpbmVkPih1bmRlZmluZWQpO1xuXG5pbnRlcmZhY2UgU2VsZWN0aW9uUHJvdmlkZXJQcm9wcyB7XG4gIGNoaWxkcmVuOiBSZWFjdE5vZGU7XG59XG5cbmV4cG9ydCBjb25zdCBTZWxlY3Rpb25Qcm92aWRlcjogUmVhY3QuRkM8U2VsZWN0aW9uUHJvdmlkZXJQcm9wcz4gPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IFtzZWxlY3RlZEl0ZW0sIHNldFNlbGVjdGVkSXRlbV0gPSB1c2VTdGF0ZTxhbnkgfCB1bmRlZmluZWQ+KHVuZGVmaW5lZCk7XG5cblxuICBjb25zdCB2YWx1ZSA9IHtcbiAgICBzZWxlY3RlZEl0ZW0sXG4gICAgc2V0U2VsZWN0ZWRJdGVtXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8U2VsZWN0aW9uQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17dmFsdWV9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvU2VsZWN0aW9uQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCB1c2VTZWxlY3Rpb24gPSAoKTogU2VsZWN0aW9uQ29udGV4dFR5cGUgPT4ge1xuICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChTZWxlY3Rpb25Db250ZXh0KTtcbiAgaWYgKCFjb250ZXh0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCd1c2VTZWxlY3Rpb24gbXVzdCBiZSB1c2VkIHdpdGhpbiBhIFNlbGVjdGlvblByb3ZpZGVyJyk7XG4gIH1cbiAgcmV0dXJuIGNvbnRleHQ7XG59O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsIlNlbGVjdGlvbkNvbnRleHQiLCJ1bmRlZmluZWQiLCJTZWxlY3Rpb25Qcm92aWRlciIsImNoaWxkcmVuIiwic2VsZWN0ZWRJdGVtIiwic2V0U2VsZWN0ZWRJdGVtIiwidmFsdWUiLCJQcm92aWRlciIsInVzZVNlbGVjdGlvbiIsImNvbnRleHQiLCJFcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/contexts/SelectionContext.tsx\n"));

/***/ })

});