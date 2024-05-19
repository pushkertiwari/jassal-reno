import {  Grid, Typography } from "@mui/material";
import "./banner.scss";

export default function Banner() {
  return (
      <Grid container spacing={2} className="bannerContainer">
         <Grid item xs={12} sm={12} md={12}>
                <Typography variant="h4" gutterBottom className="heading">
                       {(" Need RENOVATION in your place ?").toUpperCase()}
                </Typography>
                <Typography variant="subtitle1" className="description">
                    Don't worry, We will guide you
                </Typography>
                <button className="btn">
                <Typography variant="subtitle2">
                    CALL  (9872) 295-3640
                </Typography>
                </button>
                
         </Grid>
      </Grid>
  );
}
