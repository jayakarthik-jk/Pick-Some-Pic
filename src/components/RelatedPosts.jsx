import React, { useEffect, useState } from "react";
import { getRelatedPosts } from "./../services/PostService";
import Placeholder from "./common/Placeholder";
import Container from "./common/Container";
import Error from "./common/Error";

function RelatedPosts({ username }) {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        const data = await getRelatedPosts(username);
        setPosts(data);
      } catch (error) {
        setError(true);
      }
    })();
  });
  if (error) return <Error />;
  if (!posts) return <Placeholder />;
  if (posts.length === 0)
    return (
      <div className="d-flex justify-content-center">
        <span>No Related Posts</span>
      </div>
    );
  return (
    <>
      <span className="fw-bold fs-4 px-5">Related Posts</span>
      <Container posts={posts} disableAddMoreBtn />
    </>
  );
}

export default RelatedPosts;
