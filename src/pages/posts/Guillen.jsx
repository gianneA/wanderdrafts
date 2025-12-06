import React from "react";
import Header from "../../components/Header";
import guillenVideo from "../../stuffs/videos/guillen.mp4";
import G1 from "../../stuffs/imgs/G1.jpg";
import G2 from "../../stuffs/imgs/G2.jpg";
import G3 from "../../stuffs/imgs/G3.jpg";
import G4 from "../../stuffs/imgs/G4.jpg";
import "../PostPage.css";


const Guillen = () => {
  return (
    <>
      <Header />
      <div className="post-page">
        <h1 className="post-title">Scenic Glamping in Sudlon</h1>

        {/* Main Video */}
        <video
          className="post-media"
          src={guillenVideo}
          controls
          autoPlay
          muted
          loop
          style={{ margin: "30px auto", height: "500px", width: "100%", objectFit: "cover" }}
        />

        {/* Content */}
        <div className="post-content">
          <p>
            Guillen Plantaciones is a glamping resort located in Sudlon, Cebu City. The resort features A-shaped cottages, cozy tents, and an infinity pool that overlooks the Tanon Strait and Negros Island. The architecture and layout are designed to maximize views, allowing guests to fully appreciate the surrounding natural scenery.
          </p>

          <p>
            During our visit, I was struck by the panoramic landscapes and the peaceful atmosphere. The infinity pool provides an uninterrupted view of the strait, and the cottages and tents are arranged to give both privacy and scenic perspectives. Observing the environment, it is clear that the resort was designed with a focus on relaxation and aesthetic appeal.
          </p>

          <p>
            While the location and views are impressive, the activities offered at the resort felt limited. The place excels as a serene getaway and a spot for photography or quiet reflection, but it may not meet the expectations of those seeking interactive or lively entertainment. Guests looking for calm, natural beauty will find it ideal, while others looking for more dynamic experiences might find it less engaging.
          </p>

          <p>
            Overall, Guillen Plantaciones offers a beautiful, thoughtfully designed space where the main draw is the stunning scenery and peaceful environment. It is a great destination for relaxing, observing nature, and enjoying a scenic retreat, even if the entertainment options are minimal.
          </p>
        </div>

        {/* Photo Gallery */}
        <div
          className="post-gallery"
          style={{
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "20px",
            justifyItems: "center" // centers images in each column
          }}
        >
          <figure>
            <img
              src={G1}
              alt="Guillen Plantaciones View 1"
              style={{ maxWidth: "300px", width: "100%", height: "auto", borderRadius: "12px" }}
            />
            <figcaption>Main Area and Infinity Pool</figcaption>
          </figure>

          <figure>
            <img
              src={G2}
              alt="Guillen Plantaciones View 2"
              style={{ maxWidth: "300px", width: "100%", height: "auto", borderRadius: "12px" }}
            />
            <figcaption>The Pool</figcaption>
          </figure>

          <figure>
            <img
              src={G3}
              alt="Guillen Plantaciones View 3"
              style={{ maxWidth: "300px", width: "100%", height: "auto", borderRadius: "12px" }}
            />
            <figcaption>Cozy Cottages</figcaption>
          </figure>

          <figure>
            <img
              src={G4}
              alt="Guillen Plantaciones View 4"
              style={{ maxWidth: "300px", width: "100%", height: "auto", borderRadius: "12px" }}
            />
            <figcaption>Scenic Landscape Around the Resort</figcaption>
          </figure>
        </div>

      </div>
    </>
  );
};

export default Guillen;
