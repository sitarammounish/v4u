import React from 'react'
import ProductGrid from '../components/ProductGrid'
import VideoContainer from '../components/VideoContainer';
import SliderHome from '../components/Slider'
import Wrapper from '../components/Wrapper'
import Testimonials from '../components/Testimonials';


const Home = () => {
  return (
    <div>
      <SliderHome />
      <VideoContainer/>
      <Wrapper />
      <ProductGrid />
      <Testimonials/>
    </div>
  )
}

export default Home