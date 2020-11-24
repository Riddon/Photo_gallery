import React from 'react';
import './PhotoItem.scss';

const PhotoItem = ({data, photoURL, author, openModal, inFavorite, handlerFavorite}) => {

    const handlerOnClick = () => {
        openModal(photoURL, author)
    };

    const handlerToggleFavorite = () => {
        handlerFavorite(data)
    };

    return (
        <>
            <li className="photo-item">
                <div className="photo-item-container">
                    <div className="photo-item-image" onClick={handlerOnClick}>
                        <img src={photoURL} alt={author}/>
                    </div>
                    <div className="photo-item-descr">
                        <h3 className="photo-item-author">{author}</h3>
                        <button className="photo-item-btn-favorite" onClick={handlerToggleFavorite}>
                            <i className={inFavorite ? "fas fa-star" : "far fa-star"}>
                            </i>
                        </button>
                    </div>
                </div>
            </li>
        </>
    );
};

export default PhotoItem;