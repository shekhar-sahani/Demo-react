import React from 'react'
import Navbar from './components/Navbar'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
    <Navbar />
    <h2>This is home page </h2>
    <div>
        <h2> Responsive </h2>
        <Slider {...settings}>
          <div>
            <img  src="https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712__340.jpg" alt="" />
          </div>
          <div>
          <img  src="https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712__340.jpg" alt="" />
          </div>
          <div>
          <img  src="https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712__340.jpg" alt="" />
          </div>
          <div>
          <img  src="https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712__340.jpg" alt="" />
          </div>
          <div>
          <img  src="https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712__340.jpg" alt="" />
          </div>
          <div>
          <img  src="https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712__340.jpg" alt="" />
          </div>
          <div>
          <img  src="https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712__340.jpg" alt="" />
          </div>
          <div>
          <img  src="https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712__340.jpg" alt="" />
          </div>
        </Slider>
      </div>
    </>
  )
}
