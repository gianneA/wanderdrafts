import React from "react";
import Header from "../../components/Header";
import LV1 from "../../stuffs/videos/LV1.mp4"; // video next to photo
import lavieVideo from "../../stuffs/videos/lavie.mp4"; // main video
import LV2 from "../../stuffs/imgs/LV2.jpg"; // photo
import "../PostPage.css";

const LaVie = () => {
  return (
    <>
      <Header />
      <div className="post-page">
        <h1 className="post-title">A Cozy French Escape in Cebu</h1>

        {/* MAIN VIDEO */}
        <video
          className="post-media"
          src={lavieVideo}
          controls
          autoPlay
          muted
          loop
          style={{ margin: "30px auto", height: "500px", width: "100%", objectFit: "cover" }}
        />

        {/* INTRO CONTENT */}
        <div className="post-content">
          <p>
            La Vie Parisienne in Cebu is conceptualized and run by French
            entrepreneurs who balance business with quality and style. The
            café features a boulangerie and French pastry shop, offering a wide
            variety of freshly baked French breads, pastries, and other
            delicacies. Walking into the space, you can immediately sense the
            attention to detail, from the elegant interior to the neatly
            arranged display of breads and desserts.
          </p>

          <p>
            We visited on a foggy and chilly day, which added a unique charm to
            the experience. The cold air made the cozy interior and warm drinks
            even more inviting. The mist outside created a serene, almost
            ethereal atmosphere, and looking out of the windows, you could see
            the fog gently settling over the surrounding landscape.
          </p>

          <p>
            The food was delightful, from savory pizzas to comforting pasta
            dishes. Every bite reflected the café’s dedication to French
            culinary techniques and quality ingredients. What truly stood out
            was the view. Even through the fog, the scenery was breathtaking,
            with the combination of softly lit interiors and misty surroundings
            creating a picture-perfect moment.
          </p>

          <p>
            Sitting there, sipping warm drinks, and enjoying the ambiance felt
            like a small escape to France without leaving Cebu. La Vie
            Parisienne is more than just a café. It is a space where
            architecture, cuisine, and atmosphere come together to create a
            memorable experience.
          </p>
        </div>

        {/* PHOTO + SECOND VIDEO SIDE BY SIDE */}
        <div
          className="post-gallery"
          style={{
            display: "flex",
            gap: "20px",
            justifyContent: "center",
            alignItems: "flex-start",
            marginTop: "40px",
            flexWrap: "nowrap",
          }}
        >
          {/* PHOTO */}
          <figure style={{ flex: "1 1 45%" }}>
            <img
              src={LV2}
              alt="La Vie Parisienne Café"
              style={{ width: "100%", height: "auto", borderRadius: "12px" }}
            />
            <figcaption>Cozy Corner at La Vie Parisienne</figcaption>
          </figure>

          {/* SECOND VIDEO */}
          <figure style={{ flex: "1 1 45%" }}>
            <video
              src={LV1}
              controls
              muted
              loop
              style={{ width: "100%", height: "auto", objectFit: "contain", borderRadius: "12px" }}
            />
            <figcaption>Video Walkthrough of the Café</figcaption>
          </figure>
        </div>
      </div>
    </>
  );
};

export default LaVie;
