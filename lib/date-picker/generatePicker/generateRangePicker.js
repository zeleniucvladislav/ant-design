"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = generateRangePicker;
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
var _CalendarOutlined = _interopRequireDefault(require("@ant-design/icons/CalendarOutlined"));
var _ClockCircleOutlined = _interopRequireDefault(require("@ant-design/icons/ClockCircleOutlined"));
var _CloseCircleFilled = _interopRequireDefault(require("@ant-design/icons/CloseCircleFilled"));
var _SwapRightOutlined = _interopRequireDefault(require("@ant-design/icons/SwapRightOutlined"));
var _rcPicker = require("rc-picker");
var _en_US = _interopRequireDefault(require("../locale/en_US"));
var _configProvider = require("../../config-provider");
var _SizeContext = _interopRequireDefault(require("../../config-provider/SizeContext"));
var _LocaleReceiver = _interopRequireDefault(require("../../locale-provider/LocaleReceiver"));
var _util = require("../util");
var _ = require(".");
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
function generateRangePicker(generateConfig) {
  var RangePicker = /*#__PURE__*/function (_React$Component) {
    function RangePicker() {
      var _this;
      (0, _classCallCheck2["default"])(this, RangePicker);
      _this = _callSuper(this, RangePicker, arguments);
      _this.pickerRef = /*#__PURE__*/React.createRef();
      _this.focus = function () {
        if (_this.pickerRef.current) {
          _this.pickerRef.current.focus();
        }
      };
      _this.blur = function () {
        if (_this.pickerRef.current) {
          _this.pickerRef.current.blur();
        }
      };
      _this.getDefaultLocale = function () {
        var locale = _this.props.locale;
        var result = (0, _extends2["default"])((0, _extends2["default"])({}, _en_US["default"]), locale);
        result.lang = (0, _extends2["default"])((0, _extends2["default"])({}, result.lang), (locale || {}).lang);
        return result;
      };
      _this.renderPicker = function (locale) {
        var _this$context = _this.context,
          getPrefixCls = _this$context.getPrefixCls,
          direction = _this$context.direction,
          getPopupContainer = _this$context.getPopupContainer;
        var _a = _this.props,
          customizePrefixCls = _a.prefixCls,
          customGetPopupContainer = _a.getPopupContainer,
          className = _a.className,
          customizeSize = _a.size,
          _a$bordered = _a.bordered,
          bordered = _a$bordered === void 0 ? true : _a$bordered,
          placeholder = _a.placeholder,
          restProps = __rest(_a, ["prefixCls", "getPopupContainer", "className", "size", "bordered", "placeholder"]);
        var _this$props = _this.props,
          format = _this$props.format,
          showTime = _this$props.showTime,
          picker = _this$props.picker;
        var prefixCls = getPrefixCls('picker', customizePrefixCls);
        var additionalOverrideProps = {};
        additionalOverrideProps = (0, _extends2["default"])((0, _extends2["default"])((0, _extends2["default"])({}, additionalOverrideProps), showTime ? (0, _.getTimeProps)((0, _extends2["default"])({
          format: format,
          picker: picker
        }, showTime)) : {}), picker === 'time' ? (0, _.getTimeProps)((0, _extends2["default"])((0, _extends2["default"])({
          format: format
        }, _this.props), {
          picker: picker
        })) : {});
        return /*#__PURE__*/React.createElement(_SizeContext["default"].Consumer, null, function (size) {
          var mergedSize = customizeSize || size;
          return /*#__PURE__*/React.createElement(_rcPicker.RangePicker, (0, _extends2["default"])({
            separator: /*#__PURE__*/React.createElement("span", {
              "aria-label": "to",
              className: "".concat(prefixCls, "-separator")
            }, /*#__PURE__*/React.createElement(_SwapRightOutlined["default"], null)),
            ref: _this.pickerRef,
            placeholder: (0, _util.getRangePlaceholder)(picker, locale, placeholder),
            suffixIcon: picker === 'time' ? /*#__PURE__*/React.createElement(_ClockCircleOutlined["default"], null) : /*#__PURE__*/React.createElement(_CalendarOutlined["default"], null),
            clearIcon: /*#__PURE__*/React.createElement(_CloseCircleFilled["default"], null),
            allowClear: true,
            transitionName: "slide-up"
          }, restProps, additionalOverrideProps, {
            className: (0, _classnames["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])({}, "".concat(prefixCls, "-").concat(mergedSize), mergedSize), "".concat(prefixCls, "-borderless"), !bordered), className),
            locale: locale.lang,
            prefixCls: prefixCls,
            getPopupContainer: customGetPopupContainer || getPopupContainer,
            generateConfig: generateConfig,
            prevIcon: /*#__PURE__*/React.createElement("span", {
              className: "".concat(prefixCls, "-prev-icon")
            }),
            nextIcon: /*#__PURE__*/React.createElement("span", {
              className: "".concat(prefixCls, "-next-icon")
            }),
            superPrevIcon: /*#__PURE__*/React.createElement("span", {
              className: "".concat(prefixCls, "-super-prev-icon")
            }),
            superNextIcon: /*#__PURE__*/React.createElement("span", {
              className: "".concat(prefixCls, "-super-next-icon")
            }),
            components: _.Components,
            direction: direction
          }));
        });
      };
      return _this;
    }
    (0, _inherits2["default"])(RangePicker, _React$Component);
    return (0, _createClass2["default"])(RangePicker, [{
      key: "render",
      value: function render() {
        return /*#__PURE__*/React.createElement(_LocaleReceiver["default"], {
          componentName: "DatePicker",
          defaultLocale: this.getDefaultLocale
        }, this.renderPicker);
      }
    }]);
  }(React.Component);
  RangePicker.contextType = _configProvider.ConfigContext;
  return RangePicker;
}