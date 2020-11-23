import * as types from "../constants/constTypes";

export function getList(list) {
    return (dispatch) => {
        dispatch({
            type: types.ADD_PHOTO_LIST,
            payload: list
        });
    };
}