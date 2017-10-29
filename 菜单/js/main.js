;(function(){
    var Menu=function(__d,cus){
        this.__def={
            'content':{
                '1':['title',['123','123','123']],
                '2':['title',['123','123','123','123']],
                '3':['title',['123','123','123','123','123']],
                '4':['title',['123','123','123','123','123']],
            },
            'optionH':50,
            'width':350,
            'mainBgColor':'#4CAF50',
            'viceBgColor':'#CDDC39',
            'viceBgColorSelec':'#DC6043'
        };
        this.__warehouse=__d;
        this.__merge=this.__merge__({},this.__def,cus);
        this.__oneLis=null;//所有1级li
        this.__uls=null;//所有2级ul
        this.__as=null;//所有a
    };
    Menu.prototype={
        //初始化
        '__init':function(){
            this.__domInit();
            this.__styleInit();
            this.__fun(this);
            this.__twoLiClick(this);
        },
        //节点初始化
        '__domInit':function(){
            var aHreStr='href="javascript:void(0);"';//<a> href
            var domStr='<ul>';
            var aStyStr='style="height:'+this.__merge.optionH+'px;width:'+this.__merge.optionW+'px;line-height:'+this.__merge.optionH+'px;background:';//<a> style
            var mainAStr=aStyStr+this.__merge.mainBgColor+'"';
            var viceAStr=aStyStr+this.__merge.viceBgColor+'"';
            var ifIn=false;//还没进去过循环
            for(var tit in this.__merge.content){
                var num=this.__merge.content[tit][1];

                domStr+='<li><a '+aHreStr+' '+mainAStr+'>'+this.__merge.content[tit][0]+'</a>';

                //判断是否为第一次进入循环
                if(!ifIn){
                    domStr+='<ul style="height:'+this.__merge.optionH*num.length+'px">';
                    ifIn=true;
                }else{
                    domStr+='<ul>';
                }
                for(var i=0;i<num.length;i++){
                    domStr+='<li><a '+aHreStr+' '+viceAStr+'>'+num[i]+'</a></li>';
                }
                domStr+='</ul></li>';
            }
            domStr+='</ul>';
            this.__warehouse.innerHTML=domStr;
            this.__oneLis=this.__warehouse.children[0].children;
            this.__uls=this.__warehouse.children[0].getElementsByTagName('ul');
            this.__as=this.__warehouse.getElementsByTagName('a');
        },
        //样式初始化
        '__styleInit':function(){
            this.__warehouse.style.width=this.__merge.width+'px';
        },
        //主选项点击事件
        '__fun':function(__this){
            for(var i=0;i<this.__oneLis.length;i++){
                (function(i) {
                    /*__this.__oneAs[i].ifOn=false;
                (function(i){
                    __this.__oneAs[i].onclick=function(){
                        if(!this.ifOn){
                            this.children[1].style.height='150px';
                            __this.__oneAs[i].ifOn=true;
                        }else{
                            this.children[1].style.height='0';
                            __this.__oneAs[i].ifOn=false;
                        }
                    }
                })(i);*/
                    __this.__oneLis[i].onclick = function(){
                        for(var j=0; j<__this.__oneLis.length; j++) {
                            __this.__oneLis[j].children[1].style.height = '0';
                        }
                        this.children[1].style.height=(__this.__merge.optionH* __this.__merge.content[''+(i+ 1 )][1].length)+'px';
                    }
                })(i);
            }
        },
        //子选项点击事件
        '__twoLiClick':function(__this){
            for(var i=0;i<__this.__uls.length;i++) {
                for (var j = 0; j < __this.__uls[i].children.length; j++) {
                    __this.__uls[i].children[j].ifOn = false;
                    (function (i, j) {
                        __this.__uls[i].children[j].onclick = function () {
                            if (!this.ifOn) {
                                for(var i=0;i<__this.__uls.length;i++) {
                                    for (var a = 0; a < __this.__uls[i].children.length; a++) {
                                        __this.__uls[i].children[a].style.background = '';
                                        __this.__uls[i].children[a].ifOn = false;
                                    }
                                }
                                this.children[0].style.background = __this.__merge.viceBgColorSelec;
                                this.ifOn = true;
                            } else {
                                this.children[0].style.background = __this.__merge.viceBgColor;
                                this.ifOn = false;
                            }
                        }
                    })(i, j);
                }
            }
        },
        '__getStyle':function(d,sty){
            return d.currentStyle
                ?d.currentStyle[sty]
                :getComputedStyle(d)[sty];
        },
        '__merge__':function(mer,def,cus){
            if(!cus||JSON.stringify(cus)=='{}'){
                return def;
            }
            for(var d in def){
                for(var c in cus){
                    mer[d]=(c==d?cus[c]:def[d]);
                }
            }
            return mer;
        }
    };
    Element.prototype.__menu=function(cus){
        var me=new Menu(this,cus);
        me.__init();
    }
})();