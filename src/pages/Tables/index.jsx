import React from "react";
import AuthorTable from "../../components/Tables/AuthorTable";
import ProjectTable from "../../components/Tables/ProjectTable";
import Footer from "../../components/Footer";
import { useEffect } from "react";

export default () => {
  return (
    <div>
      <AuthorTable />
      <ProjectTable />
      <Footer />
    </div>
  );
};
