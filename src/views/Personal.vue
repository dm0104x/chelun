<template>
  <div class="warpper">
    <header>可向多个商家咨询最低价，商家及时回复</header>
    <div class="content_wrapper"
         @scroll="scrollTop">
      <div class="content_topImgs"
           @click="indexB">
        <img :src="personalobj.details.serial.CoverPhoto"
             :alt="personalobj.details.serial.AliasName">
        <div class="content_itemsA">
          <p>{{personalobj.details.serial.AliasName}}</p>
          <p>{{personalobj.details.market_attribute.year}}年{{personalobj.details.car_name}}</p>
        </div>
      </div>
      <p class="Information">个人信息</p>
      <div class="information_tab">
        <p><span>姓名</span><input type="text"
                 v-model="name"
                 placeholder="请输入你的姓名"></p>
        <p><span>手机</span><input type="text"
                 v-model="phone"
                 placeholder="请输入你的手机"></p>
        <p><span>城市</span>
          <span @click="address"
                class="spans">{{item}} </span>
        </p>
        <div class="btns">
          <button class="btn"
                  @click="over">询问最低报价</button>
        </div>
      </div>
      <p class="Information">选择报价经销商</p>
      <ul class="ulist"
          v-if="personalobj">
        <li v-for="(item,i) in personalobj.list"
            :key="i"
            @click="changeaddress(item.dealerId)">
          <label :for="i">
            <div>
              <input type="checkbox"
                     :id="i">
            </div>
            <div class="topLists">
              <p>{{item.dealerShortName}}</p>
              <p>{{item.address}}</p>
            </div>
            <div class="topLists right">
              <p>{{item.promotePrice}}万</p>
              <p>售{{item.saleRange}}</p>
            </div>
          </label>
        </li>
      </ul>
    </div>
    <!-- 地址区域 -->
    <div class="Address"
         v-if="isShow"
         :class="flag?'addressActive':'addressActive1'">
      <p class="Information">自动定位</p>
      <p class="addressList"
         @click="hide(regionidObj.CityName,regionidObj.CityID)">{{regionidObj.CityName}}</p>
      <p class="Information">省市</p>
      <div class="toaddre">
        <ul>
          <li class="addressList1"
              v-for="(item,i) in addressListArr"
              @click="addressA(item.CityID)">{{item.CityName}}</li>
        </ul>
        <div class="chidren"
             :class="top?'active':'active1'"
             v-if="istop">
          <div class="rgba"
               @click="istopHide">

          </div>
          <div class="chidrenList">
            <ul>
              <li class="addressList"
                  v-for="(item,i) in addressShi"
                  @click="hide(item.CityName,item.CityID)">{{item.CityName}}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <footer v-if="isFooterShow"><button data-hover="hover">询最低价</button></footer>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { mapState, mapActions } from "vuex";
export default Vue.extend({
  data() {
    return {
      flag: false,
      isShow: false,
      item: "",
      istop: false,
      top: false,
      name: "",
      phone: "",
      masg: [],
      isFooterShow: false,
      addressId: ""
    };
  },
  computed: {
    ...mapState({
      personalobj: (state: any) => state.index.personalObj,
      regionidObj: (state: any) => state.index.regionidObj,
      addressListArr: (state: any) => state.index.addressListArr,
      addressShi: (state: any) => state.index.addressShi
    })
  },
  created() {
    this.item = this.regionidObj.CityName;
    this.addressId = this.regionidObj.CityID;
  },
  methods: {
    ...mapActions("index", ["addressFn", "personalFn"]),
    address() {
      this.flag = true;
      this.isShow = true;
      this.addressFn();
      console.log(this);
    },
    hide(item: any, id: any) {
      this.flag = false;
      this.istop = false;
      this.top = false;
      this.item = item;
      this.addressId = id;
      this.personalFn({
        carId: this.personalobj.details.car_id,
        cityId: id
      });
    },
    addressA(id: any) {
      this.top = true;
      this.istop = true;
      this.addressFn({
        provinceid: id
      });
    },
    istopHide() {
      this.top = false;
    },
    changeaddress(id: any) {
      console.log(1111);
      // let { masg }: any = this;
      // if (masg.indexOf(id) === -1) {
      //   masg.push(id);
      //   console.log(masg, 111111);
      // }
      // console.log(masg);
      // this.masg = masg;
    },
    //点击询问底价
    over() {
      let str: any = "";
      let name: any = this.name;
      let nameText: any = "";
      if (isNaN(name)) {
        nameText = name;
      } else {
        alert("参数不对");
        return;
      }

      if (this.phone.length === 11) {
        str = this.phone;
      } else {
        alert("请输入正确的手机号");
        return;
      }

      if (str && nameText) {
        console.log(str, nameText);
      }
    },
    //滚动事件
    scrollTop(e: Event) {
      if (e.srcElement.scrollTop >= 333) {
        this.isFooterShow = true;
      } else {
        this.isFooterShow = false;
      }
    },
    //点击跳转type页面
    indexB() {
      this.$router.push({
        path: `/type?id=${this.personalobj.details.car_id}&address=${this.addressId}`
      });
    }
  }
});
</script>

<style lang="scss" scoped>
footer {
  width: 100%;
  z-index: 99;
  button {
    width: 100%;
    height: 1rem;
    line-height: 1rem;
    background: #3aacff;
    text-align: center;
    font-size: 0.34rem;
    color: #fff;
    border: 0;
  }
}
.ulist {
  width: 100%;
  padding: 0 0.1rem;
  box-sizing: border-box;
  background: #fff;

  li {
    height: 1.65rem;
    border-bottom: 1px solid #eee;
    > label {
      width: 100%;
      display: flex;
      height: 100%;
    }
    div {
      &:first-child {
        width: 1rem;
        height: 1.65rem;
        line-height: 2rem;
        text-align: center;
      }
      &:nth-child(2) {
        width: 60%;
        padding: 0 0.2rem;
      }
    }
    .topLists {
      padding: 0.3rem 0;
      box-sizing: border-box;
      p {
        &:first-child {
          font-size: 0.3rem;
          font-weight: 500;
          padding: 0.15rem 0;
        }
        &:last-child {
          color: #999;
          font-size: 0.2rem;
        }
      }
    }
    .right {
      flex: 1;
      text-align: right;
      margin-right: 0.2rem;

      p {
        &:first-child {
          color: red;
        }
      }
    }
    &:hover {
      .topLists {
        &:last-child {
          color: #eee;
          font-size: 0.2rem;
        }
      }
    }
  }
}
.warpper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #f4f4f4;
  header {
    width: 100%;
    height: 0.6rem;
    line-height: 0.6rem;
    text-align: center;
    background: #79cd92;
    color: #fff;
  }
  .content_wrapper {
    flex: 1;
    overflow-y: auto;
  }
}
.content_topImgs {
  background: #fff;
  padding: 0.32rem 0.18rem 0.24rem;
  height: 2rem;
  box-sizing: border-box;
  display: flex;
  > img {
    width: 2.3rem;
    height: 1.41rem;
    border: 1px solid #eee;
    box-sizing: border-box;
    border-radius: 5px;
  }
  .content_itemsA {
    font-size: 0.32rem;
    padding-left: 0.1rem;
    box-sizing: border-box;
    overflow: hidden;
    p {
      line-height: 0.7rem;
      font-size: 0.35rem;
      font-weight: 500;
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
.information_tab {
  background: #fff;
  padding: 0.1rem;
  box-sizing: border-box;

  p {
    font-size: 0.32rem;
    height: 0.88rem;
    border-bottom: 1px solid #eee;
    padding: 0.1rem;
    box-sizing: border-box;
    color: #000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    input {
      text-align: right;
      height: 90%;
      border: 0;
      outline: none;
      font-size: 0.32rem;
    }

    .spans {
      width: 50%;
      text-align: right;
      position: relative;
      padding: 0 0.3rem 0 0;
      &:after {
        content: "";
        display: inline-block;
        padding-top: 0.16rem;
        padding-right: 0.16rem;
        border-top: 1px solid #999;
        border-right: 1px solid #999;
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
        position: absolute;
        right: 0.1rem;
        top: 0.13rem;
      }
    }
  }
}
.btns {
  background: #fff;
  text-align: center;
  padding-top: 0.3rem;
  padding-bottom: 0.28rem;

  .btn {
    font-size: 0.32rem;
    color: #fff;
    width: 80%;
    background: #3aacff;
    height: 0.7rem;
    border-radius: 0.1rem;
    border: 0;
    outline: none;
  }
}
.Address {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  background: #fff;
}
.addressActive {
  animation: add 0.3s;
  top: 0;
}
@keyframes add {
  0% {
    top: 100%;
  }
  100% {
    top: 0;
  }
}
.addressActive1 {
  animation: tops 0.3s;
  top: 100%;
}
@keyframes tops {
  0% {
    top: 0;
  }
  100% {
    top: 100%;
  }
}
.addressList {
  list-style: none;
  padding-left: 0.4rem;
  font-size: 0.28rem;
  height: 0.8rem;
  line-height: 0.8rem;
  background: #fff;
  border-bottom: 1px solid #eee;
}
.addressList1 {
  list-style: none;
  padding-left: 0.3rem;
  font-size: 0.28rem;
  height: 0.8rem;
  line-height: 0.8rem;
  background: #fff;
  border-bottom: 1px solid #eee;
  position: relative;
  &:after {
    content: "";
    display: inline-block;
    padding-top: 0.16rem;
    padding-right: 0.16rem;
    border-top: 1px solid #999;
    border-right: 1px solid #999;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
    position: absolute;
    right: 0.35rem;
    top: 0.3rem;
  }
}
.toaddre {
  width: 100%;
  height: 100%;
  padding: 0 0 0 0.1rem;
  box-sizing: border-box;
  overflow-y: scroll;
}
.chidren {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  right: -100%;
  background: rgba($color: #000000, $alpha: 0.6);
  display: flex;
  .rgba {
    width: 30%;
  }
  .chidrenList {
    width: 70%;
    height: 100%;
    background: #fff;
  }
}
.active {
  animation: identifier 0.3s;
  right: 0;
}
@keyframes identifier {
  0% {
    right: -100%;
  }
  100% {
    right: 0;
  }
}
.active1 {
  animation: identifiers 0.3s;
  right: -100%;
}
@keyframes identifiers {
  0% {
    right: 0;
  }
  100% {
    right: -100%;
  }
}
input[type="checkbox"] {
  width: 20px;
  height: 20px;
  background-color: #fff;
  -webkit-appearance: none;
  border: 2px solid #c9c9c9;
  border-radius: 50%;
  outline: none;
  cursor: pointer;
}
input[type="checkbox"]:checked {
  background: url("https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2672817947,408114422&fm=58&bpow=626&bpoh=593")
    no-repeat center;
  background-size: 90% 90%;
}
</style>

