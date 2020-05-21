import React from "react";
import Post from "../Post/Post";

const Home = ({ data }) => (
  <div itemScope itemType="https://schema.org/Blog">
    {data.map((post) => (
      <Post key={post.id} data={post} />
    ))}
  </div>
);

export default Home;
