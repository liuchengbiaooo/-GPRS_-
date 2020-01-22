<template>
    <div>
        <HeaderTop color="#323036">DIY广告</HeaderTop>
        <div class="wrap">
            <div class="wrap-xinxi">
                <img class="touxiang" :src="user.headImg"/>
                <div class="text">{{user.username}}</div>
            </div>
            <div class="wrap-xiangqing">
                <div class="content" @click="skip('/equipment')">
                    <div class="tupian">
                        <img src="../../assets/images/ic_shebei.png">
                    </div>
                    <div class="xuanzhe">
                        <span class="txt">我的设备</span>
                        <i class="iconfont icon-youjiantou tubiao"></i>
                    </div>
                </div>
                <div class="content" @click="skip('/copyChoice')">
                    <div class="tupian">
                        <img src="../../assets/images/ic_guangao.png">
                    </div>
                    <div class="xuanzhe">
                        <span class="txt">发布广告</span>
                        <i class="iconfont icon-youjiantou tubiao"></i>
                    </div>
                </div>
                <div class="content" @click="skip('/advertisingList')">
                    <div class="tupian">
                        <img src="../../assets/images/ic_liebiao.png">
                    </div>
                    <div class="xuanzhe">
                        <span class="txt">广告列表</span>
                        <i class="iconfont icon-youjiantou tubiao"></i>
                    </div>
                </div>
                <div class="content" @click="skip('/sendState')">
                    <div class="tupian">
                        <img src="../../assets/images/ic_zhuangtai.png">
                    </div>
                    <div class="xuanzhe">
                        <span class="txt">发送状态</span>
                        <i class="iconfont icon-youjiantou tubiao"></i>
                    </div>
                </div>
                <div class="content" @click="skip('/material')">
                    <div class="tupian">
                        <img src="../../assets/images/ic_sucai.png">
                    </div>
                    <div class="xuanzhe">
                        <span class="txt">素材库</span>
                        <i class="iconfont icon-youjiantou tubiao"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex';
import HeaderTop from '../../components/HeaderTop.vue';

export default {
  name: 'DIYAdvertising',
  components: {
    HeaderTop,
  },
  data() {
    return {
      user: {},
    };
  },
  computed: {
    ...mapState(['openId']),
  },
  methods: {
    skip(path) {
      this.$router.push(path);
    },
    getUserOpenId() {
      const str = window.location.href; // 正式环境
      const openId = str.split('?')[1]; // 正式环境
      this.$store.commit('saveOpenId', openId); // 正式环境
      // this.$store.commit('saveOpenId', 'ojQwM6GVaU7R-3VBRKQohQMbfleU'); // 测试环境
      this.$http.post('/api/indexApp/mySelf',
        this.$qs.stringify({
          openId: `${openId}`, // 正式环境
          // openId: 'ojQwM6GVaU7R-3VBRKQohQMbfleU', // 测试环境
        }))
        .then((res) => {
          this.user = res.data.data;
        })
        .catch(() => {
          this.$createDialog({
            type: 'alert',
            title: '警告',
            content: '获取用户信息失败',
            icon: 'cubeic-alert',
          }).show();
        });
    },
  },
  mounted() {
    //this.getUserOpenId();
  },
};
</script>
<style scoped lang="less">
    .wrap{
        width: 100%;
        padding-top: 0.45rem;
        height: calc(100vh - .45rem);
        background: url("../../assets/images/bg_diy.png") no-repeat;
        background-size:100% ;
        box-sizing: border-box;
        .wrap-xinxi{
            width: 100%;
            text-align: center;
            margin-top: 0.4rem;
            .touxiang{
                width: 0.8rem;
                height: 0.8rem;
                border-radius: 50%;
                border: 1px solid red;
                margin: 0 auto;
            }
            .text{
                margin-top: 0.2rem;
                color: #E6ABB0;
                font-size: 0.12rem;
            }
        }
        .wrap-xiangqing{
            margin-top: 0.5rem;
            .content{
                padding: 0.04rem 0;
                display: flex;
                .tupian{
                    margin-left: 0.20rem;
                    width: 0.3rem;
                    height: 0.3rem;
                    >img{
                        width: 100%;
                        height: 100%;
                    }
                }
                .xuanzhe{
                    flex: 1;
                    height: 0.3rem;
                    line-height: 0.28rem;
                    font-size: 0.13rem;
                    display: flex;
                    margin-left: 0.2rem;
                    color: black;
                    border-bottom: 1px solid #EFEFEF;
                    justify-content: space-between;
                    .tubiao{
                        margin-right: 0.35rem;
                        width: 0.2rem;
                        height: 0.2rem;
                        font-size: 0.18rem;
                    }
                }
            }
        }
    }
</style>
