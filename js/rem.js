// (function(win,doc){

// 	function change(){
// 		doc.documentElement.style.fontSize=20*doc.documentElement.clientWidth/320+'px';
// 	}
// 	change();
// 	win.addEventListener('resize',change,false)
// })(window,document);


// fnResize()
// window.onresize = function () {
// fnResize()
// }
// function fnResize() {
// var deviceWidth = document.documentElement.clientWidth || window.innerWidth
// if (deviceWidth >= 750) {
// 	deviceWidth = 750
// }
// if (deviceWidth <= 320) {
// 	deviceWidth = 320
// }
// document.documentElement.style.fontSize = (deviceWidth / 7.5) + 'px'
// }


// rem 1:100解决方案
(function (doc, win) {
            var docEl = doc.documentElement,
                resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
                recalc = function () {
                    var clientWidth = docEl.clientWidth;
                    if (!clientWidth) return;
                    docEl.style.fontSize = (clientWidth / 3.75) + 'px';
                };
            if (!doc.addEventListener) return;
            win.addEventListener(resizeEvt, recalc, false);
            doc.addEventListener('DOMContentLoaded', recalc, false);
        })(document, window);
