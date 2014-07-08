
app.controller('VerstatController', ['$scope', '$element', function ($scope, $element) {

  $scope.$watch('configs[branch.name].verstat.config', function (value) {
    if (angular.isUndefined(value.npmInstall)) value.npmInstall = true;
    if (angular.isUndefined(value.verstatGenerate)) value.verstatGenerate = true;
    $scope.config = value;
  });

  $scope.saving = false;
  $scope.save = function () {
    $scope.saving = true;
    $scope.pluginConfig('verstat', $scope.config, function () {
      $scope.saving = false;
    });
  };
}]);
