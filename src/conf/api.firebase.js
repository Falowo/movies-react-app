import * as axios from 'axios';

export const apiFirebase = axios.create( {
    baseURL: 'https://movies-d9858-default-rtdb.europe-west1.firebasedatabase.app/'
} );

// eslint-disable-next-line
export default {
    fetchFavoris: () => apiFirebase.get( '/favoris.json' ).then(
         response => response.data ? response.data : [] 
         ),
    saveFavoris: favoris => () => apiFirebase.put('favoris.json', favoris)
};