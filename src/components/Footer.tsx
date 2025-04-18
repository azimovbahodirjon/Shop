import { Box, Typography, Link, Stack, Container } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const Footer = () => {
  return (
    <Box
      sx={{
        mt: 8,
        py: 5,
        background: "linear-gradient(to right, #2196f3, #21cbf3)",
        color: "#fff",
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems="center"
          spacing={3}
          sx={{ textAlign: { xs: "center", sm: "left" } }}
        >
          {/* Left - Copyright */}
          <Typography variant="body2">
            © {new Date().getFullYear()} <strong>MyShop</strong>. All rights
            reserved.
          </Typography>

          {/* Center - Navigation */}
          <Stack direction="row" spacing={3}>
            <Link
              component={RouterLink}
              to="/"
              underline="hover"
              color="inherit"
              sx={{ "&:hover": { opacity: 0.8 } }}
            >
              Home
            </Link>
            <Link
              component={RouterLink}
              to="/about"
              underline="hover"
              color="inherit"
              sx={{ "&:hover": { opacity: 0.8 } }}
            >
              About
            </Link>
            <Link
              component={RouterLink}
              to="/contact"
              underline="hover"
              color="inherit"
              sx={{ "&:hover": { opacity: 0.8 } }}
            >
              Contact
            </Link>
          </Stack>

          <Typography variant="body2">
            Built with 🔥 by <strong>MyShop Dev Team</strong>
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
