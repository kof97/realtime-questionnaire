angular.module("polls", [])
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.
			when('/polls', { templateUrl: 'part/list.html', controller: PollListCtrl }).
            when('/poll/:pollId', { templateUrl: 'part/item.html', controller: PollItemCtrl }).
            when('/new', { templateUrl: 'part/new.html', controller: PollNewCtrl }).
            otherwise({ redirectTo: '/polls' });
	}]);


