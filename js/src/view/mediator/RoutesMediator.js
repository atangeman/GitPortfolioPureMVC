/**
 * @author Cliff Hall
 * 
 * @class RoutesMediator
 * @link https://github.com/PureMVC/puremvc-js-demo-todomvc.git
 */
puremvc.define({
        name: 'todomvc.view.mediator.RoutesMediator',
        parent: puremvc.Mediator
    },
 
    // INSTANCE MEMBERS
    {
        // the router (Flatirion Director)
        router: null,
 
        // setup the routes when mediator is registered
        onRegister: function() {
            
            var todoProxy    = this.facade.retrieveProxy( todomvc.model.proxy.RepoProxy.NAME ),
                defaultRoute = this.getRouteForSelection(), 
                options      = { resource:this, notfound:this.handleHomePage },
                routes       = {
                   '/':            this.handleHomePage,
                   '/repos':       this.handleRepoPage,
                   '/cv':          this.handleCVPage
                };
 
            this.router = new Router( routes ).configure( options );
            this.router.init( defaultRoute );
        },
       
        getRouteForSelection: function( selection ) {
            var route;
            switch (selection) {
                case todomvc.AppConstants.GET_HOME:
                    route = '/';
                    break;
 
                case todomvc.AppConstants.GET_REPOS:
                    route = '/repos';
                    break;

            }
            return route;
        },
        
        // route handlers
        handleHomePage: function () {
            this.resource.facade.sendNotification(todomvc.AppConstants.GET_HOME);
        },
 
        handleRepoPage: function () {
            this.resource.facade.sendNotification(todomvc.AppConstants.GET_REPOS);
        },
 
        handleCVPage: function () {
            this.resource.facade.sendNotification( todomvc.AppConstants.FILTER_TODOS, todomvc.AppConstants.FILTER_COMPLETED );
        },
    
     },
     
     // STATIC MEMBERS
     {
         NAME: 'RoutesMediator'
     }    
);
