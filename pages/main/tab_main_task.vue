<template>
	<view style="height: 1000px;">
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>

		<!-- 自定义组件使用 -->
		<testComponent style="margin-top: 50px;" msg="默认属性" @clickFun="sonComponentClickCallback"></testComponent>

		<!-- 插件市场轮播组件 -->
		<view style="margin-top: 100px;">
			<text >下面是一个插件市场的轮播组件</text>
			<carousel :img-list="imgList" url-key="url" @selected="selectedBanner" />
		</view>
	</view>

</template>

<script>
	import testComponent from '../components/testcomponent.vue'
	import carousel from '@/components/vear-carousel/vear-carousel'

	export default {
		onTabItemTap: function(Object) {
			console.log(Object);
		},
		components: {
			testComponent,
			carousel
		},
		data() {
			return {
				callback: '',
				imgList: [{
					url: 'https://img9.51tietu.net/pic/2019-091200/vgkpidei2tjvgkpidei2tj.jpg',
					id: 1
				}, {
					url: 'https://img9.51tietu.net/pic/2019-091200/euzekmi5m23euzekmi5m23.jpg',
					id: 2
				}, {
					url: 'https://img9.51tietu.net/pic/2019-091200/143tt0ta4sr143tt0ta4sr.jpg',
					id: 3
				}, {
					url: 'https://img9.51tietu.net/pic/2019-091200/ff1vqwm3q33ff1vqwm3q33.jpg',
					id: 4
				}, ]
			}
		},
		methods: {
			sonComponentClickCallback: function(e) {
				// this.callback = e;
				console.log(e);
			},
			selectedBanner(item, index) {
				console.log('🥒', item, index)
			}
		}
	}
</script>

<style>
	.status_bar {
		height: var(--status-bar-height);
		width: 100%;
		background-color: #007AFF;
	}
</style>
