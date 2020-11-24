import React, {useEffect, useRef} from 'react';
import isNil from "lodash/fp/isNil";
import './PhotoModal.scss';

const PhotoModal = ({onClose, isOpenModal}) => {
    const modal = useRef(null);

    useEffect( () => {
        document.addEventListener("click", handlerCloseModal, false);

        return () => {
            document.addEventListener("click", handlerCloseModal, false);
        }
    });

    const handlerCloseModal = (e) => {
        if (!isNil(modal.current)) {
            if (!modal.current.contains(e.target)) {
                onClose();
            }
        }
    };

    return (
        <div className="photo-modal">
            <div className="photo-modal__container" ref={modal}>
                <div className="photo-modal__image">
                    <img src={isOpenModal.imageURL} alt={isOpenModal.imageAuthor}/>
                </div>
            </div>
        </div>
    );
};

export default PhotoModal;