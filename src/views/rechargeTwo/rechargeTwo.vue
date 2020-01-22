<template>
  <div class="warp">
    <HeaderTop color="#7adbbf" :link="link">电表充值</HeaderTop>
    <div class="tonter">
      <div class="fromTalbe">
        <div class="txt">用户名:</div>
        <div class="int">
          <input type="txt" v-model="name" disabled="disabled" />
        </div>
      </div>
      <div class="fromTalbe">
        <div class="txt">电表号:</div>
        <div class="int">
          <input type="txt" disabled="disabled" v-model="deviceCode" />
        </div>
      </div>
      <div class="fromTalbe">
        <div class="txt">地址:</div>
        <div class="int">
          <input type="txt" disabled="disabled" v-model="deviceAddress" />
        </div>
      </div>
      <div class="fromTalbe">
        <div class="txt">充值金额:</div>
        <div class="int">
          <input
            type="txt"
            maxlength="5"
            min="0"
            onkeyup="value=value.replace(/[^0-9]/g,'')"
            v-model="money"
          />
        </div>
        <div class="yuan">元</div>
      </div>
      <div class="btn" @click="recharge">充值</div>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
import { everydayRecharge } from "../../api/index";
import HeaderTop from "../../components/HeaderTop.vue";
export default {
  props: {},
  data() {
    return {
      link: "/everyday",
      name: "",
      deviceCode: "",
      deviceAddress: "",
      money: "",
      id: "",
      time: ""
    };
  },
  computed: {},
  created() {},
  mounted() {
    console.log(this.$route.params);
    this.id = this.$route.params.id;
    this.name = this.$route.params.name;
    this.deviceCode = this.$route.params.deviceCode;
    this.deviceAddress = this.$route.params.deviceAddress;
  },
  watch: {},
  methods: {
    async recharge() {
      let id = this.id;
      let deviceCode = this.deviceCode;
      let money = this.money;
      if (money == "") {
        Toast.fail("请输入充值金额!");
        return;
      }
      let result = await everydayRecharge(id, deviceCode, money);
      if (result.status == 1) {
        Toast.success(result.msg);
        this.time = setTimeout(() => {
          this.$router.push({
            path: "/getCommission"
          });
        }, 1500);
      } else {
        Toast.fail(result.msg);
      }
      console.log(result);
    }
  },
  components: {
    HeaderTop
  },
  beforeDestroy() {
    clearTimeout(this.time);
  }
};
</script>

<style scoped lang="less">
.tonter {
  margin-top: 0.65rem;
  width: 100%;
  height: 100%;
  .fromTalbe {
    width: 80%;
    height: 0.4rem;
    // border: 0.01rem solid red;
    display: flex;
    line-height: 0.4rem;
    font-size: 0.155rem;
    color: rgb(110, 108, 108);
    margin-left: 0.3rem;
    margin-top: 0.2rem;
    position: relative;
    .txt {
      width: 0.75rem;
      text-align: right;
    }
    .int {
      width: 80%;
      height: 100%;
      border: 0.01rem solid rgb(202, 199, 199);
      border-radius: 0.1rem;
      margin-left: 0.1rem;
      > input {
        background-color: #fff;
        margin-left: 0.05rem;
        width: 88%;
        border-radius: 0.1rem;
        height: 100%;
      }
    }
    .yuan {
      position: absolute;
      right: 0.1rem;
    }
  }
  .btn {
    width: 1.8rem;
    background-color: #7adbbf;
    color: #fff;
    height: 0.4rem;
    border-radius: 0.15rem;
    font-size: 0.155rem;
    text-align: center;
    line-height: 0.4rem;
    margin: 0.4rem 0rem 0rem 1rem;
  }
}
</style>
