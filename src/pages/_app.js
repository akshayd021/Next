import { Footer, Navbar } from "@/componets";
import "@/styles/globals.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingBar from "react-top-loading-bar";

export default function App({ Component, pageProps, }) {
  const router = useRouter();
  const [cart, setCart] = useState({});
  const [total, setTotal] = useState(0);
  const [user, setUser] = useState({ value: null });
  const [key, setKey] = useState(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleStart = () => setProgress(30);
    const handleComplete = () => setProgress(100);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, []);
  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token)
    if (token) {
      setUser({ value: token });
      setKey(Math.random());
    }

  }, []);
  const saveCart = (mycart) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cart", JSON.stringify(mycart));
      let subt = 0;
      let keys = Object.keys(mycart);
      for (let i = 0; i < keys.length; i++) {
        subt += mycart[keys[i]]["price"] * mycart[keys[i]].qty;
      }
      setTotal(subt);
    }
  };

  const addtoCart = (itemCode, qty, price, name, size, variant) => {
    let newCart = { ...cart };
    if (itemCode in cart) {
      newCart[itemCode].qty += qty;
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
    let newCart = { ...cart };
    if (itemCode in cart) {
      newCart[itemCode].qty -= qty;
      if (newCart[itemCode].qty <= 0) {
        delete newCart[itemCode];
      }
    }
    setCart(newCart);
    saveCart(newCart);
  };

  const BuyNow = (itemCode, qty, price, name, size, variant) => {
    let newCart = { [itemCode]: { qty, price, name, size, variant } };
    setCart(newCart);
    saveCart(newCart);
    router.push("/checkout");
  };

  return (
    <>
      <ToastContainer />
      <LoadingBar
        color="rgb(238 65 123)"
        progress={progress}
        waitingTime={500}
        onLoaderFinished={() => setProgress(0)}
      />
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
         user={user}
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
