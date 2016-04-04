(function() {

	var app = angular.module('store', [ ]);

	app.controller('StoreController', function() {
		this.products = gems;
	});

	var gems = [	// array
	{
		name: 'Dodecaedro',
		price: 200.50,
		description: 'Bellissimo e costoso.',
		canPurchase: true,
		soldOut: true
	},
	{
		name: 'Pentagono',
		price: 350.00,
		description: 'Ottimo per un regalo!',
		canPurchase: false,
		soldOut: true
	}
	];	


}) ();






// alert(gem.name + " " + gem.price + " " + gem.description);