<template>
  <div class="wrap">
    <HeaderTop color="#7adbbf" :link="link">用户信息</HeaderTop>
    <div class="content-text-wraps">
      <div class="content-text-wrap">
        <div class="text-left">用户姓名:</div>
        <div class="text-right">{{username}}</div>
      </div>
      <div class="content-text-wrap">
        <div class="text-left">手机号码:</div>
        <div class="text-right">{{deviceTel}}</div>
      </div>
      <div class="content-text-wrap">
        <div class="text-left">电表号:</div>
        <div class="text-right">{{deviceCode}}</div>
      </div>
      <div class="content-text-wrap">
        <div class="text-left">用户类型:</div>
        <div class="text-right">{{tpyeName}}</div>
      </div>
      <div class="content-text-wrap">
        <div class="text-left">当前电价:</div>
        <div class="text-right">{{priceMoney}}元/度电</div>
      </div>
      <div class="content-text-wrap">
        <div class="text-left">电表变比:</div>
        <div class="text-right">{{ratio}}</div>
      </div>
      <div class="content-text-wrap">
        <div class="text-left">警报金额:</div>
        <div class="text-right">{{warningMoney}}元</div>
      </div>
      <div class="content-text-wrap">
        <div class="text-left">超容断电:</div>
        <div class="text-right">{{superOutage}}KW</div>
      </div>
      <div class="content-text-wrap">
        <div class="text-left">充值次数:</div>
        <div class="text-right">{{sellCount}}次</div>
      </div>
      <div class="content-text-wrap">
        <div class="text-left">剩余金额:</div>
        <div class="text-right">{{surplusMoney}}元</div>
      </div>
      <div class="content-text-wrap">
        <div class="text-left">模块号:</div>
        <div class="text-right">{{gpresCode}}</div>
      </div>
      <div class="content-text-wrap">
        <div class="text-left">电表地址:</div>
        <div class="text-right">{{deviceAddress}}</div>
      </div>
    </div>

    <div class="content-bottom"></div>
    <div class="content-bottom">
      <div class="content-item" @click="select2">
        <div class="content-bottom-img">
          <img src="../../assets/imgs/yhxx_bg.png" alt />
        </div>
        <div class="content-bottom-text">变更&nbsp;&nbsp;&nbsp;&nbsp;</div>
      </div>
      <div class="content-item" @click="select3">
        <div class="content-bottom-img">
          <img src="../../assets/imgs/yhxx_bg.png" alt />
        </div>
        <div class="content-bottom-text">注销&nbsp;&nbsp;&nbsp;&nbsp;</div>
      </div>
      <div class="content-item" @click="rechargeQ">
        <div class="content-bottom-img">
          <img src="../../assets/imgs/yhxx_bg.png" alt />
        </div>
        <div class="content-bottom-text" v-if="isPay ==  1 ">允许充值</div>
        <div class="content-bottom-text" v-else>禁止充值</div>
      </div>
    </div>
    <div class="content-bottom">
      <div class="content-item" @click="electric">
        <div class="content-bottom-text" style="text-align: center; width:100% ; margin:0rem">保电</div>
      </div>
      <div class="content-item" @click="openSwitch">
        <div class="content-bottom-text" style="text-align: center; width:100% ;margin:0rem">强制拉闸</div>
      </div>
      <div class="content-item" @click="relieveSwitch">
        <div class="content-bottom-text" style="text-align: center; width:100% ;margin:0rem">解除拉闸/保电</div>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
import { logoutAmmeter, BanTopUp } from "../../api/index";
import HeaderTop from "../../components/HeaderTop.vue";

export default {
  name: "MyWallet",
  data() {
    return {
      link: "/everyday",
      title: "允许",
      id: "",
      username: "",
      deviceTel: "",
      deviceCode: "",
      warningMoney: "",
      deviceAddress: "",
      superOutage: "",
      ratio: "",
      priceMoney: "",
      tpyeName: "",
      sellCount: "",
      surplusMoney: "",
      gpresCode: "",
      isPay: "",
      data: {}
    };
  },
  components: {
    HeaderTop
  },
  methods: {
    select3() {
      let that = this;
      this.$createDialog({
        type: "confirm",
        icon: "cubeic-alert",
        title: "提示",
        content: "是否对其注销电表",
        confirmBtn: {
          text: "确定",
          active: true,
          disabled: false,
          href: "javascript:;"
        },
        cancelBtn: {
          text: "取消",
          active: false,
          disabled: false,
          href: "javascript:;"
        },
        onConfirm: () => {
          let id = that.id;
          let deviceCode = that.deviceCode;
          let type = "4";
          let deviceRead = {
            id,
            deviceCode,
            type
          };
          logoutAmmeter(deviceRead)
            .then(res => {
              if (res.code == 0) {
                Toast.success("注销成功");
              } else {
                Toast.fail(res.msg);
              }
            })
            .catch(err => {});
        },
        onCancel: () => {
          this.$createToast({
            type: "warn",
            time: 1000,
            txt: "点击取消按钮"
          }).show();
        }
      }).show();
    },
    select2() {
      let data = this.data;
      this.$router.push({
        name: "ProblemComplaint",
        params: data
      });
    },
    async rechargeQ() {
      // let id = this.id;
      // let payStatus = this.isPay == 0 ? "1" : "0";
      // let reslut = await BanTopUp(id, payStatus);
      // if (reslut.status == 1) {
      //   Toast.success(reslut.msg);
      //   this.isPay = payStatus == 0 ? "0" : "1";
      // } else {
      //   Toast.fail(reslut.msg);
      // }
      this.$createDialog({
        type: "confirm",
        icon: "cubeic-alert",
        title: "提示",
        content: "是否对其进行充值操作",
        confirmBtn: {
          text: "确定",
          active: true,
          disabled: false,
          href: "javascript:;"
        },
        cancelBtn: {
          text: "取消",
          active: false,
          disabled: false,
          href: "javascript:;"
        },
        onConfirm: () => {
          let id = this.id;
          let payStatus = this.isPay == 0 ? "1" : "0";
          BanTopUp(id, payStatus)
            .then(res => {
              if (res.status == 1) {
                Toast.success(res.msg);
                this.isPay = payStatus == 0 ? "0" : "1";
              } else {
                Toast.fail(res.msg);
              }
            })
            .catch(err => {});
        },
        onCancel: () => {
          this.$createToast({
            type: "warn",
            time: 1000,
            txt: "点击取消按钮"
          }).show();
        }
      }).show();
    },
    //保电
    electric() {
      let that = this;
      this.$createDialog({
        type: "confirm",
        icon: "cubeic-alert",
        title: "提示",
        content: "是否对其进行保电",
        confirmBtn: {
          text: "确定",
          active: true,
          disabled: false,
          href: "javascript:;"
        },
        cancelBtn: {
          text: "取消",
          active: false,
          disabled: false,
          href: "javascript:;"
        },
        onConfirm: () => {
          let id = that.id;
          let deviceCode = that.deviceCode;
          let type = "6";
          let deviceRead = {
            id,
            deviceCode,
            type
          };
          logoutAmmeter(deviceRead)
            .then(res => {
              if (res.code == 0) {
                Toast.success("保电成功");
              } else {
                Toast.fail(res.msg);
              }
            })
            .catch(err => {});
        },
        onCancel: () => {
          this.$createToast({
            type: "warn",
            time: 1000,
            txt: "点击取消按钮"
          }).show();
        }
      }).show();
    },
    //强制拉闸
    openSwitch() {
      let that = this;
      this.$createDialog({
        type: "confirm",
        icon: "cubeic-alert",
        title: "提示",
        content: "是否对其进行拉闸",
        confirmBtn: {
          text: "确定",
          active: true,
          disabled: false,
          href: "javascript:;"
        },
        cancelBtn: {
          text: "取消",
          active: false,
          disabled: false,
          href: "javascript:;"
        },
        onConfirm: () => {
          let id = that.id;
          let deviceCode = that.deviceCode;
          let type = "5";
          let deviceRead = {
            id,
            deviceCode,
            type
          };
          logoutAmmeter(deviceRead)
            .then(res => {
              if (res.code == 0) {
                Toast.success("拉闸成功");
              } else {
                Toast.fail(res.msg);
              }
            })
            .catch(err => {});
        },
        onCancel: () => {
          this.$createToast({
            type: "warn",
            time: 1000,
            txt: "点击取消按钮"
          }).show();
        }
      }).show();
    },
    //解除拉闸
    relieveSwitch() {
      let that = this;
      this.$createDialog({
        type: "confirm",
        icon: "cubeic-alert",
        title: "提示",
        content: "是否解除拉闸",
        confirmBtn: {
          text: "确定",
          active: true,
          disabled: false,
          href: "javascript:;"
        },
        cancelBtn: {
          text: "取消",
          active: false,
          disabled: false,
          href: "javascript:;"
        },
        onConfirm: () => {
          let id = that.id;
          let deviceCode = that.deviceCode;
          let type = "7";
          let deviceRead = {
            id,
            deviceCode,
            type
          };
          logoutAmmeter(deviceRead)
            .then(res => {
              if (res.code == 0) {
                Toast.success("解除拉闸成功");
              } else {
                Toast.fail(res.msg);
              }
            })
            .catch(err => {});
        },
        onCancel: () => {
          this.$createToast({
            type: "warn",
            time: 1000,
            txt: "点击取消按钮"
          }).show();
        }
      }).show();
    }
  },
  mounted() {
    let usercode = sessionStorage.ammeterData;
    let usammeter = JSON.parse(usercode);

    this.data = usammeter.params;
    this.id = usammeter.id;
    this.username = usammeter.username;
    this.deviceTel = usammeter.deviceTel;
    this.deviceCode = usammeter.deviceCode;
    this.warningMoney = usammeter.warningMoney;
    this.deviceAddress = usammeter.deviceAddress;
    this.superOutage = usammeter.superOutage;
    this.ratio = usammeter.ratio;
    this.priceMoney = usammeter.priceMoney;
    this.tpyeName = usammeter.tpyeName;
    this.sellCount = usammeter.sellCount;
    this.gpresCode = usammeter.gpresCode;
    this.surplusMoney = usammeter.surplusMoney;
    this.isPay = usammeter.isPay;
  }
};
</script>

<style scoped lang="less">
.wrap {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .content-text-wraps {
    margin-top: 0.7rem;

    .content-text-wrap {
      margin-top: 0.2rem;
      width: 3.1rem;
      display: flex;

      .text-left {
        width: 0.8rem;
        font-size: 0.155rem;
        color: rgb(113, 113, 113);
        text-align: right;
      }

      .text-right {
        margin-left: 0.2rem;
        width: 2.1rem;
        font-size: 0.155rem;
        color: rgb(113, 113, 113);
      }
    }
  }

  .content-bottom {
    width: 96%;
    margin-top: 0.15rem;
    display: flex;
    justify-content: space-between;
    .content-item {
      width: 32%;
      height: 0.5rem;
      border-radius: 6px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: rgb(122, 219, 191);

      .content-bottom-img {
        width: 0.3rem;
        height: 0.3rem;
        margin-left: 0.1rem;
        img {
          width: 100%;
          height: 100%;
        }
      }

      .content-bottom-text {
        font-size: 0.155rem;
        color: #fff;
        margin-right: 0.1rem;
      }
    }
  }
}
</style>
