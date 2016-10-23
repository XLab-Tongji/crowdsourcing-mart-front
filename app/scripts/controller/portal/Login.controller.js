'use strict';

app.controller('LoginController', ['$scope', '$state', 'AlertTool', 'ToasterTool', 'SessionFactory', 'SessionService', function($scope,
                                                                                                                                $state, AlertTool, ToasterTool, SessionFactory, SessionService) {

  init();

  function init(){
    $scope.login = login;
  }

  function login(){
    var name = $scope.loginName;
    var password = $scope.loginPassword;

    SessionFactory.login().post({
        'username': name,
        'password': password,

    }).$promise
        .then(function(data){

          if(data.result=="没有此用户" || data.result=="密码错误"){
            var cause=data.result;
            ToasterTool.error('登录失败',cause);
          }else{
              var currentUser=data.result[0].username;
              var token=data.result[0].tokens;
              SessionService.saveUser(currentUser);
              SessionService.saveToken(token);
              ToasterTool.success('登录成功','欢迎回到众包平台!');

          }

        });
    // var loginForm = {
    //   'username': name,
    //   'password': password
    // }
    //
    // SessionFactory.login(loginForm).post({}, loginSuccess, loginFailed);
    //
    // function loginSuccess(data, headers){
    //   if (data.status=="200") {
    //
    //     var currentUser = data.result;
    //     var token=data.result;
    //     console.log(token);
    //
    //
    //     var token = headers()['x-auth-token']
    //     SessionService.saveUser(currentUser);
    //     SessionService.saveToken(token);
    //     ToasterTool.success('登录成功','欢迎回到SVG平台!');
    //   }else {
    //     ToasterTool.success('登录失败',data.message);
    //   }
    //
    // }
    // function loginFailed(error){
    //   AlertTool.error({title:'失败',text:'用户名或者密码错误'}).then(function() {
    //   });
    // }
    //ToasterTool.success('登录成功','欢迎回到众包平台!');
  }

  function encryptPassword(basePassword, userName, sbin) {
    sbin = '1234'; //未来从后台获取
    var var1 = md5(basePassword);
    var var2 = md5(var1 + userName);
    var var3 = md5(var2 + sbin.toUpperCase());
    return var3;
  }

}]);
