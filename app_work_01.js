(function () {
'use strict';

angular.module('TooMuchEat_App', [])
.controller('MsgController', MsgController);

MsgController.$inject = ['$scope'];
function MsgController($scope) {
  $scope.text = "";         // Text in input
  $scope.sayMessage = "";   // Result Message

  // Count elements in text (filter)
  function CountElement() {
    return $scope.text.split(',').
           filter(function(x){ return x.trim() != ""}).
           length;
  }

  // Change message after clicking on the button
  $scope.CheckIfTooMuch = function() {
    var iCount = CountElement();

    if (iCount == 0)
      { $scope.sayMessage = "Please enter data first"; }

    else if (iCount<=3)
      { $scope.sayMessage = "Enjoy!"; }

    else
      { $scope.sayMessage = "Too much!"; }
  }
}
})();
