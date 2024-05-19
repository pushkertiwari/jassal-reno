import Layout from "../layout";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
} from "@mui/material";

const AboutUs = () => {
  return (
    <Layout>
      <Container className={"root"}>
        <Typography variant="h4" component="h1" gutterBottom>
          About Us
        </Typography>
        <Typography variant="body1" paragraph>
          Welcome to our company! We are dedicated to delivering the best
          service to our customers. Our team of professionals works tirelessly
          to ensure customer satisfaction and exceptional quality in every
          project we undertake.
        </Typography>
        <Typography variant="body1">
          Are you sick of your old, outdated home? Do you need extra space for
          your family? Do you want to be proud of your home again? Well it’s
          time to renovate your home. There are many renovation projects you can
          perform in your home. The important thing is to think about a larger
          picture of your home. We know planning for a renovation or a remodel
          of any size can be frustrating and overwhelming. Allow our extensive
          experience both in design and construction to make your project
          pleasurable. We will provide you with quality renovations services,
          delivered on time and within your budget.
        </Typography>

        <Typography variant="h5" component="h2" gutterBottom>
          Our Mission
        </Typography>
        <Typography variant="body1" paragraph>
          Our mission is to innovate and lead in our industry, constantly
          improving and adapting to meet the needs of our clients and the
          market. Driven by a professional general contractors team that
          includes: architects, builders, contractors, general contractors,
          electricians, plumbers and painters, we are well placed to handle your
          project no matter the size .We have completed the most demanding home
          remodeling projects. Close communication with our clients is the key
          to our success. We make sure our clients are updated on the latest
          project status. Our consultants are on hand and available to answer
          all your questions. Your suggestions and ideas are always welcome.
        </Typography>

        <Typography variant="h5" component="h2" gutterBottom>
          Meet Our Team
        </Typography>
        <Grid container spacing={4} style={{marginBottom: '5%'}}>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={"card"}>
              <CardContent className={"teamMember"}>
                <Avatar
                  src="https://via.placeholder.com/150"
                  alt="Team Member Name"
                  className={"avatar"}
                />
                <Typography variant="h6" component="h3">
                  Tejinder Pal Singh
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  CEO
                </Typography>
                <Typography variant="body1">
                  Tejinder has over 7 years of experience in the industry and leads
                  our company with a vision for the future.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={"card"}>
              <CardContent className={"teamMember"}>
                <Avatar
                  src="https://via.placeholder.com/150"
                  alt="Team Member Name"
                  className={"avatar"}
                />
                <Typography variant="h6" component="h3">
                  Jane Smith
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  CTO
                </Typography>
                <Typography variant="body1">
                  Jane is the mastermind behind our technology and innovation,
                  ensuring we stay ahead of the curve.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          {/* Add more team members as needed */}
        </Grid>
      </Container>
    </Layout>
  );
};

export default AboutUs;
