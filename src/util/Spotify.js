//Spotify clientID and secret
const clientID = '9e3636b610b947f680244524c4fd7006';
//const secret = '0de276ea24114afeafc467fadc591179';
const redirectURI = 'http://localhost:3000';
let accessToken;

const Spotify = {
   getAccessToken(){
     if(accessToken){
           return ;
        }
        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
        const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
        if (accessTokenMatch && expiresInMatch) {
            accessToken = accessTokenMatch[1];
            const expiresIn = Number(expiresInMatch[1]);
            window.setTimeout(() => (accessToken = ""), expiresIn * 1000);
            window.history.pushState("Access Token", null, "/"); // This clears the parameters, allowing us to grab a new access token when it expires.
      
            return accessToken;
          } else {
            const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`;
            window.location = accessUrl;
          }
        },
    
        search(searchTerm) {
          let access_token = this.getAccessToken();
            let spotifyTracks = fetch(
              `https://api.spotify.com/v1/search?type=track&q=${searchTerm}`,
              {
                headers: { Authorization: `Bearer ${access_token}}` },
              }
            )
              .then((response) => response.json())
              .then((jsonResponse) => {
                if (!jsonResponse) {
                  return [{}];
                }
        
                let tracks = jsonResponse.tracks.items.map((track) => ({
                  id: track.id,
                  name: track.name,
                  artist: track.artists[0].name,
                  album: track.album.name,
                  uri: track.uri,
                }));
        
                return tracks;
              })
              .catch((error) => {
                console.log("Spotify search error");
              });
        
            return spotifyTracks;
          }
}
export default Spotify;
