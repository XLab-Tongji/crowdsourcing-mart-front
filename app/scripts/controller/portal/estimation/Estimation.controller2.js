'use strict';

app.controller('EstimationController2', ['$scope', '$state', '$rootScope', 'AlertTool', 'ToasterTool',
    'EstimationFactory2', 'SessionFactory', 'SessionService','Upload', function ($scope, $state, $rootScope, AlertTool, ToasterTool,
        EstimationFactory2, SessionFactory, SessionService,Upload) {

        init();

        function init() {
            $scope.nextStep = nextStep; 


            $scope.fchat = new Object();
            $scope.fchat.replies = [{key: 0, value: ""}];
          // 初始化时由于只有1条回复，所以不允许删除
          $scope.fchat.canDescReply = false;
          
         // 增加回复数
         $scope.fchat.incrReply = function($index) {
           $scope.fchat.replies.splice($index + 1, 0,
                 {key: new Date().getTime(), value: ""});   // 用时间戳作为每个item的key
             // 增加新的回复后允许删除
             $scope.fchat.canDescReply = true;
         }
         
          // 减少回复数
          $scope.fchat.decrReply = function($index) {
             // 如果回复数大于1，删除被点击回复
             if ($scope.fchat.replies.length > 1) {
               $scope.fchat.replies.splice($index, 1);
           }
             // 如果回复数为1，不允许删除
             if ($scope.fchat.replies.length == 1) {
               $scope.fchat.canDescReply = false;
           }
       }
       
       $scope.fchat.combineReplies = function() {
           var cr = "";
           for (var i = 0; i < $scope.fchat.replies.length; i++) {
               cr += "#" + $scope.fchat.replies[i].value;
           }
           cr = cr.substring(1);
           $log.debug("Combined replies: " + cr);
           
           return cr;
       }        
   }

   function nextStep(){
    $state.go('app.main.estimationform3');
}



}]);



