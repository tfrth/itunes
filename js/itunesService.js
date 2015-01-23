var app = angular.module('itunes'); //just making sure this page is assigned to 'itunes' app

app.service('itunesService', function($http){ //creates new service 'itunesService' and function with the $http passed in 
  //This service is what will do the 'heavy lifting' and get our data from the iTunes API.
  //Also note that we're using a 'service' and not a 'factory' so all your method you want to call in your controller need to be on 'this'.

  //Write a method that accepts an artist's name as the parameter, then makes a 'JSONP' http request to a url that looks like this
  //https://itunes.apple.com/search?term=' + artist + '&callback=JSON_CALLBACK'
  //Note that in the above line, artist is the parameter being passed in. 
  //You can return the http request or you can make your own promise in order to manipulate the data before you resolve it.

    //Code here

// var deferred = $q.defer();

this.getArtist = function(artist) {   //use this.getArtist because we are using service (like constructor function). creates getArtist function which takes a parameter of artist
	
	return $http({        //simply returning the $http with the following method and url. in this case JSONP and url ......
		method: 'JSONP',
		url: 'https://itunes.apple.com/search?term=' + artist + '&callback=JSON_CALLBACK',
	}) //closes the return $http function 

} //closes the getArtist function

});  //closes the entire service



// this.getArtist = function(name) {
// 	var deferred = $q.defer();
// 	return $http({
// 		method: 'JSONP',
// 		url: 'google.com'
// 	});
	
// 	// var deferred = $q.defer();
// 	// setTimeout(function() {
// 	// 	var number = Math.random();
// 	// 		if (number > 5) {
// 	// 			deferred.resolve({text: 'success'});
// 	// 		} else {
// 	// 			deferred.reject({error: 'done failed yo'});
// 	// 		}
// 	// 	}, 10000);

// 	return deferred.promise;          //this promise attribute has the then function attached to it
// };


// //deferred object is an object that carries a promise with it 




// his.getArtist = function(name) {

// 	var deferred = $q.defer();

// 	$http({
// 		method: 'JSONP',
// 		url: 'google.com',
// 	}).success(function(data) {
// 		var result = data.result;
// 		deferred.resolve(result);
// 	}).error(function(error){
// 		deferred.reject(error);

// 	});

// 	return deferred.promise;
// };








