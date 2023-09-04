import React from "react";
import './Tracklist.css';
import Track from "../Track/Track";


class Tracklist extends React.Component{
    constructor(props){
        super(props);

    }

    render(){
        return (
            
            <div>
                {this.props.searchResult.map(track => {
                    return (
                    <div key={track.id} className="content-wrapper">
                            <div className="track-display">
                            <Track   track={track}/>
                            <button  className="sign-btn" onClick={() => this.props.add(track)}>{this.props.btn}</button>
                            </div>
                            <div className="hr-line"></div>
                        </div>);
                })}
                
                </div>
        );
    }
}
export default Tracklist;