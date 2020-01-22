<template>
  <div class="wrap">
    <HeaderTop color="#7adbbf" :link="link">忘记密码</HeaderTop>
    <div class="content">
      <div class="content1">
        <img class="content1-img" src="../../assets/img/ic_phonenumber@2x.png" alt />
        <input
          class="content1-input"
          v-model="phone"
          type="txt"
          maxlength="11"
          min="0"
          onkeyup="value=value.replace(/[^0-9]/g,'')"
          name
          id
          placeholder="请输入手机号"
        />
      </div>
      <div class="content1">
        <img class="content1-img" src="../../assets/img/ic_password@2x.png" alt />
        <input
          class="content1-input"
          type="password"
          v-model="password"
          name
          id
          placeholder="请输入密码"
        />
      </div>
      <div class="content1">
        <img class="content1-img" src="../../assets/img/ic_verificationcode@2x.png" alt />
        <input
          class="content1-input content1-input2"
          v-model="sendVcode"
          type="text"
          name
          id
          placeholder="请输入验证码"
        />
        <div class="input-btn" @click="authCode" v-if="show">获取验证码</div>
        <div class="input-btn input-btn-color" v-else>{{second}}s</div>
      </div>
    </div>
    <div class="btn" @click="nextStep">提交</div>
  </div>
</template>

<script>
import { Toast } from "vant";
import { verificationCode, amendPassword } from "../../api";
import HeaderTop from "../../components/HeaderTop.vue";

export default {
  name: "MyWallet",
  data() {
    return {
      phone: "",
      sendVcode: "",
      show: true,
      password: "",
      second: 60,
      link: "/aboutUs",
      timeout:''
    };
  },
  components: {
    HeaderTop
  },
  methods: {
    async authCode() {
      let phoneNumber = this.phone;
      var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
      if (phoneNumber.length != "11" || !myreg.test(phoneNumber)) {
        Toast.fail("手机号码输入有误");
        return;
      }
      this.show = false;
      let time = this.second;
      let clock = setInterval(() => {
        this.second = time--;
        if (this.second == 0) {
          clearInterval(clock);
          this.show = true;
        }
      }, 1000);
      await verificationCode(phoneNumber);
    },
    nextStep() {
      if (this.password == "") {
        Toast.fail("请输入密码");
        return;
      }
      if (this.sendVcode == "") {
        Toast.fail("请输入验证码");
        return;
      }
      let phoneNumber = this.phone;
      let passWord = this.password;
      let vCode = this.sendVcode;
      amendPassword(phoneNumber, passWord, vCode)
        .then(res => {
          if (res.status == 1) {
            Toast.success(res.msg);
            this.timeout = setTimeout(() => {
              this.$router.push({ path: `/aboutUs` });
            }, 1500);
          } else if (res.status == 0) {
            Toast.fail(res.msg);
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {},
  beforeDestroy() {
    clearTimeout(this.timeout);
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
  box-sizing: border-box;
  background-color: #f7f7f8;
  .content {
    margin-top: 0.45rem;
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
        margin-left: 0.2rem;
        height: 0.24rem;
        width: 2.35rem;
        background-color: #f7f7f8;
        border-bottom: 0.02rem solid #bbbbbb;
        font-size: 0.155rem;
        color: #94b392;
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
        font-size: 0.145rem;
        color: #fff;
        border-radius: 0.07rem;
        margin-left: 0.2rem;
      }
      .input-btn-color {
        background-color: #8a8a8a;
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
    font-size: 0.16rem;
    margin-top: 0.67rem;
  }
}
</style>
