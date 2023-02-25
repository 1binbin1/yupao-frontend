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
		<template v-if="active === 'index'">
			<Index/>
		</template>
		<template v-if="active === 'team'">
			<Team/>
		</template>
		<template v-if="active === 'user'">
			<User/>
		</template>
	</div>

	<!-- 底部tab-->
	<van-tabbar v-model="active" @change="onChange">
		<van-tabbar-item icon="home-o" name="index">主页</van-tabbar-item>
		<van-tabbar-item icon="search" name="team">队伍页</van-tabbar-item>
		<van-tabbar-item icon="friends-o" name="user">个人</van-tabbar-item>
	</van-tabbar>

</template>

<!-- 使用setup语法糖，将数据暴露给页面而不需要进行写return-->
<script setup>
	import {ref} from 'vue';
	import {Toast} from 'vant';
	import Index from "../pages/Index.vue";
	import Team from "../pages/Team.vue";
	import User from "../pages/User.vue";

	const onClickLeft = () => alert("左");
	const onClickRight = () => alert("右");

	// 默认高亮哪一个页面，使用标签的name值
	const active = ref("index");
	// 更换页面时轻量的提示
	const onChange = (index) => Toast(`标签 ${index}`);
</script>

<style scoped>

</style>