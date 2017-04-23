
$(".guide").on({"click":function () {
    // 百度地图API功能
    var map = new BMap.Map("allmap");
    var point = new BMap.Point(118.786357,32.029113);
    map.centerAndZoom(point, 200);
    var marker = new BMap.Marker(point);  // 创建标注
    map.addOverlay(marker);               // 将标注添加到地图中
    marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
}});

//according map to find house
$(".guide").click(function(){
    if($(this).html() == '地图导航'){
        $(this).text("收起地图导航");
        $("#allmap").css({"height": 450}).slideDown(1000);
    } else {
        $(this).text("地图导航");
        $("#allmap").slideUp(1000);
    }
})




