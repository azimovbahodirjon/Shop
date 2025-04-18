import { ReactNode } from "react";
import Navbar from "../components/Navbar";
import { Box } from "@mui/material";

type Props = {
  children: ReactNode;
};

const MainLayout = ({ children }: Props) => {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Navbar />
      <Box component="main" flexGrow={1} mt={8}>
        {children}
      </Box>
    </Box>
  );
};

export default MainLayout;
