import React from "react";
import { NavLink } from "react-router-dom";
// @ts-ignore
import banner from "../images/banner.jpg";
// @ts-ignore
import integration from "../images/integrations.jpg";
// @ts-ignore
import amazon from "../images/amazon.jpg";
// @ts-ignore
import northern from "../images/northern.jpg";
// @ts-ignore
import google from "../images/google.jpg";
// @ts-ignore
import skrill from "../images/skrill.jpg";
import "../css/main.css";

const Home = () => {
  return (
    <main>
      <article>
        <div>
          <h2 className="main-heading">
            Don't worry. <br />
            We are here for every solution.
          </h2>
          <p className="main-para">
            Bushwick meh Blue Bottle pork belly mustache skateboard 3 wolf moon.
            Actually beard single-origin coffee, twee 90's PBR Echo Park.
          </p>
          <div className="buttons">
            <NavLink to="/" className="start-button" target="_blank">
              Get Started
            </NavLink>
            <a
              href="https://www.youtube.com/watch?v=G2PdZnwlr4E"
              target="_blank"
              rel="noreferrer"
              className="watch-button"
            >
              <i className="fa fa-play" aria-hidden="true"></i>Watch video
            </a>
          </div>
        </div>
        <aside>
          <img src={integration} alt="integration_logo" />
          <img src={amazon} alt="amazon" />
          <img src={northern} alt="northern" />
          <img src={google} alt="google" />
          <img src={skrill} alt="skrill" />
        </aside>
      </article>
      <div className="animated-image">
        <img src={banner} alt="banner" />
      </div>
    </main>
  );
};

export default Home;
