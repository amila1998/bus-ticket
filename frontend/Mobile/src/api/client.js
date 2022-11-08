import axios from 'axios';

export default axios.create({ baseURL: 'https://bus-ticket-be.herokuapp.com/' });
//export default axios.create({ baseURL: 'http://192.168.0.112:8000' });