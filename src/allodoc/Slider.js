import React from 'react'
import './allpDoc.css'
import Carousel from 'react-elastic-carousel';
import image1 from './assets/clinicOne.jpg'
import image2 from './assets/clinicTwo.jpg'
import image3 from './assets/clinicThree.jpg'
const SliderPage = () => {
  return (
      <div style={{padding: "75px 0px 0px 0px"}}>
          <Carousel>
              <div>
                  <img src={image1} className="clinicImages"/>
              </div>
              <div>
                  <img src={image2}  className="clinicImages"/>
              </div>
              <div>
                  <img src={image3}  className="clinicImages"/>
              </div>
             

          </Carousel>
      </div>
  )
}

export default SliderPage