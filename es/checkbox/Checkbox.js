import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _extends from "@babel/runtime/helpers/extends";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _isNativeReflectConstruct from "@babel/runtime/helpers/isNativeReflectConstruct";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
var __rest = this && this.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
import * as React from 'react';
import classNames from 'classnames';
import RcCheckbox from 'rc-checkbox';
import { GroupContext } from './Group';
import { ConfigConsumer } from '../config-provider';
import devWarning from '../_util/devWarning';
var Checkbox = /*#__PURE__*/function (_React$PureComponent) {
  function Checkbox() {
    var _this;
    _classCallCheck(this, Checkbox);
    _this = _callSuper(this, Checkbox, arguments);
    _this.saveCheckbox = function (node) {
      _this.rcCheckbox = node;
    };
    _this.renderCheckbox = function (_ref) {
      var getPrefixCls = _ref.getPrefixCls,
        direction = _ref.direction;
      var _this2 = _this,
        props = _this2.props,
        context = _this2.context;
      var customizePrefixCls = props.prefixCls,
        className = props.className,
        children = props.children,
        indeterminate = props.indeterminate,
        style = props.style,
        onMouseEnter = props.onMouseEnter,
        onMouseLeave = props.onMouseLeave,
        restProps = __rest(props, ["prefixCls", "className", "children", "indeterminate", "style", "onMouseEnter", "onMouseLeave"]);
      var checkboxGroup = context;
      var prefixCls = getPrefixCls('checkbox', customizePrefixCls);
      var checkboxProps = _extends({}, restProps);
      if (checkboxGroup) {
        checkboxProps.onChange = function () {
          if (restProps.onChange) {
            restProps.onChange.apply(restProps, arguments);
          }
          checkboxGroup.toggleOption({
            label: children,
            value: props.value
          });
        };
        checkboxProps.name = checkboxGroup.name;
        checkboxProps.checked = checkboxGroup.value.indexOf(props.value) !== -1;
        checkboxProps.disabled = props.disabled || checkboxGroup.disabled;
      }
      var classString = classNames(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "".concat(prefixCls, "-wrapper"), true), "".concat(prefixCls, "-rtl"), direction === 'rtl'), "".concat(prefixCls, "-wrapper-checked"), checkboxProps.checked), "".concat(prefixCls, "-wrapper-disabled"), checkboxProps.disabled), className);
      var checkboxClass = classNames(_defineProperty({}, "".concat(prefixCls, "-indeterminate"), indeterminate));
      return (
        /*#__PURE__*/
        // eslint-disable-next-line jsx-a11y/label-has-associated-control
        React.createElement("label", {
          className: classString,
          style: style,
          onMouseEnter: onMouseEnter,
          onMouseLeave: onMouseLeave
        }, /*#__PURE__*/React.createElement(RcCheckbox, _extends({}, checkboxProps, {
          prefixCls: prefixCls,
          className: checkboxClass,
          ref: _this.saveCheckbox
        })), children !== undefined && /*#__PURE__*/React.createElement("span", null, children))
      );
    };
    return _this;
  }
  _inherits(Checkbox, _React$PureComponent);
  return _createClass(Checkbox, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _a;
      var value = this.props.value;
      (_a = this.context) === null || _a === void 0 ? void 0 : _a.registerValue(value);
      devWarning('checked' in this.props || this.context || !('value' in this.props), 'Checkbox', '`value` is not a valid prop, do you mean `checked`?');
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(_ref2) {
      var prevValue = _ref2.value;
      var _a, _b;
      var value = this.props.value;
      if (value !== prevValue) {
        (_a = this.context) === null || _a === void 0 ? void 0 : _a.cancelValue(prevValue);
        (_b = this.context) === null || _b === void 0 ? void 0 : _b.registerValue(value);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _a;
      var value = this.props.value;
      (_a = this.context) === null || _a === void 0 ? void 0 : _a.cancelValue(value);
    }
  }, {
    key: "focus",
    value: function focus() {
      this.rcCheckbox.focus();
    }
  }, {
    key: "blur",
    value: function blur() {
      this.rcCheckbox.blur();
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(ConfigConsumer, null, this.renderCheckbox);
    }
  }]);
}(React.PureComponent);
Checkbox.__ANT_CHECKBOX = true;
Checkbox.defaultProps = {
  indeterminate: false
};
Checkbox.contextType = GroupContext;
export default Checkbox;