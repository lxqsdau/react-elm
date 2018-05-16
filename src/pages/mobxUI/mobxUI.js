import { observer, inject } from 'mobx-react';
import { observable, action, computed } from 'mobx';

@inject('store')
@observer
class MobxUI extends React.Component {
	render() {
		return (
			<div>
				demo2
				<p>{this.props.store.a}</p>
			</div>
		);
	}
}

export default MobxUI;

