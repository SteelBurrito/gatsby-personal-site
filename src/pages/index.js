import React from "react";
import Navigation from "./Navigation";
import Homepage from "./Homepage";
import "../styles/GlobalLayout.css";

export default () => (
  <div className="global">
    <Navigation />
    <Homepage />
  </div>
);
