<template>
    <div class="wrap">
        <HeaderTop color="#7adbbf">自定义电价</HeaderTop>
        <div class="content-wrap">
          <div class="content-one">
            <div class="content-one-text">1.电价类型:</div>
            <input class="content-one-input" type="text">
          </div>
        </div>

        <div class="content-wrap content-wraps">
          <div class="content-one">
            <div class="content-one-text"> 电价:</div>
            <input class="content-one-input line-input" type="text">
            <div class="content-one-texts">/度电</div>
          </div>
        </div>

        <div class="img-wrap">
          <img src="../../assets/imgs/zdydj.png" alt="">
          <div class="img-wrap-text">添加电价类型</div>
        </div>
    </div>
</template>

<script>
import HeaderTop from '../../components/HeaderTop.vue';

export default {
  name: 'CommonProblems',
  data() {
    return {
    };
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
    .wrap{
        width: 100%;
        overflow-y: hidden;
        .content-wrap{
          width: 80%;
          margin-top: 0.8rem;
          .content-one{
            
            margin-left: 0.35rem;
            display: flex;
            align-items: center;
            .content-one-text{
              width: 2rem;
              font-size: 0.13rem;
              color: #666;
              text-align: end;
            }
            .content-one-input{
              margin-left: 0.1rem;
              width: 3rem;
              height: 0.25rem;
              border: 1px solid #e4e3e4;
              border-radius: 4px;
            }
            .line-input{
              margin-left: 0.1rem;
               width: 0.8rem;
            }
            .content-one-texts{
              width: 2rem;
              font-size: 0.13rem;
              color: #e0e0e1;
              margin-left: 0.1rem;
            }
          }
        }
        .content-wraps{
          margin-top: 0.2rem;
          margin-left: 0.2rem;
        }
        .img-wrap{
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 40%;
          img{
            width: 0.7rem;
            height: 0.7rem;
          }
          .img-wrap-text{
            font-size: 0.13rem;
            color: #aeaeaf;
            margin-top: 0.3rem;
          }
        }
    }

</style>
