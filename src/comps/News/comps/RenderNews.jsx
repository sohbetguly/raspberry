import React from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";

export default function RenderNews({ data, page, pageSize, changePage }) {
  useEffect(() => {
    if (pageNum) {
      changePage(pageNum);
    }
  }, []);
  const paginatePages = (page) => {
    const num = page - 1;
    const dataClone = data;
    const cloneData = [...dataClone];
    const paged = cloneData.splice(num * pageSize, pageSize);
    return paged;
  };
  const { pageNum } = useParams();

  return (
    <div className="row">
      {paginatePages(pageNum).length == 0 ? (
        <div className="text-center m-3">
          <h2>Sorry there is no news on this date</h2>
        </div>
      ) : (
        paginatePages(pageNum).map((data) => {
          return (
            <div
              key={Math.random()}
              className="col-sm-12 col-md-6 col-lg-4 col-xl-3"
            >
              <div className="d-flex news-content">
                <Link to="#">
                  <div className="icon ">
                    <div className="icon-container">
                      <img src={data.image} alt={data.title} />
                    </div>
                  </div>
                  <div className="adjust-height">
                    <div className="title-container">
                      <div className="titles">
                        <h5>{data.title}</h5>
                        <p>{data.text}</p>
                      </div>
                      <div className="comment-container">
                        <p>Ashley Whittaker - 9th Feb 2022</p>
                        <p className="comment">1 comment</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}
