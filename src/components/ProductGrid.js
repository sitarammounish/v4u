import React from 'react'
import { Container } from 'react-bootstrap'
import naan from "../images/naan.jpg"
import rice from "../images/rice.png"
import samosa from "../images/samosa.jpg"
import steak from "../images/steak.jpg"
const ProductGrid = () => {
  return (
    <Container>
        <div style={{marginTop:'50px'}}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
      {/* First Item */}
      <div style={{ textAlign: 'center', margin: 'auto' }}>
        <h2 style={{color:'#273b52'}}>Clotth Theory Men Hooded Sweatshirt</h2>
        <p style={{color:'#273b52'}}>
        100% Pure Cotton and  Premium Export Quality Branded Full Sleeve sweatshirt for Men; Unique Collection to your wardrobe casuals a hit of effortless cool with this best looking Sweatshir
        </p>
      </div>
      <div>
        <img src={naan} alt="Item 1" style={{ width: '100%', height:'330px' }} />
      </div>

      {/* Second Item */}
      
      <div>
        <img src={rice} alt="Item 2" style={{ width: '100%', height:'330px' }} />
      </div>
      <div style={{ textAlign: 'center', margin: 'auto' }}>
        <h2 style={{color:'#273b52'}}>blackberrys Men's 3 Piece Slim Fit Suits-LX-WISDOM3</h2>
        <p style={{color:'#273b52'}}>
        The classic design of this blazer includes a single-breasted front with a two-button closure. The notched lapel adds a touch of refinement, while the tailored fit accentuates your silhouette without feeling restrictive.
        </p>
      </div>
      {/* Third Row */}
      <div style={{ textAlign: 'center', margin: 'auto' }}>
        <h2 style={{color:'#273b52'}}>Clotth Theory Men Hooded Sweatshirt</h2>
        <p style={{color:'#273b52'}}>
        100% Pure Cotton and  Premium Export Quality Branded Full Sleeve sweatshirt for Men; Unique Collection to your wardrobe casuals a hit of effortless cool with this best looking Sweatshir
        </p>
      </div>
      <div>
        <img src={naan} alt="Item 1" style={{ width: '100%', height:'330px' }} />
      </div>
      {/* Fourth Row */}

      <div>
        <img src={steak} alt="Item 2" style={{ width: '100%', height:'330px' }} />
      </div>
      <div style={{ textAlign: 'center', margin: 'auto' }}>
        <h2 style={{color:'#273b52'}}>blackberrys Men's 3 Piece Slim Fit Suits-LX-WISDOM3</h2>
        <p style={{color:'#273b52'}}>
        The classic design of this blazer includes a single-breasted front with a two-button closure. The notched lapel adds a touch of refinement, while the tailored fit accentuates your silhouette without feeling restrictive.
        </p>
      </div>

    </div>
    </div>
    </Container>
    
  )
}

export default ProductGrid