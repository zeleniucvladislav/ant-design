"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof3 = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var React = _interopRequireWildcard(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
var _toArray = _interopRequireDefault(require("rc-util/lib/Children/toArray"));
var _responsiveObserve = _interopRequireWildcard(require("../_util/responsiveObserve"));
var _devWarning = _interopRequireDefault(require("../_util/devWarning"));
var _configProvider = require("../config-provider");
var _Row = _interopRequireDefault(require("./Row"));
var _Item = _interopRequireDefault(require("./Item"));
var _reactNode = require("../_util/reactNode");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof3(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
/* eslint-disable react/no-array-index-key */

var DEFAULT_COLUMN_MAP = {
  xxl: 3,
  xl: 3,
  lg: 3,
  md: 3,
  sm: 2,
  xs: 1
};
function getColumn(column, screens) {
  if (typeof column === 'number') {
    return column;
  }
  if ((0, _typeof2["default"])(column) === 'object') {
    for (var i = 0; i < _responsiveObserve.responsiveArray.length; i++) {
      var breakpoint = _responsiveObserve.responsiveArray[i];
      if (screens[breakpoint] && column[breakpoint] !== undefined) {
        return column[breakpoint] || DEFAULT_COLUMN_MAP[breakpoint];
      }
    }
  }
  return 3;
}
function getFilledItem(node, span, rowRestCol) {
  var clone = node;
  if (span === undefined || span > rowRestCol) {
    clone = (0, _reactNode.cloneElement)(node, {
      span: rowRestCol
    });
    (0, _devWarning["default"])(span === undefined, 'Descriptions', 'Sum of column `span` in a line not match `column` of Descriptions.');
  }
  return clone;
}
function getRows(children, column) {
  var childNodes = (0, _toArray["default"])(children).filter(function (n) {
    return n;
  });
  var rows = [];
  var tmpRow = [];
  var rowRestCol = column;
  childNodes.forEach(function (node, index) {
    var _a;
    var span = (_a = node.props) === null || _a === void 0 ? void 0 : _a.span;
    var mergedSpan = span || 1;
    // Additional handle last one
    if (index === childNodes.length - 1) {
      tmpRow.push(getFilledItem(node, span, rowRestCol));
      rows.push(tmpRow);
      return;
    }
    if (mergedSpan < rowRestCol) {
      rowRestCol -= mergedSpan;
      tmpRow.push(node);
    } else {
      tmpRow.push(getFilledItem(node, mergedSpan, rowRestCol));
      rows.push(tmpRow);
      rowRestCol = column;
      tmpRow = [];
    }
  });
  return rows;
}
function Descriptions(_ref) {
  var customizePrefixCls = _ref.prefixCls,
    title = _ref.title,
    extra = _ref.extra,
    _ref$column = _ref.column,
    column = _ref$column === void 0 ? DEFAULT_COLUMN_MAP : _ref$column,
    _ref$colon = _ref.colon,
    colon = _ref$colon === void 0 ? true : _ref$colon,
    bordered = _ref.bordered,
    layout = _ref.layout,
    children = _ref.children,
    className = _ref.className,
    style = _ref.style,
    size = _ref.size;
  var _React$useContext = React.useContext(_configProvider.ConfigContext),
    getPrefixCls = _React$useContext.getPrefixCls,
    direction = _React$useContext.direction;
  var prefixCls = getPrefixCls('descriptions', customizePrefixCls);
  var _React$useState = React.useState({}),
    _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
    screens = _React$useState2[0],
    setScreens = _React$useState2[1];
  var mergedColumn = getColumn(column, screens);
  // Responsive
  React.useEffect(function () {
    var token = _responsiveObserve["default"].subscribe(function (newScreens) {
      if ((0, _typeof2["default"])(column) !== 'object') {
        return;
      }
      setScreens(newScreens);
    });
    return function () {
      _responsiveObserve["default"].unsubscribe(token);
    };
  }, []);
  // Children
  var rows = getRows(children, mergedColumn);
  return /*#__PURE__*/React.createElement("div", {
    className: (0, _classnames["default"])(prefixCls, (0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])({}, "".concat(prefixCls, "-").concat(size), size && size !== 'default'), "".concat(prefixCls, "-bordered"), !!bordered), "".concat(prefixCls, "-rtl"), direction === 'rtl'), className),
    style: style
  }, (title || extra) && /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, "-header")
  }, title && /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, "-title")
  }, title), extra && /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, "-extra")
  }, extra)), /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, "-view")
  }, /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("tbody", null, rows.map(function (row, index) {
    return /*#__PURE__*/React.createElement(_Row["default"], {
      key: index,
      index: index,
      colon: colon,
      prefixCls: prefixCls,
      vertical: layout === 'vertical',
      bordered: bordered,
      row: row
    });
  })))));
}
Descriptions.Item = _Item["default"];
var _default = exports["default"] = Descriptions;