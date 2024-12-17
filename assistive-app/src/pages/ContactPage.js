import React, { useState } from "react";
import {
  TextInput,
  TextArea,
  Button,
  Form,
  FormGroup,
  Column,
  Grid,
} from "carbon-components-react";
import styles from "../css/ContactPage.css";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <main role="main" className="contact-page">
      <h1>Contact Us</h1>
      <Grid>
        <Column>
          <Form
            onSubmit={handleSubmit}
            aria-labelledby="contact-form-title"
            margin="20px"
          >
            <h2 id="contact-form-title">Get in Touch</h2>

            {/* Name Input */}
            <FormGroup className="form-group">
              <TextInput
                id="name"
                name="name"
                labelText="Name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
                aria-required="true"
              />
            </FormGroup>

            {/* Email Input */}
            <FormGroup className="form-group">
              <TextInput
                id="email"
                name="email"
                labelText="Email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
                aria-required="true"
              />
            </FormGroup>

            {/* Message Textarea */}
            <div margin="20px">
              <FormGroup className="form-group">
                <TextArea
                  id="message"
                  name="message"
                  labelText="Your Message"
                  placeholder="Write your message here"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  aria-required="true"
                />
              </FormGroup>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              kind="primary"
              aria-label="submitButton"
              className="buttonContact"
            >
              Submit
            </Button>
          </Form>
        </Column>
      </Grid>
    </main>
  );
};

export default ContactPage;
