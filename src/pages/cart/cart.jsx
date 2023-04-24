import { useEffect, useState } from "react";
// import Images from "../../section";
import './cart.css'

const Cart = ({cart})=>{
    // const [item , removeItem] = useState(false);
    // const products = [...PRODUCTS]

    const [CART,setCART] = useState([]);

    useEffect(()=>{
        setCART(cart)
    },[cart])



    return(
   <div className="cart">
    {
        CART?.map((cartItem,cartIndex)=>{
            return (
              <div className="cart-container">
                <img src={cartItem.images[1]} alt="img" className="cart-img" />
                <span className="cart-first-span">{cartItem.title}</span>

                <button
                  className="cart-btn-one"
                  onClick={() => {
                    const _CART = CART.map((item, index) => {
                      return cartIndex === index
                        ? {
                            ...item,
                            quantity: item.quantity > 0 ? item.quantity - 1 : 0,
                          }
                        : item;
                    });
                    setCART(_CART);
                  }}
                >
                  -
                </button>
                <span className="cart-quantity">{cartItem.quantity}</span>
                <button
                  className="cart-btn-one"
                  onClick={() => {
                    const _CART = CART.map((item, index) => {
                      return cartIndex === index
                        ? { ...item, quantity: item.quantity + 1 }
                        : item;
                    });
                    setCART(_CART);
                  }}
                >
                  +
                </button>
                <span className="cart-quantity">
                  $ {cartItem.price * cartItem.quantity}
                </span>
                <button className="cart-btn-one" onClick={(cartItem)=>{
                    // let item1 = cartItem;
                    console.log(cartItem);
                    const dummyCart = CART;
                    const _CART = dummyCart.filter((item, index)=>{
                        return cartIndex !== index                   })
                    setCART(_CART)
                }}
                >delete</button>
              </div>
            );
        })
    }

    <p className="cart-part"> Total :$ <span></span>
        {
            CART.map(item => item.price * item.quantity).reduce((total,value)=>total + value,0)
        }
    </p>

   </div>
        )
};

export default Cart;