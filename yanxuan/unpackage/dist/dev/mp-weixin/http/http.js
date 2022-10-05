"use strict";
var common_vendor = require("../common/vendor.js");
let http = (params) => {
  const baseUrl = "https://api-hmugo-web.itheima.net/api/public/v1";
  return new Promise((resolve, reject) => {
    common_vendor.index.showLoading({
      title: "\u62FC\u547D\u52A0\u8F7D\u4E2D"
    });
    common_vendor.index.request({
      url: baseUrl + params.url,
      method: params.method || "get",
      data: params.data || "",
      success: (res) => {
        resolve(res.data);
      },
      file: (err) => {
        reject(err);
      },
      complete: () => {
        common_vendor.index.hideLoading();
      }
    });
  });
};
exports.http = http;
