import React, { Component } from "react";
import { NavLink } from 'react-router-dom';

export default class Header extends Component {
    render () {
        return (
            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <NavLink className="nabar-brand" to="/home"> AlloMovie</NavLink>
                        <button className="navbar-toggler">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <NavLink
                                        to="/home"
                                        activeClassName="active"
                                        className="nav-link" >
                                        Home
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        to="/favoris"
                                        activeClassName="active"
                                        className="nav-link" >
                                        Favoris
                                    </NavLink>

                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}