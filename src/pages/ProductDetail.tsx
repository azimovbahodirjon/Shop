import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Container,
  Typography,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import MainLayout from "../layouts/MainLayout";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
}

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        // API javobini Product interfeysiga moslashtirish
        setProduct({
          id: data.id,
          title: data.title,
          description: data.description,
          price: data.price,
          thumbnail: data.thumbnail,
        });
      })
      .catch((error) => console.error("Error fetching product:", error));
  }, [id]);

  if (!product) {
    return (
      <MainLayout>
        <Container>
          <Typography variant="h6">Loading...</Typography>
        </Container>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <Container sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          {product.title}
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 4,
          }}
        >
          <Box sx={{ flex: { xs: "100%", md: "50%" } }}>
            <Card>
              <CardMedia
                component="img"
                image={product.thumbnail}
                alt={product.title}
                sx={{
                  borderRadius: 2,
                  maxHeight: 400,
                  objectFit: "cover",
                  boxShadow: 3,
                }}
              />
            </Card>
          </Box>
          <Box sx={{ flex: { xs: "100%", md: "50%" } }}>
            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  {product.title}
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph>
                  {product.description}
                </Typography>
                <Typography variant="h6" color="primary">
                  ${product.price}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Container>
    </MainLayout>
  );
};

export default ProductDetail;
