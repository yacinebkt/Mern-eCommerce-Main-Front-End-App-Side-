import React , {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getAllCategories } from '../../../actions/category.action';



import MultiItemsCarousel from '../../../Components/Carousels/MultiItemsCarousel'; //important



import './style.css'



import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



/* images to test */

import UpperCard1 from "../../../Img/images-test/upper-card1.jpg";
import UpperCard2 from "../../../Img/images-test/upper-card2.jpg";
import UpperCard3 from "../../../Img/images-test/upper-card3.jpg";
import UpperCard4 from "../../../Img/images-test/upper-card4.jpg";

import { IoArrowBackCircle, IoArrowForwardCircle } from "react-icons/io5";
import { PublicUrlGenerator } from '../../../urlConfig';





export default function MenuHeaader2() {

   /* */ 


   const category = useSelector(state => state.category);
   const dispatch = useDispatch();

   useEffect( () => {
       dispatch(
           getAllCategories()
       )
   }, [])    

   console.log("category ====== : ", category)



   const rendergategoriesnv = () => {
    let defcategories =[] ;

   category.categories.map( index =>
                defcategories.push(
                    index.name
                ))
    //return defcategories;
    //return console.log("def Categories", defcategories)
    return defcategories;
    }

    const data2 =  rendergategoriesnv();
    console.log("data 2 ====== : ", data2)
    rendergategoriesnv();


    


    const rendercategriesstories = ( ) => {
      category.categories.map( index =>
       
         <Cardtest item={index.categoryPicture} />

        )
    }

    

/*  */
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

//const img = http://localhost:2000/public/gFNxacYg8-Appliances.png

    //test 
    console.log(" condition function is here *****"  );

    window.onload = function () {
      console.log(" onload 112"  );


      let categoriesIdsArray =[] ;

      category.categories.map( index =>
                  categoriesIdsArray.push(
                       index.name
                   ))
    
       //return defcategories;

      console.log(" onload ONLOAD onload function run ===================="  );
      console.log(" categoriesIdsArray ====", categoriesIdsArray  );
    //  document.getElementById("Electronics").onmouseover = function() {console.log("Electronics hover")};

      categoriesIdsArray.map( i =>
       {
      document.getElementById(i).onmouseover = function() {console.log("i", i)};
      document.getElementById(i).onmouseover = function() {mouseOver(i)};
      document.getElementById(i).onmouseout = function() {mouseOut(i)};

      // for carousel

       }
      )
    
    
    }

    
    function mouseOver(catOver) {
      //document.getElementById("idtest").style.color = "red";
      console.log('mouseover function', catOver )
      let id;
      category.categories.map( index => {
        if (catOver === index.name) {
           id = index._id
        }
      })

      document.getElementById(id).classList.toggle("displayclasse");

   
    }
        
    function mouseOut(catOver) {
      console.log('mouseOut function', catOver )
      let id;

      
      category.categories.map( index => {
        if (catOver === index.name) {
           id = index._id
        }
      })
  
      let k =0;
     


      document.getElementById(id).onmouseover = function () {
       
        console.log (" etap 00, nothing ro do in the ul");

                      
          document.getElementById(id).onmouseout = function () {
            
            console.log (" etap 02n out of the ul"); 
          document.getElementById(id).classList.toggle("displayclasse");              
          }
      
          fun();
      }

        //document.getElementById(id).classList.toggle("displayclasse");              
        const fun = () => {
          k=1
          console.log("k", k)
          return k;
        }
        if (k===0 && k!== 1) {
          /* */
          document.getElementById(id).onmouseover = function () {
       
            console.log (" etap 01, nothing ro do in the ul");
              document.getElementById(id).onmouseout = function () {
                
                console.log (" etap 02 out of the ul"); 
                
                document.getElementById(id).classList.toggle("displayclasse");     
         
              }
              fun();
          }
          /* */
          if (k===0 && k!== 1) {
            console.log("k", k)
            console.log (" etap 03"); 
            document.getElementById(id).classList.toggle("displayclasse");              
   
          }
        }
    
    

      

      /*
      document.getElementById(id).onmouseover = function () { 
        // document.getElementById(id).classList.toggle("displayclasse");
        console.log (" mouse over the ul ===")

        document.getElementById(id).onmouseout = function () { 
          // document.getElementById(id).classList.toggle("displayclasse");
          console.log (" mouse get out the ul ===")
          document.getElementById(id).classList.toggle("displayclasse");
        }
      }

      document.getElementById(id).classList.toggle("displayclasse");
*/
      
  



    }

  
   // functiontest()

    //end test

      const Card2 = ({ img, title }) => {
        return (
          <div style={{ textAlign: "center" }} id={title}>
            <img
              className="multi__image2"
              src={img}
              alt=""
       
              style={{
                width: "100px",
                height: "100px",
                objectFit: "cover",
                marginBottom: "08px",
                borderRadius:".2rem",
              }}
            />
            <p className="categorieName"  id="idtest" style={{ fontSize: "14px", padding: "0rem 0rem", margin:'0rem 0rem',}}> {title} </p>
          </div>
        );
      };


      const Cardtest = ({ item }) => {
        return (
          <div style={{ textAlign: "center" }}>
            
            <p className="categorieName" style={{ fontSize: "14px", padding: "0rem 0rem", margin:'0rem 0rem',}}> {item}</p>
          </div>
        );
      };


      
     const responsiveMenuHeader= [
      

        {
          breakpoint: 1160,
          settings: {
            slidesToShow: 8,
            slidesToScroll: 1,
            swipeToSlide: true,
            infinite: false,
            dots: false,
            
          },
         
        },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 8,
              slidesToScroll: 1,
              swipeToSlide: true,
              infinite: false,
              dots: false,
             
            }
          },
          {
            breakpoint: 790,
            settings: {
              slidesToShow: 7,
              slidesToScroll: 1,
              swipeToSlide: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 2,
              swipeToSlide: true
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 1,
              swipeToSlide: true //for slidesToScroll auto

            }, 
           
          },
  
          {
            breakpoint: 280,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              swipeToSlide: true,
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
          
          UpperCard1,
          UpperCard2,
          UpperCard3,
        ]
  

    return (
        <div className="menuheader02">
          
          <Slider
                prevArrow={<PreviousBtn />}
                nextArrow={<NextBtn />}
                slidesToShow={10}
                initialSlide={0}
                slidesToScroll={1}
                infinite={false}
          
                swipeToSlide={true}
                responsive= {responsiveMenuHeader}
                speed= {100}
                autoplay = {true}
                autoplaySpeed={5000}
                //centerMode={true}
               
               // lazyLoad={true}
                //rtl={true}
                
                style={{
                    marginLeft:'.8rem',
                    marginRight:'.6rem'
                }}

            >
                {/*data.map((item) => (
                <Card2 item={item} />
                ))*/}

                {/*
                    data.map((item) => (
                        <Card2 item={item} />
                    ))
                    
                    */}
               

               {/*
                    data2.map((item) => (
                        <Cardtest item={item} />
                    ))
                    */}

                    

                    {/*
                       category.categories.map( index =>
       
                        <Cardtest item={index.categoryPicture} />
               
                       )
                       */}

                    {
                       category.categories.map( index => 
                        <> 
                        <Card2 img={index.categoryPicture} title = {index.name} />

                       
                        {/*
                          index.children.length>0 ?
                          <ul className="categoriesList">
                          {showFerstcategorie(index.children)}
                          </ul>
                          :null 
                          */
                        }
                      

                        </>
                       
               
                       )
                    }


            </Slider>

            {
                       category.categories.map( index => 
                        <> 

                        <ul id={index._id} className="displayclasse ul01">
                        {
                          index.children.length>0 ?
                          <ul className="categoriesList">
                          {showFerstcategorie(index.children)}
                          </ul>
                          :null 
                        }
                        </ul>

                        </>
                       
               
                       )
                    }
        </div>
    )
}
  
const showCategories = (categories) => {

  let defcategories =[] ;

  for ( let category of categories) {
      defcategories.push(
          <li key={category.name}>
              {
                  category.parentId ?  
                  <a href={`/${category.slug}?cid=${category._id}&type=${category.type}`}> 
                   {category.name} 
                  </a>
                  : <span> {category.name} </span> 
              }
              
              {category.children.length > 0 ? (<ul>    {/* if */}
                  {showCategories(category.children)}
              </ul>)
              
              : null
              }

          </li>
      );
  } 
  return defcategories;
}



  
const showFerstcategorie = (categories) => {

  let defcategories =[] ;

  for ( let category of categories) {
      defcategories.push(
          <li key={category.name}>
              {
                  category.parentId ?  
                  <a href={`/${category.slug}?cid=${category._id}&type=${category.type}`}> 
                   {category.name} 
                  </a>
                  : <span> {category.name} </span> 
              }

          </li>
      );
  } 
  return defcategories;
}

/*
<ul className="categoriesList">
{category.categories.length >0 ? showCategories(category.categories) :null }
</ul>
*/