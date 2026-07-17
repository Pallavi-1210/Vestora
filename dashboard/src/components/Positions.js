import React, { useState, useEffect } from "react";
import axios from "axios";

const Positions = () => {
  const [allPositions, setAllPositions] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/allPositions`, {
        withCredentials: true,
      })
      .then((res) => {
        setAllPositions(res.data);
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
      <h3 className="title">Positions ({allPositions.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg.</th>
              <th>LTP</th>
              <th>P&L</th>
              <th>Chg.</th>
            </tr>
          </thead>

          <tbody>
            {allPositions.map((stock, index) => {
              // 🔥 FIX 1: protect undefined values
              const avg = stock.avg ?? 0;
              const price = stock.price ?? 0;
              const qty = stock.qty ?? 0;

              const curValue = price * qty;
              const pnl = curValue - avg * qty;

              const isProfit = pnl >= 0;
              const profClass = isProfit ? "profit" : "loss";
              const dayClass = stock.isLoss ? "loss" : "profit";

              return (
                <tr key={index}>
                  <td>{stock.product}</td>
                  <td>{stock.name}</td>
                  <td>{qty}</td>

                  {/* 🔥 FIX 2: safe toFixed */}
                  <td>{avg.toFixed(2)}</td>
                  <td>{price.toFixed(2)}</td>

                  {/* 🔥 FIX 3: safe pnl */}
                  <td className={profClass}>{pnl.toFixed(2)}</td>

                  <td className={dayClass}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Positions;
