import * as actions from './favoris.actions';

export default ( state = {
    data: [],
    isLoading: false,
    error: null
}, action ) => {
    switch ( action.type ) {
        case actions.FETCH_FAVORIS_SUCCESS: {
            return {
                ...state,
                data: actions.addFavorisError,
                isLoading: false,
                error: null
            };
        }
        case actions.FETCH_FAVORIS_ERROR: {
            return {
                ...state,
                isLoading: false,
                error: action.error
            };
        }
        case actions.REMOVE_FAVORIS_SUCCESS:
        case actions.ADD_FAVORIS_SUCCESS: {
            return {
                ...state,
                data: actions.favoris,
                error: null
            };
        }
        case actions.REMOVE_FAVORIS_ERROR:
        case actions.ADD_FAVORIS_ERROR: {
            return {
                ...state,
                error: action.error
            };
        }
        default: {
            return {
                ...state
            };
        }

    }
};