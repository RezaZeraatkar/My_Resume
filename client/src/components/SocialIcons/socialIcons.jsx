import React from "react";
// import PropTypes from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTelegram,
  faTwitter,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import { Link, Div } from "../MyCustomComponents/FontAwesomeIcons";

function SocialIcons() {
  return (
    <Div>
      <Link href="https://linkedin.com">
        <FontAwesomeIcon icon={faLinkedin} />
      </Link>
      <Link href="https://telegram.org">
        <FontAwesomeIcon icon={faTelegram} />
      </Link>
      <Link href="https://twitter.com">
        <FontAwesomeIcon icon={faTwitter} />
      </Link>
      <Link href="https://instagram.com">
        <FontAwesomeIcon icon={faInstagram} />
      </Link>
    </Div>
  );
}

export default SocialIcons;
