import * as types from "../constants/constTypes";

export function setPage(page) {

    return (dispatch) => {
        dispatch({
            type: types.SET_PHOTO_PAGE,
            payload: page
        });
    };
}