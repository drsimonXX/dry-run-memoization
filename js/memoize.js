$(function() {
	function memoize(foo) {
		var cache = [];
		return function(x){
			if(cache[x] == undefined) {
				cache[x] = foo(x);
			}
			return cache[x];
		};
	};

	function memoizedFoo(x) {
		var a = 2;
		var b = 3;
		var c = 0;
		
		for(var i = 0; i < x; i++) {
			for(var j = 0; j < x; j++) {
				c = a*b;
			}
		}
		console.log("calculating");
		return c + x;
	};

	var memoizedFunc = memoize(memoizedFoo);

	document.getElementById("memoized").innerHTML = memoizedFunc(5);
	document.getElementById("memoized_2").innerHTML = memoizedFunc(5);
	document.getElementById("memoized_3").innerHTML = memoizedFunc(20);
});