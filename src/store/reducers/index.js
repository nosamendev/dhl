import { combineReducers } from 'redux';

import fetchPhotosReducer from './fetchPhotosReducer';
import addRemovePhotoFromFavouritesReducer from './addRemovePhotoFromFavouritesReducer';

export default combineReducers({
  fetchPhotosReducer: fetchPhotosReducer,
  addRemovePhotoFromFavouritesReducer: addRemovePhotoFromFavouritesReducer
});