$(document).ready(function() {
    //$('#movie_about_carousel').carousel('cycle');
    $('#li_1').click(function () {
        $('#movie_about_carousel').carousel(0);
    });
    $('#li_2').click(function () {
        $('#movie_about_carousel').carousel(1);
    });
    $('#li_3').click(function () {
        $('#movie_about_carousel').carousel(2);
    });

    var $content = $(".list_demo");
    var i = 5;  //已知显示的<a>元素的个数
    var m = 5;  //用于计算的变量
    var count = $content.find("img").length;//总共的<div>元素的个数
    $(".movie_next").click(function(){
        if( !$content.is(":animated")){  //判断元素是否正处于动画，如果不处于动画状态，则追加动画。
            if(m<count){  //判断 i 是否小于总的个数
                m++;
                $content.animate({left: "-=200px"}, 300);
            }
        }
    });
    $(".movie_last").click(function(){
        if( !$content.is(":animated")){
            if(m>i){ //判断 i 是否小于总的个数
                m--;
                $content.animate({left: "+=200px"}, 300);
            }
        }
    });

});
