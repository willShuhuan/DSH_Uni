<template>
	<view class="content">
		<scroll-view show-scrollbar="false">

			<!-- <view id="demo1" class="scroll-view-item uni-bg-red">A</view>
			<view id="demo2" class="scroll-view-item uni-bg-green">B</view>
			<view id="demo3" class="scroll-view-item uni-bg-blue">C</view> -->

			<navigator style="width: 100%; margin-top: 10rpx;" url="./tab_main_task" hover-class="navigator-hover" open-type="switchTab">
				<button type="primary">navigator跳转到新页面</button>
			</navigator>

			<video style="width: 100%; margin-top: 10rpx;" src="http://gusteau-test.oss-cn-hangzhou.aliyuncs.com/material/transcode/video/2020/07/24/HK2mmdYW_1595570205480.mp4"></video>

			<form @submit="formSubmit" @reset="formReset" class="form">
				<view class="title">{{switchvalue}}</view>
				<switch @change="switchChange" color="#FF6723" name="switch"></switch>
				<view class="title">radio单选框</view>
				<radio-group name="radio">
					<label>
						<radio value="radio1" /><text>选项一</text>
					</label>
					<label>
						<radio value="radio2" /><text>选项二</text>
					</label>
				</radio-group>
				<view class="title">checkbox复选框</view>
				<checkbox-group name="checkbox">
					<label>
						<checkbox value="checkbox1" /><text>选项一</text>
					</label>
					<label>
						<checkbox value="checkbox2" /><text>选项二</text>
					</label>
				</checkbox-group>
				<view class="title">slider</view>
				<slider value="50" name="slider" show-value></slider>
				<view class="title">input输入框</view>
				<input class="uni-input" name="input" placeholder="这是一个输入框" />
				<button form-type="submit" type="primary" class="button">Submit</button>
				<button type="warn" form-type="reset" class="button">Reset</button>
			</form>


		</scroll-view>

	</view>
</template>

<script>
	export default {
		onTabItemTap: function(Object) {
			console.log(Object);
		},
		data() {
			return {
				switchvalue: "switch关闭",

			}
		},
		methods: {
			switchChange: function(e) {
				console.log(e.target.value);
				this.switchvalue = e.target.value === true ? "switch开启" : "switch关闭";
			},
			formSubmit: function(e) {
				console.log('form发生了submit事件，携带数据为：' + JSON.stringify(e.detail.value))
				var formdata = e.detail.value
				uni.showModal({
					content: '表单数据内容：' + JSON.stringify(formdata),
					showCancel: false,
					success:function(res){
						if(res.confirm){
							uni.showLoading({
								title: '表单正在提交...'
							}),
							setTimeout(()=>{
								uni.hideLoading(),
								uni.showToast({
									title:'success'
								})
							},5000);
						
							
						}
					}
				});
				
			},
			formReset: function(e) {
				console.log('清空数据')
			}
		}
	}
</script>

<style>
	.content {
		padding-top: var(--status-bar-height);
		text-align: center;
		height: 100%;
	}

	.title {
		color: #007AFF;
		font-weight: bold;
	}

	.form {
		padding: 20rpx;
	}

	.button {
		margin-top: 10rpx;
		width: 40%;
	}

	.scroll-view-item {
		width: 100%;
		height: 200px;
		text-align: center;
		line-height: 200px;
	}

	.uni-bg-red {
		background: #FF0000;
	}

	.uni-bg-green {
		background: #4CD964;
	}

	.uni-bg-blue {
		background: #007AFF;
	}
</style>
