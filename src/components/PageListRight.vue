<template>
  <div>
    <div class="right_wrapper" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd">
      <div v-for="(item,index) in dataRightList" :key="index">{{item}}</div>
    </div>
    <span v-if="isTouch" class="letter">{{current}}</span>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";
export default Vue.extend({
  data() {
    return {
      current: "",
      isTouch: false
    };
  },
  computed: {
    ...mapState({
      dataRightList: (state: any) => state.index.dataRight
    })
  },
  created() {
    console.log(this);
  },
  methods: {
    touchStart(e: Event): void {
      let pageY = e.touches[0].pageY;
      let letterHeight = ((0.4 * window.innerWidth) / 750) * 100;
      let letterOffsetTop =
        (window.innerHeight - letterHeight * this.dataRightList.length) / 2;
      let letterIndex = Math.floor((pageY - letterOffsetTop) / letterHeight);
      this.current = this.dataRightList[letterIndex];
      this.isTouch = true;
    },
    touchMove(e: Event): void {
      let pageY = e.touches[0].pageY;
      let letterHeight = ((0.4 * window.innerWidth) / 750) * 100;
      let letterOffsetTop =
        (window.innerHeight - letterHeight * this.dataRightList.length) / 2;
      let letterIndex = Math.floor((pageY - letterOffsetTop) / letterHeight);
      // 处理上边界
      if (letterIndex < 0) {
        letterIndex = 0;
      }
      // 处理下边界
      if (letterIndex > this.dataRightList.length - 1) {
        letterIndex = this.dataRightList.length - 1;
      }
      this.current = this.dataRightList[letterIndex];
    },
    touchEnd(e: Event): void {
      this.isTouch = false;
      this.current = "";
    }
  }
});
</script>
<style lang="scss">
.right_wrapper {
  width: 0.5rem;
  height: 100%;
  color: #666;
  font-weight: 500;
  font-size: 0.3rem;
  position: fixed;
  display: flex;
  justify-content: center;
  flex-direction: column;
  top: 0;
  right: 0;
  z-index: 101;
  div {
    text-align: center;
    padding: 0.01rem 0;
  }
}
.letter {
  display: inline-block;
  width: 1.6rem;
  height: 1.6rem;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 0.1rem;
  top: 50%;
  left: 50%;
  position: fixed;
  color: #fff;
  font-size: 0.8rem;
  text-align: center;
  line-height: 1.6rem;
  transform: translate3d(-50%, -50%, 0);
}
</style>
