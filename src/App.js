import React, { Component } from 'react';
import { Header } from "./components";
import Films from './features/films/index';
import Favoris from './features/favoris/index';
import apiMovie, { apiMovieMap } from './conf/api.movie';
import apiFirebase from './conf/api.firebase';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

class App extends Component {

  constructor (props) {
    super(props);
    this.state = {
      movies: null,
      selectedMovie: 0,
      loaded: false,
      favoris: null,
      selectedFavori: 0
    };
  }


  updateSelectedMovie = (index) => {
    this.setState({
      selectedMovie: index
    });
  };


  componentDidMount () {
    apiMovie.get('/discover/movie')
      .then(response => response.data.results)
      .then(moviesApi => {
        const movies = moviesApi.map(apiMovieMap);
        this.updateMovies(movies);
      })
      .catch(err => console.log(err));

    apiFirebase.get('/favoris.json')
      .then(response => {
        let favoris = response.data ? response.data : [];
        this.updateFavoris(favoris);
      })
      .catch(err => console.log(err))
      ;
  }

  updateMovies = (movies) => {
    this.setState({
      movies,
      loaded: this.state.favoris ? true : false
    });
  };

  updateFavoris = (favoris) => {
    this.setState({
      favoris,
      loaded: this.state.movies ? true : false
    });
  };

  addFavori = (title) => {
    const favoris = this.state.favoris.slice();
    const film = this.state.movies.find(m => m.title === title);
    favoris.push(film);
    this.setState({
      favoris
    }, () => this.saveFavoris()
    );

  };

  removeFavori = (title) => {
    const favoris = this.state.favoris.slice();
    const index = this.state.favoris.findIndex(f => f.title === title);
    favoris.splice(index, 1);
    this.setState({
      favoris
    }, () => this.saveFavoris()
    );

  };

  saveFavoris = () => {
    apiFirebase.put('favoris.json', this.state.favoris);
  };

  render () {
    return (
      <Router>
        <div className="App d-flex flex-column ">
          <Header />
          <Switch>
            <Route path="/films" render={ (props) => {
              return (
                <Films
                  { ...props }
                  loaded={ this.state.loaded }
                  updateMovies={ this.updateMovies }
                  updateSelectedMovie={ this.updateSelectedMovie }
                  movies={ this.state.movies }
                  selectedMovie={ this.state.selectedMovie }
                  addFavori={ this.addFavori }
                  removeFavori={ this.removeFavori }
                  favoris={ this.state.favoris }
                />
              );
            } } />
            <Route path="/favoris" render={ (props) => {
              return (
                <Favoris
                  { ...props }
                  favoris={ this.state.favoris }
                  removeFavori={ this.removeFavori }
                  loaded={ this.state.loaded }
                />
              );
            } } />
            <Redirect to="/films" />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
