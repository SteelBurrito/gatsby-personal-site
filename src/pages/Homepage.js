import React from "react";
import "../styles/Homepage.css";
import { CSSTransitionGroup } from "react-transition-group";
import { GoMarkGithub } from "react-icons/go";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

class Homepage extends React.Component {
  componentDidMount() {}

  render() {
    const heading = (
      <div className="heading">
        <h1>kevdev.website</h1>
        <p>
          Hi, Kevin here! Currently based in Australia, I build websites and
          useful web applications.
        </p>
        <p>
          Just finished with my studies and am open for employment! I have a few
          projects, and a resume if you're hiring.
        </p>
        <div className="footer-icons">
          <div className="icon">
            <a href="mailto:antouniokevin@gmail.com">
              <MdEmail size={40} />
            </a>
          </div>
          <div className="icon">
            <a href="https://github.com/SteelBurrito">
              <GoMarkGithub size={40} />
            </a>
          </div>
          <div className="icon">
            <a href="https://www.linkedin.com/in/antonio-kevin-972512145/">
              <FaLinkedin size={40} />
            </a>
          </div>
        </div>
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
        </CSSTransitionGroup>
      </div>
    );
  }
}

export default Homepage;
