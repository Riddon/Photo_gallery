import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import MainHeader from "../components/Layouts/MainHeader/MainHeader";
import RoutesPage from "../routes/RoutesPage";
import LocalStorage from "../services/LocalStorage";
import {getPhoto} from "../services/photoGalleryAPI";
import * as favoriteActions from "../actions/favoritePhotoActions";

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const array = LocalStorage.getFromLocalStorage('favorite');

        if(array) {
            array.forEach(item => {
                getPhoto(item.id).then(result => {
                    dispatch(favoriteActions.addPhoto(result.data))
                });
            });
        }
    });

    return (
        <>
            <MainHeader />
            <RoutesPage />
        </>
    );
};

export default App;
