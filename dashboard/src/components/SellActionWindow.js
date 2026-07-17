import React, { useState, useContext } from "react";
import axios from "axios";

import GeneralContext from "./GeneralContext";

import { Snackbar, Alert, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import "./SellActionWindow.css";

const SellActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState("");

  // for pop up
  const [toast, setToast] = useState({
    open: false,
    message: "",
    severity: "info",
  });

  const { closeSellWindow } = useContext(GeneralContext);

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
        closeSellWindow();
      }, 1200);
    }
  };

  // 🔥 SELL CLICK
  const handleSellClick = async () => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/newOrderSell`,
        {
          name: uid,
          qty: stockQuantity,
          price: stockPrice,
          mode: "SELL",
        },
        {
          withCredentials: true,
        },
      );

      const msg = res.data;

      if (
        msg ===
        "Sell order placed successfully! Your portfolio has been updated."
      ) {
        showToast(msg, "success", true);
      } else if (
        msg === "Insufficient shares available to complete this sell order."
      ) {
        showToast(msg, "error");
      } else if (msg === "No holdings found for this stock.") {
        showToast(msg, "error");
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
    closeSellWindow();
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      {/* INPUTS */}
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              value={stockQuantity}
              onChange={(e) => setStockQuantity(e.target.value)}
            />
          </fieldset>

          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              step="0.05"
              value={stockPrice}
              onChange={(e) => setStockPrice(e.target.value)}
            />
          </fieldset>
        </div>
      </div>

      {/* BUTTONS */}
      <div className="buttons">
        <button className="btn btn-blue" onClick={handleSellClick}>
          Sell
        </button>

        <button className="btn btn-grey" onClick={handleCancelClick}>
          Cancel
        </button>
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

export default SellActionWindow;
