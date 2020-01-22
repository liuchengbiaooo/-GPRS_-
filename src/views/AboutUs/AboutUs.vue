<template>
  <div class="wrap">
    <div class="logo-wrap">
      <img class="logo-img" src="../../assets/imgs/logo.png" alt />
      <div class="logo-text">
        <p class="logo-text-p">业主端</p>
      </div>
    </div>
    <div class="input-wrap">
      <img class="input-img" src="../../assets/imgs/ic_user.png" alt />
      <input
        class="input-content"
        type="txt"
        maxlength="11"
        min="0"
        onkeyup="value=value.replace(/[^0-9]/g,'')"
        v-model="phoneNumber"
        placeholder="手机号/邮箱"
      />
    </div>
    <div class="input-wrap input-wraps">
      <img class="input-img" src="../../assets/imgs/ic_password.png" alt />
      <input class="input-content" type="password" v-model="passWord" placeholder="请输入密码" />
    </div>
    <div class="login-btn" @click="register">登录</div>
    <div class="content-bottom-wrap">
      <div class="content-bottom-text1" @click="forgetPassword">忘记密码</div>
      <div class="content-bottom-text2" @click="newUser">注册新用户</div>
    </div>
    <div class="bottom-img-wrap">
      <img class="bottom-img" src="../../assets/imgs/bottomImg.png" alt />
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
import { userLogin } from "../../api";
export default {
  name: "AboutUs",
  data() {
    return {
      phoneNumber: "",
      passWord: ""
    };
  },
  components: {},
  methods: {
    register() {
      let phoneNumber = this.phoneNumber;
      let passWord = this.passWord;
      if (phoneNumber == "" || passWord == "") {
        Toast.fail('请您输入正确的账号密码!');
        return
      }
      userLogin(phoneNumber, passWord)
        .then(res => {
          //console.log(res.status)
          if (res.status == 1) {
            let userID = res.data.id;
            //let user = res.data;
            let user = JSON.stringify(res.data);
            sessionStorage.userDate = user;
            console.log("user", user);
            //console.log(userID)
            sessionStorage.setItem("userID", userID);
            this.$router.push({ path: `/app` });
          } else if (res.status == 0) {
            Toast.fail(res.msg);
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    //注册新用户
    newUser() {
      console.log("Sss");
      this.$router.push({ path: `/register` });
    },
    //忘记密码
    forgetPassword() {
      this.$router.push({ path: `/password` });
    }
  },
  mounted() {
    console.log("sessionStorage.getItem", sessionStorage.getItem("userID"));
  }
};
</script>

<style scoped lang="less">
.wrap {
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  .logo-wrap {
    width: 80%;
    display: flex;
    justify-content: center;
    margin-right: 0.2rem;
    .logo-img {
      width: 1rem;
      height: 0.5rem;
    }
    .logo-text {
      width: 0.6rem;
      position: relative;
      .logo-text-p {
        position: absolute;
        left: 0;
        bottom: 0;
        font-size: 0.155rem;
        color: #a2dac6;
      }
    }
  }
  .input-wrap {
    width: 80%;
    height: 0.1rem;
    font-size: 0.155rem;
    margin-top: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
    .input-img {
      width: 0.2rem;
      height: 0.2rem;
      margin-right: 20px;
    }
    .input-content {
      width: 70%;
      outline-style: none;
      border-bottom: 2px solid #dfdfdf;
    }
  }
  .input-wraps {
    margin-top: 7%;
  }
  .login-btn {
    width: 50%;
    height: 0.4rem;
    color: #fff;
    font-size: 0.155rem;
    text-align: center;
    line-height: 0.4rem;
    background-color: rgb(136, 208, 176);
    border-radius: 20px;
    margin-top: 15%;
  }
  .content-bottom-wrap {
    width: 50%;
    height: 0.15rem;
    color: rgb(136, 208, 176);
    font-size: 0.155rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 4%;
    margin-bottom: 0.2rem;
    .content-bottom-text1 {
      width: 50%;
      display: flex;
      height: 0.17rem;
      justify-content: flex-start;
      align-items: center;
      box-sizing: border-box;
      z-index: 999;
      border-right: 1px solid #cfcfcf;
    }
    .content-bottom-text2 {
      width: 50%;
      display: flex;
      height: 0.17rem;
      z-index: 999;
      justify-content: flex-end;
      align-items: center;
    }
  }
  .bottom-img-wrap {
    width: 100%;
    position: fixed !important;
    bottom: 0;
    left: 0;
    .bottom-img {
      width: 100% !important;
      height: 1rem;
      margin-top: 20%;
    }
  }
}
</style>
