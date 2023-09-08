import React from "react";
import './Track.css';

class Track extends React.Component{
    
    render(){
        return (
            <div className="track-area">
                <div className="title">{this.props.track.name}</div>
                <div className="artist">{this.props.track.artist}</div>
               
            </div>
        );
    }
}
export default Track;