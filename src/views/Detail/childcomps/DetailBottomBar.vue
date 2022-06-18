<template>
	<div class="bottom-bar">
		<div class="bar-item bar-left">
			<div>
				<i class="icon service"></i>
				<span class="text">客服</span>
			</div>
			<div>
				<i class="icon shop"></i>
				<span class="text">店铺</span>
			</div>
			<div>
				<i class="icon select"></i>
				<span class="text">收藏</span>
			</div>
		</div>
		<div class="bar-item bar-right">
			<div @click="addToCart" class="cart">加入购物车</div>
			<div class="buy">立即购买</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'DetailBottomBar',
	methods: {
		addToCart() {
			this.$emit('addToCart')
		},
	},
}
</script>

<style scoped>
.bottom-bar {
	height: 54px;
	position: fixed;
	background-color: #ffffff;
	left: 0;
	right: 0;
	bottom: 0;
	display: flex;
	text-align: center;
	z-index: 10;
	box-shadow: 0px -3px 0.75px rgba(242, 242, 242);
}

.bar-item {
	height: 54px;
	flex: 1;
	display: flex;
	align-items: center;
}

.bar-item > div {
	flex: 1;
}

.bar-left .text {
	font-size: 13px;
}

.bar-left .icon {
	display: block;
	width: 22px;
	height: 22px;
	margin: 10px auto 0;
	/* x偏移量，和y的偏移量，百分比缩放 */
	background: url('~assets/img/detail/detail_bottom.png') 0 0/100%;
}

.bar-left .service {
	background-position: 0 -54px;
}

.bar-left .shop {
	background-position: 0 -98px;
}

.bar-right {
	height: 54px;
	font-size: 15px;
	color: #ffffff;
	line-height: 40px;
}

.bar-right .cart {
	height: 70%;
	background-color: rgba(254, 168, 3);
	color: #333333;
	font-size: 13px;
	color: #fff;
	border-radius: 30px 30px 30px 30px;
	margin-right: 3px;
}
.bar-right .buy {
	height: 70%;

	background-color: rgba(242, 8, 1);
	font-size: 13px;
	border-radius: 30px 30px 30px 30px;
}
</style>
