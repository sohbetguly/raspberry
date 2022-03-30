import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import allImages from "../utils/importImages.js";
import image from "../images/pico.avif";
import RenderData from "./RenderData";
import "./data-items.css";

export default function DataItems() {
  return (
    <React.Fragment>
      {allImages.map((data) => {
        return (
          <RenderData
            title={data.title}
            content={data.content}
            key={data.title}
            id={data.id}
          />
        );
      })}
    </React.Fragment>
  );
}
