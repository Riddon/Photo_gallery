import * as types from "../constants/constTypes";

export function addPhoto(item) {

    return dispatch => {
        dispatch({
            type: types.ADD_FAVORITE_PHOTO,
            payload: item
        });
    };
}

export function removePhoto(id) {

    return dispatch => {
        dispatch({
            type: types.REMOVE_FAVORITE_PHOTO,
            payload: id
        });
    };
}