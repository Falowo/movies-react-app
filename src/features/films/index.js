import React from 'react';
import { Loading } from '../../components';
import { MovieDetails, MovieList, SearchBar } from './components';
import { connect } from 'react-redux';
import {
    favorisListNameSelector,
    moviesIsLoadingSelector,
    moviesListSelector,
    moviesSelectedMovieSelector
}
    from '../../store/selectors';
import {
    fetchMovies,
    setSelectedMovie,
    tryRemoveFavori,
    tryAddFavori
} from '../../store/actions';


const Films = ( props ) => {
    return (
        <>
            <SearchBar fetchMovies={ props.fetchMovies } />
            { ( props.isLoading ) ? (
                <Loading />

            ) : (
                <div className="d-flex flex-row border flex-fill pt-4 p-2">
                    <MovieList
                        movies={ props.movies }
                        updateSelectedMovie={ props.setSelectedMovie }
                        favoris={ props.favorisListName }
                        removeFavori={ props.tryRemoveFavori }
                        addFavori={ props.tryAddFavori }
                    />
                    <MovieDetails
                        movie={ props.selectedMovie }
                    />
                </div>
            ) }
        </>
    );

};

export default connect( state => ( {
    isLoading: moviesIsLoadingSelector( state ),
    movies: moviesListSelector( state ),
    favorisListName: favorisListNameSelector( state ),
    selectedMovie: moviesSelectedMovieSelector( state )
} ), {
    fetchMovies,
    setSelectedMovie,
    tryRemoveFavori,
    tryAddFavori
} )( Films );