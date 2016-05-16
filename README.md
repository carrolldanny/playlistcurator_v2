# playlistcurator

Name : Danny Carroll

###Overview.
Playlist Curator allows the user to create and stream Genre-based lists of music and share them with others. The source of the music is a service called Jamendo. Jamendo is a music website and an open community of independent artists and music lovers. It bills itself as "the world's largest digital service for free music. Jamendo has an API allowing developers to consume their freely available content.

www.jamendo.com

Playlist Curator lets the user select the genre of music they wish to based their playlist on. A selection of songs are returned for the user to peruse. These can be previewed and if the user likes the song, they can add it to the list. If the user changes their mind, it can then be removed. If the user has heard enough of the songs that are presented to them, then can load up some more and keep building the list. Playlists can be deleted at any time by te user that created them.

At any time, the user can visit the lists they have created and enjoy them. They can also share them with their friends on social media so others can enjoy the music.

Because the Jamendo music service is populated only by new, unsigned and unpublicized music creators, users are bound to discover some new talent using Playlist Curator. This is why the playlists’ starting point is the genre type.


 + Consumes Jamendo music providers data API
 + Streams Jamendo music providers music files
 + PlaylistCurator creates playlists as music provider's API doesn't have facilitiy to dynamically create a playlist
 + Shares playlist via users social media accounts


###Installation requirements.

+ AngularJS 1.4.5
+ Bootstrap 3.1.1
+ Angular Socialshare
+ Angular Notifications
+ Angular Cookies
+ Angular-UI-Bootstrap
+ Mongoose
+ Express.js
+ Node.js
+ Grunt

To get this project up and running, clone it, start up Mongo (mongod), then from the root of the cloned project, serve it up with Grunt (grunt serve)
After a short time, your browser should open the login page. If this does not happe, then visit:

localhost:9000/

and you should see the login page. 

###Data Model Design.

![][image1]

###App Design.

![][image2]

###UI Design.

Starting the playlist creation process - just pick the genre you want
![][image3]

Adding songs to the list - give them a quick listen, remove them if you change your mind
![][image4]

Previous created playlists
![][image5]

Playing back a list and sharing it on Twitter
![][image6]

###Routing.

+ / - Login page
+ /signup - Allows a user to create an account to create their own playlists
+ /logout - ends user's playlist creation session
+ /createplaylist - the start of the playlist creation process - pick the style you want
+ /addtrack/{selectedgenre} - preview and add some music to your list, as many songs as you like
+ /playlists - a list of the playlists you have created so far
+ /playlist_detail/{playlist_id} - the particular playlist you have selected to playback/share

###Extra features

Firebase was used for user accounts and authentication, however since the Jamendo API lacks the functionality to dynamically create playlists - Playlist Curator creates playlists in Firebase also. It uses the users UID to identify the lists associated with them - then it holds some basic playlist info such as create date, genre, title, curator as well as each Jamendo track ID who’s details are then accessed from the Jamendo API.

Google URL shortener is used to shorten the URL's before they get shared out on Social Media (Only Twitter implemented as I don’t have a Facebook account to test that one, but the implementation is the same - just properties on the link)


###Independent learning.

+ ngCookies - I used this to store the uid of the logged in user so their previous playlists can be retrieved easily. It gets destroyed when they logout
+ ngNotify - This is used when a track is added or removed from a playlist - different classes demoting different action as are applied.
+ Angular Social Sharing - For sharing the created playlists with friends.
+ HTML5 Audio Player - standard feature of HTML5 but few soild for streaming audio files in an instance such as this.
+ Angular-Confirm - A Confirm modal dialog for AngularJS

###Web API Endpoints

| Method        | End point                                      | Usage                               | Returns       |
| ------------- | ---------------------------------------------- | ----------------------------------  | ------------- |
| GET           | /api/playlists                                 | Get a list of all user's playlists  | playlists     |
| GET           | /api/playlists/{playlist_id}                   | Get the contents of a playlist      | tracks        |
| POST          | /api/playlists/                                | Create a playlist                   | playlist      |
| POST          | /api/playlists/{playlist_id}/tracks            | Add a track to a playlist           | -             |
| DELETE        | /api/playlists/{playlist_id}                   | Delete a playlist                   | -             |
| DELETE        | /api/playlists/{playlist_id}/track/{track_id}  | Remove a track from a playlist      | -             |
| GET           | /api/users/me                                  | Login                               | user details  |
| POST          | /api/users                                     | Create a user                       | -             |


[image1]: /images/promotion/ss1.png
[image2]: /images/promotion/ss2.png
[image3]: /images/promotion/ss3.png
[image4]: /images/promotion/ss4.png
[image5]: /images/promotion/ss5.png
[image6]: /images/promotion/ss6.png
