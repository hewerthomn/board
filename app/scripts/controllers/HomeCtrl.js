/*
 * Home Controller
 */
function HomeCtrl($scope)
{
	function _init()
	{
		$scope.items = [
		{
			id: 'dog',
			name: 'Dog',
			defaults: {	}
		},
		{
			id: 'text',
			name: 'Text',
			defaults: { }
		}];

		$scope.newItem = $scope.items[0];
		$scope.selectedItem = null;
	};

	$scope.addItem = function(item)
	{
		console.log('add item: ', item);
	};

	$scope.showDefaults = function(item)
	{
		console.log('show defaults: ', item);
	};

	_init();
};

angular
	.module('app.controllers')
	.controller('HomeCtrl', ['$scope', HomeCtrl]);