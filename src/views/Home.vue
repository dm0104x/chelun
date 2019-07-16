<template>
  <div class="home">
    <PageListLeft />
    <PageListRight />
    <RightDetail />
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator"; // @ is an alias to /src
import PageListRight from "@/components/PageListRight.vue"; // @ is an alias to /src
import PageListLeft from "@/components/PageListLeft.vue"; // @ is an alias to /src
import RightDetail from "@/components/RightDetail.vue"; // @ is an alias to /src
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
    RightDetail,
    PageListLeft
  },
  methods: {
    ...mapActions("index", ["pageList"])
  }
});
</script>
<style lang="scss">
.home,
#app {
  width: 100%;
  height: 100%;
}
</style>


