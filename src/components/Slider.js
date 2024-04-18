import React, { useState } from 'react'
import { Carousel, Container, Image } from 'react-bootstrap'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
// import ExampleCarouselImage from '../images/image1.jpg';
import buffet1 from '../images/buffet1.jpg';
import buffet2 from '../images/buffet2.jpg';
import buffet3 from '../images/buffet3.jpg';
import SlideCard from './SlideCard';

const SliderHome = () => {
    // const [index, setIndex] = useState(0);

    // const handleSelect = (selectedIndex) => {
    //     setIndex(selectedIndex);
    // };


    const settings = {
        dots: true,
        nav: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    }
    return (
        <div>
            <section className='homeSlide' >
                <Container>
                    <Slider {...settings} >
                        <SlideCard title='Winter Wonderland Wardrobe: Discover Cozy Elegance' cover={buffet1} desc='Embark on a sartorial journey through our "Winter Wonderland Wardrobe" collection. As the frosty breeze sets in, envelop yourself in the warmth of our carefully curated ensembles that seamlessly blend comfort and elegance. From plush knitwear to stylish outerwear, each piece is a testament to winter fashion that transcends trends. Dive into a world where fashion meets coziness' />
                        <SlideCard title='New Year, New Style: Elevate Your Wardrobe Resolutions' cover={buffet2} desc='Cheers to a stylish New Year! Embrace a wardrobe makeover with our exclusive collection, "New Year, New Style." Bid farewell to the old and welcome the new with fashion-forward pieces that redefine your style narrative 
                        Whether its a bold statement piece or subtle everyday chic , our curated selection invites you to step into the coming year with confidence and flair.' />
                        <SlideCard title='Festive Splendor: Unwrap the Magic with Our Holiday Offer Deals!' cover={buffet3} desc='Discover the joy of giving and receiving as you explore our handpicked selection, meticulously chosen to elevate your festive celebrations. From cozy winter essentials to dazzling party attire, our holiday collection captures the essence of the season. Picture yourself adorned in festive hues, ready to make memories and spread cheer.' />
                    </Slider>
                </Container>
            </section>
        </div>


    )
}

export default SliderHome