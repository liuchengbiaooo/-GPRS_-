<template>
    <div>
        <HeaderTop color="#323036" link="/advertising">模板选择</HeaderTop>
        <div class="warp">
            <ul class="conter">
                <li class="conter-li" @click="skipRouter">
                    <div class="li-top">
                        <div class="neirong">
                            <div class="tupian">64x64.gif</div>
                        </div>
                    </div>
                    <div class="li-bottom">
                        动态模板
                    </div>
                </li>
                <li class="conter-li" @click="skipRouter">
                    <div class="li-top">
                        <div class="text">
                            <span>四字静止</span>
                            <span>四字静止</span>
                            <span>向左滚动</span>
                        </div>
                    </div>
                    <div class="li-bottom">
                        三行文字
                    </div>
                </li>
                <li class="conter-li" @click="skipRouter">
                    <div class="li-top">
                        <div class="neirong">
                            <div class="tupian">64x64.gif</div>
                        </div>
                    </div>
                    <div class="li-bottom">
                        动态模板
                    </div>
                </li>
                <li class="conter-li" @click="skipRouter">
                    <div class="li-top">
                        <div class="text">
                            <span>四字静止</span>
                            <span>四字静止</span>
                            <span>向左滚动</span>
                        </div>
                    </div>
                    <div class="li-bottom">
                        三行文字
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import HeaderTop from '../../../components/HeaderTop.vue';

export default {
  name: 'CopyChoice',
  components: {
    HeaderTop,
  },
  data() {
    return {};
  },
  methods: {
    skipRouter() {
      this.$router.push('/template');
    },
  },
  mounted() {
  },
};
</script>

<style scoped lang="less">
    .warp{
        padding-top: 0.45rem;
        background-color: #F5F5F5;
        width: 100%;
        box-sizing: border-box;
        height: calc(100vh - 0.45rem);
        .conter{
            margin: 0.16rem 0.16rem 0 0.16rem;
            display: flex;
            justify-content: space-between;
            box-sizing: border-box;
            text-align: center;
            flex-wrap:wrap;
            .conter-li{
                width: 1.5rem;
                box-sizing: border-box;
                background-color: white;
                border-radius: 0.14rem;
                padding: 0.2rem 0.16rem 0.16rem 0.16rem;
                margin-bottom: 0.16rem;
                .neirong{
                    width: 100%;
                    height: 1rem;
                    background-color: black;
                    position: relative;
                    .tupian{
                        width: 0.64rem;
                        height: 0.64rem;
                        background-color: #707070;
                        color: white;
                        position: absolute;
                        left: 0;
                        right: 0;
                        bottom:0;
                        top: 0;
                        margin: auto;
                    }
                }
                .text{
                    width: 100%;
                    height: 1rem;
                    background-color: black;
                    position: relative;
                    color: white;
                    box-sizing: border-box;
                    >span{
                        display: block;
                        font-size: 0.14rem;
                        height: 0.26rem;
                        line-height: 0.26rem;
                    }
                }
                .li-bottom{
                    border-top: 1px solid #E2E2E2;
                    font-size: 0.18rem;
                    padding-top: 0.16rem;
                    color: black;
                    margin-top: 0.16rem;
                }
            }

        }
    }
</style>
