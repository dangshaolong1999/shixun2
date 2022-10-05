"use strict";
var common_vendor = require("../../common/vendor.js");
var http_api_api = require("../../http/api/api.js");
require("../../http/http.js");
if (!Array) {
  const _easycom_header12 = common_vendor.resolveComponent("header1");
  const _easycom_u_swiper2 = common_vendor.resolveComponent("u-swiper");
  (_easycom_header12 + _easycom_u_swiper2)();
}
const _easycom_header1 = () => "../../components/header1/header1.js";
const _easycom_u_swiper = () => "../../uni_modules/vk-uview-ui/components/u-swiper/u-swiper.js";
if (!Math) {
  (_easycom_header1 + _easycom_u_swiper + floor)();
}
const floor = () => "../../components/fllor/fllor.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const data = common_vendor.reactive({
      list: [],
      catesList: [],
      floorList: []
    });
    http_api_api.switchlist().then((res) => {
      data.list = res.message;
    });
    http_api_api.nav1().then((res) => {
      data.catesList = res.message;
    });
    http_api_api.floorList().then((res) => {
      data.floorList = res.message;
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          height: "320",
          list: data.list,
          name: "image_src",
          mode: "dot"
        }),
        b: common_vendor.f(data.catesList, (item, index, i0) => {
          return {
            a: index,
            b: item.image_src
          };
        }),
        c: common_vendor.p({
          list: data.floorList
        })
      };
    };
  }
});
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/asus/Desktop/\u4F5C\u4E1A/yanxuan/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
