import React from "react";
import Header from "../../components/Header";
import toledoVideo from "../../stuffs/videos/toledo-sea.mp4"; // import your video
import T1 from "../../stuffs/imgs/T1.jpg";
import T2 from "../../stuffs/imgs/T2.jpg";
import T3 from "../../stuffs/imgs/T3.jpg";
import T4 from "../../stuffs/imgs/T4.jpg";
import "../PostPage.css";

const Toledo = () => {
  return (
    <>
      <Header />
      <div className="post-page">
        <h1 className="post-title">Toledo City: A Family Friend by the Sea</h1>

        {/* VIDEO HIGHLIGHT */}
        <video
          className="post-media"
          src={toledoVideo}
          controls
          autoPlay
          muted
          loop
        />

        {/* INTRO */}
        <div className="post-content">
          <p>
            During our trip to Toledo City, we visited a family friend who lives near the coastline. 
            The shoreline in this area is characterized by a shallow intertidal zone where gentle 
            waves consistently break along the sandy surface. This steady movement of water helps 
            regulate temperature along the coast and produces the rhythmic sound commonly associated 
            with open shorelines.
          </p>

          <p>
            At first, we spent time observing the natural features of the area. The waves moved in a 
            continuous pattern caused by the interaction of wind friction and surface tension. The breeze 
            carried a noticeable saline odor, which is typical in coastal environments due to the evaporation 
            of seawater that leaves salt particles suspended in the air.
          </p>

          <p>
            We eventually decided to swim. The water felt cold because shallow coastal waters cool 
            quickly when exposed to steady wind flow. Sunlight created reflective patterns on the 
            surface of the water. These patterns are formed when light bends as it passes through 
            moving waves, producing shifting highlights on the sand beneath.
          </p>

          <p>
            Local community activity was also visible along the shoreline. Some residents were swimming, 
            while others were resting or preparing food. Coastal communities often use open shores for 
            social gathering and small-scale recreation because these areas provide accessible space 
            and natural ventilation. The activities we observed reflected how residents interact with 
            their environment and how the shoreline functions as both a natural resource and a communal 
            space.
          </p>

          <p>
            Overall, the visit combined simple leisure with an opportunity to observe the characteristics 
            of a coastal ecosystem. The experience showed how natural elements such as wind, water 
            movement, and sunlight shape the environment and influence how people use the area.
          </p>
        </div>

        {/* PHOTO GALLERY */}
        <div className="post-gallery">
          <figure>
            <img src={T1} alt="Family Time by the Sea" />
            <figcaption>Family Time by the Sea</figcaption>
          </figure>

          <figure>
            <img src={T2} alt="Taking a Dip" />
            <figcaption>Taking a Dip</figcaption>
          </figure>

          <figure>
            <img src={T3} alt="Waves and Coastline" />
            <figcaption>Waves and Coastline</figcaption>
          </figure>

          <figure>
            <img src={T4} alt="Sunset Serenity" />
            <figcaption>Sunset Serenity</figcaption>
          </figure>
        </div>
      </div>
    </>
  );
};

export default Toledo;
