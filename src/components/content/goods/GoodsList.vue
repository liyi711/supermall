<template>
	<div class="goods">
		<goods-list-item
			v-for="(item, index) in List"
			:goodsItem="item"
			:key="index"
		></goods-list-item>
	</div>
</template>

<script>
import GoodsListItem from './GoodsListItem.vue'

export default {
	name: 'GoodsList',
	props: {
		List: {
			type: Array,
			default() {
				return []
			},
		},
	},
	components: {
		GoodsListItem,
	},
}
</script>

<style>
.goods {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;

	padding: 2px;
}
</style>
