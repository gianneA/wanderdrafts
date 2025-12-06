import React from "react";
import Header from "../components/Header";
import { posts } from "../data/posts";
import { Link } from "react-router-dom";
import "./Home.css";
import "../App.css";

const Home = () => {
  return (
    <>
      <Header />

      <div className="home">

        {/* HERO SECTION */}
        <section className="hero" id="home">
          <h1 className="title">WanderDrafts</h1>
          <p className="welcome-text">
            Welcome to WanderDrafts, my little pink corner of travel memories. <br />
            Here, I share the places I’ve visited in Cebu and beyond through photos, videos, and small reflections. Every trip becomes a draft of moments I want to remember and keep.
          </p>
        </section>

        {/* POSTS GRID */}
        <section className="posts" id="posts">
          {posts.map((post) => (
            <div className="post-card" key={post.id}>
              {post.video ? (
                <video
                  src={post.video}
                  className="post-media"
                  controls
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              ) : (
                <img
                  src={post.thumbnail}
                  alt={post.title}
                  className="post-media"
                />
              )}

              <div className="post-details">
                <h2>{post.title}</h2>
                <p className="meta">{post.date} · by {post.author}</p>
                <p className="excerpt">{post.content.substring(0, 150)}...</p>
                {/* Dynamically link to post page */}
                <Link to={post.path}>
                  <button className="read-btn">Read More</button>
                </Link>
              </div>

            </div>
          ))}
        </section>

      </div>
    </>
  );
};

export default Home;
