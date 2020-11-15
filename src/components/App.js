import React, { Component } from 'react';
import SearchBar from './SearchBar'
import youtube from '../apis/youtube'
import VideoList from './VideoList';

class App extends Component {
       
    state = { videos: []};  

    handleTermSubmit = async term => {
        const response = await youtube.get('/search',{
            params:{
                q: term,
            }
        })

        this.setState({videos:response.data.items})
    }


    render() { 
        return (
            <div className='ui container'>
                <SearchBar handleFormSubmit ={this.handleTermSubmit}/>
                {this.state.videos.length} videos
                <VideoList videos={this.state.videos}/>
            </div>
        );
    }
}
 
export default App;