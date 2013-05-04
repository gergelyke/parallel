parallel
========

Async parallel javascript flow manager

Usage:

 ```javascript

var parallel = new Parallel();

parallel.run([function (callback) {
  callback({
		cucc: '1'
	});
}, function (callback) {
	setTimeout(function(){
		callback({
			sss : '2'
		});
	},400);
}, function (callback) {

	callback({
		ge: 'ss'
	});
}], function (data) {
	console.log(data)
});

 ```
