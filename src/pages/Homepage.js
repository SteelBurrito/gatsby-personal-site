import React from "react";
import "../styles/Homepage.css";
import { CSSTransitionGroup } from "react-transition-group";

class Homepage extends React.Component {
  componentDidMount() {}

  render() {
    const heading = (
      <div className="heading">
        <h1>kevdev.online</h1>
        <p>Personal page by Antonio Kevin Christophorus</p>
      </div>
    );
    return (
      <CSSTransitionGroup
        transitionName="fadein"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}
      >
        {heading}
      </CSSTransitionGroup>
    );
  }
}

export default Homepage;
