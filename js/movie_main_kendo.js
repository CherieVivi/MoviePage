/**
 * Created by ys-iww on 2015/12/14.
 */


$(document).ready(function(){

    $('#movie_news').carousel('cycle');
    $("#li_1").click(function(){
        $("#movie_news").carousel(0);
    });
    $("#li_2").click(function(){
        $("#movie_news").carousel(1);
    });
    $("#li_3").click(function(){
        $("#movie_news").carousel(2);
    });

    var viewModel = kendo.observable({
        CurrentMovie:null,
        FirstMovie:null,

       //Movies: new kendo.data.DataSource({
       //    transport: {
       //        read: {
       //            url: "http://op.juhe.cn/onebox/movie/video?q=%E7%81%AB%E6%98%9F%E6%95%91%E6%8F%B4&key=8169564f08fbe26ae0e665f457d03057",
       //            dataType: "jsonp"
       //        }
       //    },
       //
       //    change: function(d) {
       //
       //     //   CurrentMovie
       //      //  $("#products").html(kendo.render(template, this.view()));
       //    }
       //})

    });
    kendo.bind($("#bodyContent"),viewModel);

    //

    var dt= "dtype=&q=%E7%81%AB%E6%98%9F%E6%95%91%E6%8F%B4&key=8169564f08fbe26ae0e665f457d03057";

    $.get("http://op.juhe.cn/onebox/movie/video",dt,
    function(d)
    {
      //  alert  (d);
        viewModel.set('CurrentMovie', d.result);
    },
        'jsonp'
    )

    $.get("http://op.juhe.cn/onebox/movie/video?q=%E5%9D%8F%E8%9B%8B%E5%BF%85%E9%A1%BB%E6%AD%BB&key=8169564f08fbe26ae0e665f457d03057",null,
        function(d)
        {
            //  alert  (d);
            viewModel.set('FirstMovie', d.result);
        },
        'jsonp'
    )

});
