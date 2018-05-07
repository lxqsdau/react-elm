import * as React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './header';
import wrapWithUsername from './高阶组件';

@wrapWithUsername
class Home extends React.Component {
	static defaultProps = {
		data: 3,
		num: 2
	}
	state = {
		num: 1,
		dollars: 10,
		count: 0,
		age: 0
	}
	componentWillMount() {
		this.setState({
			age: 2
		});
	}
	componentDidMount() {
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
	}
	onMouseLeaveHandler = () => {
		console.log(`State before (mouseleave): ${JSON.stringify(this.state)}`);
		this.setState({
			dollars: this.state.dollars + 20
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
		this.props.dispatch({
			type: 'RECEIVE_BOOK',
			value: { a: 5 }
		});
	}
	count = () => {
		setTimeout(() => {
			// 会执行多次，每次都会触发render
			this.setState({
				count: 1
			});
			this.setState({
				count: 2
			});
		}, 0);
	}
	render() {
		console.log('render', this.state.num);
		return (
			<div className="page-home">
				{this.props.username}
				<p>{this.state.age}</p>
				<Header />
				<Link to="/module">module</Link>
				<p>hh</p>
				<Link to="/car">car</Link>
				<p>哈哈</p>
				<button onClick={this.handle}>按钮</button>
				{this.props.data} num:{this.state.num}
				{this.state.num && <p>有数据</p>}
				<p>count:{this.state.count}</p>
				<button onClick={this.count}>count</button>
				<button id="testButton" onClick={this.onClickHandler}>Click me</button>
			</div>
		);
	}
}


export default connect(state => ({ data: state.home2.a }))(Home);

/**
 * 定时器，原生事件，ajax每次setState都会触发render
 * react事件是合并的成一次render的。
 */
/**
 * 现在：工资10000 公积金基数1860  公积金223   社保296.03  应征税工资10000 - 223 - 296.03 = 9480.97   税641.19  实发9480.97 - 641.19 - 24.47 = 8815.31
 *
 * 调整：工资10000 公积金基数10000 公积金2177  社保296.03  应征税工资10000 - 2177 - 296.03 = 7526.97  税297.70  实发7526.97 - 297.70 - 24.47 = 7204.8
 * 调整：工资12500 公积金基数10000 公积金2177  社保296.03  应征税工资12500 - 2177 - 296.03 = 10026.97 税750.39  实发10026.97 - 750.39 - 24.47 = 9252.11
 *
 * 不变：工资12500 公积金基数1860  公积金223   社保296.03  应征税工资12500 - 223 - 296.03 = 11980.97 税1141.19  实发11980.97 - 1141.19 - 24.47 = 10815.31
 * 节省：公积金多交 2177 - 223 = 1954 税1141.19 - 750.39 = 390.8  工资10815.31 - 9252.11 = 1563.2
 * 按工资12500 公积金基数10000 应得总额：公积金2177 + 工资9252.11 = 11429.11
 * 按工资12500 公积金基数1860  应得总额：公积金223 + 工资10815.31 = 11038.31   少：11429.11 - 11038.31 = 390
 * 调整：工资12500 公积金基数12500 公积金2777 社保296.03   应征税工资12500 - 2777 - 296.03 = 9426.97  税630.39  实发9426.97 - 630.39 - 24.47 = 8772.11
 * 节省750.39 - 630.39 = 120
 */
