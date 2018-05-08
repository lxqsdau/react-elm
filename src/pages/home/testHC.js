// import HOC from './高阶组件';
// import HOC2 from './testHC2';
// import withLoading from './withLoading';

// @withLoading
// @HOC2('啦啦')
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
	render() {
		return (
			<div>
				<p>标题</p>
				{this.props.test}
			</div>
		);
	}
}
/**
 * 从上往下
 */
