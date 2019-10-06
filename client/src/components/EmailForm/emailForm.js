import React, { useState } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import validator from 'email-validator';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheck,
  faExclamationCircle,
} from '@fortawesome/free-solid-svg-icons';

import FormContainer from '../MyCustomComponents/FormContainer';

function EmailForm() {
  // For Pop Up Info
  const [show, setShow] = useState(false);
  const [alertMessage, setAlertMessage] = useState(null);
  const [alertCategory, setAlertCategory] = useState(false);
  const handleClose = () => setShow(false);

  // For Form Fields Validation
  const [validated, setValidated] = useState(0);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  // const [serverError, setserverError] = useState(false);

  const handleShow = alertType => {
    if (alertType === 'noError') {
      setAlertMessage('Your Message Sent Successfully!');
      setAlertCategory(true);
    } else if (alertType === 'clientSideError') {
      setAlertMessage(
        'Make Sure You Fill All The Required Information And Then Try Again!',
      );
      setAlertCategory(false);
      // setAlertCategory(false);
    } else if (alertType === 'serverSideError') {
      setAlertMessage('Oops!, Something Went Wrong! Please Try Again.');
      setAlertCategory(false);
    }
    setShow(true);
  };

  const resetInputVals = () => {
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    // Check User info is valid
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(1);
      popUpStateMessage('clientSideError');
      return;
    }

    const messageData = {
      senderName: name.trim(),
      senderemail: email.trim(),
      senderSubject: subject.trim(),
      senderMessage: message.trim(),
    };

    if (
      messageData.senderemail.length === 0 ||
      messageData.senderMessage.length === 0
    ) {
      return setAlertCategory(false);
    }

    // Email Validation
    if (!validator.validate(messageData.senderemail)) {
      return setValidEmail(true);
    }

    // send message data to server
    axios
      .post('/api/email', messageData)
      .then(isMessageSent => {
        const MessageSent = isMessageSent.data;
        // inform user that her message has been sent successfully
        if (MessageSent) {
          // is required fields filled in?
          popUpStateMessage('noError');
          // reset input values
          resetInputVals();
        } else {
          // if required fields not filled in inform user to fill required fields
          popUpStateMessage('clientSideError');
        }
      })
      .catch(err => {
        // inform user that her message has been sent unsuccessfully due to a server
        // request error, please try again
        popUpStateMessage('serverSideError');
      });
  };

  const popUpStateMessage = messageType => {
    switch (messageType) {
      case 'noError':
        handleShow('noError');
        break;
      case 'clientSideError':
        handleShow('clientSideError');
        break;

      case 'serverSideError':
        handleShow('serverSideError');
        break;
      default:
        break;
    }
  };

  const checkEmailIsValid = e => {
    // Email Validation
    setEmail(e.target.value);
    if (!validator.validate(e.target.value)) {
      return setValidEmail(true);
    } else {
      return setValidEmail(false);
    }
  };

  return (
    <FormContainer>
      <form
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
        method="POST"
      >
        <Form.Group controlId="formBasicPassword">
          <Form.Control
            size="lg"
            type="text"
            placeholder="Enter Your Name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Control
            required
            size="lg"
            type="email"
            placeholder="* Enter Your Email"
            value={email}
            onChange={e => checkEmailIsValid(e)}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Text className="text-muted">
            {validEmail && (
              <div style={{ color: 'red' }}>Fill in a valid email address</div>
            )}
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Control
            size="lg"
            type="text"
            placeholder="Subject"
            value={subject}
            onChange={e => setSubject(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Control
            required
            as="textarea"
            placeholder="* Enter Your Message"
            rows="4"
            value={message}
            onChange={e => setMessage(e.target.value)}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Button
          variant="info"
          type="submit"
          size="lg"
          block
          onClick={handleShow}
        >
          Send Message
        </Button>
      </form>
      <>
        {/* <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button> */}

        <Modal show={show} onHide={handleClose}>
          <Modal.Body>
            {alertCategory ? (
              <div>
                <FontAwesomeIcon
                  icon={faCheck}
                  style={{
                    height: '100px',
                    width: '100px',
                    padding: '10px',
                    fontSize: 36,
                    border: '4px solid green',
                    borderRadius: '50%',
                    color: 'green',
                  }}
                />
              </div>
            ) : (
              <div style={{ display: 'relative' }}>
                <FontAwesomeIcon
                  style={{
                    height: '100px',
                    width: '100px',
                    padding: '10px',
                    fontSize: 36,
                    color: 'red',
                  }}
                  icon={faExclamationCircle}
                />
              </div>
            )}
            <div
              style={{
                color: alertCategory ? 'green' : 'red',
                textAlign: 'center',
              }}
            >
              {alertMessage}
            </div>
          </Modal.Body>
          {/* <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer> */}
        </Modal>
      </>
    </FormContainer>
  );
}

export default EmailForm;
