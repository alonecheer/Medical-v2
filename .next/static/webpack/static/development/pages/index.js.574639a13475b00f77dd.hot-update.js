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
  }, "My App");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJBcHAiLCJjb2x1bW5zIiwidGl0bGUiLCJkYXRhSW5kZXgiLCJrZXkiLCJyZW5kZXIiLCJ0ZXh0IiwidGFncyIsIm1hcCIsInRhZyIsImNvbG9yIiwibGVuZ3RoIiwidG9VcHBlckNhc2UiLCJyZWNvcmQiLCJuYW1lIiwiZGF0YSIsImFnZSIsImFkZHJlc3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQSxJQUFNQSxHQUFHLEdBQUcsU0FBTkEsR0FBTSxHQUFNO0FBQ2QsTUFBTUMsT0FBTyxHQUFHLENBQ1o7QUFDRUMsU0FBSyxFQUFFLE1BRFQ7QUFFRUMsYUFBUyxFQUFFLE1BRmI7QUFHRUMsT0FBRyxFQUFFLE1BSFA7QUFJRUMsVUFBTSxFQUFFLGdCQUFBQyxJQUFJO0FBQUEsYUFBSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQUlBLElBQUosQ0FBSjtBQUFBO0FBSmQsR0FEWSxFQU9aO0FBQ0VKLFNBQUssRUFBRSxLQURUO0FBRUVDLGFBQVMsRUFBRSxLQUZiO0FBR0VDLE9BQUcsRUFBRTtBQUhQLEdBUFksRUFZWjtBQUNFRixTQUFLLEVBQUUsU0FEVDtBQUVFQyxhQUFTLEVBQUUsU0FGYjtBQUdFQyxPQUFHLEVBQUU7QUFIUCxHQVpZLEVBaUJaO0FBQ0VGLFNBQUssRUFBRSxNQURUO0FBRUVFLE9BQUcsRUFBRSxNQUZQO0FBR0VELGFBQVMsRUFBRSxNQUhiO0FBSUVFLFVBQU0sRUFBRSxnQkFBQUUsSUFBSTtBQUFBLGFBQ1YsbUVBQ0dBLElBQUksQ0FBQ0MsR0FBTCxDQUFTLFVBQUFDLEdBQUcsRUFBSTtBQUNmLFlBQUlDLEtBQUssR0FBR0QsR0FBRyxDQUFDRSxNQUFKLEdBQWEsQ0FBYixHQUFpQixVQUFqQixHQUE4QixPQUExQzs7QUFDQSxZQUFJRixHQUFHLEtBQUssT0FBWixFQUFxQjtBQUNuQkMsZUFBSyxHQUFHLFNBQVI7QUFDRDs7QUFDRCxlQUNFLE1BQUMsd0NBQUQ7QUFBSyxlQUFLLEVBQUVBLEtBQVo7QUFBbUIsYUFBRyxFQUFFRCxHQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQ0dBLEdBQUcsQ0FBQ0csV0FBSixFQURILENBREY7QUFLRCxPQVZBLENBREgsQ0FEVTtBQUFBO0FBSmQsR0FqQlksRUFxQ1o7QUFDRVYsU0FBSyxFQUFFLFFBRFQ7QUFFRUUsT0FBRyxFQUFFLFFBRlA7QUFHRUMsVUFBTSxFQUFFLGdCQUFDQyxJQUFELEVBQU9PLE1BQVA7QUFBQSxhQUNOLE1BQUMsMENBQUQ7QUFBTyxZQUFJLEVBQUMsUUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBV0EsTUFBTSxDQUFDQyxJQUFsQixDQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRixDQURNO0FBQUE7QUFIVixHQXJDWSxDQUFoQjtBQWlERSxNQUFNQyxJQUFJLEdBQUcsQ0FDWDtBQUNFWCxPQUFHLEVBQUUsR0FEUDtBQUVFVSxRQUFJLEVBQUUsWUFGUjtBQUdFRSxPQUFHLEVBQUUsRUFIUDtBQUlFQyxXQUFPLEVBQUUsMEJBSlg7QUFLRVYsUUFBSSxFQUFFLENBQUMsTUFBRCxFQUFTLFdBQVQ7QUFMUixHQURXLEVBUVg7QUFDRUgsT0FBRyxFQUFFLEdBRFA7QUFFRVUsUUFBSSxFQUFFLFdBRlI7QUFHRUUsT0FBRyxFQUFFLEVBSFA7QUFJRUMsV0FBTyxFQUFFLHdCQUpYO0FBS0VWLFFBQUksRUFBRSxDQUFDLE9BQUQ7QUFMUixHQVJXLEVBZVg7QUFDRUgsT0FBRyxFQUFFLEdBRFA7QUFFRVUsUUFBSSxFQUFFLFdBRlI7QUFHRUUsT0FBRyxFQUFFLEVBSFA7QUFJRUMsV0FBTyxFQUFFLHdCQUpYO0FBS0VWLFFBQUksRUFBRSxDQUFDLE1BQUQsRUFBUyxTQUFUO0FBTFIsR0FmVyxDQUFiO0FBdUJGLFNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKO0FBR0gsQ0E1RUQ7O0tBQU1QLEc7QUE2RVNBLGtFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy41NzQ2MzlhMTM0NzViMDBmNzdkZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGFibGUsIFRhZywgU3BhY2UgfSBmcm9tICdhbnRkJztcclxuY29uc3QgQXBwID0gKCkgPT4ge1xyXG4gICAgY29uc3QgY29sdW1ucyA9IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0aXRsZTogJ05hbWUnLFxyXG4gICAgICAgICAgZGF0YUluZGV4OiAnbmFtZScsXHJcbiAgICAgICAgICBrZXk6ICduYW1lJyxcclxuICAgICAgICAgIHJlbmRlcjogdGV4dCA9PiA8YT57dGV4dH08L2E+LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGl0bGU6ICdBZ2UnLFxyXG4gICAgICAgICAgZGF0YUluZGV4OiAnYWdlJyxcclxuICAgICAgICAgIGtleTogJ2FnZScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0aXRsZTogJ0FkZHJlc3MnLFxyXG4gICAgICAgICAgZGF0YUluZGV4OiAnYWRkcmVzcycsXHJcbiAgICAgICAgICBrZXk6ICdhZGRyZXNzJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRpdGxlOiAnVGFncycsXHJcbiAgICAgICAgICBrZXk6ICd0YWdzJyxcclxuICAgICAgICAgIGRhdGFJbmRleDogJ3RhZ3MnLFxyXG4gICAgICAgICAgcmVuZGVyOiB0YWdzID0+IChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICB7dGFncy5tYXAodGFnID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBjb2xvciA9IHRhZy5sZW5ndGggPiA1ID8gJ2dlZWtibHVlJyA6ICdncmVlbic7XHJcbiAgICAgICAgICAgICAgICBpZiAodGFnID09PSAnbG9zZXInKSB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yID0gJ3ZvbGNhbm8nO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgPFRhZyBjb2xvcj17Y29sb3J9IGtleT17dGFnfT5cclxuICAgICAgICAgICAgICAgICAgICB7dGFnLnRvVXBwZXJDYXNlKCl9XHJcbiAgICAgICAgICAgICAgICAgIDwvVGFnPlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICApLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGl0bGU6ICdBY3Rpb24nLFxyXG4gICAgICAgICAga2V5OiAnYWN0aW9uJyxcclxuICAgICAgICAgIHJlbmRlcjogKHRleHQsIHJlY29yZCkgPT4gKFxyXG4gICAgICAgICAgICA8U3BhY2Ugc2l6ZT1cIm1pZGRsZVwiPlxyXG4gICAgICAgICAgICAgIDxhPkludml0ZSB7cmVjb3JkLm5hbWV9PC9hPlxyXG4gICAgICAgICAgICAgIDxhPkRlbGV0ZTwvYT5cclxuICAgICAgICAgICAgPC9TcGFjZT5cclxuICAgICAgICAgICksXHJcbiAgICAgICAgfSxcclxuICAgICAgXTtcclxuICAgICAgXHJcbiAgICAgIGNvbnN0IGRhdGEgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAga2V5OiAnMScsXHJcbiAgICAgICAgICBuYW1lOiAnSm9obiBCcm93bicsXHJcbiAgICAgICAgICBhZ2U6IDMyLFxyXG4gICAgICAgICAgYWRkcmVzczogJ05ldyBZb3JrIE5vLiAxIExha2UgUGFyaycsXHJcbiAgICAgICAgICB0YWdzOiBbJ25pY2UnLCAnZGV2ZWxvcGVyJ10sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBrZXk6ICcyJyxcclxuICAgICAgICAgIG5hbWU6ICdKaW0gR3JlZW4nLFxyXG4gICAgICAgICAgYWdlOiA0MixcclxuICAgICAgICAgIGFkZHJlc3M6ICdMb25kb24gTm8uIDEgTGFrZSBQYXJrJyxcclxuICAgICAgICAgIHRhZ3M6IFsnbG9zZXInXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGtleTogJzMnLFxyXG4gICAgICAgICAgbmFtZTogJ0pvZSBCbGFjaycsXHJcbiAgICAgICAgICBhZ2U6IDMyLFxyXG4gICAgICAgICAgYWRkcmVzczogJ1NpZG5leSBOby4gMSBMYWtlIFBhcmsnLFxyXG4gICAgICAgICAgdGFnczogWydjb29sJywgJ3RlYWNoZXInXSxcclxuICAgICAgICB9LFxyXG4gICAgICBdO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2Pk15IEFwcDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEFwcCJdLCJzb3VyY2VSb290IjoiIn0=