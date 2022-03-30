import React from "react";
import { Link, Route, Routes, useLocation, useParams } from "react-router-dom";
import PaginationContent from "./PaginationContent";
import "./pagination.scss";
import { useEffect } from "react/cjs/react.development";

export default function Pagination({
  changePage,
  currentPage,
  pages,
  monthParams,
}) {
  const { search } = useLocation();
  const obj = { changePage, currentPage, pages, monthParams };
  return (
    <React.Fragment>
      {pages.length >= 2 ? (
        <nav className="d-flex justify-content-center">
          <ul className="pagination">
            <li className={`page-item ${currentPage <= 1 ? "disabled" : ""}`}>
              <Link
                onClick={() => changePage(currentPage - 1)}
                to={
                  search
                    ? `page/${currentPage - 1}${search}`
                    : `page/${currentPage - 1}`
                }
                className="page-link"
              >
                <span>&laquo;</span>
              </Link>
            </li>

            {pages.map((m) => {
              return (
                <li
                  key={m}
                  className={`${m == currentPage ? " active " : " "} page-item`}
                >
                  <Link
                    onClick={() => changePage(m)}
                    to={search ? `page/${m}${search}` : `page/${m}`}
                    className="page-link "
                  >
                    {m}
                  </Link>
                </li>
              );
            })}

            <li
              className={`page-item ${
                currentPage >= pages.length ? "disabled" : ""
              }`}
            >
              <Link
                onClick={() => changePage(currentPage + 1)}
                to={
                  search
                    ? `page/${currentPage + 1}${search}`
                    : `page/${currentPage + 1}`
                }
                className="page-link"
              >
                &raquo;
              </Link>
            </li>
          </ul>
        </nav>
      ) : null}
    </React.Fragment>
  );
}
