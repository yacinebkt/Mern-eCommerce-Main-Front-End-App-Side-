import React, { useEffect,  useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsBySlug } from "../../../actions/product.action";
/*import Layout from "../../../Components/Layout/Layout";*/
import { PublicUrlGenerator } from "../../../urlConfig";
import {Link} from 'react-router-dom'
import "./style.css";
import Card from "../../../Components/UI/Card/Card";




export default function ClothingsAndAccessories(props) {

    
  const product = useSelector (state => state.product);

 /* const [priceRange, setPriceRange] = useState ({

    moreThan5MillionDz:  "More Than 50000",
    under5MillionDz: "under 50000",
    under4MillionDz: "under 40000",
    under3MillionDz: "under 30000",
    under2MillionDz: "under 20000",
    under1MillionDz: "under 10000",
   
  });
    */

  const dispatch = useDispatch();

  useEffect(() => {
    //console.log(props) // match is in params
    const { match } = props;
    dispatch(getProductsBySlug(match.params.slug));
  }, []);

    return (
        
          <div style={{ padding: "10px" }}>
      <Card
        style={{
          boxSizing: "border-box",
          padding: "10px",
          display: "flex",
        }}
      >
        {product.products.map((product) => (
          <div className="caContainer">
            <Link
              className="caImgContainer"
              to={`/${product.slug}/${product._id}/p`}
            >
              <img src={PublicUrlGenerator(product.productPictures[0].img)} />
            </Link>
            <div>
              <div className="caProductName">{product.name}</div>
              <div className="caProductPrice">
                
                {product.price} DA
              </div>
            </div>
          </div>
        ))}
      </Card>
    </div>
  
        
    )
}
