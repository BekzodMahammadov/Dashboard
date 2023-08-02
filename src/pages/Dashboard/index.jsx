import React from "react";
import Begin from "../../components/Dashboard/Begin";
import BeginTwo from "../../components/Dashboard/BeginTwo";
import Charts from "../../components/Dashboard/Charts";
import Project from "../../components/Dashboard/Project";
import Footer from "../../components/Footer";
import { useEffect } from "react";

export default () => {
  return (
    <div>
      <Begin />
      <BeginTwo />
      <Charts />
      <Project />
      <Footer />
    </div>
  );
};
