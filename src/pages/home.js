// Worked by Sitaram Mounish Talluri - 8885467

import React from 'react'
import ProductGrid from '../components/ProductGrid'
import VideoContainer from '../components/VideoContainer';
import SliderHome from '../components/Slider'
import Wrapper from '../components/Wrapper'
import Testimonials from '../components/Testimonials';

// This is Home page and all over the page is divided into Multiple Components.
const Home = () => {
  return (
    <div>
      {/* slider component */}
      <SliderHome />
      <VideoContainer/>
      {/* dining picture */}
      <Wrapper />
      {/* 3row grid with text and images */}
      <ProductGrid />
      <Testimonials/>
    </div>
  )
}

export default Home