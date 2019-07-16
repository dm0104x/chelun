<template>
  <div class="warpper">
    <header>可向多个商家咨询最低价，商家及时回复</header>
    <div class="content_wrapper">
      <div class="content_topImgs">
        <img :src="personalobj.details.serial.CoverPhoto"
             :alt="personalobj.details.serial.AliasName">
        <div class="content_itemsA">
          <p>{{personalobj.details.serial.AliasName}}</p>
          <p>{{personalobj.details.market_attribute.year}}年{{personalobj.details.car_name}}</p>
        </div>
      </div>
      <p class="Information">个人信息</p>
      <div class="information_tab">
        <p><span>姓名</span><input type="text"></p>
        <p><span>手机</span><input type="text"></p>
        <p><span>城市</span>
          <div></div>
        </p>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { mapState, mapActions } from "vuex";
export default Vue.extend({
  computed: {
    ...mapState({
      personalobj: (state: any) => state.index.personalObj
    })
  },
  methods:{
    
  }
});
</script>

<style lang="scss">
.warpper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #f4f4f4;
  header {
    width: 100%;
    height: 0.6rem;
    line-height: 0.6rem;
    text-align: center;
    background: #79cd92;
    color: #fff;
  }
  .content_wrapper {
    flex: 1;
  }
}
.content_topImgs {
  background: #fff;
  padding: 0.32rem 0.18rem 0.24rem;
  height: 2rem;
  box-sizing: border-box;
  display: flex;
  > img {
    width: 2.3rem;
    height: 1.41rem;
    border: 1px solid #eee;
    box-sizing: border-box;
    border-radius: 5px;
  }
  .content_itemsA {
    font-size: 0.32rem;
    padding-left: 0.1rem;
    box-sizing: border-box;
    p {
      line-height: 0.7rem;
      font-size: 0.35rem;
      font-weight: 500;
    }
  }
}
.Information {
  width: 100%;
  height: 0.5rem;
  line-height: 0.5rem;
  color: #666;
  padding-left: 0.2rem;
  box-sizing: border-box;
}
</style>

