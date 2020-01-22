<template>
  <div class="wrap">
    <HeaderTop color="#7adbbf" class="header" :link="link">充值记录</HeaderTop>
    <div class="center" v-if="topUpList.length > 0">
      <div class="item" v-for="(item,index) in topUpList" :key="index">
        <div class="item-left">
          <div class="item-left-top">
            <div class="item-left-top1">{{item.createTime}}</div>
            <!-- <div class="item-left-top2">14:28:35</div> -->
          </div>
          <div class="item-left-bottom">充值成功</div>
        </div>
        <div class="item-right">{{item.money}}元</div>
      </div>
    </div>
    <div class="no_recharge" v-else>
      <img src="../../assets/img/gantanhao.png" />
      <div>暂无记录</div>
    </div>
  </div>
</template>

<script>
import { rechargeList } from "../../api";
import HeaderTop from "../../components/HeaderTop.vue";

export default {
  name: "Recharge",
  data() {
    return {
      link: "/app",
      topUpList: []
    };
  },
  components: {
    HeaderTop
  },
  methods: {},
  async mounted() {
    let deviceCode = this.$route.params.deviceCode;
    let page = 1;
    let limit = 1000;
    let result = await rechargeList(page, limit, deviceCode);
    if (result.status == "1") {
      this.topUpList = result.data
    }
    console.log(result);
  }
};
</script>

<style scoped lang="less">
.wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  position: relative;
  .center {
    margin-top: 0.45rem;
    width: 100%;
    .item {
      display: flex;
      justify-content: space-between;
      width: 100%;
      height: 0.7rem;
      border-bottom: 1px solid #e8e8e8;
      .item-left {
        margin-left: 0.2rem;
        margin-top: 0.15rem;
        width: 1.74rem;
        height: 0.6rem;
        .item-left-top {
          display: flex;
          .item-left-top1 {
            font-size: 0.155rem;
            color: #666;
          }
          .item-left-top2 {
            font-size: 0.155rem;
            color: #666;
            margin-left: 0.3rem;
          }
        }
        .item-left-bottom {
          font-size: 0.155rem;
          color: #7adb7c;
          margin-top: 0.21rem;
        }
      }
      .item-right {
        widows: 0.8rem;
        height: 0.7rem;
        font-size: 0.21rem;
        color: #666;
        text-align: center;
        line-height: 0.7rem;
        margin-right: 0.2rem;
      }
    }
  }
  .no_recharge {
    margin-top: 2rem;
    font-size: 0.155rem;
    text-align: center;
    > img {
      width: 0.48rem;
      height: 0.48rem;
    }
  }
}
</style>
