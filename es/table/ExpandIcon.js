import _defineProperty from "@babel/runtime/helpers/defineProperty";
import * as React from 'react';
import classNames from 'classnames';
function renderExpandIcon(locale) {
  return function expandIcon(_ref) {
    var prefixCls = _ref.prefixCls,
      onExpand = _ref.onExpand,
      record = _ref.record,
      expanded = _ref.expanded,
      expandable = _ref.expandable;
    var iconPrefix = "".concat(prefixCls, "-row-expand-icon");
    return /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: function onClick(e) {
        onExpand(record, e);
        e.stopPropagation();
      },
      className: classNames(iconPrefix, _defineProperty(_defineProperty(_defineProperty({}, "".concat(iconPrefix, "-spaced"), !expandable), "".concat(iconPrefix, "-expanded"), expandable && expanded), "".concat(iconPrefix, "-collapsed"), expandable && !expanded)),
      "aria-label": expanded ? locale.collapse : locale.expand
    });
  };
}
export default renderExpandIcon;