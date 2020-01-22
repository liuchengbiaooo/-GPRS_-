<template>
  <div class="wrap">
    <HeaderTop color="#7adbbf">修改密码</HeaderTop>
    <div class="content">
      <div class="content1">
        <img class="content1-img" src="../../assets/img/ic_password@2x.png" alt />
        <input class="content1-input" type="text" name id placeholder="请输入密码" />
      </div>

      <div class="content1">
        <img class="content1-img" src="../../assets/img/ic_passwordright@2x.png" alt />
        <input class="content1-input" type="text" name id placeholder="请确认密码" />
      </div>
    </div>
    <div class="btn">提交</div>
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
.wrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  background-color: #f7f7f8;
  .content {
    margin-top: 0.45rem;
    width: 100%;
    .content1 {
      width: 100%;
      height: 0.26rem;
      display: flex;
      margin-top: 0.3rem;
      .content1-img {
        width: 0.23rem;
        height: 0.24rem;
        margin-left: 0.42rem;
      }
      .content1-input {
        margin-left: 0.38rem;
        height: 0.24rem;
        width: 2.5rem;
        background-color: #f7f7f8;
        border-bottom: 0.02rem solid #bbbbbb;
        font-size: 0.12rem;
        color: #bbbbbb;
      }
      .content1-input2 {
        width: 1.2rem;
      }
      .input-btn {
        width: 0.95rem;
        height: 0.25rem;
        background-color: #88d0b0;
        text-align: center;
        line-height: 0.25rem;
        font-size: 0.12rem;
        color: #fff;
        border-radius: 0.07rem;
        margin-left: 0.35rem;
      }
    }
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
    margin-top: 0.67rem;
  }
}
</style>
