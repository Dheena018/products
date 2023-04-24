import React, { useState } from "react";
import Navbar from "./components/navbar/navbar";
import { Outlet, Route, Routes } from "react-router-dom";
import Shop from "./pages/shop/shop";
import Contact from "./pages/contact/contact";
import Login from "./pages/Login/login";
import Home from "./pages/home/home";
import Cart from "./pages/cart/cart";
import PRODUCTS from "./products";

const App = ()=>{
    
    const [cart,setCart]= useState([]);
    console.log(cart)
    const addToCart =(data)=>{
        console.log(data);
        setCart([...cart, {...data , quantity : 1}])
    }
    return(
        
        <Routes>
            <Route path="/" element={<><Navbar count={cart.length}/><Outlet /></>}>
               <Route index element={<Home />}></Route>
                <Route path="/login" element={<Login />}></Route>
            <Route path="/cart" element={<Cart cart={cart}/>}></Route>
            <Route path="/shop" element={<Shop PRODUCTS={PRODUCTS} adddToCart={addToCart}/>}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            </Route>
        </Routes>
    )
};

export default App;