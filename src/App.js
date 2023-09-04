import React , {useState} from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import Tracklist from './components/Tracklist/Tracklist';
import Playlist from './components/Playlist/Playlist';
let store = [];

const favorite = [{
  id: 1,
  title : "Almost Blue",
  artist : "Chet Baker",
  album: "No problem"},
  {id: 2,title: "Sinnerman", artist: "Nina Simon", album:"unkown"},{id:3, title:"My favorite things", artist: "John Coltrane", album: "My favorite things"},
{id:4, title:"A love supreme", artist: "John Coltrane", album: "My favorite things"}];


function App (){
  const [playlist, setPlaylist] = useState([]);
  const [playlistname, setPlaylistname] = useState('');
  
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

  const handleSubmit = (event) => {
    event.preventDefault();
    let obj = {name : playlistname, tracks: playlist};
    store.push(obj);
    console.log(obj.name);
    setPlaylistname('');
    setPlaylist([]);
    
  }

    return (
    <div className="App">
      <SearchBar />
      <div className='track-play-list'>
        <div className='search-result'>
                <h4>Results</h4>
               <Tracklist searchResult={favorite} add={addToPlaylist} btn={'+'}/>
        </div>
        <Playlist playlist={playlist} rename={renamingPlaylist} remove={removeFromPlaylist} save={handleSubmit}/>
      </div>
      
    </div>
  );
}


export default App;

