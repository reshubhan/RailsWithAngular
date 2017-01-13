var app = angular.module("flapperNews", [])

app.factory("posts", [function(){
	var o = {
		posts:  [
    					{"title" : "Post 1", "upvote" : 9, "link": "http://google.com"},
    					{"title" : "Post 2", "upvote" : 4, "link": "http://google.com"},
    					{"title" : "Post 3", "upvote" : 5, "link": ""},
    					{"title" : "Post 4", "upvote" : 4, "link": "http://google.com"},
    					{"title" : "Post 5", "upvote" : 8, "link": ""} 
    
    			]
	};
	return o;
}]);


app.controller('MainCtrl',['$scope', 'posts', function($scope, posts) {
    $scope.test= "Hello World !";
    $scope.posts = posts.posts
    console.log(posts);
    //Function to add new post	
    $scope.addPost = function(){
    	if (!$scope.title || $scope.title == ""){
    		console.log($scope.title);
    		return;
    	}
    	$scope.posts.push({'title' : $scope.title, 'link': $scope.link ,"upvote" : 0});
    	$scope.title = "";
    	$scope.link  = "";
    };

    //Function to  increment votes
    $scope.incrementUpvotes = function(post){
    	post.upvote += 1;
    }
    
}]);