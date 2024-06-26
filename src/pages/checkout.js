import React from "react";
import {
  FaCartPlus,
  FaMinusCircle,
  FaPlusCircle,
  FaTimes,
} from "react-icons/fa";
const Checkout = ({ cart, addtoCart, removeFromCart, subTotal }) => {
  return (
    <>
      <div className="m-auto text-center font-bold text-2xl my-6">Checkout</div>
      <section class="text-gray-600 body-font ">
        <div class="container px-5 py-4 mx-auto">
          <div class=" md:px-24 mx-auto">
            <div className="font-bold my-2">1. Delivery Details</div>

            <div class="flex flex-wrap -m-2">
              <div class="p-2 w-1/2">
                <div class="relative">
                  <label for="name" class="leading-7 text-sm text-gray-600">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div class="p-2 w-1/2">
                <div class="relative">
                  <label for="email" class="leading-7 text-sm text-gray-600">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div class="p-2 w-1/2">
                <div class="relative">
                  <label for="name" class="leading-7 text-sm text-gray-600">
                    Phone
                  </label>
                  <input
                    type="text"
                    id="Phone"
                    name="Phone"
                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div class="p-2 w-1/2">
                <div class="relative">
                  <label for="name" class="leading-7 text-sm text-gray-600">
                    city
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div class="p-2 w-1/2">
                <div class="relative">
                  <label for="name" class="leading-7 text-sm text-gray-600">
                    State
                  </label>
                  <input
                    type="text"
                    id="State"
                    name="State"
                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div class="p-2 w-1/2">
                <div class="relative">
                  <label for="name" class="leading-7 text-sm text-gray-600">
                    Pincode
                  </label>
                  <input
                    type="text"
                    id="Pincode"
                    name="Pincode"
                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div class="p-2 w-full">
                <div class="relative">
                  <label for="message" class="leading-7 text-sm text-gray-600">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={2}
                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="font-bold my-2">2. Payement Details</div>
              <div className=" shadow-lg  bg-pink-100 w-full px-2 ">
                <div className="px-8">
                  <ul className="list-decimal">
                    {Object.keys(cart).length === 0 ? (
                      <div className="my-4 font-semibold">
                        Your cart is Empty !
                      </div>
                    ) : (
                      Object.keys(cart).map((x, i) => (
                        <li className="flex items-center mt-5" key={i}>
                          <span className="font-semibold">{cart[x]?.name}</span>
                          <span className="flex items-center ml-20">
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
                            {console.log(cart)}
                            <span className="mx-2">{cart[x]?.qty}</span>
                            <FaPlusCircle
                              className="cursor-pointer text-pink-500"
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
                      ))
                    )}
                  </ul>

                  <div className="font-bold text-md mt-10 mb-5 ">
                    subTotal : ₹{subTotal}
                  </div>
                </div>
              </div>
              <div class="p-2 text-center justify-center w-full">
                <button class="flex mx-auto text-center justify-center text-white bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-pink-600 rounded text-lg">
                  pay :₹{subTotal}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Checkout;
