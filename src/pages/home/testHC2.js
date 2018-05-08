
export default title => WrappedComponent => class HOC extends React.Component {
	proc = (wrappedComponentInstance) => { // 方法会自动调用
		// wrappedComponentInstance 是实例
		console.log(wrappedComponentInstance, 'refs'); // 组件实例TestHOC 处理引用组件的方法
		// console.log(this, 'this'); // HOC
		wrappedComponentInstance.method();
	}
	render() {
		// console.log('2');
		console.log(this.props, 'this.props');
		const newProps = {
			test: 'hoc'
		};
		const props = Object.assign({}, this.props, newProps, { ref: this.proc });
		return (
			<div className="gao">
				{title && title}
				<WrappedComponent {...props} />
			</div>
		);
	}
};
/**
 * 函数柯里化概念：
 * 值传递函数一部分参数来调用他，让他返回一个函数来处理剩下的参数
 * fun(params)(otherParams)
 */
