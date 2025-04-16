// pages/ProductsPage.tsx
import { useEffect, useState } from "react";
import { Container, Typography, Box } from "@mui/material";
import ProductCard from "../components/ProductCard";
import { Product } from "../types";
import MainLayout from "../layouts/MainLayout";

const ProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  const handleDelete = (id: number) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <MainLayout>
      <Container sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Products
        </Typography>

        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent="space-between"
          gap={3}
        >
          {products.map((product) => (
            <Box
              key={product.id}
              sx={{
                flex: "1 1 calc(33.333% - 24px)",
                minWidth: "280px",
                maxWidth: "400px",
              }}
            >
              <ProductCard product={product} onDelete={handleDelete} />
            </Box>
          ))}
        </Box>
      </Container>
    </MainLayout>
  );
};

export default ProductsPage;
