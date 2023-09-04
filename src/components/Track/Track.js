import React from "react";
import './Track.css';

class Track extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="track-area">
                <div className="title">{this.props.track.title}</div>
                <div className="artist">{this.props.track.artist}</div>
               
            </div>
        );
    }
}
export default Track;