import React, { useEffect, useState } from "react";
import { categories } from "../../util/constant";
import Styles from "./Storychip.module.css";
import all from "../../assets/alle.png";
import computer from "../../assets/computer.png";
import math from "../../assets/math.jpg";
import programming from "../../assets/programming.png";
import biology from "../../assets/bio.jpg";
import physics from "../../assets/physics.jpg";
import { getAllstory } from "../../api/story";

const Storychip = ({ filterArray, setFilterArray }) => {
  const clickHandeler = (item = null) => {
    if (!item) {
      setFilterArray([]);
      return;
    }
    if (!filterArray.includes(item)) {
      setFilterArray((prev) => [...prev, item]);
    } else {
      setFilterArray((prev) => prev.filter((chip) => chip !== item));
    }
    console.log(filterArray);
  };

  return (
    <div className={Styles.chipsContainer}>
      <div className={Styles.chipsinner}>
        <div
          onClick={() => clickHandeler(null)}
          style={{
            border: filterArray.length === 0 ? "4px solid blue" : "",
          }}
          className={Styles.chipall}
        >
          <img src={all} alt="" />
          <p style={{ zIndex: "10", position: "absolute" }}>All</p>
          <div className={Styles.glass}></div>
        </div>
        <div
          onClick={() => clickHandeler("Computer")}
          style={{
            border: filterArray.includes("Computer") ? "4px solid blue" : "",
          }}
          className={Styles.chipall}
        >
          <img src={computer} alt="" />
          <p style={{ zIndex: "10", position: "absolute" }}>Computer</p>
          <div className={Styles.glass}></div>
        </div>
        <div
          onClick={() => clickHandeler("Mathmatics")}
          style={{
            border: filterArray.includes("Mathmatics") ? "4px solid blue" : "",
          }}
          className={Styles.chipall}
        >
          <img src={math} alt="" />
          <p style={{ zIndex: "10", position: "absolute" }}>Mathmatics</p>
          <div className={Styles.glass}></div>
        </div>
        <div
          onClick={() => clickHandeler("Biology")}
          style={{
            border: filterArray.includes("Biology") ? "4px solid blue" : "",
          }}
          className={Styles.chipall}
        >
          <img src={biology} alt="" />
          <p style={{ zIndex: "10", position: "absolute" }}>Biology</p>
          <div className={Styles.glass}></div>
        </div>
        <div
          onClick={() => clickHandeler("Progamming")}
          style={{
            border: filterArray.includes("Progamming") ? "4px solid blue" : "",
          }}
          className={Styles.chipall}
        >
          <img src={programming} alt="" />
          <p style={{ zIndex: "10", position: "absolute" }}>Progamming</p>
          <div className={Styles.glass}></div>
        </div>
        <div
          onClick={() => clickHandeler("Physics")}
          style={{
            border: filterArray.includes("Physics") ? "4px solid blue" : "",
          }}
          className={Styles.chipall}
        >
          <img src={physics} alt="" />
          <p style={{ zIndex: "10", position: "absolute" }}>Physics</p>
          <div className={Styles.glass}></div>
        </div>
      </div>
    </div>
  );
};

export default Storychip;
