import React from "react";
import AppFooter from "./AppFooter";
import ProductHero from "./ProductHero";
import ProductHowItWorks from "./ProductHowItWorks";
import ProductSmokingHero from "./ProductSmokingHero";

function Etusivu() {
  return (
    <div className="center">
      <ProductHero />
      <ProductHowItWorks />
      <ProductSmokingHero />
      <AppFooter />
    </div>
  );
}

export default Etusivu;
