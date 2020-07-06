module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\Medical v2\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const StyledWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "pages__StyledWrapper",
  componentId: "zei4o9-0"
})(["*{margin:0;padding:0;box-sizing:border-box;}.container{max-width:960px;width:100%;margin:0 auto;}header{width:100%;height:120px;background-color:#01273c;border-top:5px solid #40aed7;}.nav-grid{display:grid;grid-template-columns:225px 1fr;}.logo{color:white;margin-top:20px;}h1{color:white;}.logo h1{font-size:28px;text-transform:uppercase;}.logo span{font-size:12px;}ul.menu{display:grid;grid-template-columns:repeat(3,1fr);justify-items:center;margin-top:7%;}ul.menu li{text-decoration:none;list-style:none;}ul.menu li a{text-decoration:none;color:white;text-transform:uppercase;transition:0.3 ease-ease-in-out;padding:5px 10px;}ul.menu li a:hover{background:#40aed7;padding:5px 10px;border-radius:5px;}.content{margin:0 auto;max-width:960px;height:auto;}.content-heading{}.copyright{width:100%;height:60px;background-color:#01273c;}.copyright-grid{display:grid;grid-template-columns:1fr 1fr;height:60px;color:white;}.copytext{justify-self:flex-start;align-self:center;}.creadit{justify-self:flex-end;align-self:center;}.content-heading img{width:100%;}.nav li ul{position:absolute;display:none;width:inherit;}Input{margin-top:15%;margin-left:35%;margin-bottom:15%;width:300px;padding-left:10px;}"]);

const Index = () => {
  const {
    0: text,
    1: setText
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  console.log(text);

  const checktext = e => {
    setText(e);
  };

  const columns = [{
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => __jsx("a", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 27
      }
    }, text)
  }, {
    title: 'Age',
    dataIndex: 'age',
    key: 'age'
  }, {
    title: 'Address',
    dataIndex: 'address',
    key: 'address'
  }, {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: tags => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, tags.map(tag => {
      let color = tag.length > 5 ? 'geekblue' : 'green';

      if (tag === 'loser') {
        color = 'volcano';
      }

      return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Tag"], {
        color: color,
        key: tag,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 19
        }
      }, tag.toUpperCase());
    }))
  }, {
    title: 'Action',
    key: 'action',
    render: (text, record) => __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Space"], {
      size: "middle",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 13
      }
    }, __jsx("a", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 15
      }
    }, "Invite ", record.name), __jsx("a", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 15
      }
    }, "Delete"))
  }];
  const data = [{
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer']
  }, {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser']
  }, {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher']
  }];

  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };

  return __jsx(StyledWrapper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 5
    }
  }, __jsx("title", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 7
    }
  }, "Homepage"), __jsx("header", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 7
    }
  }, __jsx("nav", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "nav-grid",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "logo",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 15
    }
  }, __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 17
    }
  }, "Psu"), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 17
    }
  }, "Procurement system")), __jsx("div", {
    className: "fr",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 15
    }
  }, __jsx("ul", {
    className: "menu",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 17
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 19
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 21
    }
  }, "Add cart1")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 19
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 21
    }
  }, "Add cart1")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 19
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 21
    }
  }, "profile"), __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 21
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 23
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 25
    }
  }, "\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E2A\u0E48\u0E27\u0E19\u0E15\u0E31\u0E27")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 23
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 25
    }
  }, "\u0E2D\u0E2D\u0E01\u0E08\u0E32\u0E01\u0E23\u0E30\u0E1A\u0E1A")))))))))), __jsx("section", {
    className: "content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "content-heading",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 11
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    placeholder: "Basic usage",
    onChange: e => {
      checktext(e.target.value);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 11
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Table"], {
    columns: columns,
    dataSource: data,
    onChange: onChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 11
    }
  }))), __jsx("footer", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "copyright",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "copyright-grid",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "copytext",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 15
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 17
    }
  }, "Copyright \xA9 2020 Jetnipat - All Rights Reserved")), __jsx("div", {
    className: "creadit",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 15
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 17
    }
  }, "ccnp")))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Medical v2\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW50ZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiJdLCJuYW1lcyI6WyJTdHlsZWRXcmFwcGVyIiwic3R5bGVkIiwiZGl2IiwiSW5kZXgiLCJ0ZXh0Iiwic2V0VGV4dCIsInVzZVN0YXRlIiwiY29uc29sZSIsImxvZyIsImNoZWNrdGV4dCIsImUiLCJjb2x1bW5zIiwidGl0bGUiLCJkYXRhSW5kZXgiLCJrZXkiLCJyZW5kZXIiLCJ0YWdzIiwibWFwIiwidGFnIiwiY29sb3IiLCJsZW5ndGgiLCJ0b1VwcGVyQ2FzZSIsInJlY29yZCIsIm5hbWUiLCJkYXRhIiwiYWdlIiwiYWRkcmVzcyIsIm9uQ2hhbmdlIiwicGFnaW5hdGlvbiIsImZpbHRlcnMiLCJzb3J0ZXIiLCJleHRyYSIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNy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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkYsRUFLRSxNQUFDLDBDQUFEO0FBQU8sV0FBTyxFQUFFdEIsT0FBaEI7QUFBeUIsY0FBVSxFQUFFYSxJQUFyQztBQUEyQyxZQUFRLEVBQUVHLFFBQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMRixDQURGLENBdkNGLEVBbURFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxnQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwREFERixDQURGLEVBSUU7QUFBSyxhQUFTLEVBQUMsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLENBSkYsQ0FERixDQURGLENBREYsQ0FuREYsQ0FERjtBQXNFRCxDQXhKRDs7QUF5SmV4QixvRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pRQSxpQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw4QyIsImZpbGUiOiJzdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMyk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBUYWJsZSwgVGFnLCBTcGFjZSwgSW5wdXQgIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmNvbnN0IFN0eWxlZFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gICoge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgfVxyXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBTdGFydCBoZWFkZXIgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBtYXgtd2lkdGg6IDk2MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICB9XHJcbiAgaGVhZGVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMTI3M2M7XHJcbiAgICBib3JkZXItdG9wOiA1cHggc29saWQgIzQwYWVkNztcclxuICB9XHJcbiAgLm5hdi1ncmlkIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIyNXB4IDFmcjtcclxuICB9XHJcbiAgLmxvZ28ge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICB9XHJcbiAgaDEge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICAubG9nbyBoMSB7XHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIH1cclxuICAubG9nbyBzcGFuIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICB9XHJcbiAgdWwubWVudSB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcclxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDclO1xyXG4gIH1cclxuICB1bC5tZW51IGxpIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgfVxyXG4gIHVsLm1lbnUgbGkgYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgdHJhbnNpdGlvbjogMC4zIGVhc2UtZWFzZS1pbi1vdXQ7XHJcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICB9XHJcbiAgdWwubWVudSBsaSBhOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICM0MGFlZDc7XHJcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB9XHJcbiAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEVuZCBoZWFkZXIgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBTdGFydCBzZWN0aW9uICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuICAuY29udGVudCB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIG1heC13aWR0aDogOTYwcHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgfVxyXG4gIC5jb250ZW50LWhlYWRpbmcge1xyXG4gIH1cclxuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gRW5kIHNlY3Rpb24gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbiAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFN0YXJ0IEZvb3RlciAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbiAgLmNvcHlyaWdodCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMTI3M2M7XHJcbiAgfVxyXG4gIC5jb3B5cmlnaHQtZ3JpZCB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICAuY29weXRleHQge1xyXG4gICAganVzdGlmeS1zZWxmOiBmbGV4LXN0YXJ0O1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIH1cclxuICAuY3JlYWRpdCB7XHJcbiAgICBqdXN0aWZ5LXNlbGY6IGZsZXgtZW5kO1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIH1cclxuICAuY29udGVudC1oZWFkaW5nIGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgLm5hdiBsaSB1bCB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgd2lkdGg6IGluaGVyaXQ7XHJcbiAgICB9XHJcbiAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEVuZCBGb290ZXIgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbiAgSW5wdXQgeyBcclxuICAgICAgbWFyZ2luLXRvcDogMTUlO1xyXG4gICAgICBtYXJnaW4tbGVmdDogMzUlO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxNSU7XHJcbiAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW3RleHQsc2V0VGV4dF0gPSB1c2VTdGF0ZSgnJylcclxuICAgIGNvbnNvbGUubG9nKHRleHQpXHJcbiAgICBjb25zdCBjaGVja3RleHQgPSAoZSkgPT4ge1xyXG4gICAgICAgIHNldFRleHQoZSlcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIGNvbnN0IGNvbHVtbnMgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGl0bGU6ICdOYW1lJyxcclxuICAgICAgICAgIGRhdGFJbmRleDogJ25hbWUnLFxyXG4gICAgICAgICAga2V5OiAnbmFtZScsXHJcbiAgICAgICAgICByZW5kZXI6IHRleHQgPT4gPGE+e3RleHR9PC9hPixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRpdGxlOiAnQWdlJyxcclxuICAgICAgICAgIGRhdGFJbmRleDogJ2FnZScsXHJcbiAgICAgICAgICBrZXk6ICdhZ2UnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGl0bGU6ICdBZGRyZXNzJyxcclxuICAgICAgICAgIGRhdGFJbmRleDogJ2FkZHJlc3MnLFxyXG4gICAgICAgICAga2V5OiAnYWRkcmVzcycsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0aXRsZTogJ1RhZ3MnLFxyXG4gICAgICAgICAga2V5OiAndGFncycsXHJcbiAgICAgICAgICBkYXRhSW5kZXg6ICd0YWdzJyxcclxuICAgICAgICAgIHJlbmRlcjogdGFncyA9PiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAge3RhZ3MubWFwKHRhZyA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY29sb3IgPSB0YWcubGVuZ3RoID4gNSA/ICdnZWVrYmx1ZScgOiAnZ3JlZW4nO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRhZyA9PT0gJ2xvc2VyJykge1xyXG4gICAgICAgICAgICAgICAgICBjb2xvciA9ICd2b2xjYW5vJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgIDxUYWcgY29sb3I9e2NvbG9yfSBrZXk9e3RhZ30+XHJcbiAgICAgICAgICAgICAgICAgICAge3RhZy50b1VwcGVyQ2FzZSgpfVxyXG4gICAgICAgICAgICAgICAgICA8L1RhZz5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgKSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRpdGxlOiAnQWN0aW9uJyxcclxuICAgICAgICAgIGtleTogJ2FjdGlvbicsXHJcbiAgICAgICAgICByZW5kZXI6ICh0ZXh0LCByZWNvcmQpID0+IChcclxuICAgICAgICAgICAgPFNwYWNlIHNpemU9XCJtaWRkbGVcIj5cclxuICAgICAgICAgICAgICA8YT5JbnZpdGUge3JlY29yZC5uYW1lfTwvYT5cclxuICAgICAgICAgICAgICA8YT5EZWxldGU8L2E+XHJcbiAgICAgICAgICAgIDwvU3BhY2U+XHJcbiAgICAgICAgICApLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF07XHJcbiAgICAgIFxyXG4gICAgICBjb25zdCBkYXRhID0gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGtleTogJzEnLFxyXG4gICAgICAgICAgbmFtZTogJ0pvaG4gQnJvd24nLFxyXG4gICAgICAgICAgYWdlOiAzMixcclxuICAgICAgICAgIGFkZHJlc3M6ICdOZXcgWW9yayBOby4gMSBMYWtlIFBhcmsnLFxyXG4gICAgICAgICAgdGFnczogWyduaWNlJywgJ2RldmVsb3BlciddLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAga2V5OiAnMicsXHJcbiAgICAgICAgICBuYW1lOiAnSmltIEdyZWVuJyxcclxuICAgICAgICAgIGFnZTogNDIsXHJcbiAgICAgICAgICBhZGRyZXNzOiAnTG9uZG9uIE5vLiAxIExha2UgUGFyaycsXHJcbiAgICAgICAgICB0YWdzOiBbJ2xvc2VyJ10sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBrZXk6ICczJyxcclxuICAgICAgICAgIG5hbWU6ICdKb2UgQmxhY2snLFxyXG4gICAgICAgICAgYWdlOiAzMixcclxuICAgICAgICAgIGFkZHJlc3M6ICdTaWRuZXkgTm8uIDEgTGFrZSBQYXJrJyxcclxuICAgICAgICAgIHRhZ3M6IFsnY29vbCcsICd0ZWFjaGVyJ10sXHJcbiAgICAgICAgfSxcclxuICAgICAgXTtcclxuICAgICAgY29uc3Qgb25DaGFuZ2UgPSAocGFnaW5hdGlvbiwgZmlsdGVycywgc29ydGVyLCBleHRyYSkgPT57XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3BhcmFtcycsIHBhZ2luYXRpb24sIGZpbHRlcnMsIHNvcnRlciwgZXh0cmEpO1xyXG4gICAgICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxTdHlsZWRXcmFwcGVyPlxyXG4gICAgICA8dGl0bGU+SG9tZXBhZ2U8L3RpdGxlPlxyXG4gICAgICB7LyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gU3RhcnQgSGVhZGVyIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovfVxyXG4gICAgICA8aGVhZGVyPlxyXG4gICAgICAgIDxuYXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1ncmlkXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvXCI+XHJcbiAgICAgICAgICAgICAgICA8aDE+UHN1PC9oMT5cclxuICAgICAgICAgICAgICAgIDxzcGFuPlByb2N1cmVtZW50IHN5c3RlbTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZyXCI+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibWVudVwiPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5BZGQgY2FydDE8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPkFkZCBjYXJ0MTwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+cHJvZmlsZTwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+4LiC4LmJ4Lit4Lih4Li54Lil4Liq4LmI4Lin4LiZ4LiV4Lix4LinPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj7guK3guK3guIHguIjguLLguIHguKPguLDguJrguJo8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbmF2PlxyXG4gICAgICA8L2hlYWRlcj5cclxuICAgICAgey8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEVuZCBIZWFkZXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi99XHJcblxyXG4gICAgICB7LyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gU3RhcnQgU2VjdGlvbiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL31cclxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGVudFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtaGVhZGluZ1wiPlxyXG4gICAgICAgICAgICB7LyogPGltZyBzcmM9XCIvc3RhdGljL2ltYWdlcy9iZy5qcGdcIiAvPiAqL31cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPElucHV0IHBsYWNlaG9sZGVyPVwiQmFzaWMgdXNhZ2VcIiBvbkNoYW5nZT17IChlKT0+e2NoZWNrdGV4dChlLnRhcmdldC52YWx1ZSl9fS8+XHJcbiAgICAgICAgICA8VGFibGUgY29sdW1ucz17Y29sdW1uc30gZGF0YVNvdXJjZT17ZGF0YX0gb25DaGFuZ2U9e29uQ2hhbmdlfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICAgIHsvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBFbmQgU2VjdGlvbiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL31cclxuXHJcbiAgICAgIHsvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBTdGFydCBGb290ZXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi99XHJcbiAgICAgIDxmb290ZXI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3B5cmlnaHRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29weXJpZ2h0LWdyaWRcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvcHl0ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICA8cD5Db3B5cmlnaHQgwqkgMjAyMCBKZXRuaXBhdCAtIEFsbCBSaWdodHMgUmVzZXJ2ZWQ8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjcmVhZGl0XCI+XHJcbiAgICAgICAgICAgICAgICA8cD5jY25wPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Zvb3Rlcj5cclxuICAgICAgey8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEVuZCBGb290ZXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi99XHJcbiAgICAgIFxyXG4gICAgPC9TdHlsZWRXcmFwcGVyPlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbnRkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=