import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  IconButton,
  CardActionArea,
  Box,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DeleteIcon from "@mui/icons-material/Delete";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Product } from "../types";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

type Props = {
  product: Product;
  onDelete?: (id: number) => void;
};

const ProductCard = ({ product, onDelete }: Props) => {
  const navigate = useNavigate();
  const [liked, setLiked] = useState(false);

  return (
    <Card
      sx={{
        maxWidth: 345,
        transition: "transform 0.3s, box-shadow 0.3s",
        "&:hover": {
          transform: "scale(1.05)", // Slightly stronger hover effect
          boxShadow: 10, // Increased box-shadow on hover
        },
        borderRadius: 3, // Rounded corners for a modern look
        boxShadow: 3, // Initial card shadow
      }}
    >
      <CardActionArea onClick={() => navigate(`/products/${product.id}`)}>
        <CardMedia
          component="img"
          height="180"
          image={product.thumbnail}
          alt={product.title}
          sx={{
            borderRadius: 3, // Rounded corners on the image
            objectFit: "cover", // Ensures image is well-cropped
          }}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" noWrap sx={{ fontWeight: 600 }}>
            {product.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" noWrap>
            {product.description}
          </Typography>
          <Typography variant="subtitle1" sx={{ mt: 1, fontWeight: 700 }}>
            ${product.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions
        disableSpacing
        sx={{ display: "flex", justifyContent: "space-between", paddingX: 2 }}
      >
        <Box display="flex" alignItems="center">
          <IconButton
            onClick={() => setLiked(!liked)}
            color={liked ? "error" : "default"}
            sx={{
              transition: "color 0.3s ease-in-out",
              "&:hover": {
                color: liked ? "red" : "rgba(0, 0, 0, 0.54)",
              },
            }}
          >
            <FavoriteIcon />
          </IconButton>
          {onDelete && (
            <IconButton
              onClick={() => onDelete?.(product.id)}
              sx={{
                transition: "color 0.3s ease-in-out",
                "&:hover": {
                  color: "rgba(255, 0, 0, 0.7)", // Delete icon hover effect
                },
              }}
            >
              <DeleteIcon />
            </IconButton>
          )}
        </Box>
        <Box display="flex" alignItems="center">
          <IconButton
            onClick={() => console.log("Add to cart:", product)}
            sx={{
              transition: "color 0.3s ease-in-out",
              "&:hover": {
                color: "green", // Green color on hover for cart icon
              },
            }}
          >
            <AddShoppingCartIcon />
          </IconButton>
        </Box>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
