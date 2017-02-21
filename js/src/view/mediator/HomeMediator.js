/**
 * @author Andy Tangeman
 * 
 * @class HomeMediator
 * @link 
 */
puremvc.define({
    name: 'todomvc.view.mediator.HomeMediator',
    parent: puremvc.Mediator
}, // INSTANCE MEMBERS
{
    // Notifications this mediator is interested in 
    listNotificationInterests: function() {
        return [todomvc.AppConstants.GET_HOME,
                todomvc.AppConstants.README_CALLBACK,
                todomvc.AppConstants.MARKDOWN_CALLBACK];
    },
    // Code to be executed when the Mediator instance is registered with the View
    onRegister: function() {
        this.setViewComponent(new todomvc.view.component.HomePage);
        this.viewComponent.addEventListener(todomvc.view.event.AppEvents.GET_HOME, this);
        this.viewComponent.addEventListener(todomvc.view.event.AppEvents.README_CALLBACK, this);
    },
    // Handle notifications from other PureMVC actors
    handleNotification: function(note) {
        switch (note.getName()) {
        case todomvc.AppConstants.GET_HOME:
            console.log("getting home");
            this.viewComponent.setHomePage();
            break;
        case todomvc.AppConstants.README_CALLBACK:
            console.log("getting readme");
            this.sendNotification(todomvc.AppConstants.GET_MARKDOWN, note.getBody());
            break;
        case todomvc.AppConstants.MARKDOWN_CALLBACK:
            console.log("getting readme");
            this.viewComponent.setHomePage(note.getBody());
            break;
        }
    },
    /** @override */
    onRemove: function() {
        // The TextComponentMediator has been removed from the Facade, and so is no longer
        // in use. Clean up by removing event listeners and dereferencing its viewComponent
        this.viewComponent.removeEventListener(todomvc.view.event.AppEvents.GET_HOME, this);
        this.setViewComponent(null );
    },

    handleEvent: function(textChangedEvent) {
        this.sendNotification(todomvc.view.event.AppEvents.GET_HOME);
    }
}, // STATIC MEMBERS
{
    NAME: 'HomeMediator'
});
