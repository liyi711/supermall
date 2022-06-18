<template>
	<div class="profile">
		<nav-bar class="profile-navbar" style="box-shadow: 0px 0px 0px gray">
			<div slot="center">我的</div>
		</nav-bar>
		<login></login>
		<account></account>
		<porfile-list-item></porfile-list-item>
	</div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import Login from './childcomps/Login.vue'
import Account from './childcomps/Account.vue'
import PorfileListItem from './childcomps/PorfileListItem.vue'

export default {
	name: 'profile',
	data() {
		return {
			List: ['我的消息', '积分商城', '会员卡', '我的购物车', '下载购物车APP'],
		}
	},
	components: {
		NavBar,
		Login,
		Account,
		PorfileListItem,
	},
}
</script>

<style scoped>
.profile-navbar {
	background-color: rgba(252, 49, 32);
	color: white;
}
</style>
