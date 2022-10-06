"use strict";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  setup() {
    const data = common_vendor.reactive({
      value: true,
      checked: false,
      list: []
    });
    common_vendor.onShow(() => {
      console.log(666);
      data.list = common_vendor.index.getStorageSync("info") || [];
    });
    console.log(data.list.length, 66666);
    const valChange = (item, i) => {
      console.log(item, i);
      if (item < 1) {
        common_vendor.index.showModal({
          title: "\u63D0\u793A",
          content: "\u4F60\u662F\u5426\u8981\u5220\u9664",
          success: function(res) {
            if (res.confirm) {
              data.list.splice(i, 1);
            } else if (res.cancel) {
              console.log("\u7528\u6237\u70B9\u51FB\u53D6\u6D88");
              data.list[i].num = 1;
            }
          }
        });
      }
      common_vendor.index.setStorage({
        key: "info",
        data: data.list
      });
    };
    const checkboxChange = (e) => {
      data.list.forEach((item) => {
        item.checked = e.value;
      });
    };
    const checkboxChange1 = (e) => {
      console.log(111);
      setTimeout(() => {
        let a2 = data.list.every((item) => item.checked == true);
        if (a2) {
          data.checked = true;
        } else {
          data.checked = false;
        }
      });
    };
    const checkboxGroupChange = (e) => {
    };
    const a = common_vendor.computed$1(() => {
      let num = 0;
      let Total = 0;
      data.list.forEach((item) => {
        if (item.checked) {
          num += item.num;
          Total += item.num * item.goods_price;
        }
      });
      return {
        num,
        Total
      };
    });
    return __spreadProps(__spreadValues({}, common_vendor.toRefs(data)), {
      valChange,
      checkboxChange,
      checkboxChange1,
      checkboxGroupChange,
      a
    });
  }
};
if (!Array) {
  const _easycom_u_checkbox2 = common_vendor.resolveComponent("u-checkbox");
  const _easycom_u_checkbox_group2 = common_vendor.resolveComponent("u-checkbox-group");
  const _easycom_u_number_box2 = common_vendor.resolveComponent("u-number-box");
  const _easycom_u_button2 = common_vendor.resolveComponent("u-button");
  (_easycom_u_checkbox2 + _easycom_u_checkbox_group2 + _easycom_u_number_box2 + _easycom_u_button2)();
}
const _easycom_u_checkbox = () => "../../uni_modules/vk-uview-ui/components/u-checkbox/u-checkbox.js";
const _easycom_u_checkbox_group = () => "../../uni_modules/vk-uview-ui/components/u-checkbox-group/u-checkbox-group.js";
const _easycom_u_number_box = () => "../../uni_modules/vk-uview-ui/components/u-number-box/u-number-box.js";
const _easycom_u_button = () => "../../uni_modules/vk-uview-ui/components/u-button/u-button.js";
if (!Math) {
  (_easycom_u_checkbox + _easycom_u_checkbox_group + _easycom_u_number_box + _easycom_u_button)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: _ctx.list.length != 0
  }, _ctx.list.length != 0 ? {
    b: common_vendor.f(_ctx.list, (item, index, i0) => {
      return {
        a: "74639822-1-" + i0 + "," + ("74639822-0-" + i0),
        b: common_vendor.o(($event) => item.checked = $event),
        c: common_vendor.p({
          modelValue: item.checked
        }),
        d: "74639822-0-" + i0,
        e: item.goods_big_logo,
        f: common_vendor.t(item.goods_name),
        g: common_vendor.t(item.goods_price),
        h: common_vendor.o(($event) => $setup.valChange(item.num, index)),
        i: "74639822-2-" + i0,
        j: common_vendor.o(($event) => item.num = $event),
        k: common_vendor.p({
          modelValue: item.num
        }),
        l: item.goods_id
      };
    }),
    c: common_vendor.o($setup.checkboxChange1),
    d: common_vendor.o($setup.checkboxGroupChange)
  } : {}, {
    e: common_vendor.o($setup.checkboxChange),
    f: common_vendor.o(($event) => _ctx.checked = $event),
    g: common_vendor.p({
      modelValue: _ctx.checked
    }),
    h: common_vendor.t($setup.a.Total),
    i: common_vendor.t($setup.a.num),
    j: common_vendor.p({
      type: "error"
    })
  });
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/\u738B\u660E\u946B/Desktop/\u738B\u660E\u946Bp8-\u671F\u672B\u8003\u8BD5-A\u573A/yg-show/pages/shopping/shopping.vue"]]);
wx.createPage(MiniProgramPage);
