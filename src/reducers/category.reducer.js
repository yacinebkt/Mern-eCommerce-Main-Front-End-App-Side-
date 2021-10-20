import { categoryConstants } from "../actions/constants"

const initState = {
    categories: [],
    loading: false,
    categoryDetails: null,
    error: null
    
}


// update categorie without refrech the page

const createNewCategory = (parentId, categories, category) => {
    let myCategories = [];

    if(parentId == undefined){
        return [
            ...categories,
            {
                _id: category._id,
                name: category.name,
                slug: category.slug,
                type: category.type,
                children: []
            }
        ];
    }
    
    for(let cat of categories){

        if(cat._id == parentId){
            const newCategory = {
                _id: category._id,
                name: category.name,
                slug: category.slug,
                parentId: category.parentId,
                type: category.type,
                children: []
            };
            myCategories.push({
                ...cat,
                children: cat.children.length > 0 ? [...cat.children, newCategory] : [newCategory]
            })
        }else{
            myCategories.push({
                ...cat,
                children: cat.children ? createNewCategory(parentId, cat.children, category) : []
            });
        }   
    }
    return myCategories;
}


export default (state =initState, action) =>{

    switch (action.type) {

        case categoryConstants.GET_ALL_CATEGORIES_SUCCESS:
            state ={
                ...state,
                categories: action.payload.categories

            }
            break 
        
        case categoryConstants.ADD_NEW_CATEGORY_REQUEST:
            state ={
                ...state,
                loading : true

            }
            break 

        case categoryConstants.ADD_NEW_CATEGORY_SUCCESS:
            const category = action.payload.category;

            const updatedCategories =  createNewCategory(category.parentId, state.categories, category);
            console.log(updatedCategories);
            state ={
                ...state,
                categories: updatedCategories,
                loading : false,
                  // for update categorie without refrech the page
              //     categories : createNewCategory(state.categories, action.payload.category) 
              

            }
            break 
        
          case categoryConstants.ADD_NEW_CATEGORY_SUCCESS:
            state ={
                ...initState,

            }
            break 


            case categoryConstants.GET_CATEGORY_BY_ID_REQUEST:
                state ={
                    ...state,
                    loading : true,
    
                }
                break 

            case categoryConstants.GET_CATEGORY_BY_ID_SUCCESS:

                state ={
                    ...state,
                    categoryDetails: action.payload.categoryDetails,
                    loading : false,

                }
                break 






    }

    return state;
} 