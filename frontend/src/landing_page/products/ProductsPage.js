import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import Universe from "./Universe";

function ProductsPage() {
  return (
    <>
      <Hero />

      {/* Portfolio Tracking */}
      <LeftSection
        icon="fa-solid fa-chart-pie"
        productName="Portfolio Tracking"
        productDescription="Track all your investments from a single dashboard. View holdings, monitor portfolio value, and keep your investment summary organized."
        features={[
          "Complete holdings overview",
          "Portfolio allocation",
          "Current investment value",
          "Performance summary",
        ]}
        visualRows={[
          {
            icon: "fa-solid fa-building-columns",
            name: "RELIANCE",
            sub: "10 Shares",
            val: "+5.2%",
          },
          {
            icon: "fa-solid fa-building-columns",
            name: "INFY",
            sub: "25 Shares",
            val: "+12.1%",
          },
          {
            icon: "fa-solid fa-building-columns",
            name: "TCS",
            sub: "5 Shares",
            val: "-2.3%",
            neg: true,
          },
          {
            icon: "fa-solid fa-building-columns",
            name: "HDFC",
            sub: "8 Shares",
            val: "+3.7%",
          },
        ]}
      />

      {/* Order History */}
      <LeftSection
        icon="fa-solid fa-receipt"
        productName="Order History"
        productDescription="Review all buy and sell transactions from one place. Keep track of your investment activity with a clear and organized order history."
        features={[
          "Buy & Sell records",
          "Order history",
          "Execution status",
          "Transaction timeline",
        ]}
        visualRows={[
          {
            icon: "fa-solid fa-arrow-up-right-dots",
            name: "BUY RELIANCE",
            sub: "10 Shares",
            val: "Completed",
          },
          {
            icon: "fa-solid fa-arrow-down",
            name: "SELL TCS",
            sub: "5 Shares",
            val: "Completed",
          },
          {
            icon: "fa-solid fa-arrow-up-right-dots",
            name: "BUY INFY",
            sub: "25 Shares",
            val: "Completed",
          },
          {
            icon: "fa-solid fa-arrow-up-right-dots",
            name: "BUY HDFC",
            sub: "8 Shares",
            val: "Completed",
          },
        ]}
      />

      {/* Portfolio Analytics */}
      <LeftSection
        icon="fa-solid fa-chart-line"
        productName="Portfolio Analytics"
        productDescription="Analyze your portfolio using key investment metrics and gain insights into your overall investment performance."
        features={[
          "Portfolio value",
          "Overall returns",
          "Holdings summary",
          "Recent activity",
        ]}
        visualRows={[
          {
            icon: "fa-solid fa-wallet",
            name: "Portfolio Value",
            sub: "",
            val: "₹12.4L",
          },
          {
            icon: "fa-solid fa-chart-line",
            name: "Overall Return",
            sub: "",
            val: "+8.4%",
          },
          {
            icon: "fa-solid fa-layer-group",
            name: "Total Holdings",
            sub: "",
            val: "12 Stocks",
          },
          {
            icon: "fa-solid fa-clock-rotate-left",
            name: "Last Updated",
            sub: "",
            val: "Today",
          },
        ]}
      />

      <Universe />
    </>
  );
}

export default ProductsPage;
