<template>
  <div>
    <div class="right_wrapper">
      <div v-for="(item,index) in dataRightList"
           :key="index"
           @click="touch(item)">{{item}}
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";
export default Vue.extend({
  computed: {
    ...mapState({
      dataRightList: (state: any) => state.index.dataRight
    })
  },
  created() {
    console.log(this);
  },
  methods: {
    touch(id: any) {
      console.log(this, id);
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
  font-size: 0.24rem;
  position: fixed;
  top: 25%;
  right: 0;
  div {
    text-align: center;
    padding: 0.01rem 0;
  }
}
</style>

