import * as React from 'react';
import { Link } from 'react-router-dom';

console.log('car');
class Car extends React.Component {
	state = {
		num: 0
	}
	handle = () => {
		this.setState({
			num: this.state.num += 1
		});
	}
	render() {
		return (
			<div>
				<Link to="/">tohome</Link>
				{this.state.num}
				<button onClick={this.handle}>按钮</button>
			</div>
		);
	}
}
export default Car;
