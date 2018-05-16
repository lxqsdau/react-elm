import './style.less';

class Demo extends React.Component {
	componentDidMount() {
		const io = new IntersectionObserver(((el) => {
			console.log(el);
			el.forEach((item) => {
				if (item.isIntersecting) {
					const { target } = item;
					const { src } = target.dataset;
					target.src = src;
					io.unobserve(target);
				}
			});
		}));
		document.querySelectorAll('.lazy').forEach(((item) => {
			io.observe(item);
		}));
	}
	render() {
		return (
			<div>
				图片懒加载
				<div className="box">
					<div className="son1">son1</div>
					<div id="example" className="son2">son2</div>
					<p><img alt="" className="lazy" data-src="https://img.alicdn.com/tfs/TB1tbvElwoQMeJjy1XaXXcSsFXa-72-72.png" src="https://img.alicdn.com/tfs/TB1YtCgSFXXXXbIXFXXXXXXXXXX-91-79.png" /></p>
					<p><img alt="" className="lazy" data-src="https://img.alicdn.com/tfs/TB1XfbWlwMPMeJjy1XcXXXpppXa-402-102.png" src="https://img.alicdn.com/tfs/TB1YtCgSFXXXXbIXFXXXXXXXXXX-91-79.png" /></p>
					<p><img alt="" className="lazy" data-src="https://img.alicdn.com/tfs/TB1gVyYSFXXXXXoXpXXXXXXXXXX-396-300.png" src="https://img.alicdn.com/tfs/TB1YtCgSFXXXXbIXFXXXXXXXXXX-91-79.png" /></p>
				</div>
			</div>
		);
	}
}
export default Demo;
