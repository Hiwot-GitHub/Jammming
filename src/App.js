import React , {useState} from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import Tracklist from './components/Tracklist/Tracklist';
import Playlist from './components/Playlist/Playlist';
import Spotify from './util/Spotify';
//let store = [];

function App (){
  const [playlist, setPlaylist] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [playlistname, setPlaylistname] = useState('');

  async function search(term ) {
    Spotify.getAccessToken();
    let tracks = await Spotify.search(term);
    setSearchResult(tracks);
    
  }
  
  const renamingPlaylist = name => {
    setPlaylistname(name);
  }
  //adding a track to a playlist
 const addToPlaylist = (track) => {
    setPlaylist((prev) => {
      prev = prev.filter(item => item.id !== track.id)
      return [...prev, track];
    });
  };

  const removeFromPlaylist = track => {
    setPlaylist((prev) => {
      return prev.filter((item) => item.id !== track.id);
    })
  };

  const savePlaylist = () => {
    let tracksUri = playlist.map(track => track.uri);
    Spotify.savePlaylist(playlistname, tracksUri);
  }

    return (
    <div className="App">
      <SearchBar onSearch={search}/>
      <div className='track-play-list'>
        <div className='search-result'>
                <h4>Results</h4>
               <Tracklist searchResult={searchResult} add={addToPlaylist} btn={'+'}/>
        </div>
        <Playlist playlist={playlist} rename={renamingPlaylist} remove={removeFromPlaylist} save={savePlaylist}/>
      </div>
      
    </div>
  );
}


export default App;

