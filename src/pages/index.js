import React from "react";
import Navigation from "./Navigation";
import Homepage from "./Homepage";
import AvatarImage from "./AvatarImage";
import GlobalLayout from "./GlobalLayout";

export default () => (
  // <div className="global">
  //   <Navigation />
  //   <AvatarImage />
  //   <Homepage />
  // </div>
  <GlobalLayout>
    <Navigation />
    <AvatarImage />
    <Homepage />
  </GlobalLayout>
);
