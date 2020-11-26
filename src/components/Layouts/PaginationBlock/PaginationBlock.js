import React from 'react';
import './PaginationBlock.scss';

const PaginationBlock = ({onChangePage, photoPage, photoAmount, onChangeAmount}) => {

    const moveToNextPage = () => {
        onChangePage('next')
    };

    const moveToPrevPage = () => {
        onChangePage('prev')
    };

    const onChangePhotoAmount = (e) => {
        onChangeAmount(e.target.value);
    };

    return (
        <>
            <div className="pagination">
                <div className="pagination__page">
                    <button
                        className="pagination__btn--prev pagination__btn"
                        onClick={moveToPrevPage}
                        disabled={(photoPage === 1)}
                    >
                        prev
                    </button>

                    <div className="pagination__page-title">
                        {photoPage}
                    </div>

                    <button
                        className="pagination__btn--next pagination__btn"
                        onClick={moveToNextPage}
                    >
                        next
                    </button>
                </div>

                <form className="pagination__form">
                    <label className="pagination__photo-amount-title" htmlFor="photo-amount">
                        Photo amount
                    </label>
                    <select className="pagination__photo-amount" name="photo-amount" value={photoAmount} onChange={onChangePhotoAmount}>
                        <option value={10}>10</option>
                        <option value={20}>20</option>
                        <option value={30}>30</option>
                    </select>
                </form>
            </div>
        </>
    );
};

export default PaginationBlock;