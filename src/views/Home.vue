<template>
  <div class="home">
    <PageListLeft  :current="current" />
    <PageListRight  :current.sync="current" />
    <RightDetail />
  </div>
</template>

</script>
<script lang="ts">
import { Vue } from "vue-property-decorator"; // @ is an alias to /src
import PageListRight from "@/components/PageListRight.vue"; // @ is an alias to /src
import PageListLeft from "@/components/PageListLeft.vue"; // @ is an alias to /src
import RightDetail from "@/components/RightDetail.vue"; // @ is an alias to /src
import { mapActions } from "vuex";
export default Vue.extend({
  data() {
    return {
      current:''
    };
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
@import "../scss/global.scss";
@import "../scss/reset.scss";
.home {
  background-color: $page-background-color;
  height: 100%;
}
</style>


