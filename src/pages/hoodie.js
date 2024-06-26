import mongoose from "mongoose";
import Link from "next/link";
import React from "react";
import Product from "../../models/Product";

const Hoodie = ({ products }) => {
  return (
    <div>
      <section className="text-gray-600 body-font md:px-20 sm:px-2">
        <div className="container px-5 py-24 mx-auto">
          <div className="md:flex flex-wrap -m-4">
            {Object.keys(products)?.length === 0 && (
              <p className="text-center m-auto">Hoodies are not available!</p>
            )}
            {Object.keys(products)?.map((item, index) => (
              <div key={index} className="lg:w-1/4 md:w-1/2 p-4">
                <Link href={`/product/${products[item]?.slug}`}>
                  <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-md cursor-pointer">
                    <img
                      className="lg:h-60 md:h-60 w-full object-contain object-center"
                      src={products[item]?.img}
                      alt={products[item]?.title}
                    />
                    <div className="p-1 mx-2">
                      <h3 className="tracking-widest text-xs title-font mb-1 text-gray-500">
                        {products[item]?.category}
                      </h3>
                      <h2 className="title-font text-lg font-medium text-gray-900">
                        {products[item]?.title}
                      </h2>
                      <h4 className="title-font text-sm font-medium text-gray-900">
                        {products[item]?.desc}
                      </h4>
                      <p className="">₹{products[item]?.price}</p>
                    </div>
                    <div className="mx-2">
                      {products[item].size.includes("S") && (
                        <span className="border border-gray-300 px-1 mx-1">S</span>
                      )}
                      {products[item].size.includes("M") && (
                        <span className="border border-gray-300 px-1 mx-1">M</span>
                      )}
                      {products[item].size.includes("L") && (
                        <span className="border border-gray-300 px-1 mx-1">L</span>
                      )}
                      {products[item].size.includes("XL") && (
                        <span className="border border-gray-300 px-1 mx-1">XL</span>
                      )}
                      {products[item].size.includes("XXL") && (
                        <span className="border border-gray-300 px-1 mx-1">XXL</span>
                      )}
                    </div>
                    <div className="mx-2 mt-1">
                      {products[item].color.includes("red") && (
                        <button className="border-2 border-gray-300 ml-1 bg-red-700 rounded-full w-6 h-6 focus:outline-none"></button>
                      )}
                      {products[item].color.includes("pink") && (
                        <button className="border-2 border-gray-300 ml-1 bg-pink-700 rounded-full w-6 h-6 focus:outline-none"></button>
                      )}
                      {products[item].color.includes("green") && (
                        <button className="border-2 border-gray-300 ml-1 bg-green-700 rounded-full w-6 h-6 focus:outline-none"></button>
                      )}
                      {products[item].color.includes("yellow") && (
                        <button className="border-2 border-gray-300 ml-1 bg-yellow-500 rounded-full w-6 h-6 focus:outline-none"></button>
                      )}
                      {products[item].color.includes("black") && (
                        <button className="border-2 border-gray-300 ml-1 bg-black rounded-full w-6 h-6 focus:outline-none"></button>
                      )}
                      {products[item].color.includes("purple") && (
                        <button className="border-2 border-gray-300 ml-1 bg-purple-700 rounded-full w-6 h-6 focus:outline-none"></button>
                      )}
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export async function getServerSideProps() {
  if (mongoose.connection.readyState !== 1) {
    await mongoose.connect(
      "mongodb+srv://akshay2004vbi:Akshay@cluster0.roeeaxk.mongodb.net/"
    );
  }

  const products = await Product.find({ category: "hood" });
  let hood = {};
  
  for (let item of products) {
    if (item.title in hood) {
      if (
        !hood[item.title].color.includes(item.color) &&
        item.avalableQty > 0
      ) {
        hood[item.title].color.push(item.color);
      }
      if (
        !hood[item.title].size.includes(item.size) &&
        item.avalableQty > 0
      ) {
        hood[item.title].size.push(item.size);
      }
    } else {
      hood[item.title] = JSON.parse(JSON.stringify(item));
      if (item.avalableQty > 0) {
        hood[item.title].color = [item.color];
        hood[item.title].size = [item.size];
      }
    }
  }

  return {
    props: {
      products: JSON.parse(JSON.stringify(hood)),
    },
  };
}

export default Hoodie;
