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
exports.id = "app/api/recent/route";
exports.ids = ["app/api/recent/route"];
exports.modules = {

/***/ "(rsc)/./app/api/recent/route.js":
/*!*********************************!*\
  !*** ./app/api/recent/route.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var _utiles_dbconnect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utiles/dbconnect */ \"(rsc)/./app/utiles/dbconnect.js\");\n/* harmony import */ var _models_transctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/transctions */ \"(rsc)/./app/models/transctions.js\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n\n\n\nasync function GET() {\n    await (0,_utiles_dbconnect__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    try {\n        const recentTransactions = await _models_transctions__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find().sort({\n            date: -1\n        }) // Sort by latest date\n        .limit(5); // Get last 5 transactions\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json(recentTransactions, {\n            status: 200\n        });\n    } catch (error) {\n        console.error(\"Error fetching recent transactions:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n            error: \"Failed to fetch recent transactions\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3JlY2VudC9yb3V0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQStDO0FBQ0k7QUFDUjtBQUVwQyxlQUFlRztJQUNwQixNQUFNSCw2REFBU0E7SUFFZixJQUFJO1FBQ0YsTUFBTUkscUJBQXFCLE1BQU1ILDJEQUFXQSxDQUFDSSxJQUFJLEdBQzlDQyxJQUFJLENBQUM7WUFBRUMsTUFBTSxDQUFDO1FBQUUsR0FBRyxzQkFBc0I7U0FDekNDLEtBQUssQ0FBQyxJQUFJLDBCQUEwQjtRQUV2QyxPQUFPTixxREFBWUEsQ0FBQ08sSUFBSSxDQUFDTCxvQkFBb0I7WUFBRU0sUUFBUTtRQUFJO0lBQzdELEVBQUUsT0FBT0MsT0FBTztRQUNkQyxRQUFRRCxLQUFLLENBQUMsdUNBQXVDQTtRQUNyRCxPQUFPVCxxREFBWUEsQ0FBQ08sSUFBSSxDQUN0QjtZQUFFRSxPQUFPO1FBQXNDLEdBQy9DO1lBQUVELFFBQVE7UUFBSTtJQUVsQjtBQUNGIiwic291cmNlcyI6WyJEOlxccGVyc29uYWxGaWFuY2VcXGJhY2tlbmRcXGFwcFxcYXBpXFxyZWNlbnRcXHJvdXRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkYkNvbm5lY3QgZnJvbSBcIi4uLy4uL3V0aWxlcy9kYmNvbm5lY3RcIjtcclxuaW1wb3J0IFRyYW5zYWN0aW9uIGZyb20gXCIuLi8uLi9tb2RlbHMvdHJhbnNjdGlvbnNcIjtcclxuaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKCkge1xyXG4gIGF3YWl0IGRiQ29ubmVjdCgpO1xyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVjZW50VHJhbnNhY3Rpb25zID0gYXdhaXQgVHJhbnNhY3Rpb24uZmluZCgpXHJcbiAgICAgIC5zb3J0KHsgZGF0ZTogLTEgfSkgLy8gU29ydCBieSBsYXRlc3QgZGF0ZVxyXG4gICAgICAubGltaXQoNSk7IC8vIEdldCBsYXN0IDUgdHJhbnNhY3Rpb25zXHJcblxyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHJlY2VudFRyYW5zYWN0aW9ucywgeyBzdGF0dXM6IDIwMCB9KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIHJlY2VudCB0cmFuc2FjdGlvbnM6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcclxuICAgICAgeyBlcnJvcjogXCJGYWlsZWQgdG8gZmV0Y2ggcmVjZW50IHRyYW5zYWN0aW9uc1wiIH0sXHJcbiAgICAgIHsgc3RhdHVzOiA1MDAgfVxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbImRiQ29ubmVjdCIsIlRyYW5zYWN0aW9uIiwiTmV4dFJlc3BvbnNlIiwiR0VUIiwicmVjZW50VHJhbnNhY3Rpb25zIiwiZmluZCIsInNvcnQiLCJkYXRlIiwibGltaXQiLCJqc29uIiwic3RhdHVzIiwiZXJyb3IiLCJjb25zb2xlIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/recent/route.js\n");

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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Frecent%2Froute&page=%2Fapi%2Frecent%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Frecent%2Froute.js&appDir=D%3A%5CpersonalFiance%5Cbackend%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CpersonalFiance%5Cbackend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Frecent%2Froute&page=%2Fapi%2Frecent%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Frecent%2Froute.js&appDir=D%3A%5CpersonalFiance%5Cbackend%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CpersonalFiance%5Cbackend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var D_personalFiance_backend_app_api_recent_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/recent/route.js */ \"(rsc)/./app/api/recent/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/recent/route\",\n        pathname: \"/api/recent\",\n        filename: \"route\",\n        bundlePath: \"app/api/recent/route\"\n    },\n    resolvedPagePath: \"D:\\\\personalFiance\\\\backend\\\\app\\\\api\\\\recent\\\\route.js\",\n    nextConfigOutput,\n    userland: D_personalFiance_backend_app_api_recent_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZyZWNlbnQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRnJlY2VudCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRnJlY2VudCUyRnJvdXRlLmpzJmFwcERpcj1EJTNBJTVDcGVyc29uYWxGaWFuY2UlNUNiYWNrZW5kJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1EJTNBJTVDcGVyc29uYWxGaWFuY2UlNUNiYWNrZW5kJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErRjtBQUN2QztBQUNxQjtBQUNPO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5R0FBbUI7QUFDM0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXNEO0FBQzlEO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzBGOztBQUUxRiIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJEOlxcXFxwZXJzb25hbEZpYW5jZVxcXFxiYWNrZW5kXFxcXGFwcFxcXFxhcGlcXFxccmVjZW50XFxcXHJvdXRlLmpzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9yZWNlbnQvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9yZWNlbnRcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL3JlY2VudC9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkQ6XFxcXHBlcnNvbmFsRmlhbmNlXFxcXGJhY2tlbmRcXFxcYXBwXFxcXGFwaVxcXFxyZWNlbnRcXFxccm91dGUuanNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICB3b3JrQXN5bmNTdG9yYWdlLFxuICAgICAgICB3b3JrVW5pdEFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Frecent%2Froute&page=%2Fapi%2Frecent%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Frecent%2Froute.js&appDir=D%3A%5CpersonalFiance%5Cbackend%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CpersonalFiance%5Cbackend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/dotenv"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Frecent%2Froute&page=%2Fapi%2Frecent%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Frecent%2Froute.js&appDir=D%3A%5CpersonalFiance%5Cbackend%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CpersonalFiance%5Cbackend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();