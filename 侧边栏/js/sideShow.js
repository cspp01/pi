/**
 * Created by Administrator on 2017/5/11.
 */
function set($doc,pro,step,limit){
    var time = setInterval(function(){
        sideShow($doc,pro,step,limit,time);
    },10);
}
function sideShow($doc,pro,step,limit,tim){
    var sideLeft = parseInt(getStyle($doc,pro));
    var speed = sideLeft+step;
    if(step<0){
        if(speed<limit){
            speed=limit;
        }
    }else{
        if(speed>limit){
            speed=limit;
        }
    }
    $doc.style.left=speed+'px';
    if(speed==limit){
        clearInterval(tim);
    }
}
