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
		soldOut: true,
		images: [
			{
				full: 'a.jpg',
				thumb: 'a.jpg'
			}],
	},
	{
		name: 'Esagono',
		price: 230,
		description: 'Meravigliosa opera di arte moderna.',
		canPurchase: true,
		soldOut: false,
		images: [
			{
				full: 'a.jpg',
				thumb: 'a.jpg'
			}],
	},
	{
		name: 'Pentagono',
		price: 350.00,
		description: 'Ottimo per un regalo!',
		canPurchase: false,
		soldOut: true,
		images: [
			{
				full: 'a.jpg',
				thumb: 'a.jpg'
			}],
	}
	];	


}) ();






// alert(gem.name + " " + gem.price + " " + gem.description);