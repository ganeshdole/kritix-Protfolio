import React, { useState, useCallback, useMemo } from "react";

const BuySellForm = () => {
  const [selected, setSelected] = useState("BUY");
  const [formData, setFormData] = useState({
    symbol: "",
    quantity: "",
    price: "",
    sector: "",
  });
  const [errors, setErrors] = useState({});

  const [calculatedCharges, setCalculatedCharges] = useState({
    tax: 0,
    brokerage: 0,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState(null);

  const calculateCharges = useCallback((quantity, price) => {
    const totalPrice = Number(quantity) * Number(price);
    const STT = (0.1 / 100) * totalPrice;
    const TransactionCharges = (0.00325 / 100) * totalPrice;
    const SEBICharges = (10 / 10000000) * totalPrice;
    const StampDuty = (0.015 / 100) * totalPrice;
    const totalTax = STT + TransactionCharges + SEBICharges + StampDuty;
    return { tax: totalTax.toFixed(2), brokerage: "0.00" };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  useMemo(() => {
    if (formData.quantity && formData.price) {
      const charges = calculateCharges(formData.quantity, formData.price);
      setCalculatedCharges(charges);
    }
  }, [formData.quantity, formData.price, calculateCharges]);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.symbol.trim()) newErrors.symbol = "Symbol is required";
    if (!formData.price || Number(formData.price) <= 0)
      newErrors.price = "Valid price is required";
    if (!formData.quantity || Number(formData.quantity) <= 0)
      newErrors.quantity = "Valid quantity is required";
    if (!formData.sector) newErrors.sector = "Please select a sector";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(formData);
    setSubmitMessage({
      type: "success",
      text: `${selected} order placed successfully!`,
    });
    setIsSubmitting(false);
    setFormData({ symbol: "", quantity: "", price: "", sector: "" });
  };

  const buttons = ["BUY", "SELL"];

  const buttonClass = (btn) => `
    border-2 border-solid border-gray-400
    text-center py-2 rounded-md
    text-xl font-medium
    ${
      selected === btn
        ? "bg-black hover:bg-slate-900 text-white"
        : "text-black hover:bg-slate-100"
    }
  `;

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto", padding: "1rem" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "0.5rem",
          marginBottom: "1rem",
        }}
      >
        {buttons.map((btn) => (
          <button
            key={btn}
            onClick={() => setSelected(btn)}
            className={buttonClass(btn)}
          >
            {btn}
          </button>
        ))}
      </div>

      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
      >
        <div>
          <label
            htmlFor="symbol"
            style={{
              display: "block",
              fontWeight: "bold",
              fontSize: "0.875rem",
              marginBottom: "0.25rem",
            }}
          >
            Symbol
          </label>
          <input
            id="symbol"
            name="symbol"
            value={formData.symbol}
            onChange={handleInputChange}
            style={{
              width: "100%",
              padding: "0.5rem",
              border: "2px solid #ccc",
              borderRadius: "0.25rem",
            }}
          />
          {errors.symbol && (
            <p
              style={{
                color: "red",
                fontSize: "0.75rem",
                marginTop: "0.25rem",
              }}
            >
              {errors.symbol}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="price"
            style={{
              display: "block",
              fontWeight: "bold",
              fontSize: "0.875rem",
              marginBottom: "0.25rem",
            }}
          >
            Price
          </label>
          <input
            id="price"
            name="price"
            type="number"
            value={formData.price}
            onChange={handleInputChange}
            style={{
              width: "100%",
              padding: "0.5rem",
              border: "2px solid #ccc",
              borderRadius: "0.25rem",
            }}
          />
          {errors.price && (
            <p
              style={{
                color: "red",
                fontSize: "0.75rem",
                marginTop: "0.25rem",
              }}
            >
              {errors.price}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="quantity"
            style={{
              display: "block",
              fontWeight: "bold",
              fontSize: "0.875rem",
              marginBottom: "0.25rem",
            }}
          >
            Quantity
          </label>
          <input
            id="quantity"
            name="quantity"
            type="number"
            value={formData.quantity}
            onChange={handleInputChange}
            style={{
              width: "100%",
              padding: "0.5rem",
              border: "2px solid #ccc",
              borderRadius: "0.25rem",
            }}
          />
          {errors.quantity && (
            <p
              style={{
                color: "red",
                fontSize: "0.75rem",
                marginTop: "0.25rem",
              }}
            >
              {errors.quantity}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="sector"
            style={{
              display: "block",
              fontWeight: "bold",
              fontSize: "0.875rem",
              marginBottom: "0.25rem",
            }}
          >
            Select Sector
          </label>
          <select
            id="sector"
            name="sector"
            value={formData.sector}
            onChange={handleInputChange}
            style={{
              width: "100%",
              padding: "0.5rem",
              border: "2px solid #ccc",
              borderRadius: "0.25rem",
            }}
          >
            <option value="">Please Select Sector</option>
            <option value="Technology">Technology</option>
            <option value="Healthcare">Healthcare</option>
            <option value="Finance">Finance</option>
            <option value="Consumer Goods">Consumer Goods</option>
            <option value="Energy">Energy</option>
            <option value="Industrials">Industrials</option>
            <option value="Materials">Materials</option>
            <option value="Telecommunications">Telecommunications</option>
            <option value="Utilities">Utilities</option>
            <option value="Real Estate">Real Estate</option>
            <option value="Other">Other</option>
          </select>
          {errors.sector && (
            <p
              style={{
                color: "red",
                fontSize: "0.75rem",
                marginTop: "0.25rem",
              }}
            >
              {errors.sector}
            </p>
          )}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: "0.875rem",
          }}
        >
          <span>Tax: ₹{calculatedCharges.tax}</span>
          <span>Brokerage: ₹{calculatedCharges.brokerage}</span>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          style={{
            width: "100%",
            padding: "0.5rem",
            fontSize: "1.25rem",
            fontWeight: "500",
            color: "white",
            backgroundColor: isSubmitting ? "#ccc" : "black",
            border: "none",
            borderRadius: "0.25rem",
            cursor: isSubmitting ? "not-allowed" : "pointer",
          }}
        >
          {isSubmitting ? "Submitting..." : `${selected} Stock`}
        </button>
      </form>

      {submitMessage && (
        <div
          style={{
            marginTop: "1rem",
            padding: "0.75rem",
            borderRadius: "0.25rem",
            backgroundColor:
              submitMessage.type === "success" ? "#d4edda" : "#f8d7da",
            color: submitMessage.type === "success" ? "#155724" : "#721c24",
          }}
        >
          <p style={{ margin: 0 }}>{submitMessage.text}</p>
        </div>
      )}
    </div>
  );
};

export default BuySellForm;
