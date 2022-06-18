export default {
	addToCart(context, payload) {
		//判断购物车是否已经有想增加的商品
		return new Promise((resolve, reject) => {
			let isHadProduct = context.state.CartList.find(x => x.iid === payload.iid)
			if (isHadProduct) {
				// console.log('is had')
				context.commit('addCartCount', isHadProduct)
				resolve()
			} else {
				// console.log('not yet')
				payload.count = 1
				context.commit('addCart', payload)
				resolve()
			}
		})
	},
}
