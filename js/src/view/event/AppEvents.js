/**
 * @author Cliff Hall
 *
 * @class AppEvents
 * @link https://github.com/PureMVC/puremvc-js-demo-todomvc.git
 */
puremvc.define({ name: 'todomvc.view.event.AppEvents' }, {},               
    // STATIC MEMBERS   
    {   
        // Event name constants
        REPOS_LOADED:    'repos_loaded',
        
        // Create event (cross-browser)
        createEvent: function( eventName ) {
            var event;
            if( document.createEvent ) {
               event = document.createEvent( 'Events' );
               event.initEvent( eventName, false, false );
            } else if ( document.createEventObject ) {
               event = document.createEventObject();
            }
            return event;
        },
        
        // Add event listener (cross-browser)
        addEventListener: function( object, type, listener, useCapture ) {               
            if ( object.addEventListener ) {
               object.addEventListener( type, listener, useCapture );
            } else if ( object.attachEvent ) {
               object.attachEvent( type, listener );
            }
        },
               
        // Dispatch event (cross-browser)
        dispatchEvent: function( object, event ) {
            if ( object.dispatchEvent ) {
               object.dispatchEvent( event );
            } else if ( object.fireEvent ) {
               object.fireEvent( event.type, event );
            }
        },
    }
);
