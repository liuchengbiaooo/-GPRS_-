<template>
  <div class="wrap" @click="sumSwitch">
    <HeaderTop color="#7adbbf" :link="link">信息变更</HeaderTop>
    <div class="content-text-wraps">
      <div class="content-text-wrap">
        <div class="text-left">用户姓名:</div>
        <input
          class="text-right"
          type="text"
          maxlength="10"
          min="0"
          placeholder="输入用户姓名"
          v-model="userName"
        />
      </div>
      <div class="content-text-wrap">
        <div class="text-left">电表号:</div>
        <div class="text-right text-select">
          <span class="text-select-span" @click.stop="cilckSelect">{{ammeterMark}}</span>
          <!-- <img class="text-select-img" src="../../assets/imgs/bottom.png" alt />
          <ul class="text-cont" v-if="isShow">
            <li
              class="text-cont-li"
              v-for="(option,index) in options"
              :key="index"
              @click="cilckOption(option,index)"
            >{{option.deviceCode}}</li>
          </ul>-->
        </div>
      </div>
      <div class="content-text-wrap">
        <div class="text-left">电价类型:</div>
        <div class="text-right text-select" @click.stop="electrovalenceTypeShow">
          <span class="text-select-spanTwo">{{electrovalenceName}}</span>
          <img class="text-select-img" src="../../assets/imgs/bottom.png" alt />
          <ul class="text-cont text-cont-height" v-if="electrovalenceType">
            <li
              class="text-cont-li"
              v-for="(item,index) in electrovalenceList"
              :key="index"
              @click="electrovalence(item,index)"
            >{{item.tpyeName}}</li>
          </ul>
        </div>
      </div>
      <div class="content-text-wrap">
        <div class="text-left">电表类型:</div>
        <div class="text-right text-select">
          <span class="text-select-spanTwo" @click.stop="ammeterTypeIs">{{ammeterTypeName}}</span>
          <!-- <img class="text-select-img" src="../../assets/imgs/bottom.png" alt />
          <ul class="text-cont text-cont-height" v-if="ammeterTypeShow">
            <li
              class="text-cont-li"
              v-for="(item,index) in ammeterType"
              :key="index"
              @click="clickAmmeterType(item,index)"
            >{{item.name}}</li>
          </ul>-->
        </div>
      </div>
      <div class="content-text-wrap">
        <div class="text-left">当前电价:</div>
        <div class="text-right-text">{{priceMoney}}元/度电</div>
      </div>
      <div class="content-text-wrap">
        <div class="text-left">电表变比:</div>
        <input
          class="text-right"
          type="text"
          disabled="disabled"
          v-model="ratio"
          placeholder="默认为1"
        />
      </div>
      <div class="content-text-wrap">
        <div class="text-left">警报金额:</div>
        <div class="text-righttwo">
          <input type="text" placeholder="输入金额" class="text-rights" v-model="warningMoney" />
          <p class="yuan">元</p>
        </div>
      </div>
      <div class="content-text-wrap">
        <div class="text-left">超容断电:</div>
        <div class="text-righttwo">
          <input type="text"  class="text-rights" v-model="superOutage" />
          <p class="yuan">KW</p>
        </div>
        <!-- <div class="text-left">超容断电:</div>
        <input class="text-right" type="text" v-model="superOutage" />-->
      </div>
      <!-- <div class="content-text-wrap">
        <div class="text-left">限容方式:</div>
        <div class="text-righttwo">
          <span class="text-rights" @click.stop="mannerIS">{{mannerName}}</span>
          <ul class="text-cont text-righttwo-height" v-if="mannerShow">
            <li
              class="text-cont-li"
              v-for="(item,index) in mannerList"
              :key="index"
              @click="manner(item.id)"
            >{{item.name}}</li>
          </ul>
        </div>
      </div>-->
      <!-- <div class="content-text-wrap">
        <div class="text-left">费控状态:</div>
        <div class="text-righttwo">
          <span
            class="text-rights"
            @click.stop="feesChargedShow=!feesChargedShow"
          >{{feesChargedName}}</span>
          <ul class="text-cont text-righttwo-height" v-if="feesChargedShow">
            <li
              class="text-cont-li"
              v-for="(item,index) in feesChargedList"
              :key="index"
              @click="feesCharged(item.id,index)"
            >{{item.name}}</li>
          </ul>
        </div>
      </div>-->
      <div class="content-text-wrap">
        <div class="text-left">地址:</div>
        <input
          class="text-right"
          type="text"
          disabled="disabled"
          placeholder="输入电表地址"
          v-model="deviceAddress"
        />
      </div>
    </div>
    <div class="bottom-btn" @click="accomplish">完成</div>
  </div>
</template>

<script>
import { Toast } from "vant";
import HeaderTop from "../../components/HeaderTop.vue";
import {
  deviceAllList,
  electrovalences,
  ammeterEntering
} from "@/api/index.js";
import { mapState } from "vuex";
export default {
  name: "usingrecord",
  data() {
    return {
      options: [{ deviceCode: "暂无数据" }],
      isShow: false, //控制电表号
      ammeterMark: "",
      ammeterID: "", //电表ID
      electrovalenceName: "请选择",
      electrovalenceList: [{ tpyeName: "暂无数据" }],
      electrovalenceID: "", //电价ID
      electrovalenceType: false, //电价类型
      ammeterType: [
        { id: 1, name: "单项5(60)A" },
        { id: 2, name: "三相1.5(6)A" },
        { id: 3, name: "三相5(80)A" }
      ],
      ammeterTypeShow: false, //电表类型
      ammeterTypeName: "请选择",
      ammeterTypeID: "", //电表类型ID
      mannerName: "请选择",
      mannerShow: false, //限容方式
      mannerID: "", //限容方式ID
      mannerList: [{ id: 0, name: "不限" }, { id: 1, name: "限容" }],
      feesChargedList: [{ id: 1, name: "预付费" }, { id: 2, name: "后付费" }],
      feesChargedShow: false,
      feesChargedID: "", //费控状态ID
      feesChargedName: "请选择",
      userName: "", //用户姓名
      userPhone: "", //用户手机号
      ratio: "", //电表变比
      warningMoney: "", //报警金额
      superOutage: "", //超容断电
      deviceAddress: "", //地址
      link: "/myWallet",
      time: "",
      priceMoney: ""
    };
  },
  components: {
    HeaderTop
  },
  methods: {
    sumSwitch() {
      //总控制 isShow
      this.isShow = false;
      this.electrovalenceType = false;
      this.ammeterTypeShow = false;
      this.mannerShow = false;
      this.feesChargedShow = false;
    },
    cilckSelect() {
      //电表号 isShow
      this.mannerShow = false;
      this.electrovalenceType = false;
      this.isShow = !this.isShow;
    },
    cilckOption(key, index) {
      //选择电表号
      //key 电表ID

      //let key = key;
      console.log(key);
      this.ammeterID = key.id;
      this.ammeterMark = this.options[index].deviceCode;
    },
    electrovalence(key, index) {
      //选择电价类型
      //key 电价类型ID
      console.log(key);
      this.priceMoney = key.priceMoney;
      this.electrovalenceID = key.id;
      this.electrovalenceName = this.electrovalenceList[index].tpyeName;
    },
    electrovalenceTypeShow() {
      //电价类型 isShow
      console.log("SSSSS");
      this.electrovalenceType = !this.electrovalenceType;
      this.ammeterTypeShow = false;
      this.mannerShow = false;
    },
    ammeterTypeIs() {
      //电表类型 isShow
      this.ammeterTypeShow = !this.ammeterTypeShow;
      this.mannerShow = false;
    },
    clickAmmeterType(key, index) {
      //选择电表类型
      //key 电表类型ID
      console.log();
      let data = ["13.2", "3.96", "52.8"];
      this.superOutage = data[key.id - 1];
      this.ammeterTypeID = key.id;
      this.ammeterTypeName = this.ammeterType[index].name;
    },
    manner(key) {
      //选择限容方式
      //key 限容方式ID
      this.mannerID = key;
      this.mannerName = this.mannerList[key].name;
    },
    mannerIS() {
      //限容方式 isShow
      this.mannerShow = !this.mannerShow;
      this.feesChargedShow = false;
    },
    feesCharged(key, index) {
      //选择费控状态
      //key 费控状态ID
      this.feesChargedID = key;
      this.feesChargedName = this.feesChargedList[index].name;
      this.feesChargedShow = !this.feesChargedShow;
    },
    accomplish() {
      //完成
      let id = this.ammeterID; //电表ID
      let deviceCode = this.ammeterMark; //电表号
      let deviceTel = this.userPhone; //用户手机号
      let deviceType = this.ammeterTypeID; //电表类型ID
      let username = this.userName; //用户姓名
      let isCapacity = this.mannerID; //限容方式ID
      //let costStatus = this.feesChargedID; //费控状态ID
      let superOutage = this.superOutage; //超容断电
      let warningMoney = this.warningMoney; //报警金额
      let ratio = this.ratio; //变比
      let priceId = this.electrovalenceID; //电价ID
      let deviceAddress = this.deviceAddress;

      const deviceInfo = {
        id,
        deviceCode,
        deviceTel,
        deviceType,
        username,
        //costStatus,
        superOutage,
        warningMoney,
        ratio,
        priceId,
        deviceAddress
      };

      console.log("deviceInfo", deviceInfo);
      for (const val in deviceInfo) {
        if (deviceInfo[val] == null || deviceInfo[val] == "") {
          console.log(deviceInfo[val]);
          Toast.fail("请您把信息填完整");
          return;
        }
      }

      ammeterEntering(deviceInfo)
        .then(res => {
          console.log("res", res);
          let result = res;
          if (result.status == 1) {
            Toast.success(result.msg);
            this.time = setTimeout(() => {
              this.$router.push({ path: `/everyday` });
            }, 1500);
          } else {
            Toast.fail(result.msg);
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  computed: {
    ...mapState(["userInfo"])
  },
  async mounted() {
    let usercode = sessionStorage.ammeterData;
    let usammeter = JSON.parse(usercode);

    console.log("|", usammeter);
    this.feesChargedID = usammeter.costStatus;
    this.mannerID = usammeter.isCapacity;
    this.userName = usammeter.username;
    this.ammeterMark = usammeter.deviceCode;
    this.electrovalenceName = usammeter.tpyeName;
    this.ammeterTypeID = usammeter.deviceType;
    this.ammeterID = usammeter.id;
    this.userPhone = usammeter.deviceTel;

    if (usammeter.deviceType == 1) {
      this.ammeterTypeName = "单项5(60)A";
    } else if (usammeter.deviceType == 2) {
      this.ammeterTypeName = "三相1.5(6)A";
    } else if (usammeter.deviceType == 3) {
      this.ammeterTypeName = "三相5(80)A";
    }
    this.priceMoney = usammeter.priceMoney;
    this.ratio = usammeter.ratio;
    this.warningMoney = usammeter.warningMoney;
    this.superOutage = usammeter.superOutage;
    this.deviceAddress = usammeter.deviceAddress;

    let adminId = sessionStorage.getItem("userID"); //用户id
    let page = 1;
    let limit = 999;
    let result = await deviceAllList(adminId, page, limit);
    if (result.data.length > 0) {
      this.options = result.data;
    }
    let resultTwo = await electrovalences(adminId);
    if (resultTwo.data.length > 0) {
      this.electrovalenceList = resultTwo.data;
      this.electrovalenceList.forEach(itme => {
        if (itme.tpyeName == this.electrovalenceName) {
          this.electrovalenceID = itme.id;
        }
      });
    }
  },
  beforeDestroy() {
    clearTimeout(this.time);
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
    margin-top: 0.32rem;

    .content-text-wrap {
      margin-top: 0.2rem;
      width: 3.1rem;
      display: flex;
      box-sizing: border-box;
      align-items: center;
      .text-left {
        width: 1rem;
        font-size: 0.155rem;
        color: rgb(113, 113, 113);
        text-align: right;
      }
      .text-right-text {
        margin-left: 0.25rem;
        width: 2.1rem;
        height: 0.25rem;
        line-height: 0.25rem;
        font-size: 0.155rem;
        color: rgb(113, 113, 113);
      }
      .text-right {
        margin-left: 0.1rem;
        width: 2.1rem;
        height: 0.25rem;
        font-size: 0.155rem;
        color: rgb(113, 113, 113);
        border: 1px solid #d2d2d2;
        border-radius: 6px;
        padding-left: 15px;
      }
      .text-select {
        position: relative;
      }
      .text-select-span {
        position: absolute;
        width: 1.9rem;
        top: 0.05rem;
        color: rgb(113, 113, 113);
        left: 0.15rem;
      }
      .text-select-spanTwo {
        position: absolute;
        width: 1.9rem;
        top: 0.05rem;
        color: rgb(113, 113, 113);
        left: 0.15rem;
      }
      .text-select-img {
        position: absolute;
        right: 0;
      }
      .text-cont {
        position: absolute;
        border-radius: 6px;
        text-align: center;
        color: rgb(113, 113, 113);
        top: 0.25rem;
        border: 1px solid #d2d2d2;
        width: 2.07rem;
        left: -0.01rem;
        background-color: #fff;
        z-index: 999;
        // height: 3.2rem;
        overflow-y: auto;
        .text-cont-li {
          width: 100%;
          border-bottom: 1px solid #d2d2d2;
          height: 0.3rem;
          line-height: 0.3rem;
        }
      }
      .text-cont-height {
        // height: 1.9rem;
      }
      .text-righttwo {
        margin-left: 0.1rem;
        width: 2.1rem;
        height: 0.25rem;
        font-size: 0.155rem;
        color: rgb(113, 113, 113);
        border-radius: 4px;
        padding-left: 15px;
        display: flex;
        position: relative;
        line-height: 0.25rem;
        .text-righttwo-height {
          height: 0.62rem;
          width: 0.95rem;
          color: rgb(113, 113, 113);
        }
      }
      .text-rights {
        //margin-left: 0.1rem;
        position: absolute;
        left: 0;
        height: 0.25rem;
        font-size: 0.155rem;
        color: rgb(113, 113, 113);
        border: 1px solid #d2d2d2;
        border-radius: 4px;
        padding-left: 15px;

        width: 0.8rem;
      }
      .yuan {
        color: rgb(113, 113, 113);
        font-size: 0.155rem;
        margin-left: 0.95rem;
      }
    }
  }

  .bottom-btn {
    width: 60%;
    height: 0.5rem;
    background-color: #88d0b0;
    border-radius: 0.25rem;
    color: #fff;
    font-size: 0.2rem;
    text-align: center;
    line-height: 0.5rem;
    margin-top: 0.25rem;
  }
}
.select {
  border: 0px;
  outline: 1px solid rgb(204, 204, 204);
}
</style>
