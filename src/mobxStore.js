import { observable, computed, action } from 'mobx';

class Store {
	@observable
	a = 'a'
	@observable
	b = 'b'
	@computed
	get value() {
		return this.a + this.b;
	}
	@action
	doSomething = () => {
		this.a = '这是a';
	}
}
export default Store;
