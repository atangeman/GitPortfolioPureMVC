/**
 * @author Mike Britton, Cliff Hall
 * 
 * @class PrepControllerCommand
 * @link https://github.com/PureMVC/puremvc-js-demo-todomvc.git
 */
puremvc.define({
    name: 'todomvc.controller.command.PrepControllerCommand',
    parent: puremvc.SimpleCommand
}, // INSTANCE MEMBERS
{
    /** 
         * Register Commands with the Controller
         * @override
         */
    execute: function(note) {
        // This registers multiple notes to a single command which performs different logic based on the note name.
        // In a more complex app, we'd usually be registering a different command to each notification name.
        this.facade.registerCommand(todomvc.AppConstants.GET_README, todomvc.controller.command.RepoCommand);
        this.facade.registerCommand(todomvc.AppConstants.GET_REPOS, todomvc.controller.command.RepoCommand);
        this.facade.registerCommand(todomvc.AppConstants.GET_HOME, todomvc.controller.command.HomePageCommand);
                this.facade.registerCommand(todomvc.AppConstants.GET_MARKDOWN, todomvc.controller.command.RepoCommand);
    }
});
