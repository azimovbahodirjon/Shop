// pages/Home.tsx
import { Container, Typography, Box, Button } from "@mui/material";

const Home = () => (
  <Container sx={{ mt: 4 }}>
    <Typography variant="h4" gutterBottom>
      Welcome to MyShop!
    </Typography>
    <Typography variant="body1" color="text.secondary" paragraph>
      Browse our amazing collection of products tailored just for you.
    </Typography>
    <Box>
      <Button variant="contained" size="large" href="/products" sx={{ mt: 2 }}>
        Shop Now
      </Button>
    </Box>
  </Container>
);

export default Home;
