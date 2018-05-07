export default function home(state = { a: 1 }, action) {
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
