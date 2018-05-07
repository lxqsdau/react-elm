// import { age as haha, str, v1, v2, foo } from './demo';

// import 导入多次只会执行一次
// setTimeout(() => {
// 	console.log(haha, str, v1, v2, foo);
// }, 1000);
// str = '123'; // import 导入的变量是只读的，不能改写


// 模块的整体加载
// import * as util from './demo';
// import a, { age, age as hh } from './demo';

// console.log(a, age, hh); // 所有export 导出的都会加载到这个对象上


// import 函数
// import('./demo').then((demo) => {
// 	console.log(demo);
// });

import { obj } from './demo';
import './demo2';

obj.a += 1;
// console.log(obj);

export default class Module extends React.Component {
	state = {}
	render() {
		console.log('module');
		return (
			<div>123345</div>
		);
	}
}
// export default Module;

/**
 * CommonJS 运行时加载
 * let { stat, exists, readFile } = require('fs');
 * 实质是整体加载fs模块，生成一个对象，再从这个对象上读取这三个方法
 * 模块是对象

 * es6模块 编译时加载 静态加载
 * import { stat, exists, readFile } from 'fs';
 * 从fs模块加载这三方法，别的不加载
 * 导致没法引用es6模块本身，因为不是对象
 */
