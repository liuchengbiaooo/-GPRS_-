<template>
    <div class="wrap">
        <div class="logo-wrap">
            <img class="logo-img" src="../../assets/imgs/logo.png" alt="">
            <div class="logo-text">
                <p class="logo-text-p">业主端</p>
            </div>
        </div>
        <div class="input-wrap">
            <img class="input-img" src="../../assets/imgs/ic_user.png" alt="">
            <input class="input-content" type="text" placeholder="手机号/邮箱">
        </div>
        <div class="input-wrap input-wraps">
            <img class="input-img" src="../../assets/imgs/ic_password.png" alt="">
            <input class="input-content" type="text" placeholder="请输入密码">
        </div>
        <div class="login-btn">登录</div>
        <div class="content-bottom-wrap">
            <div class="content-bottom-text1">忘记密码</div>
            <div class="content-bottom-text2">注册新用户</div>
        </div>
        <img class="bottom-img" src="../../assets/imgs/bottomImg.png" alt="">
    </div>
</template>

<script>

export default {
  name: 'AboutUs',
  data() {
    return {};
  },
  components: {
  },
  methods: {},
  mounted() {
  },
};
</script>

<style scoped lang="less">
    .wrap{
        width: 100%;
        height: 100%;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .logo-wrap{
            width: 80%;
            display: flex;
            justify-content: center;
            margin-top: 30%;
            margin-right: 40px;
            .logo-img{
                width: 68px;
                height: 38px;
            }
            .logo-text{
                width: 45px;
                position: relative;
                .logo-text-p{
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    font-size: 13px;
                    color: #a2dac6;
                }
            }
        }
        .input-wrap{
            width: 80%;
            height: 23px;
            font-size: 14px;
            margin-top: 20%;
            display: flex;
            align-items: center;
            justify-content: center;
            .input-img{
                width: 20px;
                height: 22px;
                margin-right: 20px;
            }
            .input-content{
                width: 70%;
                outline-style: none;
                border-bottom: 2px solid #dfdfdf;
            }
        }
        .input-wraps{
            margin-top: 7%;
        }
        .login-btn{
            width: 50%;
            height: 35px;
            color: #fff;
            font-size: 14px;
            text-align: center;
            line-height: 35px;
            background-color: rgb(136, 208, 176);
            border-radius: 20px;
            margin-top: 15%;
        }
        .content-bottom-wrap{
            width: 50%;
            height: 18px;
            color: rgb(136, 208, 176);
            font-size: 14px;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 7%;
            .content-bottom-text1{
                width: 50%;
                display: flex;
                justify-content: flex-start;
                align-items: center;
                box-sizing: border-box;
                border-right: 1px solid #cfcfcf;
            }
            .content-bottom-text2{
                width: 50%;
                display: flex;
                justify-content: flex-end;
                align-items: center;
            }
            .bottom-img{
                width: 100% !important;
                height: 129px;
                margin-top: 20%;
                position: absolute;
                bottom: 0;
                left: 0;
            }
        }
    }

</style>
