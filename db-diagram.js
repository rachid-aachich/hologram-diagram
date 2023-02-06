(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["DBDiagram"] = factory();
	else
		root["DBDiagram"] = factory();
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

/***/ "../../../../../../../private/var/folders/db/2f7l1zlx1r94k73gsw8sz04h0000gn/T/@krobkrong/db-diagram/resources-utilities/cache/resources/icons/icons.d.js":
/*!*******************************************************************************************************************************************!*\
  !*** /private/var/folders/db/2f7l1zlx1r94k73gsw8sz04h0000gn/T/@krobkrong/db-diagram/resources-utilities/cache/resources/icons/icons.d.js ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


         
         module.exports = {"foreignKeyIcon":"foreignKeyIcon","many":"many","one":"one","primaryKeyIcon":"primaryKeyIcon","tableIcon":"tableIcon","uniqueKeyIcon":"uniqueKeyIcon","passwordIcon":"passwordIcon"}
      

/***/ }),

/***/ "../../../../../../../private/var/folders/db/2f7l1zlx1r94k73gsw8sz04h0000gn/T/@krobkrong/db-diagram/resources-utilities/cache/resources/styles/style-dark.scss.js":
/*!****************************************************************************************************************************************************!*\
  !*** /private/var/folders/db/2f7l1zlx1r94k73gsw8sz04h0000gn/T/@krobkrong/db-diagram/resources-utilities/cache/resources/styles/style-dark.scss.js ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


         
         module.exports = {"dbdgWorkspaceBackgroun":"--dbdg-workspace-backgroun","dbdgTableIconColor":"--dbdg-table-icon-color","dbdgTableSelectedColor":"--dbdg-table-selected-color","dbdgTableTitleColor":"--dbdg-table-title-color","dbdgTableTitleFontFamily":"--dbdg-table-title-font-family","dbdgTableTitleFontSize":"--dbdg-table-title-font-size","dbdgTableTitleFontStyle":"--dbdg-table-title-font-style","dbdgTableTitleFontWeight":"--dbdg-table-title-font-weight","dbdgTableHeaderColor":"--dbdg-table-header-color","dbdgTableBackgroundColor":"--dbdg-table-background-color","dbdgTableFooterColor":"--dbdg-table-footer-color","dbdgTableFooterTextColor":"--dbdg-table-footer-text-color","dbdgTableFooterTextFontFamily":"--dbdg-table-footer-text-font-family","dbdgTableFooterTextFontSize":"--dbdg-table-footer-text-font-size","dbdgTableFooterTextFontStyle":"--dbdg-table-footer-text-font-style","dbdgTableFooterTextFontWeight":"--dbdg-table-footer-text-font-weight","dbdgFieldTextNameColor":"--dbdg-field-text-name-color","dbdgFieldTextNameFontFamily":"--dbdg-field-text-name-font-family","dbdgFieldTextNameFontSize":"--dbdg-field-text-name-font-size","dbdgFieldTextNameFontStyle":"--dbdg-field-text-name-font-style","dbdgFieldTextNameFontWeight":"--dbdg-field-text-name-font-weight","dbdgFieldTextPrimaryColor":"--dbdg-field-text-primary-color","dbdgFieldIconPrimaryColor":"--dbdg-field-icon-primary-color","dbdgFieldTextPrimaryFontFamily":"--dbdg-field-text-primary-font-family","dbdgFieldTextPrimaryFontSize":"--dbdg-field-text-primary-font-size","dbdgFieldTextPrimaryFontStyle":"--dbdg-field-text-primary-font-style","dbdgFieldTextPrimaryFontWeight":"--dbdg-field-text-primary-font-weight","dbdgFieldTextUniqueColor":"--dbdg-field-text-unique-color","dbdgFieldIconUniqueColor":"--dbdg-field-icon-unique-color","dbdgFieldTextUniqueFontFamily":"--dbdg-field-text-unique-font-family","dbdgFieldTextUniqueFontSize":"--dbdg-field-text-unique-font-size","dbdgFieldTextUniqueFontStyle":"--dbdg-field-text-unique-font-style","dbdgFieldTextUniqueFontWeight":"--dbdg-field-text-unique-font-weight","dbdgFieldTextForeignColor":"--dbdg-field-text-foreign-color","dbdgFieldIconForeignColor":"--dbdg-field-icon-foreign-color","dbdgFieldTextForeignFontFamily":"--dbdg-field-text-foreign-font-family","dbdgFieldTextForeignFontSize":"--dbdg-field-text-foreign-font-size","dbdgFieldTextForeignFontStyle":"--dbdg-field-text-foreign-font-style","dbdgFieldTextForeignFontWeight":"--dbdg-field-text-foreign-font-weight","dbdgFieldTextTypeColor":"--dbdg-field-text-type-color","dbdgFieldTextTypeFontFamily":"--dbdg-field-text-type-font-family","dbdgFieldTextTypeFontSize":"--dbdg-field-text-type-font-size","dbdgFieldTextTypeFontStyle":"--dbdg-field-text-type-font-style","dbdgFieldTextTypeFontWeight":"--dbdg-field-text-type-font-weight","dbdgRelationConnectorColor":"--dbdg-relation-connector-color","dbdgRelationLineColor":"--dbdg-relation-line-color","dbdgRelationLineWidth":"--dbdg-relation-line-width","dbdgRelationWeakLineWidth":"--dbdg-relation-weak-line-width","dbdgRelationWeakLineCap":"--dbdg-relation-weak-line-cap","dbdgRelationWeakLineJoin":"--dbdg-relation-weak-line-join","dbdgRelationWeakLineDashArray":"--dbdg-relation-weak-line-dash-array","dbdg":"dbdg","move":"move","zoom":"zoom","zoomIn":"zoom-in","zoomOut":"zoom-out","selected":"selected","wrapped":"wrapped","header":"header","footer":"footer","tableBackground":"table-background","down":"down","tableIcon":"table-icon","title":"title","fieldTextName":"field-text-name","fieldTextType":"field-text-type","primary":"primary","unique":"unique","foreign":"foreign","cursorMove":"cursor-move","relation":"relation","line":"line","weak":"weak","one":"one","many":"many"}
      

/***/ }),

/***/ "./src/@extensions/strings.ts":
/*!************************************!*\
  !*** ./src/@extensions/strings.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Remove double quote if available.
 * @param str string to remove double quote.
 */
function noQuote(str) {
    var txt = str.trim();
    if (txt.startsWith("\"")) {
        txt = str.substr(1);
    }
    if (txt.endsWith("\"")) {
        txt = str.substr(0, txt.length - 1);
    }
    return txt;
}
exports.noQuote = noQuote;


/***/ }),

/***/ "./src/elements/base.ts":
/*!******************************!*\
  !*** ./src/elements/base.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var diagram_1 = __webpack_require__(/*! @db-diagram/elements/diagram */ "./src/elements/diagram.ts");
var attributes_1 = __webpack_require__(/*! @db-diagram/elements/utils/attributes */ "./src/elements/utils/attributes.ts");
/**
 * Base class represent diagram super class element.
 */
var Base = /** @class */ (function () {
    /**
     * Create new diagram element.
     * @param element native svg element
     * @param attr native svg element's attribute
     */
    function Base(element, attr) {
        this.ne = element;
        this.attr = attr;
        this.ne.__dbref = this;
        attributes_1.applyAttribute(this.ne, attr);
    }
    Object.defineProperty(Base, "namespace", {
        /**
         * Return standard svg namespace.
         */
        get: function () {
            return {
                xmlns: "http://www.w3.org/2000/svg",
            };
        },
        enumerable: true,
        configurable: true
    });
    Base.createElement = function (qn) {
        return document.createElementNS(this.namespace.xmlns, qn);
    };
    /**
     * Attach element to an HTML element or Diagram. If input value is a string then it's regards as an id.
     * @param it a string represent id or an HTML element or the diagram object.
     */
    Base.prototype.attach = function (it) {
        if (it) {
            var el = void 0;
            if (it instanceof diagram_1.Diagram) {
                el = it.holder;
            }
            else if (it instanceof HTMLElement) {
                el = it;
            }
            else if (it.indexOf("#") >= 0) {
                el = document.querySelector(it);
            }
            else {
                el = document.getElementById(it);
            }
            if (el) {
                el.appendChild(this.ne);
                this.onAttached();
            }
        }
        return this;
    };
    /**
     * Remove the element from it parent.
     */
    Base.prototype.detach = function () {
        if (this.ne.parentElement) {
            this.ne.parentElement.removeChild(this.ne);
            this.onDetached();
        }
        return this;
    };
    /**
     * Bring the current element to front or top of other element.
     */
    Base.prototype.front = function () {
        if (this.ne.parentElement) {
            this.ne.parentElement.appendChild(this.ne);
        }
        return this;
    };
    Object.defineProperty(Base.prototype, "native", {
        /**
         * Return native svg element.
         */
        get: function () { return this.ne; },
        enumerable: true,
        configurable: true
    });
    /**
     * Fire after element is attached to it's parent.
     */
    Base.prototype.onAttached = function () { return this; };
    /**
     * Fire after element is detached from it's parent.
     */
    Base.prototype.onDetached = function () { return this; };
    return Base;
}());
exports.Base = Base;


/***/ }),

/***/ "./src/elements/diagram.ts":
/*!*********************************!*\
  !*** ./src/elements/diagram.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var base_1 = __webpack_require__(/*! @db-diagram/elements/base */ "./src/elements/base.ts");
var pointer_1 = __webpack_require__(/*! @db-diagram/elements/pointer */ "./src/elements/pointer.ts");
var table_1 = __webpack_require__(/*! @db-diagram/elements/table */ "./src/elements/table.ts");
var attributes_1 = __webpack_require__(/*! @db-diagram/elements/utils/attributes */ "./src/elements/utils/attributes.ts");
var panzoom_1 = __webpack_require__(/*! @db-diagram/event/panzoom */ "./src/event/panzoom.ts");
var pref_1 = __webpack_require__(/*! @db-diagram/preference/pref */ "./src/preference/pref.ts");
var elements_1 = __webpack_require__(/*! @db-diagram/shares/elements */ "./src/shares/elements.ts");
/**
 * Database diagram class.
 */
var Diagram = /** @class */ (function (_super) {
    __extends(Diagram, _super);
    /**
     * Create diagram object.
     */
    function Diagram(attr, options) {
        if (attr === void 0) { attr = {}; }
        var _this = _super.call(this, elements_1.Visualization.createSvgRootElement(), (function (a) {
            a.viewBox = attributes_1.ApplyViewBox(a.viewBox);
            return a;
        })(attr)) || this;
        _this.tables = [];
        _this.panEnable = false;
        _this.zoomEnable = false;
        _this.zoomLevel = 1;
        // use to track wheel event trigger time spent.
        _this.lastWheelEventTime = 0;
        /** use to prevent dealock call loop */
        _this.inAction = false;
        _this.diagramOptions = options || {};
        if (attr && attr.viewBox) {
            _this.viewBoxData = attr.viewBox;
        }
        else {
            elements_1.onDomReady(function () { var _ = _this.viewBox; });
        }
        _this.diagramHolder = base_1.Base.createElement("g");
        _this.native.appendChild(_this.diagramHolder);
        var thisDiagram = _this;
        _this.tableSelectionChange = function (selected) {
            if (selected) {
                thisDiagram.onTableSelected(this);
            }
        };
        _this.clickEvent(true);
        _this.pannable(true);
        _this.zoomable(true);
        _this.native.addEventListener(panzoom_1.PanZoomEventType.onPanZoomBegin, function (evt) { return _this.onPanZoomStart(evt); });
        _this.native.addEventListener(panzoom_1.PanZoomEventType.onPanZoomMove, function (evt) { return _this.onPanZoomMove(evt); });
        _this.native.addEventListener(panzoom_1.PanZoomEventType.onPanZoomEnd, function (evt) { return _this.onPanZoomEnd(evt); });
        return _this;
    }
    Object.defineProperty(Diagram.prototype, "viewBox", {
        /**
         * Return current ViewBox of the diagram.
         */
        get: function () {
            if (!this.viewBoxData) {
                var domRect = this.native.getBoundingClientRect();
                this.viewBoxData = attributes_1.ApplyViewBox({
                    height: this.native.height.baseVal.unitType === 2 ? domRect.height : this.native.height.baseVal.value,
                    minX: this.native.x.baseVal.value,
                    minY: this.native.y.baseVal.value,
                    width: this.native.width.baseVal.unitType === 2 ? domRect.width : this.native.width.baseVal.value,
                });
            }
            return this.viewBoxData;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Diagram.prototype, "visualization", {
        /**
         * Return a Visualization object that bound to current diagram.
         */
        get: function () {
            return elements_1.Visualization.getInstance(this.native);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Diagram.prototype, "preference", {
        /**
         * Return a preference that bound to current diagram.
         */
        get: function () {
            if (!this.pref) {
                this.pref = new pref_1.Preference(this.visualization);
            }
            return this.pref;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Diagram.prototype, "holder", {
        /**
         * Return group element that contain all database diagram such table, relationship ...etc
         */
        get: function () {
            return this.diagramHolder;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Diagram.prototype, "tableCount", {
        /**
         * Return number of table in the diagram.
         */
        get: function () {
            return this.tables ? this.tables.length : 0;
        },
        enumerable: true,
        configurable: true
    });
    Diagram.prototype.x = function () {
        throw new Error("x axis value is not accessible or assignable for Diagram object");
    };
    Diagram.prototype.y = function () {
        throw new Error("y axis value is not accessible or assignable for Diagram object");
    };
    /**
     * Override parent object to initialize view box as well as other options value such as
     * minimum and maximum zoom.
     *
     * @param it an HTML ELement or HTML Element id.
     */
    Diagram.prototype.attach = function (it) {
        var _this = this;
        _super.prototype.attach.call(this, it);
        this.viewBoxData = undefined;
        elements_1.onDomReady(function () {
            var _ = _this.viewBox;
            _this.diagramOptions.minZoom = _this.diagramOptions.minZoom || _this.preference.diagram.minimumZoom;
            _this.diagramOptions.maxZoom = _this.diagramOptions.maxZoom || _this.preference.diagram.maximumZoom;
            _this.diagramOptions.showMinimap = _this.diagramOptions.showMinimap || _this.preference.diagram.showMinimap;
            _this.diagramOptions.showZoom = _this.diagramOptions.showZoom || _this.preference.diagram.showZoom;
        });
        return this;
    };
    /**
     * Enable or disable drag event on diagram svg.
     * @param enable boolean value
     */
    Diagram.prototype.pannable = function (enable) {
        if (this.panEnable !== enable) {
            this.panEnable = enable;
            this.dragEvent(enable);
        }
        return this;
    };
    /**
     * Return true if diagram is draggable otherwise false.
     */
    Diagram.prototype.isPannable = function () {
        return this.panEnable;
    };
    /**
     * Enable or disable zoom on diagram.
     * @param enable boolean value
     */
    Diagram.prototype.zoomable = function (enable) {
        if (this.zoomEnable !== enable) {
            this.zoomEnable = enable;
            if (!this.zoomListener) {
                this.zoomListener = new panzoom_1.ZoomEventListener(this.native);
            }
            if (this.zoomEnable) {
                this.zoomListener.register();
            }
            else {
                this.zoomListener.unregister();
            }
        }
        return this;
    };
    /**
     * Return true if zoom is enable otherwise false is returned.
     */
    Diagram.prototype.isZoomable = function () {
        return this.zoomEnable;
    };
    Object.defineProperty(Diagram.prototype, "zoom", {
        /**
         * Get current zoom level.
         */
        get: function () {
            return this.zoomLevel;
        },
        /**
         * Set zoom level.
         * @param level zoom level.
         */
        set: function (level) {
            if (this.zoomEnable) {
                this.setZoom(level);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Set zoom level with an additional point where zoom should focus on.
     * By default, if point is not provided then the middle point of diagram is used.
     * @param level zoom level.
     * @param point zoom's focus point.
     */
    Diagram.prototype.setZoom = function (level, point) {
        if (this.zoomEnable && this.zoomLevel !== level) {
            if (!point) {
                var bound = this.native.getBoundingClientRect();
                point = { x: bound.left + bound.width / 2, y: bound.top + bound.height / 2 };
            }
            this.setZoomAmount(level / this.zoomLevel, point, level);
        }
    };
    /**
     * Create or remove table from diagram. If searchOnly is set to true the diagram will not create
     * the table if it's not exist and instead it return undefined.
     *
     * @param options a table options
     * @param remove boolean indicate whether diagram should remove the table base on the given options.
     * @param searchOnly boolean indicate whether diagram should only search for table.
     */
    Diagram.prototype.table = function (options, remove, searchOnly) {
        if (remove === void 0) { remove = false; }
        if (searchOnly === void 0) { searchOnly = false; }
        if (this.inAction) {
            return undefined;
        }
        var tableIndex = -1;
        var table;
        for (var i = 0; i < this.tables.length; i++) {
            if (this.tables[i].name === options.name) {
                tableIndex = i;
                table = this.tables[i];
                break;
            }
        }
        // return undefine if table is not found.
        if (searchOnly) {
            return table;
        }
        // return removed table if it existed.
        if (remove && options) {
            if (tableIndex === -1) {
                return undefined;
            }
            this.tables.splice(tableIndex, 1);
            try {
                this.inAction = true;
                table.detach();
            }
            finally {
                this.inAction = false;
            }
            return table;
        }
        // table with the given name is already existed
        if (tableIndex > -1) {
            return table;
        }
        table = new table_1.Table(this, options).addSelectionListener(this.tableSelectionChange);
        this.tables.push(table);
        return table;
    };
    /**
     * Return a list of iterator of the table.
     */
    Diagram.prototype.allTables = function () {
        return this.tables.values();
    };
    /**
     * Return index of the table. If table not found then -1 is returned.
     * @param table table or table options.
     */
    Diagram.prototype.indexOf = function (input) {
        for (var i = 0; i < this.tables.length; i++) {
            if (this.tables[i].name === input.name) {
                return i;
            }
        }
        return -1;
    };
    /**
     * Clear remove all table from diagram. This also remove any relationship that connect to the table.
     */
    Diagram.prototype.clear = function () {
        var clone = this.tables.map(function (t) { return Object.assign({}, t); });
        this.tables.forEach(function (table) {
            table.detach();
        });
        this.tables = [];
        return clone;
    };
    /**
     * Call when a click event trigger on SVG Root diagram.
     * @param evt a pointer event.
     */
    Diagram.prototype.onClick = function (evt) {
        evt.event.preventDefault();
        evt.event.stopPropagation();
        this.tables.forEach(function (t) {
            t.select(false);
        });
    };
    /**
     * Call when user mouse click is down or touch down.
     */
    Diagram.prototype.onPointerDown = function () {
        this.native.classList.add(this.visualization.getStylesDts().move);
    };
    /**
     * Call when user mouse click is up or touch up.
     */
    Diagram.prototype.onPointerUp = function () {
        this.native.classList.remove(this.visualization.getStylesDts().move);
    };
    /**
     * Call when user mouse move or touch move.
     * @param evt Pointer move event.
     */
    Diagram.prototype.onDragMove = function (_) {
       /* if (this.diagramHolder.transform.baseVal.numberOfItems === 0) {
            var transform = this.rootSvg.createSVGTransformFromMatrix(this.transformMatrix);
            this.diagramHolder.transform.baseVal.appendItem(transform);
        }
        else {
            this.diagramHolder.transform.baseVal.getItem(0).setMatrix(this.transformMatrix);
        }*/
    };
    /**
     * Call when pan zoom or pin zoom by wheel event is started.
     * @param evt a custom event.
     */
    Diagram.prototype.onPanZoomStart = function (evt) {
        this.originalTransformMatrix = this.cloneTransformMatrix(this.transformMatrix);
        this.originalState = this.toSvgCoordinate(evt).matrixTransform(this.transformMatrix.inverse());
        this.native.classList.add(this.visualization.getStylesDts().zoom);
    };
    /**
     * Call when pan zoom or pin zoom by wheel event is ended.
     */
    Diagram.prototype.onPanZoomEnd = function (_) {
        this.originalState = undefined;
        this.originalTransformMatrix = undefined;
        this.lastWheelEventTime = 0;
        this.native.classList.remove(this.visualization.getStylesDts().zoom);
        this.native.classList.remove(this.visualization.getStylesDts().zoomIn);
        this.native.classList.remove(this.visualization.getStylesDts().zoomOut);
    };
    /**
     * Call when user is current pin zooom using either control key plus mouse wheel
     * or on touch pad devices with two finger gesture pan to zoom.
     */
    Diagram.prototype.onPanZoomMove = function (evt) {
        var wd = evt.detail;
        var delta = wd.deltaY || 1;
        var timeDelta = Date.now() - this.lastWheelEventTime;
        var divider = 3 + Math.max(0, 30 - timeDelta);
        this.lastWheelEventTime = Date.now();
        delta = -0.3 < delta && delta < 0.3 ?
            delta : ((delta > 0 ? 1 : -1) * Math.log(Math.abs(delta) + 10)) / divider;
        var zoomAmount = Math.pow(1 + 0.1, -1 * delta);
        if (zoomAmount > 1) {
            this.native.classList.add(this.visualization.getStylesDts().zoomIn);
        }
        else if (zoomAmount < 1) {
            this.native.classList.add(this.visualization.getStylesDts().zoomOut);
        }
        this.setZoomAmount(zoomAmount, { x: wd.clientX, y: wd.clientY });
    };
    /** Performe zoom matrix calculate */
    Diagram.prototype.setZoomAmount = function (amount, point, preciseZoomValue) {
        // no need to process, zoom reach minimum and maximum zoom already
        if ((amount < 1 && this.transformMatrix.a === this.diagramOptions.minZoom) ||
            (amount > 1 && this.transformMatrix.a === this.diagramOptions.maxZoom)) {
            return;
        }
        var inversedScreenCTM = this.rootSvg.getScreenCTM().inverse();
        var relativeMousePoint = this.toSvgCoordinate(point).matrixTransform(inversedScreenCTM);
        // align amount if zoom exceeded minimum and maximum zoom
        var nextScale = amount * this.transformMatrix.a;
        var fixToMinMax = false;
        if (nextScale < this.diagramOptions.minZoom) {
            nextScale = this.diagramOptions.minZoom;
            amount = this.transformMatrix.a / nextScale;
            fixToMinMax = true;
        }
        else if (nextScale > this.diagramOptions.maxZoom) {
            nextScale = this.diagramOptions.maxZoom;
            amount = this.transformMatrix.a / nextScale;
            fixToMinMax = true;
        }
        var relativePoint = relativeMousePoint.matrixTransform(this.transformMatrix.inverse());
        var modifier = this.rootSvg
            .createSVGMatrix()
            .translate(relativePoint.x, relativePoint.y)
            .scale(amount)
            .translate(-relativePoint.x, -relativePoint.y);
        this.transformMatrix = this.transformMatrix.multiply(modifier);
        if (fixToMinMax) {
            this.transformMatrix.a = nextScale;
            this.transformMatrix.d = nextScale;
        }
        else if (preciseZoomValue) {
            this.transformMatrix.a = preciseZoomValue;
            this.transformMatrix.d = preciseZoomValue;
        }
        this.zoomLevel = this.transformMatrix.a;
        if (this.diagramHolder.transform.baseVal.numberOfItems === 0) {
            var transform = this.rootSvg.createSVGTransformFromMatrix(this.transformMatrix);
            this.diagramHolder.transform.baseVal.appendItem(transform);
        }
        else {
            this.diagramHolder.transform.baseVal.getItem(0).setMatrix(this.transformMatrix);
        }
    };
    /**
     * Call when a table is being selected.
     */
    Diagram.prototype.onTableSelected = function (selected) {
        if (this.tables) {
            this.tables.forEach(function (table) {
                if (table !== selected) {
                    table.select(false);
                }
            });
        }
    };
	
    return Diagram;
}(pointer_1.Pointer));
exports.Diagram = Diagram;


/***/ }),

/***/ "./src/elements/pointer.ts":
/*!*********************************!*\
  !*** ./src/elements/pointer.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var base_1 = __webpack_require__(/*! @db-diagram/elements/base */ "./src/elements/base.ts");
var diagram_1 = __webpack_require__(/*! @db-diagram/elements/diagram */ "./src/elements/diagram.ts");
/**
 * Pointer class use to handle pointer event.
 */
var Pointer = /** @class */ (function (_super) {
    __extends(Pointer, _super);
    function Pointer(element, attr) {
        var _this = _super.call(this, element, attr) || this;
        // pointer properties
        _this.pointerState = 0;
        _this.clickRegistered = false;
        _this.dragRegistered = false;
        _this.inSmallRegion = true;
        _this.axisX = 0;
        _this.axisY = 0;
        Pointer.initilize();
        return _this;
    }
    // initialize Pointer Event callback
    Pointer.initilize = function () {
        if (Pointer.onPointerDown) {
            return;
        }
        // A callback event to handle event when touch down or mouse click.
        Pointer.onPointerDown = function (event) {
            var pointer = this.__dbref;
            if ((!pointer.dragRegistered && !pointer.clickEvent)) {
                return;
            }
            if (event.buttons > 1 || event.button !== 0) {
                // avoid right click
                return;
            }
            event.preventDefault();
            event.stopPropagation();
            pointer.pointerState = Pointer.POINTER_DOWN;
            pointer.originalTransformMatrix = pointer.cloneTransformMatrix(pointer.transformMatrix);
            pointer.originalState = pointer.toSvgCoordinate(event).matrixTransform(pointer.transformMatrix.inverse());
            if (!pointer.pEvt) {
                pointer.pEvt = {};
            }
            pointer.pEvt.point = pointer.originalState;
            pointer.pEvt.deltaX = 0;
            pointer.pEvt.deltaY = 0;
            pointer.pEvt.event = event;
            pointer.onPointerDown(pointer.pEvt);
            pointer.inSmallRegion = true;
            window.__dbref = pointer;
            window.addEventListener("pointermove", Pointer.onPointerMove);
        };
        // A callback event to handle event when touch move or mouse click move.
        Pointer.onPointerMove = function (event) {
            var pointer = (this.__dbref || window.__dbref);
            if (pointer.dragRegistered && (pointer.pointerState === Pointer.POINTER_DOWN ||
                pointer.pointerState === Pointer.POINTER_MOVE)) {
                event.preventDefault();
                event.stopPropagation();
                var svgPoint = pointer.toSvgCoordinate(event)
                    .matrixTransform(pointer.originalTransformMatrix.inverse());
                pointer.pEvt.event = event;
                pointer.pEvt.point = svgPoint;
                pointer.pEvt.deltaX = svgPoint.x - pointer.originalState.x;
                pointer.pEvt.deltaY = svgPoint.y - pointer.originalState.y;
                var delta = Math.max(Math.abs(pointer.pEvt.deltaX), Math.abs(pointer.pEvt.deltaY));
                // small movement is ignored and consider that as single click or tap.
                if (delta > Pointer.TOUCH_CLIK_SLOP) {
                    pointer.inSmallRegion = false;
                    if (!(pointer instanceof diagram_1.Diagram)) {
                        var parentMatrix = pointer.rootSvg.__dbref.transformMatrix;
                        pointer.transformMatrix = pointer.originalTransformMatrix
                            .multiply(parentMatrix.inverse())
                            .translate(pointer.pEvt.deltaX, pointer.pEvt.deltaY)
                            .multiply(parentMatrix);
                    }
                    else {
                        pointer.transformMatrix = pointer.originalTransformMatrix
                            .translate(pointer.pEvt.deltaX, pointer.pEvt.deltaY);
                    }
                    pointer.transformMatrix.e = Math.round(pointer.transformMatrix.e);
                    pointer.transformMatrix.f = Math.round(pointer.transformMatrix.f);
                    if (pointer.pointerState !== Pointer.POINTER_MOVE) {
                        pointer.pointerState = Pointer.POINTER_MOVE;
                        pointer.onDragStart(pointer.pEvt);
                    }
                    pointer.onDragMove(pointer.pEvt);
                }
            }
        };
        // A callback event to handle event when touch up or mouse click up.
        Pointer.onPointerUp = function (event) {
            var pointer = this.__dbref;
            if ((!pointer.dragRegistered && !pointer.clickRegistered) || pointer.pEvt === undefined) {
                return;
            }
            event.preventDefault();
            event.stopPropagation();
            pointer.pEvt.deltaX = 0;
            pointer.pEvt.deltaY = 0;
            pointer.pEvt.event = event;
            pointer.pEvt.point = pointer.toSvgCoordinate(event);
            if (pointer.inSmallRegion) {
                pointer.onClick(pointer.pEvt);
            }
            pointer.onDragEnd(pointer.pEvt);
            pointer.onPointerUp(pointer.pEvt);
            pointer.pointerState = Pointer.POINTER_UP;
            delete window.__dbref;
            window.removeEventListener("pointermove", Pointer.onPointerMove);
            pointer.pEvt = undefined;
            pointer.originalState = undefined;
            pointer.originalTransformMatrix = undefined;
        };
        // A callback event to handle event when the pointer event is abort.
        Pointer.onPointerAbort = function (event) {
            var pointer = this.__dbref;
            if ((!pointer.dragRegistered && !pointer.clickRegistered) || pointer.pEvt === undefined) {
                return;
            }
            event.preventDefault();
            event.stopPropagation();
            pointer.pEvt.deltaX = 0;
            pointer.pEvt.deltaY = 0;
            pointer.pEvt.event = event;
            pointer.pEvt.point = pointer.toSvgCoordinate(event);
            pointer.onDragAbort(pointer.pEvt);
            delete window.__dbref;
            window.removeEventListener("pointermove", Pointer.onPointerMove);
            pointer.pEvt = undefined;
            pointer.originalState = undefined;
            pointer.originalTransformMatrix = undefined;
        };
    };
    /**
     * Attach the current object to a diagram or HTML Element.
     */
    Pointer.prototype.attach = function (id) {
        if (id instanceof diagram_1.Diagram) {
            this.rootSvg = id.native;
        }
        else if (this.native instanceof SVGSVGElement) {
            this.rootSvg = this.native;
        }
        if (this.rootSvg) {
            this.transformMatrix = this.rootSvg.createSVGMatrix();
            if (this.native.hasAttribute("transform")) {
                var transform = this.native.getAttribute("transform").trim();
                var index = transform.indexOf(",");
                var x = +transform.substring(transform.indexOf("("), index).trim();
                var y = +transform.substring(index + 1, transform.indexOf(")")).trim();
                this.transformMatrix = this.transformMatrix.translate(x, y);
            }
        }
        return _super.prototype.attach.call(this, id);
    };
    Pointer.prototype.x = function (x, svg) {
        if (svg === void 0) { svg = false; }
        if (typeof x === "boolean") {
            svg = x;
            x = undefined;
        }
        if (x === undefined) {
            return svg ? this.transformMatrix.e : this.axisX;
        }
        // do not update y when pointer is down or move
        if (this.pointerState === Pointer.POINTER_DOWN || this.pointerState === Pointer.POINTER_MOVE) {
            return this;
        }
        if (svg) {
            this.axisX = this.toDomCoordinate({ x: x, y: this.transformMatrix.f }).x;
            this.transformMatrix.e = x;
        }
        else {
            this.axisX = x;
            this.transformMatrix.e = this.toSvgCoordinate({ x: x, y: this.axisY }).x;
        }
        this.updateTransform();
        this.onPositionChange({ x: x, y: this.axisY });
        return this;
    };
    Pointer.prototype.y = function (y, svg) {
        if (svg === void 0) { svg = false; }
        if (typeof y === "boolean") {
            svg = y;
            y = undefined;
        }
        if (y === undefined) {
            return svg ? this.transformMatrix.f : this.axisY;
        }
        // do not update y when pointer is down or move
        if (this.pointerState === Pointer.POINTER_DOWN || this.pointerState === Pointer.POINTER_MOVE) {
            return this;
        }
        if (svg) {
            this.axisY = this.toDomCoordinate({ x: this.transformMatrix.e, y: y }).y;
            this.transformMatrix.f = y;
        }
        else {
            this.axisY = y;
            this.transformMatrix.f = this.toSvgCoordinate({ x: this.axisX, y: y }).y;
        }
        this.updateTransform();
        this.onPositionChange({ x: this.axisX, y: y });
        return this;
    };
    /**
     * Convert dom coordinate to svg coordinate.
     * @param evt a pointer object or a pointer event or a custom event
     */
    Pointer.prototype.toSvgCoordinate = function (evt) {
        if (!this.rootSvg) {
            throw new Error("Element have not attached to parent.");
        }
        var point = this.rootSvg.createSVGPoint();
        if (evt instanceof PointerEvent) {
            point.x = evt.clientX;
            point.y = evt.clientY;
        }
        else if (evt instanceof CustomEvent) {
            var we = evt.detail;
            point.x = we.clientX;
            point.y = we.clientY;
        }
        else {
            point.x = evt.x;
            point.y = evt.y;
        }
        return point.matrixTransform(this.rootSvg.getScreenCTM().inverse());
    };
    /**
     * Convert svg coordinate to dom coordinate.
     * @param point SVG Point or a Point.
     */
    Pointer.prototype.toDomCoordinate = function (point) {
        if (!this.rootSvg) {
            throw new Error("Element have not attached to parent.");
        }
        var p = this.rootSvg.createSVGPoint();
        p.x = point.x;
        p.y = point.y;
        return p.matrixTransform(this.native.getCTM());
    };
    /**
     * Create a new transform matrix from the given m matrix.
     * @param m DOM Matrix.
     */
    Pointer.prototype.cloneTransformMatrix = function (m) {
        if (!this.rootSvg) {
            throw new Error("Element have not attached to parent.");
        }
        var nm = this.rootSvg.createSVGMatrix();
        nm.a = m.a;
        nm.b = 0;
        nm.c = 0;
        nm.d = m.d;
        nm.e = m.e;
        nm.f = m.f;
        return nm;
    };
    /**
     * Register or unregister drag event.
     * @param register boolean indicate whether drag event is enabled.
     */
    Pointer.prototype.dragEvent = function (register) {
        if (this.dragRegistered !== register) {
            this.dragRegistered = register;
            if (!this.clickRegistered) {
                if (this.dragRegistered) {
                    this.native.addEventListener("pointercancel", Pointer.onPointerAbort);
                    this.native.addEventListener("pointerdown", Pointer.onPointerDown);
                    this.native.addEventListener("pointerup", Pointer.onPointerUp);
                }
                else {
                    this.native.removeEventListener("pointerdown", Pointer.onPointerDown);
                    this.native.removeEventListener("pointerup", Pointer.onPointerUp);
                    this.native.removeEventListener("pointercancel", Pointer.onPointerAbort);
                }
            }
            else {
                if (this.dragRegistered) {
                    this.native.addEventListener("pointercancel", Pointer.onPointerAbort);
                }
                else {
                    this.native.removeEventListener("pointercancel", Pointer.onPointerAbort);
                }
            }
        }
    };
    /**
     * Register or unregister click event.
     * @param register boolean indicate whether click event is enabled.
     */
    Pointer.prototype.clickEvent = function (register) {
        if (this.clickRegistered !== register) {
            this.clickRegistered = register;
            if (!this.dragRegistered) {
                if (this.clickRegistered) {
                    this.native.addEventListener("pointerdown", Pointer.onPointerDown);
                    this.native.addEventListener("pointerup", Pointer.onPointerUp);
                }
                else {
                    this.native.removeEventListener("pointerdown", Pointer.onPointerDown);
                    this.native.removeEventListener("pointerup", Pointer.onPointerUp);
                }
            }
        }
    };
    /**
     * Call when element a position has change. The given position is a DOM coordinate position.
     * If you have an SVG coordinate you must use method `toSvgCoordinate`.
     * @param p DOM coordinate change.
     */
    Pointer.prototype.onPositionChange = function (_) { return; };
    /**
     * Call when element is click
     * @param event pointer click or touch event.
     */
    Pointer.prototype.onClick = function (_) { return; };
    /**
     * Call when element has receive a pointer down event. This happen when user touch or mouse click
     * on the diagram native element.
     * @param event pointer event.
     */
    Pointer.prototype.onPointerDown = function (_) { return; };
    /**
     * Call when element has receive a pointer up event. This happen when user lift the finger or release
     * mouse click on the diagram native element.
     * @param event pointer event.
     */
    Pointer.prototype.onPointerUp = function (_) { return; };
    /**
     * Call when a drag event is detected from pointer move event.
     * @param event pointer event.
     */
    Pointer.prototype.onDragStart = function (_) { return; };
    /**
     * Call when user drag and move the element.
     * @param event pointer event.
     */
    Pointer.prototype.onDragMove = function (evt) {
        var domRect = this.toDomCoordinate({ x: this.transformMatrix.e, y: this.transformMatrix.f });
        this.axisX = domRect.x;
        this.axisY = domRect.y;
        this.updateTransform();
        this.onPositionChange({ x: evt.point.x, y: evt.point.y });
    };
    /**
     * Call when user stop moving element by lift the finger from a touch device or release mouse click
     * button on the diagram native element.
     * @param event pointer event
     */
    Pointer.prototype.onDragEnd = function (_) { return; };
    /**
     * Call when browser detected that the event is aborted.
     * @param event pointer event
     */
    Pointer.prototype.onDragAbort = function (_) { return; };
    /** perform transformation base value with a matrix */
    Pointer.prototype.updateTransform = function () {
        if (this.native.transform.baseVal.numberOfItems === 0) {
            var transform = this.rootSvg.createSVGTransformFromMatrix(this.transformMatrix);
            this.native.transform.baseVal.appendItem(transform);
        }
        else {
            this.native.transform.baseVal.getItem(0).setMatrix(this.transformMatrix);
        }
    };
    Pointer.POINTER_DOWN = 1;
    Pointer.POINTER_MOVE = 2;
    Pointer.POINTER_UP = 3;
    // distant consider as movement action.
    Pointer.TOUCH_CLIK_SLOP = 1;
    return Pointer;
}(base_1.Base));
exports.Pointer = Pointer;


/***/ }),

/***/ "./src/elements/relation.ts":
/*!**********************************!*\
  !*** ./src/elements/relation.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var base_1 = __webpack_require__(/*! @db-diagram/elements/base */ "./src/elements/base.ts");
var attributes_1 = __webpack_require__(/*! @db-diagram/elements/utils/attributes */ "./src/elements/utils/attributes.ts");
var elements_1 = __webpack_require__(/*! @db-diagram/shares/elements */ "./src/shares/elements.ts");
/**
 * Relation element represent relationship graphic between 2 table.
 */
var Relation = /** @class */ (function (_super) {
    __extends(Relation, _super);
    function Relation(parent, options) {
        var _this = _super.call(this, base_1.Base.createElement("g")) || this;
        _this.parent = parent;
        var visual = parent.visualization;
        var styles = visual.getStylesDts();
        var icons = visual.getIconsDts();
        _this.options = options;
        _this.options.line = _this.options.line || parent.preference.relationship.useStraightLine;
        attributes_1.applyAttribute(_this.native, { class: styles.relation });
        if (options.foreignField === undefined) {
            try {
                var pfield = options.primaryTable.primaryField();
                var tname = options.primaryTable.name.toLowerCase().replace(" ", "_");
                options.foreignField = {
                    foreign: true,
                    name: tname + "_" + pfield.name,
                    type: pfield.type,
                    typeRaw: pfield.typeRaw,
                    typeSize: pfield.typeSize,
                };
            }
            catch (e) {
                throw e;
            }
        }

        _this.foreignField = options.foreignField;
        if(!options.foreignFieldExists)
            _this.options.foreignTable.addField(options.foreignField);
        _this.options.primaryTable.primaryRelation(_this);
        _this.options.foreignTable.foreignRelation(_this, _this.foreignField);
        _this.path = base_1.Base.createElement("path");
        var clazz = styles.line;
        if (_this.options.weak) {
            clazz += " " + styles.weak;
        }
        _this.native.appendChild(attributes_1.applyAttribute(_this.path, { class: clazz }));
        if(options.type == "manytomany") {
            _this.many = elements_1.Visualization.createReferencePathIcon(icons.many);
            _this.smany = elements_1.Visualization.createReferencePathIcon(icons.many);
            _this.native.appendChild(attributes_1.applyAttribute(_this.many, { class: styles.many }));
            _this.native.appendChild(attributes_1.applyAttribute(_this.smany, { class: styles.many }));
        } else if(options.type == 'onetoone') {
            _this.many = elements_1.Visualization.createReferencePathIcon(icons.one);
            _this.pone = elements_1.Visualization.createReferencePathIcon(icons.one);
            _this.native.appendChild(attributes_1.applyAttribute(_this.many, { class: styles.one }));
            _this.native.appendChild(attributes_1.applyAttribute(_this.pone, { class: styles.one }));
        } else {
            _this.many = elements_1.Visualization.createReferencePathIcon(icons.many);
            _this.pone = elements_1.Visualization.createReferencePathIcon(icons.one);
            _this.native.appendChild(attributes_1.applyAttribute(_this.many, { class: styles.many }));
            _this.native.appendChild(attributes_1.applyAttribute(_this.pone, { class: styles.one }));
        }

        _this.options.foreignTable.front();
        _this.options.primaryTable.front();
        _this.render().attach(parent);
        return _this;
    }
    /**
     * Toggle visibiliy of the relationship.
     */
    Relation.prototype.visibility = function (visible) {
        var visibility = this.native.getAttribute("visibility");
        if (visible && visibility !== "visible") {
            attributes_1.applyAttribute(this.native, { visibility: "visible" });
        }
        else if (!visible && visibility !== "hidden") {
            attributes_1.applyAttribute(this.native, { visibility: "hidden" });
        }
        return this;
    };
    /**
     * Create path line data to connect 2 tables.
     */
    Relation.prototype.render = function () {
        var pBox = this.options.primaryTable.box();
        var fBox = this.options.foreignTable.box();
        var l1 = pBox.x;
        var l2 = fBox.x;
        var r1 = l1 + pBox.width;
        var r2 = l2 + fBox.width;
        var p1;
        var p2;
        var icons = this.parent.visualization.getIconsDts();
        var oneSize = this.parent.visualization.getIconsElementSize(icons.one);
        var oneMidY = (oneSize.height / 2);
        var manySize = this.parent.visualization.getIconsElementSize(icons.many);
        var manyMidY = (manySize.height / 2);
        var manyMidX = (manySize.width / 2);
        if (r1 < l2 || r2 < l1) { // in between table
            var pL = this.options.primaryTable.primaryFieldCoordinate();
            var fL = this.options.foreignTable.fieldCoordinate(this.options.foreignTable.fieldIndex(this.foreignField));
            if (Math.abs(r1 - l2) < Math.abs(r2 - l1)) {
                p1 = pL.right;
                p2 = fL.left;
                if(this.options.type == "manytomany")
                    attributes_1.applyAttribute(this.smany, { transform: "translate(" + p1.x + ", " + (p1.y - oneMidY) + ") rotate(180, 5, 4)" });
                else
                    attributes_1.applyAttribute(this.pone, { transform: "translate(" + p1.x + ", " + (p1.y - oneMidY) + ")" });
                
                if(this.options.type == "onetoone")
                    attributes_1.applyAttribute(this.many, { transform: "translate(" + (p2.x - manySize.width) + ", " + (p2.y - manyMidY + 4) + ")" });
                else
                    attributes_1.applyAttribute(this.many, { transform: "translate(" + (p2.x - manySize.width) + ", " + (p2.y - manyMidY) + ")" });
            } else {
                p1 = fL.right;
                p2 = pL.left;
                if(this.options.type == "manytomany") {
                    attributes_1.applyAttribute(this.smany, {
                        transform: "translate(" + (p2.x - manySize.width) + ", " + (p2.y - manyMidY) + ")",
                    });
                    attributes_1.applyAttribute(this.many, {
                        transform: "translate(" + p1.x + ", " + (p1.y - manyMidY) + ") rotate(180, " + manyMidX + ", " + manyMidY + ")",
                    });
                } else if(this.options.type == "onetoone") {
                    attributes_1.applyAttribute(this.many, {
                        transform: "translate(" + p1.x + ", " + (p1.y - manyMidY + 4) + ")",
                    });
                    attributes_1.applyAttribute(this.pone, { transform: "translate(" + (p2.x - oneSize.width) + ", " + (p2.y - oneMidY) + ")" });
                } else {
                    attributes_1.applyAttribute(this.pone, { transform: "translate(" + (p2.x - oneSize.width) + ", " + (p2.y - oneMidY) + ")" });
                    attributes_1.applyAttribute(this.many, {
                        transform: "translate(" + p1.x + ", " + (p1.y - manyMidY) + ") rotate(180, " + manyMidX + ", " + manyMidY + ")",
                    });
                }
            }
            var str = this.options.line ?
                this.generateLineCurveInBetween(p1, p2) : this.generateCurveInBetween(p1, p2);
            attributes_1.applyAttribute(this.path, { d: str });
        } else {
            var pL = this.options.primaryTable.primaryFieldCoordinate();
            var fL = this.options.foreignTable.fieldCoordinate(this.options.foreignTable.fieldIndex(this.foreignField));
            var right = false;
            if (Math.abs(l1 - l2) < Math.abs(r1 - r2)) {
                p1 = pL.right;
                p2 = fL.right;
                right = true;
                attributes_1.applyAttribute(this.pone, { transform: "translate(" + p1.x + ", " + (p1.y - oneMidY) + ")" });
                if(this.options.type == "onetoone")
                    attributes_1.applyAttribute(this.many, { transform: "translate(" + p2.x + ", " + (p2.y - manyMidY - 4) + ") rotate(180, " + manyMidX + ", " + manyMidY + ")"});
                else
                    attributes_1.applyAttribute(this.many, { transform: "translate(" + p2.x + ", " + (p2.y - manyMidY) + ") rotate(180, " + manyMidX + ", " + manyMidY + ")"});
            } else {
                p1 = pL.left;
                p2 = fL.left;
                if(this.options.type == "manytomany") {
                    attributes_1.applyAttribute(this.smany, {
                        transform: "translate(" + (p1.x - manySize.width) + ", " + (p1.y - manyMidY) + ")",
                    });
                } else {
                    attributes_1.applyAttribute(this.pone, { transform: "translate(" + (p1.x - oneSize.width) + ", " + (p1.y - oneMidY) + ")" });
                }
                attributes_1.applyAttribute(this.many, { transform: "translate(" + (p2.x - manySize.width) + ", " + (p2.y - manyMidY) + ")" });
            }
            var str = this.options.line ?
                this.generateLineCurveSameSide(p1, p2, right) : this.generateCurveSameSide(p1, p2, right);
            attributes_1.applyAttribute(this.path, { d: str });
        }
        return this;
    };
    /**
     * Attach current relation to the diagram.
     * @param it
     */
    Relation.prototype.attach = function (it) {
        return _super.prototype.attach.call(this, it);
    };
    /** generate curve line in between table */
    Relation.prototype.generateCurveInBetween = function (p1, p2) {
        var half = Math.floor((p2.x - p1.x) / 2);
        return "M " + p1.x + " " + p1.y + " L" + (p1.x + 10) + " " + p1.y + " C" + (p1.x + half) + " " + p1.y + " " + (p2.x - half) + " " + p2.y + " " + (p2.x - 10) + " " + p2.y;
    };
    /** generate curve line when table align vertical or overlap on each other. */
    Relation.prototype.generateCurveSameSide = function (p1, p2, right) {
        var x;
        var dx;
        if (right) {
            x = Math.max(p2.x, p1.x) + 50;
            dx = 10;
        }
        else {
            x = Math.min(p2.x, p1.x) - 50;
            dx = -10;
        }
        return "M" + p1.x + " " + p1.y + " L" + (p1.x + dx) + " " + p1.y + " C" + x + " " + p1.y + " " + x + " " + p2.y + " " + (p2.x + dx) + " " + p2.y;
    };
    /** create straight line in between table */
    Relation.prototype.generateLineCurveInBetween = function (p1, p2) {
        var dh = p1.y - p2.y;
        var adh = Math.abs(dh);
        var multiplyDir = dh === 0 ? 0 : adh / dh;
        var curveSize = adh >= 16 ? 8 : (adh / 2);
        var halfW = p1.x + Math.abs(p1.x - p2.x) / 2;
        var x1 = p1.x;
        var y1 = p1.y;
        var x2 = halfW - curveSize;
        var y2 = y1;
        var x3 = halfW;
        var y3 = y1 - (multiplyDir * curveSize);
        var x4 = halfW;
        var y4 = p2.y + (multiplyDir * curveSize);
        var x5 = halfW + curveSize;
        var y5 = p2.y;
        var x6 = p2.x;
        var y6 = p2.y;
        return "M" + x1 + "," + y1 + " L" + x2 + "," + y2 + " Q" + x3 + "," + y1 + " " + x3 + "," + y3 + " L" + x4 + "," + y4 + " Q" + x4 + "," + y5 + " " + x5 + "," + y5 + " L" + x6 + "," + y6;
    };
    /** create straight line when table align vertical or overlap on each other. */
    Relation.prototype.generateLineCurveSameSide = function (p1, p2, right) {
        var dh = p1.y - p2.y;
        var adh = Math.abs(dh);
        var multiplyV = dh === 0 ? 1 : dh / adh;
        var curveSize = adh >= 16 ? 8 : (adh / 2);
        var multiplyDir;
        var vlinex;
        if (right) {
            multiplyDir = -1;
            vlinex = Math.max(p1.x, p2.x) + 30;
        }
        else {
            multiplyDir = 1;
            vlinex = Math.min(p1.x, p2.x) - 30;
        }
        var x1 = p1.x;
        var y1 = p1.y;
        var x2 = vlinex + (multiplyDir * curveSize);
        var y2 = y1;
        var x3 = vlinex;
        var y3 = y1 - (multiplyV * curveSize);
        var x4 = vlinex;
        var y4 = p2.y + (multiplyV * curveSize);
        var x5 = vlinex + (multiplyDir * curveSize);
        var y5 = p2.y;
        var x6 = p2.x;
        var y6 = p2.y;
        return "M" + x1 + "," + y1 + " L" + x2 + "," + y2 + " Q" + x3 + "," + y1 + " " + x3 + "," + y3 + " L" + x4 + "," + y4 + " Q" + x4 + "," + y5 + " " + x5 + "," + y5 + " L" + x6 + "," + y6;
    };
    return Relation;
}(base_1.Base));
exports.Relation = Relation;


/***/ }),

/***/ "./src/elements/state.ts":
/*!*******************************!*\
  !*** ./src/elements/state.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var pointer_1 = __webpack_require__(/*! @db-diagram/elements/pointer */ "./src/elements/pointer.ts");
/**
 * State class represent element that can hold different state and
 * render different appearance based on each state.
 */
var State = /** @class */ (function (_super) {
    __extends(State, _super);
    function State(element, attr) {
        var _this = _super.call(this, element, attr) || this;
        _this.allowDrag = false;
        _this.allowSelect = false;
        _this.selected = false;
        return _this;
    }
    /**
     * Return true if element is draggable otherwise false is returned.
     */
    State.prototype.isDraggable = function () {
        return this.allowDrag;
    };
    /**
     * Return true if element is selectable otherwise false is returned.
     */
    State.prototype.isSelectable = function () {
        return this.allowSelect;
    };
    /**
     * Return true if element has been selected otherwise false is returned.
     */
    State.prototype.isSelected = function () {
        return this.selected;
    };
    /**
     * Enable or disable drag event on the element.
     * @param enable boolean value
     */
    State.prototype.draggable = function (enable) {
        if (this.allowDrag !== enable) {
            this.allowDrag = enable;
            this.dragEvent(this.allowDrag);
        }
        return this;
    };
    /**
     * Enable or disable selection on the element.
     * @param enable boolean value
     */
    State.prototype.selectable = function (enable) {
        if (this.allowSelect !== enable) {
            this.allowSelect = enable;
            this.clickEvent(this.allowSelect);
            // reset selection state if any
            if (!this.allowSelect && this.selected) {
                this.select(false);
            }
        }
        return this;
    };
    /**
     * Set selection on the element.
     * @param selected boolean value.
     */
    State.prototype.select = function (selected) {
        var _this = this;
        if (this.allowSelect && this.selected !== selected) {
            this.selected = selected;
            if (this.selected) {
                this.native.classList.add("selected");
            }
            else {
                this.native.classList.remove("selected");
            }
            if (this.selectionListeners) {
                this.selectionListeners.forEach(function (it) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        it.call(this, this.selected);
                        return [2 /*return*/];
                    });
                }); });
            }
            this.onSelectionChange();
        }
        return this;
    };
    /**
     * Add selection listener to the element.
     * @param listener selection listener
     */
    State.prototype.addSelectionListener = function (listener) {
        if (!this.selectionListeners) {
            this.selectionListeners = [listener];
        }
        else {
            this.selectionListeners.push(listener);
        }
        return this;
    };
    /**
     * Remove selection listener from the element.
     * @param listener a registered selection listener.
     */
    State.prototype.removeSelectionListener = function (listener) {
        var index;
        // tslint:disable-next-line: no-conditional-assignment
        if (this.selectionListeners && (index = this.selectionListeners.indexOf(listener)) !== -1) {
            this.selectionListeners.splice(index, 1);
        }
        return this;
    };
    /**
     * Call when element is clicked
     */
    State.prototype.onClick = function () {
        this.select(true);
    };
    /**
     * Call when the selection changed.
     */
    State.prototype.onSelectionChange = function () { return; };
    return State;
}(pointer_1.Pointer));
exports.State = State;


/***/ }),

/***/ "./src/elements/table.ts":
/*!*******************************!*\
  !*** ./src/elements/table.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
var base_1 = __webpack_require__(/*! @db-diagram/elements/base */ "./src/elements/base.ts");
var uielement_1 = __webpack_require__(/*! @db-diagram/elements/uielement */ "./src/elements/uielement.ts");
var attributes_1 = __webpack_require__(/*! @db-diagram/elements/utils/attributes */ "./src/elements/utils/attributes.ts");
var options_1 = __webpack_require__(/*! @db-diagram/elements/utils/options */ "./src/elements/utils/options.ts");
var types_1 = __webpack_require__(/*! @db-diagram/elements/utils/types */ "./src/elements/utils/types.ts");
var elements_1 = __webpack_require__(/*! @db-diagram/shares/elements */ "./src/shares/elements.ts");
/**
 * Element diagram represent database table.
 */
var Table = /** @class */ (function (_super) {
    __extends(Table, _super);
    function Table(parent, options, attr) {
        var _this = _super.call(this, base_1.Base.createElement("g"), Object.assign({ "data-name": options.name }, attr)) || this;
        _this.fieldsUi = [];
        _this.tableOptions = options;
        _this.parent = parent;
        var visual = parent.visualization;
        var icons = visual.getIconsDts();
        var styles = visual.getStylesDts();
        _this.wrapped = _this.native.appendChild(base_1.Base.createElement("g"));
        attributes_1.applyAttribute(_this.wrapped, { class: "wrapped" });
        var size = parent.preference.table.minimumSize;
        _this.tableBg = _this.wrapped.appendChild(attributes_1.applyAttribute(base_1.Base.createElement("rect"), {
            class: styles.tableBackground,
            height: size.height,
            rx: Table.roundCorner,
            ry: Table.roundCorner,
            width: size.width,
        }));
        var padding = elements_1.Visualization.TableTextPadding;
        var iconHeight = visual.getIconsElementSize(icons.tableIcon).height;
        _this.header = _this.wrapped.appendChild(attributes_1.applyAttribute(base_1.Base.createElement("path"), {
            class: "" + styles.header,
            d: Table.createHeaderPath(size, visual.tableHeaderHeight),
        }));
        _this.footer = _this.wrapped.appendChild(attributes_1.applyAttribute(base_1.Base.createElement("path"), {
            class: "" + styles.footer,
            d: Table.createFooterPath(size, visual.tableFieldIconWidth, visual.tableHeaderHeight, visual.tableFooterHeight),
        }));
        _this.tableTitle = _this.wrapped.appendChild(base_1.Base.createElement("text"));
        _this.tableTitle.textContent = options.name;
        var txtLeft = (2 * padding.left) + visual.getIconsElementSize(icons.tableIcon).width;
        var txtTop = (visual.tableHeaderHeight / 2) + 1;
        attributes_1.applyAttribute(_this.tableTitle, {
            alignmentBaseline: "middle",
            class: styles.title,
            dominantBaseline: "middle",
            transform: "translate(" + txtLeft + ", " + txtTop + ")",
        });
        _this.wrapped.appendChild(attributes_1.applyAttribute(elements_1.Visualization.createReferencePathIcon(icons.tableIcon), {
            class: styles.tableIcon,
            transform: "translate(" + padding.left + ", " + (visual.tableHeaderHeight - iconHeight) / 2 + ")",
        }));
        if (options.engine) {
            _this.tableEngine = _this.wrapped.appendChild(base_1.Base.createElement("text"));
            _this.tableEngine.textContent = options.engine;
            txtLeft = padding.left;
            txtTop = size.height - (visual.tableFooterHeight / 2) + 1;
            attributes_1.applyAttribute(_this.tableEngine, {
                alignmentBaseline: "middle",
                class: styles.footer,
                dominantBaseline: "middle",
                transform: "translate(" + txtLeft + ", " + txtTop + ")",
            });
        }
        // attach to parent right away
        _this.attach(parent);
        _this.draggable(true);
        _this.selectable(true);
        _this.size = size;
        return _this;
    }
    // create field table element.
    Table.createField = function (table, options, index = null) {
        var visual = table.parent.visualization;
        var icons = visual.getIconsDts();
        var styles = visual.getStylesDts();
        var padding = elements_1.Visualization.TableTextPadding;
        var rowHeight = visual.tableFieldHeight;
        var half = rowHeight / 2;
        var nameBox = visual.getTableTextFieldVariableSize(options);
        var typeBox = visual.getTableTextFieldTypeSize(options);
        var fieldWidth = Math.max(table.size.width, visual.tableFieldIconWidth +
            nameBox.width + typeBox.width + padding.left + padding.right + elements_1.Visualization.FieldNameTypeSpacing);
        var fieldUi = {
            fieldGroup: base_1.Base.createElement("g"),
            fieldOptions: options,
            name: attributes_1.applyAttribute(base_1.Base.createElement("text"), {
                alignmentBaseline: "middle",
                class: styles.fieldTextName,
                dominantBaseline: "middle",
                // 1 space for a line
                x: visual.tableFieldIconWidth + padding.left + 1,
                y: half,
            }),
            type: attributes_1.applyAttribute(base_1.Base.createElement("text"), {
                alignmentBaseline: "middle",
                class: styles.fieldTextType,
                dominantBaseline: "middle",
                textAnchor: "end",
                x: (fieldWidth - padding.right),
                y: half,
            }),
        };
        options.password = options.type.toLowerCase() == "password";
        options.file = options.type.toLowerCase() == "file";
        if (options.primary || options.unique || options.foreign || options.password || options.login || options.file) {
            var size = void 0;
            var clazz = void 0;
            if (options.primary) {
                fieldUi.icon = elements_1.Visualization.createReferencePathIcon(icons.primaryKeyIcon);
                size = visual.getIconsElementSize(icons.primaryKeyIcon);
                clazz = styles.primary;
            }
            else if(options.file) {
                let fileIcon = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="21px" height="21px" x="7px" y="4px" viewBox="0 0 32 32" version="1.1"><g transform="translate(0 -1028.4)"><path d="m5 1030.4c-1.1046 0-2 0.9-2 2v8 4 6c0 1.1 0.8954 2 2 2h14c1.105 0 2-0.9 2-2v-6-4-4l-6-6h-10z" fill="#95a5a6"/><path d="m5 1029.4c-1.1046 0-2 0.9-2 2v8 4 6c0 1.1 0.8954 2 2 2h14c1.105 0 2-0.9 2-2v-6-4-4l-6-6h-10z" fill="#bdc3c7"/><path d="m21 1035.4-6-6v4c0 1.1 0.895 2 2 2h4z" fill="#95a5a6"/><g fill="#3498db"><rect height="1" width="6" y="1038.4" x="12"/><path d="m5 1034.4 1.4688 5h1.0312l1.0312-3.5 1.0313 3.5h1.0315l1.468-5h-1l-0.968 3.2-0.969-3.2h-1.1562l-0.9688 3.2-0.9688-3.2h-1.0312z"/><rect height="1" width="12" y="1041.4" x="6"/><rect height="1" width="12" y="1044.4" x="6"/><rect height="1" width="12" y="1047.4" x="6"/></g></g></svg>';
                var parser = new DOMParser();
				var element = parser.parseFromString(fileIcon, "image/svg+xml");
                fieldUi.icon = element.documentElement;
                size = {"width": 16, "height": 16};
                clazz = "fileIcon";
            }
            else if(options.login) {
                let loginIcon = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16px" height="16px" x="7px" y="4px" viewBox="0 0 16 16" version="1.1"><path d="M12,9H8H4c-2.209,0-4,1.791-4,4v3h16v-3C16,10.791,14.209,9,12,9z"/><path d="M12,5V4c0-2.209-1.791-4-4-4S4,1.791,4,4v1c0,2.209,1.791,4,4,4S12,7.209,12,5z"/></svg>';
                var parser = new DOMParser();
				var element = parser.parseFromString(loginIcon, "image/svg+xml");
                fieldUi.icon = element.documentElement;
                size = {"width": 16, "height": 16};
                clazz = "loginIcon";
            }
            else if (options.unique) {
                fieldUi.icon = elements_1.Visualization.createReferencePathIcon(icons.uniqueKeyIcon);
                size = visual.getIconsElementSize(icons.uniqueKeyIcon);
                clazz = styles.unique;
            }
            else if (options.foreign) {
                fieldUi.icon = elements_1.Visualization.createReferencePathIcon(icons.foreignKeyIcon);
                size = visual.getIconsElementSize(icons.foreignKeyIcon);
                clazz = styles.foreign;
            }
            else if(options.password) {
                let passwordIcon = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16px" height="16px" x="7px" y="4px" viewBox="0 0 32 32" version="1.1"><g><path d="M19.1,14L17,14.7v-2.3c0-0.6-0.4-1-1-1s-1,0.4-1,1v2.3L12.9,14c-0.5-0.2-1.1,0.1-1.3,0.6c-0.2,0.5,0.1,1.1,0.6,1.3l2.1,0.7   l-1.3,1.8c-0.3,0.4-0.2,1.1,0.2,1.4c0.2,0.1,0.4,0.2,0.6,0.2c0.3,0,0.6-0.1,0.8-0.4l1.3-1.8l1.3,1.8c0.2,0.3,0.5,0.4,0.8,0.4   c0.2,0,0.4-0.1,0.6-0.2c0.4-0.3,0.5-0.9,0.2-1.4l-1.3-1.8l2.1-0.7c0.5-0.2,0.8-0.7,0.6-1.3C20.2,14.1,19.7,13.8,19.1,14z"/><path d="M8.1,14L6,14.7v-2.3c0-0.6-0.4-1-1-1s-1,0.4-1,1v2.3L1.9,14c-0.5-0.2-1.1,0.1-1.3,0.6c-0.2,0.5,0.1,1.1,0.6,1.3l2.1,0.7   l-1.3,1.8c-0.3,0.4-0.2,1.1,0.2,1.4C2.5,19.9,2.7,20,2.9,20c0.3,0,0.6-0.1,0.8-0.4L5,17.8l1.3,1.8C6.5,19.9,6.8,20,7.1,20   c0.2,0,0.4-0.1,0.6-0.2c0.4-0.3,0.5-0.9,0.2-1.4l-1.3-1.8l2.1-0.7c0.5-0.2,0.8-0.7,0.6-1.3C9.2,14.1,8.7,13.8,8.1,14z"/><path d="M31.4,14.6c-0.2-0.5-0.7-0.8-1.3-0.6L28,14.7v-2.3c0-0.6-0.4-1-1-1s-1,0.4-1,1v2.3L23.9,14c-0.5-0.2-1.1,0.1-1.3,0.6   c-0.2,0.5,0.1,1.1,0.6,1.3l2.1,0.7l-1.3,1.8c-0.3,0.4-0.2,1.1,0.2,1.4c0.2,0.1,0.4,0.2,0.6,0.2c0.3,0,0.6-0.1,0.8-0.4l1.3-1.8   l1.3,1.8c0.2,0.3,0.5,0.4,0.8,0.4c0.2,0,0.4-0.1,0.6-0.2c0.4-0.3,0.5-0.9,0.2-1.4l-1.3-1.8l2.1-0.7C31.3,15.7,31.6,15.2,31.4,14.6z   "/></g></svg>';
				var parser = new DOMParser();
				var element = parser.parseFromString(passwordIcon, "image/svg+xml");
                fieldUi.icon = element.documentElement;
                size = {"width": 16, "height": 16};
                clazz = "passwordIcon";
            }
            else {
                throw new Error("expected error");
            }
            attributes_1.applyAttribute(fieldUi.icon, {
                class: clazz,
                transform: "translate(" + padding.left + ", " + (rowHeight - size.height) / 2 + ")",
            });
            attributes_1.applyAttribute(fieldUi.name, { class: clazz });
            fieldUi.fieldGroup.appendChild(fieldUi.icon);
        }
        fieldUi.fieldGroup.appendChild(fieldUi.name);
        fieldUi.fieldGroup.appendChild(fieldUi.type);
        if (options.type === types_1.DataType.Enum) {
            fieldUi.mark = base_1.Base.createElement("use");
            fieldUi.fieldGroup.appendChild(fieldUi.mark);
        }
        /*table.fieldsUi.forEach(function (fieldUi, index) {
            var rowHeight = visual.tableFieldHeight;
            var totalFieldHeight = (rowHeight * (index));
            var rowY = visual.tableHeaderHeight + totalFieldHeight;
            attributes_1.applyAttribute(fieldUi.fieldGroup, {
                transform: "translate(0," + (rowY) + ")",
            });
        });*/

        var totalFieldHeight = index === null ? (rowHeight * (table.fieldsUi.length)) : (rowHeight * (index));
        var rowY = visual.tableHeaderHeight + totalFieldHeight + padding.top;
        console.log("----------------------");
        console.log("index", index);
        console.log("rowHeight", rowHeight);
        console.log("totalFieldHeight", totalFieldHeight);
        console.log("rowY", rowY);
        console.log("----------------------");
        if(index === null) {
            table.onSizeChange(fieldWidth, rowY + visual.tableFooterHeight + visual.tableFieldHeight + padding.bottom);
        } else {
            table.onSizeChange(fieldWidth);
        }
        attributes_1.applyAttribute(fieldUi.fieldGroup, { transform: "translate(0," + rowY + ")" });
        return fieldUi;
    };
    // create table header background
    Table.createHeaderPath = function (size, headerHeight) {
        var x = 0;
        var y = 0;
        var hy = y + headerHeight;
        var rp = y + Table.roundCorner;
        var vx = x + size.width - Table.roundCorner;
        var rxl = x + Table.roundCorner;
        var rxr = x + size.width;
        return "M" + x + "," + hy + " V" + rp + " Q" + x + "," + y + " " + rxl + "," + y + " H" + vx + " Q" + rxr + "," + y + " " + rxr + "," + rp + " V" + hy + " H" + x + "Z";
    };
    // create table footer background
    Table.createFooterPath = function (size, iconWidth, headerHeight, footerHeight) {
        var x = 0;
        var ty = headerHeight;
        var y = size.height - footerHeight;
        var hy = y + footerHeight - Table.roundCorner;
        var rp = hy + Table.roundCorner;
        var vx = x + size.width - Table.roundCorner;
        var rxl = x + Table.roundCorner;
        var rxr = x + size.width;
        return "M" + x + "," + ty + " V" + hy + " Q" + x + "," + rp + " " + rxl + "," + rp + " H" + vx + " Q" + rxr + "," + rp + " " + rxr + "," + hy +
            (" V" + ty + " H" + rxr + " V" + y + " H" + (x + iconWidth + 1) + " V" + ty + " H" + (x + iconWidth) + " V" + y + " H" + x + " V" + ty + " H" + x + "Z");
    };
    Object.defineProperty(Table.prototype, "name", {
        /**
         * Return table name.
         */
        get: function () {
            return this.tableOptions.name;
        },
        set: function(newName) {
            this.tableOptions.name = newName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Table.prototype, "fieldCount", {
        /**
         * Return table field count.
         */
        get: function () {
            return this.fieldsUi.length;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Attach table to the diagram. By default it attached to diagram automatically
     * when table is created.
     * @param it diagram.
     */
    Table.prototype.attach = function (it) {
        return _super.prototype.attach.call(this, it);
    };
    /**
     * remove itself from the diagram
     */
    Table.prototype.detach = function () {
        this.parent.table(this.tableOptions, true);
        return _super.prototype.detach.call(this);
    };
    /**
     * Return table metadata.
     */
    Table.prototype.metadata = function () {
        var tm = {
            additional: this.tableOptions.additional,
            engine: this.tableOptions.engine,
            name: this.name,
        };
        if (this.fieldsUi && this.fieldsUi.length > 0) {
            tm.fields = [];
            this.fieldsUi.forEach(function (fieldUi) {
                tm.fields.push(Object.assign({}, fieldUi.fieldOptions));
            });
        }
        return tm;
    };
    /**
     * Add primary relationship.
     * @param relation relationship object.
     */
    Table.prototype.primaryRelation = function (relation) {
        var e_1, _a;
        try {
            for (var _b = __values(this.fieldsUi), _c = _b.next(); !_c.done; _c = _b.next()) {
                var fieldUI = _c.value;
                if (fieldUI.fieldOptions.primary) {
                    if (!fieldUI.relation) {
                        fieldUI.relation = [];
                    }
                    if (fieldUI.relation.indexOf(relation) < 0) {
                        fieldUI.relation.push(relation);
                    }
                    break;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return this;
    };
    /**
     * Add foreign relationship.
     * @param relation relationship object.
     */
    Table.prototype.foreignRelation = function (relation, field) {
        var e_2, _a;
        try {
            for (var _b = __values(this.fieldsUi), _c = _b.next(); !_c.done; _c = _b.next()) {
                var fieldUI = _c.value;
                if (/*fieldUI.fieldOptions.foreign &&*/ fieldUI.fieldOptions === field) {
                    if (!fieldUI.relation) {
                        fieldUI.relation = [];
                    }
                    if (fieldUI.relation.indexOf(relation) < 0) {
                        fieldUI.relation.push(relation);
                    }
                    break;
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return this;
    };
    /**
     * Get field option.
     * @param index field index.
     */
    Table.prototype.field = function (index) {
        return this.fieldsUi[index].fieldOptions;
    };
    /**
     * Get field index.
     * @param field field option.
     */
    Table.prototype.fieldIndex = function (field) {
        for (var i = 0; i < this.fieldsUi.length; i++) {
            if (options_1.fieldOptionEqual(this.fieldsUi[i].fieldOptions, field)) {
                return i;
            }
        }
        return -1;
    };
    /**
     * Get primary field optoins.
     */
    Table.prototype.primaryField = function () {
        var e_3, _a;
        var field;
        try {
            for (var _b = __values(this.fieldsUi), _c = _b.next(); !_c.done; _c = _b.next()) {
                var fieldUI = _c.value;
                if (fieldUI.fieldOptions.primary) {
                    field = fieldUI.fieldOptions;
                    break;
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
        }
        if (!field) {
            throw new Error("table " + this.attr.name + " does not have primary key.");
        }
        return field;
    };
    /**
     * Get coordinate left and right of a field primary key.
     * This coordinate is related to parent svg diagram.
     */
    Table.prototype.primaryFieldCoordinate = function () {
        var primaryIndex = -1;
        for (var i = 0; i < this.fieldsUi.length; i++) {
            if (this.fieldsUi[i].fieldOptions.primary) {
                primaryIndex = i;
                break;
            }
        }
        if (primaryIndex === -1) {
            throw new Error("table " + this.attr.name + " has no primary key");
        }
        return this.fieldCoordinate(primaryIndex);
    };
    /**
     * Get coordinate left and right of a field of the given index.
     * This coordinate is related to parent svg diagram.
     * @param index field index
     */
    Table.prototype.fieldCoordinate = function (index) {
        if (index < 0 || index >= this.fieldsUi.length) {
            throw new Error("index " + index + " is out of range of 0 to " + this.fieldsUi.length);
        }
        var visual = this.parent.visualization;
        var top = elements_1.Visualization.TableFieldPadding.top;
        var y = visual.tableHeaderHeight + (index * visual.tableFieldHeight) +
            (visual.tableFieldHeight / 2) + (2 * top) + this.y(true);
        return {
            left: { x: this.x(true), y: y },
            right: { x: this.x(true) + this.size.width, y: y },
        };
    };
    /**
     * Add field to the table.
     * @param options field options.
     * @param index index of the field.
     */
    Table.prototype.addField = function (options, index = null) {
        options.typeRaw = "" + options.type.toLowerCase();
        if (options.typeSize && options.typeSize > 0) {
            options.typeRaw += "(" + options.typeSize + ")";
        }
        var fieldUi = Table.createField(this, options, index);
        fieldUi.name.textContent = options.name;
        fieldUi.type.textContent = options.typeRaw;
        console.log("index", index);
       /* if(index != null) {
            console.log("wrapped", this.wrapped);
            if (index >= this.wrapped.children.length) {
                this.wrapped.appendChild(fieldUi.fieldGroup)
            } else {
                this.wrapped.insertBefore(fieldUi.fieldGroup, this.wrapped.children[index])
            }
        } else {
            this.wrapped.appendChild(fieldUi.fieldGroup);
        }*/
        this.wrapped.appendChild(fieldUi.fieldGroup);
        if (index != null && index >= 0 && index <= this.fieldsUi.length)
        {
            this.fieldsUi.splice(index, 0, fieldUi);
            //this.fieldsUi[index] = fieldUi;
            console.log("fields", this.fieldsUi);

            return fieldUi;
        }
        else
        {
            this.fieldsUi.push(fieldUi);
            return this.fieldsUi.length - 1;
        }
    };
    /**
     * Remove field from table.
     * @param index field index
     */
    Table.prototype.removeField = function (index, resize = true) {
        if (index < this.fieldsUi.length) {
            var fieldUi = Object.assign({}, this.fieldsUi[index]);
            this.fieldsUi = this.fieldsUi.filter(function( obj, i ) {
                return index != i;
            });
            var size_1 = this.parent.preference.table.minimumSize;
            var space_1 = 6;
            var rowHeight = Math.max(fieldUi.type.getBBox().height, fieldUi.name.getBBox().height);
            var mW_1 = 0;
            this.fieldsUi.forEach(function (fUI) {
                var typeWidth = fUI.type.getBBox().width;
                mW_1 = Math.max(mW_1, size_1.width, fUI.name.getBBox().width + typeWidth + 16 + 16 + 8 + (space_1 * 3));
            });
            var visual = this.parent.visualization;
            this.wrapped.removeChild(fieldUi.fieldGroup);
            var totalFieldHeight = (rowHeight * (this.fieldsUi.length + 1));
            var rowY = visual.tableHeaderHeight + totalFieldHeight;
            if(resize)
                this.onSizeChange(mW_1, rowY + visual.tableFooterHeight + (4 + space_1));
            return fieldUi.fieldOptions;
        } else
            throw new Error("Index not exist");
    };
    /**
     * Update field in table.
     * @param index field index
     */
     Table.prototype.updateField = function (index, field) {
        if (index < this.fieldsUi.length) {
            this.removeField(index, false);
            return this.addField(field, index);
        }
        else
            throw new Error("Index not exist");
    };
    /**
     * Accumulate the bounding box value to it root element.
     */
    Table.prototype.applyTranform = function (box) {
        box.x += this.transformMatrix.e;
        box.y += this.transformMatrix.f;
        return box;
    };
    /**
     * Call when table position changed.
     * @param p point or coordinate
     */
    Table.prototype.onPositionChange = function (p) {
        this.fieldsUi.forEach(function (item) {
            if (item.relation && item.relation.length > 0) {
                item.relation.forEach(function (relation) {
                    relation.render();
                });
            }
        });
		
		this.positionx = p.x;
		this.positiony = p.y;
    };
    /**
     * Call when pointer down.
     */
    Table.prototype.onPointerDown = function () {
        this.wrapped.classList.add("down");
    };
    /**
     * Call when pointer up.
     */
    Table.prototype.onPointerUp = function () {
        this.wrapped.classList.remove("down");
        this.fieldsUi.forEach(function (item) {
            if (item.relation && item.relation.length > 0) {
                item.relation.forEach(function (relation) {
                    relation.render();
                    relation.visibility(true);
                });
            }
        });
    };
    /**
     * Call whenn a drag event is detected.
     */
    Table.prototype.onDragStart = function () {
        if (!this.tableOptions.showRelationOnDrag) {
            this.relationVisibility(false);
        }
    };
    /**
     * Call when a drag event is aborted.
     */
    Table.prototype.onDragAbort = function () {
        if (!this.tableOptions.showRelationOnDrag) {
            this.relationVisibility(true);
        }
    };
	
	/**
	* Change Table name
	*/
	Table.prototype.changeName = function (newName) {
		this.tableOptions.name = newName;
		this.attr = {"data-name": newName};
		this.tableTitle.innerHTML = newName;
		this.tableTitle.textContent = newName;
		return this;
    };
	
	/**
	* Change Table name
	*/
	Table.prototype.onRightClick = function (method) {
		this.header.onfocus = method;
		return this;
    };
	
    /**
     * Call when a drag event ended.
     */
    Table.prototype.onDragEnd = function () { this.relationVisibility(true); };
    /** update relation visibility */
    Table.prototype.relationVisibility = function (visible) {
        this.native.parentElement.appendChild(this.native);
        this.fieldsUi.forEach(function (item) {
            if (item.relation && item.relation.length > 0) {
                item.relation.forEach(function (relation) {
                    relation.visibility(visible);
                });
            }
        });
    };
    /**
     * Call when table size is changed.
     * @param width table width
     * @param height table height
     */
    Table.prototype.onSizeChange = function (width, height = null) {
        var updateFooter = false;
        var updateHeader = false;
        var visual = this.parent.visualization;
        var padding = elements_1.Visualization.TableTextPadding;
        if (height !== this.size.height && height != null) {
            if (height < this.size.height) {
                this.fieldsUi.forEach(function (fieldUi, index) {
                    var rowHeight = visual.tableFieldHeight;
                    var totalFieldHeight = (rowHeight * (index));
                    var rowY = visual.tableHeaderHeight + totalFieldHeight;
                    attributes_1.applyAttribute(fieldUi.fieldGroup, {
                        transform: "translate(0," + (rowY) + ")",
                    });
                });
            }
            this.size.height = height;
            updateFooter = true;
        }
        if (width !== this.size.width) {
            this.size.width = width;
            updateFooter = true;
            updateHeader = true;
            // update exist field type position
            this.fieldsUi.forEach(function (fieldUi) {
                attributes_1.applyAttribute(fieldUi.type, { x: width - padding.left - padding.right });
            });
        }
        if (updateHeader) {
            attributes_1.applyAttribute(this.header, {
                d: Table.createHeaderPath(this.size, visual.tableHeaderHeight),
            });
        }
        if (updateFooter) {
            attributes_1.applyAttribute(this.footer, {
                d: Table.createFooterPath(this.size, visual.tableFieldIconWidth, visual.tableHeaderHeight, visual.tableFooterHeight),
            });
            if (this.tableEngine) {
                attributes_1.applyAttribute(this.tableEngine, {
                    transform: "translate(" + padding.left + ", " + (this.size.height - (visual.tableFooterHeight / 2) + 1) + ")",
                });
            }
        }
        attributes_1.applyAttribute(this.tableBg, {
            height: this.size.height,
            width: this.size.width,
        });
    };
    Table.roundCorner = 6;
    return Table;
}(uielement_1.UIElement));
exports.Table = Table;


/***/ }),

/***/ "./src/elements/uielement.ts":
/*!***********************************!*\
  !*** ./src/elements/uielement.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var state_1 = __webpack_require__(/*! @db-diagram/elements/state */ "./src/elements/state.ts");
/**
 * UI base element represent an absract diagram element.
 */
var UIElement = /** @class */ (function (_super) {
    __extends(UIElement, _super);
    function UIElement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Get bounding box of the current element. This bounding box is including the transformation
     * and the coordinate of element is relative to SVG root element rather than it parent element.
     */
    UIElement.prototype.box = function () {
        return this.applyTranform(this.native.getBBox());
    };
    return UIElement;
}(state_1.State));
exports.UIElement = UIElement;


/***/ }),

/***/ "./src/elements/utils/attributes.ts":
/*!******************************************!*\
  !*** ./src/elements/utils/attributes.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * hack override toString on interface ViewBox to return proper viewbox svg format
 * rather than javascript default to string object.
 * @param vb a viewbox
 *
 * @deprecated
 */
function ApplyViewBox(vb) {
    if (vb) {
        vb.toString = function () {
            return this.minX + " " + this.minY + " " + this.width + " " + this.height;
        };
    }
    return vb;
}
exports.ApplyViewBox = ApplyViewBox;
/**
 * Parse the viewBox attribute string value into ViewBox object.
 * @param svg The svg root element or a string represent viewBox attribute value.
 */
function ParseViewBox(svg) {
    var viewBoxStr = svg instanceof SVGSVGElement ? svg.getAttribute("viewBox") : svg;
    if (viewBoxStr) {
        var regex = /(-?\d+)[\s|,](-?\d+)[\s|,](-?\d+)[\s|,](-?\d+)/;
        var matched = viewBoxStr.match(regex);
        return ApplyViewBox({
            height: +matched[4],
            minX: +matched[1],
            minY: +matched[2],
            width: +matched[3],
        });
    }
    else {
        return undefined;
    }
}
exports.ParseViewBox = ParseViewBox;
/**
 * apply attribute to the native svg element
 * @param element class extend from Base class
 * @param attr attribute object extend from Global Attribute Object
 */
function applyAttribute(element, attr) {
    if (attr) {
        Object.keys(attr).forEach(function (key) {
            if (attr[key.toString()] !== undefined) {
                var attrKey = key;
                if (key !== "viewBox") {
                    attrKey = toHyphen(key);
                }
                var attrVal = attr[key.toString()].toString();
                if (attrVal.length > 0 && attrVal !== "") {
                    element.setAttribute(attrKey, attrVal);
                }
            }
        });
    }
    return element;
}
exports.applyAttribute = applyAttribute;
/**
 * Value of the attribute.
 * @param ele Svg element
 * @param attr name of attribute
 */
function getAttributeNumber(ele, attr) {
    var x = ele.getAttribute(attr);
    return (x !== undefined) ? +x : 0;
}
exports.getAttributeNumber = getAttributeNumber;
/**
 * Convert camelCase into hyphen. NOTE: Loop is faster than regex
 * @param key string to be convert into hyphen case.
 */
function toHyphen(key) {
    var hkey = "";
    for (var i = 0; i < key.length; i++) {
        if (key.charCodeAt(i) < 97 && key.charCodeAt(i) !== 45) {
            hkey += "-" + String.fromCharCode(key.charCodeAt(i) + 32);
        }
        else {
            hkey += key.charAt(i);
        }
    }
    return hkey;
}


/***/ }),

/***/ "./src/elements/utils/options.ts":
/*!***************************************!*\
  !*** ./src/elements/utils/options.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Compare two field options and return true if the the two is identical.
 * @param fopt1 field option
 * @param fopt2 field option
 */
function fieldOptionEqual(fopt1, fopt2) {
    return fopt1.name === fopt2.name &&
        fopt1.type === fopt2.type &&
        fopt1.typeSize === fopt2.typeSize &&
        fopt1.primary === fopt2.primary &&
        fopt1.unique === fopt2.unique &&
        fopt1.foreign === fopt2.foreign;
}
exports.fieldOptionEqual = fieldOptionEqual;


/***/ }),

/***/ "./src/elements/utils/types.ts":
/*!*************************************!*\
  !*** ./src/elements/utils/types.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * A rectange box the represent an area in SVG space.
 */
var Box = /** @class */ (function () {
    function Box(svgRect) {
        this.axisX = 0;
        this.axisY = 0;
        this.sWidth = 0;
        this.sHeight = 0;
        if (svgRect) {
            this.initialize(svgRect);
        }
        this.isEditable = false;
    }
    /**
     * Editable return a new edibitable box object if the object is the a readonly object
     * otherwise it will return self object instead.
     */
    Box.prototype.editable = function () {
        if (this.isEditable) {
            return this;
        }
        var box = new Box().initialize(this);
        box.isEditable = true;
        return box;
    };
    /**
     * Accumulate 2d area dimension and it's coordinate. When `dimensionOnly` set to true, the function
     * perform the action on dimension only and ignore any axis coordination value in otherword function assume
     * that both `Box` has the same start x,y axis coordinate and it's coordinate value will set to 0 regardless
     * of existing value of both `Box`. By default, `dimensionOnly` is set to false.
     * @param padding padding to be extent the 2d bounding box
     * @param dimensionOnly whether or not extend will perform without considering the axis coordinate.
     */
    Box.prototype.extend = function (other, dimensionOnly) {
        if (dimensionOnly === void 0) { dimensionOnly = false; }
        this.raiseNonEditableBox();
        if (dimensionOnly) {
            this.axisY = 0;
            this.axisY = 0;
            this.sWidth = Math.max(this.sWidth, other.width);
            this.sHeight = Math.max(this.sHeight, other.height);
        }
        else {
            var x2 = Math.max(this.axisX + this.sWidth, other.x + other.width);
            var y2 = Math.max(this.axisY + this.sHeight, other.y + other.height);
            this.axisY = Math.min(this.axisX, other.x);
            this.axisX = Math.min(this.axisY, other.y);
            this.sWidth = Math.abs(x2 - this.axisX);
            this.sWidth = Math.abs(y2 - this.axisY);
        }
        return this;
    };
    /**
     * Extent the 2d area dimension and it's coordinate based on the given `padding`.
     * The function perform extent dimension width and height to left and bottom where
     * coordinate x, y is reduce by `padding` left and right. When `dimensionOnly`
     * set to true, the function perform the extent only on dimension but not coordinate.
     * By default, `dimensionOnly` is set to false.
     * @param padding padding to be extent the 2d bounding box
     * @param dimensionOnly whether or not extend will perform without considering the axis coordinate.
     */
    Box.prototype.padding = function (padding, dimensionOnly) {
        if (dimensionOnly === void 0) { dimensionOnly = false; }
        this.raiseNonEditableBox();
        this.sWidth += padding.right ? padding.right : 0;
        this.sHeight += padding.bottom ? padding.bottom : 0;
        if (dimensionOnly) {
            this.sWidth += padding.left ? padding.left : 0;
            this.sHeight += padding.top ? padding.top : 0;
        }
        else {
            this.axisX -= padding.left ? padding.left : 0;
            this.axisY -= padding.top ? padding.top : 0;
        }
        return this;
    };
    Object.defineProperty(Box.prototype, "x", {
        /** Get x axis of the box */
        get: function () { return this.axisX; },
        /** Set x axis to the box. An exception is raise if the box is a readonly box. */
        set: function (x) { this.raiseNonEditableBox(); this.axisX = x; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Box.prototype, "y", {
        /** Get y axis of the box */
        get: function () { return this.axisY; },
        /** Set y axis to the box. An exception is raise if the box is a readonly box. */
        set: function (y) { this.raiseNonEditableBox(); this.axisY = y; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Box.prototype, "width", {
        /** Get width of the box */
        get: function () { return this.sWidth; },
        /** Set width to the box. An exception is raise if the box is a readonly box. */
        set: function (w) { this.raiseNonEditableBox(); this.sWidth = w; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Box.prototype, "height", {
        /** Get height of the box */
        get: function () { return this.sHeight; },
        /** Set height to the box. An exception is raise if the box is a readonly box. */
        set: function (h) { this.raiseNonEditableBox(); this.sHeight = h; },
        enumerable: true,
        configurable: true
    });
    Box.prototype.initialize = function (svgRect) {
        this.axisX = svgRect.x;
        this.axisY = svgRect.y;
        this.sWidth = svgRect.width;
        this.sHeight = svgRect.height;
        return this;
    };
    Box.prototype.raiseNonEditableBox = function () {
        if (!this.isEditable) {
            throw new Error("Cannot update read only Box. Use editable()");
        }
    };
    return Box;
}());
exports.Box = Box;
/**
 * The number represent SQL database data type. Some of the data type may not applicatable or suitable
 * to be used in certain database engine.
 */
var DataType;
(function (DataType) {
    DataType[DataType["Number"] = 1] = "Number";
    DataType[DataType["Bit"] = 2] = "Bit";
    DataType[DataType["TinyInt"] = 3] = "TinyInt";
    DataType[DataType["SmallInt"] = 4] = "SmallInt";
    DataType[DataType["Int"] = 5] = "Int";
    DataType[DataType["BigInt"] = 6] = "BigInt";
    DataType[DataType["Decimal"] = 7] = "Decimal";
    DataType[DataType["Numeric"] = 8] = "Numeric";
    DataType[DataType["Float"] = 9] = "Float";
    DataType[DataType["Real"] = 10] = "Real";
    DataType[DataType["Double"] = 11] = "Double";
    DataType[DataType["String"] = 12] = "String";
    DataType[DataType["Char"] = 13] = "Char";
    DataType[DataType["VarChar"] = 14] = "VarChar";
    DataType[DataType["Text"] = 15] = "Text";
    DataType[DataType["DateTime"] = 16] = "DateTime";
    DataType[DataType["Date"] = 17] = "Date";
    DataType[DataType["Time"] = 18] = "Time";
    DataType[DataType["TimeStamp"] = 19] = "TimeStamp";
    DataType[DataType["Year"] = 20] = "Year";
    DataType[DataType["Enum"] = 21] = "Enum";
    DataType[DataType["Binary"] = 22] = "Binary";
    DataType[DataType["VarBinary"] = 23] = "VarBinary";
    DataType[DataType["Image"] = 24] = "Image";
    DataType[DataType["Miscellaneous"] = 25] = "Miscellaneous";
    DataType[DataType["Clob"] = 26] = "Clob";
    DataType[DataType["Blob"] = 27] = "Blob";
    DataType[DataType["XML"] = 28] = "XML";
    DataType[DataType["Json"] = 29] = "Json";
})(DataType = exports.DataType || (exports.DataType = {}));


/***/ }),

/***/ "./src/event/panzoom.ts":
/*!******************************!*\
  !*** ./src/event/panzoom.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Type of zoom event callback
 */
var PanZoomEventType;
(function (PanZoomEventType) {
    PanZoomEventType["onPanZoomBegin"] = "panzoon.start";
    PanZoomEventType["onPanZoomMove"] = "panzoon.move";
    PanZoomEventType["onPanZoomEnd"] = "panzoon.end";
})(PanZoomEventType = exports.PanZoomEventType || (exports.PanZoomEventType = {}));
/**
 * Helper class to handle pin zoom on wheel event.
 */
var ZoomEventListener = /** @class */ (function () {
    function ZoomEventListener(ele) {
        this.panPoint = 0;
        this.ele = ele;
    }
    /**
     * Register wheel event.
     */
    ZoomEventListener.prototype.register = function () {
        var _this = this;
        this.listener = function (evt) {
            if (!evt.ctrlKey) {
                return;
            }
            evt.preventDefault();
            evt.stopPropagation();
            _this.onWheel(evt);
        };
        this.ele.addEventListener("wheel", this.listener);
    };
    /**
     * Unregister wheel event.
     */
    ZoomEventListener.prototype.unregister = function () {
        if (this.listener) {
            this.ele.removeEventListener("wheel", this.listener);
            this.listener = undefined;
            this.panPoint = 0;
            this.move = undefined;
        }
    };
    /**
     * Handle wheel event.
     * @param evt wheel event.
     */
    ZoomEventListener.prototype.onWheel = function (evt) {
        if (!this.move) {
            this.move = true;
            this.panPoint = 0;
            this.ele.dispatchEvent(this.newEvent(PanZoomEventType.onPanZoomBegin, evt));
        }
        else {
            this.panPoint += 1;
            this.checkDone(this.panPoint);
            this.ele.dispatchEvent(this.newEvent(PanZoomEventType.onPanZoomMove, evt));
        }
    };
    /** verifiy if wheel event end */
    ZoomEventListener.prototype.checkDone = function (pp) {
        var _this = this;
        setTimeout(function () {
            if (pp === _this.panPoint) {
                _this.panPoint = 0;
                _this.move = undefined;
                _this.ele.dispatchEvent(_this.newEvent(PanZoomEventType.onPanZoomEnd));
            }
        }, 100);
    };
    /** create new custom wheel event data */
    ZoomEventListener.prototype.newEvent = function (type, evt) {
        return new CustomEvent(type, {
            bubbles: true,
            cancelable: true,
            detail: evt ? {
                clientX: evt.clientX,
                clientY: evt.clientY,
                deltaMode: evt.deltaMode,
                deltaX: evt.deltaX,
                deltaY: evt.deltaY,
                deltaZ: evt.deltaZ,
            } : undefined,
        });
    };
    return ZoomEventListener;
}());
exports.ZoomEventListener = ZoomEventListener;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! @db-diagram/@extensions/strings */ "./src/@extensions/strings.ts");
/** export class represent sql object such as table and relationship */
var diagram_1 = __webpack_require__(/*! @db-diagram/elements/diagram */ "./src/elements/diagram.ts");
exports.Diagram = diagram_1.Diagram;
var table_1 = __webpack_require__(/*! @db-diagram/elements/table */ "./src/elements/table.ts");
exports.Table = table_1.Table;
var relation_1 = __webpack_require__(/*! @db-diagram/elements/relation */ "./src/elements/relation.ts");
exports.Relation = relation_1.Relation;
var plugin_1 = __webpack_require__(/*! @db-diagram/plugins/plugin */ "./src/plugins/plugin.ts");
exports.DiagramPlugin = plugin_1.DiagramPlugin;
var database_1 = __webpack_require__(/*! @db-diagram/plugins/database */ "./src/plugins/database.ts");
exports.Database = database_1.Database;
var elements_1 = __webpack_require__(/*! @db-diagram/shares/elements */ "./src/shares/elements.ts");
exports.onDomReady = elements_1.onDomReady;
exports.Visualization = elements_1.Visualization;
/** export preference setting */
__export(__webpack_require__(/*! @db-diagram/preference/defaults */ "./src/preference/defaults.ts"));
__export(__webpack_require__(/*! @db-diagram/preference/pref */ "./src/preference/pref.ts"));
/** export data type */
var types_1 = __webpack_require__(/*! @db-diagram/elements/utils/types */ "./src/elements/utils/types.ts");
exports.DataType = types_1.DataType;
var svgIconsSet;
/**
 * Add a set of icons into html dom hierarchy.
 * @param url url to icon set
 */
function addIconSet(urlOrContent, parent) {
    var _this = this;
    var inject = function (raw) {
        if (typeof raw === "string") {
            var div = document.createElement("div");
            div.innerHTML = raw;
            div.children[0].setAttribute("style", "display: none;");
            svgIconsSet = div.children[0];
            parent ? parent.appendChild(svgIconsSet) : document.body.append(svgIconsSet);
            return true;
        }
        else {
            return false;
        }
    };
    if (!svgIconsSet) {
        if (urlOrContent.includes("<svg>")) {
            return inject(urlOrContent);
        }
        else {
            return fetch(urlOrContent).then(function (response) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    if (response.ok) {
                        return [2 /*return*/, response.text()];
                    }
                    else {
                        return [2 /*return*/, false];
                    }
                    return [2 /*return*/];
                });
            }); }).then(function (raw) {
                return inject(raw);
            });
        }
    }
    return true;
}
exports.addIconSet = addIconSet;


/***/ }),

/***/ "./src/plugins/database.ts":
/*!*********************************!*\
  !*** ./src/plugins/database.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * provide constant to database name
 */
var Database = /** @class */ (function () {
    function Database() {
    }
    Database.MySQL = "mysql";
    Database.MariaDB = "mariadb";
    Database.Oracle = "oracle";
    Database.MSSQL = "microsql";
    Database.MongoDB = "mongodb";
    Database.SQLite = "sqlite";
    Database.PostgreSQL = "postgresql";
    Database.Cassandra = "cassandra";
    Database.CockroachDB = "cockroachdb";
    Database.CUBRID = "cubrid";
    return Database;
}());
exports.Database = Database;


/***/ }),

/***/ "./src/plugins/plugin.ts":
/*!*******************************!*\
  !*** ./src/plugins/plugin.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Allow include customizable plugin implemented by third party.
 */
var DiagramPlugin = /** @class */ (function () {
    function DiagramPlugin() {
        this.plugins = new Map();
    }
    Object.defineProperty(DiagramPlugin, "instance", {
        /**
         * Get singleton instance of diagram plugin
         */
        get: function () {
            if (!DiagramPlugin.plugin) {
                DiagramPlugin.plugin = new DiagramPlugin();
            }
            return DiagramPlugin.plugin;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Replace existing plugin of the given database db
     * @param plugin new plugin
     * @param db database engine
     */
    DiagramPlugin.prototype.setPlugin = function (plugin, db) {
        this.plugins.set(db, plugin);
        return this;
    };
    /**
     * Return the plugin use by the given database engine db
     * @param db database engine
     */
    DiagramPlugin.prototype.getPlugin = function (db) {
        return this.plugins.get(db);
    };
    return DiagramPlugin;
}());
exports.DiagramPlugin = DiagramPlugin;


/***/ }),

/***/ "./src/preference/defaults.ts":
/*!************************************!*\
  !*** ./src/preference/defaults.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Return default table setting diagram.
 */
function defaultTableSetting(visualization) {
    var css = visualization.readOnlyElementStyle();
    var styles = visualization.getStylesDts();
    return {
        field: {
            fontName: {
                fontFamily: css.getPropertyValue(styles.dbdgFieldTextNameFontFamily),
                fontSize: css.getPropertyValue(styles.dbdgFieldTextNameFontSize),
                fontStyle: css.getPropertyValue(styles.dbdgFieldTextNameFontStyle),
                fontWeight: css.getPropertyValue(styles.dbdgFieldTextNameFontWeight),
            },
            fontType: {
                fontFamily: css.getPropertyValue(styles.dbdgFieldTextTypeFontFamily),
                fontSize: css.getPropertyValue(styles.dbdgFieldTextTypeFontSize),
                fontStyle: css.getPropertyValue(styles.dbdgFieldTextTypeFontStyle),
                fontWeight: css.getPropertyValue(styles.dbdgFieldTextTypeFontWeight),
            },
            foreign: {
                font: {
                    fontFamily: css.getPropertyValue(styles.dbdgFieldTextForeignFontFamily),
                    fontSize: css.getPropertyValue(styles.dbdgFieldTextForeignFontSize),
                    fontStyle: css.getPropertyValue(styles.dbdgFieldTextForeignFontStyle),
                    fontWeight: css.getPropertyValue(styles.dbdgFieldTextForeignFontWeight),
                },
                iconColor: css.getPropertyValue(styles.dbdgFieldIconForeignColor),
                textColor: css.getPropertyValue(styles.dbdgFieldTextForeignColor),
            },
            hideIcon: false,
            nameColor: css.getPropertyValue(styles.dbdgFieldTextNameColor),
            primary: {
                font: {
                    fontFamily: css.getPropertyValue(styles.dbdgFieldTextPrimaryFontFamily),
                    fontSize: css.getPropertyValue(styles.dbdgFieldTextPrimaryFontSize),
                    fontStyle: css.getPropertyValue(styles.dbdgFieldTextPrimaryFontStyle),
                    fontWeight: css.getPropertyValue(styles.dbdgFieldTextPrimaryFontWeight),
                },
                iconColor: css.getPropertyValue(styles.dbdgFieldIconPrimaryColor),
                textColor: css.getPropertyValue(styles.dbdgFieldTextPrimaryColor),
            },
            typeColor: css.getPropertyValue(styles.dbdgFieldTextTypeColor),
            unique: {
                font: {
                    fontFamily: css.getPropertyValue(styles.dbdgFieldTextForeignFontFamily),
                    fontSize: css.getPropertyValue(styles.dbdgFieldTextForeignFontSize),
                    fontStyle: css.getPropertyValue(styles.dbdgFieldTextForeignFontStyle),
                    fontWeight: css.getPropertyValue(styles.dbdgFieldTextForeignFontWeight),
                },
                iconColor: css.getPropertyValue(styles.dbdgFieldIconUniqueColor),
                textColor: css.getPropertyValue(styles.dbdgFieldTextForeignColor),
            },
        },
        footer: {
            background: css.getPropertyValue(styles.dbdgTableFooterColor),
            font: {
                fontFamily: css.getPropertyValue(styles.dbdgTableFooterTextFontFamily),
                fontSize: css.getPropertyValue(styles.dbdgTableFooterTextFontSize),
                fontStyle: css.getPropertyValue(styles.dbdgTableFooterTextFontStyle),
                fontWeight: css.getPropertyValue(styles.dbdgTableFooterTextFontWeight),
            },
            hideFooter: false,
            left: "__TXT__",
            right: "__TXT__",
            textColor: css.getPropertyValue(styles.dbdgTableFooterTextColor),
        },
        header: {
            background: css.getPropertyValue(styles.dbdgTableHeaderColor),
            font: {
                fontFamily: css.getPropertyValue(styles.dbdgTableTitleFontFamily),
                fontSize: css.getPropertyValue(styles.dbdgTableTitleFontSize),
                fontStyle: css.getPropertyValue(styles.dbdgTableTitleFontStyle),
                fontWeight: css.getPropertyValue(styles.dbdgTableTitleFontWeight),
            },
            hideIcon: false,
            iconColor: css.getPropertyValue(styles.dbdgTableIconColor),
            name: "__NAME__",
            nameColor: css.getPropertyValue(styles.dbdgTableTitleColor),
        },
        maximumSize: { width: 220, height: 680 },
        minimumSize: { width: 120, height: 80 },
        selected: css.getPropertyValue(styles.dbdgTableSelectedColor),
    };
}
exports.defaultTableSetting = defaultTableSetting;
/**
 * Return default table relationship setting
 */
function defaultRelationshipSetting(visualization) {
    var css = visualization.readOnlyElementStyle();
    var styles = visualization.getStylesDts();
    return {
        showRelationType: true,
        strongLineStyle: {
            stroke: css.getPropertyValue(styles.dbdgRelationLineColor),
            strokeWidth: css.getPropertyValue(styles.dbdgRelationLineWidth),
        },
        typeIconColor: css.getPropertyValue(styles.dbdgRelationConnectorColor),
        useStraightLine: false,
        weakLineStyle: {
            stroke: css.getPropertyValue(styles.dbdgRelationLineColor),
            strokeDasharray: css.getPropertyValue(styles.dbdgRelationWeakLineDashArray),
            strokeLinecap: css.getPropertyValue(styles.dbdgRelationWeakLineCap),
            strokeLinejoin: css.getPropertyValue(styles.dbdgRelationWeakLineJoin),
            strokeWidth: css.getPropertyValue(styles.dbdgRelationWeakLineWidth),
        },
    };
}
exports.defaultRelationshipSetting = defaultRelationshipSetting;
/**
 * Location describe the location of diagram's component to place
 * in the dom hide hierarchy.
 */
var ControlLocation;
(function (ControlLocation) {
    ControlLocation[ControlLocation["TOP_LEFT"] = 1] = "TOP_LEFT";
    ControlLocation[ControlLocation["TOP_RIGHT"] = 2] = "TOP_RIGHT";
    ControlLocation[ControlLocation["BOTTOM_LEFT"] = 3] = "BOTTOM_LEFT";
    ControlLocation[ControlLocation["BOTTOM_RIGHT"] = 4] = "BOTTOM_RIGHT";
})(ControlLocation = exports.ControlLocation || (exports.ControlLocation = {}));
/**
 * Return default diagram setting
 */
function defaultDiagramSetting(visualization) {
    var css = visualization.readOnlyElementStyle();
    var styles = visualization.getStylesDts();
    return {
        background: css.getPropertyValue(styles.dbdgWorkspaceBackgroun),
        controlLocation: ControlLocation.BOTTOM_RIGHT,
        maximumZoom: 5,
        minimumZoom: 1,
        pannable: true,
        showMinimap: false,
        showZoom: false,
        zoomable: true,
    };
}
exports.defaultDiagramSetting = defaultDiagramSetting;


/***/ }),

/***/ "./src/preference/pref.ts":
/*!********************************!*\
  !*** ./src/preference/pref.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var defaults_1 = __webpack_require__(/*! @db-diagram/preference/defaults */ "./src/preference/defaults.ts");
// preference enable developer to customize the diagram appearance and setting
// for their own desired. By default, preference will provide 2 different theme
// for diagram appearance the light theme and the dark theme.
/**
 * Provide a static getter and setter to get or update theme and diagram setting.
 * @public
 */
var Preference = /** @class */ (function () {
    function Preference(visualization) {
        this.visualization = visualization;
    }
    Object.defineProperty(Preference.prototype, "relationship", {
        /**
         * Get relationship setting
         */
        get: function () {
            if (window.localStorage) {
                var rawRelationshipSetting = window.localStorage.getItem(Preference.relationshipSettingKey);
                if (!rawRelationshipSetting) {
                    return defaults_1.defaultRelationshipSetting(this.visualization);
                }
                var relationshipSetting = JSON.parse(rawRelationshipSetting);
                if (!relationshipSetting) {
                    return defaults_1.defaultRelationshipSetting(this.visualization);
                }
                return relationshipSetting;
            }
            throw new Error("browser does not support local storage");
        },
        /**
         * Update relationship setting
         */
        set: function (rls) {
            if (window.localStorage) {
                var oldtbs = this.relationship;
                rls = Object.assign({}, oldtbs, rls);
                window.localStorage.setItem(Preference.relationshipSettingKey, JSON.stringify(rls));
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Preference.prototype, "table", {
        /**
         * Get table setting
         */
        get: function () {
            if (window.localStorage) {
                var rawDiagramSetting = window.localStorage.getItem(Preference.tableSettingKey);
                if (!rawDiagramSetting) {
                    return defaults_1.defaultTableSetting(this.visualization);
                }
                var diagramSetting = JSON.parse(rawDiagramSetting);
                if (!diagramSetting) {
                    return defaults_1.defaultTableSetting(this.visualization);
                }
                return diagramSetting;
            }
            throw new Error("browser does not support local storage");
        },
        /**
         * Update table setting
         */
        set: function (tbs) {
            if (window.localStorage) {
                var oldtbs = this.table;
                tbs = Object.assign({}, oldtbs, tbs);
                window.localStorage.setItem(Preference.tableSettingKey, JSON.stringify(tbs));
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Preference.prototype, "diagram", {
        /**
         * Get diagram setting
         */
        get: function () {
            if (window.localStorage) {
                var rawDiagramSetting = window.localStorage.getItem(Preference.diagramSettingKey);
                if (!rawDiagramSetting) {
                    return defaults_1.defaultDiagramSetting(this.visualization);
                }
                var diagramSetting = JSON.parse(rawDiagramSetting);
                if (!diagramSetting) {
                    return defaults_1.defaultDiagramSetting(this.visualization);
                }
                return diagramSetting;
            }
            throw new Error("browser does not support local storage");
        },
        /**
         * Update current diagram setting with the given ds. The given diagram setting will be merge into
         * the active existing and override it if the properties was available in ds.
         */
        set: function (ds) {
            if (window.localStorage) {
                var oldDS = this.diagram;
                ds = Object.assign({}, oldDS, ds);
                window.localStorage.setItem(Preference.diagramSettingKey, JSON.stringify(ds));
            }
        },
        enumerable: true,
        configurable: true
    });
    Preference.relationshipSettingKey = "key.relationship.setting";
    Preference.tableSettingKey = "key.table.setting";
    Preference.diagramSettingKey = "key.diagram.setting";
    return Preference;
}());
exports.Preference = Preference;


/***/ }),

/***/ "./src/shares/elements.ts":
/*!********************************!*\
  !*** ./src/shares/elements.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var strings_1 = __webpack_require__(/*! @db-diagram/@extensions/strings */ "./src/@extensions/strings.ts");
var icons_1 = __importDefault(__webpack_require__(/*! @db-diagram/assets/icons */ "../../../../../../../private/var/folders/db/2f7l1zlx1r94k73gsw8sz04h0000gn/T/@krobkrong/db-diagram/resources-utilities/cache/resources/icons/icons.d.js"));
icons_1.default.passwordIcon = "passwordIcon";
var style_dark_scss_1 = __importDefault(__webpack_require__(/*! @db-diagram/assets/styles/style-dark.scss */ "../../../../../../../private/var/folders/db/2f7l1zlx1r94k73gsw8sz04h0000gn/T/@krobkrong/db-diagram/resources-utilities/cache/resources/styles/style-dark.scss.js"));
var base_1 = __webpack_require__(/*! @db-diagram/elements/base */ "./src/elements/base.ts");
var attributes_1 = __webpack_require__(/*! @db-diagram/elements/utils/attributes */ "./src/elements/utils/attributes.ts");
var types_1 = __webpack_require__(/*! @db-diagram/elements/utils/types */ "./src/elements/utils/types.ts");
/**
 * Callback to execute code until dom is ready.
 * @param callBack callback function
 */
exports.onDomReady = function (callBack) {
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", callBack);
    }
    else {
        callBack();
    }
};
/**
 * A share object providing access to share data that accelerate calculation
 * when create diagram element.
 */
var Visualization = /** @class */ (function () {
    function Visualization(root) {
        // cache size of all svg icons use in the diagram
        this.iconsSize = new Map();
        this.fieldHeight = 0;
        this.headerHeight = 0;
        this.footerHeight = 0;
        this.fieldIconWidth = 0;
        this.root = root;
        this.shareSvg = base_1.Base.createElement("svg");
        this.textElement = this.shareSvg.appendChild(base_1.Base.createElement("text"));
        attributes_1.applyAttribute(this.shareSvg, {
            style: "position: absolute; z-index: -1; top: 0; left: 0; width: 1px; height: 1px",
            visibility: "hidden",
        });
    }
    /**
     * Return singleton instance of Visualization.
     * @param root root native element of the diagram.
     */
    Visualization.getInstance = function (root) {
        if (root === void 0) { root = document.documentElement; }
        if (root instanceof SVGSVGElement) {
            if (root.__visualization) {
                return root.__visualization;
            }
            var doc_1 = this.findCustomRootElement(root);
            if (doc_1 !== undefined) {
                if (!root.__visualization) {
                    root.__visualization = new Visualization(root);
                    root.__visualization.doc = doc_1;
                    exports.onDomReady(function () {
                        doc_1.appendChild(root.__visualization.shareSvg);
                        root.__visualization.updatePropertiesValue();
                    });
                }
                return root.__visualization;
            }
        }
        // use globals
        if (!Visualization.instance) {
            Visualization.instance = new Visualization(root);
            exports.onDomReady(function () {
                Visualization.instance.doc = document;
                document.body.appendChild(Visualization.instance.shareSvg);
                Visualization.instance.updatePropertiesValue();
            });
        }
        return Visualization.instance;
    };
    /**
     * Create a reference use svg element.
     * @param id id of actual element
     * @param attr attribute to be apply to the use element.
     */
    Visualization.createReferencePathIcon = function (id, attr) {
        return attributes_1.applyAttribute(base_1.Base.createElement("use"), Object.assign({}, {
            href: "#" + id,
        }, attr));
    };
    /**
     * create root svg element.
     */
    Visualization.createSvgRootElement = function () {
        var svg = base_1.Base.createElement("svg");
        var attr = { class: "" + style_dark_scss_1.default.dbdg, width: "100%", height: "100%" };
        return attributes_1.applyAttribute(svg, attr);
    };
    /**
     * Find the parent web component element. If diagram did not use under a web component,
     * it will return undefined value.
     * @param node svg root diagram element.
     */
    Visualization.findCustomRootElement = function (node) {
        if (node.parentNode) {
            return this.findCustomRootElement(node.parentNode);
        }
        else if (node.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
            return node;
        }
        else {
            return undefined;
        }
    };
    Visualization.getFieldOptionsKind = function (options) {
        return options.primary ? "primary" : options.foreign ? "foreign" : options.unique ? "unique" : "name";
    };
    Object.defineProperty(Visualization, "TableTextPadding", {
        /** Return text padding that use for all text inside table. */
        get: function () { return this.tableTextPadding; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Visualization, "TableFieldPadding", {
        /** Return field padding. The padding is adding space around the field element inside the table. */
        get: function () { return this.tableFieldpadding; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Visualization, "FieldNameTypeSpacing", {
        /** Return minimum space between field name and field type text. */
        get: function () { return this.space; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Visualization.prototype, "tableHeaderHeight", {
        /** Return table header height */
        get: function () {
            if (this.headerHeight === 0) {
                this.headerHeight = this.getTableHeaderSize().height;
            }
            return this.headerHeight;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Visualization.prototype, "tableFooterHeight", {
        /** Return table footer height */
        get: function () {
            if (this.footerHeight === 0) {
                this.footerHeight = this.getTableFooterSize({ name: "", engine: "Unknown" }).height;
            }
            return this.footerHeight;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Visualization.prototype, "tableFieldHeight", {
        /** Return table field height */
        get: function () {
            if (this.fieldHeight === 0) {
                this.fieldHeight = this.getTableFieldSize().height;
            }
            return this.fieldHeight;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Visualization.prototype, "tableFieldIconWidth", {
        /** Return table field icons width */
        get: function () {
            return this.fieldIconWidth;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Return styles declaration object.
     */
    Visualization.prototype.getStylesDts = function () {
        return style_dark_scss_1.default;
    };
    /**
     * Return icons declaration object.
     */
    Visualization.prototype.getIconsDts = function () {
        return icons_1.default;
    };
    /**
     * Update share properties value.
     */
    Visualization.prototype.updatePropertiesValue = function () {
        var _this = this;
        // compute all icon size
        Object.entries(icons_1.default).forEach(function (pair) {
            try {
                if (typeof pair[1] === "string") {
                    var a = _this.getIconsElementSize(pair[1], true);
                }
            }
            catch (e) { /*Ignore error here*/ }
        });
        // compute table element height
        this.headerHeight = this.getTableHeaderSize().height;
        this.footerHeight = this.getTableFooterSize({ name: "", engine: "Unknown" }).height;
        this.fieldHeight = this.getTableFieldSize().height;
        this.fieldIconWidth = this.iconsSize.get(icons_1.default.foreignKeyIcon).editable()
            .extend(this.iconsSize.get(icons_1.default.uniqueKeyIcon), true)
            .extend(this.iconsSize.get(icons_1.default.primaryKeyIcon), true)
           // .extend(this.iconsSize.get(icons_1.default.passwordIcon), true)
            .padding(Visualization.TableTextPadding, true).width;
    };
    /**
     * Get icon element size.
     * @param id icon id
     * @param force if true it force re-calculate icons size.
     */
    Visualization.prototype.getIconsElementSize = function (id, force, eleCb) {
        if (force === void 0) { force = false; }
        if (this.iconsSize.get(id) === undefined || force) {
            var ele = this.doc.querySelector("#" + id);
            if (!ele) {
                throw new Error("Element id: " + id + " not found.");
            }
            if (ele.tagName === "symbol") {
                // TODO: compute with viewbox value, refx and refy. For now we relied on pre-compute or
                // pre-optimization when use custom icon.
                var svgRect = this.shareSvg.createSVGRect();
                svgRect.x = attributes_1.getAttributeNumber(ele, "x");
                svgRect.y = attributes_1.getAttributeNumber(ele, "x");
                svgRect.width = attributes_1.getAttributeNumber(ele, "width");
                svgRect.height = attributes_1.getAttributeNumber(ele, "height");
                this.iconsSize.set(id, new types_1.Box(svgRect));
            }
            else if (ele instanceof SVGGraphicsElement) {
                this.iconsSize.set(id, new types_1.Box(ele.getBBox()));
            }
            else {
                throw new Error("Element id: " + id + " is not a graphical element.");
            }
            if (eleCb) {
                eleCb(ele);
            }
        }
        // create new object to avoid accidentially change value
        return this.iconsSize.get(id);
    };
    /**
     * Return table header size
     * @param tableName a string represent table name.
     * @param textOnly
     */
    Visualization.prototype.getTableHeaderSize = function (tableName, textOnly) {
        if (tableName === void 0) { tableName = "DUMP"; }
        if (textOnly === void 0) { textOnly = false; }
        var textSize = this.measureText(tableName, {
            fontFamily: this.readOnlyElementStyle().getPropertyValue(style_dark_scss_1.default.dbdgTableTitleFontFamily),
            fontSize: this.readOnlyElementStyle().getPropertyValue(style_dark_scss_1.default.dbdgTableTitleFontSize),
            fontStyle: strings_1.noQuote(this.readOnlyElementStyle().getPropertyValue(style_dark_scss_1.default.dbdgTableTitleFontStyle)),
            fontWeight: strings_1.noQuote(this.readOnlyElementStyle().getPropertyValue(style_dark_scss_1.default.dbdgTableTitleFontWeight)),
        });
        if (textOnly) {
            return new types_1.Box(textSize);
        }
        return this.getIconsElementSize(icons_1.default.tableIcon).editable()
            .extend(textSize, true).padding(Visualization.TableTextPadding, true);
    };
    /**
     * Return table footer size. This size is include the padding around the text. Use `getTableFooterTextSize`
     * to get text footer height.
     * @param options table options.
     */
    Visualization.prototype.getTableFooterSize = function (options) {
        var engineSize = new types_1.Box(this.getTableFooterTextSize(options.engine)).editable();
        var additionalSize = this.getTableFooterTextSize(options.additional);
        return engineSize.extend(additionalSize, true).padding(Visualization.TableTextPadding, true);
    };
    /**
     * Return table footer text size.
     * @param text text to render in the footer.
     */
    Visualization.prototype.getTableFooterTextSize = function (text) {
        if (text === void 0) { text = "Footer"; }
        return this.measureText(text, {
            fontFamily: this.readOnlyElementStyle().getPropertyValue(style_dark_scss_1.default.dbdgTableFooterTextFontFamily),
            fontSize: this.readOnlyElementStyle().getPropertyValue(style_dark_scss_1.default.dbdgTableFooterTextFontSize),
            fontStyle: strings_1.noQuote(this.readOnlyElementStyle().getPropertyValue(style_dark_scss_1.default.dbdgTableFooterTextFontStyle)),
            fontWeight: strings_1.noQuote(this.readOnlyElementStyle().getPropertyValue(style_dark_scss_1.default.dbdgTableFooterTextFontWeight)),
        });
    };
    /**
     * Return table field size. It is include the size of icon, text plus the padding space.
     */
    Visualization.prototype.getTableFieldSize = function () {
        var opts = { name: "DB", type: types_1.DataType.Int, typeRaw: "INT" };
        var size = this.getIconsElementSize(icons_1.default.primaryKeyIcon).editable();
        size.extend(this.getTableTextFieldVariableSize(opts), true).extend(this.getTableTextFieldTypeSize(opts), true);
        opts.primary = true;
        size.extend(this.getIconsElementSize(icons_1.default.primaryKeyIcon), true);
        opts.primary = false;
        opts.foreign = true;
        size.extend(this.getIconsElementSize(icons_1.default.foreignKeyIcon), true);
        opts.primary = false;
        opts.foreign = false;
        opts.unique = true;
        size.extend(this.getIconsElementSize(icons_1.default.uniqueKeyIcon), true);
      //  size.extend(this.getIconsElementSize(icons_1.default.passwordIcon), true);
        return size.padding(Visualization.TableFieldPadding, true);
    };
    /**
     * Return table field text size base the field options.
     * @param options field option
     */
    Visualization.prototype.getTableTextFieldVariableSize = function (options) {
        var fieldKind = Visualization.getFieldOptionsKind(options);
        return this.measureText(options.name, {
            fontFamily: this.readOnlyElementStyle().getPropertyValue("--dbdg-field-text-" + fieldKind + "-font-family"),
            fontSize: this.readOnlyElementStyle().getPropertyValue("--dbdg-field-text-" + fieldKind + "-font-size"),
            fontStyle: this.readOnlyElementStyle().getPropertyValue("--dbdg-field-text-" + fieldKind + "-font-style"),
            fontWeight: this.readOnlyElementStyle().getPropertyValue("--dbdg-field-text-" + fieldKind + "-font-weight"),
        });
    };
    /**
     * Return table field text size of a string represent type of the field.
     * @param options field option
     */
    Visualization.prototype.getTableTextFieldTypeSize = function (options) {
        return this.measureText(options.typeRaw, {
            fontFamily: this.readOnlyElementStyle().getPropertyValue(style_dark_scss_1.default.dbdgFieldTextTypeFontFamily),
            fontSize: this.readOnlyElementStyle().getPropertyValue(style_dark_scss_1.default.dbdgFieldTextTypeFontSize),
            fontStyle: strings_1.noQuote(this.readOnlyElementStyle().getPropertyValue(style_dark_scss_1.default.dbdgFieldTextTypeFontStyle)),
            fontWeight: strings_1.noQuote(this.readOnlyElementStyle().getPropertyValue(style_dark_scss_1.default.dbdgFieldTextTypeFontWeight)),
        });
    };
    /**
     * Return a readonly style declaration.
     */
    Visualization.prototype.readOnlyElementStyle = function () {
        if (this.doc instanceof DocumentFragment) {
            return getComputedStyle(this.doc.ownerDocument.documentElement);
        }
        else {
            return getComputedStyle(this.doc.documentElement);
        }
    };
    /**
     * Return a writable style declaration.
     */
    Visualization.prototype.writableElementStyle = function () {
        if (this.doc instanceof DocumentFragment) {
            return this.doc.ownerDocument.documentElement.style;
        }
        else {
            return this.doc.documentElement.style;
        }
    };
    /**
     * Measure the text size.
     * @param text string to be measured
     * @param attr text element's attribute
     */
    Visualization.prototype.measureText = function (text, attr) {
        var textEle = this.textElement;
        var box;
        try {
            textEle.nodeValue = text;
            textEle.textContent = text;
            box = attributes_1.applyAttribute(textEle, attr).getBBox();
            return box;
        }
        finally {
            var allAttr = textEle.attributes;
            for (var i = allAttr.length - 1; i >= 0; i--) {
                if (allAttr[i].textContent === "visibility") {
                    continue;
                }
                textEle.removeAttributeNode(allAttr[i]);
            }
        }
    };
    Visualization.tableTextPadding = { left: 6, right: 6, top: 8, bottom: 8 };
    Visualization.tableFieldpadding = { left: 6, right: 6, top: 4, bottom: 4 };
    Visualization.space = 20;
    return Visualization;
}());
exports.Visualization = Visualization;


/***/ })

/******/ });
});
//# sourceMappingURL=db-diagram.js.map