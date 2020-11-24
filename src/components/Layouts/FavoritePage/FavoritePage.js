import React from 'react';
import {useSelector} from "react-redux";
import PhotoList from "../../DataDisplay/PhotoList/PhotoList";

const FavoritePage = () => {

    const favoriteList = useSelector(state => state.favoritePhotoReducer.favoriteList);
    console.log('FAVORITES --->', favoriteList);

    return (
        <>
            <div className="container">
                <PhotoList
                    photoList={favoriteList}
                />
            </div>
        </>
    );
};

export default FavoritePage;