
//Congtrollers definations starts here
app.controller('MainCtrl',['$scope', 'posts','$stateParams', function($scope, posts, $stateParams) {
    $scope.test= "Hello World !";
    $scope.posts = posts.posts;

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
    			{author: 'Joe', comment_body: 'Cool post!', upvote: 0},
    			{author: 'Bob', comment_body: 'Great idea but everything is wrong!', upvote: 0}
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