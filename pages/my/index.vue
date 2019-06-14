<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view>
			<text class="title">{{title}}</text>
		</view>
		<button @click="toPage">跳转到首页页面</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'my'
			}
		},
		onLoad() {
			// 解析路由参数
			console.log(this.$parseURL())
		},
		methods: {
			toPage () {
				// 跳到index的页面
				// 不传参数可以简写成如下
				this.$openPage('index')
			}
		}
	}
</script>

<style>
	.content {
		text-align: center;
		height: 400upx;
	}

	.logo {
		height: 200upx;
		width: 200upx;
		margin-top: 200upx;
	}

	.title {
		font-size: 36upx;
		color: #8f8f94;
	}
</style>
