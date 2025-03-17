/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/summary/route";
exports.ids = ["app/api/summary/route"];
exports.modules = {

/***/ "(rsc)/./app/api/summary/route.js":
/*!**********************************!*\
  !*** ./app/api/summary/route.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var _utiles_dbconnect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utiles/dbconnect */ \"(rsc)/./app/utiles/dbconnect.js\");\n/* harmony import */ var _models_transctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/transctions */ \"(rsc)/./app/models/transctions.js\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n\n\n\nasync function GET() {\n    await (0,_utiles_dbconnect__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    try {\n        const totalAmount = await _models_transctions__WEBPACK_IMPORTED_MODULE_1__[\"default\"].aggregate([\n            {\n                $group: {\n                    _id: null,\n                    total: {\n                        $sum: \"$amount\"\n                    }\n                }\n            }\n        ]);\n        const totalTransactions = await _models_transctions__WEBPACK_IMPORTED_MODULE_1__[\"default\"].countDocuments();\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n            totalAmount: totalAmount.length ? totalAmount[0].total : 0,\n            totalTransactions\n        }, {\n            status: 200\n        });\n    } catch (error) {\n        console.error(\"Error fetching summary:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n            error: \"Internal Server Error\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3N1bW1hcnkvcm91dGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUErQztBQUNJO0FBQ1I7QUFDcEMsZUFBZUc7SUFDcEIsTUFBTUgsNkRBQVNBO0lBRWYsSUFBSTtRQUNGLE1BQU1JLGNBQWMsTUFBTUgsMkRBQVdBLENBQUNJLFNBQVMsQ0FBQztZQUM5QztnQkFBRUMsUUFBUTtvQkFBRUMsS0FBSztvQkFBTUMsT0FBTzt3QkFBRUMsTUFBTTtvQkFBVTtnQkFBRTtZQUFFO1NBQ3JEO1FBRUQsTUFBTUMsb0JBQW9CLE1BQU1ULDJEQUFXQSxDQUFDVSxjQUFjO1FBRTFELE9BQU9ULHFEQUFZQSxDQUFDVSxJQUFJLENBQ3RCO1lBQ0VSLGFBQWFBLFlBQVlTLE1BQU0sR0FBR1QsV0FBVyxDQUFDLEVBQUUsQ0FBQ0ksS0FBSyxHQUFHO1lBQ3pERTtRQUNGLEdBQ0E7WUFBRUksUUFBUTtRQUFJO0lBRWxCLEVBQUUsT0FBT0MsT0FBTztRQUNkQyxRQUFRRCxLQUFLLENBQUMsMkJBQTJCQTtRQUN6QyxPQUFPYixxREFBWUEsQ0FBQ1UsSUFBSSxDQUN0QjtZQUFFRyxPQUFPO1FBQXdCLEdBQ2pDO1lBQUVELFFBQVE7UUFBSTtJQUVsQjtBQUNGIiwic291cmNlcyI6WyJEOlxccGVyc29uYWxGaWFuY2VcXGJhY2tlbmRcXGFwcFxcYXBpXFxzdW1tYXJ5XFxyb3V0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZGJDb25uZWN0IGZyb20gXCIuLi8uLi91dGlsZXMvZGJjb25uZWN0XCI7XHJcbmltcG9ydCBUcmFuc2FjdGlvbiBmcm9tIFwiLi4vLi4vbW9kZWxzL3RyYW5zY3Rpb25zXCI7XHJcbmltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKCkge1xyXG4gIGF3YWl0IGRiQ29ubmVjdCgpO1xyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgdG90YWxBbW91bnQgPSBhd2FpdCBUcmFuc2FjdGlvbi5hZ2dyZWdhdGUoW1xyXG4gICAgICB7ICRncm91cDogeyBfaWQ6IG51bGwsIHRvdGFsOiB7ICRzdW06IFwiJGFtb3VudFwiIH0gfSB9LFxyXG4gICAgXSk7XHJcblxyXG4gICAgY29uc3QgdG90YWxUcmFuc2FjdGlvbnMgPSBhd2FpdCBUcmFuc2FjdGlvbi5jb3VudERvY3VtZW50cygpO1xyXG5cclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcclxuICAgICAge1xyXG4gICAgICAgIHRvdGFsQW1vdW50OiB0b3RhbEFtb3VudC5sZW5ndGggPyB0b3RhbEFtb3VudFswXS50b3RhbCA6IDAsXHJcbiAgICAgICAgdG90YWxUcmFuc2FjdGlvbnMsXHJcbiAgICAgIH0sXHJcbiAgICAgIHsgc3RhdHVzOiAyMDAgfVxyXG4gICAgKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIHN1bW1hcnk6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcclxuICAgICAgeyBlcnJvcjogXCJJbnRlcm5hbCBTZXJ2ZXIgRXJyb3JcIiB9LFxyXG4gICAgICB7IHN0YXR1czogNTAwIH1cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJkYkNvbm5lY3QiLCJUcmFuc2FjdGlvbiIsIk5leHRSZXNwb25zZSIsIkdFVCIsInRvdGFsQW1vdW50IiwiYWdncmVnYXRlIiwiJGdyb3VwIiwiX2lkIiwidG90YWwiLCIkc3VtIiwidG90YWxUcmFuc2FjdGlvbnMiLCJjb3VudERvY3VtZW50cyIsImpzb24iLCJsZW5ndGgiLCJzdGF0dXMiLCJlcnJvciIsImNvbnNvbGUiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/summary/route.js\n");

/***/ }),

/***/ "(rsc)/./app/models/transctions.js":
/*!***********************************!*\
  !*** ./app/models/transctions.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst TransactionSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    amount: {\n        type: Number,\n        required: true,\n        min: 1\n    },\n    date: {\n        type: Date,\n        required: true,\n        default: Date.now\n    },\n    description: {\n        type: String,\n        required: true,\n        trim: true\n    },\n    category: {\n        type: String,\n        enum: [\n            \"Food\",\n            \"Transport\",\n            \"Entertainment\",\n            \"Shopping\",\n            \"Others\"\n        ],\n        required: true\n    }\n}, {\n    timestamps: true\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).Transaction || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Transaction\", TransactionSchema));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvbW9kZWxzL3RyYW5zY3Rpb25zLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnQztBQUVoQyxNQUFNQyxvQkFBb0IsSUFBSUQsd0RBQWUsQ0FDM0M7SUFDRUcsUUFBUTtRQUFFQyxNQUFNQztRQUFRQyxVQUFVO1FBQU1DLEtBQUs7SUFBRTtJQUMvQ0MsTUFBTTtRQUFFSixNQUFNSztRQUFNSCxVQUFVO1FBQU1JLFNBQVNELEtBQUtFLEdBQUc7SUFBQztJQUN0REMsYUFBYTtRQUFFUixNQUFNUztRQUFRUCxVQUFVO1FBQU1RLE1BQU07SUFBSztJQUN4REMsVUFBVTtRQUNSWCxNQUFNUztRQUNORyxNQUFNO1lBQUM7WUFBUTtZQUFhO1lBQWlCO1lBQVk7U0FBUztRQUNsRVYsVUFBVTtJQUNaO0FBQ0YsR0FDQTtJQUFFVyxZQUFZO0FBQUs7QUFHckIsaUVBQWVqQix3REFBZSxDQUFDbUIsV0FBVyxJQUN4Q25CLHFEQUFjLENBQUMsZUFBZUMsa0JBQWtCQSxFQUFDIiwic291cmNlcyI6WyJEOlxccGVyc29uYWxGaWFuY2VcXGJhY2tlbmRcXGFwcFxcbW9kZWxzXFx0cmFuc2N0aW9ucy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XHJcblxyXG5jb25zdCBUcmFuc2FjdGlvblNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoXHJcbiAge1xyXG4gICAgYW1vdW50OiB7IHR5cGU6IE51bWJlciwgcmVxdWlyZWQ6IHRydWUsIG1pbjogMSB9LFxyXG4gICAgZGF0ZTogeyB0eXBlOiBEYXRlLCByZXF1aXJlZDogdHJ1ZSwgZGVmYXVsdDogRGF0ZS5ub3cgfSxcclxuICAgIGRlc2NyaXB0aW9uOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUsIHRyaW06IHRydWUgfSxcclxuICAgIGNhdGVnb3J5OiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgZW51bTogW1wiRm9vZFwiLCBcIlRyYW5zcG9ydFwiLCBcIkVudGVydGFpbm1lbnRcIiwgXCJTaG9wcGluZ1wiLCBcIk90aGVyc1wiXSxcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgeyB0aW1lc3RhbXBzOiB0cnVlIH1cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1vbmdvb3NlLm1vZGVscy5UcmFuc2FjdGlvbiB8fFxyXG4gIG1vbmdvb3NlLm1vZGVsKFwiVHJhbnNhY3Rpb25cIiwgVHJhbnNhY3Rpb25TY2hlbWEpO1xyXG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJUcmFuc2FjdGlvblNjaGVtYSIsIlNjaGVtYSIsImFtb3VudCIsInR5cGUiLCJOdW1iZXIiLCJyZXF1aXJlZCIsIm1pbiIsImRhdGUiLCJEYXRlIiwiZGVmYXVsdCIsIm5vdyIsImRlc2NyaXB0aW9uIiwiU3RyaW5nIiwidHJpbSIsImNhdGVnb3J5IiwiZW51bSIsInRpbWVzdGFtcHMiLCJtb2RlbHMiLCJUcmFuc2FjdGlvbiIsIm1vZGVsIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/models/transctions.js\n");

/***/ }),

/***/ "(rsc)/./app/utiles/dbconnect.js":
/*!*********************************!*\
  !*** ./app/utiles/dbconnect.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dotenv */ \"(rsc)/./node_modules/dotenv/lib/main.js\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_1__);\n\n\ndotenv__WEBPACK_IMPORTED_MODULE_1___default().config();\nconst MONGO_URL = process.env.MONGO_URL;\nconst dbConnect = async ()=>{\n    if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection).readyState >= 1) return;\n    try {\n        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGO_URL);\n        console.log(\" MongoDB Connected\");\n    } catch (error) {\n        console.error(\" MongoDB Connection Error:\", error);\n        process.exit(1);\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dbConnect);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvdXRpbGVzL2RiY29ubmVjdC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFnQztBQUNKO0FBQzVCQyxvREFBYTtBQUNiLE1BQU1FLFlBQVlDLFFBQVFDLEdBQUcsQ0FBQ0YsU0FBUztBQUV2QyxNQUFNRyxZQUFZO0lBQ2hCLElBQUlOLDREQUFtQixDQUFDUSxVQUFVLElBQUksR0FBRztJQUN6QyxJQUFJO1FBQ0YsTUFBTVIsdURBQWdCLENBQUNHO1FBQ3ZCTyxRQUFRQyxHQUFHLENBQUM7SUFDZCxFQUFFLE9BQU9DLE9BQU87UUFDZEYsUUFBUUUsS0FBSyxDQUFDLDhCQUE4QkE7UUFDNUNSLFFBQVFTLElBQUksQ0FBQztJQUNmO0FBQ0Y7QUFFQSxpRUFBZVAsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsiRDpcXHBlcnNvbmFsRmlhbmNlXFxiYWNrZW5kXFxhcHBcXHV0aWxlc1xcZGJjb25uZWN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcclxuaW1wb3J0IGRvdGVudiBmcm9tIFwiZG90ZW52XCI7XHJcbmRvdGVudi5jb25maWcoKTtcclxuY29uc3QgTU9OR09fVVJMID0gcHJvY2Vzcy5lbnYuTU9OR09fVVJMO1xyXG5cclxuY29uc3QgZGJDb25uZWN0ID0gYXN5bmMgKCkgPT4ge1xyXG4gIGlmIChtb25nb29zZS5jb25uZWN0aW9uLnJlYWR5U3RhdGUgPj0gMSkgcmV0dXJuO1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBtb25nb29zZS5jb25uZWN0KE1PTkdPX1VSTCk7XHJcbiAgICBjb25zb2xlLmxvZyhcIiBNb25nb0RCIENvbm5lY3RlZFwiKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIiBNb25nb0RCIENvbm5lY3Rpb24gRXJyb3I6XCIsIGVycm9yKTtcclxuICAgIHByb2Nlc3MuZXhpdCgxKTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkYkNvbm5lY3Q7XHJcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsImRvdGVudiIsImNvbmZpZyIsIk1PTkdPX1VSTCIsInByb2Nlc3MiLCJlbnYiLCJkYkNvbm5lY3QiLCJjb25uZWN0aW9uIiwicmVhZHlTdGF0ZSIsImNvbm5lY3QiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJleGl0Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/utiles/dbconnect.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fsummary%2Froute&page=%2Fapi%2Fsummary%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsummary%2Froute.js&appDir=D%3A%5CpersonalFiance%5Cbackend%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CpersonalFiance%5Cbackend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fsummary%2Froute&page=%2Fapi%2Fsummary%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsummary%2Froute.js&appDir=D%3A%5CpersonalFiance%5Cbackend%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CpersonalFiance%5Cbackend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var D_personalFiance_backend_app_api_summary_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/summary/route.js */ \"(rsc)/./app/api/summary/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/summary/route\",\n        pathname: \"/api/summary\",\n        filename: \"route\",\n        bundlePath: \"app/api/summary/route\"\n    },\n    resolvedPagePath: \"D:\\\\personalFiance\\\\backend\\\\app\\\\api\\\\summary\\\\route.js\",\n    nextConfigOutput,\n    userland: D_personalFiance_backend_app_api_summary_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZzdW1tYXJ5JTJGcm91dGUmcGFnZT0lMkZhcGklMkZzdW1tYXJ5JTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGc3VtbWFyeSUyRnJvdXRlLmpzJmFwcERpcj1EJTNBJTVDcGVyc29uYWxGaWFuY2UlNUNiYWNrZW5kJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1EJTNBJTVDcGVyc29uYWxGaWFuY2UlNUNiYWNrZW5kJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErRjtBQUN2QztBQUNxQjtBQUNRO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5R0FBbUI7QUFDM0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXNEO0FBQzlEO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzBGOztBQUUxRiIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJEOlxcXFxwZXJzb25hbEZpYW5jZVxcXFxiYWNrZW5kXFxcXGFwcFxcXFxhcGlcXFxcc3VtbWFyeVxcXFxyb3V0ZS5qc1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvc3VtbWFyeS9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL3N1bW1hcnlcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL3N1bW1hcnkvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJEOlxcXFxwZXJzb25hbEZpYW5jZVxcXFxiYWNrZW5kXFxcXGFwcFxcXFxhcGlcXFxcc3VtbWFyeVxcXFxyb3V0ZS5qc1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fsummary%2Froute&page=%2Fapi%2Fsummary%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsummary%2Froute.js&appDir=D%3A%5CpersonalFiance%5Cbackend%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CpersonalFiance%5Cbackend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("mongoose");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/dotenv"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fsummary%2Froute&page=%2Fapi%2Fsummary%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsummary%2Froute.js&appDir=D%3A%5CpersonalFiance%5Cbackend%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CpersonalFiance%5Cbackend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();