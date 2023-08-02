import React from "react";
import Header from "../../components/Profile/Header";
import Section from "../../components/Profile/Section";
import Projects from "../../components/Profile/Projects";
import Footer from "../../components/Footer";
import { useEffect } from "react";

export default () => {
  return (
    <div>
      <Header />
      <Section />
      <Projects />
      <Footer />
    </div>
  );
};
