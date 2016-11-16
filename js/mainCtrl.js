angular.module('chatroom').controller('mainCtrl', function($scope, messageService){
  //The getMessages function will call the getData method on the messageService object.
  //You'll then save the result of that request to your controller's $scope as messages ($scope.messages)
  $scope.getMessages = function() {
    //enter the service scified function once recieved data then
    //define $scope.users

        messageService.getMessages().then(function(response) {
          console.log(response);
            $scope.messages = response.data;////////////////////////

    });
  };
  $scope.sortDate = '-';
  //The postMessage function will take whatever the user typed in (hint: look at the html and see what ng-model correlates to on the input box),
  //pass that text to the postMessage method on the messageService object which will
  //then post it to the backend.
  $scope.postMessage = function(msg) {
    //enter the service scified function once recieved data then
    //define $scope.users
      messageService.postMessage(msg).then(function(response) {
        $scope.message = "";
      // $scope.messages = response.data;//////////////////////
    });
  };

  //uncomment this code when your getMessages function is finished
  //This goes and gets new data every second, which mimicking a chat room experience.
   setInterval(function(){
    $scope.getMessages();
    $scope.getCookies();
  }, 1500);

  $scope.getCookies = function() {
    messageService.getCookies().then(function (response) {

      $scope.cookies = response.data.cookies;
    });
  };
  $scope.postCookies = function (cook) {

    messageService.postCookies(cook).then(function (response) {

      $scope.cookies = response.data;
    });

  };


});
