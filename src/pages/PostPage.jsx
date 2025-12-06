import React from "react";
import { useParams } from "react-router-dom";
import { posts } from "../data/posts";
import Header from "../components/Header";

const PostPage = () => {
  const { id } = useParams();
  const post = posts.find((p) => p.id === parseInt(id));

  if (!post) return <p>Post not found.</p>;

  return (
    <>
      <Header />
      <div style={{ padding: "40px", textAlign: "center" }}>
        <h1>{post.title}</h1>
        <p className="meta">{post.date} · by {post.author}</p>
        {post.video ? (
          <video src={post.video} controls autoPlay muted loop playsInline style={{ maxWidth: "90%" }} />
        ) : (
          <img src={post.thumbnail} alt={post.title} style={{ maxWidth: "90%" }} />
        )}
        <p style={{ marginTop: "20px", fontSize: "1.2rem" }}>{post.content}</p>
      </div>
    </>
  );
};

export default PostPage;
