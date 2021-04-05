import React, { Component } from 'react';
import { Formik } from 'formik';

export default class SearchBar extends Component {
    componentDidMount () {
        this.submit( { query: "all", language: "en-EN" } );
    }

    submit = ( values, actions ) => {
        this.props.fetchMovies( values ).then(
            () => console.log( actions )
        );
    };

    render () {
        return (
            <Formik
                onSubmit={ this.submit }
                initialValues={ { query: 'all', language: 'en-EN' } }
            >
                {( { values,
                    handleSubmit,
                    handleChange,
                    handleBlur,
                    isSubmitting
                } ) => (
                    <form
                        className="d-flex flex-row p-2 m-2"
                        onSubmit={ handleSubmit }>
                        <input
                            name="query"
                            className="flex-fill form-control me-2"
                            placeholder="Search ..."
                            onChange={ handleChange }
                            onBlur={ handleBlur }
                            value={ values.query }
                        />
                        <select
                            className="me-2 form-control w-25"
                            name="language"
                            onChange={ handleChange }
                            onBlur={ handleBlur }
                        >
                            <option value="fr-FR">Français</option>
                            <option value="en-US">Anglais</option>
                        </select>
                        <button
                            className="btn btn-sm btn-success"
                            type="submit"
                            disabled={ isSubmitting }
                        >
                            Submit
                        </button>
                    </form>
                ) }
            </Formik>
        );
    }
}