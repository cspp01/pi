;(function(){
    function Accordion(__wh,cus){
        console.log(__wh);
        this.__def={
            'content':[
                ['标题1','./img/1.jpg','#8bc34a'],
                ['标题2','./img/2.jpg','#2196f3'],
                ['标题3','./img/3.jpg','#ffc107'],
                ['标题4','./img/1.jpg','#00bcd4'],
                ['标题5','./img/p.jpg','#f44336']
            ],
            'font':{
                'size':14,
                'color':'#fff',
                'align':'middle'//top|middle|bottom
            },
            'titleW':50,
            'imageW':700,
            'imageH':300
        };
        this.__merge=$.extend({},this.__def,cus);
        console.log(this.__warehouse);
        this.__warehouse=__wh;
        this.__dt=null;
        this.__dts=null;
        this.__dds=null;
        this.__num=0;
        this.__imgs=null;
    }
    Accordion.prototype={
        '__init':function(){
            this.__domInit();
            this.__fun(this);
            this.__styleInit(this);
        },
        '__domInit':function(){
            var str='<div class="cc-accordion clearfix">';
            for(var con in this.__merge.content){
                str+='<dl>'+
                    '<dt><span>'+this.__merge.content[con][0].split('').join('<br>')+'</span></dt>'+
                    '<dd><img src="'+this.__merge.content[con][1]+'"></dd>'+
                    '</dl>';
            }
            str+='</div>';
            console.log(this.__warehouse);
            this.__warehouse.html(str);
            this.__styleDiv=this.__warehouse.find('.cc-accordion');
            this.__dts=this.__styleDiv.find('dt');
            this.__dds=this.__styleDiv.find('dd');
            this.__imgs=this.__styleDiv.find('img');
        },
        '__styleInit':function(__this){
            var n=0;
            this.__dts.each(function(i){
                $(this).css({
                    'background-color':__this.__merge.content[i][2]
                });
                n=i;
            });
            this.__num=n+1;
            this.__dds.each(function(i){
                var w=(i==0?__this.__merge.imageW:0);
                $(this).css({
                    'width':w+'px',
                    'height':__this.__merge.imageH+'px'
                })
            });
            //根据align参数来设置padding
            var align=__this.__merge.font.align;
            var titleTopArr=[];
            switch(align){
                case 'top':
                    for(var j=0;j<__this.__num.length;j++) titleTopArr.push(0);
                    break;
                case 'middle':
                    for(var k=0;k<__this.__num;k++) {
                        var middleP=(__this.__merge.imageH-__this.__dts.eq(k).find('span').outerHeight())/2;
                        titleTopArr.push(middleP);
                    }
                    break;
                case 'bottom':
                    for(var a=0;a<__this.__num;a++) {
                        var bottomP=__this.__merge.imageH-__this.__dts.eq(k).find('span').outerHeight();
                        titleTopArr.push(bottomP);
                    }
                    break;
                default:for(var b=0;b<__this.__num.length;b++) {
                    titleTopArr.push(align);
                }
            }
            console.log(titleTopArr);
            this.__dts.each(function(i){
                $(this).css({
                    'width':__this.__merge.titleW+'px',
                    'font-size':__this.__merge.font.size+'px',
                    'color':__this.__merge.font.color,
                    'padding-top':titleTopArr[i],
                    'height':(__this.__merge.imageH-titleTopArr[i])+'px'
                })
            });
            this.__warehouse.css({
                'width':__this.__merge.titleW*this.__num+__this.__merge.imageW+'px'
            });
            this.__imgs.css({
                'width':__this.__merge.imageW+'px',
                'height':__this.__merge.imageH+'px'
            })
        },
        '__fun':function(__this){
            __this.__dts.click(function(){
                __this.__dds.animate({
                    'width':0
                }, {
                    'queue':false
                });
                $(this).next().animate({
                    'width':__this.__merge.imageW+'px'
                },{
                    'queue':false
                })
            })
        }
    }
    $.fn.__ccAccordion=function(__wh, cus){
        var ad=new Accordion(__wh, cus);
        ad.__init();
    }
})();