import { request } from './request'

export function getHomeData() {
	return request({
		url: '/home/multidata',
	})
}

export function getHomeGoods(type, page) {
	return request({
		url: 'home/data',
		//此会自动拼接到url后面
		params: {
			type,
			page,
		},
	})
}
