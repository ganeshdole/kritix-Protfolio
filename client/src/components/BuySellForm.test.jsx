import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it, expect, beforeEach, vi } from "vitest";
import BuySellForm from "./BuySellForm";
import Store from "../context/Store/Store";

// Mock the Store context
const mockAddStock = vi.fn();
const mockAddTransaction = vi.fn();
const mockStoreValue = {
  state: {
    stocks: [],
  },
  storeFunction: {
    addStock: mockAddStock,
    addTransaction: mockAddTransaction,
  },
};

const renderWithContext = (component) => {
  return render(
    <Store.Provider value={mockStoreValue}>{component}</Store.Provider>
  );
};

describe("BuySellForm", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders the form with BUY and SELL buttons", () => {
    renderWithContext(<BuySellForm />);
    expect(screen.getByText("BUY")).toBeInTheDocument();
    expect(screen.getByText("SELL")).toBeInTheDocument();
  });

  it("toggles between BUY and SELL modes", () => {
    renderWithContext(<BuySellForm />);
    const buyButton = screen.getByText("BUY");
    const sellButton = screen.getByText("SELL");
    fireEvent.click(sellButton);
    expect(sellButton).toHaveClass("bg-black");
    expect(buyButton).not.toHaveClass("bg-black");
    fireEvent.click(buyButton);
    expect(buyButton).toHaveClass("bg-black");
    expect(sellButton).not.toHaveClass("bg-black");
  });

  it("shows sector selection only in BUY mode", () => {
    renderWithContext(<BuySellForm />);
    expect(screen.getByLabelText("Select Sector")).toBeInTheDocument();
    fireEvent.click(screen.getByText("SELL"));
    expect(screen.queryByLabelText("Select Sector")).not.toBeInTheDocument();
  });

  it("calculates charges when quantity and price are entered", async () => {
    renderWithContext(<BuySellForm />);
    const quantityInput = screen.getByLabelText("Quantity");
    const priceInput = screen.getByLabelText("Price");
    fireEvent.change(quantityInput, { target: { value: "10" } });
    fireEvent.change(priceInput, { target: { value: "100" } });
    await waitFor(() => {
      expect(screen.getByText(/Tax: ₹/)).toBeInTheDocument();
      expect(screen.getByText(/Brokerage: ₹/)).toBeInTheDocument();
    });
  });

  it("validates form fields and shows error messages", async () => {
    renderWithContext(<BuySellForm />);
    const submitButton = screen.getByText("BUY Stock");
    fireEvent.click(submitButton);
    await waitFor(() => {
      expect(screen.getByText("Symbol is required")).toBeInTheDocument();
      expect(screen.getByText("Price is required")).toBeInTheDocument();
      expect(screen.getByText("Quantity is required")).toBeInTheDocument();
      expect(screen.getByText("Please select a sector")).toBeInTheDocument();
    });
  });

  it("submits the form successfully with valid data", async () => {
    renderWithContext(<BuySellForm />);

    fireEvent.change(screen.getByLabelText("Symbol"), {
      target: { value: "AAPL" },
    });
    fireEvent.change(screen.getByLabelText("Price"), {
      target: { value: "150" },
    });
    fireEvent.change(screen.getByLabelText("Quantity"), {
      target: { value: "10" },
    });
    fireEvent.change(screen.getByLabelText("Select Sector"), {
      target: { value: "Technology" },
    });
    fireEvent.click(screen.getByText("BUY Stock"));
    await waitFor(() => {
      expect(
        screen.getByText("BUY order placed successfully!")
      ).toBeInTheDocument();
      expect(mockAddStock).toHaveBeenCalled();
      expect(mockAddTransaction).toHaveBeenCalled();
    });
  });
});
