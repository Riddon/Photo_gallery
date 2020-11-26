import * as types from "../constants/constTypes";

const initState = {
    photoPage: 1
};

const photoPageReducer = (state = initState, action) => {
    switch (action.type) {
        case types.SET_PHOTO_PAGE:
            return {
                photoPage: action.payload
            };

        default:
            return state;
    }
};

export default photoPageReducer;