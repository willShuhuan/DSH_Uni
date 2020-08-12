<template>
	<div>
		<div class="content">
			<button v-show="show('android')"  class="button" type="primary" @click="gotoNativePage">Android跳转原生Activity</button>
			<button v-show="show('ios')" class="button" type="primary" @click="gotoNativePage">iOS跳转原生ViewController</button>
			<button class="button" type="primary" @click="showFragment">加载原生fragment</button>
			<button class="button" type="primary" @click="asyncF">原生交互异步</button>
			<button class="button" type="primary" @click="syncF">原生交互同步</button>
		</div>
	</div>

</template>

<script>
	const testModule = uni.requireNativePlugin("willA-SopModule");
	export default {
		data() {
			return {
				title: 'Hello',
				show: function(plat){
					// #ifdef H5
					return true
					// #endif
					// #ifdef APP-PLUS
					if(plat==='android'){
						if (uni.getSystemInfoSync().platform == "android") {
							return true
						}else{
							return false
						}
					}else{
						if (uni.getSystemInfoSync().platform == "android") {
							return false
						}else{
							return true
						}
					}
					// #endif
					
					
				}
					
			}
		},
		onLoad() {},
		methods: {
			gotoNativePage() {
		
				if (uni.getSystemInfoSync().platform == "ios") {
					
				}
				if (uni.getSystemInfoSync().platform == "android") {
					
				}
				
				// #ifdef H5
				alert('H5环境不支持跳转')
				return
				// #endif
				// 未编写ios原生插件 处理
				if (uni.getSystemInfoSync().platform == "ios") {
					uni.showToast({
						title: 'iOS插件尚未编写',
						image: '../../static/mipmap/tabbar/ic_nav_game_selected.png',
						duration: 5000
					})
					return
				}
				testModule.gotoNativeMainPage({
					"data": "我是json data"
				});
			},
			showFragment() {
				// #ifdef H5
				alert('H5环境不支持加载碎片')
				return
				// #endif
				testModule.showFragment();
			},
			asyncF() {
				testModule.testAsyncFunc({
					'name': 'unimp',
					'age': 1
				}, (ret) => {
					console.log('async', ret)
				})
			},
			syncF() {
				var ret = testModule.testSyncFunc();
				console.log('sync', ret)
			}
		},
		onTabItemTap: function(Object) {
			console.log(Object);
		},

		onHide() {
			console.log("onHide");
			testModule.hideFragment();
		},
		onShow() {
			console.log("onShow");
			// testModule.showFragment();
		}

	};
</script>


<style>
	.content {
		text-align: center;
		height: 100%;
		margin-top: 150upx;
	}

	.button {
		width: 60%;
		margin-top: 100upx;
	}
</style>
