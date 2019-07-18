<template>
  <div class="loadswiper"
       v-if="flag">
    <div class="swiper-container swiperTop">
      <div class="swiper-wrapper">
        <div class="swiper-slide"><img class="swiper-lazy"
               src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563462388367&di=f819eb5bf19966b56ead6195b104954b&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F014c8d554441400000019ae9de6b6a.jpg"
               data-src="http://img3.bitautoimg.com/autoalbum/files/20180212/906/201802121511451145159178_5849858_3.jpg"
               alt=""></div>
        <div class="swiper-slide"><img class="swiper-lazy"
               src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563462388367&di=f819eb5bf19966b56ead6195b104954b&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F014c8d554441400000019ae9de6b6a.jpg"
               data-src="http://img3.bitautoimg.com/autoalbum/files/20180212/906/201802121511451145159178_5849858_3.jpg"
               alt=""></div>
        <div class="swiper-slide"><img class="swiper-lazy"
               src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563462388367&di=f819eb5bf19966b56ead6195b104954b&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F014c8d554441400000019ae9de6b6a.jpg"
               data-src="http://img3.bitautoimg.com/autoalbum/files/20180212/906/201802121511451145159178_5849858_3.jpg"
               alt=""></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Swiper from "swiper";
export default Vue.extend({
  data() {
    return {};
  },
  props: ["flag"],
  mounted() {
    let that: any = this;
    let mySwiper = new Swiper(".swiper-container", {
      lazy: true,
      on: {
        slideChangeTransitionEnd: function(swiper: any) {
          console.log(this.activeIndex);
        }
      }
    });

    this.$nextTick(function() {
      console.log(this);
      this.swiper();
    });
  },
  methods: {
    swiper() {}
  }
});
</script>

<style lang="scss">
.loadswiper {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: #000;
  .swiperTop {
    margin: 5rem auto;
  }
}

.swiper-container {
  width: 100%;
  height: 300px;

  img {
    width: 100%;
    height: 100%;
  }
}
</style>


