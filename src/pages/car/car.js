import * as React from 'react';
import { Link } from 'react-router-dom';

console.log('car');
class Car extends React.Component {
	state = {}
	render() {
		return (
			<div>
				<Link to="/">tohome</Link>
			</div>
		);
	}
}
export default Car;
