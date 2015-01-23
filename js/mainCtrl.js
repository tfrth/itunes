var app = angular.module('itunes');

app.controller('mainCtrl', function($scope, itunesService){ //itunesService injected into the controller 
  //This is setting up the default behavior of our ng-grid. The important thing to note is
  //the 'data' property. The value is 'songData'. That means ng-grid is looking for songData on $scope and is putting whatever songData is into the grid.
  //this means when you make your iTunes request, you'll need to get back the information, parse it accordingly, then set it to songData on the scope -> $scope.songData = ...
  $scope.gridOptions = {   //still a litlte confused what this is and how to manipulate
      data: 'songData',
      height: '110px',
      sortInfo: {fields: ['Song', 'Artist', 'Collection', 'Type'], directions: ['asc']},
      columnDefs: [
        {field: 'Play', displayName: 'Play', width: '40px', cellTemplate: '<div class="ngCellText" ng-class="col.colIndex()"><a href="{{row.getProperty(col.field)}}"><img src="http://www.icty.org/x/image/Miscellaneous/play_icon30x30.png"></a></div>'},
        {field: 'Artist', displayName: 'Artist'},
        {field: 'Collection', displayName: 'Collection'},
        {field: 'AlbumArt', displayName: 'Album Art', width: '110px', cellTemplate: '<div class="ngCellText" ng-class="col.colIndex()"><img src="{{row.getProperty(col.field)}}"></div>'},
        {field: 'Type', displayName: 'Type'},
        {field: 'CollectionPrice', displayName: 'Collection Price'},
      ]
  };

  //Our controller is what's going to connect our 'heavy lifting' itunesService with our view (index.html) so our user can see the results they get back from itunes.

  //First inject itunesService into your controller.


  // $scope.getArtist = function() {
  //   $scope.artist = itunesService.getArtist().then(function(data) {
  //     $scope.songData = data;
  //   });
  // };

  // $scope.getArtist();




  //Now write a function that will call the method on the itunesService that is responsible for getting the data from iTunes, whenever the user clicks the submit button
  //*remember, that method should be expecting an artist name. The artist name is coming from the input box on index.html, head over there and check if that input box is tied to any specific model we could use.
  //Also note that that method should be retuning a promise, so you could use .then in this function.
    
$scope.getSongData = function() {   //new function getSongData now on the scope
  itunesService.getArtist($scope.artist).then(function(data) { //runs the getArtist function on the itunesService factory with the '$scope.artist' (entered in by the user in the view. Goes into effect when the user clicks "search"). the .then means to wait for the promise to return with the data and then moves onto the rest of the function!
    $scope.songData = data;           //this sets the songData to the data returned from the $http return in the service
    var results = data.data.results;  //creats new var results and it the information 2 levels deep into "data" (i.e. data.data.results). find this information in the object when logged in console 
    //$scope.artist = "";
 
 var newArr = [];  //create newArr that is an empty array. 
  
 for (var i = 0; i < results.length; i++) {  //starts for loop to loop through "results". the results are tied to the artist name entered in the view. the artist name is added to the return $http to get the data on that specific artist 
    var artistObj = {  //creates new object to assign the desired keys in results. 
        AlbumArt: results[i].artworkUrl100,
        Artist: results[i].artistName,
        Collection: results[i].collectionName,
        CollectionPrice: results[i].collectionPrice,
        Play: results[i].previewUrl,
        Type: results[i].kind
    };
  newArr.push(artistObj);  //the object created is pushed into newArr which was up until now empty 
    }
$scope.songData = newArr;  // songData is 
  })
  };
});
// $scope.getArtist();
  //Check that the above method is working by entering a name into the input field on your web app, and then console.log the result




  //If everything worked you should see a huge array of objects inside your console. That's great! But unfortunately that's not what ng-grid is expecting. What you need to do now
  //is sort the data you got back to be an object in the following format.
    /*
      AlbumArt: "http://a3.mzstatic.com/us/r30/Features4/v4/22/be/30/22be305b-d988-4525-453c-7203af1dc5a3/dj.srlprmuo.100x100-75.jpg"
      Artist: "Nelly"
      Collection: "Nellyville"
      CollectionPrice: 11.99
      Play: "http://a423.phobos.apple.com/us/r1000/013/Music4/v4/4a/ab/7c/4aab7ce2-9a72-aa07-ac6b-2011b86b0042/mzaf_6553745548541009508.plus.aac.p.m4a"
      Type: "song"
  */
  //the iTunes API is going to give you a lot more details than ng-grid wants. Create a new array and then loop through the iTunes data pushing into your new array objects that look like the above data.

 //  for (var i = 0; i < results.length; i++) {
 //    // var newArr = [];
 //    var artistObj = {
 //        ALbumArt: reults[i].artworkUrl,
 //        Artist: results[i].artistName,
 //        Collection: results[i].collectionName,
 //        CollectionPrice: results[i].collecitonPrice,
 //        Play: results[i].previewUrl,
 //        Type: results[i].kind
 //    };
 //  newArr.push(artistObj);
 // };


  //Once you have that final data array, you simply need to put it on the scope (or more specifically on the scope as songData). Once you do this ($scope.songData = myFinalArray) then ng-grid will see that and populate the page.

    //Code here





