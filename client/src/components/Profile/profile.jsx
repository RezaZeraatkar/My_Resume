import React from 'react';
import Card from 'react-bootstrap/Card';

import RoundedCircleImage from '../MyCustomComponents/Image.js';
import CardBody from '../CardBody/cardBody';
import SocialIcons from '../SocialIcons/socialIcons';

import MyProfileImage from '../../images/profile.jpg';

function profile() {
  return (
    <Card
      bg="light"
      border="info"
      className="text-center"
      style={{
        marginBottom: '10px',
        height: '610px',
        zIndex: '100',
      }}
    >
      <RoundedCircleImage url={MyProfileImage} />
      <Card.Body>
        <CardBody />
        <SocialIcons />
      </Card.Body>
    </Card>
  );
}

export default profile;
