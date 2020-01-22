<template>
    <div>
        <HeaderTop color="#323036" link="/equipment">添加设备</HeaderTop>
        <div class="tianjia">
            <div class="tianjia-content">
                <img src="../../../assets/images/ic_id.png">
                <span class="txt">
                    <input type="text" placeholder="请输入设备ID"/>
                </span>
            </div>
            <div class="tianjia-content">
                <img src="../../../assets/images/ic_id.png">
                <span class="txt">
                    <input type="text" placeholder="请输入设备备注"/>
                </span>
            </div>
            <div class="tianjia-content">
                <img src="../../../assets/images/ic_dizhi.png">
                <span class="txt">
                    <input type="text" placeholder="请输入设备所在地址"/>
                </span>
            </div>
        </div>
        <div class="btn">
            <button>添加</button>
        </div>
    </div>
</template>

<script>
import HeaderTop from '../../../components/HeaderTop.vue';

export default {
  name: 'AddEquipments',
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
    .tianjia{
        padding-top: 0.8rem;
        margin: 0 0.4rem 0 0.4rem;
        .tianjia-content{
            width: 100%;
            position: relative;
            margin-bottom: 0.18rem;
            >img{
                width: 0.26rem;
                height: 0.26rem;
                margin-top: 0.05rem;
            }
            .txt{
                margin-left: 0.12rem;
                display: inline-block;
                padding-left: 0.12rem;
                height: 0.35rem;
                width: 2.24rem;
                border: 1px solid #EBEBEB;
                position: absolute;
                top: 0;
                border-radius: 6px;
                >input{
                    height: 100%;
                }
            }
        }
    }
    .btn{
        margin: 1rem 0 0 0.86rem;
        >button{
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
    input::-webkit-input-placeholder {
        font-size: 0.14rem;
        color: #E3E3E3;
    }
    input{
        outline:none;
        font-size: 0.16rem;
    }
</style>
