import React, { Component } from "react";
import Style from './MovieElement.module.scss';

export default class MovieElement extends Component {

    mouseEnter = () => {
        this.props.updateSelectedMovie(this.props.movie.title);
    }


    render() {
        return (

            <div onClick={this.mouseEnter} className={"bg-light d-flex flex-row " + Style.container}>
                <img width="185" src={this.props.movie.img} alt="movie" />
                <div className="flex-fill d-flex flex-column p-3">
                    <h5>{this.props.movie.title}</h5>
                    <hr className="w-100" />
                    <span>{this.props.movie.details}</span>
                </div>
            </div>


        );
    }
}