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

const baseURL = 'https://us-central1-personal-cv-5fd83.cloudfunctions.net/api';
const Home = () =>    
    {
        const resp = useInitialState(baseURL);
        console.log(resp)
    return resp.length === 0 ? <h1>Cargando...</h1> :(
        <>
            <Search />
            <Categories title="Skills">
                <Carousel>
                    {resp.certificates.map((item,i) => 
                        <CarouselItem  key={i} {...item}/>
                    )}
                </Carousel>
            </Categories>              
        </>   
    );
}

export default Home;
