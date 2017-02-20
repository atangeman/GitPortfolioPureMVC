/**
 * @author Mike Britton
 * 
 * @class TodoFormMediator
 * @link https://github.com/PureMVC/puremvc-js-demo-todomvc.git
 */
puremvc.define({
        name: 'todomvc.view.mediator.TodoFormMediator',
        parent: puremvc.Mediator
    },
 
    // INSTANCE MEMBERS
    {
        // Notifications this mediator is interested in 
        listNotificationInterests: function() {
            return [ todomvc.AppConstants.REPOS_LOADED ];
        },
        
        // Code to be executed when the Mediator instance is registered with the View
        onRegister: function() {
            this.setViewComponent( new todomvc.view.component.TodoForm );
            this.viewComponent.addEventListener( todomvc.view.event.AppEvents.REPOS_LOADED, this );
        },
        
        // Handle events from the view component
        handleEvent: function ( event ) {   
        /*         
            switch( event.type ) {
                case todomvc.view.event.AppEvents.REPOS_LOADED:
                    this.sendNotification( todomvc.AppConstants.SHOW_REPOS, event.repos );
                    break;
             }
            */
        },
 
        // Handle notifications from other PureMVC actors
        handleNotification: function( note ) {
            switch ( note.getName() ) {
                case todomvc.AppConstants.REPOS_LOADED:
                    this.viewComponent.setFilteredList( note.getBody() );
                    break;
            }
        },
        	/** @override */
		onRemove: function ()
		{
			// The TextComponentMediator has been removed from the Facade, and so is no longer
			// in use. Clean up by removing event listeners and dereferencing its viewComponent
			this.viewComponent.removeEventListener(todomvc.view.event.AppEvents.REPOS_LOADED, this );
			this.setViewComponent(null);
		},
    },
 
    // STATIC MEMBERS
    {
        NAME: 'TodoFormMediator'
    }    
);
