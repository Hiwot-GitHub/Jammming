import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            term: ''
        };
        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleTermSubmit = this.handleTermSubmit.bind(this);

    };
    handleTermChange(event) {
        this.setState({
          term: event.target.value
        })
      }
      handleTermSubmit(event){
        this.props.onSearch(this.state.term);
        event.preventDefault();

      }

    render(){
        return(
            <div className='searchBar-wrap'>
                <input className='search-input' type='text' onChange={this.handleTermChange} />
                <button className='search-btn' onClick={this.handleTermSubmit}>SEARCH</button>
                
            </div>
        );
    }

}
export default SearchBar;