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
    var i = 5;  //��֪��ʾ��<a>Ԫ�صĸ���
    var m = 5;  //���ڼ���ı���
    var count = $content.find("img").length;//�ܹ���<div>Ԫ�صĸ���
    $(".movie_next").click(function(){
        if( !$content.is(":animated")){  //�ж�Ԫ���Ƿ������ڶ�������������ڶ���״̬����׷�Ӷ�����
            if(m<count){  //�ж� i �Ƿ�С���ܵĸ���
                m++;
                $content.animate({left: "-=200px"}, 300);
            }
        }
    });
    $(".movie_last").click(function(){
        if( !$content.is(":animated")){
            if(m>i){ //�ж� i �Ƿ�С���ܵĸ���
                m--;
                $content.animate({left: "+=200px"}, 300);
            }
        }
    });

});
