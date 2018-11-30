import React from "react";
import "../styles/Homepage.css";
import { CSSTransitionGroup } from "react-transition-group";

class Homepage extends React.Component {
  componentDidMount() {}

  render() {
    const heading = (
      <div className="heading">
        <h1>kevdev.website</h1>
        <p>Personal page by Antonio Kevin Christophorus</p>
      </div>
    );
    const menu = (
      <div className="menu">
        <p>About me</p>
        <p>Projects</p>
        <p>Contact Me</p>
      </div>
    );
    return (
      <div className="homepage">
        <CSSTransitionGroup
          transitionName="fadein"
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          {heading}
          {menu}
        </CSSTransitionGroup>
      </div>
    );
  }
}

export default Homepage;
