import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Album.css';

const Album = (props) => {

    const albumItemsNumber = props.title == 'Album' ? props.id : null;

    return (
        <div className="album">
            <Link to={props.title == 'Album' ? `/albums/${props.id}` : `/favourites`} className={props.title == 'Album' ? 'icon':'icon favourites'}></Link>
            <span>{props.title} {albumItemsNumber} ({props.photosNumber})</span>
        </div>
    );
}

Album.propTypes = {
    title: PropTypes.string,
    id: PropTypes.number,
    photosNumber: PropTypes.number
  }

export default Album;