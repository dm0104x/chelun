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
//进入图片页面
export function SelectImage(options:any) {
  return request({
    url: "/v2-car-getImageList.html",
    method: "GET",
    params: {
      SerialID: options,
      _1563280706100: ""
    }
  })
}
//进入选择颜色岩棉
export function getModelImageYearColor(options:any) {
  return request({
    url: "/v2-car-getModelImageYearColor.html",
    method: "GET",
    params: {
      SerialID: options,
      _1563437330946:""
    }
  })
}
//进入Swiper页面
export function SwiperImage(options:any) {
  return request({
    url: "/v2-car-getCategoryImageList.html",
    method: "GET",
    params: {
      SerialID: options,
      ImageID:6,
      Page:1,
      PageSize:30
    }
  })
}
//选择车辆颜色
export function Vehiclecolor(options:any) {
  return request({
    url: "/v2-car-getModelImageYearColor.html",
    method: "GET",
    params: {
      SerialID: options,
      _1563437330946:""
    }
  })
}
//
export function chooseTheColor(params:any) {
  console.log(params)
  return request({
    url: "/v2-car-getImageList.html",
    method: "GET",
    params
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

//获取地区列表数据
export function addressListFn(options: any) {
  return request({
    url: "/v1-city-alllist.html",
    method: "GET",
    params: options
  });
}
