import React from 'react'
import kayakImage1 from '/Users/tommyzwick/GIT/JRS-Final-Project/kayak-app/src/images/kayak-adventure-1.jpg'
import kayakImage2 from '/Users/tommyzwick/GIT/JRS-Final-Project/kayak-app/src/images/kayak-adventure-2.jpg'
import kayakImage3 from '/Users/tommyzwick/GIT/JRS-Final-Project/kayak-app/src/images/kayak-adventure-3.jpg'
import kayakImage4 from '/Users/tommyzwick/GIT/JRS-Final-Project/kayak-app/src/images/kayak-adventure-4.jpg'
import kayakImage5 from '/Users/tommyzwick/GIT/JRS-Final-Project/kayak-app/src/images/kayak-adventure-5.jpg'
import kayakImage6 from '/Users/tommyzwick/GIT/JRS-Final-Project/kayak-app/src/images/kayak-adventure-6.jpg'
import '../homePage/HomePage.css'
import { useNavigate } from "react-router-dom";
import Carousel from './Carousel';

export default function HomePage() {
  const navigate = useNavigate();

  const images = [
    kayakImage1,
    kayakImage2,
    kayakImage5,
    kayakImage6
    // kayakImage3,
    // kayakImage4,


  ];

  return (
    <div className="homepage-root">

      <div className="carousel-container">
        <Carousel images={images} />
      </div>
      
      
      <div className="header-container">
        <h3>
          SUMMER STARTS HERE
        </h3>
        <h4>
          KICK OFF YOUR ADVENTURE
        </h4>
        <button className="shop-button" onClick={() => {
          navigate('/products')
        }}>
          SHOP NOW
        </button>
      </div>
    </div>
  )
}
