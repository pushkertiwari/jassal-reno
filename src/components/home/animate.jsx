import React from "react";
import { Container, Typography, Box } from "@mui/material";
import { useSpring, animated } from "react-spring";

const AnimatedText = () => {
  const animationProps = useSpring({
    from: { opacity: 0, transform: "translate3d(0,40px,0)" },
    to: { opacity: 1, transform: "translate3d(0,0px,0)" },
    config: { tension: 100, friction: 26 },
    delay: 500,
  });

  const infoTexts = [
    "Transform your kitchen with modern designs and high-quality materials.",
    "Upgrade your bathroom with new fixtures and contemporary designs.",
    "Turn your basement into a livable and functional space.",
    "Expand your living space with custom home additions.",
  ];

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
