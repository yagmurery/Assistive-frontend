import React, { useState } from "react";
import {
  TextInput,
  Button,
  Form,
  FormGroup,
  DatePicker,
  DatePickerInput,
} from "carbon-components-react";
import "../css/TransportPage.css";
import { useNavigate } from 'react-router-dom';


const TransportPage = () => {
  document.title = "Travel information";

  const [formData, setFormData] = useState({
    startingPoint: "",
  });

  const handleChange = (event) => {
    const { startingPoint, value } = event.target;
    setFormData({ ...formData, [startingPoint]: value });
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {e.preventDefault();
  
    navigate('/traveloptionsresults');

  };

  return (
    <div>
      <main role="main">
        <h1>Travel options</h1>
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
                  required
                  aria-required="true"
                  onChange={handleChange}
                  className = "startinput"
                />
              </FormGroup>

            <FormGroup className="form-group">
              <DatePicker dateFormat='d/m/Y' datePickerType="range">
                    <DatePickerInput required aria-required="true" id="date-picker-input-id-start" placeholder="dd/mm/yyyy" labelText="Start date" size="md" />
                    <DatePickerInput required aria-required="true" id="date-picker-input-id-finish" placeholder="dd/mm/yyyy" labelText="End date" size="md" />
              </DatePicker>
            </FormGroup>

              <FormGroup className = "form-group">
                <Button
                type="submit"
                kind="primary"
                aria-label="submitButton"
                className="button"
              >
                Show travel options
              </Button>
              </FormGroup>
              
            </Form>
      </main>
    </div>
  );
};

export default TransportPage;