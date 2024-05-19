import Layout from "../layout";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
} from "@mui/material";

const Team = () => {
  return (
    <Layout>
      <Container className={"root"}>
        <Typography variant="h4" component="h1" gutterBottom>
          Meet our core team members
        </Typography>
        <Typography variant="body1" paragraph>
          Welcome to our company! We are dedicated to delivering the best
          service to our customers. Our team of professionals works tirelessly
          to ensure customer satisfaction and exceptional quality in every
          project we undertake.
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

export default Team;
