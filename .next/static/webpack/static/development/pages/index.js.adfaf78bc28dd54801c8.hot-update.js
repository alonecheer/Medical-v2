webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
var _this = undefined,
    _jsxFileName = "D:\\Medical v2\\pages\\index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var App = function App() {
  var columns = [{
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: function render(text) {
      return __jsx("a", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 27
        }
      }, text);
    }
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
    render: function render(tags) {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, tags.map(function (tag) {
        var color = tag.length > 5 ? 'geekblue' : 'green';

        if (tag === 'loser') {
          color = 'volcano';
        }

        return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Tag"], {
          color: color,
          key: tag,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 19
          }
        }, tag.toUpperCase());
      }));
    }
  }, {
    title: 'Action',
    key: 'action',
    render: function render(text, record) {
      return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Space"], {
        size: "middle",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 13
        }
      }, __jsx("a", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 15
        }
      }, "Invite ", record.name), __jsx("a", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 15
        }
      }, "Delete"));
    }
  }];
  var data = [{
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
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Table"], {
    columns: columns,
    dataSource: data,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }
  }), "My App");
};

_c = App;
/* harmony default export */ __webpack_exports__["default"] = (App);

var _c;

$RefreshReg$(_c, "App");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJBcHAiLCJjb2x1bW5zIiwidGl0bGUiLCJkYXRhSW5kZXgiLCJrZXkiLCJyZW5kZXIiLCJ0ZXh0IiwidGFncyIsIm1hcCIsInRhZyIsImNvbG9yIiwibGVuZ3RoIiwidG9VcHBlckNhc2UiLCJyZWNvcmQiLCJuYW1lIiwiZGF0YSIsImFnZSIsImFkZHJlc3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQSxJQUFNQSxHQUFHLEdBQUcsU0FBTkEsR0FBTSxHQUFNO0FBQ2QsTUFBTUMsT0FBTyxHQUFHLENBQ1o7QUFDRUMsU0FBSyxFQUFFLE1BRFQ7QUFFRUMsYUFBUyxFQUFFLE1BRmI7QUFHRUMsT0FBRyxFQUFFLE1BSFA7QUFJRUMsVUFBTSxFQUFFLGdCQUFBQyxJQUFJO0FBQUEsYUFBSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQUlBLElBQUosQ0FBSjtBQUFBO0FBSmQsR0FEWSxFQU9aO0FBQ0VKLFNBQUssRUFBRSxLQURUO0FBRUVDLGFBQVMsRUFBRSxLQUZiO0FBR0VDLE9BQUcsRUFBRTtBQUhQLEdBUFksRUFZWjtBQUNFRixTQUFLLEVBQUUsU0FEVDtBQUVFQyxhQUFTLEVBQUUsU0FGYjtBQUdFQyxPQUFHLEVBQUU7QUFIUCxHQVpZLEVBaUJaO0FBQ0VGLFNBQUssRUFBRSxNQURUO0FBRUVFLE9BQUcsRUFBRSxNQUZQO0FBR0VELGFBQVMsRUFBRSxNQUhiO0FBSUVFLFVBQU0sRUFBRSxnQkFBQUUsSUFBSTtBQUFBLGFBQ1YsbUVBQ0dBLElBQUksQ0FBQ0MsR0FBTCxDQUFTLFVBQUFDLEdBQUcsRUFBSTtBQUNmLFlBQUlDLEtBQUssR0FBR0QsR0FBRyxDQUFDRSxNQUFKLEdBQWEsQ0FBYixHQUFpQixVQUFqQixHQUE4QixPQUExQzs7QUFDQSxZQUFJRixHQUFHLEtBQUssT0FBWixFQUFxQjtBQUNuQkMsZUFBSyxHQUFHLFNBQVI7QUFDRDs7QUFDRCxlQUNFLE1BQUMsd0NBQUQ7QUFBSyxlQUFLLEVBQUVBLEtBQVo7QUFBbUIsYUFBRyxFQUFFRCxHQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQ0dBLEdBQUcsQ0FBQ0csV0FBSixFQURILENBREY7QUFLRCxPQVZBLENBREgsQ0FEVTtBQUFBO0FBSmQsR0FqQlksRUFxQ1o7QUFDRVYsU0FBSyxFQUFFLFFBRFQ7QUFFRUUsT0FBRyxFQUFFLFFBRlA7QUFHRUMsVUFBTSxFQUFFLGdCQUFDQyxJQUFELEVBQU9PLE1BQVA7QUFBQSxhQUNOLE1BQUMsMENBQUQ7QUFBTyxZQUFJLEVBQUMsUUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBV0EsTUFBTSxDQUFDQyxJQUFsQixDQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRixDQURNO0FBQUE7QUFIVixHQXJDWSxDQUFoQjtBQWlERSxNQUFNQyxJQUFJLEdBQUcsQ0FDWDtBQUNFWCxPQUFHLEVBQUUsR0FEUDtBQUVFVSxRQUFJLEVBQUUsWUFGUjtBQUdFRSxPQUFHLEVBQUUsRUFIUDtBQUlFQyxXQUFPLEVBQUUsMEJBSlg7QUFLRVYsUUFBSSxFQUFFLENBQUMsTUFBRCxFQUFTLFdBQVQ7QUFMUixHQURXLEVBUVg7QUFDRUgsT0FBRyxFQUFFLEdBRFA7QUFFRVUsUUFBSSxFQUFFLFdBRlI7QUFHRUUsT0FBRyxFQUFFLEVBSFA7QUFJRUMsV0FBTyxFQUFFLHdCQUpYO0FBS0VWLFFBQUksRUFBRSxDQUFDLE9BQUQ7QUFMUixHQVJXLEVBZVg7QUFDRUgsT0FBRyxFQUFFLEdBRFA7QUFFRVUsUUFBSSxFQUFFLFdBRlI7QUFHRUUsT0FBRyxFQUFFLEVBSFA7QUFJRUMsV0FBTyxFQUFFLHdCQUpYO0FBS0VWLFFBQUksRUFBRSxDQUFDLE1BQUQsRUFBUyxTQUFUO0FBTFIsR0FmVyxDQUFiO0FBdUJGLFNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsMENBQUQ7QUFBTyxXQUFPLEVBQUVOLE9BQWhCO0FBQXlCLGNBQVUsRUFBRWMsSUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLFdBREo7QUFJSCxDQTdFRDs7S0FBTWYsRztBQThFU0Esa0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLmFkZmFmNzhiYzI4ZGQ1NDgwMWM4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUYWJsZSwgVGFnLCBTcGFjZSB9IGZyb20gJ2FudGQnO1xyXG5jb25zdCBBcHAgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBjb2x1bW5zID0gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRpdGxlOiAnTmFtZScsXHJcbiAgICAgICAgICBkYXRhSW5kZXg6ICduYW1lJyxcclxuICAgICAgICAgIGtleTogJ25hbWUnLFxyXG4gICAgICAgICAgcmVuZGVyOiB0ZXh0ID0+IDxhPnt0ZXh0fTwvYT4sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0aXRsZTogJ0FnZScsXHJcbiAgICAgICAgICBkYXRhSW5kZXg6ICdhZ2UnLFxyXG4gICAgICAgICAga2V5OiAnYWdlJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRpdGxlOiAnQWRkcmVzcycsXHJcbiAgICAgICAgICBkYXRhSW5kZXg6ICdhZGRyZXNzJyxcclxuICAgICAgICAgIGtleTogJ2FkZHJlc3MnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGl0bGU6ICdUYWdzJyxcclxuICAgICAgICAgIGtleTogJ3RhZ3MnLFxyXG4gICAgICAgICAgZGF0YUluZGV4OiAndGFncycsXHJcbiAgICAgICAgICByZW5kZXI6IHRhZ3MgPT4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIHt0YWdzLm1hcCh0YWcgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvbG9yID0gdGFnLmxlbmd0aCA+IDUgPyAnZ2Vla2JsdWUnIDogJ2dyZWVuJztcclxuICAgICAgICAgICAgICAgIGlmICh0YWcgPT09ICdsb3NlcicpIHtcclxuICAgICAgICAgICAgICAgICAgY29sb3IgPSAndm9sY2Fubyc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICA8VGFnIGNvbG9yPXtjb2xvcn0ga2V5PXt0YWd9PlxyXG4gICAgICAgICAgICAgICAgICAgIHt0YWcudG9VcHBlckNhc2UoKX1cclxuICAgICAgICAgICAgICAgICAgPC9UYWc+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICksXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0aXRsZTogJ0FjdGlvbicsXHJcbiAgICAgICAgICBrZXk6ICdhY3Rpb24nLFxyXG4gICAgICAgICAgcmVuZGVyOiAodGV4dCwgcmVjb3JkKSA9PiAoXHJcbiAgICAgICAgICAgIDxTcGFjZSBzaXplPVwibWlkZGxlXCI+XHJcbiAgICAgICAgICAgICAgPGE+SW52aXRlIHtyZWNvcmQubmFtZX08L2E+XHJcbiAgICAgICAgICAgICAgPGE+RGVsZXRlPC9hPlxyXG4gICAgICAgICAgICA8L1NwYWNlPlxyXG4gICAgICAgICAgKSxcclxuICAgICAgICB9LFxyXG4gICAgICBdO1xyXG4gICAgICBcclxuICAgICAgY29uc3QgZGF0YSA9IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBrZXk6ICcxJyxcclxuICAgICAgICAgIG5hbWU6ICdKb2huIEJyb3duJyxcclxuICAgICAgICAgIGFnZTogMzIsXHJcbiAgICAgICAgICBhZGRyZXNzOiAnTmV3IFlvcmsgTm8uIDEgTGFrZSBQYXJrJyxcclxuICAgICAgICAgIHRhZ3M6IFsnbmljZScsICdkZXZlbG9wZXInXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGtleTogJzInLFxyXG4gICAgICAgICAgbmFtZTogJ0ppbSBHcmVlbicsXHJcbiAgICAgICAgICBhZ2U6IDQyLFxyXG4gICAgICAgICAgYWRkcmVzczogJ0xvbmRvbiBOby4gMSBMYWtlIFBhcmsnLFxyXG4gICAgICAgICAgdGFnczogWydsb3NlciddLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAga2V5OiAnMycsXHJcbiAgICAgICAgICBuYW1lOiAnSm9lIEJsYWNrJyxcclxuICAgICAgICAgIGFnZTogMzIsXHJcbiAgICAgICAgICBhZGRyZXNzOiAnU2lkbmV5IE5vLiAxIExha2UgUGFyaycsXHJcbiAgICAgICAgICB0YWdzOiBbJ2Nvb2wnLCAndGVhY2hlciddLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF07XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxUYWJsZSBjb2x1bW5zPXtjb2x1bW5zfSBkYXRhU291cmNlPXtkYXRhfSAvPk15IEFwcDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEFwcCJdLCJzb3VyY2VSb290IjoiIn0=