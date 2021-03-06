'use strict';

// Declare app level module which depends on filters, and services
angular.module('demo', 
		[
		 'ngRoute',
		 'demo.store',
		 'demo.cart'
		]
)
.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/store', 
		{
			templateUrl: 'partials/store.html', 
			controller: 'StoreCtrl'
		}
    );
    $routeProvider.when('/cart', 
		{
			templateUrl: 'partials/cart.html', 
			controller: 'CartCtrl'
		}
   	);
    $routeProvider.otherwise({redirectTo: 'store'});
}])
;