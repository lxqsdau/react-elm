import './reset.less';
import createHelper from '../i18n';

// 判断语言
function getLang() {
	return navigator.language;
}
window.ZH = !!~getLang().indexOf('zh'); // ~-1 0
window.i = createHelper();

