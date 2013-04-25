require.config({
	packages: ['helloworld']
});

var deps = ['helloworld'];

define(deps, function() {
	var args = arguments;

	_.each(deps, function(path, i) {
		var arg = args[i];

		new arg();
	});

	Backbone.history.start();
});
