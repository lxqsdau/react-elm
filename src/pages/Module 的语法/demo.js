export const age = 4;
export const name = 'liu';
const str = 'lala';
const index = 0;
export {
	str as v1,
	index,
	str as v2
};
export function test() {}
export default 3;
export const obj = {
	a: 1
};

// console.log('哈哈');
// export let foo = 'aaaa';
// setTimeout(() => { foo = 'bbbb'; }, 100);

/**
 * export 命令规定的是对外的接口
 * export 1 xx
 * let m = 1;
 * export m xx
 * export { m }
 * export 导出的接口是动态绑定关系，通过该接口可以取到模块内部实时的值
 */
