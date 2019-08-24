<template>
	<div class="search-1">
		<div class="top1">
			<div class="search1">
				<span @click="return1" class="iconfont icon-zuo"></span>
				<input type="text" v-model="search">
			</div>
		</div>
		<div class="kong"></div>
		<router-link :to="``">
		<div class="for-car" v-for="i of 10" :key="i">
			<span id="aixin" @click="cla" class="iconfont icon-aixin"></span>
			<div class="for-carousel"><carousel></carousel></div>
			<div class="for-xia">
				<p class="h_type">整套公寓·杭州</p>
				<p class="title">跨世纪的复活节撒回复可见撒回复</p>
				<p class="pingjia">*****<span>45</span>条评论</p>
				<hr>
				<p class="price">￥<span>352</span>/晚</p>
			</div>
		</div>
		</router-link>
	</div>
</template>
<script>
	import carousel from "../components/carousel"
	export default {
		data() {
			return {
				search:"房源"
			}
		},
		components:{carousel},
		methods: {
			return1:function(){
				this.$router.push("/Home")
			},
			cla:function(){
				var a=document.getElementById("aixin");
				a.classList.replace("iconfont icon-aixin","iconfont icon-aixin1")
			}
		},
	}
</script>
<style scoped>
	.kong{
		height: 30px;;
	}
	.search-1{
		display: block;
		width: 90%;
		margin: 0 auto;
	}
	.top1{
		width: 100%;
		background: #fff;
		position: fixed;
		top:0;
		left:0;
		z-index: 999;
	}
	.search1{
		width: 90%;
		margin: 0 auto;
		height: 30px;
		line-height: 30px;
		border: 1px solid #eee;
		margin-top: 5px;
		margin-bottom: 5px;
		border-radius: 5px;
		box-shadow:  5px 5px 10px 5 black;
	}
	.search1>span{
		margin-left: 10px;
	}
	.for-car{
		margin-top:20px;
		border: 1px solid #eee;
		position: relative;
	}
	.search1>input{
		margin-left: 10px;
	}
	.for-xia{
		margin-top: 20px; 
	}
	hr{
		color: #eee;
	}
	.h_type{
		font-size: 8px;
		color: sienna;
		margin-left: 10px;
	}
	.title{
		text-overflow: ellipsis;
		overflow: hidden;
		margin-top: 8px;
		margin-left: 10px;

	}
	.price{
		font-size: 14px;
		margin-top: 10px;
		display: inline-block;
		margin-left: 10px;
		margin-bottom: 10px;
	}
	.price>span{
		font-weight: 700;
	}
	.pingjia{
		margin-top: 10px;
		margin-left: 10px;
		margin-bottom: 5px;
	}
	.pingjia>span{
		font-weight: 700;
	}
	#aixin{
		position: absolute;
		right: 20px;
		top:25px;
	}
	.wei{
		display: inline;
	}
	.xuanzhong{
		display: none
	}
</style>

