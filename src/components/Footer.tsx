// components/Footer.tsx
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ mt: 5, py: 3, textAlign: "center", bgcolor: "#f5f5f5" }}>
      <Typography variant="body2" color="text.secondary">
        © {new Date().getFullYear()} MyShop. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
