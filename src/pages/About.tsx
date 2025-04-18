import { Container, Typography } from "@mui/material";

const About = () => (
  <Container sx={{ mt: 4 }}>
    <Typography variant="h4" gutterBottom>
      About Us
    </Typography>
    <Typography variant="body1" paragraph>
      At MyShop, we're passionate about delivering the best products and
      experiences to our customers. Founded in 2024, we've grown into a
      community-driven marketplace.
    </Typography>
    <Typography variant="body1">
      Our mission is to connect you with items you love—effortlessly.
    </Typography>
  </Container>
);

export default About;
