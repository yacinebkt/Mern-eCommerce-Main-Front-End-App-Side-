import React, { useState } from "react";
import Header from "../../Components/Header/Header";
import Layout from "../../Components/Layout/Layout";
import MenuHeader from "../../Components/MenuHeader/MenuHeader";
import Carousel from "react-bootstrap/Carousel";

/* Images Test */
import ImgCarousel1 from "../../Img/images-test/carusel1.jpg";
import ImgCarousel2 from "../../Img/images-test/carousel2.jpg";
import ImgCarousel3 from "../../Img/images-test/carousel3.jpg";

import UpperCard1 from "../../Img/images-test/upper-card1.jpg";
import UpperCard2 from "../../Img/images-test/upper-card2.jpg";
import UpperCard3 from "../../Img/images-test/upper-card3.jpg";
import UpperCard4 from "../../Img/images-test/upper-card4.jpg";

import UpperCard5 from "../../Img/images-test/upper-card-mobile.jpeg";

import UpperCard6 from "../../Img/images-test/upper-card-mobile-02.png";
import UpperCard7 from "../../Img/images-test/upper-card-women-02.png";
import UpperCard8 from "../../Img/images-test/upper-card1-santé.png";
import UpperCard9 from "../../Img/images-test/upper-card4-watch.png";






/*
import car1 from "../../Img/carousel home page/ca1.jpg";
import car2 from "../../Img/carousel home page/ca2.jpg";
import car3 from "../../Img/carousel home page/ca3.jpg";
import car4 from "../../Img/carousel home page/ca4.jpg";
*/


import car1 from "../../Img/carousel home page/carvar1.jpg";
import car2 from "../../Img/carousel home page/carvar2.jpg";
import car3 from "../../Img/carousel home page/carvar3.jpg";
import car4 from "../../Img/carousel home page/ca4.jpg";

/* Images Test */

/* Caroyusel multi items component */
import MultiItemsCarousel from '../../Components/Carousels/MultiItemsCarousel';

import { Link } from "react-router-dom";


/*  */

/* */
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

export default function HomePage(props) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  /* Start carousel */

  /* End Carousel*/
  return (
    <Layout>
      {/*Home Page*/}

      <Carousel fade style={{marginTop:"20px"}} >
        <Carousel.Item className="carouselItem"  >
          <img src={car1} alt="First slide" className="carouselItemimg"   />

         
        </Carousel.Item>

        <Carousel.Item className="carouselItem"  >
          <img src={car2} alt="First slide" className="carouselItemimg"   />
         
        </Carousel.Item>

        <Carousel.Item className="carouselItem"  >
          <img src={car3} alt="First slide" className="carouselItemimg"   />
         
        </Carousel.Item>

        <Carousel.Item className="carouselItem"  >
          <img src={car4} alt="First slide" className="carouselItemimg"   />
         
        </Carousel.Item>

{/*
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={car2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={car3} alt="Third slide" />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
    
*/  }
      </Carousel>

      {/* Upper Group Cards */}

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "4rem 0rem",
        }}
      >
        <div class="ex05 ">
          <div class="itemex05 itm1" style={{background:"#00cbb5"  /*f4ebe6 00cbb5 */}}>
            <img src={UpperCard7} className="itm1-img" />
            <div className="upperCard-btn"> Femmes </div>
          </div>

          <div class="nessted">
            <div class="itemex05 itm2">
              <img src={UpperCard9} />
              <div className="upperCard-btn"> montres </div>
            </div>
            <div class="itemex05 itm3">
              <img src={UpperCard8} />
              <div className="upperCard-btn"> Santé </div>
            </div>
          </div>

          

{/*
          <div class="itemex05 itm4" style= {{background : "#eaeaea" /*f4ebe6 00cbb5 }}>
            <img src={UpperCard6} href="http://localhost:3000/Moobiles?cid=60a3b0aad99f152ac88a8a61&type=sub"/> 
            <div className="upperCard-btn"> Téléphones </div>
          </div>
 */}


          <Link to={`/Moobiles?cid=60a3b0aad99f152ac88a8a61&type=sub`}  >
          <div class="itemex05 itm4" style= {{background : "#00cbb5" /*f4ebe6 00cbb5 */}}>
            <img src={UpperCard6} href="http://localhost:3000/Moobiles?cid=60a3b0aad99f152ac88a8a61&type=sub"/> 
            <div className="upperCard-btn"> Téléphones </div>
          </div>
          </Link>
        </div>
      </div>
      {/* Upper Group Cards Ends*/}

        {/* Start RESPONSIVE MULTIPLE ITEMS CAROUSEL
            =================================================== */}
        

      {/* products List Slider*/}

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "30px 0rem",
        }}
      >
        <div className="products-list-container">
          <div className="products-list-header">
            <div className="products-list-titel">
            Les plus demandés 
            </div>

            <div className="products-list-btn">
              <button> Voir plus ! </button>
            </div>
          </div>

          <div className="div"> 
          <MultiItemsCarousel />

          </div>
          
        </div>

      
      </div>

       {/* products List Slider end*/}


       <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "30px 0rem",
        }}
      >
        <div className="products-list-container">
          <div className="products-list-header">
            <div className="products-list-titel">
            Supermarché
            </div>

            <div className="products-list-btn">
              <button> Voir plus ! </button>
            </div>
          </div>

          <div className="div"> 
          <MultiItemsCarousel />

          </div>
          
        </div>

      
      </div>
          

          {/* products List Slider end*/}


       <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "30px 0rem",
        }}
      >
        <div className="products-list-container">
          <div className="products-list-header">
            <div className="products-list-titel">
            Essentiels Enfant & bébé

            </div>

            <div className="products-list-btn">
              <button> Voir plus ! </button>
            </div>
          </div>

          <div className="div"> 
          <MultiItemsCarousel />

          </div>
          
        </div>

      
      </div>

      {/* products List Slider end*/}


      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "30px 0rem",
        }}
      >
        <div className="products-list-container">
          <div className="products-list-header">
            <div className="products-list-titel">
            Sport, Fitness & Camping

            </div>

            <div className="products-list-btn">
              <button> Voir plus ! </button>
            </div>
          </div>

          <div className="div"> 
          <MultiItemsCarousel />

          </div>
          
        </div>

      
      </div>

       {/* products List Slider end*/}


       <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "30px 0rem",
        }}
      >
        <div className="products-list-container">
          <div className="products-list-header">
            <div className="products-list-titel">
            Mobiles

            </div>

            <div className="products-list-btn">
              <button> Voir plus ! </button>
            </div>
          </div>

          <div className="div"> 
          <MultiItemsCarousel />

          </div>
          
        </div>

      
      </div>
          
        
        {/* End RESPONSIVE MULTIPLE ITEMS CAROUSEL 
        ======================================================*/}
    </Layout>
  );
}
