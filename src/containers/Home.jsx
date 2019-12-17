import React, {useState,useEffect} from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import useInitialState from '../hooks/useInitialState';

import '../assets/styles/App.scss';
import '../assets/styles/components/Categories.scss';
import '../assets/styles/components/Carousel.scss';
import '../assets/styles/components/CarouselItem.scss';

const Home = ({certificates, favorites, university, personalData}) =>    
    {
    return (
        <>
         {certificates.length > 0 && 
                <Categories title="Skills">
                    <Carousel>
                        {certificates.map((item,i) => 
                            <CarouselItem  key={i} {...item} />
                        )}
                    </Carousel>
                </Categories>
            }
            {favorites.length > 0 && 
                <Categories title="Favorites">
                    {favorites.map((item,i) => 
                        <CarouselItem  key={i} {...item} />
                    )}
                </Categories>            
            }  
        </>   
    );
}

const mapStateToProps = state => {
    return {
        certificates: state.certificates,
        university: state.university,
        personalData: state.personaData,
        favorites: state.favorites
    }
}

export default connect(mapStateToProps, null)(Home);
