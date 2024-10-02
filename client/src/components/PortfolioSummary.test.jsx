import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import PortfolioSummary from "./PortfolioSummary";

describe("PortfolioSummary", () => {
  it("renders the PortfolioSummary component", () => {
    render(<PortfolioSummary />);
    expect(screen.getByText("Total Value")).toBeInTheDocument();
    expect(screen.getByText("Total Gain/Loss")).toBeInTheDocument();
    expect(screen.getByText("Total Gain/Loss %")).toBeInTheDocument();
    expect(screen.getByText("Number of Holdings")).toBeInTheDocument();
  });

  it("applies correct color classes", () => {
    render(<PortfolioSummary />);
    const gainLossElements = screen.getAllByText(/373.00|3.4/);
    gainLossElements.forEach((element) => {
      expect(element.closest("span")).toHaveClass("text-green-500");
    });
  });
});

describe("SummaryCard", () => {
  it("renders a card with title and value", () => {
    render(<PortfolioSummary />);
    const cardTitles = [
      "Total Value",
      "Total Gain/Loss",
      "Total Gain/Loss %",
      "Number of Holdings",
    ];
    cardTitles.forEach((title) => {
      const titleElement = screen.getByText(title);
      expect(titleElement).toBeInTheDocument();
      expect(titleElement.tagName).toBe("P");
      expect(titleElement).toHaveClass("font-medium");
    });
  });
});
