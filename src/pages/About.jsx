import React, { useEffect } from "react";
import Header from "../components/Header";
import "./About.css";
import profileImg from "../stuffs/imgs/profile.jpg";

const About = () => {

  // Lock scroll when About loads, unlock when leaving
  useEffect(() => {
    document.body.style.overflow = "hidden";  // disable scrolling

    return () => {
      document.body.style.overflow = "auto";   // restore scroll for other pages
    };
  }, []);

  return (
    <>
      <Header />
      <div className="about-page">
        <div className="about-container">
          <div className="about-content">
            <div className="about-text">
              <h1>About Me</h1>
              <p>
                Hi! I’m Gigi, the creator of WanderDrafts. I love exploring Cebu
                and beyond, capturing moments through photos, videos, and small
                reflections. This blog is my pink corner to document all the
                travel memories I want to keep forever.
              </p>
              <p>
                WanderDrafts is all about sharing experiences, discovering new
                places, and enjoying the little moments that make every trip
                special.
              </p>
            </div>

            <div className="about-image">
              <img src={profileImg} alt="Gigi" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
