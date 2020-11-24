import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import PhotoList from "../../DataDisplay/PhotoList/PhotoList";
import {getPhotoList} from "../../../services/photoGalleryAPI";
import * as photoGalleryActions from "../../../actions/photoGalleryActions";

const MainPage = () => {

    const photoList = useSelector(state => state.photoGalleryReducer.photoList);
    const dispatch = useDispatch();

    useEffect(() => {
        getPhotoList(1, 10).then((result) => {
            console.log('Result -->', result.data);

            dispatch(photoGalleryActions.getList(result.data));
        })
    }, [dispatch]);

    return (
        <>
            <div className="container">
                <PhotoList
                    photoList={photoList}
                />
            </div>
        </>
    );
};

export default MainPage;