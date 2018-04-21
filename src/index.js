import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Route, HashRouter as Router, Switch } from 'react-router-dom';
import 'app';
import Home from 'pages/home';
import asyncComponent from 'components/AsyncComponent';

const Car = asyncComponent(() => import('./pages/car/car')); // 异步加载模块

const App = () => (
	<div className="react-elm">
		<Router>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/car" component={Car} />
			</Switch>
		</Router>
	</div>
);


ReactDOM.render(
	<App />,
	document.getElementById('App'),
);

