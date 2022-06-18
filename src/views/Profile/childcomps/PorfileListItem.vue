<template>
	<list>
		<list-item>
			<img src="~assets/img/profile/message.svg" alt="" slot="icon" />
			<div slot="text">我的消息</div>
		</list-item>
		<list-item>
			<img src="~assets/img/profile/pointer.svg" alt="" slot="icon" />
			<div slot="text">积分商城</div>
		</list-item>
		<list-item class="border-bottom">
			<img src="~assets/img/profile/vip.svg" alt="" slot="icon" />
			<div slot="text">会员卡</div>
		</list-item>
		<list-item>
			<img src="~assets/img/profile/cart.svg" alt="" slot="icon" />
			<div slot="text">我的购物车</div>
		</list-item>
		<list-item class="shopping">
			<img src="~assets/img/profile/shopping.svg" alt="" slot="icon" />
			<div slot="text">下载购物APP</div>
		</list-item>
	</list>
</template>

<script>
import List from './List.vue'
import ListItem from './ListItem.vue'

export default {
	name: 'profileListItem',
	components: {
		List,
		ListItem,
	},
}
</script>

<style scoped>
.shopping {
	padding-left: 2px;
}
.shopping img {
	height: 60%;
}
.border-bottom {
	padding-left: 1px;
}
.border-bottom img {
	height: 70%;
}
</style>
