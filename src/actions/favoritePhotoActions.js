import * as types from "../constants/constTypes";
import {getPhoto} from "../services/photoGalleryAPI";

export function getPhotoFromServer(id) {

    return async (dispatch) => {

        const dataPhotoItem = await getPhoto(id).then(result => {
            return result.data;
        });

        dispatch({
            type: types.ADD_FAVORITE_PHOTO,
            payload: dataPhotoItem
        });
    };
}

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