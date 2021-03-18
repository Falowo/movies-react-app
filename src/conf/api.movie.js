import * as axios from 'axios';

const apiMovie = axios.create({
    baseURL: 'https://api.themoviedb.org/4'
});

apiMovie.interceptors.request.use(req => {
    req.headers[ 'Authorization' ] = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NjY1NTU4NDAzNjhjNTQ5MWNhZThkY2U3MzU5ZDAwMSIsInN1YiI6IjYwNTI2N2MzMjJlNDgwMDA2YWQ5ZDIwZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.q4Ei_0PF17kK8s1FsVrsL4KVlZXXbBy3ryXhlKHI23A';
    return req;
});

export default apiMovie;

export const apiMovieMap = (m) => ({
    img: `https://image.tmdb.org/t/p/w500${ m.poster_path }`,
    title: m.title,
    details: `${ m.release_date } | ${ m.vote_average }/10 | (${ m.vote_count })`,
    description: m.overview,
});