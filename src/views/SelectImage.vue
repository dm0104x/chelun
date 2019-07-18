<template>
  <div class="box">
    <div class="flex-row">
      <div @click="btn(rightdetails.SerialID)">全部颜色</div>
      <div @click="indexB">车款</div>
    </div>
    <div v-for="(item,index) in SelectImage" :key="index" class="list">
      <div class="list_title" @click="button(rightdetails.SerialID)">
        <div>{{item.Name}}</div>
        <div>{{item.Count}}张图片</div>
      </div>
      <div v-for="(items,index) in item.List" :key="index" id="list_Img">
        <img
          :src="items.Url.split('{')[0]+'3'+items.Url.split('{')[1].split('}')[1]"
          :alt="items.Url"
        />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapState, mapActions } from "vuex";
export default Vue.extend({
  data() {
    return {};
  },
  created() {
    let { SelectImages} = this;
    SelectImages(this.$route.query.id);
  },
  methods: {
    ...mapActions("index", ["SelectImages"]),
    button(id: number) {
      this.$router.push({ path: `/SwiperImg?id=${id}` });
    },
    btn(id: number) {
      this.$router.push({ path: `/Color?id=${id}` });
    },
    indexB() {
      this.$router.push({
        path: `/type`
      });
    }
  },
  computed: {
    ...mapState({
      SelectImage: (state: any) => state.index.Images,
      rightdetails: (state: any) => state.index.rightdetail,
      chooseTheColor: (state: any) => state.index.chooseTheColor,
      getModelImageYearColor: (state: any) => state.index.getModelImageYearColor,
      Vehiclecolor: (state: any) => state.index.Vehiclecolor
    })
  }
});
</script>
<style lang="scss">
.box {
  width: 100%;
  .flex-row {
    width: 100%;
    height: 0.88rem;
    display: flex;
    text-align: center;
    line-height: 0.88rem;
    div {
      width: 50%;
      font-size: 0.3rem;
    }
  }
  .list {
    width: 100%;
    height: 4.92rem;
    display: flex;
    flex-wrap: wrap;
    position: relative;
    .list_title {
      width: 32%;
      height: 48%;
      position: absolute;
      left: 0;
      top: 0;
      text-align: center;
      line-height: 0.9rem;
      color: aliceblue;
      background: rgba(56, 90, 130, 0.5);
      div {
        font-size: 0.4rem;
        font-weight: 555;
      }
    }
    #list_Img {
      width: 32%;
      height: 48%;
      margin-right: 0.1rem;
      margin-bottom: 0.06rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>