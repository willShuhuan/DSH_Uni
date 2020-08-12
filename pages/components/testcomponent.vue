<template>
	<!-- UI区域 -->
	<h3 @click='clickFun'>我是自定义组件：{{msg}}</h3>
</template>

<script>
	// 脚本区域
	export default {
		name:'testComponent',
		props:{
			msg:{
				type:String,
				default:'default msg'
			}
		},
		methods:{
			clickFun:function(){
				this.msg = '改变后的组件属性',
				this.$emit('clickFun',this.msg);
			}
		},
		data(){
			return{
				code:200,
				message:'success',
				data:{
					name:'vue'
				}
			}
		}
	}
</script>

<style>
</style>
