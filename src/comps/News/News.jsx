import React, { useState, useEffect, useLayoutEffect } from "react";
import { Route, Routes, useParams, useSearchParams } from "react-router-dom";
import "./news.scss";
import newData from "./utils/getData.js";
import Pagination from "./comps/Pagination.jsx";
import MainContent from "./comps/MainContent";
import ArchiveContainer from "./comps/ArchiveContainer";
import RenderNews from "./comps/RenderNews";

export default function News() {
  useEffect(() => {
    if (monthParams) {
      filterData(months.indexOf(monthParams));
    }
    sortPathname();
  }, []);
  const pageSize = 12;
  const [params] = useSearchParams();
  const monthParams = params.get("m");
  const yearParams = params.get("y");

  const sortPathname = () => {
    const { pathname } = window.location;
    const split = pathname.split("/");
    const pageIndex = split.indexOf("page");
    if (pageIndex !== -1) {
      const pageNumber = split[pageIndex + 1];
      setPage(pageNumber);
    }
  };

  const handleData = () => {
    if (monthParams) {
      const filtered = newData().filter((b) => {
        return b.date.month === monthParams;
      });
      return filtered;
    } else {
      const clone = [...newData()];
      return clone;
    }
  };
  const [data, setData] = useState(handleData());

  const pageNumber = () => {
    const { length } = data;
    const dataLength = Math.ceil(length / pageSize);
    const num = [];
    for (let i = 1; i <= dataLength; i++) {
      num.push(i);
    }
    return num;
  };
  const sizedPage = (ft) => {
    const { length } = ft;
    const dataLength = Math.ceil(length / pageSize);
    const num = [];
    for (let i = 1; i <= dataLength; i++) {
      num.push(i);
    }
    setPages(num);
  };
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(pageNumber());

  const filterData = (a) => {
    const filtered = newData().filter((b) => {
      return b.date.month === a;
    });
    setData(filtered);
    sizedPage(filtered);
    setPage(1);
  };

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const years = [
    2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022,
  ];

  const resetData = () => {
    setData(handleData());
    sizedPage(newData());
    setData(newData());
    setPage(1);
  };
  const changePage = (p) => {
    setPage(p);
    setPages(pageNumber());
  };

  return (
    <div className="container">
      <MainContent
        filterData={filterData}
        resetData={resetData}
        changePage={changePage}
      />
      <ArchiveContainer
        filterData={filterData}
        months={months}
        years={years}
        monthParams={monthParams}
        yearParams={yearParams}
      />

      <Routes>
        <Route path="page/*">
          <Route
            path=":pageNum"
            element={
              <RenderNews
                data={data}
                page={page}
                pageSize={pageSize}
                changePage={changePage}
              />
            }
          />
        </Route>

        <Route
          path="/*"
          element={
            <RenderNews
              data={data}
              page={page}
              pageSize={pageSize}
              sizedPage={sizedPage}
            />
          }
        />
      </Routes>

      <Pagination
        monthParams={monthParams}
        changePage={changePage}
        currentPage={page}
        pages={pages}
      />
    </div>
  );
}
