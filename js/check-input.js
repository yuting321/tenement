var number = /[0-9]+/;
var box;
var status1,status2,status3,status4,status5,status6,status8,status9;
json = {
    a:"弓箭坊",
    b:"南京晓庄学院",
    c:"南京南",
    d:"三山街"
}
// check username
$('input[class=name]').on({"keyup" :function() {
        var val = $(this).val();
        if (val== ''){
            $("#iconfont1").html("&#xe625;");
            $("#iconfont1").css({"color":'red'});

        }
        else{
            $("#iconfont1").html("&#xe62f;");
            $("#iconfont1").css("color",'green');
             status1 = 1;
        }
        query();
    }})

    //  defined a function for get all the house name val(),
      $(window).on("change",function () {
          var  area1_val = $(".name").val();
          var  area2_val = $(".area1").find('option:selected').html();
          var  area3_val = $(".area2").find('option:selected').html();
          var  area4_val = $(".choose").find('option:selected').html();
          var  area5_val = $(".choose2").find('option:selected').html();
          var  area6_val = $(".house-type").eq(0).val();
          var  area7_val = $(".house-type").eq(1).val();
          var  area8_val = $(".house-type").eq(2).val();
          var  area9_val = $(".house-type").eq(3).val();
          var  area10_val = $(".vast").val();
          var  area11_val = $("#rent").val();
          var mobile_number = $(".text").val();
          if($(".pay").eq(0).is(':checked')){var is_month_pay="月付"} else{var is_month_pay = ''}
          if($(".pay").eq(1).is(':checked')){var is_season_pay="季付"}else{var is_season_pay= ''}
          if($(".pay").eq(2).is(':checked')){var is_year_pay="年付"}else{var is_year_pay= ''}
          if($(".pay").eq(3).is(':checked')){var is_halfyear_pay="半年付"}else{var is_halfyear_pay= ''}
          if($(".above").is(':checked')){var is_above_pay="都可以"}else{var is_above_pay= ''}
          if($(".radio").eq(0).is(':checked')){var is_single_rent ="整租";}else{var is_single_rent=''}
          if($(".radio").eq(1).is(':checked')) {var is_full_rent ="合租";}else{var is_full_rent=''}

          box = "小区名称："+ area1_val +"<br>"+"区属："+ area2_val +"   &nbsp;板块："+ area3_val +"<br>"
              +"户型："+ area6_val+ "室" + area7_val + "厅"+area8_val+"卫"+ area9_val+"阳台"+ "<br>"+
              "出租形式："+is_single_rent+is_full_rent+"<br>"
              +"卧室内容:"+area4_val+"<br>"+"选择条件："+area5_val + "<br>"
              +"面积："+area10_val+"<br>"+"租金："+ area11_val +"<br>" +"付款方式："+is_month_pay+is_season_pay+is_year_pay
              +is_halfyear_pay+ is_above_pay+"<br>"
              +"手机号码："+mobile_number;
          $("#need").html(box);
      })

// check select area
$(".area1").change(function () {
    var find = $(this).find('option:selected');
    $("#check").removeClass("hover");
    $("#check").removeClass("h");
    if($(find).text() === '区属'){
        $("#check").html("&#xe625;");
        $("#check").addClass("h");
    }else{
        $("#check").html("&#xe62f;");
        $("#check").addClass("hover");
         status2=1;
    }
})

$(".area2").change(function () {
    var find = $(this).find('option:selected');
    $("#check2").removeClass("hover");
    $("#check2").removeClass("h");
    if($(find).text() === '板块'){
        $("#check2").html("&#xe625;");
        $("#check2").addClass("h");
    }else{
        $("#check2").html("&#xe62f;");
        $("#check2").addClass("hover");
         status3=1;
    }
})

$(".choose").change(function () {
    var find = $(this).find('option:selected');
    $("#check3").removeClass("hover");
    $("#check3").removeClass("h");
    if($(find).text() === '选择卧室内容'){
        $("#check3").html("&#xe625;");
        $("#check3").addClass("h");
    }else{
        $("#check3").html("&#xe62f;");
        $("#check3").addClass("hover");
        status4=1;
    }
})

$(".choose2").change(function () {
    var find = $(this).find('option:selected');
    $("#check4").removeClass("hover");
    $("#check4").removeClass("h");
    if($(find).text() === '选择限制条件'){
        $("#check4").html("&#xe625;");
        $("#check4").addClass("h");
    }else{
        $("#check4").html("&#xe62f;");
        $("#check4").addClass("hover");
         status5=1;
    }
})
// check house type
$(".house-type").on("change",function () {
    $("#check7").removeClass("hover");
    $("#check7").removeClass("h");

    for(var i=0;i<4;i++){
        var current = $(".house-type").eq(i);
        var value = $(current).val().replace(/[^0-9]/g,'');
        if(value == undefined){
            $("#check7").addClass("h");
            $("#check7").html("&#xe625;");
        } else if(number.test(value)){
            $("#check7").html("&#xe62f;").addClass("hover");
            status6=1;
        }
    }

     if($(".house-type").eq(0).val() == 0 &&
        $(".house-type").eq(1).val()== 0 &&
        $(".house-type").eq(2).val() == 0 &&
        $(".house-type").eq(3).val() == 0){
         $("#check7").html("&#xe625;").addClass("h");
    }
    if($(".house-type").eq(0).val() == '' &&
        $(".house-type").eq(1).val()== '' &&
        $(".house-type").eq(2).val() == '' &&
        $(".house-type").eq(3).val() == ''){
        $("#check7").html("&#xe625;").addClass("h");
    }
})

$('.house-type').bind('keyup afterpaste',function(){
    this.value=this.value.replace(/[^0-9]/g,'');
    if(this.value.length > 2){
        this.value = this.value.substring(0,2);
    }
})
 // check house size
  $(".vast").on("keyup",function () {
      var value = $(".vast").val().replace(/[^0-9]/g,'');
      $("#check5").removeClass("hover");
      $("#check5").removeClass("h");
      if( value == ''|| value == undefined){
         $("#check5").html("请输入有效数字");
          $("#check5").addClass("h");
      }
      else {
          $("#check5").html("&#xe62f;");
          $("#check5").addClass("hover");
           status8=1;
      }
  })
$("#rent").on("keyup",function () {
    var value = $("#rent").val().replace(/[^0-9]/g,'');
    $("#check6").removeClass("hover");
    $("#check6").removeClass("h");
    if( value == ''|| value == undefined){
        $("#check6").html("请输入有效数字");
        $("#check6").addClass("h");
    }
    else {
        $("#check6").html("&#xe62f;");
        $("#check6  ").addClass("hover");
         status9=1;
    }
})

// if choose all,the before is disabled
$("input[name=all]").change(function () {
    if($(this).is(':checked')){
        $(".pay").attr("disabled",'');
        $(".pay").attr("checked",'');
    }else{
        $(".pay").removeAttr('disabled')
        $(".pay").removeAttr("checked",'');
    }
});

// check submit
$(".submit").on("click",function () {
    if( status1==1&& status2==1&&status3==1&&
        status4==1&& status5==1&&status6==1&&
        status8==1&&status9==1&&
                status10==1
    ){
        $("#check8").html("格式正确").css("color",'green');
    }else {
        $("#check8").html("请完善信息").css("color",'red');
    }
})
function query() {
    var val = $('input[class=name]').val();
    if(val == ''){
        $(".fuzzy-query").hide();
    }
    if(val == "弓"){
        $(".fuzzy-query").html("");
        $(".fuzzy-query").show().append('<p style="font-size:14px "> '+ json.a +' </p>');
    }
    if(val == "南"|| val=="南京"){
        $(".fuzzy-query").html("");
        $(".fuzzy-query").show().append('<p style="font-size:14px "> '+ json.b +' </p>').append('<p  style="font-size:14px "> '+ json.c +' </p>');
    }
    if(val == "三"){
        $(".fuzzy-query").html("");
        $(".fuzzy-query").show().append('<p  style="font-size:14px "> '+ json.d +' </p>');
    }
}