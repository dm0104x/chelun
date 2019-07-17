<template>
  <div class="wrapper_items">
    <div class="wrap_cont_t">
      <span v-for="(item,ind) in arrList"
            :class="index==ind?'topactive':null"
            @click="topIndex(ind)">{{item}}</span>
    </div>
    <template v-for="(item,ind) in rightdetail.list">
      <div v-if="arrList[index]==item.market_attribute.year">
        <p class="Information">{{item.exhaust_str}}/{{item.max_power_str}} {{item.inhale_type}}</p>
        <div class="coents_items"
             @click="replace(item.car_id)">
          <div>
            <p>{{item.market_attribute.year}} {{item.car_name}}</p>
            <p>{{item.horse_power}}马力{{item.gear_num}}挡{{item.trans_type}}</p>
          </div>
          <div>
            <p>{{item.market_attribute.dealer_price_min?item.market_attribute.dealer_price_min:'暂无'}}</p>
            <p>指导价 {{item.market_attribute.dealer_price_max}}</p>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { mapState, mapActions } from "vuex";
export default Vue.extend({
  computed: {
    ...mapState({
      rightdetail: (state: any) => state.index.rightdetail,
      arrList: (state: any) => {
        let arr = state.index.rightdetail;
        let arrs: any = [];
        arrs =
          arr &&
          arr.list.map((el: any) => {
            return el.market_attribute.year;
          });
        arrs = [...new Set(arrs)];
        arrs.sort((a: any, b: any) => {
          return b - a;
        });
        return arrs;
      }
    })
  },
  data() {
    return {
      index: 0
    };
  },
  methods: {
    ...mapActions("index", ["personalFn"]),
    topIndex(index: any) {
      this.index = index;
    },
    replace(id: any) {
      this.personalFn({
        carId: id,
        cityId: this.$route.query.address
      }).then((res: any) => {
        console.log(res);
        if (res.code === 1) {
          this.$router.back(-1);
        }
      });
    }
  }
});
</script>

<style lang="scss">
.wrapper_items {
  width: 100%;
  height: 100%;
  background: #eee;
  overflow-y: auto;
}
.coents_items {
  width: 100%;
  height: 1.2rem;
  display: flex;
  background: #fff;
  padding: 0.2rem 0.1rem;
  box-sizing: border-box;
  > div {
    &:first-child {
      width: 70%;
      height: 100%;

      p {
        &:last-child {
          color: #ccc;
          font-size: 0.2rem;
        }
      }
    }
    &:last-child {
      flex: 1;
      text-align: right;
      p {
        &:first-child {
          color: red;
        }

        &:last-child {
          font-size: 0.2rem;
        }
      }
    }
    p {
      line-height: 0.5rem;
    }
  }
}
.Information {
  width: 100%;
  height: 0.5rem;
  line-height: 0.5rem;
  color: #666;
  padding-left: 0.2rem;
  box-sizing: border-box;
  background: #f4f4f4;
}
</style>


