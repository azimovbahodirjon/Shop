// App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box, Typography } from "@mui/material";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import ProductsPage from "./pages/ProductsPage";
import ProductDetail from "./pages/ProductDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";

const App = () => (
  <Router>
    {/* Root flex container */}
    <Box display="flex" flexDirection="column" minHeight="100vh">
      {/* Navbar (fixed hautada) */}
      <Navbar />

      {/* Main content: bu joy kengayib, footer pastga itaradi */}
      <Box
        component="main"
        flexGrow={1}
        sx={{ mt: { xs: "64px", sm: "72px" } }} // Navbar balandligini offset qilish uchun
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          <Route
            path="*"
            element={
              <Box sx={{ textAlign: "center", py: 10 }}>
                <Typography variant="h3" gutterBottom>
                  404
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  Oops! Page not found.
                </Typography>
              </Box>
            }
          />
        </Routes>
      </Box>

      {/* Footer doim pastga yopishib turadi */}
      <Footer />
    </Box>
  </Router>
);

export default App;
