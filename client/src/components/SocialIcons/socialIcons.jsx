import React from 'react';
// import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faTelegram,
  faTwitter,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { Link, Div } from '../MyCustomComponents/FontAwesomeIcons';

function SocialIcons() {
  return (
    <Div>
      <Link
        href="https://www.linkedin.com/in/reza-zeraatkar-8a7b4bb4/"
        target="_blank"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </Link>
      <Link href="https://t.me/RezaZeraatkar_ON_T_V_O_S" target="_blank">
        <FontAwesomeIcon icon={faTelegram} />
      </Link>
      <Link href="https://twitter.com/RezaZeraatkar19" target="_blank">
        <FontAwesomeIcon icon={faTwitter} />
      </Link>
      <Link href="https://www.instagram.com/reza__zeraatkar/" target="_blank">
        <FontAwesomeIcon icon={faInstagram} />
      </Link>
    </Div>
  );
}

export default SocialIcons;
