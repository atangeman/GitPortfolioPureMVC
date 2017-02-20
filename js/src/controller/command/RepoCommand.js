/**
 * @author Mike Britton, Cliff Hall
 * 
 * @class TodoCommand
 * @link https://github.com/PureMVC/puremvc-js-demo-todomvc.git
 */
puremvc.define ({
        name: 'todomvc.controller.command.RepoCommand',
        parent: puremvc.SimpleCommand
    },
  
    // INSTANCE MEMBERS
    {
        /** 
         * Perform business logic (in this case, based on Notification name)
         * @override
         */
        execute: function ( note ) {
            var proxy = this.facade.retrieveProxy( todomvc.model.proxy.RepoProxy.NAME );
            switch( note.getName() ) {             
                case todomvc.AppConstants.SHOW_REPOS:
                    proxy.showRepos( note.getBody() );
                    break;
                case todomvc.AppConstants.GET_REPOS:
                    console.log('getrepos');
                    proxy.getRepos();
                    break;
                default:
                    console.log('TodoCommand received an unsupported Notification');
                    break;
            } 
        }
    }    
);
