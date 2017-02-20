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
        this.repos = [];
        this.stats = {};
        this.filter = '';
        // Fixed DOM elements managed by this view component
        this.porfolioapp = document.querySelector('#layout');
        //this.main = this.porfolioapp.querySelector('#main');
        this.repoList = this.porfolioapp.querySelector('#repo-list');
        this.footer = this.porfolioapp.querySelector('#footer');
        this.repoCount = this.porfolioapp.querySelector('#repo-count');
        // Event listeners for fixed UI elements
        // listen to checkbox state changes, handled by #handleEvent
        //this.checkbox.addEventListener( 'change', this );
    }
}, // INSTANCE MEMBERS
{
    ENTER_KEY: 13,
    ESC_KEY: 27,
    addEventListener: function(type, listener, useCapture) {
        todomvc.view.event.AppEvents.addEventListener(this.porfolioapp, type, listener, useCapture);
    },
    createEvent: function(eventName) {
        return todomvc.view.event.AppEvents.createEvent(eventName);
    },
    dispatchEvent: function(event) {
        todomvc.view.event.AppEvents.dispatchEvent(this.porfolioapp, event);
    },
    setFilteredList: function(data) {
        var repo, icon, avatar, label, description, divDisplay, inputEditTodo, li, i, todoId, div, inputEditTodo;
        // Update instance data
        this.repos = JSON.parse(data.repos);
        // Create repo list
        for (i = 0; i < this.repos.length; i++) {
            repo = this.repos[i];
            //console.log(repo);
            // Create div text
            icon = document.createElement('div');
            icon.className = 'pure-u';
            avatar = document.createElement('img');
            avatar.className = 'email-avatar';
            avatar.setAttribute('src', repo.owner.avatar_url);
            icon.appendChild(avatar);

            label = document.createElement('h4');
            label.className = 'email-subject';
            label.setAttribute('data-repo-id', repo.id);
            label.appendChild(document.createTextNode(repo.name));

            description = document.createElement('p');
            description.className = 'email-desc';
            description.setAttribute('data-repo-id', repo.id);
            description.appendChild(document.createTextNode(repo.description));
            // Create divDisplay

            divDisplay = document.createElement('div');
            divDisplay.className = 'pure-u-3-4';
            divDisplay.setAttribute('data-todo-id', repo.id);
            divDisplay.appendChild(label);
            divDisplay.appendChild(description);
            todomvc.view.event.AppEvents.addEventListener(divDisplay, 'dblclick', function() {/*
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
            li = document.createElement('div');
            li.className = 'email-item email-item-unread pure-g';
            li.id = 'li_' + repo.id;
            li.appendChild(icon);
            li.appendChild(divDisplay);
            this.repoList.appendChild(li);
        }
        // Update UI
        //this.footer.style.display = this.stats.totalTodo ? 'block' : 'none';
        //this.updateFilter();
    },
    updateRepoCount: function() {
        var number = document.createElement('strong')
          , text = ' ' + (this.stats.repoLeft === 1 ? 'item' : 'items') + ' left';
        number.innerHTML = this.stats.repoLeft;
        this.repoCount.innerHTML = null ;
        this.repoCount.appendChild(number);
        this.repoCount.appendChild(document.createTextNode(text));
    }
}, // STATIC MEMBERS
{
    NAME: 'TodoForm',
});
