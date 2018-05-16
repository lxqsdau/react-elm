import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
// import Thenjs from 'thenjs';
// import axios from 'axios';
import { Route, HashRouter as Router, Switch } from 'react-router-dom';
// import { createStore } from 'redux';
// import { Provider } from 'react-redux';
// import 'app';
// import Home from 'pages/home';
import Mobx from 'pages/mobx';
import Mobx2 from 'pages/mobxUI';
import ImgLazyLoad from 'pages/imgLazyLoad';
import Store from './mobxStore';
// import Module from 'pages/Module 的语法';
// import asyncComponent from 'components/AsyncComponent';
// import rootReducer from './store/reducers';

// const Car = asyncComponent(() => import('./pages/car/car')); // 异步加载模块
console.log('hh2');
// const store = createStore(rootReducer);
const App = () => (
	<div className="react-elm">
		{/* <Provider store={store}> */}
		{/* 这里可以注入多个store */}
		<Provider store={new Store()}>
			<Router>
				<Switch>
					{/* <Route exact path="/" component={Home} /> */}
					<Route exact path="/mobx" component={Mobx} />
					<Route exact path="/mobx2" component={Mobx2} />
					<Route exact path="/img" component={ImgLazyLoad} />
				</Switch>
			</Router>
		</Provider>
	</div>
);

/*
function test(WrappedComponent) {
	// console.log(WrappedComponent, 'a'); // HOC2
	// console.log(WrappedComponent.defaultProps)
	class HOC extends WrappedComponent { // 反向继承
		state = {
			a: 1
		}
		componentDidMount() {
			console.log('HOC');
		}
		render() {
			// console.log(this);
			console.log(this, '高阶组件返回');
			return (
				<div className="body">
					<WrappedComponent dispatch="dispatch" /> {/* 相当于给HOC2传递了属性 }
					456
				</div>
			);
			// return (
			// 	<div className="haha">
			// 		{super.render()}
			// 	</div>
			// );
		}
	}
	return HOC;
}
*/
/*
function looding(WrappedComponent) {
	// console.log(WrappedComponent, 'b'); // app
	class HOC2 extends React.Component {
		static defaultProps = {
			b: 1
		}
		componentDidMount() {
			console.log('HOC2');
		}
		render() {
			console.log(this, '1');
			return (
				<div className="inner">
					第二个
					<WrappedComponent age="3" />
				</div>
			)
		}
	}
	return HOC2;
}
*/
/**
 * 1 looding
 * <HOC2>
 * <div className="inner">第二个<App age="3" /></div>
 * </HOC2>
 * 2 test
 * <HOC className="body"><HOC2 dispatch="dispatch"></HOC2>456</HOC> 返回一个组合好的组件 然后再渲染
 * 首先从最外层开始渲染
 */
// @test
// @looding // 先包装loading
// 模仿查询回调函数
/*
function task(arg, callback) {
	setTimeout(() => { callback(null, 22); }, 2000); // callback(null, 22) 把22结果返回下个then的result
}
*/
/*
// 并行执行
Thenjs.each([1, 2, 3], (cont, value) => {
	console.log(value);
	task(value * 2, cont);
}).then((cont, result) => {
	console.log(result);
});

// 串行执行
Thenjs.eachSeries([0, 1, 2], (cont, value) => {
	console.log(value);
	task(value * 2, cont);
})
	.then((cont, result) => {
		console.log(result);
	});
console.log('哈哈');

// parallel 并行执行 都执行完输出结果，进入下一个then
Thenjs.parallel([
	(cont) => { task(88, cont); },
	(cont) => { cont(null, 99); }
])
	.then((cont, result) => {
		console.log(result);
	});

// series 串行执行
const aa = Thenjs.series([
	(cont) => { task(88, cont); },
	(cont) => { cont(null, 99); }
]).then((cont, result) => {
	console.log(result);
	cont(null, axios.get('http://localhost:8080/api/v1/cities?type=guess').then(res => res.data));
}).then((cont, result) => {
	result.then((res) => {
		console.log(res);
		cont(null, res);
	});
}).then((cont, result) => {
	console.log(result);
})
	.fail((cont, error) => {
		console.error(error);
	});
console.log(aa);
*/
/*

class App extends React.Component {
	static defaultProps = {
		aa: 1
	}
	// method = () => {}
	componentDidMount() {
		// console.log(this.props, '2'); // {} 空对象
	}
	render() {
		return (
			<div>123</div>
		);
	}
}
*/

ReactDOM.render(
	<App />,
	document.getElementById('App'),
);


/*
function test(target) {
	console.log(target);
}

@test
class A {
	@has
	age = 3; // 实例属性
	say() {
		console.log(this.age);
	}
	static big = 5; // 静态属性
}
function has(target, name, descriptor) {
	console.log(target, name, descriptor);
}
const a = new A();
console.log(a);
// a.say();
// // console.log(A.big);
// class B extends A {
// 	age = 1;
// 	look() {
// 		console.log(this.age, new.target);
// 	}
// }
// const b = new B();
// console.log(b);
// b.say();
// b.look();
*/
