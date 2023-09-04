import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            term: ''
        };
    };
    handleTermChange(event) {
        this.setState({
          term: event.target.value
        })
      }

    render(){
        return(
            <div className='searchBar-wrap'>
                <input className='search-input' type='text' onChange={this.handleTermChange} />
                <button className='search-btn' type='submit'>SEARCH</button>
                
            </div>
        );
    }

}
export default SearchBar;