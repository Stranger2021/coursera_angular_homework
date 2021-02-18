(function () {
'use strict';

angular.module('TooMuchEat_App', [])
.controller('MsgController', MsgController);

MsgController.$inject = ['$scope'];
function MsgController($scope) {
  $scope.text = "";         // Text in input
  $scope.sayMessage = "";   // Result Message

  // Count elements in text
  function CountElement() {
    var elements_source = $scope.text.split(',');
    var iCount = 0;

    elements_source.forEach((item, i) => {
      if (item.trim() != "") iCount++;
    });

    return iCount;
  }

  // Change message after clicking on the button
  $scope.CheckIfTooMuch = function() {
    var iCount = CountElement();

    if (iCount == 0)
      { $scope.sayMessage = "Please enter data first"; }

    else if (CountElement()<=3)
      { $scope.sayMessage = "Enjoy!"; }

    else
      { $scope.sayMessage = "Too much!"; }
  }
}

})();

// (function () {
// 'use strict';
//
// angular.module('MsgApp', [])
// .controller('MsgController', MsgController);
//
// MsgController.$inject = ['$scope'];
// function MsgController($scope) {
//   $scope.name = "Yaakov";
//   $scope.stateOfBeing = "hungry";
//
//   $scope.sayMessage = function () {
//     return "Yaakov likes to eat healthy snacks at night!";
//   };
//
//   $scope.feedYaakov = function () {
//     $scope.stateOfBeing = "fed";
//   };
// }
//
// })();
