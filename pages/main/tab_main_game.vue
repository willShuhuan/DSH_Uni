<template>
	<view class="content">{{currentTab}}
	
	<br/><br/><br/>
	<text>当前页面垂直滚动距离</text>
	<br/>
	<text>{{scrollTop}}</text>
	
	</view>
	<!-- <view class="content">玩游戏 原生fragment接入湛乘sdk</view> -->
</template>

<script>
	export default{
		onTabItemTap:function(Object){
			this.currentTab = Object;
		},
		onPageScroll:function(e){
			this.scrollTop = e.scrollTop;
		},
		onHide() {
			console.log("game 页面 隐藏了");
		},
		data() {
			return {
				currentTab: {},
				scrollTop:0
			}
		},
	}
</script>

<style>
	.content {
		text-align: center;
		height: 100%;
		margin-top: 400upx;
	}
</style>

