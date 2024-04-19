import React from 'react'
import {Container} from 'react-bootstrap'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import customer from '../images/customer.png';
import itenary from '../images/itenary.jpg';
import people from '../images/people.jpeg';
import SlideCard from './SlideCard';

const SliderHome = () => {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
    }
    return (
        <div>
            <section className='homeSlide' >
                <Container>
                    <Slider {...settings} >
                        <SlideCard title="Your Culinary Journey Begins Here" cover={people} desc="We are Tandoori Flame Restaurants, recognized as North America’s Largest Indian Buffet & Restaurant. Featuring 12 Live Cooking Stations, guests can enjoy up to 150 items with unmatched ethnic taste, 
                                delicious Craft cocktails and street food that’s to die for. We are sure to please even the pickiest of eaters because we have something for everyone!" />
                        <SlideCard title="Let’s Celebrate" cover={customer} desc="For life’s special moments, impress your guests with Tandoori Flame. We have over 24 Private Dining room options, and can conveniently accommodate groups of 20 to over 300 on any given day." />
                        <SlideCard title="Traditional Food with Modern Touch"cover={itenary} desc="From traditional flavors influenced by local culture to gastronomic delights that trot the world, Nawab's has always raised their standards of hospitality through responsible luxury.
                                Experience the Award – Winning Kitchens led by our Expert Chefs and Culinarians." />
                    </Slider>
                </Container>
            </section>
        </div>


    )
}

export default SliderHome