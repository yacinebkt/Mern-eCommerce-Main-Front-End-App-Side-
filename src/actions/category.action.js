import axios from "../helpers/axios";
import {categoryConstants} from './constants';


export const getAllCategories = () =>{

    return async dispatch =>{

        dispatch( { 
            type: categoryConstants.GET_ALL_CATEGORIES_REQUEST
        } )

        const res = await axios.get(`category/getCategory`);
        console.log(res);

        if(res.status === 200 ) {
            const {categoryList } = res.data 
            dispatch ({
                type: categoryConstants.GET_ALL_CATEGORIES_SUCCESS,
                payload:{
                    categories: categoryList
                }
            })
        }else{

            dispatch ({
                type: categoryConstants.GET_ALL_CATEGORIES_FAILURE,
                payload:{
                    error: res.data.error
                }
            })
        }
    }
}



export const getCategoryById = (id) => {


    return async dispatch => {
        dispatch({ type: categoryConstants.GET_CATEGORY_BY_ID_REQUEST });
        let res
        try {
         
            console.log("getCategoryById ==== ", id);

            res = await axios.post(`/category/getOneCategory`, {categryId : id});
            console.log("getCategoryById", res);
            console.log("getCategoryById res.data.category", res.data.category);

            dispatch({
                type: categoryConstants.GET_CATEGORY_BY_ID_SUCCESS,
                payload: { categoryDetails: res.data.category }
            });
            

        } catch(error) {
            console.log(error);
          
            dispatch({
                type: categoryConstants.GET_CATEGORY_BY_ID_FAILURE,
                payload: { error : res.data.error }
            });
            
        }

    }
    
}