$(document).ready(function(){

    $("#input_1").mouseenter(function(){
        $("#input_1 div").css("background-color","#679c21");
    });
    $("#input_1").mouseleave(function(){
        $("#input_1 div").css("background-color","#ffffff");
    });
    $("#input_2").mouseenter(function(){
        $("#input_1 div,#input_2 div").css("background-color","#679c21");
    });
    $("#input_2").mouseleave(function(){
        $("#input_1 div,#input_2 div").css("background-color","#ffffff");
    });
    $("#input_3").mouseenter(function(){
        $("#input_1 div,#input_2 div,#input_3 div").css("background-color","#679c21");
    });
    $("#input_3").mouseleave(function(){
        $("#input_1 div,#input_2 div,#input_3 div").css("background-color","#ffffff");
    });
    $("#input_4").mouseenter(function(){
        $("#input_1 div,#input_2 div,#input_3 div,#input_4 div").css("background-color","#679c21");
    });
    $("#input_4").mouseleave(function(){
        $("#input_1 div,#input_2 div,#input_3 div,#input_4 div").css("background-color","#ffffff");
    });
    $("#input_5").mouseenter(function(){
        $("#input_1 div,#input_2 div,#input_3 div,#input_4 div,#input_5 div").css("background-color","#679c21");
    });
    $("#input_5").mouseleave(function(){
        $("#input_1 div,#input_2 div,#input_3 div,#input_4 div,#input_5 div").css("background-color","#ffffff");
    });
    $("#input_6").mouseenter(function(){
        $("#input_1 div,#input_2 div,#input_3 div,#input_4 div,#input_5 div,#input_6 div").css("background-color","#679c21");
    });
    $("#input_6").mouseleave(function(){
        $("#input_1 div,#input_2 div,#input_3 div,#input_4 div,#input_5 div,#input_6 div").css("background-color","#ffffff");
    });
    $("#input_7").mouseenter(function(){
        $("#input_1 div,#input_2 div,#input_3 div,#input_4 div,#input_5 div,#input_6 div,#input_7 div").css("background-color","#679c21");
    });
    $("#input_7").mouseleave(function(){
        $("#input_1 div,#input_2 div,#input_3 div,#input_4 div,#input_5 div,#input_6 div,#input_7 div").css("background-color","#ffffff");
    });
    $("#input_8").mouseenter(function(){
        $("#input_1 div,#input_2 div,#input_3 div,#input_4 div,#input_5 div,#input_6 div,#input_7 div,#input_8 div").css("background-color","#679c21");
    });
    $("#input_8").mouseleave(function(){
        $("#input_1 div,#input_2 div,#input_3 div,#input_4 div,#input_5 div,#input_6 div,#input_7 div,#input_8 div").css("background-color","#ffffff");
    });
    $("#input_9").mouseenter(function(){
        $("#input_1 div,#input_2 div,#input_3 div,#input_4 div,#input_5 div,#input_6 div,#input_7 div,#input_8 div,#input_9 div").css("background-color","#679c21");
    });
    $("#input_9").mouseleave(function(){
        $("#input_1 div,#input_2 div,#input_3 div,#input_4 div,#input_5 div,#input_6 div,#input_7 div,#input_8 div,#input_9 div").css("background-color","#ffffff");
    });
    $("#input_10").mouseenter(function(){
        $("#input_1 div,#input_2 div,#input_3 div,#input_4 div,#input_5 div,#input_6 div,#input_7 div,#input_8 div,#input_9 div,#input_10 div").css("background-color","#679c21");
    });
    $("#input_10").mouseleave(function(){
        $("#input_1 div,#input_2 div,#input_3 div,#input_4 div,#input_5 div,#input_6 div,#input_7 div,#input_8 div,#input_9 div,#input_10 div").css("background-color","#ffffff");
    });
    $(".login").click(function(){
        $(".login_list").slideToggle(0);
        $(".login").toggleClass("login_style2");
        $(".login_span1").toggleClass("login_span_style2");
        $(".smile").toggleClass("smile_style2");
        $("").toggleClass("smile_span_style2");
    });
    $("#ok-circle").click(function(){
        $("#ok-circle").toggleClass("glyphicon-ok-circle_style2");
    });
    $(".movie_where").click(function(){
        $("#wherebox").slideToggle(0);
    });
    $("#wherebtn").click(function(){
        $("#wherebox").slideUp(0);
    });
});