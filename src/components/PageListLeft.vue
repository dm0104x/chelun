<template>
  <div class="left">
    <div class="list">
      <div class="list_left" v-for="(item,index) in dataRightList" :key="index" :id="item.name">
        <div class="list_lefts">
          <p>{{item.name}}</p>
          <div v-for="(item,index) in item.children" :key="index" class="list_title">
            <div class="list_img">
              <img :src="item.CoverPhoto" alt />
            </div>
            <div class="list_titles">{{item.Name}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapState } from "vuex";
export default Vue.extend({
  data() {
    return {};
  },
  computed: {
    ...mapState({
      dataRightList: (state: any) => state.index.dataLeft
    })
  },
  methods: {}
});
</script>

<style lang="scss">
.left {
  width: 100%;
  font-size: 0.3rem;
  .list {
    width: 100%;
    display: flex;
    flex-direction: column;
    .list_left {
      width: 100%;
      .list_lefts {
        width: 100%;
        p {
          width: 100%;
          height: 0.4rem;
          background: #ddd;
          line-height: 0.4rem;
          padding-left: 0.2rem;
          box-sizing: border-box;
        }
      }
      .list_title {
        width: 90%;
        height: 1rem;
        display: flex;
        border-bottom: 0.01rem solid #ddd;
        margin: 0 auto;
        .list_img {
          width: 20%;
          height: 1rem;
          text-align: center;
          line-height: 1.5rem;
          img {
            width: 70%;
            height: 70%;
          }
        }
        .list_titles {
          width: 80%;
          height: 100%;
          line-height: 1rem;
          margin-left: 0.3rem;
        }
      }
    }
  }
}
</style>
