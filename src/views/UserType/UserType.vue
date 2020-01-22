<template>
  <div class="wrap">
    <HeaderTop color="#7adbbf" :link="link">选择地址</HeaderTop>
    <div class="input1-wrap">
      <img class="input1-wrap-img" src="../../assets/img/xzyhlx_ss@2x.png" alt />
      <input type="text" name id="input1" v-model="searchtxt" placeholder="输入地址/电话/姓名/表号进行搜索" />
    </div>
    <div class="ammeter">
      <div
        class="ammeter_table"
        v-for="item in ammeter"
        :key="item.id"
        @click="account(item.deviceCode)"
      >
        <div class="txt">用户名:{{item.username}}</div>
        <div class="txt">手机号:{{item.deviceTel}}</div>
        <div class="txt">电表号:{{item.deviceCode}}</div>
        <div class="txt">地址:{{item.deviceAddress}}</div>
      </div>
    </div>
    <!-- <div class="input1-wrap2">
      <img class="input1-wrap-img2" src="../../assets/img/zxyhlx_db@2x.png" alt="">
      <input type="text" name="" id="input1" placeholder="输入地址/电话/姓名/表号进行搜索">
      <div class="input-btn">验 证</div>
    </div>
    <div class="btn">下一步</div>-->
  </div>
</template>

<script>
import HeaderTop from "../../components/HeaderTop.vue";
import { dimAmmeterList } from "../../api";

export default {
  name: "MyWallet",
  data() {
    return {
      searchtxt: "",
      time: null,
      ammeter: [],
      link: "/app"
    };
  },
  components: {
    HeaderTop
  },
  watch: {
    searchtxt(curVal) {
      var show = true;

      this.time = setTimeout(() => {
        if (show) {
          show = false;
          this.ammeterList();
        }
      }, 500);
    }
  },

  methods: {
    async ammeterList(value) {
      let page = 1;
      let limit = 1000;
      let searchContent = this.searchtxt;
      let result = await dimAmmeterList(page, limit, searchContent);
      if (result.status == 1) {
        this.ammeter = result.data;
      }
    },
    //点击开户
    account(deviceCode) {
      this.$router.push({
        name: "App2",
        params: {
          deviceCode
        }
      });
    }
  },
  mounted() {},
  beforeDestroy() {
    clearInterval(this.time);
    this.time = null;
  }
};
</script>

<style scoped lang="less">
.wrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  .ammeter {
    width: 100%;
    margin-top: 0.2rem;
    .ammeter_table {
      width: 100%;
      margin-top: 0.1rem;
      border-bottom: 0.02rem solid #f2f2f2;
      .txt {
        margin-left: 0.16rem;
        height: 0.18rem;
        font-size: 0.155rem;
        color: #8a8a8a;
      }
    }
  }
  .input1-wrap {
    width: 3.45rem;
    height: 0.27rem;
    border-radius: 0.12rem;
    background-color: #f7f7f8;
    margin-top: 0.55rem;
    display: flex;
    align-items: center;
    .input1-wrap-img {
      width: 0.13rem;
      height: 0.13rem;
      margin-left: 0.15rem;
    }

    #input1 {
      height: 0.27rem;
      width: 2rem;
      margin-left: 0.16rem;
      border-radius: 0.14rem;
      background-color: #f7f7f8;
      font-size: 0.155rem;
      color: #000;
    }
  }
  .input1-wrap2 {
    width: 100%;
    height: 0.4rem;
    background-color: #fff;
    margin-top: 0.15rem;
    display: flex;
    align-items: center;
    position: relative;
    .input1-wrap-img2 {
      width: 0.24rem;
      height: 0.16rem;
      margin-left: 0.2rem;
    }
    #input1 {
      height: 0.27rem;
      width: 2rem;
      margin-left: 0.16rem;
      border-radius: 0.14rem;
      color: #c9c9c9;
      font-size: 0.155rem;
      color: #94b392;
    }
    .input-btn {
      width: 0.5rem;
      height: 0.2rem;
      text-align: center;
      line-height: 0.2rem;
      color: #fff;
      font-size: 0.155rem;
      background-color: #88d0b0;
      border-radius: 0.05rem;
      position: absolute;
      top: 0.1rem;
      right: 0.2rem;
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
    font-size: 0.155rem;
    margin-top: 2.59rem;
  }
}
</style>
