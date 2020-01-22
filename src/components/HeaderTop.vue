<template>
    <div class="header">
        <i class="iconfont iconzuojiantou" @click="send"></i>
        <slot></slot>
    </div>
</template>

<script>
export default {
  props: ['color', 'link'],
  name: 'HeaderTop',
  data() {
    return {};
  },
  methods: {
    send() {
      if (this.link) {
        this.$router.push(this.link);
      }
    },
  },
  mounted() {
    document.querySelector('.header').style.backgroundColor = `${this.color}`;
  },
};
</script>

<style scoped lang="less">
    .header{
        width: 100%;
        height: .45rem;
        font-size: 0.16rem;
        line-height: .45rem;
        display: flex;
        justify-content: center;
        color: white;
        position: fixed;
        top: 0;
        right: 0;
        z-index: 50;
    }
    i{
        color: white;
        position: absolute;
        font-size: .24rem;
        left: .1rem;
    }
</style>
