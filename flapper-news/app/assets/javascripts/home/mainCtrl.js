
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
      posts.create({
        title: $scope.title,
        link:  $scope.link,
      });
    	$scope.title = "";
    	$scope.link  = "";
    };

    //Function to  increment votes
    $scope.incrementUpvotes = function(post){
        console.log("ffffffffff");
    	posts.upvote(post);
    }
    
}]);