<template>
  <view class="home">
    <button @click="goPage1">跳到index页面</button>
    <input type="text" v-model="val" disabled>
  </view>
</template>

<script>
export default {
  navigate: ['navigateTo', 'reLaunch'],
  name: 'Home',
  data () {
    return {
      val: ''
    }
  },
  methods: {
    goPage1 () {
      this.$minRouter.push({
        name: 'index'
      })
    }
  },
  onLoad () {
    this.val = this.$parseURL().id
  }
}
</script>

<style lang="scss" scoped>

</style>
