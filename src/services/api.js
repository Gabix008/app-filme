// Base da Api:https://api.themoviedb.org/3/
// URL da Api: /movie/550?api_key=8da021ff4d20a0cfe710745012b3aaf8


import axios from 'axios';
const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})
export default api;