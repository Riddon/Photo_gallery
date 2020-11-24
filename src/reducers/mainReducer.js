import { combineReducers } from "redux";
import photoGalleryReducer from "./photoGalleryReducer";
import favoritePhotoReducer from "./favoritePhotoReducer";

export default combineReducers({
  photoGalleryReducer,
  favoritePhotoReducer
});
