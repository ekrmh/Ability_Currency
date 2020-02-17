/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(4)
var $app_template$ = __webpack_require__(8)
var $app_style$ = __webpack_require__(9)
var $app_script$ = __webpack_require__(10)

$app_define$('@app-component/multipleChoices', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})

$app_bootstrap$('@app-component/multipleChoices',{ packagerName:'fa-toolkit', packagerVersion: '2.1.0-Stable.300'})

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(5)
var $app_style$ = __webpack_require__(6)
var $app_script$ = __webpack_require__(7)

$app_define$('@app-component/card_box', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "card_box"
  ],
  "children": [
    {
      "type": "div",
      "attr": {},
      "classList": [
        "title_box"
      ],
      "children": [
        {
          "type": "image",
          "attr": {
            "src": function () {return this.titleMsg.logoUrl}
          },
          "classList": [
            "title_logo"
          ]
        },
        {
          "type": "text",
          "attr": {
            "value": function () {return this.titleMsg.name}
          },
          "classList": [
            "title"
          ]
        },
        {
          "type": "input",
          "attr": {
            "type": "button",
            "value": "↻"
          },
          "classList": [
            "refresh"
          ],
          "events": {
            "click": "refreshClick"
          }
        }
      ]
    },
    {
      "type": "slot",
      "attr": {}
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "button_box"
      ],
      "children": [
        {
          "type": "block",
          "attr": {},
          "repeat": function () {return this.menuMsg},
          "children": [
            {
              "type": "text",
              "attr": {
                "value": function () {return this.menuMsg[this.$idx].buttonText}
              },
              "classList": [
                "menu"
              ],
              "events": {
                "click": function(evt){this.menuClick(this.$idx,evt)}
              }
            }
          ]
        }
      ]
    }
  ]
}

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = {
  ".text-color-primary": {
    "color": "rgba(0,0,0,0.9)"
  },
  ".text-color-secondary": {
    "color": "rgba(0,0,0,0.6)"
  },
  ".text-color-tertiary": {
    "color": "rgba(0,0,0,0.38)"
  },
  ".card_box": {
    "flexDirection": "column",
    "paddingLeft": "33.33333px",
    "paddingRight": "33.33333px"
  },
  ".title_box": {
    "height": "100px",
    "alignItems": "center"
  },
  ".title_logo": {
    "width": "33.33333px",
    "height": "33.33333px",
    "borderRadius": "8.33333px"
  },
  ".title": {
    "marginLeft": "16.66667px",
    "color": "rgba(0,0,0,0.9)",
    "fontSize": "25px"
  },
  ".refresh": {
    "position": "absolute",
    "right": "16.66667px",
    "backgroundColor": "#ffffff",
    "color": "rgba(0,0,0,0.9)"
  },
  ".button_box": {
    "height": "100px",
    "alignContent": "center",
    "alignItems": "center"
  },
  ".menu": {
    "marginRight": "50px",
    "color": "#007dff",
    "fontWeight": "500",
    "fontSize": "29.16667px"
  }
}

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){"use strict";

module.exports = {
  props: ['titleMsg', 'menuMsg'],
  menuClick: function menuClick(idx) {
    this.$dispatch('menu-click', {
      'idx': idx
    });
  },
  refreshClick: function refreshClick() {
    console.log("refresh clicked");
    this.$dispatch('refresh-click', {});
  }
};
var moduleOwn = exports.default || module.exports;
var accessors = ['public', 'protected', 'private'];
if (moduleOwn.data && accessors.some(function (acc) {
    return moduleOwn[acc];
  })) {
  throw new Error('For VM objects, attribute data must not coexist with public, protected, or private. Please replace data with public.');
} else if (!moduleOwn.data) {
  moduleOwn.data = {};
  moduleOwn._descriptor = {};
  accessors.forEach(function(acc) {
    var accType = typeof moduleOwn[acc];
    if (accType === 'object') {
      moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);
      for (var name in moduleOwn[acc]) {
        moduleOwn._descriptor[name] = {access : acc};
      }
    } else if (accType === 'function') {
      console.warn('For VM objects, attribute ' + acc + ' value must not be a function. Change the value to an object.');
    }
  });
}}

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = {
  "type": "card_box",
  "attr": {
    "titleMsg": function () {return this.disPlayContent.ability},
    "menuMsg": function () {return this.disPlayContent.buttonLinkArray},
    "menuClick": function () {return this.menuClick},
    "refreshClick": function () {return this.refreshClick}
  },
  "children": [
    {
      "type": "div",
      "attr": {},
      "classList": [
        "contentBox"
      ],
      "children": [
        {
          "type": "progress",
          "attr": {
            "type": "circular",
            "show": function () {return this.isDataFetching}
          }
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "content_item"
          ],
          "repeat": function () {return this.viewCurrencyData},
          "children": [
            {
              "type": "div",
              "attr": {},
              "classList": [
                "content_left"
              ],
              "children": [
                {
                  "type": "text",
                  "attr": {
                    "value": function () {return this.$item.code}
                  },
                  "classList": [
                    "stockName"
                  ]
                },
                {
                  "type": "text",
                  "attr": {
                    "value": function () {return this.$item.name}
                  },
                  "classList": [
                    "stockNumber"
                  ]
                }
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "content_right"
              ],
              "children": [
                {
                  "type": "text",
                  "attr": {
                    "value": function () {return this.$item.rate}
                  },
                  "classList": [
                    "info1"
                  ]
                },
                {
                  "type": "text",
                  "attr": {
                    "value": function () {return (this.$item.fluctuation>0?'+':'')+(this.$item.fluctuation)+'%'}
                  },
                  "classList": function () {return [this.$item.fluctuation>0?'info2-green':'info2-red']}
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = {
  ".text-color-primary": {
    "color": "rgba(0,0,0,0.9)"
  },
  ".text-color-secondary": {
    "color": "rgba(0,0,0,0.6)"
  },
  ".text-color-tertiary": {
    "color": "rgba(0,0,0,0.38)"
  },
  ".contentBox": {
    "flexDirection": "column",
    "justifyContent": "space-between"
  },
  ".content_item": {
    "justifyContent": "space-between",
    "paddingTop": "16.66667px",
    "paddingRight": "0px",
    "paddingBottom": "16.66667px",
    "paddingLeft": "0px",
    "borderBottomWidth": "1px",
    "borderBottomStyle": "solid",
    "borderBottomColor": "rgba(0,0,0,0.2)"
  },
  ".content_left": {
    "width": "33%",
    "flexDirection": "column"
  },
  ".stockName": {
    "fontSize": "33.33333px",
    "color": "rgba(0,0,0,0.9)",
    "fontWeight": "500",
    "marginBottom": "4.16667px"
  },
  ".stockNumber": {
    "fontSize": "25px",
    "color": "rgba(0,0,0,0.6)",
    "fontWeight": "400"
  },
  ".content_right": {
    "flex": 1,
    "justifyContent": "space-around"
  },
  ".content_right text": {
    "textAlign": "right",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "content_right"
        },
        {
          "t": "d"
        },
        {
          "t": "t",
          "n": "text"
        }
      ]
    }
  },
  ".info1": {
    "fontSize": "29.16667px",
    "color": "rgba(0,0,0,0.9)",
    "fontWeight": "500"
  },
  ".info2-red": {
    "fontSize": "29.16667px",
    "color": "#FA2A2D",
    "fontWeight": "500"
  },
  ".info2-green": {
    "fontSize": "29.16667px",
    "color": "#41BA41",
    "fontWeight": "500"
  }
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(module, exports, $app_require$){"use strict";

var _img_url = __webpack_require__(11);

var _system = _interopRequireDefault($app_require$("@app-module/system.fetch"));

var _system2 = _interopRequireDefault($app_require$("@app-module/system.package"));

var _system3 = _interopRequireDefault($app_require$("@app-module/system.router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

module.exports = {
  data: {
    viewCurrencyData: [],
    currencyData: [],
    viewMore: false,
    isDataFetching: "false",
    disPlayContent: {
      "ability": {
        "name": "Currency",
        "logoUrl": "data:image/png;base64,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"
      },
      "buttonLinkArray": [{
        "buttonText": "View more"
      }]
    }
  },
  onInit: function onInit() {
    this.$on('menu-click', this.menuClick);
    this.$on('refresh-click', this.refreshClick);
    this.getPortfolio();
  },
  getPortfolio: function getPortfolio() {
    var that = this;
    this.isDataFetching = "true";

    _system["default"].fetch({
      url: "https://currency-rest-api.herokuapp.com/portfolio/portfolio",
      responseType: 'json',
      success: function success(data) {
        var currencies = data.data.currencies;
        that.currencyData = currencies;
        that.viewCurrencyData = that.viewMore ? that.currencyData : that.currencyData.slice(0, 3);
        that.isDataFetching = "false";
        console.log(data);
      },
      fail: function fail(data, code) {
        that.isDataFetching = "false";
        console.log(data);
      }
    });
  },
  refreshClick: function refreshClick() {
    console.log("refresh");
    this.getPortfolio();
  },
  menuClick: function menuClick(event) {
    switch (event.detail.idx) {
      case 0:
        this.viewMore = !this.viewMore;
        this.disPlayContent.buttonLinkArray[0].buttonText = this.viewMore ? "View less" : "View more";
        this.viewCurrencyData = this.viewMore ? this.currencyData : this.currencyData.slice(0, 3);
        break;

      default:
        break;
    }
  }
};
var moduleOwn = exports.default || module.exports;
var accessors = ['public', 'protected', 'private'];
if (moduleOwn.data && accessors.some(function (acc) {
    return moduleOwn[acc];
  })) {
  throw new Error('For VM objects, attribute data must not coexist with public, protected, or private. Please replace data with public.');
} else if (!moduleOwn.data) {
  moduleOwn.data = {};
  moduleOwn._descriptor = {};
  accessors.forEach(function(acc) {
    var accType = typeof moduleOwn[acc];
    if (accType === 'object') {
      moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);
      for (var name in moduleOwn[acc]) {
        moduleOwn._descriptor[name] = {access : acc};
      }
    } else if (accType === 'function') {
      console.warn('For VM objects, attribute ' + acc + ' value must not be a function. Change the value to an object.');
    }
  });
}}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.URL = void 0;
var URL = {
  "upUrl": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAplJREFUeAHtmT1LBDEQhicruoVgIweiltoo2AlWiq2CYGOh/gpbwUKw9V+cxTWCoO2BlWCnaKOlXyA2gsUqXsy7y8KdyBEzs7vizcDd7nFJ3syTyW4yIVJTAkpACSgBJaAElIASUAJKQAkoASWgBHqNgCnN4avGAL18LFKrteI0p4jsKJFxH5h9cPfuQ9cURUc03N+k6bX39K+Cv4oH0GyMkEl2nB8bZO2Qlz/GvLpydbLxLi2uPXnVCSxUHICbk5juX7bJ0pYb4cGw/pk3MrRPY8N7NLmUhLXRvVYxALJRP3QjPtdd3vNfY85cNKwWEQ3yAE4PZqj1eeycH/d0z6+YMXdkzBItbF76VfArJQsgG/lzcedzXwDBxrOSkRDlbbOvmPMmQdjLjnx7x9A2NKAlZHIA0gee0Jzv5hyeK9ASMpkpgNCn5Db8af9bb9zbgeIJiakgEwHpez70Vfdb51HeaWVri5DKHXX4EYAV3nPy7Oa+3yKnQ57xA4ulWlzjrhj5EYDlbdnOgxs0oc00PoBsbc/sRmB1AW0+gHRjE+gAv5rbVPFMAAB2dVUZX1sAQL6lrQICX1sAQBWO55rW5nehVwEASGZUZo9cZQEAaSaH24/A+nxtAQAujVWdsbX5AJDDq8oEtPkAkMDMcnjlYoAmtJnGB5Blb+vMfoRUr3P3ARDlA0AryN4StqhlmdNKNfl6MgCQukb2tiyDllC6XAYAHEfqGtnbog0a0BIyOQDI2yN1jcRlUZYlRVclzwjkAMBphGXUt1wIhDwtLhT6+RjJAkCr8+sXaepacjpkByOz0mcC6C4/JYZWfrKePhprB9Kzh6PtEHD/R4/Hv3dTfysBJaAElIASUAJKQAkoASWgBJSAElAC/5/AFyX3yNpu52xjAAAAAElFTkSuQmCC",
  "offUrl": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAspJREFUeAHtmTFLXEEQx2fuRE8EQUIgSIiNVQo74cpIqigEUmiT75DiQJuAhcFG4Yp8h2uSQhBMmoitkC4BqzSKqBBCICDnCXGd2X0PzkbXnXnvCTcDd+8dt7v/md+bfW93HoCZETACRsAIGAEjYASMgBEwAkbACBgBIzBoBLCsgN2nxWE4+jsH7v9r0nwOgJMAjj5seELn9IEDwPo2PJvYw6XPl/6vgr8KB+A25p8AXqxSHG/BufGoeBD/UbsOuMYarnw5i+qT2KgwAO7jqxHoXb6nK9uiwMeS/EM8p+xow8jwOr772ksa445OhQDwVx26W6TdvEM/9u99gNE3RWSDOgC3+XIG3NUORfY0NrrIdscwVJ/H1refke2jmqkCyK78d1LWDj4P5pgyYVYzE2r5yNKjn/Mh7YsKnl2ksbtbQUvqceivBiDc8NTm/G3RNTOt29pE/6cyBbJH3a/ku320u1lDfjq4xrTGVNDJAH7Opz7q7hs8t2etsLZI6X2jjzgD/Arv8M9vcipukXNDXvCDF0tTjx5LV4zyDPDL25KDZ24MnLWFJgcQ1vZCNxK7K2jLAfiNTWIA8m60qZKZAgDe1VVlcm0FAPmWtgoIcm0FAFUEnmk6cFJ1BQBczKjIEE+lygoAfCVH6kdif7m2AgAqY1VnYm05AK7hVWUK2nIAVMCEUMMrFwNrsrbQxACytXhH6EdK9450H8CiYgDec6reUhZQAbMkC9vhNQ01FQBhX07V29IM2xq1AHZXBYCPm0rXdKTqbeG2z2VyLRVxPaDfkYEuijIIn5ZYW6BTqt6qWyiLK78p0psCWby4vPuDS9f0U3M68IuRWe13AuyyOgAe1GdCo/ECsPZB9HTguz2PQWNp3fTYv35TvQf0D5yfZxXjwXs5mgPIjw/19Xjunx2NgBEwAkbACBgBI2AEjIARMAJGwAgYgcEhcA3esslu0Wp+GwAAAABJRU5ErkJggg=="
};
exports.URL = URL;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGRcXG11bHRpcGxlQ2hvaWNlc1xcbXVsdGlwbGVDaG9pY2VzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy9jOi9Vc2Vycy9lMDA1NTYyMzYvLnF1aWNrYXBwLWlkZS93b3Jrc3BhY2UvY29tLmFiaWxpdHljdXJyZW5jeS5jb20vc3JjL211bHRpcGxlQ2hvaWNlcy9tdWx0aXBsZUNob2ljZXMudXgiLCJ3ZWJwYWNrOi8vL2M6L1VzZXJzL2UwMDU1NjIzNi8ucXVpY2thcHAtaWRlL3dvcmtzcGFjZS9jb20uYWJpbGl0eWN1cnJlbmN5LmNvbS9zcmMvY29tbW9uL2NvbXBvbmVudC9jYXJkX2JveC9jYXJkX2JveC51eCIsIndlYnBhY2s6Ly8vYzovVXNlcnMvZTAwNTU2MjM2Ly5xdWlja2FwcC1pZGUvd29ya3NwYWNlL2NvbS5hYmlsaXR5Y3VycmVuY3kuY29tL3NyYy9jb21tb24vY29tcG9uZW50L2NhcmRfYm94L2NhcmRfYm94LnV4PzE3MGYiLCJ3ZWJwYWNrOi8vL2M6L1VzZXJzL2UwMDU1NjIzNi8ucXVpY2thcHAtaWRlL3dvcmtzcGFjZS9jb20uYWJpbGl0eWN1cnJlbmN5LmNvbS9zcmMvY29tbW9uL2NvbXBvbmVudC9jYXJkX2JveC9jYXJkX2JveC51eD9kZGI0Iiwid2VicGFjazovLy9jOi9Vc2Vycy9lMDA1NTYyMzYvLnF1aWNrYXBwLWlkZS93b3Jrc3BhY2UvY29tLmFiaWxpdHljdXJyZW5jeS5jb20vc3JjL2NvbW1vbi9jb21wb25lbnQvY2FyZF9ib3gvY2FyZF9ib3gudXg/ZDI5NiIsIndlYnBhY2s6Ly8vYzovVXNlcnMvZTAwNTU2MjM2Ly5xdWlja2FwcC1pZGUvd29ya3NwYWNlL2NvbS5hYmlsaXR5Y3VycmVuY3kuY29tL3NyYy9tdWx0aXBsZUNob2ljZXMvbXVsdGlwbGVDaG9pY2VzLnV4P2ViNmMiLCJ3ZWJwYWNrOi8vL2M6L1VzZXJzL2UwMDU1NjIzNi8ucXVpY2thcHAtaWRlL3dvcmtzcGFjZS9jb20uYWJpbGl0eWN1cnJlbmN5LmNvbS9zcmMvbXVsdGlwbGVDaG9pY2VzL211bHRpcGxlQ2hvaWNlcy51eD85NzZkIiwid2VicGFjazovLy9jOi9Vc2Vycy9lMDA1NTYyMzYvLnF1aWNrYXBwLWlkZS93b3Jrc3BhY2UvY29tLmFiaWxpdHljdXJyZW5jeS5jb20vc3JjL211bHRpcGxlQ2hvaWNlcy9tdWx0aXBsZUNob2ljZXMudXg/MGRjMyIsIndlYnBhY2s6Ly8vYzovVXNlcnMvZTAwNTU2MjM2Ly5xdWlja2FwcC1pZGUvd29ya3NwYWNlL2NvbS5hYmlsaXR5Y3VycmVuY3kuY29tL3NyYy9Db21tb24vanMvaW1nX3VybC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMyk7XG4iLCJyZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0h1YXdlaSBRdWlja0FwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvbG9hZGVyLmpzP3R5cGU9Y29tcG9uZW50IS4uL2NvbW1vbi9jb21wb25lbnQvY2FyZF9ib3gvY2FyZF9ib3gudXg/bmFtZT1jYXJkX2JveFwiKVxudmFyICRhcHBfdGVtcGxhdGUkID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgUXVpY2tBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWpzb24tbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSHVhd2VpIFF1aWNrQXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS10ZW1wbGF0ZS1sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgUXVpY2tBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9dGVtcGxhdGVzIS4vbXVsdGlwbGVDaG9pY2VzLnV4XCIpXG52YXIgJGFwcF9zdHlsZSQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0h1YXdlaSBRdWlja0FwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtanNvbi1sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgUXVpY2tBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLXN0eWxlLWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c3R5bGVzJnJlc291cmNlUGF0aD1jOlxcXFxVc2Vyc1xcXFxlMDA1NTYyMzZcXFxcLnF1aWNrYXBwLWlkZVxcXFx3b3Jrc3BhY2VcXFxcY29tLmFiaWxpdHljdXJyZW5jeS5jb21cXFxcc3JjXFxcXG11bHRpcGxlQ2hvaWNlc1xcXFxtdWx0aXBsZUNob2ljZXMudXghLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgUXVpY2tBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyIS4uLy4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSHVhd2VpIFF1aWNrQXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyZyZXNvdXJjZVBhdGg9YzpcXFxcVXNlcnNcXFxcZTAwNTU2MjM2XFxcXC5xdWlja2FwcC1pZGVcXFxcd29ya3NwYWNlXFxcXGNvbS5hYmlsaXR5Y3VycmVuY3kuY29tXFxcXHNyY1xcXFxtdWx0aXBsZUNob2ljZXNcXFxcbXVsdGlwbGVDaG9pY2VzLnV4IS4vbXVsdGlwbGVDaG9pY2VzLnV4XCIpXG52YXIgJGFwcF9zY3JpcHQkID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgUXVpY2tBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLXNjcmlwdC1sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgUXVpY2tBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWFjY2Vzcy1sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgUXVpY2tBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlcj9wcmVzZXRzW109YzpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIdWF3ZWkgUXVpY2tBcHAgSURFXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxkZXZlY28tZGVidWdcXFxcbm9kZV9tb2R1bGVzXFxcXEBiYWJlbFxcXFxwcmVzZXQtZW52JnBsdWdpbnNbXT1jOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEh1YXdlaSBRdWlja0FwcCBJREVcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGRldmVjby1kZWJ1Z1xcXFxub2RlX21vZHVsZXNcXFxcQGJhYmVsXFxcXHBsdWdpbi10cmFuc2Zvcm0tbW9kdWxlcy1jb21tb25qcyZwbHVnaW5zW109YzpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIdWF3ZWkgUXVpY2tBcHAgSURFXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxkZXZlY28tZGVidWdcXFxcbm9kZV9tb2R1bGVzXFxcXGZhLXRvb2xraXRcXFxcbGliXFxcXGpzeC1sb2FkZXIuanMmY29tbWVudHM9ZmFsc2UhLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgUXVpY2tBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c2NyaXB0cyEuL211bHRpcGxlQ2hvaWNlcy51eFwiKVxuXG4kYXBwX2RlZmluZSQoJ0BhcHAtY29tcG9uZW50L211bHRpcGxlQ2hvaWNlcycsIFtdLCBmdW5jdGlvbigkYXBwX3JlcXVpcmUkLCAkYXBwX2V4cG9ydHMkLCAkYXBwX21vZHVsZSQpe1xuICAgICAkYXBwX3NjcmlwdCQoJGFwcF9tb2R1bGUkLCAkYXBwX2V4cG9ydHMkLCAkYXBwX3JlcXVpcmUkKVxuICAgICBpZiAoJGFwcF9leHBvcnRzJC5fX2VzTW9kdWxlICYmICRhcHBfZXhwb3J0cyQuZGVmYXVsdCkge1xuICAgICAgICAgICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMgPSAkYXBwX2V4cG9ydHMkLmRlZmF1bHRcbiAgICAgICAgfVxuICAgICAkYXBwX21vZHVsZSQuZXhwb3J0cy50ZW1wbGF0ZSA9ICRhcHBfdGVtcGxhdGUkXG4gICAgICRhcHBfbW9kdWxlJC5leHBvcnRzLnN0eWxlID0gJGFwcF9zdHlsZSRcbn0pXG5cbiRhcHBfYm9vdHN0cmFwJCgnQGFwcC1jb21wb25lbnQvbXVsdGlwbGVDaG9pY2VzJyx7IHBhY2thZ2VyTmFtZTonZmEtdG9vbGtpdCcsIHBhY2thZ2VyVmVyc2lvbjogJzIuMS4wLVN0YWJsZS4zMDAnfSkiLCJ2YXIgJGFwcF90ZW1wbGF0ZSQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0h1YXdlaSBRdWlja0FwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtanNvbi1sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgUXVpY2tBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLXRlbXBsYXRlLWxvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0h1YXdlaSBRdWlja0FwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT10ZW1wbGF0ZXMhLi9jYXJkX2JveC51eFwiKVxudmFyICRhcHBfc3R5bGUkID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgUXVpY2tBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWpzb24tbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSHVhd2VpIFF1aWNrQXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1zdHlsZS1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyZyZXNvdXJjZVBhdGg9YzpcXFxcVXNlcnNcXFxcZTAwNTU2MjM2XFxcXC5xdWlja2FwcC1pZGVcXFxcd29ya3NwYWNlXFxcXGNvbS5hYmlsaXR5Y3VycmVuY3kuY29tXFxcXHNyY1xcXFxjb21tb25cXFxcY29tcG9uZW50XFxcXGNhcmRfYm94XFxcXGNhcmRfYm94LnV4IS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSHVhd2VpIFF1aWNrQXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlciEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0h1YXdlaSBRdWlja0FwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zdHlsZXMmcmVzb3VyY2VQYXRoPWM6XFxcXFVzZXJzXFxcXGUwMDU1NjIzNlxcXFwucXVpY2thcHAtaWRlXFxcXHdvcmtzcGFjZVxcXFxjb20uYWJpbGl0eWN1cnJlbmN5LmNvbVxcXFxzcmNcXFxcY29tbW9uXFxcXGNvbXBvbmVudFxcXFxjYXJkX2JveFxcXFxjYXJkX2JveC51eCEuL2NhcmRfYm94LnV4XCIpXG52YXIgJGFwcF9zY3JpcHQkID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgUXVpY2tBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLXNjcmlwdC1sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgUXVpY2tBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWFjY2Vzcy1sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgUXVpY2tBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlcj9wcmVzZXRzW109YzpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIdWF3ZWkgUXVpY2tBcHAgSURFXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxkZXZlY28tZGVidWdcXFxcbm9kZV9tb2R1bGVzXFxcXEBiYWJlbFxcXFxwcmVzZXQtZW52JnBsdWdpbnNbXT1jOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEh1YXdlaSBRdWlja0FwcCBJREVcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGRldmVjby1kZWJ1Z1xcXFxub2RlX21vZHVsZXNcXFxcQGJhYmVsXFxcXHBsdWdpbi10cmFuc2Zvcm0tbW9kdWxlcy1jb21tb25qcyZwbHVnaW5zW109YzpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIdWF3ZWkgUXVpY2tBcHAgSURFXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxkZXZlY28tZGVidWdcXFxcbm9kZV9tb2R1bGVzXFxcXGZhLXRvb2xraXRcXFxcbGliXFxcXGpzeC1sb2FkZXIuanMmY29tbWVudHM9ZmFsc2UhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgUXVpY2tBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c2NyaXB0cyEuL2NhcmRfYm94LnV4XCIpXG5cbiRhcHBfZGVmaW5lJCgnQGFwcC1jb21wb25lbnQvY2FyZF9ib3gnLCBbXSwgZnVuY3Rpb24oJGFwcF9yZXF1aXJlJCwgJGFwcF9leHBvcnRzJCwgJGFwcF9tb2R1bGUkKXtcbiAgICAgJGFwcF9zY3JpcHQkKCRhcHBfbW9kdWxlJCwgJGFwcF9leHBvcnRzJCwgJGFwcF9yZXF1aXJlJClcbiAgICAgaWYgKCRhcHBfZXhwb3J0cyQuX19lc01vZHVsZSAmJiAkYXBwX2V4cG9ydHMkLmRlZmF1bHQpIHtcbiAgICAgICAgICAgICRhcHBfbW9kdWxlJC5leHBvcnRzID0gJGFwcF9leHBvcnRzJC5kZWZhdWx0XG4gICAgICAgIH1cbiAgICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMudGVtcGxhdGUgPSAkYXBwX3RlbXBsYXRlJFxuICAgICAkYXBwX21vZHVsZSQuZXhwb3J0cy5zdHlsZSA9ICRhcHBfc3R5bGUkXG59KVxuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwidHlwZVwiOiBcImRpdlwiLFxuICBcImF0dHJcIjoge30sXG4gIFwiY2xhc3NMaXN0XCI6IFtcbiAgICBcImNhcmRfYm94XCJcbiAgXSxcbiAgXCJjaGlsZHJlblwiOiBbXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICBcImF0dHJcIjoge30sXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwidGl0bGVfYm94XCJcbiAgICAgIF0sXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImltYWdlXCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgIFwic3JjXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy50aXRsZU1zZy5sb2dvVXJsfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJ0aXRsZV9sb2dvXCJcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnRpdGxlTXNnLm5hbWV9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcInRpdGxlXCJcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJpbnB1dFwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICBcInR5cGVcIjogXCJidXR0b25cIixcbiAgICAgICAgICAgIFwidmFsdWVcIjogXCLihrtcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJyZWZyZXNoXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgIFwiY2xpY2tcIjogXCJyZWZyZXNoQ2xpY2tcIlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwic2xvdFwiLFxuICAgICAgXCJhdHRyXCI6IHt9XG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJidXR0b25fYm94XCJcbiAgICAgIF0sXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImJsb2NrXCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgIFwicmVwZWF0XCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5tZW51TXNnfSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLm1lbnVNc2dbdGhpcy4kaWR4XS5idXR0b25UZXh0fVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJtZW51XCJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICAgICAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oZXZ0KXt0aGlzLm1lbnVDbGljayh0aGlzLiRpZHgsZXZ0KX1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgXVxufSIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcIi50ZXh0LWNvbG9yLXByaW1hcnlcIjoge1xuICAgIFwiY29sb3JcIjogXCJyZ2JhKDAsMCwwLDAuOSlcIlxuICB9LFxuICBcIi50ZXh0LWNvbG9yLXNlY29uZGFyeVwiOiB7XG4gICAgXCJjb2xvclwiOiBcInJnYmEoMCwwLDAsMC42KVwiXG4gIH0sXG4gIFwiLnRleHQtY29sb3ItdGVydGlhcnlcIjoge1xuICAgIFwiY29sb3JcIjogXCJyZ2JhKDAsMCwwLDAuMzgpXCJcbiAgfSxcbiAgXCIuY2FyZF9ib3hcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIzMy4zMzMzM3B4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIzMy4zMzMzM3B4XCJcbiAgfSxcbiAgXCIudGl0bGVfYm94XCI6IHtcbiAgICBcImhlaWdodFwiOiBcIjEwMHB4XCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCIudGl0bGVfbG9nb1wiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjMzLjMzMzMzcHhcIixcbiAgICBcImhlaWdodFwiOiBcIjMzLjMzMzMzcHhcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjguMzMzMzNweFwiXG4gIH0sXG4gIFwiLnRpdGxlXCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIxNi42NjY2N3B4XCIsXG4gICAgXCJjb2xvclwiOiBcInJnYmEoMCwwLDAsMC45KVwiLFxuICAgIFwiZm9udFNpemVcIjogXCIyNXB4XCJcbiAgfSxcbiAgXCIucmVmcmVzaFwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcImFic29sdXRlXCIsXG4gICAgXCJyaWdodFwiOiBcIjE2LjY2NjY3cHhcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmZmZmZmZcIixcbiAgICBcImNvbG9yXCI6IFwicmdiYSgwLDAsMCwwLjkpXCJcbiAgfSxcbiAgXCIuYnV0dG9uX2JveFwiOiB7XG4gICAgXCJoZWlnaHRcIjogXCIxMDBweFwiLFxuICAgIFwiYWxpZ25Db250ZW50XCI6IFwiY2VudGVyXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCIubWVudVwiOiB7XG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjUwcHhcIixcbiAgICBcImNvbG9yXCI6IFwiIzAwN2RmZlwiLFxuICAgIFwiZm9udFdlaWdodFwiOiBcIjUwMFwiLFxuICAgIFwiZm9udFNpemVcIjogXCIyOS4xNjY2N3B4XCJcbiAgfVxufSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCAkYXBwX3JlcXVpcmUkKXtcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHByb3BzOiBbJ3RpdGxlTXNnJywgJ21lbnVNc2cnXSxcbiAgbWVudUNsaWNrOiBmdW5jdGlvbiBtZW51Q2xpY2soaWR4KSB7XG4gICAgdGhpcy4kZGlzcGF0Y2goJ21lbnUtY2xpY2snLCB7XG4gICAgICAnaWR4JzogaWR4XG4gICAgfSk7XG4gIH0sXG4gIHJlZnJlc2hDbGljazogZnVuY3Rpb24gcmVmcmVzaENsaWNrKCkge1xuICAgIGNvbnNvbGUubG9nKFwicmVmcmVzaCBjbGlja2VkXCIpO1xuICAgIHRoaXMuJGRpc3BhdGNoKCdyZWZyZXNoLWNsaWNrJywge30pO1xuICB9XG59O1xudmFyIG1vZHVsZU93biA9IGV4cG9ydHMuZGVmYXVsdCB8fCBtb2R1bGUuZXhwb3J0cztcbnZhciBhY2Nlc3NvcnMgPSBbJ3B1YmxpYycsICdwcm90ZWN0ZWQnLCAncHJpdmF0ZSddO1xuaWYgKG1vZHVsZU93bi5kYXRhICYmIGFjY2Vzc29ycy5zb21lKGZ1bmN0aW9uIChhY2MpIHtcbiAgICByZXR1cm4gbW9kdWxlT3duW2FjY107XG4gIH0pKSB7XG4gIHRocm93IG5ldyBFcnJvcignRm9yIFZNIG9iamVjdHMsIGF0dHJpYnV0ZSBkYXRhIG11c3Qgbm90IGNvZXhpc3Qgd2l0aCBwdWJsaWMsIHByb3RlY3RlZCwgb3IgcHJpdmF0ZS4gUGxlYXNlIHJlcGxhY2UgZGF0YSB3aXRoIHB1YmxpYy4nKTtcbn0gZWxzZSBpZiAoIW1vZHVsZU93bi5kYXRhKSB7XG4gIG1vZHVsZU93bi5kYXRhID0ge307XG4gIG1vZHVsZU93bi5fZGVzY3JpcHRvciA9IHt9O1xuICBhY2Nlc3NvcnMuZm9yRWFjaChmdW5jdGlvbihhY2MpIHtcbiAgICB2YXIgYWNjVHlwZSA9IHR5cGVvZiBtb2R1bGVPd25bYWNjXTtcbiAgICBpZiAoYWNjVHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIG1vZHVsZU93bi5kYXRhID0gT2JqZWN0LmFzc2lnbihtb2R1bGVPd24uZGF0YSwgbW9kdWxlT3duW2FjY10pO1xuICAgICAgZm9yICh2YXIgbmFtZSBpbiBtb2R1bGVPd25bYWNjXSkge1xuICAgICAgICBtb2R1bGVPd24uX2Rlc2NyaXB0b3JbbmFtZV0gPSB7YWNjZXNzIDogYWNjfTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGFjY1R5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbnNvbGUud2FybignRm9yIFZNIG9iamVjdHMsIGF0dHJpYnV0ZSAnICsgYWNjICsgJyB2YWx1ZSBtdXN0IG5vdCBiZSBhIGZ1bmN0aW9uLiBDaGFuZ2UgdGhlIHZhbHVlIHRvIGFuIG9iamVjdC4nKTtcbiAgICB9XG4gIH0pO1xufX0iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJ0eXBlXCI6IFwiY2FyZF9ib3hcIixcbiAgXCJhdHRyXCI6IHtcbiAgICBcInRpdGxlTXNnXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5kaXNQbGF5Q29udGVudC5hYmlsaXR5fSxcbiAgICBcIm1lbnVNc2dcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmRpc1BsYXlDb250ZW50LmJ1dHRvbkxpbmtBcnJheX0sXG4gICAgXCJtZW51Q2xpY2tcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLm1lbnVDbGlja30sXG4gICAgXCJyZWZyZXNoQ2xpY2tcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnJlZnJlc2hDbGlja31cbiAgfSxcbiAgXCJjaGlsZHJlblwiOiBbXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICBcImF0dHJcIjoge30sXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwiY29udGVudEJveFwiXG4gICAgICBdLFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJwcm9ncmVzc1wiLFxuICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICBcInR5cGVcIjogXCJjaXJjdWxhclwiLFxuICAgICAgICAgICAgXCJzaG93XCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5pc0RhdGFGZXRjaGluZ31cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJjb250ZW50X2l0ZW1cIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJyZXBlYXRcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnZpZXdDdXJyZW5jeURhdGF9LFxuICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJjb250ZW50X2xlZnRcIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy4kaXRlbS5jb2RlfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJzdG9ja05hbWVcIlxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuJGl0ZW0ubmFtZX1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwic3RvY2tOdW1iZXJcIlxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwiY29udGVudF9yaWdodFwiXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLiRpdGVtLnJhdGV9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICBcImluZm8xXCJcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiAodGhpcy4kaXRlbS5mbHVjdHVhdGlvbj4wPycrJzonJykrKHRoaXMuJGl0ZW0uZmx1Y3R1YXRpb24pKyclJ31cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIFt0aGlzLiRpdGVtLmZsdWN0dWF0aW9uPjA/J2luZm8yLWdyZWVuJzonaW5mbzItcmVkJ119XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICBdXG59IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwiLnRleHQtY29sb3ItcHJpbWFyeVwiOiB7XG4gICAgXCJjb2xvclwiOiBcInJnYmEoMCwwLDAsMC45KVwiXG4gIH0sXG4gIFwiLnRleHQtY29sb3Itc2Vjb25kYXJ5XCI6IHtcbiAgICBcImNvbG9yXCI6IFwicmdiYSgwLDAsMCwwLjYpXCJcbiAgfSxcbiAgXCIudGV4dC1jb2xvci10ZXJ0aWFyeVwiOiB7XG4gICAgXCJjb2xvclwiOiBcInJnYmEoMCwwLDAsMC4zOClcIlxuICB9LFxuICBcIi5jb250ZW50Qm94XCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwic3BhY2UtYmV0d2VlblwiXG4gIH0sXG4gIFwiLmNvbnRlbnRfaXRlbVwiOiB7XG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcInNwYWNlLWJldHdlZW5cIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIxNi42NjY2N3B4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIwcHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIxNi42NjY2N3B4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjBweFwiLFxuICAgIFwiYm9yZGVyQm90dG9tV2lkdGhcIjogXCIxcHhcIixcbiAgICBcImJvcmRlckJvdHRvbVN0eWxlXCI6IFwic29saWRcIixcbiAgICBcImJvcmRlckJvdHRvbUNvbG9yXCI6IFwicmdiYSgwLDAsMCwwLjIpXCJcbiAgfSxcbiAgXCIuY29udGVudF9sZWZ0XCI6IHtcbiAgICBcIndpZHRoXCI6IFwiMzMlXCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCJcbiAgfSxcbiAgXCIuc3RvY2tOYW1lXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMzMuMzMzMzNweFwiLFxuICAgIFwiY29sb3JcIjogXCJyZ2JhKDAsMCwwLDAuOSlcIixcbiAgICBcImZvbnRXZWlnaHRcIjogXCI1MDBcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjQuMTY2NjdweFwiXG4gIH0sXG4gIFwiLnN0b2NrTnVtYmVyXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMjVweFwiLFxuICAgIFwiY29sb3JcIjogXCJyZ2JhKDAsMCwwLDAuNilcIixcbiAgICBcImZvbnRXZWlnaHRcIjogXCI0MDBcIlxuICB9LFxuICBcIi5jb250ZW50X3JpZ2h0XCI6IHtcbiAgICBcImZsZXhcIjogMSxcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwic3BhY2UtYXJvdW5kXCJcbiAgfSxcbiAgXCIuY29udGVudF9yaWdodCB0ZXh0XCI6IHtcbiAgICBcInRleHRBbGlnblwiOiBcInJpZ2h0XCIsXG4gICAgXCJfbWV0YVwiOiB7XG4gICAgICBcInJ1bGVEZWZcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0XCI6IFwiYVwiLFxuICAgICAgICAgIFwiblwiOiBcImNsYXNzXCIsXG4gICAgICAgICAgXCJpXCI6IGZhbHNlLFxuICAgICAgICAgIFwiYVwiOiBcImVsZW1lbnRcIixcbiAgICAgICAgICBcInZcIjogXCJjb250ZW50X3JpZ2h0XCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidFwiOiBcImRcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0XCI6IFwidFwiLFxuICAgICAgICAgIFwiblwiOiBcInRleHRcIlxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcIi5pbmZvMVwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjI5LjE2NjY3cHhcIixcbiAgICBcImNvbG9yXCI6IFwicmdiYSgwLDAsMCwwLjkpXCIsXG4gICAgXCJmb250V2VpZ2h0XCI6IFwiNTAwXCJcbiAgfSxcbiAgXCIuaW5mbzItcmVkXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMjkuMTY2NjdweFwiLFxuICAgIFwiY29sb3JcIjogXCIjRkEyQTJEXCIsXG4gICAgXCJmb250V2VpZ2h0XCI6IFwiNTAwXCJcbiAgfSxcbiAgXCIuaW5mbzItZ3JlZW5cIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIyOS4xNjY2N3B4XCIsXG4gICAgXCJjb2xvclwiOiBcIiM0MUJBNDFcIixcbiAgICBcImZvbnRXZWlnaHRcIjogXCI1MDBcIlxuICB9XG59IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsICRhcHBfcmVxdWlyZSQpe1widXNlIHN0cmljdFwiO1xuXG52YXIgX2ltZ191cmwgPSByZXF1aXJlKFwiLi4vQ29tbW9uL2pzL2ltZ191cmwuanNcIik7XG5cbnZhciBfc3lzdGVtID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdCgkYXBwX3JlcXVpcmUkKFwiQGFwcC1tb2R1bGUvc3lzdGVtLmZldGNoXCIpKTtcblxudmFyIF9zeXN0ZW0yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdCgkYXBwX3JlcXVpcmUkKFwiQGFwcC1tb2R1bGUvc3lzdGVtLnBhY2thZ2VcIikpO1xuXG52YXIgX3N5c3RlbTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KCRhcHBfcmVxdWlyZSQoXCJAYXBwLW1vZHVsZS9zeXN0ZW0ucm91dGVyXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBkYXRhOiB7XG4gICAgdmlld0N1cnJlbmN5RGF0YTogW10sXG4gICAgY3VycmVuY3lEYXRhOiBbXSxcbiAgICB2aWV3TW9yZTogZmFsc2UsXG4gICAgaXNEYXRhRmV0Y2hpbmc6IFwiZmFsc2VcIixcbiAgICBkaXNQbGF5Q29udGVudDoge1xuICAgICAgXCJhYmlsaXR5XCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiQ3VycmVuY3lcIixcbiAgICAgICAgXCJsb2dvVXJsXCI6IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFNZ0FBQURJQ0FZQUFBQ3RXSzZlQUFBYS9FbEVRVlI0WHUxZGU1Z2NWWlUvcDdvek15U1pxV3BGTkNxb3F3ajZyWUJFUWtoNFpDSHA2b21BWURLWjdvU0FQQUtzRDFZUVdOZjkwS0NzcXl1NEtDSUw2TXFLU2Zjd3hFaVFUTmRraUJFSkR5WGdDeUVRUDhVSEQ4RnZxbnVTTUpQcHJyUGY3WGt3TS9TajdxM3E3cHJwTS8vT2VkM2Z1YisrVlhYdlBRZUIveGdCUnFBa0FzallNQUtNUUdrRW1DQThPeGlCTWdnd1FYaDZNQUpNRUo0RGpJQWFBcnlDcU9IR1dnMkNBQk9rUVJMTncxUkRnQW1paGh0ck5RZ0NUSkFHU1RRUFV3MEJKb2dhYnF6VklBZ3dRUm9rMFR4TU5RU1lJR3E0c1ZhRElNQUVhWkJFOHpEVkVHQ0NxT0hHV2cyQ0FCT2tRUkxOdzFSRGdBbWloaHRyTlFnQ1RKQUdTVFFQVXcwQkpvZ2FicXpWSUFnd1FSb2swVHhNTlFTWUlHcTRzVmFESU1BRWFaQkU4ekRWRUdDQ3FPSEdXZzJDQUJPa1FSTE53MVJEZ0FtaWhodHJOUWdDVEpBR1NUUVBVdzBCSm9nYWJxelZJQWd3UVJvazBUeE1OUVNZSUdxNHNWYURJTUFFYVpCRTh6RFZFR0NDcU9IR1dnMkNBQk9rUVJMTncxUkRnQW1paGh0ck5RZ0NUSkFHU1RRUFV3MEJKb2dhYnF6VklBZ3dRUm9rMFR4TU5RU1lJR3E0c1ZhRElNQUVhWkJFQjJHWTJjN1QzZ3NZT3JoMS83N2Y0SmFkQTBHSXFWSU1USkJLQ1BIL1BTRkFaNXd4T3pQM3dHb2d1QWdRang4M1J2UVVFTjFrZFBYZTRzbEJsWldaSUZVR3VGSE5aenBqeHhIQ1JZU1FRSURXVWpnUTBaY2lLZXZ6UWNXSkNSTFV6RXpEdUtoanFaNE5hK2M2b0sxRGdBKzRIVUlJY0VscnN1ZW5idVZyS2NjRXFTWGFNOVRYUUtMOWxCelFPZ1JhQVlBdHNzTWtvQWNpU2VzVVdiMWF5RE5CYW9IeURQUXhjSGIwa0h3em5nOElGd0xnNFY2SHFDZlRHZ0tRVnp0KzZ6TkIvRVowQnR1ajlhQmxuNG5GeUlHTEFPZ01RQXo3Tmx3TXZjSFllRisvYi9aOE1zUUU4UW5JbVd4bWZ6eDY2QkRpUlFCNEFRSzgzZSt4RWtBMmtrenJmdHYxd3g0VHhBOFVaNkFOdW5qK3JFejJqUjhCME5ZQndsSUEwS28xVENLNk01S3l6cTJXZlM5Mm1TQmUwSnVCdXBrTzh6MFVoa3VCOEZ4QWVGUFZoMGh3UU12RFVXM2Q2ZDFWOTZYZ2dBbWlBTnBNVTZHT0V3N0todlVWRHNHbGlMQzRsdU1qb01zalNldkdXdnFVOGNVRWtVRnJoc2tLWXRnaC9Tc0FkQUVpenEzMThJam81a2pLK21TdC9jcjRZNExJb0RXRFpLbGp5Vnc3M1BLUXpJYWVyOE1uK0s2UlNsL2txODBxR0dPQ1ZBSFU2V0N5UDI1K0VSR3ZxVWVzQkxBaGtreWZVdy9mc2o2WklMS0l6UkI1TzI3ZUFvaVgxbjQ0OUNQOUNHc0ZyZ2VuOXI3bFBUSkI1REdiRVJxWjFlWUNJbnk0bXA5dml3QzFWYysxbm9uZDNmbnBBaUlUWkxwa3FncHhaaE94OHh5QU82cGd1b2hKNnROYlgxbU90KzBhcm8wL2Y3d3dRZnpCY2RwYXNST3hmd09BTDFkMUFBU1A2QmxjZ2owOVExWDFVd1hqVEpBcWdEcmRUUFluekJzUjhGK3FFemZ0MHNOMEN0N1p1Njg2OXF0cmxRbFNYWHlualhVN1lXNEV3SVNmQVJQQXJ3ME5UOElOUFZrLzdkYlNGaE9rbG1nSDJKYzRxV3MvYmQ2RGlLZjdFcWE0VXF1RkZ3ZnhoSzdNK0pnZ01tak5jRmx4UU5IT0hyd0RFUmQ1R2lyUkh6UWNXdENXM1BHS0p6c0JVR2FDQkNBSlFRcGgzem5tdk9FOFBxOGFFd0U4MTB6T1NiTlR2WDlXdFJFa1BTWklrTEpSNTFqRTJheE1TTjhPQ0F0VlFpR2dGNEJ3VVNTVi9xT0tmaEIxbUNCQnpFb2RZcUwyOW1iYmNIb1I4R1FsOXdRdlk1NFc2ZDNXSGlYOWdDb3hRUUthbUZxR1ZiZ2NOWER3VmdBVUY2T2svNGdvRTBKYTJKYnNmVnBhT2VBS1RKQ0FKNmphNFZGSFJ5Z1RIdGdDQU10VmZCSFJYaVE0eGVpeUhsZlJEN29PRXlUb0dhcGlmT0xUYm1hM3VRa0F6MUp4UXdUN05YQk8xVk85ajZyb1R3Y2RKc2gweUZJVllpUUF6TVROSkNCMnFwbW5RWTBnMnBheWZpYWpMNzZTNVhKMFdGdmVlUnE3K3pJeXV2V1FaWUxVQS9VQStPeVBtOTlIeExWS29SRGxBREJtcE5MM3U5R250ZEU1MldHOGdoRFdUcXloUlFCL0FhQk54cjY5MXdTMW1EVVR4RTJHWjVpTUhUZHZBOFIxU3NNaXlHdEVLOXE2ckh2YzZHY1QwU1B6Z05zUmNGNHBlU0w2c3diVUVjUkhOU2FJbXl6UElKbit1SGtUSXFyZUEzY0FLR0VrcmJ2Y1FMSy80OVMzRFlWbi9hSWNPVjZ6UXk4Qmh0OFh0S01wVEJBM21aYVV5YXlPbVk0RHN5T3A5R1pKMWFxSzIvSG9sd0UxY2J4ZDZZK0FMb2drcmUrNVVSWnREK3k1d3c4andGRnU1RWRrS0dra3JkWHU1YXN2eVFUeEdlUHNxbVdMblpEV0I0Qk5CSFIxSkduZDRMTUxKWE9adUhrTklYNVJTWGxrOHE0emt0WjMzT2lQZmgxTEErQXlOL0lUWlVJNVBLUzF1K2RsV2IxcXlUTkJmRVJXWEdOMUhQd0pJc3dlTjB0MHU1NnlMcWxuWWViK2hQa1pCTHhlZGFnRWRLVU0wYjNjZDBmSE9VZnY2dDJnR3F2ZmVrd1FueER0ajdkL0VNQjVvRVI5S1V2UFpjN0c3b2RmOWNtZGF6T1p1UGtKUXZ5V2E0VXBna2l3WGsrbHIzV3JiOGVqVndKcVgzTXJQMVdPQ0s2TnBOTHJWZlg5MW1PQytJRG9LRGwrZ29nbEN6Q0x5MFBoUVdkWjYrYmV2L25nMHBXSlRDSjJEZ0hjNlVxNG1CREI5VVlxZlpWYi9VemMvREFCM0F1SXl2T0tBRzZLSk5PWHVmVlpiVG5sZ1ZRN3NPbGlmNkF6K284NXhBZkxrV05zTEVUdzExbjVYUHZjN3I3ZlZIdDhkc0pjQllCSjVhb2xSTGNiS2V0aXQzSGFxNlB6eWRGK2hnZ0h1ZFVwemtrbWlCZjhBcVdiN1lnZDRZVG9JVUI4Zzl2QXhQRU1wUHpaUnRlMlhyYzZzbkxaVHZNakR1SW1RQWpKNmdwNTJXcnJyNjVlL280aGNoNERnSU5WL0UzVTRSWEVLNElCMGJjNzI5OE5TQThyVmtBWCt3bVh1UDBxSkRQa1RHZTBuUkMzS0RlM0llclNVNVpvdk9tcTJ4T2R1YmcxTTJmdUxqKzZUQlhJeVk5WU11a09wbXpoRjlOeEhnR0V0M2lLa09CNlBaVysydTFrck9UTGpzZE9BNEN0Z05CVVNiYjQvK1dxSHRLU0pXRjdYa3NmQXZqV1g1QUpvcGE1d0dpTjdBNDNQZUpYcHlVaStyR1IwVlo2clJtVmpac25PUWk5S2swMFI4Q2xQajNYRnBPcGVtakh6UTJBNk92R0hoTWtNRk5kUHBDOWlkUGVuS05aWXVWNHA3eDJPUTNhcFEzbXpMYk45LzlkeFc0bUhqM2VBVzM3cFAwWENVT2l5NnhoYTFFWmttYmlzUzhRZ3UrZlk1a2dFb2tMa3VnSU9jSVBBdUo3cWhFWEVmMUowNXlsK3NadHo4cll0enZOWXduaHA4cjlQVVRWdzN6bVZKazlta3dpbGlDQWpUSnh1cFZsZ3JoRktrQnkyY1NTZ3gxcWZyaGE1QmdiYXVIcXF1Tjh1TzJ1YlR2ZERIOXZ4OUlQRElkQ1AzUHppYm5FTzRkMDFjTk1aL3RDMHB3SEFIQ1dteGhsWlpnZ3NvalZXZDVlL2VFSVVPNGhBRHl5TnFIUU1CQ3ROVks5WGVYOGlXUGtEdUZPbVUvTWsrd1JQYVdIdElVeVZROUgraGZpendFZ1VpMHNtQ0FLeU5yeFpSOENESDJHQU9ZaDBZc0krQlRpNE0zVkxreldmOVlTQTF0YVJCbWNEeXFFN1VtbDNCR1B6T3BsaHhOcER3TGdJV3BPNk9sUVRqdFo1bEJnOXV6VDN1ZzB6M3JNLy9ldnlTTmdna2hrbEQ2MnBDVXoySHhIc1d1aDRuRUVFTlpYcXdHa2FGR1dDUlhJY1p4RXlQNktFbTAwVXRhYWlVYnRqdWk3S0ZUWXNYNmJrak9DMzRmejJvbHp1N2UrNkZhZk90N2ZsQWtkdGhNUVB1UldSMVdPQ1NLQm5KMklwUUhBTEtjaXZzQ0VjOXBLbVYvRFNpR0l1d3laT1FlMkErTHhsV1JML1I4QjFnS0JlSUcrWE5XRzBDT0FCNDFjN25SeGYzdi9tdmEzRCtXZGh4RHhVQldiNHVaZWMwaGJOSHREejE5azlPMkVlVGNBcnBEUm1TQzdGUURFNCtrL3VORW5nbTlHVXVrcVZacDNFOEZrbWNDZXhSbzlTMVQyT2Z5MW9kRGZFWEdOdmpGdHlVTXdaWWtYblYvRGVpOENuS2hraTRnUTRCdzlaUlcrOHRoeGN4MGczcVprYTB5SjRCa0U1MXdTWjZzUTM2VmtpK0JseUR2SEc5MjlmNURSdHhPeC93SUExd2NXSjlvbWdOOFl6WU1MTW9NdHZ3V0VkN3Z4eXl1SUc1UUtFeXRtQVVMVXBmaUlHTkgvNkMxRGwrTWRPd2FsOUVhRlJ4N3BXbjRNQ0dKSFd1bVB5TGt3a3VyOTM0bks0dmlIZzlvbXJ3ZjVsQUlhVWVyWHdGa2tXOWl0UHg3N0dDSzR1a0U0TlRaeE1ETTg1QndyVGkvYjhkZ2VKb2lIN0JWVHRSTXhjYXRNNWZEYmJzSjhQTEp4Mnk5bFE3TGpaZzhneG1UMXhuL29pNUJqN0gvOXE1Y2RnNlJaNmkvV2FsRVJRSFlXd0VsemsrbGZ5MWl3VjVsTFFjTzB5b0ZINFRPVWd3VnQzZW5kSTZzb0UwUUdlMWV5ZGp6MmdwZXpUckszNFBvVHNTMEljSWFyNElvSkVWMXNwS3pieSttUEhsUHBxVlZ2Y2dMYXB5R2NxbSsweEtkWjEzK2psVWdlUThBNXJwWEdCV2xZSXpodFlyMHNKb2c4aWhVMXZQNmFqenJZSHM1cGF5cDlzZkg0RWdyZ09CODN1bnB2cVRnbzhSUTRjdnBWVkRPVXZxL3R4djVycXhuc0R5R1liY24wZ3pKNjRzVEFNTXg2VFAyc0dYVk9yWHJDQkpISmdFdlp6T3JZY2lLNHo2VjRPYkZYRU9FOGZXTmFmRTE1M1ovWEEzZEk5RWs5WmQwc0c2Y2RqOTBLQ0s0dkpNbmFCNEtsYmd1N2paTktxUkxKYTVFUndYV1JWUHFhcWJFeVFhU3o1MDdCVTRHektTNkk2R2FqWmVqS2lTL3cvUW56L3hEd1hIZlJ2RjRLd2JsTVQvYmVwS3B2Sjh5ckFmQ3JxdnFsOUpEb2REMWxTZjI0RkVxUkprenhqcVMyc2hGMUdTa3JYdnhIaU45Qi9NN3h1RDJ2RlRrbUJVYTBKMHl3Y202WDlTdXY1Q09neS8zWXBMVGowWldBV3JkL0FOSktJMmx0a3JWbng4MXZBK0kveStvVjVNV0J4eGNIVDhJZE8zSk1FQ1VFdlNudFRjU095Z0YxK1hZZWlxQlgraFB5aENINFJZNHhrK0s0T2lIZUI0QnY5SUlVRXEwWjIzK1JzZFBmR2JzQ05WQ3IzMFcwaHdhSGpvdjhhSWRkeWljL1lzbGtRMUZXSEhld3c0ZGRMNTc1dlZUTlVIUS9yb1lPZlZydnNyN2gxYzVVL2YzeDZLRUhRT3NEaFBlcTJCWTc5M295L1FOWlhZK1ZTRjVweXVYbXorN3UrMU01djB3UTJheDRrTGNUMFZOSHFuV29IdFR6NEp6b3MwYks4djJkWVN3aVd0UGVaanQwbit3dXZ2S0hBaStWU0FnT0VPRENTS3JuaVVxSU1rRXFJZVR6L3pNZDVoc29CT0s2cC9LbW5uUklWU2JIT0VtV0xBbG41cldJV2xaRlgzaW54aTI3M3pPbUwvWmtEb1NieEdhcS9HWXNpZk0wOU5GSXN2ZEhibkJrZ3JoQnFRb3lkbWYwWXRMdzYyb2JXaElCMVlnY0V5UHFUNWpYSXVEbnkwVkpSRitLcEt5eU1zWDBDM3N4cytjK0NvanZrMEJoWEZTV2xFd1FGWlI5MGhISHZ5R2tpUnBRVmJtelFVQmZqQ1N0TC9nVXJwUVpPeDd0Qk1RN2k5M2VJNkp2UlZMV3A2UU1pZzlPWGl1UkVOeG1wTktYeVBobGdzaWdWUVZaa2ZUTXZPYjFBQ2hLKzJzK3V2aUtrVXdydHd2d0l3NVJMVDZ2YWZkTnVsWXJXZlZ3WWh6ZU5rYXBUMDlhVWRreVJVd1FQMmFDRHpheWlkZ0plWUFrQXJ6REIzUEs1T2lQeDk2SlNLc0E0SENnd3NXbUxDSHMxZ0NmZFFnZWpLVFNmNVNKVDl3Z2RCeXREeEVQazYxNk9Ja2NpZWkvQTJqWHlmaWU4RnoxaEQ3TE9RbnY3TjBucXk5SEVQcEdKR2w5V3RaSHRlUURleDlFZGNEaVMxQW03OXppc1Y3VDE0eGsrbXJaR0FZNmw3NHZyNFZ1QnNCL0txOUxkelZqNk9xRE5tNTl6cTJQZ1k3Mk4rVkN6cWRVM2ptRUR5K1ZTRVF2d2FZUUxaanpBK3NGdC9GT1hyVWtkdEw1d3BRS3hQSTYvZkhZMllCd0J3SzB5V2dqMEkxNjBwSytCU2kvMlVhRFNIQ2x5amt1bWZFSTJXd2lkcUlESU5XTmRzeUhxQ1VjSnVmNDFxN2UzOHI2SFpPWFcwRzRlTFVxenRKNisrTEwzbm9BdEc1RVhPUkdXWlVjbVhqc01rSlEyenlzY29NZFQ1VklDUExpeXJQc29jZXBXRE5CM015K09za1Uyb0U5YlY0RkNGOHFXOHVKNkJZalpYMWNOa3hmemxJUjllajdtbGJpdmZmdWwvVmZUcjVRc3NqSi84THRiYjZwdG1SNkVwYU5RK2JDRkQ5aStUa0YzTnNTZlR6eUd2NndhQlZ5VlhKMHRyK2JOSG9DQVZyZFIxSmNValRZYWFKOCs1elV0dWU5MmhMNmhVb2s0VU4zQU9BSlN2YkkrVThqMWZzNUpkMHBTcnlDK0lGaURXeU1saEg2K3FSVHE0cmtvUGIyWnR1Z3h4SGcvZjZGVGkrRmMvbGxmalRZOFhRSmpHQ3prVXAvMUs5eE1VSDhRbktDSGZIK01JeWhOVWd3bThoNVFkTzAzOG5lamlzVmxtalRURVFiZ09BZUkyVmRxQkorSmg3N0hpRjhURVczbkE0UnZLcVJzMEx2NnUxUnRlMmwzVE1SN0l5azBtb1ZYVW9FTEVVUWZzUXFuM1pSa3lvN1ovaTZvdldrQ0o3UkFLNXFTNlczcUU2ZU1UMVJLVkMxbXJxWGFoOXU0MGFBVCtqSjlMZmR5by9KOVNmTTh4RndVbFVWOXpib1djRHc4Y2JHKy9yZDYxU1daSUpVeHNpMWhKMHdOd1BnV1NVVnhFRTVnT3VNbFBVRjJSMWQxMEdVRVJ6ZDYzaGN2UStIK3loRUVUWGp5UFRsdUI0Y04xcGVLcEdJMGtCTnVkd3hsWTZ1dTRsanFvd1VRYmpEVkdtSUN3a080VGFYU2RpcWg1MVZLanU3THUyL1RteWtIR256RTlXdThqN0ZzYXNXMHA0cWtSQWNRSEJPMWxPOWo2cGlVMDZQQ2VJVHF2MkoyQThRWUZJdDJyTFA2MEJQQXVIcHNrYzNWTU8xNCtZbVFQVHQ1ZFYxSEFSUGhIRzRmVzd5L3BlSzZlenRXUDZXNFZEKzU2b2xTWUdjRGlQVmU3ZnJlQ1FGbVNDU2dKVVN0eFBtb3dDNFFNNGMyVUM0MHV0bVZpV2ZtVVQwVXdUYU55dkpGZjAvd1E1QVdLS2tPNnBFUk0vUFFteWZXZ0NPT2s0NEtCUFNSV0ZwdGRQTU5Uakt6d1R4a3ZrSnVuYmNmRmIxOFlVSXJvaWswdi90VXlpVHpHUldtd3VJVVBIeGcrNHlrbFpuSmhIN09BRklsd2VhR0FnUjdkVVFPdlNrSllwNkYvNzY0K2E5aUhpNjJyanBPMGJTV3FlbTYxNUxpaUQ4RmFzMHNESkFGck5DQUJ1TTFwZlB4OXQyRGJ0UFgzbEo2bGlxMjZId2swcnRCb2oyNlBuc1VXUHR6ZXpPWlZIQzBHYlZYb0tqa1k2M2tQWlVpVVEwN1R6Q010MStBUENDcDB4ZXVYaDFHYVJsZ0N4cGh1alIwQkNkS1lvbWUwbnFtSzZkaUluNlVzdGxiWW45akhBZVA5VGEzZk83aWJwN084MmpjMXFoRzYxaTg1dXhaeTY0WDdYSXR0aTFOM0tEaTdGN3gxN1pjYW5JeStTVjJ4OVVteUNGSXUvMFBJTHpFU08xN1RHVmhJNlRJMjUrRGhEL1E4MUc2ZnBVaFVPVUdOcm03eTY4MnlqcHBkQWdIZVhYRDRnYnIxSUU0Yys4MVh2RW1tUzU4T21TemxlcEV5WHNaT1BSUlE1cTRvaTR5ZzNGVzQxayt0SnlrNGZXUnVka2Nwb284RmEyUVpDYkNlaFdSaFN6RGp1MDBNdlJkYmUrSnNveFFWUlFLNklqQTZSN2wzU0Rmb1IxdGN5ejlzRFowVVB5TGZockFIeXplejhqa29YSGx4Y0c1NWVxTWpqUlhxSGNaOXk4RlJDci9xSU1QaDFkbDhWRHlNdmtsZDlCYXZDSTlYb1gxS2Z2Mi90UjNMSnpvRktDeGFTMTR6SFJBM0J4SmRraWZ1eW1YUDVvMmQzbzBjdFdYMU5jclZ5RmlVam42UnV0NzdzUzlsbUlDZUlUb0RKQVNyc2sycVBsOGZTeHBpNmw5TDBjOUFOd29rYXkxKzFKZ0VraEZDb2NJb2hlZ0MzU1k2dXNvSFNGdUxKWmR4SXllZVVWcEM0cnlPampqOWhISUZwVjZxVHN5Q2xmR045amNKZitjU25sSWc5akZ1eE84MWpRVVBSWmxDL21WaXBZbjQrdVMySlNFR2VDcUtCV1JFY0dTQTh1SFNDNnhraFpYNTVvWStSNHZmWWtBQnJ5dHVsaFBXa3Q5dVB3cEtqUk80UmEycGN2WEVTUDYyMnZMUFJ6WDBnZUd5YUlDbVpGZFdwRWtOSGxCTHIxZk9ZOHNZbFhxS3YxbHBhSDFIcWkrLy9aZE9RTEY5NWJ1VHBLYWVnSjRMblE0UEI4MVNQOXZpV1ZWeEQvb1BSeTFFUWxDaUw2YlRQUThpSFVya0lBNlNxRkFPQ2dnNHYxcnA1SFZQeVgweEYzNmUzZDV2Y1VHL3owZzRQSEdWMDl2L2M3TGhWN01qOTgvQTdpMHp1SWFETU1DSHNRNEJTVnBFM1FFWmVESW1vMjZGK05wQ1g2aUZmdFQ2VUxsWmJQbjloMjE3YWRWUXRLMHJBVVFmZ3NWbWwwWllBRWdtZU1WUHFJVE1LOGdRQ3ZrTXlaWjNFQ3VEZVNUSi9wMlpBTEEzYkNYQUdBRlkrakY2N3JBblhJdGw5ekVZSW5FWm04OGxFVG4xYVFNWUlJYzE2cUJpcGxudUNQTkRqNHdYSmRsWlRzbGxIS2RNYU9jNUEybGJuenNUMEVkRmxyMG5yU2I5OWU3VEZCdkNJNHFpOEQ1RVNDQ1BYKzFjdU9BVWZib254cFNHWU1EczAzdXF6SFpWVDhrQlYzUDdKaC9YeUh3QVFFSFloc0RXQlhDUEdlcWZkRS9QRG5sdzJadlBJSzR0c0tRbnVNbEhYNFJIT0Z4anBoRkEweFQvVXJ1YSt6NHppWEdGMjl0MVhOL2d3MExFVVFQcXpvMXp2STZ3a2lMSTlVVW94OUZSQ3U5SDJ1RWR4dHBOSWR2dHVkNFFhWklENGxXQVpJb09JRUdRdWxVTHdhWUFNaUhPUkxlRVJQNmZucy9MSExUNzdZYkJBak1ubmx6N3hWZk1TYWFucWdvLzM5dVRCdDlkb3ZSRlE0UjhLamdyS3ZNTjE0eFFUeEtXTXlRRlphUWNaQ0VsZG1NK0h3RDcyOWw1UysvT1RUMEdlMEdabTg4Z3BTd3hWa25DVGl2V1IzVE53TS9LenNUQXhhd21UakQ0SThFOFNuTE1nQTZYWUZtUmphU0ZNZHV0TjlWMXphcGI4d3RORE41U2VmSUppUlptVHlHclFmcEVDMVlKTUJjdW8raU51WkpTb1FPcVQ5dUhMUERQcDdVMjc0Nk5uZDIvL3ExamJMRlVkQUpxKzhEK0xYSXhiUXMwYlNlcS9LcEJ6dFk1Z0N4UGFpK2dRdmgvTzUwL3hvUTZBUzMwelRrU0lJNzRPVVRyOE1rQUN3MjBpbWovUXltZXpPNk1XazRSb0VQSG1DblZ2RE9XMzkzTzZ0TDNxeHpicXZJU0NUVndMdWNsdHk3c2dBcWZxSVZjeTV1SDh4TUl6SGhzS3dSN1dUS3hQQ254OCtmc1R5NnhHcndrWWhUOWpnSUNEenc4Y3Y2VXlRNE16Y0drWENCUEVKYUJrZ1ZUN3oraFFtbTVGRVFDYXZ2SUx3Q2lJNXZhYS9PQlBFcHh6S0FNa3JpRStnMThDTVRGNTVCZUVWcEFaVE1sZ3VtQ0ErNVVNR1NGNUJmQUs5Qm1aazhzb3JDSzhnTlppU3dYTEJCUEVwSHpKQThncmlFK2cxTUNPVFYxNUJlQVdwd1pRTWxnc21pRS81a0FHU1Z4Q2ZRSytCR1ptODhncmkwd3BDQUg4QmdyVTF5Qys3OEl3QWJVREV0N294dzJleGZDS0lHN0JaWnZvaHdDc0lFMlQ2emRvYVJzd0VZWUxVY0xwTlAxZE1FQ2JJOUp1MU5ZeVkzMEhLZ04wZk4zK0ppRWZYTUIvc0tuZ0kxTFdmNGxRNGdsVzBJV0Z1QnNDemdwY3pqcWhXQ0tCRG45YTdyRy9VeWw4bFA0RWlTSDg4ZWdHaTl0MUtRZlAvWnk0Q1lZZU9tZHRsL1Nvb0l3d1VRZWppK2JQc2dZT2ZROEI1UVFHSTQ2Z2RBZ1QwUUNScGVlMFk1bXZBZ1NLSUdObkFxdWpKZVUzYkRnZ2hYMGZLeG9LT3dDdE51ZHo4MmQxOWZ3cFNvSUVqaUFBbkc0K2Q2U0RkRFlDemdnUVd4MUl0Qk9odklTZS9wTFdyNzZscWVWQzFHMGlDaU1HSWZ1RUhBQzhGaEFzQjhNMnFBMlM5QUNOQTlCUUIzbTZFOEx1NG9TY2J4RWdEUzVDSllMMjZldms3Y2tUdnpCRk5pM2lEbU9nZ3hSUjJIRWZUYU0rYzFMYm5neFJYc1ZoNHdnVTlReHhmWFJGZ2d0UVZmblllZEFTWUlFSFBFTWRYVndTWUlIV0ZuNTBISFFFbVNOQXp4UEhWRlFFbVNGM2haK2RCUjRBSkV2UU1jWHgxUllBSlVsZjQyWG5RRVdDQ0JEMURIRjlkRVdDQzFCVitkaDUwQkpnZ1FjOFF4MWRYQkpnZ2RZV2ZuUWNkQVNaSTBEUEU4ZFVWQVNaSVhlRm41MEZIZ0FrUzlBeHhmSFZGZ0FsU1YvalplZEFSWUlJRVBVTWNYMTBSWUlMVUZYNTJIblFFbUNCQnp4REhWMWNFbUNCMWhaK2RCeDBCSmtqUU04VHgxUlVCSmtoZDRXZm5RVWVBQ1JMMERIRjhkVVdBQ1ZKWCtObDUwQkZnZ2dROVF4eGZYUkZnZ3RRVmZuWWVkQVNZSUVIUEVNZFhWd1NZSUhXRm41MEhIUUVtU05BenhQSFZGUUVtU0YzaForZEJSNEFKRXZRTWNYeDFSWUFKVWxmNDJYblFFV0NDQkQxREhGOWRFV0NDMUJWK2RoNTBCSmdnUWM4UXgxZFhCSmdnZFlXZm5RY2RnZjhIMlM3cVg5M0dodG9BQUFBQVNVVk9SSzVDWUlJPVwiXG4gICAgICB9LFxuICAgICAgXCJidXR0b25MaW5rQXJyYXlcIjogW3tcbiAgICAgICAgXCJidXR0b25UZXh0XCI6IFwiVmlldyBtb3JlXCJcbiAgICAgIH1dXG4gICAgfVxuICB9LFxuICBvbkluaXQ6IGZ1bmN0aW9uIG9uSW5pdCgpIHtcbiAgICB0aGlzLiRvbignbWVudS1jbGljaycsIHRoaXMubWVudUNsaWNrKTtcbiAgICB0aGlzLiRvbigncmVmcmVzaC1jbGljaycsIHRoaXMucmVmcmVzaENsaWNrKTtcbiAgICB0aGlzLmdldFBvcnRmb2xpbygpO1xuICB9LFxuICBnZXRQb3J0Zm9saW86IGZ1bmN0aW9uIGdldFBvcnRmb2xpbygpIHtcbiAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgdGhpcy5pc0RhdGFGZXRjaGluZyA9IFwidHJ1ZVwiO1xuXG4gICAgX3N5c3RlbVtcImRlZmF1bHRcIl0uZmV0Y2goe1xuICAgICAgdXJsOiBcImh0dHBzOi8vY3VycmVuY3ktcmVzdC1hcGkuaGVyb2t1YXBwLmNvbS9wb3J0Zm9saW8vcG9ydGZvbGlvXCIsXG4gICAgICByZXNwb25zZVR5cGU6ICdqc29uJyxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIHN1Y2Nlc3MoZGF0YSkge1xuICAgICAgICB2YXIgY3VycmVuY2llcyA9IGRhdGEuZGF0YS5jdXJyZW5jaWVzO1xuICAgICAgICB0aGF0LmN1cnJlbmN5RGF0YSA9IGN1cnJlbmNpZXM7XG4gICAgICAgIHRoYXQudmlld0N1cnJlbmN5RGF0YSA9IHRoYXQudmlld01vcmUgPyB0aGF0LmN1cnJlbmN5RGF0YSA6IHRoYXQuY3VycmVuY3lEYXRhLnNsaWNlKDAsIDMpO1xuICAgICAgICB0aGF0LmlzRGF0YUZldGNoaW5nID0gXCJmYWxzZVwiO1xuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgIH0sXG4gICAgICBmYWlsOiBmdW5jdGlvbiBmYWlsKGRhdGEsIGNvZGUpIHtcbiAgICAgICAgdGhhdC5pc0RhdGFGZXRjaGluZyA9IFwiZmFsc2VcIjtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG4gIHJlZnJlc2hDbGljazogZnVuY3Rpb24gcmVmcmVzaENsaWNrKCkge1xuICAgIGNvbnNvbGUubG9nKFwicmVmcmVzaFwiKTtcbiAgICB0aGlzLmdldFBvcnRmb2xpbygpO1xuICB9LFxuICBtZW51Q2xpY2s6IGZ1bmN0aW9uIG1lbnVDbGljayhldmVudCkge1xuICAgIHN3aXRjaCAoZXZlbnQuZGV0YWlsLmlkeCkge1xuICAgICAgY2FzZSAwOlxuICAgICAgICB0aGlzLnZpZXdNb3JlID0gIXRoaXMudmlld01vcmU7XG4gICAgICAgIHRoaXMuZGlzUGxheUNvbnRlbnQuYnV0dG9uTGlua0FycmF5WzBdLmJ1dHRvblRleHQgPSB0aGlzLnZpZXdNb3JlID8gXCJWaWV3IGxlc3NcIiA6IFwiVmlldyBtb3JlXCI7XG4gICAgICAgIHRoaXMudmlld0N1cnJlbmN5RGF0YSA9IHRoaXMudmlld01vcmUgPyB0aGlzLmN1cnJlbmN5RGF0YSA6IHRoaXMuY3VycmVuY3lEYXRhLnNsaWNlKDAsIDMpO1xuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG59O1xudmFyIG1vZHVsZU93biA9IGV4cG9ydHMuZGVmYXVsdCB8fCBtb2R1bGUuZXhwb3J0cztcbnZhciBhY2Nlc3NvcnMgPSBbJ3B1YmxpYycsICdwcm90ZWN0ZWQnLCAncHJpdmF0ZSddO1xuaWYgKG1vZHVsZU93bi5kYXRhICYmIGFjY2Vzc29ycy5zb21lKGZ1bmN0aW9uIChhY2MpIHtcbiAgICByZXR1cm4gbW9kdWxlT3duW2FjY107XG4gIH0pKSB7XG4gIHRocm93IG5ldyBFcnJvcignRm9yIFZNIG9iamVjdHMsIGF0dHJpYnV0ZSBkYXRhIG11c3Qgbm90IGNvZXhpc3Qgd2l0aCBwdWJsaWMsIHByb3RlY3RlZCwgb3IgcHJpdmF0ZS4gUGxlYXNlIHJlcGxhY2UgZGF0YSB3aXRoIHB1YmxpYy4nKTtcbn0gZWxzZSBpZiAoIW1vZHVsZU93bi5kYXRhKSB7XG4gIG1vZHVsZU93bi5kYXRhID0ge307XG4gIG1vZHVsZU93bi5fZGVzY3JpcHRvciA9IHt9O1xuICBhY2Nlc3NvcnMuZm9yRWFjaChmdW5jdGlvbihhY2MpIHtcbiAgICB2YXIgYWNjVHlwZSA9IHR5cGVvZiBtb2R1bGVPd25bYWNjXTtcbiAgICBpZiAoYWNjVHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIG1vZHVsZU93bi5kYXRhID0gT2JqZWN0LmFzc2lnbihtb2R1bGVPd24uZGF0YSwgbW9kdWxlT3duW2FjY10pO1xuICAgICAgZm9yICh2YXIgbmFtZSBpbiBtb2R1bGVPd25bYWNjXSkge1xuICAgICAgICBtb2R1bGVPd24uX2Rlc2NyaXB0b3JbbmFtZV0gPSB7YWNjZXNzIDogYWNjfTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGFjY1R5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbnNvbGUud2FybignRm9yIFZNIG9iamVjdHMsIGF0dHJpYnV0ZSAnICsgYWNjICsgJyB2YWx1ZSBtdXN0IG5vdCBiZSBhIGZ1bmN0aW9uLiBDaGFuZ2UgdGhlIHZhbHVlIHRvIGFuIG9iamVjdC4nKTtcbiAgICB9XG4gIH0pO1xufX0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuVVJMID0gdm9pZCAwO1xudmFyIFVSTCA9IHtcbiAgXCJ1cFVybFwiOiBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRUFBQUFCQUNBWUFBQUNxYVhIZUFBQUFBWE5TUjBJQXJzNGM2UUFBQXBsSlJFRlVlQUh0bVQxTEJERVFoaWNydW9WZ0l3ZWlsdG9vMkFsV2lxMkNZR09oL2dwYndVS3c5VitjeFRXQ29PMkJsV0NuYUtPbFh5QTJnc1VxWHN5N3k4S2R5QkV6czd2aXpjRGQ3bkZKM3N5VHlXNHlJVkpUQWtwQUNTZ0JKYUFFbElBU1VBSktRQWtvQVNXZ0JIcU5nQ25ONGF2R0FMMThMRktydGVJMHA0anNLSkZ4SDVoOWNQZnVROWNVUlVjMDNOK2s2YlgzOUsrQ3Y0b0gwR3lNa0VsMm5COGJaTzJRbHovR3ZMcHlkYkx4TGkydVBYblZDU3hVSElDYms1anVYN2JKMHBZYjRjR3cvcGszTXJSUFk4TjdOTG1VaExYUnZWWXhBTEpSUDNRalB0ZGQzdk5mWTg1Y05Ld1dFUTN5QUU0UFpxajFlZXljSC9kMHo2K1lNWGRrekJJdGJGNzZWZkFySlFzZ0cvbHpjZWR6WHdEQnhyT1NrUkRsYmJPdm1QTW1RZGpMam54N3g5QTJOS0FsWkhJQTBnZWUwSnp2NWh5ZUs5QVNNcGtwZ05DbjVEYjhhZjliYjl6YmdlSUppYWtnRXdIcGV6NzBWZmRiNTFIZWFXVnJpNURLSFhYNEVZQVYzblB5N09hKzN5S25RNTd4QTR1bFdsempyaGo1RVlEbGJkbk9neHMwb2MwMFBvQnNiYy9zUm1CMUFXMCtnSFJqRStnQXY1cmJWUEZNQUFCMmRWVVpYMXNBUUw2bHJRSUNYMXNBUUJXTzU1clc1bmVoVndFQVNHWlVabzljWlFFQWFTYUgyNC9BK254dEFRQXVqVldkc2JYNUFKRERxOG9FdFBrQWtNRE1jbmpsWW9BbXRKbkdCNUJsYit2TWZvUlVyM1AzQVJEbEEwQXJ5TjRTdHFobG1kTktOZmw2TWdDUXVrYjJ0aXlEbGxDNlhBWUFIRWZxR3RuYm9nMGEwQkl5T1FESTJ5TjFqY1JsVVpZbFJWY2x6d2prQU1CcGhHWFV0MXdJaER3dExoVDYrUmpKQWtDcjgrc1hhZXBhY2pwa0J5T3owbWNDNkM0L0pZWldmcktlUGhwckI5S3poNlB0RUhEL1I0L0h2M2RUZnlzQkphQUVsSUFTVUFKS1FBa29BU1dnQkpTQUVsQUMvNS9BRnlYM3lOcHU1MnhqQUFBQUFFbEZUa1N1UW1DQ1wiLFxuICBcIm9mZlVybFwiOiBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRUFBQUFCQUNBWUFBQUNxYVhIZUFBQUFBWE5TUjBJQXJzNGM2UUFBQXNwSlJFRlVlQUh0bVRGTFhFRVF4MmZ1UkU4RVFVSWdTSWlOVlFvNzRjcElxaWdFVW1pVDc1RGlRSnVBaGNGRzRZcDhoMnVTUWhCTW1vaXRrQzRCcXpTS3FCQkNJQ0RuQ1hHZDJYMFB6a2JYblhudkNUY0RkKzhkdDd2L21kK2JmVzkzSG9DWkVUQUNSc0FJR0FFallBU01nQkV3QWtiQUNCZ0JJekJvQkxDc2dOMm54V0U0K2pzSDd2OXIwbndPZ0pNQWpqNXNlRUxuOUlFRHdQbzJQSnZZdzZYUGwvNnZncjhLQitBMjVwOEFYcXhTSEcvQnVmR29lQkQvVWJzT3VNWWFybnc1aStxVDJLZ3dBTzdqcXhIb1hiNm5LOXVpd01lUy9FTThwK3hvdzhqd09yNzcya3NhNDQ1T2hRRHdWeDI2VzZUZHZFTS85dTk5Z05FM1JXU0RPZ0MzK1hJRzNOVU9SZlkwTnJySWRzY3dWSi9IMXJlZmtlMmptcWtDeUs3OGQxTFdEajRQNXBneVlWWXpFMnI1eU5Lam4vTWg3WXNLbmwya3NidGJRVXZxY2VpdkJpRGM4TlRtL0czUk5UT3QyOXBFLzZjeUJiSkgzYS9rdTMyMHUxbERmanE0eHJUR1ZOREpBSDdPcHo3cTdoczh0MmV0c0xaSTZYMmpqemdEL0FydjhNOXZjaXB1a1hORFh2Q0RGMHRUang1TFY0enlEUERMMjVLRFoyNE1uTFdGSmdjUTF2WkNOeEs3SzJqTEFmaU5UV0lBOG02MHFaS1pBZ0RlMVZWbGNtMEZBUG1XdGdvSWNtMEZBRlVFbm1rNmNGSjFCUUJjektqSUVFK2x5Z29BZkNWSDZrZGlmN20yQWdBcVkxVm5ZbTA1QUs3aFZXVUsybklBVk1DRVVNTXJGd05yc3JiUXhBQ3l0WGhINkVkSzk0NTBIOENpWWdEZWM2cmVVaFpRQWJNa0M5dmhOUTAxRlFCaFgwN1YyOUlNMnhxMUFIWlhCWUNQbTByWGRLVHFiZUcyejJWeUxSVnhQYURma1lFdWlqSUluNVpZVzZCVHF0NnFXeWlMSzc4cDBwc0NXYnk0dlB1RFM5ZjBVM002OEl1UldlMTNBdXl5T2dBZTFHZENvL0VDc1BaQjlIVGd1ejJQUVdOcDNmVFl2MzVUdlFmMEQ1eWZaeFhqd1hzNW1nUElqdy8xOVhqdW54Mk5nQkV3QWtiQUNCZ0JJMkFFaklBUk1BSkd3QWdZZ2NFaGNBM2Vzc2x1MFdwK0d3QUFBQUJKUlU1RXJrSmdnZz09XCJcbn07XG5leHBvcnRzLlVSTCA9IFVSTDsiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNoRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDOUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUN4RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDL0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDMUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBIiwic291cmNlUm9vdCI6IiJ9