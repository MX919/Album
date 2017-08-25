<template>
  <div id="app">
    <hello></hello>
    <herder></herder>
    <luyou></luyou>
<!--    <router-view></router-view>-->
  </div>
</template>

<script>
import Hello from '@/components/Hello';
import Herder from '@/components/Herder';
import Luyou from '@/components/Luyou'
export default{
	components:{
		Hello,
		Herder,
		Luyou
	} 
}
</script>

<style>
#app{
	background: #ccc;
}
</style>
