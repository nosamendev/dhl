import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPhotos } from '../../store/actions';
import PropTypes from 'prop-types';
import Album from '../Album/Album';
import Loader from '../Loader/Loader';
import './Albums.css';

const Albums = props => {
   
  useEffect(() => {
    props.fetchPhotos();
  }, []);

  const displayAlbums = () => {
    if (props.error) {
      return <p>The albums couldn't be loaded.</p>;
    }
   
    const len = Object.keys(props.albums).length;
    if (len !== 0) {
      const albums = [];
      for (let i = 0; i < len; i++) {
        albums[i] = (
          <Album
            key={i+1}
            id={i+1}
            photosNumber={Object.values(props.albums)[i].length}
            title={'Album'}
          />
        );
      }
      return albums;
    }
  };

  const displayFavourites = () => {
    return <Album
      key={props.albums.length}
      id={props.albums.length}
      photosNumber={props.favourites.length}
      title={'Favourites'}
    />
  }

  if (props.loading) {
    return <Loader />;
  }
 
  return (
    <div className="wrapper">
        <h2>Albums ({Object.keys(props.albums).length})</h2>
        <section className="albums">{displayFavourites()}{displayAlbums()}</section>
    </div>  
  );
};

Albums.propTypes = {
  fetchPhotos: PropTypes.func,
  albums: PropTypes.object,
  error: PropTypes.bool,
  loading: PropTypes.bool,
  favourites: PropTypes.array
}

const mapStateToProps = state => {
  return {
    albums: state.fetchPhotosReducer.albums,
    error: state.fetchPhotosReducer.error,
    loading: state.fetchPhotosReducer.loading,
    favourites: state.addRemovePhotoFromFavouritesReducer.favourites
  };
};

export default connect(mapStateToProps, { fetchPhotos })(Albums);
