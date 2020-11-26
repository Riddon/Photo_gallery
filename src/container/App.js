import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import MainHeader from "../components/Layouts/MainHeader/MainHeader";
import RoutesPage from "../routes/RoutesPage";
import LocalStorage from "../services/LocalStorage";
import * as favoriteActions from "../actions/favoritePhotoActions";
import * as pageActions from "../actions/photoPageActions";
import * as amountActions from "../actions/photoAmountActions";

const App = () => {
    const dispatch = useDispatch();
    const photoPage = useSelector(state => state.photoPageReducer.photoPage);
    const photoAmount = useSelector(state => state.photoAmountReducer.photoAmount);

    useEffect(() => {
        const array = LocalStorage.getFromLocalStorage('favorite');

        if(array) {
            dispatch(favoriteActions.getPhotoList(array));
        }

        const page = LocalStorage.getFromLocalStorage('page');
        console.log('Page -->', page);

        if(page) {
            dispatch(pageActions.setPage(page));
        } else {
            LocalStorage.setData('page', photoPage);
        }

        const amount = LocalStorage.getFromLocalStorage('amount');
        console.log('Amount -->', amount);

        if(amount) {
            dispatch(amountActions.setAmount(amount));
        } else {
            LocalStorage.setData('amount', photoAmount);
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
