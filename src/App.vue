<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Home from "@/views/Home.vue";
export default Vue.extend({
  components: {
    Home
  }
});
</script>

<style lang="scss">
body,
html {
  width: 100%;
  height: 100%;
}
div {
  font-size: 14px;
}
* {
  margin: 0;
  padding: 0;
}
</style>
