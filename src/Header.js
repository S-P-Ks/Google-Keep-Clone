import React from "react";
import IMG from "./open-book.png";

function Header() {
  return (
    <div className="h-center">
      <div className="header">
        <img src={IMG} alt="Keep Image" />
        <h1>Google Keep Clone</h1>
      </div>
    </div>
  );
}

export default Header;
