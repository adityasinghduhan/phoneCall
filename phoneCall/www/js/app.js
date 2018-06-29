// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic']);

// app.service('CallService', function () {
  
//   var result = [{
//     number: 123
//   }];
//   console.log("called from service ");
 
//   a = new Date().getTime() - 5000;
//   console.log("a from ring", a);
//   var filters = [{
//     "name": "date",
//     "value": a,
//     "operator": ">=",
//   }];
//   callLog.getCallLog(filters, function (data) {
//     console.log(data);
//   }, function () {
//     // Error
//     console.log("error");
//   });

//   // this.getData = function(){
//   //     console.log("called from service function");
//   //     document.addEventListener('deviceready', function () {  
//   //       PhoneCallTrap.onCall(function (obj) {
//   //         var callObj = JSON.parse(obj),
//   //           state = callObj.state,
//   //           call = false;
//   //         switch (state) {
//   //           case "RINGING":
//   //             a = new Date().getTime() - 5000;
//   //             call = true;
//   //             console.log("a from ring", a);
//   //             var filters = [{
//   //               "name": "date",
//   //               "value": a,
//   //               "operator": ">=",
//   //             }];
//   //             console.log("Phone is ringing", callingNumber);
//   //             cordova.plugins.CordovaCall.endCall(success, error);
//   //             window.plugins.callLog.getCallLog(filters, function (data) {
//   //               console.log(data);
//   //             }, function () {
//   //               // Error
//   //             });

//   //             break;
//   //           case "OFFHOOK":
//   //             console.log("Phone is off-hook");
//   //             break;

//   //           case "IDLE":

//   //             console.log("a from idle", a);
//   //             console.log("call from idle", call);
//   //             var filters1 = [{
//   //               "name": "date",
//   //               "value": a,
//   //               "operator": ">=",
//   //             }];
//   //             if (call === true) {
//   //               // call=false;
//   //               console.log("inside call true", filters1);
//   //               window.plugins.callLog.getCallLog(filters1, function (data) {
//   //                 console.log("there was a call from these numbers", data);
//   //                 result = data;
//   //               }, function () {
//   //                 // Error

//   //               });
//   //             }

//   //             console.log("Phone is idle");
//   //             break;

//   //         }
//   //       });
//   //     });}
//       // return result;
//     });

    

      app.controller('callCtrl', function ($scope) {
        var thisScope = $scope;
        thisScope.mobileNumbers = [];
        $scope.removeItem = function (index) {
          $scope.mobileNumbers.splice(index, 1);
        };
        $scope.message = function () {
          var d = new Date();
          d.setHours(d.getHours() - 12);
          var filtersToday = [{
            "name": "date",
            "value": d.getTime(),
            "operator": ">=",
          }];
          console.log("here is filter2day", filtersToday);
          window.plugins.callLog.requestReadPermission();
          window.plugins.callLog.getCallLog(filtersToday, function (data) {
            console.log("here is last 12 hours callLog", data);
            console.log("here is array 1 number", data[0].number);
            thisScope.mobileNumbers = data;
            console.log("scope mobile", thisScope.mobileNumbers);
          }, function () {
            console.log("error 1", data);

          });

        }

      });







      function onSuccess(result) {
        console.log("Success:" + result);
      }

      function onError(result) {
        console.log("Error:" + result);
      }
      // var call = false;
      // var test1 ="acascsd";
      // var a = 0;
      // var myArray = [{}];
      // var callData = function(){
        
      //   var d = new Date();
      //   d.setHours(d.getHours() - 12);
      //   var filtersToday = [{
      //     "name": "date",
      //     "value": d.getTime(),
      //     "operator": ">=",
      //   }];
      //   console.log("here is filter2day",filtersToday);
      //   window.plugins.callLog.requestReadPermission();


      //   window.plugins.callLog.getCallLog(filtersToday, function(data) {
      //     console.log("here is last 12 hours callLog",data);
      //     var callList = data[0].number;
      //     console.log("here is array 1 number",callList);
      //     return callList;
      //   }, function() {
      //       console.log("error 1",data);
      //       return "error";
      //   });
      // }


      // document.addEventListener('deviceready', function() {
      //   var d = new Date();
      //   d.setHours(d.getHours() - 12);
      //   var filtersToday = [{
      //     "name": "date",
      //     "value": d.getTime(),
      //     "operator": ">=",
      //   }];
      //   console.log("here is filter2day",filtersToday);
      //   window.plugins.callLog.requestReadPermission();


      //   window.plugins.callLog.getCallLog(filtersToday, function(data) {
      //     console.log("here is last 12 hours callLog",data);
      //     var callList = data[0].number;
      //     console.log("here is array 1 number",callList);
      //   }, function() {
      //       console.log("error 1",data);
      //   });


      //   PhoneCallTrap.onCall(function(obj) {
      //     var callObj = JSON.parse(obj),
      //         state = callObj.state,
      //         callingNumber = callObj.incomingNumber;
      //         console.log('here is the callObj',callObj);

      //     switch (state) {
      //         case "RINGING":
      //             a = new Date().getTime()-5000;
      //             call=true;
      //             console.log("a from ring",a);
      //             var filters = [{
      //               "name": "date",
      //               "value": a,
      //               "operator": ">=",
      //             }];
      //             console.log("Phone is ringing", callingNumber);
      //             cordova.plugins.CordovaCall.endCall(success, error);
      //             window.plugins.callLog.getCallLog(filters, function(data) {
      //               console.log(data);
      //          }, function() {
      //               // Error
      //          });

      //             break;
      //         case "OFFHOOK":
      //             console.log("Phone is off-hook");
      //             break;

      //         case "IDLE":

      //             console.log("a from idle",a);
      //             console.log("call from idle",call);
      //             var filters1 = [{
      //               "name": "date",
      //               "value": a,
      //               "operator": ">=",
      //             }];
      //             if(call===true){
      //               // call=false;
      //               console.log("inside call true",filters1);
      //               window.plugins.callLog.getCallLog(filters1, function(data) {
      //                 console.log("there was a call from these numbers",data);
      //               }, function() {
      //                 // Error

      //                });
      //             }

      //             console.log("Phone is idle");
      //             break;
      //     }
      // });
      // });    


      var success = function () {
        console.log("success in ending call");
      }

      var error = function () {
        console.log("error in ending call");
      }




      app.run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
          if (window.cordova && window.cordova.plugins.Keyboard) {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

            // Don't remove this line unless you know what you are doing. It stops the viewport
            // from snapping when text inputs are focused. Ionic handles this internally for
            // a much nicer keyboard experience.
            cordova.plugins.Keyboard.disableScroll(true);
          }
          if (window.StatusBar) {
            StatusBar.styleDefault();
          }
        });
      })
