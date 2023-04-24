// import PRODUCTS from "../../products";
// import Images from '../../section';
import './shop.css';
import uuid from 'react-uuid';


const Shop = ({PRODUCTS,adddToCart})=>{
    return(
        <div className="shop-contain">
           {PRODUCTS.map((productItem,productIndex)=>{
            return( 
                <div className="shop-container-fluid">
                    <div className="shop-images">
                        <img src={productItem.images[1]} key={uuid} alt="pic" className='product-image'/>
                    </div>
                    <div className="shop-other-container">
                        <h2 className="product-title">{productItem.title}</h2>
                        <p className="product-para">$ {productItem.price}</p>
                        <span className="product-span">⭐⭐⭐⭐{productItem.rating}</span>
                    </div>
                    <div className="btn-one-container">
                        <button className="btn-btn"
                        onClick={()=>  adddToCart(productItem)}
                        >Add To Cart</button>
                    </div>
                </div>
            )
           })}
        </div>
    )
};
export default Shop;