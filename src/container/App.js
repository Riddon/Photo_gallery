import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import {getPhotoList} from '../services/photoGalleryAPI';
import * as photoGalleryActions from '../actions/photoGalleryActions';
import RoutesPage from "../routes/RoutesPage";
import MainHeader from "../components/Layouts/MainHeader/MainHeader";

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        getPhotoList(1, 10).then((result) => {
            console.log('Result -->', result.data);

            dispatch(photoGalleryActions.getList(result.data));
        })
    });

    return (
        <>
            <MainHeader />
            <RoutesPage />
        </>
    );
};

export default App;
