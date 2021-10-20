import { productsConstants } from "../actions/constants"

const initstate = {
    products: [],
    /*productsByPrice:{
        under5MillionDz: [],
        under4MillionDz: [],
        under3MillionDz: [],
        under2MillionDz: [],
        under1MillionDz: [],
        moreThan5MillionDz : []

    },*/
    product :{},
    priceRange:{},
    productsByPrice:{},
    pageRequest : false,
    page : {},
    error : null,
    productDetails: {},

    maxPrice : null,
    minPrice : null,
  
    loading: false,
}


export default ( state = initstate, action) =>{

    switch(action.type) {
        case productsConstants.GET_PRODUCTS_BY_SLUG: 
        state = {
            ...state,
            products : action.payload.products,
            priceRange : action.payload.priceRange,
            productsByPrice : {
                ...action.payload.productsByPrice
            }
        }
        break;

        case productsConstants.GET_PRODUCT_PAGE_REQUEST: 
        state = {
            ...state,
            pageRequest: true
        }
        break;


        case productsConstants.GET_PRODUCT_PAGE_SUCCESS: 
        state = {
            ...state,
            page :action.payload.page,
            pageRequest: false
        }
        break;


        case productsConstants.GET_PRODUCT_PAGE_FAILURE: 
        state = {
            ...state,
            error :action.payload.error,
            pageRequest: false
         
        }
        break;


        case productsConstants.GET_PRODUCT_DETAILS_BY_ID_REQUEST:
            state = {
              ...state,
              loading: true,
            };
            break;
          case productsConstants.GET_PRODUCT_DETAILS_BY_ID_SUCCESS:
            state = {
              ...state,
              loading: false,
              productDetails: action.payload.productDetails,
            };
            break;
          case productsConstants.GET_PRODUCT_DETAILS_BY_ID_FAILURE:
            state = {
              ...state,
              loading: false,
              error: action.payload.error,
            };
            break;



            /* */

            

        case productsConstants.GET_ALL_PRODUCTS_SUCCESS:
          state = {
            ...state,
            loading: false,
            products :action.payload.products,
          };
          break;



          
          
        case productsConstants.GET_ALL_PRODUCTS_BY_ARRAY_IDS_SUCCESS:
          state = {
            ...state,
            loading: false,
            products :action.payload.products,
          };
          break;
         
          
        case productsConstants.GET_ALL_PRODUCTS_BY_ARRAY_IDS_BY_ORDER_SUCCESS:
          state = {
            ...state,
            loading: false,
            products :action.payload.products,
            maxPrice : action.payload.maxPrice,
            minPrice : action.payload.minPrice,
          };
          break;


          /*  case productsConstants.UPDATE_PRODUCT_SUCCESS:
              state ={
                ...state,
                loading: false

            }
              break
            */
            
      
    }
    return state;
}