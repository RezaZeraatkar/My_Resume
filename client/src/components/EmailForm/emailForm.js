import React, { useState } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import FormContainer from '../MyCustomComponents/FormContainer';

function EmailForm() {
  // For Pop Up Info
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const resetInputVals = () => {
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  const handleSubmit = e => {
    e.preventDefault();

    const messageData = {
      senderName: name.trim(),
      senderemail: email.trim(),
      senderSubject: subject.trim(),
      senderMessage: message.trim(),
    };
    // console.log(senderName, senderemail, senderSubject, senderMessage);

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
        handleShow();
        break;
      case 'clientSideError':
        handleShow();
        break;

      case 'serverSideError':
        handleShow();
        break;
      default:
        break;
    }
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit} method="POST">
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
            size="lg"
            type="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <Form.Text className="text-muted">
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
            as="textarea"
            placeholder="Message"
            rows="4"
            value={message}
            onChange={e => setMessage(e.target.value)}
          />
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
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
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
