System.register(["jimu-core","jimu-ui/advanced/data-source-selector","jimu-ui/advanced/setting-components","jimu-ui"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "jimu-core":
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

/***/ }),

/***/ "jimu-ui":
/*!**************************!*\
  !*** external "jimu-ui" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui__;

/***/ }),

/***/ "jimu-ui/advanced/data-source-selector":
/*!********************************************************!*\
  !*** external "jimu-ui/advanced/data-source-selector" ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__;

/***/ }),

/***/ "jimu-ui/advanced/setting-components":
/*!******************************************************!*\
  !*** external "jimu-ui/advanced/setting-components" ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__;

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
/******/ 			// no module.id needed
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
/*!*************************************************************************************!*\
  !*** ./your-extensions/widgets/AgriPie3 (2)/AgriIndicator7/src/setting/setting.tsx ***!
  \*************************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (/* binding */ Setting)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui_advanced_data_source_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui/advanced/data-source-selector */ "jimu-ui/advanced/data-source-selector");
/* harmony import */ var jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui/advanced/setting-components */ "jimu-ui/advanced/setting-components");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
// src/setting/setting.tsx




/** Normalize UseDataSource list between plain and immutable */
const toPlainArray = (uds) => {
    if (!uds)
        return [];
    const anyUds = uds;
    return Array.isArray(anyUds)
        ? anyUds
        : (anyUds.asMutable ? anyUds.asMutable({ deep: true }) : []);
};
const toImmutableArray = (uds) => (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)(uds);
class Setting extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    constructor() {
        super(...arguments);
        /** Merge a small patch into immutable config */
        this.updateConfig = (patch) => {
            const next = this.props.config ? this.props.config.merge(patch) : (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)(patch);
            this.props.onSettingChange({ id: this.props.id, config: next });
        };
        /** Map picker */
        this.onMapWidgetSelected = (ids) => {
            this.props.onSettingChange({ id: this.props.id, useMapWidgetIds: ids });
        };
        /** Data source picker */
        this.onDataSourceChange = (useDataSources) => {
            this.props.onSettingChange({ id: this.props.id, useDataSources });
            // reset attribute when DS changes
            this.updateConfig({ attributeField: '' });
        };
        /** Attribute field (used for sum/avg/min/max/first; ignored for count) */
        this.onAttributeFieldChange = (selected) => {
            var _a;
            const name = ((_a = selected === null || selected === void 0 ? void 0 : selected[0]) === null || _a === void 0 ? void 0 : _a.jimuName) || '';
            this.updateConfig({ attributeField: name });
        };
        /** Aggregation method */
        this.onStatOperationChange = (e) => {
            const stat = e.target.value;
            // keep runtime path in sync (some code reads aggregationMethod)
            this.updateConfig({ statOperation: stat, aggregationMethod: stat });
        };
    }
    render() {
        var _a, _b;
        const udsPlain = toPlainArray(this.props.useDataSources);
        const udsImm = toImmutableArray(udsPlain);
        const cfg = this.props.config || {};
        const statOperation = cfg.statOperation || 'count';
        const attributeSelected = cfg.attributeField ? (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)([cfg.attributeField]) : (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)([]);
        const labelText = (_a = cfg.label) !== null && _a !== void 0 ? _a : '';
        const unitText = (_b = cfg.unitLabel) !== null && _b !== void 0 ? _b : '';
        const excludeZeroValues = !!cfg.excludeZeroValues;
        return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "p-2" },
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "mb-3" },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Label, { className: "d-block mb-1" }, "\u0425\u0430\u0440\u0438\u0442\u0430 \u0432\u0438\u0434\u0436\u0435\u0442\u0438\u043D\u0438 \u0442\u0430\u043D\u043B\u0430\u043D\u0433:"),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.MapWidgetSelector, { useMapWidgetIds: this.props.useMapWidgetIds, onSelect: this.onMapWidgetSelected })),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "mb-3" },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Label, { className: "d-block mb-1" }, "\u041C\u0430\u044A\u043B\u0443\u043C\u043E\u0442 \u043C\u0430\u043D\u0431\u0430\u0438\u043D\u0438 \u0442\u0430\u043D\u043B\u0430\u043D\u0433:"),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_data_source_selector__WEBPACK_IMPORTED_MODULE_1__.DataSourceSelector, { mustUseDataSource: true, widgetId: this.props.id, types: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)([jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceTypes.FeatureLayer]), hideDataView: true, useDataSources: udsImm, onChange: this.onDataSourceChange })),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "mb-3" },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Label, { className: "d-block mb-1" }, "\u04B2\u0438\u0441\u043E\u0431 \u0442\u0443\u0440\u0438 (Aggregation):"),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Select, { value: statOperation, onChange: this.onStatOperationChange },
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("option", { value: "count" }, "count"),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("option", { value: "sum" }, "sum"),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("option", { value: "avg" }, "avg"),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("option", { value: "min" }, "min"),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("option", { value: "max" }, "max"),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("option", { value: "first" }, "first")),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "text-muted mt-1", style: { fontSize: 12 } },
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("i", null, "\u042D\u0441\u043B\u0430\u0442\u043C\u0430:"),
                    " ",
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("code", null, "count"),
                    " \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u043D\u0438 \u0438\u043D\u043A\u043E\u0440 \u044D\u0442\u0430\u0434\u0438 \u2014 \u0431\u0430\u0440\u0447\u0430 \u043E\u0431\u044A\u0435\u043A\u0442\u043B\u0430\u0440 \u0441\u043E\u043D\u0438\u043D\u0438 \u049B\u0430\u0439\u0442\u0430\u0440a\u0434\u0438.")),
            udsPlain.length > 0 && (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "mb-3" },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Label, { className: "d-block mb-1" }, "\u0410\u0442\u0440\u0438\u0431\u0443\u0442 \u043C\u0430\u0439\u0434\u043E\u043D (sum/avg/min/max/first \u0443\u0447\u0443\u043D):"),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_data_source_selector__WEBPACK_IMPORTED_MODULE_1__.FieldSelector, { useDataSources: udsImm, selectedFields: attributeSelected, isMultiple: false, isDataSourceDropDownHidden: udsPlain.length === 1, onChange: this.onAttributeFieldChange }))),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "mb-3" },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Label, { className: "d-block mb-1" }, "\u041C\u0430\u0442\u043D (\u049B\u0438\u0439\u043C\u0430\u0442\u0434\u0430\u043D \u043E\u043B\u0434\u0438\u043D):"),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.TextInput, { value: labelText, onChange: (e) => this.updateConfig({ label: e.target.value }), placeholder: "\u041C\u0430\u0441\u0430\u043B\u0430\u043D: Buzilish" })),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "mb-3" },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Label, { className: "d-block mb-1" }, "\u041C\u0430\u0442\u043D (\u049B\u0438\u0439\u043C\u0430\u0442\u0434\u0430\u043D \u043A\u0435\u0439\u0438\u043D, \u0431\u0438\u0440\u043B\u0438\u043A):"),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.TextInput, { value: unitText, onChange: (e) => this.updateConfig({ unitLabel: e.target.value }), placeholder: "\u0442\u0430 / \u0433\u0430 / so'm ..." })),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "mb-2 d-flex align-items-center" },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Switch, { checked: excludeZeroValues, onChange: (e) => this.updateConfig({ excludeZeroValues: e.target.checked }) }),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("span", { className: "ml-2" }, "\u049A\u0438\u0439\u043C\u0430\u0442\u0438 0 \u0431\u045E\u043B\u0433\u0430\u043D \u0451\u0437\u0443\u0432\u043B\u0430\u0440\u043D\u0438 \u04B3\u0438\u0441\u043E\u0431\u0434\u0430\u043D \u0447\u0438\u049B\u0430\u0440\u0438\u0448"))));
    }
}
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9BZ3JpUGllMyAoMikvQWdyaUluZGljYXRvcjcvZGlzdC9zZXR0aW5nL3NldHRpbmcuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7QUNBQTs7O0tBR0s7QUFDTCwyQkFBMkI7QUFDM0IsYUFBYTtBQUNiLHFCQUF1QixHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05uRCwwQkFBMEI7QUFRUDtBQUV1RTtBQUNsQjtBQUNiO0FBRTNELCtEQUErRDtBQUMvRCxNQUFNLFlBQVksR0FBRyxDQUNuQixHQUFnRSxFQUMvQyxFQUFFO0lBQ25CLElBQUksQ0FBQyxHQUFHO1FBQUUsT0FBTyxFQUFFLENBQUM7SUFDcEIsTUFBTSxNQUFNLEdBQVEsR0FBVSxDQUFDO0lBQy9CLE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7UUFDMUIsQ0FBQyxDQUFFLE1BQTBCO1FBQzdCLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENB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aEMsQ0FDRTtZQUdOLG9FQUFLLFNBQVMsRUFBQyxnQ0FBZ0M7Z0JBQzdDLDJEQUFDLDJDQUFNLElBQ0wsT0FBTyxFQUFFLGlCQUFpQixFQUMxQixRQUFRLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUNkLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxpQkFBaUIsRUFBRyxDQUFDLENBQUMsTUFBMkIsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxHQUVsRjtnQkFDRixxRUFBTSxTQUFTLEVBQUMsTUFBTSwyT0FBbUQsQ0FDckUsQ0FDRixDQUNQLENBQUM7SUFDSixDQUFDO0NBQ0Y7QUFFTyxTQUFTLDJCQUEyQixDQUFDLEdBQUcsSUFBSSxxQkFBdUIsR0FBRyxHQUFHLEVBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXVpXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXVpL2FkdmFuY2VkL2RhdGEtc291cmNlLXNlbGVjdG9yXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXVpL2FkdmFuY2VkL3NldHRpbmctY29tcG9uZW50c1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWNvcmUvbGliL3NldC1wdWJsaWMtcGF0aC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvQWdyaVBpZTMgKDIpL0FncmlJbmRpY2F0b3I3L3NyYy9zZXR0aW5nL3NldHRpbmcudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV91aV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX2FkdmFuY2VkX2RhdGFfc291cmNlX3NlbGVjdG9yX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdWlfYWR2YW5jZWRfc2V0dGluZ19jb21wb25lbnRzX187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIi8qKlxyXG4gKiBXZWJwYWNrIHdpbGwgcmVwbGFjZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB3aXRoIF9fd2VicGFja19yZXF1aXJlX18ucCB0byBzZXQgdGhlIHB1YmxpYyBwYXRoIGR5bmFtaWNhbGx5LlxyXG4gKiBUaGUgcmVhc29uIHdoeSB3ZSBjYW4ndCBzZXQgdGhlIHB1YmxpY1BhdGggaW4gd2VicGFjayBjb25maWcgaXM6IHdlIGNoYW5nZSB0aGUgcHVibGljUGF0aCB3aGVuIGRvd25sb2FkLlxyXG4gKiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcclxuLy8gQHRzLWlnbm9yZVxyXG5fX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHdpbmRvdy5qaW11Q29uZmlnLmJhc2VVcmxcclxuIiwiLy8gc3JjL3NldHRpbmcvc2V0dGluZy50c3hcbmltcG9ydCB7XG4gIFJlYWN0LFxuICBJbW11dGFibGUsXG4gIEltbXV0YWJsZUFycmF5LFxuICBVc2VEYXRhU291cmNlLFxuICBJTUZpZWxkU2NoZW1hLFxuICBEYXRhU291cmNlVHlwZXNcbn0gZnJvbSAnamltdS1jb3JlJztcbmltcG9ydCB7IEFsbFdpZGdldFNldHRpbmdQcm9wcyB9IGZyb20gJ2ppbXUtZm9yLWJ1aWxkZXInO1xuaW1wb3J0IHsgRGF0YVNvdXJjZVNlbGVjdG9yLCBGaWVsZFNlbGVjdG9yIH0gZnJvbSAnamltdS11aS9hZHZhbmNlZC9kYXRhLXNvdXJjZS1zZWxlY3Rvcic7XG5pbXBvcnQgeyBNYXBXaWRnZXRTZWxlY3RvciB9IGZyb20gJ2ppbXUtdWkvYWR2YW5jZWQvc2V0dGluZy1jb21wb25lbnRzJztcbmltcG9ydCB7IExhYmVsLCBTZWxlY3QsIFRleHRJbnB1dCwgU3dpdGNoIH0gZnJvbSAnamltdS11aSc7XG5cbi8qKiBOb3JtYWxpemUgVXNlRGF0YVNvdXJjZSBsaXN0IGJldHdlZW4gcGxhaW4gYW5kIGltbXV0YWJsZSAqL1xuY29uc3QgdG9QbGFpbkFycmF5ID0gKFxuICB1ZHM6IFVzZURhdGFTb3VyY2VbXSB8IEltbXV0YWJsZUFycmF5PFVzZURhdGFTb3VyY2U+IHwgdW5kZWZpbmVkXG4pOiBVc2VEYXRhU291cmNlW10gPT4ge1xuICBpZiAoIXVkcykgcmV0dXJuIFtdO1xuICBjb25zdCBhbnlVZHM6IGFueSA9IHVkcyBhcyBhbnk7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KGFueVVkcylcbiAgICA/IChhbnlVZHMgYXMgVXNlRGF0YVNvdXJjZVtdKVxuICAgIDogKGFueVVkcy5hc011dGFibGUgPyBhbnlVZHMuYXNNdXRhYmxlKHsgZGVlcDogdHJ1ZSB9KSA6IFtdKTtcbn07XG5jb25zdCB0b0ltbXV0YWJsZUFycmF5ID0gKHVkczogVXNlRGF0YVNvdXJjZVtdKTogSW1tdXRhYmxlQXJyYXk8VXNlRGF0YVNvdXJjZT4gPT5cbiAgSW1tdXRhYmxlKHVkcykgYXMgSW1tdXRhYmxlQXJyYXk8VXNlRGF0YVNvdXJjZT47XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNldHRpbmcgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PEFsbFdpZGdldFNldHRpbmdQcm9wczxhbnk+PiB7XG4gIC8qKiBNZXJnZSBhIHNtYWxsIHBhdGNoIGludG8gaW1tdXRhYmxlIGNvbmZpZyAqL1xuICB1cGRhdGVDb25maWcgPSAocGF0Y2g6IFJlY29yZDxzdHJpbmcsIGFueT4pID0+IHtcbiAgICBjb25zdCBuZXh0ID0gdGhpcy5wcm9wcy5jb25maWcgPyB0aGlzLnByb3BzLmNvbmZpZy5tZXJnZShwYXRjaCkgOiBJbW11dGFibGUocGF0Y2ggYXMgYW55KTtcbiAgICB0aGlzLnByb3BzLm9uU2V0dGluZ0NoYW5nZSh7IGlkOiB0aGlzLnByb3BzLmlkLCBjb25maWc6IG5leHQgfSk7XG4gIH07XG5cbiAgLyoqIE1hcCBwaWNrZXIgKi9cbiAgb25NYXBXaWRnZXRTZWxlY3RlZCA9IChpZHM6IHN0cmluZ1tdKSA9PiB7XG4gICAgdGhpcy5wcm9wcy5vblNldHRpbmdDaGFuZ2UoeyBpZDogdGhpcy5wcm9wcy5pZCwgdXNlTWFwV2lkZ2V0SWRzOiBpZHMgfSk7XG4gIH07XG5cbiAgLyoqIERhdGEgc291cmNlIHBpY2tlciAqL1xuICBvbkRhdGFTb3VyY2VDaGFuZ2UgPSAodXNlRGF0YVNvdXJjZXM6IFVzZURhdGFTb3VyY2VbXSkgPT4ge1xuICAgIHRoaXMucHJvcHMub25TZXR0aW5nQ2hhbmdlKHsgaWQ6IHRoaXMucHJvcHMuaWQsIHVzZURhdGFTb3VyY2VzIH0pO1xuICAgIC8vIHJlc2V0IGF0dHJpYnV0ZSB3aGVuIERTIGNoYW5nZXNcbiAgICB0aGlzLnVwZGF0ZUNvbmZpZyh7IGF0dHJpYnV0ZUZpZWxkOiAnJyB9KTtcbiAgfTtcblxuICAvKiogQXR0cmlidXRlIGZpZWxkICh1c2VkIGZvciBzdW0vYXZnL21pbi9tYXgvZmlyc3Q7IGlnbm9yZWQgZm9yIGNvdW50KSAqL1xuICBvbkF0dHJpYnV0ZUZpZWxkQ2hhbmdlID0gKHNlbGVjdGVkOiBJTUZpZWxkU2NoZW1hW10pID0+IHtcbiAgICBjb25zdCBuYW1lID0gc2VsZWN0ZWQ/LlswXT8uamltdU5hbWUgfHwgJyc7XG4gICAgdGhpcy51cGRhdGVDb25maWcoeyBhdHRyaWJ1dGVGaWVsZDogbmFtZSB9KTtcbiAgfTtcblxuICAvKiogQWdncmVnYXRpb24gbWV0aG9kICovXG4gIG9uU3RhdE9wZXJhdGlvbkNoYW5nZSA9IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MU2VsZWN0RWxlbWVudD4pID0+IHtcbiAgICBjb25zdCBzdGF0ID0gZS50YXJnZXQudmFsdWUgYXMgJ2NvdW50JyB8ICdzdW0nIHwgJ2F2ZycgfCAnbWluJyB8ICdtYXgnIHwgJ2ZpcnN0JztcbiAgICAvLyBrZWVwIHJ1bnRpbWUgcGF0aCBpbiBzeW5jIChzb21lIGNvZGUgcmVhZHMgYWdncmVnYXRpb25NZXRob2QpXG4gICAgdGhpcy51cGRhdGVDb25maWcoeyBzdGF0T3BlcmF0aW9uOiBzdGF0LCBhZ2dyZWdhdGlvbk1ldGhvZDogc3RhdCB9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgdWRzUGxhaW4gPSB0b1BsYWluQXJyYXkodGhpcy5wcm9wcy51c2VEYXRhU291cmNlcyk7XG4gICAgY29uc3QgdWRzSW1tID0gdG9JbW11dGFibGVBcnJheSh1ZHNQbGFpbik7XG5cbiAgICBjb25zdCBjZmcgPSB0aGlzLnByb3BzLmNvbmZpZyB8fCB7fTtcbiAgICBjb25zdCBzdGF0T3BlcmF0aW9uOiBzdHJpbmcgPSBjZmcuc3RhdE9wZXJhdGlvbiB8fCAnY291bnQnO1xuICAgIGNvbnN0IGF0dHJpYnV0ZVNlbGVjdGVkID0gY2ZnLmF0dHJpYnV0ZUZpZWxkID8gSW1tdXRhYmxlKFtjZmcuYXR0cmlidXRlRmllbGRdKSA6IEltbXV0YWJsZShbXSk7XG5cbiAgICBjb25zdCBsYWJlbFRleHQ6IHN0cmluZyA9IGNmZy5sYWJlbCA/PyAnJztcbiAgICBjb25zdCB1bml0VGV4dDogc3RyaW5nID0gY2ZnLnVuaXRMYWJlbCA/PyAnJztcbiAgICBjb25zdCBleGNsdWRlWmVyb1ZhbHVlczogYm9vbGVhbiA9ICEhY2ZnLmV4Y2x1ZGVaZXJvVmFsdWVzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0yXCI+XG4gICAgICAgIHsvKiBNYXAgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItM1wiPlxuICAgICAgICAgIDxMYWJlbCBjbGFzc05hbWU9XCJkLWJsb2NrIG1iLTFcIj7QpdCw0YDQuNGC0LAg0LLQuNC00LbQtdGC0LjQvdC4INGC0LDQvdC70LDQvdCzOjwvTGFiZWw+XG4gICAgICAgICAgPE1hcFdpZGdldFNlbGVjdG9yXG4gICAgICAgICAgICB1c2VNYXBXaWRnZXRJZHM9e3RoaXMucHJvcHMudXNlTWFwV2lkZ2V0SWRzfVxuICAgICAgICAgICAgb25TZWxlY3Q9e3RoaXMub25NYXBXaWRnZXRTZWxlY3RlZH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7LyogRGF0YSBzb3VyY2UgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItM1wiPlxuICAgICAgICAgIDxMYWJlbCBjbGFzc05hbWU9XCJkLWJsb2NrIG1iLTFcIj7QnNCw0YrQu9GD0LzQvtGCINC80LDQvdCx0LDQuNC90Lgg0YLQsNC90LvQsNC90LM6PC9MYWJlbD5cbiAgICAgICAgICA8RGF0YVNvdXJjZVNlbGVjdG9yXG4gICAgICAgICAgICBtdXN0VXNlRGF0YVNvdXJjZVxuICAgICAgICAgICAgd2lkZ2V0SWQ9e3RoaXMucHJvcHMuaWR9XG4gICAgICAgICAgICB0eXBlcz17SW1tdXRhYmxlKFtEYXRhU291cmNlVHlwZXMuRmVhdHVyZUxheWVyXSl9XG4gICAgICAgICAgICBoaWRlRGF0YVZpZXdcbiAgICAgICAgICAgIHVzZURhdGFTb3VyY2VzPXt1ZHNJbW19XG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkRhdGFTb3VyY2VDaGFuZ2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIEFnZ3JlZ2F0aW9uICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTNcIj5cbiAgICAgICAgICA8TGFiZWwgY2xhc3NOYW1lPVwiZC1ibG9jayBtYi0xXCI+0rLQuNGB0L7QsSDRgtGD0YDQuCAoQWdncmVnYXRpb24pOjwvTGFiZWw+XG4gICAgICAgICAgPFNlbGVjdCB2YWx1ZT17c3RhdE9wZXJhdGlvbn0gb25DaGFuZ2U9e3RoaXMub25TdGF0T3BlcmF0aW9uQ2hhbmdlfT5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJjb3VudFwiPmNvdW50PC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwic3VtXCI+c3VtPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiYXZnXCI+YXZnPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibWluXCI+bWluPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibWF4XCI+bWF4PC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZmlyc3RcIj5maXJzdDwvb3B0aW9uPlxuICAgICAgICAgIDwvU2VsZWN0PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1tdXRlZCBtdC0xXCIgc3R5bGU9e3sgZm9udFNpemU6IDEyIH19PlxuICAgICAgICAgICAgPGk+0K3RgdC70LDRgtC80LA6PC9pPiA8Y29kZT5jb3VudDwvY29kZT4g0LDRgtGA0LjQsdGD0YLQvdC4INC40L3QutC+0YAg0Y3RgtCw0LTQuCDigJQg0LHQsNGA0YfQsCDQvtCx0YrQtdC60YLQu9Cw0YAg0YHQvtC90LjQvdC4INKb0LDQudGC0LDRgGHQtNC4LlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7LyogQXR0cmlidXRlIChjb3VudCBpZ25vcmVzIHRoaXM7IG90aGVycyByZXF1aXJlIGl0KSAqL31cbiAgICAgICAge3Vkc1BsYWluLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItM1wiPlxuICAgICAgICAgICAgPExhYmVsIGNsYXNzTmFtZT1cImQtYmxvY2sgbWItMVwiPtCQ0YLRgNC40LHRg9GCINC80LDQudC00L7QvSAoc3VtL2F2Zy9taW4vbWF4L2ZpcnN0INGD0YfRg9C9KTo8L0xhYmVsPlxuICAgICAgICAgICAgPEZpZWxkU2VsZWN0b3JcbiAgICAgICAgICAgICAgdXNlRGF0YVNvdXJjZXM9e3Vkc0ltbX1cbiAgICAgICAgICAgICAgc2VsZWN0ZWRGaWVsZHM9e2F0dHJpYnV0ZVNlbGVjdGVkfVxuICAgICAgICAgICAgICBpc011bHRpcGxlPXtmYWxzZX1cbiAgICAgICAgICAgICAgaXNEYXRhU291cmNlRHJvcERvd25IaWRkZW49e3Vkc1BsYWluLmxlbmd0aCA9PT0gMX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25BdHRyaWJ1dGVGaWVsZENoYW5nZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG5cbiAgICAgICAgey8qIFRleHQgYmVmb3JlIChsYWJlbC90aXRsZSkgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItM1wiPlxuICAgICAgICAgIDxMYWJlbCBjbGFzc05hbWU9XCJkLWJsb2NrIG1iLTFcIj7QnNCw0YLQvSAo0pvQuNC50LzQsNGC0LTQsNC9INC+0LvQtNC40L0pOjwvTGFiZWw+XG4gICAgICAgICAgPFRleHRJbnB1dFxuICAgICAgICAgICAgdmFsdWU9e2xhYmVsVGV4dH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy51cGRhdGVDb25maWcoeyBsYWJlbDogKGUudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlIH0pfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLQnNCw0YHQsNC70LDQvTogQnV6aWxpc2hcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiBUZXh0IGFmdGVyICh1bml0KSAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0zXCI+XG4gICAgICAgICAgPExhYmVsIGNsYXNzTmFtZT1cImQtYmxvY2sgbWItMVwiPtCc0LDRgtC9ICjSm9C40LnQvNCw0YLQtNCw0L0g0LrQtdC50LjQvSwg0LHQuNGA0LvQuNC6KTo8L0xhYmVsPlxuICAgICAgICAgIDxUZXh0SW5wdXRcbiAgICAgICAgICAgIHZhbHVlPXt1bml0VGV4dH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy51cGRhdGVDb25maWcoeyB1bml0TGFiZWw6IChlLnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSB9KX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0YLQsCAvINCz0LAgLyBzbydtIC4uLlwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIEV4Y2x1ZGUgemVyb3MgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItMiBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgPFN3aXRjaFxuICAgICAgICAgICAgY2hlY2tlZD17ZXhjbHVkZVplcm9WYWx1ZXN9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XG4gICAgICAgICAgICAgIHRoaXMudXBkYXRlQ29uZmlnKHsgZXhjbHVkZVplcm9WYWx1ZXM6IChlLnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS5jaGVja2VkIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtbC0yXCI+0prQuNC50LzQsNGC0LggMCDQsdGe0LvQs9Cw0L0g0ZHQt9GD0LLQu9Cw0YDQvdC4INKz0LjRgdC+0LHQtNCw0L0g0YfQuNKb0LDRgNC40Yg8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG4gZXhwb3J0IGZ1bmN0aW9uIF9fc2V0X3dlYnBhY2tfcHVibGljX3BhdGhfXyh1cmwpIHsgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB1cmwgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==