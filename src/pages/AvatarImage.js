import React from "react";
import avatarImage from "../../static/Biggie_Cheese.jpg";
import "../styles/AvatarImage.css";

const AvatarImage = () => {
  return (
    <div className="avatar">
      <img className="avatar-image" src={avatarImage} />
    </div>
  );
};

export default AvatarImage;
