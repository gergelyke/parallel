parallel
========

Async parallel javascript flow manager

Pass the funtions you want to run parallel in an array, then a callback, which will run if all functions returned. 
The parameter of the callback will be the results of the functions in the same order as in the functions array.

Usage:

 ```javascript

var parallel = new Parallel();

parallel.run([function (callback) {
	//do something here
 	callback({
		cucc: '1'
	});
}, function (callback) {
	//do something here
	setTimeout(function(){
		callback({
			sss : '2'
		});
	},400);
}, function (callback) {
	//do something here
	callback({
		ge: 'ss'
	});
}], function (data) {
	console.log(data)
});

 ```
 
 TODO: error handling
