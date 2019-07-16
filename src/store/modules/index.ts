import { homePageList, SelectImage } from '../../server/user'
const state = {
  dataRight: [],
  dataLeft: [],
  Images: []
}

const actions = {
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
    commit("pageListLeft", [...new Set(top)])
  },
  async SelectImages({ commit }: any, options: any) {
    let Images = await SelectImage(options)
    commit("SelectImagess", Images.data)
  }
}
const mutations = {
  pageListRight(state: any, options: any) {
    state.dataRight = options
  },
  pageListLeft(state: any, options: any) {
    state.dataLeft = options
  },
  SelectImagess(state: any, options: any) {
    state.Images = options
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}