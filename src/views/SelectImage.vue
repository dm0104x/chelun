<template>
  <div>
    <div class="right_wrapper">
      <div v-for="(item,index) in SelectImage" :key="index">
        <div>{{item.Name}}</div>
        <div v-for="(items,index) in item.List" :key="index">
          <img :src="items.Url" alt />
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
    return {};
  },
  methods: {
    ...mapActions("index", ["SelectImages"])
  },
  computed: {
    ...mapState({
      SelectImage: (state: any) => state.index.Images
    })
  },
  created() {
    this.SelectImages();
    console.log(this);
  }
});
</script>
<style lang="scss">
</style>