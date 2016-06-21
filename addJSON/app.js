(function() {

	var app = angular.module('json', [ ]);

/* $http ajax calls really belongs in a service, 
but I'll be using them inside the controller for this demo */ 

app.controller('myCtrl', function($scope, $http) {
  /*$http.get('path/to/json').then(function(data) {
    $scope.languages = data;
  });*/
  //inputting json directly for this example
  $scope.languages = [        
    {name:"English", value:0},
    {name:"Spanish", value:1},
    {name:"German", value:3},
    {name:"Russian", value:2},
    {name:"Korean", value:1}
  ];
  $scope.save = function() {
    /*$http.post('path/to/server/file/to/save/json', $scope.languages).then(function(data) {
      $scope.msg = 'Data saved';
    });*/
    $scope.msg = 'Data sent: '+ JSON.stringify($scope.languages);
  };
});

app.controller('pageCtrl', function ($scope, $css) {

  // Binds stylesheet(s) to scope create/destroy events (recommended over add/remove)
  $css.bind({ 
    href: 'style.css'
  }, $scope);

  // Simply add stylesheet(s)
  $css.add('style.css');

  // Simply remove stylesheet(s)
  //$css.remove(['my-page/my-page.css','my-page/my-page2.css']);

  // Remove all stylesheets
  //$css.removeAll();

});


}) ();
