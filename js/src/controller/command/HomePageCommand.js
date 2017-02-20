/**
 * @author Mike Britton
 * 
 * @class PrepViewCommand
 * @link https://github.com/PureMVC/puremvc-js-demo-todomvc.git
 */
puremvc.define({
    name: 'todomvc.controller.command.HomePageCommand',
    parent: puremvc.SimpleCommand
}, // INSTANCE MEMBERS
{
    /** 
         * Register Mediators with the View
         * @override
         */
    execute: function(note) {
        console.log("home page command");
    }
});