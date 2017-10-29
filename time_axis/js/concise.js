$(function(){
    (function() {
        var $archivePage = $getEClass('archive-page');
        var num = 0;
        //文章列表在时间轴上慢慢出现
        if ($archivePage && $archivePage.length != 0) {
            var time = setInterval(function () {
                $archivePage[num].setAttribute('class', $archivePage[num].getAttribute('class') + ' transition');
                num++;
                if (num == $archivePage.length) {
                    num = 0;
                    clearInterval(time);
                }
            }, 150);
        }
        //键盘组合键弹出搜索框
        var $a = document.getElementById('my-search-a');
        document.onkeydown = function (ev) {
            var ev = ev || event;
            if (ev.altKey && ev.ctrlKey) {
                $a.click();
            }
        };
    })()
});
function style($obj,pos){
    return getComputedStyle($obj)
        ?getComputedStyle($obj)[pos]
        :$obj.currentStyle[pos];
}
function $(fun){
    window.onload=fun;
}
function $getEClass(clas){
    return document.getElementsByClassName(clas);
}