import React from 'react';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
import Divider from '../MyCustomComponents/Divider';
import Font from '../MyCustomComponents/Font';

function CardBody() {
  return (
    <div>
      <Card style={{ padding: '9px 4px 9px 4px' }}>
        <Card.Title>
          <Font fs={36} as="h1">
            Hi. i'm{' '}
            <Font fontColor="#08aeac" as="span">
              {' '}
              Reza Zeraatkar!
            </Font>
          </Font>
          <Font fs={12} fontColor="#333" as="h2" fontSpace={1}>
            MERN Stack Web Developer / Data Scientist / Stock Market Technical
            Analyst
          </Font>
        </Card.Title>
        <Divider />
        <Card.Text>
          <Font fs={14} fontSpace={1} fontWeight={500} fontColor="#212121">
            I'm a passionate Web developer pursuing new opportunities to take my
            skills into the next level.
            <br />
            <i
              style={{
                padding: 10,
                fontSize: 11,
                color: '#021533',
              }}
            >
              The key to success is failure and the key to failure is to not
              stand by!
            </i>
          </Font>
        </Card.Text>
      </Card>
      <Alert
        style={{
          backgroundColor: '#40A8A6',
          border: 'none',
          color: '#eee',
          fontSize: '12px',
          marginTop: '10px',
        }}
      >
        <Font as="span" fontSpace="1" fontColor="#fff" fontWeight={600}>
          Email:
        </Font>{' '}
        r.zeraatkar1992@gmail.com /{' '}
        <Font as="span" fontSpace="1" fontColor="#fff" fontWeight={600}>
          Phone:
        </Font>{' '}
        09354672750
      </Alert>
    </div>
  );
}

export default CardBody;
