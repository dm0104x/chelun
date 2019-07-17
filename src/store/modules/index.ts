import { homePageList, RightList, RightDetail, regionId, personal, addressListFn } from '../../server/user'
const state = {
  dataRight: [],
  dataLeft: [],
  flags: false,
  all: false,
  rightList: [],
  rightdetail: {},
  personalObj: {},
  regionidObj: {},
  addressListArr: [],
  addressShi: []
}
const actions = {
  // 首页列表数据
  async pageList({ commit }: any, options: void) {
    let data = await homePageList();
    let arr: any[] = [];
    let top: any[] = []
    data.data.forEach((element: any) => {
      arr.push(element.Spelling.slice(0, 1))
    });
    [... new Set(arr)].forEach((el: number) => {
      top.push({
        name: el,
        children: []
      })
    })
    data.data.forEach((element: any) => {
      top.forEach(el => {
        if (el.name == element.Spelling.slice(0, 1)) {
          el.children.push(element)
        }
      })
    });
    arr.unshift("#")
    commit("pageListRight", [...new Set(arr)])
    commit("pageListLeft", top)
  },
  // 右边列表数据
  async RightList({ commit }: any, options: void) {
    let data = await RightList(options)
    commit('right', data.data)
  },
  // 详情页面数据
  async Rightdetail({ commit }: any, options: void) {
    let data = await RightDetail(options)
    commit('rightDetail', data.data)
  },
  //地区id
  async regionid({ commit }: any, options: void) {
    let data = await regionId(options)
    commit('regionidfn', data.data)
    return data;
  },
  //个人页面详情数据
  async personalFn({ commit }: any, options: void) {
    let data = await personal(options)
    commit('personalfn', data.data)
    return data;
  },
  //地区列表数据
  async addressFn({ commit }: any, options: any) {
    let data = await addressListFn(options)
    if (options) {
      commit('addressfn', data.data)
    } else {
      commit('addressfn1', data.data)
    }

  }
}

const mutations = {
  pageListRight(state: any, options: any) {
    state.dataRight = options
  },
  pageListLeft(state: any, options: any) {
    state.dataLeft = options
  },
  flag(state: any, options: any) {
    state.flags = options
    state.all = true
  },
  right(state: any, options: any) {
    state.rightList = options
  },
  rightDetail(state: any, options: any) {
    state.rightdetail = options
  },
  personalfn(state: any, options: any) {
    state.personalObj = options
  },
  regionidfn(state: any, options: any) {
    state.regionidObj = options
  },
  addressfn(state: any, options: any) {
    state.addressShi = options
  },
  addressfn1(state: any, options: any) {
    state.addressListArr = options
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}