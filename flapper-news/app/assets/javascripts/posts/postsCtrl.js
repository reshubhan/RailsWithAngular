
app.controller('PostsCtrl', ['$scope','posts','post','$stateParams', function($scope, posts, post){
	console.log("tesssssst");
	$scope.post = post;

	console.log(JSON.stringify($scope.post.comments));
	console.log("testttttt"+JSON.stringify($scope.post));

	$scope.addComment = function(){
		if($scope.comment_body == ''){
			return;
		}
		posts.addComment(post.id, {comment_body: $scope.comment_body, author: 'user'})
		 .success(function(comment){
		 	$scope.post.comments.push(comment);
		 });
		$scope.comment_body = '';
	};

	$scope.incrementUpvotes =  function(comment){
		posts.upvoteComment(post, comment);
	};

}]);