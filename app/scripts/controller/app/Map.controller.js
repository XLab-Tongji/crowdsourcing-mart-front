'use strict';

app.controller('MapController', ['$scope', '$state', 'ToasterTool', 'SessionService',  function($scope,
    $state, ToasterTool, SessionService) {

    $scope.data = "test";

    init();

    function init(){
      addTest();
    }

    function addTest() {
      var map = new BMap.Map("allmap");
    	var point = new BMap.Point(116.404, 39.915);
    	map.centerAndZoom(point, 15);
		map.enableScrollWheelZoom(true);

		var marker = new BMap.Marker(new BMap.Point(116.404, 39.915)); // 创建点
    	var polyline = new BMap.Polyline([
    		new BMap.Point(116.399, 39.910),
    		new BMap.Point(116.405, 39.920),
    		new BMap.Point(116.425, 39.900)
    	], {strokeColor:"blue", strokeWeight:10, strokeOpacity:0.5});   //创建折线

    	var circle = new BMap.Circle(point,500,{strokeColor:"blue", strokeWeight:2, strokeOpacity:0.5}); //创建圆

    	var polygon = new BMap.Polygon([
    		new BMap.Point(116.387112,39.920977),
    		new BMap.Point(116.385243,39.913063),
    		new BMap.Point(116.394226,39.917988),
    		new BMap.Point(116.401772,39.921364),
    		new BMap.Point(116.41248,39.927893)
    	], {strokeColor:"blue", strokeWeight:2, strokeOpacity:0.5});  //创建多边形

    	var pStart = new BMap.Point(116.392214,39.918985);
    	var pEnd = new BMap.Point(116.41478,39.911901);
    	var rectangle = new BMap.Polygon([
    		new BMap.Point(pStart.lng,pStart.lat),
    		new BMap.Point(pEnd.lng,pStart.lat),
    		new BMap.Point(pEnd.lng,pEnd.lat),
    		new BMap.Point(pStart.lng,pEnd.lat)
    	], {strokeColor:"blue", strokeWeight:2, strokeOpacity:0.5});  //创建矩形

      map.addOverlay(marker);            //增加点
  		map.addOverlay(polyline);          //增加折线
  		map.addOverlay(circle);            //增加圆
  		map.addOverlay(polygon);           //增加多边形
  		map.addOverlay(rectangle);         //增加矩形

		polyline.addEventListener("click",test);
    }

	function test(){
		alert("test");
	}

}]);
