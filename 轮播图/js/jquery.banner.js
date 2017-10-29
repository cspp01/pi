;(function($){
    var bannerConstructor=function(th,op){
        this.$th=th,
        this.default={
            images:[
                'images/banner1.jpg',
                'images/banner2.jpg',
                'images/banner3.jpg',
                'images/banner4.jpg',
                'images/banner5.jpg'
            ],
            rollTime:2000,
            BWidth:100,
            BHeight:100,
            BBMarginRight:10,
            BBShapeFillet:0,
            BBBackground:'yellow',
            BBBorderStyle:[
                '10px',
                '10px',
                'red',
                'yellow'
                ]
        },
        this.exte= $.extend({},this.default,op),
        this.publicParameter={
            imagesNum:this.exte.images.length
    }

    };
    bannerConstructor.prototype={
        bannerF:function(){
            var imagesNum=this.publicParameter.imagesNum;
            var $bannerAA=$('.banner_aa');
            var $bannerA=$('.banner_a');
            var $bannerBB = $('.banner_b >div');
            var $bannerBBSel;
            var BWidth = this.exte.BWidth;
            var BHeight = this.exte.BHeight;
            var BBShapeFillet = this.exte.BBShapeFillet;
            var wid=$bannerA.width();
            var BBBorderStyle=this.exte.BBBorderStyle;
            var BBBackground = this.exte.BBBackground;
            console.log(wid);
            var rollTime=this.exte.rollTime;
            var i=1;
            sele(0);
            var time=setInterval(p,rollTime);
            $(".banner_prev").click(function(){

                if(i<imagesNum+1&&i>1){
                    i--;sele(i-1);
                    $bannerAA.animate({
                        marginLeft:"+="+wid
                    });

                }else if(i==1){
                    sele(imagesNum-1);i=imagesNum;
                    $bannerAA.animate({
                        marginLeft:-(imagesNum-1)*wid
                    });
                }
            });
            $(".banner_next").click(function(){

                if(i<imagesNum&&i>0){
                    sele(i);i++;
                    $bannerAA.animate({
                        marginLeft:"-="+wid
                    });

                }else if(i==imagesNum){
                    sele(0);i=1;
                    $bannerAA.animate({
                        marginLeft:0
                    });
                }
            });
            for(var j=1;j<imagesNum+1;j++){//
                var jj=j-1;
                console.log(wid);
                (function(){//或者把for(var j=1;...)中的var改为let;
                    var inp=jj;
                    $(".banner_b >div:eq("+jj+")").bind("click",function(){
                        sele(inp);
//                    alert(-(wid*inp));
                        $bannerAA.animate({
                            marginLeft:-wid*inp
                        });
                        i=inp+1;
                    });
                })()

            }
            function p() {
                if (i > 0 && i < imagesNum) {
                    sele(i);
                    i++;
                    $bannerAA.animate({
                        marginLeft: "-=" + wid
                    })
                } else if (i == imagesNum) {
                    sele(0);
                    i = 1;
                    $bannerAA.animate({
                        marginLeft: 0
                    })
                }
            }
            function sele(ke){
                $(".banner_b").children().removeClass("selecked");
                $(".banner_b >div:eq("+ke+")").addClass("selecked");
                $bannerBBSel = $bannerBB.filter('.selecked');
                //console.log(BBBorderStyle);
                $bannerBB.css({
                    width: BWidth,
                    height: BHeight,
                    borderRadius:BBShapeFillet,
                    boxShadow:'none',
                    background:BBBackground

                });
                $bannerBBSel.css({
                    boxShadow:'0 0 ' + BBBorderStyle[0] + ' ' + BBBorderStyle[1] + ' ' + BBBorderStyle[2],
                    background:BBBorderStyle[3]

                });
            }
            $bannerA.mouseenter(function(){
                clearInterval(time);
            });
            $bannerA.mouseleave(function(){
                time=setInterval(p,rollTime);
            });
        },
        bannerAddE:function(){
            var $ele=$('<div class="banner">'+
                        '<div class="banner_a">'+
                            '<div class="banner_prev"></div>'+
                                '<div class="banner_aa">'+
                                '</div>'+
                            '<div class="banner_next"></div>'+
                        '</div>'+
                        '<div class="banner_b">'+
                        '</div>'+
                    '</div>');
            this.$th.append($ele);
        },
        bannerStyle:function() {
            var imagesNum = this.exte.images.length;
            var $bannerAA = $('.banner_aa');
            var $bannerB = $('.banner_b');
            var $bannerBB = $('.banner_b >div');
            var $bannerBBSel = $bannerBB.filter('.selecked');
            var $bannerBBLastPrev = $('.banner_b >div:last-child').prevAll();
            var BWidth = this.exte.BWidth;
            var BHeight = this.exte.BHeight;
            var BBMarginRight = this.exte.BBMarginRight;
            var $bannerA = $('.banner_a');
            var $bannerAAA = $('.banner_aa >div');
            var wid = $bannerA.width();
            $bannerAA.css({
                'width': wid * imagesNum
            });
            $bannerAAA.css({
                'width': wid
            });
            $bannerB.css({
                width: BWidth * imagesNum + BBMarginRight * (imagesNum - 1),
                height: BHeight * imagesNum,
                marginLeft: -(BWidth * imagesNum + BBMarginRight * (imagesNum - 1)) / 2
            });
            $bannerBBLastPrev.css({
                marginRight: BBMarginRight
            });
        },
        bannerImages:function(){
            var images=this.exte.images;
            var $bannerAA='';
            var $bannerBB='';
            var i,leng;
            for(i= 0,leng=images.length;i<leng;i++){
                $bannerAA+='<div class="banner_a_'+(i+1)+'"><img src="'+images[i]+'"></div>';
                $bannerBB+='<div class="banner_b_a"></div>';
            }
            $($bannerAA).appendTo($('.banner_aa'));
            $($bannerBB).appendTo($('.banner_b'));
        }
    };
    $.fn.banner=function(op){
        var banCon=new bannerConstructor(this,op);
        banCon.bannerAddE();
        banCon.bannerImages();
        banCon.bannerStyle();
        return banCon.bannerF();
    }
})($);
