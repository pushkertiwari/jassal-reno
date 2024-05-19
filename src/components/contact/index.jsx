import React from "react";
import {
  Container,
  TextField,
  Button,
  Box,
  Typography,
} from "@mui/material";
import "./contact.scss";
import Layout from "../layout";

const ContactForm = () => {
  return (
    <Layout>
      <Container className={"root"}>
        <Box className={"formContainer"}>
          <Typography variant="h4" component="h1" gutterBottom>
            Submit your query
          </Typography>
          <form className={"form"} noValidate autoComplete="off" style={{width: 'fit-content'}}>
              <TextField
                variant="outlined"
                label="Name"
                fullWidth
                style={{marginBottom: 10}}
                required
              />
            <TextField
              variant="outlined"
              label="Email"
              type="email"
              style={{marginBottom: 10}}
              fullWidth
              required
            />
            <TextField
              variant="outlined"
              label="Message"
              style={{marginBottom: 10}}
              multiline
              rows={4}
              fullWidth
              required
            />
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </form>
        </Box>
      </Container>
    </Layout>
  );
};

export default ContactForm;
