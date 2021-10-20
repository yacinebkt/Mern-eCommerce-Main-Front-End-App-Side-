import React, { useEffect,  useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import Rating from "../../../Components/UI/Rating";

import { Breed } from '../../../Components/MaterialUI/MaterielUI';
import getParams from '../../../utils/getParams';

import { IoIosArrowForward } from "react-icons/io";
import { IoStar, IoStarHalf, IoStarHalfSharp, IoStarOutline } from "react-icons/io5";




import "./style.css";
import { getCategoryById } from "../../../actions/category.action";
import { getProductsBySlug, getProductsCategoryByArrayIds, getOrderProductByPrice } from "../../../actions/product.action";
import { Link } from "react-router-dom";
import Card from "../../../Components/UI/Card/Card";
import { PublicUrlGenerator } from "../../../urlConfig";
import Price from "../../../Components/UI/Price";



export default function CategoryListPageWithFilter(props) {
    const dispatch = useDispatch();


    const category = useSelector(state => state.category);
    const product = useSelector(state => state.product);


    const [stickySideBar, setStickySideBar] = useState(false)

    const [rangeOneValue, setRangeOneValue] = useState(0);
    const [rangeTowValue, setRangeTowValue] = useState(300000);

    const [categoriesPageFilterIds, setCategoriesPageFilterIds] = useState([]);

    //const [filterCategory, setFliterCategory] = useState(null);
    const [filterCategory, setFliterCategory] = useState(null);

    const [filterCategoryMarqueIds, setFilterCategoryMarqueIds] = useState([]);

    const [sortByPrice, setSortByPrice] = useState(1);

    const [maxPriceValue, setMaxPriceValue] = useState(null);
    const [minPriceValue, setMinPriceValue] = useState(null);

    const [maxRateSideBar, setMaxRateSideBar] = useState(5);
    const [minRateSideBar, setMinRateSideBar] = useState(0);
    const [ramFilter, setRamFilter] = useState("");

    const [ratingCondition ,setRatingCondition] = useState(0)
    const [reviewsCondition ,setReviewsCondition] = useState(0)
    const [createdAt, setCreatedAt] =  useState(0)  // 0 price 1 createdAt

    

    const [maxOrMinOrder ,setMaxOrMinOrder] = useState(1)

    console.log("maxPrice", maxPriceValue)
    console.log("minPrice", minPriceValue)


    
        
    const sliderCategories = React.useRef();     

    console.log("sliderCategories", sliderCategories.current)


    
    /*
    const fixedSideBar = () => {
        //console.log("window.scrollY", window.scrollY)
        if ( window.scrollY > 80) {
            setStickySideBar(true)

        }else{
            //setStickySideBar(false)
        }
    }

    window.addEventListener ("scroll", fixedSideBar )
    */

    //console.log("props 02 __", props);

    
    const params = getParams(props.location.search).cid

  useEffect( () => {
    

    dispatch(
        getCategoryById(params)
    );


    }, []) 

    useEffect(() => {
        //console.log('category.categories.lenthg', category.categories.length);
        //console.log('Step  ==>>', category.categories);
        //console.log('Step ==>>', category.categoryDetails);
        let IdsArray = []



        if (category.categories.length >0 ) {




            if (category.categoryDetails != undefined){
               


                //Fun(category.categories, category.categoryDetails ? category.categoryDetails._id: null);

                const Fun = (categoriesarray ,id) => {
                    categoriesarray.map(cat => {

                        if (cat._id == id ) { 

                            if (cat.children.length > 0 ) {
                                cat.children.map(children => {
                                    IdsArray.push(children)           
                                })
                            } else {
                                //IdsArray.push(id)
                                IdsArray.push(cat)
                            }


                          
                        }
                        else {
                            if ( cat.children.length > 0 ) {
                             Fun(cat.children, id)
                            }
                        }
                    });
                }

                //Fun(category.categories, category.categoryDetails ? category.categoryDetails._id: null);
                Fun(category.categories, filterCategory ? filterCategory : category.categoryDetails._id);
                console.log("IdsArray", IdsArray);

                if (IdsArray.length > 0) {
                    //const arrayIds = ["60b11bc98c9f1706f00f4fd9", "60c3db1091c30404dcf2e5b8", "60a503565bae3022c42df947"]
                   // dispatch(getProductsCategoryByArrayIds(IdsArray));
                   //ratingCondition
                   // dispatch(getOrderProductByPrice(IdsArray, sortByPrice, ratingCondition));
                    
                    if (filterCategoryMarqueIds.length > 0) {
                        dispatch(getOrderProductByPrice(filterCategoryMarqueIds, maxOrMinOrder, ratingCondition, reviewsCondition, createdAt));

                    } else {
                        dispatch(getOrderProductByPrice(IdsArray, maxOrMinOrder, ratingCondition, reviewsCondition, createdAt));

                    }
                  



                                        
                    
                }
            }
        
        } 


    }, [ category.categories.length, category.categoryDetails, filterCategory, sortByPrice, ratingCondition,
         reviewsCondition, maxOrMinOrder, createdAt, filterCategoryMarqueIds]);


    console.log("product", product)
    console.log("ratingCondition click", ratingCondition)

    //console.log("product.maxPrice", product.maxPrice);

    useEffect(() => {
        setMaxPriceValue(product.maxPrice);
        setMinPriceValue(product.minPrice);

       
    }, [product.maxPrice, product.minPrice])
   

    
    



    const setFliterCategoryFun = (idCat) => {
        
        setFliterCategory(idCat)
        setFilterCategoryMarqueIds([])


        arrayCategories.map(e=> {
            //console.log("cate ", e._id)
            if (  document.getElementById(`checkboxMarque${e._id}`)) {
                document.getElementById(`checkboxMarque${e._id}`).checked = false;
            }
        }

        )
        

    


    }

    
    const setFilterCategoryMarqueIdsFun = (idCat) => {
        
        setFilterCategoryMarqueIds([...filterCategoryMarqueIds, idCat])

        if (filterCategoryMarqueIds.includes(idCat)) {
            console.log("element exisste", idCat);
            setFilterCategoryMarqueIds(filterCategoryMarqueIds.filter((e)=>(e !== idCat)));

        }

        
    }

    const resetRatingsSideBarFunction = () =>{
        setMinRateSideBar(0)
        for (let i =1 ; i<5 ; i++) {
            document.getElementById(`checkboxRate0${i}`).checked = false 
 
          }
    }
    
    const checkboxRateClickFun = (id) => {
       /*
        if(document.getElementById(`checkboxRate04`).checked == true) {
            setMinRateSideBar(4)
            if(document.getElementById(`checkboxRate03`).checked == true) {
                setMinRateSideBar(3)
            }
            if(document.getElementById(`checkboxRate02`).checked == true) {
                setMinRateSideBar(2)
            }
            if(document.getElementById(`checkboxRate01`).checked == true) {
                setMinRateSideBar(1)
            }

        } else{
            if(document.getElementById(`checkboxRate03`).checked == true) {
                setMinRateSideBar(3)
                if(document.getElementById(`checkboxRate02`).checked == true) {
                    setMinRateSideBar(2)
                }
                if(document.getElementById(`checkboxRate01`).checked == true) {
                    setMinRateSideBar(1)
                }
            }
            else {
                if(document.getElementById(`checkboxRate02`).checked == true) {
                    setMinRateSideBar(2)
                    if(document.getElementById(`checkboxRate01`).checked == true) {
                        setMinRateSideBar(1)
                    }
                }
                else{
                    if(document.getElementById(`checkboxRate01`).checked == true) {
                        setMinRateSideBar(1)
                    } else {
                        setMinRateSideBar(0)
                    }
                }
            } 
           
        }
        */

        let j=0;
        for (let i=4 ;i>0;i--)
        {
        if(document.getElementById(`checkboxRate0`+i.toString()).checked==true)
        {
         setMinRateSideBar(i);
        j++;
        }}
         if (j==0)
         setMinRateSideBar(0);
        
        

       
        /*
         for (var i=4 ;i>0;i--)
        {
        if(document.getElementById(`checkboxRate0`+i.toString()).checked==true)
         {setMinRateSideBar(i)}
        
         
        }
      */
        
    }


    const checkboxRameClickFun = (id) => {
        let j=0;
        for (let i=6 ;i>0;i--)
        {
        if(document.getElementById(`checkboxRame0`+i.toString()).checked==true)
        {
         setRamFilter(`${i}`);
        j++;
        }}
         if (j==0)
         setRamFilter("");
    }

   // console.log("FliterCategory ==", filterCategory);
   

    const PriceRangeFilterFun = () =>{
        console.log("rangeOneValue", rangeOneValue);
        console.log("rangeTowValue", rangeTowValue);
    }
    
    
    
    

    /*const slideOne = () => {
        if (parseInt(sliderTow.value) -
            parseInt(sliderOne.value) <= minGap ) {
                sliderOne.value = parseInt(sliderTow.value) - minGap
            }
        
    }

    
    const slideTwo = () => {
        if (parseInt(sliderTow.value) -
            parseInt(sliderOne.value) <= minGap ) {
                sliderTow.value = parseInt(sliderOne.value) + minGap
            }
        
    }
    */

    const updateSlider1Value = (e) => {

        setMinPriceValue(e.target.value)

        if ( minPriceValue - maxPriceValue == 0  ) {

        }
        
    }

    
    const updateSlider2Value = (e) => {
       
        setMaxPriceValue(e.target.value)
    }



    
let arrayCategories  = []


const catFun = (categoriesarray ,id) => {

    categoriesarray.map(cat => {

        if (cat._id == id ) { 
        cat.children.map(children => {
            arrayCategories.push(children)
            //setCategoriesPageFilterIds(children._id)
            //setCategoriesPageFilterIds([...categoriesPageFilterIds, children._id]);


        })
       }
       else {
           if ( cat.children.length > 0 ) {
            catFun(cat.children, id)
           }
       }
      
       
    })
}

catFun(category.categories, category.categoryDetails ? category.categoryDetails._id: null);

//console.log("arrayCategories", arrayCategories);
console.log("setCategoriesPageFilterIds", categoriesPageFilterIds);


let TestArrayMobiles = [{name:"LG"}, {name:"Lenovo"}, {name:"SONY"}, {name:"MEIZU"}, {name:"Nokia"}, {name:"Infinix"}, {name:"Xiaomi"}, {name:"Xiaomi"} ]


const renderCategories = (cat) =>{
   
    return (
      
       
        <div className="category-circle-box">
                <a /*href={`/${cat.slug}?cid=${cat._id}&type=${cat.type}`} style={{color:"#111", fontSize:"1rem", fontWeight:"bold"}}*/ 
                    //onClick={() => setFliterCategoryFun(cat._id)
                        onClick={() => setFliterCategoryFun(cat._id)
                    }
                    
                >
                     {cat.name}
                     {/* <img src= {cat.categoryPicture} /> */}
                </a>

             </div>

        )
      
        
    
}




const renderCategoriesSideBar = (cat) => {
    return (
      
       
            <div style={{display:'flex', alignItems:"center" , marginBottom:'12px'}}
              /*  onClick={() => setFliterCategoryFun(cat._id)}*/
             >
            <input
                type="checkbox"
                  onClick={() => setFilterCategoryMarqueIdsFun(cat)}
                  id = {`checkboxMarque${cat._id}`}
                  

                style ={{marginRight:'6px', width:"21px", height:'21px'}}
            />
                <p style={{ fontSize:".9rem", fontWeight:"500" , margin:"0", padding:"0", marginTop:"auto"}}>  {cat.name} </p>
                <div style={{width:"07%", marginLeft:"10px", marginTop:""}}> <img src= {cat.categoryPicture} style={{width:"100%"}} /></div>
            </div>
            
        )

}



    
        

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

    //console.log("randomElement", randomFontFamilly)
    
    
/*
const slider = document.querySelector('.category-circle-container');
*/
let isDown = false;
let startX;
let scrollLeft;




  const onMouseDownfun = (e) => {
    isDown = true;
    sliderCategories.current.classList.add('active');
    startX = e.pageX - sliderCategories.current.offsetLeft;
    scrollLeft = sliderCategories.current.scrollLeft;
  }


  

  const onMouseLeavefun = (e) => {
    isDown = false;
    sliderCategories.current.classList.remove('active');
  }


  
  const onMouseUpfun = (e) => {
    isDown = false;
    sliderCategories.current.classList.remove('active')
  }


  
  
  const onMouseMovefun = (e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - sliderCategories.current.offsetLeft;
    const walk = (x - startX) * 1; //scroll-fast
    sliderCategories.current.scrollLeft = scrollLeft - walk;
    console.log(walk);
  }

/*

const sliderCategories = React.useRef();     

console.log("sliderCategories", sliderCategories)


sliderCategories.current.addEventListener('mousedown', (e) => {
  isDown = true;
  sliderCategories.classList.add('active');
  startX = e.pageX - sliderCategories.offsetLeft;
  scrollLeft = sliderCategories.scrollLeft;
});

sliderCategories.addEventListener('mouseleave', () => {
  isDown = false;
  sliderCategories.classList.remove('active');
});

sliderCategories.addEventListener('mouseup', () => {
  isDown = false;
  sliderCategories.classList.remove('active');
});

sliderCategories.addEventListener('mousemove', (e) => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - sliderCategories.offsetLeft;
  const walk = (x - startX) * 3; //scroll-fast
  sliderCategories.scrollLeft = scrollLeft - walk;
  console.log(walk);
});
*/




const ratingFun = (productRatingArray) =>{
    
    let ratingsArray = []
    let ratingSomme  = 0
    
  
    let ratingSomme5=0, ratingSomme4=0, ratingSomme3 =0, ratingSomme2 =0 , ratingSomme1 = 0
    if(productRatingArray== 0){
        const itemsOutline = []
        { for (let i = 0; i <5; i++) {
            itemsOutline.push( <IoStarOutline className="star" style={{fontSize:"19px", marginLeft:"1px", color:"#fb0"}}/> )  

            }
        }
        itemsOutline.push( <> <br /> <span
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
          </span> </>)
      return  itemsOutline   /*"No rating yet" <Rating  value={"No rating yet"}/>*/ 
  
    }
      else
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
    //return <Rating  value={ratingAverage}/>   /*ratingAverage  */ 
    const items = []
        //3.5
        //IoStarHalf IoStarHalfSharp IoStarOutline
    
    { for (let i = 0; i <5; i++) {
        if (i < ratingAverage) {
            if (  ratingAverage < i+1 ) {

                items.push(<IoStarHalf className="star" style={{fontSize:"19px", marginLeft:"1px", color:"#fb0"}}/>)  
            }else{
                items.push(<IoStar className="star" style={{fontSize:"19px", marginLeft:"1px", color:"#fb0"}}/>)  

            }

        }

       
      
        else {
            items.push(<IoStarOutline className="star" style={{fontSize:"19px", marginLeft:"1px", color:"#fb0"}}/>)  

        }
      
           

        
    
      }}

      //items.push(<span> { ratingAverage.toFixed(1)} </span>)
      items.push(<> <br/>  <Rating  value={ratingAverage.toFixed(1)}/> </> )
  
    
    return items
   
    
  
    } 
   
  
  
    }



    const reatingValue = (productRatingArray) => {
        let ratingsArray = []
        let ratingSomme  = 0


        if(productRatingArray== 0){
          
          return  0   /*"No rating yet" <Rating  value={"No rating yet"}/>*/ 
      
        }
          else
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
        
        
        return ratingAverage
       
        
        
        }
    }
  
  



    
    return (
        <>
           
           <div className="padding-top-fixed">
                    
                </div>


             <div className="category-list-page-main">
               
                {/*<div className={stickySideBar ? "sticky-sidebar fixed-side": "sticky-sidebar"}>*/}
                {/*<div className={stickySideBar ? "sticky-sidebar scrolly-side": "sticky-sidebar"}>*/}
                <div className="sticky-sidebar scrolly-side">
                    <div className="filter-Container" style={{ borderBottom: "1px solid rgba(0, 0, 0, .096)", marginBottom:"20px", paddingBottom:"10px"}}>
                        <h2 style={{fontSize:"1rem"}}> Filters </h2>
                        {(minPriceValue > 0 || maxPriceValue < product.maxPrice) ? 
                        
                        <div style={{display:"flex", justifyContent:"", alignItems:"center", marginBottom:"12px"}}>
                              <div style={{marginRight:"10px", fontSize:"14px", fontWeight:"500", borderBottom:"1px solid #aaa"}}> par prix </div>
                         <div 
                         style={{background:"#e0e0e0", display:"inline-block", padding:"10px 10px",
                          borderRadius:"4px", color:"#111", fontWeight:"700", fontSize:"13px"}}>
                         {` ${minPriceValue} Da - ${maxPriceValue} Da `}
                         </div>

                         <div onClick={() => {setMinPriceValue(0); setMaxPriceValue(product.maxPrice) }} style={{fontSize:"18px", fontWeight:"#500", color:"#aaa", marginLeft:"10px"}}>
                             X
                         </div>
                         </ div>
                         
                         
                        : null }

                        {(minRateSideBar > 0 ) ? 
                        
                        <div style={{display:"flex", justifyContent:"", alignItems:"center"}}>
                         <div style={{marginRight:"10px", fontSize:"14px", fontWeight:"500", borderBottom:"1px solid #aaa"}}> par notes </div>

                         <div 
                         style={{background:"#e0e0e0", display:"inline-block", padding:"10px 10px",
                          borderRadius:"4px", color:"#111", fontWeight:"700", fontSize:"13px"}}>
                         {` ${minRateSideBar} et plus `}
                         </div>

                         <div onClick={() => {resetRatingsSideBarFunction() }} style={{fontSize:"18px", fontWeight:"#500", color:"#aaa", marginLeft:"10px"}}>
                             X
                         </div>
                         </ div>
                         
                         
                        : null }

                     
                       
                        


                    </div>
                    
                  <h2 style={{fontSize:"1rem"}}> CATÉGORIE </h2>
                  <a style={{marginLeft:'0px', fontSize:".9rem"}}> {category.categoryDetails ? category.categoryDetails.name: null} </a>

                    {/* Start Item in side bar */}
                  <div className="price-filter-container">
                      <div className="price-filter-header" style={{display:"flex", justifyContent:"space-between"}}>
                          <h2 style={{fontSize:"1rem"}}> Prix (DA)</h2>
                          <button onClick={() => {setMinPriceValue(0); setMaxPriceValue(product.maxPrice) }} > reset </button>

                      </div>

                    <div class="slider">
                        <div class="slider-box">
                           
                            <div className="slider-track"></div>
                            <input type="range" min="0" max={product.maxPrice} value={minPriceValue} id="slider-1" onChange={updateSlider1Value} /*onInput={slideOne}*/ />
                            <input type="range" min="0" max={product.maxPrice}  value={maxPriceValue} id="slider-2"  onChange={updateSlider2Value} /*onInput={slideTwo}*/ />
                     
                        </div>

                        <div className="slider-values">
                            
                        <div className="values">
                               
                                <input type="text" value={`${Math.min(minPriceValue, maxPriceValue)}  DA`}  />

                                <input type="text" value={`${Math.max(minPriceValue, maxPriceValue)}  DA`}/>

                               
                            </div>
                        </div>
                    </div>

                  </div>
                  {/* End Item in side bar */}
                    <div className="marque-filter-container">

                        <div className="marque-filter-header" style={{display:"flex", justifyContent:"space-between"}}>
                            <h2 style={{fontSize:"1rem"}}> ÉVALUATION CLIENTS </h2>
                        </div>

                        <div className="marque-filter-content" style={{}}>
                      
                            <div className="" style={{display:"flex", flexDirection:"column", marginLeft:"10px"}}>
                                <div style={{display:'flex', alignItems:"center" , marginBottom:'8px'}}>
                                <input
                                    type="checkbox"
                                   /* onClick={() => setAddressType("home")}*/
                                   id = {`checkboxRate04`}
                                   style ={{marginRight:'6px', width:"21px", height:'21px'}}
                                   onClick={() => checkboxRateClickFun("checkboxRate04")}


                                />
                               <Rating  value={"4 et plus"} style={{fontSize:"22px"}} /> 
                                </div>

                                <div style={{display:'flex', alignItems:"center", marginBottom:'8px'}}>
                                <input
                                    type="checkbox"
                                   /* onClick={() => setAddressType("home")}*/
                                   id = {`checkboxRate03`}
                                   onClick={() => checkboxRateClickFun("checkboxRate03")}

                                    style ={{marginRight:'6px', width:"21px", height:'21px'}}
                                />
                               <Rating  value={"3 et plus"}/> 
                                </div>

                                <div style={{display:'flex', alignItems:"center", marginBottom:'8px'}}>
                                <input
                                    type="checkbox"
                                   /* onClick={() => setAddressType("home")}*/
                                   id = {`checkboxRate02`}
                                   onClick={() => checkboxRateClickFun("checkboxRate02")}

                                    style ={{marginRight:'6px', width:"21px", height:'21px'}}
                                />
                               <Rating  value={"2 et plus"}/> 
                                </div>

                                <div style={{display:'flex', alignItems:"center", marginBottom:'8px'}}>
                                <input
                                    type="checkbox"
                                   /* onClick={() => setAddressType("home")}*/
                                   id = {`checkboxRate01`}
                                   onClick={() => checkboxRateClickFun("checkboxRate01")}

                                    style ={{marginRight:'6px', width:"21px", height:'21px'}}
                                />
                               <Rating  value={"1 et plus"}/> 
                                </div>

                                
                                

                            </div>
                           
                        </div>

                    </div>

                    {/* End Item in side bar */}
                    <div className="marque-filter-container filter-container-layout">

                    <div className="marque-filter-header" style={{display:"flex", justifyContent:"space-between"}}>
                        <h2 style={{fontSize:"1rem"}}> Marque </h2>
                    </div>

                    <div className="marque-filter-content" style={{display:"flex", justifyContent:"space-between"}}>

                            <div className="" style={{display:"flex", flexDirection:"column", marginLeft:"10px"}}>
                                

                                { arrayCategories.map(cat => 
                                    renderCategoriesSideBar(cat)
                                    )
                                }

                               {/* <div style={{display:'flex', alignItems:"flexStart", marginBottom:'8px'}}>
                                <input
                                    type="checkbox"
                                    name="addressType"
                                    value="home"
                                    style ={{marginRight:'6px', width:"21px", height:'21px'}}
                                />
                                <p style={{ fontSize:".9rem", fontWeight:"500", margin:"0", padding:"0"}}> Apple </p>
                                </div>

                               
                                */}
                            </div>

                        
                    </div>

                    </div>
                                    
                    {/* End Item in side bar */}

                    {
                         category.categoryDetails ?
                         category.categoryDetails.name =='Moobiles' ?
                         <div className="marque-filter-container filter-container-layout">

                         <div className="marque-filter-header" style={{display:"flex", justifyContent:"space-between"}}>
                             <h2 style={{fontSize:"1rem"}}> Ram </h2>
                         </div>
 
                         <div className="" style={{display:"flex", flexDirection:"column", marginLeft:"10px"}}>
                                 <div style={{display:'flex', alignItems:"flexStart" , marginBottom:'8px'}}>
                                 <input
                                     type="checkbox"
                                     id = {`checkboxRame06`}
                                     onClick={() => checkboxRameClickFun("checkboxRame06")}
 
                                     style ={{marginRight:'6px', width:"21px", height:'21px'}}
                                 />
                                <p style={{ fontSize:".9rem", fontWeight:"500" , margin:"0", padding:"0"}}> 6 GB et plus </p>
                                 </div>
 
 
                                 <div style={{display:'flex', alignItems:"flexStart" , marginBottom:'8px'}}>
                                 <input
                                     type="checkbox"
                                     id = {`checkboxRame05`}
                                     onClick={() => checkboxRameClickFun("checkboxRame05")}
 
                                     style ={{marginRight:'6px', width:"21px", height:'21px'}}
                                 />
                                <p style={{ fontSize:".9rem", fontWeight:"500" , margin:"0", padding:"0"}}> 5 GB et plus </p>
                                 </div>
 
                                 <div style={{display:'flex', alignItems:"flexStart", marginBottom:'8px'}}>
                                 <input
                                     type="checkbox"
                                    id = {`checkboxRame04`}
                                    onClick={() => checkboxRameClickFun("checkboxRame04")}
                                     style ={{marginRight:'6px', width:"21px", height:'21px'}}
                                 />
                                 <p style={{ fontSize:".9rem", fontWeight:"500", margin:"0", padding:"0"}}> 4 GB  </p>
                                 </div>
 
                                 <div style={{display:'flex', alignItems:"flexStart", marginBottom:'8px'}}>
                                 <input
                                     type="checkbox"
                                     id = {`checkboxRame03`}
                                     onClick={() => checkboxRameClickFun("checkboxRame03")}
 
                                     style ={{marginRight:'6px', width:"21px", height:'21px'}}
                                 />
                                 <p style={{ fontSize:".9rem", fontWeight:"500", margin:"0", padding:"0"}}> 3 GB  </p>
                                 </div>
 
                                 <div style={{display:'flex', alignItems:"flexStart", marginBottom:'8px'}}>
                                 <input
                                     type="checkbox"
                                     id = {`checkboxRame02`}
                                     onClick={() => checkboxRameClickFun("checkboxRame02")}
 
                                     style ={{marginRight:'6px', width:"21px", height:'21px'}}
                                 />
                                 <p style={{ fontSize:".9rem", fontWeight:"500", margin:"0", padding:"0"}}> 2 GB </p>
                                 </div>
                                 
                                 <div style={{display:'flex', alignItems:"flexStart", marginBottom:'8px'}}>
                                 <input
                                     type="checkbox"
                                     id = {`checkboxRame01`}
                                     onClick={() => checkboxRameClickFun("checkboxRame01")}
 
                                     style ={{marginRight:'6px', width:"21px", height:'21px'}}
                                 />
                                 <p style={{ fontSize:".9rem", fontWeight:"500", margin:"0", padding:"0"}}> 1 GB </p>
                                 </div>
 
                                 <div style={{display:'flex', alignItems:"flexStart", marginBottom:'8px'}}>
                                 <input
                                     type="checkbox"
                                     id = {`checkboxRame00`}
                                     onClick={() => checkboxRameClickFun("checkboxRame00")}
 
                                     style ={{marginRight:'6px', width:"21px", height:'21px'}}
                                 />
                                 <p style={{ fontSize:".9rem", fontWeight:"500", margin:"0", padding:"0"}}> 512 MB - 1GB </p>
                                 </div>
                                 
                             </div>
 
                     </div>
                     
                    
                    
                        :null
                        :null
                        
                    }
                   
                          
                    {/* End Item in side bar */}
                    {/**
                    <div className="marque-filter-container filter-container-layout">

                        <div className="marque-filter-header" style={{display:"flex", justifyContent:"space-between"}}>
                            <h2 style={{fontSize:"1rem"}}> TAILLE DE L'ÉCRAN (pouce) </h2>
                        </div>

                        <div className="" style={{display:"flex", flexDirection:"column", marginLeft:"10px"}}>
                                <div style={{display:'flex', alignItems:"flexStart" , marginBottom:'8px'}}>
                                <input
                                    type="checkbox"
                                    name="addressType"
                                    value="home"
                                    style ={{marginRight:'6px', width:"21px", height:'21px'}}
                                />
                               <p style={{ fontSize:".9rem", fontWeight:"500" , margin:"0", padding:"0"}}>  4,5 - 5 </p>
                                </div>

                                <div style={{display:'flex', alignItems:"flexStart", marginBottom:'8px'}}>
                                <input
                                    type="checkbox"
                                    name="addressType"
                                    value="home"
                                    style ={{marginRight:'6px', width:"21px", height:'21px'}}
                                />
                                <p style={{ fontSize:".9rem", fontWeight:"500", margin:"0", padding:"0"}}> 5,5 - 6  </p>
                                </div>

                                <div style={{display:'flex', alignItems:"flexStart", marginBottom:'8px'}}>
                                <input
                                    type="checkbox"
                                    name="addressType"
                                    value="home"
                                    style ={{marginRight:'6px', width:"21px", height:'21px'}}
                                />
                                <p style={{ fontSize:".9rem", fontWeight:"500", margin:"0", padding:"0"}}> 6 - 6,2  </p>
                                </div>

                                <div style={{display:'flex', alignItems:"flexStart", marginBottom:'8px'}}>
                                <input
                                    type="checkbox"
                                    name="addressType"
                                    value="home"
                                    style ={{marginRight:'6px', width:"21px", height:'21px'}}
                                />
                                <p style={{ fontSize:".9rem", fontWeight:"500", margin:"0", padding:"0"}}> 6,2 - 6,4 </p>
                                </div>
                                
                                <div style={{display:'flex', alignItems:"flexStart", marginBottom:'8px'}}>
                                <input
                                    type="checkbox"
                                    name="addressType"
                                    value="home"
                                    style ={{marginRight:'6px', width:"21px", height:'21px'}}
                                />
                                <p style={{ fontSize:".9rem", fontWeight:"500", margin:"0", padding:"0"}}> plus de 6,4 </p>
                                </div>

                            </div>

                    </div>
                     */}

                   

                    

                    
                  
                </div>



                {/* Content Main  */}

                <div className="content" id='bkkt'>
                    <div style={{maxWidth:"1160px", margin:'5px 0px'}}>
                        <Breed 
                            breed={[ 
                                { name : "Home", href : "/"},
                                { name : "Electronics ", href : "/"},
                                { name : "Moobiles", href : "/"},
                            
                            ]} 

                          /*  breed= {breedArray} */
                            breedIcon= {<IoIosArrowForward />}
                        />
                    </div>
                    <header className="header-categoriesListPage" style={{/* backgroundColor:randomColors*/backgroundColor:"#141E61" }}>
                        <h2 /* style={{fontFamily: randomFontFamilly}}*/>
                                        {category.categoryDetails ? category.categoryDetails.name : null}
                        </h2>
                    </header>

                    <main>
                        <div className="">
                            <div className="categoriesList-header">

                            </div>
                            

                            <div className="category-circle-container" ref={sliderCategories} onMouseDown={onMouseDownfun} onMouseLeave={onMouseLeavefun}
                                                                                              onMouseUp={onMouseUpfun} onMouseMove={onMouseMovefun}  >

                                {arrayCategories.map(cat => 
                                    renderCategories(cat)
                                    )
                                }
                                {/*TestArrayMobiles.map(cat => 
                                    renderCategories(cat)
                                    )
                                    */
                                }
                                 {/*arrayCategories.map(cat => 
                                    renderCategories(cat)
                                    )
                                    */
                                }
                               
                                

                                </div>

                        </div>






                         {/** */}

                         <div className="sort-by"  >
                             <div className="sort-by-titel" >
                                 Sort by
                             </div>

                             <div className="sort-by-item"  onClick={() =>{ setMaxOrMinOrder(1); setRatingCondition(0); setReviewsCondition(0); setCreatedAt(0) }}>
                                  Price - Low to High
                             </div>
                             <div className="sort-by-item"  onClick={() => {setMaxOrMinOrder(-1); setRatingCondition(0); setReviewsCondition(0) ; setCreatedAt(0) }}>
                                  Price - High to Low
                             </div>
                             <div className="sort-by-item"  onClick={() => {setRatingCondition(1); setMaxOrMinOrder((maxOrMinOrder) * -1) ; setCreatedAt(0); setReviewsCondition(0) }}   > {/* onClick={() => setRatingCondition(1)} */}
                                 Top rated
                             </div>

                             <div className="sort-by-item" onClick={() => {setReviewsCondition(1); setMaxOrMinOrder((maxOrMinOrder) * -1) ; setCreatedAt(0) ; setRatingCondition(0); }} >
                                  Popularity (most comments)
                             </div>

                             <div className="sort-by-item" onClick={() => {setCreatedAt(1); setMaxOrMinOrder((maxOrMinOrder) * -1) ; setReviewsCondition(0) ; setRatingCondition(0); }} >
                                  newest
                             </div>

                          
 
                             

                             
                                
                         </div>

                         <div className="products-container" >
                            

                         {
                            product.products.map( productItem => {
                                if (productItem.price >= minPriceValue  ) {
                                    if (productItem.price <= maxPriceValue   ){
                                        let ratingItem
                                                if (productItem.ratings){
                                                 ratingItem= reatingValue(productItem.ratings)
                                                }
                                                //console.log("let ratingItem" ,ratingItem)

                                                /*productItem.name.split(" ").map(text => {
                                                    if (text == "") {
                                                        console.log("text" ,text)
                                                    }
                                                 }) */

                                                /* if (productItem.name.includes("POCOO")) {
                                                    console.log("text" ,"POCO")
                                                 }
                                                */

                                            if (ratingItem >= minRateSideBar) {
                                               
                                                if (productItem.name.includes(ramFilter)) {
                                    return (
                                        <Link to={`/${productItem.slug}/${productItem._id}/p`} target="_blank" className="product-box">

                                        <div className="" > 
                                            <div className="product-Image" >
                                                { productItem.productPictures.length > 0?
                                                <img style={{}} src={PublicUrlGenerator ( productItem.productPictures[0].img)}
                                                    alt=""
                                                />
                                                :<div> Nulll </div>
                                                }
                                            </div>

                                            <div className="product-content">
                                                <div className="product-name">
                                                    <h2> {productItem.name} </h2>
                                                </div>

                                                <div className="product-price">
                                                       {/*<Price value={productItem.price} className="productPrice" /> */}
                                                       <h2> {` ${productItem.price} DA`} <span>DZ</span></h2> 

                                                </div>

                                                <div className="product-rating">
                                                    {productItem.ratings ?
                                                        ratingFun(productItem.ratings)
                                                    //:null
                                                      :ratingFun(0)  
                                                    }
                                                    <span
                                                        style={{
                                                        color: "#777",
                                                        fontWeight: "500",
                                                        fontSize: "12px",
                                                        marginLeft:"2px",
                                                        
                                                        
                                                        }}
                                                    >
                                                        {`(${productItem.ratings ? productItem.ratings.length : 0}) ratings (${productItem.reviews ? productItem.reviews.length : 0}) reviews` }
                                                        {/*`(${1}) ratings (${2}) reviews`*/}

                                                </span>
                                                </div>

                                                <div>
                                                   
                                                    
                                                </div>

                                            </div>

                                        </div>  
                                        </Link>  
                                    );}}}}
                                })
                        }
                        </div>


                         {/** */}
                   </main>



           
                </div>
            </div>
        </>
    )
}
