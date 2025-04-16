// pages/ProductsPage.tsx
import { useEffect, useState } from "react";
import { Grid, Container, Typography } from "@mui/material";
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
        <Grid container spacing={4}>
          {products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4}>
              <ProductCard product={product} onDelete={handleDelete} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </MainLayout>
  );
};

export default ProductsPage;
