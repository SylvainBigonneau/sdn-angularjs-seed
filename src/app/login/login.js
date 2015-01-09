import angular from 'angular';
import {selectModule} from 'src/common/components/select';

export var loginModule = angular.module('login', [selectModule.name]);

loginModule.controller('LoginController', $scope => {
  console.log('logged')
  $scope.loggedin = false;
});