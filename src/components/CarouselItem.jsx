import React from 'react';
import { connect } from 'react-redux';
import { setFavorite } from '../actions'
import playIcon from '../assets/static/play-icon.png';
import plusIcon from '../assets/static/plus-icon.png';


const CarouselItem = (props) => {
const { name, image } = props;
const handleSetFavorite = () => {
  props.setFavorite({
    name, image
  });
}
return(
    <div className="carousel-item">
        <img className="carousel-item__img" src={image} alt="" width="15" height="15" />
        <div className="carousel-item__details">
          <div>
            <img className="carousel-item__details--img" src={playIcon} alt="Play Icon" /> 
            <img className="carousel-item__details--img" src={plusIcon} alt="Plus Icon" onClick={handleSetFavorite} /> 
          </div>
          <p className="carousel-item__details--title">{name}</p>
          <p className="carousel-item__details--subtitle"></p>
        </div>
      </div>
);
}

const mapDispatchToProps = {
  setFavorite,
}
export default connect(null, mapDispatchToProps)(CarouselItem);