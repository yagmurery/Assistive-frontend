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

            <FormGroup className="datepicker-group">
              <DatePicker className ="datepicker" dateFormat='d/m/Y' datePickerType="range">
                    <DatePickerInput  className= "datepicker-input" id="date-picker-input-id-start" placeholder="dd/mm/yyyy" labelText="Start date" size="md" />
                    <DatePickerInput className= "datepicker-input" id="date-picker-input-id-finish" placeholder="dd/mm/yyyy" labelText="End date" size="md" />
              </DatePicker>
            </FormGroup>

              {/* Submit Button */}
              <FormGroup className = "form-group">
                <Button
                type="submit"
                kind="primary"
                aria-label="submitButton"
                className="buttonTransport"
                href="/transportresults"
              >
                Show Transport Options
              </Button>
              </FormGroup>
              
            </Form>
          </Column>
        </Grid>
      </main>
    </div>
  );
};

export default TransportPage;