import React from "react";
import { styled } from "@mui/material/styles";
import { Container, Grid, Typography, Link, Box } from "@mui/material";
import FB from "../../assets/fb.png";
import Insta from "../../assets/insta.png";
import Youtube from "../../assets/you_tube.png";
import "./footer.scss";

const useStyles = styled((theme) => ({
  footer: {
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(4),
    marginTop: "auto",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <Box className="footer-container">
      <footer className={classes.footer}>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4} className="footerLeftContainer">
              <Typography variant="h6" gutterBottom className={"typotext"}>
                Careers
              </Typography>
              <Grid item className="leftSection">
                <Link href="#" className={"footerLink"} underline="hover">
                  <img alt="no image" aria-hidden id="jassRenoLogo" src={FB} />
                </Link>
                <Link href="#" className={"footerLink"} underline="hover">
                  <img
                    alt="no image"
                    aria-hidden
                    id="jassRenoLogo"
                    src={Insta}
                  />
                </Link>
                <Link href="#" className={"footerLink"} underline="hover">
                  <img
                    alt="no image"
                    aria-hidden
                    id="jassRenoLogo"
                    src={Youtube}
                  />
                </Link>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box className="haedingSection">
                <Typography variant="h5" gutterBottom className={"typotext"}>
                  Contact Us
                </Typography>
              </Box>

              <Typography variant="body2" gutterBottom className={"typotext"}>
                Email: contact@example.com
              </Typography>
              <Typography variant="body2" gutterBottom className={"typotext"}>
                Phone: +123-456-7890
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box className="haedingSection">
                <Typography variant="h6" gutterBottom className={"typotext"}>
                  Company
                </Typography>
              </Box>
              <Link href="#" className={"footerLink"} underline="hover">
                About Us
              </Link>
              <br />
              <Link href="#" className={"footerLink"} underline="hover">
                Our Story
              </Link>
              <br />
              <Link href="#" className={"footerLink"} underline="hover">
                Our Team
              </Link>

              {/* Add more options here */}
            </Grid>
          </Grid>
        </Container>
      </footer>
    </Box>
  );
};

export default Footer;
