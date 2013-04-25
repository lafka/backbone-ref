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

The way this works is you add a plugin `js/<plugin-name>` and then
(remembering your path) add it to the `deps` array in `init.js`.
As long your plugin returns a function that can be instantiated your
good to go (see example below).

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
