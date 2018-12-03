import React from "react";
import "../styles/GlobalLayout.css";

export default ({ children }) => (
  <div className="global">
    <div className="content">{children}</div>
  </div>
);
