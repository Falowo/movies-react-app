import * as axios from 'axios';

const unAuthapiMovie = axios.create( {
    baseURL: 'https://api.themoviedb.org/4'
} );

export const apiMovie = unAuthapiMovie.interceptors.request.use( req => {
    req.headers[ 'Authorization' ] = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NjY1NTU4NDAzNjhjNTQ5MWNhZThkY2U3MzU5ZDAwMSIsInN1YiI6IjYwNTI2N2MzMjJlNDgwMDA2YWQ5ZDIwZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.q4Ei_0PF17kK8s1FsVrsL4KVlZXXbBy3ryXhlKHI23A';
    return req;
} );


export const apiMovieMap = ( m ) => ( {
    img: `https://image.tmdb.org/t/p/w500${ m.poster_path }`,
    title: m.title,
    details: `${ m.release_date } | ${ m.vote_average }/10 | (${ m.vote_count })`,
    description: m.overview,
} );


const apiMovieRequest = {
    searchMovies: ( filter ) => {
        const query = '?' + Object.keys( filter ).map(
            k => `${ k }=${ filter[ k ] }&` ).join( '' );
        return apiMovie.get( '/search/movie' + query )
            .then( response => response.data.results )
            .then( moviesApi => moviesApi.map( apiMovieMap ) );
    }
};

export default apiMovieRequest;