/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from "react-responsive-carousel";


class Scrolling extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Carousel
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={2500}
          showStatus={false}
        >
          <div >
            <img
            
              src="https://curlytales.com/wp-content/uploads/2020/04/grocery-getty-1.jpg"
              height="500px"
            />
          </div>
          <div>
            <img
              src="https://foodro.in/media/category//category-16160702352006.jpeg"
              height="500px"
            />
          </div>
          <div>
            <img
              src="https://foodro.in/media/category//category-16160591316783.jpeg"
              height="500px"
            />
          </div>
          <div >
            <img
            
              src="https://cfed.0d0.co/product/main/ed8e5546-307f-4e0f-9a55-221fa859c495.jpeg"
              height="500px"
            />
          </div>
        </Carousel>
      </React.Fragment>
    );
  }
}

export default Scrolling;
