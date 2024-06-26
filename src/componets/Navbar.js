import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {
  FaCartPlus,
  FaMinusCircle,
  FaPlusCircle,
  FaTimes,
} from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";

const Navbar = ({
  addtoCart,
  removeCart,
  cart,
  user,
  removeFromCart,
  subTotal,
}) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [show, setShow] = useState(false);

  const openCart = () => {
    setIsCartOpen(true);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };
  return (
    <div className="flex flex-col md:flex-row md:justify-start justify-center items-center py-2 shadow-md sticky top-0 z-10 bg-white">
      <Link href={"/"}>
        <div className="mx-5">
          <Image src="/googlelogo.png" alt="logo" width={200} height={40} />
        </div>
      </Link>

      <div className=" ">
        <ul className="flex items-center space-x-10 font-bold md:text-xl">
          <Link href={"/tshirt"}>
            <li> Tshirt</li>
          </Link>
          <Link href={"/hoodie"}>
            <li> hoodie</li>
          </Link>
          <Link href={"/mugs"}>
            <li> mugs</li>
          </Link>
          <Link href={"/sticker"}>
            <li> stiicker</li>
          </Link>
        </ul>
      </div>
      <div className="absolute right-2  justify-center gap-3 flex text-center cursor-pointer">
        {user?.value && <MdAccountCircle className="text-xl" onMouseEnter={()=>setShow(!show)} onMouseLeave={()=>setShow(false)} />}
        <div className="origin-top-right absolute right-5 w-40 mt-8 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
         {show && <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <div
              className="block px-2 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              Item 1
            </div>
            <div
              className="block px-2 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              Item 2
            </div>
            <div
              className="block px-2 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              Item 3
            </div>
          </div>}
        </div>
        {!user?.value && (
          <Link href={"/login"}>
            <button> Login</button>
          </Link>
        )}
        <FaCartPlus className="md:text-2xl" onClick={openCart} />
      </div>
      {isCartOpen && (
        <div className="fixed top-0 right-0 h-full md:w-1/4 shadow-lg z-10 transform transition-transform bg-pink-100 ease-in-out duration-300">
          <div className="flex justify-end mr-2">
            <FaTimes
              className="md:text-lg cursor-pointer text-pink-500 right-3"
              onClick={closeCart}
            />
          </div>
          <div className="px-8">
            <h2 className="text-xl font-bold mb-4 text-center">
              Shopping Cart
            </h2>

            <ol className="list-decimal space-y-4">
              {Object.keys(cart).length === 0 && (
                <div className="my-4 font-semibold">Your cart is Empty !</div>
              )}

              {Object.keys(cart)?.map((x, i) => {
                return (
                  <>
                    <li className="flex items-center justify-between" key={i}>
                      <span>
                        {cart[x].name}
                        {cart[x]?.size / cart[x]?.variant}
                      </span>
                      <span className="flex items-center">
                        <FaMinusCircle
                          className="cursor-pointer text-pink-500"
                          onClick={() => {
                            removeFromCart(
                              x,
                              1,
                              cart[x]?.price,
                              cart[x]?.name,
                              cart[x]?.size,
                              cart[x]?.variant
                            );
                          }}
                        />
                        <span className="mx-2">{cart[x]?.qty}</span>
                        <FaPlusCircle
                          onClick={() => {
                            addtoCart(
                              x,
                              1,
                              cart[x]?.price,
                              cart[x]?.name,
                              cart[x]?.size,
                              cart[x]?.variant
                            );
                          }}
                        />
                      </span>
                    </li>
                    <div className="font-bold text-md mt-10 mb-5 ">
                      subTotal : ₹{subTotal}
                    </div>
                    <div className="flex justify-between gap-3 mt-4">
                      <Link href={"/checkout"}>
                        <button className="text-white text-sm bg-pink-500 border-0 py-2 px-3 focus:outline-none hover:bg-pink-600 rounded">
                          Checkout
                        </button>
                      </Link>

                      <button
                        onClick={() => {
                          removeCart();
                        }}
                        className="text-white text-sm bg-pink-500 border-0 py-2 px-3 focus:outline-none hover:bg-pink-600 rounded"
                      >
                        ClearCart
                      </button>
                    </div>
                  </>
                );
              })}
            </ol>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
