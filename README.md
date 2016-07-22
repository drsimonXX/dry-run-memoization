#Dry-Run Memoization 

Dry-Run Memoization is a small project completed as a career project for/during [Udacity.com's](http://www.udacity.com "Udacity") [Front-end nanodegree course](https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001 "Udacity Front-End Nanodegree"). When a number is passed as a parameter through a memoized version of a function, after the first time only the cached mathematical result is returned on the site. The first time the number is passed as a parameter, it will show "calculating" in the console log of the browser. The project was created using JavaScript. View the project [here](https://drsimonxx.github.io/dry-run-memoization/).

##How It Works

The index.html file has three sections that display one number per section via JavaScript. The numbers are the result of calculations from the function memoizedFoo, i.e. a number passed as a parameter added to (a=2 * b=3) within the function, i.e. 6, which is in the JavaScript file memoize.js. That function also returns "calculating" to the console log, but only if a new number is passed as a parameter through the memoized function memoizedFunc.

This project uses #5 and #20 as parameters. #5 is used twice to demonstrate that it does not print out the word "calculating" the second time it is passed as a parameter. If you look at console.log, you'll see "calculating" twice, even though there are three results on the screen. This is because the middle number on the screen is a cached version of the mathematical calculated result. In the memoize.js file, if you comment out (//) "document.getElementById("memoized_3").innerHTML = memoizedFunc(20);", you should only see "calculating" once in console.log and #11 print out twice on the screen. 



