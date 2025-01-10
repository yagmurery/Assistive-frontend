// PurchasePage.js
import React, { useState } from "react";
import "../css/PurchasePage.css";

const PurchasePage = () => {
  const [formData, setFormData] = useState({
    name: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    alert("Purchase completed successfully!");
  };

  return (
    <div className="purchase-container">
      <h1>Purchase Tickets</h1>
      <form onSubmit={handleSubmit} aria-labelledby="purchase-form">
        <div className="form-group">
          <label htmlFor="name">Name on Card</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            aria-required="true"
          />
        </div>

        <div className="form-group">
          <label htmlFor="cardNumber">Card Number</label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            maxLength="16"
            pattern="\d{16}"
            title="Card number must be 16 digits"
            required
            aria-required="true"
            aria-describedby="cardHelp"
          />
          <small id="cardHelp" className="warning">
            Enter a 16-digit card number.
          </small>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="expiry">Expiry Date</label>
            <input
              type="text"
              id="expiry"
              name="expiry"
              value={formData.expiry}
              onChange={handleChange}
              pattern="\d{2}/\d{2}"
              title="Expiry date must be in MM/YY format"
              placeholder="MM/YY"
              required
              aria-required="true"
            />
          </div>

          <div className="form-group">
            <label htmlFor="cvv">CVV</label>
            <input
              type="text"
              id="cvv"
              name="cvv"
              value={formData.cvv}
              onChange={handleChange}
              maxLength="3"
              pattern="\d{3}"
              title="CVV must be 3 digits"
              required
              aria-required="true"
            />
          </div>
        </div>

        <button type="submit" className="submit-button">
          Complete Purchase
        </button>
      </form>
    </div>
  );
};

export default PurchasePage;
