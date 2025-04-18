// pages/Contact.tsx
import { Container, Typography, Box, TextField, Button } from "@mui/material";

const Contact = () => (
  <Container sx={{ mt: 4, maxWidth: "sm" }}>
    <Typography variant="h4" gutterBottom>
      Contact Us
    </Typography>
    <Box
      component="form"
      noValidate
      autoComplete="off"
      sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}
    >
      <TextField label="Name" fullWidth />
      <TextField label="Email" type="email" fullWidth />
      <TextField label="Message" multiline rows={4} fullWidth />
      <Button variant="contained" size="large">
        Send Message
      </Button>
    </Box>
  </Container>
);

export default Contact;
