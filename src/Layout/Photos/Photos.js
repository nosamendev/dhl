import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Photo from '../Photo/Photo';
import './Photos.css';

const Photos = (props) => {
    
    const displayPhotos = () => {
        const photos = [];
        for (let i = 0; i < props.album.length; i++) {
          photos[i] = (
            <Photo
              key={i}
              id={props.album[i].id}
              albumId={props.album[i].albumId}
              title={props.album[i].title}
              thumbnailUrl={props.album[i].thumbnailUrl}
              url={props.album[i].url}
            />
          );
        }
        return photos;
    }

    const albumTitle = props.history.location.pathname.slice(8);

    return(
        <div className="wrapper">
            <h2><Link to="/">Home</Link> / Album {albumTitle}</h2>
            <section className="photos">
                {displayPhotos()}
            </section>
        </div>
    )
}

Photos.propTypes = {
  album: PropTypes.array
}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.id;

    return {
      album: state.fetchPhotosReducer.albums[id]
    };
  };

export default connect(mapStateToProps, null)(Photos);