import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Archive from "./Archive";

export default function ArchiveContainer({
  filterData,
  months,
  years,
  monthParams,
  yearParams,
}) {
  return (
    <div className="archive">
      <Routes>
        <Route
          path="archive/*"
          element={
            <Archive
              filterData={filterData}
              months={months}
              years={years}
              monthParams={monthParams}
              yearParams={yearParams}
            />
          }
        />
        <Route path=":id" element={<Navigate replace to="/not-found" />} />
      </Routes>
    </div>
  );
}
