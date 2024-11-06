"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.LayoutContext = void 0;
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _isNativeReflectConstruct2 = _interopRequireDefault(require("@babel/runtime/helpers/isNativeReflectConstruct"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var React = _interopRequireWildcard(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
var _configProvider = require("../config-provider");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, (0, _isNativeReflectConstruct2["default"])() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
var LayoutContext = exports.LayoutContext = /*#__PURE__*/React.createContext({
  siderHook: {
    addSider: function addSider() {
      return null;
    },
    removeSider: function removeSider() {
      return null;
    }
  }
});
function generator(_ref) {
  var suffixCls = _ref.suffixCls,
    tagName = _ref.tagName,
    displayName = _ref.displayName;
  return function (BasicComponent) {
    var _a;
    return _a = /*#__PURE__*/function (_React$Component) {
      function Adapter() {
        var _this;
        (0, _classCallCheck2["default"])(this, Adapter);
        _this = _callSuper(this, Adapter, arguments);
        _this.renderComponent = function (_ref2) {
          var getPrefixCls = _ref2.getPrefixCls;
          var customizePrefixCls = _this.props.prefixCls;
          var prefixCls = getPrefixCls(suffixCls, customizePrefixCls);
          return /*#__PURE__*/React.createElement(BasicComponent, (0, _extends2["default"])({
            prefixCls: prefixCls,
            tagName: tagName
          }, _this.props));
        };
        return _this;
      }
      (0, _inherits2["default"])(Adapter, _React$Component);
      return (0, _createClass2["default"])(Adapter, [{
        key: "render",
        value: function render() {
          return /*#__PURE__*/React.createElement(_configProvider.ConfigConsumer, null, this.renderComponent);
        }
      }]);
    }(React.Component), _a.displayName = displayName, _a;
  };
}
var Basic = function Basic(props) {
  var prefixCls = props.prefixCls,
    className = props.className,
    children = props.children,
    tagName = props.tagName,
    others = __rest(props, ["prefixCls", "className", "children", "tagName"]);
  var classString = (0, _classnames["default"])(prefixCls, className);
  return /*#__PURE__*/React.createElement(tagName, (0, _extends2["default"])({
    className: classString
  }, others), children);
};
var BasicLayout = /*#__PURE__*/function (_React$Component2) {
  function BasicLayout() {
    var _this2;
    (0, _classCallCheck2["default"])(this, BasicLayout);
    _this2 = _callSuper(this, BasicLayout, arguments);
    _this2.state = {
      siders: []
    };
    _this2.renderComponent = function (_ref3) {
      var direction = _ref3.direction;
      var _a = _this2.props,
        prefixCls = _a.prefixCls,
        className = _a.className,
        children = _a.children,
        hasSider = _a.hasSider,
        Tag = _a.tagName,
        others = __rest(_a, ["prefixCls", "className", "children", "hasSider", "tagName"]);
      var classString = (0, _classnames["default"])(prefixCls, (0, _defineProperty2["default"])((0, _defineProperty2["default"])({}, "".concat(prefixCls, "-has-sider"), typeof hasSider === 'boolean' ? hasSider : _this2.state.siders.length > 0), "".concat(prefixCls, "-rtl"), direction === 'rtl'), className);
      return /*#__PURE__*/React.createElement(LayoutContext.Provider, {
        value: {
          siderHook: _this2.getSiderHook()
        }
      }, /*#__PURE__*/React.createElement(Tag, (0, _extends2["default"])({
        className: classString
      }, others), children));
    };
    return _this2;
  }
  (0, _inherits2["default"])(BasicLayout, _React$Component2);
  return (0, _createClass2["default"])(BasicLayout, [{
    key: "getSiderHook",
    value: function getSiderHook() {
      var _this3 = this;
      return {
        addSider: function addSider(id) {
          _this3.setState(function (state) {
            return {
              siders: [].concat((0, _toConsumableArray2["default"])(state.siders), [id])
            };
          });
        },
        removeSider: function removeSider(id) {
          _this3.setState(function (state) {
            return {
              siders: state.siders.filter(function (currentId) {
                return currentId !== id;
              })
            };
          });
        }
      };
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(_configProvider.ConfigConsumer, null, this.renderComponent);
    }
  }]);
}(React.Component);
var Layout = generator({
  suffixCls: 'layout',
  tagName: 'section',
  displayName: 'Layout'
})(BasicLayout);
var Header = generator({
  suffixCls: 'layout-header',
  tagName: 'header',
  displayName: 'Header'
})(Basic);
var Footer = generator({
  suffixCls: 'layout-footer',
  tagName: 'footer',
  displayName: 'Footer'
})(Basic);
var Content = generator({
  suffixCls: 'layout-content',
  tagName: 'main',
  displayName: 'Content'
})(Basic);
Layout.Header = Header;
Layout.Footer = Footer;
Layout.Content = Content;
var _default = exports["default"] = Layout;