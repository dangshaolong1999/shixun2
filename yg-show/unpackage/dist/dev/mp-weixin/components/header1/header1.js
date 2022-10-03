"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  setup() {
    const search = () => {
      common_vendor.index.navigateTo({
        url: "/pages/search/search"
      });
    };
    return {
      search
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $setup.search && $setup.search(...args))
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/\u738B\u660E\u946B/Desktop/\u738B\u660E\u946Bp8-\u671F\u672B\u8003\u8BD5-A\u573A/yg-show/components/header1/header1.vue"]]);
wx.createComponent(Component);
