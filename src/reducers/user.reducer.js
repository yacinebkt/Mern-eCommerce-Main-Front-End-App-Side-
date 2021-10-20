import { userConstants } from "../actions/constants";

const initState = {
  users: [],

  address: [],
  orders: [],
  orderDetails: {},
  error: null,
  loading: false,
  orderFetching: false,
  placedOrderId: null,

  UserDetails : null,
  

  
  /*orders: [],
  orderDetails: {},*/
  /*orderFetching: false,
  placedOrderId: null,*/
};

export default (state = initState, action) => {
  switch (action.type) {
    case userConstants.GET_ALL_USERS_SUCCESS:
      state = {
        loading: false,
        ...state,
        users: action.payload.users
      };

    case userConstants.GET_USER_ADDRESS_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case userConstants.GET_USER_ADDRESS_SUCCESS:
      state = {
        ...state,
        address: action.payload.address,
        loading: false,
      };
      break;
    case userConstants.GET_USER_ADDRESS_FAILURE:
      state = {
        ...state,
        loading: false,
        error: action.payload.error,
      };
      break;
    case userConstants.ADD_USER_ADDRESS_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case userConstants.ADD_USER_ADDRESS_SUCCESS:
      state = {
        ...state,
        address: action.payload.address,
        loading: false,
      };
      break;
    case userConstants.ADD_USER_ADDRESS_FAILURE:
      state = {
        ...state,
        loading: false,
        error: action.payload.error,
      };
      break;

      case userConstants.GET_USER_ORDER_REQUEST:
      state = {
        ...state,
        orderFetching: true,
      };
      break;

    case userConstants.GET_USER_ORDER_SUCCESS:
      state = {
        ...state,
        orders: action.payload.orders,
        orderFetching: false,
      };
      break;
    case userConstants.GET_USER_ORDER_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
        orderFetching: false,
      };
      break;


      case userConstants.GET_USER_ORDER_DETAILS_REQUEST:
        break;
      case userConstants.GET_USER_ORDER_DETAILS_SUCCESS:
        state = {
          ...state,
          orderDetails: action.payload.order,
        };
        break;
      case userConstants.GET_USER_ORDER_DETAILS_FAILURE:
        break;


        case userConstants.ADD_USER_ORDER_SUCCESS:
          state = {
            ...state,
            placedOrderId: action.payload.order._id,
          };



        
    /*case userConstants.GET_USER_ORDER_REQUEST:
      state = {
        ...state,
        orderFetching: true,
      };
      break;
    case userConstants.GET_USER_ORDER_SUCCESS:
      state = {
        ...state,
        orders: action.payload.orders,
        orderFetching: false,
      };
      break;
    case userConstants.GET_USER_ORDER_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
        orderFetching: false,
      };
      break;
    case userConstants.GET_USER_ORDER_DETAILS_REQUEST:
      break;
    case userConstants.GET_USER_ORDER_DETAILS_SUCCESS:
      state = {
        ...state,
        orderDetails: action.payload.order,
      };
      break;
    case userConstants.GET_USER_ORDER_DETAILS_FAILURE:
      break;
    case userConstants.ADD_USER_ORDER_SUCCESS:
      state = {
        ...state,
        placedOrderId: action.payload.order._id,
      };
      break;
    */
  }

  return state;
};