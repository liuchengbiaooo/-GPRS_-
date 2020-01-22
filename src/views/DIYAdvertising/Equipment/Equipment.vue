<template>
    <div class="shebei">
        <div class="header">
            <i class="iconfont iconzuojiantou" @click="$router.push('/advertising')"></i>
            <span>我的设备</span>
            <span class="jia" @click="$router.push('/addEquipments')">+</span>
        </div>
        <div class="wrap">
            <div class="shousuo">
                <div class="neirong">
                    <input type="text" placeholder="请输入设备号" class="ipt"/>
                    <i class="iconfont icon-41 tubiao"></i>
                </div>
            </div>
            <div class="center">
                <div class="center-top">
                    <img src="../../../assets/images/ic_choice.png">
                    <div class="text">
                        <span class="yuan"></span>
                        <span>在线</span>
                    </div>
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
                <div class="center-share">
                    <img src="../../../assets/images/ic_canshu.png"/>
                    <span>分享好友</span>
                </div>
                <div class="center-state">
                    <div class="bianji">编辑</div>
                    <div class="guanggao">已发广告</div>
                </div>
            </div>
            <div class="center">
                <div class="center-top">
                    <img src="../../../assets/images/ic_choice.png">
                    <div class="text">
                        <span class="yuan"></span>
                        <span>在线</span>
                    </div>
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
                <div class="center-share">
                    <img src="../../../assets/images/ic_canshu.png"/>
                    <span>分享好友</span>
                </div>
                <div class="center-state">
                    <div class="bianji">编辑</div>
                    <div class="guanggao">已发广告</div>
                </div>
            </div>
        </div>
        <div class="pop-up" v-show="isShow">
            <span>开屏</span>
            <span>光屏</span>
            <span>定时开关</span>
            <span>清屏</span>
            <span>亮度调节</span>
        </div>
        <div class="below">
            <div class="kongzhi" @click='Switch'>设备控制</div>
            <div class="toufang" @click="Put">投放广告</div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Equipment',
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    Switch() {
      this.isShow = !this.isShow;
    },
    Put() {
      this.$router.push('/friendsShare');
    },
  },
  mounted() {
  },
};
</script>

<style scoped lang="less">
    .shebei{
        position: relative;
    }
    .header{
        width: 100%;
        height: .45rem;
        font-size: .18rem;
        line-height: .45rem;
        display: flex;
        justify-content: center;
        color: white;
        position: fixed;
        background-color: #323036;
        .jia{
            position: absolute;
            right: 0.15rem;
            top:-0.03rem;
            font-size: .34rem;
        }
    }
    i{
        color: white;
        position: absolute;
        font-size: .24rem;
        left: .1rem;
    }
    .wrap{
        width: 100%;
        padding-top: 0.45rem;
        height: calc(100vh);
        background: url("../../../assets/images/bg_shumu.png") no-repeat;
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
            .tubiao{
                position: absolute;
                left: 3.2rem;
                color: black;
                top:0.05rem;
            }
        }
        .center{
            height: 1.4rem;
            margin: 0.2rem 0.12rem 0.2rem 0.12rem;
            background-color: white;
            border-radius: 0.04rem;
            position: relative;
            .center-top{
                width: 100%;
                height: 0.25rem;
                display: flex;
                line-height: 0.25rem;
                justify-content: space-between;
                position: absolute;
                font-size: 0.14rem;
                top:0.05rem;
                >img{
                    width: 0.25rem;
                    height: 0.25rem;
                    margin-left: 0.08rem;
                }
                .text{
                    margin-right: 0.16rem;
                    .yuan{
                        display: inline-block;
                        width: 0.1rem;
                        height: 0.1rem;
                        background-color: #2FBB2F;
                        border-radius: 50%;
                        margin-right: 0.04rem;
                    }
                }
            }
            .center-middle{
                width: 2rem;
                position: absolute;
                left: 0.4rem;
                top:0.2rem;
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
            .center-share{
                width: 0.9rem;
                height: 0.2rem;
                position: absolute;
                bottom:0.08rem;
                margin-left: 0.12rem;
                >img{
                    width: 0.16rem;
                    height: 0.16rem;
                }
                >span{
                    position: absolute;
                    top: 0.02rem;
                    font-size: 0.14rem;
                    color: #D0C4D6;
                    margin-left: 0.06rem;
                }
            }
            .center-state{
                position: absolute;
                bottom:0.2rem;
                right: 0.1rem;
                text-align: center;
                font-size: 0.14rem;
                line-height: 0.28rem;
                .bianji{
                    width: 0.8rem;
                    height: 0.28rem;
                    border: 1px solid #D6C5D6;
                    color: #D6C5D6;
                    border-radius: 0.14rem;
                    margin-bottom: 0.1rem;
                }
                .guanggao{
                    width: 0.8rem;
                    height: 0.28rem;
                    background-color: #D6C5D6;
                    color: white;
                    border-radius: 0.14rem;
                    letter-spacing:0.01rem;
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
    .pop-up{
        width: 1.2rem;
        border: 1px solid #C2C2C2;
        position: absolute;
        background-color: white;
        color: #6E6E6E;
        bottom:0.52rem;
        left: 0.35rem;
        text-align: center;
        font-size: 0.14rem;
        >span{
            display: block;
            width: 100%;
            height: 0.4rem;
            border-bottom: 1px solid #F3F3F3;
            line-height: 0.4rem;
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
