import React, { useEffect, useState } from "react";
import {
  FaCartPlus,
  FaMinusCircle,
  FaPlusCircle,
  FaTimes,
} from "react-icons/fa";

// Assuming you have the pincode data statically defined
const pincodeData = [
  {
    pincode: 395004,
    city: "Surat",
    state: "Gujarat",
  },
  {
    pincode: 394300,
    city: "Bharuch",
    state: "Gujarat",
  },
  {
    pincode: 400004,
    city: "Ahmedabad",
    state: "Gujarat",
  },
];
// useEffect(()=>{

 const UserEmail = localStorage.getItem("userEmail")
 console.log(UserEmail)
// },[])

const Checkout = ({ cart, addtoCart, removeFromCart, subTotal,user }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    state: "",
    city: "",
    pincode: "",
    address: "",
  });
  console.log(user)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (name === "pincode") {
      const selectedPincode = parseInt(value); // Convert to number if necessary
      const selectedLocation = pincodeData.find(
        (location) => location.pincode === selectedPincode
      );

      if (selectedLocation) {
        setFormData((prevData) => ({
          ...prevData,
          state: selectedLocation.state,
          city: selectedLocation.city,
        }));
      } else {
        setFormData((prevData) => ({
          ...prevData,
          state: "",
          city: "",
        }));
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   

    setFormData({
      name: "",
      email: "",
      phone: "",
      state: "",
      city: "",
      pincode: "",
      address: "",
    });
  };

  return (
    <>
      <div className="m-auto text-center font-bold text-2xl my-6">Checkout</div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-4 mx-auto">
          <div className="md:px-24 mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="font-bold my-2">1. Delivery Details</div>
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="name"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      required
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="email"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={UserEmail}
                      onChange={handleChange}
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      required
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="phone"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Phone
                    </label>
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      required
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="pincode"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Pincode
                    </label>
                    <input
                      type="text"
                      id="pincode"
                      name="pincode"
                      value={formData.pincode}
                      onChange={handleChange}
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      required
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="city"
                      className="leading-7 text-sm text-gray-600"
                    >
                      City
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="state"
                      className="leading-7 text-sm text-gray-600"
                    >
                      State
                    </label>
                    <input
                      type="text"
                      id="state"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
               
                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="address"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Address
                    </label>
                    <textarea
                      id="address"
                      name="address"
                      rows={2}
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    ></textarea>
                  </div>
                </div>
              </div>

              <div className="font-bold my-4">2. Payment Details</div>
              <div className="shadow-lg bg-pink-100 w-full px-2">
                <div className="px-8 py-2 mt-2">
                  <ul className="list-decimal">
                    {Object.keys(cart).length === 0 ? (
                      <div className="my-4 font-semibold">
                        Your cart is Empty!
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

                  <div className="font-bold text-md mt-10 mb-5">
                    SubTotal: ₹{subTotal}
                  </div>
                </div>
              </div>

              <div className="p-2 text-center justify-center w-full">
                <button
                  type="submit"
                  className="flex m-auto mt-5 text-center justify-center text-white bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-pink-600 rounded text-lg"
                >
                  Pay: ₹{subTotal}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Checkout;
