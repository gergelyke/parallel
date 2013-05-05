var Parallel = (function () {

	var run,
		ready,
		partial,
		readyCounter = 0,
		parallelCount = 0,
		callback,
		results = [];

	partial = function partial(func) {
		var args = Array.prototype.slice.call(arguments, 1);
		return function() {
			var allArguments = args.concat(Array.prototype.slice.call(arguments));
			return func.apply(this, allArguments);
		};
	}

	ready = function ready (order, data) {
		results[i] = data;
		readyCounter++;
		if(readyCounter === parallelCount) {
			results.sort();
			callback(results)
		}
	}


	run = function run (fns, cbk) {
		callback = cbk;
		parallelCount = fns.length;
		readyCounter = 0;

		for (i = 0; i < fns.length; i++) {
			fns[i](partial(ready, i));
		}
	};

	return {
		run: run
	};
});

