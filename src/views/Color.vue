<template>
  <div class="boxs">
    <div class="allColor">全部颜色</div>
    <div class="nav_lists">
      <div
        v-for="(item,key,index) in Vehiclecolor"
        :key="index"
        :class="index===ind?'navactive':null"
        @click="button(index)"
      >{{key}}</div>
    </div>
    <div
      v-if="index === ind"
      v-for="(item,key,index) in Vehiclecolor"
      :key="index"
      class="list_color"
    >
      <div class="nav" v-for="(items,i) in item" :key="i">
        <div class="navs" @click="btn(items.ColorId)">
          <div :style="{'background':items.Value}" class="Value"></div>
          <p>{{items.Name}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapState, mapActions } from "vuex";
export default Vue.extend({
  data() {
    return {
      ind: 0
    };
  },
  created() {
    let { Vehiclecolors } = this;
    Vehiclecolors(this.$route.query.id);
  },
  methods: {
    ...mapActions("index", ["Vehiclecolors"]),
    button(ind: any) {
      this.ind = ind;
    },
    btn(item: any) {
      this.$router.push({
        path: `/SelectImage?id=${this.$route.query.id}&ColorID=${item}`
      });
    }
  },
  computed: {
    ...mapState({
      Vehiclecolor: (state: any) => state.index.Vehiclecolor,
      chooseTheColor: (state: any) => state.index.chooseTheColor,
    })
  }
});
</script>
<style lang="scss">
.boxs {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #eee;
  .allColor {
    width: 100%;
    height: 0.8rem;
    text-align: center;
    line-height: 0.8rem;
    margin: 0.15rem 0;
    color: #00afff;
    font-weight: 500;
    font-size: 0.34rem;
    background: #fff;
    overflow-y: auto;
  }
  .nav_lists {
    width: 100%;
    height: 0.8rem;
    font-size: 0.3rem;
    align-items: center;
    display: flex;
    background: #fff;
    margin-left: 0;
    > div {
      flex: 1;
      text-align: center;
    }
  }
  .list_color {
    display: flex;
    flex-wrap: wrap;
    background: #fff;
    margin-top: 0.15rem;
    .nav {
      width: 45%;
      margin: 0 0.1rem;
      .navs {
        height: 0.7rem;
        border: 0.02rem solid #00afff;
        border-radius: 0.1rem;
        display: flex;
        margin: 0.1rem 0.2rem;
        align-items: center;
        width: 100%;
        .Value {
          width: 0.5rem;
          height: 0.5rem;
          margin: 0 0.05rem 0 0.3rem;
        }
      }
    }
  }
  .navactive {
    color: #00afff;
  }
}
</style>