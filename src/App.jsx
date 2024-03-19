import React from 'react'
import Navbar from './components/Navbar'
import Navbaar from './components/Navbaar'
import Props from './components/Props'
import Popular from './components/Popular'
import Solution from './components/Solution'
import Customer from './components/Customer'


function App() {
  return (
    <div>
      <Navbar />
      <Navbaar />


      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gridGap: "5px", margin: '-30px 270px 0px 310px' }}>
        <Props
          title="Two-sided Business Cards"
          imageUrl="../src/assets/business.png"
          amount="₦15,500"
          quantity={100}
        />

        <Props
          title="A5 flyers (Single Sided)"
          imageUrl="../src/assets/flyer.png"
          amount="₦25,800"
          quantity={100}

        />


        <Props
          title="Round Stickers (3.5' Diameter)"
          imageUrl="../src/assets/media.png"
          amount="₦17,000"
          quantity={100}
        />

        <Props
          title="Simple Mugs"
          imageUrl="../src/assets/social.png"
          amount="₦4,800"
          quantity={1}

        />
      </div>


      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gridGap: "5px", margin: '20px 270px 0px 310px' }}>
        <Props
          title="Postcards (A6)"
          imageUrl="https://printivo.s3-us-west-2.amazonaws.com/files/category_thumbnails/1439790190_postcard.jpg"
          amount="₦22,300"
          quantity={50}
        />
        <Props
          title="Roll Up Banners (Big Base)"
          imageUrl="https://printivo.s3-us-west-2.amazonaws.com/files/category_thumbnails/1446183154_big%20rollup%20banner.png"
          amount="₦55,000 "
          quantity={1}

        />
        <Props
          title="A2 Posters"
          imageUrl="https://printivo.s3-us-west-2.amazonaws.com/files/category_thumbnails/1572259118_product-5-(1).png"
          amount="₦71,100"
          quantity={100}
        />
        <Props
          title="Trifold Brochures"
          imageUrl="https://printivo.s3-us-west-2.amazonaws.com/files/category_thumbnails/1473167305_trifold-brochure-printing.png"
          amount="₦47,500 "
          quantity={100}
        />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gridGap: "5px", margin: '20px 270px 0px 310px' }}>
        <Props
          title="Landscape ID Cards"
          imageUrl="https://printivo.s3-us-west-2.amazonaws.com/files/category_thumbnails/1456215784_12.png"
          amount="₦3,100"
          quantity={1}
        />
        <Props
          title="Off White T-shirts"
          imageUrl="https://printivo.s3-us-west-2.amazonaws.com/files/category_thumbnails/1485151940_White-tshirt.png"
          amount="₦6,000"
          quantity={1}
        />
        <Props
          title="A4 Branded Paper Bags"
          imageUrl="https://printivo.s3-us-west-2.amazonaws.com/files/category_thumbnails/1572258123_product-3-(1).png"
          amount="₦104,800"
          quantity={100}
        />
        <Props
          title="A4 Courier Bags"
          imageUrl="https://printivo.s3-us-west-2.amazonaws.com/files/category_thumbnails/1607424257_63f28e7a-da1d-4685-a297-964e186a2170.jpeg"
          amount="₦27,500 "
          quantity={100}
        />
      </div>

      <Popular />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gridGap: "5px", margin: '-30px 970px 40px 310px' }}>
        <Props
          title="Greeting Cards"
          imageUrl="https://printivo.s3-us-west-2.amazonaws.com/files/category_thumbnails/1473159158_Christmas-card-for-this-wonderful-season.png"
          amount="₦29,800"
          quantity={50}
        />

        <Props
          title="Stickers"
          imageUrl="https://printivo.s3-us-west-2.amazonaws.com/files/category_thumbnails/1473165427_stickers.png"
          amount="₦5,400"
          quantity={75}
        />
      </div>
      <Solution/>
      <Customer/>
    </div>
  )
}

export default App