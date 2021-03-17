import React, { Component } from "react";

export default class Header extends Component {
    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <a className="nabar-brand" href="/"> AlloMovie</a>
                        <button className="navbar-toggler">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <a href="/" className="nav-link active">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a href="/" className="nav-link">Favoris</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}