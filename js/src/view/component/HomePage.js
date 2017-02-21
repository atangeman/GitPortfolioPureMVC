/**
 * @author Mike Britton, Cliff Hall
 *
 * @class TodoForm
 * @link https://github.com/PureMVC/puremvc-js-demo-todomvc.git
 */
puremvc.define({
    name: 'todomvc.view.component.HomePage',
    constructor: function(event) {
        // Fixed DOM elements managed by this view component
        this.porfolioapp = document.querySelector('#layout');
        this.main = this.porfolioapp.querySelector('#main');
        // Event listeners for fixed UI elements
    }
}, // INSTANCE MEMBERS
{
    addEventListener: function(type, listener, useCapture) {
        todomvc.view.event.AppEvents.addEventListener(this.porfolioapp, type, listener, useCapture);
    },
    createEvent: function(eventName) {
        return todomvc.view.event.AppEvents.createEvent(eventName);
    },
    dispatchEvent: function(event) {
        todomvc.view.event.AppEvents.dispatchEvent(this.porfolioapp, event);
    },
    setHomePage: function(readme) {
        var div, header, contentsub, content, li, i;

        div = document.createElement('div');
        div.className = "email-content-body";

        header = document.createElement('div');
        header.className = "header";
        var h = document.createElement("H1")
        // Create a <h1> element
        var t = document.createTextNode("Home");
        // Create a text node
        h.appendChild(t);
        // Append the text to <h1>
        header.appendChild(h);

        content = document.createElement('div');
        content.innerHTML = readme.data;
        
        //content = content.firstChild;
        div.appendChild(header);
        div.appendChild(content);
        this.main.appendChild(div);
        // Update UI
        //this.footer.style.display = this.stats.totalTodo ? 'block' : 'none';
    },
    setContent: function(readme) {
        console.log(readme);
    }
}, // STATIC MEMBERS
{
    NAME: 'HomePage',
});
