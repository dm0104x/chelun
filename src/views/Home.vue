<template>
  <div class="home">
    <PageListLeft />
    <PageListRight />
  </div>
</template>

</script>
<script lang="ts">
import Vue from "vue";
import PageListRight from "@/components/PageListRight.vue";
import PageListLeft from "@/components/PageListLeft.vue";
import { mapActions } from "vuex";
export default Vue.extend({
  data() {
    return {};
  },
  created() {
    this.pageList();
  },
  components: {
    PageListRight,
    PageListLeft
  },
  methods: {
    ...mapActions("index", ["pageList"])
  }
});
</script>
<style lang="scss">
@import "../scss/global.scss";
@import "../scss/reset.scss";
.home {
  background-color: $page-background-color;
  height: 100%;
}
</style>
