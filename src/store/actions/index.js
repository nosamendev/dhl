import {
    FETCH_PHOTOS,
    FETCH_PHOTOS_START,
    FETCH_PHOTOS_FAILED,
    ADD_PHOTO_TO_FAVOURITES,
    REMOVE_PHOTO_FROM_FAVOURITES
  } from '../actions/types';
  
  import photos from '../../api/photos';
  
  export const fetchPhotos = () => async dispatch => {
    dispatch({ type: FETCH_PHOTOS_START });
  
    try {
      const response = await photos.get('https://jsonplaceholder.typicode.com/photos');
      dispatch({ type: FETCH_PHOTOS, payload: response.data });
    } catch (error) {
      dispatch({type: FETCH_PHOTOS_FAILED, payload: error});
    }
  };
  
  export const addPhotoToFavourites = (photo) => {
    return {
      type: ADD_PHOTO_TO_FAVOURITES,
      payload: photo
    }
  }

  export const removePhotoFromFavourites = (id) => {
    return {
      type: REMOVE_PHOTO_FROM_FAVOURITES,
      payload: id
    }
  }