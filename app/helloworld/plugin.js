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
