import * as React from "react";
import HeaderLayout from "./HeaderLayout";
import Typography from "@mui/material/Typography";

const backgroundImage = "./pictures/oona.jpg";

export default function Header() {
  return (
    <HeaderLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: "center",
      }}
    >
      <img
        style={{ display: "none" }}
        src={backgroundImage}
        alt="increase priority"
      />

      <Typography
        style={{
          color: "#d9d6f1",
          fontFamily: "Oooh Baby",
          textShadow: "1.2px 1.5px #000",
        }}
        fontSize={{
          lg: 230,
          md: 150,
          sm: 100,
          xs: 70,
        }}
      >
        Lillaiita
      </Typography>
      <Typography
        style={{
          color: "#d9d6f1",
          fontFamily: "Roboto",
          textShadow: "1.5px 1.5px #000",
        }}
        fontSize={{
          lg: 50,
          md: 50,
          sm: 30,
          xs: 20,
        }}
      >
        Kynsiteknikko
      </Typography>
    </HeaderLayout>
  );
}
