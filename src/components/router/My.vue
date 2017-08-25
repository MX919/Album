<template>
	<div>
		<div class="warp">
				<form action="">
					<input type="text" name="" id="" value=""  v-model="uname" />
					<button contextmenu="" class="button" @click="add()">留言</button>
				</form>
				<!-----评论区-------->
				<p class="tou">精彩评论</p>
				<div class="pl clearfix" v-for="(item,index) in myData">

					<span>{{index+1}}</span>
					<p class="ly">{{item.name}}</p>
					<button class="btn" @click="cdd(this)">删除</button>			
				</div>
			</div>
				<p class="p" v-show="myData.length==0">暂无评论！</p>
				<button class="splice" v-show="myData.length!==0">全部删除</button>
	</div>

</template>

<script>
export default{	
	data(){
		return{
			myData:[
//				{name:"第一个"}
			],
			uname:'',
//			hide:true
			
		}
	},
		methods:{
			add:function(){
//				this.hide=true;
				this.myData.push({
					name:this.uname
					
				});
				this.uname="";
			},
			cdd:function(index,item){
				this.myData.splice(0,1);
//				this.hide=false;
				
			},
		}
}
</script>

<style scoped="" lang="css">
.warp{
	
	/*background: #CCCCCC;*/
	padding: .3rem;
	/*border: .01rem solid red;*/
}
form{
	/*border: .1rem solid red;*/
	font-size: 0;
}
input{
	width: 80%;
	height: 1rem;
	border: .01rem solid #00B2EE; 
	border-radius: .105rem;
	font-size: .5rem;
	padding-left: .1rem;
	box-sizing: border-box;
	display: inline-block;
	vertical-align: bottom;
}
.button{
	height: 1rem;
	background: #00B2EE;
	padding: 0 .2rem;
	margin-left: .1rem;
	border-radius: .105rem;
	color: white;
	/*vector-effect: bottom;*/
}
.pl{
	margin-top: .3rem;
	border-bottom: .01rem solid #DDDDDD;
	border-radius: .03rem;
	/*height: 1rem;*/	
	padding: .1rem 0;
}
.tou{
	font-size: .3rem;
	border-bottom: .01rem solid #EEEEEE;
	color: #EEEEEE;
	margin-top: .3rem;	
}
/*--------*/
.btn{
	/*padding: .07rem;*/
	/*display: inline-block;*/
	color: black;
	float: right;
	background: white;
	/*vertical-align: bottom;*/
	color: #EEEEEE;
	margin-right: .1rem;
}
span{
	font-size: .3rem;
	color: #CCCCCC;
	/*background: #CCCCCC;*/
	float: left;
	/*padding: .05rem;*/
	margin-right: .1rem;
	/*display: inline-block;
	vertical-align: top;*/
	/*color: black;*/
}
.ly{
	font-size: .2rem;
	float: left;
	color: #333333;
	line-height: .4rem;
}

/*----------------*/
.p{
	font-size: .3rem;
	text-align: center;
	color: #B1605E;
}
.splice{
	background: #EEEEEE;
	color: white;
	padding: .1rem;
	border-radius: .1rem;
	float: right;
	margin: 0 .2rem 1rem 0;
	
}
</style>