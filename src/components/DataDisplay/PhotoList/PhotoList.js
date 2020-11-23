import React from 'react';
import PhotoItem from "../PhotoItem/PhotoItem";
import './PhotoList.scss';

const PhotoList = ({photoList}) => {

    console.log('PHOTO LIST --->', photoList);

    return (
        <>
            <ul className="photo-list">
                {
                    (photoList) && photoList.map(item => (
                        <PhotoItem
                            key={item.id}
                            photoURL={item.download_url}
                            author={item.author}
                        />
                    ))
                }
            </ul>
        </>
    );
};

export default PhotoList;