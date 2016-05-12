

'use strict';

angular.module('playlistcuratorApp')
  .controller('PlaylistDetailController', ['$scope','PlaylistDetailService','$location',
       function($scope,PlaylistDetailService,$location) {
         //get the playlist _id from the URL
          //console.log($location.id);
          var pId = $location.path().split("/")[2]||"Unknown";    //path will be /person/show/321/, and array looks like: ["","person","show","321",""]
          //console.log(pId);
          PlaylistDetailService.getPlaylist(pId)
          .success(function(playlist) {
               $scope.playlist = playlist;
               $scope.currentlyPlayingTrack = 0;
               //console.log(playlist);
          });

          $scope.shortenURL = function() {
            //console.log('shortening');
            //goo.gl url shortener is not shortening url's of 127.0.0.1 or 10.37.3.141
            //but will work with localhost
            //not sure why but for the purposes of this project i wont be investigating it any further

            var urlToShorten = $location.absUrl();
            var googleAPIKey = 'AIzaSyDi0YhHKAi3ybMLY8ElUWH6JFKPTas_VvU';
            var googleShortenerUrl = 'https://www.googleapis.com/urlshortener/v1/url/?key=' + googleAPIKey;
            $http.post(googleShortenerUrl, {longUrl: urlToShorten}).success(function (resp){
              $scope.currentPathToShare = resp.id;
              return resp.id;
            });
          }

          $scope.controlTrack = function(trackID, trackSequence) {
              console.log(trackID);

            	$scope.currentlyPlayingTrack = trackSequence;

            	var audio = document.getElementById("currentTrack");
            	if (audio.duration > 0 && !audio.paused && $scope.currentlyPlayingTrackID == trackID) {
        			audio.pause();
        		} else if ($scope.currentlyPlayingTrackID == trackID && !audio.paused) {
        			audio.src="https://mp3l.jamendo.com//?trackid=" + trackID + "&format=mp31&from=app-90be5fa3";
        		    audio.play();
        		    $scope.currentlyPlayingTrackID = trackID;
        		} else if ($scope.currentlyPlayingTrackID == trackID && audio.paused) {
        			audio.play();
        		} else {
        			audio.src="https://mp3l.jamendo.com//?trackid=" + trackID + "&format=mp31&from=app-90be5fa3";
        		    audio.play();
        		    $scope.currentlyPlayingTrackID = trackID;
        		}

        		$scope.selected = trackSequence;
        	};
}])
