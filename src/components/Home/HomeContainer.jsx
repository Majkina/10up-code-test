import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Loader from "../Loader/Loader";
import Error from "../Error/Error";
import Home from "./Home";

import { getUserDetails } from "../../redux/Login/selectors";
import { getPostsObject } from "../../redux/Posts/selectors";
import { getPostsFromApi } from "../../redux/Posts/effects";

const HomeContainer = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => getUserDetails(state));
  const posts = useSelector((state) => getPostsObject(state));

  useEffect(() => {
    if (posts.data.length === 0) {
      dispatch(getPostsFromApi());
    }
    /** disabling eslint hooks dependencies array to run hook only once */
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {user.username && (
        <section className="welcome logged-in">
          Welcome {user.username}!
        </section>
      )}

      {posts.loading && <Loader />}
      {posts.error && <Error />}
      {posts.data.length > 0 && <Home data={posts.data} />}
    </>
  );
};
export default HomeContainer;
