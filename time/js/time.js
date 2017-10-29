window.onload=function(){
    da();
    setInterval(da,1000);
};
function da(){
    var date=new Date();
    var year=date.getFullYear();
    var month=addZ(date.getMonth()+1);
    var day=addZ(date.getDate());
    var week=s(date.getDay());
    var hour=addZ(date.getHours());
    var minutes=addZ(date.getMinutes());
    var Second=addZ(date.getSeconds());
    document.getElementById('time').innerHTML=year+'年'+month+'月'+day+'日'+week+hour+':'+minutes+':'+Second;
}
//转化星期几
function s(d){
    switch(d){
        case 1:
            return '星期一';
            break;
        case 2:
            return '星期二';
            break;
        case 3:
            return '星期三';
            break;
        case 4:
            return '星期四';
            break;
        case 5:
            return '星期五';
            break;
        case 6:
            return '星期六';
            break;
        case 0:
            return '星期七';
            break;
    }
}
//时间个位数加0
function addZ(v){
    if(v<10){
        return '0'+v;
    }
    return v;
}