define(
	["backbone",
	 "jquery"
	],
	function(Backbone, $) {
		var view = Backbone.View.extend({
			initialize: function() {
			},
			render: function(name) {
				name = name || "you"
				this.$el.html(
					'<div class="master-head"><h1>Hey, ' + name + '!</h1></div>'
				);
			}
		});

		return view;
	}
);
