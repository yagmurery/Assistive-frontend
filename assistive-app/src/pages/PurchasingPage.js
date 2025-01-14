// PurchasePage.js
import React, { useState } from "react";
import { Form, FormGroup, TextInput, Button } from "carbon-components-react";
import { useNavigate } from 'react-router-dom';

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

  const navigate = useNavigate();

  const handleSubmit = (e) => {e.preventDefault();

    alert("Purchase completed successfully!");
  
    navigate('/');

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
              placeholder="Enter the name on the card"
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
              placeholder="Enter the card number"
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
                placeholder = "Enter the cvv"
              />
            </FormGroup>
          </FormGroup>

          <Button type="submit">
            Pay now
          </Button>
        </Form>
    </main>
  );
};

export default PurchasePage;
