import axios from "axios";

axios.defaults.baseURL = 'https://gameshots-439215bf3dee.herokuapp.com/'
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.withCredentials = true;