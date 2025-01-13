// PurchasePage.js
import React, { useState } from "react";
import { Form, FormGroup, TextInput, Button } from "carbon-components-react";
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
    <main role="main" className="purchase-page"> 
        <h1>Purchase Tickets</h1>
        <Form onSubmit={handleSubmit} aria-labelledby="purchase-form">
          <FormGroup className="form-group">
            <TextInput
              type="text"
              labelText ="Name on Card"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              aria-required="true"
            />
          </FormGroup>

          <FormGroup className="form-group">
            <TextInput
              type="text"
              id="cardNumber"
              name="cardNumber"
              labelText="Card Number"
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
          </FormGroup>

          <FormGroup className="form-row">
            <FormGroup className="form-group">
              <TextInput
                type="text"
                labelText ="Expiry Date"
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
            </FormGroup>

            <FormGroup className="form-group">
              <TextInput
                type="text"
                labelText="CVV"
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
            </FormGroup>
          </FormGroup>

          <Button type="submit" className="buttonPurchase">
            Complete Purchase
          </Button>
        </Form>
    </main>
  );
};

export default PurchasePage;
