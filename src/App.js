import React, { Component, lazy, Suspense } from 'react';
import { Header } from "./components";
import apiMovie, { apiMovieMap } from './conf/api.movie';
import apiFirebase from './conf/api.firebase';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

const LazyFilms = lazy(
  () => import(/* webpackChunkName: "Films" */'./features/films/index' ) );
const LazyFavoris = lazy(
  () => import(/* webpackChunkName: "Favoris" */'./features/favoris/index' ) );
class App extends Component {

  constructor ( props ) {
    super( props );
    this.state = {
      movies: null,
      selectedMovie: 0,
      loaded: false,
      favoris: null,
      selectedFavori: 0
    };
  }


  updateSelectedMovie = ( index ) => {
    this.setState( {
      selectedMovie: index
    } );
  };


  componentDidMount () {
    apiMovie.get( '/discover/movie' )
      .then( response => response.data.results )
      .then( moviesApi => {
        const movies = moviesApi.map( apiMovieMap );
        this.updateMovies( movies );
      } )
      .catch( err => console.log( err ) );

    apiFirebase.get( '/favoris.json' )
      .then( response => {
        let favoris = response.data ? response.data : [];
        this.updateFavoris( favoris );
      } );
  }

  updateMovies = ( movies ) => {
    this.setState( {
      movies,
      loaded: this.state.favoris ? true : false
    } );
  };

  updateFavoris = ( favoris ) => {
    this.setState( {
      favoris,
      loaded: this.state.movies ? true : false
    } );
  };

  addFavori = ( title ) => {
    const favoris = this.state.favoris.slice();
    const film = this.state.movies.find( m => m.title === title );
    favoris.push( film );
    this.setState( {
      favoris
    }, () => this.saveFavoris()
    );

  };

  removeFavori = ( title ) => {
    const favoris = this.state.favoris.slice();
    const index = this.state.favoris.findIndex( f => f.title === title );
    favoris.splice( index, 1 );
    this.setState( {
      favoris
    }, () => this.saveFavoris()
    );

  };

  saveFavoris = () => {
    apiFirebase.put( 'favoris.json', this.state.favoris );
  };

  render () {
    return (
      <Router>
        <div className="App d-flex flex-column ">
          <Header />
          <Suspense fallback={<h1>Loading ...</h1>}>
            <Switch>
            <Route path="/films" component={ LazyFilms } />
            <Route path="/favoris" component={ LazyFavoris } />
            <Redirect to="/films" />
          </Switch>
          </Suspense>
        </div>
      </Router>
    );
  }
}

export default App;
