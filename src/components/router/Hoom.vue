<template>
	<div>
		<!--<navs :data="title"></navs>-->
		<div class="div">
			<li v-for="i in sliderData">
				<a href="#">
					<img :src="i" />
				</a>
			</li>
		</div>
	</div>
</template>

<script>
//	import Navs from '@/components/Navs';
	
	import {getsliders} from '@/api/index'
	export default{
//		components:{Navs},
		data(){
			return{
//				title:"主页",
				sliderData:[]
			}
		},
		created(){
			getsliders().then(res=>{
				this.sliderData=res.data;
				console.log(res.data);
			}).catch(err=>{
				console.log(err);
			})
		}
	}
	
</script>

<style scoped="">
	.div{
		/*padding: 0 .2rem;*/
	}
	a{
		/*border: 1px solid red;*/
		box-sizing: border-box;
		float: left;
	}
	a img{
		width: 2rem;
		height: 2rem;
		padding: .05rem .05rem .05rem .07rem;
	}
	/*a:hover{
		width: 100%;
		height: 100%;
	}
	a:hover img{
		width: 100%;
		height: 100%;
	}*/
</style>