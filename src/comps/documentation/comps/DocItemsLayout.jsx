import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import allImages from "../utils/getAllImages.js";
import "../styles/computers.css";
import DocItems from "./DocItems.jsx";
import DocNavbar from "./DocNavbar.jsx";
import ComputerDocs from "./computer-docs.jsx";

export default function DocItemsLayout() {
  const { computers, accessories, microcontrollers } = allImages;

  return (
    <section className="bg-light">
      <div className="container">
        <DocNavbar />
        <div className="mt-5">
          <div className="row">
            <Routes>
              <Route path="*" element={<Navigate replace to="computers" />} />
              <Route
                path="/computers/*"
                element={<DocItems data={computers} />}
              >
                <Route path=":id" element={<ComputerDocs />} />
              </Route>
              <Route
                path="/accessories"
                element={<DocItems data={accessories} />}
              ></Route>
              <Route
                path="/microcontrollers"
                element={<DocItems data={microcontrollers} />}
              ></Route>
            </Routes>
          </div>
        </div>
      </div>
    </section>
  );
}
