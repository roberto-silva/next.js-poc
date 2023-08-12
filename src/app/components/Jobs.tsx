import Link from "next/link";
import React from "react";
import style from "../styles/jobs.module.css"

const Jobs = () => {

  return (
    <div className={style.jobsContainer}>
      <div className={style.card}>
        <h1>It`Ready</h1>
        <p>Its&apos;s Ready Application made with Spring Boot and
          Angular e Ionic to manage services.</p>
      </div>

      <div className={style.card}>
        <h1>MyfoodRT</h1>
        <p>Applied Engineering discipline project, it is a website for selling food.</p>
      </div>
    </div>
  );
};

export default Jobs;