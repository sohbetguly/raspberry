import React from "react";
import { Link, Routes, Route } from "react-router-dom";

export default function MainContent({ resetData, changePage, filterData }) {
  const today = new Date();

  const date = {
    year: today.getFullYear(),
    month: today.getMonth(),
  };

  return (
    <div className="main-content mb-5">
      <div className="row">
        <div className="col-sm-6">
          <div>
            <h1>News</h1>
            <p>Daily updates from Raspberry Pi</p>
          </div>
        </div>
        <div className="col-sm-6 news-button">
          <ul className="news-list">
            <li>
              <Link
                onClick={() => {
                  changePage(1);
                  filterData(date.month);
                }}
                to="archive"
              >
                Archive
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <Routes>
        <Route
          path="archive"
          element={
            <div className="link-container">
              <Link onClick={() => resetData()} to="/news">
                All news
              </Link>
            </div>
          }
        />
      </Routes>
    </div>
  );
}
