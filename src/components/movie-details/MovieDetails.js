import React, { Component } from "react";
import Style from "./MovieDetails.module.scss";

export default class MovieDetails extends Component {
    render() {
        return (
            <div className={Style.myContainer + " w-25 bg-light p-4 d-flex flex-column"}>
                <h5>{this.props.movie.title}</h5>
                <hr className="w-100" />
                <div>
                    <img
                        className="d-block mx-auto w-100"
                        src={ this.props.movie.img }
                        alt={ this.props.movie.title }
                    />
                </div>
                <span className="text-secondary"> { this.props.movie.details } </span>
                <span> { this.props.movie.description } </span>
            </div>
        );
    }
}