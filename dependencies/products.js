(function() {

	var app = angular.module('store-products', [ ]);

	app.directive('productTitle', function() {
		return {
			restrict:'A',							// for elements
			templateUrl: 'product-title.html'		// URL od a template
		};

	});

	
}) ();


