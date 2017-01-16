var app = angular.module("flapperNews", ['ui.router'])


//Routes and configurations starts here 
app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
	$stateProvider
	.state('home',{
		url: '/home',
		templateUrl: '/home.html',
		controller: 'MainCtrl'
	})
	.state('posts',{
		url: '/posts/{id}',
		templateUrl: '/posts.html',
		controller: 'PostsCtrl'
	})

	$urlRouterProvider.otherwise('home');

}]);




//Factory and service defination starts here
app.factory("posts", [function(){
	var o = {
		posts:  [
					{"title" : "Post 1", "upvote" : 9, "link": "http://google.com", 'comments': ['1','2']},
					{"title" : "Post 2", "upvote" : 4, "link": "http://google.com", 'comments': ['1','2']},
					{"title" : "Post 3", "upvote" : 5, "link": "", 'comments': ['1','2']},
					{"title" : "Post 4", "upvote" : 4, "link": "http://google.com", 'comments': ['1','2']},
					{"title" : "Post 5", "upvote" : 8, "link": "", 'comments': ['1','2']} 
    
    			]
	};
	return o;
}]);




//Congtrollers definations starts here
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
    	$scope.posts.push({
  			title: $scope.title,
  			link:  $scope.link,
  			upvote: 0,
  			comments: [
    			{author: 'Joe', body: 'Cool post!', upvote: 0},
    			{author: 'Bob', body: 'Great idea but everything is wrong!', upvote: 0}
  			]
		});
    	$scope.title = "";
    	$scope.link  = "";
    };

    //Function to  increment votes
    $scope.incrementUpvotes = function(post){
    	post.upvote += 1;
    }
    
}]);


app.controller('PostsCtrl', ['$scope','posts','$stateParams', function($scope, posts, $stateParams){
	console.log("testttttt"+JSON.stringify($stateParams));
	$scope.posts = posts.posts[$stateParams.id];

	$scope.addComment = function(){
		if($scope.body == ''){
			return;
		}
		$scope.post.comments.push({
			comment_body: $scope.comment_body,
			author: 'user',
			upvote: 0
		});
		$scope.comment_body = '';
	};

}])