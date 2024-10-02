import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";
import Store from "../context/Store/Store";
import TransactionHistory from "./TransactionHistory";

const renderWithContext = (component, contextValue) => {
  return render(
    <Store.Provider value={contextValue}>{component}</Store.Provider>
  );
};

describe("Transaction History", () => {
  it("renders the no transaction message when there are no transaction", () => {
    const contextValue = { state: { transactions: [] } };

    renderWithContext(<TransactionHistory />, contextValue);

    expect(screen.getByText("No Transactions Found")).toBeInTheDocument();
  });

  it("renders the table with transactions data when transactions are present", () => {
    const mockTransactions = [
      {
        date: "2023-05-01",
        type: "BUY",
        symbol: "AAPL",
        quantity: 10,
        price: 150,
        charges: 5,
      },
    ];
    const contextValue = { state: { transactions: mockTransactions } };

    renderWithContext(<TransactionHistory />, contextValue);

    expect(screen.getByText("Date")).toBeInTheDocument();
    expect(screen.getByText("Type")).toBeInTheDocument();
    expect(screen.getByText("Symbol")).toBeInTheDocument();
    expect(screen.getByText("Quantity")).toBeInTheDocument();
    expect(screen.getByText("Price")).toBeInTheDocument();
    expect(screen.getByText("Charges")).toBeInTheDocument();
    expect(screen.getByText("Total")).toBeInTheDocument();

    expect(screen.getByText("2023-05-01")).toBeInTheDocument();
    expect(screen.getByText("BUY")).toBeInTheDocument();
    expect(screen.getByText("AAPL")).toBeInTheDocument();
    expect(screen.getByText("10")).toBeInTheDocument();
    expect(screen.getByText("₹150")).toBeInTheDocument();
    expect(screen.getByText("₹5.00")).toBeInTheDocument();
  });
});
