angular.module("polls", ['ngRoute'])
	// Managing the poll list
	.controller('PollListCtrl', function($scope) {
    	$scope.polls = [];
	})
	// Voting / viewing poll results
	.controller('PollItemCtrl', function($scope, $routeParams) {
	    $scope.poll = {};
	    $scope.vote = function() {};
	})
	// Creating a new poll
	.controller('PollNewCtrl', function($scope) {
	    $scope.poll = {
	        question: '',
	        choices: [{ text: '' }, { text: '' }, { text: '' }]
	    };
	    $scope.addChoice = function() {
	        $scope.poll.choices.push({ text: '' });
	    };
	    $scope.createPoll = function() {};
	})
	
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.
			when('/polls', { templateUrl: 'part/list.html', controller: 'PollListCtrl' }).
            when('/poll/:pollId', { templateUrl: 'part/item.html', controller: 'PollItemCtrl' }).
            when('/new', { templateUrl: 'part/new.html', controller: 'PollNewCtrl' }).
            otherwise({ redirectTo: '/polls' });

        //$locationProvider.html5Mode(true);
	}]);


