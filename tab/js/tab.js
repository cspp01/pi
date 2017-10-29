window.onload = function() {
    var ccTab = new Cc();
};
function Cc() {
    __this = this;
    this.__options = this.__getEleTag( 'a',this.__getEleId( 'cc-tab-option' ) );
    this.__contents = this.__getEleTag('div',this.__getEleId( 'cc-tab-content' ));
    //add click event
    for(var i = 0; i<this.__options.length; i++){
        this.__options[i].index=i;
        this.__options[i].onclick=function(){
            __this.__cclick(this.index);
        }
    }
}
Cc.prototype= {
    '__cclick': function ( __ind ) {
        for(var i = 0; i < this.__options.length; i++){
            this.__options[i].parentNode.className=this.__removeClass(this.__options[i].parentNode,'selecked');
            this.__contents[i].className=this.__removeClass(this.__contents[i],'blo');
        }
        this.__options[__ind].parentNode.className=this.__addClass(this.__options[__ind].parentNode,'selecked');
        this.__contents[__ind].className=this.__addClass(this.__contents[__ind],'blo');
    },
    '__getEleId': function ( __do ) {
        return document.getElementById( __do );
    },
    '__getEleTag': function ( __do,__pa ) {
        return __pa.getElementsByTagName( __do );
    },
    '__addClass': function ( __do,__clname ) {
        var classs=__do.className.split(' ');
        var ifAdd=true;
        for(var i = 0; i < classs.length;i++){
            if(__clname==classs[i]){
                ifAdd=false;
                break;
            }
        }
        if( ifAdd ){
            return classs.join(' ')+' '+__clname;
        }
    },
    '__removeClass': function ( __do,__clname) {
        var classs=__do.className.split(' ');
        for(var i = 0; i < classs.length;i++){
            if(__clname==classs[i]){
                classs.splice(i,1);
                break;
            }
        }
        return classs.join(' ');
    }
};