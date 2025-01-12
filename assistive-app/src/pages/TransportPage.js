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
  Row
} from "carbon-components-react";
import styles from "../css/TransportPage.css";

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
      {/* Navigation Bar */}
      <nav aria-label="Main navigation" className="navigation-bar">
        <ul className="navigation-list">
          <li>
            <Button kind="secondary" as="a" href="/home" aria-label="Home page">
              Home
            </Button>
          </li>
          <li>
            <Button
              kind="secondary"
              as="a"
              href="/about"
              aria-label="About page"
              margin="100px"
            >
              About
            </Button>
          </li>
          <li>
            <Button
              kind="secondary"
              as="a"
              href="/contact"
              aria-label="Contact page"
            >
              Contact
            </Button>
          </li>
        </ul>
      </nav>

      <main role="main" className="transport-page">
        <h1>Travel Options</h1>
        <Grid>
          <Column>
            <Form
              onSubmit={handleSubmit}
              aria-labelledby="transport-form-title"
              margin="20px"
            >
              <p id="transport-form-title">You can view different public transport options here. </p>
                <p> Please indicate the bus or train station where you would like to start your journey.</p>

              {/* Name Input */}
              <FormGroup className="form-group">
                <TextInput
                  id="startingPoint"
                  name="startingPoint"
                  labelText="Starting Point"
                  placeholder="Enter where you would like to start your journey"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  aria-required="true"
                />
              </FormGroup>

            <FormGroup className="datepicker-group">
              <DatePicker className ="datepicker" datePickerType="range">
                    <DatePickerInput  className= "datepicker-input" id="date-picker-input-id-start"  placeholder="mm/dd/yyyy" labelText="Start date" size="md" />
                    <DatePickerInput className= "datepicker-input" id="date-picker-input-id-finish" placeholder="mm/dd/yyyy" labelText="End date" size="md" />
              </DatePicker>
            </FormGroup>

              {/* Submit Button */}
              <Button
                type="submit"
                kind="primary"
                aria-label="submitButton"
                className="buttonTransport"
                href="/transportresults"
              >
                Show Transport Options
              </Button>
            </Form>
          </Column>
        </Grid>
      </main>
    </div>
  );
};

export default TransportPage;