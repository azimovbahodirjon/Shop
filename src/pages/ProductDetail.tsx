import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Container,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CircularProgress,
  Fade,
  Chip,
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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct({
          id: data.id,
          title: data.title,
          description: data.description,
          price: data.price,
          thumbnail: data.thumbnail,
        });
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <MainLayout>
        <Container sx={{ mt: 10, display: "flex", justifyContent: "center" }}>
          <CircularProgress size={50} color="primary" />
        </Container>
      </MainLayout>
    );
  }

  if (!product) {
    return (
      <MainLayout>
        <Container sx={{ mt: 10 }}>
          <Typography variant="h6" color="error">
            Product not found.
          </Typography>
        </Container>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <Container sx={{ mt: 6, mb: 4 }}>
        <Fade in timeout={500}>
          <Box>
            <Typography variant="h3" fontWeight={700} gutterBottom>
              {product.title}
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                gap: 5,
                mt: 3,
              }}
            >
              <Box sx={{ flex: 1 }}>
                <Card elevation={4} sx={{ borderRadius: 3 }}>
                  <CardMedia
                    component="img"
                    image={product.thumbnail}
                    alt={product.title}
                    sx={{
                      borderRadius: 3,
                      height: 400,
                      objectFit: "cover",
                    }}
                  />
                </Card>
              </Box>

              {/* Details */}
              <Box sx={{ flex: 1 }}>
                <Card elevation={3} sx={{ borderRadius: 3 }}>
                  <CardContent>
                    <Typography
                      variant="h5"
                      fontWeight={600}
                      gutterBottom
                      sx={{ mb: 2 }}
                    >
                      Description
                    </Typography>

                    <Typography
                      variant="body1"
                      color="text.secondary"
                      sx={{ mb: 3 }}
                    >
                      {product.description}
                    </Typography>

                    <Chip
                      label={`$${product.price}`}
                      color="primary"
                      sx={{
                        fontSize: "1.2rem",
                        fontWeight: 600,
                        px: 2,
                        py: 1,
                        borderRadius: "8px",
                      }}
                    />
                  </CardContent>
                </Card>
              </Box>
            </Box>
          </Box>
        </Fade>
      </Container>
    </MainLayout>
  );
};

export default ProductDetail;
