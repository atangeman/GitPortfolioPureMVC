/**
 * @author Mike Britton, Cliff Hall
 *
 * @class TodoForm
 * @link https://github.com/PureMVC/puremvc-js-demo-todomvc.git
 */
puremvc.define({
		name: 'todomvc.view.component.TodoForm',
		constructor: function(event) {
			// data
			this.repos  = [];
			this.stats  = {};
			this.filter = '';
			// Fixed DOM elements managed by this view component
			this.porfolioapp        = document.querySelector( '#porfolioapp' );
			this.main               = this.porfolioapp.querySelector( '#main' );
			this.repoList           = this.porfolioapp.querySelector( '#repo-list' );
			this.footer             = this.porfolioapp.querySelector( '#footer' );
			this.repoCount          = this.porfolioapp.querySelector( '#repo-count' );
			/*
			this.filters            = this.porfolioapp.querySelector( '#filters' );
			this.filterAll          = this.filters.querySelector( '#filterAll' );
			this.filterActive       = this.filters.querySelector( '#filterActive' );
			this.filterCompleted    = this.filters.querySelector( '#filterCompleted' );*/
			// Event listeners for fixed UI elements
			// listen to checkbox state changes, handled by #handleEvent
			//this.checkbox.addEventListener( 'change', this );
		}
	},

	// INSTANCE MEMBERS
	{
			ENTER_KEY: 13, 
			ESC_KEY: 27,

			addEventListener: function ( type, listener, useCapture ){
				todomvc.view.event.AppEvents.addEventListener ( this.porfolioapp, type, listener, useCapture );
			},

			createEvent: function( eventName ) {
			   return todomvc.view.event.AppEvents.createEvent( eventName );
			},

			dispatchEvent: function( event ) {
			   todomvc.view.event.AppEvents.dispatchEvent( this.porfolioapp, event );
			},			

			setFilteredList: function( data ) {
				var repo, checkbox, label, deleteLink, divDisplay,
					inputEditTodo, li, i, todoId, div, inputEditTodo;
				// Update instance data
				this.repos = JSON.parse(data.repos);
				
				// Hide main section if no todos
				//this.main.style.display = this.stats.totalTodo ? 'block' : 'none';

				// Create Todo list
				//this.repoList.innerHTML = '';
				//this.newTodoField.value = '';
				for (i=0; i < this.repos.length; i++ ) {

					repo = this.repos[i];
					console.log(repo);
					// Create div text
					label = document.createElement( 'label' );
					label.setAttribute( 'data-repo-id', repo.id );
					label.appendChild( document.createTextNode( repo.name ) );

					// Create divDisplay
					divDisplay = document.createElement( 'div' );
					divDisplay.className = 'view';
					divDisplay.setAttribute( 'data-todo-id', repo.id );
					divDisplay.appendChild( label );
					todomvc.view.event.AppEvents.addEventListener( divDisplay, 'dblclick', function() {
						/*
						todoId = this.getAttribute( 'data-todo-id' );
						div = document.getElementById( 'li_' + todoId );
						inputEditTodo = document.getElementById( 'input_' + todoId );
						inputEditTodo.setAttribute( 'data-todo-id', todoId );
						div.className = 'editing';
						inputEditTodo.focus();*/

					});
/*
					todomvc.view.event.AppEvents.addEventListener( inputEditTodo, 'keydown', function( event ) {
						if ( event.keyCode === this.component.ESC_KEY ) {
							this.component.abandonEditTodo( event );
						}
					});

					todomvc.view.event.AppEvents.addEventListener( inputEditTodo, 'blur', function( event ) {
						this.component.dispatchUpdateTodo( event );
					});
*/
					// Create Todo ListItem and add to list
					li = document.createElement( 'li' );
					li.id = 'li_' + repo.id;
					li.appendChild( divDisplay );
					this.repoList.appendChild( li );
				}

				// Update UI
				//this.footer.style.display = this.stats.totalTodo ? 'block' : 'none';
				//this.updateFilter();

			},

			getTodoById: function( id ) {
			   var i;
				for ( i = 0; i < this.todos.length; i++ ) {
					if ( this.todos[ i ].id === id ) {
						return this.todos[i];
					}
				}
			},

			updateFilter: function() {
				this.filterAll.className        = ( this.filter === todomvc.AppConstants.FILTER_ALL ) ? 'selected' : '';
				this.filterActive.className     = ( this.filter === todomvc.AppConstants.FILTER_ACTIVE ) ? 'selected' : '';
				this.filterCompleted.className  = ( this.filter === todomvc.AppConstants.FILTER_COMPLETED ) ? 'selected' : '';

			},
	
			updateTodoCount: function() {
				var number = document.createElement( 'strong' ),
					text   = ' ' + (this.stats.todoLeft === 1 ? 'item' : 'items' ) + ' left';
				number.innerHTML = this.stats.todoLeft;
				this.todoCount.innerHTML = null;
				this.todoCount.appendChild( number );
				this.todoCount.appendChild( document.createTextNode( text ) );
			}
	},

	// STATIC MEMBERS
	{
		NAME: 'TodoForm',
	}
);
