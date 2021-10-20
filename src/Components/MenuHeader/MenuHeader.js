import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getAllCategories } from '../../actions/category.action';
import {IoIosArrowDown, IoMdArrowDropdown} from 'react-icons/io';
import {BiDownArrow} from 'react-icons/bi';
import { BsBoxArrowInUp} from 'react-icons/bs';

import { RiArrowDownSLine} from 'react-icons/ri';

import "./style.css"

export default function MenuHeader() {


    const category = useSelector(state => state.category);
    const dispatch = useDispatch();

    useEffect( () => {
        dispatch(
            getAllCategories()
        )
    }, [])    

    

/* ADD */    
    let arrayALllCategoriesMenu = []
    arrayALllCategoriesMenu.push(category.categories)

    

const parentIdArrayfun = (cat) => { 
    Object.keys(cat).map(function(i) {
  
    Object.keys(cat[i]).map(function(i2) {
  
        if (i2 == "children") {
            if (cat[i][i2].length> 0) { 
              // console.log ("cat[i][i2]", cat[i][i2])
              arrayALllCategoriesMenu.push(cat[i][i2])
               parentIdArrayfun(cat[i][i2])
              }
        }
      })  
    })

  }
  
  parentIdArrayfun(category.categories)
  


    let arrayALllCategories02Menu =[]

    arrayALllCategoriesMenu.map(cat => {
      Object.keys(cat).map(function(i) {
        arrayALllCategories02Menu.push(cat[i])
      })
      })
    
    
    console.log ("arrayALllCategories02Menu", arrayALllCategories02Menu)
    
    
/* ADD */

    const categoryType = (type, id) =>{
        let def ="sub"

        arrayALllCategories02Menu.map(cat =>{
            if (cat._id == id) {
                if (cat.children.length == 0) {
                    def= "undefined"
                }
            }
        }
        )
        
        let store = "store"
        let page = "page"
        if (type == store) {
            return store
        } else{
            if (type == page) {
                return page
            } 
            else {
                return def

            }
        }

    }

    const showCategories = (categories) => {

        let defcategories =[] ;

        for ( let category of categories) {
            defcategories.push(
                <li key={category.name}>
                    
                    {   
                        category.parentId ?  
                        <a href={`/${category.slug}?cid=${category._id}&type=${categoryType(category.type, category._id)}`}> 
                         {category.name} 

                         {
                             
                         }
                         {
                               ( category.children.length > 0 )? 
                                <RiArrowDownSLine className="categorynameicon02"/> // Mobiles
                                : <BsBoxArrowInUp style={{color:"black", fontSize:"10px", marginLeft:"5px"}} />

                         }
                        </a>
                        :
                        <div className="catcont">
                        <div className="catcontainer" style={{
                            /*width: "150px",
                            display:'flex',
                            flexDirection:"column",
                            justifyContent:"center",
                            alignItems:"center"
                            */
                           
                        }}>
                            <div  className="catimg">
                            <img
                            //className="multi__image2"
                            src={category.categoryPicture}
                            alt=""
                    
                            style={{
                               /* width: "62px",
                                height: "62px",
                                objectFit: "cover",
                                marginBottom: "08px",
                                borderRadius:".2rem",
                                display:'block'
                                */
                            }}
                            />
                           
                           </div>

                            
                           

                        </div> 
                        <div className="categorynamecontainer">
                        <span> {category.name} </span> 

                            
                            {
                               ( category.children.length > 0 )? 
                                <RiArrowDownSLine className="categorynameicon"/>  // ELECTRONICS
                                :null
                            }
                            
                            </div>

                        </div>
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





    return (
        <div className="menuHeader">

            <ul className="categoriesList">
                {category.categories.length >0 ? showCategories(category.categories) :null }
            </ul>
            
        </div>
    )
}
