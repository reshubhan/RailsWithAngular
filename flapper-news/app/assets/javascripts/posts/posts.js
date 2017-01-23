
//Factory and service defination starts here
app.factory("posts", ['$http', function($http){
	var o = {
		posts:  [
					
    			]
	};

	o.getAll = function() {
    	return $http.get('/posts.json').success(function(data){
        	angular.copy(data, o.posts);
    	});
  	};
	return o;
}]);