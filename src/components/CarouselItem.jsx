import React from 'react';
import playIcon from '../assets/static/play-icon.png';
import plusIcon from '../assets/static/plus-icon.png';


const CarouselItem = ( { name, image } ) => {
return(
    <div className="carousel-item">
        <img className="carousel-item__img" src={image} alt="" width="50" height="50" />
        <div className="carousel-item__details">
          <div>
            <img className="carousel-item__details--img" src={playIcon} alt="Play Icon" /> 
            <img className="carousel-item__details--img" src={plusIcon} alt="Plus Icon" /> 
          </div>
          <p className="carousel-item__details--title">{name}</p>
          <p className="carousel-item__details--subtitle"></p>
        </div>
      </div>
);
}

export default CarouselItem;