import React, { Component } from "react";
import Style from './FavoriElement.module.scss';

export default class FavoriElement extends Component {
    render () {
        const { favori } = this.props;
        return (

            <div className={ "bg-light d-flex flex-row " + Style.container }>
                <img width="185" src={ favori.img } alt="movie" />
                <div className="flex-fill d-flex flex-column p-3">
                    <h5>{ favori.title }</h5>
                    <hr className="w-100" />
                    <p className="flex-fill">{ favori.details }</p>
                    <div className="d-flex flex-row justify-content-end align-items-stretch">

                        <button
                            onClick={ this.props.removeFavori }
                            className="btn btn-sm btn-danger">
                            Remove
                            </button>

                    </div>
                </div>
            </div>


        );
    }
}