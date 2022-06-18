export default {
	addCartCount(state, payload) {
		payload.count += 1
	},
	addCart(state, payload) {
		payload.checked = true
		state.CartList.unshift(payload)
	},
	chanceChecked(state, payload) {
		payload.checked = !payload.checked
	},
	chanceAllChecked(state, payload) {
		for (let i of state.CartList) {
			i.checked = payload
		}
	},
}
