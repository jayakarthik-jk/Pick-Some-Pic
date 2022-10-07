import React, { useEffect, useState } from "react";
import Container from "./common/Container";
import Error from "./common/Error";
import { getPosts } from "../services/PostService";

function Explore() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(false);
  useEffect(() => {
    const oldPosts = JSON.parse(sessionStorage.getItem("posts"));
    if (oldPosts && oldPosts.length > 0) {
      setPosts(oldPosts);
    } else {
      (async () => {
        try {
          const data = await getPosts();
          sessionStorage.setItem("posts", JSON.stringify(data));
          setPosts(data);
        } catch (error) {
          setError(true);
        }
      })();
    }
  }, []);

  const handleAddMoreBtnClick = () => {
    (async () => {
      const data = await getPosts();
      const newPosts = [...posts, ...data];
      sessionStorage.setItem("posts", JSON.stringify(newPosts));
      setPosts(newPosts);
    })();
  };
  if (error) return <Error />;
  else
    return (
      <>
        <Container posts={posts} onAddMoreBtnClick={handleAddMoreBtnClick} />
      </>
    );
}

export default Explore;
