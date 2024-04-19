// Worked by Sitaram Mounish Talluri - 8885467
import React from 'react'
import { Container } from 'react-bootstrap'
import naan from "../images/naan.jpg"
import rice from "../images/rice.png"
import steak from "../images/steak.jpg"
import '../Css/productGrid.css'
const ProductGrid = () => {
  return (
    // Product grid on home page 
    <Container>
        <div className='marginContainer'>
        <div className='grid'>

      {/* First Item */}
      <div>
        <img src={rice} alt="Item 2" className='imgStyle' />
      </div>
      <div className='contentStyle'>
        <h2 className='color'>Experience the Rich Flavors of Our Authentic Thali</h2>
        <p className='color'>
        Indulge in a symphony of tastes as you sample a variety of dishes, each bursting with authentic spices and aromas. From fragrant basmati rice to creamy dal (lentil stew), from tender tandoori chicken to vegetable curries cooked to perfection, our thali offers a comprehensive culinary journey through India's culinary landscape.
        </p>
      </div>

      {/* Second Item */}
      <div className='contentStye'>
        <h2 className='color'>Indulge in Exquisite Flavors: Chicken with Butter Naan</h2>
        <p className='color'>
        Treat yourself to a culinary adventure with our tantalizing chicken with paratha and butter chicken combo. This delightful meal brings together the best of North Indian cuisine, offering a symphony of flavors and textures that will leave you craving more.
        </p>
      </div>
      <div>
        <img src={naan} alt="Item 1" className='imgStyle' />
      </div>

      {/* Third Item */}
      <div>
        <img src={steak} alt="Item 2" className='imgStyle' />
      </div>
      <div className='contentStye'>
        <h2 className='color'>Savor the Art of Medium-Rare Steak</h2>
        <p className='color'>
        Embark on a culinary journey where every bite is a celebration of flavor and texture. Our medium-rare steak is a masterpiece of culinary craftsmanship, prepared to perfection to deliver an unforgettable dining experience.
        </p>
      </div>

    </div>
    </div>
    </Container>
    
  )
}

export default ProductGrid