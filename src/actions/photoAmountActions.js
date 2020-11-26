import * as types from "../constants/constTypes";

export function setAmount(amount) {

    return (dispatch) => {
        dispatch({
            type: types.SET_PHOTO_AMOUNT,
            payload: amount
        });
    };
}