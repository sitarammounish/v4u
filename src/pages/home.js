import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ProductGrid from '../components/ProductGrid'
import VideoContainer from '../components/VideoContainer';
import ItemGrid from "../components/ItemGrid"
import SliderHome from '../components/Slider'
import Wrapper from '../components/Wrapper'
import Testimonials from '../components/Testimonials';


const Home = () => {
  return (
    <div>
      {/* <Header /> */}
      <SliderHome />
      <VideoContainer/>
      <Wrapper />

     
      <ProductGrid />
      <Testimonials/>
      {/* <ItemGrid /> */}
      {/* <Footer /> */}
    </div>
  )
}

export default Home