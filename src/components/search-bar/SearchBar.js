import React, { Component } from 'react';
import { Formik } from 'formik';
import apiMovie, { apiMovieMap } from '../../conf/api.movie';

export default class SearchBar extends Component {


    submit = (values, actions) => {
        // console.log( values );
        const query = '?' + Object.keys(values).map(k => `${ k }=${ values[ k ] }&`).join('');
        apiMovie.get('/search/movie' + query)
            .then(response => response.data.results)
            .then(moviesApi => {
                const movies = moviesApi.map(apiMovieMap);
                this.props.updateMovies(movies);
            })
            .catch(err => console.log(err))
            .then(actions.setSubmitting(false));

    };
    render () {
        return (
            <Formik
                onSubmit={ this.submit }
                initialValues={ { query: '', language: 'en-US' } }
            >
                {({ handleSubmit, handleChange, handleBlur, isSubmitting }) => (
                    <form className="d-flex flex-row p-2 m-2" onSubmit={ handleSubmit }>
                        <input name="query" className="flex-fill form-control me-2" placeholder="Search ..." onChange={ handleChange } onBlur={ handleBlur } />
                        <select className="me-2 form-control w-25" name="language" onChange={ handleChange } onBlur={ handleBlur }>
                            <option value="en-US">Anglais</option>
                            <option value="fr-FR">Français</option>
                        </select>
                        <button className="btn btn-sm btn-success" type="submit" disabled={ isSubmitting }>Submit</button>

                    </form>
                ) }

            </Formik>
        );
    }
}