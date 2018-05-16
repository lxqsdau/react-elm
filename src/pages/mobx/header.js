class Header extends React.Component {
	componentWillReceiveProps() {
		console.log('componentWillReceiveProps-header');
	}
	render() {
		console.log('render-header');
		return (
			<div>
				header
			</div>
		);
	}
}

export default Header;

