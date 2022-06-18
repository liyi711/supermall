module.exports = {
	plugins: {
		autoprefixer: {}, // 用来给不同的浏览器自动添加相应前缀，如-webkit-，-moz-等等
		'postcss-px-to-viewport': {
			viewportWidth: 375, // UI设计稿的宽度
			unitPrecision: 5, // 转换后的精度，即小数点位数
			viewportUnit: 'vw', // 指定需要转换成的视窗单位，默认vw
			selectorBlackList: ['myignore'], // 指定不转换为视窗单位的类名，
			minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
			mediaQuery: false, // 是否在媒体查询的css代码中也进行转换，默认false
			exclude: [/node_modules/], // 设置忽略文件，用正则做目录名匹配
			fontViewportUnit: 'vw', // 字体使用的视口单位
		},
	},
}
