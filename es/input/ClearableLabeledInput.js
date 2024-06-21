import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _isNativeReflectConstruct from "@babel/runtime/helpers/isNativeReflectConstruct";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
import * as React from 'react';
import classNames from 'classnames';
import CloseCircleFilled from '@ant-design/icons/CloseCircleFilled';
import { tuple } from '../_util/type';
import { getInputClassName } from './Input';
import { cloneElement } from '../_util/reactNode';
var ClearableInputType = tuple('text', 'input');
export function hasPrefixSuffix(props) {
  return !!(props.prefix || props.suffix || props.allowClear);
}
var ClearableLabeledInput = /*#__PURE__*/function (_React$Component) {
  function ClearableLabeledInput() {
    var _this;
    _classCallCheck(this, ClearableLabeledInput);
    _this = _callSuper(this, ClearableLabeledInput, arguments);
    /** @private Do not use out of this class. We do not promise this is always keep. */
    _this.containerRef = /*#__PURE__*/React.createRef();
    _this.onInputMouseUp = function (e) {
      var _a;
      if ((_a = _this.containerRef.current) === null || _a === void 0 ? void 0 : _a.contains(e.target)) {
        var triggerFocus = _this.props.triggerFocus;
        triggerFocus();
      }
    };
    return _this;
  }
  _inherits(ClearableLabeledInput, _React$Component);
  return _createClass(ClearableLabeledInput, [{
    key: "renderClearIcon",
    value: function renderClearIcon(prefixCls) {
      var _this$props = this.props,
        allowClear = _this$props.allowClear,
        value = _this$props.value,
        disabled = _this$props.disabled,
        readOnly = _this$props.readOnly,
        inputType = _this$props.inputType,
        handleReset = _this$props.handleReset;
      if (!allowClear) {
        return null;
      }
      var needClear = !disabled && !readOnly && value;
      var className = inputType === ClearableInputType[0] ? "".concat(prefixCls, "-textarea-clear-icon") : "".concat(prefixCls, "-clear-icon");
      return /*#__PURE__*/React.createElement(CloseCircleFilled, {
        onClick: handleReset,
        className: classNames(_defineProperty({}, "".concat(className, "-hidden"), !needClear), className),
        role: "button"
      });
    }
  }, {
    key: "renderSuffix",
    value: function renderSuffix(prefixCls) {
      var _this$props2 = this.props,
        suffix = _this$props2.suffix,
        allowClear = _this$props2.allowClear;
      if (suffix || allowClear) {
        return /*#__PURE__*/React.createElement("span", {
          className: "".concat(prefixCls, "-suffix")
        }, this.renderClearIcon(prefixCls), suffix);
      }
      return null;
    }
  }, {
    key: "renderLabeledIcon",
    value: function renderLabeledIcon(prefixCls, element) {
      var _this$props3 = this.props,
        focused = _this$props3.focused,
        value = _this$props3.value,
        prefix = _this$props3.prefix,
        className = _this$props3.className,
        size = _this$props3.size,
        suffix = _this$props3.suffix,
        disabled = _this$props3.disabled,
        allowClear = _this$props3.allowClear,
        direction = _this$props3.direction,
        style = _this$props3.style,
        readOnly = _this$props3.readOnly,
        bordered = _this$props3.bordered;
      var suffixNode = this.renderSuffix(prefixCls);
      if (!hasPrefixSuffix(this.props)) {
        return cloneElement(element, {
          value: value
        });
      }
      var prefixNode = prefix ? /*#__PURE__*/React.createElement("span", {
        className: "".concat(prefixCls, "-prefix")
      }, prefix) : null;
      var affixWrapperCls = classNames("".concat(prefixCls, "-affix-wrapper"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "".concat(prefixCls, "-affix-wrapper-focused"), focused), "".concat(prefixCls, "-affix-wrapper-disabled"), disabled), "".concat(prefixCls, "-affix-wrapper-sm"), size === 'small'), "".concat(prefixCls, "-affix-wrapper-lg"), size === 'large'), "".concat(prefixCls, "-affix-wrapper-input-with-clear-btn"), suffix && allowClear && value), "".concat(prefixCls, "-affix-wrapper-rtl"), direction === 'rtl'), "".concat(prefixCls, "-affix-wrapper-readonly"), readOnly), "".concat(prefixCls, "-affix-wrapper-borderless"), !bordered), className);
      return /*#__PURE__*/React.createElement("span", {
        ref: this.containerRef,
        className: affixWrapperCls,
        style: style,
        onMouseUp: this.onInputMouseUp
      }, prefixNode, cloneElement(element, {
        style: null,
        value: value,
        className: getInputClassName(prefixCls, bordered, size, disabled)
      }), suffixNode);
    }
  }, {
    key: "renderInputWithLabel",
    value: function renderInputWithLabel(prefixCls, labeledElement) {
      var _this$props4 = this.props,
        addonBefore = _this$props4.addonBefore,
        addonAfter = _this$props4.addonAfter,
        style = _this$props4.style,
        size = _this$props4.size,
        className = _this$props4.className,
        direction = _this$props4.direction;
      // Not wrap when there is not addons
      if (!addonBefore && !addonAfter) {
        return labeledElement;
      }
      var wrapperClassName = "".concat(prefixCls, "-group");
      var addonClassName = "".concat(wrapperClassName, "-addon");
      var addonBeforeNode = addonBefore ? /*#__PURE__*/React.createElement("span", {
        className: addonClassName
      }, addonBefore) : null;
      var addonAfterNode = addonAfter ? /*#__PURE__*/React.createElement("span", {
        className: addonClassName
      }, addonAfter) : null;
      var mergedWrapperClassName = classNames("".concat(prefixCls, "-wrapper"), _defineProperty(_defineProperty({}, wrapperClassName, addonBefore || addonAfter), "".concat(wrapperClassName, "-rtl"), direction === 'rtl'));
      var mergedGroupClassName = classNames("".concat(prefixCls, "-group-wrapper"), _defineProperty(_defineProperty(_defineProperty({}, "".concat(prefixCls, "-group-wrapper-sm"), size === 'small'), "".concat(prefixCls, "-group-wrapper-lg"), size === 'large'), "".concat(prefixCls, "-group-wrapper-rtl"), direction === 'rtl'), className);
      // Need another wrapper for changing display:table to display:inline-block
      // and put style prop in wrapper
      return /*#__PURE__*/React.createElement("span", {
        className: mergedGroupClassName,
        style: style
      }, /*#__PURE__*/React.createElement("span", {
        className: mergedWrapperClassName
      }, addonBeforeNode, cloneElement(labeledElement, {
        style: null
      }), addonAfterNode));
    }
  }, {
    key: "renderTextAreaWithClearIcon",
    value: function renderTextAreaWithClearIcon(prefixCls, element) {
      var _this$props5 = this.props,
        value = _this$props5.value,
        allowClear = _this$props5.allowClear,
        className = _this$props5.className,
        style = _this$props5.style,
        direction = _this$props5.direction,
        bordered = _this$props5.bordered;
      if (!allowClear) {
        return cloneElement(element, {
          value: value
        });
      }
      var affixWrapperCls = classNames("".concat(prefixCls, "-affix-wrapper"), "".concat(prefixCls, "-affix-wrapper-textarea-with-clear-btn"), _defineProperty(_defineProperty({}, "".concat(prefixCls, "-affix-wrapper-rtl"), direction === 'rtl'), "".concat(prefixCls, "-affix-wrapper-borderless"), !bordered), className);
      return /*#__PURE__*/React.createElement("span", {
        className: affixWrapperCls,
        style: style
      }, cloneElement(element, {
        style: null,
        value: value
      }), this.renderClearIcon(prefixCls));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props6 = this.props,
        prefixCls = _this$props6.prefixCls,
        inputType = _this$props6.inputType,
        element = _this$props6.element;
      if (inputType === ClearableInputType[0]) {
        return this.renderTextAreaWithClearIcon(prefixCls, element);
      }
      return this.renderInputWithLabel(prefixCls, this.renderLabeledIcon(prefixCls, element));
    }
  }]);
}(React.Component);
export default ClearableLabeledInput;