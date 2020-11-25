import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import PhotoList from "../../DataDisplay/PhotoList/PhotoList";
import * as photoGalleryActions from "../../../actions/photoGalleryActions";
import PaginationBlock from "../PaginationBlock/PaginationBlock";

const MainPage = () => {

    const photoList = useSelector(state => state.photoGalleryReducer.photoList);
    const dispatch = useDispatch();
    const [photoPage, setPhotoPage] = useState(1);
    const [photoAmount, setPhotoAmount] = useState(10);

    useEffect(() => {
        dispatch(photoGalleryActions.getList(photoPage, photoAmount));
    }, [dispatch, photoPage, photoAmount]);

    const onChangePage = (val) => {
        if (val === 'prev' && photoPage > 1) {
            setPhotoPage(photoPage - 1);
        } else if(val === 'next') {
            setPhotoPage(photoPage + 1);
        }
    };

    const onChangeAmount = (val) => {
        setPhotoAmount(val);
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