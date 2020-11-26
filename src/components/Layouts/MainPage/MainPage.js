import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import PhotoList from "../../DataDisplay/PhotoList/PhotoList";
import LocalStorage from "../../../services/LocalStorage";
import * as photoGalleryActions from "../../../actions/photoGalleryActions";
import * as pageActions from "../../../actions/photoPageActions";
import * as amountActions from "../../../actions/photoAmountActions";
import PaginationBlock from "../PaginationBlock/PaginationBlock";

const MainPage = () => {

    const photoList = useSelector(state => state.photoGalleryReducer.photoList);
    const photoPage = useSelector(state => state.photoPageReducer.photoPage);
    const photoAmount = useSelector(state => state.photoAmountReducer.photoAmount);
    const dispatch = useDispatch();

    useEffect(() => {
        if(photoPage && photoAmount) {
            dispatch(photoGalleryActions.getList(photoPage, photoAmount));
        }
    }, [dispatch, photoPage, photoAmount]);

    const onChangePage = (val) => {
        if (val === 'prev' && photoPage > 1) {
            dispatch(pageActions.setPage(photoPage - 1));
            LocalStorage.setData('page', photoPage - 1);
        } else if(val === 'next') {
            dispatch(pageActions.setPage(photoPage + 1));
            LocalStorage.setData('page', photoPage + 1);
        }
    };

    const onChangeAmount = (val) => {
        dispatch(amountActions.setAmount(val));
        LocalStorage.setData('amount', val);
    };

    return (
        <>
            <div className="container">
                <PaginationBlock
                    onChangePage={onChangePage}
                    photoPage={photoPage}
                    photoAmount={photoAmount}
                    onChangeAmount={onChangeAmount}
                />
                <PhotoList
                    photoList={photoList}
                />
            </div>
        </>
    );
};

export default MainPage;