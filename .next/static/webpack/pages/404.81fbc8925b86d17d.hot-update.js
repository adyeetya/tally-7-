"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/404",{

/***/ "./components/Layout/Footer/ScrollImage.tsx":
/*!**************************************************!*\
  !*** ./components/Layout/Footer/ScrollImage.tsx ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-spring */ \"./node_modules/react-spring/dist/react-spring.modern.mjs\");\n/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intersection-observer */ \"./node_modules/react-intersection-observer/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst ScrollFadeImage = ()=>{\n    _s();\n    const [ref, inView] = (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__.useInView)({\n        triggerOnce: true\n    });\n    const flashIn = (0,react_spring__WEBPACK_IMPORTED_MODULE_2__.useSpring)({\n        opacity: inView ? 1 : 0,\n        transform: inView ? \"scale(1) rotate(0deg)\" : \"scale(0.8) rotate(20deg)\",\n        from: {\n            opacity: 0,\n            transform: \"scale(0.8) rotate(20deg)\"\n        },\n        config: {\n            tension: 280,\n            friction: 20\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: ref,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_spring__WEBPACK_IMPORTED_MODULE_2__.animated.img, {\n            src: \"/images/footer-rock.png\",\n            width: 200,\n            style: {\n                filter: \"invert(0)\",\n                marginTop: \"240px\",\n                ...flashIn\n            }\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\91840\\\\Desktop\\\\tally6\\\\components\\\\Layout\\\\Footer\\\\ScrollImage.tsx\",\n            lineNumber: 19,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\91840\\\\Desktop\\\\tally6\\\\components\\\\Layout\\\\Footer\\\\ScrollImage.tsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ScrollFadeImage, \"rdRkxjnGxBGL85hKQvZyZnY1Cns=\", false, function() {\n    return [\n        react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__.useInView,\n        react_spring__WEBPACK_IMPORTED_MODULE_2__.useSpring\n    ];\n});\n_c = ScrollFadeImage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ScrollFadeImage);\nvar _c;\n$RefreshReg$(_c, \"ScrollFadeImage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheW91dC9Gb290ZXIvU2Nyb2xsSW1hZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUF5QjtBQUN5QjtBQUNLO0FBRXZELE1BQU1JLGtCQUFrQjs7SUFDdEIsTUFBTSxDQUFDQyxLQUFLQyxPQUFPLEdBQUdILHNFQUFTQSxDQUFDO1FBQzlCSSxhQUFhO0lBQ2Y7SUFFQSxNQUFNQyxVQUFVUCx1REFBU0EsQ0FBQztRQUN4QlEsU0FBU0gsU0FBUyxJQUFJO1FBQ3RCSSxXQUFXSixTQUFTLDBCQUEwQjtRQUM5Q0ssTUFBTTtZQUFFRixTQUFTO1lBQUdDLFdBQVc7UUFBMkI7UUFDMURFLFFBQVE7WUFBRUMsU0FBUztZQUFLQyxVQUFVO1FBQUc7SUFDdkM7SUFFQSxxQkFDRSw4REFBQ0M7UUFBSVYsS0FBS0E7a0JBQ1IsNEVBQUNILGtEQUFRQSxDQUFDYyxHQUFHO1lBQ1hDLEtBQUk7WUFDSkMsT0FBTztZQUNQQyxPQUFPO2dCQUNMQyxRQUFRO2dCQUNSQyxXQUFXO2dCQUNYLEdBQUdiLE9BQU87WUFDWjs7Ozs7Ozs7Ozs7QUFJUjtHQXpCTUo7O1FBQ2tCRCxrRUFBU0E7UUFJZkYsbURBQVNBOzs7S0FMckJHO0FBMkJOLCtEQUFlQSxlQUFlQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTGF5b3V0L0Zvb3Rlci9TY3JvbGxJbWFnZS50c3g/YTk4NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVNwcmluZywgYW5pbWF0ZWQgfSBmcm9tICdyZWFjdC1zcHJpbmcnXHJcbmltcG9ydCB7IHVzZUluVmlldyB9IGZyb20gJ3JlYWN0LWludGVyc2VjdGlvbi1vYnNlcnZlcidcclxuXHJcbmNvbnN0IFNjcm9sbEZhZGVJbWFnZSA9ICgpID0+IHtcclxuICBjb25zdCBbcmVmLCBpblZpZXddID0gdXNlSW5WaWV3KHtcclxuICAgIHRyaWdnZXJPbmNlOiB0cnVlLFxyXG4gIH0pXHJcblxyXG4gIGNvbnN0IGZsYXNoSW4gPSB1c2VTcHJpbmcoe1xyXG4gICAgb3BhY2l0eTogaW5WaWV3ID8gMSA6IDAsXHJcbiAgICB0cmFuc2Zvcm06IGluVmlldyA/ICdzY2FsZSgxKSByb3RhdGUoMGRlZyknIDogJ3NjYWxlKDAuOCkgcm90YXRlKDIwZGVnKScsXHJcbiAgICBmcm9tOiB7IG9wYWNpdHk6IDAsIHRyYW5zZm9ybTogJ3NjYWxlKDAuOCkgcm90YXRlKDIwZGVnKScgfSxcclxuICAgIGNvbmZpZzogeyB0ZW5zaW9uOiAyODAsIGZyaWN0aW9uOiAyMCB9LFxyXG4gIH0pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IHJlZj17cmVmfT5cclxuICAgICAgPGFuaW1hdGVkLmltZ1xyXG4gICAgICAgIHNyYz1cIi9pbWFnZXMvZm9vdGVyLXJvY2sucG5nXCJcclxuICAgICAgICB3aWR0aD17MjAwfVxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBmaWx0ZXI6ICdpbnZlcnQoMCknLFxyXG4gICAgICAgICAgbWFyZ2luVG9wOiAnMjQwcHgnLFxyXG4gICAgICAgICAgLi4uZmxhc2hJbixcclxuICAgICAgICB9fVxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTY3JvbGxGYWRlSW1hZ2VcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3ByaW5nIiwiYW5pbWF0ZWQiLCJ1c2VJblZpZXciLCJTY3JvbGxGYWRlSW1hZ2UiLCJyZWYiLCJpblZpZXciLCJ0cmlnZ2VyT25jZSIsImZsYXNoSW4iLCJvcGFjaXR5IiwidHJhbnNmb3JtIiwiZnJvbSIsImNvbmZpZyIsInRlbnNpb24iLCJmcmljdGlvbiIsImRpdiIsImltZyIsInNyYyIsIndpZHRoIiwic3R5bGUiLCJmaWx0ZXIiLCJtYXJnaW5Ub3AiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Layout/Footer/ScrollImage.tsx\n"));

/***/ })

});