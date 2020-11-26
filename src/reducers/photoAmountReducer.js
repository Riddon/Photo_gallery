import * as types from "../constants/constTypes";

const initState = {
    photoAmount: '10'
};

const photoAmountReducer = (state = initState, action) => {
    switch (action.type) {
        case types.SET_PHOTO_AMOUNT:
            return {
                photoAmount: action.payload
            };

        default:
            return state;
    }
};

export default photoAmountReducer;