"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Layout/Footer/ScrollImage.tsx":
/*!**************************************************!*\
  !*** ./components/Layout/Footer/ScrollImage.tsx ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-spring */ \"./node_modules/react-spring/dist/react-spring.modern.mjs\");\n/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intersection-observer */ \"./node_modules/react-intersection-observer/index.mjs\");\n\nvar _s = $RefreshSig$();\n\"use\";\n\n\n\nconst ScrollFlashyImage = ()=>{\n    _s();\n    const [ref, inView] = (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__.useInView)();\n    const flashIn = (0,react_spring__WEBPACK_IMPORTED_MODULE_2__.useSpring)({\n        opacity: inView ? 1 : 0,\n        transform: inView ? \"scale(1) rotate(0deg)\" : \"scale(0.8) rotate(20deg)\",\n        from: {\n            opacity: 0,\n            transform: \"scale(0.8) rotate(20deg)\"\n        },\n        config: {\n            tension: 280,\n            friction: 20\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: ref,\n        style: {\n            height: \"500px\" /* add a height to create a scrollable area */ \n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_spring__WEBPACK_IMPORTED_MODULE_2__.animated.img, {\n            src: \"/images/footer-rock.png\",\n            width: 200,\n            style: {\n                filter: \"invert(0)\",\n                marginTop: \"240px\",\n                ...flashIn\n            }\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\91840\\\\Desktop\\\\tally6\\\\components\\\\Layout\\\\Footer\\\\ScrollImage.tsx\",\n            lineNumber: 21,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\91840\\\\Desktop\\\\tally6\\\\components\\\\Layout\\\\Footer\\\\ScrollImage.tsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ScrollFlashyImage, \"rdRkxjnGxBGL85hKQvZyZnY1Cns=\", false, function() {\n    return [\n        react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__.useInView,\n        react_spring__WEBPACK_IMPORTED_MODULE_2__.useSpring\n    ];\n});\n_c = ScrollFlashyImage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ScrollFlashyImage);\nvar _c;\n$RefreshReg$(_c, \"ScrollFlashyImage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheW91dC9Gb290ZXIvU2Nyb2xsSW1hZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ3lCO0FBQ3lCO0FBQ0s7QUFFdkQsTUFBTUksb0JBQThCOztJQUNsQyxNQUFNLENBQUNDLEtBQUtDLE9BQU8sR0FBR0gsc0VBQVNBO0lBRS9CLE1BQU1JLFVBQVVOLHVEQUFTQSxDQUFDO1FBQ3hCTyxTQUFTRixTQUFTLElBQUk7UUFDdEJHLFdBQVdILFNBQVMsMEJBQTBCO1FBQzlDSSxNQUFNO1lBQUVGLFNBQVM7WUFBR0MsV0FBVztRQUEyQjtRQUMxREUsUUFBUTtZQUFFQyxTQUFTO1lBQUtDLFVBQVU7UUFBRztJQUN2QztJQUVBLHFCQUNFLDhEQUFDQztRQUNDVCxLQUFLQTtRQUNMVSxPQUFPO1lBQUVDLFFBQVEsUUFBUSw0Q0FBNEM7UUFBRztrQkFFeEUsNEVBQUNkLGtEQUFRQSxDQUFDZSxHQUFHO1lBQ1hDLEtBQUk7WUFDSkMsT0FBTztZQUNQSixPQUFPO2dCQUNMSyxRQUFRO2dCQUNSQyxXQUFXO2dCQUNYLEdBQUdkLE9BQU87WUFDWjs7Ozs7Ozs7Ozs7QUFJUjtHQTFCTUg7O1FBQ2tCRCxrRUFBU0E7UUFFZkYsbURBQVNBOzs7S0FIckJHO0FBNEJOLCtEQUFlQSxpQkFBaUJBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQvRm9vdGVyL1Njcm9sbEltYWdlLnRzeD9hOTg0Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UnXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlU3ByaW5nLCBhbmltYXRlZCB9IGZyb20gJ3JlYWN0LXNwcmluZydcclxuaW1wb3J0IHsgdXNlSW5WaWV3IH0gZnJvbSAncmVhY3QtaW50ZXJzZWN0aW9uLW9ic2VydmVyJ1xyXG5cclxuY29uc3QgU2Nyb2xsRmxhc2h5SW1hZ2U6IFJlYWN0LkZDID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtyZWYsIGluVmlld10gPSB1c2VJblZpZXcoKVxyXG5cclxuICBjb25zdCBmbGFzaEluID0gdXNlU3ByaW5nKHtcclxuICAgIG9wYWNpdHk6IGluVmlldyA/IDEgOiAwLFxyXG4gICAgdHJhbnNmb3JtOiBpblZpZXcgPyAnc2NhbGUoMSkgcm90YXRlKDBkZWcpJyA6ICdzY2FsZSgwLjgpIHJvdGF0ZSgyMGRlZyknLFxyXG4gICAgZnJvbTogeyBvcGFjaXR5OiAwLCB0cmFuc2Zvcm06ICdzY2FsZSgwLjgpIHJvdGF0ZSgyMGRlZyknIH0sXHJcbiAgICBjb25maWc6IHsgdGVuc2lvbjogMjgwLCBmcmljdGlvbjogMjAgfSxcclxuICB9KVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICByZWY9e3JlZn1cclxuICAgICAgc3R5bGU9e3sgaGVpZ2h0OiAnNTAwcHgnIC8qIGFkZCBhIGhlaWdodCB0byBjcmVhdGUgYSBzY3JvbGxhYmxlIGFyZWEgKi8gfX1cclxuICAgID5cclxuICAgICAgPGFuaW1hdGVkLmltZ1xyXG4gICAgICAgIHNyYz1cIi9pbWFnZXMvZm9vdGVyLXJvY2sucG5nXCJcclxuICAgICAgICB3aWR0aD17MjAwfVxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBmaWx0ZXI6ICdpbnZlcnQoMCknLFxyXG4gICAgICAgICAgbWFyZ2luVG9wOiAnMjQwcHgnLFxyXG4gICAgICAgICAgLi4uZmxhc2hJbixcclxuICAgICAgICB9fVxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTY3JvbGxGbGFzaHlJbWFnZVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTcHJpbmciLCJhbmltYXRlZCIsInVzZUluVmlldyIsIlNjcm9sbEZsYXNoeUltYWdlIiwicmVmIiwiaW5WaWV3IiwiZmxhc2hJbiIsIm9wYWNpdHkiLCJ0cmFuc2Zvcm0iLCJmcm9tIiwiY29uZmlnIiwidGVuc2lvbiIsImZyaWN0aW9uIiwiZGl2Iiwic3R5bGUiLCJoZWlnaHQiLCJpbWciLCJzcmMiLCJ3aWR0aCIsImZpbHRlciIsIm1hcmdpblRvcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Layout/Footer/ScrollImage.tsx\n"));

/***/ })

});