import axios from "../helpers/axios"
import {productsConstants} from "./constants"

export const getProductsBySlug = (slug) => {

    return async dispatch => {
        const res = await axios.get(`/products/${slug}`)    
        
        if (res.status === 200) {
            dispatch ({
                type: productsConstants.GET_PRODUCTS_BY_SLUG,
                payload : res.data
                
            });
        }
        else {
            

        }

        /*console.log( res);*/
    }
}



export const getProductPage = (payload) => {

    return async dispatch => {

        try {
            const {cid, type} = payload.params
            const res = await axios.get(`/page/${cid}/${type}`);
            
            /*console.log(res);*/
            dispatch ({
                type: productsConstants.GET_PRODUCT_PAGE_REQUEST,
               
            });    
            
            if (res.status === 200) {
                const {page} =res.data
                dispatch ({
                    type: productsConstants.GET_PRODUCT_PAGE_SUCCESS,
                    payload : { page }
                });       
            }
            else {
                const {error} =res.data
                dispatch ({
                    type: productsConstants.GET_PRODUCT_PAGE_FAILURE,
                    payload : { error }
                });      
            }

        }catch (error) {
            console.log(error)
        }

       

    }
}




export const getProductDetailsById = (payload) => {
    return async dispatch => {
        dispatch({ type: productsConstants.GET_PRODUCT_DETAILS_BY_ID_REQUEST });
        let res;
        try {
            const { productId } = payload.params;
            res = await axios.get(`/product/${productId}`);
            console.log(res);
            dispatch({
                type: productsConstants.GET_PRODUCT_DETAILS_BY_ID_SUCCESS,
                payload: { productDetails: res.data.product }
            });

        } catch(error) {
            console.log(error);
          
            dispatch({
                type: productsConstants.GET_PRODUCT_DETAILS_BY_ID_FAILURE,
                payload: { error : res.data.error }
            });
        }

    }
}




// modified act



export const udateProduct  = (payloadd) =>{
    return async dispatch => {

        dispatch ({
            type: productsConstants.UPDATE_PRODUCT_REQUEST
        });


       /* const payloadd = {       
                _id: "60ec47771b88782748435696",
                review : "tesssst tesst"
        };
        */
        const res = await axios.post(`/product/update`, payloadd);


        if(res.status === 202 ) {
            dispatch ({
                type: productsConstants.UPDATE_PRODUCT_SUCCESS,

            });

        }else{
            const {error} = res.data;
            dispatch ({
                type: productsConstants.UPDATE_PRODUCT_FAILURE,
                payload:{
                    error,

                }
                
            });
        }
        
    }
}


//New


export const getAllProducts = () => {

    return async dispatch => {
        dispatch({ type: productsConstants.GET_ALL_PRODUCTS_REQUEST });
        let res
        try {
            res = await axios.get(`/product/getallproducts`);
            console.log("getAllProducts res", res);

            dispatch({
                type: productsConstants.GET_ALL_PRODUCTS_SUCCESS,
                payload: { products: res.data.result }
            });

        } catch(error) {
            console.log(error);
          
            dispatch({
                type: productsConstants.GET_PRODUCT_DETAILS_BY_ID_FAILURE,
                payload: { error : res.data.error }
            });
        }

    }
}




export const getProductsCategoryByArrayIds = (array) => {  // work but we replace by getOrderProductByPrice function


    const arrayIds = array
    console.log("arrayIds action >>>>>> =", arrayIds);



    return async dispatch => {
        dispatch({ type: productsConstants.GET_ALL_PRODUCTS_BY_ARRAY_IDS_REQUEST });
        let res
        try {

            res = await axios.post(`/products/getProductsCategoryByArrayIds`, {arrayIds} );
            console.log("arrayIds OF pRODUCTS ======", res.data);
            

            dispatch({
                type: productsConstants.GET_ALL_PRODUCTS_BY_ARRAY_IDS_SUCCESS,
                payload: { products: res.data.products }
            });
            

        } catch(error) {
            console.log(error);
          
           dispatch({
                type: productsConstants.GET_ALL_PRODUCTS_BY_ARRAY_IDS_FAILURE,
                payload: { error : res.data.error }
            });
            
        }

    }
}









export const getOrderProductByPrice = (array, MaxMin, ratingConditionV, reviewsConditionV, createdAtV ) => {

/*

	"arrayIds" : ["60b11bc98c9f1706f00f4fd9"],
    "arrayIds" : ["60b11bc98c9f1706f00f4fd9", "60c3db1091c30404dcf2e5b8", "60a503565bae3022c42df947", "60a824881837b210a419951e"],

	"MaxOrMin" : -1,
	"itemsNumber" : 2
 */
    const arrayIds = array
    const MaxOrMin = MaxMin
    const itemsNumber = 0
    const ratingCondition = ratingConditionV

    const reviewsCondition = reviewsConditionV
    const priceOrDate = createdAtV


   


   
    



    return async dispatch => {
        dispatch({ type: productsConstants.GET_ALL_PRODUCTS_BY_ARRAY_IDS_BY_ORDER_REQUEST });
        let res
        try {

            res = await axios.post(`/product/getOrderProductByPrice`, {arrayIds, MaxOrMin, itemsNumber, ratingCondition, reviewsCondition, priceOrDate } );
            //console.log("arrayIds OF pRODUCTS ======", res.data);
           
            dispatch({
                type: productsConstants.GET_ALL_PRODUCTS_BY_ARRAY_IDS_BY_ORDER_SUCCESS,
                payload: { products: res.data.products,
                           maxPrice : res.data.maxPrice,
                           minPrice : res.data.minPrice
                             
                }
            });
            

        } catch(error) {
            console.log(error);
          
           dispatch({
                type: productsConstants.GET_ALL_PRODUCTS_BY_ARRAY_IDS_BY_ORDER_FAILURE,
                payload: { error : res.data.error }
            });
            
            
        }

    }
}




  
/*

// modified act
export const udateProduct = (form) => {
    return async (dispatch) => {
      try {
        dispatch({ type: productsConstants.UPDATE_PRODUCT_REQUEST });

        const res = await axios.post(`product/update`, form);

        if (res.status === 200) {
            dispatch({ type: productsConstants.UPDATE_PRODUCT_SUCCESS });          
        } else {
          dispatch({ type: productsConstants.UPDATE_PRODUCT_FAILURE });
        }
      } catch (error) {
        console.log(error);
      }
    };
  };


  //

  

export const udateProduct = (form) => {
    return async (dispatch) => {

      
        const res = await axios.post(`product/update`, form);
        console.log("res", res);


        dispatch({ type: productsConstants.UPDATE_PRODUCT_REQUEST });


        console.log("res", res);

        if (res.status === 200) {
          dispatch({ type: productsConstants.UPDATE_PRODUCT_SUCCESS 
                    });
         console.log(" product updated Succsefuly :", res) 
          
        } else {
          dispatch({ type: productsConstants.UPDATE_PRODUCT_FAILURE });

        }
      
    };
  };
  
  
 */