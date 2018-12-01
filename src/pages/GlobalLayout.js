import React from "react";
import "../styles/GlobalLayout.css";
import "../styles/skeleton.css";

export default ({ children }) => (
  <div className="global">
    <div className="container">{children}</div>
  </div>
);
