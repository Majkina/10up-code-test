import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Loader from "../Loader/Loader";
import Error from "../Error/Error";
import About from "./About";

import { getPagesFromApi } from "../../redux/Pages/effects";
import { getPages } from "../../redux/Pages/selectors";
import { getPageBySlug } from "../../utils";
import pageBySlug from "../../constants/pageBySlug";

const AboutContainer = () => {
  const dispatch = useDispatch();
  const pages = useSelector((state) => getPages(state));
  const about = getPageBySlug(pages.data, pageBySlug.ABOUT);

  useEffect(() => {
    if (pages.data.length === 0) {
      dispatch(getPagesFromApi());
    }
    /** disabling eslint hooks dependencies array to run hook only once */
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {pages.loading && <Loader />}
      {pages.error && <Error />}
      {about && <About data={about} />}
    </>
  );
};

export default AboutContainer;
