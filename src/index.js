import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Route, HashRouter as Router, Switch } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import 'app';
import Home from 'pages/home';
import Module from 'pages/Module 的语法';
import asyncComponent from 'components/AsyncComponent';
import rootReducer from './store/reducers';

const Car = asyncComponent(() => import('./pages/car/car')); // 异步加载模块

const store = createStore(rootReducer);

const App = () => (
	<div className="react-elm">
		<Provider store={store}>
			<Router>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/car" component={Car} />
					<Route exact path="/module" component={Module} />
				</Switch>
			</Router>
		</Provider>
	</div>
);


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
