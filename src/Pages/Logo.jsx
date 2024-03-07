import React from "react";
import chefsLogo from "../assets/logoipsum-274.svg";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <div>
      <Link to="/home">
        <img
          style={{ width: "30px", height: "30px", cursor: "pointer" }}
          className="mx-auto mb-4"
          src={chefsLogo}
          alt="Logo"
        />
      </Link>
    </div>
  );
}

export default Logo;
