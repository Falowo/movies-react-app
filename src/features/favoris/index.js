import React from 'react';
import { FavoriList } from './components';
import { Loading } from '../../components';



const Favoris = (props) => {
    return (
        <>
            {props.loaded ? (

               
                        <div className="d-flex flex-row border flex-fill pt-4 p-2">
                            <FavoriList
                                favoris={ props.favoris }
                                removeFavori={ props.removeFavori }
                            />
                        </div>
                   
            ) : (
                <Loading />
            )}
        </>
    );

};

export default Favoris;