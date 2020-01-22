<template>
  <div class="wrap">
    <div class="header">智能GPRS电表</div>
    <!-- <div class="wrap_head">
      <div class="top-text"></div>
      <div class="top-text add">
        <div class="wrap_head_img" @click="secedeLogin">
          <img src="../../assets/img/tuichu.png" />
          <div style="margin-left:0.05rem">退出登录</div>
        </div>
      </div>
    </div>-->
    <div class="top-content">
      <div class="top-content-text1">
        剩余金额&nbsp;
        <!-- <span class="text1">:{{surplusMoney}}</span> -->
        <span class="text1">:&nbsp;&nbsp;{{surplusMoney}}</span>
      </div>
      <div class="top-content-text3">
        <span class="text3">总电量:</span>
        <!-- <span>{{surplusMoney}}</span> -->
        <span>{{totalEle}}</span>
      </div>
      <div class="top-content-text2" @click="balance" v-if="isOk">查看电表余额</div>
      <div class="top-content-text2" v-else>查看电表余额</div>
      <div class="top-content-text2 text2-two" @click="addAmmeter">添加电表</div>
    </div>
    <!-- <div class="top-content" v-show="show">
      <div class="top-content-text1">50.00</div>
      <div class="top-content-text2">查看电表余额</div>
    </div>-->
    <div class="content" v-show="isShow">
      <div class="content1">
        <div class="content1-img">
          <img src="../../assets/img/db_czjl@2x.png" alt />
        </div>
        <div class="content1-right" @click="myWallet">
          <p class="content1-right-p1">充值</p>
        </div>
      </div>
      <div class="content1 content2">
        <div class="content1-img">
          <img src="../../assets/img/ex.png" alt />
        </div>
        <div class="content1-right" @click="topUp">
          <p class="content1-right-p1">充值记录</p>
        </div>
      </div>
    </div>
    <!-- <van-loading size="30px" vertical color="#fff" class="jiazai" v-show="jiazai">请稍候,正在快马加鞭采集数据...</van-loading> -->
    <div class="content" v-show="show">
      <div class="content1">
        <div class="content1-img">
          <img src="../../assets/img/db_czjl@2x.png" alt />
        </div>
        <div class="content1-right" @click="myWallet">
          <p class="content1-right-p1">充值</p>
        </div>
      </div>
      <div class="content1 content2">
        <div class="content1-img">
          <img src="../../assets/img/ex.png" alt />
        </div>
        <div class="content1-right" @click="topUp">
          <p class="content1-right-p1">充值记录</p>
        </div>
      </div>
    </div>
    <!-- v-if="ammeter.length > 0" -->
    <div class="bottom-wrap">
      <p class="bottom-wrap-p1">用户信息</p>
      <p class="bottom-wrap-p2">电表号:{{ammeterData.deviceCode}}</p>
      <p class="bottom-wrap-p3">用户名:{{ammeterData.username}}</p>
      <p class="bottom-wrap-p4">地&nbsp;&nbsp;&nbsp;址:{{ammeterData.deviceAddress}}</p>
    </div>

    <div>
      <div v-for="(item,index) in ammeter" :key="index" @click="choice(item,index)">
        <van-swipe-cell>
          <div class="table">
            <!-- <div class="table_lift">电表号:</div> -->
            <van-cell :border="true" :title=" `电表号:` +item.deviceCode" class="vancell" />
            <div class="table_yuan yuanColor">
              <div class="table_xin" v-show="ammeterID==index"></div>
            </div>
          </div>

          <template slot="right">
            <van-button square type="danger" text="删除" @click="delent(item.deviceCode)" />
          </template>
        </van-swipe-cell>
      </div>
    </div>
  </div>
</template>

<script>
var number = 0;
import { Cell, CellGroup, SwipeCell, Toast, Loading } from "vant";
import { ammeterList, banID, bangammenter, userBalance } from "../../api";
import HeaderTop from "../../components/HeaderTop.vue";
import { setInterval, clearTimeout } from "timers";

export default {
  name: "APP",
  data() {
    return {
      show: true,
      isShow: false,
      link: "/aboutUs",
      ammeter: [],
      ammeterID: 0,
      ammeterData: {},
      deviceCode: "",
      surplusMoney: "",
      id: "",
      isOk: true,
      setout: "",
      setoutTwo: "",
      jiazai: false,
      totalEle: ""
    };
  },
  components: {
    HeaderTop
  },
  methods: {
    //查询用户电表列表
    async ammeters() {
      let page = 1;
      let limit = 1000;
      let userId = sessionStorage.getItem("userID");

      let reslut = await ammeterList(page, limit, userId);
      console.log("SSS", number);
      if (reslut.data.length > 0) {
        this.ammeter = reslut.data;
        this.show = true;
        this.isShow = false;
        if (this.ammeterID >= 0) {
          this.radio = reslut.data[0].id;
          this.ammeterID = number;
          this.surplusMoney = reslut.data[number].surplusMoney;
          this.totalEle = reslut.data[number].totalEle;
          this.id = reslut.data[number].id; //点表id
          this.deviceCode = reslut.data[number].deviceCode;
          this.ammeterData = reslut.data[number];
        }
      } else {
        this.show = false;
        this.isShow = true;
        this.ammeterData = {};
        this.ammeter = [];
        this.surplusMoney = "";
        this.totalEle = "";
        this.id = "";
        this.deviceCode = "";
      }
    },

    //添加电表
    addAmmeter() {
      this.$router.push({ path: `/userType` });
    },
    async delent(deviceCode) {
      let userId = sessionStorage.getItem("userID");
      let reslut = await bangammenter(deviceCode, userId);
      if (reslut.status == 1) {
        Toast.success(reslut.msg);
        number = 0;
        this.ammeters();
      }
    },
    //充值记录
    topUp() {
      let deviceCode = this.deviceCode;
      console.log(deviceCode);
      // this.$router.push({ path: `/recharge/${deviceCode}` });
      this.$router.push({
        name: "Recharge",
        params: {
          deviceCode
        }
      });
    },
    //选择电表
    choice(data, index) {
      console.log(data);
      number = index;
      this.ammeterID = number;
      console.log("SSS222", number);
      // let ammeterID = index;
      // sessionStorage.setItem("ammeterID", ammeterID);
      //this.ammeterID = sessionStorage.getItem("ammeterID");
      this.id = data.id; //点表id
      this.deviceCode = data.deviceCode;
      this.ammeterData = data;
      this.surplusMoney = data.surplusMoney;
      this.totalEle = data.totalEle;
    },
    //查询用户余额
    balance() {
      this.isOk = false;
      let id = this.id;
      let deviceCode = this.deviceCode;
      let type = "8";
      this.surplusMoney = "";
      this.totalEle = "";
      let deviceRead = {
        id,
        deviceCode,
        type
      };
      const dataArr = Object.values(deviceRead);
      for (let val of dataArr) {
        //验证
        if (!val) {
          return;
        }
      }

      userBalance(deviceRead)
        .then(res => {
          this.isOk = true;
          console.log("SSSS", res.code);
          let reslut = res.code;
          if (reslut == 0) {
            const toast = Toast.loading({
              duration: 0, // 持续展示 toast
              forbidClick: true,
              message: "采集数据中"
            });
            let second = 4;
            this.setout = window.setInterval(() => {
              second--;
              if (second) {
                toast.message = `采集数据: ${second} 秒`;
              } else {
                this.ammeters();
                clearInterval(this.setout);
                // 手动清除 Toast
                Toast.clear();
              }
            }, 1000);
            // this.setout = window.setTimeout(() => {
            //   this.isOk = true;
            //   this.jiazai = false;
            // }, 3000);
          } else {
            this.isOk = true;
            const toast = Toast.loading({
              duration: 0, // 持续展示 toast
              forbidClick: true,
              message: "采集数据中"
            });
            let second = 4;
            this.setoutTwo = window.setInterval(() => {
              second--;
              if (second) {
                toast.message = `采集数据: ${second} 秒`;
              } else {
                this.ammeters();
                clearInterval(this.setoutTwo);
                // 手动清除 Toast
                Toast.clear();
              }
            }, 1000);
          }
        })
        .catch(err => {});
    },
    //充值
    myWallet() {
      let deviceCode = this.deviceCode;
      console.log("deviceCode", deviceCode);
      if (deviceCode == "") {
        Toast.fail("请先选择电表");
      } else {
        this.$router.push({
          name: "Payment",
          params: {
            deviceCode
          }
        });
      }
      // if (this.ammeter.length > 0) {
      //   this.$router.push({
      //     name: "Payment",
      //     params: {
      //       deviceCode
      //     }
      //   });
      // } else {
      //   Toast.fail("请先添加电表");
      // }
    },
    //退出登录
    secedeLogin() {
      sessionStorage.clear();
      this.$router.push({ path: `/aboutUs` });
    }
  },
  mounted() {
    // if (sessionStorage.getItem("ammeterID")) {
    //   let ammeterID = sessionStorage.getItem("ammeterID");
    //   this.ammeterID = ammeterID;
    // } else {
    //   let ammeterID = 0;
    //   sessionStorage.setItem("ammeterID", ammeterID);
    // }
    console.log("this.$route.params", this.$route.params.index);
    let data = this.$route.params.index;
    if (data !== undefined) {
      number = data;
    }
    this.ammeters();
  },
  beforeDestroy() {
    window.clearInterval(this.setout);
    window.clearInterval(this.setoutTwo);
  }
};
</script>

<style scoped lang="less">
.wrap {
  //width: 100%;
  // height: 100%;
  margin-top: 0.45rem;
  display: flex;
  flex-direction: column;
  background: url("../../assets/img/backgound@2x.png") no-repeat;
  box-sizing: border-box;
  //  overflow-x: hidden;
  .jiazai {
    position: absolute;
    top: 2.3rem;
    left: 1rem;
    z-index: 999;
  }
  .header {
    width: 100%;
    height: 0.45rem;
    font-size: 0.16rem;
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
  .wrap_head {
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    margin-top: -0.1rem;
    z-index: 111111;
    // margin-right: -0.1rem;
    .top-text {
      color: #fff;
      font-size: 0.155rem;
      margin-left: 0.29rem;
      // margin-top: 0.2rem;
      .wrap_head_img {
        display: flex;
        margin-bottom: 0.15rem;
        line-height: 0.23rem;
        font-size: 0.155rem;
        > img {
          width: 0.2rem;
          height: 0.2rem;
        }
      }
    }
    .add {
      margin-right: 0.29rem;
    }
  }
  .top-content {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 0.1rem;
    box-sizing: border-box;
    color: #5fc6d2;
    position: relative;
    .top-content-text1 {
      position: absolute;
      font-size: 0.2rem;
      color: #fff;
      left: 0.2rem;
      // width: 1.2rem;
      // border: 0.01rem solid red;
      .text1 {
        // letter-spacing: 0.09rem;
      }
    }
    .top-content-text3 {
      top: 0.4rem;
      position: absolute;
      font-size: 0.2rem;
      color: #fff;
      left: 0.2rem;
      .text3 {
        letter-spacing: 0.1rem;
      }
    }
    .top-content-text2 {
      font-size: 0.155rem;
      color: #fff;
      margin-top: 1.5rem;
      width: 1.2rem;
      height: 0.3rem;
      text-align: center;
      line-height: 0.3rem;
      border-radius: 0.1rem;
      border: 0.02rem solid #fff;
    }
    .text2-two {
      margin-top: 0.3rem;
    }
  }
  .content {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    .content1 {
      margin-top: 0.3rem;
      background: url("../../assets/img/db_kuang@2x.png") no-repeat;
      width: 2.86rem;
      height: 1rem;
      overflow: hidden;
      .content1-img {
        width: 0.61rem;
        height: 0.57rem;
        img {
          width: 100%;
          height: 100%;
          margin: 0.22rem 0 0 0.29rem;
        }
      }
      .content1-right {
        box-sizing: border-box;
        width: 1.05rem;
        height: 0.57rem;
        margin-left: 1.5rem;
        margin-top: 0.2rem;
        .content1-right-p1 {
          font-size: 0.17rem;
          color: #5fc6d2;
          transform: translateY(-0.3rem);
        }
        .content1-right-p2 {
          font-size: 0.155rem;
          color: #5fc6d2;
          transform: translateY(-0.1rem);
        }
      }
    }
    .content2 {
      margin-top: 0.31rem;
    }
  }
  .bottom-wrap {
    box-sizing: border-box;
    width: 100%;
    color: #7adbbf;
    margin-top: 0.36rem;
    .bottom-wrap-p1 {
      margin-left: 0.4rem;
      font-size: 0.155rem;
    }
    .bottom-wrap-p2 {
      margin-left: 0.4rem;
      font-size: 0.155rem;
      margin-top: 0.09rem;
    }
    .bottom-wrap-p3 {
      margin-left: 0.4rem;
      font-size: 0.155rem;
      margin-top: 0.09rem;
    }
    .bottom-wrap-p4 {
      margin-left: 0.4rem;
      font-size: 0.155rem;
      margin-top: 0.09rem;
    }
  }
  .table {
    display: flex;
    padding-left: 0.25rem;
    padding-right: 0.1rem;
    .table_lift {
      width: 0.8rem;
      line-height: 0.4rem;
      font-size: 0.155rem;
    }
    .vancell {
      width: 3.5rem;
      font-size: 0.155rem;
      color: #000;
      font-family: sans-serif;
    }
    .table_yuan {
      width: 0.15rem;
      height: 0.14rem;
      border-radius: 50%;
      border: 0.01rem solid rgb(37, 37, 37);
      position: relative;
      margin-top: 0.12rem;
      .table_xin {
        width: 0.07rem;
        height: 0.07rem;
        background-color: #3e22a3;
        border-radius: 50%;
        position: absolute;
        left: 0;
        bottom: 0;
        right: 0;
        top: 0;
        margin: auto;
      }
    }
  }
}
</style>
