<template>
	<div class="CartList">
		<scroll class="content" ref="scroll">
			<cart-list-item
				v-for="(item, index) in cartList"
				:key="index"
				:item-info="item"
			></cart-list-item>
		</scroll>
	</div>
</template>

<script>
import Scroll from '@/components/common/srcoll/Scroll.vue'
import CartListItem from './CartListItem.vue'
import { mapGetters } from 'vuex'

export default {
	name: 'CartList',
	computed: {
		...mapGetters(['cartList']),
	},
	components: {
		Scroll,
		CartListItem,
	},
	activated() {
		this.$refs.scroll.refresh()
	},
}
</script>

<style scoped>
.content {
	position: absolute;
	top: 44px;
	bottom: 93px;
	left: 0;
	right: 0;
	overflow: hidden;
}
</style>
