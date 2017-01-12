var app = angular.module("flapperNews", [])

app.controller('MainCtrl', function($scope) {
    $scope.test= "Hello World !";
    $scope.posts = [
    					{"title" : "Post 1", "upvote" : 9},
    					{"title" : "Post 2", "upvote" : 4},
    					{"title" : "Post 3", "upvote" : 5},
    					{"title" : "Post 4", "upvote" : 4},
    					{"title" : "Post 5", "upvote" : 8} 
    				]
    $scope.addPost = function(){
    	if (!$scope.title || $scope.title == ""){
    		console.log($scope.title);
    		return;
    	}
    	$scope.posts.push({'title' : $scope.title, "upvote" : 0});
    	$scope.title = "";
    };
    
    $scope.incrementUpvotes = function(post){
    	post.upvote += 1;
    }
    
});