import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { useEffect, useLayoutEffect } from "react/cjs/react.development";

export default function PaginationContent({
  changePage,
  currentPage,
  pages,
  monthParams,
}) {
  useLayoutEffect(() => {
    if (pageNumber) {
      changePage(pageNumber);
    }
  }, []);
  const { pageNumber } = useParams();
  const { search } = useLocation();
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
                    ? `/news/page/${currentPage - 1}${search}`
                    : `/news/page/${currentPage - 1}`
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
                    to={search ? `/news/page/${m}${search}` : `/news/page/${m}`}
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
                    ? `/news/page/${currentPage + 1}${search}`
                    : `/news/page/${currentPage + 1}`
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
