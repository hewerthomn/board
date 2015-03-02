/*
 * Home Controller
 */
function HomeCtrl($scope, Board)
{
	function _init()
	{
		$scope.items = [
		{
			id: 'dog',
			name: 'Dog',
			defaults: {
				img: '/img/dog.png'
			}
		},
		{
			id: 'text',
			name: 'Text',
			defaults: { }
		}];

		$scope.newItem = $scope.items[0];
		$scope.selectedItem = null;

		Board.init();
	};

	$scope.addItem = function(item)
	{
		Board.add(item);
	};

	$scope.showDefaults = function(item)
	{
		console.log('show defaults: ', item);
	};

	_init();
};

angular
	.module('app.controllers')
	.controller('HomeCtrl', ['$scope', 'Board', HomeCtrl]);