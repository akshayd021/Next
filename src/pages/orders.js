import React from "react";
import Order from "../../models/Order";
import mongoose from "mongoose";

const Orders = ({ orders }) => {
  return (
    <div className="container px-20 my-10 mx-auto">
      <div className="font-bold text-xl"> Orders</div>

      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Color
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
            </tr>
          </thead>
          {/* <tbody>
            {orders.map((order) => (
              <tr
                key={order._id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {order.productName}
                </td>
                <td className="px-6 py-4">{order.color}</td>
                <td className="px-6 py-4">{order.category}</td>
                <td className="px-6 py-4">${order.price}</td>
              </tr>
            ))}
          </tbody> */}
        </table>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  if (mongoose.connection.readyState !== 1) {
    await mongoose.connect(
      "mongodb+srv://akshay2004vbi:Akshay@cluster0.roeeaxk.mongodb.net/"
    );
  }

  let orders = await Order.find({});

  return {
    props: {
      orders: JSON.parse(JSON.stringify(orders)), // Convert orders to plain JSON object
    },
  };
}

export default Orders;
