import React from "react";
import Layout from "../layout";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import Kitech1 from '../../assets/kitchen-1.jpeg';
import kitech2 from '../../assets/kitchen-2.webp';
import Bathroom1 from '../../assets/bathroom-1.jpeg';
import Bathroom2 from '../../assets/bathroom-2.jpeg';
import celling1 from '../../assets/ceiling-1.jpeg';
import celling2 from '../../assets/ceiling-2.jpeg';
import './index.scss';


const services = [
  {
    title: "Kitchen Remodeling",
    description:
      "Transform your kitchen with modern designs and high-quality materials.",
    image: Kitech1,
  },
  {
    title: "Kitchen Remodeling",
    description:
      "Design and install custom cabinets to maximize your kitchen space and enhance its style.",
    image: kitech2,
  },
  {
    title: "Bathroom Renovation",
    description:
      "Upgrade your bathroom with new fixtures and contemporary designs.",
    image: Bathroom1
  },
  {
    title: "Bathroom Renovation",
    description:
      `Transforms existing outdated, inefficient, or uncomfortable bathrooms into beautiful 
      spaces that meet our customers' needs.`,
    image: Bathroom2
  },
  {
    title: "Basement Finishing",
    description: "Turn your basement into a livable and functional space.",
    image: celling1,
  },
  {
    title: "Home Additions",
    description: "Expand your living space with custom home additions.",
    image: celling2
  },
];

const Services = () => {

  return (
    <Layout>
      <Container className={"root"} style={{marginBottom: '5%'}}>
        <Typography variant="h4" component="h1" gutterBottom>
          Our Services
        </Typography>
        <Typography variant="body1" paragraph>
          We offer a wide range of renovation services to meet your needs. From
          kitchen remodeling to home additions, our team of experts is here to
          help you transform your home.
        </Typography>
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card className={"card"}>
                <CardMedia
                  style={{height:100, width: "100%", marginBottom: 10}}
                  image={service.image}
                  title={service.title}
                />
                <CardContent style={{ height: 140}}>
                  <Typography variant="h6" component="h2">
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Layout>
  );
};

export default Services;
