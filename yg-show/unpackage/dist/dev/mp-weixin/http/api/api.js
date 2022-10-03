"use strict";
var http_http = require("../http.js");
const switchlist = async () => {
  let data = await http_http.http({
    url: "/home/swiperdata",
    method: "get"
  });
  return data;
};
const nav1 = async () => {
  let data = await http_http.http({
    url: "/home/catitems",
    method: "get"
  });
  return data;
};
const floorList = async () => {
  let data = await http_http.http({
    url: "/home/floordata",
    method: "get"
  });
  return data;
};
const categories = async () => {
  let data = await http_http.http({
    url: "/categories",
    method: "get"
  });
  return data;
};
const qsearch = async (query) => {
  let data = await http_http.http({
    url: `/goods/qsearch`,
    method: "get",
    data: {
      query
    }
  });
  return data;
};
const detail = async (goods_id) => {
  let data = await http_http.http({
    url: `/goods/detail`,
    method: "get",
    data: {
      goods_id
    }
  });
  return data;
};
exports.categories = categories;
exports.detail = detail;
exports.floorList = floorList;
exports.nav1 = nav1;
exports.qsearch = qsearch;
exports.switchlist = switchlist;
