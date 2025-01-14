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
    alert('The message has been successfully sent!');
  };

  return (
    <div>
      <main role="main" className="contact-page">
        <h1>Contact Us</h1>
            <Form
              onSubmit={handleSubmit}
              aria-labelledby="contact-form-title"
              margin="20px"
            >
              <h2>Get in Touch</h2>

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

              <Button
                type="submit"
                kind="primary"
                aria-label="submitButton"
                className="button"
              >
                Submit
              </Button>
            </Form>
      </main>
    </div>
  );
};

export default ContactPage;
