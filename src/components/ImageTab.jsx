import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const ImageBackdrop = styled("div")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  background: "#000",

  opacity: 0.3,
  transition: theme.transitions.create("opacity"),
}));

const ImageIconButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  display: "block",
  padding: 0,
  borderRadius: 0,
  height: "40vh",
  [theme.breakpoints.down("md")]: {
    width: "100% !important",
    height: 250,
  },
  "&:hover": {
    zIndex: 1,
  },
  "&:hover .imageBackdrop": {
    opacity: 0.15,
  },
}));

const images = [
  {
    url: "./pictures/11.jpg",
    title: "Snorkeling",
    width: "40%",
  },
  {
    url: "./pictures/99.jpg",
    title: "Massage",
    width: "20%",
  },
  {
    url: "./pictures/22.jpg",
    title: "Hiking",
    width: "40%",
  },
  {
    url: "./pictures/33.jpg",
    title: "Tour",
    width: "38%",
  },
  {
    url: "./pictures/44.jpg",
    title: "Gastronomy",
    width: "38%",
  },
  {
    url: "./pictures/55.jpg",
    title: "Shopping",
    width: "24%",
  },
  {
    url: "./pictures/66.jpg",
    title: "Walking",
    width: "40%",
  },
  {
    url: "./pictures/77.jpg",
    title: "Fitness",
    width: "20%",
  },
  {
    url: "./pictures/88.jpg",
    title: "Reading",
    width: "40%",
  },
];

export default function ImageTab() {
  return (
    <div
      className="imageBackdrop"
      style={{
        backgroundColor: "#ede9e5",
      }}
    >
      <Container component="section" sx={{ mt: 8, mb: 4 }}>
        <br />
        <br />

        <Typography variant="h4" marked="center" align="center" component="h2">
          Tekemiäni kynsiä
        </Typography>

        <Box sx={{ mt: 3, display: "flex", flexWrap: "wrap" }}>
          {images.map((image) => (
            <ImageIconButton
              key={image.title}
              style={{
                width: image.width,
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  top: 0,
                  bottom: 0,
                  backgroundSize: "cover",
                  backgroundPosition: "center 40%",
                  backgroundImage: `url(${image.url})`,
                }}
              />
              <ImageBackdrop className="imageBackdrop" />
            </ImageIconButton>
          ))}
        </Box>
      </Container>
    </div>
  );
}
