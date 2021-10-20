import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getAllProducts, getProductsBySlug } from '../../../actions/product.action';
import getParams from '../../../utils/getParams';

import { getAllCategories } from '../../../actions/category.action';



import { PublicUrlGenerator } from "../../../urlConfig";
import {Link} from 'react-router-dom'

import Card from "../../../Components/UI/Card/Card";
import Rating from "../../../Components/UI/Rating";
import { MaterialButton } from "../../../Components/MaterialUI/MaterielUI";
import Price from "../../../Components/UI/Price";


import'./style.css'


/* images to test */

import hwawiBrand from "../../../Img/Mobiles Brands/huawei.svg";
import { getAllUsers } from '../../../actions/user.action';


export default function CategoryListPage(props) {


    const dispatch = useDispatch();

    const category = useSelector(state => state.category);

    const product = useSelector (state => state.product);



    const user = useSelector (state => state.user);



  let slug = "Huawei"
  let slug2 ="Samsung-gdnwGyWAK"


  useEffect(() => {
    dispatch(getAllProducts());
    
  }, []);  

  

  useEffect(() => {
    dispatch(getAllUsers());
    
  }, []);  

  



   console.log("getAllProducts product", product)
   console.log("getAllProducts products", product.products) // ALL PRODUCTS

   console.log("USER USERS USERS " , user); 
   console.log("USER USERS USERS user.users" , user.users); 

   
   
   // console.log("category", category)
  

    let arrayALllCategories = []
    arrayALllCategories.push(category.categories)

    

const parentIdArrayfun = (cat) => { 
    Object.keys(cat).map(function(i) {
  
    Object.keys(cat[i]).map(function(i2) {
  
        if (i2 == "children") {
            if (cat[i][i2].length> 0) { 
              // console.log ("cat[i][i2]", cat[i][i2])
              arrayALllCategories.push(cat[i][i2])
               parentIdArrayfun(cat[i][i2])
              }
        }
      })  
    })

  }
  
  parentIdArrayfun(category.categories)
  


    let arrayALllCategories02 =[]

    arrayALllCategories.map(cat => {
      Object.keys(cat).map(function(i) {
        arrayALllCategories02.push(cat[i])
      })
      })
    
    
    console.log ("arrayALllCategories02", arrayALllCategories02)
    
    
      

    console.log("props 02 __", props);
    const params = getParams(props.location.search)


    //let TitelPage = props.location.pathname.split('/');  // Name of Category
    let TitelPage  // Name of Category
    let IdPage = params.cid                              // ID of Category

    
    
    arrayALllCategories02.map( cat => {
        if (cat._id == IdPage ) {
            TitelPage = cat.name
        }  
    })
    
    let childrenCategoriesArray = []

    
    arrayALllCategories02.map( cat => {
        if (cat.parentId == IdPage ) {
            childrenCategoriesArray.push(cat)
        }  
    })
    
    console.log('childrenCategoriesArray', childrenCategoriesArray)




    const colorsArray = [
        "#0CECDD",
        "#FF67E7",
        "#C400FF",
        "#B980F0",
        "#003638",
        "#055052",
        "#53B8BB",
        "#753422",
        "#B05B3B",
        "#D79771",
        "#B980F0",
        "#FE9898",
        "#FF3F00",
        "#8E2657",
        "#628395",
        "#262A53",
        "#FFA0A0",
        "#0F044C",
        "#50CB93",
        "#71EFA3",
        "#54436B","#A03C78", "#ED8E7C", "#515E63" ,"#7C83FD",
        "#96BAFF", "#D54C4C", "#8D2828", "#F08FC0", "#835151",
        "#DF5E5E", "#ECD662", "#5D8233", "#284E78", "#9B72AA",
        "#78DEC7", "#FF7600", "#FFA900", "#0A1931", "#185ADB",
        "#C84B31", "#0A1D37", "#03256C", "#3B14A7", "#FF449F",
        "#1EAE98", "#A5E1AD", "#4AA96C", "#FF8474", "#CF0000"

    ]

    const FontArray = [
        "'Zen Tokyo Zoo', cursive" ,
        "'Fuggles', cursive" ,
        "'Anton', sans-serif" ,
        "'Tourney', cursive" ,
        "'Pacifico', cursive" ,
        "'Staatliches', cursive" ,
        "'Bangers', cursive" ,
        "'Press Start 2P', cursive" ,
        "'Pacifico', cursive" ,
        "'Monoton', cursive" ,
        "'Rock Salt', cursive" ,
        "'Aclonica', sans-serif" ,
        "'Fredericka the Great', cursive" ,
        "'Akronim', cursive" ,
        "'Arizonia', cursive" ,
        "'Bungee Inline', cursive" ,
        "'Single Day', cursive" ,
        "'Fredericka the Great', cursive" ,
        "'Bungee Shade', cursive" ,
        "'Creepster', cursive" ,
        "'Faster One', cursive" ,
        "'Train One', cursive ",
        "'Trade Winds', cursive" ,
        "'Notable', sans-serif" ,
        "'Monofett', cursive" ,
        "'Libre Barcode 39 Text', cursive"

    ]

    
    var randomColors= colorsArray[Math.floor(Math.random()*colorsArray.length)]

    var randomFontFamilly = FontArray[Math.floor(Math.random()*FontArray.length)]

    let randomFontFamilly02 = FontArray[Math.floor(Math.random()*FontArray.length)]

    console.log("randomElement", randomFontFamilly)
    



    const renderCategories = (cat) =>{
        if( cat.categoryPicture){
        return (
            <div className="category-container" style={{backgroundColor: colorsArray[Math.floor(Math.random()*colorsArray.length)]}}>
                 <div className="category-container-left">
                     <div className="titel" >
                         <h2 style={{fontFamily: randomFontFamilly02, color:"#fff"}}>
                             {cat.name} {TitelPage} </h2> 
                     </div>

                     <button className="">
                     <a href={`/${cat.slug}?cid=${cat._id}&type=${cat.type}`} style={{color:"#fff"}}> 
                     Shop Now
                     </a>

                     
                     </button>
                 </div>

                 <div className="category-container-right">
                   {/* <img src={hwawiBrand} /> */}
                
                   <img src= {cat.categoryPicture} />
                 </div>

            </div>
        )}else{
            return (
                <div className="category-container"  style={{justifyContent:"center", alignItems:"center", display:"flex", flexDirection:'column'}}>
                     <div className="category-container-left" style={{justifyContent:"center", alignItems:"center", display:"flex", flexDirection:'column'}}>
                         <div className="titel">
                             <h2>{cat.name} {TitelPage} </h2> 
                         </div>
    
                         <button className="">
                         <a href={`/${cat.slug}?cid=${cat._id}&type=${cat.type}`}> 
                         Shop Now
                         </a>
    
                         
                         </button>
                     </div>
    
                  
    
                </div>
                )
            
        }
    }


    

  /*Rating */
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
  
  
    const bestriview = ( id) => {
      let res
      let best_Review = []

      product.products.map(i=> {
        if ( id === i._id) {
          console.log("product.products._id", i)
            
            if(i.ratings.length > 0) {
              //console.log("before order", i.ratings)
              i.ratings.sort((a, b) => (a.rating > b.rating) ? 1 : -1)
              //console.log("after order", i.ratings)
              let last_Rating = i.ratings[i.ratings.length - 1]
              console.log("last_Rating", last_Rating)

              if (i.reviews.length > 0) {

                 /* i.reviews.map( rev => {

                    if (rev.userId === last_Rating.userId ) {
                       best_Review.push(rev.review)
                    }

                  }

                )*/

               
                 res =  reviewExiste(i.reviews, i.ratings, i.ratings)
              }
              
              
            }
        }}
      
        )
     // console.log(" best_Review ARRAY", best_Review.length, best_Review)

      return(res)
    }
  
    
    

    const reviewExiste = (reviewsArr, Lrating, NeVal) => {
    console.log("reviewsArr", reviewsArr)
    console.log("Lrating", Lrating)
    Lrating = Lrating[Lrating.length-1]

      let result = []

      let k=0
      
      reviewsArr.map(rev => {
       

        if (rev.userId == Lrating.userId ) {
          //best_Review.push(rev.review)
          k=k+1
         // console.log("rev.review", rev.review);
         // result = rev.review
         result = [rev.review, Lrating.rating, rev.userId ]


         
       }else{
        NeVal.map( j =>{
          if (rev.userId == j.userId ) {
           // result = rev.review
           result = [rev.review, j.rating, rev.userId]

         }

        })

       }


      })

    /*  if(k == 0 ) {
          console.log("k == 0  k == 0 ");
          console.log("NeVal.length", NeVal.length);

        


      if (Lrating.length > 0){
          reviewExiste(reviewsArr, Lrating[Lrating.length -1 ])
        }
        
      }
      */

      return result


    }

    const defaultRevFun = (val) => {

      if(val ==1) {
        return  "I just hate it "
      }
      if(val == 2 ) {
        return "I don't like it ";
        
      }
      if(val == 3 ) {
        return "It Is Awesome ";
       
      }
      if(val == 4 ) {
        return  "I just like it ";
       

      }
      if(val == 5) {
       
        return  "I just love it ";
      }

      
    }

    const reviewUserNameFun = (id) => {
      let res
     user.users.map (e => {
      if (e._id == id)
      {
        console.log("e name", e.firstName)
        res = (`${e.firstName} ${e.lastName}`)
      }
    }
      )
      return res
    }

    const renderRiviewsCard = (prod) => {
        if(prod.reviews.length > 0) {

            return <Link to={`/${prod.slug}/${prod._id}/p`} className="productContainer" style={{display:'flex', justifyContent:"space-between" , textDecoration:"none", color:'#111', backgroundColor:"#fff", width:"100%", marginBottom:'20px', padding:"20px 0px"}}>
              <div style={{display:"flex"}}>
                <div className="productImgContainer" style={{backgroundColor:"#fff", margin:"0px 0px"}}>
                    <img
                        src={PublicUrlGenerator ( prod.productPictures[0].img)}
                        alt=""
                    />
                </div>
                
                <div className="productInfo" style={{textAlign:'left'}}>
                     <div className="productTitel" style={{margin:"10px 0px", fontWeight:'500'}}>{prod.name}</div>
                        <div>
                            {/*<Rating  value="10"/> */}
                            {prod.ratings ?
                                ratingFun(prod.ratings)
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
                                {`(${prod.reviews.length}) reviews & (${prod.ratings.length}) ratings`}
                            </span>
                        </div>
            
                        <Price value={prod.price} className="productPrice" /> 
                </div>
              </div>
                                {/* Most Helpful Review */}
              <div className="">
                <div className="category-review-section">
                <div className="productTitel" style={{margin:"10px 0px", fontWeight:'400', color:'#333'}}>Most Helpful Review </div>
                {}
                
                {prod.ratings ?
                                //ratingFun(prod.ratings)
                             <>
                            <Rating  value={ bestriview(prod._id)[1] }/>
                            <span> {defaultRevFun(bestriview(prod._id)[1])} </span>
                            </>

                            :null
                                
                }
                <div className="productTitel" style={{margin:"10px 0px", fontWeight:'500'}}>{
                
                bestriview(prod._id)[0]
                
                }                
                </div>

                <div className="reviewNameUser" style={{margin:"10px 0px", fontWeight:'500'}}>
                  {
                    reviewUserNameFun (bestriview(prod._id)[2])
                  }
                
                </div>


                </div>


              </div>

              
                                {/* Recent Review*/}
              <div className="">


              </div>
            </Link>
          
            
        }
    }
    
    return (
       <>
           <header className="header-categoriesListPage" style={{ backgroundColor:randomColors}}>
               <h2  style={{fontFamily: randomFontFamilly}}>
                   {TitelPage}
               </h2>
           </header>
           
           <main>
               <div className="categoriesList">
                   <div className="categoriesList-header">

                   </div>
                  

                   <div className="categoriesList-container">
                       {/*renderCategories()*/}
                       {childrenCategoriesArray.map(cat => 
                         renderCategories(cat)
                        )}

                    </div>

               </div>

               <div className="Reviews-Popilare-products" style={{marginTop:"4rem"}}>
                   <header>
                       <h2>
                       Reviews for Popular Cases & Covers
                       </h2>
                   </header>

                  
                    <div className="card-review-container">
                        <div className="product-information">

                        {

                        Object.keys(product.products).map(function(key, index) {
                            return renderRiviewsCard(product.products[key])
                          })
                          
                        }




                        </div>

                    </div>

               </div>
           </main>
      
       </>
       
       
       
        )
}
