<template>
	<div>
		<footer>
			<ul>
				<li><router-link to="/hoom"><span class="iconfont icon-yun1"><br />首页</span></router-link></li>
				<li><router-link to="/class"><span class="iconfont icon-shoucang2"><br />收藏</span></router-link></li>
				<li><router-link to="/my"><span class="iconfont icon-fenxiang3"><br />留言</span></router-link></li>
				<li><router-link to="/mi"><span class="iconfont icon-zhuti"><br />主题</span></router-link></li>			
			</ul> 
		</footer>
	</div>
</template>

<script>

</script>

<style scoped lang="css">
footer{
  width: 100%;
  position: fixed;
  left: 0;
  bottom:0;
  background: #EEEEEE;
  box-sizing: border-box;
}
footer ul{
  width: 100%;
  display: table;
}
footer ul li{
  width: 25%;
  text-align: center;
  display: table-cell;
  padding: .25rem 0 .25rem 0;
}
footer ul li a{
  font-size: .2rem;
  display: block;
}
footer ul li a .iconfont{
  font-size: .35rem;
}
.active{
	color: #00B2EE;
}
</style>
