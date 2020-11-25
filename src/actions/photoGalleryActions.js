import * as types from "../constants/constTypes";
import {getPhotoList} from "../services/photoGalleryAPI";

export function getList(photoPage, photoAmount) {
    return async (dispatch) => {
        const dataPhotoList = await getPhotoList(photoPage, photoAmount).then((result) => {
            console.log('Result -->', result.data);
            return result.data;
        });

        dispatch({
            type: types.ADD_PHOTO_LIST,
            payload: dataPhotoList
        });
    };
}