import axios from 'axios';

const KEY = 'AIzaSyCW1sm0FxE2akJ6Y7GOeglfiJpQD_ULYRI';

export default axios.create({
    baseURL:'https://youtube.googleapis.com/youtube/v3/',
    params:{
        part : 'snippet',
        maxResults: 5,
        key:KEY
        
    }
})