<template>
  <div class="box">
    <div v-for="(item,index) in SwiperImage" :key="index" class="list">
      <!-- <div class="list_title">
        <div>{{item.Name}}</div>
        <div>{{item.Count}}张图片</div>
      </div>
      <div
        v-for="(items,index) in item.List"
        :key="index"
        id="list_Img"
        :class="index===0?'rgba':''"
      >
        <img
          :src="items.Url.split('{')[0]+'3'+items.Url.split('{')[1].split('}')[1]"
          :alt="items.Url"
        />
      </div>-->
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
    let { SwiperImages } = this;
    SwiperImages(this.$route.query.id);
  },
  methods: {
    ...mapActions("index", ["SwiperImages"])
  },
  computed: {
    ...mapState({
      SwiperImage: (state: any) => state.index.Swiper
    })
  }
});
</script>
<style lang="scss">
.box {
  width: 100%;
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
      div {
        font-size: 0.4rem;
        font-weight: 555;
      }
    }
    .rgba {
      background: rgba(56, 90, 130, 0.5);
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