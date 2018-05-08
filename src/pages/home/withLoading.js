
export default WrappedComponent => class HOC extends React.Component {
	render() {
		console.log('1');
		return (
			<div className="second">
				<WrappedComponent />
			</div>
		);
	}
};
