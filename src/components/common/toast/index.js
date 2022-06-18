import Toast from './Toast'

const obj = {}

obj.install = function (Vue) {
	// 1.创建组件构造器
	const toastContrustor = Vue.extend(Toast)

	// 2.new一个组件对象
	const toast = new toastContrustor()

	// 3.将组件对象挂载到某个元素上面
	toast.$mount(document.createElement('div'))

	// 4.toast.$el对应创建的组件对象
	document.body.appendChild(toast.$el)

	// 5.将toast挂载到原型链上
	Vue.prototype.$mytoast = toast
}

export default obj
