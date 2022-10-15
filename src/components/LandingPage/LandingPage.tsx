import React from "react";
import LandingPageSearch from "./LandingPageSearch/LandingPageSearch";
import MainNav from "../MainNav/MainNav";
import "./LandingPage.css";

const LandingPage: React.FC = () => {
  return (
    <div className="landing">
      <MainNav />
      <LandingPageSearch />
    </div>
  );
};

export default LandingPage;
