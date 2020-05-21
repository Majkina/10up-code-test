import React from "react";

const About = ({ data }) => (
  <>
    <h1>{data.title.rendered}</h1>
    <div className="page">
      {/* Disabling eslint for next line as we are getting html from the API
      if this was a production grade app I would also sanitize the data */}
      {/* eslint-disable-next-line react/no-danger */}
      <div dangerouslySetInnerHTML={{ __html: data.content.rendered }} />
    </div>
  </>
);

export default About;
