System.register(["jimu-core","jimu-arcgis"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./your-extensions/widgets/AgriPie3 (2)/AgriIndicator7/src/runtime/KadastrIndicator.css":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./your-extensions/widgets/AgriPie3 (2)/AgriIndicator7/src/runtime/KadastrIndicator.css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* ===== Vegetation Stats Widget - Warm Paper UI (Modern) ===== */
.vegetation-stats-widget {
  background: radial-gradient(700px 420px at 15% 10%, rgba(16, 185, 129, 0.14) 0%, rgba(250, 250, 249, 0) 55%), radial-gradient(620px 420px at 85% 15%, rgba(245, 158, 11, 0.12) 0%, rgba(250, 250, 249, 0) 60%), linear-gradient(180deg, #fafaf9 0%, #f5f5f4 100%);
  border-radius: 16px;
  border: 1px solid rgba(15, 23, 42, 0.08);
  box-shadow: 0 18px 55px rgba(15, 23, 42, 0.1), 0 0 0 1px rgba(15, 23, 42, 0.04);
  padding: 14px 16px;
  width: 100%;
  overflow: hidden;
  position: relative;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: rgba(15, 23, 42, 0.88);
  backdrop-filter: blur(12px);
  box-sizing: border-box;
  min-height: 0;
}

.vegetation-stats-widget::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #10b981 0%, #34d399 35%, #f59e0b 70%, #fbbf24 100%);
  z-index: 1;
}

/* Icon block */
.vegetation-stats-widget .widget-icon {
  position: absolute;
  top: 50%;
  left: 14px;
  transform: translateY(-50%);
  z-index: 2;
  width: 46px;
  height: 46px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(15, 23, 42, 0.08);
  box-shadow: 0 14px 30px rgba(15, 23, 42, 0.08);
  backdrop-filter: blur(12px);
  display: flex;
  align-items: center;
  justify-content: center;
}

.vegetation-stats-widget .vegetation-icon {
  max-width: 70%;
  max-height: 70%;
  opacity: 0.92;
}

/* Content */
.vegetation-stats-widget .widget-content {
  padding-left: 74px;
  width: 100%;
  z-index: 2;
}

.vegetation-stats-widget .stat-label {
  font-size: 12px;
  margin-bottom: 6px;
  line-height: 1.35;
  font-weight: 800;
  letter-spacing: 0.2px;
  color: rgba(15, 23, 42, 0.62);
}

.vegetation-stats-widget .stat-value {
  font-size: 30px;
  font-weight: 950;
  line-height: 1.1;
  letter-spacing: -0.4px;
  color: rgba(15, 23, 42, 0.9);
}

.vegetation-stats-widget .unit {
  font-weight: 950;
  margin-left: 6px;
  font-size: 30px;
  color: inherit;
}

/* Group caption (your missing piece) */
.vegetation-stats-widget .group-caption {
  margin-top: 8px;
  padding-left: 2px;
  color: rgba(15, 23, 42, 0.55);
  font-weight: 700;
  letter-spacing: 0.2px;
}

.vegetation-stats-widget .group-caption small {
  display: inline-block;
  padding: 4px 10px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.75);
  border: 1px solid rgba(15, 23, 42, 0.08);
  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.07);
  backdrop-filter: blur(12px);
}

/* Loading */
.vegetation-stats-widget .loading-indicator {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 65px;
  padding-left: 74px;
  z-index: 2;
}

.vegetation-stats-widget .loading-spinner {
  display: flex;
  align-items: center;
  justify-content: center;
}

.vegetation-stats-widget .loading-dot {
  width: 8px;
  height: 8px;
  margin: 0 4px;
  background-color: rgba(15, 23, 42, 0.25);
  border-radius: 50%;
  display: inline-block;
  animation: veg-bounce 1.4s infinite ease-in-out both;
}

.vegetation-stats-widget .loading-dot:nth-child(1) {
  animation-delay: -0.32s;
}

.vegetation-stats-widget .loading-dot:nth-child(2) {
  animation-delay: -0.16s;
}

/* Error */
.vegetation-stats-widget .error-container {
  text-align: left;
  padding: 10px 8px;
  padding-left: 74px;
  color: rgba(15, 23, 42, 0.75);
  z-index: 2;
}

.vegetation-stats-widget .error-icon {
  color: rgba(220, 38, 38, 0.9);
  font-size: 22px;
  margin-bottom: 8px;
}

.vegetation-stats-widget .retry-button {
  margin-top: 8px;
  padding: 8px 12px;
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.95) 0%, rgba(245, 158, 11, 0.95) 100%);
  color: #0b1220;
  border: none;
  border-radius: 999px;
  cursor: pointer;
  font-weight: 900;
  font-size: 12px;
  letter-spacing: 0.2px;
  box-shadow: 0 14px 30px rgba(15, 23, 42, 0.1);
  transition: transform 0.15s ease, filter 0.2s ease, box-shadow 0.2s ease;
}

.vegetation-stats-widget .retry-button:hover {
  transform: translateY(-1px);
  filter: brightness(1.02);
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.12);
}

.vegetation-stats-widget .retry-button:active {
  transform: translateY(0) scale(0.99);
}

/* Meta */
.vegetation-stats-widget .meta-info {
  display: none;
  margin-top: 10px;
  font-size: 11px;
  color: rgba(15, 23, 42, 0.55);
}

.vegetation-stats-widget .meta-info.visible {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  flex-wrap: wrap;
}

/* Theme support */
.vegetation-stats-widget.dark-theme {
  color: rgba(248, 250, 252, 0.92);
}

.vegetation-stats-widget.dark-theme .stat-label {
  color: rgba(226, 232, 240, 0.72);
}

.vegetation-stats-widget.dark-theme .widget-icon {
  background: rgba(0, 0, 0, 0.25);
  border-color: rgba(255, 255, 255, 0.14);
}

.vegetation-stats-widget.dark-theme .group-caption small {
  background: rgba(0, 0, 0, 0.25);
  border-color: rgba(255, 255, 255, 0.14);
  color: rgba(248, 250, 252, 0.8);
}

/* Animations */
@keyframes veg-bounce {
  0%, 80%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}
/* Responsive */
@media (max-width: 300px) {
  .vegetation-stats-widget .widget-content {
    padding-left: 66px;
  }
  .vegetation-stats-widget .widget-icon {
    left: 12px;
    width: 42px;
    height: 42px;
  }
  .vegetation-stats-widget .stat-value {
    font-size: 24px;
  }
  .vegetation-stats-widget .unit {
    font-size: 24px;
  }
}`, "",{"version":3,"sources":["webpack://./your-extensions/widgets/AgriPie3%20(2)/AgriIndicator7/src/runtime/KadastrIndicator.css"],"names":[],"mappings":"AAAA,iEAAA;AAEA;EACE,iQACE;EAIF,mBAAA;EACA,wCAAA;EAEA,+EACE;EAGF,kBAAA;EACA,WAAA;EACA,gBAAA;EACA,kBAAA;EAEA,wIAAA;EACA,YAAA;EAEA,aAAA;EACA,sBAAA;EACA,uBAAA;EAEA,6BAAA;EACA,2BAAA;EACA,sBAAA;EACA,aAAA;AAXF;;AAcA;EACE,WAAA;EACA,kBAAA;EACA,MAAA;EACA,OAAA;EACA,QAAA;EACA,WAAA;EACA,sFAAA;EACA,UAAA;AAXF;;AAcA,eAAA;AACA;EACE,kBAAA;EACA,QAAA;EACA,UAAA;EACA,2BAAA;EACA,UAAA;EAEA,WAAA;EACA,YAAA;EACA,mBAAA;EACA,oCAAA;EACA,wCAAA;EACA,8CAAA;EACA,2BAAA;EAEA,aAAA;EACA,mBAAA;EACA,uBAAA;AAbF;;AAgBA;EACE,cAAA;EACA,eAAA;EACA,aAAA;AAbF;;AAgBA,YAAA;AACA;EACE,kBAAA;EACA,WAAA;EACA,UAAA;AAbF;;AAgBA;EACE,eAAA;EACA,kBAAA;EACA,iBAAA;EACA,gBAAA;EACA,qBAAA;EACA,6BAAA;AAbF;;AAgBA;EACE,eAAA;EACA,gBAAA;EACA,gBAAA;EACA,sBAAA;EACA,4BAAA;AAbF;;AAgBA;EACE,gBAAA;EACA,gBAAA;EACA,eAAA;EACA,cAAA;AAbF;;AAgBA,uCAAA;AACA;EACE,eAAA;EACA,iBAAA;EACA,6BAAA;EACA,gBAAA;EACA,qBAAA;AAbF;;AAgBA;EACE,qBAAA;EACA,iBAAA;EACA,oBAAA;EACA,qCAAA;EACA,wCAAA;EACA,8CAAA;EACA,2BAAA;AAbF;;AAgBA,YAAA;AACA;EACE,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,uBAAA;EACA,YAAA;EACA,kBAAA;EACA,UAAA;AAbF;;AAgBA;EACE,aAAA;EACA,mBAAA;EACA,uBAAA;AAbF;;AAgBA;EACE,UAAA;EACA,WAAA;EACA,aAAA;EACA,wCAAA;EACA,kBAAA;EACA,qBAAA;EACA,oDAAA;AAbF;;AAgBA;EAAqD,uBAAA;AAZrD;;AAaA;EAAqD,uBAAA;AATrD;;AAWA,UAAA;AACA;EACE,gBAAA;EACA,iBAAA;EACA,kBAAA;EACA,6BAAA;EACA,UAAA;AARF;;AAWA;EACE,6BAAA;EACA,eAAA;EACA,kBAAA;AARF;;AAWA;EACE,eAAA;EACA,iBAAA;EACA,+FAAA;EACA,cAAA;EACA,YAAA;EACA,oBAAA;EACA,eAAA;EACA,gBAAA;EACA,eAAA;EACA,qBAAA;EACA,6CAAA;EACA,wEAAA;AARF;;AAWA;EACE,2BAAA;EACA,wBAAA;EACA,8CAAA;AARF;;AAWA;EACE,oCAAA;AARF;;AAWA,SAAA;AACA;EACE,aAAA;EACA,gBAAA;EACA,eAAA;EACA,6BAAA;AARF;;AAWA;EACE,aAAA;EACA,8BAAA;EACA,SAAA;EACA,eAAA;AARF;;AAWA,kBAAA;AACA;EACE,gCAAA;AARF;;AAWA;EACE,gCAAA;AARF;;AAWA;EACE,+BAAA;EACA,uCAAA;AARF;;AAWA;EACE,+BAAA;EACA,uCAAA;EACA,+BAAA;AARF;;AAWA,eAAA;AACA;EACE;IAAgB,mBAAA;EAPhB;EAQA;IAAM,mBAAA;EALN;AACF;AAOA,eAAA;AACA;EACE;IAA2C,kBAAA;EAJ3C;EAKA;IAAwC,UAAA;IAAY,WAAA;IAAa,YAAA;EAAjE;EACA;IAAuC,eAAA;EAEvC;EADA;IAAiC,eAAA;EAIjC;AACF","sourcesContent":["/* ===== Vegetation Stats Widget - Warm Paper UI (Modern) ===== */\r\n\r\n.vegetation-stats-widget {\r\n  background:\r\n    radial-gradient(700px 420px at 15% 10%, rgba(16, 185, 129, 0.14) 0%, rgba(250, 250, 249, 0) 55%),\r\n    radial-gradient(620px 420px at 85% 15%, rgba(245, 158, 11, 0.12) 0%, rgba(250, 250, 249, 0) 60%),\r\n    linear-gradient(180deg, #fafaf9 0%, #f5f5f4 100%);\r\n\r\n  border-radius: 16px;\r\n  border: 1px solid rgba(15, 23, 42, 0.08);\r\n\r\n  box-shadow:\r\n    0 18px 55px rgba(15, 23, 42, 0.10),\r\n    0 0 0 1px rgba(15, 23, 42, 0.04);\r\n\r\n  padding: 14px 16px;\r\n  width: 100%;\r\n  overflow: hidden;\r\n  position: relative;\r\n\r\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n  height: 100%;\r\n\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n\r\n  color: rgba(15, 23, 42, 0.88);\r\n  backdrop-filter: blur(12px);\r\n  box-sizing: border-box;\r\n  min-height: 0;\r\n}\r\n\r\n.vegetation-stats-widget::before {\r\n  content: \"\";\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  height: 3px;\r\n  background: linear-gradient(90deg, #10b981 0%, #34d399 35%, #f59e0b 70%, #fbbf24 100%);\r\n  z-index: 1;\r\n}\r\n\r\n/* Icon block */\r\n.vegetation-stats-widget .widget-icon {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 14px;\r\n  transform: translateY(-50%);\r\n  z-index: 2;\r\n\r\n  width: 46px;\r\n  height: 46px;\r\n  border-radius: 14px;\r\n  background: rgba(255, 255, 255, 0.70);\r\n  border: 1px solid rgba(15, 23, 42, 0.08);\r\n  box-shadow: 0 14px 30px rgba(15, 23, 42, 0.08);\r\n  backdrop-filter: blur(12px);\r\n\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.vegetation-stats-widget .vegetation-icon {\r\n  max-width: 70%;\r\n  max-height: 70%;\r\n  opacity: 0.92;\r\n}\r\n\r\n/* Content */\r\n.vegetation-stats-widget .widget-content {\r\n  padding-left: 74px;\r\n  width: 100%;\r\n  z-index: 2;\r\n}\r\n\r\n.vegetation-stats-widget .stat-label {\r\n  font-size: 12px;\r\n  margin-bottom: 6px;\r\n  line-height: 1.35;\r\n  font-weight: 800;\r\n  letter-spacing: 0.2px;\r\n  color: rgba(15, 23, 42, 0.62);\r\n}\r\n\r\n.vegetation-stats-widget .stat-value {\r\n  font-size: 30px;\r\n  font-weight: 950;\r\n  line-height: 1.1;\r\n  letter-spacing: -0.4px;\r\n  color: rgba(15, 23, 42, 0.90);\r\n}\r\n\r\n.vegetation-stats-widget .unit {\r\n  font-weight: 950;\r\n  margin-left: 6px;\r\n  font-size: 30px;\r\n  color: inherit;\r\n}\r\n\r\n/* Group caption (your missing piece) */\r\n.vegetation-stats-widget .group-caption {\r\n  margin-top: 8px;\r\n  padding-left: 2px;\r\n  color: rgba(15, 23, 42, 0.55);\r\n  font-weight: 700;\r\n  letter-spacing: 0.2px;\r\n}\r\n\r\n.vegetation-stats-widget .group-caption small {\r\n  display: inline-block;\r\n  padding: 4px 10px;\r\n  border-radius: 999px;\r\n  background: rgba(255, 255, 255, 0.75);\r\n  border: 1px solid rgba(15, 23, 42, 0.08);\r\n  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.07);\r\n  backdrop-filter: blur(12px);\r\n}\r\n\r\n/* Loading */\r\n.vegetation-stats-widget .loading-indicator {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: flex-start;\r\n  height: 65px;\r\n  padding-left: 74px;\r\n  z-index: 2;\r\n}\r\n\r\n.vegetation-stats-widget .loading-spinner {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.vegetation-stats-widget .loading-dot {\r\n  width: 8px;\r\n  height: 8px;\r\n  margin: 0 4px;\r\n  background-color: rgba(15, 23, 42, 0.25);\r\n  border-radius: 50%;\r\n  display: inline-block;\r\n  animation: veg-bounce 1.4s infinite ease-in-out both;\r\n}\r\n\r\n.vegetation-stats-widget .loading-dot:nth-child(1) { animation-delay: -0.32s; }\r\n.vegetation-stats-widget .loading-dot:nth-child(2) { animation-delay: -0.16s; }\r\n\r\n/* Error */\r\n.vegetation-stats-widget .error-container {\r\n  text-align: left;\r\n  padding: 10px 8px;\r\n  padding-left: 74px;\r\n  color: rgba(15, 23, 42, 0.75);\r\n  z-index: 2;\r\n}\r\n\r\n.vegetation-stats-widget .error-icon {\r\n  color: rgba(220, 38, 38, 0.90);\r\n  font-size: 22px;\r\n  margin-bottom: 8px;\r\n}\r\n\r\n.vegetation-stats-widget .retry-button {\r\n  margin-top: 8px;\r\n  padding: 8px 12px;\r\n  background: linear-gradient(135deg, rgba(16,185,129,0.95) 0%, rgba(245,158,11,0.95) 100%);\r\n  color: #0b1220;\r\n  border: none;\r\n  border-radius: 999px;\r\n  cursor: pointer;\r\n  font-weight: 900;\r\n  font-size: 12px;\r\n  letter-spacing: 0.2px;\r\n  box-shadow: 0 14px 30px rgba(15, 23, 42, 0.10);\r\n  transition: transform 0.15s ease, filter 0.2s ease, box-shadow 0.2s ease;\r\n}\r\n\r\n.vegetation-stats-widget .retry-button:hover {\r\n  transform: translateY(-1px);\r\n  filter: brightness(1.02);\r\n  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.12);\r\n}\r\n\r\n.vegetation-stats-widget .retry-button:active {\r\n  transform: translateY(0) scale(0.99);\r\n}\r\n\r\n/* Meta */\r\n.vegetation-stats-widget .meta-info {\r\n  display: none;\r\n  margin-top: 10px;\r\n  font-size: 11px;\r\n  color: rgba(15, 23, 42, 0.55);\r\n}\r\n\r\n.vegetation-stats-widget .meta-info.visible {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  gap: 10px;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n/* Theme support */\r\n.vegetation-stats-widget.dark-theme {\r\n  color: rgba(248, 250, 252, 0.92);\r\n}\r\n\r\n.vegetation-stats-widget.dark-theme .stat-label {\r\n  color: rgba(226, 232, 240, 0.72);\r\n}\r\n\r\n.vegetation-stats-widget.dark-theme .widget-icon {\r\n  background: rgba(0, 0, 0, 0.25);\r\n  border-color: rgba(255, 255, 255, 0.14);\r\n}\r\n\r\n.vegetation-stats-widget.dark-theme .group-caption small {\r\n  background: rgba(0, 0, 0, 0.25);\r\n  border-color: rgba(255, 255, 255, 0.14);\r\n  color: rgba(248, 250, 252, 0.80);\r\n}\r\n\r\n/* Animations */\r\n@keyframes veg-bounce {\r\n  0%, 80%, 100% { transform: scale(0); }\r\n  40% { transform: scale(1); }\r\n}\r\n\r\n/* Responsive */\r\n@media (max-width: 300px) {\r\n  .vegetation-stats-widget .widget-content { padding-left: 66px; }\r\n  .vegetation-stats-widget .widget-icon { left: 12px; width: 42px; height: 42px; }\r\n  .vegetation-stats-widget .stat-value { font-size: 24px; }\r\n  .vegetation-stats-widget .unit { font-size: 24px; }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/lodash/_Symbol.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ "./node_modules/lodash/_getRawTag.js"),
    objectToString = __webpack_require__(/*! ./_objectToString */ "./node_modules/lodash/_objectToString.js");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ "./node_modules/lodash/_baseTrim.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseTrim.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var trimmedEndIndex = __webpack_require__(/*! ./_trimmedEndIndex */ "./node_modules/lodash/_trimmedEndIndex.js");

/** Used to match leading whitespace. */
var reTrimStart = /^\s+/;

/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */
function baseTrim(string) {
  return string
    ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '')
    : string;
}

module.exports = baseTrim;


/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;

module.exports = freeGlobal;


/***/ }),

/***/ "./node_modules/lodash/_getRawTag.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ "./node_modules/lodash/_objectToString.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/***/ ((module) => {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ "./node_modules/lodash/_root.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ "./node_modules/lodash/_trimmedEndIndex.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_trimmedEndIndex.js ***!
  \*************************************************/
/***/ ((module) => {

/** Used to match a single whitespace character. */
var reWhitespace = /\s/;

/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */
function trimmedEndIndex(string) {
  var index = string.length;

  while (index-- && reWhitespace.test(string.charAt(index))) {}
  return index;
}

module.exports = trimmedEndIndex;


/***/ }),

/***/ "./node_modules/lodash/debounce.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/debounce.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    now = __webpack_require__(/*! ./now */ "./node_modules/lodash/now.js"),
    toNumber = __webpack_require__(/*! ./toNumber */ "./node_modules/lodash/toNumber.js");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

module.exports = debounce;


/***/ }),

/***/ "./node_modules/lodash/isObject.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isObject.js ***!
  \*****************************************/
/***/ ((module) => {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ "./node_modules/lodash/isObjectLike.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
/***/ ((module) => {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ "./node_modules/lodash/isSymbol.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isSymbol.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),

/***/ "./node_modules/lodash/now.js":
/*!************************************!*\
  !*** ./node_modules/lodash/now.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

module.exports = now;


/***/ }),

/***/ "./node_modules/lodash/throttle.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/throttle.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var debounce = __webpack_require__(/*! ./debounce */ "./node_modules/lodash/debounce.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

module.exports = throttle;


/***/ }),

/***/ "./node_modules/lodash/toNumber.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toNumber.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseTrim = __webpack_require__(/*! ./_baseTrim */ "./node_modules/lodash/_baseTrim.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),

/***/ "./your-extensions/widgets/AgriPie3 (2)/AgriIndicator7/src/runtime/KadastrIndicator.css":
/*!**********************************************************************************************!*\
  !*** ./your-extensions/widgets/AgriPie3 (2)/AgriIndicator7/src/runtime/KadastrIndicator.css ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_KadastrIndicator_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!../../../../../../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./KadastrIndicator.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./your-extensions/widgets/AgriPie3 (2)/AgriIndicator7/src/runtime/KadastrIndicator.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_KadastrIndicator_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_KadastrIndicator_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_KadastrIndicator_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_KadastrIndicator_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "jimu-arcgis":
/*!******************************!*\
  !*** external "jimu-arcgis" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__;

/***/ }),

/***/ "jimu-core":
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!******************************************!*\
  !*** ./jimu-core/lib/set-public-path.ts ***!
  \******************************************/
/**
 * Webpack will replace __webpack_public_path__ with __webpack_require__.p to set the public path dynamically.
 * The reason why we can't set the publicPath in webpack config is: we change the publicPath when download.
 * */
// eslint-disable-next-line
// @ts-ignore
__webpack_require__.p = window.jimuConfig.baseUrl;

})();

// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!************************************************************************************!*\
  !*** ./your-extensions/widgets/AgriPie3 (2)/AgriIndicator7/src/runtime/widget.tsx ***!
  \************************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _KadastrIndicator_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./KadastrIndicator.css */ "./your-extensions/widgets/AgriPie3 (2)/AgriIndicator7/src/runtime/KadastrIndicator.css");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/throttle */ "./node_modules/lodash/throttle.js");
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_3__);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a, _b;




// cross-iframe event bus so widgets inside builder/preview/iframe can talk
const BUS = ((_b = (_a = window.top) === null || _a === void 0 ? void 0 : _a.document) !== null && _b !== void 0 ? _b : document);
const WIDGET_EVENTS = {
    YIL_CHANGED: 'yilChanged',
    REGION_CHANGED: 'regionChanged',
    VEGETATION_STATUS_CHANGED: 'vegetationStatusChanged',
    CROP_TYPE_CHANGED: 'cropTypeChanged',
    RESET_ALL: 'resetAllWidgets'
};
const FILTER_FIELDS = {
    YIL: 'yil',
    VILOYAT: 'viloyat',
    TUMAN: 'tuman',
    F_INN: 'f_inn',
    EKIN: 'ekin',
    VH: 'vh',
    VEG_M: 'veg_m',
    // ✅ CHANGED
    TURI: 'turi'
};
class VegetationStatsWidget extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    constructor(props) {
        super(props);
        this.MAX_CONNECTION_ATTEMPTS = 3;
        this._abortController = null;
        this._isMounted = false;
        this._isResetting = false;
        // Viloyat routing cache (viloyat normalized key -> index in `this.state.featureLayers`)
        this._viloyatKeyToLayerIndex = {};
        // ── API-side canonicalization (ASCII apostrophe; normalize o'/g')
        this.normalizeUzbekForApi = (s) => {
            if (!s)
                return '';
            let out = s.trim();
            // unify apostrophe-like marks to ASCII '
            out = out.replace(/[\u02BB\u02BC\u2019\u2018\u2032\u2035`´ˊˋ]/g, "'");
            // normalize o'/g' combos no matter which apostrophe variant was used
            out = out
                .replace(/o['\u02BB\u02BC\u2019\u2018`´ˊˋ]/gi, "o'")
                .replace(/g['\u02BB\u02BC\u2019\u2018`´ˊˋ]/gi, "g'");
            return out.replace(/\s+/g, ' ');
        };
        // Find field type on the active feature layer (if available)
        this.getFieldType = (name) => {
            const fl = this.state.featureLayer;
            if (!(fl === null || fl === void 0 ? void 0 : fl.fields))
                return null;
            const f = fl.fields.find((ff) => ff.name.toLowerCase() === (name || '').toLowerCase());
            return (f === null || f === void 0 ? void 0 : f.type) || null;
        };
        // Zero-like filter that works for numeric *and* string fields
        this.nz = (field) => {
            const f = (field || '').trim();
            if (!f)
                return '(1=1)';
            const t = (this.getFieldType(f) || '').toLowerCase();
            if (/(smallinteger|integer|double|single|float)/.test(t)) {
                return `(${f} > 0)`;
            }
            return `(${f} IS NOT NULL AND ${f} <> '' AND ${f} NOT IN ('0','00','0.0','0,0','-'))`;
        };
        // Variants generator for retries (API **only**)
        this.makeApostropheVariants = (s) => {
            if (!s)
                return [''];
            const baseAscii = this.normalizeUzbekForApi(s);
            const variants = ["'", '\u02BB', '\u02BC', '\u2019', '`']; // ' ʻ ʼ ’ `
            const set = new Set();
            for (const a of variants) {
                let v = s
                    .replace(/[\u02BB\u02BC\u2019\u2018\u2032\u2035`´ˊˋ]/g, a)
                    .replace(/o['\u02BB\u02BC\u2019\u2018`´ˊˋ]/gi, 'o' + a)
                    .replace(/g['\u02BB\u02BC\u2019\u2018`´ˊˋ]/gi, 'g' + a)
                    .replace(/\s+/g, ' ')
                    .trim();
                set.add(v);
            }
            set.delete(baseAscii);
            return [baseAscii, ...Array.from(set)];
        };
        // District/city suffix variants for API tries
        this.makeDistrictSuffixVariants = (raw) => {
            if (!raw)
                return [''];
            const s = raw.trim();
            const hasTumani = /\btumani$/i.test(s);
            const hasShahar = /\bshahar$|\bshahri$/i.test(s);
            const bases = this.makeApostropheVariants(s);
            const out = new Set();
            for (const b of bases) {
                const n = this.normalizeUzbekForApi(b);
                out.add(n);
                if (!hasTumani && !hasShahar) {
                    out.add(`${n} tumani`);
                    out.add(`${n} shahar`);
                    out.add(`${n} shahri`);
                }
            }
            return Array.from(out);
        };
        // Region suffix variants for API tries (viloyat vs shahar)
        this.makeRegionSuffixVariants = (raw) => {
            if (!raw)
                return [''];
            const s = raw.trim();
            const bases = this.makeApostropheVariants(s);
            const looksVil = /\bviloyati$/i.test(s);
            const looksSh = /\bshahar$/i.test(s);
            const out = new Set();
            for (const b of bases) {
                const n = this.normalizeUzbekForApi(b);
                out.add(n);
                if (!looksVil && !looksSh) {
                    out.add(`${n} viloyati`);
                    out.add(`${n} shahar`);
                }
            }
            return Array.from(out);
        };
        this.handleMasterFilterChanged = (event) => {
            var _a, _b, _c, _d;
            if (!this._isMounted)
                return;
            if (this._isResetting)
                return;
            const d = (event === null || event === void 0 ? void 0 : event.detail) || {};
            if (!(d === null || d === void 0 ? void 0 : d.filters))
                return;
            // ignore self if ever dispatched (defensive)
            if ((d === null || d === void 0 ? void 0 : d.source) === 'VegetationStatsWidget')
                return;
            const filters = d.filters || {};
            const scope = d.scope || {};
            // ✅ IMPORTANT: if AgriFilter locked viloyat, we must use it
            const effectiveViloyat = this.normalizeApos(scope.lockedViloyat || filters.viloyat || '');
            const nextYil = ((_a = filters.yil) !== null && _a !== void 0 ? _a : '').toString();
            const nextVil = effectiveViloyat;
            const nextTum = this.normalizeApos(filters.tuman || '');
            const nextTuri = this.normalizeApos(filters.turi || filters.tur || ''); // tolerate older payloads
            const nextVh = this.normalizeApos(filters.vh || '');
            const nextBarField = (_b = filters.barCategoryField) !== null && _b !== void 0 ? _b : null;
            const nextBarValue = (_c = filters.barCategoryValue) !== null && _c !== void 0 ? _c : null;
            // NDVI date → for Indicator we only start filtering by NDVI when
            // there is a manual NDVI-related choice:
            // - explicit date selection (filters.ndviDateLocked from AgriFilter/Graff), or
            // - a VH bucket (filters.vh), or
            // - a bar category value (filters.barCategoryValue, from AgriBar/Graff).
            // Auto-chosen latest NDVI date used for the bar alone should NOT
            // constrain the indicator.
            const rawNdviDate = ((_d = filters.ndviDate) !== null && _d !== void 0 ? _d : '').toString().trim();
            const ndviLocked = Boolean(filters.ndviDateLocked);
            const hasManualNdviOrVhSelection = ndviLocked || !!filters.vh || !!filters.barCategoryValue;
            let nextNdviDate = undefined;
            let nextNdviStatusField = null;
            if (hasManualNdviOrVhSelection && rawNdviDate) {
                nextNdviDate = rawNdviDate;
                const cfg = this.props.config || {};
                const prefix = (cfg.polygonStatusPrefix || 'status_').toString().trim() || 'status_';
                const suffix = nextNdviDate.replace(/-/g, '_');
                nextNdviStatusField = `${prefix}${suffix}`;
            }
            const changed = nextYil !== this.state.selectedYil ||
                nextVil !== this.state.selectedViloyat ||
                nextTum !== this.state.selectedTuman ||
                nextTuri !== this.state.selectedYerToifas ||
                nextVh !== this.state.selectedVegetationStatus ||
                nextBarField !== this.state.barCategoryField ||
                nextBarValue !== this.state.barCategoryValue ||
                nextNdviDate !== this.state.selectedNdviDate ||
                nextNdviStatusField !== this.state.ndviStatusField;
            if (!changed)
                return;
            this.setState({
                selectedYil: nextYil,
                selectedViloyat: nextVil,
                selectedTuman: nextTum,
                selectedYerToifas: nextTuri,
                selectedVegetationStatus: nextVh,
                barCategoryField: nextBarField,
                barCategoryValue: nextBarValue,
                selectedNdviDate: nextNdviDate,
                ndviStatusField: nextNdviStatusField,
                // Route to the feature layer that contains the selected viloyat
                featureLayer: nextVil ? this.getFeatureLayerForViloyat(nextVil) : this.state.featureLayer,
                loading: true,
                lastFilterEventTimestamp: Date.now(),
                isHandlingExternalEvent: true
            }, () => {
                this.refreshData();
                setTimeout(() => {
                    if (this._isMounted)
                        this.setState({ isHandlingExternalEvent: false });
                }, 150);
            });
        };
        // =========================
        // External event handlers
        // =========================
        this.handleExternalCategory = (event) => __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c, _d, _e, _f;
            if (!this._isMounted)
                return;
            const d = (event === null || event === void 0 ? void 0 : event.detail) || {};
            if (d.source === 'VegetationStatsWidget')
                return;
            const nextTuri = this.normalizeApos(d.turi || d.tur || d.category || d.yerToifas || '');
            const nextYil = ((_b = (_a = d.yil) !== null && _a !== void 0 ? _a : this.state.selectedYil) !== null && _b !== void 0 ? _b : '').toString();
            const nextVil = this.normalizeApos((_d = (_c = d.viloyat) !== null && _c !== void 0 ? _c : this.state.selectedViloyat) !== null && _d !== void 0 ? _d : '');
            const nextTum = this.normalizeApos((_f = (_e = d.tuman) !== null && _e !== void 0 ? _e : this.state.selectedTuman) !== null && _f !== void 0 ? _f : '');
            this.setState({
                selectedYil: nextYil,
                selectedViloyat: nextVil,
                selectedTuman: nextTum,
                selectedYerToifas: nextTuri,
                loading: true,
                lastFilterEventTimestamp: Date.now(),
                isHandlingExternalEvent: true
            }, () => {
                this.refreshData();
                setTimeout(() => this._isMounted && this.setState({ isHandlingExternalEvent: false }), 200);
            });
        });
        this.handleConstructionYearChanged = (event) => {
            if (this._isResetting)
                return;
            const { detail } = event || {};
            if ((detail === null || detail === void 0 ? void 0 : detail.source) === 'VegetationStatsWidget')
                return;
            this.setState({
                selectedYil: (detail === null || detail === void 0 ? void 0 : detail.year) ? detail.year.toString() : '',
                loading: true,
                lastFilterEventTimestamp: Date.now(),
                isHandlingExternalEvent: true
            }, () => {
                this.refreshData();
                setTimeout(() => this._isMounted && this.setState({ isHandlingExternalEvent: false }), 200);
            });
        };
        this.handleRegionChange = (event) => {
            if (this._isResetting)
                return;
            if (!(event === null || event === void 0 ? void 0 : event.detail))
                return;
            const { viloyat, tuman, source } = event.detail;
            if (source === 'VegetationStatsWidget')
                return;
            this.setState({
                selectedViloyat: this.normalizeApos(viloyat || ''),
                selectedTuman: this.normalizeApos(tuman || ''),
                loading: true,
                lastFilterEventTimestamp: Date.now(),
                isHandlingExternalEvent: true
            }, () => {
                this.refreshData();
                setTimeout(() => this._isMounted && this.setState({ isHandlingExternalEvent: false }), 200);
            });
        };
        this.handleYilChange = (event) => {
            if (this._isResetting)
                return;
            if (!(event === null || event === void 0 ? void 0 : event.detail))
                return;
            const { yil, source } = event.detail;
            if (source === 'VegetationStatsWidget')
                return;
            this.setState({
                selectedYil: yil ? yil.toString() : '',
                loading: true,
                lastFilterEventTimestamp: Date.now(),
                isHandlingExternalEvent: true
            }, () => {
                this.refreshData();
                setTimeout(() => this._isMounted && this.setState({ isHandlingExternalEvent: false }), 200);
            });
        };
        this.handleWaterSupplyFilterChange = (event) => {
            if (this._isResetting)
                return;
            const d = (event === null || event === void 0 ? void 0 : event.detail) || {};
            if (d.source === 'VegetationStatsWidget')
                return;
            const now = Date.now();
            if (now - this.state.lastFilterEventTimestamp < 200)
                return;
            // ✅ CHANGED: support turi + old tur
            const turi = d.turi || d.tur || d.yerToifas || '';
            this.setState({
                selectedViloyat: this.normalizeApos(d.massivNom || d.viloyat || ''),
                selectedTuman: this.normalizeApos(d.tumanNomi || d.tuman || ''),
                selectedYil: d.yil || '',
                selectedYerToifas: this.normalizeApos(turi),
                loading: true,
                lastFilterEventTimestamp: now,
                isHandlingExternalEvent: true
            }, () => {
                this.refreshData();
                setTimeout(() => this._isMounted && this.setState({ isHandlingExternalEvent: false }), 200);
            });
        };
        this.handleCategorySelection = (event) => {
            if (this._isResetting)
                return;
            const d = (event === null || event === void 0 ? void 0 : event.detail) || {};
            if (d.source === 'VegetationStatsWidget')
                return;
            // ✅ CHANGED: support turi + old tur
            const turi = d.turi || d.tur || d.category || '';
            this.setState({
                selectedYerToifas: this.normalizeApos(turi),
                selectedYil: d.yil || this.state.selectedYil,
                selectedViloyat: this.normalizeApos(d.viloyat || this.state.selectedViloyat),
                selectedTuman: this.normalizeApos(d.tuman || this.state.selectedTuman),
                loading: true,
                lastFilterEventTimestamp: Date.now(),
                isHandlingExternalEvent: true
            }, () => {
                this.refreshData();
                setTimeout(() => this._isMounted && this.setState({ isHandlingExternalEvent: false }), 200);
            });
        };
        this.handleKadastrFiltersChanged = (event) => {
            if (this._isResetting)
                return;
            const d = (event === null || event === void 0 ? void 0 : event.detail) || {};
            if (d.source === 'VegetationStatsWidget')
                return;
            // ✅ CHANGED: support turi + old tur
            const turi = d.turi || d.tur || '';
            this.setState({
                selectedViloyat: this.normalizeApos(d.viloyat || ''),
                selectedTuman: this.normalizeApos(d.tuman || ''),
                selectedYil: d.yil || '',
                selectedYerToifas: this.normalizeApos(turi),
                loading: true,
                lastFilterEventTimestamp: Date.now(),
                isHandlingExternalEvent: true
            }, () => {
                this.refreshData();
                setTimeout(() => this._isMounted && this.setState({ isHandlingExternalEvent: false }), 200);
            });
        };
        this.handleKadastrFiltersReset = () => this._onReset();
        this.handleVegetationStatusChange = (event) => {
            if (this._isResetting)
                return;
            const d = (event === null || event === void 0 ? void 0 : event.detail) || {};
            if (d.source === 'VegetationStatsWidget')
                return;
            this.setState({
                selectedVegetationStatus: d.status || d.vh || '',
                loading: true,
                lastFilterEventTimestamp: Date.now(),
                isHandlingExternalEvent: true
            }, () => {
                this.refreshData();
                setTimeout(() => this._isMounted && this.setState({ isHandlingExternalEvent: false }), 200);
            });
        };
        this.handleCropTypeChange = (event) => {
            if (this._isResetting)
                return;
            const d = (event === null || event === void 0 ? void 0 : event.detail) || {};
            if (d.source === 'VegetationStatsWidget')
                return;
            this.setState({
                selectedCropType: this.normalizeApos(d.cropType || d.ekin_turi || ''),
                loading: true,
                lastFilterEventTimestamp: Date.now(),
                isHandlingExternalEvent: true
            }, () => {
                this.refreshData();
                setTimeout(() => this._isMounted && this.setState({ isHandlingExternalEvent: false }), 200);
            });
        };
        this.refreshData = () => {
            var _a;
            if ((_a = this.props.config) === null || _a === void 0 ? void 0 : _a.useApiDataSource) {
                if (!this.shouldFetchForViloyat()) {
                    this.setState({
                        loading: false,
                        error: null,
                        vegetationArea: null,
                        totalArea: null,
                        featureCount: 0
                    });
                    return;
                }
                this.fetchApiData();
            }
            else {
                if (this.state.connectionStatus === 'connected') {
                    if (!this.shouldFetchForViloyat()) {
                        this.setState({
                            loading: false,
                            error: null,
                            vegetationArea: null,
                            totalArea: null,
                            featureCount: 0
                        });
                        return;
                    }
                    this.throttledFetchData();
                }
                else {
                    this.setState({ loading: true });
                    setTimeout(() => {
                        if (this._isMounted &&
                            this.state.connectionStatus === 'connected' &&
                            this.shouldFetchForViloyat())
                            this.throttledFetchData();
                    }, 1000);
                }
            }
        };
        // =========================
        // Map + DataSource
        // =========================
        this.ensureInitialization = () => {
            const { dataSource, connectionStatus } = this.state;
            const { config } = this.props;
            if (config === null || config === void 0 ? void 0 : config.useApiDataSource) {
                if (!this.shouldFetchForViloyat()) {
                    this.setState({
                        loading: false,
                        error: null,
                        vegetationArea: null,
                        totalArea: null,
                        featureCount: 0
                    });
                    return;
                }
                this.fetchApiData();
            }
            else if (dataSource && connectionStatus === 'connected') {
                if (!this.shouldFetchForViloyat()) {
                    this.setState({
                        loading: false,
                        error: null,
                        vegetationArea: null,
                        totalArea: null,
                        featureCount: 0
                    });
                    return;
                }
                this.fetchData();
            }
            else if (connectionStatus === 'failed' || connectionStatus === 'connecting') {
                this.retryMapConnection();
            }
        };
        this.onActiveViewChange = (jimuMapView) => {
            if (!jimuMapView) {
                this.setState({ activeMapView: null, featureLayer: null });
                return;
            }
            this.setState({ activeMapView: jimuMapView }, () => {
                if (jimuMapView.view && jimuMapView.view.ready) {
                    this.initializeMapConnection(jimuMapView);
                }
                else {
                    const readyWatch = jimuMapView.view.watch('ready', (isReady) => {
                        if (isReady) {
                            readyWatch.remove();
                            this.initializeMapConnection(jimuMapView);
                        }
                    });
                }
            });
        };
        this.makeViloyatKeyForRouting = (viloyat) => {
            return this.normalizeApos(viloyat || '')
                .trim()
                .toLowerCase();
        };
        this.getFeatureLayerForViloyat = (viloyat, layersOverride) => {
            var _a;
            const key = this.makeViloyatKeyForRouting(viloyat);
            const idx = this._viloyatKeyToLayerIndex[key];
            const layers = (_a = layersOverride !== null && layersOverride !== void 0 ? layersOverride : this.state.featureLayers) !== null && _a !== void 0 ? _a : [];
            if (typeof idx === 'number' && layers[idx])
                return layers[idx];
            return this.state.featureLayer || layers[0];
        };
        this.buildViloyatLayerIndex = (layers) => __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            this._viloyatKeyToLayerIndex = {};
            const vilField = FILTER_FIELDS.VILOYAT;
            for (let i = 0; i < layers.length; i++) {
                const layer = layers[i];
                if (!layer)
                    continue;
                try {
                    if (!layer.loaded && layer.load)
                        yield layer.load();
                    const q = layer.createQuery();
                    q.where = '1=1';
                    q.outFields = [vilField];
                    q.returnGeometry = false;
                    q.returnDistinctValues = true;
                    q.num = 5000;
                    const res = yield layer.queryFeatures(q);
                    const feats = (_a = res === null || res === void 0 ? void 0 : res.features) !== null && _a !== void 0 ? _a : [];
                    for (const f of feats) {
                        const v = (_b = f.attributes) === null || _b === void 0 ? void 0 : _b[vilField];
                        const key = this.makeViloyatKeyForRouting(String(v !== null && v !== void 0 ? v : ''));
                        if (key && this._viloyatKeyToLayerIndex[key] === undefined) {
                            this._viloyatKeyToLayerIndex[key] = i;
                        }
                    }
                }
                catch (e) {
                    console.warn('[AgriIndicator3] buildViloyatLayerIndex failed:', i, e);
                }
            }
            console.log('[AgriIndicator3] Viloyat->layer index built:', {
                layerCount: layers.length,
                viloyatCount: Object.keys(this._viloyatKeyToLayerIndex).length
            });
        });
        this.initializeMapConnection = (jimuMapView) => __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c, _d;
            const map = (_a = jimuMapView === null || jimuMapView === void 0 ? void 0 : jimuMapView.view) === null || _a === void 0 ? void 0 : _a.map;
            if (!map) {
                this.setState({ connectionStatus: 'failed', error: 'Map view has no map' });
                return;
            }
            // Use JimuLayerViews to also catch nested feature layers.
            const jlvList = (_c = (_b = jimuMapView === null || jimuMapView === void 0 ? void 0 : jimuMapView.getAllJimuLayerViews) === null || _b === void 0 ? void 0 : _b.call(jimuMapView)) !== null && _c !== void 0 ? _c : [];
            const fromLayerViews = (jlvList || [])
                .map((lv) => lv === null || lv === void 0 ? void 0 : lv.layer)
                .filter((l) => l && l.type === 'feature');
            const fromMapTopLevel = map.layers
                .toArray()
                .filter((l) => (l === null || l === void 0 ? void 0 : l.type) === 'feature');
            const allLayers = [];
            const seen = new Set();
            for (const l of [...fromLayerViews, ...fromMapTopLevel]) {
                const key = String((l === null || l === void 0 ? void 0 : l.id) || (l === null || l === void 0 ? void 0 : l.url) || '');
                if (!key)
                    continue;
                if (seen.has(key))
                    continue;
                seen.add(key);
                allLayers.push(l);
            }
            const layers = allLayers;
            const attributeField = ((_d = this.props.config) === null || _d === void 0 ? void 0 : _d.attributeField) || FILTER_FIELDS.VEG_M;
            // Prefer layers that contain the aggregation field (e.g. veg_m) and viloyat for routing
            const candidates = layers.filter((fl) => {
                const names = (fl.fields || []).map((f) => f.name.toLowerCase());
                return names.includes(attributeField.toLowerCase()) && names.includes(FILTER_FIELDS.VILOYAT.toLowerCase());
            });
            const featureLayers = candidates.length ? candidates : layers;
            if (!featureLayers.length) {
                this.setState({
                    connectionStatus: 'failed',
                    error: 'No suitable feature layers found in the map.'
                });
                return;
            }
            yield this.buildViloyatLayerIndex(featureLayers);
            const routed = this.state.selectedViloyat
                ? this.getFeatureLayerForViloyat(this.state.selectedViloyat, featureLayers)
                : featureLayers[0];
            this.setState({
                featureLayers,
                featureLayer: routed,
                connectionStatus: 'connected',
                error: null
            }, () => {
                if (!this.state.dataSource)
                    return;
                if (this.shouldFetchForViloyat())
                    this.fetchData();
                else {
                    this.setState({
                        loading: false,
                        error: null,
                        vegetationArea: null,
                        totalArea: null,
                        featureCount: 0
                    });
                }
            });
        });
        this.onDataSourceCreated = (dataSource) => {
            this.setState({
                dataSource: dataSource,
                error: null
            }, () => {
                var _a;
                if (!((_a = this.props.config) === null || _a === void 0 ? void 0 : _a.useApiDataSource) && this.state.connectionStatus === 'connected') {
                    if (this.shouldFetchForViloyat())
                        this.fetchData();
                    else
                        this.setState({
                            loading: false,
                            error: null,
                            vegetationArea: null,
                            totalArea: null,
                            featureCount: 0
                        });
                }
            });
        };
        this.onDataSourceInfoChange = (info) => {
            var _a;
            if ((_a = this.props.config) === null || _a === void 0 ? void 0 : _a.useApiDataSource)
                return;
            if (this.state.connectionStatus !== 'connected')
                return;
            if (info && info.status === jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceStatus.Loaded) {
                const isSelectionChange = info.selectIds && info.selectIds.length > 0;
                if (!isSelectionChange)
                    this.throttledFetchData();
            }
        };
        // =========================
        // API fetch
        // =========================
        this.fetchApiData = () => __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c, _d, _e;
            if (!this._isMounted)
                return;
            if (!this.shouldFetchForViloyat()) {
                this.setState({
                    loading: false,
                    error: null,
                    vegetationArea: null,
                    totalArea: null,
                    featureCount: 0
                });
                return;
            }
            try {
                if (this._abortController)
                    this._abortController.abort();
                this._abortController = new AbortController();
                const signal = this._abortController.signal;
                this.setState({ loading: true, error: null });
                const { selectedYil, selectedViloyat, selectedTuman, selectedYerToifas, selectedVegetationStatus, selectedCropType } = this.state;
                const endpoint = this.buildApiUrl();
                const baseParams = new URLSearchParams();
                if (selectedYil)
                    baseParams.set('yil', selectedYil);
                if (selectedCropType)
                    baseParams.set('ekin_turi', this.normalizeUzbekForApi(selectedCropType));
                if (selectedVegetationStatus)
                    baseParams.set('vh', this.normalizeUzbekForApi(selectedVegetationStatus));
                // ✅ CHANGED: API param default now 'turi'
                const ytfParamName = (((_a = this.props.config) === null || _a === void 0 ? void 0 : _a.yerToifasParam) || FILTER_FIELDS.TURI).trim();
                if (selectedYerToifas)
                    baseParams.set(ytfParamName, this.normalizeUzbekForApi(selectedYerToifas));
                const tumList = selectedTuman ? this.makeDistrictSuffixVariants(selectedTuman) : [''];
                const vilList = selectedViloyat ? this.makeRegionSuffixVariants(selectedViloyat) : [''];
                let finalValue = 0;
                let matched = false;
                outer: for (const tum of tumList) {
                    for (const vil of vilList) {
                        const qp = new URLSearchParams(baseParams.toString());
                        if (tum)
                            qp.set('tuman', tum);
                        if (vil)
                            qp.set('viloyat', vil);
                        const url = `${endpoint}?${qp.toString()}`;
                        console.log(`[VegStats] Fetching data from API: ${url}`);
                        const opts = {
                            method: 'GET',
                            headers: { Accept: 'application/json' },
                            signal
                        };
                        if (((_b = this.props.config) === null || _b === void 0 ? void 0 : _b.useAuthentication) && ((_c = this.props.config) === null || _c === void 0 ? void 0 : _c.apiKey)) {
                            opts.headers['Authorization'] = `Bearer ${this.props.config.apiKey}`;
                        }
                        const resp = yield fetch(url, opts);
                        if (signal.aborted) {
                            this.setState({ loading: false });
                            return;
                        }
                        if (!resp.ok)
                            throw new Error(`API request failed with status ${resp.status}`);
                        const data = yield resp.json();
                        const cfgField = (((_d = this.props.config) === null || _d === void 0 ? void 0 : _d.responseField) || '').trim();
                        const candidates = [cfgField, 'total', 'value', 'count', 'maydon'].filter(Boolean);
                        let value = null;
                        for (const key of candidates) {
                            if (key && data && typeof data === 'object' && key in data) {
                                const v = Number(data[key]);
                                if (!Number.isNaN(v)) {
                                    value = v;
                                    break;
                                }
                            }
                            if (key && (data === null || data === void 0 ? void 0 : data.result) && typeof data.result === 'object' && key in data.result) {
                                const v = Number(data.result[key]);
                                if (!Number.isNaN(v)) {
                                    value = v;
                                    break;
                                }
                            }
                        }
                        if (value == null && typeof data === 'number')
                            value = Number(data);
                        if (value != null && !Number.isNaN(value)) {
                            finalValue = value;
                            matched = true;
                            break outer;
                        }
                    }
                }
                const decimals = ((_e = this.props.config) === null || _e === void 0 ? void 0 : _e.decimalPlaces) || 0;
                const rounded = decimals > 0 ? parseFloat(finalValue.toFixed(decimals)) : Math.round(finalValue);
                this.setState({
                    vegetationArea: rounded,
                    totalArea: rounded,
                    loading: false,
                    lastUpdate: new Date(),
                    error: null
                });
            }
            catch (err) {
                if ((err === null || err === void 0 ? void 0 : err.name) === 'AbortError')
                    return;
                console.error('[VegStats] Error fetching API data:', err);
                this.setState({ error: (err === null || err === void 0 ? void 0 : err.message) || 'Failed to fetch data from API', loading: false });
            }
            finally {
                this._abortController = null;
            }
        });
        // =========================
        // FeatureLayer stats fetch
        // =========================
        this.fetchData = (_forceRefresh) => __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
            if ((_a = this.props.config) === null || _a === void 0 ? void 0 : _a.useApiDataSource)
                return this.fetchApiData();
            if (!this.shouldFetchForViloyat()) {
                // Keep it blank when viloyat isn't chosen (also covers groupBy mode).
                this.setState({
                    loading: false,
                    error: null,
                    vegetationArea: null,
                    totalArea: null,
                    featureCount: 0
                });
                return;
            }
            if ((_b = this.props.config) === null || _b === void 0 ? void 0 : _b.groupByField)
                return this.fetchGroupedStats();
            if (this.state.connectionStatus !== 'connected')
                return;
            try {
                if (this._abortController)
                    this._abortController.abort();
                this._abortController = new AbortController();
                this.setState({ loading: true, error: null });
                const fl = this.state.featureLayer;
                if (!fl) {
                    this.setState({ loading: false, error: 'No feature layer available' });
                    return;
                }
                const oidField = fl.objectIdField || 'objectid';
                const op = (((_c = this.props.config) === null || _c === void 0 ? void 0 : _c.statOperation) || 'count');
                const field = (((_d = this.props.config) === null || _d === void 0 ? void 0 : _d.attributeField) || '').trim();
                let where = this.buildWhereClause();
                if (((_e = this.props.config) === null || _e === void 0 ? void 0 : _e.excludeZeroValues) && field) {
                    where += ` AND ${this.nz(field)}`;
                }
                if (op === 'first') {
                    const q = fl.createQuery();
                    q.where = where;
                    q.outFields = [field];
                    q.orderByFields = [`${field} ASC`];
                    q.returnGeometry = false;
                    q.num = 1;
                    const res = yield fl.queryFeatures(q);
                    const v = Number((_j = (_h = (_g = (_f = res === null || res === void 0 ? void 0 : res.features) === null || _f === void 0 ? void 0 : _f[0]) === null || _g === void 0 ? void 0 : _g.attributes) === null || _h === void 0 ? void 0 : _h[field]) !== null && _j !== void 0 ? _j : 0);
                    const dp = Number(((_k = this.props.config) === null || _k === void 0 ? void 0 : _k.decimalPlaces) || 0);
                    const val = dp > 0 ? parseFloat(v.toFixed(dp)) : Math.round(v);
                    this.setState({
                        vegetationArea: val,
                        totalArea: val,
                        featureCount: ((_l = res === null || res === void 0 ? void 0 : res.features) === null || _l === void 0 ? void 0 : _l.length) || 0,
                        loading: false,
                        lastUpdate: new Date(),
                        error: null
                    });
                    return;
                }
                const statMap = {
                    count: 'count',
                    sum: 'sum',
                    avg: 'avg',
                    min: 'min',
                    max: 'max'
                };
                if (op !== 'count' && !field) {
                    this.setState({ loading: false, error: 'Select attribute field for this aggregation' });
                    return;
                }
                const onField = op === 'count' ? oidField : field;
                const q = fl.createQuery();
                q.where = where;
                q.outStatistics = [
                    {
                        onStatisticField: onField,
                        statisticType: statMap[op],
                        outStatisticFieldName: 'agg'
                    }
                ];
                q.returnGeometry = false;
                const stats = yield fl.queryFeatures(q);
                const raw = Number((_q = (_p = (_o = (_m = stats === null || stats === void 0 ? void 0 : stats.features) === null || _m === void 0 ? void 0 : _m[0]) === null || _o === void 0 ? void 0 : _o.attributes) === null || _p === void 0 ? void 0 : _p.agg) !== null && _q !== void 0 ? _q : 0);
                const dp = Number(((_r = this.props.config) === null || _r === void 0 ? void 0 : _r.decimalPlaces) || 0);
                const val = dp > 0 ? parseFloat(raw.toFixed(dp)) : Math.round(raw);
                this.setState({
                    vegetationArea: val,
                    totalArea: val,
                    loading: false,
                    lastUpdate: new Date(),
                    error: null
                });
            }
            catch (e) {
                if ((e === null || e === void 0 ? void 0 : e.name) === 'AbortError') {
                    this.setState({ loading: false });
                    return;
                }
                console.error(e);
                this.setState({ loading: false, error: (e === null || e === void 0 ? void 0 : e.message) || 'Query failed' });
            }
            finally {
                this._abortController = null;
            }
        });
        // =========================
        // Formatting + theme
        // =========================
        this.formatNumber = (num) => {
            var _a;
            if (num === null || num === undefined)
                return '-';
            const decimalPlaces = ((_a = this.props.config) === null || _a === void 0 ? void 0 : _a.decimalPlaces) || 0;
            const formattedNum = decimalPlaces > 0 ? num.toFixed(decimalPlaces) : Math.round(num).toString();
            return formattedNum.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
        };
        this.formatUpdateTime = (date) => {
            if (!date)
                return '';
            const h = date.getHours().toString().padStart(2, '0');
            const m = date.getMinutes().toString().padStart(2, '0');
            return `${h}:${m}`;
        };
        this.handleThemeChange = (_event) => {
            // optional hook if you later want to react to theme toggles
        };
        // =========================
        // ✅ KEY FIX: do not override CSS theme unless user explicitly sets values
        // =========================
        this.getCustomStyles = () => {
            var _a, _b, _c;
            const cfg = (this.props.config || {});
            const backgroundColorRaw = ((_a = cfg.backgroundColor) !== null && _a !== void 0 ? _a : '').toString().trim();
            const hasBgOverride = backgroundColorRaw.length > 0;
            const textColorRaw = ((_b = cfg.textColor) !== null && _b !== void 0 ? _b : '').toString().trim();
            const labelColorRaw = ((_c = cfg.labelColor) !== null && _c !== void 0 ? _c : '').toString().trim();
            const borderRadiusCfg = typeof cfg.borderRadius === 'number'
                ? cfg.borderRadius
                : typeof cfg.borderRadius === 'string' && cfg.borderRadius.trim() !== ''
                    ? Number(cfg.borderRadius)
                    : null;
            const iconSizeCfg = typeof cfg.iconSize === 'number'
                ? cfg.iconSize
                : typeof cfg.iconSize === 'string' && cfg.iconSize.trim() !== ''
                    ? Number(cfg.iconSize)
                    : null;
            const iconOpacityCfg = typeof cfg.iconOpacity === 'number'
                ? cfg.iconOpacity
                : typeof cfg.iconOpacity === 'string' && cfg.iconOpacity.trim() !== ''
                    ? Number(cfg.iconOpacity)
                    : null;
            const containerStyles = {};
            if (borderRadiusCfg != null && Number.isFinite(borderRadiusCfg))
                containerStyles.borderRadius = `${borderRadiusCfg}px`;
            if (textColorRaw)
                containerStyles.color = textColorRaw;
            if (hasBgOverride) {
                const isGradient = /gradient/i.test(backgroundColorRaw);
                if (isGradient)
                    containerStyles.background = backgroundColorRaw;
                else
                    containerStyles.backgroundColor = backgroundColorRaw;
            }
            const statLabel = {};
            if (labelColorRaw)
                statLabel.color = labelColorRaw;
            const statValue = {};
            if (textColorRaw)
                statValue.color = textColorRaw;
            const iconContainer = {};
            if (iconSizeCfg != null && Number.isFinite(iconSizeCfg)) {
                iconContainer.width = `${iconSizeCfg}px`;
                iconContainer.height = `${iconSizeCfg}px`;
            }
            const icon = {};
            if (iconOpacityCfg != null && Number.isFinite(iconOpacityCfg)) {
                icon.opacity = Math.max(0, Math.min(1, iconOpacityCfg / 100));
            }
            return { container: containerStyles, statLabel, statValue, iconContainer, icon, hasBgOverride };
        };
        this.state = {
            vegetationArea: null,
            loading: true,
            error: null,
            featureCount: 0,
            lastUpdate: null,
            connectionStatus: 'idle',
            mapConnectionAttempts: 0,
            featureLayers: [],
            selectedYil: '',
            selectedViloyat: '',
            selectedTuman: '',
            selectedYerToifas: '',
            totalArea: null,
            selectedVegetationStatus: '',
            selectedCropType: '',
            barCategoryField: null,
            barCategoryValue: null,
            selectedNdviDate: '',
            ndviStatusField: null,
            lastFilterEventTimestamp: 0,
            isHandlingExternalEvent: false
        };
        this.throttledFetchData = lodash_throttle__WEBPACK_IMPORTED_MODULE_3___default()(this.fetchData, 300, { leading: false, trailing: true });
        // Bind
        this.fetchData = this.fetchData.bind(this);
        this.fetchApiData = this.fetchApiData.bind(this);
        this.onDataSourceCreated = this.onDataSourceCreated.bind(this);
        this.onDataSourceInfoChange = this.onDataSourceInfoChange.bind(this);
        this.onActiveViewChange = this.onActiveViewChange.bind(this);
        this.retryMapConnection = this.retryMapConnection.bind(this);
        this.initializeMapConnection = this.initializeMapConnection.bind(this);
        this.readFiltersFromUrl = this.readFiltersFromUrl.bind(this);
        this.handleThemeChange = this.handleThemeChange.bind(this);
        this.setupAutoRefresh = this.setupAutoRefresh.bind(this);
        // External handlers
        this.handleYilChange = this.handleYilChange.bind(this);
        this.handleRegionChange = this.handleRegionChange.bind(this);
        this.handleConstructionYearChanged = this.handleConstructionYearChanged.bind(this);
        this.handleWaterSupplyFilterChange = this.handleWaterSupplyFilterChange.bind(this);
        this.handleCategorySelection = this.handleCategorySelection.bind(this);
        this.handleKadastrFiltersChanged = this.handleKadastrFiltersChanged.bind(this);
        this.handleKadastrFiltersReset = this.handleKadastrFiltersReset.bind(this);
        this.handleVegetationStatusChange = this.handleVegetationStatusChange.bind(this);
        this.handleCropTypeChange = this.handleCropTypeChange.bind(this);
        this._onReset = () => {
            console.log('[VegetationStatsWidget] Resetting widget');
            this._isResetting = true;
            if (this._abortController) {
                this._abortController.abort();
                this._abortController = null;
            }
            this.setState({
                selectedYil: '',
                selectedViloyat: '',
                selectedTuman: '',
                selectedYerToifas: '',
                selectedVegetationStatus: '',
                selectedCropType: '',
                barCategoryField: null,
                barCategoryValue: null,
                vegetationArea: null,
                totalArea: null,
                loading: true,
                error: null,
                groupResults: undefined
            }, () => {
                var _a;
                if ((_a = this.props.config) === null || _a === void 0 ? void 0 : _a.useApiDataSource)
                    this.fetchApiData();
                else if (this.state.connectionStatus === 'connected')
                    this.fetchData(true);
                setTimeout(() => (this._isResetting = false), 500);
            });
        };
    }
    normalizeApos(s) {
        return (s !== null && s !== void 0 ? s : '').replace(/['''ʻʼ`]/g, "'");
    }
    escapeArcGIS(value) {
        return value ? value.replace(/'/g, "''") : '';
    }
    eqAposSmart(field, raw) {
        if (!raw)
            return '';
        const s = this.normalizeApos(String(raw).trim());
        if (!/'/.test(s))
            return `${field}='${this.escapeArcGIS(s)}'`;
        const base = s.replace(/'/g, '\uFFFF');
        const parts = VegetationStatsWidget.APOSTROPHE_VARIANTS.map((ch) => {
            const candidate = base.split('\uFFFF').join(ch);
            return `${field}='${this.escapeArcGIS(candidate)}'`;
        });
        return `(${parts.join(' OR ')})`;
    }
    componentDidMount() {
        var _a;
        this._isMounted = true;
        // connection mode
        if (!((_a = this.props.config) === null || _a === void 0 ? void 0 : _a.useApiDataSource))
            this.setState({ connectionStatus: 'connecting' });
        else
            this.setState({ connectionStatus: 'connected' }, () => this.fetchApiData());
        // ✅ Listen to master filter (AgriFilter) and to category/crop selection (e.g. from Pie) so Indicator filters by crop
        document.addEventListener('masterFilterChanged', this.handleMasterFilterChanged);
        document.addEventListener('categoryFilterChanged', this.handleExternalCategory);
        // keep reset support
        BUS.addEventListener('resetAllFilters', this._onReset);
        BUS.addEventListener('resetAllWidgets', this._onReset);
        // optional: url hydration if you still want it
        window.addEventListener('popstate', this.readFiltersFromUrl);
        // initial hydration (if url has values)
        this.readFiltersFromUrl();
        this.setupAutoRefresh();
        // init guard
        this.initializationTimer = setTimeout(() => this.ensureInitialization(), 3000);
    }
    shouldFetchForViloyat() {
        // Requirement: keep indicator blank until a viloyat is selected.
        return !!(this.state.selectedViloyat || '').trim();
    }
    componentWillUnmount() {
        var _a;
        this._isMounted = false;
        document.removeEventListener('masterFilterChanged', this.handleMasterFilterChanged);
        document.removeEventListener('categoryFilterChanged', this.handleExternalCategory);
        BUS.removeEventListener('resetAllFilters', this._onReset);
        BUS.removeEventListener('resetAllWidgets', this._onReset);
        window.removeEventListener('popstate', this.readFiltersFromUrl);
        if ((_a = this.throttledFetchData) === null || _a === void 0 ? void 0 : _a.cancel)
            this.throttledFetchData.cancel();
        if (this.initializationTimer)
            clearTimeout(this.initializationTimer);
        if (this.refreshTimer)
            clearInterval(this.refreshTimer);
        if (this._abortController) {
            this._abortController.abort();
            this._abortController = null;
        }
    }
    componentDidUpdate(prevProps, prevState) {
        var _a;
        const { connectionStatus, mapConnectionAttempts } = this.state;
        const { useMapWidgetIds, config } = this.props;
        if (prevProps.config !== config) {
            if (((_a = prevProps.config) === null || _a === void 0 ? void 0 : _a.useApiDataSource) !== (config === null || config === void 0 ? void 0 : config.useApiDataSource)) {
                if (config === null || config === void 0 ? void 0 : config.useApiDataSource) {
                    this.setState({ connectionStatus: 'connected' }, () => this.fetchApiData());
                }
                else {
                    this.setState({ connectionStatus: 'connecting' });
                }
            }
            this.setupAutoRefresh();
        }
        if (!(config === null || config === void 0 ? void 0 : config.useApiDataSource) &&
            connectionStatus === 'connecting' &&
            useMapWidgetIds &&
            useMapWidgetIds.length > 0 &&
            !this.state.activeMapView &&
            mapConnectionAttempts !== prevState.mapConnectionAttempts) {
            if (mapConnectionAttempts < this.MAX_CONNECTION_ATTEMPTS) {
                setTimeout(() => {
                    console.log(`[VegStats] Retry attempt ${mapConnectionAttempts + 1} of ${this.MAX_CONNECTION_ATTEMPTS}`);
                    this.setState((ps) => ({ mapConnectionAttempts: ps.mapConnectionAttempts + 1 }));
                }, 2000);
            }
            else {
                this.setState({ connectionStatus: 'failed' });
            }
        }
    }
    // =========================
    // URL sync
    // =========================
    readFiltersFromUrl() {
        try {
            const urlParams = new URLSearchParams(window.location.search);
            const yil = urlParams.get('yil') || '';
            const viloyat = urlParams.get('viloyat') || '';
            const tuman = urlParams.get('tuman') || '';
            const turi = urlParams.get('turi') || urlParams.get('tur') || '';
            const vh = urlParams.get('vh') || '';
            const ekin = urlParams.get('ekin_turi') || '';
            const nextVil = this.normalizeApos(viloyat);
            const nextTum = this.normalizeApos(tuman);
            const nextTuri = this.normalizeApos(turi);
            const changed = yil !== this.state.selectedYil ||
                nextVil !== this.state.selectedViloyat ||
                nextTum !== this.state.selectedTuman ||
                nextTuri !== this.state.selectedYerToifas ||
                this.normalizeApos(vh) !== this.state.selectedVegetationStatus ||
                this.normalizeApos(ekin) !== this.state.selectedCropType;
            if (!changed)
                return;
            this.setState({
                selectedYil: yil,
                selectedViloyat: nextVil,
                selectedTuman: nextTum,
                selectedYerToifas: nextTuri,
                selectedVegetationStatus: this.normalizeApos(vh),
                selectedCropType: this.normalizeApos(ekin)
            }, () => {
                var _a;
                // if something is already connected, refresh immediately
                if ((_a = this.props.config) === null || _a === void 0 ? void 0 : _a.useApiDataSource)
                    this.fetchApiData();
                else if (this.state.connectionStatus === 'connected')
                    this.throttledFetchData();
            });
        }
        catch (error) {
            console.error('[VegStats] Error reading URL parameters:', error);
        }
    }
    retryMapConnection() {
        this.setState({
            connectionStatus: 'connecting',
            mapConnectionAttempts: 0,
            error: null
        });
    }
    // =========================
    // WHERE builder (FeatureLayer)
    // =========================
    buildWhereClause() {
        var _a, _b, _c, _d;
        const { selectedYil, selectedViloyat, selectedTuman, selectedVegetationStatus, selectedCropType, selectedYerToifas } = this.state;
        const clauses = [];
        // We only want NDVI/date + VH/bar filters to kick in
        // after there is at least some geographic or crop scope,
        // otherwise with just a year selected we'd be filtering
        // the entire country by the latest NDVI date.
        const hasGeoOrCrop = !!selectedViloyat || !!selectedTuman || !!selectedYerToifas;
        // Year (robust)
        if (selectedYil) {
            const yDigits = (_b = (_a = String(selectedYil).match(/\b(18|19|20)\d{2}\b/)) === null || _a === void 0 ? void 0 : _a[0]) !== null && _b !== void 0 ? _b : String(selectedYil).replace(/[^\d]/g, '');
            if (yDigits)
                clauses.push(`${FILTER_FIELDS.YIL} LIKE '${yDigits}%'`);
            else
                clauses.push(`${FILTER_FIELDS.YIL} LIKE '%${this.escapeArcGIS(String(selectedYil))}%'`);
        }
        // Region hierarchy
        if (selectedTuman)
            clauses.push(this.eqAposSmart(FILTER_FIELDS.TUMAN, selectedTuman));
        else if (selectedViloyat)
            clauses.push(this.eqAposSmart(FILTER_FIELDS.VILOYAT, selectedViloyat));
        // ✅ Crop (turi): always apply when selected so Indicator filters by crop (layer may not have .fields loaded yet)
        const yerToifasField = (((_c = this.props.config) === null || _c === void 0 ? void 0 : _c.yerToifasField) || FILTER_FIELDS.TURI).trim();
        if (selectedYerToifas) {
            clauses.push(this.eqAposSmart(yerToifasField, selectedYerToifas));
        }
        // NDVI date-only filter: only require non-null status once we
        // have at least some geographic/crop scope (viloyat/tuman/turi).
        // If only yil is selected, skip NDVI so the indicator shows
        // a pure year-based aggregate.
        if (hasGeoOrCrop && this.state.ndviStatusField) {
            clauses.push(`${this.state.ndviStatusField} IS NOT NULL`);
        }
        // Bar selection: use current bar attribute + value (like Graff), not literal vh field.
        // Again, only after we have some geographic/crop filter to avoid
        // a nationwide NDVI slice with just a year selected.
        if (hasGeoOrCrop && this.state.barCategoryField && this.state.barCategoryValue) {
            clauses.push(`${this.state.barCategoryField} = '${this.escapeArcGIS(this.state.barCategoryValue)}'`);
        }
        else if (hasGeoOrCrop && selectedVegetationStatus) {
            clauses.push(this.eqAposSmart(FILTER_FIELDS.VH, selectedVegetationStatus));
        }
        if (selectedCropType)
            clauses.push(this.eqAposSmart(FILTER_FIELDS.EKIN, selectedCropType));
        const configFilterExpression = (_d = this.props.config) === null || _d === void 0 ? void 0 : _d.filterExpression;
        if (configFilterExpression &&
            configFilterExpression.trim() !== '' &&
            configFilterExpression !== '1=1' &&
            !clauses.some((c) => c.includes(configFilterExpression))) {
            clauses.push(`(${configFilterExpression})`);
        }
        const result = clauses.length > 0 ? clauses.join(' AND ') : '1=1';
        console.log('[VegetationStatsWidget] Built WHERE clause:', result);
        return result;
    }
    // =========================
    // API url builder
    // =========================
    buildApiUrl() {
        var _a, _b, _c, _d;
        const cfg = (this.props.config || {});
        let endpoint = ((_d = (_c = (_b = (_a = cfg.apiEndpoint) !== null && _a !== void 0 ? _a : cfg.apiUrl) !== null && _b !== void 0 ? _b : cfg.endpoint) !== null && _c !== void 0 ? _c : cfg.url) !== null && _d !== void 0 ? _d : '').toString().trim();
        if (!endpoint)
            throw new Error('Missing API endpoint: set config.apiEndpoint (or apiUrl/endpoint/url).');
        endpoint = endpoint.split('?')[0].replace(/[?&]$/, '');
        const { selectedYil, selectedViloyat, selectedTuman, selectedYerToifas, selectedVegetationStatus, selectedCropType } = this.state;
        const enc = (v) => encodeURIComponent(this.normalizeUzbekForApi(v || ''));
        const replacements = {
            '{yil}': enc(selectedYil),
            '{viloyat}': enc(selectedViloyat),
            '{tuman}': enc(selectedTuman),
            // ✅ CHANGED: support {turi} and old {tur}
            '{turi}': enc(selectedYerToifas),
            '{tur}': enc(selectedYerToifas),
            '{vh}': enc(selectedVegetationStatus),
            '{ekin_turi}': enc(selectedCropType)
        };
        endpoint = endpoint.replace(/\{(yil|viloyat|tuman|turi|tur|vh|ekin_turi)\}/g, (m) => { var _a; return (_a = replacements[m]) !== null && _a !== void 0 ? _a : ''; });
        return endpoint;
    }
    // =========================
    // Grouped stats
    // =========================
    fetchGroupedStats() {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c, _d, _e, _f;
            const { featureLayer, connectionStatus } = this.state;
            const cfg = (this.props.config || {});
            const groupField = (cfg.groupByField || '').trim();
            const statOp = (cfg.statOperation || 'count');
            const valueField = cfg.attributeField || '*';
            const outName = cfg.outStatName || 'agg';
            if (!featureLayer || connectionStatus !== 'connected' || !groupField) {
                return this.fetchData();
            }
            if (statOp === 'first') {
                return this.fetchGroupedFirst(featureLayer, groupField, valueField, outName);
            }
            this.setState({ loading: true, error: null });
            const baseWhere = this.buildWhereClause();
            const oidField = featureLayer.objectIdField || 'objectid';
            const onField = statOp === 'count' ? oidField : valueField;
            const outStatistics = [
                {
                    onStatisticField: onField,
                    statisticType: { count: 'count', sum: 'sum', avg: 'avg', min: 'min', max: 'max' }[statOp],
                    outStatisticFieldName: outName
                }
            ];
            let nonNullWhere = `${baseWhere} AND ${groupField} IS NOT NULL`;
            if (cfg.excludeZeroValues) {
                if (statOp === 'count' && (cfg.attributeField || '').trim()) {
                    nonNullWhere += ` AND ${this.nz(cfg.attributeField.trim())}`;
                }
                if (statOp !== 'count' && valueField && valueField !== '*') {
                    nonNullWhere += ` AND ${this.nz(valueField)}`;
                }
                nonNullWhere += ` AND ${groupField} <> 0 AND ${groupField} <> '0'`;
            }
            const qGrouped = featureLayer.createQuery();
            qGrouped.where = nonNullWhere;
            qGrouped.groupByFieldsForStatistics = [groupField];
            qGrouped.outStatistics = outStatistics;
            qGrouped.returnGeometry = false;
            qGrouped.num = 2000;
            const grouped = yield featureLayer.queryFeatures(qGrouped);
            const rows = ((grouped === null || grouped === void 0 ? void 0 : grouped.features) || []).map((f) => {
                var _a;
                const d = f === null || f === void 0 ? void 0 : f.attributes;
                return { key: d[groupField], value: Number((_a = d[outName]) !== null && _a !== void 0 ? _a : 0) };
            });
            if (cfg.includeNullCategory) {
                let whereNull = `${baseWhere} AND ${groupField} IS NULL`;
                if (cfg.excludeZeroValues) {
                    if (statOp === 'count' && (cfg.attributeField || '').trim()) {
                        whereNull += ` AND ${this.nz(cfg.attributeField.trim())}`;
                    }
                    if (statOp !== 'count' && valueField && valueField !== '*') {
                        whereNull += ` AND ${this.nz(valueField)}`;
                    }
                }
                const qNull = featureLayer.createQuery();
                qNull.where = whereNull;
                qNull.outStatistics = outStatistics;
                qNull.returnGeometry = false;
                qNull.num = 1;
                const nullRes = yield featureLayer.queryFeatures(qNull);
                const nullVal = Number((_d = (_c = (_b = (_a = nullRes === null || nullRes === void 0 ? void 0 : nullRes.features) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.attributes) === null || _c === void 0 ? void 0 : _c[outName]) !== null && _d !== void 0 ? _d : 0);
                rows.push({ key: null, value: nullVal });
            }
            let final;
            if ((cfg.categoryMode || 'AUTO') === 'ENUM' && Array.isArray(cfg.enumCategories) && cfg.enumCategories.length) {
                const asMap = new Map();
                rows.forEach((r) => {
                    const k = r.key == null ? null : String(r.key);
                    asMap.set(k, (asMap.get(k) || 0) + r.value);
                });
                final = cfg.enumCategories.map((c) => {
                    const k = c.value == null ? null : String(c.value);
                    return { key: c.value, label: c.label, value: Number(asMap.get(k) || 0) };
                });
            }
            else {
                final = rows
                    .sort((a, b) => {
                    if (a.key == null && b.key == null)
                        return 0;
                    if (a.key == null)
                        return -1;
                    if (b.key == null)
                        return 1;
                    return String(a.key).localeCompare(String(b.key), undefined, { numeric: true });
                })
                    .map((r) => ({
                    key: r.key,
                    label: r.key == null ? '<No value>' : String(r.key),
                    value: r.value
                }));
            }
            const dp = Number(cfg.decimalPlaces || 0);
            const rounded = final.map((x) => (Object.assign(Object.assign({}, x), { value: dp > 0 ? parseFloat(x.value.toFixed(dp)) : Math.round(x.value) })));
            const total = rounded.reduce((s, r) => s + (isNaN(r.value) ? 0 : r.value), 0);
            const displayKey = cfg.displayGroupValue;
            const displayVal = displayKey !== undefined
                ? (_f = (_e = rounded.find((r) => (r.key == null && displayKey == null) || String(r.key) === String(displayKey))) === null || _e === void 0 ? void 0 : _e.value) !== null && _f !== void 0 ? _f : 0
                : total;
            this.setState({
                groupResults: rounded,
                vegetationArea: displayVal,
                totalArea: total,
                loading: false,
                lastUpdate: new Date(),
                error: null
            });
        });
    }
    fetchGroupedFirst(featureLayer, groupField, valueField, _outName) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c, _d, _e, _f;
            const cfg = (this.props.config || {});
            this.setState({ loading: true, error: null });
            const baseWhere = this.buildWhereClause();
            let where1 = `${baseWhere} AND ${groupField} IS NOT NULL`;
            if (cfg.excludeZeroValues && valueField)
                where1 += ` AND ${this.nz(valueField)}`;
            const q = featureLayer.createQuery();
            q.where = where1;
            q.outFields = [groupField, valueField];
            q.orderByFields = [`${groupField} ASC`];
            q.returnGeometry = false;
            q.num = 3000;
            const res = yield featureLayer.queryFeatures(q);
            const firstMap = new Map();
            for (const f of (res === null || res === void 0 ? void 0 : res.features) || []) {
                const d = f === null || f === void 0 ? void 0 : f.attributes;
                const k = d[groupField];
                if (!firstMap.has(k))
                    firstMap.set(k, Number(d[valueField]));
            }
            const rows = Array.from(firstMap.entries()).map(([key, v]) => ({
                key,
                value: Number.isFinite(Number(v)) ? Number(v) : 0
            }));
            if (cfg.includeNullCategory) {
                let whereNull = `${baseWhere} AND ${groupField} IS NULL`;
                if (cfg.excludeZeroValues && valueField)
                    whereNull += ` AND ${this.nz(valueField)}`;
                const qNull = featureLayer.createQuery();
                qNull.where = whereNull;
                qNull.outFields = [valueField];
                qNull.returnGeometry = false;
                qNull.num = 1;
                const resNull = yield featureLayer.queryFeatures(qNull);
                const v = Number((_d = (_c = (_b = (_a = resNull === null || resNull === void 0 ? void 0 : resNull.features) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.attributes) === null || _c === void 0 ? void 0 : _c[valueField]) !== null && _d !== void 0 ? _d : 0);
                rows.push({ key: null, value: Number.isFinite(v) ? v : 0 });
            }
            const dp = Number(cfg.decimalPlaces || 0);
            const final = rows
                .sort((a, b) => {
                if (a.key == null && b.key == null)
                    return 0;
                if (a.key == null)
                    return -1;
                if (b.key == null)
                    return 1;
                return String(a.key).localeCompare(String(b.key), undefined, { numeric: true });
            })
                .map((r) => ({
                key: r.key,
                label: r.key == null ? '<No value>' : String(r.key),
                value: dp > 0 ? parseFloat(r.value.toFixed(dp)) : Math.round(r.value)
            }));
            const total = final.reduce((s, r) => s + (isNaN(r.value) ? 0 : r.value), 0);
            const displayKey = cfg.displayGroupValue;
            const displayVal = displayKey !== undefined
                ? (_f = (_e = final.find((r) => (r.key == null && displayKey == null) || String(r.key) === String(displayKey))) === null || _e === void 0 ? void 0 : _e.value) !== null && _f !== void 0 ? _f : 0
                : total;
            this.setState({
                groupResults: final,
                vegetationArea: displayVal,
                totalArea: total,
                loading: false,
                lastUpdate: new Date(),
                error: null
            });
        });
    }
    setupAutoRefresh() {
        if (this.refreshTimer) {
            clearInterval(this.refreshTimer);
            this.refreshTimer = null;
        }
        const { autoRefresh, refreshInterval } = (this.props.config || {});
        if (autoRefresh !== false && refreshInterval) {
            const intervalMs = (refreshInterval || 5) * 60 * 1000;
            this.refreshTimer = setInterval(() => {
                if (this._isMounted)
                    this.refreshData();
            }, intervalMs);
        }
    }
    // =========================
    // UI
    // =========================
    render() {
        var _a, _b;
        const { vegetationArea, loading, error, connectionStatus, lastUpdate, selectedYil, selectedViloyat, selectedTuman, selectedYerToifas, groupResults } = this.state;
        const { config, useDataSources, useMapWidgetIds } = this.props;
        const useApiDataSource = !!(config === null || config === void 0 ? void 0 : config.useApiDataSource);
        const label = (config === null || config === void 0 ? void 0 : config.label) || 'Захира ерларида аниқланган вегетатив майдон';
        const unitLabel = (_a = config === null || config === void 0 ? void 0 : config.unitLabel) !== null && _a !== void 0 ? _a : 'га';
        const showLastUpdate = (config === null || config === void 0 ? void 0 : config.showLastUpdate) !== false;
        const iconImage = config === null || config === void 0 ? void 0 : config.iconImage;
        const groupByField = ((config === null || config === void 0 ? void 0 : config.groupByField) || '').trim();
        const isGrouped = !!groupByField;
        const statOp = ((config === null || config === void 0 ? void 0 : config.statOperation) || (isGrouped ? 'count' : 'sum'));
        const isCountMode = isGrouped && statOp === 'count';
        const effectiveUnit = isCountMode ? '' : unitLabel || '';
        const resolveCategoryLabel = (v) => {
            if (v == null)
                return '<No value>';
            if (((config === null || config === void 0 ? void 0 : config.categoryMode) || 'AUTO') === 'ENUM' && Array.isArray(config === null || config === void 0 ? void 0 : config.enumCategories)) {
                const hit = config.enumCategories.find((c) => (c.value == null && v == null) || String(c.value) === String(v));
                if (hit === null || hit === void 0 ? void 0 : hit.label)
                    return hit.label;
            }
            return String(v);
        };
        const dVal = config === null || config === void 0 ? void 0 : config.displayGroupValue;
        const bucketCaption = isGrouped
            ? dVal === undefined
                ? `Total across ${groupByField}`
                : `${groupByField} = ${resolveCategoryLabel(dVal)}`
            : null;
        const isInitializing = !useApiDataSource && (connectionStatus === 'connecting' || connectionStatus === 'idle');
        const customStyles = this.getCustomStyles();
        // auto theme class if user forces a dark inline background
        const bg = ((_b = config === null || config === void 0 ? void 0 : config.backgroundColor) !== null && _b !== void 0 ? _b : '').toString().toLowerCase();
        const looksDark = /#0f|#0b|#0a|#111|#121|#1a|rgb\(0|rgba\(0|black|dark|navy|midnight/.test(bg);
        const themeClass = customStyles.hasBgOverride && looksDark ? 'dark-theme' : 'light-theme';
        const hideUntilViloyat = (!selectedViloyat || selectedViloyat.trim() === '') && connectionStatus !== 'failed';
        if (hideUntilViloyat) {
            // Keep it visually blank until viloyat is selected.
            return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: `vegetation-stats-widget ${themeClass}`, style: customStyles.container });
        }
        return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: `vegetation-stats-widget ${themeClass}`, style: customStyles.container },
            !useApiDataSource && useDataSources && useDataSources.length > 0 && (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceComponent, { useDataSource: useDataSources[0], onDataSourceCreated: this.onDataSourceCreated, onDataSourceInfoChange: this.onDataSourceInfoChange })),
            !useApiDataSource && (useMapWidgetIds === null || useMapWidgetIds === void 0 ? void 0 : useMapWidgetIds.length) > 0 && (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_arcgis__WEBPACK_IMPORTED_MODULE_2__.JimuMapViewComponent, { useMapWidgetId: useMapWidgetIds[0], onActiveViewChange: this.onActiveViewChange })),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "widget-icon", style: Object.keys(customStyles.iconContainer).length ? customStyles.iconContainer : undefined }, iconImage ? (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("img", { src: typeof iconImage === 'string' ? iconImage : iconImage.url, alt: "Vegetation Icon", className: "vegetation-icon", style: Object.keys(customStyles.icon).length ? customStyles.icon : undefined })) : (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 50 50", className: "vegetation-icon", style: Object.keys(customStyles.icon).length ? customStyles.icon : undefined },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", { d: "M35.9,35.6c-2.9,0-5.2-2.3-5.2-5.2c0-2.9,2.3-5.2,5.2-5.2c2.9,0,5.2,2.3,5.2,5.2C41.1,33.3,38.8,35.6,35.9,35.6z M25,46.9c-0.5,0-0.9-0.4-0.9-0.9V29.4H13.8c-0.5,0-0.9-0.4-0.9-0.9c0-0.5,0.4-0.9,0.9-0.9h10.3V13.1c0-0.5,0.4-0.9,0.9-0.9s0.9,0.4,0.9,0.9v14.6h10.3c0.5,0,0.9,0.4,0.9,0.9c0,0.5-0.4,0.9-0.9,0.9H25.9V46C25.9,46.5,25.5,46.9,25,46.9z", fill: "currentColor" }),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", { d: "M24.1,20.5c-2.9,0-5.2-2.3-5.2-5.2c0-2.9,2.3-5.2,5.2-5.2c2.9,0,5.2,2.3,5.2,5.2C29.3,18.2,27,20.5,24.1,20.5z", fill: "currentColor" }),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", { d: "M14.1,35.6c-2.9,0-5.2-2.3-5.2-5.2c0-2.9,2.3-5.2,5.2-5.2c2.9,0,5.2,2.3,5.2,5.2C19.3,33.3,17,35.6,14.1,35.6z", fill: "currentColor" })))),
            isInitializing || loading ? (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "loading-indicator" },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "loading-spinner" },
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "loading-dot" }),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "loading-dot" }),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "loading-dot" })))) : error ? (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "error-container" },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "error-icon" }, "\u26A0\uFE0F"),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("p", null, error),
                !useApiDataSource && connectionStatus === 'failed' && (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", { className: "retry-button", onClick: this.retryMapConnection }, "Retry Connection")))) : (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "widget-content" },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "stat-label", style: Object.keys(customStyles.statLabel).length ? customStyles.statLabel : undefined }, label),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "stat-value", style: Object.keys(customStyles.statValue).length ? customStyles.statValue : undefined },
                    this.formatNumber(vegetationArea),
                    effectiveUnit && jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("span", { className: "unit" }, effectiveUnit)),
                isGrouped && (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "group-caption", title: bucketCaption || '' },
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("small", null, bucketCaption))),
                showLastUpdate && lastUpdate && (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "meta-info visible" },
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("span", null,
                        "\u23F1 ",
                        this.formatUpdateTime(lastUpdate)),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("span", null,
                        selectedYil ? `yil:${selectedYil}` : '',
                        selectedViloyat ? ` • vil:${selectedViloyat}` : '',
                        selectedTuman ? ` • tum:${selectedTuman}` : '',
                        selectedYerToifas ? ` • turi:${selectedYerToifas}` : '')))))));
    }
}
VegetationStatsWidget.APOSTROPHE_VARIANTS = ["'", "'", "'", 'ʻ', 'ʼ', '`'];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VegetationStatsWidget);
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9BZ3JpUGllMyAoMikvQWdyaUluZGljYXRvcjcvZGlzdC9ydW50aW1lL3dpZGdldC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ3lIO0FBQ2pCO0FBQ3hHLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTywrSkFBK0osS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxNQUFNLFVBQVUsS0FBSyxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsTUFBTSxXQUFXLEtBQUssV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxVQUFVLFVBQVUsTUFBTSxZQUFZLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sV0FBVyxL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YUFBYSxDQUFDLENBQUMsQ0FBQyxVQUFVLGFBQWEsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFO3dCQUM5QyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsV0FBVyxpQkFBaUIsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQ25ELENBQ0gsQ0FDUCxDQUNHLENBQ1AsQ0FDRyxDQUNQLENBQUM7SUFDSixDQUFDOztBQWpqRHVCLHlDQUFtQixHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztpRUFsTjFELHFCQUFxQjtBQXN3RGxDLFNBQVMsMkJBQTJCLENBQUMsR0FBRyxJQUFJLHFCQUF1QixHQUFHLEdBQUcsRUFBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL0FncmlQaWUzICgyKS9BZ3JpSW5kaWNhdG9yNy9zcmMvcnVudGltZS9LYWRhc3RySW5kaWNhdG9yLmNzcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX1N5bWJvbC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUdldFRhZy5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZVRyaW0uanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2ZyZWVHbG9iYWwuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldFJhd1RhZy5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fb2JqZWN0VG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3Jvb3QuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3RyaW1tZWRFbmRJbmRleC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2xvZGFzaC9kZWJvdW5jZS5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc09iamVjdC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc09iamVjdExpa2UuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNTeW1ib2wuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvbm93LmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvbG9kYXNoL3Rocm90dGxlLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvbG9kYXNoL3RvTnVtYmVyLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9BZ3JpUGllMyAoMikvQWdyaUluZGljYXRvcjcvc3JjL3J1bnRpbWUvS2FkYXN0ckluZGljYXRvci5jc3M/MTc2MCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1hcmNnaXNcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWNvcmUvbGliL3NldC1wdWJsaWMtcGF0aC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvQWdyaVBpZTMgKDIpL0FncmlJbmRpY2F0b3I3L3NyYy9ydW50aW1lL3dpZGdldC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qID09PT09IFZlZ2V0YXRpb24gU3RhdHMgV2lkZ2V0IC0gV2FybSBQYXBlciBVSSAoTW9kZXJuKSA9PT09PSAqL1xuLnZlZ2V0YXRpb24tc3RhdHMtd2lkZ2V0IHtcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KDcwMHB4IDQyMHB4IGF0IDE1JSAxMCUsIHJnYmEoMTYsIDE4NSwgMTI5LCAwLjE0KSAwJSwgcmdiYSgyNTAsIDI1MCwgMjQ5LCAwKSA1NSUpLCByYWRpYWwtZ3JhZGllbnQoNjIwcHggNDIwcHggYXQgODUlIDE1JSwgcmdiYSgyNDUsIDE1OCwgMTEsIDAuMTIpIDAlLCByZ2JhKDI1MCwgMjUwLCAyNDksIDApIDYwJSksIGxpbmVhci1ncmFkaWVudCgxODBkZWcsICNmYWZhZjkgMCUsICNmNWY1ZjQgMTAwJSk7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTUsIDIzLCA0MiwgMC4wOCk7XG4gIGJveC1zaGFkb3c6IDAgMThweCA1NXB4IHJnYmEoMTUsIDIzLCA0MiwgMC4xKSwgMCAwIDAgMXB4IHJnYmEoMTUsIDIzLCA0MiwgMC4wNCk7XG4gIHBhZGRpbmc6IDE0cHggMTZweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIFwiT3BlbiBTYW5zXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY29sb3I6IHJnYmEoMTUsIDIzLCA0MiwgMC44OCk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMnB4KTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWluLWhlaWdodDogMDtcbn1cblxuLnZlZ2V0YXRpb24tc3RhdHMtd2lkZ2V0OjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGhlaWdodDogM3B4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMxMGI5ODEgMCUsICMzNGQzOTkgMzUlLCAjZjU5ZTBiIDcwJSwgI2ZiYmYyNCAxMDAlKTtcbiAgei1pbmRleDogMTtcbn1cblxuLyogSWNvbiBibG9jayAqL1xuLnZlZ2V0YXRpb24tc3RhdHMtd2lkZ2V0IC53aWRnZXQtaWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDE0cHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgei1pbmRleDogMjtcbiAgd2lkdGg6IDQ2cHg7XG4gIGhlaWdodDogNDZweDtcbiAgYm9yZGVyLXJhZGl1czogMTRweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE1LCAyMywgNDIsIDAuMDgpO1xuICBib3gtc2hhZG93OiAwIDE0cHggMzBweCByZ2JhKDE1LCAyMywgNDIsIDAuMDgpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTJweCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4udmVnZXRhdGlvbi1zdGF0cy13aWRnZXQgLnZlZ2V0YXRpb24taWNvbiB7XG4gIG1heC13aWR0aDogNzAlO1xuICBtYXgtaGVpZ2h0OiA3MCU7XG4gIG9wYWNpdHk6IDAuOTI7XG59XG5cbi8qIENvbnRlbnQgKi9cbi52ZWdldGF0aW9uLXN0YXRzLXdpZGdldCAud2lkZ2V0LWNvbnRlbnQge1xuICBwYWRkaW5nLWxlZnQ6IDc0cHg7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiAyO1xufVxuXG4udmVnZXRhdGlvbi1zdGF0cy13aWRnZXQgLnN0YXQtbGFiZWwge1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbi1ib3R0b206IDZweDtcbiAgbGluZS1oZWlnaHQ6IDEuMzU7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgY29sb3I6IHJnYmEoMTUsIDIzLCA0MiwgMC42Mik7XG59XG5cbi52ZWdldGF0aW9uLXN0YXRzLXdpZGdldCAuc3RhdC12YWx1ZSB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZm9udC13ZWlnaHQ6IDk1MDtcbiAgbGluZS1oZWlnaHQ6IDEuMTtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgY29sb3I6IHJnYmEoMTUsIDIzLCA0MiwgMC45KTtcbn1cblxuLnZlZ2V0YXRpb24tc3RhdHMtd2lkZ2V0IC51bml0IHtcbiAgZm9udC13ZWlnaHQ6IDk1MDtcbiAgbWFyZ2luLWxlZnQ6IDZweDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjb2xvcjogaW5oZXJpdDtcbn1cblxuLyogR3JvdXAgY2FwdGlvbiAoeW91ciBtaXNzaW5nIHBpZWNlKSAqL1xuLnZlZ2V0YXRpb24tc3RhdHMtd2lkZ2V0IC5ncm91cC1jYXB0aW9uIHtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBwYWRkaW5nLWxlZnQ6IDJweDtcbiAgY29sb3I6IHJnYmEoMTUsIDIzLCA0MiwgMC41NSk7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbn1cblxuLnZlZ2V0YXRpb24tc3RhdHMtd2lkZ2V0IC5ncm91cC1jYXB0aW9uIHNtYWxsIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiA0cHggMTBweDtcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTUsIDIzLCA0MiwgMC4wOCk7XG4gIGJveC1zaGFkb3c6IDAgMTBweCAyNHB4IHJnYmEoMTUsIDIzLCA0MiwgMC4wNyk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMnB4KTtcbn1cblxuLyogTG9hZGluZyAqL1xuLnZlZ2V0YXRpb24tc3RhdHMtd2lkZ2V0IC5sb2FkaW5nLWluZGljYXRvciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgaGVpZ2h0OiA2NXB4O1xuICBwYWRkaW5nLWxlZnQ6IDc0cHg7XG4gIHotaW5kZXg6IDI7XG59XG5cbi52ZWdldGF0aW9uLXN0YXRzLXdpZGdldCAubG9hZGluZy1zcGlubmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi52ZWdldGF0aW9uLXN0YXRzLXdpZGdldCAubG9hZGluZy1kb3Qge1xuICB3aWR0aDogOHB4O1xuICBoZWlnaHQ6IDhweDtcbiAgbWFyZ2luOiAwIDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNSwgMjMsIDQyLCAwLjI1KTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGFuaW1hdGlvbjogdmVnLWJvdW5jZSAxLjRzIGluZmluaXRlIGVhc2UtaW4tb3V0IGJvdGg7XG59XG5cbi52ZWdldGF0aW9uLXN0YXRzLXdpZGdldCAubG9hZGluZy1kb3Q6bnRoLWNoaWxkKDEpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4zMnM7XG59XG5cbi52ZWdldGF0aW9uLXN0YXRzLXdpZGdldCAubG9hZGluZy1kb3Q6bnRoLWNoaWxkKDIpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4xNnM7XG59XG5cbi8qIEVycm9yICovXG4udmVnZXRhdGlvbi1zdGF0cy13aWRnZXQgLmVycm9yLWNvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmc6IDEwcHggOHB4O1xuICBwYWRkaW5nLWxlZnQ6IDc0cHg7XG4gIGNvbG9yOiByZ2JhKDE1LCAyMywgNDIsIDAuNzUpO1xuICB6LWluZGV4OiAyO1xufVxuXG4udmVnZXRhdGlvbi1zdGF0cy13aWRnZXQgLmVycm9yLWljb24ge1xuICBjb2xvcjogcmdiYSgyMjAsIDM4LCAzOCwgMC45KTtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbi52ZWdldGF0aW9uLXN0YXRzLXdpZGdldCAucmV0cnktYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBwYWRkaW5nOiA4cHggMTJweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSgxNiwgMTg1LCAxMjksIDAuOTUpIDAlLCByZ2JhKDI0NSwgMTU4LCAxMSwgMC45NSkgMTAwJSk7XG4gIGNvbG9yOiAjMGIxMjIwO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICBib3gtc2hhZG93OiAwIDE0cHggMzBweCByZ2JhKDE1LCAyMywgNDIsIDAuMSk7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjE1cyBlYXNlLCBmaWx0ZXIgMC4ycyBlYXNlLCBib3gtc2hhZG93IDAuMnMgZWFzZTtcbn1cblxuLnZlZ2V0YXRpb24tc3RhdHMtd2lkZ2V0IC5yZXRyeS1idXR0b246aG92ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygxLjAyKTtcbiAgYm94LXNoYWRvdzogMCAxOHB4IDQwcHggcmdiYSgxNSwgMjMsIDQyLCAwLjEyKTtcbn1cblxuLnZlZ2V0YXRpb24tc3RhdHMtd2lkZ2V0IC5yZXRyeS1idXR0b246YWN0aXZlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHNjYWxlKDAuOTkpO1xufVxuXG4vKiBNZXRhICovXG4udmVnZXRhdGlvbi1zdGF0cy13aWRnZXQgLm1ldGEtaW5mbyB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgY29sb3I6IHJnYmEoMTUsIDIzLCA0MiwgMC41NSk7XG59XG5cbi52ZWdldGF0aW9uLXN0YXRzLXdpZGdldCAubWV0YS1pbmZvLnZpc2libGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGdhcDogMTBweDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4vKiBUaGVtZSBzdXBwb3J0ICovXG4udmVnZXRhdGlvbi1zdGF0cy13aWRnZXQuZGFyay10aGVtZSB7XG4gIGNvbG9yOiByZ2JhKDI0OCwgMjUwLCAyNTIsIDAuOTIpO1xufVxuXG4udmVnZXRhdGlvbi1zdGF0cy13aWRnZXQuZGFyay10aGVtZSAuc3RhdC1sYWJlbCB7XG4gIGNvbG9yOiByZ2JhKDIyNiwgMjMyLCAyNDAsIDAuNzIpO1xufVxuXG4udmVnZXRhdGlvbi1zdGF0cy13aWRnZXQuZGFyay10aGVtZSAud2lkZ2V0LWljb24ge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNCk7XG59XG5cbi52ZWdldGF0aW9uLXN0YXRzLXdpZGdldC5kYXJrLXRoZW1lIC5ncm91cC1jYXB0aW9uIHNtYWxsIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTQpO1xuICBjb2xvcjogcmdiYSgyNDgsIDI1MCwgMjUyLCAwLjgpO1xufVxuXG4vKiBBbmltYXRpb25zICovXG5Aa2V5ZnJhbWVzIHZlZy1ib3VuY2Uge1xuICAwJSwgODAlLCAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICB9XG4gIDQwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxufVxuLyogUmVzcG9uc2l2ZSAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDMwMHB4KSB7XG4gIC52ZWdldGF0aW9uLXN0YXRzLXdpZGdldCAud2lkZ2V0LWNvbnRlbnQge1xuICAgIHBhZGRpbmctbGVmdDogNjZweDtcbiAgfVxuICAudmVnZXRhdGlvbi1zdGF0cy13aWRnZXQgLndpZGdldC1pY29uIHtcbiAgICBsZWZ0OiAxMnB4O1xuICAgIHdpZHRoOiA0MnB4O1xuICAgIGhlaWdodDogNDJweDtcbiAgfVxuICAudmVnZXRhdGlvbi1zdGF0cy13aWRnZXQgLnN0YXQtdmFsdWUge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgfVxuICAudmVnZXRhdGlvbi1zdGF0cy13aWRnZXQgLnVuaXQge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4veW91ci1leHRlbnNpb25zL3dpZGdldHMvQWdyaVBpZTMlMjAoMikvQWdyaUluZGljYXRvcjcvc3JjL3J1bnRpbWUvS2FkYXN0ckluZGljYXRvci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsaUVBQUE7QUFFQTtFQUNFLGlRQUNFO0VBSUYsbUJBQUE7RUFDQSx3Q0FBQTtFQUVBLCtFQUNFO0VBR0Ysa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUVBLHdJQUFBO0VBQ0EsWUFBQTtFQUVBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBRUEsNkJBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtBQVhGOztBQWNBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLHNGQUFBO0VBQ0EsVUFBQTtBQVhGOztBQWNBLGVBQUE7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSwyQkFBQTtFQUNBLFVBQUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0NBQUE7RUFDQSx3Q0FBQTtFQUNBLDhDQUFBO0VBQ0EsMkJBQUE7RUFFQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQWJGOztBQWdCQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQWJGOztBQWdCQSxZQUFBO0FBQ0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBYkY7O0FBZ0JBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNkJBQUE7QUFiRjs7QUFnQkE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7QUFiRjs7QUFnQkE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFiRjs7QUFnQkEsdUNBQUE7QUFDQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQWJGOztBQWdCQTtFQUNFLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLHFDQUFBO0VBQ0Esd0NBQUE7RUFDQSw4Q0FBQTtFQUNBLDJCQUFBO0FBYkY7O0FBZ0JBLFlBQUE7QUFDQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBYkY7O0FBZ0JBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFiRjs7QUFnQkE7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSx3Q0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxvREFBQTtBQWJGOztBQWdCQTtFQUFxRCx1QkFBQTtBQVpyRDs7QUFhQTtFQUFxRCx1QkFBQTtBQVRyRDs7QUFXQSxVQUFBO0FBQ0E7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLFVBQUE7QUFSRjs7QUFXQTtFQUNFLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBUkY7O0FBV0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSwrRkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSw2Q0FBQTtFQUNBLHdFQUFBO0FBUkY7O0FBV0E7RUFDRSwyQkFBQTtFQUNBLHdCQUFBO0VBQ0EsOENBQUE7QUFSRjs7QUFXQTtFQUNFLG9DQUFBO0FBUkY7O0FBV0EsU0FBQTtBQUNBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0FBUkY7O0FBV0E7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtBQVJGOztBQVdBLGtCQUFBO0FBQ0E7RUFDRSxnQ0FBQTtBQVJGOztBQVdBO0VBQ0UsZ0NBQUE7QUFSRjs7QUFXQTtFQUNFLCtCQUFBO0VBQ0EsdUNBQUE7QUFSRjs7QUFXQTtFQUNFLCtCQUFBO0VBQ0EsdUNBQUE7RUFDQSwrQkFBQTtBQVJGOztBQVdBLGVBQUE7QUFDQTtFQUNFO0lBQWdCLG1CQUFBO0VBUGhCO0VBUUE7SUFBTSxtQkFBQTtFQUxOO0FBQ0Y7QUFPQSxlQUFBO0FBQ0E7RUFDRTtJQUEyQyxrQkFBQTtFQUozQztFQUtBO0lBQXdDLFVBQUE7SUFBWSxXQUFBO0lBQWEsWUFBQTtFQUFqRTtFQUNBO0lBQXVDLGVBQUE7RUFFdkM7RUFEQTtJQUFpQyxlQUFBO0VBSWpDO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogPT09PT0gVmVnZXRhdGlvbiBTdGF0cyBXaWRnZXQgLSBXYXJtIFBhcGVyIFVJIChNb2Rlcm4pID09PT09ICovXFxyXFxuXFxyXFxuLnZlZ2V0YXRpb24tc3RhdHMtd2lkZ2V0IHtcXHJcXG4gIGJhY2tncm91bmQ6XFxyXFxuICAgIHJhZGlhbC1ncmFkaWVudCg3MDBweCA0MjBweCBhdCAxNSUgMTAlLCByZ2JhKDE2LCAxODUsIDEyOSwgMC4xNCkgMCUsIHJnYmEoMjUwLCAyNTAsIDI0OSwgMCkgNTUlKSxcXHJcXG4gICAgcmFkaWFsLWdyYWRpZW50KDYyMHB4IDQyMHB4IGF0IDg1JSAxNSUsIHJnYmEoMjQ1LCAxNTgsIDExLCAwLjEyKSAwJSwgcmdiYSgyNTAsIDI1MCwgMjQ5LCAwKSA2MCUpLFxcclxcbiAgICBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjZmFmYWY5IDAlLCAjZjVmNWY0IDEwMCUpO1xcclxcblxcclxcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTUsIDIzLCA0MiwgMC4wOCk7XFxyXFxuXFxyXFxuICBib3gtc2hhZG93OlxcclxcbiAgICAwIDE4cHggNTVweCByZ2JhKDE1LCAyMywgNDIsIDAuMTApLFxcclxcbiAgICAwIDAgMCAxcHggcmdiYSgxNSwgMjMsIDQyLCAwLjA0KTtcXHJcXG5cXHJcXG4gIHBhZGRpbmc6IDE0cHggMTZweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHJcXG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuXFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcclxcbiAgY29sb3I6IHJnYmEoMTUsIDIzLCA0MiwgMC44OCk7XFxyXFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTJweCk7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgbWluLWhlaWdodDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnZlZ2V0YXRpb24tc3RhdHMtd2lkZ2V0OjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICBoZWlnaHQ6IDNweDtcXHJcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzEwYjk4MSAwJSwgIzM0ZDM5OSAzNSUsICNmNTllMGIgNzAlLCAjZmJiZjI0IDEwMCUpO1xcclxcbiAgei1pbmRleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLyogSWNvbiBibG9jayAqL1xcclxcbi52ZWdldGF0aW9uLXN0YXRzLXdpZGdldCAud2lkZ2V0LWljb24ge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiA1MCU7XFxyXFxuICBsZWZ0OiAxNHB4O1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcclxcbiAgei1pbmRleDogMjtcXHJcXG5cXHJcXG4gIHdpZHRoOiA0NnB4O1xcclxcbiAgaGVpZ2h0OiA0NnB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTRweDtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43MCk7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE1LCAyMywgNDIsIDAuMDgpO1xcclxcbiAgYm94LXNoYWRvdzogMCAxNHB4IDMwcHggcmdiYSgxNSwgMjMsIDQyLCAwLjA4KTtcXHJcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMnB4KTtcXHJcXG5cXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi52ZWdldGF0aW9uLXN0YXRzLXdpZGdldCAudmVnZXRhdGlvbi1pY29uIHtcXHJcXG4gIG1heC13aWR0aDogNzAlO1xcclxcbiAgbWF4LWhlaWdodDogNzAlO1xcclxcbiAgb3BhY2l0eTogMC45MjtcXHJcXG59XFxyXFxuXFxyXFxuLyogQ29udGVudCAqL1xcclxcbi52ZWdldGF0aW9uLXN0YXRzLXdpZGdldCAud2lkZ2V0LWNvbnRlbnQge1xcclxcbiAgcGFkZGluZy1sZWZ0OiA3NHB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICB6LWluZGV4OiAyO1xcclxcbn1cXHJcXG5cXHJcXG4udmVnZXRhdGlvbi1zdGF0cy13aWRnZXQgLnN0YXQtbGFiZWwge1xcclxcbiAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuMzU7XFxyXFxuICBmb250LXdlaWdodDogODAwO1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xcclxcbiAgY29sb3I6IHJnYmEoMTUsIDIzLCA0MiwgMC42Mik7XFxyXFxufVxcclxcblxcclxcbi52ZWdldGF0aW9uLXN0YXRzLXdpZGdldCAuc3RhdC12YWx1ZSB7XFxyXFxuICBmb250LXNpemU6IDMwcHg7XFxyXFxuICBmb250LXdlaWdodDogOTUwO1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuMTtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XFxyXFxuICBjb2xvcjogcmdiYSgxNSwgMjMsIDQyLCAwLjkwKTtcXHJcXG59XFxyXFxuXFxyXFxuLnZlZ2V0YXRpb24tc3RhdHMtd2lkZ2V0IC51bml0IHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA5NTA7XFxyXFxuICBtYXJnaW4tbGVmdDogNnB4O1xcclxcbiAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgY29sb3I6IGluaGVyaXQ7XFxyXFxufVxcclxcblxcclxcbi8qIEdyb3VwIGNhcHRpb24gKHlvdXIgbWlzc2luZyBwaWVjZSkgKi9cXHJcXG4udmVnZXRhdGlvbi1zdGF0cy13aWRnZXQgLmdyb3VwLWNhcHRpb24ge1xcclxcbiAgbWFyZ2luLXRvcDogOHB4O1xcclxcbiAgcGFkZGluZy1sZWZ0OiAycHg7XFxyXFxuICBjb2xvcjogcmdiYSgxNSwgMjMsIDQyLCAwLjU1KTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XFxyXFxufVxcclxcblxcclxcbi52ZWdldGF0aW9uLXN0YXRzLXdpZGdldCAuZ3JvdXAtY2FwdGlvbiBzbWFsbCB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICBwYWRkaW5nOiA0cHggMTBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xcclxcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTUsIDIzLCA0MiwgMC4wOCk7XFxyXFxuICBib3gtc2hhZG93OiAwIDEwcHggMjRweCByZ2JhKDE1LCAyMywgNDIsIDAuMDcpO1xcclxcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEycHgpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBMb2FkaW5nICovXFxyXFxuLnZlZ2V0YXRpb24tc3RhdHMtd2lkZ2V0IC5sb2FkaW5nLWluZGljYXRvciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxuICBoZWlnaHQ6IDY1cHg7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDc0cHg7XFxyXFxuICB6LWluZGV4OiAyO1xcclxcbn1cXHJcXG5cXHJcXG4udmVnZXRhdGlvbi1zdGF0cy13aWRnZXQgLmxvYWRpbmctc3Bpbm5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udmVnZXRhdGlvbi1zdGF0cy13aWRnZXQgLmxvYWRpbmctZG90IHtcXHJcXG4gIHdpZHRoOiA4cHg7XFxyXFxuICBoZWlnaHQ6IDhweDtcXHJcXG4gIG1hcmdpbjogMCA0cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1LCAyMywgNDIsIDAuMjUpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgYW5pbWF0aW9uOiB2ZWctYm91bmNlIDEuNHMgaW5maW5pdGUgZWFzZS1pbi1vdXQgYm90aDtcXHJcXG59XFxyXFxuXFxyXFxuLnZlZ2V0YXRpb24tc3RhdHMtd2lkZ2V0IC5sb2FkaW5nLWRvdDpudGgtY2hpbGQoMSkgeyBhbmltYXRpb24tZGVsYXk6IC0wLjMyczsgfVxcclxcbi52ZWdldGF0aW9uLXN0YXRzLXdpZGdldCAubG9hZGluZy1kb3Q6bnRoLWNoaWxkKDIpIHsgYW5pbWF0aW9uLWRlbGF5OiAtMC4xNnM7IH1cXHJcXG5cXHJcXG4vKiBFcnJvciAqL1xcclxcbi52ZWdldGF0aW9uLXN0YXRzLXdpZGdldCAuZXJyb3ItY29udGFpbmVyIHtcXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDhweDtcXHJcXG4gIHBhZGRpbmctbGVmdDogNzRweDtcXHJcXG4gIGNvbG9yOiByZ2JhKDE1LCAyMywgNDIsIDAuNzUpO1xcclxcbiAgei1pbmRleDogMjtcXHJcXG59XFxyXFxuXFxyXFxuLnZlZ2V0YXRpb24tc3RhdHMtd2lkZ2V0IC5lcnJvci1pY29uIHtcXHJcXG4gIGNvbG9yOiByZ2JhKDIyMCwgMzgsIDM4LCAwLjkwKTtcXHJcXG4gIGZvbnQtc2l6ZTogMjJweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDhweDtcXHJcXG59XFxyXFxuXFxyXFxuLnZlZ2V0YXRpb24tc3RhdHMtd2lkZ2V0IC5yZXRyeS1idXR0b24ge1xcclxcbiAgbWFyZ2luLXRvcDogOHB4O1xcclxcbiAgcGFkZGluZzogOHB4IDEycHg7XFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDE2LDE4NSwxMjksMC45NSkgMCUsIHJnYmEoMjQ1LDE1OCwxMSwwLjk1KSAxMDAlKTtcXHJcXG4gIGNvbG9yOiAjMGIxMjIwO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBmb250LXdlaWdodDogOTAwO1xcclxcbiAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xcclxcbiAgYm94LXNoYWRvdzogMCAxNHB4IDMwcHggcmdiYSgxNSwgMjMsIDQyLCAwLjEwKTtcXHJcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjE1cyBlYXNlLCBmaWx0ZXIgMC4ycyBlYXNlLCBib3gtc2hhZG93IDAuMnMgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuLnZlZ2V0YXRpb24tc3RhdHMtd2lkZ2V0IC5yZXRyeS1idXR0b246aG92ZXIge1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xcclxcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDEuMDIpO1xcclxcbiAgYm94LXNoYWRvdzogMCAxOHB4IDQwcHggcmdiYSgxNSwgMjMsIDQyLCAwLjEyKTtcXHJcXG59XFxyXFxuXFxyXFxuLnZlZ2V0YXRpb24tc3RhdHMtd2lkZ2V0IC5yZXRyeS1idXR0b246YWN0aXZlIHtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSBzY2FsZSgwLjk5KTtcXHJcXG59XFxyXFxuXFxyXFxuLyogTWV0YSAqL1xcclxcbi52ZWdldGF0aW9uLXN0YXRzLXdpZGdldCAubWV0YS1pbmZvIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbiAgZm9udC1zaXplOiAxMXB4O1xcclxcbiAgY29sb3I6IHJnYmEoMTUsIDIzLCA0MiwgMC41NSk7XFxyXFxufVxcclxcblxcclxcbi52ZWdldGF0aW9uLXN0YXRzLXdpZGdldCAubWV0YS1pbmZvLnZpc2libGUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG59XFxyXFxuXFxyXFxuLyogVGhlbWUgc3VwcG9ydCAqL1xcclxcbi52ZWdldGF0aW9uLXN0YXRzLXdpZGdldC5kYXJrLXRoZW1lIHtcXHJcXG4gIGNvbG9yOiByZ2JhKDI0OCwgMjUwLCAyNTIsIDAuOTIpO1xcclxcbn1cXHJcXG5cXHJcXG4udmVnZXRhdGlvbi1zdGF0cy13aWRnZXQuZGFyay10aGVtZSAuc3RhdC1sYWJlbCB7XFxyXFxuICBjb2xvcjogcmdiYSgyMjYsIDIzMiwgMjQwLCAwLjcyKTtcXHJcXG59XFxyXFxuXFxyXFxuLnZlZ2V0YXRpb24tc3RhdHMtd2lkZ2V0LmRhcmstdGhlbWUgLndpZGdldC1pY29uIHtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxyXFxuICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNCk7XFxyXFxufVxcclxcblxcclxcbi52ZWdldGF0aW9uLXN0YXRzLXdpZGdldC5kYXJrLXRoZW1lIC5ncm91cC1jYXB0aW9uIHNtYWxsIHtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxyXFxuICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNCk7XFxyXFxuICBjb2xvcjogcmdiYSgyNDgsIDI1MCwgMjUyLCAwLjgwKTtcXHJcXG59XFxyXFxuXFxyXFxuLyogQW5pbWF0aW9ucyAqL1xcclxcbkBrZXlmcmFtZXMgdmVnLWJvdW5jZSB7XFxyXFxuICAwJSwgODAlLCAxMDAlIHsgdHJhbnNmb3JtOiBzY2FsZSgwKTsgfVxcclxcbiAgNDAlIHsgdHJhbnNmb3JtOiBzY2FsZSgxKTsgfVxcclxcbn1cXHJcXG5cXHJcXG4vKiBSZXNwb25zaXZlICovXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDMwMHB4KSB7XFxyXFxuICAudmVnZXRhdGlvbi1zdGF0cy13aWRnZXQgLndpZGdldC1jb250ZW50IHsgcGFkZGluZy1sZWZ0OiA2NnB4OyB9XFxyXFxuICAudmVnZXRhdGlvbi1zdGF0cy13aWRnZXQgLndpZGdldC1pY29uIHsgbGVmdDogMTJweDsgd2lkdGg6IDQycHg7IGhlaWdodDogNDJweDsgfVxcclxcbiAgLnZlZ2V0YXRpb24tc3RhdHMtd2lkZ2V0IC5zdGF0LXZhbHVlIHsgZm9udC1zaXplOiAyNHB4OyB9XFxyXFxuICAudmVnZXRhdGlvbi1zdGF0cy13aWRnZXQgLnVuaXQgeyBmb250LXNpemU6IDI0cHg7IH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgU3ltYm9sID0gcm9vdC5TeW1ib2w7XG5cbm1vZHVsZS5leHBvcnRzID0gU3ltYm9sO1xuIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpLFxuICAgIGdldFJhd1RhZyA9IHJlcXVpcmUoJy4vX2dldFJhd1RhZycpLFxuICAgIG9iamVjdFRvU3RyaW5nID0gcmVxdWlyZSgnLi9fb2JqZWN0VG9TdHJpbmcnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIG51bGxUYWcgPSAnW29iamVjdCBOdWxsXScsXG4gICAgdW5kZWZpbmVkVGFnID0gJ1tvYmplY3QgVW5kZWZpbmVkXSc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHN5bVRvU3RyaW5nVGFnID0gU3ltYm9sID8gU3ltYm9sLnRvU3RyaW5nVGFnIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBnZXRUYWdgIHdpdGhvdXQgZmFsbGJhY2tzIGZvciBidWdneSBlbnZpcm9ubWVudHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUdldFRhZyh2YWx1ZSkge1xuICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkVGFnIDogbnVsbFRhZztcbiAgfVxuICByZXR1cm4gKHN5bVRvU3RyaW5nVGFnICYmIHN5bVRvU3RyaW5nVGFnIGluIE9iamVjdCh2YWx1ZSkpXG4gICAgPyBnZXRSYXdUYWcodmFsdWUpXG4gICAgOiBvYmplY3RUb1N0cmluZyh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUdldFRhZztcbiIsInZhciB0cmltbWVkRW5kSW5kZXggPSByZXF1aXJlKCcuL190cmltbWVkRW5kSW5kZXgnKTtcblxuLyoqIFVzZWQgdG8gbWF0Y2ggbGVhZGluZyB3aGl0ZXNwYWNlLiAqL1xudmFyIHJlVHJpbVN0YXJ0ID0gL15cXHMrLztcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy50cmltYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyBUaGUgc3RyaW5nIHRvIHRyaW0uXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSB0cmltbWVkIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gYmFzZVRyaW0oc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmdcbiAgICA/IHN0cmluZy5zbGljZSgwLCB0cmltbWVkRW5kSW5kZXgoc3RyaW5nKSArIDEpLnJlcGxhY2UocmVUcmltU3RhcnQsICcnKVxuICAgIDogc3RyaW5nO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VUcmltO1xuIiwiLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBnbG9iYWxgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlR2xvYmFsID0gdHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwgJiYgZ2xvYmFsLk9iamVjdCA9PT0gT2JqZWN0ICYmIGdsb2JhbDtcblxubW9kdWxlLmV4cG9ydHMgPSBmcmVlR2xvYmFsO1xuIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3ltVG9TdHJpbmdUYWcgPSBTeW1ib2wgPyBTeW1ib2wudG9TdHJpbmdUYWcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlR2V0VGFnYCB3aGljaCBpZ25vcmVzIGBTeW1ib2wudG9TdHJpbmdUYWdgIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSByYXcgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gZ2V0UmF3VGFnKHZhbHVlKSB7XG4gIHZhciBpc093biA9IGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIHN5bVRvU3RyaW5nVGFnKSxcbiAgICAgIHRhZyA9IHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcblxuICB0cnkge1xuICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHVuZGVmaW5lZDtcbiAgICB2YXIgdW5tYXNrZWQgPSB0cnVlO1xuICB9IGNhdGNoIChlKSB7fVxuXG4gIHZhciByZXN1bHQgPSBuYXRpdmVPYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbiAgaWYgKHVubWFza2VkKSB7XG4gICAgaWYgKGlzT3duKSB7XG4gICAgICB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ10gPSB0YWc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbGV0ZSB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ107XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0UmF3VGFnO1xuIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG5hdGl2ZU9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZyB1c2luZyBgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBvYmplY3RUb1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gb2JqZWN0VG9TdHJpbmc7XG4iLCJ2YXIgZnJlZUdsb2JhbCA9IHJlcXVpcmUoJy4vX2ZyZWVHbG9iYWwnKTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBzZWxmYC4gKi9cbnZhciBmcmVlU2VsZiA9IHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYgJiYgc2VsZi5PYmplY3QgPT09IE9iamVjdCAmJiBzZWxmO1xuXG4vKiogVXNlZCBhcyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdC4gKi9cbnZhciByb290ID0gZnJlZUdsb2JhbCB8fCBmcmVlU2VsZiB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJvb3Q7XG4iLCIvKiogVXNlZCB0byBtYXRjaCBhIHNpbmdsZSB3aGl0ZXNwYWNlIGNoYXJhY3Rlci4gKi9cbnZhciByZVdoaXRlc3BhY2UgPSAvXFxzLztcblxuLyoqXG4gKiBVc2VkIGJ5IGBfLnRyaW1gIGFuZCBgXy50cmltRW5kYCB0byBnZXQgdGhlIGluZGV4IG9mIHRoZSBsYXN0IG5vbi13aGl0ZXNwYWNlXG4gKiBjaGFyYWN0ZXIgb2YgYHN0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgVGhlIHN0cmluZyB0byBpbnNwZWN0LlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIGxhc3Qgbm9uLXdoaXRlc3BhY2UgY2hhcmFjdGVyLlxuICovXG5mdW5jdGlvbiB0cmltbWVkRW5kSW5kZXgoc3RyaW5nKSB7XG4gIHZhciBpbmRleCA9IHN0cmluZy5sZW5ndGg7XG5cbiAgd2hpbGUgKGluZGV4LS0gJiYgcmVXaGl0ZXNwYWNlLnRlc3Qoc3RyaW5nLmNoYXJBdChpbmRleCkpKSB7fVxuICByZXR1cm4gaW5kZXg7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdHJpbW1lZEVuZEluZGV4O1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpLFxuICAgIG5vdyA9IHJlcXVpcmUoJy4vbm93JyksXG4gICAgdG9OdW1iZXIgPSByZXF1aXJlKCcuL3RvTnVtYmVyJyk7XG5cbi8qKiBFcnJvciBtZXNzYWdlIGNvbnN0YW50cy4gKi9cbnZhciBGVU5DX0VSUk9SX1RFWFQgPSAnRXhwZWN0ZWQgYSBmdW5jdGlvbic7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVNYXggPSBNYXRoLm1heCxcbiAgICBuYXRpdmVNaW4gPSBNYXRoLm1pbjtcblxuLyoqXG4gKiBDcmVhdGVzIGEgZGVib3VuY2VkIGZ1bmN0aW9uIHRoYXQgZGVsYXlzIGludm9raW5nIGBmdW5jYCB1bnRpbCBhZnRlciBgd2FpdGBcbiAqIG1pbGxpc2Vjb25kcyBoYXZlIGVsYXBzZWQgc2luY2UgdGhlIGxhc3QgdGltZSB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uIHdhc1xuICogaW52b2tlZC4gVGhlIGRlYm91bmNlZCBmdW5jdGlvbiBjb21lcyB3aXRoIGEgYGNhbmNlbGAgbWV0aG9kIHRvIGNhbmNlbFxuICogZGVsYXllZCBgZnVuY2AgaW52b2NhdGlvbnMgYW5kIGEgYGZsdXNoYCBtZXRob2QgdG8gaW1tZWRpYXRlbHkgaW52b2tlIHRoZW0uXG4gKiBQcm92aWRlIGBvcHRpb25zYCB0byBpbmRpY2F0ZSB3aGV0aGVyIGBmdW5jYCBzaG91bGQgYmUgaW52b2tlZCBvbiB0aGVcbiAqIGxlYWRpbmcgYW5kL29yIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIGB3YWl0YCB0aW1lb3V0LiBUaGUgYGZ1bmNgIGlzIGludm9rZWRcbiAqIHdpdGggdGhlIGxhc3QgYXJndW1lbnRzIHByb3ZpZGVkIHRvIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb24uIFN1YnNlcXVlbnRcbiAqIGNhbGxzIHRvIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb24gcmV0dXJuIHRoZSByZXN1bHQgb2YgdGhlIGxhc3QgYGZ1bmNgXG4gKiBpbnZvY2F0aW9uLlxuICpcbiAqICoqTm90ZToqKiBJZiBgbGVhZGluZ2AgYW5kIGB0cmFpbGluZ2Agb3B0aW9ucyBhcmUgYHRydWVgLCBgZnVuY2AgaXNcbiAqIGludm9rZWQgb24gdGhlIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQgb25seSBpZiB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uXG4gKiBpcyBpbnZva2VkIG1vcmUgdGhhbiBvbmNlIGR1cmluZyB0aGUgYHdhaXRgIHRpbWVvdXQuXG4gKlxuICogSWYgYHdhaXRgIGlzIGAwYCBhbmQgYGxlYWRpbmdgIGlzIGBmYWxzZWAsIGBmdW5jYCBpbnZvY2F0aW9uIGlzIGRlZmVycmVkXG4gKiB1bnRpbCB0byB0aGUgbmV4dCB0aWNrLCBzaW1pbGFyIHRvIGBzZXRUaW1lb3V0YCB3aXRoIGEgdGltZW91dCBvZiBgMGAuXG4gKlxuICogU2VlIFtEYXZpZCBDb3JiYWNobydzIGFydGljbGVdKGh0dHBzOi8vY3NzLXRyaWNrcy5jb20vZGVib3VuY2luZy10aHJvdHRsaW5nLWV4cGxhaW5lZC1leGFtcGxlcy8pXG4gKiBmb3IgZGV0YWlscyBvdmVyIHRoZSBkaWZmZXJlbmNlcyBiZXR3ZWVuIGBfLmRlYm91bmNlYCBhbmQgYF8udGhyb3R0bGVgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gZGVib3VuY2UuXG4gKiBAcGFyYW0ge251bWJlcn0gW3dhaXQ9MF0gVGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gZGVsYXkuXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnM9e31dIFRoZSBvcHRpb25zIG9iamVjdC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMubGVhZGluZz1mYWxzZV1cbiAqICBTcGVjaWZ5IGludm9raW5nIG9uIHRoZSBsZWFkaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQuXG4gKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMubWF4V2FpdF1cbiAqICBUaGUgbWF4aW11bSB0aW1lIGBmdW5jYCBpcyBhbGxvd2VkIHRvIGJlIGRlbGF5ZWQgYmVmb3JlIGl0J3MgaW52b2tlZC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMudHJhaWxpbmc9dHJ1ZV1cbiAqICBTcGVjaWZ5IGludm9raW5nIG9uIHRoZSB0cmFpbGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZGVib3VuY2VkIGZ1bmN0aW9uLlxuICogQGV4YW1wbGVcbiAqXG4gKiAvLyBBdm9pZCBjb3N0bHkgY2FsY3VsYXRpb25zIHdoaWxlIHRoZSB3aW5kb3cgc2l6ZSBpcyBpbiBmbHV4LlxuICogalF1ZXJ5KHdpbmRvdykub24oJ3Jlc2l6ZScsIF8uZGVib3VuY2UoY2FsY3VsYXRlTGF5b3V0LCAxNTApKTtcbiAqXG4gKiAvLyBJbnZva2UgYHNlbmRNYWlsYCB3aGVuIGNsaWNrZWQsIGRlYm91bmNpbmcgc3Vic2VxdWVudCBjYWxscy5cbiAqIGpRdWVyeShlbGVtZW50KS5vbignY2xpY2snLCBfLmRlYm91bmNlKHNlbmRNYWlsLCAzMDAsIHtcbiAqICAgJ2xlYWRpbmcnOiB0cnVlLFxuICogICAndHJhaWxpbmcnOiBmYWxzZVxuICogfSkpO1xuICpcbiAqIC8vIEVuc3VyZSBgYmF0Y2hMb2dgIGlzIGludm9rZWQgb25jZSBhZnRlciAxIHNlY29uZCBvZiBkZWJvdW5jZWQgY2FsbHMuXG4gKiB2YXIgZGVib3VuY2VkID0gXy5kZWJvdW5jZShiYXRjaExvZywgMjUwLCB7ICdtYXhXYWl0JzogMTAwMCB9KTtcbiAqIHZhciBzb3VyY2UgPSBuZXcgRXZlbnRTb3VyY2UoJy9zdHJlYW0nKTtcbiAqIGpRdWVyeShzb3VyY2UpLm9uKCdtZXNzYWdlJywgZGVib3VuY2VkKTtcbiAqXG4gKiAvLyBDYW5jZWwgdGhlIHRyYWlsaW5nIGRlYm91bmNlZCBpbnZvY2F0aW9uLlxuICogalF1ZXJ5KHdpbmRvdykub24oJ3BvcHN0YXRlJywgZGVib3VuY2VkLmNhbmNlbCk7XG4gKi9cbmZ1bmN0aW9uIGRlYm91bmNlKGZ1bmMsIHdhaXQsIG9wdGlvbnMpIHtcbiAgdmFyIGxhc3RBcmdzLFxuICAgICAgbGFzdFRoaXMsXG4gICAgICBtYXhXYWl0LFxuICAgICAgcmVzdWx0LFxuICAgICAgdGltZXJJZCxcbiAgICAgIGxhc3RDYWxsVGltZSxcbiAgICAgIGxhc3RJbnZva2VUaW1lID0gMCxcbiAgICAgIGxlYWRpbmcgPSBmYWxzZSxcbiAgICAgIG1heGluZyA9IGZhbHNlLFxuICAgICAgdHJhaWxpbmcgPSB0cnVlO1xuXG4gIGlmICh0eXBlb2YgZnVuYyAhPSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihGVU5DX0VSUk9SX1RFWFQpO1xuICB9XG4gIHdhaXQgPSB0b051bWJlcih3YWl0KSB8fCAwO1xuICBpZiAoaXNPYmplY3Qob3B0aW9ucykpIHtcbiAgICBsZWFkaW5nID0gISFvcHRpb25zLmxlYWRpbmc7XG4gICAgbWF4aW5nID0gJ21heFdhaXQnIGluIG9wdGlvbnM7XG4gICAgbWF4V2FpdCA9IG1heGluZyA/IG5hdGl2ZU1heCh0b051bWJlcihvcHRpb25zLm1heFdhaXQpIHx8IDAsIHdhaXQpIDogbWF4V2FpdDtcbiAgICB0cmFpbGluZyA9ICd0cmFpbGluZycgaW4gb3B0aW9ucyA/ICEhb3B0aW9ucy50cmFpbGluZyA6IHRyYWlsaW5nO1xuICB9XG5cbiAgZnVuY3Rpb24gaW52b2tlRnVuYyh0aW1lKSB7XG4gICAgdmFyIGFyZ3MgPSBsYXN0QXJncyxcbiAgICAgICAgdGhpc0FyZyA9IGxhc3RUaGlzO1xuXG4gICAgbGFzdEFyZ3MgPSBsYXN0VGhpcyA9IHVuZGVmaW5lZDtcbiAgICBsYXN0SW52b2tlVGltZSA9IHRpbWU7XG4gICAgcmVzdWx0ID0gZnVuYy5hcHBseSh0aGlzQXJnLCBhcmdzKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gbGVhZGluZ0VkZ2UodGltZSkge1xuICAgIC8vIFJlc2V0IGFueSBgbWF4V2FpdGAgdGltZXIuXG4gICAgbGFzdEludm9rZVRpbWUgPSB0aW1lO1xuICAgIC8vIFN0YXJ0IHRoZSB0aW1lciBmb3IgdGhlIHRyYWlsaW5nIGVkZ2UuXG4gICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCB3YWl0KTtcbiAgICAvLyBJbnZva2UgdGhlIGxlYWRpbmcgZWRnZS5cbiAgICByZXR1cm4gbGVhZGluZyA/IGludm9rZUZ1bmModGltZSkgOiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiByZW1haW5pbmdXYWl0KHRpbWUpIHtcbiAgICB2YXIgdGltZVNpbmNlTGFzdENhbGwgPSB0aW1lIC0gbGFzdENhbGxUaW1lLFxuICAgICAgICB0aW1lU2luY2VMYXN0SW52b2tlID0gdGltZSAtIGxhc3RJbnZva2VUaW1lLFxuICAgICAgICB0aW1lV2FpdGluZyA9IHdhaXQgLSB0aW1lU2luY2VMYXN0Q2FsbDtcblxuICAgIHJldHVybiBtYXhpbmdcbiAgICAgID8gbmF0aXZlTWluKHRpbWVXYWl0aW5nLCBtYXhXYWl0IC0gdGltZVNpbmNlTGFzdEludm9rZSlcbiAgICAgIDogdGltZVdhaXRpbmc7XG4gIH1cblxuICBmdW5jdGlvbiBzaG91bGRJbnZva2UodGltZSkge1xuICAgIHZhciB0aW1lU2luY2VMYXN0Q2FsbCA9IHRpbWUgLSBsYXN0Q2FsbFRpbWUsXG4gICAgICAgIHRpbWVTaW5jZUxhc3RJbnZva2UgPSB0aW1lIC0gbGFzdEludm9rZVRpbWU7XG5cbiAgICAvLyBFaXRoZXIgdGhpcyBpcyB0aGUgZmlyc3QgY2FsbCwgYWN0aXZpdHkgaGFzIHN0b3BwZWQgYW5kIHdlJ3JlIGF0IHRoZVxuICAgIC8vIHRyYWlsaW5nIGVkZ2UsIHRoZSBzeXN0ZW0gdGltZSBoYXMgZ29uZSBiYWNrd2FyZHMgYW5kIHdlJ3JlIHRyZWF0aW5nXG4gICAgLy8gaXQgYXMgdGhlIHRyYWlsaW5nIGVkZ2UsIG9yIHdlJ3ZlIGhpdCB0aGUgYG1heFdhaXRgIGxpbWl0LlxuICAgIHJldHVybiAobGFzdENhbGxUaW1lID09PSB1bmRlZmluZWQgfHwgKHRpbWVTaW5jZUxhc3RDYWxsID49IHdhaXQpIHx8XG4gICAgICAodGltZVNpbmNlTGFzdENhbGwgPCAwKSB8fCAobWF4aW5nICYmIHRpbWVTaW5jZUxhc3RJbnZva2UgPj0gbWF4V2FpdCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gdGltZXJFeHBpcmVkKCkge1xuICAgIHZhciB0aW1lID0gbm93KCk7XG4gICAgaWYgKHNob3VsZEludm9rZSh0aW1lKSkge1xuICAgICAgcmV0dXJuIHRyYWlsaW5nRWRnZSh0aW1lKTtcbiAgICB9XG4gICAgLy8gUmVzdGFydCB0aGUgdGltZXIuXG4gICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCByZW1haW5pbmdXYWl0KHRpbWUpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRyYWlsaW5nRWRnZSh0aW1lKSB7XG4gICAgdGltZXJJZCA9IHVuZGVmaW5lZDtcblxuICAgIC8vIE9ubHkgaW52b2tlIGlmIHdlIGhhdmUgYGxhc3RBcmdzYCB3aGljaCBtZWFucyBgZnVuY2AgaGFzIGJlZW5cbiAgICAvLyBkZWJvdW5jZWQgYXQgbGVhc3Qgb25jZS5cbiAgICBpZiAodHJhaWxpbmcgJiYgbGFzdEFyZ3MpIHtcbiAgICAgIHJldHVybiBpbnZva2VGdW5jKHRpbWUpO1xuICAgIH1cbiAgICBsYXN0QXJncyA9IGxhc3RUaGlzID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBjYW5jZWwoKSB7XG4gICAgaWYgKHRpbWVySWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVySWQpO1xuICAgIH1cbiAgICBsYXN0SW52b2tlVGltZSA9IDA7XG4gICAgbGFzdEFyZ3MgPSBsYXN0Q2FsbFRpbWUgPSBsYXN0VGhpcyA9IHRpbWVySWQgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBmdW5jdGlvbiBmbHVzaCgpIHtcbiAgICByZXR1cm4gdGltZXJJZCA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogdHJhaWxpbmdFZGdlKG5vdygpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlYm91bmNlZCgpIHtcbiAgICB2YXIgdGltZSA9IG5vdygpLFxuICAgICAgICBpc0ludm9raW5nID0gc2hvdWxkSW52b2tlKHRpbWUpO1xuXG4gICAgbGFzdEFyZ3MgPSBhcmd1bWVudHM7XG4gICAgbGFzdFRoaXMgPSB0aGlzO1xuICAgIGxhc3RDYWxsVGltZSA9IHRpbWU7XG5cbiAgICBpZiAoaXNJbnZva2luZykge1xuICAgICAgaWYgKHRpbWVySWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gbGVhZGluZ0VkZ2UobGFzdENhbGxUaW1lKTtcbiAgICAgIH1cbiAgICAgIGlmIChtYXhpbmcpIHtcbiAgICAgICAgLy8gSGFuZGxlIGludm9jYXRpb25zIGluIGEgdGlnaHQgbG9vcC5cbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVySWQpO1xuICAgICAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHdhaXQpO1xuICAgICAgICByZXR1cm4gaW52b2tlRnVuYyhsYXN0Q2FsbFRpbWUpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGltZXJJZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHdhaXQpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIGRlYm91bmNlZC5jYW5jZWwgPSBjYW5jZWw7XG4gIGRlYm91bmNlZC5mbHVzaCA9IGZsdXNoO1xuICByZXR1cm4gZGVib3VuY2VkO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRlYm91bmNlO1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyB0aGVcbiAqIFtsYW5ndWFnZSB0eXBlXShodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtZWNtYXNjcmlwdC1sYW5ndWFnZS10eXBlcylcbiAqIG9mIGBPYmplY3RgLiAoZS5nLiBhcnJheXMsIGZ1bmN0aW9ucywgb2JqZWN0cywgcmVnZXhlcywgYG5ldyBOdW1iZXIoMClgLCBhbmQgYG5ldyBTdHJpbmcoJycpYClcbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdCh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoXy5ub29wKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmICh0eXBlID09ICdvYmplY3QnIHx8IHR5cGUgPT0gJ2Z1bmN0aW9uJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNPYmplY3Q7XG4iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLiBBIHZhbHVlIGlzIG9iamVjdC1saWtlIGlmIGl0J3Mgbm90IGBudWxsYFxuICogYW5kIGhhcyBhIGB0eXBlb2ZgIHJlc3VsdCBvZiBcIm9iamVjdFwiLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3RMaWtlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc09iamVjdExpa2U7XG4iLCJ2YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgc3ltYm9sVGFnID0gJ1tvYmplY3QgU3ltYm9sXSc7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBTeW1ib2xgIHByaW1pdGl2ZSBvciBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBzeW1ib2wsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1N5bWJvbChTeW1ib2wuaXRlcmF0b3IpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNTeW1ib2woJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTeW1ib2wodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnc3ltYm9sJyB8fFxuICAgIChpc09iamVjdExpa2UodmFsdWUpICYmIGJhc2VHZXRUYWcodmFsdWUpID09IHN5bWJvbFRhZyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNTeW1ib2w7XG4iLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSB0aW1lc3RhbXAgb2YgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdGhhdCBoYXZlIGVsYXBzZWQgc2luY2VcbiAqIHRoZSBVbml4IGVwb2NoICgxIEphbnVhcnkgMTk3MCAwMDowMDowMCBVVEMpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMi40LjBcbiAqIEBjYXRlZ29yeSBEYXRlXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSB0aW1lc3RhbXAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uZGVmZXIoZnVuY3Rpb24oc3RhbXApIHtcbiAqICAgY29uc29sZS5sb2coXy5ub3coKSAtIHN0YW1wKTtcbiAqIH0sIF8ubm93KCkpO1xuICogLy8gPT4gTG9ncyB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBpdCB0b29rIGZvciB0aGUgZGVmZXJyZWQgaW52b2NhdGlvbi5cbiAqL1xudmFyIG5vdyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gcm9vdC5EYXRlLm5vdygpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBub3c7XG4iLCJ2YXIgZGVib3VuY2UgPSByZXF1aXJlKCcuL2RlYm91bmNlJyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0Jyk7XG5cbi8qKiBFcnJvciBtZXNzYWdlIGNvbnN0YW50cy4gKi9cbnZhciBGVU5DX0VSUk9SX1RFWFQgPSAnRXhwZWN0ZWQgYSBmdW5jdGlvbic7XG5cbi8qKlxuICogQ3JlYXRlcyBhIHRocm90dGxlZCBmdW5jdGlvbiB0aGF0IG9ubHkgaW52b2tlcyBgZnVuY2AgYXQgbW9zdCBvbmNlIHBlclxuICogZXZlcnkgYHdhaXRgIG1pbGxpc2Vjb25kcy4gVGhlIHRocm90dGxlZCBmdW5jdGlvbiBjb21lcyB3aXRoIGEgYGNhbmNlbGBcbiAqIG1ldGhvZCB0byBjYW5jZWwgZGVsYXllZCBgZnVuY2AgaW52b2NhdGlvbnMgYW5kIGEgYGZsdXNoYCBtZXRob2QgdG9cbiAqIGltbWVkaWF0ZWx5IGludm9rZSB0aGVtLiBQcm92aWRlIGBvcHRpb25zYCB0byBpbmRpY2F0ZSB3aGV0aGVyIGBmdW5jYFxuICogc2hvdWxkIGJlIGludm9rZWQgb24gdGhlIGxlYWRpbmcgYW5kL29yIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIGB3YWl0YFxuICogdGltZW91dC4gVGhlIGBmdW5jYCBpcyBpbnZva2VkIHdpdGggdGhlIGxhc3QgYXJndW1lbnRzIHByb3ZpZGVkIHRvIHRoZVxuICogdGhyb3R0bGVkIGZ1bmN0aW9uLiBTdWJzZXF1ZW50IGNhbGxzIHRvIHRoZSB0aHJvdHRsZWQgZnVuY3Rpb24gcmV0dXJuIHRoZVxuICogcmVzdWx0IG9mIHRoZSBsYXN0IGBmdW5jYCBpbnZvY2F0aW9uLlxuICpcbiAqICoqTm90ZToqKiBJZiBgbGVhZGluZ2AgYW5kIGB0cmFpbGluZ2Agb3B0aW9ucyBhcmUgYHRydWVgLCBgZnVuY2AgaXNcbiAqIGludm9rZWQgb24gdGhlIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQgb25seSBpZiB0aGUgdGhyb3R0bGVkIGZ1bmN0aW9uXG4gKiBpcyBpbnZva2VkIG1vcmUgdGhhbiBvbmNlIGR1cmluZyB0aGUgYHdhaXRgIHRpbWVvdXQuXG4gKlxuICogSWYgYHdhaXRgIGlzIGAwYCBhbmQgYGxlYWRpbmdgIGlzIGBmYWxzZWAsIGBmdW5jYCBpbnZvY2F0aW9uIGlzIGRlZmVycmVkXG4gKiB1bnRpbCB0byB0aGUgbmV4dCB0aWNrLCBzaW1pbGFyIHRvIGBzZXRUaW1lb3V0YCB3aXRoIGEgdGltZW91dCBvZiBgMGAuXG4gKlxuICogU2VlIFtEYXZpZCBDb3JiYWNobydzIGFydGljbGVdKGh0dHBzOi8vY3NzLXRyaWNrcy5jb20vZGVib3VuY2luZy10aHJvdHRsaW5nLWV4cGxhaW5lZC1leGFtcGxlcy8pXG4gKiBmb3IgZGV0YWlscyBvdmVyIHRoZSBkaWZmZXJlbmNlcyBiZXR3ZWVuIGBfLnRocm90dGxlYCBhbmQgYF8uZGVib3VuY2VgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gdGhyb3R0bGUuXG4gKiBAcGFyYW0ge251bWJlcn0gW3dhaXQ9MF0gVGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gdGhyb3R0bGUgaW52b2NhdGlvbnMgdG8uXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnM9e31dIFRoZSBvcHRpb25zIG9iamVjdC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMubGVhZGluZz10cnVlXVxuICogIFNwZWNpZnkgaW52b2tpbmcgb24gdGhlIGxlYWRpbmcgZWRnZSBvZiB0aGUgdGltZW91dC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMudHJhaWxpbmc9dHJ1ZV1cbiAqICBTcGVjaWZ5IGludm9raW5nIG9uIHRoZSB0cmFpbGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgdGhyb3R0bGVkIGZ1bmN0aW9uLlxuICogQGV4YW1wbGVcbiAqXG4gKiAvLyBBdm9pZCBleGNlc3NpdmVseSB1cGRhdGluZyB0aGUgcG9zaXRpb24gd2hpbGUgc2Nyb2xsaW5nLlxuICogalF1ZXJ5KHdpbmRvdykub24oJ3Njcm9sbCcsIF8udGhyb3R0bGUodXBkYXRlUG9zaXRpb24sIDEwMCkpO1xuICpcbiAqIC8vIEludm9rZSBgcmVuZXdUb2tlbmAgd2hlbiB0aGUgY2xpY2sgZXZlbnQgaXMgZmlyZWQsIGJ1dCBub3QgbW9yZSB0aGFuIG9uY2UgZXZlcnkgNSBtaW51dGVzLlxuICogdmFyIHRocm90dGxlZCA9IF8udGhyb3R0bGUocmVuZXdUb2tlbiwgMzAwMDAwLCB7ICd0cmFpbGluZyc6IGZhbHNlIH0pO1xuICogalF1ZXJ5KGVsZW1lbnQpLm9uKCdjbGljaycsIHRocm90dGxlZCk7XG4gKlxuICogLy8gQ2FuY2VsIHRoZSB0cmFpbGluZyB0aHJvdHRsZWQgaW52b2NhdGlvbi5cbiAqIGpRdWVyeSh3aW5kb3cpLm9uKCdwb3BzdGF0ZScsIHRocm90dGxlZC5jYW5jZWwpO1xuICovXG5mdW5jdGlvbiB0aHJvdHRsZShmdW5jLCB3YWl0LCBvcHRpb25zKSB7XG4gIHZhciBsZWFkaW5nID0gdHJ1ZSxcbiAgICAgIHRyYWlsaW5nID0gdHJ1ZTtcblxuICBpZiAodHlwZW9mIGZ1bmMgIT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoRlVOQ19FUlJPUl9URVhUKTtcbiAgfVxuICBpZiAoaXNPYmplY3Qob3B0aW9ucykpIHtcbiAgICBsZWFkaW5nID0gJ2xlYWRpbmcnIGluIG9wdGlvbnMgPyAhIW9wdGlvbnMubGVhZGluZyA6IGxlYWRpbmc7XG4gICAgdHJhaWxpbmcgPSAndHJhaWxpbmcnIGluIG9wdGlvbnMgPyAhIW9wdGlvbnMudHJhaWxpbmcgOiB0cmFpbGluZztcbiAgfVxuICByZXR1cm4gZGVib3VuY2UoZnVuYywgd2FpdCwge1xuICAgICdsZWFkaW5nJzogbGVhZGluZyxcbiAgICAnbWF4V2FpdCc6IHdhaXQsXG4gICAgJ3RyYWlsaW5nJzogdHJhaWxpbmdcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdGhyb3R0bGU7XG4iLCJ2YXIgYmFzZVRyaW0gPSByZXF1aXJlKCcuL19iYXNlVHJpbScpLFxuICAgIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpLFxuICAgIGlzU3ltYm9sID0gcmVxdWlyZSgnLi9pc1N5bWJvbCcpO1xuXG4vKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBOQU4gPSAwIC8gMDtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGJhZCBzaWduZWQgaGV4YWRlY2ltYWwgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzQmFkSGV4ID0gL15bLStdMHhbMC05YS1mXSskL2k7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBiaW5hcnkgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzQmluYXJ5ID0gL14wYlswMV0rJC9pO1xuXG4vKiogVXNlZCB0byBkZXRlY3Qgb2N0YWwgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzT2N0YWwgPSAvXjBvWzAtN10rJC9pO1xuXG4vKiogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgd2l0aG91dCBhIGRlcGVuZGVuY3kgb24gYHJvb3RgLiAqL1xudmFyIGZyZWVQYXJzZUludCA9IHBhcnNlSW50O1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBudW1iZXIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHByb2Nlc3MuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBudW1iZXIuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udG9OdW1iZXIoMy4yKTtcbiAqIC8vID0+IDMuMlxuICpcbiAqIF8udG9OdW1iZXIoTnVtYmVyLk1JTl9WQUxVRSk7XG4gKiAvLyA9PiA1ZS0zMjRcbiAqXG4gKiBfLnRvTnVtYmVyKEluZmluaXR5KTtcbiAqIC8vID0+IEluZmluaXR5XG4gKlxuICogXy50b051bWJlcignMy4yJyk7XG4gKiAvLyA9PiAzLjJcbiAqL1xuZnVuY3Rpb24gdG9OdW1iZXIodmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJykge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICBpZiAoaXNTeW1ib2wodmFsdWUpKSB7XG4gICAgcmV0dXJuIE5BTjtcbiAgfVxuICBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgdmFyIG90aGVyID0gdHlwZW9mIHZhbHVlLnZhbHVlT2YgPT0gJ2Z1bmN0aW9uJyA/IHZhbHVlLnZhbHVlT2YoKSA6IHZhbHVlO1xuICAgIHZhbHVlID0gaXNPYmplY3Qob3RoZXIpID8gKG90aGVyICsgJycpIDogb3RoZXI7XG4gIH1cbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gMCA/IHZhbHVlIDogK3ZhbHVlO1xuICB9XG4gIHZhbHVlID0gYmFzZVRyaW0odmFsdWUpO1xuICB2YXIgaXNCaW5hcnkgPSByZUlzQmluYXJ5LnRlc3QodmFsdWUpO1xuICByZXR1cm4gKGlzQmluYXJ5IHx8IHJlSXNPY3RhbC50ZXN0KHZhbHVlKSlcbiAgICA/IGZyZWVQYXJzZUludCh2YWx1ZS5zbGljZSgyKSwgaXNCaW5hcnkgPyAyIDogOClcbiAgICA6IChyZUlzQmFkSGV4LnRlc3QodmFsdWUpID8gTkFOIDogK3ZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0b051bWJlcjtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzFdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzJdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbM10hLi9LYWRhc3RySW5kaWNhdG9yLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbMV0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbMl0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVszXSEuL0thZGFzdHJJbmRpY2F0b3IuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9hcmNnaXNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIi8qKlxyXG4gKiBXZWJwYWNrIHdpbGwgcmVwbGFjZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB3aXRoIF9fd2VicGFja19yZXF1aXJlX18ucCB0byBzZXQgdGhlIHB1YmxpYyBwYXRoIGR5bmFtaWNhbGx5LlxyXG4gKiBUaGUgcmVhc29uIHdoeSB3ZSBjYW4ndCBzZXQgdGhlIHB1YmxpY1BhdGggaW4gd2VicGFjayBjb25maWcgaXM6IHdlIGNoYW5nZSB0aGUgcHVibGljUGF0aCB3aGVuIGRvd25sb2FkLlxyXG4gKiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcclxuLy8gQHRzLWlnbm9yZVxyXG5fX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHdpbmRvdy5qaW11Q29uZmlnLmJhc2VVcmxcclxuIiwiaW1wb3J0IHtcbiAgUmVhY3QsXG4gIEFsbFdpZGdldFByb3BzLFxuICBqc3gsXG4gIERhdGFTb3VyY2VDb21wb25lbnQsXG4gIFF1ZXJpYWJsZURhdGFTb3VyY2UsXG4gIERhdGFTb3VyY2UsXG4gIERhdGFTb3VyY2VTdGF0dXNcbn0gZnJvbSAnamltdS1jb3JlJztcbmltcG9ydCAnLi9LYWRhc3RySW5kaWNhdG9yLmNzcyc7XG5pbXBvcnQgeyBKaW11TWFwVmlld0NvbXBvbmVudCwgSmltdU1hcFZpZXcgfSBmcm9tICdqaW11LWFyY2dpcyc7XG5pbXBvcnQgdGhyb3R0bGUgZnJvbSAnbG9kYXNoL3Rocm90dGxlJztcblxuLy8gY3Jvc3MtaWZyYW1lIGV2ZW50IGJ1cyBzbyB3aWRnZXRzIGluc2lkZSBidWlsZGVyL3ByZXZpZXcvaWZyYW1lIGNhbiB0YWxrXG5jb25zdCBCVVM6IERvY3VtZW50ID0gKHdpbmRvdy50b3A/LmRvY3VtZW50ID8/IGRvY3VtZW50KTtcblxuY29uc3QgV0lER0VUX0VWRU5UUyA9IHtcbiAgWUlMX0NIQU5HRUQ6ICd5aWxDaGFuZ2VkJyxcbiAgUkVHSU9OX0NIQU5HRUQ6ICdyZWdpb25DaGFuZ2VkJyxcbiAgVkVHRVRBVElPTl9TVEFUVVNfQ0hBTkdFRDogJ3ZlZ2V0YXRpb25TdGF0dXNDaGFuZ2VkJyxcbiAgQ1JPUF9UWVBFX0NIQU5HRUQ6ICdjcm9wVHlwZUNoYW5nZWQnLFxuICBSRVNFVF9BTEw6ICdyZXNldEFsbFdpZGdldHMnXG59O1xuXG5pbnRlcmZhY2UgSW5kaWNhdG9yQ29uZmlnIHtcbiAgdXNlQXBpRGF0YVNvdXJjZT86IGJvb2xlYW47XG5cbiAgYXR0cmlidXRlRmllbGQ/OiBzdHJpbmc7IC8vIG51bWVyaWMgZmllbGQgdG8gYWdncmVnYXRlIChmb3Igc3VtL2F2Zy9taW4vbWF4L2ZpcnN0KVxuICBkZWNpbWFsUGxhY2VzPzogbnVtYmVyO1xuICBzdGF0T3BlcmF0aW9uPzogJ2NvdW50JyB8ICdzdW0nIHwgJ2F2ZycgfCAnbWluJyB8ICdtYXgnIHwgJ2ZpcnN0JztcblxuICAvLyBncm91cGluZ1xuICBncm91cEJ5RmllbGQ/OiBzdHJpbmc7IC8vIGUuZy4gJ2J1emlsaXNoJ1xuICBpbmNsdWRlTnVsbENhdGVnb3J5PzogYm9vbGVhbjtcbiAgY2F0ZWdvcnlNb2RlPzogJ0FVVE8nIHwgJ0VOVU0nO1xuICBlbnVtQ2F0ZWdvcmllcz86IEFycmF5PHsgbGFiZWw6IHN0cmluZzsgdmFsdWU6IHN0cmluZyB8IG51bWJlciB8IG51bGwgfT47XG4gIG91dFN0YXROYW1lPzogc3RyaW5nOyAvLyBkZWZhdWx0ICdhZ2cnXG4gIGRpc3BsYXlHcm91cFZhbHVlPzogc3RyaW5nIHwgbnVtYmVyIHwgbnVsbDtcblxuICAvLyDigJxleGNsdWRlIHplcm9z4oCdXG4gIGV4Y2x1ZGVaZXJvVmFsdWVzPzogYm9vbGVhbjtcblxuICAvLyBmaWx0ZXJzXG4gIGZpbHRlckV4cHJlc3Npb24/OiBzdHJpbmc7XG5cbiAgLy8g4pyFIENIQU5HRUQgREVGQVVMVDogdHVyaSAobm90IHR1cilcbiAgeWVyVG9pZmFzRmllbGQ/OiBzdHJpbmc7IC8vIEZlYXR1cmVMYXllciBmaWVsZCBuYW1lXG4gIHllclRvaWZhc1BhcmFtPzogc3RyaW5nOyAvLyBBUEkgcXVlcnkgcGFyYW0gbmFtZVxuXG4gIC8vIEFQSVxuICBhcGlFbmRwb2ludD86IHN0cmluZztcbiAgYXBpVXJsPzogc3RyaW5nO1xuICBlbmRwb2ludD86IHN0cmluZztcbiAgdXJsPzogc3RyaW5nO1xuICByZXNwb25zZUZpZWxkPzogc3RyaW5nO1xuICB1c2VBdXRoZW50aWNhdGlvbj86IGJvb2xlYW47XG4gIGFwaUtleT86IHN0cmluZztcblxuICAvLyBVSVxuICBsYWJlbD86IHN0cmluZztcbiAgdW5pdExhYmVsPzogc3RyaW5nO1xuICBzaG93RmVhdHVyZUNvdW50PzogYm9vbGVhbjtcbiAgc2hvd0xhc3RVcGRhdGU/OiBib29sZWFuO1xuICBzaG93RmlsdGVyU3VtbWFyeT86IGJvb2xlYW47XG4gIGljb25JbWFnZT86IGFueTtcblxuICAvLyBzdHlsaW5nIG92ZXJyaWRlcyAob3B0aW9uYWwpXG4gIGJhY2tncm91bmRDb2xvcj86IHN0cmluZztcbiAgdGV4dENvbG9yPzogc3RyaW5nO1xuICBsYWJlbENvbG9yPzogc3RyaW5nO1xuICBib3JkZXJSYWRpdXM/OiBudW1iZXIgfCBzdHJpbmc7XG4gIGljb25TaXplPzogbnVtYmVyIHwgc3RyaW5nO1xuICBpY29uT3BhY2l0eT86IG51bWJlciB8IHN0cmluZztcblxuICAvLyBhdXRvIHJlZnJlc2hcbiAgYXV0b1JlZnJlc2g/OiBib29sZWFuO1xuICByZWZyZXNoSW50ZXJ2YWw/OiBudW1iZXI7IC8vIG1pbnV0ZXNcbn1cblxuY29uc3QgRklMVEVSX0ZJRUxEUyA9IHtcbiAgWUlMOiAneWlsJyxcbiAgVklMT1lBVDogJ3ZpbG95YXQnLFxuICBUVU1BTjogJ3R1bWFuJyxcbiAgRl9JTk46ICdmX2lubicsXG4gIEVLSU46ICdla2luJyxcbiAgVkg6ICd2aCcsXG4gIFZFR19NOiAndmVnX20nLFxuICAvLyDinIUgQ0hBTkdFRFxuICBUVVJJOiAndHVyaSdcbn07XG5cbmludGVyZmFjZSBWZWdldGF0aW9uU3RhdHNXaWRnZXRTdGF0ZSB7XG4gIHZlZ2V0YXRpb25BcmVhOiBudW1iZXIgfCBudWxsO1xuICBsb2FkaW5nOiBib29sZWFuO1xuICBlcnJvcjogc3RyaW5nIHwgbnVsbDtcblxuICBhY3RpdmVNYXBWaWV3PzogSmltdU1hcFZpZXc7XG4gIGRhdGFTb3VyY2U/OiBRdWVyaWFibGVEYXRhU291cmNlO1xuICBmZWF0dXJlTGF5ZXI/OiBfX2VzcmkuRmVhdHVyZUxheWVyO1xuICBmZWF0dXJlTGF5ZXJzPzogX19lc3JpLkZlYXR1cmVMYXllcltdO1xuXG4gIGZlYXR1cmVDb3VudDogbnVtYmVyO1xuICBsYXN0VXBkYXRlOiBEYXRlIHwgbnVsbDtcblxuICBjb25uZWN0aW9uU3RhdHVzOiAnaWRsZScgfCAnY29ubmVjdGluZycgfCAnY29ubmVjdGVkJyB8ICdmYWlsZWQnO1xuICBtYXBDb25uZWN0aW9uQXR0ZW1wdHM6IG51bWJlcjtcblxuICAvLyBmaWx0ZXJzXG4gIHNlbGVjdGVkWWlsOiBzdHJpbmc7XG4gIHNlbGVjdGVkVmlsb3lhdDogc3RyaW5nO1xuICBzZWxlY3RlZFR1bWFuOiBzdHJpbmc7XG4gIHNlbGVjdGVkWWVyVG9pZmFzOiBzdHJpbmc7IC8vIGtlcHQgbmFtZSwgYnV0IG1hcHMgdG8gZmllbGQgXCJ0dXJpXCJcblxuICBzZWxlY3RlZFZlZ2V0YXRpb25TdGF0dXM6IHN0cmluZztcbiAgc2VsZWN0ZWRDcm9wVHlwZTogc3RyaW5nO1xuICAvKiogQmFyIGNoYXJ0J3MgY3VycmVudCBhdHRyaWJ1dGUgKGUuZy4gc3RhdHVzXzIwMjVfMDZfMTIpOyB1c2Ugd2l0aCBiYXJDYXRlZ29yeVZhbHVlIHRvIGZpbHRlciBsaWtlIEdyYWZmICovXG4gIGJhckNhdGVnb3J5RmllbGQ6IHN0cmluZyB8IG51bGw7XG4gIGJhckNhdGVnb3J5VmFsdWU6IHN0cmluZyB8IG51bGw7XG5cbiAgLyoqIFNlbGVjdGVkIE5EVkkgZGF0ZSAoWVlZWS1NTS1ERCkgY29taW5nIGZyb20gQWdyaUZpbHRlci9HcmFmZiAqL1xuICBzZWxlY3RlZE5kdmlEYXRlPzogc3RyaW5nO1xuICAvKiogUG9seWdvbiBORFZJIHN0YXR1cyBmaWVsZCBuYW1lIGZvciB0aGUgc2VsZWN0ZWQgZGF0ZSAoZS5nLiBzdGF0dXNfMjAyNV8wOV8xOCkgKi9cbiAgbmR2aVN0YXR1c0ZpZWxkPzogc3RyaW5nIHwgbnVsbDtcblxuICB0b3RhbEFyZWE6IG51bWJlciB8IG51bGw7XG5cbiAgLy8gZXZlbnQgdHJhY2tpbmdcbiAgbGFzdEZpbHRlckV2ZW50VGltZXN0YW1wOiBudW1iZXI7XG4gIGlzSGFuZGxpbmdFeHRlcm5hbEV2ZW50OiBib29sZWFuO1xuXG4gIC8vIGdyb3VwaW5nIG91dHB1dFxuICBncm91cFJlc3VsdHM/OiBBcnJheTx7IGtleTogc3RyaW5nIHwgbnVtYmVyIHwgbnVsbDsgbGFiZWw6IHN0cmluZzsgdmFsdWU6IG51bWJlciB9Pjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmVnZXRhdGlvblN0YXRzV2lkZ2V0IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxcbiAgQWxsV2lkZ2V0UHJvcHM8YW55PixcbiAgVmVnZXRhdGlvblN0YXRzV2lkZ2V0U3RhdGVcbj4ge1xuICBwcml2YXRlIHRocm90dGxlZEZldGNoRGF0YTogYW55O1xuICBwcml2YXRlIE1BWF9DT05ORUNUSU9OX0FUVEVNUFRTID0gMztcbiAgcHJpdmF0ZSBpbml0aWFsaXphdGlvblRpbWVyOiBhbnk7XG4gIHByaXZhdGUgcmVmcmVzaFRpbWVyOiBhbnk7XG4gIHByaXZhdGUgX2Fib3J0Q29udHJvbGxlcjogQWJvcnRDb250cm9sbGVyIHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgX2lzTW91bnRlZCA9IGZhbHNlO1xuICBwcml2YXRlIF9vblJlc2V0OiAoKSA9PiB2b2lkO1xuICBwcml2YXRlIF9pc1Jlc2V0dGluZyA9IGZhbHNlO1xuXG4gIC8vIFZpbG95YXQgcm91dGluZyBjYWNoZSAodmlsb3lhdCBub3JtYWxpemVkIGtleSAtPiBpbmRleCBpbiBgdGhpcy5zdGF0ZS5mZWF0dXJlTGF5ZXJzYClcbiAgcHJpdmF0ZSBfdmlsb3lhdEtleVRvTGF5ZXJJbmRleDogUmVjb3JkPHN0cmluZywgbnVtYmVyPiA9IHt9O1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBBbGxXaWRnZXRQcm9wczxhbnk+KSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHZlZ2V0YXRpb25BcmVhOiBudWxsLFxuICAgICAgbG9hZGluZzogdHJ1ZSxcbiAgICAgIGVycm9yOiBudWxsLFxuXG4gICAgICBmZWF0dXJlQ291bnQ6IDAsXG4gICAgICBsYXN0VXBkYXRlOiBudWxsLFxuXG4gICAgICBjb25uZWN0aW9uU3RhdHVzOiAnaWRsZScsXG4gICAgICBtYXBDb25uZWN0aW9uQXR0ZW1wdHM6IDAsXG4gICAgICBmZWF0dXJlTGF5ZXJzOiBbXSxcblxuICAgICAgc2VsZWN0ZWRZaWw6ICcnLFxuICAgICAgc2VsZWN0ZWRWaWxveWF0OiAnJyxcbiAgICAgIHNlbGVjdGVkVHVtYW46ICcnLFxuICAgICAgc2VsZWN0ZWRZZXJUb2lmYXM6ICcnLFxuXG4gICAgICB0b3RhbEFyZWE6IG51bGwsXG5cbiAgICAgIHNlbGVjdGVkVmVnZXRhdGlvblN0YXR1czogJycsXG4gICAgICBzZWxlY3RlZENyb3BUeXBlOiAnJyxcbiAgICAgIGJhckNhdGVnb3J5RmllbGQ6IG51bGwsXG4gICAgICBiYXJDYXRlZ29yeVZhbHVlOiBudWxsLFxuXG4gICAgICBzZWxlY3RlZE5kdmlEYXRlOiAnJyxcbiAgICAgIG5kdmlTdGF0dXNGaWVsZDogbnVsbCxcblxuICAgICAgbGFzdEZpbHRlckV2ZW50VGltZXN0YW1wOiAwLFxuICAgICAgaXNIYW5kbGluZ0V4dGVybmFsRXZlbnQ6IGZhbHNlXG4gICAgfTtcblxuICAgIHRoaXMudGhyb3R0bGVkRmV0Y2hEYXRhID0gdGhyb3R0bGUodGhpcy5mZXRjaERhdGEsIDMwMCwgeyBsZWFkaW5nOiBmYWxzZSwgdHJhaWxpbmc6IHRydWUgfSk7XG5cbiAgICAvLyBCaW5kXG4gICAgdGhpcy5mZXRjaERhdGEgPSB0aGlzLmZldGNoRGF0YS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZmV0Y2hBcGlEYXRhID0gdGhpcy5mZXRjaEFwaURhdGEuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uRGF0YVNvdXJjZUNyZWF0ZWQgPSB0aGlzLm9uRGF0YVNvdXJjZUNyZWF0ZWQuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uRGF0YVNvdXJjZUluZm9DaGFuZ2UgPSB0aGlzLm9uRGF0YVNvdXJjZUluZm9DaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uQWN0aXZlVmlld0NoYW5nZSA9IHRoaXMub25BY3RpdmVWaWV3Q2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5yZXRyeU1hcENvbm5lY3Rpb24gPSB0aGlzLnJldHJ5TWFwQ29ubmVjdGlvbi5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaW5pdGlhbGl6ZU1hcENvbm5lY3Rpb24gPSB0aGlzLmluaXRpYWxpemVNYXBDb25uZWN0aW9uLmJpbmQodGhpcyk7XG4gICAgdGhpcy5yZWFkRmlsdGVyc0Zyb21VcmwgPSB0aGlzLnJlYWRGaWx0ZXJzRnJvbVVybC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlVGhlbWVDaGFuZ2UgPSB0aGlzLmhhbmRsZVRoZW1lQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zZXR1cEF1dG9SZWZyZXNoID0gdGhpcy5zZXR1cEF1dG9SZWZyZXNoLmJpbmQodGhpcyk7XG5cbiAgICAvLyBFeHRlcm5hbCBoYW5kbGVyc1xuICAgIHRoaXMuaGFuZGxlWWlsQ2hhbmdlID0gdGhpcy5oYW5kbGVZaWxDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZVJlZ2lvbkNoYW5nZSA9IHRoaXMuaGFuZGxlUmVnaW9uQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVDb25zdHJ1Y3Rpb25ZZWFyQ2hhbmdlZCA9IHRoaXMuaGFuZGxlQ29uc3RydWN0aW9uWWVhckNoYW5nZWQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZVdhdGVyU3VwcGx5RmlsdGVyQ2hhbmdlID0gdGhpcy5oYW5kbGVXYXRlclN1cHBseUZpbHRlckNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlQ2F0ZWdvcnlTZWxlY3Rpb24gPSB0aGlzLmhhbmRsZUNhdGVnb3J5U2VsZWN0aW9uLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVLYWRhc3RyRmlsdGVyc0NoYW5nZWQgPSB0aGlzLmhhbmRsZUthZGFzdHJGaWx0ZXJzQ2hhbmdlZC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlS2FkYXN0ckZpbHRlcnNSZXNldCA9IHRoaXMuaGFuZGxlS2FkYXN0ckZpbHRlcnNSZXNldC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlVmVnZXRhdGlvblN0YXR1c0NoYW5nZSA9IHRoaXMuaGFuZGxlVmVnZXRhdGlvblN0YXR1c0NoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlQ3JvcFR5cGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNyb3BUeXBlQ2hhbmdlLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLl9vblJlc2V0ID0gKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ1tWZWdldGF0aW9uU3RhdHNXaWRnZXRdIFJlc2V0dGluZyB3aWRnZXQnKTtcbiAgICAgIHRoaXMuX2lzUmVzZXR0aW5nID0gdHJ1ZTtcblxuICAgICAgaWYgKHRoaXMuX2Fib3J0Q29udHJvbGxlcikge1xuICAgICAgICB0aGlzLl9hYm9ydENvbnRyb2xsZXIuYWJvcnQoKTtcbiAgICAgICAgdGhpcy5fYWJvcnRDb250cm9sbGVyID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgICAge1xuICAgICAgICAgIHNlbGVjdGVkWWlsOiAnJyxcbiAgICAgICAgICBzZWxlY3RlZFZpbG95YXQ6ICcnLFxuICAgICAgICAgIHNlbGVjdGVkVHVtYW46ICcnLFxuICAgICAgICAgIHNlbGVjdGVkWWVyVG9pZmFzOiAnJyxcbiAgICAgICAgICBzZWxlY3RlZFZlZ2V0YXRpb25TdGF0dXM6ICcnLFxuICAgICAgICAgIHNlbGVjdGVkQ3JvcFR5cGU6ICcnLFxuICAgICAgICAgIGJhckNhdGVnb3J5RmllbGQ6IG51bGwsXG4gICAgICAgICAgYmFyQ2F0ZWdvcnlWYWx1ZTogbnVsbCxcbiAgICAgICAgICB2ZWdldGF0aW9uQXJlYTogbnVsbCxcbiAgICAgICAgICB0b3RhbEFyZWE6IG51bGwsXG4gICAgICAgICAgbG9hZGluZzogdHJ1ZSxcbiAgICAgICAgICBlcnJvcjogbnVsbCxcbiAgICAgICAgICBncm91cFJlc3VsdHM6IHVuZGVmaW5lZFxuICAgICAgICB9LFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgaWYgKHRoaXMucHJvcHMuY29uZmlnPy51c2VBcGlEYXRhU291cmNlKSB0aGlzLmZldGNoQXBpRGF0YSgpO1xuICAgICAgICAgIGVsc2UgaWYgKHRoaXMuc3RhdGUuY29ubmVjdGlvblN0YXR1cyA9PT0gJ2Nvbm5lY3RlZCcpIHRoaXMuZmV0Y2hEYXRhKHRydWUpO1xuXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiAodGhpcy5faXNSZXNldHRpbmcgPSBmYWxzZSksIDUwMCk7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfTtcbiAgfVxuXG4gIC8vIOKUgOKUgCBBUEktc2lkZSBjYW5vbmljYWxpemF0aW9uIChBU0NJSSBhcG9zdHJvcGhlOyBub3JtYWxpemUgbycvZycpXG4gIHByaXZhdGUgbm9ybWFsaXplVXpiZWtGb3JBcGkgPSAoczogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgICBpZiAoIXMpIHJldHVybiAnJztcbiAgICBsZXQgb3V0ID0gcy50cmltKCk7XG5cbiAgICAvLyB1bmlmeSBhcG9zdHJvcGhlLWxpa2UgbWFya3MgdG8gQVNDSUkgJ1xuICAgIG91dCA9IG91dC5yZXBsYWNlKC9bXFx1MDJCQlxcdTAyQkNcXHUyMDE5XFx1MjAxOFxcdTIwMzJcXHUyMDM1YMK0y4rLi10vZywgXCInXCIpO1xuXG4gICAgLy8gbm9ybWFsaXplIG8nL2cnIGNvbWJvcyBubyBtYXR0ZXIgd2hpY2ggYXBvc3Ryb3BoZSB2YXJpYW50IHdhcyB1c2VkXG4gICAgb3V0ID0gb3V0XG4gICAgICAucmVwbGFjZSgvb1snXFx1MDJCQlxcdTAyQkNcXHUyMDE5XFx1MjAxOGDCtMuKy4tdL2dpLCBcIm8nXCIpXG4gICAgICAucmVwbGFjZSgvZ1snXFx1MDJCQlxcdTAyQkNcXHUyMDE5XFx1MjAxOGDCtMuKy4tdL2dpLCBcImcnXCIpO1xuXG4gICAgcmV0dXJuIG91dC5yZXBsYWNlKC9cXHMrL2csICcgJyk7XG4gIH07XG5cbiAgLy8gRmluZCBmaWVsZCB0eXBlIG9uIHRoZSBhY3RpdmUgZmVhdHVyZSBsYXllciAoaWYgYXZhaWxhYmxlKVxuICBwcml2YXRlIGdldEZpZWxkVHlwZSA9IChuYW1lOiBzdHJpbmcpOiBzdHJpbmcgfCBudWxsID0+IHtcbiAgICBjb25zdCBmbCA9IHRoaXMuc3RhdGUuZmVhdHVyZUxheWVyO1xuICAgIGlmICghZmw/LmZpZWxkcykgcmV0dXJuIG51bGw7XG4gICAgY29uc3QgZiA9IGZsLmZpZWxkcy5maW5kKChmZikgPT4gZmYubmFtZS50b0xvd2VyQ2FzZSgpID09PSAobmFtZSB8fCAnJykudG9Mb3dlckNhc2UoKSk7XG4gICAgcmV0dXJuIGY/LnR5cGUgfHwgbnVsbDtcbiAgfTtcblxuICAvLyBaZXJvLWxpa2UgZmlsdGVyIHRoYXQgd29ya3MgZm9yIG51bWVyaWMgKmFuZCogc3RyaW5nIGZpZWxkc1xuICBwcml2YXRlIG56ID0gKGZpZWxkOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBmID0gKGZpZWxkIHx8ICcnKS50cmltKCk7XG4gICAgaWYgKCFmKSByZXR1cm4gJygxPTEpJztcblxuICAgIGNvbnN0IHQgPSAodGhpcy5nZXRGaWVsZFR5cGUoZikgfHwgJycpLnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKC8oc21hbGxpbnRlZ2VyfGludGVnZXJ8ZG91YmxlfHNpbmdsZXxmbG9hdCkvLnRlc3QodCkpIHtcbiAgICAgIHJldHVybiBgKCR7Zn0gPiAwKWA7XG4gICAgfVxuICAgIHJldHVybiBgKCR7Zn0gSVMgTk9UIE5VTEwgQU5EICR7Zn0gPD4gJycgQU5EICR7Zn0gTk9UIElOICgnMCcsJzAwJywnMC4wJywnMCwwJywnLScpKWA7XG4gIH07XG5cbiAgLy8gVmFyaWFudHMgZ2VuZXJhdG9yIGZvciByZXRyaWVzIChBUEkgKipvbmx5KiopXG4gIHByaXZhdGUgbWFrZUFwb3N0cm9waGVWYXJpYW50cyA9IChzOiBzdHJpbmcpOiBzdHJpbmdbXSA9PiB7XG4gICAgaWYgKCFzKSByZXR1cm4gWycnXTtcbiAgICBjb25zdCBiYXNlQXNjaWkgPSB0aGlzLm5vcm1hbGl6ZVV6YmVrRm9yQXBpKHMpO1xuICAgIGNvbnN0IHZhcmlhbnRzID0gW1wiJ1wiLCAnXFx1MDJCQicsICdcXHUwMkJDJywgJ1xcdTIwMTknLCAnYCddOyAvLyAnIMq7IMq8IOKAmSBgXG4gICAgY29uc3Qgc2V0ID0gbmV3IFNldDxzdHJpbmc+KCk7XG5cbiAgICBmb3IgKGNvbnN0IGEgb2YgdmFyaWFudHMpIHtcbiAgICAgIGxldCB2ID0gc1xuICAgICAgICAucmVwbGFjZSgvW1xcdTAyQkJcXHUwMkJDXFx1MjAxOVxcdTIwMThcXHUyMDMyXFx1MjAzNWDCtMuKy4tdL2csIGEpXG4gICAgICAgIC5yZXBsYWNlKC9vWydcXHUwMkJCXFx1MDJCQ1xcdTIwMTlcXHUyMDE4YMK0y4rLi10vZ2ksICdvJyArIGEpXG4gICAgICAgIC5yZXBsYWNlKC9nWydcXHUwMkJCXFx1MDJCQ1xcdTIwMTlcXHUyMDE4YMK0y4rLi10vZ2ksICdnJyArIGEpXG4gICAgICAgIC5yZXBsYWNlKC9cXHMrL2csICcgJylcbiAgICAgICAgLnRyaW0oKTtcbiAgICAgIHNldC5hZGQodik7XG4gICAgfVxuXG4gICAgc2V0LmRlbGV0ZShiYXNlQXNjaWkpO1xuICAgIHJldHVybiBbYmFzZUFzY2lpLCAuLi5BcnJheS5mcm9tKHNldCldO1xuICB9O1xuXG4gIC8vIERpc3RyaWN0L2NpdHkgc3VmZml4IHZhcmlhbnRzIGZvciBBUEkgdHJpZXNcbiAgcHJpdmF0ZSBtYWtlRGlzdHJpY3RTdWZmaXhWYXJpYW50cyA9IChyYXc6IHN0cmluZyk6IHN0cmluZ1tdID0+IHtcbiAgICBpZiAoIXJhdykgcmV0dXJuIFsnJ107XG4gICAgY29uc3QgcyA9IHJhdy50cmltKCk7XG4gICAgY29uc3QgaGFzVHVtYW5pID0gL1xcYnR1bWFuaSQvaS50ZXN0KHMpO1xuICAgIGNvbnN0IGhhc1NoYWhhciA9IC9cXGJzaGFoYXIkfFxcYnNoYWhyaSQvaS50ZXN0KHMpO1xuXG4gICAgY29uc3QgYmFzZXMgPSB0aGlzLm1ha2VBcG9zdHJvcGhlVmFyaWFudHMocyk7XG4gICAgY29uc3Qgb3V0ID0gbmV3IFNldDxzdHJpbmc+KCk7XG5cbiAgICBmb3IgKGNvbnN0IGIgb2YgYmFzZXMpIHtcbiAgICAgIGNvbnN0IG4gPSB0aGlzLm5vcm1hbGl6ZVV6YmVrRm9yQXBpKGIpO1xuICAgICAgb3V0LmFkZChuKTtcbiAgICAgIGlmICghaGFzVHVtYW5pICYmICFoYXNTaGFoYXIpIHtcbiAgICAgICAgb3V0LmFkZChgJHtufSB0dW1hbmlgKTtcbiAgICAgICAgb3V0LmFkZChgJHtufSBzaGFoYXJgKTtcbiAgICAgICAgb3V0LmFkZChgJHtufSBzaGFocmlgKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIEFycmF5LmZyb20ob3V0KTtcbiAgfTtcblxuICAvLyBSZWdpb24gc3VmZml4IHZhcmlhbnRzIGZvciBBUEkgdHJpZXMgKHZpbG95YXQgdnMgc2hhaGFyKVxuICBwcml2YXRlIG1ha2VSZWdpb25TdWZmaXhWYXJpYW50cyA9IChyYXc6IHN0cmluZyk6IHN0cmluZ1tdID0+IHtcbiAgICBpZiAoIXJhdykgcmV0dXJuIFsnJ107XG4gICAgY29uc3QgcyA9IHJhdy50cmltKCk7XG4gICAgY29uc3QgYmFzZXMgPSB0aGlzLm1ha2VBcG9zdHJvcGhlVmFyaWFudHMocyk7XG5cbiAgICBjb25zdCBsb29rc1ZpbCA9IC9cXGJ2aWxveWF0aSQvaS50ZXN0KHMpO1xuICAgIGNvbnN0IGxvb2tzU2ggPSAvXFxic2hhaGFyJC9pLnRlc3Qocyk7XG5cbiAgICBjb25zdCBvdXQgPSBuZXcgU2V0PHN0cmluZz4oKTtcbiAgICBmb3IgKGNvbnN0IGIgb2YgYmFzZXMpIHtcbiAgICAgIGNvbnN0IG4gPSB0aGlzLm5vcm1hbGl6ZVV6YmVrRm9yQXBpKGIpO1xuICAgICAgb3V0LmFkZChuKTtcbiAgICAgIGlmICghbG9va3NWaWwgJiYgIWxvb2tzU2gpIHtcbiAgICAgICAgb3V0LmFkZChgJHtufSB2aWxveWF0aWApO1xuICAgICAgICBvdXQuYWRkKGAke259IHNoYWhhcmApO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gQXJyYXkuZnJvbShvdXQpO1xuICB9O1xuXG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IEFQT1NUUk9QSEVfVkFSSUFOVFMgPSBbXCInXCIsIFwiJ1wiLCBcIidcIiwgJ8q7JywgJ8q8JywgJ2AnXTtcblxuICBwcml2YXRlIG5vcm1hbGl6ZUFwb3Moczogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gKHMgPz8gJycpLnJlcGxhY2UoL1snJyfKu8q8YF0vZywgXCInXCIpO1xuICB9XG5cbiAgcHJpdmF0ZSBlc2NhcGVBcmNHSVModmFsdWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHZhbHVlID8gdmFsdWUucmVwbGFjZSgvJy9nLCBcIicnXCIpIDogJyc7XG4gIH1cblxuICBwcml2YXRlIGVxQXBvc1NtYXJ0KGZpZWxkOiBzdHJpbmcsIHJhdzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBpZiAoIXJhdykgcmV0dXJuICcnO1xuICAgIGNvbnN0IHMgPSB0aGlzLm5vcm1hbGl6ZUFwb3MoU3RyaW5nKHJhdykudHJpbSgpKTtcbiAgICBpZiAoIS8nLy50ZXN0KHMpKSByZXR1cm4gYCR7ZmllbGR9PScke3RoaXMuZXNjYXBlQXJjR0lTKHMpfSdgO1xuICAgIGNvbnN0IGJhc2UgPSBzLnJlcGxhY2UoLycvZywgJ1xcdUZGRkYnKTtcbiAgICBjb25zdCBwYXJ0cyA9IFZlZ2V0YXRpb25TdGF0c1dpZGdldC5BUE9TVFJPUEhFX1ZBUklBTlRTLm1hcCgoY2gpID0+IHtcbiAgICAgIGNvbnN0IGNhbmRpZGF0ZSA9IGJhc2Uuc3BsaXQoJ1xcdUZGRkYnKS5qb2luKGNoKTtcbiAgICAgIHJldHVybiBgJHtmaWVsZH09JyR7dGhpcy5lc2NhcGVBcmNHSVMoY2FuZGlkYXRlKX0nYDtcbiAgICB9KTtcbiAgICByZXR1cm4gYCgke3BhcnRzLmpvaW4oJyBPUiAnKX0pYDtcbiAgfVxuY29tcG9uZW50RGlkTW91bnQoKSB7XG4gIHRoaXMuX2lzTW91bnRlZCA9IHRydWU7XG5cbiAgLy8gY29ubmVjdGlvbiBtb2RlXG4gIGlmICghdGhpcy5wcm9wcy5jb25maWc/LnVzZUFwaURhdGFTb3VyY2UpIHRoaXMuc2V0U3RhdGUoeyBjb25uZWN0aW9uU3RhdHVzOiAnY29ubmVjdGluZycgfSk7XG4gIGVsc2UgdGhpcy5zZXRTdGF0ZSh7IGNvbm5lY3Rpb25TdGF0dXM6ICdjb25uZWN0ZWQnIH0sICgpID0+IHRoaXMuZmV0Y2hBcGlEYXRhKCkpO1xuXG4gIC8vIOKchSBMaXN0ZW4gdG8gbWFzdGVyIGZpbHRlciAoQWdyaUZpbHRlcikgYW5kIHRvIGNhdGVnb3J5L2Nyb3Agc2VsZWN0aW9uIChlLmcuIGZyb20gUGllKSBzbyBJbmRpY2F0b3IgZmlsdGVycyBieSBjcm9wXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21hc3RlckZpbHRlckNoYW5nZWQnLCB0aGlzLmhhbmRsZU1hc3RlckZpbHRlckNoYW5nZWQgYXMgRXZlbnRMaXN0ZW5lcik7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NhdGVnb3J5RmlsdGVyQ2hhbmdlZCcsIHRoaXMuaGFuZGxlRXh0ZXJuYWxDYXRlZ29yeSBhcyBFdmVudExpc3RlbmVyKTtcblxuICAvLyBrZWVwIHJlc2V0IHN1cHBvcnRcbiAgQlVTLmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2V0QWxsRmlsdGVycycsIHRoaXMuX29uUmVzZXQgYXMgRXZlbnRMaXN0ZW5lcik7XG4gIEJVUy5hZGRFdmVudExpc3RlbmVyKCdyZXNldEFsbFdpZGdldHMnLCB0aGlzLl9vblJlc2V0IGFzIEV2ZW50TGlzdGVuZXIpO1xuXG4gIC8vIG9wdGlvbmFsOiB1cmwgaHlkcmF0aW9uIGlmIHlvdSBzdGlsbCB3YW50IGl0XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMucmVhZEZpbHRlcnNGcm9tVXJsKTtcblxuICAvLyBpbml0aWFsIGh5ZHJhdGlvbiAoaWYgdXJsIGhhcyB2YWx1ZXMpXG4gIHRoaXMucmVhZEZpbHRlcnNGcm9tVXJsKCk7XG5cbiAgdGhpcy5zZXR1cEF1dG9SZWZyZXNoKCk7XG5cbiAgLy8gaW5pdCBndWFyZFxuICB0aGlzLmluaXRpYWxpemF0aW9uVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZW5zdXJlSW5pdGlhbGl6YXRpb24oKSwgMzAwMCk7XG59XG5cbiAgcHJpdmF0ZSBzaG91bGRGZXRjaEZvclZpbG95YXQoKTogYm9vbGVhbiB7XG4gICAgLy8gUmVxdWlyZW1lbnQ6IGtlZXAgaW5kaWNhdG9yIGJsYW5rIHVudGlsIGEgdmlsb3lhdCBpcyBzZWxlY3RlZC5cbiAgICByZXR1cm4gISEodGhpcy5zdGF0ZS5zZWxlY3RlZFZpbG95YXQgfHwgJycpLnRyaW0oKTtcbiAgfVxuXG5wcml2YXRlIGhhbmRsZU1hc3RlckZpbHRlckNoYW5nZWQgPSAoZXZlbnQ6IEV2ZW50KSA9PiB7XG4gIGlmICghdGhpcy5faXNNb3VudGVkKSByZXR1cm47XG4gIGlmICh0aGlzLl9pc1Jlc2V0dGluZykgcmV0dXJuO1xuXG4gIGNvbnN0IGQ6IGFueSA9IChldmVudCBhcyBDdXN0b21FdmVudCk/LmRldGFpbCB8fCB7fTtcbiAgaWYgKCFkPy5maWx0ZXJzKSByZXR1cm47XG5cbiAgLy8gaWdub3JlIHNlbGYgaWYgZXZlciBkaXNwYXRjaGVkIChkZWZlbnNpdmUpXG4gIGlmIChkPy5zb3VyY2UgPT09ICdWZWdldGF0aW9uU3RhdHNXaWRnZXQnKSByZXR1cm47XG5cbiAgY29uc3QgZmlsdGVycyA9IGQuZmlsdGVycyB8fCB7fTtcbiAgY29uc3Qgc2NvcGUgPSBkLnNjb3BlIHx8IHt9O1xuXG4gIC8vIOKchSBJTVBPUlRBTlQ6IGlmIEFncmlGaWx0ZXIgbG9ja2VkIHZpbG95YXQsIHdlIG11c3QgdXNlIGl0XG4gIGNvbnN0IGVmZmVjdGl2ZVZpbG95YXQgPSB0aGlzLm5vcm1hbGl6ZUFwb3Moc2NvcGUubG9ja2VkVmlsb3lhdCB8fCBmaWx0ZXJzLnZpbG95YXQgfHwgJycpO1xuXG4gIGNvbnN0IG5leHRZaWwgPSAoZmlsdGVycy55aWwgPz8gJycpLnRvU3RyaW5nKCk7XG4gIGNvbnN0IG5leHRWaWwgPSBlZmZlY3RpdmVWaWxveWF0O1xuICBjb25zdCBuZXh0VHVtID0gdGhpcy5ub3JtYWxpemVBcG9zKGZpbHRlcnMudHVtYW4gfHwgJycpO1xuICBjb25zdCBuZXh0VHVyaSA9IHRoaXMubm9ybWFsaXplQXBvcyhmaWx0ZXJzLnR1cmkgfHwgZmlsdGVycy50dXIgfHwgJycpOyAvLyB0b2xlcmF0ZSBvbGRlciBwYXlsb2Fkc1xuICBjb25zdCBuZXh0VmggPSB0aGlzLm5vcm1hbGl6ZUFwb3MoZmlsdGVycy52aCB8fCAnJyk7XG4gIGNvbnN0IG5leHRCYXJGaWVsZCA9IGZpbHRlcnMuYmFyQ2F0ZWdvcnlGaWVsZCA/PyBudWxsO1xuICBjb25zdCBuZXh0QmFyVmFsdWUgPSBmaWx0ZXJzLmJhckNhdGVnb3J5VmFsdWUgPz8gbnVsbDtcblxuICAvLyBORFZJIGRhdGUg4oaSIGZvciBJbmRpY2F0b3Igd2Ugb25seSBzdGFydCBmaWx0ZXJpbmcgYnkgTkRWSSB3aGVuXG4gIC8vIHRoZXJlIGlzIGEgbWFudWFsIE5EVkktcmVsYXRlZCBjaG9pY2U6XG4gIC8vIC0gZXhwbGljaXQgZGF0ZSBzZWxlY3Rpb24gKGZpbHRlcnMubmR2aURhdGVMb2NrZWQgZnJvbSBBZ3JpRmlsdGVyL0dyYWZmKSwgb3JcbiAgLy8gLSBhIFZIIGJ1Y2tldCAoZmlsdGVycy52aCksIG9yXG4gIC8vIC0gYSBiYXIgY2F0ZWdvcnkgdmFsdWUgKGZpbHRlcnMuYmFyQ2F0ZWdvcnlWYWx1ZSwgZnJvbSBBZ3JpQmFyL0dyYWZmKS5cbiAgLy8gQXV0by1jaG9zZW4gbGF0ZXN0IE5EVkkgZGF0ZSB1c2VkIGZvciB0aGUgYmFyIGFsb25lIHNob3VsZCBOT1RcbiAgLy8gY29uc3RyYWluIHRoZSBpbmRpY2F0b3IuXG4gIGNvbnN0IHJhd05kdmlEYXRlID0gKGZpbHRlcnMubmR2aURhdGUgPz8gJycpLnRvU3RyaW5nKCkudHJpbSgpO1xuICBjb25zdCBuZHZpTG9ja2VkID0gQm9vbGVhbigoZmlsdGVycyBhcyBhbnkpLm5kdmlEYXRlTG9ja2VkKTtcbiAgY29uc3QgaGFzTWFudWFsTmR2aU9yVmhTZWxlY3Rpb24gPVxuICAgIG5kdmlMb2NrZWQgfHwgISFmaWx0ZXJzLnZoIHx8ICEhZmlsdGVycy5iYXJDYXRlZ29yeVZhbHVlO1xuXG4gIGxldCBuZXh0TmR2aURhdGU6IHN0cmluZyB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgbGV0IG5leHROZHZpU3RhdHVzRmllbGQ6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuXG4gIGlmIChoYXNNYW51YWxOZHZpT3JWaFNlbGVjdGlvbiAmJiByYXdOZHZpRGF0ZSkge1xuICAgIG5leHROZHZpRGF0ZSA9IHJhd05kdmlEYXRlO1xuICAgIGNvbnN0IGNmZzogYW55ID0gdGhpcy5wcm9wcy5jb25maWcgfHwge307XG4gICAgY29uc3QgcHJlZml4ID1cbiAgICAgIChjZmcucG9seWdvblN0YXR1c1ByZWZpeCB8fCAnc3RhdHVzXycpLnRvU3RyaW5nKCkudHJpbSgpIHx8ICdzdGF0dXNfJztcbiAgICBjb25zdCBzdWZmaXggPSBuZXh0TmR2aURhdGUucmVwbGFjZSgvLS9nLCAnXycpO1xuICAgIG5leHROZHZpU3RhdHVzRmllbGQgPSBgJHtwcmVmaXh9JHtzdWZmaXh9YDtcbiAgfVxuXG4gIGNvbnN0IGNoYW5nZWQgPVxuICAgIG5leHRZaWwgIT09IHRoaXMuc3RhdGUuc2VsZWN0ZWRZaWwgfHxcbiAgICBuZXh0VmlsICE9PSB0aGlzLnN0YXRlLnNlbGVjdGVkVmlsb3lhdCB8fFxuICAgIG5leHRUdW0gIT09IHRoaXMuc3RhdGUuc2VsZWN0ZWRUdW1hbiB8fFxuICAgIG5leHRUdXJpICE9PSB0aGlzLnN0YXRlLnNlbGVjdGVkWWVyVG9pZmFzIHx8XG4gICAgbmV4dFZoICE9PSB0aGlzLnN0YXRlLnNlbGVjdGVkVmVnZXRhdGlvblN0YXR1cyB8fFxuICAgIG5leHRCYXJGaWVsZCAhPT0gdGhpcy5zdGF0ZS5iYXJDYXRlZ29yeUZpZWxkIHx8XG4gICAgbmV4dEJhclZhbHVlICE9PSB0aGlzLnN0YXRlLmJhckNhdGVnb3J5VmFsdWUgfHxcbiAgICBuZXh0TmR2aURhdGUgIT09IHRoaXMuc3RhdGUuc2VsZWN0ZWROZHZpRGF0ZSB8fFxuICAgIG5leHROZHZpU3RhdHVzRmllbGQgIT09IHRoaXMuc3RhdGUubmR2aVN0YXR1c0ZpZWxkO1xuXG4gIGlmICghY2hhbmdlZCkgcmV0dXJuO1xuXG4gIHRoaXMuc2V0U3RhdGUoXG4gICAge1xuICAgICAgc2VsZWN0ZWRZaWw6IG5leHRZaWwsXG4gICAgICBzZWxlY3RlZFZpbG95YXQ6IG5leHRWaWwsXG4gICAgICBzZWxlY3RlZFR1bWFuOiBuZXh0VHVtLFxuICAgICAgc2VsZWN0ZWRZZXJUb2lmYXM6IG5leHRUdXJpLFxuICAgICAgc2VsZWN0ZWRWZWdldGF0aW9uU3RhdHVzOiBuZXh0VmgsXG4gICAgICBiYXJDYXRlZ29yeUZpZWxkOiBuZXh0QmFyRmllbGQsXG4gICAgICBiYXJDYXRlZ29yeVZhbHVlOiBuZXh0QmFyVmFsdWUsXG4gICAgICBzZWxlY3RlZE5kdmlEYXRlOiBuZXh0TmR2aURhdGUsXG4gICAgICBuZHZpU3RhdHVzRmllbGQ6IG5leHROZHZpU3RhdHVzRmllbGQsXG4gICAgICAgIC8vIFJvdXRlIHRvIHRoZSBmZWF0dXJlIGxheWVyIHRoYXQgY29udGFpbnMgdGhlIHNlbGVjdGVkIHZpbG95YXRcbiAgICAgICAgZmVhdHVyZUxheWVyOiBuZXh0VmlsID8gdGhpcy5nZXRGZWF0dXJlTGF5ZXJGb3JWaWxveWF0KG5leHRWaWwpIDogdGhpcy5zdGF0ZS5mZWF0dXJlTGF5ZXIsXG5cbiAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICBsYXN0RmlsdGVyRXZlbnRUaW1lc3RhbXA6IERhdGUubm93KCksXG4gICAgICBpc0hhbmRsaW5nRXh0ZXJuYWxFdmVudDogdHJ1ZVxuICAgIH0sXG4gICAgKCkgPT4ge1xuICAgICAgdGhpcy5yZWZyZXNoRGF0YSgpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLl9pc01vdW50ZWQpIHRoaXMuc2V0U3RhdGUoeyBpc0hhbmRsaW5nRXh0ZXJuYWxFdmVudDogZmFsc2UgfSk7XG4gICAgICB9LCAxNTApO1xuICAgIH1cbiAgKTtcbn07XG5cbmNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICB0aGlzLl9pc01vdW50ZWQgPSBmYWxzZTtcblxuICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtYXN0ZXJGaWx0ZXJDaGFuZ2VkJywgdGhpcy5oYW5kbGVNYXN0ZXJGaWx0ZXJDaGFuZ2VkIGFzIEV2ZW50TGlzdGVuZXIpO1xuICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjYXRlZ29yeUZpbHRlckNoYW5nZWQnLCB0aGlzLmhhbmRsZUV4dGVybmFsQ2F0ZWdvcnkgYXMgRXZlbnRMaXN0ZW5lcik7XG5cbiAgQlVTLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2V0QWxsRmlsdGVycycsIHRoaXMuX29uUmVzZXQgYXMgRXZlbnRMaXN0ZW5lcik7XG4gIEJVUy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNldEFsbFdpZGdldHMnLCB0aGlzLl9vblJlc2V0IGFzIEV2ZW50TGlzdGVuZXIpO1xuXG4gIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMucmVhZEZpbHRlcnNGcm9tVXJsKTtcblxuICBpZiAodGhpcy50aHJvdHRsZWRGZXRjaERhdGE/LmNhbmNlbCkgdGhpcy50aHJvdHRsZWRGZXRjaERhdGEuY2FuY2VsKCk7XG4gIGlmICh0aGlzLmluaXRpYWxpemF0aW9uVGltZXIpIGNsZWFyVGltZW91dCh0aGlzLmluaXRpYWxpemF0aW9uVGltZXIpO1xuICBpZiAodGhpcy5yZWZyZXNoVGltZXIpIGNsZWFySW50ZXJ2YWwodGhpcy5yZWZyZXNoVGltZXIpO1xuXG4gIGlmICh0aGlzLl9hYm9ydENvbnRyb2xsZXIpIHtcbiAgICB0aGlzLl9hYm9ydENvbnRyb2xsZXIuYWJvcnQoKTtcbiAgICB0aGlzLl9hYm9ydENvbnRyb2xsZXIgPSBudWxsO1xuICB9XG59XG5cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzOiBBbGxXaWRnZXRQcm9wczxhbnk+LCBwcmV2U3RhdGU6IFZlZ2V0YXRpb25TdGF0c1dpZGdldFN0YXRlKSB7XG4gICAgY29uc3QgeyBjb25uZWN0aW9uU3RhdHVzLCBtYXBDb25uZWN0aW9uQXR0ZW1wdHMgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgeyB1c2VNYXBXaWRnZXRJZHMsIGNvbmZpZyB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmIChwcmV2UHJvcHMuY29uZmlnICE9PSBjb25maWcpIHtcbiAgICAgIGlmIChwcmV2UHJvcHMuY29uZmlnPy51c2VBcGlEYXRhU291cmNlICE9PSBjb25maWc/LnVzZUFwaURhdGFTb3VyY2UpIHtcbiAgICAgICAgaWYgKGNvbmZpZz8udXNlQXBpRGF0YVNvdXJjZSkge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb25uZWN0aW9uU3RhdHVzOiAnY29ubmVjdGVkJyB9LCAoKSA9PiB0aGlzLmZldGNoQXBpRGF0YSgpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgY29ubmVjdGlvblN0YXR1czogJ2Nvbm5lY3RpbmcnIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLnNldHVwQXV0b1JlZnJlc2goKTtcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICAhY29uZmlnPy51c2VBcGlEYXRhU291cmNlICYmXG4gICAgICBjb25uZWN0aW9uU3RhdHVzID09PSAnY29ubmVjdGluZycgJiZcbiAgICAgIHVzZU1hcFdpZGdldElkcyAmJlxuICAgICAgdXNlTWFwV2lkZ2V0SWRzLmxlbmd0aCA+IDAgJiZcbiAgICAgICF0aGlzLnN0YXRlLmFjdGl2ZU1hcFZpZXcgJiZcbiAgICAgIG1hcENvbm5lY3Rpb25BdHRlbXB0cyAhPT0gcHJldlN0YXRlLm1hcENvbm5lY3Rpb25BdHRlbXB0c1xuICAgICkge1xuICAgICAgaWYgKG1hcENvbm5lY3Rpb25BdHRlbXB0cyA8IHRoaXMuTUFYX0NPTk5FQ1RJT05fQVRURU1QVFMpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coYFtWZWdTdGF0c10gUmV0cnkgYXR0ZW1wdCAke21hcENvbm5lY3Rpb25BdHRlbXB0cyArIDF9IG9mICR7dGhpcy5NQVhfQ09OTkVDVElPTl9BVFRFTVBUU31gKTtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKChwcykgPT4gKHsgbWFwQ29ubmVjdGlvbkF0dGVtcHRzOiBwcy5tYXBDb25uZWN0aW9uQXR0ZW1wdHMgKyAxIH0pKTtcbiAgICAgICAgfSwgMjAwMCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgY29ubmVjdGlvblN0YXR1czogJ2ZhaWxlZCcgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PVxuICAvLyBFeHRlcm5hbCBldmVudCBoYW5kbGVyc1xuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgcHJpdmF0ZSBoYW5kbGVFeHRlcm5hbENhdGVnb3J5ID0gYXN5bmMgKGV2ZW50OiBDdXN0b21FdmVudCkgPT4ge1xuICAgIGlmICghdGhpcy5faXNNb3VudGVkKSByZXR1cm47XG4gICAgY29uc3QgZCA9IGV2ZW50Py5kZXRhaWwgfHwge307XG4gICAgaWYgKGQuc291cmNlID09PSAnVmVnZXRhdGlvblN0YXRzV2lkZ2V0JykgcmV0dXJuO1xuXG4gICAgY29uc3QgbmV4dFR1cmkgPSB0aGlzLm5vcm1hbGl6ZUFwb3MoZC50dXJpIHx8IGQudHVyIHx8IGQuY2F0ZWdvcnkgfHwgZC55ZXJUb2lmYXMgfHwgJycpO1xuICAgIGNvbnN0IG5leHRZaWwgPSAoZC55aWwgPz8gdGhpcy5zdGF0ZS5zZWxlY3RlZFlpbCA/PyAnJykudG9TdHJpbmcoKTtcbiAgICBjb25zdCBuZXh0VmlsID0gdGhpcy5ub3JtYWxpemVBcG9zKGQudmlsb3lhdCA/PyB0aGlzLnN0YXRlLnNlbGVjdGVkVmlsb3lhdCA/PyAnJyk7XG4gICAgY29uc3QgbmV4dFR1bSA9IHRoaXMubm9ybWFsaXplQXBvcyhkLnR1bWFuID8/IHRoaXMuc3RhdGUuc2VsZWN0ZWRUdW1hbiA/PyAnJyk7XG5cbiAgICB0aGlzLnNldFN0YXRlKFxuICAgICAge1xuICAgICAgICBzZWxlY3RlZFlpbDogbmV4dFlpbCxcbiAgICAgICAgc2VsZWN0ZWRWaWxveWF0OiBuZXh0VmlsLFxuICAgICAgICBzZWxlY3RlZFR1bWFuOiBuZXh0VHVtLFxuICAgICAgICBzZWxlY3RlZFllclRvaWZhczogbmV4dFR1cmksXG4gICAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICAgIGxhc3RGaWx0ZXJFdmVudFRpbWVzdGFtcDogRGF0ZS5ub3coKSxcbiAgICAgICAgaXNIYW5kbGluZ0V4dGVybmFsRXZlbnQ6IHRydWVcbiAgICAgIH0sXG4gICAgICAoKSA9PiB7XG4gICAgICAgIHRoaXMucmVmcmVzaERhdGEoKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLl9pc01vdW50ZWQgJiYgdGhpcy5zZXRTdGF0ZSh7IGlzSGFuZGxpbmdFeHRlcm5hbEV2ZW50OiBmYWxzZSB9KSwgMjAwKTtcbiAgICAgIH1cbiAgICApO1xuICB9O1xuXG4gIGhhbmRsZUNvbnN0cnVjdGlvblllYXJDaGFuZ2VkID0gKGV2ZW50OiBhbnkpID0+IHtcbiAgICBpZiAodGhpcy5faXNSZXNldHRpbmcpIHJldHVybjtcbiAgICBjb25zdCB7IGRldGFpbCB9ID0gZXZlbnQgfHwge307XG4gICAgaWYgKGRldGFpbD8uc291cmNlID09PSAnVmVnZXRhdGlvblN0YXRzV2lkZ2V0JykgcmV0dXJuO1xuXG4gICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0ZWRZaWw6IGRldGFpbD8ueWVhciA/IGRldGFpbC55ZWFyLnRvU3RyaW5nKCkgOiAnJyxcbiAgICAgICAgbG9hZGluZzogdHJ1ZSxcbiAgICAgICAgbGFzdEZpbHRlckV2ZW50VGltZXN0YW1wOiBEYXRlLm5vdygpLFxuICAgICAgICBpc0hhbmRsaW5nRXh0ZXJuYWxFdmVudDogdHJ1ZVxuICAgICAgfSxcbiAgICAgICgpID0+IHtcbiAgICAgICAgdGhpcy5yZWZyZXNoRGF0YSgpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuX2lzTW91bnRlZCAmJiB0aGlzLnNldFN0YXRlKHsgaXNIYW5kbGluZ0V4dGVybmFsRXZlbnQ6IGZhbHNlIH0pLCAyMDApO1xuICAgICAgfVxuICAgICk7XG4gIH07XG5cbiAgaGFuZGxlUmVnaW9uQ2hhbmdlID0gKGV2ZW50OiBhbnkpOiB2b2lkID0+IHtcbiAgICBpZiAodGhpcy5faXNSZXNldHRpbmcpIHJldHVybjtcbiAgICBpZiAoIWV2ZW50Py5kZXRhaWwpIHJldHVybjtcblxuICAgIGNvbnN0IHsgdmlsb3lhdCwgdHVtYW4sIHNvdXJjZSB9ID0gZXZlbnQuZGV0YWlsO1xuICAgIGlmIChzb3VyY2UgPT09ICdWZWdldGF0aW9uU3RhdHNXaWRnZXQnKSByZXR1cm47XG5cbiAgICB0aGlzLnNldFN0YXRlKFxuICAgICAge1xuICAgICAgICBzZWxlY3RlZFZpbG95YXQ6IHRoaXMubm9ybWFsaXplQXBvcyh2aWxveWF0IHx8ICcnKSxcbiAgICAgICAgc2VsZWN0ZWRUdW1hbjogdGhpcy5ub3JtYWxpemVBcG9zKHR1bWFuIHx8ICcnKSxcbiAgICAgICAgbG9hZGluZzogdHJ1ZSxcbiAgICAgICAgbGFzdEZpbHRlckV2ZW50VGltZXN0YW1wOiBEYXRlLm5vdygpLFxuICAgICAgICBpc0hhbmRsaW5nRXh0ZXJuYWxFdmVudDogdHJ1ZVxuICAgICAgfSxcbiAgICAgICgpID0+IHtcbiAgICAgICAgdGhpcy5yZWZyZXNoRGF0YSgpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuX2lzTW91bnRlZCAmJiB0aGlzLnNldFN0YXRlKHsgaXNIYW5kbGluZ0V4dGVybmFsRXZlbnQ6IGZhbHNlIH0pLCAyMDApO1xuICAgICAgfVxuICAgICk7XG4gIH07XG5cbiAgaGFuZGxlWWlsQ2hhbmdlID0gKGV2ZW50OiBhbnkpOiB2b2lkID0+IHtcbiAgICBpZiAodGhpcy5faXNSZXNldHRpbmcpIHJldHVybjtcbiAgICBpZiAoIWV2ZW50Py5kZXRhaWwpIHJldHVybjtcblxuICAgIGNvbnN0IHsgeWlsLCBzb3VyY2UgfSA9IGV2ZW50LmRldGFpbDtcbiAgICBpZiAoc291cmNlID09PSAnVmVnZXRhdGlvblN0YXRzV2lkZ2V0JykgcmV0dXJuO1xuXG4gICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0ZWRZaWw6IHlpbCA/IHlpbC50b1N0cmluZygpIDogJycsXG4gICAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICAgIGxhc3RGaWx0ZXJFdmVudFRpbWVzdGFtcDogRGF0ZS5ub3coKSxcbiAgICAgICAgaXNIYW5kbGluZ0V4dGVybmFsRXZlbnQ6IHRydWVcbiAgICAgIH0sXG4gICAgICAoKSA9PiB7XG4gICAgICAgIHRoaXMucmVmcmVzaERhdGEoKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLl9pc01vdW50ZWQgJiYgdGhpcy5zZXRTdGF0ZSh7IGlzSGFuZGxpbmdFeHRlcm5hbEV2ZW50OiBmYWxzZSB9KSwgMjAwKTtcbiAgICAgIH1cbiAgICApO1xuICB9O1xuXG4gIGhhbmRsZVdhdGVyU3VwcGx5RmlsdGVyQ2hhbmdlID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4ge1xuICAgIGlmICh0aGlzLl9pc1Jlc2V0dGluZykgcmV0dXJuO1xuXG4gICAgY29uc3QgZCA9IGV2ZW50Py5kZXRhaWwgfHwge307XG4gICAgaWYgKGQuc291cmNlID09PSAnVmVnZXRhdGlvblN0YXRzV2lkZ2V0JykgcmV0dXJuO1xuXG4gICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcbiAgICBpZiAobm93IC0gdGhpcy5zdGF0ZS5sYXN0RmlsdGVyRXZlbnRUaW1lc3RhbXAgPCAyMDApIHJldHVybjtcblxuICAgIC8vIOKchSBDSEFOR0VEOiBzdXBwb3J0IHR1cmkgKyBvbGQgdHVyXG4gICAgY29uc3QgdHVyaSA9IGQudHVyaSB8fCBkLnR1ciB8fCBkLnllclRvaWZhcyB8fCAnJztcblxuICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICB7XG4gICAgICAgIHNlbGVjdGVkVmlsb3lhdDogdGhpcy5ub3JtYWxpemVBcG9zKGQubWFzc2l2Tm9tIHx8IGQudmlsb3lhdCB8fCAnJyksXG4gICAgICAgIHNlbGVjdGVkVHVtYW46IHRoaXMubm9ybWFsaXplQXBvcyhkLnR1bWFuTm9taSB8fCBkLnR1bWFuIHx8ICcnKSxcbiAgICAgICAgc2VsZWN0ZWRZaWw6IGQueWlsIHx8ICcnLFxuICAgICAgICBzZWxlY3RlZFllclRvaWZhczogdGhpcy5ub3JtYWxpemVBcG9zKHR1cmkpLFxuICAgICAgICBsb2FkaW5nOiB0cnVlLFxuICAgICAgICBsYXN0RmlsdGVyRXZlbnRUaW1lc3RhbXA6IG5vdyxcbiAgICAgICAgaXNIYW5kbGluZ0V4dGVybmFsRXZlbnQ6IHRydWVcbiAgICAgIH0sXG4gICAgICAoKSA9PiB7XG4gICAgICAgIHRoaXMucmVmcmVzaERhdGEoKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLl9pc01vdW50ZWQgJiYgdGhpcy5zZXRTdGF0ZSh7IGlzSGFuZGxpbmdFeHRlcm5hbEV2ZW50OiBmYWxzZSB9KSwgMjAwKTtcbiAgICAgIH1cbiAgICApO1xuICB9O1xuXG4gIGhhbmRsZUNhdGVnb3J5U2VsZWN0aW9uID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4ge1xuICAgIGlmICh0aGlzLl9pc1Jlc2V0dGluZykgcmV0dXJuO1xuXG4gICAgY29uc3QgZCA9IGV2ZW50Py5kZXRhaWwgfHwge307XG4gICAgaWYgKGQuc291cmNlID09PSAnVmVnZXRhdGlvblN0YXRzV2lkZ2V0JykgcmV0dXJuO1xuXG4gICAgLy8g4pyFIENIQU5HRUQ6IHN1cHBvcnQgdHVyaSArIG9sZCB0dXJcbiAgICBjb25zdCB0dXJpID0gZC50dXJpIHx8IGQudHVyIHx8IGQuY2F0ZWdvcnkgfHwgJyc7XG5cbiAgICB0aGlzLnNldFN0YXRlKFxuICAgICAge1xuICAgICAgICBzZWxlY3RlZFllclRvaWZhczogdGhpcy5ub3JtYWxpemVBcG9zKHR1cmkpLFxuICAgICAgICBzZWxlY3RlZFlpbDogZC55aWwgfHwgdGhpcy5zdGF0ZS5zZWxlY3RlZFlpbCxcbiAgICAgICAgc2VsZWN0ZWRWaWxveWF0OiB0aGlzLm5vcm1hbGl6ZUFwb3MoZC52aWxveWF0IHx8IHRoaXMuc3RhdGUuc2VsZWN0ZWRWaWxveWF0KSxcbiAgICAgICAgc2VsZWN0ZWRUdW1hbjogdGhpcy5ub3JtYWxpemVBcG9zKGQudHVtYW4gfHwgdGhpcy5zdGF0ZS5zZWxlY3RlZFR1bWFuKSxcbiAgICAgICAgbG9hZGluZzogdHJ1ZSxcbiAgICAgICAgbGFzdEZpbHRlckV2ZW50VGltZXN0YW1wOiBEYXRlLm5vdygpLFxuICAgICAgICBpc0hhbmRsaW5nRXh0ZXJuYWxFdmVudDogdHJ1ZVxuICAgICAgfSxcbiAgICAgICgpID0+IHtcbiAgICAgICAgdGhpcy5yZWZyZXNoRGF0YSgpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuX2lzTW91bnRlZCAmJiB0aGlzLnNldFN0YXRlKHsgaXNIYW5kbGluZ0V4dGVybmFsRXZlbnQ6IGZhbHNlIH0pLCAyMDApO1xuICAgICAgfVxuICAgICk7XG4gIH07XG5cbiAgaGFuZGxlS2FkYXN0ckZpbHRlcnNDaGFuZ2VkID0gKGV2ZW50OiBhbnkpID0+IHtcbiAgICBpZiAodGhpcy5faXNSZXNldHRpbmcpIHJldHVybjtcblxuICAgIGNvbnN0IGQgPSBldmVudD8uZGV0YWlsIHx8IHt9O1xuICAgIGlmIChkLnNvdXJjZSA9PT0gJ1ZlZ2V0YXRpb25TdGF0c1dpZGdldCcpIHJldHVybjtcblxuICAgIC8vIOKchSBDSEFOR0VEOiBzdXBwb3J0IHR1cmkgKyBvbGQgdHVyXG4gICAgY29uc3QgdHVyaSA9IGQudHVyaSB8fCBkLnR1ciB8fCAnJztcblxuICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICB7XG4gICAgICAgIHNlbGVjdGVkVmlsb3lhdDogdGhpcy5ub3JtYWxpemVBcG9zKGQudmlsb3lhdCB8fCAnJyksXG4gICAgICAgIHNlbGVjdGVkVHVtYW46IHRoaXMubm9ybWFsaXplQXBvcyhkLnR1bWFuIHx8ICcnKSxcbiAgICAgICAgc2VsZWN0ZWRZaWw6IGQueWlsIHx8ICcnLFxuICAgICAgICBzZWxlY3RlZFllclRvaWZhczogdGhpcy5ub3JtYWxpemVBcG9zKHR1cmkpLFxuICAgICAgICBsb2FkaW5nOiB0cnVlLFxuICAgICAgICBsYXN0RmlsdGVyRXZlbnRUaW1lc3RhbXA6IERhdGUubm93KCksXG4gICAgICAgIGlzSGFuZGxpbmdFeHRlcm5hbEV2ZW50OiB0cnVlXG4gICAgICB9LFxuICAgICAgKCkgPT4ge1xuICAgICAgICB0aGlzLnJlZnJlc2hEYXRhKCk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5faXNNb3VudGVkICYmIHRoaXMuc2V0U3RhdGUoeyBpc0hhbmRsaW5nRXh0ZXJuYWxFdmVudDogZmFsc2UgfSksIDIwMCk7XG4gICAgICB9XG4gICAgKTtcbiAgfTtcblxuICBoYW5kbGVLYWRhc3RyRmlsdGVyc1Jlc2V0ID0gKCkgPT4gdGhpcy5fb25SZXNldCgpO1xuXG4gIGhhbmRsZVZlZ2V0YXRpb25TdGF0dXNDaGFuZ2UgPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7XG4gICAgaWYgKHRoaXMuX2lzUmVzZXR0aW5nKSByZXR1cm47XG5cbiAgICBjb25zdCBkID0gZXZlbnQ/LmRldGFpbCB8fCB7fTtcbiAgICBpZiAoZC5zb3VyY2UgPT09ICdWZWdldGF0aW9uU3RhdHNXaWRnZXQnKSByZXR1cm47XG5cbiAgICB0aGlzLnNldFN0YXRlKFxuICAgICAge1xuICAgICAgICBzZWxlY3RlZFZlZ2V0YXRpb25TdGF0dXM6IGQuc3RhdHVzIHx8IGQudmggfHwgJycsXG4gICAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICAgIGxhc3RGaWx0ZXJFdmVudFRpbWVzdGFtcDogRGF0ZS5ub3coKSxcbiAgICAgICAgaXNIYW5kbGluZ0V4dGVybmFsRXZlbnQ6IHRydWVcbiAgICAgIH0sXG4gICAgICAoKSA9PiB7XG4gICAgICAgIHRoaXMucmVmcmVzaERhdGEoKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLl9pc01vdW50ZWQgJiYgdGhpcy5zZXRTdGF0ZSh7IGlzSGFuZGxpbmdFeHRlcm5hbEV2ZW50OiBmYWxzZSB9KSwgMjAwKTtcbiAgICAgIH1cbiAgICApO1xuICB9O1xuXG4gIGhhbmRsZUNyb3BUeXBlQ2hhbmdlID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4ge1xuICAgIGlmICh0aGlzLl9pc1Jlc2V0dGluZykgcmV0dXJuO1xuXG4gICAgY29uc3QgZCA9IGV2ZW50Py5kZXRhaWwgfHwge307XG4gICAgaWYgKGQuc291cmNlID09PSAnVmVnZXRhdGlvblN0YXRzV2lkZ2V0JykgcmV0dXJuO1xuXG4gICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0ZWRDcm9wVHlwZTogdGhpcy5ub3JtYWxpemVBcG9zKGQuY3JvcFR5cGUgfHwgZC5la2luX3R1cmkgfHwgJycpLFxuICAgICAgICBsb2FkaW5nOiB0cnVlLFxuICAgICAgICBsYXN0RmlsdGVyRXZlbnRUaW1lc3RhbXA6IERhdGUubm93KCksXG4gICAgICAgIGlzSGFuZGxpbmdFeHRlcm5hbEV2ZW50OiB0cnVlXG4gICAgICB9LFxuICAgICAgKCkgPT4ge1xuICAgICAgICB0aGlzLnJlZnJlc2hEYXRhKCk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5faXNNb3VudGVkICYmIHRoaXMuc2V0U3RhdGUoeyBpc0hhbmRsaW5nRXh0ZXJuYWxFdmVudDogZmFsc2UgfSksIDIwMCk7XG4gICAgICB9XG4gICAgKTtcbiAgfTtcblxuICByZWZyZXNoRGF0YSA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5wcm9wcy5jb25maWc/LnVzZUFwaURhdGFTb3VyY2UpIHtcbiAgICAgIGlmICghdGhpcy5zaG91bGRGZXRjaEZvclZpbG95YXQoKSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICBlcnJvcjogbnVsbCxcbiAgICAgICAgICB2ZWdldGF0aW9uQXJlYTogbnVsbCxcbiAgICAgICAgICB0b3RhbEFyZWE6IG51bGwsXG4gICAgICAgICAgZmVhdHVyZUNvdW50OiAwXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLmZldGNoQXBpRGF0YSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5zdGF0ZS5jb25uZWN0aW9uU3RhdHVzID09PSAnY29ubmVjdGVkJykge1xuICAgICAgICBpZiAoIXRoaXMuc2hvdWxkRmV0Y2hGb3JWaWxveWF0KCkpIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgZXJyb3I6IG51bGwsXG4gICAgICAgICAgICB2ZWdldGF0aW9uQXJlYTogbnVsbCxcbiAgICAgICAgICAgIHRvdGFsQXJlYTogbnVsbCxcbiAgICAgICAgICAgIGZlYXR1cmVDb3VudDogMFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRocm90dGxlZEZldGNoRGF0YSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IHRydWUgfSk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIHRoaXMuX2lzTW91bnRlZCAmJlxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5jb25uZWN0aW9uU3RhdHVzID09PSAnY29ubmVjdGVkJyAmJlxuICAgICAgICAgICAgdGhpcy5zaG91bGRGZXRjaEZvclZpbG95YXQoKVxuICAgICAgICAgIClcbiAgICAgICAgICAgIHRoaXMudGhyb3R0bGVkRmV0Y2hEYXRhKCk7XG4gICAgICAgIH0sIDEwMDApO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09XG4gIC8vIFVSTCBzeW5jXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT1cblxuIHJlYWRGaWx0ZXJzRnJvbVVybCgpOiB2b2lkIHtcbiAgdHJ5IHtcbiAgICBjb25zdCB1cmxQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xuXG4gICAgY29uc3QgeWlsID0gdXJsUGFyYW1zLmdldCgneWlsJykgfHwgJyc7XG4gICAgY29uc3Qgdmlsb3lhdCA9IHVybFBhcmFtcy5nZXQoJ3ZpbG95YXQnKSB8fCAnJztcbiAgICBjb25zdCB0dW1hbiA9IHVybFBhcmFtcy5nZXQoJ3R1bWFuJykgfHwgJyc7XG4gICAgY29uc3QgdHVyaSA9IHVybFBhcmFtcy5nZXQoJ3R1cmknKSB8fCB1cmxQYXJhbXMuZ2V0KCd0dXInKSB8fCAnJztcbiAgICBjb25zdCB2aCA9IHVybFBhcmFtcy5nZXQoJ3ZoJykgfHwgJyc7XG4gICAgY29uc3QgZWtpbiA9IHVybFBhcmFtcy5nZXQoJ2VraW5fdHVyaScpIHx8ICcnO1xuXG4gICAgY29uc3QgbmV4dFZpbCA9IHRoaXMubm9ybWFsaXplQXBvcyh2aWxveWF0KTtcbiAgICBjb25zdCBuZXh0VHVtID0gdGhpcy5ub3JtYWxpemVBcG9zKHR1bWFuKTtcbiAgICBjb25zdCBuZXh0VHVyaSA9IHRoaXMubm9ybWFsaXplQXBvcyh0dXJpKTtcblxuICAgIGNvbnN0IGNoYW5nZWQgPVxuICAgICAgeWlsICE9PSB0aGlzLnN0YXRlLnNlbGVjdGVkWWlsIHx8XG4gICAgICBuZXh0VmlsICE9PSB0aGlzLnN0YXRlLnNlbGVjdGVkVmlsb3lhdCB8fFxuICAgICAgbmV4dFR1bSAhPT0gdGhpcy5zdGF0ZS5zZWxlY3RlZFR1bWFuIHx8XG4gICAgICBuZXh0VHVyaSAhPT0gdGhpcy5zdGF0ZS5zZWxlY3RlZFllclRvaWZhcyB8fFxuICAgICAgdGhpcy5ub3JtYWxpemVBcG9zKHZoKSAhPT0gdGhpcy5zdGF0ZS5zZWxlY3RlZFZlZ2V0YXRpb25TdGF0dXMgfHxcbiAgICAgIHRoaXMubm9ybWFsaXplQXBvcyhla2luKSAhPT0gdGhpcy5zdGF0ZS5zZWxlY3RlZENyb3BUeXBlO1xuXG4gICAgaWYgKCFjaGFuZ2VkKSByZXR1cm47XG5cbiAgICB0aGlzLnNldFN0YXRlKFxuICAgICAge1xuICAgICAgICBzZWxlY3RlZFlpbDogeWlsLFxuICAgICAgICBzZWxlY3RlZFZpbG95YXQ6IG5leHRWaWwsXG4gICAgICAgIHNlbGVjdGVkVHVtYW46IG5leHRUdW0sXG4gICAgICAgIHNlbGVjdGVkWWVyVG9pZmFzOiBuZXh0VHVyaSxcbiAgICAgICAgc2VsZWN0ZWRWZWdldGF0aW9uU3RhdHVzOiB0aGlzLm5vcm1hbGl6ZUFwb3ModmgpLFxuICAgICAgICBzZWxlY3RlZENyb3BUeXBlOiB0aGlzLm5vcm1hbGl6ZUFwb3MoZWtpbilcbiAgICAgIH0sXG4gICAgICAoKSA9PiB7XG4gICAgICAgIC8vIGlmIHNvbWV0aGluZyBpcyBhbHJlYWR5IGNvbm5lY3RlZCwgcmVmcmVzaCBpbW1lZGlhdGVseVxuICAgICAgICBpZiAodGhpcy5wcm9wcy5jb25maWc/LnVzZUFwaURhdGFTb3VyY2UpIHRoaXMuZmV0Y2hBcGlEYXRhKCk7XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuc3RhdGUuY29ubmVjdGlvblN0YXR1cyA9PT0gJ2Nvbm5lY3RlZCcpIHRoaXMudGhyb3R0bGVkRmV0Y2hEYXRhKCk7XG4gICAgICB9XG4gICAgKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdbVmVnU3RhdHNdIEVycm9yIHJlYWRpbmcgVVJMIHBhcmFtZXRlcnM6JywgZXJyb3IpO1xuICB9XG59XG5cblxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09XG4gIC8vIE1hcCArIERhdGFTb3VyY2VcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIGVuc3VyZUluaXRpYWxpemF0aW9uID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgZGF0YVNvdXJjZSwgY29ubmVjdGlvblN0YXR1cyB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB7IGNvbmZpZyB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmIChjb25maWc/LnVzZUFwaURhdGFTb3VyY2UpIHtcbiAgICAgIGlmICghdGhpcy5zaG91bGRGZXRjaEZvclZpbG95YXQoKSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICBlcnJvcjogbnVsbCxcbiAgICAgICAgICB2ZWdldGF0aW9uQXJlYTogbnVsbCxcbiAgICAgICAgICB0b3RhbEFyZWE6IG51bGwsXG4gICAgICAgICAgZmVhdHVyZUNvdW50OiAwXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLmZldGNoQXBpRGF0YSgpO1xuICAgIH0gZWxzZSBpZiAoZGF0YVNvdXJjZSAmJiBjb25uZWN0aW9uU3RhdHVzID09PSAnY29ubmVjdGVkJykge1xuICAgICAgaWYgKCF0aGlzLnNob3VsZEZldGNoRm9yVmlsb3lhdCgpKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgIGVycm9yOiBudWxsLFxuICAgICAgICAgIHZlZ2V0YXRpb25BcmVhOiBudWxsLFxuICAgICAgICAgIHRvdGFsQXJlYTogbnVsbCxcbiAgICAgICAgICBmZWF0dXJlQ291bnQ6IDBcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuZmV0Y2hEYXRhKCk7XG4gICAgfSBlbHNlIGlmIChjb25uZWN0aW9uU3RhdHVzID09PSAnZmFpbGVkJyB8fCBjb25uZWN0aW9uU3RhdHVzID09PSAnY29ubmVjdGluZycpIHtcbiAgICAgIHRoaXMucmV0cnlNYXBDb25uZWN0aW9uKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHJ5TWFwQ29ubmVjdGlvbigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGNvbm5lY3Rpb25TdGF0dXM6ICdjb25uZWN0aW5nJyxcbiAgICAgIG1hcENvbm5lY3Rpb25BdHRlbXB0czogMCxcbiAgICAgIGVycm9yOiBudWxsXG4gICAgfSk7XG4gIH1cblxuICBvbkFjdGl2ZVZpZXdDaGFuZ2UgPSAoamltdU1hcFZpZXc6IEppbXVNYXBWaWV3KSA9PiB7XG4gICAgaWYgKCFqaW11TWFwVmlldykge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGFjdGl2ZU1hcFZpZXc6IG51bGwsIGZlYXR1cmVMYXllcjogbnVsbCB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnNldFN0YXRlKHsgYWN0aXZlTWFwVmlldzogamltdU1hcFZpZXcgfSwgKCkgPT4ge1xuICAgICAgaWYgKGppbXVNYXBWaWV3LnZpZXcgJiYgamltdU1hcFZpZXcudmlldy5yZWFkeSkge1xuICAgICAgICB0aGlzLmluaXRpYWxpemVNYXBDb25uZWN0aW9uKGppbXVNYXBWaWV3KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHJlYWR5V2F0Y2ggPSBqaW11TWFwVmlldy52aWV3LndhdGNoKCdyZWFkeScsIChpc1JlYWR5KSA9PiB7XG4gICAgICAgICAgaWYgKGlzUmVhZHkpIHtcbiAgICAgICAgICAgIHJlYWR5V2F0Y2gucmVtb3ZlKCk7XG4gICAgICAgICAgICB0aGlzLmluaXRpYWxpemVNYXBDb25uZWN0aW9uKGppbXVNYXBWaWV3KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIHByaXZhdGUgbWFrZVZpbG95YXRLZXlGb3JSb3V0aW5nID0gKHZpbG95YXQ6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgcmV0dXJuIHRoaXMubm9ybWFsaXplQXBvcyh2aWxveWF0IHx8ICcnKVxuICAgICAgLnRyaW0oKVxuICAgICAgLnRvTG93ZXJDYXNlKCk7XG4gIH07XG5cbiAgcHJpdmF0ZSBnZXRGZWF0dXJlTGF5ZXJGb3JWaWxveWF0ID0gKFxuICAgIHZpbG95YXQ6IHN0cmluZyxcbiAgICBsYXllcnNPdmVycmlkZT86IF9fZXNyaS5GZWF0dXJlTGF5ZXJbXVxuICApOiBfX2VzcmkuRmVhdHVyZUxheWVyIHwgdW5kZWZpbmVkID0+IHtcbiAgICBjb25zdCBrZXkgPSB0aGlzLm1ha2VWaWxveWF0S2V5Rm9yUm91dGluZyh2aWxveWF0KTtcbiAgICBjb25zdCBpZHggPSB0aGlzLl92aWxveWF0S2V5VG9MYXllckluZGV4W2tleV07XG4gICAgY29uc3QgbGF5ZXJzID0gbGF5ZXJzT3ZlcnJpZGUgPz8gdGhpcy5zdGF0ZS5mZWF0dXJlTGF5ZXJzID8/IFtdO1xuICAgIGlmICh0eXBlb2YgaWR4ID09PSAnbnVtYmVyJyAmJiBsYXllcnNbaWR4XSkgcmV0dXJuIGxheWVyc1tpZHhdO1xuICAgIHJldHVybiB0aGlzLnN0YXRlLmZlYXR1cmVMYXllciB8fCBsYXllcnNbMF07XG4gIH07XG5cbiAgcHJpdmF0ZSBidWlsZFZpbG95YXRMYXllckluZGV4ID0gYXN5bmMgKGxheWVyczogX19lc3JpLkZlYXR1cmVMYXllcltdKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgdGhpcy5fdmlsb3lhdEtleVRvTGF5ZXJJbmRleCA9IHt9O1xuXG4gICAgY29uc3QgdmlsRmllbGQgPSBGSUxURVJfRklFTERTLlZJTE9ZQVQ7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsYXllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGxheWVyID0gbGF5ZXJzW2ldO1xuICAgICAgaWYgKCFsYXllcikgY29udGludWU7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoIWxheWVyLmxvYWRlZCAmJiAobGF5ZXIgYXMgYW55KS5sb2FkKSBhd2FpdCBsYXllci5sb2FkKCk7XG5cbiAgICAgICAgY29uc3QgcSA9IGxheWVyLmNyZWF0ZVF1ZXJ5KCk7XG4gICAgICAgIChxIGFzIGFueSkud2hlcmUgPSAnMT0xJztcbiAgICAgICAgKHEgYXMgYW55KS5vdXRGaWVsZHMgPSBbdmlsRmllbGRdO1xuICAgICAgICAocSBhcyBhbnkpLnJldHVybkdlb21ldHJ5ID0gZmFsc2U7XG4gICAgICAgIChxIGFzIGFueSkucmV0dXJuRGlzdGluY3RWYWx1ZXMgPSB0cnVlO1xuICAgICAgICAocSBhcyBhbnkpLm51bSA9IDUwMDA7XG5cbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgbGF5ZXIucXVlcnlGZWF0dXJlcyhxKTtcbiAgICAgICAgY29uc3QgZmVhdHMgPSByZXM/LmZlYXR1cmVzID8/IFtdO1xuICAgICAgICBmb3IgKGNvbnN0IGYgb2YgZmVhdHMpIHtcbiAgICAgICAgICBjb25zdCB2ID0gKGYuYXR0cmlidXRlcyBhcyBhbnkpPy5bdmlsRmllbGRdO1xuICAgICAgICAgIGNvbnN0IGtleSA9IHRoaXMubWFrZVZpbG95YXRLZXlGb3JSb3V0aW5nKFN0cmluZyh2ID8/ICcnKSk7XG4gICAgICAgICAgaWYgKGtleSAmJiB0aGlzLl92aWxveWF0S2V5VG9MYXllckluZGV4W2tleV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5fdmlsb3lhdEtleVRvTGF5ZXJJbmRleFtrZXldID0gaTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdbQWdyaUluZGljYXRvcjNdIGJ1aWxkVmlsb3lhdExheWVySW5kZXggZmFpbGVkOicsIGksIGUpO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zb2xlLmxvZygnW0FncmlJbmRpY2F0b3IzXSBWaWxveWF0LT5sYXllciBpbmRleCBidWlsdDonLCB7XG4gICAgICBsYXllckNvdW50OiBsYXllcnMubGVuZ3RoLFxuICAgICAgdmlsb3lhdENvdW50OiBPYmplY3Qua2V5cyh0aGlzLl92aWxveWF0S2V5VG9MYXllckluZGV4KS5sZW5ndGhcbiAgICB9KTtcbiAgfTtcblxuICBpbml0aWFsaXplTWFwQ29ubmVjdGlvbiA9IGFzeW5jIChqaW11TWFwVmlldzogSmltdU1hcFZpZXcpID0+IHtcbiAgICBjb25zdCBtYXAgPSBqaW11TWFwVmlldz8udmlldz8ubWFwO1xuICAgIGlmICghbWFwKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgY29ubmVjdGlvblN0YXR1czogJ2ZhaWxlZCcsIGVycm9yOiAnTWFwIHZpZXcgaGFzIG5vIG1hcCcgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gVXNlIEppbXVMYXllclZpZXdzIHRvIGFsc28gY2F0Y2ggbmVzdGVkIGZlYXR1cmUgbGF5ZXJzLlxuICAgIGNvbnN0IGpsdkxpc3Q6IGFueVtdID1cbiAgICAgIChqaW11TWFwVmlldyBhcyBhbnkpPy5nZXRBbGxKaW11TGF5ZXJWaWV3cz8uKCkgPz8gW107XG5cbiAgICBjb25zdCBmcm9tTGF5ZXJWaWV3czogX19lc3JpLkZlYXR1cmVMYXllcltdID0gKGpsdkxpc3QgfHwgW10pXG4gICAgICAubWFwKChsdikgPT4gbHY/LmxheWVyKVxuICAgICAgLmZpbHRlcigobCkgPT4gbCAmJiAobCBhcyBhbnkpLnR5cGUgPT09ICdmZWF0dXJlJyk7XG5cbiAgICBjb25zdCBmcm9tTWFwVG9wTGV2ZWw6IF9fZXNyaS5GZWF0dXJlTGF5ZXJbXSA9IG1hcC5sYXllcnNcbiAgICAgIC50b0FycmF5KClcbiAgICAgIC5maWx0ZXIoKGwpID0+IChsIGFzIGFueSk/LnR5cGUgPT09ICdmZWF0dXJlJykgYXMgX19lc3JpLkZlYXR1cmVMYXllcltdO1xuXG4gICAgY29uc3QgYWxsTGF5ZXJzOiBfX2VzcmkuRmVhdHVyZUxheWVyW10gPSBbXTtcbiAgICBjb25zdCBzZWVuID0gbmV3IFNldDxzdHJpbmc+KCk7XG4gICAgZm9yIChjb25zdCBsIG9mIFsuLi5mcm9tTGF5ZXJWaWV3cywgLi4uZnJvbU1hcFRvcExldmVsXSkge1xuICAgICAgY29uc3Qga2V5ID0gU3RyaW5nKChsIGFzIGFueSk/LmlkIHx8IChsIGFzIGFueSk/LnVybCB8fCAnJyk7XG4gICAgICBpZiAoIWtleSkgY29udGludWU7XG4gICAgICBpZiAoc2Vlbi5oYXMoa2V5KSkgY29udGludWU7XG4gICAgICBzZWVuLmFkZChrZXkpO1xuICAgICAgYWxsTGF5ZXJzLnB1c2gobCk7XG4gICAgfVxuXG4gICAgY29uc3QgbGF5ZXJzID0gYWxsTGF5ZXJzO1xuICAgIGNvbnN0IGF0dHJpYnV0ZUZpZWxkID0gdGhpcy5wcm9wcy5jb25maWc/LmF0dHJpYnV0ZUZpZWxkIHx8IEZJTFRFUl9GSUVMRFMuVkVHX007XG5cbiAgICAvLyBQcmVmZXIgbGF5ZXJzIHRoYXQgY29udGFpbiB0aGUgYWdncmVnYXRpb24gZmllbGQgKGUuZy4gdmVnX20pIGFuZCB2aWxveWF0IGZvciByb3V0aW5nXG4gICAgY29uc3QgY2FuZGlkYXRlcyA9IGxheWVycy5maWx0ZXIoKGZsKSA9PiB7XG4gICAgICBjb25zdCBuYW1lcyA9IChmbC5maWVsZHMgfHwgW10pLm1hcCgoZikgPT4gZi5uYW1lLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgcmV0dXJuIG5hbWVzLmluY2x1ZGVzKGF0dHJpYnV0ZUZpZWxkLnRvTG93ZXJDYXNlKCkpICYmIG5hbWVzLmluY2x1ZGVzKEZJTFRFUl9GSUVMRFMuVklMT1lBVC50b0xvd2VyQ2FzZSgpKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGZlYXR1cmVMYXllcnMgPSBjYW5kaWRhdGVzLmxlbmd0aCA/IGNhbmRpZGF0ZXMgOiBsYXllcnM7XG5cbiAgICBpZiAoIWZlYXR1cmVMYXllcnMubGVuZ3RoKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgY29ubmVjdGlvblN0YXR1czogJ2ZhaWxlZCcsXG4gICAgICAgIGVycm9yOiAnTm8gc3VpdGFibGUgZmVhdHVyZSBsYXllcnMgZm91bmQgaW4gdGhlIG1hcC4nXG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBhd2FpdCB0aGlzLmJ1aWxkVmlsb3lhdExheWVySW5kZXgoZmVhdHVyZUxheWVycyk7XG5cbiAgICBjb25zdCByb3V0ZWQgPSB0aGlzLnN0YXRlLnNlbGVjdGVkVmlsb3lhdFxuICAgICAgPyB0aGlzLmdldEZlYXR1cmVMYXllckZvclZpbG95YXQodGhpcy5zdGF0ZS5zZWxlY3RlZFZpbG95YXQsIGZlYXR1cmVMYXllcnMpXG4gICAgICA6IGZlYXR1cmVMYXllcnNbMF07XG5cbiAgICB0aGlzLnNldFN0YXRlKFxuICAgICAge1xuICAgICAgICBmZWF0dXJlTGF5ZXJzLFxuICAgICAgICBmZWF0dXJlTGF5ZXI6IHJvdXRlZCxcbiAgICAgICAgY29ubmVjdGlvblN0YXR1czogJ2Nvbm5lY3RlZCcsXG4gICAgICAgIGVycm9yOiBudWxsXG4gICAgICB9LFxuICAgICAgKCkgPT4ge1xuICAgICAgICBpZiAoIXRoaXMuc3RhdGUuZGF0YVNvdXJjZSkgcmV0dXJuO1xuICAgICAgICBpZiAodGhpcy5zaG91bGRGZXRjaEZvclZpbG95YXQoKSkgdGhpcy5mZXRjaERhdGEoKTtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIGVycm9yOiBudWxsLFxuICAgICAgICAgICAgdmVnZXRhdGlvbkFyZWE6IG51bGwsXG4gICAgICAgICAgICB0b3RhbEFyZWE6IG51bGwsXG4gICAgICAgICAgICBmZWF0dXJlQ291bnQ6IDBcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICk7XG4gIH07XG5cbiAgb25EYXRhU291cmNlQ3JlYXRlZCA9IChkYXRhU291cmNlOiBEYXRhU291cmNlKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgIHtcbiAgICAgICAgZGF0YVNvdXJjZTogZGF0YVNvdXJjZSBhcyBRdWVyaWFibGVEYXRhU291cmNlLFxuICAgICAgICBlcnJvcjogbnVsbFxuICAgICAgfSxcbiAgICAgICgpID0+IHtcbiAgICAgICAgaWYgKCF0aGlzLnByb3BzLmNvbmZpZz8udXNlQXBpRGF0YVNvdXJjZSAmJiB0aGlzLnN0YXRlLmNvbm5lY3Rpb25TdGF0dXMgPT09ICdjb25uZWN0ZWQnKSB7XG4gICAgICAgICAgaWYgKHRoaXMuc2hvdWxkRmV0Y2hGb3JWaWxveWF0KCkpIHRoaXMuZmV0Y2hEYXRhKCk7XG4gICAgICAgICAgZWxzZVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICBlcnJvcjogbnVsbCxcbiAgICAgICAgICAgICAgdmVnZXRhdGlvbkFyZWE6IG51bGwsXG4gICAgICAgICAgICAgIHRvdGFsQXJlYTogbnVsbCxcbiAgICAgICAgICAgICAgZmVhdHVyZUNvdW50OiAwXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICk7XG4gIH07XG5cbiAgb25EYXRhU291cmNlSW5mb0NoYW5nZSA9IChpbmZvOiBhbnkpID0+IHtcbiAgICBpZiAodGhpcy5wcm9wcy5jb25maWc/LnVzZUFwaURhdGFTb3VyY2UpIHJldHVybjtcbiAgICBpZiAodGhpcy5zdGF0ZS5jb25uZWN0aW9uU3RhdHVzICE9PSAnY29ubmVjdGVkJykgcmV0dXJuO1xuXG4gICAgaWYgKGluZm8gJiYgaW5mby5zdGF0dXMgPT09IERhdGFTb3VyY2VTdGF0dXMuTG9hZGVkKSB7XG4gICAgICBjb25zdCBpc1NlbGVjdGlvbkNoYW5nZSA9IGluZm8uc2VsZWN0SWRzICYmIGluZm8uc2VsZWN0SWRzLmxlbmd0aCA+IDA7XG4gICAgICBpZiAoIWlzU2VsZWN0aW9uQ2hhbmdlKSB0aGlzLnRocm90dGxlZEZldGNoRGF0YSgpO1xuICAgIH1cbiAgfTtcblxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09XG4gIC8vIFdIRVJFIGJ1aWxkZXIgKEZlYXR1cmVMYXllcilcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIGJ1aWxkV2hlcmVDbGF1c2UoKTogc3RyaW5nIHtcbiAgICBjb25zdCB7XG4gICAgICBzZWxlY3RlZFlpbCxcbiAgICAgIHNlbGVjdGVkVmlsb3lhdCxcbiAgICAgIHNlbGVjdGVkVHVtYW4sXG4gICAgICBzZWxlY3RlZFZlZ2V0YXRpb25TdGF0dXMsXG4gICAgICBzZWxlY3RlZENyb3BUeXBlLFxuICAgICAgc2VsZWN0ZWRZZXJUb2lmYXNcbiAgICB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIGNvbnN0IGNsYXVzZXM6IHN0cmluZ1tdID0gW107XG5cbiAgICAvLyBXZSBvbmx5IHdhbnQgTkRWSS9kYXRlICsgVkgvYmFyIGZpbHRlcnMgdG8ga2ljayBpblxuICAgIC8vIGFmdGVyIHRoZXJlIGlzIGF0IGxlYXN0IHNvbWUgZ2VvZ3JhcGhpYyBvciBjcm9wIHNjb3BlLFxuICAgIC8vIG90aGVyd2lzZSB3aXRoIGp1c3QgYSB5ZWFyIHNlbGVjdGVkIHdlJ2QgYmUgZmlsdGVyaW5nXG4gICAgLy8gdGhlIGVudGlyZSBjb3VudHJ5IGJ5IHRoZSBsYXRlc3QgTkRWSSBkYXRlLlxuICAgIGNvbnN0IGhhc0dlb09yQ3JvcCA9XG4gICAgICAhIXNlbGVjdGVkVmlsb3lhdCB8fCAhIXNlbGVjdGVkVHVtYW4gfHwgISFzZWxlY3RlZFllclRvaWZhcztcblxuICAgIC8vIFllYXIgKHJvYnVzdClcbiAgICBpZiAoc2VsZWN0ZWRZaWwpIHtcbiAgICAgIGNvbnN0IHlEaWdpdHMgPVxuICAgICAgICBTdHJpbmcoc2VsZWN0ZWRZaWwpLm1hdGNoKC9cXGIoMTh8MTl8MjApXFxkezJ9XFxiLyk/LlswXSA/PyBTdHJpbmcoc2VsZWN0ZWRZaWwpLnJlcGxhY2UoL1teXFxkXS9nLCAnJyk7XG4gICAgICBpZiAoeURpZ2l0cykgY2xhdXNlcy5wdXNoKGAke0ZJTFRFUl9GSUVMRFMuWUlMfSBMSUtFICcke3lEaWdpdHN9JSdgKTtcbiAgICAgIGVsc2UgY2xhdXNlcy5wdXNoKGAke0ZJTFRFUl9GSUVMRFMuWUlMfSBMSUtFICclJHt0aGlzLmVzY2FwZUFyY0dJUyhTdHJpbmcoc2VsZWN0ZWRZaWwpKX0lJ2ApO1xuICAgIH1cblxuICAgIC8vIFJlZ2lvbiBoaWVyYXJjaHlcbiAgICBpZiAoc2VsZWN0ZWRUdW1hbikgY2xhdXNlcy5wdXNoKHRoaXMuZXFBcG9zU21hcnQoRklMVEVSX0ZJRUxEUy5UVU1BTiwgc2VsZWN0ZWRUdW1hbikpO1xuICAgIGVsc2UgaWYgKHNlbGVjdGVkVmlsb3lhdCkgY2xhdXNlcy5wdXNoKHRoaXMuZXFBcG9zU21hcnQoRklMVEVSX0ZJRUxEUy5WSUxPWUFULCBzZWxlY3RlZFZpbG95YXQpKTtcblxuICAgIC8vIOKchSBDcm9wICh0dXJpKTogYWx3YXlzIGFwcGx5IHdoZW4gc2VsZWN0ZWQgc28gSW5kaWNhdG9yIGZpbHRlcnMgYnkgY3JvcCAobGF5ZXIgbWF5IG5vdCBoYXZlIC5maWVsZHMgbG9hZGVkIHlldClcbiAgICBjb25zdCB5ZXJUb2lmYXNGaWVsZCA9ICh0aGlzLnByb3BzLmNvbmZpZz8ueWVyVG9pZmFzRmllbGQgfHwgRklMVEVSX0ZJRUxEUy5UVVJJKS50cmltKCk7XG4gICAgaWYgKHNlbGVjdGVkWWVyVG9pZmFzKSB7XG4gICAgICBjbGF1c2VzLnB1c2godGhpcy5lcUFwb3NTbWFydCh5ZXJUb2lmYXNGaWVsZCwgc2VsZWN0ZWRZZXJUb2lmYXMpKTtcbiAgICB9XG5cbiAgICAvLyBORFZJIGRhdGUtb25seSBmaWx0ZXI6IG9ubHkgcmVxdWlyZSBub24tbnVsbCBzdGF0dXMgb25jZSB3ZVxuICAgIC8vIGhhdmUgYXQgbGVhc3Qgc29tZSBnZW9ncmFwaGljL2Nyb3Agc2NvcGUgKHZpbG95YXQvdHVtYW4vdHVyaSkuXG4gICAgLy8gSWYgb25seSB5aWwgaXMgc2VsZWN0ZWQsIHNraXAgTkRWSSBzbyB0aGUgaW5kaWNhdG9yIHNob3dzXG4gICAgLy8gYSBwdXJlIHllYXItYmFzZWQgYWdncmVnYXRlLlxuICAgIGlmIChoYXNHZW9PckNyb3AgJiYgdGhpcy5zdGF0ZS5uZHZpU3RhdHVzRmllbGQpIHtcbiAgICAgIGNsYXVzZXMucHVzaChgJHt0aGlzLnN0YXRlLm5kdmlTdGF0dXNGaWVsZH0gSVMgTk9UIE5VTExgKTtcbiAgICB9XG5cbiAgICAvLyBCYXIgc2VsZWN0aW9uOiB1c2UgY3VycmVudCBiYXIgYXR0cmlidXRlICsgdmFsdWUgKGxpa2UgR3JhZmYpLCBub3QgbGl0ZXJhbCB2aCBmaWVsZC5cbiAgICAvLyBBZ2Fpbiwgb25seSBhZnRlciB3ZSBoYXZlIHNvbWUgZ2VvZ3JhcGhpYy9jcm9wIGZpbHRlciB0byBhdm9pZFxuICAgIC8vIGEgbmF0aW9ud2lkZSBORFZJIHNsaWNlIHdpdGgganVzdCBhIHllYXIgc2VsZWN0ZWQuXG4gICAgaWYgKGhhc0dlb09yQ3JvcCAmJiB0aGlzLnN0YXRlLmJhckNhdGVnb3J5RmllbGQgJiYgdGhpcy5zdGF0ZS5iYXJDYXRlZ29yeVZhbHVlKSB7XG4gICAgICBjbGF1c2VzLnB1c2goYCR7dGhpcy5zdGF0ZS5iYXJDYXRlZ29yeUZpZWxkfSA9ICcke3RoaXMuZXNjYXBlQXJjR0lTKHRoaXMuc3RhdGUuYmFyQ2F0ZWdvcnlWYWx1ZSl9J2ApO1xuICAgIH0gZWxzZSBpZiAoaGFzR2VvT3JDcm9wICYmIHNlbGVjdGVkVmVnZXRhdGlvblN0YXR1cykge1xuICAgICAgY2xhdXNlcy5wdXNoKHRoaXMuZXFBcG9zU21hcnQoRklMVEVSX0ZJRUxEUy5WSCwgc2VsZWN0ZWRWZWdldGF0aW9uU3RhdHVzKSk7XG4gICAgfVxuICAgIGlmIChzZWxlY3RlZENyb3BUeXBlKSBjbGF1c2VzLnB1c2godGhpcy5lcUFwb3NTbWFydChGSUxURVJfRklFTERTLkVLSU4sIHNlbGVjdGVkQ3JvcFR5cGUpKTtcblxuICAgIGNvbnN0IGNvbmZpZ0ZpbHRlckV4cHJlc3Npb24gPSB0aGlzLnByb3BzLmNvbmZpZz8uZmlsdGVyRXhwcmVzc2lvbjtcbiAgICBpZiAoXG4gICAgICBjb25maWdGaWx0ZXJFeHByZXNzaW9uICYmXG4gICAgICBjb25maWdGaWx0ZXJFeHByZXNzaW9uLnRyaW0oKSAhPT0gJycgJiZcbiAgICAgIGNvbmZpZ0ZpbHRlckV4cHJlc3Npb24gIT09ICcxPTEnICYmXG4gICAgICAhY2xhdXNlcy5zb21lKChjKSA9PiBjLmluY2x1ZGVzKGNvbmZpZ0ZpbHRlckV4cHJlc3Npb24pKVxuICAgICkge1xuICAgICAgY2xhdXNlcy5wdXNoKGAoJHtjb25maWdGaWx0ZXJFeHByZXNzaW9ufSlgKTtcbiAgICB9XG5cbiAgICBjb25zdCByZXN1bHQgPSBjbGF1c2VzLmxlbmd0aCA+IDAgPyBjbGF1c2VzLmpvaW4oJyBBTkQgJykgOiAnMT0xJztcbiAgICBjb25zb2xlLmxvZygnW1ZlZ2V0YXRpb25TdGF0c1dpZGdldF0gQnVpbHQgV0hFUkUgY2xhdXNlOicsIHJlc3VsdCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgLy8gQVBJIHVybCBidWlsZGVyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICBwcml2YXRlIGJ1aWxkQXBpVXJsKCk6IHN0cmluZyB7XG4gICAgY29uc3QgY2ZnID0gKHRoaXMucHJvcHMuY29uZmlnIHx8IHt9KSBhcyBJbmRpY2F0b3JDb25maWc7XG5cbiAgICBsZXQgZW5kcG9pbnQ6IHN0cmluZyA9IChcbiAgICAgIGNmZy5hcGlFbmRwb2ludCA/P1xuICAgICAgY2ZnLmFwaVVybCA/P1xuICAgICAgY2ZnLmVuZHBvaW50ID8/XG4gICAgICBjZmcudXJsID8/XG4gICAgICAnJ1xuICAgICkudG9TdHJpbmcoKS50cmltKCk7XG5cbiAgICBpZiAoIWVuZHBvaW50KSB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgQVBJIGVuZHBvaW50OiBzZXQgY29uZmlnLmFwaUVuZHBvaW50IChvciBhcGlVcmwvZW5kcG9pbnQvdXJsKS4nKTtcblxuICAgIGVuZHBvaW50ID0gZW5kcG9pbnQuc3BsaXQoJz8nKVswXS5yZXBsYWNlKC9bPyZdJC8sICcnKTtcblxuICAgIGNvbnN0IHtcbiAgICAgIHNlbGVjdGVkWWlsLFxuICAgICAgc2VsZWN0ZWRWaWxveWF0LFxuICAgICAgc2VsZWN0ZWRUdW1hbixcbiAgICAgIHNlbGVjdGVkWWVyVG9pZmFzLFxuICAgICAgc2VsZWN0ZWRWZWdldGF0aW9uU3RhdHVzLFxuICAgICAgc2VsZWN0ZWRDcm9wVHlwZVxuICAgIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgY29uc3QgZW5jID0gKHY6IHN0cmluZykgPT4gZW5jb2RlVVJJQ29tcG9uZW50KHRoaXMubm9ybWFsaXplVXpiZWtGb3JBcGkodiB8fCAnJykpO1xuXG4gICAgY29uc3QgcmVwbGFjZW1lbnRzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xuICAgICAgJ3t5aWx9JzogZW5jKHNlbGVjdGVkWWlsKSxcbiAgICAgICd7dmlsb3lhdH0nOiBlbmMoc2VsZWN0ZWRWaWxveWF0KSxcbiAgICAgICd7dHVtYW59JzogZW5jKHNlbGVjdGVkVHVtYW4pLFxuXG4gICAgICAvLyDinIUgQ0hBTkdFRDogc3VwcG9ydCB7dHVyaX0gYW5kIG9sZCB7dHVyfVxuICAgICAgJ3t0dXJpfSc6IGVuYyhzZWxlY3RlZFllclRvaWZhcyksXG4gICAgICAne3R1cn0nOiBlbmMoc2VsZWN0ZWRZZXJUb2lmYXMpLFxuXG4gICAgICAne3ZofSc6IGVuYyhzZWxlY3RlZFZlZ2V0YXRpb25TdGF0dXMpLFxuICAgICAgJ3tla2luX3R1cml9JzogZW5jKHNlbGVjdGVkQ3JvcFR5cGUpXG4gICAgfTtcblxuICAgIGVuZHBvaW50ID0gZW5kcG9pbnQucmVwbGFjZSgvXFx7KHlpbHx2aWxveWF0fHR1bWFufHR1cml8dHVyfHZofGVraW5fdHVyaSlcXH0vZywgKG0pID0+IHJlcGxhY2VtZW50c1ttXSA/PyAnJyk7XG5cbiAgICByZXR1cm4gZW5kcG9pbnQ7XG4gIH1cblxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09XG4gIC8vIEdyb3VwZWQgc3RhdHNcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIHByaXZhdGUgYXN5bmMgZmV0Y2hHcm91cGVkU3RhdHMoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgeyBmZWF0dXJlTGF5ZXIsIGNvbm5lY3Rpb25TdGF0dXMgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgY2ZnID0gKHRoaXMucHJvcHMuY29uZmlnIHx8IHt9KSBhcyBJbmRpY2F0b3JDb25maWc7XG5cbiAgICBjb25zdCBncm91cEZpZWxkID0gKGNmZy5ncm91cEJ5RmllbGQgfHwgJycpLnRyaW0oKTtcbiAgICBjb25zdCBzdGF0T3AgPSAoY2ZnLnN0YXRPcGVyYXRpb24gfHwgJ2NvdW50JykgYXMgSW5kaWNhdG9yQ29uZmlnWydzdGF0T3BlcmF0aW9uJ107XG4gICAgY29uc3QgdmFsdWVGaWVsZCA9IGNmZy5hdHRyaWJ1dGVGaWVsZCB8fCAnKic7XG4gICAgY29uc3Qgb3V0TmFtZSA9IGNmZy5vdXRTdGF0TmFtZSB8fCAnYWdnJztcblxuICAgIGlmICghZmVhdHVyZUxheWVyIHx8IGNvbm5lY3Rpb25TdGF0dXMgIT09ICdjb25uZWN0ZWQnIHx8ICFncm91cEZpZWxkKSB7XG4gICAgICByZXR1cm4gdGhpcy5mZXRjaERhdGEoKTtcbiAgICB9XG5cbiAgICBpZiAoc3RhdE9wID09PSAnZmlyc3QnKSB7XG4gICAgICByZXR1cm4gdGhpcy5mZXRjaEdyb3VwZWRGaXJzdChmZWF0dXJlTGF5ZXIsIGdyb3VwRmllbGQsIHZhbHVlRmllbGQsIG91dE5hbWUpO1xuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiB0cnVlLCBlcnJvcjogbnVsbCB9KTtcblxuICAgIGNvbnN0IGJhc2VXaGVyZSA9IHRoaXMuYnVpbGRXaGVyZUNsYXVzZSgpO1xuXG4gICAgY29uc3Qgb2lkRmllbGQgPSBmZWF0dXJlTGF5ZXIub2JqZWN0SWRGaWVsZCB8fCAnb2JqZWN0aWQnO1xuICAgIGNvbnN0IG9uRmllbGQgPSBzdGF0T3AgPT09ICdjb3VudCcgPyBvaWRGaWVsZCA6IHZhbHVlRmllbGQ7XG4gICAgY29uc3Qgb3V0U3RhdGlzdGljcyA9IFtcbiAgICAgIHtcbiAgICAgICAgb25TdGF0aXN0aWNGaWVsZDogb25GaWVsZCxcbiAgICAgICAgc3RhdGlzdGljVHlwZTogKHsgY291bnQ6ICdjb3VudCcsIHN1bTogJ3N1bScsIGF2ZzogJ2F2ZycsIG1pbjogJ21pbicsIG1heDogJ21heCcgfSBhcyBhbnkpW3N0YXRPcF0sXG4gICAgICAgIG91dFN0YXRpc3RpY0ZpZWxkTmFtZTogb3V0TmFtZVxuICAgICAgfVxuICAgIF0gYXMgYW55O1xuXG4gICAgbGV0IG5vbk51bGxXaGVyZSA9IGAke2Jhc2VXaGVyZX0gQU5EICR7Z3JvdXBGaWVsZH0gSVMgTk9UIE5VTExgO1xuXG4gICAgaWYgKGNmZy5leGNsdWRlWmVyb1ZhbHVlcykge1xuICAgICAgaWYgKHN0YXRPcCA9PT0gJ2NvdW50JyAmJiAoY2ZnLmF0dHJpYnV0ZUZpZWxkIHx8ICcnKS50cmltKCkpIHtcbiAgICAgICAgbm9uTnVsbFdoZXJlICs9IGAgQU5EICR7dGhpcy5ueigoY2ZnLmF0dHJpYnV0ZUZpZWxkIGFzIHN0cmluZykudHJpbSgpKX1gO1xuICAgICAgfVxuICAgICAgaWYgKHN0YXRPcCAhPT0gJ2NvdW50JyAmJiB2YWx1ZUZpZWxkICYmIHZhbHVlRmllbGQgIT09ICcqJykge1xuICAgICAgICBub25OdWxsV2hlcmUgKz0gYCBBTkQgJHt0aGlzLm56KHZhbHVlRmllbGQpfWA7XG4gICAgICB9XG4gICAgICBub25OdWxsV2hlcmUgKz0gYCBBTkQgJHtncm91cEZpZWxkfSA8PiAwIEFORCAke2dyb3VwRmllbGR9IDw+ICcwJ2A7XG4gICAgfVxuXG4gICAgY29uc3QgcUdyb3VwZWQgPSBmZWF0dXJlTGF5ZXIuY3JlYXRlUXVlcnkoKTtcbiAgICBxR3JvdXBlZC53aGVyZSA9IG5vbk51bGxXaGVyZTtcbiAgICAocUdyb3VwZWQgYXMgYW55KS5ncm91cEJ5RmllbGRzRm9yU3RhdGlzdGljcyA9IFtncm91cEZpZWxkXTtcbiAgICBxR3JvdXBlZC5vdXRTdGF0aXN0aWNzID0gb3V0U3RhdGlzdGljcyBhcyBhbnk7XG4gICAgcUdyb3VwZWQucmV0dXJuR2VvbWV0cnkgPSBmYWxzZTtcbiAgICAocUdyb3VwZWQgYXMgYW55KS5udW0gPSAyMDAwO1xuXG4gICAgY29uc3QgZ3JvdXBlZCA9IGF3YWl0IGZlYXR1cmVMYXllci5xdWVyeUZlYXR1cmVzKHFHcm91cGVkKTtcbiAgICBjb25zdCByb3dzOiBBcnJheTx7IGtleTogc3RyaW5nIHwgbnVtYmVyOyB2YWx1ZTogbnVtYmVyIH0+ID0gKGdyb3VwZWQ/LmZlYXR1cmVzIHx8IFtdKS5tYXAoKGY6IGFueSkgPT4ge1xuICAgICAgY29uc3QgZCA9IGY/LmF0dHJpYnV0ZXMgYXMgUmVjb3JkPHN0cmluZywgYW55PjtcbiAgICAgIHJldHVybiB7IGtleTogZFtncm91cEZpZWxkXSwgdmFsdWU6IE51bWJlcihkW291dE5hbWVdID8/IDApIH07XG4gICAgfSk7XG5cbiAgICBpZiAoY2ZnLmluY2x1ZGVOdWxsQ2F0ZWdvcnkpIHtcbiAgICAgIGxldCB3aGVyZU51bGwgPSBgJHtiYXNlV2hlcmV9IEFORCAke2dyb3VwRmllbGR9IElTIE5VTExgO1xuICAgICAgaWYgKGNmZy5leGNsdWRlWmVyb1ZhbHVlcykge1xuICAgICAgICBpZiAoc3RhdE9wID09PSAnY291bnQnICYmIChjZmcuYXR0cmlidXRlRmllbGQgfHwgJycpLnRyaW0oKSkge1xuICAgICAgICAgIHdoZXJlTnVsbCArPSBgIEFORCAke3RoaXMubnooKGNmZy5hdHRyaWJ1dGVGaWVsZCBhcyBzdHJpbmcpLnRyaW0oKSl9YDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RhdE9wICE9PSAnY291bnQnICYmIHZhbHVlRmllbGQgJiYgdmFsdWVGaWVsZCAhPT0gJyonKSB7XG4gICAgICAgICAgd2hlcmVOdWxsICs9IGAgQU5EICR7dGhpcy5ueih2YWx1ZUZpZWxkKX1gO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHFOdWxsID0gZmVhdHVyZUxheWVyLmNyZWF0ZVF1ZXJ5KCk7XG4gICAgICBxTnVsbC53aGVyZSA9IHdoZXJlTnVsbDtcbiAgICAgIHFOdWxsLm91dFN0YXRpc3RpY3MgPSBvdXRTdGF0aXN0aWNzIGFzIGFueTtcbiAgICAgIHFOdWxsLnJldHVybkdlb21ldHJ5ID0gZmFsc2U7XG4gICAgICAocU51bGwgYXMgYW55KS5udW0gPSAxO1xuXG4gICAgICBjb25zdCBudWxsUmVzID0gYXdhaXQgZmVhdHVyZUxheWVyLnF1ZXJ5RmVhdHVyZXMocU51bGwpO1xuICAgICAgY29uc3QgbnVsbFZhbCA9IE51bWJlcihudWxsUmVzPy5mZWF0dXJlcz8uWzBdPy5hdHRyaWJ1dGVzPy5bb3V0TmFtZV0gPz8gMCk7XG4gICAgICByb3dzLnB1c2goeyBrZXk6IG51bGwgYXMgYW55LCB2YWx1ZTogbnVsbFZhbCB9KTtcbiAgICB9XG5cbiAgICBsZXQgZmluYWw6IEFycmF5PHsga2V5OiBhbnk7IGxhYmVsOiBzdHJpbmc7IHZhbHVlOiBudW1iZXIgfT47XG5cbiAgICBpZiAoKGNmZy5jYXRlZ29yeU1vZGUgfHwgJ0FVVE8nKSA9PT0gJ0VOVU0nICYmIEFycmF5LmlzQXJyYXkoY2ZnLmVudW1DYXRlZ29yaWVzKSAmJiBjZmcuZW51bUNhdGVnb3JpZXMubGVuZ3RoKSB7XG4gICAgICBjb25zdCBhc01hcCA9IG5ldyBNYXA8YW55LCBudW1iZXI+KCk7XG4gICAgICByb3dzLmZvckVhY2goKHIpID0+IHtcbiAgICAgICAgY29uc3QgayA9IHIua2V5ID09IG51bGwgPyBudWxsIDogU3RyaW5nKHIua2V5KTtcbiAgICAgICAgYXNNYXAuc2V0KGssIChhc01hcC5nZXQoaykgfHwgMCkgKyByLnZhbHVlKTtcbiAgICAgIH0pO1xuXG4gICAgICBmaW5hbCA9IGNmZy5lbnVtQ2F0ZWdvcmllcy5tYXAoKGMpID0+IHtcbiAgICAgICAgY29uc3QgayA9IGMudmFsdWUgPT0gbnVsbCA/IG51bGwgOiBTdHJpbmcoYy52YWx1ZSk7XG4gICAgICAgIHJldHVybiB7IGtleTogYy52YWx1ZSwgbGFiZWw6IGMubGFiZWwsIHZhbHVlOiBOdW1iZXIoYXNNYXAuZ2V0KGspIHx8IDApIH07XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZmluYWwgPSByb3dzXG4gICAgICAgIC5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgaWYgKGEua2V5ID09IG51bGwgJiYgYi5rZXkgPT0gbnVsbCkgcmV0dXJuIDA7XG4gICAgICAgICAgaWYgKGEua2V5ID09IG51bGwpIHJldHVybiAtMTtcbiAgICAgICAgICBpZiAoYi5rZXkgPT0gbnVsbCkgcmV0dXJuIDE7XG4gICAgICAgICAgcmV0dXJuIFN0cmluZyhhLmtleSkubG9jYWxlQ29tcGFyZShTdHJpbmcoYi5rZXkpLCB1bmRlZmluZWQsIHsgbnVtZXJpYzogdHJ1ZSB9KTtcbiAgICAgICAgfSlcbiAgICAgICAgLm1hcCgocikgPT4gKHtcbiAgICAgICAgICBrZXk6IHIua2V5LFxuICAgICAgICAgIGxhYmVsOiByLmtleSA9PSBudWxsID8gJzxObyB2YWx1ZT4nIDogU3RyaW5nKHIua2V5KSxcbiAgICAgICAgICB2YWx1ZTogci52YWx1ZVxuICAgICAgICB9KSk7XG4gICAgfVxuXG4gICAgY29uc3QgZHAgPSBOdW1iZXIoY2ZnLmRlY2ltYWxQbGFjZXMgfHwgMCk7XG4gICAgY29uc3Qgcm91bmRlZCA9IGZpbmFsLm1hcCgoeCkgPT4gKHtcbiAgICAgIC4uLngsXG4gICAgICB2YWx1ZTogZHAgPiAwID8gcGFyc2VGbG9hdCh4LnZhbHVlLnRvRml4ZWQoZHApKSA6IE1hdGgucm91bmQoeC52YWx1ZSlcbiAgICB9KSk7XG5cbiAgICBjb25zdCB0b3RhbCA9IHJvdW5kZWQucmVkdWNlKChzLCByKSA9PiBzICsgKGlzTmFOKHIudmFsdWUpID8gMCA6IHIudmFsdWUpLCAwKTtcblxuICAgIGNvbnN0IGRpc3BsYXlLZXkgPSBjZmcuZGlzcGxheUdyb3VwVmFsdWUgYXMgYW55O1xuICAgIGNvbnN0IGRpc3BsYXlWYWwgPVxuICAgICAgZGlzcGxheUtleSAhPT0gdW5kZWZpbmVkXG4gICAgICAgID8gcm91bmRlZC5maW5kKFxuICAgICAgICAgICAgKHIpID0+IChyLmtleSA9PSBudWxsICYmIGRpc3BsYXlLZXkgPT0gbnVsbCkgfHwgU3RyaW5nKHIua2V5KSA9PT0gU3RyaW5nKGRpc3BsYXlLZXkpXG4gICAgICAgICAgKT8udmFsdWUgPz8gMFxuICAgICAgICA6IHRvdGFsO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBncm91cFJlc3VsdHM6IHJvdW5kZWQsXG4gICAgICB2ZWdldGF0aW9uQXJlYTogZGlzcGxheVZhbCxcbiAgICAgIHRvdGFsQXJlYTogdG90YWwsXG4gICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgIGxhc3RVcGRhdGU6IG5ldyBEYXRlKCksXG4gICAgICBlcnJvcjogbnVsbFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBmZXRjaEdyb3VwZWRGaXJzdChcbiAgICBmZWF0dXJlTGF5ZXI6IF9fZXNyaS5GZWF0dXJlTGF5ZXIsXG4gICAgZ3JvdXBGaWVsZDogc3RyaW5nLFxuICAgIHZhbHVlRmllbGQ6IHN0cmluZyxcbiAgICBfb3V0TmFtZTogc3RyaW5nXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IGNmZyA9ICh0aGlzLnByb3BzLmNvbmZpZyB8fCB7fSkgYXMgSW5kaWNhdG9yQ29uZmlnO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IHRydWUsIGVycm9yOiBudWxsIH0pO1xuXG4gICAgY29uc3QgYmFzZVdoZXJlID0gdGhpcy5idWlsZFdoZXJlQ2xhdXNlKCk7XG5cbiAgICBsZXQgd2hlcmUxID0gYCR7YmFzZVdoZXJlfSBBTkQgJHtncm91cEZpZWxkfSBJUyBOT1QgTlVMTGA7XG4gICAgaWYgKGNmZy5leGNsdWRlWmVyb1ZhbHVlcyAmJiB2YWx1ZUZpZWxkKSB3aGVyZTEgKz0gYCBBTkQgJHt0aGlzLm56KHZhbHVlRmllbGQpfWA7XG5cbiAgICBjb25zdCBxID0gZmVhdHVyZUxheWVyLmNyZWF0ZVF1ZXJ5KCk7XG4gICAgcS53aGVyZSA9IHdoZXJlMTtcbiAgICBxLm91dEZpZWxkcyA9IFtncm91cEZpZWxkLCB2YWx1ZUZpZWxkXTtcbiAgICBxLm9yZGVyQnlGaWVsZHMgPSBbYCR7Z3JvdXBGaWVsZH0gQVNDYF07XG4gICAgcS5yZXR1cm5HZW9tZXRyeSA9IGZhbHNlO1xuICAgIChxIGFzIGFueSkubnVtID0gMzAwMDtcblxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZlYXR1cmVMYXllci5xdWVyeUZlYXR1cmVzKHEpO1xuXG4gICAgY29uc3QgZmlyc3RNYXAgPSBuZXcgTWFwPGFueSwgbnVtYmVyPigpO1xuICAgIGZvciAoY29uc3QgZiBvZiByZXM/LmZlYXR1cmVzIHx8IFtdKSB7XG4gICAgICBjb25zdCBkID0gZj8uYXR0cmlidXRlcyBhcyBhbnk7XG4gICAgICBjb25zdCBrID0gZFtncm91cEZpZWxkXTtcbiAgICAgIGlmICghZmlyc3RNYXAuaGFzKGspKSBmaXJzdE1hcC5zZXQoaywgTnVtYmVyKGRbdmFsdWVGaWVsZF0pKTtcbiAgICB9XG5cbiAgICBjb25zdCByb3dzOiBBcnJheTx7IGtleTogYW55OyB2YWx1ZTogbnVtYmVyIH0+ID0gQXJyYXkuZnJvbShmaXJzdE1hcC5lbnRyaWVzKCkpLm1hcCgoW2tleSwgdl0pID0+ICh7XG4gICAgICBrZXksXG4gICAgICB2YWx1ZTogTnVtYmVyLmlzRmluaXRlKE51bWJlcih2KSkgPyBOdW1iZXIodikgOiAwXG4gICAgfSkpO1xuXG4gICAgaWYgKGNmZy5pbmNsdWRlTnVsbENhdGVnb3J5KSB7XG4gICAgICBsZXQgd2hlcmVOdWxsID0gYCR7YmFzZVdoZXJlfSBBTkQgJHtncm91cEZpZWxkfSBJUyBOVUxMYDtcbiAgICAgIGlmIChjZmcuZXhjbHVkZVplcm9WYWx1ZXMgJiYgdmFsdWVGaWVsZCkgd2hlcmVOdWxsICs9IGAgQU5EICR7dGhpcy5ueih2YWx1ZUZpZWxkKX1gO1xuXG4gICAgICBjb25zdCBxTnVsbCA9IGZlYXR1cmVMYXllci5jcmVhdGVRdWVyeSgpO1xuICAgICAgcU51bGwud2hlcmUgPSB3aGVyZU51bGw7XG4gICAgICBxTnVsbC5vdXRGaWVsZHMgPSBbdmFsdWVGaWVsZF07XG4gICAgICBxTnVsbC5yZXR1cm5HZW9tZXRyeSA9IGZhbHNlO1xuICAgICAgKHFOdWxsIGFzIGFueSkubnVtID0gMTtcblxuICAgICAgY29uc3QgcmVzTnVsbCA9IGF3YWl0IGZlYXR1cmVMYXllci5xdWVyeUZlYXR1cmVzKHFOdWxsKTtcblxuICAgICAgY29uc3QgdiA9IE51bWJlcihyZXNOdWxsPy5mZWF0dXJlcz8uWzBdPy5hdHRyaWJ1dGVzPy5bdmFsdWVGaWVsZF0gPz8gMCk7XG4gICAgICByb3dzLnB1c2goeyBrZXk6IG51bGwgYXMgYW55LCB2YWx1ZTogTnVtYmVyLmlzRmluaXRlKHYpID8gdiA6IDAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgZHAgPSBOdW1iZXIoY2ZnLmRlY2ltYWxQbGFjZXMgfHwgMCk7XG4gICAgY29uc3QgZmluYWwgPSByb3dzXG4gICAgICAuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICBpZiAoYS5rZXkgPT0gbnVsbCAmJiBiLmtleSA9PSBudWxsKSByZXR1cm4gMDtcbiAgICAgICAgaWYgKGEua2V5ID09IG51bGwpIHJldHVybiAtMTtcbiAgICAgICAgaWYgKGIua2V5ID09IG51bGwpIHJldHVybiAxO1xuICAgICAgICByZXR1cm4gU3RyaW5nKGEua2V5KS5sb2NhbGVDb21wYXJlKFN0cmluZyhiLmtleSksIHVuZGVmaW5lZCwgeyBudW1lcmljOiB0cnVlIH0pO1xuICAgICAgfSlcbiAgICAgIC5tYXAoKHIpID0+ICh7XG4gICAgICAgIGtleTogci5rZXksXG4gICAgICAgIGxhYmVsOiByLmtleSA9PSBudWxsID8gJzxObyB2YWx1ZT4nIDogU3RyaW5nKHIua2V5KSxcbiAgICAgICAgdmFsdWU6IGRwID4gMCA/IHBhcnNlRmxvYXQoci52YWx1ZS50b0ZpeGVkKGRwKSkgOiBNYXRoLnJvdW5kKHIudmFsdWUpXG4gICAgICB9KSk7XG5cbiAgICBjb25zdCB0b3RhbCA9IGZpbmFsLnJlZHVjZSgocywgcikgPT4gcyArIChpc05hTihyLnZhbHVlKSA/IDAgOiByLnZhbHVlKSwgMCk7XG4gICAgY29uc3QgZGlzcGxheUtleSA9IGNmZy5kaXNwbGF5R3JvdXBWYWx1ZSBhcyBhbnk7XG4gICAgY29uc3QgZGlzcGxheVZhbCA9XG4gICAgICBkaXNwbGF5S2V5ICE9PSB1bmRlZmluZWRcbiAgICAgICAgPyBmaW5hbC5maW5kKChyKSA9PiAoci5rZXkgPT0gbnVsbCAmJiBkaXNwbGF5S2V5ID09IG51bGwpIHx8IFN0cmluZyhyLmtleSkgPT09IFN0cmluZyhkaXNwbGF5S2V5KSlcbiAgICAgICAgICAgID8udmFsdWUgPz8gMFxuICAgICAgICA6IHRvdGFsO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBncm91cFJlc3VsdHM6IGZpbmFsLFxuICAgICAgdmVnZXRhdGlvbkFyZWE6IGRpc3BsYXlWYWwsXG4gICAgICB0b3RhbEFyZWE6IHRvdGFsLFxuICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICBsYXN0VXBkYXRlOiBuZXcgRGF0ZSgpLFxuICAgICAgZXJyb3I6IG51bGxcbiAgICB9KTtcbiAgfVxuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgLy8gQVBJIGZldGNoXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICBmZXRjaEFwaURhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgaWYgKCF0aGlzLl9pc01vdW50ZWQpIHJldHVybjtcbiAgICBpZiAoIXRoaXMuc2hvdWxkRmV0Y2hGb3JWaWxveWF0KCkpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgZXJyb3I6IG51bGwsXG4gICAgICAgIHZlZ2V0YXRpb25BcmVhOiBudWxsLFxuICAgICAgICB0b3RhbEFyZWE6IG51bGwsXG4gICAgICAgIGZlYXR1cmVDb3VudDogMFxuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGlmICh0aGlzLl9hYm9ydENvbnRyb2xsZXIpIHRoaXMuX2Fib3J0Q29udHJvbGxlci5hYm9ydCgpO1xuICAgICAgdGhpcy5fYWJvcnRDb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xuICAgICAgY29uc3Qgc2lnbmFsID0gdGhpcy5fYWJvcnRDb250cm9sbGVyLnNpZ25hbDtcblxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IHRydWUsIGVycm9yOiBudWxsIH0pO1xuXG4gICAgICBjb25zdCB7XG4gICAgICAgIHNlbGVjdGVkWWlsLFxuICAgICAgICBzZWxlY3RlZFZpbG95YXQsXG4gICAgICAgIHNlbGVjdGVkVHVtYW4sXG4gICAgICAgIHNlbGVjdGVkWWVyVG9pZmFzLFxuICAgICAgICBzZWxlY3RlZFZlZ2V0YXRpb25TdGF0dXMsXG4gICAgICAgIHNlbGVjdGVkQ3JvcFR5cGVcbiAgICAgIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICBjb25zdCBlbmRwb2ludCA9IHRoaXMuYnVpbGRBcGlVcmwoKTtcblxuICAgICAgY29uc3QgYmFzZVBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKTtcbiAgICAgIGlmIChzZWxlY3RlZFlpbCkgYmFzZVBhcmFtcy5zZXQoJ3lpbCcsIHNlbGVjdGVkWWlsKTtcbiAgICAgIGlmIChzZWxlY3RlZENyb3BUeXBlKSBiYXNlUGFyYW1zLnNldCgnZWtpbl90dXJpJywgdGhpcy5ub3JtYWxpemVVemJla0ZvckFwaShzZWxlY3RlZENyb3BUeXBlKSk7XG4gICAgICBpZiAoc2VsZWN0ZWRWZWdldGF0aW9uU3RhdHVzKSBiYXNlUGFyYW1zLnNldCgndmgnLCB0aGlzLm5vcm1hbGl6ZVV6YmVrRm9yQXBpKHNlbGVjdGVkVmVnZXRhdGlvblN0YXR1cykpO1xuXG4gICAgICAvLyDinIUgQ0hBTkdFRDogQVBJIHBhcmFtIGRlZmF1bHQgbm93ICd0dXJpJ1xuICAgICAgY29uc3QgeXRmUGFyYW1OYW1lID0gKHRoaXMucHJvcHMuY29uZmlnPy55ZXJUb2lmYXNQYXJhbSB8fCBGSUxURVJfRklFTERTLlRVUkkpLnRyaW0oKTtcbiAgICAgIGlmIChzZWxlY3RlZFllclRvaWZhcykgYmFzZVBhcmFtcy5zZXQoeXRmUGFyYW1OYW1lLCB0aGlzLm5vcm1hbGl6ZVV6YmVrRm9yQXBpKHNlbGVjdGVkWWVyVG9pZmFzKSk7XG5cbiAgICAgIGNvbnN0IHR1bUxpc3QgPSBzZWxlY3RlZFR1bWFuID8gdGhpcy5tYWtlRGlzdHJpY3RTdWZmaXhWYXJpYW50cyhzZWxlY3RlZFR1bWFuKSA6IFsnJ107XG4gICAgICBjb25zdCB2aWxMaXN0ID0gc2VsZWN0ZWRWaWxveWF0ID8gdGhpcy5tYWtlUmVnaW9uU3VmZml4VmFyaWFudHMoc2VsZWN0ZWRWaWxveWF0KSA6IFsnJ107XG5cbiAgICAgIGxldCBmaW5hbFZhbHVlID0gMDtcbiAgICAgIGxldCBtYXRjaGVkID0gZmFsc2U7XG5cbiAgICAgIG91dGVyOiBmb3IgKGNvbnN0IHR1bSBvZiB0dW1MaXN0KSB7XG4gICAgICAgIGZvciAoY29uc3QgdmlsIG9mIHZpbExpc3QpIHtcbiAgICAgICAgICBjb25zdCBxcCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoYmFzZVBhcmFtcy50b1N0cmluZygpKTtcbiAgICAgICAgICBpZiAodHVtKSBxcC5zZXQoJ3R1bWFuJywgdHVtKTtcbiAgICAgICAgICBpZiAodmlsKSBxcC5zZXQoJ3ZpbG95YXQnLCB2aWwpO1xuXG4gICAgICAgICAgY29uc3QgdXJsID0gYCR7ZW5kcG9pbnR9PyR7cXAudG9TdHJpbmcoKX1gO1xuICAgICAgICAgIGNvbnNvbGUubG9nKGBbVmVnU3RhdHNdIEZldGNoaW5nIGRhdGEgZnJvbSBBUEk6ICR7dXJsfWApO1xuXG4gICAgICAgICAgY29uc3Qgb3B0czogUmVxdWVzdEluaXQgPSB7XG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICAgICAgaGVhZGVyczogeyBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgICAgICAgICAgc2lnbmFsXG4gICAgICAgICAgfTtcblxuICAgICAgICAgIGlmICh0aGlzLnByb3BzLmNvbmZpZz8udXNlQXV0aGVudGljYXRpb24gJiYgdGhpcy5wcm9wcy5jb25maWc/LmFwaUtleSkge1xuICAgICAgICAgICAgKG9wdHMuaGVhZGVycyBhcyBhbnkpWydBdXRob3JpemF0aW9uJ10gPSBgQmVhcmVyICR7dGhpcy5wcm9wcy5jb25maWcuYXBpS2V5fWA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgcmVzcCA9IGF3YWl0IGZldGNoKHVybCwgb3B0cyk7XG4gICAgICAgICAgaWYgKHNpZ25hbC5hYm9ydGVkKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UgfSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghcmVzcC5vaykgdGhyb3cgbmV3IEVycm9yKGBBUEkgcmVxdWVzdCBmYWlsZWQgd2l0aCBzdGF0dXMgJHtyZXNwLnN0YXR1c31gKTtcblxuICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwLmpzb24oKTtcblxuICAgICAgICAgIGNvbnN0IGNmZ0ZpZWxkID0gKHRoaXMucHJvcHMuY29uZmlnPy5yZXNwb25zZUZpZWxkIHx8ICcnKS50cmltKCk7XG4gICAgICAgICAgY29uc3QgY2FuZGlkYXRlcyA9IFtjZmdGaWVsZCwgJ3RvdGFsJywgJ3ZhbHVlJywgJ2NvdW50JywgJ21heWRvbiddLmZpbHRlcihCb29sZWFuKSBhcyBzdHJpbmdbXTtcblxuICAgICAgICAgIGxldCB2YWx1ZTogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG4gICAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgY2FuZGlkYXRlcykge1xuICAgICAgICAgICAgaWYgKGtleSAmJiBkYXRhICYmIHR5cGVvZiBkYXRhID09PSAnb2JqZWN0JyAmJiBrZXkgaW4gZGF0YSkge1xuICAgICAgICAgICAgICBjb25zdCB2ID0gTnVtYmVyKGRhdGFba2V5XSk7XG4gICAgICAgICAgICAgIGlmICghTnVtYmVyLmlzTmFOKHYpKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSB2O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoa2V5ICYmIGRhdGE/LnJlc3VsdCAmJiB0eXBlb2YgZGF0YS5yZXN1bHQgPT09ICdvYmplY3QnICYmIGtleSBpbiBkYXRhLnJlc3VsdCkge1xuICAgICAgICAgICAgICBjb25zdCB2ID0gTnVtYmVyKGRhdGEucmVzdWx0W2tleV0pO1xuICAgICAgICAgICAgICBpZiAoIU51bWJlci5pc05hTih2KSkge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gdjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodmFsdWUgPT0gbnVsbCAmJiB0eXBlb2YgZGF0YSA9PT0gJ251bWJlcicpIHZhbHVlID0gTnVtYmVyKGRhdGEpO1xuXG4gICAgICAgICAgaWYgKHZhbHVlICE9IG51bGwgJiYgIU51bWJlci5pc05hTih2YWx1ZSkpIHtcbiAgICAgICAgICAgIGZpbmFsVmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgIG1hdGNoZWQgPSB0cnVlO1xuICAgICAgICAgICAgYnJlYWsgb3V0ZXI7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRlY2ltYWxzID0gdGhpcy5wcm9wcy5jb25maWc/LmRlY2ltYWxQbGFjZXMgfHwgMDtcbiAgICAgIGNvbnN0IHJvdW5kZWQgPSBkZWNpbWFscyA+IDAgPyBwYXJzZUZsb2F0KGZpbmFsVmFsdWUudG9GaXhlZChkZWNpbWFscykpIDogTWF0aC5yb3VuZChmaW5hbFZhbHVlKTtcblxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHZlZ2V0YXRpb25BcmVhOiByb3VuZGVkLFxuICAgICAgICB0b3RhbEFyZWE6IHJvdW5kZWQsXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICBsYXN0VXBkYXRlOiBuZXcgRGF0ZSgpLFxuICAgICAgICBlcnJvcjogbnVsbFxuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyOiBhbnkpIHtcbiAgICAgIGlmIChlcnI/Lm5hbWUgPT09ICdBYm9ydEVycm9yJykgcmV0dXJuO1xuICAgICAgY29uc29sZS5lcnJvcignW1ZlZ1N0YXRzXSBFcnJvciBmZXRjaGluZyBBUEkgZGF0YTonLCBlcnIpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yOiBlcnI/Lm1lc3NhZ2UgfHwgJ0ZhaWxlZCB0byBmZXRjaCBkYXRhIGZyb20gQVBJJywgbG9hZGluZzogZmFsc2UgfSk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRoaXMuX2Fib3J0Q29udHJvbGxlciA9IG51bGw7XG4gICAgfVxuICB9O1xuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgLy8gRmVhdHVyZUxheWVyIHN0YXRzIGZldGNoXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICBmZXRjaERhdGEgPSBhc3luYyAoX2ZvcmNlUmVmcmVzaD86IGJvb2xlYW4pID0+IHtcbiAgICBpZiAodGhpcy5wcm9wcy5jb25maWc/LnVzZUFwaURhdGFTb3VyY2UpIHJldHVybiB0aGlzLmZldGNoQXBpRGF0YSgpO1xuXG4gICAgaWYgKCF0aGlzLnNob3VsZEZldGNoRm9yVmlsb3lhdCgpKSB7XG4gICAgICAvLyBLZWVwIGl0IGJsYW5rIHdoZW4gdmlsb3lhdCBpc24ndCBjaG9zZW4gKGFsc28gY292ZXJzIGdyb3VwQnkgbW9kZSkuXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgIGVycm9yOiBudWxsLFxuICAgICAgICB2ZWdldGF0aW9uQXJlYTogbnVsbCxcbiAgICAgICAgdG90YWxBcmVhOiBudWxsLFxuICAgICAgICBmZWF0dXJlQ291bnQ6IDBcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLmNvbmZpZz8uZ3JvdXBCeUZpZWxkKSByZXR1cm4gdGhpcy5mZXRjaEdyb3VwZWRTdGF0cygpO1xuXG4gICAgaWYgKHRoaXMuc3RhdGUuY29ubmVjdGlvblN0YXR1cyAhPT0gJ2Nvbm5lY3RlZCcpIHJldHVybjtcblxuICAgIHRyeSB7XG4gICAgICBpZiAodGhpcy5fYWJvcnRDb250cm9sbGVyKSB0aGlzLl9hYm9ydENvbnRyb2xsZXIuYWJvcnQoKTtcbiAgICAgIHRoaXMuX2Fib3J0Q29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKTtcblxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IHRydWUsIGVycm9yOiBudWxsIH0pO1xuXG4gICAgICBjb25zdCBmbCA9IHRoaXMuc3RhdGUuZmVhdHVyZUxheWVyO1xuICAgICAgaWYgKCFmbCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UsIGVycm9yOiAnTm8gZmVhdHVyZSBsYXllciBhdmFpbGFibGUnIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBvaWRGaWVsZCA9IGZsLm9iamVjdElkRmllbGQgfHwgJ29iamVjdGlkJztcblxuICAgICAgY29uc3Qgb3AgPSAodGhpcy5wcm9wcy5jb25maWc/LnN0YXRPcGVyYXRpb24gfHwgJ2NvdW50JykgYXMgJ2NvdW50JyB8ICdzdW0nIHwgJ2F2ZycgfCAnbWluJyB8ICdtYXgnIHwgJ2ZpcnN0JztcbiAgICAgIGNvbnN0IGZpZWxkID0gKHRoaXMucHJvcHMuY29uZmlnPy5hdHRyaWJ1dGVGaWVsZCB8fCAnJykudHJpbSgpO1xuXG4gICAgICBsZXQgd2hlcmUgPSB0aGlzLmJ1aWxkV2hlcmVDbGF1c2UoKTtcblxuICAgICAgaWYgKHRoaXMucHJvcHMuY29uZmlnPy5leGNsdWRlWmVyb1ZhbHVlcyAmJiBmaWVsZCkge1xuICAgICAgICB3aGVyZSArPSBgIEFORCAke3RoaXMubnooZmllbGQpfWA7XG4gICAgICB9XG5cbiAgICAgIGlmIChvcCA9PT0gJ2ZpcnN0Jykge1xuICAgICAgICBjb25zdCBxID0gZmwuY3JlYXRlUXVlcnkoKTtcbiAgICAgICAgcS53aGVyZSA9IHdoZXJlO1xuICAgICAgICBxLm91dEZpZWxkcyA9IFtmaWVsZF07XG4gICAgICAgIHEub3JkZXJCeUZpZWxkcyA9IFtgJHtmaWVsZH0gQVNDYF07XG4gICAgICAgIHEucmV0dXJuR2VvbWV0cnkgPSBmYWxzZTtcbiAgICAgICAgcS5udW0gPSAxO1xuXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZsLnF1ZXJ5RmVhdHVyZXMocSk7XG4gICAgICAgIGNvbnN0IHYgPSBOdW1iZXIocmVzPy5mZWF0dXJlcz8uWzBdPy5hdHRyaWJ1dGVzPy5bZmllbGRdID8/IDApO1xuICAgICAgICBjb25zdCBkcCA9IE51bWJlcih0aGlzLnByb3BzLmNvbmZpZz8uZGVjaW1hbFBsYWNlcyB8fCAwKTtcbiAgICAgICAgY29uc3QgdmFsID0gZHAgPiAwID8gcGFyc2VGbG9hdCh2LnRvRml4ZWQoZHApKSA6IE1hdGgucm91bmQodik7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgdmVnZXRhdGlvbkFyZWE6IHZhbCxcbiAgICAgICAgICB0b3RhbEFyZWE6IHZhbCxcbiAgICAgICAgICBmZWF0dXJlQ291bnQ6IHJlcz8uZmVhdHVyZXM/Lmxlbmd0aCB8fCAwLFxuICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgIGxhc3RVcGRhdGU6IG5ldyBEYXRlKCksXG4gICAgICAgICAgZXJyb3I6IG51bGxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3Qgc3RhdE1hcDogUmVjb3JkPCdjb3VudCcgfCAnc3VtJyB8ICdhdmcnIHwgJ21pbicgfCAnbWF4JywgX19lc3JpLlN0YXRpc3RpY0RlZmluaXRpb25bJ3N0YXRpc3RpY1R5cGUnXT4gPSB7XG4gICAgICAgIGNvdW50OiAnY291bnQnLFxuICAgICAgICBzdW06ICdzdW0nLFxuICAgICAgICBhdmc6ICdhdmcnLFxuICAgICAgICBtaW46ICdtaW4nLFxuICAgICAgICBtYXg6ICdtYXgnXG4gICAgICB9O1xuXG4gICAgICBpZiAob3AgIT09ICdjb3VudCcgJiYgIWZpZWxkKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSwgZXJyb3I6ICdTZWxlY3QgYXR0cmlidXRlIGZpZWxkIGZvciB0aGlzIGFnZ3JlZ2F0aW9uJyB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBvbkZpZWxkID0gb3AgPT09ICdjb3VudCcgPyBvaWRGaWVsZCA6IGZpZWxkO1xuICAgICAgY29uc3QgcSA9IGZsLmNyZWF0ZVF1ZXJ5KCk7XG4gICAgICBxLndoZXJlID0gd2hlcmU7XG4gICAgICBxLm91dFN0YXRpc3RpY3MgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICBvblN0YXRpc3RpY0ZpZWxkOiBvbkZpZWxkLFxuICAgICAgICAgIHN0YXRpc3RpY1R5cGU6IHN0YXRNYXBbb3BdLFxuICAgICAgICAgIG91dFN0YXRpc3RpY0ZpZWxkTmFtZTogJ2FnZydcbiAgICAgICAgfVxuICAgICAgXSBhcyBhbnk7XG4gICAgICBxLnJldHVybkdlb21ldHJ5ID0gZmFsc2U7XG5cbiAgICAgIGNvbnN0IHN0YXRzID0gYXdhaXQgZmwucXVlcnlGZWF0dXJlcyhxKTtcbiAgICAgIGNvbnN0IHJhdyA9IE51bWJlcihzdGF0cz8uZmVhdHVyZXM/LlswXT8uYXR0cmlidXRlcz8uYWdnID8/IDApO1xuICAgICAgY29uc3QgZHAgPSBOdW1iZXIodGhpcy5wcm9wcy5jb25maWc/LmRlY2ltYWxQbGFjZXMgfHwgMCk7XG4gICAgICBjb25zdCB2YWwgPSBkcCA+IDAgPyBwYXJzZUZsb2F0KHJhdy50b0ZpeGVkKGRwKSkgOiBNYXRoLnJvdW5kKHJhdyk7XG5cbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICB2ZWdldGF0aW9uQXJlYTogdmFsLFxuICAgICAgICB0b3RhbEFyZWE6IHZhbCxcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgIGxhc3RVcGRhdGU6IG5ldyBEYXRlKCksXG4gICAgICAgIGVycm9yOiBudWxsXG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcbiAgICAgIGlmIChlPy5uYW1lID09PSAnQWJvcnRFcnJvcicpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlLCBlcnJvcjogZT8ubWVzc2FnZSB8fCAnUXVlcnkgZmFpbGVkJyB9KTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdGhpcy5fYWJvcnRDb250cm9sbGVyID0gbnVsbDtcbiAgICB9XG4gIH07XG5cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PVxuICAvLyBGb3JtYXR0aW5nICsgdGhlbWVcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIGZvcm1hdE51bWJlciA9IChudW06IG51bWJlcikgPT4ge1xuICAgIGlmIChudW0gPT09IG51bGwgfHwgbnVtID09PSB1bmRlZmluZWQpIHJldHVybiAnLSc7XG5cbiAgICBjb25zdCBkZWNpbWFsUGxhY2VzID0gdGhpcy5wcm9wcy5jb25maWc/LmRlY2ltYWxQbGFjZXMgfHwgMDtcbiAgICBjb25zdCBmb3JtYXR0ZWROdW0gPSBkZWNpbWFsUGxhY2VzID4gMCA/IG51bS50b0ZpeGVkKGRlY2ltYWxQbGFjZXMpIDogTWF0aC5yb3VuZChudW0pLnRvU3RyaW5nKCk7XG4gICAgcmV0dXJuIGZvcm1hdHRlZE51bS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnICcpO1xuICB9O1xuXG4gIGZvcm1hdFVwZGF0ZVRpbWUgPSAoZGF0ZTogRGF0ZSkgPT4ge1xuICAgIGlmICghZGF0ZSkgcmV0dXJuICcnO1xuICAgIGNvbnN0IGggPSBkYXRlLmdldEhvdXJzKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpO1xuICAgIGNvbnN0IG0gPSBkYXRlLmdldE1pbnV0ZXMoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgcmV0dXJuIGAke2h9OiR7bX1gO1xuICB9O1xuXG4gIHNldHVwQXV0b1JlZnJlc2goKSB7XG4gICAgaWYgKHRoaXMucmVmcmVzaFRpbWVyKSB7XG4gICAgICBjbGVhckludGVydmFsKHRoaXMucmVmcmVzaFRpbWVyKTtcbiAgICAgIHRoaXMucmVmcmVzaFRpbWVyID0gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCB7IGF1dG9SZWZyZXNoLCByZWZyZXNoSW50ZXJ2YWwgfSA9ICh0aGlzLnByb3BzLmNvbmZpZyB8fCB7fSkgYXMgSW5kaWNhdG9yQ29uZmlnO1xuICAgIGlmIChhdXRvUmVmcmVzaCAhPT0gZmFsc2UgJiYgcmVmcmVzaEludGVydmFsKSB7XG4gICAgICBjb25zdCBpbnRlcnZhbE1zID0gKHJlZnJlc2hJbnRlcnZhbCB8fCA1KSAqIDYwICogMTAwMDtcbiAgICAgIHRoaXMucmVmcmVzaFRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5faXNNb3VudGVkKSB0aGlzLnJlZnJlc2hEYXRhKCk7XG4gICAgICB9LCBpbnRlcnZhbE1zKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVUaGVtZUNoYW5nZSA9IChfZXZlbnQ6IGFueSk6IHZvaWQgPT4ge1xuICAgIC8vIG9wdGlvbmFsIGhvb2sgaWYgeW91IGxhdGVyIHdhbnQgdG8gcmVhY3QgdG8gdGhlbWUgdG9nZ2xlc1xuICB9O1xuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgLy8g4pyFIEtFWSBGSVg6IGRvIG5vdCBvdmVycmlkZSBDU1MgdGhlbWUgdW5sZXNzIHVzZXIgZXhwbGljaXRseSBzZXRzIHZhbHVlc1xuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgZ2V0Q3VzdG9tU3R5bGVzID0gKCkgPT4ge1xuICAgIGNvbnN0IGNmZyA9ICh0aGlzLnByb3BzLmNvbmZpZyB8fCB7fSkgYXMgSW5kaWNhdG9yQ29uZmlnO1xuXG4gICAgY29uc3QgYmFja2dyb3VuZENvbG9yUmF3ID0gKGNmZy5iYWNrZ3JvdW5kQ29sb3IgPz8gJycpLnRvU3RyaW5nKCkudHJpbSgpO1xuICAgIGNvbnN0IGhhc0JnT3ZlcnJpZGUgPSBiYWNrZ3JvdW5kQ29sb3JSYXcubGVuZ3RoID4gMDtcblxuICAgIGNvbnN0IHRleHRDb2xvclJhdyA9IChjZmcudGV4dENvbG9yID8/ICcnKS50b1N0cmluZygpLnRyaW0oKTtcbiAgICBjb25zdCBsYWJlbENvbG9yUmF3ID0gKGNmZy5sYWJlbENvbG9yID8/ICcnKS50b1N0cmluZygpLnRyaW0oKTtcblxuICAgIGNvbnN0IGJvcmRlclJhZGl1c0NmZyA9XG4gICAgICB0eXBlb2YgY2ZnLmJvcmRlclJhZGl1cyA9PT0gJ251bWJlcidcbiAgICAgICAgPyBjZmcuYm9yZGVyUmFkaXVzXG4gICAgICAgIDogdHlwZW9mIGNmZy5ib3JkZXJSYWRpdXMgPT09ICdzdHJpbmcnICYmIGNmZy5ib3JkZXJSYWRpdXMudHJpbSgpICE9PSAnJ1xuICAgICAgICAgID8gTnVtYmVyKGNmZy5ib3JkZXJSYWRpdXMpXG4gICAgICAgICAgOiBudWxsO1xuXG4gICAgY29uc3QgaWNvblNpemVDZmcgPVxuICAgICAgdHlwZW9mIGNmZy5pY29uU2l6ZSA9PT0gJ251bWJlcidcbiAgICAgICAgPyBjZmcuaWNvblNpemVcbiAgICAgICAgOiB0eXBlb2YgY2ZnLmljb25TaXplID09PSAnc3RyaW5nJyAmJiBjZmcuaWNvblNpemUudHJpbSgpICE9PSAnJ1xuICAgICAgICAgID8gTnVtYmVyKGNmZy5pY29uU2l6ZSlcbiAgICAgICAgICA6IG51bGw7XG5cbiAgICBjb25zdCBpY29uT3BhY2l0eUNmZyA9XG4gICAgICB0eXBlb2YgY2ZnLmljb25PcGFjaXR5ID09PSAnbnVtYmVyJ1xuICAgICAgICA/IGNmZy5pY29uT3BhY2l0eVxuICAgICAgICA6IHR5cGVvZiBjZmcuaWNvbk9wYWNpdHkgPT09ICdzdHJpbmcnICYmIGNmZy5pY29uT3BhY2l0eS50cmltKCkgIT09ICcnXG4gICAgICAgICAgPyBOdW1iZXIoY2ZnLmljb25PcGFjaXR5KVxuICAgICAgICAgIDogbnVsbDtcblxuICAgIGNvbnN0IGNvbnRhaW5lclN0eWxlczogYW55ID0ge307XG5cbiAgICBpZiAoYm9yZGVyUmFkaXVzQ2ZnICE9IG51bGwgJiYgTnVtYmVyLmlzRmluaXRlKGJvcmRlclJhZGl1c0NmZykpIGNvbnRhaW5lclN0eWxlcy5ib3JkZXJSYWRpdXMgPSBgJHtib3JkZXJSYWRpdXNDZmd9cHhgO1xuICAgIGlmICh0ZXh0Q29sb3JSYXcpIGNvbnRhaW5lclN0eWxlcy5jb2xvciA9IHRleHRDb2xvclJhdztcblxuICAgIGlmIChoYXNCZ092ZXJyaWRlKSB7XG4gICAgICBjb25zdCBpc0dyYWRpZW50ID0gL2dyYWRpZW50L2kudGVzdChiYWNrZ3JvdW5kQ29sb3JSYXcpO1xuICAgICAgaWYgKGlzR3JhZGllbnQpIGNvbnRhaW5lclN0eWxlcy5iYWNrZ3JvdW5kID0gYmFja2dyb3VuZENvbG9yUmF3O1xuICAgICAgZWxzZSBjb250YWluZXJTdHlsZXMuYmFja2dyb3VuZENvbG9yID0gYmFja2dyb3VuZENvbG9yUmF3O1xuICAgIH1cblxuICAgIGNvbnN0IHN0YXRMYWJlbDogYW55ID0ge307XG4gICAgaWYgKGxhYmVsQ29sb3JSYXcpIHN0YXRMYWJlbC5jb2xvciA9IGxhYmVsQ29sb3JSYXc7XG5cbiAgICBjb25zdCBzdGF0VmFsdWU6IGFueSA9IHt9O1xuICAgIGlmICh0ZXh0Q29sb3JSYXcpIHN0YXRWYWx1ZS5jb2xvciA9IHRleHRDb2xvclJhdztcblxuICAgIGNvbnN0IGljb25Db250YWluZXI6IGFueSA9IHt9O1xuICAgIGlmIChpY29uU2l6ZUNmZyAhPSBudWxsICYmIE51bWJlci5pc0Zpbml0ZShpY29uU2l6ZUNmZykpIHtcbiAgICAgIGljb25Db250YWluZXIud2lkdGggPSBgJHtpY29uU2l6ZUNmZ31weGA7XG4gICAgICBpY29uQ29udGFpbmVyLmhlaWdodCA9IGAke2ljb25TaXplQ2ZnfXB4YDtcbiAgICB9XG5cbiAgICBjb25zdCBpY29uOiBhbnkgPSB7fTtcbiAgICBpZiAoaWNvbk9wYWNpdHlDZmcgIT0gbnVsbCAmJiBOdW1iZXIuaXNGaW5pdGUoaWNvbk9wYWNpdHlDZmcpKSB7XG4gICAgICBpY29uLm9wYWNpdHkgPSBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCBpY29uT3BhY2l0eUNmZyAvIDEwMCkpO1xuICAgIH1cblxuICAgIHJldHVybiB7IGNvbnRhaW5lcjogY29udGFpbmVyU3R5bGVzLCBzdGF0TGFiZWwsIHN0YXRWYWx1ZSwgaWNvbkNvbnRhaW5lciwgaWNvbiwgaGFzQmdPdmVycmlkZSB9O1xuICB9O1xuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgLy8gVUlcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICB2ZWdldGF0aW9uQXJlYSxcbiAgICAgIGxvYWRpbmcsXG4gICAgICBlcnJvcixcbiAgICAgIGNvbm5lY3Rpb25TdGF0dXMsXG4gICAgICBsYXN0VXBkYXRlLFxuICAgICAgc2VsZWN0ZWRZaWwsXG4gICAgICBzZWxlY3RlZFZpbG95YXQsXG4gICAgICBzZWxlY3RlZFR1bWFuLFxuICAgICAgc2VsZWN0ZWRZZXJUb2lmYXMsXG4gICAgICBncm91cFJlc3VsdHNcbiAgICB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIGNvbnN0IHsgY29uZmlnLCB1c2VEYXRhU291cmNlcywgdXNlTWFwV2lkZ2V0SWRzIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHVzZUFwaURhdGFTb3VyY2UgPSAhIWNvbmZpZz8udXNlQXBpRGF0YVNvdXJjZTtcblxuICAgIGNvbnN0IGxhYmVsID0gY29uZmlnPy5sYWJlbCB8fCAn0JfQsNGF0LjRgNCwINC10YDQu9Cw0YDQuNC00LAg0LDQvdC40pvQu9Cw0L3Qs9Cw0L0g0LLQtdCz0LXRgtCw0YLQuNCyINC80LDQudC00L7QvSc7XG4gICAgY29uc3QgdW5pdExhYmVsID0gY29uZmlnPy51bml0TGFiZWwgPz8gJ9Cz0LAnO1xuICAgIGNvbnN0IHNob3dMYXN0VXBkYXRlID0gY29uZmlnPy5zaG93TGFzdFVwZGF0ZSAhPT0gZmFsc2U7XG4gICAgY29uc3QgaWNvbkltYWdlID0gY29uZmlnPy5pY29uSW1hZ2U7XG5cbiAgICBjb25zdCBncm91cEJ5RmllbGQgPSAoY29uZmlnPy5ncm91cEJ5RmllbGQgfHwgJycpLnRyaW0oKTtcbiAgICBjb25zdCBpc0dyb3VwZWQgPSAhIWdyb3VwQnlGaWVsZDtcbiAgICBjb25zdCBzdGF0T3AgPSAoY29uZmlnPy5zdGF0T3BlcmF0aW9uIHx8IChpc0dyb3VwZWQgPyAnY291bnQnIDogJ3N1bScpKSBhc1xuICAgICAgJ2NvdW50JyB8ICdzdW0nIHwgJ2F2ZycgfCAnbWluJyB8ICdtYXgnIHwgJ2ZpcnN0JztcbiAgICBjb25zdCBpc0NvdW50TW9kZSA9IGlzR3JvdXBlZCAmJiBzdGF0T3AgPT09ICdjb3VudCc7XG4gICAgY29uc3QgZWZmZWN0aXZlVW5pdCA9IGlzQ291bnRNb2RlID8gJycgOiB1bml0TGFiZWwgfHwgJyc7XG5cbiAgICBjb25zdCByZXNvbHZlQ2F0ZWdvcnlMYWJlbCA9ICh2OiBzdHJpbmcgfCBudW1iZXIgfCBudWxsIHwgdW5kZWZpbmVkKTogc3RyaW5nID0+IHtcbiAgICAgIGlmICh2ID09IG51bGwpIHJldHVybiAnPE5vIHZhbHVlPic7XG4gICAgICBpZiAoKGNvbmZpZz8uY2F0ZWdvcnlNb2RlIHx8ICdBVVRPJykgPT09ICdFTlVNJyAmJiBBcnJheS5pc0FycmF5KGNvbmZpZz8uZW51bUNhdGVnb3JpZXMpKSB7XG4gICAgICAgIGNvbnN0IGhpdCA9IGNvbmZpZy5lbnVtQ2F0ZWdvcmllcy5maW5kKChjKSA9PiAoYy52YWx1ZSA9PSBudWxsICYmIHYgPT0gbnVsbCkgfHwgU3RyaW5nKGMudmFsdWUpID09PSBTdHJpbmcodikpO1xuICAgICAgICBpZiAoaGl0Py5sYWJlbCkgcmV0dXJuIGhpdC5sYWJlbDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBTdHJpbmcodik7XG4gICAgfTtcblxuICAgIGNvbnN0IGRWYWwgPSBjb25maWc/LmRpc3BsYXlHcm91cFZhbHVlIGFzIGFueTtcbiAgICBjb25zdCBidWNrZXRDYXB0aW9uID0gaXNHcm91cGVkXG4gICAgICA/IGRWYWwgPT09IHVuZGVmaW5lZFxuICAgICAgICA/IGBUb3RhbCBhY3Jvc3MgJHtncm91cEJ5RmllbGR9YFxuICAgICAgICA6IGAke2dyb3VwQnlGaWVsZH0gPSAke3Jlc29sdmVDYXRlZ29yeUxhYmVsKGRWYWwpfWBcbiAgICAgIDogbnVsbDtcblxuICAgIGNvbnN0IGlzSW5pdGlhbGl6aW5nID0gIXVzZUFwaURhdGFTb3VyY2UgJiYgKGNvbm5lY3Rpb25TdGF0dXMgPT09ICdjb25uZWN0aW5nJyB8fCBjb25uZWN0aW9uU3RhdHVzID09PSAnaWRsZScpO1xuXG4gICAgY29uc3QgY3VzdG9tU3R5bGVzID0gdGhpcy5nZXRDdXN0b21TdHlsZXMoKTtcblxuICAgIC8vIGF1dG8gdGhlbWUgY2xhc3MgaWYgdXNlciBmb3JjZXMgYSBkYXJrIGlubGluZSBiYWNrZ3JvdW5kXG4gICAgY29uc3QgYmcgPSAoY29uZmlnPy5iYWNrZ3JvdW5kQ29sb3IgPz8gJycpLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKTtcbiAgICBjb25zdCBsb29rc0RhcmsgPSAvIzBmfCMwYnwjMGF8IzExMXwjMTIxfCMxYXxyZ2JcXCgwfHJnYmFcXCgwfGJsYWNrfGRhcmt8bmF2eXxtaWRuaWdodC8udGVzdChiZyk7XG4gICAgY29uc3QgdGhlbWVDbGFzcyA9IGN1c3RvbVN0eWxlcy5oYXNCZ092ZXJyaWRlICYmIGxvb2tzRGFyayA/ICdkYXJrLXRoZW1lJyA6ICdsaWdodC10aGVtZSc7XG5cbiAgICBjb25zdCBoaWRlVW50aWxWaWxveWF0ID1cbiAgICAgICghc2VsZWN0ZWRWaWxveWF0IHx8IHNlbGVjdGVkVmlsb3lhdC50cmltKCkgPT09ICcnKSAmJiBjb25uZWN0aW9uU3RhdHVzICE9PSAnZmFpbGVkJztcbiAgICBpZiAoaGlkZVVudGlsVmlsb3lhdCkge1xuICAgICAgLy8gS2VlcCBpdCB2aXN1YWxseSBibGFuayB1bnRpbCB2aWxveWF0IGlzIHNlbGVjdGVkLlxuICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtgdmVnZXRhdGlvbi1zdGF0cy13aWRnZXQgJHt0aGVtZUNsYXNzfWB9IHN0eWxlPXtjdXN0b21TdHlsZXMuY29udGFpbmVyfSAvPjtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2B2ZWdldGF0aW9uLXN0YXRzLXdpZGdldCAke3RoZW1lQ2xhc3N9YH0gc3R5bGU9e2N1c3RvbVN0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICB7IXVzZUFwaURhdGFTb3VyY2UgJiYgdXNlRGF0YVNvdXJjZXMgJiYgdXNlRGF0YVNvdXJjZXMubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgPERhdGFTb3VyY2VDb21wb25lbnRcbiAgICAgICAgICAgIHVzZURhdGFTb3VyY2U9e3VzZURhdGFTb3VyY2VzWzBdfVxuICAgICAgICAgICAgb25EYXRhU291cmNlQ3JlYXRlZD17dGhpcy5vbkRhdGFTb3VyY2VDcmVhdGVkfVxuICAgICAgICAgICAgb25EYXRhU291cmNlSW5mb0NoYW5nZT17dGhpcy5vbkRhdGFTb3VyY2VJbmZvQ2hhbmdlfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG5cbiAgICAgICAgeyF1c2VBcGlEYXRhU291cmNlICYmIHVzZU1hcFdpZGdldElkcz8ubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgPEppbXVNYXBWaWV3Q29tcG9uZW50IHVzZU1hcFdpZGdldElkPXt1c2VNYXBXaWRnZXRJZHNbMF19IG9uQWN0aXZlVmlld0NoYW5nZT17dGhpcy5vbkFjdGl2ZVZpZXdDaGFuZ2V9IC8+XG4gICAgICAgICl9XG5cbiAgICAgICAgey8qIEljb24gKi99XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3aWRnZXQtaWNvblwiXG4gICAgICAgICAgc3R5bGU9e09iamVjdC5rZXlzKGN1c3RvbVN0eWxlcy5pY29uQ29udGFpbmVyKS5sZW5ndGggPyBjdXN0b21TdHlsZXMuaWNvbkNvbnRhaW5lciA6IHVuZGVmaW5lZH1cbiAgICAgICAgPlxuICAgICAgICAgIHtpY29uSW1hZ2UgPyAoXG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIHNyYz17dHlwZW9mIGljb25JbWFnZSA9PT0gJ3N0cmluZycgPyBpY29uSW1hZ2UgOiBpY29uSW1hZ2UudXJsfVxuICAgICAgICAgICAgICBhbHQ9XCJWZWdldGF0aW9uIEljb25cIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ2ZWdldGF0aW9uLWljb25cIlxuICAgICAgICAgICAgICBzdHlsZT17T2JqZWN0LmtleXMoY3VzdG9tU3R5bGVzLmljb24pLmxlbmd0aCA/IGN1c3RvbVN0eWxlcy5pY29uIDogdW5kZWZpbmVkfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCA1MCA1MFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInZlZ2V0YXRpb24taWNvblwiXG4gICAgICAgICAgICAgIHN0eWxlPXtPYmplY3Qua2V5cyhjdXN0b21TdHlsZXMuaWNvbikubGVuZ3RoID8gY3VzdG9tU3R5bGVzLmljb24gOiB1bmRlZmluZWR9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0zNS45LDM1LjZjLTIuOSwwLTUuMi0yLjMtNS4yLTUuMmMwLTIuOSwyLjMtNS4yLDUuMi01LjJjMi45LDAsNS4yLDIuMyw1LjIsNS4yQzQxLjEsMzMuMywzOC44LDM1LjYsMzUuOSwzNS42eiBNMjUsNDYuOWMtMC41LDAtMC45LTAuNC0wLjktMC45VjI5LjRIMTMuOGMtMC41LDAtMC45LTAuNC0wLjktMC45YzAtMC41LDAuNC0wLjksMC45LTAuOWgxMC4zVjEzLjFjMC0wLjUsMC40LTAuOSwwLjktMC45czAuOSwwLjQsMC45LDAuOXYxNC42aDEwLjNjMC41LDAsMC45LDAuNCwwLjksMC45YzAsMC41LTAuNCwwLjktMC45LDAuOUgyNS45VjQ2QzI1LjksNDYuNSwyNS41LDQ2LjksMjUsNDYuOXpcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMjQuMSwyMC41Yy0yLjksMC01LjItMi4zLTUuMi01LjJjMC0yLjksMi4zLTUuMiw1LjItNS4yYzIuOSwwLDUuMiwyLjMsNS4yLDUuMkMyOS4zLDE4LjIsMjcsMjAuNSwyNC4xLDIwLjV6XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTE0LjEsMzUuNmMtMi45LDAtNS4yLTIuMy01LjItNS4yYzAtMi45LDIuMy01LjIsNS4yLTUuMmMyLjksMCw1LjIsMi4zLDUuMiw1LjJDMTkuMywzMy4zLDE3LDM1LjYsMTQuMSwzNS42elwiXG4gICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7LyogQm9keSAqL31cbiAgICAgICAge2lzSW5pdGlhbGl6aW5nIHx8IGxvYWRpbmcgPyAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkaW5nLWluZGljYXRvclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkaW5nLXNwaW5uZXJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkaW5nLWRvdFwiIC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGluZy1kb3RcIiAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRpbmctZG90XCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogZXJyb3IgPyAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlcnJvci1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXJyb3ItaWNvblwiPuKaoO+4jzwvZGl2PlxuICAgICAgICAgICAgPHA+e2Vycm9yfTwvcD5cbiAgICAgICAgICAgIHshdXNlQXBpRGF0YVNvdXJjZSAmJiBjb25uZWN0aW9uU3RhdHVzID09PSAnZmFpbGVkJyAmJiAoXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicmV0cnktYnV0dG9uXCIgb25DbGljaz17dGhpcy5yZXRyeU1hcENvbm5lY3Rpb259PlxuICAgICAgICAgICAgICAgIFJldHJ5IENvbm5lY3Rpb25cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWNvbnRlbnRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RhdC1sYWJlbFwiIHN0eWxlPXtPYmplY3Qua2V5cyhjdXN0b21TdHlsZXMuc3RhdExhYmVsKS5sZW5ndGggPyBjdXN0b21TdHlsZXMuc3RhdExhYmVsIDogdW5kZWZpbmVkfT5cbiAgICAgICAgICAgICAge2xhYmVsfVxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RhdC12YWx1ZVwiIHN0eWxlPXtPYmplY3Qua2V5cyhjdXN0b21TdHlsZXMuc3RhdFZhbHVlKS5sZW5ndGggPyBjdXN0b21TdHlsZXMuc3RhdFZhbHVlIDogdW5kZWZpbmVkfT5cbiAgICAgICAgICAgICAge3RoaXMuZm9ybWF0TnVtYmVyKHZlZ2V0YXRpb25BcmVhKX1cbiAgICAgICAgICAgICAge2VmZmVjdGl2ZVVuaXQgJiYgPHNwYW4gY2xhc3NOYW1lPVwidW5pdFwiPntlZmZlY3RpdmVVbml0fTwvc3Bhbj59XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAge2lzR3JvdXBlZCAmJiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JvdXAtY2FwdGlvblwiIHRpdGxlPXtidWNrZXRDYXB0aW9uIHx8ICcnfT5cbiAgICAgICAgICAgICAgICA8c21hbGw+e2J1Y2tldENhcHRpb259PC9zbWFsbD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuXG4gICAgICAgICAgICB7c2hvd0xhc3RVcGRhdGUgJiYgbGFzdFVwZGF0ZSAmJiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWV0YS1pbmZvIHZpc2libGVcIj5cbiAgICAgICAgICAgICAgICA8c3Bhbj7ij7Ege3RoaXMuZm9ybWF0VXBkYXRlVGltZShsYXN0VXBkYXRlKX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICB7c2VsZWN0ZWRZaWwgPyBgeWlsOiR7c2VsZWN0ZWRZaWx9YCA6ICcnfVxuICAgICAgICAgICAgICAgICAge3NlbGVjdGVkVmlsb3lhdCA/IGAg4oCiIHZpbDoke3NlbGVjdGVkVmlsb3lhdH1gIDogJyd9XG4gICAgICAgICAgICAgICAgICB7c2VsZWN0ZWRUdW1hbiA/IGAg4oCiIHR1bToke3NlbGVjdGVkVHVtYW59YCA6ICcnfVxuICAgICAgICAgICAgICAgICAge3NlbGVjdGVkWWVyVG9pZmFzID8gYCDigKIgdHVyaToke3NlbGVjdGVkWWVyVG9pZmFzfWAgOiAnJ31cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuIGV4cG9ydCBmdW5jdGlvbiBfX3NldF93ZWJwYWNrX3B1YmxpY19wYXRoX18odXJsKSB7IF9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gdXJsIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=