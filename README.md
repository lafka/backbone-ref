# Backbone Reference

Ref for backbone/requirejs

## Get necessary stuff

```bash
# This requires epm, which you most likely don't have
make
```

## Plugins and such

Except for the vendor specific stuff there is only the `js/init.js`
and `js/app.js` that's responsible for setting up your system.

The initialization sequence goes like this:

```
+ load app/init.js
-> Loads dependencies (underscore, Backbone, jQuery etc)

+ load app/app.js
-> Loops through all packages/dependencies and initiates them
```

The way this works is you add a plugin `js/<plugin-name>` and then
(remembering your path) add it to the `deps` array in `app.js`.

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

The whole point is to be able to have compartmentalized zero-config
code that is responsible for rendering itself. It assumes responsible
programmers that know their stuff has the power to break/override
code elsewhere. There are no abstractions to keep things safe and stop
you from doing weird stuff, in short: this is just some low-level glue
to get you up and running.
