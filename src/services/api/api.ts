
import axios from 'axios';


const api = axios.create({
    baseURL:'https://core.ac.uk:443/api-v2/articles/search/',
})

export default api ;