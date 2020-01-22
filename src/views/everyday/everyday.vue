<template>
  <div class="warp">
    <HeaderTop color="#7adbbf" :link="link">日常业务</HeaderTop>
    <div class="sou">
      <input type="txt" placeholder="请输入关键字进行搜索" v-model="ammetertxt" />
    </div>
    <div class="recharge">
      <div class="recharge_hear">
        <div>最近充值记录</div>
        <div class="recharge-div" @click="isShow">
          <img v-if="Show" src="../../assets/img/xiangxia.png" class="head_img" />
          <img v-else src="../../assets/img/xiangshang.png" class="head_img" />
        </div>
      </div>
      <div v-show="Show">
        <div class="recharge_conter" v-for="(item,index) in rechargeList" :key="index">
          <div class="conter">
            <div>{{item.username}}</div>
            <div>{{item.createTime}}</div>
          </div>
          <div class="conter">
            <div>电表号：{{item.deviceCode}}</div>
            <div>{{item.money}}元</div>
          </div>
        </div>
        <!-- <div class="recharge_conter">
          <div class="conter">
            <div>战鼓</div>
            <div>2019-18111</div>
          </div>
          <div class="conter">
            <div>电表号：1514151</div>
            <div>20元</div>
          </div>
        </div>-->
      </div>
    </div>
    <div class="ammeter" style="height: 5rem;">
      <div class="txt">电表信息</div>
      <div ref="wrapper" style="height: 4.7rem;">
        <div v-if="ammeterList.length > 0">
          <div class="ammeter_conter" v-for="(item,index) in ammeterList" :key="index">
            <div class="txt">
              <div>电表号：{{item.deviceCode}}</div>
              <div>地址： {{item.deviceAddress}}</div>
            </div>
            <div class="btn">
              <div class="bbt lef" @click="clickshe(item)">设置</div>
              <div class="bbt rig" @click="clickRecharge(item)">充值</div>
            </div>
          </div>
        </div>
        <div v-else class="wu">暂无信息</div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import { allAmmeter, rechargeMoney } from "../../api/index";
import HeaderTop from "../../components/HeaderTop.vue";
export default {
  props: {},
  data() {
    return {
      link: "/getCommission",
      Show: false,
      ammeterList: [],
      ammetertxt: "",
      rechargeList: [],
      page: 1
    };
  },
  computed: {},
  created() {},
  mounted() {
    this.recharge();
    //this.ammeters();
  },
  watch: {
    ammetertxt() {
      this.ammeters();
    },
    // ammeterList() {
    //   this.$nextTick(() => {
    //     if (!this.scroll) {
    //       this.scroll = new BScroll(this.$refs.wrapper, {
    //         click: true,
    //         pullUpLoad: true
    //       });
          
    //       this.scroll.on("pullingUp", () => {
    //         this.page = ++this.page;
    //         let adminId = sessionStorage.getItem("userID");
    //         let searchContent = this.ammetertxt;
    //         let page = this.page;
    //         let limit = "10";
    //         allAmmeter(adminId, searchContent, page, limit)
    //           .then(res => {
    //             if(res.data.length > 0){
    //               this.ammeterList = this.ammeterList.concat(res.data);
    //               this.fn()
    //             }
    //           })
    //           .catch(err => {});
    //       });
    //     }
    //   });
    // }
  },
  methods: {
    fn() {
      this.scroll.finishPullUp();
      this.scroll.refresh();
    },
    isShow() {
      this.Show = !this.Show;
    },
    //查询充值记录
    async recharge() {
      let userId = sessionStorage.getItem("userID");
      let result = await rechargeMoney(userId);
      if (result.status == 1) {
        this.rechargeList = result.data;
      }
    },
    //查询所有的电表
    ammeters() {
      let adminId = sessionStorage.getItem("userID");
      let searchContent = this.ammetertxt;
      let page = this.page;
      let limit = "100000";
      allAmmeter(adminId, searchContent, page, limit)
        .then(res => {
          this.ammeterList = res.data;
        })
        .catch(err => {});
      // if (result.status == 1) {
      //   this.ammeterList = result.data;
      // }
    },

    //点击充值按钮
    clickRecharge(value) {
      let data = {};
      data.id = value.id;
      data.name = value.username;
      data.deviceCode = value.deviceCode;
      data.deviceAddress = value.deviceAddress;
      this.$router.push({
        name: "rechargeTwo",
        params: data
      });
      // console.log(value);
    },
    //点击设置
    clickshe(item) {
      let data = item;
      let user = JSON.stringify(data);
      sessionStorage.ammeterData = user;
      this.$router.push({
        name: "MyWallet"
        //params: data
      });
    }
  },
  components: {
    HeaderTop
  },
  created() {
    this.ammeters();
  }
};
</script>

<style scoped lang="less">
.warp {
  padding: 0.1rem 0.1rem 0rem 0.1rem;
  box-sizing: border-box;
  .sou {
    width: 100%;
    height: 0.35rem;
    background-color: rgb(226, 224, 224);
    // opacity: 0.1;
    font-size: 0.155rem;
    // color: #fff;
    margin-top: 0.45rem;
    border-radius: 0.1rem;
    // padding-left: 0.1rem;
    z-index: 99999;
    > input {
      margin-left: 0.1rem;
      height: 100%;
      width: 90%;
      color: rgb(66, 63, 63);
      background-color: rgb(226, 224, 224);
    }
  }
  .recharge {
    width: 100%;
    // border: 0.01rem solid red;
    margin-top: 0.2rem;
    .recharge_hear {
      width: 100%;
      display: flex;
      line-height: 1.5;
      justify-content: space-between;
      font-size: 0.155rem;
      margin-bottom: 0.1rem;

      .recharge-div {
        width: 0.8rem;
        // border: 0.01rem solid red;
        position: relative;
        .head_img {
          width: 0.2rem;
          height: 0.2rem;
          position: absolute;
          right: 0.01rem;
        }
      }
    }
    .recharge_conter {
      width: 100%;
      //   height: 0.4rem;
      //   margin-top: 0.2rem;
      border-bottom: 0.001rem solid rgb(179, 177, 177);
      padding-bottom: 0.05rem;
      padding-top: 0.05rem;
      .conter {
        width: 100%;
        display: flex;
        justify-content: space-between;
        font-size: 0.155rem;
        line-height: 0.2rem;
      }
    }
  }
  .ammeter {
    // margin-top: 0.5rem;
    .txt {
      font-size: 0.155rem;
      margin-bottom: 0.1rem;
      // font-weight: bold;
    }
    .ammeter_conter {
      width: 100%;
      display: flex;
      justify-content: space-between;
      border-bottom: 0.001rem solid rgb(179, 177, 177);
      padding-top: 0.05rem;
      .txt {
        font-size: 0.155rem;
        line-height: 0.17rem;
        //   font-weight: bold;
      }
      .btn {
        display: flex;
        .bbt {
          width: 0.6rem;
          font-size: 0.155rem;
          height: 0.35rem;
          background-color: #7adbbf;
          text-align: center;
          color: #fff;
          line-height: 0.35rem;
          border-radius: 0.1rem;
        }
        .rig {
          margin-left: 0.2rem;
        }
        .lef {
          margin-left: 0.1rem;
        }
      }
    }
    .wu {
      font-size: 0.155rem;
      margin-top: 1rem;
      text-align: center;
      color: rgb(73, 69, 69);
    }
  }
}
</style>
