import React, { useState, useEffect } from "react";
import axios from "axios";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/allOrders`, {
        withCredentials: true,
      })
      .then((res) => {
        setAllOrders(res.data);
      })
      .catch((err) => {
        if (err.response?.status === 401) {
          alert("Please login first");
          window.location.replace(
            `${process.env.REACT_APP_FRONTEND_URL}/login`,
          );
        } else {
          console.error(err);
          alert("Something went wrong");
        }
      });
  }, []);

  return (
    <>
      <h3 className="title">Orders ({allOrders.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Price</th>
              <th>Type</th>
            </tr>
          </thead>

          <tbody>
            {/* now allOrders conatin all order {name:tcs, wipro etcc}*/}
            {allOrders.map((order, index) => (
              <tr key={index}>
                <td>{order.name}</td>
                <td>{order.qty}</td>
                <td>{Number(order.price).toFixed(2)}</td>
                <td>
                  <span
                    className={
                      order.mode?.toUpperCase() === "BUY"
                        ? "badge-buy"
                        : "badge-sell"
                    }
                  >
                    {order.mode}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Orders;
