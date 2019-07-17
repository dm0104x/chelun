<template>
  <div class="wrapper_right" v-if="all" :class="flags===true?'active':'active1'">
    <div class="right">
      <div v-for="(item,index) in rightList" :key="index">
        <p class="title" @click="draw">{{item.GroupName}}</p>
        <div
          v-for="(items,ind) in item.GroupList"
          :key="ind"
          class="dataList"
          @click="idcanvas(items.SerialID)"
        >
          <div class="img">
            <img :src="items.CoverPhoto" :alt="items.AliasName" />
          </div>
          <div class="all">
            <p>{{items.AliasName}}</p>
            <p>{{items.DealerPrice}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { mapState, mapMutations } from "vuex";
export default Vue.extend({
  computed: {
    ...mapState({
      flags: (state: any) => state.index.flags,
      all: (state: any) => state.index.all,
      rightList: (state: any) => state.index.rightList
    })
  },
  methods: {
    ...mapMutations("index", ["flag"]),
    draw() {
      console.log(this);
      let { flag }: any = this;
      flag(false);
    },
    idcanvas(id: number) {
      this.$router.push({ path: `/car?id=${id}` });
    }
  }
});
</script>

<style lang="scss">
.wrapper_right {
  width: 70%;
  height: 100%;
  position: fixed;
  top: 0;
  border-left: 0.001rem solid #666;
  background: #fff;
  overflow-y: scroll;
}
.active {
  animation: identifier 0.5s;
  right: 0;
}
@keyframes identifier {
  0% {
    right: -70%;
  }
  100% {
    right: 0;
  }
}
.active1 {
  animation: identifiers 0.5s;
  right: -70%;
}
@keyframes identifiers {
  0% {
    right: 0;
  }
  100% {
    right: -70%;
  }
}
.title {
  width: 100%;
  height: 0.5rem;
  line-height: 0.5rem;
  padding-left: 0.1rem;
  background: pink;
  color: #666;
  box-sizing: border-box;
}
.dataList {
  width: 100%;
  height: 1.5rem;
  padding: 0.1rem;
  box-sizing: border-box;
  border-bottom: 1px solid #ccc;
  display: flex;
  .img {
    height: 100%;
    width: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .all {
    flex: 1;

    > p {
      margin-left: 0.2rem;
      line-height: 0.5rem;
      color: #666;
    }
  }
  img {
    width: 100%;
    height: 90%;
  }
}
</style>


