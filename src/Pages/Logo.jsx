import React from "react";
import chefsLogo from "../assets/logoipsum-274.svg";

function Logo() {
  return (
    <div>
         {/* <Link to=""> */}
      <img
        style={{ width: "30px", height: "30px", cursor: "pointer" }}
        className="mx-auto mb-4"
        src={chefsLogo}
        alt="Logo"
      />
      {/* </Link> */}
    </div>
  );
}

export default Logo;
