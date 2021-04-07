(function () {
	'use strict'

	angular.module('app.redditFrontPage').factory('RedditFrontPageService', RedditFrontPageService);

		function RedditFrontPageService($http) {
			var redditFrontPageService = {};

			redditFrontPageService.getRedditFrontPage = function () {
				var subreddit = 'all';
				var type = 'hot';

				var url = "http://api.reddit.com/r/"+subreddit+"/"+type+"?jsonp=JSON_CALLBACK";
				var response = $http.jsonp(url).success(function(data) {
					if(data) {
						return data;
					}
				});

				return response;
			};
			return redditFrontPageService;
		};
})();