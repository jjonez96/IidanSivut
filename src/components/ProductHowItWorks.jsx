import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const item = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  px: 8,
};

const number = {
  fontSize: 24,
  fontFamily: "default",
  color: "secondary.main",
  fontWeight: "medium",
};

const image = {
  height: 75,
  my: 4,
};

function ProductHowItWorks() {
  return (
    <Box
      style={{ backgroundColor: "#d9d6f1" }}
      component="section"
      sx={{ display: "flex", overflow: "hidden" }}
    >
      <Container
        sx={{
          mt: 10,
          mb: 5,
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          component="img"
          src="https://raw.githubusercontent.com/mui-org/material-ui/master/docs/public/static/themes/onepirate/productCurvyLines.png"
          alt="curvy lines"
          sx={{
            pointerEvents: "none",
            position: "absolute",
            top: -180,
          }}
        />
        <Typography variant="h3" marked="center" sx={{ mb: 14 }}>
          Tietoja minusta
        </Typography>
        <div>
          <Grid container spacing={5}>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}></Box>
                <Box
                  component="img"
                  src="https://img.icons8.com/external-victoruler-outline-victoruler/64/000000/external-nail-polish-beauty-cosmetics-victoruler-outline-victoruler.png"
                  alt="suitcase"
                  sx={image}
                />
                <Typography variant="h5" align="center">
                  Appointment every Wednesday 9am.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}></Box>
                <Box
                  component="img"
                  src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-vitaly-gorbachev/60/000000/external-nails-hygiene-vitaliy-gorbachev-lineal-vitaly-gorbachev.png"
                  alt="graph"
                  sx={image}
                />
                <Typography variant="h5" align="center">
                  First come, first served. Our offers are in limited
                  quantities, so be quick.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}></Box>
                <Box
                  component="img"
                  src="https://img.icons8.com/external-photo3ideastudio-lineal-photo3ideastudio/64/000000/external-manicure-beauty-photo3ideastudio-lineal-photo3ideastudio.png"
                  alt="clock"
                  sx={image}
                />
                <Typography variant="h5" align="center">
                  {"New offers every week. New experiences, new surprises. "}
                  {"Your Sundays will no longer be alike."}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </div>
      </Container>
    </Box>
  );
}

export default ProductHowItWorks;
