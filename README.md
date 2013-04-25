# Backbone Reference

Ref for backbone/requirejs

## Get necessary stuff

```bash
# This requires epm, which you most likely don't have
make
```

## Plugins and such

Except for the vendor specific stuff there is only the `js/init.js`
file that initiates the `plugins` and fires up the system backbone
history.

The way this works is you add a plugin (which has atleast a route) to
`js/<plugin-name>` and then remembering your path add it to the `deps`
array in `init.js`. As long your plugin returns a function that can be
instantiated your good to go (see example below).

We can for instance have a self contained router (_app/helloworld/main.js_):

```javascript
define(
	["backbone",
	 "jquery",
	 "app/helloworld/view/main"
	],
	function(Backbone, $, View) {

		var router = Backbone.Router.extend({
			view: undefined,

			initialize: function() {
				this.view = new View({el: $("#content")})
			},

			routes : {
				'' : 'index',
				'name/:name' : 'greeter',
			},

			greeter: function(name) {
				this.view.render(name);
			},

			index: function() {
				this.view.render();
			},
		});

		return router;
	}
);
```

The whole point being the router itself it responsible for matching
any events and rendering thereafter. It simply assumes that
programmers are responsible people who know their subject, therefore
no special care is taken to avoid you from breaking other plugins.

One might want to have a 'canvas' 

