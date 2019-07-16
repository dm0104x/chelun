<template>
  <div class="about">
    <div class="content"
         v-if="rightdetail">
      <!-- 头部图片 -->
      <div class="imgTops">
        <img :src="rightdetail.CoverPhoto"
             :alt="rightdetail.AliasName">
        <span class="page">{{rightdetail.pic_group_count}}张照片</span>
      </div>
      <div class="content_price">
        <div class="price"
             v-if="rightdetail.market_attribute">
          <p>{{rightdetail.market_attribute['dealer_price']}}</p>
          <p>指导价{{rightdetail.market_attribute.official_refer_price}}</p>
        </div>
        <div class="btn">
          <span @click="carId(rightdetail.list[0].car_id)">询问底价</span>
        </div>
      </div>
      <div class="stips">
        <div class="wrap_cont_t">
          <span v-for="(item,ind) in arrList"
                :class="index==ind?'topactive':null"
                @click="topIndex(ind)">{{item}}</span>
        </div>
        <template v-for="(item,ind) in rightdetail.list">
          <div v-if="arrList[index]==item.market_attribute.year">
            <div class="wrap_cont_engine">
              <p>{{item.exhaust_str}}/{{item.max_power_str}} {{item.inhale_type}}</p>
            </div>
            <div class="wrap_cont_versions">
              <div class="wrap_cont_versions_title">{{item.market_attribute.year}} {{item.car_name}}</div>
              <div class="wrap_cont_versions_cont">{{item.horse_power}}马力{{item.gear_num}}挡{{item.trans_type}}</div>
              <div class="wrap_cont_versions_price">
                <div class="wrap_cont_versions_price_left"></div>
                <div class="wrap_cont_versions_price_right">
                  <div class="wrap_cont_versions_price_right_l">指导价 {{item.market_attribute.dealer_price_max}}</div>
                  <div class="wrap_cont_versions_price_right_r">{{item.market_attribute.dealer_price_min}}起</div>
                </div>
              </div>
              <div class="wrap_cont_versions_inquiry"
                   @click="carId(item.car_id)">询问低价</div>
            </div>
          </div>
          <div v-if="arrList[index]=='全部'">
            <div class="wrap_cont_engine">
              <p>{{item.exhaust_str}}/{{item.max_power_str}} {{item.inhale_type}}</p>
            </div>
            <div class="wrap_cont_versions">
              <div class="wrap_cont_versions_title">{{item.market_attribute.year}} {{item.car_name}}</div>
              <div class="wrap_cont_versions_cont">{{item.horse_power}}马力{{item.gear_num}}挡{{item.trans_type}}</div>
              <div class="wrap_cont_versions_price">
                <div class="wrap_cont_versions_price_left"></div>
                <div class="wrap_cont_versions_price_right">
                  <div class="wrap_cont_versions_price_right_l">指导价 {{item.market_attribute.dealer_price_max}}</div>
                  <div class="wrap_cont_versions_price_right_r">{{item.market_attribute.dealer_price_min}}起</div>
                </div>
              </div>
              <div class="wrap_cont_versions_inquiry"
                   @click="carId(item.car_id)">询问低价</div>
            </div>
          </div>
        </template>
      </div>
    </div>
    <div class="bottom"
         @click="carId(rightdetail.list[0].car_id)">
      <p>询问底价</p>
      <p>本地经销商为你报价</p>
    </div>
  </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { mapState, mapActions } from "vuex";
export default Vue.extend({
  data() {
    return {
      topList: [""],
      index: 0
    };
  },
  created() {
    let { Rightdetail } = this;
    Rightdetail({
      SerialID: this.$route.query.id
    });
    console.log(this);
  },
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
        arrs.unshift("全部");
        arrs = [...new Set(arrs)];

        arrs.sort((a: any, b: any) => {
          return b - a;
        });
        return arrs;
      }
    })
  },
  methods: {
    ...mapActions("index", ["Rightdetail", "regionid", "personalFn"]),
    topIndex(ind: any) {
      this.index = ind;
    },
    carId(id: any) {
      this.regionid().then((res: any) => {
        this.personalFn({
          carId: id,
          cityId: res.data.CityID
        }).then((re: any) => {
          if (re.code == 1) {
            this.$router.push({ path: `/personal` });
          }
        });
      });
    }
  }
});
</script>

<style lang="scss">
.about {
  width: 100%;
  height: 100%;
  background: #f4f4f4;
}
.bottom {
  position: fixed;
  width: 100%;
  bottom: 0;
  z-index: 99;
  background: #3aacff;
  height: 1rem;
  color: #fff;
  text-align: center;
}
.imgTops {
  width: 100%;
  height: 4rem;
  position: relative;
  overflow: hidden;
  > img {
    width: 100%;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    position: absolute;
  }
  .page {
    padding: 0.05rem 0.2rem;
    background: rgba($color: #000000, $alpha: 0.8);
    color: #fff;
    position: absolute;
    z-index: 999;
    bottom: 0.3rem;
    right: 0.5rem;
    border-radius: 0.3rem;
  }
}
.content_price {
  width: 100%;
  padding: 0.36rem 0.2rem 0.3rem;
  box-sizing: border-box;
  background: #fff;
  display: flex;

  .price {
    width: 45%;
    p {
      font-weight: 400;

      &:first-child {
        font-size: 0.36rem;
        color: red;
        font-weight: 500;
      }

      &:nth-child(2) {
        font-size: 0.28rem;
        color: #ccc;
      }
    }
  }
  .btn {
    flex: 1;
    padding: 0.05rem 0;
    box-sizing: border-box;
    span {
      display: flex;
      width: 100%;
      height: 100%;
      align-items: center;
      justify-content: center;
      background: #3aacff;
      border-radius: 0.15rem;
      color: #fff;
      font-size: 0.32rem;
    }
  }
}
.wrap_cont_t {
  width: 100%;
  height: 38px;
  display: flex;
  align-items: center;
  background: #fff;
  margin-top: 0.2rem;
  span {
    font-size: 16px;
    margin: 0 10px;
  }
}
.wrap_cont_engine {
  width: 100%;
  height: 25px;
  line-height: 25px;
  font-size: 12px;
  p {
    margin-left: 3%;
    color: #999;
  }
}
.wrap_cont_versions {
  width: 100%;
  height: 127px;
  background: #fff;
}
.wrap_cont_versions_title {
  width: 94%;
  padding: 6px 0;
  margin-left: 3%;
  font-size: 15px;
  color: #555;
}
.wrap_cont_versions_cont {
  width: 94%;
  margin-left: 3%;
  font-size: 12px;
  color: #ccc;
}
.wrap_cont_versions_price {
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
}
.wrap_cont_versions_price_right {
  width: 50%;
  display: flex;
  align-items: center;
  .wrap_cont_versions_price_right_l {
    font-size: 12px;
    color: #999;
    margin-right: 6px;
    text-align: right;
  }
  .wrap_cont_versions_price_right_r {
    color: red;
    text-align: right;
  }
}
.wrap_cont_versions_inquiry {
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border-top: 1px solid #f0f0f0;
  color: #00afff;
}
.wrap_offers {
  width: 100%;
  height: 50px;
  background: #00afff;
  color: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  text-align: center;
  .wrap_offer_floor {
    padding-top: 6px;
  }
  .wrap_offer_floor_title {
    font-size: 12px;
  }
}
.stips {
  margin-bottom: 1rem;
}
.topactive {
  color: blue;
}
</style>


