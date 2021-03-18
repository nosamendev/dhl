import {
    ADD_PHOTO_TO_FAVOURITES,
    REMOVE_PHOTO_FROM_FAVOURITES
  } from '../actions/types';
  
  const INITIAL_STATE = {
    favourites: []
  };

  const removePhoto = (id, state) => {
    const newFavourites = state.favourites.filter(item => {
        return item.id != id
    });
    return newFavourites;
  }

  const addRemovePhotoFromFavouritesReducer = (state = INITIAL_STATE, action) => {
  
    switch (action.type) {
      case ADD_PHOTO_TO_FAVOURITES:       
        let photo = action.payload;
        return { ...state, ...state.favourites.push(photo) }; 

      case REMOVE_PHOTO_FROM_FAVOURITES:       
        let favourites = removePhoto(action.payload, state);
        return { ...state, favourites };

      default:
        return state;
    }
  };
  
  export default addRemovePhotoFromFavouritesReducer;