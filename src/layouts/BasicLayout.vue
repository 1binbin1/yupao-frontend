<template>
	<!--	导航栏-->
	<van-nav-bar
			title="标题"
			left-arrow
			@click-left="onClickLeft"
			@click-right="onClickRight"
	>
		<template #right>
			<van-icon name="search" size="18"/>
		</template>
	</van-nav-bar>


	<!--	引入不同的页面-->
	<div id="content">
		<router-view/>
	</div>

	<!-- 底部tab-->
	<van-tabbar route @change="onChange">
		<van-tabbar-item to="/" icon="home-o" name="index">主页</van-tabbar-item>
		<van-tabbar-item to="/team" icon="search" name="team">队伍页</van-tabbar-item>
		<van-tabbar-item to="/user" icon="friends-o" name="user">个人</van-tabbar-item>
	</van-tabbar>

</template>

<!-- 使用setup语法糖，将数据暴露给页面而不需要进行写return-->
<script setup>
	import {Toast} from 'vant';

	// 更换页面时轻量的提示
	// const onChange = (index) => Toast(`标签 ${index}`);
</script>

<style scoped>

</style>