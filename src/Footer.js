import { useState, useEffect } from "react";
import React from "react";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="footer">
      <h4>Copyright &#169; {year} </h4>
    </div>
  );
}

export default Footer;
