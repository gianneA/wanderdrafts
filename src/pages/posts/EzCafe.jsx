import React from "react";
import Header from "../../components/Header";
import ezCafeVideo from "../../stuffs/videos/ezcafe.mp4";
import E1 from "../../stuffs/imgs/E1.jpg";
import E2 from "../../stuffs/imgs/E2.jpg";
import E3 from "../../stuffs/imgs/E3.jpg";
import "../PostPage.css";

const EzCafe = () => {
  return (
    <>
      <Header />
      <div className="post-page">
        <h1 className="post-title">Coffee and Cocoa with a View</h1>

        {/* INTRO */}
        <div className="post-content">
          <p>
            During our visit to Tabunan, Cantipla II in Cebu City, I stopped by Ez Cafe to enjoy a cup of hot coffee and ordered their hot cocoa as well. 
            The café is perched in a spot with a beautiful view of the surrounding hills and greenery. Sitting there with warm drinks in hand, I could see the mist rolling over the landscape, especially when it started to rain. 
            The air turned noticeably cooler and the gentle drizzle made sipping the hot beverages even more comforting.
          </p>
        </div>

        {/* VIDEO HIGHLIGHT */}
        <video
          className="post-media"
          src={ezCafeVideo}
          controls
          autoPlay
          muted
          loop
        />

        {/* VIEWS AND DRINKS */}
        <div className="post-content">
          <p>
            The view from the café is stunning in every season. From my seat, I could observe how the clouds drift over the hills and how the rain patterns create shifting layers of mist. 
            The sound of raindrops hitting the rooftop combined with the gentle rustling of leaves created a natural, soothing rhythm. I also noticed small details like the way the moisture made the plants glisten and how the water runoff formed tiny streams along the hillside.
          </p>
          <div className="post-gallery">
            <figure>
              <img src={E1} alt="Scenic view from the café" />
              <figcaption>Scenic View from the Café</figcaption>
            </figure>
            <figure>
              <img src={E2} alt="Sipping hot coffee" />
              <figcaption>Hot Coffee Moment</figcaption>
            </figure>
            <figure>
              <img src={E3} alt="Enjoying hot cocoa" />
              <figcaption>Hot Cocoa Treat</figcaption>
            </figure>
          </div>
        </div>

        {/* CONCLUSION */}
        <div className="post-content">
          <p>
            Enjoying coffee and hot cocoa here felt like more than just a break. It was an opportunity to witness natural processes in action while appreciating the simple joys of life. Locals and other visitors seemed to enjoy the same calm, taking in the view, chatting quietly, or just relaxing. 
            This café shows how a well-chosen spot by nature can provide both comfort and perspective.
          </p>
        </div>
      </div>
    </>
  );
};

export default EzCafe;
