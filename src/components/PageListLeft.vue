<template>
  <div class="left">
    <div class="list"
         @scroll="scroll()">
      <div class="list_left"
           v-for="(item,index) in dataRightList"
           :key="index"
           :ref="item.name">
        <div class="list_lefts">
          <p>{{item.name}}</p>
          <div v-for="(items,index) in item.children"
               :key="index"
               class="list_title"
               @click="detailRight(items.MasterID)">
            <div class="list_img">
              <img :src="items.CoverPhoto"
                   alt />
            </div>
            <div class="list_titles">{{items.Name}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapState, mapActions, mapMutations } from "vuex";
@Component({
  computed: {
    ...mapState({
      dataRightList: (state: any) => state.index.dataLeft
    })
  },
  created() {},
  methods: {
    ...mapActions("index", ["RightList"]),
    ...mapMutations("index", ["flag"]),
    scroll(event) {},
    detailRight(id) {
      let { RightList, flag }: any = this;
      RightList({
        MasterID: id
      });
      flag(true);
      console.log(id);
    }
  },
  updated() {}
})
export default class Home extends Vue {}
</script>
<style lang="scss">
.left {
  width: 100%;
  height: 100%;
  .list {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    .list_left {
      width: 100%;

      .list_lefts {
        width: 100%;
        p {
          width: 100%;
          height: 0.8rem;
          background: #ddd;
          line-height: 0.8rem;
          padding-left: 0.5rem;
          box-sizing: border-box;
          color: #666;
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
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          img {
            width: 65%;
            height: 85%;
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
