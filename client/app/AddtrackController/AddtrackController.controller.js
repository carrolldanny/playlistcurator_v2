'use strict';

angular.module('playlistcuratorApp')
  .controller('AddtrackController', ['$timeout','$scope','$location','$document', '$cookies','$filter','AddtrackService','PlaylistsService','ngNotify',
       function($timeout,$scope,$location,$document,$cookies,$filter,AddtrackService,PlaylistsService,ngNotify) {

         $scope.selectedTrackClass = "overlay";  //
         $scope.title = "Add tracks to your playlist";
         $scope.trackSearchOffset = 0;
       	 $scope.returnTrackLimit = 12;
       	 $scope.playlistCreated = false;
       	 $scope.playlistName = false;

         var playlistIDsArray = [];
         var newPlayList = "";
         //var newPlayListName = $scope.createPlaylistName();

         var urlParamaters = $location.search();
       	 $scope.selectedGenre = urlParamaters.selectedgenre;
         //$scope.selectedGenre = "Dance";

        AddtrackService.getTracks($scope.selectedGenre, $scope.trackSearchOffset)
        .success(function(tracks) {
             $scope.tracks = tracks.results;
             $scope.trackSearchOffset = $scope.trackSearchOffset+12;
        });
        $scope.getMoreTracks = function() {
          AddtrackService.getTracks($scope.selectedGenre, $scope.trackSearchOffset)
          .success(function(tracks) {
               $scope.tracks = tracks.results;
               $scope.trackSearchOffset = $scope.trackSearchOffset+12;
          });
        }

        $scope.createPlaylistID = function() {
      	    var d = new Date().getTime();
      	    if(window.performance && typeof window.performance.now === "function"){
      	        d += performance.now();; //use high-precision timer if available
      	    }
      	    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      	        var r = (d + Math.random()*16)%16 | 0;
      	        d = Math.floor(d/16);
      	        return (c=='x' ? r : (r&0x3|0x8)).toString(16);
      	    });
      	    return uuid;
      	};

      	$scope.getTimeStamp = function() {
      	    var d = new Date().getTime();
      	    return d;
      	};

      	$scope.createPlaylistName = function() {

      	  var words = ["Rockin", "Swingin", "Chilled", "Lively", "Nu-age", "Hipster", "Funky", "Blusey", "Progressive", "Up-tempo"];
      	  var word = words[Math.floor(Math.random() * words.length)];

      	  var currentDate = $filter('date')(new Date(),'MMM dd, yyyy');

      	  var playlistName = word + " " + $scope.selectedGenre + " Playlist " + currentDate;

      	  //set the title of the page to the newly created playlist name
      	  $scope.title = playlistName;
          //newPlayListName = playlistName;
      	  return playlistName;
      	};

        $scope.createPlayList = function(trackID, trackImage, trackName, trackArtistName,sequenceID) {
      		newPlayList = $scope.createPlaylistID();

          var playlistData = {
              playlist_id : newPlayList,
              playlist_curator_name:   'Joe Bloggs',
              playlist_user_id: $cookies.get('uid'),
              playlist_name: $scope.createPlaylistName(),
              playlist_genre: $scope.selectedGenre,
              playlist_create_date: Date.now,
              tracks: []
          };
          //having issues with title of playlist

            PlaylistsService.addPlaylist(playlistData)
            .success(function(data) {
                 $scope.playlistCreated = true;
                 $scope.playlist_id = data._id;
            }).error(function (data) {
                 console.log('fail');
            });
      	  };



        $scope.controlTrack = function(trackID,sequenceID) {
      		var audio = document.getElementById("audioPreview");

      		var elementID = 'playTrack_' + sequenceID;
      		var queryResult = $document[0].getElementById(elementID);
      	  var wrappedID = angular.element(queryResult);
      	  var existingClassName = wrappedID[0].className;

      		//check the buttons state and player state to decide what we do on button click -
      		//we either start a new track or stop a playing one
      		if(!audio.paused && existingClassName == "pause_track") {
      			wrappedID.addClass('play_track');
      	    	wrappedID.removeClass('pause_track');
      			audio.pause();
      		} else {
      			$scope.clearPlayState();
      	    	audio.src="http://mp3l.jamendo.com/?trackid="+trackID+"&format=mp31&u=0";
      	    	wrappedID.addClass('pause_track');
      	    	wrappedID.removeClass('play_track');
      	    	audio.play();
      		}
      	};
        $scope.clearPlayState = function() {
          //stop player
          var audio = document.getElementById("audioPreview");
          audio.pause();

          //reset all pause buttons to play state
          for (i = 0; i < $scope.returnTrackLimit; i++) {
              var elementID = 'playTrack_' + i;
              var queryResult = $document[0].getElementById(elementID);
              var wrappedID = angular.element(queryResult);
              wrappedID.addClass('play_track');
              wrappedID.removeClass('pause_track');
          }
        }

        $scope.addTrackToList = function(trackID, trackImage, trackName, trackArtistName, trackDuration ,trackReleasedate,sequenceID) {

      		if ($scope.playlistCreated == false) {
            $scope.createPlayList(trackID, trackImage, trackName, trackArtistName,sequenceID);
      		}
          //set a delay as it takes a little time for the playlist to be created and the
          //playlistID passed back to use -
          var timer;
          timer = $timeout(function () {
            if ($scope.playlistCreated == true) {
              var trackData = {
                  track_id: trackID,
                  track_name : trackName,
                  track_artist_name : trackArtistName,
                  track_image : trackImage,
                  track_release_date : trackReleasedate,
                  track_duration : trackDuration
              };

              //var key;

              PlaylistsService.addTrack(trackData,$scope.playlist_id)
                .success(function(data) {
                     playlistIDsArray.push(trackID);
                     ngNotify.set(trackName + " by " + trackArtistName + " has been added to your list.", "success");
                }).error(function (data) {
                  console.log('Error adding track');
                });
              } else {
                console.log("no track added");
              }
            }, 700);

            $scope.removeTrackFromList = function(trackID) {
              //console.log('removing track');
              //ng-click='deletePlaylist(playlist._id); '

              PlaylistsService.removeTrack(trackID,$scope.playlist_id)
                  .success(function(data) {
                       //remove from local array too
                       //playlistIDsArray.push(trackID);
                       ngNotify.set(trackName + " by " + trackArtistName + " has been removed from your list.", "error");
                  }).error(function (data) {
                    console.log('Error removing track');
                  });
            };




          //removeTrack
          //add_track




      		// listRef.on('value', function(snapshot) {
      		//       snapshot.forEach(function(childSnapshot) {
      		//     	//get last key and write it back ot the control
      		// 	    key = childSnapshot.key();
      		// 	  });
      		// });

      		//angular.element(document.querySelector("#addTrack_0")).text(key);

      		//var clickedButton = angular.element(document.querySelector("#addTrack_" + sequenceID));
      		//clickedButton.attr("data-track-auto-key", key);  //trackKeyId

      		//ngNotify.set(trackName + " by " +  trackArtistName + " has been added to your list.", "success");
          //ngNotify.set("has been added to your list.", "success");
      	};
        $scope.toggle = function (trackID, trackImage, trackName, trackArtistName,trackDuration,sequenceID, event) {

            var presentInPlaylist = playlistIDsArray.indexOf(trackID);
            if (presentInPlaylist == -1) {
                //its not in array so add it
                $scope.addTrackToList(trackID, trackImage, trackName, trackArtistName,trackDuration,sequenceID);
            } else {
                //$scope.addTrackToList(trackID, trackImage, trackName, trackArtistName,trackDuration,sequenceID);
                $scope.removeTrackFromList(trackID);
            }


          // var deleteTrackID = event.target.attributes[3].nodeValue;
          // console.log("_________________");
          // console.log(event);
          // console.log("_________________");
          // if(deleteTrackID) {
          // //$scope.removeTrackFromList(trackID, trackImage, trackName, trackArtistName,sequenceID, deleteTrackID);
          // console.log("delteting");
          // } else {
          //   console.log("adding");
          //   $scope.addTrackToList(trackID, trackImage, trackName, trackArtistName,sequenceID);
          // }
        }
}])
