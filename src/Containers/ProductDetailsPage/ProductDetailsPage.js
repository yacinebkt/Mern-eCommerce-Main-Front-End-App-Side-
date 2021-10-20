import React, { useEffect, useState } from "react";
import Layout from "../../Components/Layout/Layout";
import { useDispatch, useSelector } from "react-redux";

import { getProductDetailsById, udateProduct} from "../../actions/product.action";

/* speed */
import { IoIosArrowForward, IoIosStar, IoMdCart } from "react-icons/io";

import { BiRupee } from "react-icons/bi";
import { AiFillThunderbolt } from "react-icons/ai";
import { MaterialButton } from "../../Components/MaterialUI/MaterielUI";

import "./style.css";
import { PublicUrlGenerator } from "../../urlConfig";
import { addToCart } from "../../actions/cart.action";
/* speed */

import { IoStar } from "react-icons/io5";

/* Images Test */
import EmptiProfilePic from "../../Img/empty-profile-pic03.png";

/* Paginate */

import ReactPaginate from "react-paginate"
import axios from 'axios'

/* Paginate */

/* Bread */
import { Breed } from '../../Components/MaterialUI/MaterielUI';
/*Bread */

import { getAllCategories } from '../../actions/category.action';
import { Children } from "react";







export default function ProductDetailsPage(props) {


  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  const auth = useSelector((state) => state.auth);
  const category = useSelector(state => state.category);
  
  const [loginModal, setLoginModal] = useState(false);
  const [showMore, setShowMore] = useState(false);
  console.log("category", category)

  /*
  category.categories.map( i=>
   // console.log("ELECTRONICS", i)
   Object.keys(i).map(function(key, index) {
     if (key=="children") {
      Object.keys(i[key]).map(function(key02, index02) {
        console.log("key[key02]", i[key][key02])   // Mobile Pc clothinks

        Object.keys( i[key][key02]).map(function(key03, index03) {
        //console.log("i[key][key02][key03]", i[key][key02][key03])   // Mobile Pc  / clothinks
         if ([key03]=="children") {
          console.log("i[key][key02][key03]", i[key][key02][key03])   // Apple  Poco Hwawi Samsaung / winter Clothing
           Object.keys( i[key][key02][key03] ).map(function(key04, index04) {

            console.log("i[key][key02][key03][key04] ", i[key][key02][key03][key04])   // Single = samsung + hwaiw + winter wear
          
            Object.keys( i[key][key02][key03][key04] ).map(function(key05, index05) {

              if (key05 =="children"){
                console.log("i[key][key02][key03][key04][key05]", i[key][key02][key03][key04][key05])   // Jeans

              }
            })
           })
         }
        })
      })
     }
   }
   )
  )
  */
  
let finalSubCategory = []

const recurCatgories = (cat) => {
 
  cat.map(i=>
    Object.keys(i).map(function(key, index) {

      if ([key] == "children") {
          if (i[key].length == 0) {
            //console.log("i[key]", i)   // 
            finalSubCategory.push(i)
          }
      } 
      
    })
  )

  cat.map(i=>
    Object.keys(i).map(function(key, index) {

      if ([key] == "children") {
          if (i[key].length > 0) {
            recurCatgories(i[key])
          }
        
      } 
      
    })
  )

}
recurCatgories ( category.categories)

console.log(" finalSubCategory ", finalSubCategory)
console.log(" product.productDetails.category ", product.productDetails.category)



let categoryProduct 
let categoryProductParentId

finalSubCategory.map( i =>

 Object.keys(i).map(function(key, index) {

    if (i[key] == product.productDetails.category) {
      categoryProduct = i["name"]

        Object.keys(i).map(function(key2, index2) {

          if (key2 =="parentId") {
            categoryProductParentId = i[key2]
          }
        })
    }
  
})

)

console.log ("categoryProduct Name", categoryProduct)


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
   
console.log ("array ALll Categories", arrayALllCategories)

let arrayALllCategories02 =[]

arrayALllCategories.map(cat => {
  Object.keys(cat).map(function(i) {
    arrayALllCategories02.push(cat[i])
  })
  })


console.log ("arrayALllCategories02", arrayALllCategories02)



let breadIdsArray = []
let x =0
/*
const breadIdsArrayFun = ( catId ) =>{ // Electronics 
  if (x<30) {

  if (catId == "60db1b3f3cdc832e483443cd") {
    console.log(" End =============")
       x = 40
    return;
  }else{

  arrayALllCategories02.map(cat => 
    Object.keys(cat).map(function(i) {


      if (cat[i] == catId) {
        breadIdsArray.push(cat)

        if(cat.parentId){
          x =x+1
          breadIdsArrayFun(cat.parentId)

        }
        
      }  
    })
  )  
}

 } 

}
*/

let ArrayTest =[]
/*
const breadIdsArrayFun02 = ( catId ) =>{ // Electronics 
 
  arrayALllCategories02.map(cat => 
    Object.keys(cat).map(function(i) {

     
          if (cat[i] == catId) { // elemnts == Jeans

            if(cat.parentId ){
              breadIdsArray.push(cat)  // if Jeans (parent Id) --> push Jeans
              console.log("step01", cat)
              let v1 = cat.parentId
                                  
                arrayALllCategories02.map(cat02 => 
                  Object.keys(cat02).map(function(i02) {
                   // console.log("step02", cat02[i02])
                   if (i02 == "_id")
                    {
                      if (cat02[i02] == v1)
                      {
                        breadIdsArray.push(cat02)
                        console.log("step02", cat02)
                        let v2 = cat02.parentId

                                      arrayALllCategories02.map(cat03 => 
                                        Object.keys(cat03).map(function(i03) {
                                        // console.log("step02", cat02[i02])
                                        if (i03 == "_id")
                                          {
                                            if (cat03[i03] == v2)
                                            {
                                              breadIdsArray.push(cat03)
                                              console.log("step03", cat03)
                                              let v3 = cat03.parentId
                      
                                                              arrayALllCategories02.map(cat04 => 
                                                                Object.keys(cat04).map(function(i04) {
                                                                // console.log("step02", cat02[i02])
                                                                if (i04 == "_id")
                                                                  {
                                                                    if (cat04[i04] == v3)
                                                                    {
                                                                      breadIdsArray.push(cat04)
                                                                      console.log("step04", cat04)
                                                                      let v4 = cat04.parentId
                                              
                                              
                                                                      
                                                                    }
                                                                  }
                                              
                                                                })
                                                                
                                                                
                                                              )
            

                                              
                                            }
                                          }
                      
                                        })
                                        
                                        
                                      )


                      }
                    }

                  })
                  
                  
                )
             
            }
          
  
            
          } 
      


    })
  )  


}



*/


const breadIdsArrayFun = ( catId ) =>{

  arrayALllCategories02.map(cat => 
    Object.keys(cat).map(function(i) {
     
      if (i == "_id") {
          if (cat[i] == catId) { // elemnts == Jeans

            if(cat.parentId ){
              breadIdsArray.push(cat)  // if Jeans (parent Id) --> push Jeans

              breadIdsArrayFun(cat.parentId)

            }else{
              breadIdsArray.push(cat)  

            }

          }
        }
    })
  )
}


breadIdsArrayFun(product.productDetails.category);

console.log ("Bread Array", breadIdsArray)

/*
 breed={[ 
                            { name : "Home", href : "/"},
                            { name : "My Acount", href : "/account"},
                            { name : product.productDetails.category, href : "/account/orders"},
                            { name : product.productDetails.name, href : "/"},
                          
                        ]} 
*/
let breedArray =[]
let k

breedArray.push({ name : "Home", href : "/"})

breadIdsArray.reverse().map(cat =>
 {
  k = {
    name: cat["name"],
    href : `/${cat["slug"]}?cid=${cat["_id"]}&type=${cat["type"]}`,
  } 

  breedArray.push(k)
}

)
breedArray.push({ name : product.productDetails.name, href : `/${product.productDetails.slug}/${product.productDetails._id}/p`})

//console.log(' name: cat["name"]', breedArray)
//href : "/account"












  useEffect( () => {
    dispatch(
        getAllCategories()
    )
}, []) 
  
  //DISPATCH

  const [review, setReview] = useState ("");



  /* Paginate */

  const [dataTest, setDataTest] = useState ("");

  const [pageNumber, setPageNumber] = useState(0);


//  reviewsArrayObject  //for pagination


  


  


    
  useEffect(() => { 
    //axios.get(`https://jsonplaceholder.typicode.com/posts/1/comments`)
      axios.get(`https://jsonplaceholder.typicode.com/comments`)

    .then( res => {
      console.log(" res axios data", res)
      setDataTest(res.data.slice( 0, 350))

    })
    .catch ( err =>{
      console.log(" errer axios data", err)
    }
    )
    
  }, []);


  /*

  useEffect( () => {
      dispatch(
          getAllCategories()
      )
  }, [])    
*/


  
  

 /*
  return (
    dataTest.map
    ( (person, index) =>(
     
      <div>
        <h5> {person.id} </h5>
        <h5> {person.name} </h5>
        <h5> {person.email} </h5>
      </div>)
    )
    
    ) */


  





/* Paginate */





/*
console.log("====================================== Test Data")
console.log(" Data")

*/
    //setTestData(res.data.slice(0, 10))






/* Test pagniate */








 /* const onSubmitPostbtn = (e) => {   
    

    const form = new FormData();
    const _id = product.productDetails._id
    const name = product.productDetails.name

    
    form.append('review', review);
    form.append('_id', _id);

    
    console.log( " we are dispatche ", _id, review, name)

    e.preventDefault();

   
  } 

  */

  //DISPATCH




  useEffect(() => {
    const { productId } = props.match.params;
    /* console.log( " here", productId)*/
    const payload = {
      params: {
        productId,
      },
    };
    dispatch(getProductDetailsById(payload));
  }, []);

/*
  
useEffect(() => {
  const { productId } = props.match.params;
  const payload = {
    params: {
      productId,
    },
  };
  dispatch(getProductDetailsById(payload));
 
}, [product.productDetails]);

*/


  if (Object.keys(product.productDetails).length === 0) {
    return null;
  }


  //rating section
  //=================================================================================
  const btnsub = document.querySelector(".btnsubmit");
  const post = document.querySelector(".post");
  const starWidght = document.querySelector(".star-widget");
  const editButton = document.querySelector(".edit");

  const cmnt = document.getElementsByClassName("cmnt");
  

  /*btnsub.onClick = () => {
    starWidght.style.display = "none" ;
  }*/


  let seConnecterButton = document.querySelector("#seConnecterBtn")

  const btnsubmitclick =(e) =>{
    //starWidght.style.display= "none";
   

    if (auth.authenticate ) {

            

    if( document.getElementById("post")) {
      document.getElementById("post").style.display= "block";
    }

    let ratingValue 
         ratingValue =0
    if (document.getElementById("textareaid").value === "" ) {
      if(document.getElementById('rate-1').checked ) {
        document.getElementById("textareaid").value = "I just hate it 😡";
        ratingValue =1;
      }
      if(document.getElementById('rate-2').checked ) {
        document.getElementById("textareaid").value = "I don't like it 😣";
        ratingValue =2;
      }
      if(document.getElementById('rate-3').checked ) {
        document.getElementById("textareaid").value = "It Is Awesome 😁";
        ratingValue =3;
      }
      if(document.getElementById('rate-4').checked ) {
        document.getElementById("textareaid").value = "I just like it 😍";
        ratingValue =4;

      }
      if(document.getElementById('rate-5').checked ) {
        ratingValue =5;
        document.getElementById("textareaid").value = "I just love it ❤️";
      }

    }

    
    if (document.getElementById("textareaid").value ) {
      if(document.getElementById('rate-1').checked ) {
        ratingValue =1;
      }
      if(document.getElementById('rate-2').checked ) {
        ratingValue =2;
      }
      if(document.getElementById('rate-3').checked ) {
        ratingValue =3;
      }
      if(document.getElementById('rate-4').checked ) {
        ratingValue =4;

      }
      if(document.getElementById('rate-5').checked ) {
        ratingValue =5;
      }
    } 



    
    /*dispatch */
    //const form = new FormData();
  
    const reviewValue =document.getElementById("textareaid").value

    let payloadd 

    if ((!(reviewValue == ""))  && (ratingValue > 0)  ) {
      console.log( "review Value && rating value", reviewValue, ratingValue)
      
         payloadd = {       
          _id: product.productDetails._id,
          rating : ratingValue,
          review :  document.getElementById("textareaid").value
        };

    } else{

      if (!(reviewValue == "")) {
        console.log( "review Value", reviewValue)
        
         payloadd = {       
          _id: product.productDetails._id,
          review :  document.getElementById("textareaid").value
        };
      }

      if (ratingValue > 0 ) {
        console.log( "rating value", ratingValue)
        
         payloadd = {       
          _id: product.productDetails._id,
          rating : ratingValue
        };
      }
     
    }


    if (payloadd) {
      console.log( "payload exisste for dispatch", payloadd)
     dispatch(udateProduct(payloadd));
    }
   

    setTimeout(function() { 
      document.getElementById("textareaid").value = "";
      document.getElementById("post").style.display= "none";

      if(document.getElementById('rate-1').checked ) {
        document.getElementById('rate-1').checked = false;
      }
      if(document.getElementById('rate-2').checked ) {
        document.getElementById('rate-2').checked = false;
      }
      if(document.getElementById('rate-3').checked ) {
        document.getElementById('rate-3').checked = false;
      }
      if(document.getElementById('rate-4').checked ) {
        document.getElementById('rate-4').checked = false;
      }
      if(document.getElementById('rate-5').checked ) {
        document.getElementById('rate-5').checked = false;
      }

      window.location.href = '#startiviewsection';
    }, 1500);

  





    e.preventDefault();

    return 

    }
    else {
      document.querySelector("#seConnecterBtn").click()
    }
  }

  let reviewsArrayObject = product.productDetails.reviews;



  let ratingsArrayObject = product.productDetails.ratings;
  let reviewArray = []

  let ratingsArray = []
  let ratingSomme  = 0
  let ratingAverage

  let ratingSomme5=0, ratingSomme4=0, ratingSomme3 =0, ratingSomme2 =0 , ratingSomme1 = 0


  ratingsArrayObject.map(e => {
    Object.keys(e).map(function(key, index) {
      if (key =="rating") {
        ratingsArray.push(e[key])

        ratingSomme = ratingSomme + e[key]
        if ( e[key] == 1) {
          ratingSomme1 = ratingSomme1 + 1
        }
        if ( e[key] == 2) {
          ratingSomme2 = ratingSomme2 + 1
        }
        if ( e[key] == 3) {
          ratingSomme3 = ratingSomme3 + 1
        }
        if ( e[key] == 4) {
          ratingSomme4 = ratingSomme4 + 1
        }
        if ( e[key] == 5) {
          ratingSomme5 = ratingSomme5 + 1
        }
      
      }      
    });
  })

  


  /*Pagination */

  


  const reviewsPerPage = 3
  const pagesVisited = pageNumber * reviewsPerPage
  //const pageCount = Math.ceil(dataTest.length / reviewsPerPage)
  const pageCount = Math.ceil(reviewsArrayObject.length / reviewsPerPage)
  
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  

  
  console.log(" dataTest data ====", dataTest)

/*
const displayReviews = () =>{
  return(
   Object.keys(reviewsArrayObject).slice(pagesVisited ,pagesVisited + reviewsPerPage).map(function(key, index) {
    return (
      <div>
        <h5>{reviewsArrayObject[key]._id} </h5>
        <h6>{reviewsArrayObject[key].review} </h6>
      
      </div>
  )
})
)
}
*/

const displayReviews = () => {
                     
 return (    
      reviewsArrayObject.slice(pagesVisited , pagesVisited + reviewsPerPage).reverse().map(e =>(


    <div className="review-box" style={{border:"1px solid rgba(0, 0, 0, .096)", width:"100%", padding:"20px",  marginTop:"10px"}}>


        {
          
          ratingsArrayObject.map(j => {
          
              if (e.userId == j.userId) {
                return (
                          <div className="review-box-header"style={{ display:"flex", alignItems:"baseline"}}>
                          <div className="rate-container" style={{ display:"flex", alignItems:"baseline", background:"#388e3c", width:"40px", justifyContent:"center", borderRadius:"10%"}}>
                          <span style={{color:"#fff", fontWeight:"500", marginRight:"2px" }} > {j.rating} </span>   <IoStar className="star" style={{fontSize:"12px", marginLeft:"1px", color:"#fff"}}/>
                          </div>
                      
                          <div className="reviewDefault" style={{ marginLeft: "10px", fontWeight:"500"}}>
                            <p> {defaultRating(j.rating)} </p>
                          </div>
                      </div>
                        )
              }      
          
          })

        

        }
      
    


    <div className="review-box-content" style={{ display:"flex", alignItems:"start", }}>
      
          <div className="profilepic">
              <img className="" src={EmptiProfilePic} alt="profile pic" />                       
          </div>

          <div className="userNameRiview"  style={{ marginLeft:'10px', width:"100%"}}> 
            <p  style={{fontWeight:"500", fontSize:"14px", marginBottom:"1px"}}> Bakhti Oussama </p>

            <div className="reveiw">
                <p  style={{ backgroundColor:"#f8f9fa", padding:"8px", border:"1px solid rgba(0, 0, 0, .096)",  marginBottom:"1px",  width:"100%", borderRadius:"04px", boxShadow:"2px 2px 8px rgba(0, 0, 0, .1)"}}> 
                  {e.review}
                </p>
            </div>

            <div className="dateoCommented"> 
              <span style={{ marginLeft:"10px", padding:"0px", color:"#555", fontSize:"14px", fontWeight:"500"}}> {e.createdAt? formatDate2(e.createdAt) :null} </span>
            </div>    
          </div>                        
        </div>

    </div>



    ))
    )
    
}


  /*pagination */
  

  let superValue =( (ratingSomme5 + ratingSomme4) * 100 ) / ratingsArray.length
  let satisfiedValue = ( (ratingSomme3) * 100 ) / ratingsArray.length
  let DissatisfiedValue = ( (ratingSomme1 + ratingSomme2) * 100 ) / ratingsArray.length

  let a=0
var run = setInterval (frames, 40) ;
function frames () {
    a =a +1;
    if (a== superValue+1) {
      clearInterval(run);
    } else{
      let counter = document.querySelector(".counter01")
      if (counter) {
        counter.textContent = a + "%"; 
      }
    }
}


var b = 0 ;
var c = 0 ;




var run02 = setInterval (frames02, 40) ;

function frames02 () {
  b = b +1;
  if (b== satisfiedValue +1) {
    clearInterval(run02);
  } else{
    let counter = document.querySelector(".counter02")
    if (counter) {
      counter.textContent = b + "%"; 
    }
  }
}



var run03 = setInterval (frames03, 40) ;

function frames03 () {
  c =c + 1;
  if (c== DissatisfiedValue +1) {
    clearInterval(run03);
  } else{
    let counter = document.querySelector(".counter03")
    if (counter) {
      counter.textContent = c + "%"; 
    }
  }
}

  
  reviewsArrayObject.map(e => {
    Object.keys(e).map(function(key, index) {
      if (key =="review") {
        reviewArray.push(e[key])
      }      
    });
  })

  console.log("reviewsArrayObject", reviewsArrayObject)

  ratingAverage = (ratingSomme / ratingsArray.length)



  
const formatDate = (date) => {
  if (date) {
    const d = new Date(date);
    return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
  }
  return "";
};

const formatDate2 = (date) => {
  const month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  if (date) {
    const d = new Date(date);
    return `${d.getDate()} ${month[d.getMonth()]}, ${d.getFullYear()}. at , ${addZero(d.getHours())}${d.getHours()}:${addZero(d.getMinutes())}${d.getMinutes()}:${addZero(d.getSeconds())}${d.getSeconds()}  `;
  }
};

const addZero = (value) => {
  if (value<10) {
    return "0"
  }
  else  {
    return ""
  }
}



const defaultRating = (value) => {
  if(value == 1) {
   return "hate it";
  }
  if(value == 2) {
    return "don't like it ";
  
  }
  if(value == 3) {
    return " Awesome ";
  
  }
  if(value == 4) {
    return " like it ";

  }
  if(value == 5) {
    return  " love it ";
  }
}















// FUNNCTION TO HANDLE REVIEWS

/*
const rendercategriesstories = ( ) => {
  category.categories.map( index =>
   
     <Cardtest item={index.categoryPicture} />

    )
}
*/

  
  let handleTestEvent = () => {
    setShowMore(prevState => !prevState)

    console.log("showMore Value", showMore)
    

   /* x = showMore
    console.log("showMore Value", showMore, x)
    */
  }


const handleTest = () => { 
   
  return (
    <div>what's up</div>
  );
  
}

const handleRiview = (x, y) => {
                     
  return (             
  reviewsArrayObject.slice(reviewsArrayObject.length-x , reviewsArrayObject.length-y).reverse().map(e =>
  
  
  <div className="review-box" style={{border:"1px solid rgba(0, 0, 0, .096)", width:"100%", padding:"20px",  marginTop:"10px"}}>


            {
              ratingsArrayObject.map(j => {
              
                  if (e.userId == j.userId) {
                    return (
                              <div className="review-box-header"style={{ display:"flex", alignItems:"baseline"}}>
                              <div className="rate-container" style={{ display:"flex", alignItems:"baseline", background:"#388e3c", width:"40px", justifyContent:"center", borderRadius:"10%"}}>
                              <span style={{color:"#fff", fontWeight:"500", marginRight:"2px" }} > {j.rating} </span>   <IoStar className="star" style={{fontSize:"12px", marginLeft:"1px", color:"#fff"}}/>
                              </div>
                          
                              <div className="reviewDefault" style={{ marginLeft: "10px", fontWeight:"500"}}>
                                <p> {defaultRating(j.rating)} </p>
                              </div>
                          </div>
                            )
                  }      
              
              })

            }

    <div className="review-box-content" style={{ display:"flex", alignItems:"start", }}>
      
      <div className="profilepic">
          <img className="" src={EmptiProfilePic} alt="profile pic" />                       
      </div>

      <div className="userNameRiview"  style={{ marginLeft:'10px', width:"100%"}}> 
        <p  style={{fontWeight:"500", fontSize:"14px", marginBottom:"1px"}}> Bakhti Oussama </p>

        <div className="reveiw">
            <p  style={{ backgroundColor:"#f8f9fa", padding:"8px", border:"1px solid rgba(0, 0, 0, .096)",  marginBottom:"1px",  width:"100%", borderRadius:"04px", boxShadow:"2px 2px 8px rgba(0, 0, 0, .1)"}}> 
              {e.review}
            </p>
        </div>

        <div className="dateoCommented"> 
          <span style={{ marginLeft:"10px", padding:"0px", color:"#555", fontSize:"14px", fontWeight:"500"}}> {e.createdAt? formatDate2(e.createdAt) :null} </span>
        </div>    
      </div>                        
    </div>

    </div>

)

  )
   
      

}











  return (
    <Layout>
      {/*  <div>
                product Details Page

            </div>

             <div>
                { product.productDetails.name }
                
            </div>
           */}

      <div className="productDescriptionContainer">
        <div className="flexRow" style={{background:"#fff",
              borderRadius:".5rem"}}
          >
          <div className="verticalImageStack" style={{ background:"#eee",}}>
            {product.productDetails.productPictures.map((thumb, index) => (
              <div className="thumbnail" style={{background:"#fff", marginBottom:"10px", padding:"5px 0", borderRadius:"5px"}}>
                <img src={PublicUrlGenerator(thumb.img)} alt={thumb.img} />
              </div>
            ))}

            {/*
            <div className="thumbnail active">
              {
                product.productDetails.productPictures.map((thumb, index) => 
                <img src={PublicUrlGenerator(thumb.img)} alt={thumb.img} />)
              }
            </div> 

            */}
          </div>
          <div className="productDescContainer">
            <div className="productDescImgContainer" style={{paddingTop:"8px"}}>
              <img
                src={PublicUrlGenerator(
                  product.productDetails.productPictures[0].img
                )}
                alt={`${product.productDetails.productPictures[0].img}`}
              />
            </div>

            {/* action buttons */}
            <div className="flexRow">
              <MaterialButton
                title="ADD TO CART"
                bgColor="#ff9f00"
                textColor="#ffffff"
                style={{
                  marginRight: "5px",
                }}
                icon={<IoMdCart />}
                onClick={() => {
                  const { _id, name, price } = product.productDetails;
                  const img = product.productDetails.productPictures[0].img;
                  dispatch(addToCart({ _id, name, price, img }));
                  props.history.push(`/cart`);
                }}
              />
              <MaterialButton
                title="BUY NOW"
                bgColor="#fb641b"
                textColor="#ffffff"
                style={{
                  marginLeft: "5px",
                }}
                icon={<AiFillThunderbolt />}
              />
            </div>
          </div>
        </div>
        <div 
          style={{   border:"1px solid rgba(0, 0, 0, .096)",
              padding:"10px 05px",
              marginLeft:"15px",
              width:"100%",
              background:"#fff",
              borderRadius:".5rem"
            
            }}
            >
          {/* home > category > subCategory > productName */}
         {/* <div className="breed">
            <ul>
              <li>
                <a href="#">Home</a>
                <IoIosArrowForward />
              </li>
              <li>
                <a href="#">Mobiles</a>
                <IoIosArrowForward />
              </li>
              <li>
                <a href="#">Samsung</a>
                <IoIosArrowForward />
              </li>
              <li>
                <a href="#">{product.productDetails.name}</a>
              </li>
            </ul>
          </div>*/}
            {
              

            }
          <div style={{maxWidth:"1160px", margin:'5px auto'}}>
                    <Breed 
                        /*breed={[ 
                            { name : "Home", href : "/"},
                            { name : "My Acount", href : "/account"},
                            { name : product.productDetails.category, href : "/account/orders"},
                            { name : product.productDetails.name, href : "/"},
                          
                        ]} 
                        */
                        
                        breed= {breedArray} 
                        breedIcon= {<IoIosArrowForward />}
            />
          </div>
          {/* product description */}
          <div className="productDetails">
            <p className="productTitle">{product.productDetails.name}</p>
            <div>
              <span className="ratingCount">
                {ratingAverage}<IoIosStar />
              </span>
              <span className="ratingNumbersReviews">
              {ratingsArray.length} Ratings & {reviewArray.length} Reviews
              </span>
            </div>
            <div className="extraOffer">Extra 4500 DA off </div>
            <div className="flexRow priceContainer">
              <span className="price" style={{ margin: "0 0 0 5px" }}>
                {" "}
                {product.productDetails.price} DA
              </span>
              <span className="discount" style={{ margin: "0 10px" }}>
                22% off
              </span>
              {/* <span>i</span> */}
            </div>
            <div>
              <p
                style={{
                  color: "#212121",
                  fontSize: "14px",
                  fontWeight: "600",
                }}
              >
                Available Offers
              </p>
              <p style={{ display: "flex" }}>
                <span
                  style={{
                    width: "100px",
                    fontSize: "12px",
                    color: "#878787",
                    fontWeight: "600",
                    marginRight: "20px",
                  }}
                >
                  Description
                </span>
                <span
                  style={{
                    fontSize: "14px",
                    color: "#212121",
                  }}
                >
                  {product.productDetails.description}
                </span>
              </p>
            </div>
          </div>

           {/* Start product Ratings */}


           <div className="productRating"
            style={{
              border:"1px solid rgba(0, 0, 0, .096)",
              padding:"10px",
              marginLeft:"10px"
            }}>
             <div className ="productRating-header"
              style={{
                display: "flex",
                justifyContent:"space-between"
              }}>

             <p className="productTitle"> Ratings & Reviews </p>

             <a href="#reviewsection" style={{width:"100%", display:"contents"}}>

             <MaterialButton
                title="Rate Product"
                bgColor="#fff"
                textColor="#111"
              
                style={{
                  marginLeft: "5px",
                  width:"20%",
                  borderTop:"1px solid rgba(0, 0, 0, .096)"
                }}

                icon={<AiFillThunderbolt />}
                
              />
            </a>
              
             </div>

             <div className ="productRating-info"
             style={{
               marginTop:"15px",
              
              borderTop:"1px solid rgba(0, 0, 0, .096)",
              padding:"10px",
              display:"flex",
              position:"relative"

              }}>

                  <div className="productRating-info-stat-spiner-header" style={{position:"absolute", top:"5px", left:"5px"}}>
                       <p> Product rating </p>
                  </div>

                <div className ="productRating-info-Rate"
                 style={{
                  //border: "1px solid #777",
                  //width: "30%",
                  
                  width: "fit-content",
                  display:"flex",
                  flexDirection:"column",
                  alignItems:"center",
                  justifyContent: "center",
                  padding:"0 3px",
                  }}>
                  

                  <div className ="productRating-info-Rate-top"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "baseline"

                    }}>
                    <p style={{fontSize:"30px", fontWeight:"bold", marginRight:"3px", marginBottom:".3px"}}> {ratingAverage} </p>
                    <IoStar className="star" style={{fontSize:"21px"}}/>
                  </div>
                  <div className ="productRating-info-Rate-bootom"
                  style={{ textAlign:"center" }}>
                  <p style={{fontSize:"14px", letterSpacing:"1px", wordSpacing:"1px", marginBottom:"1.5px"}}> {ratingsArray.length} Ratings &</p>
                    <p style={{fontSize:"14px", letterSpacing:"1px", wordSpacing:"1px"}}> {reviewArray.length} Reviews</p>

                  </div>
                  

                </div>

                <div className ="productRating-info-stat" style={{ marginLeft:"1rem", display:"flex", flexDirection:"column", justifyContent:"center"}}> 
                  <div className="rate-container-info" style={{ display:"flex", alignItems:"baseline", }}>
                    <span>5</span>   <IoStar className="star" style={{fontSize:"12px", marginLeft:"1px"}}/>
                    <div className="bar-conatiner"  
                        style={{ width:"140px" /*border:"0px solid black"*/, height:"08px", margin:"auto 11px", borderRadius:"10px" }}>
                          <div className="progress" style={{background:"green", height:"100%"}}></div>
                    </div>
                    <span style={{ marginLeft:"4px"}}> {ratingSomme5} </span>
                  </div>

                  <div className="rate-container-info" style={{ display:"flex", alignItems:"baseline", }}>
                    <span>4</span>   <IoStar className="star" style={{fontSize:"12px", marginLeft:"1px"}}/>
                    <div className="bar-conatiner"  
                        style={{ width:"140px" /*border:"0px solid black"*/, height:"08px", margin:"auto 11px", borderRadius:"10px" }}>
                          <div className="progress" style={{background:"blue", height:"100%", width:"80%"}}></div>
                    </div>
                    <span style={{ marginLeft:"4px", fontSize:"15px"}}>{ratingSomme4} </span>
                  </div>

                  <div className="rate-container-info" style={{ display:"flex", alignItems:"baseline", }}>
                    <span>3</span>   <IoStar className="star" style={{fontSize:"12px", marginLeft:"1px"}}/>
                    <div className="bar-conatiner"  
                        style={{ width:"140px" /*border:"0px solid black"*/, height:"08px", margin:"auto 11px", borderRadius:"10px" }}>
                          <div className="progress" style={{background:"orange", height:"100%", width:"60%"}}></div>
                    </div>
                    <span style={{ marginLeft:"4px", fontSize:"15px"}}> {ratingSomme3}</span>
                  </div>

                  <div className="rate-container-info" style={{ display:"flex", alignItems:"baseline", }}>
                    <span>2</span>   <IoStar className="star" style={{fontSize:"12px", marginLeft:"1px"}}/>
                    <div className="bar-conatiner"  
                        style={{ width:"140px" /*border:"0px solid black"*/, height:"08px", margin:"auto 11px", borderRadius:"10px" }}>
                          <div className="progress" style={{background:"yellow", height:"100%", width:"40%"}}></div>
                    </div>
                    <span style={{ marginLeft:"4px", fontSize:"15px"}}>{ratingSomme2}</span>
                  </div>


                  <div className="rate-container-info" style={{ display:"flex", alignItems:"baseline", }}>
                    <span>1</span>   <IoStar className="star" style={{fontSize:"12px", marginLeft:"1px"}}/>
                    <div className="bar-conatiner"  
                        style={{ width:"140px" /*border:"0px solid black"*/, height:"08px", margin:"auto 11px", borderRadius:"10px" }}>
                          <div className="progress" style={{background:"red", height:"100%", width:"10%"}}></div>
                    </div>
                    <span style={{ marginLeft:"4px", fontSize:"15px"}}>{ratingSomme1}</span>
                  </div>

                </div>

                <div className ="productRating-info-stat-spiner" style={{ marginLeft:"1rem", display:"flex", flexDirection:"column"}}>
                  <div className="productRating-info-stat-spiner-header" id="startiviewsection">
                    <p> User experience </p>
                  </div>
                  <div  style={{ marginLeft:"1rem", display:"flex", flexDirection:"row"}}>
                    <div className="box">
                      <svg>
                        <circle cx="60" cy="60" r="50"> </circle>
                      </svg>
                      <div className="counter counter01"> 0 </div>
                      <div className="stop"></div>
                      <div className="progressCircle">super</div>
                    </div>

                    <div className="box">
                      <svg>
                        <circle cx="60" cy="60" r="50" className="middle"> </circle>
                      </svg>
                      <div className="counter counter02 "> 0 </div>
                      <div className="stop"></div>
                      <div className="progressCircle">satisfied</div>
                    </div>
                    
                    <div className="box">
                      <svg>
                        <circle cx="60" cy="60" r="50" className="end"> </circle>
                      </svg>
                      <div className="counter counter03"> 0 </div>
                      <div className="stop"></div>
                      <div className="progressCircle" >Dissatisfied</div>
                    </div>
                  </div>
                </div>

             </div>

             <div className ="productRating-info" 
             style={{
               marginTop:"15px",
              
              borderTop:"1px solid rgba(0, 0, 0, .096)",
              padding:"10px",
              display:"flex",
              position:"relative"

              }}>

                  <div className="productRating-info-stat-spiner-header"  style={{position:"absolute", top:"5px", left:"5px"}}>
                       <p> Reviews </p>
                  </div>

                  <div className="reviews-container"  style={{marginTop:"2.5rem",  width:"100%", }}>

                    
                      {/*
                     
                      
                          reviewsArrayObject.slice(reviewsArrayObject.length-3 , reviewsArrayObject.length).reverse().map(e =>(

                        <div className="review-box" style={{border:"1px solid rgba(0, 0, 0, .096)", width:"100%", padding:"20px",  marginTop:"10px"}}>


                            {
                              
                              ratingsArrayObject.map(j => {
                              
                                  if (e.userId == j.userId) {
                                    return (
                                              <div className="review-box-header"style={{ display:"flex", alignItems:"baseline"}}>
                                              <div className="rate-container" style={{ display:"flex", alignItems:"baseline", background:"#388e3c", width:"40px", justifyContent:"center", borderRadius:"10%"}}>
                                              <span style={{color:"#fff", fontWeight:"500", marginRight:"2px" }} > {j.rating} </span>   <IoStar className="star" style={{fontSize:"12px", marginLeft:"1px", color:"#fff"}}/>
                                              </div>
                                          
                                              <div className="reviewDefault" style={{ marginLeft: "10px", fontWeight:"500"}}>
                                                <p> {defaultRating(j.rating)} </p>
                                              </div>
                                          </div>
                                            )
                                  }      
                              
                              })

                            

                            }
                          
                         


                        <div className="review-box-content" style={{ display:"flex", alignItems:"start", }}>
                          
                              <div className="profilepic">
                                  <img className="" src={EmptiProfilePic} alt="profile pic" />                       
                              </div>

                              <div className="userNameRiview"  style={{ marginLeft:'10px', width:"100%"}}> 
                                <p  style={{fontWeight:"500", fontSize:"14px", marginBottom:"1px"}}> Bakhti Oussama </p>

                                <div className="reveiw">
                                    <p  style={{ backgroundColor:"#f8f9fa", padding:"8px", border:"1px solid rgba(0, 0, 0, .096)",  marginBottom:"1px",  width:"100%", borderRadius:"04px", boxShadow:"2px 2px 8px rgba(0, 0, 0, .1)"}}> 
                                      {e.review}
                                    </p>
                                </div>

                                <div className="dateoCommented"> 
                                  <span style={{ marginLeft:"10px", padding:"0px", color:"#555", fontSize:"14px", fontWeight:"500"}}> {e.createdAt? formatDate2(e.createdAt) :null} </span>
                                </div>    
                              </div>                        
                            </div>

                        </div>



                        ))
                         
                         */
                    }

                    {displayReviews()}
                    <div style={{height:"50px", display:"flex", alignItems:"baseline", marginTop:'1.5rem'}}>
                    <ReactPaginate 
                                  previousLabel ={"previous"}
                                  nextLabel ={"Next"}
                                  pageCount ={pageCount}
                                  onPageChange={changePage}
                                  containerClassName={"paginationBtns"}
                                  previousLinkClassName={"previousBtn"}
                                  nextLinkClassName={"nextBtn"}
                                  disabledClassName ={"paginationdisabled"}
                                  activeClassName={"paginationActive"}
                    />
                    </div>
                    
                    <div  className="review-viewall-review" style={{border:"1px solid rgba(0, 0, 0, .096)", width:"100%", padding:"10px 20px",  marginTop:"10px"}}>
                      <a > 
                        View all reviews
                      </a>

                    {/*
                      <a onClick={ handleTestEvent }> 
                          { (showMore)? "Hide" : " View more" }
                    </a>*/}
                    </div>


                    {                          
                      (showMore)?  handleRiview(9, 3) : null
                    }
                              
                              


                   

                    

                  </div>



             </div>

             
             <div className="ratingriview-conntainer" style={{ }}>
                <div className="ratingriview-conntainer-header">
                 <p> Leave a replay </p>
                </div>

                           {/* start product Ratings  form */}  

                           

      <div classname="container01" id="reviewsection" style={{display:"flex", justifyContent:"start", alignItems:"center"}}>
        <div className="container-test">
           
                             <div className="post" id="post" style={{ position:"absolute", right:"5px", top:"4px"}}>
                                <div className="text">
                                     sending ...
                                </div>
                              </div>


            <div className="review-box-content" style={{ display:"flex", alignItems:"start", width:"100%" }}>
                        
                        <div className="profilepic">
                            <img className="" src={EmptiProfilePic} alt="profile pic" />                       
                        </div>

                        <div className="userNameRiview"  style={{ marginLeft:'10px', width:"100%"}}> 
                           <p  style={{fontWeight:"600", fontSize:"16px", marginBottom:"1px"}}> Bakhti Oussama </p>

                           <div className="reveiw" style={{width:"100%", marginTop:'-5px'}}>


                            <div className="star-widget">
                              <div style={{display:"inline-block"}}>                              
                              <input type="radio" name="rate" id="rate-5" />
                              <label for="rate-5">    <IoStar className="star"/></label>

                              <input type="radio" name="rate" id="rate-4" />
                              <label for="rate-4">    <IoStar className="star"/></label>

                              <input type="radio" name="rate" id="rate-3" />
                              <label for="rate-3">    <IoStar className="star"/></label>

                              <input type="radio" name="rate" id="rate-2" />
                              <label for="rate-2">    <IoStar className="star"/></label>

                              <input type="radio" name="rate" id="rate-1" />
                              <label for="rate-1">    <IoStar className="star"/></label>

                              <header className="cmnt" id="comment">
              
                             </header> 

                              </div>

                              
                              
            <form action="#" className="formrating" style={{width:"100%"}}>
               
            <div className="textarea">
              <textarea  cols="30" placeholder="Your Riview ..."  id="textareaid" 
                onChange={(e) =>{setReview(e.target.value)}}
              >

              </textarea>
            </div>
            <div className="rate-btn">
              <button type="submit" className="btnsubmit" onClick={btnsubmitclick} >
                    post
              </button>
            </div>
            
          </form>

        
          </div>
                              
                           </div>

        
                        </div>                        
          </div>


         
         
        </div>
      </div>




                           {/* END product Ratings  form */}



                       
            </div>



         
             </div>


           {/* End product Ratings */}


        </div>
      </div>


    </Layout>
  );
}





/*
setTimeout(stopPoint, 5000);
function stopPoint() {
  let stop = document.querySelector(".stop")
  stop.style.display="block"

}
*/
/*
 <div className="reviewcotainer">
          <div className="rating-section">
              <span>  your rating</span>
              <div className="stars">
              <IoStar className="star"/>
              <IoStar className="star"/>
              <IoStar className="star"/>
              <IoStar className="star"/>
              <IoStar className="star"/>


              </div>
          </div>
       
          <div className="comment-section">
              <span>  Leave a comment </span>
          </div>
        
        </div>
 */
