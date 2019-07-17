import request from '../utils/request'
//获取首页数据
export function homePageList() {
  return request({
    url: "/v2-car-getMasterBrandList.html",
    method: "GET",
    params: {
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
  })
}
//获取右边列表数据
export function RightList(options: any) {
    return request({
      url: "/v2-car-getMakeListByMasterBrandId.html",
      method: "GET",
      params: options
    });
  }

  //获取详情数据
  export function RightDetail(options: any) {
    return request({
      url: "/v2-car-getInfoAndListById.html",
      method: "GET",
      params: options
    });
  }

  //地区id
  export function regionId(options: any) {
    return request({
      url: "/location-client.html",
      method: "GET",
      params: options
    });
  }

  //获取个人详情数据
  export function personal(options: any) {
    return request({
      url: "/v2-dealer-alllist.html",
      method: "GET",
      params: options
    });
  }