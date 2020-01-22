<template>
  <div class="succeed">
    <div class="wrap">
      <HeaderTop color="#7adbbf">缴费成功</HeaderTop>
      <div class="top">
        <img class="top-img" src="../../assets/img/jfcg@2x.png" alt />
        <div class="top-text">充值成功!</div>
      </div>

      <div class="text-wrap">
        <div class="text-wrap1">
          <div class="text1">本次充值金额</div>
          <div class="text2">50.00</div>
          <div class="text3">元</div>
        </div>
      </div>

      <div class="text-wrap text-wrap2">
        <div class="text-wrap1">
          <div class="text1">电表剩余金额</div>
          <div class="text2 text4">61.3122</div>
          <div class="text3 text5">元</div>
        </div>
      </div>
      <div class="btn">确定</div>
    </div>
  </div>
</template>

<script>
import HeaderTop from "../../components/HeaderTop.vue";

export default {
  name: "MyWallet",
  data() {
    return {};
  },
  components: {
    HeaderTop
  },
  methods: {},
  mounted() {}
};
</script>

<style scoped lang="less">
.succeed {
  height: 100%;
  overflow: hidden;
  .wrap {
    width: 100%;
    height: 100%;
    margin-top: 0.45rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f7f7f8;
    .top {
      width: 100%;
      margin-top: 0.63rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      .top-img {
        width: 1.13rem;
        height: 0.69rem;
      }
      .top-text {
        font-size: 0.12rem;
        color: #666;
        margin-top: 0.19rem;
      }
    }
    .text-wrap {
      margin-top: 0.39rem;
      width: 100%;
      .text-wrap1 {
        width: 100%;
        height: 0.18rem;
        display: flex;
        line-height: 0.18rem;
        .text1 {
          font-size: 0.12rem;
          margin-left: 0.24rem;
          color: #666;
        }
        .text2 {
          margin-left: 0.13rem;
          font-size: 0.16rem;
          color: #5fc6d2;
        }
        .text3 {
          font-size: 0.12rem;
          color: #5fc6d2;
          margin-left: 0.02rem;
        }
        .text4 {
          font-size: 0.12rem;
          color: #666;
        }
        .text5 {
          color: #666;
        }
      }
    }
    .text-wrap2 {
      margin-top: 0.21rem;
    }
    .btn {
      width: 1.79rem;
      height: 0.35rem;
      background-color: #88d0b0;
      border-radius: 0.18rem;
      text-align: center;
      line-height: 0.35rem;
      color: #fff;
      font-size: 0.12rem;
      margin-top: 0.91rem;
    }
  }
}
</style>
