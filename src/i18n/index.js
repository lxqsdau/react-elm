const textForCN = require('./zh');
const textForEN = require('./en');
const i18nHelperGenerator = require('i18n-helper');

export default function createHelper() {
	const i = i18nHelperGenerator(window.ZH ? textForCN : textForEN);
	i.keyNotFound = key => `文案暂缺: ${key}`;
	return i;
}
