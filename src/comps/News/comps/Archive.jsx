import React, { useEffect, useState } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";

export default function Archive({
  filterData,
  years,
  months,
  monthParams,
  yearParams,
}) {
  const today = new Date();

  const date = {
    year: today.getFullYear(),
    month: today.getMonth(),
  };

  const [month, setMonth] = useState(
    monthParams ? months.indexOf(monthParams) : date.month
  );

  const [year, setYear] = useState(yearParams ? yearParams : date.year);

  const handleYear = (year) => {
    years.find((y) => {
      if (year == y) return setYear(y);
    });
  };

  const handleMonth = (m) => {
    months.find((a, i) => {
      if (m == a) return setMonth(i);
    });
  };

  return (
    <div className="date">
      <div>
        <p>Find posts for</p>
      </div>
      <div className="d-flex flex-row">
        <select
          className="mx-1"
          value={months[month]}
          onChange={({ target }) => handleMonth(target.value)}
        >
          {months.map((opt) => {
            return (
              <option key={opt} value={opt}>
                {opt}
              </option>
            );
          })}
        </select>

        <select
          className="mx-1"
          value={year}
          onChange={(e) => handleYear(e.target.value)}
        >
          {years.map((opt) => {
            return (
              <option key={opt} value={opt}>
                {opt}
              </option>
            );
          })}
        </select>
      </div>
      <div className="d-flex align-items-center">
        <Link
          to={`?m=${months[month]}&y=${year}`}
          onClick={() => {
            filterData(month);
          }}
        >
          Go
        </Link>
      </div>
    </div>
  );
}
