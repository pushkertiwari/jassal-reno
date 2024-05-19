import React from "react";
import { Container, Typography, Box } from "@mui/material";

const AnimatedText = () => {

  return (
    <Container>
      <Box my={5}>
        <Typography variant="h4" component="h1" gutterBottom style={{
                width:" 639px",
                fontSize: "76px",
                color: "#4f5a65",
                lineHeight: "80px",
        }}>
        Driving your business forward
        </Typography>
        <Typography variant="p1" style={{
            width: "634px",
            fontSize: "30px",
            lineHeight: "120%",
            color: "#4f5a65",
            marginTop: "21px",
            marginBottom: "74px"
        }}>
        We are building a great Renovation Service experience for you.
        </Typography>
      </Box>
    </Container>
  );
};

export default AnimatedText;
