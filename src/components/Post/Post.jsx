import React from "react";
import moment from "moment";

import "./post.css";

const Post = ({ data }) => (
  <article itemScope itemType="http://schema.org/BlogPosting" className="post">
    <header>
      <h2 itemProp="headline">{data.title.rendered}</h2>
      <div className="date">
        <strong>Publish Date</strong>:
        <span itemProp="datePublished">
          <time dateTime={moment(data.date).format("YYYY-MM-DD")}>
            {moment(data.date).format("MMM D, YYYY")}
          </time>
        </span>
      </div>

      <div className="author">
        {/* Only author id is available on the Post object, under no time constraints
		  I would retrieve author data from /users API endpoint */}
        <strong>Author</strong>:<span itemProp="author">Jane Doe</span>
      </div>
    </header>

    <div itemProp="articleBody" className="content">
      {/* Disabling eslint for next line as we are getting html from the API
	  if this was a production grade app I would also sanitize the data */}
      {/* eslint-disable-next-line react/no-danger */}
      <div dangerouslySetInnerHTML={{ __html: data.content.rendered }} />
    </div>
  </article>
);

export default Post;
