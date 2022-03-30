import React, { useRef } from "react";
import "./styles/news.css";
import NewsTitle from "./news-comps/newsTitle";
import NewsLeftCard from "./news-comps/NewsLeftCard";
import NewsRightTopCard from "./news-comps/NewsRightTopCard";

function news() {
  return (
    <section className="bg-light">
      <div className="container p-5">
        <NewsTitle />
        <div className="row">
          <NewsLeftCard />
          <NewsRightTopCard />
        </div>
        <div className="div-button3">
          <a href="#" className="btn3 ">
            View All Posts
          </a>
        </div>
      </div>
    </section>
  );
}

export default news;
