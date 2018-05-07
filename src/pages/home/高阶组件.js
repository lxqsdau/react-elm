/**
 * 高阶组件就是一个函数，该函数接受一个组件作为参数，返回一个新的组件
 */

// 给组件传入username
export default (OddEle) => {
	class NewComponent extends React.Component {
		state = {}
		render() {
			return <OddEle username="liu" />;
		}
	}
	return NewComponent;
};
