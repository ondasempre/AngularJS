(function() {

	var app = angular.module('store', [ ]);

	app.controller('StoreController', function() {
		this.products = gems;
	});

	app.controller('PanelController', function() {
		//this.tab = 1;

		this.selectTab = function(setTab) {
			this.tab = setTab;
		};

		this.isSelected = function(checkTab) {
			return this.tab === checkTab;
		};
	});

	app.controller('ReviewController', function(){
		this.review = {};

		this.addReview = function(product) {
			product.review.push(this.review);
			this.review = {};
		};


	});

	var gems = [	// array
	{
		name: 'Dodecaedro',
		price: 200.50,
		description: 'Bellissimo e costoso, ideale per chi vuole osare.',
		specifications: 'XXXX',
		canPurchase: true,
		soldOut: true,
		images: [
			{
				full: 'a.jpg',
				thumb: 'a.jpg'
			}],
		reviews: [
			{
				starts: 5,
				body: "I love this...",
				author: "joe@gmail.com"
			},
			{
				starts: 1,
				body: "I love this product !",
				author: "john@gmail.com"
			},
			{
				starts: 3,
				body: "It's a good product... ;-)",
				author: "john@gmail.com"
			}],
	},
	{
		name: 'Esagono',
		price: 230,
		description: 'Meravigliosa opera di arte moderna.',
		specifications: 'XXXX',
		canPurchase: true,
		soldOut: false,
		images: [
			{
				full: 'a.jpg',
				thumb: 'a.jpg'
			}],

			reviews: [
			{
				starts: 5,
				body: "I love this...",
				author: "joe@gmail.com"
			},
			{
				starts: 1,
				body: "I love this product !",
				author: "john@gmail.com"
			},
			{
				starts: 3,
				body: "It's a good product... ;-)",
				author: "john@gmail.com"
			}],
	},
	{
		name: 'Pentagono',
		price: 350.00,
		description: 'Ottimo per un regalo!',
		specifications: 'XXXX',
		canPurchase: false,
		soldOut: true,
		images: [
			{
				full: 'a.jpg',
				thumb: 'a.jpg'
			}],
				reviews: [
			{
				starts: 5,
				body: "I love this...",
				author: "joe@gmail.com"
			},
			{
				starts: 1,
				body: "I love this product !",
				author: "john@gmail.com"
			},
			{
				starts: 3,
				body: "It's a good product... ;-)",
				author: "john@gmail.com"
			}],
	}
	];	


}) ();






// alert(gem.name + " " + gem.price + " " + gem.description);