// mouse leave and over,  select area
$(".position span").mouseover(function () {
    $(".select-area").show();
    $(this).html("&#xe62c;");
})
$(".position span").mouseleave(function () {
    $(".select-area").hide();
    $(this).html("&#xe659;");
})