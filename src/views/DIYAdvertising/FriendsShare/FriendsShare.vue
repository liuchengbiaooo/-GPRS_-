<template>
    <div class="fenxiang">
        <HeaderTop color="#323036" link="/equipment">分享好友</HeaderTop>
        <div class="warp">
            <div class="text">你的好友XXX邀请您同步DIY广告制作</div>
            <div class="center-middle">
                <div class="particulars">
                    <img src="../../../assets/images/ic_id.png"/>
                    <span>设备ID:  482626151</span>
                </div>
                <div class="particulars">
                    <img src="../../../assets/images/ic_id.png"/>
                    <span>设备名称:  哈哈</span>
                </div>
                <div class="particulars">
                    <img src="../../../assets/images/ic_dizhi.png"/>
                    <span>设备地址:  XXXXXXX</span>
                </div>
            </div>
            <div class="btn">
                <button>添加广告</button>
            </div>
        </div>
    </div>
</template>

<script>
import HeaderTop from '../../../components/HeaderTop.vue';

export default {
  name: 'FriendsShare',
  components: {
    HeaderTop,
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {
  },
};
</script>

<style scoped lang="less">
    .fenxiang{
        position: relative;
    }
    .warp{
        width: 100%;
        padding-top: 0.45rem;
        height: calc(100vh);
        background: url("../../../assets/images/bg_shumu.png") no-repeat;
        background-size:100% ;
        box-sizing: border-box;
        position: relative;
        .text{
            position: absolute;
            font-size: 0.15rem;
            top: 0.8rem;
            left: 0.6rem;
        }
        .btn {
            margin: 3rem 0 0 0.9rem;
            > button {
                width: 2rem;
                height: 0.35rem;
                background-color: #AA89BD;
                border-radius: 0.04rem;
                color: white;
                outline: none;
                border: 0;
                font-size: 0.16rem;
            }
        }
        .center-middle{
            width: 2rem;
            position: absolute;
            left: 0.75rem;
            top:1.4rem;
            border: 1px #85CEA6 dotted;
            padding: 0.12rem 0 0 0.22rem;
            .particulars{
                height: 0.25rem;
                line-height: 0.25rem;
                position: relative;
                margin-bottom: 0.05rem;
                >img{
                    width: 0.22rem;
                    height: 0.22rem;
                }
                >span{
                    margin-left: 0.15rem;
                    position: absolute;
                    top: -0.02rem;
                    display: inline-block;
                    height: 0.25rem;
                    font-size: 0.16rem;
                }
            }
        }
    }
</style>
