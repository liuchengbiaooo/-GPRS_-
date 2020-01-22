<template>
  <div>
    <HeaderTop color="#7adbbf" :link="link">我的钱包</HeaderTop>
    <div class="wrap">
      <img class="img" src="../../assets/img/wdcb@2x.png" alt />
      <div class="text1">下发金额</div>
      <div class="text2-wrap">
        <div class="text3">￥</div>
        <div class="text4">50.00</div>
      </div>
      <div class="text5">缴交电费</div>
      <div class="text6">充值</div>
    </div>
  </div>
</template>

<script>
import HeaderTop from "../../components/HeaderTop.vue";

export default {
  name: "MyWallet",
  data() {
    return {
      link: "/app",
    };
  },
  components: {
    HeaderTop
  },
  methods: {},
  mounted() {}
};
</script>

<style scoped lang="less">
.wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  .img {
    margin-top: 0.85rem;
    width: 0.84rem;
    height: 0.83rem;
  }
  .text1 {
    margin-top: 0.35rem;
    font-size: 0.12rem;
    color: #666;
    font-weight: bold;
  }
  .text2-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 0.25rem;
    .text3 {
      font-size: 0.22rem;
      color: #666;
    }
    .text4 {
      font-size: 0.32rem;
      color: #666;
      margin-left: 0.23rem;
    }
  }
  .text5 {
    font-size: 0.12rem;
    color: #fff;
    width: 3rem;
    height: 0.35rem;
    border-radius: 4px;
    background-color: #88d0b0;
    text-align: center;
    line-height: 0.35rem;
    margin-top: 0.52rem;
  }
  .text6 {
    font-size: 0.12rem;
    color: #fff;
    width: 3rem;
    height: 0.35rem;
    border-radius: 4px;
    background-color: #88d0b0;
    text-align: center;
    line-height: 0.35rem;
    margin-top: 0.15rem;
  }
}
</style>
