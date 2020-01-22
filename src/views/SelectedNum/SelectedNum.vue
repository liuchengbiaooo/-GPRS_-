<template>
  <div class="wrap">
    <HeaderTop color="#7adbbf" :link="link">售电查询</HeaderTop>
    <div class="sou">
      <input type="txt" placeholder="请输入关键字进行搜索" v-model="ammetertxt" />
    </div>
    <!-- <div class="header-top">
      <img src="../../assets/imgs/left.png" alt />
      <div class="header-top-text">2018年4月</div>
      <img src="../../assets/imgs/right.png" alt />
    </div>-->
    <div class="header-bootom">
      <!-- <div class="header-bootom-text1">选择区间</div> -->
      <div @click="selectTime">
        <input
          class="header-bootom-input"
          type="text"
          v-model="startTime"
          disabled="disabled"
          placeholder="开始时间"
        />
      </div>

      <!-- <div class="header-bootom-text2">一</div> -->
      <input class="header-bootom-input" type="text" disabled="disabled" v-model="endTime" />
    </div>

    <!-- <div class="content-wrap" v-if="ammenterList.length > 0">
      <div class="content1">
        <div>电表号</div>
        <div >用户名</div>
        <div>购电金额</div>
        <div style="width:38%">时间</div>
      </div>
      <div class="content1" v-for="(item,index) in ammenterList" :key="index">
        <div>{{item.deviceCode}}</div>
        <div>{{item.username}}</div>
        <div>{{item.money}}元</div>
        <div style="font-size:0.13rem;width:45%">{{item.createTime}}</div>
      </div>
       <div class="content1">
        <div>02</div>
        <div>张勇</div>
        <div>50元</div>
        <div class="red">未激活</div>
      </div>
      <div class="content1">
        <div>03</div>
        <div>张勇</div>
        <div>50元</div>
        <div class="hui">已注销</div>
      </div>
      <div class="content1">
        <div>04</div>
        <div>张勇</div>
        <div>50元</div>
        <div class="yellow">在使用</div>
      </div>
    </div>-->
    <div class="center" v-if="ammenterList.length > 0">
      <div class="item" v-for="(item,index) in ammenterList" :key="index">
        <div class="item-left">
          <div class="item-left-top">
            <div class="item-left-top1">电表号:{{item.deviceCode}}</div>
            <!-- <div class="item-left-top2">14:28:35</div> -->
          </div>
          <div class="item-left-bottom">{{item.createTime}}</div>
        </div>
        <div class="item-right">{{item.money}}元</div>
      </div>
    </div>
    <div v-else class="zan">暂未数据</div>

    <div class="time" v-show="isShow">
      <van-datetime-picker v-model="currentDate" type="date" @confirm="triumph" @cancel="defeated" />
    </div>
    <!-- <div class="btn">导出为Excel表格</div> -->
  </div>
</template>

<script>
import { ammeterMoney } from "../../api/index";
import { newDate, formatDate ,getBeforeDate} from "../../utils/time";
import HeaderTop from "../../components/HeaderTop.vue";
import { Toast } from "vant";
export default {
  name: "SelectedNum",
  data() {
    return {
      link: "/getCommission",
      currentDate: "",
      isShow: false,
      endTime: "",
      startTime: "",
      ammetertxt: "",
      ammenterList: []
    };
  },
  components: {
    HeaderTop
  },
  methods: {
    selectTime() {
      //   console.log("SSSS");
      this.isShow = true;
    },
    triumph(event) {
      let data = event;
      let time = this.time(data);
      
      let start_time = new Date(time);
      let end_time = new Date(this.endTime);
      if (start_time.getTime() > end_time.getTime()) {
        Toast.fail("开始日期不能大于结束日期");
      } else {
        this.startTime = time;
        this.isShow = false;
        let userId = sessionStorage.getItem("userID");
        let searchContent = this.ammetertxt;
        let page = "1";
        let limit = "10000";
        let createTimeStart = this.startTime;
        let createTimeEnd = this.endTime;
        this.ammeters(
          userId,
          page,
          limit,
          searchContent,
          createTimeEnd,
          createTimeStart
        );
      }
    },
    //查询电表
    async ammeters(
      userId,
      page,
      limit,
      searchContent,
      createTimeEnd,
      createTimeStart
    ) {
      let result = await ammeterMoney(
        userId,
        page,
        limit,
        searchContent,
        createTimeEnd,
        createTimeStart
      );
      if (result.status == 1) {
        this.ammenterList = result.data;
      }
    },
    defeated() {
      this.isShow = false;
    },
    time(data) {
      var d = new Date(data);
      var e = d.getFullYear();
      var f;
      var j;
      if (d.getMonth() + 1 < 10) {
        f = "0" + (d.getMonth() + 1);
      } else {
        f = d.getMonth() + 1;
      }

      if (d.getDate() < 10) {
        j = "0" + d.getDate();
      } else {
        j = d.getDate();
      }
      var cc = e + "-" + f + "-" + j;
      return cc;
    }
  },
  watch: {
    ammetertxt() {
      let searchContent = this.ammetertxt;
      let userId = sessionStorage.getItem("userID");
      let page = "1";
      let limit = "10000";
      let createTimeStart = this.startTime;
      let createTimeEnd = this.endTime;
      this.ammeters(
        userId,
        page,
        limit,
        searchContent,
        createTimeEnd,
        createTimeStart
      );
    }
  },
  mounted() {
    console.log(getBeforeDate(30))
    let time = newDate();
    this.endTime = time;
    this.startTime = getBeforeDate(30);
    let searchContent = this.ammetertxt;
    let userId = sessionStorage.getItem("userID");
    let page = "1";
    let limit = "10000";
    let createTimeStart = this.startTime;
    let createTimeEnd = this.endTime;
    this.ammeters(
      userId,
      page,
      limit,
      searchContent,
      createTimeEnd,
      createTimeStart
    );
  }
};
</script>

<style scoped lang="less">
.wrap {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  .center {
    // margin-top: 0.15rem;
    width: 100%;
    .item {
      display: flex;
      justify-content: space-between;
      width: 100%;
      height: 0.7rem;
      border-bottom: 1px solid #e8e8e8;
      .item-left {
        margin-left: 0.2rem;
        margin-top: 0.15rem;
        width: 1.74rem;
        height: 0.6rem;
        .item-left-top {
          display: flex;
          .item-left-top1 {
            font-size: 0.155rem;
            color: #666;
          }
          .item-left-top2 {
            font-size: 0.155rem;
            color: #666;
            margin-left: 0.3rem;
          }
        }
        .item-left-bottom {
          font-size: 0.155rem;
          color: #666;
          margin-top: 0.21rem;
        }
      }
      .item-right {
        widows: 0.8rem;
        height: 0.7rem;
        font-size: 0.21rem;
        color: #666;
        text-align: center;
        line-height: 0.7rem;
        margin-right: 0.2rem;
      }
    }
  }
  .sou {
    width: 94%;
    height: 0.35rem;
    background-color: rgb(226, 224, 224);
    // opacity: 0.1;
    font-size: 0.155rem;
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
  .zan {
    font-size: 0.155rem;
    margin-top: 0.5rem;
    color: rgb(73, 69, 69);
  }
  .header-bootom {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 0.1rem;
    .header-bootom-text1 {
      width: 0.7rem;
      font-size: 0.155rem;
      color: rgb(119, 119, 119);
    }
    .header-bootom-input {
      text-align: center;
      width: 0.8rem;
      height: 0.3rem;
      border: 1px solid #dededf;
      border-radius: 0.1rem;
      font-size: 0.145rem;
      background-color: rgb(234, 234, 235);
      //color: #fff;
      //   padding-left: 0.1rem;
    }
    .header-bootom-text2 {
      color: rgb(234, 234, 235);
      margin: 0 0.1rem;
    }
  }
  .content-wrap {
    width: 100%;
    margin-top: 0.1rem;
    .content1 {
      width: 95%;
      height: 0.4rem;
      display: flex;
      margin: 0 auto;
      justify-content: space-between;
      border-bottom: 1px solid #dededf;
      div {
        width: 25%;
        height: 0.4rem;
        text-align: center;
        line-height: 0.4rem;
        font-size: 0.155rem;
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
  .time {
    z-index: 9999;
    width: 100%;
    position: absolute;
    bottom: 0;
  }
}
</style>
