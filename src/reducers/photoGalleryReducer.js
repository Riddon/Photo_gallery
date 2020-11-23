import * as types from "../constants/constTypes";

const initState = {
    photoList: []
};

const photoGalleryReducer = (state = initState, action) => {
    switch (action.type) {
        case types.ADD_PHOTO_LIST:
            return {
                ...state,
                ...{ photoList: action.payload }
            };

        default:
            return state;
    }
};

export default photoGalleryReducer;