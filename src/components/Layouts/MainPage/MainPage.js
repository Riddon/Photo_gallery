import React from 'react';
import {useSelector} from "react-redux";
import PhotoList from "../../DataDisplay/PhotoList/PhotoList";

const MainPage = () => {

    const photoList = useSelector(state => state.photoGalleryReducer.photoList);

    return (
        <>
            <div className="container">
                <PhotoList photoList={photoList}/>
            </div>
        </>
    );
};

export default MainPage;