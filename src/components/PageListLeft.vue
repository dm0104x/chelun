<template>
  <div class="brand-list"
       ref="scrollEle">
    <div v-for="(item, index) in dataRightList"
         :key="index">
      <p class="brand"
         :ref="item.name">{{item.name}}</p>
      <ul>
        <li v-for="(value) in item.children"
            :key="value.MasterID"
            class="border-bottom"
            @click="detailRight(value.MasterID)">
          <img :src="value.CoverPhoto"
               :alt="value.Name" />
          <span>{{value.Name}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapState, mapActions, mapMutations } from "vuex";
export default Vue.extend({
  computed: {
    ...mapState({
      dataRightList: (state: any) => state.index.dataLeft
    })
  },
  props: {
    data: {
      type: Object,
      value: {}
    },
    current: {
      type: String,
      value: ""
    }
  },
  watch: {
    current(val) {
      if (val) {
        console.log(val);
        // this.$refs.scrollEle.scrollTop = 1000;
        // console.log(this.$refs[val][0].offsetTop);
        this.$refs.scrollEle.scrollTop = this.$refs[val][0].offsetTop;
        // console.log(this.$refs.scrollEle.scrollTop);
      }
    }
  },
  created() {},
  methods: {
    ...mapActions("index", ["RightList"]),
    ...mapMutations("index", ["flag"]),
    detailRight(id: any) {
      let { RightList, flag }: any = this;
      RightList({
        MasterID: id
      });
      flag(true);
    }
  },
  updated() {}
});
</script>
<style lang="scss">
@import "../scss/global.scss";
.brand-list {
  height: 100%;
  overflow-y: scroll;
}
.brand {
  font-size: 0.28rem;
  line-height: 0.4rem;
  padding-left: 0.3rem;
  color: #aaa;
}
ul {
  padding: 0 0.3rem;
  background: #fff;
}
li {
  height: $brand-height;
  line-height: $brand-height;
  display: flex;
  align-items: center;
  img {
    height: 0.8rem;
  }
  span {
    font-size: 0.32rem;
    margin-left: 0.4rem;
  }
  &:last-child:after {
    display: none;
  }
}
</style>
