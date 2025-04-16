// components/Navbar.tsx
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          MyShop
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Products
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
