import React from "react";
import Header from "../../components/Header";
import boholVideo from "../../stuffs/videos/bohol.mp4";
import B1 from "../../stuffs/imgs/B1.jpg";
import B2 from "../../stuffs/imgs/B2.jpg";
import B3 from "../../stuffs/imgs/B3.jpg";
import B4 from "../../stuffs/imgs/B4.jpg";
import B5 from "../../stuffs/imgs/B5.jpg";
import B6 from "../../stuffs/imgs/B6.jpg";
import B7 from "../../stuffs/imgs/B7.jpg";
import "../PostPage.css";

const Bohol = () => {
  return (
    <>
      <Header />
      <div className="post-page">
        <h1 className="post-title">Collected Moments in Bohol</h1>

        {/* INTRO */}
        <div className="post-content">
          <p>
            <strong>Family Getaway & Field Documentation</strong><br />
            When we decided to visit Bohol to spend time with our dad, 
            I saw it as both a much-needed family trip and a chance to capture new stories 
            for WanderDrafts. I wanted the experience to feel genuine and reflective, 
            not just a list of places we visited. Every location had something meaningful 
            to offer, and I tried to document each moment in a way that felt personal 
            and true to my style.
          </p>
        </div>

        {/* VIDEO */}
        <video
          className="post-media"
          src={boholVideo}
          controls
          autoPlay
          muted
          loop
        />

        {/* CHOCOLATE HILLS */}
        <div className="post-content">
          <p>
            <strong>Chocolate Hills: Seeing a Geological Icon in Real Life</strong><br />
            The Chocolate Hills are natural limestone formations created over thousands of years through 
            long-term erosion and weathering processes. Each hill has a nearly uniform conical shape, 
            demonstrating the consistency of geological forces at work. From the viewpoint, the hills 
            stretch across the landscape in an organized pattern, allowing observers to see both their 
            individual forms and their collective arrangement. During the dry season, the grass 
            covering the hills turns brown, giving them the chocolate-like appearance that inspired 
            their name. Observing them in person provides a clear understanding of the natural 
            mechanisms that shaped this unique formation while also capturing the visual impact 
            of their scale and repetition.
          </p>

          <div className="post-gallery">
            <figure>
              <img src={B1} alt="Chocolate Hills Viewpoint" />
              <figcaption>Chocolate Hills Viewpoint</figcaption>
            </figure>

            <figure>
              <img src={B2} alt="Chocolate Hills Landscape" />
              <figcaption>Chocolate Hills Landscape</figcaption>
            </figure>
          </div>
        </div>

        {/* TARSIER SANCTUARY */}
        <div className="post-content">
          <p>
            <strong>Tarsier Sanctuary: Close Encounter with a Sensitive Species</strong><br />
         The Philippine tarsier is a small nocturnal primate notable for its disproportionately 
         large eyes and the ability to rotate its head nearly 180 degrees. These adaptations 
         allow it to efficiently navigate its environment at night and spot prey. Because tarsiers 
         are extremely sensitive to sound and light, visitors are required to follow strict protocols, 
         including speaking softly, avoiding flash photography, and keeping a safe distance. 
         Observing them up close provides an opportunity to study their unique physical features 
         and behaviors while also creating a gentle, memorable wildlife experience.
          </p>

          <div className="post-gallery">
            <figure>
              <img src={B3} alt="Tarsier Close-up" />
              <figcaption>Philippine Tarsier</figcaption>
            </figure>

            <figure>
              <img src={B4} alt="Sanctuary Path" />
              <figcaption>Another Tarsier Close-up</figcaption>
            </figure>
          </div>
        </div>

        {/* BACLAYON CHURCH */}
        <div className="post-content">
          <p>
            <strong>Baclayon Church: A Walk Through Coral-Stone Architecture</strong><br />
            Baclayon Church is one of the oldest churches in the Philippines, 
            constructed with coral stones bonded using egg-based mortar, 
            a technique reflecting early Spanish engineering. Inside, 
            the walls are remarkably thick, and the structural design has 
            been carefully preserved over centuries. The texture of the coral 
            blocks is clearly visible, providing insight into the construction 
            methods of the period. Observing the church offers both an appreciation of 
            historical architecture and a tangible connection to Philippine colonial history.
          </p>

          <div className="post-gallery">
            <figure>
              <img src={B5} alt="Baclayon Church Exterior" />
              <figcaption>Baclayon Church</figcaption>
            </figure>
          </div>
        </div>

        {/* BILAR MAN-MADE FOREST */}
        <div className="post-content">
          <p>
            <strong>Bilar Man-Made Forest: Environmental Engineering in Action</strong><br />
            The Bilar Man-Made Forest is a two-kilometer reforestation project composed of 
            Mahogany trees planted in uniform spacing. 
            The systematic planting and ongoing maintenance have resulted in a 
            dense and symmetrical forest. Upon entering the area, the temperature 
            noticeably drops, demonstrating how engineered forests can influence their microclimate. 
            Observing the forest provides insight into environmental planning while also offering a 
            serene and refreshing natural experience.
          </p>

          <div className="post-gallery">
            <figure>
              <img src={B6} alt="Bilar Man-Made Forest" />
              <figcaption>Bilar Man-Made Forest</figcaption>
            </figure>

            <figure>
              <img src={B7} alt="Family Visit in Bohol" />
              <figcaption>Pose with Fam</figcaption>
            </figure>
          </div>
        </div>

        {/* FAMILY VISIT */}
        <div className="post-content">
          <p>
            <strong>Family Visit: The Personal Side of the Trip</strong><br />
            After exploring the major sites, we visited my grandma, 
            who is also my grandfather’s sister and lives in Bien Unido. 
            We spent time catching up with the rest of my dad’s side of the family, 
            and it felt good to reconnect with relatives we had not seen in a while. 
            It was not just a sightseeing trip because those family moments made the 
            entire experience feel even more meaningful.
          </p>
        </div>

        {/* CONCLUSION */}
        <div className="post-content">
          <p>
            <strong>Conclusion</strong><br />
            Our Bohol trip was more than just visiting beautiful places. 
            It was a chance to slow down, enjoy time with my family, 
            and make memories that I know will stay with me. 
            From the rolling Chocolate Hills to the quiet moments with my relatives, 
            every experience reminded me how travel can connect you to both the world 
            and the people you love. Writing about it for WanderDrafts lets me relive 
            those moments and share not just the sights, but the feelings that made this 
            trip truly special.
          </p>
        </div>
      </div>
    </>
  );
};

export default Bohol;
