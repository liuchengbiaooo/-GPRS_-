<template>
  <div class="recharge">
    <div class="recharge_hear">
      <div>最近充值记录</div>
      <div class="recharge-div" @click="isShow">
        <img v-if="Show" src="../../assets/img/xiangxia.png" class="head_img" />
        <img v-else src="../../assets/img/xiangshang.png" class="head_img" />
      </div>
    </div>
    <div v-show="Show">
      <div class="recharge_conter" v-for="(item,index) in rechargeList" :key="index">
        <div class="conter">
          <div>{{item.username}}</div>
          <div>{{item.createTime}}</div>
        </div>
        <div class="conter">
          <div>电表号：{{item.deviceCode}}</div>
          <div>{{item.money}}元</div>
        </div>
      </div>
      <!-- <div class="recharge_conter">
          <div class="conter">
            <div>战鼓</div>
            <div>2019-18111</div>
          </div>
          <div class="conter">
            <div>电表号：1514151</div>
            <div>20元</div>
          </div>
      </div>-->
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import { rechargeMoney } from "../../api/index";
export default {
  data() {
    return {
      Show: false,
      rechargeList: []
    };
  },
  watch: {},
  methods: {
    //查询充值记录
    async recharge() {
      let userId = sessionStorage.getItem("userID");
      let result = await rechargeMoney(userId);
      if (result.status == 1) {
        this.rechargeList = result.data;
      }
    },
    isShow() {
      this.Show = !this.Show;
    }
  },
  created() {
    this.recharge();
  }
};
</script>

<style lang="less" scoped>
.recharge {
  width: 100%;
  // border: 0.01rem solid red;
  margin-top: 0.2rem;
  .recharge_hear {
    width: 100%;
    display: flex;
    line-height: 1.5;
    justify-content: space-between;
    font-size: 0.15rem;
    margin-bottom: 0.1rem;

    .recharge-div {
      width: 0.8rem;
      // border: 0.01rem solid red;
      position: relative;
      .head_img {
        width: 0.2rem;
        height: 0.2rem;
        position: absolute;
        right: 0.01rem;
      }
    }
  }
  .recharge_conter {
    width: 100%;
    //   height: 0.4rem;
    //   margin-top: 0.2rem;
    border-bottom: 0.001rem solid rgb(179, 177, 177);
    padding-bottom: 0.05rem;
    padding-top: 0.05rem;
    .conter {
      width: 100%;
      display: flex;
      justify-content: space-between;
      font-size: 0.14rem;
      line-height: 0.2rem;
    }
  }
}
</style>