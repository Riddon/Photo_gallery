import React from 'react';
import './PhotoItem.scss';

const PhotoItem = ({photoURL, author}) => {

    return (
        <>
            <li className="photo-item">
                <div className="photo-item-container">
                    <div className="photo-item-image">
                        <img src={photoURL} alt={author}/>
                    </div>
                    <div className="photo-item-descr">
                        <h3 className="photo-item-author">{author}</h3>
                        <button className="photo-item-btn-favorite">
                            <i className="far fa-star">

                            </i>
                        </button>
                    </div>
                </div>
            </li>
        </>
    );
};

export default PhotoItem;