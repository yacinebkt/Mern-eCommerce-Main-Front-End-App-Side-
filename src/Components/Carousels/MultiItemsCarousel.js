import React from 'react'

/* */

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoArrowBackCircle, IoArrowForwardCircle } from "react-icons/io5";

/*import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";*/
/* */


/* images to test */

import UpperCard1 from "../../Img/images-test/upper-card1.jpg";
import UpperCard2 from "../../Img/images-test/upper-card2.jpg";
import UpperCard3 from "../../Img/images-test/upper-card3.jpg";
import UpperCard4 from "../../Img/images-test/upper-card4.jpg";

/*ENd images to test */
import './style.css'





export default function MultiItemsCarousel(props) {

    

    const PreviousBtn = (props) => {
        console.log(props);
        const { className, onClick } = props;

        return (
          <div className={className} onClick={onClick}>
            <IoArrowBackCircle  className="arrow-icon" id="label-icon"  />
           {/* <div style={{ color: "blue", fontSize: "30px" }}> * </div>*/}
          </div>
        );
      };
      const NextBtn = (props) => {
        const { className, onClick } = props;
        return (
          <div className={className} onClick={onClick} id="label-icon">
            <IoArrowForwardCircle className="arrow-icon"  />
           {/* <div style={{ color: "blue", fontSize: "30px" }}> * </div>*/}

          </div>
        );
      };

      /* Card Item */

      const Card2 = ({ item }) => {
        return (
          <div style={{ textAlign: "center" }}>
            <img
              className="multi__image"
              src={item}
              alt=""
              style={{
                width: "100%",
                height: "190px",
                objectFit: "contain",
                marginBottom: "08px",
                borderRadius:".2rem",
              }}
            />
            <p className="productname" style={{ fontSize: "14px", padding: "0rem 0", margin:'.8rem 0rem',}}> Product Name</p>
            <p className="productprice"style={{ fontSize: "16px", padding: "1px 0", margin:'.5rem 0rem', color: "green" }}>
             70000.00 DA
            </p>
           
          </div>
        );
      };
      /* ENd Caed Item */

     const responsive= [

      {
        breakpoint: 1160,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 790,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            initialSlide: 2
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
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },

        {
          breakpoint: 280,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]


      const data = [
        UpperCard1,
        UpperCard2,
        UpperCard3,

        UpperCard1,
        UpperCard2,
        UpperCard3,
        
        UpperCard1,
        UpperCard2,
        UpperCard3,
           
        UpperCard1,
        UpperCard2,
        UpperCard3,
      ]

    return (
      
            <div className="slidercontainer" >
           {/* <h1>Basic carousel</h1> */}
            <Slider
                prevArrow={<PreviousBtn />}
                nextArrow={<NextBtn />}
                slidesToShow={8}
                infinite={false}
                slidesToScroll={1}
                responsive= {responsive}
                initialSlide ={0}
                speed= {400}

            >
                {/*data.map((item) => (
                <Card2 item={item} />
                ))*/}

                {
                    data.map((item) => (
                        <Card2 item={item} />
                    ))
                }
               

            </Slider>
            </div>
  );
    
}
