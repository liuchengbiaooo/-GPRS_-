<template>
  <div class="wrap">
    <HeaderTop color="#7adbbf" :link="link">电表APP</HeaderTop>
    <div class="input1-wrap2">
      <img class="input1-wrap-img2" src="../../assets/img/zxyhlx_db@2x.png" alt />
      <input type="text" name id="input1"  disabled="disabled" v-model="ammeter" placeholder="输入地址/电话/姓名/表号进行搜索" />
    </div>
    <div class="btn" @click="binding">绑定</div>
  </div>
</template>

<script>
import { Toast } from "vant";
import { bindingAmmeter } from "../../api";
import HeaderTop from "../../components/HeaderTop.vue";

export default {
  name: "MyWallet",
  data() {
    return {
      link: "/userType",
      ammeter: "",
      time:''
    };
  },
  components: {
    HeaderTop
  },
  methods: {
    async binding() {
      let deviceCode = this.ammeter;
      let userId = sessionStorage.getItem("userID");
      let result = await bindingAmmeter(deviceCode, userId);
      if(result.status == 0){
        Toast.fail(result.msg);
      }else{
        Toast.success(result.msg);
        this.time = setTimeout(()=>{
           this.$router.push({ name: `App`, params: {index:0} });
        },1000)
       
      }
    }
  },
  mounted() {
    this.ammeter = this.$route.params.deviceCode;
  },
  beforeDestroy(){
    clearTimeout(this.time)
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
  background-color: #fff;
  .input1-wrap2 {
    width: 100%;
    height: 0.4rem;
    background-color: #f7f7f8;
    margin-top: 0.55rem;
    display: flex;
    align-items: center;
    position: relative;
    .input1-wrap-img2 {
      width: 0.24rem;
      height: 0.16rem;
      margin-left: 0.2rem;
    }
    #input1 {
      height: 0.27rem;
      width: 3rem;
      margin-left: 0.16rem;
      border-radius: 0.14rem;
      color: #000;
      font-size: 0.155rem;

      background-color: #f7f7f8;
    }
    .input-btn {
      width: 0.5rem;
      height: 0.2rem;
      text-align: center;
      line-height: 0.2rem;
      color: #fff;
      font-size: 0.155rem;
      background-color: #88d0b0;
      border-radius: 0.05rem;
      position: absolute;
      top: 0.1rem;
      right: 0.2rem;
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
    margin-top: 1rem;
  }
}
</style>
