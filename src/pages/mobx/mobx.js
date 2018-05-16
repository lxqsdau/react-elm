import { observer, inject } from 'mobx-react';
import { observable, action, computed, autorun, runInAction, asMap } from 'mobx';
import { Link } from 'react-router-dom';
import Header from './header';
/**
 * observable 通过 observable(state) 定义组件的状态，包装后的状态是一个可观察数据（Observable Data）
 * observer: 通过 observer(ReactComponent) 定义组件。
 * action: 通过 action 来修改状态。
 */
// 通过 observable 定义组件的状态

const user = observable({
	name: 'Jay',
	age: 22
});
// 而当观测到的数据发生变化的时候，如果变化的值处在autorun中，那么autorun就会自动执行。
// autorun(() => {
// 	console.log(user.name, 'autorun2');
// });
// 通过 action 定义如何修改组件的状态
const changeName = action(async (name) => {
	const data = await Promise.resolve(`哈哈${name}`);
	runInAction('update state after fetching data', () => {
		user.name = data;
	});
});
const changeAge = action((age) => { user.age = age; });

@inject(['store']) // 注入需要的store
@observer
class MobxDemo extends React.Component {
	componentDidMount() {
		console.log(this.props.store.value, 'props');
	}
	@computed
	get value() {
		console.log('computed');
		return this.obj + this.str;
	}
	// @autorun
	@observable obj = '123'
	@observable str = 'str'
	@observable arr = [1, 2, 3]
	@action
	add = () => {
		this.obj = '7777';
	}
	handle = () => {
		// action(() => { this.obj = '456'; })();
		// this.obj = '456'; // 直接改变也可触发render
		// this.props.store.a = 'aaaa';
		// this.props.store.doSomething();
		// this.add();
		console.log(user.name);
	}
	render() {
		console.log('render-mobx');
		// console.log(this.arr.filter((value) => value === 2));
		return (
			<div className="mobx">
				mobx
				<Header />
				<p>{user.name}</p>
				<p>{this.obj}</p>
				<h1>{this.props.store.a}</h1>
				<button onClick={this.handle}>按钮</button>
				<Link to="./mobx2">mobx2</Link>
				{this.value}
			</div>
		);
	}
}
// setTimeout(() => {
// 	changeName('Wang2'); // render Wang2
// }, 2000);


export default MobxDemo;

/**
 * 改变react的state会触发shouldComponentUpdate
 * mobx可观察数据改变不会触发shouldComponentUpdate
 */
class OrderLine {
	constructor(price) {
		this.price = price;
	}
	@observable price = 0;
	@observable amount = 1;
	@computed get total() {
		return this.price * this.amount;
	}
}
const line = new OrderLine();
// console.log(OrderLine.price);
// console.log(line.price);
// console.log("price" in line); // true
// console.log(line.hasOwnProperty("price"));

