<template>
  <div class="warp">
    <HeaderTop color="#7adbbf" :link="link">充值付款</HeaderTop>
    <div class="center">
      <div
        :class="monyID == item.id ? 'mony monyColor' : 'mony'"
        v-for="item in paymentList"
        :key="item.id"
        @click="ursemony(item.id,item.mony)"
      >{{item.mony}}元</div>
    </div>
    <div class="jiazai" v-if="isShow">
      <van-loading size="28px" type="spinner">加载中...</van-loading>
    </div>
    <div class="warp_img">
      <img src="../../assets/img/weixin.png" alt />
      <div class="zhifu" @click="payment" v-if="indexID">微信支付</div>
      <div class="dianji" v-else>微信支付</div>
    </div>
    <div class="warp_txt">深圳市友先达电子有限公司</div>
  </div>
</template>

<script>
import { Loading , Toast} from "vant";
import { userpayment } from "../../api";
import { banID } from "../../api";
import HeaderTop from "../../components/HeaderTop.vue";
export default {
  props: {},
  data() {
    return {
      link: "/app",
      monyID: 0,
      mony: "0.01",
      isShow: false,
      indexID: true,
      paymentList: [
        { id: 0, mony: "0.01" },
        { id: 1, mony: "10" },
        { id: 2, mony: "100" },
        { id: 3, mony: "200" },
        { id: 4, mony: "300" },
        { id: 5, mony: "500" },
        { id: 6, mony: "1000" },
        { id: 7, mony: "5000" },
        { id: 8, mony: "10000" }
      ],
      deviceCode: ""
    };
  },
  computed: {},
  created() {},
  mounted() {
    let deviceCode = this.$route.params.deviceCode;
    this.deviceCode = deviceCode;
    console.log("this.deviceCode", deviceCode);
    let usercode = sessionStorage.userDate;
    let user = JSON.parse(usercode);
    let userID = sessionStorage.getItem("userID");
    //let usercode = this.$store.state.user;
    console.log("usercode", user.wxCode);
    console.log("usercode", userID);
    if (user.wxCode == "") {
      this.login();
    }
  },
  watch: {},
  methods: {
    ursemony(id, mony) {
      this.monyID = id;
      this.mony = mony;
    },
    //付钱
    payment() {
      let deviceCode = this.deviceCode;
      let userId = sessionStorage.getItem("userID");
      let totalprice = this.mony * 100;
      this.isShow = true;
      this.indexID = false;
      userpayment(deviceCode, userId, totalprice)
        .then(res => {
          if (res.status == 1) {
            this.indexID = true;
            this.isShow = false;
            if (typeof WeixinJSBridge == "undefined") {
              if (document.addEventListener) {
                document.addEventListener(
                  "WeixinJSBridgeReady",
                  onBridgeReady,
                  false
                );
              } else if (document.attachEvent) {
                document.attachEvent("WeixinJSBridgeReady", onBridgeReady);
                document.attachEvent("onWeixinJSBridgeReady", onBridgeReady);
              }
            } else {
              this.onBridgeReady(res);
            }
          } else {
            this.indexID = true;
            this.isShow = false;
            Toast.fail(res.msg);
          }
        })
        .catch(err => {});
    },
    onBridgeReady(res) {
      let that = this;
      WeixinJSBridge.invoke(
        "getBrandWCPayRequest",
        {
          appId: res.data.appId, //公众号名称，由商户传入
          timeStamp: res.data.timeStamp, //时间戳，自1970年以来的秒数
          nonceStr: res.data.nonce_str, //随机串
          package: res.data.package, //预支付交易码
          signType: "MD5", //微信签名方式：
          paySign: res.data.paySign //微信签名
        },
        function(res) {
          if (res.err_msg == "get_brand_wcpay_request:ok") {
            that.$router.push({ path: `/app` });
            //that.toPaySuccessPage(); //跳转到支付成功页
            // 使用以上方式判断前端返回,微信团队郑重提示：
            //res.err_msg将在用户支付成功后返回ok，但并不保证它绝对可靠。
          } else {
            // that.toPayFalsePage(); //跳转到支付失败页
          }
        }
      );
    },
    //授权
    login() {
      let code = this.getUrlParam("code");
      console.log("code的值：", code); //打印code
      console.log("当前连接：", window.location.href); //打印当前地址
      if (code) {
        //判断有没有code
        let userId = sessionStorage.getItem("userID");
        banID(userId, code)
          .then(res => {
            let reslut = res;
            if (reslut.status == 1) {
              console.log("reslut", reslut);
              let user = JSON.stringify(reslut.data);
              sessionStorage.userDate = user;
            }
          })
          .catch(err => {});
      } else {
        let URL = window.location.href;
        let pageUrl = encodeURIComponent(URL);
        this.redirect(pageUrl);
      }
    },
    getUrlParam(name) {
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
      var r = window.location.search.substr(1).match(reg);
      if (r != null) return unescape(r[2]);
      return null;
    },
    redirect(urlp) {
      console.log("urlp", urlp);
      let url =
        "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx3737be2728244a49&redirect_uri=" +
        urlp +
        "&response_type=code&scope=snsapi_base&state=7da8ab58b#wechat_redirect";
      window.location.href = url;
    }
  },
  components: {
    HeaderTop
  }
};
</script>

<style scoped lang="less">
.warp {
  box-sizing: border-box;
  overflow-y: hidden;
  background-color: #f9f8f6;
  height: 100vh;
  position: relative;
  .jiazai {
    margin-left: 1.45rem;
  }
  .center {
    margin-top: 0.55rem;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .mony {
      width: 27%;
      height: 0.45rem;
      border: 1px solid #bebec0;
      border-radius: 0.07rem;
      margin: 0.1rem;
      line-height: 0.45rem;
      text-align: center;
      font-size: 0.155rem;
      color: #39c650;
    }
    .monyColor {
      background-color: #39c650;
      color: #fff;
    }
  }
  .warp_img {
    margin-top: 0.5rem;
    //   margin-left: 1.2rem;
    text-align: center;
    font-size: 0.155rem;
    .zhifu {
      margin: 0 auto;
      width: 50%;
      height: 0.35rem;
      line-height: 0.35rem;
      border: 1px solid #bebec0;
      border-radius: 0.1rem;
      color: #39c650;
    }
    .dianji {
      margin: 0 auto;
      width: 50%;
      height: 0.35rem;
      line-height: 0.35rem;
      background-color: #39c650;
      border-radius: 0.1rem;
      color: #ffffff;
    }
  }
  .warp_txt {
    position: absolute;
    bottom: 0.5rem;
    font-size: 0.155rem;
    left: 1.05rem;
  }
}
</style>
