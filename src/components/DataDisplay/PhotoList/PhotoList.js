import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import PhotoItem from "../PhotoItem/PhotoItem";
import './PhotoList.scss';
import PhotoModal from "../../Modal/PhotoModal/PhotoModal";
import LocalStorage from "../../../services/LocalStorage";
import * as favoriteActions from "../../../actions/favoritePhotoActions";
import EmptyField from "../../Layouts/EmptyField/EmptyField";

const PhotoList = ({photoList}) => {

    const dispatch = useDispatch();
    const favoriteList = useSelector(state => state.favoritePhotoReducer.favoriteList);
    const [showModal, setShowModal] = useState({
        isOpen: false,
        imageURL: '',
        imageAuthor: ''
    });

    const checkInFavorite = (item) => {
        let elem = favoriteList.find(element => {return element.id === item.id});
        return !!elem;
    };

    const handleClickToFavorite = (item) => {
        if(!checkInFavorite(item)) {
            LocalStorage.postToLocalStorage('favorite', item);
            dispatch(favoriteActions.addPhoto(item));
        } else {
            LocalStorage.deleteFromLocalStorage('favorite', item.id);
            dispatch(favoriteActions.removePhoto(item.id));
        }
    };

    const openModal = (url, author) => {
        setShowModal({
            isOpen: true,
            imageURL: url,
            imageAuthor: author
        });
    };

    const closeModal = () => {
        setShowModal({
            isOpen: false,
            imageURL: '',
            imageAuthor: ''
        });
    };

    if (photoList.length > 0) {
        return (
            <>
                <ul className="photo-list">
                    {
                        photoList.map(item => (
                            <PhotoItem
                                key={item.id}
                                data={item}
                                photoURL={item.download_url}
                                author={item.author}
                                inFavorite={checkInFavorite(item)}
                                handlerFavorite={handleClickToFavorite}
                                openModal={openModal}
                            />
                        ))
                    }

                    {
                        showModal.isOpen && <PhotoModal
                            onClose={closeModal}
                            isOpenModal={showModal}
                        />
                    }
                </ul>
            </>
        );
    } else {
        return <EmptyField />
    }


};

export default PhotoList;