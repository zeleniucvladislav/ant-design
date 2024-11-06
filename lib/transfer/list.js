"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _isNativeReflectConstruct2 = _interopRequireDefault(require("@babel/runtime/helpers/isNativeReflectConstruct"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var React = _interopRequireWildcard(require("react"));
var _omit = _interopRequireDefault(require("omit.js"));
var _classnames = _interopRequireDefault(require("classnames"));
var _DownOutlined = _interopRequireDefault(require("@ant-design/icons/DownOutlined"));
var _checkbox = _interopRequireDefault(require("../checkbox"));
var _menu = _interopRequireDefault(require("../menu"));
var _dropdown = _interopRequireDefault(require("../dropdown"));
var _search = _interopRequireDefault(require("./search"));
var _ListBody = _interopRequireWildcard(require("./ListBody"));
var _reactNode = require("../_util/reactNode");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, (0, _isNativeReflectConstruct2["default"])() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
var defaultRender = function defaultRender() {
  return null;
};
function isRenderResultPlainObject(result) {
  return result && !(0, _reactNode.isValidElement)(result) && Object.prototype.toString.call(result) === '[object Object]';
}
function getEnabledItemKeys(items) {
  return items.filter(function (data) {
    return !data.disabled;
  }).map(function (data) {
    return data.key;
  });
}
var TransferList = exports["default"] = /*#__PURE__*/function (_React$PureComponent) {
  function TransferList(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, TransferList);
    _this = _callSuper(this, TransferList, [props]);
    _this.defaultListBodyRef = /*#__PURE__*/React.createRef();
    // =============================== Filter ===============================
    _this.handleFilter = function (e) {
      var handleFilter = _this.props.handleFilter;
      var filterValue = e.target.value;
      _this.setState({
        filterValue: filterValue
      });
      handleFilter(e);
    };
    _this.handleClear = function () {
      var handleClear = _this.props.handleClear;
      _this.setState({
        filterValue: ''
      });
      handleClear();
    };
    _this.matchFilter = function (text, item) {
      var filterValue = _this.state.filterValue;
      var filterOption = _this.props.filterOption;
      if (filterOption) {
        return filterOption(filterValue, item);
      }
      return text.indexOf(filterValue) >= 0;
    };
    _this.getCurrentPageItems = function () {};
    // =============================== Render ===============================
    _this.renderListBody = function (renderList, props) {
      var bodyContent = renderList ? renderList(props) : null;
      var customize = !!bodyContent;
      if (!customize) {
        bodyContent = /*#__PURE__*/React.createElement(_ListBody["default"], (0, _extends2["default"])({
          ref: _this.defaultListBodyRef
        }, props));
      }
      return {
        customize: customize,
        bodyContent: bodyContent
      };
    };
    _this.renderItem = function (item) {
      var _this$props$render = _this.props.render,
        render = _this$props$render === void 0 ? defaultRender : _this$props$render;
      var renderResult = render(item);
      var isRenderResultPlain = isRenderResultPlainObject(renderResult);
      return {
        renderedText: isRenderResultPlain ? renderResult.value : renderResult,
        renderedEl: isRenderResultPlain ? renderResult.label : renderResult,
        item: item
      };
    };
    _this.getSelectAllLabel = function (selectedCount, totalCount) {
      var _this$props = _this.props,
        itemsUnit = _this$props.itemsUnit,
        itemUnit = _this$props.itemUnit,
        selectAllLabel = _this$props.selectAllLabel;
      if (selectAllLabel) {
        return typeof selectAllLabel === 'function' ? selectAllLabel({
          selectedCount: selectedCount,
          totalCount: totalCount
        }) : selectAllLabel;
      }
      var unit = totalCount > 1 ? itemsUnit : itemUnit;
      return /*#__PURE__*/React.createElement(React.Fragment, null, (selectedCount > 0 ? "".concat(selectedCount, "/") : '') + totalCount, " ", unit);
    };
    _this.state = {
      filterValue: ''
    };
    return _this;
  }
  (0, _inherits2["default"])(TransferList, _React$PureComponent);
  return (0, _createClass2["default"])(TransferList, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearTimeout(this.triggerScrollTimer);
    }
  }, {
    key: "getCheckStatus",
    value: function getCheckStatus(filteredItems) {
      var checkedKeys = this.props.checkedKeys;
      if (checkedKeys.length === 0) {
        return 'none';
      }
      if (filteredItems.every(function (item) {
        return checkedKeys.indexOf(item.key) >= 0 || !!item.disabled;
      })) {
        return 'all';
      }
      return 'part';
    }
    // ================================ Item ================================
  }, {
    key: "getFilteredItems",
    value: function getFilteredItems(dataSource, filterValue) {
      var _this2 = this;
      var filteredItems = [];
      var filteredRenderItems = [];
      dataSource.forEach(function (item) {
        var renderedItem = _this2.renderItem(item);
        var renderedText = renderedItem.renderedText;
        // Filter skip
        if (filterValue && !_this2.matchFilter(renderedText, item)) {
          return null;
        }
        filteredItems.push(item);
        filteredRenderItems.push(renderedItem);
      });
      return {
        filteredItems: filteredItems,
        filteredRenderItems: filteredRenderItems
      };
    }
  }, {
    key: "getListBody",
    value: function getListBody(prefixCls, searchPlaceholder, filterValue, filteredItems, notFoundContent, filteredRenderItems, checkedKeys, renderList, showSearch, disabled) {
      var search = showSearch ? /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-body-search-wrapper")
      }, /*#__PURE__*/React.createElement(_search["default"], {
        prefixCls: "".concat(prefixCls, "-search"),
        onChange: this.handleFilter,
        handleClear: this.handleClear,
        placeholder: searchPlaceholder,
        value: filterValue,
        disabled: disabled
      })) : null;
      var _this$renderListBody = this.renderListBody(renderList, (0, _extends2["default"])((0, _extends2["default"])({}, (0, _omit["default"])(this.props, _ListBody.OmitProps)), {
          filteredItems: filteredItems,
          filteredRenderItems: filteredRenderItems,
          selectedKeys: checkedKeys
        })),
        bodyContent = _this$renderListBody.bodyContent,
        customize = _this$renderListBody.customize;
      var bodyNode;
      // We should wrap customize list body in a classNamed div to use flex layout.
      if (customize) {
        bodyNode = /*#__PURE__*/React.createElement("div", {
          className: "".concat(prefixCls, "-body-customize-wrapper")
        }, bodyContent);
      } else {
        bodyNode = filteredItems.length ? bodyContent : /*#__PURE__*/React.createElement("div", {
          className: "".concat(prefixCls, "-body-not-found")
        }, notFoundContent);
      }
      return /*#__PURE__*/React.createElement("div", {
        className: (0, _classnames["default"])(showSearch ? "".concat(prefixCls, "-body ").concat(prefixCls, "-body-with-search") : "".concat(prefixCls, "-body"))
      }, search, bodyNode);
    }
  }, {
    key: "getCheckBox",
    value: function getCheckBox(filteredItems, onItemSelectAll, showSelectAll, disabled) {
      var checkStatus = this.getCheckStatus(filteredItems);
      var checkedAll = checkStatus === 'all';
      var checkAllCheckbox = showSelectAll !== false && /*#__PURE__*/React.createElement(_checkbox["default"], {
        disabled: disabled,
        checked: checkedAll,
        indeterminate: checkStatus === 'part',
        onChange: function onChange() {
          // Only select enabled items
          onItemSelectAll(filteredItems.filter(function (item) {
            return !item.disabled;
          }).map(function (_ref) {
            var key = _ref.key;
            return key;
          }), !checkedAll);
        }
      });
      return checkAllCheckbox;
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;
      var filterValue = this.state.filterValue;
      var _this$props2 = this.props,
        prefixCls = _this$props2.prefixCls,
        dataSource = _this$props2.dataSource,
        titleText = _this$props2.titleText,
        checkedKeys = _this$props2.checkedKeys,
        disabled = _this$props2.disabled,
        footer = _this$props2.footer,
        showSearch = _this$props2.showSearch,
        style = _this$props2.style,
        searchPlaceholder = _this$props2.searchPlaceholder,
        notFoundContent = _this$props2.notFoundContent,
        selectAll = _this$props2.selectAll,
        selectCurrent = _this$props2.selectCurrent,
        selectInvert = _this$props2.selectInvert,
        removeAll = _this$props2.removeAll,
        removeCurrent = _this$props2.removeCurrent,
        renderList = _this$props2.renderList,
        onItemSelectAll = _this$props2.onItemSelectAll,
        onItemRemove = _this$props2.onItemRemove,
        showSelectAll = _this$props2.showSelectAll,
        showRemove = _this$props2.showRemove,
        pagination = _this$props2.pagination;
      // Custom Layout
      var footerDom = footer && footer(this.props);
      var listCls = (0, _classnames["default"])(prefixCls, (0, _defineProperty2["default"])((0, _defineProperty2["default"])({}, "".concat(prefixCls, "-with-pagination"), pagination), "".concat(prefixCls, "-with-footer"), footerDom));
      // ====================== Get filtered, checked item list ======================
      var _this$getFilteredItem = this.getFilteredItems(dataSource, filterValue),
        filteredItems = _this$getFilteredItem.filteredItems,
        filteredRenderItems = _this$getFilteredItem.filteredRenderItems;
      // ================================= List Body =================================
      var listBody = this.getListBody(prefixCls, searchPlaceholder, filterValue, filteredItems, notFoundContent, filteredRenderItems, checkedKeys, renderList, showSearch, disabled);
      // ================================ List Footer ================================
      var listFooter = footerDom ? /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-footer")
      }, footerDom) : null;
      var checkAllCheckbox = !showRemove && !pagination && this.getCheckBox(filteredItems, onItemSelectAll, showSelectAll, disabled);
      var menu = null;
      if (showRemove) {
        menu = /*#__PURE__*/React.createElement(_menu["default"], null, pagination && /*#__PURE__*/React.createElement(_menu["default"].Item, {
          onClick: function onClick() {
            var _a;
            var pageKeys = getEnabledItemKeys((((_a = _this3.defaultListBodyRef.current) === null || _a === void 0 ? void 0 : _a.getItems()) || []).map(function (entity) {
              return entity.item;
            }));
            onItemRemove === null || onItemRemove === void 0 ? void 0 : onItemRemove(pageKeys);
          }
        }, removeCurrent), /*#__PURE__*/React.createElement(_menu["default"].Item, {
          onClick: function onClick() {
            onItemRemove === null || onItemRemove === void 0 ? void 0 : onItemRemove(getEnabledItemKeys(filteredItems));
          }
        }, removeAll));
      } else {
        menu = /*#__PURE__*/React.createElement(_menu["default"], null, /*#__PURE__*/React.createElement(_menu["default"].Item, {
          onClick: function onClick() {
            var keys = getEnabledItemKeys(filteredItems);
            onItemSelectAll(keys, keys.length !== checkedKeys.length);
          }
        }, selectAll), pagination && /*#__PURE__*/React.createElement(_menu["default"].Item, {
          onClick: function onClick() {
            var _a;
            var pageItems = ((_a = _this3.defaultListBodyRef.current) === null || _a === void 0 ? void 0 : _a.getItems()) || [];
            onItemSelectAll(getEnabledItemKeys(pageItems.map(function (entity) {
              return entity.item;
            })), true);
          }
        }, selectCurrent), /*#__PURE__*/React.createElement(_menu["default"].Item, {
          onClick: function onClick() {
            var _a;
            var availableKeys;
            if (pagination) {
              availableKeys = getEnabledItemKeys((((_a = _this3.defaultListBodyRef.current) === null || _a === void 0 ? void 0 : _a.getItems()) || []).map(function (entity) {
                return entity.item;
              }));
            } else {
              availableKeys = getEnabledItemKeys(filteredItems);
            }
            var checkedKeySet = new Set(checkedKeys);
            var newCheckedKeys = [];
            var newUnCheckedKeys = [];
            availableKeys.forEach(function (key) {
              if (checkedKeySet.has(key)) {
                newUnCheckedKeys.push(key);
              } else {
                newCheckedKeys.push(key);
              }
            });
            onItemSelectAll(newCheckedKeys, true);
            onItemSelectAll(newUnCheckedKeys, false);
          }
        }, selectInvert));
      }
      var dropdown = /*#__PURE__*/React.createElement(_dropdown["default"], {
        className: "".concat(prefixCls, "-header-dropdown"),
        overlay: menu,
        disabled: disabled
      }, /*#__PURE__*/React.createElement(_DownOutlined["default"], null));
      // ================================== Render ===================================
      return /*#__PURE__*/React.createElement("div", {
        className: listCls,
        style: style
      }, /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-header")
      }, checkAllCheckbox, dropdown, /*#__PURE__*/React.createElement("span", {
        className: "".concat(prefixCls, "-header-selected")
      }, this.getSelectAllLabel(checkedKeys.length, filteredItems.length)), /*#__PURE__*/React.createElement("span", {
        className: "".concat(prefixCls, "-header-title")
      }, titleText)), listBody, listFooter);
    }
  }]);
}(React.PureComponent);
TransferList.defaultProps = {
  dataSource: [],
  titleText: '',
  showSearch: false
};