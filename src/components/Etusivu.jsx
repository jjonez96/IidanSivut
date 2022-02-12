import React from "react";
import AppFooter from "./AppFooter";
import Header from "./Header";
import InfoTab from "./InfoTab";
import ImageTab from "./ImageTab";

function Etusivu() {
  return (
    <div className="center">
      <Header />
      <InfoTab />
      <ImageTab />
      <AppFooter />
    </div>
  );
}

export default Etusivu;
