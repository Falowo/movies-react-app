import React from 'react';
import { Loading } from '../../components';
import { MovieDetails, MovieList, SearchBar } from './components';



const Films =  (props) => {
    return (
        <>
            <SearchBar updateMovies={ props.updateMovies } />
            { props.loaded ? (
                <div className="d-flex flex-row border flex-fill pt-4 p-2">
                    <MovieList
                        movies={ props.movies }
                        updateSelectedMovie={ props.updateSelectedMovie }
                        favoris={props.favoris}
                        removeFavori={props.removeFavori}
                        addFavori={props.addFavori}
                    />
                    <MovieDetails
                        movie={ props.movies[ props.selectedMovie ] }
                    />
                </div>
            ) : (
                <Loading />

            ) }
        </>
    );

};

export default Films;