import React, { Component } from "react";
import Style from './MovieElement.module.scss';

export default class MovieElement extends Component {

    updateSelectedMovie = () => {
        this.props.updateSelectedMovie(this.props.movie.title);
    };


    render () {
        return (

            <div 
            onClick={ this.updateSelectedMovie } 
            className={ "bg-light d-flex flex-row " + Style.container }>
                <img width="185" src={ this.props.movie.img } alt="movie" />
                <div className="flex-fill d-flex flex-column p-3">
                    <h5>{ this.props.movie.title }</h5>
                    <hr className="w-100" />
                    <p className="flex-fill">{ this.props.movie.details }</p>
                    <div className="d-flex flex-row justify-content-end align-items-stretch">
                        { this.props.isFavori ? (
                            <button
                                onClick={ (e) => {
                                    e.stopPropagation();
                                    this.props.removeFavori(this.props.movie.title);
                                } }
                                className="btn btn-sm btn-danger">
                                Remove
                            </button>
                        ) : (
                            <button
                                onClick={ (e) => {
                                    e.stopPropagation();
                                    this.props.addFavori(this.props.movie);
                                } }
                                className="btn btn-sm btn-primary">
                                Add
                            </button>
                        ) }
                    </div>
                </div>
            </div>


        );
    }
}