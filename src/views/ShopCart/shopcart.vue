<template>
	<div class="cart">
		<!-- 导航 -->
		<nav-bar class="nav-bar">
			<div slot="center">购物车({{ cartLength }})</div>
		</nav-bar>
		<!-- 商品列表 -->
		<cart-list></cart-list>
		<cart-button-bar></cart-button-bar>
	</div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import CartList from './childcomps/CartList.vue'
import CartButtonBar from './childcomps/CartButtonBar.vue'
import { mapGetters } from 'vuex'

export default {
	name: 'shopcart',
	components: {
		NavBar,
		CartList,
		CartButtonBar,
	},
	computed: {
		...mapGetters(['cartLength']),
		// 想自定义名称，则使用对象形式，将自定义名称与getters一一对应
		// ...mapGetters({ length: 'cartLength', list: 'cartList' }),
	},
}
</script>

<style scoped>
.nav-bar {
	background-color: rgba(252, 49, 32);
	color: #fff;
	font-size: 17px;
}
.cart {
	height: 100vh;
	position: relative;
}
.cart img {
	height: 40vh;
}
</style>
