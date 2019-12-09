import React,{useState,useEffect} from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import useInitialState from '../hooks/useInitialState';

import '../assets/styles/App.scss';
import '../assets/styles/components/Categories.scss'
import '../assets/styles/components/Carousel.scss'
import '../assets/styles/components/CarouselItem.scss'

const API = 'https://us-central1-reservas-5f547.cloudfunctions.net/api'
const App = () => {
    const initialState = useInitialState(API);
    return (
        <div className="App">
            <Header />
            <Search />
            <Categories title="Lista 1">
                <Carousel>
                    <CarouselItem />
                    <CarouselItem />
                    <CarouselItem />
                    <CarouselItem />
                    <CarouselItem />
                    <CarouselItem />
                    <CarouselItem />
                </Carousel>
            </Categories>
            <Categories title="Lista 2">
                <Carousel>
                    <CarouselItem />
                    <CarouselItem />
                </Carousel>
            </Categories>
            <Footer />
        </div>
    );
}
export default App;