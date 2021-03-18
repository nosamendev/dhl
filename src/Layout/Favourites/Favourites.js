import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Photo from '../Photo/Photo';

const Favourites = (props) => {
    
    const displayPhotos = () => {
        const photos = [];
        for (let i = 0; i < props.favourites.length; i++) {
          photos[i] = (
            <Photo
              key={i}
              id={props.favourites[i].id}
              albumId={props.favourites[i].albumId}
              title={props.favourites[i].title}
              thumbnailUrl={props.favourites[i].thumbnailUrl}
              url={props.favourites[i].url}
            />
          );
        }
        return photos;
    }
    
    return(
        <div className="wrapper">
            <h2><Link to="/">Home</Link> / Favourites ({props.favourites.length})</h2>
            <section className="photos">
                {displayPhotos()}
            </section>
        </div>
    )
}

Favourites.propTypes = {
  favourites: PropTypes.array
}

const mapStateToProps = (state) => {
    return {
      favourites: state.addRemovePhotoFromFavouritesReducer.favourites
    };
  };

export default connect(mapStateToProps, null)(Favourites);