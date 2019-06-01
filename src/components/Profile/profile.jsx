import React from "react";
import { Link } from "react-router-dom";

const Profile = () => (
  <div>
    <div className="container card white margin-bottom">
      <div>
        <p>Hi! I&apos;m Reza Zeraatkar</p>
        <b className="bold">
          Experienced IT Engineer / Webdeveloper / Data-Scientist
        </b>
        <br />
        <Link to="/myresume"> Go to my Resume! </Link>
      </div>
      <hr />
    </div>
    <div className="container card white margin-bottom">
      <div>
        <p>Hi! I&apos;m Reza Zeraatkar</p>
        <br />
        <b>Experienced IT Engineer / Webdeveloper</b>
        <br />
        <Link to="/myresume"> Go to my Resume! </Link>
      </div>
      <hr />
    </div>
    <div className="container card white margin-bottom">
      <div>
        <p>Hi! I&apos;m Reza Zeraatkar</p>
        <br />
        <b>Experienced IT Engineer / Webdeveloper</b>
        <br />
        <Link to="/myresume"> Go to my Resume! </Link>
      </div>
      <hr />
    </div>
  </div>
);

export default Profile;
