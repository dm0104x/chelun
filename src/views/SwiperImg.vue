<template>
  <div class="boxs">
    <div v-for="(item,index) in SwiperImage.List" :key="index" class="lists">
      <img :src="item.Url.split('{')[0]+'3'+item.Url.split('{')[1].split('}')[1]" alt />
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
      SwiperImage: (state: any) => state.index.SwiperImage
    })
  }
});
</script>
<style lang="scss">
.boxs {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  .lists {
    width: 32%;
    height: 2.7rem;
    margin-right: 0.1rem;
    margin-bottom: 0.06rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>