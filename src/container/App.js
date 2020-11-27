import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import MainHeader from "../components/Layouts/MainHeader/MainHeader";
import RoutesPage from "../routes/RoutesPage";
import LocalStorage from "../services/LocalStorage";
import * as favoriteActions from "../actions/favoritePhotoActions";
import * as pageActions from "../actions/photoPageActions";
import * as amountActions from "../actions/photoAmountActions";

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const array = LocalStorage.getFromLocalStorage('favorite');
        if(array) {
            dispatch(favoriteActions.getPhotoList(array));
        }

        const page = LocalStorage.getFromLocalStorage('page');
        if(page) {
            dispatch(pageActions.setPage(page));
        } else {
            LocalStorage.setData('page', 1);
            dispatch(pageActions.setPage(1));
        }

        const amount = LocalStorage.getFromLocalStorage('amount');
        if(amount) {
            dispatch(amountActions.setAmount(amount));
        } else {
            LocalStorage.setData('amount', '10');
            dispatch(amountActions.setAmount('10'));
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
