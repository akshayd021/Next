import { Footer, Navbar } from "@/componets";
import "@/styles/globals.css";
import { useEffect, useState } from "react";
import { useRouter } from 'next/router'
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }) {
  const router = useRouter()
  const [cart, setCart] = useState({});
  const [total, setTotal] = useState(0);
  const [user, setUser] = useState({value : null});
  const [key, setKey] =( [])

  useEffect(() => {
    try {
      if (localStorage.getItem("cart")) {
        setCart(JSON.parse(localStorage.getItem("cart")));
        saveCart(JSON.parse(localStorage.getItem("cart")));
      }
    } catch (err) {
      console.error(err);
      localStorage.clear();
    }
  }, []);

  //  const token = localStorage.getItem('token')
  //  if(token){
  // setUser({value: token})
  // setKey(Math.random())
  //  }
  const saveCart = (mycart) => {
    localStorage.setItem("cart", JSON.stringify(mycart));
    let subt = 0;
    let keys = Object.keys(mycart);
    for (let i = 0; i < keys.length; i++) {
      subt += mycart[keys[i]]["price"] * mycart[keys[i]].qty;
    }
    setTotal(subt);
  };
  const addtoCart = (itemCode, qty, price, name, size, variant) => {
    let newCart = cart;
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty + qty;
    } else {
      newCart[itemCode] = { qty: 1, price, name, variant, size };
    }
    setCart(newCart);
    saveCart(newCart);
  };
  const removeCart = () => {
    setCart({});
    saveCart({});
  };
  const removeFromCart = (itemCode, qty, price, name, size, variant) => {
    let newCart = JSON.parse(JSON.stringify(cart));
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty - qty;
    }
    if (newCart[itemCode]["qty"] <= 0) {
      delete newCart[itemCode];
    }
    setCart(newCart);
    saveCart(newCart);
  };

  const BuyNow = (itemCode, qty, price, name, size, variant) =>{
    let newCart= {itemCode :{qty , price , name, size, variant}}
    setCart(newCart)
    saveCart(newCart)
    router.push('/checkout')
  }
  return (
    <>
    <ToastContainer />
      <Navbar
      key={key}
      user={user}
        addtoCart={addtoCart}
        removeCart={removeCart}
        cart={cart}
        removeFromCart={removeFromCart}
        subTotal={total}
      />
      <Component
        addtoCart={addtoCart}
        removeCart={removeCart}
        cart={cart}
        removeFromCart={removeFromCart}
        subTotal={total}
        BuyNow={BuyNow}
        {...pageProps}
      />
      <Footer />
    </>
  );
}
