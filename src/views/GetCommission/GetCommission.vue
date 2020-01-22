<template>
  <div class="wrap">
    <div class="header">智能GPRS电表</div>
    <div class="item item-one" @click="skip('/everyday')">
      <img class="item-img" src="../../assets/imgs/dbapp_rcyw.png" alt />
      <div class="item-text" style=" margin-left: 0.25rem;">
        <p class="item-text-p1">日常业务</p>
        <!-- <p class="item-text-p2">业务的文案XXXXX</p> -->
      </div>
    </div>
    <div class="item" @click="skip('/usingRecord')">
      <img
        class="item-img"
        src="../../assets/imgs/dbapp_xxdr.png"
        alt
        style=" width:0.56rem;height: 0.62rem;"
      />
      <div class="item-text" style=" margin-left: 0.3rem;">
        <p class="item-text-p1">电表开户</p>
        <!-- <p class="item-text-p2">业务的文案XXXXX</p> -->
      </div>
    </div>
    <div class="item" @click="skip('/selectedNum')">
      <img
        class="item-img"
        src="../../assets/imgs/dbapp_sdcxx.png"
        alt
        style=" width:0.47rem;height: 0.61rem;"
      />
      <div class="item-text" style=" margin-left: 0.38rem;">
        <p class="item-text-p1">售电记录</p>
        <!-- <p class="item-text-p2">业务的文案XXXXX</p> -->
      </div>
    </div>
    <div class="item" @click="skip('/bindingPhone')">
      <img
        class="item-img"
        src="../../assets/imgs/dbapp_yhcx.png"
        alt
        style=" width:0.47rem;height: 0.62rem;"
      />
      <div class="item-text" style=" margin-left: 0.38rem;">
        <p class="item-text-p1">状态查询</p>
        <!-- <p class="item-text-p2">业务的文案XXXXX</p> -->
      </div>
    </div>
  </div>
</template>

<script>
import HeaderTop from "../../components/HeaderTop.vue";

export default {
  name: "GetCommission",
  data() {
    return {};
  },
  components: {
    HeaderTop
  },
  methods: {
    skip(url) {
      this.$router.push({ path: url });
    }
  },
  mounted() {}
};
</script>

<style scoped lang="less">
.wrap {
  width: 100%;
  height: 100%;
  background: url("../../assets/imgs/backgound.png") center center no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  .header {
    width: 100%;
    height: 0.45rem;
    font-size: 0.15rem;
    line-height: 0.45rem;
    display: flex;
    justify-content: center;
    color: white;
    // position: fixed;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 50;
    box-sizing: border-box;
    // color: #7adbbf;
    background-color: rgb(122, 219, 191);
  }
  .item {
    margin-top: 0.25rem;
    width: 80%;
    height: 1.2rem;
    background-color: #fff;
    border-radius: 12px;
    display: flex;
    align-items: center;
    .item-img {
      width: 0.63rem;
      height: 0.52rem;
      margin-left: 0.3rem;
    }
    .item-text {
      margin-left: 0.3rem;
      .item-text-p1 {
        font-size: 0.155rem;
        color: #5fc6d2;
      }
      .item-text-p2 {
        font-size: 0.155rem;
        color: #5fc6d2;
        margin-top: 0.25rem;
      }
    }
  }
  .item-one {
    margin-top: 0.8rem;
  }
}
</style>
