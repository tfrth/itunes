var app = angular.module('itunes');

app.service('itunesService', function($http){
  //This service is what will do the 'heavy lifting' and get our data from the iTunes API.
  //Also not that we're using a 'service' and not a 'factory' so all your method you want to call in your controller need to be on 'this'.

  //Write a method that accepts an artist's name as the parameter, then makes a 'JSONP' http request to a url that looks like this
  //https://itunes.apple.com/search?term=' + artist + '&callback=JSON_CALLBACK'
  //Note that in the above line, artist is the parameter being passed in. 
  //You can return the http request or you can make your own promise in order to manipulate the data before you resolve it.

    //Code here

// var deferred = $q.defer();

this.getArtist = function(artist) {
	
	return $http({
		method: 'JSONP',
		url: 'https://itunes.apple.com/search?term=' + artist + '&callback=JSON_CALLBACK',
	})

}

});



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








