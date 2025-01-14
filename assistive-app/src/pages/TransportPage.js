import React, { useState } from "react";
import {
  TextInput,
  Button,
  Form,
  FormGroup,
  Column,
  Grid,
  DatePicker,
  DatePickerInput,
} from "carbon-components-react";
import "../css/TransportPage.css";

const TransportPage = () => {
  const [formData, setFormData] = useState({
    startingPoint: "",
  });

  const handleChange = (event) => {
    const { startingPoint, value } = event.target;
    setFormData({ ...formData, [startingPoint]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <div>
      <main role="main">
        <h1>Travel Options</h1>
            <Form
              onSubmit={handleSubmit}
              aria-labelledby="transport-form-title"
            >
              <div className="description">
                You can view different public transport options here. 
                <br />
                Please indicate the bus or train station where you would like to start your journey.
              </div>

              <FormGroup className="form-group">
                <TextInput
                  id="startingPoint"
                  name="startingPoint"
                  labelText="Starting Point"
                  placeholder="Enter where you would like to start your journey"
                  value={formData.name}
                  onChange={handleChange}
                  className = "startinput"
                />
              </FormGroup>

            <FormGroup className="form-group">
              <DatePicker dateFormat='d/m/Y' datePickerType="range">
                    <DatePickerInput id="date-picker-input-id-start" placeholder="dd/mm/yyyy" labelText="Start date" size="md" />
                    <DatePickerInput id="date-picker-input-id-finish" placeholder="dd/mm/yyyy" labelText="End date" size="md" />
              </DatePicker>
            </FormGroup>

              <FormGroup className = "form-group">
                <Button
                type="submit"
                kind="primary"
                aria-label="submitButton"
                href="/transportresults"
                className="button"
              >
                Show Transport Options
              </Button>
              </FormGroup>
              
            </Form>
      </main>
    </div>
  );
};

export default TransportPage;