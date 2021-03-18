import lodash from 'lodash';
import {
  FETCH_PHOTOS,
  FETCH_PHOTOS_START,
  FETCH_PHOTOS_FAILED
} from '../actions/types';

const INITIAL_STATE = {
  error: false,
  loading: false,
  description: '',
  albums: []
};

const groupPhotosToAlbums = photos => {
  let result = lodash.groupBy(photos, 'albumId');
  return result;
}

const fetchPhotosReducer = (state = INITIAL_STATE, action) => {
  
  switch (action.type) {
    
    case FETCH_PHOTOS:     
      state.albums = groupPhotosToAlbums(action.payload);
      return { ...state, loading: false };

    case FETCH_PHOTOS_START:
      return { ...state, loading: true };

    case FETCH_PHOTOS_FAILED:
      return {
        ...state,
        loading: false,
        description: action.payload,
        error: true
      };

    default:
      return state;
  }
};

export default fetchPhotosReducer;
