import React, { useRef } from 'react';
import { connect } from 'react-redux';
import PropTypes, { func } from 'prop-types';
import { addPhotoToFavourites, removePhotoFromFavourites } from '../../store/actions';
import './Photo.css';

const Photo = (props) => {

    const favouritesRef = useRef(null);

    const chekIfPhotoIsFavourite = (id) => {
        let result;
        result = props.favourites.filter((item) => {
          return id == item.id
        });
        if (result.length) {
          return true
        }
        else return false;
      }

    const addRemoveFromFavourites = () => {
        if (!chekIfPhotoIsFavourite(props.id)) {
            let photo = {};
            photo.id = props.id;
            photo.albumId = props.albumId;
            photo.title = props.title;
            photo.thumbnailUrl = props.thumbnailUrl;
            photo.url = props.url;

            props.addPhotoToFavourites(photo);
            favouritesRef.current.classList.add("selected");
        }
        else {
            props.removePhotoFromFavourites(props.id);
        }    
    }

    return(
        <div className="photo">
            <div className="image">
                <img src={props.thumbnailUrl}></img>
            </div>
            <span>{props.title}</span>
            <span ref={favouritesRef} className={chekIfPhotoIsFavourite(props.id) ? "favourites selected" : "favourites"} onClick={addRemoveFromFavourites}></span>
        </div>
    )
}

Photo.propTypes = {
  favourites: PropTypes.array,
  addPhotoToFavourites: func,
  removePhotoFromFavourites: func
}

const mapStateToProps = (state) => {
    return {
      favourites: state.addRemovePhotoFromFavouritesReducer.favourites
    };
  };

export default connect(mapStateToProps, {addPhotoToFavourites, removePhotoFromFavourites})(Photo);