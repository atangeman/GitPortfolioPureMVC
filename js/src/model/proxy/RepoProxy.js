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
    apiURL: 'https://api.github.com',
    repoURL: '/users/atangeman/repos',
    repos: [],
    stats: {},
    //LOCAL_STORAGE: 'todos-puremvc',
    onRegister: function() {},
    getRepos: function() {
        var request = new XMLHttpRequest();
        // Set the event handler
        var self = this;
        request.onload = (()=>this.sendNotification(todomvc.AppConstants.REPOS_LOADED, {
            repos: request.response
        }));

        request.open('get', this.apiURL + this.repoURL, true)
        // Fire away!
        request.send()
    },
    getReadme: function(readmeURL) {
        var request = new XMLHttpRequest();
        // Set the event handler
        console.log("getting doc");
        console.log(readmeURL);
        request.onload = (()=>this.sendNotification(todomvc.AppConstants.README_CALLBACK, {
            data: request.response
        }));
        request.open('get', readmeURL, true)
        // Fire away!
        request.send()
    },
    getMarkdown: function(markdown) {
        var request = new XMLHttpRequest();
        // Set the event handler
        console.log("getting markdown");
        console.log(markdown);
        var postData = {
            text: markdown.data,
            mode: 'gfm',
            context: 'github/gollum'
        };

        request.onload = (()=>this.sendNotification(todomvc.AppConstants.MARKDOWN_CALLBACK, {
            data: request.response
        }));
        request.open('POST', this.apiURL + '/markdown', true);
        // Fire away!
        request.send(JSON.stringify(postData));
    },
}, // CLASS MEMBERS
{
    NAME: 'RepoProxy'
});
