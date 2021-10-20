import React /*,{ useEffect,  useState }*/ from "react";
/*import { useDispatch, useSelector } from "react-redux";
import { getProductsBySlug } from "../../actions/product.action";*/
import Layout from "../../Components/Layout/Layout";
import getParams from "../../utils/getParams";
import ClothingsAndAccessories from "./ClothingsAndAccessories/ClothingsAndAccessories";
import ProductPage from "./ProductPage/ProductPage";
import ProductStore from "./productStore/ProductStore";
import CategoryListPage from "./categoryListPage/CategoryListPage";


/*import { PublicUrlGenerator } from "../../urlConfig";*/
import "./style.css";
import CategoryListPageWithFilter from "./categoryListPageWithFilter/CategoryListPageWithFilter";

export default function ProductsListPage(props) {

  const renderProduct = () =>{
    console.log("props __", props);
    const params = getParams(props.location.search);
    console.log(params)

    let content = null;
    switch(params.type) {
      case 'store' :
        
        content = <ProductStore {...props} />;
        break;
      
      case 'page' :
        
        content = <ProductPage {...props} />;
        break;

       /* case 'sub' :
          content = <CategoryListPage {...props} />;
          break;
          */

        case 'sub' :
            content = <CategoryListPageWithFilter {...props} />;
            break;
  
      

      default : 
        content =  <ClothingsAndAccessories {...props} />;
    }

    return content;
  }

  return (
    <Layout>
       
      {renderProduct()}

    </Layout>
  );
}
