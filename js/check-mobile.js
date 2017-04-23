var mobile =/^1[34578]\d{9}$/;
var nums = null;
var status10;
// check mobile number
 $(".text").change(function () {
     nums =  $(".text").val();
     if(nums==''){
         $(".code").html("手机号码不为空");
         $(".code").addClass("h").removeClass("hover");
     }
     else if(!mobile.test(nums)){
         $(".code").html("格式错误").css({"color":'red'});
     }else if (mobile.test(nums)) {
         $(".code").html("&#xe62f;").css({"color":'green'});
          status10=1;
     }
 })