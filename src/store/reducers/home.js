export default function home(state = { a: 1 }, action) {
	// console.log(action, 'action');// action.type  action.a  dispatch的参数整体是action
	switch (action.type) {
	case 'RECEIVE_NAV':
		return {
			...state,
			a: action.a
		};
	case 'RECEIVE_BOOK':
		return Object.assign({}, state, action.value);
	default:
		return state;
	}
}
