import request from '../utils/request'
//获取首页数据
export function homePageList() {
  return request({
    url: "/v2-car-getMasterBrandList.html",
    method: "GET",
    data: {
      _1563178933183: ""
    }
  });
}

export function SelectImage() {
  return request({
    url: "/v2-car-getImageList.html",
    method: "GET",
    params: {
      SerialID: 4908,
      _1563280706100: ""
    }
  });
}