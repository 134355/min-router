
<template>
  <view class="index">
    <button @click="goPage1">跳到home页面</button>
    <button @click="goPage2">切换到home页面</button>
    <input type="text" v-model="val" placeholder="请输入内容传参">
    <button @click="goPage3">跳到home页面带参数</button>
  </view>
</template>

<script>
export default {
  navigate: ['navigateTo'],
  name: 'Index',
  data () {
    return {
      val: ''
    }
  },
  methods: {
    goPage1 () {
      this.$minRouter.push('home')
    },
    goPage2 () {
      this.$minRouter.push('relhome')
    },
    goPage3 () {
      this.$minRouter.push({
        name: 'home',
        params: {
          id: this.val
        }
      })
    }
  },
  onLoad () {

  }
}
</script>

<style lang="scss" scoped>

</style>
