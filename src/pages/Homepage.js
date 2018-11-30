import React from "react";
import "../styles/Homepage.css";
import { CSSTransitionGroup } from "react-transition-group";

class Homepage extends React.Component {
  componentDidMount() {}

  render() {
    const heading = (
      <div className="heading">
        <h1>kevdev.website</h1>
        <p>Hello Kevin here! I build websites and useful web applications.</p>
        <p>
          I'm looking for employment, and am open to freelance work. I have a
          few projects, and a resume if you're hiring!
        </p>
      </div>
    );
    const footerIcons = (
      <div className="footer-icons">
        <a
          className="far fa-envelope fa-2x"
          href="mailto:antouniokevin@gmail.com"
        />
        <a
          className="fab fa-github fa-2x"
          href="https://github.com/SteelBurrito"
        />
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
          {footerIcons}
        </CSSTransitionGroup>
      </div>
    );
  }
}

export default Homepage;
