<template>
  <div class="wrap">
    <HeaderTop color="#7adbbf" :link="link">用户查询</HeaderTop>
    <div class="sou">
      <input type="txt" placeholder="请输入关键字进行搜索" v-model="ammetertxt" />
    </div>
    <!-- <div class="header-top">
      <img src="../../assets/imgs/left.png" alt />
      <div class="header-top-text">2018年4月</div>
      <img src="../../assets/imgs/right.png" alt />
    </div>
    <div class="header-bootom">
      <div class="header-bootom-text1">选择区间</div>
      <input class="header-bootom-input" type="text" placeholder="2018.04" />
      <div class="header-bootom-text2">一</div>
      <input class="header-bootom-input" type="text" placeholder="2018.04" />
    </div>-->

    <div class="content-wrap">
      <div class="content1">
        <div style="width:10%">编号</div>
        <div style="width:15%">用户名</div>
        <div style="width:25%">电表号</div>
        <div>地址</div>
        <div style="width:18%">保电状态</div>
        <div style="width:17%">状态查询</div>
        <div>电表状态</div>
      </div>
      <div class="tct" v-if="ammenterList.length == 0">暂未数据</div>
      <div v-else style="height: 5rem;">
        <div style="height: 4.7rem;" ref="wrapper">
          <div class="content1" v-for="(item,index) in ammenterList" :key="index">
            <div style="width:10%">{{index + 1}}</div>
            <div style="width:15%">{{item.username}}</div>
            <div style="width:25%">{{item.deviceCode}}</div>
            <div class="dizhi">
              <div>{{item.deviceAddress }}</div>
            </div>
            <div style="width:18%">
              <div v-if="item.keepStatus == 1" class="yellow" style="width:100%">合闸</div>
              <div v-else-if="item.keepStatus == 64" class="red" style="width:100%">强制拉闸</div>
              <div v-else-if="item.keepStatus == 129" class="yellow" style="width:100%">保电</div>
              <div v-else-if="item.keepStatus == 0" class="red" style="width:100%">普通拉闸</div>
            </div>
            <div v-if="item.gpresStatus == 0" style="width:17%">在线</div>
            <div v-else style="width:17%">离线</div>
            <div class="red" v-if="item.deviceStatus == '1' ">未录入</div>
            <div class="yellow" v-else-if="item.deviceStatus == '2' ">已录入</div>
            <div class="yellow" v-else-if="item.deviceStatus == '3' ">已开户</div>
            <div class="red" v-else-if="item.deviceStatus == '4' ">已销户</div>
            <div class="red" v-else-if="item.deviceStatus == '5' ">已销毁</div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="btn">导出为Excel表格</div> -->
  </div>
</template>

<script>
import BScroll from "better-scroll";
import { allAmmeter } from "../../api/index";
import HeaderTop from "../../components/HeaderTop.vue";

export default {
  name: "SelectedNum",
  data() {
    return {
      link: "/getCommission",
      ammenterList: [],
      ammetertxt: "",
      page: 1
    };
  },
  components: {
    HeaderTop
  },
  watch: {
    ammetertxt() {
      this.ammenters();
    }
    // ammenterList() {
    //   this.$nextTick(() => {
    //     if (!this.scroll) {
    //       this.scroll = new BScroll(this.$refs.wrapper, {
    //         click: true,
    //         pullUpLoad: true
    //       });
    //       this.scroll.on("pullingUp", () => {});
    //     }
    //   });
    // }
  },
  methods: {
    async ammenters() {
      let adminId = sessionStorage.getItem("userID");
      let searchContent = this.ammetertxt;
      let page = this.page;
      let limit = "15000";
      let result = await allAmmeter(adminId, searchContent, page, limit);
      if (result.status == 1) {
        this.ammenterList = result.data;
      }
    }
  },
  created() {
    this.ammenters();
  }
};
</script>

<style scoped lang="less">
.wrap {
  display: flex;
  // overflow-x: auto;
  flex-direction: column;
  align-items: center;
  .sou {
    width: 94%;
    height: 0.35rem;
    background-color: rgb(226, 224, 224);
    // opacity: 0.1;
    font-size: 0.14rem;
    // color: #fff;
    margin-top: 0.55rem;
    border-radius: 0.1rem;
    // padding-left: 0.1rem;
    > input {
      margin-left: 0.1rem;
      height: 100%;
      width: 90%;
      color: rgb(66, 63, 63);
      background-color: rgb(226, 224, 224);
    }
  }
  .header-top {
    margin-top: 0.6rem;
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
      width: 0.22rem;
      height: 0.22rem;
    }
    .header-top-text {
      font-size: 0.155rem;
      color: rgb(179, 179, 180);
    }
  }
  .header-bootom {
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: 0.2rem;
    .header-bootom-text1 {
      width: 0.7rem;
      font-size: 0.155rem;
      color: rgb(119, 119, 119);
    }
    .header-bootom-input {
      width: 0.6rem;
      height: 0.2rem;
      border: 1px solid #a2dac6;
      border-radius: 0.1rem;
      background-color: rgb(234, 234, 235);
      color: #fff;
      padding-left: 0.1rem;
    }
    .header-bootom-text2 {
      color: rgb(234, 234, 235);
      margin: 0 0.1rem;
    }
  }
  .content-wrap {
    width: 100%;
    margin-top: 0.1rem;
    height: 100vh;
    box-sizing: border-box;
    overflow-x: auto;
    // overflow-y: hidden;
    .content1 {
      width: 115%;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #a2dac6;
      box-sizing: border-box;
      div {
        width: 20%;
        height: 0.4rem;
        text-align: center;
        line-height: 0.4rem;
        font-size: 0.14rem;
        color: rgb(107, 107, 107);
      }
      .yellow {
        color: rgb(109, 237, 53);
      }
      .hui {
        color: rgb(194, 193, 193);
      }
      .red {
        color: rgb(219, 124, 124);
      }
      .dizhi {
        width: 20%;
        font-size: 0.125rem;
        text-align: center;
        div {
          width: 100%;
          height: 50%;
          text-align: center;
          font-size: 0.125rem;
          line-height: 0.13rem;
        }
      }
    }
    .tct {
      text-align: center;
      font-size: 0.155rem;
      margin-top: 0.5rem;
      color: rgb(73, 69, 69);
    }
  }
  .btn {
    width: 50%;
    height: 0.4rem;
    border-radius: 0.2rem;
    background-color: rgb(136, 208, 176);
    font-size: 0.155rem;
    color: #fff;
    text-align: center;
    line-height: 0.4rem;
    margin-top: 2rem;
  }
}
</style>
