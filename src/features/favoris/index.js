import React from 'react';
import { FavoriList } from './components';
import { Loading } from '../../components';
import { connect } from 'react-redux';
import { tryRemoveFavori } from '../../store/actions';
import { favorisIsLoadingSelector, favorisListSelector } from '../../store/selectors';

const Favoris = ( props ) => {
    return (
        <>
            <div className="d-flex flex-row border flex-fill pt-4 p-2">
                { props.isLoading ? (
                    <Loading />
                ) : (
                    <>
                        <FavoriList
                            favoris={ props.favoris }
                            removeFavori={ props.tryRemoveFavori }
                        />
                    </>
                ) }
            </div>
        </>
    );
};
export default connect( state => ( {
    favoris: favorisListSelector( state ),
    isLoading: favorisIsLoadingSelector( state )
} ), {
    tryRemoveFavori
} )( Favoris );