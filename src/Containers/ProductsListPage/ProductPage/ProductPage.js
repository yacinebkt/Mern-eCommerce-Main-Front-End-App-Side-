import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getProductPage } from '../../../actions/product.action';
import getParams from '../../../utils/getParams';

/* carousel */
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
/* end carousel  */
import "./style.css"
import Card from '../../../Components/UI/Card/Card';

export default function ProductPage(props) {

    const dispatch = useDispatch();

    const product = useSelector (state => state.product);

    const {page} = product

    useEffect(() => {
        const params = getParams(props.location.search)
        const payload = {
            params
        }

        dispatch(getProductPage(payload))
    }, [])



    
    return (
        <div style ={{ margin : "0 10px"}}>

        <h3>{page.title}</h3>
        <Carousel
            renderThumbs={ () => {}}
        >
            {
                page.banners && page.banners.map((banner, index) => 
                <a key ={index} style ={{display:"block"}} href={banner.navigateTo} >
                    <img src={banner.img} alt="" />
                   {/*<p className="legend">Legend 1</p> */} 
                </a>
                
                ) 
            }
        </Carousel>

        <div style={{display:"flex", justifyContent:"center", flexWrap:'wrap', margin:"10px 0"}}>
            {
                page.products  && page.products.map ((product, index) => 
                <Card 
                    key={index}
                    style ={{
                        width:"400px",
                        height:"200px",
                        margin: "5px",
                        display: "flex"

                    }}
                >
                    <img src={product.img} alt="" 
                     style ={{
                        width:"auto",
                        height:"100%",
                        margin: "0 auto"
                        

                    }}
 />
                </Card>
                    
                    )
            }
        </div>
      
        
        </div>
    )
}
