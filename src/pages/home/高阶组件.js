/**
 * 高阶组件就是一个函数，该函数接受一个组件作为参数，返回一个新的组件
 */

// 给组件传入username

const getDisplayName = component => component.displayName || component.name || 'Component';
export default WrappedComponent => class HOC extends React.Component {
	static displayName = `HOC(${getDisplayName(WrappedComponent)})`
	render() {
		return (
			<div className="gao">
				<div>标题</div>
				<WrappedComponent {...this.props} />
			</div>
		);
	}
};
