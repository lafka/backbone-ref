require.config({
	paths   : {
		underscore   : "../vendor/underscore.js/1.4.4/underscore",
		backbone     : "../vendor/backbone.js/1.0.0/backbone",
		jquery       : "../vendor/jquery/1.9.1/dist/jquery"
	},

	shim    : {
		underscore : {
			exports: '_' },
		jquery: {
			exports: '$' },
		backbone: {
			deps   : ['underscore', 'jquery'],
			exports : 'Backbone' },
	}
});

// yes, i'm a bad, bad, boy!
require.future = function(ctx, deps) {
	var promise = new $.Deferred();

	require(deps,
		function() { promise.resolveWith(ctx, arguments); },
		function() { promise.rejectWith(ctx, arguments); })

	return promise;
};

require(['backbone', 'jquery', 'underscore'], function(Backbone, $, _) {
	require(['app'], function() {
	});
});
