import React, { useEffect,  useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsBySlug } from "../../../actions/product.action";
/*import Layout from "../../../Components/Layout/Layout";*/
import { PublicUrlGenerator } from "../../../urlConfig";
import {Link} from 'react-router-dom'
import "./style.css";
import Card from "../../../Components/UI/Card/Card";
import Rating from "../../../Components/UI/Rating";
import { MaterialButton } from "../../../Components/MaterialUI/MaterielUI";
import Price from "../../../Components/UI/Price";

export default function ProductStore(props) {

  const product = useSelector (state => state.product);
 /* const [priceRange, setPriceRange] = useState ({

    moreThan5MillionDz:  "More Than 50000",
    under5MillionDz: "under 50000",
    under4MillionDz: "under 40000",
    under3MillionDz: "under 30000",
    under2MillionDz: "under 20000",
    under1MillionDz: "under 10000",
   
  });*/
  const priceRange = product.priceRange


  const dispatch = useDispatch();

  useEffect(() => {
    //console.log(props) // match is in params
    const { match } = props;
    dispatch(getProductsBySlug(match.params.slug));
    //console.log(match.params.slug)
  }, []);



  /*Rating */



  // let ratingsArrayObject = product.productDetails.ratings;





  const ratingFun = (productRatingArray) =>{
    
  let ratingsArray = []
  let ratingSomme  = 0
  

  let ratingSomme5=0, ratingSomme4=0, ratingSomme3 =0, ratingSomme2 =0 , ratingSomme1 = 0

    if (productRatingArray.length > 0)
    {

  
      productRatingArray.map(e => {
     Object.keys(e).map(function(key, index) {
      if (key =="rating") {
        ratingsArray.push(e[key])

        ratingSomme = ratingSomme + e[key]
      }      
    });
  })
  

  let ratingAverage = (ratingSomme / ratingsArray.length)
  return <Rating  value={ratingAverage}/>   /*ratingAverage  */ 

  } 
  else{
    return     <span
    style={{
      display: "inline-block",
      background: "#388e3c",
      color: "#fff",
      fontWeight: "400",
      fontSize: "12px",
      borderRadius: "3px",
      padding: "2px 5px",
    }}
  >
    No rating yet
  </span> /*"No rating yet" <Rating  value={"No rating yet"}/>*/ 

  }


  }



  /*Rating */
  return (
    <>
        {
            Object.keys(product.productsByPrice).map((key, index) => {
                return (
                    <Card
                      headerLeft ={ ` ${props.match.params.slug} Mobiles  ${(priceRange[key] > 50000 ) ? "More Than" : "Under" }   ${priceRange[key]} DA  `}
                      headerRight ={
                        <MaterialButton
                        title={"View All"}
                        bgColor={"#2874f0"}
                        fontSize="12px"
                        style={{
                          width:"100px",
                          boxShadow:'0px 4px 14px rgba(0, 0, 0, .15)'
                          
                        }}
                        >

                        </MaterialButton>
                        
                        }
                      style ={{
                        width : "calc(100% - 30px)",
                        margin : "15px"
                      }}
                    
                    >
                    
                    <div style={{display:"flex"}}>

                        {
                            product.productsByPrice[key].map(product =>
                                <Link to={`/${product.slug}/${product._id}/p`} className="productContainer" style={{display:'block', textDecoration:"none", color:'#111'}}>
                                    <div className="productImgContainer">
                                    <img
                                        src={PublicUrlGenerator ( product.productPictures[0].img)}
                                        alt=""
                                    />
                                    </div>
                                    <div className="productInfo">
                                    <div className="productTitel" style={{margin:"10px 0", fontWeight:'500'}}>{product.name}</div>
                                    <div>
                                      {/*<Rating  value="10"/> */}
                                      {product.ratings ?
                                        ratingFun(product.ratings)
                                      :null
                                        
                                      }
                                      <span
                                        style={{
                                          color: "#777",
                                          fontWeight: "500",
                                          fontSize: "12px",
                                          marginLeft:"2px",
                                        
                                          
                                        }}
                                      >
                                        {`(${product.reviews.length}) reviews`}
                                      </span>
                                    </div>
                                
                                    <Price value={product.price} className="productPrice" /> 
                                    </div>
                                </Link>
                                            
                            )
                        }
                      
                    </div>
                  </Card>    
                );
            })
        }
      
    </>
  );
}
