import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import FormContainer from "../MyCustomComponents/FormContainer";

function EmailForm() {
  return (
    <FormContainer>
      <form>
        <Form.Group controlId="formBasicPassword">
          <Form.Control size="lg" type="text" placeholder="Enter Your Name" />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Control size="lg" type="email" placeholder="Enter Your Email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Control size="lg" type="text" placeholder="Subject" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Control as="textarea" placeholder="Message" rows="4" />
        </Form.Group>
        <Button variant="info" type="submit" size="lg" block>
          Send Message
        </Button>
      </form>
    </FormContainer>
  );
}

export default EmailForm;
