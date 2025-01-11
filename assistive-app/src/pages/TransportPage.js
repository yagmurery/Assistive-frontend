import React, { useState } from "react";
import { Tile, Button, TextInput, DatePicker, DatePickerInput } from "carbon-components-react";
import "../css/TransportPage.css";

const TransportPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        startingPoint: "",
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

      return(
      <Tile className="transport-tile">
        <h1>Purchase Transport Ticket to the Festival</h1>
        <form onSubmit={handleSubmit} aria-labelledby="transport-form">

            <Tile className = "form-group">
                <label htmlFor = "startingPoint"> Starting Point </label>
                <TextInput
                type="text"
                id="startingPoint"
                name="startingPoint"
                value={formData.name}
                onChange={handleChange}
                required
                aria-required="true"
            />
            </Tile>

            <Tile className="form-group">
                <DatePicker class ="form-datepicker" datePickerType="single">
                    <DatePickerInput  placeholder="dd/mm/yyyy" dateFormat = 'd/m/Y'  labelText="Date" id="date-picker-single"/>
                </DatePicker>
            </Tile>



            <Tile className="form-group">
                <label htmlFor="name">Name</label>
                <TextInput
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    aria-required="true"
                />
            </Tile>


            <Tile className="form-group">
                <label htmlFor="cardNumber">Card Number</label>
                <TextInput
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
            </Tile>

            <Tile className="form-row">
                <Tile className="form-group">
                    <label htmlFor="expiry">Expiry Date</label>
                    <TextInput
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
                </Tile>

                <Tile className="form-group">
                    <label htmlFor="cvv">CVV</label>
                    <TextInput
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
                </Tile>
        </Tile>

        <Button kind="primary" aria-label = {"Purchase Transport Ticket"} className="submit-button">
          Purchase Transport Ticket
        </Button>
      </form>
    </Tile>
      )
}

export default TransportPage;