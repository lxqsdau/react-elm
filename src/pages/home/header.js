import './header.less';

class Header extends React.Component {
	state = {}
	componentDidMount() {
		console.log('Header--componentDidMount');
	}
	componentWillReceiveProps() {
		console.log('Header--componentWillReceiveProps');
	}
	render() {
		console.log('Header--render');
		return (
			<div className="home-header">
				<h2>react-elm</h2>
				<div>登录|注册</div>
			</div>
		);
	}
}
export default Header;
/**
 * 第一次渲染 render componentDidMount
 * 父组件state更新 componentWillReceiveProps  render
 */
