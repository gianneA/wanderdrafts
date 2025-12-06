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
            During our trip to Toledo City, we visited a family friend who lives right by the sea.
            At first, we just relaxed and watched the waves, letting the calm rhythm of the water
            set the pace for the afternoon. The coastline was simple yet picturesque, with gentle
            waves lapping at the shore and a light breeze carrying the salty scent of the sea.
          </p>

          <p>
            Eventually, we decided to take a swim. The water was cold but refreshing and immediately
            felt rejuvenating. Swimming along the shallow shore, I noticed how the sunlight reflected
            on the rippling water, creating sparkling patterns that danced across the sand.
          </p>

          <p>
            Later, we enjoyed grilled food while observing local activities. Many residents were also
            spending time by the coast. Some were swimming, others chatting, and some just relaxing
            by the water. It was fascinating to see how the community uses the shoreline for both
            leisure and social interaction. The experience was a blend of simple enjoyment, natural
            beauty, and a glimpse into local coastal life.
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
