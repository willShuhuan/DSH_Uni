<template>
	<div>
	<button type="primary" class="content" @click="showPlugin">点击加载云端原生插件</button>
	</div>
</template>

<script>
	const dcRichAlert = uni.requireNativePlugin('DCloud-RichAlert')
	export default{
		onTabItemTap:function(Object){
			console.log(Object);
		},
		methods:{
			showPlugin(){
				dcRichAlert.show({
				    position: 'bottom',
				    title: "提示信息",
				    titleColor: '#FF0000',
				    content: "<a href='https://uniapp.dcloud.io/' value='Hello uni-app'>uni-app</a> 是一个使用 Vue.js 开发跨平台应用的前端框架!\n免费的\n免费的\n免费的\n重要的事情说三遍",
				    contentAlign: 'left',
				    checkBox: {
				      title: '不再提示',
				      isSelected: true
				    },
				    buttons: [{
				        title: '取消'
				      },
				      {
				        title: '否'
				      },
				      {
				        title: '确认',
				        titleColor: '#3F51B5'
				      }
				    ]
				  }, result => {
				    switch (result.type) {
				      case 'button':
				        console.log("callback---button--" + result.index);
				        break;
				      case 'checkBox':
				        console.log("callback---checkBox--" + result.isSelected);
				        break;
				      case 'a':
				        console.log("callback---a--" + JSON.stringify(result));
				        break;
				      case 'backCancel':
				        console.log("callback---backCancel--");
				        break;
				    }
				  });
			}
		}
	}
</script>

<style>
	.content {
		margin-top: 200rpx;
		text-align: center;
		height: 100%;
	}
</style>
