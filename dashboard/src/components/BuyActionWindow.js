import React, { useState, useContext } from "react";

import axios from "axios";

import GeneralContext from "./GeneralContext";

import { Snackbar, Alert, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState();

  const [toast, setToast] = useState({
    open: false,
    message: "",
    severity: "info",
  });

  // ✅ Correct way to get context functions
  const { closeBuyWindow } = useContext(GeneralContext);

  // 🔥 CLOSE POPUP
  const handleClose = () => {
    setToast({ ...toast, open: false });
  };

  // 🔥 SHOW TOAST
  const showToast = (msg, severity = "info", closeWindow = false) => {
    setToast({
      open: true,
      message: msg,
      severity,
    });

    if (closeWindow) {
      setTimeout(() => {
        closeBuyWindow();
      }, 1200);
    }
  };

  const handleBuyClick = async () => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/newOrderBuy`,
        {
          name: uid,
          qty: stockQuantity,
          price: stockPrice,
          mode: "BUY",
        },
        {
          withCredentials: true,
        },
      );

      const msg = res.data;

      if (
        msg ===
        "Buy order placed successfully! Your portfolio has been updated."
      ) {
        showToast(msg, "success", true);
      } else if (msg === "Quantity and price must be greater than zero.") {
        showToast(msg, "error");
      } else {
        showToast(msg, "error");
      }
    } catch (err) {
      if (err.response?.status === 401) {
        alert("Please login first");
        window.location.replace(`${process.env.REACT_APP_FRONTEND_URL}/login`);
      } else {
        showToast("Server Error", "error");
      }
    }
  };
  const handleCancelClick = () => {
    closeBuyWindow(); // ✅ correct
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
          <button className="btn btn-blue" onClick={handleBuyClick}>
            Buyyy
          </button>

          <button className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </button>
        </div>{" "}
      </div>
      {/* 🔥 SNACKBAR (PROPER AUTO + MANUAL CLOSE) */}
      <Snackbar
        open={toast.open}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          severity={toast.severity}
          onClose={handleClose}
          action={
            <IconButton size="small" onClick={handleClose}>
              <CloseIcon fontSize="small" />
            </IconButton>
          }
        >
          {toast.message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default BuyActionWindow;
