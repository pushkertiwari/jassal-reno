import { Grid, Card, CardContent, Typography } from "@mui/material";
import { Fragment } from "react";
import AREAImage from "../../assets/Area_Edited.jpg";
import "./areaSection.scss";

export default function AreaSection() {
  return (
    <Fragment>
      <Grid container className="our-reach-section">
        <Grid item>
          <img src={AREAImage} alt="area image" aria-hidden />
        </Grid>
        <Grid item>
          <Card sx={{ maxWidth: 600 }} className="our-reach-card">
            <CardContent>
              <Typography className="card-title" variant="h3">
                Our reach
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                className="sub-title"
              >
                We are focused on delivering an integrated renovations
                experience to all of our customers.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
}
