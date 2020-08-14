<template>
	<div class="tab-bar-item" @click="itemClick()" >
		<div v-if="!isactive">
			<slot name="item_img"></slot>
		</div>
		<div v-else>
			<slot name="item_img_active"></slot>
		</div>
		
		<div :class="{active:isactive}">{{text}}</div>
		
	</div>

</template>

<script>
	export default{
		props:{
			text:{},
			path:String
		},
		data (){
			return {
/* 				isactive:false */
			}
		},
		computed:{
			isactive(){
				return this.$route.path.indexOf(this.path) !==-1
			}
		},
		methods:{
			itemClick(){
				this.$router.push(this.path)		
			
			}
		}
	}
</script>

<style>
	.tab-bar-item{
		flex: 1;
		text-align: center;
		height: 49px;
		font-size: 14px;
	}
 img{
		width: 20;
		height: 20;
	}
	.tab-bar-item .active{
		color: red;
	}
</style>
