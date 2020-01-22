<template>
    <div class="guanggao">
        <HeaderTop color="#323036" link="/advertising">广告列表</HeaderTop>
        <div class="warp">
            <div class="shousuo">
                <div class="neirong">
                    <input type="text" placeholder="请输入广告名称" class="ipt"/>
                    <img src="../../../assets/images/ic_seach.png">
                </div>
            </div>
            <div class="advertising">
                <div class="advertising-head">
                    <img src="../../../assets/images/ic_choice.png"/>
                    <div class="jinzhang">
                        <span>0/84</span>
                        <span class="da">x</span>
                    </div>
                </div>
                <div class="advertising-content">
                    <div class="advertising-left">
                    </div>
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
                </div>
            </div>
            <div class="advertising">
                <div class="advertising-head">
                    <img src="../../../assets/images/ic_choice.png"/>
                    <div class="jinzhang">
                        <span>0/84</span>
                        <span class="da">x</span>
                    </div>
                </div>
                <div class="advertising-content">
                    <div class="advertising-left">
                    </div>
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
                </div>
            </div>
            <div class="below">
                <div class="kongzhi">配置时间</div>
                <div class="toufang">删除</div>
            </div>
        </div>
    </div>
</template>

<script>
import HeaderTop from '../../../components/HeaderTop.vue';

export default {
  name: 'AdvertisingList',
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
    .guanggao{
        position: relative;
    }
    .warp{
        width: 100%;
        padding-top: 0.45rem;
        height: calc(100vh);
        background: url("../../../assets/images/bg_guanggao.png") no-repeat;
        background-size:100% ;
        box-sizing: border-box;
        .shousuo{
            margin: 0.1rem 0.12rem 0 0.12rem;
            box-sizing: border-box;
            background-color: white;
            position: relative;
            border-radius: 0.04rem;
            .ipt{
                width: 3rem;
                height: 0.4rem;
                margin-left: 0.12rem;
            }
            img{
                display: inline-block;
                width: 0.25rem;
                height: 0.25rem;
                position: absolute;
                top:0.08rem;
            }
        }
        .advertising{
            margin: 0.16rem 0.12rem 0 0.12rem;
            background-color: white;
            border-radius: 0.04rem;
            box-sizing: border-box;
            padding-bottom: 0.15rem;
            position: relative;
            .advertising-head{
                position: relative;
                padding-top: 0.12rem;
                >img{
                    width: 0.3rem;
                    height: 0.3rem;
                    display: inline-block;
                    margin-left: 0.16rem;
                }
                .jinzhang{
                    position: absolute;
                    width: 2rem;
                    height: 0.14rem;
                    right: 0.22rem;
                    top:0.18rem;
                    display: inline-block;
                    border-radius: 0.14rem;
                    background-color: #E5E5E5;
                    .da{
                        font-size: 0.16rem;
                        font-weight: bold;
                    }
                    >span{
                        margin-left: 0.8rem;
                        font-size: 0.14rem;
                    }
                }
            }
            .advertising-left{
                width: 1rem;
                height: 1rem;
                background-color: black;
                margin-left: 0.24rem;
                margin-top: 0.08rem;
            }
            .center-middle{
                width: 2rem;
                position: absolute;
                left: 1.5rem;
                top:0.6rem;
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
                        top: 0;
                        display: inline-block;
                        height: 0.25rem;
                        font-size: 0.14rem;
                    }
                }
            }
        }
        .below{
            width: 100%;
            height: 0.5rem;
            position: absolute;
            line-height: 0.5rem;
            font-size: 0.16rem;
            bottom:0;
            background-color: white;
            color:#1A1717;
            display: flex;
            text-align: center;
            justify-content: space-between;
            .kongzhi{
                flex: 1;
                cursor: pointer;
                border-right: 1px solid #D9D9D9;
            }
            .toufang{
                flex: 1;
            }
        }
    }
    input::-webkit-input-placeholder {
        font-size: 0.16rem;
    }
    input{
        outline:none;
        font-size: 0.16rem;
    }
</style>
