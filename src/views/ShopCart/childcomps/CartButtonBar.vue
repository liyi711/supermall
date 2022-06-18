<template>
	<div class="CartButtonBar">
		<div class="checkbox">
			<div class="check-content">
				<check-button
					class="check"
					:is-checked="isSelectAll"
					@click.native="checkClick"
				></check-button>
				<div>全选</div>
			</div>
		</div>

		<div class="price">合计:{{ this.totalPrice }}</div>
		<div class="calculate" @click="toPurchase">去结算({{ checkedLength }})</div>
	</div>
</template>
<script>
import CheckButton from 'components/content/checkButton/CheckButton.vue'
import { mapGetters } from 'vuex'
export default {
	name: 'CartButtonBar',
	components: {
		CheckButton,
	},
	computed: {
		...mapGetters(['cartList']),
		isSelectAll() {
			if (this.cartList.length === 0) return false
			return !this.cartList.find(x => !x.checked)
		},
		totalPrice() {
			return (
				'￥' +
				this.cartList
					.filter(x => {
						return x.checked
					})
					.reduce((sum, item) => {
						return sum + item.count * item.price
					}, 0)
					.toFixed(2)
			)
		},
		checkedLength() {
			return this.cartList.filter(x => x.checked).length
		},
	},
	methods: {
		checkClick() {
			this.$store.commit('chanceAllChecked', !this.isSelectAll)
		},
		toPurchase() {
			if (!this.isSelectAll) {
				this.$mytoast.show('请选择商品', 2000)
			}
		},
	},
}
</script>
<style scoped>
.CartButtonBar {
	position: absolute;
	display: flex;
	bottom: 49px;
	height: 44px;
	left: 0;
	right: 0;
	line-height: 44px;
	font-size: 14px;
	background-color: #f6f6f6;
}
.checkbox {
	width: 70px;
	align-items: center;
}
.price {
	flex: 1;
	padding-left: 2px;
}

.calculate {
	line-height: 36px;
	width: 100px;
	padding-left: 10px;
	background-color: rgba(253, 63, 73);
	border-radius: 30px;
	margin: 5px 6px;
	color: white;
	/* text-align: center; */
	padding-left: 19px;
}
.check-content {
	font-size: 15px;
	height: 100%;
	display: flex;
	align-items: center;
}
.check {
	margin-left: 10px;
	margin-right: 6px;
	width: 18px;
	height: 18px;
	line-height: 18px;
}
</style>
