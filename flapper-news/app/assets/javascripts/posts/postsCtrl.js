
app.controller('PostsCtrl', ['$scope','posts','$stateParams', function($scope, posts, $stateParams){
	console.log("tesssssst");
	$scope.posts = [];
	$scope.posts.push(posts.posts[$stateParams.id]);
	console.log(JSON.stringify($scope.posts[0].comments));
	console.log("testttttt"+JSON.stringify($scope.posts));

	$scope.addComment = function(){
		if($scope.comment_body == ''){
			return;
		}
		$scope.posts[0].comments.push({
			comment_body: $scope.comment_body,
			author: 'user',
			upvote: 0
		});
		$scope.comment_body = '';
	};

}]);