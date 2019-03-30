import axios from "axios";

export default {
    getGiphy: giph => {
        return axios.get(`https://api.giphy.com/v1/gifs/search?q=mount+doom?api_key=${giph.key}`);
    } 
}