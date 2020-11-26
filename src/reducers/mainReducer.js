import { combineReducers } from "redux";
import photoGalleryReducer from "./photoGalleryReducer";
import favoritePhotoReducer from "./favoritePhotoReducer";
import photoPageReducer from "./photoPageReducer";
import photoAmountReducer from "./photoAmountReducer";

export default combineReducers({
  photoGalleryReducer,
  favoritePhotoReducer,
  photoPageReducer,
  photoAmountReducer
});
