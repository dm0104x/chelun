<template>
  <div id="app">
    <SelectImage />
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import SelectImage from "@/views/SelectImage.vue";
import Home from "@/views/Home.vue";
export default Vue.extend({
  components: {
    SelectImage
  }
});
</script>
