import React from "react";

import Title from "../global/ArticleTitleH1";
import Button from "../global/ArticleButton";

const ArticleLeft = () => {
  return (
    <article className="article-left">
      <Title classname="article-left__title" text="contact" textColor="black" />
      <div className="article-left__main-content">
        <p>
          Voluptate quis voluptate est ad exercitation excepteur consequat
          officia consectetur mollit consequat proident nulla. Magna fugiat
          fugiat dolore ad eu pariatur occaecat et commodo voluptate sit ut id.
        </p>
        <p>
          Amet voluptate ad commodo pariatur consequat quis esse tempor proident
          sit eu nulla. Pariatur excepteur proident magna tempor id adipisicing
          ullamco eu.
        </p>
        <p>
          Occaecat laborum labore sunt aliquip anim proident nulla aliquip sint
          sit laborum consequat qui deserunt. Esse proident qui ad cupidatat
          veniam.
        </p>
      </div>
    </article>
  );
};

export default ArticleLeft;
