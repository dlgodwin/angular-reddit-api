(function () {
	'use strict'

	angular.module('app.redditFrontPage').controller('RedditFrontPageCtrl', RedditFrontPageCtrl);

	function RedditFrontPageCtrl($scope, RedditFrontPageService) {
		var subreddit = "all";
		var type = "new";
		$scope.elements = [];

		RedditFrontPageService.getRedditFrontPage().then(function (response) {
			var dataset = response.data.data.children;
			
			for(var i = 0; i < dataset.length; i++) {
				$scope.elements.push(dataset[i].data);
			}
		});
	};
})();