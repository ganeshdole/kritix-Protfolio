import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";
import CurrentHoldings from "./CurrentHoldings";
import Store from "../context/Store/Store";

const renderWithContext = (component, contextValue) => {
  return render(
    <Store.Provider value={contextValue}>{component}</Store.Provider>
  );
};

describe("CurrentHoldings", () => {
  it("renders the no stocks message when there are no stocks", () => {
    const contextValue = { state: { stocks: [] } };
    renderWithContext(<CurrentHoldings />, contextValue);

    expect(screen.getByText("No Stocks Found")).toBeInTheDocument();
    expect(
      screen.getByText(
        "You haven't added any stocks to your portfolio yet. Start by adding some stocks to track your investments."
      )
    ).toBeInTheDocument();
  });

  it("renders the table with stock data when stocks are present", () => {
    const mockStocks = [
      {
        symbol: "AAPL",
        quantity: 10,
        avgPrice: 150,
        totalvalue: 1500,
        sector: "Technology",
      },
      {
        symbol: "GOOGL",
        quantity: 5,
        avgPrice: 2000,
        totalvalue: 10000,
        sector: "Technology",
      },
    ];
    const contextValue = { state: { stocks: mockStocks } };
    renderWithContext(<CurrentHoldings />, contextValue);

    expect(screen.getByText("Symbol")).toBeInTheDocument();
    expect(screen.getByText("Quantity")).toBeInTheDocument();
    expect(screen.getByText("Avg Price")).toBeInTheDocument();
    expect(screen.getByText("Current Price")).toBeInTheDocument();
    expect(screen.getByText("Total Value")).toBeInTheDocument();
    expect(screen.getByText("Gain/Loss(%)")).toBeInTheDocument();
    expect(screen.getByText("Sector")).toBeInTheDocument();
    expect(screen.getByText("Actions")).toBeInTheDocument();

    expect(screen.getByText("AAPL")).toBeInTheDocument();
    expect(screen.getByText("10")).toBeInTheDocument();
    expect(screen.getByText("₹150")).toBeInTheDocument();
    expect(screen.getByText("₹1500.00")).toBeInTheDocument();

    expect(screen.getByText("GOOGL")).toBeInTheDocument();
    expect(screen.getByText("5")).toBeInTheDocument();
    expect(screen.getByText("₹2000")).toBeInTheDocument();
    expect(screen.getByText("₹10000.00")).toBeInTheDocument();
  });

  it('displays "coming soon" for Current Price and Gain/Loss(%)', () => {
    const mockStocks = [
      {
        symbol: "AAPL",
        quantity: 10,
        avgPrice: 150,
        totalvalue: 1500,
        sector: "Technology",
      },
    ];
    const contextValue = { state: { stocks: mockStocks } };
    renderWithContext(<CurrentHoldings />, contextValue);

    expect(screen.getAllByText("coming soon")).toHaveLength(2);
  });
});
