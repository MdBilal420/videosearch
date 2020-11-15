import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos, handleVideoSelect}) =>{

const renderedList = videos.map((video) => {
    return (
        <div className='ui relaxed divided list'>
            <VideoItem key={video.id.videoId} handleVideoSelect={handleVideoSelect} video={video}/>
        </div>
    ); 
})

return <div>{renderedList}</div>
}

export default VideoList;