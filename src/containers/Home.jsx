import React, {useState,useEffect} from 'react';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import useInitialState from '../hooks/useInitialState';

import '../assets/styles/App.scss';
import '../assets/styles/components/Categories.scss';
import '../assets/styles/components/Carousel.scss';
import '../assets/styles/components/CarouselItem.scss';

const API = 'https://us-central1-personal-cv-5fd83.cloudfunctions.net/api';
const Home = () => {
    const response =  useInitialState(API);

    return response.length === 0 ? <h1>Cargando...</h1> :(
        <>
            <Search />
            {response.certificates.length > 0 &&
                <Categories title="Skills">
                    <Carousel>     
                        {response.certificates.map((item,i) =>            
                            <CarouselItem key={i} {...item} />
                        )}
                    </Carousel>
                </Categories>
            }          
        </>
    );
}
export default Home;
