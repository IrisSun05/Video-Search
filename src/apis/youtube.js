import axios from 'axios';

const KEY ="AIzaSyDPH_hJstc8mwE3iJ65lx-jCLz4LkiO6_Q"

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part:'snippet',
        maxResults: 5,
        key: KEY

    }
});