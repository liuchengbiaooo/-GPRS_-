<template>
  <div class="wrap">
    <HeaderTop color="#7adbbf">缴交电费</HeaderTop>
    <div class="content-top">
      <div class="content-top1">
        <img src="../../assets/img/jjdf_dbxx@2x.png" alt="">
        <div>电表信息</div>
      </div>
      <div class="content-top2">
        <div class="content-top2-text1">用户姓名</div>
        <div>张勇</div>
      </div>
      <div class="content-top2">
        <div class="content-top2-text1">电表号码</div>
        <div>10244148</div>
      </div>
      <div class="content-top2">
        <div class="content-top2-text1">地址</div>
        <div class="content-top2-text2">深圳市宝安区前进二路辉宏花园A栋301号</div>
      </div>
    </div>

    <div class="content-bottom">
      <div class="content-bottom1">
        <img src="../../assets/img/jjdf_jfje@2x.png" alt="">
        <div>缴费金额</div>
      </div>

      <div class="content-bottom2">
        <div class="content-bottom2-big">
          <p class="p1">￥</p>
          <p class="p2">50.00</p>
        </div>
        <div class="content-bottom2-somll">您的剩余电费还剩11.32元</div>
      </div>
    </div>
    <div class="btn-wrap">
      <div class="btn">交电费</div>
    </div>
    
  </div>
</template>

<script>
    import HeaderTop from '../../components/HeaderTop.vue';

    export default {
        name: 'Payfess',
        data() {
            return {};
        },
        components: {
            HeaderTop,
        },
        methods: {
        },
        mounted() {
        },
    };
</script>

<style scoped lang="less">
.wrap {
  width: 100%;
  height: 100%;
  overflow-y: hidden;
  background-color: #f7f7f8;
  .content-top{
    margin-top: 0.45rem;
    padding-top: 0.21rem;
    background-color: #f7f7f8;
    .content-top1{
      width: 100%;
      height: 0.39rem;
      background-color: #fff;
      display: flex;
      align-items: center;
      border-bottom: 1px solid #ccc;
      img{
        width: 0.25rem;
        height: 0.25rem;
        margin-left: 0.26rem;
        margin-right: 0.17rem;
      }
      div{
        font-size: 0.13rem;
        color: #5fc6d2;
      }
    }
    .content-top2{
      background-color: #fff;
      width: 100%;
      height: 0.5rem;
      border-bottom: 1px solid #ccc;
      display: flex;
      align-items: center;
      color: #666;
      font-size: 0.13rem;
      .content-top2-text1{
        margin-left: 0.25rem;
        margin-right: 1.2rem;
      }
      .content-top2-text2{
        width: 1.59rem;
        height: 0.31rem;;
        font-size: 0.12rem;
      }
    }
  }
  .content-bottom{
    padding-top: 0.21rem;
    background-color: #f7f7f8;
    .content-bottom1{
      width: 100%;
      height: 0.39rem;
      background-color: #fff;
      display: flex;
      align-items: center;
      border-bottom: 1px solid #ccc;
      img{
        width: 0.25rem;
        height: 0.25rem;
        margin-left: 0.26rem;
        margin-right: 0.17rem;
      }
      div{
        font-size: 0.13rem;
        color: #5fc6d2;
      }
    }
    .content-bottom2{
      width: 100%;
      height: 1.19rem;
      background-color: #fff;
      position: relative;
      .content-bottom2-big{
        display: flex;
        justify-content: center;
        align-items: flex-end;
        width: 100%;
        height: 0.65rem;
        color: #666;
        .p1{
          font-size: 0.24rem;
          margin-right: 0.19rem;
          font-weight: bold;
        }
        .p2{
          font-size: 0.35rem;
          font-weight: bold;
        }
      }
      .content-bottom2-somll{
        font-size: 0.12rem;
        color: #ccc;
        position: absolute;
        left: 0.24rem;
        bottom: 0.16rem;
      }
    }
  }
  .btn-wrap{
    width: 100%;
    margin-top: 0.58rem;
    display: flex;
    justify-content: center;
    align-items: center;
    .btn{
      width: 3rem;
      height: 0.35rem;
      background-color: #88d0b0;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      font-size: 0.12rem;
      
    }
  }
  
}
</style>
