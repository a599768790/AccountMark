// (function(win,doc){

// 	function change(){
// 		doc.documentElement.style.fontSize=20*doc.documentElement.clientWidth/320+'px';
// 	}
// 	change();
// 	win.addEventListener('resize',change,false)
// })(window,document);


fnResize()
window.onresize = function () {
fnResize()
}
function fnResize() {
var deviceWidth = document.documentElement.clientWidth || window.innerWidth
if (deviceWidth >= 750) {
	deviceWidth = 750
}
if (deviceWidth <= 320) {
	deviceWidth = 320
}
document.documentElement.style.fontSize = (deviceWidth / 7.5) + 'px'
}
