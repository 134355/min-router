<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view>
			<text class="title">{{title}}</text>
		</view>
		<button @click="toPage">跳转到我的页面</button>
		<min-a to="my">跳转到我的页面min-a标签跳转</min-a>
		<min-a :to="{name: 'my', query: {id: 123}}">跳转到我的页面min-a标签跳转带参数</min-a>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'index'
			}
		},
		onLoad() {
			// 解析路由参数
			console.log(this.$parseURL())
		},
		methods: {
			toPage () {
				// 跳到my的页面  query是传递的参数
				this.$openPage({
					name: 'my',
					query: {id: 123}
				})
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
