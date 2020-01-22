<template>
    <div class="wrap">
        <HeaderTop color="#7adbbf">注销成功</HeaderTop>
        <img class="img" src="../../assets/imgs/zxcg.png" alt="">
        <div class="text">注销成功请对其录入信息进行换表</div>
        <div class="btn">手动录入信息</div>
    </div>
</template>

<script>
import HeaderTop from '../../components/HeaderTop.vue';

export default {
  name: 'ChangeTemplate',
  data() {
    return {};
  },
  components: {
    HeaderTop,
  },
  methods: {},
  mounted() {
  },
};
</script>

<style scoped lang="less">
    .wrap{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        .img{
            margin-top: 2rem;
            width: 1.5rem;
            height: 1.2rem;
        }
        .text{
            margin-top: 0.5rem;
            color: #909090;
            font-size: 0.13rem;
        }
        .btn{
            margin-top: 1.2rem;
            width: 50%;
            height: 0.4rem;
            background-color: #88d0b0;
            border-radius: 0.2rem;
            color: #fff;
            font-size: 0.13rem;
            text-align: center;
            line-height: 0.4rem;
        }
    }

</style>
