(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        // pieces = 750,
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            // docEl.style.fontSize = 100 * (clientWidth / pieces) + 'px';
            docEl.style.fontSize = clientWidth / 8 +'px';
            //pieces 是在gulp px2rem插件中设置的参数
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
var baseSize = 100
function setRem () {
  var scale = document.documentElement.clientWidth / 750
  document.documentElement.style.fontSize = (baseSize * Math.min(scale, 3)) + 'px'
}
setRem()
window.onresize = function () {
  setRem()
}