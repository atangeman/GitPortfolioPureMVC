/**
 * @original_author Mike Britton, Cliff Hall
 * @author2 Andrew Tangeman
 * @class TodoProxy
 * @link https://github.com/PureMVC/puremvc-js-demo-todomvc.git
 *
 */
puremvc.define({
		name: 'todomvc.model.proxy.GithubRepoProxy',
		parent: puremvc.Proxy,
		githubURL: 'https://api.github.com/users/atangeman/repos'
	},

	// INSTANCE MEMBERS
	{
		repos: [],
		//stats: {},
		//filter: todomvc.AppConstants.FILTER_ALL,
		//LOCAL_STORAGE: 'todos-puremvc',

		onRegister: function() {
			this.getRepos(this.githubURL);
		},

		loadData: function() {
			this.repos = JSON.parse(this.responseText);
			console.log(this.responseText);
			//this.filter = storageObject.filter;
			//this.computeStats();
		},
		getRepos: function(repoURL){
			var request = new XMLHttpRequest();
			// Set the event handler
			request.onload = loadData;
			// Initialize the request
			request.open('get', repoURL, true)
			// Fire away!
			request.send()
		}
	},

	// CLASS MEMBERS
	{
		NAME: 'GithubRepoProxy'
	}
);
