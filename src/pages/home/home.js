import * as React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './header';
import TestHOC from './testHC';
/*
class Test extends React.Component {
	componentDidMount() {
		console.log(this.props, 'pppp');
	}
	method = () => {}
	render() {
		return (
			<div>123</div>
		);
	}
}
export default class TestHOC extends React.Component {
	static displayName = 'TestHOC'
	// static defaultProps = {
	// 	name: 'liu',
	// 	age: 5
	// }
	componentDidMount() {
		console.log(this.props, 'pppp');
	}
	method = () => {
		console.log('method');
	}
	proc = (ins) => {
		console.log(ins, 'ins')
	}
	render() {
		return (
			<div>
				<p>标题</p>
				{this.props.test}
				<Test ref={this.proc}  />
			</div>
		);
	}
}
*/
function test(WrappedComponent) {
	console.log(WrappedComponent.defaultProps)
	class HOC extends React.Component {
		state = {
			a: 1
		}
		render() {
			console.log(this);
			console.log(this.props, '高阶组件返回');
			return (
				<div className="body">
					{/* <WrappedComponent /> */}
					123
				</div>
			);
		}
	}
	return HOC;
}
const HOC2 = WrappedComponent => class HOC extends React.Component {
	render() {
		console.log(this)
		console.log(this.props, '高阶组件返回')
		return (
			<div className="body">
				<WrappedComponent />
			</div>
		);
	}
};
// @test // 最外层组件不是home了，所以location history属性挂在了外层组件上，要在高价组件组件上返回
class Home extends React.Component {
	static displayName = 'Home'
	static defaultProps = {
		num: 2
	}
	state = {
		num: 1,
		dollars: 10,
		count: 0,
		age: 0
	}
	componentWillMount() {
		/*
		this.setState({
			age: 2
		});
		*/
	}
	componentDidMount() {
		console.log(this.props, '父');
		console.log(this, 'this');
		/*
		this.setState({
			num: this.state.num + 1
		});
		this.setState({
			num: this.state.num + 2
		});
		// 只有最后一个有效果
		this.setState({
			num: this.state.num + 3
		});
		// 注意：在 addEventListener、setTimeout、ajax 回调中 this.setState 是立即触发的。
		document.getElementById('testButton').addEventListener('mouseleave', this.onMouseLeaveHandler);
		*/
	}
	onMouseLeaveHandler = () => {
		console.log(`State before (mouseleave): ${JSON.stringify(this.state)}`);
		// 会触发两次render
		this.setState({
			dollars: this.state.dollars + 20
		});
		console.log(`State before (mouseleave): ${JSON.stringify(this.state)}`);
		this.setState({
			dollars: this.state.dollars + 30
		});
		console.log(`State after (mouseleave): ${JSON.stringify(this.state)}`);
	}
	onClickHandler = () => {
		// 这种事件，并不会立即触发 state 的更新。所以前后得到的state是一样的
		console.log(`State before (_onClickHandler): ${JSON.stringify(this.state)}`);
		this.setState({
			dollars: this.state.dollars + 10
		});
		console.log(`State after (_onClickHandler): ${JSON.stringify(this.state)}`);
	}
	handle = () => {
		console.log(this.props);
		this.props.dispatch({
			type: 'RECEIVE_NAV',
			a: 5
		});
	}
	count = () => {
		setTimeout(() => {
			// 会执行多次，每次都会触发render
			this.setState({
				count: 1
			});
			// this.setState({
			// 	count: 2
			// });
		}, 0);
	}
	render() {
		// console.log('render', this.state.num);
		return (
			<div className="page-home">
				{this.props.username}
				<p>{this.state.age}</p>
				{/* <Header /> */}
				<Link to="/module">module</Link>
				<p>hh</p>
				<Link to="/car">car</Link>
				<p>哈哈</p>
				<button onClick={this.handle}>按钮dispatch{this.props.data}</button>
				{this.props.data} num:{this.state.num}
				{this.state.num && <p>有数据</p>}
				<p>count:{this.state.count}</p>
				<button onClick={this.count}>count</button>
				<button id="testButton" onClick={this.onClickHandler}>Click me</button>
			</div>
		);
	}
}
Home = test(Home)

export default connect(state => ({ data: state.home2.a }))(Home);
// export default Home;

/**
 * 定时器，原生事件，ajax每次setState都会触发render
 * react事件是合并的成一次render的。
 */

