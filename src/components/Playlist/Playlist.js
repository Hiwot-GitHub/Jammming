import React from "react";
import './Playlist.css';
import Tracklist from "../Tracklist/Tracklist";

class Playlist extends React.Component{
    constructor(props){
        super(props);
    }
    handleChange(event){
        const name = event.target.value;
        this.props.rename(name);
    }

  
    render(){
        return (
            <div className="play-list">
                <div className="playlist-name">
                    <input type="text" onChange={(event) => this.handleChange(event)}></input>
                </div>
                <div className="playlist-tracks">
                   {this.props.playlist.length === 0?'':<Tracklist searchResult={this.props.playlist} add={this.props.remove} btn={'-'} />}
                </div>
                <div className="playlist-btn">
                    <form onSubmit={this.props.save}>
                    <button type="submit">SAVE TO SPOTIFY</button></form>
                </div>
            </div>
        );
    }
}
export default Playlist;