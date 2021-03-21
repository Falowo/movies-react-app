import * as axios from 'axios';

const apiFirebase = axios.create({
    baseURL: 'https://movies-d9858-default-rtdb.europe-west1.firebasedatabase.app/'
});

export default apiFirebase;