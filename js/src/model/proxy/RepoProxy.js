/**
 * @original_author Mike Britton, Cliff Hall
 * @author2 Andrew Tangeman
 * @class TodoProxy
 * @link https://github.com/PureMVC/puremvc-js-demo-todomvc.git
 *
 */
puremvc.define({
    name: 'todomvc.model.proxy.RepoProxy',
    parent: puremvc.Proxy,
}, // INSTANCE MEMBERS
{
    repoURL: 'https://api.github.com/users/atangeman/repos',
    repos: [],
    stats: {},
    //LOCAL_STORAGE: 'todos-puremvc',
    onRegister: function() {},
    loadData: function() {
        this.repos = JSON.parse(this.responseText);
        console.log(this.responseText);
        //this.sendNotification( todomvc.AppConstants.REPOS_LOADED, { repos:this.repos});		},
    },
    getRepos: function() {
        var request = new XMLHttpRequest();
        // Set the event handler
        var self = this;
        request.onload = (() =>
            this.sendNotification(todomvc.AppConstants.REPOS_LOADED, {
                repos: request.response
                })
            );
        console.log(this.repoURL);
        request.open('get', this.repoURL, true)
        // Fire away!
        request.send()
    },
}, // CLASS MEMBERS
{
    NAME: 'RepoProxy'
});
