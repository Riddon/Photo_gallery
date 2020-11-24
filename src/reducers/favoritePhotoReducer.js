import * as types from "../constants/constTypes";

const initState = {
    favoriteList: []
};

const favoritePhotoReducer = (state = initState, action) => {
    switch (action.type) {
        case types.ADD_FAVORITE_PHOTO:
            return {
                ...state,
                favoriteList: [...state.favoriteList, action.payload]
            };

        case types.REMOVE_FAVORITE_PHOTO:

            const newList = state.favoriteList.filter(item => item.id !== action.payload);

            return {
                ...{ favoriteList: newList }
            };

        default:
            return state;
    }
};

export default favoritePhotoReducer;